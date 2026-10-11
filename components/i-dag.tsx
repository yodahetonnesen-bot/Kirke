"use client";

import { useSyncExternalStore } from "react";
import { MANEDER, UKEDAGER_AM, evangelistar, geezTall, tilEtiopisk } from "@/lib/etiopisk-dato";

// Datoen regnes ut i nettleseren, så den alltid er riktig (siden bygges bare av og til).
const ingenting = () => () => {};

export function IDag() {
  const iDag = useSyncExternalStore(
    ingenting,
    () => new Date().toDateString(),
    () => null,
  );
  if (!iDag) return <div className="h-[7.5rem]" aria-hidden="true" />;

  const naa = new Date(iDag);
  const et = tilEtiopisk(naa);
  const maned = MANEDER[et.maned - 1];
  const ar = evangelistar(et.aar);
  const norsk = naa.toLocaleDateString("nb-NO", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-dempet">
        I dag · <span lang="am" className="normal-case tracking-normal">ዛሬ</span>
      </p>
      <p lang="am" className="mt-3 font-serif text-3xl text-blekk sm:text-4xl">
        {UKEDAGER_AM[naa.getDay()]}፣ {maned.am} {et.dag} ቀን {et.aar} ዓ.ም.
      </p>
      <p className="mt-1 text-dempet">
        {norsk.charAt(0).toUpperCase() + norsk.slice(1)} · {et.dag}. {maned.no} {et.aar}
      </p>
      <p className="mt-1 text-sm text-svak">
        <span lang="am">{ar.am}</span> · {ar.no} · <span lang="am">{geezTall(et.aar)}</span>
      </p>
    </div>
  );
}
