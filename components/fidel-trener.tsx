"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { BOKSTAVER, FORMER, VOKALER, lydTil, tegn } from "@/lib/fidel";
import { geezTall } from "@/lib/etiopisk-dato";

type Modus = "lyd" | "tegn";
type Niva = "grunn" | "alle";
type Oppgave = { bokstav: number; form: number; alternativer: { bokstav: number; form: number }[] };

const tilfeldig = (n: number) => Math.floor(Math.random() * n);

function bland<T>(liste: T[]) {
  const l = [...liste];
  for (let i = l.length - 1; i > 0; i--) {
    const j = tilfeldig(i + 1);
    [l[i], l[j]] = [l[j], l[i]];
  }
  return l;
}

function nyOppgave(niva: Niva): Oppgave {
  const bokstav = tilfeldig(BOKSTAVER.length);
  const form = niva === "grunn" ? 0 : tilfeldig(7);
  const lyd = lydTil(BOKSTAVER[bokstav], form);
  const brukt = new Set([lyd]);
  const alternativer = [{ bokstav, form }];
  // På «alle former» er to av de gale svarene samme bokstav i andre former, så man må se på vokaltegnet.
  const kandidater = bland([
    ...(niva === "alle" ? bland([0, 1, 2, 3, 4, 5, 6].filter((f) => f !== form)).slice(0, 2).map((f) => ({ bokstav, form: f })) : []),
    ...bland(BOKSTAVER.map((_, i) => i)).map((i) => ({ bokstav: i, form })),
  ]);
  for (const k of kandidater) {
    const l = lydTil(BOKSTAVER[k.bokstav], k.form);
    if (brukt.has(l)) continue;
    brukt.add(l);
    alternativer.push(k);
    if (alternativer.length === 4) break;
  }
  return { bokstav, form, alternativer: bland(alternativer) };
}

function Velger<T extends string>({ verdi, valg, onChange }: { verdi: T; valg: { verdi: T; tekst: React.ReactNode }[]; onChange: (v: T) => void }) {
  return (
    <div className="inline-flex rounded-full border border-linje bg-flate p-0.5 text-sm">
      {valg.map((v) => (
        <button
          key={v.verdi}
          type="button"
          aria-pressed={verdi === v.verdi}
          onClick={() => onChange(v.verdi)}
          className={`rounded-full px-3 py-1 transition-colors ${verdi === v.verdi ? "bg-blekk text-bakgrunn" : "text-dempet hover:text-blekk"}`}
        >
          {v.tekst}
        </button>
      ))}
    </div>
  );
}

