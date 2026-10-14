"""Kontrollerer de nye bøkene fra lag_81.py mot kildene, og skriver data/bibel/KONTROLL-81.md.

Bruk: python3 -I scripts/bibel/kontroller_81.py data/bibel --a2000 <json-mappe> --api <80-weahadu.json> --web <mappe>

Kontrollene (stopper med feil hvis noe ikke stemmer):
  1. Hvert ord i den amhariske kilden står i dataene, i samme rekkefølge, kapittel for kapittel.
     Kilden leses direkte, uavhengig av lag_81.py. Overskriftene sammenlignes for seg.
  2. Hvert versnummer i kilden har en plass i dataene, med tekst eller merket «mangler».
  3. Hvert ord i de engelske (WEB) og norske kapitlene som brukes, står i den andre kolonnen.
"""
import collections
import json
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from lag_81 import KAPITTELMERKE, KART, NYE, UTVALG, les_usfm  # noqa: E402


def arg(navn: str) -> pathlib.Path:
    return pathlib.Path(sys.argv[sys.argv.index(navn) + 1])


def kilde_am(spes: dict, id: str, a2000: dict, api: list):
    """{kapittel i dataene: (vers [(nr, tekst)], overskrifter [tekst])} rett fra kildefilen."""
    kilde, bok_id, kapitler = spes["am"]
    ut = {}
    if kilde == "API":
        bok = next(b for b in api if b["book_number"] == bok_id)
        for i, kap in enumerate(bok["chapters"], 1):
            vers = [(v["verse"], v["text"]) for s in kap["sections"] for v in s["verses"]]
            ut[i] = (vers, [s["title"] for s in kap["sections"] if s.get("title") and s["verses"]])
        return ut
    d = json.loads(a2000[bok_id].read_text(encoding="utf-8"))
    i = 0
    for kap in d["chapters"]:
        if kapitler and kap["n"] not in kapitler:
            continue
        i += 1
        fra, til = UTVALG.get(id, {}).get(kap["n"], (1, 10**6))
        vers = [(v["v"], v["t"]) for v in kap["verses"] if v["v"] is None or fra <= v["v"] <= til]
        hode = [
            h["text"] for h in d.get("headings") or []
            if h["chapter"] == kap["n"] and fra <= h["before"] <= til and h["kind"] != "reference"
            and not (h["kind"] == "major" and KAPITTELMERKE.match(h["text"].strip()))
        ]
        ut[i] = ([(None if v is None else v - fra + 1, t) for v, t in vers], hode)
    return ut


def ord_(tekster) -> list[str]:
    return " ".join(t or "" for t in tekster).split()


