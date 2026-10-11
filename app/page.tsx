import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Quote } from "lucide-react";
import { IDag } from "@/components/i-dag";
import { DagensVers } from "@/components/dagens-vers";
import { Kunstbilde, Bildetekst } from "@/components/kunstbilde";
import { Scenegalleri } from "@/components/scenegalleri";
import { SEKSJONER } from "@/lib/navigasjon";
import { BILDER } from "@/lib/bilder";
import { dagensVers } from "@/lib/dagens-vers";
import { alleBoker } from "@/lib/bibel";

function Overskrift({ no, am, children }: { no: string; am: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <h2>
        <span className="block font-serif text-3xl tracking-tight sm:text-4xl">{no}</span>
        <span lang="am" className="block text-xl text-dempet">
          {am}
        </span>
      </h2>
      {children}
    </div>
  );
}

export default function Forside() {
  const vers = dagensVers();
  const boker = alleBoker();
  const kapitler = boker.reduce((sum, b) => sum + b.kapitler, 0);

  return (
    <>
      {/* Toppen: tittel til venstre og en collage av ikoner til høyre (inspirert av «Editorial Collage Hero» fra 21st.dev). */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 size-[44rem] rounded-full bg-[radial-gradient(closest-side,var(--rubrikk-svak),transparent)] opacity-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 left-1/3 size-[36rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--gull)_18%,transparent),transparent)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.05fr_1fr] md:pb-24 md:pt-20">
          <div>
            <p className="inline-block rounded-2xl border border-linje bg-flate/70 px-3 py-1 text-sm text-dempet">
              For barna og ungdommen i kirka · <span lang="am">ለልጆችና ለወጣቶች</span>
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">Lær troen vår</h1>
            <p lang="am" className="mt-2 font-serif text-3xl text-rubrikk sm:text-4xl">
              ሃይማኖታችንን እንማር
            </p>
            <p className="mt-8 max-w-md text-lg text-dempet">
              Bibelen, bønnene, høytidene og kirkas historie – på amharisk og norsk, side om side.
            </p>
            <p lang="am" className="mt-2 max-w-md text-svak">
              መጽሐፍ ቅዱስ፣ ጸሎቶች፣ በዓላትና የቤተ ክርስቲያን ታሪክ በአማርኛና በኖርዌይኛ።
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/bibelen/"
                className="inline-flex items-center gap-2 rounded-full bg-blekk px-5 py-3 text-bakgrunn transition-transform hover:-translate-y-0.5"
              >
                <BookOpen className="size-4" aria-hidden="true" />
                Les bibelen · <span lang="am">መጽሐፍ ቅዱስ</span>
              </Link>
              <Link
                href="/kalender/"
                className="inline-flex items-center gap-2 rounded-full border border-linje bg-flate/60 px-5 py-3 transition-colors hover:border-blekk/30"
              >
                <CalendarDays className="size-4 text-rubrikk" aria-hidden="true" />
                Kalender
              </Link>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative ml-auto w-[80%] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgb(60_30_10/0.45)] ring-1 ring-blekk/10">
              <Kunstbilde bilde={BILDER.mariaVeggmaleri} prioritet className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 left-0 w-[46%] -rotate-3 overflow-hidden rounded-2xl shadow-[0_24px_50px_-20px_rgb(60_30_10/0.5)] ring-[6px] ring-bakgrunn">
              <Kunstbilde bilde={BILDER.georg} prioritet sizes="(min-width: 768px) 22vw, 46vw" className="aspect-square w-full object-cover" />
            </div>
            <div className="absolute -top-4 left-[10%] hidden w-[24%] rotate-6 overflow-hidden rounded-xl shadow-[0_20px_40px_-20px_rgb(60_30_10/0.5)] ring-4 ring-bakgrunn sm:block">
              <Kunstbilde bilde={BILDER.mariaIkon} sizes="12vw" className="aspect-[4/5] w-full object-cover" />
            </div>
            <Bildetekst bilde={BILDER.mariaVeggmaleri} className="ml-auto mt-4 w-[48%] text-right" />
          </figure>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* I dag og dagens vers i et rutenett med tynne linjer (inspirert av «Feature Overview Bento»). */}
        <section className="grid overflow-hidden rounded-3xl border border-linje bg-flate/60 md:grid-cols-3">
          <div className="flex flex-col justify-center border-b border-linje p-6 sm:p-10 md:col-span-2 md:row-span-2 md:border-b-0 md:border-r">
            <Quote className="mb-4 size-6 text-rubrikk/70" aria-hidden="true" />
            <DagensVers vers={vers} />
          </div>
          <div className="border-b border-linje p-6 sm:p-8">
            <IDag kompakt />
          </div>
          <Link href="/bibelen/" className="group flex flex-col justify-between gap-6 p-6 transition-colors hover:bg-bakgrunn sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-dempet">
              Hele bibelen · <span lang="am" className="normal-case tracking-normal">መጽሐፍ ቅዱስ</span>
            </p>
            <p>
              <span className="block font-serif text-5xl tabular-nums tracking-tight">{boker.length}</span>
              <span className="text-dempet">
                bøker og {kapitler.toLocaleString("nb-NO")} kapitler på amharisk og norsk
              </span>
            </p>
            <span className="inline-flex items-center gap-1 text-sm text-rubrikk">
              Begynn å lese <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </section>

        {/* Seksjonene som kort med bilde (inspirert av «Gallery Grid with Captions»). */}
        <section className="mt-24">
          <Overskrift no="Utforsk" am="ያስሱ" />
          <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {SEKSJONER.map((s) => {
              const b = BILDER[s.bilde];
              const Ikon = s.ikon;
              return (
                <li key={s.href}>
                  <Link href={s.href} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-linje/40 ring-1 ring-blekk/5">
                      <Kunstbilde
                        bilde={b}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-full bg-bakgrunn/90 text-rubrikk shadow-sm backdrop-blur">
                        <Ikon className="size-5" aria-hidden="true" />
                      </span>
                      {!s.klar && (
                        <span className="absolute right-4 top-4 rounded-full bg-bakgrunn/90 px-2.5 py-1 text-xs text-dempet backdrop-blur">
                          Kommer · <span lang="am">በቅርቡ</span>
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-2xl group-hover:text-rubrikk">{s.no}</h3>
                      <span lang="am" className="text-lg text-dempet">
                        {s.am}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-dempet">{s.beskrivelse.no}</p>
                    <p lang="am" className="text-sm text-svak">
                      {s.beskrivelse.am}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-24">
          <Overskrift no="Fra en gammel etiopisk evangeliebok" am="ከጥንታዊ የወንጌል መጽሐፍ">
            <p className="max-w-sm text-sm text-dempet">
              Malt i et kloster i Nord-Etiopia for over 600 år siden. Trykk på et bilde for å lese fortellingen i bibelen.
            </p>
          </Overskrift>
          <div className="mt-10">
            <Scenegalleri />
          </div>
        </section>
      </div>
    </>
  );
}
