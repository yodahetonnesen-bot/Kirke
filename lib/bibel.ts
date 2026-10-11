// Leser bibeldataene i data/bibel/ når siden bygges. Brukes bare på serveren.
// Formatet er beskrevet øverst i scripts/bibel/lag_bibeldata.py.
import fs from "node:fs";
import path from "node:path";

export type Bok = {
  id: string;
  nr: number;
  testament: "gt" | "nt";
  adresse: string;
  navn: { am: string; no: string; en: string };
  kapitler: number;
  tekster: string[];
};

type Ekstra = { ref?: string; noter?: string[]; mangler?: boolean; ekstra?: boolean; kilde?: string };
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
};

export type Rad = {
  fra: number;
  til: number;
  am: Del[];
  no: Del[];
  /** null i GT, der En Levende Bok ikke finnes */
  elb: Del[] | null;
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
});

/**
 * Setter sammen radene i et kapittel. Når en oversettelse har slått sammen vers,
 * blir raden like stor på alle språk, så teksten alltid står side om side.
 */
export function kapittelRader(bok: Bok, kapittel: number): Rad[] {
  const am = les<Gruppe[][]>(`am/${bok.id}.json`)[kapittel - 1] ?? [];
  const no = les<Gruppe[][]>(`no1930/${bok.id}.json`)[kapittel - 1] ?? [];
  const elb = bok.tekster.includes("elb") ? (les<Gruppe[][]>(`elb/${bok.id}.json`)[kapittel - 1] ?? []) : null;

  const amVanlige = am.filter((g) => !g[3]?.ekstra);
  const amEkstra = am.filter((g) => g[3]?.ekstra);
  const alle = [...amVanlige, ...no, ...(elb ?? [])];
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
    liste.filter((g) => g[0] >= fra && g[1] <= til).map(tilDel);

  const rader: Rad[] = [];
  for (const [fra, til] of grenser) {
    rader.push({
      fra,
      til,
      am: innenfor(amVanlige, fra, til),
      no: innenfor(no, fra, til),
      elb: elb ? innenfor(elb, fra, til) : null,
    });
    for (const g of amEkstra.filter((x) => x[0] >= fra && x[0] <= til)) {
      rader.push({ fra: g[0], til: g[0], am: [tilDel(g)], no: [], elb: elb ? [] : null, ekstra: true });
    }
  }
  return rader;
}
