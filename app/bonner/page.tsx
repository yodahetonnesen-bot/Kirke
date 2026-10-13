import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SEKSJONER } from "@/lib/navigasjon";
import { BILDER } from "@/lib/bilder";
import { BONNEBOK, UKEDAGER, finnBonnedel, type Tre } from "@/lib/bonner";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { IDagMerke } from "@/components/i-dag-merke";

export const metadata: Metadata = { title: "Bønner · ጸሎት" };

function Kort({ href, tittel, tekst, children }: { href: string; tittel: Tre; tekst?: string; children?: React.ReactNode }) {
  return (
    <Link href={href} className="group flex h-full flex-col rounded-2xl border border-linje bg-flate p-5 transition-colors hover:border-rubrikk/40">
      <div className="flex items-start justify-between gap-3">
        <p lang="gez" className="font-serif text-2xl text-rubrikk">
          {tittel.gez}
        </p>
        {children}
      </div>
      <p className="mt-1">
        <span className="group-hover:text-rubrikk">{tittel.no}</span> · <span lang="am" className="text-dempet">{tittel.am}</span>
      </p>
      {tekst && <p className="mt-2 text-sm text-dempet">{tekst}</p>}
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-rubrikk">
        Be · <span lang="am">ይጸልዩ</span> <ArrowRight className="size-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function Bonner() {
  const seksjon = SEKSJONER.find((s) => s.href === "/bonner/")!;
  const daglig = finnBonnedel("daglig")!;
  const englene = finnBonnedel("englenes-lovsang")!;
  return (
    <>
      <Seksjonstopp
        bilde={BILDER.arganonaMaryamDetalj}
        tittel={seksjon.no}
        am={seksjon.am}
        tekst="De daglige bønnene, ውዳሴ ማርያም for hver dag i uka og ይዌድስዋ መላእክት – på ge'ez, amharisk og norsk."
        tekstAm="የዘወትር ጸሎት፣ ውዳሴ ማርያም ለየዕለቱና ይዌድስዋ መላእክት በግዕዝ፣ በአማርኛና በኖርዌይኛ።"
      />
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <section className="mt-12">
          <h2 className="text-sm uppercase tracking-[0.18em] text-dempet">
            Hver dag · <span lang="am" className="normal-case tracking-normal">ዘወትር</span>
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Kort
              href="/bonner/daglig/"
              tittel={daglig.tittel}
              tekst="Korsets tegn, takkebønnen, Fadervår, Marias hilsen, trosbekjennelsen og de andre bønnene vi ber hver dag."
            />
            <Kort href="/bonner/englenes-lovsang/" tittel={englene.tittel} tekst="Englenes lovsang til Maria, med engelen Gabriels hilsen." />
          </div>
        </section>

        <section className="mt-14 border-t border-linje pt-10">
          <h2 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span lang="gez" className="font-serif text-3xl">
              ውዳሴ ማርያም
            </span>
            <span className="text-xl text-dempet">Lovprisningen av Maria</span>
          </h2>
          <p className="mt-3 max-w-3xl text-dempet">
            ውዳሴ ማርያም er skrevet av den hellige Efrem den syriske, og har en egen del for hver dag i uka. Dagens del er merket.
          </p>
          <p lang="am" className="mt-1 max-w-3xl text-dempet">
            ውዳሴ ማርያም በቅዱስ ኤፍሬም የተደረሰ ሲሆን ለሳምንቱ ዕለታት ሁሉ የራሱ ክፍል አለው።
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {UKEDAGER.map((u) => {
              const d = finnBonnedel(u.id)!;
              return (
                <li key={u.id}>
                  <Kort href={`/bonner/${u.id}/`} tittel={d.tittel}>
                    <IDagMerke ukedag={u.dag} />
                  </Kort>
                </li>
              );
            })}
          </ul>
        </section>

        <p className="mt-14 text-sm text-svak">
          Teksten er fra «{BONNEBOK.kilde.tittel}», oversatt til norsk av {BONNEBOK.kilde.oversatt} ({BONNEBOK.kilde.tid}). Har du spørsmål om
          bønnene, spør presten i kirka.
        </p>
      </div>
    </>
  );
}
