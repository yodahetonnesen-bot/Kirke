import type { Tema } from "./typer";

// Bygger på Mahibere Kidusans undervisning om kristent liv i hverdagen:
// «የምእመናን ድርሻ በቤተ ክርስቲያን» (bønn før alt annet om morgenen, ነጠላ i kors ved bønn, søndag: høre ቅዳሴ og
// evangeliet og så besøke syke, forsone uvenner og trøste sørgende, etter ፍትሐ ነገሥት), «ምእመናን በቤተ ክርስቲያን
// ሥርዓት ሊጠብቁ ይገባል!» (ነጠላ i korsform til minne om Jesu lidelse), «ማማተብ» (barnesiden), «ክርስቲያናዊ ሥነ ምግባር»
// del 1 og 2 og «‹‹ልጆች ሆይ ለወላጆቻችሁ በጌታ ታዘዙ››» (lydighet, tilgivelse, godhet, Johannes den lille), «ምጽዋት» og
// «‹‹ለሰዎች ትታዩ ዘንድ፥ ምጽዋታችሁን በሰዎች ፊት እንዳታደርጉ ተጠንቀቁ!››» (ዮሐንስ አፈወርቅ om ምጽዋት),
// «‹‹ከአነጋገርህ የተነሣ ትጸድቃለህ››» (tungen, sladder og løgn), «የተቀደሰ ውኃ» (ጠበል, ጸበል/እምነት, falske «døpere»),
// «የምእመናን ድርሻ በቤተ ክርስቲያን» om høytider (ፍትሐ ነገሥት አንቀጽ ፲፱ om søndagen) og «“እግዚአብሔር ሰንበትን ቀደሳት”»
// (ቅዱስ ያሬድ i ጾመ ድጓ og ቅዳሴ አትናቴዎስ om søndagen), «ጌታችን ጾመ፤ በዲያብሎስም ተፈተነ» (uttrykket «ማተብ መበጠስ»).
// Kidane Wold Kifles ordbok (gjengitt på dictionary.abyssinica.com) om ordet ጠበል.
// Det meste om bønnetidene, korsets tegn, skriftefaren, gudforeldrene, ጸበል, ጽዋ ማኅበር og fasten står utførlig på
// sidene om bønnetidene, i kirka, skriftemålet, dåpen, sykesalvingen, Maria- og helgenfestene og fastene. Her er bare
// det som gjelder hverdagen hjemme, og det er skrevet kort.
// Usikkert: At man sier «ይፍቱኝ» («løs meg») når man kysser prestens kors, og at presten svarer «እግዚአብሔር ይፍታ»,
// er vanlig praksis, men jeg fant ingen skriftlig Tewahedo-kilde som sier det. Bør sjekkes med presten.
// Usikkert: Ordet ጠበል ጸዲቅ (også skrevet ጸበል ጻድቅ) om maten og drikken som deles ved ማኅበር og ዝክር, bygger på
// Kidane Wold Kifles ordbok (ጠበል = «የማኅበር የዝክር የተዝካር … ጠላ») og på at MK-TV har et program med dette navnet.
// Jeg fant ingen MK-artikkel som forklarer skikken nærmere.
// Usikkert: At ማተብ skal bæres hele tiden og ikke tas av (heller ikke på skolen eller i idrett), er vanlig lære i
// søndagsskolen, men jeg fant det ikke skrevet rett ut i en kilde. MK bruker uttrykket «ማተብ መበጠስ» om å svikte troen.
// Usikkert: Bruken av Ordspråkene 6,20–21 («knytt dem fast om din hals») om ማተብ er vår egen sammenligning, ikke
// hentet fra en kilde.
// Usikkert: At presten kan be over vann og velsigne et hjem, står i MK-artikkelen «የተቀደሰ ውኃ» («i kirka og i
// hjemmet»). Hvordan en husvelsignelse foregår i detalj, fant jeg ikke.
export const kristentLiv: Tema = {
  slug: "kristent-liv",
  del: "hverdag",
  tittel: { no: "Kristent liv i hverdagen", am: "ክርስቲያናዊ ሕይወት በየዕለቱ" },
  undertittel: {
    no: "Bønn, korsets tegn, ማተብ, skriftefar, ምጽዋት og god oppførsel",
    am: "ጸሎት፣ ማማተብ፣ ማተብ፣ የንስሐ አባት፣ ምጽዋትና መልካም ሥነ ምግባር",
  },
  bilde: "ikonAnheng",
  ingress: {
    no:
      "En kristen er ikke bare kristen i kirka. Hjemme, på skolen, på jobben og blant venner lever vi med Gud. Vi ber morgen og kveld, gjør korsets tegn, bærer ማተብ, har en skriftefar, faster, gir til dem som trenger det, hedrer foreldrene våre, holder søndagen hellig og passer på hva vi sier.",
    am:
      "ክርስቲያን ክርስቲያን የሚሆነው በቤተ ክርስቲያን ብቻ አይደለም። በቤት፣ በትምህርት ቤት፣ በሥራ ቦታና ከጓደኞች ጋር ከእግዚአብሔር ጋር እንኖራለን። ጠዋትና ማታ እንጸልያለን፤ እናማትባለን፤ ማተብ እናስራለን፤ የንስሐ አባት እንይዛለን፤ እንጾማለን፤ ለተቸገሩ እንመጸውታለን፤ ወላጆቻችንን እናከብራለን፤ ሰንበትን እናከብራለን፤ አንደበታችንንም እንጠብቃለን።",
  },
  hovedvers: "Col 3:17",
  avsnitt: [
    {
      id: "hele-livet",
      tittel: { no: "Hele livet hører Gud til", am: "ሕይወታችን ሁሉ የእግዚአብሔር ነው" },
      punkter: [
        {
          tekst: {
            no: "Paulus ber oss gi hele oss selv til Gud som et levende offer. Det betyr at også skolearbeid, lek, mat og arbeid kan gjøres for Gud.",
            am: "ቅዱስ ጳውሎስ ሰውነታችንን ሕያው ቅዱስም መሥዋዕት አድርገን ለእግዚአብሔር እንድናቀርብ ይለምናል። ስለዚህ ትምህርታችን፣ ጨዋታችን፣ ምግባችንና ሥራችን ሁሉ ለእግዚአብሔር ሊሆን ይችላል።",
          },
          vers: ["Rom 12:1", "1Cor 10:31"],
        },
        {
          tekst: {
            no: "«Alt som I gjør i ord eller i gjerning, gjør det alt i den Herre Jesu navn.» Derfor begynner vi det vi gjør, med å nevne Guds navn og gjøre korsets tegn.",
            am: "«በቃል ቢሆን ወይም በሥራ የምታደርጉትን ሁሉ በጌታ በኢየሱስ ስም አድርጉት።» ስለዚህ የምንሠራውን ሁሉ የእግዚአብሔርን ስም ጠርተን አማትበን እንጀምራለን።",
          },
          vers: ["Col 3:17"],
        },
        {
          tekst: {
            no: "Bønn, faste og ምጽዋት hører sammen. Engelen Rafael sa til Tobit: «Bønn med faste og ምጽዋት er godt.»",
            am: "ጸሎት፣ ጾምና ምጽዋት አብረው ይሄዳሉ። መልአኩ ቅዱስ ሩፋኤል ለጦቢት «ጸሎት ከጾምና ከምጽዋት ጋር መልካም ነው» አለው።",
          },
          andre: [{ no: "Tobits bok (ጦቢት) 12,8", am: "መጽሐፈ ጦቢት ፲፪፥፰" }],
        },
        {
          tekst: {
            no: "Andre skal se Kristus i oss. Jesus sa: «La eders lys skinne for menneskene, forat de kan se eders gode gjerninger og prise eders Fader i himmelen.»",
            am: "ሌሎች ክርስቶስን በእኛ ሊያዩ ይገባል። ጌታችን «መልካሙን ሥራችሁን አይተው በሰማያት ያለውን አባታችሁን እንዲያከብሩ ብርሃናችሁ እንዲሁ በሰው ፊት ይብራ» አለ።",
          },
          vers: ["Matt 5:16"],
        },
      ],
    },
    {
      id: "bonn",
      tittel: { no: "Dagen begynner og slutter med Gud", am: "ቀናችንን በጸሎት እንጀምራለን፤ በጸሎት እንፈጽማለን" },
      punkter: [
        {
          tekst: {
            no: "Når vi våkner, gjør vi korsets tegn og ber før vi gjør noe annet. David sier: «Herre, årle høre du min røst!» Om kvelden takker vi Gud for dagen før vi legger oss.",
            am: "ከእንቅልፋችን ስንነሣ ከሁሉ አስቀድመን እናማትባለን፤ እንጸልያለንም። ዳዊት «በማለዳ ድምፄን ትሰማለህ» ይላል። ማታም ከመተኛታችን በፊት ስለ ዋልንበት ቀን እግዚአብሔርን እናመሰግናለን።",
          },
          vers: ["Ps 5:4", "Ps 141:2"],
        },
        {
          tekst: {
            no: "Kirka har sju bønnetider gjennom døgnet, fra morgenbønnen (ነግህ) til midnattsbønnen (መንፈቀ ሌሊት). David sier: «Syv ganger om dagen har jeg prist dig.» Den som ikke rekker alle, ber i det minste morgen og kveld.",
            am: "ቤተ ክርስቲያን ከነግህ እስከ መንፈቀ ሌሊት ሰባት የጸሎት ጊዜያትን ሠርታለች። ዳዊት «ሰባት ጊዜ በቀን አመሰግንሃለሁ» ይላል። ሁሉንም ማድረስ ያልቻለ ቢያንስ ጠዋትና ማታ ይጸልያል።",
          },
          vers: ["Ps 119:164", "Ps 55:18"],
        },
        {
          tekst: {
            no: "Daniel ba tre ganger om dagen hjemme i huset sitt, med vinduene åpne mot Jerusalem. Han sluttet ikke å be, selv om det var forbudt.",
            am: "ዳንኤል በቤቱ ውስጥ መስኮቶቹን ወደ ኢየሩሳሌም ከፍቶ በቀን ሦስት ጊዜ ይጸልይ ነበር። ቢከለከልም ጸሎቱን አላቋረጠም።",
          },
          vers: ["Dan 6:10"],
        },
        {
          tekst: {
            no: "Mange leser ውዳሴ ማርያም, delen for dagen, og noen salmer av Davids salmer (ዳዊት) hver dag. Før maten ber vi «Fader vår», og etter maten takker vi Gud.",
            am: "ብዙዎች በየዕለቱ የዕለቱን ውዳሴ ማርያምና ከዳዊት መዝሙራት ይደግማሉ። ከመመገባችን በፊት «አባታችን ሆይ» እንላለን፤ ከተመገብንም በኋላ እግዚአብሔርን እናመሰግናለን።",
          },
          vers: ["Matt 14:19"],
        },
        {
          tekst: {
            no: "Familien kan be sammen hjemme, foran ikonene med et tent lys. Jesus sa: «Hvor to eller tre er samlet i mitt navn, der er jeg midt iblandt dem.»",
            am: "ቤተሰብ በቤት በቅዱሳት ሥዕላት ፊት ጧፍ አብርቶ በአንድነት ሊጸልይ ይችላል። ጌታችን «ሁለት ወይም ሦስት በስሜ በሚሰበሰቡበት በዚያ በመካከላቸው እሆናለሁ» ብሏል።",
          },
          vers: ["Matt 18:20"],
        },
      ],
    },
    {
      id: "tegn",
      tittel: { no: "Korsets tegn, ማተብ og ነጠላ", am: "ማማተብ፣ ማተብና ነጠላ" },
      punkter: [
        {
          tekst: {
            no: "Vi gjør korsets tegn mange ganger om dagen: når vi står opp og legger oss, før vi spiser, når vi går hjemmefra, og når vi blir redde. Med korset jager vi bort djevelens makt.",
            am: "በቀን ብዙ ጊዜ እናማትባለን፤ ስንነሣና ስንተኛ፣ ከመብላታችን በፊት፣ ከቤት ስንወጣና ስንደነግጥ። በማማተብ የአጋንንትን ኃይል እናርቃለን።",
          },
          vers: ["Gal 6:14", "1Cor 1:18"],
        },
        {
          tekst: {
            no: "ማተብ er snoren vi fikk rundt halsen da vi ble døpt. Vi bærer den hele tiden, hjemme, på skolen og ute. Den viser at vi er døpte kristne, og vi skammer oss ikke over den. Jesus sa: «Hver den som kjennes ved mig for menneskene, ham skal også jeg kjennes ved for min Fader i himmelen.»",
            am: "ማተብ ስንጠመቅ በአንገታችን የታሰረልን ክር ነው። በቤትም፣ በትምህርት ቤትም፣ በውጭም ሁልጊዜ እናስረዋለን። የተጠመቅን ክርስቲያኖች መሆናችንን ያሳያል፤ አናፍርበትም። ጌታችን «በሰው ፊት ለሚመሰክርልኝ ሁሉ እኔ ደግሞ በሰማያት ባለው በአባቴ ፊት እመሰክርለታለሁ» ብሏል።",
          },
          vers: ["Matt 10:32-33"],
        },
        {
          tekst: {
            no: "Salomo sier om farens bud og morens lære: «Knytt dem fast om din hals!» ማተብ om halsen minner oss om å holde fast på troen vi har fått.",
            am: "ሰሎሞን ስለ አባትና ስለ እናት ትእዛዝ «በአንገትህም እሰረው» ይላል። በአንገታችን ያለው ማተብ የተቀበልነውን ሃይማኖት አጽንተን እንድንይዝ ያሳስበናል።",
          },
          vers: ["Prov 6:20-21", "Rev 3:11"],
        },
        {
          tekst: {
            no: "På amharisk sier man om en som svikter troen, at han «river av seg ማተብ» (ማተብ መበጠስ). Den som står fast i troen, «river ikke av seg ማተብ».",
            am: "ሃይማኖቱን የካደውን ሰው «ማተቡን በጠሰ» ይሉታል። በሃይማኖቱ የጸናውን ደግሞ «ማተቡን የማይበጥስ» ይሉታል።",
          },
        },
        {
          tekst: {
            no: "ነጠላ er det tynne hvite sjalet vi bruker i kirka og når vi ber hjemme. Vi legger det i kors over skuldrene for å minnes at Jesus led og ble korsfestet for oss. Jenter og kvinner dekker også håret med det når de ber.",
            am: "ነጠላ በቤተ ክርስቲያንና በቤት ስንጸልይ የምንለብሰው ቀጭን ነጭ ልብስ ነው። ጌታችን በዕለተ ዓርብ የተቀበለውን መከራና በመስቀል መሰቀሉን ለማሰብ በትእምርተ መስቀል አምሳል መስቀልያ እናደርገዋለን። ሴቶችም ሲጸልዩ ጸጉራቸውን ይሸፍኑበታል።",
          },
          vers: ["Eccl 9:8", "Rev 3:5"],
        },
      ],
    },
    {
      id: "prest",
      tittel: { no: "Når vi møter en prest", am: "ካህናትን ስናገኝ" },
      punkter: [
        {
          tekst: {
            no: "Når vi møter en prest, i kirka eller på gata, bøyer vi oss, kysser korset hans og ber om velsignelse. Mange sier «ይፍቱኝ» («løs meg»), og presten velsigner oss med korset.",
            am: "ካህን በቤተ ክርስቲያንም ሆነ በመንገድ ስናገኝ ዝቅ ብለን እጅ እንነሣለን፤ መስቀሉን እንሳለማለን፤ ቡራኬም እንለምናለን። ብዙዎች «ይፍቱኝ» ይላሉ፤ ካህኑም በመስቀሉ ይባርካቸዋል።",
          },
          vers: ["Heb 7:7", "Num 6:24"],
        },
        {
          tekst: {
            no: "Vi viser respekt for prester og eldre ved å reise oss når de kommer, la dem gå først og ikke avbryte dem. «For de grå hår skal du reise dig og ære den gamle.»",
            am: "ካህናትንና ሽማግሌዎችን ሲመጡ ተነሥተን፣ አስቀድመን እያሳለፍንና ንግግራቸውን ሳናቋርጥ እናከብራቸዋለን። «በሽበታሙ ፊት ተነሣ፥ ሽማግሌውንም አክብር» ተብሏልና።",
          },
          vers: ["Lev 19:32", "1Tim 5:17"],
        },
        {
          tekst: {
            no: "Presten kan be over vann, i kirka og i hjemmet, slik at det blir velsignet vann. Mange inviterer presten for å velsigne et nytt hjem.",
            am: "ካህናት በቤተ ክርስቲያንም ሆነ በቤት ውስጥ ውኃ ላይ ይጸልያሉ፤ ውኃውም ጠበል ይሆናል። ብዙዎች አዲስ ቤታቸውን እንዲባርኩላቸው ካህናትን ይጠራሉ።",
          },
          vers: ["Luke 10:5"],
        },
      ],
    },
    {
      id: "skriftefar",
      tittel: { no: "Skriftefar og gudforeldre", am: "የንስሐ አባትና የክርስትና አባት ወይም እናት" },
      punkter: [
        {
          tekst: {
            no: "Hver kristen bør ha en skriftefar (የንስሐ አባት). Han er presten vi skrifter for, men også en far vi kan spørre om råd i hverdagen: om skolen, venner, familien og fristelser. Paulus skriver: «Om I og har ti tusen læremestere i Kristus, så har I dog ikke mange fedre.»",
            am: "እያንዳንዱ ክርስቲያን የንስሐ አባት ሊኖረው ይገባል። ኃጢአታችንን የምንናዘዝለት ካህን ብቻ ሳይሆን ስለ ትምህርት፣ ስለ ጓደኞች፣ ስለ ቤተሰብና ስለ ፈተና የምናማክረው አባት ነው። ቅዱስ ጳውሎስ «በክርስቶስ አእላፍ ሞግዚቶች ቢኖሩአችሁ ብዙ አባቶች የሉአችሁም» ይላል።",
          },
          vers: ["1Cor 4:15", "Heb 13:17"],
        },
        {
          tekst: {
            no: "Vi holder kontakt med skriftefaren gjennom hele året, ikke bare før nattverden. Han ber for oss, og vi ber for ham.",
            am: "ከንስሐ አባታችን ጋር ከቍርባን በፊት ብቻ ሳይሆን ዓመቱን ሙሉ እንገናኛለን። እርሱ ይጸልይልናል፤ እኛም እንጸልይለታለን።",
          },
          vers: ["Jas 5:16"],
        },
        {
          tekst: {
            no: "Gudfaren (የክርስትና አባት) eller gudmoren (የክርስትና እናት) bar oss fram til dåpen og lovet å lære oss troen. De er åndelige foreldre hele livet. Vi hilser dem og ærer dem, og de ber for oss og hjelper oss til kirka og nattverden.",
            am: "የክርስትና አባት ወይም የክርስትና እናት ለጥምቀት ያቀረቡን፣ ሃይማኖትንም ሊያስተምሩን ቃል የገቡ ናቸው። በሕይወታችን ሁሉ መንፈሳውያን ወላጆቻችን ናቸው። እኛ እንጠይቃቸዋለን፤ እናከብራቸዋለን፤ እነርሱም ይጸልዩልናል፤ ወደ ቤተ ክርስቲያንና ወደ ቍርባን እንድንቀርብ ያግዙናል።",
          },
          vers: ["Gal 4:19", "2Tim 1:5"],
        },
      ],
    },
    {
      id: "faste",
      tittel: { no: "Faste hjemme", am: "ጾም በቤታችን" },
      punkter: [
        {
          tekst: {
            no: "Hele året faster vi onsdag og fredag, unntatt i de femti dagene etter påske. I fastetidene lager familien fastemat uten kjøtt, melk, smør og egg. Barn faster etter evne, slik foreldrene og skriftefaren sier.",
            am: "ከበዓለ ሃምሳ በቀር ዓመቱን ሙሉ ረቡዕንና ዓርብን እንጾማለን። በአጽዋማት ቤተሰቡ ሥጋ፣ ወተት፣ ቅቤና እንቁላል የሌለበት የጾም ምግብ ያዘጋጃል። ልጆች ወላጆቻቸውና የንስሐ አባታቸው እንደሚነግሯቸው እንደ ዐቅማቸው ይጾማሉ።",
          },
          vers: ["Joel 2:12"],
        },
        {
          tekst: {
            no: "Vi skryter ikke av fasten. Jesus sa: «Når du faster, da salv ditt hode og vask ditt ansikt, forat ikke menneskene skal se at du faster, men din Fader, som er i lønndom.»",
            am: "በጾማችን አንመካም። ጌታችን «አንተ ግን ስትጦም፥ በስውር ላለው አባትህ እንጂ እንደ ጦመኛ ለሰዎች እንዳትታይ ራስህን ተቀባ ፊትህንም ታጠብ» ብሏል።",
          },
          vers: ["Matt 6:16-18"],
        },
      ],
    },
    {
      id: "tebel",
      tittel: { no: "ጠበል og ጸበል i hjemmet", am: "ጠበልና ጸበል (እምነት)" },
      punkter: [
        {
          tekst: {
            no: "ጠበል er vann som det er bedt over, eller som har sprunget fram ved et under. Vi drikker det, vasker oss i det og tar det med hjem i en flaske. Naaman ble frisk da han dukket seg sju ganger i Jordan.",
            am: "ጠበል የተጸለየበት ወይም በተአምራት የፈለቀ ውኃ ነው። እንጠጣዋለን፤ እንጠመቅበታለን፤ በዕቃ ይዘንም ወደ ቤታችን እንወስደዋለን። ንዕማን በዮርዳኖስ ሰባት ጊዜ ብቅ ጥልቅ ብሎ ተፈወሰ።",
          },
          vers: ["2Kgs 5:14", "John 5:4"],
        },
        {
          tekst: {
            no: "Ordet ጸበል betyr egentlig støv eller jord. Kirka bruker det om hellig jord fra hellige steder, for eksempel ved helgenenes graver. Det kalles også እምነት («tro»). Vanlig tale kaller likevel det hellige vannet ጸበል. Naaman ba om å få ta med seg jord fra Israels land.",
            am: "«ጸበል» በቁሙ ትቢያ፣ ዐቧራ፣ አፈር ማለት ነው። ቅዱሳን ባረፉበትና ተአምራት በተደረገበት ቦታ የሚገኘው ቅዱስ አፈር ጸበል ይባላል፤ በልማድ «እምነት» ይባላል። ቅዱሱ ውኃ ግን በትክክል «ጠበል» ይባላል፤ በልማድ ግን «ጸበል» እያልን እንጠራዋለን። ንዕማንም ከእስራኤል ምድር አፈር እንዲሰጠው ለመነ።",
          },
          vers: ["2Kgs 5:17"],
        },
        {
          tekst: {
            no: "Mange ጠበል har navnet til en helgen, som Marias eller Mikaels ጠበል, til minne om helgenen. Men det er Kristus som helbreder. Vi bruker bare ጠበል som kirka har velsignet, og vi passer oss for falske «døpere» som tar penger.",
            am: "ብዙ ጠበሎች የማርያም ጠበል፣ የሚካኤል ጠበል ይባላሉ፤ ቅዱሳኑ እንዲታሰቡበት ነው። የሚፈውሰው ግን ክርስቶስ ነው። ቤተ ክርስቲያን የባረከችውን ጠበል ብቻ እንጠቀማለን፤ ገንዘብ ከሚሰበስቡ ሐሰተኛ አጥማቂዎች እንጠበቃለን።",
          },
          vers: ["Prov 10:7", "Matt 7:22-23"],
        },
        {
          tekst: {
            no: "ጠበል ጸዲቅ er maten og drikken (brød og ጠላ) som det blir bedt over og delt når en ጽዋ ማኅበር eller en familie minnes en helgen (ዝክር). Den som spiser, ber for den som har laget maten.",
            am: "ጠበል ጸዲቅ በማኅበርና በዝክር ቀን ተጸልዮበት የሚቀርበው ዳቦና ጠላ ነው። ቤተሰብ ወይም የጽዋ ማኅበር አባላት ቅዱሳኑን ሲዘክሩ ይካፈሉታል፤ የበሉትም ላዘጋጁት ይመርቃሉ።",
          },
          vers: ["Acts 2:46"],
        },
      ],
    },
    {
      id: "mitswat",
      tittel: { no: "ምጽዋት i hverdagen", am: "ምጽዋት በየዕለቱ" },
      punkter: [
        {
          tekst: {
            no: "ምጽዋት betyr å ha medlidenhet og gi til den som trenger det. Vi trenger ikke være rike. Vi deler av det vi har: mat, klær, tid og hjelp.",
            am: "ምጽዋት ማለት ማዘን፣ መራራት፣ ለተቸገረ ሰው መስጠት ነው። ለመስጠት ሀብታም መሆን አያስፈልግም፤ ካለን ላይ ምግብ፣ ልብስ፣ ጊዜና ርዳታ እናካፍላለን።",
          },
          vers: ["Prov 3:27", "Acts 20:35"],
        },
        {
          tekst: {
            no: "Vi gir i det skjulte og skryter ikke. «Når du gir almisse, da la ikke din venstre hånd vite hvad din høire gjør.»",
            am: "በስውር እንሰጣለን እንጂ አንመካም። «ምጽዋት ስታደርግ ምጽዋትህ በስውር እንዲሆን ቀኝህ የምትሠራውን ግራህ አትወቅ።»",
          },
          vers: ["Matt 6:1-4"],
        },
        {
          tekst: {
            no: "Tobit spiste aldri før han hadde sendt sønnen sin ut for å finne en fattig som kunne spise sammen med ham. Slik kan barn også lære å dele med venner som ikke har.",
            am: "ጦቢት ከመመገቡ በፊት ልጁን ጦቢያን ልኮ የተራበ ድሀ ፈልጎ ከእርሱ ጋር ያበላ ነበር። ልጆችም እንዲሁ ለሌላቸው ጓደኞቻቸው ማካፈልን ይለማመዳሉ።",
          },
          andre: [{ no: "Tobits bok (ጦቢት) 2,2", am: "መጽሐፈ ጦቢት ፪፥፪" }],
        },
        {
          tekst: {
            no: "Vi gir også til kirka. Jakob lovet å gi Gud tiende av alt han fikk. Kirka kaller dette ዐሥራት በኵራት (tiende og førstegrøde).",
            am: "ለቤተ ክርስቲያንም እንሰጣለን። ያዕቆብ «ከሰጠኸኝም ሁሉ ለአንተ ከአሥር እጅ አንዱን እሰጥሃለሁ» ብሎ ተሳለ። ይህ ዐሥራት በኵራት ይባላል።",
          },
          vers: ["Gen 28:22", "Mal 3:10"],
        },
      ],
    },
    {
      id: "foreldre",
      tittel: { no: "Hedre far og mor", am: "አባትና እናትን ማክበር" },
      punkter: [
        {
          tekst: {
            no: "«Hedre din far og din mor.» Det er det første budet med et løfte. Vi hører på foreldrene, hjelper til hjemme og svarer ikke stygt.",
            am: "«አባትህንና እናትህን አክብር።» ይህች የተስፋ ቃል ያላት ፊተኛይቱ ትእዛዝ ናት። ወላጆቻችንን እንሰማለን፤ በቤት ሥራ እናግዛለን፤ ክፉ መልስም አንመልስም።",
          },
          vers: ["Exod 20:12", "Eph 6:1-3"],
        },
        {
          tekst: {
            no: "Jesus selv var lydig mot Maria og Josef i Nasaret. Da han hang på korset, sørget han for at moren fikk et hjem hos Johannes.",
            am: "ጌታችን ራሱ በናዝሬት ለእናቱና ለዮሴፍ ይታዘዝ ነበር። በመስቀል ላይ ሳለም እናቱን ለዮሐንስ አደራ ሰጠ።",
          },
          vers: ["Luke 2:51", "John 19:26-27"],
        },
        {
          tekst: {
            no: "Vi glemmer ikke foreldrene når de blir gamle. «Hør på din far, som gav dig livet, og forakt ikke din mor når hun er blitt gammel!» Siraks bok sier at farens velsignelse bygger barnas hus.",
            am: "ወላጆቻችን ሲያረጁ አንረሳቸውም። «የወለደህን አባትህን ስማ፥ እናትህም ባረጀች ጊዜ አትናቃት።» መጽሐፈ ሲራክም «የአባት ምርቃት የልጅን ቤት ያጸናል» ይላል።",
          },
          vers: ["Prov 23:22"],
          andre: [{ no: "Siraks bok (ሲራክ) 3,9–10", am: "መጽሐፈ ሲራክ ፫፥፲" }],
        },
        {
          tekst: {
            no: "Vi ærer også lærere, prester og alle eldre. Paulus ber oss snakke til en eldre mann som til en far, og til eldre kvinner som til mødre.",
            am: "መምህራንን፣ ካህናትንና ታላላቆችን ሁሉ እናከብራለን። ቅዱስ ጳውሎስ ሽማግሌውን እንደ አባት፣ አሮጊቶችንም እንደ እናቶች እንድንመክር ያዘናል።",
          },
          vers: ["1Tim 5:1-2"],
        },
      ],
    },
    {
      id: "sondag",
      tittel: { no: "Søndagen, Herrens dag", am: "ሰንበተ ክርስቲያን (እሑድ)" },
      punkter: [
        {
          tekst: {
            no: "Kristus stod opp fra de døde på den første dagen i uka. Derfor er søndag Herrens dag (ሰንበተ ክርስቲያን). Apostlene samlet seg denne dagen for å bryte brødet. Lørdag (ቀዳሚት ሰንበት) er også hellig, slik kirka lærer.",
            am: "ክርስቶስ ከሙታን የተነሣው በሳምንቱ መጀመሪያ ቀን ነው፤ ስለዚህ እሑድ ሰንበተ ክርስቲያን ትባላለች። ሐዋርያትም በዚህ ቀን እንጀራ ለመቁረስ ይሰበሰቡ ነበር። ቀዳሚት ሰንበት (ቅዳሜ) ደግሞ እንደ ቤተ ክርስቲያን ሥርዓት የተከበረች ዕለት ናት።",
          },
          vers: ["Acts 20:7", "Rev 1:10", "Exod 20:8"],
        },
        {
          tekst: {
            no: "På søndag går vi i kirka, hører ቅዳሴ og evangeliet, og tar imot nattverden når vi er forberedt. Så gjør vi godt: besøker syke, forsoner dem som er uvenner, og trøster dem som sørger.",
            am: "በእሑድ ወደ ቤተ ክርስቲያን ሄደን እናስቀድሳለን፤ ስብከተ ወንጌልን እንሰማለን፤ ተዘጋጅተን ከሆነም እንቈርባለን። ከዚያም የታመመን እንጠይቃለን፤ የተጣላን እናስታርቃለን፤ ያዘነንም እናጽናናለን።",
          },
          vers: ["Matt 12:12", "Ps 118:24"],
        },
        {
          tekst: {
            no: "Søndagen er en gledesdag. Vi kaster oss ikke ned med knærne i bakken, vi gjør ikke vanlig arbeid hvis vi kan unngå det, og vi bruker ikke dagen på tomt prat, krangel eller fyll.",
            am: "እሑድ የደስታ ቀን ናት። ጉልበታችንን ምድር አስነክተን አንሰግድም፤ ከተቻለ የዘወትር ሥራችንን አንሠራም፤ በከንቱ ወሬ፣ በጠብና በስካርም አናሳልፋትም።",
          },
          andre: [{ no: "Fetha Negest (ፍትሐ ነገሥት) kap. 19", am: "ፍትሐ ነገሥት አንቀጽ ፲፱" }],
        },
      ],
    },
    {
      id: "tale",
      tittel: { no: "Tale, ærlighet og oppførsel", am: "አንደበት፣ እውነተኝነትና ሥነ ምግባር" },
      punkter: [
        {
          tekst: {
            no: "Jesus sa at vi skal gjøre regnskap for hvert unyttig ord. Tungen er liten, men den kan sette en hel skog i brann. Derfor tenker vi før vi snakker.",
            am: "ጌታችን ስለምንናገረው ስለ ከንቱ ነገር ሁሉ በፍርድ ቀን መልስ እንደምንሰጥ ተናግሯል። አንደበት ትንሽ ብልት ናት፤ ነገር ግን ትልቅ ጫካ እንደምታቃጥል እሳት ናት። ስለዚህ ከመናገራችን በፊት እናስባለን።",
          },
          vers: ["Matt 12:36-37", "Jas 3:5-6"],
        },
        {
          tekst: {
            no: "Vi lyver ikke, verken hjemme, på skolen eller på nettet. «Derfor, avlegg løgnen og tal sannhet, enhver med sin næste.» Ja skal være ja, og nei skal være nei.",
            am: "በቤትም፣ በትምህርት ቤትም ሆነ በኢንተርኔት አንዋሽም። «ውሸትን አስወግዳችሁ … እያንዳንዳችሁ ከባልንጀሮቻችሁ ጋር እውነትን ተነጋገሩ።» አዎን አዎን፣ አይደለም አይደለም ይሁን።",
          },
          vers: ["Eph 4:25", "Matt 5:37", "Prov 12:22"],
        },
        {
          tekst: {
            no: "Vi sladrer ikke om andre. Å snakke om noen bak ryggen deres det vi ikke kunne sagt til dem selv, er sladder (ሐሜት). Vi banner ikke og bruker ikke stygge ord.",
            am: "ሰውን አናማም። ሰዎች በሌሉበት በፊታቸው ልንናገረው የማንችለውን ነገር ማውራት ሐሜት ነው። አንሳደብም፤ ክፉ ቃልም ከአፋችን አይውጣ።",
          },
          vers: ["Eph 4:29", "Ps 34:14"],
        },
        {
          tekst: {
            no: "Vi er snare til å høre og sene til å snakke og bli sinte. Hvis vi har gjort noen urett, ber vi om tilgivelse. Hvis noen har gjort oss urett, tilgir vi og bærer ikke nag.",
            am: "ለመስማት የፈጠንን ለመናገርና ለቍጣ የዘገየን እንሁን። ሰውን ከበደልን ይቅርታ እንጠይቃለን፤ ሰው ቢበድለንም ይቅር እንላለን፤ ቂም አንይዝም።",
          },
          vers: ["Jas 1:19", "Matt 6:14"],
        },
        {
          tekst: {
            no: "Vi er ærlige på skolen og i arbeid. Vi jukser ikke på prøver og tar ikke det som ikke er vårt. Vi arbeider med hendene våre, så vi kan dele med den som trenger.",
            am: "በትምህርት ቤትና በሥራ ታማኞች ነን። በፈተና አንኮርጅም፤ የእኛ ያልሆነውንም አንወስድም። ለተቸገረው የምናካፍለው እንዲኖረን በእጃችን እንሠራለን።",
          },
          vers: ["Lev 19:11", "Eph 4:28"],
        },
        {
          tekst: {
            no: "Vår tale skal være vennlig, «krydret med salt». Når noen spør om troen vår, svarer vi rolig og med respekt.",
            am: "ንግግራችን ሁልጊዜ በጨው እንደ ተቀመመ በጸጋ ይሁን። ሰዎች ስለ ሃይማኖታችን ሲጠይቁን በትሕትናና በአክብሮት እንመልሳለን።",
          },
          vers: ["Col 4:6", "1Pet 3:15"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "«Si ikke: Jeg har gitt ham mange ganger, det er nok. Spiser ikke du morgen og kveld? Ser du ikke på ham som på deg selv?»",
        am: "«ብዙ ጊዜ ሰጠሁት ይበቃዋል አትበል፤ አንተ ጠዋት ማታ ትበላ የለምን? እንደ ራስህ አታየውምን?»",
      },
      kilde: "Sitert i Mahibere Kidusan: «‹‹ለሰዎች ትታዩ ዘንድ፥ ምጽዋታችሁን በሰዎች ፊት እንዳታደርጉ ተጠንቀቁ!›› (ማቴ. ፮፥፩)»",
    },
    {
      navn: { no: "Den hellige Atanasios", am: "ቅዱስ አትናቴዎስ" },
      tekst: {
        no: "«Kom, la oss opphøye den, kom, la oss prise den og ære den, kom, la oss feire den, høytidenes førstefødte, som er de kristnes sabbat, dagen Gud har gjort. La oss glede oss og fryde oss på den.»",
        am: "«ኑ፥ የበዓላትን በኩር ከፍ ከፍ እናድርጋት፤ ኑ እናመስግናት፤ ኑ እናክብራት፤ ኑ በዓል እናድርጋት። ይህችውም ሰንበተ ክርስቲያን ናት። ይህች ቀን እግዚአብሔር ሥራ የሠራባት ቀን ናት፤ በእርሷም ደስ ይበለን፤ ኀሤትም እናድርግ።»",
      },
      kilde: "ቅዳሴ አትናቴዎስ (sitert i Mahibere Kidusan: «“እግዚአብሔር ሰንበትን ቀደሳት፤ ከዕለታትም ከፍ ከፍ አደረጋት”»)",
    },
    {
      navn: { no: "Den hellige Yared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "«Moses bød dem å holde sabbaten i sannhet, for sabbaten ble til for menneskets skyld. … Elsk hverandre av hele hjertet, hold sabbaten i sannhet, og samle dere en skatt i himmelen.»",
        am: "«ሙሴ ሰንበትን በእውነት እንዲያከብሩ አዘዛቸው፤ ሰንበት ስለ ሰው ተፈጥራለችና። … በሙሉ ልባችሁ ተፋቀሩ፤ በእውነት ሰንበትን አክብሩ፤ በሰማይም ለእራሳችሁ መዝገብን ሰብስቡ።»",
      },
      kilde: "ጾመ ድጓ ዘቀዳሚት ዘሰንበት (sitert i Mahibere Kidusan: «“እግዚአብሔር ሰንበትን ቀደሳት”»)",
    },
    {
      navn: { no: "Fedrene i Fetha Negest", am: "ፍትሐ ነገሥት" },
      tekst: {
        no: "«Dommerne skal ikke si: Vi har stevnet dere på søndag. De skal ikke holde rettssak eller dømme på søndag, og ingen skal kreve inn penger. Alle skal gå til kirka.»",
        am: "«ለፍርድ ሥልጣን ያላቸው ዳኞች እሑድ ቀጥረናችኋል አይበሉ። እሑድ ቀን አያሟግቱ፤ አይፍረዱ፤ ማንም ገንዘቤን አምጣ ብሎ አይያዝ፤ ሁሉም ወደ ቤተ ክርስቲያን ይሂዱ እንጂ።»",
      },
      kilde: "ፍትሐ ነገሥት አንቀጽ ፲፱ (sitert i Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን»)",
    },
    {
      navn: { no: "Abba Johannes den lille", am: "ቅዱስ ዮሐንስ ሐጺር" },
      tekst: {
        no: "Læreren hans, abba Bimoy, ga ham en tørr pinne og sa: «Plant den og få den til å bære frukt.» Johannes sa ja, og bar vann til den i to år fra et sted langt borte. Det tredje året blomstret den og bar frukt. Abba Bimoy ga frukten til munkene og sa: «Dette er lydighetens frukt.»",
        am: "መምህሩ አባ ባይሞን ደረቅ እንጨት ሰጥቶ «ትከለውና እንዲያፈራ አድርገው» አለው። ዮሐንስ «እሺ» ብሎ ተከለው፤ ለሁለት ዓመታትም ከሩቅ ቦታ ውኃ እየቀዳ አጠጣው። በሦስተኛው ዓመት አበበ፤ ፍሬም አፈራ። አባ ባይሞንም ፍሬውን ለመነኮሳቱ ሰጥቶ «ይህ የዛፍ ሳይሆን የመታዘዝ ፍሬ ነው» አላቸው።",
      },
      kilde: "Mahibere Kidusan: «ክርስቲያናዊ ሥነ ምግባር», del 2 (ዲያቆን ተስፋዬ ቻይ)",
    },
  ],
  ord: [
    { ord: "ማማተብ", forklaring: { no: "å gjøre korsets tegn", am: "በትእምርተ መስቀል ማማተብ" } },
    { ord: "ማተብ", forklaring: { no: "snoren om halsen, tegnet på at vi er døpt", am: "በአንገት የሚታሰር የክርስትና ምልክት" } },
    { ord: "ነጠላ", forklaring: { no: "tynt hvitt sjal som legges i kors", am: "መስቀልያ የሚለበስ ቀጭን ነጭ ልብስ" } },
    { ord: "የንስሐ አባት", forklaring: { no: "skriftefar", am: "ኑዛዜ የሚቀበልና የሚመክር ካህን" } },
    { ord: "የክርስትና አባት / እናት", forklaring: { no: "gudfar / gudmor", am: "በጥምቀት መንፈሳዊ ወላጅ" } },
    { ord: "ጠበል", forklaring: { no: "hellig vann som det er bedt over", am: "የተጸለየበት ቅዱስ ውኃ" } },
    { ord: "ጸበል · እምነት", forklaring: { no: "hellig jord fra hellige steder", am: "ከቅዱሳት መካናት የሚገኝ ቅዱስ አፈር" } },
    { ord: "ጠበል ጸዲቅ", forklaring: { no: "brød og drikke som deles ved ማኅበር og ዝክር", am: "በማኅበርና በዝክር የሚቀርብ ዳቦና ጠላ" } },
    { ord: "ምጽዋት", forklaring: { no: "gave til den som trenger det", am: "ለተቸገረ የሚሰጥ ችሮታ" } },
    { ord: "ዐሥራት በኵራት", forklaring: { no: "tiende og førstegrøde til kirka", am: "ከገቢ አንድ አሥረኛውና የመጀመሪያው ፍሬ" } },
    { ord: "ሰንበተ ክርስቲያን", forklaring: { no: "søndagen, Herrens dag", am: "እሑድ" } },
    { ord: "ሐሜት", forklaring: { no: "sladder, å snakke stygt om noen bak ryggen deres", am: "ሰው በሌለበት ማማት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva gjør vi først når vi våkner?", am: "ከእንቅልፋችን ስንነሣ መጀመሪያ ምን እናደርጋለን?" },
      svar: {
        no: "Vi gjør korsets tegn og ber, før vi gjør noe annet.",
        am: "ከሁሉ አስቀድመን እናማትባለን፤ እንጸልያለንም።",
      },
    },
    {
      sporsmal: { no: "Hvorfor bærer vi ማተብ hele tiden?", am: "ማተብ ሁልጊዜ ለምን እናስራለን?" },
      svar: {
        no: "Den viser at vi er døpte kristne. Vi skammer oss ikke over troen, og ማተብ minner oss om å holde fast på den.",
        am: "የተጠመቅን ክርስቲያኖች መሆናችንን ያሳያል። በሃይማኖታችን አናፍርም፤ ማተቡም ሃይማኖታችንን አጽንተን እንድንይዝ ያሳስበናል።",
      },
    },
    {
      sporsmal: { no: "Hva er forskjellen på ጠበል og ጸበል?", am: "በጠበልና በጸበል መካከል ያለው ልዩነት ምንድን ነው?" },
      svar: {
        no: "ጠበል er hellig vann. ጸበል betyr egentlig hellig jord fra hellige steder, også kalt እምነት. I vanlig tale kalles det hellige vannet ofte ጸበል.",
        am: "ጠበል ቅዱስ ውኃ ነው። ጸበል በትክክል ከቅዱሳት መካናት የሚገኝ ቅዱስ አፈር ነው፤ «እምነት»ም ይባላል። በልማድ ግን ቅዱሱን ውኃ «ጸበል» እንለዋለን።",
      },
    },
    {
      sporsmal: { no: "Hvordan gir vi ምጽዋት riktig?", am: "ምጽዋትን እንዴት እንሰጣለን?" },
      svar: {
        no: "I det skjulte, med glede og av det vi har, uten å skryte.",
        am: "በስውር፣ በደስታና ካለን ላይ፤ ሳንመካ።",
      },
    },
    {
      sporsmal: { no: "Hva gjør vi på søndag etter ቅዳሴ?", am: "በእሑድ ከቅዳሴ በኋላ ምን እናደርጋለን?" },
      svar: {
        no: "Vi gjør godt: besøker syke, forsoner uvenner og trøster dem som sørger.",
        am: "መልካም እንሠራለን፤ የታመመን እንጠይቃለን፤ የተጣሉትን እናስታርቃለን፤ ያዘኑትን እናጽናናለን።",
      },
    },
    {
      sporsmal: { no: "Hva er ሐሜት, og hvorfor er det synd?", am: "ሐሜት ምንድን ነው? ለምንስ ኃጢአት ይሆናል?" },
      svar: {
        no: "Å snakke om noen bak ryggen deres det vi ikke kunne sagt til dem selv. Det skader andre, og Jesus sa at vi skal gjøre regnskap for ordene våre.",
        am: "ሰው በሌለበት በፊቱ ልንናገረው የማንችለውን ማውራት ነው። ሌሎችን ይጎዳል፤ ጌታችንም ስለ ቃላችን መልስ እንደምንሰጥ ተናግሯል።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን» (bønnens regler, søndagen)", url: "https://eotcmk.org/a/?p=28756" },
    { navn: "Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን» (høytider og søndag, ፍትሐ ነገሥት)", url: "https://eotcmk.org/a/?p=29273" },
    { navn: "Mahibere Kidusan: «ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!» (ነጠላ)", url: "https://eotcmk.org/a/?p=23486" },
    { navn: "Mahibere Kidusan, barnesiden: «ማማተብ»", url: "https://eotcmk.org/a/?p=21734" },
    { navn: "Mahibere Kidusan: «ክርስቲያናዊ ሥነ ምግባር» del 1 og 2", url: "https://eotcmk.org/a/?p=31284" },
    { navn: "Mahibere Kidusan: «‹‹ልጆች ሆይ ለወላጆቻችሁ በጌታ ታዘዙ››»", url: "https://eotcmk.org/a/?p=30827" },
    { navn: "Mahibere Kidusan: «ምጽዋት»", url: "https://eotcmk.org/a/?p=31152" },
    { navn: "Mahibere Kidusan: «ለሰዎች ትታዩ ዘንድ፥ ምጽዋታችሁን በሰዎች ፊት እንዳታደርጉ ተጠንቀቁ!»", url: "https://eotcmk.org/a/?p=22048" },
    { navn: "Mahibere Kidusan: «ከአነጋገርህ የተነሣ ትጸድቃለህ» (tungen)", url: "https://eotcmk.org/a/?p=22985" },
    { navn: "Mahibere Kidusan: «የተቀደሰ ውኃ» (ቀሲስ ኃይሉ ብርሃኑ)", url: "https://eotcmk.org/a/?p=31186" },
    { navn: "Mahibere Kidusan: «“እግዚአብሔር ሰንበትን ቀደሳት”» (ቅዱስ ያሬድ og ቅዳሴ አትናቴዎስ)", url: "https://eotcmk.org/a/?p=30842" },
    { navn: "Mahibere Kidusan: «ጌታችን ጾመ፤ በዲያብሎስም ተፈተነ» (ማተብ መበጠስ)", url: "https://eotcmk.org/a/?p=27855" },
    { navn: "Kidane Wold Kifle, ordbok: ጠበል (dictionary.abyssinica.com)", url: "https://dictionary.abyssinica.com/%E1%8C%A0%E1%89%A0%E1%88%8D" },
  ],
  utkast: true,
};
