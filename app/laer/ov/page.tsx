import type { Metadata } from "next";
import Link from "next/link";
import { TEMAER } from "@/content/laer";
import { BILDER } from "@/lib/bilder";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { Ov, type Bunke } from "@/components/ov";

export const metadata: Metadata = { title: "Øving · ልምምድ" };

// Ordkortene og spørsmålene lages fra lærsidene, så nye temaer kommer med av seg selv.
const BUNKER: Bunke[] = TEMAER.map((t) => ({
  slug: t.slug,
  tittel: t.tittel,
  ord: t.ord.map((o) => ({ id: `${t.slug}:o:${o.ord}`, forside: { am: o.ord }, bakside: o.forklaring })),
  sporsmal: t.sporsmal.map((s) => ({ id: `${t.slug}:s:${s.sporsmal.no}`, forside: s.sporsmal, bakside: s.svar })),
}));

export default function OvSide() {
  return (
    <>
      <Seksjonstopp
        bilde={BILDER.evangelist2}
        tittel="Øving"
        am="ልምምድ"
      >
        <Link href="/laer/" className="mt-6 inline-block text-sm text-dempet hover:text-blekk">
          ← Troslære · <span lang="am">ትምህርተ ሃይማኖት</span>
        </Link>
      </Seksjonstopp>
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-10 sm:px-6">
        <Ov bunker={BUNKER} />
      </div>
    </>
  );
}
