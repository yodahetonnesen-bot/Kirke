import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BONNEBOK, UKEDAGER, WUDASE, finnBonnedel, type Tre } from "@/lib/bonner";
import { Spraakvalg } from "@/components/spraakvalg";
import { IDagMerke } from "@/components/i-dag-merke";

export const dynamicParams = false;

export function generateStaticParams() {
  return BONNEBOK.deler.map((d) => ({ del: d.id }));
}

export async function generateMetadata({ params }: PageProps<"/bonner/[del]">): Promise<Metadata> {
  const d = finnBonnedel((await params).del);
  return { title: d ? `${d.tittel.no} · ${d.tittel.am}` : "Bønner" };
}

/** Tre kolonner side om side; et skjult språk forsvinner, og de andre blir bredere. */
function Tre({ tekst, className = "" }: { tekst: Tre; className?: string }) {
  return (
    <div className={`grid gap-3 md:flex md:gap-8 ${className}`}>
      <p lang="gez" className="bonn-gez md:flex-1">
        {tekst.gez}
      </p>
      <p lang="am" className="bonn-am text-blekk/90 md:flex-1">
        {tekst.am}
      </p>
      <p className="bonn-no font-serif leading-relaxed md:flex-1">{tekst.no}</p>
    </div>
  );
}

export default async function Bonnedel({ params }: PageProps<"/bonner/[del]">) {
  const d = finnBonnedel((await params).del);
  if (!d) notFound();
  const dagNr = WUDASE.findIndex((w) => w.id === d.id);
  const forrige = dagNr >= 0 ? WUDASE[(dagNr + 6) % 7] : null;
  const neste = dagNr >= 0 ? WUDASE[(dagNr + 1) % 7] : null;
  const ukedag = UKEDAGER.find((u) => u.id === d.id);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
      <Link href="/bonner/" className="text-sm text-dempet hover:text-blekk">
        ← Bønner · <span lang="am">ጸሎት</span>
      </Link>

      <header className="mt-6 flex flex-wrap items-end justify-between gap-6 border-b border-linje pb-6">
        <div>
          {dagNr >= 0 && (
            <p className="flex items-center gap-2 text-sm text-dempet">
              <span lang="gez">ውዳሴ ማርያም</span> · Lovprisningen av Maria {ukedag && <IDagMerke ukedag={ukedag.dag} />}
            </p>
          )}
          <h1 className="mt-1 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span lang="gez" className="font-serif text-4xl text-rubrikk sm:text-5xl">
              {d.tittel.gez}
            </span>
            <span lang="am" className="text-2xl text-dempet">
              {d.tittel.am}
            </span>
            <span className="font-serif text-2xl">{d.tittel.no}</span>
          </h1>
        </div>
        <Spraakvalg />
      </header>

      {d.innledning && <Tre tekst={d.innledning} className="mt-8 rounded-2xl bg-flate p-5 sm:p-6" />}

      {d.velsignelse && (
        <div className="mt-8 rounded-2xl border border-gull/40 bg-gull/10 p-5 sm:p-6">
          <Tre tekst={d.velsignelse} />
        </div>
      )}
      {d.overskrift && <Tre tekst={d.overskrift} className="mt-6 text-rubrikk" />}

      <ol className="mt-8 grid gap-8">
        {d.vers.map((v) => (
          <li key={v.nr} id={`v${v.nr}`} className="scroll-mt-24 border-t border-linje/70 pt-6">
            <p className="mb-3 text-sm tabular-nums text-rubrikk/80">{v.nr}</p>
            <Tre tekst={v} />
          </li>
        ))}
      </ol>

      {forrige && neste && (
        <nav aria-label="Andre dager" className="mt-14 flex justify-between gap-4 border-t border-linje pt-6 text-sm">
          <Link href={`/bonner/${forrige.id}/`} className="inline-flex items-center gap-2 text-dempet hover:text-rubrikk">
            <ArrowLeft className="size-4" aria-hidden="true" /> {forrige.tittel.no} · <span lang="am">{forrige.tittel.am}</span>
          </Link>
          <Link href={`/bonner/${neste.id}/`} className="inline-flex items-center gap-2 text-dempet hover:text-rubrikk">
            {neste.tittel.no} · <span lang="am">{neste.tittel.am}</span> <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </nav>
      )}

      <p className="mt-12 text-xs text-svak">
        Fra «{BONNEBOK.kilde.tittel}», oversatt til norsk av {BONNEBOK.kilde.oversatt} ({BONNEBOK.kilde.tid}).
      </p>
    </div>
  );
}
