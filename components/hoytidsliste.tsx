"use client";

import { useSyncExternalStore } from "react";
import { MANEDER, tilEtiopisk } from "@/lib/etiopisk-dato";
import { fasterIAar, hoytiderIAar, type HoytidType } from "@/lib/hoytider";

const ingenting = () => () => {};
const dagnr = (d: Date) => Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);

const TYPER: Record<HoytidType, { no: string; am: string; farge: string }> = {
  herre: { no: "Herrens store høytid", am: "ዐቢይ በዓል", farge: "bg-rubrikk" },
  "herre-liten": { no: "Herrens lille høytid", am: "ንዑስ በዓል", farge: "bg-rubrikk/50" },
  maria: { no: "Maria", am: "በዓለ ማርያም", farge: "bg-sky-600/70" },
  engel: { no: "Engler", am: "በዓለ መላእክት", farge: "bg-gull" },
  helgen: { no: "Helgener", am: "በዓለ ቅዱሳን", farge: "bg-emerald-700/60" },
  annen: { no: "Andre", am: "ሌሎች", farge: "bg-dempet/50" },
};

function etDato(d: Date) {
  const e = tilEtiopisk(d);
  return `${MANEDER[e.maned - 1].am} ${e.dag}`;
}

/** Alle høytidene og fastene i inneværende etiopiske år, med neste høytid uthevet. */
export function Hoytidsliste() {
  const iDag = useSyncExternalStore(ingenting, () => new Date().toDateString(), () => null);
  if (!iDag) return <div className="h-96" aria-hidden="true" />;
  const naa = new Date(iDag);
  const aar = tilEtiopisk(naa).aar;
  const hoytider = hoytiderIAar(aar);
  const faster = fasterIAar(aar);
  const neste = hoytider.find((h) => dagnr(h.dato) >= dagnr(naa));
  const kort = (d: Date) => d.toLocaleDateString("nb-NO", { day: "numeric", month: "short" });
  const ukedag = (d: Date) => d.toLocaleDateString("nb-NO", { weekday: "short" });

  return (
    <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem]">
      <div>
        <h2 className="flex flex-wrap items-baseline gap-x-3 border-b border-linje pb-3">
          <span className="font-serif text-2xl">Høytidene i år</span>
          <span lang="am" className="text-lg text-dempet">
            የ{aar} ዓ.ም. በዓላት
          </span>
        </h2>
        <ol>
          {hoytider.map(({ hoytid: h, dato }) => {
            const forbi = dagnr(dato) < dagnr(naa);
            const erNeste = neste?.hoytid.id === h.id;
            const dager = dagnr(dato) - dagnr(naa);
            return (
              <li
                key={h.id}
                className={`grid grid-cols-[5.5rem_1fr] items-baseline gap-x-4 border-b border-linje/50 py-3 sm:grid-cols-[7rem_1fr_auto] ${
                  forbi ? "opacity-50" : ""
                } ${erNeste ? "-mx-3 rounded-xl border-transparent bg-rubrikk-svak px-3" : ""}`}
              >
                <span className="text-sm">
                  <span lang="am" className="block">
                    {etDato(dato)}
                  </span>
                  <span className="block text-xs text-svak">
                    {ukedag(dato)} {kort(dato)}
                  </span>
                </span>
                <span>
                  <span className="flex items-center gap-2">
                    <span className={`size-2 shrink-0 rounded-full ${TYPER[h.type].farge}`} aria-hidden="true" />
                    <span lang="am" className="text-lg">
                      {h.navn.am}
                    </span>
                  </span>
                  <span className="block pl-4 text-sm text-dempet">{h.navn.no}</span>
                </span>
                {erNeste && (
                  <span className="col-start-2 pl-4 text-sm text-rubrikk sm:col-start-3 sm:pl-0">
                    {dager === 0 ? (
                      <>
                        I dag · <span lang="am">ዛሬ</span>
                      </>
                    ) : (
                      <>
                        Om {dager} {dager === 1 ? "dag" : "dager"} · <span lang="am">ከ{dager} ቀን በኋላ</span>
                      </>
                    )}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-dempet">
          {Object.entries(TYPER).map(([id, t]) => (
            <li key={id} className="inline-flex items-center gap-1.5">
              <span className={`size-2 rounded-full ${t.farge}`} aria-hidden="true" />
              {t.no} · <span lang="am">{t.am}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="flex flex-wrap items-baseline gap-x-3 border-b border-linje pb-3">
          <span className="font-serif text-2xl">Fastene</span>
          <span lang="am" className="text-lg text-dempet">
            አጽዋማት
          </span>
        </h2>
        <ol>
          {faster.map(({ faste, fra, til }) => {
            const dager = dagnr(til) - dagnr(fra) + 1;
            const naaPagar = dagnr(naa) >= dagnr(fra) && dagnr(naa) <= dagnr(til);
            return (
              <li key={faste.id} className={`border-b border-linje/50 py-3 ${dagnr(til) < dagnr(naa) ? "opacity-50" : ""}`}>
                <p className="flex items-center gap-2">
                  <span className="h-2 w-3.5 shrink-0 rounded-full bg-gull" aria-hidden="true" />
                  <span lang="am" className="text-lg">
                    {faste.navn.am}
                  </span>
                  {naaPagar && <span className="text-sm text-rubrikk">· nå</span>}
                </p>
                <p className="pl-5.5 text-sm text-dempet">{faste.navn.no}</p>
                <p className="pl-5.5 text-xs text-svak">
                  {dager === 1 ? kort(fra) : `${kort(fra)} – ${kort(til)}`} ·{" "}
                  <span lang="am">{dager === 1 ? etDato(fra) : `${etDato(fra)} – ${etDato(til)}`}</span> · {dager}{" "}
                  {dager === 1 ? "dag" : "dager"}
                </p>
              </li>
            );
          })}
          <li className="py-3">
            <p className="flex items-center gap-2">
              <span className="h-2 w-3.5 shrink-0 rounded-full bg-gull" aria-hidden="true" />
              <span lang="am" className="text-lg">
                ጾመ ድኅነት
              </span>
            </p>
            <p className="pl-5.5 text-sm text-dempet">Hver onsdag og fredag, unntatt de 50 dagene etter påske</p>
            <p lang="am" className="pl-5.5 text-xs text-svak">
              ዘወትር ረቡዕና ዓርብ፤ ከትንሣኤ እስከ ጰራቅሊጦስ ባሉት ሃምሳ ቀናት በቀር
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
