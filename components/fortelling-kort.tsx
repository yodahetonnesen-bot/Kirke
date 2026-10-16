import Link from "next/link";
import type { Fortelling } from "@/content/fortellinger/typer";
import { BILDER } from "@/lib/bilder";
import { Kunstbilde } from "./kunstbilde";

/** Kort som lenker til en bibelfortelling. */
export function FortellingKort({ f }: { f: Fortelling }) {
  return (
    <Link href={`/bibelen/fortellinger/${f.slug}/`} className="group flex h-full items-center gap-4 rounded-2xl border border-linje bg-flate p-3 pr-5">
      <div className="size-16 shrink-0 overflow-hidden rounded-xl bg-linje/40">
        <Kunstbilde
          bilde={BILDER[f.bilde ?? "evangeliebokTekst"]}
          sizes="4rem"
          className="size-full scale-110 object-cover transition-transform duration-500 group-hover:scale-125"
        />
      </div>
      <div className="min-w-0">
        <h3 className="font-serif text-lg leading-snug group-hover:text-rubrikk">{f.tittel.no}</h3>
        <p lang="am" className="text-dempet">
          {f.tittel.am}
        </p>
      </div>
    </Link>
  );
}
