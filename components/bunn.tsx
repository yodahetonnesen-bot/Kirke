import Link from "next/link";
import { Mail } from "lucide-react";

export function Bunn() {
  return (
    <footer className="mt-24 border-t border-linje/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-dempet sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <a href="mailto:yodahetonnesen@gmail.com" className="inline-flex items-center gap-2 hover:text-blekk">
          <Mail className="size-4" aria-hidden="true" />
          Kontakt oss · <span lang="am">ያግኙን</span> · yodahetonnesen@gmail.com
        </a>
        <Link href="/om/" className="hover:text-blekk">
          Kilder · <span lang="am">ምንጮች</span>
        </Link>
      </div>
    </footer>
  );
}
