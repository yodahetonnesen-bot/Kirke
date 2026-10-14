import type { Tema } from "./typer";

// Bygger på kirkas egen historieskriving:
// ethiopianorthodox.org: Sergew Hable Sellassie og Tadesse Tamerat, «The Church of Ethiopia – A Panorama of History
// and Spiritual Life» (EOTC, Addis Abeba 1970): «The Introduction of Christianity», «A Period of Conflict» /
// «Revival of the Church», «Persecution and Religious Controversies» / «The Period of Reorganization»;
// P.K. Matthew, «The Hierarchy»; «The Oriental Orthodox Churches Addis Ababa Conference, January 1965»;
// fotogalleriets sider om patriarkene (Abune Tewophilos) og om Abune Petros.
// Mahibere Kidusan (eotcmk.org): «የቃል ኪዳኑ ታቦት» (etter ክብረ ነገሥት), «ኢትዮጵያ እጆቿን ወደ እግዚአብሔር ትዘረጋለች»,
// «ጽዮንን ክበቧት» (etter Dn. Daniel Kibret, «የቤተ ክርስቲያን መረጃዎች»), «የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በዝርወት»
// del 1 og 2 (Dn. Dr. Mersha Alehegn), «አባ ገሪማ ዘመደራ», «ኢትዮጵያዊው ቅዱስ ያሬድ», «በእንተ ዕረፍቱ ለተክለ ሃይማኖት»,
// MK-utstillingen i Addis Abeba 2016 (oversikt over kirkas historie), «ሰማዕቱ ብፁዕ አቡነ ሚካኤል መታሰቢያ ሐውልት»,
// «ሰበካ መንፈሳዊ ጉባኤ ከትናንት እስከ ዛሬ» (etter Abune Gorgorios II, «የኢ.ኦ.ተ.ቤ.ክ. ታሪክ»), «የሕንዱ ፓትርያርክ ...».
//
// Usikkert: Årstallene for dronningen av Saba og Menelik (omkring 900 f.Kr.) er kirkas tradisjon (ክብረ ነገሥት,
// Daniel Kibret). Historikerne i EOTC-boka fra 1970 skriver at ክብረ ነገሥት ble satt sammen på 1200-tallet.
// Vi skriver derfor dette tydelig som tradisjon.
// Usikkert: Kirkemøtet i Boru Meda: ethiopianorthodox.org (Sergew Hable Sellassie) sier 1878. MK-utstillingen
// oppgir «ግንቦት ፳፩ ቀን ፲፰፻፸፭ ዓ.ም». Vi følger 1878, som er det vanlige årstallet.
// Usikkert: MK-utstillingen plasserer Ahmed Gragn i «1600- og 1700-tallet», men EOTC-boka fra 1970 sier 1531–1543.
// Vi følger EOTC-boka.
// Usikkert: Kirkemøtet om de to sabbatene i Debre Mitmaq er i MK oppgitt som «፲፬፻፶ ዓ.ም». Vi skriver «omkring 1450».
// Usikkert: Kildene gir ingen sikre årstall for kong Kaleb og kong Lalibela; vi skriver «500-tallet» og «omkring 1200».
// Usikkert: Abune Petros: kildene sier at han ble drept av de italienske fascistene i Addis Abeba i 1936 (፲፱፻፳፰ ዓ.ም),
// men vi fant ikke den nøyaktige datoen i en EOTC-kilde. At han nektet å velsigne okkupasjonen, fant vi ikke ordrett.
// Usikkert: For Abune Tewophilos fant vi i EOTC-kildene bare at han var den andre patriarken, var «ሰማዕቱ», og ble drept
// av Derg i juli 1979. At han ble arrestert i 1976, står bare i ikke-kirkelige kilder, så det er ikke tatt med.
// Usikkert: Antall kirker i Norge (to) er fra MK i 2013 og kan være utdatert.
// Merk: Yared-siden i «Kirkemusikk»-delen er ikke lenket, bare nevnt i teksten.
export const kirkehistorie: Tema = {
  slug: "kirkehistorie",
  del: "historie",
  tittel: { no: "Kirkas historie", am: "የቤተ ክርስቲያን ታሪክ" },
  undertittel: {
    no: "Fra dronningen av Saba til kirka i Norge",
    am: "ከንግሥተ ሳባ እስከ ኖርዌይ ቤተ ክርስቲያን",
  },
  bilde: "ewostatewos",
  ingress: {
    no:
      "Etiopia kjente Gud lenge før Kristus kom. Kirka vår er en av de eldste kirkene i verden. Her går vi gjennom historien, periode for periode: hva som skjedde, og hvorfor det betyr noe for oss i dag. Vi skiller mellom det historikerne kan vise, og det kirkas tradisjon forteller.",
    am:
      "ኢትዮጵያ ክርስቶስ ከመምጣቱ ብዙ ዘመን በፊት እግዚአብሔርን ታውቅ ነበር። ቤተ ክርስቲያናችን በዓለም ካሉ ጥንታውያን አብያተ ክርስቲያናት አንዷ ናት። በዚህ ገጽ ታሪኳን በየዘመኑ እንመለከታለን፤ ምን እንደ ሆነና ለዛሬው ሕይወታችን ለምን እንደሚጠቅም እናያለን። በታሪክ የተረጋገጠውንና ቤተ ክርስቲያን በትውፊት የምትነግረውን ለይተን እናቀርባለን።",
  },
  hovedvers: "Ps 68:32",
  avsnitt: [
    {
      id: "saba",
      tittel: {
        no: "Før Kristus: Dronningen av Saba og paktens ark (tradisjon)",
        am: "ከክርስቶስ ልደት በፊት፤ ንግሥተ ሳባና ታቦተ ጽዮን (ትውፊት)",
      },
      ingress: {
        no: "Bibelen forteller at dronningen av Saba besøkte kong Salomo. Resten av historien står i kirkas bok ክብረ ነገሥት («Kongenes ære»). Det er kirkas tradisjon, ikke noe historikerne kan bevise.",
        am: "ንግሥተ ሳባ ንጉሥ ሰሎሞንን እንደ ጎበኘች መጽሐፍ ቅዱስ ይነግረናል። የቀረውን ታሪክ መጽሐፈ ክብረ ነገሥት ይተርከዋል። ይህ የቤተ ክርስቲያን ትውፊት ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "Dronningen av Saba hørte om kong Salomos visdom. Hun reiste til Jerusalem og prøvde ham med vanskelige spørsmål, og han svarte på alt. Jesus sa selv at «dronningen fra Syden» kom fra jordens ende for å høre Salomos visdom. Kirka vår kaller henne ንግሥተ ሳባ eller ንግሥተ አዜብ.",
            am: "ንግሥተ ሳባ የንጉሥ ሰሎሞንን ጥበብ ሰማች። ወደ ኢየሩሳሌም ሄዳ በእንቆቅልሽ ፈተነችው፤ እርሱም ሁሉን መለሰላት። ጌታችንም «ንግሥተ ዓዜብ የሰሎሞንን ጥበብ ለመስማት ከምድር ዳር መጥታለች» ብሎ መሰከረላት። ቤተ ክርስቲያናችን ንግሥተ ሳባ ወይም ንግሥተ አዜብ ብላ ትጠራታለች።",
          },
          vers: ["1Kgs 10:1-3", "1Kgs 10:9", "Matt 12:42"],
        },
        {
          tekst: {
            no: "Tradisjon: ክብረ ነገሥት forteller at dronningen fikk en sønn med Salomo, ቀዳማዊ ምኒልክ (Menelik I). Da han var 22 år, reiste han til sin far i Jerusalem. Da han dro hjem, tok Asarja (አዛርያስ), sønn av øverstepresten Sadok, og prestene med seg paktens ark, ታቦተ ጽዮን, til Etiopia.",
            am: "ትውፊት፤ መጽሐፈ ክብረ ነገሥት እንደሚለው ንግሥተ ሳባ ከሰሎሞን ቀዳማዊ ምኒልክን ወለደች። ምኒልክ ፳፪ ዓመት ሲሞላው አባቱን ለማየት ወደ ኢየሩሳሌም ሄደ። ወደ ሀገሩ ሲመለስም አዛርያስና ካህናቱ ታቦተ ጽዮንን ይዘው ወደ ኢትዮጵያ መጡ።",
          },
        },
        {
          tekst: {
            no: "Tradisjon: Etter dette fulgte Etiopia Moseloven (ሕገ ኦሪት). Kirka sier at arken fortsatt er i Aksum, i kirka ጽዮን ማርያም. Derfor feirer vi ኅዳር ጽዮን hvert år den 21. ኅዳር, og derfor har hver kirke en ታቦት.",
            am: "ትውፊት፤ ከዚህ በኋላ ኢትዮጵያ በሕገ ኦሪት ተመራች። ታቦተ ጽዮን ዛሬም በአክሱም ጽዮን ማርያም እንዳለች ቤተ ክርስቲያን ታስተምራለች። ስለዚህ በየዓመቱ ኅዳር ፳፩ ቀን በዓለ ጽዮንን እናከብራለን፤ በየአብያተ ክርስቲያናቱም ታቦት ይኖራል።",
          },
          andre: [
            {
              no: "ክብረ ነገሥት (Kongenes ære), oversatt av Sirgiw Gelaw, s. 21–55 (gjengitt av Mahibere Kidusan)",
              am: "ክብረ ነገሥት፣ ተርጓሚ ሥርግው ገላው፣ ገጽ ፳፩–፶፭",
            },
          ],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Historien viser at Etiopia lette etter Gud og visdom lenge før evangeliet kom. Profetene nevner Etiopia flere ganger. «Etiopia skal rekke ut sine hender til Gud.»",
            am: "ለዛሬ የሚያስተምረን፤ ኢትዮጵያ ወንጌል ከመምጣቱ በፊት እግዚአብሔርንና ጥበብን ትፈልግ ነበር። ነቢያትም ኢትዮጵያን ብዙ ጊዜ ጠቅሰዋታል፤ «ኢትዮጵያ እጆችዋን ወደ እግዚአብሔር ትዘረጋለች።»",
          },
          vers: ["Ps 68:32", "Zeph 3:10", "Ps 87:4"],
        },
      ],
    },
    {
      id: "hoffmannen",
      tittel: {
        no: "Apostlenes tid: Hoffmannen fra Etiopia",
        am: "በሐዋርያት ዘመን፤ ኢትዮጵያዊው ጃንደረባ",
      },
      punkter: [
        {
          tekst: {
            no: "Apostlenes gjerninger 8 forteller om en etiopisk hoffmann (ጃንደረባው). Han styrte hele skatten til dronning Kandake (ሕንደኬ). Han hadde vært i Jerusalem for å tilbe Gud og leste i profeten Jesaja på vei hjem.",
            am: "የሐዋርያት ሥራ ምዕራፍ ፰ ስለ ኢትዮጵያዊው ጃንደረባ ይነግረናል። እርሱ ህንደኬ በተባለች የኢትዮጵያ ንግሥት ገንዘብ ሁሉ ላይ የተሾመ ነበር። ለመስገድ ወደ ኢየሩሳሌም ሄዶ ሲመለስ የነቢዩ ኢሳይያስን መጽሐፍ ያነብ ነበር።",
          },
          vers: ["Acts 8:26-28"],
        },
        {
          tekst: {
            no: "Diakonen Filip forklarte ham at Jesaja talte om Jesus. Hoffmannen trodde og ble døpt i vannet ved veien. Så reiste han hjem full av glede.",
            am: "ዲያቆኑ ፊልጶስ ትንቢቱ ስለ ኢየሱስ እንደ ተነገረ ተረጎመለት። ጃንደረባውም አመነ፤ በመንገድ ዳር ባለው ውኃ ተጠመቀ፤ ደስ እያለውም ወደ ሀገሩ ሄደ።",
          },
          vers: ["Acts 8:35-39"],
        },
        {
          tekst: {
            no: "Tradisjon: Kirka forteller at hoffmannen forkynte Kristus i Etiopia. Den hellige Johannes Krysostomos skrev også at det var etiopiere i Jerusalem på pinsedagen. Kirka vår tror at Etiopia tok imot Kristus uten at en apostel måtte dø der.",
            am: "ትውፊት፤ ጃንደረባው ወደ ሀገሩ ተመልሶ ክርስቶስን እንደ ሰበከ ቤተ ክርስቲያን ታስተምራለች። ቅዱስ ዮሐንስ አፈወርቅም በበዓለ ሃምሳ ዕለት በኢየሩሳሌም ኢትዮጵያውያን እንደ ነበሩ መስክሯል። ኢትዮጵያ የሐዋርያ ደም ሳይፈስ ክርስትናን እንደ ተቀበለች ቤተ ክርስቲያናችን ታምናለች።",
          },
          vers: ["Acts 2:5", "Acts 1:8"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Hoffmannen leste Bibelen, spurte når han ikke forstod, og lot seg døpe. Slik skal også vi lese, spørre og leve etter troen.",
            am: "ለዛሬ የሚያስተምረን፤ ጃንደረባው መጻሕፍትን አነበበ፤ ያልገባውን ጠየቀ፤ ተጠመቀም። እኛም እንዲሁ ማንበብ፣ መጠየቅና በእምነት መኖር ይገባናል።",
          },
          vers: ["Acts 8:30-31"],
        },
      ],
    },
    {
      id: "aksum",
      tittel: {
        no: "Omkring 330: Aksum, kong Ezana og Abba Selama",
        am: "በ፬ኛው መቶ ክፍለ ዘመን (፫፻፴ ገደማ)፤ አክሱም፣ ንጉሥ ኢዛናና አባ ሰላማ ከሣቴ ብርሃን",
      },
      punkter: [
        {
          tekst: {
            no: "To kristne gutter fra Tyros, Frumentius og Aidesius, kom til kongens hoff i Aksum etter et skipsforlis. Frumentius ble kongens skattmester og skriver. Han samlet de kristne kjøpmennene til bønn og spredte troen. Den unge kongen ble kristen.",
            am: "ፍሬምናጦስና ኤዴስዮስ የተባሉ ሁለት ክርስቲያን ወጣቶች ከጢሮስ መጥተው ወደ አክሱም ቤተ መንግሥት ደረሱ። ፍሬምናጦስ የንጉሡ ገንዘብ ያዥና ጸሐፊ ሆነ። በአክሱም የነበሩ ክርስቲያን ነጋዴዎችን ለጸሎት ሰበሰበ፤ እምነቱንም አስፋፋ። ወጣቱ ንጉሥም ክርስቲያን ሆነ።",
          },
        },
        {
          tekst: {
            no: "Frumentius reiste til Alexandria. Patriark Athanasius (አትናቴዎስ) viet ham til den første biskopen i Etiopia. Folket kalte ham አባ ሰላማ ከሣቴ ብርሃን – «fredens far, han som åpenbarte lyset».",
            am: "ፍሬምናጦስ ወደ እስክንድርያ ሄደ፤ ሊቀ ጳጳሳት ቅዱስ አትናቴዎስም የኢትዮጵያ የመጀመሪያ ጳጳስ አድርጎ ሾመው። ሕዝቡም «አባ ሰላማ ከሣቴ ብርሃን» ብሎ ጠራው፤ የሰላም አባት፣ ብርሃንን የገለጠ ማለት ነው።",
          },
          vers: ["Isa 52:7"],
        },
        {
          tekst: {
            no: "Historie: Kong Ezana sine innskrifter og mynter viser skiftet. De første myntene har månesigd og sol, de senere har korset. En gresk innskrift begynner: «I troen på Gud og i Faderens, Sønnens og Den hellige ånds kraft.» Tradisjon: Kirka kaller de to kongebrødrene አብርሃ ወአጽብሐ (Abreha og Atsbeha) og regner dem som hellige.",
            am: "ታሪክ፤ የንጉሥ ኢዛና ጽሑፎችና ሳንቲሞች ለውጡን ያሳያሉ፤ የቀደሙት ሳንቲሞች የጨረቃና የፀሐይ ምልክት፣ የኋለኞቹ ግን የመስቀል ምልክት አላቸው። አንድ የግሪክ ጽሑፍም «በእግዚአብሔር እምነትና በአብ በወልድ በመንፈስ ቅዱስ ኃይል» ብሎ ይጀምራል። ትውፊት፤ ቤተ ክርስቲያን ሁለቱን ነገሥታት አብርሃ ወአጽብሐ ብላ ትጠራቸዋለች፤ ቅዱሳን ነገሥታትም ትላቸዋለች።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Fra da av fikk kirka vår biskoper fra Alexandria i omkring 1600 år. Kirka holdt fast ved troen fra Nikea (325) og ved Athanasius, selv da en romersk keiser prøvde å få Aksum over til Arius sin vranglære.",
            am: "ለዛሬ የሚያስተምረን፤ ከዚያ ጊዜ ጀምሮ ለ፲፮፻ ዓመታት ያህል ጳጳሳት ከእስክንድርያ ይመጡ ነበር። የሮም ንጉሥ አክሱምን ወደ አርዮስ ኑፋቄ ሊስብ ቢሞክርም ቤተ ክርስቲያናችን በጉባኤ ኒቅያ ሃይማኖትና በቅዱስ አትናቴዎስ ትምህርት ጸንታ ቆመች።",
          },
          vers: ["Heb 13:7-8"],
        },
      ],
    },
    {
      id: "ni-hellige",
      tittel: {
        no: "Omkring 480: De ni hellige (ተስዓቱ ቅዱሳን)",
        am: "በ፭ኛው መቶ ክፍለ ዘመን (፬፻፹ ገደማ)፤ ተስዓቱ ቅዱሳን",
      },
      punkter: [
        {
          tekst: {
            no: "Ni munker kom til Aksum omkring år 480, i kong Ella Amidas tid. De kom fra Romerriket, blant annet fra Syria. De ble forfulgt fordi de ikke ville godta at Kristus har «to naturer» etter kirkemøtet i Kalkedon (451). Kong og folk tok vel imot dem.",
            am: "ዘጠኙ ቅዱሳን በአልአሜዳ ዘመነ መንግሥት በ፬፻፹ ዓ.ም ገደማ ወደ አክሱም መጡ። ከሶርያና ከሌሎች የሮም ግዛቶች የተሰደዱ ነበሩ፤ የተሰደዱትም ከጉባኤ ኬልቄዶን በኋላ የመጣውን «ሁለት ባሕርይ» የሚለውን ትምህርት አንቀበልም በማለታቸው ነው። ንጉሡና ሕዝቡ በፍቅር ተቀበሏቸው።",
          },
        },
        {
          tekst: {
            no: "De ni var: Abba Alef, Abba Aregawi, Abba Afse, Abba Likanos, Abba Gerima, Abba Guba, Abba Yem'ata, Abba Pantalewon og Abba Tsehma. Kirka feirer dem som helgener og lager ታቦት i deres navn.",
            am: "ዘጠኙ ቅዱሳን አባ አሌፍ፣ አባ አረጋዊ፣ አባ አፍጼ፣ አባ ሊቃኖስ፣ አባ ገሪማ፣ አባ ጉባ፣ አባ ይምአታ፣ አባ ጰንጠሌዎን እና አባ ጽሕማ ናቸው። ቤተ ክርስቲያን በስማቸው ጽላት ቀርጻ በዓላቸውን ታከብራለች።",
          },
        },
        {
          tekst: {
            no: "De lærte seg ge'ez og oversatte Bibelen fra gresk og syrisk til ge'ez. Etiopias bibel er en av de eldste bibeloversettelsene i verden. De oversatte også ቄርሎስ (skriftene til Kyrillos av Alexandria om troen), som kirkas lære bygger på.",
            am: "ግእዝን በሚገባ ተምረው ቅዱሳት መጻሕፍትን ከጽርዕና ከሱርስት ወደ ግእዝ ተረጐሙ። የግእዙ መጽሐፍ ቅዱስ በዓለም ካሉ ጥንታውያን ትርጉሞች አንዱ ነው። የቤተ ክርስቲያን ትምህርት የተመሠረተበትን መጽሐፈ ቄርሎስንም ተረጐሙ።",
          },
          vers: ["Acts 2:8", "Acts 2:11"],
        },
        {
          tekst: {
            no: "De grunnla de første klostrene. Abba Aregawi bygde klosteret Debre Damo, Abba Gerima levde i Medera, og Abba Afse gjorde om et gammelt hedensk tempel i Yeha til en kirke. Klostrene ble skoler for hele landet.",
            am: "የመጀመሪያዎቹን ገዳማት መሠረቱ። አባ አረጋዊ ደብረ ዳሞን መሠረቱ፤ አባ ገሪማ በመደራ ኖሩ፤ አባ አፍጼ በይሐ የነበረውን የአረማውያን ቤተ ጣዖት ቤተ ክርስቲያን አደረጉት። ገዳማቱም ለሀገሩ ሁሉ የትምህርት ቤቶች ሆኑ።",
          },
          vers: ["Matt 19:29"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Takket være de ni hellige kan vi høre Guds ord på vårt eget kirkespråk, og klostrene ble begynnelsen på kirkeskolen (አብነት ትምህርት ቤት).",
            am: "ለዛሬ የሚያስተምረን፤ በዘጠኙ ቅዱሳን ድካም የእግዚአብሔርን ቃል በቋንቋችን እንሰማለን፤ ገዳማቱም የአብነት ትምህርት ቤት መጀመሪያ ሆኑ።",
          },
          vers: ["Ps 119:105"],
        },
      ],
    },
    {
      id: "kaleb-yared",
      tittel: {
        no: "500-tallet: Kong Kaleb og ቅዱስ ያሬድ",
        am: "በ፮ኛው መቶ ክፍለ ዘመን፤ ጻድቁ ዐፄ ካሌብና ቅዱስ ያሬድ",
      },
      punkter: [
        {
          tekst: {
            no: "Kong Kaleb dro over Rødehavet til Najran i Sør-Arabia for å redde kristne som ble forfulgt. Han bygde kirker der, og kirka kaller ham ጻድቁ ዐፄ ካሌብ – den rettferdige kong Kaleb.",
            am: "ጻድቁ ዐፄ ካሌብ በናግራን (በዛሬዋ የመን) በአይሁድና በአረማውያን የተሰደዱ ክርስቲያኖችን ለማዳን ቀይ ባሕርን ተሻገረ። በዚያም አብያተ ክርስቲያናትን አሳነጸ።",
          },
          vers: ["John 15:13"],
        },
        {
          tekst: {
            no: "ቅዱስ ያሬድ ble født i Aksum. Kirka lærer at Gud ga ham den hellige sangen etter at han hadde sett englene lovprise Gud. Kong Gebre Meskel (ዐፄ ገብረ መስቀል) og hele hoffet lyttet når han sang. Han ordnet sangen i tre tonearter: ግዕዝ, ዕዝል og ዓራራይ. Les mer på siden om ቅዱስ ያሬድ.",
            am: "ቅዱስ ያሬድ በአክሱም ተወለደ። መላእክትን ሲያመሰግኑ ከሰማ በኋላ እግዚአብሔር ዜማን እንደ ገለጠለት ቤተ ክርስቲያን ታስተምራለች። ዐፄ ገብረ መስቀልና ሠራዊቱ ዜማውን ያዳምጡ ነበር። ዜማውንም በግዕዝ፣ በዕዝልና በዓራራይ ሠራ። ስለ ቅዱስ ያሬድ በሌላው ገጽ ያንብቡ።",
          },
          vers: ["Ps 150:3-5"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Sangen vi hører i ማኅሌት og ቅዳሴ i dag, går tilbake til Yared. Kaleb viser oss at kristne skal hjelpe søsken i troen som lider.",
            am: "ለዛሬ የሚያስተምረን፤ ዛሬ በማኅሌትና በቅዳሴ የምንሰማው ዜማ ከቅዱስ ያሬድ የተገኘ ነው። ዐፄ ካሌብም መከራ የሚደርስባቸውን የእምነት ወንድሞቻችንን መርዳት እንዳለብን ያስተምረናል።",
          },
          vers: ["Gal 6:10"],
        },
      ],
    },
    {
      id: "lalibela",
      tittel: {
        no: "Omkring 1200: Lalibela og fjellkirkene",
        am: "በ፲፪ኛውና በ፲፫ኛው መቶ ክፍለ ዘመን፤ ቅዱስ ላሊበላና ውቅር አብያተ ክርስቲያናት",
      },
      punkter: [
        {
          tekst: {
            no: "Etter at Aksum mistet makten, kom vanskelige tider. Tradisjon: Kirka forteller at en dronning som kalles ዮዲት ጉዲት, brente kirker og bøker og drepte lærde og troende.",
            am: "የአክሱም ኃይል ከደከመ በኋላ አስቸጋሪ ዘመን መጣ። ትውፊት፤ ዮዲት ጉዲት አብያተ ክርስቲያናትንና ቅዱሳት መጻሕፍትን እንዳቃጠለች፣ ሊቃውንትንና ምእመናንን እንደ ገደለች ቤተ ክርስቲያን ታስተምራለች።",
          },
        },
        {
          tekst: {
            no: "Så kom Zagwe-kongene fra Lasta. Fire av dem regner kirka som hellige konger: ይምርሃነ ክርስቶስ, ገብረ ማርያም (ሐርቤ), ላሊበላ og ነአኵቶ ለአብ. Byen der de bodde, het Adefa. I dag heter den Lalibela.",
            am: "ከዚያ በኋላ የዛጔ ነገሥታት ከላስታ ተነሡ። ቤተ ክርስቲያን ከእነርሱ አራቱን ቅዱሳን ነገሥታት ትላቸዋለች፤ ይምርሃነ ክርስቶስ፣ ገብረ ማርያም (ሐርቤ)፣ ላሊበላና ነአኵቶ ለአብ። መናገሻቸው አደፋ ትባል ነበር፤ ዛሬ ላሊበላ ትባላለች።",
          },
        },
        {
          tekst: {
            no: "Kong Lalibela lot hogge ut kirker i ett stykke fra fjellet. De står der fortsatt, og prester ber og feirer ቅዳሴ i dem hver dag. Historikerne i kirka skriver at byggekunsten bygger på arven fra Aksum.",
            am: "ቅዱስ ላሊበላ ከአንድ ዐለት የተፈለፈሉ አብያተ ክርስቲያናትን አሳነጸ። እስከ ዛሬ ቆመው ካህናት ይጸልዩባቸዋል፤ ይቀድሱባቸዋልም። የሕንጻ ጥበባቸው ከአክሱም የተወረሰ መሆኑን የቤተ ክርስቲያን የታሪክ ሊቃውንት ይገልጻሉ።",
          },
          vers: ["Matt 16:18", "Heb 11:38"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Hvert år til jul (ገና) samles pilegrimer fra hele verden i Lalibela. Der feires Kristi fødsel sammen med minnet om kong Lalibelas fødsel, med sangen «ቤዛ ኩሉ ዓለም».",
            am: "ለዛሬ የሚያስተምረን፤ በየዓመቱ በገና በዓል ከዓለም ሁሉ ምእመናን ወደ ላሊበላ ይጓዛሉ። በዚያ የጌታችን ልደትና የቅዱስ ላሊበላ ልደት በአንድነት ይከበራል፤ «ቤዛ ኩሉ ዓለም» የተባለውም ቀለም ይዜማል።",
          },
          vers: ["Luke 2:10-11"],
        },
      ],
    },
    {
      id: "tekle-haymanot",
      tittel: {
        no: "1200- og 1300-tallet: Tekle Haymanot og Debre Libanos",
        am: "በ፲፫ኛውና በ፲፬ኛው መቶ ክፍለ ዘመን፤ አቡነ ተክለ ሃይማኖትና ደብረ ሊባኖስ",
      },
      punkter: [
        {
          tekst: {
            no: "Omkring 1248 åpnet munken Iyesus Mo'a (ኢየሱስ ሞዐ) en klosterskole på øya i Hayq-sjøen. Skolen ble berømt, og mange kom for å lære der.",
            am: "በ፲፪፻፵፰ (እ.ኤ.አ.) ገደማ አቡነ ኢየሱስ ሞዐ በሐይቅ ደሴት በቅዱስ እስጢፋኖስ ቤተ ክርስቲያን ገዳምና ትምህርት ቤት ከፈቱ። ብዙዎችም ለመማር ወደዚያ ሄዱ።",
          },
        },
        {
          tekst: {
            no: "En av elevene var Tekle Haymanot fra Shewa. Han lærte hos Iyesus Mo'a i omkring ni år og ble munk. Så var han over ti år i de gamle klostrene i Tigray, blant annet Debre Damo. Deretter grunnla han klosteret Debre Libanos i Shewa. Han døde i 1313.",
            am: "ከደቀ መዛሙርቱ አንዱ ከሸዋ የመጡት አቡነ ተክለ ሃይማኖት ናቸው። ከአቡነ ኢየሱስ ሞዐ ዘንድ ዘጠኝ ዓመት ያህል ተምረው መነኰሱ። ከዚያም በትግራይ በደብረ ዳሞና በሌሎች ጥንታውያን ገዳማት ከዐሥር ዓመት በላይ ቆዩ። ወደ ሸዋ ተመልሰውም ደብረ ሊባኖስን መሠረቱ። በ፲፫፻፲፫ (እ.ኤ.አ.) ዐረፉ።",
          },
          vers: ["Matt 28:19-20"],
        },
        {
          tekst: {
            no: "Debre Libanos ble et av de viktigste stedene i kirka. Munkene som fulgte ham, kalles «Tekle Haymanots hus» (ቤተ ተክለ ሃይማኖት). Vi feirer at han gikk bort, den 24. ነሐሴ.",
            am: "ደብረ ሊባኖስ በቤተ ክርስቲያን ታላቅ ማእከል ሆነ። የእርሳቸውን መንገድ የተከተሉ መነኮሳት ቤተ ተክለ ሃይማኖት ይባላሉ። የዕረፍታቸው በዓል ነሐሴ ፳፬ ቀን ይከበራል።",
          },
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Tekle Haymanot forkynte evangeliet for folk som ikke kjente Kristus. Han viser oss at én person som ber og lærer, kan forandre et helt land.",
            am: "ለዛሬ የሚያስተምረን፤ አቡነ ተክለ ሃይማኖት ክርስቶስን ለማያውቁ ሰዎች ወንጌልን ሰበኩ። በጸሎትና በትምህርት የጸና አንድ ሰው ብዙዎችን ሊለውጥ እንደሚችል ያሳዩናል።",
          },
          vers: ["Rom 10:15"],
        },
      ],
    },
    {
      id: "ewostatewos",
      tittel: {
        no: "1300-tallet: Ewostatewos og de to sabbatene",
        am: "በ፲፬ኛው መቶ ክፍለ ዘመን፤ አቡነ ኤዎስጣቴዎስና ሁለቱ ሰንበታት",
      },
      punkter: [
        {
          tekst: {
            no: "Abba Ewostatewos kom fra Tigray. Han lærte i klosteret til onkelen sin og ble en stor lærer med mange elever. Han lærte at vi skal holde både lørdagen (ቀዳሚት ሰንበት) og søndagen (ሰንበተ ክርስቲያን) hellige, slik Bibelen sier om sabbaten.",
            am: "አቡነ ኤዎስጣቴዎስ የትግራይ ሰው ነበሩ። በአጎታቸው ገዳም ተምረው ብዙ ደቀ መዛሙርት ያሏቸው መምህር ሆኑ። ቀዳሚት ሰንበትና ሰንበተ ክርስቲያን ሁለቱም እንዲከበሩ አስተማሩ።",
          },
          vers: ["Exod 20:8", "Gen 2:3", "Mark 2:27-28"],
        },
        {
          tekst: {
            no: "Andre i kirka var uenige og forfulgte ham. Han reiste med noen elever til Egypt, Jerusalem, Kypros og Armenia. Han døde i Armenia i 1352, etter 14 år i utlendighet. Elevene kom hjem og grunnla mange klostre. De kalles «Ewostatewos' hus» (ቤተ ኤዎስጣቴዎስ).",
            am: "በዘመኑ የነበሩ አንዳንዶች ተቃወሟቸው፤ አሳደዷቸውም። ከደቀ መዛሙርታቸው ጋር ወደ ግብፅ፣ ኢየሩሳሌም፣ ቆጵሮስና አርመን ተጓዙ። ከ፲፬ ዓመት ስደት በኋላ በአርመን ዐረፉ። ደቀ መዛሙርታቸው ወደ ሀገር ተመልሰው ብዙ ገዳማትን መሠረቱ፤ ቤተ ኤዎስጣቴዎስ ይባላሉ።",
          },
          vers: ["Matt 5:10"],
        },
        {
          tekst: {
            no: "Omkring 1450 kalte kong Zara Yaqob sammen et kirkemøte i Debre Mitmaq. Der ble det bestemt at begge sabbatene skal holdes like hellige. Slik ble striden mellom de to klosterhusene løst.",
            am: "በ፲፬፻፶ ዓ.ም ገደማ ዐፄ ዘርዐ ያዕቆብ በደብረ ምጥማቅ ጉባኤ ሰበሰቡ። ሁለቱም ሰንበታት እኩል ይከበሩ ተብሎ ተወሰነ፤ በቤተ ኤዎስጣቴዎስና በቤተ ተክለ ሃይማኖት መካከል የነበረው አለመግባባትም ተፈታ።",
          },
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Derfor holder vi i dag både lørdag og søndag som hviledager og faster ikke til middag på disse dagene (bortsett fra påskeaftens lørdag).",
            am: "ለዛሬ የሚያስተምረን፤ ስለዚህ ዛሬ ቀዳሚት ሰንበትንና እሑድን እናከብራለን፤ በእነዚህ ቀናትም (ከቀዳም ሥዑር በቀር) እስከ ቀትር አንጾምም።",
          },
        },
      ],
    },
    {
      id: "zara-yaqob",
      tittel: {
        no: "1434–1468: Kong Zara Yaqob",
        am: "፲፬፻፴፬–፲፬፻፷፰ (እ.ኤ.አ.)፤ ዐፄ ዘርዐ ያዕቆብ",
      },
      punkter: [
        {
          tekst: {
            no: "Kong Zara Yaqob hadde gått på kirkeskolen og var selv en lærd mann. Han skrev egne bøker på ge'ez og arbeidet for at evangeliet skulle forkynnes over hele riket.",
            am: "ዐፄ ዘርዐ ያዕቆብ በአብነት ትምህርት ቤት የተማሩ ሊቅ ነበሩ። በግእዝ መጻሕፍትን ጻፉ፤ ወንጌል በግዛታቸው ሁሉ እንዲሰበክ ደከሙ።",
          },
        },
        {
          tekst: {
            no: "I hans tid levde også store lærere, som ሊቁ አባ ጊዮርጊስ ዘጋሥጫ, som skrev mange av bøkene kirka bruker i bønn og lovsang. Mange bøker ble også oversatt fra arabisk.",
            am: "በዘመናቸው እንደ ሊቁ አባ ጊዮርጊስ ዘጋሥጫ ያሉ ታላላቅ መምህራን ነበሩ፤ ቤተ ክርስቲያን በጸሎትና በምስጋና የምትጠቀምባቸውን ብዙ መጻሕፍት አዘጋጁ። ብዙ መጻሕፍትም ከዐረብኛ ተተረጐሙ።",
          },
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Mange av bøkene vi ber fra i dag, kommer fra denne tida. Den viser at kirka elsker både tro og lærdom.",
            am: "ለዛሬ የሚያስተምረን፤ ዛሬ የምንጸልይባቸው ብዙ መጻሕፍት የተገኙት ከዚህ ዘመን ነው። ቤተ ክርስቲያን እምነትንና ትምህርትን አብራ እንደምትወድ ያሳያል።",
          },
          vers: ["2Tim 3:16-17"],
        },
      ],
    },
    {
      id: "gragn",
      tittel: {
        no: "1531–1543: Ødeleggelsene under Ahmed Gragn",
        am: "፲፭፻፴፩–፲፭፻፵፫ (እ.ኤ.አ.)፤ የግራኝ አሕመድ ወረራ",
      },
      punkter: [
        {
          tekst: {
            no: "Imam Ahmed ibn Ibrahim, som etiopierne kaller ግራኝ አሕመድ, angrep landet med en stor hær. I omkring femten år brente og plyndret de kirker og klostre. Gamle bøker, kors og ikoner gikk tapt. Også kirka ጽዮን ማርያም i Aksum ble brent.",
            am: "ግራኝ አሕመድ በብዙ ሠራዊት ሀገሪቱን ወረረ። ለዐሥራ አምስት ዓመታት ያህል አብያተ ክርስቲያናትንና ገዳማትን አቃጠለ፤ ዘረፈም። ጥንታውያን መጻሕፍት፣ መስቀሎችና ሥዕላት ጠፉ። የአክሱም ጽዮን ቤተ ክርስቲያንም ተቃጠለች።",
          },
          vers: ["Ps 74:7", "Ps 79:1"],
        },
        {
          tekst: {
            no: "Mange ble tvunget til å fornekte troen. Noen valgte heller å dø for Kristus. I 1543 ble Gragn drept, og kong Galawdewos (ዐፄ ገላውዴዎስ) fikk riket tilbake, med hjelp fra portugiserne.",
            am: "ብዙዎች ሃይማኖታቸውን እንዲክዱ ተገደዱ፤ አንዳንዶች ግን ስለ ክርስቶስ መሞትን መረጡ። በ፲፭፻፵፫ (እ.ኤ.አ.) ግራኝ ተገደለ፤ ዐፄ ገላውዴዎስም በፖርቱጋሎች እርዳታ መንግሥቱን መለሱ።",
          },
          vers: ["Rev 2:10"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Kirka ble nesten ødelagt, men reiste seg igjen. Det minner oss om at Jesus har lovet at dødsrikets porter ikke skal få makt over kirka hans.",
            am: "ለዛሬ የሚያስተምረን፤ ቤተ ክርስቲያን ልትጠፋ ተቃርባ ነበር፤ ነገር ግን ዳግመኛ ተነሣች። የሲኦል ደጆች እንደማይችሏት ጌታችን የሰጠውን ተስፋ ያስታውሰናል።",
          },
          vers: ["Matt 16:18", "2Cor 4:8-9"],
        },
      ],
    },
    {
      id: "jesuittene",
      tittel: {
        no: "1600-tallet: Jesuittene, Susenyos og Fasilides – Gondar-tida",
        am: "በ፲፯ኛው መቶ ክፍለ ዘመን፤ ኢየሱሳውያን፣ ዐፄ ሱስንዮስና ዐፄ ፋሲል – የጎንደር ዘመን",
      },
      punkter: [
        {
          tekst: {
            no: "Etter Gragn kom katolske misjonærer fra Portugal, jesuittene. De ville legge kirka vår under paven i Roma. Under kong Susenyos fikk de stor makt, og det førte til strid og mye blodsutgytelse i landet.",
            am: "ከግራኝ ዘመን በኋላ ከፖርቱጋል ኢየሱሳውያን የተባሉ የካቶሊክ መልእክተኞች መጡ። ቤተ ክርስቲያናችንን ከሮሙ ሊቀ ጳጳስ በታች ሊያደርጓት ፈለጉ። በዐፄ ሱስንዮስ ዘመን ሥልጣን አገኙ፤ በዚህም ምክንያት በሀገሪቱ ብዙ ደም ፈሰሰ።",
          },
        },
        {
          tekst: {
            no: "I 1632 ble kong Fasilides (ዐፄ ፋሲል) konge og jaget jesuittene ut av landet. Troen fra fedrene ble gjenreist. Han bygde også opp igjen kirka ጽዮን ማርያም i Aksum.",
            am: "በ፲፮፻፴፪ (እ.ኤ.አ.) ዐፄ ፋሲል ነግሠው ኢየሱሳውያንን ከሀገር አስወጡ። የአባቶች ሃይማኖት ተመለሰ። በግራኝ የተቃጠለችውን የአክሱም ጽዮንንም ዳግመኛ አሠሩ።",
          },
          vers: ["Jude 1:3"],
        },
        {
          tekst: {
            no: "I Gondar-tida ble det bygget mange kirker. Det var en tid med mye lærdom, kirkesang og malerkunst, selv om det også var lange stridigheter om læren.",
            am: "በጎንደር ዘመን ብዙ አብያተ ክርስቲያናት ተሠሩ። የትምህርት፣ የዜማና የሥዕል ዘመን ሆነ፤ ምንም እንኳ ስለ ሃይማኖት ረጅም ክርክር የነበረበት ቢሆንም።",
          },
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Kirka vår holdt fast ved troen den hadde fått, også når mektige folk ville forandre den. Vi skal også holde fast ved det vi har lært.",
            am: "ለዛሬ የሚያስተምረን፤ ኃያላን ሊለውጧት ቢሞክሩም ቤተ ክርስቲያናችን የተቀበለችውን ሃይማኖት ጠበቀች። እኛም የተማርነውን አጥብቀን መያዝ ይገባናል።",
          },
          vers: ["2Thess 2:15"],
        },
      ],
    },
    {
      id: "boru-meda",
      tittel: {
        no: "1800-tallet: Striden om Kristi natur og kirkemøtet i Boru Meda (1878)",
        am: "በ፲፱ኛው መቶ ክፍለ ዘመን፤ የተዋሕዶ ክርክርና የቦሩ ሜዳ ጉባኤ (፲፰፻፸፰ እ.ኤ.አ.)",
      },
      punkter: [
        {
          tekst: {
            no: "Etter jesuittene var det strid i kirka om hvordan Kristus er Gud og menneske. Det oppstod to gale retninger: ቅባት («salving»), som sa at Jesus ble Guds Sønn ved salvingen, og ጸጋ («nåde») eller «de tre fødslene» (ሦስት ልደት).",
            am: "ከኢየሱሳውያን ዘመን በኋላ ስለ ክርስቶስ አምላክነትና ሰውነት ክርክር ተነሣ። ቅባትና ጸጋ (ሦስት ልደት) የተባሉ የተሳሳቱ ትምህርቶች ተነሡ።",
          },
        },
        {
          tekst: {
            no: "Kirkas rette lære heter ተዋሕዶ, som betyr «forening». Guddom og menneskenatur er forent i Kristus, uten å blandes og uten å skilles. Ordet ble menneske.",
            am: "የቤተ ክርስቲያን ትክክለኛ ትምህርት ተዋሕዶ ነው፤ መለኮትና ትስብእት በክርስቶስ ያለ መቀላቀልና ያለ መለያየት ተዋሐዱ ማለት ነው። ቃል ሥጋ ሆነ።",
          },
          vers: ["John 1:14", "1Tim 3:16"],
        },
        {
          tekst: {
            no: "Keiser Tewodros II ga i 1855 påbud om at bare ተዋሕዶ-læren skulle læres. I 1878 kalte keiser Yohannes IV og kong Menelik av Shewa sammen et kirkemøte i Boru Meda i Wollo. Lærere fra hele landet kom. Læren om «de tre fødslene» ble avvist som vranglære, og ተዋሕዶ ble stadfestet.",
            am: "ዐፄ ቴዎድሮስ በ፲፰፻፶፭ (እ.ኤ.አ.) የተዋሕዶ ትምህርት ብቻ እንዲሰበክ አዘዙ። በ፲፰፻፸፰ (እ.ኤ.አ.) ዐፄ ዮሐንስና የሸዋው ንጉሥ ምኒልክ በወሎ በቦሩ ሜዳ ጉባኤ ሰበሰቡ፤ ከሀገሩ ሁሉ ሊቃውንት መጡ። የቅባትና የጸጋ ትምህርት ተረታ፤ ተዋሕዶ ሃይማኖትም ጸና።",
          },
          vers: ["Jude 1:3"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Navnet på kirka vår, «ተዋሕዶ», minner oss om denne troen hver gang vi sier det. Etter Boru Meda bygde Yohannes og Menelik mange kirker, og mange i Wollo ble døpt.",
            am: "ለዛሬ የሚያስተምረን፤ «ተዋሕዶ» የሚለው የቤተ ክርስቲያናችን ስም ይህንን ሃይማኖት ሁልጊዜ ያስታውሰናል። ከቦሩ ሜዳ በኋላ ብዙ አብያተ ክርስቲያናት ተሠሩ፤ በወሎም ብዙዎች ተጠመቁ።",
          },
        },
      ],
    },
    {
      id: "abune-petros",
      tittel: {
        no: "1936: Abune Petros – martyr under den italienske okkupasjonen",
        am: "፲፱፻፳፰ ዓ.ም፤ ሰማዕቱ አቡነ ጴጥሮስ",
      },
      punkter: [
        {
          tekst: {
            no: "I 1929 ble fem etiopiske munker for første gang viet til biskoper i Egypt. En av dem var Abune Petros (አቡነ ጴጥሮስ), som ble biskop for Øst-Etiopia.",
            am: "በ፲፱፻፳፩ ዓ.ም ለመጀመሪያ ጊዜ ኢትዮጵያውያን መነኮሳት በግብፅ ጵጵስና ተቀበሉ። ከእነርሱ አንዱ አቡነ ጴጥሮስ ናቸው፤ የምሥራቅ ኢትዮጵያ ሊቀ ጳጳስ ሆነው ተሾሙ።",
          },
        },
        {
          tekst: {
            no: "Fascist-Italia okkuperte Etiopia i 1935–1941. Abune Petros stod fast for kirka og landet og ble drept av italienerne i Addis Abeba i 1936. Fire måneder senere ble også Abune Mikael (አቡነ ሚካኤል) drept i Gore fordi han fordømte fascistene.",
            am: "ፋሺስት ኢጣሊያ ኢትዮጵያን በወረረችበት ዘመን አቡነ ጴጥሮስ ለቤተ ክርስቲያንና ለሀገር ጸንተው ቆሙ፤ በ፲፱፻፳፰ ዓ.ም አዲስ አበባ ላይ በፋሺስት ኢጣሊያ ተገደሉ። ከዐራት ወራት በኋላም አቡነ ሚካኤል ፋሺስትን አውግዘው በጎሬ ሰማዕትነት ተቀበሉ።",
          },
          vers: ["Rev 2:10", "John 10:11"],
        },
        {
          tekst: {
            no: "I 1937 ble mange munker i Debre Libanos massakrert. Kirka kaller Abune Petros ሰማዕተ ጽድቅ – rettferdighetens martyr. En statue av ham står midt i Addis Abeba.",
            am: "በ፲፱፻፳፱ ዓ.ም የደብረ ሊባኖስ መነኮሳት በጅምላ ተገደሉ። ቤተ ክርስቲያን አቡነ ጴጥሮስን «ሰማዕተ ጽድቅ» ትላቸዋለች፤ ሐውልታቸውም በአዲስ አበባ መሃል ቆሞአል።",
          },
          vers: ["Matt 5:10"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: En god hyrde gir livet for sauene. Abune Petros viser at troen er verdt mer enn livet.",
            am: "ለዛሬ የሚያስተምረን፤ መልካም እረኛ ነፍሱን ስለ በጎቹ ይሰጣል። አቡነ ጴጥሮስ ሃይማኖት ከሕይወት እንደምትበልጥ አሳዩን።",
          },
        },
      ],
    },
    {
      id: "patriark",
      tittel: {
        no: "1929–1959: Egne biskoper og egen patriark",
        am: "፲፱፻፳፱–፲፱፻፶፱ (እ.ኤ.አ.)፤ ኢትዮጵያውያን ጳጳሳትና የመጀመሪያው ፓትርያርክ",
      },
      punkter: [
        {
          tekst: {
            no: "I omkring 1600 år kom biskopen (ጳጳሱ) alltid fra Egypt. Etiopiere fikk ikke bli biskoper. Fra 1900-tallet ønsket kirka å få egne biskoper som kjente landet og folket.",
            am: "ለ፲፮፻ ዓመታት ያህል ጳጳሱ ሁልጊዜ ከግብፅ ይመጣ ነበር፤ ኢትዮጵያውያን ጳጳሳት አይሾሙም ነበር። በ፳ኛው መቶ ክፍለ ዘመን ቤተ ክርስቲያን ሀገሩንና ሕዝቡን የሚያውቁ የራሷ ጳጳሳት እንዲኖሯት ፈለገች።",
          },
        },
        {
          tekst: {
            no: "I 1929 fikk kirka fem etiopiske biskoper, og i 1948 fem til. I 1951 ble Abune Basilios (አቡነ ባስልዮስ) den første etiopiske lederen av hele kirka. I 1959 ble han innsatt som den første patriarken i Etiopia, av patriarken av Alexandria.",
            am: "በ፲፱፻፳፱ (እ.ኤ.አ.) አምስት ኢትዮጵያውያን ጳጳሳት ተሾሙ፤ በ፲፱፻፵፰ ደግሞ ሌሎች አምስት። በ፲፱፻፶፩ (እ.ኤ.አ.) አቡነ ባስልዮስ የመጀመሪያው ኢትዮጵያዊ ሊቀ ጳጳስ ሆኑ። በ፲፱፻፶፱ (እ.ኤ.አ.) በእስክንድርያ ፓትርያርክ እጅ የኢትዮጵያ የመጀመሪያው ፓትርያርክ ሆነው ተሾሙ።",
          },
          vers: ["Acts 20:28"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Kirka vår er nå selvstendig, med egen patriark og egen hellig synode (ቅዱስ ሲኖዶስ). Men vi har fortsatt full kjærlighet og troens fellesskap med den koptiske kirka i Egypt.",
            am: "ለዛሬ የሚያስተምረን፤ ቤተ ክርስቲያናችን አሁን የራሷ ፓትርያርክና ቅዱስ ሲኖዶስ አሏት። ከግብፅ ቤተ ክርስቲያን ጋር ግን በአንድ ሃይማኖትና በፍቅር አሁንም አንድ ነን።",
          },
          vers: ["Eph 4:4-6"],
        },
      ],
    },
    {
      id: "derg",
      tittel: {
        no: "1974–1991: Kirka under Derg-regimet",
        am: "፲፱፻፷፯–፲፱፻፹፫ ዓ.ም፤ ቤተ ክርስቲያን በደርግ ዘመን",
      },
      punkter: [
        {
          tekst: {
            no: "Abune Tewophilos (አቡነ ቴዎፍሎስ) var kirkas andre patriark. Han laget kirkeordningen ቃለ ዓዋዲ og startet menighetsrådene (ሰበካ ጉባኤ), slik at vanlige troende og ungdom fikk være med og ta ansvar i kirka, og prestene fikk fast lønn.",
            am: "ሁለተኛው ፓትርያርክ ብፁዕ ወቅዱስ አቡነ ቴዎፍሎስ ቃለ ዓዋዲን አዘጋጅተው በ፲፱፻፷፭ ዓ.ም የሰበካ ጉባኤን አቋቋሙ። በዚህም ምእመናንና ወጣቶች በቤተ ክርስቲያን አገልግሎት ተሳተፉ፤ ካህናትም የወር ደመወዝ አገኙ።",
          },
        },
        {
          tekst: {
            no: "Det militære Derg-regimet, som var mot religion, tok makten i 1974. Regimet drepte Abune Tewophilos i juli 1979. Kirka kaller ham ሰማዕቱ ፓትርያርክ – martyrpatriarken.",
            am: "ሃይማኖትን የሚቃወመው ወታደራዊው የደርግ መንግሥት በ፲፱፻፷፯ ዓ.ም ሥልጣን ያዘ። አቡነ ቴዎፍሎስንም በ፲፱፻፸፩ ዓ.ም ገደላቸው። ቤተ ክርስቲያን «ሰማዕቱ ፓትርያርክ» ትላቸዋለች።",
          },
          vers: ["2Tim 4:7-8"],
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Selv i vanskelige år fortsatte de troende å gå i kirka. Søndagsskolene (ሰንበት ትምህርት ቤቶች) og ungdommen fikk en stor plass i kirkas tjeneste i denne tida og etterpå.",
            am: "ለዛሬ የሚያስተምረን፤ በአስቸጋሪ ዘመንም ምእመናን ቤተ ክርስቲያንን አልተዉም። ሰንበት ትምህርት ቤቶችና ወጣቶች በቤተ ክርስቲያን አገልግሎት ትልቅ ድርሻ አገኙ።",
          },
          vers: ["1Tim 4:12"],
        },
      ],
    },
    {
      id: "diaspora",
      tittel: {
        no: "Kirka i diasporaen og i Norge",
        am: "ቤተ ክርስቲያን በዝርወትና በኖርዌይ",
      },
      punkter: [
        {
          tekst: {
            no: "Kirka vår har lenge hatt munker og klostre utenfor Etiopia: i Jerusalem, i Egypt og i Syria. I dag har kirka et eget bispedømme i Jerusalem med sju hellige steder.",
            am: "ቤተ ክርስቲያናችን ከጥንት ጀምሮ ከኢትዮጵያ ውጭ በኢየሩሳሌም፣ በግብፅና በሶርያ መነኮሳትና ገዳማት ነበሯት። ዛሬም በኢየሩሳሌም ሀገረ ስብከትና ሰባት ቅዱሳት መካናት አሏት።",
          },
          vers: ["Acts 1:8"],
        },
        {
          tekst: {
            no: "Under den italienske okkupasjonen sendte Abune Basilios munker til etiopierne i England, slik at de kunne få nattverd. Senere ble det bygget kirker i Europa, Amerika, Afrika, Midtøsten og Australia. I 2013 var det to etiopisk-ortodokse kirker i Norge, og kirka hadde bispedømmer over hele verden.",
            am: "በፋሺስት ወረራ ዘመን አቡነ ባስልዮስ በእንግሊዝ ለነበሩ ኢትዮጵያውያን ምሥጢራትን እንዲፈጽሙ መነኮሳትን ላኩ። በኋላም በአውሮፓ፣ በአሜሪካ፣ በአፍሪካ፣ በመካከለኛው ምሥራቅና በአውስትራሊያ አብያተ ክርስቲያናት ተተከሉ። በ፳፻፭ ዓ.ም በኖርዌይ ሁለት አብያተ ክርስቲያናት ነበሩ፤ ቤተ ክርስቲያንም በዓለም ሁሉ አህጉረ ስብከት አሏት።",
          },
        },
        {
          tekst: {
            no: "Hvorfor viktig i dag: Vi bor langt fra Etiopia, men vi har samme tro, samme ቅዳሴ og samme ታቦት. Bibelen ber oss søke det beste for byen vi bor i og be for den. Og vi skal fortsatt synge Herrens sang, også i et fremmed land.",
            am: "ለዛሬ የሚያስተምረን፤ ከኢትዮጵያ ርቀን ብንኖርም አንድ ሃይማኖት፣ አንድ ቅዳሴና አንድ ታቦት አለን። ለምንኖርበት ከተማ ሰላምን እንድንፈልግና ስለ እርሷ እንድንጸልይ መጽሐፍ ያዝዘናል። በባዕድ ምድርም የእግዚአብሔርን ዝማሬ መዘመር አናቆምም።",
          },
          vers: ["Jer 29:7", "Ps 137:4"],
        },
      ],
    },
    {
      id: "sosterkirkene",
      tittel: {
        no: "Søsterkirkene i den orientalsk-ortodokse familien",
        am: "አኃት አብያተ ክርስቲያናት (ኦሪየንታል ኦርቶዶክስ)",
      },
      punkter: [
        {
          tekst: {
            no: "Kirka vår har fire søsterkirker med samme tro: den koptiske kirka i Egypt, den syriske kirka, den armenske kirka og den indiske (malankara) kirka. Sammen kalles de de orientalsk-ortodokse kirkene, eller «de fem søsterkirkene» (አምስቱ አኃት አብያተ ክርስቲያናት).",
            am: "ቤተ ክርስቲያናችን በአንድ ሃይማኖት የምትተባበራቸው አራት እኅቶች አሏት፤ የግብፅ (ቅብጥ)፣ የሶርያ፣ የአርመንና የሕንድ ኦርቶዶክስ አብያተ ክርስቲያናት። ከእኛ ጋር አምስቱ አኃት አብያተ ክርስቲያናት ይባላሉ።",
          },
          vers: ["John 17:21"],
        },
        {
          tekst: {
            no: "Alle fem tar imot de tre kirkemøtene i Nikea (325), Konstantinopel (381) og Efesos (431), men ikke Kalkedon (451). Den indiske kirka ble ifølge tradisjonen grunnlagt av apostelen Tomas.",
            am: "አምስቱም ጉባኤ ኒቅያን፣ ጉባኤ ቍስጥንጥንያንና ጉባኤ ኤፌሶንን ይቀበላሉ፤ ጉባኤ ኬልቄዶንን ግን አይቀበሉም። የሕንድ ቤተ ክርስቲያን በሐዋርያው ቅዱስ ቶማስ እንደ ተመሠረተች ትውፊት ይነግረናል።",
          },
        },
        {
          tekst: {
            no: "I januar 1965 møttes lederne for søsterkirkene i Addis Abeba. Det var første gang siden kirkemøtet i Efesos i 431. Hvorfor viktig i dag: Vi er ikke alene. Når vi møter kopter, syrere, armenere eller indere som tror som oss, er de søsken i troen.",
            am: "በጥር ፲፱፻፷፭ (እ.ኤ.አ.) የአኃት አብያተ ክርስቲያናት መሪዎች በአዲስ አበባ ተሰበሰቡ፤ ከጉባኤ ኤፌሶን (፬፻፴፩) ወዲህ የመጀመሪያው ነበር። ለዛሬ የሚያስተምረን፤ ብቻችንን አይደለንም፤ እንደ እኛ የሚያምኑ ግብፃውያን፣ ሶርያውያን፣ አርመናውያንና ሕንዳውያን የእምነት ወንድሞቻችን ናቸው።",
          },
          vers: ["Ps 133:1", "Eph 4:4-6"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "I sin preken om pinsen nevner Johannes Krysostomos at det var etiopiere i Jerusalem den dagen Den hellige ånd kom. Kirka vår ser det som et tegn på at Etiopia tidlig fikk høre evangeliet.",
        am: "ቅዱስ ዮሐንስ አፈወርቅ ስለ በዓለ ሃምሳ ባስተማረው ድርሳን መንፈስ ቅዱስ በወረደበት ዕለት ኢትዮጵያውያን በኢየሩሳሌም እንደ ነበሩ መስክሯል።",
      },
      kilde:
        "ድርሳን ዘቅዱስ ዮሐንስ አፈወርቅ ዘበዓለ ሃምሳ, gjengitt i Mahibere Kidusan: «የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በዝርወት» – https://eotcmk.org/a/%E1%8B%A8%E1%8A%A2%E1%89%B5%E1%8B%AE%E1%8C%B5%E1%8B%AB-%E1%8A%A6%E1%88%AD%E1%89%B6%E1%8B%B6%E1%8A%AD%E1%88%B5-%E1%89%B0%E1%8B%8B%E1%88%95%E1%8B%B6-%E1%89%A4%E1%89%B0-%E1%8A%AD%E1%88%AD%E1%88%B5-2/, og ethiopianorthodox.org: The Introduction of Christianity",
    },
    {
      navn: { no: "Den hellige Athanasius av Alexandria", am: "ቅዱስ አትናቴዎስ ሐዋርያዊ" },
      tekst: {
        no: "Athanasius viet Frumentius (Abba Selama) til Etiopias første biskop. Kirka vår stod sammen med Athanasius og troen fra Nikea mot Arius. Derfor æres han særlig hos oss: én av anaforaene (ቅዳሴ) i kirka bærer hans navn, og hans bok om den hellige Antonios ble oversatt til ge'ez.",
        am: "ቅዱስ አትናቴዎስ አባ ሰላማን የኢትዮጵያ የመጀመሪያ ጳጳስ አድርጎ ሾመ። ቤተ ክርስቲያናችን ከአትናቴዎስና ከኒቅያ ሃይማኖት ጋር ጸንታ ቆመች፤ ስለዚህ በእኛ ዘንድ ልዩ ክብር አለው። ከቅዳሴዎቻችን አንዱ ቅዳሴ አትናቴዎስ ይባላል፤ ስለ አባ እንጦንስ የጻፈውም መጽሐፍ ወደ ግእዝ ተተርጉሟል።",
      },
      kilde:
        "ethiopianorthodox.org: «The Introduction of Christianity» (Sergew Hable Sellassie og Tadesse Tamerat, The Church of Ethiopia, EOTC 1970) – https://www.ethiopianorthodox.org/english/ethiopian/prechristian.html",
    },
    {
      navn: { no: "Den hellige Kyrillos av Alexandria (መጽሐፈ ቄርሎስ)", am: "ቅዱስ ቄርሎስ (መጽሐፈ ቄርሎስ)" },
      tekst: {
        no: "De ni hellige oversatte Kyrillos' skrifter om den rette troen til ge'ez, i boka ቄርሎስ. Ifølge kirkas historikere bygger læren til Den etiopisk-ortodokse kirka på denne boka. Det er her ተዋሕዶ-troen om Kristus er forklart.",
        am: "ዘጠኙ ቅዱሳን የቅዱስ ቄርሎስን ስለ ቀናች ሃይማኖት የጻፋቸውን ድርሳናት በመጽሐፈ ቄርሎስ ወደ ግእዝ ተረጐሙ። የቤተ ክርስቲያናችን ትምህርት በዚህ መጽሐፍ ላይ የተመሠረተ ነው።",
      },
      kilde:
        "ethiopianorthodox.org: «The Expansion and Consolidation of Christianity c. 350 to 650 A.D.» – https://www.ethiopianorthodox.org/english/ethiopian/prechristian.html#expansion",
    },
    {
      navn: { no: "ቅዱስ ያሬድ", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "Yared priste en av de ni hellige, Abba Gerima, i sangen sin: «ገሪማ ገረምከኒ አስኬማከኒ አልባቲ ሙስና» – Gerima, du har fått meg til å undre meg; din munkedrakt har ingen feil.",
        am: "ቅዱስ ያሬድ ከዘጠኙ ቅዱሳን አንዱን አባ ገሪማን «ገሪማ ገረምከኒ አስኬማከኒ አልባቲ ሙስና፤ አባ ገሪማ አስገረምኸኝ፤ ለምንኵስናህም እንከን የለባትም» ብሎ አመስግኗቸዋል።",
      },
      kilde:
        "Mahibere Kidusan: «አባ ገሪማ ዘመደራ» (Dn. Efrem Yenesew, etter መጽሐፈ ስንክሳር ሰኔ ፲፯) – https://eotcmk.org/a/%E1%8A%A0%E1%89%A3-%E1%8C%88%E1%88%AA%E1%88%9B-%E1%8B%98%E1%88%98%E1%8B%B0%E1%88%AB-2/",
    },
  ],
  ord: [
    { ord: "ክብረ ነገሥት", forklaring: { no: "«Kongenes ære», kirkas bok om dronningen av Saba, Menelik og paktens ark", am: "ስለ ንግሥተ ሳባ፣ ስለ ቀዳማዊ ምኒልክና ስለ ታቦተ ጽዮን የሚተርክ መጽሐፍ" } },
    { ord: "ታቦተ ጽዮን", forklaring: { no: "paktens ark, som tradisjonen sier er i Aksum", am: "በአክሱም ያለችው የቃል ኪዳኑ ታቦት" } },
    { ord: "ጃንደረባ", forklaring: { no: "hoffmann; den etiopiske hoffmannen i Apg 8", am: "የንግሥት ሕንደኬ ባለሥልጣን የነበረው ኢትዮጵያዊ" } },
    { ord: "ከሣቴ ብርሃን", forklaring: { no: "«han som åpenbarte lyset», navnet på Abba Selama (Frumentius)", am: "ብርሃንን የገለጠ፤ የአባ ሰላማ ስም" } },
    { ord: "ተስዓቱ ቅዱሳን", forklaring: { no: "de ni hellige, munkene som kom omkring 480", am: "በ፭ኛው መቶ ክፍለ ዘመን የመጡት ዘጠኙ ቅዱሳን" } },
    { ord: "ግእዝ", forklaring: { no: "ge'ez, kirkas gamle språk", am: "የቤተ ክርስቲያን ጥንታዊ ቋንቋ" } },
    { ord: "ውቅር አብያተ ክርስቲያናት", forklaring: { no: "kirker hogd ut av fjellet, som i Lalibela", am: "ከዐለት የተፈለፈሉ አብያተ ክርስቲያናት" } },
    { ord: "ገዳም", forklaring: { no: "kloster", am: "መነኮሳት የሚኖሩበት ቦታ" } },
    { ord: "ተዋሕዶ", forklaring: { no: "«forening»: guddom og menneskenatur er ett i Kristus", am: "መለኮትና ትስብእት በክርስቶስ መዋሐዳቸው" } },
    { ord: "ሰማዕት", forklaring: { no: "martyr, en som dør for troen", am: "ስለ ሃይማኖቱ የሞተ" } },
    { ord: "ፓትርያርክ", forklaring: { no: "patriark, den øverste lederen av kirka", am: "የቤተ ክርስቲያን የበላይ አባት" } },
    { ord: "ዝርወት", forklaring: { no: "diaspora, å bo spredt utenfor hjemlandet", am: "ከሀገር ውጭ ተበትኖ መኖር" } },
    { ord: "አኃት አብያተ ክርስቲያናት", forklaring: { no: "søsterkirkene med samme tro", am: "በአንድ ሃይማኖት ያሉ እኅት አብያተ ክርስቲያናት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva står i Bibelen, og hva er tradisjon, i historien om dronningen av Saba?", am: "ስለ ንግሥተ ሳባ በመጽሐፍ ቅዱስ ያለውና በትውፊት ያለው ምንድር ነው?" },
      svar: {
        no: "Bibelen forteller at hun besøkte Salomo og prøvde visdommen hans (1 Kong 10, Matt 12:42). At hun fikk sønnen Menelik og at paktens ark kom til Aksum, er kirkas tradisjon fra ክብረ ነገሥት.",
        am: "ሰሎሞንን መጎብኘቷንና ጥበቡን መፈተኗን መጽሐፍ ቅዱስ ይነግረናል። ቀዳማዊ ምኒልክን መውለዷና ታቦተ ጽዮን ወደ አክሱም መምጣቷ ግን በክብረ ነገሥት የተጻፈ ትውፊት ነው።",
      },
    },
    {
      sporsmal: { no: "Hvem var Abba Selama ከሣቴ ብርሃን?", am: "አባ ሰላማ ከሣቴ ብርሃን ማን ናቸው?" },
      svar: {
        no: "Frumentius, som spredte troen i Aksum og ble viet til Etiopias første biskop av Athanasius omkring år 330. Kong Ezana ble kristen i hans tid.",
        am: "ፍሬምናጦስ ናቸው፤ በአክሱም ሃይማኖትን አስፋፍተው በ፬ኛው መቶ ክፍለ ዘመን በቅዱስ አትናቴዎስ የኢትዮጵያ የመጀመሪያ ጳጳስ ሆነው ተሾሙ። በዘመናቸው ንጉሥ ኢዛና ክርስቲያን ሆነ።",
      },
    },
    {
      sporsmal: { no: "Hva gjorde de ni hellige for kirka?", am: "ዘጠኙ ቅዱሳን ለቤተ ክርስቲያን ምን አደረጉ?" },
      svar: {
        no: "De forkynte evangeliet, oversatte Bibelen til ge'ez og grunnla de første klostrene, som Debre Damo.",
        am: "ወንጌልን ሰበኩ፤ መጻሕፍትን ወደ ግእዝ ተረጐሙ፤ እንደ ደብረ ዳሞ ያሉ የመጀመሪያዎቹን ገዳማት መሠረቱ።",
      },
    },
    {
      sporsmal: { no: "Hvorfor holder vi både lørdag og søndag hellig?", am: "ቀዳሚት ሰንበትንና እሑድን ለምን እናከብራለን?" },
      svar: {
        no: "Abba Ewostatewos lærte det, og kirkemøtet i Debre Mitmaq under kong Zara Yaqob bestemte omkring 1450 at begge sabbatene skal holdes like hellige.",
        am: "አቡነ ኤዎስጣቴዎስ አስተማሩ፤ በዐፄ ዘርዐ ያዕቆብ ዘመን በደብረ ምጥማቅ የተደረገው ጉባኤም ሁለቱም ሰንበታት እኩል እንዲከበሩ ወሰነ።",
      },
    },
    {
      sporsmal: { no: "Hva ble bestemt på kirkemøtet i Boru Meda i 1878?", am: "በቦሩ ሜዳ ጉባኤ ምን ተወሰነ?" },
      svar: {
        no: "At kirkas lære er ተዋሕዶ: Kristus er sann Gud og sant menneske, forent uten blanding og uten deling. Læren om «de tre fødslene» ble avvist.",
        am: "የቤተ ክርስቲያን ሃይማኖት ተዋሕዶ እንደ ሆነ ጸና፤ የቅባትና የጸጋ (ሦስት ልደት) ትምህርት ተረታ።",
      },
    },
    {
      sporsmal: { no: "Hvem var Abune Petros og Abune Tewophilos?", am: "አቡነ ጴጥሮስና አቡነ ቴዎፍሎስ እነማን ናቸው?" },
      svar: {
        no: "Abune Petros var en biskop som ble drept av de italienske fascistene i 1936. Abune Tewophilos var kirkas andre patriark og ble drept av Derg-regimet i 1979. Begge er martyrer.",
        am: "አቡነ ጴጥሮስ በ፲፱፻፳፰ ዓ.ም በፋሺስት ኢጣሊያ የተገደሉ ሊቀ ጳጳስ ናቸው። አቡነ ቴዎፍሎስ ሁለተኛው ፓትርያርክ ሲሆኑ በደርግ ተገደሉ። ሁለቱም ሰማዕታት ናቸው።",
      },
    },
  ],
  kilder: [
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Church History (oversikt)", url: "https://www.ethiopianorthodox.org/english/indexenglish.html" },
    { navn: "ethiopianorthodox.org: The Introduction of Christianity / Expansion c. 350–650 (Sergew Hable Sellassie og Tadesse Tamerat, 1970)", url: "https://www.ethiopianorthodox.org/english/ethiopian/prechristian.html" },
    { navn: "ethiopianorthodox.org: A Period of Conflict / Revival of the Church 1200–1526 (Tadesse Tamerat)", url: "https://www.ethiopianorthodox.org/english/ethiopian/periodofconflict.html" },
    { navn: "ethiopianorthodox.org: Persecution and Religious Controversies / The Period of Reorganization", url: "https://www.ethiopianorthodox.org/english/ethiopian/perscution.html" },
    { navn: "ethiopianorthodox.org: The Hierarchy (P.K. Matthew)", url: "https://www.ethiopianorthodox.org/english/ethiopian/hierarchy.html" },
    { navn: "ethiopianorthodox.org: The Oriental Orthodox Churches Addis Ababa Conference, January 1965", url: "https://www.ethiopianorthodox.org/english/ethiopian/01addisababaconf.html" },
    { navn: "ethiopianorthodox.org: Patriarchs (til minne om Abune Tewophilos)", url: "https://www.ethiopianorthodox.org/gallery/todaysphoto/patriarchs/index.htm" },
    { navn: "ethiopianorthodox.org: Abune Petros", url: "https://www.ethiopianorthodox.org/gallery/todaysphoto/abunepetros/index.htm" },
    { navn: "Mahibere Kidusan: የቃል ኪዳኑ ታቦት (etter ክብረ ነገሥት)", url: "https://eotcmk.org/a/%E1%8B%A8%E1%89%83%E1%88%8D-%E1%8A%AA%E1%8B%B3%E1%8A%91-%E1%89%B3%E1%89%A6%E1%89%B5/" },
    { navn: "Mahibere Kidusan: «ኢትዮጵያ እጆቿን ወደ እግዚአብሔር ትዘረጋለች»", url: "https://eotcmk.org/?p=18986" },
    { navn: "Mahibere Kidusan: ‹‹ጽዮንን ክበቧት›› (Sunday School Department)", url: "https://eotcmk.org/?p=28959" },
    { navn: "Mahibere Kidusan: የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በዝርወት, del 1", url: "https://eotcmk.org/?p=11728" },
    { navn: "Mahibere Kidusan: የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን በዝርወት, del 2", url: "https://eotcmk.org/?p=11736" },
    { navn: "Mahibere Kidusan: አባ ገሪማ ዘመደራ (de ni hellige)", url: "https://eotcmk.org/a/%E1%8A%A0%E1%89%A3-%E1%8C%88%E1%88%AA%E1%88%9B-%E1%8B%98%E1%88%98%E1%8B%B0%E1%88%AB-2/" },
    { navn: "Mahibere Kidusan: ኢትዮጵያዊው ቅዱስ ያሬድ", url: "https://eotcmk.org/?p=28264" },
    { navn: "Mahibere Kidusan: በእንተ ዕረፍቱ ለተክለ ሃይማኖት", url: "https://eotcmk.org/?p=31340" },
    { navn: "Mahibere Kidusan: Utstillingen om kirkas historie og lære (Addis Abeba 2016)", url: "https://eotcmk.org/?p=13258" },
    { navn: "Mahibere Kidusan: የገና በዓል አከባበር በቅዱስ ላልይበላ", url: "https://eotcmk.org/?p=10555" },
    { navn: "Mahibere Kidusan: ሰማዕቱ ብፁዕ አቡነ ሚካኤል መታሰቢያ ሐውልት", url: "https://eotcmk.org/?p=13246" },
    { navn: "Mahibere Kidusan: ሰበካ መንፈሳዊ ጉባኤ ከትናንት እስከ ዛሬ (om Abune Tewophilos)", url: "https://eotcmk.org/?p=16678" },
    { navn: "Mahibere Kidusan: የሕንዱ ፓትርያርክ የመስቀል በዓልን በአዲስ አበባ አከበሩ (søsterkirkene)", url: "https://eotcmk.org/?p=16603" },
  ],
  utkast: true,
};
