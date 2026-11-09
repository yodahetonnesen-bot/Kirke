// Ukas mezmur: hvem som helst kan lime inn ukas mezmur, og den byttes for alle.
// Lagres i Netlify Blobs. Hvis miljøvariabelen UKAS_MEZMUR_KODE er satt i Netlify, må koden oppgis for å bytte.
// De siste ti blir tatt vare på, så en feil kan rettes.
import { getStore } from "@netlify/blobs";

export const config = { path: "/api/ukas-mezmur" };

type Ukas = { nr?: number; tittel: string; linjer: string[]; satt: string };

const svar = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const ukasMezmur = async (req: Request) => {
  const lager = getStore("ukas-mezmur");
  if (req.method === "GET") {
    const naa = (await lager.get("naa", { type: "json" })) as Ukas | null;
    return svar({ naa, kodeKreves: Boolean(process.env.UKAS_MEZMUR_KODE) });
  }
  if (req.method !== "POST") return svar({ feil: "Bare GET og POST" }, 405);

  let inn: { tekst?: unknown; tittel?: unknown; nr?: unknown; kode?: unknown };
  try {
    inn = await req.json();
  } catch {
    return svar({ feil: "Ugyldig forespørsel" }, 400);
  }
  const kode = process.env.UKAS_MEZMUR_KODE;
  if (kode && inn.kode !== kode) return svar({ feil: "Feil kode" }, 403);

  const tekst = typeof inn.tekst === "string" ? inn.tekst.replace(/\r/g, "").trim() : "";
  if (!tekst || tekst.length > 8000) return svar({ feil: "Lim inn mezmuren (høyst 8000 tegn)" }, 400);
  const linjer = tekst.split("\n").map((l) => l.trim()).slice(0, 250);
  const tittel = (typeof inn.tittel === "string" && inn.tittel.trim() ? inn.tittel.trim() : linjer[0]).slice(0, 200);
  const nr = Number.isInteger(inn.nr) && (inn.nr as number) > 0 && (inn.nr as number) < 10000 ? (inn.nr as number) : undefined;

  const ny: Ukas = { nr, tittel, linjer, satt: new Date().toISOString() };
  const historikk = ((await lager.get("historikk", { type: "json" })) as Ukas[] | null) ?? [];
  await lager.setJSON("historikk", [ny, ...historikk].slice(0, 10));
  await lager.setJSON("naa", ny);
  return svar({ naa: ny });
};

export default ukasMezmur;
