import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ክህነት:
// søndagsskolepensumet «መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን», 8. klasse, kap. 6 (ordet ክህነት, prestetjenesten
// i Det gamle og Det nye testamentet, de tre trinnene, kravene, vigselen, hva som fører til avsetting, og nådegavene,
// med sitater fra ፍትሐ ነገሥት og ዲድስቅልያ), Debre Mitmaq Kidist Mariam EOTC (7ቱ ምሥጢራተ ቤተ ክርስቲያን: om
// patriark, biskop, prest, diakon og de lavere tjenestene ንፍቀ ዲያቆን, አናጉንስጢስ, መዘምራን og ዐጻዌ ኆኅት, med
// henvisninger til Fetha Negest kap. 5–8), ethiopianorthodox.org (The Sacrament of the Holy Orders, etter
// Rev. Marcos Daoud, og innledningen til «The Liturgy of the Ethiopian Church» om forskjellen på ordinerte og ደባትር),
// og Mahibere Kidusan (የጋብቻ ሕይወት እና የሩካቤ ሥርዓት – ክፍል ፭) om at diakoner og prester bare kan gifte seg én gang.
// Usikkert: Kildene er uenige om hvor gammel en diakon må være. 8.-klasseboka sier at gutter fra ti år kan vigsles
// til diakon. Debre Mitmaq sier at ingen under 25 år vigsles til diakon «uten særlige evner». Siden sier bare at
// mange blir diakoner som unge gutter.
// Usikkert: Ethiopianorthodox.org sier at minst tre biskoper vigsler en biskop. 8.-klasseboka sier «to eller tre
// biskoper sammen med patriarken». Siden sier «flere biskoper, aldri én alene».
// Usikkert: Jeg fant ingen Tewahedo-kilde som forklarer tittelen መሪጌታ nøyaktig. Siden sier bare at det er en
// æresbetegnelse for en lærd leder i kirkesangen. Bør sjekkes med presten.
// Usikkert: Skikkene for å vise respekt (be om velsignelse og kysse håndkorset) er tatt fra sakramentsiden og vanlig
// praksis i kirka; jeg fant ingen egen kilde som lister dem opp.
// Usikkert: Debre Mitmaq omtaler diakonisser (ዲያቆናውያት) i nåtid, ethiopianorthodox.org sier at de fantes «i tidligere
// tider». Siden nevner dem bare kort som noe kirkas bøker omtaler.
export const prestevigsel: Tema = {
  slug: "prestevigsel",
  del: "sakramentene",
  tittel: { no: "Prestetjenesten", am: "ምሥጢረ ክህነት" },
  undertittel: { no: "Kalt av Gud til å tjene", am: "በእግዚአብሔር የተጠሩ አገልጋዮች" },
  bilde: "ewostatewos",
  ingress: {
    no:
      "Prestetjenesten (ክህነት) er et av kirkas sju sakramenter. Gjennom bønn og håndspåleggelse får en mann som Gud har kalt, nåde og myndighet til å tjene: å lære, døpe, feire ቅዳሴ og tilgi synder. Jesus selv valgte og sendte apostlene, og fra dem har tjenesten gått videre fra biskop til biskop helt til i dag. Det finnes tre trinn: diakon, prest og biskop.",
    am:
      "ምሥጢረ ክህነት ከሰባቱ ምሥጢራተ ቤተ ክርስቲያን አንዱ ነው። በእግዚአብሔር የተጠራ ሰው በጸሎትና በአንብሮተ እድ የማገልገል ጸጋና ሥልጣን ይቀበላል፤ ያስተምራል፣ ያጠምቃል፣ ይቀድሳል፣ ኃጢአትን ያስተሠርያል። ጌታችን ራሱ ሐዋርያትን መረጠ፤ ላካቸውም፤ ከእነርሱም ሥልጣነ ክህነት እስከ ዛሬ ድረስ ይተላለፋል። የክህነት መዓርጋት ሦስት ናቸው፤ ዲቁና፣ ቅስናና ጵጵስና።",
  },
  hovedvers: "John 15:16",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er ክህነት?", am: "ክህነት ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ክህነት kommer av ge'ez «ተክህነ», å tjene. ካህን betyr tjener. En ካህን er Guds tjener, en far, hyrde og lærer for de troende. Ordet ካህን brukes om både diakon, prest og biskop.",
            am: "ክህነት «ተክህነ» (አገለገለ) ከሚለው የግዕዝ ግሥ የተገኘ ነው፤ ካህን ማለት አገልጋይ ማለት ነው። ካህን የእግዚአብሔር አገልጋይ፣ የምእመናን አባት፣ ጠባቂና መጋቢ ነው። ካህን የሚለው ቃል ዲያቆንን፣ ቄስንና ጳጳስን ያጠቃልላል።",
          },
          vers: ["Mal 2:7"],
        },
        {
          tekst: {
            no: "ክህነት gir makt til å binde og løse, å velsigne og å hellige. Gjennom ክህነት blir de andre sakramentene utført. Uten prester blir det ingen dåp, ingen nattverd og ingen tilgivelse i skriftemålet.",
            am: "ምሥጢረ ክህነት የማሰርና የመፍታት፣ የመባረክና የመቀደስ ሥልጣን ያሰጣል፤ ሌሎቹም ምሥጢራት የሚፈጸሙት በእርሱ ነው። ያለ ካህናት ጥምቀትም፣ ቍርባንም፣ ንስሐም አይፈጸሙም።",
          },
          vers: ["Matt 18:18"],
        },
        {
          tekst: {
            no: "Som de andre sakramentene har ክህነት en side vi ser og en side vi ikke ser. Vi ser biskopen be og legge hendene på den som vigsles. Vi ser ikke Guds nåde som kommer over ham og gjør ham i stand til å tjene.",
            am: "ክህነት የሚታይ አገልግሎትና የማይታይ ጸጋ አለው። ጳጳሱ ሲጸልይና እጁን ሲጭን ይታያል፤ ሥልጣነ ክህነት ከጳጳሱ ወደ ተሿሚው ሲተላለፍና ሀብተ ክህነትን ገንዘብ ሲያደርግ ግን አይታይም።",
          },
          vers: ["2Tim 1:6"],
        },
        {
          tekst: {
            no: "ክህነት er ikke for alle. Det er for menn som Gud har kalt og utvalgt, som har lært det som trengs, og som vil tjene Gud i renhet. ክህነት er det eneste sakramentet der det er forskjell på menn og kvinner: bare menn blir viet til diakon, prest og biskop.",
            am: "ምሥጢረ ክህነት ለተመረጡ፣ ለተለዩ፣ ለክህነት የሚያበቃ ትምህርት ለተማሩና በንጽሕና እግዚአብሔርን ለማገልገል ለተዘጋጁ ብቻ ይሰጣል። ከምሥጢራቱ የጾታ ልዩነት የሚያደርገው ክህነት ብቻ ነው።",
          },
          vers: ["Heb 5:4"],
        },
      ],
    },
    {
      id: "kristus",
      tittel: { no: "Kristus valgte og sendte apostlene", am: "ክርስቶስ ሐዋርያትን መረጠ፤ ላካቸውም" },
      punkter: [
        {
          tekst: {
            no: "Jesus ba en hel natt på et fjell. Om morgenen kalte han disiplene til seg og valgte ut tolv av dem. Dem kalte han apostler.",
            am: "ጌታችን ሌሊቱን ሁሉ በተራራ ላይ ሲጸልይ አደረ። በነጋም ጊዜ ደቀ መዛሙርቱን ጠራ፤ ከእነርሱም አሥራ ሁለት መረጠ፤ ሐዋርያት ብሎም ሰየማቸው።",
          },
          vers: ["Luke 6:12-13"],
        },
        {
          tekst: {
            no: "Jesus sa: «Det var ikke dere som valgte meg, men jeg som valgte dere.» Ingen gjør seg selv til prest. Det er Gud som kaller.",
            am: "ጌታችን «እኔ መረጥኋችሁ እንጂ እናንተ አልመረጣችሁኝም» አለ። ማንም ራሱን ካህን አያደርግም፤ የሚጠራው እግዚአብሔር ነው።",
          },
          vers: ["John 15:16", "Heb 5:4"],
        },
        {
          tekst: {
            no: "Etter oppstandelsen sa Jesus: «Som Far har sendt meg, sender jeg dere.» Så blåste han på dem og sa: «Ta imot Den hellige ånd. Tilgir dere noen syndene, er de tilgitt.» Fra da av var ክህነት i Den nye pakt innstiftet.",
            am: "ከትንሣኤው በኋላ «አብ እንደ ላከኝ እኔ ደግሞ እልካችኋለሁ» አላቸው። «ይህንም ብሎ እፍ አለባቸውና። መንፈስ ቅዱስን ተቀበሉ። ኃጢአታቸውን ይቅር ያላችኋቸው ሁሉ ይቀርላቸዋል» አላቸው። ከዚህ ጊዜ ጀምሮ የሐዲስ ኪዳን ክህነት ተመሠረተ።",
          },
          vers: ["John 20:21-23"],
        },
        {
          tekst: {
            no: "Jesus ga apostlene makt til å binde og løse, og han sendte dem ut for å lære og døpe alle folkeslag. Han lovte å være med dem alle dager. Det gjelder også dem som kom etter apostlene.",
            am: "ለሐዋርያት የማሰርና የመፍታት ሥልጣን ሰጣቸው፤ አሕዛብን ሁሉ እንዲያስተምሩና እንዲያጠምቁም ላካቸው። እስከ ዓለም ፍጻሜ ድረስ ከእነርሱ ጋር እንደሚሆን ተስፋ ሰጣቸው፤ ይህም ለተተኪዎቻቸው ደግሞ ነው።",
          },
          vers: ["Matt 18:18", "Matt 28:19-20"],
        },
        {
          tekst: {
            no: "Jesus sa tre ganger til Peter: «Fø lammene mine … vokt sauene mine … fø sauene mine.» Kirka lærer at han slik satte apostlene til hyrder for hele flokken.",
            am: "ጌታችን ቅዱስ ጴጥሮስን ሦስት ጊዜ «ግልገሎቼን አሰማራ … ጠቦቶቼን ጠብቅ … በጎቼን አሰማራ» አለው። በዚህም ሐዋርያትን የመንጋው ሁሉ እረኞች አድርጎ ሾማቸው።",
          },
          vers: ["John 21:15-17"],
        },
        {
          tekst: {
            no: "Da Judas var borte, ba apostlene og valgte Mattias i hans sted. Slik ser vi at tjenesten skulle gå videre.",
            am: "ይሁዳ ከሐዋርያት ቍጥር በወጣ ጊዜ ሐዋርያት ጸልየው በእርሱ ፈንታ ማትያስን መረጡ። ይህም አገልግሎቱ እንዲቀጥል እንደሚገባ ያሳያል።",
          },
          vers: ["Acts 1:24-26"],
        },
      ],
    },
    {
      id: "gt",
      tittel: { no: "Prester i Det gamle testamentet", am: "ክህነት በብሉይ ኪዳን" },
      punkter: [
        {
          tekst: {
            no: "Kirka lærer at Adam fikk både prestetjeneste, profetgave og kongemakt da Gud skapte ham. Allerede de første menneskene ofret til Gud: Noah bygde et alter og ofret etter vannflommen.",
            am: "እግዚአብሔር አዳምን ፈጥሮ የጸጋ ልጅነትን በሰጠው ጊዜ ሀብተ ክህነትን፣ ሀብተ ትንቢትንና ሀብተ መንግሥትን አብሮ ሰጠው። ኖኅም ከጥፋት ውኃ በኋላ መሠዊያ ሠርቶ መሥዋዕት አቀረበ።",
          },
          vers: ["Gen 8:20"],
        },
        {
          tekst: {
            no: "Melkisedek, kongen av Salem, bar fram brød og vin. Han var prest for Gud, Den Høyeste, og velsignet Abraham. Han er et bilde på Kristus, som er «prest for alltid etter Melkisedeks vis».",
            am: "የሳሌም ንጉሥ መልከ ጼዴቅ እንጀራንና የወይን ጠጅን አወጣ፤ «እርሱም የልዑል እግዚአብሔር ካህን ነበረ»፤ አብርሃምንም ባረከው። እርሱ እንደ መልከ ጼዴቅ ሥርዓት ለዘላለም ካህን ለሆነው ለክርስቶስ ምሳሌ ነው።",
          },
          vers: ["Gen 14:18-20", "Ps 110:4", "Heb 7:1-3"],
        },
        {
          tekst: {
            no: "Gud sa til Moses at hans bror Aron og Arons sønner skulle være prester. Moses salvet dem og viet dem til tjenesten. «Ingen tar seg selv denne æren; han må være kalt av Gud, slik Aron var.»",
            am: "እግዚአብሔር ሙሴን ወንድሙን አሮንንና ልጆቹን ካህናት እንዲሆኑ ከእስራኤል ልጆች መካከል እንዲለያቸው አዘዘው፤ ሙሴም ቀብቶ ቀደሳቸው። «እንደ አሮንም በእግዚአብሔር ከተጠራ በቀር ማንም ክብሩን ለራሱ የሚወስድ የለም።»",
          },
          vers: ["Exod 28:1", "Exod 28:41", "Heb 5:4"],
        },
        {
          tekst: {
            no: "I Det gamle testamentet gikk prestetjenesten i arv i Arons slekt, i Levi stamme. Den siste presten i den gamle pakten var Johannes døperen. Derfor gikk Jesus til ham for å bli døpt.",
            am: "በብሉይ ኪዳን ክህነት ከአሮን ዘር ብቻ በዘር ሐረግ ይተላለፍ ነበር። የብሉይ ኪዳን የመጨረሻው ካህን መጥምቀ መለኮት ቅዱስ ዮሐንስ ነው፤ ስለዚህ ጌታችን በእርሱ እጅ ሊጠመቅ ወደ ዮርዳኖስ ሄደ።",
          },
          vers: ["Num 18:7", "Luke 1:5", "Matt 3:13"],
        },
        {
          tekst: {
            no: "Prestetjenesten i Den nye pakt er større enn den gamle. Den gamle var for én stamme og bare for Israel, og offeret var dyr. Den nye er for alle folk, og offeret er Kristi egen kropp og blod, som gir evig frelse. Den gamle varte for en tid, den nye for alltid.",
            am: "የሐዲስ ኪዳን ክህነት ከብሉይ ኪዳን ክህነት ይበልጣል። የብሉይ ኪዳን ክህነት ለአንድ ነገድ ለቤተ እስራኤል ብቻ ነበር፤ መሥዋዕቱም የእንስሳት ሥጋና ደም ነበር። የሐዲስ ኪዳን ክህነት ግን ብቁ ሆነው ለተገኙ ሁሉ ነው፤ መሥዋዕቱም ዘለዓለማዊ ድኅነትን የሚያሰጠው የክርስቶስ ሥጋና ደም ነው። ያኛው ጊዜያዊ ነበር፤ ይህኛው ዘለዓለማዊ ነው።",
          },
          vers: ["Heb 7:11-12", "Heb 7:23-25"],
        },
      ],
    },
    {
      id: "haand",
      tittel: { no: "Vigsel ved håndspåleggelse", am: "ሹመት በአንብሮተ እድ" },
      punkter: [
        {
          tekst: {
            no: "Den som blir viet, får gaven når biskopen ber og legger hendene på ham. Dette kalles አንብሮተ እድ. Apostlene stilte de sju diakonene fram, ba og la hendene på dem.",
            am: "ተሿሚው ጸጋውን የሚቀበለው በጳጳሱ ጸሎትና በአንብሮተ እድ (እጅ በመጫን) ነው። ሐዋርያት ሰባቱን ዲያቆናት በፊታቸው አቁመው ከጸለዩ በኋላ እጃቸውን ጫኑባቸው።",
          },
          vers: ["Acts 6:3-6"],
        },
        {
          tekst: {
            no: "Apostlene fastet og ba før de la hendene på Barnabas og Saulus og sendte dem ut. I hver menighet satte de inn eldste (prester) etter faste og bønn.",
            am: "ሐዋርያት ጦመው ጸልየው በበርናባስና በሳውል ላይ እጃቸውን ጭነው ላኩአቸው። በየቤተ ክርስቲያኑም ጦመውና ጸልየው ቀሳውስትን ሾሙ።",
          },
          vers: ["Acts 13:2-3", "Acts 14:23"],
        },
        {
          tekst: {
            no: "Paulus minner Timoteus om nådegaven han fikk ved håndspåleggelse, og ber ham holde den levende. Han sier også: «Legg ikke hendene på noen i hast.» Den som skal vigsles, må prøves først.",
            am: "ቅዱስ ጳውሎስ ጢሞቴዎስን በእጅ መጫን የተሰጠውን የጸጋ ስጦታ ቸል እንዳይል ያሳስበዋል። «በማንም ላይ ፈጥነህ እጆችህን አትጫን» ይላል። የሚሾመው አስቀድሞ ሊፈተን ይገባል።",
          },
          vers: ["1Tim 4:14", "2Tim 1:6", "1Tim 5:22"],
        },
        {
          tekst: {
            no: "Paulus lot Titus bli igjen på Kreta for å innsette eldste (prester) i hver by. Slik gikk myndigheten fra apostlene videre til biskopene, og fra dem helt til i dag.",
            am: "ቅዱስ ጳውሎስ በየከተማው ቀሳውስትን እንዲሾም ቲቶን በቀርጤስ ተወው። በዚህ መልክ ሐዋርያት ሥልጣነ ክህነትን ከጌታችን አገኙ፤ እነርሱም ለተተኪዎቻቸው አስተላለፉ፤ እስከ ዛሬም ይቀጥላል።",
          },
          vers: ["Titus 1:5"],
        },
        {
          tekst: {
            no: "Når en biskop vigsles, blåser biskopene også på ham (ንፍሐት), slik Jesus blåste på apostlene. Diakoner og prester vigsles av én biskop. En ny biskop vigsles av flere biskoper sammen, aldri av én alene.",
            am: "ጳጳሳት የተመረጡትን በአንብሮተ እድና በንፍሐት (እፍ በማለት) ይሾማሉ። ዲያቆንና ቄስ በአንድ ጳጳስ ይሾማሉ፤ ጳጳስ ግን በአንድ ጳጳስ ብቻ አይሾምም።",
          },
          vers: ["John 20:22"],
        },
        {
          tekst: {
            no: "Ingen skal betale penger for å bli viet. Da Simon ville kjøpe Den hellige ånds gave, sa Peter: «Måtte pengene dine gå til grunne sammen med deg.» Og ingen vigsles to ganger til samme trinn.",
            am: "ለክህነት ሹመት ገንዘብ መክፈል ፈጽሞ አይገባም። ስምዖን የመንፈስ ቅዱስን ስጦታ በገንዘብ ሊገዛ በፈለገ ጊዜ ቅዱስ ጴጥሮስ «የእግዚአብሔርን ስጦታ በገንዘብ እንድታገኝ አስበሃልና ብርህ ከአንተ ጋር ይጥፋ» አለው። አንዱ ሹመትም ሁለት ጊዜ አይፈጸምም።",
          },
          vers: ["Acts 8:18-20"],
        },
      ],
    },
    {
      id: "trinn",
      tittel: { no: "De tre trinnene og hva de gjør", am: "ሦስቱ የክህነት መዓርጋትና አገልግሎታቸው" },
      punkter: [
        {
          tekst: {
            no: "Diakon (ዲያቆን), trinnet heter ዲቁና. Ordet betyr hjelper og budbærer. Diakonen hjelper presten og biskopen, holder orden i kirka under bønnen, leser fra Bibelen og gir de troende Kristi blod med skjeen (እርፈ መስቀል). Han utfører ikke sakramentene selv. Kirkas bøker kaller ham «biskopens øyne og ører».",
            am: "ዲያቆን፤ መዓርጉ ዲቁና ይባላል። ዲያቆን ማለት ረዳት፣ ተላላኪ፣ አገልጋይ ማለት ነው። ቀሳውስትንና ጳጳሳትን በመላላክ ያገለግላል፤ በጸሎት ጊዜ ሕዝቡን ሥርዓት ያስይዛል፤ ቄሱ ቅዱስ ሥጋውን ሲያቀብል በእርፈ መስቀል ክቡር ደሙን ያቀብላል። ምሥጢራትን ግን ራሱ አይፈጽምም።",
          },
          vers: ["Acts 6:3-6", "1Tim 3:8-10", "Phil 1:1"],
        },
        {
          tekst: {
            no: "Diakonen går inn i helligdommen (መቅደስ), men han rører ikke ታቦቱ, og etter at brødet og vinen er blitt Kristi kropp og blod, rører han dem ikke med hendene. Den hellige Stefanus, den første av diakonene, er forbildet deres.",
            am: "ዲያቆናት መቅደስ ይገባሉ፤ ነገር ግን መንበሩንና ታቦቱን፣ ከተለወጠም በኋላ ሥጋውንና ደሙን በእጃቸው አይነኩም። አብነታቸው ሊቀ ዲያቆናት ቅዱስ እስጢፋኖስ ነው።",
          },
          vers: ["Acts 6:8"],
        },
        {
          tekst: {
            no: "Prest (ቄስ eller ቀሲስ), trinnet heter ቅስና. Presten lærer, døper, feirer ቅዳሴ og gir nattverd, tar imot skriftemål, binder og løser, og velsigner. Han kan utføre seks av sakramentene, men han kan ikke vie andre til prester, og han lager ikke myron.",
            am: "ቄስ ወይም ቀሲስ፤ መዓርጉ ቅስና ይባላል። አገልግሎቱም ማስተማር፣ ማጥመቅ፣ ቀድሶ ማቍረብ፣ መባረክ፣ ማሰርና መፍታት፣ መናዘዝ ነው። ከክህነት በቀር ስድስቱን ምሥጢራት ይፈጽማል፤ ሥልጣነ ክህነትን ግን አይሾምም፤ ሜሮንም አያፈላም።",
          },
          vers: ["1Tim 5:17", "Jas 5:14"],
        },
        {
          tekst: {
            no: "Biskop (ኤጲስ ቆጶስ eller ጳጳስ), trinnet heter ጵጵስና. Biskopen kan utføre alle de sju sakramentene. Han vigsler prester og diakoner, koker og velsigner myron, og vigsler nye kirker, nye ታቦታት og de hellige karene. Han er far og hyrde for et bispedømme (ሀገረ ስብከት).",
            am: "ኤጲስ ቆጶስ ወይም ጳጳስ፤ መዓርጉ ጵጵስና ይባላል። ሰባቱንም ምሥጢራት ይፈጽማል፤ ቀሳውስትንና ዲያቆናትን ይሾማል፤ ሜሮን ያፈላል፤ ሕንፃ ቤተ ክርስቲያንን፣ ጽላትንና ንዋየ ቅድሳትን ይባርካል። በአንድ ሀገረ ስብከት አባትና እረኛ ሆኖ ይሾማል።",
          },
          vers: ["Acts 20:28", "Titus 1:7-9"],
        },
        {
          tekst: {
            no: "Erkebiskop (ሊቀ ጳጳስ) og patriark (ፓትርያርክ) er ikke nye trinn. Det er oppgaver som biskoper blir valgt til. Patriarken er far for hele kirka og leder Den hellige synode (ቅዱስ ሲኖዶስ), møtet av alle biskopene. Han blir valgt og så innsatt av biskopene, og navnet hans nevnes i bønnene i alle kirkene.",
            am: "ሊቀ ጵጵስናና ፕትርክና ለጳጳሳት በምርጫ የሚሰጡ የአስተዳደር ሹመቶች ናቸው። ፓትርያርክ ሊቀ ጳጳሳትም ይባላል፤ በአንድ ሲኖዶስ ላይ የበላይ ሆኖ የሚሾም የሁሉም አባት ነው። በሕዝብና በካህናት ከተመረጠ በኋላ በጳጳሳት ይሾማል፤ በመላዋ ቤተ ክርስቲያን በጸሎት ጊዜ ስሙ ይጠራል።",
          },
        },
      ],
    },
    {
      id: "lavere",
      tittel: { no: "De lavere tjenestene", am: "ሌሎች የቤተ ክርስቲያን አገልጋዮች" },
      ingress: {
        no: "Under diakonen har kirka noen tjenester som ikke er vigslet med håndspåleggelse, men med ord eller velsignelse. Fetha Negest sier at ingen skal bli prest uten først å være prøvd i fem tjenester: diakon, underdiakon, leser, sanger og dørvokter.",
        am: "ፍትሐ ነገሥት «ዐምስት ሰዎች ያልመሰከሩለት በዐምስት ግብራት ያልተፈተነ ማለትም በዲቁና፣ በንፍቅ ዲቁና፣ በአናጒንስጢስ፣ በመዘምር፣ በዓጻዌ ኆኅትነት ያልተፈተነ አንድስ እንኳ ቅስና አይሾም» ይላል።",
      },
      punkter: [
        {
          tekst: {
            no: "ንፍቀ ዲያቆን (underdiakon) hjelper diakonen i alt arbeidet hans, men rører ikke de hellige karene. Han blir innsatt med ord, uten håndspåleggelse.",
            am: "ንፍቀ ዲያቆን የዲያቆን ረዳት ነው፤ በሥራው ሁሉ ያግዘዋል እንጂ ንዋየ ቅድሳት አይነካም። በቃል ብቻ ይሾማል፤ አንብሮተ እድ አይደረግለትም።",
          },
        },
        {
          tekst: {
            no: "አናጉንስጢስ (leser) leser fra de hellige bøkene i kirka. Han blir valgt ut etter at kunnskapen og livet hans er prøvd, og innsatt med ord.",
            am: "አናጉንስጢስ አገልግሎቱ በቤተ ክርስቲያን ውስጥ መጻሕፍት ማንበብ ነው። ትምህርቱና ግብረ ገብነቱ ከታየ በኋላ ተመርጦ በቃል ብቻ ይሾማል።",
          },
          vers: ["Neh 8:8"],
        },
        {
          tekst: {
            no: "መዘምራን (sangerne) blir innsatt med velsignelse. De synger Davids salmer og den hellige Yareds hymner. Også ungdommene i søndagsskolen kalles መዘምራን.",
            am: "መዘምራን በቡራኬ ይሾማሉ፤ ከመዝሙረ ዳዊትና የቅዱስ ያሬድን ዝማሬ ይዘምራሉ። የሰንበት ትምህርት ቤት መንፈሳውያን ወጣቶችም መዘምራን ይባላሉ።",
          },
          vers: ["1Chr 15:16", "Col 3:16"],
        },
        {
          tekst: {
            no: "ዐጻዌ ኆኅት (dørvokteren) åpner og lukker kirkedørene. Han blir innsatt med ord.",
            am: "ዐጻዌ ኆኅት በቃል ብቻ ይሾማል፤ አገልግሎቱ የቤተ ክርስቲያንን በር መክፈትና መዝጋት ነው።",
          },
          vers: ["Ps 84:11"],
        },
        {
          tekst: {
            no: "Kirkas bøker nevner også diakonisser (ዲያቆናውያት): eldre kvinner som hjalp prestene i tjenesten for kvinner. De var ikke en del av ክህነት.",
            am: "የቤተ ክርስቲያን መጻሕፍት ዲያቆናውያትንም ይጠቅሳሉ፤ ከካህናቱ ወደ ሴቶች የሚላላኩ ሴቶች ናቸው። የካህናትን የክህነት ሥራ ግን አይሠሩም፤ አይባርኩም።",
          },
          vers: ["Rom 16:1", "1Tim 5:9"],
        },
      ],
    },
    {
      id: "gift",
      tittel: { no: "Gift prest eller munk", am: "ቅስና በሕግ ወይም በምንኩስና" },
      punkter: [
        {
          tekst: {
            no: "En gutt blir først diakon mens han er ugift. Mange blir diakoner som unge gutter, når de har lært det som trengs. Vil han bli prest og leve i ekteskap, gifter han seg først med ተክሊል, og etter vielsen blir han viet til prest.",
            am: "ዲቁና ከጋብቻ በፊት ይሰጣል፤ ብዙዎች ለዲቁና የሚያበቃውን ትምህርት ተምረው በልጅነታቸው ዲያቆናት ይሆናሉ። በድንግልና ካገለገለ በኋላ በተክሊል አግብቶ የቅስና መዓርግ ይቀበላል።",
          },
          vers: ["1Tim 3:12"],
        },
        {
          tekst: {
            no: "En prest skal være «én kvinnes mann», og han skal styre familien sin godt. Kirka krever at en prest er minst 30 år.",
            am: "ቄስ «የአንዲት ሚስት ባል» ሆኖ ቤተሰቡን በሚገባ የሚመራ ሊሆን ይገባዋል። ሠላሳ ዓመት ያልሆነው ቅስና አይሾምም።",
          },
          vers: ["1Tim 3:2-5", "Titus 1:6"],
          andre: [{ no: "Fetha Negest, kapittel 6", am: "ፍትሐ ነገሥት አንቀጽ ፮" }],
        },
        {
          tekst: {
            no: "Diakoner og prester kan bare gifte seg én gang. Dør kona, kan han ikke gifte seg igjen og fortsatt tjene som prest. Derfor må en diakon være ekstra varsom når han velger kone.",
            am: "በሕግ የተወሰኑ ዲያቆናትና ቀሳውስት ከአንድ ጊዜ በላይ ሚስት ማግባት አይችሉም። ሚስታቸው ብትሞት ሁለተኛ አግብተው በክህነት ማገልገል አይችሉም። ስለዚህ ዲያቆናት ሚስት በሚያጩበት ጊዜ ከምእመናን በተለየ ጥንቃቄ ማድረግ ይኖርባቸዋል።",
          },
          vers: ["1Tim 3:2"],
        },
        {
          tekst: {
            no: "Andre velger å bli munker. En munk kan også bli viet til prest. En munkeprest med lang og god tjeneste kalles ቆሞስ.",
            am: "በምንኩስና ለመኖር የፈለገ ወደ ገዳም ሄዶ ይመነኩሳል፤ መነኩሴም ማዕረገ ቅስናን ተቀብሎ ማገልገል ይችላል። በቆሞስነትም ያገለግላል።",
          },
          vers: ["1Cor 7:32-33"],
        },
        {
          tekst: {
            no: "Biskoper er alltid munker. En biskop blir valgt av Den hellige synode blant munkeprestene (ቆሞሳት): en som har levd i renhet uten å gifte seg, som er lærd og har et godt liv, og som er over 50 år.",
            am: "ጳጳስ ሳያገባ በድንግልና የመነኮሰ ነው። ከቆሞሳት መካከል በትምህርቱና በትሩፋቱ ልቆ የተገኘ፣ ዕድሜው ከኀምሳ ዓመት በላይ የሆነ አባት በሲኖዶስ ተመርጦ ይሾማል።",
          },
          vers: ["1Tim 3:1-7"],
        },
        {
          tekst: {
            no: "En biskop blir vigslet på en søndag. Biskopene legger hendene på ham og gir ham et kors. Korset betyr at han skal bære lidelse for Kristus. Det feires i tre dager, et bilde på de tre dagene Jesus lå i graven.",
            am: "ኤጲስ ቆጶስ የሚሾመው እሑድ ቀን ነው። በአንብሮተ እድ ይሾሙታል፤ መስቀልም ይሰጡታል፤ መስቀል መስጠታቸው መከራ ትቀበላለህ ሲሉ ነው። ለሦስት ቀን በዓል ይከበራል፤ ይህም ጌታችን ሦስት ቀን በመቃብር የማደሩ ምሳሌ ነው።",
          },
          vers: ["Matt 16:24"],
        },
      ],
    },
    {
      id: "debtera",
      tittel: { no: "Ordinerte og ደባትር", am: "ካህናትና ደባትር" },
      punkter: [
        {
          tekst: {
            no: "I kirka finnes to slags tjenere. De ordinerte (biskop, prest og diakon) har fått ክህነት ved håndspåleggelse og feirer ቅዳሴ. ደባትር (entall ደብተራ) er lærde kirkesangere. De synger hymnene før og etter ቅዳሴ og ved ማኅሌት.",
            am: "በቤተ ክርስቲያን ሁለት ዓይነት አገልጋዮች አሉ። ጳጳሳት፣ ቀሳውስትና ዲያቆናት በአንብሮተ እድ ክህነት ተቀብለው ይቀድሳሉ። ደባትር ደግሞ ከቅዳሴ በፊትና በኋላ፣ በማኅሌትም የሚያዜሙ የዜማ ሊቃውንት ናቸው።",
          },
        },
        {
          tekst: {
            no: "Tjenesten til ደባትር kan sammenlignes med levittene som var sangere i templet. Kong David satte levittene til å synge med harpe, lyre og cymbaler.",
            am: "የደባትር አገልግሎት በቤተ መቅደስ መዘምራን ከነበሩት ከሌዋውያን ጋር ይመሳሰላል። ዳዊት ሌዋውያን በመሰንቆና በበገና በጸናጽልም እንዲያዜሙ መዘምራንን ሾመ።",
          },
          vers: ["1Chr 15:16", "2Sam 6:5"],
        },
        {
          tekst: {
            no: "Å være ደብተራ er ikke et trinn i ክህነት. En ደብተራ kan ikke feire ቅዳሴ, døpe eller ta imot skriftemål, hvis han ikke også er viet til diakon eller prest. Mange er både det ene og det andre, og tjener da på begge måter.",
            am: "ደብተራነት የክህነት መዓርግ አይደለም። ክህነት የሌለው ደብተራ አይቀድስም፣ አያጠምቅም፣ ንስሐ አይቀበልም። ዲቁና ወይም ቅስና ያላቸው ግን በማኅሌትም በክህነታቸውም ማገልገል ይችላሉ።",
          },
        },
        {
          tekst: {
            no: "መሪጌታ er en æresbetegnelse for en lærd leder i kirkesangen. Heller ikke det er et trinn i ክህነት.",
            am: "መሪጌታ በዜማ የበቃ መሪ መምህር የሚጠራበት የክብር ስም ነው፤ እርሱም የክህነት መዓርግ አይደለም።",
          },
        },
      ],
    },
    {
      id: "respekt",
      tittel: { no: "Hvordan vi viser respekt for prestene", am: "ካህናትን እንዴት እናከብራለን?" },
      punkter: [
        {
          tekst: {
            no: "Paulus skriver: «De eldste som leder godt, skal regnes verdige til dobbel ære, særlig de som arbeider med å forkynne og lære.»",
            am: "ቅዱስ ጳውሎስ «በመልካም የሚያስተዳድሩ ሽማግሌዎች፥ ይልቁንም በመስበክና በማስተማር የሚደክሙት፥ እጥፍ ክብር ይገባቸዋል» ይላል።",
          },
          vers: ["1Tim 5:17"],
        },
        {
          tekst: {
            no: "Vi lytter til prestene og følger rådene deres, for de våker over sjelene våre og skal stå til ansvar for dem. Vi skal sette dem høyt og elske dem for arbeidet deres skyld.",
            am: "ለዋኖቻችን እንታዘዛለን፤ ስለ ነፍሳችን ይተጋሉና። ስለ ሥራቸውም በፍቅር እጅግ እናከብራቸዋለን።",
          },
          vers: ["Heb 13:17", "1Thess 5:12-13"],
        },
        {
          tekst: {
            no: "Når vi møter en prest, bøyer vi oss og ber om velsignelse, og vi kysser korset han velsigner med (መሳለም).",
            am: "ካህን ስናገኝ ሰላምታ ሰጥተን ቡራኬ እንለምናለን፤ የሚባርክበትንም መስቀል እንሳለማለን።",
          },
          vers: ["Num 6:23-27"],
        },
        {
          tekst: {
            no: "Vi taler ikke stygt om prestene og dømmer dem ikke. Nåden i sakramentene kommer fra Gud, ikke fra hvor god presten er. Vi ber heller for dem, slik Paulus ba menighetene be for ham.",
            am: "ካህናትን አንሰድብም፤ አንፈርድባቸውም። የምሥጢራቱ ጸጋ ከእግዚአብሔር ነው እንጂ ከካህኑ ደግነት አይደለም። ቅዱስ ጳውሎስ ምእመናን እንዲጸልዩለት እንደ ለመነ እኛም እንጸልይላቸዋለን።",
          },
          vers: ["Exod 22:28", "1Cor 3:7", "Eph 6:18-19"],
        },
        {
          tekst: {
            no: "Presten er også under Guds lov. Han må aldri fortelle det han har hørt i skriftemålet. Lever han ikke slik han skal, blir han dømt etter kirkas regler, og han kan bli avsatt.",
            am: "ካህኑም የንስሐ ልጆቹን ምሥጢር የሚጠብቅ መሆን አለበት። በሥርዓቱ ካልኖረ በቀኖና ቤተ ክርስቲያን ከሥልጣነ ክህነቱ ይሻራል።",
          },
          vers: ["1Tim 5:19-20"],
        },
      ],
    },
    {
      id: "kall",
      tittel: { no: "Kall og kirkeskolen", am: "ጥሪና የአብነት ትምህርት" },
      punkter: [
        {
          tekst: {
            no: "Ingen tar seg selv denne æren. Gud kaller. Samuel tjente Herren i templet allerede som gutt, og Gud kalte ham ved navn om natten. Han svarte: «Tal, Herre, din tjener hører.»",
            am: "ማንም ክብሩን ለራሱ አይወስድም፤ የሚጠራው እግዚአብሔር ነው። ብላቴናው ሳሙኤል በዔሊ ፊት እግዚአብሔርን ያገለግል ነበር፤ እግዚአብሔርም በሌሊት በስሙ ጠራው።",
          },
          vers: ["Heb 5:4", "1Sam 3:1", "1Sam 3:10"],
        },
        {
          tekst: {
            no: "Den som vil bli diakon, må lære å lese ge'ez, lære ውዳሴ ማርያም og Davids salmer (ዳዊት) utenat, og lære ቅዳሴ og ሰዓታት. Dette lærer man i kirkeskolen (አብነት ትምህርት ቤት) og i søndagsskolen.",
            am: "ለዲቁና የሚያበቃው የንባብ ትምህርቶችን ያጠናቀቀ፣ ውዳሴ ማርያምንና ዳዊትን የጨረሰ፣ ቅዳሴና ሰዓታት የተማረ ነው። ይህም በአብነት ትምህርት ቤትና በሰንበት ትምህርት ቤት ይማራል።",
          },
          vers: ["2Tim 3:14-15"],
        },
        {
          tekst: {
            no: "Den som skal bli prest, må i tillegg kjenne Det gamle og Det nye testamentet, særlig de fire evangeliene. En biskop må ha enda mer kunnskap.",
            am: "ለቅስና ከዲቁናው በተጨማሪ ብሉያትንና ሐዲሳትን የተማረ፣ ይልቁንም አራቱን ወንጌላት ያወቀ ሊሆን ይገባዋል። ለጵጵስና ደግሞ ከዚህ የበለጠ ትምህርት ያስፈልጋል።",
          },
          vers: ["1Tim 4:13", "Titus 1:9"],
          andre: [{ no: "Fetha Negest, kapittel 6 og 8", am: "ፍትሐ ነገሥት አንቀጽ ፮ና ፰" }],
        },
        {
          tekst: {
            no: "En god tjener er ikke en leiekar som arbeider for lønn, men en god hyrde som elsker sauene og gir livet sitt for dem.",
            am: "ጥሩ አገልጋይ ስለ ደመወዝ ብቻ የሚሠራ ምንደኛ ሳይሆን በጎቹን የሚወድና ነፍሱን ስለ በጎቹ የሚሰጥ መልካም እረኛ ነው።",
          },
          vers: ["John 10:11-12", "1Pet 5:2-4"],
        },
        {
          tekst: {
            no: "Også her i Norge trenger kirka diakoner, sangere og lærere. Mange menn og kvinner lærer kirkas bønner og sanger slik at de kan tjene. Kjenner du et kall, snakk med skriftefaren din og begynn å lære.",
            am: "በውጭ ሀገርም ቤተ ክርስቲያን ዲያቆናትን፣ መዘምራንንና መምህራንን ትፈልጋለች። ብዙ ምእመናንና ምእመናት ለማገልገል ተግተው ይማራሉ። ጥሪ ቢሰማህ ከንስሐ አባትህ ጋር ተነጋገር፤ መማርም ጀምር።",
          },
          vers: ["Matt 9:37-38"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Fetha Negest om biskopen", am: "ፍትሐ ነገሥት ስለ ኤጲስ ቆጶስ" },
      tekst: {
        no: "«Biskop, hold deg ren i alt du gjør. Vit at embetet ditt er godt. Blant folket er du i Guds sted, et bilde på Gud. … Sitt i forsamlingen og lær evangeliet, for du har myndighet til å dømme synderne.»",
        am: "«ኤጲስ ቆጶስ ሆይ በምትሠራው ሥራ ሁሉ ሰውነትህን በንጽሕና አጽና። ሹመትህ ደግ እንደሆነ ዕወቅ በሕዝቡ ዘንድ በሹመትህ እንደ እግዚአብሔር ነህና የእግዚአብሔር ምሳሌ ነህና። … በጉባኤ ተቀምጠህ ወንጌልን አስተምር በኀጥአን ትፈርድ ዘንድ ሥልጣን አለህና።»",
      },
      kilde: "ፍትሐ ነገሥት አንቀጽ ፭ (sitert i መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን, 8. klasse, kap. 6)",
    },
    {
      navn: { no: "Apostlenes lære (Didaskalia)", am: "ዲድስቅልያ" },
      tekst: {
        no: "Den som blir biskop, skal være en vokter for de troende, uten skyld, ren og god, uten bekymring for denne verdens ting, minst 50 år gammel og forbi ungdommens krefter, og han skal ikke tale usant blant brødrene.",
        am: "«ለአብያተ ክርስቲያናት ሁሉ ኤጲስ ቆጶስ ሆኖ የሚሾመው የምእመናን ጠባቂ፣ ነውር የሌለበት፣ ንጹሕና ቸር፣ የዚህንም ዓለም ጭንቀት የማያስብ፣ ፶ ዓመት የሞላው፣ የጎልማሳነት ኀይልን ያለፈ፣ … በወንድሞችም መካከል ሐሰትን የማይናገር ይሆን ዘንድ እንደሚገባው … ሰማን።»",
      },
      kilde: "ዲድስቅልያ ፬፥፩ (sitert i መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን, 8. klasse, kap. 6)",
    },
    {
      navn: { no: "Fetha Negest om presten", am: "ፍትሐ ነገሥት ስለ ቄስ" },
      tekst: {
        no: "«Ingen skal vigsles til prest som ikke kjenner Guds gode bøker, særlig de fire evangeliene, og som ikke fem mennesker har gitt et godt vitnesbyrd om, og som ikke er prøvd i de fem tjenestene.»",
        am: "«መልካም የሆኑትን የአምላክን መጻሕፍት ነገር፣ ይልቁንም አራቱን ወንጌላት ያላወቀ አንድስ እንኳ ቅስና አይሾም፤ ዐምስት ሰዎች ያልመሰከሩለት በዐምስት ግብራት ያልተፈተነ … አንድስ እንኳ ቅስና አይሾም።»",
      },
      kilde: "ፍትሐ ነገሥት ፮ (sitert i መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን, 8. klasse, kap. 6)",
    },
    {
      navn: { no: "Fetha Negest om diakonene", am: "ፍትሐ ነገሥት ስለ ዲያቆናት" },
      tekst: {
        no: "«Diakonene skal gjøre gode gjerninger dag og natt, på alle steder.»",
        am: "«ዲያቆናት መልካም ሥራን በመዓልትም በሌሊትም በቦታው ሁሉ የሚሠሩ ይሁኑ።»",
      },
      kilde: "ፍትሐ ነገሥት ፯ (sitert i መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን, 8. klasse, kap. 6)",
    },
    {
      navn: { no: "Apostlenes ordninger", am: "ሥርዓተ ሐዋርያት" },
      tekst: {
        no: "«Diakonen er biskopens øyne og ører.»",
        am: "«ዲያቆን የኤጲስ ቆጶሱ ዓይንና ጆሮ ነው።»",
      },
      kilde: "Orders of the Apostles, sitert i ethiopianorthodox.org: The Sacrament of the Holy Orders",
    },
  ],
  ord: [
    { ord: "ክህነት", forklaring: { no: "prestetjeneste, prestevigsel (av ተክህነ, å tjene)", am: "አገልግሎት" } },
    { ord: "ካህን · ካህናት", forklaring: { no: "tjener, prest · prester", am: "የእግዚአብሔር አገልጋይ" } },
    { ord: "ዲያቆን · ዲቁና", forklaring: { no: "diakon · diakontjenesten", am: "ረዳት፣ ተላላኪ" } },
    { ord: "ቄስ · ቅስና · ቀሳውስት", forklaring: { no: "prest · prestetjenesten · prester", am: "ቀሲስ" } },
    { ord: "ኤጲስ ቆጶስ · ጳጳስ · ጵጵስና", forklaring: { no: "biskop · bispetjenesten", am: "ሊቀ ካህናት" } },
    { ord: "ሊቀ ጳጳስ", forklaring: { no: "erkebiskop", am: "የጳጳሳት አለቃ" } },
    { ord: "ፓትርያርክ", forklaring: { no: "patriark, far for hele kirka og leder av synoden", am: "ሊቀ ጳጳሳት" } },
    { ord: "ቅዱስ ሲኖዶስ", forklaring: { no: "Den hellige synode, møtet av alle biskopene", am: "የጳጳሳት ጉባኤ" } },
    { ord: "አንብሮተ እድ", forklaring: { no: "håndspåleggelse", am: "እጅ መጫን" } },
    { ord: "ቆሞስ", forklaring: { no: "munkeprest; biskoper velges blant dem", am: "መነኩሴ ካህን" } },
    { ord: "ደብተራ · ደባትር", forklaring: { no: "lærd kirkesanger · kirkesangere", am: "የዜማ ሊቅ" } },
    { ord: "አብነት ትምህርት ቤት", forklaring: { no: "den tradisjonelle kirkeskolen", am: "የቤተ ክርስቲያን ትምህርት ቤት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet ክህነት?", am: "«ክህነት» ማለት ምን ማለት ነው?" },
      svar: {
        no: "Det kommer av ge'ez ተክህነ, å tjene. ካህን betyr tjener.",
        am: "«ተክህነ» (አገለገለ) ከሚለው ግሥ የተገኘ ነው፤ ካህን ማለት አገልጋይ ማለት ነው።",
      },
    },
    {
      sporsmal: { no: "Hvem innstiftet ክህነት, og hvordan?", am: "ምሥጢረ ክህነትን የመሠረተው ማን ነው? እንዴት?" },
      svar: {
        no: "Jesus. Han valgte de tolv apostlene (Luk 6,13), blåste på dem og ga dem Den hellige ånd og makt til å tilgi synder (Joh 20,21–23).",
        am: "ጌታችን ኢየሱስ ክርስቶስ። ዐሥራ ሁለቱን ሐዋርያት መረጠ (ሉቃ 6፥13)፤ እፍ ብሎባቸው መንፈስ ቅዱስንና ኃጢአትን ይቅር የማለት ሥልጣን ሰጣቸው (ዮሐ 20፥21–23)።",
      },
    },
    {
      sporsmal: { no: "Hva er de tre trinnene i ክህነት?", am: "ሦስቱ የክህነት መዓርጋት ምንድን ናቸው?" },
      svar: {
        no: "Diakon (ዲቁና), prest (ቅስና) og biskop (ጵጵስና). Erkebiskop og patriark er oppgaver for biskoper, ikke nye trinn.",
        am: "ዲቁና፣ ቅስናና ጵጵስና። ሊቀ ጵጵስናና ፕትርክና ለጳጳሳት የሚሰጡ ሹመቶች እንጂ ሌላ መዓርግ አይደሉም።",
      },
    },
    {
      sporsmal: { no: "Hvordan blir noen viet til ክህነት?", am: "ክህነት እንዴት ይሰጣል?" },
      svar: {
        no: "Ved at biskopen ber og legger hendene på ham (አንብሮተ እድ), slik apostlene gjorde (Apg 6,6; 2 Tim 1,6). Ingen skal betale for det.",
        am: "በጳጳሱ ጸሎትና በአንብሮተ እድ፤ ሐዋርያት እንዳደረጉት (ሐዋ 6፥6፤ 2ኛ ጢሞ 1፥6)። ለሹመት ገንዘብ አይከፈልም።",
      },
    },
    {
      sporsmal: { no: "Kan en prest gifte seg, og kan en biskop?", am: "ቄስ ያገባል? ጳጳስስ?" },
      svar: {
        no: "En prest gifter seg før han blir viet til prest, og bare én gang. En biskop er alltid munk og har aldri vært gift.",
        am: "ቄስ ከቅስና በፊት አንድ ጊዜ ብቻ ያገባል። ጳጳስ ግን ሳያገባ በድንግልና የመነኮሰ ነው።",
      },
    },
    {
      sporsmal: { no: "Hva er forskjellen på en prest og en ደብተራ?", am: "በቄስና በደብተራ መካከል ያለው ልዩነት ምንድን ነው?" },
      svar: {
        no: "Presten er viet med håndspåleggelse og kan feire ቅዳሴ og utføre sakramentene. En ደብተራ er en lærd kirkesanger. Han er ikke viet til ክህነት, med mindre han også er diakon eller prest.",
        am: "ቄስ በአንብሮተ እድ ተሹሞ ይቀድሳል፤ ምሥጢራትንም ይፈጽማል። ደብተራ ግን የዜማ ሊቅ ነው፤ ዲቁና ወይም ቅስና ከሌለው ክህነት የለውም።",
      },
    },
  ],
  kilder: [
    { navn: "መሠረተ ሃይማኖት – ሥርዓተ ቤተ ክርስቲያን, 8. klasse (søndagsskolepensum), kap. 6: ምሥጢረ ክህነት", url: "https://www.scribd.com/document/1036651354/g8-Meserete-Haymanot-Srat-Snemgbar-24" },
    { navn: "Debre Mitmaq Kidist Mariam and Kidus Michael EOTC: 7ቱ ምሥጢራተ ቤተ ክርስቲያን (ምሥጢረ ክህነት)" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of the Holy Orders", url: "https://www.ethiopianorthodox.org/english/dogma/sacraorders.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Liturgy of the Ethiopian Church, innledning (om ordinerte og ደባትር)", url: "https://www.ethiopianorthodox.org" },
    { navn: "ማኅበረ ቅዱሳን: የጋብቻ ሕይወት እና የሩካቤ ሥርዓት – ክፍል ፭ (om diakoner og prester som bare gifter seg én gang)", url: "https://eotcmk.org/a/%E1%8B%A8%E1%8C%8B%E1%89%A5%E1%89%BB-%E1%88%95%E1%8B%AD%E1%8B%88%E1%89%B5-%E1%8A%A5%E1%8A%93-%E1%8B%A8%E1%88%A9%E1%8A%AB%E1%89%A4-%E1%88%A5%E1%88%AD%E1%8B%93%E1%89%B5-%E1%8A%AD%E1%8D%8D-5/" },
  ],
  utkast: true,
};
