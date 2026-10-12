// Høytidene, fastene og de månedlige minnedagene i kirkeåret.
// Faste datoer står i den etiopiske kalenderen; de flyttbare regnes ut fra ባሕረ ሐሳብ (se kirkear.ts).
import { dagerIManed, tilEtiopisk, tilGregoriansk, type EtiopiskDato } from "./etiopisk-dato";
import { flyttbarDato, type FlyttbarDag } from "./kirkear";
import { FASTER, HOYTIDER, MANEDLIGE } from "./hoytider-data";

export { FASTER, HOYTIDER, MANEDLIGE };

export type Tekst = { no: string; am: string };

export type HoytidType = "herre" | "herre-liten" | "maria" | "engel" | "helgen" | "annen";

export type Hoytid = {
  id: string;
  navn: Tekst;
  type: HoytidType;
  /** fast etiopisk dato, en flyttbar dag, eller søndagen i de sju dagene fra en fast dato (ስብከት, ብርሃን, ኖላዊ) */
  dato: { maned: number; dag: number } | { flyttbar: FlyttbarDag } | { sondagFra: { maned: number; dag: number } };
  om?: Tekst;
  /** lærside om høytiden, hvis den finnes */
  tema?: string;
};

export type Faste = { id: string; navn: Tekst; om?: Tekst };

export type Minnedag = { dag: number; navn: Tekst };

/** ልደት er ታኅሣሥ 29, men ታኅሣሥ 28 i Johannes' år (året etter at ጳጉሜን hadde seks dager). */
function justerDato(h: Hoytid, aar: number): { maned: number; dag: number } | null {
  if (!("maned" in h.dato)) return null;
  if (h.id === "ledet" && aar % 4 === 0) return { maned: 4, dag: 28 };
  return h.dato;
}

/** Datoen (i vår kalender) for en høytid i et etiopisk år. */
export function hoytidDato(h: Hoytid, aar: number): Date {
  if ("flyttbar" in h.dato) return flyttbarDato(aar, h.dato.flyttbar);
  if ("sondagFra" in h.dato) {
    const fra = tilGregoriansk({ aar, ...h.dato.sondagFra });
    return pluss(fra, (7 - fra.getDay()) % 7);
  }
  return tilGregoriansk({ aar, ...justerDato(h, aar)! });
}

const dagnr = (d: Date) => Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
const sammeDag = (a: Date, b: Date) => dagnr(a) === dagnr(b);
const mellom = (d: Date, fra: Date, til: Date) => dagnr(d) >= dagnr(fra) && dagnr(d) <= dagnr(til);
const et = (aar: number, maned: number, dag: number) => tilGregoriansk({ aar, maned, dag });
const pluss = (d: Date, dager: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + dager);

/** Fasteperiodene i et etiopisk år (uten onsdag og fredag), sortert etter dato. */
export function fasterIAar(aar: number) {
  const fd = (d: FlyttbarDag) => flyttbarDato(aar, d);
  const fast = (id: string) => FASTER.find((f) => f.id === id)!;
  const ledet = hoytidDato(HOYTIDER.find((h) => h.id === "ledet")!, aar);
  return [
    { faste: fast("nebiyat"), fra: et(aar, 3, 15), til: pluss(ledet, -1) },
    { faste: fast("gehad"), fra: et(aar, 5, 10), til: et(aar, 5, 10) },
    { faste: fast("nenewe"), fra: fd("nenewe"), til: pluss(fd("nenewe"), 2) },
    { faste: fast("abiy"), fra: fd("abiyTsom"), til: fd("kedamSiur") },
    { faste: fast("hawaryat"), fra: fd("tsomeHawaryat"), til: et(aar, 11, 4) },
    { faste: fast("filseta"), fra: et(aar, 12, 1), til: et(aar, 12, 15) },
  ].sort((a, b) => dagnr(a.fra) - dagnr(b.fra));
}

/** Hvilken faste en dag hører til, eller null. */
export function fasteFor(dato: Date): Faste | null {
  // Påsken faller i vår, altså i samme etiopiske år som alle dager fra መስከረም til ጳጉሜን.
  const aar = tilEtiopisk(dato).aar;
  const ledet = hoytidDato(HOYTIDER.find((h) => h.id === "ledet")!, aar);
  // De 50 dagene fra påske til pinse er uten faste, og det samme er ልደት og ጥምቀት.
  if (mellom(dato, flyttbarDato(aar, "tinsae"), flyttbarDato(aar, "paraklitos"))) return null;
  if (sammeDag(dato, ledet) || sammeDag(dato, et(aar, 5, 11))) return null;
  const periode = fasterIAar(aar).find((p) => mellom(dato, p.fra, p.til));
  if (periode) return periode.faste;
  const ukedag = dato.getDay();
  return ukedag === 3 || ukedag === 5 ? FASTER.find((f) => f.id === "dihnet")! : null;
}

/** Alt som skjer i kirka en bestemt dag. */
export function dagIKirka(dato: Date) {
  const e = tilEtiopisk(dato);
  const hoytider = HOYTIDER.filter((h) => sammeDag(hoytidDato(h, e.aar), dato));
  const minnedager = MANEDLIGE.filter((m) => m.dag === e.dag && e.maned < 13);
  return { et: e, hoytider, minnedager, faste: fasteFor(dato) };
}

/** Alle høytidene i et etiopisk år, sortert etter dato. */
export function hoytiderIAar(aar: number) {
  return HOYTIDER.map((h) => ({ hoytid: h, dato: hoytidDato(h, aar) })).sort((a, b) => dagnr(a.dato) - dagnr(b.dato));
}

/** Dagene i en etiopisk måned, med det som skjer i kirka hver dag. */
export function manedIKirka(aar: number, maned: number) {
  return Array.from({ length: dagerIManed(aar, maned) }, (_, i) => {
    const d: EtiopiskDato = { aar, maned, dag: i + 1 };
    const dato = tilGregoriansk(d);
    return { dato, ...dagIKirka(dato) };
  });
}
