import type { Metadata } from "next";
import { KommerSnart } from "@/components/kommer-snart";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SEKSJONER } from "@/lib/navigasjon";
import { TEMAER } from "@/content/laer";
import { BILDER } from "@/lib/bilder";
import { Kunstbilde } from "@/components/kunstbilde";
import {
  BookOpen, CalendarHeart, Church, Droplets, Flame, Landmark, Languages, Library, MapPin, Music, Sparkles, Users, Wheat,
} from "lucide-react";

export const metadata: Metadata = { title: "Lær troen · ትምህርተ ሃይማኖት" };

export default function Laer() {
  return (
    <KommerSnart
      seksjon={SEKSJONER.find((s) => s.href === "/laer/")!}
      bilde="ewostatewos"
      foran={
        <section className="mb-14">
          <h2 className="text-sm uppercase tracking-[0.18em] text-dempet">
            Klar til å leses · <span lang="am" className="normal-case tracking-normal">ለንባብ የተዘጋጁ</span>
          </h2>
          <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEMAER.map((t) => (
              <li key={t.slug}>
                <Link href={`/laer/${t.slug}/`} className="group block overflow-hidden rounded-2xl border border-linje bg-flate">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Kunstbilde
                      bilde={BILDER[t.bilde]}
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="size-full scale-110 object-cover object-[50%_45%] transition-transform duration-500 group-hover:scale-[1.16]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-2xl group-hover:text-rubrikk">{t.tittel.no}</h3>
                      <span lang="am" className="text-lg text-dempet">{t.tittel.am}</span>
                    </div>
                    <p className="mt-1 text-sm text-dempet">
                      {t.undertittel.no} · <span lang="am">{t.undertittel.am}</span>
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-rubrikk">
                      Les · <span lang="am">ያንብቡ</span> <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-14 text-sm uppercase tracking-[0.18em] text-dempet">
            Kommer · <span lang="am" className="normal-case tracking-normal">በቅርቡ</span>
          </h2>
        </section>
      }
      punkter={[
        { ikon: Sparkles, no: "Troen og de fem mysteriene", am: "ሃይማኖትና አዕማደ ምሥጢር" },
        { ikon: Droplets, no: "De sju sakramentene", am: "ሰባቱ ምሥጢራተ ቤተ ክርስቲያን" },
        { ikon: Church, no: "Kirkebygget og hvordan vi oppfører oss i kirka", am: "ሕንጻ ቤተ ክርስቲያንና ሥርዓቱ" },
        { ikon: Flame, no: "ቅዳሴ, ማኅሌት, ሰዓታት og ኪዳን", am: "ቅዳሴ፣ ማኅሌት፣ ሰዓታትና ኪዳን" },
        { ikon: Music, no: "Kirkemusikk, ቅዱስ ያሬድ og kirkeskolen", am: "ዜማ፣ ቅዱስ ያሬድና አብነት ትምህርት ቤት" },
        { ikon: Wheat, no: "Fastene", am: "አጽዋማት" },
        { ikon: CalendarHeart, no: "Høytidene og feiringene", am: "በዓላት" },
        { ikon: Landmark, no: "Kirkehistorie", am: "የቤተ ክርስቲያን ታሪክ" },
        { ikon: Users, no: "Helgener og viktige personer", am: "ቅዱሳንና አባቶች" },
        { ikon: BookOpen, no: "Kristent liv i hverdagen", am: "ክርስቲያናዊ ሕይወት" },
        { ikon: Languages, no: "ፊደል og ge'ez", am: "ፊደልና ግዕዝ" },
        { ikon: MapPin, no: "Å være ortodoks i Norge", am: "በኖርዌይ ኦርቶዶክሳዊ መሆን" },
        { ikon: Library, no: "Kirkens bøker", am: "የቤተ ክርስቲያን መጻሕፍት" },
      ]}
    />
  );
}
