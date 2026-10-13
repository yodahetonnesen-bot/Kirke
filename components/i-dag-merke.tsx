"use client";

import { useSyncExternalStore } from "react";

const ingenting = () => () => {};

/** Viser «I dag» når ukedagen (Date.getDay()) er i dag. Tegnes bare i nettleseren. */
export function IDagMerke({ ukedag }: { ukedag: number }) {
  const idag = useSyncExternalStore(ingenting, () => new Date().getDay(), () => -1);
  if (idag !== ukedag) return null;
  return (
    <span className="rounded-full bg-rubrikk px-2 py-0.5 text-xs text-bakgrunn">
      I dag · <span lang="am">ዛሬ</span>
    </span>
  );
}
