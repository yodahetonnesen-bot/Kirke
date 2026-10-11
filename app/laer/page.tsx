import type { Metadata } from "next";
import { KommerSnart } from "@/components/kommer-snart";
import { SEKSJONER } from "@/lib/navigasjon";
import {
  BookOpen, CalendarHeart, Church, Droplets, Flame, Landmark, Languages, Library, MapPin, Music, Sparkles, Users, Wheat,
} from "lucide-react";

export const metadata: Metadata = { title: "Lær troen · ትምህርተ ሃይማኖት" };

export default function Laer() {
  return (
    <KommerSnart
      seksjon={SEKSJONER.find((s) => s.href === "/laer/")!}
      bilde="ewostatewos"
      punkter={[
        { ikon: Sparkles, no: "Troen og de fem mysteriene", am: "ሃይማኖትና አዕማደ ምሥጢር" },
        { ikon: Droplets, no: "De sju sakramentene", am: "ሰባቱ ምሥጢራተ ቤተ ክርስቲያን" },
        { ikon: Church, no: "Kirkebygget og hvordan vi oppfører oss i kirka", am: "ሕንጻ ቤተ ክርስቲያንና ሥርዓቱ" },
        { ikon: Flame, no: "ቅዳሴ, ማኅሌት, ሰዓታት og ኪዳን", am: "ቅዳሴ፣ ማኅሌት፣ ሰዓታትና ኪዳን" },
        { ikon: Music, no: "Kirkemusikk, ቅዱስ ያሬድ og kirkeskolen", am: "ዜማ፣ ቅዱስ ያሬድና አብነት ትምህርት ቤት" },
        { ikon: Wheat, no: "Fastene", am: "አጽዋማት" },
        { ikon: CalendarHeart, no: "Høytidene og feiringene", am: "በዓላት" },
        { ikon: Landmark, no: "Kirkehistorie", am: "የቤተ ክርስቲያን ታሪክ" },
        { ikon: Users, no: "Helgener og viktige personer", am: "ቅዱሳንና አባቶች" },
        { ikon: BookOpen, no: "Kristent liv i hverdagen", am: "ክርስቲያናዊ ሕይወት" },
        { ikon: Languages, no: "ፊደል og ge'ez", am: "ፊደልና ግዕዝ" },
        { ikon: MapPin, no: "Å være ortodoks i Norge", am: "በኖርዌይ ኦርቶዶክሳዊ መሆን" },
        { ikon: Library, no: "Kirkens bøker", am: "የቤተ ክርስቲያን መጻሕፍት" },
      ]}
    />
  );
}
