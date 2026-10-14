import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { alleBoker, andreTekst, finnBok, kapitlene, kapittelRader, type Bok } from "@/lib/bibel";
import { AmhariskKilde, BareAmharisk, Merknad } from "@/components/bibel-merknad";
import { Visningsvalg } from "@/components/visningsvalg";
import { VersCelle } from "@/components/vers-celle";

export const dynamicParams = false;

export function generateStaticParams() {
  return alleBoker().flatMap((b) => kapitlene(b).map((k) => ({ bok: b.adresse, kapittel: String(k) })));
}

export async function generateMetadata({ params }: PageProps<"/bibelen/[bok]/[kapittel]">): Promise<Metadata> {
  const { bok: adresse, kapittel } = await params;
  const bok = finnBok(adresse);
  return { title: bok ? `${bok.navn.no} ${kapittel} · ${bok.navn.am} ${kapittel}` : "Bibelen" };
}

/** Forrige og neste kapittel, også over bokgrensene. */
function naboer(bok: Bok, kapittel: number) {
  const alle = alleBoker().flatMap((b) => kapitlene(b).map((kap) => ({ bok: b, kap })));
  const i = alle.findIndex((x) => x.bok.id === bok.id && x.kap === kapittel);
  return { forrige: alle[i - 1] ?? null, neste: alle[i + 1] ?? null };
}

export default async function KapittelSide({ params }: PageProps<"/bibelen/[bok]/[kapittel]">) {
  const { bok: adresse, kapittel: k } = await params;
  const bok = finnBok(adresse);
  const kapittel = Number(k);
  if (!bok || !kapitlene(bok).includes(kapittel)) notFound();

  const rader = kapittelRader(bok, kapittel);
  const harElb = bok.tekster.includes("elb");
  const andre = andreTekst(bok);
  const { forrige, neste } = naboer(bok, kapittel);
  const kolonner = andre ? "md:grid-cols-[2.5rem_1fr_1fr]" : "";

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
        <Visningsvalg harElb={harElb} andre={andre} />
      </header>

      {bok.merknad && <Merknad tekst={bok.merknad} />}
      {!andre && <BareAmharisk />}
      {bok.ulikVersdeling?.includes(kapittel) && (
        <p className="mt-6 rounded-2xl border border-linje bg-flate/60 px-4 py-3 text-sm text-dempet">
          Den engelske teksten har en annen versinndeling i dette kapitlet. Versene står side om side så langt de går;
          ingen tekst er tatt bort.
        </p>
      )}

      <div className={`mt-2 ${harElb ? "" : "uten-elb"} ${andre ? "" : "bare-am"}`}>
        <div
          className={`vers-rad sticky top-16 z-10 hidden gap-x-8 border-b border-linje/60 bg-bakgrunn/95 py-3 text-xs uppercase tracking-[0.16em] text-svak backdrop-blur md:grid ${
            andre ? "grid-cols-[2.5rem_1fr_1fr]" : "grid-cols-[2.5rem_1fr]"
          }`}
        >
          <span />
          <span className="kun-am">
            <span lang="am" className="normal-case tracking-normal">አማርኛ</span> ·{" "}
            {bok.amUtgave === "1962" ? "1962" : <span lang="am" className="normal-case tracking-normal">2000 ዓ.ም.</span>}
          </span>
          {andre === "no" && (
            <span className="kun-no">
              <span className="norsk-1930">Norsk · 1930</span>
              <span className="norsk-elb">Norsk · En Levende Bok</span>
            </span>
          )}
          {andre === "en" && (
            <span className="kun-no normal-case tracking-normal" lang="en">
              English (WEB)
            </span>
          )}
        </div>
        {rader.map((r) => (
          <div
            key={`${r.fra}${r.ekstra ? "+" + r.am[0]?.ref : ""}`}
            id={r.ekstra ? undefined : `v${r.fra}`}
            className={`vers-rad grid scroll-mt-32 grid-cols-[2.5rem_1fr] gap-x-8 border-b border-linje/40 py-4 ${kolonner} ${
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
            {andre === "en" && (
              <div className="kun-no col-start-2 mt-2 font-serif text-[1.05rem] leading-relaxed text-blekk md:col-start-3 md:mt-0">
                <VersCelle deler={r.en ?? []} lang="en" />
              </div>
            )}
            {andre === "no" && (
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
            )}
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
        {bok.amUtgave === "1962" ? (
          <>Amharisk tekst: መጽሐፍ ቅዱስ, © 1962 Bibelselskapet i Etiopia (Bible Society of Ethiopia).</>
        ) : (
          <AmhariskKilde />
        )}
        {andre === "no" && <> Norsk tekst: Det Norske Bibelselskaps oversettelse av 1930.</>}
        {andre === "en" && <> Engelsk tekst: World English Bible (WEB), public domain.</>}
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
