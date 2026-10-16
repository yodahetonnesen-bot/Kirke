import type { Bilde } from "@/lib/bilder";
import { Kunstbilde } from "./kunstbilde";

/**
 * Toppen av en seksjon: et bredt kunstbilde som glir over i siden, og tittelen på begge språk
 * under (inspirert av «Editorial Image Hero» fra 21st.dev).
 */
export function Seksjonstopp({
  bilde,
  tittel,
  am,
  children,
}: {
  bilde: Bilde;
  tittel: string;
  am: string;
  children?: React.ReactNode;
}) {
  return (
    <header>
      <figure className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
        <Kunstbilde bilde={bilde} prioritet sizes="100vw" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bakgrunn/10 via-bakgrunn/30 to-bakgrunn" />
        <figcaption className="absolute right-4 top-3 rounded-full bg-bakgrunn/80 px-2.5 py-1 text-[0.7rem] text-dempet backdrop-blur sm:right-6">
          {bilde.tittel.no} · <span lang="am">{bilde.tittel.am}</span>
        </figcaption>
      </figure>
      <div className="relative mx-auto -mt-16 max-w-6xl px-4 sm:-mt-20 sm:px-6">
        <h1 className="font-serif text-4xl tracking-tight sm:text-6xl">{tittel}</h1>
        <p lang="am" className="mt-1 text-2xl text-dempet sm:text-3xl">
          {am}
        </p>
        {children}
      </div>
    </header>
  );
}
