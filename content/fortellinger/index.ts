import { GT } from "./gt";
import { NT } from "./nt";
import type { Fortelling } from "./typer";

export const FORTELLINGER: Fortelling[] = [...GT.toSorted((a, b) => a.nr - b.nr), ...NT.toSorted((a, b) => a.nr - b.nr)];
export const finnFortelling = (slug: string) => FORTELLINGER.find((f) => f.slug === slug);
