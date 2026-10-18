// Henter dagens ምስባክ fra misbak.org og lagrer den i public/misbak.json, som kalenderen leser.
//
// Fra misbak.org tas bare valget av salmevers for hver dag, søndag og høytid og ge'ez-teksten som synges.
// Den amhariske og norske teksten hentes fra bibeldataene våre (1962 og 1930), med norsk versnummerering.
//
// Bruk: node scripts/lag_misbak.mjs
import fs from "node:fs";
import path from "node:path";

const ROT = path.resolve(import.meta.dirname, "..");
const KILDE = "https://misbak.org/assets/data";

const hent = async (fil) => {
  const svar = await fetch(`${KILDE}/${fil}`);
  if (!svar.ok) throw new Error(`${fil}: ${svar.status}`);
  return svar.json();
};
const dager = await hent("misbak.json");
const hoytider = await hent("holiday.json");

const AM = JSON.parse(fs.readFileSync(path.join(ROT, "data/bibel/am/Ps.json"), "utf8"));
const NO = JSON.parse(fs.readFileSync(path.join(ROT, "data/bibel/no1930/Ps.json"), "utf8"));

// «Psalm 60 : 4–5», «Psalms 85:10-11», «Psalm 73፡23-24», «Psalm 2: 7-8»
function henvisning(tekst) {
  const m = /(\d+)\s*[:፡]\s*(\d+)\s*(?:[-–]\s*(\d+))?/.exec(tekst ?? "");
  return m ? { kap: Number(m[1]), fra: Number(m[2]), til: Number(m[3] ?? m[2]) } : null;
}

const strek = (a, b) => (a === b ? `${a}` : `${a}–${b}`);

/** Salmeversene på amharisk og norsk. De amhariske radene står på norsk plass, med amharisk nummer i ekstra.ref. */
function salme(h) {
  const kap = AM[h.kap - 1];
  if (!kap) return null;
  const amNr = (r) => {
    const ref = r[3]?.ref;
    if (ref === "ርዕስ") return null;
    if (ref) {
      const [k, v] = ref.split("፥");
      return Number(k) === h.kap ? v.split("-").map(Number) : null;
    }
    return [r[0], r[1]];
  };
  const rader = kap.filter((r) => {
    const nr = amNr(r);
    return nr && nr[nr.length - 1] >= h.fra && nr[0] <= h.til;
  });
  if (rader.length === 0) return null;
  const noFra = Math.min(...rader.map((r) => r[0]));
  const noTil = Math.max(...rader.map((r) => r[1]));
  const no = NO[h.kap - 1].filter((r) => r[1] >= noFra && r[0] <= noTil);
  return {
    am: rader.map((r) => r[2]).join(" "),
    no: no.map((r) => r[2]).join(" "),
    ref: { no: `Sal ${h.kap},${strek(noFra, noTil)}`, am: `መዝ ${h.kap}፥${strek(h.fra, h.til)}` },
    href: `/bibelen/salmene/${h.kap}/#v${noFra}`,
  };
}

// To dager har feil engelsk henvisning hos misbak.org. Ge'ez መዝ ፻፲፫ ፳፪–፳፭ (LXX 113, der Salme 115 er vers 9–26)
// er Sal 115,14–17 etter hebraisk nummerering.
const RETTELSER = { "26/02": "115:14-15", "16/08": "115:15-17" };

function oppforing(d, navn) {
  const h = henvisning(RETTELSER[navn] ?? d.english_verse_no);
  const s = h && salme(h);
  if (!s) {
    console.warn(`hopper over ${navn}: «${d.english_verse_no}»`);
    return null;
  }
  return { gez: d.geez_misbak.replace(/\s*\n\s*/g, "\n").trim(), ...s };
}

// Faste dager: nøkkelen er «dag/måned» (01/13 = ጳጉሜን 1).
const faste = {};
for (const [nokkel, d] of Object.entries(dager)) {
  const m = /^(\d\d)\/(\d\d)$/.exec(nokkel);
  if (!m) continue;
  const o = oppforing(d, nokkel);
  if (o) faste[`${Number(m[2])}-${Number(m[1])}`] = o;
}

// Søndagene i perioder: «06/03-12/03» = søndagen mellom ኅዳር 6 og 12.
const sondager = [];
for (const [nokkel, d] of Object.entries(dager.special_sundays ?? {})) {
  const deler = nokkel.replace(/\s/g, "").split("-");
  const dato = (s) => {
    const m = /^(\d\d?)\/(\d\d?)$/.exec(s);
    return m ? [Number(m[2]), Number(m[1])] : null;
  };
  const fra = dato(deler[0]);
  const til = dato(deler[1] ?? deler[0]);
  if (!fra || !til || fra[1] === 0) {
    console.warn(`hopper over søndag «${nokkel}»`);
    continue;
  }
  const o = oppforing(d, nokkel);
  if (o) sondager.push({ fra, til, ...o });
}

// Flyttbare dager, regnet i dager fra ጾመ ነነዌ (mandag), som FLYTTBARE i lib/kirkear.ts.
const FLYTTBAR = {
  ዘወረደ: [13, "ዘወረደ"],
  ቅድስት: [20, "ቅድስት"],
  ምኩራብ: [27, "ምኩራብ"],
  መጻጉዕ: [34, "መጻጉዕ"],
  ደብረዘይት: [41, "ደብረ ዘይት"],
  "ገብር ሔር": [48, "ገብር ኄር"],
  ኒቆዲሞስ: [55, "ኒቆዲሞስ"],
  "ሆሳእና/ቅዳሴ": [62, "ሆሣዕና"],
  "ትንሣኤ/ትንሣኤ ፩": [69, "ትንሣኤ"],
  "ዘመነ ዕርገት/ዘመነ ዕርገት ፩": [108, "ዕርገት"],
  "ጰራቅሊጦስ/ጰራቅሊጦስ ፩": [118, "ጰራቅሊጦስ"],
};
const flyttbare = [];
for (const d of hoytider) {
  const navn = d.name.replace(/\s+/g, " ").trim();
  const treff = FLYTTBAR[navn] ?? FLYTTBAR[`${d.category}/${navn}`];
  if (!treff) continue;
  const o = oppforing(d, navn);
  if (o) flyttbare.push({ dag: treff[0], navn: treff[1], ...o });
}

fs.writeFileSync(path.join(ROT, "public/misbak.json"), JSON.stringify({ faste, sondager, flyttbare }));
console.log(
  `public/misbak.json: ${Object.keys(faste).length} faste dager, ${sondager.length} søndager, ${flyttbare.length} flyttbare dager`,
);
