import type { Metadata } from "next";
import Link from "next/link";
import { alleBoker, type Bok } from "@/lib/bibel";
import { BILDER } from "@/lib/bilder";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { Kunstbilde, Bildetekst } from "@/components/kunstbilde";

export const metadata: Metadata = { title: "Bibelen · መጽሐፍ ቅዱስ" };

/** Merke for bøkene som ikke står blant de 66. */
function Merke({ kanon }: { kanon: Bok["kanon"] }) {
  if (kanon === "66") return null;
  return (
    <span
      aria-hidden="true"
      className={`ml-2 inline-block size-2 rounded-full align-middle ${
        kanon === "81" ? "bg-gull" : "border border-gull"
      }`}
    />
  );
}

/** Bøkene etter kirkens nummer; bøker kirken teller som én, står under samme nummer. */
function Liste({ tittel, am, boker }: { tittel: string; am: string; boker: Bok[] }) {
  const grupper = [...Map.groupBy(boker, (b) => b.nr)];
  return (
    <section>
      <h2 className="flex flex-wrap items-baseline gap-x-3 border-b border-linje pb-3">
        <span className="font-serif text-2xl">{tittel}</span>
        <span lang="am" className="text-lg text-dempet">{am}</span>
        <span className="ml-auto text-sm text-svak">{grupper.length} bøker</span>
      </h2>
      <ol className="mt-2 grid gap-x-8 sm:grid-cols-2">
        {grupper.map(([nr, liste]) => (
          <li key={nr} className="flex gap-3 border-b border-linje/50 py-1.5">
            <span className="w-6 shrink-0 pt-1 text-right text-xs tabular-nums text-svak">{nr}</span>
            <div className="min-w-0 flex-1">
              {liste.map((b) => (
                <Link
                  key={b.id}
                  href={`/bibelen/${b.adresse}/`}
                  className="group flex items-baseline justify-between gap-3 py-1"
                >
                  <span className="group-hover:text-rubrikk">
                    {b.navn.no}
                    <Merke kanon={b.kanon} />
                    <span className="sr-only">{b.kanon === "81" ? " (81-bokbibelen)" : b.kanon === "bred" ? " (bred kanon)" : ""}</span>
                  </span>
                  <span lang="am" className="truncate text-right text-dempet group-hover:text-rubrikk">
                    {b.navn.am}
                  </span>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Kort forklaring på hvorfor den etiopiske bibelen har flere bøker. */
function Om81() {
  return (
    <section className="rounded-2xl border border-linje bg-flate/60 p-6 sm:p-8">
      <h2 className="font-serif text-2xl">
        Hvorfor har vår bibel flere bøker? · <span lang="am" className="text-dempet">ሰማንያ አሐዱ</span>
      </h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-dempet">
          <p>
            Den etiopisk-ortodokse Tewahedo-kirken regner 81 bøker som Den hellige skrift: 46 i Det gamle testamentet
            og 35 i Det nye. I tillegg til de 66 bøkene i de fleste protestantiske bibler har den blant annet Enoks
            bok, Jubileenes bok, Meqabyan, Tobit, Judit, Visdommens bok og Siraks bok. Kirken teller noen bøker
            sammen, for eksempel 1. og 2. Samuelsbok som én bok.
          </p>
          <p>
            Den trykte amhariske bibelen har 81 bøker. Det kalles den smale kanonen. Kirkens egen liste har også med
            kirkeordensbøkene Sinodos, Paktens bok, Klemens’ bok og Didaskalia, og Josippon. Forskere som teller disse
            bøkene hver for seg, kommer fram til 88 bøker, den brede kanonen. Begge listene er med her, i kirkens
            rekkefølge.
          </p>
        </div>
        <div lang="am" className="space-y-3 text-dempet">
          <p>
            የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ሰማንያ አሐዱ (81) መጻሕፍትን ትቀበላለች፤ 46ቱ የብሉይ ኪዳን፣ 35ቱ የሐዲስ ኪዳን
            መጻሕፍት ናቸው። ከ66ቱ መጻሕፍት በተጨማሪ መጽሐፈ ሄኖክ፣ መጽሐፈ ኩፋሌ፣ መቃብያን፣ ጦቢት፣ ዮዲት፣ ጥበብና ሲራክ ይገኙበታል።
          </p>
          <p>
            በታተመው ሰማንያ አሐዱ ውስጥ 81 መጻሕፍት አሉ። የቤተ ክርስቲያን ዝርዝር ደግሞ ሲኖዶስን፣ መጽሐፈ ኪዳንን፣ ቀሌምንጦስን፣
            ዲድስቅልያንና ዮሴፍ ወልደ ኮርዮንን ይጨምራል። ሁለቱም ዝርዝሮች እዚህ ቀርበዋል።
          </p>
        </div>
      </div>
      <p className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm text-svak">
        <span>
          <span aria-hidden="true" className="mr-2 inline-block size-2 rounded-full bg-gull align-middle" />
          Ikke blant de 66 bøkene
        </span>
        <span>
          <span aria-hidden="true" className="mr-2 inline-block size-2 rounded-full border border-gull align-middle" />
          Bred kanon
        </span>
        <span>Nummeret er kirkens eget.</span>
      </p>
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
            <Om81 />
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
          Bøkene utenfor de 66 er hentet fra den amhariske 81-bokbibelen (2000 E.C.). Der det finnes en fri
          oversettelse, står norsk (1930) eller engelsk (World English Bible) ved siden av. Enok, Jubileene, Meqabyan
          og kirkeordensbøkene finnes ennå bare på amharisk her.
        </p>
      </div>
    </>
  );
}
