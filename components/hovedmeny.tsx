"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SEKSJONER } from "@/lib/navigasjon";

export function Hovedmeny() {
  const sti = usePathname();
  return (
    <nav aria-label="Hovedmeny" className="hidden items-center gap-1 md:flex">
      {SEKSJONER.map((s) => {
        const aktiv = sti.startsWith(s.href);
        return (
          <Link
            key={s.href}
            href={s.href}
            aria-current={aktiv ? "page" : undefined}
            className={`flex flex-col items-center rounded-lg px-3 py-1.5 leading-tight transition-colors hover:bg-linje/50 ${
              aktiv ? "text-rubrikk" : "text-blekk"
            }`}
          >
            <span className="text-[0.9rem]">{s.no}</span>
            <span lang="am" className="text-[0.7rem] !leading-tight text-dempet">
              {s.am}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export function Mobilmeny() {
  return (
    <details className="group relative md:hidden">
      <summary
        className="grid size-9 cursor-pointer list-none place-items-center rounded-full text-dempet hover:bg-linje/60 [&::-webkit-details-marker]:hidden"
        aria-label="Meny"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
          <path d="M6 6l12 12M18 6 6 18" className="hidden group-open:block" />
        </svg>
      </summary>
      <div className="absolute right-0 top-11 z-50 w-64 rounded-2xl border border-linje bg-flate p-2 shadow-lg">
        {SEKSJONER.map((s) => (
          <a key={s.href} href={s.href} className="flex items-baseline justify-between gap-3 rounded-xl px-3 py-2.5 hover:bg-linje/50">
            <span>{s.no}</span>
            <span lang="am" className="text-sm text-dempet">
              {s.am}
            </span>
          </a>
        ))}
      </div>
    </details>
  );
}
