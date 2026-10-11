import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { alleBoker, finnBok, kapittelRader, type Bok } from "@/lib/bibel";
import { Visningsvalg } from "@/components/visningsvalg";
import { VersCelle } from "@/components/vers-celle";

export const dynamicParams = false;

export function generateStaticParams() {
  return alleBoker().flatMap((b) =>
    Array.from({ length: b.kapitler }, (_, i) => ({ bok: b.adresse, kapittel: String(i + 1) })),
  );
}

export async function generateMetadata({ params }: PageProps<"/bibelen/[bok]/[kapittel]">): Promise<Metadata> {
  const { bok: adresse, kapittel } = await params;
  const bok = finnBok(adresse);
  return { title: bok ? `${bok.navn.no} ${kapittel} · ${bok.navn.am} ${kapittel}` : "Bibelen" };
}

/** Forrige og neste kapittel, også over bokgrensene. */
function naboer(bok: Bok, kapittel: number) {
  const boker = alleBoker();
  const i = boker.findIndex((b) => b.id === bok.id);
  const forrige =
    kapittel > 1 ? { bok, kap: kapittel - 1 } : i > 0 ? { bok: boker[i - 1], kap: boker[i - 1].kapitler } : null;
  const neste =
    kapittel < bok.kapitler ? { bok, kap: kapittel + 1 } : i < boker.length - 1 ? { bok: boker[i + 1], kap: 1 } : null;
  return { forrige, neste };
}

export default async function KapittelSide({ params }: PageProps<"/bibelen/[bok]/[kapittel]">) {
  const { bok: adresse, kapittel: k } = await params;
  const bok = finnBok(adresse);
  const kapittel = Number(k);
  if (!bok || !(kapittel >= 1 && kapittel <= bok.kapitler)) notFound();

  const rader = kapittelRader(bok, kapittel);
  const harElb = bok.tekster.includes("elb");
  const { forrige, neste } = naboer(bok, kapittel);

  return (
    <article className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14">
      <header className="flex flex-col gap-6 border-b border-linje pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href={`/bibelen/${bok.adresse}/`} className="text-sm text-dempet hover:text-blekk">
            ← {bok.navn.no} · <span lang="am">{bok.navn.am}</span>
          </Link>
          <h1 className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span lang="am" className="font-serif text-3xl sm:text-4xl">
              {bok.navn.am} <span className="text-rubrikk">{kapittel}</span>
            </span>
            <span className="font-serif text-2xl text-dempet sm:text-3xl">
              {bok.navn.no} {kapittel}
            </span>
          </h1>
        </div>
        <Visningsvalg harElb={harElb} />
      </header>

      <div className={`mt-2 ${harElb ? "" : "uten-elb"}`}>
        <div className="vers-rad sticky top-16 z-10 hidden grid-cols-[2.5rem_1fr_1fr] gap-x-8 border-b border-linje/60 bg-bakgrunn/95 py-3 text-xs uppercase tracking-[0.16em] text-svak backdrop-blur md:grid">
          <span />
          <span className="kun-am">
            <span lang="am" className="normal-case tracking-normal">አማርኛ</span> · 1962
          </span>
          <span className="kun-no">
            <span className="norsk-1930">Norsk · 1930</span>
            <span className="norsk-elb">Norsk · En Levende Bok</span>
          </span>
        </div>
        {rader.map((r) => (
          <div
            key={`${r.fra}${r.ekstra ? "+" + r.am[0]?.ref : ""}`}
            id={r.ekstra ? undefined : `v${r.fra}`}
            className={`vers-rad grid scroll-mt-32 grid-cols-[2.5rem_1fr] gap-x-8 border-b border-linje/40 py-4 md:grid-cols-[2.5rem_1fr_1fr] ${
              r.ekstra ? "bg-rubrikk-svak/40" : ""
            }`}
          >
            {r.ekstra ? (
              <span className="pt-1 text-sm text-svak" title="Vers som bare finnes i den amhariske bibelen">
                +
              </span>
            ) : (
              <a
                href={`#v${r.fra}`}
                className="pt-1 text-sm tabular-nums text-rubrikk/80 hover:text-rubrikk"
                aria-label={`Vers ${r.fra}`}
              >
                {r.fra === r.til ? r.fra : `${r.fra}–${r.til}`}
              </a>
            )}
            <div className="kun-am text-blekk">
              <VersCelle deler={r.am} lang="am" />
            </div>
            <div className="kun-no col-start-2 mt-2 font-serif text-[1.05rem] leading-relaxed text-blekk md:col-start-3 md:mt-0">
              <div className="norsk-1930">
                <VersCelle
                  deler={r.no}
                  lang="nb"
                  tom={r.ekstra ? "Dette verset finnes bare i den amhariske bibelen." : undefined}
                />
              </div>
              {r.elb && (
                <div className="norsk-elb">
                  <VersCelle
                    deler={r.elb}
                    lang="nb"
                    tom={
                      r.ekstra
                        ? "Dette verset finnes bare i den amhariske bibelen."
                        : "Dette verset er ikke med i En Levende Bok, fordi det mangler i de eldste håndskriftene. Se 1930-utgaven."
                    }
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Kapitler" className="mt-12 grid grid-cols-2 gap-3">
        {forrige ? (
          <Link
            href={`/bibelen/${forrige.bok.adresse}/${forrige.kap}/`}
            className="rounded-2xl border border-linje p-4 transition-colors hover:border-rubrikk"
          >
            <span className="text-sm text-dempet">← Forrige · <span lang="am">ቀዳሚ</span></span>
            <span className="mt-1 block">
              {forrige.bok.navn.no} {forrige.kap}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {neste && (
          <Link
            href={`/bibelen/${neste.bok.adresse}/${neste.kap}/`}
            className="rounded-2xl border border-linje p-4 text-right transition-colors hover:border-rubrikk"
          >
            <span className="text-sm text-dempet">Neste · <span lang="am">ቀጣይ</span> →</span>
            <span className="mt-1 block">
              {neste.bok.navn.no} {neste.kap}
            </span>
          </Link>
        )}
      </nav>

      <p className="mt-10 text-xs leading-relaxed text-svak">
        Amharisk tekst: መጽሐፍ ቅዱስ, © 1962 Bibelselskapet i Etiopia (Bible Society of Ethiopia).
        Norsk tekst: Det Norske Bibelselskaps oversettelse av 1930.
        {harElb && (
          <>
            {" "}Lettlest: Biblica® Open En Levende Bok: Det Nye Testamentet™, © 1978, 1988, 2005 Biblica, Inc.,
            lisens CC BY-SA 4.0.
          </>
        )}{" "}
        <Link href="/om/" className="underline hover:text-dempet">Mer om kildene</Link>
      </p>
    </article>
  );
}
