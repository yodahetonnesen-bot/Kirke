"""Lager datafilene til bibelleseren i data/bibel/.

Bruk:
  python3 -I scripts/bibel/lag_bibeldata.py \
      --wordproject <mappe fra hent_amharisk.py> \
      --norsk1930 <json fra les_norsk1930.py> \
      --elb <mappe med noblb_usfm fra eBible> \
      --magna25 <amharic_bible.json fra github.com/magna25/amharic-bible-json> \
      --ebible-amh <mappe med amh_usfm fra eBible> \
      --ut data/bibel

Filene som lages (alle tekster er per kapittel en liste med [fra, til, tekst, ekstra?]):
  boker.json          bøkene med navn på amharisk, norsk og engelsk, og antall kapitler
  am/<id>.json        amharisk 1962. Amharisk slår ofte sammen vers (Joh 3,14-15 er ett vers),
                      og følger noen steder hebraisk nummerering; da står versene på den
                      norske plassen med den amhariske henvisningen i ekstra.ref.
                      ekstra kan også ha noter (fotnoter), mangler (finnes ikke i kilden),
                      ekstra (vers uten norsk motstykke) og kilde (hvis ikke wordproject).
  no1930/<id>.json    norsk 1930
  elb/<id>.json       En Levende Bok (bare NT)
  rettelser.json      alt som er rettet automatisk, så det kan sjekkes
"""
import argparse
import html
import json
import pathlib
import re

