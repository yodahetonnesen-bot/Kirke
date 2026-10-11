import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BILDER, type BildeNavn } from "@/lib/bilder";
import { Kunstbilde } from "./kunstbilde";

// Bildene fra evangelieboka, med stedet i bibelen der fortellingen står.
const SCENER: { bilde: BildeNavn; ref: { no: string; am: string }; href: string }[] = [
  { bilde: "bebudelsen", ref: { no: "Luk 1,26–38", am: "ሉቃ 1፥26–38" }, href: "/bibelen/lukas/1/#v26" },
  { bilde: "fodselen", ref: { no: "Luk 2,1–20", am: "ሉቃ 2፥1–20" }, href: "/bibelen/lukas/2/" },
  { bilde: "daapen", ref: { no: "Matt 3,13–17", am: "ማቴ 3፥13–17" }, href: "/bibelen/matteus/3/#v13" },
  { bilde: "kana", ref: { no: "Joh 2,1–11", am: "ዮሐ 2፥1–11" }, href: "/bibelen/johannes/2/" },
  { bilde: "forklarelsen", ref: { no: "Matt 17,1–9", am: "ማቴ 17፥1–9" }, href: "/bibelen/matteus/17/" },
  { bilde: "inntoget", ref: { no: "Matt 21,1–11", am: "ማቴ 21፥1–11" }, href: "/bibelen/matteus/21/" },
  { bilde: "korsfestelsen", ref: { no: "Joh 19,17–30", am: "ዮሐ 19፥17–30" }, href: "/bibelen/johannes/19/#v17" },
  { bilde: "gravleggelsen", ref: { no: "Joh 19,38–42", am: "ዮሐ 19፥38–42" }, href: "/bibelen/johannes/19/#v38" },
  { bilde: "graven", ref: { no: "Mark 16,1–8", am: "ማር 16፥1–8" }, href: "/bibelen/markus/16/" },
];

export function Scenegalleri() {
  return (
    <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6 [scrollbar-width:thin]">
      {SCENER.map((s) => {
        const b = BILDER[s.bilde];
        return (
          <li key={s.bilde} className="w-[15rem] shrink-0 snap-start sm:w-[17rem]">
            <Link href={s.href} className="group block">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-linje/40 ring-1 ring-blekk/5">
                <Kunstbilde
                  bilde={b}
                  sizes="17rem"
                  className="size-full scale-[1.12] object-cover object-[50%_42%] transition-transform duration-500 group-hover:scale-[1.18]"
                />
              </div>
              <p className="mt-3 flex items-start justify-between gap-2">
                <span>
                  <span className="block font-serif text-lg leading-snug group-hover:text-rubrikk">{b.tittel.no}</span>
                  <span lang="am" className="block text-dempet">
                    {b.tittel.am}
                  </span>
                </span>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-svak group-hover:text-rubrikk" aria-hidden="true" />
              </p>
              <p className="mt-1 text-sm text-svak">
                {s.ref.no} · <span lang="am">{s.ref.am}</span>
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
