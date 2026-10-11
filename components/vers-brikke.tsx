import Link from "next/link";
import { BookOpen } from "lucide-react";
import type { HentetVers } from "@/lib/vers";

/** Et bibelvers som kan åpnes og vises ordrett på begge språk. */
export function VersBrikke({ vers }: { vers: HentetVers }) {
  return (
    <details className="group/vers">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-linje bg-flate px-2.5 py-1 text-xs text-dempet transition-colors hover:border-rubrikk/40 hover:text-rubrikk group-open/vers:border-rubrikk/40 group-open/vers:text-rubrikk [&::-webkit-details-marker]:hidden">
        <BookOpen className="size-3.5" aria-hidden="true" />
        {vers.ref.no} · <span lang="am">{vers.ref.am}</span>
      </summary>
      <div className="mt-2 grid gap-3 rounded-2xl border border-linje bg-flate p-4 md:grid-cols-2 md:gap-6">
        <p lang="am" className="text-[0.95rem] text-blekk">
          {vers.am}
        </p>
        <p className="font-serif leading-relaxed text-blekk">{vers.no}</p>
        <Link href={vers.href} className="text-xs text-rubrikk hover:underline md:col-span-2">
          Les hele kapitlet · <span lang="am">ምዕራፉን በሙሉ ያንብቡ</span> →
        </Link>
      </div>
    </details>
  );
}
