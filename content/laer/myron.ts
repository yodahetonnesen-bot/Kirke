import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ሜሮን:
// søndagsskolepensumet «መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን», 8. klasse, kap. 3 (om de 36 salvingene,
// ordene presten sier, Laodikea-møtet og myron-kokingen i 1998 e.e.k.), kidanemihiret.org (ምስጢረ ሜሮን),
// erkebiskop abune Melketsedek: «የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስትያን እምነት እና ትምህርት» (gjengitt på sewasew.com),
// ethiopianorthodox.org (The Sacrament of Confirmation), Mahibere Kidusans barneside (ሰባቱ ምሥጢራት / ጥምቀት),
// og Tewobel (ቅብዐ በለሳን / ቅብዐ ሜሮን ምንድነው?) med sitater fra ፍትሐ ነገሥት, ዲድስቅልያ og መጽሐፈ ምሥጢር.
// Usikkert: Kildene jeg fant sier ikke klart hvordan en som er døpt i en annen kirke blir tatt opp i Tewahedo-kirka
// (om personen blir døpt og salvet, eller bare salvet med myron). Derfor står det bare at presten og biskopen avgjør
// dette etter kirkas regler. Presten bør fylle inn.
// Usikkert: Om hvor den første myron kom fra, finnes to tradisjoner: ፍትሐ ነገሥት (balsamtreet som vokste der Jesu
// svette falt på flukten til Egypt) og ethiopianorthodox.org (krydderne som var gjort klare til Jesu gravlegging).
// Begge er nevnt.
// Usikkert: Forklaringen på hvorfor øyne, ører, munn, hender og føtter salves, er fra et søndagsskole-dokument på
// Scribd (ሰባቱ ምስጢራተ ቤተክርስቲያን) med ukjent forfatter.
// Usikkert: At sitatet «ቅብዓ ሜሮንም የእምነቴ ማኅተም ነው» er fra መጽሐፈ ምሥጢር av abba Giyorgis av Gasicha, bygger
// på hvordan Tewobel-innlegget er satt opp. Bør sjekkes i boka.
export const myron: Tema = {
  slug: "myron",
  del: "sakramentene",
  tittel: { no: "Myron", am: "ምሥጢረ ሜሮን" },
  undertittel: { no: "Den hellige ånds segl", am: "ማኅተመ መንፈስ ቅዱስ" },
  bilde: "handkorsTigray",
  ingress: {
    no:
      "Myron er det andre av kirkas sju sakramenter. Rett etter dåpen blir vi salvet med den hellige oljen myron og får Den hellige ånds gave. Myron er et segl: et merke som viser at vi tilhører Gud. Den gis bare én gang og gjentas aldri.",
    am:
      "ሜሮን ከሰባቱ ምሥጢራተ ቤተ ክርስቲያን ሁለተኛው ነው። ከጥምቀት በኋላ ወዲያው በቅዱሱ ቅባት በሜሮን እንቀባለን፤ ሀብተ መንፈስ ቅዱስንም እንቀበላለን። ሜሮን የእግዚአብሔር ገንዘቦች መሆናችንን የሚያሳይ ማኅተም ነው። አንድ ጊዜ ብቻ ይፈጸማል፤ አይደገምም።",
  },
  hovedvers: "2Cor 1:21-22",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er myron?", am: "ሜሮን ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ሜሮን kommer fra gresk og betyr en olje med søt duft som gleder hjertet. Myron er en hellig olje som lages av mange planter som dufter godt – blant annet balsam og røkelse, omtrent 40 slags.",
            am: "«ሜሮን» የግሪክ ቃል ሲሆን ልብን የሚማርክ ጣፋጭ መዓዛ ያለው ዘይት ማለት ነው። ከበለሳንና ከዕጣን እንጨቶች፣ በአጠቃላይ 40 ከሚያህሉ መልካም መዓዛ ካላቸው ዕፀዋት ተቀምሞ የሚዘጋጅ ቅዱስ ቅባት ነው።",
          },
          vers: ["Exod 30:25"],
        },
        {
          tekst: {
            no: "Myron kalles ማኅተመ መንፈስ ቅዱስ – Den hellige ånds segl. Et segl viser hvem noe tilhører. Slik viser myron at vi er Guds barn og at Den hellige ånd bor i oss.",
            am: "ሜሮን «ማኅተመ መንፈስ ቅዱስ» ይባላል። ማኅተም ያለበት ነገር የማን እንደ ሆነ እንዲታወቅ፣ ምእመናንም የመንፈስ ቅዱስ ገንዘቦች መሆናቸው የሚታወቀው በቅብዐ ሜሮን ነው።",
          },
          vers: ["2Cor 1:21-22", "Eph 1:13"],
        },
        {
          tekst: {
            no: "Dåpen, myron og nattverden hører sammen. De kalles sakramentene som gir oss barnekåret og et nytt liv. Når et barn blir døpt, får det alle tre samme dag: først dåp, så myron, så nattverd.",
            am: "ጥምቀት፣ ሜሮንና ቍርባን የልጅነት ጸጋን አዲስ ሕይወትን የሚያሰጡ ምሥጢራት ይባላሉ። ሕፃናት ክርስትና ሲነሡ ሦስቱም በአንድ ቀን ይፈጸማሉ፤ መጀመሪያ ጥምቀት፣ ቀጥሎ ሜሮን፣ ከዚያ ቍርባን።",
          },
          vers: ["1John 5:8"],
        },
        {
          tekst: {
            no: "Myron har en side vi ser og en side vi ikke ser. Vi ser oljen og at presten salver oss. Vi ser ikke at Den hellige ånd kommer og bor i oss.",
            am: "ሜሮን የሚታይ አገልግሎትና የማይታይ ጸጋ አለው። ቅባቱንና ካህኑ ሲቀባን እናያለን፤ መንፈስ ቅዱስ በእኛ ማደሩን ግን በዓይናችን አናይም።",
          },
        },
        {
          tekst: {
            no: "Myron er ikke den samme oljen som i ቀንዲል, de sykes salving. Oljen i ቀንዲል (ቅብዐ ቅዱስ) lages av ren olivenolje og gis mange ganger når noen er syke. Myron gir Ånden og barnekåret og gis bare én gang.",
            am: "ቅብዐ ሜሮንና ቅብዐ ቀንዲል ልዩነት አላቸው። ቅብዐ ቀንዲል (ቅብዐ ቅዱስ) ከንጹሕ የወይራ ዘይት ይዘጋጃል፤ ሰው ሲታመም ለፈውስ የሚደረግ ስለሆነ ይደገማል። ቅብዐ ሜሮን ግን የልጅነት ጸጋን ለማግኘትና መንፈስ ቅዱስ እንዲያድርብን የሚደረግ ነው፤ አይደገምም።",
          },
          vers: ["Jas 5:14"],
        },
      ],
    },
    {
      id: "innstiftet",
      tittel: { no: "Jesus innstiftet myron", am: "ምሥጢረ ሜሮንን የመሠረተው ጌታችን ነው" },
      punkter: [
        {
          tekst: {
            no: "Jesus lovte disiplene Den hellige ånd: «Jeg sender det min Far har lovet, over dere. Bli i byen til dere blir kledd med kraft fra det høye.»",
            am: "ጌታችን ለደቀ መዛሙርቱ የመንፈስ ቅዱስን ተስፋ ሰጣቸው፤ «አባቴ የሰጠውን ተስፋ እኔ እልክላችኋለሁ፤ እናንተ ግን ከላይ ኃይል እስክትለብሱ ድረስ በኢየሩሳሌም ከተማ ቆዩ» አለ።",
          },
          vers: ["Luke 24:49", "John 14:16-17"],
        },
        {
          tekst: {
            no: "Etter oppstandelsen blåste Jesus på disiplene og sa: «Ta imot Den hellige ånd.» Før han for opp til himmelen, løftet han hendene og velsignet dem.",
            am: "ከትንሣኤው በኋላ ደቀ መዛሙርቱ በዝግ ቤት ሳሉ ተገልጦ እፍ አለባቸውና «መንፈስ ቅዱስን ተቀበሉ» አላቸው። ከዕርገቱ በፊትም እጁን አንሥቶ ባረካቸው።",
          },
          vers: ["John 20:22", "Luke 24:50"],
        },
        {
          tekst: {
            no: "Da Jesus ble døpt i Jordan, kom Den hellige ånd ned over ham som en due med en gang han steg opp av vannet. Derfor får vi også Ånden rett etter dåpen.",
            am: "ጌታችን በዮርዳኖስ ተጠምቆ ከውኃ እንደ ወጣ ሳይውል ሳያድር መንፈስ ቅዱስ በርግብ አምሳል በራሱ ላይ አረፈ። ስለዚህ እኛም ከጥምቀት በኋላ ወዲያው ሀብተ መንፈስ ቅዱስን እንቀበላለን።",
          },
          vers: ["Matt 3:16"],
        },
        {
          tekst: {
            no: "På pinsedagen ble apostlene fylt av Den hellige ånd, slik Jesus hadde lovet.",
            am: "በበዓለ ሃምሳ ጌታችን እንደ ተናገረው ቅዱሳን ሐዋርያት መንፈስ ቅዱስን ተሞሉ።",
          },
          vers: ["Acts 2:1-4"],
        },
      ],
    },
    {
      id: "apostlene",
      tittel: { no: "Fra apostlenes hender til myron", am: "ከአንብሮተ ዕድ ወደ ቅብዐ ሜሮን" },
      punkter: [
        {
          tekst: {
            no: "I Samaria var folk døpt, men hadde ikke fått Den hellige ånd. Apostlene Peter og Johannes ba for dem og la hendene på dem, og de fikk Den hellige ånd.",
            am: "በሰማርያ ሰዎች ተጠምቀው ነበር፤ መንፈስ ቅዱስ ግን ገና አልወረደባቸውም ነበር። ሐዋርያት ጴጥሮስና ዮሐንስ ጸለዩላቸው፤ እጃቸውንም ጫኑባቸው፤ መንፈስ ቅዱስንም ተቀበሉ።",
          },
          vers: ["Acts 8:14-17"],
        },
        {
          tekst: {
            no: "I Efesos døpte Paulus noen disipler. Da han la hendene på dem, kom Den hellige ånd over dem.",
            am: "በኤፌሶን ቅዱስ ጳውሎስ ደቀ መዛሙርትን አጠመቀ፤ እጁንም በጫነባቸው ጊዜ መንፈስ ቅዱስ ወረደባቸው።",
          },
          vers: ["Acts 19:5-6"],
        },
        {
          tekst: {
            no: "Dette kalles håndspåleggelse, አንብሮተ ዕድ. Da det ble svært mange kristne, kunne apostlene ikke være overalt. Derfor bestemte apostlene og fedrene at de nydøpte skulle salves med myron i stedet. Biskopene ber over myron og sender den til kirkene.",
            am: "ይህ «አንብሮተ ዕድ» (እጅ መጫን) ይባላል። ተጠማቂዎች ሲበዙ ሐዋርያት በሁሉ ቦታ ተገኝተው ሊፈጽሙት አልቻሉም። ስለዚህ ኤጲስ ቆጶሳት ሜሮን እያዘጋጁ በላዩ እየጸለዩ ወደ አብያተ ክርስቲያናት እንዲልኩ፣ ተጠማቂዎችም በአንብሮተ ዕድ ፈንታ ሜሮን እንዲቀቡ ተወሰነ።",
          },
          andre: [{ no: "Kirkemøtet i Laodikea, kanon 48", am: "ጉባኤ ሎዶቅያ ቀኖና ፵፰" }],
        },
        {
          tekst: {
            no: "Johannes skriver at vi har en salving fra Den Hellige, og at denne salvingen blir i oss og lærer oss alt.",
            am: "ቅዱስ ዮሐንስ «እናንተም ከቅዱሱ ቅባት ተቀብላችኋል፥ ሁሉንም ታውቃላችሁ» ይላል፤ ይህም ቅባት በእኛ ይኖራል፤ ስለ ሁሉም ያስተምረናል።",
          },
          vers: ["1John 2:20", "1John 2:27"],
        },
        {
          tekst: {
            no: "Paulus skriver at det er Gud som har salvet oss, satt sitt segl på oss og gitt oss Ånden som pant i hjertene våre. Vi er beseglet med Den hellige ånd.",
            am: "ቅዱስ ጳውሎስ «በክርስቶስም ከእናንተ ጋር የሚያጸናንና የቀባን እግዚአብሔር ነው፥ ደግሞም ያተመን የመንፈሱንም መያዣ በልባችን የሰጠን እርሱ ነው» ይላል። በመንፈስ ቅዱስ ታትመናል።",
          },
          vers: ["2Cor 1:21-22", "Eph 1:13", "Eph 4:30"],
        },
      ],
    },
    {
      id: "gt",
      tittel: { no: "Salving i Det gamle testamentet", am: "ቅብዐት በብሉይ ኪዳን" },
      punkter: [
        {
          tekst: {
            no: "Gud lærte Moses å lage en hellig salveolje av gode krydder. Med den ble telthelligdommen og alle tingene i den salvet og gjort hellige. Oljen skulle ikke brukes til noe annet.",
            am: "እግዚአብሔር ለሙሴ ከመልካም ቅመሞች የተቀደሰ የቅብዓት ዘይት አዘገጃጀትን አስተማረው። የምስክሩ ድንኳንና ንዋያቱ ሁሉ በእርሱ ተቀብተው ተቀደሱ። ይህም ዘይት ለሌላ አገልግሎት አይውልም ነበር።",
          },
          vers: ["Exod 30:22-33", "Exod 40:9"],
        },
        {
          tekst: {
            no: "Prestene ble salvet: Moses helte salveoljen på hodet til Aron for å gjøre ham hellig til prestetjenesten.",
            am: "ካህናት ይቀቡ ነበር፤ ሙሴ አሮንን ለክህነት ይቀድሰው ዘንድ ከቅብዓቱ ዘይት በራሱ ላይ አፈሰሰ።",
          },
          vers: ["Lev 8:10-12", "Exod 30:30"],
        },
        {
          tekst: {
            no: "Kongene ble salvet: Samuel salvet David med oljen fra hornet, og fra den dagen kom Herrens Ånd over David med kraft.",
            am: "ነገሥታት ይቀቡ ነበር፤ ሳሙኤል የዘይቱን ቀንድ ወስዶ ዳዊትን ቀባው፤ «የእግዚአብሔርም መንፈስ ከዚያ ቀን ጀምሮ በዳዊት ላይ በኃይል መጣ።»",
          },
          vers: ["1Sam 16:13"],
        },
        {
          tekst: {
            no: "Jakob helte olje på steinen han hadde sovet på i Betel. Kirka lærer at Jakob her er et bilde på presten, steinen på de troende og oljen på myron.",
            am: "ያዕቆብ ተንተርሶት የነበረውን ድንጋይ ሐውልት አድርጎ አቆመው፤ በላዩም ዘይትን አፈሰሰበት። ያዕቆብ የካህናት፣ ድንጋዩ የምእመናን፣ ዘይቱም የቅብዐ ሜሮን ምሳሌ ነው።",
          },
          vers: ["Gen 28:18"],
        },
        {
          tekst: {
            no: "I Det gamle testamentet ble bare noen få salvet: prester og konger. Men i Det nye testamentet blir alle som er døpt, salvet med Den hellige ånd.",
            am: "በብሉይ ኪዳን የሚቀቡት ጥቂቶች፣ ካህናትና ነገሥታት ብቻ ነበሩ። በሐዲስ ኪዳን ግን የተጠመቁ ሁሉ በመንፈስ ቅዱስ ቅባት ይቀባሉ።",
          },
          vers: ["1John 2:20"],
        },
      ],
    },
    {
      id: "slik",
      tittel: { no: "Slik foregår salvingen", am: "ሜሮን እንዴት ይፈጸማል?" },
      punkter: [
        {
          tekst: {
            no: "Myron gis rett etter dåpen, samme dag – ikke dagen etter. Et lite barn blir salvet med en gang det er løftet opp av vannet, mens diakonen holder det.",
            am: "ሜሮን ከጥምቀት በኋላ ወዲያው ሳይውል ሳያድር ይፈጸማል። ተጠማቂው ሕፃን ከሆነ ከማጥመቂያው እንደ ወጣ በዲያቆኑ እጅ እያለ ይቀባል።",
          },
          vers: ["Matt 3:16", "Acts 8:17"],
        },
        {
          tekst: {
            no: "Presten ber over den døpte. Så blåser han på ansiktet hans, slik Jesus blåste på disiplene, og salver pannen.",
            am: "ካህኑ ሜሮኑን ይዞ በተጠማቂው ላይ ይጸልያል። ከዚያም እፍ ይልና ግንባሩን ይቀባዋል።",
          },
          vers: ["John 20:22"],
        },
        {
          tekst: {
            no: "Med høyre tommel salver presten 36 steder på kroppen, i korsets tegn: pannen, neseborene, leppene, ørene, øynene, brystet, hjertet, ryggen, navlen, armene, skuldrene, nakken, halsen, albuene, håndflatene og håndbakene, anklene, knærne og tærne.",
            am: "ካህኑ በቀኝ እጁ አውራ ጣት የተጠማቂውን ሠላሳ ስድስት ሕዋሳት በትእምርተ መስቀል ይቀባል፤ ግንባሩን፣ የአፍንጫውን በሮች፣ ከንፈሮቹን፣ ጆሮዎቹን፣ ዓይኖቹን፣ ደረቱን፣ ልቡን፣ ጀርባውን፣ እንብርቱን፣ እጆቹን፣ ትከሻዎቹን፣ ማጅራቱን፣ አንገቱን፣ ክርኖቹን፣ መዳፎቹንና አይበሉባዎቹን፣ የእግሩን መገናኛዎች፣ ጉልበቶቹንና ጣቶቹን።",
          },
        },
        {
          tekst: {
            no: "Mens han salver, sier presten: «Jeg salver deg med hellig olje til del i det evige liv», «Jeg salver deg med Guds segl som ikke kan løses», og «Jeg salver deg med trøstens olje.»",
            am: "ሲቀባም «ለዘላለም ሕይወት ሱታፌ ቅዱስ ቅባትን እቀባሃለሁ»፣ «በማይፈታ የአምላክ ማኅተም እቀባሃለሁ»፣ «አጽናኝ ቅባት እቀባሃለሁ» ይላል።",
          },
        },
        {
          tekst: {
            no: "Hele kroppen salves, fordi hele mennesket skal tilhøre Gud: øynene og ørene for å se og høre Guds ord, munnen for å si sannheten, hendene for å gjøre godt og føttene for å gå til kirka.",
            am: "ሰውነት ሁሉ የእግዚአብሔር ገንዘብ እንዲሆን ይቀባል፤ ዓይኖችና ጆሮዎች የእግዚአብሔርን ቃል ለማየትና ለመስማት፣ አፍ እውነትን ለመናገር፣ እጆች ለበጎ ሥራ፣ እግሮችም ወደ ቤተ ክርስቲያን ለመገስገስ ይቀባሉ።",
          },
          vers: ["1Cor 6:19-20"],
        },
        {
          tekst: {
            no: "Til slutt legger presten hånden på den døpte og velsigner: «Vær velsignet med de himmelske englenes velsignelse.» Så får den døpte hvite klær, og deretter nattverden.",
            am: "በመጨረሻ ካህኑ በተጠማቂው ላይ እጁን ጭኖ «በሰማያውያን መላእክት በረከት የተባረክ ሁን» ብሎ ይባርከዋል። ከዚያም ተጠማቂው ነጭ ልብስ ይለብሳል፤ ቀጥሎም ሥጋውንና ደሙን ይቀበላል።",
          },
          vers: ["Gal 3:27"],
        },
        {
          tekst: {
            no: "Det er presten som salver. Myron gis ikke av biskopen alene, slik noen andre kirker gjør, men av presten med myron som biskopene har velsignet.",
            am: "ሜሮንን የሚቀባው ካህኑ ነው። አንዳንዶች በጳጳሳት ብቻ እንዲፈጸም ያደርጋሉ፤ በኦርቶዶክሳውያን ዘንድ ግን ኤጲስ ቆጶሳት በባረኩት ሜሮን ቄሱ ይፈጽመዋል።",
          },
        },
      ],
    },
    {
      id: "en-gang",
      tittel: { no: "Én gang – den gjentas aldri", am: "ሜሮን አይደገምም" },
      punkter: [
        {
          tekst: {
            no: "Som dåpen gis myron bare én gang. Seglet fra Gud kan ikke løses opp. Kirka kaller det «Guds segl som ikke kan løses».",
            am: "ሜሮን እንደ ጥምቀት አንድ ጊዜ ብቻ የሚፈጸም፣ የማይደገም ምሥጢር ነው። «በማይፈታ የአምላክ ማኅተም» ታትመናልና።",
          },
          vers: ["Eph 4:30", "Eph 4:5"],
        },
        {
          tekst: {
            no: "Hvis vi synder etter dåpen, forlater ikke Den hellige ånd oss med en gang. Han venter på at vi skal angre og vende om – med mindre vi fornekter troen.",
            am: "በጥምቀት የተቀበልነው መንፈስ ቅዱስ ካልካድነው በቀር ምንም ኃጢአት ብንሠራ ንስሐ እስክንገባ ይጠብቀናል እንጂ አይለየንም።",
          },
          vers: ["Eph 4:30", "1John 1:9"],
        },
        {
          tekst: {
            no: "Hvordan en som er døpt i en annen kirke, blir tatt opp i Tewahedo-kirka, avgjør presten og biskopen etter kirkas regler. Den som ønsker å bli ortodoks, snakker derfor med presten. Men alle som tilhører kirka, har fått myron.",
            am: "በሌላ ቤተ ክርስቲያን የተጠመቀ ሰው ወደ ተዋሕዶ ቤተ ክርስቲያን ሲመጣ እንዴት እንደሚቀበል ካህናትና ኤጲስ ቆጶሳት በቤተ ክርስቲያን ሥርዓት መሠረት ይወስናሉ። ስለዚህ ኦርቶዶክሳዊ መሆን የሚፈልግ ከካህኑ ጋር ይነጋገራል። የቤተ ክርስቲያን ልጆች ሁሉ ግን ሜሮን ተቀብተዋል።",
          },
        },
      ],
    },
    {
      id: "gaver",
      tittel: { no: "Hva gir myron oss?", am: "በሜሮን የምናገኛቸው ጸጋዎች" },
      punkter: [
        {
          tekst: {
            no: "Den hellige ånds gave (ሀብተ መንፈስ ቅዱስ). Vi blir et tempel for Den hellige ånd.",
            am: "ሀብተ መንፈስ ቅዱስ፤ የመንፈስ ቅዱስ ቤተ መቅደስ እንሆናለን።",
          },
          vers: ["1Cor 6:19-20", "Rom 8:9"],
        },
        {
          tekst: {
            no: "Barnekåret blir styrket. I dåpen blir vi født på nytt. Med myron vokser vi og blir sterke, slik et barn ikke bare skal bli født, men også vokse opp.",
            am: "ልጅነታችን ይጸናል። ጥምቀት ዳግም መወለድ ነው፤ ሜሮን ደግሞ ማደግና መጽናት ነው። ሰው በሥጋ መወለዱ ብቻ ሳይሆን ማደግና መጽናት ያስፈልገዋልና።",
          },
          vers: ["Rom 8:15"],
        },
        {
          tekst: {
            no: "Kirka lærer at Åndens gaver, som profeten Jesaja nevner, gis gjennom myron: visdom, forstand, råd, styrke, kunnskap og gudsfrykt.",
            am: "ነቢዩ ኢሳይያስ የጠቀሳቸው የመንፈስ ቅዱስ ሀብታት በሜሮን ይሰጣሉ፤ ጥበብ፣ ማስተዋል፣ ምክር፣ ኃይል፣ እውቀትና እግዚአብሔርን መፍራት።",
          },
          vers: ["Isa 11:2"],
        },
        {
          tekst: {
            no: "Ånden lærer oss og holder oss fast i sannheten, så vi står fast i troen og vokser åndelig.",
            am: "መንፈስ ቅዱስ ያስተምረናል፤ በእውነት መንገድ ያጸናናል፤ በእምነት እንጸናለን፤ በመንፈሳዊ ሕይወትም እናድጋለን።",
          },
          vers: ["1John 2:27", "John 14:26"],
        },
        {
          tekst: {
            no: "Vi blir arvinger til himmelriket. Ånden vitner med vår ånd om at vi er Guds barn.",
            am: "የመንግሥተ ሰማያት ወራሾች እንሆናለን፤ መንፈስ ራሱ የእግዚአብሔር ልጆች እንደ ሆንን ይመሰክራል።",
          },
          vers: ["Rom 8:16-17"],
        },
      ],
    },
    {
      id: "barn",
      tittel: { no: "Hvorfor får små barn myron?", am: "ሕፃናት ለምን ሜሮን ይቀባሉ?" },
      punkter: [
        {
          tekst: {
            no: "Noen kirker venter til barna er 12 år eller eldre. Men Tewahedo-kirka gir myron rett etter dåpen. Den som er verdig til dåpen, er også verdig til myron.",
            am: "በአንዳንድ አብያተ ክርስቲያናት ሕፃናት እስከ 12 ዓመትና ከዚያም በላይ እንዲጠብቁ ይደረጋል። ተዋሕዶ ቤተ ክርስቲያን ግን ከጥምቀት በኋላ ወዲያው ሜሮን ትቀባለች። ለጥምቀት የበቃ ለሜሮንም ይበቃልና።",
          },
          vers: ["Acts 2:38-39"],
        },
        {
          tekst: {
            no: "Apostlene la hendene på de døpte med en gang etter dåpen, og Jesus fikk Ånden over seg straks han var døpt.",
            am: "ሐዋርያት ካጠመቁ በኋላ ወዲያው እጃቸውን ይጭኑ ነበር፤ ጌታችንም ተጠምቆ እንደ ወጣ መንፈስ ቅዱስ በራሱ ላይ አረፈ።",
          },
          vers: ["Matt 3:16", "Acts 19:5-6"],
        },
        {
          tekst: {
            no: "Gud kan gi Den hellige ånd også til de minste: Johannes døperen ble fylt av Den hellige ånd allerede i mors liv.",
            am: "እግዚአብሔር ለሕፃናትም መንፈስ ቅዱስን ይሰጣል፤ ዮሐንስ መጥምቅ ገና በእናቱ ማኅፀን ሳለ መንፈስ ቅዱስ ሞላበት።",
          },
          vers: ["Luke 1:15"],
        },
      ],
    },
    {
      id: "lages",
      tittel: { no: "Hvem lager og velsigner myron?", am: "ሜሮን በማን ይዘጋጃል? ይባረካል?" },
      punkter: [
        {
          tekst: {
            no: "Kirkas bøker forteller at apostlene laget den første myron. Fetha Negest forteller at den kom fra balsamtreet som vokste der Jesu svette falt da han som lite barn flyktet til Egypt. En annen tradisjon sier at den ble laget av de velluktende krydderne som var gjort klare til Jesu gravlegging. Evangelisten Markus tok myron med til Egypt.",
            am: "መጻሕፍት የመጀመሪያውን ሜሮን ሐዋርያት እንዳዘጋጁት ይነግሩናል። ፍትሐ ነገሥት ጌታችን በሕፃንነቱ ወደ ግብፅ ሲሰደድ ወዙ በነጠበበት ቦታ ከበቀለው በለሳን እንደ ተገኘ ይናገራል። ሌላ ትውፊት ደግሞ ለጌታችን ግንዘት ከተዘጋጁት ሽቱዎች እንደ ተዘጋጀ ይናገራል። ቅዱስ ማርቆስም ሜሮንን ወደ ግብፅ ወሰደ።",
          },
          vers: ["Matt 2:13-14", "Luke 23:56"],
          andre: [{ no: "Fetha Negest (ፍትሐ ነገሥት), om tilberedning av myron", am: "ፍትሐ ነገሥት፤ ስለ ሜሮን አዘገጃጀት" }],
        },
        {
          tekst: {
            no: "Myron blir kokt og tilberedt av biskopene sammen. De ber og velsigner den, og så sender de den ut til bispedømmene og kirkene. Prestene salver med myron som biskopene har velsignet.",
            am: "ሜሮን በሊቀ ጳጳሱና በጳጳሳት ጸሎትና ቡራኬ ይባረካል። ኤጲስ ቆጶሳት ተሰብስበው ምህላና ጸሎት አድርሰው ይቀድሱታል፤ ከዚያም ወደየሀገረ ስብከታቸው ያከፋፍሉታል። ካህናት በዚህ ሜሮን ይቀባሉ።",
          },
        },
        {
          tekst: {
            no: "I lang tid fikk Etiopia myron fra den koptiske kirka i Egypt. Fra 1998 etter etiopisk kalender (2006) har vår kirke laget sin egen. Patriarken ledet sju dager med bønn, og myron ble velsignet ሰኔ 30, 1998. I 2015 etter etiopisk kalender (høsten 2022) ble myron laget for tredje gang i kirkas historie av Den hellige synode.",
            am: "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ሜሮንን ከግብፅ ቤተ ክርስቲያን በማስመጣት ስትጠቀም ቆይታ ከ1998 ዓ.ም ጀምሮ በቅዱስ ሲኖዶስ ውሳኔ ማዘጋጀት ጀመረች። በቅዱስ ፓትርያርኩ መሪነት ለሰባት ቀናት ሱባኤ ተይዞ ሰኔ 30 ቀን 1998 ዓ.ም ተባረከ። በ2015 ዓ.ም ቅዱስ ሲኖዶስ ለሦስተኛ ጊዜ ቅብዓ ሜሮን አፍልቷል።",
          },
        },
        {
          tekst: {
            no: "Myron brukes også til å vigsle en ny kirke, en ታቦት og de hellige karene før de tas i bruk. En kirke som ikke er salvet med myron og ikke har en ታቦት, er ikke en kirke, bare en sal. Myron brukes også, med egne bønner, når prester vigsles og ved ተክሊል-vielsen.",
            am: "አዲስ ሕንፃ ቤተ ክርስቲያን፣ ታቦትና ንዋየ ቅድሳት ለአገልግሎት ከመዋላቸው በፊት በሜሮን ይከብራሉ። በቅብዐ ሜሮን ያልከበረና ታቦት የሌለበት ቤተ ክርስቲያን ሊባል አይችልም። የአጠቃቀም ሥርዓቱና ጸሎቱ የተለየ ሆኖ ቅብዓ ሜሮን ለክህነትና ለተክሊልም ያገለግላል።",
          },
          vers: ["Exod 40:9"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Apostlenes lære (Didaskalia)", am: "ዲድስቅልያ" },
      tekst: {
        no: "«Etter at de er døpt, skal biskopen salve dem med myron, for de er døpt i likhet med Kristi død. Denne myron av balsam er troens kraft.»",
        am: "«ከተጠመቁም በኋላ ኤጲስ ቆጶሱ ቅብዐ ሜሮኑን ይቀባቸው፤ በክርስቶስ በሞቱ አምሳል ተጠምቀዋልና። ይኸውም ከበለሳን የተገኘ ቅብዓ ሜሮን የሃይማኖት ኃይል ነው።»",
      },
      kilde: "ዲድስቅልያ (sitert i Tewobel: ቅብዐ በለሳን / ቅብዐ ሜሮን ምንድነው?)",
    },
    {
      navn: { no: "Abba Giyorgis av Gasicha", am: "አባ ጊዮርጊስ ዘጋሥጫ" },
      tekst: {
        no: "«Kristus er min skaper og mitt håp … den hellige kirke er der jeg ble døpt, apostlene er de som døpte meg, og myron er seglet på min tro, i dag og alltid og i all evighet. Amen.»",
        am: "«ክርስቶስ ፈጣሪዬና ተስፋዬ ነው … ቅድስት ቤተ ክርስቲያንም የጥምቀቴ መገኛ ናት፤ ሐዋርያትም አጥማቂዎቼ ናቸው፤ ቅብዓ ሜሮንም የእምነቴ ማኅተም ነው፤ ዛሬም ዘወትርም ለዘላለሙ አሜን።»",
      },
      kilde: "መጽሐፈ ምሥጢር (sitert i Tewobel: ቅብዐ በለሳን / ቅብዐ ሜሮን ምንድነው?)",
    },
    {
      navn: { no: "Fedrene på kirkemøtet i Laodikea", am: "ጉባኤ ሎዶቅያ" },
      tekst: {
        no: "Da det ble mange som skulle døpes, bestemte fedrene at biskopene skulle tilberede myron, be over den og sende den til kirkene, og at de nydøpte skulle salves med myron i stedet for håndspåleggelse.",
        am: "ተጠማቂዎች ሲበዙ ኤጲስ ቆጶሳት ሜሮን እያዘጋጁ በሜሮኑ ላይ እየጸለዩ ወደ አብያተ ክርስቲያናት እንዲልኩና የሚጠመቁ ምእመናንም በአንብሮተ ዕድ ፈንታ ሜሮን እንዲቀቡ ተወሰነ።",
      },
      kilde: "ጉባኤ ሎዶቅያ ቀኖና ፵፰ (etter søndagsskolepensumet መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን, 8. klasse, kap. 3)",
    },
    {
      navn: { no: "Erkebiskop abune Melketsedek", am: "አቡነ መልከ ጼዴቅ ሊቀ ጳጳስ" },
      tekst: {
        no: "Myron er ikke som en vanlig olje. Den er et segl som gir Den hellige ånds nåde og bekrefter at vi er Guds barn. Derfor kalles den «Den hellige ånds segl». I dåpen blir man født av Ånden, og i myron blir man styrket.",
        am: "«ሜሮን … እንደማንኛውም ቅብዓት ሳይሆን ጸጋ መንፈስ ቅዱስን የሚያሰጥ የእግዚአብሔርን ልጅነት የሚያረጋግጥ ማኅተም ነው፤ ስለዚህም ማኅተመ መንፈስ ቅዱስ ይባላል። … ማንኛውም ሰው በጥምቀት ከመንፈስ ዳግመኛ ይወለዳል፥ በሜሮን ይጸናል።»",
      },
      kilde: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስትያን እምነት እና ትምህርት (gjengitt på sewasew.com: ምሥጢረ ሜሮን)",
    },
  ],
  ord: [
    { ord: "ሜሮን", forklaring: { no: "myron, den hellige salveoljen (gresk: duftende olje)", am: "ልብን የሚማርክ መዓዛ ያለው ቅዱስ ቅባት" } },
    { ord: "ቅብዐ ሜሮን", forklaring: { no: "salvingen med myron", am: "በሜሮን መቀባት" } },
    { ord: "ማኅተመ መንፈስ ቅዱስ", forklaring: { no: "Den hellige ånds segl", am: "የመንፈስ ቅዱስ ማኅተም" } },
    { ord: "ሀብተ መንፈስ ቅዱስ", forklaring: { no: "Den hellige ånds gave", am: "የመንፈስ ቅዱስ ስጦታ" } },
    { ord: "አንብሮተ ዕድ", forklaring: { no: "håndspåleggelse", am: "እጅ መጫን" } },
    { ord: "ቅብዐ ቅዱስ", forklaring: { no: "olivenoljen som brukes i ቀንዲል, de sykes salving", am: "ለቀንዲል የሚሆን ቅባት" } },
    { ord: "በለሳን", forklaring: { no: "balsam, et duftende tre som myron lages av", am: "የሽቱ እንጨት" } },
    { ord: "ትእምርተ መስቀል", forklaring: { no: "korsets tegn", am: "የመስቀል ምልክት" } },
    { ord: "ንዋየ ቅድሳት", forklaring: { no: "de hellige karene i kirka", am: "የቤተ ክርስቲያን ቅዱሳት ዕቃዎች" } },
    { ord: "ሊቀ ጳጳስ / ኤጲስ ቆጶስ", forklaring: { no: "erkebiskop / biskop", am: "ሜሮንን የሚባርኩ አባቶች" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet ሜሮን, og hva kalles myron også?", am: "«ሜሮን» ማለት ምን ማለት ነው? በምንስ ስም ይጠራል?" },
      svar: {
        no: "Det betyr en olje med søt duft. Den kalles også ማኅተመ መንፈስ ቅዱስ – Den hellige ånds segl.",
        am: "ልብን የሚማርክ ጣፋጭ መዓዛ ያለው ዘይት ማለት ነው። «ማኅተመ መንፈስ ቅዱስ» ተብሎም ይጠራል።",
      },
    },
    {
      sporsmal: { no: "Hvordan fikk de første kristne Den hellige ånd etter dåpen?", am: "የመጀመሪያዎቹ ክርስቲያኖች ከጥምቀት በኋላ መንፈስ ቅዱስን እንዴት ይቀበሉ ነበር?" },
      svar: {
        no: "Apostlene la hendene på dem (Apg 8,14–17 og 19,5–6). Senere ble håndspåleggelsen erstattet av salving med myron.",
        am: "ሐዋርያት እጃቸውን ይጭኑባቸው ነበር (ሐዋ 8፥14–17፤ 19፥5–6)። ከጊዜ በኋላ አንብሮተ ዕድ በቅብዐ ሜሮን ተተካ።",
      },
    },
    {
      sporsmal: { no: "Når får vi myron, og hvor mange ganger?", am: "ሜሮን መቼ እንቀባለን? ስንት ጊዜስ?" },
      svar: {
        no: "Rett etter dåpen, samme dag. Bare én gang – den gjentas aldri.",
        am: "ከጥምቀት በኋላ ወዲያው ሳይውል ሳያድር። አንድ ጊዜ ብቻ፤ አይደገምም።",
      },
    },
    {
      sporsmal: { no: "Hvor mange steder på kroppen blir salvet?", am: "በሜሮን የሚቀቡት ሕዋሳት ስንት ናቸው?" },
      svar: { no: "36 steder, i korsets tegn.", am: "ሠላሳ ስድስት (36) ሕዋሳት፤ በትእምርተ መስቀል።" },
    },
    {
      sporsmal: { no: "Hvem velsigner myron, og hvem salver med den?", am: "ሜሮንን የሚባርኩት እነማን ናቸው? የሚቀባውስ ማን ነው?" },
      svar: {
        no: "Patriarken og biskopene velsigner myron. Presten salver de døpte med den.",
        am: "ቅዱስ ፓትርያርኩና ጳጳሳት ይባርኩታል፤ ካህኑ ተጠማቂዎችን ይቀባል።",
      },
    },
    {
      sporsmal: { no: "Hva er forskjellen på myron og oljen i ቀንዲል?", am: "በቅብዐ ሜሮንና በቅብዐ ቀንዲል መካከል ያለው ልዩነት ምንድን ነው?" },
      svar: {
        no: "Myron gir Den hellige ånd og barnekåret og gis bare én gang. Oljen i ቀንዲል er for de syke og kan gis mange ganger.",
        am: "ሜሮን ሀብተ መንፈስ ቅዱስንና ልጅነትን ያጸናል፤ አይደገምም። ቅብዐ ቀንዲል ለሕሙማን ፈውስ ነው፤ ይደገማል።",
      },
    },
  ],
  kilder: [
    { navn: "መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን, 8. klasse (søndagsskolepensum), kap. 3: ምሥጢረ ሜሮን", url: "https://www.scribd.com/document/1036651354/g8-Meserete-Haymanot-Srat-Snemgbar-24" },
    { navn: "ኪዳነ ምሕረት: ምስጢረ ሜሮን", url: "https://kidanemihiret.org/sermons/%E1%88%9D%E1%88%B5%E1%8C%A2%E1%88%A8-%E1%88%9C%E1%88%AE%E1%8A%95/" },
    { navn: "አቡነ መልከ ጼዴቅ: የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስትያን እምነት እና ትምህርት – ምሥጢረ ሜሮን (sewasew.com)" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of Confirmation", url: "https://www.ethiopianorthodox.org/english/dogma/sacraconfirmation.html" },
    { navn: "ማኅበረ ቅዱሳን (søndagsskoleavdelingen): ሰባቱ ምሥጢራተ ቤተ ክርስቲያን (for barn)", url: "https://eotcmk.org/a/%e1%88%b0%e1%89%a3%e1%89%b1-%e1%88%9d%e1%88%a5%e1%8c%a2%e1%88%ab%e1%89%b0-%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95/" },
    { navn: "ማኅበረ ቅዱሳን (søndagsskoleavdelingen): ምሥጢረ ጥምቀት", url: "https://eotcmk.org/a/%e1%88%9d%e1%88%a5%e1%8c%a2%e1%88%a8-%e1%8c%a5%e1%88%9d%e1%89%80%e1%89%b5-2/" },
    { navn: "Tewobel: ቅብዐ በለሳን / ቅብዐ ሜሮን ምንድነው? (med sitater fra ፍትሐ ነገሥት, ዲድስቅልያ og መጽሐፈ ምሥጢር)", url: "https://www.facebook.com/tewobel/posts/5579714008743732/" },
    { navn: "ሰባቱ ምስጢራተ ቤተክርስቲያን ምሉዕ (søndagsskole-dokument, Scribd)" },
    { navn: "Addis Abeba bispedømme: Den hellige synode koker myron, ጥቅምት 2015 ዓ.ም (Facebook)", url: "https://www.facebook.com/addisababadiocese/posts/5640494992697904/" },
  ],
  utkast: true,
};
