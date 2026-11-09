"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Music, Pencil, X } from "lucide-react";
import { normaliser } from "@/lib/sok";

type Ukas = { nr?: number; tittel: string; linjer: string[]; satt: string };
type Kort = { nr: number; tittel: string; forste: string };

const API = "/api/ukas-mezmur";

/** Finner mezmuren i boka som en innlimt tekst begynner med (tittel eller første linje). */
function finnIBoka(tekst: string, mezmurer: Kort[]) {
  const forste = normaliser(tekst.split("\n").find((l) => l.trim()) ?? "");
  if (!forste) return undefined;
  return mezmurer.find((m) => normaliser(m.tittel) === forste || normaliser(m.forste) === forste);
}

function dato(iso: string) {
  return new Date(iso).toLocaleDateString("nb-NO", { day: "numeric", month: "long" });
}

/** Ukas mezmur: vises for alle, og hvem som helst kan lime inn en ny. */
export function UkasMezmur({ mezmurer }: { mezmurer: Kort[] }) {
  const [naa, setNaa] = useState<Ukas | null>(null);
  const [kodeKreves, setKodeKreves] = useState(false);
  const [status, setStatus] = useState<"laster" | "ok" | "utilgjengelig">("laster");
  const [redigerer, setRedigerer] = useState(false);
  const [tekst, setTekst] = useState("");
  const [nr, setNr] = useState("");
  const [kode, setKode] = useState("");
  const [feil, setFeil] = useState("");
  const [lagrer, setLagrer] = useState(false);

  useEffect(() => {
    fetch(API, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        setNaa(d.naa);
        setKodeKreves(d.kodeKreves);
        setStatus("ok");
      })
      .catch(() => setStatus("utilgjengelig"));
  }, []);

  async function lagre() {
    setFeil("");
    let sendTekst = tekst.trim();
    let sendNr: number | undefined;
    let tittel: string | undefined;
    if (/^\d+$/.test(nr.trim())) {
      const m = mezmurer.find((x) => x.nr === Number(nr.trim()));
      if (!m) return setFeil("Fant ikke det nummeret i mezmurboka · ቁጥሩ አልተገኘም");
      const alle = (await fetch("/mezmur/tekster.json").then((r) => r.json())) as [number, string][];
      sendTekst = alle.find(([n]) => n === m.nr)?.[1] ?? m.forste;
      sendNr = m.nr;
      tittel = m.tittel;
    } else {
      const m = finnIBoka(sendTekst, mezmurer);
      if (m) {
        sendNr = m.nr;
        tittel = m.tittel;
      }
    }
    if (!sendTekst) return setFeil("Lim inn mezmuren eller skriv nummeret · መዝሙሩን ያስገቡ");
    setLagrer(true);
    try {
      const r = await fetch(API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tekst: sendTekst, nr: sendNr, tittel, kode: kode || undefined }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.feil ?? "Kunne ikke lagre");
      setNaa(d.naa);
      setRedigerer(false);
      setTekst("");
      setNr("");
    } catch (e) {
      setFeil(e instanceof Error ? e.message : "Kunne ikke lagre");
    } finally {
      setLagrer(false);
    }
  }

  if (status === "utilgjengelig") return null;

  return (
    <section id="ukas" className="scroll-mt-24 rounded-3xl border border-rubrikk/25 bg-rubrikk-svak/40 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h2 className="flex flex-wrap items-baseline gap-x-3">
          <Music className="size-5 self-center text-rubrikk" aria-hidden="true" />
          <span className="font-serif text-2xl">Ukas mezmur</span>
          <span lang="am" className="text-lg text-dempet">
            የሳምንቱ መዝሙር
          </span>
        </h2>
        {status === "ok" && (
          <button
            type="button"
            onClick={() => setRedigerer(!redigerer)}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-linje bg-bakgrunn px-3 py-1.5 text-sm hover:border-rubrikk/40"
          >
            {redigerer ? <X className="size-4" aria-hidden="true" /> : <Pencil className="size-4" aria-hidden="true" />}
            {redigerer ? "Avbryt" : "Bytt"} · <span lang="am">{redigerer ? "ተወው" : "ቀይር"}</span>
          </button>
        )}
      </div>

      {status === "laster" && <p className="mt-4 h-16 text-svak">…</p>}

      {redigerer ? (
        <div className="mt-5 grid gap-3">
          <label className="grid gap-1 text-sm">
            <span className="text-dempet">
              Nummer i mezmurboka · <span lang="am">በመዝሙር ደብተሩ ያለው ቁጥር</span>
            </span>
            <input
              value={nr}
              onChange={(e) => setNr(e.target.value)}
              inputMode="numeric"
              placeholder="80"
              className="w-32 rounded-xl border border-linje bg-bakgrunn px-3 py-2 outline-none focus:border-rubrikk/60"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-dempet">
              … eller lim inn hele mezmuren · <span lang="am">ወይም መዝሙሩን ይለጥፉ</span>
            </span>
            <textarea
              lang="am"
              value={tekst}
              onChange={(e) => setTekst(e.target.value)}
              rows={8}
              className="rounded-xl border border-linje bg-bakgrunn px-3 py-2 text-base outline-none focus:border-rubrikk/60"
            />
          </label>
          {kodeKreves && (
            <label className="grid gap-1 text-sm">
              <span className="text-dempet">
                Kode · <span lang="am">ኮድ</span>
              </span>
              <input
                value={kode}
                onChange={(e) => setKode(e.target.value)}
                type="password"
                className="w-48 rounded-xl border border-linje bg-bakgrunn px-3 py-2 outline-none focus:border-rubrikk/60"
              />
            </label>
          )}
          {feil && <p className="text-sm text-rubrikk">{feil}</p>}
          <div>
            <button
              type="button"
              disabled={lagrer}
              onClick={lagre}
              className="rounded-full bg-blekk px-5 py-2.5 text-bakgrunn disabled:opacity-60"
            >
              {lagrer ? "Lagrer …" : "Lagre for alle"} · <span lang="am">አስቀምጥ</span>
            </button>
          </div>
        </div>
      ) : naa ? (
        <div className="mt-5">
          <p lang="am" className="font-serif text-2xl">
            {naa.nr && <span className="mr-3 text-lg tabular-nums text-svak">{naa.nr}</span>}
            {naa.tittel}
          </p>
          <div lang="am" className="mt-4 grid gap-0.5 text-lg leading-relaxed">
            {naa.linjer.map((l, i) =>
              l ? (
                <span key={i} className={/^አዝ/.test(l) ? "pl-8 text-rubrikk" : ""}>
                  {l}
                </span>
              ) : (
                <span key={i} className="h-4" />
              ),
            )}
          </div>
          <p className="mt-4 flex flex-wrap gap-x-4 text-sm text-svak">
            <span>Satt {dato(naa.satt)}</span>
            {naa.nr && (
              <Link href={`/mezmur/${naa.nr}/`} className="text-rubrikk hover:underline">
                Åpne i mezmurboka · <span lang="am">በመዝሙር ደብተሩ</span> →
              </Link>
            )}
          </p>
        </div>
      ) : (
        status === "ok" && (
          <p className="mt-4 text-dempet">
            Ingen mezmur er satt ennå · <span lang="am">እስካሁን አልተመረጠም</span>
          </p>
        )
      )}
    </section>
  );
}
