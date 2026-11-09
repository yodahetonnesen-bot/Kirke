import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { MEZMURER, finnMezmur, video, youtubeSok } from "@/lib/mezmur";

export const dynamicParams = false;

export function generateStaticParams() {
  return MEZMURER.map((m) => ({ nr: String(m.nr) }));
}

export async function generateMetadata({ params }: PageProps<"/mezmur/[nr]">): Promise<Metadata> {
  const m = finnMezmur(Number((await params).nr));
  return { title: m ? `${m.nr}. ${m.tittel}` : "Mezmur" };
}

/** Video-id fra en YouTube-lenke eller en bar id. */
function videoId(v: string) {
  const m = /(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/.exec(v);
  return m ? m[1] : /^[\w-]{11}$/.test(v) ? v : null;
}

export default async function MezmurSide({ params }: PageProps<"/mezmur/[nr]">) {
  const m = finnMezmur(Number((await params).nr));
  if (!m) notFound();
  const i = MEZMURER.indexOf(m);
  const forrige = MEZMURER[i - 1];
  const neste = MEZMURER[i + 1];
  const v = video(m.nr);
  const id = v ? videoId(v) : null;

  // Vers skilles av tomme linjer; «አዝ…» (omkvedet) står innrykket som i boka.
  const vers: string[][] = [[]];
  for (const l of m.linjer) {
    if (l === "") vers.push([]);
    else vers[vers.length - 1].push(l);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="flex flex-wrap items-center gap-x-3 text-sm text-dempet">
        <Link href="/mezmur/" className="hover:text-blekk">
          ← Mezmur · <span lang="am">መዝሙር</span>
        </Link>
        <span className="text-svak">/</span>
        <Link href={`/mezmur/?k=${encodeURIComponent(m.kategori)}`} lang="am" className="hover:text-blekk">
          {m.kategori}
        </Link>
      </nav>

      <h1 className="mt-6 flex items-baseline gap-4">
        <span className="font-serif text-2xl tabular-nums text-svak">{m.nr}</span>
        <span lang="am" className="font-serif text-4xl leading-tight sm:text-5xl">
          {m.tittel}
        </span>
      </h1>

      {id ? (
        <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-linje bg-blekk">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={m.tittel}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="size-full"
          />
        </div>
      ) : null}
      {id && (
        <a href={youtubeSok(m)} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-dempet hover:text-rubrikk">
          <PlayCircle className="size-4" aria-hidden="true" />
          Andre opptak på YouTube · <span lang="am">ሌሎች ቪዲዮዎች</span>
        </a>
      )}
      {!id && (
        <a
          href={youtubeSok(m)}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-linje px-4 py-2 text-sm hover:border-rubrikk/40 hover:text-rubrikk"
        >
          <PlayCircle className="size-4 text-rubrikk" aria-hidden="true" />
          Søk på YouTube · <span lang="am">በዩቲዩብ ይፈልጉ</span>
        </a>
      )}

      <div lang="am" className="mt-10 grid gap-6 text-xl leading-relaxed">
        {vers
          .filter((v) => v.length)
          .map((v, n) => (
            <p key={n}>
              {v.map((l, j) => (
                <span key={j} className={`block ${/^አዝ/.test(l) ? "pl-8 text-rubrikk" : ""}`}>
                  {l}
                </span>
              ))}
            </p>
          ))}
      </div>

      <nav aria-label="Flere mezmur" className="mt-16 grid gap-3 border-t border-linje pt-8 sm:grid-cols-2">
        {forrige ? (
          <Link href={`/mezmur/${forrige.nr}/`} className="group rounded-2xl border border-linje p-4 hover:border-rubrikk/40">
            <span className="inline-flex items-center gap-1 text-xs text-svak">
              <ArrowLeft className="size-3.5" aria-hidden="true" /> {forrige.nr}
            </span>
            <span lang="am" className="mt-1 block text-lg group-hover:text-rubrikk">
              {forrige.tittel}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {neste && (
          <Link href={`/mezmur/${neste.nr}/`} className="group rounded-2xl border border-linje p-4 text-right hover:border-rubrikk/40">
            <span className="inline-flex items-center gap-1 text-xs text-svak">
              {neste.nr} <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
            <span lang="am" className="mt-1 block text-lg group-hover:text-rubrikk">
              {neste.tittel}
            </span>
          </Link>
        )}
      </nav>
    </div>
  );
}
