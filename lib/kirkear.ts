// Kirkeåret: påsken og de flyttbare høytidene og fastene, regnet ut med ባሕረ ሐሳብ,
// slik kirka gjør det. Kontrollert mot den julianske påskeregelen for årene 1900–2200 (scripts/sjekk-kirkear.mjs).
import { tilEtiopisk, tilGregoriansk, type EtiopiskDato } from "./etiopisk-dato";

/** Ukedagens ተውሳክ: tallet som legges til dagen for መጥቅዕ (søndag = 0 … lørdag = 6, som Date.getDay()). */
const TEWSAK_UKEDAG = [7, 6, 5, 4, 3, 2, 8];

/** Hvor mange dager etter ነነዌ hver flyttbar dag kommer (ተውሳክ). */
export const FLYTTBARE = {
  nenewe: 0, // ጾመ ነነዌ begynner (mandag, tre dager)
  abiyTsom: 14, // ዐቢይ ጾም begynner (mandag)
  debreZeyt: 41, // ደብረ ዘይት, midt i fasten (søndag)
  hosaena: 62, // ሆሳዕና, palmesøndag
  tselotHamus: 66, // ጸሎተ ሐሙስ, skjærtorsdag
  siklet: 67, // ስቅለት, langfredag
  kedamSiur: 68, // ቀዳም ሥዑር, påskeaften
  tinsae: 69, // ትንሣኤ (ፋሲካ), påskedag
  rekbeKahnat: 93, // ረክበ ካህናት
  erget: 108, // ዕርገት, Kristi himmelfart
  paraklitos: 118, // ጰራቅሊጦስ, pinse
  tsomeHawaryat: 119, // ጾመ ሐዋርያት begynner (mandag)
  tsomeDihnet: 121, // ጾመ ድኅነት (onsdag og fredag) begynner igjen
} as const;

export type FlyttbarDag = keyof typeof FLYTTBARE;

/** Mellomregningene i ባሕረ ሐሳብ for et etiopisk år, så de kan vises og forklares. */
export function bahreHasab(aar: number) {
  const ameteAlem = 5500 + aar; // ዓመተ ዓለም: år siden skapelsen
  const wenber = (ameteAlem - 1) % 19; // ወንበር
  const abekte = (wenber * 11) % 30; // አበቅቴ
  const metqi = (wenber * 19) % 30; // መጥቅዕ
  // Er መጥቅዕ større enn 14, faller den i መስከረም, ellers i ጥቅምት.
  const metqiDato: EtiopiskDato = { aar, maned: metqi > 14 ? 1 : 2, dag: metqi };
  const ukedag = tilGregoriansk(metqiDato).getDay();
  const tewsak = TEWSAK_UKEDAG[ukedag];
  // መባጃ ሐመር: dagen for መጥቅዕ pluss ukedagens ተውሳክ. ነነዌ faller på den dagen i ጥር eller የካቲት.
  const mebajaHamer = metqi + tewsak;
  let maned = metqi > 14 ? 5 : 6;
  let dag = mebajaHamer;
  if (dag > 30) {
    dag -= 30;
    maned += 1;
  }
  return { ameteAlem, wenber, abekte, metqi, metqiDato, ukedag, tewsak, mebajaHamer, nenewe: { aar, maned, dag } };
}

function leggTilDager(dato: Date, dager: number) {
  return new Date(dato.getFullYear(), dato.getMonth(), dato.getDate() + dager);
}

/** Datoen (i vår kalender) for en flyttbar dag i et etiopisk år. */
export function flyttbarDato(aar: number, dag: FlyttbarDag): Date {
  return leggTilDager(tilGregoriansk(bahreHasab(aar).nenewe), FLYTTBARE[dag]);
}

/** Alle de flyttbare dagene i et etiopisk år, både i vår og i den etiopiske kalenderen. */
export function flyttbareDager(aar: number) {
  const nenewe = tilGregoriansk(bahreHasab(aar).nenewe);
  return (Object.keys(FLYTTBARE) as FlyttbarDag[]).map((navn) => {
    const dato = leggTilDager(nenewe, FLYTTBARE[navn]);
    return { navn, dato, et: tilEtiopisk(dato) };
  });
}
