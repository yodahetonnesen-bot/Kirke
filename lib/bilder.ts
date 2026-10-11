// Bildene på siden. Alle er gamle etiopisk-ortodokse kunstverk fra The Metropolitan Museum of Art,
// som er falt i det fri og frigitt gjennom museets Open Access (fri bruk, også uten kreditering).
// Vi krediterer likevel museet. Filene ligger i public/bilder/ i to størrelser: navn.webp og navn-600.webp.

export type Bilde = {
  fil: string;
  tittel: { no: string; am: string };
  verk: string;
  tid: string;
  url: string;
  /** hvor i bildet utsnittet skal sentreres når det beskjæres (CSS object-position) */
  fokus?: string;
};

const MET = "https://www.metmuseum.org/art/collection/search/";
const EVANGELIEBOK = { verk: "Evangeliebok fra Nord-Etiopia", tid: "slutten av 1300-tallet – tidlig 1400-tall", url: `${MET}317618` };

export const BILDER = {
  mariaVeggmaleri: {
    fil: "maria-veggmaleri",
    tittel: { no: "Jomfru Maria med barnet", am: "ቅድስት ድንግል ማርያም ከልጇ ጋር" },
    verk: "Veggmaleri fra en etiopisk kirke",
    tid: "rundt år 1800",
    url: `${MET}844779`,
    fokus: "50% 30%",
  },
  georg: {
    fil: "georg-ikon",
    tittel: { no: "Den hellige Georg", am: "ቅዱስ ጊዮርጊስ" },
    verk: "Ikon-anheng med Den hellige Georg og Maria med barnet",
    tid: "1700-tallet",
    url: `${MET}309529`,
  },
  mariaIkon: {
    fil: "maria-ikon",
    tittel: { no: "Maria med barnet og to erkeengler", am: "ቅድስት ማርያም ከልጇና ከሊቃነ መላእክት ጋር" },
    verk: "Ikon-anheng med Den hellige Georg og Maria med barnet",
    tid: "1700-tallet",
    url: `${MET}309529`,
  },
  ewostatewos: {
    fil: "ewostatewos",
    tittel: { no: "Abune Ewostatewos og disiplene hans", am: "አቡነ ኤዎስጣቴዎስና ደቀ መዛሙርቱ" },
    verk: "Ikon i tre deler (triptyk)",
    tid: "slutten av 1600-tallet",
    url: `${MET}319625`,
    fokus: "50% 25%",
  },
  prosesjonskors: {
    fil: "prosesjonskors",
    tittel: { no: "Prosesjonskors", am: "የመጾር መስቀል" },
    verk: "Prosesjonskors i bronse",
    tid: "1200- eller 1300-tallet",
    url: `${MET}479577`,
    fokus: "50% 35%",
  },
  prosesjonskorsLasta: {
    fil: "prosesjonskors-lasta",
    tittel: { no: "Prosesjonskors fra Lasta", am: "ከላስታ አካባቢ የመጣ የመጾር መስቀል" },
    verk: "Prosesjonskors i bronse, Lasta-området",
    tid: "tidlig 1400-tall",
    url: `${MET}677838`,
    fokus: "50% 30%",
  },
  evangeliebladFontene: {
    fil: "evangelieblad-fontene",
    tittel: { no: "Livets kilde", am: "የሕይወት ምንጭ" },
    verk: "Blad fra en etiopisk evangeliebok",
    tid: "første halvdel av 1300-tallet",
    url: `${MET}477148`,
  },
  evangeliebladLam: {
    fil: "evangelieblad-lam",
    tittel: { no: "Guds lam", am: "የእግዚአብሔር በግ" },
    verk: "Blad fra en etiopisk evangeliebok",
    tid: "første halvdel av 1300-tallet",
    url: `${MET}477148`,
    fokus: "50% 35%",
  },
  arganonaMaryam: {
    fil: "arganona-maryam",
    tittel: { no: "Arganona Maryam – Marias orgel", am: "አርጋኖነ ማርያም" },
    verk: "Bønnebok med lovsanger til Maria",
    tid: "slutten av 1600-tallet",
    url: `${MET}733038`,
  },
  arganonaMaryamDetalj: {
    fil: "arganona-maryam-detalj",
    tittel: { no: "Fra bønneboka Arganona Maryam", am: "ከአርጋኖነ ማርያም" },
    verk: "Bønnebok med lovsanger til Maria",
    tid: "slutten av 1600-tallet",
    url: `${MET}733038`,
    fokus: "50% 40%",
  },
  lyre: {
    fil: "lyre",
    tittel: { no: "Lyre (krar)", am: "ክራር" },
    verk: "Lyre, trolig fra Etiopia",
    tid: "1800-tallet",
    url: `${MET}501155`,
    fokus: "50% 40%",
  },
  ikonAnheng: {
    fil: "ikon-anheng",
    tittel: { no: "Ikon-anheng", am: "በአንገት የሚንጠለጠል ሥዕል" },
    verk: "Dobbelt ikon-anheng",
    tid: "tidlig 1700-tall",
    url: `${MET}317829`,
  },
  bebudelsen: { fil: "evangeliebok-bebudelsen", tittel: { no: "Bebudelsen", am: "ብሥራት" }, ...EVANGELIEBOK },
  fodselen: { fil: "evangeliebok-fodselen", tittel: { no: "Jesu fødsel", am: "ልደተ ክርስቶስ" }, ...EVANGELIEBOK },
  daapen: { fil: "evangeliebok-daapen", tittel: { no: "Jesu dåp", am: "ጥምቀተ ክርስቶስ" }, ...EVANGELIEBOK },
  kana: { fil: "evangeliebok-kana", tittel: { no: "Bryllupet i Kana", am: "ቃና ዘገሊላ" }, ...EVANGELIEBOK },
  forklarelsen: { fil: "evangeliebok-forklarelsen", tittel: { no: "Forklarelsen på fjellet", am: "ደብረ ታቦር" }, ...EVANGELIEBOK },
  inntoget: { fil: "evangeliebok-inntoget", tittel: { no: "Inntoget i Jerusalem", am: "ሆሳዕና" }, ...EVANGELIEBOK },
  korsfestelsen: { fil: "evangeliebok-korsfestelsen", tittel: { no: "Korsfestelsen", am: "ስቅለት" }, ...EVANGELIEBOK },
  gravleggelsen: { fil: "evangeliebok-gravleggelsen", tittel: { no: "Gravleggelsen", am: "የክርስቶስ መቀበር" }, ...EVANGELIEBOK },
  graven: { fil: "evangeliebok-graven", tittel: { no: "Kvinnene ved den tomme graven", am: "ትንሣኤ" }, ...EVANGELIEBOK },
  evangelist: { fil: "evangeliebok-evangelist", tittel: { no: "En av de fire evangelistene", am: "ከአራቱ ወንጌላውያን አንዱ" }, ...EVANGELIEBOK },
  evangelist2: { fil: "evangeliebok-evangelist-2", tittel: { no: "En av de fire evangelistene", am: "ከአራቱ ወንጌላውያን አንዱ" }, ...EVANGELIEBOK },
  evangeliebokTekst: { fil: "evangeliebok-tekst", tittel: { no: "Evangelieteksten på ge'ez", am: "ወንጌል በግዕዝ" }, ...EVANGELIEBOK },
} satisfies Record<string, Bilde>;

export type BildeNavn = keyof typeof BILDER;

export const bildeSrc = (b: Bilde, liten = false) => `/bilder/${b.fil}${liten ? "-600" : ""}.webp`;
