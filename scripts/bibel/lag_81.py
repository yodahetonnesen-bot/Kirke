"""Legger til bøkene i den etiopiske kanonen som ikke er blant de 66, og ordner alle bøkene
etter kirkens egen liste (46 bøker i GT og 35 i NT, ethiopianorthodox.org).

Kjøres etter lag_bibeldata.py, som lager de 66 bøkene:
  python3 -I scripts/bibel/lag_81.py \
      --a2000 <json-mappe fra EOTCOpenSource/bible_mobile_app (am-2000)> \
      --api <80-weahadu.json fra EOTCOpenSource/BibleAPI> \
      --web <mappe med eng-web_usfm fra eBible> \
      --norsk1887 <norsk1887.json fra les_norsk1887.py> \
      --ut data/bibel

Kilder:
  Amharisk: 2000 E.C.-utgaven av ሰማንያ አሐዱ (A2000). Baruk 1–5 bare i BibleAPI-filen.
            Bok-ID-ene i A2000 er feilmerket: «1ES» er ዕዝራ ሱቱኤል, «2ES» er ዕዝራ ካልዕ,
            «4MA» er ተግሣጽ og «BAR» er ተረፈ ባሮክ.
  Engelsk:  World English Bible (WEB, public domain) for apokryfene.
  Norsk 1887: Det Gamle Testaments apokryfiske Bøger (Det norske Bibelselskab, Christiania 1887, public domain),
            lest med OCR av les_norsk1887.py og koblet til de amhariske versene med kart_norsk1887.py
            (data/bibel/kart-no1887.json). Brukes i stedet for WEB der den finnes; vers som ikke står der
            (f.eks. den hebraiske delen av Ester), står fortsatt på engelsk (WEB), merket kilde «WEB».
  Norsk:    ተግሣጽ er Ordspråkene 25–29 og 31,10–31; den norske teksten hentes fra no1930/Prov.json.

Teksten står uendret (lisensen er CC BY-NC-ND). Tomme vers i kilden blir merket «mangler»,
vers uten nummer og vers med samme nummer blir slått sammen med verset foran (står i
rettelser-81.json). Overskrifter i kilden kommer med som ekstra.overskrifter, unntatt
kapittelmerkene («ምዕራፍ 3») og kryssreferansene. kontroller_81.py sjekker at hvert ord er med.

Nye felt i boker.json:
  nr          bokas nummer i kirkens liste; bøker som kirken teller som én, har samme nummer
  kanon       «66» (de 66), «81» (resten av den trykte 81-bokbibelen) eller «bred» (bred kanon)
  amUtgave    «1962» eller «2000» (E.C.)
  kapittelnr  kapittelnumrene når de ikke er 1, 2, 3 … (tilleggene i Daniel: 3, 13, 14)
  ulikVersdeling  kapitler der den andre kolonnen er satt side om side uten versnøkkel, eller (norsk 1887)
              har en annen versinndeling enn den amhariske
  merknad     kort norsk merknad som vises over teksten

Den andre kolonnen kan ha rader som dekker flere amhariske vers med flere vers fra kilden (blokker). Da står
versene fra kilden i ekstra.vers som [[henvisning eller null, tekst], …], og tekst er dem satt sammen.
"""
import argparse
import json
import pathlib
import re

# Kirkens liste. (nummer, id) i rekkefølge; samme nummer = bøker kirken teller som én.
GT = [
    (1, "Gen"), (2, "Exod"), (3, "Lev"), (4, "Num"), (5, "Deut"), (6, "Josh"), (7, "Judg"), (8, "Ruth"),
    (9, "1Sam"), (9, "2Sam"), (10, "1Kgs"), (10, "2Kgs"), (11, "1Chr"), (12, "2Chr"), (12, "PrMan"),
    (13, "Jub"), (14, "1En"), (15, "Ezra"), (15, "Neh"), (16, "1Esd"), (16, "2Esd"), (17, "Tob"), (18, "Jdt"),
    (19, "Esth"), (19, "EsthGr"), (20, "1Meq"), (21, "2Meq"), (21, "3Meq"), (22, "Job"), (23, "Ps"), (23, "Ps151"),
    (24, "Prov"), (25, "Tegs"), (26, "Wis"), (27, "Eccl"), (28, "Song"), (29, "Isa"),
    (30, "Jer"), (30, "Bar"), (30, "Lam"), (30, "EpJer"), (30, "4Bar"), (31, "Ezek"), (32, "Dan"), (32, "DanGr"),
    (33, "Hos"), (34, "Amos"), (35, "Mic"), (36, "Joel"), (37, "Obad"), (38, "Jonah"), (39, "Nah"), (40, "Hab"),
    (41, "Zeph"), (42, "Hag"), (43, "Zech"), (44, "Mal"), (45, "Sir"), (46, "Josip"),
]
NT = [
    (1, "Matt"), (2, "Mark"), (3, "Luke"), (4, "John"), (5, "Acts"), (6, "Rom"), (7, "1Cor"), (8, "2Cor"),
    (9, "Gal"), (10, "Eph"), (11, "Phil"), (12, "Col"), (13, "1Thess"), (14, "2Thess"), (15, "1Tim"),
    (16, "2Tim"), (17, "Titus"), (18, "Phlm"), (19, "Heb"), (20, "1Pet"), (21, "2Pet"), (22, "1John"),
    (23, "2John"), (24, "3John"), (25, "Jas"), (26, "Jude"), (27, "Rev"),
    (28, "SirTs"), (29, "Tiz"), (30, "Gits"), (31, "Abt"), (32, "Kid1"), (33, "Kid2"), (34, "Qal"), (35, "Did"),
]

