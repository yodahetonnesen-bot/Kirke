import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om de fem mysteriene:
// astemhro.com (አምስቱ አዕማደ ምስጢራት፡ መግቢያ og ጸሎተ ሃይማኖት), St. Urael EOTC (አምስቱ አእማደ ምሥጢር,
// hentet fra zetewahedo.com), ethiopianorthodox.org (Introduction to Church Sacraments) og
// søndagsskoleavdelingen i Mahibere Kidusan (MK-US Next Generation: 5 Pillars of Mystery).
// Trosbekjennelsen på ge'ez og amharisk er sjekket mot fenotelozateklye.org (Prayer of Faith).
// Usikkert: At «ወነአምን በአሐቲ ቅድስት ቤተ ክርስቲያን» bekjenner ምሥጢረ ቍርባን, er en forklaring fra
// kirkas lærere (astemhro.com), ikke ordrett i trosbekjennelsen. Bør leses av en prest.
export const femMysteriene: Tema = {
  slug: "de-fem-mysteriene",
  del: "troen",
  tittel: { no: "De fem mysteriene", am: "አዕማደ ምሥጢር" },
  undertittel: { no: "Søylene som holder troen oppe", am: "ሃይማኖትን ደግፈው የሚይዙ ምሰሶዎች" },
  bilde: "prosesjonskors",
  ingress: {
    no:
      "Den ortodokse Tewahedo-troen bygger på fem store sannheter som kalles አዕማደ ምሥጢር – mysterienes søyler. Akkurat som søyler holder et hus oppe, holder disse fem læresetningene troen vår oppe. Den som lærer dem godt, står fast i troen.",
    am:
      "የኦርቶዶክስ ተዋሕዶ ሃይማኖት በአምስት ታላላቅ የሃይማኖት ትምህርቶች ላይ ተመሥርቷል፤ እነርሱም አዕማደ ምሥጢር ይባላሉ። ምሰሶ ቤትን ደግፎ እንደሚይዝ እነዚህ አምስት ትምህርቶችም ሃይማኖታችንን ደግፈው ይይዛሉ። እነርሱን በሚገባ የተማረ ሰው በሃይማኖቱ ጸንቶ ይኖራል።",
  },
  hovedvers: "1Cor 14:19",
  avsnitt: [
    {
      id: "soyler",
      tittel: { no: "Hva betyr አዕማደ ምሥጢር?", am: "አዕማደ ምሥጢር ማለት ምን ማለት ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet አምድ betyr søyle, og አዕማድ er flertall: søyler. Søylene holder taket oppe, så huset ikke faller. På samme måte holder de fem mysteriene troen oppe.",
            am: "«አምድ» ማለት ምሰሶ ማለት ነው፤ «አዕማድ» ደግሞ ብዙ ቁጥሩ ነው። ምሰሶ ቤቱ እንዳይወድቅ ጣሪያውን ደግፎ ይይዛል። አምስቱ አዕማደ ምሥጢርም እንዲሁ ሃይማኖትን ደግፈው ይይዛሉ።",
          },
          vers: ["Matt 7:24-25"],
        },
        {
          tekst: {
            no: "Bibelen kaller kirka «sannhetens støtte og grunnvoll». På amharisk står det ዓምድ, søyle. Kirka tar vare på de fem mysteriene og lærer dem videre til hver ny generasjon.",
            am: "መጽሐፍ ቅዱስ ቤተ ክርስቲያንን «የእውነት ዓምድና መሠረት» ይላታል። ቤተ ክርስቲያን አምስቱን አዕማደ ምሥጢር ጠብቃ ለትውልድ ሁሉ ታስተምራለች።",
          },
          vers: ["1Tim 3:15"],
        },
        {
          tekst: {
            no: "Et hus med sterke søyler faller ikke i stormen. Kirkas lærere sier at den som kjenner de fem mysteriene godt, heller ikke blir revet med av falsk lære.",
            am: "ጠንካራ ምሰሶ ያለው ቤት በነፋስ እንደማይወድቅ ሁሉ አምስቱን አዕማደ ምሥጢር ጠንቅቆ ያወቀ ሰውም የኑፋቄ ማዕበል አይጥለውም ብለው የቤተ ክርስቲያን ሊቃውንት ያስተምራሉ።",
          },
          vers: ["Eph 4:14"],
        },
      ],
    },
    {
      id: "mysterium",
      tittel: { no: "Hvorfor kalles de mysterier?", am: "ምሥጢር የተባሉት ለምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "ምሥጢር betyr noe skjult. De fem mysteriene handler om Gud, som vi ikke kan se med øynene og ikke kan forstå helt med tankene våre.",
            am: "«ምሥጢር» ማለት ስውር፣ የተሰወረ ማለት ነው። አምስቱ አዕማደ ምሥጢር በዓይን ስለማይታየውና በሰው አእምሮ ተመርምሮ ስለማይደረስበት ስለ እግዚአብሔር ያስተምራሉ።",
          },
          vers: ["John 1:18", "Rom 11:33"],
        },
        {
          tekst: {
            no: "Derfor sier vi ikke: «Jeg tror ikke før jeg ser det med egne øyne.» Vi hører læren, tenker over den i hjertet og tar imot den i tro. Jesus sa: Salige er de som ikke ser og likevel tror.",
            am: "ስለዚህ «በዓይኔ ካላየሁ አላምንም» አንልም። በቃል ተምረን፣ በልቡና አስበን፣ በእምነት እንቀበላቸዋለን። ጌታችንም ሳያዩ የሚያምኑ ብፁዓን እንደ ሆኑ ተናግሯል።",
          },
          vers: ["Rom 10:17", "Heb 11:1", "John 20:29"],
        },
        {
          tekst: {
            no: "Gud har likevel vist oss disse sannhetene: gjennom profetene, gjennom sin Sønn Jesus Kristus og gjennom apostlene. Vi kjenner Gud så langt han selv har vist seg for oss.",
            am: "ቢሆንም እግዚአብሔር እነዚህን እውነቶች በነቢያት፣ በልጁ በኢየሱስ ክርስቶስና በሐዋርያት ገልጦልናል። እግዚአብሔርን የምናውቀው እርሱ ራሱን በገለጠልን መጠን ነው።",
          },
          vers: ["Heb 1:1-2"],
        },
      ],
    },
    {
      id: "fem",
      tittel: { no: "Hvorfor akkurat fem?", am: "ቁጥራቸው ለምን አምስት ሆነ?" },
      punkter: [
        {
          tekst: {
            no: "Kirkas lærere viser til apostelen Paulus. Han sa at han heller ville si fem ord med forstand for å lære andre, enn ti tusen ord i tunger som ingen forstår.",
            am: "የቤተ ክርስቲያን መምህራን ሐዋርያው ቅዱስ ጳውሎስ ያለውን ይጠቅሳሉ። እርሱ ሌሎችን ለማስተማር በልሳን እልፍ ቃላት ከመናገር ይልቅ በአእምሮው አምስት ቃላት መናገርን እንደሚወድ ተናግሯል።",
          },
          vers: ["1Cor 14:19"],
        },
        {
          tekst: {
            no: "De minner også om de fem glatte steinene David valgte ut i bekken da han gikk mot kjempen Goliat. Med de fem mysteriene kan også vi stå imot det onde og falsk lære.",
            am: "ዳዊት ጎልያድን ሊገጥም ሲሄድ ከወንዝ የመረጣቸው አምስቱ ድብልብል ድንጋዮችም የአምስቱ አዕማደ ምሥጢር ምሳሌ ናቸው። እኛም በአምስቱ አዕማደ ምሥጢር ክፉውንና ኑፋቄን ድል እናደርጋለን።",
          },
          vers: ["1Sam 17:40"],
        },
      ],
    },
    {
      id: "de-fem",
      tittel: { no: "De fem mysteriene", am: "አምስቱ አዕማደ ምሥጢር" },
      ingress: {
        no: "Her er de fem i den rekkefølgen kirka lærer dem. Du kan lese mer om hvert av dem på egne sider.",
        am: "ቤተ ክርስቲያን በምታስተምርበት ቅደም ተከተል አምስቱ እነዚህ ናቸው። ስለ እያንዳንዳቸው በየራሱ ገጽ በስፋት ማንበብ ይቻላል።",
      },
      punkter: [
        {
          tekst: {
            no: "ምሥጢረ ሥላሴ – treenighetens mysterium: Her lærer vi at Gud er én, og at han er tre personer: Faderen, Sønnen og Den hellige ånd.",
            am: "ምሥጢረ ሥላሴ፤ የሥላሴን አንድነትና ሦስትነት የምንማርበት ነው። እግዚአብሔር አንድ ነው፤ በአካል ደግሞ ሦስት ነው፤ አብ፣ ወልድ፣ መንፈስ ቅዱስ።",
          },
          vers: ["Matt 28:19", "2Cor 13:14"],
        },
        {
          tekst: {
            no: "ምሥጢረ ሥጋዌ – mysteriet om at Gud ble menneske: Guds Sønn ble menneske av jomfru Maria for å frelse oss.",
            am: "ምሥጢረ ሥጋዌ፤ የአምላክን ሰው መሆን የምንማርበት ነው። የእግዚአብሔር ልጅ እኛን ለማዳን ከቅድስት ድንግል ማርያም ሰው ሆነ።",
          },
          vers: ["John 1:14", "Gal 4:4"],
        },
        {
          tekst: {
            no: "ምሥጢረ ጥምቀት – dåpens mysterium: I dåpen blir vi født på nytt av vann og Ånd og blir Guds barn.",
            am: "ምሥጢረ ጥምቀት፤ ስለ ዳግም መወለድ የምንማርበት ነው። በጥምቀት ከውኃና ከመንፈስ ዳግመኛ ተወልደን የእግዚአብሔር ልጆች እንሆናለን።",
          },
          vers: ["John 3:5", "Mark 16:16"],
        },
        {
          tekst: {
            no: "ምሥጢረ ቍርባን – nattverdens mysterium: Vi tar imot Kristi kropp og blod (ሥጋውና ደሙ) og får evig liv.",
            am: "ምሥጢረ ቍርባን፤ ስለ ክርስቶስ ሥጋና ደም የምንማርበት ነው። ሥጋውንና ደሙን ተቀብለን የዘላለም ሕይወት እናገኛለን።",
          },
          vers: ["Matt 26:26-28", "John 6:54"],
        },
        {
          tekst: {
            no: "ምሥጢረ ትንሣኤ ሙታን – mysteriet om de dødes oppstandelse: Når Kristus kommer igjen, skal alle de døde stå opp, og han skal dømme levende og døde.",
            am: "ምሥጢረ ትንሣኤ ሙታን፤ ስለ ሙታን መነሣትና ስለ ዳግም ምጽአት የምንማርበት ነው። ክርስቶስ ዳግመኛ ሲመጣ ሙታን ሁሉ ይነሣሉ፤ እርሱም በሕያዋንና በሙታን ይፈርዳል።",
          },
          vers: ["John 5:28-29", "1Cor 15:20"],
        },
      ],
    },
    {
      id: "tro-gjore-hape",
      tittel: { no: "Tro, gjøre og håpe", am: "የምንቀበላቸው፣ የምንፈጽማቸውና በተስፋ የምንጠብቀው" },
      ingress: {
        no: "Kirka deler de fem mysteriene i tre grupper:",
        am: "አምስቱ አዕማደ ምሥጢር በአፈጻጸማቸው በሦስት ይከፈላሉ፤",
      },
      punkter: [
        {
          tekst: {
            no: "ሥላሴ og ሥጋዌ tror vi og tar imot. De forteller hvem Gud er, og hva han har gjort for å frelse oss.",
            am: "ምሥጢረ ሥላሴንና ምሥጢረ ሥጋዌን አምነን እንቀበላቸዋለን። እግዚአብሔር ማን እንደ ሆነና እኛን ለማዳን ምን እንዳደረገ ያስተምሩናል።",
          },
          vers: ["John 20:31"],
        },
        {
          tekst: {
            no: "ጥምቀት og ቍርባን tror vi og gjør: Vi blir døpt, og vi tar imot Kristi kropp og blod. Slik gjorde også de første kristne.",
            am: "ምሥጢረ ጥምቀትንና ምሥጢረ ቍርባንን አምነን እንፈጽማቸዋለን፤ እንጠመቃለን፤ ሥጋውንና ደሙንም እንቀበላለን። የመጀመሪያዎቹ ክርስቲያኖችም እንዲሁ ያደርጉ ነበር።",
          },
          vers: ["Acts 2:41-42"],
        },
        {
          tekst: {
            no: "ትንሣኤ ሙታን tror vi og venter på i håp. Det har ikke skjedd ennå, men det kommer helt sikkert.",
            am: "ምሥጢረ ትንሣኤ ሙታንን አምነን በተስፋ እንጠብቀዋለን። ገና አልተፈጸመም፤ ነገር ግን በእርግጥ ይፈጸማል።",
          },
          vers: ["Titus 2:13"],
        },
      ],
    },
    {
      id: "sakramentene",
      tittel: { no: "Mysteriene og de sju sakramentene", am: "አዕማደ ምሥጢርና ምሥጢራተ ቤተ ክርስቲያን" },
      punkter: [
        {
          tekst: {
            no: "Kirka har også sju sakramenter (ሰባቱ ምሥጢራተ ቤተ ክርስቲያን): dåpen (ጥምቀት), myron (ሜሮን), nattverden (ቍርባን), omvendelsen (ንስሐ), salving av syke (ቀንዲል), ekteskapet (ተክሊል) og prestevigselen (ክህነት). Kirka ser et bilde på dem i de sju søylene som Visdommen hogg til for huset sitt.",
            am: "ቤተ ክርስቲያን ሰባት ምሥጢራትም አሏት፤ እነርሱም ጥምቀት፣ ሜሮን፣ ቍርባን፣ ንስሐ፣ ቀንዲል፣ ተክሊልና ክህነት ናቸው። ጥበብ ቤቷን ሠርታ ያቆመቻቸው ሰባቱ ምሰሶዎች የእነዚህ ምሳሌ ናቸው።",
          },
          vers: ["Prov 9:1"],
        },
        {
          tekst: {
            no: "Et sakrament er en hellig handling i kirka der vi får Guds usynlige nåde gjennom noe vi kan se: vann, hellig olje, brød og vin, bønn og håndspåleggelse.",
            am: "ምሥጢራተ ቤተ ክርስቲያን በሚታይ አገልግሎት የማይታይ ጸጋ የምናገኝባቸው ቅዱሳት ሥርዓቶች ናቸው፤ በውኃ፣ በቅብዐት፣ በኅብስትና በወይን፣ በጸሎትና በእጅ መጫን ይፈጸማሉ።",
          },
        },
        {
          tekst: {
            no: "Forskjellen: De fem mysteriene er grunnmuren i det vi tror. De sju sakramentene er hellige handlinger der vi tar imot Guds nåde.",
            am: "ልዩነታቸው፤ አምስቱ አዕማደ ምሥጢር የእምነታችን መሠረቶች ናቸው። ሰባቱ ምሥጢራተ ቤተ ክርስቲያን ደግሞ የእግዚአብሔርን ጸጋ የምንቀበልባቸው ቅዱሳት ሥርዓቶች ናቸው።",
          },
        },
        {
          tekst: {
            no: "Sammenhengen: Dåpen og nattverden hører hjemme begge steder. Vi tror på dem som søyler i troen, og vi tar imot dem som sakramenter. Uten dåp kan vi ikke ta imot de andre sakramentene, og uten Kristi kropp og blod har vi ikke liv i oss.",
            am: "ግንኙነታቸው፤ ጥምቀትና ቍርባን በሁለቱም ይገኛሉ። እንደ አዕማደ ምሥጢር እናምንባቸዋለን፤ እንደ ምሥጢራተ ቤተ ክርስቲያን ደግሞ እንቀበላቸዋለን። ሳንጠመቅ ሌሎቹን ምሥጢራት መቀበል አንችልም፤ ሥጋውንና ደሙን ሳንቀበልም በራሳችን ሕይወት የለንም።",
          },
          vers: ["John 3:5", "John 6:53"],
        },
      ],
    },
    {
      id: "trosbekjennelsen",
      tittel: { no: "De fem mysteriene i trosbekjennelsen", am: "አዕማደ ምሥጢር በጸሎተ ሃይማኖት" },
      ingress: {
        no: "Trosbekjennelsen (ጸሎተ ሃይማኖት) ble fastsatt av kirkefedrene på kirkemøtene i Nikea (325) og Konstantinopel (381). Alle de fem mysteriene står i den:",
        am: "ጸሎተ ሃይማኖት በኒቅያ (በ325) እና በቍስጥንጥንያ (በ381) ጉባኤያት በቅዱሳን አበው ተወስኗል። አምስቱ አዕማደ ምሥጢር ሁሉ በውስጡ ይገኛሉ፤",
      },
      punkter: [
        {
          tekst: {
            no: "ምሥጢረ ሥላሴ: «ነአምን በአሐዱ አምላክ እግዚአብሔር አብ», «ወነአምን በአሐዱ እግዚእ ኢየሱስ ክርስቶስ» og «ወነአምን በመንፈስ ቅዱስ» – vi tror på én Gud, Faderen, på én Herre, Jesus Kristus, og på Den hellige ånd.",
            am: "ምሥጢረ ሥላሴ፤ «ነአምን በአሐዱ አምላክ እግዚአብሔር አብ»፣ «ወነአምን በአሐዱ እግዚእ ኢየሱስ ክርስቶስ»፣ «ወነአምን በመንፈስ ቅዱስ» ስንል በአብ በወልድ በመንፈስ ቅዱስ ማመናችንን እንመሰክራለን።",
          },
        },
        {
          tekst: {
            no: "ምሥጢረ ሥጋዌ: «ተሰብአ ወተሠገወ እመንፈስ ቅዱስ ወእማርያም እምቅድስት ድንግል» – han ble fullt ut menneske ved Den hellige ånd og av den hellige jomfru Maria.",
            am: "ምሥጢረ ሥጋዌ፤ «ተሰብአ ወተሠገወ እመንፈስ ቅዱስ ወእማርያም እምቅድስት ድንግል»፤ ከመንፈስ ቅዱስ የተነሣ ከቅድስት ድንግል ማርያም ፈጽሞ ሰው ሆነ።",
          },
        },
        {
          tekst: {
            no: "ምሥጢረ ቍርባን: «ወነአምን በአሐቲ ቅድስት ቤተ ክርስቲያን» – vi tror på én hellig kirke. Kirkas lærere forklarer at vi her også bekjenner ቍርባን, for det er i kirka Kristi kropp og blod blir gitt oss.",
            am: "ምሥጢረ ቍርባን፤ «ወነአምን በአሐቲ ቅድስት ቤተ ክርስቲያን» ስንል ሥጋውና ደሙ የሚፈተትባትን ቤተ ክርስቲያን በመጥቀስ ምሥጢረ ቍርባንን እናጸናለን ብለው መምህራን ያስረዳሉ።",
          },
        },
        {
          tekst: {
            no: "ምሥጢረ ጥምቀት: «ወነአምን በአሐቲ ጥምቀት ለሥርየተ ኃጢአት» – vi tror på én dåp til syndenes forlatelse.",
            am: "ምሥጢረ ጥምቀት፤ «ወነአምን በአሐቲ ጥምቀት ለሥርየተ ኃጢአት»፤ ኃጢአትን ለማስተሥረይ በአንዲት ጥምቀት እናምናለን።",
          },
        },
        {
          tekst: {
            no: "ምሥጢረ ትንሣኤ ሙታን: «ወንሴፎ ትንሣኤ ሙታን ወሕይወተ ዘይመጽእ ለዓለመ ዓለም» – vi venter de dødes oppstandelse og livet som kommer, i all evighet. Legg merke til at vi her ikke sier ወነአምን (vi tror), men ወንሴፎ (vi håper), for oppstandelsen er noe vi venter på.",
            am: "ምሥጢረ ትንሣኤ ሙታን፤ «ወንሴፎ ትንሣኤ ሙታን ወሕይወተ ዘይመጽእ ለዓለመ ዓለም»፤ የሙታንን መነሣት የሚመጣውንም ሕይወት ለዘላለሙ ተስፋ እናደርጋለን። በሌሎቹ አንቀጾች «ወነአምን» (እናምናለን) ሲል በዚህ «ወንሴፎ» (ተስፋ እናደርጋለን) ማለቱ ትንሣኤ ሙታንን በተስፋ የምንጠብቀው መሆኑን ያሳያል።",
          },
        },
      ],
    },
    {
      id: "hvorfor",
      tittel: { no: "Hvorfor må hver kristen kjenne dem?", am: "እያንዳንዱ ክርስቲያን ለምን ሊያውቃቸው ይገባል?" },
      punkter: [
        {
          tekst: {
            no: "De er grunnmuren i troen. Den som ikke kjenner dem, blir lett kastet hit og dit av ny og feil lære, som et lite barn.",
            am: "የሃይማኖት መሠረቶች ናቸው። እነርሱን ያላወቀ እንደ ሕፃን በትምህርት ነፋስ ሁሉ ወዲያና ወዲህ በቀላሉ ይንሳፈፋል።",
          },
          vers: ["Eph 4:14"],
        },
        {
          tekst: {
            no: "Vi skal alltid være klare til å svare den som spør hva vi tror og håper – med vennlighet og respekt. Det gjelder også på skolen og blant venner i Norge.",
            am: "ስለ ተስፋችን ለሚጠይቁን ሁሉ በየዋህነትና በፍርሃት መልስ ለመስጠት ዘወትር ልንዘጋጅ ይገባናል። ይህም በኖርዌይ በትምህርት ቤትና በጓደኞቻችን መካከልም ይሠራል።",
          },
          vers: ["1Pet 3:15"],
        },
        {
          tekst: {
            no: "De gir trøst når livet er vanskelig. Kirkas lærere sier: Den som mister mor eller far, blir trøstet av at Gud er vår Far. Den som lider, husker at Gud selv ble menneske og led for oss. Den som er sulten i sjelen, får Kristi kropp og blod. Og den som blir truet for troens skyld, håper på oppstandelsen.",
            am: "በመከራ ጊዜ መጽናናትን ይሰጣሉ። ሊቃውንት እንደሚያስተምሩት አዕማደ ምሥጢርን ያወቀ ሰው አባት እናት ቢሞቱበት በሥላሴ አባትነት ይጽናናል። መከራ ቢደርስበት አምላክ ሰው ሆኖ የተቀበለውን መከራ ያስባል። ረኀበ ነፍስ ቢደርስበት ቅዱስ ሥጋውን ይበላል፤ ክቡር ደሙንም ይጠጣል። ስለ እምነቱ ቢያስፈራሩት ትንሣኤ ሙታንን ተስፋ ያደርጋል።",
          },
          vers: ["2Cor 1:3-4", "Rom 8:38-39"],
        },
        {
          tekst: {
            no: "Å lære de fem mysteriene er en plikt for hver kristen. Men kunnskap alene er ikke nok: Troen må også vises i gode gjerninger, i bønn og i faste.",
            am: "አዕማደ ምሥጢርን መማር የሁሉም ክርስቲያን ግዴታ ነው። ነገር ግን ዕውቀት ብቻውን አይበቃም፤ እምነት በመልካም ምግባር፣ በጸሎትና በጾም መገለጥ አለበት።",
          },
          vers: ["Jas 2:17"],
        },
      ],
    },
  ],
  ord: [
    { ord: "አምድ / አዕማድ", forklaring: { no: "søyle / søyler", am: "ምሰሶ / ምሰሶዎች" } },
    { ord: "አዕማደ ምሥጢር", forklaring: { no: "de fem mysteriene, troens søyler", am: "የሃይማኖት መሠረት የሆኑ አምስቱ ምሥጢራት" } },
    { ord: "ምሥጢር", forklaring: { no: "mysterium, noe skjult som vi tar imot i tro", am: "ስውር፣ በእምነት የሚታወቅ" } },
    { ord: "ምሥጢረ ሥላሴ", forklaring: { no: "treenighetens mysterium", am: "የሥላሴ አንድነትና ሦስትነት" } },
    { ord: "ምሥጢረ ሥጋዌ", forklaring: { no: "mysteriet om at Gud ble menneske", am: "የአምላክ ሰው መሆን" } },
    { ord: "ምሥጢረ ጥምቀት", forklaring: { no: "dåpens mysterium", am: "ከውኃና ከመንፈስ ዳግመኛ መወለድ" } },
    { ord: "ምሥጢረ ቍርባን", forklaring: { no: "nattverdens mysterium", am: "የክርስቶስ ሥጋና ደም" } },
    { ord: "ምሥጢረ ትንሣኤ ሙታን", forklaring: { no: "mysteriet om de dødes oppstandelse", am: "የሙታን መነሣት" } },
    { ord: "ምሥጢራተ ቤተ ክርስቲያን", forklaring: { no: "kirkas sju sakramenter", am: "ሰባቱ የቤተ ክርስቲያን ምሥጢራት" } },
    { ord: "ጸሎተ ሃይማኖት", forklaring: { no: "trosbekjennelsen", am: "የሃይማኖት ጸሎት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet አምድ, og hvorfor kalles de fem mysteriene søyler?", am: "«አምድ» ማለት ምን ማለት ነው? አምስቱ ምሥጢራት ለምን አዕማድ ተባሉ?" },
      svar: {
        no: "አምድ betyr søyle. De kalles søyler fordi de holder troen oppe, slik søyler holder et hus oppe.",
        am: "«አምድ» ማለት ምሰሶ ማለት ነው። ምሰሶ ቤትን ደግፎ እንደሚይዝ እነርሱም ሃይማኖትን ደግፈው ስለሚይዙ አዕማድ ተባሉ።",
      },
    },
    {
      sporsmal: { no: "Nevn de fem mysteriene i riktig rekkefølge.", am: "አምስቱን አዕማደ ምሥጢር በቅደም ተከተል ጥቀስ።" },
      svar: {
        no: "ምሥጢረ ሥላሴ, ምሥጢረ ሥጋዌ, ምሥጢረ ጥምቀት, ምሥጢረ ቍርባን og ምሥጢረ ትንሣኤ ሙታን.",
        am: "ምሥጢረ ሥላሴ፣ ምሥጢረ ሥጋዌ፣ ምሥጢረ ጥምቀት፣ ምሥጢረ ቍርባንና ምሥጢረ ትንሣኤ ሙታን።",
      },
    },
    {
      sporsmal: { no: "Hvilke to bibelfortellinger bruker kirka for å vise at mysteriene er fem?", am: "አዕማደ ምሥጢር አምስት መሆናቸውን ለማስረዳት የትኞቹ ሁለት የመጽሐፍ ቅዱስ ክፍሎች ይጠቀሳሉ?" },
      svar: {
        no: "Paulus som ville si fem ord med forstand (1 Kor 14,19), og de fem steinene David tok med mot Goliat (1 Sam 17,40).",
        am: "ቅዱስ ጳውሎስ በአእምሮው አምስት ቃላት መናገርን እንደሚወድ መናገሩ (1ኛ ቆሮ 14፥19) እና ዳዊት ጎልያድን ሲገጥም የመረጣቸው አምስቱ ድንጋዮች (1ኛ ሳሙ 17፥40)።",
      },
    },
    {
      sporsmal: { no: "Hvilke to mysterier er også sakramenter?", am: "ከአዕማደ ምሥጢር ውስጥ ምሥጢራተ ቤተ ክርስቲያንም የሆኑት የትኞቹ ሁለቱ ናቸው?" },
      svar: { no: "Dåpen (ጥምቀት) og nattverden (ቍርባን).", am: "ጥምቀትና ቍርባን።" },
    },
    {
      sporsmal: { no: "Hvilket mysterium tror vi på og venter på i håp?", am: "አምነን በተስፋ የምንጠብቀው የትኛውን ምሥጢር ነው?" },
      svar: {
        no: "ምሥጢረ ትንሣኤ ሙታን. Derfor sier trosbekjennelsen ወንሴፎ – vi håper.",
        am: "ምሥጢረ ትንሣኤ ሙታንን። ስለዚህ ጸሎተ ሃይማኖት «ወንሴፎ» (ተስፋ እናደርጋለን) ይላል።",
      },
    },
    {
      sporsmal: { no: "Hva er forskjellen på de fem mysteriene og de sju sakramentene?", am: "በአዕማደ ምሥጢርና በምሥጢራተ ቤተ ክርስቲያን መካከል ያለው ልዩነት ምንድን ነው?" },
      svar: {
        no: "De fem mysteriene er grunnmuren i det vi tror. De sju sakramentene er hellige handlinger der vi tar imot Guds usynlige nåde gjennom noe vi kan se.",
        am: "አዕማደ ምሥጢር የእምነታችን መሠረቶች ናቸው። ምሥጢራተ ቤተ ክርስቲያን ደግሞ በሚታይ አገልግሎት የማይታይ ጸጋ የምንቀበልባቸው ቅዱሳት ሥርዓቶች ናቸው።",
      },
    },
  ],
  kilder: [
    { navn: "አስተምህሮ ዘተዋሕዶ: አምስቱ አዕማደ ምስጢራት፡ መግቢያ", url: "https://astemhro.com/2018/10/05/pillars_mysteries_introduction/" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ጸሎተ ሃይማኖት፡ እንዲህ እናምናለን፤ እንዲህም እንታመናለን!", url: "https://astemhro.com/2026/02/07/creed_of_faith/" },
    { navn: "St. Urael EOTC (Minnesota): አምስቱ አእማደ ምሥጢር", url: "https://stouraeleotcmn.org/fivePillar_am.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Introduction to Church Sacraments", url: "https://www.ethiopianorthodox.org/english/dogma/sacramentintro.html" },
    { navn: "Mahibere Kidusan (EOTC Sunday School Department), MK-US Next Generation: 5 Pillars of Mystery", url: "https://nextgeneration.eotcmk.org/five-pillars" },
  ],
  utkast: true,
};
