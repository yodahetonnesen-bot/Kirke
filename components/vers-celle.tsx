import type { Del } from "@/lib/bibel";

/** Teksten fra én oversettelse i en rad, med versnumre når raden har flere vers. */
export function VersCelle({ deler, lang, tom }: { deler: Del[]; lang: "am" | "nb" | "en"; tom?: React.ReactNode }) {
  if (deler.length === 0) {
    return <p className="text-sm italic text-svak">{tom ?? "—"}</p>;
  }
  const flere = deler.length > 1;
  return (
    <p lang={lang}>
      {deler.map((d, i) => (
        <span key={`${d.fra}-${i}`}>
          {d.overskrifter?.map((o) => (
            <span key={o} className="mb-1.5 block font-serif text-[0.95em] font-semibold leading-snug text-dempet">
              {o}
            </span>
          ))}
          {(flere || d.ref) && (
            <sup lang="nb" className="mr-0.5 font-sans text-[0.62rem] leading-none not-italic text-svak">
              {d.ref ?? (d.fra === d.til ? d.fra : `${d.fra}–${d.til}`)}
            </sup>
          )}
          {d.mangler ? (
            <span lang="nb" className="font-sans text-sm italic text-svak">
              {lang === "am" ? (
                <>
                  Mangler i den digitale kilden · <span lang="am">በዲጂታል ምንጩ ውስጥ የለም</span>
                </>
              ) : lang === "en" ? (
                "Ikke med i den engelske teksten"
              ) : d.kilde === "WEB" ? (
                "Ikke med i den norske eller den engelske teksten"
              ) : (
                "Mangler"
              )}
            </span>
          ) : d.kilde === "WEB" && lang !== "en" ? (
            <>
              <span lang="en">{d.tekst}</span>{" "}
              <span lang="nb" className="whitespace-nowrap font-sans text-xs not-italic text-svak">
                (engelsk, WEB)
              </span>
            </>
          ) : (
            d.tekst
          )}
          {d.noter?.map((n) => (
            <span key={n} className="mt-1 block text-[0.8em] leading-snug text-dempet">
              <span className="text-rubrikk/70">✳ </span>
              {n}
            </span>
          ))}
          {i < deler.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
