import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { alleBoker, finnBok } from "@/lib/bibel";

export const dynamicParams = false;

export function generateStaticParams() {
  return alleBoker().map((b) => ({ bok: b.adresse }));
}

export async function generateMetadata({ params }: PageProps<"/bibelen/[bok]">): Promise<Metadata> {
  const bok = finnBok((await params).bok);
  return { title: bok ? `${bok.navn.no} · ${bok.navn.am}` : "Bibelen" };
}

export default async function BokSide({ params }: PageProps<"/bibelen/[bok]">) {
  const bok = finnBok((await params).bok);
  if (!bok) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
      <Link href="/bibelen/" className="text-sm text-dempet hover:text-blekk">
        ← Bibelen · <span lang="am">መጽሐፍ ቅዱስ</span>
      </Link>
      <h1 className="mt-6 font-serif text-4xl sm:text-5xl">{bok.navn.no}</h1>
      <p lang="am" className="mt-1 text-2xl text-dempet">{bok.navn.am}</p>
      <h2 className="mt-12 text-sm uppercase tracking-[0.18em] text-dempet">
        Kapitler · <span lang="am" className="normal-case tracking-normal">ምዕራፎች</span>
      </h2>
      <ol className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(3.25rem,1fr))] gap-2">
        {Array.from({ length: bok.kapitler }, (_, i) => i + 1).map((k) => (
          <li key={k}>
            <Link
              href={`/bibelen/${bok.adresse}/${k}/`}
              className="grid aspect-square place-items-center rounded-xl border border-linje text-lg tabular-nums transition-colors hover:border-rubrikk hover:text-rubrikk"
            >
              {k}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
