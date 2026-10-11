"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

export type Vers = { ref: { no: string; am: string }; href: string; am: string; no: string };

const ingenting = () => () => {};

// Ett vers per dag, det samme for alle på samme dag.
export function DagensVers({ vers }: { vers: Vers[] }) {
  const dag = useSyncExternalStore(
    ingenting,
    () => Math.floor(Date.now() / 86_400_000 - new Date().getTimezoneOffset() / 1440),
    () => null,
  );
  const v = vers[(dag ?? 0) % vers.length];
  return (
    <figure className={dag === null ? "invisible" : ""}>
      <figcaption className="text-sm uppercase tracking-[0.18em] text-dempet">
        Dagens vers · <span lang="am" className="normal-case tracking-normal">የዕለቱ ጥቅስ</span>
      </figcaption>
      <blockquote className="mt-4 grid gap-4 md:grid-cols-2 md:gap-10">
        <p lang="am" className="text-lg text-blekk">{v.am}</p>
        <p className="font-serif text-lg leading-relaxed text-blekk">{v.no}</p>
      </blockquote>
      <Link href={v.href} className="mt-4 inline-block text-sm text-rubrikk hover:underline">
        <span lang="am">{v.ref.am}</span> · {v.ref.no} →
      </Link>
    </figure>
  );
}