# De nye bøkene. am: (kilde, bok-ID, kapitler eller None) der kilde er A2000 eller API.
# en/no: (bok-ID i WEB / osis-ID i no1930, {vårt kapittel: kildens kapittel}).
NYE = {
    "PrMan": dict(adresse="manasses-bonn", am_navn="ጸሎተ ምናሴ", no="Manasses' bønn", en="Prayer of Manasseh",
                  kanon="81", am=("A2000", "2CH", [33]), en_kilde=("MAN", {1: 1}),
                  merknad="I den amhariske bibelen står bønnen inne i 2. Krønikebok 33 (vers 14–26)."),
    "Jub": dict(adresse="jubileenes-bok", am_navn="መጽሐፈ ኩፋሌ", no="Jubileenes bok", en="Jubilees",
                kanon="81", am=("A2000", "JUB", None)),
    "1En": dict(adresse="enoks-bok", am_navn="መጽሐፈ ሄኖክ", no="Enoks bok", en="1 Enoch",
                kanon="81", am=("A2000", "ENO", None)),
    "1Esd": dict(adresse="3-esrabok", am_navn="መጽሐፈ ዕዝራ ካልዕ", no="3. Esrabok (Esra kale)", en="1 Esdras",
                 kanon="81", am=("A2000", "2ES", None), en_kilde=("1ES", None)),
    "2Esd": dict(adresse="4-esrabok", am_navn="መጽሐፈ ዕዝራ ሱቱኤል", no="4. Esrabok (Esra Sutuel)", en="2 Esdras (4 Ezra)",
                 kanon="81", am=("A2000", "1ES", None),
                 en_kilde=("2ES", {1: 3, 2: 4, 3: 5, 4: 6, 5: 7, 6: 7, 7: 8, 8: 9, 9: 10, 10: 11, 11: 12, 12: 13, 13: 14}),
                 merknad="Den engelske teksten er 2 Esdras 3–14 i WEB. Kapittel 5 og 6 her er kapittel 7 der "
                         "(7,1–69 og 7,70–140)."),
    "Tob": dict(adresse="tobit", am_navn="መጽሐፈ ጦቢት", no="Tobits bok", en="Tobit",
                kanon="81", am=("A2000", "TOB", None), en_kilde=("TOB", None)),
    "Jdt": dict(adresse="judit", am_navn="መጽሐፈ ዮዲት", no="Judits bok", en="Judith",
                kanon="81", am=("A2000", "JDT", None), en_kilde=("JDT", None)),
    "EsthGr": dict(adresse="ester-med-tilleggene", am_navn="መጽሐፈ አስቴር", no="Ester med tilleggene",
                   en="Esther (Greek)", kanon="81", am=("A2000", "EST", None), en_kilde=("ESG", {k: min(k, 10) for k in range(1, 12)}),
                   merknad="Ester slik den står i den amhariske 81-bokbibelen, med de greske tilleggene flettet inn. "
                           "WEB har hvert tillegg i ett langt vers; der står den engelske teksten ved siden av alle "
                           "de amhariske versene den svarer til."),
    "1Meq": dict(adresse="1-meqabyan", am_navn="መጽሐፈ መቃብያን ቀዳማዊ", no="1. Meqabyan", en="1 Meqabyan",
                 kanon="81", am=("A2000", "1MA", None),
                 merknad="Meqabyan er etiopiske bøker og ikke de samme som de greske Makkabeerbøkene."),
    "2Meq": dict(adresse="2-meqabyan", am_navn="መጽሐፈ መቃብያን ካልእ", no="2. Meqabyan", en="2 Meqabyan",
                 kanon="81", am=("A2000", "2MA", None)),
    "3Meq": dict(adresse="3-meqabyan", am_navn="መጽሐፈ መቃብያን ሣልስ", no="3. Meqabyan", en="3 Meqabyan",
                 kanon="81", am=("A2000", "3MA", None)),
    "Ps151": dict(adresse="salme-151", am_navn="መዝሙረ ዳዊት ፻፶፩", no="Salme 151", en="Psalm 151",
                  kanon="81", am=("A2000", "PSA", [151]), en_kilde=("PS2", {1: 1}),
                  merknad="I den amhariske bibelen er dette den siste salmen i Salmenes bok."),
    "Tegs": dict(adresse="tegsats", am_navn="መጽሐፈ ተግሣጽ", no="Formaningens bok (Tegsats)", en="Tegsats (Reproof)",
                 kanon="81", am=("A2000", "4MA", None), no_kilde=("Prov", {1: 25, 2: 26, 3: 27, 4: 28, 5: 29, 6: 31}),
                 merknad="Formaningens bok er Ordspråkene 25–29 og 31,10–31. Den norske teksten er hentet derfra (1930)."),
    "Wis": dict(adresse="visdommens-bok", am_navn="መጽሐፈ ጥበብ", no="Visdommens bok", en="Wisdom of Solomon",
                kanon="81", am=("A2000", "WIS", None), en_kilde=("WIS", None)),
    "Bar": dict(adresse="baruk", am_navn="መጽሐፈ ባሮክ", no="Baruks bok", en="Baruch",
                kanon="81", am=("API", 37, None), en_kilde=("BAR", None)),
    "EpJer": dict(adresse="jeremias-brev", am_navn="ተረፈ ኤርምያስ", no="Jeremias' brev", en="Letter of Jeremiah",
                  kanon="81", am=("A2000", "LJE", None), en_kilde=("BAR", {1: 6}),
                  merknad="I engelske bibler er Jeremias' brev kapittel 6 i Baruks bok."),
    "4Bar": dict(adresse="teref-baruk", am_navn="ተረፈ ባሮክ", no="Resten av Baruk (4. Baruk)",
                 en="Paralipomena of Jeremiah (4 Baruch)", kanon="81", am=("A2000", "BAR", None)),
    "DanGr": dict(adresse="daniel-tilleggene", am_navn="ትንቢተ ዳንኤል", no="Tilleggene i Daniel",
                  en="Additions to Daniel", kanon="81", am=("A2000", "DAN", [3, 13, 14]),
                  en_kilde=("DAG", {1: 3, 2: 13, 3: 14}), kapittelnr=[3, 13, 14],
                  merknad="Kapittel 3 med bønnen og lovsangen i ildovnen (3,24–90), Susanna (13) og "
                          "Bel og dragen (14), slik de står i den amhariske bibelen."),
    "Sir": dict(adresse="siraks-bok", am_navn="መጽሐፈ ሲራክ", no="Siraks bok", en="Sirach",
                kanon="81", am=("A2000", "SIR", None), en_kilde=("SIR", None),
                merknad="I kapittel 30–36 følger den amhariske teksten den greske rekkefølgen og WEB den latinske. "
                        "Den engelske teksten er flyttet så versene står side om side, med henvisningen til WEB."),
    "Josip": dict(adresse="josippon", am_navn="መጽሐፈ ዮሴፍ ወልደ ኮርዮን", no="Josippon (Josef ben Gorion)",
                  en="Josippon", kanon="bred", am=("A2000", "XXA", None)),
    "SirTs": dict(adresse="sirate-tsion", am_navn="መጽሐፈ ሥርዓተ ጽዮን", no="Sinodos: Sions orden (Sirate Tsion)",
                  en="Sinodos: Sirate Tsion", kanon="bred", am=("A2000", "XXG", None)),
    "Tiz": dict(adresse="tizaz", am_navn="መጽሐፈ ትእዛዝ", no="Sinodos: Befalingene (Tizaz)", en="Sinodos: Tizaz",
                kanon="bred", am=("A2000", "XXD", None)),
    "Gits": dict(adresse="gitsew", am_navn="መጽሐፈ ግጽው", no="Sinodos: Gitsew", en="Sinodos: Gitsew",
                 kanon="bred", am=("A2000", "XXF", None)),
    "Abt": dict(adresse="abtilis", am_navn="መጽሐፈ አብጥሊስ", no="Sinodos: Abtilis", en="Sinodos: Abtilis",
                kanon="bred", am=("A2000", "XXE", None)),
    "Kid1": dict(adresse="kidan-1", am_navn="መጽሐፈ ኪዳን ቀዳማዊ", no="1. Paktens bok (Kidan)", en="Book of the Covenant I",
                 kanon="bred", am=("A2000", "OTH", None)),
    "Kid2": dict(adresse="kidan-2", am_navn="መጽሐፈ ኪዳን ካልዕ", no="2. Paktens bok (Kidan)", en="Book of the Covenant II",
                 kanon="bred", am=("A2000", "LAO", None)),
    "Qal": dict(adresse="qalementos", am_navn="መጽሐፈ ቀሌምንጦስ", no="Klemens' bok (Qalementos)", en="Book of Clement",
                kanon="bred", am=("A2000", "XXB", None)),
    "Did": dict(adresse="didesqelya", am_navn="መጽሐፈ ዲድስቅልያ", no="Didaskalia (Didesqelya)", en="Didascalia",
                kanon="bred", am=("A2000", "XXC", None)),
}

