import type { Tema } from "./typer";
import { daapen } from "./daapen";
import { femMysteriene } from "./de-fem-mysteriene";
import { treenigheten } from "./treenigheten";

// Rekkefølgen her er rekkefølgen temaene vises i innenfor hver del.
export const TEMAER: Tema[] = [femMysteriene, treenigheten, daapen];

export const finnTema = (slug: string) => TEMAER.find((t) => t.slug === slug);
