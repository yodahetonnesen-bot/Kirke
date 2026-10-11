import type { Seksjon } from "@/lib/navigasjon";

// Midlertidig side for deler som ikke er laget ennå. Viser hva som kommer.
export function KommerSnart({ seksjon, punkter }: { seksjon: Seksjon; punkter: { no: string; am: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="font-serif text-4xl sm:text-5xl">{seksjon.no}</h1>
      <p lang="am" className="mt-1 text-2xl text-dempet">{seksjon.am}</p>
      <p className="mt-8 inline-block rounded-full border border-linje px-3 py-1 text-sm text-dempet">
        Under arbeid · <span lang="am">በዝግጅት ላይ</span>
      </p>
      <ul className="mt-10 divide-y divide-linje/60 border-y border-linje/60">
        {punkter.map((p) => (
          <li key={p.no} className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-8">
            <span>{p.no}</span>
            <span lang="am" className="text-dempet">{p.am}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