# Norsk 1887 i stedet for WEB: {id: (bok i norsk1887.json, {kapittel der: kapittelnummer slik det står trykt},
# merknad)}. Versnøkkelen står i kart-no1887.json (kart_norsk1887.py).
_ULIK = "Den deler versene annerledes enn den amhariske bibelen; de norske versnumrene står med små tall."
NO1887 = {
    "PrMan": ("PrMan", {}, "I den amhariske bibelen står bønnen inne i 2. Krønikebok 33 (vers 14–26). "
                           "Den norske teksten er fra 1887."),
    "Tob": ("Tob", {}, f"Den norske teksten er fra 1887. {_ULIK}"),
    "Jdt": ("Jdt", {}, f"Den norske teksten er fra 1887. {_ULIK}"),
    "EsthGr": ("EstAdd", {}, "Ester slik den står i den amhariske 81-bokbibelen, med de greske tilleggene flettet "
                             "inn. Tilleggene står på norsk fra 1887, der de er samlet bakerst som kapittel 10–16 "
                             "(de norske versnumrene står med små tall). Resten av Ester er ikke med i 1887-utgaven "
                             "av de apokryfe bøkene og står på engelsk (WEB)."),
    "Wis": ("Wis", {}, "Den norske teksten er fra 1887."),
    "Bar": ("Bar", {}, "Den norske teksten er fra 1887."),
    "EpJer": ("EpJer", {1: 6}, "Den norske teksten er fra 1887. Der er Jeremias' brev kapittel 6 i Baruks bok."),
    "DanGr": ("DanAdd", {}, "Kapittel 3 med bønnen og lovsangen i ildovnen (3,24–90), Susanna (13) og Bel og dragen "
                            "(14), slik de står i den amhariske bibelen. Tilleggene står på norsk fra 1887; resten "
                            "av kapittel 3 står på engelsk (WEB)."),
    "Sir": ("Sir", {}, f"Den norske teksten er fra 1887. {_ULIK} I kapittel 30–36 følger den amhariske teksten den "
                       "greske rekkefølgen og 1887-utgaven den latinske; de norske versene er flyttet så de står "
                       "ved siden av de amhariske."),
}

