"use client";

import { useSyncExternalStore } from "react";

// Velg hvilke språk som vises i bønneboka. Lagres i nettleseren og settes på <html data-skjul>,
// så valget gjelder før siden tegnes neste gang (se app/layout.tsx).
const SPRAAK = [
  { id: "gez", tekst: "ግዕዝ", lang: "gez" },
  { id: "am", tekst: "አማርኛ", lang: "am" },
  { id: "no", tekst: "Norsk", lang: "nb" },
] as const;

function abonner(endret: () => void) {
  const obs = new MutationObserver(endret);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-skjul"] });
  return () => obs.disconnect();
}

export function Spraakvalg() {
  const skjult = useSyncExternalStore(abonner, () => document.documentElement.dataset.skjul ?? "", () => "");
  const liste = skjult.split(" ").filter(Boolean);

  function bytt(id: string) {
    const ny = liste.includes(id) ? liste.filter((x) => x !== id) : [...liste, id];
    if (ny.length >= SPRAAK.length) return; // minst ett språk må vises
    const d = document.documentElement;
    if (ny.length) d.setAttribute("data-skjul", ny.join(" "));
    else d.removeAttribute("data-skjul");
    try {
      if (ny.length) localStorage.setItem("skjul", ny.join(" "));
      else localStorage.removeItem("skjul");
    } catch {}
  }

  return (
    <div role="group" aria-label="Språk" className="inline-flex rounded-full border border-linje bg-flate p-0.5 text-sm">
      {SPRAAK.map((s) => {
        const vises = !liste.includes(s.id);
        return (
          <button
            key={s.id}
            type="button"
            aria-pressed={vises}
            onClick={() => bytt(s.id)}
            lang={s.lang}
            className={`rounded-full px-3 py-1 transition-colors ${vises ? "bg-blekk text-bakgrunn" : "text-dempet hover:text-blekk"}`}
          >
            {s.tekst}
          </button>
        );
      })}
    </div>
  );
}