# (osis-id, norsk navn, adresse, engelsk navn, USFM-kode)
BOKER = [
    ("Gen", "1. Mosebok", "1-mosebok", "Genesis", "GEN"),
    ("Exod", "2. Mosebok", "2-mosebok", "Exodus", "EXO"),
    ("Lev", "3. Mosebok", "3-mosebok", "Leviticus", "LEV"),
    ("Num", "4. Mosebok", "4-mosebok", "Numbers", "NUM"),
    ("Deut", "5. Mosebok", "5-mosebok", "Deuteronomy", "DEU"),
    ("Josh", "Josva", "josva", "Joshua", "JOS"),
    ("Judg", "Dommerne", "dommerne", "Judges", "JDG"),
    ("Ruth", "Rut", "rut", "Ruth", "RUT"),
    ("1Sam", "1. Samuelsbok", "1-samuelsbok", "1 Samuel", "1SA"),
    ("2Sam", "2. Samuelsbok", "2-samuelsbok", "2 Samuel", "2SA"),
    ("1Kgs", "1. Kongebok", "1-kongebok", "1 Kings", "1KI"),
    ("2Kgs", "2. Kongebok", "2-kongebok", "2 Kings", "2KI"),
    ("1Chr", "1. Krønikebok", "1-kronikebok", "1 Chronicles", "1CH"),
    ("2Chr", "2. Krønikebok", "2-kronikebok", "2 Chronicles", "2CH"),
    ("Ezra", "Esra", "esra", "Ezra", "EZR"),
    ("Neh", "Nehemja", "nehemja", "Nehemiah", "NEH"),
    ("Esth", "Ester", "ester", "Esther", "EST"),
    ("Job", "Job", "job", "Job", "JOB"),
    ("Ps", "Salmenes bok", "salmene", "Psalms", "PSA"),
    ("Prov", "Ordspråkene", "ordsprakene", "Proverbs", "PRO"),
    ("Eccl", "Forkynneren", "forkynneren", "Ecclesiastes", "ECC"),
    ("Song", "Høysangen", "hoysangen", "Song of Songs", "SNG"),
    ("Isa", "Jesaja", "jesaja", "Isaiah", "ISA"),
    ("Jer", "Jeremia", "jeremia", "Jeremiah", "JER"),
    ("Lam", "Klagesangene", "klagesangene", "Lamentations", "LAM"),
    ("Ezek", "Esekiel", "esekiel", "Ezekiel", "EZK"),
    ("Dan", "Daniel", "daniel", "Daniel", "DAN"),
    ("Hos", "Hosea", "hosea", "Hosea", "HOS"),
    ("Joel", "Joel", "joel", "Joel", "JOL"),
    ("Amos", "Amos", "amos", "Amos", "AMO"),
    ("Obad", "Obadja", "obadja", "Obadiah", "OBA"),
    ("Jonah", "Jona", "jona", "Jonah", "JON"),
    ("Mic", "Mika", "mika", "Micah", "MIC"),
    ("Nah", "Nahum", "nahum", "Nahum", "NAM"),
    ("Hab", "Habakkuk", "habakkuk", "Habakkuk", "HAB"),
    ("Zeph", "Sefanja", "sefanja", "Zephaniah", "ZEP"),
    ("Hag", "Haggai", "haggai", "Haggai", "HAG"),
    ("Zech", "Sakarja", "sakarja", "Zechariah", "ZEC"),
    ("Mal", "Malaki", "malaki", "Malachi", "MAL"),
    ("Matt", "Matteus", "matteus", "Matthew", "MAT"),
    ("Mark", "Markus", "markus", "Mark", "MRK"),
    ("Luke", "Lukas", "lukas", "Luke", "LUK"),
    ("John", "Johannes", "johannes", "John", "JHN"),
    ("Acts", "Apostlenes gjerninger", "apostlenes-gjerninger", "Acts", "ACT"),
    ("Rom", "Romerbrevet", "romerbrevet", "Romans", "ROM"),
    ("1Cor", "1. Korinterbrev", "1-korinterbrev", "1 Corinthians", "1CO"),
    ("2Cor", "2. Korinterbrev", "2-korinterbrev", "2 Corinthians", "2CO"),
    ("Gal", "Galaterbrevet", "galaterbrevet", "Galatians", "GAL"),
    ("Eph", "Efeserbrevet", "efeserbrevet", "Ephesians", "EPH"),
    ("Phil", "Filipperbrevet", "filipperbrevet", "Philippians", "PHP"),
    ("Col", "Kolosserbrevet", "kolosserbrevet", "Colossians", "COL"),
    ("1Thess", "1. Tessalonikerbrev", "1-tessalonikerbrev", "1 Thessalonians", "1TH"),
    ("2Thess", "2. Tessalonikerbrev", "2-tessalonikerbrev", "2 Thessalonians", "2TH"),
    ("1Tim", "1. Timoteusbrev", "1-timoteusbrev", "1 Timothy", "1TI"),
    ("2Tim", "2. Timoteusbrev", "2-timoteusbrev", "2 Timothy", "2TI"),
    ("Titus", "Titusbrevet", "titusbrevet", "Titus", "TIT"),
    ("Phlm", "Filemonbrevet", "filemonbrevet", "Philemon", "PHM"),
    ("Heb", "Hebreerbrevet", "hebreerbrevet", "Hebrews", "HEB"),
    ("Jas", "Jakobs brev", "jakobs-brev", "James", "JAS"),
    ("1Pet", "1. Petersbrev", "1-petersbrev", "1 Peter", "1PE"),
    ("2Pet", "2. Petersbrev", "2-petersbrev", "2 Peter", "2PE"),
    ("1John", "1. Johannesbrev", "1-johannesbrev", "1 John", "1JN"),
    ("2John", "2. Johannesbrev", "2-johannesbrev", "2 John", "2JN"),
    ("3John", "3. Johannesbrev", "3-johannesbrev", "3 John", "3JN"),
    ("Jude", "Judas' brev", "judas-brev", "Jude", "JUD"),
    ("Rev", "Johannes' åpenbaring", "apenbaringen", "Revelation", "REV"),
]

VERSMERKE = re.compile(
    r'<!--span class="verse" id="(\d+)">[^<]*</span-->|<span class="verse" id="(\d+)">[^<]*</span>'
)

