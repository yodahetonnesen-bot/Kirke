"""Lager GJENNOMGANG.md: alt en prest, lærer eller amharisktalende bør gå over.

Henter «// Usikkert:»-merknadene øverst i lærsidene, bibelfortellingene og høytidsdataene,
og legger til punktene om bibelteksten og bønneboka. Kjør: python3 scripts/lag_gjennomgang.py
"""

import glob
import json
import re
from pathlib import Path

ROT = Path(__file__).resolve().parent.parent


def usikre(fil: Path) -> list[str]:
    """Merknadene «// Usikkert: …» med fortsettelseslinjene sine, fra kommentarene før første export."""
    hode = fil.read_text(encoding="utf-8").split("\nexport ")[0]
    punkter: list[str] = []
    for linje in hode.splitlines():
        s = linje.strip()
        if not s.startswith("//"):
            continue
        tekst = s[2:].strip()
        if tekst.startswith("Usikkert:"):
            punkter.append(tekst[len("Usikkert:"):].strip())
        elif punkter and tekst and not tekst.startswith(("Bygger på", "Kilder")):
            punkter[-1] += " " + tekst
    return punkter


def tittel(fil: Path) -> str:
    m = re.search(r'tittel:\s*\{\s*no:\s*"([^"]+)",\s*am:\s*"([^"]+)"', fil.read_text(encoding="utf-8"))
    return f"{m.group(1)} · {m.group(2)}" if m else fil.stem


def slug(fil: Path) -> str:
    m = re.search(r'slug:\s*"([^"]+)"', fil.read_text(encoding="utf-8"))
    return m.group(1) if m else fil.stem


def main() -> None:
    ut: list[str] = []
    ut.append("# Gjennomgang\n")
    ut.append(
        "Alt som bør leses over før innholdet regnes som ferdig. Lærsidene er merket «Utkast» på nettsiden "
        "til `utkast: true` er satt til `false` i filen.\n"
    )

    ut.append("## For alle sidene\n")
    ut.append("- [ ] En som har amharisk som morsmål, leser all amharisk tekst (lærsider, fortellinger, kalender, menyer).")
    ut.append("- [ ] En prest eller søndagsskolelærer leser lærsidene og bibelfortellingene og godkjenner dem.")
    ut.append("- [ ] Tillatelse fra kirka / Bibelselskapet i Etiopia til å bruke den amhariske 81-bokbibelen (2000 E.C.).")
    ut.append("")

    ut.append("## Bibelen\n")
    ut.append("Vers som mangler i den amhariske kilden og må skrives av fra en trykt bibel:\n")
    k = (ROT / "data/bibel/KONTROLL.md").read_text(encoding="utf-8")
    ut += [f"- [ ] {l[2:]}" for l in re.findall(r"^- .+$", k.split("### Vers som mangler")[1].split("###")[0], re.M)]
    ut.append("- [ ] Overskriften i Salme 15 (om den mangler i kilden slik som i Salme 7).")
    k81 = (ROT / "data/bibel/KONTROLL-81.md").read_text(encoding="utf-8")
    del81 = k81.split("## Må sjekkes av et menneske")[1]
    for overskrift in re.findall(r"^### (.+)$", del81, re.M):
        ut.append(f"\n{overskrift} (81-bokbibelen, sjekkes mot en trykt ሰማንያ አሐዱ):\n")
        blokk = del81.split(f"### {overskrift}")[1].split("###")[0]
        ut += [f"- [ ] {l[2:]}" for l in re.findall(r"^- .+$", blokk, re.M)]
    ut.append("")

    ut.append("## Bønneboka\n")
    bok = json.loads((ROT / "content/bonner/bonnebok.json").read_text(encoding="utf-8"))
    ut.append(
        f"- [ ] Sammenlign teksten på nettsiden med PDF-en «{bok['kilde']['tittel']}» "
        f"(oversatt av {bok['kilde']['oversatt']}). Teksten er hentet ut maskinelt; særlig å/a, é og linjeskift bør sjekkes."
    )
    ut.append("- [ ] አንቀጸ ብርሃን mangler (teksten er ikke sendt ennå).")
    ut.append("")

    ut.append("## Kalenderen\n")
    ut += [f"- [ ] {p}" for p in usikre(ROT / "lib/hoytider-data.ts")]
    ut.append("- [ ] Fastetidene og hvilke dager det ikke fastes (se også siden om fastene).")
    ut.append("- [ ] ግጻዌ i kalenderen (fra EOTCDev API): sjekk noen dager mot en trykt ግጻዌ. Søndagssyklusen og de flyttbare høytidene mangler i kilden.")
    ut.append("")

    ut.append("## Lærsidene\n")
    for f in sorted(glob.glob(str(ROT / "content/laer/*.ts"))):
        fil = Path(f)
        if fil.stem in ("index", "typer", "deler"):
            continue
        punkter = usikre(fil)
        ut.append(f"### {tittel(fil)}\n")
        ut.append(f"`/laer/{slug(fil)}/` · `content/laer/{fil.name}`\n")
        ut += [f"- [ ] {p}" for p in punkter] or ["- [ ] Les gjennom hele siden."]
        ut.append("")

    fortellinger = sorted(glob.glob(str(ROT / "content/fortellinger/[gn]t.ts")))
    if fortellinger:
        ut.append("## Bibelfortellingene\n")
        for f in fortellinger:
            fil = Path(f)
            ut.append(f"### {'Det gamle testamentet' if fil.stem == 'gt' else 'Det nye testamentet'}\n")
            ut.append(f"`content/fortellinger/{fil.name}`\n")
            ut += [f"- [ ] {p}" for p in usikre(fil)] or ["- [ ] Les gjennom alle fortellingene."]
            ut.append("")

    ut.append("## Venter på innhold\n")
    ut.append("- [ ] Mezmur-tekstene.")
    ut.append("- [ ] Bilder av overskriftene i Salme 7 og 15 og av Salme 78,71–72 fra en trykt amharisk bibel.")
    ut.append("")

    (ROT / "GJENNOMGANG.md").write_text("\n".join(ut), encoding="utf-8")
    antall = sum(1 for l in ut if l.startswith("- [ ]"))
    print(f"GJENNOMGANG.md: {antall} punkter")


if __name__ == "__main__":
    main()
