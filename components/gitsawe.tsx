"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

type Lesning = { no?: string; am?: string; href?: string; gez?: string };
type Tjeneste = Partial<Record<"paulus" | "apostel" | "gjerninger" | "salme" | "evangelium", Lesning[]>> & { anafora?: string };
type Dag = { minne?: string; morgen?: Tjeneste; kidase?: Tjeneste; kveld?: Tjeneste };

// Lastes én gang, første gang noen åpner en dag i kalenderen (public/gitsawe.json, lages av scripts/lag_gitsawe.mjs).
let data: Promise<Record<string, Dag>> | null = null;
const hent = () => (data ??= fetch("/gitsawe.json").then((r) => r.json()));

const LESNINGER = [
  { id: "paulus", no: "Paulus", am: "ጳውሎስ" },
  { id: "apostel", no: "Apostelbrevet", am: "ሐዋርያ" },
  { id: "gjerninger", no: "Apostlenes gjerninger", am: "ግብረ ሐዋርያት" },
  { id: "salme", no: "Salme", am: "ምስባክ" },
  { id: "evangelium", no: "Evangeliet", am: "ወንጌል" },
] as const;

const TJENESTER = [
  { id: "kidase", no: "I ቅዳሴ", am: "ዘቅዳሴ" },
  { id: "morgen", no: "Morgen", am: "ዘነግህ" },
  { id: "kveld", no: "Kveld", am: "ዘሠርክ" },
] as const;

function Lesninger({ t, utenSalme = false }: { t: Tjeneste; utenSalme?: boolean }) {
  return (
    <dl className="mt-2 grid gap-2.5 text-sm">
      {LESNINGER.filter((l) => t[l.id]?.length && !(utenSalme && l.id === "salme")).map((l) => (
        <div key={l.id}>
          <dt className="text-xs text-svak">
            {l.no} · <span lang="am">{l.am}</span>
          </dt>
          <dd className="flex flex-wrap gap-x-4 gap-y-1">
            {t[l.id]!.map((x, i) =>
              x.href ? (
                <Link key={i} href={x.href} className="inline-flex items-center gap-1 whitespace-nowrap text-rubrikk hover:underline">
                  <BookOpen className="size-3.5" aria-hidden="true" />
                  {x.no} · <span lang="am">{x.am}</span>
                </Link>
              ) : (
                <span key={i} lang="gez" className="text-dempet">
                  {x.gez}
                </span>
              ),
            )}
          </dd>
        </div>
      ))}
      {t.anafora && (
        <div>
          <dt className="text-xs text-svak">
            Anafora · <span lang="am">ቅዳሴ</span>
          </dt>
          <dd lang="gez">{t.anafora}</dd>
        </div>
      )}
    </dl>
  );
}

/** ግጻዌ: lesningene for en dag i kirkeåret, etter etiopisk måned og dag. */
export function Gitsawe({ maned, dag }: { maned: number; dag: number }) {
  const [alle, setAlle] = useState<Record<string, Dag> | null>(null);
  const [feil, setFeil] = useState(false);
  useEffect(() => {
    hent().then(setAlle, () => setFeil(true));
  }, []);

  const d = alle?.[`${maned}-${dag}`];
  return (
    <div className="mt-6 border-t border-linje pt-5">
      <p className="text-xs uppercase tracking-[0.16em] text-svak">
        Dagens lesninger · <span lang="am" className="normal-case tracking-normal">ንባባት</span>
      </p>
      {feil && <p className="mt-2 text-sm text-dempet">Lesningene kunne ikke lastes · <span lang="am">ንባቦቹ አልተጫኑም</span></p>}
      {!alle && !feil && <p className="mt-2 h-24 text-sm text-svak">…</p>}
      {d && (
        <>
          {d.minne && (
            <p lang="gez" className="mt-2 text-sm">
              {d.minne}
            </p>
          )}
          {TJENESTER.filter((t) => d[t.id]).map((t, i) =>
            i === 0 ? (
              <div key={t.id} className="mt-3">
                <p className="text-sm font-medium">
                  {t.no} · <span lang="am">{t.am}</span>
                </p>
                <Lesninger t={d[t.id]!} utenSalme={t.id === "kidase"} />
              </div>
            ) : (
              <details key={t.id} className="group mt-3">
                <summary className="cursor-pointer list-none text-sm font-medium hover:text-rubrikk [&::-webkit-details-marker]:hidden">
                  <span className="inline-block w-3 text-svak group-open:rotate-90">›</span> {t.no} · <span lang="am">{t.am}</span>
                </summary>
                <Lesninger t={d[t.id]!} />
              </details>
            ),
          )}
          <p className="mt-4 text-xs text-svak">
            Etter den faste ግጻዌ for dagen i måneden. På søndager og flyttbare høytider kan lesningene være andre. Kilde:{" "}
            <a href="https://natinael96.github.io/EOTCDevAPI/" target="_blank" rel="noreferrer" className="hover:text-rubrikk hover:underline">
              EOTCDev API
            </a>
            .
          </p>
        </>
      )}
    </div>
  );
}
