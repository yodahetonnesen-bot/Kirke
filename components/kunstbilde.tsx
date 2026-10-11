import { bildeSrc, type Bilde } from "@/lib/bilder";

/** Et kunstverk med srcset i to størrelser. */
export function Kunstbilde({
  bilde,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
  prioritet = false,
}: {
  bilde: Bilde;
  className?: string;
  sizes?: string;
  prioritet?: boolean;
}) {
  return (
    <img
      src={bildeSrc(bilde)}
      srcSet={`${bildeSrc(bilde, true)} 600w, ${bildeSrc(bilde)} 1400w`}
      sizes={sizes}
      alt={`${bilde.tittel.no} – ${bilde.verk}, ${bilde.tid}`}
      loading={prioritet ? "eager" : "lazy"}
      decoding="async"
      style={bilde.fokus ? { objectPosition: bilde.fokus } : undefined}
      className={className}
    />
  );
}

/** Bildetekst på begge språk, med kilde. */
export function Bildetekst({ bilde, className = "" }: { bilde: Bilde; className?: string }) {
  return (
    <figcaption className={`text-xs leading-relaxed text-svak ${className}`}>
      <span className="text-dempet">{bilde.tittel.no}</span> · <span lang="am">{bilde.tittel.am}</span>
      <br />
      {bilde.verk}, {bilde.tid}.{" "}
      <a href={bilde.url} className="underline-offset-2 hover:text-dempet hover:underline" target="_blank" rel="noreferrer">
        The Met
      </a>
    </figcaption>
  );
}
