"""Leser de apokryfiske bøkene fra Bibelselskabets utgave 1887 (Det Gamle Testaments apokryfiske Bøger,
Christiania 1887, public domain) og deler dem i vers.

Bruk:
  python3 -I scripts/bibel/les_norsk1887.py --ocr <mappe med cNNNN.json fra ocr_norsk1887.py> \
      --alto <alto-mappe fra nb.no> --ut <norsk1887.json>

Boka er satt med fraktur i to spalter. ocr_norsk1887.py kjører tesseract (modellen frak2021) på
sidebildene i full oppløsning og lagrer ordene med plassering. Her blir teksten renset:
  - ſ (lang s) blir s. Ellers står rettskrivingen som trykt (1887), også «aa», store substantiver osv.
  - Fraktur-modellen kjenner ikke ø og leser æ dårlig. Bokstavene hentes fra Nasjonalbibliotekets egen
    OCR av samme side (ALTO-filene), ord for ord, og ellers fra ordlisten i den OCR-en.
  - Sidetopper, kapitteloverskrifter, innholdsoversikten foran hvert kapittel, parallellhenvisninger
    og fotnoter tas bort. Fotnotemerkene (*) tas bort.
  - Orddeling på slutten av linjen slås sammen.
  - Versene deles etter versnummeret først på linjen (innrykket). Nummer som OCR har lest feil, rettes
    ut fra rekkefølgen og står i loggen.
  - Ord som er rettet for hånd, står i RETTELSER nederst. Alt som er usikkert, står i loggen.
Resultatet: {"bøker": {kode: {kapittel: {vers: tekst}}}, "logg": [...]}.
"""
import argparse
import collections
import difflib
import json
import pathlib
import re
import statistics
import xml.etree.ElementTree as ET

# Sidene (bildenummer hos nb.no) med bøkene vi bruker: Tobias til Bel og Dragen, og Manasses' bønn.
SIDER = list(range(6, 125)) + [188, 189]

# Kapitlene i den rekkefølgen de står i boka: (bok, kapittel). En ny bok begynner med en
# kapitteloverskrift eller en tittel (TITLER). Esters tillegg står som kapittel 10–16 (som i den latinske
# bibelen), Daniels tillegg som 3, 13 og 14. Siraks bok har to fortaler (kapittel 0).
# (bok, kapittel, trykt kapittelnummer eller None når kapitlet begynner med en tittel, første vers)
KAPITLER = (
    [("Tob", k, k, 1) for k in range(1, 15)] + [("Jdt", k, k, 1) for k in range(1, 17)]
    + [("EstAdd", 10, 10, 4)] + [("EstAdd", k, k, 1) for k in range(11, 17)]
    + [("Wis", k, k, 1) for k in range(1, 20)]
    + [("SirProl", 1, None, 1), ("SirProl", 2, None, 1)] + [("Sir", k, k, 1) for k in range(1, 52)]
    + [("Bar", k, k, 1) for k in range(1, 6)]
    + [("EpJer", 1, 6, 1), ("DanAdd", 3, None, 24), ("DanAdd", 13, 13, 1), ("DanAdd", 14, 14, 1), ("PrMan", 1, None, 1)]
)
# Fortalene i Siraks bok står over hele sidebredden og er ikke med i den amhariske bibelen; de hoppes over.
HOPP_OVER = {"SirProl"}
# Overskrifter som ikke er «N. Kapitel», men begynner et kapittel i listen over.
TITLER = [
    (re.compile(r"^En gammel ubekj"), ("SirProl", 1)),
    (re.compile(r"^Fortalen til Je"), ("SirProl", 2)),
    (re.compile(r"^Asarjas B"), ("DanAdd", 3)),
    (re.compile(r"^Manas+es, *[JZ]uda"), ("PrMan", 1)),
]

FORKORTELSER = (
    "Mos Jos Dom Ruth Sam Kong Kon Krøn Kron Rrøn Esr Esra Neh Est Job Ps Pſ Ordsp Ordſp Præd Prad Høis Hoiſ Es Eſ Jer "
    "Klag Ezech Ez Dan Hos Joel Am Ob Obad Jon Mich Mik Nah Hab Zeph Sef Hagg Zach Sak Mal Matth Mark Luk Joh Ap Apg "
    "Rom Kor Gal Ef Eph Fil Kol Thess Tess Tim Tit Filem Hebr Jak Pet Jud Judith Aab Aabenb Tob Vis Visd Sir Bar "
    "Makk Man Sus v V fg ffg jfr Jfr sml Kap Moſ Mof Moj Kron Pſ"
).split()
REF_ORD = re.compile(
    r"^(?:\d+[.,;:]?|\d+,\d+[.,;]?|\d+[-–—⸗=]\d+[.,;]?|[-–—⸗]+|(?:%s)\.?[,;]?|\d*(?:%s)\.|fg\.?,?|ff?g\.|o\.\s*fl\.?|[0-9]+fg\.?)$"
    % ("|".join(FORKORTELSER), "|".join(FORKORTELSER))
)
VERSNR = re.compile(r"^(\d{1,3})[.,]$")


def norm(s: str) -> str:
    return s.replace("ſ", "s").replace("⸗", "-").replace("„", "*").replace("“", "*").replace("”", "*")


