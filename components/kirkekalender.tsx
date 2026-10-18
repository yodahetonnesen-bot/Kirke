"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MANEDER, UKEDAGER_AM, geezTall, tilEtiopisk } from "@/lib/etiopisk-dato";
import { manedIKirka } from "@/lib/hoytider";
import { Gitsawe } from "./gitsawe";

const ingenting = () => () => {};
const UKEDAGER_NO = ["søn", "man", "tir", "ons", "tor", "fre", "lør"];
// Uka begynner på mandag, som i de etiopiske kirkekalenderne.
const REKKEFOLGE = [1, 2, 3, 4, 5, 6, 0];

function flytt(aar: number, maned: number, steg: number) {
  const indeks = aar * 13 + (maned - 1) + steg;
  return { aar: Math.floor(indeks / 13), maned: (indeks % 13) + 1 };
}

/** Månedskalender der høytider og fastedager er merket. Trykk på en dag for å se hva som skjer i kirka. */
export function Kirkekalender() {
  const iDag = useSyncExternalStore(ingenting, () => new Date().toDateString(), () => null);
  const [steg, setSteg] = useState(0);
  const [valgt, setValgt] = useState<number | null>(null);
  if (!iDag) return <div className="h-[36rem]" aria-hidden="true" />;

  const naa = new Date(iDag);
  const etNaa = tilEtiopisk(naa);
  const { aar, maned } = flytt(etNaa.aar, etNaa.maned, steg);
  const dager = manedIKirka(aar, maned);
  const erDenneManed = aar === etNaa.aar && maned === etNaa.maned;
  const valgtDag = valgt ?? (erDenneManed ? etNaa.dag : 1);
  const dag = dager[Math.min(valgtDag, dager.length) - 1];
  const tomme = REKKEFOLGE.indexOf(dager[0].dato.getDay());
  const m = MANEDER[maned - 1];
  const kort = (d: Date) => d.toLocaleDateString("nb-NO", { day: "numeric", month: "short" });
  const lang = dag.dato.toLocaleDateString("nb-NO", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  function bytt(retning: number) {
    setSteg((s) => s + retning);
    setValgt(null);
  }

  return (
    <section aria-label="Kirkekalender" className="lg:grid lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-10">
      <div>
      <div className="flex items-center justify-between gap-4">
        <h2>
          <span lang="am" className="block font-serif text-3xl">
            {m.am} {aar}
          </span>
          <span className="text-sm text-dempet">
            {m.no} · {kort(dager[0].dato)} – {kort(dager[dager.length - 1].dato)}
          </span>
        </h2>
        <div className="flex items-center gap-1">
          {!erDenneManed && (
            <button type="button" onClick={() => bytt(-steg)} className="mr-2 rounded-full border border-linje px-3 py-1.5 text-sm text-dempet hover:text-rubrikk">
              I dag · <span lang="am">ዛሬ</span>
            </button>
          )}
          <button type="button" onClick={() => bytt(-1)} aria-label="Forrige måned" className="grid size-9 place-items-center rounded-full border border-linje hover:text-rubrikk">
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => bytt(1)} aria-label="Neste måned" className="grid size-9 place-items-center rounded-full border border-linje hover:text-rubrikk">
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1 text-center sm:gap-2">
        {REKKEFOLGE.map((u) => (
          <div key={u} className="pb-2 text-[0.7rem] leading-tight text-svak">
            <span className="block">{UKEDAGER_NO[u]}</span>
            <span lang="am" className="hidden sm:block">
              {UKEDAGER_AM[u]}
            </span>
          </div>
        ))}
        {Array.from({ length: tomme }, (_, i) => (
          <div key={`tom-${i}`} />
        ))}
        {dager.map((d) => {
          const erValgt = d.et.dag === dag.et.dag;
          const erIDag = erDenneManed && d.et.dag === etNaa.dag;
          const hoytid = d.hoytider.length > 0;
          return (
            <button
              key={d.et.dag}
              type="button"
              onClick={() => setValgt(d.et.dag)}
              aria-pressed={erValgt}
              aria-label={`${d.et.dag}. ${m.no}${hoytid ? ", høytid" : ""}${d.faste ? ", fastedag" : ""}`}
              className={`relative flex h-12 flex-col items-center justify-center rounded-xl border pb-1 text-sm transition-colors sm:h-[4.75rem] sm:pb-2.5 ${
                erValgt
                  ? "border-blekk bg-blekk text-bakgrunn"
                  : erIDag
                    ? "border-rubrikk/60 bg-flate"
                    : "border-linje/60 hover:border-rubrikk/40"
              }`}
            >
              <span className={`text-base tabular-nums sm:text-lg ${hoytid && !erValgt ? "font-semibold text-rubrikk" : ""}`}>{d.et.dag}</span>
              <span className={`hidden text-[0.65rem] sm:block ${erValgt ? "text-bakgrunn/70" : "text-svak"}`}>{kort(d.dato)}</span>
              <span className="absolute bottom-1.5 flex gap-1" aria-hidden="true">
                {hoytid && <span className={`size-1.5 rounded-full ${erValgt ? "bg-bakgrunn" : "bg-rubrikk"}`} />}
                {d.faste && <span className={`h-1.5 w-3 rounded-full ${erValgt ? "bg-bakgrunn/70" : "bg-gull"}`} />}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-dempet">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-rubrikk" aria-hidden="true" /> Høytid · <span lang="am">በዓል</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-3.5 rounded-full bg-gull" aria-hidden="true" /> Fastedag · <span lang="am">የጾም ቀን</span>
        </span>
      </div>

      </div>

      <div className="mt-8 self-start rounded-3xl border border-linje bg-flate p-6 sm:p-8 lg:sticky lg:top-24 lg:mt-14" aria-live="polite">
        <p lang="am" className="font-serif text-2xl">
          {UKEDAGER_AM[dag.dato.getDay()]}፣ {m.am} {dag.et.dag} ቀን {aar} ዓ.ም.
        </p>
        <p className="mt-1 text-dempet">
          {lang.charAt(0).toUpperCase() + lang.slice(1)} · <span lang="am">{geezTall(dag.et.dag)}</span>
        </p>

        {dag.hoytider.length > 0 && (
          <ul className="mt-6 grid gap-3">
            {dag.hoytider.map((h) => (
              <li key={h.id} className="border-l-2 border-rubrikk pl-4">
                <p>
                  <span lang="am" className="text-lg text-rubrikk">
                    {h.navn.am}
                  </span>{" "}
                  · {h.navn.no}
                </p>
                {h.om && (
                  <p className="mt-1 text-sm text-dempet">
                    {h.om.no} <span lang="am">{h.om.am}</span>
                  </p>
                )}
                {h.tema && (
                  <Link href={`/laer/${h.tema}/`} className="mt-1 inline-block text-sm text-rubrikk hover:underline">
                    Les mer · <span lang="am">ተጨማሪ ያንብቡ</span> →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}

        {dag.minnedager.length > 0 && (
          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.16em] text-svak">
              Minnes hver måned · <span lang="am" className="normal-case tracking-normal">ወርኃዊ በዓል</span>
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {dag.minnedager.map((md) => (
                <li key={md.navn.am} className="rounded-full border border-linje px-3 py-1 text-sm">
                  <span lang="am">{md.navn.am}</span> <span className="text-dempet">· {md.navn.no}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 flex items-center gap-2 text-sm">
          <span className={`h-2 w-3.5 rounded-full ${dag.faste ? "bg-gull" : "bg-linje"}`} aria-hidden="true" />
          {dag.faste ? (
            <span>
              Fastedag: {dag.faste.navn.no} · <span lang="am">{dag.faste.navn.am}</span>
            </span>
          ) : (
            <span className="text-dempet">
              Ingen faste · <span lang="am">ጾም የለም</span>
            </span>
          )}
        </p>

        <Gitsawe maned={maned} dag={dag.et.dag} />
      </div>
    </section>
  );
}
