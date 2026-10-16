"""Lager versnøkkelen mellom den norske teksten fra 1887 og den amhariske versinndelingen.

Bruk:
  python3 -I scripts/bibel/kart_norsk1887.py --norsk1887 <norsk1887.json fra les_norsk1887.py> \
      --web <mappe med eng-web_usfm> --modell <ordmodell.pkl (lages hvis den mangler)> --ut data/bibel

Utgaven fra 1887 deler versene som den danske/lutherske tradisjonen (særlig i Tobit, Judit og Siraks bok),
mens den amhariske bibelen følger den greske inndelingen, slik WEB gjør. De norske versene blir derfor koblet
til WEB-versene etter innholdet, og så til de amhariske versplassene gjennom den samme nøkkelen som
WEB-kolonnen bruker (lag_81.py).

Koblingen etter innhold: En enkel ordoversettelsesmodell (IBM modell 1) trenes på norsk 1930 og WEB i de
66 bøkene. Med den regnes det ut hvor godt hvert norsk vers passer med hvert engelsk vers, og versene
stilles opp i rekkefølge med dynamisk programmering (som Gale–Church), der ett vers kan svare til ett, to
eller tre vers på den andre siden. Det gir blokker: noen norske vers ved siden av noen amhariske vers.
Ingen norske vers faller bort, og ingen står to ganger; vers uten motstykke legges til blokken foran.

Resultatet er data/bibel/kart-no1887.json:
  {bok: [{"no": ["kap,vers", …], "am": [kapittel, fra, til]}, …]}
der kapittel er nummeret på kapitlet i den amhariske fila (1, 2, 3 …, også i Daniel der de heter 3, 13, 14).
"""
import argparse
import collections
import json
import math
import pathlib
import pickle
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from lag_81 import KART, NYE, les_usfm  # noqa: E402
from lag_bibeldata import BOKER  # noqa: E402

# Bøkene og hvilke norske kapitler som skal kobles mot hvilke WEB-vers.
# Et segment er (norske vers, WEB-vers), begge som lister av (kapittel, fra, til); til=None betyr resten.
ENKLE = {"Tob": 14, "Jdt": 16, "Wis": 19, "Sir": 51, "Bar": 5}
SEGMENTER = {
    "EpJer": [([(1, 0, None)], [(6, 1, None)])],  # vers 0: overskriften («Afskrift af et Brev …»)
    "PrMan": [([(1, 1, None)], [(1, 1, None)])],
    "DanGr": [([(3, 24, None)], [(3, 24, 90)]), ([(13, 1, None)], [(13, 1, None)]), ([(14, 1, None)], [(14, 1, None)])],
    # Tilleggene i Ester: i 1887-utgaven samlet til slutt som kapittel 10,4–16,24 (som i den latinske bibelen).
    "EsthGr": [
        ([(11, 2, None), (12, 1, 6)], [(1, 1, 1)]),  # tillegg A: Mordekais drøm
        ([(12, 7, 7), (13, 1, 7)], [(3, 13, 13)]),  # tillegg B: kongens brev
        ([(13, 8, None), (14, 1, None)], [(4, 18, 46)]),  # tillegg C: bønnene
        ([(15, 1, None)], [(5, 1, 2)]),  # tillegg D: Ester for kongen
        ([(16, 1, None)], [(8, 13, 13)]),  # tillegg E: det andre brevet
        ([(10, 4, None)], [(10, 4, 13)]),  # tillegg F: tydningen av drømmen
        ([(11, 1, 1)], [(10, 14, 14)]),  # sluttnoten
    ],
}
KILDEBOK = {"DanGr": "DanAdd", "EsthGr": "EstAdd"}  # navnet i norsk1887.json


# ---------- ordmodellen ----------

def ord_no(t: str) -> list[str]:
    return re.findall(r"[a-zæøåäö]+", t.lower())


def ord_en(t: str) -> list[str]:
    return re.findall(r"[a-z]+", t.lower().replace("’", "'"))


