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

// Rekkefølgen her er rekkefølgen temaene vises i innenfor hver del.
export const TEMAER: Tema[] = [femMysteriene, treenigheten, menneskevordelsen, oppstandelsen, sakramentene, daapen, myron, nattverden, kirkebygget];

export const finnTema = (slug: string) => TEMAER.find((t) => t.slug === slug);
