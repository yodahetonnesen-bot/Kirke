import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om kirkeskolen og søndagsskolen:
// ethiopianorthodox.org: «The Ethiopian Orthodox Church School System» (Sergew Hable Sellassie og Taddesse Tamrat,
// «The Church of Ethiopia – A Panorama of History and Spiritual Life», EOTC 1970: ንባብ ቤት med 231 bokstaver, sugerøret,
// ቁጥር, ግእዝ, ውርድ ንባብ og ቁም ንባብ, 1. Johannesbrev, kveldslekser, ዳዊት og festen etterpå; ቅዳሴ ቤት; de høyere skolene
// for ዜማ, ቅኔ og መጻሕፍት; vandrende elever; en ዜማ-dag; ቅኔ-timen og formene; de fire grenene i መጻሕፍት ቤት) og
// «የዜማ ቃል ትምህርት» (PDF: ዜማ-lærdommen begynner med ሰላም ለኪ i ውዳሴ ማርያም);
// Mahibere Kidusan (eotcmk.org): «ሰንበት ትምህርት ቤቶች ለቅድስት ቤተ ክርስቲያን ሐዋርያዊ ተልእኮ መሳካት ያላቸው ሚና»
// (søndagsskolens historie, ቃለ ዓዋዲ, læreplanen fra 2011 e.t., målene), «ማኅበረ ቅዱሳን ማን ነው? ክፍል ሦስት» (አብነት
// ትምህርት ቤት som stedet der lære og tradisjon går videre, MKs støtte), «ማኅበረ ቅዱሳን 34ኛ ዓመት የምሥረታ በዓሉን አከበረ»
// (grunnlagt 1984 e.t. med Den hellige synodes tillatelse, sentre i og utenfor Etiopia, ግቢ ጉባኤ), «የሊቃውንቱ ምንጭ
// እንዳይደርቅ …» (አቋቋም-skolen i Gondar, elevene som tigger «በእንተ ስማ ለማርያም», biskopenes ord), «ደቀ መዛሙርት የቤተ
// ክርስቲያን ደጀን ናቸው» (hva elevene lærer), «ወላጆች ልጆቻችንን በመንፈሳዊ መንገድ እንዴት እናስተምር?» (foreldrenes
// ansvar, søndagsskolen, instrumenter), «የቀለሙ ልጅ» og «ልሳነ አርድእት» (ቆሎ ተማሪ, kappen av saueskinn) og «ዝክረ ቅዱስ ያሬድ»
// og «ኢትዮጵያዊው ቅዱስ ያሬድ» (Yared som elev, lærerne i ዝማሬ og መዋሥዕት).
// Usikkert: Rekkefølgen på trinnene varierer. Kilden fra ethiopianorthodox.org setter ንባብ ቤት først og ቅዳሴ ቤት etter, og
// regner ዜማ ቤት, ቅኔ ቤት og መጻሕፍት ቤት som de høyere skolene. En elev går ikke nødvendigvis gjennom alle; mange velger én gren.
// Vi har skrevet det slik.
// Usikkert: Ordet አንድምታ (forklaringsmåten i መጻሕፍት ቤት) står ikke i kildene vi har lest. Vi bruker ትርጓሜ (tolkning) og
// nevner አንድምታ som det vanlige navnet – en lærer bør bekrefte.
// Usikkert: Kildene har ikke sitater fra de gamle kirkefedrene (አትናቴዎስ, ዮሐንስ አፈወርቅ osv.) om barneundervisning. Under
// `fedre` står derfor ቅዱስ ያሬድ og nålevende biskoper, slik MK gjengir dem.
export const kirkeskolen: Tema = {
  slug: "kirkeskolen",
  del: "musikk",
  tittel: { no: "Kirkeskolen", am: "አብነት ትምህርት ቤትና ሰንበት ትምህርት ቤት" },
  undertittel: {
    no: "Fra ፊደል til ቅኔ – slik har kirka lært barna troen i hundrevis av år",
    am: "ከፊደል እስከ ቅኔ – ቤተ ክርስቲያን ልጆቿን የምታስተምርበት ሥርዓት",
  },
  bilde: "evangeliebokTekst",
  ingress: {
    no:
      "I over tusen år har kirka i Etiopia hatt sin egen skole: አብነት ትምህርት ቤት. Der lærer barna å lese ፊደል, å be, å synge Yareds sang, å lage ቅኔ og å forklare Bibelen. I dag har hver menighet også en søndagsskole (ሰንበት ትምህርት ቤት). Gud vil at troen skal gå fra foreldre til barn, fra lærer til elev. Også vi i Norge kan være med i denne kjeden.",
    am:
      "ቤተ ክርስቲያን ልጆቿን የምታስተምርበት የራሷ ትምህርት ቤት አላት፤ ይህም አብነት ትምህርት ቤት ነው። በዚያ ልጆች ፊደል ያጠናሉ፤ ጸሎት ይማራሉ፤ የቅዱስ ያሬድን ዜማ፣ ቅኔንና የመጻሕፍትን ትርጓሜ ይማራሉ። ዛሬም በየአጥቢያው ሰንበት ትምህርት ቤት አለ። እግዚአብሔር ሃይማኖት ከወላጆች ወደ ልጆች፣ ከመምህር ወደ ደቀ መዝሙር እንዲተላለፍ ይፈልጋል። በኖርዌይ ያለነውም በዚህ ሰንሰለት ውስጥ መሳተፍ እንችላለን።",
  },
  hovedvers: "Prov 22:6",
  avsnitt: [
    {
      id: "hvorfor",
      tittel: { no: "Hvorfor skal barn lære troen?", am: "ልጆች ሃይማኖትን ለምን ይማራሉ?" },
      punkter: [
        {
          tekst: {
            no: "Gud sa til Moses at foreldrene skal ha Guds ord i hjertet og lære det til barna sine – hjemme, på veien, når de legger seg og når de står opp. Troen skal gå videre fra slekt til slekt.",
            am: "እግዚአብሔር ሙሴን «ይህን ቃል በልብህ ያዝ። ለልጆችህም አስተምረው» አለው፤ በቤት ሲቀመጡ፣ በመንገድ ሲሄዱ፣ ሲተኙና ሲነሡ። ሃይማኖት ከትውልድ ወደ ትውልድ መተላለፍ አለበት።",
          },
          vers: ["Deut 6:6-7", "Prov 4:1-2"],
        },
        {
          tekst: {
            no: "Salomo sier: «Lær den unge den vei han skal gå! Så viker han ikke fra den, selv når han blir gammel.» Mahibere Kidusan minner foreldre om at det største ansvaret de har, er å oppdra barna i troen, så de når Guds rike.",
            am: "ሰሎሞን «ልጅን በሚሄድበት መንገድ ምራው፥ በሸመገለም ጊዜ ከእርሱ ፈቀቅ አይልም» ይላል። ማኅበረ ቅዱሳን እንደሚያስተምረው የወላጆች ትልቁ ኃላፊነት ልጆችን ሃይማኖትንና ምግባርን አስተምሮ ለእግዚአብሔር መንግሥት እንዲበቁ በፈሪሀ እግዚአብሔር ማሳደግ ነው።",
          },
          vers: ["Prov 22:6", "Eph 6:4", "Ps 127:3"],
        },
        {
          tekst: {
            no: "Timoteus hadde kjent de hellige skriftene fra han var barn. Troen hans bodde først i bestemoren Lois og moren Eunike. Det vi lærer som små, gir oss visdom til frelse.",
            am: "ጢሞቴዎስ ከሕፃንነቱ ጀምሮ ቅዱሳት መጻሕፍትን አውቋል። እምነቱም ቀድሞ በአያቱ በሎይድና በእናቱ በኤውንቄ ነበረ። በልጅነታችን የምንማረው ለመዳን ጥበብ ይሰጠናል።",
          },
          vers: ["2Tim 3:14-15", "2Tim 1:5"],
        },
        {
          tekst: {
            no: "Da Jesus var tolv år, satt han i templet midt blant lærerne. Han hørte på dem og spurte dem, og alle undret seg over forstanden og svarene hans. Slik skal også vi lytte, spørre og lære.",
            am: "ጌታችን የዐሥራ ሁለት ዓመት ልጅ ሳለ «በመምህራን መካከል ተቀምጦ ሲሰማቸውም ሲጠይቃቸውም በመቅደስ አገኙት»። እኛም እንደዚሁ እንሰማለን፣ እንጠይቃለን፣ እንማራለን።",
          },
          vers: ["Luke 2:46-47"],
        },
        {
          tekst: {
            no: "Jesus sa: «La de små barn være og hindre dem ikke fra å komme til mig!» Da barna ropte «Hosianna» i templet, sa han at Gud har beredt seg lovprisning av barns munn.",
            am: "ጌታችን «ሕፃናትን ተዉአቸው፥ ወደ እኔም ይመጡ ዘንድ አትከልክሉአቸው» አለ። ልጆች በመቅደስ «ሆሣዕና» ብለው በጮኹ ጊዜም «ከሕፃናትና ከሚጠቡት አፍ ምስጋናን ለራስህ አዘጋጀህ» አለ።",
          },
          vers: ["Matt 19:14", "Matt 21:15-16"],
        },
      ],
    },
    {
      id: "abnet",
      tittel: { no: "Den gamle kirkeskolen: አብነት ትምህርት ቤት", am: "አብነት ትምህርት ቤት" },
      ingress: {
        no: "Kirkeskolen er en av de eldste i kristenheten. Den begynte i Aksum da kristendommen kom på 300-tallet. I mange hundre år var kirkas skoler de eneste skolene i landet.",
        am: "የአብነት ትምህርት ቤት በክርስትና ዓለም ካሉት እጅግ ጥንታውያን ትምህርት ቤቶች አንዱ ነው። ክርስትና ወደ አክሱም በገባበት ጊዜ ጀምሮ ለብዙ መቶ ዘመናት በሀገሪቱ የነበሩት ትምህርት ቤቶች የቤተ ክርስቲያን ብቻ ነበሩ።",
      },
      punkter: [
        {
          tekst: {
            no: "Mahibere Kidusan skriver at kirkeskolen er stedet der kirkas lære, orden, historie og tradisjon går videre fra slekt til slekt. Prester, diakoner og kirkesangere har lært alt de kan der.",
            am: "ማኅበረ ቅዱሳን እንደሚለው «አብነት ትምህርት ቤት የቤተ ክርስቲያን ትምህርት፣ ሥርዓት፣ ታሪክና ትውፊት ከትውልድ ወደ ትውልድ ማስተላለፍ የሚቻልበት» መድረክ ነው። ካህናት፣ ዲያቆናትና ሊቃውንት የተማሩት በዚያ ነው።",
          },
          vers: ["2Tim 2:2", "Ps 45:17"],
        },
        {
          tekst: {
            no: "Skolen har flere trinn: Først ንባብ ቤት (leseskolen). Mange går så til ቅዳሴ ቤት for å lære ቅዳሴ. De høyere skolene er ዜማ ቤት (sangskolen), ቅኔ ቤት (diktskolen) og መጻሕፍት ቤት (bokskolen, der Bibelen og fedrenes bøker forklares). En elev velger ofte én gren og blir lærer i den.",
            am: "ትምህርቱ በደረጃ ይሰጣል፤ መጀመሪያ ንባብ ቤት ነው። ብዙዎች ቀጥለው ቅዳሴ ቤት ይገባሉ። ከፍተኛዎቹ ጉባኤያት ዜማ ቤት፣ ቅኔ ቤትና መጻሕፍት ቤት ናቸው። ብዙ ጊዜ ተማሪው አንዱን ዘርፍ መርጦ በዚያ መምህር ይሆናል።",
          },
          vers: ["Heb 5:12"],
        },
        {
          tekst: {
            no: "Alt læres utenat, og læreren følger hver elev hver dag. Kirka ser på lærdommen som noe hellig, som bønn. Derfor tar elevene leksene sine på alvor.",
            am: "ትምህርቱ በቃል ይጠናል፤ መምህሩም የእያንዳንዱን ተማሪ እድገት በየቀኑ ይከታተላል። ትምህርቱ እንደ ጸሎት የተቀደሰ ስለሆነ ተማሪዎቹ በትጋት ይማሩታል።",
          },
          vers: ["Ps 119:11", "Ps 1:2"],
        },
      ],
    },
    {
      id: "nebab",
      tittel: { no: "ንባብ ቤት – leseskolen", am: "ንባብ ቤት" },
      ingress: {
        no: "Nesten hver kirke har en ንባብ ቤት. Barna begynner gjerne når de er fem til sju år.",
        am: "ንባብ ቤት በሁሉም አብያተ ክርስቲያናት ማለት ይቻላል ይገኛል። ልጆች ከአምስት እስከ ሰባት ዓመታቸው ይጀምራሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "Først lærer barnet ፊደል: 33 bokstaver i sju former, til sammen 231. Barnet peker på hver bokstav med et lite strå og sier den høyt. Etterpå leser det bokstavene baklengs og nedover, så det virkelig kjenner dem. Dette kalles ቁጥር («å telle»).",
            am: "ሕፃኑ መጀመሪያ ፊደል ይማራል። በገለባ ወይም በቀጭን እንጨት እያንዳንዱን ፊደል እየጠቆመ ድምፁን ከፍ አድርጎ ይጠራል። ከዚያም ፊደሉን ከኋላ ወደ ፊት፣ ከላይ ወደ ታች እያጠና ይለያል፤ ይህ ቁጥር ይባላል።",
          },
          vers: ["Isa 50:4"],
        },
        {
          tekst: {
            no: "Den første boka barnet leser, er Johannes' første brev, som kalles ፊደለ ሐዋርያ. Det leses i fire steg: ቁጥር (bokstav for bokstav), ግእዝ (ordene settes sammen), ውርድ ንባብ (rolig og nøyaktig lesing) og ቁም ንባብ (rask lesing uten feil).",
            am: "ሕፃኑ የሚያነበው የመጀመሪያው መጽሐፍ ፊደለ ሐዋርያ ነው፤ ይህም የዮሐንስ መልእክት ነው። ንባቡም በአራት ደረጃ ይጠናል፦ ቁጥር፣ ግእዝ፣ ውርድ ንባብና ቁም ንባብ።",
          },
          vers: ["1John 1:1"],
        },
        {
          tekst: {
            no: "Hver kveld kommer elevene til læreren og lærer de daglige bønnene utenat, setning for setning. Så lærer de å lese evangeliet etter Johannes, ውዳሴ ማርያም og andre bøker som brukes i kirka.",
            am: "ተማሪዎቹ በየማታው ወደ መምህሩ ቤት መጥተው የዘወትር ጸሎትን ዐረፍተ ነገር በዐረፍተ ነገር በቃል ያጠናሉ። ቀጥሎም ወንጌለ ዮሐንስን፣ ውዳሴ ማርያምንና በቤተ ክርስቲያን የሚነበቡትን መጻሕፍት ያነባሉ።",
          },
          vers: ["Ps 119:97", "Prov 1:8"],
        },
        {
          tekst: {
            no: "Til slutt leser eleven Davids salmer (ዳዊት), den viktigste bønneboka for etiopiske kristne. Når eleven kan lese ዳዊት godt, er leseskolen ferdig. Det er en stor dag, og familien lager ofte fest.",
            am: "በመጨረሻ ተማሪው መዝሙረ ዳዊትን ያነባል፤ ዳዊት የኢትዮጵያውያን ክርስቲያኖች ዋናው የጸሎት መጽሐፍ ነው። ዳዊትን አጥርቶ ሲያነብ ንባብ ቤትን ይጨርሳል። ይህ ታላቅ ቀን ነው፤ ወላጆችም ብዙ ጊዜ ድግስ ያደርጋሉ።",
          },
          vers: ["Ps 119:105", "Ps 119:130"],
        },
      ],
    },
    {
      id: "hoyere",
      tittel: { no: "ቅዳሴ ቤት, ዜማ ቤት, ቅኔ ቤት og መጻሕፍት ቤት", am: "ቅዳሴ ቤት፣ ዜማ ቤት፣ ቅኔ ቤትና መጻሕፍት ቤት" },
      punkter: [
        {
          tekst: {
            no: "I ቅዳሴ ቤት lærer gutter som skal bli diakoner og prester, sin del av ቅዳሴ. Resten lærer de ved å følge en prest i tjenesten hver dag. Elevene lærer også ሰዓታት og ordenen i kirka.",
            am: "በቅዳሴ ቤት ዲያቆናትና ካህናት የሚሆኑ ልጆች የዲቁናንና የቅስናን የቅዳሴ ድርሻ ይማራሉ፤ የቀረውንም ከካህን ጋር በየዕለቱ በማገልገል ይማራሉ። ሥርዓተ ቅዳሴንና ሰዓታትንም ይማራሉ።",
          },
          vers: ["1Sam 3:1", "Mal 2:7"],
        },
        {
          tekst: {
            no: "I ዜማ ቤት lærer elevene Yareds sang. De begynner med ውዳሴ ማርያም («ሰላም ለኪ») og går videre til ድጓ og de andre bøkene. Elevene øver i grupper, og de flinkeste hjelper de nye. Når en elev kan en hymne, synger han den for læreren. Noen lærer også አቋቋም, sangen med stav og bevegelse.",
            am: "በዜማ ቤት የቅዱስ ያሬድ ዜማ ይጠናል። የዜማ ትምህርት የሚጀመረው በውዳሴ ማርያም («ሰላም ለኪ») ነው፤ ቀጥሎም ድጓንና ሌሎቹን መጻሕፍት ይማራሉ። ተማሪዎቹ በቡድን ያጠናሉ፤ የቀደሙት ጀማሪዎችን ይረዳሉ። ዜማውን ሲያውቅም በመምህሩ ፊት ያዜማል። አንዳንዶችም አቋቋምን ይማራሉ።",
          },
          vers: ["Col 3:16", "Neh 12:46"],
        },
        {
          tekst: {
            no: "I ቅኔ ቤት lærer eleven ge'ez godt. Om ettermiddagen bøyer de ord sammen, og læreren forteller om helgenen som feires neste dag. Neste morgen finner eleven et stille sted og lager sin ቅኔ. Så sier han den fram for læreren. Kirka sier at de dyktigste prestene ofte har gått i ቅኔ ቤት.",
            am: "በቅኔ ቤት ተማሪው ግእዝን በሚገባ ያውቃል። ከሰዓት በኋላ በጉባኤ ግሶችን ይገስሳሉ፤ መምህሩም በማግሥቱ የሚከበረውን የቅዱሱን ታሪክ ይነግራቸዋል። በማግሥቱ ተማሪው ገለል ብሎ ቅኔውን ይቀኛል፤ ከዚያም ለመምህሩ ያሰማል። በቅኔ ቤት የተማሩ ካህናት እጅግ ብቁ እንደሆኑ ይታወቃል።",
          },
          vers: ["Ps 45:2", "Ps 49:5"],
        },
        {
          tekst: {
            no: "መጻሕፍት ቤት er det høyeste trinnet. Den har fire grener: Det gamle testamentet (ብሉያት), Det nye testamentet (ሐዲሳት), kirkefedrenes bøker (ሊቃውንት) og munkenes bøker (መነኮሳት). Her lærer de også ፍትሐ ነገሥት og ባሕረ ሐሳብ (kalenderregningen).",
            am: "መጻሕፍት ቤት የመጨረሻው ከፍተኛ ጉባኤ ነው። አራት ጉባኤያት አሉት፤ እነርሱም ብሉያት፣ ሐዲሳት፣ ሊቃውንትና መነኮሳት ናቸው። ፍትሐ ነገሥትና ባሕረ ሐሳብም በዚሁ ይጠናሉ።",
          },
          vers: ["Luke 24:27", "Matt 13:52"],
        },
        {
          tekst: {
            no: "Elevene kommer to og to eller tre og tre til læreren. En leser en setning på ge'ez. Læreren oversetter den til amharisk og forklarer den (ትርጓሜ, ofte kalt አንድምታ). Elevene gjentar forklaringen for hverandre til de kan den. Slik spurte også hoffmannen fra Etiopia: «Hvorledes skulde jeg vel kunne det uten at nogen veileder mig?»",
            am: "ተማሪዎቹ በሁለት በሦስት ሆነው ወደ መምህሩ ይቀርባሉ። አንዱ በግእዝ ያነባል፤ መምህሩ ወደ አማርኛ እየተረጎመ ያብራራል። ተማሪዎቹም ትርጓሜውን እርስ በርሳቸው እየደጋገሙ ያጠናሉ። ኢትዮጵያዊው ጃንደረባም «የሚመራኝ ሳይኖር ይህ እንዴት ይቻለኛል?» ብሎ ነበር።",
          },
          vers: ["Acts 8:30-31", "Neh 8:8"],
        },
      ],
    },
    {
      id: "laerere",
      tittel: { no: "Lærerne: መምህር og መሪጌታ", am: "መምህራን፦ መምህርና መሪጌታ" },
      punkter: [
        {
          tekst: {
            no: "Læreren kalles መምህር. Elevene sitter ved føttene hans, slik Paulus ble «oplært ved Gamaliels føtter» og Maria satt ved Jesu føtter og hørte på ordet hans. Elevene viser læreren stor respekt.",
            am: "መምህሩ «መምህር» ይባላል። ተማሪዎቹ ጳውሎስ «በገማልያል እግር አጠገብ» እንዳደገ፣ ማርያምም ቃሉን ልትሰማ «በኢየሱስ እግር አጠገብ» እንደ ተቀመጠች በመምህራቸው እግር ሥር ይማራሉ። መምህራቸውንም ያከብራሉ።",
          },
          vers: ["Acts 22:3", "Luke 10:39"],
        },
        {
          tekst: {
            no: "En lærer i kirkesangen og lederen for sangerne kalles መሪጌታ. De som har fullført en av de høyere skolene, kalles ደብተራ. Store lærde kalles ሊቃውንት. Mange av dem er ikke prester, men tjener kirka med sang, ቅኔ og undervisning.",
            am: "የዜማና የአቋቋም መምህርና የመዘምራን መሪ «መሪጌታ» ይባላል። ከከፍተኛዎቹ ጉባኤያት አንዱን የጨረሱ ደብተራ ይባላሉ፤ ታላላቅ ምሁራን ደግሞ ሊቃውንት ይባላሉ። ብዙዎቹ ካህናት ባይሆኑም ቤተ ክርስቲያንን በዜማ፣ በቅኔና በማስተማር ያገለግላሉ።",
          },
          vers: ["1Chr 25:7", "Heb 13:7"],
        },
        {
          tekst: {
            no: "En god elev blir selv lærer. Yared tok over etter læreren sin, Abba Gedeon, og lærte opp mange elever. I dag fortsetter lærerne i ዝማሬ og መዋሥዕት Yareds skole. Paulus sier: Gi det du har lært videre til trofaste mennesker som kan lære andre.",
            am: "ጥሩ ተማሪ ራሱ መምህር ይሆናል። ቅዱስ ያሬድ የመምህሩን የአባ ጌዲዮንን ቦታ ተረክቦ ብዙ ደቀ መዛሙርትን አፈራ። «የዝማሬና መዋሥዕት መምህራን የቅዱስ ያሬድን ጉባኤ ተክተው አሁንም ድረስ በማስተማር ላይ ናቸው።»",
          },
          vers: ["2Tim 2:2", "Ps 71:17"],
        },
      ],
    },
    {
      id: "elevene",
      tittel: { no: "Hvordan elevene levde: ቆሎ ተማሪ", am: "የቆሎ ተማሪ ሕይወት" },
      punkter: [
        {
          tekst: {
            no: "For å komme til de høyere skolene forlater eleven ofte hjemmet og vandrer fra kirke til kirke og fra kloster til kloster for å finne en god lærer. En slik elev kalles ቆሎ ተማሪ, fordi han ofte lever av ቆሎ – ristet korn.",
            am: "ከፍተኛውን ትምህርት ለመማር ተማሪው ብዙ ጊዜ ቤተሰቡን ትቶ ጥሩ መምህር ፍለጋ ከደብር ወደ ደብር፣ ከገዳም ወደ ገዳም ይሄዳል። እንዲህ ያለው ተማሪ «የቆሎ ተማሪ» ይባላል፤ ብዙ ጊዜ ቆሎ እየቆረጠመ ይማራልና።",
          },
          vers: ["Matt 13:44", "Matt 4:4"],
        },
        {
          tekst: {
            no: "Elevene lever enkelt. De bærer en kappe av saueskinn (አጎዛ) og bor i små hytter ved kirka. De går rundt i landsbyene og ber om mat: «በእንተ ስማ ለማርያም» – «for Marias navns skyld». Folk gir dem mat. Ofte hjelper de yngste elevene med å hente mat, og de eldre lærer dem til gjengjeld.",
            am: "ተማሪዎቹ በቀላል ኑሮ ይኖራሉ፤ የበግ አጎዛ ይለብሳሉ፤ በቤተ ክርስቲያኑ አጠገብ በትናንሽ ጎጆዎች ያድራሉ። በየመንደሩ እየዞሩ «በእንተ ስማ ለማርያም» ብለው ምግብ ይለምናሉ፤ ምእመናንም ይመጸውቷቸዋል። ብዙ ጊዜ ትንንሽ ልጆች ምግብ ያመጡላቸዋል፤ እነርሱም እነዚህን ልጆች ያስተምሯቸዋል።",
          },
          vers: ["Phil 4:12", "Matt 10:8"],
        },
        {
          tekst: {
            no: "Livet er hardt, med sult og kulde, men elevene er glade og ivrige. De har selv valgt å komme, og de vet at lærdommen er hellig. Mahibere Kidusan skriver at de lærte Yareds sang «sittende ved lærernes føtter» i mange år, uten å la seg stoppe av sult, nakenhet, sykdom og ensomhet.",
            am: "ኑሮው በረኃብና በብርድ የተሞላ ቢሆንም ተማሪዎቹ በደስታና በትጋት ይማራሉ። ማኅበረ ቅዱሳን እንደሚለው የቤተ ክርስቲያን ልጆች «ረኃብ እና እርዛት፣ በሽታ እና ብቸኝነት ሳይበግራቸው ሙሉ ጊዜአቸውን ሰጥተው ለብዙ ዓመታት በጉባኤ ቤት ከመምህራን እግር ሥር ቁጭ ብለው» ዜማውን ተማሩት።",
          },
          vers: ["2Tim 2:3", "Heb 12:11"],
        },
        {
          tekst: {
            no: "I dag er mange kirkeskoler fattige, og færre unge velger dem. Mahibere Kidusan bygger hus for elevene, gir dem penger hver måned og hjelper lærerne, så kilden til kirkas lærdom ikke skal tørke ut.",
            am: "ዛሬ ብዙ የአብነት ትምህርት ቤቶች በችግር ላይ ናቸው። ማኅበረ ቅዱሳን የሊቃውንቱ ምንጭ እንዳይደርቅ ለጉባኤ ቤቶች ሕንጻ ይሠራል፤ ለተማሪዎች ወርሃዊ ድጋፍ ያደርጋል፤ መምህራንንም ይረዳል።",
          },
          vers: ["Gal 6:6", "Acts 20:35"],
        },
      ],
    },
    {
      id: "sondagsskolen",
      tittel: { no: "Søndagsskolen og መዝሙር", am: "ሰንበት ትምህርት ቤትና መዝሙር" },
      punkter: [
        {
          tekst: {
            no: "Søndagsskolen (ሰንበት ትምህርት ቤት) ble startet i Etiopia i årene 1935–1940 (etiopisk tidsregning). Fedrene ville at barna ikke skulle glemme troen når de begynte på moderne skole. I 1953 (etiopisk tidsregning) ba patriark Abune Basilios om at hver menighet skulle ha en søndagsskole.",
            am: "ትውልዱ ወደ ዘመናዊ ትምህርት በማዘንበል ሃይማኖቱን ችላ እንዳይል አባቶቻችን ከ፲፱፻፴፭–፲፱፻፵ ዓ.ም. ሰንበት ትምህርት ቤትን መሠረቱ። በ፲፱፻፶፫ ዓ.ም. በብፁዕ ወቅዱስ አቡነ ባስልዮስ ትእዛዝ በየአጥቢያው ሰንበት ትምህርት ቤት እንዲቋቋም ተደረገ።",
          },
          vers: ["Ps 78:6-7"],
        },
        {
          tekst: {
            no: "Søndagsskolen har fått oppgaven med å lære barn og unge troen. Siden 2011 (etiopisk tidsregning) har den en felles læreplan som Den hellige synode har vedtatt, med lærebøker og prøver. Målet er å oppdra barna til god livsførsel, styrke de unge i troen og lære opp en slekt som tar vare på det fedrene har gitt.",
            am: "በቃለ ዓዋዲ መሠረት ሕፃናትንና ወጣቶችን የማስተማር ኃላፊነት ለሰንበት ትምህርት ቤት ተሰጥቷል። ከ፳፻፲፩ ዓ.ም. ጀምሮ በቅዱስ ሲኖዶስ ውሳኔ ወጥ ሥርዓተ ትምህርት ተዘጋጅቷል። ዓላማውም «ሕፃናትን በምግባር ማሳደግ፤ ወጣቶችን በሃይማኖት ማጎልመስ እና የአባቶችን አደራ ተረክቦና ጠብቆ የሚያስረክብ» ትውልድ መፍጠር ነው።",
          },
          vers: ["1Tim 4:12", "Ps 119:9"],
        },
        {
          tekst: {
            no: "Søndagsskolen synger መዝሙር, lovsanger på amharisk og andre språk, ved høytidene og når ታቦት bæres ut. Også disse sangene skal følge Yareds toner og kirkas lære. Mange lærer også kirkas instrumenter: በገና (harpe), መሰንቆ, ከበሮ (tromme) og ዋሽንት (fløyte).",
            am: "የሰንበት ትምህርት ቤት መዘምራን በበዓላትና ታቦት በሚወጣበት ጊዜ መዝሙር ያቀርባሉ። መዝሙሩም የቅዱስ ያሬድን የዜማ ምልክቶችና የቤተ ክርስቲያንን ትምህርት ተከትሎ ይዘመራል። በብዙ ሰንበት ትምህርት ቤቶች በገና፣ መሰንቆ፣ ከበሮና ዋሽንት ይጠናሉ።",
          },
          vers: ["Ps 148:12-13", "Eph 5:19"],
        },
        {
          tekst: {
            no: "Søndagsskolen er også en plass for tjeneste. De unge hjelper til ved høytidene, gir til fattige og lærer de yngre. Jesus sa: «Det er saligere å gi enn å ta.» Det vi har fått gratis, skal vi gi gratis.",
            am: "ሰንበት ትምህርት ቤት የአገልግሎት ቦታም ነው። ወጣቶች በበዓላት ያገለግላሉ፣ የበጎ አድራጎት ሥራ ይሠራሉ፣ ታናናሾችን ያስተምራሉ። በነጻ የተቀበልነውን በነጻ እንሰጣለን፤ «ከሚቀበል ይልቅ የሚሰጥ ብፁዕ ነው»።",
          },
          vers: ["Acts 20:35", "Matt 10:8"],
        },
      ],
    },
    {
      id: "mk",
      tittel: { no: "Mahibere Kidusan (ማኅበረ ቅዱሳን)", am: "ማኅበረ ቅዱሳን" },
      punkter: [
        {
          tekst: {
            no: "Mahibere Kidusan ble grunnlagt i 1984 (etiopisk tidsregning) med tillatelse fra Den hellige synode. Den arbeider under kirkas avdeling for søndagsskolene. Den har sentre over hele Etiopia og i andre land, og grupper for studenter ved universitetene (ግቢ ጉባኤ).",
            am: "ማኅበረ ቅዱሳን በቅዱስ ሲኖዶስ ፈቃድ በ፲፱፻፹፬ ዓ.ም. ተመሠረተ። በሰንበት ትምህርት ቤቶች ማደራጃ መምሪያ ሥር ያገለግላል። በሀገር ውስጥና በውጭ ሀገር ማእከላት፣ በከፍተኛ ትምህርት ተቋማትም ግቢ ጉባኤያት አሉት።",
          },
          vers: ["Acts 2:42"],
        },
        {
          tekst: {
            no: "Mahibere Kidusan hjelper kirkeskolene og klostrene, forkynner evangeliet og lærer de unge. Den gir ut bøker, bladet ሐመር og avisa ስምዐ ጽድቅ, og lager መዝሙር-album på mange språk.",
            am: "ማኅበረ ቅዱሳን የአብነት ትምህርት ቤቶችንና ገዳማትን ይደግፋል፤ ስብከተ ወንጌል ያዳርሳል፤ ወጣቶችን ያስተምራል። «ሐመር» መጽሔትንና «ስምዐ ጽድቅ» ጋዜጣን፣ መጻሕፍትንም ያሳትማል፤ በተለያዩ ቋንቋዎች የመዝሙር አልበሞችን ያዘጋጃል።",
          },
          vers: ["Ps 145:4"],
        },
      ],
    },
    {
      id: "norge",
      tittel: { no: "Hvordan kan vi lære i Norge?", am: "በኖርዌይ እንዴት እንማራለን?" },
      punkter: [
        {
          tekst: {
            no: "Gå på søndagsskolen i menigheten vår. Mahibere Kidusan sier at hvert ortodoks barn bør gå gjennom søndagsskolen – også om sommeren. Der lærer du troen, bønnene og sangene sammen med andre barn.",
            am: "በአጥቢያችን ሰንበት ትምህርት ቤት ተማሩ። «እያንዳንዱ ኦርቶዶክሳዊ ልጅ በሰንበት ትምህርት ቤቶች ውስጥ ማለፍ ይኖርበታል፤ በጋውንም ጨምሮ።» በዚያ ሃይማኖትን፣ ጸሎትንና መዝሙርን ከሌሎች ልጆች ጋር ትማራላችሁ።",
          },
          vers: ["Heb 10:25", "Ps 122:1"],
        },
        {
          tekst: {
            no: "Lær ፊደል, slik barna i ንባብ ቤት gjør. Bruk fidel-treneren på /laer/fidel/ og øv litt hver dag. Når du kan lese ፊደል, kan du lese bønnene og Bibelen på amharisk og ge'ez.",
            am: "በንባብ ቤት እንደሚማሩት ልጆች ፊደልን ተማሩ። በዚህ ድረ ገጽ ያለውን የፊደል መለማመጃ በየቀኑ ተጠቀሙ። ፊደል ካወቃችሁ ጸሎቱንና መጽሐፍ ቅዱስን በአማርኛና በግእዝ ማንበብ ትችላላችሁ።",
          },
          vers: ["Ps 119:105"],
        },
        {
          tekst: {
            no: "Lær de daglige bønnene utenat, slik elevene i kirkeskolen gjør om kvelden. Bruk bønneboka på /bonner/, og be sammen med familien morgen og kveld.",
            am: "በአብነት ትምህርት ቤት ተማሪዎች በየማታው እንደሚያጠኑት የዘወትር ጸሎትን በቃል አጥኑ። በዚህ ድረ ገጽ ያለውን የጸሎት መጽሐፍ ተጠቅማችሁ ከቤተሰባችሁ ጋር ጠዋትና ማታ ጸልዩ።",
          },
          vers: ["Ps 119:164", "Deut 6:6-7"],
        },
        {
          tekst: {
            no: "Spør foreldrene, presten og søndagsskolelærerne når det er noe du ikke forstår – slik Jesus spurte lærerne i templet. Foreldre: Mahibere Kidusan minner om at den åndelige lærdommen er like viktig som skolen. «Hvad gagner det et menneske om han vinner den hele verden og tar skade på sin sjel?»",
            am: "ያልገባችሁን ነገር ወላጆቻችሁን፣ ካህኑንና የሰንበት ትምህርት ቤት መምህራንን ጠይቁ፤ ጌታችንም በመቅደስ መምህራንን ጠይቋልና። ወላጆችም ለልጆቻችን መንፈሳዊ ትምህርት ከዓለማዊ ትምህርታቸው ባልተናነሰ ትኩረት ልንሰጥ ይገባል፤ «ሰው ዓለምን ሁሉ ቢያተርፍ ነፍሱንም ቢያጐድል ምን ይጠቅመዋል?»",
          },
          vers: ["Luke 2:46-47", "Mark 8:36"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Yared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "Da Yared så larven som ikke gav opp, refset han seg selv: «Min sjel, hvorfor tåler du ikke tukten, og hvorfor tar du ikke imot lidelsen?» Så gikk han tilbake og sa til læreren sin: «Far, tilgi meg, og lær meg som før.»",
        am: "«ሰውነቴ ሆይ ግርፋትን ለምን አትታገስም፤ መከራንስ ለምን አትቀበልም» ብሎ ሰውነቱን ከገሠጸ በኋላ ወደ መምህሩ ተመልሶ «አባቴ ሆይ ይቅርታ አድርግልኝ፤ እንደ ቀድሞ አስተምረኝ» አለው።",
      },
      kilde: "Mahibere Kidusan: ኢትዮጵያዊው ቅዱስ ያሬድ (eotcmk.org), etter ታደሰ ዓለማየሁ: «የቤተ ክርስቲያን ብርሃን ቅዱስ ያሬድ»",
    },
    {
      navn: { no: "Abune Elsa, erkebiskop av Nord-Gondar", am: "ብፁዕ አቡነ ኤልሳዕ" },
      tekst: {
        no: "Til elevene som var ferdige med kirkeskolen: «Dere er jordens salt! … Dere må fortsatt arbeide mye, lære og undervise, og lære opp nye elever, så kilden til de lærde ikke tørker ut.»",
        am: "«እናንተ የምድር ጨው ናችሁ! … አሁንም ብዙ መሥራት፣ መማር፣ ማስተማር እና የሊቃውንቱ ምንጭ እንዳይደርቅ ደቀ መዛሙርትን ማፍራት ይገባችኋል።»",
      },
      kilde: "Mahibere Kidusan: የሊቃውንቱ ምንጭ እንዳይደርቅ ደቀ መዛሙርትን ማፍራት እንደሚገባ ተገለጸ (eotcmk.org)",
    },
    {
      navn: { no: "Abune Yohannes, biskop", am: "ብፁዕ አቡነ ዮሐንስ" },
      tekst: {
        no: "Han tok utgangspunkt i Davids ord: «I dine fedres sted skal dine sønner trede.» Til elevene sa han: «Dere disipler er verdens lys.» De skal tjene kirkene og landet med det de har fått i oppdrag.",
        am: "«ህየንተ አበዊኪ ተወልዱ ለኪ ደቂቅ፣ በአባቶችሽ ፈንታ ልጆች ተወለዱልሽ» በማለት የቅዱስ ዳዊትን ቃል መነሻ አድርገው «እናንተ ደቀ መዛሙርት የዓለም ብርሃን ናችሁ» አሉ።",
      },
      kilde: "Mahibere Kidusan: የሊቃውንቱ ምንጭ እንዳይደርቅ ደቀ መዛሙርትን ማፍራት እንደሚገባ ተገለጸ (eotcmk.org)",
    },
    {
      navn: { no: "Abune Antonios, erkebiskop av Vest-Hararge", am: "ብፁዕ አቡነ እንጦንስ" },
      tekst: {
        no: "«Elevene i kirkeskolen er kirkas bakvern.» Han sa at de hadde gått gjennom mye tid og mange prøvelser for å nå dit.",
        am: "«ደቀ መዛሙርት ለቤተ ክርስቲያን ደጀን ናቸው።» ደቀ መዛሙርቱ ለዚህ ደረጃ ለመድረስ ብዙ ጊዜና ፈተናዎችን እንዳሳለፉም ገለጹ።",
      },
      kilde: "Mahibere Kidusan: «ደቀ መዛሙርት የቤተ ክርስቲያን ደጀን ናቸው።» (eotcmk.org)",
    },
  ],
  ord: [
    { ord: "አብነት ትምህርት ቤት", forklaring: { no: "den tradisjonelle kirkeskolen", am: "የቤተ ክርስቲያን ጥንታዊ ትምህርት ቤት" } },
    { ord: "ጉባኤ ቤት", forklaring: { no: "skolen der en lærer underviser", am: "መምህሩ የሚያስተምርበት ቤት" } },
    { ord: "ንባብ ቤት", forklaring: { no: "leseskolen – første trinn", am: "የንባብ ትምህርት ቤት" } },
    { ord: "ዜማ ቤት", forklaring: { no: "sangskolen", am: "የዜማ ትምህርት ቤት" } },
    { ord: "ቅዳሴ ቤት", forklaring: { no: "skolen der en lærer ቅዳሴ", am: "የቅዳሴ ትምህርት ቤት" } },
    { ord: "ቅኔ ቤት", forklaring: { no: "diktskolen", am: "የቅኔ ትምህርት ቤት" } },
    { ord: "መጻሕፍት ቤት", forklaring: { no: "skolen der bøkene forklares", am: "የመጻሕፍት ትርጓሜ ጉባኤ" } },
    { ord: "ፊደለ ሐዋርያ", forklaring: { no: "Johannes' første brev, den første leseboka", am: "የዮሐንስ መልእክት" } },
    { ord: "ቆሎ ተማሪ", forklaring: { no: "vandrende elev som lever enkelt", am: "ቆሎ እየቆረጠመ የሚማር ተማሪ" } },
    { ord: "መምህር / መሪጌታ", forklaring: { no: "lærer / lærer og leder i kirkesangen", am: "መምህር / የዜማ መምህርና መሪ" } },
    { ord: "ደቀ መዝሙር", forklaring: { no: "elev, disippel (flertall ደቀ መዛሙርት)", am: "ተማሪ" } },
    { ord: "ሰንበት ትምህርት ቤት", forklaring: { no: "søndagsskolen", am: "የሰንበት ትምህርት ቤት" } },
    { ord: "መዝሙር", forklaring: { no: "lovsang, ofte på amharisk", am: "የምስጋና ዝማሬ" } },
    { ord: "ማኅበረ ቅዱሳን", forklaring: { no: "Mahibere Kidusan, en forening under kirkas søndagsskoleavdeling", am: "በሰንበት ትምህርት ቤቶች ማደራጃ መምሪያ ሥር ያለ ማኅበር" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva er første trinn i kirkeskolen, og hva lærer barna der?", am: "የአብነት ትምህርት የመጀመሪያው ደረጃ ምንድን ነው? ምንስ ይማራሉ?" },
      svar: {
        no: "ንባብ ቤት. Barna lærer ፊደል, leser ፊደለ ሐዋርያ, lærer de daglige bønnene og leser til slutt Davids salmer.",
        am: "ንባብ ቤት። ፊደል ይማራሉ፤ ፊደለ ሐዋርያን ያነባሉ፤ የዘወትር ጸሎትን ያጠናሉ፤ በመጨረሻም መዝሙረ ዳዊትን ያነባሉ።",
      },
    },
    {
      sporsmal: { no: "Hva heter de høyere skolene?", am: "ከፍተኛዎቹ ጉባኤያት ምን ምን ይባላሉ?" },
      svar: {
        no: "ዜማ ቤት (sang), ቅኔ ቤት (dikt) og መጻሕፍት ቤት (forklaring av bøkene). Mange lærer også ቅዳሴ i ቅዳሴ ቤት.",
        am: "ዜማ ቤት፣ ቅኔ ቤትና መጻሕፍት ቤት። ብዙዎችም በቅዳሴ ቤት ቅዳሴን ይማራሉ።",
      },
    },
    {
      sporsmal: { no: "Hvorfor kalles elevene ቆሎ ተማሪ?", am: "ተማሪዎቹ የቆሎ ተማሪ የሚባሉት ለምንድን ነው?" },
      svar: {
        no: "Fordi de lever enkelt, ofte av ristet korn (ቆሎ) og mat de ber om «for Marias navns skyld», mens de vandrer for å lære.",
        am: "ቆሎ እየቆረጠሙና «በእንተ ስማ ለማርያም» ብለው እየለመኑ በቀላል ኑሮ ስለሚማሩ ነው።",
      },
    },
    {
      sporsmal: { no: "Hva sier Bibelen om å lære barna troen?", am: "ልጆችን ስለ ማስተማር መጽሐፍ ቅዱስ ምን ይላል?" },
      svar: {
        no: "«Lær den unge den vei han skal gå! Så viker han ikke fra den, selv når han blir gammel.» Og foreldrene skal lære Guds ord til barna hjemme og på veien.",
        am: "«ልጅን በሚሄድበት መንገድ ምራው፥ በሸመገለም ጊዜ ከእርሱ ፈቀቅ አይልም።» ወላጆችም የእግዚአብሔርን ቃል በቤትና በመንገድ ለልጆቻቸው ያስተምራሉ።",
      },
    },
    {
      sporsmal: { no: "Hva er målet med søndagsskolen?", am: "የሰንበት ትምህርት ቤት ዓላማ ምንድን ነው?" },
      svar: {
        no: "Å oppdra barna til god livsførsel, styrke de unge i troen og lære opp en slekt som tar vare på det fedrene har gitt.",
        am: "ሕፃናትን በምግባር ማሳደግ፣ ወጣቶችን በሃይማኖት ማጎልመስና የአባቶችን አደራ ጠብቆ የሚያስረክብ ትውልድ መፍጠር ነው።",
      },
    },
    {
      sporsmal: { no: "Hva kan du gjøre for å lære troen her i Norge?", am: "በኖርዌይ ሃይማኖትን ለመማር ምን ማድረግ ትችላለህ?" },
      svar: {
        no: "Gå på søndagsskolen, øve på ፊደል med fidel-treneren, lære bønnene i bønneboka og spørre foreldre, prest og lærere.",
        am: "ሰንበት ትምህርት ቤት መሄድ፣ በፊደል መለማመጃው ፊደል ማጥናት፣ ከጸሎት መጽሐፉ ጸሎትን መማርና ወላጆችን፣ ካህኑንና መምህራንን መጠየቅ።",
      },
    },
  ],
  kilder: [
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Ethiopian Orthodox Church School System", url: "https://www.ethiopianorthodox.org/english/ethiopian/school.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: የዜማ ቃል ትምህርት (PDF)", url: "https://www.ethiopianorthodox.org/amharic/yezemametsheft/zematarik/zema.pdf" },
    { navn: "Mahibere Kidusan: ሰንበት ትምህርት ቤቶች ለቅድስት ቤተ ክርስቲያን ሐዋርያዊ ተልእኮ መሳካት ያላቸው ሚና", url: "https://eotcmk.org/a/%e1%88%b0%e1%8a%95%e1%89%a0%e1%89%b5-%e1%89%b5%e1%88%9d%e1%88%85%e1%88%ad%e1%89%b5-%e1%89%a4%e1%89%b6%e1%89%bd-%e1%88%88%e1%89%85%e1%8b%b5%e1%88%b5%e1%89%b5-%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad/" },
    { navn: "Mahibere Kidusan: ማኅበረ ቅዱሳን ማን ነው? ክፍል ሦስት", url: "https://eotcmk.org/a/%e1%88%9b%e1%8a%85%e1%89%a0%e1%88%a8-%e1%89%85%e1%8b%b1%e1%88%b3%e1%8a%95-%e1%88%9b%e1%8a%95-%e1%8a%90%e1%8b%8d-%e1%8a%ad%e1%8d%8d%e1%88%8d-%e1%88%a6%e1%88%b5%e1%89%b5/" },
    { navn: "Mahibere Kidusan: ማኅበረ ቅዱሳን 34ኛ ዓመት የምሥረታ በዓሉን አከበረ", url: "https://eotcmk.org/a/%e1%88%9b%e1%8a%85%e1%89%a0%e1%88%a8-%e1%89%85%e1%8b%b1%e1%88%b3%e1%8a%95-34%e1%8a%9b-%e1%8b%93%e1%88%98%e1%89%b5-%e1%8b%a8%e1%88%9d%e1%88%a5%e1%88%a8%e1%89%b3-%e1%89%a0%e1%8b%93%e1%88%89%e1%8a%95/" },
    { navn: "Mahibere Kidusan: የሊቃውንቱ ምንጭ እንዳይደርቅ ደቀ መዛሙርትን ማፍራት እንደሚገባ ተገለጸ", url: "https://eotcmk.org/a/%e1%8b%a8%e1%88%8a%e1%89%83%e1%8b%8d%e1%8a%95%e1%89%b1-%e1%88%9d%e1%8a%95%e1%8c%ad-%e1%8a%a5%e1%8a%95%e1%8b%b3%e1%8b%ad%e1%8b%b0%e1%88%ad%e1%89%85-%e1%8b%b0%e1%89%80-%e1%88%98%e1%8b%9b%e1%88%99/" },
    { navn: "Mahibere Kidusan: «ደቀ መዛሙርት የቤተ ክርስቲያን ደጀን ናቸው።»", url: "https://eotcmk.org/a/%e1%8b%b0%e1%89%80-%e1%88%98%e1%8b%9b%e1%88%99%e1%88%ad%e1%89%b5-%e1%8b%a8%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95-%e1%8b%b0%e1%8c%80%e1%8a%95-%e1%8a%93/" },
    { navn: "Mahibere Kidusan: ወላጆች ልጆቻችንን በመንፈሳዊ መንገድ እንዴት እናስተምር?", url: "https://eotcmk.org/a/%e1%8b%88%e1%88%8b%e1%8c%86%e1%89%bd-%e1%88%8d%e1%8c%86%e1%89%bb%e1%89%b8%e1%8b%8d%e1%8a%95-%e1%89%a0%e1%88%98%e1%8a%95%e1%8d%88%e1%88%b3%e1%8b%8a-%e1%88%98%e1%8a%95%e1%8c%88%e1%8b%b5-%e1%8a%a5-2/" },
    { navn: "Mahibere Kidusan: የቀለሙ ልጅ", url: "https://eotcmk.org/a/%e1%8b%a8%e1%89%80%e1%88%88%e1%88%99-%e1%88%8d%e1%8c%85/" },
    { navn: "Mahibere Kidusan: ልሳነ አርድእት", url: "https://eotcmk.org/a/%e1%88%8d%e1%88%b3%e1%8a%90-%e1%8a%a0%e1%88%ad%e1%8b%b5%e1%8a%a5%e1%89%b5/" },
    { navn: "Mahibere Kidusan: ዝክረ ቅዱስ ያሬድ", url: "https://eotcmk.org/a/%e1%8b%9d%e1%8a%ad%e1%88%a8-%e1%89%85%e1%8b%b1%e1%88%b5-%e1%8b%ab%e1%88%ac%e1%8b%b5/" },
    { navn: "Mahibere Kidusan: ኢትዮጵያዊው ቅዱስ ያሬድ", url: "https://eotcmk.org/a/%e1%8a%a2%e1%89%b5%e1%8b%ae%e1%8c%b5%e1%8b%ab%e1%8b%8a%e1%8b%8d-%e1%89%85%e1%8b%b1%e1%88%b5-%e1%8b%ab%e1%88%ac%e1%8b%b5-2/" },
  ],
  utkast: true,
};
