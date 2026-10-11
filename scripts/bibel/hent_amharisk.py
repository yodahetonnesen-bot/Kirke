"""Henter den amhariske bibelen (1962-oversettelsen, 66 bøker) fra wordproject.org.

Bruk: python3 -I scripts/bibel/hent_amharisk.py <mellomlager-mappe>

Hver kapittelside lagres urørt i mellomlageret, så skriptet kan kjøres på nytt
uten å hente alt en gang til. Selve tolkningen gjøres av lag_bibeldata.py.
"""
import pathlib
import re
import sys
import time
import urllib.request

ROT = "https://www.wordproject.org/bibles/am"
# Bare ASCII: med «ø» i User-Agent svarer serveren 403.
AGENT = "Kirke-laeringsside/0.1 (bibeltekst til sondagsskole)"


def hent(url: str) -> str:
    for forsok in range(5):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": AGENT})
            with urllib.request.urlopen(req, timeout=30) as svar:
                return svar.read().decode("utf-8")
        except Exception as feil:  # nettverksfeil: vent og prøv igjen
            if forsok == 4:
                raise
            print(f"  feil ({feil}), prøver igjen", flush=True)
            time.sleep(2 ** forsok)
    raise RuntimeError("uåpnet")


def main() -> None:
    lager = pathlib.Path(sys.argv[1])
    lager.mkdir(parents=True, exist_ok=True)
    for bok in range(1, 67):
        mappe = lager / f"{bok:02d}"
        mappe.mkdir(exist_ok=True)
        forste = mappe / "1.htm"
        if not forste.exists():
            forste.write_text(hent(f"{ROT}/{bok:02d}/1.htm"), encoding="utf-8")
        html = forste.read_text(encoding="utf-8")
        lenker = [int(n) for n in re.findall(r'href="(\d+)\.htm#0" class="chap"', html)]
        antall = max(lenker + [1])
        for kap in range(2, antall + 1):
            fil = mappe / f"{kap}.htm"
            if fil.exists():
                continue
            fil.write_text(hent(f"{ROT}/{bok:02d}/{kap}.htm"), encoding="utf-8")
            time.sleep(0.15)
        print(f"bok {bok:02d}: {antall} kapitler", flush=True)


if __name__ == "__main__":
    main()
