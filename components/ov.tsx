"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { Check, RotateCcw, Shuffle, Undo2 } from "lucide-react";
import { abonnerFremgang, glemFremgang, lesFremgang, settKjent, tolkFremgang } from "@/lib/fremgang";

type Tekst = { no: string; am: string };

export type Kort = {
  id: string;
  /** forsiden: et amharisk ord, eller et spørsmål på begge språk */
  forside: { no?: string; am: string };
  bakside: Tekst;
};

export type Bunke = { slug: string; tittel: Tekst; ord: Kort[]; sporsmal: Kort[] };

type Modus = "ord" | "sporsmal";

const MODUSER: { verdi: Modus; no: string; am: string }[] = [
  { verdi: "ord", no: "Ordkort", am: "የቃላት ካርዶች" },
  { verdi: "sporsmal", no: "Spørsmål", am: "ጥያቄዎች" },
];

function Brikke({ aktiv, onClick, children }: { aktiv: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={aktiv}
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
        aktiv ? "border-blekk bg-blekk text-bakgrunn" : "border-linje text-dempet hover:border-rubrikk/40 hover:text-rubrikk"
      }`}
    >
      {children}
    </button>
  );
}

export function Ov({ bunker }: { bunker: Bunke[] }) {
  const ra = useSyncExternalStore(abonnerFremgang, lesFremgang, () => "[]");
  const kjente = useMemo(() => tolkFremgang(ra), [ra]);

  const [modus, setModus] = useState<Modus>("ord");
  const [tema, setTema] = useState<string>("alle");
  const [rekke, setRekke] = useState<string[] | null>(null);
  const [pos, setPos] = useState(0);
  const [snudd, setSnudd] = useState(false);
  const [kunne, setKunne] = useState<Record<string, boolean>>({});

  const alleKort = useMemo(
    () => bunker.filter((b) => tema === "alle" || b.slug === tema).flatMap((b) => b[modus]),
    [bunker, tema, modus],
  );
  const etterId = useMemo(() => new Map(alleKort.map((k) => [k.id, k])), [alleKort]);
  const ider = rekke ?? alleKort.map((k) => k.id);
  const kort = pos < ider.length ? etterId.get(ider[pos]) : undefined;
  const antallKjente = alleKort.filter((k) => kjente.has(k.id)).length;

  function start(nyRekke: string[] | null) {
    setRekke(nyRekke);
    setPos(0);
    setSnudd(false);
    setKunne({});
  }

  function velgModus(m: Modus) {
    setModus(m);
    start(null);
  }

  function velgTema(t: string) {
    setTema(t);
    start(null);
  }

  function bland() {
    const liste = [...ider];
    for (let i = liste.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [liste[i], liste[j]] = [liste[j], liste[i]];
    }
    start(liste);
  }

  function svar(kan: boolean) {
    if (!kort) return;
    settKjent(kort.id, kan);
    setKunne((s) => ({ ...s, [kort.id]: kan }));
    setSnudd(false);
    setPos((p) => p + 1);
  }

  const ferdig = ider.length > 0 && pos >= ider.length;
  const ukjenteIRunden = ider.filter((id) => kunne[id] === false);
  const kunneIRunden = ider.filter((id) => kunne[id] === true).length;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {MODUSER.map((m) => (
          <Brikke key={m.verdi} aktiv={modus === m.verdi} onClick={() => velgModus(m.verdi)}>
            {m.no} · <span lang="am">{m.am}</span>
          </Brikke>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Velg tema">
        <Brikke aktiv={tema === "alle"} onClick={() => velgTema("alle")}>
          Alle temaer · <span lang="am">ሁሉም</span>
        </Brikke>
        {bunker.map((b) => (
          <Brikke key={b.slug} aktiv={tema === b.slug} onClick={() => velgTema(b.slug)}>
            {b.tittel.no}
          </Brikke>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-dempet">
        <p>
          Du kan {antallKjente} av {alleKort.length} ·{" "}
          <span lang="am">
            ከ{alleKort.length} ውስጥ {antallKjente}ቱን ያውቃሉ
          </span>
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={bland} className="inline-flex items-center gap-1.5 rounded-full border border-linje px-3 py-1.5 hover:text-rubrikk">
            <Shuffle className="size-4" aria-hidden="true" />
            Bland · <span lang="am">ይቀላቅሉ</span>
          </button>
          {antallKjente > 0 && (
            <button
              type="button"
              onClick={() => start(alleKort.filter((k) => !kjente.has(k.id)).map((k) => k.id))}
              className="inline-flex items-center gap-1.5 rounded-full border border-linje px-3 py-1.5 hover:text-rubrikk"
            >
              Bare dem jeg ikke kan · <span lang="am">የማላውቃቸውን ብቻ</span>
            </button>
          )}
        </div>
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-linje" aria-hidden="true">
        <div className="h-full rounded-full bg-rubrikk transition-[width] duration-300" style={{ width: `${ider.length ? (Math.min(pos, ider.length) / ider.length) * 100 : 0}%` }} />
      </div>

      {ider.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-linje bg-flate p-10 text-center">
          <p>Du kan alle kortene her!</p>
          <p lang="am" className="text-dempet">
            እዚህ ያሉትን ካርዶች በሙሉ ያውቃሉ!
          </p>
          <button type="button" onClick={() => start(null)} className="mt-6 text-sm text-rubrikk hover:underline">
            Øv på alle igjen · <span lang="am">ሁሉንም እንደገና ይለማመዱ</span>
          </button>
        </div>
      ) : ferdig ? (
        <div className="mt-6 rounded-3xl border border-linje bg-flate p-8 text-center sm:p-12">
          <p className="font-serif text-3xl">Ferdig!</p>
          <p lang="am" className="text-xl text-dempet">
            ጨርሰዋል!
          </p>
          <p className="mt-4">
            Du kunne {kunneIRunden} av {ider.length} ·{" "}
            <span lang="am">
              ከ{ider.length} ውስጥ {kunneIRunden}ቱን አውቀዋል
            </span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {ukjenteIRunden.length > 0 && (
              <button
                type="button"
                onClick={() => start(ukjenteIRunden)}
                className="inline-flex items-center gap-2 rounded-full bg-blekk px-4 py-2 text-sm text-bakgrunn"
              >
                <Undo2 className="size-4" aria-hidden="true" />
                Øv på dem du ikke kunne · <span lang="am">ያላወቋቸውን ይለማመዱ</span>
              </button>
            )}
            <button type="button" onClick={() => start(null)} className="inline-flex items-center gap-2 rounded-full border border-linje px-4 py-2 text-sm">
              <RotateCcw className="size-4" aria-hidden="true" />
              Begynn på nytt · <span lang="am">እንደገና ይጀምሩ</span>
            </button>
          </div>
        </div>
      ) : (
        kort && (
          <div className="mt-6">
            <p className="text-sm tabular-nums text-svak">
              {pos + 1} / {ider.length}
            </p>
            <button
              type="button"
              onClick={() => setSnudd((s) => !s)}
              aria-label={snudd ? "Vis forsiden · የፊት ገጹን ያሳዩ" : "Snu kortet · ካርዱን ይገልብጡ"}
              className="mt-2 grid min-h-64 w-full rounded-3xl border border-linje bg-flate p-8 text-left transition-colors hover:border-rubrikk/30 sm:p-12"
            >
              <span aria-hidden={snudd} className={`[grid-area:1/1] self-center transition-opacity duration-200 ${snudd ? "invisible opacity-0" : "opacity-100"}`}>
                {kort.forside.no ? (
                  <span className="grid gap-3 md:grid-cols-2 md:gap-12">
                    <span className="text-xl leading-relaxed sm:text-2xl">{kort.forside.no}</span>
                    <span lang="am" className="text-xl text-dempet sm:text-2xl">
                      {kort.forside.am}
                    </span>
                  </span>
                ) : (
                  <span lang="am" className="block text-center font-serif text-4xl text-rubrikk sm:text-5xl">
                    {kort.forside.am}
                  </span>
                )}
                <span className="mt-8 block text-center text-sm text-svak">
                  Trykk for å se svaret · <span lang="am">መልሱን ለማየት ይጫኑ</span>
                </span>
              </span>
              <span aria-hidden={!snudd} className={`[grid-area:1/1] self-center transition-opacity duration-200 ${snudd ? "opacity-100" : "invisible opacity-0"}`}>
                {kort.forside.no ? (
                  <>
                    <span className="mb-5 grid gap-1 border-b border-linje pb-4 text-sm text-svak md:grid-cols-2 md:gap-12">
                      <span>{kort.forside.no}</span>
                      <span lang="am">{kort.forside.am}</span>
                    </span>
                    <span className="grid gap-3 md:grid-cols-2 md:gap-12">
                      <span className="text-lg leading-relaxed">{kort.bakside.no}</span>
                      <span lang="am" className="text-lg text-dempet">
                        {kort.bakside.am}
                      </span>
                    </span>
                  </>
                ) : (
                  <span className="block text-center">
                    <span lang="am" className="block text-2xl text-rubrikk">
                      {kort.forside.am}
                    </span>
                    <span className="mt-4 block font-serif text-2xl sm:text-3xl">{kort.bakside.no}</span>
                    <span lang="am" className="mt-2 block text-lg text-dempet">
                      {kort.bakside.am}
                    </span>
                  </span>
                )}
              </span>
            </button>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {snudd ? (
                <>
                  <button type="button" onClick={() => svar(false)} className="inline-flex items-center gap-2 rounded-full border border-linje px-5 py-2.5 text-sm hover:border-rubrikk/40">
                    <RotateCcw className="size-4" aria-hidden="true" />
                    Øv mer · <span lang="am">እንደገና</span>
                  </button>
                  <button type="button" onClick={() => svar(true)} className="inline-flex items-center gap-2 rounded-full bg-blekk px-5 py-2.5 text-sm text-bakgrunn">
                    <Check className="size-4" aria-hidden="true" />
                    Jeg kunne det · <span lang="am">አውቀዋለሁ</span>
                  </button>
                </>
              ) : (
                <button type="button" onClick={() => setSnudd(true)} className="rounded-full bg-blekk px-5 py-2.5 text-sm text-bakgrunn">
                  Vis svaret · <span lang="am">መልሱን ያሳዩ</span>
                </button>
              )}
            </div>
          </div>
        )
      )}

      {antallKjente > 0 && (
        <p className="mt-10 text-center text-xs text-svak">
          Det du kan, huskes bare i denne nettleseren.{" "}
          <button type="button" onClick={() => glemFremgang(alleKort.map((k) => k.id))} className="underline hover:text-rubrikk">
            Glem det · <span lang="am">ይሰርዙት</span>
          </button>
        </p>
      )}
    </div>
  );
}