# Bare disse versene tas med fra boka i kilden: {id: {kapittel: (fra, til)}}.
UTVALG = {"PrMan": {33: (14, 26)}}

# Versnøkler der kildene deler versene ulikt: {id: {vårt kapittel: [(am fra, am til, kildekap, fra, til)]}}.
# En bit kan også være (am fra, am til, [(kildekap, fra, til), …]) når den henter fra flere kapitler.
# Like lange biter settes vers mot vers. Ett vers mot flere settes som én rad.
# Vers som ikke står i en bit, får ingen tekst i den andre kolonnen («mangler»).
KART = {
    "EsthGr": {
        1: [(1, 18, 1, 1, 1), (19, 39, 1, 2, 22)],  # tillegg A står i WEB 1,1
        3: [(1, 12, 3, 1, 12), (13, 20, 3, 13, 13), (21, 22, 3, 14, 15)],  # tillegg B i 3,13
        5: [(1, 10, 5, 1, 1), (11, 16, 5, 2, 2), (17, 28, 5, 3, 14)],  # tillegg D i 5,1–2
        8: [(1, 12, 8, 1, 12), (13, 37, 8, 13, 13), (38, 41, 8, 14, 17)],  # tillegg E i 8,13
        10: [(1, 13, 10, 1, 13)],
        11: [(1, 1, 10, 14, 14)],  # sluttnoten
    },
    "2Esd": {5: [(1, 69, 7, 1, 69)], 6: [(1, 69, 7, 70, 140)]},
    "PrMan": {1: [(1, 1, 1, 1, 2), (2, 4, 1, 3, 5), (5, 5, 1, 6, 7), (6, 13, 1, 8, 15)]},
    "Ps151": {1: [(1, 6, 1, 1, 6), (8, 8, 1, 7, 7)]},  # amharisk 7 (steinene fra bekken) finnes ikke i WEB
    "Tegs": {6: [(1, 22, 31, 10, 31)]},
    # Amharisk følger den greske rekkefølgen i Sir 30–36, WEB den latinske (kapitlene er byttet om).
    # Kontrollert ved å lese begge tekstene.
    "Sir": {
        30: [(1, 24, 30, 1, 24), (25, 39, 33, 17, 31), (40, 40, 33, 32, 33)],
        31: [(1, 31, 34, 1, 26)],
        32: [(1, 26, 35, 1, 20)],
        33: [(1, 5, 36, 1, 5), (6, 7, 36, 6, 6), (8, 9, 36, 7, 7), (10, 13, 36, 8, 11)],
        34: [(1, 1, [(30, 25, 25), (31, 1, 1)]), (2, 30, 31, 2, 31)],
        35: [(1, 24, 32, 1, 24)],
        36: [(1, 16, 33, 1, 16), (17, 22, 36, 12, 17), (23, 31, 36, 18, 26)],
    },
}

KAPITTELMERKE = re.compile(r"^ምዕራፍ\s+\S+$")


