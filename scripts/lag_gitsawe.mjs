// Henter ግጻዌ (lesningene for hver dag i kirkeåret) fra EOTCDev API og lagrer dem i public/gitsawe.json.
// Kalenderen leser filen når man trykker på en dag; siden trenger ikke API-et når den kjører.
//
// Kilde: EOTCDev API (https://natinael96.github.io/EOTCDevAPI/, MIT-lisens). API-et har så langt bare den faste
// ግጻዌ-syklusen etter månedsdag; søndagssyklusen og de flyttbare høytidene er ikke med ennå.
//
// Bruk: node scripts/lag_gitsawe.mjs   (henter på nytt og skriver public/gitsawe.json)
import fs from "node:fs";
import path from "node:path";

const ROT = path.resolve(import.meta.dirname, "..");
const API = "https://eotcdev-api.natinael-96.workers.dev/v1";
// 2019 E.C. har seks dager i ጳጉሜን, så alle 366 datoene finnes.
const AAR = 2019;

// USFM-bokkodene fra API-et → bok-id i data/bibel/boker.json
const BOK = {
  GEN: "Gen", EXO: "Exod", LEV: "Lev", NUM: "Num", DEU: "Deut", JOS: "Josh", JDG: "Judg", RUT: "Ruth", "1SA": "1Sam",
  "2SA": "2Sam", "1KI": "1Kgs", "2KI": "2Kgs", "1CH": "1Chr", "2CH": "2Chr", EZR: "Ezra", NEH: "Neh", EST: "Esth",
  JOB: "Job", PSA: "Ps", PRO: "Prov", ECC: "Eccl", SNG: "Song", ISA: "Isa", JER: "Jer", LAM: "Lam", EZK: "Ezek",
  DAN: "Dan", HOS: "Hos", JOL: "Joel", AMO: "Amos", OBA: "Obad", JON: "Jonah", MIC: "Mic", NAM: "Nah", HAB: "Hab",
  ZEP: "Zeph", HAG: "Hag", ZEC: "Zech", MAL: "Mal", TOB: "Tob", JDT: "Jdt", WIS: "Wis", SIR: "Sir", BAR: "Bar",
  MAT: "Matt", MRK: "Mark", LUK: "Luke", JHN: "John", ACT: "Acts", ROM: "Rom", "1CO": "1Cor", "2CO": "2Cor",
  GAL: "Gal", EPH: "Eph", PHP: "Phil", COL: "Col", "1TH": "1Thess", "2TH": "2Thess", "1TI": "1Tim", "2TI": "2Tim",
  TIT: "Titus", PHM: "Phlm", HEB: "Heb", JAS: "Jas", "1PE": "1Pet", "2PE": "2Pet", "1JN": "1John", "2JN": "2John",
  "3JN": "3John", JUD: "Jude", REV: "Rev",
};
const PAULUS = new Set(["Rom", "1Cor", "2Cor", "Gal", "Eph", "Phil", "Col", "1Thess", "2Thess", "1Tim", "2Tim", "Titus", "Phlm", "Heb"]);

// Salmer der den norske bibelen teller overskriften som vers (samme lister som i scripts/bibel/lag_bibeldata.py).
const py = fs.readFileSync(path.join(ROT, "scripts/bibel/lag_bibeldata.py"), "utf8");
const sett = (navn) => new Set(py.match(new RegExp(`${navn} = \\{([^}]*)\\}`))[1].split(",").map((x) => Number(x.trim())));
const ETT = sett("TITTEL_ETT_VERS");
const TO = sett("TITTEL_TO_VERS");
const salmeForskyvning = (kap) => (TO.has(kap) ? 2 : ETT.has(kap) || kap === 140 ? 1 : 0);

const boker = JSON.parse(fs.readFileSync(path.join(ROT, "data/bibel/boker.json"), "utf8"));
const vers = fs.readFileSync(path.join(ROT, "lib/vers.ts"), "utf8");
const FORK = Object.fromEntries(
  [...vers.matchAll(/"?([0-9A-Za-z]+)"?: \["([^"]+)", "([^"]+)"\]/g)].map((m) => [m[1], { no: m[2], am: m[3] }]),
);

const kapitler = new Map();
function sisteVers(id, tekst, kap) {
  const nokkel = `${tekst}/${id}`;
  if (!kapitler.has(nokkel)) {
    const fil = path.join(ROT, "data/bibel", tekst, `${id}.json`);
    kapitler.set(nokkel, fs.existsSync(fil) ? JSON.parse(fs.readFileSync(fil, "utf8")) : null);
  }
  const k = kapitler.get(nokkel)?.[kap - 1];
  return k?.length ? Math.max(...k.map((r) => r[1])) : null;
}

