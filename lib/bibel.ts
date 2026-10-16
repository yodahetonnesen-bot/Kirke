// Leser bibeldataene i data/bibel/ når siden bygges. Brukes bare på serveren.
// Formatet er beskrevet øverst i scripts/bibel/lag_bibeldata.py.
import fs from "node:fs";
import path from "node:path";

export type Bok = {
  id: string;
  /** nummeret i kirkens liste (46 i GT, 35 i NT); bøker kirken teller som én, har samme nummer */
  nr: number;
  testament: "gt" | "nt";
  adresse: string;
  navn: { am: string; no: string; en: string };
  kapitler: number;
  /** am, og no1930 (+ elb), no1887 (norsk 1887, med WEB der den mangler) eller en (engelsk) i den andre kolonnen */
  tekster: string[];
  /** «66»: de 66 bøkene, «81»: resten av den trykte 81-bokbibelen, «bred»: den brede kanonen */
  kanon: "66" | "81" | "bred";
  amUtgave: "1962" | "2000";
  /** kapittelnumrene når de ikke er 1, 2, 3 … (tilleggene i Daniel: 3, 13, 14) */
  kapittelnr?: number[];
  /** kapitler der den andre kolonnen har en annen versinndeling */
  ulikVersdeling?: number[];
  merknad?: string;
  /** hvor den engelske teksten er hentet fra, når det ikke er WEB (se ENGELSKE_KILDER) */
  enKilde?: string;
};

/** De engelske oversettelsene: kort navn i kolonneoverskriften og kreditering under teksten. */
export const ENGELSKE_KILDER: Record<string, { kort: string; kreditt: string }> = {
  web: { kort: "WEB", kreditt: "World English Bible (WEB), public domain." },
  schodde1885: {
    kort: "Schodde 1885",
    kreditt:
      "G. H. Schodde, «The Apostolic Canons, Translated from the Ethiopic», Journal of the Society of Biblical " +
      "Literature and Exegesis 5 (1885), public domain.",
  },
  charles1917: {
    kort: "Charles 1917",
    kreditt: "R. H. Charles, The Book of Enoch (SPCK 1917), oversatt fra etiopisk, public domain.",
  },
  harden1920: {
    kort: "Harden 1920",
    kreditt: "J. M. Harden, The Ethiopic Didascalia (SPCK 1920), oversatt fra etiopisk, public domain.",
  },
  charles1902: {
    kort: "Charles 1902",
    kreditt: "R. H. Charles, The Book of Jubilees or the Little Genesis (1902), oversatt fra etiopisk, public domain.",
  },
};

export function engelskKilde(bok: Bok) {
  return ENGELSKE_KILDER[bok.enKilde ?? "web"] ?? ENGELSKE_KILDER.web;
}

export type AndreTekst = "no" | "no1887" | "en";

/** Hva som står i den andre kolonnen. */
export function andreTekst(bok: Bok): AndreTekst | null {
  if (bok.tekster.includes("no1930")) return "no";
  if (bok.tekster.includes("no1887")) return "no1887";
  return bok.tekster.includes("en") ? "en" : null;
}

/** Kapittelnumrene i boka, slik de står i adressen og i kapitteloversikten. */
export function kapitlene(bok: Bok): number[] {
  return bok.kapittelnr ?? Array.from({ length: bok.kapitler }, (_, i) => i + 1);
}

type Ekstra = {
  ref?: string;
  noter?: string[];
  mangler?: boolean;
  ekstra?: boolean;
  kilde?: string;
  overskrifter?: string[];
  /** blokker: versene fra kilden som [henvisning eller null, tekst] */
  vers?: [string | null, string][];
};
type Gruppe = [number, number, string, Ekstra?];

/** En bit tekst i en rad: ett vers eller en versgruppe fra én oversettelse. */
export type Del = {
  fra: number;
  til: number;
  tekst: string;
  /** egen henvisning når oversettelsen nummererer annerledes, f.eks. «2፥1» */
  ref?: string;
  noter?: string[];
  mangler?: boolean;
  /** overskrifter som står foran verset i kilden */
  overskrifter?: string[];
  /** «WEB» når den norske teksten (1887) mangler og verset står på engelsk */
  kilde?: string;
};

