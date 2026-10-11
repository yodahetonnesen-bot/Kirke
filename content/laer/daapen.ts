import type { Tema } from "./typer";

// Bygger på notater fra søndagsskolen og på kirkas egen undervisning:
// ethiopianorthodox.org (The Sacrament of Baptism), astemhro.com (ምስጢረ ጥምቀት፡ የክርስትና መግቢያ በር)
// og søndagsskoleavdelingen i Mahibere Kidusan (eotcmk.org).
export const daapen: Tema = {
  slug: "daapen",
  del: "sakramentene",
  tittel: { no: "Dåpen", am: "ምሥጢረ ጥምቀት" },
  undertittel: { no: "Døren inn til kristenlivet", am: "የክርስትና መግቢያ በር" },
  bilde: "daapen",
  ingress: {
    no:
      "Dåpen er det første av kirkas sju sakramenter, og den er også ett av de fem mysteriene. I dåpen blir vi født på nytt av vann og Ånd og blir Guds barn. Den kalles døren inn til kristenlivet, fordi vi må være døpt før vi kan ta imot de andre sakramentene.",
    am:
      "ጥምቀት ከሰባቱ ምሥጢራተ ቤተ ክርስቲያን የመጀመሪያው ሲሆን ከአምስቱ አዕማደ ምሥጢርም አንዱ ነው። በጥምቀት ከውኃና ከመንፈስ ቅዱስ ዳግመኛ ተወልደን የእግዚአብሔር ልጆች እንሆናለን። ሌሎቹን ምሥጢራት ከመቀበላችን በፊት መጠመቅ ስላለብን «የክርስትና መግቢያ በር» ትባላለች።",
  },
  hovedvers: "John 3:5",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er dåpen?", am: "ጥምቀት ምንድን ናት?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ጥምቀት kommer av ge'ez-ordet «አጥመቀ», som betyr å dyppe ned i vann. I dåpen blir vi dyppet helt ned i vann tre ganger, i Faderens, Sønnens og Den hellige ånds navn.",
            am: "«ጥምቀት» የሚለው ቃል «አጥመቀ» ከሚለው የግዕዝ ግሥ የተገኘ ሲሆን በውኃ ውስጥ መንከር ማለት ነው። በጥምቀት በአብ በወልድ በመንፈስ ቅዱስ ስም ሦስት ጊዜ በውኃ ውስጥ እንነከራለን።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "Vi blir døpt med vann og Den hellige ånd. Jesus sa at ingen kan komme inn i Guds rike uten å bli født av vann og Ånd.",
            am: "በውኃና በመንፈስ ቅዱስ እንጠመቃለን። ጌታችን ሰው ከውኃና ከመንፈስ ካልተወለደ በቀር ወደ እግዚአብሔር መንግሥት ሊገባ እንደማይችል ተናግሯል።",
          },
          vers: ["John 3:5"],
        },
        {
          tekst: {
            no: "Vi blir født to ganger: først av mor og far, og så av Gud i dåpen. Det første er en fødsel i kroppen, det andre er en fødsel i Ånden.",
            am: "ሁለት ጊዜ እንወለዳለን፤ መጀመሪያ ከእናትና ከአባታችን፣ ቀጥሎም በጥምቀት ከእግዚአብሔር። የመጀመሪያው ልደት በሥጋ፣ ሁለተኛው በመንፈስ ነው።",
          },
          vers: ["John 3:6", "John 1:12-13"],
        },
        {
          tekst: {
            no: "Dåpen har en side vi ser og en side vi ikke ser. Vi ser vannet, bønnene, de hvite klærne og ማተብ. Vi ser ikke at Gud gjør oss til sine barn og gir oss Den hellige ånds nåde.",
            am: "ጥምቀት የሚታይና የማይታይ ገጽታ አላት። ውኃውን፣ ጸሎቱን፣ ነጭ ልብሱንና ማተቡን እናያለን። የእግዚአብሔርን ልጅነትና የመንፈስ ቅዱስን ጸጋ ማግኘታችንን ግን በዓይናችን አናይም።",
          },
        },
      ],
    },
    {
      id: "innstiftet",
      tittel: { no: "Jesus innstiftet dåpen", am: "ጥምቀትን የመሠረተው ጌታችን ነው" },
      ingress: {
        no: "Jesus innstiftet dåpen på tre måter:",
        am: "ጌታችን ጥምቀትን በሦስት መንገድ መሠረተ፤",
      },
      punkter: [
        {
          tekst: {
            no: "Ved sitt eksempel: Han ble selv døpt av Johannes i Jordanelva.",
            am: "በአርአያነቱ፤ ራሱ በዮርዳኖስ ወንዝ በዮሐንስ እጅ ተጠመቀ።",
          },
          vers: ["Matt 3:13-17"],
        },
        {
          tekst: {
            no: "Ved sin forkynnelse: Han lærte at den som tror og blir døpt, skal bli frelst, og at vi må bli født på nytt.",
            am: "በትምህርቱ፤ ያመነ የተጠመቀ እንደሚድን፣ ሰውም ዳግመኛ መወለድ እንዳለበት አስተማረ።",
          },
          vers: ["Mark 16:16", "John 3:3"],
        },
        {
          tekst: {
            no: "Ved å gi kirka oppdraget: Han sendte apostlene ut for å døpe alle folkeslag i Faderens, Sønnens og Den hellige ånds navn.",
            am: "ለቤተ ክርስቲያን በሰጠው ትእዛዝ፤ ሐዋርያትን አሕዛብን ሁሉ በአብ በወልድ በመንፈስ ቅዱስ ስም እንዲያጠምቁ ላካቸው።",
          },
          vers: ["Matt 28:19-20"],
        },
      ],
    },
    {
      id: "to-slags",
      tittel: { no: "Omvendelsesdåp og gjenfødelsesdåp", am: "የንስሐ ጥምቀትና የልጅነት ጥምቀት" },
      punkter: [
        {
          tekst: {
            no: "Omvendelsesdåpen (የንስሐ ጥምቀት): Johannes døperen døpte folk til omvendelse, så de kunne få tilgivelse og gjøre seg klare til å ta imot Kristus. Den hørte til tiden før Kristus og gjorde ingen til Guds barn.",
            am: "የንስሐ ጥምቀት፤ ቅዱስ ዮሐንስ መጥምቅ ሰዎች ንስሐ ገብተው ለኃጢአት ሥርየት ክርስቶስን ለመቀበል እንዲዘጋጁ ያጠምቅ ነበር። ይህች ጥምቀት የክርስቶስ ጥምቀት ምሳሌ ነበረች እንጂ የልጅነትን ጸጋ አታሰጥም ነበር።",
          },
          vers: ["Mark 1:4", "Matt 3:11", "Acts 19:4"],
        },
        {
          tekst: {
            no: "Gjenfødelsesdåpen (የልጅነት ጥምቀት): Dåpen Jesus innstiftet i Det nye testamentet. I den blir vi født på nytt og får nåden å være Guds barn.",
            am: "የልጅነት ጥምቀት፤ ጌታችን በሐዲስ ኪዳን የመሠረታት ጥምቀት ናት። በእርሷ ዳግመኛ ተወልደን የእግዚአብሔርን የልጅነት ጸጋ እናገኛለን።",
          },
          vers: ["Titus 3:5", "Gal 3:26-27"],
        },
      ],
    },
    {
      id: "gaver",
      tittel: { no: "Hva gir dåpen oss?", am: "ጥምቀት የሚያስገኘው ጸጋ" },
      punkter: [
        {
          tekst: { no: "Frelse: Den som tror og blir døpt, skal bli frelst.", am: "ድኅነት፤ ያመነ የተጠመቀ ይድናል።" },
          vers: ["Mark 16:16", "1Pet 3:20-21"],
        },
        {
          tekst: { no: "Ny fødsel: Vi blir født på nytt, av Gud.", am: "ዳግም ልደት፤ ከእግዚአብሔር ዳግመኛ እንወለዳለን።" },
          vers: ["John 3:5", "1Pet 1:23"],
        },
        {
          tekst: { no: "Tilgivelse for syndene.", am: "ሥርየተ ኃጢአት።" },
          vers: ["Acts 2:38", "Acts 22:16"],
        },
        {
          tekst: {
            no: "Vi blir lik Kristus: I vannet blir vi begravet med ham, og vi står opp med ham til et nytt liv.",
            am: "ክርስቶስን መምሰል፤ በጥምቀት ከእርሱ ጋር እንቀበራለን፤ በአዲስ ሕይወትም ከእርሱ ጋር እንነሣለን።",
          },
          vers: ["Rom 6:3-4", "Col 2:12"],
        },
        {
          tekst: {
            no: "Vi blir Guds barn og en del av Kristi kropp, kirka.",
            am: "የእግዚአብሔር ልጆችና የክርስቶስ አካል የሆነችው የቤተ ክርስቲያን አባላት እንሆናለን።",
          },
          vers: ["Gal 3:26-27", "1Cor 12:13"],
        },
      ],
    },
    {
      id: "en-daap",
      tittel: { no: "Én dåp – den gjentas aldri", am: "ጥምቀት አንዲት ናት፤ አትደገምም" },
      punkter: [
        {
          tekst: {
            no: "Bibelen sier: én Herre, én tro, én dåp. Vi blir født bare én gang av mor og far, og derfor blir vi også født bare én gang av Gud. Kristus døde og stod opp bare én gang.",
            am: "መጽሐፍ ቅዱስ «አንድ ጌታ አንድ ሃይማኖት አንዲት ጥምቀት» ይላል። በሥጋ አንድ ጊዜ ብቻ እንደምንወለድ ከእግዚአብሔርም የምንወለደው አንድ ጊዜ ብቻ ነው። ክርስቶስም የሞተውና የተነሣው አንድ ጊዜ ነው።",
          },
          vers: ["Eph 4:5", "Rom 6:9-10"],
        },
        {
          tekst: {
            no: "I trosbekjennelsen sier vi: «ወነአምን በአሐቲ ጥምቀት ለሥርየተ ኃጢአት» – vi tror på én dåp til syndenes forlatelse.",
            am: "በጸሎተ ሃይማኖት «ወነአምን በአሐቲ ጥምቀት ለሥርየተ ኃጢአት፤ ኃጢአትን በምታስተሠርይ በአንዲት ጥምቀት እናምናለን» እንላለን።",
          },
        },
        {
          tekst: {
            no: "Den som har forlatt troen og kommer tilbake, blir ikke døpt på nytt. Han eller hun tas imot igjen gjennom skriftemål (ንስሐ) og nattverd.",
            am: "ሃይማኖቱን ትቶ የተመለሰ ሰው ዳግመኛ አይጠመቅም፤ በንስሐና በቍርባን ይመለሳል።",
          },
        },
      ],
    },
    {
      id: "tre-maater",
      tittel: { no: "Tre måter dåpen kan skje på", am: "ጥምቀት የምትፈጸምባቸው ሦስት መንገዶች" },
      ingress: {
        no: "Det finnes bare én dåp, men kirka lærer at den kan skje på tre måter:",
        am: "ጥምቀት አንዲት ናት፤ ነገር ግን በሦስት መንገድ ልትፈጸም ትችላለች፤",
      },
      punkter: [
        {
          tekst: {
            no: "Vanndåpen (የውኃ ጥምቀት): Den vanlige dåpen, som presten utfører i vann som er velsignet med bønn.",
            am: "የውኃ ጥምቀት፤ ካህናት በጸሎት በተባረከ ውኃ የሚፈጽሟት ጥምቀት ናት።",
          },
          vers: ["John 3:5", "Acts 8:38"],
        },
        {
          tekst: {
            no: "Åndsdåpen (የመንፈስ ቅዱስ ጥምቀት): Apostlene ble døpt med Den hellige ånd på pinsedagen.",
            am: "የመንፈስ ቅዱስ ጥምቀት፤ ቅዱሳን ሐዋርያት በበዓለ ሃምሳ በመንፈስ ቅዱስ ተጠመቁ።",
          },
          vers: ["Acts 1:5", "Acts 2:1-4"],
        },
        {
          tekst: {
            no: "Blodsdåpen (የደም ጥምቀት): Martyrer som døde for Kristus før de rakk å bli døpt, regnes som døpt i sitt eget blod.",
            am: "የደም ጥምቀት፤ ሳይጠመቁ ስለ ክርስቶስ በሰማዕትነት የሞቱ ሰማዕታት ደማቸው እንደ ጥምቀት ይቆጠርላቸዋል።",
          },
          vers: ["Matt 10:32", "Matt 16:25"],
        },
      ],
    },
    {
      id: "slik",
      tittel: { no: "Slik foregår dåpen", am: "ጥምቀት እንዴት ይፈጸማል?" },
      punkter: [
        {
          tekst: {
            no: "Gutter døpes på den 40. dagen og jenter på den 80. dagen. Etter loven i Det gamle testamentet kom foreldrene til tempelet med offer 40 dager etter at en gutt var født, og 80 dager etter at en jente var født. Kirkas tradisjon forteller også at Adam kom inn i paradiset den 40. dagen etter at han ble skapt, og Eva den 80. dagen.",
            am: "ወንዶች በአርባ፣ ሴቶች በሰማንያ ቀናቸው ይጠመቃሉ። በብሉይ ኪዳን ሕግ ወላጆች ወንድ በተወለደ በአርባ፣ ሴት በተወለደች በሰማንያ ቀን መባ ይዘው ወደ ቤተ መቅደስ ይሄዱ ነበር። አዳምም በተፈጠረ በአርባ ቀኑ፣ ሔዋንም በሰማንያ ቀኗ ገነት ገቡ።",
          },
          vers: ["Lev 12:2-6"],
          andre: [{ no: "Jubileenes bok (ኩፋሌ) 4,9", am: "ኩፋሌ 4፥9" }],
        },
        {
          tekst: {
            no: "Før dåpen sier man nei til Satan og bekjenner troen med trosbekjennelsen (ጸሎተ ሃይማኖት). For små barn gjør gudforeldrene dette, og de lover å lære barnet troen.",
            am: "ከጥምቀት በፊት ሰይጣንን መካድና ሃይማኖትን በጸሎተ ሃይማኖት መመስከር ይገባል። ለሕፃናት የክርስትና አባትና እናት ይህን ያደርጋሉ፤ ልጁንም ሃይማኖት ሊያስተምሩ ቃል ይገባሉ።",
          },
          vers: ["Acts 2:38", "Mark 16:16"],
        },
        {
          tekst: {
            no: "Presten dypper barnet helt ned i vannet tre ganger og sier: «Jeg døper deg i Faderens navn, i Sønnens navn og i Den hellige ånds navn.» De tre gangene viser at Gud er én i tre, og minner om de tre dagene Jesus lå i graven.",
            am: "ካህኑ «አጠምቀከ በስመ አብ፣ አጠምቀከ በስመ ወልድ፣ አጠምቀከ በስመ መንፈስ ቅዱስ» እያለ ሦስት ጊዜ በውኃ ውስጥ ያጠምቃል። ሦስት ጊዜ መሆኑ የሥላሴን ሦስትነትና አንድነት፣ ጌታችንም ሦስት ቀን በመቃብር ማደሩን ያሳያል።",
          },
          vers: ["Matt 28:19", "Matt 3:16"],
        },
        {
          tekst: {
            no: "Bare biskoper og prester kan døpe. Det var apostlene Jesus ga oppdraget til.",
            am: "ማጥመቅ የሚችሉት ኤጲስ ቆጶሳትና ቀሳውስት ብቻ ናቸው፤ ጌታችን ሥልጣኑን የሰጠው ለሐዋርያት ነውና።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "Rett etter dåpen blir barnet salvet med myron (ሜሮን), får hvite klær og ማተብ, og tar imot nattverden for første gang.",
            am: "ከጥምቀት በኋላ ወዲያው በሜሮን ይቀባል፣ ነጭ ልብስ ይለብሳል፣ ማተብ ይታሰርለታል፣ ሥጋውንና ደሙንም ይቀበላል።",
          },
          vers: ["Gal 3:27"],
        },
      ],
    },
    {
      id: "navn",
      tittel: { no: "Kristent navn, gudforeldre og ማተብ", am: "ስመ ክርስትና፣ የክርስትና አባትና እናት፣ ማተብ" },
      punkter: [
        {
          tekst: {
            no: "I dåpen får vi et kristent navn (ስመ ክርስትና), ofte etter en helgen. Det er navnet vi bruker i kirka. Også i Bibelen ga Gud nye navn: Abram ble Abraham, Jakob ble Israel, og Simon ble Peter.",
            am: "በጥምቀት የክርስትና ስም (ስመ ክርስትና) እንቀበላለን፤ ብዙ ጊዜ በቅዱሳን ስም ይሰየማል። በቤተ ክርስቲያን የምንጠራበት ስም ይህ ነው። በመጽሐፍ ቅዱስም እግዚአብሔር አብራምን አብርሃም፣ ያዕቆብን እስራኤል፣ ስምዖንን ጴጥሮስ ብሎ ሰይሟል።",
          },
          vers: ["Gen 17:5", "Gen 32:28", "John 1:42"],
        },
        {
          tekst: {
            no: "Gudforeldrene (የክርስትና አባት og የክርስትና እናት) får et åndelig slektskap med barnet og lover å lære det troen. En gutt har gudfar og en jente har gudmor.",
            am: "የክርስትና አባትና እናት ከልጁ ጋር መንፈሳዊ ዝምድና ይኖራቸዋል፤ ሃይማኖትንም ሊያስተምሩት ቃል ይገባሉ። ወንድን ወንድ፣ ሴትን ሴት ክርስትና ያነሣል።",
          },
        },
        {
          tekst: {
            no: "ማተብ (av ge'ez «ዐተበ», å merke) er tegnet på at vi er døpte kristne. Snoren har tre tråder tvinnet til én – et bilde på at Gud er tre og likevel én. Den minner oss også om at Jesus ble bundet for vår skyld.",
            am: "ማተብ ከግዕዙ «ዐተበ» (አመለከተ) የተገኘ ሲሆን የተጠመቅን ክርስቲያኖች መሆናችንን የሚያሳይ ምልክት ነው። ሦስት ክሮች ተገምደው አንድ መሆናቸው የሥላሴ ሦስትነትና አንድነት ምሳሌ ነው። ጌታችን ስለ እኛ በገመድ መታሰሩንም ያስታውሰናል።",
          },
          vers: ["John 18:12"],
        },
      ],
    },
    {
      id: "forbilder",
      tittel: { no: "Bilder på dåpen i Det gamle testamentet", am: "የጥምቀት ምሳሌዎች በብሉይ ኪዳን" },
      punkter: [
        {
          tekst: { no: "Noas ark: Åtte mennesker ble berget gjennom vannet.", am: "የኖኅ መርከብ፤ ስምንት ነፍሳት በውኃ ዳኑ።" },
          vers: ["1Pet 3:20-21"],
        },
        {
          tekst: {
            no: "Omskjærelsen: Guds folk ble merket med den på den åttende dagen. Dåpen er den nye omskjærelsen.",
            am: "ግዝረት፤ የእግዚአብሔር ሕዝብ በስምንተኛው ቀን ይገረዙ ነበር። ጥምቀት የሐዲስ ኪዳን ግዝረት ናት።",
          },
          vers: ["Gen 17:12", "Col 2:11-12"],
        },
        {
          tekst: {
            no: "Israelittene gikk tørrskodd gjennom Rødehavet og ble frie.",
            am: "እስራኤላውያን የኤርትራን ባሕር በደረቅ ተሻግረው ነጻ ወጡ።",
          },
          vers: ["Exod 14:21-22", "1Cor 10:1-2"],
        },
        {
          tekst: {
            no: "Naaman dyppet seg sju ganger i Jordan og ble frisk fra spedalskheten.",
            am: "ንዕማን በዮርዳኖስ ሰባት ጊዜ ብቅ ጥልቅ ብሎ ከለምጹ ንጹሕ ሆነ።",
          },
          vers: ["2Kgs 5:14"],
        },
        {
          tekst: { no: "Josva førte folket over Jordan inn i det lovede landet.", am: "ኢያሱ ሕዝቡን ዮርዳኖስን አሻግሮ ወደ ተስፋይቱ ምድር አገባ።" },
          vers: ["Josh 3:17"],
        },
      ],
    },
    {
      id: "barn",
      tittel: { no: "Hvorfor døper vi små barn?", am: "ሕፃናትን ለምን እናጠምቃለን?" },
      punkter: [
        {
          tekst: { no: "Jesus sa: La de små barna komme til meg.", am: "ጌታችን «ሕፃናትን ተዉአቸው፥ ወደ እኔም ይመጡ ዘንድ አትከልክሉአቸው» አለ።" },
          vers: ["Matt 19:14"],
        },
        {
          tekst: { no: "Apostlene døpte hele familier.", am: "ሐዋርያት ቤተሰብን ሁሉ ያጠምቁ ነበር።" },
          vers: ["Acts 16:15", "Acts 16:33"],
        },
        {
          tekst: {
            no: "I Det gamle testamentet ble guttene omskåret som spedbarn, og dåpen er den nye omskjærelsen.",
            am: "በብሉይ ኪዳን ሕፃናት በስምንተኛው ቀን ይገረዙ ነበር፤ ጥምቀትም የሐዲስ ኪዳን ግዝረት ናት።",
          },
          vers: ["Gen 17:12", "Col 2:11-12"],
        },
        {
          tekst: {
            no: "Gud kan gi nåde også til de minste: Johannes døperen ble fylt av Den hellige ånd allerede i mors liv.",
            am: "እግዚአብሔር ለሕፃናትም ጸጋን ይሰጣል፤ ዮሐንስ መጥምቅ ገና በእናቱ ማኅፀን ሳለ መንፈስ ቅዱስ ሞላበት።",
          },
          vers: ["Luke 1:15", "Jer 1:5"],
        },
      ],
    },
    {
      id: "etiopia",
      tittel: { no: "En dåp fra Etiopia", am: "የኢትዮጵያዊው ጃንደረባ ጥምቀት" },
      punkter: [
        {
          tekst: {
            no: "Apostlenes gjerninger forteller om en etiopisk hoffmann som arbeidet for dronning Kandake. På veien hjem fra Jerusalem leste han i profeten Jesaja. Filip forklarte ham om Jesus, og hoffmannen ble døpt. De gikk begge ned i vannet, og han reiste videre full av glede.",
            am: "የሐዋርያት ሥራ መጽሐፍ ህንደኬ የተባለች የኢትዮጵያ ንግሥት ጃንደረባ ከኢየሩሳሌም ሲመለስ የኢሳይያስን መጽሐፍ ያነብ እንደ ነበር ይነግረናል። ፊልጶስ ስለ ኢየሱስ ሰበከለት፤ ሁለቱም ወደ ውኃ ወረዱ፤ ጃንደረባውም ተጠመቀ፤ ደስ ብሎትም መንገዱን ሄደ።",
          },
          vers: ["Acts 8:27", "Acts 8:35-39"],
        },
      ],
    },
    {
      id: "timket",
      tittel: { no: "Jesu dåp og ጥምቀት-feiringen", am: "ጥምቀተ ክርስቶስና የጥምቀት በዓል" },
      punkter: [
        {
          tekst: {
            no: "Hvert år den 11. ጥር (19. januar, enkelte år 20. januar) feirer vi ጥምቀት, minnet om at Jesus ble døpt i Jordan. Den dagen blir vi velsignet med vann, men vi blir ikke døpt på nytt – dåpen gjentas aldri.",
            am: "በየዓመቱ ጥር 11 ቀን ጌታችን በዮርዳኖስ መጠመቁን በማሰብ የጥምቀትን በዓል እናከብራለን። በዚያን ቀን በተባረከ ውኃ እንረጫለን፤ ዳግመኛ ግን አንጠመቅም፤ ጥምቀት አትደገምምና።",
          },
          vers: ["Matt 3:16-17"],
        },
      ],
    },
  ],
  ord: [
    { ord: "ጥምቀት", forklaring: { no: "dåp", am: "በውኃ ውስጥ መንከር" } },
    { ord: "ምሥጢር", forklaring: { no: "mysterium, sakrament", am: "በሚታይ አገልግሎት የማይታይ ጸጋ የሚገኝበት" } },
    { ord: "ዳግም ልደት", forklaring: { no: "ny fødsel", am: "ከእግዚአብሔር ዳግመኛ መወለድ" } },
    { ord: "ንስሐ", forklaring: { no: "omvendelse, anger", am: "ከኃጢአት መመለስ" } },
    { ord: "ሥርየተ ኃጢአት", forklaring: { no: "tilgivelse for syndene", am: "የኃጢአት ይቅርታ" } },
    { ord: "ስመ ክርስትና", forklaring: { no: "kristent navn, gitt i dåpen", am: "በጥምቀት የሚሰጥ ስም" } },
    { ord: "የክርስትና አባት / እናት", forklaring: { no: "gudfar / gudmor", am: "ክርስትና የሚያነሡ" } },
    { ord: "ማተብ", forklaring: { no: "snoren rundt halsen, tegnet på at vi er døpt", am: "የክርስትና ምልክት" } },
    { ord: "ሜሮን", forklaring: { no: "myron, den hellige salveoljen", am: "ቅዱስ ቅብዐት" } },
    { ord: "ጸሎተ ሃይማኖት", forklaring: { no: "trosbekjennelsen", am: "የሃይማኖት ጸሎት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvem innstiftet dåpen, og på hvilke tre måter?", am: "ጥምቀትን የመሠረተው ማን ነው? በምን ሦስት መንገድ?" },
      svar: {
        no: "Jesus: ved sitt eksempel (han ble døpt), ved sin forkynnelse og ved å gi apostlene oppdraget om å døpe.",
        am: "ጌታችን ኢየሱስ ክርስቶስ፤ በአርአያነቱ (ራሱ ተጠመቀ)፣ በትምህርቱና ሐዋርያትን እንዲያጠምቁ በማዘዝ።",
      },
    },
    {
      sporsmal: { no: "Hvor mange ganger kan man bli døpt?", am: "ሰው ስንት ጊዜ ይጠመቃል?" },
      svar: { no: "Bare én gang: én Herre, én tro, én dåp (Ef 4,5).", am: "አንድ ጊዜ ብቻ፤ አንድ ጌታ አንድ ሃይማኖት አንዲት ጥምቀት (ኤፌ 4፥5)።" },
    },
    {
      sporsmal: { no: "Hvilken dag blir gutter og jenter døpt?", am: "ወንዶችና ሴቶች በስንተኛው ቀን ይጠመቃሉ?" },
      svar: { no: "Gutter på den 40. dagen og jenter på den 80. dagen.", am: "ወንዶች በአርባ፣ ሴቶች በሰማንያ ቀናቸው።" },
    },
    {
      sporsmal: { no: "Hva er forskjellen på Johannes' dåp og den dåpen Jesus innstiftet?", am: "የዮሐንስ ጥምቀትና ጌታችን የመሠረታት ጥምቀት ልዩነታቸው ምንድን ነው?" },
      svar: {
        no: "Johannes' dåp var en omvendelsesdåp som forberedte folk på Kristus. Jesu dåp er en gjenfødelsesdåp som gjør oss til Guds barn.",
        am: "የዮሐንስ ጥምቀት ሰዎችን ክርስቶስን ለመቀበል የምታዘጋጅ የንስሐ ጥምቀት ነበረች። የጌታችን ጥምቀት ግን የእግዚአብሔር ልጆች የምንሆንባት የልጅነት ጥምቀት ናት።",
      },
    },
    {
      sporsmal: { no: "Hva er blodsdåpen?", am: "የደም ጥምቀት ምንድን ናት?" },
      svar: {
        no: "Martyrer som døde for Kristus før de rakk å bli døpt, regnes som døpt i sitt eget blod.",
        am: "ሳይጠመቁ ስለ ክርስቶስ በሰማዕትነት የሞቱ ሰማዕታት ደማቸው እንደ ጥምቀት ይቆጠርላቸዋል።",
      },
    },
    {
      sporsmal: { no: "Hvorfor har ማተብ tre tråder?", am: "ማተብ ለምን ሦስት ክር ይሆናል?" },
      svar: {
        no: "De tre trådene tvinnet til én er et bilde på at Gud er tre og likevel én (ሥላሴ).",
        am: "ሦስቱ ክሮች ተገምደው አንድ መሆናቸው የሥላሴ ሦስትነትና አንድነት ምሳሌ ነው።",
      },
    },
  ],
  kilder: [
    { navn: "Notater fra søndagsskolen" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of Baptism", url: "https://www.ethiopianorthodox.org/english/dogma/sacrabaptism.html" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ምስጢረ ጥምቀት፡ የክርስትና መግቢያ በር", url: "https://astemhro.com/2018/11/23/baptism/" },
    { navn: "Mahibere Kidusan (EOTC Sunday School Department), MK-US: The Sacrament of Baptism", url: "https://nextgeneration.eotcmk.org/seven-sacraments/the-sacrament-of-baptism" },
  ],
  utkast: true,
};
