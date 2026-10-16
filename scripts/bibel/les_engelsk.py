"""Leser de frie engelske oversettelsene av bøkene som ellers bare står på amharisk, og deler dem i enheter.

Bruk:
  python3 -I scripts/bibel/les_engelsk.py --schodde <3268629_djvu.txt> --enok <BookOfEnoch_1917_djvu.txt> \
      --harden <cu31924096083336_djvu.txt> --jubileer <djvu-tekst> --ut <engelsk.json>

Kildene (alle public domain, OCR-tekst fra archive.org):
  Tiz   G. H. Schodde, «The Apostolic Canons, Translated from the Ethiopic», Journal of the Society of Biblical
        Literature and Exegesis 5 (1885), s. 61–72 (JSTOR Early Journal Content, archive.org/details/jstor-3268629).
  1En   R. H. Charles, The Book of Enoch (SPCK 1917).
  Did   J. M. Harden, The Ethiopic Didascalia (SPCK 1920).
  Jub   R. H. Charles, The Book of Jubilees (1917/1902).
Teksten står som i kilden; bare sidetopper, sidetall, fotnoter og orddeling på slutten av linjen er tatt bort.

Resultatet: {bok: {"enheter": [[henvisning, tekst], …], "overskrifter": {henvisning: tekst}}}. Hvordan enhetene
står ved siden av de amhariske versene, står i data/bibel/kart-engelsk.json.
"""
import argparse
import json
import pathlib
import re


def rens(t: str) -> str:
    """Slår sammen linjene: orddeling, mellomrom foran skilletegn (1880-tallets sats)."""
    t = re.sub(r"(\w)- *\n\s*(\w)", r"\1\2", t)
    t = re.sub(r"\s+", " ", t)
    t = re.sub(r" ([;:,.!?])", r"\1", t)
    return t.strip()


ROMERTALL = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100}


def romersk(s: str) -> int:
    s = s.replace("1", "I").replace("l", "I")
    n = 0
    for a, b in zip(s, s[1:] + " "):
        v = ROMERTALL[a]
        n += -v if b != " " and ROMERTALL.get(b, 0) > v else v
    return n


def schodde(fil: pathlib.Path) -> dict:
    t = fil.read_text(encoding="utf-8")
    t = t[t.index("Translation.") + len("Translation."):]
    t = re.sub(r"\n\s*THE APOSTOLIC CANONS, TRANSLATED FROM THE ETHIOPIC\.\s*\d[\d ]*\s*\n", "\n", t)
    t = re.sub(r"\n\s*\d+ JOURNAL OF THE EXEGETICAL SOCIETY\.\s*\n", "\n", t)
    t = t.replace("\n. a little meat", "\na little meat")  # OCR-rusk
    t = t.replace("Canon XL It is not allowed", "Canon XI. It is not allowed")  # OCR: «XI.» lest som «XL»
    deler = re.split(r"\n\s*Canon ([XLVI1l]+)[.,]? ", "\n" + t)
    innledning = rens(deler[0])
    enheter = []
    for i in range(1, len(deler), 2):
        nr = romersk(deler[i])
        enheter.append([f"{nr}", rens(deler[i + 1])])
    nr = [int(e[0]) for e in enheter]
    if nr != list(range(1, 58)):
        raise SystemExit(f"Schodde: kanonene er ikke 1–57: {nr}")
    return {"enheter": [["innledning", innledning]] + enheter}


def romersk_fri(s: str) -> int:
    """Romertall med OCR-feil («XIl», «XxIl», «Cl»)."""
    s = s.replace(" ", "").replace("l", "I").replace("1", "I").replace("|", "I").upper()
    return romersk(re.sub(r"[^IVXLC]", "I", s))


def del_vers(tekst: str, ref: str, logg: list) -> list[list[str]]:
    """Deler et kapittel i vers etter numrene («1.», «2 And», «6a.», «|.»). Alle tall som kan være versnumre,
    samles, og den lengste stigende rekken velges (tall med punktum teller mest, små hopp foretrekkes), så tall
    inne i teksten ikke deler verset."""
    tekst = re.sub(r"^[|lI]\.", "1.", tekst.strip())
    kand = [(m.start(), m.end(), int(m.group(1)), m.group(2), bool(m.group(3)))
            for m in re.finditer(r"(?:(?<=[\s\[(\"'‘“])|^)(\d{1,3})([a-j]?)(\.)?(?=[\s'‘’\"“(\[]|(?<=\.)[A-Z])", tekst)]
    best: list[tuple] = []  # (poeng, forrige)
    for j, (pj, _, nj, bj, dj) in enumerate(kand):
        vekt = 2.0 if dj else 1.0
        start = (vekt - 0.3 * (nj - 1), -1) if (nj <= 3 or pj < 3) else (-1e9, -1)
        kandidat = start
        for i in range(j):
            pi, _, ni, bi, di = kand[i]
            if best[i][0] < -1e8:
                continue
            if nj > ni or (nj == ni and bj > bi) or (bj and nj >= ni - 2 and nj != ni):
                hopp = nj - ni
                if hopp > 4 or hopp < -2:
                    continue
                kandidat = max(kandidat, (best[i][0] + vekt - 0.6 * max(0, hopp - 1), i))
        best.append(kandidat)
    if not best or max(b[0] for b in best) < 0:
        return [["", tekst.strip()]]
    j = max(range(len(best)), key=lambda i: best[i][0])
    kjede = []
    while j >= 0:
        kjede.append(kand[j])
        j = best[j][1]
    kjede.reverse()
    deler: list[list[str]] = []
    for_forste = tekst[:kjede[0][0]].strip()
    if len(re.findall(r"\w", for_forste)) >= 4:
        deler.append(["0", for_forste])  # tekst før første versnummer
    elif for_forste:
        kjede[0] = (0,) + kjede[0][1:]  # rusk som «[» eller «G®» blir stående foran vers 1
    for i, (p, e, n, b, d) in enumerate(kjede):
        slutt = kjede[i + 1][0] if i + 1 < len(kjede) else len(tekst)
        deler.append([f"{n}{b}", (for_forste + " " if i == 0 and p == 0 and for_forste else "") + tekst[e:slutt].strip()])
    # Samme nummer to ganger (5,6a … 5,6d): gjør henvisningen entydig.
    sett: dict[str, int] = {}
    for d in deler:
        if d[0] in sett:
            sett[d[0]] += 1
            logg.append(f"{ref}: vers {d[0]} står to ganger; den andre fikk «{d[0]}·{sett[d[0]]}»")
            d[0] = f"{d[0]}·{sett[d[0]]}"
        else:
            sett[d[0]] = 1
    return deler


