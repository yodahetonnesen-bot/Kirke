"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Church, Flame, Search, ScrollText } from "lucide-react";
import { finnHenvisning, forbered, sok, type SokIndeks, type SokType } from "@/lib/sok";

const TYPER: Record<SokType, { no: string; am: string; ikon: typeof Search }> = {
  side: { no: "Side", am: "ገጽ", ikon: ArrowRight },
  tema: { no: "Troslære", am: "ትምህርተ ሃይማኖት", ikon: Church },
  avsnitt: { no: "Troslære", am: "ትምህርተ ሃይማኖት", ikon: ScrollText },
  bonn: { no: "Bønner", am: "ጸሎት", ikon: Flame },
  hoytid: { no: "Kalender", am: "ቀን መቁጠሪያ", ikon: CalendarDays },
  bok: { no: "Bibelen", am: "መጽሐፍ ቅዱስ", ikon: BookOpen },
};

function forkort(tekst: string, ord: string[]) {
  const lav = tekst.toLowerCase();
  const pos = Math.max(0, ...ord.map((o) => lav.indexOf(o)).filter((i) => i >= 0).slice(0, 1));
  const start = Math.max(0, pos - 60);
  return (start > 0 ? "… " : "") + tekst.slice(start, start + 220) + (start + 220 < tekst.length ? " …" : "");
}

function Uthevet({ tekst, ord }: { tekst: string; ord: string[] }) {
  const gyldige = ord.filter((o) => o.length >= 2).map((o) => o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (gyldige.length === 0) return <>{tekst}</>;
  const deler = tekst.split(new RegExp(`(${gyldige.join("|")})`, "gi"));
  return (
    <>
      {deler.map((d, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rounded bg-gull/30 px-0.5 text-blekk">
            {d}
          </mark>
        ) : (
          d
        ),
      )}
    </>
  );
}

const erAmharisk = (s: string) => /[ሀ-፿]/.test(s);

/** Søk i lærsidene, bønnene, høytidene og bibelbøkene. Forstår også bibelhenvisninger. */
export function Sok() {
  const [sporring, setSporring] = useState("");
  const [indeks, setIndeks] = useState<SokIndeks | null>(null);
  const [feil, setFeil] = useState(false);
  const felt = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- leser ?q= én gang etter første tegning
    if (q) setSporring(q);
    felt.current?.focus();
    fetch("/sok/indeks.json")
      .then((r) => r.json())
      .then(setIndeks)
      .catch(() => setFeil(true));
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (sporring) url.searchParams.set("q", sporring);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }, [sporring]);

  const forberedt = useMemo(() => (indeks ? forbered(indeks) : null), [indeks]);
  const henvisning = useMemo(() => (indeks ? finnHenvisning(indeks.boker, sporring) : null), [indeks, sporring]);
  // En bibelhenvisning gir ett direkte treff; tallene i den gir ellers bare støy.
  const treff = useMemo(
    () => (forberedt && sporring.trim() && !henvisning ? sok(forberedt, sporring) : []),
    [forberedt, sporring, henvisning],
  );
  const ord = sporring.toLowerCase().split(/\s+/).filter(Boolean);

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Søk</span>
        <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-dempet" aria-hidden="true" />
        <input
          ref={felt}
          type="search"
          value={sporring}
          onChange={(e) => setSporring(e.target.value)}
          placeholder="ጥምቀት, timket, dåp, Joh 3:16 …"
          className="w-full rounded-full border border-linje bg-flate py-4 pl-14 pr-5 text-lg outline-none transition-colors placeholder:text-svak focus:border-rubrikk/60 [&::-webkit-search-cancel-button]:hidden"
          autoComplete="off"
          spellCheck={false}
        />
      </label>

      {feil && <p className="mt-6 text-rubrikk">Søket kunne ikke lastes · <span lang="am">ፍለጋው አልተጫነም</span></p>}
      {!indeks && !feil && sporring && <p className="mt-6 text-dempet">…</p>}

      {henvisning && (
        <Link
          href={`/bibelen/${henvisning.bok.adresse}/${henvisning.kapittel}/${henvisning.vers ? `#v${henvisning.vers}` : ""}`}
          className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-rubrikk/30 bg-rubrikk-svak px-5 py-4 hover:border-rubrikk/60"
        >
          <span>
            <span className="block font-serif text-xl">
              {henvisning.bok.navn.no} {henvisning.kapittel}
              {henvisning.vers ? `,${henvisning.vers}` : ""}
            </span>
            <span lang="am" className="text-dempet">
              {henvisning.bok.navn.am} {henvisning.kapittel}
              {henvisning.vers ? `፥${henvisning.vers}` : ""}
            </span>
          </span>
          <BookOpen className="size-5 text-rubrikk" aria-hidden="true" />
        </Link>
      )}

      {indeks && sporring.trim() && !henvisning && (
        <p className="mt-6 text-sm text-svak" aria-live="polite">
          {treff.length} treff · <span lang="am">{treff.length} ውጤቶች</span>
        </p>
      )}

      <ol className="mt-2 divide-y divide-linje/60">
        {treff.map(({ dok, utdrag }) => {
          const T = TYPER[dok.type];
          const Ikon = T.ikon;
          return (
            <li key={dok.href + dok.tittel.no}>
              <Link href={dok.href} className="group grid grid-cols-[2rem_1fr] gap-x-3 py-4">
                <Ikon className="mt-1.5 size-4 text-rubrikk" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-svak">
                    {T.no}
                    {dok.sti ? ` · ${dok.sti}` : ""}
                  </span>
                  <span className="block font-serif text-lg group-hover:text-rubrikk">
                    <Uthevet tekst={dok.tittel.no} ord={ord} />{" "}
                    <span lang="am" className="text-dempet">
                      · <Uthevet tekst={dok.tittel.am} ord={ord} />
                    </span>
                  </span>
                  {utdrag && (
                    <span lang={erAmharisk(utdrag) ? "am" : undefined} className="mt-1 block text-sm text-dempet">
                      <Uthevet tekst={forkort(utdrag, ord)} ord={ord} />
                    </span>
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