def nokkel(s: str) -> str:
    """Ordet uten tegnsetting og med ø/æ som o/e, for å sammenligne to OCR-lesninger."""
    s = norm(s).lower()
    s = s.replace("ø", "o").replace("æ", "e").replace("œ", "e").replace("ö", "o").replace("ee", "e")
    return re.sub(r"[^a-zå0-9]", "", s)


def overfor_bokstaver(fra: str, til: str) -> str:
    """Henter ø/æ/Ø/Æ fra NB-ordet til frak2021-ordet, bokstav for bokstav."""
    a, b = norm(til), fra
    ut = []
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == "equal":
            ut.append(a[i1:i2])
            continue
        del_a, del_b = a[i1:i2], b[j1:j2]
        if del_b and all(c in "øæØÆ" for c in del_b) and del_a and all(c in "oeOEcrHGöœ0" for c in del_a):
            ut.append(del_b)
        else:
            ut.append(del_a)
    return "".join(ut)


def les_alto(fil: pathlib.Path, skala: float, midt: int) -> list[list[str]]:
    """NB-ordene på en side, delt i to spalter."""
    if not fil.exists():
        return [[], []]
    rot = ET.parse(fil).getroot()
    ns = {"a": rot.tag.split("}")[0][1:]}
    spalter = [[], []]
    for s in rot.iterfind(".//a:String", ns):
        x = float(s.get("HPOS")) * skala
        spalter[0 if x + float(s.get("WIDTH")) * skala / 2 < midt else 1].append(s.get("CONTENT"))
    return spalter


def rett_bokstaver(ord_: list[str], nb: list[str], logg: list) -> list[str]:
    a = [nokkel(o) for o in ord_]
    b = [nokkel(o) for o in nb]
    ut = list(ord_)
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        par = []
        if op == "equal":
            par = list(zip(range(i1, i2), range(j1, j2)))
        elif op == "replace" and i2 - i1 == j2 - j1:
            par = [(i, j) for i, j in zip(range(i1, i2), range(j1, j2))
                   if difflib.SequenceMatcher(None, a[i], b[j]).ratio() >= 0.7]
        for i, j in par:
            if re.search("[øæØÆ]", nb[j]):
                ut[i] = overfor_bokstaver(nb[j], ord_[i])
    return ut


REF_START = re.compile(r"^(?:\d+[.,]?|[IJ]|[A-ZÆØ][A-Za-zæøö]{0,7}\.|Ap\.|Ps\.?\d.*)$")
REF_DEL = re.compile(r"^(?:[\d.,;:⸗=\-–—½]+|[A-ZÆØ][A-Za-zæøö]{0,7}\.|ff?g\.?[,;]?|ig\.?|[A-Za-z]{1,2}\.?|v\.|Gj\.|\d+[a-zA-Z]{1,3}\.?[,;]?)$")


def ref_hale(ord_: list[str], gap: list[int], hel: bool = False):
    """Indeksen der en parallellhenvisning på slutten av linjen begynner («… sagt: Am. 8, 10.»), eller None.
    Henvisningen må stå etter et skilletegn eller et stort mellomrom, ha et tall og bare bestå av
    bokforkortelser og tall."""
    o = [norm(t) for t in ord_]
    for k in range(0 if hel else 1, len(o)):
        hale = o[k:]
        if not REF_START.match(hale[0]) or not all(REF_DEL.match(t) for t in hale):
            continue
        if not any(re.search(r"\d", t) for t in hale):
            continue
        if not re.match(r"^\d", hale[0]) and not any(re.match(r"^\d", t) for t in hale[1:3]):
            continue  # «Tob. 4, 8» eller «2 Mos.»: et tall rett etter forkortelsen
        if k == 0 or re.search(r"[.!?;:,»)]$", o[k - 1]) or gap[k - 1] >= 60:
            return k
    return None


def er_ref(tokens: list[str], tillat: int = 0) -> bool:
    """Parallellhenvisning, f.eks. «2 Mos. 23, 17. 5 Mos. 16, 16.». tillat: antall ord som ikke passer."""
    feil = sum(1 for t in tokens if not REF_ORD.match(norm(t)))
    return bool(tokens) and feil <= tillat and any(re.search(r"\d", t) for t in tokens)


def flett_linje(a: list[dict], b: list, logg: list, hvor: str) -> list[dict]:
    """Ord som sidelesingen (psm 4) har mistet, men linjelesingen (psm 7) har med, settes inn.
    Ellers brukes sidelesingen, som er sikrest."""
    ka = [nokkel(o["t"]) for o in a]
    kb = [nokkel(t) for t, *_ in b]
    ut = list(a)
    satt_inn = []
    h = statistics.median(o["h"] for o in a)
    sm = difflib.SequenceMatcher(None, ka, kb, autojunk=False)
    for op, i1, i2, j1, j2 in reversed(sm.get_opcodes()):
        if op == "insert" or (op == "replace" and j2 - j1 > i2 - i1 and i1 in (0, len(a))):
            nye = []
            for t, c, x, w in b[j1:j2]:
                naboer = [nokkel(o["t"]) for o in a]
                k = nokkel(t)
                if i1 == 0 and VERSNR.match(norm(t)) and c >= 65:
                    pass  # versnummer som sidelesingen har mistet
                elif (c < 80 or len(k) < 3 or not k.isalpha()
                      or any(n.startswith(k) or n.endswith(k) or k.startswith(n) for n in naboer if n)):
                    continue  # støy, eller en del av et ord som allerede står der
                nye.append({"t": t, "c": c, "x": x + w - 22 * len(t) if VERSNR.match(norm(t)) else x,
                            "y": a[0]["y"], "w": w, "h": h, "ny": True})
            if op == "replace":
                # Behold sidelesingens ord, legg bare til de ekstra.
                ekstra = len(nye) - (i2 - i1)
                nye = (nye[:ekstra] if i1 == 0 else nye[-ekstra:]) if ekstra > 0 else []
                i1 = i2 if i1 != 0 else i1
                i2 = i1
            if nye:
                ut[i1:i1] = nye
                satt_inn.append(" ".join(o["t"] for o in nye))
    if satt_inn:
        logg.append(f"{hvor}: ord fra linjelesingen satt inn: «{' / '.join(reversed(satt_inn))}» i «{' '.join(o['t'] for o in ut)}»")
    return ut


