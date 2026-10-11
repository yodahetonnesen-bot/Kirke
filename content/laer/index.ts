// Alle lærsidene. Nye temaer legges til her.
import type { Tema } from "./typer";
import { daapen } from "./daapen";

export const TEMAER: Tema[] = [daapen];

export const finnTema = (slug: string) => TEMAER.find((t) => t.slug === slug);
