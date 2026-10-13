// Bønneboka for daglig bruk på ge'ez, amharisk og norsk (oversatt av Fikre Sillassie, 2026).
// Teksten hentes fra PDF-en med scripts/bonner/ og ligger i content/bonner/bonnebok.json.
import bok from "@/content/bonner/bonnebok.json";

export type Tre = { gez: string; am: string; no: string };
export type Bonnedel = {
  id: string;
  tittel: Tre;
  innledning?: Tre;
  /** velsignelsen før ውዳሴ ማርያም (ባርክኒ ወቀድስኒ …) */
  velsignelse?: Tre;
  overskrift?: Tre;
  vers: (Tre & { nr: number })[];
};

export const BONNEBOK = bok as { kilde: { tittel: string; oversatt: string; tid: string }; deler: Bonnedel[] };

export const finnBonnedel = (id: string) => BONNEBOK.deler.find((d) => d.id === id);

/** ውዳሴ ማርያም i ukens rekkefølge, mandag først, med ukedagnummeret fra Date.getDay(). */
export const UKEDAGER = [
  { id: "mandag", dag: 1 },
  { id: "tirsdag", dag: 2 },
  { id: "onsdag", dag: 3 },
  { id: "torsdag", dag: 4 },
  { id: "fredag", dag: 5 },
  { id: "lordag", dag: 6 },
  { id: "sondag", dag: 0 },
] as const;

export const WUDASE = UKEDAGER.map((u) => finnBonnedel(u.id)!);