export type Rad = {
  fra: number;
  til: number;
  am: Del[];
  no: Del[];
  /** null i GT, der En Levende Bok ikke finnes */
  elb: Del[] | null;
  /** engelsk for bøkene uten fri norsk tekst; ellers null */
  en: Del[] | null;
  /** norsk 1887 (apokryfene), med engelsk (WEB) der den mangler; ellers null */
  no1887: Del[] | null;
  /** amharisk vers uten norsk motstykke */
  ekstra?: boolean;
};

const MAPPE = path.join(process.cwd(), "data", "bibel");
const mellomlager = new Map<string, unknown>();

function les<T>(fil: string): T {
  if (!mellomlager.has(fil)) {
    mellomlager.set(fil, JSON.parse(fs.readFileSync(path.join(MAPPE, fil), "utf8")));
  }
  return mellomlager.get(fil) as T;
}

export function alleBoker(): Bok[] {
  return les<Bok[]>("boker.json");
}

export function finnBok(adresse: string): Bok | undefined {
  return alleBoker().find((b) => b.adresse === adresse);
}

const tilDel = (g: Gruppe): Del => ({
  fra: g[0],
  til: g[1],
  tekst: g[2],
  ...(g[3]?.ref && { ref: g[3].ref }),
  ...(g[3]?.noter && { noter: g[3].noter }),
  ...(g[3]?.mangler && { mangler: true }),
  ...(g[3]?.overskrifter && { overskrifter: g[3].overskrifter }),
  ...(g[3]?.kilde === "WEB" && { kilde: "WEB" }),
});

/** En blokk (flere vers fra kilden ved siden av ett eller flere amhariske vers) blir én del per vers. */
const tilDeler = (g: Gruppe): Del[] =>
  g[3]?.vers
    ? g[3].vers.map(([ref, tekst], i) => ({
        fra: g[0],
        til: g[1],
        tekst,
        ...(ref && { ref }),
        ...(i === 0 && g[3]?.overskrifter && { overskrifter: g[3].overskrifter }),
      }))
    : [tilDel(g)];

/**
 * Setter sammen radene i et kapittel. Når en oversettelse har slått sammen vers,
 * blir raden like stor på alle språk, så teksten alltid står side om side.
 */
export function kapittelRader(bok: Bok, kapittel: number): Rad[] {
  const i = kapitlene(bok).indexOf(kapittel);
  const tekst = (navn: string) => (bok.tekster.includes(navn) ? (les<Gruppe[][]>(`${navn}/${bok.id}.json`)[i] ?? []) : null);
  const am = tekst("am") ?? [];
  const no = tekst("no1930") ?? [];
  const elb = tekst("elb");
  const en = tekst("en");
  const no1887 = tekst("no1887");

  const amVanlige = am.filter((g) => !g[3]?.ekstra);
  const amEkstra = am.filter((g) => g[3]?.ekstra);
  const alle = [...amVanlige, ...no, ...(elb ?? []), ...(en ?? []), ...(no1887 ?? [])];
  const siste = Math.max(0, ...alle.map((g) => g[1]));

  // Slå sammen versplasser som overlapper i minst én oversettelse.
  const grenser: [number, number][] = [];
  for (let v = 1; v <= siste; ) {
    let til = v;
    for (let endret = true; endret; ) {
      endret = false;
      for (const [fra, t] of alle) {
        if (fra <= til && t > til && t >= v) {
          til = t;
          endret = true;
        }
      }
    }
    grenser.push([v, til]);
    v = til + 1;
  }

  const innenfor = (liste: Gruppe[], fra: number, til: number) =>
    liste.filter((g) => g[0] >= fra && g[1] <= til).flatMap(tilDeler);

  const rader: Rad[] = [];
  for (const [fra, til] of grenser) {
    rader.push({
      fra,
      til,
      am: innenfor(amVanlige, fra, til),
      no: innenfor(no, fra, til),
      elb: elb ? innenfor(elb, fra, til) : null,
      en: en ? innenfor(en, fra, til) : null,
      no1887: no1887 ? innenfor(no1887, fra, til) : null,
    });
    for (const g of amEkstra.filter((x) => x[0] >= fra && x[0] <= til)) {
      rader.push({
        fra: g[0],
        til: g[0],
        am: [tilDel(g)],
        no: [],
        elb: elb ? [] : null,
        en: null,
        no1887: null,
        ekstra: true,
      });
    }
  }
  return rader;
}