def tren(data: pathlib.Path, web: dict, fil: pathlib.Path) -> dict:
    par = []
    for osis, _, _, _, kode in BOKER:
        no = json.loads((data / "no1930" / f"{osis}.json").read_text(encoding="utf-8"))
        en = les_usfm(web[kode])
        for k, kap in enumerate(no, 1):
            ev = {v: t for v, t, _ in en.get(k, [])}
            for f, t, tekst, *_ in kap:
                if f == t and f in ev and tekst and ev[f]:
                    par.append((ord_no(tekst), ord_en(ev[f])))
    t: dict = collections.defaultdict(lambda: 1e-3)
    for _ in range(6):
        tell: dict = collections.defaultdict(float)
        tot: dict = collections.defaultdict(float)
        for n, e in par:
            n2 = n + ["<null>"]
            for ew in e:
                z = sum(t[(nw, ew)] for nw in n2)
                for nw in n2:
                    c = t[(nw, ew)] / z
                    tell[(nw, ew)] += c
                    tot[nw] += c
        t = collections.defaultdict(lambda: 1e-6,
                                    {k: v / tot[k[0]] for k, v in tell.items() if v / tot[k[0]] > 1e-3})
    t = dict(t)
    fil.write_bytes(pickle.dumps(t))
    return t


class Likhet:
    def __init__(self, t: dict):
        self.t = t
        self.vok = collections.Counter(k[0] for k in t)
        self.prefiks: dict[str, str] = {}
        for w in sorted(self.vok, key=lambda w: (-self.vok[w], w)):
            self.prefiks.setdefault(w[:5], w)
        self.cache: dict[str, str | None] = {}

    def til1930(self, w: str):
        """1887-rettskriving til et ord modellen kjenner («Barmhjertighed» → «barmhjertighet»)."""
        if w not in self.cache:
            v = w.replace("aa", "å")
            kand = [v, v.replace("th", "t"), re.sub("ere$", "er", v), re.sub("e$", "", v), re.sub("ede$", "et", v),
                    v.replace("ch", "k").replace("c", "k"), re.sub("de$", "te", v), v.replace("dt", "tt"),
                    re.sub("ige$", "ig", v), re.sub("ed$", "et", v)]
            ut = next((k for k in kand if k in self.vok), None)
            if ut is None and len(v) >= 6:
                ut = self.prefiks.get(v[:5])
            self.cache[w] = ut
        return self.cache[w]

    def norsk(self, tekst: str) -> list[str]:
        return [x for x in (self.til1930(w) for w in ord_no(tekst)) if x]

    def logp(self, no: list[str], en: list[str]) -> float:
        """Gjennomsnittlig log P(engelsk ord | norske ord) (IBM 1)."""
        if not en:
            return -3.0
        if not no:
            return -12.0
        s = 0.0
        for e in en:
            p = sum(self.t.get((n, e), 0.0) for n in no) + self.t.get(("<null>", e), 0.0)
            s += math.log(p / (len(no) + 1) + 1e-7)
        return s / len(en)


# ---------- oppstilling ----------

PERLER = [(1, 1, 0.0), (2, 1, 0.8), (1, 2, 0.8), (2, 2, 1.6), (3, 1, 1.6), (1, 3, 1.6)]
ALENE = 5.5  # kostnad for et vers uten motstykke


def still_opp(lik: Likhet, no: list, en: list) -> list[tuple[list, list]]:
    """Gir perler [(norske vers, engelske vers)] i rekkefølge."""
    n, m = len(no), len(en)
    if n == 0 or m == 0:
        return [(no, en)]
    if n == 1 or m <= 2:
        return [(no, en)]  # ett norsk vers, eller tillegg som WEB har i ett eller to lange vers
    nw = [lik.norsk(t) for *_, t in no]
    ew = [ord_en(t) for *_, t in en]
    inf = float("inf")
    kost = [[inf] * (m + 1) for _ in range(n + 1)]
    fra = [[None] * (m + 1) for _ in range(n + 1)]
    kost[0][0] = 0.0
    for i in range(n + 1):
        for j in range(m + 1):
            if kost[i][j] == inf:
                continue
            k0 = kost[i][j]
            for a, b, straff in PERLER + [(1, 0, None), (0, 1, None)]:
                if i + a > n or j + b > m:
                    continue
                if straff is None:
                    c = ALENE
                else:
                    d = [w for x in nw[i:i + a] for w in x]
                    e = [w for x in ew[j:j + b] for w in x]
                    c = -lik.logp(d, e) * (a + b) / 2 + straff
                if k0 + c < kost[i + a][j + b]:
                    kost[i + a][j + b] = k0 + c
                    fra[i + a][j + b] = (i, j)
    perler = []
    i, j = n, m
    while (i, j) != (0, 0):
        pi, pj = fra[i][j]
        perler.append((no[pi:i], en[pj:j]))
        i, j = pi, pj
    return perler[::-1]