# Ord der kilden har fått feil tegn da den ble gjort om fra en gammel skrifttype til Unicode
# (labialiserte bokstaver som ቍ, ኵ og ጕ ble til latinske bokstaver). Rettet for hånd.
TEGNRETTELSER = {
    "በkWraት": "በኵራት",
    "gWdጓዶች": "ጕድጓዶች",
    "gWdጓድ": "ጕድጓድ",
    "gWroሮሽንም": "ጕሮሮሽንም",
    "gWlማሶች": "ጕልማሶች",
    "KWTር": "ቍጥር",
    "KWTaው": "ቍጣው",
    "KWTaዬ": "ቍጣዬ",
    "ርkWsvትህንም": "ርኵሰትህንም",
    "ይጠKWraል": "ይጠቍራል",
    "በkWl": "በኵል",
    "በkWrዋንም": "በኵርዋንም",
    "ተkWla": "ተኵላ",
    "ያኰበkWbaሉ": "ያኰበኵባሉ",
    "ቸkWlaችሁ": "ቸኵላችሁ",
    "የDoጥፌራ": "የጶጥፌራ",
    "ግብጽAውያንም": "ግብጻውያንም",
}

# Samme slags feil, men der riktig ord ikke er helt sikkert. Står i rapporten som «må sjekkes».
USIKRE_RETTELSER = {
    "Avረ": "ኧረ",
    "አላግጥባችvሁ": "አላግጥባችኋለሁ",
}

# Rester av fotnotemerker og annet rusk fra kilden.
RUSK = [
    re.compile(r"\s+a$"),  # fotnotemerke på slutten av verset
    re.compile(r"\s*vፕ"),
    re.compile(r"\s*q\s*ቍ@"),
    re.compile(r"\*ፍ\d+\*"),  # fotnotehenvisning inne i verset
]
FOTNOTE_PA_SLUTTEN = re.compile(r"\s+(?:q2|ፍ\d+)\s+(.+)$")
DELEMERKE = re.compile(r"\s*\[(\d+|\.\.)\]\s*")
PLASSHOLDERE = {"", "-", "–", "—", "፤", "[see v2]"}
SLUTTEGN = "።፤፥፡?!፧"


def ren_tekst(s: str) -> str:
    s = re.sub(r"<!--.*?-->", " ", s, flags=re.S)
    # Kilden bruker <<…>> som anførselstegn (2 Mos 3,14); de må ikke tas for HTML.
    s = s.replace("<<", "«").replace(">>", "» ")
    s = re.sub(r"</?[a-zA-Z!][^>]*>", " ", s)
    s = html.unescape(s)
    return re.sub(r"\s+", " ", s).strip()


def rens_vers(tekst: str, logg: list, ref: str) -> tuple[str, list[str]]:
    """Retter tegnfeil og tar fotnoter ut av verset. Gir (tekst, noter)."""
    noter = []
    for feil, riktig in TEGNRETTELSER.items():
        if feil in tekst:
            tekst = tekst.replace(feil, riktig)
            logg.append(f"{ref}: «{feil}» → «{riktig}»")
    for feil, riktig in USIKRE_RETTELSER.items():
        if feil in tekst:
            tekst = tekst.replace(feil, riktig)
            logg.append(f"{ref}: «{feil}» → «{riktig}» (usikker, må sjekkes mot trykt bibel)")
    m = FOTNOTE_PA_SLUTTEN.search(tekst)
    if m:
        noter.append(m.group(1).strip())
        tekst = tekst[: m.start()]
    for r in RUSK:
        tekst = r.sub("", tekst)
    return tekst.strip(), noter


def les_wordproject_kapittel(fil: pathlib.Path, ref: str, logg: list) -> tuple[str, list[dict]]:
    """Gir bokas amhariske navn og versene som {nr, tekst, noter} i kildens egen nummerering."""
    side = fil.read_text(encoding="utf-8")
    navn = ren_tekst(re.search(r"<h1>(.*?)</h1>", side, re.S).group(1))
    start = side.index("<!--... the Word of God:-->")
    slutt = side.index("<!--... sharper than", start)
    deler = VERSMERKE.split(side[start:slutt])
    vers: list[dict] = []
    for i in range(1, len(deler), 3):
        nr = int(deler[i] or deler[i + 1])
        tekst = ren_tekst(deler[i + 2])
        if vers and nr <= vers[-1]["nr"]:
            # Et versnummer som kommer en gang til, er en fotnote til det verset.
            mal = next((v for v in vers if v["nr"] == nr), vers[-1])
            mal["noter"].append(tekst)
            continue
        tekst, noter = rens_vers(tekst, logg, f"{ref},{nr}")
        # Vers som er gjemt inne i et annet vers, merket [14] eller [..].
        biter = DELEMERKE.split(tekst)
        vers.append({"nr": nr, "tekst": biter[0].strip(), "noter": noter})
        for j in range(1, len(biter), 2):
            neste = vers[-1]["nr"] + 1 if biter[j] == ".." else int(biter[j])
            vers.append({"nr": neste, "tekst": biter[j + 1].strip(), "noter": []})
            logg.append(f"{ref},{neste}: skjult vers skilt ut fra vers {vers[-2]['nr']}")
    rydd_ledende(vers)
    return navn, vers


