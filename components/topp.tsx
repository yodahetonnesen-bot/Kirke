import Link from "next/link";
import { Search } from "lucide-react";
import { Hovedmeny, Mobilmeny } from "./hovedmeny";
import { TemaKnapp } from "./tema-knapp";

export function Topp() {
  return (
    <header className="sticky top-0 z-40 border-b border-linje/70 bg-bakgrunn">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-blekk">
          <img src="/logo.webp" alt="" width={270} height={176} className="h-[3.25rem] w-auto shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-serif text-[0.95rem] tracking-tight sm:text-[1.05rem]">Ortodoks Tewahedo</span>
            <span lang="am" className="text-[0.78rem] !leading-tight text-dempet">
              ኦርቶዶክስ ተዋሕዶ
            </span>
          </span>
        </Link>
        <Hovedmeny />
        <div className="flex items-center gap-1">
          <Link href="/sok/" aria-label="Søk" className="grid size-9 place-items-center rounded-full text-dempet hover:bg-linje/60 hover:text-blekk">
            <Search className="size-[1.1rem]" aria-hidden="true" />
          </Link>
          <TemaKnapp />
          <Mobilmeny />
        </div>
      </div>
    </header>
  );
}
