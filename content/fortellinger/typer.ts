// Bibelfortellinger gjenfortalt med enkle ord på norsk og amharisk.
// Bibelvers skrives som henvisninger ("Gen 1:1", "Luke 2:1-20") og hentes ordrett fra bibeldataene
// når siden bygges. En henvisning som ikke finnes, stopper bygget.
import type { BildeNavn } from "@/lib/bilder";

export type Tekst = { no: string; am: string };

export type Fortelling = {
  slug: string;
  testament: "gt" | "nt";
  /** rekkefølgen i bibelen; fortellingene sorteres etter dette */
  nr: number;
  tittel: Tekst;
  /** hvor fortellingen står, f.eks. "Gen 1:1-31" (første og siste vers må finnes) */
  ref: string;
  /** bilde fra lib/bilder.ts, hvis det finnes et som passer */
  bilde?: BildeNavn;
  /** gjenfortellingen, ett avsnitt per element */
  tekst: Tekst[];
  /** hva kirka lærer av fortellingen */
  laerdom: Tekst;
  /** et kort vers å lære utenat, hentes ordrett */
  minnevers: string;
  sporsmal: { sporsmal: Tekst; svar: Tekst }[];
};