/** Øvelse: se en bokstav og velg lyden, eller hør lyden og finn bokstaven. */
export function FidelOvelse() {
  const [modus, setModus] = useState<Modus>("lyd");
  const [niva, setNiva] = useState<Niva>("grunn");
  const [oppgave, setOppgave] = useState<Oppgave | null>(null);
  const [svar, setSvar] = useState<number | null>(null);
  const [poeng, setPoeng] = useState({ riktige: 0, totalt: 0, rekke: 0 });

  function neste(n: Niva = niva) {
    setOppgave(nyOppgave(n));
    setSvar(null);
  }

  function velg(i: number) {
    if (!oppgave || svar !== null) return;
    const a = oppgave.alternativer[i];
    const riktig = a.bokstav === oppgave.bokstav && a.form === oppgave.form;
    setSvar(i);
    setPoeng((p) => ({ riktige: p.riktige + (riktig ? 1 : 0), totalt: p.totalt + 1, rekke: riktig ? p.rekke + 1 : 0 }));
  }

  const b = oppgave ? BOKSTAVER[oppgave.bokstav] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Velger
          verdi={modus}
          onChange={(v) => {
            setModus(v);
            setSvar(null);
          }}
          valg={[
            { verdi: "lyd", tekst: <>Hvilken lyd? · <span lang="am">ድምፁ ምንድን ነው?</span></> },
            { verdi: "tegn", tekst: <>Finn bokstaven · <span lang="am">ፊደሉን ያግኙ</span></> },
          ]}
        />
        <Velger
          verdi={niva}
          onChange={(v) => {
            setNiva(v);
            if (oppgave) neste(v);
          }}
          valg={[
            { verdi: "grunn", tekst: <>Grunnformen · <span lang="am">ግዕዝ</span></> },
            { verdi: "alle", tekst: <>Alle sju formene · <span lang="am">ሰባቱም</span></> },
          ]}
        />
      </div>

      <div className="mt-6 rounded-3xl border border-linje bg-flate p-6 text-center sm:p-10">
        {!oppgave || !b ? (
          <button type="button" onClick={() => neste()} className="rounded-full bg-blekk px-6 py-3 text-bakgrunn">
            Start · <span lang="am">ይጀምሩ</span>
          </button>
        ) : (
          <>
            <p className="text-sm text-svak">
              {modus === "lyd" ? (
                <>
                  Hvilken lyd har bokstaven? · <span lang="am">ይህ ፊደል ምን ብሎ ይነበባል?</span>
                </>
              ) : (
                <>
                  Hvilken bokstav sier dette? · <span lang="am">ይህን ድምፅ የሚወክለው የትኛው ፊደል ነው?</span>
                </>
              )}
            </p>
            <p lang={modus === "lyd" ? "am" : undefined} className="mt-4 font-serif text-7xl text-rubrikk sm:text-8xl">
              {modus === "lyd" ? tegn(b, oppgave.form) : lydTil(b, oppgave.form)}
            </p>
            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3">
              {oppgave.alternativer.map((a, i) => {
                const riktig = a.bokstav === oppgave.bokstav && a.form === oppgave.form;
                const vist = svar !== null && (riktig || svar === i);
                return (
                  <button
                    key={`${a.bokstav}-${a.form}`}
                    type="button"
                    onClick={() => velg(i)}
                    disabled={svar !== null}
                    lang={modus === "tegn" ? "am" : undefined}
                    className={`relative rounded-2xl border px-4 py-4 text-2xl transition-colors ${
                      vist ? (riktig ? "border-emerald-600 bg-emerald-600/10" : "border-rubrikk bg-rubrikk-svak") : "border-linje bg-bakgrunn hover:border-rubrikk/40"
                    }`}
                  >
                    {modus === "lyd" ? lydTil(BOKSTAVER[a.bokstav], a.form) : tegn(BOKSTAVER[a.bokstav], a.form)}
                    {vist && (
                      <span className="absolute right-3 top-3" aria-label={riktig ? "riktig" : "feil"}>
                        {riktig ? <Check className="size-4 text-emerald-700" /> : <X className="size-4 text-rubrikk" />}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {svar !== null && (
              <div className="mt-6">
                <p className="text-sm text-dempet">
                  <span lang="am" className="text-lg text-blekk">
                    {tegn(b, oppgave.form)}
                  </span>{" "}
                  = {lydTil(b, oppgave.form)} · <span lang="am">{FORMER[oppgave.form].am}</span> ({FORMER[oppgave.form].nr}. form)
                  {b.hint && <> · {b.hint}</>}
                </p>
                <button type="button" onClick={() => neste()} className="mt-4 rounded-full bg-blekk px-6 py-2.5 text-sm text-bakgrunn">
                  Neste · <span lang="am">ቀጣይ</span> →
                </button>
              </div>
            )}
          </>
        )}
      </div>
      {poeng.totalt > 0 && (
        <p className="mt-3 text-center text-sm text-dempet">
          {poeng.riktige} av {poeng.totalt} riktige · <span lang="am">ከ{poeng.totalt} ውስጥ {poeng.riktige} ትክክል</span>
          {poeng.rekke >= 3 && <span className="text-rubrikk"> · {poeng.rekke} på rad!</span>}
        </p>
      )}
    </div>
  );
}

/** Hele fidel-tabellen. Trykk på en bokstav for å se lyden og formen. */
export function FidelTabell() {
  const [valgt, setValgt] = useState<{ bokstav: number; form: number }>({ bokstav: 1, form: 1 });
  const b = BOKSTAVER[valgt.bokstav];
  const f = FORMER[valgt.form];

  return (
    <div>
      <div className="sticky top-20 z-10 mb-4 flex items-center gap-5 rounded-2xl border border-linje bg-flate/95 p-4 backdrop-blur" aria-live="polite">
        <span lang="am" className="font-serif text-5xl text-rubrikk">
          {tegn(b, valgt.form)}
        </span>
        <span className="text-sm">
          <span className="block text-lg">«{lydTil(b, valgt.form)}»</span>
          <span className="block text-dempet">
            <span lang="am">{f.am}</span> · {f.nr}. form · vokal {f.vokal}: {VOKALER[f.vokal]}
          </span>
          {(b.hint || b.amharisk) && (
            <span className="block text-svak">
              {b.hint}
              {b.hint && b.amharisk && " · "}
              {b.amharisk && "lagt til i amharisk, finnes ikke i ge'ez"}
            </span>
          )}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-1 text-center">
          <thead>
            <tr>
              {FORMER.map((form) => (
                <th key={form.nr} scope="col" className="pb-1 text-xs font-normal text-svak">
                  <span lang="am" className="block">
                    {form.am}
                  </span>
                  {form.vokal}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BOKSTAVER.map((bokstav, i) => (
              <tr key={bokstav.kode}>
                {FORMER.map((_, form) => {
                  const erValgt = valgt.bokstav === i && valgt.form === form;
                  return (
                    <td key={form}>
                      <button
                        type="button"
                        onClick={() => setValgt({ bokstav: i, form })}
                        aria-pressed={erValgt}
                        className={`w-full rounded-lg py-1.5 transition-colors ${
                          erValgt ? "bg-blekk text-bakgrunn" : bokstav.amharisk ? "bg-gull/10 hover:bg-rubrikk-svak" : "hover:bg-rubrikk-svak"
                        }`}
                      >
                        <span lang="am" className="block text-xl sm:text-2xl">
                          {tegn(bokstav, form)}
                        </span>
                        <span className={`block text-[0.65rem] ${erValgt ? "text-bakgrunn/70" : "text-svak"}`}>{lydTil(bokstav, form)}</span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 flex items-center gap-2 text-xs text-dempet">
        <span className="size-3 rounded bg-gull/20" aria-hidden="true" />
        Bokstaver amharisk har lagt til · <span lang="am">አማርኛ የጨመራቸው ፊደላት</span>
      </p>
    </div>
  );
}

/** Ge'ez-tall: skriv et tall og se det med ge'ez-tegn. */
export function GeezTall() {
  const [tall, setTall] = useState(2019);
  const grunn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <div>
      <ul className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        {grunn.map((t) => (
          <li key={t} className="rounded-xl border border-linje/70 py-2 text-center">
            <span lang="am" className="block text-2xl">
              {geezTall(t)}
            </span>
            <span className="text-xs text-svak">{t}</span>
          </li>
        ))}
        <li className="rounded-xl border border-linje/70 py-2 text-center">
          <span lang="am" className="block text-2xl">
            ፼
          </span>
          <span className="text-xs text-svak">10 000</span>
        </li>
      </ul>
      <label className="mt-6 flex flex-wrap items-center gap-4">
        <span className="text-sm text-dempet">
          Skriv et tall · <span lang="am">ቁጥር ይጻፉ</span>
        </span>
        <input
          type="number"
          min={1}
          max={9999}
          value={tall}
          onChange={(e) => setTall(Math.max(0, Math.min(9999, Math.floor(Number(e.target.value) || 0))))}
          className="w-28 rounded-xl border border-linje bg-flate px-3 py-2 tabular-nums"
        />
        <span lang="am" className="font-serif text-4xl text-rubrikk">
          {geezTall(tall) || "–"}
        </span>
      </label>
      <p className="mt-2 text-xs text-svak">
        Ge&apos;ez har ikke null, og tallene skrives uten plassverdi: 2019 = ፳ (20) ፻ (100) ፲ (10) ፱ (9), altså 20 hundre og 19.
      </p>
    </div>
  );
}
