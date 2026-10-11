import type { Metadata } from "next";
import { KommerSnart } from "@/components/kommer-snart";
import { SEKSJONER } from "@/lib/navigasjon";

export const metadata: Metadata = { title: "Mezmur · መዝሙር" };

export default function Mezmur() {
  return (
    <KommerSnart
      seksjon={SEKSJONER.find((s) => s.href === "/mezmur/")!}
      punkter={[
        { no: "Alle mezmurene med teksten på amharisk og norsk side om side", am: "ሁሉም መዝሙራት በአማርኛና በኖርዌይኛ ጎን ለጎን" },
        { no: "Søk som finner mezmuren uansett stavemåte, også med latinske bokstaver", am: "በማንኛውም አጻጻፍ የሚያገኝ ፍለጋ" },
        { no: "Sortert etter tema og høytid", am: "በርዕስና በበዓል የተደራጁ" },
      ]}
    />
  );
}
