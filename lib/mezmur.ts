// Mezmurboka fra søndagsskolen i Debre Tsion Kidist Mariam i Kristiansand (ጥር 2011/2019 ዓ.ም.).
// Teksten står slik den er i boka, uten oversettelse. Lages med scripts/mezmur/lag_mezmur.py.
import mezmurer from "@/content/mezmur/mezmurer.json";
import videoer from "@/content/mezmur/videoer.json";

export type Mezmur = { nr: number; tittel: string; kategori: string; linjer: string[] };

export const MEZMURER = mezmurer as Mezmur[];
export const finnMezmur = (nr: number) => MEZMURER.find((m) => m.nr === nr);

/** Kategoriene i den rekkefølgen de står i boka. */
export const KATEGORIER = [...new Set(MEZMURER.map((m) => m.kategori))];

/** YouTube-video for en mezmur, hvis vi har funnet en som passer: video-id eller full lenke. */
export function video(nr: number): string | undefined {
  return (videoer as Record<string, string>)[String(nr)];
}

/** Lenke som søker etter mezmuren på YouTube. */
export const youtubeSok = (m: Mezmur) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${m.tittel} መዝሙር`)}`;
