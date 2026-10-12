import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tema } from "@/content/laer/typer";
import { BILDER } from "@/lib/bilder";
import { Kunstbilde } from "./kunstbilde";

/** Kort som lenker til en lærside: bilde, tittel på begge språk og undertittel. */
export function TemaKort({ tema }: { tema: Tema }) {
  return (
    <Link href={`/laer/${tema.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-linje bg-flate">
      <div className="aspect-[16/9] overflow-hidden">
        <Kunstbilde
          bilde={BILDER[tema.bilde]}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="size-full scale-110 object-cover object-[50%_45%] transition-transform duration-500 group-hover:scale-[1.16]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl group-hover:text-rubrikk">{tema.tittel.no}</h3>
        <p lang="am" className="text-lg text-dempet">
          {tema.tittel.am}
        </p>
        <p className="mt-2 text-sm text-dempet">
          {tema.undertittel.no} · <span lang="am">{tema.undertittel.am}</span>
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm text-rubrikk">
          Les · <span lang="am">ያንብቡ</span> <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
