import type { Metadata } from "next";
import Link from "next/link";
import { FORTELLINGER } from "@/content/fortellinger";
import { LISTE } from "@/lib/dagens-vers";
import { BILDER } from "@/lib/bilder";
import { hentVers } from "@/lib/vers";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { MinneversListe, type Minnevers } from "@/components/minnevers";

export const metadata: Metadata = { title: "Minnevers · የሚጠኑ ጥቅሶች" };

function alleMinnevers(): Minnevers[] {
  const sett = new Set<string>();
  const ut: Minnevers[] = [];
  const legg = (ref: string, fortelling?: Minnevers["fortelling"]) => {
    if (sett.has(ref)) return;
    sett.add(ref);
    const v = hentVers(ref);
    ut.push({ id: ref.replace(/\s+/g, "-"), ref: v.ref, href: v.href, am: v.am, no: v.no, fortelling });
  };
  for (const f of FORTELLINGER) legg(f.minnevers, { slug: f.slug, tittel: f.tittel });
  for (const [bok, kap, vers] of LISTE) legg(`${bok} ${kap}:${vers}`);
  return ut;
}

export default function MinneversSide() {
  return (
    <>
      <Seksjonstopp bilde={BILDER.evangelist} tittel="Minnevers" am="የሚጠኑ ጥቅሶች">
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-dempet">
          <Link href="/bibelen/" className="hover:text-blekk">
            ← Bibelen · <span lang="am">መጽሐፍ ቅዱስ</span>
          </Link>
          <Link href="/bibelen/fortellinger/" className="hover:text-blekk">
            Bibelfortellinger · <span lang="am">የመጽሐፍ ቅዱስ ታሪኮች</span> →
          </Link>
        </nav>
      </Seksjonstopp>
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-10 sm:px-6">
        <MinneversListe vers={alleMinnevers()} />
      </div>
    </>
  );
}
