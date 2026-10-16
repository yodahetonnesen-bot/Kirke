import type { Fortelling } from "./typer";

// Fortellinger fra Det nye testamentet, i rekkefølgen fra Jesu liv og Apostlenes gjerninger.
// Gjenfortalt med enkle ord etter den amhariske bibelen og norsk bibel 1930.
//
// Usikkert: ስደተ ማርያም – at kirka minnes flukten særlig i ዘመነ ጽጌ og på ቍስቋም (ኅዳር 6). Prest bør bekrefte.
// Usikkert: ቃና ዘገሊላ feires dagen etter ጥምቀት (ጥር 12). Prest bør bekrefte datoen.
// Usikkert: at fjellet i Matt 17 er Tabor, er kirkas tradisjon (bibelen sier bare «et høyt fjell»).
// Usikkert: skikkene ved ቡሄ (barn som synger, brødet ሙልሙል, fakler/ችቦ) – kan variere fra sted til sted.
// Usikkert: tradisjonen om at hoffmannen (ጃንደረባው) het ባኮስ og forkynte i Etiopia. Prest bør bekrefte.
// Usikkert: skikken med ዘንባባ på ሆሣዕና (knyttes rundt finger/panne) beskrevet forenklet.
// Usikkert: ጾመ ሐዋርያት begynner dagen etter ጰራቅሊጦስ; ዕርገት på 40. dag – bør bekreftes.
// Usikkert: «Kirkefedrene ser Kristus i samaritanen» er skrevet generelt, uten bestemt kilde.
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
  {
    slug: "fem-tusen-blir-mette",
    testament: "nt",
    nr: 11,
    tittel: { no: "Jesus metter fem tusen", am: "ኢየሱስ አምስት ሺህ ሰዎችን መገበ" },
    ref: "John 6:1-14",
    tekst: [
      {
        no: "En stor folkemengde fulgte Jesus, fordi de hadde sett undrene han gjorde for de syke. Jesus gikk opp på et fjell og satte seg der med disiplene. Det var like før påske.",
        am: "በበሽተኞች ያደረገውን ምልክቶች ስላዩ ብዙ ሕዝብ ኢየሱስን ተከተሉት። ኢየሱስም ወደ ተራራ ወጥቶ ከደቀ መዛሙርቱ ጋር ተቀመጠ። የፋሲካ በዓልም ቀርቦ ነበር።",
      },
      {
        no: "Jesus spurte Filip: «Hvor skal vi kjøpe brød så alle disse kan få mat?» Filip svarte at selv brød for to hundre denarer ikke ville være nok.",
        am: "ኢየሱስም ፊልጶስን «እነዚህ እንዲበሉ እንጀራ ከወዴት እንገዛለን?» አለው። ፊልጶስም «የሁለት መቶ ዲናር እንጀራ እንኳ አይበቃቸውም» ብሎ መለሰለት።",
      },
      {
        no: "Andreas sa: «Her er en gutt som har fem byggbrød og to fisker. Men hva er det til så mange?» Jesus sa: «La folket sette seg.» Det var omkring fem tusen menn.",
        am: "የስምዖን ጴጥሮስ ወንድም እንድርያስም «አምስት የገብስ እንጀራና ሁለት ዓሣ የያዘ ብላቴና በዚህ አለ፤ ነገር ግን ለዚህ ሁሉ ሰው ምን ይሆናል?» አለ። ኢየሱስም «ሰዎቹን አስቀምጡ» አለ። ወንዶቹም አምስት ሺህ ያህል ነበሩ።",
      },
      {
        no: "Jesus tok brødene, takket Gud og delte ut. Det samme gjorde han med fiskene. Alle spiste og ble mette. Etterpå samlet disiplene stykkene som var til overs, og fylte tolv kurver.",
        am: "ኢየሱስም እንጀራውን ያዘ፤ አመስግኖም አካፈለ። ከዓሣውም እንዲሁ አደረገ። ሁሉም በልተው ጠገቡ። ከዚያም ደቀ መዛሙርቱ የተረፈውን ቍርስራሽ ሰበሰቡ፤ አሥራ ሁለት መሶብም ሞሉ።",
      },
    ],
    laerdom: {
      no: "Gutten gav det lille han hadde, og Jesus gjorde det til mye. Jesus sa senere: «Jeg er livets brød.» Kirka ser dette undret i lys av ቍርባን, der Jesus gir oss seg selv, sitt legeme og blod, som mat for evig liv.",
      am: "ብላቴናው ያለውን ትንሽ ነገር ሰጠ፤ ኢየሱስም ብዙ አደረገው። ኋላም «የሕይወት እንጀራ እኔ ነኝ» አለ። ቤተ ክርስቲያን ይህን ተአምር ከቅዱስ ቍርባን ጋር ታያይዘዋለች፤ በቍርባን ጌታችን ሥጋውንና ደሙን ለዘላለም ሕይወት ይሰጠናልና።",
    },
    minnevers: "John 6:35",
    sporsmal: [
      {
        sporsmal: { no: "Hva hadde gutten med seg?", am: "ብላቴናው ምን ይዞ ነበር?" },
        svar: { no: "Fem byggbrød og to fisker.", am: "አምስት የገብስ እንጀራና ሁለት ዓሣ።" },
      },
      {
        sporsmal: { no: "Hvor mange kurver ble fylt med det som var til overs?", am: "ከተረፈው ስንት መሶብ ተሞላ?" },
        svar: { no: "Tolv kurver.", am: "አሥራ ሁለት መሶብ።" },
      },
      {
        sporsmal: { no: "Hva gjorde Jesus før han delte ut brødet?", am: "ኢየሱስ እንጀራውን ከማካፈሉ በፊት ምን አደረገ?" },
        svar: { no: "Han takket Gud.", am: "እግዚአብሔርን አመሰገነ።" },
      },
    ],
  },
  {
    slug: "den-barmhjertige-samaritan",
    testament: "nt",
    nr: 12,
    tittel: { no: "Den barmhjertige samaritan", am: "ደጉ ሳምራዊ" },
    ref: "Luke 10:25-37",
    tekst: [
      {
        no: "En lovkyndig spurte Jesus: «Hva skal jeg gjøre for å arve evig liv?» Han svarte selv: «Du skal elske Herren din Gud av hele ditt hjerte, og din neste som deg selv.» «Men hvem er min neste?» spurte han.",
        am: "አንድ ሕግ አዋቂ ኢየሱስን «የዘላለምን ሕይወት እንድወርስ ምን ላድርግ?» ብሎ ጠየቀው። ራሱም «ጌታ አምላክህን በፍጹም ልብህ ውደድ፤ ባልንጀራህንም እንደ ራስህ ውደድ» ብሎ መለሰ። ቀጥሎም «ባልንጀራዬስ ማን ነው?» አለ።",
      },
      {
        no: "Jesus fortalte: En mann gikk fra Jerusalem ned til Jeriko. Røvere overfalt ham, slo ham og lot ham ligge halvdød igjen.",
        am: "ኢየሱስም እንዲህ ብሎ ነገረው፤ አንድ ሰው ከኢየሩሳሌም ወደ ኢያሪኮ ይወርድ ነበር። ወንበዴዎችም ያዙት፤ ገፈፉት፥ ደበደቡትም፤ በሕይወትና በሞት መካከልም ትተውት ሄዱ።",
      },
      {
        no: "En prest kom forbi, så ham og gikk videre. En levitt gjorde det samme. Men en samaritan, som var fremmed, fikk medlidenhet med ham.",
        am: "አንድ ካህን በዚያ መንገድ መጣ፤ አይቶትም ገለል ብሎ አለፈ። አንድ ሌዋዊም እንዲሁ አደረገ። ባዕድ የነበረ አንድ ሳምራዊ ግን አይቶ አዘነለት።",
      },
      {
        no: "Han helte olje og vin på sårene og bandt dem. Han satte mannen på sitt eget esel og tok ham til et herberge. Neste dag betalte han verten og sa: «Pleie ham. Det du bruker mer, skal jeg betale.»",
        am: "ዘይትና የወይን ጠጅ በቍስሎቹ ላይ አፍስሶ አሰረለት። በራሱ አህያ ላይ አስቀምጦ ወደ እንግዶች ማደሪያ ወሰደው። በማግሥቱም ለባለቤቱ ገንዘብ ሰጥቶ «ጠብቀው፤ ከዚህ በላይ የምታወጣውን ስመለስ እከፍልሃለሁ» አለው።",
      },
      {
        no: "Jesus spurte: «Hvem av de tre var en neste for mannen?» «Han som viste barmhjertighet,» svarte den lovkyndige. Da sa Jesus: «Gå du og gjør likeså!»",
        am: "ኢየሱስም «ከሦስቱ ለዚያ ሰው ባልንጀራ የሆነው ማንኛው ይመስልሃል?» አለው። እርሱም «ምሕረት ያደረገለት» አለ። ኢየሱስም «ሂድ፤ አንተም እንዲሁ አድርግ» አለው።",
      },
    ],
    laerdom: {
      no: "Min neste er hvert menneske som trenger hjelp, uansett folk eller tro. Kirkefedrene ser også Kristus selv i samaritanen: Han kom til oss som var såret av synden, og leger oss i kirka.",
      am: "ባልንጀራዬ ዘሩም ሆነ ሃይማኖቱ ምንም ቢሆን እርዳታ የሚያስፈልገው ሰው ሁሉ ነው። አባቶችም በደጉ ሳምራዊ ክርስቶስን ያያሉ፤ እርሱ በኃጢአት ወደ ቈሰልነው ወደ እኛ መጥቶ በቤተ ክርስቲያን ይፈውሰናል።",
    },
    minnevers: "Luke 10:27",
    sporsmal: [
      {
        sporsmal: { no: "Hvem gikk forbi uten å hjelpe?", am: "ሳይረዱ ያለፉት እነማን ናቸው?" },
        svar: { no: "En prest og en levitt.", am: "አንድ ካህንና አንድ ሌዋዊ።" },
      },
      {
        sporsmal: { no: "Hva gjorde samaritanen?", am: "ሳምራዊው ምን አደረገ?" },
        svar: {
          no: "Han stelte sårene, tok mannen til et herberge og betalte for ham.",
          am: "ቍስሉን አሰረለት፤ ወደ እንግዶች ማደሪያ ወስዶ ከፈለለት።",
        },
      },
      {
        sporsmal: { no: "Hva sa Jesus at vi skal gjøre?", am: "ኢየሱስ ምን እንድናደርግ አዘዘ?" },
        svar: { no: "«Gå du og gjør likeså!»", am: "«ሂድ፤ አንተም እንዲሁ አድርግ።»" },
      },
    ],
  },
  {
    slug: "den-bortkomne-sonnen",
    testament: "nt",
    nr: 13,
    tittel: { no: "Den bortkomne sønnen", am: "የጠፋው ልጅ" },
    ref: "Luke 15:11-32",
    tekst: [
      {
        no: "Jesus fortalte: En mann hadde to sønner. Den yngste sa: «Far, gi meg min del av arven.» Så reiste han til et land langt borte og sløste bort alle pengene.",
        am: "ኢየሱስ እንዲህ አለ፤ አንድ ሰው ሁለት ልጆች ነበሩት። ታናሹም «አባቴ ሆይ፥ ከገንዘብህ የሚደርሰኝን ስጠኝ» አለው። ከዚያም ወደ ሩቅ አገር ሄዶ ገንዘቡን ሁሉ አባከነ።",
      },
      {
        no: "Det ble hungersnød i landet. Han fikk jobb med å gjete griser, og han ønsket at han kunne spise av grisematen. Ingen gav ham noe.",
        am: "በዚያች አገር ጽኑ ራብ ሆነ። እሪያዎችን ሊያሰማራ ተቀጠረ፤ እሪያዎቹ ከሚበሉት ሊጠግብ ይመኝ ነበር፤ የሚሰጠውም አልነበረም።",
      },
      {
        no: "Da kom han til seg selv og tenkte: «Leiefolkene hjemme hos far har mat nok. Jeg vil gå til far og si: Jeg har syndet mot himmelen og mot deg. Jeg er ikke verd å kalles din sønn.»",
        am: "ወደ ልቡም ተመልሶ እንዲህ አለ፤ «የአባቴ ሞያተኞች እንጀራ ይተርፋቸዋል። ተነሥቼ ወደ አባቴ እሄዳለሁ፤ ‹አባቴ ሆይ፥ በሰማይና በፊትህ በደልሁ፤ ልጅህ ልባል አይገባኝም› እለዋለሁ።»",
      },
      {
        no: "Mens han ennå var langt borte, fikk faren se ham. Han fikk inderlig medlidenhet, løp mot ham, falt ham om halsen og kysset ham. Faren gav ham de beste klærne, en ring og sko, og holdt fest: «Denne sønnen min var død og er blitt levende igjen. Han var tapt og er funnet!»",
        am: "ገና ሩቅ ሳለ አባቱ አየውና አዘነለት፤ ሮጦም አንገቱን አቅፎ ሳመው። ከሁሉ የተሻለ ልብስ፣ ቀለበትና ጫማ እንዲሰጡት አዘዘ፤ ግብዣም አደረገ። «ይህ ልጄ ሞቶ ነበር፤ ሕያው ሆኖአል። ጠፍቶም ነበር፤ ተገኝቶአል» አለ።",
      },
      {
        no: "Den eldste sønnen ble sint og ville ikke gå inn. Men faren gikk ut og sa: «Barnet mitt, du er alltid hos meg, og alt mitt er ditt. Men vi måtte glede oss, for broren din var tapt og er funnet.»",
        am: "ታላቁ ልጅ ግን ተቈጣ፤ ሊገባም አልወደደም። አባቱም ወጥቶ «ልጄ ሆይ፥ አንተ ሁልጊዜ ከእኔ ጋር ነህ፤ የእኔም ሁሉ የአንተ ነው። ነገር ግን ይህ ወንድምህ ጠፍቶ ስለ ተገኘ ደስ ሊለን ይገባል» አለው።",
      },
    ],
    laerdom: {
      no: "Faren i fortellingen er Gud, som venter på oss med åpne armer når vi angrer. Slik er ንስሐ: Vi vender om, bekjenner syndene våre for skriftefaren (ንስሐ አባት) og får tilgivelse og glede.",
      am: "በምሳሌው ያለው አባት እግዚአብሔር ነው፤ በንስሐ ስንመለስ በፍቅር ይቀበለናል። ንስሐም ይህ ነው፤ ተመልሰን ኃጢአታችንን ለንስሐ አባታችን እንናዘዛለን፤ ይቅርታንና ደስታንም እናገኛለን።",
    },
    minnevers: "Luke 15:24",
    sporsmal: [
      {
        sporsmal: { no: "Hva gjorde den yngste sønnen med pengene?", am: "ታናሹ ልጅ ገንዘቡን ምን አደረገው?" },
        svar: { no: "Han sløste dem bort i et land langt borte.", am: "በሩቅ አገር አባከነው።" },
      },
      {
        sporsmal: { no: "Hva gjorde faren da han så sønnen komme?", am: "አባቱ ልጁ ሲመጣ ባየው ጊዜ ምን አደረገ?" },
        svar: { no: "Han løp mot ham, klemte og kysset ham.", am: "ሮጦ አቀፈው፤ ሳመውም።" },
      },
      {
        sporsmal: { no: "Hvem er faren et bilde på?", am: "አባቱ የማን ምሳሌ ነው?" },
        svar: { no: "Gud, som tar imot oss når vi angrer.", am: "በንስሐ ስንመለስ የሚቀበለን የእግዚአብሔር።" },
      },
    ],
  },
  {
    slug: "jesus-velsigner-barna",
    testament: "nt",
    nr: 14,
    tittel: { no: "Jesus velsigner barna", am: "ኢየሱስ ሕፃናትን ባረከ" },
    ref: "Mark 10:13-16",
    tekst: [
      {
        no: "Noen kom med små barn til Jesus, for at han skulle røre ved dem. Men disiplene ble strenge mot dem som kom med barna.",
        am: "እንዲዳስሳቸው ሕፃናትን ወደ ኢየሱስ አመጡ። ደቀ መዛሙርቱ ግን ያመጡአቸውን ገሠጹአቸው።",
      },
      {
        no: "Da Jesus så det, ble han sint og sa: «La de små barna komme til meg, og hindre dem ikke! For Guds rike tilhører slike som dem.»",
        am: "ኢየሱስ ግን አይቶ ተቈጣና «ሕፃናትን ወደ እኔ ይመጡ ዘንድ ተዉ፤ አትከልክሉአቸው፤ የእግዚአብሔር መንግሥት እንደነዚህ ላሉት ናትና» አላቸው።",
      },
      {
        no: "«Den som ikke tar imot Guds rike slik et barn gjør, kommer aldri inn i det.» Så tok han barna i armene sine, la hendene på dem og velsignet dem.",
        am: "«የእግዚአብሔርን መንግሥት እንደ ሕፃን የማይቀበላት ሁሉ ከቶ አይገባባትም» አለ። ሕፃናቱንም አቀፋቸው፤ እጁንም ጭኖ ባረካቸው።",
      },
    ],
    laerdom: {
      no: "Jesus vil at barn skal komme til ham. Derfor døper kirka små barn, gutter på den 40. dagen og jenter på den 80. dagen, og gir dem ቍርባን. Gud vil at vi skal tro på ham med et enkelt og tillitsfullt hjerte, slik et barn gjør.",
      am: "ጌታችን ሕፃናት ወደ እርሱ እንዲመጡ ይፈልጋል። ስለዚህ ቤተ ክርስቲያን ወንዶችን በአርባ ቀን፣ ሴቶችን በሰማንያ ቀን ታጠምቃለች፤ ቍርባንም ታቀብላቸዋለች። እግዚአብሔር እንደ ሕፃን በየዋህና በሚታመን ልብ እንድናምንበት ይወዳል።",
    },
    minnevers: "Mark 10:14",
    sporsmal: [
      {
        sporsmal: { no: "Hvorfor ble Jesus sint på disiplene?", am: "ኢየሱስ ደቀ መዛሙርቱን ለምን ተቈጣ?" },
        svar: { no: "Fordi de prøvde å hindre barna i å komme til ham.", am: "ሕፃናቱ ወደ እርሱ እንዳይመጡ ስለ ከለከሉ።" },
      },
      {
        sporsmal: { no: "Hva gjorde Jesus med barna?", am: "ኢየሱስ ሕፃናቱን ምን አደረጋቸው?" },
        svar: { no: "Han tok dem i armene og velsignet dem.", am: "አቀፋቸው፤ እጁንም ጭኖ ባረካቸው።" },
      },
    ],
  },
  {
    slug: "sakkeus",
    testament: "nt",
    nr: 15,
    tittel: { no: "Sakkeus i treet", am: "ዘኬዎስ በሾላ ዛፍ ላይ" },
    ref: "Luke 19:1-10",
    tekst: [
      {
        no: "Jesus gikk gjennom Jeriko. Der bodde Sakkeus, som var overtoller og rik. Han ville gjerne se Jesus, men han var liten av vekst og kom ikke fram for folkemengden.",
        am: "ኢየሱስ በኢያሪኮ ያልፍ ነበር። በዚያም የቀራጮች አለቃና ባለ ጠጋ የሆነ ዘኬዎስ የሚባል ሰው ነበረ። ኢየሱስን ሊያይ ፈለገ፤ ነገር ግን ቁመቱ አጭር ስለ ነበረ ከሕዝቡ ብዛት የተነሣ አቃተው።",
      },
      {
        no: "Han løp i forveien og klatret opp i et morbærfikentre. Da Jesus kom dit, så han opp og sa: «Sakkeus, skynd deg og kom ned! I dag må jeg være i ditt hus.»",
        am: "ስለዚህ ወደ ፊት ሮጦ በሾላ ዛፍ ላይ ወጣ። ኢየሱስም ወደዚያ ስፍራ በደረሰ ጊዜ ቀና ብሎ አየና «ዘኬዎስ ሆይ፥ ዛሬ በቤትህ እውል ዘንድ ይገባኛልና ፈጥነህ ውረድ» አለው።",
      },
      {
        no: "Sakkeus skyndte seg ned og tok glad imot ham. Men folk murret: «Han har gått inn til en syndig mann!»",
        am: "ዘኬዎስም ፈጥኖ ወረደ፤ በደስታም ተቀበለው። ሰዎቹ ግን «ከኃጢአተኛ ሰው ጋር ሊውል ገባ» ብለው አንጐራጐሩ።",
      },
      {
        no: "Sakkeus stod fram og sa: «Herre, halvparten av det jeg eier, gir jeg til de fattige. Har jeg lurt noen, gir jeg dem fire ganger så mye tilbake.» Jesus sa: «I dag er frelse kommet til dette huset. For Menneskesønnen er kommet for å lete etter og frelse det som var tapt.»",
        am: "ዘኬዎስም ቆሞ «ጌታ ሆይ፥ ካለኝ ሁሉ እኵሌታውን ለድሆች እሰጣለሁ፤ ማንንም በሐሰት ከስሼ እንደ ሆነ አራት እጥፍ እመልሳለሁ» አለ። ኢየሱስም «ዛሬ ለዚህ ቤት መዳን ሆኖለታል፤ የሰው ልጅ የጠፋውን ሊፈልግና ሊያድን መጥቶአልና» አለው።",
      },
    ],
    laerdom: {
      no: "Ekte ንስሐ forandrer livet. Sakkeus angret ikke bare med ord, men gav til de fattige og gjorde opp for det gale han hadde gjort. Jesus leter etter hver og en av oss, uansett hva vi har gjort.",
      am: "እውነተኛ ንስሐ ሕይወትን ይለውጣል። ዘኬዎስ በቃል ብቻ አልተጸጸተም፤ ለድሆች ሰጠ፤ የበደለውንም መለሰ። ጌታችን ምንም ብናደርግ እያንዳንዳችንን ይፈልገናል።",
    },
    minnevers: "Luke 19:10",
    sporsmal: [
      {
        sporsmal: { no: "Hvorfor klatret Sakkeus opp i treet?", am: "ዘኬዎስ ለምን ዛፍ ላይ ወጣ?" },
        svar: { no: "Han var liten og ville se Jesus.", am: "ቁመቱ አጭር ስለ ነበረ ኢየሱስን ለማየት።" },
      },
      {
        sporsmal: { no: "Hva lovte Sakkeus?", am: "ዘኬዎስ ምን ቃል ገባ?" },
        svar: {
          no: "Å gi halvparten til de fattige og betale tilbake fire ganger så mye til dem han hadde lurt.",
          am: "ካለው እኵሌታውን ለድሆች ሊሰጥ፣ የበደላቸውንም አራት እጥፍ ሊመልስ።",
        },
      },
    ],
  },
  {
    slug: "forklarelsen",
    testament: "nt",
    nr: 16,
    tittel: { no: "Jesus blir forklaret på fjellet", am: "ደብረ ታቦር፤ የጌታችን መገለጥ" },
    ref: "Matt 17:1-9",
    bilde: "forklarelsen",
    tekst: [
      {
        no: "Jesus tok med seg Peter, Jakob og Johannes, broren hans, og gikk opp på et høyt fjell, der de var alene.",
        am: "ኢየሱስ ጴጥሮስን፣ ያዕቆብንና ወንድሙን ዮሐንስን ይዞ ወደ ረጅም ተራራ ብቻቸውን አወጣቸው።",
      },
      {
        no: "Der ble han forvandlet for øynene deres. Ansiktet hans lyste som solen, og klærne ble hvite som lyset. Moses og Elia viste seg og talte med ham.",
        am: "በፊታቸውም ተለወጠ፤ ፊቱ እንደ ፀሐይ በራ፥ ልብሱም እንደ ብርሃን ነጭ ሆነ። ሙሴና ኤልያስም ታዩአቸው፤ ከእርሱም ጋር ይነጋገሩ ነበር።",
      },
      {
        no: "Peter sa: «Herre, det er godt for oss å være her! Vil du, så skal jeg lage tre hytter, en til deg, en til Moses og en til Elia.»",
        am: "ጴጥሮስም «ጌታ ሆይ፥ በዚህ መሆን ለእኛ መልካም ነው፤ ብትወድስ አንዱን ለአንተ፣ አንዱን ለሙሴ፣ አንዱን ለኤልያስ ሦስት ዳስ እንሥራ» አለ።",
      },
      {
        no: "Mens han ennå talte, kom en lysende sky over dem, og en røst sa: «Dette er min Sønn, den elskede, som jeg har velbehag i. Hør ham!» Disiplene falt redde ned. Men Jesus rørte ved dem og sa: «Stå opp, vær ikke redde.»",
        am: "ገና ሲናገርም ብሩህ ደመና ጋረዳቸው፤ ከደመናውም «በእርሱ ደስ የሚለኝ የምወደው ልጄ ይህ ነው፤ እርሱን ስሙት» የሚል ድምፅ መጣ። ደቀ መዛሙርቱም ፈርተው በፊታቸው ወደቁ። ኢየሱስም ቀርቦ ዳሰሳቸውና «ተነሡ፤ አትፍሩ» አላቸው።",
      },
    ],
    laerdom: {
      no: "På fjellet viste Jesus disiplene litt av sin guddommelige herlighet. Kirka kaller fjellet Tabor og feirer ደብረ ታቦር den 13. ነሐሴ. Da går barna rundt og synger ቡሄ-sanger, og man tenner fakler som et minne om lyset.",
      am: "ጌታችን በተራራው ላይ የመለኮቱን ክብር ለደቀ መዛሙርቱ ገለጠላቸው። ቤተ ክርስቲያን ተራራውን ደብረ ታቦር ትለዋለች፤ በዓሉንም በነሐሴ 13 ታከብራለች። በዚያም ልጆች የቡሄ መዝሙር እየዘመሩ ይዞራሉ፤ የብርሃኑንም መታሰቢያ ለማድረግ ችቦ ይበራል።",
    },
    minnevers: "Matt 17:5",
    sporsmal: [
      {
        sporsmal: { no: "Hvilke tre disipler var med Jesus på fjellet?", am: "ከኢየሱስ ጋር ወደ ተራራው የወጡት ሦስቱ ደቀ መዛሙርት እነማን ናቸው?" },
        svar: { no: "Peter, Jakob og Johannes.", am: "ጴጥሮስ፣ ያዕቆብና ዮሐንስ።" },
      },
      {
        sporsmal: { no: "Hvem viste seg og talte med Jesus?", am: "ከኢየሱስ ጋር የተነጋገሩት እነማን ናቸው?" },
        svar: { no: "Moses og Elia.", am: "ሙሴና ኤልያስ።" },
      },
      {
        sporsmal: { no: "Hva heter høytiden som minnes dette?", am: "ይህን የምናስብበት በዓል ማን ይባላል?" },
        svar: { no: "ደብረ ታቦር, også kalt ቡሄ.", am: "ደብረ ታቦር፤ ቡሄም ይባላል።" },
      },
    ],
  },
  {
    slug: "lasarus",
    testament: "nt",
    nr: 17,
    tittel: { no: "Jesus vekker Lasarus opp fra de døde", am: "ኢየሱስ አልዓዛርን ከሞት አስነሣው" },
    ref: "John 11:1-44",
    tekst: [
      {
        no: "I landsbyen Betania bodde Lasarus og søstrene hans, Marta og Maria. Jesus var glad i dem. En dag ble Lasarus syk, og søstrene sendte bud til Jesus: «Herre, han som du har kjær, er syk.»",
        am: "በቢታንያ መንደር አልዓዛርና እኅቶቹ ማርታና ማርያም ይኖሩ ነበር። ኢየሱስም ይወዳቸው ነበር። አንድ ቀን አልዓዛር ታመመ፤ እኅቶቹም «ጌታ ሆይ፥ እነሆ የምትወደው ታሞአል» ብለው ወደ ኢየሱስ ላኩ።",
      },
      {
        no: "Da Jesus kom, hadde Lasarus allerede ligget fire dager i graven. Marta sa: «Herre, hadde du vært her, var ikke min bror død.» Jesus sa: «Jeg er oppstandelsen og livet. Den som tror på meg, skal leve om han enn dør.» Marta svarte: «Ja, Herre, jeg tror at du er Kristus, Guds Sønn.»",
        am: "ኢየሱስ በመጣ ጊዜ አልዓዛር በመቃብር አራት ቀን ሆኖት ነበር። ማርታም «ጌታ ሆይ፥ አንተ በዚህ ኖረህ ብትሆን ወንድሜ ባልሞተም ነበር» አለችው። ኢየሱስም «ትንሣኤና ሕይወት እኔ ነኝ፤ የሚያምንብኝ ቢሞት እንኳ ሕያው ይሆናል» አላት። እርስዋም «አዎን ጌታ ሆይ፤ አንተ የእግዚአብሔር ልጅ ክርስቶስ እንደ ሆንህ አምናለሁ» አለች።",
      },
      {
        no: "Maria kom også og falt gråtende ned for føttene hans. Da Jesus så henne og de andre gråte, ble han dypt rørt. «Hvor har dere lagt ham?» spurte han. Og Jesus gråt.",
        am: "ማርያምም መጥታ እያለቀሰች በእግሩ ላይ ወደቀች። ኢየሱስም እርስዋና ሌሎቹ ሲያለቅሱ አይቶ በመንፈሱ አዘነ። «ወዴት አኖራችሁት?» አለ። ኢየሱስም እንባውን አፈሰሰ።",
      },
      {
        no: "Graven var en hule med en stein foran. «Ta bort steinen,» sa Jesus. Så bad han til Faderen og ropte med høy røst: «Lasarus, kom ut!» Og den døde kom ut, med hender og føtter bundet i liksvøp. «Løs ham og la ham gå,» sa Jesus. Mange trodde på ham.",
        am: "መቃብሩም ዋሻ ነበረ፤ ድንጋይም ተገጥሞበት ነበር። ኢየሱስም «ድንጋዩን አንሡ» አለ። ወደ አብም ጸለየ፤ በታላቅ ድምፅም «አልዓዛር ሆይ፥ ወደ ውጭ ና» ብሎ ጮኸ። የሞተውም እጆቹና እግሮቹ በመግነዝ እንደ ተገነዙ ወጣ። ኢየሱስም «ፍቱትና ይሂድ» አለ። ብዙዎችም በእርሱ አመኑ።",
      },
    ],
    laerdom: {
      no: "Jesus gråt som et sant menneske, og han vekket den døde med sitt ord som sann Gud. Dette er Tewahedo-troen: Én Kristus, sann Gud og sant menneske, forent uten blanding og uten deling. Han lover at alle som tror på ham, skal stå opp.",
      am: "ጌታችን እንደ ፍጹም ሰው እንባውን አፈሰሰ፤ እንደ ፍጹም አምላክም የሞተውን በቃሉ አስነሣ። ይህ የተዋሕዶ ሃይማኖት ነው፤ ክርስቶስ አንድ ነው፤ ያለ መቀላቀልና ያለ መለያየት ፍጹም አምላክና ፍጹም ሰው ነው። በእርሱ የሚያምኑ ሁሉ እንደሚነሡም ተስፋ ሰጥቶናል።",
    },
    minnevers: "John 11:25",
    sporsmal: [
      {
        sporsmal: { no: "Hvor lenge hadde Lasarus ligget i graven?", am: "አልዓዛር በመቃብር ስንት ቀን ቆየ?" },
        svar: { no: "Fire dager.", am: "አራት ቀን።" },
      },
      {
        sporsmal: { no: "Hva sa Jesus til Marta om seg selv?", am: "ኢየሱስ ስለ ራሱ ለማርታ ምን አላት?" },
        svar: { no: "«Jeg er oppstandelsen og livet.»", am: "«ትንሣኤና ሕይወት እኔ ነኝ።»" },
      },
      {
        sporsmal: { no: "Hva viser det at Jesus både gråt og vekket Lasarus?", am: "ጌታችን ማልቀሱና አልዓዛርን ማስነሣቱ ምን ያሳያል?" },
        svar: {
          no: "At han er sant menneske og sann Gud på samme tid.",
          am: "ፍጹም ሰውና ፍጹም አምላክ መሆኑን።",
        },
      },
    ],
  },
  {
    slug: "inntoget-i-jerusalem",
    testament: "nt",
    nr: 18,
    tittel: { no: "Jesus rir inn i Jerusalem", am: "ሆሣዕና፤ ጌታችን ወደ ኢየሩሳሌም ገባ" },
    ref: "Matt 21:1-11",
    bilde: "inntoget",
    tekst: [
      {
        no: "Da Jesus og disiplene nærmet seg Jerusalem og kom til Betfage ved Oljeberget, sendte han to disipler av sted: «Gå inn i landsbyen. Der finner dere et esel og et fole. Løs dem og før dem til meg.»",
        am: "ወደ ኢየሩሳሌም ቀርበው በደብረ ዘይት ወዳለችው ወደ ቤተ ፋጌ በደረሱ ጊዜ ኢየሱስ ሁለት ደቀ መዛሙርትን ላከ። «ወደ መንደሩ ሂዱ፤ የታሰረች አህያና ውርንጫዋን ታገኛላችሁ፤ ፈትታችሁ አምጡልኝ» አላቸው።",
      },
      {
        no: "Slik gikk det i oppfyllelse som profeten hadde sagt: «Se, din konge kommer til deg, saktmodig, ridende på et esel.» Disiplene la klærne sine på dyrene, og Jesus satte seg på dem.",
        am: "ይህም «እነሆ፥ ንጉሥሽ የዋህ ሆኖ በአህያ ላይ ተቀምጦ ወደ አንቺ ይመጣል» ተብሎ በነቢይ የተነገረው እንዲፈጸም ሆነ። ደቀ መዛሙርቱም ልብሳቸውን በእነርሱ ላይ ጫኑ፤ ኢየሱስም ተቀመጠባቸው።",
      },
      {
        no: "Mange bredte klærne sine ut på veien. Andre skar grener av trærne og strødde dem på veien. Folket ropte: «Hosianna, Davids sønn! Velsignet være han som kommer i Herrens navn! Hosianna i det høyeste!»",
        am: "ከሕዝቡም ብዙዎች ልብሳቸውን በመንገድ ላይ አነጠፉ። ሌሎችም የዛፍ ቅርንጫፍ እየቈረጡ በመንገድ ላይ አነጠፉ። ሕዝቡም «ሆሣዕና ለዳዊት ልጅ፤ በጌታ ስም የሚመጣ የተባረከ ነው፤ ሆሣዕና በአርያም» እያሉ ይጮኹ ነበር።",
      },
      {
        no: "Da han kom inn i Jerusalem, kom hele byen i bevegelse. «Hvem er dette?» spurte de. Folket svarte: «Det er profeten Jesus fra Nasaret i Galilea.»",
        am: "ወደ ኢየሩሳሌምም በገባ ጊዜ መላው ከተማ «ይህ ማን ነው?» ብሎ ተናወጠ። ሕዝቡም «ይህ ከገሊላ ናዝሬት የመጣ ነቢዩ ኢየሱስ ነው» አሉ።",
      },
    ],
    laerdom: {
      no: "Kirka feirer ሆሣዕና den siste søndagen i den store fasten. Da får vi palmeblader (ዘንባባ) og knytter dem gjerne rundt fingeren eller pannen. Uken etter kalles ሕማማት, lidelsesuken, der vi minnes Jesu lidelse.",
      am: "ቤተ ክርስቲያን የሆሣዕናን በዓል በዐቢይ ጾም የመጨረሻ እሑድ ታከብራለች። በዚያ ቀን ዘንባባ እንቀበላለን፤ በጣታችን ወይም በራሳችን ላይ እናስረዋለን። ቀጣዩ ሳምንት ሰሙነ ሕማማት ይባላል፤ የጌታችንን መከራ እናስብበታለን።",
    },
    minnevers: "Matt 21:9",
    sporsmal: [
      {
        sporsmal: { no: "Hva red Jesus på?", am: "ኢየሱስ በምን ላይ ተቀምጦ ገባ?" },
        svar: { no: "Et esel.", am: "በአህያ።" },
      },
      {
        sporsmal: { no: "Hva ropte folket?", am: "ሕዝቡ ምን እያሉ ጮኹ?" },
        svar: { no: "«Hosianna, Davids sønn!»", am: "«ሆሣዕና ለዳዊት ልጅ!»" },
      },
      {
        sporsmal: { no: "Hva heter uken etter ሆሣዕና?", am: "ከሆሣዕና በኋላ ያለው ሳምንት ማን ይባላል?" },
        svar: { no: "ሕማማት, lidelsesuken.", am: "ሰሙነ ሕማማት።" },
      },
    ],
  },
  {
    slug: "nattverden",
    testament: "nt",
    nr: 19,
    tittel: { no: "Det siste måltidet", am: "የመጨረሻው እራት" },
    ref: "Luke 22:7-20",
    tekst: [
      {
        no: "Det var tid for påskemåltidet. Jesus sendte Peter og Johannes for å gjøre i stand. «Når dere kommer inn i byen, møter dere en mann som bærer en vannkrukke. Følg ham. Han vil vise dere en stor sal ovenpå.»",
        am: "የፋሲካ በዓል ደረሰ። ኢየሱስም ጴጥሮስንና ዮሐንስን «ሄዳችሁ ፋሲካን አዘጋጁልን» ብሎ ላካቸው። «ወደ ከተማ ስትገቡ ማድጋ ውኃ የተሸከመ ሰው ታገኛላችሁ፤ ተከተሉት። በደርብ ላይ ያለውን ታላቅ አዳራሽ ያሳያችኋል» አላቸው።",
      },
      {
        no: "De fant alt slik Jesus hadde sagt. Om kvelden satte Jesus seg til bords med de tolv apostlene. Han sa: «Jeg har lengtet etter å spise dette påskemåltidet med dere før jeg skal lide.»",
        am: "ሄደውም እንዳላቸው አገኙ። ሰዓቱም በደረሰ ጊዜ ከአሥራ ሁለቱ ሐዋርያት ጋር በማዕድ ተቀመጠ። «ከመከራዬ በፊት ከእናንተ ጋር ይህን ፋሲካ ልበላ እጅግ እመኝ ነበር» አላቸው።",
      },
      {
        no: "Han tok et brød, takket, brøt det og gav dem og sa: «Dette er mitt legeme, som gis for dere. Gjør dette til minne om meg.»",
        am: "እንጀራንም አንሥቶ አመሰገነ፤ ቈርሶም ሰጣቸውና «ስለ እናንተ የሚሰጠው ሥጋዬ ይህ ነው፤ ይህን ለመታሰቢያዬ አድርጉት» አለ።",
      },
      {
        no: "Etter måltidet tok han begeret og sa: «Dette begeret er den nye pakt i mitt blod, som blir utøst for dere.»",
        am: "እንዲሁም ከእራት በኋላ ጽዋውን አንሥቶ «ይህ ጽዋ ስለ እናንተ በሚፈሰው በደሜ የሚሆን አዲስ ኪዳን ነው» አለ።",
      },
    ],
    laerdom: {
      no: "Denne kvelden innstiftet Jesus det hellige ቍርባን. Kirka lærer at brødet og vinen i ቅዳሴ virkelig blir Kristi legeme og blod (ሥጋውና ደሙ). Vi minnes kvelden på ጸሎተ ሐሙስ, skjærtorsdag, da Jesus også vasket disiplenes føtter.",
      am: "በዚያች ሌሊት ጌታችን ቅዱስ ቍርባንን መሠረተ። ቤተ ክርስቲያን በቅዳሴ የሚቀርበው ኅብስትና ወይን በእውነት የክርስቶስ ሥጋውና ደሙ እንደሚሆን ታስተምራለች። ይህችን ሌሊት በጸሎተ ሐሙስ እናስባታለን፤ በዚያች ዕለት ጌታችን የደቀ መዛሙርቱን እግር አጥቦአል።",
    },
    minnevers: "Luke 22:19",
    sporsmal: [
      {
        sporsmal: { no: "Hvem gjorde i stand påskemåltidet?", am: "ፋሲካውን ያዘጋጁት እነማን ናቸው?" },
        svar: { no: "Peter og Johannes.", am: "ጴጥሮስና ዮሐንስ።" },
      },
      {
        sporsmal: { no: "Hva sa Jesus om brødet?", am: "ኢየሱስ ስለ እንጀራው ምን አለ?" },
        svar: { no: "«Dette er mitt legeme, som gis for dere.»", am: "«ስለ እናንተ የሚሰጠው ሥጋዬ ይህ ነው።»" },
      },
      {
        sporsmal: { no: "Hvilket sakrament innstiftet Jesus denne kvelden?", am: "ጌታችን በዚያች ሌሊት የትኛውን ምሥጢር መሠረተ?" },
        svar: { no: "ቍርባን, nattverden.", am: "ምሥጢረ ቍርባንን።" },
      },
    ],
  },
  {
    slug: "korsfestelsen",
    testament: "nt",
    nr: 20,
    tittel: { no: "Jesus blir korsfestet", am: "የጌታችን ስቅለት" },
    ref: "John 19:17-30",
    bilde: "korsfestelsen",
    tekst: [
      {
        no: "Jesus bar selv korset sitt ut til et sted som heter Golgata, Hodeskallestedet. Der korsfestet de ham, og sammen med ham to andre, én på hver side.",
        am: "ኢየሱስ መስቀሉን ተሸክሞ በዕብራይስጥ ጎልጎታ ወደ ተባለው የራስ ቅል ስፍራ ወጣ። በዚያም ሰቀሉት፤ ከእርሱም ጋር ሌሎች ሁለት ሰዎችን አንዱን በቀኝ አንዱን በግራ ሰቀሉ።",
      },
      {
        no: "Pilatus satte et skilt på korset: «Jesus fra Nasaret, jødenes konge.» Det var skrevet på hebraisk, latin og gresk. Soldatene delte klærne hans og kastet lodd om kjortelen.",
        am: "ጲላጦስም «የአይሁድ ንጉሥ የናዝሬቱ ኢየሱስ» የሚል ጽሕፈት በመስቀሉ ላይ አኖረ። በዕብራይስጥ፣ በሮማይስጥና በግሪክ ተጽፎ ነበር። ጭፍሮችም ልብሶቹን ተከፋፈሉ፤ በእጀ ጠባቡም ዕጣ ተጣጣሉ።",
      },
      {
        no: "Ved korset stod Maria, Jesu mor, og noen andre kvinner, og disippelen som Jesus elsket. Jesus sa til moren: «Kvinne, se, det er din sønn.» Og til disippelen sa han: «Se, det er din mor.» Fra den stunden tok disippelen henne hjem til seg.",
        am: "በመስቀሉ አጠገብ እናቱ ማርያምና ሌሎች ሴቶች፣ ይወደው የነበረውም ደቀ መዝሙር ቆመው ነበር። ኢየሱስም እናቱን «አንቺ ሴት፥ እነሆ ልጅሽ» አላት። ደቀ መዝሙሩንም «እናትህ እነኋት» አለው። ከዚያ ሰዓት ጀምሮ ደቀ መዝሙሩ ወደ ቤቱ ወሰዳት።",
      },
      {
        no: "Jesus sa: «Jeg tørster.» De gav ham eddik på en svamp. Da han hadde fått eddiken, sa han: «Det er fullbrakt.» Så bøyde han hodet og gav fra seg ånden.",
        am: "ኢየሱስም «ተጠማሁ» አለ። ሆምጣጤም በሰፍነግ አቀረቡለት። ሆምጣጤውንም ከተቀበለ በኋላ «ተፈጸመ» አለ፤ ራሱንም አዘንብሎ ነፍሱን አሳልፎ ሰጠ።",
      },
    ],
    laerdom: {
      no: "Han som led og døde på korset, er Guds Sønn som ble menneske. Han led i sin menneskelige kropp for å frelse oss fra synd og død. Kirka minnes dette på ስቅለት, langfredag. Johannes fikk Maria som mor, og kirka lærer at hun er mor for alle som tror.",
      am: "በመስቀል ላይ የተሰቀለውና የሞተው ሰው የሆነው የእግዚአብሔር ልጅ ነው። ከኃጢአትና ከሞት ሊያድነን በሥጋው መከራ ተቀበለ። ቤተ ክርስቲያን ይህን በዕለተ ስቅለት ታስባለች። ዮሐንስ ማርያምን እናት አድርጎ ተቀበለ፤ ቤተ ክርስቲያንም እርስዋ የምእመናን ሁሉ እናት እንደ ሆነች ታስተምራለች።",
    },
    minnevers: "John 19:30",
    sporsmal: [
      {
        sporsmal: { no: "Hva het stedet der Jesus ble korsfestet?", am: "ኢየሱስ የተሰቀለበት ስፍራ ማን ይባላል?" },
        svar: { no: "Golgata.", am: "ጎልጎታ።" },
      },
      {
        sporsmal: { no: "Hvem gav Jesus omsorgen for moren sin?", am: "ኢየሱስ እናቱን ለማን ሰጠ?" },
        svar: { no: "Disippelen han elsket, Johannes.", am: "ይወደው ለነበረው ደቀ መዝሙር ለዮሐንስ።" },
      },
      {
        sporsmal: { no: "Hva var noe av det siste Jesus sa?", am: "ኢየሱስ በመጨረሻ ከተናገራቸው ቃላት አንዱ ምንድን ነው?" },
        svar: { no: "«Det er fullbrakt.»", am: "«ተፈጸመ።»" },
      },
    ],
  },
  {
    slug: "oppstandelsen",
    testament: "nt",
    nr: 21,
    tittel: { no: "Jesus står opp fra de døde", am: "የጌታችን ትንሣኤ" },
    ref: "Matt 28:1-10",
    bilde: "graven",
    tekst: [
      {
        no: "Tidlig om morgenen den første dagen i uken gikk Maria Magdalena og den andre Maria for å se til graven.",
        am: "ሰንበት ካለፈ በኋላ በሳምንቱ የመጀመሪያ ቀን ሲነጋ መግደላዊት ማርያምና ሁለተኛይቱ ማርያም መቃብሩን ሊያዩ መጡ።",
      },
      {
        no: "Plutselig ble det et stort jordskjelv. En Herrens engel kom ned fra himmelen, veltet steinen bort og satte seg på den. Han lyste som et lyn, og klærne var hvite som snø. Vaktene skalv av redsel.",
        am: "ድንገት ታላቅ የምድር መናወጥ ሆነ፤ የጌታ መልአክ ከሰማይ ወርዶ ድንጋዩን አንከባሎ በላዩ ተቀመጠ። መልኩ እንደ መብረቅ፥ ልብሱም እንደ በረዶ ነጭ ነበረ። ጠባቂዎቹም ከፍርሃት የተነሣ ተንቀጠቀጡ።",
      },
      {
        no: "Engelen sa til kvinnene: «Vær ikke redde! Dere leter etter Jesus som ble korsfestet. Han er ikke her. Han er stått opp, slik han sa. Gå raskt og fortell det til disiplene!»",
        am: "መልአኩም ሴቶቹን «አትፍሩ፤ የተሰቀለውን ኢየሱስን እንደምትፈልጉ አውቃለሁ። እንደ ተናገረ ተነሥቶአልና በዚህ የለም። ፈጥናችሁ ሄዳችሁ ለደቀ መዛሙርቱ ንገሩ» አላቸው።",
      },
      {
        no: "Kvinnene løp av sted, redde og samtidig fulle av glede. Da møtte Jesus dem og sa: «Vær hilset!» De falt ned, holdt om føttene hans og tilba ham.",
        am: "ሴቶቹም በፍርሃትና በታላቅ ደስታ ሮጡ። ኢየሱስም አገኛቸውና «ደስ ይበላችሁ» አላቸው። እነርሱም ቀርበው እግሩን ይዘው ሰገዱለት።",
      },
    ],
    laerdom: {
      no: "Kristus beseiret døden ved sin egen guddommelige makt. Dette er den største høytiden i kirka, ትንሣኤ eller ፋሲካ, som kommer etter den lange fasten. Vi hilser hverandre med «ክርስቶስ ተንሥአ እምሙታን» – Kristus er stått opp fra de døde.",
      am: "ክርስቶስ በገዛ ሥልጣኑ ሞትን ድል አድርጎ ተነሣ። ይህ ከዐቢይ ጾም በኋላ የሚመጣው የትንሣኤ በዓል የቤተ ክርስቲያን ታላቁ በዓል ነው። «ክርስቶስ ተንሥአ እምሙታን» እያልን እርስ በርሳችን ሰላም እንባባላለን።",
    },
    minnevers: "Matt 28:6",
    sporsmal: [
      {
        sporsmal: { no: "Hvem kom først til graven?", am: "መጀመሪያ ወደ መቃብሩ የመጡት እነማን ናቸው?" },
        svar: { no: "Maria Magdalena og den andre Maria.", am: "መግደላዊት ማርያምና ሁለተኛይቱ ማርያም።" },
      },
      {
        sporsmal: { no: "Hva sa engelen?", am: "መልአኩ ምን አለ?" },
        svar: { no: "«Han er ikke her. Han er stått opp, slik han sa.»", am: "«እንደ ተናገረ ተነሥቶአልና በዚህ የለም።»" },
      },
      {
        sporsmal: { no: "Hva heter høytiden for Jesu oppstandelse?", am: "የጌታችን ትንሣኤ በዓል ማን ይባላል?" },
        svar: { no: "ትንሣኤ eller ፋሲካ.", am: "ትንሣኤ ወይም ፋሲካ።" },
      },
    ],
  },
  {
    slug: "himmelfarten",
    testament: "nt",
    nr: 22,
    tittel: { no: "Jesus farer opp til himmelen", am: "የጌታችን ዕርገት" },
    ref: "Acts 1:6-11",
    tekst: [
      {
        no: "I førti dager etter oppstandelsen viste Jesus seg for apostlene. Så samlet han dem en siste gang. De spurte: «Herre, skal du nå gjenreise riket for Israel?»",
        am: "ጌታችን ከትንሣኤው በኋላ ለአርባ ቀን ለሐዋርያት ተገለጠላቸው። ለመጨረሻ ጊዜም በተሰበሰቡ ጊዜ «ጌታ ሆይ፥ በዚህ ወራት ለእስራኤል መንግሥትን ትመልሳለህን?» ብለው ጠየቁት።",
      },
      {
        no: "Jesus svarte: «Det er ikke for dere å vite tider som Faderen har bestemt. Men dere skal få kraft når Den hellige ånd kommer over dere. Og dere skal være mine vitner i Jerusalem, i hele Judea og Samaria og helt til jordens ende.»",
        am: "እርሱም «አብ በሥልጣኑ ያደረገውን ዘመናት ታውቁ ዘንድ አልተሰጣችሁም። ነገር ግን መንፈስ ቅዱስ በእናንተ ላይ በወረደ ጊዜ ኃይልን ትቀበላላችሁ፤ በኢየሩሳሌም፣ በይሁዳ ሁሉ፣ በሰማርያም እስከ ምድር ዳርም ድረስ ምስክሮቼ ትሆናላችሁ» አላቸው።",
      },
      {
        no: "Mens de så på, ble han løftet opp, og en sky tok ham bort fra øynene deres.",
        am: "ይህንም ከተናገረ በኋላ እነርሱ እያዩት ወደ ላይ ዐረገ፤ ደመናም ከዓይናቸው ሰወረችው።",
      },
      {
        no: "Mens de stod og stirret mot himmelen, stod to menn i hvite klær hos dem. De sa: «Galileiske menn, hvorfor står dere og ser mot himmelen? Denne Jesus skal komme igjen på samme måte som dere så ham fare opp.»",
        am: "ወደ ሰማይ ትኵር ብለው ሲመለከቱ ነጭ ልብስ የለበሱ ሁለት ሰዎች በአጠገባቸው ቆሙ። «የገሊላ ሰዎች ሆይ፥ ወደ ሰማይ እየተመለከታችሁ ስለ ምን ቆማችኋል? ይህ ኢየሱስ ወደ ሰማይ ሲሄድ እንዳያችሁት እንዲሁ ይመጣል» አሉአቸው።",
      },
    ],
    laerdom: {
      no: "Kristus for opp til himmelen med den menneskekroppen han hadde tatt fra Maria, og sitter ved Faderens høyre hånd. Kirka feirer ዕርገት på den 40. dagen etter ትንሣኤ. Vi venter på at han skal komme igjen i herlighet.",
      am: "ክርስቶስ ከእመቤታችን በነሣው ሥጋ ወደ ሰማይ ዐረገ፤ በአብ ቀኝም ተቀመጠ። ቤተ ክርስቲያን የዕርገትን በዓል ከትንሣኤ በኋላ በአርባኛው ቀን ታከብራለች። ዳግመኛም በክብር እስኪመጣ ድረስ እንጠብቀዋለን።",
    },
    minnevers: "Acts 1:11",
    sporsmal: [
      {
        sporsmal: { no: "Hva lovte Jesus apostlene før han for opp?", am: "ጌታችን ከማረጉ በፊት ለሐዋርያት ምን ተስፋ ሰጣቸው?" },
        svar: {
          no: "At de skulle få kraft når Den hellige ånd kom over dem.",
          am: "መንፈስ ቅዱስ በወረደባቸው ጊዜ ኃይልን እንደሚቀበሉ።",
        },
      },
      {
        sporsmal: { no: "Hva sa de to mennene i hvite klær?", am: "ነጭ ልብስ የለበሱት ሁለቱ ሰዎች ምን አሉ?" },
        svar: { no: "At Jesus skal komme igjen på samme måte.", am: "ኢየሱስ እንዲሁ ዳግመኛ እንደሚመጣ።" },
      },
    ],
  },
  {
    slug: "pinsedagen",
    testament: "nt",
    nr: 23,
    tittel: { no: "Den hellige ånd kommer på pinsedagen", am: "ጰራቅሊጦስ፤ የመንፈስ ቅዱስ መውረድ" },
    ref: "Acts 2:1-13",
    tekst: [
      {
        no: "På pinsedagen var apostlene samlet alle sammen på ett sted, med ett sinn.",
        am: "በዓለ ኀምሳ በደረሰ ጊዜ ሐዋርያት ሁሉ በአንድ ልብ ሆነው በአንድ ስፍራ ተሰብስበው ነበር።",
      },
      {
        no: "Plutselig kom det fra himmelen en lyd som av et sterkt vindpust. Den fylte hele huset. De så tunger som av ild, som delte seg og satte seg på hver av dem.",
        am: "ድንገትም እንደ ዓውሎ ነፋስ ያለ ድምፅ ከሰማይ መጣ፤ ተቀምጠው የነበሩበትንም ቤት ሁሉ ሞላው። እንደ እሳትም የተከፋፈሉ ልሳኖች ታዩአቸው፤ በእያንዳንዳቸውም ላይ ተቀመጡ።",
      },
      {
        no: "Alle ble fylt av Den hellige ånd og begynte å tale på andre språk, slik Ånden gav dem å tale.",
        am: "ሁሉም መንፈስ ቅዱስ ሞላባቸው፤ መንፈስም እንደ ሰጣቸው በሌሎች ልሳኖች ይናገሩ ጀመር።",
      },
      {
        no: "I Jerusalem bodde det gudfryktige jøder fra mange land. De kom sammen og ble forundret, for hver av dem hørte apostlene tale om Guds store gjerninger på sitt eget morsmål. Noen spottet og sa: «De er fulle av søt vin!»",
        am: "በኢየሩሳሌምም ከብዙ አገር የመጡ በጸሎት የተጉ አይሁድ ይኖሩ ነበር። ተሰብስበውም ተደነቁ፤ እያንዳንዳቸው የእግዚአብሔርን ታላቅ ሥራ በገዛ ቋንቋቸው ሲናገሩ ይሰሙ ነበርና። ሌሎች ግን «ጉሽ የወይን ጠጅ ጠግበዋል» እያሉ አፌዙባቸው።",
      },
    ],
    laerdom: {
      no: "Dette er kirkas fødselsdag. Den hellige ånd, som kirka også kaller ጰራቅሊጦስ (Trøsteren), kom over apostlene og gav dem kraft til å forkynne for alle folk. Vi feirer høytiden 50 dager etter ትንሣኤ, og dagen etter begynner ጾመ ሐዋርያት, apostlenes faste.",
      am: "ይህች ቀን የቤተ ክርስቲያን የልደት ቀን ናት። ጰራቅሊጦስ (አጽናኙ) መንፈስ ቅዱስ በሐዋርያት ላይ ወረደ፤ ለአሕዛብ ሁሉ ወንጌልን እንዲሰብኩም ኃይልን ሰጣቸው። በዓሉን ከትንሣኤ በኋላ በኀምሳኛው ቀን እናከብራለን፤ በማግሥቱም ጾመ ሐዋርያት ይጀምራል።",
    },
    minnevers: "Acts 2:4",
    sporsmal: [
      {
        sporsmal: { no: "Hva så apostlene over hodene sine?", am: "ሐዋርያት በላያቸው ምን አዩ?" },
        svar: { no: "Tunger som av ild.", am: "እንደ እሳት የተከፋፈሉ ልሳኖች።" },
      },
      {
        sporsmal: { no: "Hvorfor ble folket forundret?", am: "ሕዝቡ ለምን ተደነቁ?" },
        svar: {
          no: "Hver av dem hørte apostlene tale på sitt eget språk.",
          am: "እያንዳንዳቸው ሐዋርያትን በገዛ ቋንቋቸው ሲናገሩ ሰሙ።",
        },
      },
      {
        sporsmal: { no: "Hvilken faste begynner etter ጰራቅሊጦስ?", am: "ከጰራቅሊጦስ በኋላ የሚጀምረው ጾም የትኛው ነው?" },
        svar: { no: "ጾመ ሐዋርያት, apostlenes faste.", am: "ጾመ ሐዋርያት።" },
      },
    ],
  },
  {
    slug: "den-etiopiske-hoffmannen",
    testament: "nt",
    nr: 24,
    tittel: { no: "Den etiopiske hoffmannen blir døpt", am: "የኢትዮጵያው ጃንደረባ ተጠመቀ" },
    ref: "Acts 8:26-40",
    tekst: [
      {
        no: "En Herrens engel sa til Filip: «Gå sørover, til veien som går fra Jerusalem ned til Gaza.» Der kom en mann fra Etiopia kjørende i en vogn. Han var hoffmann og satt over alle skattene til Kandake, dronningen i Etiopia. Han hadde vært i Jerusalem for å tilbe Gud.",
        am: "የጌታ መልአክ ፊልጶስን «ተነሥተህ ከኢየሩሳሌም ወደ ጋዛ ወደሚያወርደው መንገድ ሂድ» አለው። በዚያም አንድ የኢትዮጵያ ሰው በሰረገላ ይመለስ ነበር። እርሱም ህንደኬ የተባለች የኢትዮጵያ ንግሥት ጃንደረባና በገንዘብዋ ሁሉ ላይ የተሾመ ነበር፤ ሊሰግድም ወደ ኢየሩሳሌም መጥቶ ነበር።",
      },
      {
        no: "Han satt og leste i profeten Jesaja. Ånden sa til Filip: «Gå bort til vognen.» Filip løp dit og spurte: «Forstår du det du leser?» «Hvordan skulle jeg kunne det uten at noen veileder meg?» svarte han, og bad Filip sette seg hos seg.",
        am: "በሰረገላው ተቀምጦ የነቢዩን የኢሳይያስን መጽሐፍ ያነብ ነበር። መንፈስም ፊልጶስን «ወደዚህ ሰረገላ ቅረብ» አለው። ፊልጶስም ሮጦ «የምታነበውን ታስተውለዋለህን?» አለው። እርሱም «የሚመራኝ ሳይኖር እንዴት ይቻለኛል?» ብሎ ፊልጶስን ከእርሱ ጋር እንዲቀመጥ ለመነው።",
      },
      {
        no: "Han leste: «Som et lam som blir ført bort for å slaktes, åpnet han ikke sin munn.» «Hvem taler profeten om?» spurte hoffmannen. Da begynte Filip med dette skriftstedet og forkynte evangeliet om Jesus for ham.",
        am: "ያነብ የነበረውም «እንደ በግ ወደ መታረድ ተነዳ፤ … እንዲሁ አፉን አልከፈተም» የሚለው ክፍል ነበረ። ጃንደረባውም «ነቢዩ ይህን ስለ ማን ይናገራል?» ብሎ ጠየቀ። ፊልጶስም ከዚህ መጽሐፍ ጀምሮ ስለ ኢየሱስ ወንጌልን ሰበከለት።",
      },
      {
        no: "Da de kom til et sted med vann, sa hoffmannen: «Se, her er vann. Hva hindrer at jeg blir døpt?» Filip sa: «Tror du av hele ditt hjerte, så kan det skje.» Han svarte: «Jeg tror at Jesus Kristus er Guds Sønn.»",
        am: "በመንገድም ሲሄዱ ወደ ውኃ ደረሱ። ጃንደረባውም «እነሆ ውኃ፤ እንዳልጠመቅ የሚከለክለኝ ምንድር ነው?» አለ። ፊልጶስም «በፍጹም ልብህ ብታምን ተፈቅዶአል» አለው። እርሱም «ኢየሱስ ክርስቶስ የእግዚአብሔር ልጅ እንደ ሆነ አምናለሁ» አለ።",
      },
      {
        no: "De gikk begge ned i vannet, og Filip døpte ham. Da de kom opp av vannet, rykket Herrens Ånd Filip bort. Hoffmannen så ham ikke mer, men han drog videre på veien sin full av glede.",
        am: "ሁለቱም ወደ ውኃ ወረዱ፤ ፊልጶስም አጠመቀው። ከውኃውም በወጡ ጊዜ የጌታ መንፈስ ፊልጶስን ነጠቀው። ጃንደረባውም ዳግመኛ አላየውም፤ ደስ ብሎትም መንገዱን ሄደ።",
      },
    ],
    laerdom: {
      no: "Salme 68 sier: «Etiopia skal rekke sine hender ut til Gud.» Kirka ser dette oppfylt i hoffmannen, som tok troen med seg hjem. Etter kirkas tradisjon het han ባኮስ. Senere, på 300-tallet, ble kristendommen landets tro gjennom አባ ሰላማ ከሣቴ ብርሃን.",
      am: "መዝሙረ ዳዊት «ኢትዮጵያ እጆችዋን ወደ እግዚአብሔር ትዘረጋለች» ይላል። ቤተ ክርስቲያን ይህ ቃል እምነትን ይዞ ወደ አገሩ በተመለሰው በጃንደረባው እንደ ተፈጸመ ታስተምራለች። በቤተ ክርስቲያን ትውፊት ስሙ ባኮስ ይባላል። ከዚያም በአራተኛው መቶ ክፍለ ዘመን በአባ ሰላማ ከሣቴ ብርሃን ክርስትና የአገሪቱ ሃይማኖት ሆነ።",
    },
    minnevers: "Acts 8:37",
    sporsmal: [
      {
        sporsmal: { no: "Hvilken bok leste hoffmannen i?", am: "ጃንደረባው የትኛውን መጽሐፍ ያነብ ነበር?" },
        svar: { no: "Profeten Jesaja.", am: "የነቢዩን የኢሳይያስን መጽሐፍ።" },
      },
      {
        sporsmal: { no: "Hva bekjente hoffmannen før han ble døpt?", am: "ጃንደረባው ከመጠመቁ በፊት ምን ብሎ መሰከረ?" },
        svar: {
          no: "«Jeg tror at Jesus Kristus er Guds Sønn.»",
          am: "«ኢየሱስ ክርስቶስ የእግዚአብሔር ልጅ እንደ ሆነ አምናለሁ።»",
        },
      },
      {
        sporsmal: { no: "Hvorfor er denne fortellingen viktig for Etiopia?", am: "ይህ ታሪክ ለኢትዮጵያ ለምን አስፈላጊ ነው?" },
        svar: {
          no: "Hoffmannen var en av de første fra Etiopia som ble døpt, og han tok troen med seg hjem.",
          am: "ጃንደረባው ከኢትዮጵያ ከተጠመቁት የመጀመሪያዎቹ አንዱ ነው፤ እምነቱንም ይዞ ወደ አገሩ ተመለሰ።",
        },
      },
    ],
  },
];
