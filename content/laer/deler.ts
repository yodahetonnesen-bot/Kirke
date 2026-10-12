// Delene i «Lær troen», i samme rekkefølge som i INNHOLDSPLAN.md.
// Hvert tema i content/laer/ hører til én del gjennom feltet `del`.
import {
  BookOpen, CalendarHeart, Church, Droplets, Flame, Landmark, Languages, Library, MapPin, Music, Sparkles, Users, Wheat,
  type LucideIcon,
} from "lucide-react";

export type Del = { id: string; ikon: LucideIcon; no: string; am: string };

export const DELER = [
  { id: "troen", ikon: Sparkles, no: "Troen og de fem mysteriene", am: "ሃይማኖትና አዕማደ ምሥጢር" },
  { id: "sakramentene", ikon: Droplets, no: "De sju sakramentene", am: "ሰባቱ ምሥጢራተ ቤተ ክርስቲያን" },
  { id: "kirkebygget", ikon: Church, no: "Kirkebygget og hvordan vi oppfører oss i kirka", am: "ሕንጻ ቤተ ክርስቲያንና ሥርዓቱ" },
  { id: "gudstjenester", ikon: Flame, no: "ቅዳሴ, ማኅሌት, ሰዓታት og ኪዳን", am: "ቅዳሴ፣ ማኅሌት፣ ሰዓታትና ኪዳን" },
  { id: "musikk", ikon: Music, no: "Kirkemusikk, ቅዱስ ያሬድ og kirkeskolen", am: "ዜማ፣ ቅዱስ ያሬድና አብነት ትምህርት ቤት" },
  { id: "faste", ikon: Wheat, no: "Fastene", am: "አጽዋማት" },
  { id: "hoytider", ikon: CalendarHeart, no: "Høytidene og feiringene", am: "በዓላት" },
  { id: "historie", ikon: Landmark, no: "Kirkehistorie", am: "የቤተ ክርስቲያን ታሪክ" },
  { id: "personer", ikon: Users, no: "Helgener og viktige personer", am: "ቅዱሳንና አባቶች" },
  { id: "hverdag", ikon: BookOpen, no: "Kristent liv i hverdagen", am: "ክርስቲያናዊ ሕይወት" },
  { id: "sprak", ikon: Languages, no: "ፊደል og ge'ez", am: "ፊደልና ግዕዝ" },
  { id: "norge", ikon: MapPin, no: "Å være ortodoks i Norge", am: "በኖርዌይ ኦርቶዶክሳዊ መሆን" },
  { id: "boker", ikon: Library, no: "Kirkens bøker", am: "የቤተ ክርስቲያን መጻሕፍት" },
] as const satisfies readonly Del[];

export type DelId = (typeof DELER)[number]["id"];

export const finnDel = (id: DelId): Del => DELER.find((d) => d.id === id)!;
