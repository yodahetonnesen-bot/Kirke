// ፊደል: bokstavene i ge'ez-skriften slik de brukes på amharisk, i de sju formene.
// Hver bokstav har sju former i Unicode etter hverandre (grunnform + vokal).

export const FORMER = [
  { am: "ግዕዝ", nr: 1, vokal: "ä" },
  { am: "ካዕብ", nr: 2, vokal: "u" },
  { am: "ሣልስ", nr: 3, vokal: "i" },
  { am: "ራብዕ", nr: 4, vokal: "a" },
  { am: "ኃምስ", nr: 5, vokal: "e" },
  { am: "ሳድስ", nr: 6, vokal: "ə" },
  { am: "ሳብዕ", nr: 7, vokal: "o" },
] as const;

/** Uttalen av vokalene, forklart for norske barn. */
export const VOKALER: Record<string, string> = {
  ä: "kort lyd mellom e og a",
  u: "som o i «bok»",
  i: "som i i «vi»",
  a: "som a i «mat»",
  e: "som e i «le»",
  ə: "veldig kort e, eller ingen vokal",
  o: "som å i «gå»",
};

export type Bokstav = {
  /** Unicode-koden til grunnformen */
  kode: number;
  /** konsonanten med latinske bokstaver */
  lyd: string;
  /** forklaring av konsonanten på norsk, der den er vanskelig */
  hint?: string;
  /** true for bokstavene amharisk har lagt til; de andre fantes allerede i ge'ez */
  amharisk?: boolean;
};

// I tradisjonell rekkefølge (ሀ ለ ሐ መ …).
export const BOKSTAVER: Bokstav[] = [
  { kode: 0x1200, lyd: "h" },
  { kode: 0x1208, lyd: "l" },
  { kode: 0x1210, lyd: "h", hint: "uttales som ሀ på amharisk" },
  { kode: 0x1218, lyd: "m" },
  { kode: 0x1220, lyd: "s", hint: "uttales som ሰ på amharisk" },
  { kode: 0x1228, lyd: "r" },
  { kode: 0x1230, lyd: "s" },
  { kode: 0x1238, lyd: "sj", amharisk: true },
  { kode: 0x1240, lyd: "k'", hint: "en k som «smeller» bak i halsen" },
  { kode: 0x1260, lyd: "b" },
  { kode: 0x1268, lyd: "v", amharisk: true, hint: "brukes mest i ord fra andre språk" },
  { kode: 0x1270, lyd: "t" },
  { kode: 0x1278, lyd: "tsj", amharisk: true },
  { kode: 0x1280, lyd: "h", hint: "uttales som ሀ på amharisk" },
  { kode: 0x1290, lyd: "n" },
  { kode: 0x1298, lyd: "nj", amharisk: true },
  { kode: 0x12a0, lyd: "", hint: "bærer bare vokalen" },
  { kode: 0x12a8, lyd: "k" },
  { kode: 0x12b8, lyd: "kh", amharisk: true, hint: "som ch i tysk «Bach»" },
  { kode: 0x12c8, lyd: "w" },
  { kode: 0x12d0, lyd: "", hint: "bærer bare vokalen, uttales som አ på amharisk" },
  { kode: 0x12d8, lyd: "z" },
  { kode: 0x12e0, lyd: "zj", amharisk: true, hint: "som j i fransk «journal»" },
  { kode: 0x12e8, lyd: "j", hint: "som j i «ja»" },
  { kode: 0x12f0, lyd: "d" },
  { kode: 0x1300, lyd: "dj", amharisk: true, hint: "som j i engelsk «jam»" },
  { kode: 0x1308, lyd: "g" },
  { kode: 0x1320, lyd: "t'", hint: "en t som «smeller»" },
  { kode: 0x1328, lyd: "tsj'", amharisk: true, hint: "en tsj som «smeller»" },
  { kode: 0x1330, lyd: "p'", hint: "en p som «smeller»" },
  { kode: 0x1338, lyd: "ts'", hint: "en ts som «smeller»" },
  { kode: 0x1340, lyd: "ts'", hint: "uttales som ጸ på amharisk" },
  { kode: 0x1348, lyd: "f" },
  { kode: 0x1350, lyd: "p" },
];

export const tegn = (b: Bokstav, form: number) => String.fromCodePoint(b.kode + form);

/** Lyden til en bokstav i en form, f.eks. ሉ → «lu». ə sløyfes etter en konsonant (ል → «l»). */
export function lydTil(b: Bokstav, form: number) {
  const vokal = FORMER[form].vokal;
  if (!b.lyd) return vokal;
  return vokal === "ə" ? b.lyd : b.lyd + vokal;
}
