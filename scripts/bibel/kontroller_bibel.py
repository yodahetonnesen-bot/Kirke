"""Kontrollerer at ingenting mangler i bibeldataene, og skriver rapporten data/bibel/KONTROLL.md.

Bruk: python3 -I scripts/bibel/kontroller_bibel.py data/bibel --ebible-amh <mappe med amh_usfm>

Kontrollene:
  1. Hver versplass i hvert kapittel har amharisk tekst (alene eller i en versgruppe), uten hull.
     Vers som ikke finnes i kilden, er merket «mangler» og listes her.
  2. Ingen tomme vers og ingen rester av latinske bokstaver eller HTML i amharisk tekst.
  3. Norsk 1930 og En Levende Bok har tekst på hver plass.
  4. Amharisk NT sammenlignes med en annen digital utgave av samme oversettelse (eBible),
     både kapittel for kapittel og vers for vers, så tekst som mangler eller er feil i én kilde,
     blir oppdaget.
"""
import difflib
import json
import pathlib
import re
import sys
import unicodedata

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from lag_bibeldata import BOKER, les_usfm  # noqa: E402

TEGN = re.compile(r"[\s፡።፣፤፥፦፧፨\.,;:!?¡¿\"'“”‘’«»()\[\]—–\-…·*]+")


def normaliser(s: str) -> str:
    s = re.sub(r"\*?ፍ\d+\*?", "", s)  # fotnotemerker
    return TEGN.sub("", unicodedata.normalize("NFC", s))


def ekstra(g):
    return g[3] if len(g) > 3 else {}


def dekning(grupper):
    """Gir (dekkede plasser, hull, overlapp) for vanlige grupper (ikke ekstra vers)."""
    dekket, overlapp = set(), []
    for g in grupper:
        if ekstra(g).get("ekstra"):
            continue
        for v in range(g[0], g[1] + 1):
            if v in dekket:
                overlapp.append(v)
            dekket.add(v)
    siste = max(dekket) if dekket else 0
    return dekket, [v for v in range(1, siste + 1) if v not in dekket], overlapp


