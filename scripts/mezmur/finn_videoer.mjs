// Leter etter en YouTube-video til hver mezmur og lagrer treffene i content/mezmur/videoer.json.
// En video godtas bare når tittelen dens inneholder mezmurens tittel (etter at like-lydende fidel er slått
// sammen og tegnsetting fjernet), så vi ikke lenker til feil sang. Mezmurer uten sikkert treff får ingen video,
// og siden viser da en lenke som søker på YouTube.
//
// Bruk: node scripts/mezmur/finn_videoer.mjs [fra-nr]   (fortsetter der den slapp, lagrer underveis)
import fs from "node:fs";
import path from "node:path";

const ROT = path.resolve(import.meta.dirname, "../..");
const MEZMURER = JSON.parse(fs.readFileSync(path.join(ROT, "content/mezmur/mezmurer.json"), "utf8"));
const UT = path.join(ROT, "content/mezmur/videoer.json");
const LOGG = path.join(ROT, "content/mezmur/videoer-logg.json");
const videoer = JSON.parse(fs.readFileSync(UT, "utf8"));
const logg = fs.existsSync(LOGG) ? JSON.parse(fs.readFileSync(LOGG, "utf8")) : {};

const LIKE = { 0x1210: 0x1200, 0x1280: 0x1200, 0x1220: 0x1230, 0x12d0: 0x12a0, 0x1340: 0x1338 };
function norm(s) {
  let ut = "";
  for (const t of s.normalize("NFKC")) {
    const cp = t.codePointAt(0);
    if (cp >= 0x1200 && cp < 0x1360) {
      const rel = cp - 0x1200;
      let grunn = cp - (rel % 8);
      let form = rel % 8;
      grunn = LIKE[grunn] ?? grunn;
      if ((grunn === 0x1200 || grunn === 0x12a0) && form === 3) form = 0;
      ut += String.fromCodePoint(grunn + form);
    } else if (/[\p{L}\p{N}]/u.test(t)) ut += t.toLowerCase();
  }
  return ut;
}

function videoerFra(html) {
  const m = html.match(/var ytInitialData = (\{.*?\});<\/script>/s);
  if (!m) return [];
  const data = JSON.parse(m[1]);
  const ut = [];
  (function gå(o) {
    if (!o || typeof o !== "object") return;
    if (o.videoRenderer?.videoId) {
      const v = o.videoRenderer;
      ut.push({
        id: v.videoId,
        tittel: (v.title?.runs ?? []).map((r) => r.text).join(""),
        kanal: (v.ownerText?.runs ?? []).map((r) => r.text).join(""),
      });
      return;
    }
    for (const k in o) gå(o[k]);
  })(data);
  return ut;
}

const vent = (ms) => new Promise((r) => setTimeout(r, ms));
const fra = Number(process.argv[2] ?? 1);
let nye = 0;
for (const m of MEZMURER) {
  if (m.nr < fra || logg[m.nr]) continue;
  const tittel = m.tittel.replace(/\(.*?\)|\/.*$/g, "").trim();
  const n = norm(tittel);
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${tittel} መዝሙር`)}&hl=en`;
  let html = "";
  for (let forsok = 0; forsok < 3; forsok++) {
    try {
      const svar = await fetch(url, { headers: { "accept-language": "en" } });
      if (svar.ok) {
        html = await svar.text();
        break;
      }
    } catch {}
    await vent(3000 * (forsok + 1));
  }
  const kandidater = videoerFra(html).slice(0, 10);
  // korte titler (ett ord) gir for mange tilfeldige treff; da kreves det at tittelen står først
  const treff = kandidater.find((v) => {
    const vt = norm(v.tittel);
    if (n.length < 3) return false;
    return n.length <= 6 ? vt.startsWith(n) : vt.includes(n);
  });
  logg[m.nr] = treff ? { id: treff.id, tittel: treff.tittel, kanal: treff.kanal } : { ingen: true, sett: kandidater.length };
  if (treff) videoer[m.nr] = treff.id;
  if (++nye % 20 === 0) {
    fs.writeFileSync(UT, JSON.stringify(videoer, null, 1));
    fs.writeFileSync(LOGG, JSON.stringify(logg, null, 1));
    console.log(`${m.nr}: ${Object.keys(videoer).length} videoer så langt`);
  }
  await vent(900);
}
fs.writeFileSync(UT, JSON.stringify(videoer, null, 1));
fs.writeFileSync(LOGG, JSON.stringify(logg, null, 1));
console.log(`Ferdig: ${Object.keys(videoer).length} av ${MEZMURER.length} mezmurer har video`);