def linjer_paa_siden(side: dict, alto: list[list[str]], logg: list):
    """Gir linjene i lesefølge: (spalte, x relativt til margen, ordliste, gap-liste, y, bokstavhøyde)."""
    ut = []
    for nr, sp in enumerate(side["spalter"]):
        linjer = [l for l in sp["linjer"] if l]
        if sp.get("linjer7"):
            linjer = [flett_linje(l, l7 or [], logg, f"side {side['side']}{'ab'[nr]}") for l, l7 in zip(linjer, sp["linjer7"])]
        alle = [o["t"] for l in linjer for o in l]
        rettet = rett_bokstaver(alle, alto[nr], logg)
        i = 0
        for l in linjer:
            for o in l:
                o["t2"] = rettet[i]
                i += 1
        xs = [l[0]["x"] for l in linjer]
        for k, l in enumerate(linjer):
            naer = xs[max(0, k - 6): k + 7]
            margen = sorted(naer)[min(1, len(naer) - 1)]
            gap = [b["x"] - (a["x"] + a["w"]) for a, b in zip(l, l[1:])]
            ut.append((nr, l[0]["x"] - margen, [o["t2"] for o in l], gap, l[0]["y"],
                       statistics.median(o["h"] for o in l)))
    # En ny bok midt på siden har tittelen over hele bredden: da leses først begge spaltene over tittelen,
    # så begge spaltene under.
    titler = [y for _, _, o, _, y, h in ut if y >= 125 and (
        (h > 72 and not er_ref(o) and len(re.findall(r"[A-Za-zæøÆØ]", " ".join(o))) >= 3)
        or any(r.match(norm(" ".join(o))) for r, _ in TITLER))]
    if titler:
        grense = min(titler) - 15
        ut.sort(key=lambda l: (l[4] >= grense, l[0]))
    return ut


KAP_VERS = re.compile(r"^Kap\.?\s*(\d+)\s*[,.]\s*(\d+)\.?$")


