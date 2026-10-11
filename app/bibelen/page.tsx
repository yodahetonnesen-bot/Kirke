import type { Metadata } from "next";
import Link from "next/link";
import { alleBoker, type Bok } from "@/lib/bibel";

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
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl sm:text-5xl">Bibelen</h1>
        <p lang="am" className="mt-1 text-2xl text-dempet">መጽሐፍ ቅዱስ</p>
        <p className="mt-6 text-dempet">
          Amharisk og norsk side om side. Velg en bok for å begynne å lese.
        </p>
        <p lang="am" className="mt-1 text-svak">በአማርኛና በኖርዌይኛ ጎን ለጎን። ለማንበብ መጽሐፍ ይምረጡ።</p>
      </header>
      <div className="mt-14 grid gap-16">
        <Liste tittel="Det gamle testamentet" am="ብሉይ ኪዳን" boker={boker.filter((b) => b.testament === "gt")} />
        <Liste tittel="Det nye testamentet" am="ሐዲስ ኪዳን" boker={boker.filter((b) => b.testament === "nt")} />
      </div>
      <p className="mt-16 max-w-2xl text-sm text-svak">
        Den etiopisk-ortodokse bibelen har 81 bøker. De bøkene som ikke finnes her ennå, som Enok,
        Jubileene og Meqabyan, kommer senere på engelsk, siden de ikke er oversatt til norsk.
      </p>
    </div>
  );
}
