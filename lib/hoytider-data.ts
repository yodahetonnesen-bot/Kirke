// Høytider, faster og månedlige minnedager i den etiopisk-ortodokse Tewahedo-kirka.
// Kontrollert mot kirkas egne kilder (oktober 2026):
// - ethiopianorthodox.org: «Calendar» (Aymero Wondmagegnehu og Joachim Motovu) og «Worship in the Ethiopian Orthodox
//   Church» (de ni store og ni små høytidene, de sju fastene, hvem som faster), «ወርሃዊ በዓላት» (werawi bealat.pdf,
//   minnedagene for hver dag i måneden).
// - Mahibere Kidusan (eotcmk.org): «ግዝረት» (listen over de ni små høytidene), månedsartiklene «ወርኃ መስከረም» …
//   «ወርኃ ጳጉሜን» (de årlige festene i hver måned), «ጾመ ነቢያት» (ስብከት, ብርሃን, ኖላዊ og ጾመ ገሃድ), «ጾመ ሐዋርያት
//   እና ጾመ ድኅነት», «ጾመ ፍልሰታ», «ዐቢይ ጾም», «ኅዳር ጽዮን», «ቁስቋም ማርያም», «በዓለ ቅዱስ ያሬድ», «ደብረ ምጥማቅ»,
//   «ሊቀ ሰማዕታት ቅዱስ ጊዮርጊስ», «ዝክረ ግማደ መስቀሉ», og «የ፳፻፲፩ ባሕረ ሐሳባዊ ቀመር» (de flyttbare dagene).
// - eotcssd.org (Abba Gerima), gjengitt av minnesotaselassie: de ni store høytidene med datoer.
// - eotceam.org: ባሕረ ሐሳብ for 2018 (kontroll av FLYTTBARE i kirkear.ts – alle offsetene stemmer).
// Usikkert: ስብከት, ብርሃን og ኖላዊ er lagt på søndagen i ukene ታኅሣሥ 7–13, 14–20 og 21–27 (eotcmk.org sier at
//   ስብከት aldri kommer før ታኅሣሥ 7 eller etter 13). Hvilken dag menigheten feirer dem, bør presten bekrefte.
// Usikkert: Den eldre engelske listen på ethiopianorthodox.org har ገና (julaften) som liten høytid i stedet for
//   ብርሃን/ኖላዊ eller det andre korset. Her følges Mahibere Kidusans liste.
// Usikkert: Minnedagene for hver dag (MANEDLIGE) er fra én kilde (ethiopianorthodox.org); bare de første navnene er tatt med.
// Usikkert: ግዝረት, ቃና ዘገሊላ og de andre faste datoene følger den etiopiske datoen også i året etter at ጳጉሜን har
//   hatt seks dager; bare ልደት flyttes da (til ታኅሣሥ 28).
import type { Faste, Hoytid, Minnedag } from "./hoytider";

