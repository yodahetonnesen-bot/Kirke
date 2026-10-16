// Søk som tåler ulike stavemåter, både med fidel og latinske bokstaver.
// Hver tekst får to former: en normalisert form (bokstaver som uttales likt på amharisk er slått
// sammen) og et «skjelett» med bare konsonantene skrevet med latinske bokstaver. Skjelettet gjør at
// «timket», «timkat» og «ጥምቀት» finner hverandre.
import { BOKSTAVER } from "./fidel";

export type SokType = "side" | "tema" | "avsnitt" | "bonn" | "hoytid" | "bok";

export type SokDok = {
  type: SokType;
  href: string;
  tittel: { no: string; am: string };
  /** hvor treffet hører hjemme, f.eks. lærsiden et avsnitt står på */
  sti?: string;
  /** tekstbitene som søkes i og vises som utdrag */
  tekst: string[];
};

export type SokBok = {
  adresse: string;
  navn: { no: string; am: string; en: string };
  fork: string[];
  kapitler: number[];
};

export type SokIndeks = { dok: SokDok[]; boker: SokBok[] };

const FIDEL_FRA = 0x1200;
const FIDEL_TIL = 0x137f;

// Bokstaver som uttales likt på amharisk: ሐ ኀ → ሀ, ሠ → ሰ, ዐ → አ, ፀ → ጸ.
const LIKE: Record<number, number> = { 0x1210: 0x1200, 0x1280: 0x1200, 0x1220: 0x1230, 0x12d0: 0x12a0, 0x1340: 0x1338 };

