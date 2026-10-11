"use client";

import { useSyncExternalStore } from "react";
import { MANEDER, dagerIManed, evangelistar, tilEtiopisk, tilGregoriansk } from "@/lib/etiopisk-dato";

const ingenting = () => () => {};

// De 13 månedene i inneværende etiopiske år, med datoene i vår kalender.
export function Manedsoversikt() {
  const iDag = useSyncExternalStore(ingenting, () => new Date().toDateString(), () => null);
  if (!iDag) return <div className="h-96" aria-hidden="true" />;
  const et = tilEtiopisk(new Date(iDag));
  const ar = evangelistar(et.aar);
  const kort = (d: Date) => d.toLocaleDateString("nb-NO", { day: "numeric", month: "short" });

  return (
    <section>
      <h2 className="flex flex-wrap items-baseline gap-x-3 border-b border-linje pb-3">
        <span className="font-serif text-2xl">År {et.aar}</span>
        <span lang="am" className="text-lg text-dempet">
          {et.aar} ዓ.ም. · {ar.am}
        </span>
        <span className="text-sm text-svak">{ar.no}</span>
      </h2>
      <ol className="mt-2">
        {MANEDER.map((m, i) => {
          const nr = i + 1;
          const forste = tilGregoriansk({ aar: et.aar, maned: nr, dag: 1 });
          const siste = tilGregoriansk({ aar: et.aar, maned: nr, dag: dagerIManed(et.aar, nr) });
          const naa = nr === et.maned;
          return (
            <li
              key={m.no}
              className={`grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-4 border-b border-linje/50 py-3 sm:grid-cols-[2rem_10rem_1fr_auto] ${
                naa ? "text-rubrikk" : ""
              }`}
            >
              <span className="text-sm tabular-nums text-svak">{nr}</span>
              <span lang="am" className="text-lg">{m.am}</span>
              <span className="hidden text-dempet sm:block">{m.no}</span>
              <span className="text-sm tabular-nums text-dempet">
                {kort(forste)} – {kort(siste)}
                {naa && <span className="ml-2 text-rubrikk">· nå</span>}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
