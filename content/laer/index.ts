import type { Tema } from "./typer";
import { daapen } from "./daapen";
import { femMysteriene } from "./de-fem-mysteriene";

// Rekkefølgen her er rekkefølgen temaene vises i innenfor hver del.
export const TEMAER: Tema[] = [femMysteriene, daapen];

export const finnTema = (slug: string) => TEMAER.find((t) => t.slug === slug);
