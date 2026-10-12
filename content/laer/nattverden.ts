import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ቍርባን:
// astemhro.com (ምስጢረ ቁርባን፡ የቤተክርስቲያን ምስጢራት አክሊል, del 1 og 2 – med sitater fra አባ ሕርያቆስ og ፊልክስዮስ,
// og «ሴቶች በቤተ ክርስቲያን (ክፍል ፬)» om hvorfor man ikke tar imot ved blødning),
// Mahibere Kidusans barneside (eotcmk.org: ለቅዱስ ቁርባን ስለ መዘጋጀት), kidanemihiret.org (ምሥጢረ ቁርባን),
// ethiopianorthodox.org (The Sacrament of the Holy Communion, Marcos Daoud),
// Marcos Daoud: The Liturgy of the Ethiopian Church, innledningen (om brødet, rosinvinen og huset ቤተ ልሔም),
// og ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን (ethiopianorthodox.org) – sitatene fra ሃይማኖተ አበው, ዮሐንስ አፈወርቅ og ኤፍሬም.
// Usikkert: Kirkas kilder sier 18 timers faste før nattverd (astemhro.com). En engelsk MK-US-side sier «fra midnatt»,
// men den siden har flere feil om ritualet, så den er ikke brukt. Menigheten bør bekrefte hva presten lærer.
// Usikkert: At brødet bakes høyst tre timer før gudstjenesten, og at rosinene legges i vann i 3–5 timer, står bare i
// Daouds engelske innledning (eotc.faithweb.com). Kildene sier ikke uttrykkelig hvem som baker; de sier at diakonene
// forbereder brødet og vinen i ቤተ ልሔም.
// Usikkert: Listen over hva man ikke gjør resten av dagen (ikke klippe negler, ikke bade osv.) er fra astemhro.com.
// Skikkene kan variere litt, så presten bør lese gjennom.
export const nattverden: Tema = {
  slug: "nattverden",
  del: "sakramentene",
  tittel: { no: "Nattverden", am: "ምሥጢረ ቍርባን" },
  undertittel: { no: "Kristi kropp og blod – livets brød", am: "ቅዱስ ሥጋውና ክቡር ደሙ – የሕይወት እንጀራ" },
  bilde: "evangeliebladLam",
  ingress: {
    no:
      "I nattverden tar vi imot Jesu Kristi hellige kropp og dyrebare blod. Den er ett av kirkas sju sakramenter og også ett av de fem mysteriene. Kirka kaller den «mysterienes mysterium» og «kronen over sakramentene», fordi de andre sakramentene fullføres i den.",
    am:
      "በምሥጢረ ቍርባን የጌታችንን የኢየሱስ ክርስቶስን ቅዱስ ሥጋና ክቡር ደም እንቀበላለን። ከሰባቱ ምሥጢራተ ቤተ ክርስቲያን አንዱ ሲሆን ከአምስቱ አዕማደ ምሥጢርም አንዱ ነው። ሌሎቹ ምሥጢራት በእርሱ ስለሚፈጸሙ «ምሥጢረ ምሥጢራት» እና «የምሥጢራት አክሊል» ይባላል።",
  },
  hovedvers: "John 6:54",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er nattverden?", am: "ቍርባን ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ቍርባን betyr gave eller offer – noe man bærer fram for Gud. Men i nattverden er det Gud som gir oss den største gaven: Kristi egen kropp og hans eget blod.",
            am: "«ቍርባን» ማለት ለእግዚአብሔር የሚቀርብ አምኃ (ስጦታ)፣ መሥዋዕት ማለት ነው። በምሥጢረ ቍርባን ግን ታላቁን ስጦታ የሚሰጠን እግዚአብሔር ነው፤ ይኸውም የክርስቶስ ቅዱስ ሥጋና ክቡር ደም ነው።",
          },
        },
        {
          tekst: {
            no: "Nattverden har flere navn: ሥጋ ወደሙ (kroppen og blodet), «Herrens måltid» og «enhetens mysterium». De koptiske kristne kaller den eukaristi, som betyr takksigelse.",
            am: "ቍርባን ብዙ ስሞች አሉት፤ «ሥጋ ወደሙ»፣ «የጌታ ራት»፣ «አንድ የመሆን ምሥጢር» ይባላል። ግብጻውያን «ዩክሪስት» ይሉታል፤ ትርጉሙም «ምስጋና ማቅረብ» ነው።",
          },
          vers: ["1Cor 10:16", "Acts 2:42"],
        },
        {
          tekst: {
            no: "Det er ingen vanlig mat. Det er Kristi kropp som ble født i Betlehem av jomfru Maria, som led og døde på korset og stod opp igjen.",
            am: "ተራ ምግብ አይደለም። ከድንግል ማርያም በቤተ ልሔም የተወለደው፣ በመስቀል ላይ መከራ ተቀብሎ የሞተውና የተነሣው የክርስቶስ ሥጋ ነው።",
          },
          vers: ["John 6:51"],
        },
        {
          tekst: {
            no: "Nattverden kan tas imot mange ganger. Dåpen og myron får vi bare én gang, men nattverden er mat for sjelen hele livet.",
            am: "ቍርባን የሚደገም ምሥጢር ነው። ጥምቀትና ሜሮን አንድ ጊዜ ብቻ ይፈጸማሉ፤ ቍርባን ግን በሕይወታችን ሙሉ የነፍስ ምግብ ነው።",
          },
          vers: ["1Cor 11:26"],
        },
      ],
    },
    {
      id: "innstiftet",
      tittel: { no: "Jesus innstiftet nattverden", am: "ቍርባንን የመሠረተው ጌታችን ነው" },
      punkter: [
        {
          tekst: {
            no: "Før han innstiftet nattverden, lærte Jesus om livets brød: «Jeg er det levende brød som kom ned fra himmelen. Brødet jeg gir, er min kropp, for at verden skal leve.»",
            am: "ጌታችን ቍርባንን ከመመሥረቱ በፊት ስለ ሕይወት እንጀራ አስተማረ፤ «ከሰማይ የወረደ ሕያው እንጀራ እኔ ነኝ፤ … እኔም ስለ ዓለም ሕይወት የምሰጠው እንጀራ ሥጋዬ ነው» አለ።",
          },
          vers: ["John 6:51"],
        },
        {
          tekst: {
            no: "Noen av jødene skjønte det ikke og spurte: «Hvordan kan han gi oss sin kropp å spise?» Men Jesus forklarte det ikke bort. Han sa det enda tydeligere: Uten å spise hans kropp og drikke hans blod har vi ikke liv i oss.",
            am: "አይሁድ ምሥጢሩ አልገባቸውም፤ «ይህ ሰው ሥጋውን ልንበላ ይሰጠን ዘንድ እንዴት ይችላል?» አሉ። ጌታችን ግን ቃሉን አላለዘበም፤ ሥጋውን ካልበላን ደሙንም ካልጠጣን ሕይወት እንደሌለን አጽንቶ ተናገረ።",
          },
          vers: ["John 6:52-56"],
        },
        {
          tekst: {
            no: "Skjærtorsdag kveld, ved det siste måltidet med de tolv apostlene, tok Jesus brød, velsignet det, brøt det og sa: «Dette er min kropp.» Så tok han begeret og sa: «Dette er mitt blod, den nye pakts blod, som blir utøst for mange til tilgivelse for syndene.»",
            am: "በጸሎተ ሐሙስ ማታ ከአሥራ ሁለቱ ሐዋርያት ጋር ሳለ ኅብስቱን አንሥቶ ባረከ፣ ቆርሶም «ይህ ሥጋዬ ነው» አለ። ጽዋውንም አንሥቶ «ስለ ብዙዎች ለኃጢአት ይቅርታ የሚፈስ የአዲስ ኪዳን ደሜ ይህ ነው» አለ።",
          },
          vers: ["Matt 26:26-28", "Luke 22:19-20"],
        },
        {
          tekst: {
            no: "Jesus sa: «Gjør dette til minne om meg.» Slik ga han apostlene og deres etterfølgere, biskopene og prestene, oppdraget med å feire nattverden. Diakonene hjelper til, men bare biskoper og prester kan feire den.",
            am: "ጌታችን «ይህን ለመታሰቢያዬ አድርጉት» አለ። በዚህም ቍርባንን የመፈጸም ሥልጣን ለሐዋርያትና ለተከታዮቻቸው ለኤጲስ ቆጶሳትና ለቀሳውስት ሰጠ። ዲያቆናት ያገለግላሉ፤ ቅዳሴውን የሚቀድሱት ግን ኤጲስ ቆጶሳትና ቀሳውስት ብቻ ናቸው።",
          },
          vers: ["Luke 22:19"],
        },
        {
          tekst: {
            no: "Apostelen Paulus skriver at han fikk dette fra Herren selv, og han gir det videre til kirka. Etter pinsedagen samlet de første kristne seg hele tiden til brødsbrytelsen.",
            am: "ቅዱስ ጳውሎስ ይህንን ከጌታ እንደ ተቀበለ ለቤተ ክርስቲያንም እንዳስተላለፈ ይጽፋል። ከበዓለ ሃምሳ በኋላም የመጀመሪያዎቹ ክርስቲያኖች ለማዕድ ለመቍረስ ዘወትር ይሰበሰቡ ነበር።",
          },
          vers: ["1Cor 11:23-25", "Acts 2:42"],
        },
      ],
    },
    {
      id: "virkelig",
      tittel: { no: "Brødet og vinen blir Kristi kropp og blod", am: "ኅብስቱና ወይኑ የክርስቶስ ሥጋና ደም ይሆናሉ" },
      punkter: [
        {
          tekst: {
            no: "Under gudstjenesten (ቅዳሴ) ber presten Gud sende Den hellige ånd over brødet og vinen, så de blir Kristi kropp og blod. Ved Den hellige ånds kraft blir brødet Kristi kropp og vinen Kristi blod.",
            am: "በቅዳሴ ጊዜ ካህኑ «አቤቱ ወደዚህ ኅብስትና ወደዚህ ወይን መንፈስ ቅዱስንና ኃይልን እንድትልክ እንለምንሃለን፤ የጌታችንን የመድኃኒታችንን የኢየሱስ ክርስቶስን ሥጋውንና ደሙን ያደርገው ዘንድ» ብሎ ይጸልያል። በመንፈስ ቅዱስ ኃይል ኅብስቱ የክርስቶስ ሥጋ፣ ወይኑም የክርስቶስ ደም ይሆናል።",
          },
          vers: ["Matt 26:26-28"],
        },
        {
          tekst: {
            no: "Det ser fortsatt ut som brød og vin, men det er ikke lenger vanlig brød og vin. Kirka tror at det virkelig er Kristi kropp og blod – ikke bare et tegn eller et bilde. Hvordan det skjer, er et mysterium som vi tar imot i tro.",
            am: "ኅብስትና ወይን መስሎ ይታያል፤ ተራ ኅብስትና ወይን ግን አይደለም። ቤተ ክርስቲያን ምልክት ወይም ምሳሌ ብቻ ሳይሆን አማናዊ የክርስቶስ ሥጋና ደም መሆኑን ታምናለች። እንዴት እንደሚለወጥ ግን የሰው አእምሮ የማይደርስበት ምሥጢር ነው፤ በእምነት እንቀበለዋለን።",
          },
          vers: ["1Cor 10:16", "John 6:55"],
        },
        {
          tekst: {
            no: "«Gjør dette til minne om meg» betyr ikke at nattverden bare er et minne. Jesus sa: «Dette er min kropp», ikke «dette er et minne». Vi skal huske hans død og oppstandelse og hans store kjærlighet hver gang vi tar imot.",
            am: "«ለመታሰቢያዬ አድርጉት» ማለት ቍርባን መታሰቢያ ብቻ ነው ማለት አይደለም። ጌታችን «ይህ ሥጋዬ ነው» አለ እንጂ «ይህ መታሰቢያ ነው» አላለም። በተቀበልን ቍጥር ሞቱንና ትንሣኤውን፣ ታላቅ ፍቅሩንም እናስባለን።",
          },
          vers: ["1Cor 11:24-26"],
        },
        {
          tekst: {
            no: "Nattverden er det samme offeret som Kristus bar fram én gang på korset. Det blir ikke et nytt offer hver gang. Vi tar del i det ene offeret, men uten blodsutgytelse.",
            am: "ቍርባን ክርስቶስ አንድ ጊዜ በመስቀል ላይ ያቀረበው ያው አንዱ መሥዋዕት ነው። በቀደሱ ቍጥር ሌላ አዲስ መሥዋዕት አይቀርብም፤ ደም ሳይፈስስ ከዚያው ከአንዱ መሥዋዕት እንካፈላለን።",
          },
          vers: ["Heb 10:10", "Rom 6:9"],
        },
        {
          tekst: {
            no: "Kroppen og blodet gis hver for seg: først kroppen, så blodet. Slik gjorde Jesus selv da han først ga dem brødet og deretter begeret.",
            am: "ቅዱስ ሥጋውና ክቡር ደሙ ተቀላቅሎ ሳይሆን ለየብቻ ይዘጋጃል፤ መጀመሪያ ሥጋውን ቀጥሎ ደሙን እንቀበላለን። ጌታችንም አስቀድሞ ኅብስቱን ከዚያም ጽዋውን ሰጣቸው።",
          },
          vers: ["John 6:55", "1Cor 11:23-25"],
        },
      ],
    },
    {
      id: "forbilder",
      tittel: { no: "Bilder på nattverden i Det gamle testamentet", am: "የቍርባን ምሳሌዎች በብሉይ ኪዳን" },
      punkter: [
        {
          tekst: {
            no: "Melkisedek, kongen av Salem og prest for Gud den høyeste, bar fram brød og vin og velsignet Abraham. Han er et bilde på Kristus, som er «prest til evig tid etter Melkisedeks vis».",
            am: "የሳሌም ንጉሥና የልዑል እግዚአብሔር ካህን መልከ ጼዴቅ ኅብስትና ወይን አቅርቦ አብርሃምን ባረከው። እርሱ «እንደ መልከ ጼዴቅ ሹመት ለዘላለም ካህን» የተባለው የክርስቶስ ምሳሌ ነው።",
          },
          vers: ["Gen 14:18-19", "Heb 5:6"],
        },
        {
          tekst: {
            no: "Påskelammet: Israelittene slaktet et lam uten lyte og strøk blodet på dørstolpene. Da gikk dødsengelen forbi, og de ble berget. Kristus er vårt påskelam, Guds lam som bærer bort verdens synd.",
            am: "የፋሲካው በግ፤ እስራኤላውያን ነውር የሌለበትን ጠቦት አርደው ደሙን በቤታቸው መቃን ላይ ቀቡ፤ ቀሣፊውም አለፋቸው፤ እነርሱም ዳኑ። ክርስቶስ ፋሲካችን ነው፤ የዓለምን ኃጢአት የሚያስወግድ የእግዚአብሔር በግ እርሱ ነው።",
          },
          vers: ["Exod 12:5-7", "Exod 12:13", "1Cor 5:7", "John 1:29"],
        },
        {
          tekst: {
            no: "Mannaen: Gud ga Israel brød fra himmelen i ørkenen. Jesus sa at han selv er det sanne brødet fra himmelen. De som spiste mannaen, døde, men den som spiser dette brødet, skal leve evig. Kirka lærer at skyen mannaen kom fra, er et bilde på jomfru Maria.",
            am: "መናው፤ እግዚአብሔር በምድረ በዳ ለእስራኤል ከሰማይ እንጀራ ሰጣቸው። ጌታችን እውነተኛው ከሰማይ የወረደ እንጀራ ራሱ እንደ ሆነ ተናገረ። መና የበሉ ሞቱ፤ ይህን እንጀራ የሚበላ ግን ለዘላለም ይኖራል። መናው የወረደበት ደመና የድንግል ማርያም ምሳሌ ነው።",
          },
          vers: ["Exod 16:14-15", "John 6:31-35", "John 6:49-51"],
        },
        {
          tekst: {
            no: "Væren som Abraham ofret i stedet for Isak, er et bilde på Kristus, som ble ofret i vårt sted. Abraham sa: «Gud skal selv utse seg lammet til offeret.»",
            am: "አብርሃም በይስሐቅ ፈንታ የሠዋው በግ በእኛ ፈንታ የተሠዋው የክርስቶስ ምሳሌ ነው። አብርሃም «ልጄ ሆይ፥ የመሥዋዕቱን በግ እግዚአብሔር ያዘጋጃል» አለ።",
          },
          vers: ["Gen 22:7-8", "Gen 22:13"],
        },
      ],
    },
    {
      id: "brod-vin",
      tittel: { no: "Brødet og vinen", am: "ኅብስቱና ወይኑ" },
      punkter: [
        {
          tekst: {
            no: "Brødet lages av rent hvetemel, vann og surdeig (det er hevet brød). Vinen lages av tørkede druer – rosiner – som legges i vann og presses. Kirka bruker hvete og vin fordi Melkisedek bar fram brød og vin, og fordi Salmenes bok taler om korn og vin.",
            am: "ኅብስቱ ከንጹሕ የስንዴ ዱቄት፣ ከውኃና ከእርሾ ይዘጋጃል። ወይኑ ከደረቀ ወይን (ዘቢብ) በውኃ ተዘፍዝፎ ተጨምቆ ይዘጋጃል። ስንዴና ወይን የተመረጡት መልከ ጼዴቅ በኅብስትና በወይን ስለ ሠዋ ነው፤ ቅዱስ ዳዊትም «በልቤ ደስታን ጨመርህ፤ ከስንዴ ፍሬና ከወይን ከዘይትም ይልቅ በዛ» ብሎ ትንቢት ተናግሯል።",
          },
          vers: ["Gen 14:18", "Ps 4:8"],
        },
        {
          tekst: {
            no: "Brødet og vinen forberedes av diakonene i et lite hus øst for kirka. Huset heter ቤተ ልሔም (Betlehem), som betyr «brødets hus». Jesus, livets brød, ble født i Betlehem.",
            am: "ኅብስቱና ወይኑ በቤተ ክርስቲያኑ ቅጥር ውስጥ በስተ ምሥራቅ በምትገኝ «ቤተ ልሔም» በተባለች ትንሽ ቤት በዲያቆናት ይዘጋጃሉ። ቤተ ልሔም ማለት «ቤተ ኅብስት» (የእንጀራ ቤት) ማለት ነው። የሕይወት እንጀራ ጌታችን የተወለደው በቤተ ልሔም ነው።",
          },
          vers: ["Luke 2:4-7", "Mic 5:2"],
        },
        {
          tekst: {
            no: "Ved begynnelsen av gudstjenesten blir brødet og vinen båret fra Betlehem-huset inn i helligdommen (መቅደስ). Det er et bilde på Jesu vei fra Betlehem, der han ble født, til Golgata, der han fullførte frelsen.",
            am: "በቅዳሴው መጀመሪያ ኅብስቱና ወይኑ ከቤተ ልሔም ወደ መቅደስ ገብተው በመንበሩ ላይ ይቀርባሉ። ቤተ መቅደሱ የቀራንዮ አምሳል ነው። ይህም ጌታችን በቤተ ልሔም ተወልዶ በቀራንዮ «ተፈጸመ» እስኪል ድረስ ያደረገው የማዳን ጉዞ ምሳሌ ነው።",
          },
          vers: ["John 19:30"],
        },
        {
          tekst: {
            no: "Kristi kropp og blod blir dekket med klær på alteret. Kirka forteller at da Jesus hang på korset, ble sola mørk, så ingen skulle se Skaperen naken.",
            am: "ቅዱስ ሥጋውና ክቡር ደሙ በመንበሩ ላይ ይሸፈናሉ። ጌታችን በተሰቀለ ጊዜ የፈጣሪያቸውን እርቃን ላለማየት ፀሐይ ጨለመች፤ ይህንን አብነት በማድረግ ካህናት ሥጋውንና ደሙን ይሸፍኑታል።",
          },
          vers: ["Luke 23:44-45"],
        },
      ],
    },
    {
      id: "gaver",
      tittel: { no: "Hva gir nattverden oss?", am: "ቍርባን የሚያስገኘው ጸጋ" },
      punkter: [
        {
          tekst: { no: "Evig liv: Den som spiser Kristi kropp og drikker hans blod, har evig liv.", am: "የዘላለም ሕይወት፤ ሥጋውን የሚበላ ደሙንም የሚጠጣ የዘላለም ሕይወት አለው።" },
          vers: ["John 6:54", "John 6:58"],
        },
        {
          tekst: { no: "Tilgivelse for syndene vi har gjort etter dåpen, når vi har angret og skriftet.", am: "ሥርየተ ኃጢአት፤ ንስሐ ገብተን ስንቀበል ከጥምቀት በኋላ የሠራነው ኃጢአት ይሰረይልናል።" },
          vers: ["Matt 26:28", "1John 1:9"],
        },
        {
          tekst: {
            no: "Vi blir i Kristus og han i oss. Som en grein lever av vintreet, lever vi av ham.",
            am: "እኛ በክርስቶስ እንኖራለን፤ እርሱም በእኛ ይኖራል። ቅርንጫፍ ከግንዱ ሳይለይ እንደሚለመልም እኛም በእርሱ ሕያዋን እንሆናለን።",
          },
          vers: ["John 6:56", "John 15:4-5"],
        },
        {
          tekst: {
            no: "Mat for sjelen og styrke mot synden. Som maten gir kroppen kraft, gir Kristi kropp og blod sjelen kraft.",
            am: "የነፍስ ምግብና የኃጢአት ልጓም፤ ምግብ ለሥጋችን ኃይል እንደሚሆን ሥጋውና ደሙም ለነፍሳችን መንፈሳዊ ኃይል ይሰጠናል።",
          },
          vers: ["John 6:35"],
        },
        {
          tekst: {
            no: "Enhet: Vi som er mange, blir én kropp, fordi vi alle får del i det ene brødet. Vi blir ett med Kristus, med hverandre og med de hellige.",
            am: "አንድነት፤ ሁላችን ከአንዱ ኅብስት ስለምንካፈል ብዙዎች ስንሆን አንድ አካል ነን። ከክርስቶስ፣ እርስ በርሳችንና ከቅዱሳን ጋር አንድ እንሆናለን።",
          },
          vers: ["1Cor 10:17"],
        },
        {
          tekst: {
            no: "Det Adam og Eva mistet ved å spise, får vi tilbake ved å spise. De mistet barnekåret hos Gud, men gjennom Kristi kropp og blod gir Gud det tilbake til oss.",
            am: "በመብል የጠፋው በመብል ይመለሳል። አዳምና ሔዋን በመብል የእግዚአብሔርን ልጅነት አጡ፤ በቅዱስ ሥጋውና በክቡር ደሙ ግን ልጅነታችን ይመለስልናል።",
          },
          vers: ["Gen 3:6", "John 6:49-51"],
        },
      ],
    },
    {
      id: "forberedelse",
      tittel: { no: "Slik forbereder vi oss", am: "ለቍርባን እንዴት እንዘጋጃለን?" },
      ingress: {
        no: "Paulus skriver at hver og en skal prøve seg selv før han spiser av brødet og drikker av begeret. Derfor forbereder vi oss både i hjertet og med kroppen.",
        am: "ቅዱስ ጳውሎስ «ሰው ግን ራሱን ይፈትን፥ እንዲሁም ከእንጀራው ይብላ ከጽዋውም ይጠጣ» ይላል። ስለዚህ በልባችንም በሰውነታችንም እንዘጋጃለን።",
      },
      punkter: [
        {
          tekst: {
            no: "Skriftemål: Vi angrer syndene våre og forteller dem til Gud og til skriftefaren vår (የንስሐ አባት). Vi tar imot nattverden etter råd fra ham.",
            am: "ንስሐ፤ የሠራነውን ኃጢአት ለእግዚአብሔርና ለንስሐ አባታችን እንናገራለን። ከንስሐ አባታችን ጋር ተመካክረን እንቆርባለን።",
          },
          vers: ["1Cor 11:28", "1John 1:9"],
        },
        {
          tekst: {
            no: "Forsoning: Har vi kranglet med noen, ber vi om tilgivelse før vi kommer. Vi sier ikke usanne ting.",
            am: "ዕርቅ፤ የተጣላነው ሰው ካለ ይቅርታ እንጠይቃለን፤ ውሸትም አንዋሽም።",
          },
          vers: ["Matt 5:23-24"],
        },
        {
          tekst: {
            no: "Faste: Kvelden før spiser vi et lett måltid. Så spiser og drikker vi ingenting i 18 timer før vi tar imot. Kirka sammenligner det med den nye graven Jesus ble lagt i: Kristi kropp skal komme inn i en tom kropp.",
            am: "ጾም፤ በዋዜማው ቀለል ያለ ምግብ እንመገባለን፤ ከዚያም ለ18 ሰዓታት ከምግብና ከመጠጥ ተከልክለን እንቆርባለን። ጌታችን ሰው ባልተቀበረበት አዲስ መቃብር እንደ ተቀበረ የሚቆርቡ ምእመናንም ሆዳቸው ባዶ ሆኖ ይቀበላሉ።",
          },
          vers: ["John 19:41"],
        },
        {
          tekst: {
            no: "Renhet og klær: Vi vasker oss og tar på rene klær, gjerne hvite. Den som var invitert til kongens bryllup, skulle ha bryllupsklær.",
            am: "ንጽሕና፤ ገላችንን እንታጠባለን፤ ንጹሕ (ነጭ) ልብስ እንለብሳለን። ወደ ንጉሡ ሠርግ የተጠራ የሠርግ ልብስ ሊለብስ ይገባዋልና።",
          },
          vers: ["Matt 22:11-12", "Rev 6:11"],
        },
        {
          tekst: {
            no: "Vi kommer til kirka før gudstjenesten begynner og er med fra start til slutt. Under gudstjenesten prater vi ikke, men følger med i bønnene.",
            am: "ቅዳሴ ከመጀመሩ በፊት በቤተ ክርስቲያን እንገኛለን፤ ከመጀመሪያው እስከ መጨረሻው እናስቀድሳለን። በቅዳሴ ጊዜ ወሬ አናወራም፤ ጸሎቱን እንከታተላለን።",
          },
          vers: ["Eccl 5:1"],
        },
        {
          tekst: {
            no: "Noen tar ikke imot nattverden en bestemt dag: jenter og kvinner som har mens eller blør, en gutt eller mann som har hatt sædutløsning om natta, en mor de første 40 dagene etter at hun har født en gutt eller 80 dagene etter en jente, og ektefolk som ikke har holdt seg fra samliv tre dager før. Dette er ikke straff, og mensen er ikke noe urent eller en forbannelse. Det er en ordning av respekt for Kristi kropp og blod.",
            am: "አንዳንዶች በዚያ ዕለት አይቆርቡም፤ የወር አበባ ወይም ሌላ የሚፈስ ደም ያለባቸው ሴቶች፣ ሕልመ ሌሊት ያገኛቸው ወንዶች፣ ወንድ ከወለዱ 40 ቀን ሴት ከወለዱ 80 ቀን ያልሞላቸው እናቶች፣ ከቍርባን በፊት ለሦስት ቀናት ከሩካቤ ያልተከለከሉ ባለትዳሮች። ይህ ቅጣት አይደለም፤ የወር አበባም መርገም ወይም ርኵሰት አይደለም። ለቅዱስ ቍርባን ክብር ሲባል የተሠራ ሥርዓት ነው።",
          },
          andre: [{ no: "Fetha Negest (ፍትሐ ነገሥት) kap. 6", am: "ፍትሐ ነገሥት አንቀጽ 6" }],
        },
      ],
    },
    {
      id: "slik",
      tittel: { no: "Slik tar vi imot", am: "ቍርባንን እንዴት እንቀበላለን?" },
      punkter: [
        {
          tekst: {
            no: "Før nattverden roper presten: «Den som er ren, kan ta imot. Den som ikke er ren, skal ikke ta imot.» Så vasker han hendene. Dette er ikke for å skremme oss bort, men for å minne oss om å komme med anger og etter råd fra skriftefaren.",
            am: "ከመቍረብ በፊት ካህኑ «ንጹሕ የሆነ ከቍርባኑ ይቀበል፤ ንጹሕ ያልሆነ ግን አይቀበል» ብሎ እጁን ይታጠባል። ይህ አዋጅ እንዳንቆርብ ለማስፈራራት አይደለም፤ ንስሐ ገብተን ከንስሐ አባታችን ጋር ተመካክረን እንድንቀርብ ለማሳሰብ ነው እንጂ።",
          },
          vers: ["1Cor 11:27-29"],
        },
        {
          tekst: {
            no: "Vi kommer med ydmykhet, slik som offiseren som sa til Jesus: «Herre, jeg er ikke verdig til at du kommer inn under mitt tak.» Vi ber bønnen før nattverden.",
            am: "እንደ መቶ አለቃው በትሕትና እንቀርባለን፤ እርሱ «ጌታ ሆይ፥ በቤቴ ጣራ ከታች ልትገባ አይገባኝም» አለ። ከመቍረባችን በፊት የሚጸለየውን ጸሎት እንጸልያለን።",
          },
          vers: ["Matt 8:8"],
        },
        {
          tekst: {
            no: "Prestene og diakonene tar imot først, inne i helligdommen (መቅደስ). Så tar folket imot i ቅድስት: først spedbarna, så guttene, så jentene, så de voksne mennene og til slutt de voksne kvinnene. Vi venter rolig og høflig på tur, uten å dytte.",
            am: "መጀመሪያ በመቅደስ ውስጥ ጳጳሳት፣ ቀሳውስትና ዲያቆናት ይቆርባሉ። ቀጥሎ በቅድስት የሚጠቡ ሕፃናት፣ ወንዶች ልጆች፣ ሴቶች ልጆች፣ አዋቂ ወንዶችና አዋቂ ሴቶች ይቆርባሉ። ሳንጋፋ በትሕትና ተራችንን እንጠብቃለን።",
          },
        },
        {
          tekst: {
            no: "Kroppen får vi fra prestens hånd. Blodet får vi fra diakonen med en liten korsskje (ዕርፈ መስቀል).",
            am: "ቅዱስ ሥጋውን ከሠራዒው ካህን እጅ፣ ክቡር ደሙን ከዲያቆኑ በዕርፈ መስቀል እንቀበላለን።",
          },
          vers: ["Matt 26:26-27"],
        },
        {
          tekst: {
            no: "Rett etterpå drikker vi litt velsignet vann fra gudstjenesten (የቅዳሴ ጸበል). Vi dekker munnen med ነጠላ, så ingenting kommer ut av munnen og ingenting urent kommer inn. Vi ber takkebønnen etter nattverden.",
            am: "ከቆረብን በኋላ ወዲያው የቅዳሴ ጸበል እንጠጣለን። ከአፋችን ምንም እንዳይወጣ፣ ቆሻሻም ወደ አፋችን እንዳይገባ አፋችንን በነጠላችን እንሸፍናለን። ከቍርባን በኋላ የሚጸለየውን ጸሎት እንጸልያለን።",
          },
        },
        {
          tekst: {
            no: "Vi blir i kirka til gudstjenesten er slutt og diakonen sier: «Gå hjem i fred.» Presten velsigner folket før de går.",
            am: "ቅዳሴው አልቆ ዲያቆኑ «በሰላም ወደየቤታችሁ ሂዱ» ብሎ እስኪያሰናብት ድረስ በቤተ ክርስቲያን እንቆያለን። ካህኑም ሕዝቡን ይባርካል።",
          },
          vers: ["Num 6:24-26"],
        },
      ],
    },
    {
      id: "etterpaa",
      tittel: { no: "Etter nattverden", am: "ከቍርባን በኋላ" },
      ingress: {
        no: "Kroppen vår er blitt hellig ved Kristi kropp og blod. Derfor passer vi ekstra godt på oss selv resten av dagen.",
        am: "ሰውነታችን በክርስቶስ ሥጋና ደም ከብሯልና በዚያ ዕለት ከወትሮው በበለጠ ራሳችንን እንጠብቃለን።",
      },
      punkter: [
        {
          tekst: {
            no: "Vi går forsiktig hjem, så vi ikke snubler og skader oss. Kirka sier at når vi har tatt imot nattverden, kommer Herren med oss hjem og velsigner huset vårt.",
            am: "እንቅፋት እንዳይመታን እየተጠነቀቅን ወደ ቤታችን እንሄዳለን። ስንቆርብ ጌታችንም ከእኛ ጋር ወደ ቤታችን ይመጣል፤ ቤታችንንም ይባርክልናል።",
          },
          vers: ["Luke 19:9"],
        },
        {
          tekst: {
            no: "Den dagen spytter vi ikke, krangler ikke, spiser og drikker ikke for mye, og ektefolk holder seg fra samliv. Vi klipper ikke negler eller hår og bader ikke. Vi gjør ikke knefall (ስግደት) og drar ikke på lange reiser.",
            am: "በዚያ ዕለት አንተፋም፤ አንጣላም፤ አብዝተን አንበላም አንጠጣም፤ ባለትዳሮችም ከሩካቤ ይከለከላሉ። ጥፍር አንቆርጥም፤ ጸጉር አንላጭም፤ በውኃ አንታጠብም። አንሰግድም፤ ሩቅ መንገድም አንሄድም።",
          },
          vers: ["1Cor 6:15", "1Cor 6:19-20"],
        },
        {
          tekst: {
            no: "Hvorfor gjør vi ikke knefall? Kirka lærer at det er fordi Kristi kropp og blod gir hvile og ikke slit, og for at ingen skal tro at vi blir frelst ved egne gjerninger i stedet for ved hans kropp og blod.",
            am: "ለምን አንሰግድም? በሥጋ ወደሙ ድካም የለበትምና፤ ድኅነትም በሥጋውና በደሙ ሳይሆን በትሩፋት ነው እንዳያሰኝ ነው።",
          },
          vers: ["Eph 2:8-9"],
        },
        {
          tekst: {
            no: "Hvis det skjer noe uventet – for eksempel neseblod eller at man kaster opp – forteller vi det til skriftefaren og gjør det han sier, før vi tar imot neste gang.",
            am: "ከቆረብን በኋላ ነስር፣ ትውከት የመሰለ ነገር ቢያጋጥመን ለንስሐ አባታችን እንናገራለን፤ የሰጠንን ሳንፈጽም ዳግመኛ አንቆርብም።",
          },
        },
        {
          tekst: {
            no: "Resten av dagen bruker vi helst i fred, i bønn og med å lese i Bibelen og andre åndelige bøker.",
            am: "ተረፈ ዕለቱን በሰላም፣ በጸሎትና መጻሕፍትን በማንበብ እናሳልፋለን።",
          },
          vers: ["Ps 116:12-13"],
        },
      ],
    },
    {
      id: "barn",
      tittel: { no: "Barn og nattverd – og hvor ofte?", am: "ሕፃናትና ቍርባን – ስንት ጊዜ እንቍረብ?" },
      punkter: [
        {
          tekst: {
            no: "Barna tar imot nattverden fra de blir døpt. Rett etter dåpen og myron får barnet Kristi kropp og blod for første gang, og etter det tar barn imot ofte. Spedbarna går først i køen.",
            am: "ሕፃናት ከተጠመቁበት ዕለት ጀምሮ ይቆርባሉ። ከጥምቀትና ከሜሮን በኋላ ወዲያው ቅዱስ ሥጋውንና ክቡር ደሙን ይቀበላሉ፤ ከዚያም በኋላ ዘወትር ይቆርባሉ። የሚጠቡ ሕፃናት መጀመሪያ ይቆርባሉ።",
          },
          vers: ["Matt 19:14"],
        },
        {
          tekst: {
            no: "Nattverden er ikke bare for små barn og gamle. Den er for alle som er døpt – store og små, gutter og jenter – når de har forberedt seg.",
            am: "ቍርባን ለሕፃናትና ለአረጋውያን ብቻ የተሰጠ አይደለም። ዕድሜና ጾታ ሳይለይ ለተጠመቁና ለተዘጋጁ ሁሉ የተሰጠ ነው።",
          },
          vers: ["John 6:53", "Acts 2:39"],
        },
        {
          tekst: {
            no: "Hvor ofte? Kirka sier ikke et bestemt tall, men vi bør ta imot ofte, etter råd fra skriftefaren. Kirka lærer at alle skal ta imot minst på de store høytidene, som jul (ልደት), ጥምቀት og påske (ትንሣኤ).",
            am: "ስንት ጊዜ? ይህን ያህል ጊዜ ተብሎ አልተወሰነም፤ ከንስሐ አባታችን ጋር እየተመካከርን ዘወትር ልንቆርብ ይገባል። ቢያንስ በታላላቅ በዓላት (ልደት፣ ጥምቀት፣ ትንሣኤ) መቍረብ ይኖርብናል።",
          },
          vers: ["Acts 2:46"],
        },
        {
          tekst: {
            no: "Ikke bli borte av frykt. Noen sier «jeg er ikke god nok» eller «jeg tar imot når jeg blir gammel». Men Jesus sa at det er de syke som trenger lege. Nattverden er medisin for den som angrer.",
            am: "በፍርሃት አንራቅ። አንዳንዶች «አልበቃሁም»፣ «ስሸመግል እቆርባለሁ» ይላሉ። ጌታችን ግን «ሕመምተኞች እንጂ ባለ ጤናዎች ባለ መድኃኒት አያስፈልጋቸውም» አለ። ቍርባን ንስሐ ለገባ መድኃኒት ነው።",
          },
          vers: ["Matt 9:12-13"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Athanasius", am: "ቅዱስ አትናቴዎስ" },
      tekst: {
        no: "«Vi tror at den hellige nattverden er vår Herre og Frelser Jesu Kristi frelsende kropp og blod. Før presten har velsignet det, er det brød og vin. Når presten velsigner det, kommer Den hellige ånd ned over det. Da forvandles brødet til Guds Sønns sanne kropp, og vinen til Guds Sønns guddommelige blod.»",
        am: "«ዳግመኛም የሚያድን የጌታችን የመድኃኒታችን የኢየሱስ ክርስቶስ ሥጋ [እና] ደም እንደ ሆነ በከበረ ቍርባን እናምናለን። ቄሱ ሳያከብረው ኅብስት እና ወይን የነበረው፤ ቄሱ ባከበረው ጊዜ መንፈስ ቅዱስ በላዩ ይወርዳል። ኅብስት ከመሆንም የወልደ እግዚአብሔር ቃል አማናዊ ሥጋ ወደ መሆን ይለወጣል። ወይኑም እንዲሁ ወይን ከመሆን የእግዚአብሔር የባሕርይ ልጅ አምላካዊ ደም ወደ መሆን ይለወጣል።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ 28:14:22 (sitert i ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን, ethiopianorthodox.org)",
    },
    {
      navn: { no: "Hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "Hvis noen spør om vi ikke bærer fram et offer hver dag, svarer han: Jo, men det er ett offer og ikke mange – til minne om Herrens død. Det er det samme offeret som ble ofret én gang på korset, og «den kroppen som ofres i alle de fire hjørnene av verden, er én».",
        am: "«እኛስ ለልዑል ጌታ ለሞቱ መታሰቢያ ልትሆን ብዙ ያይደለች፥ አንዲት መሥዋዕት ዕለት ዕለት እንሠዋለን እንለዋለን።» «በመስቀል አንድ ጊዜ የተሠዋውን መሥዋዕት ሁል ጊዜ እንሠዋለን።» «በአራቱ ማዕዘን የሚሠዋው ሥጋው አንድ ነው።»",
      },
      kilde: "ድርሳን ዘቅዱስ ዮሐንስ አፈወርቅ, 17. ድርሳን (om Hebreerbrevet), nr. 122–124 (sitert i አኰቴተ ቍርባን)",
    },
    {
      navn: { no: "Hellige Gregor av Nyssa", am: "ቅዱስ ጎርጎርዮስ ዘኑሲስ" },
      tekst: {
        no: "Om Kristus som ble ofret for våre synder: «Han er offerlammet. Han er presten som bærer fram offeret. Og sammen med Faderen og Den hellige ånd er det han som tar imot offeret.»",
        am: "«[የመሥዋዕቱ በግ] እርሱ ነው፤ የሚሠዋ (መሥዋዕቱን የሚያሳርግ) ካህን እርሱ ነው፤ ከባሕርይ አባቱ ከአብ፥ ከባሕርይ ሕይወቱ ከመንፈስ ቅዱስ ጋርም መሥዋዕት የሚቀበል እርሱ ነው።»",
      },
      kilde: "ሃይማኖተ አበው ዘጎርጎርዮስ 36:3:26 (sitert i አኰቴተ ቍርባን)",
    },
    {
      navn: { no: "Hellige Efrem syreren", am: "ቅዱስ ኤፍሬም ሶርያዊ" },
      tekst: {
        no: "«Han gav oss å spise igjen av livets tre, det vil si Kristi dyrebare kropp og blod.» Det Adam og Eva mistet i paradiset, får vi tilbake i nattverden.",
        am: "«ከፈለነ ንብላዕ እምዕፀ ሕይወት ዘውእቱ ሥጋሁ ለክርስቶስ ወደሙ ክቡር» – ዳግመኛ ከዕፀ ሕይወት እንበላ ዘንድ አደለን፤ ይኸውም የክርስቶስ ክቡር ሥጋውና ክቡር ደሙ ነው።",
      },
      kilde: "ውዳሴ ማርያም (sitert i አኰቴተ ቍርባን)",
    },
    {
      navn: { no: "Abba Hiryakos", am: "አባ ሕርያቆስ" },
      tekst: {
        no: "«Dette er ikke som fedrenes offer av blod fra lam og kalver. Det er ild: en ild som frelser dem som gjør Guds vilje og har et oppriktig hjerte, men en ild som fortærer dem som fornekter hans navn.»",
        am: "«በበግ በጊደርና በላም ደም እንደ ነበረው እንደ ቀደሙት አባቶች መሥዋዕት አይደለም፤ እሳት ነው እንጂ። ፈቃዱን ለሚሠሩ ልቡናቸውን ላቀኑ ሰዎች የሚያድን እሳት ነው። ስሙን ለሚክዱ ለዓመፀኞች ሰዎች የሚበላ እሳት ነው።»",
      },
      kilde: "ቅዳሴ ማርያም 5–7 (sitert i astemhro.com: ምስጢረ ቁርባን, del 1)",
    },
  ],
  ord: [
    { ord: "ቍርባን / ቁርባን", forklaring: { no: "gave, offer – nattverden", am: "ለእግዚአብሔር የሚቀርብ አምኃ፣ መሥዋዕት" } },
    { ord: "ሥጋ ወደሙ", forklaring: { no: "Kristi kropp og blod", am: "ቅዱስ ሥጋውና ክቡር ደሙ" } },
    { ord: "ቆረበ / ቆራቢ", forklaring: { no: "å ta imot nattverden / den som tar imot", am: "ሥጋ ወደሙን መቀበል / የሚቀበል" } },
    { ord: "ቅዳሴ", forklaring: { no: "gudstjenesten der nattverden feires", am: "ምሥጢረ ቍርባን የሚፈጸምበት ጸሎት" } },
    { ord: "ኅብስት", forklaring: { no: "brød", am: "እንጀራ" } },
    { ord: "ቤተ ልሔም", forklaring: { no: "huset øst for kirka der brødet og vinen forberedes («brødets hus»)", am: "ኅብስቱና ወይኑ የሚዘጋጅባት ቤት" } },
    { ord: "ዕርፈ መስቀል", forklaring: { no: "korsskjeen som blodet gis med", am: "ክቡር ደሙ የሚቀበልበት" } },
    { ord: "የቅዳሴ ጸበል", forklaring: { no: "velsignet vann vi drikker etter nattverden", am: "ከቍርባን በኋላ የሚጠጣ ጸበል" } },
    { ord: "ነጠላ", forklaring: { no: "det hvite sjalet vi dekker munnen med", am: "አፍን የምንሸፍንበት ነጭ ልብስ" } },
    { ord: "የንስሐ አባት", forklaring: { no: "skriftefar", am: "መምህረ ንስሐ" } },
    { ord: "መቅደስ / ቅድስት", forklaring: { no: "helligdommen / rommet der folket tar imot", am: "የቤተ ክርስቲያን ክፍሎች" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Når og hvor innstiftet Jesus nattverden?", am: "ጌታችን ቍርባንን መቼና የት መሠረተ?" },
      svar: {
        no: "Skjærtorsdag kveld, ved det siste måltidet med apostlene. Han tok brødet og sa «Dette er min kropp», og begeret og sa «Dette er mitt blod» (Matt 26,26–28).",
        am: "በጸሎተ ሐሙስ ማታ ከሐዋርያት ጋር በመጨረሻው ራት። ኅብስቱን አንሥቶ «ይህ ሥጋዬ ነው»፣ ጽዋውንም አንሥቶ «ይህ ደሜ ነው» አለ (ማቴ 26፥26–28)።",
      },
    },
    {
      sporsmal: { no: "Er nattverden bare et minne om Jesus?", am: "ቍርባን የጌታ መታሰቢያ ብቻ ነውን?" },
      svar: {
        no: "Nei. Ved Den hellige ånd blir brødet og vinen virkelig Kristi kropp og blod. Vi minnes hans død og oppstandelse når vi tar imot.",
        am: "አይደለም። በመንፈስ ቅዱስ ኃይል ኅብስቱና ወይኑ አማናዊ የክርስቶስ ሥጋና ደም ይሆናሉ። ስንቀበልም ሞቱንና ትንሣኤውን እናስባለን።",
      },
    },
    {
      sporsmal: { no: "Nevn tre bilder på nattverden i Det gamle testamentet.", am: "በብሉይ ኪዳን ያሉ ሦስት የቍርባን ምሳሌዎችን ጥቀስ።" },
      svar: {
        no: "Melkisedeks brød og vin, påskelammet og mannaen i ørkenen.",
        am: "የመልከ ጼዴቅ ኅብስትና ወይን፣ የፋሲካው በግና በምድረ በዳ የወረደው መና።",
      },
    },
    {
      sporsmal: { no: "Hva heter huset der brødet og vinen forberedes, og hvorfor?", am: "ኅብስቱና ወይኑ የሚዘጋጅባት ቤት ማን ትባላለች? ለምን?" },
      svar: {
        no: "ቤተ ልሔም (Betlehem), «brødets hus», fordi Jesus, livets brød, ble født i Betlehem.",
        am: "ቤተ ልሔም፤ «ቤተ ኅብስት» ማለት ነው፤ የሕይወት እንጀራ ጌታችን በቤተ ልሔም ተወልዷልና።",
      },
    },
    {
      sporsmal: { no: "Hvordan forbereder vi oss til nattverden?", am: "ለቍርባን እንዴት እንዘጋጃለን?" },
      svar: {
        no: "Vi skrifter for skriftefaren, blir forsonet med andre, faster i 18 timer, vasker oss og tar på rene klær og kommer før gudstjenesten begynner.",
        am: "ንስሐ እንገባለን፤ ከተጣላነው ጋር እንታረቃለን፤ ለ18 ሰዓታት እንጾማለን፤ ታጥበን ንጹሕ ልብስ እንለብሳለን፤ ቅዳሴ ሳይጀመር እንገኛለን።",
      },
    },
    {
      sporsmal: { no: "Hva gjør vi rett etter at vi har tatt imot?", am: "ከቆረብን በኋላ ወዲያው ምን እናደርጋለን?" },
      svar: {
        no: "Vi drikker የቅዳሴ ጸበል, dekker munnen med ነጠላ, ber takkebønnen og blir i kirka til diakonen sender oss hjem i fred.",
        am: "የቅዳሴ ጸበል እንጠጣለን፤ አፋችንን በነጠላ እንሸፍናለን፤ የምስጋና ጸሎት እንጸልያለን፤ ዲያቆኑ እስኪያሰናብተን ድረስ እንቆያለን።",
      },
    },
  ],
  kilder: [
    { navn: "አስተምህሮ ዘተዋሕዶ: ምስጢረ ቁርባን፡ የቤተክርስቲያን ምስጢራት አክሊል (ክፍል 1)", url: "https://astemhro.com/2018/11/30/eucharist1/" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ምስጢረ ቁርባን፡ የቤተክርስቲያን ምስጢራት አክሊል (ክፍል 2)", url: "https://astemhro.com/2018/12/04/eucharist2/" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ሴቶች በቤተ ክርስቲያን (ክፍል ፬): በወር አበባ ጊዜና ከወሊድ በኋላ", url: "https://astemhro.com/2020/02/08/menustration_postpartum/" },
    { navn: "ማኅበረ ቅዱሳን (søndagsskoleavdelingen): ለቅዱስ ቁርባን ስለ መዘጋጀት", url: "https://eotcmk.org/a/%E1%88%88%E1%89%85%E1%8B%B1%E1%88%B5-%E1%89%81%E1%88%AD%E1%89%A3%E1%8A%95-%E1%88%B5%E1%88%88-%E1%88%98%E1%8B%98%E1%8C%8B%E1%8C%80%E1%89%B5/" },
    { navn: "ኪዳነ ምሕረት: ምሥጢረ ቁርባን", url: "https://kidanemihiret.org/sermons/%E1%88%9D%E1%88%A5%E1%8C%A2%E1%88%A8-%E1%89%81%E1%88%AD%E1%89%A3%E1%8A%95/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of the Holy Communion", url: "https://www.ethiopianorthodox.org/english/dogma/sacaracommunion.html" },
    { navn: "Marcos Daoud: The Liturgy of the Ethiopian Church (innledning)", url: "http://www.eotc.faithweb.com/liturgy.htm" },
    { navn: "ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን (ethiopianorthodox.org)", url: "https://www.ethiopianorthodox.org/amharic/yezemametsheft/kesis%20meberatu/Akoteta_Qurban.pdf" },
  ],
  utkast: true,
};