export const HOYTIDER: Hoytid[] = [
  // Herrens ni store høytider (ዐበይት በዓላት)
  {
    id: "bisrat",
    type: "herre",
    dato: { maned: 7, dag: 29 },
    navn: { no: "Bebudelsen", am: "ብሥራት (ፅንሰት)" },
    om: {
      no: "Engelen Gabriel bringer Maria det glade budskapet, og Guds Sønn blir unnfanget i henne.",
      am: "ቅዱስ ገብርኤል ለእመቤታችን የምሥራቹን የነገራት፣ አካላዊ ቃል በማኅፀኗ ያደረበት ዕለት።",
    },
    tema: "menneskevordelsen",
  },
  {
    id: "ledet",
    type: "herre",
    dato: { maned: 4, dag: 29 },
    navn: { no: "Jul – Jesu fødsel", am: "ልደት (ገና)" },
    om: {
      no: "Jesus Kristus blir født i Betlehem. Året etter at ጳጉሜን har hatt seks dager, feires jula ታኅሣሥ 28.",
      am: "ጌታችን ኢየሱስ ክርስቶስ በቤተ ልሔም የተወለደበት ዕለት።",
    },
    tema: "menneskevordelsen",
  },
  {
    id: "timket",
    type: "herre",
    dato: { maned: 5, dag: 11 },
    navn: { no: "Jesu dåp", am: "ጥምቀት" },
    om: {
      no: "Jesus blir døpt av Johannes i Jordan-elva. ታቦታት bæres ut til vann, og vi minnes vår egen dåp.",
      am: "ጌታችን በዮርዳኖስ ወንዝ በዮሐንስ እጅ የተጠመቀበት ዕለት።",
    },
    tema: "daapen",
  },
  {
    id: "debre-tabor",
    type: "herre",
    dato: { maned: 12, dag: 13 },
    navn: { no: "Forklarelsen på fjellet", am: "ደብረ ታቦር (ቡሄ)" },
    om: {
      no: "Jesus viser sin herlighet for Peter, Jakob og Johannes på Tabor-fjellet.",
      am: "ጌታችን በደብረ ታቦር ለጴጥሮስ፣ ለያዕቆብና ለዮሐንስ ብርሃነ መለኮቱን የገለጠበት ዕለት።",
    },
  },
  {
    id: "hosaena",
    type: "herre",
    dato: { flyttbar: "hosaena" },
    navn: { no: "Palmesøndag", am: "ሆሳዕና" },
    om: {
      no: "Jesus rir inn i Jerusalem, og folket roper «Hosianna!». Siste søndag i ዐቢይ ጾም.",
      am: "ጌታችን በክብር ወደ ኢየሩሳሌም የገባበትና ሕዝቡ «ሆሳዕና» ያሉበት ዕለት።",
    },
  },
  {
    id: "siklet",
    type: "herre",
    dato: { flyttbar: "siklet" },
    navn: { no: "Langfredag", am: "ስቅለት" },
    om: {
      no: "Jesus blir korsfestet og dør for vår frelse.",
      am: "ጌታችን ስለ እኛ ድኅነት በመስቀል ላይ የተሰቀለበት ዕለት።",
    },
  },
  {
    id: "tinsae",
    type: "herre",
    dato: { flyttbar: "tinsae" },
    navn: { no: "Påske – oppstandelsen", am: "ትንሣኤ (ፋሲካ)" },
    om: {
      no: "Jesus står opp fra de døde. Den store fasten slutter, og de 50 gledesdagene begynner.",
      am: "ጌታችን ከሙታን የተነሣበት ዕለት፤ ዐቢይ ጾም ተፈጽሞ የሃምሳው ቀናት ደስታ ይጀመራል።",
    },
    tema: "oppstandelsen",
  },
  {
    id: "erget",
    type: "herre",
    dato: { flyttbar: "erget" },
    navn: { no: "Kristi himmelfart", am: "ዕርገት" },
    om: {
      no: "Jesus farer opp til himmelen på den 40. dagen etter påske.",
      am: "ጌታችን ከትንሣኤው በኋላ በአርባኛው ቀን ወደ ሰማይ ያረገበት ዕለት።",
    },
  },
  {
    id: "paraklitos",
    type: "herre",
    dato: { flyttbar: "paraklitos" },
    navn: { no: "Pinse", am: "ጰራቅሊጦስ" },
    om: {
      no: "Den hellige ånd kommer over apostlene på den 50. dagen etter påske.",
      am: "በሃምሳኛው ቀን መንፈስ ቅዱስ በሐዋርያት ላይ የወረደበት ዕለት።",
    },
  },

  // Herrens ni små høytider (ንዑሳን በዓላት)
  {
    id: "meskel",
    type: "herre-liten",
    dato: { maned: 1, dag: 17 },
    navn: { no: "Korsfesten", am: "መስቀል" },
    om: {
      no: "Vi ærer Kristi kors, som dronning Eleni (Helena) lette etter og fant.",
      am: "ንግሥት ዕሌኒ የፈለገችውንና ያገኘችውን የጌታችንን ቅዱስ መስቀል የምናከብርበት በዓል።",
    },
  },
  {
    id: "sibket",
    type: "herre-liten",
    dato: { sondagFra: { maned: 4, dag: 7 } },
    navn: { no: "Forkynnelsens søndag", am: "ስብከት" },
    om: {
      no: "Vi minnes profetene som forkynte at Frelseren skulle komme.",
      am: "ነቢያት «ይወርዳል ይወለዳል» ብለው የሰበኩት የሚታሰብበት።",
    },
  },
  {
    id: "birhan",
    type: "herre-liten",
    dato: { sondagFra: { maned: 4, dag: 14 } },
    navn: { no: "Lysets søndag", am: "ብርሃን" },
    om: {
      no: "Kristus er lyset som kom til verden.",
      am: "ብርሃን ክርስቶስ ወደ ዓለም መምጣቱ የሚታሰብበት።",
    },
  },
  {
    id: "nolawi",
    type: "herre-liten",
    dato: { sondagFra: { maned: 4, dag: 21 } },
    navn: { no: "Den gode hyrdes søndag", am: "ኖላዊ" },
    om: {
      no: "Kristus er den gode hyrden som samler sauene sine.",
      am: "ቸሩ እረኛ ክርስቶስ የሚታሰብበት።",
    },
  },
  {
    id: "gizret",
    type: "herre-liten",
    dato: { maned: 5, dag: 6 },
    navn: { no: "Jesu omskjærelse", am: "ግዝረት" },
    om: {
      no: "Åtte dager gammel blir Jesus omskåret og får navnet Jesus.",
      am: "ጌታችን በስምንተኛው ቀን የተገዘረበትና ኢየሱስ ተብሎ የተሰየመበት።",
    },
  },
  {
    id: "kana",
    type: "herre-liten",
    dato: { maned: 5, dag: 12 },
    navn: { no: "Bryllupet i Kana", am: "ቃና ዘገሊላ" },
    om: {
      no: "Jesu første under: vann blir til vin i bryllupet i Kana.",
      am: "ጌታችን በቃና ዘገሊላ ውኃውን ወደ ወይን የለወጠበት የመጀመሪያው ተአምር።",
    },
  },
  {
    id: "simeon",
    type: "herre-liten",
    dato: { maned: 6, dag: 8 },
    navn: { no: "Jesus i templet (Simeon)", am: "ልደተ ስምዖን" },
    om: {
      no: "40 dager gammel blir Jesus båret inn i templet, og den gamle Simeon tar ham i armene.",
      am: "ጌታችን በተወለደ በአርባ ቀኑ ወደ ቤተ መቅደስ የገባበትና አረጋዊው ስምዖን የታቀፈው።",
    },
  },
  {
    id: "megabit-meskel",
    type: "herre-liten",
    dato: { maned: 7, dag: 10 },
    navn: { no: "Korset blir funnet", am: "መጋቢት መስቀል" },
    om: {
      no: "Minnet om at det dyrebare korset som Jesus ble korsfestet på, ble funnet.",
      am: "ጌታችን የተሰቀለበት ክቡር መስቀል የተገለጠበትና የተገኘበት።",
    },
  },
  {
    id: "debre-zeyt",
    type: "herre-liten",
    dato: { flyttbar: "debreZeyt" },
    navn: { no: "Oljeberget", am: "ደብረ ዘይት" },
    om: {
      no: "Femte søndag i ዐቢይ ጾም. Jesus lærer på Oljeberget om sin andre komme.",
      am: "የዐቢይ ጾም አምስተኛው እሑድ፤ ጌታችን በደብረ ዘይት ስለ ዳግም ምጽአቱ ያስተማረበት።",
    },
    tema: "fastene",
  },

  // Andre dager knyttet til Herrens høytider
  {
    id: "enkutatash",
    type: "annen",
    dato: { maned: 1, dag: 1 },
    navn: { no: "Nyttår – Johannes døperen", am: "ርእሰ ዐውደ ዓመት (ዕንቁጣጣሽ)" },
    om: {
      no: "Det nye året begynner. Kirka minnes Johannes døperen, og fest- og fastedagene for året blir kunngjort.",
      am: "ርእሰ ዐውደ ዓመት ቅዱስ ዮሐንስ፤ የዓመቱ በዓላትና አጽዋማት የሚታወጁበት።",
    },
  },
  {
    id: "demera",
    type: "annen",
    dato: { maned: 1, dag: 16 },
    navn: { no: "Bålet kvelden før korsfesten", am: "ደመራ" },
    om: {
      no: "Kvelden før መስቀል tennes et stort bål med bønn og lovsang.",
      am: "በመስቀል ዋዜማ ደመራ ተደምሮ በጸሎትና በምስጋና ይለኮሳል።",
    },
  },
  {
    id: "ketera",
    type: "annen",
    dato: { maned: 5, dag: 10 },
    navn: { no: "Kvelden før Jesu dåp", am: "ከተራ" },
    om: {
      no: "ታቦታት bæres i prosesjon ut til vann. Dagen er også fastedagen ጾመ ገሃድ.",
      am: "ታቦታት ወደ ጥምቀተ ባሕር የሚወርዱበት የጥምቀት ዋዜማ፤ ጾመ ገሃድም ነው።",
    },
    tema: "daapen",
  },
  {
    id: "tselot-hamus",
    type: "annen",
    dato: { flyttbar: "tselotHamus" },
    navn: { no: "Skjærtorsdag", am: "ጸሎተ ሐሙስ" },
    om: {
      no: "Jesus vasker disiplenes føtter og innstifter nattverden.",
      am: "ጌታችን የደቀ መዛሙርቱን እግር ያጠበበትና ምሥጢረ ቍርባንን የመሠረተበት።",
    },
    tema: "nattverden",
  },
  {
    id: "kedam-siur",
    type: "annen",
    dato: { flyttbar: "kedamSiur" },
    navn: { no: "Påskeaften", am: "ቀዳም ሥዑር" },
    om: {
      no: "Den eneste lørdagen i året som er fastedag. Jesus ligger i graven.",
      am: "በዓመት ውስጥ የምትጾም ብቸኛዋ ቅዳሜ፤ ጌታችን በመቃብር ያደረበት።",
    },
  },
  {
    id: "rekbe-kahnat",
    type: "annen",
    dato: { flyttbar: "rekbeKahnat" },
    navn: { no: "Prestenes møte", am: "ርክበ ካህናት" },
    om: {
      no: "Onsdagen midt i de 50 dagene etter påske.",
      am: "በሃምሳው ቀናት መካከል ያለች ረቡዕ።",
    },
  },
  {
    id: "selassie-hamle",
    type: "annen",
    dato: { maned: 11, dag: 7 },
    navn: { no: "Treenigheten hos Abraham", am: "ቅድስት ሥላሴ (ሐምሌ ሥላሴ)" },
    om: {
      no: "Treenigheten kom som tre gjester til Abraham.",
      am: "ቅድስት ሥላሴ በአብርሃም ቤት በእንግድነት የገቡበት።",
    },
    tema: "treenigheten",
  },
  {
    id: "selassie-tir",
    type: "annen",
    dato: { maned: 5, dag: 7 },
    navn: { no: "Treenigheten", am: "ቅድስት ሥላሴ (ጥር ሥላሴ)" },
    tema: "treenigheten",
  },

  // Jomfru Maria
  { id: "beata", type: "maria", dato: { maned: 4, dag: 3 }, navn: { no: "Maria føres inn i templet", am: "በዓታ ለማርያም" } },
  {
    id: "kusquam",
    type: "maria",
    dato: { maned: 3, dag: 6 },
    navn: { no: "Qusqam – flukten til Egypt", am: "ቁስቋም (ደብረ ቁስቋም)" },
    om: {
      no: "Vi minnes at Maria, Josef og Jesusbarnet flyktet til Egypt og kom til Qusqam.",
      am: "እመቤታችን ከልጇና ከዮሴፍ ጋር ወደ ግብፅ የተሰደደችበትና ደብረ ቁስቋም የደረሰችበት።",
    },
  },
  {
    id: "hidar-tsion",
    type: "maria",
    dato: { maned: 3, dag: 21 },
    navn: { no: "Maria og paktens ark (Sion)", am: "ኅዳር ጽዮን" },
    om: {
      no: "Vi minnes undrene ved paktens ark (ታቦተ ጽዮን), som er et bilde på Maria.",
      am: "በታቦተ ጽዮን የተፈጸሙ ተአምራት የሚታሰቡበት የእመቤታችን ዓመታዊ በዓል።",
    },
  },
  {
    id: "erefta",
    type: "maria",
    dato: { maned: 5, dag: 21 },
    navn: { no: "Marias hvile", am: "ዕረፍታ ለማርያም" },
    om: { no: "Minnet om at Maria døde.", am: "የእመቤታችን የዕረፍቷ መታሰቢያ።" },
  },
  {
    id: "kidane-mihret",
    type: "maria",
    dato: { maned: 6, dag: 16 },
    navn: { no: "Barmhjertighetspakten", am: "ኪዳነ ምሕረት" },
    om: {
      no: "Vi minnes pakten Jesus gav sin mor: han viser barmhjertighet mot dem som ber i hennes navn.",
      am: "ጌታችን ለእናቱ የሰጣት የምሕረት ቃል ኪዳን የሚታሰብበት።",
    },
  },
  { id: "ledeta", type: "maria", dato: { maned: 9, dag: 1 }, navn: { no: "Marias fødsel", am: "ልደታ ለማርያም" } },
  {
    id: "debre-mitmak",
    type: "maria",
    dato: { maned: 9, dag: 21 },
    navn: { no: "Maria viser seg i Debre Mitmak", am: "ደብረ ምጥማቅ" },
    om: {
      no: "Minnet om at Maria viste seg ved kirka hennes i Mitmak i Egypt.",
      am: "እመቤታችን በግብፅ በደብረ ምጥማቅ የተገለጠችበት።",
    },
  },
  { id: "tsenseta", type: "maria", dato: { maned: 12, dag: 7 }, navn: { no: "Maria blir unnfanget", am: "ጽንሰታ ለማርያም" } },
  {
    id: "filseta",
    type: "maria",
    dato: { maned: 12, dag: 16 },
    navn: { no: "Marias oppstandelse og opptakelse", am: "ፍልሰታ ለማርያም" },
    om: {
      no: "Marias kropp ble tatt opp til himmelen. Apostlene fastet i to uker før de fikk se henne – derfor ጾመ ፍልሰታ.",
      am: "የእመቤታችን ትንሣኤና ዕርገት፤ ሐዋርያት ሁለት ሱባኤ ጾመው ያዩበት።",
    },
    tema: "fastene",
  },

  // Englene
  {
    id: "hidar-mikael",
    type: "engel",
    dato: { maned: 3, dag: 12 },
    navn: { no: "Erkeengelen Mikael", am: "ኅዳር ሚካኤል" },
    om: { no: "Dagen Mikael ble satt over englene.", am: "ቅዱስ ሚካኤል የመላእክት አለቃ ሆኖ የተሾመበት።" },
  },
  { id: "sene-mikael", type: "engel", dato: { maned: 10, dag: 12 }, navn: { no: "Erkeengelen Mikael", am: "ሰኔ ሚካኤል" } },
  {
    id: "tahsas-gabriel",
    type: "engel",
    dato: { maned: 4, dag: 19 },
    navn: { no: "Erkeengelen Gabriel", am: "ታኅሣሥ ገብርኤል" },
    om: { no: "Gabriel reddet de tre unge mennene i ildovnen.", am: "ቅዱስ ገብርኤል ሠለስቱ ደቂቅን ከእሳት ያዳነበት።" },
  },
  {
    id: "hamle-gabriel",
    type: "engel",
    dato: { maned: 11, dag: 19 },
    navn: { no: "Gabriel, Kirkos og Julitta", am: "ሐምሌ ገብርኤል (ቂርቆስና ኢየሉጣ)" },
    om: {
      no: "Gabriel hjalp det lille barnet Kirkos og moren hans Julitta, som ikke ville tilbe avgudene.",
      am: "ቅዱስ ገብርኤል ሕፃኑን ቂርቆስንና እናቱን ኢየሉጣን የረዳበት።",
    },
  },
  { id: "pagume-rufael", type: "engel", dato: { maned: 13, dag: 3 }, navn: { no: "Erkeengelen Rafael", am: "ጳጉሜን ሩፋኤል" } },

  // Helgenene
  {
    id: "tekle-haymanot-ledet",
    type: "helgen",
    dato: { maned: 4, dag: 24 },
    navn: { no: "Abune Tekle Haymanots fødsel", am: "ልደተ አቡነ ተክለ ሃይማኖት" },
  },
  {
    id: "giyorgis",
    type: "helgen",
    dato: { maned: 8, dag: 23 },
    navn: { no: "Den hellige Georg", am: "ቅዱስ ጊዮርጊስ" },
    om: { no: "Martyren Georg dør for troen.", am: "የሊቀ ሰማዕታት ቅዱስ ጊዮርጊስ የሰማዕትነቱ ፍጻሜ።" },
  },
  {
    id: "yared",
    type: "helgen",
    dato: { maned: 9, dag: 11 },
    navn: { no: "Den hellige Jared", am: "ቅዱስ ያሬድ" },
    om: {
      no: "Minnet om den hellige Jared, som skrev kirkas hymner og melodier.",
      am: "የዜማ አባት ቅዱስ ያሬድ የተሰወረበት ዕለት።",
    },
  },
  {
    id: "petros-pawlos",
    type: "helgen",
    dato: { maned: 11, dag: 5 },
    navn: { no: "Apostlene Peter og Paulus", am: "ጴጥሮስ ወጳውሎስ" },
    om: {
      no: "Peter og Paulus døde som martyrer i Roma. ጾመ ሐዋርያት slutter dagen før.",
      am: "ቅዱስ ጴጥሮስና ቅዱስ ጳውሎስ በሰማዕትነት ያረፉበት፤ የጾመ ሐዋርያት መፈጸሚያ።",
    },
  },
  {
    id: "tekle-haymanot",
    type: "helgen",
    dato: { maned: 12, dag: 24 },
    navn: { no: "Abune Tekle Haymanot", am: "አቡነ ተክለ ሃይማኖት" },
    om: { no: "Minnet om at Abune Tekle Haymanot døde.", am: "የአቡነ ተክለ ሃይማኖት የዕረፍታቸው መታሰቢያ።" },
  },
];