def tekst_a2000(fil: pathlib.Path, kapitler, utvalg, logg: list, navn: str):
    """Gir [(kildekapittel, [(vers, tekst)], {vers: [overskrifter]})] fra en bok i A2000."""
    d = json.loads(fil.read_text(encoding="utf-8"))
    overskrifter: dict[tuple[int, int], list[str]] = {}
    for h in d.get("headings") or []:
        if h["kind"] == "reference" or (h["kind"] == "major" and KAPITTELMERKE.match(h["text"].strip())):
            continue
        overskrifter.setdefault((h["chapter"], h["before"]), []).append(h["text"].strip())
    ut = []
    for kap in d["chapters"]:
        n = kap["n"]
        if kapitler and n not in kapitler:
            continue
        vers = [(v["v"], v["t"]) for v in kap["verses"]]
        hode = {b: h for (k, b), h in overskrifter.items() if k == n}
        if utvalg and n in utvalg:
            fra, til = utvalg[n]
            vers = [(v - fra + 1, t) for v, t in vers if v is not None and fra <= v <= til]
            hode = {b - fra + 1: h for b, h in hode.items() if fra <= b <= til}
        ut.append((n, rydd_vers(vers, logg, f"{navn} {n}"), hode))
    return ut


def tekst_api(data: list, bok_nr: int, logg: list, navn: str):
    """Samme som tekst_a2000, men fra BibleAPI-filen (der overskriftene er seksjonstitler)."""
    bok = next(b for b in data if b["book_number"] == bok_nr)
    ut = []
    for kap in bok["chapters"]:
        vers, overskrifter = [], {}
        for s in kap["sections"]:
            if s.get("title") and s["verses"]:
                overskrifter.setdefault(s["verses"][0]["verse"], []).append(s["title"].strip())
            vers += [(v["verse"], v["text"]) for v in s["verses"]]
        ut.append((kap["chapter"], rydd_vers(vers, logg, f"{navn} {kap['chapter']}"), overskrifter))
    return ut


def rydd_vers(vers: list, logg: list, ref: str) -> list[tuple[int, str]]:
    """Vers uten nummer og vers med et nummer som er brukt før, slås sammen med verset foran."""
    ut: list[list] = []
    for nr, t in vers:
        t = (t or "").strip()
        if nr is None or (ut and nr <= ut[-1][0]):
            if not t:
                logg.append(f"{ref}: tomt vers {nr} nummer to gang fjernet (ingen tekst)")
                continue
            mal = next((v for v in ut if v[0] == nr), ut[-1]) if nr is not None else ut[-1]
            mal[1] = f"{mal[1]} {t}".strip()
            logg.append(f"{ref}: {'vers uten nummer' if nr is None else f'vers {nr} nummer to gang'} "
                        f"slått sammen med vers {mal[0]}")
            continue
        ut.append([nr, t])
    return [(v, t) for v, t in ut]


def grupper_am(vers: list[tuple[int, str]], overskrifter: dict[int, list[str]]) -> list[list]:
    """Gir [fra, til, tekst, ekstra?]. Tomme vers blir én plass merket «mangler»."""
    grupper: list[list] = []
    for v, t in vers:
        if not t and grupper and grupper[-1][2] == "" and grupper[-1][1] == v - 1:
            grupper[-1][1] = v
            continue
        grupper.append([v, v, t] + ([{"mangler": True}] if not t else []))
    for b, h in overskrifter.items():
        g = next((g for g in grupper if g[0] <= b <= g[1]), grupper[-1])
        if len(g) < 4:
            g.append({})
        g[3].setdefault("overskrifter", []).extend(h)
    return grupper


def les_usfm(fil: pathlib.Path) -> dict[int, list[tuple[int, str, list[str]]]]:
    """Kapitlene i en WEB-fil: {kapittel: [(vers, tekst, fotnoter)]}. Overskrifter (\\s) tas ikke med,
    salmeoverskriften (\\d) settes foran vers 1. Fotnotene brukes bare når verset ellers er tomt."""
    t = fil.read_text(encoding="utf-8").replace("\r", "")
    t = re.sub(r"\\x .*?\\x\*", "", t, flags=re.S)
    t = re.sub(r"\\(v|c) ", r"\n\\\1 ", t)
    kapitler: dict[int, list[list]] = {}
    kap, vers, venter = None, None, ""
    for linje in t.split("\n"):
        linje = linje.strip()
        m = re.match(r"\\(\w+)\s?(.*)", linje)
        merke, rest = (m.group(1), m.group(2)) if m else ("", linje)
        if merke in ("id", "ide", "h", "toc1", "toc2", "toc3", "mt1", "mt2", "mt3", "ip", "is1", "s1", "s2", "ms1", "cp", "rem"):
            continue
        if merke == "c":
            kap, vers = int(rest.split()[0]), None
            kapitler[kap] = []
        elif merke == "d":
            venter = rest
        elif merke == "v":
            m = re.match(r"(\d+)\s*(.*)", rest)
            vers = [int(m.group(1)), f"{venter} {m.group(2)}"]
            venter = ""
            kapitler[kap].append(vers)
        elif vers is not None and rest:
            vers[1] += " " + rest
    ut = {}
    for k, liste in kapitler.items():
        ut[k] = []
        for nr, tekst in liste:
            noter = [ren_usfm(re.sub(r"\\f[a-z]+\s*", " ", n)) for n in re.findall(r"\\f \+ (.*?)\\f\*", tekst, re.S)]
            tekst = ren_usfm(re.sub(r"\\f .*?\\f\*", "", tekst, flags=re.S))
            ut[k].append((nr, tekst, noter))
    return ut


