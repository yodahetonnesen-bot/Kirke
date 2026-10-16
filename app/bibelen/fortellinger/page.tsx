import type { Metadata } from "next";
import Link from "next/link";
import { FORTELLINGER } from "@/content/fortellinger";
import { BILDER } from "@/lib/bilder";
import { Seksjonstopp } from "@/components/seksjonstopp";
import { FortellingKort } from "@/components/fortelling-kort";

export const metadata: Metadata = { title: "Bibelfortellinger · የመጽሐፍ ቅዱስ ታሪኮች" };

const GRUPPER = [
  { id: "gt", no: "Det gamle testamentet", am: "ብሉይ ኪዳን" },
  { id: "nt", no: "Det nye testamentet", am: "ሐዲስ ኪዳን" },
] as const;

export default function Fortellinger() {
  return (
    <>
      <Seksjonstopp bilde={BILDER.fodselen} tittel="Bibelfortellinger" am="የመጽሐፍ ቅዱስ ታሪኮች">
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-dempet">
          <Link href="/bibelen/" className="hover:text-blekk">
            ← Bibelen · <span lang="am">መጽሐፍ ቅዱስ</span>
          </Link>
          <Link href="/bibelen/minnevers/" className="hover:text-blekk">
            Minnevers · <span lang="am">የሚጠኑ ጥቅሶች</span> →
          </Link>
        </nav>
      </Seksjonstopp>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        {GRUPPER.map((g) => (
          <section key={g.id} id={g.id} className="mt-14 scroll-mt-24">
            <h2 className="flex flex-wrap items-baseline gap-x-3 border-b border-linje pb-3">
              <span className="font-serif text-2xl">{g.no}</span>
              <span lang="am" className="text-lg text-dempet">
                {g.am}
              </span>
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {FORTELLINGER.filter((f) => f.testament === g.id).map((f) => (
                <li key={f.slug}>
                  <FortellingKort f={f} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
