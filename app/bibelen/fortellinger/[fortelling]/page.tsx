import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, CircleHelp, PenLine, Quote, Sparkles } from "lucide-react";
import { FORTELLINGER, finnFortelling } from "@/content/fortellinger";
import { BILDER } from "@/lib/bilder";
import { hentVers } from "@/lib/vers";
import { Seksjonstopp } from "@/components/seksjonstopp";

export const dynamicParams = false;

export function generateStaticParams() {
  return FORTELLINGER.map((f) => ({ fortelling: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/bibelen/fortellinger/[fortelling]">): Promise<Metadata> {
  const f = finnFortelling((await params).fortelling);
  return { title: f ? `${f.tittel.no} · ${f.tittel.am}` : "Bibelfortellinger" };
}

function Overskrift({ no, am, ikon: Ikon }: { no: string; am: string; ikon: typeof Quote }) {
  return (
    <h2 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <Ikon className="size-5 self-center text-rubrikk" aria-hidden="true" />
      <span className="font-serif text-2xl tracking-tight">{no}</span>
      <span lang="am" className="text-xl text-dempet">
        {am}
      </span>
    </h2>
  );
}

export default async function FortellingSide({ params }: PageProps<"/bibelen/fortellinger/[fortelling]">) {
  const f = finnFortelling((await params).fortelling);
  if (!f) notFound();
  const kilde = hentVers(f.ref);
  const minnevers = hentVers(f.minnevers);
  const i = FORTELLINGER.indexOf(f);
  const forrige = FORTELLINGER[i - 1];
  const neste = FORTELLINGER[i + 1];

  return (
    <>
      <Seksjonstopp bilde={BILDER[f.bilde ?? "evangeliebokTekst"]} tittel={f.tittel.no} am={f.tittel.am}>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link href="/bibelen/fortellinger/" className="text-dempet hover:text-blekk">
            ← Bibelfortellinger · <span lang="am">የመጽሐፍ ቅዱስ ታሪኮች</span>
          </Link>
          <Link
            href={kilde.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-linje bg-flate px-3 py-1 text-rubrikk hover:border-rubrikk/40"
          >
            <BookOpen className="size-3.5" aria-hidden="true" />
            {kilde.ref.no} · <span lang="am">{kilde.ref.am}</span>
          </Link>
          <span className="rounded-2xl border border-gull/50 bg-gull/10 px-3 py-1 text-dempet">
            <PenLine className="mr-1.5 inline size-3.5 align-[-0.15em]" aria-hidden="true" />
            Utkast – skal leses av prest · <span lang="am">ረቂቅ – በካህን መታየት አለበት</span>
          </span>
        </div>
      </Seksjonstopp>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mt-10 grid gap-y-6">
          {f.tekst.map((t) => (
            <div key={t.no} className="grid gap-3 md:grid-cols-2 md:gap-12">
              <p className="font-serif text-lg leading-relaxed">{t.no}</p>
              <p lang="am" className="text-lg text-blekk/90">
                {t.am}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-14 rounded-3xl border border-linje bg-flate/70 p-6 sm:p-8">
          <Overskrift no="Kirka lærer" am="ቤተ ክርስቲያን ታስተምራለች" ikon={Sparkles} />
          <div className="mt-4 grid gap-3 md:grid-cols-2 md:gap-12">
            <p>{f.laerdom.no}</p>
            <p lang="am" className="text-dempet">
              {f.laerdom.am}
            </p>
          </div>
        </section>

        <section className="mt-14 border-t border-linje pt-10">
          <Overskrift no="Minnevers" am="የሚጠና ጥቅስ" ikon={Quote} />
          <blockquote className="mt-6 grid gap-4 md:grid-cols-2 md:gap-12">
            <p lang="am" className="text-xl text-blekk">
              {minnevers.am}
            </p>
            <p className="font-serif text-xl leading-relaxed text-blekk">{minnevers.no}</p>
          </blockquote>
          <Link href={minnevers.href} className="mt-4 inline-block text-sm text-rubrikk hover:underline">
            {minnevers.ref.no} · <span lang="am">{minnevers.ref.am}</span> →
          </Link>
        </section>

        <section className="mt-14 border-t border-linje pt-10">
          <Overskrift no="Spørsmål" am="ጥያቄዎች" ikon={CircleHelp} />
          <ol className="mt-6 grid gap-3">
            {f.sporsmal.map((s, n) => (
              <li key={s.sporsmal.no}>
                <details className="group rounded-2xl border border-linje p-5 open:bg-flate">
                  <summary className="flex cursor-pointer list-none gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="w-4 shrink-0 text-sm tabular-nums text-rubrikk/80">{n + 1}</span>
                    <span className="grid flex-1 gap-1 md:grid-cols-2 md:gap-12">
                      <span>{s.sporsmal.no}</span>
                      <span lang="am" className="text-dempet">
                        {s.sporsmal.am}
                      </span>
                    </span>
                    <span className="w-20 shrink-0 text-right text-sm text-svak">
                      <span className="group-open:hidden">Vis svar</span>
                      <span className="hidden group-open:inline">Skjul svar</span>
                    </span>
                  </summary>
                  <div className="mt-4 flex gap-4 border-t border-linje pt-4">
                    <span className="w-4 shrink-0" />
                    <div className="grid flex-1 gap-2 md:grid-cols-2 md:gap-12">
                      <p>{s.svar.no}</p>
                      <p lang="am" className="text-dempet">
                        {s.svar.am}
                      </p>
                    </div>
                    <span className="hidden w-20 shrink-0 md:block" />
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </section>

        <nav aria-label="Flere fortellinger" className="mt-16 grid gap-3 border-t border-linje pt-8 sm:grid-cols-2">
          {forrige ? (
            <Link href={`/bibelen/fortellinger/${forrige.slug}/`} className="group rounded-2xl border border-linje p-4 hover:border-rubrikk/40">
              <span className="inline-flex items-center gap-1 text-xs text-svak">
                <ArrowLeft className="size-3.5" aria-hidden="true" /> Forrige · <span lang="am">ያለፈው</span>
              </span>
              <span className="mt-1 block font-serif text-lg group-hover:text-rubrikk">{forrige.tittel.no}</span>
              <span lang="am" className="text-dempet">
                {forrige.tittel.am}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {neste && (
            <Link href={`/bibelen/fortellinger/${neste.slug}/`} className="group rounded-2xl border border-linje p-4 text-right hover:border-rubrikk/40">
              <span className="inline-flex items-center gap-1 text-xs text-svak">
                Neste · <span lang="am">ቀጣዩ</span> <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
              <span className="mt-1 block font-serif text-lg group-hover:text-rubrikk">{neste.tittel.no}</span>
              <span lang="am" className="text-dempet">
                {neste.tittel.am}
              </span>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
