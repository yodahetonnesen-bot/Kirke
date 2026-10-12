"use client";

import { useSyncExternalStore } from "react";
import { MANEDER, UKEDAGER_AM, evangelistar, geezTall, tilEtiopisk } from "@/lib/etiopisk-dato";
import { dagIKirka } from "@/lib/hoytider";

// Datoen regnes ut i nettleseren, så den alltid er riktig (siden bygges bare av og til).
const ingenting = () => () => {};

export function IDag({ kompakt = false }: { kompakt?: boolean }) {
  const iDag = useSyncExternalStore(
    ingenting,
    () => new Date().toDateString(),
    () => null,
  );
  if (!iDag) return <div className="h-[10rem]" aria-hidden="true" />;

  const naa = new Date(iDag);
  const et = tilEtiopisk(naa);
  const maned = MANEDER[et.maned - 1];
  const ar = evangelistar(et.aar);
  const norsk = naa.toLocaleDateString("nb-NO", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const kirka = dagIKirka(naa);

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-dempet">
        I dag · <span lang="am" className="normal-case tracking-normal">ዛሬ</span>
      </p>
      <p lang="am" className={`mt-3 font-serif text-blekk ${kompakt ? "text-2xl" : "text-3xl sm:text-4xl"}`}>
        {UKEDAGER_AM[naa.getDay()]}፣ {maned.am} {et.dag} ቀን {et.aar} ዓ.ም.
      </p>
      <p className="mt-1 text-dempet">
        {norsk.charAt(0).toUpperCase() + norsk.slice(1)} · {et.dag}. {maned.no} {et.aar}
      </p>
      <p className="mt-1 text-sm text-svak">
        <span lang="am">{ar.am}</span> · {ar.no} · <span lang="am">{geezTall(et.aar)}</span>
      </p>
      <ul className="mt-4 flex flex-wrap gap-2 text-sm">
        {kirka.hoytider.map((h) => (
          <li key={h.id} className="rounded-full bg-rubrikk-svak px-3 py-1 text-rubrikk">
            <span lang="am">{h.navn.am}</span> · {h.navn.no}
          </li>
        ))}
        {kirka.minnedager.map((m) => (
          <li key={m.navn.am} className="rounded-full border border-linje px-3 py-1">
            <span lang="am">{m.navn.am}</span> <span className="text-dempet">· {m.navn.no}</span>
          </li>
        ))}
        <li className="inline-flex items-center gap-2 rounded-full border border-linje px-3 py-1">
          <span className={`h-2 w-3.5 rounded-full ${kirka.faste ? "bg-gull" : "bg-linje"}`} aria-hidden="true" />
          {kirka.faste ? (
            <span>
              <span lang="am">{kirka.faste.navn.am}</span> <span className="text-dempet">· fastedag</span>
            </span>
          ) : (
            <span className="text-dempet">
              Ingen faste · <span lang="am">ጾም የለም</span>
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}
