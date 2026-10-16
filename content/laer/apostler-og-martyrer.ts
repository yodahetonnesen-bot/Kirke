import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om apostlene, martyrene og kirkefedrene:
// Mahibere Kidusan (eotcmk.org): «ብርሃናተ ዓለም ቅዱስ ጴጥሮስ ወቅዱስ ጳውሎስ», «ሊቀ ሰማዕታት ቅዱስ ጊዮርጊስ» (etter ስንክሳር ሚያዝያ 23),
// «ሊቀ ዲያቆናትና ቀዳሜ ሰማዕት ቅዱስ እስጢፋኖስ» (barn), «እስመ ለመላእክቲሁ ይኤዝዞሙ በእንቲአከ» (Kirkos og Julitta, etter መዝገበ ታሪክ),
// «የእምነት አርበኛ» (Arsema), «ሥዕለ አድኅኖ» (Merkurios, etter ስንክሳር ኅዳር 25), «ጽኑ እምነት» (Efrem om martyrene),
// «ዕረፍቱ ለቅዱስ አትናቴዎስ» (etter ስንክሳር ግንቦት), «‹‹ተዝካረ ዕረፍቱ ለቅዱስ ዮሐንስ አፈወርቅ››», «ኦርቶዶክስ ተዋሕዶ ሃይማኖታችን!»
// (Efesos 431 og navnet ተዋሕዶ), «አውጣኪ፣ ቅዱስ ዲዮስቆሮስ እና የኬልቄዶን ጉባኤ» del 1 og 2, «‹‹ነገን ዛሬ እንሥራ!››», «በዓለ ቅድስት
// ሥላሴ» (ቅዳሴ ዘዲዮስቆሮስ), «ጌታችን ኢየሱስ ተወለደ» (ሃይማኖተ አበው ዘዮሐንስ አፈወርቅ), og månedsartiklene «ወርኃ ጥር», «ወርኃ
// የካቲት», «ወርኃ መጋቢት», «ወርኃ ሚያዝያ», «ወርኃ ግንቦት», «ወርኃ ሐምሌ» og «ወርኃ ጳጉሜን».
// Månedsdagene er fra lib/hoytider-data.ts (ethiopianorthodox.org, werawi bealat).
// Kirkehistorien (Athanasius og Abba Selama, de ni hellige og ቄርሎስ) står på siden «Kirkas historie» og gjentas ikke her.
//
// Usikkert: Stefanus: Mahibere Kidusans barneartikkel sier at han ble FØDT ጥር 1, mens månedsartikkelen «ወርኃ ጥር» og
//   maria-og-helgenfester.ts sier at ጥር 1 er dagen han døde. Vi skriver bare «minnes ጥር 1».
// Usikkert: Kyrillos' minnedag: «ወርኃ መጋቢት» (Mahibere Kidusan) nevner «ዕረፍተ ቅዱስ ቄርሎስ» መጋቢት 14, men sier ikke hvilken
//   Kyrillos. Vi har ikke tatt med noen dato for ham.
// Usikkert: Dioskoros døde ifølge Mahibere Kidusan i 456 etter fem år i eksil. Andre kilder sier 454. Minnedag ikke funnet.
// Usikkert: Efrem: kildene nevner bare የካቲት 3 (da kroppen hans ble flyttet, ፍልሰተ ሥጋ), ikke dødsdagen.
// Usikkert: Merkurios: vi fant lite om livet hans i EOTC-kildene; bare undret med ikonet (ስንክሳር ኅዳር 25) og månedsdagen 25.
// Usikkert: Apostelen Jakob som døde የካቲት 10 («ወርኃ የካቲት»): kilden sier ikke hvilken Jakob. Ikke tatt med.
export const apostlerOgMartyrer: Tema = {
  slug: "apostler-og-martyrer",
  del: "personer",
  tittel: { no: "Apostler, evangelister og martyrer", am: "ሐዋርያት፣ ወንጌላውያንና ሰማዕታት" },
  undertittel: {
    no: "De tolv, de fire evangelistene, martyrene og kirkefedrene som voktet troen",
    am: "አሥራ ሁለቱ ሐዋርያት፣ አራቱ ወንጌላውያን፣ ሰማዕታትና ሃይማኖትን የጠበቁ ሊቃውንት",
  },
  bilde: "georg",
  ingress: {
    no:
      "Jesus valgte tolv apostler og sendte dem ut i hele verden. Martyrene (ሰማዕታት) døde heller enn å fornekte Kristus. Kirkefedrene (ሊቃውንት) forsvarte den rette troen mot vranglære. Troen vår har kommet til oss gjennom dem.",
    am:
      "ጌታችን አሥራ ሁለት ሐዋርያትን መርጦ ወደ ዓለም ሁሉ ላካቸው። ሰማዕታት ክርስቶስን ከመካድ ይልቅ መሞትን መረጡ። ሊቃውንት ቀናችውን ሃይማኖት ከመናፍቃን ጠበቁ። ሃይማኖታችን በእነርሱ በኩል ደርሶናል።",
  },
  hovedvers: "Rev 2:10",
  avsnitt: [
    {
      id: "apostlene",
      tittel: { no: "De tolv apostlene", am: "አሥራ ሁለቱ ሐዋርያት" },
      ingress: {
        no: "Ordet ሐዋርያ betyr «en som er sendt». Jesus valgte tolv blant disiplene og kalte dem apostler.",
        am: "ሐዋርያ ማለት «የተላከ» ማለት ነው። ጌታችን ከደቀ መዛሙርቱ አሥራ ሁለት መርጦ ሐዋርያት ብሎ ሰየማቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "De tolv er: Simon Peter og broren Andreas, Jakob og Johannes (Sebedeus' sønner), Filip og Bartolomeus, Tomas og Matteus, Jakob (Alfeus' sønn) og Taddeus, Simon Kananeus og Judas Iskariot. Etter at Judas forrådte Jesus, ble Mattias valgt i hans sted.",
            am: "አሥራ ሁለቱ፦ ስምዖን ጴጥሮስና ወንድሙ እንድርያስ፣ የዘብዴዎስ ልጆች ያዕቆብና ዮሐንስ፣ ፊልጶስና በርተሎሜዎስ፣ ቶማስና ማቴዎስ፣ የእልፍዮስ ልጅ ያዕቆብና ታዴዎስ፣ ቀነናዊው ስምዖንና የአስቆሮቱ ይሁዳ ናቸው። ይሁዳ ጌታን አሳልፎ ከሰጠ በኋላ ማትያስ በእርሱ ፈንታ ተመረጠ።",
          },
          vers: ["Luke 6:13", "Matt 10:2-4", "Acts 1:26"],
        },
        {
          tekst: {
            no: "Jesus sendte dem ut for å gjøre alle folkeslag til disipler og døpe dem. På pinsedagen ble de fylt med Den hellige ånd, og de gikk ut til hele verden. «Deres røst gikk ut over hele jorden.»",
            am: "ጌታችን «ሂዱና አሕዛብን ሁሉ … እያጠመቃችኋቸው … ደቀ መዛሙርት አድርጓቸው» ብሎ ላካቸው። በበዓለ ሃምሳ መንፈስ ቅዱስ ሞላባቸው፤ ወደ ዓለም ሁሉ ወጡ። «ድምፃቸው በምድር ሁሉ ላይ ቃላቸውም እስከ ዓለም ዳርቻ ወጣ።»",
          },
          vers: ["Matt 28:19-20", "Acts 2:4", "Rom 10:18"],
        },
        {
          tekst: {
            no: "Peter (ጴጥሮስ) var fisker fra Betsaida. Han bekjente: «Du er Messias, den levende Guds Sønn.» Jesus ba ham: «Fø mine får!» Paulus (ጳውሎስ) forfulgte først de kristne, men Jesus kalte ham til å bære navnet hans fram for folkeslagene. Begge døde som martyrer i Roma: Peter ble korsfestet med hodet ned, og Paulus ble halshogd. Kirka feirer dem ሐምሌ 5 og den 5. i hver måned.",
            am: "ቅዱስ ጴጥሮስ በቤተ ሳይዳ የተወለደ ዓሣ አጥማጅ ነበር። «አንተ ክርስቶስ የሕያው እግዚአብሔር ልጅ ነህ» ብሎ መሰከረ፤ ጌታችንም «ጠቦቶቼን ጠብቅ» አለው። ቅዱስ ጳውሎስ መጀመሪያ ክርስቲያኖችን ያሳድድ ነበር፤ ጌታ ግን «ስሜን ይሸከም ዘንድ ለእኔ የተመረጠ ዕቃ ነው» አለ። ሁለቱም በሮም በሰማዕትነት ዐረፉ፤ ቅዱስ ጴጥሮስ ቁልቁል ተሰቀለ፤ ቅዱስ ጳውሎስ በሰይፍ ተገደለ። በዓላቸው ሐምሌ ፭ና በየወሩ ፭ ነው።",
          },
          vers: ["Matt 16:16-18", "John 21:17", "Acts 9:15", "2Tim 4:7"],
        },
        {
          tekst: {
            no: "Jakob og Johannes kalte Jesus «tordensønner» (ወልደ ነጎድጓድ). Jakob var den første av apostlene som døde for troen; kong Herodes drepte ham med sverd. Andreas førte sin bror Peter til Jesus. Tomas sa til den oppstandne Jesus: «Min Herre og min Gud!»",
            am: "ጌታችን ያዕቆብንና ዮሐንስን «ቦአኔርጌስ፤ የነጎድጓድ ልጆች» ብሎ ሰየማቸው። ያዕቆብን ሄሮድስ በሰይፍ ገደለው። እንድርያስ ወንድሙን ጴጥሮስን ወደ ጌታ አመጣው። ቶማስም የተነሣውን ጌታ «ጌታዬ አምላኬም» ብሎ መሰከረለት።",
          },
          vers: ["Mark 3:17", "Acts 12:2", "John 1:40-41", "John 20:28"],
        },
        {
          tekst: {
            no: "Kirka minnes apostlene hver måned: den 2. (Taddeus), den 4. (Johannes), den 5. (Peter og Paulus), den 9. (Tomas og Andreas) og den 18. (Filip). Mattias minnes መጋቢት 8.",
            am: "ቤተ ክርስቲያን ሐዋርያትን በየወሩ ታስባቸዋለች፦ ፪ ታዴዎስ፣ ፬ ዮሐንስ፣ ፭ ጴጥሮስ ወጳውሎስ፣ ፱ ቶማስና እንድርያስ፣ ፲፰ ፊልጶስ። ቅዱስ ማትያስ መጋቢት ፰ ዐረፈ።",
          },
        },
      ],
    },
    {
      id: "evangelistene",
      tittel: { no: "De fire evangelistene", am: "አራቱ ወንጌላውያን" },
      punkter: [
        {
          tekst: {
            no: "Evangelistene (ወንጌላውያን) skrev ned evangeliet om Jesus: Matteus, Markus, Lukas og Johannes. Matteus og Johannes var blant de tolv. Lukas var lege og skrev også Apostlenes gjerninger.",
            am: "ወንጌላውያን የጌታችንን ወንጌል የጻፉ ናቸው፤ እነርሱም ማቴዎስ፣ ማርቆስ፣ ሉቃስና ዮሐንስ ናቸው። ማቴዎስና ዮሐንስ ከአሥራ ሁለቱ ሐዋርያት ናቸው። ሉቃስ ባለ መድኃኒት ነበር፤ የሐዋርያት ሥራንም ጻፈ።",
          },
          vers: ["Luke 1:1-3", "Col 4:14"],
        },
        {
          tekst: {
            no: "I vår kalender har hvert år navnet til en evangelist: ዘመነ ማቴዎስ, ዘመነ ማርቆስ, ዘመነ ሉቃስ og ዘመነ ዮሐንስ. I år etter ዘመነ ዮሐንስ har ጳጉሜን seks dager.",
            am: "በዘመን አቈጣጠራችን ዓመታት በወንጌላውያን ስም ይጠራሉ፦ ዘመነ ማቴዎስ፣ ዘመነ ማርቆስ፣ ዘመነ ሉቃስና ዘመነ ዮሐንስ። ወርኃ ጳጉሜን በዘመነ ዮሐንስ መግቢያ ስድስት ቀን ይኖራታል።",
          },
        },
        {
          tekst: {
            no: "Johannes skrev: «I begynnelsen var Ordet … og Ordet ble kjøtt.» Han tok vare på Maria etter korset. Kirka sier at han ikke døde, men ble tatt bort (ተሰወረ) ጥር 4. Han minnes den 4. i hver måned.",
            am: "ቅዱስ ዮሐንስ «በመጀመሪያው ቃል ነበረ … ቃልም ሥጋ ሆነ» ብሎ ጻፈ። ከመስቀሉ በኋላ እመቤታችንን ተቀበላት። ጥር ፬ ተሰወረ፤ በየወሩም በ፬ ይታሰባል።",
          },
          vers: ["John 1:1", "John 1:14", "John 19:26-27"],
        },
        {
          tekst: {
            no: "Markus forkynte i Alexandria og ble den første lederen for kirka der. Han døde som martyr ሚያዝያ 30, og han minnes den 30. i hver måned. Kirka vår fikk sine biskoper fra Markus' stol i Alexandria i mange hundre år.",
            am: "ቅዱስ ማርቆስ በእስክንድርያ ወንጌልን አስተማረ፤ ለእስክንድርያ ሊቃነ ጳጳሳት አለቃ ሆነ። ሚያዝያ ፴ በሰማዕትነት ዐረፈ፤ በየወሩም በ፴ ይታሰባል።",
          },
          vers: ["Mark 16:15"],
        },
      ],
    },
    {
      id: "stefanus",
      tittel: { no: "Den hellige Stefanus – den første martyren", am: "ቀዳሜ ሰማዕት ቅዱስ እስጢፋኖስ" },
      punkter: [
        {
          tekst: {
            no: "Navnet Stefanus betyr «krone». Foreldrene hans het Simon og Anna. Han var en av de sju diakonene apostlene valgte. Kirka kaller ham ሊቀ ዲያቆናት, «diakonenes leder». Han var full av tro og Den hellige ånd og gjorde store tegn.",
            am: "እስጢፋኖስ ማለት «አክሊል» ማለት ነው። አባቱ ስምዖን እናቱ ሐና ይባላሉ። ሐዋርያት ከመረጧቸው ከሰባቱ ዲያቆናት አንዱ ነው፤ ሊቀ ዲያቆናት ይባላል። እምነትና መንፈስ ቅዱስ የሞላበት ሰው ነበር፤ ታላቅ ምልክትም ያደርግ ነበር።",
          },
          vers: ["Acts 6:5", "Acts 6:8"],
        },
        {
          tekst: {
            no: "Han ble falskt anklaget. Han så himmelen åpen og Jesus stå ved Guds høyre hånd. Mens de steinet ham, ba han: «Herre, tilregn dem ikke denne synden!» Saulus, som så på, ble senere apostelen Paulus.",
            am: "በሐሰት ከሰሱት። ሰማያት ተከፍተው ጌታችን በእግዚአብሔር ቀኝ ቆሞ አየ። ሲወግሩትም «ጌታ ሆይ፥ ይህን ኃጢአት አትቍጠርባቸው» ብሎ ጸለየ። በዚያ የነበረው ሳውል ኋላ ቅዱስ ጳውሎስ ሆነ።",
          },
          vers: ["Acts 7:55-56", "Acts 7:59-60", "Acts 8:1"],
        },
        {
          tekst: {
            no: "Kirka minnes ham ጥር 1 og den 17. i hver måned. Han lærer oss å tilgi dem som gjør oss vondt.",
            am: "ጥር ፩ና በየወሩ ፲፯ ይታሰባል። የበደሉንን ይቅር ማለትን ያስተምረናል።",
          },
        },
      ],
    },
    {
      id: "martyrene",
      tittel: { no: "Martyrene (ሰማዕታት)", am: "ቅዱሳን ሰማዕታት" },
      ingress: {
        no: "ሰማዕት betyr «vitne». En martyr vitner om Kristus med livet sitt. «Vær tro inntil døden, så vil jeg gi deg livets krone.»",
        am: "ሰማዕት ማለት «ምስክር» ማለት ነው። ሰማዕታት በደማቸው ለክርስቶስ መሰከሩ። «እስከሞት ድረስ የታመንህ ሁን የሕይወትንም አክሊል እሰጥሃለሁ» ተብሏልና።",
      },
      punkter: [
        {
          tekst: {
            no: "Den hellige Georg (ቅዱስ ጊዮርጊስ) var fra Kappadokia. Faren het Anastasios, og moren Theobista. Da han var 20 år, krevde kong Dadianos at alle skulle tilbe avguder. Georg ga bort alt han eide og bekjente Kristus. Han ble pint i sju år, men Gud reiste ham opp igjen flere ganger, og mange kom til tro. Til slutt ble han halshogd. Kirka kaller ham ሊቀ ሰማዕታት, «martyrenes leder».",
            am: "ቅዱስ ጊዮርጊስ ቀጰዶቅያ የተወለደ ነው፤ አባቱ አንስጣስዮስ እናቱ ቴዎብስታ ይባላሉ። ሃያ ዓመት በሞላው ጊዜ ንጉሥ ዱድያኖስ ሕዝቡ ጣዖትን እንዲያመልኩ ያስገድድ ነበር። ቅዱስ ጊዮርጊስ ገንዘቡን ለድኆች ሰጥቶ በክርስቶስ ታመነ። ሰባት ዓመት በጽኑ መከራ ተሠቃየ፤ ጌታ ግን ደጋግሞ አስነሣው፤ ብዙዎችም አመኑ። በመጨረሻ በሰይፍ ተቆረጠ። ሊቀ ሰማዕታት ይባላል።",
          },
          vers: ["Matt 10:28", "Matt 10:32"],
        },
        {
          tekst: {
            no: "Kirka forteller at Georg drepte en drage som folket i Beirut tilba, med korsets kraft. Derfor ser vi ham på ikoner på en hest med et spyd. Han minnes ሚያዝያ 23 (martyrdøden), ጥር 18 og den 23. i hver måned. Jesus lovet ham å hjelpe den som ber i hans navn.",
            am: "በቤሩት ሕዝቡ ያመልኩት የነበረውን ደራጎን በኃይለ መስቀል ድል ነሥቶ ገደለው፤ ስለዚህ በሥዕሉ በፈረስ ላይ ጦር ይዞ ይሣላል። ሚያዝያ ፳፫ የምስክርነቱ ፍጻሜ፣ ጥር ፲፰ ዝርወተ አጽሙ ነው፤ በየወሩም በ፳፫ ይታሰባል። ጌታችንም በስሙ ለሚለምን ፈጥኖ እንደሚረዳ ቃል ኪዳን ሰጠው።",
          },
          vers: ["Rev 12:11"],
        },
        {
          tekst: {
            no: "Den hellige Merkurios (ቅዱስ መርቆሬዎስ) vises også på en hest med spyd. Synaksariet forteller at da keiser Julian forfulgte de kristne og fengslet biskop Basilios, ba Basilios foran Merkurios' ikon, og Gud stanset keiseren. Merkurios minnes ኅዳር 25 og den 25. i hver måned.",
            am: "ቅዱስ መርቆሬዎስም በፈረስ ተቀምጦ ጦር ይዞ ይሣላል። ንጉሥ ዑልያኖስ ምእመናንን ሲያሳድድና ቅዱስ ባስልዮስን ሲያስር ቅዱስ ባስልዮስ በቅዱስ መርቆሬዎስ ሥዕል ፊት ጸለየ፤ ዑልያኖስም ተገደለ (ስንክሳር ኅዳር ፳፭)። በየወሩ በ፳፭ ይታሰባል።",
          },
          vers: ["Heb 11:33-34"],
        },
        {
          tekst: {
            no: "Det lille barnet Kirkos (ቂርቆስ) og moren Julitta (ኢየሉጣ): Under keiser Diokletian, omkring år 303, flyktet de til Tarsus. Guvernøren ville at de skulle tilbe avgudene. Kirkos var bare tre år, men sa: «Jeg bøyer meg ikke for urene avguder som ikke kan frelse seg selv.» De ble kastet i en gryte med kokende vann, men engelen Gabriel kjølte det ned. Fester: ሐምሌ 19, ጥር 15 og den 15. i hver måned.",
            am: "ሕፃኑ ቅዱስ ቂርቆስና እናቱ ቅድስት ኢየሉጣ፦ በዲዮቅልጥያኖስ ዘመን (፫፻፫ ዓ.ም ገደማ) ወደ ጠርሴስ ሸሹ። መስፍኑ እለእስክንድሮስ ለጣዖት እንዲሰግዱ አዘዘ። የሦስት ዓመት ሕፃኑ ቂርቆስ «ራሳቸውን ማዳን ለማይችሉ ርኩሳን ጣዖቶችህ አልሰግድም» አለ። በፈላ ውኃ ጋን ጣሏቸው፤ ቅዱስ ገብርኤል ግን ውኃውን አቀዘቀዘው። በዓላቸው ሐምሌ ፲፱፣ ጥር ፲፭ና በየወሩ ፲፭ ነው።",
          },
          vers: ["Matt 19:14", "Ps 34:8"],
        },
        {
          tekst: {
            no: "Den hellige Arsema (ቅድስት አርሴማ) var en jomfru fra Roma. Hun flyktet til Armenia fordi keiser Diokletian ville gifte seg med henne. Der bekjente hun at Kristus er sann Gud. Kong Tiridates slapp sultne løver løs på henne, men løvene skadet henne ikke. Til slutt ble hun halshogd. Fest: መስከረም 29, og hun minnes den 6. i hver måned.",
            am: "ቅድስት አርሴማ በሮም የነበረች ድንግል ናት። ዲዮቅልጥያኖስ ሊያገባት በፈለገ ጊዜ ወደ አርመን ሸሸች። በዚያም «በክርስቶስ የባሕርይ አምላክነት የማምን ክርስቲያን ነኝ» ብላ መሰከረች። ንጉሥ ድርጣድስ የተራቡ አናብስትን ለቀቀባት፤ አናብስቱ ግን አልነኳትም። በመጨረሻ ራሷን አስቈረጣት። በዓሏ መስከረም ፳፱ ነው፤ በየወሩም በ፮ ትታሰባለች።",
          },
          vers: ["Matt 5:11-12"],
        },
        {
          tekst: {
            no: "Hvorfor husker vi martyrene? Johannes så sjelene til dem som ble drept for Guds ords skyld, under alteret i himmelen. De lærer oss å stå fast i troen også når det er vanskelig – på skolen, blant venner og i et nytt land.",
            am: "ሰማዕታትን ለምን እናስባቸዋለን? ቅዱስ ዮሐንስ ስለ እግዚአብሔር ቃል የታረዱትን ነፍሳት ከመሠዊያ በታች አየ። ሰማዕታት በትምህርት ቤት፣ በጓደኞች መካከልና በሌላ ሀገርም በእምነት እንድንጸና ያስተምሩናል።",
          },
          vers: ["Rev 6:9", "1Pet 3:15"],
        },
      ],
    },
    {
      id: "kirkefedrene",
      tittel: { no: "Kirkefedrene (ሊቃውንተ ቤተ ክርስቲያን)", am: "ሊቃውንተ ቤተ ክርስቲያን" },
      ingress: {
        no: "Når vranglære dukket opp, sto lærere fram og forsvarte troen. Det kirka lærer, bygger på Bibelen og på det fedrene har skrevet. Mye av det finnes i boka ሃይማኖተ አበው («fedrenes tro»).",
        am: "መናፍቃን በተነሡ ጊዜ ሊቃውንት ተነሥተው ሃይማኖትን ጠበቁ። ቤተ ክርስቲያን በመጽሐፍ ቅዱስና ሊቃውንት በጻፏቸው ድርሳናት ታስተምራለች፤ ብዙው በሃይማኖተ አበው ተጽፏል።",
      },
      punkter: [
        {
          tekst: {
            no: "ቅዱስ አትናቴዎስ (Athanasius av Alexandria): Som ung diakon forsvarte han troen på kirkemøtet i Nikea (325) og vant over Arius: Jesus Kristus er Gud, Guds Sønn. Han var Alexandrias 20. patriark i 48 år og ble jaget i eksil fem ganger. Han viet Abba Selama til Etiopias første biskop. Minnedag: ግንቦት 7.",
            am: "ቅዱስ አትናቴዎስ፦ በኒቅያ ጉባኤ (፫፻፳፭) ከ፫፻፲፰ቱ ሊቃውንት ጋር ሆኖ አርዮስን ተከራክሮ አሸነፈው፤ «ኢየሱስ ክርስቶስ አምላክ ወልደ አምላክ ነው» ብሎ መሰከረ። የእስክንድርያ ፳ኛ ፓትርያርክ ሆኖ ፵፰ ዓመት አገለገለ፤ አምስት ጊዜ ተሰደደ። አባ ሰላማን ለኢትዮጵያ ጳጳስ አድርጎ ሾመ። ግንቦት ፯ ዐረፈ።",
          },
          vers: ["John 1:1", "Jude 1:3"],
        },
        {
          tekst: {
            no: "ቅዱስ ቄርሎስ (Kyrillos av Alexandria): Nestorius lærte at Kristus er to personer, og at Maria fødte et menneske, ikke Gud. Kyrillos sto mot ham. På kirkemøtet i Efesos (431) ble det slått fast at Maria er ወላዲተ አምላክ, Guds mor. Fra da av la fedrene til navnet ተዋሕዶ («forent») for å vise at Gud og menneske er forent i Kristus.",
            am: "ቅዱስ ቄርሎስ፦ ንስጥሮስ «ክርስቶስ ሁለት አካል ሁለት ባሕርይ ነው፤ እመቤታችን ወላዲተ ሰብእ እንጂ ወላዲተ አምላክ አይደለችም» ብሎ ባስተማረ ጊዜ ተቃወመው። በ፬፻፴፩ ዓ.ም በኤፌሶን ጉባኤ እመቤታችን ወላዲተ አምላክ እንደ ሆነች ተረጋገጠ። አባቶችም «ተዋሕዶ» የሚለውን ስም ጨመሩ።",
          },
          vers: ["John 1:14", "Luke 1:42-43"],
        },
        {
          tekst: {
            no: "ቅዱስ ዲዮስቆሮስ (Dioskoros av Alexandria): På kirkemøtet i Kalkedon (451) ville han ikke godta læren om «to naturer» etter foreningen. Han lærte at guddom og menneskenatur er forent i én natur uten blanding, uten forandring og uten deling. Han ble slått og sendt i eksil til Gangra, der han døde etter fem år. Kirka vår står med ham.",
            am: "ቅዱስ ዲዮስቆሮስ፦ በኬልቄዶን ጉባኤ (፬፻፶፩) «ከተዋሕዶ በኋላ ሁለት ባሕርይ» የሚለውን ትምህርት አልቀበልም አለ። መለኮትና ሥጋ ያለ መቀላቀል፣ ያለ መለወጥና ያለ መለያየት እንደ ተዋሐዱ አስረዳ። ፊቱን ጸፍተው፣ ጺሙን ነጭተው፣ ጥርሱን ሰብረው ወደ ጋንግራ አጋዙት፤ ከአምስት ዓመት በኋላ በግዞት ዐረፈ።",
          },
          vers: ["Matt 5:11-12"],
        },
        {
          tekst: {
            no: "ቅዱስ ዮሐንስ አፈወርቅ (Johannes Krysostomos, «Gullmunn»): Født i Antiokia, oppdratt av moren Antusa. Han ble patriark i Konstantinopel og var kjent for prekenene sine, for omsorgen for de fattige og for at han refset dronningen. Han døde i eksil. Mange av prekenene hans leses i kirka vår. Minnedag: ግንቦት 12.",
            am: "ቅዱስ ዮሐንስ አፈወርቅ፦ በአንጾኪያ ተወለደ፤ እናቱ አንቱሳ አሳደገችው። የቍስጥንጥንያ ሊቀ ጳጳስ ሆነ። በስብከቱ፣ ለድኆች በማሰቡ («አበ ምንዱባን») እና ንግሥቲቱን በመገሠጹ ይታወቃል፤ በስደት ዐረፈ። ግንቦት ፲፪ የዕረፍቱ መታሰቢያ ነው።",
          },
          vers: ["Luke 21:15"],
        },
        {
          tekst: {
            no: "ቅዱስ ኤፍሬም ሶርያዊ (Efrem syreren): Han skrev lovsanger til Maria. Kirka vår synger ውዳሴ ማርያም («Marias lovsang») etter ham, én del for hver dag i uka. Kirka minnes at kroppen hans ble flyttet, የካቲት 3.",
            am: "ቅዱስ ኤፍሬም ሶርያዊ፦ እመቤታችንን በውዳሴ ማርያም አመሰገናት፤ ቤተ ክርስቲያናችን በየዕለቱ ውዳሴ ማርያምን ትጸልያለች። የካቲት ፫ ፍልሰተ ሥጋው ይታሰባል።",
          },
          vers: ["Luke 1:48-49"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Efrem syreren", am: "ቅዱስ ኤፍሬም ሶርያዊ" },
      tekst: {
        no: "I ውዳሴ ማርያም for torsdag sier Efrem om martyrene: «Martyrene foraktet denne verdens smak, de øste ut blodet sitt for Gud, og de holdt ut en bitter død for himmelrikets skyld.»",
        am: "ቅዱስ ኤፍሬም በውዳሴ ማርያም ዘሐሙስ «ሰማዕታት የዚህችን ዓለም ጣዕም በእውነት ናቁ፤ ደማቸውንም ስለ እግዚአብሔር አፈሰሱ፤ ስለ መንግሥተ ሰማያትም መራራ ሞትን ታገሡ» ይላል።",
      },
      kilde: "Mahibere Kidusan: «ጽኑ እምነት» (2025) – https://eotcmk.org/a/ጽኑ-እምነት/",
    },
    {
      navn: { no: "Den hellige Johannes Krysostomos (ሃይማኖተ አበው)", am: "ቅዱስ ዮሐንስ አፈወርቅ (ሃይማኖተ አበው)" },
      tekst: {
        no: "«Hva skal jeg si? Han som var før tidene, er blitt et lite barn. Jeg undrer meg storlig. Han som sitter på den evige tronen, ble lagt i en krybbe … fordi han ville det.»",
        am: "«ምን እላለሁ? ምንስ እናገራለሁ? ከዘመን አስቀድሞ የነበረው እርሱ ሕፃን ሆኗልና። እኔ ፈጽሜ አደንቃለሁ። … በዘለዓለማዊ ዙፋን የሚኖር እርሱ በበረት ተጣለ። … ይህን ወዷልና።»",
      },
      kilde:
        "ሃይማኖተ አበው ዘዮሐንስ አፈወርቅ ፷፮፥፲፯, sitert av Mahibere Kidusan: «ጌታችን ኢየሱስ ተወለደ» – https://eotcmk.org/a/ዮም-ፍስሓ-ኮነ-በእንተ-ልደቱ-ለክርስቶ/",
    },
    {
      navn: { no: "Den hellige Dioskoros (ቅዳሴ ዘዲዮስቆሮስ)", am: "ቅዱስ ዲዮስቆሮስ (ቅዳሴ ዘዲዮስቆሮስ)" },
      tekst: {
        no: "I anaforaen som bærer hans navn, sier Dioskoros: «Fra før verden ble til og til evig tid er Gud i sin treenighet.» Han lærer også at Herren tok makten fra døden ved sin død.",
        am: "ቅዱስ ዲዮስቆሮስ በቅዳሴው «እምቅድመ ዓለም ወእስከ ለዓለም ሀሎ እግዚአብሔር በትሥልስቱ፤ እግዚአብሔር ከዓለም በፊት እስከ ዘለዓለም ድረስ በሦስትነቱ አለ» ይላል። ጌታችን በሞቱ ሞትን እንደ ሻረውም ያስተምራል።",
      },
      kilde:
        "Mahibere Kidusan: «በዓለ ቅድስት ሥላሴ» (2024) – https://eotcmk.org/a/በዓለ-ቅድስት-ሥላሴ/, og «‹‹የወይን ግንድ ይቆረጣል›› (ተአምረ ማርያም)» (2025)",
    },
    {
      navn: { no: "Den hellige Athanasius (ሃይማኖተ አበው)", am: "ቅዱስ አትናቴዎስ (ሃይማኖተ አበው)" },
      tekst: {
        no: "Mens han var i eksil, skrev Athanasius brev for at de troende skulle stå fast. Troens ord som står i ሃይማኖተ አበው, ble skrevet i denne tiden. På grunn av alt han led, kalles han ሐዋርያዊ, «apostolisk».",
        am: "ቅዱስ አትናቴዎስ በስደት ሳለ ምእመናን እንዲጸኑ ደብዳቤ ይጽፍላቸው ነበር። በሃይማኖተ አበው የምናገኘው ቃለ ሃይማኖቱ በዚህ ዘመን የተጻፈ ነው። ስለ ተቀበለው መከራም ሐዋርያዊ ተባለ።",
      },
      kilde: "Mahibere Kidusan: «ዕረፍቱ ለቅዱስ አትናቴዎስ» (etter ስንክሳር ዘወርኃ ግንቦት) – https://eotcmk.org/a/ዕረፍቱ-ለቅዱስ-አትናቴዎስ/",
    },
  ],
  ord: [
    { ord: "ሐዋርያ / ሐዋርያት", forklaring: { no: "apostel / apostler, «en som er sendt»", am: "የተላከ፤ ጌታችን የመረጣቸው አሥራ ሁለቱ" } },
    { ord: "ወንጌላዊ / ወንጌላውያን", forklaring: { no: "evangelist, en som skrev et evangelium", am: "ወንጌልን የጻፈ" } },
    { ord: "ሰማዕት / ሰማዕታት", forklaring: { no: "martyr, «vitne» som døde for troen", am: "ስለ ሃይማኖቱ የሞተ ምስክር" } },
    { ord: "ሊቀ ሰማዕታት", forklaring: { no: "martyrenes leder, tittel for den hellige Georg", am: "የሰማዕታት አለቃ፤ የቅዱስ ጊዮርጊስ መጠሪያ" } },
    { ord: "ቀዳሜ ሰማዕት", forklaring: { no: "den første martyren, Stefanus", am: "የመጀመሪያው ሰማዕት ቅዱስ እስጢፋኖስ" } },
    { ord: "ሊቃውንት", forklaring: { no: "lærde, kirkefedrene", am: "የቤተ ክርስቲያን መምህራን" } },
    { ord: "ሃይማኖተ አበው", forklaring: { no: "«fedrenes tro», boka med kirkefedrenes lære", am: "የአባቶችን ትምህርት የያዘ መጽሐፍ" } },
    { ord: "ተዋሕዶ", forklaring: { no: "«forent»: Gud og menneske er forent i Kristus", am: "መለኮትና ሥጋ በክርስቶስ መዋሐዳቸው" } },
    { ord: "ጉባኤ", forklaring: { no: "kirkemøte, som i Nikea, Efesos og Kalkedon", am: "የሊቃውንት ስብሰባ" } },
    { ord: "ስንክሳር", forklaring: { no: "boka med helgenene for hver dag i året", am: "የየዕለቱን ቅዱሳን ታሪክ የያዘ መጽሐፍ" } },
    { ord: "ገድል", forklaring: { no: "en helgens kamp og liv, og boka om det", am: "የቅዱሳን ተጋድሎና ታሪኩ የተጻፈበት መጽሐፍ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ሐዋርያ, og hvor mange apostler valgte Jesus?", am: "ሐዋርያ ማለት ምን ማለት ነው? ጌታችን ስንት ሐዋርያት መረጠ?" },
      svar: {
        no: "ሐዋርያ betyr «en som er sendt». Jesus valgte tolv. Mattias ble valgt i stedet for Judas.",
        am: "«የተላከ» ማለት ነው። ጌታችን አሥራ ሁለት መረጠ፤ በይሁዳ ፈንታ ማትያስ ተመረጠ።",
      },
    },
    {
      sporsmal: { no: "Hvem er de fire evangelistene?", am: "አራቱ ወንጌላውያን እነማን ናቸው?" },
      svar: { no: "Matteus, Markus, Lukas og Johannes.", am: "ማቴዎስ፣ ማርቆስ፣ ሉቃስና ዮሐንስ።" },
    },
    {
      sporsmal: { no: "Hva ba Stefanus om mens han ble steinet?", am: "ቅዱስ እስጢፋኖስ ሲወግሩት ምን ብሎ ጸለየ?" },
      svar: {
        no: "«Herre, tilregn dem ikke denne synden!» Han tilga dem som drepte ham.",
        am: "«ጌታ ሆይ፥ ይህን ኃጢአት አትቍጠርባቸው» አለ፤ የገደሉትን ይቅር አለ።",
      },
    },
    {
      sporsmal: { no: "Hvorfor kalles Georg ሊቀ ሰማዕታት?", am: "ቅዱስ ጊዮርጊስ ለምን ሊቀ ሰማዕታት ይባላል?" },
      svar: {
        no: "Fordi han holdt ut sju år med pine uten å fornekte Kristus, og mange kom til tro gjennom ham. Han er martyrenes leder.",
        am: "ሰባት ዓመት በጽኑ መከራ ጸንቶ ክርስቶስን ስላልካደና በእርሱ ብዙዎች ስላመኑ የሰማዕታት አለቃ ተባለ።",
      },
    },
    {
      sporsmal: { no: "Hva lærer Kirkos oss, som bare var tre år?", am: "የሦስት ዓመቱ ሕፃን ቂርቆስ ምን ያስተምረናል?" },
      svar: {
        no: "At også barn kan være modige i troen. Han trøstet til og med moren sin, og Gud sendte Gabriel for å redde dem.",
        am: "ሕፃናትም በእምነት መጽናት እንደሚችሉ ያስተምረናል። እናቱን አጽናናት፤ እግዚአብሔርም ቅዱስ ገብርኤልን ልኮ አዳናቸው።",
      },
    },
    {
      sporsmal: { no: "Hva lærte Kyrillos og kirkemøtet i Efesos om Maria?", am: "ቅዱስ ቄርሎስና የኤፌሶን ጉባኤ ስለ እመቤታችን ምን አስተማሩ?" },
      svar: {
        no: "At hun er ወላዲተ አምላክ, Guds mor, fordi Kristus er én: sann Gud og sant menneske.",
        am: "ክርስቶስ ፍጹም አምላክ ፍጹም ሰው ሆኖ አንድ ስለሆነ እመቤታችን ወላዲተ አምላክ ናት።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: «ብርሃናተ ዓለም ቅዱስ ጴጥሮስ ወቅዱስ ጳውሎስ»", url: "https://eotcmk.org/a/ብርሃናተ-ዓለም-ቅዱስ-ጴጥሮስ-ወቅዱስ-ጳው/" },
    { navn: "Mahibere Kidusan: «ሊቀ ሰማዕታት ቅዱስ ጊዮርጊስ» (etter ስንክሳር ሚያዝያ 23)", url: "https://eotcmk.org/a/የቅዱስ-ጊዮርጊስ-ሰማዕትነት/" },
    { navn: "Mahibere Kidusan: «ሊቀ ዲያቆናትና ቀዳሜ ሰማዕት ቅዱስ እስጢፋኖስ» (barn)", url: "https://eotcmk.org/a/ሊቀ-ዲያቆናትና-ቀዳሜ-ሰማዕት-ቅዱስ-እስጢ/" },
    { navn: "Mahibere Kidusan: «እስመ ለመላእክቲሁ ይኤዝዞሙ በእንቲአከ» (Kirkos og Julitta)", url: "https://eotcmk.org/a/እስመ-ለመላእክቲሁ-ይኤዝዞሙ-በእንቲአከ/" },
    { navn: "Mahibere Kidusan: «የእምነት አርበኛ» (Arsema)", url: "https://eotcmk.org/a/የእምነት-አርበኛ/" },
    { navn: "Mahibere Kidusan: «ሥዕለ አድኅኖ» (Merkurios)", url: "https://eotcmk.org/a/ሥዕለ-አድኅኖ-3/" },
    { navn: "Mahibere Kidusan: «ዕረፍቱ ለቅዱስ አትናቴዎስ»", url: "https://eotcmk.org/a/ዕረፍቱ-ለቅዱስ-አትናቴዎስ/" },
    { navn: "Mahibere Kidusan: «‹‹ተዝካረ ዕረፍቱ ለቅዱስ ዮሐንስ አፈወርቅ››»", url: "https://eotcmk.org/a/ተዝካረ-ዕረፍቱ-ለቅዱስ-ዮሐንስ-አፈወ/" },
    { navn: "Mahibere Kidusan: «ኦርቶዶክስ ተዋሕዶ ሃይማኖታችን!»", url: "https://eotcmk.org/a/ኦርቶዶክስ-ተዋሕዶ-ሃይማኖታችን/" },
    { navn: "Mahibere Kidusan: «አውጣኪ፣ ቅዱስ ዲዮስቆሮስ እና የኬልቄዶን ጉባኤ» del 2", url: "https://eotcmk.org/a/አውጣኪ፣-ቅዱስ-ዲዮስቆሮስ-እና-የኬልቄዶ-2/" },
    { navn: "Mahibere Kidusan: «‹‹ነገን ዛሬ እንሥራ!››»", url: "https://eotcmk.org/a/ነገን-ዛሬ-እንሥራ/" },
    { navn: "Mahibere Kidusan: «ጽኑ እምነት»", url: "https://eotcmk.org/a/ጽኑ-እምነት/" },
    { navn: "Mahibere Kidusan, søndagsskoleavdelingen: månedsartiklene «ወርኃ ጥር», «ወርኃ መጋቢት», «ወርኃ ሚያዝያ», «ወርኃ ሐምሌ», «ወርኃ ጳጉሜን»", url: "https://eotcmk.org/a/" },
    { navn: "ethiopianorthodox.org: «ወርሃዊ በዓላት» (de månedlige minnedagene)", url: "https://www.ethiopianorthodox.org/" },
  ],
  utkast: true,
};
