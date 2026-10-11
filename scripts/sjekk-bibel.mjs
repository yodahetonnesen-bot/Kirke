// Kjøres før hver bygging: stopper bygget hvis bibeldataene har hull eller tomme vers.
// Den grundige kontrollen (med sammenligning mot eBible) er scripts/bibel/kontroller_bibel.py.
import fs from "node:fs";
import path from "node:path";

const mappe = path.join(import.meta.dirname, "..", "data", "bibel");
const boker = JSON.parse(fs.readFileSync(path.join(mappe, "boker.json"), "utf8"));
const feil = [];
let vers = 0;
for (const bok of boker) {
  for (const tekst of bok.tekster) {
    const kapitler = JSON.parse(fs.readFileSync(path.join(mappe, tekst, `${bok.id}.json`), "utf8"));
    if (tekst !== "elb" && kapitler.length !== bok.kapitler) {
      feil.push(`${bok.navn.no} (${tekst}): ${kapitler.length} kapitler, ventet ${bok.kapitler}`);
    }
    kapitler.forEach((grupper, i) => {
      const dekket = new Set();
      for (const [fra, til, t, ekstra = {}] of grupper) {
        if (ekstra.ekstra) continue;
        if (!t.trim() && !ekstra.mangler) feil.push(`${bok.navn.no} ${i + 1},${fra} (${tekst}): tomt vers`);
        for (let v = fra; v <= til; v++) dekket.add(v);
      }
      const siste = Math.max(0, ...dekket);
      for (let v = 1; v <= siste; v++) {
        if (!dekket.has(v) && tekst !== "elb") feil.push(`${bok.navn.no} ${i + 1},${v} (${tekst}): mangler`);
      }
      if (tekst === "am") vers += dekket.size;
    });
  }
}
if (feil.length) {
  console.error(`Bibeldataene har ${feil.length} feil:\n` + feil.slice(0, 50).join("\n"));
  process.exit(1);
}
console.log(`Bibeldataene er i orden: ${boker.length} bøker, ${vers} amhariske versplasser.`);
