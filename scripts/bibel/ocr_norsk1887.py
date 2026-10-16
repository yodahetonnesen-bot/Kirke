"""OCR av de apokryfiske bøkene fra 1887 (Nasjonalbiblioteket, URN:NBN:no-nb_digibok_2014031808003).

Bruk:
  python3 -I scripts/bibel/ocr_norsk1887.py --alto <alto-mappe fra api.nb.no> --bilder <mappe for sidebilder> \
      --tessdata <mappe med frak2021.traineddata> --ut <mappe for cNNNN.json> [sidenummer …]

Nasjonalbibliotekets egen OCR (ALTO) er laget av bilder i halv oppløsning og leser frakturen dårlig. Her hentes
sidebildene i full oppløsning (IIIF-adressen står i ALTO-filene), og tesseract 5 kjøres med fraktur-modellen
frak2021 (UB Mannheim, https://ub-backup.bib.uni-mannheim.de/~stweil/tesstrain/frak2021/):
  1. hver side deles i to spalter ved midtrennen, og hver spalte leses med --psm 4 (ord med plassering);
  2. hver linje leses en gang til alene (--psm 7), for å finne ord som sidelesingen har mistet.
les_norsk1887.py setter så teksten sammen og deler den i vers. Sidene med Tobit–Bel og dragen er 6–124,
og Manasses' bønn står på 188–189.
"""
import argparse
import csv
import io
import json
import pathlib
import re
import subprocess
import tempfile
import urllib.request

from PIL import Image

SIDER = list(range(6, 125)) + [188, 189]


def rennen(im: Image.Image) -> int:
    """x for midtrennen: den bredeste stripen nær midten uten trykk."""
    g = im.convert("L")
    w, h = g.size
    px = g.load()
    xs = range(int(w * 0.40), int(w * 0.60))
    blekk = [sum(1 for y in range(int(h * 0.12), int(h * 0.95), 3) if px[x, y] < 110) for x in xs]
    grense = min(blekk) + 2
    lengst, start, run, s = 0, 0, 0, 0
    for i, v in enumerate(blekk):
        if v <= grense:
            if run == 0:
                s = i
            run += 1
            if run > lengst:
                lengst, start = run, s
        else:
            run = 0
    return xs[0] + start + lengst // 2


def tesseract(bilde: pathlib.Path, tessdata: str, psm: str) -> list[dict]:
    r = subprocess.run(["tesseract", str(bilde), "-", "--tessdata-dir", tessdata, "-l", "frak2021", "--psm", psm, "tsv"],
                       capture_output=True, text=True, check=True)
    return [x for x in csv.DictReader(io.StringIO(r.stdout), delimiter="\t", quoting=csv.QUOTE_NONE)
            if x["level"] == "5" and x["text"].strip()]


def les_side(im: Image.Image, tessdata: str, tmp: pathlib.Path) -> dict:
    w, h = im.size
    midt = rennen(im)
    ut = {"bredde": w, "hoyde": h, "midt": midt, "spalter": []}
    for x0, x1 in ((0, midt), (midt, w)):
        p = tmp / "spalte.png"
        im.crop((x0, 0, x1, h)).save(p)
        linjer: dict = {}
        for x in tesseract(p, tessdata, "4"):
            k = (int(x["block_num"]), int(x["par_num"]), int(x["line_num"]))
            linjer.setdefault(k, []).append({"t": x["text"], "c": float(x["conf"]), "x": int(x["left"]),
                                             "y": int(x["top"]), "w": int(x["width"]), "h": int(x["height"])})
        linjer = [sorted(v, key=lambda o: o["x"]) for _, v in sorted(linjer.items(), key=lambda kv: min(o["y"] for o in kv[1]))]
        # Hver linje alene.
        venstre = min(l[0]["x"] for l in linjer) - 12 if linjer else 0
        hoyre = max(o["x"] + o["w"] for l in linjer for o in l) + 12 if linjer else 0
        linjer7 = []
        for l in linjer:
            topp, bunn = min(o["y"] for o in l) - 10, max(o["y"] + o["h"] for o in l) + 10
            p7 = tmp / "linje.png"
            im.crop((x0 + max(0, venstre), topp, x0 + hoyre, bunn)).save(p7)
            linjer7.append([(x["text"], float(x["conf"]), int(x["left"]) + max(0, venstre), int(x["width"]))
                            for x in tesseract(p7, tessdata, "7")])
        ut["spalter"].append({"x0": x0, "linjer": linjer, "linjer7": linjer7})
    return ut


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--alto", required=True)
    p.add_argument("--bilder", required=True)
    p.add_argument("--tessdata", required=True)
    p.add_argument("--ut", required=True)
    p.add_argument("sider", nargs="*", type=int)
    a = p.parse_args()
    bilder, ut = pathlib.Path(a.bilder), pathlib.Path(a.ut)
    bilder.mkdir(parents=True, exist_ok=True)
    ut.mkdir(parents=True, exist_ok=True)
    for c in a.sider or SIDER:
        fil = ut / f"c{c:04d}.json"
        if fil.exists():
            continue
        bilde = bilder / f"c{c:04d}.jpg"
        if not bilde.exists():
            alto = (pathlib.Path(a.alto) / f"{c:04d}.xml").read_text(encoding="utf-8")
            url = re.search(r"<fileName>([^<]*)</fileName>", alto).group(1).replace("/full/pct:50/", "/full/full/")
            if not url.startswith("https://www.nb.no/services/image/resolver/"):
                raise SystemExit(f"uventet bildeadresse: {url}")
            urllib.request.urlretrieve(url, bilde)
        with tempfile.TemporaryDirectory() as tmp:
            side = les_side(Image.open(bilde), a.tessdata, pathlib.Path(tmp))
        side["side"] = f"{c:04d}"
        fil.write_text(json.dumps(side, ensure_ascii=False), encoding="utf-8")
        print(f"side {c}")


if __name__ == "__main__":
    main()
