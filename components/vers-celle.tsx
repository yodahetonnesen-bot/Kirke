import type { Del } from "@/lib/bibel";

/** Teksten fra én oversettelse i en rad, med versnumre når raden har flere vers. */
export function VersCelle({ deler, lang, tom }: { deler: Del[]; lang: "am" | "nb"; tom?: React.ReactNode }) {
  if (deler.length === 0) {
    return <p className="text-sm italic text-svak">{tom ?? "—"}</p>;
  }
  const flere = deler.length > 1;
  return (
    <p lang={lang}>
      {deler.map((d, i) => (
        <span key={`${d.fra}-${i}`}>
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
              ) : (
                "Mangler"
              )}
            </span>
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
