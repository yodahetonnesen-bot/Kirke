// Søkeindeksen lages når siden bygges og lastes først når noen søker.
import { TEMAER } from "@/content/laer";
import { finnDel } from "@/content/laer/deler";
import { alleBoker, kapitlene } from "@/lib/bibel";
import { BONNEBOK } from "@/lib/bonner";
import { FASTER, HOYTIDER } from "@/lib/hoytider";
import { SEKSJONER } from "@/lib/navigasjon";
import type { SokDok, SokIndeks } from "@/lib/sok";
import { FORKORTELSER } from "@/lib/vers";

export const dynamic = "force-static";

const to = (t: { no: string; am: string }) => [t.no, t.am];

function lagIndeks(): SokIndeks {
  const dok: SokDok[] = [];

  for (const s of SEKSJONER) dok.push({ type: "side", href: s.href, tittel: { no: s.no, am: s.am }, tekst: [] });
  dok.push(
    { type: "side", href: "/laer/fidel/", tittel: { no: "Fidel", am: "ፊደል" }, tekst: ["ge'ez amharisk bokstaver alfabet"] },
    { type: "side", href: "/laer/ov/", tittel: { no: "Øving", am: "ልምምድ" }, tekst: ["ordkort spørsmål quiz"] },
    { type: "side", href: "/om/", tittel: { no: "Kilder", am: "ምንጮች" }, tekst: [] },
  );

  for (const t of TEMAER) {
    const sti = t.tittel.no;
    dok.push({
      type: "tema",
      href: `/laer/${t.slug}/`,
      tittel: t.tittel,
      sti: finnDel(t.del)?.no,
      tekst: [
        ...to(t.undertittel),
        ...to(t.ingress),
        ...t.ord.flatMap((o) => [o.ord, ...to(o.forklaring)]),
        ...(t.fedre ?? []).flatMap((f) => [...to(f.navn), ...to(f.tekst)]),
        ...t.sporsmal.flatMap((q) => [...to(q.sporsmal), ...to(q.svar)]),
      ],
    });
    for (const a of t.avsnitt) {
      dok.push({
        type: "avsnitt",
        href: `/laer/${t.slug}/#${a.id}`,
        tittel: a.tittel,
        sti,
        tekst: [...(a.ingress ? to(a.ingress) : []), ...a.punkter.flatMap((p) => to(p.tekst))],
      });
    }
  }

  for (const d of BONNEBOK.deler) {
    dok.push({
      type: "bonn",
      href: `/bonner/${d.id}/`,
      tittel: { no: d.tittel.no, am: d.tittel.am },
      sti: d.tittel.gez,
      tekst: [d.innledning, d.velsignelse, d.overskrift, ...d.vers].flatMap((v) => (v ? [v.gez, v.am, v.no] : [])),
    });
  }

  for (const h of HOYTIDER) {
    dok.push({
      type: "hoytid",
      href: h.tema ? `/laer/${h.tema}/` : "/kalender/",
      tittel: h.navn,
      tekst: h.om ? to(h.om) : [],
    });
  }
  for (const f of FASTER) {
    dok.push({ type: "hoytid", href: "/kalender/", tittel: f.navn, tekst: f.om ? to(f.om) : [] });
  }

  const boker = alleBoker().map((b) => ({
    adresse: b.adresse,
    navn: b.navn,
    fork: FORKORTELSER[b.id] ?? [],
    kapitler: kapitlene(b),
  }));
  for (const b of boker) {
    dok.push({ type: "bok", href: `/bibelen/${b.adresse}/`, tittel: { no: b.navn.no, am: b.navn.am }, tekst: [b.navn.en, ...b.fork] });
  }

  return { dok, boker };
}

export function GET() {
  return Response.json(lagIndeks());
}
