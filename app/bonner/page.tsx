import type { Metadata } from "next";
import { KommerSnart } from "@/components/kommer-snart";
import { SEKSJONER } from "@/lib/navigasjon";

export const metadata: Metadata = { title: "Bønner · ጸሎት" };

export default function Bonner() {
  return (
    <KommerSnart
      seksjon={SEKSJONER.find((s) => s.href === "/bonner/")!}
      punkter={[
        { no: "ውዳሴ ማርያም for hver ukedag, på ge'ez, amharisk og norsk", am: "ውዳሴ ማርያም ለየዕለቱ በግዕዝ፣ በአማርኛና በኖርዌይኛ" },
        { no: "አንቀጸ ብርሃን", am: "አንቀጸ ብርሃን" },
        { no: "Korsets tegn, Fadervår, ሰላም ለኪ og trosbekjennelsen", am: "በስመ አብ፣ አቡነ ዘበሰማያት፣ ሰላም ለኪና ጸሎተ ሃይማኖት" },
        { no: "Morgenbønn, kveldsbønn og bordbønn", am: "የጠዋት፣ የማታና የማዕድ ጸሎት" },
        { no: "De sju bønnetidene", am: "ሰባቱ የጸሎት ጊዜያት" },
      ]}
    />
  );
}
