"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { normaliser, skjelett, skjeletter } from "@/lib/sok";

export type MezmurKort = { nr: number; tittel: string; kategori: string; forste: string };

type Forberedt = MezmurKort & { nTittel: string; sTittel: string };

// Hele teksten lastes først når noen søker (app/mezmur/tekster.json).
let tekster: Promise<Map<number, { n: string; s: string }>> | null = null;
const hentTekster = () =>
  (tekster ??= fetch("/mezmur/tekster.json")
    .then((r) => r.json() as Promise<[number, string][]>)
    .then((liste) => new Map(liste.map(([nr, t]) => {
      const n = normaliser(t);
      return [nr, { n: ` ${n} `, s: ` ${skjeletter(n)} ` }];
    }))));

const kortNavn = (k: string) => k.replace(/^መዝሙር ዘ/, "");

/** Alle mezmurene med søk som tåler stavemåter, også med latinske bokstaver («kidist maryam» finner ቅድስት ማርያም). */
export function MezmurListe({ mezmurer, kategorier }: { mezmurer: MezmurKort[]; kategorier: string[] }) {
  const [sporring, setSporring] = useState("");
  const [kategori, setKategori] = useState<string | null>(null);
  const [fulltekst, setFulltekst] = useState<Map<number, { n: string; s: string }> | null>(null);
  const felt = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- leser ?q= og ?k= én gang etter første tegning
    if (p.get("q")) setSporring(p.get("q")!);
    if (p.get("k")) setKategori(p.get("k"));
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (sporring) url.searchParams.set("q", sporring);
    else url.searchParams.delete("q");
    if (kategori) url.searchParams.set("k", kategori);
    else url.searchParams.delete("k");
    window.history.replaceState(null, "", url);
    if (sporring.trim() && !fulltekst) hentTekster().then(setFulltekst);
  }, [sporring, kategori, fulltekst]);

  const forberedt = useMemo<Forberedt[]>(
    () =>
      mezmurer.map((m) => {
        const n = normaliser(m.tittel);
        return { ...m, nTittel: ` ${n} `, sTittel: ` ${skjeletter(n)} ` };
      }),
    [mezmurer],
  );

  const treff = useMemo(() => {
    const utvalg = kategori ? forberedt.filter((m) => m.kategori === kategori) : forberedt;
    const q = sporring.trim();
    if (!q) return utvalg;
    if (/^\d+$/.test(q)) return utvalg.filter((m) => String(m.nr).startsWith(q));
    const ord = normaliser(q)
      .split(" ")
      .filter(Boolean)
      .map((o) => ({ n: o, s: skjelett(o).replace(/ /g, ""), l: skjelett(o, true).replace(/ /g, "") }));
    const passer = (tekst: string, s: string) => (s.length >= 3 ? tekst.includes(` ${s}`) : s.length >= 2 && tekst.includes(` ${s} `));
    const skOk = (tekst: string, o: { s: string; l: string }) => passer(tekst, o.s) || passer(tekst, o.l);
    const poengsatt = utvalg.flatMap((m) => {
      const t = fulltekst?.get(m.nr);
      let poeng = 0;
      for (const o of ord) {
        let p = 0;
        if (m.nTittel.includes(` ${o.n}`)) p = 10;
        else if (m.nTittel.includes(o.n)) p = 8;
        else if (skOk(m.sTittel, o)) p = 6;
        else if (t?.n.includes(` ${o.n}`)) p = 3;
        else if (t && o.n.length >= 3 && t.n.includes(o.n)) p = 2;
        else if (t && skOk(t.s, o)) p = 1;
        // svært korte ord («hale» → «l») gir et for kort skjelett til å søke på; de hoppes over
        if (p === 0 && o.s.length < 2 && o.l.length < 2 && ord.length > 1) continue;
        if (p === 0) return [];
        poeng += p;
      }
      return [{ m, poeng }];
    });
    return poengsatt.sort((a, b) => b.poeng - a.poeng || a.m.nr - b.m.nr).map((x) => x.m);
  }, [forberedt, sporring, kategori, fulltekst]);

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Søk etter mezmur</span>
        <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-dempet" aria-hidden="true" />
        <input
          ref={felt}
          type="search"
          value={sporring}
          onChange={(e) => setSporring(e.target.value)}
          placeholder="ቅድስት ማርያም, kidist maryam, 80 …"
          className="w-full rounded-full border border-linje bg-flate py-4 pl-14 pr-5 text-lg outline-none transition-colors placeholder:text-svak focus:border-rubrikk/60 [&::-webkit-search-cancel-button]:hidden"
          autoComplete="off"
          spellCheck={false}
        />
      </label>

      <div className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        <button
          type="button"
          onClick={() => setKategori(null)}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-sm ${!kategori ? "border-blekk bg-blekk text-bakgrunn" : "border-linje hover:border-rubrikk/40"}`}
        >
          Alle · <span lang="am">ሁሉም</span>
        </button>
        {kategorier.map((k) => (
          <button
            key={k}
            type="button"
            lang="am"
            onClick={() => setKategori(kategori === k ? null : k)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-sm ${kategori === k ? "border-blekk bg-blekk text-bakgrunn" : "border-linje hover:border-rubrikk/40"}`}
          >
            {kortNavn(k)}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-svak" aria-live="polite">
        {treff.length} mezmur · <span lang="am">{treff.length} መዝሙራት</span>
        {sporring.trim() && !fulltekst && " …"}
      </p>

      <ol className="mt-2 divide-y divide-linje/60">
        {treff.slice(0, 300).map((m) => (
          <li key={m.nr}>
            <Link href={`/mezmur/${m.nr}/`} className="group grid grid-cols-[3rem_1fr] gap-x-3 py-3">
              <span className="pt-0.5 text-right text-sm tabular-nums text-svak">{m.nr}</span>
              <span>
                <span lang="am" className="block text-lg group-hover:text-rubrikk">
                  {m.tittel}
                </span>
                <span lang="am" className="block truncate text-sm text-dempet">
                  {m.forste}
                </span>
                {!kategori && (
                  <span lang="am" className="block text-xs text-svak">
                    {kortNavn(m.kategori)}
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ol>
      {treff.length > 300 && (
        <p className="mt-4 text-sm text-dempet">
          Viser de første 300. Søk eller velg en kategori for å finne flere · <span lang="am">ለተጨማሪ ይፈልጉ</span>
        </p>
      )}
    </div>
  );
}