const strek = (a, b) => (a === b ? `${a}` : `${a}–${b}`);

/** Gjør én lesning om til etiketter på norsk og amharisk og en lenke til bibelleseren. */
function lesning(r) {
  const c = r.canonicalReference;
  const id = c && BOK[c.book];
  const bok = id && boker.find((b) => b.id === id);
  if (!c || !bok || !FORK[id]) return { gez: `${r.sourceBook} ${r.sourceCitation}`.replace(/\s+/g, " ").trim() };
  const amSlutt = c.verseEnd ?? (c.toEndOfChapter ? sisteVers(id, "am", c.chapter) : c.verseStart) ?? c.verseStart;
  const k = id === "Ps" ? salmeForskyvning(c.chapter) : 0;
  const noFra = c.verseStart + k;
  const noSlutt = c.verseEnd != null ? c.verseEnd + k : c.toEndOfChapter ? (sisteVers(id, "no1930", c.chapter) ?? amSlutt + k) : noFra;
  return {
    id,
    no: `${FORK[id].no} ${c.chapter},${strek(noFra, noSlutt)}`,
    am: `${FORK[id].am} ${c.chapter}፥${strek(c.verseStart, amSlutt)}`,
    href: `/bibelen/${bok.adresse}/${c.chapter}/#v${noFra}`,
  };
}

function tjeneste(s) {
  if (!s) return null;
  const brev = (s.epistles ?? []).map(lesning);
  const ut = {
    paulus: brev.filter((l) => !l.id || PAULUS.has(l.id)),
    apostel: brev.filter((l) => l.id && !PAULUS.has(l.id)),
    gjerninger: (s.acts ?? []).map(lesning),
    salme: (s.psalms ?? []).map(lesning),
    evangelium: (s.gospels ?? []).map(lesning),
  };
  for (const liste of Object.values(ut)) liste.forEach((l) => delete l.id);
  for (const [nokkel, liste] of Object.entries(ut)) if (liste.length === 0) delete ut[nokkel];
  if (s.anaphora) ut.anafora = s.anaphora.replace(/\s*[።፡]\s*/g, " ").replace(/\s+/g, " ").trim();
  return Object.keys(ut).length ? ut : null;
}

async function hent(url) {
  for (let forsok = 1; ; forsok++) {
    const svar = await fetch(url);
    if (svar.ok) return svar.json();
    if (forsok >= 5) throw new Error(`${url}: ${svar.status}`);
    await new Promise((r) => setTimeout(r, 1000 * 2 ** forsok));
  }
}

const datoer = [];
for (let m = 1; m <= 13; m++) for (let d = 1; d <= (m === 13 ? 6 : 30); d++) datoer.push([m, d]);

const ut = {};
for (let i = 0; i < datoer.length; i += 6) {
  await Promise.all(
    datoer.slice(i, i + 6).map(async ([m, d]) => {
      const dato = `${AAR}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const g = await hent(`${API}/gitsawe/${dato}?calendar=ethiopian`);
      const s = g.gitsawe?.services ?? {};
      const dag = {
        minne: g.gitsawe?.commemoration?.replace(/\s*።\s*$/, "").trim() || undefined,
        morgen: tjeneste(s.matins && { ...s.matins, epistles: s.matins.epistlesAndActs?.filter((r) => r.bibleBook !== "ACT"), acts: s.matins.epistlesAndActs?.filter((r) => r.bibleBook === "ACT") }),
        kidase: tjeneste(s.liturgy && { ...s.liturgy, epistles: s.liturgy.epistlesAndActs?.filter((r) => r.bibleBook !== "ACT"), acts: s.liturgy.epistlesAndActs?.filter((r) => r.bibleBook === "ACT") }),
        kveld: tjeneste(s.vespers && { ...s.vespers, epistles: s.vespers.epistlesAndActs?.filter((r) => r.bibleBook !== "ACT"), acts: s.vespers.epistlesAndActs?.filter((r) => r.bibleBook === "ACT") }),
      };
      for (const k of Object.keys(dag)) if (dag[k] == null) delete dag[k];
      ut[`${m}-${d}`] = dag;
    }),
  );
  process.stdout.write(`\r${Math.min(i + 6, datoer.length)}/${datoer.length}`);
}

const sortert = Object.fromEntries(datoer.map(([m, d]) => [`${m}-${d}`, ut[`${m}-${d}`]]));
fs.writeFileSync(path.join(ROT, "public/gitsawe.json"), JSON.stringify(sortert));
const uten = Object.entries(sortert).filter(([, v]) => !v.kidase).map(([k]) => k);
console.log(`\npublic/gitsawe.json: ${datoer.length} dager, ${uten.length} uten lesninger til ቅዳሴ${uten.length ? `: ${uten.join(", ")}` : ""}`);
