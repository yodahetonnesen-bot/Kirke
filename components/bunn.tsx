import Link from "next/link";

export function Bunn() {
  return (
    <footer className="mt-24 border-t border-linje/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-dempet sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Laget for barna og ungdommen i kirka · <span lang="am">ለቤተ ክርስቲያን ልጆችና ወጣቶች</span>
        </p>
        <Link href="/om/" className="hover:text-blekk">
          Om siden og kildene · <span lang="am">ስለ ድረ ገጹ</span>
        </Link>
      </div>
    </footer>
  );
}
