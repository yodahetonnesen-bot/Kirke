import Link from "next/link";
import { IDag } from "@/components/i-dag";
import { DagensVers } from "@/components/dagens-vers";
import { SEKSJONER } from "@/lib/navigasjon";
import { dagensVers } from "@/lib/dagens-vers";
import { Kors } from "@/components/kors";

export default function Forside() {
  const vers = dagensVers();
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="flex flex-col gap-10 border-b border-linje/70 py-14 sm:py-20 md:flex-row md:items-end md:justify-between">
        <IDag />
        <Kors className="hidden size-20 text-rubrikk/80 md:block" />
      </section>

      <section className="border-b border-linje/70 py-12 sm:py-16">
        <DagensVers vers={vers} />
      </section>

      <section className="py-12 sm:py-16">
        <h2 className="sr-only">Innhold</h2>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-linje bg-linje sm:grid-cols-2 lg:grid-cols-3">
          {SEKSJONER.map((s) => (
            <li key={s.href} className="bg-bakgrunn">
              <Link href={s.href} className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-flate sm:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl text-blekk group-hover:text-rubrikk">{s.no}</h3>
                  {!s.klar && (
                    <span className="rounded-full border border-linje px-2 py-0.5 text-xs text-svak">
                      Kommer · <span lang="am">በቅርቡ</span>
                    </span>
                  )}
                </div>
                <p lang="am" className="-mt-2 text-lg text-dempet">
                  {s.am}
                </p>
                <p className="text-sm text-dempet">{s.beskrivelse.no}</p>
                <p lang="am" className="text-sm text-svak">
                  {s.beskrivelse.am}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