def rydd_ledende(vers: list[dict]) -> None:
    """Mange vers begynner med «፤» som egentlig hører til slutten av verset før."""
    for a, b in zip(vers, vers[1:]):
        if b["tekst"].startswith("፤") and b["tekst"] not in PLASSHOLDERE:
            b["tekst"] = b["tekst"][1:].lstrip()
            if a["tekst"] and a["tekst"] not in PLASSHOLDERE and a["tekst"][-1] not in SLUTTEGN:
                a["tekst"] += "፤"
    for v in vers:
        if v["tekst"] in PLASSHOLDERE:
            v["tekst"] = ""


def til_grupper(vers: list[dict]) -> list[list]:
    """Tomme vers er slått sammen med neste vers. Gir [fra, til, tekst, ekstra?]."""
    grupper, venter = [], None
    for v in vers:
        if not v["tekst"]:
            venter = venter or v["nr"]
            continue
        g = [venter or v["nr"], v["nr"], v["tekst"]]
        if v["noter"]:
            g.append({"noter": v["noter"]})
        grupper.append(g)
        venter = None
    if venter is not None:
        # Tomme vers helt på slutten: enten flyttet til neste kapittel, slått sammen
        # bakover, eller borte i kilden. Avgjøres i rett_bok().
        grupper.append([venter, vers[-1]["nr"], "", {"plassholder": True}])
    return grupper


USFM_FJERN = [
    re.compile(r"\\f .*?\\f\*", re.S),  # fotnoter
    re.compile(r"\\x .*?\\x\*", re.S),  # kryssreferanser
]


def les_usfm(fil: pathlib.Path) -> list[list[list]]:
    """Gir kapitlene i en USFM-fil som lister med [fra, til, tekst]."""
    tekst = fil.read_text(encoding="utf-8").replace("\r", "")
    for m in USFM_FJERN:
        tekst = m.sub("", tekst)
    kapitler: list[list[list]] = []
    gjeldende = None
    for linje in tekst.split("\n"):
        linje = linje.strip()
        if not linje:
            continue
        m = re.match(r"\\c (\d+)", linje)
        if m:
            kapitler.append([])
            gjeldende = None
            continue
        m = re.match(r"\\v (\d+)(?:-(\d+))?\s*(.*)", linje)
        if m:
            fra = int(m.group(1))
            til = int(m.group(2) or fra)
            gjeldende = [fra, til, m.group(3)]
            kapitler[-1].append(gjeldende)
            continue
        merke = re.match(r"\\(\w+)\s*(.*)", linje)
        if merke and merke.group(1) in ("q1", "q2", "q3", "m", "pi", "li1", "li2", "qr", "qc", "pc") and gjeldende:
            gjeldende[2] += " " + merke.group(2)
        elif not merke and gjeldende:
            gjeldende[2] += " " + linje
    for kap in kapitler:
        for v in kap:
            v[2] = re.sub(r"\\\+?\w+\*?", "", v[2])  # tegnmerker som \qt ... \qt*
            v[2] = re.sub(r"\s+", " ", v[2]).strip()
    return kapitler


# Tomme vers på slutten av et kapittel der teksten står i verset før (sjekket for hånd).
BAKOVER = {("1Sam", 13), ("1Sam", 21), ("Jer", 11)}

