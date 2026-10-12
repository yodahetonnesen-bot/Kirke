import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om fastene:
// Mahibere Kidusan (eotcmk.org): «ሥርዓተ አምልኮ – ክፍል ሁለት» (ሥርዓተ ጾም, sitatet fra ማር ይስሐቅ og ፍትሐ ነገሥት),
// «ዐቢይ ጾም» (navnene, ጾመ ሕርቃል, ቅዱስ ያሬድ og ሠለስቱ ምዕት), «ጾመ ነቢያት» (ስብከት, ብርሃን, ኖላዊ og ጾመ ገሃድ, med
// ሐዋርያት-kanonen i ፍትሐ ነገሥት), «ጾመ ሐዋርያት እና ጾመ ድኅነት», «ጾመ ፍልሰታ» (fra ስንክሳር ነሐሴ ፲፮), «ጾመ ሰብአ ነነዌ»,
// og barnesidene «የዐቢይ ጾም ሳምንታት (ለሕፃናት)» del 1–4 (eotcmk.org og eu.eotcmk.org);
// ethiopianorthodox.org: «Worship in the Ethiopian Orthodox Church» (Sergew Hable Sellassie og Taddesse Tamrat:
// hva man ikke spiser, når man spiser, unntakene) og «Calendar» (datoene);
// søndagsskoleboka for 8. klasse (መሠረተ ሃይማኖት፣ ሥርዓትና ሥነ ምግባር), om å faste for rettferdighetens skyld.
// Usikkert: Tiden på dagen. ethiopianorthodox.org sier «ikke før middag, tidligst», og i den stille uka til kl. 13 eller
// senere. ፍትሐ ነገሥት (sitert av eotcmk.org) nevner å faste «til den niende timen» (kl. 15). Mange faster til ፱ ሰዓት i
// ዐቢይ ጾም og til ፮ ሰዓት ellers, men det fant vi ikke uttrykkelig i kildene. Skriftefaren bør avgjøre.
// Usikkert: ጾመ ሐዋርያት er 15–49 dager etter vår utregning (fra mandagen etter pinse til ሐምሌ 4). ethiopianorthodox.org
// sier 14–44. ጾመ ነቢያት er 43 eller 44 dager (ethiopianorthodox.org sier 43).
// Usikkert: ethiopianorthodox.org (eldre engelsk tekst) sier at ጾመ ሐዋርያት og ጾመ ነቢያት bare er påbudt for prester.
// Mahibere Kidusan lærer at alle fra sju år skal faste alle sju fastene. Siden følger Mahibere Kidusan.
// Usikkert: Avsnittet «Faste i Norge» er praktiske råd skrevet ut fra kirkas regler, ikke fra en kirkelig kilde.
export const fastene: Tema = {
  slug: "fastene",
  del: "faste",
  tittel: { no: "Fastene", am: "አጽዋማት" },
  undertittel: { no: "De sju fastene i kirkeåret – og hvorfor vi faster", am: "ሰባቱ የዐዋጅ አጽዋማትና የምንጾምበት ምክንያት" },
  bilde: "korsfestelsen",
  ingress: {
    no:
      "Å faste betyr å holde seg borte fra mat og drikke en tid, og å la være å spise visse typer mat. Jesus fastet selv i 40 dager, og han lærte oss hvordan vi skal faste. Kirka har sju faster i året. Vi faster sammen med bønn, ስግደት (å bøye seg ned til jorda) og ምጽዋት (å gi til de fattige).",
    am:
      "ጾም ለተወሰነ ጊዜ ከምግብና ከመጠጥ መከልከል፣ አንዳንድ ምግቦችንም መተው ነው። ጌታችን ራሱ አርባ ቀን ጾሟል፤ እንዴት መጾም እንዳለብንም አስተምሮናል። ቤተ ክርስቲያናችን በዓመት ሰባት የዐዋጅ አጽዋማት አሏት። ጾምን ከጸሎት፣ ከስግደትና ከምጽዋት ጋር እንጾማለን።",
  },
  hovedvers: "Matt 4:2",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er faste?", am: "ጾም ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ጾም kommer fra ge'ez-ordet ጾመ, som betyr å la være, å holde tilbake, å vokte. Å faste er å si nei til mat, drikke og andre ting kroppen ønsker, i en bestemt tid.",
            am: "«ጾም» ከግእዝ ግሥ «ጾመ» የተገኘ ቃል ነው፤ ትርጉሙም «መተው፣ መከልከል፣ መጠበቅ» ማለት ነው። ጾም ለተወሰነ ጊዜና ሰዓት ሥጋችን ከሚፈልጋቸው መብል፣ መጠጥና ሥጋዊ ፍላጎት መከልከል ነው።",
          },
          andre: [
            {
              no: "ፍትሐ ነገሥት 15: Faste er at et menneske holder seg borte fra mat på en kjent dag og til en kjent tid.",
              am: "ፍትሐ ነገሥት አንቀጽ ፲፭፦ «ጾም በታወቀው ዕለት በታወቀው ሰዓት ሰው ከምግብ የሚከለከለው መከልከል ነው።»",
            },
          ],
        },
        {
          tekst: {
            no: "Faste er ikke bare å være sulten. Vi faster for å komme nærmere Gud, for å angre syndene våre og for at kroppen skal lyde sjelen.",
            am: "ጾም መራብ ብቻ አይደለም። ወደ እግዚአብሔር ለመቅረብ፣ ከኃጢአታችን ንስሐ ለመግባትና ሥጋ ለነፍስ እንዲገዛ እንጾማለን።",
          },
          vers: ["Joel 2:12"],
        },
        {
          tekst: {
            no: "Faste er et bud fra Gud, ikke bare noe vi kan velge. Profeten Joel sa: «Hellige en faste!» Apostlene fastet, og kirka har bestemt hvilke dager vi faster.",
            am: "ጾም የፈቃድ ብቻ ሳይሆን የእግዚአብሔር ትእዛዝ ነው። ነቢዩ ኢዩኤል «ጾምን ቀድሱ» ብሏል። ሐዋርያት ጾመዋል፤ ቤተ ክርስቲያንም የምንጾምባቸውን ቀናት ወስናለች።",
          },
          vers: ["Joel 1:14", "Acts 13:2-3"],
        },
      ],
    },
    {
      id: "bibelen",
      tittel: { no: "Faste i Bibelen", am: "ጾም በመጽሐፍ ቅዱስ" },
      ingress: {
        no: "Fra Moses til apostlene fastet Guds folk når de ville møte Gud, angre eller be om hjelp.",
        am: "ከሙሴ ጀምሮ እስከ ሐዋርያት ድረስ የእግዚአብሔር ሰዎች እግዚአብሔርን ለማግኘት፣ ንስሐ ለመግባትና ርዳታ ለመለመን ጾመዋል።",
      },
      punkter: [
        {
          tekst: {
            no: "Moses var på fjellet hos Herren i 40 dager og 40 netter uten å spise brød eller drikke vann. Da fikk han de ti bud.",
            am: "ሙሴ በተራራው ላይ ከእግዚአብሔር ጋር አርባ ቀንና አርባ ሌሊት እንጀራ ሳይበላ ውኃም ሳይጠጣ ቆየ፤ ዐሥርቱ ቃላትንም ተቀበለ።",
          },
          vers: ["Exod 34:28"],
        },
        {
          tekst: {
            no: "Daniel fastet i tre uker. Han spiste ikke god mat, ikke kjøtt og drakk ikke vin. Som ung spiste han bare grønnsaker og drakk vann.",
            am: "ዳንኤል ሦስት ሳምንት ጾመ፤ ያማረ እንጀራ፣ ሥጋና ወይን አልቀመሰም። በወጣትነቱም አትክልት ብቻ በልቶ ውኃ ይጠጣ ነበር።",
          },
          vers: ["Dan 10:2-3", "Dan 1:12"],
        },
        {
          tekst: {
            no: "Dronning Ester fastet i tre dager for å redde folket sitt fra døden.",
            am: "ንግሥት አስቴር ሕዝቧን ከሞት ለማዳን ሦስት ቀን ጾመች።",
          },
          vers: ["Esth 4:16"],
        },
        {
          tekst: {
            no: "Folket i Ninive fastet og vendte om fra det onde da profeten Jona preket for dem. Da sparte Gud byen.",
            am: "ነቢዩ ዮናስ ሲሰብክላቸው የነነዌ ሰዎች ጾመው ከክፋታቸው ተመለሱ፤ እግዚአብሔርም ከተማይቱን ማረ።",
          },
          vers: ["Jonah 3:5-10"],
        },
        {
          tekst: {
            no: "Jesus fastet 40 dager og 40 netter i ørkenen etter dåpen sin, før han begynte å forkynne. Han viste oss at faste er begynnelsen på alt godt arbeid.",
            am: "ጌታችን ከተጠመቀ በኋላ ወንጌልን ከመስበኩ በፊት በገዳም አርባ ቀንና አርባ ሌሊት ጾመ። ጾም የምግባር መሠረት መሆኑን አስተማረን።",
          },
          vers: ["Matt 4:1-2"],
        },
        {
          tekst: {
            no: "Jesus sa at disiplene skulle faste når brudgommen var tatt fra dem. Etter at Jesus hadde fart opp til himmelen, fastet apostlene før de sendte ut Barnabas og Paulus.",
            am: "ጌታችን «ሙሽራው ከእነርሱ የሚወሰድበት ጊዜ ይመጣል፤ ያን ጊዜ ይጾማሉ» አለ። ከዕርገቱም በኋላ ሐዋርያት በርናባስንና ጳውሎስን ከመላካቸው በፊት ጾሙ።",
          },
          vers: ["Matt 9:15", "Acts 13:2-3", "Acts 14:23"],
        },
      ],
    },
    {
      id: "hvordan",
      tittel: { no: "Hva spiser vi, og når?", am: "በጾም ምን እንበላለን? መቼ?" },
      punkter: [
        {
          tekst: {
            no: "I fastetiden spiser vi ikke mat fra dyr: kjøtt, melk, smør og egg. Kirka kaller slik mat ጥሉላት. Vi spiser mat fra planter, som grønnsaker, belgfrukter, korn, frukt og olje.",
            am: "በጾም ወራት ጥሉላት የሚባሉትን ከእንስሳት የሚገኙ ምግቦች አንበላም፤ ሥጋ፣ ወተት፣ ቅቤና እንቁላል። ከዕፀዋት የሚገኙ ምግቦችን እንበላለን፤ አትክልት፣ ጥራጥሬ፣ ፍራፍሬና ዘይት።",
          },
          vers: ["Dan 10:3"],
        },
        {
          tekst: {
            no: "Vi spiser og drikker ingenting om morgenen. På en fastedag venter vi til middag eller senere før vi spiser, og da spiser vi enkelt. Kirka teller timene fra soloppgang: ፮ ሰዓት er midt på dagen, og ፱ ሰዓት er tre timer senere.",
            am: "በጾም ቀን ጠዋት አንበላም አንጠጣም። ቢያንስ እስከ ቀትር ወይም ከዚያ በላይ እንቆያለን፤ ስንበላም በቀላሉ እንመገባለን። ቤተ ክርስቲያን ሰዓቱን ከፀሐይ መውጫ ትቈጥራለች፤ ፮ ሰዓት ቀትር ነው፤ ፱ ሰዓት ደግሞ ከዚያ ሦስት ሰዓት በኋላ ነው።",
          },
        },
        {
          tekst: {
            no: "I den stille uka (ሰሙነ ሕማማት) før påske faster vi lenger. Noen faster helt fra langfredag til påskenatta. Fasten blir brutt med glede etter påskenattens gudstjeneste.",
            am: "በሰሙነ ሕማማት አብዝተን እንጾማለን። አንዳንዶች ከስቅለት እስከ ትንሣኤ ሌሊት ድረስ ምንም ሳይቀምሱ ይጾማሉ። ጾሙ ከትንሣኤ ሌሊት ቅዳሴ በኋላ በደስታ ይፈታል።",
          },
        },
        {
          tekst: {
            no: "Lørdag og søndag er hellige dager. Da faster vi ikke til middag, heller ikke i ዐቢይ ጾም. Men i fastetiden spiser vi fortsatt ikke ጥሉላት. Det eneste unntaket er ቀዳም ሥዑር, lørdagen før påske, som er en fastedag.",
            am: "ቅዳሜና እሑድ ሰንበታት ናቸው፤ በዐቢይ ጾምም ቢሆን እስከ ቀትር አንጾምባቸውም። በጾም ወራት ግን ጥሉላት አንበላም። ከዚህ የሚለየው የሚጾመው የትንሣኤ ዋዜማ ቀዳም ሥዑር ብቻ ነው።",
          },
          vers: ["Exod 20:8-10"],
        },
        {
          tekst: {
            no: "Før nattverden faster vi alltid, også utenom fastetidene.",
            am: "ሥጋውንና ደሙን ከመቀበላችን በፊት ሁልጊዜ እንጾማለን፤ ከአጽዋማት ውጪም ቢሆን።",
          },
        },
      ],
    },
    {
      id: "hvorfor",
      tittel: { no: "Hvorfor faster vi?", am: "ለምን እንጾማለን?" },
      punkter: [
        {
          tekst: {
            no: "Fordi Jesus fastet og sa at vi skal faste. Han sa ikke «hvis dere faster», men «når dere faster».",
            am: "ጌታችን ስለ ጾመና «ጹሙ» ስላለን ነው። «ብትጾሙ» ሳይሆን «በምትጾሙበት ጊዜ» ብሏል።",
          },
          vers: ["Matt 6:16", "Matt 4:2"],
        },
        {
          tekst: {
            no: "For å angre syndene våre og vende om til Gud, slik folket i Ninive gjorde. Gud tilgir den som angrer.",
            am: "እንደ ነነዌ ሰዎች ከኃጢአታችን ንስሐ ገብተን ወደ እግዚአብሔር ለመመለስ ነው። እግዚአብሔር ንስሐ የሚገባውን ይቅር ይላል።",
          },
          vers: ["Joel 2:12-13", "Jonah 3:10"],
        },
        {
          tekst: {
            no: "For å gjøre kroppens lyster svakere, så kroppen lyder sjelen. Faste hjelper oss også mot fristelser fra djevelen.",
            am: "የሥጋን ፍላጎት ለማድከምና ሥጋ ለነፍስ እንዲገዛ ነው። ጾም ከዲያብሎስ ፈተናም ለማለፍ ይረዳናል።",
          },
          vers: ["1Cor 9:27", "Matt 4:3-4"],
        },
        {
          tekst: {
            no: "For å forberede oss til høytidene. Hver faste fører fram til en fest: ጾመ ነቢያት til jul, ዐቢይ ጾም til påske og ጾመ ፍልሰታ til Marias fest.",
            am: "ለበዓላት ለመዘጋጀት ነው። እያንዳንዱ ጾም ወደ በዓል ያደርሳል፤ ጾመ ነቢያት ወደ ልደት፣ ዐቢይ ጾም ወደ ትንሣኤ፣ ጾመ ፍልሰታ ወደ እመቤታችን በዓል።",
          },
        },
        {
          tekst: {
            no: "Vi faster ikke for å bli sett. Jesus sa at vi skal vaske ansiktet og ikke vise fram at vi faster. Faderen som ser i det skjulte, skal lønne oss.",
            am: "የምንጾመው ለሰው ለመታየት አይደለም። ጌታችን ፊታችንን እንድንታጠብና መጾማችንን ለሰው እንዳናሳይ አዘዘን፤ በስውር የሚያይ አባታችን ዋጋችንን ይሰጠናል።",
          },
          vers: ["Matt 6:16-18"],
        },
      ],
    },
    {
      id: "sju",
      tittel: { no: "De sju fastene", am: "ሰባቱ አጽዋማት" },
      ingress: {
        no: "Kirka kaller dem «de sju kunngjorte fastene» (ሰባቱ የዐዋጅ አጽዋማት). Datoene for ጾመ ነነዌ, ዐቢይ ጾም, ጾመ ሐዋርያት og ጾመ ድኅነት flytter seg med påsken og regnes ut med ባሕረ ሐሳብ.",
        am: "«ሰባቱ የዐዋጅ አጽዋማት» ይባላሉ። የጾመ ነነዌ፣ የዐቢይ ጾም፣ የጾመ ሐዋርያትና የጾመ ድኅነት ቀናት ከትንሣኤ ጋር ስለሚለዋወጡ በባሕረ ሐሳብ ይቈጠራሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "1. ጾመ ነቢያት (profetfasten) varer fra ኅዳር 15 til ታኅሣሥ 28, dagen før jul – 43 eller 44 dager. Profetene fastet og ba i mange hundre år om at Frelseren skulle komme. Vi faster og venter på jula sammen med dem. Fasten kalles også ጾመ ስብከት.",
            am: "፩. ጾመ ነቢያት ከኅዳር ፲፭ እስከ ታኅሣሥ ፳፰ (የልደት ዋዜማ) ይጾማል። ነቢያት «ውረድ ተወለድ» እያሉ መድኃኒት እንዲመጣ ጾመው ጸልየዋል፤ እኛም ከእነርሱ ጋር ልደቱን እየተጠባበቅን እንጾማለን። «ጾመ ስብከት» ይባላልም።",
          },
          vers: ["Isa 64:1", "Ps 80:2"],
        },
        {
          tekst: {
            no: "2. ጾመ ገሃድ (eller ጋድ) er én dag: kvelden før Jesu dåp, ጥር 10 (ከተራ). ገሃድ betyr «det som blir åpenbart», fordi Jesus ble åpenbart i dåpen. ጋድ betyr «bytte»: Faller ጥምቀት på en onsdag eller fredag, spiser vi den dagen og faster dagen før i stedet.",
            am: "፪. ጾመ ገሃድ (ጋድ) የጥምቀት ዋዜማ ጥር ፲ ቀን አንድ ቀን ይጾማል። «ገሃድ» ማለት መገለጥ ማለት ነው፤ ጌታችን በጥምቀቱ ተገልጧልና። «ጋድ» ማለት ለውጥ ማለት ነው፤ ጥምቀት ረቡዕ ወይም ዓርብ ሲውል በዚያ ፈንታ ዋዜማውን እንጾማለንና።",
          },
          vers: ["Matt 3:16-17"],
        },
        {
          tekst: {
            no: "3. ጾመ ነነዌ (Ninive-fasten) er tre dager, mandag til onsdag, to uker før ዐቢይ ጾም. Vi minnes at folket i Ninive angret i tre dager og ble frelst.",
            am: "፫. ጾመ ነነዌ ከዐቢይ ጾም ሁለት ሳምንት በፊት ከሰኞ እስከ ረቡዕ ሦስት ቀን ይጾማል። የነነዌ ሰዎች ሦስት ቀን ጾመው ንስሐ ገብተው እንደ ዳኑ እናስባለን።",
          },
          vers: ["Jonah 3:5", "Matt 12:41"],
        },
        {
          tekst: {
            no: "4. ዐቢይ ጾም (den store fasten, også kalt ሁዳዴ) er 55 dager. Den begynner en mandag og varer til påskenatta. Det er den største fasten, fordi Herren selv fastet den.",
            am: "፬. ዐቢይ ጾም (ሁዳዴ) ፶፭ ቀን ነው። ሰኞ ጀምሮ እስከ ትንሣኤ ሌሊት ይጾማል። ጌታችን ራሱ የጾመው ስለሆነ ከአጽዋማት ሁሉ ታላቅ ነው።",
          },
          vers: ["Matt 4:2"],
        },
        {
          tekst: {
            no: "5. ጾመ ሐዋርያት (apostelfasten) begynner mandagen etter pinse og varer til ሐምሌ 4. Den slutter med festen for Peter og Paulus ሐምሌ 5. Apostlene fastet etter at de fikk Den hellige ånd, før de gikk ut i verden for å forkynne. Lengden er fra 15 til 49 dager, etter når påsken faller.",
            am: "፭. ጾመ ሐዋርያት ከጰራቅሊጦስ ማግሥት ሰኞ ጀምሮ እስከ ሐምሌ ፬ ይጾማል፤ መፈጸሚያውም የቅዱስ ጴጥሮስና የቅዱስ ጳውሎስ በዓል ሐምሌ ፭ ነው። ሐዋርያት መንፈስ ቅዱስን ተቀብለው ወንጌልን ለመስበክ ከመውጣታቸው በፊት የጾሙት ጾም ነው።",
          },
          vers: ["Acts 13:2-3", "Matt 9:15"],
        },
        {
          tekst: {
            no: "6. ጾመ ፍልሰታ (Mariafasten) varer fra ነሐሴ 1 til ነሐሴ 15 (7.–21. august). Apostlene var lei seg fordi de ikke hadde sett hvordan Marias kropp ble tatt opp. De fastet i to uker, og ነሐሴ 16 fikk de se henne.",
            am: "፮. ጾመ ፍልሰታ ከነሐሴ ፩ እስከ ነሐሴ ፲፭ ይጾማል። ሐዋርያት የእመቤታችንን ሥጋ ዕርገት ባለማየታቸው አዘኑ፤ ሁለት ሱባኤ ጾሙ፤ በነሐሴ ፲፮ ቀንም አዩዋት።",
          },
          vers: ["Ps 45:10"],
        },
        {
          tekst: {
            no: "7. ጾመ ድኅነት (frelsens faste) er hver onsdag og fredag i hele året. På onsdagen la jødenes ledere planer om å drepe Jesus, og på fredagen ble han korsfestet. Fastene tar plassen til Esters og Judits faster i Det gamle testamentet.",
            am: "፯. ጾመ ድኅነት ዘወትር ረቡዕና ዓርብ ይጾማል። ረቡዕ የጌታችን ሞት የተመከረበት፣ ዓርብም የተሰቀለበት ዕለት ነው። በብሉይ ኪዳን ጾመ አስቴርና ጾመ ዮዲት ፈንታ የተሰጠ የሐዲስ ኪዳን ጾም ነው።",
          },
          vers: ["Matt 26:2-4", "Mark 15:42"],
        },
      ],
    },
    {
      id: "abiy",
      tittel: { no: "ዐቢይ ጾም og de åtte søndagene", am: "ዐቢይ ጾምና ስምንቱ ሰንበታት" },
      ingress: {
        no: "ዐቢይ ጾም har tre deler: ጾመ ሕርቃል (første uke), ጾመ ኢየሱስ (40 dager, slik Jesus fastet) og ሰሙነ ሕማማት (den stille uka). Hver søndag har et navn fra hymnene til den hellige Jared (ጾመ ድጓ).",
        am: "ዐቢይ ጾም ሦስት ክፍሎች አሉት፤ ጾመ ሕርቃል (የመጀመሪያው ሳምንት)፣ ጾመ ኢየሱስ (አርባው ቀን) እና ሰሙነ ሕማማት። እያንዳንዱ እሑድ ቅዱስ ያሬድ በጾመ ድጓው በሰጠው ስም ይጠራል።",
      },
      punkter: [
        {
          tekst: {
            no: "ጾመ ሕርቃል: Keiser Herakleios (ሕርቃል) tok Kristi kors tilbake fra perserne. De kristne i Jerusalem fastet en uke for ham. Kirka har siden fastet denne første uka.",
            am: "ጾመ ሕርቃል፦ ንጉሥ ሕርቃል ከፋርሶች መስቀሉን አስመለሰ። በኢየሩሳሌም የነበሩ ምእመናን ስለ እርሱ ጾሙለት። ቤተ ክርስቲያንም የመጀመሪያውን ሳምንት ጾመ ሕርቃል ብላ ታስጾማለች።",
          },
          andre: [{ no: "ስንክሳር, መጋቢት 10", am: "ስንክሳር ዘመጋቢት ፲" }],
        },
        {
          tekst: {
            no: "1. ዘወረደ («han som kom ned»): Guds Sønn kom ned fra himmelen og ble menneske for å frelse Adam og barna hans.",
            am: "፩. ዘወረደ፦ «ከላይ የወረደ» ማለት ነው። ወልደ እግዚአብሔር አዳምንና ልጆቹን ለማዳን ከሰማይ ወርዶ ሰው መሆኑ ይታሰብበታል።",
          },
          vers: ["John 3:13"],
        },
        {
          tekst: {
            no: "2. ቅድስት («hellig»): Gud kom for å gjøre oss hellige. Søndagen minner oss også om at hviledagen er hellig.",
            am: "፪. ቅድስት፦ «የተለየች፣ የከበረች» ማለት ነው። እግዚአብሔር ሰውን ለመቀደስ መምጣቱና የሰንበት ክብር ይታሰብበታል።",
          },
          vers: ["1Pet 1:15-16"],
        },
        {
          tekst: {
            no: "3. ምኩራብ («synagogen, templet»): Jesus drev handelsfolket ut av templet og sa: «Mitt hus skal kalles et bønnens hus.»",
            am: "፫. ምኩራብ፦ ጌታችን በቤተ መቅደስ የሚነግዱትን አስወጥቶ «ቤቴ የጸሎት ቤት ይባላል» ያለበት ይታሰባል።",
          },
          vers: ["John 2:13-17", "Matt 21:13"],
        },
        {
          tekst: {
            no: "4. መጻጉዕ («den syke»): Jesus helbredet mannen som hadde vært syk i 38 år ved dammen Betesda.",
            am: "፬. መጻጉዕ፦ «በሽተኛ» ማለት ነው። ጌታችን በቤተ ሳይዳ ሠላሳ ስምንት ዓመት የታመመውን ሰው የፈወሰበት ይታሰባል።",
          },
          vers: ["John 5:5-9"],
        },
        {
          tekst: {
            no: "5. ደብረ ዘይት («Oljeberget»): Midt i fasten. Jesus satt på Oljeberget og lærte om sin andre komme og verdens ende.",
            am: "፭. ደብረ ዘይት፦ የጾሙ እኩሌታ ነው። ጌታችን በደብረ ዘይት ተቀምጦ ስለ ዳግም ምጽአቱና ስለ ዓለም ፍጻሜ አስተማረ።",
          },
          vers: ["Matt 24:3", "Matt 24:30"],
        },
        {
          tekst: {
            no: "6. ገብር ኄር («den gode tjeneren»): Lignelsen om talentene. De tjenerne som brukte gavene sine godt, fikk ros. Vi skal også bruke de gavene Gud har gitt oss.",
            am: "፮. ገብር ኄር፦ «ታማኝ፣ በጎ አገልጋይ» ማለት ነው። መክሊታቸውን አትርፈው የተመሰገኑት አገልጋዮች ታሪክ ይነገራል፤ እኛም በተሰጠን ጸጋ ማትረፍ አለብን።",
          },
          vers: ["Matt 25:14-30"],
        },
        {
          tekst: {
            no: "7. ኒቆዲሞስ: Nikodemus kom til Jesus om natta, og Jesus lærte ham at man må bli født på ny av vann og Ånd.",
            am: "፯. ኒቆዲሞስ፦ ኒቆዲሞስ በሌሊት ወደ ጌታችን መጣ፤ ጌታችንም ከውኃና ከመንፈስ ዳግመኛ መወለድ እንደሚገባ አስተማረው።",
          },
          vers: ["John 3:1-5"],
        },
        {
          tekst: {
            no: "8. ሆሳዕና (palmesøndag): Jesus red inn i Jerusalem, og folket ropte «Hosianna!». Så begynner ሰሙነ ሕማማት, uka da vi minnes Jesu lidelse.",
            am: "፰. ሆሳዕና፦ ጌታችን በክብር ወደ ኢየሩሳሌም ገባ፤ ሕዝቡም «ሆሳዕና» አሉ። ከዚያም የጌታችን መከራ የሚታሰብበት ሰሙነ ሕማማት ይጀመራል።",
          },
          vers: ["Matt 21:8-9"],
        },
      ],
    },
    {
      id: "sammen",
      tittel: { no: "Faste, bønn, ስግደት og ምጽዋት", am: "ጾም፣ ጸሎት፣ ስግደትና ምጽዋት" },
      punkter: [
        {
          tekst: {
            no: "Faste hører sammen med bønn. I fastetiden ber vi bønnetidene, går i kirka, deltar i ቅዳሴ og tar imot nattverden.",
            am: "ጾም ከጸሎት ጋር ነው። በጾም ወራት የጸሎት ሰዓታትን ጠብቀን እንጸልያለን፤ ወደ ቤተ ክርስቲያን እንሄዳለን፤ እናስቀድሳለን፤ ሥጋውን ደሙንም እንቀበላለን።",
          },
          vers: ["Acts 13:3", "Luke 2:37"],
        },
        {
          tekst: {
            no: "I fastetiden gjør vi også mer ስግደት: vi bøyer oss ned til jorda for Gud med ydmykhet. (På søndager og i de 50 dagene etter påske bøyer vi oss ikke ned på denne måten.)",
            am: "በጾም ወራት ስግደትን እናበዛለን፤ በትሕትና ለእግዚአብሔር እንሰግዳለን። (በእሑድና በበዓለ ሃምሳ ግን አይሰገድም።)",
          },
          vers: ["Ps 95:6"],
          andre: [
            {
              no: "ፍትሐ ነገሥት, den åndelige delen, kap. 14: ikke ስግደት på søndag og i de 50 dagene.",
              am: "ፍትሐ ነገሥት መንፈሳዊ አንቀጽ ፲፬፦ በእሑድና በበዓለ ሃምሳ መስገድ ተከልክሏል።",
            },
          ],
        },
        {
          tekst: {
            no: "Den fasten Gud vil ha, er å dele brødet med den sultne, ta imot den som ikke har hus, og gi klær til den som fryser. Det vi sparer når vi faster, kan vi gi til andre (ምጽዋት).",
            am: "እግዚአብሔር የመረጠው ጾም እንጀራን ለተራበ መቍረስ፣ ስደተኞችን ወደ ቤት ማስገባትና የተራቆተውን ማልበስ ነው። በጾም ያስቀረነውን ለሌሎች እንመጸውታለን።",
          },
          vers: ["Isa 58:6-7"],
        },
        {
          tekst: {
            no: "Det hjelper ikke å faste fra mat hvis vi krangler, lyver eller er slemme mot andre. Vi faster også med øynene, munnen og hjertet.",
            am: "ከምግብ ብቻ ጾመን ብንጣላ፣ ብንዋሽ ወይም ሌሎችን ብንበድል ጾማችን አይጠቅምም። በዓይናችን፣ በአንደበታችንና በልባችንም እንጾማለን።",
          },
          vers: ["Isa 58:3-4"],
        },
        {
          tekst: {
            no: "Kornelius ba til faste tider og ga til de fattige. Gud hørte bønnen hans og husket gavene hans.",
            am: "ቆርኔሌዎስ በጸሎት ሰዓት ይጸልይና ይመጸውት ነበር፤ እግዚአብሔርም ጸሎቱን ሰማ፤ ምጽዋቱንም አሰበለት።",
          },
          vers: ["Acts 10:30-31"],
        },
      ],
    },
    {
      id: "hvem",
      tittel: { no: "Hvem faster?", am: "ማን ይጾማል?" },
      punkter: [
        {
          tekst: {
            no: "Alle ortodokse kristne fra de er sju år, skal faste ዐቢይ ጾም og de andre fastene. Mahibere Kidusan minner om at alle sju fastene er for alle, ikke bare for prester og munker.",
            am: "ዕድሜአቸው ሰባት ዓመት ከሆናቸው ሕፃናት ጀምሮ ሁሉም የኦርቶዶክስ ተዋሕዶ አማኞች ዐቢይ ጾምንና ሌሎቹን አጽዋማት መጾም ይገባቸዋል። «ይሄ የቄሶች፣ ይሄ የመነኰሳት ነው» ሳንል ሁላችንም ልንጾም ይገባል።",
          },
        },
        {
          tekst: {
            no: "Barn under sju år, gravide, de som er alvorlig syke, og de som er ute og reiser, har ikke plikt til å faste.",
            am: "ዕድሜያቸው ከሰባት ዓመት በታች የሆኑ ሕፃናት፣ ነፍሰ ጡሮች፣ ጽኑ ሕመምተኞችና መንገደኞች ከጾም ግዴታ ነፃ ናቸው።",
          },
        },
        {
          tekst: {
            no: "Er du usikker på hvordan du skal faste – for eksempel hvis du er syk – spør skriftefaren din (የንስሐ አባት). Han hjelper deg å faste på en måte som passer for deg.",
            am: "እንዴት መጾም እንዳለብህ ካላወቅህ – ለምሳሌ ብትታመም – የንስሐ አባትህን ጠይቅ። እንደ ዐቅምህ እንድትጾም ይረዳሃል።",
          },
        },
      ],
    },
    {
      id: "uten",
      tittel: { no: "Dager uten faste", am: "የማይጾምባቸው ቀናት" },
      punkter: [
        {
          tekst: {
            no: "De 50 dagene fra påske til pinse er gledesdager. Da faster vi ikke, heller ikke onsdag og fredag. Jesus sa at bryllupsgjestene ikke faster så lenge brudgommen er hos dem.",
            am: "ከትንሣኤ እስከ ጰራቅሊጦስ ያሉት ሃምሳ ቀናት የደስታ ቀናት ናቸው፤ ረቡዕና ዓርብም አይጾምባቸውም። ጌታችን ሙሽራው ከእነርሱ ጋር ሳለ ሚዜዎቹ አይጾሙም ብሏል።",
          },
          vers: ["Matt 9:15"],
        },
        {
          tekst: {
            no: "Faller ልደት (jul) eller ጥምቀት på en onsdag eller fredag, faster vi ikke den dagen. Apostlene bestemte at de to store høytidene skal feires med glede.",
            am: "ልደት ወይም ጥምቀት ረቡዕ ወይም ዓርብ ቢውል በዚያ ዕለት አይጾምም። ሐዋርያት እነዚህ ሁለቱ ታላላቅ በዓላት በደስታ እንዲከበሩ ወስነዋል።",
          },
          andre: [
            {
              no: "ፍትሐ ነገሥት 15 (apostlenes regel): Faller jul eller Jesu dåp på fredag eller onsdag, skal de feire nattverd om natta og ikke befale faste til den niende timen.",
              am: "ፍትሐ ነገሥት አንቀጽ ፲፭፦ «ልደት ጥምቀት ዓርብ ረቡዕ ቢውል በሌሊት ቀድሰው ሥጋውን ደሙን ይቀበሉ፤ ከሌሊቱ እስከ ዘጠኝ ሰዓት ጹሙ ብለው አይፍረዱ።»",
            },
          ],
        },
        {
          tekst: {
            no: "Utenom fastetidene spiser vi vanlig mat de dagene som ikke er onsdag eller fredag. Kirka har fester og faster som veksler gjennom året, så vi lærer både å glede oss og å holde igjen.",
            am: "ከአጽዋማት ውጪ ከረቡዕና ከዓርብ በቀር ባሉት ቀናት እንደተለመደው እንመገባለን። በዓመቱ በዓላትና አጽዋማት ይፈራረቃሉ፤ መደሰትንም መከልከልንም እንማራለን።",
          },
          vers: ["Eccl 3:1"],
        },
      ],
    },
    {
      id: "norge",
      tittel: { no: "Faste i Norge", am: "በኖርዌይ መጾም" },
      ingress: {
        no: "Det kan være vanskelig å faste når venner og skolen ikke gjør det. Her er noen råd.",
        am: "ጓደኞቻችንና ትምህርት ቤቱ በማይጾሙበት ቦታ መጾም ሊከብድ ይችላል። ጥቂት ምክሮች እነሆ።",
      },
      punkter: [
        {
          tekst: {
            no: "Snakk med foreldrene dine og skriftefaren om hvordan du skal faste på skoledager. Fortell gjerne læreren at du faster, så de vet hvorfor du ikke spiser alt i kantina eller på turer.",
            am: "በትምህርት ቀናት እንዴት እንደምትጾም ከወላጆችህና ከንስሐ አባትህ ጋር ተነጋገር። መምህርህም ለምን ሁሉን እንደማትበላ እንዲያውቅ ብትነግረው መልካም ነው።",
          },
        },
        {
          tekst: {
            no: "Ta med fastemat i matpakka, for eksempel brød med grønnsaker eller hummus, og frukt. Les innholdslista på maten i butikken: «melk», «myse», «smør», «egg» og «gelatin» kommer fra dyr.",
            am: "የጾም ምግብ ይዘህ ሂድ፤ ለምሳሌ ዳቦ ከአትክልት ጋር እና ፍራፍሬ። በሱቅ የምትገዛውን ምግብ ይዘት አንብብ፤ ወተት፣ ቅቤ፣ እንቁላልና ከእንስሳት የሚገኙ ነገሮች እንዳሉበት ተመልከት።",
          },
        },
        {
          tekst: {
            no: "Du trenger ikke skryte av fasten, men du kan gjerne forklare venner hvorfor du faster hvis de spør. Vær vennlig – fasten skal gjøre oss mildere, ikke strengere mot andre.",
            am: "በጾምህ አትመካ፤ ጓደኞችህ ቢጠይቁህ ግን ለምን እንደምትጾም በደስታ አስረዳቸው። ጾም ለሌሎች የዋህ እንድንሆን ያደርገናል እንጂ እንድንጨክን አይደለም።",
          },
          vers: ["Matt 6:17-18", "1Pet 3:15"],
        },
        {
          tekst: {
            no: "Fasten varer ikke for alltid. Etter hver faste kommer en fest, og da feirer vi sammen med menigheten.",
            am: "ጾም ለዘለዓለም አይቀጥልም፤ ከእያንዳንዱ ጾም በኋላ በዓል ይመጣል፤ ያን ጊዜ ከምእመናን ጋር በአንድነት እናከብራለን።",
          },
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Isak syreren", am: "ማር ይስሐቅ" },
      tekst: {
        no: "Faste leger sjelens sår og svekker lystene. Den er begynnelsen på alt godt, bønnens mor og kilden til tårer. Den lærer oss stillhet, vekker oss til gode gjerninger og hjelper oss å bli ydmyke for Gud – den er en medisin for sjelen.",
        am: "«ጾም ቁስለ ነፍስን የምትፈውስ፣ ኃይለ ፍትወትን የምታደክም፣ የበጎ ምግባራት ሁሉ መጀመሪያ … የጸሎት ምክንያት እናት፣ የዕንባ መገኛ መፍለቂያዋ፣ አርምሞን የምታስተምር፣ ለበጎ ሥራ ሁሉ የምታነቃቃ፣ ሰውነትን በእግዚአብሔር ፊት በማዋረድ ትሕትናን ገንዘብ ለማድረግ የምትረዳ መድኃኒተ ነፍስ ናት።»",
      },
      kilde: "መጽሐፈ ማር ይስሐቅ, አንቀጽ ፬ ምዕራፍ ፮ (sitert i Mahibere Kidusan: ሥርዓተ አምልኮ – ክፍል ሁለት, eotcmk.org)",
    },
    {
      navn: { no: "Den hellige Jared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "I hymnen for den første søndagen i fasten synger Jared: «Han som kom ned fra det høye, korsfestet jødene. De visste ikke at han er alles Herre.» Fastehymnene hans (ጾመ ድጓ) lærer oss hvor viktig faste, bønn, gaver til de fattige og kjærlighet er.",
        am: "«ዘወረደ እምላዕሉ አይሁድ ሰቀሉ ወሚመ ኢያእመሩ እግዚአ ኵሉ» – አዳምን ለማዳን ከሰማይ የወረደውን አምላክ አይሁድ ሰቀሉት፤ የሁሉ ጌታ እንደሆነም አላወቁም። ጾመ ድጓው የጾምን፣ የጸሎትን፣ የምጽዋትንና የፍቅርን ጠቃሚነት ያስተምራል።",
      },
      kilde: "ጾመ ድጓ, ዘወረደ (Mahibere Kidusan: ዐቢይ ጾም, eotcmk.org)",
    },
    {
      navn: { no: "De 318 fedrene i Nikea", am: "ሠለስቱ ምዕት" },
      tekst: {
        no: "Kirkemøtet i Nikea bestemte: «Det apostlene fastet og bestemte at vi skal faste, skal vi faste.» De bygde på Jesu ord om at disiplene skal faste når brudgommen er tatt fra dem.",
        am: "ሠለስቱ ምዕት «ሐዋርያት የጾሙትንና እንዲጾም የወሰኑትን መጾም ይገባል» ብለው ወሰኑ፤ ይህም «ሙሽራውን ከእነርሱ የሚወስዱበት ጊዜ ይመጣል፤ ያን ጊዜ ይጾማሉ» ባለው የጌታችን ቃል ላይ የተመሠረተ ነው።",
      },
      kilde: "Mahibere Kidusan: ዐቢይ ጾም (eotcmk.org)",
    },
    {
      navn: { no: "De hellige apostlene", am: "ቅዱሳን ሐዋርያት" },
      tekst: {
        no: "Apostlene bestemte at jul og Jesu dåp skal feires med glede selv om de faller på en onsdag eller fredag: Da skal man ta imot nattverden om natta og ikke faste den dagen.",
        am: "«ልደት ጥምቀት ዓርብ ረቡዕ ቢውል በሌሊት ቀድሰው ሥጋውን ደሙን ይቀበሉ፤ ከሌሊቱ እስከ ዘጠኝ ሰዓት ጹሙ ብለው አይፍረዱ።»",
      },
      kilde: "ፍትሐ ነገሥት, አንቀጽ ፲፭ (sitert i Mahibere Kidusan: ጾመ ነቢያት, eotcmk.org)",
    },
  ],
  ord: [
    { ord: "ጾም / አጽዋማት", forklaring: { no: "faste / fastene", am: "መከልከል፣ መተው" } },
    { ord: "ሰባቱ የዐዋጅ አጽዋማት", forklaring: { no: "de sju kunngjorte fastene", am: "ቤተ ክርስቲያን ያወጀቻቸው ሰባቱ አጽዋማት" } },
    { ord: "ጥሉላት", forklaring: { no: "mat fra dyr (kjøtt, melk, smør, egg) som vi ikke spiser i fastetiden", am: "ከእንስሳት የሚገኙ ምግቦች" } },
    { ord: "ዐቢይ ጾም / ሁዳዴ", forklaring: { no: "den store fasten før påske (55 dager)", am: "ጌታችን የጾመው ታላቁ ጾም" } },
    { ord: "ጾመ ሕርቃል", forklaring: { no: "første uke av ዐቢይ ጾም", am: "የዐቢይ ጾም የመጀመሪያው ሳምንት" } },
    { ord: "ሰሙነ ሕማማት", forklaring: { no: "den stille uka, uka før påske", am: "ከሆሳዕና እስከ ትንሣኤ ያለው ሳምንት" } },
    { ord: "ቀዳም ሥዑር", forklaring: { no: "påskeaften, den eneste lørdagen vi faster", am: "የምትጾም ቅዳሜ" } },
    { ord: "ገሃድ / ጋድ", forklaring: { no: "«åpenbaring» / «bytte» – fastedagen før Jesu dåp", am: "መገለጥ / ለውጥ" } },
    { ord: "ጾመ ድኅነት", forklaring: { no: "«frelsens faste» – onsdag og fredag", am: "የመዳን ጾም" } },
    { ord: "ሱባኤ", forklaring: { no: "en tid (ofte en uke) med faste og bønn", am: "የጾምና የጸሎት ጊዜ" } },
    { ord: "ስግደት", forklaring: { no: "å bøye seg ned til jorda for Gud", am: "ለእግዚአብሔር መስገድ" } },
    { ord: "ምጽዋት", forklaring: { no: "gaver til de fattige", am: "ለድሆች መስጠት" } },
    { ord: "ጾመ ድጓ", forklaring: { no: "den hellige Jareds hymnebok for fastetiden", am: "የቅዱስ ያሬድ የጾም መዝሙር መጽሐፍ" } },
    { ord: "ባሕረ ሐሳብ", forklaring: { no: "kirkas måte å regne ut påsken og de flyttbare fastene på", am: "የበዓላትና የአጽዋማት ማውጫ ቀመር" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet ጾም?", am: "«ጾም» ማለት ምን ማለት ነው?" },
      svar: {
        no: "Det kommer fra ge'ez ጾመ og betyr å la være, holde tilbake, vokte.",
        am: "ከግእዝ «ጾመ» የተገኘ ሲሆን «መተው፣ መከልከል፣ መጠበቅ» ማለት ነው።",
      },
    },
    {
      sporsmal: { no: "Nevn de sju fastene.", am: "ሰባቱን አጽዋማት ጥቀስ።" },
      svar: {
        no: "ጾመ ነቢያት, ጾመ ገሃድ, ጾመ ነነዌ, ዐቢይ ጾም, ጾመ ሐዋርያት, ጾመ ፍልሰታ og ጾመ ድኅነት (onsdag og fredag).",
        am: "ጾመ ነቢያት፣ ጾመ ገሃድ፣ ጾመ ነነዌ፣ ዐቢይ ጾም፣ ጾመ ሐዋርያት፣ ጾመ ፍልሰታ እና ጾመ ድኅነት (ረቡዕና ዓርብ)።",
      },
    },
    {
      sporsmal: { no: "Hva spiser vi ikke i fastetiden?", am: "በጾም ወራት ምን አንበላም?" },
      svar: {
        no: "ጥሉላት: mat fra dyr, som kjøtt, melk, smør og egg. Og vi spiser ingenting om morgenen.",
        am: "ጥሉላትን፤ ሥጋ፣ ወተት፣ ቅቤና እንቁላል። ጠዋትም ምንም አንበላም።",
      },
    },
    {
      sporsmal: { no: "Hvorfor faster vi onsdag og fredag?", am: "ረቡዕና ዓርብ ለምን እንጾማለን?" },
      svar: {
        no: "På onsdagen ble det lagt planer om å drepe Jesus, og på fredagen ble han korsfestet.",
        am: "ረቡዕ የጌታችን ሞት የተመከረበት፣ ዓርብ የተሰቀለበት ዕለት ስለሆነ።",
      },
    },
    {
      sporsmal: { no: "Hvorfor faster vi ikke i de 50 dagene etter påske?", am: "ከትንሣኤ በኋላ ባሉት ሃምሳ ቀናት ለምን አንጾምም?" },
      svar: {
        no: "Fordi det er gledesdager. Jesus sa at bryllupsgjestene ikke faster mens brudgommen er hos dem (Matt 9,15).",
        am: "የደስታ ቀናት ስለሆኑ ነው። ጌታችን ሙሽራው ከእነርሱ ጋር ሳለ አይጾሙም ብሏል (ማቴ ፱፥፲፭)።",
      },
    },
    {
      sporsmal: { no: "Nevn de åtte søndagene i ዐቢይ ጾም.", am: "የዐቢይ ጾምን ስምንቱን ሰንበታት ጥቀስ።" },
      svar: {
        no: "ዘወረደ, ቅድስት, ምኩራብ, መጻጉዕ, ደብረ ዘይት, ገብር ኄር, ኒቆዲሞስ og ሆሳዕና.",
        am: "ዘወረደ፣ ቅድስት፣ ምኩራብ፣ መጻጉዕ፣ ደብረ ዘይት፣ ገብር ኄር፣ ኒቆዲሞስ እና ሆሳዕና።",
      },
    },
    {
      sporsmal: { no: "Hvem trenger ikke å faste?", am: "ከጾም ግዴታ ነፃ የሆኑት እነማን ናቸው?" },
      svar: {
        no: "Barn under sju år, gravide, de som er alvorlig syke, og de som reiser. Spør skriftefaren hvis du er usikker.",
        am: "ከሰባት ዓመት በታች ያሉ ሕፃናት፣ ነፍሰ ጡሮች፣ ጽኑ ሕመምተኞችና መንገደኞች። ካልተረዳህ የንስሐ አባትህን ጠይቅ።",
      },
    },
  ],
  kilder: [
    {
      navn: "ማኅበረ ቅዱሳን: ሥርዓተ አምልኮ – ክፍል ሁለት (ሥርዓተ ጾም)",
      url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae-2/",
    },
    { navn: "ማኅበረ ቅዱሳን: ዐቢይ ጾም", url: "https://eotcmk.org/a/%E1%8B%90%E1%89%A2%E1%8B%AD-%E1%8C%BE%E1%88%9D-4/" },
    { navn: "ማኅበረ ቅዱሳን: ጾመ ነቢያት (ስብከት፣ ብርሃን፣ ኖላዊ፣ ጾመ ገሃድ)", url: "https://eotcmk.org/a/%E1%8C%BE%E1%88%98-%E1%8A%90%E1%89%A2%E1%8B%AB%E1%89%B5/" },
    {
      navn: "ማኅበረ ቅዱሳን: ጾመ ሐዋርያት እና ጾመ ድኅነት",
      url: "https://eotcmk.org/a/%E1%8C%BE%E1%88%98-%E1%88%90%E1%8B%8B%E1%88%AD%E1%8B%AB%E1%89%B5-%E1%8A%A5%E1%8A%93-%E1%8C%BE%E1%88%98-%E1%8B%B5%E1%8A%85%E1%8A%90%E1%89%B5-3/",
    },
    { navn: "ማኅበረ ቅዱሳን: ጾመ ፍልሰታ (ስንክሳር ነሐሴ ፲፮)", url: "https://eotcmk.org/dev/%E1%8C%BE%E1%88%98-%E1%8D%8D%E1%88%8D%E1%88%A0%E1%89%B3/" },
    { navn: "ማኅበረ ቅዱሳን: ጾመ ሰብአ ነነዌ", url: "https://eotcmk.org/a/%E1%8C%BE%E1%88%98-%E1%88%B0%E1%89%A5%E1%8A%A0-%E1%8A%90%E1%8A%90%E1%8B%8C-3/" },
    {
      navn: "ማኅበረ ቅዱሳን (for barn): የዐቢይ ጾም ሳምንታት – ክፍል አንድ",
      url: "https://eotcmk.org/a/%E1%8B%A8%E1%8B%90%E1%89%A2%E1%8B%AD-%E1%8C%BE%E1%88%9D-%E1%88%B3%E1%88%9D%E1%8A%95%E1%89%B3%E1%89%B5-2/",
    },
    {
      navn: "ማኅበረ ቅዱሳን Europa (for barn): የዐቢይ ጾም ሳምንታት – ክፍል ሦስት (መጻጉዕ)",
      url: "https://eu.eotcmk.org/site/%e1%8b%a8%e1%8b%90%e1%89%a2%e1%8b%ad-%e1%8c%be%e1%88%9d-%e1%88%b3%e1%88%9d%e1%8a%95%e1%89%b3%e1%89%b5-%e1%88%88%e1%88%95%e1%8d%83%e1%8a%93%e1%89%b5-%e1%8a%ad%e1%8d%8d/",
    },
    {
      navn: "ማኅበረ ቅዱሳን Europa (for barn): የዐቢይ ጾም ሳምንታት – ክፍል አራት (ገብር ኄር)",
      url: "https://eu.eotcmk.org/site/%E1%8B%A8%E1%8B%90%E1%89%A2%E1%8B%AD-%E1%8C%BE%E1%88%9D-%E1%88%B3%E1%88%9D%E1%8A%95%E1%89%B3%E1%89%B5-%E1%88%88%E1%88%95%E1%8D%83%E1%8A%93%E1%89%B5-%E1%8A%AD%E1%8D%8D%E1%88%8D-%E1%8A%A0-2/",
    },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church (6. Fasting)", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Calendar", url: "https://www.ethiopianorthodox.org/english/calendar.html" },
    {
      navn: "ሥርዓተ ቤተ ክርስቲያን (søndagsskolebok for 8. klasse: መሠረተ ሃይማኖት፣ ሥርዓትና ሥነ ምግባር), om faste for rettferdighetens skyld",
      url: "https://www.scribd.com/document/1036651354/g8-Meserete-Haymanot-Srat-Snemgbar-24",
    },
  ],
  utkast: true,
};
