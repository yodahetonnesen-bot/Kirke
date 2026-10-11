import type { Metadata } from "next";
import { KommerSnart } from "@/components/kommer-snart";
import { SEKSJONER } from "@/lib/navigasjon";

export const metadata: Metadata = { title: "Lær troen · ትምህርተ ሃይማኖት" };

export default function Laer() {
  return (
    <KommerSnart
      seksjon={SEKSJONER.find((s) => s.href === "/laer/")!}
      punkter={[
        { no: "Troen og de fem mysteriene", am: "ሃይማኖትና አዕማደ ምሥጢር" },
        { no: "De sju sakramentene", am: "ሰባቱ ምሥጢራተ ቤተ ክርስቲያን" },
        { no: "Kirkebygget og hvordan vi oppfører oss i kirka", am: "ሕንጻ ቤተ ክርስቲያንና ሥርዓቱ" },
        { no: "ቅዳሴ, ማኅሌት, ሰዓታት og ኪዳን", am: "ቅዳሴ፣ ማኅሌት፣ ሰዓታትና ኪዳን" },
        { no: "Kirkemusikk, ቅዱስ ያሬድ og kirkeskolen", am: "ዜማ፣ ቅዱስ ያሬድና አብነት ትምህርት ቤት" },
        { no: "Fastene", am: "አጽዋማት" },
        { no: "Høytidene og feiringene", am: "በዓላት" },
        { no: "Kirkehistorie", am: "የቤተ ክርስቲያን ታሪክ" },
        { no: "Helgener og viktige personer", am: "ቅዱሳንና አባቶች" },
        { no: "Kristent liv i hverdagen", am: "ክርስቲያናዊ ሕይወት" },
        { no: "ፊደል og ge'ez", am: "ፊደልና ግዕዝ" },
        { no: "Å være ortodoks i Norge", am: "በኖርዌይ ኦርቶዶክሳዊ መሆን" },
        { no: "Kirkens bøker", am: "የቤተ ክርስቲያን መጻሕፍት" },
      ]}
    />
  );
}
