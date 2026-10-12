// Høytider, faster og månedlige minnedager. FORELØPIG: kontrolleres mot kirkas kilder før publisering.
import type { Faste, Hoytid, Minnedag } from "./hoytider";

export const HOYTIDER: Hoytid[] = [
  { id: "enkutatash", type: "annen", dato: { maned: 1, dag: 1 }, navn: { no: "Nyttår", am: "ዕንቁጣጣሽ" } },
  { id: "demera", type: "annen", dato: { maned: 1, dag: 16 }, navn: { no: "Demera", am: "ደመራ" } },
  { id: "meskel", type: "herre-liten", dato: { maned: 1, dag: 17 }, navn: { no: "Korsfesten", am: "መስቀል" } },
  { id: "hidar-mikael", type: "engel", dato: { maned: 3, dag: 12 }, navn: { no: "Mikael", am: "ኅዳር ሚካኤል" } },
  { id: "hidar-tsion", type: "maria", dato: { maned: 3, dag: 21 }, navn: { no: "Sion", am: "ኅዳር ጽዮን" } },
  { id: "tahsas-gabriel", type: "engel", dato: { maned: 4, dag: 19 }, navn: { no: "Gabriel", am: "ታኅሣሥ ገብርኤል" } },
  { id: "ledet", type: "herre", dato: { maned: 4, dag: 29 }, navn: { no: "Jul", am: "ልደት (ገና)" } },
  { id: "timket", type: "herre", dato: { maned: 5, dag: 11 }, navn: { no: "Jesu dåp", am: "ጥምቀት" }, tema: "daapen" },
  { id: "kidane-mihret", type: "maria", dato: { maned: 6, dag: 16 }, navn: { no: "Barmhjertighetspakten", am: "ኪዳነ ምሕረት" } },
  { id: "bisrat", type: "herre", dato: { maned: 7, dag: 29 }, navn: { no: "Bebudelsen", am: "ብሥራት" } },
  { id: "hosaena", type: "herre", dato: { flyttbar: "hosaena" }, navn: { no: "Palmesøndag", am: "ሆሳዕና" } },
  { id: "siklet", type: "herre", dato: { flyttbar: "siklet" }, navn: { no: "Langfredag", am: "ስቅለት" } },
  { id: "tinsae", type: "herre", dato: { flyttbar: "tinsae" }, navn: { no: "Påske", am: "ትንሣኤ (ፋሲካ)" } },
  { id: "erget", type: "herre", dato: { flyttbar: "erget" }, navn: { no: "Kristi himmelfart", am: "ዕርገት" } },
  { id: "paraklitos", type: "herre", dato: { flyttbar: "paraklitos" }, navn: { no: "Pinse", am: "ጰራቅሊጦስ" } },
  { id: "debre-tabor", type: "herre", dato: { maned: 12, dag: 13 }, navn: { no: "Forklarelsen", am: "ደብረ ታቦር" } },
  { id: "filseta", type: "maria", dato: { maned: 12, dag: 16 }, navn: { no: "Marias opptakelse", am: "ፍልሰታ" } },
];

export const FASTER: Faste[] = [
  { id: "nenewe", navn: { no: "Ninive-fasten", am: "ጾመ ነነዌ" } },
  { id: "abiy", navn: { no: "Den store fasten", am: "ዐቢይ ጾም" } },
  { id: "hawaryat", navn: { no: "Apostelfasten", am: "ጾመ ሐዋርያት" } },
  { id: "filseta", navn: { no: "Filseta-fasten", am: "ጾመ ፍልሰታ" } },
  { id: "nebiyat", navn: { no: "Profetfasten", am: "ጾመ ነቢያት" } },
  { id: "gehad", navn: { no: "Gehad", am: "ጾመ ገሃድ" } },
  { id: "dihnet", navn: { no: "Onsdag og fredag", am: "ጾመ ድኅነት" } },
];

export const MANEDLIGE: Minnedag[] = [
  { dag: 12, navn: { no: "Erkeengelen Mikael", am: "ቅዱስ ሚካኤል" } },
  { dag: 19, navn: { no: "Erkeengelen Gabriel", am: "ቅዱስ ገብርኤል" } },
  { dag: 21, navn: { no: "Jomfru Maria", am: "ቅድስት ድንግል ማርያም" } },
  { dag: 23, navn: { no: "Den hellige Georg", am: "ቅዱስ ጊዮርጊስ" } },
  { dag: 27, navn: { no: "Verdens frelser", am: "መድኃኔ ዓለም" } },
];