def tolk(sider: list[dict], logg: list) -> dict:
    """Går gjennom linjene og deler dem i bøker, kapitler og vers."""
    boker: dict[str, dict[int, dict[int, list]]] = {}
    peker = -1
    bok = kap = None
    vers = 0
    # tilstand: sammendrag (etter kapitteloverskrift), tittel (etter en tittel), mellom (etter en
    # mellomtittel inne i kapitlet), tekst, fotnote
    tilstand = "start"
    gjeldende: list | None = None

    def nytt_kapittel(ny: int, hvor: str, nr):
        nonlocal peker, bok, kap, vers, tilstand, gjeldende, fremover
        fremover = None
        b, k, trykt, start = KAPITLER[ny]
        if trykt is not None and nr is not None and nr != trykt:
            logg.append(f"{hvor}: kapitteloverskrift lest som {nr}, ventet {trykt} ({b} {k})")
        peker, bok, kap, vers = ny, b, k, start - 1
        boker.setdefault(bok, {}).setdefault(kap, {"rekke": [], "faste": {}, "start": start})["start"] = start
        tilstand, gjeldende = "sammendrag" if trykt is not None else "tittel", None

    forrige_side = None
    fremover = None  # (kapittel, vers): «Kap. 42, 1» før overskriften til kapittel 42; versene etter hører dit
    forrige_spalte = None
    sammendrag_slutt = False  # forrige linje i innholdsoversikten sluttet med versnummer («11⸗16.»)
    for side in sider:
        c = side["side"]
        if forrige_side is not None and c != forrige_side + 1:
            tilstand, gjeldende = "hopp", None
        forrige_side = c
        for sp, x, ord_, gap, y, hoyde in side["linjer"]:
            hvor = f"side {c}{'ab'[sp]}"
            tekst = " ".join(ord_)
            n = norm(tekst)
            forste_i_spalten = (c, sp) != forrige_spalte
            forrige_spalte = (c, sp)
            if y < 100 or (y < 135 and forste_i_spalten and not VERSNR.match(norm(ord_[0]))):
                continue  # sidetopp
            tittel = next((m for r, m in TITLER if r.match(n)), None)
            if tittel:
                nytt_kapittel(next(i for i, k in enumerate(KAPITLER) if k[:2] == tittel), hvor, None)
                continue
            if hoyde > 65 or tilstand == "hopp":
                continue  # boktittel, eller sider vi ikke bruker (fram til neste tittel)
            forste = norm(ord_[0])
            # «Kap. 27, 31. Harme og Vrede»: et vers som hører til et annet kapittel (gresk nummerering).
            kv = KAP_VERS.match(" ".join(norm(o) for o in ord_[:3])) if len(ord_) > 3 else None
            if kv and bok and 25 <= x <= 90:
                ord_, gap = ord_[3:], gap[3:]
                k2, v2 = int(kv.group(1)), int(kv.group(2))
                d2 = boker[bok].setdefault(k2, {"rekke": [], "faste": {}, "start": 1})
                gjeldende = d2["faste"].setdefault(v2, [])
                fremover = (k2, v2) if k2 == kap + 1 else None
                logg.append(f"{hvor}: «Kap. {k2}, {v2}» står ved {bok} {kap}; lagt i kapittel {k2}")
                if tilstand != "sammendrag":
                    tilstand = "tekst"
                gjeldende.append((" ".join(ord_), x, len(ord_)))
                continue
            if x > 60 and len(ord_) <= 6 and re.search(r"apit|Kap|K\s*i?ä?a\s*p|pite|itel", n) and not er_ref(ord_):
                m = re.match(r"^(\d+)", n)
                nytt_kapittel(peker + 1, hvor, int(m.group(1)) if m else None)
                continue
            if bok is None:
                continue
            if er_ref(ord_, len(ord_) // 5) and (REF_ORD.match(forste) or forste.startswith("*")):
                if tilstand in ("sammendrag", "tittel"):
                    # Slutten på innholdsoversikten («13⸗23.»)
                    sammendrag_slutt = bool(re.search(r"\d+\.$", n))
                    boker[bok][kap].setdefault("sammendrag", []).append(n)
                if tilstand == "fotnote":
                    tilstand = "tekst"
                continue
            vm = VERSNR.match(forste)
            uten_nummer = False
            if tilstand in ("sammendrag", "tittel"):
                if not vm and x >= 35 and len(ord_) > 2:
                    if len(forste) <= 5 and (re.match(r"^\d+\W*$", forste) or re.match(r"^[IlJ|1*.]+\.?$", forste)):
                        logg.append(f"{hvor}: første vers i {bok} {kap}: versnummeret lest som «{forste}»")
                        vm, uten_nummer = None, "strip"
                    elif sammendrag_slutt and not (len(ord_) <= 5 and n.endswith(".")):
                        logg.append(f"{hvor}: første vers i {bok} {kap} uten versnummer: «{tekst[:40]}»")
                        uten_nummer = "behold"
            if tilstand in ("sammendrag", "tittel"):
                sammendrag_slutt = bool(re.search(r"\d+\.$", n))
                if not vm and not uten_nummer:
                    boker[bok][kap].setdefault("sammendrag", []).append(n)
            if vm and int(vm.group(1)) == 1 and tilstand == "tekst" and vers >= 3 and peker + 1 < len(KAPITLER):
                # Nytt kapittel der overskriften ikke ble lest: innholdsoversikten står da i verset før.
                hode = [i for i, (_, lx, ln) in enumerate(gjeldende) if lx > 60 and ln <= 6]
                if hode or not 10 <= vers + 1 <= 19:
                    if not hode:
                        # Innholdsoversikten begynner med et innrykk etter en setningsslutt og har versnumre
                        # («1⸗21;»). Ellers tas ingenting bort.
                        hode = [len(gjeldende)]
                        for i in range(len(gjeldende) - 1, 0, -1):
                            hale = " ".join(t for t, _, _ in gjeldende[i:])
                            if (gjeldende[i][1] >= 30 and re.search(r"[.!?»]$", gjeldende[i - 1][0].strip())
                                    and re.search(r"\d+\s*[-⸗–]\s*\d+", norm(hale))):
                                hode = [i]
                                break
                        logg.append(f"{hvor}: SJEKK: nytt kapittel uten overskrift ved vers 1 etter vers {vers}")
                    fjernet = " / ".join(t for t, _, _ in gjeldende[hode[-1]:])
                    del gjeldende[hode[-1]:]
                    nytt_kapittel(peker + 1, hvor, None)
                    logg.append(f"{hvor}: kapitteloverskriften ikke lest; nytt kapittel {bok} {kap}, "
                                f"fjernet «{fjernet}»")
            if x > 100 and len(ord_) == 1:
                continue  # arkmerke («1*») o.l.
            if (vm and 25 <= x <= 90 or uten_nummer) and len(ord_) > 1:
                # Nummeret kan være lest feil; nummer() ordner det når hele kapitlet er lest.
                if fremover and tilstand == "tekst":
                    # Vers etter «Kap. 42, 1», men før overskriften «42. Kapitel».
                    k2, v2 = fremover
                    fremover = (k2, v2 + 1)
                    gjeldende = boker[bok][k2]["faste"].setdefault(v2 + 1, [])
                    logg.append(f"{hvor}: vers {k2},{v2 + 1} står før kapitteloverskriften; lagt i kapittel {k2}")
                    if uten_nummer != "behold":
                        ord_, gap = ord_[1:], gap[1:]
                    if ord_:
                        gjeldende.append((" ".join(ord_), x, len(ord_)))
                    continue
                d = boker[bok][kap]
                vers = max(vers, int(vm.group(1))) if vm else vers + 1
                gjeldende = []
                d["rekke"].append({"les": int(vm.group(1)) if vm else None, "linjer": gjeldende, "hvor": hvor})
                tilstand = "tekst"
                if uten_nummer != "behold":
                    ord_, gap = ord_[1:], gap[1:]
            elif tilstand in ("sammendrag", "tittel", "mellom"):
                continue
            elif forste.startswith("*") or forste in ("*", "**", "***"):
                tilstand = "fotnote"
                continue
            elif tilstand == "fotnote" and x > 30:
                continue
            elif (150 <= x <= 450 and len(ord_) <= 5 and n.endswith(".") and ord_[0][:1].isupper()
                  and tilstand == "tekst" and not re.search(r"\d", n)):
                # Mellomtittel («De tre Mænds Sang.», «Om Bel i Babylon.») og innholdsoversikten etter den.
                logg.append(f"{hvor}: mellomtittel tatt bort: «{tekst}»")
                tilstand = "mellom"
                continue
            elif x > 100:
                bokst = len(re.findall(r"[A-Za-zæøåÆØÅ]", n))
                if bokst < 4 or bokst < 0.6 * len(n.replace(" ", "")) or ref_hale(ord_, gap, hel=True) == 0:
                    logg.append(f"{hvor}: innrykket linje uten tekst tatt bort: «{tekst}»")
                    continue
                logg.append(f"{hvor}: innrykket linje tatt med som tekst: «{tekst}»")
            tilstand = "tekst"
            if gjeldende is None:
                logg.append(f"{hvor}: tekst før første vers: «{tekst}»")
                continue
            # Parallellhenvisninger på slutten av linjen.
            k = ref_hale(ord_, gap)
            if k is not None:
                logg.append(f"{hvor}: henvisning fjernet: «{' '.join(ord_[k:])}»")
                ord_ = ord_[:k]
            if ord_:
                gjeldende.append((" ".join(ord_), x, len(ord_)))
    for b in HOPP_OVER:
        boker.pop(b, None)
    ut = {b: {k: nummer(d, logg, f"{b} {k}") for k, d in ks.items()} for b, ks in boker.items()}
    # Innholdsoversikten foran kapitlet slutter med siste vers («… 22⸗31.»): sammenlign med versene.
    for b, ks in boker.items():
        for k, d in ks.items():
            tall = [int(t) for t in re.findall(r"(?<![\d,])(\d{1,2})(?=[.;,]?\s*(?:$|\())", " ".join(d.get("sammendrag", [])))]
            tall += [int(t) for t in re.findall(r"[-⸗–]\s*(\d{1,2})\b", " ".join(d.get("sammendrag", [])))]
            if tall and ut[b][k] and max(tall) != max(ut[b][k]):
                logg.append(f"{b} {k}: SJEKK: innholdsoversikten går til vers {max(tall)}, teksten har {max(ut[b][k])} vers "
                            f"(«…{' '.join(d.get('sammendrag', []))[-40:]}»)")
    return ut


def nummer(d: dict, logg: list, ref: str) -> dict[int, list]:
    """Gir versene numre. De leste numrene som passer sammen (stigende, med plass til versene imellom),
    beholdes; de andre får numrene mellom dem. Feil lest nummer og hull står i loggen."""
    rekke, start = d["rekke"], d["start"]
    les = [r["les"] for r in rekke]
    # Beste kjede av leste numre: flest mulig, så færrest vers som må slås sammen, så færrest hull.
    def kost(i: int, j: int, li: int, lj: int) -> tuple[int, int]:
        plass, antall = lj - li - 1, j - i - 1
        return max(0, antall - plass), max(0, plass - antall)

    best: list[tuple] = []  # (antall, -sammenslått, -hull, forrige)
    for j, lj in enumerate(les):
        if lj is None or lj < start:
            best.append((-1, 0, 0, -1))
            continue
        s0, h0 = kost(-1, j, start - 1, lj)
        kand = (1, -s0, -h0, -1)
        for i in range(j):
            if best[i][0] > 0 and lj > les[i]:
                s1, h1 = kost(i, j, les[i], lj)
                kand = max(kand, (best[i][0] + 1, best[i][1] - s1, best[i][2] - h1, i))
        best.append(kand)
    ankre: dict[int, int] = {}
    if best and max(b[0] for b in best) > 0:
        j = max(range(len(best)), key=lambda i: best[i][:3])
        while j >= 0:
            ankre[j] = les[j]
            j = best[j][3]
    nr: list = [None] * len(rekke)
    forrige_i, forrige_nr = -1, start - 1
    for i in sorted(ankre) + [len(rekke)]:
        neste_nr = ankre[i] if i < len(rekke) else 10**6
        for k in range(forrige_i + 1, i):
            v = forrige_nr + (k - forrige_i)
            nr[k] = v if v < neste_nr else None  # ingen plass: slås sammen med verset foran
        if i < len(rekke):
            nr[i] = ankre[i]
            forrige_i, forrige_nr = i, ankre[i]
    ut: dict[int, list] = {}
    forrige = None
    for r, v in zip(rekke, nr):
        if v is None:
            logg.append(f"{r['hvor']}: SJEKK: «{r['les']}.» passer ikke i rekken; slått sammen med vers {forrige} ({ref})")
            ut[forrige] = ut[forrige] + [(str(r["les"] or ""), 0, 1)] + r["linjer"]
            continue
        if r["les"] is not None and r["les"] != v:
            logg.append(f"{r['hvor']}: versnummer lest som {r['les']}, satt til {v} ({ref})")
        ut[v] = r["linjer"]
        forrige = v
    for v, linjer in d["faste"].items():
        if v in ut:
            logg.append(f"{ref},{v}: SJEKK: verset står to steder (Kap.-henvisning); slått sammen")
            ut[v] = linjer + ut[v]
        else:
            ut[v] = linjer
    ut = dict(sorted(ut.items()))
    # Vers der nummeret ikke ble sett som versbegynnelse (f.eks. fordi linjen var forskjøvet), men står
    # først på en linje inne i verset foran: del verset der.
    for v in range(min(ut, default=0), max(ut, default=0) + 1):
        if v in ut or v - 1 not in ut:
            continue
        linjer = ut[v - 1]
        for i in range(1, len(linjer)):
            t0 = norm(linjer[i][0]).split(" ")[0]
            siffer = re.sub(r"\D", "", t0)
            if siffer and (siffer == str(v) or (siffer.endswith(str(v)) and len(siffer) == len(str(v)) + 1)
                           or (siffer.startswith(str(v)) and len(siffer) == len(str(v)) + 1 and v < 10)):
                rest = linjer[i][0].split(" ", 1)
                ut[v] = [(rest[1] if len(rest) > 1 else "", linjer[i][1], linjer[i][2])] + linjer[i + 1:]
                ut[v - 1] = linjer[:i]
                logg.append(f"{ref},{v}: versnummeret «{t0}» funnet inne i vers {v - 1}; delt der")
                break
    ut = dict(sorted(ut.items()))
    if ut:
        hull = [v for v in range(min(ut), max(ut) + 1) if v not in ut]
        if hull:
            logg.append(f"{ref}: vers {', '.join(map(str, hull))} ikke funnet")
    return ut


# Ordlisten fra Nasjonalbibliotekets OCR av hele boka: {ord: antall}, og {nøkkel: [ord med æ/ø]}.
LEKSIKON: collections.Counter = collections.Counter()
MED_AE_OE: dict[str, list[str]] = {}


def bygg_leksikon(alto: pathlib.Path) -> None:
    for fil in sorted(alto.glob("*.xml")):
        for m in re.finditer(r'CONTENT="([^"]*)"', fil.read_text(encoding="utf-8")):
            o = re.sub(r"^\W+|\W+$", "", m.group(1).replace("&#248;", "ø").replace("&#230;", "æ")
                       .replace("&#216;", "Ø").replace("&#198;", "Æ").replace("&amp;", "&"))
            if o:
                LEKSIKON[o] += 1
    for o, n in LEKSIKON.items():
        if n >= 3 and re.search("[æøÆØ]", o):
            MED_AE_OE.setdefault(nokkel2(o), []).append(o)


def nokkel2(s: str) -> str:
    s = nokkel(s)
    return re.sub(r"(ae|oe|ce)", "e", s)


# Bokstaver som fraktur-OCR ofte forveksler. SIKRE: lang s lest som f, v som y, Æ/Ø som W/O/H osv.
# USIKRE brukes bare når ordet ellers ikke finnes noe sted og rettelsen er et vanlig ord.
SIKRE = [("f", "s"), ("y", "v"), ("ü", "u"), ("ö", "ø"), ("o", "ø"), ("e", "æ"), ("ae", "æ"), ("oe", "æ"),
         ("ee", "æ"), ("ſ", "s"), ("Y", "V"), ("V", "Y")]
USIKRE = [("st", "sk"), ("t", "k"), ("c", "e"), ("rn", "m"), ("n", "u"), ("u", "n"), ("h", "b"), ("b", "h"),
          ("l", "t"), ("i", "l"), ("z", "g"), ("D", "O"), ("a", "æ"), ("d", "æ")]


def forvekslinger(w: str, par=SIKRE) -> list[str]:
    """Ord med én eller to forvekslinger rettet."""
    ut = set()
    for a, b in par:
        i = w.find(a)
        while i >= 0:
            ut.add(w[:i] + b + w[i + len(a):])
            i = w.find(a, i + 1)
    for v in list(ut):
        for a, b in (("f", "s"), ("o", "ø"), ("e", "æ")):
            i = v.find(a)
            while i >= 0:
                ut.add(v[:i] + b + v[i + len(a):])
                i = v.find(a, i + 1)
    ut.discard(w)
    return sorted(ut)


# Ekte ord som ellers ville blitt «rettet» til et annet ord.
IKKE_RETT = {"klogt", "sver", "forseet", "Ceder", "lege", "leer", "Glade", "glade", "sod", "Skammer", "stamme",
             "lyve", "stred", "salte", "grad", "kil", "Elst", "nidst", "seer", "seet"}


def rett_ord(o: str, logg: list, hvor: str) -> str:
    """Ord uten æ/ø som ikke finnes i NB-ordlisten, men gjør det med æ/ø («Sjel» → «Sjæl»)."""
    kjerne = re.sub(r"^\W+|\W+$", "", o)
    if kjerne in IKKE_RETT:
        return o
    if not kjerne or re.search("[æøÆØ]", kjerne) or LEKSIKON[kjerne] >= 2:
        return o
    kand = MED_AE_OE.get(nokkel2(kjerne))
    if not kand and len(kjerne) >= 3 and kjerne[0] in "WHOBG":
        # Stor Æ og Ø leses ofte som W, H, O, B eller G («Wre» → «Ære», «Hine» → «Øine»).
        kand = [k + kjerne[1:] for k in "ÆØ" if LEKSIKON[k + kjerne[1:]] >= 3]
    if not kand:
        kand = [k for k in forvekslinger(kjerne) if LEKSIKON[k] >= 3]
        if LEKSIKON[kjerne] >= 1:
            # Ordet finnes i NB-teksten: bare lang s (f) og v/y rettes.
            kand = [k for k in kand if len(k) == len(kjerne) and all(
                a == b or (a, b) in (("f", "s"), ("y", "v")) for a, b in zip(kjerne, k))]
    if not kand and LEKSIKON[kjerne] == 0:
        kand = [k for k in forvekslinger(kjerne, USIKRE) if LEKSIKON[k] >= 20]
    if not kand:
        return o
    ny = max(kand, key=lambda k: LEKSIKON[k])
    if LEKSIKON[ny] < 3 * max(1, LEKSIKON[kjerne]):
        return o
    ny = (ny[0].upper() if kjerne[0].isupper() else ny[0].lower()) + ny[1:]
    logg.append(f"{hvor}: «{kjerne}» → «{ny}» (ordlisten)")
    return o.replace(kjerne, ny)


_TALLPAR = r"\d+\s?[,.:]\s?\d+(?:[\d.,;: ]|fg\.?|ff\.?|[-⸗])*"
REF_I_TEKST = re.compile(r"(?<=[.!?;:,»])\s+(?:(?:\d\s?)?[A-ZÆØ][A-Za-zæø]{0,6}\.\s?(?:Gj\.\s?)?)?" + _TALLPAR
                         + r"(?:\s(?:(?:\d\s?)?[A-ZÆØ][A-Za-zæø]{0,6}\.\s?)?" + _TALLPAR + r")*(?=\s|$)")


def sett_sammen(linjer: list[str], logg: list, hvor: str) -> str:
    """Slår sammen linjene i et vers: orddeling, fotnotemerker, lang s, æ/ø."""
    t = ""
    for l in linjer:
        l = norm(l).strip()
        if t.endswith("\x00"):
            # «Barmhjertigheds- og Retfærdigheds-Gjerninger»: bindestreken står.
            t = t[:-1] + ("- " if re.match(r"(og|eller)\b", l) else "") + l
        elif t:
            a, b = t.rsplit(" ", 1)[-1], l.split(" ", 1)[0]
            ren_a, ren_b = re.sub(r"\W", "", a), re.sub(r"\W+$", "", b)
            # Orddeling der OCR ikke har sett bindestreken: «An / sigt» → «Ansigt».
            if (ren_a.isalpha() and ren_b.isalpha() and ren_b.islower() and LEKSIKON[ren_a + ren_b] >= 2
                    and LEKSIKON[ren_b] < 2 and LEKSIKON[ren_a + ren_b] > LEKSIKON[ren_a]):
                logg.append(f"{hvor}: «{a} {b}» slått sammen til «{ren_a + b}»")
                t = t + l
            else:
                t = f"{t} {l}"
        else:
            t = l
        if re.search(r"\w[-—=]+$", t):
            t = re.sub(r"[-—=]+$", "\x00", t)
    t = t.replace("\x00", "")
    t = " ".join(rett_ord(o, logg, hvor) for o in t.split(" "))
    # Henvisninger som ikke ble sett på linjen (delt over to linjer o.l.): «… Synder! Matth. 18,28fg.»
    for m in reversed(list(REF_I_TEKST.finditer(t))):
        logg.append(f"{hvor}: henvisning fjernet fra teksten: «{m.group(0).strip()}»")
        t = t[:m.start()] + t[m.end():]
    t = re.sub(r"\*+", "", t)
    t = re.sub(r"\s+([,.;:!?])", r"\1", t)
    return re.sub(r"\s+", " ", t).strip()


# Rettet for hånd etter sidebildet (forstørrede forbokstaver som OCR ikke leser, o.l.):
# (bok, kapittel, vers, slik OCR har det, slik det står trykt).
RETTELSER = [
    ("Tob", 1, 1, "istorien om Tobias, en Søn aff Tobiel", "Historien om Tobias, en Søn af Tobiel"),
    ("Tob", 4, 12, "Offergave for den Høiestes", "Offergave for den Høiestes Ansigt."),
    ("Jdt", 1, 1, "O det tolvte Aar", "J det tolvte Aar"),
    ("Wis", 1, 1, "lsker Retfærdighed, IJ Jordens", "Elsker Retfærdighed, J Jordens"),
    ("Bar", 1, 1, "g disse ere den Bogs Ord", "Og disse ere den Bogs Ord"),
    ("DanAdd", 3, 24, "gude gik omkring", "Og de gik omkring"),
    ("Sir", 10, 3, " J Herrens Haand er Magten over Lard,", " 4. J Herrens Haand er Magten over Landet,"),
    ("Sir", 10, 3, " JI Herrens Haand er en Mands Lykke,", " 5. J Herrens Haand er en Mands Lykke,"),
    ("Jdt", 6, 2, "fordi deres 3 vil Lien dem? Hvo er vel Gud uden Nabuchonn n. Han",
     "fordi deres Gud vil beskjerme dem? 3. Hvo er vel Gud uden Nabuchodonosor? Han"),
    ("Jdt", 6, 2, "thi vi 0 træde dem med dem.", "thi vi skulle nedtræde dem med dem."),
    ("Jdt", 6, 4, "vorde Dneit af", "vorde drukne af"),
    ("Sir", 38, 5, "Mennesket? Og han har givet", "Mennesket? 6. Og han har givet"),
]
# Tekst som står uten versnummer og derfor ikke kommer med av seg selv: (bok, kapittel, vers, tekst).
TILLEGG = [
    # Overskriften til Jeremias' brev (gresk 6,1), satt som innledning foran vers 1.
    ("EpJer", 1, 0, "Afskrift af et Brev, som Jeremias sendte til dem, der skulde føres fangne til Babylon af "
                    "Babyloniernes Konge, for at kundgjøre dem, hvad der var ham befalet af Gud."),
]


def bruk_rettelser(boker: dict, logg: list) -> None:
    for b, k, v, gammel, ny in RETTELSER:
        t = boker[b][k][v]
        if gammel not in t:
            raise SystemExit(f"Rettelsen for {b} {k},{v} passer ikke lenger: «{gammel}»")
        boker[b][k][v] = t.replace(gammel, ny)
        logg.append(f"{b} {k},{v}: rettet for hånd: «{gammel}» → «{ny}»")
    for b, k, v, tekst in TILLEGG:
        boker[b][k] = {v: tekst, **boker[b][k]}
        logg.append(f"{b} {k},{v}: lagt til for hånd: «{tekst}»")
    # Vers som er delt for hånd («4. J Herrens …» inne i vers 3).
    for b, ks in boker.items():
        for k, vs in ks.items():
            for v in list(vs):
                deler = re.split(r" (?=\d+\. )", vs[v])
                if len(deler) > 1 and all(re.match(rf"{v + i}\. ", d) for i, d in enumerate(deler[1:], 1)):
                    vs[v] = deler[0]
                    for i, d in enumerate(deler[1:], 1):
                        vs[v + i] = d.split(" ", 1)[1]
            ks[k] = dict(sorted(vs.items()))


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--ocr", required=True)
    p.add_argument("--alto", required=True)
    p.add_argument("--ut", required=True)
    p.add_argument("--logg", help="rettelser-1887.json: alt som er rettet, og ord som bør korrekturleses")
    p.add_argument("--debug", action="store_true")
    p.add_argument("--sider", help="bare disse sidene, f.eks. 6-8 (til feilsøking)")
    a = p.parse_args()
    ocr = pathlib.Path(a.ocr)
    bygg_leksikon(pathlib.Path(a.alto))
    logg: list[str] = []
    boker: dict[str, dict[int, dict[int, str]]] = {}
    hendelser = []  # (canvas, type, data)
    sider = SIDER
    if a.sider:
        f, t = map(int, a.sider.split("-"))
        sider = [c for c in sider if f <= c <= t]
    for c in sider:
        if True:
            fil = ocr / f"c{c:04d}.json"
            if not fil.exists():
                logg.append(f"side {c}: mangler OCR")
                continue
            side = json.loads(fil.read_text(encoding="utf-8"))
            alto = les_alto(pathlib.Path(a.alto) / f"{c:04d}.xml", side["bredde"] / 1300, side["midt"])
            linjer = [(sp, x, ord_, gap, y, h) for sp, x, ord_, gap, y, h in linjer_paa_siden(side, alto, logg)]
            hendelser.append({"side": c, "linjer": linjer})
    if a.debug:
        for h in hendelser:
            for sp, x, ord_, gap, y, hh in h["linjer"]:
                print(h["side"], sp, x, y, hh, " ".join(ord_))
        return
    rå = tolk(hendelser, logg)
    boker = {b: {k: {v: sett_sammen([t for t, _, _ in l], logg, f"{b} {k},{v}") for v, l in vs.items()} for k, vs in ks.items()}
             for b, ks in rå.items()}
    if not a.sider:
        bruk_rettelser(boker, logg)
    for b, ks in boker.items():
        for k, vs in ks.items():
            hull = [v for v in range(min(vs), max(vs) + 1) if v not in vs]
            if hull:
                logg.append(f"{b} {k}: SJEKK: vers {', '.join(map(str, hull))} mangler etter rettelsene")
    pathlib.Path(a.ut).write_text(json.dumps({"bøker": boker, "logg": logg}, ensure_ascii=False, indent=1), encoding="utf-8")
    if a.logg:
        # Ord som ikke finnes i Nasjonalbibliotekets OCR av boka: mulige lesefeil (eller sjeldne ord og navn).
        usikre = {}
        for b, ks in boker.items():
            for k, vs in ks.items():
                for v, t in vs.items():
                    o = [w for w in (re.sub(r"^\W+|\W+$", "", x) for x in t.split()) if w and LEKSIKON[w] == 0]
                    if o:
                        usikre[f"{b} {k},{v}"] = o
        grupper = {
            "for_hånd": [l for l in logg if "for hånd" in l],
            "sjekk": [l for l in logg if "SJEKK" in l],
            "versnummer": [l for l in logg if "versnummer" in l or "første vers" in l or "delt der" in l],
            "ord_fra_linjelesingen": [l for l in logg if "linjelesingen" in l],
            "ordlisten": [l for l in logg if "(ordlisten)" in l],
            "sammenslått_orddeling": [l for l in logg if "slått sammen til" in l],
            "fjernet": [l for l in logg if "fjernet" in l or "tatt bort" in l],
            "annet": [],
        }
        brukt = {l for v in grupper.values() for l in v}
        grupper["annet"] = [l for l in logg if l not in brukt]
        grupper["usikre_ord"] = usikre
        pathlib.Path(a.logg).write_text(json.dumps(grupper, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    main()
