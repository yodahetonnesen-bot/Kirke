// Formatet for lærsidene. All tekst står på norsk og amharisk.
// Bibelvers skrives som henvisninger ("John 3:5", "Matt 28:19-20") og hentes ordrett fra
// bibeldataene når siden bygges. En henvisning som ikke finnes, stopper bygget.
import type { BildeNavn } from "@/lib/bilder";

export type Tekst = { no: string; am: string };

export type Punkt = {
  tekst: Tekst;
  /** bibelvers som underbygger punktet */
  vers?: string[];
  /** henvisninger til bøker utenfor de 66 (f.eks. ኩፋሌ), vises som tekst */
  andre?: Tekst[];
};

export type Avsnitt = {
  id: string;
  tittel: Tekst;
  ingress?: Tekst;
  punkter: Punkt[];
};

export type Kilde = { navn: string; url?: string };

export type Tema = {
  slug: string;
  /** hvilken del av innholdsplanen temaet hører til */
  del: string;
  tittel: Tekst;
  undertittel: Tekst;
  bilde: BildeNavn;
  ingress: Tekst;
  /** det viktigste verset, vises stort øverst */
  hovedvers: string;
  avsnitt: Avsnitt[];
  ord: { ord: string; forklaring: Tekst }[];
  sporsmal: { sporsmal: Tekst; svar: Tekst }[];
  kilder: Kilde[];
  /** true til en prest eller søndagsskolelærer har lest gjennom */
  utkast: boolean;
};