export const FASTER: Faste[] = [
  { id: "nebiyat", navn: { no: "Profetfasten (før jul)", am: "ጾመ ነቢያት" } },
  { id: "gehad", navn: { no: "Fasten før Jesu dåp", am: "ጾመ ገሃድ (ጋድ)" } },
  { id: "nenewe", navn: { no: "Ninive-fasten", am: "ጾመ ነነዌ" } },
  { id: "abiy", navn: { no: "Den store fasten", am: "ዐቢይ ጾም (ሁዳዴ)" } },
  { id: "hawaryat", navn: { no: "Apostelfasten", am: "ጾመ ሐዋርያት" } },
  { id: "filseta", navn: { no: "Mariafasten", am: "ጾመ ፍልሰታ" } },
  { id: "dihnet", navn: { no: "Onsdag og fredag", am: "ጾመ ድኅነት" } },
];

// Minnedagene i hver måned (ወርኃዊ በዓላት), etter ethiopianorthodox.org (werawi bealat.pdf).
export const MANEDLIGE: Minnedag[] = [
  { dag: 1, navn: { no: "Marias fødsel, erkeengelen Raguel, profeten Elia", am: "ልደታ፣ ራጉኤል፣ ኤልያስ" } },
  { dag: 2, navn: { no: "Apostelen Taddeus, den rettferdige Job", am: "ታዴዎስ ሐዋርያ፣ ኢዮብ ጻድቅ" } },
  { dag: 3, navn: { no: "Maria i templet, Abune Zena Markos", am: "በዓታ ማርያም፣ ዜና ማርቆስ" } },
  { dag: 4, navn: { no: "Apostelen Johannes, «tordenens sønn»", am: "ዮሐንስ ወልደ ነጎድጓድ" } },
  { dag: 5, navn: { no: "Peter og Paulus, Abune Gebre Menfes Kidus", am: "ጴጥሮስ ወጳውሎስ፣ አቡነ ገብረ መንፈስ ቅዱስ" } },
  { dag: 6, navn: { no: "Jesus, Qusqam (Maria), den hellige Arsema", am: "ኢየሱስ፣ ቁስቋም፣ አርሴማ ቅድስት" } },
  { dag: 7, navn: { no: "Den hellige treenighet", am: "ሥላሴ" } },
  { dag: 8, navn: { no: "Matteus, Abba Kiros", am: "ማቴዎስ፣ አባ ኪሮስ" } },
  { dag: 9, navn: { no: "Apostlene Tomas og Andreas", am: "ቶማስ ሐዋርያ፣ እንድርያስ ሐዋርያ" } },
  { dag: 10, navn: { no: "Herrens kors", am: "በዓለ መስቀሉ ለእግዚእነ" } },
  { dag: 11, navn: { no: "Anna og Joakim, martyren Fasiledes", am: "ሃና ወኢያቄም፣ ቅዱስ ፋሲለደስ ሰማዕት" } },
  { dag: 12, navn: { no: "Erkeengelen Mikael, Kristos Semra", am: "ቅዱስ ሚካኤል፣ ክርስቶስ ሠምራ" } },
  { dag: 13, navn: { no: "Gud Fader, erkeengelen Rafael", am: "እግዚአብሔር አብ፣ ቅዱስ ሩፋኤል" } },
  { dag: 14, navn: { no: "Abba Aregawi, Abba Gebre Kristos", am: "አባ አረጋዊ፣ አባ ገብረ ክርስቶስ" } },
  { dag: 15, navn: { no: "Kirkos og Julitta", am: "ቂርቆስና ኢየሉጣ" } },
  { dag: 16, navn: { no: "Barmhjertighetspakten (Maria)", am: "ኪዳነ ምሕረት" } },
  { dag: 17, navn: { no: "Den hellige Stefanus", am: "ቅዱስ እስጢፋኖስ" } },
  { dag: 18, navn: { no: "Apostelen Filip, Ewostatewos", am: "ፊልጶስ ሐዋርያ፣ ኤዎስጣጤዎስ" } },
  { dag: 19, navn: { no: "Erkeengelen Gabriel", am: "ቅዱስ ገብርኤል" } },
  { dag: 20, navn: { no: "Maria blir unnfanget, profetene Elisja og Haggai, Abba Selama", am: "ጽንሰታ ለማርያም፣ ነቢዩ ኤልሳ፣ ሐጌ ነቢይ፣ አባ ሰላማ" } },
  { dag: 21, navn: { no: "Jomfru Maria", am: "በዓለ እግዝእትነ ማርያም" } },
  { dag: 22, navn: { no: "Erkeengelen Uriel", am: "ቅዱስ ዑራኤል" } },
  { dag: 23, navn: { no: "Den hellige Georg", am: "ቅዱስ ጊዮርጊስ" } },
  { dag: 24, navn: { no: "Abune Tekle Haymanot", am: "አቡነ ተክለ ሃይማኖት" } },
  { dag: 25, navn: { no: "Martyren Merkurios", am: "መርቆሬዎስ" } },
  { dag: 26, navn: { no: "Profeten Hosea", am: "ሆሴዕ ነቢይ" } },
  { dag: 27, navn: { no: "Verdens frelser (Jesu død på korset)", am: "መድኃኔ ዓለም" } },
  { dag: 28, navn: { no: "Immanuel, keiser Konstantin, Abraham", am: "አማኑኤል፣ ቆስጠንጢኖስ፣ አብርሃም" } },
  { dag: 29, navn: { no: "Sønnens fest (Jesu fødsel)", am: "በዓለ ወልድ" } },
  { dag: 30, navn: { no: "Evangelisten Markus", am: "ማርቆስ ወንጌላዊ" } },
];
