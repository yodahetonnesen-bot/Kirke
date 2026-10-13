import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om bønnetidene:
// Mahibere Kidusan: «ሥርዓተ አምልኮ ክፍል አንድ» (ሰባቱ የጸሎት ጊዜያት: navn, klokkeslett og hva hver tid minner om);
// Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን», del 1 (ሳዊሮስ ዘእስሙናይን: tre tider i kirka) og del 2 (de sju tidene
// etter መጽሐፈ ምዕዳን og ፍትሐ ነገሥት, de seks reglene for den som ber, ቀሌምንጦስ om den niende time, at ነግህ og ሠርክ
// bør bes i kirka, særlig på de to sabbatene og høytidene);
// Mahibere Kidusan for barn: «ሥርዓተ ጸሎት» (tre slags bønn, bønn hjemme, «ጸሎት የሕይወታችን አጥር ነው») og «ጸሎት በቤተ
// ክርስቲያን» (forberedelse, stå mot øst, korstegnet, dager uten ስግደት, ikke avbryte bønnen);
// Mahibere Kidusan: «ጸሎትና ክርስቲያናዊ ሕይወት» (ቅዳሴ ማስቀደስ፣ ኪዳን ማድረስ፣ ውዳሴ ማርያምና ዳዊት መድገም),
// «ሥርዓተ አምልኮ ክፍል ሦስት» (ነግህ med ኪዳን og ቅዳሴ på høytidsmorgenen), «ሥርዓተ አምልኮ ክፍል አራት» (ማዕጠንት,
// evangelieboka og ግጻዌ i ጸሎተ ኪዳን) og «ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!» (ikke snakke, be sammen);
// ethiopianorthodox.org: «Worship in the Ethiopian Orthodox Church» (sju tider, ፍትሐ ነገሥት, ሰዓታት av Abba Giyorgis,
// morgen- og kveldsbønn i kirka) og «Church Music» (ውዳሴ ማርያም og አርጋኖን for hver ukedag);
// ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን (ሰዓታት ዘሌሊት ወዘነግህ av አባ ጊዮርጊስ ዘጋስጫ, åpningen og slutten; ኪዳን-bønnene
// fra መጽሐፈ ኪዳን for midnatt, morgen og kveld; sitatet fra ኪዳን ዘሠርክ);
// Marcos Daoud / erkebiskop Yesehaq (prester og diakoner som ikke har vært med på ሰዓታት, skal ikke tjene i ቅዳሴ; መጽሐፈ ኪዳን har
// Kristi undervisning i de førti dagene etter oppstandelsen; tillegget «Prayer of the Covenant»: åpningen og svarene);
// søndagsskolebok for 8. klasse (መሠረተ ሃይማኖት, scribd): fortellingen om ቅዱስ ኤፍሬም og ውዳሴ ማርያም i sju deler.
// Usikkert: Brukeren nevnte ሰዓታት som «Yareds nattbønn». Kildene (አኰቴተ ቍርባን og ethiopianorthodox.org) sier at
// ሰዓታት ble skrevet av አባ ጊዮርጊስ ዘጋስጫ på 1400-tallet. Vi følger kildene.
// Usikkert: MK sier at Daniel ba «i den tredje time». I Bibelen står det at han ba tre ganger om dagen (Dan 6,10).
// Vi har derfor bare brukt Daniel om det å be til faste tider, ikke om den tredje time.
// Usikkert: Mark 15,25 sier at Jesus ble korsfestet i den tredje time, mens kirkas undervisning knytter den tredje time
// til piskingen og den sjette til korsfestelsen (Joh 19,14). Vi har ikke brukt Mark 15,25.
// Usikkert: Klokkeslettene er omregnet fra etiopisk tid (dagen begynner kl. 12 etiopisk = kl. 6 hos oss).
// Usikkert: Sitatet fra ቀሌምንጦስ har vi bare fra MK (med henvisningen «ቀሌ.፫÷፰»); vi har ikke sett selve boka.
// Fortellingen om ኤፍሬም og ውዳሴ ማርያም er kirkas tradisjon (fra søndagsskoleboka), ikke fra Bibelen.
// Usikkert: Hvordan ዳዊት deles opp for hver dag, sier kildene ikke. Det har vi ikke skrevet.
export const bonnetider: Tema = {
  slug: "bonnetider",
  del: "gudstjenester",
  tittel: { no: "Bønnetidene", am: "ሰባቱ የጸሎት ጊዜያት፣ ሰዓታትና ኪዳን" },
  undertittel: {
    no: "Sju ganger om dagen – fra morgenbønnen til midnatt, i kirka og hjemme",
    am: "በቀን ሰባት ጊዜ – ከነግህ እስከ መንፈቀ ሌሊት፣ በቤተ ክርስቲያንና በቤት",
  },
  bilde: "arganonaMaryamDetalj",
  ingress: {
    no:
      "Bønn er å snakke med Gud. Vi takker ham for det han har gjort, og ber om det vi trenger. Kirka har gitt oss faste tider å be på, sju ganger om dagen, slik David sang. I kirka ber prestene ሰዓታት om natten og ኪዳን om morgenen og kvelden. Hjemme ber vi ውዳሴ ማርያም og Davids salmer. Her lærer du hvorfor og hvordan.",
    am:
      "ጸሎት ሰው ከእግዚአብሔር ጋር የሚነጋገርበት ነው። ስላደረገልን እናመሰግነዋለን፤ የሚያስፈልገንን እንለምነዋለን። ቅዱስ ዳዊት እንዳለ ቤተ ክርስቲያን በቀን ሰባት የጸሎት ጊዜያትን ሠርታልናለች። በቤተ ክርስቲያን ካህናት በሌሊት ሰዓታት፣ በነግህና በሠርክ ኪዳን ያደርሳሉ። በቤታችንም ውዳሴ ማርያምና ዳዊት እንደግማለን። ለምንና እንዴት እንደምንጸልይ እዚህ ትማራላችሁ።",
  },
  hovedvers: "Ps 119:164",
  avsnitt: [
    {
      id: "hvorfor",
      tittel: { no: "Hvorfor ber vi til faste tider?", am: "በተወሰኑ ሰዓታት ለምን እንጸልያለን?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ጸሎት kommer av ge'ez-ordet ጸለየ, «å be». Bønn er både takk og bønn om hjelp. Når vi sier «Helliget vorde ditt navn», takker og priser vi. Når vi sier «Gi oss i dag vårt daglige brød», ber vi om hjelp.",
            am: "«ጸሎት» የሚለው ቃል «ጸለየ፣ ለመነ» ከሚለው የግእዝ ግሥ የወጣ ነው። ትርጉሙ ልመናም ምስጋናም ነው። «ይትቀደስ ስምከ» (ስምህ ይቀደስ) ስንል ምስጋና ነው፤ «ሲሳየነ ዘለለዕለትነ ሀበነ ዮም» (የዕለት እንጀራችንን ዛሬ ስጠን) ስንል ደግሞ ልመና ነው።",
          },
          vers: ["Matt 6:9-11", "Phil 4:6"],
        },
        {
          tekst: {
            no: "David sier: «Syv ganger om dagen har jeg prist dig for din rettferdighets lover.» Derfor har kirka sju bønnetider hver dag. Tallet sju minner oss også om at hele dagen hører Gud til.",
            am: "ነቢዩ ዳዊት «ስለ ጽድቅህ ፍርድ ሰባት ጊዜ በቀን አመሰግንሃለሁ» ብሏል። ስለዚህ በቤተ ክርስቲያን አስተምህሮ ሰባት የጸሎት ጊዜያት አሉ። ሰባት ቍጥርም ቀኑ ሁሉ የእግዚአብሔር እንደ ሆነ ያሳስበናል።",
          },
          vers: ["Ps 119:164"],
        },
        {
          tekst: {
            no: "Slik gjorde de troende i Bibelen også. Daniel bøyde knærne og ba tre ganger om dagen. David ba aften, morgen og middag. Peter og Johannes gikk opp i templet «ved bønnens time, som var den niende».",
            am: "በመጽሐፍ ቅዱስ ያሉ ቅዱሳንም እንዲሁ አደረጉ። ዳንኤል በየዕለቱ ሦስት ጊዜ በጕልበቱ ተንበርክኮ ይጸልይ ነበር። ዳዊት በማታ፣ በጥዋትና በቀትር ይጸልይ ነበር። ጴጥሮስና ዮሐንስም «በጸሎት ጊዜ በዘጠኝ ሰዓት» ወደ መቅደስ ይወጡ ነበር።",
          },
          vers: ["Dan 6:10", "Ps 55:18", "Acts 3:1"],
        },
        {
          tekst: {
            no: "Jesus selv lærte oss å be, og han ba selv. Han sa at vi alltid skal be og ikke bli trette. Paulus skriver: «Bed uavlatelig.» De faste tidene hjelper oss å huske Gud hele dagen.",
            am: "ጸሎትን ያስተማረን ጌታችን ኢየሱስ ክርስቶስ ነው፤ እርሱም ራሱ ይጸልይ ነበር። ሳንታክት ዘወትር እንድንጸልይ አስተማረ። ቅዱስ ጳውሎስም «ሳታቋርጡ ጸልዩ» ይላል። የጸሎት ጊዜያቱ ቀኑን ሙሉ እግዚአብሔርን እንድናስብ ይረዱናል።",
          },
          vers: ["Mark 1:35", "Luke 18:1", "1Thess 5:17"],
        },
        {
          tekst: {
            no: "Kirka lærer at det finnes tre slags bønn: den personlige bønnen (alene), bønnen i familien og bønnen i fellesskapet i kirka – ቅዳሴ, ኪዳን, ሰዓታት og ማኅሌት. Alle kristne skal være med i alle tre.",
            am: "በቤተ ክርስቲያን ሥርዓት ጸሎት በሦስት ይከፈላል፤ የግል ጸሎት፣ የቤተ ሰብ ጸሎትና የማኅበር ጸሎት። በቤተ ክርስቲያን የሚደርሰው ቅዳሴ፣ ኪዳን፣ ሰዓታትና ማኅሌት የማኅበር ጸሎት ይባላል። ክርስቲያን የሆንን ሁሉ በሦስቱም ልንሳተፍ ያስፈልጋል።",
          },
          vers: ["Matt 6:6", "Acts 10:2", "Matt 18:19-20"],
        },
        {
          tekst: {
            no: "Etiopisk klokke begynner å telle når sola står opp, kl. 6 om morgenen hos oss. Da er klokka 12 etiopisk. Kl. 9 hos oss er 3 etiopisk, kl. 12 er 6, og kl. 15 er 9. Slik teller også Bibelen: «Er det ikke tolv timer i en dag?» Derfor heter bønnetidene «den tredje», «den sjette» og «den niende time».",
            am: "በኢትዮጵያ አቈጣጠር ቀኑ የሚቈጠረው ፀሐይ ከምትወጣበት ከጠዋቱ 12 ሰዓት ጀምሮ ነው፤ ይህም በአውሮፓ አቈጣጠር ከጠዋቱ 6 ሰዓት ነው። ስለዚህ ሦስት ሰዓት ከጠዋቱ 9፣ ስድስት ሰዓት እኩለ ቀን፣ ዘጠኝ ሰዓት ከቀትር በኋላ 3 ማለት ነው። መጽሐፍ ቅዱስም እንዲሁ ይቈጥራል፤ ጌታ «ቀኑ አሥራ ሁለት ሰዓት አይደለምን?» ብሏል።",
          },
          vers: ["John 11:9"],
        },
      ],
    },
    {
      id: "sju",
      tittel: { no: "De sju bønnetidene", am: "ሰባቱ የጸሎት ጊዜያት" },
      ingress: {
        no: "Hver bønnetid minner oss om noe Gud har gjort, mest om Jesu lidelse, død og oppstandelse. Klokkeslettet står først etter vår tid, så etter etiopisk tid.",
        am: "እያንዳንዱ የጸሎት ጊዜ እግዚአብሔር ያደረገውን በተለይም የጌታችንን ሕማም፣ ሞትና ትንሣኤ ያሳስበናል። ሰዓቱ መጀመሪያ በአውሮፓ ቀጥሎ በኢትዮጵያ አቈጣጠር ተጽፏል።",
      },
      punkter: [
        {
          tekst: {
            no: "1. ጸሎተ ነግህ – morgenbønnen (kl. 6, 12 etiopisk). Vi takker Gud for at vi fikk sove i fred, og ber ham bevare oss gjennom dagen. Kirka lærer at Gud skapte Adam om morgenen, og at Jesus om morgenen ble ført fram for Pilatus. David sier: «Herre, årle høre du min røst!» Før vi gjør noe annet, vasker vi hender og ansikt og står for Gud.",
            am: "፩. ጸሎተ ነግህ (ከጠዋቱ 12 ሰዓት)። ሌሊቱን በሰላም ስላሳደረን እግዚአብሔርን እናመሰግናለን፤ ዕለቱንም በሰላም እንዲያውለን እንለምናለን። እግዚአብሔር አዳምን የፈጠረው በነግህ ነው፤ ጌታችንም በጲላጦስ ፊት የቆመው በዚህ ሰዓት ነው። ዳዊት «በማለዳ ድምፄን ትሰማለህ» ብሏል። ወደ ሥራችን ሳንገባ እጃችንንና ፊታችንን ታጥበን በእግዚአብሔር ፊት እንቆማለን።",
          },
          vers: ["Ps 5:4", "Ps 63:2", "Matt 27:1-2"],
        },
        {
          tekst: {
            no: "Om morgenen skifter også englene vakt: Kirka lærer at engelen som voktet oss om natten, blir avløst av engelen som vokter oss om dagen. Derfor ber vi om englenes hjelp om morgenen.",
            am: "በነግህ ሰዓት የሌሊቱ ጠባቂ መልአክ ተልእኮውን ጨርሶ በቀን በሚጠብቀን መልአክ ይተካል፤ ሁለቱ ጠባቂ መላእክት የሚገናኙበት ሰዓት ነው። ስለዚህ የቅዱሳን መላእክትን ተራዳኢነት እየታመንን እንጸልያለን።",
          },
          vers: ["Ps 91:11", "Heb 1:14"],
        },
        {
          tekst: {
            no: "2. ጸሎተ ሠለስት – den tredje time (kl. 9, 3 etiopisk). Kirka lærer at Maria fikk Gabriels budskap i denne timen, og at Jesus ble pisket hos Pilatus. Den hellige ånd kom over apostlene på pinsedagen i den tredje time: «det er jo bare den tredje time på dagen.»",
            am: "፪. ጸሎተ ሠለስት (ሦስት ሰዓት)። እመቤታችን ቅድስት ድንግል ማርያም የቅዱስ ገብርኤልን ብሥራት የሰማችበት፣ ጌታችን በጲላጦስ አደባባይ የተገረፈበት ሰዓት ነው። በበዓለ ኀምሳም መንፈስ ቅዱስ በሐዋርያት ላይ የወረደው «ከቀኑ ሦስተኛ ሰዓት» ነው።",
          },
          vers: ["Luke 1:26-28", "John 19:1", "Acts 2:15"],
        },
        {
          tekst: {
            no: "3. ቀትር – middag, den sjette time (kl. 12, 6 etiopisk). Kirka lærer at Adam spiste av treet i denne timen, og at Jesus ble korsfestet for å ta bort Adams synd. Da ble det mørkt over hele landet. Midt på dagen er vi trette, og det onde frister lettere. Peter gikk opp på taket for å be ved den sjette time.",
            am: "፫. ቀትር (ስድስት ሰዓት)። አዳም በዲያብሎስ ተታሎ ዕፀ በለስን የበላበት ሰዓት ነው፤ ጌታችንም የአዳምን በደል ሊያጠፋ በቀራንዮ የተሰቀለበት ሰዓት ነው። ቀትር የፀሐይ ሙቀት የሚያይልበት፣ ሰውነት የሚደክምበትና አጋንንት የሚበረቱበት ስለ ሆነ እንጸልያለን። ቅዱስ ጴጥሮስም በስድስት ሰዓት ያህል ይጸልይ ዘንድ ወደ ጣራው ወጣ።",
          },
          vers: ["Gen 3:6", "John 19:14-16", "Mark 15:33", "Acts 10:9"],
        },
        {
          tekst: {
            no: "4. ተሰዓተ ሰዓት – den niende time (kl. 15, 9 etiopisk). I denne timen ropte Jesus på korset og gav fra seg ånden. Kirka lærer også at englene da bærer menneskenes bønner opp til Gud. Det var i den niende time at engelen sa til Kornelius: «Dine bønner … er steget op til ihukommelse for Gud.»",
            am: "፬. ተሰዓተ ሰዓት (ዘጠኝ ሰዓት)። ጌታችን በመስቀል ላይ በታላቅ ድምፅ ጮኾ ቅድስት ነፍሱን ከቅዱስ ሥጋው የለየበት ሰዓት ነው። ቅዱሳን መላእክትም የሰው ልጆችን ሥራ ወደ ፈጣሪ የሚያሳርጉበት ሰዓት ነው። መልአኩ ለቆርኔሌዎስ የተገለጠለት «ከቀኑም ዘጠኝ ሰዓት ያህል» ነበር።",
          },
          vers: ["Mark 15:34-37", "Acts 10:3-4", "Acts 3:1"],
        },
        {
          tekst: {
            no: "5. ጸሎተ ሠርክ – kveldsbønnen (kl. 17, 11 etiopisk). Om kvelden ble Jesu kropp lagt i graven. Kvelden minner oss også om at arbeiderne får lønnen sin når dagen er slutt, slik vi får vår lønn når Kristus kommer igjen. David sier: «La min bønn gjelde som røkoffer for ditt åsyn, mine henders opløftelse som et aften-matoffer!»",
            am: "፭. ጸሎተ ሠርክ (ዐሥራ አንድ ሰዓት)። ጌታችን ዓለምን ለማዳን ነፍሱን ከሥጋው ከለየ በኋላ ወደ መቃብር የወረደበት ሰዓት ነው። ሠርክ የዳግም ምጽአት ምሳሌም ነው፤ ሠራተኛ የሠራውን ዋጋ በሠርክ እንደሚቀበል ምእመናንም ዋጋቸውን በምጽአት ያገኛሉ። ዳዊት «ጸሎቴን በፊትህ እንደ ዕጣን ተቀበልልኝ፥ እጅ መንሣቴም እንደ ሠርክ መሥዋዕት ትሁን» ብሏል።",
          },
          vers: ["Matt 27:57-60", "Matt 20:8", "Ps 141:2"],
        },
        {
          tekst: {
            no: "6. ጸሎተ ንዋም – kveldsbønnen før vi sover (kl. 21, 3 etiopisk om kvelden). ንዋም betyr «søvn». Vi takker Gud for dagen og ber ham bevare oss mot det onde og mot vonde drømmer om natten. Vi minnes at Jesus ba i Getsemane og sa til disiplene: «Våk og bed.»",
            am: "፮. ጸሎተ ንዋም (ከምሽቱ ሦስት ሰዓት)። ንዋም መኝታ ማለት ነው። ዕለቱን በሰላም ስላሳለፈን እናመሰግናለን፤ በሰላም እንዲያሳድረን፣ ከሌሊት አጋንንትና ከቅዠት እንዲጠብቀን እንለምናለን። ጌታችን በጌቴሴማኒ መጸለዩንና ደቀ መዛሙርቱን «ትጉና ጸልዩ» ማለቱን እናስባለን።",
          },
          vers: ["Matt 26:39-41", "Ps 4:9"],
        },
        {
          tekst: {
            no: "7. መንፈቀ ሌሊት – midnattsbønnen (kl. 24, 6 etiopisk om natten). David sier: «Midt om natten står jeg op for å prise dig.» Paulus og Silas sang lovsanger i fengselet ved midnatt. Kirka lærer at Jesus ble født og stod opp om natten, og at han skal komme igjen slik brudgommen kom «midt på natten».",
            am: "፯. መንፈቀ ሌሊት (እኩለ ሌሊት)። ቅዱስ ዳዊት «በእኩለ ሌሊት አመሰግንህ ዘንድ እነሣለሁ» ብሏል። ጳውሎስና ሲላስም በመንፈቀ ሌሊት በወኅኒ ቤት ጸለዩ። ጌታችን በቤተ ልሔም የተወለደውና ሞትን ድል አድርጎ የተነሣው በሌሊት ነው፤ ዳግመኛ ለፍርድ የሚመጣውም ሙሽራው «እኩል ሌሊት» እንደ መጣ ነው።",
          },
          vers: ["Ps 119:62", "Acts 16:25", "Matt 25:6", "Luke 2:8-11"],
        },
      ],
    },
    {
      id: "seatat",
      tittel: { no: "ሰዓታት – kirkas nattbønn", am: "ሰዓታት – የሌሊት ጸሎት" },
      ingress: {
        no: "ሰዓታት betyr «timene». Det er en lang lovsang som prester og diakoner ber i kirka om natten.",
        am: "«ሰዓታት» ማለት የጸሎት ጊዜያት ማለት ነው። ካህናትና ዲያቆናት በሌሊት በቤተ ክርስቲያን የሚያደርሱት ረዥም ምስጋና ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "ሰዓታት ble skrevet av den etiopiske læreren አባ ጊዮርጊስ ዘጋስጫ på 1400-tallet. Han laget bønner for alle døgnets 24 timer. Boka vi bruker i dag, ሰዓታት ዘሌሊት ወዘነግህ, har delen fra midnatt til kl. 4 om morgenen (10 etiopisk om natten). Senere lærere har lagt til flere lovsanger.",
            am: "ሰዓታትን የደረሰው በ15ኛው ምእት ዓመት የነበረው ሊቁ አባ ጊዮርጊስ ዘጋስጫ ነው። እርሱ ለ24 ሰዓታት አገልግሎት የሚሆን መጽሐፍ አዘጋጅቷል። ዛሬ የምንጠቀምበት «ሰዓታት ዘሌሊት ወዘነግህ» ከመንፈቀ ሌሊት እስከ ሌሊቱ አሥር ሰዓት ድረስ ያለውን ክፍል የያዘ ነው። ከእርሱ በኋላ የተነሡ ሊቃውንትም ሌሎች ዝማሬያትን ጨምረዋል።",
          },
          vers: ["Ps 119:62", "Ps 119:147-148"],
        },
        {
          tekst: {
            no: "Prester, diakoner og munker står i den ytre delen av kirka (ቅኔ ማኅሌት) og ber ሰዓታት. I store kirker synger kirkesangerne (ደብተራ) noe annet samtidig. Kirka sier at prester og diakoner som ikke har vært med på ሰዓታት, ikke skal tjene i ቅዳሴ.",
            am: "በታላላቅ አብያተ ክርስቲያናት መነኮሳት፣ ካህናትና ዲያቆናት በቅኔ ማኅሌት ቆመው ሰዓታት ያደርሳሉ፤ ደብተራዎች ደግሞ በዚያው ጊዜ ሌላ አገልግሎት ይፈጽማሉ። በሰዓታት ጸሎት ያልተገኙ ካህናትና ዲያቆናት በቅዳሴ እንዳያገለግሉ ሥርዓቱ ያዝዛል።",
          },
          vers: ["Ps 134:1-2", "Luke 2:37"],
        },
        {
          tekst: {
            no: "ሰዓታት begynner med «ሃሌ ሉያ» og ordene «አአትብ ወእትነሣእ በስመ አብ ወወልድ ወመንፈስ ቅዱስ» – «Jeg korser meg og står opp i Faderens og Sønnens og Den hellige ånds navn.» Så lovsynger vi Gud sammen med englene, som roper «Hellig, hellig, hellig».",
            am: "ሰዓታት «ሃሌ፡ ሃሌ፡ ሃሌ ሉያ … አአትብ ወእትነሣእ በስመ አብ ወወልድ ወመንፈስ ቅዱስ» (በአብ በወልድ በመንፈስ ቅዱስ ስም አማትቤ እነሣለሁ) በማለት ይጀምራል። ከዚያም «ቅዱስ ቅዱስ ቅዱስ» ከሚሉ መላእክት ጋር እግዚአብሔርን እናመሰግናለን።",
          },
          vers: ["Isa 6:3", "Rev 4:8"],
        },
        {
          tekst: {
            no: "Mot slutten ber vi Maria be for oss: «ሰአሊ ለነ ማርያም» – «Be for oss, Maria.» Denne delen ender med Marias egen lovsang: «Min sjel ophøier Herren.»",
            am: "በመጨረሻም «ሰአሊ ለነ ማርያም ማኅቶተ ዓለም» እያልን እመቤታችንን እንድታማልደን እንለምናለን። ይህ ክፍል «ነፍሴ ጌታን ታከብረዋለች» በሚለው በጸሎተ እግዝእትነ ማርያም ይፈጸማል።",
          },
          vers: ["Luke 1:46-49"],
        },
        {
          tekst: {
            no: "Hvorfor ber vi om natten? Jesus ba hele natten til Gud. Han sa at vi skal våke, for vi vet ikke dagen eller timen. De som ber ሰዓታት, er som de kloke jomfruene som ventet på brudgommen med lampene tent.",
            am: "ለምን በሌሊት እንጸልያለን? ጌታችን ሌሊቱን ሁሉ ወደ እግዚአብሔር ሲጸልይ አደረ። ቀኒቱንና ሰዓቲቱን አናውቅምና እንድንነቃ አዘዘን። ሰዓታት የሚያደርሱ ሰዎች መብራታቸውን አብርተው ሙሽራውን እንደ ጠበቁት ልባም ደናግል ናቸው።",
          },
          vers: ["Luke 6:12", "Matt 25:13", "Luke 12:35"],
        },
      ],
    },
    {
      id: "kidan",
      tittel: { no: "ኪዳን – morgen- og kveldsbønnen i kirka", am: "ጸሎተ ኪዳን" },
      ingress: {
        no: "ኪዳን betyr «pakt». ጸሎተ ኪዳን er kirkas felles bønn om morgenen (ነግህ) og om kvelden (ሠርክ).",
        am: "«ኪዳን» ማለት ቃል ኪዳን ማለት ነው። ጸሎተ ኪዳን በነግህና በሠርክ የሚደርስ የቤተ ክርስቲያን የማኅበር ጸሎት ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "Bønnene i ኪዳን er hentet fra en gammel kirkebok som heter መጽሐፈ ኪዳን («Paktens bok»). Kirka lærer at den har Herrens undervisning til apostlene i de førti dagene etter oppstandelsen, om kirkas orden og bønner. Det er tre ኪዳን-bønner for midnatt, tre for morgenen og tre for kvelden.",
            am: "የኪዳን ጸሎታት የተወሰዱት ከጥንታዊው መጽሐፈ ኪዳን ነው። መጽሐፈ ኪዳን ጌታችን ከትንሣኤው በኋላ በአርባው ቀን ለሐዋርያት ስለ ቤተ ክርስቲያን ሥርዓትና ጸሎት ያስተማረውን የያዘ መጽሐፍ እንደ ሆነ ቤተ ክርስቲያን ታስተምራለች። ኪዳን የመንፈቀ ሌሊት ሦስት፣ የነግህ ሦስት፣ የሠርክ ሦስት ነው።",
          },
          vers: ["Acts 1:3", "Acts 2:42"],
        },
        {
          tekst: {
            no: "Morgen-ኪዳን bes før ቅዳሴ. På store høytider bes den etter ማኅሌት, når natten er over, og så begynner ቅዳሴ. Allerede i Det gamle testamentet ble det ofret et lam om morgenen og et om kvelden. David sang om Guds miskunnhet om morgenen og hans trofasthet om natten.",
            am: "የነግህ ኪዳን ከቅዳሴ በፊት ይደርሳል። በዓመት በዓላት ሌሊቱን በማኅሌት ካደሩ በኋላ ሲነጋ ካህናቱ ኪዳን ያደርሳሉ፤ ከዚያም ቅዳሴ ይገባል። በብሉይ ኪዳንም አንዱ ጠቦት በማለዳ፣ ሁለተኛው በማታ ይቀርብ ነበር። ዳዊትም «በማለዳ ምሕረትን፥ በሌሊትም እውነትህን ማውራት» መልካም እንደ ሆነ ዘመረ።",
          },
          vers: ["Exod 29:39", "Ps 92:3"],
        },
        {
          tekst: {
            no: "Prestene ber ኪዳን i den ytre delen av kirka (ቅኔ ማኅሌት). Presten ser mot øst og begynner: «Hellig», og folket fortsetter: «Gud, hellig Sterke, hellig Levende som ikke dør … forbarm deg over oss, Herre.» Senere vender presten seg mot folket og sier: «Ære være Gud», og folket svarer: «ርቱዕ ይደሉ» – «Det er rett og verdig.» Prestene brenner røkelse med røkelseskaret (ማዕጠንት), leser salmeverset (ምስባክ) og evangeliet. Folket står og ber med, slik folket stod utenfor templet og ba i røkofferets stund.",
            am: "ካህናቱ በቅኔ ማኅሌት ኪዳን ያደርሳሉ። ካህኑ ወደ ምሥራቅ ዞሮ «ቅዱስ» ብሎ ይጀምራል፤ ሕዝቡም «እግዚአብሔር፥ ቅዱስ ኃያል፥ ቅዱስ ሕያው ዘኢይመውት … ተሣሀለነ እግዚኦ» ብለው ይቀበላሉ። ቀጥሎ ካህኑ ወደ ሕዝቡ ዞሮ «ለእግዚአብሔር ምስጋና ይገባል» ሲል ሕዝቡ «ርቱዕ ይደሉ» ብለው ይመልሳሉ። በማዕጠንት ዕጣን ያጥናሉ፤ ከመጽሐፈ ግጻዌ ምስባኩን ያዜማሉ፤ ወንጌልም ይነበባል። ምእመናንም በዕጣን ጊዜ በውጭ ቆመው ይጸልዩ እንደ ነበሩት ሕዝብ ቆመው አብረው ይጸልያሉ።",
          },
          vers: ["Luke 1:10", "Ps 141:2"],
        },
        {
          tekst: {
            no: "I kvelds-ኪዳን ber prestene: «ለከ እንዘ ንዌድስ ወኢናዕርፍ ለዝሉፉ በአልባቢነ ናስተማስል አምሳለ መንግሥትከ» – «Mens vi priser deg uten å hvile, ser vi for oss ditt rike i hjertene våre.» Når vi står i kirka, er det som om vi står i himmelen.",
            am: "ካህናት በኪዳን «ለከ እንዘ ንዌድስ ወኢናዕርፍ ለዝሉፉ በአልባቢነ ናስተማስል አምሳለ መንግሥትከ» ይላሉ፤ ይህም ዘወትር ሳናቋርጥ እያመሰገንን ሰማያዊ መንግሥቱን በሕሊናችን እንሥላለን ማለት ነው። በቤተ ክርስቲያን ስንቆም በሰማያት የቆምን ያህል ነው።",
          },
          vers: ["Rev 4:8", "Heb 12:22-24"],
        },
        {
          tekst: {
            no: "Kirkas lærere sier at Gud har satt av tre tider av døgnet da vi skal gå til kirka: morgenen, tiden for ቅዳሴ og kvelden. Morgen- og kveldsbønnen bør vi be i kirka, særlig på lørdag og søndag og på høytidene. Under ኪዳን og ቅዳሴ snakker vi ikke, og vi ber ikke våre egne bønner høyt. Vi ber sammen, med én munn.",
            am: "እግዚአብሔር ከ፳፬ ሰዓታት መካከል ወደ ቤተ ክርስቲያን የምንሄድባቸውን ሦስት ሰዓታት አደረገ፤ ነግህ፣ ጊዜ ቅዳሴና ሠርክ። የነግህና የሠርክ ጸሎት በቤተ ክርስቲያን ሊደረጉ ይገባል፤ ይልቁንም በሁለቱም ሰንበታትና በበዓላት። በኪዳንና በቅዳሴ ጊዜ አንነጋገርም፤ በማኅበር ጸሎት ጊዜ የግል ጸሎት አናደርስም፤ በአንድ ልብና በአንድ አፍ አብረን እንጸልያለን።",
          },
          vers: ["Ps 122:1", "Rom 15:6"],
        },
      ],
    },
    {
      id: "daglig",
      tittel: { no: "ውዳሴ ማርያም og ዳዊት – daglige bønner", am: "ውዳሴ ማርያምና ዳዊት – የዘወትር ጸሎት" },
      ingress: {
        no: "Kirkas lærere sier at det er en kristen skikk å gå i ቅዳሴ, be ኪዳን og lese ውዳሴ ማርያም og ዳዊት.",
        am: "ቅዳሴ ማስቀደስ፣ ኪዳን ማድረስ፣ ውዳሴ ማርያምና ዳዊት መድገም ክርስቲያናዊ ምግባር ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "ውዳሴ ማርያም betyr «lovsangen til Maria». Den ble skrevet av ቅዱስ ኤፍሬም ሶርያዊ (Efrem syreren). Den er delt i sju, én for hver dag i uka, fra mandag til søndag. I den priser vi Gud for at Guds Sønn ble menneske av Maria. Maria sa selv: «Fra nu av skal alle slekter prise mig salig.»",
            am: "ውዳሴ ማርያም ማለት የእመቤታችን ምስጋና ማለት ነው። የደረሰው ቅዱስ ኤፍሬም ሶርያዊ ነው። ከሰኞ እስከ እሑድ ለእያንዳንዱ ዕለት አንድ ክፍል ሆኖ በሰባት ተከፍሏል። በእርሱ የእግዚአብሔር ልጅ ከእርሷ ሰው በመሆኑ እግዚአብሔርን እናመሰግናለን። እመቤታችንም «ከዛሬ ጀምሮ ትውልድ ሁሉ ብፅዕት ይሉኛል» ብላለች።",
          },
          vers: ["Luke 1:28", "Luke 1:48"],
        },
        {
          tekst: {
            no: "Kirkas lærere forteller at Maria viste seg for Efrem og sa: «Lovpris meg.» Han svarte: «Når englene i himmelen og de hellige på jorden ikke klarer å prise deg nok, hvordan skulle jeg klare det?» Hun sa: «Tal slik Den hellige ånd gir deg.» Han ba om velsignelse, og så begynte han. Derfor begynner også vi med å be om velsignelse (ባርክኒ) før ውዳሴ ማርያም.",
            am: "እመቤታችን ለቅዱስ ኤፍሬም ተገልጣ «ወድሰኒ» (አመስግነኝ) አለችው። እርሱም «ምድራውያን ጻድቃን ሰማዕታት፣ ሰማያውያን መላእክት አንቺን ማመስገን የማይቻላቸው ለእኔ እንደምን ይቻለኛል?» አላት። እርሷም «መንፈስ ቅዱስ እንዳናገረህ ተናገር» አለችው። «ባርክኒ» ብሎ ከተባረከ በኋላ ምስጋናዋን ጀመረ። እኛም ውዳሴ ማርያምን ከመጀመራችን በፊት «ባርክኒ» እንላለን።",
          },
          vers: ["Matt 10:19-20", "Luke 1:41-42"],
        },
        {
          tekst: {
            no: "ዳዊት er Davids salmer (መዝሙረ ዳዊት), kirkas eldste bønnebok. Jesus selv ba med Davids ord på korset: «Min Gud! Min Gud! hvorfor har du forlatt mig?» Prestene ber Davids salmer før ቅዳሴ, og mange kristne leser ዳዊት hver dag.",
            am: "ዳዊት መዝሙረ ዳዊት ነው፤ የቤተ ክርስቲያን ጥንታዊ የጸሎት መጽሐፍ ነው። ጌታችንም በመስቀል ላይ «አምላኬ፥ አምላኬ፥ ለምን ተውኸኝ?» በሚለው የዳዊት ቃል ጸለየ። ካህናት ከቅዳሴ በፊት መዝሙረ ዳዊትን ይደግማሉ፤ ብዙ ምእመናንም በየዕለቱ ዳዊት ይደግማሉ።",
          },
          vers: ["Ps 22:2", "Matt 27:46", "Col 3:16", "Jas 5:13"],
        },
        {
          tekst: {
            no: "Kirka har også andre lovsanger til Maria som er ordnet etter ukedagene, som አርጋኖነ ማርያም («Marias orgel»). Bildet øverst på denne siden er fra en slik bønnebok. Kirka ser Maria i Davids ord om dronningen som står ved kongens høyre hånd i gull.",
            am: "ቤተ ክርስቲያናችን በዕለታት የተከፋፈሉ ሌሎች የእመቤታችን ምስጋናዎችም አሏት፤ ከእነዚህም አንዱ አርጋኖነ ማርያም ነው። በዚህ ገጽ ላይ ያለው ሥዕል ከእንዲህ ያለ የጸሎት መጽሐፍ የተወሰደ ነው። ዳዊት «በወርቅ ልብስ ተጐናጽፋና ተሸፋፍና ንግሥቲቱ በቀኝህ ትቆማለች» ያለው ስለ እመቤታችን ነው።",
          },
          vers: ["Ps 45:10"],
        },
        {
          tekst: {
            no: "På dette nettstedet finner du bønneboka under «Bønner» (/bonner/). Der står den daglige bønnen (የዘወትር ጸሎት), ውዳሴ ማርያም for hver dag i uka og englenes lovsang, på ge'ez, amharisk og norsk side om side.",
            am: "በዚህ ድረ ገጽ «ጸሎት» በሚለው ክፍል የጸሎት መጽሐፉን ታገኛላችሁ፤ የዘወትር ጸሎት፣ ለየዕለቱ ውዳሴ ማርያምና የመላእክት ምስጋና በግእዝ፣ በአማርኛና በኖርዌይኛ ጎን ለጎን ተጽፈዋል።",
          },
        },
      ],
    },
    {
      id: "hjemme",
      tittel: { no: "Slik ber vi hjemme", am: "በቤታችን እንዴት እንጸልያለን?" },
      punkter: [
        {
          tekst: {
            no: "Vi forbereder oss utvendig: Vi vasker hender og ansikt, legger ነጠላ over skuldrene i korsform og tenner et lys. Lyset minner oss om at Gud og de hellige er lys, og at englene og de hellige er rundt oss. Vi står foran de hellige bildene (ሥዕላት).",
            am: "ውጫዊ ዝግጅት እናደርጋለን፤ እጃችንንና ፊታችንን እንታጠባለን፤ ነጠላችንን መስቀልያ እናደርጋለን፤ ጧፍ ወይም ሻማ እናበራለን። መብራቱ የእግዚአብሔርንና የቅዱሳኑን ብርሃንነት፣ ቅዱሳን መላእክትም በዙሪያችን እንዳሉ ያሳስበናል። በቅዱሳት ሥዕላት ፊት ቆመን እንጸልያለን።",
          },
          vers: ["Matt 5:16", "Luke 12:35"],
        },
        {
          tekst: {
            no: "Vi forbereder oss også innvendig: Vi ber med kjærlighet og tro, og vi bærer ikke nag. Jesus sa: «Dersom I forlater menneskene deres overtredelser, da skal eders himmelske Fader også forlate eder.»",
            am: "ውስጣዊ ዝግጅትም ያስፈልጋል፤ በፍቅርና በጽኑ እምነት እንጸልያለን፤ ቂም በቀል አንይዝም። ጌታችን «ለሰዎች ኃጢአታቸውን ይቅር ብትሉ፥ የሰማዩ አባታችሁ እናንተን ደግሞ ይቅር ይላችኋል» ብሏልና።",
          },
          vers: ["Matt 6:14", "Mark 11:25"],
        },
        {
          tekst: {
            no: "Vi står rett opp på begge bein, uten å lene oss, hvis vi ikke er syke. Er det ingen bilder, ser vi mot øst, for Kristus skal komme igjen fra øst. Vi løfter hendene og ser opp mot himmelen, slik Jesus gjorde da han vekket opp Lasarus.",
            am: "ካልታመምን በስተቀር ሳንደገፍ በሁለት እግራችን ቀጥ ብለን እንቆማለን። ሥዕላት ከሌሉ ፊታችንን ወደ ምሥራቅ እናዞራለን፤ «መብረቅ ከምሥራቅ ወጥቶ እስከ ምዕራብ እንደሚታይ» የጌታ ዳግም ምጽአት እንዲሁ ነውና። ጌታችን አልዓዛርን ሲያስነሣ እንዳደረገው እጆቻችንን አንሥተን ዓይናችንን ወደ ሰማይ አቅንተን እንጸልያለን።",
          },
          vers: ["Ps 5:4", "Matt 24:27", "Ps 134:2", "John 11:41"],
        },
        {
          tekst: {
            no: "Når bønnen begynner og slutter, korser vi oss rolig fra pannen og ned og fra venstre til høyre og sier: «በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ» – «I Faderens og Sønnens og Den hellige ånds navn, én Gud.» Med korset jager vi bort djevelens makt.",
            am: "ጸሎት ስንጀምርና ስንፈጽም ጣቶቻችንን በመስቀል አምሳል አመሳቅለን ከላይ ወደ ታች፣ ከግራ ወደ ቀኝ ረጋ ብለን እናማትባለን፤ «በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ» እንላለን። በማማተብ የዲያብሎስን ሠራዊት እናርቃለን።",
          },
          vers: ["Gal 6:14", "1Cor 1:18"],
        },
        {
          tekst: {
            no: "Vi bøyer oss ned (ስግደት) når bønnen begynner og slutter, slik Jesus falt på kne i Getsemane. Men på lørdag og søndag, i de femti dagene etter påske, på Herrens dag den 29., Marias dag den 21., Mikaels dag den 12. og etter at vi har tatt imot nattverden, kaster vi oss ikke ned med knærne i jorda. Da er det fest, og vi lovsynger med munnen.",
            am: "በጸሎት መጀመሪያና መጨረሻ ጌታ በጌቴሴማኒ እንዳደረገው ተንበርክከን እንሰግዳለን። ነገር ግን በዕለተ ሰንበት (ቅዳሜና እሑድ)፣ በበዓለ ሃምሳ፣ በበዓለ ወልድ በሀያ ዘጠኝ፣ በእመቤታችን በሀያ አንድ፣ በቅዱስ ሚካኤል በዐሥራ ሁለት እና ሥጋውንና ደሙን ከተቀበልን በኋላ ጉልበታችንን ምድር አስነክተን አንሰግድም። ዕለታቱ በዓላት ናቸውና በአንደበታችን እናመሰግናለን።",
          },
          vers: ["Luke 22:41", "Ps 95:6"],
        },
        {
          tekst: {
            no: "Vi ber når vi står opp om morgenen, før vi gjør noe annet. Vi ber når vi kommer hjem, før og etter maten (etter maten sier vi «ስብሐት», «lov og pris») og før vi legger oss. Vi ber også for landet vårt og for fred. Familien kan be sammen: «Jeg og mitt hus vi vil tjene Herren.»",
            am: "ጠዋት ስንነሣ ምንም ሳናደርግ እንጸልያለን፤ ውለን ወደ ቤት ስንገባ፣ ከመመገባችን በፊትና ከተመገብን በኋላ «ስብሐት» ብለን፣ ማታም ከመተኛታችን በፊት እንጸልያለን። ስለ ሀገራችን ሰላምም እንጸልያለን። ቤተ ሰብም በአንድነት ሊጸልይ ይገባል፤ «እኔና ቤቴ ግን እግዚአብሔርን እናመልካለን» ተብሏልና።",
          },
          vers: ["Matt 14:19", "1Tim 4:4-5", "Josh 24:15"],
        },
        {
          tekst: {
            no: "Vi avbryter ikke bønnen for å snakke med noen. Må vi stoppe, avslutter vi med «Fader vår», og når vi fortsetter, begynner vi igjen med «Fader vår». Vi ber hver dag og slutter ikke. Er vi et sted der vi ikke kan be høyt, ber vi i hjertet, slik Nehemja ba stille til Gud foran kongen.",
            am: "ጸሎታችንን አቋርጠን ከማንም ጋር በቃልም በምልክትም አንነጋገርም። የሚያቋርጥ ችግር ከገጠመን «አባታችን ሆይ» ብለን እናሳርጋለን፤ ስንመለስም «አባታችን ሆይ» ብለን እንቀጥላለን። ከጀመርን አናቋርጥም። መጸለይ በማንችልበት ቦታ ከሆንን በልባችን እንጸልያለን፤ ነህምያ በንጉሡ ፊት በልቡ እንደ ጸለየ።",
          },
          vers: ["Neh 2:4-5", "Luke 18:1"],
        },
      ],
    },
    {
      id: "dode",
      tittel: { no: "Bønn for de døde – ፍትሐት og ተዝካር", am: "ጸሎተ ፍትሐትና ተዝካር" },
      punkter: [
        {
          tekst: {
            no: "Kirka ber også for dem som er døde i troen. ጸሎተ ፍትሐት er en bønn der kirka ber Gud løse den døde fra syndene sine. ተዝካር kommer av ge'ez «ዘከረ», å minnes, og er en minnestund med bønn. Begge er bønn, ikke et festmåltid. Paulus ba for Onesiforus: «Herren gi han må finne miskunn hos Herren på hin dag!»",
            am: "ቤተ ክርስቲያን በሃይማኖት ጸንተው ላረፉትም ትጸልያለች። ጸሎተ ፍትሐት ሙታን ከኃጢአታቸው እንዲፈቱ የሚቀርብ ጸሎት ነው። «ተዝካር» «ዘከረ» (አሰበ) ከሚለው የግእዝ ግሥ የወጣ ሲሆን መታሰቢያ ማለት ነው። ሁለቱም ጸሎት እንጂ ድግስ አይደሉም። ቅዱስ ጳውሎስም ስለ ሄኔሲፎሩ «በዚያን ቀን ከጌታ ምሕረትን እንዲያገኝ ጌታ ይስጠው» ብሎ ጸልዮአል።",
          },
          vers: ["2Tim 1:16-18"],
          andre: [
            {
              no: "Sirak 38:16: «Mitt barn, gråt over den døde … hold minnestund (ተዝካር) for ham etter landets skikk.»",
              am: "ሲራክ 38፥16፤ «ልጄ ለሞተ ሰው አልቅስለት እዘንለት፤ እንደ አገሩ ተዝካር አውጣለት።»",
            },
          ],
        },
        {
          tekst: {
            no: "Også i ቅዳሴ ber presten for de levende og de døde. Mer om ፍትሐት og ተዝካር, og om håpet om oppstandelsen, kan du lese på siden om oppstandelsen.",
            am: "በቅዳሴም ካህኑ ስለ ሕያዋንና ስለ ሙታን ይጸልያል። ስለ ጸሎተ ፍትሐትና ተዝካር እንዲሁም ስለ ትንሣኤ ሙታን ተስፋ በትንሣኤ ገጽ ላይ ተጨማሪ ታገኛላችሁ።",
          },
          vers: ["Rom 14:8-9", "John 11:25-26"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Klemens", am: "ቅዱስ ቀሌምንጦስ" },
      tekst: {
        no: "«I den niende time tjener englene Gud, og alle menneskenes bønner når opp til Den høyeste i denne timen.» Derfor ber vi da om at englene skal bære fram våre gode gjerninger.",
        am: "«በዘጠኝ ሰዓት መላእክት ለእግዚአብሔር ይገዛሉ፤ የሰው ልጆችም ሁሉ ጸሎት ወደ ልዑል እግዚአብሔር የምትደርሰው በዚሁ ሰዓት ነው።» ስለዚህ ክፉ ሥራችንን ትተው በጎ ሥራችንን እንዲያቀርቡልን እንጸልያለን።",
      },
      kilde: "መጽሐፈ ቀሌምንጦስ 3:8 – sitert i Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን», del 2 (eotcmk.org)",
    },
    {
      navn: { no: "Sawiros av Eshmunein", am: "ሳዊሮስ ዘእስሙናይን" },
      tekst: {
        no: "«Av døgnets 24 timer har Gud satt av tre tider da vi skal gå til kirka: morgenen, tiden for ቅዳሴ og kvelden.»",
        am: "«እግዚአብሔር ከ፳፬ ሰዓታት መካከል ወደ ቤተ ክርስቲያን ይሄዱባቸው ዘንድ ሦስት ሰዓታትን አደረገ፤ እሊህም ነግህ፣ ጊዜ ቅዳሴና ሠርክ ናቸው።»",
      },
      kilde: "ድርሳነ ሳዊሮስ ዘእስሙናይን s. 149 – sitert i Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን», del 1 (eotcmk.org)",
    },
    {
      navn: { no: "Fedrene i ፍትሐ ነገሥት", am: "አበው በፍትሐ ነገሥት" },
      tekst: {
        no: "Bønn er menneskets samtale med Gud. Den som ber, skal holde seks regler: stå oppreist, ha beltet spent (et rent hjerte), vende seg mot øst, gjøre korsets tegn, be med frykt og beven, og bøye kne og kaste seg ned, slik Herren gjorde natten han led. Den som er et sted der han ikke kan be, skal be i tankene.",
        am: "ጸሎት ሰው ከልዑል እግዚአብሔር ጋር የሚነጋገርበት ነው። ለሚጸልይ ሰው ፮ ሥርዓቶች አሉ፤ በእግር ቀጥ ብሎ መቆም፣ ወገብን (ልቡናን በንጽሕና) መታጠቅ፣ ፊትን ወደ ምሥራቅ ማዞር፣ ማማተብ፣ በፍርሃትና በመንቀጥቀጥ መጸለይ፣ ጌታ በሕማሙ ሌሊት እንዳደረገው ተንበርክኮ መስገድ። መጸለይ በማይችልበት ቦታ ያለ ሰው በሕሊናው ይጸልይ።",
      },
      kilde: "ፍትሐ ነገሥት, kap. 14 – gjengitt i ethiopianorthodox.org: «Worship in the Ethiopian Orthodox Church» og Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን», del 2",
    },
    {
      navn: { no: "Abba Giyorgis av Gasicha", am: "አባ ጊዮርጊስ ዘጋስጫ" },
      tekst: {
        no: "Han lærte kirka å begynne nattbønnen slik: «ሃሌ ሉያ … አአትብ ወእትነሣእ በስመ አብ ወወልድ ወመንፈስ ቅዱስ» – «Halleluja … Jeg korser meg og står opp i Faderens og Sønnens og Den hellige ånds navn.» Natten begynner med korsets tegn og lovsang.",
        am: "ሰዓታትን «ሃሌ፡ ሃሌ፡ ሃሌ ሉያ፥ ሃሌ፡ ሃሌ ሉያ፤ አአትብ ወእትነሣእ በስመ አብ ወወልድ ወመንፈስ ቅዱስ» በማለት እንዲጀመር አደረገ። የሌሊቱ ጸሎት በትእምርተ መስቀልና በምስጋና ይጀመራል።",
      },
      kilde: "አባ ጊዮርጊስ ዘጋስጫ: ሰዓታት ዘሌሊት ወዘመዓልት – sitert i ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን, s. 198–199 (ethiopianorthodox.org)",
    },
    {
      navn: { no: "Fedrene (አበው)", am: "አበው" },
      tekst: {
        no: "«Bønnen er gjerdet rundt livet vårt.» Slik et gjerde vokter huset mot tyver, vokter bønnen oss mot djevelens fristelser. Fedrene vant over fienden ved bønn.",
        am: "አባቶቻችን «ጸሎት የሕይወታችን አጥር ነው» ይላሉ። የቤት አጥር ቤትን ከሌባ እንደሚከልል ጸሎትም ዲያብሎስ ከሚያመጣው ፈተና ይከልለናል። አባቶቻችን በጸሎት ጠላትን ድል አድርገዋል።",
      },
      kilde: "Mahibere Kidusan for barn: «ሥርዓተ ጸሎት» (eotcmk.org)",
    },
  ],
  ord: [
    { ord: "ጸሎት", forklaring: { no: "bønn; av ጸለየ, «å be»", am: "ልመናና ምስጋና" } },
    { ord: "ሰባቱ የጸሎት ጊዜያት", forklaring: { no: "de sju bønnetidene", am: "በቀን ሰባት ጊዜ የሚደርስ ጸሎት" } },
    { ord: "ነግህ", forklaring: { no: "morgenen; morgenbønnen kl. 6", am: "ማለዳ" } },
    { ord: "ሠለስት", forklaring: { no: "den tredje time, kl. 9", am: "ሦስት ሰዓት" } },
    { ord: "ቀትር", forklaring: { no: "middag, den sjette time, kl. 12", am: "ስድስት ሰዓት" } },
    { ord: "ተሰዓት", forklaring: { no: "den niende time, kl. 15", am: "ዘጠኝ ሰዓት" } },
    { ord: "ሠርክ", forklaring: { no: "kvelden, kl. 17", am: "ዐሥራ አንድ ሰዓት" } },
    { ord: "ንዋም", forklaring: { no: "søvn; bønnen før vi legger oss, kl. 21", am: "መኝታ" } },
    { ord: "መንፈቀ ሌሊት", forklaring: { no: "midnatt", am: "እኩለ ሌሊት" } },
    { ord: "ሰዓታት", forklaring: { no: "kirkas nattbønn, skrevet av Abba Giyorgis", am: "የሌሊት ጸሎት" } },
    { ord: "ኪዳን", forklaring: { no: "«pakt»; morgen- og kveldsbønnen i kirka", am: "ቃል ኪዳን፤ የነግህና የሠርክ ጸሎት" } },
    { ord: "ውዳሴ ማርያም", forklaring: { no: "lovsangen til Maria av Efrem, én del for hver ukedag", am: "የቅዱስ ኤፍሬም የእመቤታችን ምስጋና" } },
    { ord: "ዳዊት / መዝሙረ ዳዊት", forklaring: { no: "Davids salmer", am: "የዳዊት መዝሙራት" } },
    { ord: "ስግደት", forklaring: { no: "å bøye seg ned til jorda i tilbedelse", am: "መስገድ" } },
    { ord: "ማማተብ", forklaring: { no: "å gjøre korsets tegn", am: "በትእምርተ መስቀል ማተብ" } },
    { ord: "ፍትሐት / ተዝካር", forklaring: { no: "bønn for de døde / minnestund", am: "ለሙታን የሚደረግ ጸሎት / መታሰቢያ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvorfor har kirka sju bønnetider?", am: "ቤተ ክርስቲያን ሰባት የጸሎት ጊዜያት ያሏት ለምንድን ነው?" },
      svar: {
        no: "Fordi David sa: «Syv ganger om dagen har jeg prist dig.» Bønnetidene hjelper oss å huske Gud hele dagen.",
        am: "ዳዊት «ሰባት ጊዜ በቀን አመሰግንሃለሁ» ስላለ ነው። የጸሎት ጊዜያቱ ቀኑን ሙሉ እግዚአብሔርን እንድናስብ ይረዱናል።",
      },
    },
    {
      sporsmal: { no: "Hva heter de sju bønnetidene?", am: "ሰባቱ የጸሎት ጊዜያት ምን ምን ይባላሉ?" },
      svar: {
        no: "ነግህ (morgen), ሠለስት (den tredje time), ቀትር (middag), ተሰዓት (den niende time), ሠርክ (kveld), ንዋም (før vi sover) og መንፈቀ ሌሊት (midnatt).",
        am: "ነግህ፣ ሠለስት፣ ቀትር፣ ተሰዓት፣ ሠርክ፣ ንዋምና መንፈቀ ሌሊት።",
      },
    },
    {
      sporsmal: { no: "Hva minnes vi i den sjette og den niende time?", am: "በስድስት ሰዓትና በዘጠኝ ሰዓት ምን እናስባለን?" },
      svar: {
        no: "I den sjette time ble Jesus korsfestet. I den niende time gav han fra seg ånden på korset.",
        am: "በስድስት ሰዓት ጌታችን ተሰቀለ፤ በዘጠኝ ሰዓት ነፍሱን ከሥጋው ለየ።",
      },
    },
    {
      sporsmal: { no: "Hvem skrev ሰዓታት, og når bes den?", am: "ሰዓታትን የደረሰው ማን ነው? መቼ ይደርሳል?" },
      svar: {
        no: "አባ ጊዮርጊስ ዘጋስጫ. Prester og diakoner ber den i kirka om natten.",
        am: "አባ ጊዮርጊስ ዘጋስጫ፤ ካህናትና ዲያቆናት በሌሊት በቤተ ክርስቲያን ያደርሱታል።",
      },
    },
    {
      sporsmal: { no: "Hva er ኪዳን?", am: "ኪዳን ምንድን ነው?" },
      svar: {
        no: "Kirkas felles bønn om morgenen og kvelden. Bønnene kommer fra den gamle boka መጽሐፈ ኪዳን. Morgen-ኪዳን bes før ቅዳሴ.",
        am: "በነግህና በሠርክ የሚደርስ የማኅበር ጸሎት ነው፤ ጸሎታቱ ከመጽሐፈ ኪዳን የተወሰዱ ናቸው። የነግህ ኪዳን ከቅዳሴ በፊት ይደርሳል።",
      },
    },
    {
      sporsmal: { no: "Hvem skrev ውዳሴ ማርያም, og hvor finner du den?", am: "ውዳሴ ማርያምን የደረሰው ማን ነው? የት ታገኘዋለህ?" },
      svar: {
        no: "ቅዱስ ኤፍሬም ሶርያዊ. Den er delt i sju, én for hver ukedag. På dette nettstedet står den under «Bønner».",
        am: "ቅዱስ ኤፍሬም ሶርያዊ፤ ለየዕለቱ በሰባት ተከፍሏል። በዚህ ድረ ገጽ «ጸሎት» በሚለው ክፍል ይገኛል።",
      },
    },
    {
      sporsmal: { no: "Hvilke dager kaster vi oss ikke ned med knærne i jorda?", am: "በየትኞቹ ዕለታት ጉልበታችንን ምድር አስነክተን አንሰግድም?" },
      svar: {
        no: "Lørdag og søndag, de femti dagene etter påske, den 29., 21. og 12. i måneden, og etter at vi har tatt imot nattverden.",
        am: "በቅዳሜና በእሑድ፣ በበዓለ ሃምሳ፣ በ፳፱፣ በ፳፩ና በ፲፪ እንዲሁም ሥጋውንና ደሙን ከተቀበልን በኋላ።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: ሥርዓተ አምልኮ, del 1 (ሰባቱ የጸሎት ጊዜያት)", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae/" },
    { navn: "Mahibere Kidusan: የምእመናን ድርሻ በቤተ ክርስቲያን, del 1", url: "https://eotcmk.org/a/%e1%8b%a8%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%b5%e1%88%ad%e1%88%bb-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95/" },
    { navn: "Mahibere Kidusan: የምእመናን ድርሻ በቤተ ክርስቲያን, del 2", url: "https://eotcmk.org/a/%e1%8b%a8%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%b5%e1%88%ad%e1%88%bb-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95-2/" },
    { navn: "Mahibere Kidusan for barn: ሥርዓተ ጸሎት", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8c%b8%e1%88%8e%e1%89%b5/" },
    { navn: "Mahibere Kidusan for barn: ጸሎት በቤተ ክርስቲያን", url: "https://eotcmk.org/a/%e1%8c%b8%e1%88%8e%e1%89%b5-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95/" },
    { navn: "Mahibere Kidusan: ጸሎትና ክርስቲያናዊ ሕይወት", url: "https://eotcmk.org/a/%e1%8c%b8%e1%88%8e%e1%89%b5%e1%8a%93-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%93%e1%8b%8a-%e1%88%95%e1%8b%ad%e1%8b%88%e1%89%b5/" },
    { navn: "Mahibere Kidusan: ሥርዓተ አምልኮ, del 3 (ሥርዓተ ክብረ በዓላት)", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae-3/" },
    { navn: "Mahibere Kidusan: ሥርዓተ አምልኮ, del 4 (ንዋያተ ቅድሳት)", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae-4/" },
    { navn: "Mahibere Kidusan: ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!", url: "https://eotcmk.org/a/%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%a8%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95%e1%8a%95-%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b5-%e1%88%8a%e1%8c%a0/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Church Music", url: "https://www.ethiopianorthodox.org/churchmusic/ecclesia.html" },
    { navn: "ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን (ethiopianorthodox.org)", url: "https://www.ethiopianorthodox.org/amharic/yezemametsheft/kesis%20meberatu/Akoteta_Qurban.pdf" },
    { navn: "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን: ተዝካርና ፍትሐት", url: "https://www.ethiopianorthodox.org/amharic/tiyakenamelse/qanda/tezkarenafitehat.pdf" },
    { navn: "Marcos Daoud: The Liturgy of the Ethiopian Church (innledning av erkebiskop Yesehaq)", url: "http://www.eotc.faithweb.com/liturgy.htm" },
    { navn: "Søndagsskolebok for 8. klasse: መሠረተ ሃይማኖት (scribd)", url: "https://www.scribd.com/document/1036651354/g8-Meserete-Haymanot-Srat-Snemgbar-24" },
  ],
  utkast: true,
};
