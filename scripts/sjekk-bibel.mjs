// Kjøres før hver bygging: stopper bygget hvis bibeldataene har hull eller tomme vers.
// Den grundige kontrollen er scripts/bibel/kontroller_bibel.py (de 66, sammenlignet med eBible)
// og scripts/bibel/kontroller_81.py (de andre bøkene, ord for ord mot kildene).
import fs from "node:fs";
import path from "node:path";

const mappe = path.join(import.meta.dirname, "..", "data", "bibel");
const boker = JSON.parse(fs.readFileSync(path.join(mappe, "boker.json"), "utf8"));
const feil = [];
const tall = { vers: 0, mangler: 0, en: 0, no1887: 0 };

// Kirkens liste: 46 bøker i GT og 35 i NT, nummerert uten hull og i rekkefølge.
for (const [testament, antall] of [["gt", 46], ["nt", 35]]) {
  const nr = boker.filter((b) => b.testament === testament).map((b) => b.nr);
  const forventet = Array.from({ length: antall }, (_, i) => i + 1);
  if (JSON.stringify([...new Set(nr)]) !== JSON.stringify(forventet)) {
    feil.push(`${testament}: numrene følger ikke kirkens liste 1–${antall}`);
  }
}
for (const felt of ["id", "adresse"]) {
  const verdier = boker.map((b) => b[felt]);
  for (const v of verdier.filter((v, i) => verdier.indexOf(v) !== i)) feil.push(`${felt} «${v}» er brukt to ganger`);
}
if (boker.filter((b) => b.kanon === "66").length !== 66) feil.push("ikke 66 bøker merket «66»");

for (const bok of boker) {
  if (!["66", "81", "bred"].includes(bok.kanon)) feil.push(`${bok.navn.no}: ukjent kanon «${bok.kanon}»`);
  if (!bok.tekster.includes("am")) feil.push(`${bok.navn.no}: mangler amharisk tekst`);
  if (bok.kapittelnr && bok.kapittelnr.length !== bok.kapitler) feil.push(`${bok.navn.no}: kapittelnr passer ikke`);
  const kapNr = (i) => (bok.kapittelnr ? bok.kapittelnr[i] : i + 1);
  for (const tekst of bok.tekster) {
    const kapitler = JSON.parse(fs.readFileSync(path.join(mappe, tekst, `${bok.id}.json`), "utf8"));
    if (tekst !== "elb" && kapitler.length !== bok.kapitler) {
      feil.push(`${bok.navn.no} (${tekst}): ${kapitler.length} kapitler, ventet ${bok.kapitler}`);
    }
    kapitler.forEach((grupper, i) => {
      const dekket = new Set();
      for (const [fra, til, t, ekstra = {}] of grupper) {
        if (ekstra.ekstra) continue;
        if (!t.trim() && !ekstra.mangler) feil.push(`${bok.navn.no} ${kapNr(i)},${fra} (${tekst}): tomt vers`);
        for (let v = fra; v <= til; v++) {
          if (dekket.has(v)) feil.push(`${bok.navn.no} ${kapNr(i)},${v} (${tekst}): står to ganger`);
          dekket.add(v);
          if (tekst === "am" && ekstra.mangler) tall.mangler++;
        }
      }
      const siste = Math.max(0, ...dekket);
      for (let v = 1; v <= siste; v++) {
        if (!dekket.has(v) && tekst !== "elb") feil.push(`${bok.navn.no} ${kapNr(i)},${v} (${tekst}): mangler`);
      }
      if (tekst === "am") tall.vers += dekket.size;
      if (tekst === "en") tall.en += dekket.size;
      if (tekst === "no1887") tall.no1887 += dekket.size;
    });
  }
}
if (feil.length) {
  console.error(`Bibeldataene har ${feil.length} feil:\n` + feil.slice(0, 50).join("\n"));
  process.exit(1);
}
const telt = (k) => boker.filter((b) => b.kanon === k).length;
console.log(
  `Bibeldataene er i orden: ${boker.length} bøker (${telt("66")} + ${telt("81")} fra 81-bokbibelen + ${telt("bred")} ` +
    `fra den brede kanonen; 46 + 35 = 81 etter kirkens telling), ${tall.vers} amhariske versplasser ` +
    `(${tall.mangler} merket «mangler»), ${tall.en} engelske og ${tall.no1887} med norsk 1887.`,
);
