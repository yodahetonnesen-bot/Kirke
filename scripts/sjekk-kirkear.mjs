// Kontrollerer at ባሕረ ሐሳብ i lib/kirkear.ts gir samme påskedag som den julianske påskeregelen
// (som de ortodokse kirkene bruker) for årene 1900–2200, og at kjente påskedager stemmer.
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);
const { flyttbarDato, bahreHasab } = await jiti.import("../lib/kirkear.ts");

// Julianske påskedagen (Meeus), gjort om til vår kalender.
function juliansk(aar) {
  const a = aar % 4, b = aar % 7, c = aar % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const maned = Math.floor((d + e + 114) / 31);
  const dag = ((d + e + 114) % 31) + 1;
  // Juliansk dato -> juliansk dagnummer -> gregoriansk dato
  const y = aar + 4800 - Math.floor((14 - maned) / 12);
  const m = maned + 12 * Math.floor((14 - maned) / 12) - 3;
  const jdn = dag + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
  return new Date(Date.UTC(1970, 0, 1) + (jdn - 2440588) * 864e5);
}

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const isoUtc = (d) => d.toISOString().slice(0, 10);

let feil = 0;
for (let gAar = 1900; gAar <= 2200; gAar++) {
  const etAar = gAar - 8; // påsken er alltid i vår, altså i etiopisk år = vårt år − 8
  const vaar = iso(flyttbarDato(etAar, "tinsae"));
  const fasit = isoUtc(juliansk(gAar));
  if (vaar !== fasit) {
    feil++;
    if (feil < 10) console.log(`Avvik ${gAar}: ባሕረ ሐሳብ ${vaar}, juliansk regel ${fasit}`, bahreHasab(etAar));
  }
}

// Påskedager vi vet: ፋሲካ i årene 2019–2027.
const KJENTE = { 2019: "2019-04-28", 2020: "2020-04-19", 2021: "2021-05-02", 2022: "2022-04-24", 2023: "2023-04-16", 2024: "2024-05-05", 2025: "2025-04-20", 2026: "2026-04-12", 2027: "2027-05-02" };
for (const [gAar, fasit] of Object.entries(KJENTE)) {
  const vaar = iso(flyttbarDato(Number(gAar) - 8, "tinsae"));
  if (vaar !== fasit) {
    feil++;
    console.log(`Feil påskedag ${gAar}: ${vaar}, skal være ${fasit}`);
  }
}
// Påskedagen er alltid en søndag.
for (let etAar = 1892; etAar <= 2192; etAar++) {
  if (flyttbarDato(etAar, "tinsae").getDay() !== 0) {
    feil++;
    console.log(`Påskedagen ${etAar} er ikke en søndag`);
  }
}
console.log(feil ? `${feil} feil` : "Kirkeåret stemmer: ባሕረ ሐሳብ = juliansk påskeregel for 1900–2200, og kjente påskedager 2019–2027 stemmer.");
process.exit(feil ? 1 : 0);
