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

Bibeltekstene ligger ferdig i `data/bibel/` (amharisk 1962, norsk 1930 og En Levende Bok for NT).
Skriptene i `scripts/bibel/` henter og bygger dem på nytt:

1. `hent_amharisk.py` henter den amhariske bibelen fra wordproject.org
2. `les_norsk1930.py` leser norsk 1930 fra CrossWire-modulen «Norsk»
3. `lag_bibeldata.py` bygger datafilene og retter feil i kildene (se `data/bibel/rettelser.json`)
4. `kontroller_bibel.py` sjekker at ingenting mangler og skriver `data/bibel/KONTROLL.md`

Rapporten viser alt som er rettet, og det som fortsatt må sjekkes av et menneske.
Kildene og lisensene står på siden `/om/`.

## Bilder

Bildene i `public/bilder/` er gamle etiopisk-ortodokse ikoner og håndskrifter fra The Metropolitan Museum of Art,
falt i det fri og frigitt gjennom museets Open Access. Hvert bilde er beskrevet i `lib/bilder.ts` med tittel på
norsk og amharisk og lenke til museet, og alle står på siden `/om/`.
