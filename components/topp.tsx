import Link from "next/link";
import { Kors } from "./kors";
import { Hovedmeny, Mobilmeny } from "./hovedmeny";
import { TemaKnapp } from "./tema-knapp";

export function Topp() {
  return (
    <header className="sticky top-0 z-40 border-b border-linje/70 bg-bakgrunn">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-blekk">
          <Kors className="size-7 text-rubrikk" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[1.05rem] tracking-tight">Troslære</span>
            <span lang="am" className="text-[0.72rem] !leading-tight text-dempet">
              ትምህርተ ሃይማኖት
            </span>
          </span>
        </Link>
        <Hovedmeny />
        <div className="flex items-center gap-1">
          <TemaKnapp />
          <Mobilmeny />
        </div>
      </div>
    </header>
  );
}