def main() -> None:
    data = pathlib.Path(sys.argv[1])
    a2000 = {f.stem.split("-", 1)[1]: f for f in arg("--a2000").glob("*-*.json")}
    api = json.loads(arg("--api").read_text(encoding="utf-8"))
    web = {f.name.split("-")[1][:3]: f for f in arg("--web").glob("*eng-web.usfm")}
    boker = {b["id"]: b for b in json.loads((data / "boker.json").read_text(encoding="utf-8"))}
    rettelser = json.loads((data / "rettelser-81.json").read_text(encoding="utf-8"))

    feil: list[str] = []
    rader = []
    for id, spes in NYE.items():
        bok = boker[id]
        navn = bok["navn"]["no"]
        am = json.loads((data / "am" / f"{id}.json").read_text(encoding="utf-8"))
        kilde = kilde_am(spes, id, a2000, api)
        if len(kilde) != len(am):
            feil.append(f"{navn}: {len(am)} kapitler, kilden har {len(kilde)}")
        ord_kilde = ord_data = plasser = 0
        for k, (vers, hode) in kilde.items():
            grupper = am[k - 1]
            a, b = ord_(t for _, t in vers), ord_(g[2] for g in grupper)
            ord_kilde += len(a)
            ord_data += len(b)
            if a != b:
                i = next((i for i, (x, y) in enumerate(zip(a, b)) if x != y), min(len(a), len(b)))
                feil.append(f"{navn} {k}: teksten avviker fra kilden ved ord {i + 1} («{' '.join(a[i:i + 4])}»)")
            hd = [h for g in grupper if len(g) > 3 for h in g[3].get("overskrifter", [])]
            if collections.Counter(h.strip() for h in hode) != collections.Counter(hd):
                feil.append(f"{navn} {k}: overskriftene avviker fra kilden")
            dekket = {v for g in grupper for v in range(g[0], g[1] + 1)}
            plasser += len(dekket)
            for nr, _ in vers:
                if nr is not None and nr not in dekket:
                    feil.append(f"{navn} {k},{nr}: versnummeret mangler i dataene")
        mangler = sum(g[1] - g[0] + 1 for kap in am for g in kap if len(g) > 3 and g[3].get("mangler"))

        andre = "–"
        if "en_kilde" in spes or "no_kilde" in spes:
            if "en_kilde" in spes:
                kode, kart = spes["en_kilde"]
                kilde2 = {k: {v[0]: v[1] for v in liste} for k, liste in les_usfm(web[kode]).items()}
                mappe, andre = "en", f"WEB {kode}"
            else:
                osis, kart = spes["no_kilde"]
                norsk = json.loads((data / "no1930" / f"{osis}.json").read_text(encoding="utf-8"))
                kilde2 = {k: {g[0]: g[2] for g in kap} for k, kap in enumerate(norsk, 1)}
                mappe, andre = "no1930", f"Norsk 1930 {osis}"
            # Kapitlene og versene i kilden som skal være med.
            brukt: dict[int, set[int]] = collections.defaultdict(set)
            for k in range(1, len(am) + 1):
                biter = KART.get(id, {}).get(k)
                if biter is None:
                    kk = kart[k] if kart else k
                    brukt[kk] |= set(kilde2.get(kk, {}))
                    continue
                for bit in biter:
                    for ek, ef, et in (bit[2] if len(bit) == 3 else [bit[2:]]):
                        brukt[ek] |= set(range(ef, et + 1))
            forventet = ord_(t for kk, vs in brukt.items() for nr, t in kilde2[kk].items() if nr in vs)
            kolonne = json.loads((data / mappe / f"{id}.json").read_text(encoding="utf-8"))
            funnet = ord_(g[2] for kap in kolonne for g in kap)
            if collections.Counter(forventet) != collections.Counter(funnet):
                feil.append(f"{navn}: ordene i {andre} stemmer ikke med dataene "
                            f"({len(forventet)} i kilden, {len(funnet)} i dataene)")
            andre += f" ({len(funnet)} ord)"
        rader.append((bok, len(am), plasser, mangler, ord_kilde, ord_data, andre))

    l = ["# Kontroll av de nye bøkene (81-bokskanonen)", ""]
    l += ["Laget av `scripts/bibel/kontroller_81.py`. Kjøres på nytt når dataene endres.", ""]
    l += ["Amharisk tekst: 2000 E.C.-utgaven (EOTCOpenSource), Baruk fra BibleAPI. Hvert ord i kilden er "
          "sammenlignet med dataene, i samme rekkefølge.", ""]
    l += ["| Bok | Kanon | Kapitler | Versplasser | Mangler | Ord (kilde / data) | Andre kolonne |",
          "|---|---|---|---|---|---|---|"]
    for bok, kap, plasser, mangler, ok, od, andre in rader:
        l.append(f"| {bok['navn']['no']} · {bok['navn']['am']} | {bok['kanon']} | {kap} | {plasser} | {mangler} | "
                 f"{ok} / {od} | {andre} |")
    l += ["", f"## Feil: {len(feil)}", ""] + [f"- {x}" for x in feil] + [""]
    l += ["## Må sjekkes av et menneske", ""]
    l += ["### Tomme vers i kilden (vises som «mangler»)", "",
          "Versene kan være slått sammen med et vers ved siden av, eller mangle i den digitale kilden. "
          "Må sjekkes mot en trykt ሰማንያ አሐዱ.", ""]
    l += [f"- {x}" for x in rettelser["mangler"]] + [""]
    l += ["### Vers slått sammen ved import", ""] + [f"- {x}" for x in rettelser["sammenslatt"]] + [""]
    l += ["### Kapitler der den andre kolonnen har en annen versinndeling", "",
          "Versene står side om side etter nummer så langt de går; ingen tekst er tatt bort.", ""]
    l += [f"- {x}" for x in rettelser["ulik_versdeling"]] + [""]
    (data / "KONTROLL-81.md").write_text("\n".join(l), encoding="utf-8")
    print(f"{len(rader)} bøker kontrollert, {sum(r[4] for r in rader)} amhariske ord, {len(feil)} feil")
    if feil:
        print("\n".join(feil[:40]))
        sys.exit(1)


if __name__ == "__main__":
    main()
