import { alleBoker, kapittelRader } from "./bibel";
import type { Vers } from "@/components/dagens-vers";

// Kjente vers som passer for barn og unge. [bok-id, kapittel, vers]
const LISTE: [string, number, number][] = [
  ["John", 3, 16], ["Ps", 23, 1], ["Matt", 5, 9], ["Matt", 11, 28], ["Phil", 4, 13],
  ["Rom", 8, 28], ["Prov", 3, 5], ["Isa", 40, 31], ["Josh", 1, 9], ["Ps", 46, 1],
  ["Matt", 6, 33], ["John", 14, 6], ["Gal", 5, 22], ["Eph", 6, 1], ["Ps", 119, 105],
  ["1John", 4, 19], ["Luke", 1, 28], ["Luke", 1, 46], ["Luke", 2, 14], ["Matt", 19, 14],
  ["John", 1, 1], ["Rom", 12, 12], ["Col", 3, 20], ["Ps", 34, 8], ["Heb", 11, 1],
  ["Jas", 1, 17], ["Mic", 6, 8], ["1Cor", 13, 4], ["Matt", 5, 14], ["John", 15, 12],
];

export function dagensVers(): Vers[] {
  const boker = alleBoker();
  return LISTE.flatMap(([id, kap, vers]) => {
    const bok = boker.find((b) => b.id === id);
    if (!bok) return [];
    const rad = kapittelRader(bok, kap).find((r) => r.fra <= vers && vers <= r.til);
    if (!rad || rad.am.length === 0 || rad.am.some((d) => d.mangler)) return [];
    const nr = rad.fra === rad.til ? `${rad.fra}` : `${rad.fra}–${rad.til}`;
    return [{
      ref: { no: `${bok.navn.no} ${kap},${nr}`, am: `${bok.navn.am} ${kap}፥${nr}` },
      href: `/bibelen/${bok.adresse}/${kap}/#v${rad.fra}`,
      am: rad.am.map((d) => d.tekst).join(" "),
      no: rad.no.map((d) => d.tekst).join(" "),
    }];
  });
}
