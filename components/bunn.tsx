import Link from "next/link";

export function Bunn() {
  return (
    <footer className="mt-24 border-t border-linje/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-dempet sm:flex-row sm:items-center sm:justify-end sm:px-6">
        <Link href="/om/" className="hover:text-blekk">
          Kilder · <span lang="am">ምንጮች</span>
        </Link>
      </div>
    </footer>
  );
}
