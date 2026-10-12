import type { Metadata } from "next";
import Link from "next/link";
import { BILDER } from "@/lib/bilder";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { FidelOvelse, FidelTabell, GeezTall } from "@/components/fidel-trener";

export const metadata: Metadata = { title: "Fidel · ፊደል" };

function Overskrift({ no, am }: { no: string; am: string }) {
  return (
    <h2 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="font-serif text-2xl tracking-tight sm:text-3xl">{no}</span>
      <span lang="am" className="text-xl text-dempet">
        {am}
      </span>
    </h2>
  );
}

export default function Fidel() {
  return (
    <>
      <Seksjonstopp
        bilde={BILDER.evangeliebokTekst}
        tittel="Lær fidel"
        am="ፊደል እንማር"
        tekst="Bokstavene som ge'ez og amharisk skrives med. Hver bokstav har sju former, én for hver vokal."
        tekstAm="ግዕዝና አማርኛ የሚጻፉባቸው ፊደላት። እያንዳንዱ ፊደል ሰባት ቅርጾች አሉት።"
      >
        <Link href="/laer/" className="mt-6 inline-block text-sm text-dempet hover:text-blekk">
          ← Lær troen · <span lang="am">ትምህርተ ሃይማኖት</span>
        </Link>
      </Seksjonstopp>
      <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <section className="mt-10">
          <Overskrift no="Øv" am="ይለማመዱ" />
          <div className="mt-6">
            <FidelOvelse />
          </div>
        </section>
        <section className="mt-16 border-t border-linje pt-10">
          <Overskrift no="Alle bokstavene" am="ሁሉም ፊደላት" />
          <p className="mt-3 max-w-2xl text-dempet">
            Trykk på en bokstav for å se hvordan den uttales. ሀ, ሐ og ኀ uttales likt på amharisk, og det samme gjør
            ሰ og ሠ, አ og ዐ, og ጸ og ፀ. På ge&apos;ez hadde de ulike lyder, og derfor skrives ord fortsatt med den
            riktige bokstaven.
          </p>
          <div className="mt-6">
            <FidelTabell />
          </div>
        </section>
        <section className="mt-16 border-t border-linje pt-10">
          <Overskrift no="Ge'ez-tallene" am="የግዕዝ ቁጥሮች" />
          <div className="mt-6">
            <GeezTall />
          </div>
        </section>
      </div>
    </>
  );
}
