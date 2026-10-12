import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning:
// Mahibere Kidusan (eotcmk.org): «ቅድስት ቤተ ክርስቲያን» (etter Memher Fekadu Sahle, «የቤተ ክርስቲያን ምሥጢራትና ሥርዓት»,
// og Kesis Getachew Dejene, «ሥርዓተ ቤተ ክርስቲያን»), «ቤተ ክርስቲያን» (tre betydninger, St. Ignatius),
// «ታቦት» (Hamer, 1985), «ታቦት በሐዲስ ኪዳን», «ጽዮን ማርያም», «ወደ ምሥራቅ ተመልከቱ» og
// «Liturgical Worship – Unique Features of EOTC» (Priest Habtamu Teshome);
// ethiopianorthodox.org (Sergew Hable Sellassie: Worship in the Ethiopian Orthodox Church);
// astemhro.com (ንግሥ እና ንግድ).
// Usikkert: At en kirke kan ha flere ታቦታት (ደባል ታቦት), fant vi bare omtalt i astemhro.com, som advarer mot å
// legge til ታቦታት for å få flere fester og mer inntekt. Vi fant ingen EOTC-kilde som forklarer når det er rett å ha
// flere. Punktet er derfor skrevet forsiktig og bør leses av en prest.
// Usikkert: Grunnene til ኅዳር ጽዮን (Menelik I, Zwai-øya, Abreha og Atsbeha) er hentet fra én MK-artikkel
// (som viser til «መድብለ ታሪክ») og er skrevet som kirkas tradisjon.
// Usikkert: At navnet på helgenen står skrevet på ጽላቱ sammen med Kristi navn, står i MK sin engelske artikkel
// (Liturgical Worship). De amhariske artiklene sier at Guds navn (ስመ አምላክ) står skrevet på ታቦቱ.
// Usikkert: Kildene sier lite om kirkeklokker (ደወል). Vi har bare tatt med at gamle klokker og kors er funnet ved
// den eldgamle kirka i Yeha (ethiopianorthodox.org).
export const kirkebygget: Tema = {
  slug: "kirkebygget",
  del: "kirkebygget",
  tittel: { no: "Kirkebygget", am: "ሕንጻ ቤተ ክርስቲያን" },
  undertittel: { no: "Guds hus blant oss", am: "የእግዚአብሔር ማደሪያ ቤት" },
  bilde: "prosesjonskorsHoylandet",
  ingress: {
    no:
      "Kirka er Guds hus. Der ber vi sammen, synger lovsang og tar imot Kristi kropp og blod. Kirka er bygget som et bilde på det himmelske Jerusalem, der englene lovpriser Gud. Midt i kirka, i den innerste delen, står ታቦቱ. Det er ታቦቱ som gjør et bygg til en kirke.",
    am:
      "ቤተ ክርስቲያን የእግዚአብሔር ቤት ናት። በእርሷ በአንድነት እንጸልያለን፣ እናመሰግናለን፣ ሥጋውንና ደሙንም እንቀበላለን። ቅዱሳን መላእክት ፈጣሪያቸውን የሚያመሰግኑባት የሰማያዊት ኢየሩሳሌም ምሳሌ ሆና ትታነጻለች። በውስጠኛው ክፍል በመቅደሱ ታቦቱ ይኖራል፤ ሕንጻውን ቤተ ክርስቲያን የሚያሰኘውም ታቦቱ ነው።",
  },
  hovedvers: "Gen 28:17",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva betyr ordet «kirke»?", am: "«ቤተ ክርስቲያን» ማለት ምን ማለት ነው?" },
      ingress: {
        no: "ቤተ ክርስቲያን betyr «de kristnes hus». Ordet har tre betydninger:",
        am: "«ቤተ ክርስቲያን» የክርስቲያኖች ቤት ማለት ነው። ቃሉ ሦስት ትርጉም አለው፤",
      },
      punkter: [
        {
          tekst: {
            no: "Bygget: huset der de kristne samles for å be, bøye seg for Gud og ta imot Kristi kropp og blod. Jesus kalte Guds hus et bønnens hus.",
            am: "ሕንጻ ቤተ ክርስቲያን፤ ክርስቲያኖች በአንድነት የሚጸልዩበት፣ የሚሰግዱበትና ሥጋ ወደሙን የሚቀበሉበት ቤት ነው። ጌታችን የእግዚአብሔርን ቤት «የጸሎት ቤት» ብሎ ጠራው።",
          },
          vers: ["Mark 11:17", "Isa 56:7"],
        },
        {
          tekst: {
            no: "De troende: alle som er døpt og tror på Kristus, er sammen kirka – en familie med én Herre, én tro og én dåp. Det er denne kirka Jesus sa han ville bygge på klippen.",
            am: "ማኅበረ ምእመናን፤ በክርስቶስ አምነው የተጠመቁ ሁሉ በአንድነት ቤተ ክርስቲያን ናቸው፤ አንድ ጌታ፣ አንድ ሃይማኖት፣ አንዲት ጥምቀት ያላቸው ወገኖች ናቸው። ጌታችን በዓለት ላይ እሠራታለሁ ያላት ይህቺ ቤተ ክርስቲያን ናት።",
          },
          vers: ["Matt 16:18", "1Tim 3:15", "Eph 4:5"],
        },
        {
          tekst: {
            no: "Hver enkelt av oss: kroppen til en døpt kristen er et tempel for Den hellige ånd. Derfor skal vi holde både kirkebygget og kroppen vår hellig.",
            am: "እያንዳንዱ ምእመን፤ የተጠመቀ ክርስቲያን ሰውነቱ የመንፈስ ቅዱስ ቤተ መቅደስ ነው። ስለዚህ ሕንጻ ቤተ ክርስቲያንንም ሰውነታችንንም በቅድስና ልንጠብቅ ይገባናል።",
          },
          vers: ["1Cor 3:16", "1Cor 6:19", "Eph 2:20-22"],
        },
      ],
    },
    {
      id: "gamle-testamentet",
      tittel: { no: "Guds hus i Det gamle testamentet", am: "የእግዚአብሔር ቤት በብሉይ ኪዳን" },
      punkter: [
        {
          tekst: {
            no: "Jakob sov på et sted og så i en drøm en stige opp til himmelen. Da han våknet, sa han: «Her er visselig Guds hus, her er himmelens port.» Han kalte stedet Betel, som betyr Guds hus.",
            am: "ያዕቆብ በአንድ ስፍራ ተኝቶ ወደ ሰማይ የሚደርስ መሰላል በሕልም አየ። ከእንቅልፉ ሲነሣም «ይህ ስፍራ የእግዚአብሔር ቤት ነው እንጂ ሌላ አይደለም፤ ይህም የሰማይ ደጅ ነው» አለ። ስፍራውንም ቤቴል ብሎ ጠራው፤ ትርጓሜውም የእግዚአብሔር ቤት ማለት ነው።",
          },
          vers: ["Gen 28:16-17", "Gen 28:19", "Gen 28:22"],
        },
        {
          tekst: {
            no: "I ørkenen sa Gud til Moses: «De skal gjøre meg en helligdom, så vil jeg bo midt iblant dem.» Tabernaklet (ደብተራ ኦሪት) ble laget nøyaktig slik Gud viste Moses.",
            am: "በምድረ በዳ እግዚአብሔር ሙሴን «በመካከላቸውም አድር ዘንድ መቅደስ ይሥሩልኝ» አለው። ደብተራ ኦሪትም እግዚአብሔር ለሙሴ እንዳሳየው ተሠራች።",
          },
          vers: ["Exod 25:8-9"],
        },
        {
          tekst: {
            no: "Tabernaklet hadde to rom: det Hellige og det Aller-helligste. Et forheng skilte dem, og paktens ark stod i det Aller-helligste.",
            am: "ደብተራ ኦሪት ሁለት ክፍሎች ነበሯት፤ ቅድስትና ቅድስተ ቅዱሳን። በመካከላቸው መጋረጃ ነበረ፤ የቃል ኪዳኑ ታቦትም በቅድስተ ቅዱሳን ውስጥ ነበረ።",
          },
          vers: ["Exod 26:33", "Heb 9:2-3"],
        },
        {
          tekst: {
            no: "Kong Salomo bygde senere et tempel i Jerusalem. Prestene bar paktens ark inn i det Aller-helligste, og Guds herlighet fylte huset som en sky. Så ble huset innviet.",
            am: "ከዚያ በኋላ ንጉሥ ሰሎሞን በኢየሩሳሌም ቤተ መቅደስ ሠራ። ካህናቱ የቃል ኪዳኑን ታቦት ወደ ቅድስተ ቅዱሳን አገቡት፤ የእግዚአብሔርም ክብር እንደ ደመና ቤቱን ሞላው። ቤቱም ተቀደሰ።",
          },
          vers: ["1Kgs 6:1", "1Kgs 8:6", "1Kgs 8:10-11", "1Kgs 8:63"],
        },
        {
          tekst: {
            no: "Prestene gikk hver dag inn i det Hellige, men bare øverstepresten gikk inn i det Aller-helligste, én gang i året.",
            am: "ካህናት ዘወትር ወደ ቅድስት ይገቡ ነበር፤ ወደ ቅድስተ ቅዱሳን ግን ሊቀ ካህናቱ ብቻ በዓመት አንድ ጊዜ ይገባ ነበር።",
          },
          vers: ["Heb 9:6-7"],
        },
        {
          tekst: {
            no: "I Det gamle testamentet fantes Guds tempel bare i Jerusalem. Profeten Malaki sa at Guds navn skulle bli stort blant alle folk, og at det på hvert sted skulle bæres fram et rent offer. Derfor bygger kirka i dag Guds hus over hele verden, og der bæres Kristi kropp og blod fram.",
            am: "በብሉይ ኪዳን ቤተ መቅደሱ በኢየሩሳሌም ብቻ ነበረ። ነቢዩ ሚልክያስ ግን የእግዚአብሔር ስም በአሕዛብ ዘንድ ታላቅ እንደሚሆንና በየስፍራውም ንጹሕ ቍርባን እንደሚቀርብ ተናገረ። ስለዚህ ዛሬ በዓለም ሁሉ አብያተ ክርስቲያናት ይታነጻሉ፤ ሥጋውና ደሙም ይቀርብባቸዋል።",
          },
          vers: ["Mal 1:11"],
        },
      ],
    },
    {
      id: "tre-deler",
      tittel: { no: "De tre delene i kirka", am: "የቤተ ክርስቲያን ሦስቱ ክፍሎች" },
      ingress: {
        no: "Som tabernaklet har kirka faste rom. Hver kirke har tre deler: ቅኔ ማኅሌት, ቅድስት og መቅደስ.",
        am: "እንደ ደብተራ ኦሪት ቤተ ክርስቲያንም የተወሰኑ ክፍሎች አሏት። እያንዳንዷ ቤተ ክርስቲያን ቅኔ ማኅሌት፣ ቅድስትና መቅደስ የተባሉ ሦስት ክፍሎች አሏት።",
      },
      punkter: [
        {
          tekst: {
            no: "ቅኔ ማኅሌት er den ytterste delen, det første rommet vi kommer inn i. Her synger kirkesangerne (መዘምራን og ደባትር) lovsang. Her ber prester og diakoner ሰዓታት om natten og ኪዳን om morgenen. Menn står i den ene delen og kvinner i den andre. I gamle dager stod også de som lærte troen før dåpen (ንዑሰ ክርስቲያን), her.",
            am: "ቅኔ ማኅሌት ከውጭ ስንገባ የምናገኘው የመጀመሪያው ክፍል ነው። በዚህ ክፍል መዘምራንና ደባትር ማኅሌተ እግዚአብሔር ያደርሳሉ፤ ቀሳውስትና ዲያቆናት በሌሊት ሰዓታት፣ በነግህ ኪዳን ያደርሳሉ። ወንዶች ምእመናን በአንድ በኩል፣ ሴቶች በሌላ በኩል ይቆማሉ። ለጥምቀት ያልበቁ ንዑሰ ክርስቲያንም የሚቆዩበት ክፍል ነው።",
          },
          vers: ["Ps 84:2-3"],
        },
        {
          tekst: {
            no: "ቅድስት (det hellige rommet) er midtdelen. Her gir prestene nattverden til de troende, og her forkynner lærerne evangeliet. Her blir brudepar som gifter seg med ተክሊል og nattverd, velsignet, og her holdes bønnene på langfredag. Bare de som skal ta imot nattverden, står her under ቅዳሴ.",
            am: "ቅድስት የቤተ ክርስቲያን ማእከላዊ ክፍል ናት። ካህናት በድርገት ጊዜ ምእመናንን የሚያቆርቡበት፣ መምህራንም ወንጌልን የሚያስተምሩበት ክፍል ነው። በተክሊልና በቍርባን የሚጋቡ ሙሽሮች የሚባረኩበት፣ በስቅለት ዕለትም ሥርዓተ ጸሎት የሚፈጸምበት ነው። የማይቆርቡ ምእመናን ግን በዚህ ክፍል ቆመው አያስቀድሱም።",
          },
          vers: ["Heb 9:2"],
        },
        {
          tekst: {
            no: "መቅደስ (helligdommen) er den innerste delen. Den svarer til det Aller-helligste i Det gamle testamentet. Her står ታቦቱ på sin trone (መንበር), og her blir brødet og vinen til Kristi kropp og blod. Bare diakoner, prester og biskoper går inn hit. Dørene er dekket av forheng.",
            am: "መቅደስ ውስጠኛው ክፍል ነው፤ በብሉይ ኪዳን ቅድስተ ቅዱሳን ይባል የነበረው ነው። ታቦቱ በመንበሩ ላይ የሚኖርበት፣ የጌታችን ሥጋና ደም የሚፈተትበት ክፍል ነው። ከዲያቆናትና ሥልጣነ ክህነት ካላቸው በቀር ማንም ወደ መቅደሱ አይገባም። በሮቹም በመጋረጃ ይጋረዳሉ።",
          },
          vers: ["Heb 9:3-4", "1Kgs 8:6"],
        },
        {
          tekst: {
            no: "Hvorfor tre deler? Kirkas lærere forklarer at de er et bilde på de tre himlene der englene bor (ኢዮር, ራማ og ኤረር), på de tre trinnene i prestetjenesten (diakon, prest og biskop) og på de tre gruppene av troende: prester, menn og kvinner.",
            am: "ክፍሎቹ ሦስት የሆኑበት ምክንያት፤ የሦስቱ ዓለማተ መላእክት (ኢዮር፣ ራማ፣ ኤረር)፣ የሦስቱ መዓርጋተ ክህነት (ዲቁና፣ ቅስና፣ ኤጲስ ቆጶስነት) እና የሦስቱ ጾታ ምእመናን (ካህናት፣ ወንዶች፣ ሴቶች) ምሳሌ በመሆናቸው ነው ብለው መምህራን ያስተምራሉ።",
          },
        },
        {
          tekst: {
            no: "En rund kirke har tre dører: mot øst for prestene, mot nord for mennene og mot sør for kvinnene. Kirkas lærere sier at de er et bilde på de tre portene i paradiset.",
            am: "ክብ ቤተ ክርስቲያን ሦስት በሮች አሏት፤ በምሥራቅ የካህናት፣ በሰሜን የወንዶች፣ በደቡብ የሴቶች መግቢያ ነው። እነዚህም የሦስቱ የገነት በሮች ምሳሌ ናቸው ብለው መምህራን ያስተምራሉ።",
          },
        },
        {
          tekst: {
            no: "Vi tar av oss skoene når vi går inn i kirka, slik Moses tok av seg skoene ved den brennende busken. Salomo sier: «Vokt din fot når du går til Guds hus!»",
            am: "ወደ ቤተ ክርስቲያን ስንገባ ሙሴ በሚነድደው ቍጥቋጦ ፊት እንዳደረገው ጫማችንን እናወልቃለን። ጠቢቡ ሰሎሞንም «ወደ እግዚአብሔር ቤት በገባህ ጊዜ እግርህን ጠብቅ» ይላል።",
          },
          vers: ["Exod 3:5", "Eccl 5:1"],
        },
      ],
    },
    {
      id: "tsilat",
      tittel: { no: "Hva er ጽላት?", am: "ጽላት ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "ጽላት betyr en tavle som Guds hellige ord er skrevet på. Gud gav Moses to steintavler med de ti budene på Sinai-fjellet.",
            am: "ጽላት ቅዱስ ቃሉ የተጻፈበት ሰሌዳ ማለት ነው። እግዚአብሔር በሲና ተራራ ዐሥርቱ ቃላት የተጻፉባቸውን ሁለት የድንጋይ ጽላቶች ለሙሴ ሰጠው።",
          },
          vers: ["Exod 31:18", "Exod 25:16"],
        },
        {
          tekst: {
            no: "Moses knuste de første tavlene da folket tilba gullkalven. Da sa Gud: «Hugg deg ut to steintavler likesom de første.» Moses laget nye tavler, og Gud skrev de samme ordene på dem. Kirkas lærere sier at det er her vi har lov til å lage ጽላት etter det første forbildet.",
            am: "ሕዝቡ የወርቅ ጥጃ ባመለኩ ጊዜ ሙሴ የፊተኞቹን ጽላቶች ሰበራቸው። እግዚአብሔርም «ሁለት የድንጋይ ጽላቶች እንደ ፊተኞች አድርገህ ጥረብ» አለው። ሙሴም አስመስሎ ቀረጸ፤ እግዚአብሔርም ቃሎቹን ጻፈባቸው። ጽላትን አስመስለን ለመቅረጽ ሥልጣን ያገኘነው ከዚህ ነው ብለው መምህራን ያስተምራሉ።",
          },
          vers: ["Exod 32:19", "Exod 34:1", "Deut 10:1-5"],
        },
        {
          tekst: {
            no: "Kirkas ጽላት i dag lages av kostbar stein eller marmor, eller av tre som ikke råtner. Guds navn (ስመ አምላክ) er skrevet på den. Derfor er den ikke en vanlig utskåret ting, men hellig.",
            am: "ዛሬ ጽላት ከከበረ ድንጋይ ወይም ከዕብነ በረድ፣ አልያም ከማይነቅዝ እንጨት ይቀረጻል። ስመ አምላክ ተጽፎበታል፤ ስለዚህ ተራ ቅርጻ ቅርጽ ሳይሆን ቅዱስ ነው።",
          },
        },
      ],
    },
    {
      id: "tabot",
      tittel: { no: "Hva er ታቦት?", am: "ታቦት ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "ታቦት er paktens ark: kisten av akasietre kledd med gull som Gud sa Moses skulle lage. Steintavlene ble lagt i den. Derfor sier kirka: ታቦት er boligen for ጽላት. Over arken talte Gud med Moses.",
            am: "ታቦት ሙሴ ከግራር እንጨት ሠርቶ በወርቅ የለበጠው የቃል ኪዳን ታቦት ነው። ጽላቶቹ በውስጡ ተቀመጡ፤ ስለዚህ «ታቦት የጽላት ማደሪያ ነው» ትላለች ቤተ ክርስቲያን። እግዚአብሔርም በታቦቱ ላይ ሆኖ ከሙሴ ጋር ይነጋገር ነበር።",
          },
          vers: ["Exod 25:10-11", "Exod 25:22", "Exod 40:20"],
        },
        {
          tekst: {
            no: "I kirka i dag brukes begge ordene. ጽላት er tavlen som Guds navn er skrevet på. Kisten den oppbevares i, kalles også ታቦት eller ታቦቱ sin trone (መንበረ ታቦት). Ofte kalles ጽላቱ selv bare ታቦት.",
            am: "ዛሬ በቤተ ክርስቲያን ሁለቱም ስሞች ይጠራሉ። ጽላት ስመ አምላክ የተጻፈበት ሰሌዳ ነው፤ የሚቀመጥበትም ማደሪያ ታቦት ይባላል፤ ዙፋኑም መንበረ ታቦት ይባላል። ብዙ ጊዜ ጽላቱ ራሱ ታቦት ተብሎ ይጠራል።",
          },
        },
        {
          tekst: {
            no: "Hvorfor trenger vi ታቦት i Det nye testamentet? I Det gamle testamentet viste Gud sin herlighet ved arken. I Det nye testamentet er ታቦቱ tronen for Kristi kropp og blod: Brødet og vinen legges på ታቦቱ under ቅዳሴ. Slik møtes den gamle pakten og den nye pakten i Jesu blod.",
            am: "በሐዲስ ኪዳን ታቦት ለምን አስፈለገ? በብሉይ ኪዳን እግዚአብሔር በታቦቱ ክብሩን ገለጠ። በሐዲስ ኪዳን ደግሞ ታቦቱ የሥጋውና የደሙ የክብር ዙፋን ነው፤ በቅዳሴ ጊዜ ኅብስቱና ወይኑ በታቦቱ ላይ ይቀመጣሉ። በዚህም ብሉይ ኪዳንና በደሙ የተመሠረተው ሐዲስ ኪዳን ይገናኛሉ።",
          },
          vers: ["Luke 22:19-20", "Heb 9:4"],
        },
        {
          tekst: {
            no: "Kirka tror også at kroppen og hjertet til de kristne er Guds tempel. Likevel bruker vi ታቦት for å ære Kristus. Johannes så selv paktens ark i Guds tempel i himmelen.",
            am: "የክርስቲያኖች አካልና ልቡና የእግዚአብሔር ቤተ መቅደስ መሆኑን ቤተ ክርስቲያን ታምናለች። ቢሆንም ስለ ክርስቶስ ክብር ታቦትን ትጠቀማለች። ዮሐንስም በሰማይ ባለው የእግዚአብሔር መቅደስ የኪዳኑን ታቦት አይቷል።",
          },
          vers: ["2Cor 3:3", "Rev 11:19"],
        },
      ],
    },
    {
      id: "vigsling",
      tittel: { no: "ታቦቱ gjør bygget til en kirke", am: "ሕንጻውን ቤተ ክርስቲያን የሚያሰኘው ታቦቱ ነው" },
      punkter: [
        {
          tekst: {
            no: "Et bygg er ikke en kirke før biskopen har gitt det en ታቦት. ታቦቱ og kirka blir vigslet ved biskopens bønn og med den hellige salveoljen myron (ቅብዐ ሜሮን).",
            am: "ሕንጻው ኤጲስ ቆጶሱ ታቦት እስኪሰጠው ድረስ ቤተ ክርስቲያን አይባልም። ታቦቱና ሕንጻው በሊቀ ጳጳሱ ጸሎትና በቅብዐ ሜሮን ይከብራሉ።",
          },
          vers: ["Exod 40:9", "Exod 30:25-26"],
        },
        {
          tekst: {
            no: "Kirkas hellighet kommer av at ታቦቱ er der. Uten ታቦት kan vi ikke feire ቅዳሴ (nattverdsgudstjenesten).",
            am: "የቤተ ክርስቲያን ቅድስና በታቦቱ መኖር ነው፤ ታቦት ከሌለ ቅዳሴ አይቀደስም።",
          },
        },
        {
          tekst: {
            no: "Dagen en ny kirke blir vigslet, kalles ቅዳሴ ቤት. Den blir husket hvert år. Slik innviet også kong Salomo og hele Israel Herrens hus.",
            am: "አዲስ ቤተ ክርስቲያን የሚከብርበት ዕለት ቅዳሴ ቤት ይባላል፤ በየዓመቱም ይታሰባል። ንጉሥ ሰሎሞንና የእስራኤል ልጆችም የእግዚአብሔርን ቤት እንዲሁ ቀደሱ።",
          },
          vers: ["1Kgs 8:63", "2Chr 5:7"],
        },
      ],
    },
    {
      id: "navn",
      tittel: { no: "Hvorfor heter kirka etter en helgen eller en høytid?", am: "ቤተ ክርስቲያን በቅዱሳን ስም ለምን ትሰየማለች?" },
      punkter: [
        {
          tekst: {
            no: "Hver kirke har en ታቦት som er gitt navnet til Gud selv, en av hans høytider, Maria, en engel, en martyr eller en annen helgen. Kirka får samme navn, for eksempel ቅድስት ሥላሴ (Den hellige treenighet), መድኃኔ ዓለም (Verdens frelser), ኪዳነ ምሕረት (Barmhjertighetens pakt, en av Marias fester), ቅዱስ ሚካኤል eller ቅዱስ ጊዮርጊስ.",
            am: "እያንዳንዷ ቤተ ክርስቲያን በእግዚአብሔር ስም፣ በበዓላቱ፣ በእመቤታችን፣ በመላእክት፣ በሰማዕታት ወይም በሌሎች ቅዱሳን ስም የተሰየመ ታቦት አላት። ቤተ ክርስቲያኑም በዚያው ስም ይጠራል፤ ለምሳሌ ቅድስት ሥላሴ፣ መድኃኔ ዓለም፣ ኪዳነ ምሕረት፣ ቅዱስ ሚካኤል፣ ቅዱስ ጊዮርጊስ።",
          },
        },
        {
          tekst: {
            no: "Hvorfor? Gud lovet dem som holder hans pakt, «et minne og et navn» i hans hus og innenfor hans murer. «Den rettferdiges minne lever i velsignelse.» Kirka gir derfor helgenene et minne ved ታቦቱ.",
            am: "ለምን? እግዚአብሔር ቃል ኪዳኑን ለሚይዙ «በቤቴና በቅጥሬ ውስጥ … የሚበልጥ መታሰቢያና ስም እሰጣቸዋለሁ» ብሏል። «የጻድቅ መታሰቢያ ለበረከት ነው»። ስለዚህ ቤተ ክርስቲያን በታቦቱ ለቅዱሳን መታሰቢያ ታደርጋለች።",
          },
          vers: ["Isa 56:4-5", "Prov 10:7", "Ps 112:6"],
        },
        {
          tekst: {
            no: "Men den som blir æret ved alle ታቦታት, er Kristus. Det er hans kropp og blod som bæres fram på ታቦቱ, og vi bøyer oss for Guds navn som er skrevet på den.",
            am: "በታቦታቱ ሁሉ የሚከብረው ግን መድኃኔ ዓለም ክርስቶስ ነው። በታቦቱ ላይ የሚቀርበው የእርሱ ሥጋና ደም ነው፤ የምንሰግደውም በላዩ ለተጻፈው ለስመ እግዚአብሔር ነው።",
          },
          vers: ["Phil 2:10", "Ps 99:5"],
        },
        {
          tekst: {
            no: "Noen kirker har flere ታቦታት. Kirkas lærere advarer likevel: Vi viser ikke ære for helgenene ved å legge til ekstra ታቦታት for å få flere fester eller mer penger. En kirke har ett navn, slik hver kristen har ett dåpsnavn.",
            am: "አንዳንድ አብያተ ክርስቲያናት ከአንድ በላይ ታቦታት አሏቸው። ነገር ግን ለቅዱሳን ያለን ክብር የሚታወቀው በዓላትን ወይም ገቢን ለማብዛት ታቦታትን በመደረብ አይደለም ብለው መምህራን ያስጠነቅቃሉ። አንድ ምእመን አንድ ስመ ክርስትና እንዳለው አጥቢያ ቤተ ክርስቲያንም በአንድ ስም ትጠራለች።",
          },
        },
      ],
    },
    {
      id: "ut",
      tittel: { no: "Når ታቦቱ bæres ut", am: "ታቦቱ የሚወጣበት ጊዜ" },
      punkter: [
        {
          tekst: {
            no: "Bare prester rører ታቦቱ. Den er alltid dekket med kostbare klær, både i መቅደስ og når den bæres ut. Også i ørkenen dekket Aron og sønnene hans arken før den ble båret, og de som bar, fikk ikke røre de hellige tingene.",
            am: "ታቦቱን የሚነኩት ካህናት ብቻ ናቸው። በመቅደስም ሆነ ሲወጣ ዘወትር በክቡር ልብስ ይሸፈናል። በምድረ በዳም አሮንና ልጆቹ ታቦቱን ሳይሸከሙት በፊት ይሸፍኑት ነበር፤ ተሸካሚዎቹም ንዋየ ቅድሳቱን አይነኩም ነበር።",
          },
          vers: ["Num 4:5-6", "Num 4:15", "Josh 3:3"],
        },
        {
          tekst: {
            no: "Ved ጥምቀት (Jesu dåp) og på kirkas årlige fest (ንግሥ) bærer prestene ታቦቱ ut. På ንግሥ går den rundt kirka, vanligvis tre ganger, og stopper på ዐውደ ምሕረት foran kirka. Alle bøyer seg når den går forbi.",
            am: "በጥምቀት በዓልና በየዓመቱ በሚከበረው የቤተ ክርስቲያኑ ንግሥ ካህናት ታቦቱን ተሸክመው ይወጣሉ። በንግሥ ቀን ታቦቱ ቤተ ክርስቲያኑን ሦስት ጊዜ ይዞራል፤ በፊት ለፊት ባለው ዐውደ ምሕረትም ይቆማል። በፊቱ ሲያልፍም ሁሉም ይሰግዳሉ።",
          },
        },
        {
          tekst: {
            no: "Da kong David førte paktens ark til Jerusalem, danset han av all makt for Herrens åsyn, og hele Israel jublet med basuner. Slik synger og jubler vi også i dag når ታቦቱ kommer ut.",
            am: "ንጉሥ ዳዊት የእግዚአብሔርን ታቦት ወደ ኢየሩሳሌም ሲያመጣ በሙሉ ኃይሉ በእግዚአብሔር ፊት ይዘፍን ነበር፤ እስራኤልም ሁሉ ሆ እያሉ ቀንደ መለከት ይነፉ ነበር። እኛም ዛሬ ታቦቱ ሲወጣ በዝማሬና በእልልታ እናከብራለን።",
          },
          vers: ["2Sam 6:14-15", "1Chr 15:28", "Ps 132:8"],
        },
        {
          tekst: {
            no: "Også i Det gamle testamentet ble arken båret ut: Da prestene bar den ut i Jordan, stanset vannet, og folket gikk tørrskodd over. Ved Jeriko bar prestene arken rundt byen.",
            am: "በብሉይ ኪዳንም ታቦቱ ይወጣ ነበር፤ ካህናቱ ታቦቱን ተሸክመው ወደ ዮርዳኖስ ሲገቡ ውኃው ቆመ፤ ሕዝቡም በደረቅ ተሻገሩ። በኢያሪኮም ካህናቱ ታቦቱን ተሸክመው ከተማዋን ዞሩ።",
          },
          vers: ["Josh 3:15-17", "Josh 6:12-13"],
        },
      ],
    },
    {
      id: "tsion",
      tittel: { no: "ታቦተ ጽዮን i Aksum og ኅዳር ጽዮን", am: "ታቦተ ጽዮንና ኅዳር ጽዮን" },
      punkter: [
        {
          tekst: {
            no: "Kirkas tradisjon forteller at Menelik I, sønn av kong Salomo, kom til Aksum med paktens ark, ታቦተ ጽዮን. Kirka i Aksum heter derfor አክሱም ጽዮን.",
            am: "የሰሎሞን ልጅ ቀዳማዊ ምኒልክ ታቦተ ጽዮንን ይዞ ወደ አክሱም እንደ ገባ የቤተ ክርስቲያን ትውፊት ይናገራል። ስለዚህ የአክሱም ቤተ ክርስቲያን አክሱም ጽዮን ትባላለች።",
          },
        },
        {
          tekst: {
            no: "Hvert år den 21. ኅዳር (30. november, enkelte år 1. desember) feirer vi ኅዳር ጽዮን. Vi minnes da blant annet at arken knuste avguden Dagon hos filisterne. Kirkas tradisjon sier også at det var denne dagen Menelik kom til Aksum med arken, og at kongene Abreha og Atsbeha vigslet kirka i Aksum.",
            am: "በየዓመቱ ኅዳር 21 ቀን ኅዳር ጽዮንን እናከብራለን። በዕለቱ ታቦተ ጽዮን በፍልስጤማውያን ዘንድ ዳጎንን የሰባበረችበትን እናስባለን። ቀዳማዊ ምኒልክ ታቦተ ጽዮንን ይዞ አክሱም የገባበት፣ አብርሃና አጽብሐም በአክሱም ቤተ መቅደሱን ሠርተው ቅዳሴ ቤቱን ያከበሩበት ዕለት እንደሆነም ትውፊቱ ይናገራል።",
          },
          vers: ["1Sam 5:3-4"],
        },
        {
          tekst: {
            no: "ታቦተ ጽዮን er et bilde på jomfru Maria. Arken var laget av tre som ikke råtner, og var kledd med gull inni og utenpå – slik Maria er ren og hellig. Tavlene inni arken er et bilde på Kristus, som hun bar i sitt morsliv.",
            am: "ታቦተ ጽዮን የእመቤታችን የቅድስት ድንግል ማርያም ምሳሌ ናት። ከማይነቅዝ እንጨት መሠራቷ የንጽሕናዋ፣ በውስጥም በውጭም በወርቅ መለበጧ የቅድስናዋ ምሳሌ ነው። በውስጧ ያለው የሕጉ ጽላት ደግሞ የጌታችን የኢየሱስ ክርስቶስ ምሳሌ ነው።",
          },
          vers: ["Exod 25:10-11", "Ps 132:13-14"],
        },
      ],
    },
    {
      id: "form",
      tittel: { no: "Kirkens form og retning", am: "የሕንጻ ቤተ ክርስቲያን ቅርጽና አቅጣጫ" },
      ingress: {
        no: "Kirker kan bygges på tre måter, men alle har ቅኔ ማኅሌት, ቅድስት og መቅደስ, og den samme gudstjenesten feires i alle.",
        am: "ሕንጻ ቤተ ክርስቲያን በሦስት ዓይነት ቅርጽ ይታነጻል፤ ሁሉም ግን ቅኔ ማኅሌት፣ ቅድስትና መቅደስ አላቸው፤ በውስጣቸው የሚፈጸመውም ሥርዓት አንድ ዓይነት ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "Rund (ክብ): Den runde formen er et tegn på fullkommenhet. De tre rommene er skilt med vegger, og det er én kuppel (ጉልላት) med et kors på toppen. De fleste kirker i Etiopia er runde.",
            am: "ክብ፤ ሙሉ ክብነቷ የፍጹምነቷ ምልክት ነው። ሦስቱ ክፍሎች በግድግዳ ይከፈላሉ፤ አንድ ጉልላት አላት፤ በጉልላቱም ላይ መስቀል ይኖራል። በአብዛኛው አብያተ ክርስቲያናት በክብ ቅርጽ ይታነጻሉ።",
          },
        },
        {
          tekst: {
            no: "Avlang (ሰቀላ): Denne formen bygger på Salomos tempel. Mange avlange kirker har grunnmur formet som et kors, for å minne oss om at Jesus døde på korset for oss. Eksempler er አክሱም ጽዮን og ደብረ ብርሃን ሥላሴ i Gondar.",
            am: "ሰቀላ (ሞላላ)፤ ጠቢቡ ሰሎሞን ያሠራውን ቤተ መቅደስ መሠረት ያደረገ ነው። ብዙዎቹ መሠረታቸው የመስቀል ቅርጽ አለው፤ ይህም ጌታችን በመስቀል ላይ የፈጸመውን የድኅነት ሥራ እንድናስብ ነው። ለምሳሌ አክሱም ጽዮንና የጎንደሩ ደብረ ብርሃን ሥላሴ።",
          },
          vers: ["1Kgs 6:1"],
        },
        {
          tekst: {
            no: "Hule- og klippekirker (ዋሻ): Denne formen begynte da martyrene gjemte seg i huler for forfølgerne. Kirken hogges ut av fjellet eller av en frittstående klippe og har ingen kuppel. De mest kjente er klippekirkene i ላሊበላ.",
            am: "ዋሻ፤ ሰማዕታት ከአሳዳጆቻቸው ሸሽተው በዋሻ ሲሸሸጉ የተጀመረ አሠራር ነው። ተራራን ወይም ለብቻው የቆመ አለትን በመፈልፈል ይታነጻል፤ ጉልላት የለውም። ለምሳሌ የቅዱስ ላሊበላ ውቅር አብያተ ክርስቲያናት።",
          },
        },
        {
          tekst: {
            no: "ታቦቱ står i den østlige delen av kirka, og vi ber vendt mot øst. Øst minner oss om paradiset Gud plantet i øst, om at Jesus ble født og korsfestet i øst, og om at han skal komme igjen fra øst. Under ቅዳሴ roper diakonen: «Se mot øst!»",
            am: "ታቦተ ሕጉ በቤተ መቅደሱ በምሥራቅ በኩል ይቀመጣል፤ እኛም ወደ ምሥራቅ ዞረን እንጸልያለን። ምሥራቅ እግዚአብሔር በምሥራቅ የተከላትን ገነት፣ ጌታችን በምሥራቅ መወለዱንና መሰቀሉን፣ ዳግመኛም ከምሥራቅ መምጣቱን ያስታውሰናል። በቅዳሴም ዲያቆኑ «ወደ ምሥራቅ ተመልከቱ» ብሎ ያውጃል።",
          },
          vers: ["Gen 2:8", "Matt 2:1", "Ezek 43:2", "Matt 24:27"],
        },
        {
          tekst: {
            no: "Kirker har stått i Etiopia i mer enn 1600 år. Kong Ezana, den første kristne kongen, bygde en stor kirke i Aksum, og ved den gamle kirka i Yeha har man funnet eldgamle klokker (ደወል) og kors.",
            am: "በኢትዮጵያ አብያተ ክርስቲያናት ከዐሥራ ስድስት መቶ ዓመታት በላይ ቆይተዋል። የመጀመሪያው ክርስቲያን ንጉሥ ዔዛና በአክሱም ታላቅ ቤተ ክርስቲያን አሠራ፤ በይሓ ጥንታዊ ቤተ ክርስቲያንም የጥንት ደወሎችና መስቀሎች ተገኝተዋል።",
          },
        },
      ],
    },
    {
      id: "rundt",
      tittel: { no: "Rundt kirka: ቅጽር, ዐውደ ምሕረት og ቤተ ልሔም", am: "በቤተ ክርስቲያን ዙሪያ፤ ቅጽር፣ ዐውደ ምሕረትና ቤተ ልሔም" },
      punkter: [
        {
          tekst: {
            no: "ቅጽር er muren og gården rundt kirka. Den er også hellig. Kirkas lærere sier at muren og trærne rundt er et bilde på englene som vokter mennesker og kirka. Den som står i kirkegården under gudstjenesten, regnes også som til stede.",
            am: "ቅጽር የቤተ ክርስቲያኑ ግቢና አጥር ነው፤ እርሱም የተቀደሰ ነው። ዕጽዋቱና ቅጽሩ ሰውንም ሕንጻውንም የሚጠብቁ የቅዱሳን መላእክት ምሳሌ ናቸው ብለው መምህራን ያስተምራሉ። በአገልግሎት ጊዜ በቅጽሩ ውስጥ የቆመም እንዳስቀደሰ ይቆጠራል።",
          },
          vers: ["Ps 91:11", "Ps 84:2-3"],
        },
        {
          tekst: {
            no: "ዐውደ ምሕረት er den åpne plassen foran kirka. Her står ታቦቱ under ንግሥ, her synger kirkesangerne og søndagsskolen, og her blir evangeliet forkynt for folket.",
            am: "ዐውደ ምሕረት በቤተ ክርስቲያኑ ፊት ለፊት ያለው ዐደባባይ ነው። በንግሥ ቀን ታቦቱ በዚያ ይቆማል፤ ካህናትና የሰንበት ትምህርት ቤት መዘምራን ይዘምራሉ፤ ለሕዝቡም ቃለ ወንጌል ይሰበካል።",
          },
        },
        {
          tekst: {
            no: "ቤተ ልሔም er et lite hus på østsiden av kirka. Der lager diakonene brødet og vinen til nattverden. Det har fått navnet sitt fordi det minner oss om Betlehem, der Jesus ble født. Helligdommen (መቅደስ) er et bilde på Golgata.",
            am: "ቤተ ልሔም በቤተ ክርስቲያኑ ምሥራቅ በኩል ያለች ቤት ናት፤ በዚያ ዲያቆናት ለመሥዋዕት የሚሆነውን ኅብስትና ወይን ያዘጋጃሉ። ጌታችን የተወለደባትን ቤተ ልሔም ስለምታስታውሰን ቤተ ልሔም ተባለች፤ መቅደሱ ደግሞ የቀራንዮ ምሳሌ ነው።",
          },
          vers: ["Luke 2:4", "John 19:17"],
        },
        {
          tekst: {
            no: "Rundt kirka finnes også ዕቃ ቤት, der de hellige karene, klærne og bøkene oppbevares, og ክርስትና ቤት, der dåpen blir holdt.",
            am: "በቤተ ክርስቲያኑ ዙሪያ ንዋየ ቅድሳት፣ አልባሳትና መጻሕፍት የሚቀመጡበት ዕቃ ቤትና ሥርዓተ ጥምቀት የሚፈጸምበት ክርስትና ቤት ይገኛሉ።",
          },
        },
        {
          tekst: {
            no: "Kuppelen (ጉልላት) på toppen av kirka er et bilde på Golgata, høyden der Jesus ble korsfestet for å frelse oss.",
            am: "በቤተ ክርስቲያን አናት ላይ ያለው ጉልላት ጌታችን የሰውን ልጅ ለማዳን የተሰቀለበት የቀራንዮ ኮረብታ ምሳሌ ነው።",
          },
          vers: ["John 19:17"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Ignatius av Antiokia", am: "ቅዱስ አግናጥዮስ ምጥው ለአንበሳ" },
      tekst: {
        no: "Ignatius var biskop i apostlenes tid og døde som martyr. Han skrev: «Skynd dere alle sammen til ett Guds tempel, kom til ett alter.» Og: «Ta vare på kroppen deres som Guds tempel.»",
        am: "ቅዱስ አግናጥዮስ በሐዋርያት ዘመን የነበረ ጳጳስና ሰማዕት ነው። «ሁላችሁም ወደ አንድ የእግዚአብሔር ቤተ መቅደስ ገስግሱ ወደ አንድ ምስዋዕ ቅረቡ» ብሏል። ደግሞም «ሰውነታችሁን እንደ እግዚአብሔር ቤተ መቅደስ ጠብቁ» ብሏል።",
      },
      kilde:
        "Mahibere Kidusan: «ቤተ ክርስቲያን» (Dn. Kelemework Midekisa), etter «ቅዱስ አግናጥዮስ ምጥው ለአንበሳ ሐዋርያዊ ጳጳስ ወሰማዕት», s. 80–85 – https://eotcmk.org/a/%E1%89%A4%E1%89%B0-%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/",
    },
    {
      navn: { no: "De 318 fedrene (kirkemøtet i Nikea), i ፍትሐ ነገሥት", am: "፫፻፲፰ቱ ሊቃውንት በፍትሐ ነገሥት" },
      tekst: {
        no: "Kirkas lovbok ፍትሐ ነገሥት sier at de 318 fedrene bestemte: «ወይኩን ታቦት ዘይፈልስ እመካን ውስተ መካን» – ታቦቱ skal være slik at den kan flyttes fra sted til sted.",
        am: "፫፻፲፰ቱ ሊቃውንት በፍትሐ ነገሥት «ወይኩን ታቦት ዘይፈልስ እመካን ውስተ መካን» ብለው ታቦት በቅርጹ ከቦታ ቦታ የሚንቀሳቀስ ሆኖ እንዲቀረጽ ወሰኑ።",
      },
      kilde:
        "Mahibere Kidusan: «ታቦት በሐዲስ ኪዳን» (Memher Mabel Fetene) – https://eotcmk.org/gibi-a/%E1%89%B3%E1%89%A6%E1%89%B5-%E1%89%A0%E1%88%90%E1%8B%B2%E1%88%B5-%E1%8A%AA%E1%8B%B3%E1%8A%95/",
    },
    {
      navn: { no: "Abba Giyorgis av Gasicha", am: "ሊቁ አባ ጊዮርጊስ ዘጋሥጫ" },
      tekst: {
        no: "Når diakonen roper «Se mot øst!», minner han oss om Maria, som Kristus, rettferdighetens sol, ble født av. Abba Giyorgis lovpriser henne slik: «ኦ ጽባሕ እንተ አልብኪ ጽልመት» – du morgengry som ikke har noe mørke.",
        am: "ዲያቆኑ «ወደ ምሥራቅ ተመልከቱ» ሲል ፀሐየ ጽድቅ ክርስቶስ የተገኘባትን እመቤታችንን እንድናስብ ነው። ሊቁ አባ ጊዮርጊስ ዘጋሥጫ «ኦ ጽባሕ እንተ አልብኪ ጽልመት፤ ጨለማ የሌለብሽ የንጋት ወጋገን» ብሎ አመስግኗታል።",
      },
      kilde:
        "Mahibere Kidusan: «ወደ ምሥራቅ ተመልከቱ (ሥርዓተ ቅዳሴ)» (Memher Haymanot Askebir) – https://eotcmk.org/a/%E1%8B%88%E1%8B%B0-%E1%88%9D%E1%88%A5%E1%88%AB%E1%89%85-%E1%89%B0%E1%88%98%E1%88%8D%E1%8A%A8%E1%89%B1-%E1%88%A5%E1%88%AD%E1%8B%93%E1%89%B0-%E1%89%85%E1%8B%B3%E1%88%B4/",
    },
  ],
  ord: [
    { ord: "ሕንጻ ቤተ ክርስቲያን", forklaring: { no: "kirkebygget", am: "የክርስቲያኖች መሰብሰቢያ ቤት" } },
    { ord: "ቅኔ ማኅሌት", forklaring: { no: "den ytterste delen, der det synges lovsang", am: "ማኅሌት የሚቆምበት የውጭኛው ክፍል" } },
    { ord: "ቅድስት", forklaring: { no: "midtdelen, der nattverden deles ut", am: "ምእመናን የሚቆርቡበት ማእከላዊ ክፍል" } },
    { ord: "መቅደስ", forklaring: { no: "helligdommen, der ታቦቱ står", am: "ታቦቱ የሚኖርበት ውስጠኛው ክፍል" } },
    { ord: "ታቦት", forklaring: { no: "paktens ark; i dag tavlen og kisten som Guds navn står på", am: "የጽላት ማደሪያ" } },
    { ord: "ጽላት", forklaring: { no: "tavle med Guds ord og navn skrevet på", am: "ቅዱስ ቃሉ የተጻፈበት ሰሌዳ" } },
    { ord: "ታቦታት", forklaring: { no: "flertall av ታቦት", am: "የታቦት ብዙ ቍጥር" } },
    { ord: "መንበር", forklaring: { no: "tronen som ታቦቱ står på", am: "የታቦቱ ዙፋን" } },
    { ord: "ቅዳሴ ቤት", forklaring: { no: "dagen en kirke blir vigslet", am: "ቤተ ክርስቲያን የከበረበት ዕለት" } },
    { ord: "ንግሥ", forklaring: { no: "kirkas årlige fest, da ታቦቱ bæres ut", am: "ታቦቱ የሚወጣበት ዓመታዊ በዓል" } },
    { ord: "ዐውደ ምሕረት", forklaring: { no: "den åpne plassen foran kirka", am: "በቤተ ክርስቲያን ፊት ያለው ዐደባባይ" } },
    { ord: "ቤተ ልሔም", forklaring: { no: "huset der nattverdsbrødet lages", am: "ኅብስቱና ወይኑ የሚዘጋጅበት ቤት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvilke tre betydninger har ordet ቤተ ክርስቲያን?", am: "«ቤተ ክርስቲያን» ሦስቱ ትርጉሞቹ ምንድን ናቸው?" },
      svar: {
        no: "Kirkebygget, alle de troende sammen, og hver enkelt kristen, som er et tempel for Den hellige ånd.",
        am: "ሕንጻ ቤተ ክርስቲያን፣ ማኅበረ ምእመናንና የመንፈስ ቅዱስ ቤተ መቅደስ የሆነው እያንዳንዱ ምእመን።",
      },
    },
    {
      sporsmal: { no: "Hva heter de tre delene i kirka, og hvem får gå inn i መቅደስ?", am: "የቤተ ክርስቲያን ሦስቱ ክፍሎች ምን ይባላሉ? ወደ መቅደስ የሚገባውስ ማን ነው?" },
      svar: {
        no: "ቅኔ ማኅሌት, ቅድስት og መቅደስ. Bare diakoner, prester og biskoper går inn i መቅደስ.",
        am: "ቅኔ ማኅሌት፣ ቅድስትና መቅደስ። ወደ መቅደስ የሚገቡት ዲያቆናትና ሥልጣነ ክህነት ያላቸው ብቻ ናቸው።",
      },
    },
    {
      sporsmal: { no: "Hva er forskjellen på ታቦት og ጽላት?", am: "በታቦትና በጽላት መካከል ያለው ልዩነት ምንድን ነው?" },
      svar: {
        no: "ጽላት er tavlen som Guds ord og navn er skrevet på. ታቦት er arken, boligen der ጽላት oppbevares. I dag kalles ofte ጽላቱ selv ታቦት.",
        am: "ጽላት ቃሉና ስሙ የተጻፈበት ሰሌዳ ነው፤ ታቦት ደግሞ የጽላት ማደሪያ ነው። ዛሬ ብዙ ጊዜ ጽላቱ ራሱ ታቦት ይባላል።",
      },
    },
    {
      sporsmal: { no: "Hva gjør et bygg til en kirke?", am: "ሕንጻን ቤተ ክርስቲያን የሚያሰኘው ምንድን ነው?" },
      svar: {
        no: "At biskopen gir det en ታቦት, og at den blir vigslet med bønn og myron. Uten ታቦት kan ቅዳሴ ikke feires.",
        am: "ኤጲስ ቆጶሱ ታቦት ሰጥቶት በጸሎትና በቅብዐ ሜሮን መክበሩ ነው። ታቦት ከሌለ ቅዳሴ አይቀደስም።",
      },
    },
    {
      sporsmal: { no: "Når bæres ታቦቱ ut av kirka?", am: "ታቦቱ ከቤተ ክርስቲያን የሚወጣው መቼ ነው?" },
      svar: {
        no: "Ved ጥምቀት og på kirkas årlige fest (ንግሥ). Prestene bærer den rundt kirka, dekket med klær, mens folket synger og jubler, slik David danset foran arken.",
        am: "በጥምቀትና በቤተ ክርስቲያኑ ዓመታዊ ንግሥ። ዳዊት በታቦቱ ፊት እንደ ዘመረ ካህናት ታቦቱን በልብስ ሸፍነው ይዞራሉ፤ ሕዝቡም በዝማሬና በእልልታ ያከብራል።",
      },
    },
    {
      sporsmal: { no: "Hvorfor heter kirker etter en helgen, en engel, Maria eller en høytid?", am: "አብያተ ክርስቲያናት በቅዱሳን፣ በመላእክት፣ በእመቤታችን ወይም በበዓላት ስም ለምን ይሰየማሉ?" },
      svar: {
        no: "Fordi ታቦቱ har fått det navnet. Gud lovet sine venner et minne og et navn i hans hus (Jes 56,5). Men den som blir æret, er Kristus.",
        am: "ታቦቱ በዚያ ስም ስለተሰየመ ነው። እግዚአብሔር ለወዳጆቹ በቤቱ መታሰቢያና ስም እንደሚሰጣቸው ተናግሯል (ኢሳ 56፥5)። የሚከብረው ግን ክርስቶስ ነው።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: ቅድስት ቤተ ክርስቲያን", url: "https://eotcmk.org/a/%E1%89%85%E1%8B%B5%E1%88%B5%E1%89%B5-%E1%89%A4%E1%89%B0-%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/" },
    { navn: "Mahibere Kidusan: ቤተ ክርስቲያን (tre betydninger, St. Ignatius)", url: "https://eotcmk.org/a/%E1%89%A4%E1%89%B0-%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/" },
    { navn: "Mahibere Kidusan: ታቦት (Hamer, 1985)", url: "https://eotcmk.org/a/%E1%89%B3%E1%89%A6%E1%89%B5-2/" },
    { navn: "Mahibere Kidusan (Gibi Gubaye): ታቦት በሐዲስ ኪዳን", url: "https://eotcmk.org/gibi-a/%E1%89%B3%E1%89%A6%E1%89%B5-%E1%89%A0%E1%88%90%E1%8B%B2%E1%88%B5-%E1%8A%AA%E1%8B%B3%E1%8A%95/" },
    { navn: "Mahibere Kidusan (Gibi Gubaye): ጽዮን ማርያም", url: "https://eotcmk.org/gibi-a/%E1%8C%BD%E1%8B%AE%E1%8A%95-%E1%88%9B%E1%88%AD%E1%8B%AB%E1%88%9D-2/" },
    { navn: "Mahibere Kidusan: «ወደ ምሥራቅ ተመልከቱ» (ሥርዓተ ቅዳሴ)", url: "https://eotcmk.org/a/%E1%8B%88%E1%8B%B0-%E1%88%9D%E1%88%A5%E1%88%AB%E1%89%85-%E1%89%B0%E1%88%98%E1%88%8D%E1%8A%A8%E1%89%B1-%E1%88%A5%E1%88%AD%E1%8B%93%E1%89%B0-%E1%89%85%E1%8B%B3%E1%88%B4/" },
    { navn: "Mahibere Kidusan (English): Liturgical Worship – Unique Features of EOTC", url: "https://eotcmk.org/e/unique-features-of-ethiopian-orthodox-tewahedo-church/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ንግሥ እና ንግድ", url: "https://astemhro.com/2019/11/16/celebration/" },
  ],
  utkast: true,
};
