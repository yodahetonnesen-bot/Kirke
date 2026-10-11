import type { Metadata } from "next";
import { IDag } from "@/components/i-dag";
import { Manedsoversikt } from "@/components/manedsoversikt";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { BILDER } from "@/lib/bilder";

export const metadata: Metadata = { title: "Kalender · ቀን መቁጠሪያ" };

export default function Kalender() {
  return (
    <>
    <Seksjonstopp bilde={BILDER.evangeliebladLam} tittel="Kalender" am="ቀን መቁጠሪያ" />
    <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
      <div className="mt-12 border-y border-linje/70 py-10">
        <IDag />
      </div>

      <div className="mt-12 grid gap-4 text-dempet md:grid-cols-2 md:gap-10">
        <p>
          Den etiopiske kalenderen har 12 måneder med 30 dager og en kort trettende måned, ጳጉሜን, med fem dager
          (seks hvert fjerde år). Året begynner 11. eller 12. september, og kalenderen er sju–åtte år bak vår,
          fordi kirka regner Jesu fødsel på en annen måte.
        </p>
        <p lang="am">
          የኢትዮጵያ ዘመን አቆጣጠር ሠላሳ ቀናት ያሏቸው አሥራ ሁለት ወራትና አምስት (በአራት ዓመት አንድ ጊዜ ስድስት) ቀናት ያላት
          ጳጉሜን አሉት። ዓመቱ መስከረም አንድ ቀን ይጀምራል።
        </p>
      </div>

      <div className="mt-14">
        <Manedsoversikt />
      </div>

      <p className="mt-10 text-sm text-svak">
        Fastene og høytidene kommer her etter hvert · <span lang="am">አጽዋማትና በዓላት በቅርቡ ይጨመራሉ</span>
      </p>
    </div>
    </>
  );
}