def main() -> None:
    data = pathlib.Path(sys.argv[1])
    ebible = {}
    if "--ebible-amh" in sys.argv:
        mappe = pathlib.Path(sys.argv[sys.argv.index("--ebible-amh") + 1])
        ebible = {f.name[3:6]: les_usfm(f) for f in mappe.glob("*.usfm")}

    boker = json.loads((data / "boker.json").read_text(encoding="utf-8"))
    rettelser = json.loads((data / "rettelser.json").read_text(encoding="utf-8"))
    funn = {k: [] for k in ("mangler", "hull", "tomme", "rusk", "no_hull", "elb_hull", "ulikt")}
    tall = {"kapitler": 0, "am": 0, "grupper": 0, "ekstra": 0, "no": 0, "elb": 0}
    nt = {"kapitler_like": 0, "kapitler_ulike": [], "vers_like": 0, "vers_ulike": [], "bare_hos_oss": 0}

    for (osis, no_navn, _a, _e, usfm), bok in zip(BOKER, boker):
        les = lambda m: json.loads((data / m / f"{osis}.json").read_text(encoding="utf-8"))  # noqa: E731
        am, no = les("am"), les("no1930")
        elb = les("elb") if "elb" in bok["tekster"] else None
        for k in range(1, bok["kapitler"] + 1):
            tall["kapitler"] += 1
            ref = f"{no_navn} {k}"
            grupper, norske = am[k - 1], no[k - 1]
            dekket, hull, overlapp = dekning(grupper)
            n_dekket, n_hull, _ = dekning(norske)
            tall["am"] += sum(g[1] - g[0] + 1 for g in grupper if g[2] and not ekstra(g).get("ekstra"))
            tall["grupper"] += sum(1 for g in grupper if g[1] > g[0])
            tall["ekstra"] += sum(1 for g in grupper if ekstra(g).get("ekstra"))
            tall["no"] += len(norske)
            if hull or overlapp:
                funn["hull"].append(f"{ref}: hull {hull}, overlapp {overlapp}")
            for g in grupper:
                if ekstra(g).get("mangler"):
                    funn["mangler"].append(f"{ref},{g[0]}" + (f"–{g[1]}" if g[1] > g[0] else ""))
                elif not g[2].strip():
                    funn["tomme"].append(f"{ref},{g[0]}")
                if re.search(r"[A-Za-z<>@]|&\w+;", g[2]):
                    funn["rusk"].append(f"{ref},{g[0]}: …{re.search(r'.{0,20}[A-Za-z<>@].{0,20}', g[2]).group(0)}…")
            if n_hull:
                funn["no_hull"].append(f"{ref}: {n_hull}")
            if max(dekket, default=0) != max(n_dekket, default=0):
                funn["ulikt"].append(f"{ref}: amharisk til vers {max(dekket, default=0)}, norsk til vers {max(n_dekket, default=0)}")
            if elb is not None:
                e_dekket, e_hull, _ = dekning(elb[k - 1] if k <= len(elb) else [])
                tall["elb"] += len(e_dekket)
                if e_hull:
                    funn["elb_hull"].append(f"{ref},{', '.join(map(str, e_hull))}")
            if usfm in ebible and k <= len(ebible[usfm]):
                andre = ebible[usfm][k - 1]
                # Hele kapitlet som én tekst, i kildens egen rekkefølge.
                a = normaliser(" ".join(g[2] for g in grupper))
                b = normaliser(" ".join(g[2] for g in andre))
                if a == b:
                    nt["kapitler_like"] += 1
                else:
                    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
                    # «delete» er tekst som bare vi har: eBible mister de første versene i en
                    # versgruppe (Matt 2,1-3 har bare vers 3). Det som må sjekkes, er tekst som
                    # eBible har og vi ikke har, eller som er ulik.
                    biter = [
                        (op, a[i1:i2][:80], b[j1:j2][:80])
                        for op, i1, i2, j1, j2 in sm.get_opcodes() if op in ("insert", "replace")
                    ]
                    nt["bare_hos_oss"] += sum(1 for op, *_ in sm.get_opcodes() if op == "delete")
                    if biter:
                        nt["kapitler_ulike"].append((ref, biter))
                    else:
                        nt["kapitler_like"] += 1
                like = {(g[0], g[1]): normaliser(g[2]) for g in andre}
                for g in grupper:
                    if (g[0], g[1]) in like:
                        if like[(g[0], g[1])] == normaliser(g[2]):
                            nt["vers_like"] += 1
                        else:
                            nt["vers_ulike"].append(f"{ref},{g[0]}")

    l = ["# Kontroll av bibelteksten", ""]
    l += ["Laget av `scripts/bibel/kontroller_bibel.py`. Kjøres på nytt når dataene endres.", ""]
    l += ["## Tall", ""]
    l += [
        f"- Kapitler: {tall['kapitler']}",
        f"- Amharisk: tekst på {tall['am']} versplasser, {tall['grupper']} versgrupper (sammenslåtte vers), "
        f"{tall['ekstra']} ekstra vers uten norsk motstykke",
        f"- Norsk 1930: {tall['no']} vers",
        f"- En Levende Bok (NT): {tall['elb']} vers",
        "",
    ]
    l += ["## Må fikses av et menneske", ""]
    l += [f"### Vers som mangler i den amhariske kilden: {len(funn['mangler'])}", ""]
    l += ["Disse står som «mangler» i leseren. Teksten kan skrives av fra en trykt amharisk bibel.", ""]
    l += [f"- {x}" for x in funn["mangler"]] + [""]
    navn = {
        "hull": "Hull i den amhariske nummereringen",
        "tomme": "Tomme amhariske vers som ikke er merket",
        "rusk": "Latinske bokstaver eller HTML i amharisk tekst",
        "no_hull": "Hull i norsk 1930",
    }
    for nokkel, overskrift in navn.items():
        l += [f"### {overskrift}: {len(funn[nokkel])}", ""] + [f"- {x}" for x in funn[nokkel]] + [""]
    l += ["## Til informasjon", ""]
    l += [f"### Kapitler der amharisk og norsk slutter på ulikt vers: {len(funn['ulikt'])}", ""]
    l += ["Ulik versinndeling i oversettelsene. Ingen tekst mangler; radene står side om side så langt de går.", ""]
    l += [f"- {x}" for x in funn["ulikt"]] + [""]
    l += [f"### Vers som En Levende Bok ikke har med: {len(funn['elb_hull'])}", ""]
    l += ["Vers som moderne oversettelser utelater fordi de mangler i de eldste håndskriftene.", ""]
    l += [f"- {x}" for x in funn["elb_hull"]] + [""]
    l += ["### Rettet automatisk (bør sjekkes av noen som kan amharisk)", ""]
    for nokkel, overskrift in [
        ("tegn", "Tegnfeil fra gammel skrifttype (de som er merket usikker, må sjekkes mot trykt bibel)"),
        ("skjulte", "Vers som var gjemt inne i et annet vers"),
        ("nummerering", "Vers lagt på norsk versplass"),
        ("erstattet", "Kapitler hentet fra en annen kopi"),
        ("fylt", "Vers hentet fra eBible"),
    ]:
        l += [f"**{overskrift}:** {len(rettelser[nokkel])}", ""] + [f"- {x}" for x in rettelser[nokkel]] + [""]
    if ebible:
        l += ["## Amharisk NT sammenlignet med eBible", ""]
        l += [
            f"- Kapitler der all tekst hos eBible også finnes hos oss: {nt['kapitler_like']} av {nt['kapitler_like'] + len(nt['kapitler_ulike'])}",
            f"- Tekstbiter som bare finnes hos oss (eBible mister første del av versgrupper): {nt['bare_hos_oss']}",
            f"- Vers med lik versdeling og helt lik tekst: {nt['vers_like']}",
            f"- Vers med lik versdeling og ulik tekst: {len(nt['vers_ulike'])}",
            "",
            "Tekst som eBible har, men som mangler eller er ulik hos oss (tegnsetting og mellomrom er tatt bort):",
            "",
        ]
        for ref, biter in nt["kapitler_ulike"]:
            l.append(f"- **{ref}**")
            for op, a, b in biter[:6]:
                l.append(f"  - wordproject «{a}» / eBible «{b}»")
        l.append("")
    (data / "KONTROLL.md").write_text("\n".join(l), encoding="utf-8")
    print("\n".join(x for x in l if x.startswith(("- Kapitler", "- Amharisk", "- Norsk", "- En Levende", "### ", "- Vers med"))))


if __name__ == "__main__":
    main()
