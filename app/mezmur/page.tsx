import type { Metadata } from "next";
import { BILDER } from "@/lib/bilder";
import { KATEGORIER, MEZMURER } from "@/lib/mezmur";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { MezmurListe } from "@/components/mezmur-liste";
import { UkasMezmur } from "@/components/ukas-mezmur";

export const metadata: Metadata = { title: "Mezmur · መዝሙር" };

export default function Mezmur() {
  const kort = MEZMURER.map((m) => ({
    nr: m.nr,
    tittel: m.tittel,
    kategori: m.kategori,
    forste: m.linjer.find((l) => l.trim()) ?? "",
  }));
  return (
    <>
      <Seksjonstopp bilde={BILDER.lyre} tittel="Mezmur" am="መዝሙር">
        <p lang="am" className="mt-3 text-dempet">
          የደብረ ጽዮን ቅድስት ማርያም ቤተክርስቲያን ሰንበት ትምህርት ቤት መዝሙር ደብተር
        </p>
      </Seksjonstopp>
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-10 sm:px-6">
        <div className="mb-12">
          <UkasMezmur mezmurer={kort} />
        </div>
        <MezmurListe mezmurer={kort} kategorier={KATEGORIER} />
      </div>
    </>
  );
}
