import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { SEKSJONER } from "@/lib/navigasjon";
import { TEMAER } from "@/content/laer";
import { DELER } from "@/content/laer/deler";
import { BILDER } from "@/lib/bilder";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { TemaKort } from "@/components/tema-kort";

export const metadata: Metadata = { title: "Troslære · ትምህርተ ሃይማኖት" };

export default function Laer() {
  const seksjon = SEKSJONER.find((s) => s.href === "/laer/")!;
  const klare = DELER.map((d) => ({ del: d, temaer: TEMAER.filter((t) => t.del === d.id) })).filter((g) => g.temaer.length > 0);
  const kommer = DELER.filter((d) => !TEMAER.some((t) => t.del === d.id));

  return (
    <>
      <Seksjonstopp
        bilde={BILDER.ewostatewos}
        tittel={seksjon.no}
        am={seksjon.am}
      >
        <nav aria-label="Deler" className="mt-8 flex flex-wrap gap-2">
          {klare.map(({ del, temaer }) => {
            const Ikon = del.ikon;
            return (
              <a
                key={del.id}
                href={`#${del.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-linje bg-flate px-3 py-1.5 text-sm text-dempet transition-colors hover:border-rubrikk/40 hover:text-rubrikk"
              >
                <Ikon className="size-4 text-rubrikk" aria-hidden="true" />
                {del.no}
                <span className="tabular-nums text-svak">{temaer.length}</span>
              </a>
            );
          })}
        </nav>
        <Link
          href="/laer/ov/"
          className="group mt-4 inline-flex items-center gap-2 rounded-full bg-blekk px-4 py-2 text-sm text-bakgrunn"
        >
          <Layers className="size-4" aria-hidden="true" />
          Ordkort og spørsmål · <span lang="am">ካርዶችና ጥያቄዎች</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
        <Link
          href="/laer/fidel/"
          className="group ml-2 mt-4 inline-flex items-center gap-2 rounded-full border border-linje bg-flate px-4 py-2 text-sm"
        >
          <span lang="am" className="text-rubrikk">ሀ ሁ ሂ</span>
          Fidel · <span lang="am">ፊደል</span>
        </Link>
      </Seksjonstopp>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        {klare.map(({ del, temaer }) => {
          const Ikon = del.ikon;
          return (
            <section key={del.id} id={del.id} className="mt-14 scroll-mt-24 border-t border-linje pt-10 first:mt-10">
              <h2 className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="grid size-9 place-items-center rounded-full bg-rubrikk-svak text-rubrikk">
                  <Ikon className="size-4" aria-hidden="true" />
                </span>
                <span className="font-serif text-2xl tracking-tight sm:text-3xl">{del.no}</span>
                <span lang="am" className="text-xl text-dempet">
                  {del.am}
                </span>
              </h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {temaer.map((t) => (
                  <li key={t.slug}>
                    <TemaKort tema={t} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        {kommer.length > 0 && (
          <section className="mt-16 border-t border-linje pt-10">
            <h2 className="text-sm uppercase tracking-[0.18em] text-dempet">
              Kommer · <span lang="am" className="normal-case tracking-normal">በቅርቡ</span>
            </h2>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-linje bg-linje sm:grid-cols-2">
              {kommer.map((d) => {
                const Ikon = d.ikon;
                return (
                  <li key={d.id} className="flex gap-4 bg-bakgrunn p-5">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-rubrikk-svak text-rubrikk">
                      <Ikon className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block">{d.no}</span>
                      <span lang="am" className="block text-dempet">
                        {d.am}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}
