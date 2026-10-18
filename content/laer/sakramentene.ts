import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om de sju sakramentene:
// Mahibere Kidusans søndagsskoleserie «ሰባቱ ምሥጢራተ ቤተ ክርስቲያን» (tre deler, eotcmk.org, som viser til
// læreboka «ትምህርተ ሃይማኖትና ክርስቲያናዊ ሕይወት»), ethiopianorthodox.org (Introduction to Church Sacraments og
// kapitlene om hvert sakrament, etter Rev. Marcos Daoud: The Orthodox Church Sacraments, Addis Abeba 1952),
// søndagsskoleboka «ሥርዓተ ቤተ ክርስቲያን» for 8. klasse (kapittel 1–8, lest via Scribd),
// Debre Mitmaq Kidist Mariam EOTC (7ቱ ምሥጢራተ ቤተ ክርስቲያን), Mahibere Kidusan om መስቀል og
// Memhir Temesgen Zegeye om ጠበል.
// Usikkert: Kildene teller ikke helt likt hvilke sakramenter som er «for alle». Mahibere Kidusan nevner
// ጥምቀት, ሜሮን og ቍርባን, mens ethiopianorthodox.org og 8.-klasseboka også regner ንስሐ med (fordi alle synder).
// Siden skriver begge deler: tre er nødvendige for frelsen, fire skal alle ta imot.
// Usikkert: Ingen av kildene sier med rene ord at ጸበል, korset og ማተብ «ikke er sakramenter». Det er
// utledet av at kirka teller sju sakramenter, og at 8.-klasseboka sier at Åndens nåde ikke er begrenset til de sju.
// Usikkert: 8.-klasseboka sier at ordningen med myron ble vedtatt av apostlene på et møte i Laodikea, og viser
// samtidig til «kanon 48 fra møtet i Laodikea». Siden nevner bare kirkemøtet i Laodikea og kanon 48.
// Usikkert: 8.-klasseboka er lest som opplasting på Scribd. Utgiveren står ikke på siden vi leste.
// Usikkert: Hvor mange prester som ber ved ቀንዲል: 8.-klasseboka sier sju prester, ethiopianorthodox.org sier
// sju bønner. Siden nevner begge som kildene sier, uten å si hva som er vanlig i menigheten i dag.
export const sakramentene: Tema = {
  slug: "sakramentene",
  del: "sakramentene",
  tittel: { no: "De sju sakramentene", am: "ሰባቱ ምሥጢራተ ቤተ ክርስቲያን" },
  undertittel: {
    no: "Usynlig nåde gjennom synlige tegn",
    am: "በሚታይ አገልግሎት የማይታይ ጸጋ",
  },
  bilde: "evangeliebladLam",
  ingress: {
    no:
      "Kirka har sju sakramenter (ምሥጢራተ ቤተ ክርስቲያን): dåpen (ጥምቀት), myron (ሜሮን), nattverden (ቍርባን), omvendelsen (ንስሐ), salving av syke (ቀንዲል), ekteskapet (ተክሊል) og prestevielsen (ክህነት). Et sakrament er en hellig handling der vi får Guds usynlige nåde gjennom noe vi kan se og høre. Jesus Kristus innstiftet dem, og biskoper og prester utfører dem. Kirka sammenligner dem med de sju søylene Visdommen satte opp i huset sitt.",
    am:
      "ቤተ ክርስቲያን ሰባት ምሥጢራት አሏት፤ እነርሱም ጥምቀት፣ ሜሮን፣ ቍርባን፣ ንስሐ፣ ቀንዲል፣ ተክሊልና ክህነት ናቸው። ምሥጢራተ ቤተ ክርስቲያን በሚታይ አገልግሎት የማይታይ የእግዚአብሔርን ጸጋ የምናገኝባቸው ቅዱሳት ሥርዓቶች ናቸው። የመሠረታቸው ጌታችን ኢየሱስ ክርስቶስ ነው፤ የሚፈጽሟቸውም ኤጲስ ቆጶሳትና ቀሳውስት ናቸው። ቤተ ክርስቲያን ጥበብ በቤቷ ካቆመቻቸው ሰባት ምሰሶዎች ጋር ታመሳስላቸዋለች።",
  },
  hovedvers: "Prov 9:1",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva betyr ምሥጢር?", am: "«ምሥጢር» ማለት ምን ማለት ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ምሥጢር betyr noe skjult og hemmelig, noe man bare viser til en nær venn eller et nært familiemedlem. I troen er et mysterium Guds verk, som er større enn menneskets forstand, og som vi bare kan ta imot i tro.",
            am: "«ምሥጢር» ማለት ድብቅ፣ ሽሽግ፣ ለልብ ወዳጅ ወይም ለቅርብ ዘመድ ካልሆነ በቀር የማይገለጥ ማለት ነው። በሃይማኖት ምሥጢር የሚባለው ከሰው አእምሮ በላይ የሆነና በእምነት ብቻ የምንረዳው የእግዚአብሔር ሥራ ነው።",
          },
        },
        {
          tekst: {
            no: "Et sakrament er en hellig handling der vi får en usynlig nåde gjennom en synlig tjeneste. Vi ser vann, olje, brød og vin, presten som ber og legger hendene på. Men det vi ikke ser, er Den hellige ånds nåde som virker gjennom dem.",
            am: "ምሥጢራተ ቤተ ክርስቲያን በሚታይ አገልግሎት የማይታይ መለኮታዊ ጸጋ የሚያሰጡ ናቸው። ውኃውን፣ ቅብዐቱን፣ ኅብስቱንና ወይኑን፣ የካህኑን ጸሎትና እጅ መጫን እናያለን፤ በእነርሱ የሚሠራውን የመንፈስ ቅዱስ ጸጋ ግን አናይም።",
          },
        },
        {
          tekst: {
            no: "Kirka gir tre grunner til at de kalles mysterier: De blir gitt til dem som tror, ikke til dem som ikke tror. Det er Den hellige ånd som virker i dem. Og gjennom det vi ser, får de troende den nåden vi ikke ser.",
            am: "ምሥጢራት የተባሉበት ምክንያት ሦስት ነው፤ ላመኑ እንጂ ላላመኑ ስለማይፈጸሙ፤ አፈጻጸማቸው የመንፈስ ቅዱስ አሠራር ስለ ሆነ፤ ምእመናንም በሚታየው አገልግሎት የማይታየውን የመንፈስ ቅዱስ ጸጋ ስለሚያገኙ ነው።",
          },
          vers: ["Matt 13:11", "Mark 4:11"],
        },
        {
          tekst: {
            no: "Sakramentene er ikke bare symboler. Kirka lærer at de virkelig gir det de lover. Bibelen sier at dåpen frelser oss, og at den som spiser Kristi kropp og drikker hans blod, har evig liv.",
            am: "ምሥጢራት ምልክቶች ብቻ አይደሉም፤ ቤተ ክርስቲያን የተሰጡበትን ጸጋ በእውነት እንደሚያስገኙ ታስተምራለች። መጽሐፍ ቅዱስ ጥምቀት እንደሚያድነን፣ ሥጋውን የሚበላ ደሙንም የሚጠጣ የዘለዓለም ሕይወት እንዳለው ይናገራል።",
          },
          vers: ["1Pet 3:20-21", "John 6:53-54"],
        },
        {
          tekst: {
            no: "Sakramentene kalles også ሥርዓተ ቤተ ክርስቲያን, kirkas ordninger. Selve troen på dem forandres aldri, men hvert sakrament har en fast orden for hvordan det skal utføres, med egne bønner der vi ber om Den hellige ånds velsignelse.",
            am: "ሰባቱ ምሥጢራት ሥርዓተ ቤተ ክርስቲያን ተብለውም ይጠራሉ፤ የአፈጻጸም ሥርዓት ስላላቸው ነው። ለእያንዳንዱ ምሥጢር የመንፈስ ቅዱስን ጸጋ የምንለምንበት የተወሰነ ጸሎት አለው።",
          },
          vers: ["1Cor 14:40"],
        },
      ],
    },
    {
      id: "innstiftet",
      tittel: { no: "Kristus innstiftet dem – prestene utfører dem", am: "መሥራቻቸው ክርስቶስ ነው፤ ፈጻሚዎቻቸው ካህናት ናቸው" },
      punkter: [
        {
          tekst: {
            no: "Det er Jesus Kristus selv som har innstiftet sakramentene, gjennom det han lærte og det han gjorde. Apostlene sa aldri at de hadde funnet dem på selv. De kalte seg «forvaltere av Guds hemmeligheter».",
            am: "ምሥጢራተ ቤተ ክርስቲያንን የመሠረታቸው ጌታችን ኢየሱስ ክርስቶስ ራሱ ነው፤ በትምህርቱና በሥራው መሥርቷቸዋል። ሐዋርያት ምሥጢራቱን እኛ መሠረትናቸው አላሉም፤ «የእግዚአብሔር ምሥጢር መጋቢዎች» ብለው ራሳቸውን ጠሩ እንጂ።",
          },
          vers: ["1Cor 4:1", "Matt 28:19-20"],
        },
        {
          tekst: {
            no: "Kristus ga apostlene makt til å binde og løse. Apostlene innsatte biskoper, prester og diakoner ved bønn og håndspåleggelse. Fra dem har myndigheten gått videre i kirka helt til i dag.",
            am: "ጌታችን ለሐዋርያት የማሰርና የመፍታት ሥልጣን ሰጣቸው። ሐዋርያትም በጸሎትና በአንብሮተ እድ ኤጲስ ቆጶሳትን፣ ቀሳውስትንና ዲያቆናትን ሾሙ፤ ይህ ሥልጣን ከእነርሱ ጀምሮ እስከ ዛሬ በቤተ ክርስቲያን ይተላለፋል።",
          },
          vers: ["Matt 18:18", "Acts 14:23", "Acts 6:6"],
        },
        {
          tekst: {
            no: "En biskop (ኤጲስ ቆጶስ) kan utføre alle de sju sakramentene. Men for å vie en ny biskop må det være minst tre biskoper. En prest (ቄስ) kan utføre de seks andre, men kan ikke vie noen til prest. En diakon (ዲያቆን) utfører ingen sakramenter selv, men hjelper biskopen og presten.",
            am: "ኤጲስ ቆጶስ ሰባቱንም ምሥጢራት መፈጸም ይችላል፤ ነገር ግን ኤጲስ ቆጶስን ለመሾም ቢያንስ ሦስት ኤጲስ ቆጶሳት ያስፈልጋሉ። ቄስ ከክህነት በቀር ሌሎቹን ስድስቱን ምሥጢራት ይፈጽማል። ዲያቆን ግን ምሥጢራትን ራሱ አይፈጽምም፤ ኤጲስ ቆጶሱንና ቄሱን ይረዳል።",
          },
        },
        {
          tekst: {
            no: "Nåden kommer fra Gud, ikke fra hvor god presten er. Paulus sier at det ikke er den som planter eller vanner som betyr noe, men Gud som gir vekst. Jesus døpte ikke selv, det gjorde disiplene, men likevel ble det sagt at han døpte.",
            am: "ጸጋው የሚገኘው ከእግዚአብሔር እንጂ ከካህኑ ሕይወት አይደለም። ቅዱስ ጳውሎስ «የሚያሳድግ እግዚአብሔር እንጂ የሚተክል ቢሆን ወይም የሚያጠጣ ቢሆን አንዳች አይደለም» ይላል። ጌታችንም ራሱ አላጠመቀም፤ ደቀ መዛሙርቱ ያጠምቁ ነበር እንጂ፤ ቢሆንም እርሱ እንዳጠመቀ ተነገረ።",
          },
          vers: ["1Cor 3:7", "John 4:1-2"],
        },
        {
          tekst: {
            no: "Derfor kan vi være trygge: Den som tar imot et sakrament med tro, får nåden. Presten er Kristi sendebud, og det er Gud selv som virker gjennom ham.",
            am: "ስለዚህ ምሥጢሩን በእምነት የሚቀበል ጸጋውን ያገኛል። ካህኑ የክርስቶስ መልእክተኛ ነው፤ በእርሱ በኩል የሚሠራው እግዚአብሔር ራሱ ነው።",
          },
          vers: ["2Cor 5:20", "Phil 2:13"],
        },
      ],
    },
    {
      id: "hvorfor-sju",
      tittel: { no: "Hvorfor akkurat sju?", am: "ቍጥራቸው ለምን ሰባት ሆነ?" },
      punkter: [
        {
          tekst: {
            no: "Kirka viser til Ordspråkene: «Visdommen har bygd sitt hus, hun har hogd ut sju søyler.» Visdommen er vår Herre Jesus Kristus, og de sju søylene er de sju sakramentene. Bibelen kaller også Kristus «Guds visdom».",
            am: "ቤተ ክርስቲያን «ጥበብ ቤትዋን ሠራች፥ ሰባቱንም ምሰሶችዋን አቆመች» የሚለውን የመጽሐፈ ምሳሌ ቃል ትጠቅሳለች። ጥበብ የተባለ ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ ነው፤ ሰባቱ ምሰሶዎች ደግሞ ሰባቱ ምሥጢራተ ቤተ ክርስቲያን ናቸው። መጽሐፍ ቅዱስም ክርስቶስን «የእግዚአብሔር ጥበብ» ብሎ ይጠራዋል።",
          },
          vers: ["Prov 9:1", "1Cor 1:24"],
        },
        {
          tekst: {
            no: "De kalles søyler fordi de holder det åndelige livet til kirkas barn oppe, slik at det står fast og ikke rister. Noen lærere sier også at huset er kirka, der sakramentene blir utført.",
            am: "ምሰሶዎች መባላቸው የቤተ ክርስቲያን ልጆችን መንፈሳዊ ሕይወት እንዲጸና፣ እንዳይናወጽ ስለሚያደርጉ ነው። ጥበብ የሠራችው ቤት ምሥጢራቱ የሚፈጸሙባት ቅድስት ቤተ ክርስቲያን ናት ብለው የሚያስተምሩም አሉ።",
          },
        },
        {
          tekst: {
            no: "Sju er tallet for fullkommenhet. At sakramentene er sju, viser at de er fullkomne, og at de fører de troende fram til fullkommenhet.",
            am: "ሰባት የፍጹምነት ቍጥር ነው። ምሥጢራቱ ሰባት መሆናቸው ፍጹማን መሆናቸውንና ምእመናንን ለፍጹምነት የሚያበቁ መሆናቸውን ያሳያል።",
          },
        },
        {
          tekst: {
            no: "Alle de sju finnes i Bibelen. Kirkas lærere samlet det Kristus gjorde og det apostlene tok imot og praktiserte. De gamle ortodokse kirkene i øst har alle de sju sakramentene, og de sier at de har fått dem fra de første fedrene.",
            am: "ሰባቱም በቅዱሳት መጻሕፍት ይገኛሉ። የቤተ ክርስቲያን ሊቃውንት ጌታችን የሠራቸውንና ሐዋርያት ተቀብለው የፈጸሟቸውን ከመጻሕፍት ለቅመው አስቀመጡልን። ጥንታውያን ኦርቶዶክሳውያን አብያተ ክርስቲያናትም ሰባቱንም ምሥጢራት ይጠብቃሉ፤ ከቀደሙት አበው እንደ ተቀበሏቸውም ይመሰክራሉ።",
          },
        },
        {
          tekst: {
            no: "At sakramentene er sju, betyr ikke at Den hellige ånds nåde bare finnes i dem. «Det er forskjell på nådegaver, men Ånden er den samme.»",
            am: "ምሥጢራቱ ሰባት መሆናቸው የመንፈስ ቅዱስ ጸጋ በእነዚህ ብቻ ይወሰናል ማለት አይደለም፤ «የጸጋም ስጦታ ልዩ ልዩ ነው መንፈስ ግን አንድ ነው» ተብሏልና።",
          },
          vers: ["1Cor 12:4"],
        },
      ],
    },
    {
      id: "nytt-liv",
      tittel: { no: "Sakramentene som gir nytt liv", am: "የልጅነት ጸጋንና አዲስ ሕይወትን የሚያሰጡ ምሥጢራት" },
      ingress: {
        no: "Kirka deler de sju i tre grupper. Den første gruppen er dåpen, myron og nattverden. Gjennom dem blir vi født av Gud og blir hans barn.",
        am: "ሰባቱ ምሥጢራት በሦስት ክፍል ይከፈላሉ። የመጀመሪያው ክፍል ጥምቀት፣ ሜሮንና ቍርባን ናቸው፤ በእነርሱ ከእግዚአብሔር ተወልደን ልጅነትን እናገኛለን።",
      },
      punkter: [
        {
          tekst: {
            no: "ጥምቀት – dåpen. Ordet kommer av ge'ez «አጥመቀ», å dyppe ned i vann. Jesus innstiftet den. I dåpen blir vi født på nytt av vann og Ånd, får syndenes forlatelse og blir Guds barn. Den er døren inn til alle de andre sakramentene.",
            am: "ጥምቀት፤ «አጥመቀ» ከሚለው የግዕዝ ግሥ የወጣ ሲሆን በውኃ ውስጥ መነከር ማለት ነው። የመሠረታት ጌታችን ነው። በጥምቀት ዳግመኛ ከውኃና ከመንፈስ ቅዱስ እንወለዳለን፤ ኃጢአታችን ይሠረያል፤ የእግዚአብሔር ልጆች እንሆናለን። ወደ ሌሎቹ ምሥጢራት ሁሉ መግቢያ በር ናት።",
          },
          vers: ["John 3:5", "Matt 28:19", "Gal 3:27"],
        },
        {
          tekst: {
            no: "Vi blir dyppet ned i vannet tre ganger. Det er et bilde på at Jesus lå i graven tre dager og tre netter. Når vi kommer opp av vannet, er det et bilde på at han stod opp fra de døde den tredje dagen.",
            am: "ተጠማቂው በውኃ ውስጥ ሦስት ጊዜ ብቅ ጥልቅ ይላል። ይህም ጌታችን በመቃብር ሦስት ቀን ሦስት ሌሊት የማደሩ፣ ከውኃው መውጣታችን ደግሞ በሦስተኛው ቀን የመነሣቱ ምሳሌ ነው።",
          },
          vers: ["Rom 6:3-4"],
        },
        {
          tekst: {
            no: "ሜሮን – myron. Ordet er gresk og betyr en olje med søt duft som gleder hjertet. Myron er Den hellige ånds segl (ማኅተም). Rett etter dåpen salver presten 36 steder på kroppen med myron i korsets tegn. Slik får den døpte Den hellige ånds gaver, og den nye fødselen blir bekreftet.",
            am: "ሜሮን፤ የግሪክ ቃል ሲሆን ልብን የሚማርክ ጣፋጭ መዓዛ ያለው ዘይት ማለት ነው። ሜሮን ማኅተመ መንፈስ ቅዱስ ነው። ከጥምቀት በኋላ ወዲያው ካህኑ የተጠማቂውን ሠላሳ ስድስት ሕዋሳት በትእምርተ መስቀል ይቀባል። በዚህም ተጠማቂው ሀብተ መንፈስ ቅዱስን ይቀበላል፤ በጥምቀት ያገኘው ልጅነትም ይጸናል።",
          },
          vers: ["2Cor 1:21-22", "1John 2:20"],
        },
        {
          tekst: {
            no: "Myron ble innstiftet av Kristus, som lovte disiplene Den hellige ånd, blåste på dem og sendte Ånden på pinsedagen. Først ga apostlene Ånden ved å legge hendene på de døpte. Da de troende ble mange, kom salvingen med myron i stedet.",
            am: "ሜሮንን የመሠረተው ጌታችን ነው፤ ለደቀ መዛሙርቱ መንፈስ ቅዱስን ተስፋ ሰጣቸው፤ እፍ አለባቸው፤ በበዓለ ኀምሳም መንፈስ ቅዱስን ላከላቸው። ሐዋርያት በመጀመሪያ በተጠመቁት ላይ እጃቸውን እየጫኑ የመንፈስ ቅዱስን ጸጋ ያሳድሩ ነበር። ምእመናን ሲበዙ ግን አንብሮተ እድ በቅብዐ ሜሮን ተተካ።",
          },
          vers: ["John 20:22", "Acts 8:14-17"],
        },
        {
          tekst: {
            no: "Gjennom myron får vi Åndens gaver: visdom og forstand, råd og styrke, kunnskap og gudsfrykt. Myron brukes også når en ny kirke og nye hellige kar blir innviet.",
            am: "በቅብዐ ሜሮን የጥበብና የማስተዋል መንፈስ፣ የምክርና የኃይል መንፈስ፣ የዕውቀትና እግዚአብሔርን የመፍራት መንፈስ ያድርብናል። ቅብዐ ሜሮን አዲስ ለተሠራ ቤተ ክርስቲያንና ለአዳዲስ ንዋያተ ቅድሳት ማክበሪያም ያገለግላል።",
          },
          vers: ["Isa 11:2"],
        },
        {
          tekst: {
            no: "ቍርባን – nattverden. Ordet betyr gave og offer. Vi kaller det ቍርባን fordi Kristi kropp og blod er gitt oss gratis, av nåde. Jesus innstiftet nattverden skjærtorsdag kveld: Han tok brødet, velsignet og brøt det og sa: «Dette er min kropp.» Så tok han begeret og sa: «Dette er mitt blod, den nye pakts blod.»",
            am: "ቍርባን፤ አምኃ፣ መባ፣ ስጦታ ማለት ነው። ሥጋውና ደሙ የተሰጠን በነጻ፣ በችሮታ ስለ ሆነ ቍርባን ይባላል። ጌታችን በጸሎተ ሐሙስ ማታ ኅብስቱን አንሥቶ ባርኮ ቆርሶ «ይህ ሥጋዬ ነው» አለ፤ ጽዋውንም አንሥቶ «… የአዲስ ኪዳን ደሜ ይህ ነው» አለ።",
          },
          vers: ["Matt 26:26-28", "1Cor 11:23-25"],
        },
        {
          tekst: {
            no: "Når presten ber over brødet og vinen i ቅዳሴ, blir brødet Kristi virkelige kropp og vinen hans virkelige blod. Vi ser brød og vin, men vi tar imot hans hellige kropp og dyrebare blod. Det gir oss syndenes forlatelse og evig liv.",
            am: "ካህኑ በቅዳሴ ጸሎት ኅብስቱንና ወይኑን ሲባርክ ኅብስቱ አማናዊ የክርስቶስ ሥጋ፣ ወይኑ አማናዊ ደሙ ይሆናል። ዓይናችን ኅብስትና ወይን ያያል፤ እኛ ግን ቅዱስ ሥጋውንና ክቡር ደሙን እንቀበላለን። የኃጢአት ሥርየትንና የዘለዓለም ሕይወትን ያሰጠናል።",
          },
          vers: ["John 6:54-56"],
        },
      ],
    },
    {
      id: "legedom",
      tittel: { no: "Sakramentene som leger sjel og kropp", am: "የነፍስንና የሥጋን ቍስል የሚፈውሱ ምሥጢራት" },
      ingress: {
        no: "Den andre gruppen er omvendelsen (ንስሐ) og salving av syke. Synd gjør sjelen syk, og sykdom rammer kroppen. Gjennom disse to blir vi helbredet.",
        am: "ሁለተኛው ክፍል ንስሐና ቀንዲል ናቸው። ኃጢአት ነፍስን ታሳምማለች፤ ደዌ ደግሞ ሥጋን ያገኛል፤ በእነዚህ ሁለቱ ምሥጢራት እንፈወሳለን።",
      },
      punkter: [
        {
          tekst: {
            no: "ንስሐ – omvendelsen. Den som har syndet etter dåpen, angrer av hjertet, bestemmer seg for ikke å gjøre det igjen, kneler foran Gud og presten og bekjenner syndene sine. Slik blir han løst fra syndens lenker og får tilgivelse fra Gud.",
            am: "ንስሐ፤ አንድ ሰው ከጥምቀት በኋላ የሠራውን ኃጢአት ላለመድገም ወስኖ፣ ከልቡ ተጸጽቶ፣ በእግዚአብሔርና በካህኑ ፊት ተንበርክኮ ኃጢአቱን በመናዘዝ ከኃጢአት እስራት የሚፈታበትና ከእግዚአብሔር ይቅርታ የሚያገኝበት ምሥጢር ነው።",
          },
          vers: ["Prov 28:13", "1John 1:8-9"],
        },
        {
          tekst: {
            no: "Jesus innstiftet omvendelsens sakrament. Han sa til Peter: «Det du binder på jorden, skal være bundet i himmelen.» Etter oppstandelsen blåste han på apostlene og sa: «Tilgir dere noen syndene, er de tilgitt.»",
            am: "ምሥጢረ ንስሐን የመሠረተው ጌታችን ነው። ለቅዱስ ጴጥሮስ «በምድር የምታስረው ሁሉ በሰማያት የታሰረ ይሆናል» አለው። ከትንሣኤውም በኋላ እፍ ብሎባቸው «ኃጢአታቸውን ይቅር ያላችኋቸው ሁሉ ይቀርላቸዋል» አላቸው።",
          },
          vers: ["Matt 16:19", "John 20:22-23"],
        },
        {
          tekst: {
            no: "Omvendelsens sakrament har tre deler: ኀዘን (sorg over synden), ኑዛዜ (å fortelle syndene til presten uten å skjule noe) og ቀኖና (botsøvelse – faste, bønn, knefall eller å gi til de fattige, som presten gir). Presten må aldri fortelle noen det han har hørt i skriftemålet.",
            am: "ንስሐ የሚገባ ሰው ሦስት ነገሮችን ይፈጽማል፤ ኀዘን፣ ኑዛዜና ቀኖና። በኃጢአቱ ያዝናል፤ ሳይፈራና ሳይደብቅ ለካህኑ ይናዘዛል፤ ካህኑ በሚሰጠው ቀኖና ይጾማል፣ ይጸልያል፣ ይሰግዳል፣ ይመጸውታል። ካህኑም በኑዛዜ የሰማውን ለማንም አይገልጥም።",
          },
          vers: ["Acts 3:19"],
        },
        {
          tekst: {
            no: "ቀንዲል – salving av syke. Ordet betyr lampe som brenner med olje. De første kristne tente sju lamper når dette sakramentet ble utført. Presten ber for den syke og salver ham med hellig olje, og ved Guds nåde blir den syke helbredet.",
            am: "ቀንዲል፤ በዘይት የሚበራ መብራት ማለት ነው። የጥንት ክርስቲያኖች ይህ ምሥጢር በሚፈጸምበት ጊዜ ሰባት መብራት ያበሩ ነበር። ካህኑ ለታመመው ክርስቲያን ይጸልያል፤ ቅብዐ ቅዱስም ይቀባዋል፤ በእግዚአብሔር ጸጋ ታማሚው ከደዌው ይፈወሳል።",
          },
        },
        {
          tekst: {
            no: "Jesus sendte apostlene for å helbrede de syke, og de salvet mange syke med olje og gjorde dem friske. Jakob skriver: «Er noen av dere syk, skal han kalle til seg menighetens eldste (prestene). De skal salve ham med olje i Herrens navn og be for ham.» Da får den syke også syndene tilgitt.",
            am: "ጌታችን ሐዋርያትን ድውያንን እንዲፈውሱ ላካቸው፤ እነርሱም ብዙ ድውያንን ዘይት እየቀቡ ፈወሷቸው። ቅዱስ ያዕቆብም የታመመ ሰው የቤተ ክርስቲያንን ቀሳውስት እንዲጠራ፣ እነርሱም በጌታ ስም ዘይት ቀብተው እንዲጸልዩለት ጽፏል፤ ኃጢአትም ሠርቶ እንደ ሆነ ይሠረይለታል።",
          },
          vers: ["Mark 6:13", "Jas 5:14-15"],
        },
        {
          tekst: {
            no: "Oljen er ren olivenolje som biskopen eller presten velsigner med egne bønner. Kirka har sju bønner til dette sakramentet, og den som er syk, skal ta imot det med tro. Olje som blir solgt og som folk smører seg med hjemme på egen hånd, er ikke ቀንዲል. Guds nåde kan ikke kjøpes for penger.",
            am: "ቅብዐ ቀንዲል ከንጹሕ የወይራ ዘይት ይዘጋጃል፤ ጳጳሱ ወይም ቄሱ ይባርከዋል። ለዚህ ምሥጢር የተዘጋጁ ሰባት ጸሎቶች አሉ፤ ታማሚውም እንደሚድን አምኖ ሊቀበለው ይገባል። በየቦታው የሚሸጡና ሰዎች በቤታቸው በራሳቸው የሚቀቡት ዘይት ይህን ቅዱስ ምሥጢር ሊተካ አይችልም፤ የእግዚአብሔር ጸጋ በገንዘብ አይገዛምና።",
          },
          vers: ["Acts 8:20"],
        },
      ],
    },
    {
      id: "enhet-tjeneste",
      tittel: { no: "Sakramentene som gir enhet og tjeneste", am: "የአንድነትንና የአገልግሎትን ጸጋ የሚያሰጡ ምሥጢራት" },
      ingress: {
        no: "Den tredje gruppen er ekteskapet og prestevielsen. ተክሊል gir brudeparet nåden til å bli ett. ክህነት gir den som blir viet, nåden til å tjene.",
        am: "ሦስተኛው ክፍል ተክሊልና ክህነት ናቸው። በተክሊል ሙሽሮች የአንድነትን ጸጋ ይቀበላሉ፤ በክህነት ተሿሚው የአገልግሎትን ጸጋ ይቀበላል።",
      },
      punkter: [
        {
          tekst: {
            no: "ተክሊል – ekteskapet. Ordet kommer av ge'ez «ከለለ», som betyr å hedre, skille ut og hellige. Ved vielsen blir brudgommen og bruden kronet med krone (አክሊል), som en konge og en dronning.",
            am: "ተክሊል፤ «ከለለ» ከሚለው የግዕዝ ግሥ የወጣ ሲሆን አከበረ፣ ለየ፣ ቀደሰ ማለት ነው። በጋብቻቸው ጊዜ ሙሽራው እንደ ንጉሥ፣ ሙሽሪት እንደ ንግሥት ሆነው አክሊል ይቀዳጃሉ።",
          },
        },
        {
          tekst: {
            no: "Gud selv innstiftet ekteskapet da han skapte Adam og Eva. Jesus velsignet det da han var i bryllupet i Kana, og han lærte: «De to skal være én kropp. Det Gud har sammenføyd, skal mennesket ikke skille.»",
            am: "ጋብቻን የመሠረተው እግዚአብሔር ነው፤ አዳምንና ሔዋንን በፈጠረ ጊዜ። ጌታችንም በቃና ዘገሊላ ሠርግ ተገኝቶ ጋብቻን ባርኳል፤ «ሁለቱም አንድ ሥጋ ይሆናሉ … እግዚአብሔር ያጣመረውን እንግዲህ ሰው አይለየው» ብሎም አስተምሯል።",
          },
          vers: ["Gen 2:18", "John 2:1-2", "Matt 19:5-6"],
        },
        {
          tekst: {
            no: "I ተክሊል får mann og kone Guds nåde gjennom prestens bønn og velsignelse. De blir ett, slik Kristus og kirka er ett, og ekteskapet blir beseglet med nattverden. Begge må være ortodokse kristne. ተክሊል er for dem som har holdt seg rene før ekteskapet. Andre kan gifte seg i kirka med nattverd (ሥርዓተ ቍርባን).",
            am: "በተክሊል ተጋቢዎች በካህናት ጸሎትና ቡራኬ ጸጋ እግዚአብሔርን ይቀበላሉ፤ እንደ ክርስቶስና እንደ ቤተ ክርስቲያን በፍጹም ፍቅርና አንድነት ይጣመራሉ፤ ጋብቻቸውም በቅዱስ ቍርባን ይጸናል። ሁለቱም የኦርቶዶክስ ተዋሕዶ እምነት ተከታዮች መሆን አለባቸው። ተክሊል ድንግልናቸውን ለጠበቁ ይፈጸማል፤ ያልጠበቁ ግን ጋብቻቸውን በሥርዓተ ቍርባን ሊፈጽሙ ይችላሉ።",
          },
          vers: ["Eph 5:31-32", "Heb 13:4"],
        },
        {
          tekst: {
            no: "ክህነት – prestevielsen. Ordet kommer av ge'ez «ተክህነ», å tjene. ካህን betyr tjener. ክህነት gir makt til å binde og løse, å velsigne og å hellige, og gjennom den blir de andre sakramentene utført.",
            am: "ክህነት፤ «ተክህነ» (አገለገለ) ከሚለው የግዕዝ ግሥ የተገኘ ነው፤ ካህን ማለትም አገልጋይ ማለት ነው። ምሥጢረ ክህነት የማሰር፣ የመፍታት፣ የመባረክና የመቀደስ ሥልጣን ያሰጣል፤ ሌሎቹም ምሥጢራት የሚፈጸሙት በእርሱ ነው።",
          },
        },
        {
          tekst: {
            no: "Kristus innstiftet ክህነት. Han ba en hel natt, og så valgte han ut de tolv apostlene. Etter oppstandelsen blåste han på dem og ga dem makt til å tilgi synder. Ingen tar seg selv denne æren; han må være kalt av Gud, slik Aron var.",
            am: "ምሥጢረ ክህነትን የመሠረተው ጌታችን ነው። ሌሊቱን ሁሉ ሲጸልይ አድሮ ዐሥራ ሁለቱን ሐዋርያት መረጠ። ከትንሣኤውም በኋላ እፍ ብሎባቸው ኃጢአትን ይቅር የማለት ሥልጣን ሰጣቸው። ይህንንም ክብር ማንም ለራሱ አይወስድም፤ እንደ አሮን በእግዚአብሔር የተጠራ ነው እንጂ።",
          },
          vers: ["Luke 6:12-13", "John 20:22-23", "Heb 5:4"],
        },
        {
          tekst: {
            no: "ክህነት har tre trinn: diakon (ዲቁና), prest (ቅስና) og biskop (ጵጵስና). Den som blir viet, får gaven ved at biskopen ber og legger hendene på ham (አንብሮተ እድ). Ingen skal betale penger for å bli viet.",
            am: "የክህነት መዓርጋት ሦስት ናቸው፤ ዲቁና፣ ቅስናና ጵጵስና። ተሿሚው ጸጋውን የሚቀበለው በኤጲስ ቆጶሱ ጸሎትና በአንብሮተ እድ ነው። ለክህነት ሹመት ገንዘብ መክፈል ፈጽሞ አይገባም።",
          },
          vers: ["1Tim 4:14", "2Tim 1:6", "Acts 8:18-20"],
        },
      ],
    },
    {
      id: "en-gang",
      tittel: { no: "Én gang – eller mange ganger?", am: "የማይደገሙና የሚደገሙ ምሥጢራት" },
      ingress: {
        no: "Fire av sakramentene tar vi bare imot én gang. Tre kan vi ta imot igjen og igjen.",
        am: "ከሰባቱ ምሥጢራት አራቱ አይደገሙም፤ ሦስቱ ግን ይደገማሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "Én gang: dåpen (ጥምቀት), myron (ሜሮን), prestevielsen (ክህነት) og ekteskapet (ተክሊል).",
            am: "የማይደገሙ ምሥጢራት፤ ጥምቀት፣ ሜሮን፣ ክህነትና ተክሊል ናቸው።",
          },
        },
        {
          tekst: {
            no: "Dåpen gjentas ikke, fordi den er et bilde på Kristi død og oppstandelse, som skjedde én gang. Et menneske blir født av foreldrene sine bare én gang, og slik blir vi også født av Gud i dåpen bare én gang. Det er «én Herre, én tro, én dåp».",
            am: "ጥምቀት አትደገምም፤ የክርስቶስ ሞትና ትንሣኤ አንድ እንደ ሆነ ጥምቀትም አንዲት ናት። ሰው ከእናት ከአባቱ አንድ ጊዜ እንደሚወለድ ከጥምቀትም አንድ ጊዜ ከእግዚአብሔር ይወለዳል። «አንድ ጌታ አንድ ሃይማኖት አንዲት ጥምቀት» ተብሏልና።",
          },
          vers: ["Eph 4:5", "Rom 6:3"],
        },
        {
          tekst: {
            no: "Myron er Den hellige ånds segl, og et segl tas ikke bort. Myron brukes ved dåp, ved ተክሊል og når prester blir viet, men aldri mer enn én gang til samme tjeneste. ክህነት gjentas heller ikke: En diakon kan senere bli prest, men ingen blir viet to ganger til samme trinn. ተክሊል gjentas ikke, for i ekteskapet blir to mennesker ett.",
            am: "ሜሮን የመንፈስ ቅዱስ ማኅተም ነው። ከጥምቀት በኋላ፣ በተክሊልና በክህነት ሹመት ይፈጸማል፤ ለአንዱ አገልግሎት ግን ከአንድ ጊዜ በላይ አይፈጸምም። ክህነትም አይደገምም፤ ዲያቆን ኋላ ቄስ ሊሆን ይችላል፤ አንዱ ሹመት ግን ሁለት ጊዜ አይፈጸምም። ተክሊልም አይደገምም፤ ሁለቱ አንድ አካል ይሆናሉና።",
          },
        },
        {
          tekst: {
            no: "Mange ganger: nattverden (ቍርባን), omvendelsen (ንስሐ) og salving av syke (ቀንዲል). Kroppen trenger mat hver dag, og sjelen trenger Kristi kropp og blod igjen og igjen. Vi synder igjen og trenger å gjøre bot igjen. Og hver gang vi blir syke, kan vi bli salvet på nytt.",
            am: "የሚደገሙ ምሥጢራት፤ ቍርባን፣ ንስሐና ቀንዲል ናቸው። ሰው ለሥጋው በየዕለቱ ምግብ እንደሚያስፈልገው ዘወትር የክርስቶስን ሥጋና ደም መመገብ ያስፈልገዋል። በበደለ ጊዜ ሁሉ ንስሐ ይገባል። በታመመ ጊዜም ሁሉ ቅብዐ ቀንዲል ሊቀባ ይችላል።",
          },
          vers: ["John 6:57", "1Cor 11:26"],
        },
      ],
    },
    {
      id: "for-alle",
      tittel: { no: "For alle – eller for noen?", am: "ለሁሉ የሚፈጸሙና ለተወሰኑ ብቻ የሚፈጸሙ" },
      punkter: [
        {
          tekst: {
            no: "Dåpen, myron og nattverden er nødvendige for frelsen. Hver kristen må ta imot dem. Jesus sa: «Den som tror og blir døpt, skal bli frelst», og «Hvis dere ikke spiser Menneskesønnens kropp og drikker hans blod, har dere ikke liv i dere.»",
            am: "ጥምቀት፣ ሜሮንና ቍርባን ለመዳን የግድ የሚያስፈልጉ ናቸው፤ ክርስቲያን ሁሉ ሊቀበላቸው ይገባል። ጌታችን «ያመነ የተጠመቀም ይድናል»፤ «የሰውን ልጅ ሥጋ ካልበላችሁ ደሙንም ካልጠጣችሁ በራሳችሁ ሕይወት የላችሁም» ብሏል።",
          },
          vers: ["Mark 16:16", "John 6:53"],
        },
        {
          tekst: {
            no: "Omvendelsen (ንስሐ) er også for alle. Alle mennesker er svake og synder, og alle trenger å forsones med Gud. Derfor sier kirka at de fire første sakramentene skal alle troende ta imot.",
            am: "ንስሐም ለሁሉ ይፈጸማል፤ የሰው ልጅ ሁሉ በሥጋው ደካማ ነው፤ ኃጢአትም ይሠራል፤ ከእግዚአብሔር እንዳይለይ ለዕርቅና ለሥርየተ ኃጢአት ሁሉ ንስሐ ያስፈልገዋል። ስለዚህ የመጀመሪያዎቹ አራቱ ለምእመናን ሁሉ አስፈላጊ ናቸው።",
          },
          vers: ["1John 1:8-9"],
        },
        {
          tekst: {
            no: "ክህነት er bare for noen: for dem Gud har kalt og utvalgt, som har lært det som trengs, og som er klare til å tjene ham i renhet. Ikke alle kan bli prester. Bare menn kan bli viet til ክህነት.",
            am: "ምሥጢረ ክህነት ለተመረጡ፣ ለተለዩ፣ ለክህነት የሚያበቃ ትምህርት ለተማሩና በንጽሐ ሥጋና ነፍስ እግዚአብሔርን ለማገልገል ለተዘጋጁ ብቻ ይሰጣል። ሰው ሁሉ ካህን መሆን አይችልም። ከምሥጢራቱ የጾታ ልዩነት የሚያደርገው ክህነት ብቻ ነው።",
          },
          vers: ["Heb 5:4", "1Tim 3:1-2"],
        },
        {
          tekst: {
            no: "ተክሊል er for dem som skal gifte seg. Munker og nonner, som lever i ምናኔ (et liv viet til Gud), gifter seg ikke. ቀንዲል er for dem som er syke. Selv om disse tre ikke er for alle, er ekteskapet og prestevielsen svært viktige for kirka: Uten ekteskap blir det ingen nye slekter, og uten prester blir ingen sakramenter utført.",
            am: "ተክሊል ወደ ጋብቻ ለሚመጡ ይፈጸማል፤ በምናኔ የሚኖሩ ጋብቻ አያስፈልጋቸውም። ቀንዲልም ደዌ ለገጠማቸው ብቻ ይፈጸማል። እነዚህ ለሁሉ ባይሆኑም ተክሊልና ክህነት ለቤተ ክርስቲያን እጅግ አስፈላጊ ናቸው፤ በጋብቻ የሰው ዘር ይበዛል፤ ያለ ካህናትም ምሥጢራት አይፈጸሙም።",
          },
          vers: ["Gen 1:28"],
        },
      ],
    },
    {
      id: "rekkefolge",
      tittel: { no: "Rekkefølgen – dåpen kommer først", am: "የምሥጢራቱ ቅደም ተከተል" },
      punkter: [
        {
          tekst: {
            no: "Dåpen er alltid først. Uten dåp kan vi ikke ta imot noen av de andre sakramentene. Gutter døpes når de er 40 dager gamle og jenter når de er 80 dager. Voksne som kommer til troen, døpes etter at de har fått undervisning.",
            am: "ጥምቀት ሁልጊዜ ትቀድማለች፤ ሳንጠመቅ ሌሎቹን ምሥጢራት መቀበል አንችልም። ወንዶች ሕፃናት በአርባ፣ ሴቶች በሰማንያ ቀናቸው ይጠመቃሉ፤ አዳዲስ ዐዋቂ አማኞች ደግሞ ከተማሩ በኋላ ይጠመቃሉ።",
          },
          vers: ["John 3:5"],
        },
        {
          tekst: {
            no: "Så kommer myron, rett etter dåpen, samme dag. Slik kom Den hellige ånd ned over Jesus da han steg opp av vannet i Jordan. Til slutt tar den døpte imot nattverden. Disse tre skjer på samme dag når et barn blir døpt (ክርስትና ሲነሣ).",
            am: "ከጥምቀት በኋላ ወዲያው ሳይውል ሳያድር ሜሮን ይፈጸማል፤ ጌታችን ተጠምቆ ከውኃ እንደ ወጣ መንፈስ ቅዱስ በርግብ አምሳል እንደ ወረደበት ነው። ከዚያም ተጠማቂው ይቈርባል። ሕፃናት ክርስትና ሲነሡ ሦስቱ በአንድ ቀን ይፈጸማሉ።",
          },
          vers: ["Matt 3:16", "Acts 8:17"],
        },
        {
          tekst: {
            no: "Kirka sier at disse tre er vitnene om at vi er kristne. Johannes skriver: «Det er tre som vitner: Ånden, vannet og blodet, og de tre er ett.»",
            am: "ምእመናን ሁሉ ክርስቲያንነታቸውን የሚያስመሰክሩት በእነዚህ በሦስቱ ነው። ቅዱስ ዮሐንስ «የሚመሰክሩት መንፈሱና ውኃው ደሙም ሦስት ናቸውና፤ ሦስቱም በአንድ ይስማማሉ» ብሏል።",
          },
          vers: ["1John 5:8"],
        },
        {
          tekst: {
            no: "Senere i livet går vi til skriftemål før vi tar imot nattverden, for hver og en skal prøve seg selv før han spiser av brødet og drikker av begeret.",
            am: "ከዚያ በኋላ በሕይወታችን ቍርባን ከመቀበላችን በፊት ንስሐ እንገባለን፤ «ሰው ግን ራሱን ይፈትን፥ እንዲሁም ከእንጀራው ይብላ ከጽዋውም ይጠጣ» ተብሏልና።",
          },
          vers: ["1Cor 11:28"],
        },
      ],
    },
    {
      id: "fem-mysteriene",
      tittel: { no: "Sakramentene og de fem mysteriene", am: "ምሥጢራተ ቤተ ክርስቲያንና አዕማደ ምሥጢር" },
      punkter: [
        {
          tekst: {
            no: "De fem mysteriene (አዕማደ ምሥጢር) er grunnmuren i det vi tror: treenigheten, menneskevordelsen, dåpen, nattverden og de dødes oppstandelse. De sju sakramentene er hellige handlinger der vi tar imot Guds nåde.",
            am: "አምስቱ አዕማደ ምሥጢር የእምነታችን መሠረቶች ናቸው፤ ምሥጢረ ሥላሴ፣ ምሥጢረ ሥጋዌ፣ ምሥጢረ ጥምቀት፣ ምሥጢረ ቍርባንና ምሥጢረ ትንሣኤ ሙታን። ሰባቱ ምሥጢራተ ቤተ ክርስቲያን ደግሞ የእግዚአብሔርን ጸጋ የምንቀበልባቸው ቅዱሳት ሥርዓቶች ናቸው።",
          },
        },
        {
          tekst: {
            no: "Dåpen og nattverden hører hjemme begge steder. Vi tror på dem som søyler i troen, og vi tar imot dem som sakramenter.",
            am: "ጥምቀትና ቍርባን በሁለቱም ውስጥ ይገኛሉ፤ እንደ አዕማደ ምሥጢር እናምንባቸዋለን፤ እንደ ምሥጢራተ ቤተ ክርስቲያን ደግሞ እንቀበላቸዋለን።",
          },
          vers: ["John 3:5", "John 6:53"],
        },
        {
          tekst: {
            no: "Sakramentene bygger på de fem mysteriene. Vi blir døpt i den treenige Guds navn. Dåpen gir oss nytt liv fordi Sønnen ble menneske, døde og stod opp. Og nattverden er hans virkelige kropp og blod, som gir oss håp om oppstandelsen: «Jeg skal reise ham opp på den siste dag.»",
            am: "ምሥጢራተ ቤተ ክርስቲያን በአዕማደ ምሥጢር ላይ የተመሠረቱ ናቸው። የምንጠመቀው በአብ በወልድ በመንፈስ ቅዱስ ስም ነው። ጥምቀት አዲስ ሕይወት የምትሰጠን ወልድ ሰው ሆኖ ስለ ሞተና ስለ ተነሣ ነው። ቍርባንም አማናዊ ሥጋውና ደሙ ነው፤ «እኔም በመጨረሻው ቀን አስነሣዋለሁ» ብሎ የትንሣኤን ተስፋ ሰጥቶናል።",
          },
          vers: ["Matt 28:19", "Rom 6:4", "John 6:54"],
        },
      ],
    },
    {
      id: "andre-velsignelser",
      tittel: { no: "Andre velsignelser som ikke er sakramenter", am: "ከሰባቱ ምሥጢራት ውጭ ያሉ በረከቶች" },
      ingress: {
        no: "Kirka gir oss også andre velsignelser. De er hellige og gir velsignelse, men de er ikke blant de sju sakramentene.",
        am: "ቤተ ክርስቲያን ሌሎች በረከቶችንም ትሰጠናለች። ቅዱሳትና በረከት የሚገኝባቸው ናቸው፤ ከሰባቱ ምሥጢራት ግን አይቈጠሩም።",
      },
      punkter: [
        {
          tekst: {
            no: "ጸበል (også skrevet ጠበል) er hellig vann som det er bedt over, eller som har sprunget fram ved et under. Ved Guds kraft blir syke helbredet i ጸበል. Allerede i Det gamle testamentet ble Naaman frisk da han dukket seg sju ganger i Jordan, og Jesus sendte den blinde for å vaske seg i dammen Siloa.",
            am: "ጸበል (ጠበል) የተባረከ፣ የተጸለየበት ወይም በተአምራት የፈለቀ ቅዱስ ውኃ ነው፤ በእግዚአብሔር ኃይል ሕሙማን ይፈወሱበታል። ንዕማን በዮርዳኖስ ሰባት ጊዜ ብቅ ጥልቅ ብሎ ተፈወሰ፤ ጌታችንም ዕውሩን «ሂድና በሰሊሆም መጠመቂያ ታጠብ» አለው።",
          },
          vers: ["2Kgs 5:14", "John 9:7"],
        },
        {
          tekst: {
            no: "Mange ጸበል har navnet til en helgen, som Marias ጸበል eller Mikaels ጸበል. Det er for å minnes helgenene, for «den rettferdiges minne er til velsignelse». Men det er Gud som helbreder gjennom vannet. Vi bruker ጸበል med tro, renhet og gudsfrykt.",
            am: "ብዙ ጸበሎች በቅዱሳን ስም ይጠራሉ፤ የማርያም ጸበል፣ የሚካኤል ጸበል እንደሚባለው። ይህም ቅዱሳኑ እንዲታሰቡበት ነው፤ «የጻድቅ መታሰቢያ ለበረከት ነው» ተብሏልና። በጸበሉ አድሮ ሕሙማንን የሚፈውሰው ግን የእግዚአብሔር ኃይል ነው። ጸበሉን በእምነት፣ በንጽሕናና በፈሪሃ እግዚአብሔር እንጠቀምበታለን።",
          },
          vers: ["Prov 10:7", "Isa 56:5"],
        },
        {
          tekst: {
            no: "Velsignelse med korset: Presten velsigner folket med håndkorset, og vi kysser korset (መሳለም). Korset er tegnet på frelsen, fordi Kristus ble korsfestet på det og forsonte oss med Gud. For oss som blir frelst, er korset Guds kraft.",
            am: "በመስቀል መባረክ፤ ካህኑ በእጅ መስቀሉ ሕዝቡን ይባርካል፤ እኛም መስቀሉን እንሳለማለን። መስቀል የመዳን ምልክት ነው፤ ክርስቶስ ተሰቅሎበት ከእግዚአብሔር ጋር አስታርቆናልና። «የመስቀሉ ቃል ለሚጠፉት ሞኝነት፥ ለእኛ ለምንድን ግን የእግዚአብሔር ኃይል ነውና።»",
          },
          vers: ["1Cor 1:18", "Eph 2:16"],
        },
        {
          tekst: {
            no: "ማተብ er snoren rundt halsen som presten binder på oss etter dåpen og myron. Ordet kommer av ge'ez «አተበ», å vise eller merke. ማተብ er et tegn som viser at vi er døpt og hører til troen. De tre trådene er et bilde på Faderen, Sønnen og Den hellige ånd, og at de er tvunnet sammen til én snor viser at de er én Gud.",
            am: "ማተብ ከጥምቀትና ከሜሮን በኋላ ካህናት በአንገታችን የሚያስሩልን የክርስትና ምልክት የሆነ ክር ነው። «አተበ» (አመለከተ) ከሚለው የግዕዝ ቃል የወጣ ሲሆን ለተጠመቁ ክርስቲያኖች የሃይማኖት ምልክትና መታወቂያ ነው። ሦስቱ ክሮች የአብ የወልድ የመንፈስ ቅዱስ ምሳሌ ሲሆኑ አንድ ላይ መገመዳቸው ሥላሴ አንድ አምላክ መሆናቸውን ያመለክታል።",
          },
          vers: ["Gal 3:27"],
        },
        {
          tekst: {
            no: "Skikken med ማተብ begynte på 400-tallet med Jakob Baradaios (ያዕቆብ ዘእልበረዳኢ), en elev av den hellige Dioskoros. Han bandt tråder om halsen på de troende for å skille de ortodokse fra dem som lærte feil om Kristus.",
            am: "ማተብ የማሰር ልማድ የጀመረው በአምስተኛው መቶ ዓመት የቅዱስ ዲዮስቆሮስ ደቀ መዝሙር በነበረው በያዕቆብ ዘእልበረዳኢ ዘመን ነው፤ ኦርቶዶክሳውያንን ከመናፍቃን ለመለየት በአንገታቸው ክር ያስርላቸው ጀመረ።",
          },
          andre: [
            {
              no: "ሃይማኖተ አበው, ድርሳነ ያዕቆብ (etter søndagsskoleboka ሥርዓተ ቤተ ክርስቲያን, 8. klasse)",
              am: "ሃይማኖተ አበው፣ ድርሳነ ያዕቆብ (ሥርዓተ ቤተ ክርስቲያን፣ የ፰ኛ ክፍል መማሪያ)",
            },
          ],
        },
        {
          tekst: {
            no: "Forskjellen: Et sakrament er innstiftet av Kristus, utføres av en biskop eller prest med faste bønner, og gir en bestemt nåde, som ny fødsel, Den hellige ånd eller syndenes forlatelse. ጸበል, korset og ማተብ er velsignelser og tegn på troen. De er gode og hellige, men de erstatter aldri sakramentene.",
            am: "ልዩነታቸው፤ ምሥጢር በክርስቶስ የተመሠረተ፣ በኤጲስ ቆጶስ ወይም በቄስ በተወሰነ ጸሎት የሚፈጸምና የተወሰነ ጸጋ የሚያሰጥ ነው፤ ልጅነትን፣ ሀብተ መንፈስ ቅዱስን ወይም ሥርየተ ኃጢአትን የመሰለ። ጸበል፣ መስቀልና ማተብ ግን በረከቶችና የሃይማኖት ምልክቶች ናቸው፤ ቅዱሳን ናቸው፤ ምሥጢራቱን ግን ፈጽሞ አይተኩም።",
          },
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "«Det hender at lederne er onde og folket rettferdig. Men nåden avhenger ikke av prestenes liv. Alt avhenger av Guds kraft, han som alene gir nåden gjennom sakramentet.»",
        am: "«መሪዎቹ ክፉዎች፣ ምእመናኑ ደግሞ ጻድቃን የሚሆኑበት ጊዜ አለ። ጸጋው ግን በካህናቱ ሕይወት ላይ የተመሠረተ አይደለም፤ ሁሉ በምሥጢሩ በኩል ጸጋን በሚሰጥ በእግዚአብሔር ኃይል ብቻ ነው።» (ከእንግሊዝኛው የተተረጐመ)",
      },
      kilde: "Sitert i ethiopianorthodox.org: Introduction to Church Sacraments, del IV",
    },
    {
      navn: { no: "Hellige Athanasius", am: "ቅዱስ አትናቴዎስ" },
      tekst: {
        no: "«Presten helliger ikke dåpsvannet, han utfører bare tjenesten, og for den får han nåde fra Gud.» Og: «Om vi døper, salver med myron og tilgir, er alt Kristi verk; det er han som gjør det.»",
        am: "«ካህኑ የጥምቀቱን ውኃ አይቀድስም፤ የሚገባውን አገልግሎት ብቻ ይፈጽማል፤ ስለዚህም ከእግዚአብሔር ጸጋን ያገኛል።» ደግሞም «ብናጠምቅ፣ ሜሮን ብንቀባ፣ ኃጢአትን ይቅር ብንል ሁሉ የክርስቶስ ሥራ ነው፤ የሚፈጽመው እርሱ ነው።» (ከእንግሊዝኛው የተተረጐመ)",
      },
      kilde: "Sitert i ethiopianorthodox.org: Introduction to Church Sacraments, del IV",
    },
    {
      navn: { no: "ዲድስቅልያ – apostlenes kirkeordning", am: "ዲድስቅልያ" },
      tekst: {
        no: "Til presten som tar imot skriftemål: «Behandle den syke som en god lege. Bruk ikke en sterk medisin, men en mild. Rens sårene hans og styrk ham med trøstende ord. … Gi ikke én og samme dom for alle slags synder, men prøv hver synd, så du gir den rette dommen.»",
        am: "ለንስሐ አባት፤ «ታማሚውን እንደ ርኅሩኅ ባለ መድኃኒት አክመው፤ ብርቱ መድኃኒት ሳይሆን ለስላሳውን ተጠቀም፤ ቍስሉን አንጻ፤ በማጽናኛ ቃልም አበርታው። … ለኃጢአት ሁሉ አንድ ፍርድ አትስጥ፤ የሚገባውን ፍርድ ትሰጥ ዘንድ እያንዳንዱን ኃጢአት መርምር።» (ከእንግሊዝኛው የተተረጐመ)",
      },
      kilde: "ዲድስቅልያ kap. 8 (sitert i ethiopianorthodox.org: The Sacrament of Penance, del VI)",
    },
    {
      navn: { no: "Kirkemøtet i Laodikea", am: "ጉባኤ ሉድቅያ" },
      tekst: {
        no: "Da de troende ble mange, kunne ikke apostlenes etterfølgere komme alle steder for å legge hendene på de nydøpte. Derfor ble det bestemt at biskopene skal lage myron, be over det og sende det til kirkene, og at de døpte skal salves med myron i stedet for håndspåleggelse.",
        am: "ምእመናን እየበዙ ሲመጡ በሁሉ ቦታ ተገኝቶ አንብሮተ እድ መፈጸም አልተቻለም። ስለዚህ ኤጲስ ቆጶሳት ሜሮን እያዘጋጁ በሜሮኑ ላይ እየጸለዩ ወደ አብያተ ክርስቲያናት እንዲልኩ፣ የሚጠመቁ ምእመናንም በአንብሮተ እድ ፈንታ ሜሮን እንዲቀቡ ተወሰነ።",
      },
      kilde: "ጉባኤ ሉድቅያ, kanon 48 (etter søndagsskoleboka ሥርዓተ ቤተ ክርስቲያን, 8. klasse, kap. 3)",
    },
  ],
  ord: [
    { ord: "ምሥጢር / ምሥጢራት", forklaring: { no: "mysterium, sakrament / sakramenter – noe skjult som bare troen tar imot", am: "ድብቅ፣ ሽሽግ፤ በእምነት የሚረዱት" } },
    { ord: "ምሥጢራተ ቤተ ክርስቲያን", forklaring: { no: "kirkas sakramenter", am: "ሰባቱ የቤተ ክርስቲያን ምሥጢራት" } },
    { ord: "ሥርዓተ ቤተ ክርስቲያን", forklaring: { no: "kirkas orden og ordninger", am: "የቤተ ክርስቲያን ሕግና የአፈጻጸም ሥርዓት" } },
    { ord: "ጸጋ", forklaring: { no: "nåde, gave fra Gud", am: "የእግዚአብሔር ስጦታ" } },
    { ord: "ጥምቀት", forklaring: { no: "dåp (av አጥመቀ, å dyppe ned)", am: "በውኃ መነከር" } },
    { ord: "ሜሮን", forklaring: { no: "myron, hellig salveolje – Den hellige ånds segl", am: "ማኅተመ መንፈስ ቅዱስ" } },
    { ord: "ቍርባን", forklaring: { no: "nattverd; betyr gave og offer", am: "አምኃ፣ መባ፣ ስጦታ" } },
    { ord: "ንስሐ", forklaring: { no: "omvendelse, skriftemål", am: "ኀዘን፣ ኑዛዜ፣ ቀኖና" } },
    { ord: "ቀንዲል", forklaring: { no: "salving av syke; ordet betyr lampe", am: "በዘይት የሚበራ መብራት" } },
    { ord: "ተክሊል", forklaring: { no: "kirkelig vielse med krone (av ከለለ, å hedre og hellige)", am: "ክብር መቀዳጀት" } },
    { ord: "ክህነት", forklaring: { no: "prestetjeneste, prestevielse (av ተክህነ, å tjene)", am: "አገልግሎት" } },
    { ord: "አንብሮተ እድ", forklaring: { no: "håndspåleggelse", am: "እጅ መጫን" } },
    { ord: "ዲቁና · ቅስና · ጵጵስና", forklaring: { no: "diakon · prest · biskop – de tre trinnene i ክህነት", am: "ሦስቱ የክህነት መዓርጋት" } },
    { ord: "ጸበል (ጠበል)", forklaring: { no: "hellig vann som helbreder", am: "የተባረከ ቅዱስ ውኃ" } },
    { ord: "ማተብ", forklaring: { no: "snoren rundt halsen, tegnet på at vi er døpt (av አተበ, å vise)", am: "የክርስትና ምልክት ክር" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva er et sakrament?", am: "ምሥጢር ምንድን ነው?" },
      svar: {
        no: "En hellig handling der vi får Guds usynlige nåde gjennom en synlig tjeneste, som vann, olje, brød og vin, bønn og håndspåleggelse.",
        am: "በሚታይ አገልግሎት (በውኃ፣ በቅብዐት፣ በኅብስትና በወይን፣ በጸሎትና በአንብሮተ እድ) የማይታይ የእግዚአብሔርን ጸጋ የምናገኝበት ቅዱስ ሥርዓት ነው።",
      },
    },
    {
      sporsmal: { no: "Nevn de sju sakramentene.", am: "ሰባቱን ምሥጢራት ዘርዝሩ።" },
      svar: {
        no: "ጥምቀት (dåp), ሜሮን (myron), ቍርባን (nattverd), ንስሐ (omvendelse), ቀንዲል (salving av syke), ተክሊል (ekteskap) og ክህነት (prestevielse).",
        am: "ጥምቀት፣ ሜሮን፣ ቍርባን፣ ንስሐ፣ ቀንዲል፣ ተክሊልና ክህነት።",
      },
    },
    {
      sporsmal: { no: "Hvorfor er sakramentene akkurat sju?", am: "ምሥጢራቱ ለምን ሰባት ሆኑ?" },
      svar: {
        no: "Kirka ser dem i de sju søylene Visdommen satte opp i huset sitt (Ordsp 9,1). Visdommen er Kristus. Sju er også tallet for fullkommenhet.",
        am: "ጥበብ ቤቷን ሠርታ ያቆመቻቸው ሰባቱ ምሰሶዎች ምሳሌያቸው ናቸው (ምሳ 9፥1)፤ ጥበብ የተባለ ክርስቶስ ነው። ሰባት ደግሞ የፍጹምነት ቍጥር ነው።",
      },
    },
    {
      sporsmal: { no: "Hvilke sakramenter tar vi bare imot én gang?", am: "የማይደገሙት ምሥጢራት የትኞቹ ናቸው?" },
      svar: {
        no: "Dåpen, myron, prestevielsen og ekteskapet. Nattverden, skriftemålet og salving av syke kan vi ta imot mange ganger.",
        am: "ጥምቀት፣ ሜሮን፣ ክህነትና ተክሊል። ቍርባን፣ ንስሐና ቀንዲል ግን ይደገማሉ።",
      },
    },
    {
      sporsmal: { no: "Hvem kan utføre sakramentene?", am: "ምሥጢራትን የሚፈጽሙ እነማን ናቸው?" },
      svar: {
        no: "En biskop kan utføre alle sju. En prest kan utføre alle unntatt prestevielsen. En diakon hjelper, men utfører dem ikke selv.",
        am: "ኤጲስ ቆጶስ ሰባቱንም ይፈጽማል፤ ቄስ ከክህነት በቀር ስድስቱን ይፈጽማል፤ ዲያቆን ይረዳል እንጂ ራሱ አይፈጽምም።",
      },
    },
    {
      sporsmal: { no: "Hvilke tre sakramenter tar et barn imot samme dag?", am: "ሕፃናት ክርስትና ሲነሡ በአንድ ቀን የሚፈጸሙላቸው ሦስቱ ምሥጢራት የትኞቹ ናቸው?" },
      svar: {
        no: "Først dåpen, så myron og til slutt nattverden.",
        am: "በመጀመሪያ ጥምቀት፣ ቀጥሎ ሜሮን፣ ከዚያ ቍርባን።",
      },
    },
    {
      sporsmal: { no: "Er ጸበል et sakrament?", am: "ጸበል ከሰባቱ ምሥጢራት አንዱ ነውን?" },
      svar: {
        no: "Nei. ጸበል er hellig vann som gir velsignelse og helbredelse ved Guds kraft, men det er ikke blant de sju sakramentene.",
        am: "አይደለም። ጸበል በእግዚአብሔር ኃይል በረከትና ፈውስ የሚገኝበት ቅዱስ ውኃ ነው፤ ከሰባቱ ምሥጢራት ግን አይቈጠርም።",
      },
    },
  ],
  kilder: [
    { navn: "ማኅበረ ቅዱሳን (ሰንበት ት/ቤቶች ማደራጃ መምሪያ): ሰባቱ ምሥጢራተ ቤተ ክርስቲያን – መግቢያ", url: "https://eotcmk.org/a/%e1%88%b0%e1%89%a3%e1%89%b1-%e1%88%9d%e1%88%a5%e1%8c%a2%e1%88%ab%e1%89%b0-%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95/" },
    { navn: "ማኅበረ ቅዱሳን: ሰባቱ ምሥጢራተ ቤተ ክርስቲያን (፪) – ጥምቀት፣ ሜሮን፣ ቍርባን", url: "https://eotcmk.org/a/%e1%88%b0%e1%89%a3%e1%89%b1-%e1%88%9d%e1%88%a5%e1%8c%a2%e1%88%ab%e1%89%b0-%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95-2/" },
    { navn: "ማኅበረ ቅዱሳን: ሰባቱ ምሥጢራተ ቤተ ክርስቲያን (፫) – ንስሐና ቀንዲል", url: "https://eotcmk.org/a/%e1%88%b0%e1%89%a3%e1%89%b1-%e1%88%9d%e1%88%a5%e1%8c%a2%e1%88%ab%e1%89%b0-%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95-3/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Introduction to Church Sacraments", url: "https://www.ethiopianorthodox.org/english/dogma/sacramentintro.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of Confirmation", url: "https://www.ethiopianorthodox.org/english/dogma/sacraconfirmation.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of Holy Communion", url: "https://www.ethiopianorthodox.org/english/dogma/sacaracommunion.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of Penance", url: "https://www.ethiopianorthodox.org/english/dogma/sacarapenance.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of the Unction of the Sick", url: "https://www.ethiopianorthodox.org/english/dogma/sacraunction.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of Matrimony", url: "https://www.ethiopianorthodox.org/english/dogma/sacramatrimony.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of the Holy Orders", url: "https://www.ethiopianorthodox.org/english/dogma/sacraorders.html" },
    { navn: "ሥርዓተ ቤተ ክርስቲያን (søndagsskolebok for 8. klasse: መሠረተ ሃይማኖት፣ ሥርዓትና ሥነ ምግባር), kap. 1–8", url: "https://www.scribd.com/document/1036651354/g8-Meserete-Haymanot-Srat-Snemgbar-24" },
    { navn: "Debre Mitmaq Kidist Mariam and Kidus Michael EOTC: 7ቱ ምሥጢራተ ቤተ ክርስቲያን", url: "http://debremitmaq.org/seven-holly-sacraments-of-orthodox-church-am/" },
    { navn: "ማኅበረ ቅዱሳን: መስቀል", url: "https://eotcmk.org/a/%E1%88%98%E1%88%B5%E1%89%80%E1%88%8D/" },
    { navn: "የመምህር ተመስገን ዘገዬ እይታዎች: ጠበል ምንድን ነው?", url: "https://hamernoah.wordpress.com/2015/10/29/%e1%8c%a0%e1%89%a0%e1%88%8d-%e1%88%9d%e1%8a%95%e1%8b%b5%e1%8a%95-%e1%8a%90%e1%8b%8d/" },
  ],
  utkast: true,
};
