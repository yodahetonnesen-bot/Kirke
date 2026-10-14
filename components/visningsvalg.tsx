"use client";

import { useSyncExternalStore } from "react";

type Valg = { verdi: string; tekst: React.ReactNode };

function lesAttributt(navn: "sprak" | "norsk", standard: string) {
  return () => document.documentElement.dataset[navn] ?? standard;
}

function abonner(endret: () => void) {
  const obs = new MutationObserver(endret);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-sprak", "data-norsk"] });
  return () => obs.disconnect();
}

function Bryter({ navn, standard, valg, etikett }: { navn: "sprak" | "norsk"; standard: string; valg: Valg[]; etikett: string }) {
  const verdi = useSyncExternalStore(abonner, lesAttributt(navn, standard), () => standard);
  function velg(ny: string) {
    const d = document.documentElement;
    if (ny === standard) d.removeAttribute(`data-${navn}`);
    else d.setAttribute(`data-${navn}`, ny);
    try {
      if (ny === standard) localStorage.removeItem(navn);
      else localStorage.setItem(navn, ny);
    } catch {}
  }
  return (
    <div role="radiogroup" aria-label={etikett} className="inline-flex rounded-full border border-linje bg-flate p-0.5 text-sm">
      {valg.map((v) => (
        <button
          key={v.verdi}
          type="button"
          role="radio"
          aria-checked={verdi === v.verdi}
          onClick={() => velg(v.verdi)}
          className={`rounded-full px-3 py-1 transition-colors ${
            verdi === v.verdi ? "bg-blekk text-bakgrunn" : "text-dempet hover:text-blekk"
          }`}
        >
          {v.tekst}
        </button>
      ))}
    </div>
  );
}

/** andre: hva som står i den andre kolonnen. Uten andre kolonne er det ingenting å velge mellom. */
export function Visningsvalg({ harElb, andre = "no" }: { harElb: boolean; andre?: "no" | "en" | null }) {
  if (!andre) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Bryter
        navn="sprak"
        standard="begge"
        etikett="Språk"
        valg={[
          { verdi: "begge", tekst: <>Begge · <span lang="am">ሁለቱም</span></> },
          { verdi: "am", tekst: <span lang="am">አማርኛ</span> },
          // Verdien er «no» også for engelsk, så valget gjelder den andre kolonnen i alle bøkene.
          { verdi: "no", tekst: andre === "en" ? <span lang="en">English</span> : "Norsk" },
        ]}
      />
      {harElb && (
        <Bryter
          navn="norsk"
          standard="1930"
          etikett="Norsk utgave"
          valg={[
            { verdi: "1930", tekst: "1930" },
            { verdi: "elb", tekst: "Lettlest" },
          ]}
        />
      )}
    </div>
  );
}