const LYD = new Map<number, string>();
for (const b of BOKSTAVER) {
  const lyd = b.lyd
    .replace(/'/g, "")
    .replace(/^tsj$/, "c")
    .replace(/^ts$/, "c")
    .replace(/^sj$/, "s")
    .replace(/^nj$/, "n")
    .replace(/^zj$/, "z")
    .replace(/^dj$/, "j")
    .replace(/^kh$/, "k");
  LYD.set(b.kode, lyd);
}
// Rader som ikke står i fidel-treneren (labialiserte former o.l.)
LYD.set(0x1248, "k");
LYD.set(0x1288, "h");
LYD.set(0x12b0, "k");
LYD.set(0x12c0, "k");
LYD.set(0x1310, "g");
LYD.set(0x1250, "k");

function fidelDeler(cp: number) {
  const rel = cp - FIDEL_FRA;
  let grunn = cp - (rel % 8);
  let form = rel % 8;
  grunn = LIKE[grunn] ?? grunn;
  // ሀ/ሃ og አ/ኣ skrives om hverandre
  if ((grunn === 0x1200 || grunn === 0x12a0) && form === 3) form = 0;
  return { grunn, form };
}

const erFidel = (cp: number) => cp >= FIDEL_FRA && cp <= FIDEL_TIL;
// ፡ ። ፣ ፤ ፥ ፦ ፧ ፨ er skilletegn; ፩–፼ er tall og beholdes.
const erFidelTegn = (cp: number) => cp >= 0x1360 && cp <= 0x1368;

/** Små bokstaver, uten aksenter, med like-lydende fidel slått sammen. */
export function normaliser(s: string): string {
  let ut = "";
  for (const t of s.normalize("NFKC").toLowerCase()) {
    const cp = t.codePointAt(0)!;
    if (erFidelTegn(cp)) ut += " ";
    else if (erFidel(cp) && cp < 0x1360) {
      const { grunn, form } = fidelDeler(cp);
      ut += String.fromCodePoint(grunn + form);
    } else if (erFidel(cp)) ut += t;
    else if (t === "ø") ut += "o";
    else if (t === "æ") ut += "ae";
    else ut += t.normalize("NFD").replace(/\p{M}/gu, "");
  }
  return ut.replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

/** Bare konsonantene, med latinske bokstaver. Ord skilles med mellomrom. */
export function skjelett(normalisert: string): string {
  let ut = "";
  let latin = "";
  const tomLatin = () => {
    if (!latin) return;
    ut += latin
      .replace(/tsj|tch|ch|ts/g, "c")
      .replace(/sj|sh/g, "s")
      .replace(/kh|q|ck/g, "k")
      .replace(/ph/g, "f")
      .replace(/zj/g, "z")
      .replace(/dj/g, "j")
      .replace(/y/g, "j")
      .replace(/x/g, "ks")
      .replace(/[aeiouə]/g, "");
    latin = "";
  };
  for (const t of normalisert) {
    const cp = t.codePointAt(0)!;
    if (erFidel(cp) && cp < 0x1360) {
      tomLatin();
      ut += LYD.get(fidelDeler(cp).grunn) ?? "";
    } else if (/[a-z]/.test(t)) latin += t;
    else {
      tomLatin();
      ut += t === " " ? " " : t;
    }
  }
  tomLatin();
  // doble konsonanter (gemination) skrives ulikt
  return ut.replace(/([a-z])\1+/g, "$1").replace(/ +/g, " ").trim();
}

function avstand(a: string, b: string, maks: number): number {
  if (Math.abs(a.length - b.length) > maks) return maks + 1;
  let forrige = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const rad = [i];
    let minst = i;
    for (let j = 1; j <= b.length; j++) {
      rad[j] = Math.min(forrige[j] + 1, rad[j - 1] + 1, forrige[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      minst = Math.min(minst, rad[j]);
    }
    if (minst > maks) return maks + 1;
    forrige = rad;
  }
  return forrige[b.length];
}

type Forberedt = SokDok & { n: string; nTittel: string; sTittel: string; tett: string; s: string; ord: Set<string>; deler: { n: string; s: string }[] };

export function forbered(indeks: SokIndeks) {
  return indeks.dok.map<Forberedt>((d) => {
    const tittel = `${d.tittel.no} ${d.tittel.am}`;
    const deler = d.tekst.map((t) => {
      const n = normaliser(t);
      return { n, s: skjelett(n) };
    });
    const nTittel = normaliser(tittel);
    const n = ` ${nTittel} ${deler.map((x) => x.n).join(" ")} `;
    const s = ` ${skjelett(nTittel)} ${deler.map((x) => x.s).join(" ")} `;
    return { ...d, n, nTittel, sTittel: ` ${skjelett(nTittel)} `, tett: n.replace(/ /g, ""), s, deler, ord: new Set(n.split(" ").filter((o) => o.length >= 4)) };
  });
}

export type Treff = { dok: SokDok; poeng: number; utdrag: string };

const TYPEVEKT: Record<SokType, number> = { side: 3, tema: 2.5, bok: 1.2, hoytid: 1.5, bonn: 1.2, avsnitt: 1 };

/** Søker i den forberedte indeksen. Alle ordene i søket må finnes, eksakt eller omtrent. */
export function sok(forberedt: Forberedt[], sporring: string, maks = 60): Treff[] {
  const ord = normaliser(sporring)
    .split(" ")
    .filter(Boolean)
    .map((o) => ({ n: o, s: skjelett(o) }));
  if (ord.length === 0) return [];
  const treff: Treff[] = [];
  for (const d of forberedt) {
    let poeng = 0;
    let alle = true;
    for (const o of ord) {
      let p = 0;
      const sk = o.s.replace(/ /g, "");
      // skjelettet må være langt nok, eller et helt ord, for ikke å treffe alt
      const skOk = (tekst: string) => (sk.length >= 3 ? tekst.includes(` ${o.s}`) : sk.length >= 2 && tekst.includes(` ${o.s} `));
      const antall = (tekst: string, bit: string) => Math.min(2, (tekst.split(bit).length - 1) * 0.15);
      if (d.nTittel.includes(o.n)) p = 6;
      else if (skOk(d.sTittel)) p = 4.5;
      else if (d.n.includes(` ${o.n}`)) p = 3 + antall(d.n, o.n);
      else if (o.n.length >= 3 && d.n.includes(o.n)) p = 2 + antall(d.n, o.n);
      else if (skOk(d.s)) p = 1.2 + antall(d.s, ` ${o.s}`);
      else if (o.n.length >= 5 && d.tett.includes(o.n)) p = 1.5;
      else if (o.n.length >= 5 && /^[a-z]+$/.test(o.n)) {
        for (const w of d.ord) {
          if (avstand(o.n, w.slice(0, o.n.length + 1), 1) <= 1 || avstand(o.n, w, 1) <= 1) {
            p = 1;
            break;
          }
        }
      }
      if (p === 0) {
        alle = false;
        break;
      }
      poeng += p;
    }
    if (!alle) continue;
    const del =
      d.tekst[d.deler.findIndex((x) => ord.some((o) => x.n.includes(o.n)))] ??
      d.tekst[d.deler.findIndex((x) => ord.some((o) => o.s.length >= 3 && x.s.includes(o.s)))] ??
      d.tekst[0] ??
      "";
    treff.push({ dok: d, poeng: poeng * TYPEVEKT[d.type], utdrag: del });
  }
  return treff.sort((a, b) => b.poeng - a.poeng).slice(0, maks);
}

/** Forstår bibelhenvisninger som «Joh 3:16», «johannes 3» eller «ዮሐ 3፥16». */
export function finnHenvisning(boker: SokBok[], sporring: string): { bok: SokBok; kapittel: number; vers?: number } | null {
  const m = /^\s*(.+?)\s*(\d+)(?:\s*[:,፥.\s]\s*(\d+))?(?:\s*[-–]\s*\d+)?\s*$/.exec(sporring);
  if (!m) return null;
  const navn = normaliser(m[1].replace(/\.$/, "")).replace(/ /g, "");
  if (!navn) return null;
  const kapittel = Number(m[2]);
  const vers = m[3] ? Number(m[3]) : undefined;
  const kandidater = (b: SokBok) => [b.navn.no, b.navn.am, b.navn.en, ...b.fork].map((x) => normaliser(x).replace(/ /g, ""));
  const bok =
    boker.find((b) => kandidater(b).includes(navn)) ??
    (navn.length >= 3 ? boker.find((b) => kandidater(b).some((k) => k.startsWith(navn))) : undefined);
  if (!bok || !bok.kapitler.includes(kapittel)) return null;
  return { bok, kapittel, vers };
}
