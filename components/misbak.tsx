"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { flyttbarDato } from "@/lib/kirkear";
import type { EtiopiskDato } from "@/lib/etiopisk-dato";

type Oppforing = { gez: string; am: string; no: string; ref: { no: string; am: string }; href: string };
type Data = {
  faste: Record<string, Oppforing>;
  sondager: (Oppforing & { fra: [number, number]; til: [number, number] })[];
  flyttbare: (Oppforing & { dag: number; navn: string })[];
};

// Lastes én gang, første gang noen åpner en dag i kalenderen (public/misbak.json, lages av scripts/lag_misbak.mjs).
let data: Promise<Data> | null = null;
const hent = () => (data ??= fetch("/misbak.json").then((r) => r.json()));

const dagnr = (d: Date) => Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
const plass = ([m, d]: [number, number]) => (m - 1) * 30 + d;

/** Hvilken ምስባክ som gjelder: en flyttbar høytid, søndagen i perioden, eller den faste dagen i måneden. */
function velg(data: Data, dato: Date, et: EtiopiskDato): { o: Oppforing; hva?: { no: string; am: string } } | null {
  const fraNenewe = dagnr(dato) - dagnr(flyttbarDato(et.aar, "nenewe"));
  const flyttbar = data.flyttbare.find((f) => f.dag === fraNenewe);
  if (flyttbar) return { o: flyttbar, hva: { no: "Høytid", am: flyttbar.navn } };
  if (dato.getDay() === 0) {
    const p = plass([et.maned, et.dag]);
    const sondag = data.sondager.find((s) => {
      const fra = plass(s.fra);
      const til = plass(s.til);
      return fra <= til ? p >= fra && p <= til : p >= fra || p <= til;
    });
    if (sondag) return { o: sondag, hva: { no: "Søndag", am: "ሰንበት" } };
  }
  const fast = data.faste[`${et.maned}-${et.dag}`];
  return fast ? { o: fast } : null;
}

/** Dagens ምስባክ: salmeversene som synges før evangeliet i ቅዳሴ, på ge'ez, amharisk og norsk. */
export function Misbak({ dato, et }: { dato: Date; et: EtiopiskDato }) {
  const [alle, setAlle] = useState<Data | null>(null);
  const [feil, setFeil] = useState(false);
  useEffect(() => {
    hent().then(setAlle, () => setFeil(true));
  }, []);

  const valgt = alle && velg(alle, dato, et);
  return (
    <div className="mt-6 border-t border-linje pt-5">
      <p className="text-xs uppercase tracking-[0.16em] text-svak">
        Dagens ምስባክ · <span lang="am" className="normal-case tracking-normal">ግጻዌ</span>
        {valgt?.hva && (
          <span className="normal-case tracking-normal">
            {" "}
            · {valgt.hva.no} · <span lang="am">{valgt.hva.am}</span>
          </span>
        )}
      </p>
      {feil && <p className="mt-2 text-sm text-dempet">ምስባክ kunne ikke lastes · <span lang="am">ምስባኩ አልተጫነም</span></p>}
      {!alle && !feil && <p className="mt-2 h-24 text-sm text-svak">…</p>}
      {valgt && (
        <>
          <p lang="gez" className="mt-3 whitespace-pre-line font-serif text-lg leading-relaxed text-rubrikk">
            {valgt.o.gez}
          </p>
          <p lang="am" className="mt-3 text-sm">
            {valgt.o.am}
          </p>
          <p className="mt-2 font-serif text-sm leading-relaxed text-dempet">{valgt.o.no}</p>
          <Link href={valgt.o.href} className="mt-3 inline-flex items-center gap-1 text-sm text-rubrikk hover:underline">
            <BookOpen className="size-3.5" aria-hidden="true" />
            {valgt.o.ref.no} · <span lang="am">{valgt.o.ref.am}</span>
          </Link>
          <p className="mt-4 text-xs text-svak">
            Kilde:{" "}
            <a href="https://misbak.org/" target="_blank" rel="noreferrer" className="hover:text-rubrikk hover:underline">
              misbak.org
            </a>
            . Amharisk og norsk tekst fra bibelen på denne siden.
          </p>
        </>
      )}
    </div>
  );
}
