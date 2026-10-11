"""Leser den norske 1930-bibelen ut av CrossWire-modulen «Norsk» (SWORD-format).

Bruk:
  pip download pysword --no-deps --no-binary :all:   # og pakk ut tar.gz-filen
  curl -LO https://www.crosswire.org/ftpmirror/pub/sword/packages/rawzip/Norsk.zip  # og pakk ut
  python3 -I scripts/bibel/les_norsk1930.py <pysword-mappe> <modul-mappe> <ut.json>

Resultatet er {osis-id: [[vers, ...], ...]} etter KJV-versifiseringen, som modulen bruker.
"""
import json
import sys

sys.path.insert(0, sys.argv[1])
from pysword.canons import canons  # noqa: E402
from pysword.modules import SwordModules  # noqa: E402


def main() -> None:
    moduler = SwordModules(sys.argv[2])
    moduler.parse_modules()
    bibel = moduler.get_bible_from_module("Norsk")
    ut = {}
    for testament in ("ot", "nt"):
        for bok in canons["kjv"][testament]:
            osis, kapitler = bok[1], bok[3]
            ut[osis] = [
                [
                    bibel.get(books=[osis], chapters=[k], verses=[v], clean=True).strip()
                    for v in range(1, antall + 1)
                ]
                for k, antall in enumerate(kapitler, start=1)
            ]
    with open(sys.argv[3], "w", encoding="utf-8") as f:
        json.dump(ut, f, ensure_ascii=False)
    print(f"{len(ut)} bøker, {sum(len(v) for b in ut.values() for v in b)} vers")


if __name__ == "__main__":
    main()
