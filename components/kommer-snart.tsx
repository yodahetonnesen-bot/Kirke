import { Clock, type LucideIcon } from "lucide-react";
import type { Seksjon } from "@/lib/navigasjon";
import { BILDER, type BildeNavn } from "@/lib/bilder";
import { Seksjonstopp } from "./seksjonstopp";

// Midlertidig side for deler som ikke er laget ennå. Viser hva som kommer.
export function KommerSnart({
  seksjon,
  bilde,
  punkter,
}: {
  seksjon: Seksjon;
  bilde: BildeNavn;
  punkter: { no: string; am: string; ikon?: LucideIcon }[];
}) {
  const Ikon = seksjon.ikon;
  return (
    <>
      <Seksjonstopp bilde={BILDER[bilde]} tittel={seksjon.no} am={seksjon.am} tekst={seksjon.beskrivelse.no} tekstAm={seksjon.beskrivelse.am}>
        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-linje bg-flate px-3 py-1 text-sm text-dempet">
          <Clock className="size-4" aria-hidden="true" />
          Under arbeid · <span lang="am">በዝግጅት ላይ</span>
        </p>
      </Seksjonstopp>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-linje bg-linje sm:grid-cols-2">
          {punkter.map((p) => {
            const PunktIkon = p.ikon ?? Ikon;
            return (
            <li key={p.no} className="flex gap-4 bg-bakgrunn p-5">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-rubrikk-svak text-rubrikk">
                <PunktIkon className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block">{p.no}</span>
                <span lang="am" className="block text-dempet">
                  {p.am}
                </span>
              </span>
            </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
