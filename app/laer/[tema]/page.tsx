import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleHelp, Languages, Layers, Library, PenLine, Quote } from "lucide-react";
import { TEMAER, finnTema } from "@/content/laer";
import { finnDel } from "@/content/laer/deler";
import { BILDER } from "@/lib/bilder";
import { hentVers } from "@/lib/vers";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { VersBrikke } from "@/components/vers-brikke";
import { TemaKort } from "@/components/tema-kort";

export const dynamicParams = false;

export function generateStaticParams() {
  return TEMAER.map((t) => ({ tema: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/laer/[tema]">): Promise<Metadata> {
  const tema = finnTema((await params).tema);
  return { title: tema ? `${tema.tittel.no} · ${tema.tittel.am}` : "Lær troen" };
}

function Overskrift({ no, am, ikon: Ikon }: { no: string; am: string; ikon?: typeof Quote }) {
  return (
    <h2 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      {Ikon && <Ikon className="size-5 self-center text-rubrikk" aria-hidden="true" />}
      <span className="font-serif text-2xl tracking-tight sm:text-3xl">{no}</span>
      <span lang="am" className="text-xl text-dempet">
        {am}
      </span>
    </h2>
  );
}

export default async function TemaSide({ params }: PageProps<"/laer/[tema]">) {
  const tema = finnTema((await params).tema);
  if (!tema) notFound();
  const hovedvers = hentVers(tema.hovedvers);
  const del = finnDel(tema.del);
  const naboer = TEMAER.filter((t) => t.del === tema.del && t.slug !== tema.slug);

  return (
    <>
      <Seksjonstopp bilde={BILDER[tema.bilde]} tittel={tema.tittel.no} am={tema.tittel.am}>
        <p className="mt-3 text-lg text-dempet">
          {tema.undertittel.no} · <span lang="am">{tema.undertittel.am}</span>
        </p>
      </Seksjonstopp>

      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <nav aria-label="Brødsmuler" className="text-dempet">
            <Link href="/laer/" className="hover:text-blekk">
              ← Lær troen · <span lang="am">ትምህርተ ሃይማኖት</span>
            </Link>
            <span className="px-2 text-svak">/</span>
            <Link href={`/laer/#${del.id}`} className="hover:text-blekk">
              {del.no}
            </Link>
          </nav>
          {tema.utkast && (
            <span className="rounded-2xl border border-gull/50 bg-gull/10 px-3 py-1 text-dempet">
              <PenLine className="mr-1.5 inline size-3.5 align-[-0.15em]" aria-hidden="true" />
              Utkast – skal leses av prest · <span lang="am">ረቂቅ – በካህን መታየት አለበት</span>
            </span>
          )}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-12">
          <p className="text-lg leading-relaxed">{tema.ingress.no}</p>
          <p lang="am" className="text-lg text-dempet">
            {tema.ingress.am}
          </p>
        </div>

        <figure className="mt-12 rounded-3xl border border-linje bg-flate/70 p-6 sm:p-10">
          <Quote className="size-6 text-rubrikk/70" aria-hidden="true" />
          <blockquote className="mt-4 grid gap-4 md:grid-cols-2 md:gap-12">
            <p lang="am" className="text-xl text-blekk">
              {hovedvers.am}
            </p>
            <p className="font-serif text-xl leading-relaxed text-blekk">{hovedvers.no}</p>
          </blockquote>
          <figcaption className="mt-4">
            <Link href={hovedvers.href} className="text-sm text-rubrikk hover:underline">
              {hovedvers.ref.no} · <span lang="am">{hovedvers.ref.am}</span> →
            </Link>
          </figcaption>
        </figure>

        <nav aria-label="Innhold" className="mt-12 flex flex-wrap gap-2">
          {tema.avsnitt.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="rounded-full border border-linje px-3 py-1.5 text-sm text-dempet transition-colors hover:border-rubrikk/40 hover:text-rubrikk"
            >
              {a.tittel.no}
            </a>
          ))}
        </nav>

        <div className="mt-6">
          {tema.avsnitt.map((a, i) => (
            <section key={a.id} id={a.id} className="scroll-mt-24 border-t border-linje pt-10 mt-10">
              <p className="text-sm tabular-nums text-rubrikk/80">{String(i + 1).padStart(2, "0")}</p>
              <div className="mt-2">
                <Overskrift no={a.tittel.no} am={a.tittel.am} />
              </div>
              {a.ingress && (
                <div className="mt-4 grid gap-2 text-dempet md:grid-cols-2 md:gap-12">
                  <p>{a.ingress.no}</p>
                  <p lang="am">{a.ingress.am}</p>
                </div>
              )}
              <ul className="mt-6 grid gap-4">
                {a.punkter.map((p) => (
                  <li key={p.tekst.no} className="rounded-2xl border border-linje/70 p-5 sm:p-6">
                    <div className="grid gap-3 md:grid-cols-2 md:gap-12">
                      <p className="leading-relaxed">{p.tekst.no}</p>
                      <p lang="am" className="text-blekk/90">
                        {p.tekst.am}
                      </p>
                    </div>
                    {(p.vers?.length || p.andre?.length) && (
                      <div className="mt-4 flex flex-wrap items-start gap-2">
                        {p.vers?.map((v) => (
                          <VersBrikke key={v} vers={hentVers(v)} />
                        ))}
                        {p.andre?.map((v) => (
                          <span key={v.no} className="inline-flex rounded-full border border-dashed border-linje px-2.5 py-1 text-xs text-svak">
                            {v.no} · <span lang="am">{v.am}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-16 border-t border-linje pt-10">
          <Overskrift no="Viktige ord" am="ቁልፍ ቃላት" ikon={Languages} />
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-linje bg-linje sm:grid-cols-2">
            {tema.ord.map((o) => (
              <div key={o.ord} className="bg-bakgrunn p-4">
                <dt lang="am" className="text-lg text-rubrikk">
                  {o.ord}
                </dt>
                <dd className="mt-1 text-sm">
                  {o.forklaring.no} · <span lang="am" className="text-dempet">{o.forklaring.am}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16 border-t border-linje pt-10">
          <Overskrift no="Test deg selv" am="ራስዎን ይፈትኑ" ikon={CircleHelp} />
          <ol className="mt-6 grid gap-3">
            {tema.sporsmal.map((s, i) => (
              <li key={s.sporsmal.no}>
                <details className="group rounded-2xl border border-linje p-5 open:bg-flate">
                  <summary className="flex cursor-pointer list-none gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="w-4 shrink-0 text-sm tabular-nums text-rubrikk/80">{i + 1}</span>
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
          <Link href="/laer/ov/" className="mt-6 inline-flex items-center gap-2 text-sm text-rubrikk hover:underline">
            <Layers className="size-4" aria-hidden="true" />
            Øv mer med ordkort · <span lang="am">በቃላት ካርዶች ይለማመዱ</span> →
          </Link>
        </section>

        <section className="mt-16 border-t border-linje pt-10">
          <Overskrift no="Kilder" am="ምንጮች" ikon={Library} />
          <ul className="mt-4 grid gap-2 text-sm text-dempet">
            {tema.kilder.map((k) => (
              <li key={k.navn}>
                {k.url ? (
                  <a href={k.url} target="_blank" rel="noreferrer" className="hover:text-rubrikk hover:underline">
                    {k.navn}
                  </a>
                ) : (
                  k.navn
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-svak">
            Bibelversene er hentet ordrett fra den amhariske bibelen fra 1962 og den norske fra 1930.
          </p>
        </section>

        {naboer.length > 0 && (
          <section className="mt-16 border-t border-linje pt-10">
            <Overskrift no={`Mer om ${del.no.charAt(0).toLowerCase()}${del.no.slice(1)}`} am={del.am} ikon={del.ikon} />
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {naboer.map((t) => (
                <li key={t.slug}>
                  <TemaKort tema={t} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