# Kapitler der amharisk har vers som ikke finnes i den norske teksten, midt i kapitlet
# (Sal 14 har med versene som Paulus siterer i Rom 3,13-18, slik den greske bibelen har).
# {(bok, kapittel): {amharisk vers: norsk plass}}; None betyr egen rad etter forrige plass.
EKSTRA_VERS = {("Ps", 14): {4: None, 5: None, 6: None, 7: 4, 8: 5, 9: 6, 10: 7}}

# Høysangen: amharisk 7,1 er det norske 6,13 i en annen ordlyd; resten av kapittel 7 er forskjøvet.
FORSKJOV_FORRIGE = {("Song", 7): 1}

# Norsk 1930 har slått sammen Dan 10,18-19. {(bok, kapittel): {norsk vers: (fra, til)}}
NORSK_KART = {("Dan", 10): {18: (18, 19), 19: (20, 20), 20: (21, 21)}}


def ekstra(g: list) -> dict:
    if len(g) < 4:
        g.append({})
    return g[3]


def flytt(g: list, fra: int, til: int, kap: int, orig: tuple[int, int, int]) -> list:
    """Ny gruppe på plassen fra-til, med den amhariske henvisningen tatt vare på."""
    ny = [fra, til, g[2]] + ([dict(g[3])] if len(g) > 3 else [])
    if orig != (kap, fra, til) and "ref" not in ekstra(ny):
        nr = f"{orig[1]}" if orig[1] == orig[2] else f"{orig[1]}-{orig[2]}"
        ekstra(ny)["ref"] = f"{orig[0]}፥{nr}"
    if len(ny) > 3 and not ny[3]:
        ny.pop()
    return ny


def plassholdere(kap: list) -> int:
    return sum(g[1] - g[0] + 1 for g in kap if len(g) > 3 and g[3].get("plassholder"))


def ekte(kap: list) -> list:
    return [g for g in kap if not (len(g) > 3 and g[3].get("plassholder"))]


def siste(kap: list) -> int:
    return max((g[1] for g in ekte(kap)), default=0)


def rett_bok(osis: str, am: list[list], no: list[list], logg: list) -> None:
    """Legger den amhariske teksten på samme versplass som den norske der nummereringen er ulik."""
    for c in range(len(am) - 1):
        k, n = c + 1, len(no[c])
        her, neste = am[c], am[c + 1]
        p_her, p_neste = plassholdere(her), plassholdere(neste)
        # A: slutten av dette kapitlet står i begynnelsen av neste (hebraisk nummerering).
        if p_her and siste(neste) == len(no[c + 1]) + p_her and siste(ekte(her)) == n - p_her:
            flyttes = [g for g in ekte(neste) if g[1] <= p_her]
            am[c] = ekte(her) + [flytt(g, g[0] + n - p_her, g[1] + n - p_her, k, (k + 1, g[0], g[1])) for g in flyttes]
            am[c + 1] = [flytt(g, g[0] - p_her, g[1] - p_her, k + 1, (k + 1, g[0], g[1])) for g in ekte(neste) if g[1] > p_her] + [
                [g[0] - p_her, g[1] - p_her, g[2], dict(g[3])] for g in neste if len(g) > 3 and g[3].get("plassholder")
            ]
            logg.append(f"{osis} {k}–{k + 1}: amharisk {k + 1},1-{p_her} lagt på plass som {k},{n - p_her + 1}-{n}")
        # B: begynnelsen av neste kapittel står på slutten av dette (Job 40–41).
        elif p_neste and siste(her) == n + p_neste and siste(ekte(neste)) == len(no[c + 1]) - p_neste:
            flyttes = [g for g in ekte(her) if g[0] > n]
            am[c] = [g for g in ekte(her) if g[1] <= n]
            am[c + 1] = [flytt(g, g[0] - n, g[1] - n, k + 1, (k, g[0], g[1])) for g in flyttes] + [
                flytt(g, g[0] + p_neste, g[1] + p_neste, k + 1, (k + 1, g[0], g[1])) for g in ekte(neste)
            ]
            logg.append(f"{osis} {k}–{k + 1}: amharisk {k},{n + 1}-{n + p_neste} lagt på plass som {k + 1},1-{p_neste}")
    for (bok, kap), antall in FORSKJOV_FORRIGE.items():
        if bok != osis:
            continue
        neste = am[kap - 1]
        for g in [g for g in neste if g[1] <= antall]:
            ny = flytt(g, len(no[kap - 2]), len(no[kap - 2]), kap - 1, (kap, g[0], g[1]))
            ekstra(ny)["ekstra"] = True
            am[kap - 2].append(ny)
        am[kap - 1] = [flytt(g, g[0] - antall, g[1] - antall, kap, (kap, g[0], g[1])) for g in neste if g[1] > antall]
        logg.append(f"{osis} {kap}: amharisk {kap},1 vist som ekstra vers etter {kap - 1},{len(no[kap - 2])}")
    for (bok, kap), kart in EKSTRA_VERS.items():
        if bok != osis:
            continue
        nye, forrige = [], 0
        for g in am[kap - 1]:
            mal = kart.get(g[0], g[0] if g[0] not in kart else None)
            if g[0] in kart and kart[g[0]] is None:
                ny = flytt(g, forrige, forrige, kap, (kap, g[0], g[1]))
                ekstra(ny)["ekstra"] = True
            else:
                ny = flytt(g, mal, mal + g[1] - g[0], kap, (kap, g[0], g[1]))
                forrige = ny[1]
            nye.append(ny)
        am[kap - 1] = nye
        logg.append(f"{osis} {kap}: amhariske vers {sorted(v for v, m in kart.items() if m is None)} vist som egne rader")
    for c, kap in enumerate(am):
        for g in list(kap):
            e = g[3] if len(g) > 3 else {}
            if not e.get("plassholder"):
                continue
            del e["plassholder"]
            if (osis, c + 1) in BAKOVER:
                forrige = max((x for x in kap if x is not g and x[1] < g[0]), key=lambda x: x[1])
                forrige[1] = g[1]
                kap.remove(g)
                logg.append(f"{osis} {c + 1},{g[0]}-{g[1]}: teksten står i vers {forrige[0]} (slått sammen bakover)")
            else:
                e["mangler"] = True
        am[c] = [g[:3] if len(g) > 3 and not g[3] else g for g in kap]