def ren_usfm(s: str) -> str:
    s = re.sub(r"\\\+?w ([^|\\]*)\|[^\\]*\\\+?w\*", r"\1", s)
    s = re.sub(r"\\\+?[a-z0-9]+\*?", "", s)
    s = re.sub(r"\s+([,;:.!?])", r"\1", re.sub(r"\s+", " ", s))
    return s.strip()


def legg_side_om_side(antall_am: int, kilde: dict, kildekap: int, biter, ett_kapittel: bool,
                      skille: str) -> tuple[list[list], bool]:
    """Legger den andre teksten på de amhariske versplassene. Gir (grupper, ulik versdeling).
    Har den andre teksten flere vers enn amharisk, fortsetter radene etter det siste amhariske verset."""
    if biter is None:
        n = max((v[0] for v in kilde.get(kildekap, [])), default=0)
        biter = [(1, antall_am, kildekap, 1, n)] if n else []
    ulik = False
    grupper: list[list] = []

    def ref(k: int, fra: int, til: int) -> str:
        nr = f"{fra}" if fra == til else f"{fra}–{til}"
        return nr if ett_kapittel else f"{k}{skille}{nr}"

    for bit in biter:
        af, at, deler = bit if len(bit) == 3 else (bit[0], bit[1], [bit[2:]])
        vers = [v for ek, ef, et in deler for v in kilde[ek] if ef <= v[0] <= et]
        ek, ef, et = deler[0]
        na, ne = at - af + 1, len(vers)
        if ne == 1 or na == 1:
            tekst = " ".join(v[1] for v in vers if v[1])
            g = [af, at, tekst, {}]
            if ek != kildekap or ef != af or ne > 1:
                g[3]["ref"] = "; ".join(ref(*d) for d in deler)
            if not tekst:
                g[3].update({"mangler": True, **({"noter": vers[0][2]} if vers and vers[0][2] else {})})
            grupper.append(g if g[3] else g[:3])
            continue
        # Vers mot vers etter nummer; vers som WEB ikke har, blir hull (fylles under).
        ulik |= at - af != et - ef
        for nr, tekst, noter in vers:
            plass = af + nr - ef
            g = [plass, plass, tekst, {}]
            if ek != kildekap or nr != plass:
                g[3]["ref"] = ref(ek, nr, nr)
            if not tekst:
                # Verset er utelatt i WEB; fotnoten forteller hvorfor.
                g[3].update({"mangler": True, **({"noter": noter} if noter else {})})
            grupper.append(g if g[3] else g[:3])
    # Hull i versnøkkelen: amhariske vers uten motstykke.
    dekket = {v for g in grupper for v in range(g[0], g[1] + 1)}
    for v in range(1, max(dekket, default=0) + 1):
        if v not in dekket:
            grupper.append([v, v, "", {"mangler": True}])
    grupper.sort(key=lambda g: g[0])
    return grupper, ulik


def lag_no1887(id: str, kolonne_en: list, norsk: dict, kart: list, visnr: list[int]) -> tuple[list, list[int]]:
    """Den norske kolonnen (1887): blokkene fra kart-no1887.json, og WEB der den norske teksten mangler.
    Gir (kolonne, kapitler der versinndelingen er ulik)."""
    kilde, kapnavn, _ = NO1887[id]
    vers = {(int(k), int(v)): t for k, vs in norsk[kilde].items() for v, t in vs.items()}

    def henvisning(nr: str) -> str:
        k, v = map(int, nr.split(","))
        return f"{kapnavn.get(k, k)}, overskrift" if v == 0 else f"{kapnavn.get(k, k)},{v}"

    kolonne, ulike = [], []
    for k, en in enumerate(kolonne_en, 1):
        # Blokker: [fra, til, [norske vers]]; blokker som overlapper, slås sammen.
        blokker: list[list] = []
        for b in sorted((b for b in kart if b["am"][0] == k), key=lambda b: b["am"][1]):
            _, fra, til = b["am"]
            if blokker and fra <= blokker[-1][1]:
                blokker[-1][1] = max(blokker[-1][1], til)
                blokker[-1][2] += b["no"]
            else:
                blokker.append([fra, til, list(b["no"])])
        # WEB-rader som delvis overlapper en blokk, gjør blokken større (teksten er den samme).
        endret = True
        while endret:
            endret = False
            for g in en:
                for bl in blokker:
                    if g[0] <= bl[1] and g[1] >= bl[0] and (g[0] < bl[0] or g[1] > bl[1]):
                        bl[0], bl[1] = min(bl[0], g[0]), max(bl[1], g[1])
                        endret = True
            blokker.sort(key=lambda b: b[0])
            for i in range(len(blokker) - 1, 0, -1):
                if blokker[i][0] <= blokker[i - 1][1]:
                    blokker[i - 1][1] = max(blokker[i - 1][1], blokker[i][1])
                    blokker[i - 1][2] += blokker.pop(i)[2]
                    endret = True
        grupper = []
        for fra, til, nv in blokker:
            # Henvisningen vises bare når den norske nummereringen er en annen enn den amhariske.
            deler = [[henvisning(n), vers[tuple(map(int, n.split(",")))]] for n in nv]
            if len(nv) == 1 and fra == til and deler[0][0] == f"{visnr[k - 1]},{fra}":
                deler[0][0] = None
            else:
                if k not in ulike:
                    ulike.append(k)
            grupper.append([fra, til, " ".join(t for _, t in deler), {"vers": deler}])
        for g in en:
            if not any(g[0] <= bl[1] and g[1] >= bl[0] for bl in blokker):
                ekstra = dict(g[3]) if len(g) > 3 else {}
                ekstra["kilde"] = "WEB"
                grupper.append([g[0], g[1], g[2], ekstra])
        grupper.sort(key=lambda g: g[0])
        kolonne.append(grupper)
    return kolonne, ulike


