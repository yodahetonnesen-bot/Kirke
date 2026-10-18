import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ንስሐ:
// søndagsskoleboka «ሥርዓተ ቤተ ክርስቲያን» for 8. klasse, kapittel 5 (ምሥጢረ ንስሓ, lest via Scribd),
// Mahibere Kidusans søndagsskoleserie «ሰባቱ ምሥጢራተ ቤተ ክርስቲያን» del 3 (eotcmk.org, som viser til
// læreboka «ትምህርተ ሃይማኖትና ክርስቲያናዊ ሕይወት» og Aleqa Kidane Wolds ordbok),
// ethiopianorthodox.org (The Sacrament of Penance, etter Rev. Marcos Daoud, Addis Abeba 1952),
// St. Kidane Mihiret EOTC Kansas City (ምሥጢረ ንስሐ) og Yohannes Neseha (ስለ ንስሐ, spørsmål og svar om
// skriftefar og ቀኖና). Den koptisk-ortodokse kirkas side om omvendelse og skriftemål (copticchurch.net)
// er brukt som støtte, bl.a. for sitatene fra Athanasius, Gregor av Nyssa og Basilios.
// Usikkert: Fra hvilken alder man skal ha skriftefar. Yohannes Neseha sier at kirkas kanonbok krever det
// «fra man blir voksen» (ለአካለ መጠን ከደረሰበት ጊዜ ጀምሮ). 8.-klasseboka sier at skriftefaren skal følge oss
// i barndom, ungdom og alderdom, men lar spørsmålet om alder stå åpent (elevene skal spørre læreren sin).
// Den koptiske siden sier at foreldrene bør lære barna om skriftemålet fra rundt tolv år. Noen etiopiske
// innlegg på sosiale medier sier sju år, men det har vi ikke funnet i en sikker kilde. Siden nevner derfor
// ingen fast alder og råder barn og unge til å spørre presten og foreldrene sine.
// Usikkert: Sakramentene-siden og Mahibere Kidusan kaller første trinn ኀዘን (sorg); Kidane Mihiret kaller det
// መፀፀት (anger). Siden bruker begge ordene (ጸጸት og ኀዘን).
// Usikkert: Sitatene fra kirkefedrene er fra den koptiske siden og ethiopianorthodox.org (engelsk).
// De amhariske tekstene er våre egne oversettelser og er merket slik.
export const skriftemaal: Tema = {
  slug: "skriftemaal",
  del: "sakramentene",
  tittel: { no: "Omvendelsen", am: "ምሥጢረ ንስሐ" },
  undertittel: {
    no: "Veien tilbake til Gud",
    am: "ወደ እግዚአብሔር የምንመለስበት መንገድ",
  },
  bilde: "ewostatewos",
  ingress: {
    no:
      "I dåpen blir vi Guds barn. Men alle mennesker synder igjen etter dåpen, også helgenene. Derfor har Jesus gitt kirka omvendelsens sakrament (ምሥጢረ ንስሐ). Den som angrer av hjertet, bekjenner syndene sine for presten og gjør det presten gir ham, blir løst fra syndene og forsonet med Gud. Kirka kaller skriftemålet en medisin for sjelen.",
    am:
      "በጥምቀት የእግዚአብሔር ልጆች እንሆናለን። ነገር ግን ሰው ሁሉ፣ ቅዱሳንም እንኳ፣ ከጥምቀት በኋላ ይበድላል። ስለዚህ ጌታችን ምሥጢረ ንስሐን ለቤተ ክርስቲያን ሰጣት። ከልቡ ተጸጽቶ ኃጢአቱን ለካህኑ የሚናዘዝና የተሰጠውን ቀኖና የሚፈጽም ሰው ከኃጢአቱ እስራት ይፈታል፤ ከእግዚአብሔርም ጋር ይታረቃል። ቤተ ክርስቲያን ንስሐን የነፍስ መድኃኒት ትለዋለች።",
  },
  hovedvers: "1John 1:9",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er ንስሐ?", am: "ንስሐ ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ንስሐ kommer av ge'ez-ordet «ነስሐ». Det betyr å angre, å sørge over noe, å vende om, å gå ut av synden og å vende tilbake fra døden til livet. Jesus sa at det blir glede i himmelen over én synder som vender om.",
            am: "«ንስሐ» የሚለው ቃል «ነስሐ» ከሚለው የግዕዝ ግሥ የተገኘ ሲሆን ተጸጸተ፣ ተቆረቆረ፣ አዘነ፣ ተመለሰ፣ ከኃጢአት ወጣ፣ ከሞት ወደ ሕይወት ተመለሰ ማለት ነው። ጌታችን ንስሐ በሚገባ በአንድ ኃጢአተኛ በሰማይ ደስታ እንደሚሆን ተናግሯል።",
          },
          vers: ["Luke 15:7"],
        },
        {
          tekst: {
            no: "ምሥጢረ ንስሐ er sakramentet der et menneske som har syndet etter dåpen, angrer av hjertet og bestemmer seg for ikke å gjøre det igjen. Han kneler foran Gud og presten og bekjenner syndene sine. Slik blir han løst fra syndens lenker og får tilgivelse fra Gud.",
            am: "ምሥጢረ ንስሐ አንድ ሰው ከጥምቀት በኋላ የፈጸመውን ጥፋት ላለመድገም ወስኖ፣ በእግዚአብሔርና በካህኑ ፊት ተንበርክኮ፣ ከልቡ ተጸጽቶ ኃጢአቱን በመናዘዝ ከኃጢአቱ እስራት የሚፈታበትና ከእግዚአብሔር ይቅርታ የሚያገኝበት ታላቅ የጸጋ ምሥጢር ነው።",
          },
          vers: ["Acts 3:19", "Prov 28:13"],
        },
        {
          tekst: {
            no: "Hvorfor trenger vi det? Alle synder, også de hellige. Abraham, Moses og David i Det gamle testamentet, og Peter i Det nye, syndet alle. Bibelen sier at den som sier at han ikke har synd, bedrar seg selv.",
            am: "ለምን ያስፈልገናል? ሰው ሁሉ ይበድላል፤ ቅዱሳንም እንኳ። በብሉይ ኪዳን አብርሃም፣ ሙሴና ዳዊት፣ በሐዲስ ኪዳንም ቅዱስ ጴጥሮስ በድለዋል። መጽሐፍ ቅዱስ ኃጢአት የለብንም የሚል ራሱን እንደሚያስት ይናገራል።",
          },
          vers: ["1John 1:8-9"],
        },
        {
          tekst: {
            no: "Ordet for synd, ኃጢአት, kommer av ge'ez «ኀጥአ», som betyr å miste. Synd er å miste Gud, å gå bort fra det rette og å miste den æren vi fikk som Guds barn. Synden er sjelens død. Derfor sa faren om den bortkomne sønnen: «Han var død og er blitt levende igjen.»",
            am: "«ኃጢአት» የሚለው ቃል «ኀጥአ» ከሚለው የግዕዝ ግሥ የወጣ ሲሆን ማጣት ማለት ነው፤ ከጽድቅ መራቅ፣ ልጅነትንና ክብርን ማጣት፣ ከእግዚአብሔር መለየት ነው። ኃጢአት የነፍስ ሞት ነው፤ ስለዚህ አባቱ ስለ ጠፋው ልጅ «ሞቶ ነበርና ደግሞም ሕያው ሆኖአል» አለ።",
          },
          vers: ["Luke 15:24", "Rom 6:23"],
        },
        {
          tekst: {
            no: "Kirka kaller skriftemålet en åndelig medisin, og presten en åndelig lege. Slik en syk går til legen og forteller hva som er galt, går den som er syk av synd til kirka og bekjenner syndene sine for presten. Da får han åndelig behandling, og syndene blir tilgitt.",
            am: "ቤተ ክርስቲያን ንስሐን መንፈሳዊ መድኃኒት፣ ካህኑንም መንፈሳዊ ሐኪም ትለዋለች። በሥጋ የታመመ ሰው ወደ ሐኪም ሄዶ በሽታውን ተናግሮ እንደሚፈወስ፣ በኃጢአት የታመመ ሰውም ወደ ቤተ ክርስቲያን ሄዶ ኃጢአቱን ለካህኑ ይናዘዛል፤ መንፈሳዊ ሕክምናም ያገኛል፤ ኃጢአቱም ይሰረይለታል።",
          },
          vers: ["Mark 2:17"],
        },
        {
          tekst: {
            no: "Ekte omvendelse er en hel forandring av livet, ikke bare en følelse som går over. Kain følte at synden hans var tung, men han flyktet bort og vendte ikke om. Å være lei seg er ikke nok alene – vi må vende tilbake til Gud.",
            am: "እውነተኛ ንስሐ ፍጹም የሕይወት ለውጥ እንጂ ጊዜያዊ ስሜት አይደለም። ቃየን ኃጢአቱ ብታስጨንቀውም ሸሸ እንጂ ንስሐ አልገባም። ስለ ኃጢአት ማዘን ብቻውን ንስሐ አይደለም፤ ወደ እግዚአብሔር መመለስ ያስፈልጋል።",
          },
          vers: ["Gen 4:13-14", "2Cor 7:10"],
        },
      ],
    },
    {
      id: "innstiftet",
      tittel: { no: "Jesus ga apostlene makt til å tilgi", am: "ጌታችን ለሐዋርያት የማሰርና የመፍታት ሥልጣን ሰጣቸው" },
      ingress: {
        no: "Det er Jesus Kristus som innstiftet skriftemålet. Han ga løftet om det tre ganger:",
        am: "ምሥጢረ ንስሐን የመሠረተው ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ ነው፤ ይህንንም በሦስት ጊዜ ቃል ገባ፤",
      },
      punkter: [
        {
          tekst: {
            no: "Til Peter: «Jeg vil gi deg nøklene til himmelriket. Det du binder på jorden, skal være bundet i himmelen, og det du løser på jorden, skal være løst i himmelen.»",
            am: "ለቅዱስ ጴጥሮስ፤ «የመንግሥተ ሰማያትንም መክፈቻዎች እሰጥሃለሁ፤ በምድር የምታስረው ሁሉ በሰማያት የታሰረ ይሆናል፥ በምድርም የምትፈታው ሁሉ በሰማያት የተፈታ ይሆናል።»",
          },
          vers: ["Matt 16:19"],
        },
        {
          tekst: {
            no: "Til alle disiplene: «Det dere binder på jorden, skal være bundet i himmelen, og det dere løser på jorden, skal være løst i himmelen.»",
            am: "ለደቀ መዛሙርቱ ሁሉ፤ «በምድር የምታስሩት ሁሉ በሰማይ የታሰረ ይሆናል፥ በምድርም የምትፈቱት ሁሉ በሰማይ የተፈታ ይሆናል።»",
          },
          vers: ["Matt 18:18"],
        },
        {
          tekst: {
            no: "Etter oppstandelsen blåste han på apostlene og sa: «Ta imot Den hellige ånd! Tilgir dere noen syndene, er de tilgitt. Holder dere dem fast, er de fastholdt.»",
            am: "ከትንሣኤውም በኋላ እፍ ብሎባቸው «መንፈስ ቅዱስን ተቀበሉ። ኃጢአታቸውን ይቅር ያላችኋቸው ሁሉ ይቀርላቸዋል፤ የያዛችሁባቸው ተይዞባቸዋል» አላቸው።",
          },
          vers: ["John 20:21-23"],
        },
        {
          tekst: {
            no: "Denne makten ble først gitt til apostlene. Fra dem gikk den videre til biskopene, og så til prestene, som er nær folket. Kirka sier at den ble gitt «for en tid til apostlene, men til slutt til alle kirkas prester».",
            am: "ይህ ሥልጣን አስቀድሞ ለሐዋርያት ተሰጠ፤ ከእነርሱም ለተተኪዎቻቸው ለኤጲስ ቆጶሳት፣ ቀጥሎም ከሕዝቡ ጋር ለሚኖሩ ቀሳውስት ተላለፈ። ቤተ ክርስቲያን ይህ ሥልጣን «ለጊዜው ለሐዋርያት፣ ፍጻሜው ግን ለካህናተ ቤተ ክርስቲያን ሁሉ» እንደ ተሰጠ ታስተምራለች።",
          },
        },
        {
          tekst: {
            no: "Det er Gud som tilgir, ikke presten av egen makt. Derfor sier ikke presten «jeg løser deg», men «እግዚአብሔር ይፍታ» – «Gud løse deg». Vi bekjenner foran presten, men det er Gud som hører og tilgir.",
            am: "ኃጢአትን ይቅር የሚለው እግዚአብሔር ነው። ስለዚህ ካህናት ኑዛዜን ከተቀበሉ በኋላ «ፈትቼሃለሁ» አይሉም፤ «እግዚአብሔር ይፍታ» ይላሉ እንጂ። ኃጢአታችንን በካህኑ ፊት ብንናገርም ሰሚውም ሥርየትን ሰጪውም ባለቤቱ እግዚአብሔር ነው።",
          },
          vers: ["Mark 2:7", "2Cor 5:18"],
        },
        {
          tekst: {
            no: "Også i Det gamle testamentet vendte folk om og fikk nåde. Kirkas tradisjon forteller at Adam angret etter fallet og fikk løftet om frelse. Kong Manasse ydmyket seg og ba, og Gud hørte ham. Hiskia ydmyket seg også.",
            am: "በብሉይ ኪዳንም ሰዎች በንስሐ ተመልሰው ምሕረትን አግኝተዋል። አዳም በድሎ ንስሐ በመግባቱ ተስፋ ድኅነትን አገኘ። ንጉሡ ምናሴም ሰውነቱን አዋርዶ ጸለየ፤ እግዚአብሔርም ሰማው። ሕዝቅያስም ራሱን አዋረደ።",
          },
          vers: ["2Chr 33:12-13", "2Chr 32:26"],
          andre: [{ no: "Jubileenes bok (ኩፋሌ) 5,1", am: "ኩፋሌ 5፥1" }],
        },
      ],
    },
    {
      id: "bekjennelse",
      tittel: { no: "Hvorfor bekjenner vi syndene?", am: "ኃጢአታችንን ለምን እንናዘዛለን?" },
      punkter: [
        {
          tekst: {
            no: "Bibelen sier at den som skjuler syndene sine, ikke har lykken med seg, men den som bekjenner dem og slutter med dem, finner barmhjertighet. Og: «Dersom vi bekjenner våre synder, er han trofast og rettferdig, så han tilgir oss syndene.»",
            am: "«ኃጢአቱን የሚሰውር አይለማም፤ የሚናዘዝባትና የሚተዋት ግን ምሕረትን ያገኛል።» ደግሞም «በኃጢአታችን ብንናዘዝ ኃጢአታችንን ይቅር ሊለን ከዓመፃም ሁሉ ሊያነጻን የታመነና ጻድቅ ነው።»",
          },
          vers: ["Prov 28:13", "1John 1:9"],
        },
        {
          tekst: {
            no: "Jakob skriver: «Bekjenn syndene for hverandre og be for hverandre, så dere kan bli helbredet.» I Efesos kom mange som var blitt troende, og bekjente åpent hva de hadde gjort.",
            am: "ቅዱስ ያዕቆብ «እርስ በርሳችሁ በኃጢአታችሁ ተናዘዙ። ትፈወሱም ዘንድ እያንዳንዱ ስለ ሌላው ይጸልይ» ብሏል። በኤፌሶንም ያመኑ ብዙ ሰዎች ያደረጉትን እየተናዘዙ ይመጡ ነበር።",
          },
          vers: ["Jas 5:16", "Acts 19:18"],
        },
        {
          tekst: {
            no: "Å bekjenne for presten er å bekjenne for Gud og gi ham ære. Josva sa til Akan: «Min sønn, gi Herren, Israels Gud, ære og bekjenn for ham. Si meg hva du har gjort, skjul det ikke for meg.» Allerede i Moseloven skulle den som hadde syndet, bekjenne, og presten gjorde soning for ham.",
            am: "ለካህኑ መናዘዝ ለእግዚአብሔር መናዘዝና ክብርን መስጠት ነው። ኢያሱ አካንን «ልጄ ሆይ፥ ለእስራኤል አምላክ ለእግዚአብሔር ክብር ስጥ፥ ለእርሱም ተናዘዝ፤ ያደረግኸውንም ንገረኝ፤ አትሸሽገኝ» አለው። በኦሪትም የበደለ ሰው ኃጢአቱን ይናዘዝ ነበር፤ ካህኑም ያስተሰርይለት ነበር።",
          },
          vers: ["Josh 7:19", "Lev 5:5-6"],
        },
        {
          tekst: {
            no: "Hvorfor til en prest? For å få tilgivelse gjennom ham, slik Jesus ordnet det, og for å få åndelige råd om hvordan vi kan vinne over fristelsene og leve et hellig liv.",
            am: "ለምን ለካህን? ጌታችን እንደ ሠራው በእርሱ በኩል ሥርየተ ኃጢአትን ለማግኘት፣ ፈተናን የምናሸንፍበትንና በቅድስና የምንኖርበትን መንፈሳዊ ምክር ለመቀበል ነው።",
          },
          vers: ["John 20:23"],
        },
      ],
    },
    {
      id: "fire-maater",
      tittel: { no: "Fire måter å bekjenne på", am: "ኑዛዜ የሚፈጸምባቸው አራት መንገዶች" },
      ingress: {
        no: "ኑዛዜ betyr å åpne seg, å fortelle det som er inni oss. 8.-klasseboka lærer at bekjennelsen skjer på fire måter:",
        am: "ኑዛዜ ማለት ራስን መግለጥ፣ ከውስጥ ያለውን ነገር ለሰሚ ማስረዳት ማለት ነው። ኑዛዜ በአራት መንገድ ይፈጸማል፤",
      },
      punkter: [
        {
          tekst: {
            no: "Til seg selv: Vi innrømmer for oss selv at vi har syndet. Den bortkomne sønnen «kom til seg selv» og sa: «Far, jeg har syndet mot himmelen og mot deg.»",
            am: "ለራስ መናዘዝ፤ ኃጢአተኛነታችንን አምነን ለራሳችን መናገር ነው። የጠፋው ልጅ ወደ ልቡ ተመልሶ «አባቴ ሆይ፥ በሰማይና በፊትህ በደልሁ» ለማለት ወሰነ።",
          },
          vers: ["Luke 15:17-18"],
        },
        {
          tekst: {
            no: "Til den vi har gjort urett mot: Vi går til ham og ber om tilgivelse. Jesus sa at vi først skal forsone oss med broren vår, og så bære fram gaven vår.",
            am: "ለበደሉት ሰው መናዘዝ፤ ወደ በደልነው ሰው ሄደን ይቅርታ መጠየቅ ነው። ጌታችን «አስቀድመህም ከወንድምህ ጋር ታረቅ፥ በኋላም መጥተህ መባህን አቅርብ» ብሏል።",
          },
          vers: ["Matt 5:23-24"],
        },
        {
          tekst: {
            no: "Til Gud i bønn: Vi sier til Gud at vi har brutt budene hans, og ber om tilgivelse. Gud spurte Adam «Hvor er du?» – ikke fordi han ikke visste det, men for å vise ham veien til å bekjenne.",
            am: "ለእግዚአብሔር መናዘዝ፤ «ትእዛዛትህን በማፍረስ በድያለሁ» ብሎ በጸሎት ይቅርታን መለመን ነው። እግዚአብሔር አዳምን «ወዴት ነህ?» ብሎ የጠየቀው የአዳምን መደበቅ ሳያውቅ ቀርቶ ሳይሆን ይናዘዝ ዘንድ መንገድ ሲያሳየው ነው።",
          },
          vers: ["Gen 3:9-12"],
        },
        {
          tekst: {
            no: "Til skriftefaren: Dette er det siste trinnet, og det gjør omvendelsen fullstendig. Vi går til skriftefaren og bekjenner det vi har gjort, og får syndenes forlatelse.",
            am: "ለንስሐ አባት መናዘዝ፤ ይህ የመጨረሻውና ንስሐን ምሉዕ የሚያደርግ ነው። ወደ ንስሐ አባት ሄደን የሠራነውን በደል በመናዘዝ ሥርየተ ኃጢአትን እናገኛለን።",
          },
          vers: ["Jas 5:16"],
        },
      ],
    },
    {
      id: "eksempler",
      tittel: { no: "Eksempler fra Bibelen", am: "ከመጽሐፍ ቅዱስ የንስሐ ምሳሌዎች" },
      punkter: [
        {
          tekst: {
            no: "Kong David tok en annen manns kone og fikk mannen drept. Da profeten Natan kom, sa David: «Jeg har syndet mot Herren.» Natan svarte: «Herren har tatt bort synden din.» Da skrev David Salme 51: «Vær meg nådig, Gud … rens meg fra min synd.»",
            am: "ንጉሥ ዳዊት የሰውን ሚስት ወስዶ ባሏን አስገደለ። ነቢዩ ናታን በመጣ ጊዜ «እግዚአብሔርን በድያለሁ» አለ፤ ናታንም «እግዚአብሔር ደግሞ ኃጢአትህን አርቆልሃል» አለው። ዳዊትም «አቤቱ፥ እንደ ቸርነትህ መጠን ማረኝ … ከኃጢአቴም አንጻኝ» ብሎ መዝሙር 51ን ጸለየ።",
          },
          vers: ["2Sam 12:13", "Ps 51:3-6"],
        },
        {
          tekst: {
            no: "Den bortkomne sønnen kastet bort arven sin. Da han kom tilbake og sa «Far, jeg har syndet», løp faren mot ham, klemte ham og holdt fest. Slik tar Gud imot den som vender om.",
            am: "የጠፋው ልጅ ርስቱን አባከነ። «አባቴ ሆይ፥ በሰማይና በፊትህ በደልሁ» ብሎ በተመለሰ ጊዜ አባቱ ሮጦ አንገቱን አቀፈውና ሳመው፤ ደስታም አደረገ። እግዚአብሔርም በንስሐ የሚመለሰውን እንዲሁ ይቀበላል።",
          },
          vers: ["Luke 15:11-24"],
        },
        {
          tekst: {
            no: "Tolleren Sakkeus lovet å gi halvparten av det han eide til de fattige, og å betale tilbake fire ganger så mye til dem han hadde lurt. Jesus sa: «I dag er frelse kommet til dette huset.» Ekte omvendelse gjør godt igjen det vi har ødelagt.",
            am: "ቀራጩ ዘኬዎስ ካለው ሁሉ እኵሌታውን ለድሆች ሊሰጥ፣ የበደላቸውንም አራት እጥፍ ሊመልስ ቃል ገባ። ጌታችንም «ዛሬ ለዚህ ቤት መዳን ሆኖለታል» አለ። እውነተኛ ንስሐ ያጠፋነውን መካስንም ይጨምራል።",
          },
          vers: ["Luke 19:8-9"],
        },
        {
          tekst: {
            no: "Peter fornektet Jesus tre ganger. Da hanen gol, husket han Jesu ord, gikk ut og gråt bittert. Etter oppstandelsen spurte Jesus ham tre ganger: «Elsker du meg?», og satte ham til å vokte sauene sine.",
            am: "ቅዱስ ጴጥሮስ ጌታውን ሦስት ጊዜ ካደ። ዶሮ በጮኸ ጊዜ የጌታ ቃል ትዝ አለው፤ ወደ ውጭ ወጥቶ መራራ ልቅሶ አለቀሰ። ከትንሣኤም በኋላ ጌታችን ሦስት ጊዜ «ትወደኛለህን?» ብሎ ጠየቀው፤ በጎቹንም እንዲጠብቅ አዘዘው።",
          },
          vers: ["Matt 26:75", "John 21:15-17"],
        },
        {
          tekst: {
            no: "Folket i Ninive hørte Jona preke. De trodde på Gud, fastet og kledde seg i sekkestrie, fra den største til den minste. Da Gud så at de vendte om fra sin onde vei, straffet han dem ikke.",
            am: "የነነዌ ሰዎች የዮናስን ስብከት ሰምተው እግዚአብሔርን አመኑ፤ ከታላቁ እስከ ታናሹ ጾሙ፥ ማቅም ለበሱ። እግዚአብሔርም ከክፉ መንገዳቸው እንደ ተመለሱ አይቶ ያሰበውን ቅጣት አላደረገባቸውም።",
          },
          vers: ["Jonah 3:5-10"],
        },
        {
          tekst: {
            no: "Til kvinnen som var grepet i ekteskapsbrudd, sa Jesus: «Heller ikke jeg fordømmer deg. Gå bort og synd ikke mer!» Omvendelse betyr å bestemme seg for ikke å gjøre synden igjen.",
            am: "ጌታችን በምንዝር የተያዘችውን ሴት «እኔም አልፈርድብሽም፤ ሂጂ ከአሁንም ጀምሮ ደግመሽ ኃጢአት አትሥሪ» አላት። ንስሐ ዳግመኛ ኃጢአትን ላለመሥራት መወሰን ነው።",
          },
          vers: ["John 8:11"],
        },
      ],
    },
    {
      id: "trinn",
      tittel: { no: "Trinnene i omvendelsen", am: "የንስሐ ደረጃዎች" },
      ingress: {
        no: "Den som vender om, gjør tre ting: ጸጸት (anger og sorg), ኑዛዜ (bekjennelse) og ቀኖና (botsøvelse). Til slutt tar han imot nattverden.",
        am: "ንስሐ የሚገባ ሰው ሦስት ነገሮችን ይፈጽማል፤ ጸጸት (ኀዘን)፣ ኑዛዜና ቀኖና። በመጨረሻም ሥጋውንና ደሙን ይቀበላል።",
      },
      punkter: [
        {
          tekst: {
            no: "ጸጸት – å angre og sørge: Vi husker synden vår, innrømmer at vi har gjort urett mot Gud og mennesker, og blir lei oss. Ikke bare fordi vi ble straffet, men fordi vi har gjort Gud sorg. Vi lærer å hate synden og bestemmer oss for hvordan vi vil leve etterpå.",
            am: "ጸጸት (ኀዘን)፤ ኃጢአታችንን እናስታውሳለን፤ ሰውንና እግዚአብሔርን መበደላችንን አምነን እናዝናለን። ማዘናችን ስለ ደረሰብን ቅጣት ብቻ ሳይሆን እግዚአብሔርን ስላሳዘንን ነው። ኃጢአትን እንጠላለን፤ ከንስሐ በኋላ ስለምንኖረው ሕይወትም እንወስናለን።",
          },
          vers: ["Ps 51:3-6", "Acts 2:37-38"],
        },
        {
          tekst: {
            no: "Vi gråter over syndene i bønn, slik den bortkomne sønnen, Peter og David gjorde. David ba: «Skap i meg et rent hjerte, Gud.»",
            am: "እንደ ጠፋው ልጅ፣ እንደ ቅዱስ ጴጥሮስና እንደ ቅዱስ ዳዊት በጸሎት ስለ ኃጢአታችን እናለቅሳለን። ዳዊት «አቤቱ፥ ንጹሕ ልብን ፍጠርልኝ» ብሎ ጸለየ።",
          },
          vers: ["Luke 22:61-62"],
        },
        {
          tekst: {
            no: "Å gjøre godt igjen: Har vi gjort urett mot noen, går vi til ham og ber om tilgivelse. Har vi tatt noe, gir vi det tilbake, slik Sakkeus gjorde. Dette forbereder oss til bekjennelsen for Gud.",
            am: "የበደልነውን መካስ፤ ሰውን በድለን ከሆነ ወደ እርሱ ሄደን ይቅርታ እንለምናለን፤ የወሰድነውን እንደ ዘኬዎስ እንመልሳለን። ይህም በእግዚአብሔር ፊት ለምናደርገው ኑዛዜ ያዘጋጀናል።",
          },
          vers: ["Matt 5:23-24", "Luke 19:8"],
        },
        {
          tekst: {
            no: "ኑዛዜ – å bekjenne: Vi forteller skriftefaren alle syndene, uten frykt og uten å skjule noe, både store og små. Den som glemmer lett, kan skrive dem ned. Det som ikke gjorde oss skamfulle da vi gjorde det, skal vi ikke skamme oss over å si. Vi trenger ikke si navnet på andre personer eller tid og sted – bare hva vi selv har gjort.",
            am: "ኑዛዜ፤ ኃጢአታችንን ሳንፈራና ሳንደብቅ፣ ትንሹንም ትልቁንም ለንስሐ አባታችን እንናገራለን። የሚረሳ ሰው በጽሑፍ መመዝገብ ይችላል። ስንሠራው ያላሳፈረንን ስንናገረው ልናፍርበት አይገባም። የሌላ ሰው ስም፣ ጊዜውንና ቦታውን በዝርዝር እንድንናገር አንገደድም፤ የሠራነውን በደል ብቻ እንናገራለን።",
          },
          vers: ["Prov 28:13", "Matt 11:28"],
        },
        {
          tekst: {
            no: "Vi skylder ikke på andre. Å bekjenne er å anklage seg selv: Tungen er anklageren, samvittigheten og Gud er vitner, og presten er dommeren.",
            am: "«ዕገሌ አሳስቶኝ» እያልን ሌላውን ተጠያቂ አናደርግም። ኑዛዜ ራስን መክሰስ ነው፤ አንደበታችን ከሳሽ፣ ልቡናችንና እግዚአብሔር ታዛቢ፣ ካህኑም ዳኛ ነው።",
          },
        },
        {
          tekst: {
            no: "ቀኖና – botsøvelsen: Presten gir oss noe vi skal gjøre, og vi gjør det helt og fullt. Når vi er ferdige, sier presten «እግዚአብሔር ይፍታ», og vi er løst fra synden og forsonet med Gud.",
            am: "ቀኖና፤ ካህኑ የሚሰጠንን ቀኖና በትክክል እንፈጽማለን። ፈጽመን ስንመጣ ካህኑ «እግዚአብሔር ይፍታ» ሲል ከኃጢአት እስራት እንፈታለን፤ ከእግዚአብሔርም ጋር ታርቀን ይቅርታን እናገኛለን።",
          },
        },
        {
          tekst: {
            no: "Vi tror at Gud tilgir. Selv om vi synes botsøvelsen er liten i forhold til syndene våre, tenker vi ikke på hvor store syndene er, men på hvor god Gud er. Kristus ga sitt blod for å vaske bort syndene våre.",
            am: "በደላችን በንስሐ እንደሚሰረይልን እናምናለን። ከኃጢአታችን አንጻር ቀኖናው ትንሽ መስሎ ቢታየንም ማሰብ ያለብን የራሳችንን በደል ሳይሆን የእግዚአብሔርን ቸርነት ነው። ክርስቶስ ደሙን ያፈሰሰው በደላችንን ለመደምሰስ ነውና።",
          },
          vers: ["Isa 1:18", "1John 1:7"],
        },
      ],
    },
    {
      id: "skriftefar",
      tittel: { no: "Skriftefaren (የንስሐ አባት)", am: "የንስሐ አባት" },
      punkter: [
        {
          tekst: {
            no: "Skriftefaren kalles የንስሐ አባት, አበ ነፍስ (sjelens far) eller መምህረ ንስሐ (omvendelsens lærer). Han er en prest vi har valgt, som vi forteller hemmelighetene våre til, og som gir oss råd både om det åndelige livet og om hverdagen. Vi kan lære av mange prester, men vi bekjenner for én.",
            am: "የንስሐ አባት አበ ነፍስ ወይም መምህረ ንስሐም ይባላል። ምሥጢረኛችንና በመንፈሳዊም በሥጋዊም ሕይወታችን የቅርብ አማካሪያችን የሆነ ካህን ነው። ብዙ ካህናት ሊያስተምሩን ቢችሉም ኃጢአታችንን የምንናዘዝለት ግን አንዱ ነው።",
          },
          andre: [{ no: "Siraks bok (ሲራክ) 6,6", am: "ሲራክ 6፥6" }],
        },
        {
          tekst: {
            no: "Hvorfor trenger vi skriftefar? Han lærer oss troen som en far, tar imot bekjennelsen vår og bringer oss fram for Gud, hjelper oss å ta del i sakramentene, gir råd om fristelsene vi møter i vår alder, og hjelper med problemer i familien og livet.",
            am: "የንስሐ አባት ያስፈለገው እንደ አባት ሆኖ መንፈሳዊ ትምህርት እንዲያስተምረን፣ ንስሐችንን ተቀብሎ ወደ እግዚአብሔር እንዲያቀርበን፣ ከምሥጢራተ ቤተ ክርስቲያን ተካፋይ እንድንሆን እንዲያበቃን፣ ከዕድሜያችን አንጻር የሚገጥመንን ፈተና ማለፊያ መንገድ እንዲያሳየን፣ በቤተሰብና በኑሮ የሚገጥመንን ችግር እንድንፈታ እንዲረዳን ነው።",
          },
        },
        {
          tekst: {
            no: "Jesus fortalte om et fikentre som ikke bar frukt i tre år. Gartneren ba om ett år til for å grave og gjødsle rundt det. Kirka forklarer at gartneren er presten, og de tre årene er barndommen, ungdommen og alderdommen: Vi trenger en skriftefar som følger oss gjennom hele livet.",
            am: "ጌታችን ሦስት ዓመት ፍሬ ስላላፈራች በለስ ምሳሌ ተናገረ፤ የወይኑ ጠባቂም እስኪኰተኵትላት ድረስ አንድ ዓመት እንዲተዋት ለመነ። በወይኑ የተመሰሉት ምእመናን፣ ገበሬው ጠባቂ ካህናት፣ ሦስቱ ዓመታትም የልጅነት፣ የወጣትነትና የእርጅና ዘመን ናቸው፤ በሕይወታችን ሁሉ የሚጠብቀን፣ የሚመክረንና የሚያስተምረን መምህረ ንስሐ ያስፈልገናል።",
          },
          vers: ["Luke 13:6-9"],
        },
        {
          tekst: {
            no: "Når skal man få skriftefar? Kildene setter ingen fast alder for barn. Yohannes Neseha skriver at kirkas kanonbok sier at hver troende skal ha skriftefar fra han blir voksen, og at ingen ortodoks kristen bør leve en eneste dag uten. Snakk med foreldrene dine og presten om når du skal begynne.",
            am: "የንስሐ አባት መቼ ይያዛል? ለሕፃናት የተወሰነ ዕድሜ ያገኘንባቸው ምንጮች አልጠቀሱም። ማንኛውም ክርስቲያን ለአካለ መጠን ከደረሰበት ጊዜ ጀምሮ የንስሐ አባት መያዝ ግዴታው እንደ ሆነ በቤተ ክርስቲያን የቀኖና መጽሐፍ ተደንግጓል፤ አንድ ኦርቶዶክሳዊ ክርስቲያን ያለ ንስሐ አባት አንድ ቀንም መኖር የለበትም። መቼ መጀመር እንዳለብህ ወላጆችህንና ካህኑን ጠይቅ።",
          },
        },
        {
          tekst: {
            no: "Å velge skriftefar: Velg en prest som er rett i troen og livet, og som kan gi råd, undervise og irettesette. Bor du langt fra kirka, som mange gjør i utlandet, kan du ha en skriftefar langt borte og snakke med ham på telefon. Makten Jesus ga til å binde og løse, er ikke begrenset av avstand.",
            am: "የንስሐ አባት መምረጥ፤ በሃይማኖቱ የጸና፣ በምግባሩ የቀና፣ ሊመክር፣ ሊያስተምርና ሊገሥጽ የሚችል ካህን መምረጥ ይገባል። ካህናት በቅርብ በማይገኙበት ሀገር የሚኖር ሰው በርቀትም ቢሆን የንስሐ አባት መያዝና በስልክ መገናኘት ይችላል፤ ጌታችን የሰጠው የማሰርና የመፍታት ሥልጣን በቦታ ርቀት አይወሰንምና።",
          },
          vers: ["Matt 18:18"],
        },
        {
          tekst: {
            no: "Vi bytter ikke skriftefar uten grunn. Må vi bytte, for eksempel fordi vi flytter, skal skriftefaren gi oss lov og sende oss videre på en ordentlig måte. Prestene har også selv skriftefedre.",
            am: "ያለ በቂ ምክንያት የንስሐ አባትን መቀየር ሥርዓተ ቤተ ክርስቲያን አይፈቅድም። በሥራ ወይም በትምህርት ቦታ ስንቀይር ግን ካህኑ በሥርዓት አሰናብተው ሊያሸጋግሩን ይገባል። ካህናትም ራሳቸው የንስሐ አባት አላቸው።",
          },
        },
        {
          tekst: {
            no: "Taushetsplikten: Presten må aldri fortelle noen det han har hørt i skriftemålet. Denne plikten har ingen unntak og gjelder også etter at den som skriftet, er død. Kirkas regler straffer den presten som avslører det. Derfor kan du trygt fortelle alt.",
            am: "የኑዛዜ ምሥጢር፤ ካህኑ በኑዛዜ የሰማውን ለማንም አይገልጥም። ይህ ግዴታ ምንም ልዩነት የለውም፤ ተናዛዡ ከሞተም በኋላ ይጸናል። የቤተ ክርስቲያን ሕግ የሰዎችን ምሥጢር የሚገልጥ ካህንን ይቀጣል። ስለዚህ ሁሉን ሳትፈራ መናገር ትችላለህ።",
          },
        },
        {
          tekst: {
            no: "Skriftefarens oppgave: Han ber for barna sine, følger med på livet deres, skiller ikke mellom kvinne og mann, barn og gammel, folk og språk, og leder dem fram til Kristi kropp og blod – slik den gode hyrden leter etter den ene sauen som har gått seg vill.",
            am: "የንስሐ አባት ተግባር፤ ለንስሐ ልጆቹ ይጸልያል፤ ሕይወታቸውን ይከታተላል፤ ሴት፣ ወንድ፣ ሕፃን፣ አረጋዊ፣ ዘርና ቋንቋ ሳይለይ ያገለግላል፤ ለሥጋ ወደሙም ያበቃቸዋል፤ መልካም እረኛ የጠፋውን አንድ በግ እንደሚፈልግ።",
          },
          vers: ["Luke 15:4-5", "John 21:17"],
        },
      ],
    },
    {
      id: "kanon",
      tittel: { no: "ቀኖና – botsøvelsen", am: "ቀኖናና አፈጻጸሙ" },
      punkter: [
        {
          tekst: {
            no: "ቀኖና er et gresk ord som betyr mål eller målestokk. Etter bekjennelsen gir presten den som skrifter, noe han skal gjøre. Presten måler det etter synden, etter hvor sterk troen er, og etter hva personen klarer.",
            am: "ቀኖና የግሪክ ቃል ሲሆን መለኪያ (መስፈርያ) ማለት ነው። ካህኑ ተናዛዡ ከተናዘዘ በኋላ እንደ በደሉ መጠን፣ እንደ ሃይማኖቱ ጽናትና እንደ አቅሙ መጥኖ እንዲፈጽም የሚያዝዘው መንፈሳዊ ተግባር ነው።",
          },
        },
        {
          tekst: {
            no: "Typer ቀኖና: faste (ጾም), bønn (ጸሎት), knefall (ስግደት), å gi til de fattige (ምጽዋት), å stå opp om natten for å be, å holde seg borte fra verdslige ting og dårlige venner, eller å vente med nattverden en tid. Ved store synder kan presten irettesette eller holde noen borte fra menigheten for en tid.",
            am: "የቀኖና ዓይነቶች፤ ጾም፣ ጸሎት፣ ስግደት፣ ምጽዋት፣ በሌሊት ተነሥቶ መስገድ፣ ከዓለማዊ ነገርና ከማይመቹ ጓደኞች መራቅ፣ ለተወሰነ ጊዜ ከቍርባን መከልከል ናቸው። ለከባድ በደል ካህኑ ሊገሥጽ ወይም ለተወሰነ ጊዜ ከማኅበረ ምእመናን ሊለይ ይችላል።",
          },
          vers: ["1Cor 5:5", "2Thess 3:14"],
        },
        {
          tekst: {
            no: "ቀኖና er ikke en hevn eller en betaling for synden. Ingenting kan betale for synden unntatt Kristi blod. ቀኖና er medisin: Den hjelper oss å forstå hvor alvorlig synden er, den leger sjelen, og den lærer andre å frykte synden.",
            am: "ቀኖና በቀል ወይም የኃጢአት ዋጋ አይደለም፤ ከክርስቶስ ደም በቀር የእግዚአብሔርን ፍትሕ የሚያረካ የለምና። ቀኖና መድኃኒት ነው፤ ኃጢአተኛው የኃጢአቱን ክብደት እንዲያውቅ፣ ለነፍሱም ፈውስ እንዲሆን፣ ሌሎችም እንዲፈሩ ይሰጣል።",
          },
          vers: ["Col 1:20", "2Cor 2:6-7", "1Tim 5:20"],
        },
        {
          tekst: {
            no: "Presten skal være som en mild lege. En liten sykdom trenger ikke samme sterke medisin som en stor. Paulus ba menigheten i Korint om å tilgi og trøste den som hadde fått straff, så han ikke skulle gå til grunne i sorg.",
            am: "ካህኑ እንደ ርኅሩኅ ሐኪም ነው፤ ቀላል በሽታ ለከባድ በሽታ የሚያስፈልገውን ብርቱ መድኃኒት አያስፈልገውም። ቅዱስ ጳውሎስም የተቀጣውን ሰው ከልክ በሚበዛ ኀዘን እንዳይዋጥ ይቅር እንዲሉትና እንዲያጽናኑት ለቆሮንቶስ ምእመናን ጻፈ።",
          },
          vers: ["2Cor 2:6-7"],
        },
        {
          tekst: {
            no: "Når vi får ቀኖና, skal vi gjøre alt – ikke legge til fordi vi synes det er lite, og ikke trekke fra fordi vi synes det er mye. Vi skal lyde skriftefaren, gjøre det ferdig, og aldri bytte det ut med penger eller noe annet.",
            am: "ቀኖና ሲሰጠን አነሰ ብለን ሳንጨምር፣ በዛ ብለን ሳንቀንስ ሙሉውን መፈጸም ይገባናል። ለንስሐ አባታችን እንታዘዛለን፤ ቀኖናውን በአግባቡ ፈጽመን እንጨርሳለን፤ በገንዘብም ሆነ በሌላ መንገድ አንለውጠውም።",
          },
        },
      ],
    },
    {
      id: "ikke-vente",
      tittel: { no: "Ikke vent – og ikke gi opp", am: "ንስሐን አታዘግዩ፤ ተስፋም አትቍረጡ" },
      punkter: [
        {
          tekst: {
            no: "Gud vil at alle skal bli frelst, og han sender ingen bort som kommer til ham. Selv om syndene er røde som skarlagen, kan de bli hvite som snø. Ingen synd er for stor til å bli tilgitt når vi vender om.",
            am: "እግዚአብሔር ሰዎች ሁሉ እንዲድኑ ይወዳል፤ ወደ እርሱ የሚመጣውንም ወደ ውጭ አያወጣውም። ኃጢአታችን እንደ አለላ ብትሆን እንደ አመዳይ ትነጻለች። በንስሐ ስንመለስ ይቅር የማይባል ኃጢአት የለም።",
          },
          vers: ["1Tim 2:4", "John 6:37", "Isa 1:18"],
        },
        {
          tekst: {
            no: "Jesus sa at den som spotter Den hellige ånd, ikke får tilgivelse. Kirka forklarer at det gjelder den som avviser og står imot Åndens verk og ikke vil ta imot frelsen – altså den som nekter å vende om.",
            am: "ጌታችን መንፈስ ቅዱስን ለሰደበ እንደማይሰረይለት ተናገረ። ይህም የመንፈስ ቅዱስን ሥራ የሚቃወሙና የእግዚአብሔርን ማዳን ለመቀበል እምቢ የሚሉትን፣ ማለትም ንስሐ ለመግባት የማይፈልጉትን ያመለክታል።",
          },
          vers: ["Matt 12:31"],
        },
        {
          tekst: {
            no: "Ikke vent! Når vi dør, er det ikke lenger mulig å vende om. Gud befaler nå alle mennesker overalt å vende om. Det er derfor vi skal leve et liv i omvendelse mens vi er her på jorden.",
            am: "ንስሐን አታዘግዩ፤ ከሞት በኋላ ንስሐ የለምና። እግዚአብሔር አሁን በየቦታቸው ንስሐ ይገቡ ዘንድ ሰውን ሁሉ ያዛል። ስለዚህ በምድር ሳለን በንስሐ ሕይወት ልንመላለስ ይገባናል።",
          },
          vers: ["Acts 17:30", "Luke 13:5", "Rom 6:23"],
        },
        {
          tekst: {
            no: "Ikke gi opp! Etter skriftemålet kan vi falle igjen. Djevelen vil da si: «Det er ingen vits å gå til skriftefaren igjen.» Men «den rettferdige faller sju ganger og reiser seg igjen». Kirkas lærere sier: Gud spør ikke «hvorfor syndet du?», men «hvorfor vendte du ikke om?»",
            am: "ተስፋ አትቍረጡ፤ ንስሐ ከገባን በኋላ እንደገና ልንወድቅ እንችላለን። ያን ጊዜ ክፉ ሐሳብ «የንስሐ አባቴን ከማስቸገር ብቀመጥ ይሻለኛል» ያሰኛል። ነገር ግን «ጻድቅ ሰባት ጊዜ ይወድቃልና፥ ይነሣማል።» አምላካችን «ለምን ንስሐ አልገባህም» እንጂ «ለምን ኃጢአት ሠራህ» አይልም።",
          },
          vers: ["Prov 24:16"],
        },
      ],
    },
    {
      id: "nattverd",
      tittel: { no: "Omvendelsen og nattverden", am: "ንስሐና ቍርባን" },
      punkter: [
        {
          tekst: {
            no: "Før vi tar imot Kristi kropp og blod, skal vi prøve oss selv. Derfor går vi vanligvis til skrifte før nattverden. En kristen skal ikke ta imot nattverden uten å ha vendt om og vist seg for presten.",
            am: "የክርስቶስን ሥጋና ደም ከመቀበላችን በፊት ራሳችንን መፈተን ይገባናል፤ ስለዚህ ምሥጢረ ንስሐ አብዛኛውን ጊዜ ከቍርባን በፊት ይፈጸማል። ክርስቲያን ንስሐ ሳይገባና ራሱን ለካህን ሳያሳይ ቅዱስ ሥጋውንና ክቡር ደሙን መቀበል አይገባውም።",
          },
          vers: ["1Cor 11:28-29"],
        },
        {
          tekst: {
            no: "Den som har fått ቀኖና, skal vanligvis gjøre den ferdig før han tar imot nattverden. Men er han så syk at han kan dø, kan han ta imot nattverden før ቀኖና er ferdig, etter råd fra skriftefaren.",
            am: "ንስሐ ገብቶ ቀኖናውን ሳይጨርስ ወደ ሥጋ ወደሙ መቅረብ ተገቢ አይደለም። ነገር ግን ለሞት የሚያሰጋ በሽታ ከያዘው ቀኖናውን ሳይጨርስም ቢሆን በንስሐ አባቱ ምክር ሊቀበል ይችላል።",
          },
        },
        {
          tekst: {
            no: "Skriftemålet er som å vaske hendene, nattverden er som å spise. En sulten mann blir ikke mett bare av å vaske hendene. Skriftemålet renser oss, men det er Kristi kropp og blod som gir evig liv. Nattverden er ikke bare for de gamle – alle kristne trenger den.",
            am: "ንስሐ እጅን እንደ መታጠብ፣ ቍርባን ደግሞ እንደ መመገብ ነው። የተራበ ሰው እጁን ስለ ታጠበ ብቻ አይጠግብም። ንስሐ ከኃጢአት እድፍ ያነጻናል፤ የዘለዓለም ሕይወትን የሚሰጠው ግን ቅዱስ ሥጋውና ክቡር ደሙ ነው። ቍርባን ለሽማግሌዎች ብቻ አይደለም፤ ክርስቲያን ሁሉ ያስፈልገዋል።",
          },
          vers: ["John 6:53", "John 6:33"],
        },
        {
          tekst: {
            no: "Vi skrifter ikke bare når vi skal ta imot nattverden. Har vi syndet, skal vi vende om så snart som mulig, enten vi skal til nattverd eller ikke.",
            am: "ንስሐ የምንገባው ቍርባን ስንቀበል ብቻ አይደለም። በደል ከሠራን ብንቈርብም ባንቈርብም ፈጥነን በካህኑ አማካኝነት ንስሐ እንገባለን።",
          },
        },
      ],
    },
    {
      id: "naade",
      tittel: { no: "Hva gir omvendelsen oss?", am: "በምሥጢረ ንስሐ የምናገኘው ጸጋ" },
      punkter: [
        {
          tekst: { no: "Syndenes forlatelse.", am: "ሥርየተ ኃጢአት።" },
          vers: ["1John 1:9", "Acts 3:19"],
        },
        {
          tekst: {
            no: "Forsoning med Gud: Vi slipper å leve i strid med Gud og blir fri fra den evige straffen.",
            am: "ከእግዚአብሔር ጋር መታረቅ፤ ከእግዚአብሔር ተጣልቶ ከመኖርና ከዘለዓለም ቅጣት እንድናለን።",
          },
          vers: ["2Cor 5:18-20"],
        },
        {
          tekst: {
            no: "Et nytt hjerte: Vi blir fornyet og løst fra syndens lenker.",
            am: "መታደስ፤ አዲስ ልብ እናገኛለን፤ ከኃጢአት እስራትም እንፈታለን።",
          },
          vers: ["Ezek 18:31", "Ps 51:3-6"],
        },
        {
          tekst: {
            no: "Fred og glede: Faren holdt fest da sønnen kom hjem. Den som har vendt om, blir ydmyk, lærer å hate synden og elske synderne og ber for dem i stedet for å dømme dem.",
            am: "ሰላምና ደስታ፤ አባቱ ልጁ በተመለሰ ጊዜ ደስታ አደረገ። ንስሐ የገባ ሰው ትሑት ይሆናል፤ ኃጢአትን ይጠላል፤ ኃጢአተኞችን ግን ይወዳል፤ በእነርሱ ላይ ከመፍረድ ይልቅ ስለ እነርሱ ያለቅሳል።",
          },
          vers: ["Luke 15:32", "Luke 7:47"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Athanasius den apostoliske", am: "ቅዱስ አትናቴዎስ ሐዋርያዊ" },
      tekst: {
        no: "«Slik den døpte blir opplyst av Den hellige ånds nåde gjennom presten, får den som angrer, tilgivelse for syndene sine ved Kristi nåde, også gjennom presten.»",
        am: "«ተጠማቂው በካህኑ አማካኝነት በመንፈስ ቅዱስ ጸጋ እንደሚበራ፣ እንዲሁ ንስሐ የሚገባውም በክርስቶስ ጸጋ በካህኑ አማካኝነት የኃጢአቱን ሥርየት ያገኛል።» (ከእንግሊዝኛው የተተረጐመ)",
      },
      kilde: "Sitert i Koptisk-ortodokse kirke: The Sacrament of Repentance and Confession (copticchurch.net)",
    },
    {
      navn: { no: "Hellige Gregor av Nyssa", am: "ቅዱስ ጎርጎርዮስ ዘኑሲስ" },
      tekst: {
        no: "«Se på kirkas prest som din åndelige far. Vis ham hemmelighetene dine åpent, slik en syk viser legen de skjulte sårene sine, og så blir han helbredet.»",
        am: "«የቤተ ክርስቲያንን ካህን እንደ መንፈሳዊ አባትህ ቍጠረው፤ ሕመምተኛ የተሰወረ ቍስሉን ለሐኪም ገልጦ እንደሚፈወስ፣ አንተም ምሥጢርህን በግልጥ ንገረው።» (ከእንግሊዝኛው የተተረጐመ)",
      },
      kilde: "Sitert i Koptisk-ortodokse kirke: The Sacrament of Repentance and Confession (copticchurch.net)",
    },
    {
      navn: { no: "Hellige Basilios den store", am: "ቅዱስ ባስልዮስ ዐቢይ" },
      tekst: {
        no: "«Slik vi tåler legens kniv og den bitre medisinen for å lege kroppen, skal vi også tåle irettesettelse, tukt og ulike øvelser, så sjelen kan bli legt fra syndene og svakhetene sine.»",
        am: "«ሥጋችን እንዲፈወስ የሐኪሙን ቢላዋና የመድኃኒቱን መራራነት እንደምንታገሥ፣ ነፍሳችንም ከኃጢአቷና ከድካሟ እንድትፈወስ ተግሣጽን፣ ቅጣትንና ልዩ ልዩ ቀኖናን መታገሥ ይገባናል።» (ከእንግሊዝኛው የተተረጐመ)",
      },
      kilde: "Sitert i Koptisk-ortodokse kirke: The Sacrament of Repentance and Confession (copticchurch.net)",
    },
    {
      navn: { no: "Apostlenes lære (ዲድስቅልያ)", am: "ዲድስቅልያ" },
      tekst: {
        no: "Til skriftefaren: «Behandle den syke som en barmhjertig lege. Bruk ikke en sterk medisin, men en mild. Rens sårene og styrk ham med trøstende ord. … Gi ikke én dom for alle synder, men undersøk hver synd, så du kan gi den rette dommen.»",
        am: "ለንስሐ አባት፤ «ታማሚውን እንደ ርኅሩኅ ባለ መድኃኒት አክመው፤ ብርቱ መድኃኒት ሳይሆን ለስላሳውን ተጠቀም፤ ቍስሉን አንጻ፤ በማጽናኛ ቃልም አበርታው። … ለኃጢአት ሁሉ አንድ ፍርድ አትስጥ፤ የሚገባውን ፍርድ ትሰጥ ዘንድ እያንዳንዱን ኃጢአት መርምር።» (ከእንግሊዝኛው የተተረጐመ)",
      },
      kilde: "ዲድስቅልያ kap. 8 (sitert i ethiopianorthodox.org: The Sacrament of Penance, del VI)",
    },
  ],
  ord: [
    { ord: "ንስሐ", forklaring: { no: "omvendelse, anger, skriftemål (av ge'ez ነስሐ, å angre)", am: "ተጸጸተ፣ ተመለሰ" } },
    { ord: "ጸጸት · ኀዘን", forklaring: { no: "anger, sorg over synden", am: "በሠሩት ኃጢአት ማዘን" } },
    { ord: "ኑዛዜ", forklaring: { no: "bekjennelse av syndene", am: "ራስን መግለጥ፣ ራስን መክሰስ" } },
    { ord: "ቀኖና", forklaring: { no: "botsøvelse som presten gir (gresk: mål, målestokk)", am: "መለኪያ፣ መስፈርያ" } },
    { ord: "የንስሐ አባት · አበ ነፍስ · መምህረ ንስሐ", forklaring: { no: "skriftefar, sjelens far", am: "ኑዛዜን የሚቀበል ካህን" } },
    { ord: "የንስሐ ልጅ", forklaring: { no: "skriftebarn – den som har en skriftefar", am: "የንስሐ አባት ያለው ምእመን" } },
    { ord: "እግዚአብሔር ይፍታ", forklaring: { no: "«Gud løse deg» – det presten sier når synden er tilgitt", am: "ካህኑ ሲፈታ የሚለው ቃል" } },
    { ord: "ሥርየተ ኃጢአት", forklaring: { no: "syndenes forlatelse", am: "የኃጢአት ይቅርታ" } },
    { ord: "ኃጢአት", forklaring: { no: "synd (av ge'ez ኀጥአ, å miste)", am: "ማጣት፣ ከእግዚአብሔር መለየት" } },
    { ord: "ስግደት", forklaring: { no: "knefall, å bøye seg helt ned til jorden", am: "በግንባር መውደቅ" } },
    { ord: "ምጽዋት", forklaring: { no: "gave til de fattige", am: "ለድሆች መስጠት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet ንስሐ?", am: "«ንስሐ» ማለት ምን ማለት ነው?" },
      svar: {
        no: "Det kommer av ge'ez «ነስሐ» og betyr å angre, sørge, vende om og gå ut av synden – fra døden til livet.",
        am: "«ነስሐ» ከሚለው የግዕዝ ግሥ የተገኘ ሲሆን ተጸጸተ፣ አዘነ፣ ተመለሰ፣ ከኃጢአት ወጣ፣ ከሞት ወደ ሕይወት ተመለሰ ማለት ነው።",
      },
    },
    {
      sporsmal: { no: "Hvordan innstiftet Jesus skriftemålet?", am: "ጌታችን ምሥጢረ ንስሐን እንዴት መሠረተ?" },
      svar: {
        no: "Han ga apostlene makt til å binde og løse (Matt 16,19; 18,18), og etter oppstandelsen blåste han på dem og sa: «Tilgir dere noen syndene, er de tilgitt» (Joh 20,22–23).",
        am: "ለሐዋርያት የማሰርና የመፍታት ሥልጣን ሰጣቸው (ማቴ 16፥19፤ 18፥18)፤ ከትንሣኤውም በኋላ እፍ ብሎባቸው «ኃጢአታቸውን ይቅር ያላችኋቸው ሁሉ ይቀርላቸዋል» አላቸው (ዮሐ 20፥22–23)።",
      },
    },
    {
      sporsmal: { no: "Hvilke tre ting gjør den som vender om?", am: "ንስሐ የሚገባ ሰው የሚፈጽማቸው ሦስት ነገሮች ምንድን ናቸው?" },
      svar: {
        no: "ጸጸት (angrer og sørger over synden), ኑዛዜ (bekjenner for presten uten å skjule noe) og ቀኖና (gjør botsøvelsen presten gir).",
        am: "ጸጸት (ኀዘን)፣ ኑዛዜና ቀኖና።",
      },
    },
    {
      sporsmal: { no: "Kan presten fortelle noen det du har bekjent?", am: "ካህኑ በኑዛዜ የሰማውን ለሌላ ሰው ሊናገር ይችላልን?" },
      svar: {
        no: "Nei, aldri. Taushetsplikten har ingen unntak og gjelder også etter at den som skriftet, er død.",
        am: "በፍጹም አይችልም። የኑዛዜ ምሥጢር ምንም ልዩነት የለውም፤ ተናዛዡ ከሞተም በኋላ ይጸናል።",
      },
    },
    {
      sporsmal: { no: "Er ቀኖና en straff eller en betaling for synden?", am: "ቀኖና የኃጢአት ቅጣት ወይም ዋጋ ነውን?" },
      svar: {
        no: "Nei. Bare Kristi blod betaler for synden. ቀኖና er en medisin for sjelen, som presten gir som en mild lege.",
        am: "አይደለም። የኃጢአትን ዋጋ የከፈለው የክርስቶስ ደም ብቻ ነው። ቀኖና ካህኑ እንደ ርኅሩኅ ሐኪም የሚሰጠው የነፍስ መድኃኒት ነው።",
      },
    },
    {
      sporsmal: { no: "Hva lærer Sakkeus oss om omvendelse?", am: "ዘኬዎስ ስለ ንስሐ ምን ያስተምረናል?" },
      svar: {
        no: "At ekte omvendelse også gjør godt igjen: Han ga halvparten til de fattige og betalte tilbake fire ganger det han hadde tatt (Luk 19,8–9).",
        am: "እውነተኛ ንስሐ የበደልነውን መካስንም እንደሚጨምር፤ እኵሌታውን ለድሆች ሰጠ፤ የበደላቸውንም አራት እጥፍ መለሰ (ሉቃ 19፥8–9)።",
      },
    },
  ],
  kilder: [
    { navn: "ሥርዓተ ቤተ ክርስቲያን (søndagsskolebok for 8. klasse: መሠረተ ሃይማኖት፣ ሥርዓትና ሥነ ምግባር), kap. 4–5", url: "https://www.scribd.com/document/1036651354/g8-Meserete-Haymanot-Srat-Snemgbar-24" },
    { navn: "ማኅበረ ቅዱሳን: ሰባቱ ምሥጢራተ ቤተ ክርስቲያን (፫) – ንስሐና ቀንዲል", url: "https://eotcmk.org/a/%e1%88%b0%e1%89%a3%e1%89%b1-%e1%88%9d%e1%88%a5%e1%8c%a2%e1%88%ab%e1%89%b0-%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95-3/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of Penance", url: "https://www.ethiopianorthodox.org/english/dogma/sacarapenance.html" },
    { navn: "St. Kidane Mihiret EOT Church, Kansas City: ምስጢረ ንስሐ", url: "https://kidanemihiret.org/sermons/ምስጢረ/" },
    { navn: "ዮሐንስ ንስሐ: ስለ ንስሐ (om skriftefar og ቀኖና)", url: "https://yohannesneseha.org/%e1%8c%a5%e1%8b%ab%e1%89%84%e1%8a%93-%e1%88%98%e1%88%8d%e1%88%b5/%e1%88%b5%e1%88%88-%e1%8a%95%e1%88%b5%e1%88%90/" },
    { navn: "Koptisk-ortodokse kirke (støtte): The Sacrament of Repentance and Confession", url: "https://www.copticchurch.net/introduction-to-the-coptic-church/sacraments/3_repentance_confesstion" },
  ],
  utkast: true,
};
