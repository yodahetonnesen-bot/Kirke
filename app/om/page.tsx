import type { Metadata } from "next";
import { BILDER } from "@/lib/bilder";

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
          Siden er laget for at barna og ungdommen i kirka vår i Kristiansand skal kunne lære troen på både amharisk og norsk. Den er
          gratis og åpen, og lagrer ingenting om deg.
        </p>
        <p lang="am" className="text-dempet">
          ይህ ድረ ገጽ በክሪስቲያንሳንድ የምትገኘው የቤተ ክርስቲያናችን ልጆችና ወጣቶች ሃይማኖታቸውን በአማርኛና በኖርዌይኛ እንዲማሩ የተዘጋጀ ነው። ነጻና ለሁሉም ክፍት ነው።
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
      <Kilde tittel="Amharisk · ሰማንያ አሐዱ (2000 E.C.)">
        <p>
          Bøkene utenfor de 66 (Enok, Jubileene, Esra-bøkene, Tobit, Judit, Meqabyan, Visdommens bok, Siraks bok,
          Baruk, Sinodos, Paktens bok, Klemens’ bok, Didaskalia, Josippon og tilleggene i Ester, Daniel og Salmene) er
          hentet fra den amhariske 81-bokbibelen, <span lang="am">መጽሐፍ ቅዱስ ሰማንያ አሐዱ</span>, 2000 E.C.-utgaven
          (2007/08). Oversettelsen tilhører Den etiopisk-ortodokse Tewahedo-kirken og Bibelselskapet i Etiopia
          (<span lang="am">የኢትዮጵያ መጽሐፍ ቅዱስ ማኅበር</span>). Vi har bedt om tillatelse til å bruke den.
        </p>
        <p>
          Teksten er digitalisert av EOTCOpenSource (prosjektene bible_mobile_app og BibleAPI på GitHub), som oppgir
          lisensen CC BY-NC-ND 4.0: fri til ikke-kommersiell bruk med kreditering, og teksten skal stå uendret. Vi har
          bare satt den opp vers for vers ved siden av oversettelsen. Vers som er tomme i den digitale kilden, står
          som «mangler». Kontrollen står i <code className="text-sm">data/bibel/KONTROLL-81.md</code> i kildekoden.
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
      <Kilde tittel="Engelsk · World English Bible">
        <p>
          For de bøkene utenfor de 66 som ikke finnes i fri norsk oversettelse (Tobit, Judit, Visdommens bok, Siraks
          bok, Baruk, Jeremias’ brev, 3. og 4. Esrabok, Manasses’ bønn, Salme 151 og tilleggene i Ester og Daniel)
          står engelsk tekst fra World English Bible (WEB), som er public domain. Hentet fra eBible.org. Der
          versinndelingen er ulik, står versene side om side så langt de går.
        </p>
      </Kilde>

      <h2 className="mt-14 text-sm uppercase tracking-[0.18em] text-dempet">
        Bildene · <span lang="am" className="normal-case tracking-normal">ሥዕሎቹ</span>
      </h2>
      <p className="mt-4 text-dempet">
        Alle bildene er gamle etiopisk-ortodokse kunstverk fra The Metropolitan Museum of Art i New York. De er falt i
        det fri, og museet har gjort dem fritt tilgjengelige gjennom Open Access.
      </p>
      <ul className="mt-4 divide-y divide-linje/60 border-y border-linje/60 text-sm">
        {[...new Map(Object.values(BILDER).map((b) => [b.url, b])).values()].map((b) => (
          <li key={b.url} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3">
            <span>
              {b.verk}, {b.tid}
            </span>
            <a href={b.url} className="text-rubrikk hover:underline" target="_blank" rel="noreferrer">
              metmuseum.org
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
