// Omregning fra vår kalender til den etiopiske (ዓመተ ምሕረት).
// Testet mot kjente datoer: nyttår (መስከረም 1), ገና, ጥምቀት og ጳጉሜን 5/6.

const EPOKE = 1723856;

export const MANEDER = [
  { am: "መስከረም", no: "Meskerem" },
  { am: "ጥቅምት", no: "Tikimt" },
  { am: "ኅዳር", no: "Hidar" },
  { am: "ታኅሣሥ", no: "Tahsas" },
  { am: "ጥር", no: "Tir" },
  { am: "የካቲት", no: "Yekatit" },
  { am: "መጋቢት", no: "Megabit" },
  { am: "ሚያዝያ", no: "Miyazya" },
  { am: "ግንቦት", no: "Ginbot" },
  { am: "ሰኔ", no: "Sene" },
  { am: "ሐምሌ", no: "Hamle" },
  { am: "ነሐሴ", no: "Nehasse" },
  { am: "ጳጉሜን", no: "Pagume" },
];

export const UKEDAGER_AM = ["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"];

export const EVANGELISTAR = [
  { am: "ዘመነ ዮሐንስ", no: "Johannes' år" },
  { am: "ዘመነ ማቴዎስ", no: "Matteus' år" },
  { am: "ዘመነ ማርቆስ", no: "Markus' år" },
  { am: "ዘመነ ሉቃስ", no: "Lukas' år" },
];

export type EtiopiskDato = { aar: number; maned: number; dag: number };

function gregorianskTilJdn(aar: number, maned: number, dag: number) {
  const a = Math.floor((14 - maned) / 12);
  const y = aar + 4800 - a;
  const m = maned + 12 * a - 3;
  return (
    dag + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045
  );
}

export function tilEtiopisk(dato: Date): EtiopiskDato {
  const jdn = gregorianskTilJdn(dato.getFullYear(), dato.getMonth() + 1, dato.getDate());
  const r = (((jdn - EPOKE) % 1461) + 1461) % 1461;
  const n = (r % 365) + 365 * Math.floor(r / 1460);
  return {
    aar: 4 * Math.floor((jdn - EPOKE) / 1461) + Math.floor(r / 365) - Math.floor(r / 1460),
    maned: Math.floor(n / 30) + 1,
    dag: (n % 30) + 1,
  };
}

/** Evangeliståret: år delelig med 4 er Johannes' år, så Matteus, Markus og Lukas (skuddår). */
export function evangelistar(aar: number) {
  return EVANGELISTAR[aar % 4];
}

const GEEZ_ENER = ["", "፩", "፪", "፫", "፬", "፭", "፮", "፯", "፰", "፱"];
const GEEZ_TIERE = ["", "፲", "፳", "፴", "፵", "፶", "፷", "፸", "፹", "፺"];

/** Tall med ge'ez-tegn (1–9999), f.eks. 2019 → ፳፻፲፱. */
export function geezTall(tall: number): string {
  if (tall <= 0) return "";
  const hundrer = Math.floor(tall / 100);
  const rest = tall % 100;
  const restTekst = GEEZ_TIERE[Math.floor(rest / 10)] + GEEZ_ENER[rest % 10];
  if (hundrer === 0) return restTekst;
  return (hundrer === 1 ? "" : geezTall(hundrer)) + "፻" + restTekst;
}

/** Omvendt vei: etiopisk dato til vår kalender. */
export function tilGregoriansk({ aar, maned, dag }: EtiopiskDato): Date {
  const jdn = EPOKE + 365 + 365 * (aar - 1) + Math.floor(aar / 4) + 30 * maned + dag - 31;
  const a = jdn + 32044;
  const b = Math.floor((4 * a + 3) / 146097);
  const c = a - Math.floor((146097 * b) / 4);
  const d = Math.floor((4 * c + 3) / 1461);
  const e = c - Math.floor((1461 * d) / 4);
  const m = Math.floor((5 * e + 2) / 153);
  return new Date(
    100 * b + d - 4800 + Math.floor(m / 10),
    m + 2 - 12 * Math.floor(m / 10),
    e - Math.floor((153 * m + 2) / 5) + 1,
  );
}

/** Antall dager i en etiopisk måned: 30, og 5 eller 6 i ጳጉሜን (6 i Lukas' år). */
export function dagerIManed(aar: number, maned: number) {
  return maned < 13 ? 30 : aar % 4 === 3 ? 6 : 5;
}
