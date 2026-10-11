// Henter bibelvers fra bibeldataene ut fra en henvisning som "John 3:5" eller "Matt 28:19-20".
// Brukes på lærsidene, så versene alltid står ordrett på begge språk. Bare på serveren.
import { alleBoker, kapittelRader } from "./bibel";

// Forkortelser for henvisninger: norsk og amharisk.
const FORKORTELSER: Record<string, [string, string]> = {
  Gen: ["1 Mos", "ዘፍ"], Exod: ["2 Mos", "ዘጸ"], Lev: ["3 Mos", "ዘሌ"], Num: ["4 Mos", "ዘኍ"], Deut: ["5 Mos", "ዘዳ"],
  Josh: ["Jos", "ኢያ"], Judg: ["Dom", "መሳ"], Ruth: ["Rut", "ሩት"], "1Sam": ["1 Sam", "1ኛ ሳሙ"], "2Sam": ["2 Sam", "2ኛ ሳሙ"],
  "1Kgs": ["1 Kong", "1ኛ ነገ"], "2Kgs": ["2 Kong", "2ኛ ነገ"], "1Chr": ["1 Krøn", "1ኛ ዜና"], "2Chr": ["2 Krøn", "2ኛ ዜና"],
  Ezra: ["Esra", "ዕዝ"], Neh: ["Neh", "ነሕ"], Esth: ["Est", "አስ"], Job: ["Job", "ኢዮ"], Ps: ["Sal", "መዝ"], Prov: ["Ordsp", "ምሳ"],
  Eccl: ["Fork", "መክ"], Song: ["Høys", "መኃ"], Isa: ["Jes", "ኢሳ"], Jer: ["Jer", "ኤር"], Lam: ["Klag", "ሰቆ"], Ezek: ["Esek", "ሕዝ"],
  Dan: ["Dan", "ዳን"], Hos: ["Hos", "ሆሴ"], Joel: ["Joel", "ኢዩ"], Amos: ["Am", "አሞ"], Obad: ["Ob", "አብ"], Jonah: ["Jona", "ዮና"],
  Mic: ["Mika", "ሚክ"], Nah: ["Nah", "ናሆ"], Hab: ["Hab", "ዕን"], Zeph: ["Sef", "ሶፎ"], Hag: ["Hag", "ሐጌ"], Zech: ["Sak", "ዘካ"],
  Mal: ["Mal", "ሚል"], Matt: ["Matt", "ማቴ"], Mark: ["Mark", "ማር"], Luke: ["Luk", "ሉቃ"], John: ["Joh", "ዮሐ"], Acts: ["Apg", "ሐዋ"],
  Rom: ["Rom", "ሮሜ"], "1Cor": ["1 Kor", "1ኛ ቆሮ"], "2Cor": ["2 Kor", "2ኛ ቆሮ"], Gal: ["Gal", "ገላ"], Eph: ["Ef", "ኤፌ"],
  Phil: ["Fil", "ፊል"], Col: ["Kol", "ቆላ"], "1Thess": ["1 Tess", "1ኛ ተሰ"], "2Thess": ["2 Tess", "2ኛ ተሰ"], "1Tim": ["1 Tim", "1ኛ ጢሞ"],
  "2Tim": ["2 Tim", "2ኛ ጢሞ"], Titus: ["Tit", "ቲቶ"], Phlm: ["Filem", "ፊልሞ"], Heb: ["Hebr", "ዕብ"], Jas: ["Jak", "ያዕ"],
  "1Pet": ["1 Pet", "1ኛ ጴጥ"], "2Pet": ["2 Pet", "2ኛ ጴጥ"], "1John": ["1 Joh", "1ኛ ዮሐ"], "2John": ["2 Joh", "2ኛ ዮሐ"],
  "3John": ["3 Joh", "3ኛ ዮሐ"], Jude: ["Jud", "ይሁ"], Rev: ["Åp", "ራእ"],
};

export type HentetVers = {
  ref: { no: string; am: string };
  href: string;
  am: string;
  no: string;
};

const MONSTER = /^(\S+) (\d+):(\d+)(?:-(\d+))?$/;

/** Henter et vers eller en versrekke. Kaster feil ved ukjent henvisning, så skrivefeil stopper bygget. */
export function hentVers(henvisning: string): HentetVers {
  const m = MONSTER.exec(henvisning.trim());
  if (!m) throw new Error(`Ugyldig bibelhenvisning: «${henvisning}» (skriv f.eks. "John 3:5" eller "Matt 28:19-20")`);
  const [, id, k, fra, til] = m;
  const bok = alleBoker().find((b) => b.id === id);
  const fork = FORKORTELSER[id];
  if (!bok || !fork) throw new Error(`Ukjent bok i bibelhenvisning: «${henvisning}»`);
  const kap = Number(k);
  const f = Number(fra);
  const t = Number(til ?? fra);
  const rader = kapittelRader(bok, kap).filter((r) => !r.ekstra && r.til >= f && r.fra <= t);
  if (rader.length === 0) throw new Error(`Fant ikke verset: «${henvisning}»`);
  const del = (tekster: { tekst: string }[]) => tekster.map((d) => d.tekst).join(" ");
  const nr = t === f ? `${f}` : `${f}–${t}`;
  return {
    ref: { no: `${fork[0]} ${kap},${nr}`, am: `${fork[1]} ${kap}፥${nr}` },
    href: `/bibelen/${bok.adresse}/${kap}/#v${rader[0].fra}`,
    am: rader.map((r) => del(r.am)).join(" "),
    no: rader.map((r) => del(r.no)).join(" "),
  };
}