def magna25_kapittel(data: dict, bok_nr: int, kap: int) -> list[list]:
    """Et kapittel fra den eldre kopien (magna25/amharic-bible-json, hentet fra wordproject i 2020).
    Der er sammenslåtte vers lagret med tom tekst på de første versene og teksten på det siste."""
    vers = data["books"][bok_nr - 1]["chapters"][kap - 1]["verses"]
    vers = [{"nr": i, "tekst": t.strip(), "noter": []} for i, t in enumerate(vers, 1)]
    rydd_ledende(vers)
    return til_grupper(vers)


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--wordproject", required=True)
    p.add_argument("--norsk1930", required=True)
    p.add_argument("--elb", required=True)
    p.add_argument("--magna25", required=True, help="amharic_bible.json fra magna25/amharic-bible-json")
    p.add_argument("--ebible-amh", required=True, help="mappe med amh_usfm fra eBible (amharisk NT)")
    p.add_argument("--ut", required=True)
    a = p.parse_args()

    ut = pathlib.Path(a.ut)
    for mappe in ("am", "no1930", "elb"):
        (ut / mappe).mkdir(parents=True, exist_ok=True)
    norsk = json.loads(pathlib.Path(a.norsk1930).read_text(encoding="utf-8"))
    # Modulen bruker KJV-oppsettet, men 1930-utgaven har noen kapitler med færre vers
    # (f.eks. Dan 10 med 20 vers). Da står det tomme plasser på slutten; de fjernes.
    for kapitler in norsk.values():
        for vers in kapitler:
            while vers and not vers[-1]:
                vers.pop()
    magna25 = json.loads(pathlib.Path(a.magna25).read_text(encoding="utf-8"))
    elb_filer = {f.name[3:6]: f for f in pathlib.Path(a.elb).glob("*.usfm")}
    ebible_filer = {f.name[3:6]: f for f in pathlib.Path(a.ebible_amh).glob("*.usfm")}
    logg: dict[str, list[str]] = {"tegn": [], "skjulte": [], "nummerering": [], "erstattet": [], "fylt": []}

    boker = []
    for nr, (osis, no_navn, adresse, en_navn, usfm) in enumerate(BOKER, start=1):
        mappe = pathlib.Path(a.wordproject) / f"{nr:02d}"
        antall = len(list(mappe.glob("*.htm")))
        am_navn, am = None, []
        tegnlogg: list[str] = []
        for k in range(1, antall + 1):
            navn, vers = les_wordproject_kapittel(mappe / f"{k}.htm", f"{no_navn} {k}", tegnlogg)
            am_navn = am_navn or navn
            am.append(til_grupper(vers))
        logg["tegn"] += [l for l in tegnlogg if "«" in l]
        logg["skjulte"] += [l for l in tegnlogg if "skjult" in l]
        # 1 Kong 21 hos wordproject er en kopi av kapittel 22; den eldre kopien har det riktige kapitlet.
        for k in range(1, antall):
            if [g[2] for g in am[k - 1][:3]] == [g[2] for g in am[k][:3]]:
                am[k - 1] = magna25_kapittel(magna25, nr, k)
                logg["erstattet"].append(f"{no_navn} {k}: kopi av kapittel {k + 1} hos wordproject, hentet fra magna25 (2020)")

        # Modulen har mellomrom foran tegn der noter er fjernet («den jeg er ;»).
        no = [
            [[v, v, re.sub(r"\s+([,;:.!?])", r"\1", t)] for v, t in enumerate(kap, 1)] for kap in norsk[osis]
        ]
        for (bok, kap), kart in NORSK_KART.items():
            if bok == osis:
                no[kap - 1] = [
                    [*kart.get(v, (v, v)), t] + ([{"ref": f"1930: {v}"}] if kart.get(v, (v, v)) != (v, v) else [])
                    for v, _, t in no[kap - 1]
                ]
        rett_bok(osis, am, [[g for g in kap] for kap in norsk[osis]], logg["nummerering"])

        # NT: vers som mangler hos wordproject, hentes fra eBible (samme oversettelse).
        if usfm in ebible_filer:
            eb = les_usfm(ebible_filer[usfm])
            for k, kap in enumerate(am, 1):
                for g in kap:
                    e = g[3] if len(g) > 3 else {}
                    if not e.get("mangler") or k > len(eb):
                        continue
                    funnet = [x for x in eb[k - 1] if x[0] >= g[0] and x[1] <= g[1] and x[2]]
                    if funnet and funnet[0][0] == g[0] and funnet[-1][1] == g[1]:
                        idx = kap.index(g)
                        kap[idx:idx + 1] = [[x[0], x[1], x[2], {"kilde": "eBible"}] for x in funnet]
                        logg["fylt"].append(f"{no_navn} {k},{g[0]}-{g[1]}: hentet fra eBible")

        (ut / "am" / f"{osis}.json").write_text(json.dumps(am, ensure_ascii=False), encoding="utf-8")
        (ut / "no1930" / f"{osis}.json").write_text(json.dumps(no, ensure_ascii=False), encoding="utf-8")
        har_elb = usfm in elb_filer
        if har_elb:
            elb = les_usfm(elb_filer[usfm])
            (ut / "elb" / f"{osis}.json").write_text(json.dumps(elb, ensure_ascii=False), encoding="utf-8")
        boker.append({
            "id": osis,
            "nr": nr,
            "testament": "gt" if nr <= 39 else "nt",
            "adresse": adresse,
            "navn": {"am": am_navn, "no": no_navn, "en": en_navn},
            "kapitler": max(antall, len(norsk[osis])),
            "tekster": ["am", "no1930"] + (["elb"] if har_elb else []),
        })
    (ut / "boker.json").write_text(json.dumps(boker, ensure_ascii=False, indent=1), encoding="utf-8")
    (ut / "rettelser.json").write_text(json.dumps(logg, ensure_ascii=False, indent=1), encoding="utf-8")
    for navn, liste in logg.items():
        print(f"{navn}: {len(liste)}")


if __name__ == "__main__":
    main()
