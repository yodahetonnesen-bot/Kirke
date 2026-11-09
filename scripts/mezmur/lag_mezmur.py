"""Leser mezmurboka fra Debre Tsion Kidist Mariam i Kristiansand (fire PDF-deler) og lager content/mezmur/mezmurer.json.

Teksten settes inn slik den står i boka, uten oversettelse. Bruk:
  python3 -I scripts/mezmur/lag_mezmur.py del1.pdf del2.pdf del3.pdf del4.pdf
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROT = Path(__file__).resolve().parent.parent.parent

tekst = "".join(subprocess.run(["pdftotext", "-layout", f, "-"], capture_output=True, text=True, check=True).stdout for f in sys.argv[1:])
linjer = tekst.replace("\f", "\n").splitlines()

# Innholdsfortegnelsen slutter der første mezmur begynner («1. የሰማይ ምስጋና» etter overskriften «መዝሙር ዘዘወትር»).
start = next(i for i, l in enumerate(linjer) if re.match(r"^\s*1\.\s+የሰማይ ምስጋና\s*$", l))
start = max(i for i in range(start) if linjer[i].strip().startswith("መዝሙር ዘ"))

OVERSKRIFT = re.compile(r"^\s*(\d{1,4})\s*\.\s*([^\d\s.].*?)\s*$")
KATEGORI = re.compile(r"^\s*(መዝሙር ዘ\S.*?|የበዓላት መዝሙር)\s*$")
SIDETALL = re.compile(r"^\s*ገ\s*ጽ\s*\d+\s*\|\s*\d+\s*$")
PYNT = re.compile(r"^[\s-]*$")  # tomme linjer og pyntelinjer (private tegn)

mezmurer = []
kategori = None
naa = None
for l in linjer[start:]:
    if SIDETALL.match(l):
        continue
    m = OVERSKRIFT.match(l)
    if m and int(m.group(1)) - (naa["nr"] if naa else 0) in (1, 2, 3):
        naa = {"nr": int(m.group(1)), "tittel": re.sub(r"\s+", " ", m.group(2)), "kategori": kategori, "linjer": []}
        mezmurer.append(naa)
        continue
    k = KATEGORI.match(l)
    if k and len(l.strip()) < 60:
        kategori = re.sub(r"\s+", " ", k.group(1))
        if naa is not None:
            # den forrige mezmuren er ferdig; linjer fram til neste overskrift (undertitler) tas ikke med
            naa = {"nr": naa["nr"], "linjer": []}
        continue
    if naa is None:
        continue
    if PYNT.match(l):
        if naa["linjer"] and naa["linjer"][-1] != "":
            naa["linjer"].append("")
        continue
    naa["linjer"].append(re.sub(r"[-]", "", l).strip())

for m in mezmurer:
    while m["linjer"] and m["linjer"][-1] == "":
        m["linjer"].pop()

nr = [m["nr"] for m in mezmurer]
mangler = sorted(set(range(1, max(nr) + 1)) - set(nr))
(ROT / "content/mezmur/mezmurer.json").write_text(json.dumps(mezmurer, ensure_ascii=False, indent=1), encoding="utf-8")
print(f"{len(mezmurer)} mezmurer, {len({m['kategori'] for m in mezmurer})} kategorier, mangler nr: {mangler[:30]}")
tomme = [m["nr"] for m in mezmurer if not m["linjer"]]
print("uten tekst:", tomme[:30])
