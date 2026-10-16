"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Check, Eye, EyeOff, RotateCcw } from "lucide-react";
import { abonnerFremgang, glemFremgang, lesFremgang, settKjent, tolkFremgang } from "@/lib/fremgang";

export type Minnevers = {
  id: string;
  ref: { no: string; am: string };
  href: string;
  am: string;
  no: string;
  fortelling?: { slug: string; tittel: { no: string; am: string } };
};

const tom = () => "[]";

/** Alle minneversene. I øvemodus er teksten skjult til man trykker på kortet. */
export function MinneversListe({ vers }: { vers: Minnevers[] }) {
  const kjente = tolkFremgang(useSyncExternalStore(abonnerFremgang, lesFremgang, tom));
  const [ov, setOv] = useState(false);
  const [vist, setVist] = useState<Set<string>>(new Set());
  const [bareNye, setBareNye] = useState(false);
  const ider = vers.map((v) => `minnevers:${v.id}`);
  const antallKjent = ider.filter((id) => kjente.has(id)).length;
  const synlige = vers.filter((v) => !bareNye || !kjente.has(`minnevers:${v.id}`));

  const knapp = (aktiv: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
      aktiv ? "border-blekk bg-blekk text-bakgrunn" : "border-linje hover:border-rubrikk/40"
    }`;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className={knapp(ov)} onClick={() => { setOv(!ov); setVist(new Set()); }}>
          {ov ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
          Øv · <span lang="am">ልምምድ</span>
        </button>
        <button type="button" className={knapp(bareNye)} onClick={() => setBareNye(!bareNye)}>
          Ikke lært ennå · <span lang="am">ያልተጠኑ</span>
        </button>
        <span className="ml-auto text-sm text-dempet tabular-nums">
          {antallKjent} / {vers.length} · <span lang="am">ተጠንተዋል</span>
        </span>
        {antallKjent > 0 && (
          <button type="button" onClick={() => glemFremgang(ider)} className="inline-flex items-center gap-1 text-sm text-svak hover:text-rubrikk">
            <RotateCcw className="size-3.5" aria-hidden="true" /> Nullstill · <span lang="am">እንደገና</span>
          </button>
        )}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-linje/60">
        <div className="h-full rounded-full bg-rubrikk transition-all" style={{ width: `${(antallKjent / Math.max(1, vers.length)) * 100}%` }} />
      </div>

      <ul className="mt-8 grid gap-4">
        {synlige.map((v) => {
          const id = `minnevers:${v.id}`;
          const kjent = kjente.has(id);
          const skjult = ov && !vist.has(v.id);
          return (
            <li key={v.id} className={`rounded-2xl border p-5 sm:p-6 ${kjent ? "border-rubrikk/30 bg-rubrikk-svak/40" : "border-linje bg-flate/60"}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <Link href={v.href} className="font-serif text-lg hover:text-rubrikk">
                  {v.ref.no} · <span lang="am">{v.ref.am}</span>
                </Link>
                {v.fortelling && (
                  <Link href={`/bibelen/fortellinger/${v.fortelling.slug}/`} className="text-sm text-dempet hover:text-rubrikk">
                    {v.fortelling.tittel.no} · <span lang="am">{v.fortelling.tittel.am}</span>
                  </Link>
                )}
              </div>
              {skjult ? (
                <button
                  type="button"
                  onClick={() => setVist(new Set(vist).add(v.id))}
                  className="mt-4 w-full rounded-xl border border-dashed border-linje py-6 text-sm text-dempet hover:border-rubrikk/40 hover:text-rubrikk"
                >
                  Si verset, og trykk for å se · <span lang="am">ጥቅሱን ይበሉና ለማየት ይጫኑ</span>
                </button>
              ) : (
                <div className="mt-4 grid gap-3 md:grid-cols-2 md:gap-10">
                  <p lang="am" className="text-lg text-blekk">
                    {v.am}
                  </p>
                  <p className="font-serif text-lg leading-relaxed text-blekk">{v.no}</p>
                </div>
              )}
              <button
                type="button"
                onClick={() => settKjent(id, !kjent)}
                aria-pressed={kjent}
                className={`mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm ${
                  kjent ? "border-rubrikk/40 text-rubrikk" : "border-linje text-dempet hover:text-blekk"
                }`}
              >
                <Check className="size-3.5" aria-hidden="true" />
                {kjent ? "Kan det" : "Jeg kan det"} · <span lang="am">{kjent ? "ተጠንቷል" : "አውቀዋለሁ"}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
