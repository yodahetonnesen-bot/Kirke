import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ተክሊል:
// søndagsskolepensumet «መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን», 8. klasse, kap. 7 (ordet ተክሊል, ekteskapets mål,
// forlovelsen, kravene, nådegavene, መአስባን-vielse og skilsmisse etter kirkas kanon),
// Mahibere Kidusans serie «የጋብቻ ሕይወት እና የሩካቤ ሥርዓት» (del 3, 5, 6 og 9, eotcmk.org),
// erkebiskop abune Melketsedek: «የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስትያን እምነት እና ትምህርት» (gjengitt på sewasew.com),
// ethiopianorthodox.org (The Sacrament of Matrimony, etter Rev. Marcos Daoud), menighetssidene til
// Debre Tsion Kidist Mariam (stmaryeotc.org) og Dagmit Debre Libanos Abune Teklehaymanot i Boston,
// og bloggen «ኦርቶዶክስ ተዋህዶ ብሎግ: ምሥጢረ ተክሊል», som siterer መጽሐፈ ተክሊል s. 76–77 om hvordan vielsen foregår.
// Usikkert: At det ikke holdes ተክሊል i fastetidene, står klart hos menigheten i Boston («ከአጽዋማት ቀናት በስተ ቀር
// በማንኛውም ቀን»). Mahibere Kidusan (del 9) lærer at ektefeller skal avstå fra samliv i fastene, som en grunn.
// Jeg fant ikke regelen i 8.-klasseboka eller i Fetha Negest direkte. Presten bør bekrefte.
// Usikkert: Alder for å gifte seg er ikke tatt med, fordi kildene er uenige (8.-klasseboka: menn 30 og kvinner
// over 15 år «etter kirkas bøker»; menigheten i Boston: kvinner 15 og menn 18 år etter Fetha Negest).
// Usikkert: Rekkefølgen i vielsen (ring, bønner, evangelium, salving, kroner, nattverd) er satt sammen fra flere
// kilder: Boston-menigheten, stmaryeotc.org, ethiopianorthodox.org og bloggen som siterer መጽሐፈ ተክሊል.
// Detaljer kan variere fra menighet til menighet.
// Usikkert: Ethiopianorthodox.org sier at brudeparet salves med olje, menigheten i Boston sier ቅብዐ ሜሮን.
// Siden sier bare at de blir salvet.
// Usikkert: Joakim og Anna står ikke i Bibelen. De er med fordi Mahibere Kidusan nevner dem som et godt eksempel.
export const ekteskap: Tema = {
  slug: "ekteskap",
  del: "sakramentene",
  tittel: { no: "Ekteskapet", am: "ምሥጢረ ተክሊል" },
  undertittel: { no: "To blir ett i Kristus", am: "ሁለቱ አንድ አካል ይሆናሉ" },
  bilde: "kana",
  ingress: {
    no:
      "Ekteskapet er et av kirkas sju sakramenter. En mann og en kvinne blir mann og kone. Gjennom prestens bønn og velsignelse får de Guds nåde, og de to blir ett, slik Kristus og kirka er ett. Ekteskapet blir beseglet med nattverden og skal vare hele livet. Gud selv innstiftet ekteskapet, og Jesus velsignet det i bryllupet i Kana.",
    am:
      "ምሥጢረ ተክሊል ከሰባቱ ምሥጢራተ ቤተ ክርስቲያን አንዱ ነው። አንድ ወንድና አንዲት ሴት ባልና ሚስት ይሆናሉ። በካህናት ጸሎትና ቡራኬ ጸጋ እግዚአብሔርን ያገኛሉ፤ እንደ ክርስቶስና እንደ ቤተ ክርስቲያን ሁለቱ አንድ ይሆናሉ። ጋብቻቸው በቅዱስ ቍርባን ይጸናል፤ እስከ ዕለተ ሞትም ይኖራል። ጋብቻን የመሠረተው እግዚአብሔር ነው፤ ጌታችንም በቃና ዘገሊላ ሠርግ ቤት ተገኝቶ ባረከው።",
  },
  hovedvers: "Matt 19:5-6",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er ተክሊል?", am: "ተክሊል ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ተክሊል kommer av ge'ez «ከለለ», som betyr å hedre, skille ut og hellige. ተክሊል betyr å bli kronet med ære. Ved vielsen får brudgommen og bruden en krone (አክሊል) på hodet, som en konge og en dronning.",
            am: "ተክሊል «ከለለ» ከሚለው የግዕዝ ግሥ የወጣ ሲሆን አከበረ፣ ለየ፣ ቀደሰ ማለት ነው። ተክሊል ማለት ክብር ተቀዳጀ ማለት ነው። በጋብቻቸው ጊዜ ሙሽራው እንደ ንጉሥ ሙሽሪት እንደ ንግሥት ሆነው አክሊል ይቀዳጃሉ።",
          },
          vers: ["Heb 13:4"],
        },
        {
          tekst: {
            no: "ተክሊል er det hellige sakramentet der en mann og en kvinne av fri vilje blir mann og kone. De to blir ett: én tanke, én vilje og én kropp.",
            am: "ተክሊል አንድ ወንድና አንዲት ሴት ለባልና ለሚስትነት በመፈቃቀድ ሁለቱ አካላት አንድ ኀሳብ፣ አንድ ፈቃድ፣ አንድ አካል የሚሆኑበት ቅዱስ ምሥጢር ነው።",
          },
          vers: ["Matt 19:5", "Gen 2:24"],
        },
        {
          tekst: {
            no: "Som de andre sakramentene har ተክሊል en side vi ser og en side vi ikke ser. Vi ser brudeparet i festklær, kronene og presten i prestedrakten som ber. Vi ser ikke Guds nåde som gjør de to til ett.",
            am: "እንደ ሌሎቹ ምሥጢራት ተክሊልም የሚታይ አገልግሎትና የማይታይ ጸጋ አለው። ሙሽሮቹ የሙሽራ ልብስ ለብሰው፣ አክሊል ደፍተው፣ ካህኑም ልብሰ ተክህኖውን ለብሶ ሲጸልይ ይታያል። ሁለትነት ጠፍቶ አንድነት ሲጸና ግን አይታይም።",
          },
        },
        {
          tekst: {
            no: "Bønnene som presten ber, kalles ጸሎተ ተክሊል. Selve sakramentet kalles ምሥጢረ ተክሊል, og måten det blir utført på, kalles ሥርዓተ ተክሊል.",
            am: "ካህኑ የሚያደርሰው ጸሎት ጸሎተ ተክሊል ይባላል። ምሥጢሩ ምሥጢረ ተክሊል፣ አፈጻጸሙም ሥርዓተ ተክሊል ይባላል።",
          },
        },
      ],
    },
    {
      id: "innstiftet",
      tittel: { no: "Gud innstiftet ekteskapet", am: "ጋብቻን የመሠረተው እግዚአብሔር ነው" },
      punkter: [
        {
          tekst: {
            no: "Da Gud skapte mennesket, skapte han dem til mann og kvinne. Han velsignet dem og sa: «Vær fruktbare og bli mange, fyll jorden.» Dette var den første velsignelsen over et ekteskap.",
            am: "እግዚአብሔር ሰውን ሲፈጥር ወንድና ሴት አድርጎ ፈጠራቸው። ባረካቸውም፤ «ብዙ፥ ተባዙ፥ ምድርንም ሙሉአት» አላቸው። ይህ የመጀመሪያው የጋብቻ ቡራኬ ነው።",
          },
          vers: ["Gen 1:27-28"],
        },
        {
          tekst: {
            no: "Gud sa: «Det er ikke godt for mennesket å være alene. Jeg vil lage en hjelper som passer for ham.» Så tok han et ribbein fra Adam og skapte Eva. Adam sa: «Hun er bein av mine bein og kjøtt av mitt kjøtt.»",
            am: "እግዚአብሔር «ሰው ብቻውን ይሆን ዘንድ መልካም አይደለም፤ የሚመቸውን ረዳት እንፍጠርለት» አለ። ከአዳም ጎን አጥንት ወስዶ ሔዋንን ፈጠራት። አዳምም «ይህች አጥንት ከአጥንቴ ናት፥ ሥጋም ከሥጋዬ ናት» አለ።",
          },
          vers: ["Gen 2:18", "Gen 2:21-23"],
        },
        {
          tekst: {
            no: "Derfor skal en mann forlate sin far og mor og holde seg til sin kone, og de to skal bli én kropp.",
            am: "ስለዚህ ሰው አባቱንና እናቱን ትቶ ሚስቱን ይከተላል፤ ሁለቱም አንድ ሥጋ ይሆናሉ።",
          },
          vers: ["Gen 2:24"],
        },
        {
          tekst: {
            no: "Jesus bekreftet dette: «Har dere ikke lest at Skaperen fra begynnelsen skapte dem til mann og kvinne? … Så er de ikke lenger to, men én kropp. Det Gud har sammenføyd, skal mennesket ikke skille.»",
            am: "ጌታችንም ይህን አጸና፤ «ፈጣሪ በመጀመሪያ ወንድና ሴት አደረጋቸው … ስለዚህ አንድ ሥጋ ናቸው እንጂ ወደ ፊት ሁለት አይደሉም። እግዚአብሔር ያጣመረውን እንግዲህ ሰው አይለየው» አለ።",
          },
          vers: ["Matt 19:4-6"],
        },
        {
          tekst: {
            no: "Jesus var gjest i bryllupet i Kana i Galilea. Der gjorde han vann til vin. Det var hans første under. Slik viste han at ekteskapet er hellig og ærefullt, og han fylte bryllupshuset med velsignelse.",
            am: "ጌታችን በቃና ዘገሊላ ሠርግ ቤት ተገኘ፤ ውኃውን ወደ ወይን ጠጅ ለወጠ። ይህ የመጀመሪያው ተአምሩ ነው። በዚህም ጋብቻ ክቡር መሆኑን ገለጠ፤ ቤቱንም በበረከት ሞላው።",
          },
          vers: ["John 2:1-11"],
        },
        {
          tekst: {
            no: "Jesus sammenlignet også himmelriket med et bryllup. Apostlene lærte det samme: «Ekteskapet skal holdes i ære av alle, og ektesengen skal være ren.»",
            am: "ጌታችን መንግሥተ ሰማያትን በሠርግ መስሎ አስተማረ። ሐዋርያትም «መጋባት በሁሉ ዘንድ ክቡር መኝታውም ንጹሕ ይሁን» ብለው አስተማሩ።",
          },
          vers: ["Matt 25:1-10", "Heb 13:4"],
        },
      ],
    },
    {
      id: "kristus",
      tittel: { no: "Et bilde på Kristus og kirka", am: "የክርስቶስና የቤተ ክርስቲያን ምሳሌ" },
      punkter: [
        {
          tekst: {
            no: "Paulus skriver at ekteskapet er et stort mysterium som peker på Kristus og kirka. Brudgommen er et bilde på Kristus, og bruden er et bilde på kirka. Kristus forlater aldri kirka, og slik skal mann og kone aldri forlate hverandre.",
            am: "ቅዱስ ጳውሎስ «ይህ ምሥጢር ታላቅ ነው፥ እኔ ግን ይህን ስለ ክርስቶስና ስለ ቤተ ክርስቲያን እላለሁ» ይላል። ሙሽራው የክርስቶስ፣ ሙሽሪት የቤተ ክርስቲያን ምሳሌ ናቸው። ክርስቶስ ከቤተ ክርስቲያን ከቶ እንደማይለይ ባልም ከሚስቱ ሊለይ አይገባም።",
          },
          vers: ["Eph 5:31-32"],
        },
        {
          tekst: {
            no: "Mannen skal elske kona si slik Kristus elsket kirka og ga seg selv for den. Han skal elske henne som sin egen kropp.",
            am: "ባል ክርስቶስ ቤተ ክርስቲያንን እንደ ወደዳትና ስለ እርስዋ ራሱን አሳልፎ እንደ ሰጠ ሚስቱን ሊወድ ይገባዋል፤ እንደ ገዛ ሥጋውም ሊወዳት ይገባዋል።",
          },
          vers: ["Eph 5:25", "Eph 5:28-29"],
        },
        {
          tekst: {
            no: "Kona skal lyde mannen sin slik kirka lyder Kristus. Peter sier at mannen skal ære kona si, for de skal arve livets nåde sammen.",
            am: "ቤተ ክርስቲያን ለክርስቶስ እንደምትገዛ ሚስትም ለባሏ ትገዛ። ቅዱስ ጴጥሮስም ባሎች ሚስቶቻቸውን የሕይወትን ጸጋ አብረው እንደሚወርሱ አድርገው ያክብሩአቸው ይላል።",
          },
          vers: ["Eph 5:22-24", "1Pet 3:7"],
        },
        {
          tekst: {
            no: "Kirka lærer at i ekteskapet er den ene ikke over og den andre under. De skal elske, respektere og hjelpe hverandre og bære hverandres byrder, til og med lide for hverandre.",
            am: "በባልና በሚስት መካከል አንዱን የበላይ ሌላውን የበታች የሚያደርግ ልዩነት ሊኖር አይገባም። በመፈቃቀር፣ በመከባበርና በመደጋገፍ ይኖራሉ፤ አንዱ የሌላውን ድካም ይሸከማል።",
          },
          vers: ["1Cor 7:4", "Gal 6:2"],
        },
      ],
    },
    {
      id: "maal",
      tittel: { no: "Hvorfor gifter vi oss? Ekteskapets mål", am: "የጋብቻ ዓላማዎች" },
      ingress: {
        no: "Kirka lærer at ekteskapet har tre mål. De kalles ofte de tre steinene som gryta står på (ሦስቱ ጉልቻዎች): mangler én, står ikke gryta støtt.",
        am: "ጋብቻ ሦስት ዓላማዎች አሉት፤ እንደ ሦስት ጉልቻዎች ይቆጠራሉ፤ አንዱ ቢጎድል ትዳር አይጸናም።",
      },
      punkter: [
        {
          tekst: {
            no: "Å hjelpe hverandre (ለመረዳዳት), både i det daglige og åndelig: å be, faste, gå i kirka, skrifte og ta imot nattverd sammen. I ekteskapet er det ikke «mitt», men «vårt».",
            am: "ለመረዳዳት፤ በሥጋዊ ኑሮም በመንፈሳዊ ሕይወትም፤ በጸሎት፣ በጾም፣ በንስሐና ሥጋውንና ደሙን በመቀበል አብሮ ለመጽደቅ። በጋብቻ ውስጥ «የእኛ» እንጂ «የእኔ» የሚባል ነገር የለም።",
          },
          vers: ["Gen 2:18", "Eccl 4:9-10"],
        },
        {
          tekst: {
            no: "Å bli bevart fra synd (ከዝሙት ለመጠበቅ). Samliv hører til innenfor ekteskapet. Derfor sier Paulus: «Hver mann skal ha sin egen kone, og hver kvinne sin egen mann.»",
            am: "ከዝሙት ለመጠበቅ። ሩካቤ የባልና የሚስት የአንድነት ምልክት ነው፤ ከጋብቻ ውጪ ያለ ግንኙነት ግን ዝሙት ነው። ስለዚህ ቅዱስ ጳውሎስ «ለእያንዳንዱ ለራሱ ሚስት ትኑረው ለእያንዳንዲቱ ደግሞ ለራስዋ ባል ይኑራት» ይላል።",
          },
          vers: ["1Cor 7:2", "1Thess 4:3-4"],
        },
        {
          tekst: {
            no: "Å få barn (ዘርን ለመተካት) – barn som kjenner Gud, priser ham og tjener ham. «Vær fruktbare og bli mange.»",
            am: "ዘርን ለመተካት፤ የእግዚአብሔርን ሕልውና የሚመሰክሩ፣ ስሙን የሚያመሰግኑና የሚቀድሱ ልጆችን ለማፍራት። «ብዙ፥ ተባዙ» ተብሏልና።",
          },
          vers: ["Gen 1:28", "Ps 127:3"],
        },
        {
          tekst: {
            no: "Får et ektepar ikke barn, er ekteskapet like fullt et ekteskap. Det blir ikke oppløst. De skal be til Gud sammen. Isak ba for Rebekka, som ikke fikk barn, og Gud hørte bønnen hans.",
            am: "እግዚአብሔር ፈቅዶ ልጅ ባይወለድ ጋብቻው አይፈታም፤ በአንድነት በጸሎት እግዚአብሔርን እየለመኑ ይኖራሉ። ይስሐቅ መካን ስለነበረችው ስለ ርብቃ ጸለየ፤ እግዚአብሔርም ተለመነው።",
          },
          vers: ["Gen 25:21"],
        },
      ],
    },
    {
      id: "krav",
      tittel: { no: "Før vielsen: kirkas krav", am: "ለጋብቻ የሚያስፈልጉ ቅድመ ሁኔታዎች" },
      punkter: [
        {
          tekst: {
            no: "Forlovelsen (መተጫጨት) er en tid til å forberede seg til ekteskapet. Mannen spør. Paret blir kjent med hverandre, men lever rent og har ikke samliv. Kirka råder dem til å kle seg anstendig, holde seg borte fra det som vekker lyst, og kjempe mot fristelser med faste og bønn.",
            am: "መተጫጨት ለትዳር የመዘጋጃ ጊዜ ነው፤ የሚፈጸመውም በወንዱ ጠያቂነት ነው። ጠባይ ለጠባይ ይጠናናሉ፤ ግንኙነት ግን አያደርጉም። የሚገባ ልብስ ይለብሳሉ፤ ስሜትን የሚያነሣሡ ነገሮችን አያዩም፤ የዝሙትን ጾር በጾምና በጸሎት ያሸንፋሉ።",
          },
          vers: ["1Thess 4:3-4", "1Cor 6:18"],
        },
        {
          tekst: {
            no: "Begge må være ortodokse Tewahedo-kristne og være ett i troen. Er den ene ikke ortodoks, må han eller hun først bli tatt opp i kirka. Paulus sier: «Gå ikke i fremmed åk med vantro.»",
            am: "ሁለቱም የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን እምነት ተከታዮች መሆን አለባቸው፤ በእምነታቸውም ልዩነት ሊኖር አይገባም። አንዱ ኦርቶዶክስ ካልሆነ አስቀድሞ ወደ ቤተ ክርስቲያን ይመጣ። «ከማያምኑ ጋር በማይመች አካሄድ አትጠመዱ» ተብሏልና።",
          },
          vers: ["2Cor 6:14"],
        },
        {
          tekst: {
            no: "Begge må gifte seg av fri vilje. Ingen kan tvinges, og det er ikke nok at foreldrene vil. Skriftefaren (ንስሐ አባት) prøver dette, og han hjelper paret å forberede seg.",
            am: "ሁለቱም ያለ ማንም አስገዳጅነት በፈቃዳቸው ሊጋቡ ይገባል፤ የወላጆች ፈቃድ ብቻ አይበቃም። ይህም በንስሐ አባታቸው በኩል ተመርምሮ ይረጋገጣል።",
          },
        },
        {
          tekst: {
            no: "De må ikke være i slekt. Fetha Negest regner slektskap sju ledd tilbake. Kirka regner også gudforeldre fra dåpen som slekt: man gifter seg ikke inn i familien til sin gudfar eller gudmor.",
            am: "በሥጋ ዝምድና ሊገናኙ አይገባም፤ ፍትሐ ነገሥት ሥጋዊ ዝምድናን እስከ ሰባት ትውልድ ይቆጥራል። በጥምቀት የክርስትና አባትና የክርስትና ልጅ ዝምድናም መንፈሳዊ ዝምድና ነው፤ በጋብቻ አይፈርስም።",
          },
          vers: ["Lev 18:6"],
          andre: [{ no: "Fetha Negest, kapittel 24", am: "ፍትሐ ነገሥት አንቀጽ ፳፬" }],
        },
        {
          tekst: {
            no: "De skal være modne: friske, voksne nok til å bære ansvaret, og i stand til å forsørge en familie.",
            am: "በአእምሮ፣ በአካል፣ በኢኮኖሚ፣ በስሜትና በመንፈሳዊ ሕይወት የበሰሉ፣ ቤተሰብ ለማስተዳደር የሚችሉ ሊሆኑ ይገባል።",
          },
        },
        {
          tekst: {
            no: "ተክሊል med kroner er for dem som begge har holdt seg rene og gifter seg som jomfruer. Kronen er en seierskrone for at de har holdt seg rene, og et forbilde for andre.",
            am: "በሥርዓተ ተክሊል የሚጋቡት ሥጋዊ ድንግልናቸውን የጠበቁ ናቸው። ስለ ድንግልናቸው ክብር የሽልማት ምልክት የሆነውን የድል አክሊል ይቀዳጃሉ፤ ለሌሎችም አርአያ ይሆናሉ።",
          },
          vers: ["1Cor 6:19-20"],
        },
        {
          tekst: {
            no: "De som ikke har holdt seg rene, kan likevel gifte seg i kirka. Etter skriftemål blir de viet med nattverd (ሥርዓተ ቍርባን), men uten kroner. Dette kalles መአስባን-vielse. Også det er et hellig ekteskap. Kirka lærer at ekte anger gir sjelen renheten tilbake.",
            am: "ድንግልናቸውን ያልጠበቁ ንስሐ ገብተው ጋብቻቸውን በሥርዓተ ቍርባን ይፈጽማሉ፤ አክሊል ግን አይደረግላቸውም። ይህ የመአስባን ጋብቻ ይባላል፤ እርሱም የተቀደሰ ጋብቻ ነው። ንስሐ የነፍስን ድንግልና ታስመልሳለችና።",
          },
          vers: ["1John 1:9"],
        },
      ],
    },
    {
      id: "vielsen",
      tittel: { no: "Slik foregår vielsen", am: "ሥርዓተ ተክሊል እንዴት ይፈጸማል?" },
      punkter: [
        {
          tekst: {
            no: "Før bryllupsdagen kommer paret til kirka med familiene sine. Med bønn får de ringene og bekrefter med ed at de vil gifte seg. Ringen viser at de er bundet til hverandre i troen og i ære.",
            am: "ከሠርጉ ቀን አስቀድሞ ሙሽሮቹ ከነዘመዶቻቸው በቤተ ክርስቲያን ተገኝተው የቀለበቱን ሥነ ሥርዓት ይፈጽማሉ፤ በመተጫጨት የሰጡትን የፈቃድ ቃል በመሐላ ያጸናሉ። ቀለበቱ በሃይማኖትና በክብር ባል በሚስቱ ሚስት በባሏ የታሠሩ መሆናቸውን ያመለክታል።",
          },
        },
        {
          tekst: {
            no: "På bryllupsdagen kommer de til kirka tidlig om morgenen. Brudgommen og familien hans står på nordsiden, bruden og familien hennes på sørsiden. Foran helligdommen gjøres det i stand en benk, et bord, en hvit kappe, olje og kronene.",
            am: "በሠርጉ ቀን በማለዳ ወደ ቤተ ክርስቲያን ይሔዳሉ፤ ሙሽራውና ዘመዶቹ በሰሜን፣ ሙሽሪትና ዘመዶቿ በደቡብ ይቆማሉ። በቤተ መቅደሱ ፊት ለፊት ወንበር፣ ጠረጴዛ፣ ነጭ መጎናጸፊያ፣ የሚቀቡበት ዘይትና አክሊላት ይዘጋጃሉ።",
          },
        },
        {
          tekst: {
            no: "Prestene ber ጸሎተ ተክሊል før ቅዳሴ. Evangeliet blir lest, presten ber over klærne, ringene og brudeparet, og de blir salvet. Så setter presten kronene på hodet deres. Profeten Jesaja taler om en brudgom som setter på seg kronen.",
            am: "ጸሎተ ተክሊል ከቅዳሴ በፊት ይፈጸማል። ወንጌል ይነበባል፤ በልብሱ፣ በቀለበቱ፣ በሙሽራውና በሙሽሪት ላይ ልዩ ልዩ ጸሎት ይደረጋል፤ ይቀባሉም። ከዚያም አክሊል ይቀዳጃሉ። ነቢዩ ኢሳይያስም «አክሊልን እንደ ለበሰ ሙሽራ» ይላል።",
          },
          vers: ["Isa 61:10"],
        },
        {
          tekst: {
            no: "Til slutt er brudeparet med i ቅዳሴ og tar imot Kristi kropp og blod. Slik blir ekteskapet beseglet. Kirka lærer at ተክሊል uten nattverd ikke er ተክሊል, for gjennom Kristi kropp og blod blir de to ett.",
            am: "በመጨረሻም አስቀድሰው ሥጋውንና ደሙን ይቀበላሉ፤ ቃል ኪዳናቸውንም በሥጋ ወደሙ ያጸናሉ። ያለ ቍርባን ተክሊል ተክሊል ሆኖ ሊቆጠር አይችልም፤ በሥጋ ወደሙ አንድ ይሆናሉና።",
          },
          vers: ["1Cor 10:17"],
        },
        {
          tekst: {
            no: "Det de har på seg, betyr noe: De hvite klærne viser at de arver ære og ikke lenger er to, men ett. Kronen viser æren de får. Kappen (ካባ) er æreskappen.",
            am: "የሚለብሱት ነጭ ልብስ ክብር እንደሚወርሱና ሁለትነት ቀርቶ አንድ አካል እንደሚሆኑ ያመለክታል። የሚቀዳጁት አክሊል የሚያገኙትን ክብር ያመለክታል። ካባውም የክብር ካባ ነው።",
          },
          vers: ["Isa 61:10"],
        },
        {
          tekst: {
            no: "ተክሊል holdes ikke på fastedagene. Fastene er en tid for bønn, og da skal også ektefeller avstå fra samliv. Spør presten i god tid før dere velger dato.",
            am: "ሥርዓተ ተክሊል ከአጽዋማት ቀናት በስተ ቀር በማንኛውም ቀን ሊፈጸም ይችላል። በአጽዋማት ጊዜ ባልና ሚስትም ለጸሎት ሲሉ ከሩካቤ ይከለከላሉ። ቀን ከመወሰናችሁ በፊት ካህኑን አስቀድማችሁ ጠይቁ።",
          },
          vers: ["1Cor 7:5"],
        },
        {
          tekst: {
            no: "Etter bryllupet skal mann og kone fortsette å gå til nattverd sammen, på søndager og høytider. Nattverden skal ikke bare være noe de tok imot på bryllupsdagen.",
            am: "ከተጋቡም በኋላ ከሥጋ ወደሙ መራቅ የለባቸውም፤ በሰንበትና በበዓላት ከትዳር አጋራቸው ጋር አብረው ይቀበላሉ።",
          },
          vers: ["John 6:56"],
        },
      ],
    },
    {
      id: "livslangt",
      tittel: { no: "Én mann og én kvinne – hele livet", am: "አንድ ለአንድ እስከ ዕለተ ሞት" },
      punkter: [
        {
          tekst: {
            no: "Gud skapte én mann og én kvinne. Derfor er ekteskapet for én mann og én kvinne. Kirka velsigner bare et slikt ekteskap.",
            am: "እግዚአብሔር በመጀመሪያ አንድ ወንድና አንዲት ሴት ፈጠረ። ስለዚህ እውነተኛው ጋብቻ አንድ ወንድ ለአንዲት ሴት፣ አንዲት ሴትም ለአንድ ወንድ ብቻ ሆነው የሚጋቡት ነው።",
          },
          vers: ["Matt 19:4-5", "Mark 10:6-8"],
        },
        {
          tekst: {
            no: "Ekteskapet er ikke en avtale for en tid, men varer til døden. Enheten skal ikke brytes av små ting, av avstand eller av vanskeligheter. Problemer løser de med samtale, bønn og faste, og med hjelp fra skriftefaren.",
            am: "ጋብቻ ጊዜያዊ ተባብሮ የመኖር ዘዴ ሳይሆን እስከ ዕለተ ሞት ድረስ የሚጸና ነው። አንድነቱ በተራ ነገር አይፈታም፤ በቦታና በርቀት አይገደብም፤ በችግርና በመከራ አይደክምም። ችግሮቻቸውን በውይይት፣ በጾምና በጸሎት ይፈታሉ።",
          },
          vers: ["Matt 19:6", "Rom 7:2"],
        },
        {
          tekst: {
            no: "Gud hater skilsmisse. Paulus skriver: «En kone skal ikke skille seg fra mannen sin … og en mann skal ikke forlate kona si.»",
            am: "መፋታት በእግዚአብሔር ዘንድ የተጠላ ነው። ቅዱስ ጳውሎስ «ሚስትም ከባልዋ አትለያይ … ባልም ሚስቱን አይተዋት» ይላል።",
          },
          vers: ["Mal 2:14-16", "1Cor 7:10-11"],
        },
        {
          tekst: {
            no: "Jesus sa: «Den som skiller seg fra sin kone av en annen grunn enn utroskap, gjør henne til ekteskapsbryter.» Etter kirkas regler kan et ekteskap bare oppløses av tre grunner: død, utroskap (ዝሙት), eller at den ene forlater troen og ikke vil høre på råd.",
            am: "ጌታችን «ያለ ዝሙት ምክንያት ሚስቱን የሚፈታ ሁሉ አመንዝራ ያደርጋታል» አለ። በቀኖና ቤተ ክርስቲያን መሠረት ጋብቻ የሚፈታው በሦስት ምክንያት ብቻ ነው፤ በሞት፣ በዝሙትና አንዱ ከሃይማኖት ወጥቶ ምክር ባይሰማ።",
          },
          vers: ["Matt 5:32", "Matt 19:9"],
        },
        {
          tekst: {
            no: "Dør den ene, kan den andre gifte seg igjen, men det skal skje i Herren. Kirka sier at man skal vente ett år. Et nytt ekteskap blir ikke viet med ተክሊል, men med nattverd, for ተክሊል gis bare én gang.",
            am: "አንዳቸው ቢሞቱ ሌላው ማግባት ይችላል፤ በጌታ ብቻ ይሁን። ከአንድ ዓመት በኋላ ማግባት ይቻላቸዋል። ሁለተኛ ጋብቻ ግን በቍርባን እንጂ በተክሊል አይፈጸምም፤ ተክሊል አይደገምምና።",
          },
          vers: ["1Cor 7:39"],
        },
        {
          tekst: {
            no: "For prester og diakoner er regelen strengere: de kan bare gifte seg én gang. Dør kona, kan presten ikke gifte seg igjen og fortsatt være prest.",
            am: "ለዲያቆናትና ለቀሳውስት ግን ሕጉ የጠነከረ ነው፤ ከአንድ ጊዜ በላይ ሚስት ማግባት አይችሉም። ሚስታቸው ብትሞት ሁለተኛ አግብተው በክህነት ማገልገል አይችሉም።",
          },
          vers: ["1Tim 3:2", "1Tim 3:12"],
        },
      ],
    },
    {
      id: "eksempler",
      tittel: { no: "Gode eksempler", am: "ደጋግ አባቶችና እናቶች" },
      punkter: [
        {
          tekst: {
            no: "Abraham og Sara: Sara hedret Abraham og lyttet til ham. Peter sier at kristne kvinner er Saras barn når de gjør det gode.",
            am: "አብርሃምና ሣራ፤ ሣራ ለአብርሃም «ጌታ» ብላ እየጠራችው ታዘዘችለት። ቅዱስ ጴጥሮስ መልካም የሚያደርጉ ሴቶች የሣራ ልጆች ናቸው ይላል።",
          },
          vers: ["1Pet 3:5-6", "Gen 21:1-2"],
        },
        {
          tekst: {
            no: "Isak og Rebekka: Gud ledet Abrahams tjener til Rebekka etter bønn. Isak elsket henne, og han ba for henne da hun ikke fikk barn.",
            am: "ይስሐቅና ርብቃ፤ እግዚአብሔር የአብርሃምን ሎሌ በጸሎት ወደ ርብቃ መራው። ይስሐቅም ወደዳት፤ መካን በነበረችም ጊዜ ስለ እርሷ ጸለየ።",
          },
          vers: ["Gen 24:12-15", "Gen 24:67", "Gen 25:21"],
        },
        {
          tekst: {
            no: "Jakob og Rakel: Jakob tjente sju år for Rakel, og det syntes bare som noen få dager, fordi han elsket henne.",
            am: "ያዕቆብና ራሔል፤ ያዕቆብ ስለ ራሔል ሰባት ዓመት አገለገለ፤ ስለ ወደዳትም እንደ ጥቂት ቀናት ሆኑለት።",
          },
          vers: ["Gen 29:20"],
        },
        {
          tekst: {
            no: "Joakim og Anna, foreldrene til jomfru Maria. Kirkas tradisjon forteller at de levte i bønn og ventet lenge på barn, og Gud ga dem Maria. Også abune Tekle Haymanots foreldre, Tsega Zeab og Egzie Haraya, er et forbilde.",
            am: "ኢያቄምና ሐና፣ የእመቤታችን የቅድስት ድንግል ማርያም ወላጆች፤ በጸሎት ኖረው እግዚአብሔር እመቤታችንን ሰጣቸው። የአቡነ ተክለ ሃይማኖት ወላጆች ጸጋ ዘአብና እግዚእ ኀረያም ለትዳር አርአያ ናቸው።",
          },
          andre: [{ no: "Kirkas tradisjon (ነገረ ማርያም)", am: "ነገረ ማርያም" }],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Efrem syreren", am: "ቅዱስ ኤፍሬም" },
      tekst: {
        no: "I lovsangen til Maria sammenligner Efrem henne med et rent bryllupshus: «Som et bryllupshus uten flekk fant Den hellige ånd deg, og han kom og bodde i deg.» Mahibere Kidusan forklarer at dette viser hvor rent og hedret ekteskapet er.",
        am: "«ከመ ከብካብ ዘአልቦ ጥልቀት መንፈስ ቅዱስ ኀደረ ላዕሌኪ፤ እንደ ሰርግ ቤት አደፍ ጉድፍ የሌለብሽ ኾነሽ ቢያገኝሽ መንፈስ ቅዱስ አድሮብሻል።» ሊቁ እመቤታችንን በሰርግ ቤት መመሰሉ ጋብቻ ንጹሕ ሥርዓት መኾኑን ያመለክታል።",
      },
      kilde: "ውዳሴ ማርያም ዘቀዳሚት og ዘረቡዕ (sitert i Mahibere Kidusan: የጋብቻ ሕይወት እና የሩካቤ ሥርዓት – ክፍል ፫, eotcmk.org)",
    },
    {
      navn: { no: "Fetha Negest (kirkas lovbok)", am: "ፍትሐ ነገሥት" },
      tekst: {
        no: "«Denne velsignelsen (ተክሊል) hører til en mann som er jomfru og en kvinne som er jomfru, når de gifter seg.»",
        am: "«እስመ ዝንቱ ብእሲ በረከት ይደሉ ለብእሲ ድንግል ወለብእሲት ድንግልት በጊዜ ተዋስቦ፤ ይህ በረከት (ተክሊል) በጋብቻ ጊዜ ለድንግል ወንድና ለድንግል ሴት ይገባል።»",
      },
      kilde: "ፍትሐ ነገሥት አንቀጽ ፳፬ (sitert av Dagmit Debre Libanos Abune Teklehaymanot EOTC, Boston: ሥርዐተ ተክሊል)",
    },
    {
      navn: { no: "Bøkene om vielsen (መጽሐፈ ተክሊል)", am: "መጽሐፈ ተክሊል" },
      tekst: {
        no: "Ekteskapet skal ikke inngås uten prester og uten ጸሎተ ተክሊል. Når ተክሊል er bedt, skal de gi brudeparet nattverden, som gjør de to til ett, for ved Kristi kropp og blod blir de ett.",
        am: "«የጋብቻ አንድነት ካህናት ከሌሉበት፤ ጸሎተ ተክሊል ካልደረሰለት ሊፈጸም አይገባም። ተክሊልም በደረሰላቸው ጊዜ ሁለቱ አንድ የሚሆኑበትን ቅዱስ ቁርባንን ያቀብሏቸው። በሥጋ ወደሙ አንድ ይሆናሉና።»",
      },
      kilde: "መጽሐፈ ተክሊል s. 76–77 (sitert i ኦርቶዶክስ ተዋህዶ ብሎግ: ምሥጢረ ተክሊል)",
    },
    {
      navn: { no: "Erkebiskop abune Melketsedek", am: "አቡነ መልከ ጼዴቅ ሊቀ ጳጳስ" },
      tekst: {
        no: "Den samme velsignelsen som Gud ga Adam og Eva, blir i dag gitt til hver mann og kvinne som gifter seg, én mann med én kvinne, og de to blir ett. Ved Guds ord og prestens bønn blir to til ett.",
        am: "«የመጀመሪያው ፍጥረት አዳም ሚስቱ ሔዋን ከጎኑ እንደተፈጠረች ሁለቱ ደግሞ አንድ አካል እንደሆኑ ያው የእግዚአብሔር ቃልና ቡራኬ ዛሬም አንድ ወንድ ለአንዲት ሴት አንዲት ሴትም ለአንድ ወንድ ሆነው ለሚጋቡ ይተላለፍላቸዋል፤ ሁለቱም አንድ አካል ይሆናሉ።»",
      },
      kilde: "የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስትያን እምነት እና ትምህርት (gjengitt på sewasew.com: ምሥጢረ ተክሊል)",
    },
  ],
  ord: [
    { ord: "ተክሊል", forklaring: { no: "kirkelig vielse med krone (av ከለለ, å hedre og hellige)", am: "ክብር መቀዳጀት" } },
    { ord: "ጸሎተ ተክሊል", forklaring: { no: "bønnene presten ber ved vielsen", am: "ለሙሽሮች የሚደርስ ጸሎት" } },
    { ord: "ሥርዓተ ተክሊል", forklaring: { no: "måten vielsen blir utført på", am: "የተክሊል አፈጻጸም" } },
    { ord: "አክሊል", forklaring: { no: "krone", am: "ዘውድ" } },
    { ord: "ሙሽራ · ሙሽሪት", forklaring: { no: "brudgom · brud", am: "የሚጋቡት ወንድና ሴት" } },
    { ord: "መተጫጨት", forklaring: { no: "forlovelse", am: "ለትዳር መጠናናትና መወሰን" } },
    { ord: "ቀለበት", forklaring: { no: "ring", am: "የቃል ኪዳን ምልክት" } },
    { ord: "ቃል ኪዳን", forklaring: { no: "pakt, løfte", am: "የተሰጠ መሐላና ስምምነት" } },
    { ord: "የመአስባን ጋብቻ", forklaring: { no: "vielse med nattverd uten kroner, for dem som ikke har holdt seg rene eller gifter seg på nytt", am: "በቍርባን የሚፈጸም ጋብቻ" } },
    { ord: "ንስሐ አባት", forklaring: { no: "skriftefar, presten som veileder oss", am: "የነፍስ አባት" } },
    { ord: "ቃና ዘገሊላ", forklaring: { no: "Kana i Galilea, der Jesus gjorde vann til vin i et bryllup", am: "ጌታችን ውኃን ወደ ወይን የለወጠባት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet ተክሊል?", am: "«ተክሊል» ማለት ምን ማለት ነው?" },
      svar: {
        no: "Det kommer av ge'ez ከለለ, å hedre og hellige. ተክሊል betyr å bli kronet med ære. Brudeparet får kroner på hodet.",
        am: "«ከለለ» ከሚለው ግሥ የወጣ ሲሆን ክብር ተቀዳጀ ማለት ነው። ሙሽሮቹ አክሊል ይቀዳጃሉ።",
      },
    },
    {
      sporsmal: { no: "Hvor viste Jesus at ekteskapet er hellig?", am: "ጌታችን ጋብቻ ክቡር መሆኑን የት ገለጠ?" },
      svar: {
        no: "I bryllupet i Kana i Galilea, der han gjorde vann til vin (Joh 2,1–11). Han lærte også: «Det Gud har sammenføyd, skal mennesket ikke skille» (Matt 19,6).",
        am: "በቃና ዘገሊላ ሠርግ ቤት ውኃውን ወደ ወይን ለወጠ (ዮሐ 2፥1–11)። «እግዚአብሔር ያጣመረውን እንግዲህ ሰው አይለየው» ብሎም አስተማረ (ማቴ 19፥6)።",
      },
    },
    {
      sporsmal: { no: "Hva er de tre målene med ekteskapet?", am: "ሦስቱ የጋብቻ ዓላማዎች ምንድን ናቸው?" },
      svar: {
        no: "Å hjelpe hverandre, å bli bevart fra synd og å få barn.",
        am: "ለመረዳዳት፣ ከዝሙት ለመጠበቅና ዘርን ለመተካት።",
      },
    },
    {
      sporsmal: { no: "Hvem blir viet med ተክሊል, og hvordan blir andre viet?", am: "በተክሊል የሚጋቡት እነማን ናቸው? ሌሎችስ?" },
      svar: {
        no: "To ortodokse som begge har holdt seg rene. Andre gifter seg etter skriftemål med nattverd, uten kroner (መአስባን).",
        am: "ድንግልናቸውን የጠበቁ ሁለት የኦርቶዶክስ ተዋሕዶ ምእመናን። ሌሎች ንስሐ ገብተው በቍርባን ያለ አክሊል ይጋባሉ (መአስባን)።",
      },
    },
    {
      sporsmal: { no: "Hvorfor tar brudeparet imot nattverd i vielsen?", am: "ሙሽሮች በተክሊል ቀን ለምን ይቆርባሉ?" },
      svar: {
        no: "Nattverden besegler ekteskapet. Ved Kristi kropp og blod blir de to ett. Uten nattverd er ተክሊል ikke fullført.",
        am: "ጋብቻቸው በቅዱስ ቍርባን ይጸናል፤ በሥጋ ወደሙ አንድ ይሆናሉ። ያለ ቍርባን ተክሊል አይፈጸምም።",
      },
    },
    {
      sporsmal: { no: "Hva sier Jesus om skilsmisse?", am: "ጌታችን ስለ ፍቺ ምን አለ?" },
      svar: {
        no: "At ingen skal skille det Gud har sammenføyd, og at den som skiller seg av en annen grunn enn utroskap, gjør urett (Matt 5,32; 19,6).",
        am: "እግዚአብሔር ያጣመረውን ሰው አይለየው፤ ያለ ዝሙት ምክንያት ሚስቱን የሚፈታ አመንዝራ ያደርጋታል (ማቴ 5፥32፤ 19፥6)።",
      },
    },
  ],
  kilder: [
    { navn: "መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን, 8. klasse (søndagsskolepensum), kap. 7: ምሥጢረ ተክሊል", url: "https://www.scribd.com/document/1036651354/g8-Meserete-Haymanot-Srat-Snemgbar-24" },
    { navn: "ማኅበረ ቅዱሳን: የጋብቻ ሕይወት እና የሩካቤ ሥርዓት – ክፍል ፫", url: "https://eotcmk.org/a/%E1%8B%A8%E1%8C%8B%E1%89%A5%E1%89%BB-%E1%88%95%E1%8B%AD%E1%8B%88%E1%89%B5-%E1%8A%A5%E1%8A%93-%E1%8B%A8%E1%88%A9%E1%8A%AB%E1%89%A4-%E1%88%A5%E1%88%AD%E1%8B%93%E1%89%B5-%E1%8A%AD%E1%8D%8D-3/" },
    { navn: "ማኅበረ ቅዱሳን: የጋብቻ ሕይወት እና የሩካቤ ሥርዓት – ክፍል ፭ (ሥርዓተ ተክሊል)", url: "https://eotcmk.org/a/%E1%8B%A8%E1%8C%8B%E1%89%A5%E1%89%BB-%E1%88%95%E1%8B%AD%E1%8B%88%E1%89%B5-%E1%8A%A5%E1%8A%93-%E1%8B%A8%E1%88%A9%E1%8A%AB%E1%89%A4-%E1%88%A5%E1%88%AD%E1%8B%93%E1%89%B5-%E1%8A%AD%E1%8D%8D-5/" },
    { navn: "ማኅበረ ቅዱሳን: የጋብቻ ሕይወት እና የሩካቤ ሥርዓት – ክፍል ፮ og ፱ (eotcmk.org)" },
    { navn: "አቡነ መልከ ጼዴቅ: የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስትያን እምነት እና ትምህርት – ምሥጢረ ተክሊል (sewasew.com)" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of Matrimony", url: "https://www.ethiopianorthodox.org/english/dogma/sacramatrimony.html" },
    { navn: "Debre Tsion Kidist Mariam EOTC: Holy Wedding (ቅዱስ ጋብቻ)", url: "https://www.stmaryeotc.org/services/holy-wedding/" },
    { navn: "Dagmit Debre Libanos Abune Teklehaymanot EOTC, Boston: ሥርዐተ ተክሊል", url: "https://teklehaimanotboston.org/holy-matrimony/" },
    { navn: "ኦርቶዶክስ ተዋህዶ ብሎግ: ምሥጢረ ተክሊል (ክፍል ሰባት–ዘጠኝ), med sitater fra መጽሐፈ ተክሊል" },
  ],
  utkast: true,
};
