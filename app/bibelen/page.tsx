import type { Metadata } from "next";
import Link from "next/link";
import { alleBoker, type Bok } from "@/lib/bibel";
import { BILDER } from "@/lib/bilder";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { Kunstbilde, Bildetekst } from "@/components/kunstbilde";

export const metadata: Metadata = { title: "Bibelen · መጽሐፍ ቅዱስ" };

function Liste({ tittel, am, boker }: { tittel: string; am: string; boker: Bok[] }) {
  return (
    <section>
      <h2 className="flex items-baseline gap-3 border-b border-linje pb-3">
        <span className="font-serif text-2xl">{tittel}</span>
        <span lang="am" className="text-lg text-dempet">{am}</span>
      </h2>
      <ul className="mt-2 grid gap-x-8 sm:grid-cols-2">
        {boker.map((b) => (
          <li key={b.id}>
            <Link
              href={`/bibelen/${b.adresse}/`}
              className="group flex items-baseline justify-between gap-3 border-b border-linje/50 py-2.5"
            >
              <span className="group-hover:text-rubrikk">{b.navn.no}</span>
              <span lang="am" className="truncate text-right text-dempet group-hover:text-rubrikk">
                {b.navn.am}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Bibelen() {
  const boker = alleBoker();
  return (
    <>
      <Seksjonstopp
        bilde={BILDER.evangeliebokTekst}
        tittel="Bibelen"
        am="መጽሐፍ ቅዱስ"
        tekst="Amharisk og norsk side om side. Velg en bok for å begynne å lese."
        tekstAm="በአማርኛና በኖርዌይኛ ጎን ለጎን። ለማንበብ መጽሐፍ ይምረጡ።"
      />
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_16rem]">
          <div className="grid gap-16">
            <Liste tittel="Det gamle testamentet" am="ብሉይ ኪዳን" boker={boker.filter((b) => b.testament === "gt")} />
            <Liste tittel="Det nye testamentet" am="ሐዲስ ኪዳን" boker={boker.filter((b) => b.testament === "nt")} />
          </div>
          <aside className="hidden lg:block">
            <figure className="sticky top-24">
              <div className="overflow-hidden rounded-2xl ring-1 ring-blekk/5">
                <Kunstbilde bilde={BILDER.evangelist} sizes="16rem" className="aspect-[3/4] w-full scale-110 object-cover" />
              </div>
              <Bildetekst bilde={BILDER.evangelist} className="mt-3" />
            </figure>
          </aside>
        </div>
        <p className="mt-16 max-w-2xl text-sm text-svak">
          Den etiopisk-ortodokse bibelen har 81 bøker. De bøkene som ikke finnes her ennå, som Enok,
          Jubileene og Meqabyan, kommer senere på engelsk, siden de ikke er oversatt til norsk.
        </p>
      </div>
    </>
  );
}
