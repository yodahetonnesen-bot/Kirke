import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om de etiopiske helgenene:
// Mahibere Kidusan (eotcmk.org): «አቡነ አረጋዊ ዘደብረ ዳሞ» og «“ጌታዬ ኢየሱስ ክርስቶስን ልከተለው እሄዳለሁ”» (etter ስንክሳር ጥቅምት 14),
// «አባ ገሪማ ዘመደራ», «ተዝካረ ዕረፍቱ ለአቡነ ገብረ መንፈስ ቅዱስ» og «የንሂሳው ኮከብ» (etter ገድለ ገብረ መንፈስ ቅዱስ),
// «“ክቡር ሞቱ ለጻድቅ በቅድመ እግዚአብሔር”» og «በእንተ ዕረፍቱ ለተክለ ሃይማኖት», «ቅድስት ክርስቶስ ሠምራ» (barn, etter መዝገበ ቅዱሳን),
// «የኢትዮጵያውያን ቅዱሳት አንስት አርአያነት», «የጥያቄዎቹ ምላሾች» (Meskel Kibra), «ግሽን ማርያም» og «ቅዱስ ዑራኤል በግሸን አምባ»
// (Zara Yaqob, Kaleb), «ሊቀ መላእክት ቅዱስ ዑራኤል» og «ወርኃ ሐምሌ» (Abba Giorgis ze-Gasicha), «የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ
// ክርስቲያን በዐዲስ አበባ ኤግዚብሽን ማእከል» (MK-utstillingen 2016), «የሰማዕተ ጽድቅ ብፁዕ አቡነ ጴጥሮስ … መታሰቢያ መርሐ ግብር ተካሄደ»;
// ethiopianorthodox.org (Sergew Hable Sellassie og Tadesse Tamerat, «The Church of Ethiopia», EOTC 1970).
// Historien (Aksum, de ni hellige, Lalibela, Tekle Haymanot, Ewostatewos, Zara Yaqob, Fasilides, Abune Petros) står
// grundigere på siden «Kirkas historie». Her står personene. Yared har sin egen side.
// Månedsdagene er fra lib/hoytider-data.ts (ethiopianorthodox.org, werawi bealat).
//
// Usikkert: Vi fant ingen årlig minnedag i kildene for Abba Selama, Ezana (አብርሃ ወአጽብሐ), Kaleb, Lalibela, Ewostatewos
//   og Walatta Petros. Bare månedsdagene der de finnes (Abba Selama den 20., Ewostatewos den 18.). Presten bør fylle inn.
// Usikkert: Walatta Petros: Mahibere Kidusan sier at hun «tok imot martyriet» (ሰማዕትነትን የተቀበለች) under katolikkenes tid.
//   Vi fant ikke mer om livet hennes i EOTC-kilder.
// Usikkert: Abune Petros: Mahibere Kidusan holdt minnemøtet ሐምሌ 22; vi vet ikke sikkert om det er dødsdagen hans.
// Usikkert: Kong Fasilides (ዐፄ ፋሲል) regnes ikke som helgen i kildene vi fant. Han må ikke blandes sammen med martyren
//   ቅዱስ ፋሲለደስ, som minnes den 11. i hver måned.
// Usikkert: Kong Zara Yaqob regnes heller ikke som helgen i kildene; han står her som en viktig person i kirkas historie.
export const etiopiskeHelgener: Tema = {
  slug: "etiopiske-helgener",
  del: "personer",
  tittel: { no: "Etiopiske helgener", am: "ኢትዮጵያውያን ቅዱሳን" },
  undertittel: {
    no: "Fedre og mødre i troen fra vårt eget land",
    am: "ከሀገራችን የተገኙ የሃይማኖት አባቶችና እናቶች",
  },
  bilde: "ewostatewos",
  ingress: {
    no:
      "«Etiopia skal i hast utrekke sine hender til Gud», sier Salmene. Gud har gitt landet vårt mange hellige: biskoper, konger, munker, nonner og martyrer. Her møter du de viktigste. Vi skiller mellom det historien kan vise, og det kirkas tradisjon forteller i bøkene om helgenene (ገድል).",
    am:
      "«ኢትዮጵያ እጆችዋን ወደ እግዚአብሔር ትዘረጋለች» ይላል መዝሙረ ዳዊት። እግዚአብሔር ለሀገራችን ብዙ ቅዱሳንን ሰጥቷል፤ ጳጳሳትን፣ ነገሥታትን፣ መነኮሳትን፣ መነኮሳይያትንና ሰማዕታትን። በዚህ ገጽ ዋና ዋናዎቹን እንማራለን። በታሪክ የሚታወቀውንና ቤተ ክርስቲያን በገድላት የምትነግረውን ለይተን እናቀርባለን።",
  },
  hovedvers: "Ps 68:32",
  avsnitt: [
    {
      id: "historie-og-gedl",
      tittel: { no: "Historie og ገድል – hvordan vet vi om helgenene?", am: "ታሪክና ገድል፤ ስለ ቅዱሳን እንዴት እናውቃለን?" },
      punkter: [
        {
          tekst: {
            no: "Noe vet vi fra historien: gamle innskrifter, mynter, bygninger og bøker. For eksempel kong Ezanas mynter med korset og fjellkirkene i Lalibela.",
            am: "አንዳንዱን በታሪክ እናውቃለን፤ በጥንት ጽሑፎች፣ በሳንቲሞች፣ በሕንጻዎችና በመጻሕፍት። ለምሳሌ የንጉሥ ኢዛና መስቀል ያለባቸው ሳንቲሞችና የላሊበላ ውቅር አብያተ ክርስቲያናት።",
          },
        },
        {
          tekst: {
            no: "Mye vet vi fra kirkas tradisjon. ገድል betyr «kamp»: en bok om en helgens liv, kamp og under. Kirka leser dem på helgenens dag, sammen med ስንክሳር, boka med helgenene for hver dag i året. På denne siden skriver vi «Tradisjon:» når noe kommer fra ገድል eller ስንክሳር.",
            am: "ብዙውን ደግሞ ከቤተ ክርስቲያን ትውፊት እናውቃለን። ገድል ማለት «ተጋድሎ» ማለት ነው፤ የቅዱሳንን ሕይወት፣ ተጋድሎና ተአምራት የሚተርክ መጽሐፍ ነው። በበዓላቸው ቀን ከስንክሳር ጋር ይነበባል። በዚህ ገጽ ከገድል ወይም ከስንክሳር የተወሰደውን «ትውፊት፤» ብለን እንጽፋለን።",
          },
        },
        {
          tekst: {
            no: "Bibelen ber oss huske dem som talte Guds ord til oss, og etterligne troen deres. «Den rettferdige skal være i evig minne.»",
            am: "መጽሐፍ ቅዱስ «የእግዚአብሔርን ቃል የተናገሩአችሁን ዋኖቻችሁን አስቡ … በእምነታቸው ምሰሉአቸው» ይላል። «የጻድቅ መታሰቢያ ለዘላለም ይኖራል።»",
          },
          vers: ["Heb 13:7", "Ps 112:6", "Ps 116:15"],
        },
      ],
    },
    {
      id: "aksum",
      tittel: { no: "Aksum-tida: Abba Selama, Ezana, Kaleb og Yared", am: "የአክሱም ዘመን፤ አባ ሰላማ፣ ኢዛና፣ ካሌብና ያሬድ" },
      ingress: {
        no: "Les mer om denne tida på siden «Kirkas historie».",
        am: "ስለዚህ ዘመን በ«የቤተ ክርስቲያን ታሪክ» ገጽ ተጨማሪ ታገኛላችሁ።",
      },
      punkter: [
        {
          tekst: {
            no: "Abba Selama (አባ ሰላማ ከሣቴ ብርሃን), omkring år 330: Frumentius var en kristen gutt fra Tyros som kom til kongens hoff i Aksum. Han spredte troen, og patriark Athanasius i Alexandria viet ham til Etiopias første biskop. Folket kalte ham ከሣቴ ብርሃን, «han som åpenbarte lyset». Han minnes den 20. i hver måned.",
            am: "አባ ሰላማ ከሣቴ ብርሃን (፫፻፴ ዓ.ም ገደማ)፦ ፍሬምናጦስ ከጢሮስ የመጣ ክርስቲያን ወጣት ነበር፤ በአክሱም ቤተ መንግሥት ሃይማኖትን አስፋፋ። ቅዱስ አትናቴዎስ የኢትዮጵያ የመጀመሪያ ጳጳስ አድርጎ ሾመው። ሕዝቡም ከሣቴ ብርሃን አሉት። በየወሩ በ፳ ይታሰባል።",
          },
          vers: ["Isa 52:7", "Rom 10:15"],
        },
        {
          tekst: {
            no: "Kong Ezana (ኢዛና) ble kristen. Historie: Myntene hans fikk korset i stedet for månesigd og sol, og en innskrift begynner «i Faderens, Sønnens og Den hellige ånds kraft». Tradisjon: Kirka kaller ham og broren for አብርሃ ወአጽብሐ og regner dem som hellige konger.",
            am: "ንጉሥ ኢዛና ክርስቲያን ሆነ። ታሪክ፤ በሳንቲሞቹ ላይ ከጨረቃና ከፀሐይ ምልክት ፈንታ መስቀል ተቀረጸ። ትውፊት፤ ቤተ ክርስቲያን እርሱንና ወንድሙን አብርሃ ወአጽብሐ ብላ ቅዱሳን ነገሥታት ትላቸዋለች።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "Kong Kaleb (ጻድቁ ዐፄ ካሌብ), 500-tallet: Han dro over Rødehavet til Najran i Sør-Arabia for å redde de kristne som ble forfulgt, og vant over kong Finhas. Kirka kaller ham «den rettferdige».",
            am: "ጻድቁ ዐፄ ካሌብ፦ በናግራን በአይሁድና በአረማውያን የሚሠቃዩትን ክርስቲያኖች ለመታደግ ዘምቶ የአሕዛቡን ንጉሥ ፊንሐስን ድል አደረገ።",
          },
          vers: ["John 15:13", "Gal 6:10"],
        },
        {
          tekst: {
            no: "ቅዱስ ያሬድ, 500-tallet: Han skrev kirkas hymner og ordnet sangen i tre tonearter. Kirka minnes ham ግንቦት 11, dagen han ble tatt bort. Les mer på siden om ቅዱስ ያሬድ.",
            am: "ቅዱስ ያሬድ፦ የቤተ ክርስቲያንን ዜማ ደረሰ፤ በሦስቱ ዜማዎች (ግዕዝ፣ ዕዝል፣ ዓራራይ) አዘጋጀ። ግንቦት ፲፩ የተሰወረበት ቀን ነው። ስለ እርሱ በቅዱስ ያሬድ ገጽ ተጨማሪ ታገኛላችሁ።",
          },
          vers: ["Ps 150:3-5"],
        },
      ],
    },
    {
      id: "ni-hellige",
      tittel: { no: "Abune Aregawi og de ni hellige (ተስዓቱ ቅዱሳን)", am: "አቡነ አረጋዊና ተስዓቱ ቅዱሳን" },
      punkter: [
        {
          tekst: {
            no: "Omkring år 480 kom ni munker fra Romerriket. De ville ikke godta læren fra Kalkedon om «to naturer». De oversatte Bibelen og kirkas bøker til ge'ez og grunnla de første klostrene. De ni er: Aregawi, Pantalewon, Gerima, Afse, Guba, Alef, Yem'ata, Likanos og Tsehma.",
            am: "በ፭ኛው መቶ ክፍለ ዘመን ዘጠኝ መነኮሳት ከሮም ግዛት መጡ፤ የኬልቄዶንን «ሁለት ባሕርይ» ትምህርት አንቀበልም ያሉ ናቸው። መጻሕፍትን ወደ ግእዝ ተረጐሙ፤ ገዳማትን መሠረቱ። እነርሱም አረጋዊ፣ ጰንጠሌዎን፣ ገሪማ፣ አፍጼ፣ ጉባ፣ አሌፍ፣ ይምአታ፣ ሊቃኖስና ጽሕማ ናቸው።",
          },
          vers: ["Matt 19:29"],
        },
        {
          tekst: {
            no: "Abune Aregawi (አቡነ አረጋዊ): Tradisjon: Han var sønn av Isak og Edna fra en kongeslekt i Roma. Han ville ikke gifte seg, men ble munk hos den hellige Pakomios. Først het han ዘሚካኤል, men han fikk navnet «den gamle» (አረጋዊ) fordi han var vis selv om han var ung. Han ledet de ni hellige til Etiopia.",
            am: "አቡነ አረጋዊ፦ ትውፊት፤ ከሮም ነገሥታት ወገን ከአባታቸው ከይስሐቅና ከእናታቸው ከእድና ተወለዱ። ጋብቻን ትተው ከቅዱስ ጳኵሚስ ዘንድ ምንኵስናን ተቀበሉ። ስማቸው ዘሚካኤል ነበር፤ በዕድሜ ታናሽ ሆነው በጥበብ ግን የልጅ ዐዋቂ በመሆናቸው አረጋዊ ተባሉ። ዘጠኙን ቅዱሳን እስከ ኢትዮጵያ መሩ።",
          },
        },
        {
          tekst: {
            no: "Tradisjon: Aregawi kom opp på det bratte fjellet Debre Damo ved å holde i halen til en slange. Der grunnla han klosteret. Jesus ga ham et løfte om nåde for dem som påkaller navnet hans og holder minnet hans. Han døde ikke, men ble tatt bort ጥቅምት 14. Han minnes også den 14. i hver måned.",
            am: "ትውፊት፤ የዘንዶ ጅራት ይዘው ወደ ደብረ ዳሞ ተራራ ወጡ፤ በዚያም ገድላቸውን ፈጸሙ። ስማቸውን ለሚጠራና መታሰቢያቸውን ለሚያደርግ የምሕረት ቃል ኪዳን ተቀበሉ። እንደ ሄኖክና ኤልያስ ጥቅምት ፲፬ ተሠወሩ፤ በየወሩም በ፲፬ ይታሰባሉ።",
          },
          vers: ["Heb 11:38"],
        },
        {
          tekst: {
            no: "Abba Gerima (አባ ገሪማ) levde i Medera. Han hette først Isak. Tradisjon: ሰኔ 17 fikk han et løfte fra Gud og ble tatt bort i en lysvogn.",
            am: "አባ ገሪማ በመደራ ኖሩ፤ የቀደመ ስማቸው ይስሐቅ ነው። ትውፊት፤ ሰኔ ፲፯ ቃል ኪዳን ተቀብለው በብርሃን ሠረገላ ወደ ብሔረ ሕያዋን ተነጠቁ።",
          },
        },
      ],
    },
    {
      id: "lalibela",
      tittel: { no: "Kong Lalibela og Abune Gebre Menfes Kidus", am: "ቅዱስ ላሊበላና አቡነ ገብረ መንፈስ ቅዱስ" },
      punkter: [
        {
          tekst: {
            no: "Kong Lalibela (ቅዱስ ላሊበላ), omkring 1200: Historie: Han lot hogge ut kirker i ett stykke fra fjellet. De står fortsatt, og prester ber i dem hver dag. Kirka regner ham blant de fire hellige kongene i Zagwe-ætten. Hver jul (ገና) feires Kristi fødsel i Lalibela sammen med minnet om kongens fødsel.",
            am: "ቅዱስ ላሊበላ፦ ታሪክ፤ ከአንድ ዓለት የተፈለፈሉ አብያተ ክርስቲያናትን አሠራ፤ ዛሬም ጸሎት ይደረግባቸዋል። ከአራቱ የዛጉዌ ቅዱሳን ነገሥታት (ይምርሃነ ክርስቶስ፣ ገብረ ማርያም፣ ላሊበላ፣ ነአኵቶ ለአብ) አንዱ ነው። በገና በዓል ልደተ ክርስቶስ ከልደተ ላሊበላ ጋር በላሊበላ ይከበራል።",
          },
          vers: ["Matt 16:18"],
        },
        {
          tekst: {
            no: "Den hellige Meskel Kibra (ቅድስት መስቀል ክብራ) var med da kong Lalibela bygde kirkene. Hun bygde selv en av fjellkirkene, ቤተ አባ ሊባኖስ.",
            am: "ቅድስት መስቀል ክብራ ቅዱስ ላሊበላ ውቅር አብያተ ክርስቲያናትን ሲያንጽ አብራው ነበረች፤ ቤተ አባ ሊባኖስን ያነጸችው እርሷ ናት።",
          },
        },
        {
          tekst: {
            no: "Abune Gebre Menfes Kidus (አቡነ ገብረ መንፈስ ቅዱስ) kom fra Nehisa i Egypt og kom til Etiopia i Lalibelas tid. Tradisjon: Foreldrene Simon og Aklesia hadde ikke hatt barn på 30 år. Han ble født ታኅሣሥ 29. Da han var tre år, bar engelen Gabriel ham til et kloster. Han levde alene i ørkenen i bønn og faste, og løver og leoparder fulgte ham. Han slo seg ned på fjellet Zuqwala.",
            am: "አቡነ ገብረ መንፈስ ቅዱስ፦ የትውልድ ስፍራቸው በላዕላይ ግብፅ ንሂሳ ነው፤ በዐፄ ላሊበላ ዘመን ወደ ኢትዮጵያ መጡ። ትውፊት፤ ወላጆቻቸው ስምዖንና አቅሌስያ ፴ ዘመን ልጅ አጥተው ነበር፤ ታኅሣሥ ፳፱ ተወለዱ። በሦስት ዓመታቸው ቅዱስ ገብርኤል ወደ ገዳም ወሰዳቸው። በበረሃ በጾምና በጸሎት ኖሩ፤ አናብስትና ነብሮች አጀቧቸው፤ ወደ ደብረ ዝቋላ ደረሱ።",
          },
          vers: ["Mark 1:13", "Ps 91:13"],
        },
        {
          tekst: {
            no: "Gebre Menfes Kidus minnes መጋቢት 5, dagen han døde, og den 5. i hver måned.",
            am: "አቡነ ገብረ መንፈስ ቅዱስ መጋቢት ፭ ዐረፉ፤ በየወሩም በ፭ ይታሰባሉ።",
          },
        },
      ],
    },
    {
      id: "klosterfedre",
      tittel: { no: "Abune Tekle Haymanot og Abune Ewostatewos", am: "አቡነ ተክለ ሃይማኖትና አቡነ ኤዎስጣቴዎስ" },
      punkter: [
        {
          tekst: {
            no: "Abune Tekle Haymanot (አቡነ ተክለ ሃይማኖት) var sønn av Tsega Ze'ab og Egzi'e Haraya i Shewa. Navnet betyr «troens plante». Han lærte i Hayq og i de gamle klostrene i Tigray, og grunnla så Debre Libanos. Han forkynte evangeliet for folk som tilba avguder. Han døde i 1313.",
            am: "አቡነ ተክለ ሃይማኖት የጸጋ ዘአብና የእግዚእ ኀረያ ልጅ ናቸው። ተክለ ሃይማኖት ማለት «የሃይማኖት ተክል» ማለት ነው። በሐይቅና በትግራይ ገዳማት ተምረው ደብረ ሊባኖስን መሠረቱ። ጣዖት ለሚያመልኩ ወንጌልን ሰበኩ።",
          },
          vers: ["Matt 28:19-20", "1Cor 3:6"],
        },
        {
          tekst: {
            no: "Tradisjon: Han ba og bøyde seg så mye at kroppen ble tynn som et skjelett. Kirka sier han er ኢትዮጵያዊ ሐዋርያ, «Etiopias apostel». Fødselsdagen hans er ታኅሣሥ 24, og han døde ነሐሴ 24. Han minnes også den 24. i hver måned.",
            am: "ትውፊት፤ በስግደትና በጸሎት ብዛት አጥንታቸው ከሥጋቸው እስኪጣበቅ ተጋደሉ። ኢትዮጵያዊ ሐዋርያ ይባላሉ። ታኅሣሥ ፳፬ ልደታቸው፣ ነሐሴ ፳፬ ዕረፍታቸው ነው፤ በየወሩም በ፳፬ ይታሰባሉ።",
          },
          vers: ["Luke 18:1"],
        },
        {
          tekst: {
            no: "Abune Ewostatewos (አቡነ ኤዎስጣቴዎስ) fra Tigray lærte at både lørdag og søndag skal holdes hellige. Han ble forfulgt og dro i utlendighet til Egypt, Jerusalem, Kypros og Armenia, der han døde i 1352. Elevene hans grunnla mange klostre. Omkring 1450 bestemte kirkemøtet i Debre Mitmaq at begge sabbatene skal holdes. Han minnes den 18. i hver måned.",
            am: "አቡነ ኤዎስጣቴዎስ ቀዳሚት ሰንበትና ሰንበተ ክርስቲያን ሁለቱም እንዲከበሩ አስተማሩ። ተሰደው ወደ ግብፅ፣ ኢየሩሳሌም፣ ቆጵሮስና አርመን ሄዱ፤ በአርመን ዐረፉ። ደቀ መዛሙርታቸው ብዙ ገዳማትን መሠረቱ። በ፲፬፻፶ ዓ.ም በደብረ ምጥማቅ ጉባኤ ሁለቱ ሰንበታት እንዲከበሩ ተወሰነ። በየወሩ በ፲፰ ይታሰባሉ።",
          },
          vers: ["Exod 20:8", "Mark 2:27-28"],
        },
      ],
    },
    {
      id: "giorgis-zara-yaqob",
      tittel: { no: "Abba Giorgis ze-Gasicha og kong Zara Yaqob", am: "አባ ጊዮርጊስ ዘጋሥጫና ዐፄ ዘርዐ ያዕቆብ" },
      punkter: [
        {
          tekst: {
            no: "Abba Giorgis ze-Gasicha (አባ ጊዮርጊስ ዘጋሥጫ) var en stor lærer på 1400-tallet. Han elsket Maria og skrev bøker vi ber fra i dag: አርጋኖን, ሰዓታት (natteoppbønnen), መዐዛ ቅዳሴ og ሕይወተ ማርያም. Han svarte på vranglære i boka መጽሐፈ ምሥጢር. Han lærte sønnene til kong Dawit. Kirka kaller ham «den andre Kyrillos» (ዳግማዊ ቄርሎስ).",
            am: "አባ ጊዮርጊስ ዘጋሥጫ ታላቅ ሊቅ ናቸው። እመቤታችንን እጅግ ይወዱ ነበር፤ አርጋኖንን፣ ሰዓታትን፣ መዐዛ ቅዳሴንና ሕይወተ ማርያምን ደረሱ። በመጽሐፈ ምሥጢር ለመናፍቃን መልስ ሰጡ። የዐፄ ዳዊትን ልጆች አስተማሩ። ዳግማዊ ቄርሎስ ይባላሉ።",
          },
          vers: ["Prov 2:6"],
        },
        {
          tekst: {
            no: "Tradisjon: Klosterets bok om livet hans (ገድል) sier at erkeengelen Uriel opplyste forstanden hans. Han minnes ሐምሌ 7.",
            am: "ትውፊት፤ ገዳሙ ባሳተመው ገድሉ ቅዱስ ዑራኤል ልቡናውን እንዳበራለት ተጽፏል። ሐምሌ ፯ የዕረፍቱ መታሰቢያ ነው።",
          },
        },
        {
          tekst: {
            no: "Kong Zara Yaqob (ዐፄ ዘርዐ ያዕቆብ, konge 1434–1468) var elev av Abba Giorgis. Han var selv lærd og skrev bøker på ge'ez. Han hentet en bit av Kristi kors (ግማደ መስቀል) og la den på fjellet Gishen (ግሸን ማርያም). Han kalte inn kirkemøtet i Debre Mitmaq om de to sabbatene. Kirka regner ham ikke som helgen, men som en viktig konge for troen.",
            am: "ዐፄ ዘርዐ ያዕቆብ በአባ ጊዮርጊስ ዘጋሥጫ የተማረ ሊቅ ንጉሥ ነው፤ በግእዝ መጻሕፍትን ደረሰ። ግማደ መስቀሉን ወደ ግሸን አምባ አስገባ። በደብረ ምጥማቅ የሰንበትን ጉዳይ ጉባኤ አስጠራ።",
          },
        },
      ],
    },
    {
      id: "kvinner",
      tittel: { no: "Hellige kvinner: Kristos Semra og Walatta Petros", am: "ቅዱሳት አንስት፤ ክርስቶስ ሠምራና ወለተ ጴጥሮስ" },
      punkter: [
        {
          tekst: {
            no: "Den hellige Kristos Semra (ቅድስት ክርስቶስ ሠምራ) ble født ግንቦት 12 i Bulga. Foreldrene het Deresani og Eleni. Hun giftet seg med Semre Giorgis og fikk elleve barn. Hun fastet, ba og ga til de fattige.",
            am: "ቅድስት ክርስቶስ ሠምራ በቡልጋ ግንቦት ፲፪ ተወለደች፤ አባቷ ደረሳኒ እናቷ እሌኒ ይባላሉ። ሠምረ ጊዮርጊስን አግብታ ፲፩ ልጆች ወለደች። ጾመኛ፣ ጸሎተኛና ለነዳያን መጽዋች ነበረች።",
          },
          vers: ["Matt 6:6"],
        },
        {
          tekst: {
            no: "Tradisjon: En tjenestekvinne hos henne døde. Kristos Semra lovet Gud å tjene ham hele livet om hun fikk livet igjen, og hun ble levende. Da forlot Kristos Semra alt og ble nonne. Erkeengelen Mikael ledet henne til Tanasjøen, der hun ba for verden i tolv år.",
            am: "ትውፊት፤ ሠራተኛዋ በሞተች ጊዜ «ካስነሣህልኝ ዘመኔን ሙሉ አገለግልሃለሁ» ብላ ለመነች፤ ሠራተኛዋም ተነሣች። ንብረቷን ትታ መነነች፤ ቅዱስ ሚካኤል እየመራት ወደ ጣና ሐይቅ ደረሰች፤ ለዓለም ሰላም እየጸለየች ፲፪ ዓመት ተጋደለች።",
          },
          vers: ["Jas 5:16"],
        },
        {
          tekst: {
            no: "Tradisjon: Kristos Semra ba til og med Gud om nåde for djevelen. Jesus sa: «Du har bedt en underfull bønn som ingen har bedt før deg.» Hun døde ነሐሴ 24 og ligger begravet i klosteret sitt ved Tanasjøen. Hun minnes den 12. i hver måned.",
            am: "ትውፊት፤ ለዲያብሎስ እንኳ ምሕረትን ለመነች። ጌታችንም «ወዳጄ ክርስቶስ ሠምራ ሆይ ዕፁብ ድንቅ ልመና ለመንሽኝ» አላት። ነሐሴ ፳፬ ዐረፈች፤ በጣና ደሴት በስሟ በታነጸው ገዳም ተቀበረች። በየወሩ በ፲፪ ትታሰባለች።",
          },
          vers: ["Matt 5:44"],
        },
        {
          tekst: {
            no: "Den hellige Walatta Petros (ቅድስት ወለተ ጴጥሮስ) levde på 1600-tallet, da katolske misjonærer prøvde å tvinge folk bort fra den ortodokse troen. Hun sto fast i hellighet og mot, og kirka regner henne som en av de store etiopiske hellige kvinnene.",
            am: "ቅድስት ወለተ ጴጥሮስ ካቶሊኮች ኦርቶዶክሳውያንን አስገድደው እምነት በማስለወጥ ላይ በነበሩበት ዘመን በቅድስናና በጥብዓት ሰማዕትነትን የተቀበለች ኢትዮጵያዊት ቅድስት ናት።",
          },
          vers: ["Rev 2:10"],
        },
      ],
    },
    {
      id: "nyere-tid",
      tittel: { no: "Kong Fasilides og Abune Petros", am: "ዐፄ ፋሲለደስና አቡነ ጴጥሮስ" },
      punkter: [
        {
          tekst: {
            no: "Kong Fasilides (ዐፄ ፋሲል), konge fra 1632: Han jaget de katolske jesuittene ut av landet, gjenreiste fedrenes tro og bygde opp igjen ጽዮን ማርያም i Aksum. Gondar-tida han begynte, ga mange kirker, kirkesang og malerkunst. Han må ikke blandes med martyren ቅዱስ ፋሲለደስ, som kirka minnes den 11. i hver måned.",
            am: "ዐፄ ፋሲለደስ (ፋሲል)፦ ኢየሱሳውያንን ከሀገር አስወጥቶ የአባቶችን ሃይማኖት መለሰ፤ አክሱም ጽዮንን አሳደሰ። በጎንደር ዘመን ብዙ አብያተ ክርስቲያናት ተሠሩ። በየወሩ ፲፩ ከሚታሰበው ከሰማዕቱ ቅዱስ ፋሲለደስ ጋር አንድ አይደለም።",
          },
        },
        {
          tekst: {
            no: "Abune Petros (አቡነ ጴጥሮስ) var en av de fem første etiopiske biskopene (1929). Da Italia okkuperte landet, sto han fast for kirka og folket, og de italienske fascistene drepte ham i Addis Abeba i 1936. Kirka kaller ham ሰማዕተ ጽድቅ, «rettferdighetens martyr». En statue av ham står i Addis Abeba.",
            am: "ብፁዕ አቡነ ጴጥሮስ በግብፅ ከተሾሙት ከአምስቱ የመጀመሪያ ኢትዮጵያውያን ጳጳሳት አንዱ ናቸው። ጣልያን ሀገሪቱን በወረረ ጊዜ ለቤተ ክርስቲያንና ለሀገር ጸንተው ቆሙ፤ በ፲፱፻፳፰ ዓ.ም በአዲስ አበባ በፋሺስቶች ተገደሉ። ሰማዕተ ጽድቅ ይባላሉ፤ ሐውልታቸው በአዲስ አበባ ይገኛል።",
          },
          vers: ["John 10:11", "Matt 10:28"],
        },
        {
          tekst: {
            no: "Hva lærer helgenene oss? De var vanlige mennesker – barn, foreldre, konger og munker – som elsket Gud av hele sitt hjerte. Jesus sier: «Dere er verdens lys.» Også vi i Norge kan være lys der vi bor.",
            am: "ቅዱሳን ምን ያስተምሩናል? ሕፃናት፣ ወላጆች፣ ነገሥታትና መነኮሳት ሆነው እግዚአብሔርን በፍጹም ልባቸው የወደዱ ሰዎች ናቸው። ጌታችን «እናንተ የዓለም ብርሃን ናችሁ» ብሏል፤ እኛም በኖርዌይ ባለንበት ብርሃን መሆን እንችላለን።",
          },
          vers: ["Matt 5:14-16", "Phil 4:13"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Abba Giorgis ze-Gasicha (መጽሐፈ ሰዓታት)", am: "አባ ጊዮርጊስ ዘጋሥጫ (መጽሐፈ ሰዓታት)" },
      tekst: {
        no: "I ሰዓታት priser Abba Giorgis Tekle Haymanot som «et lys fra Etiopia, som driver bort mørket, og som er satt over de onde åndene».",
        am: "አባ ጊዮርጊስ ዘጋሥጫ በመጽሐፈ ሰዓታት «ተክለ ሃይማኖት ማኅቶት እምኢትዮጵያ ሰዳዴ ጽልመት እግዚአ መናፍስት» ብለው አመሰገኗቸው።",
      },
      kilde:
        "Mahibere Kidusan (Dn. Solomon Enyew): «“ክቡር ሞቱ ለጻድቅ በቅድመ እግዚአብሔር”» – https://eotcmk.org/a/ክቡር-ሞቱ-ለጻድቅ-በቅድመ-እግዚአብሔር/",
    },
    {
      navn: { no: "ቅዱስ ያሬድ", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "Yared priste Abba Gerima, en av de ni hellige: «Gerima, du har fått meg til å undre meg; din munkedrakt har ingen feil.»",
        am: "ቅዱስ ያሬድ አባ ገሪማን «ገሪማ ገረምከኒ አስኬማከኒ አልባቲ ሙስና፤ አባ ገሪማ አስገረምኸኝ፤ ለምንኵስናህም እንከን የለባትም» ብሎ አመሰገናቸው።",
      },
      kilde: "Mahibere Kidusan (Dn. Efrem Yenesew): «አባ ገሪማ ዘመደራ» (etter ስንክሳር ሰኔ 17) – https://eotcmk.org/a/አባ-ገሪማ-ዘመደራ-2/",
    },
    {
      navn: { no: "Abba Giorgis ze-Gasicha (መጽሐፈ ምሥጢር)", am: "አባ ጊዮርጊስ ዘጋሥጫ (መጽሐፈ ምሥጢር)" },
      tekst: {
        no: "I መጽሐፈ ምሥጢር kaller Abba Giorgis kirka den som har kledd gårdsplassen sin med blodet til martyrene som kjempet for Kristus. Helgenenes kamp er en del av kirkas skjønnhet.",
        am: "አባ ጊዮርጊስ ዘጋሥጫ በመጽሐፈ ምሥጢር ቤተ ክርስቲያንን «አደባባይዋን ስለ ክርስቶስ በተጋደሉ በሰማዕታት ደም የቀጠረች» ብለው ገለጿት።",
      },
      kilde:
        "Mahibere Kidusan: «‹‹አናቅጸ ሲኦል ኢይኄይልዋ፤ የገሃነም ደጆች አይችሏትም›› (ማቴ.፲፮፥፲፱)» (2023) – https://eotcmk.org/a/አናቅጸ-ሲኦል-ኢይኄይልዋ፤-የገሃነም/",
    },
  ],
  ord: [
    { ord: "ገድል", forklaring: { no: "«kamp»: boka om en helgens liv og under", am: "የቅዱሳንን ተጋድሎ የሚተርክ መጽሐፍ" } },
    { ord: "ስንክሳር", forklaring: { no: "boka med helgenene for hver dag i året", am: "የየዕለቱን ቅዱሳን ታሪክ የያዘ መጽሐፍ" } },
    { ord: "ትውፊት", forklaring: { no: "tradisjon: det kirka har overlevert fra generasjon til generasjon", am: "ከትውልድ ወደ ትውልድ የተላለፈ" } },
    { ord: "ጻድቅ / ጻድቃን", forklaring: { no: "rettferdig, en hellig som levde i bønn og faste", am: "በጾምና በጸሎት የኖረ ቅዱስ" } },
    { ord: "ከሣቴ ብርሃን", forklaring: { no: "«han som åpenbarte lyset», navnet på Abba Selama", am: "የአባ ሰላማ መጠሪያ" } },
    { ord: "ተስዓቱ ቅዱሳን", forklaring: { no: "de ni hellige munkene som kom omkring år 480", am: "ዘጠኙ ቅዱሳን" } },
    { ord: "ገዳም", forklaring: { no: "kloster", am: "መነኮሳት የሚኖሩበት ቦታ" } },
    { ord: "ተሰወረ", forklaring: { no: "«ble tatt bort» uten å dø, som Enok og Elia", am: "ሳይሞት ከዚህ ዓለም ተለየ" } },
    { ord: "ሰማዕተ ጽድቅ", forklaring: { no: "«rettferdighetens martyr», tittel for Abune Petros", am: "የአቡነ ጴጥሮስ መጠሪያ" } },
    { ord: "ቃል ኪዳን", forklaring: { no: "løfte (pakt) som Gud ga en helgen", am: "እግዚአብሔር ለቅዱሳን የሰጠው ተስፋ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva er en ገድል, og hvorfor skriver vi «Tradisjon:»?", am: "ገድል ምንድን ነው? «ትውፊት» ብለን ለምን እንጽፋለን?" },
      svar: {
        no: "En ገድል er boka om en helgens liv og kamp. Vi skriver «Tradisjon:» for å vise at det kommer fra kirkas bøker, ikke fra historikernes kilder.",
        am: "ገድል የቅዱሳንን ሕይወትና ተጋድሎ የሚተርክ መጽሐፍ ነው። ከቤተ ክርስቲያን መጻሕፍት የተገኘ መሆኑን ለማሳየት «ትውፊት» እንላለን።",
      },
    },
    {
      sporsmal: { no: "Hvorfor kalles Abba Selama ከሣቴ ብርሃን?", am: "አባ ሰላማ ለምን ከሣቴ ብርሃን ተባሉ?" },
      svar: {
        no: "Fordi han brakte lyset, evangeliet, til Etiopia og ble landets første biskop.",
        am: "የወንጌልን ብርሃን ለኢትዮጵያ ስለ ገለጡና የመጀመሪያው ጳጳስ ስለሆኑ ነው።",
      },
    },
    {
      sporsmal: { no: "Hva gjorde de ni hellige for kirka vår?", am: "ተስዓቱ ቅዱሳን ለቤተ ክርስቲያናችን ምን አደረጉ?" },
      svar: {
        no: "De oversatte Bibelen og kirkas bøker til ge'ez og grunnla de første klostrene.",
        am: "መጽሐፍ ቅዱስንና የቤተ ክርስቲያን መጻሕፍትን ወደ ግእዝ ተረጐሙ፤ የመጀመሪያዎቹን ገዳማት መሠረቱ።",
      },
    },
    {
      sporsmal: { no: "Hva betyr navnet Tekle Haymanot, og når minnes han?", am: "ተክለ ሃይማኖት ማለት ምን ማለት ነው? መቼ ይታሰባሉ?" },
      svar: {
        no: "«Troens plante». Han minnes ታኅሣሥ 24 (fødselen), ነሐሴ 24 (da han døde) og den 24. i hver måned.",
        am: "«የሃይማኖት ተክል» ማለት ነው። ታኅሣሥ ፳፬ ልደታቸው፣ ነሐሴ ፳፬ ዕረፍታቸው ነው፤ በየወሩም በ፳፬ ይታሰባሉ።",
      },
    },
    {
      sporsmal: { no: "Hvilken uvanlig bønn ba Kristos Semra?", am: "ቅድስት ክርስቶስ ሠምራ ምን ዓይነት ድንቅ ልመና ለመነች?" },
      svar: {
        no: "Hun ba Gud om nåde for djevelen. Hun viser oss hvor stor kjærlighet kan være.",
        am: "ለዲያብሎስ እንኳ ምሕረትን ለመነች። ፍቅር ምን ያህል ታላቅ እንደሚሆን ታሳየናለች።",
      },
    },
    {
      sporsmal: { no: "Hvorfor kalles Abune Petros ሰማዕተ ጽድቅ?", am: "አቡነ ጴጥሮስ ለምን ሰማዕተ ጽድቅ ይባላሉ?" },
      svar: {
        no: "Fordi han sto fast for kirka og folket da Italia okkuperte landet, og ble drept for det i 1936.",
        am: "ጣልያን ሀገሪቱን በወረረ ጊዜ ለቤተ ክርስቲያንና ለሀገር ጸንተው ቆመው ስለ ተገደሉ ነው።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: «አቡነ አረጋዊ ዘደብረ ዳሞ» (etter ስንክሳር ጥቅምት 14)", url: "https://eotcmk.org/a/አቡነ-አረጋዊ-ዘደብረ-ዳሞ/" },
    { navn: "Mahibere Kidusan: «“ጌታዬ ኢየሱስ ክርስቶስን ልከተለው እሄዳለሁ”» (Abune Aregawi)", url: "https://eotcmk.org/a/ጌታዬ-ኢየሱስ-ክርስቶስን-ልከተለው-እሄ/" },
    { navn: "Mahibere Kidusan: «አባ ገሪማ ዘመደራ»", url: "https://eotcmk.org/a/አባ-ገሪማ-ዘመደራ-2/" },
    { navn: "Mahibere Kidusan: «ተዝካረ ዕረፍቱ ለአቡነ ገብረ መንፈስ ቅዱስ»", url: "https://eotcmk.org/a/ተዝካረ-ዕረፍቱ-ለአቡነ-ገብረ-መንፈስ-ቅዱ/" },
    { navn: "Mahibere Kidusan: «የንሂሳው ኮከብ» (Abune Gebre Menfes Kidus)", url: "https://eotcmk.org/a/የንሂሳው-ኮከብ/" },
    { navn: "Mahibere Kidusan: «“ክቡር ሞቱ ለጻድቅ በቅድመ እግዚአብሔር”» (Tekle Haymanot)", url: "https://eotcmk.org/a/ክቡር-ሞቱ-ለጻድቅ-በቅድመ-እግዚአብሔር/" },
    { navn: "Mahibere Kidusan: «ቅድስት ክርስቶስ ሠምራ» (barn)", url: "https://eotcmk.org/a/ቅድስት-ክርስቶስ-ሠምራ-2/" },
    { navn: "Mahibere Kidusan: «የኢትዮጵያውያን ቅዱሳት አንስት አርአያነት»", url: "https://eotcmk.org/a/የኢትዮጵያውያን-ቅዱሳት-አንስት-ተምሳሌ/" },
    { navn: "Mahibere Kidusan: «የጥያቄዎቹ ምላሾች» (Meskel Kibra)", url: "https://eotcmk.org/a/የጥያቄዎቹ-ምላሾች/" },
    { navn: "Mahibere Kidusan: «ግሽን ማርያም» (Zara Yaqob og korset)", url: "https://eotcmk.org/a/ግሽን-ማርያም/" },
    { navn: "Mahibere Kidusan: «ቅዱስ ዑራኤል በግሸን አምባ» (Kaleb og Zara Yaqob)", url: "https://eotcmk.org/a/ቅዱስ-ዑራኤል-በግሸን-አምባ/" },
    { navn: "Mahibere Kidusan: «ሊቀ መላእክት ቅዱስ ዑራኤል» og «ወርኃ ሐምሌ» (Abba Giorgis ze-Gasicha)", url: "https://eotcmk.org/a/ሊቀ-መላእክት-ቅዱስ-ዑራኤል/" },
    { navn: "Mahibere Kidusan: MK-utstillingen i Addis Abeba 2016 (oversikt over kirkas historie)", url: "https://eotcmk.org/a/የኢትዮጵያ-ኦርቶዶክስ-ተዋሕዶ-ቤተ-ክርስ-5/" },
    { navn: "Mahibere Kidusan: «የሰማዕተ ጽድቅ ብፁዕ አቡነ ጴጥሮስ እና የብፁዕ አቡነ ጎርጎርዮስ መታሰቢያ መርሐ ግብር ተካሄደ»", url: "https://eotcmk.org/a/የሰማዕተ-ጽድቅ-ብፁዕ-አቡነ-ጴጥሮስ-እና-የ/" },
    { navn: "ethiopianorthodox.org: Sergew Hable Sellassie og Tadesse Tamerat, «The Church of Ethiopia» (EOTC 1970)", url: "https://www.ethiopianorthodox.org/english/ethiopian/prechristian.html" },
  ],
  utkast: true,
};