def web_til_am(id: str, web: dict, am_antall: list[int]) -> dict:
    """{(webkap, webvers): (amkap, fra, til)}, slik lag_81.py setter WEB-teksten på de amhariske plassene."""
    kode, kart = NYE[id]["en_kilde"]
    kilde = les_usfm(web[kode])
    ut = {}
    for k, antall in enumerate(am_antall, 1):
        kk = kart[k] if kart else k
        biter = KART.get(id, {}).get(k)
        if biter is None:
            n = max((v[0] for v in kilde.get(kk, [])), default=0)
            biter = [(1, antall, kk, 1, n)] if n else []
        for bit in biter:
            af, at, deler = bit if len(bit) == 3 else (bit[0], bit[1], [bit[2:]])
            vers = [(ek, v[0]) for ek, ef, et in deler for v in kilde[ek] if ef <= v[0] <= et]
            ek, ef, et = deler[0]
            if len(vers) == 1 or at == af:
                for wv in vers:
                    ut[wv] = (k, af, at)
            else:
                for wk, nr in vers:
                    plass = af + nr - ef
                    ut[(wk, nr)] = (k, plass, plass)
    return ut, kilde


def velg(vers: dict, kap: int, fra: int, til) -> list:
    return [(kap, v, vers[kap][v]) for v in sorted(vers.get(kap, {})) if fra <= v and (til is None or v <= til)]


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--norsk1887", required=True)
    p.add_argument("--web", required=True)
    p.add_argument("--modell", required=True)
    p.add_argument("--ut", required=True)
    a = p.parse_args()
    data = pathlib.Path(a.ut)
    web = {f.name.split("-")[1][:3]: f for f in pathlib.Path(a.web).glob("*eng-web.usfm")}
    mf = pathlib.Path(a.modell)
    t = pickle.loads(mf.read_bytes()) if mf.exists() else tren(data, web, mf)
    lik = Likhet(t)
    norsk = json.loads(pathlib.Path(a.norsk1887).read_text(encoding="utf-8"))["bøker"]

    ut, rapport = {}, []
    for id in list(ENKLE) + list(SEGMENTER):
        kb = KILDEBOK.get(id, id)
        vers = {int(k): {int(v): t for v, t in vs.items()} for k, vs in norsk[kb].items()}
        am = json.loads((data / "am" / f"{id}.json").read_text(encoding="utf-8"))
        til_am, kilde = web_til_am(id, web, [max(g[1] for g in kap) for kap in am])
        wtekst = {k: {v: t for v, t, _ in liste} for k, liste in kilde.items()}
        segmenter = SEGMENTER.get(id) or [([(k, 1, None)], [(k, 1, None)]) for k in range(1, ENKLE[id] + 1)]
        blokker = []
        brukt_no = set()
        for no_del, en_del in segmenter:
            no = [x for kap, f, til in no_del for x in velg(vers, kap, f, til)]
            en = [x for kap, f, til in en_del for x in velg(wtekst, kap, f, til)]
            for nv, ev in still_opp(lik, no, en):
                nv = [f"{k},{v}" for k, v, _ in nv]
                plasser = [til_am[(k, v)] for k, v, _ in ev if (k, v) in til_am]
                if not nv:
                    continue
                brukt_no.update(nv)
                if not plasser:
                    # Norsk vers uten motstykke: legges til blokken foran (eller etter, hvis det er det første).
                    if blokker:
                        blokker[-1]["no"] += nv
                    else:
                        blokker.append({"no": nv, "am": None})
                    rapport.append(f"{id} {', '.join(nv)}: ingen engelsk motstykke, lagt til blokken foran")
                    continue
                kapitler = collections.Counter(p[0] for p in plasser)
                k = kapitler.most_common(1)[0][0]
                fra = min(p[1] for p in plasser if p[0] == k)
                til = max(p[2] for p in plasser if p[0] == k)
                if blokker and blokker[-1]["am"] is None:
                    nv = blokker.pop()["no"] + nv
                blokker.append({"no": nv, "am": [k, fra, til]})
        # Kontroll: hvert norsk vers i de kapitlene som er brukt, står nøyaktig én gang.
        alle = {f"{k},{v}" for no_del, _ in segmenter for kap, f, til in no_del for k, v, _ in velg(vers, kap, f, til)}
        if alle != brukt_no:
            raise SystemExit(f"{id}: norske vers mangler i nøkkelen: {sorted(alle - brukt_no)[:10]}")
        ut[id] = blokker
    (data / "kart-no1887.json").write_text(
        "{\n" + ",\n".join(f' "{k}": [\n' + ",\n".join("  " + json.dumps(b, ensure_ascii=False) for b in v) + "\n ]"
                            for k, v in ut.items()) + "\n}\n", encoding="utf-8")
    print("\n".join(rapport))
    print(f"{sum(len(v) for v in ut.values())} blokker")


if __name__ == "__main__":
    main()