def lag_engelsk(id: str, antall: list[int], enheter: dict, spes_kart: dict) -> tuple[list, list[int]]:
    """Den engelske kolonnen fra kart-engelsk.json: blokker med enheter (kanoner, vers, avsnitt) fra kilden ved
    siden av amhariske vers. Amhariske vers uten engelsk tekst blir «mangler». Hver enhet brukes nøyaktig én gang."""
    etikett = spes_kart.get("etikett", "{}")
    brukt: list[str] = []
    kolonne: list[list] = [[] for _ in antall]
    ulike: set[int] = set()
    for b in spes_kart["blokker"]:
        k, fra, til = b["am"]
        deler = [[etikett.format(r), enheter[r]] for r in b["en"]]
        if len(deler) == 1 and fra == til and b["en"][0] == f"{fra}" and len(antall) == 1:
            deler[0][0] = None  # samme nummer som det amhariske verset
        else:
            ulike.add(k)
        ekstra = {"vers": deler}
        if b.get("overskrift"):
            ekstra["overskrifter"] = [enheter[r] for r in b["overskrift"]]
        kolonne[k - 1].append([fra, til, " ".join(t for _, t in deler), ekstra])
        brukt += b["en"] + b.get("overskrift", [])
    if sorted(brukt) != sorted(enheter) or len(brukt) != len(set(brukt)):
        raise SystemExit(f"{id}: kart-engelsk.json bruker ikke hver engelske enhet nøyaktig én gang "
                         f"(mangler {sorted(set(enheter) - set(brukt))[:8]}, dobbelt "
                         f"{sorted({r for r in brukt if brukt.count(r) > 1})[:8]})")
    for k, kap in enumerate(kolonne, 1):
        kap.sort(key=lambda g: g[0])
        dekket = {v for g in kap for v in range(g[0], g[1] + 1)}
        for v in range(1, antall[k - 1] + 1):
            if v not in dekket:
                kap.append([v, v, "", {"mangler": True}])
        kap.sort(key=lambda g: g[0])
    return kolonne, sorted(ulike)


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--a2000", required=True)
    p.add_argument("--api", required=True)
    p.add_argument("--web", required=True)
    p.add_argument("--norsk1887", help="norsk1887.json fra les_norsk1887.py (uten den brukes WEB)")
    p.add_argument("--engelsk", help="engelsk.json fra les_engelsk.py (Schodde, Charles, Harden)")
    p.add_argument("--ut", required=True)
    a = p.parse_args()
    norsk1887 = json.loads(pathlib.Path(a.norsk1887).read_text(encoding="utf-8"))["bøker"] if a.norsk1887 else None
    kart1887 = json.loads((pathlib.Path(a.ut) / "kart-no1887.json").read_text(encoding="utf-8")) if a.norsk1887 else {}
    (pathlib.Path(a.ut) / "no1887").mkdir(exist_ok=True)
    engelsk = json.loads(pathlib.Path(a.engelsk).read_text(encoding="utf-8")) if a.engelsk else {}
    kart_en = json.loads((pathlib.Path(a.ut) / "kart-engelsk.json").read_text(encoding="utf-8")) if a.engelsk else {}

    ut = pathlib.Path(a.ut)
    (ut / "en").mkdir(exist_ok=True)
    a2000 = {f.stem.split("-", 1)[1]: f for f in pathlib.Path(a.a2000).glob("*-*.json")}
    api = json.loads(pathlib.Path(a.api).read_text(encoding="utf-8"))
    web = {f.name.split("-")[1][:3]: f for f in pathlib.Path(a.web).glob("*eng-web.usfm")}

    gamle = {b["id"]: b for b in json.loads((ut / "boker.json").read_text(encoding="utf-8")) if b.get("kanon", "66") == "66"}
    logg: dict[str, list[str]] = {"sammenslatt": [], "mangler": [], "ulik_versdeling": []}
    boker = []
    for testament, liste in (("gt", GT), ("nt", NT)):
        for nr, id in liste:
            if id in gamle:
                b = gamle[id]
                boker.append({"id": id, "nr": nr, "testament": testament, "adresse": b["adresse"], "navn": b["navn"],
                              "kapitler": b["kapitler"], "tekster": b["tekster"], "kanon": "66", "amUtgave": "1962"})
                continue
            spes = NYE[id]
            kilde, bok_id, kapitler = spes["am"]
            if kilde == "A2000":
                am_kap = tekst_a2000(a2000[bok_id], kapitler, UTVALG.get(id), logg["sammenslatt"], spes["no"])
            else:
                am_kap = tekst_api(api, bok_id, logg["sammenslatt"], spes["no"])
            am = [grupper_am(vers, oversk) for _, vers, oversk in am_kap]
            for k, kap in enumerate(am, 1):
                for g in kap:
                    if len(g) > 3 and g[3].get("mangler"):
                        logg["mangler"].append(f"{spes['no']} {k},{g[0]}" + (f"–{g[1]}" if g[1] > g[0] else ""))
            (ut / "am" / f"{id}.json").write_text(json.dumps(am, ensure_ascii=False), encoding="utf-8")
            tekster = ["am"]
            ulike: list[int] = []
            andre = None
            if "en_kilde" in spes:
                kode, kart = spes["en_kilde"]
                kilde_en, mappe, skille = les_usfm(web[kode]), "en", ":"
                andre = (kart, kilde_en, mappe, skille)
            elif "no_kilde" in spes:
                osis, kart = spes["no_kilde"]
                norsk = json.loads((ut / "no1930" / f"{osis}.json").read_text(encoding="utf-8"))
                kilde_no = {k: [(g[0], g[2], []) for g in kap] for k, kap in enumerate(norsk, 1)}
                andre = (kart, kilde_no, "no1930", ",")
            if id in kart_en and id in engelsk:
                enheter = {r: t for r, t in engelsk[id]["enheter"]}
                kolonne, ulike = lag_engelsk(id, [max(g[1] for g in kap) for kap in am], enheter, kart_en[id])
                (ut / "en" / f"{id}.json").write_text(json.dumps(kolonne, ensure_ascii=False), encoding="utf-8")
                tekster.append("en")
                spes = {**spes, "merknad": kart_en[id]["merknad"], "enKilde": kart_en[id]["kilde"]}
                if ulike:
                    logg["ulik_versdeling"].append(f"{spes['no']}: kapittel {', '.join(map(str, ulike))}")
            if andre:
                kart, kilde_andre, mappe, skille = andre
                ett = len(kilde_andre) == 1
                kolonne = []
                for k, kap in enumerate(am, 1):
                    antall = max(g[1] for g in kap)
                    kk = kart[k] if kart else k
                    grupper, ulik = legg_side_om_side(antall, kilde_andre, kk, KART.get(id, {}).get(k), ett, skille)
                    if ulik:
                        ulike.append(spes["kapittelnr"][k - 1] if "kapittelnr" in spes else k)
                    kolonne.append(grupper)
                merknad = spes.get("merknad")
                if norsk1887 is not None and id in NO1887:
                    # Norsk 1887 i stedet for WEB; WEB står bare der den norske teksten mangler.
                    visnr = spes.get("kapittelnr") or list(range(1, len(kolonne) + 1))
                    kolonne, ulike = lag_no1887(id, kolonne, norsk1887, kart1887[id], visnr)
                    if "kapittelnr" in spes:
                        ulike = [spes["kapittelnr"][k - 1] for k in ulike]
                    mappe, merknad = "no1887", NO1887[id][2]
                    (ut / "en" / f"{id}.json").unlink(missing_ok=True)
                (ut / mappe / f"{id}.json").write_text(json.dumps(kolonne, ensure_ascii=False), encoding="utf-8")
                tekster.append(mappe)
                if merknad:
                    spes = {**spes, "merknad": merknad}
                if ulike:
                    logg["ulik_versdeling"].append(f"{spes['no']}: kapittel {', '.join(map(str, ulike))}")
            bok = {"id": id, "nr": nr, "testament": testament, "adresse": spes["adresse"],
                   "navn": {"am": spes["am_navn"], "no": spes["no"], "en": spes["en"]},
                   "kapitler": len(am), "tekster": tekster, "kanon": spes["kanon"], "amUtgave": "2000"}
            if "kapittelnr" in spes:
                bok["kapittelnr"] = spes["kapittelnr"]
            if ulike:
                bok["ulikVersdeling"] = ulike
            if "merknad" in spes:
                bok["merknad"] = spes["merknad"]
            if "enKilde" in spes:
                bok["enKilde"] = spes["enKilde"]
            boker.append(bok)
    (ut / "boker.json").write_text(json.dumps(boker, ensure_ascii=False, indent=1), encoding="utf-8")
    (ut / "rettelser-81.json").write_text(json.dumps(logg, ensure_ascii=False, indent=1), encoding="utf-8")
    nye = [b for b in boker if b["kanon"] != "66"]
    print(f"{len(boker)} bøker, {len(nye)} nye")
    for navn, liste in logg.items():
        print(f"{navn}: {len(liste)}")


if __name__ == "__main__":
    main()