def rens_charles(t: str) -> str:
    t = rens(t)
    t = re.sub(r"(?<![\w\]\[])\|(?![\w\]\[])", "I", t)  # «from them | heard» → «I»
    t = t.replace("]|", "]]").replace("|]", "]]").replace("[|", "[[")
    t = re.sub(r"\s+", " ", t)
    return t.strip()


# Kapitlene i den rekkefølgen Charles har dem: 91,1–10 står mellom 92 og 93, og 91,11–19 etter 93.
ENOK_REKKEFOLGE = list(range(1, 91)) + [92, 91, 93, 91] + list(range(94, 109))


def enok(fil: pathlib.Path, logg: list) -> dict:
    t = fil.read_text(encoding="utf-8")
    start = t.index("\nI-XXXVI")
    t = t[start:]
    t = re.sub(r"\n\s*www\.globalgrey\.co\.uk\s*\n", "\n", t)
    t = re.sub(r"\n\s*The Book of Enoch By R\.H\. Charles\s*\n", "\n", t)
    # Redaktørenes noter: «3 [Only six are mentioned; see Charles' note …--EDD.]»
    for m in re.finditer(r"\d*\s*\[[^\[\]]*--\s*EDD\.\]", t):
        logg.append(f"Enok (note): {rens(m.group(0))}")
    t = re.sub(r"\d*\s*\[[^\[\]]*--\s*EDD\.\]", " ", t)
    kapitler = re.split(r"(?:CHAPTER|Chapter)[ \t]+([IVXLCxil|1]+(?: [IVXLC]+)?)\.?[ \t]*\n", t)
    if len(kapitler) != 2 * len(ENOK_REKKEFOLGE) + 1:
        raise SystemExit(f"Enok: fant {len(kapitler) // 2} kapitteloverskrifter, ventet {len(ENOK_REKKEFOLGE)}")
    enheter: list[list[str]] = []
    fjernet: list[str] = []
    for i in range(1, len(kapitler), 2):
        # Romertallene er ofte lest feil («XxiIll»); rekkefølgen er sikrere.
        kap = ENOK_REKKEFOLGE[i // 2]
        if romersk_fri(kapitler[i]) != kap:
            logg.append(f"Enok: kapitteloverskriften «{kapitler[i]}» er kapittel {kap}")
        kropp = kapitler[i + 1]
        avsnitt = re.split(r"\n\s*\n", kropp)
        beholdt = []
        for a in avsnitt:
            a0 = a.strip()
            if not a0:
                continue
            # Charles' overskrifter over delene («VI-XI. The Fall of the Angels …») og redaktørenes noter.
            if re.match(r"^[IVXLCl]+[a-z]?(?:\s*[-–—]\s*[IVXLCl]+)?\.\s+[A-Z(]", a0):
                fjernet.append(f"Enok {kap} (overskrift): {rens(a0)}")
                continue
            if re.match(r"^(\d+\s*)?\[.*EDD\.\]", rens(a0)) or a0.startswith("*"):
                fjernet.append(f"Enok {kap} (note): {rens(a0)}")
                continue
            if re.match(r"^[A-Z][A-Z ,'-]+$", a0) and len(a0) > 8:
                fjernet.append(f"Enok {kap} (deltittel): {a0}")
                continue
            beholdt.append(a0)
        tekst = rens_charles("\n".join(beholdt))
        # Notemerker som «Seven 7° Metal»
        tekst = re.sub(r"(?<=[a-z]) \d+° ", " ", tekst)
        for nr, vt in del_vers(tekst, f"Enok {kap}", logg):
            enheter.append([f"{kap},{nr}" if nr else f"{kap}", vt])
    logg += fjernet
    return {"enheter": enheter}


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--schodde")
    p.add_argument("--enok")
    p.add_argument("--harden")
    p.add_argument("--jubileer")
    p.add_argument("--ut", required=True)
    a = p.parse_args()
    ut = {}
    logg: list[str] = []
    if a.schodde:
        ut["Tiz"] = schodde(pathlib.Path(a.schodde))
    if a.enok:
        ut["1En"] = enok(pathlib.Path(a.enok), logg)
    for b in ut:
        ut[b]["logg"] = [l for l in logg if l.startswith({"1En": "Enok", "Tiz": "Schodde"}.get(b, b))]
    pathlib.Path(a.ut).write_text(json.dumps(ut, ensure_ascii=False, indent=1), encoding="utf-8")
    for b, d in ut.items():
        print(b, len(d["enheter"]), "enheter,", sum(len(t.split()) for _, t in d["enheter"]), "ord")


if __name__ == "__main__":
    main()
