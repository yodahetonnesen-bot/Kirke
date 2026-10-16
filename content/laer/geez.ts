import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ge'ez, ፊደል og tallene:
// Mahibere Kidusan (eotcmk.org): «ፊደል» (ordet ፈደለ, de fem navnene på ፊደል, striden om ሀለሐመ og አበገደ, at ሀለሐመ har vært
// brukt siden Abba Selama, Davids salme «fra alef til tav», hva hver bokstav minner om: ሀ ሀልዎቱ ለአብ …), «ሰዋስወ ግእዝ» del 1
// (sabeisk og ge'ez i Aksum, steininnskriftene i Aksum, Yeha og Adulis, ge'ez som eneste språk fra 300-tallet, kirkas lære om
// Henos, «ዘእንበለ ፊደል ኢይትነገር ወንጌል») og del 2 (de eldste bokstavene i rekkefølgen አበገደ uten vokaler, Abba Selama og de
// lærde som laget de sju formene og ordnet ሀ ለ ሐ መ, 26 bokstaver × 7 = 182), «አይቴ ብሔሩ ለግእዝ?» (vokalskrift fra 300-tallet,
// skrives fra venstre mot høyre, noen kaller ge'ez Adams eller englenes språk), «ልሳነ አርድእት» (amharisk tok over, kirka tok vare
// på ge'ez, prestenes lovsang er på ge'ez, Yareds bøker), «“ሃይማኖትና ሀገር …”» (kirka voktet ge'ez da amharisk vokste),
// «አባ ገሪማ ዘመደራ» (de ni hellige kom omkring 480 og oversatte fra syrisk og gresk), «፬ቱ ሆሄያት» (kallenavnene ሃሌታው ሀ,
// ሐመሩ ሐ, ብዙኀኑ ኀ, ንጉሡ ሠ, እሳቱ ሰ, አልፋው አ, ዐይኑ ዐ, ጸሎቱ ጸ, ፀሐዩ ፀ), «ሞክሼ ፊደላት» og «ትኩረት ለፊደላት» (ሠረቀ/ሰረቀ,
// ኀለየ/ሐለየ, at lydene var ulike i ge'ez), «አኀዝ» og «የግእዝ ቁጥሮች አጻጻፍ» (tallene, navnene, hvordan de settes sammen,
// ingen null), «ሥርዓተ ንባብ» (ተነሽ, ተጣይ, ወዳቂ, ሰያፍ; ቀደሳ; ግእዝ, ውርድ og ቁም ንባብ), «የንባብ ምልክቶች» (hilsenen ሰላም ለከ
// እኁየ, «አሜን – ይሁን ይደረግልኝ», ቀደሰ = አመሰገነ), «ንዑስ አገባብ» (እግዚኦ መሐረነ ክርስቶስ = አቤቱ ይቅር በለን),
// «የጌታችን ኢየሱስ ክርስቶስ ሞት (ሰሙነ ሕማማት)» (ተንሥኡ ለጸሎት, ሰላም ለኵልክሙ, ምስለ መንፈስከ; diakonen som bilde på Adam,
// presten på Kristus), «ጸልዩ በእንተ ሰላም» (ሥርዓተ ቅዳሴ), «በዓለ ቅድስት ሥላሴ» (kirka begynner med በስመ አብ … og slutter med
// ስብሐት ለአብ …), «ሱባኤ፣ምንነቱ፣ሥርዓቱ» (ኪርያላይሶን 41 ganger) og «ሥርዓተ አምልኮ» del 4 (ንዋየ ቅድሳት: ታቦት, ጽላት, መንበር,
// አትሮንስ, አክሊል, መሶበ ወርቅ, ጻሕል, ጽዋዕ).
// ethiopianorthodox.org: «The Introduction of Christianity» (Ezanas innskrifter og mynter, de ni hellige oversatte Bibelen fra
// en syrisk-gresk tekst, hver tok trolig en del, ordene ሃይማኖት og ቀሲስ, Qerlos), «Worship in the Ethiopian Orthodox Church»
// (ቅዳሴ på ge'ez, lesningene på amharisk), «The Ethiopian Liturgy» (PDF: «Arise for prayer» – «Lord have mercy upon us»,
// «Kyrie eleison, Lord have mercy») og «Our Father» / «Hail Mary» på ge'ez, amharisk og engelsk (PDF).
//
// Usikkert: Når ge'ez sluttet å være folkets talespråk, sier kildene ulikt (MK: amharisk ble sterkere fra 600-tallet; en annen
//   MK-artikkel: ge'ez var landets språk til 1100-tallet). Vi skriver bare «etter hvert».
// Usikkert: Hvem som laget de sju vokalformene. MK («ሰዋስወ ግእዝ» del 2) sier Abba Selama sammen med de lærde i hans tid; andre
//   kilder sier bare at vokalskrift kom i bruk på 300-tallet. Vi skriver «kirka forteller».
// Usikkert: Tallnavnene staves ulikt i de to MK-artiklene (ኀምስቱ/ሐምስቱ, ሰብዓቱ/ስብዓቱ, ሰመንቱ/ስመንቱ, ተስዐቱ/ተሰዓቱ, ዕሥራ/እስራ).
//   Vi har brukt stavemåten i «አኀዝ». 10 000 skrives ፼ i «አኀዝ», men ፻፻ i «የግእዝ ቁጥሮች አጻጻፍ».
// Usikkert: At ge'ez er «Adams språk» eller «englenes språk» er noe enkelte lærde sier (MK gjengir Alaqa Kidane Wold Kifle),
//   ikke kirkas lære. Vi skriver det som en mening.
// Usikkert: Folkets svar under ጸልዩ በእንተ ሰላም. Den engelske liturgien sier «Amen. Kyrie eleison, Lord have mercy upon us»; vi
//   har ikke funnet ordlyden på ge'ez i kildene og har ikke tatt den med.
// Usikkert: Hele folkets svar ved «Hellig, hellig, hellig» (ቅዱስ ቅዱስ ቅዱስ እግዚአብሔር ጸባኦት ፍጹመ ምሉእ …) står ikke ordrett i
//   kildene vi har lest. Vi tar bare med begynnelsen, som MK siterer fra ሰዓታት.
// Usikkert: ፊደለ ሐዋርያ nevnes hos MK bare som noe barna viste fram på en utstilling. Siden «kirkeskolen» forklarer det, har vi
//   ikke tatt det med her.
// Usikkert: ጥምጣም og ካባ er vanlige ord, men vi fant ingen EOTC-kilde som forklarer dem. MK nevner «ካባ» (svart kappe, gullkappe)
//   og at sangerne «ጠምጥመው» (har viklet turban). En prest bør se over forklaringene.
// Usikkert: Ordet for røkelseskaret er ጽና i dagligtale; MK («ሥርዓተ አምልኮ») bruker ጽንሓሕ. Vi har tatt med begge.
// Usikkert: ውርድ ንባብ forklares av MK («ሥርዓተ ንባብ») som lesing med sørgmodig stemme (bl.a. Davids salmer på langfredag), mens
//   «kirkeskolen» (etter ethiopianorthodox.org) kaller det rolig og nøyaktig lesing. Vi følger MK her.
export const geez: Tema = {
  slug: "geez",
  del: "sprak",
  tittel: { no: "Ge'ez – kirkas språk", am: "ግእዝ – የቤተ ክርስቲያን ልሳን" },
  undertittel: {
    no: "Språket, bokstavene og tallene som kirka ber og synger med",
    am: "ቤተ ክርስቲያን የምትጸልይበትና የምታመሰግንበት ልሳን፣ ፊደልና አኀዝ",
  },
  bilde: "evangeliebokTekst",
  ingress: {
    no:
      "Ge'ez (ግእዝ) er et gammelt språk fra Aksum i Etiopia. Det var folkets språk da kristendommen kom til landet. På ge'ez ble Bibelen oversatt, og på ge'ez skrev kirkas lærere ቅዳሴ, sangene og bønnebøkene. I dag snakker folk amharisk, tigrinja og andre språk, men kirka ber og synger fortsatt på ge'ez. Fra ge'ez har vi også ፊደል, bokstavene som amharisk skrives med, og de etiopiske tallene ፩, ፪, ፫.",
    am:
      "ግእዝ በአክሱም የተገኘ ጥንታዊ የኢትዮጵያ ልሳን ነው። ክርስትና ወደ ሀገራችን በገባ ጊዜ የሕዝቡ መነጋገሪያ ቋንቋ ነበር። መጻሕፍት ቅዱሳት በግእዝ ተተረጐሙ፤ ሊቃውንትም ቅዳሴውን፣ ዜማውንና የጸሎት መጻሕፍትን በግእዝ ጻፉ። ዛሬ ሕዝቡ አማርኛ፣ ትግርኛና ሌሎችንም ቋንቋዎች ይናገራል፤ ቤተ ክርስቲያን ግን አሁንም በግእዝ ትጸልያለች፤ ታመሰግናለችም። አማርኛ የሚጻፍበት ፊደልና ፩፣ ፪፣ ፫ የሚባሉት አኀዞችም ከግእዝ የተገኙ ናቸው።",
  },
  hovedvers: "Ps 68:32",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er ge'ez?", am: "ግእዝ ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ge'ez er et semittisk språk, i samme familie som hebraisk, arameisk og arabisk. Amharisk og tigrinja er i slekt med ge'ez og har lånt mange ord fra det. Folket som snakket ge'ez i gamle dager, ble kalt አግዓዝያን.",
            am: "ግእዝ ሴማዊ ልሳን ነው፤ ከዕብራይስጥ፣ ከሱርስትና ከዐረብኛ ጋር ዝምድና አለው። አማርኛና ትግርኛም ከግእዝ ጋር ይዛመዳሉ፤ ብዙ ቃላትንም ከእርሱ ወስደዋል። በጥንት ዘመን ግእዝን የሚናገሩት ሕዝቦች «አግዓዝያን» ይባሉ ነበር።",
          },
          vers: ["Gen 11:1", "Gen 11:7-9"],
        },
        {
          tekst: {
            no: "Gud vil at alle folk skal høre om ham på sitt eget språk. På pinsedagen hørte folk fra mange land apostlene tale om «Guds store gjerninger» på deres eget mål. I himmelen står mennesker «av alle ætter og stammer og folk og tunger» foran tronen.",
            am: "እግዚአብሔር ሕዝብ ሁሉ በገዛ ቋንቋው ቃሉን እንዲሰማ ይወዳል። በበዓለ ሃምሳ ከብዙ ሀገር የመጡ ሰዎች ሐዋርያት «የእግዚአብሔርን ታላቅ ሥራ» በልሳኖቻቸው ሲናገሩ ሰሙ። በሰማይም «ከሕዝብና ከነገድ ከወገንም ከቋንቋም ሁሉ» የመጡ በዙፋኑ ፊት ይቆማሉ።",
          },
          vers: ["Acts 2:6", "Acts 2:8-11", "Rev 7:9"],
        },
        {
          tekst: {
            no: "Profetene talte om Etiopia: «Etiopia skal i hast utrekke sine hender til Gud.» Ge'ez ble det språket Etiopia rakte hendene ut til Gud med, i bønn og lovsang.",
            am: "ነቢያት ስለ ኢትዮጵያ «ኢትዮጵያ እጆችዋን ወደ እግዚአብሔር ትዘረጋለች» ብለው ተናግረዋል። ኢትዮጵያ በጸሎትና በምስጋና እጆቿን ወደ እግዚአብሔር የዘረጋችበት ልሳን ግእዝ ነው።",
          },
          vers: ["Ps 68:32", "Zeph 3:10"],
        },
        {
          tekst: {
            no: "Ordet ግእዝ er også navnet på den første formen av hver bokstav (ሀ, ለ, ሐ …), og på den første av Yareds tre toner. Ge'ez skrives fra venstre mot høyre, slik som norsk.",
            am: "«ግእዝ» የሚለው ስም የእያንዳንዱ ፊደል የመጀመሪያው ዘር (ሀ፣ ለ፣ ሐ …) እና ከቅዱስ ያሬድ ሦስቱ የዜማ ስልቶች የመጀመሪያው መጠሪያም ነው። ግእዝ ከግራ ወደ ቀኝ ይጻፋል።",
          },
        },
      ],
    },
    {
      id: "historie",
      tittel: { no: "Fra Aksum til i dag", am: "ከአክሱም እስከ ዛሬ" },
      ingress: {
        no: "Ge'ez har vært skrevet i Etiopia i mer enn to tusen år. Steinene i Aksum forteller ennå historien.",
        am: "ግእዝ በኢትዮጵያ ከሁለት ሺህ ዓመታት በላይ ሲጻፍ ኖሯል። የአክሱም ሐውልቶችና ድንጋዮች ዛሬም ታሪኩን ይመሰክራሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "I gamle dager ble to beslektede språk brukt i landet: sabeisk og ge'ez. Skriften var sabeisk, men folket snakket ge'ez. Innskrifter på stein i Aksum, Yeha og Adulis viser dette. Etter hvert tok ge'ez over, og på 300-tallet var det landets eneste skriftspråk.",
            am: "በጥንት ዘመን በሀገራችን ሳባና ግእዝ የተባሉ ሁለት ተቀራራቢ ልሳናት ይነገሩ ነበር። ጽሑፉ በሳባ ፊደል፣ መነጋገሪያው ግን በግእዝ ነበር። በአክሱም፣ በየሐና በአዱሊስ በድንጋይ ላይ የተቀረጹ ጽሑፎች ይህን ያስረዳሉ። ቀስ በቀስ ግእዝ ሳባን ተካ፤ በአራተኛው መቶ ክፍለ ዘመን ብቸኛው የሀገሪቱ የጽሑፍ ልሳን ሆነ።",
          },
          vers: ["Deut 27:8", "Isa 30:8"],
        },
        {
          tekst: {
            no: "Kong Ezana (ኢዛና) i Aksum ble kristen på 300-tallet. I de første innskriftene sine kalte han seg sønn av en hedensk gud. Senere skrev han om «himmelens og jordens Herre», og på myntene byttet han ut månen med korset. Kirka kaller ham og broren ved dåpsnavnene አብርሃ og አጽብሐ.",
            am: "የአክሱም ንጉሥ ኢዛና በአራተኛው መቶ ክፍለ ዘመን ክርስትናን ተቀበለ። በመጀመሪያዎቹ ጽሑፎቹ ራሱን የአረማዊ አምላክ ልጅ ብሎ ይጠራ ነበር። በኋላ ግን «የሰማይና የምድር ጌታ» ብሎ ጻፈ፤ በሳንቲሞቹም ላይ ከጨረቃ ምልክት ፈንታ መስቀልን አደረገ። ቤተ ክርስቲያን እርሱንና ወንድሙን በስመ ክርስትናቸው አብርሃና አጽብሐ ብላ ትጠራቸዋለች።",
          },
        },
        {
          tekst: {
            no: "Kirka forteller at Abba Selama (Frumentius), den første biskopen, ordnet bokstavene i rekkefølgen ሀ ለ ሐ መ og gav hver bokstav sju former sammen med de lærde i sin tid. Slik kunne man skrive vokalene. Han begynte også å oversette de hellige bøkene, først noen salmer og bøker til gudstjenesten.",
            am: "የመጀመሪያው ጳጳስ አባ ሰላማ ከሣቴ ብርሃን በዘመኑ ከነበሩ ሊቃውንት ጋር ተማክረው ፊደላቱን በሀ ለ ሐ መ ቅደም ተከተል እንዳስቀመጡና እያንዳንዱን ፊደል በሰባት ዘር እንዳዘረዘሩት ቤተ ክርስቲያን ታስተምራለች። በዚህም አናባቢ ድምፆች መጻፍ ተቻለ። መጻሕፍትንም መተርጐም ጀመሩ፤ በመጀመሪያ ለአምልኮ የሚያስፈልጉ መዝሙራትና መጻሕፍት ተተረጐሙ።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "De ni hellige (ተስዓቱ ቅዱሳን) kom omkring år 480. De lærte seg ge'ez godt og oversatte hele Bibelen fra syrisk og gresk. Trolig tok hver av dem sin del, og derfor er stilen litt ulik fra bok til bok. Med dem kom ord som ሃይማኖት (tro) og ቀሲስ (prest) inn i ge'ez. De oversatte også መጽሐፈ ቄርሎስ, som kirkas lære bygger på.",
            am: "ተስዓቱ ቅዱሳን በ፬፻፹ ዓ.ም ገደማ ወደ ኢትዮጵያ መጡ። ግእዝን በሚገባ አጥንተው መጻሕፍት ቅዱሳትን ከሱርስትና ከጽርዕ ወደ ግእዝ ተረጐሙ። እያንዳንዳቸው አንዱን ክፍል ሳይተረጕሙ አይቀሩም፤ ስለዚህ የመጻሕፍቱ የአጻጻፍ ስልት ትንሽ ይለያያል። «ሃይማኖት»፣ «ቀሲስ» የመሳሰሉ ቃላትም በእነርሱ ዘመን ወደ ግእዝ ገቡ። የቤተ ክርስቲያናችን ትምህርት የተመሠረተበትን መጽሐፈ ቄርሎስንም ተረጐሙ።",
          },
          vers: ["Acts 2:8-11", "Neh 8:8"],
        },
        {
          tekst: {
            no: "Etter hvert ble amharisk folkets språk. Men kirka tok vare på ge'ez i klostrene og kirkeskolene. Der ble Yareds sang, ቅኔ og forklaringen av bøkene lært bort på ge'ez fra lærer til elev. De fleste gamle bøkene om Etiopias historie, tro og lov er skrevet på ge'ez.",
            am: "ቀስ በቀስ አማርኛ የሕዝቡ መነጋገሪያ ሆነ። ቤተ ክርስቲያን ግን ግእዝ እንዳይጠፋ በገዳማቱና በአብነት ትምህርት ቤቶች ጠብቃ አቆየችው። ዜማው፣ ቅኔውና የመጻሕፍት ትርጓሜው ከመምህር ወደ ደቀ መዝሙር በግእዝ ተላለፈ። የኢትዮጵያ ታሪክ፣ የሃይማኖትና የሕግ መጻሕፍት አብዛኞቹ በግእዝ የተጻፉ ናቸው።",
          },
          vers: ["2Tim 2:2", "Ps 78:4"],
        },
      ],
    },
    {
      id: "liturgien",
      tittel: { no: "Hvorfor ber kirka på ge'ez?", am: "ቤተ ክርስቲያን ለምን በግእዝ ትጸልያለች?" },
      punkter: [
        {
          tekst: {
            no: "Ge'ez var språket da troen kom til Etiopia. Bibelen, de 14 ቅዳሴ-ene, Yareds sanger og Abba Giyorgis' ሰዓታት ble skrevet på ge'ez. Når vi ber de samme ordene, ber vi sammen med fedrene som skrev dem.",
            am: "ሃይማኖት ወደ ኢትዮጵያ በገባ ጊዜ ልሳኑ ግእዝ ነበር። መጻሕፍት ቅዱሳት፣ ፲፬ቱ ቅዳሴያት፣ የቅዱስ ያሬድ ዜማና የአባ ጊዮርጊስ ሰዓታት በግእዝ ተጻፉ። እነዚህን ቃላት ስንጸልይ ከጻፏቸው አበው ጋር አብረን እንጸልያለን።",
          },
          vers: ["Jer 6:16", "2Thess 2:15"],
        },
        {
          tekst: {
            no: "Yareds melodier er laget for ge'ez-ordene. Hver tone og hvert sangtegn hører til et bestemt ord. Derfor synger prestene og sangerne fortsatt på ge'ez. Kirkas lærere sier at ge'ez er prestenes lovsangsmål.",
            am: "የቅዱስ ያሬድ ዜማ ለግእዝ ቃላት የተዘጋጀ ነው፤ እያንዳንዱ ምልክትና ቅኝት ከቃሉ ጋር የተያያዘ ነው። ስለዚህ ካህናትና መዘምራን አሁንም በግእዝ ያዜማሉ። ሊቃውንት «ለካህናቱ የምስጋናቸው አንደበት ግእዙ ነው» ይላሉ።",
          },
          vers: ["Ps 47:7", "Col 3:16"],
        },
        {
          tekst: {
            no: "I ge'ez kan én bokstav endre hele meningen. ሠረቀ betyr «stod fram, ble født», men ሰረቀ betyr «stjal». Bøkene sier om Kristus: «ሠረቀ በሥጋ እምድንግል» – «Han ble født i kjøtt av Jomfruen.» Skrevet med feil ሰ, blir det en stor feil. Derfor vokter kirka ordene nøye, slik at troen blir gitt videre riktig. Jesus sa at ikke den minste bokstav i loven skal forgå.",
            am: "በግእዝ አንዲት ፊደል ሙሉ ትርጉሙን ትለውጣለች። «ሠረቀ» ማለት ወጣ፣ ተወለደ ማለት ነው፤ «ሰረቀ» ግን ሰረቀ (ሌብነት) ማለት ነው። ስለ ክርስቶስ «ሠረቀ በሥጋ እምድንግል» ይባላል፤ ከድንግል በሥጋ ተወለደ ማለት ነው። በእሳቱ «ሰ» ቢጻፍ ታላቅ ስሕተት ይሆናል። ስለዚህ ቤተ ክርስቲያን ሃይማኖቱ በትክክል እንዲተላለፍ ቃላቱን በጥንቃቄ ትጠብቃለች። ጌታችንም «ከሕግ አንዲት የውጣ ወይም አንዲት ነጥብ ከቶ አታልፍም» ብሏል።",
          },
          vers: ["Matt 5:18", "Jude 1:3"],
        },
        {
          tekst: {
            no: "Kirka vil også at folket skal forstå. Derfor leses Bibel-lesningene og noen deler av ቅዳሴ på amharisk eller på folkets eget språk. Paulus spør: Hvordan kan noen si «amen» til en bønn hvis han ikke vet hva som blir sagt? Derfor er det godt å lære hva ge'ez-ordene betyr.",
            am: "ቤተ ክርስቲያን ሕዝቡ እንዲያስተውልም ትፈልጋለች። ስለዚህ ምንባባቱና አንዳንድ የቅዳሴ ክፍሎች በአማርኛ ወይም በሕዝቡ ቋንቋ ይነበባሉ። ቅዱስ ጳውሎስ «የምትለውን ካላወቀ እንዴት አድርጎ ለምስጋናህ አሜን ይላል?» ብሏል። ስለዚህ የግእዙን ቃላት ትርጉም መማር መልካም ነው።",
          },
          vers: ["1Cor 14:16", "Neh 8:8"],
        },
        {
          tekst: {
            no: "Noen av kirkas lærde har kalt ge'ez «Adams språk» eller «englenes språk», fordi kirka lovsynger Gud på det slik englene gjør. Dette er en tanke hos enkelte lærere, ikke en del av troen. Bibelen sier at hele jorden en gang hadde ett språk.",
            am: "አንዳንድ ሊቃውንት ግእዝን «የአዳም ልሳን» ወይም «የመላእክት ልሳን» ይሉታል፤ ቤተ ክርስቲያን እንደ መላእክት በእርሱ እግዚአብሔርን ታመሰግናለችና። ይህ የአንዳንድ ሊቃውንት አሳብ እንጂ የሃይማኖት ዶግማ አይደለም። መጽሐፍ ቅዱስ «ምድርም ሁሉ በአንድ ቋንቋ ነበረች» ይላል።",
          },
          vers: ["Gen 11:1"],
        },
      ],
    },
    {
      id: "fidel",
      tittel: { no: "ፊደል – bokstavene og rekkefølgen deres", am: "ፊደልና ቅደም ተከተሉ" },
      ingress: {
        no: "Ordet ፊደል kommer av ge'ez-verbet ፈደለ, «å skrive». ፊደል betyr skrift, bokstav, og begynnelsen på alle bøker.",
        am: "ፊደል «ፈደለ – ጻፈ» ከሚለው የግእዝ ቃል የተገኘ ነው፤ ትርጉሙም ጽሕፈት፣ ምልክት፣ የመጽሐፍ ሁሉ መነሻ ማለት ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "Kirka lærer at skriften begynte i tiden til Enos (ሄኖስ), Adams barnebarn. Han tjente Gud trofast, og Gud lot ham se bokstavene som på en tavle på himmelen. På hans tid begynte menneskene å påkalle Herrens navn.",
            am: "የፊደል ቅርጽ የተጀመረው የአዳም የልጅ ልጅ በሆነው በሄኖስ ዘመን እንደሆነ ቤተ ክርስቲያን ታስተምራለች። እግዚአብሔርን በታማኝነት ያገለግል ስለ ነበር ፊደላቱ በጸፍጸፈ ሰማይ (በሰማይ ገበታነት) ተገልጠው ታዩት። በእርሱም ዘመን «በእግዚአብሔር ስም መጠራት ተጀመረ»።",
          },
          vers: ["Gen 4:26", "Gen 5:6"],
        },
        {
          tekst: {
            no: "Ge'ez har 26 bokstaver. Hver bokstav har sju former, en for hver vokal: ግእዝ, ካዕብ, ሣልስ, ራብዕ, ኃምስ, ሳድስ og ሳብዕ. Navnene betyr «den første (grunnformen), den andre, den tredje …» opp til «den sjuende». Til sammen blir det 26 × 7 = 182 tegn. Amharisk har lagt til bokstaver som ሸ, ቸ, ኘ, ኸ, ዠ, ጀ og ጨ.",
            am: "የግእዝ ፊደላት ብዛት ፳፮ ነው። እያንዳንዱ ፊደል በሰባት ዘር ይዘረዘራል፤ እነርሱም ግእዝ፣ ካዕብ፣ ሣልስ፣ ራብዕ፣ ኃምስ፣ ሳድስና ሳብዕ ናቸው። ስሞቹ «መጀመሪያ፣ ሁለተኛ፣ ሦስተኛ …» እስከ «ሰባተኛ» ማለት ናቸው። በአጠቃላይ ፳፮ × ፯ = ፻፹፪ ፊደላት ይሆናሉ። አማርኛ ደግሞ ሸ፣ ቸ፣ ኘ፣ ኸ፣ ዠ፣ ጀ፣ ጨን የመሳሰሉ ፊደላትን ጨምሯል።",
          },
          vers: ["Ps 119:105"],
        },
        {
          tekst: {
            no: "Den rekkefølgen vi lærer i dag, er ሀ ለ ሐ መ ሠ ረ ሰ ቀ በ ተ … og slutter med ፐ. Den kalles ሀለሐመ og har vært brukt siden Abba Selamas tid.",
            am: "ዛሬ የምንማረው ቅደም ተከተል ሀ ለ ሐ መ ሠ ረ ሰ ቀ በ ተ … ብሎ በፐ ይጨርሳል። ይህ «ሀለሐመ» ይባላል፤ ከአባ ሰላማ ዘመን ጀምሮ ሲሠራበት ኖሯል።",
          },
        },
        {
          tekst: {
            no: "En eldre rekkefølge er አ በ ገ ደ (አበገደ), som ligner hebraisk alef, bet, gimel, dalet og gresk alfa, beta. Davids lange salme 119 har en del for hver hebraisk bokstav, fra alef til tav. De lærde er uenige om hvilken rekkefølge som er eldst. Begge regnes som gode, og hver bokstav har en betydning som lærer oss om Gud.",
            am: "ቀደም ያለው ቅደም ተከተል «አበገደ» ነው፤ ከዕብራይስጡ አሌፍ፣ ቤት፣ ጋሜል፣ ዳሌጥና ከጽርዑ አልፋ፣ ቤታ ጋር ይመሳሰላል። ዳዊትም በመዝሙረ ዳዊት ፻፲፱ ከአሌፍ እስከ ታው በእያንዳንዱ ፊደል እግዚአብሔርን አመስግኗል። ሊቃውንት የትኛው ይቀድማል በሚለው ይከራከራሉ፤ በሁለቱም ቢሆን እያንዳንዱ ፊደል ስለ እግዚአብሔር የሚያስተምር ትርጉም አለው።",
          },
          vers: ["Ps 119:1", "Rev 22:13"],
        },
      ],
    },
    {
      id: "likelyd",
      tittel: { no: "Bokstaver som høres like ut", am: "ድምፃቸው የሚመሳሰል ፊደላት" },
      ingress: {
        no: "På amharisk uttales noen bokstaver likt. I ge'ez hadde de ulik lyd, og de gir ulik mening. For å skille dem har de fått kallenavn.",
        am: "በአማርኛ አንዳንድ ፊደላት በአንድ ድምፅ ይጠራሉ። በግእዝ ግን ድምፃቸው የተለያየ ነበር፤ ትርጉምም ይለውጣሉ። ለመለየት የራሳቸው መጠሪያ ስም አላቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "ሀ, ሐ og ኀ heter ሃሌታው ሀ («ሀ i halleluja»), ሐመሩ ሐ («ሐ i ሐመር») og ብዙኀኑ ኀ («ኀ i ብዙኀን»).",
            am: "ሀ፣ ሐ፣ ኀ፦ ሃሌታው «ሀ»፣ ሐመሩ «ሐ» እና ብዙኀኑ «ኀ» ይባላሉ።",
          },
        },
        {
          tekst: {
            no: "ሠ og ሰ heter ንጉሡ ሠ («ሠ i ንጉሥ, konge») og እሳቱ ሰ («ሰ i እሳት, ild»). አ og ዐ heter አልፋው አ («alfa-አ») og ዐይኑ ዐ («ዐ i ዐይን, øye»). ጸ og ፀ heter ጸሎቱ ጸ («ጸ i ጸሎት, bønn») og ፀሐዩ ፀ («ፀ i ፀሐይ, sol»).",
            am: "ሠ እና ሰ፦ ንጉሡ «ሠ» እና እሳቱ «ሰ»። አ እና ዐ፦ አልፋው «አ» እና ዐይኑ «ዐ»። ጸ እና ፀ፦ ጸሎቱ «ጸ» እና ፀሐዩ «ፀ» ይባላሉ።",
          },
        },
        {
          tekst: {
            no: "Bytter man om bokstavene, endrer ordet mening. ኀለየ betyr «tenkte», men ሐለየ betyr «sang». ሀደመ betyr «sovnet», men ሐደመ betyr «fortalte». Derfor skriver kirkas bøker hvert ord med den riktige bokstaven, selv om de høres like ut.",
            am: "ፊደላቱ ቢቀያየሩ ትርጉሙ ይለወጣል። «ኀለየ» አሰበ ማለት ሲሆን «ሐለየ» ዘፈነ ማለት ነው። «ሀደመ» አንቀላፋ ማለት ሲሆን «ሐደመ» አወጋ፣ ተረተ ማለት ነው። ስለዚህ የቤተ ክርስቲያን መጻሕፍት ድምፃቸው ቢመሳሰልም እያንዳንዱን ቃል በትክክለኛው ፊደል ይጽፋሉ።",
          },
          vers: ["Matt 5:18", "Prov 30:5-6"],
        },
      ],
    },
    {
      id: "tall",
      tittel: { no: "Ge'ez-tallene (አኀዝ)", am: "የግእዝ አኀዝ" },
      ingress: {
        no: "Ordet አኀዝ kommer av አኀዘ, «å begynne, å telle». Ge'ez har egne tegn for tall. De brukes i kalenderen, i Bibelen og i kirkas bøker.",
        am: "አኀዝ «አኀዘ – ጀመረ፣ ቆጠረ» ከሚለው የግእዝ ግሥ የተገኘ ሲሆን ትርጉሙ ቁጥር ማለት ነው። ግእዝ የራሱ የሆነ የቁጥር ምልክቶች አሉት፤ በዘመን አቆጣጠር፣ በመጽሐፍ ቅዱስና በቤተ ክርስቲያን መጻሕፍት ይሠራባቸዋል።",
      },
      punkter: [
        {
          tekst: {
            no: "Det er 20 grunntall: ፩ (1) til ፱ (9), tierne ፲ (10), ፳ (20), ፴ (30), ፵ (40), ፶ (50), ፷ (60), ፸ (70), ፹ (80), ፺ (90), og ፻ (100) og ፼ (10 000). Det finnes ingen null.",
            am: "በግእዝ ፳ መሥራች ቁጥሮች አሉ፦ ከ፩ እስከ ፱፣ አሥሮቹ ፲፣ ፳፣ ፴፣ ፵፣ ፶፣ ፷፣ ፸፣ ፹፣ ፺፣ እንዲሁም ፻ (መቶ) እና ፼ (አሥር ሺህ)። ዜሮ የለም።",
          },
        },
        {
          tekst: {
            no: "Tallene leses slik: ፩ አሐዱ, ፪ ክልኤቱ, ፫ ሠለስቱ, ፬ አርባዕቱ, ፭ ኀምስቱ, ፮ ስድስቱ, ፯ ሰብዓቱ, ፰ ሰመንቱ, ፱ ተስዐቱ, ፲ አሠርቱ. 100 heter ምእት og 10 000 heter እልፍ. I Johannes' åpenbaring står det at englene var «ti tusen ganger ti tusen» – på amharisk አእላፋት, flertall av እልፍ.",
            am: "ሲነበቡ፦ ፩ አሐዱ፣ ፪ ክልኤቱ፣ ፫ ሠለስቱ፣ ፬ አርባዕቱ፣ ፭ ኀምስቱ፣ ፮ ስድስቱ፣ ፯ ሰብዓቱ፣ ፰ ሰመንቱ፣ ፱ ተስዐቱ፣ ፲ አሠርቱ። ፻ ምእት፣ ፼ ደግሞ እልፍ ይባላል። በዮሐንስ ራእይ የመላእክት ቍጥር «አእላፋት ጊዜ አእላፋት» ተብሏል።",
          },
          vers: ["Rev 5:11", "1Cor 14:19"],
        },
        {
          tekst: {
            no: "Større tall settes sammen ved å legge til: 29 = ፳፱ (20 + 9), 84 = ፹፬, 208 = ፪፻፰ (to hundre og åtte). Tusen skrives som «ti hundre», ፲፻, og 2000 som ፳፻. Året 2019 etter etiopisk tidsregning skrives ፳፻፲፱.",
            am: "ሌሎቹ ቁጥሮች በመደመር ይጻፋሉ፦ ፳፱ (፳ + ፱)፣ ፹፬፣ ፪፻፰ (ሁለት መቶ ስምንት)። ሺህ «አሥር መቶ» ተብሎ ፲፻፣ ሁለት ሺህም ፳፻ ይጻፋል። ፳፻፲፱ ዓ.ም እንዲህ ይጻፋል።",
          },
        },
        {
          tekst: {
            no: "Gud teller alt: Han fastsetter stjernenes tall, og til og med hårene på hodet vårt er telt. Når kirka skriver datoer, kapitler og helgendager med ge'ez-tall, minner det oss om at tiden hører Gud til. Vi sier for eksempel ፲፬ቱ ቅዳሴያት (de 14 ቅዳሴ-ene) og ፹፩ዱ መጻሕፍት (de 81 bøkene).",
            am: "እግዚአብሔር ሁሉን ይቈጥራል፤ «የከዋክብትንም ብዛት ይቈጥራል»፤ «የራሳችሁ ጠጕር ሁሉ እንኳ የተቈጠረ ነው»። ቤተ ክርስቲያን ዕለታትን፣ ምዕራፎችንና በዓላትን በግእዝ አኀዝ ትጽፋለች። ለምሳሌ «፲፬ቱ ቅዳሴያት»፣ «፹፩ዱ መጻሕፍት» እንላለን።",
          },
          vers: ["Ps 147:4", "Luke 12:7"],
        },
      ],
    },
    {
      id: "laante-ord",
      tittel: { no: "Ord fra hebraisk og gresk: ሃሌ ሉያ, አሜን, ኪርያላይሶን", am: "ከዕብራይስጥና ከጽርዕ የመጡ ቃላት" },
      ingress: {
        no: "Noen ord i kirka er enda eldre enn ge'ez. Kirka har tatt dem med uten å oversette dem, slik kristne over hele verden gjør.",
        am: "በቤተ ክርስቲያን የምንሰማቸው አንዳንድ ቃላት ከዕብራይስጥና ከጽርዕ የመጡ ናቸው። ክርስቲያኖች በዓለም ሁሉ እንደሚያደርጉት ሳይተረጐሙ ይነገራሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "ሃሌ ሉያ (halleluja) er hebraisk og betyr «lov Herren». Mange av Davids salmer begynner eller slutter med det, og i himmelen roper de eldste «Amen! Halleluja!». Yareds første sang var «ሃሌ ሉያ ለአብ, ሃሌ ሉያ ለወልድ, ሃሌ ሉያ ወለመንፈስ ቅዱስ».",
            am: "«ሃሌ ሉያ» የዕብራይስጥ ቃል ሲሆን «እግዚአብሔርን አመስግኑ» ማለት ነው። ብዙ መዝሙረ ዳዊት በእርሱ ይጀምራሉ ወይም ይጨርሳሉ፤ በሰማይም ሽማግሌዎቹ «አሜን፥ ሃሌ ሉያ» እያሉ ሰገዱ። የቅዱስ ያሬድ የመጀመሪያው ዜማም «ሃሌ ሉያ ለአብ፣ ሃሌ ሉያ ለወልድ፣ ሃሌ ሉያ ወለመንፈስ ቅዱስ» ነበር።",
          },
          vers: ["Ps 150:1", "Ps 117:1", "Rev 19:4"],
        },
        {
          tekst: {
            no: "አሜን (amen) er også hebraisk. Det betyr «sant, la det skje». Kirkas lærere oversetter det med ይሁን ይደረግልኝ, «la det bli, la det skje meg». Når vi sier amen etter en bønn, gjør vi bønnen til vår egen. Jesus selv kalles «han som er amen».",
            am: "«አሜን» የዕብራይስጥ ቃል ነው፤ ሊቃውንት «ይሁን ይደረግልኝ» ብለው ይተረጕሙታል። ከጸሎት በኋላ አሜን ስንል ጸሎቱን የራሳችን እናደርጋለን። ጌታችንም «አሜን የሆነው፥ የታመነውና እውነተኛው ምስክር» ተብሏል።",
          },
          vers: ["Ps 106:48", "Deut 27:15", "Rev 3:14"],
        },
        {
          tekst: {
            no: "ኪርያላይሶን kommer fra gresk «Kyrie eleison» og betyr «Herre, forbarm deg». Det er det samme ropet som de blinde og den kananeiske kvinnen ropte til Jesus. Etter bønnene sier vi ofte ኪርያላይሶን mange ganger; under ሱባኤ sies det 41 ganger.",
            am: "«ኪርያላይሶን» ከጽርዕ የመጣ ቃል ሲሆን «አቤቱ ማረን» ማለት ነው። ዕውሮቹና ከነናዊቷ ሴት ወደ ጌታችን «ጌታ ሆይ፥ ማረን» ብለው ጮኹ። ከጸሎት በኋላ ብዙ ጊዜ ኪርያላይሶን እንላለን፤ በሱባኤ ጊዜ ፵፩ ጊዜ ይባላል።",
          },
          vers: ["Matt 20:30", "Matt 15:22", "Luke 18:13"],
        },
      ],
    },
    {
      id: "diakonen",
      tittel: { no: "Diakonens rop og folkets svar", am: "የዲያቆኑ ትእዛዝና የሕዝቡ መልስ" },
      ingress: {
        no: "Under ቅዳሴ roper diakonen korte ord på ge'ez, og folket svarer. Her er hva de betyr, ord for ord.",
        am: "በቅዳሴ ጊዜ ዲያቆኑ አጫጭር ቃላትን በግእዝ ያውጃል፤ ሕዝቡም ይመልሳሉ። ትርጕማቸው እንደሚከተለው ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "ተንሥኡ ለጸሎት – «Stå opp til bønn!» (ተንሥኡ = stå opp, ለጸሎት = til bønn). Folket svarer: እግዚኦ መሐረነ ክርስቶስ – «Herre, forbarm deg over oss, Kristus» (እግዚኦ = å Herre, መሐረነ = vis oss nåde).",
            am: "«ተንሥኡ ለጸሎት» ማለት «ለጸሎት ተነሡ» ማለት ነው። ሕዝቡ «እግዚኦ መሐረነ ክርስቶስ» ብለው ይመልሳሉ፤ «እግዚኦ» አቤቱ፣ «መሐረነ» ይቅር በለን ማለት ነው፤ «አቤቱ ክርስቶስ ይቅር በለን» እንደ ማለት ነው።",
          },
          vers: ["Ps 134:2", "Matt 20:30"],
        },
        {
          tekst: {
            no: "ሰላም ለኵልክሙ – «Fred være med dere alle», sier presten. Folket svarer ምስለ መንፈስከ – «Og med din ånd». Den oppstandne Jesus hilste disiplene med de samme ordene: «Fred være med eder!»",
            am: "ካህኑ «ሰላም ለኵልክሙ – ሰላም ለሁላችሁ ይሁን» ይላል። ሕዝቡም «ምስለ መንፈስከ – ከመንፈስህ ጋራ» ብለው ይመልሳሉ። ጌታችንም ከትንሣኤው በኋላ ደቀ መዛሙርቱን «ሰላም ለእናንተ ይሁን» ብሎ ተሳለማቸው።",
          },
          vers: ["John 20:19"],
        },
        {
          tekst: {
            no: "ጸልዩ በእንተ ሰላም – «Be for fred!» (ጸልዩ = be, በእንተ = for, ሰላም = fred). Diakonen sier også ጸልዩ በእንተ ሰላመ ቤተ ክርስቲያን – «Be for kirkas fred!» Paulus ber oss be for alle mennesker, så vi kan leve et rolig og stille liv.",
            am: "«ጸልዩ በእንተ ሰላም» ማለት «ስለ ሰላም ጸልዩ» ማለት ነው። ዲያቆኑ «ጸልዩ በእንተ ሰላመ ቤተ ክርስቲያን – ስለ ቤተ ክርስቲያን ሰላም ጸልዩ» ይላል። ቅዱስ ጳውሎስም «ጸጥና ዝግ ብለን እንድንኖር» ስለ ሰዎች ሁሉ እንድንጸልይ ይመክራል።",
          },
          vers: ["1Tim 2:1-2", "Ps 122:6-7"],
        },
        {
          tekst: {
            no: "ቅዱስ ቅዱስ ቅዱስ እግዚአብሔር ጸባኦት – «Hellig, hellig, hellig er Herren, hærskarenes Gud.» Dette er serafenes sang som Jesaja hørte. I ቅዳሴ synger folket den sammen med englene. ጸባኦት betyr «hærskarer».",
            am: "«ቅዱስ ቅዱስ ቅዱስ እግዚአብሔር ጸባኦት» ማለት «ቅዱስ፥ ቅዱስ፥ ቅዱስ፥ የሠራዊት ጌታ እግዚአብሔር» ማለት ነው። ኢሳይያስ የሰማው የሱራፌል ምስጋና ነው፤ በቅዳሴም ሕዝቡ ከመላእክት ጋር ያመሰግኑበታል። «ጸባኦት» ሠራዊት ማለት ነው።",
          },
          vers: ["Isa 6:3", "Rev 4:8"],
        },
      ],
    },
    {
      id: "bonner",
      tittel: { no: "Bønner som begynner på ge'ez", am: "በግእዝ የሚጀመሩ ጸሎቶች" },
      punkter: [
        {
          tekst: {
            no: "በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ – «I Faderens og Sønnens og Den hellige ånds navn, én Gud.» በስመ = i navnet, አብ = Fader, ወ = og, ወልድ = Sønn, አሐዱ = én, አምላክ = Gud. Med disse ordene begynner kirka all bønn og tjeneste.",
            am: "«በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ» ማለት «በአብ በወልድ በመንፈስ ቅዱስ ስም አንድ አምላክ» ማለት ነው። «በስመ» በስም፣ «ወ» እና፣ «አሐዱ» አንድ ማለት ነው። ቤተ ክርስቲያን አገልግሎቷን ሁሉ በዚህ ቃል ትጀምራለች።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "ስብሐት ለአብ ወወልድ ወመንፈስ ቅዱስ – «Ære være Faderen og Sønnen og Den hellige ånd.» Kirka begynner med በስመ አብ … og avslutter med ስብሐት ለአብ …, for all lovsang begynner og slutter med Den hellige treenighet.",
            am: "«ስብሐት ለአብ ወወልድ ወመንፈስ ቅዱስ» ማለት «ምስጋና ለአብ ለወልድ ለመንፈስ ቅዱስ ይሁን» ማለት ነው። ቤተ ክርስቲያን አገልግሎቷን «በስመ አብ …» ብላ ጀምራ «ስብሐት ለአብ …» ብላ ትዘጋለች፤ የአምልኮ ሁሉ መክፈቻና መዝጊያ የቅድስት ሥላሴ ስም ነውና።",
          },
          vers: ["Jude 1:25", "Luke 2:14"],
        },
        {
          tekst: {
            no: "አቡነ ዘበሰማያት ይትቀደስ ስምከ ትምጻእ መንግሥትከ – «Fader vår, du som er i himmelen, helliget vorde ditt navn, komme ditt rike.» አቡነ = vår far (አብ + ነ, «vår»), ዘበሰማያት = som er i himlene. Dette er Herrens bønn, som Jesus selv lærte oss.",
            am: "«አቡነ ዘበሰማያት ይትቀደስ ስምከ ትምጻእ መንግሥትከ» ማለት «በሰማያት የምትኖር አባታችን ሆይ፥ ስምህ ይቀደስ፤ መንግሥትህ ትምጣ» ማለት ነው። «አቡነ» አባታችን፣ «ዘበሰማያት» በሰማያት ያለህ ማለት ነው። ጌታችን ራሱ ያስተማረን ጸሎት ነው።",
          },
          vers: ["Matt 6:9-13"],
        },
        {
          tekst: {
            no: "በሰላመ ቅዱስ ገብርኤል መልአክ ኦ እግዝእትየ ማርያም ሰላም ለኪ – «Med den hellige engelen Gabriels hilsen: Å min frue Maria, fred være med deg.» ለኪ betyr «til deg» når man snakker til en kvinne. Til en mann sier man ሰላም ለከ, og til mange ሰላም ለኵልክሙ.",
            am: "«በሰላመ ቅዱስ ገብርኤል መልአክ ኦ እግዝእትየ ማርያም ሰላም ለኪ» ማለት «እመቤታችን ማርያም ሆይ፥ በመልአኩ በቅዱስ ገብርኤል ሰላምታ ሰላም እንልሻለን» ማለት ነው። «ለኪ» ለሴት ይነገራል፤ ለወንድ «ሰላም ለከ»፣ ለብዙዎች «ሰላም ለኵልክሙ» ይባላል።",
          },
          vers: ["Luke 1:28"],
        },
      ],
    },
    {
      id: "lese",
      tittel: { no: "Slik leses ge'ez", am: "ሥርዓተ ንባብ" },
      ingress: {
        no: "I kirka leses ge'ez etter faste regler. Hvordan et ord uttales, kan endre hva det betyr.",
        am: "በቤተ ክርስቲያን ግእዝ በሥርዓት ይነበባል። የአነባበብ ሥርዓት ካልተስተካከለ ትርጉም ይለወጣል።",
      },
      punkter: [
        {
          tekst: {
            no: "Det finnes fire hovedmåter å uttale et ord på: ተነሽ (stemmen løftes), ተጣይ (stemmen slippes), ወዳቂ (stemmen faller) og ሰያፍ (stemmen går på skrå). Ordet ቀደሳ betyr «han æret henne» når det leses som ወዳቂ, men «de (kvinnene) lovpriste» når det leses som ተነሽ.",
            am: "ዐበይት ንባባት አራት ናቸው፦ ተነሽ፣ ተጣይ፣ ወዳቂና ሰያፍ። ለምሳሌ «ቀደሳ» በወዳቂ ሲነበብ «አከበራት» ማለት ሲሆን በተነሽ ሲነበብ ግን «ሁለትና ከዚያ በላይ የሆኑ ሴቶች አመሰገኑ» ማለት ይሆናል።",
          },
          vers: ["Neh 8:8"],
        },
        {
          tekst: {
            no: "Det er også tre lesestiler: ግእዝ ንባብ, der eleven teller hver bokstav og leser langsomt med melodi; ውርድ ንባብ, som leses med en sørgmodig stemme, for eksempel Davids salmer på langfredag; og ቁም ንባብ, den vanlige, klare lesingen.",
            am: "ሦስት የንባብ ስልቶችም አሉ፦ ግእዝ ንባብ እያንዳንዱን ፊደል እየቆጠሩ በዜማ መልክ የሚነበብ ነው፤ ውርድ ንባብ ኀዘንና እንጉርጉሮ በሚመስል ድምፅ የሚነበብ ነው፤ በዕለተ ስቅለት የሚነበቡት የዳዊት መዝሙራት በዚህ ይነበባሉ፤ ቁም ንባብ ደግሞ መደበኛውና ጥርት ያለው ንባብ ነው።",
          },
          vers: ["Ps 22:2", "Luke 4:16-17"],
        },
        {
          tekst: {
            no: "Mange kirkeord kommer fra samme rot. Verbet ቀደሰ betyr «lovpriste, helliget». Av det kommer ቅዱስ (hellig), ቅዳሴ (liturgien), መቅደስ (helligdommen) og ቅድስት (den hellige, midtrommet i kirka). Kjenner man roten, forstår man mange ord.",
            am: "ብዙ የቤተ ክርስቲያን ቃላት ከአንድ ሥር ይገኛሉ። «ቀደሰ» አመሰገነ፣ ቀደሰ ማለት ነው፤ ከእርሱ «ቅዱስ»፣ «ቅዳሴ»፣ «መቅደስ»ና «ቅድስት» ይገኛሉ። ሥሩን ያወቀ ብዙ ቃላትን ያስተውላል።",
          },
          vers: ["Lev 19:2", "1Pet 1:15-16"],
        },
        {
          tekst: {
            no: "Slik hilser man på ge'ez: ሰላም ለከ እኁየ – «Fred være med deg, min bror.» Svaret er ወሰላም ለከ – «Og fred være med deg.» Spør man መኑ ስምከ?, betyr det «Hva heter du?»",
            am: "በግእዝ ሰላምታ እንዲህ ነው፦ «ሰላም ለከ እኁየ – ሰላም ላንተ ይሁን ወንድሜ»፤ መልሱም «ወሰላም ለከ – ሰላም ላንተም» ነው። «መኑ ስምከ?» ማለት «ስምህ ማን ነው?» ማለት ነው።",
          },
          vers: ["Ruth 2:4"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Kirkas lærde (ሊቃውንት)", am: "ሊቃውንተ ቤተ ክርስቲያን" },
      tekst: {
        no: "«ዘእንበለ ፊደል ኢይትነገር ወንጌል» – «Uten bokstaver blir evangeliet ikke forkynt (tolket).» De lærde sier dette for å vise at både å skrive, lese, tolke og forklare de hellige bøkene hviler på ፊደል.",
        am: "«ዘእንበለ ፊደል ኢይትነገር ወንጌል፤ ያለ ፊደል ወንጌል አይተረጐምም።» ለመጻፍም ሆነ ለማንበብ፣ ለመተርጐምም ሆነ ለማመሥጠር ፊደላት ታላቅ ድርሻ እንዳላቸው ሲያመለክቱ ነው።",
      },
      kilde: "Mahibere Kidusan: ሰዋስወ ግእዝ og ፬ቱ ሆሄያት (eotcmk.org)",
    },
    {
      navn: { no: "Liqe Siltanat Habte Mariam Workneh", am: "ሊቀ ሥልጣናት ሀብተ ማርያም ወርቅነህ" },
      tekst: {
        no: "ፊደል er «sinnets speil» (መጽሔተ አእምሮ), «visdommens kilde» (ነቅዐ ጥበብ), «den blindes fører» (መራሔ ዕውር), fordi den leder mennesket fra uvitenhetens mørke til kunnskapens lys, «den som rydder veien» (ጸያሔ ፍኖት) og «bøkenes hode» (ርእሰ መጻሕፍት), for uten bokstaver kan ingen bok skrives.",
        am: "ፊደል መጽሔተ አእምሮ ነው፤ የአእምሮ መገመቻ፣ የምሥጢር መመልከቻ ነውና። ነቅዐ ጥበብ ነው፤ የጥበብ ሁሉ መገኛ ነውና። መራሔ ዕውር ነው፤ ሰውን ከድንቁርና ጨለማ አውጥቶ ወደ ዕውቀት ብርሃን ይመራልና። ጸያሔ ፍኖት ነው፤ ድንቁርናን ጠርጎ ከፍጹም ዕውቀት ያደርሳልና። ርእሰ መጻሕፍት ነው፤ ያለ ፊደል ምንም መጻፍ አይቻልምና።",
      },
      kilde: "«ጥንታዊ የኢትዮጵያ ትምህርት», gjengitt i Mahibere Kidusan: ፊደል og ሰዋስወ ግእዝ (eotcmk.org)",
    },
    {
      navn: { no: "Kirkas lærde – bokstavene og troen", am: "ሊቃውንት – ፊደላትና ትምህርተ ሃይማኖት" },
      tekst: {
        no: "Hver bokstav minner om noe Gud er eller har gjort: «ሀ – ሀልዎቱ ለአብ እምቅድመ ዓለም: Faderen var til før verden. ለ – ለብሰ ሥጋ እምድንግል: Ordet ble kjød av Jomfruen. ሐ – ሐመ ወሞተ እግዚእነ: Vår Herre led og døde. መ – መንክር ግብሩ ለእግዚአብሔር: Guds gjerninger er underfulle. … ፈ – ፈጠረ ሰማየ ወምድረ: Han skapte himmel og jord.»",
        am: "«ሀ፦ ሀልዎቱ ለአብ እምቅድመ ዓለም፤ የአብ አኗኗር ከዓለም በፊት ነው። ለ፦ ለብሰ ሥጋ እምድንግል፤ አካላዊ ቃል ከድንግል ሥጋን ተዋሐደ። ሐ፦ ሐመ ወሞተ እግዚእነ፤ ጌታችን መከራን ተቀብሎ ሞተ። መ፦ መንክር ግብሩ ለእግዚአብሔር፤ የእግዚአብሔር ሥራው ድንቅ ነው። … ፈ፦ ፈጠረ ሰማየ ወምድረ፤ ሰማይና ምድርን ፈጠረ።»",
      },
      kilde: "Mahibere Kidusan: ፊደል (Diakon Abiy Muluqen, eotcmk.org)",
    },
    {
      navn: { no: "Kirkas lærere om diakonens rop", am: "ሊቃውንት ስለ ዲያቆኑ ትእዛዝ" },
      tekst: {
        no: "Da Herren steg ned til dødsriket, sa Adam til sjelene der: «ተንሥኡ ለጸሎት – Stå opp til bønn!» De svarte: «Herre, vær oss nådig.» Herren sa: «ሰላም ለኵልክሙ – Fred være med dere alle», og de svarte: «ምስለ መንፈስከ – Og med din ånd.» Derfor er diakonen i ቅዳሴ et bilde på Adam, og presten et bilde på Kristus.",
        am: "ጌታችን ወደ ሲኦል በወረደ ጊዜ አዳም በዚያ የነበሩትን ነፍሳት «ተንሥኡ ለጸሎት፤ ለጸሎት ተነሡ» አላቸው፤ እነርሱም «እግዚኦ ተሣሀለነ፤ አቤቱ ይቅር በለን» አሉ። ጌታም «ሰላም ለኵልክሙ፤ ሰላም ለእናንተ ይሁን» አላቸው፤ እነርሱም «ምስለ መንፈስከ፤ ከመንፈስህ ጋራ» አሉ። ዛሬም በሥርዓተ ቅዳሴ ዲያቆኑ የአዳም፣ ካህኑ የጌታችን የኢየሱስ ክርስቶስ ምሳሌ ሆነው ያገለግላሉ።",
      },
      kilde: "Mahibere Kidusan: የጌታችን ኢየሱስ ክርስቶስ ሞት (ሰሙነ ሕማማት) (eotcmk.org)",
    },
  ],
  ord: [
    { ord: "ግእዝ", forklaring: { no: "kirkas gamle språk; også navnet på bokstavens første form", am: "የቤተ ክርስቲያን ልሳን፤ የፊደል የመጀመሪያው ዘር" } },
    { ord: "ፊደል", forklaring: { no: "bokstav, skrift; av ፈደለ, «å skrive»", am: "ጽሕፈት፤ «ፈደለ – ጻፈ» ከሚለው የተገኘ" } },
    { ord: "አኀዝ", forklaring: { no: "tall; av አኀዘ, «å telle»", am: "ቁጥር" } },
    { ord: "ልሳን", forklaring: { no: "tunge, språk", am: "አንደበት፣ ቋንቋ" } },
    { ord: "ታቦት", forklaring: { no: "paktens ark; Guds bolig i helligdommen", am: "የልዑል እግዚአብሔር ማደሪያ" } },
    { ord: "ጽላት", forklaring: { no: "tavlen med Guds ord og navn", am: "ሰሌዳ፤ ቃሉ የተጻፈበት" } },
    { ord: "መንበር", forklaring: { no: "tronen som ታቦቱ står på", am: "የታቦት ማስቀመጫ" } },
    { ord: "መቅደስ", forklaring: { no: "helligdommen, det innerste rommet der ታቦቱ står", am: "ታቦቱ የሚኖርበት ውስጠኛው ክፍል" } },
    { ord: "ቅድስት", forklaring: { no: "«den hellige»; midtrommet, der nattverden deles ut", am: "ምእመናን የሚቆርቡበት መካከለኛው ክፍል" } },
    { ord: "ቅኔ ማኅሌት", forklaring: { no: "det ytterste rommet, der sangerne står og lovsynger", am: "መዘምራን ቆመው የሚያመሰግኑበት የውጭኛው ክፍል" } },
    { ord: "ዐውደ ምሕረት", forklaring: { no: "«nådens gård»; den åpne plassen rundt kirka", am: "በቤተ ክርስቲያን ዙሪያ ያለው ዐደባባይ" } },
    { ord: "ቅዳሴ", forklaring: { no: "liturgien; av ቀደሰ, «å lovprise, hellige»", am: "ቅድስና፣ ምስጋና" } },
    { ord: "ማኅሌት", forklaring: { no: "lovsang med Yareds melodier, ofte hele natten før en høytid", am: "የሌሊት የምስጋና ዜማ" } },
    { ord: "ቅኔ", forklaring: { no: "lovsangsdikt på ge'ez", am: "በግእዝ የሚቀኝ የምስጋና ግጥም" } },
    { ord: "መሶበ ወርቅ", forklaring: { no: "«gullkurven» som diakonen bærer offerbrødet i, på hodet, til መቅደስ", am: "ዲያቆን መሥዋዕቱን በራሱ ተሸክሞ ወደ መቅደስ የሚያቀርብበት" } },
    { ord: "ጻሕል", forklaring: { no: "disken som Kristi kropp legges på", am: "የጌታችን ሥጋ የሚቀመጥበት ጐድጓዳ ወጭት" } },
    { ord: "ጽዋዕ", forklaring: { no: "kalken for Kristi blod", am: "የክቡር ደሙ ማቅረቢያ" } },
    { ord: "ጽና · ጽንሓሕ", forklaring: { no: "røkelseskaret", am: "የዕጣን ማጠኛ" } },
    { ord: "ዕጣን", forklaring: { no: "røkelse, en offergave med god duft", am: "መልካም መዓዛ ያለው መባ" } },
    { ord: "አትሮንስ", forklaring: { no: "bokstolen for ቅዳሴ-boka og andre bøker", am: "መጽሐፈ ቅዳሴ የሚቀመጥበት" } },
    { ord: "መቋሚያ", forklaring: { no: "bønnestav; sangerne bruker den i ማኅሌት", am: "የጸሎትና የዜማ ምርኵዝ" } },
    { ord: "ጸናጽል", forklaring: { no: "sistrum, et klingende instrument av metall", am: "የሚንሿሿ የዜማ መሣሪያ" } },
    { ord: "ከበሮ", forklaring: { no: "kirketromme", am: "በቆዳ የተለበጠ የዜማ መሣሪያ" } },
    { ord: "ማተብ", forklaring: { no: "snoren om halsen, tegnet på at vi er døpt", am: "በአንገት የሚታሰር የክርስትና ምልክት" } },
    { ord: "ነጠላ", forklaring: { no: "tynt, hvitt sjal av bomull", am: "ቀጭን ነጭ የጥጥ ልብስ" } },
    { ord: "ጥምጣም", forklaring: { no: "hvitt tøy viklet rundt hodet, båret av prester og lærere", am: "ካህናትና መምህራን በራሳቸው የሚጠመጥሙት ነጭ ልብስ" } },
    { ord: "ካባ", forklaring: { no: "kappe som prester, diakoner og sangere bærer på høytider", am: "ካህናትና መዘምራን በበዓል የሚለብሱት መደረቢያ" } },
    { ord: "ልብሰ ተክህኖ", forklaring: { no: "prestenes og diakonenes hellige klær under gudstjenesten", am: "የካህናትና የዲያቆናት የአገልግሎት ልብስ" } },
    { ord: "አክሊል", forklaring: { no: "kronen prestene bærer i ቅዳሴ, med et kors på", am: "ካህናት በቅዳሴ የሚደፉት መስቀል ያለበት ዘውድ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvorfor ber kirka på ge'ez, når folk flest snakker amharisk?", am: "ሕዝቡ አማርኛ እየተናገረ ቤተ ክርስቲያን ለምን በግእዝ ትጸልያለች?" },
      svar: {
        no: "Bibelen, ቅዳሴ og Yareds sanger ble skrevet på ge'ez, og melodiene hører til ge'ez-ordene. Én bokstav kan endre meningen, så kirka vokter ordene nøye. Lesningene og noen deler leses på amharisk, slik at alle forstår.",
        am: "መጻሕፍት ቅዱሳት፣ ቅዳሴና የቅዱስ ያሬድ ዜማ በግእዝ ተጻፉ፤ ዜማውም ከግእዙ ቃል ጋር የተያያዘ ነው። አንዲት ፊደል ትርጉም ስለምትለውጥ ቤተ ክርስቲያን ቃላቱን በጥንቃቄ ትጠብቃለች። ሁሉም እንዲያስተውል ምንባባትና አንዳንድ ክፍሎች በአማርኛ ይነበባሉ።",
      },
    },
    {
      sporsmal: { no: "Hvem oversatte Bibelen til ge'ez?", am: "መጻሕፍት ቅዱሳትን ወደ ግእዝ የተረጐሙ እነማን ናቸው?" },
      svar: {
        no: "Abba Selama (Frumentius) begynte på 300-tallet. De ni hellige, som kom omkring år 480, oversatte hele Bibelen fra syrisk og gresk.",
        am: "አባ ሰላማ ከሣቴ ብርሃን በአራተኛው መቶ ክፍለ ዘመን ጀመሩ። በ፬፻፹ ዓ.ም ገደማ የመጡት ተስዓቱ ቅዱሳን ከሱርስትና ከጽርዕ ወደ ግእዝ ተረጐሙ።",
      },
    },
    {
      sporsmal: { no: "Hva heter de sju formene av en bokstav?", am: "የፊደል ሰባቱ ዘሮች ስማቸው ማን ነው?" },
      svar: {
        no: "ግእዝ, ካዕብ, ሣልስ, ራብዕ, ኃምስ, ሳድስ og ሳብዕ – for eksempel ሀ ሁ ሂ ሃ ሄ ህ ሆ.",
        am: "ግእዝ፣ ካዕብ፣ ሣልስ፣ ራብዕ፣ ኃምስ፣ ሳድስና ሳብዕ፤ ለምሳሌ ሀ ሁ ሂ ሃ ሄ ህ ሆ።",
      },
    },
    {
      sporsmal: { no: "Hvorfor heter det «ንጉሡ ሠ» og «እሳቱ ሰ»?", am: "«ንጉሡ ሠ» እና «እሳቱ ሰ» የሚባሉት ለምንድን ነው?" },
      svar: {
        no: "De uttales likt på amharisk, men gir ulik mening. Kallenavnene viser hvilken bokstav et kjent ord skrives med: ንጉሥ (konge) og እሳት (ild). ሠረቀ betyr «ble født», ሰረቀ betyr «stjal».",
        am: "በአማርኛ በአንድ ድምፅ ይጠራሉ፤ ትርጉም ግን ይለውጣሉ። ስሞቹ በየትኛው ቃል እንደሚገኙ ያሳያሉ፤ «ንጉሥ» እና «እሳት»። «ሠረቀ» ተወለደ፣ «ሰረቀ» ሰረቀ ማለት ነው።",
      },
    },
    {
      sporsmal: { no: "Skriv 2019 med ge'ez-tall. Hvorfor er det ingen null?", am: "፳፻፲፱ን አንብብ። በግእዝ አኀዝ ዜሮ ለምን የለም?" },
      svar: {
        no: "፳፻፲፱ (20 hundre + 10 + 9). Ge'ez har egne tegn for tierne, for 100 (፻) og for 10 000 (፼), og legger dem sammen. Derfor trengs ingen null.",
        am: "፳፻፲፱ ሁለት ሺህ አሥራ ዘጠኝ ነው (፳ መቶ + ፲ + ፱)። ግእዝ ለአሥሮቹ፣ ለመቶ (፻) እና ለአሥር ሺህ (፼) የራሱ ምልክት ስላለው እየደመረ ይጽፋል፤ ስለዚህ ዜሮ አያስፈልገውም።",
      },
    },
    {
      sporsmal: { no: "Hva betyr ተንሥኡ ለጸሎት, og hva svarer vi?", am: "«ተንሥኡ ለጸሎት» ማለት ምን ማለት ነው? ምንስ እንመልሳለን?" },
      svar: {
        no: "«Stå opp til bønn!» Vi svarer እግዚኦ መሐረነ ክርስቶስ – «Herre, forbarm deg over oss, Kristus.»",
        am: "«ለጸሎት ተነሡ» ማለት ነው። «እግዚኦ መሐረነ ክርስቶስ – አቤቱ ክርስቶስ ይቅር በለን» ብለን እንመልሳለን።",
      },
    },
    {
      sporsmal: { no: "Hvilke ord i kirka kommer fra hebraisk og gresk?", am: "ከዕብራይስጥና ከጽርዕ የመጡ የቤተ ክርስቲያን ቃላት የትኞቹ ናቸው?" },
      svar: {
        no: "ሃሌ ሉያ («lov Herren») og አሜን («la det skje») fra hebraisk, og ኪርያላይሶን («Herre, forbarm deg») fra gresk.",
        am: "«ሃሌ ሉያ» (እግዚአብሔርን አመስግኑ) እና «አሜን» (ይሁን ይደረግልኝ) ከዕብራይስጥ፣ «ኪርያላይሶን» (አቤቱ ማረን) ከጽርዕ።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: ፊደል", url: "https://eotcmk.org/a/%e1%8d%8a%e1%8b%b0%e1%88%8d/" },
    { navn: "Mahibere Kidusan: ሰዋስወ ግእዝ", url: "https://eotcmk.org/a/%e1%88%b0%e1%8b%8b%e1%88%b5%e1%8b%88-%e1%8c%8d%e1%8a%a5%e1%8b%9d/" },
    { navn: "Mahibere Kidusan: ሰዋስወ ግእዝ (ክፍል ሁለት)", url: "https://eotcmk.org/a/%e1%88%b0%e1%8b%8b%e1%88%b5%e1%8b%88-%e1%8c%8d%e1%8a%a5%e1%8b%9d-%e1%8a%ad%e1%8d%8d%e1%88%8d-%e1%88%81%e1%88%88%e1%89%b5/" },
    { navn: "Mahibere Kidusan: አይቴ ብሔሩ ለግእዝ?", url: "https://eotcmk.org/a/%e1%8a%a0%e1%8b%ad%e1%89%b4-%e1%89%a5%e1%88%94%e1%88%a9-%e1%88%88%e1%8c%8d%e1%8a%a5%e1%8b%9d/" },
    { navn: "Mahibere Kidusan: ልሳነ አርድእት", url: "https://eotcmk.org/a/%e1%88%8d%e1%88%b3%e1%8a%90-%e1%8a%a0%e1%88%ad%e1%8b%b5%e1%8a%a5%e1%89%b5/" },
    { navn: "Mahibere Kidusan: “ሃይማኖትና ሀገር ወጣት ሲረከበው ነው …”", url: "https://eotcmk.org/a/%e1%88%83%e1%8b%ad%e1%88%9b%e1%8a%96%e1%89%b5%e1%8a%93-%e1%88%80%e1%8c%88%e1%88%ad-%e1%8b%88%e1%8c%a3%e1%89%b5-%e1%88%b2%e1%88%a8%e1%8a%a8%e1%89%a0%e1%8b%8d-%e1%8a%90%e1%8b%8d-%e1%88%80/" },
    { navn: "Mahibere Kidusan: አባ ገሪማ ዘመደራ", url: "https://eotcmk.org/a/%e1%8a%a0%e1%89%a3-%e1%8c%88%e1%88%aa%e1%88%9b-%e1%8b%98%e1%88%98%e1%8b%b0%e1%88%ab-2/" },
    { navn: "Mahibere Kidusan: ፬ቱ ሆሄያት", url: "https://eotcmk.org/a/%e1%8d%ac%e1%89%b1-%e1%88%86%e1%88%84%e1%8b%ab%e1%89%b5/" },
    { navn: "Mahibere Kidusan: ሞክሼ ፊደላት", url: "https://eotcmk.org/a/%e1%88%9e%e1%8a%ad%e1%88%bc-%e1%8d%8a%e1%8b%b0%e1%88%8b%e1%89%b5/" },
    { navn: "Mahibere Kidusan: ትኩረት ለፊደላት", url: "https://eotcmk.org/a/%e1%89%b5%e1%8a%a9%e1%88%a8%e1%89%b5-%e1%88%88%e1%8d%8a%e1%8b%b0%e1%88%8b%e1%89%b5/" },
    { navn: "Mahibere Kidusan: አኀዝ", url: "https://eotcmk.org/a/%e1%8a%a0%e1%8a%80%e1%8b%9d/" },
    { navn: "Mahibere Kidusan: የግእዝ ቁጥሮች አጻጻፍ", url: "https://eotcmk.org/a/%e1%8b%a8%e1%8c%8d%e1%8a%a5%e1%8b%9d-%e1%89%81%e1%8c%a5%e1%88%ae%e1%89%bd-%e1%8a%a0%e1%8c%bb%e1%8c%bb%e1%8d%8d/" },
    { navn: "Mahibere Kidusan: ሥርዓተ ንባብ", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%95%e1%89%a3%e1%89%a5-3/" },
    { navn: "Mahibere Kidusan: የንባብ ምልክቶች", url: "https://eotcmk.org/a/%e1%8b%a8%e1%8a%95%e1%89%a3%e1%89%a5-%e1%88%9d%e1%88%8d%e1%8a%ad%e1%89%b6%e1%89%bd/" },
    { navn: "Mahibere Kidusan: ንዑስ አገባብ", url: "https://eotcmk.org/a/%e1%8a%95%e1%8b%91%e1%88%b5-%e1%8a%a0%e1%8c%88%e1%89%a3%e1%89%a5/" },
    { navn: "Mahibere Kidusan: የጌታችን ኢየሱስ ክርስቶስ ሞት (ሰሙነ ሕማማት)", url: "https://eotcmk.org/a/%e1%8b%a8%e1%8c%8c%e1%89%b3%e1%89%bd%e1%8a%95-%e1%88%9e%e1%89%b5-%e1%88%b0%e1%88%99%e1%8a%90-%e1%88%95%e1%88%9b%e1%88%9b%e1%89%b5/" },
    { navn: "Mahibere Kidusan: «ጸልዩ በእንተ ሰላም፤ ስለ ሰላም ጸልዩ» (ሥርዓተ ቅዳሴ)", url: "https://eotcmk.org/a/%e1%8c%b8%e1%88%8d%e1%8b%a9-%e1%89%a0%e1%8a%a5%e1%8a%95%e1%89%b0-%e1%88%b0%e1%88%8b%e1%88%9d%e1%8d%a4%e1%88%b5%e1%88%88-%e1%88%b0%e1%88%8b%e1%88%9d-%e1%8c%b8%e1%88%8d%e1%8b%a9-%e1%88%a5/" },
    { navn: "Mahibere Kidusan: በዓለ ቅድስት ሥላሴ", url: "https://eotcmk.org/a/%e1%89%a0%e1%8b%93%e1%88%88-%e1%89%85%e1%8b%b5%e1%88%b5%e1%89%b5-%e1%88%a5%e1%88%8b%e1%88%b4/" },
    { navn: "Mahibere Kidusan: ሱባኤ፣ ምንነቱ፣ ሥርዓቱ", url: "https://eotcmk.org/a/%e1%88%b1%e1%89%a3%e1%8a%a4%e1%8d%a3%e1%88%9d%e1%8a%95%e1%8a%90%e1%89%b1%e1%8d%a3%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b1/" },
    { navn: "Mahibere Kidusan: ሥርዓተ አምልኮ (ክፍል ዐራት)", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae-4/" },
    { navn: "ethiopianorthodox.org: The Introduction of Christianity / Expansion c. 350–650 (Sergew Hable Sellassie og Tadesse Tamerat, 1970)", url: "https://www.ethiopianorthodox.org/english/ethiopian/prechristian.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Ethiopian Liturgy (PDF)", url: "https://www.ethiopianorthodox.org/biography/englishethiopianliturgy.pdf" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Our Father på ge'ez, amharisk og engelsk (PDF)", url: "https://www.ethiopianorthodox.org/churchmusic/liturgyinenglish/ourfather/OurFathertriling.pdf" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Hail Mary på ge'ez, amharisk og engelsk (PDF)", url: "https://www.ethiopianorthodox.org/churchmusic/liturgyinenglish/ourfather/HailMarytriling.pdf" },
  ],
  utkast: true,
};
