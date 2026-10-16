# Troslære · ትምህርተ ሃይማኖት

Læringsside om den etiopisk-ortodokse Tewahedo-troen for barna og ungdommen i kirka, på amharisk og norsk
side om side. Hva siden skal inneholde, står i [INNHOLDSPLAN.md](INNHOLDSPLAN.md).

Next.js med statisk eksport (mappen `out/`), laget for Netlify. Siden er åpen og gratis, uten innlogging.

## Kommandoer

```bash
npm install
npm run dev     # utviklingsserver
npm run sjekk   # rask kontroll av bibeldataene (kjøres automatisk før bygging)
npm run build   # kontroll + statisk eksport til out/
npm run lint
```

## Bibelen

Bibeltekstene ligger ferdig i `data/bibel/`: de 66 bøkene på amharisk 1962, norsk 1930 og En Levende Bok for NT,
og resten av den etiopiske kanonen (81 bøker etter kirkens telling, 46 i GT og 35 i NT) på amharisk 2000 E.C.,
med engelsk WEB (`data/bibel/en/`) eller norsk 1930 ved siden av der det finnes fri tekst.
Bøkene står i `boker.json` i kirkens rekkefølge. Skriptene i `scripts/bibel/` henter og bygger dem på nytt:

1. `hent_amharisk.py` henter den amhariske bibelen fra wordproject.org
2. `les_norsk1930.py` leser norsk 1930 fra CrossWire-modulen «Norsk»
3. `lag_bibeldata.py` bygger datafilene og retter feil i kildene (se `data/bibel/rettelser.json`)
4. `kontroller_bibel.py` sjekker at ingenting mangler og skriver `data/bibel/KONTROLL.md`
5. `lag_81.py` legger til de andre bøkene i kanonen og ordner bøkene etter kirkens liste
   (se `data/bibel/rettelser-81.json`)
6. `kontroller_81.py` sjekker ord for ord at hele kildeteksten er med, og skriver `data/bibel/KONTROLL-81.md`

Den norske teksten fra 1887 til apokryfene (Tobit, Judit, Visdommen, Sirak, Baruk, Jeremias' brev, Manasses' bønn
og tilleggene i Ester og Daniel) lages før steg 5:

- `ocr_norsk1887.py` henter sidebildene fra nb.no og leser frakturen med tesseract (modellen frak2021)
- `les_norsk1887.py` renser OCR-teksten og deler den i vers (logg: `data/bibel/rettelser-1887.json`)
- `kart_norsk1887.py` kobler de norske versene til de amhariske etter innholdet (`data/bibel/kart-no1887.json`)
- `lag_81.py --norsk1887 …` legger teksten i `data/bibel/no1887/`, med WEB der den norske mangler

Rapportene viser alt som er rettet, og det som fortsatt må sjekkes av et menneske.
Kildene og lisensene står på siden `/om/`.

### Lisenser for bibeltekstene

- Amharisk 1962: © Bibelselskapet i Etiopia, brukt med tillatelse til ikke-kommersiell bruk (se `/om/`).
- Amharisk 81-bokbibel (bøkene utenfor de 66): EOTCOpenSource sin digitalisering av kirkens amhariske bibel,
  መጽሐፍ ቅዱስ ሰማንያ አሐዱ, 2000 E.C.-utgaven (github.com/EOTCOpenSource), CC BY-NC-ND 4.0 som oppgitt av prosjektet.
  Oversettelsen © Den etiopisk-ortodokse Tewahedo-kirken / Bibelselskapet i Etiopia; vi har bedt om tillatelse.
  Teksten står uendret (ND); den er bare satt opp vers for vers ved siden av oversettelsen.
- Engelsk: World English Bible (WEB), public domain, fra eBible.org.
- Norsk 1887 (apokryfene): Det Gamle Testaments apokryfiske Bøger, Det norske Bibelselskab 1887, public domain,
  skannet av Nasjonalbiblioteket.
- Norsk 1930 og En Levende Bok: se `/om/`.

## Bilder

Bildene i `public/bilder/` er gamle etiopisk-ortodokse ikoner og håndskrifter fra The Metropolitan Museum of Art,
falt i det fri og frigitt gjennom museets Open Access. Hvert bilde er beskrevet i `lib/bilder.ts` med tittel på
norsk og amharisk og lenke til museet, og alle står på siden `/om/`.
