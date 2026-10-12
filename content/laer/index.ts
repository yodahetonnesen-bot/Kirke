import type { Tema } from "./typer";
import { daapen } from "./daapen";
import { femMysteriene } from "./de-fem-mysteriene";
import { treenigheten } from "./treenigheten";
import { menneskevordelsen } from "./menneskevordelsen";
import { oppstandelsen } from "./oppstandelsen";
import { kirkebygget } from "./kirkebygget";
import { sakramentene } from "./sakramentene";
import { myron } from "./myron";
import { nattverden } from "./nattverden";
import { skriftemaal } from "./skriftemaal";
import { sykesalving } from "./sykesalving";
import { ekteskap } from "./ekteskap";
import { prestevigsel } from "./prestevigsel";

// Rekkefølgen her er rekkefølgen temaene vises i innenfor hver del.
export const TEMAER: Tema[] = [femMysteriene, treenigheten, menneskevordelsen, oppstandelsen, sakramentene, daapen, myron, nattverden, skriftemaal, sykesalving, ekteskap, prestevigsel, kirkebygget];

export const finnTema = (slug: string) => TEMAER.find((t) => t.slug === slug);
