import type { Fortelling } from "./typer";

// Fortellinger fra Det nye testamentet, i rekkefølgen fra Jesu liv og Apostlenes gjerninger.
// Gjenfortalt med enkle ord etter den amhariske bibelen og norsk bibel 1930.
//
// Usikkert: ስደተ ማርያም – at kirka minnes flukten særlig i ዘመነ ጽጌ og på ቍስቋም (ኅዳር 6). Prest bør bekrefte.
// Usikkert: ቃና ዘገሊላ feires dagen etter ጥምቀት (ጥር 12). Prest bør bekrefte datoen.
// Usikkert: at fjellet i Matt 17 er Tabor, er kirkas tradisjon (bibelen sier bare «et høyt fjell»).
// Usikkert: skikkene ved ቡሄ (barn som synger, brødet ሙልሙል, fakler/ችቦ) – kan variere fra sted til sted.
// Usikkert: tradisjonen om at hoffmannen (ጃንደረባው) het ባኮስ og forkynte i Etiopia. Prest bør bekrefte.
// Usikkert: ገና/ልደት ታኅሣሥ 29 (ታኅሣሥ 28 i noen år), ጥምቀት ጥር 11, ደብረ ታቦር ነሐሴ 13 – vanlige datoer, men bør sjekkes.
export const NT: Fortelling[] = [
  {
    slug: "bebudelsen",
    testament: "nt",
    nr: 1,
    tittel: { no: "Engelen Gabriel kommer til Maria", am: "መልአኩ ገብርኤል ወደ ማርያም መጣ" },
    ref: "Luke 1:26-38",
    bilde: "bebudelsen",
    tekst: [
      {
        no: "Gud sendte engelen Gabriel til byen Nasaret i Galilea. Der bodde en ung jomfru som het Maria. Hun var lovet bort til Josef, som var av Davids slekt.",
        am: "እግዚአብሔር መልአኩን ገብርኤልን በገሊላ ወዳለችው ናዝሬት ወደምትባል ከተማ ላከው። በዚያ ማርያም የምትባል ድንግል ትኖር ነበር። እርስዋም ከዳዊት ወገን ለሆነው ዮሴፍ ለሚባል ሰው ታጭታ ነበር።",
      },
      {
        no: "Engelen kom inn til henne og sa: «Fred være med deg, du som har fått nåde! Herren er med deg.» Maria ble forskrekket og lurte på hva denne hilsenen betydde.",
        am: "መልአኩም ወደ እርስዋ ገብቶ «ደስ ይበልሽ፥ ጸጋ የሞላብሽ ሆይ፥ ጌታ ከአንቺ ጋር ነው» አላት። ማርያምም በንግግሩ ደነገጠች፤ ይህ ሰላምታ ምን ማለት እንደ ሆነም አሰበች።",
      },
      {
        no: "«Vær ikke redd, Maria,» sa engelen. «Du skal få en sønn, og du skal gi ham navnet Jesus. Han skal kalles Den Høyestes Sønn, og hans rike skal aldri ta slutt.»",
        am: "መልአኩም «ማርያም ሆይ፥ አትፍሪ» አላት። «ወንድ ልጅ ትወልጃለሽ፤ ስሙንም ኢየሱስ ትዪዋለሽ። የልዑል ልጅ ይባላል፤ ለመንግሥቱም መጨረሻ የለውም።»",
      },
      {
        no: "Maria spurte: «Hvordan kan dette skje? Jeg har jo ingen mann.» Engelen svarte: «Den hellige ånd skal komme over deg. Derfor skal barnet kalles hellig, Guds Sønn. For Gud er ingen ting umulig.»",
        am: "ማርያምም «ወንድ ስለማላውቅ ይህ እንዴት ይሆናል?» ብላ ጠየቀች። መልአኩም «መንፈስ ቅዱስ በአንቺ ላይ ይመጣል፤ ስለዚህ ከአንቺ የሚወለደው ቅዱስ የእግዚአብሔር ልጅ ይባላል። ለእግዚአብሔር የሚሳነው ነገር የለምና» ብሎ መለሰላት።",
      },
      {
        no: "Da sa Maria: «Se, jeg er Herrens tjenerinne. La det skje med meg som du har sagt.» Og engelen gikk bort fra henne.",
        am: "ማርያምም «እነሆኝ የጌታ ባሪያ፤ እንደ ቃልህ ይሁንልኝ» አለች። መልአኩም ከእርስዋ ሄደ።",
      },
    ],
    laerdom: {
      no: "Da Maria sa ja, ble Guds Sønn menneske i hennes morsliv. Derfor kaller kirka henne ወላዲተ አምላክ, Gudsføderske, og hun forble jomfru for alltid. Engelens hilsen lever videre i kirkas bønner til Maria.",
      am: "ማርያም «እንደ ቃልህ ይሁንልኝ» ባለች ጊዜ የእግዚአብሔር ልጅ በማኅፀንዋ ሰው ሆነ። ስለዚህ ቤተ ክርስቲያን «ወላዲተ አምላክ» ትላታለች፤ እርስዋም ለዘላለም ድንግል ናት። የመልአኩ ሰላምታ ዛሬም በቤተ ክርስቲያን ጸሎት ውስጥ ይነገራል።",
    },
    minnevers: "Luke 1:38",
    sporsmal: [
      {
        sporsmal: { no: "Hvilken engel ble sendt til Maria?", am: "ወደ ማርያም የተላከው መልአክ ማን ነው?" },
        svar: { no: "Engelen Gabriel.", am: "መልአኩ ገብርኤል።" },
      },
      {
        sporsmal: { no: "Hva skulle barnet hete?", am: "ሕፃኑ ማን ተብሎ ይጠራል?" },
        svar: { no: "Jesus.", am: "ኢየሱስ።" },
      },
      {
        sporsmal: { no: "Hva svarte Maria til slutt?", am: "ማርያም በመጨረሻ ምን መለሰች?" },
        svar: {
          no: "«Se, jeg er Herrens tjenerinne. La det skje med meg som du har sagt.»",
          am: "«እነሆኝ የጌታ ባሪያ፤ እንደ ቃልህ ይሁንልኝ።»",
        },
      },
    ],
  },
  {
    slug: "maria-besoker-elisabet",
    testament: "nt",
    nr: 2,
    tittel: { no: "Maria besøker Elisabet", am: "ማርያም ኤልሳቤጥን ጎበኘች" },
    ref: "Luke 1:39-56",
    tekst: [
      {
        no: "Engelen hadde fortalt Maria at slektningen hennes, Elisabet, skulle få et barn, selv om hun var gammel. Maria skyndte seg av sted til en by i fjellene i Judea.",
        am: "መልአኩ ዘመድዋ ኤልሳቤጥ በእርጅናዋ ልጅ እንደ ፀነሰች ለማርያም ነግሮአት ነበር። ማርያምም ተነሥታ ወደ ይሁዳ ተራራማ አገር ፈጥና ሄደች።",
      },
      {
        no: "Hun gikk inn i huset til Sakarias og hilste på Elisabet. Da Elisabet hørte hilsenen, hoppet barnet i magen hennes. Det var Johannes, som senere ble Johannes døperen.",
        am: "ወደ ዘካርያስ ቤት ገብታ ኤልሳቤጥን ሰላም አለቻት። ኤልሳቤጥም የማርያምን ሰላምታ በሰማች ጊዜ ፅንሱ በማኅፀንዋ ዘለለ። ይህ ፅንስ ኋላ መጥምቁ ዮሐንስ የተባለው ነው።",
      },
      {
        no: "Elisabet ble fylt av Den hellige ånd og ropte: «Velsignet er du blant kvinner, og velsignet er frukten i ditt morsliv! Hvordan kan det skje meg at min Herres mor kommer til meg?»",
        am: "ኤልሳቤጥም መንፈስ ቅዱስ ሞላባትና በታላቅ ድምፅ «አንቺ ከሴቶች መካከል የተባረክሽ ነሽ፥ የማኅፀንሽም ፍሬ የተባረከ ነው። የጌታዬ እናት ወደ እኔ ትመጣ ዘንድ እንዴት ይሆንልኛል?» አለች።",
      },
      {
        no: "Da priste Maria Gud med en sang: «Min sjel opphøyer Herren.» Hun sa også at fra nå av skal alle slekter kalle henne salig. Maria ble hos Elisabet i omtrent tre måneder.",
        am: "ማርያምም «ነፍሴ ጌታን ታከብረዋለች» ብላ እግዚአብሔርን አመሰገነች። «ከዛሬ ጀምሮ ትውልድ ሁሉ ብፅዕት ይሉኛል» ብላም ተናገረች። ማርያምም ሦስት ወር ያህል በኤልሳቤጥ ዘንድ ተቀመጠች።",
      },
    ],
    laerdom: {
      no: "Elisabet kalte Maria «min Herres mor», fordi barnet hun bar, er Gud. Derfor ærer kirka Maria og kaller henne salig, slik hun selv sa at alle slekter skulle gjøre.",
      am: "ኤልሳቤጥ ማርያምን «የጌታዬ እናት» አለቻት፤ በማኅፀንዋ ያለው አምላክ ነውና። ስለዚህ ቤተ ክርስቲያን ራስዋ እንደ ተናገረችው ማርያምን ታከብራታለች፤ «ብፅዕት» ትላታለችም።",
    },
    minnevers: "Luke 1:48",
    sporsmal: [
      {
        sporsmal: { no: "Hva skjedde da Elisabet hørte Marias hilsen?", am: "ኤልሳቤጥ የማርያምን ሰላምታ በሰማች ጊዜ ምን ሆነ?" },
        svar: {
          no: "Barnet hoppet i magen hennes, og hun ble fylt av Den hellige ånd.",
          am: "ፅንሱ በማኅፀንዋ ዘለለ፤ መንፈስ ቅዱስም ሞላባት።",
        },
      },
      {
        sporsmal: { no: "Hva kalte Elisabet Maria?", am: "ኤልሳቤጥ ማርያምን ምን ብላ ጠራቻት?" },
        svar: { no: "«Min Herres mor.»", am: "«የጌታዬ እናት።»" },
      },
    ],
  },
  {
    slug: "jesu-fodsel",
    testament: "nt",
    nr: 3,
    tittel: { no: "Jesus blir født", am: "የኢየሱስ ልደት" },
    ref: "Luke 2:1-20",
    bilde: "fodselen",
    tekst: [
      {
        no: "Keiser Augustus befalte at alle skulle skrives inn i manntall. Josef dro fra Nasaret til Betlehem, Davids by, sammen med Maria, som ventet barn.",
        am: "አውግስጦስ ቄሣር ዓለሙ ሁሉ እንዲጻፍ አዘዘ። ዮሴፍም ፀንሳ ከነበረችው ከማርያም ጋር ከናዝሬት ወደ ዳዊት ከተማ ወደ ቤተ ልሔም ሄደ።",
      },
      {
        no: "Mens de var der, fødte Maria sønnen sin. Hun svøpte ham og la ham i en krybbe, for det var ikke plass til dem i herberget.",
        am: "በዚያ ሳሉ ማርያም የበኵር ልጅዋን ወለደች። በመጠቅለያ ጠቀለለችው፤ በእንግዶች ማደሪያም ስፍራ ስላልነበራቸው በግርግም አስተኛችው።",
      },
      {
        no: "Ute på marken passet noen gjetere sauene sine om natten. En engel kom til dem og sa: «Vær ikke redde! I dag er det født dere en frelser i Davids by. Han er Kristus, Herren.»",
        am: "በዚያ ምድር በሌሊት መንጋቸውን የሚጠብቁ እረኞች ነበሩ። የጌታ መልአክም ወደ እነርሱ ቀርቦ «አትፍሩ፤ ዛሬ በዳዊት ከተማ መድኃኒት ተወልዶላችኋል፤ እርሱም ክርስቶስ ጌታ ነው» አላቸው።",
      },
      {
        no: "Plutselig var det en stor himmelsk hærskare sammen med engelen. De lovet Gud og sang: «Ære være Gud i det høyeste, og fred på jorden!»",
        am: "ድንገትም ብዙ የሰማይ ሠራዊት ከመልአኩ ጋር ታዩ። «ክብር ለእግዚአብሔር በአርያም ይሁን፤ ሰላምም በምድር» እያሉ እግዚአብሔርን አመሰገኑ።",
      },
      {
        no: "Gjeterne skyndte seg til Betlehem og fant Maria og Josef og barnet som lå i krybben. De fortalte det engelen hadde sagt. Maria tok vare på alt dette og tenkte på det i sitt hjerte.",
        am: "እረኞቹም ፈጥነው ወደ ቤተ ልሔም ሄዱ፤ ማርያምንና ዮሴፍን፥ ሕፃኑንም በግርግም ተኝቶ አገኙ። መልአኩ የነገራቸውንም ተናገሩ። ማርያም ግን ይህን ሁሉ በልብዋ ትጠብቀው ነበር።",
      },
    ],
    laerdom: {
      no: "Guds Sønn ble født som et lite barn for å frelse oss. Kirka feirer fødselen hans på ገና, også kalt ልደት, den 29. ታኅሣሥ. Englenes sang synger vi fortsatt i kirka.",
      am: "የእግዚአብሔር ልጅ እኛን ለማዳን ሕፃን ሆኖ ተወለደ። ቤተ ክርስቲያን ልደቱን በታኅሣሥ 29 በገና በዓል ታከብራለች። የመላእክትን ምስጋና ዛሬም በቤተ ክርስቲያን እንዘምራለን።",
    },
    minnevers: "Luke 2:14",
    sporsmal: [
      {
        sporsmal: { no: "Hvor ble Jesus født?", am: "ኢየሱስ የተወለደው የት ነው?" },
        svar: { no: "I Betlehem, Davids by.", am: "በዳዊት ከተማ በቤተ ልሔም።" },
      },
      {
        sporsmal: { no: "Hvor la Maria barnet?", am: "ማርያም ሕፃኑን የት አስተኛችው?" },
        svar: { no: "I en krybbe.", am: "በግርግም።" },
      },
      {
        sporsmal: { no: "Hvem fikk først høre nyheten av engelen?", am: "የምሥራቹን መጀመሪያ ከመልአኩ የሰሙት እነማን ናቸው?" },
        svar: { no: "Gjeterne på marken.", am: "በሜዳ የነበሩ እረኞች።" },
      },
    ],
  },
  {
    slug: "vismennene",
    testament: "nt",
    nr: 4,
    tittel: { no: "Vismennene fra Østen", am: "ሰብአ ሰገል" },
    ref: "Matt 2:1-12",
    tekst: [
      {
        no: "Da Jesus var født, kom noen vismenn fra Østen til Jerusalem. De spurte: «Hvor er jødenes konge som er født? Vi har sett stjernen hans og er kommet for å tilbe ham.»",
        am: "ኢየሱስ በተወለደ ጊዜ ሰብአ ሰገል ከምሥራቅ ወደ ኢየሩሳሌም መጡ። «የተወለደው የአይሁድ ንጉሥ ወዴት ነው? ኮከቡን በምሥራቅ አይተን ልንሰግድለት መጥተናል» አሉ።",
      },
      {
        no: "Kong Herodes ble urolig. Han fikk vite at Kristus skulle fødes i Betlehem. I hemmelighet sendte han vismennene dit og sa: «Kom og fortell meg når dere har funnet barnet.»",
        am: "ንጉሡ ሄሮድስም ደነገጠ። ክርስቶስ በቤተ ልሔም እንደሚወለድ ተረዳ። ሰብአ ሰገልንም በስውር ጠርቶ «ሕፃኑን ባገኛችሁት ጊዜ ንገሩኝ» ብሎ ወደ ቤተ ልሔም ላካቸው።",
      },
      {
        no: "Stjernen gikk foran dem til den stod stille over stedet der barnet var. De gikk inn, så barnet med Maria, hans mor, og falt ned og tilba ham.",
        am: "በምሥራቅ ያዩት ኮከብ ሕፃኑ ባለበት ላይ መጥቶ እስኪቆም ድረስ መራቸው። ወደ ቤትም ገብተው ሕፃኑን ከእናቱ ከማርያም ጋር አዩት፤ ወድቀውም ሰገዱለት።",
      },
      {
        no: "De gav ham gaver: gull, røkelse og myrra. Gud varslet dem i en drøm om ikke å gå tilbake til Herodes, så de reiste hjem en annen vei.",
        am: "ወርቅና ዕጣን ከርቤም እጅ መንሻ አቀረቡለት። ወደ ሄሮድስ እንዳይመለሱ በሕልም ተነገራቸው፤ ስለዚህ በሌላ መንገድ ወደ አገራቸው ሄዱ።",
      },
    ],
    laerdom: {
      no: "Kirkefedrene forklarer gavene slik: gull fordi han er konge, røkelse fordi han er Gud, og myrra fordi han skulle dø for oss. Vismennene var fremmede fra et annet folk, og viser at Kristus kom for alle folk.",
      am: "አባቶች የስጦታዎቹን ትርጉም እንዲህ ያስተምራሉ፤ ወርቅ ንጉሥ ስለ ሆነ፣ ዕጣን አምላክ ስለ ሆነ፣ ከርቤ ደግሞ ስለ እኛ ስለሚሞት ነው። ሰብአ ሰገል ከሌላ ሕዝብ የመጡ ናቸው፤ ይህም ክርስቶስ ለሕዝብ ሁሉ እንደ መጣ ያሳያል።",
    },
    minnevers: "Matt 2:11",
    sporsmal: [
      {
        sporsmal: { no: "Hva viste vismennene veien?", am: "ሰብአ ሰገልን መንገድ ያሳያቸው ምንድን ነው?" },
        svar: { no: "En stjerne.", am: "ኮከብ።" },
      },
      {
        sporsmal: { no: "Hvilke tre gaver gav de?", am: "ያቀረቧቸው ሦስቱ ስጦታዎች ምንድን ናቸው?" },
        svar: { no: "Gull, røkelse og myrra.", am: "ወርቅ፣ ዕጣንና ከርቤ።" },
      },
      {
        sporsmal: { no: "Hvorfor gikk de ikke tilbake til Herodes?", am: "ወደ ሄሮድስ ለምን አልተመለሱም?" },
        svar: {
          no: "Gud varslet dem i en drøm, og de reiste hjem en annen vei.",
          am: "በሕልም ተነገራቸው፤ በሌላ መንገድም ወደ አገራቸው ሄዱ።",
        },
      },
    ],
  },
  {
    slug: "flukten-til-egypt",
    testament: "nt",
    nr: 5,
    tittel: { no: "Flukten til Egypt", am: "ስደተ ማርያም፤ ወደ ግብፅ የተደረገ ስደት" },
    ref: "Matt 2:13-23",
    tekst: [
      {
        no: "Etter at vismennene hadde reist, viste en Herrens engel seg for Josef i en drøm. «Stå opp,» sa engelen, «ta barnet og moren hans og flykt til Egypt. Herodes vil drepe barnet.»",
        am: "ሰብአ ሰገል ከሄዱ በኋላ የጌታ መልአክ በሕልም ለዮሴፍ ታየው። «ሄሮድስ ሕፃኑን ሊገድለው ይፈልገዋልና ተነሣ፥ ሕፃኑንና እናቱን ይዘህ ወደ ግብፅ ሽሽ» አለው።",
      },
      {
        no: "Josef stod opp om natten og dro til Egypt med Jesus og Maria. Der ble de til Herodes døde. Slik gikk det i oppfyllelse som profeten hadde sagt: «Fra Egypt kalte jeg min sønn.»",
        am: "ዮሴፍም ተነሥቶ ሕፃኑንና እናቱን በሌሊት ይዞ ወደ ግብፅ ሄደ። ሄሮድስም እስኪሞት ድረስ በዚያ ኖሩ። በነቢዩ «ልጄን ከግብፅ ጠራሁት» የተባለውም ተፈጸመ።",
      },
      {
        no: "Herodes ble rasende da han skjønte at vismennene hadde lurt ham. Han lot drepe alle guttebarn i Betlehem som var to år eller yngre.",
        am: "ሄሮድስም ሰብአ ሰገል እንደ ተሣለቁበት ባየ ጊዜ እጅግ ተቈጣ። በቤተ ልሔምና በአካባቢዋ ሁለት ዓመትና ከዚያ በታች የሆኑትን ሕፃናት ሁሉ አስገደለ።",
      },
      {
        no: "Da Herodes var død, sa engelen til Josef i en drøm at de kunne vende tilbake. Familien kom hjem og bosatte seg i byen Nasaret i Galilea.",
        am: "ሄሮድስ ከሞተ በኋላ መልአኩ በሕልም ለዮሴፍ ታይቶ እንዲመለሱ ነገረው። እነርሱም ተመልሰው በገሊላ ናዝሬት በምትባል ከተማ ኖሩ።",
      },
    ],
    laerdom: {
      no: "Kirka kaller denne reisen ስደተ ማርያም, Marias flukt, og minnes den særlig i ዘመነ ጽጌ om høsten. Den hellige familie led som flyktninger, og derfor ber vi også for alle som må flykte fra hjemmet sitt.",
      am: "ቤተ ክርስቲያን ይህን ጉዞ «ስደተ ማርያም» ትለዋለች፤ በተለይም በዘመነ ጽጌ ታስበዋለች። ቅዱሳን ቤተሰብ በስደት መከራ ተቀበሉ፤ ስለዚህ ከአገራቸው ለሚሰደዱ ሁሉ እንጸልያለን።",
    },
    minnevers: "Matt 2:15",
    sporsmal: [
      {
        sporsmal: { no: "Hvorfor måtte familien flykte?", am: "ቤተሰቡ ለምን መሰደድ አስፈለገው?" },
        svar: { no: "Fordi kong Herodes ville drepe barnet.", am: "ንጉሡ ሄሮድስ ሕፃኑን ሊገድለው ይፈልግ ስለ ነበረ።" },
      },
      {
        sporsmal: { no: "Hvordan fikk Josef vite hva han skulle gjøre?", am: "ዮሴፍ ምን እንደሚያደርግ እንዴት አወቀ?" },
        svar: { no: "En engel talte til ham i en drøm.", am: "መልአክ በሕልም ነገረው።" },
      },
      {
        sporsmal: { no: "Hva kaller kirka denne flukten?", am: "ቤተ ክርስቲያን ይህን ስደት ምን ትለዋለች?" },
        svar: { no: "ስደተ ማርያም, Marias flukt.", am: "ስደተ ማርያም።" },
      },
    ],
  },
  {
    slug: "jesus-i-tempelet",
    testament: "nt",
    nr: 6,
    tittel: { no: "Tolv år gamle Jesus i tempelet", am: "የአሥራ ሁለት ዓመቱ ኢየሱስ በቤተ መቅደስ" },
    ref: "Luke 2:41-52",
    tekst: [
      {
        no: "Hvert år dro Maria og Josef til Jerusalem for å feire påske. Da Jesus var tolv år, var han med.",
        am: "ማርያምና ዮሴፍ በየዓመቱ የፋሲካን በዓል ለማክበር ወደ ኢየሩሳሌም ይወጡ ነበር። ኢየሱስም የአሥራ ሁለት ዓመት ልጅ በሆነ ጊዜ አብሮአቸው ወጣ።",
      },
      {
        no: "På vei hjem trodde de at Jesus var med i følget. Men han var blitt igjen i Jerusalem. Etter en dags reise lette de etter ham blant slekt og venner, men fant ham ikke.",
        am: "ሲመለሱም ኢየሱስ ከመንገደኞች ጋር ያለ መሰላቸው። እርሱ ግን በኢየሩሳሌም ቀርቶ ነበር። የአንድ ቀን መንገድ ከሄዱ በኋላ በዘመዶቻቸውና በሚያውቋቸው መካከል ፈለጉት፤ ግን አላገኙትም።",
      },
      {
        no: "De gikk tilbake til Jerusalem. Etter tre dager fant de ham i tempelet. Han satt blant lærerne, lyttet og stilte spørsmål. Alle undret seg over hvor klok han var.",
        am: "ወደ ኢየሩሳሌምም ተመለሱ። ከሦስት ቀን በኋላ በመቅደስ አገኙት። በመምህራን መካከል ተቀምጦ ይሰማቸውና ይጠይቃቸው ነበር። የሰሙትም ሁሉ በማስተዋሉ ተገረሙ።",
      },
      {
        no: "Maria sa: «Barnet mitt, hvorfor gjorde du dette? Vi har lett etter deg med smerte.» Jesus svarte: «Visste dere ikke at jeg må være i min Fars hus?»",
        am: "እናቱም «ልጄ ሆይ፥ ለምን እንዲህ አደረግህብን? እየተጨነቅን ስንፈልግህ ነበር» አለችው። እርሱም «በአባቴ ቤት እሆን ዘንድ እንዲገባኝ አላወቃችሁምን?» አላቸው።",
      },
      {
        no: "Så dro han hjem med dem til Nasaret og var lydig mot dem. Jesus vokste i visdom og alder og var til glede for Gud og mennesker.",
        am: "ከእነርሱም ጋር ወደ ናዝሬት ወርዶ ይታዘዝላቸው ነበር። ኢየሱስም በጥበብና በቁመት፥ በእግዚአብሔርና በሰው ፊት በሞገስ ያድግ ነበር።",
      },
    ],
    laerdom: {
      no: "Jesus kalte tempelet «min Fars hus». Han viser oss at vi skal elske Guds hus og lære om Gud fra vi er små. Han var også lydig mot foreldrene sine, slik vi skal være.",
      am: "ኢየሱስ ቤተ መቅደስን «የአባቴ ቤት» አለው። ከሕፃንነታችን ጀምሮ የእግዚአብሔርን ቤት እንድንወድና እግዚአብሔርን እንድንማር ያሳየናል። እርሱ ለወላጆቹ ታዘዘ፤ እኛም ለወላጆቻችን መታዘዝ ይገባናል።",
    },
    minnevers: "Luke 2:52",
    sporsmal: [
      {
        sporsmal: { no: "Hvor gammel var Jesus?", am: "ኢየሱስ ስንት ዓመቱ ነበር?" },
        svar: { no: "Tolv år.", am: "አሥራ ሁለት ዓመት።" },
      },
      {
        sporsmal: { no: "Hvor fant Maria og Josef ham?", am: "ማርያምና ዮሴፍ የት አገኙት?" },
        svar: { no: "I tempelet, blant lærerne.", am: "በቤተ መቅደስ በመምህራን መካከል።" },
      },
      {
        sporsmal: { no: "Hva gjorde Jesus da han kom hjem til Nasaret?", am: "ኢየሱስ ወደ ናዝሬት በተመለሰ ጊዜ ምን አደረገ?" },
        svar: { no: "Han var lydig mot foreldrene sine.", am: "ለወላጆቹ ይታዘዝ ነበር።" },
      },
    ],
  },
  {
    slug: "jesu-daap",
    testament: "nt",
    nr: 7,
    tittel: { no: "Jesus blir døpt", am: "የኢየሱስ ጥምቀት" },
    ref: "Matt 3:13-17",
    bilde: "daapen",
    tekst: [
      {
        no: "Jesus kom fra Galilea til Jordanelva for å bli døpt av Johannes.",
        am: "ኢየሱስ በዮሐንስ ሊጠመቅ ከገሊላ ወደ ዮርዳኖስ ወንዝ መጣ።",
      },
      {
        no: "Men Johannes ville hindre ham og sa: «Det er jeg som trenger å bli døpt av deg, og så kommer du til meg?» Jesus svarte: «La det skje nå. Slik skal vi oppfylle all rettferdighet.» Da gav Johannes etter.",
        am: "ዮሐንስ ግን «እኔ በአንተ ልጠመቅ ያስፈልገኛል፤ አንተም ወደ እኔ ትመጣለህን?» ብሎ ከለከለው። ኢየሱስም «አሁንስ ፍቀድልኝ፤ ጽድቅን ሁሉ መፈጸም ይገባናልና» አለው። ያን ጊዜ ፈቀደለት።",
      },
      {
        no: "Da Jesus var døpt og steg opp av vannet, åpnet himmelen seg. Han så Guds Ånd komme ned som en due og komme over ham.",
        am: "ኢየሱስም ከተጠመቀ በኋላ ከውኃ ወጣ። ሰማያትም ተከፈቱ፤ የእግዚአብሔርም መንፈስ እንደ ርግብ ሲወርድ በእርሱ ላይም ሲመጣ አየ።",
      },
      {
        no: "En røst fra himmelen sa: «Dette er min Sønn, den elskede, som jeg har velbehag i.»",
        am: "ከሰማያትም «በእርሱ ደስ የሚለኝ የምወደው ልጄ ይህ ነው» የሚል ድምፅ መጣ።",
      },
    ],
    laerdom: {
      no: "Ved Jesu dåp ble Den hellige treenighet åpenbart: Faderen talte, Sønnen ble døpt, og Ånden kom som en due. Kirka feirer dette på ጥምቀት den 11. ጥር. Jesus ble døpt for å vise oss veien, slik at vi kan bli Guds barn i dåpen.",
      am: "በጌታችን ጥምቀት ሥላሴ ተገለጡ፤ አብ በድምፅ ተናገረ፣ ወልድ ተጠመቀ፣ መንፈስ ቅዱስም በርግብ አምሳል ወረደ። ቤተ ክርስቲያን ይህን በጥር 11 በጥምቀት በዓል ታከብራለች። ጌታችን የተጠመቀው እኛም በጥምቀት የእግዚአብሔር ልጆች እንድንሆን መንገድ ሊያሳየን ነው።",
    },
    minnevers: "Matt 3:17",
    sporsmal: [
      {
        sporsmal: { no: "Hvem døpte Jesus, og hvor?", am: "ኢየሱስን ያጠመቀው ማን ነው? የትስ?" },
        svar: { no: "Johannes døpte ham i Jordanelva.", am: "ዮሐንስ በዮርዳኖስ ወንዝ አጠመቀው።" },
      },
      {
        sporsmal: { no: "Hvordan kom Guds Ånd?", am: "የእግዚአብሔር መንፈስ እንዴት ወረደ?" },
        svar: { no: "Som en due.", am: "እንደ ርግብ።" },
      },
      {
        sporsmal: { no: "Hvilken høytid minnes Jesu dåp?", am: "የጌታችንን ጥምቀት የምናስብበት በዓል የትኛው ነው?" },
        svar: { no: "ጥምቀት, den 11. ጥር.", am: "ጥምቀት፤ ጥር 11።" },
      },
    ],
  },
  {
    slug: "bryllupet-i-kana",
    testament: "nt",
    nr: 8,
    tittel: { no: "Bryllupet i Kana", am: "የቃና ሰርግ" },
    ref: "John 2:1-11",
    bilde: "kana",
    tekst: [
      {
        no: "Det var bryllup i Kana i Galilea. Jesu mor var der, og Jesus og disiplene hans var også bedt.",
        am: "በገሊላ ቃና ሰርግ ነበረ። የኢየሱስ እናት በዚያ ነበረች፤ ኢየሱስና ደቀ መዛሙርቱም ወደ ሰርጉ ተጠርተው ነበር።",
      },
      {
        no: "Midt i festen tok vinen slutt. Maria sa til Jesus: «De har ikke mer vin.» Så sa hun til tjenerne: «Gjør det han sier til dere.»",
        am: "በሰርጉ መካከል የወይን ጠጁ አለቀ። የኢየሱስ እናት «የወይን ጠጅ እኮ የላቸውም» አለችው። ለአገልጋዮቹም «የሚላችሁን ሁሉ አድርጉ» አለቻቸው።",
      },
      {
        no: "Det stod seks store steinkar der. Jesus sa: «Fyll karene med vann.» De fylte dem helt opp. «Øs nå opp og bær det til kjøkemesteren,» sa han.",
        am: "በዚያም ስድስት የድንጋይ ጋኖች ነበሩ። ኢየሱስም «ጋኖቹን ውኃ ሙሉአቸው» አላቸው። እስከ አፋቸውም ሞሉአቸው። «አሁን ቀድታችሁ ለአሳዳሪው ስጡት» አላቸው።",
      },
      {
        no: "Kjøkemesteren smakte, og vannet var blitt til vin! Han sa til brudgommen: «Du har spart den gode vinen til nå.» Dette var det første tegnet Jesus gjorde. Han åpenbarte sin herlighet, og disiplene trodde på ham.",
        am: "አሳዳሪውም ቀመሰ፤ ውኃው የወይን ጠጅ ሆኖ ነበር። ሙሽራውንም «አንተ መልካሙን የወይን ጠጅ እስከ አሁን አቆይተሃል» አለው። ይህ ኢየሱስ ያደረገው የምልክቶች መጀመሪያ ነው። ክብሩን ገለጠ፤ ደቀ መዛሙርቱም በእርሱ አመኑ።",
      },
    ],
    laerdom: {
      no: "Maria så at folk manglet noe og bad Sønnen sin for dem. Slik lærer kirka at Maria går i forbønn for oss. Jesus velsignet også ekteskapet ved å komme til bryllupet. Kirka minner dette på ቃና ዘገሊላ, dagen etter ጥምቀት.",
      am: "ማርያም የሰዎቹን ጕድለት አይታ ልጅዋን ለመነችላቸው። ቤተ ክርስቲያንም እመቤታችን ስለ እኛ እንደምታማልድ ታስተምራለች። ጌታችንም ወደ ሰርጉ በመሄድ ጋብቻን ባረከ። ቤተ ክርስቲያን ይህን ከጥምቀት በኋላ ባለው ቀን በቃና ዘገሊላ ታስበዋለች።",
    },
    minnevers: "John 2:5",
    sporsmal: [
      {
        sporsmal: { no: "Hva tok slutt i bryllupet?", am: "በሰርጉ ምን አለቀ?" },
        svar: { no: "Vinen.", am: "የወይን ጠጁ።" },
      },
      {
        sporsmal: { no: "Hva sa Maria til tjenerne?", am: "ማርያም ለአገልጋዮቹ ምን አለቻቸው?" },
        svar: { no: "«Gjør det han sier til dere.»", am: "«የሚላችሁን ሁሉ አድርጉ።»" },
      },
      {
        sporsmal: { no: "Hva gjorde Jesus med vannet?", am: "ኢየሱስ ውኃውን ምን አደረገው?" },
        svar: { no: "Han gjorde det til vin.", am: "የወይን ጠጅ አደረገው።" },
      },
    ],
  },
  {
    slug: "disiplene-kalles",
    testament: "nt",
    nr: 9,
    tittel: { no: "Jesus kaller de første disiplene", am: "ኢየሱስ የመጀመሪያ ደቀ መዛሙርቱን ጠራ" },
    ref: "Luke 5:1-11",
    tekst: [
      {
        no: "Jesus stod ved Gennesaret-sjøen, og mange mennesker trengte seg inn på ham for å høre Guds ord. Han gikk opp i båten til Simon og lærte folket fra båten.",
        am: "ኢየሱስ በጌንሳሬጥ ባሕር ዳር ቆሞ ነበር፤ ብዙ ሕዝብም የእግዚአብሔርን ቃል ለመስማት አስጨነቁት። ወደ ስምዖን ታንኳ ገብቶ ተቀመጠ፤ ከታንኳይቱም ሆኖ ሕዝቡን አስተማረ።",
      },
      {
        no: "Etterpå sa han til Simon: «Ro ut på dypet og kast garnene.» Simon svarte: «Mester, vi har strevd hele natten uten å få noe. Men på ditt ord vil jeg kaste garnene.»",
        am: "ከዚያም በኋላ ስምዖንን «ወደ ጥልቁ ፈቀቅ በል፤ መረቦቻችሁንም ጣሉ» አለው። ስምዖንም «አቤቱ፥ ሌሊቱን ሁሉ ስንደክም ምንም አልያዝንም፤ ነገር ግን በቃልህ መረቦቹን እጥላለሁ» አለው።",
      },
      {
        no: "De fikk så mye fisk at garnene holdt på å revne. De ropte på vennene i den andre båten, og begge båtene ble så fulle at de nesten sank.",
        am: "ይህንም ባደረጉ ጊዜ እጅግ ብዙ ዓሣ ያዙ፤ መረቦቻቸውም ይቀደዱ ጀመር። በሌላ ታንኳ የነበሩትን ጓደኞቻቸውን ጠሩ፤ ሁለቱም ታንኳዎች እስኪሰጥሙ ድረስ ሞሉ።",
      },
      {
        no: "Da Simon Peter så dette, falt han ned for Jesus og sa: «Gå bort fra meg, Herre, for jeg er en syndig mann.» Jesus sa: «Vær ikke redd. Fra nå av skal du fange mennesker.» Simon, Jakob og Johannes, Sebedeus' sønner, forlot alt og fulgte ham.",
        am: "ስምዖን ጴጥሮስም ይህን ባየ ጊዜ በኢየሱስ ጕልበት ላይ ወድቆ «ጌታ ሆይ፥ እኔ ኃጢአተኛ ነኝና ከእኔ ተለይ» አለ። ኢየሱስም «አትፍራ፤ ከእንግዲህ ወዲህ ሰውን የምታጠምድ ትሆናለህ» አለው። ስምዖንና የዘብዴዎስ ልጆች ያዕቆብና ዮሐንስም ሁሉን ትተው ተከተሉት።",
      },
    ],
    laerdom: {
      no: "Disiplene ble apostler, og gjennom dem ble kirka bygd. Biskopene og prestene våre står i den samme rekken fra apostlene. Peter adlød Jesu ord selv om han ikke forstod, og det lærer oss å stole på Gud.",
      am: "ደቀ መዛሙርቱ ሐዋርያት ሆኑ፤ በእነርሱም ቤተ ክርስቲያን ተመሠረተች። ኤጲስ ቆጶሳትና ካህናት ከሐዋርያት በተላለፈው ክህነት ያገለግላሉ። ጴጥሮስ ባይገባውም እንኳ የጌታን ቃል ታዘዘ፤ ይህም በእግዚአብሔር እንድንታመን ያስተምረናል።",
    },
    minnevers: "Luke 5:10",
    sporsmal: [
      {
        sporsmal: { no: "Hvor mye fisk hadde Simon fått om natten?", am: "ስምዖን በሌሊት ምን ያህል ዓሣ ያዘ?" },
        svar: { no: "Ingen ting.", am: "ምንም አልያዘም።" },
      },
      {
        sporsmal: { no: "Hva skulle Simon fange fra nå av?", am: "ስምዖን ከዚያ በኋላ ምን ያጠምዳል?" },
        svar: { no: "Mennesker.", am: "ሰዎችን።" },
      },
      {
        sporsmal: { no: "Hvem fulgte Jesus denne dagen?", am: "በዚያ ቀን ኢየሱስን የተከተሉት እነማን ናቸው?" },
        svar: { no: "Simon Peter, Jakob og Johannes.", am: "ስምዖን ጴጥሮስ፣ ያዕቆብና ዮሐንስ።" },
      },
    ],
  },
  {
    slug: "den-lamme-gjennom-taket",
    testament: "nt",
    nr: 10,
    tittel: { no: "Den lamme som ble senket gjennom taket", am: "በጣራ የወረደው ሽባ" },
    ref: "Mark 2:1-12",
    tekst: [
      {
        no: "Jesus var i et hus i Kapernaum. Så mange kom for å høre ham at det ikke var plass, ikke engang utenfor døren.",
        am: "ኢየሱስ በቅፍርናሆም በአንድ ቤት ውስጥ ነበረ። ቃሉን ሊሰሙ ብዙ ሰዎች ተሰበሰቡ፤ በደጅ እንኳ ስፍራ አልነበረም።",
      },
      {
        no: "Fire menn kom bærende på en mann som var lam. De kom ikke fram på grunn av folkemengden. Da tok de av taket over Jesus og firte ned sengen som den lamme lå på.",
        am: "አራት ሰዎች አንድ ሽባ ተሸክመው መጡ። ከሕዝቡ ብዛት የተነሣ ወደ እርሱ ማቅረብ አቃታቸው። ስለዚህ ኢየሱስ ያለበትን የቤቱን ጣራ አንሥተው ሽባው የተኛበትን አልጋ አወረዱ።",
      },
      {
        no: "Jesus så troen deres og sa til den lamme: «Sønn, dine synder er tilgitt.» Noen skriftlærde tenkte: «Hvem kan tilgi synder uten Gud alene?»",
        am: "ኢየሱስም እምነታቸውን አይቶ ሽባውን «አንተ ልጅ፥ ኃጢአትህ ተሰረየችልህ» አለው። ከጻፎችም አንዳንዶቹ «ከአንዱ ከእግዚአብሔር በቀር ኃጢአትን ሊያስተሰርይ ማን ይችላል?» ብለው በልባቸው አሰቡ።",
      },
      {
        no: "Jesus visste hva de tenkte. For at de skulle forstå at han har makt til å tilgi synder, sa han til den lamme: «Stå opp, ta sengen din og gå hjem.» Mannen stod opp med en gang og gikk ut foran alle. Alle priste Gud og sa: «Noe slikt har vi aldri sett!»",
        am: "ኢየሱስም ያሰቡትን አወቀ። ኃጢአትን ሊያስተሰርይ ሥልጣን እንዳለው እንዲያውቁ ሽባውን «ተነሣ፥ አልጋህን ተሸከምና ወደ ቤትህ ሂድ» አለው። ሰውየውም ወዲያው ተነሥቶ አልጋውን ተሸክሞ በሁሉ ፊት ወጣ። ሁሉም «እንዲህ ያለ ከቶ አላየንም» ብለው እግዚአብሔርን አከበሩ።",
      },
    ],
    laerdom: {
      no: "Bare Gud kan tilgi synder, og Jesus tilgav synder. Det viser at han er sann Gud og sant menneske. I dag tilgir Gud oss gjennom ንስሐ, botens sakrament. Vennene viser oss også at vi skal bære hverandre fram for Gud i bønn.",
      am: "ኃጢአትን ይቅር የሚል እግዚአብሔር ብቻ ነው፤ ኢየሱስም ኃጢአትን ይቅር አለ። ይህም ፍጹም አምላክና ፍጹም ሰው መሆኑን ያሳያል። ዛሬም እግዚአብሔር በምሥጢረ ንስሐ ኃጢአታችንን ይቅር ይለናል። አራቱ ሰዎችም እርስ በርሳችን በጸሎት ወደ እግዚአብሔር እንድንቀርብ ያስተምሩናል።",
    },
    minnevers: "Mark 2:5",
    sporsmal: [
      {
        sporsmal: { no: "Hvordan kom den lamme fram til Jesus?", am: "ሽባው ወደ ኢየሱስ እንዴት ደረሰ?" },
        svar: { no: "Vennene firte ham ned gjennom taket.", am: "ጓደኞቹ ጣራውን አንሥተው አወረዱት።" },
      },
      {
        sporsmal: { no: "Hva sa Jesus først til ham?", am: "ኢየሱስ መጀመሪያ ምን አለው?" },
        svar: { no: "«Dine synder er tilgitt.»", am: "«ኃጢአትህ ተሰረየችልህ።»" },
      },
    ],
  },
];
