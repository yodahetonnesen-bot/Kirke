import type { Metadata } from "next";

export const metadata: Metadata = { title: "Om siden · ስለ ድረ ገጹ" };

function Kilde({ tittel, children }: { tittel: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-linje/60 py-6">
      <h3 className="font-serif text-xl">{tittel}</h3>
      <div className="mt-2 space-y-2 text-dempet">{children}</div>
    </section>
  );
}

export default function Om() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="font-serif text-4xl sm:text-5xl">Om siden</h1>
      <p lang="am" className="mt-1 text-2xl text-dempet">ስለ ድረ ገጹ</p>
      <div className="mt-10 space-y-4">
        <p>
          Siden er laget for at barna og ungdommen i kirka skal kunne lære troen på både amharisk og norsk. Den er
          gratis og åpen, og lagrer ingenting om deg.
        </p>
        <p lang="am" className="text-dempet">
          ይህ ድረ ገጽ የቤተ ክርስቲያን ልጆችና ወጣቶች ሃይማኖታቸውን በአማርኛና በኖርዌይኛ እንዲማሩ የተዘጋጀ ነው። ነጻና ለሁሉ ክፍት ነው።
        </p>
        <p className="text-sm text-svak">
          Lærestoffet er under arbeid og skal leses gjennom av en prest eller søndagsskolelærer før det regnes som
          ferdig.
        </p>
      </div>

      <h2 className="mt-14 text-sm uppercase tracking-[0.18em] text-dempet">
        Bibeltekstene · <span lang="am" className="normal-case tracking-normal">የመጽሐፍ ቅዱስ ጽሑፎች</span>
      </h2>
      <Kilde tittel="Amharisk · መጽሐፍ ቅዱስ (1962)">
        <p>
          መጽሐፍ ቅዱስ, the Holy Bible in the Amharic language of Ethiopia. Copyright © 1962 Bible Society of Ethiopia.
          Det nye testamentet brukes med tillatelse fra Bibelselskapet i Etiopia til ikke-kommersiell bruk:
        </p>
        <p className="text-sm">
          «The New Testament in the Amharic language of Ethiopia, copyright © 1962, 2003 United Bible Societies.
          Revised Amharic Bible in XML (2003). Printed version by United Bible Societies (C)1962. E-Text in
          transliterated ASCII format by Lapsley/Brooks Foundation 1994. Unicode UTF-8 transformation and XML-tagging
          by Dirk Röckmann 2003 (www.nt-text.net). With kind permission of the Bible Society of Ethiopia. Every
          non-commercial work using this data in any form must fully include this copyright statement! Every
          commercial use of parts or the complete data in any form needs written permission of the Bible Society of
          Ethiopia!»
        </p>
        <p>
          Teksten er hentet fra wordproject.org og eBible.org og kontrollert vers for vers. Det som er rettet, står i
          rapporten <code className="text-sm">data/bibel/KONTROLL.md</code> i kildekoden.
        </p>
      </Kilde>
      <Kilde tittel="Norsk · Bibelen 1930">
        <p>Det Norske Bibelselskaps oversettelse av 1930 (bokmål). Fri til bruk etter Bibelselskapets retningslinjer.</p>
      </Kilde>
      <Kilde tittel="Norsk lettlest · En Levende Bok">
        <p>
          Biblica® Open En Levende Bok: Det Nye Testamentet™. Biblica® Open Norwegian Living New Testament™.
          Copyright © 1978, 1988, 2005 by Biblica, Inc. «Biblica» is a trademark registered in the United States
          Patent and Trademark Office by Biblica, Inc. Used with permission. Lisens: CC BY-SA 4.0. Den originale
          utgaven finnes gratis på biblica.com og open.bible.
        </p>
      </Kilde>
    </div>
  );
}
