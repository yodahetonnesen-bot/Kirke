import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ሥጋዌ:
// astemhro.com (ምስጢረ ሥጋዌ: ኢየሱስ ክርስቶስ በተዋሕዶ ሰው የሆነ አምላክ ነው! – med sitater fra ሃይማኖተ አበው),
// Mahibere Kidusans barneside (eotcmk.org: ምሥጢረ ሥጋዌ, og ወርኃ መጋቢት om መጋቢት 29),
// Mahibere Kidusan (ቀሲስ ዶ/ር ምክረ ሥላሴ): አውጣኪ፣ ቅዱስ ዲዮስቆሮስ እና የኬልቄዶን ጉባኤ,
// ኪዳነ ምሕረት-menigheten (kidanemihiret.org: ምሥጢረ ሥጋዌ),
// ethiopianorthodox.org (The Faith of the Church; The issue between Monophysitism and Dyophysitism;
// Calendar; Worship) og St. Mary's EOTC (ethiopianorthodoxchurch.org: Mystery of the Incarnation).
// Usikkert: Ordet «ኪዳነ አዳም» fant jeg ikke i kildene. Siden sier derfor bare at Gud ga Adam et løfte
// (ቃል ኪዳን) om å frelse ham etter 5500 år, slik eotcmk.org, astemhro.com og kidanemihiret.org sier.
// Usikkert: ethiopianorthodox.org nevner den koptiske, armenske, syriske og indiske kirka i den orientalsk-
// ortodokse familien. Den eritreiske kirka er ikke nevnt der (teksten er eldre enn den eritreiske kirkas
// selvstendighet), men den har samme tro (eritreantewahdo.org). Bør leses av en prest.
// Usikkert: ታኅሣሥ 29 faller vanligvis på 7. januar. Kildene sier ikke hva som skjer de årene datoene
// forskyves (etter et etiopisk skuddår), så det er ikke tatt med.
// Usikkert: «ኦሪየንታል ኦርቶዶክስ» er et lånord; jeg fant ikke et fast amharisk navn på kirkefamilien i kildene.
// Usikkert: Den amhariske gjengivelsen av Kyrillos' uttrykk «den ene, menneskeblitte natur av Gud Ordet»
// er min omskrivning av den engelske teksten på ethiopianorthodox.org, ikke en sitert kirkeformel.
export const menneskevordelsen: Tema = {
  slug: "menneskevordelsen",
  del: "troen",
  tittel: { no: "Gud ble menneske", am: "ምሥጢረ ሥጋዌ" },
  undertittel: { no: "Ordet ble kjød – sann Gud og sant menneske", am: "ቃል ሥጋ ሆነ፤ ፍጹም አምላክ ፍጹም ሰው" },
  bilde: "fodselen",
  ingress: {
    no:
      "Det andre av de fem mysteriene er ምሥጢረ ሥጋዌ, mysteriet om at Gud ble menneske. Guds Sønn, Ordet, tok kjøtt og sjel av jomfru Maria og ble født som et menneske. Han sluttet ikke å være Gud. Han er sann Gud og sant menneske. Slik ble vi frelst fra døden som kom på grunn av Adams synd. Det er også av dette mysteriet kirka vår har fått navnet ተዋሕዶ.",
    am:
      "ከአምስቱ አዕማደ ምሥጢር ሁለተኛው ምሥጢረ ሥጋዌ ነው፤ ይህም አምላክ ሰው የሆነበት ምሥጢር ነው። የእግዚአብሔር ልጅ አካላዊ ቃል ከቅድስት ድንግል ማርያም ከሥጋዋ ሥጋ ከነፍሷ ነፍስ ነሥቶ ሰው ሆኖ ተወለደ፤ አምላክነቱንም አልተወም። ፍጹም አምላክ ፍጹም ሰው ነው። የሰው ልጅ በአዳም በደል ምክንያት ከመጣበት ሞት የዳነበት ምሥጢር ነው። ቤተ ክርስቲያናችን «ተዋሕዶ» የሚለውን ስያሜ ያገኘችውም በዚህ ምሥጢር ነው።",
  },
  hovedvers: "John 1:14",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva betyr ሥጋዌ?", am: "«ሥጋዌ» ማለት ምን ማለት ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ሥጋዌ kommer av ge'ez-verbet «ተሠገወ», som betyr å bli kjøtt, å bli menneske. ምሥጢረ ሥጋዌ er altså mysteriet om at Gud ble menneske.",
            am: "«ሥጋዌ» «ተሠገወ» ከሚለው የግዕዝ ቃል የወጣ ሲሆን ትርጉሙም «ሥጋ ሆነ፣ ሰው ሆነ» ማለት ነው። ምሥጢረ ሥጋዌ ማለት የአምላክ ሰው የመሆን ምሥጢር ማለት ነው።",
          },
        },
        {
          tekst: {
            no: "Johannes skriver: «Ordet ble kjød og tok bolig iblant oss.» Hele mysteriet bygger på dette verset.",
            am: "ቅዱስ ዮሐንስ «ቃልም ሥጋ ሆነ፤ … በእኛ አደረ» ብሏል። ምሥጢረ ሥጋዌ በዚህ የወንጌል ቃል ላይ የተመሠረተ ነው።",
          },
          vers: ["John 1:14"],
        },
        {
          tekst: {
            no: "Hvorfor kalles det et mysterium (ምሥጢር)? Fordi Guds visdom da han frelste verden, er enda dypere enn visdommen da han skapte den. Paulus sier: «Stor er den gudsfryktens hemmelighet: Han som ble åpenbart i kjød.»",
            am: "ምሥጢር የተባለው እግዚአብሔር ዓለምን ከፈጠረበት ጥበቡ ይልቅ ዓለምን ያዳነበት ጥበቡ ይረቃልና ነው። ቅዱስ ጳውሎስ «እግዚአብሔርንም የመምሰል ምሥጢር ያለ ጥርጥር ታላቅ ነው፤ በሥጋ የተገለጠ» ብሏል።",
          },
          vers: ["1Tim 3:16"],
        },
        {
          tekst: {
            no: "Det er bare Sønnen (ወልድ) som ble menneske, ikke Faderen og ikke Den hellige ånd. Han ble menneske i sin egen person (በተለየ አካሉ).",
            am: "ሰው የሆነው ከሥላሴ አንዱ ወልድ ብቻ ነው፤ አብና መንፈስ ቅዱስ ሰው አልሆኑም። ወልድ በተለየ አካሉ ሰው ሆነ።",
          },
          vers: ["John 1:14", "Gal 4:4"],
        },
        {
          tekst: {
            no: "Det er ved dette mysteriet himmelens hemmeligheter ble vist for oss. Det er også derfor vi kalles kristne, og derfor kirka vår heter ተዋሕዶ.",
            am: "ሰማያዊው ነገረ እግዚአብሔር ለሰው ልጅ የተገለጠው በዚህ ምሥጢር ነው። እኛም «ክርስቲያን» የተባልነው፣ ቤተ ክርስቲያናችንም «ተዋሕዶ» የተባለችው በዚህ ምሥጢር ነው።",
          },
        },
      ],
    },
    {
      id: "hvorfor",
      tittel: { no: "Hvorfor ble Gud menneske?", am: "አምላክ ለምን ሰው ሆነ?" },
      ingress: {
        no: "For å forstå det må vi begynne med Adam og Eva.",
        am: "ይህን ለመረዳት የአዳምንና የሔዋንን ታሪክ መመልከት ግድ ይለናል።",
      },
      punkter: [
        {
          tekst: {
            no: "Gud skapte Adam i sitt bilde og satte ham i paradiset. Han ga ham ett bud: «Treet til kunnskap om godt og ondt, det må du ikke ete av; for på den dag du eter av det, skal du visselig dø.»",
            am: "እግዚአብሔር አዳምን በመልኩና በምሳሌው ፈጥሮ በገነት አኖረው፤ «መልካምንና ክፉን ከሚያስታውቀው ዛፍ አትብላ፤ ከእርሱ በበላህ ቀን ሞትን ትሞታለህና» የሚል ትእዛዝ ሰጠው።",
          },
          vers: ["Gen 2:17"],
        },
        {
          tekst: {
            no: "Adam levde sju år i paradiset og holdt budet. Men djevelen lurte Adam og Eva. De ville bli som Gud og spiste av treet. Da mistet de lysets klær, æren, livet og paradiset, og døden kom til alle mennesker.",
            am: "አዳም ሰባት ዓመት በገነት ሕግ አክብሮ ኖረ። ነገር ግን አዳምና ሔዋን በዲያብሎስ አሳሳችነት ያልተሰጣቸውን አምላክነት ፈልገው በደሉ፤ የብርሃን ልብሳቸው ተገፈፈ፤ ልጅነትን፣ ክብርን፣ ሕይወትንና ገነትን አጡ። «ኃጢአት በአንድ ሰው ወደ ዓለም ገባ በኃጢአትም ሞት» እንዲል ያም መከራ ለሰው ልጆች ሁሉ ደረሰ።",
          },
          vers: ["Rom 5:12"],
          andre: [{ no: "Jubileumsboken (ኩፋሌ) 4:14 – Adam i paradiset i sju år", am: "ኩፋሌ 4፥14" }],
        },
        {
          tekst: {
            no: "Adam og Eva mistet ikke håpet. De angret og gråt. Da lovet Gud dem at han skulle frelse dem etter 5500 år. Kirkas lærere sier det også slik: «når fem og en halv dag er fullført».",
            am: "አዳምና ሔዋን ተስፋ ሳይቆርጡ ንስሓ ገቡ፤ ተጸጸቱ፤ አለቀሱ። እግዚአብሔርም ከአምስት ሺህ አምስት መቶ ዘመን በኋላ ሊያድናቸው ቃል ገባ፤ ተስፋን ሰጣቸው። ሊቃውንትም ይህን «አምስት ቀን ተኩል ሲፈጸም» ይሉታል።",
          },
          vers: ["Gen 3:15"],
          andre: [
            { no: "Siraks bok (ሲራክ) 24:4–6", am: "ሲራክ 24፥4–6" },
            { no: "ተአምረ ኢየሱስ, andre under, v. 15–16", am: "ተአምረ ኢየሱስ ሁለተኛ ተአምር ቁጥር 15–16" },
          ],
        },
        {
          tekst: {
            no: "Da tiden var inne, holdt Gud løftet sitt: «Da tidens fylde kom, utsendte Gud sin Sønn, født av en kvinne.» Jesus ble født 5500 år etter at Adam falt.",
            am: "ጊዜው ሲደርስ ቃሉን ፈጸመ፤ «የዘመኑ ፍጻሜ በደረሰ ጊዜ እግዚአብሔር ከሴት የተወለደውን … ልጁን ላከ።» ጌታችን አዳም ከበደለ ከአምስት ሺህ አምስት መቶ ዘመን በኋላ ከድንግል ማርያም ተወለደ።",
          },
          vers: ["Gal 4:4-5"],
        },
        {
          tekst: {
            no: "For å betale gjelden (ካሣ): «Den lønn som synden gir, er døden.» Adam hadde ingenting å gi Gud for synden sin. Derfor ble Gud selv menneske og tok straffen. Han tok del i kjøtt og blod for at han ved døden skulle gjøre djevelen maktesløs.",
            am: "ለካሣ፤ «የኃጢአት ደመወዝ ሞት ነውና።» አዳም የበደለውን እግዚአብሔርን የሚክስበት ነገር አልነበረውም። ስለዚህ እግዚአብሔር ራሱ ሰው ሆኖ ካሰው። «በሞት ላይ ሥልጣን ያለውን በሞት እንዲሽር … በሥጋና በደም እንዲሁ ተካፈለ።»",
          },
          vers: ["Rom 6:23", "Heb 2:14-15"],
        },
        {
          tekst: {
            no: "For å lete etter det som var tapt: Etter fallet gjemte Adam seg, og Gud ropte: «Hvor er du?» Jesus sa: «Menneskesønnen er kommet for å søke og frelse det som var fortapt.»",
            am: "የጠፋውን ለመፈለግ፤ አዳም በበደለ ጊዜ ተደበቀ፤ እግዚአብሔርም «ወዴት ነህ?» አለው። ጌታችንም «የሰው ልጅ የጠፋውን ሊፈልግና ሊያድን መጥቶአልና» አለ።",
          },
          vers: ["Gen 3:9", "Luke 19:10"],
        },
        {
          tekst: {
            no: "For å vise sin kjærlighet: «For så har Gud elsket verden at han gav sin Sønn, den enbårne.» Han fikk ingenting igjen fra oss, men tok på seg vår svake natur av ren kjærlighet.",
            am: "ፍቅሩን ለመግለጥ፤ «እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና።» ከእኛ ምንም ሳያገኝ ደካማ ባሕርያችንን ተዋሕዶ እውነተኛ ፍቅሩን ገለጠልን።",
          },
          vers: ["John 3:16", "John 10:11"],
        },
        {
          tekst: {
            no: "For at mennesker skulle få se ham: Moses ba om å få se Guds herlighet, men fikk høre: «Intet menneske kan se meg og leve.» Da Jesus ble født, så menneskene ham. Johannes skriver om det «vi har sett med våre øyne … og våre hender følte på».",
            am: "የሰው ልጆች ሊያዩት ይመኙ ነበርና፤ ሙሴ ክብሩን ለማየት ለምኖ «ሰው አይቶኝ አይድንምና ፊቴን ማየት አይቻልህም» ተባለ። ከእመቤታችን በተወለደ ጊዜ ግን ሰዎች አዩት፤ ቅዱስ ዮሐንስ «በዓይኖቻችንም ያየነውን … እጆቻችንም የዳሰሱትን እናወራለን» ብሏል።",
          },
          vers: ["Exod 33:20", "1John 1:1"],
        },
        {
          tekst: {
            no: "For å overvinne djevelens list med sin visdom: Djevelen løy til Adam og Eva og sa at de skulle bli som Gud. Men Gud kom ned fra himmelen og ble menneske, og på korset seiret han over djevelen og satte Adam fri.",
            am: "የዲያብሎስን ጥበብ በጥበቡ ሊሽር፤ ዲያብሎስ አዳምንና ሔዋንን «አምላክ ትሆናላችሁ» ብሎ አሳስቷቸው ነበር። እግዚአብሔር ግን ከሰማየ ሰማያት ወርዶ ሰው ሆነ፤ ዲያብሎስንም በመስቀል ላይ ድል አድርጎ አዳምን ከባርነት ነጻ አወጣው።",
          },
          vers: ["Col 2:14-15"],
        },
      ],
    },
    {
      id: "profetiene",
      tittel: { no: "Profetiene om at Gud skulle bli menneske", am: "ስለ ሥጋዌ የተነገሩ ትንቢቶች" },
      ingress: {
        no: "Før han ble født, talte Gud gjennom profetene og ga mange forbilder (ምሳሌ).",
        am: "የሚወለድበት ጊዜ ከመድረሱ አስቀድሞ በነቢያት አድሮ ትንቢት አናገረ፤ ብዙ ምሳሌንም አስመሰለ።",
      },
      punkter: [
        {
          tekst: {
            no: "Allerede etter fallet sa Gud til slangen at kvinnens ætt skulle knuse hodet dens.",
            am: "ከበደሉ በኋላ እግዚአብሔር እባቡን «የሴቲቱ ዘር ራስህን ይቀጠቅጣል» አለው።",
          },
          vers: ["Gen 3:15"],
        },
        {
          tekst: {
            no: "Jesaja sa: «Se, en jomfru blir med barn og føder en sønn, og hun gir ham navnet Immanuel.» Kirka sier at dette verset klart viser at Maria er Guds mor: jomfruen er Maria, og Sønnen er Immanuel, Jesus Kristus.",
            am: "ኢሳይያስ «እነሆ፥ ድንግል ትፀንሳለች፥ ወንድ ልጅም ትወልዳለች፥ ስሙንም አማኑኤል ብላ ትጠራዋለች» አለ። ይህ ቃል የእመቤታችንን የአምላክ እናትነት ይገልጻል፤ ድንግል የተባለች እርሷ፣ ወልድ የተባለ ልጇ አማኑኤል ኢየሱስ ክርስቶስ ነውና።",
          },
          vers: ["Isa 7:14", "Matt 1:22-23"],
        },
        {
          tekst: {
            no: "Jesaja sa også: «Et barn er oss født, en sønn er oss gitt … og han kalles … veldig Gud.» Barnet som ble født, er Gud.",
            am: "ኢሳይያስ ደግሞ «ሕፃን ተወልዶልናልና፥ ወንድ ልጅም ተሰጥቶናልና … ስሙም … ኃያል አምላክ … ተብሎ ይጠራል» አለ። የተወለደው ሕፃን አምላክ ነው።",
          },
          vers: ["Isa 9:6"],
        },
        {
          tekst: {
            no: "Mika sa at herskeren over Israel skulle komme fra Betlehem, «og hans utgang er fra fordum, fra evighets dager». Han skulle bli født i tiden, men han er evig.",
            am: "ሚክያስ «አንቺም ቤተ ልሔም ኤፍራታ ሆይ … ከአንቺ ግን አወጣጡ ከቀድሞ ጀምሮ ከዘላለም የሆነ … ገዥ የሚሆን ይወጣልኛል» አለ። በዘመን ይወለዳል፤ እርሱ ግን ዘላለማዊ ነው።",
          },
          vers: ["Mic 5:2", "Matt 2:1-2"],
        },
        {
          tekst: {
            no: "Bileam sa: «En stjerne stiger opp av Jakob.» Stjernen er et bilde på Herren, og stjernen ledet de vise menn til ham.",
            am: "በለዓም «ከያዕቆብ ኮከብ ይወጣል» አለ። ኮከብ የጌታ ምሳሌ ነው፤ ሰብአ ሰገልንም ኮከብ እየመራ ወደ እርሱ አደረሳቸው።",
          },
          vers: ["Num 24:17", "Matt 2:1-2"],
        },
        {
          tekst: {
            no: "Gud lovte Abraham at alle jordens slekter skulle velsignes i ham og hans ætt. Paulus forklarer at «ætten» er Kristus.",
            am: "እግዚአብሔር ለአብርሃም «የምድር ነገዶችም ሁሉ በአንተ ይባረካሉ» አለው። ቅዱስ ጳውሎስም «ለዘርህም ይላል፥ እርሱም ክርስቶስ» ብሎ ተረጐመው።",
          },
          vers: ["Gen 12:3", "Gal 3:16"],
        },
      ],
    },
    {
      id: "bebudelsen",
      tittel: { no: "Bebudelsen (ብሥራት)", am: "ብሥራተ መልአክ" },
      punkter: [
        {
          tekst: {
            no: "Da tiden var inne, sendte Gud engelen Gabriel til jomfru Maria i Nasaret. Han hilste henne: «Vær hilset, du benådede! Herren er med deg; velsignet er du blant kvinner!»",
            am: "የመከራው ጊዜ ሲያበቃ እግዚአብሔር ቅዱስ ገብርኤልን በናዝሬት ወደምትኖረው ወደ ቅድስት ድንግል ማርያም ላከው። እርሱም «ደስ ይበልሽ፥ ጸጋ የሞላብሽ ሆይ፥ ጌታ ከአንቺ ጋር ነው፤ አንቺ ከሴቶች መካከል የተባረክሽ ነሽ» አላት።",
          },
          vers: ["Luke 1:26-28"],
        },
        {
          tekst: {
            no: "Engelen sa: «Frykt ikke, Maria! … du skal bli med barn og føde en sønn, og du skal kalle ham Jesus. Han skal være stor og kalles den Høyestes Sønn.»",
            am: "መልአኩም «ማርያም ሆይ፥ በእግዚአብሔር ፊት ጸጋ አግኝተሻልና አትፍሪ። እነሆም፥ ትፀንሻለሽ ወንድ ልጅም ትወልጃለሽ፥ ስሙንም ኢየሱስ ትዪዋለሽ። እርሱ ታላቅ ይሆናል የልዑል ልጅም ይባላል» አላት።",
          },
          vers: ["Luke 1:30-33"],
        },
        {
          tekst: {
            no: "Maria spurte hvordan det skulle skje, siden hun ikke kjente noen mann. Engelen svarte: «Den Hellige Ånd skal komme over deg, og den Høyestes kraft skal overskygge deg; derfor skal også det hellige som fødes, kalles Guds Sønn.»",
            am: "ማርያምም «ወንድ ስለማላውቅ ይህ እንዴት ይሆናል?» አለችው። መልአኩም «መንፈስ ቅዱስ በአንቺ ላይ ይመጣል፥ የልዑልም ኃይል ይጸልልሻል ስለዚህ ደግሞ ከአንቺ የሚወለደው ቅዱስ የእግዚአብሔር ልጅ ይባላል» አላት።",
          },
          vers: ["Luke 1:34-35"],
        },
        {
          tekst: {
            no: "Maria svarte: «Se, jeg er Herrens tjenerinne; meg skje etter ditt ord!» I samme øyeblikk ble Ordet unnfanget i henne. Han tok kjøtt og sjel av henne og forente dem med sin guddom. Fra to ble han én: én person (አንድ አካል) og én natur (አንድ ባሕርይ).",
            am: "እመቤታችንም «እነሆኝ የጌታ ባሪያ እንደ ቃልህ ይሁንልኝ» አለች። ቃሏን ምክንያት አድርጎ አካላዊ ቃል በማኅፀኗ አደረ፤ ከሥጋዋና ከነፍሷ ነሥቶ ከመለኮቱ ጋር አዋሐደ። ከሁለት አካል አንድ አካል፣ ከሁለት ባሕርይ አንድ ባሕርይ ሆነ።",
          },
          vers: ["Luke 1:38", "John 1:14"],
        },
        {
          tekst: {
            no: "Han ble unnfanget av Den hellige ånd, uten noen jordisk far. Han som er født av Faderen uten mor, ble født som menneske uten far.",
            am: "ያለ አባት በመንፈስ ቅዱስ ተፀነሰ። ቅድመ ዓለም ያለ እናት ከአብ የተወለደው፣ ድኅረ ዓለም ያለ አባት ከእናት ሰው ሆኖ ተወለደ።",
          },
          vers: ["Matt 1:18-21"],
        },
      ],
    },
    {
      id: "fodselen",
      tittel: { no: "Jesu fødsel i Betlehem", am: "ልደተ ክርስቶስ በቤተ ልሔም" },
      punkter: [
        {
          tekst: {
            no: "Keiser Augustus ville telle alle i riket. Josef dro derfor med Maria fra Nasaret til Betlehem. Det var ikke plass i herberget, så de søkte ly i en stall. Der fødte Maria sønnen sin, svøpte ham og la ham i en krybbe, slik Mika hadde sagt.",
            am: "ዓለሙ ሁሉ እንዲጻፍ ከአውግስጦስ ቄሣር ትእዛዝ ወጣ። ዮሴፍም እመቤታችንን ይዞ ሊጻፍ ከናዝሬት ወደ ቤተ ልሔም ሄደ። ማደሪያ ስላልነበራቸው በከብቶች በረት ተጠግተው አደሩ፤ በዚያም ጌታችንን በድንግልና ወለደችው፤ በመጠቅለያም ጠቀለለችው፤ በግርግምም አስተኛችው። ይህም ሚክያስ እንደተናገረው ነው።",
          },
          vers: ["Luke 2:1-7", "Mic 5:2"],
        },
        {
          tekst: {
            no: "Josef ville først skille seg fra Maria i stillhet. Men en engel sa til ham i en drøm: «Det som er unnfanget i henne, er av Den hellige ånd … du skal kalle ham Jesus; for han skal frelse sitt folk fra deres synder.»",
            am: "እጮኛዋ ዮሴፍ በስውር ሊተዋት አሰበ፤ የጌታ መልአክ ግን በሕልም ታይቶ «ከእርስዋ የተፀነሰው ከመንፈስ ቅዱስ ነውና … እርሱ ሕዝቡን ከኃጢአታቸው ያድናቸዋልና ስሙን ኢየሱስ ትለዋለህ» አለው።",
          },
          vers: ["Matt 1:18-21", "Matt 1:22-23"],
        },
        {
          tekst: {
            no: "Englene fortalte gjeterne på marken: «I dag er en frelser født, som er Kristus, Herren, i Davids stad.» Og en himmelsk hærskare sang: «Ære være Gud i det høyeste, og fred på jorden.» Kirkefaren Kyrillos sier: Englene kunne ikke se ham før han ble menneske, men nå så de ham.",
            am: "መላእክት በሜዳ ያደሩ እረኞችን «ዛሬ በዳዊት ከተማ መድኃኒት እርሱም ክርስቶስ ጌታ የሆነ ተወልዶላችኋልና» አሏቸው፤ የሰማይ ሠራዊትም «ክብር ለእግዚአብሔር በአርያም ይሁን ሰላምም በምድር» እያሉ አመሰገኑ። ቅዱስ ቄርሎስ «በሥጋ ተወልዶ ለመላእክት ታያቸው፤ ሰው ሳይሆን አላዩትም ነበርና» ብሏል።",
          },
          vers: ["Luke 2:8-14", "Luke 2:15-20"],
          andre: [{ no: "ሃይማኖተ አበው, Kyrillos 79:56", am: "ሃይማኖተ አበው ዘቅዱስ ቄርሎስ 79፥56" }],
        },
        {
          tekst: {
            no: "De vise menn (ሰብአ ሰገል) fulgte stjernen. De falt ned og tilba barnet og ga ham gull, røkelse og myrra. Kirka sier at tilbedelsen viser at han er fullkommen Gud, og at han ble kalt et barn viser at han er fullkomment menneske.",
            am: "ሰብአ ሰገል ኮከብ እየመራቸው መጥተው ወድቀው ሰገዱለት፤ ወርቅ፣ ዕጣንና ከርቤ አቀረቡለት። ፍጹም አምላክ እንደ መሆኑ ስግደትን ተቀበለ፤ ፍጹም ሰው እንደ መሆኑም «ሕፃን» ተባለ።",
          },
          vers: ["Matt 2:1-2", "Matt 2:11"],
        },
        {
          tekst: {
            no: "Maria fødte ham som jomfru, og hun forble jomfru. Kirka ser dette i profetiene om «en lukket have» og om porten som «skal være lukket», fordi Herren, Israels Gud, har gått inn gjennom den.",
            am: "እመቤታችን ጌታችንን በድንግልና ፀንሳ በድንግልና ወለደችው፤ ዘለዓለማዊ ድንግል ናት። «የተቈለፈ ገነት» የሚለውና «ይህ በር ተዘግቶ ይኖራል … የእስራኤል አምላክ እግዚአብሔር ገብቶበታልና» የሚለው ትንቢት ይህን ያስረዳል።",
          },
          vers: ["Song 4:12", "Ezek 44:2"],
        },
        {
          tekst: {
            no: "Jesus har to fødsler. Den første er før all tid: Han er født av Faderen. Den andre er i tiden: Han er født av jomfru Maria. Han er den samme Sønnen i begge fødslene.",
            am: "ኢየሱስ ክርስቶስ ሁለት ልደታት አሉት። ቀዳማዊ ልደቱ ዓለም ከመፈጠሩ በፊት ከአብ የተወለደው ልደት ነው፤ ደኃራዊ ልደቱ ደግሞ ከቅድስት ድንግል ማርያም በሥጋ የተወለደው ልደት ነው። በሁለቱም ልደታት አንድ ወልድ ነው።",
          },
          vers: ["Ps 2:7", "Gal 4:4"],
        },
      ],
    },
    {
      id: "ordet",
      tittel: { no: "Ordet ble kjød – sann Gud og sant menneske", am: "ቃል ሥጋ ሆነ፤ ፍጹም አምላክ ፍጹም ሰው" },
      punkter: [
        {
          tekst: {
            no: "«I begynnelsen var Ordet, og Ordet var hos Gud, og Ordet var Gud.» Og dette Ordet «ble kjød og tok bolig iblant oss». Han som er evig, kom inn i tiden.",
            am: "«በመጀመሪያው ቃል ነበረ፥ ቃልም በእግዚአብሔር ዘንድ ነበረ፥ ቃልም እግዚአብሔር ነበረ።» ይህ ቃል «ሥጋ ሆነ፤ … በእኛ አደረ።» ዘመን የማይቆጠርለት ዘመን ተቆጠረለት።",
          },
          vers: ["John 1:1", "John 1:14"],
        },
        {
          tekst: {
            no: "Paulus skriver at han var i Guds skikkelse, men tok en tjeners skikkelse og ble lik mennesker. Han ydmyket seg helt til døden på korset.",
            am: "ቅዱስ ጳውሎስ «በእግዚአብሔር መልክ ሲኖር … የባሪያን መልክ ይዞ በሰውም ምሳሌ ሆኖ … ራሱን አዋረደ፥ ለሞትም ይኸውም የመስቀል ሞት እንኳ የታዘዘ ሆነ» ብሏል።",
          },
          vers: ["Phil 2:6-8"],
        },
        {
          tekst: {
            no: "Han sluttet ikke å være Gud da han ble menneske. Abba Hiryakos sier: Ordet kom til deg uten å skilles fra sin Far. Det manglet ikke noe der oppe, og det ble ikke lagt til noe her nede.",
            am: "ሰው በመሆኑ ከአምላክነቱ ምንም የጎደለበት የለም። አባ ሕርያቆስ «ከአባቱ አጠገብ ሳይለይ ቃል ወደ አንቺ መጣ፤ … በላይ ሳይጎድል በታችም ሳይጨመር በማኅፀንሽ ተወሰነ» ብሏል።",
          },
          andre: [{ no: "Abba Hiryakos, Mariamessen (ቅዳሴ ማርያም) 46", am: "ቅዳሴ ማርያም ቁጥር 46 (አባ ሕርያቆስ)" }],
        },
        {
          tekst: {
            no: "Han er fullkommen Gud (ፍጹም አምላክ): Han stilnet stormen, gjorde vann til vin, ga en blindfødt synet og tilga synder med egen makt. Paulus kaller ham «Gud over alle ting», Johannes kaller ham «den sanne Gud», og Tomas sa: «Min Herre og min Gud!»",
            am: "ፍጹም አምላክ ነው፤ ወጀቡን ጸጥ አደረገ፤ ውኃውን ወይን ጠጅ አደረገ፤ ዓይን ፈጠረ፤ ኃጢአትን በሥልጣኑ አስተሰረየ። ቅዱስ ጳውሎስ «ከሁሉ በላይ ሆኖ ለዘላለም የተባረከ አምላክ» ብሎታል፤ ቅዱስ ዮሐንስ «እውነተኛ አምላክ» ብሎታል፤ ቶማስም «ጌታዬ አምላኬም» ብሎ መሰከረ።",
          },
          vers: ["Matt 8:24-26", "John 9:6-7", "Mark 2:5-7", "Rom 9:5", "1John 5:20", "John 20:28"],
        },
        {
          tekst: {
            no: "Han er fullkomment menneske (ፍጹም ሰው): Han ble født som et lite barn, vokste opp, sov i båten, ble sulten og tørst, gikk i bryllup og spiste fisk etter oppstandelsen. Han ble lik oss i alt, unntatt synden.",
            am: "ፍጹም ሰው ነው፤ በግዕዘ ሕፃናት ተወለደ፤ አደገ፤ በታንኳ ውስጥ ተኝቶ አንቀላፋ፤ ተራበ፤ ተጠማ፤ ሠርግ ቤት ተጠርቶ ሄደ፤ ከትንሣኤም በኋላ ዓሣ በላ። ከኃጢአት በቀር በሁሉ መሰለን።",
          },
          vers: ["Luke 2:52", "Matt 8:24-26", "Luke 24:42-43", "Heb 2:14-15"],
        },
        {
          tekst: {
            no: "Hvorfor må han være både Gud og menneske? Athanasius forklarer: Hvis han bare var Gud, kunne han ikke lide og dø. Hvis han bare var menneske, kunne han ikke beseire døden og frelse oss. Men han led, døde og seiret over døden, fordi han er Gud som ble menneske.",
            am: "ለምን አምላክም ሰውም መሆን አስፈለገ? ቅዱስ አትናቴዎስ እንዳስተማረው አምላክ ብቻ ቢሆን ኖሮ መታመምና መሞት አይችልም ነበር፤ ሰው ብቻ ቢሆን ኖሮ ሞትን ድል መንሣትና ሌሎችን ማዳን አይችልም ነበር። እርሱ ግን ታሞ ሞቶ ፍጥረቱን አዳነ፤ ሞትንም ድል ነሣ፤ ሰው የሆነ አምላክ ነውና።",
          },
          vers: ["Heb 2:14-15"],
        },
        {
          tekst: {
            no: "Guddommen skilte seg aldri fra menneskeligheten hans, ikke engang et øyeblikk – heller ikke da han led og døde. «Jesus Kristus er i går og i dag den samme, ja til evig tid.»",
            am: "ከሥጋዌ በኋላ መለኮት ከሥጋ ለቅጽበተ ዓይን እንኳ የተለየበት ጊዜ የለም። «ኢየሱስ ክርስቶስ ትናንትና ዛሬ እስከ ለዘላለምም ያው ነው።»",
          },
          vers: ["Heb 13:8"],
        },
      ],
    },
    {
      id: "tewahedo",
      tittel: { no: "Hva betyr ተዋሕዶ?", am: "ተዋሕዶ ምንድን ነው?" },
      ingress: {
        no: "ተዋሕዶ betyr «å bli forent til ett». Kirka lærer at guddommen (መለኮት) og menneskeligheten (ትስብእት) ble forent i Kristus, slik at han av to ble én person og én natur.",
        am: "ተዋሕዶ ማለት አንድ መሆን ማለት ነው። ተዋሕዶ ከሁለት አካል አንድ አካል፣ ከሁለት ባሕርይ አንድ ባሕርይ የመሆን ምሥጢር ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "Kirka lærer: Jesus Kristus er det menneskeblitte Ordet. Av to personer ble han én person (ከሁለት አካል አንድ አካል), og av to naturer ble han én natur (ከሁለት ባሕርይ አንድ ባሕርይ). Guddommen og menneskeligheten ble forent uten forandring, uten sammenblanding, uten adskillelse og uten å deles.",
            am: "ኦርቶዶክሳዊት ተዋሕዶ ቤተ ክርስቲያን ኢየሱስ ክርስቶስ በተዋሕዶ ከሁለት አካል አንድ አካል፣ ከሁለት ባሕርይ አንድ ባሕርይ የሆነ ሥግው ቃል ነው ብላ ታምናለች፤ ታስተምራለች። መለኮትና ትስብእት የተዋሐዱት ያለመለወጥ፣ ያለመቀላቀል፣ ያለመለያየት፣ ያለመነጣጠል ነው።",
          },
          vers: ["John 1:14"],
        },
        {
          tekst: {
            no: "Én natur betyr at guddommen gjorde menneskets natur til sin egen, og at kjøttet fikk guddommens natur som sin egen. Kyrillos sier: «Det som hører kjøttet til, ble Ordets, og det som hører Ordet til, ble kjøttets.»",
            am: "ከሁለት ባሕርይ አንድ ባሕርይ ማለት መለኮት የእርሱ ያልሆነውን የሥጋ ባሕርይ ባሕርዩ አድርጎ፣ ሥጋም የእርሱ ያልሆነውን የመለኮት ባሕርይ ባሕርዩ አድርጎ ተዋሐዱ ማለት ነው። ቅዱስ ቄርሎስ «የሥጋ ገንዘብ ለቃል፣ የቃል ገንዘብ ለሥጋ ሆነ» ብሏል።",
          },
        },
        {
          tekst: {
            no: "Uten forandring (ዘእንበለ ውላጤ): Det var ikke som da vannet i Kana ble til vin. Guddommen ble ikke forandret til menneske, og menneskeligheten ble ikke forandret til guddom. Gud forandrer seg ikke.",
            am: "ያለመለወጥ (ዘእንበለ ውላጤ)፤ በቃና ዘገሊላ ውኃ ወደ ወይን ጠጅ እንደ ተለወጠ አይደለም። መለኮት ወደ ትስብእት፣ ትስብእትም ወደ መለኮት አልተለወጠም።",
          },
          vers: ["John 2:7-9", "Mal 3:6"],
        },
        {
          tekst: {
            no: "Uten å gå tilbake (እንበለ ሚጠት): Moses' stav ble en slange og så en stav igjen. Men foreningen i Kristus går aldri tilbake.",
            am: "ያለመመለስ (እንበለ ሚጠት)፤ የሙሴ በትር እባብ ከሆነች በኋላ ተመልሳ በትር እንደ ሆነች አይደለም፤ ተዋሕዶው መመለስ የሌለበት ነው።",
          },
          vers: ["Exod 4:2-4"],
        },
        {
          tekst: {
            no: "Uten sammenblanding (ዘእንበለ ቱሳሔ): Det er ikke som når melk og vann blandes og blir noe tredje. Guddommen og menneskeligheten bevarer hver sin egenart.",
            am: "ያለመቀላቀል (ዘእንበለ ቱሳሔ)፤ ወተትና ውኃ ሲቀላቀሉ ሌላ ሦስተኛ ነገር እንደሚሆኑ አይደለም፤ መለኮትና ትስብእት የተዋሐዱት በመጠባበቅ (በተዐቅቦ) ነው።",
          },
        },
        {
          tekst: {
            no: "Uten innbolighet (ዘእንበለ ኅድረት): Guddommen bodde ikke i et menneske slik et sverd er i sliren. Uten å legges oppå hverandre (ዘእንበለ ትድምርት): Det er ikke som klær lagt oppå klær, eller brød oppå brød.",
            am: "ያለማደር (ዘእንበለ ኅድረት)፤ ሰይፍ በሰገባው እንደሚያድር መለኮት በሥጋ ላይ አደረበት ማለት አይደለም። ያለመደራረብ (ዘእንበለ ትድምርት)፤ ልብስ በልብስ ላይ፣ እንጀራ በእንጀራ ላይ እንደሚደራረብ አይደለም።",
          },
        },
        {
          tekst: {
            no: "Uten adskillelse (ዘእንበለ ፍልጠት) og uten å deles (ዘእንበለ ቡዐዴ): Kropp og sjel skilles når et menneske dør, og et blad skilles fra skaftet. Men guddommen og menneskeligheten i Kristus skilles aldri.",
            am: "ያለመለያየት (ዘእንበለ ፍልጠት) እና ያለመነጣጠል (ዘእንበለ ቡዐዴ)፤ ሥጋና ነፍስ በሞት ሰዓት እንደሚለያዩ፣ እንጨትና ዛቢያው ተዋደው በኋላ እንደሚነጣጠሉ አይደለም።",
          },
        },
        {
          tekst: {
            no: "Derfor heter kirka vår «Den etiopisk-ortodokse Tewahedo-kirke» (የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን). Navnet viser at vi tror at guddommen og menneskeligheten er uadskillelig forent i Kristus.",
            am: "የሃይማኖታችን ስያሜ «ኦርቶዶክስ ተዋሕዶ» የተባለው በዚህ ምክንያት ነው። የቤተ ክርስቲያናችን ስም «የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን» ነው፤ ይህም የመለኮትንና የትስብእትን የማይለያይ አንድነት ይገልጻል።",
          },
        },
        {
          tekst: {
            no: "Kirka sier også, med Kyrillos av Alexandria, at Kristus er «den ene menneskeblitte natur av Gud Ordet». Det betyr ikke at menneskeligheten forsvant, men at han er én – ikke to – og at alt han gjorde, gjorde han som én.",
            am: "ቤተ ክርስቲያን ከቅዱስ ቄርሎስ ጋር ሰው የሆነ የእግዚአብሔር ቃል አንድ ባሕርይ ነው ትላለች። ይህ ማለት ትስብእቱ ጠፋ ማለት አይደለም፤ አንድ እንጂ ሁለት አይደለም፤ የሠራውንም ሁሉ በአንድነት ሠራ ማለት ነው።",
          },
        },
      ],
    },
    {
      id: "bilder",
      tittel: { no: "Bilder som hjelper oss å forstå", am: "የተዋሕዶ ምሳሌዎች" },
      ingress: {
        no: "Fedrene bruker bilder fra Bibelen og skaperverket. Men de kaller dem «mangelfulle bilder» (ምሳሌ ዘየሐፅፅ), for ingenting kan forklare dette mysteriet helt.",
        am: "የተዋሕዶን ነገር ጠንቅቀው የሚገልጹ ምሳሌዎች ባይገኙም አባቶቻችን ያስተማሩንን ፍጹም ያልሆኑ ምሳሌዎች (ምሳሌ ዘየሐፅፅ) እንጠቀማለን።",
      },
      punkter: [
        {
          tekst: {
            no: "Tornebusken Moses så: Flammen er et bilde på guddommen, og den grønne busken på menneskeligheten. Busken brant, men ble ikke fortært, og flammen ble ikke slukket. Kirka ser også busken som et bilde på Maria, som bar Gud i seg uten å bli fortært.",
            am: "ሙሴ ያያት ዕፀ ጳጦስ፤ ነበልባሉ የመለኮት፣ ሐመልማሉ የትስብእት ምሳሌ ነው። ነበልባሉ ሐመልማሉን ሳያቃጥለው፣ ሐመልማሉም ነበልባሉን ሳያጠፋው በአንድነት ታዩ። ሐመልማሉ የእመቤታችንም ምሳሌ ነው።",
          },
          vers: ["Exod 3:2"],
        },
        {
          tekst: {
            no: "Den glødende kullbiten Jesaja så: Ilden er et bilde på guddommen, og kullet på kjøttet. Ilden ble ikke til kull, og kullet ble ikke til ild, men sammen ble de én glødende kullbit (ፍሕም).",
            am: "የኢሳይያስ ፍሕም፤ እሳት የመለኮት፣ ከሰል የሥጋ ምሳሌ ነው። እሳቱ ተለውጦ ከሰል፣ ከሰሉ ተለውጦ እሳት አልሆነም፤ ሁለቱም ሳይለቁ ተዋሕደው ፍሕም ሆኑ።",
          },
          vers: ["Isa 6:6-7"],
        },
        {
          tekst: {
            no: "Glødende jern: Når jern legges i ilden, slutter det ikke å være jern, og ilden slutter ikke å være ild. Men jernet blir ild i jernets form. Vi kaller det glødende jern, ikke bare jern eller bare ild. Kyrillos sier: Når man slår det glødende jernet med en hammer, blir jernet slått, men ilden blir ikke skadet. Slik led Ordet i kjøttet, uten at guddommen led.",
            am: "የጋለ ብረት፤ ብረትን ከእሳት ባስገቡት ጊዜ ብረትነቱን ሳይለቅ፣ እሳቱም እሳትነቱን ሳይለቅ በብረቱ ቅርጽ ልክ እሳት ይሆናል፤ «የጋለ ብረት» እንለዋለን እንጂ ብረት ወይም እሳት ብቻ አንለውም። ቅዱስ ቄርሎስ እንዳለው ብረቱ በመዶሻ ሲመታ የእሳቱ ባሕርይ እንደማይጎዳ፣ ሰው የሆነ አምላክ ቃል በመለኮቱ ሕማም ሳይኖርበት በሥጋ ታመመ።",
          },
          andre: [{ no: "ሃይማኖተ አበው, Kyrillos 73:12", am: "ሃይማኖተ አበው ዘቅዱስ ቄርሎስ 73፥12" }],
        },
        {
          tekst: {
            no: "Kropp og sjel: Fra et menneske blir til i mors liv, kan vi ikke dele det og si «dette er bare sjel» og «dette er bare kropp». Slik kan vi heller ikke dele Kristus. Men bildet er mangelfullt, for kropp og sjel skilles når vi dør.",
            am: "የሰው ነፍስና ሥጋ፤ ሰው ከእናቱ ማኅፀን ሥጋና ነፍስን ነሥቶ ፅንስ ከሆነበት ቀን ጀምሮ «ይህ ነፍስ ነው፣ ይህ ሥጋ ነው» ብሎ መለያየት እንደማይቻል፣ ከተዋሕዶ በኋላም «ይህ ሥጋ ነው፣ ይህ መለኮት ነው» ተብሎ መክፈል አይቻልም። ነገር ግን ነፍስና ሥጋ በሞት ስለሚለያዩ ይህም ምሳሌ ዘየሐፅፅ ነው።",
          },
        },
        {
          tekst: {
            no: "Også jernet er et mangelfullt bilde, for jern som gløder, blir lett slått i stykker. Gud er større enn alle bilder.",
            am: "የጋለ ብረትም ብረት እሳት ሲነካው በቀላሉ ስለሚቀጠቀጥ «ምሳሌ ዘየሐፅፅ» ነው። አምላክ ከምሳሌዎች ሁሉ በላይ ነው።",
          },
        },
      ],
    },
    {
      id: "navn",
      tittel: { no: "Navnene hans etter at han ble menneske", am: "የተዋሕዶ ስሞች" },
      ingress: {
        no: "De viktigste navnene han fikk da han ble menneske, er አማኑኤል, ኢየሱስ og ክርስቶስ.",
        am: "የእግዚአብሔር ወልድ የተዋሕዶ ዋና ዋና ስሞች አማኑኤል፣ ኢየሱስ እና ክርስቶስ ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "አማኑኤል (Immanuel) betyr «Gud med oss». Han ble født av jomfru Maria og levde sammen med oss.",
            am: "አማኑኤል ማለት «እግዚአብሔር ከእኛ ጋር» ማለት ነው። ከድንግል ማርያም ተወልዶ ከእኛ ጋር ስለኖረ የወጣለት ስም ነው።",
          },
          vers: ["Isa 7:14", "Matt 1:22-23"],
        },
        {
          tekst: {
            no: "ኢየሱስ (Jesus) betyr frelser (መድኃኒት). Engelen sa: «Han skal frelse sitt folk fra deres synder.»",
            am: "ኢየሱስ ማለት መድኃኒት ማለት ነው። መልአኩ «እርሱ ሕዝቡን ከኃጢአታቸው ያድናቸዋልና» አለ።",
          },
          vers: ["Matt 1:21", "Luke 2:11"],
        },
        {
          tekst: {
            no: "ክርስቶስ (Kristus) betyr Messias, den salvede. Men ingen annen salvet ham. Han er selv både den som salver og den som blir salvet.",
            am: "ክርስቶስ ማለት መሲሕ፣ የተቀባ ማለት ነው። ለእርሱ ቀቢ ሿሚ ኖሮት አይደለም፤ ቀቢውም ተቀቢውም አንድ እርሱ ነው እንጂ።",
          },
          vers: ["John 4:25-26"],
        },
      ],
    },
    {
      id: "feil-laere",
      tittel: { no: "Feil lære som kirka har avvist", am: "በምሥጢረ ሥጋዌ ላይ የተነሡ የስሕተት ትምህርቶች" },
      punkter: [
        {
          tekst: {
            no: "Noen sa at Jesus bare var et menneske. Andre sa at han bare var Gud og bare så ut som et menneske. Begge deler er feil: Han er virkelig Gud som ble virkelig menneske.",
            am: "አንዳንዶች ኢየሱስ «ሰው ብቻ ነው» ብለው አምላክነቱን ካዱ፤ ሌሎች ደግሞ «መለኮት ብቻ ነው» ብለው ሰውነቱን ካዱ። ኢየሱስ ክርስቶስ ግን በእውነት ሰው የሆነ አምላክ ነው።",
          },
          vers: ["John 1:14", "1John 1:1"],
        },
        {
          tekst: {
            no: "Nestorius (ንስጥሮስ) lærte at Kristus er to personer og to naturer, og at Gud bare bodde i mennesket Jesus. Derfor ville han ikke kalle Maria «Guds mor» (ወላዲተ አምላክ), bare «menneskets mor» (ወላዲተ ሰብእ). Han ble fordømt på kirkemøtet i Efesos i år 431, ledet av Kyrillos av Alexandria.",
            am: "ንስጥሮስ «ክርስቶስ ሁለት አካል ሁለት ባሕርይ አለው» ብሎ፣ መለኮት በሰው አደረበት ብሎ ኅድረትን አስተማረ፤ እመቤታችንንም «ወላዲተ ሰብእ እንጂ ወላዲተ አምላክ ልትባል አይገባትም» አለ። ይህ ኑፋቄ በ431 ዓ.ም. በታላቁ መምህር በእስክንድርያው ሊቀ ጳጳስ በቅዱስ ቄርሎስ አማካኝነት በኤፌሶን ጉባኤ ተወግዟል።",
          },
          vers: ["Luke 1:43"],
        },
        {
          tekst: {
            no: "Eutyches (አውጣኪ) lærte det motsatte: at guddommen slukte menneskeligheten, så bare guddommen var igjen. Også denne læren er fordømt av vår kirke. Kristus er fullkomment menneske, lik oss i sin menneskelighet.",
            am: "አውጣኪ ደግሞ «የመለኮት ባሕርይ የሥጋን ባሕርይ ውጦታል፤ አጥፍቶታል» አለ። ይህ አባባል በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን የተወገዘ ነው። ክርስቶስ ፍጹም አምላክ ፍጹም ሰው ነው።",
          },
          vers: ["Heb 2:14-15"],
        },
        {
          tekst: {
            no: "I år 451 var det et kirkemøte i Khalkedon (ኬልቄዶን). Det sa at Kristus er «én person i to naturer». Pave Leo i Roma og keiserparet sto bak møtet. Den hellige Dioskoros (ዲዮስቆሮስ), patriark av Alexandria, ble avsatt der. Kirka vår godtar ikke dette møtet, fordi «to naturer» etter foreningen deler Kristus i to.",
            am: "በ451 ዓ.ም. በኬልቄዶን ጉባኤ ተደረገ፤ «ክርስቶስ ሁለት ባሕርይ አንድ አካል ነው» የሚለውን ትምህርት ተቀበለ። ጉባኤው በሮሙ ሊዮንና በንጉሡና በንግሥቲቱ አስተባባሪነት ተዘጋጀ፤ የእስክንድርያው ሊቀ ጳጳስ ቅዱስ ዲዮስቆሮስም በዚያ ከመንበሩ ተሻረ። ቤተ ክርስቲያናችን ይህን ጉባኤ አትቀበለውም፤ ከተዋሕዶ በኋላ ሁለት ባሕርይ ማለት ክርስቶስን ለሁለት መክፈል ነውና።",
          },
        },
        {
          tekst: {
            no: "Hellige Teodosius sa: «Etter foreningen sier vi ikke to naturer. Som våre rene fedre sier vi at Kristus er én, i én person.»",
            am: "ቅዱስ ቴዎዶስዮስ «ከተዋሕዶ በኋላስ ሁለት ባሕርይ አንልም፤ እንደ ንጹሐን አባቶቻችን ክርስቶስ በአንድ አካል ሁለተኛ የሌለው አንድ እንደ ሆነ እንናገራለን እንጂ» ብሏል።",
          },
          andre: [{ no: "ሃይማኖተ አበው, Teodosius 82:37", am: "ሃይማኖተ አበው ዘቅዱስ ቴዎዶስዮስ 82፥37" }],
        },
        {
          tekst: {
            no: "Kirka vår hører til familien av orientalsk-ortodokse kirker, som ikke godtok Khalkedon. De andre er den koptiske, den syriske, den armenske og den indiske kirka, og også den eritreiske Tewahedo-kirka. Vi har samme tro som fedrene i Alexandria, særlig Kyrillos.",
            am: "ቤተ ክርስቲያናችን የኬልቄዶንን ጉባኤ ካልተቀበሉት ኦሪየንታል ኦርቶዶክስ አብያተ ክርስቲያናት አንዷ ናት። ሌሎቹም የግብጽ፣ የሶርያ፣ የአርመንና የሕንድ እንዲሁም የኤርትራ ኦርቶዶክስ ተዋሕዶ አብያተ ክርስቲያናት ናቸው። እምነታችን የእስክንድርያ ሊቃውንት በተለይም የቅዱስ ቄርሎስ ትምህርት ነው።",
          },
        },
      ],
    },
    {
      id: "maria",
      tittel: { no: "Maria, Guds mor (ወላዲተ አምላክ)", am: "ቅድስት ድንግል ማርያም ወላዲተ አምላክ" },
      punkter: [
        {
          tekst: {
            no: "Fordi barnet Maria fødte, er Gud som ble menneske, kaller kirka henne ወላዲተ አምላክ – hun som fødte Gud. Elisabet kalte henne «min Herres mor».",
            am: "እመቤታችን የወለደችው ሰው የሆነውን አምላክ ስለ ሆነ ቤተ ክርስቲያን «ወላዲተ አምላክ» ትላታለች። ኤልሳቤጥም «የጌታዬ እናት» ብላታለች።",
          },
          vers: ["Luke 1:43", "Luke 1:35"],
        },
        {
          tekst: {
            no: "Hellige Efrem sier: En jordisk kvinne fødte Gud Ordet som ble menneske. Jomfruen fødte sin Skaper, og han skapte sin mor.",
            am: "ቅዱስ ኤፍሬም «ምድራዊት ሴት ሰው የሆነ እግዚአብሔር ቃልን ወለደችው፣ ድንግል ፈጣሪዋን ወለደችው፤ እርሱም እናቱን ፈጠረ» ብሏል።",
          },
          andre: [{ no: "ሃይማኖተ አበው, Efrem 47:2", am: "ሃይማኖተ አበው ዘቅዱስ ኤፍሬም 47፥2" }],
        },
        {
          tekst: {
            no: "Den første Eva førte døden inn i verden. Men av Maria kom Herren som er livet. Derfor kaller kirka henne «livets kilde» (የሕይወት መገኛ).",
            am: "የመጀመሪያዋ ሔዋን ሞትን ያመጣች ስትሆን፣ እመቤታችን ግን የሕይወት ባለቤት የሆነው ጌታ ከእርሷ ስለ ተገኘ «የሕይወት መገኛ» ትባላለች።",
          },
          vers: ["Gen 3:15", "Gal 4:4"],
        },
        {
          tekst: {
            no: "Kirka kaller Maria ren (ንጽሕት) og «æren for vår natur» (የባሕርያችን መመኪያ). Engelen hilste henne: «Vær hilset, du benådede!»",
            am: "እመቤታችን ንጽሕት፣ የባሕርያችን መመኪያ ናት። መልአኩም «ደስ ይበልሽ፥ ጸጋ የሞላብሽ ሆይ» ብሎ አመሰገናት።",
          },
          vers: ["Luke 1:28"],
        },
      ],
    },
    {
      id: "fest",
      tittel: { no: "Høytidene", am: "በዓላት" },
      punkter: [
        {
          tekst: {
            no: "Unnfangelsen (በዓለ ጽንሰት), også kalt bebudelsen (ብሥራት), feires መጋቢት 29 (7. april). Den dagen ga Gabriel Maria det gode budskapet, og Ordet tok bolig i hennes morsliv.",
            am: "መጋቢት 29 ቀን ለጌታችን ለኢየሱስ ክርስቶስ የፅንሰት በዓል መታሰቢያ ነው፤ ይህም ሊቀ መላእክት ቅዱስ ገብርኤል ለእመቤታችን የምሥራች እንደ ነገራት አካላዊ ቃል በማኅፀኗ ያደረበት ዕለት ነው።",
          },
          vers: ["Luke 1:26-28", "Luke 1:38"],
        },
        {
          tekst: {
            no: "Jesu fødsel (ልደት, også kalt ገና) feires ታኅሣሥ 29 (7. januar). Før julen har kirka en faste.",
            am: "የጌታችን የልደት በዓል (ገና) ታኅሣሥ 29 ቀን ይከበራል። ከበዓሉ በፊትም ጾም አለ።",
          },
          vers: ["Luke 2:8-14"],
        },
        {
          tekst: {
            no: "Unnfangelsen og fødselen er de to første av Herrens ni store høytider (ዐበይት በዓላት). Fra መጋቢት 29 til ታኅሣሥ 29 bar Maria ham i ni måneder og fem dager.",
            am: "ጽንሰትና ልደት ከጌታችን ዘጠኙ ዐበይት በዓላት የመጀመሪያዎቹ ናቸው። እመቤታችን ከመጋቢት 29 እስከ ታኅሣሥ 29 ዘጠኝ ወር ከአምስት ቀን በማኅፀኗ ተሸከመችው።",
          },
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Athanasius", am: "ቅዱስ አትናቴዎስ" },
      tekst: {
        no: "«Hør og forstå at han er Gud som ble menneske ved foreningen. Hvis han bare var Gud, hvordan kunne han da lide, bli korsfestet og dø? Hvis han bare var menneske, hvordan kunne han da beseire døden og frelse andre? Han led og døde og frelste sin skapning, for han er Gud som ble menneske.»",
        am: "«አሁንም በተዋሕዶ ሰው የሆነ አምላክ እንደ ሆነ ሰምተህ ዕወቅ፤ አምላክ ብቻ ከሆነማ እንደምን በታመመ ነበር? ወይስ እንደምን በሰቀሉት ነበር? ወይስ እንደምን በሞተ ነበር? … ሰው ብቻ ከሆነ በታመመ በሞተ ጊዜ ሞትን እንደምን ድል በነሣው ነበር? … እርሱ ታሞ ሞቶ ፍጥረቱን አዳነ፣ ሞትንም ድል ነሣ፤ ሰው የሆነ አምላክ ነውና።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ ሐዋርያዊ 27:6–8 (sitert i astemhro.com: ምስጢረ ሥጋዌ)",
    },
    {
      navn: { no: "Hellige Kyrillos av Alexandria", am: "ቅዱስ ቄርሎስ" },
      tekst: {
        no: "«La oss ikke fornekte foreningen med Guds Ord. Når jern forenes med ild, får det ildens natur. Når jernet slås med en hammer, blir det slått sammen med ilden, men ildens natur blir ikke skadet. Slik skal vi forstå at Gud Ordet, som ble menneske, led i kjøttet uten at guddommen led.»",
        am: "«በእግዚአብሔር ቃል በረቂቅ ባሕርይ የሆነውን ተዋሕዶ አንካድ፤ ብረት ከእሳት በተዋሐደ ጊዜ … የእሳትን ባሕርይ ገንዘብ እንዲያደርግ፤ ብረት በመዶሻ በተመታ ጊዜ ከእሳት ጋር በአንድነት እንደሚመታ ግን ከመዶሻው የተነሣ የእሳት ባሕርይ በምንም በምን እንዳይጎዳ ሰው የሆነ አምላክ ቃል በመለኮቱ ሕማም ሳይኖርበት በሥጋ እንደ ታመመ እንዲህ እናስተውል።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ቄርሎስ 73:12 (sitert i astemhro.com: ምስጢረ ሥጋዌ)",
    },
    {
      navn: { no: "Hellige Gregor av Nazianz", am: "ቅዱስ ጎርጎርዮስ ዘእንዚናዙ" },
      tekst: {
        no: "«Guddommens natur ble ikke forandret til menneskets natur, og menneskets natur ble ikke forandret til guddommens natur. Jomfru Maria fødte ham som én person, og de vise menn tilba ham som én natur.»",
        am: "«የመለኮቱ ባሕርይ ወደ ሰውነቱ ባሕርይ አልተለወጠም፤ የሰውነቱ ባሕርይም ወደ መለኮቱ ባሕርይ አልተለወጠም፤ ድንግል ማርያም አንድ አካል ሆኖ ወለደችው እንጂ፤ ሰብአ ሰገልም አንድ ባሕርይ ሆኖ ሰገዱለት እንጂ።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ጎርጎርዮስ ዘእንዚናዙ 60:17 (sitert i astemhro.com: ምስጢረ ሥጋዌ)",
    },
    {
      navn: { no: "Hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "«Tenk over det som er sagt: Tro ikke at det er en liten ære at Gud forente seg med vår natur. Dette gjorde han ikke for englene.»",
        am: "«የተነገረውን አስተውል፤ እግዚአብሔር ከእኛ ባሕርይ የተዋሐደው ተዋሕዶ ጥቂት ክብር አይምሰልህ፤ ይህንን ለመላእክት አላደረገውምና።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ዮሐንስ አፈወርቅ 62:4 (sitert i astemhro.com: ምስጢረ ሥጋዌ)",
    },
    {
      navn: { no: "Hellige Efrem syreren", am: "ቅዱስ ኤፍሬም ሶርያዊ" },
      tekst: {
        no: "«Kjøttet som hadde en begynnelse, ble evig. Guddommen som ikke kan telles i tid, fikk tid. Den ukjente ble kjent, den usynlige ble sett. Den levende Guds Sønn ble virkelig menneske.»",
        am: "«ጥንት የሌለው ሥጋ ጥንታዊ፣ ቀዳማዊ ሆነ፤ ዘመን የማይቆጠርለት መለኮት ዘመን ተቆጠረለት፤ የማይታወቅ ተገለጠ፣ የማይታይ ታየ፤ የሕያው የእግዚአብሔር ልጅ በእርግጥ ሰው ሆነ።»",
      },
      kilde: "ውዳሴ ማርያም ዘረቡዕ (sitert i astemhro.com: ምስጢረ ሥጋዌ)",
    },
  ],
  ord: [
    { ord: "ሥጋዌ", forklaring: { no: "det å bli menneske (av ተሠገወ, å bli kjøtt)", am: "ሥጋ መሆን፣ ሰው መሆን" } },
    { ord: "ምሥጢረ ሥጋዌ", forklaring: { no: "mysteriet om at Gud ble menneske", am: "የአምላክ ሰው የመሆን ምሥጢር" } },
    { ord: "ተዋሕዶ", forklaring: { no: "forening, det å bli gjort til ett", am: "አንድ መሆን" } },
    { ord: "መለኮት", forklaring: { no: "guddom", am: "አምላክነት" } },
    { ord: "ትስብእት", forklaring: { no: "menneskelighet, menneskenatur", am: "ሰውነት" } },
    { ord: "አካል · ባሕርይ", forklaring: { no: "person · natur", am: "ማንነት · ምንነት" } },
    { ord: "ፍጹም አምላክ ፍጹም ሰው", forklaring: { no: "fullkommen Gud og fullkomment menneske", am: "ሙሉ አምላክ ሙሉ ሰው" } },
    { ord: "ሥግው ቃል", forklaring: { no: "det menneskeblitte Ordet", am: "ሰው የሆነ ቃል" } },
    { ord: "ወላዲተ አምላክ", forklaring: { no: "hun som fødte Gud, Guds mor", am: "አምላክን የወለደች" } },
    { ord: "ብሥራት", forklaring: { no: "bebudelsen, det gode budskapet", am: "የምሥራች" } },
    { ord: "ልደት", forklaring: { no: "fødsel; Jesu fødsel (jul)", am: "መወለድ" } },
    { ord: "አማኑኤል", forklaring: { no: "Immanuel – «Gud med oss»", am: "እግዚአብሔር ከእኛ ጋር" } },
    { ord: "ምሳሌ ዘየሐፅፅ", forklaring: { no: "mangelfullt bilde", am: "ከሚመሰልለት የሚያንስ ምሳሌ" } },
    { ord: "ኅድረት", forklaring: { no: "innbolighet – Nestorius' feillære om at Gud bare bodde i et menneske", am: "ማደር" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet ሥጋዌ?", am: "«ሥጋዌ» ማለት ምን ማለት ነው?" },
      svar: {
        no: "Det å bli menneske. Det kommer av ge'ez ተሠገወ, å bli kjøtt, å bli menneske.",
        am: "ሰው መሆን ማለት ነው፤ «ተሠገወ» (ሥጋ ሆነ፣ ሰው ሆነ) ከሚለው የግዕዝ ቃል የወጣ ነው።",
      },
    },
    {
      sporsmal: { no: "Hvorfor ble Gud menneske?", am: "አምላክ ለምን ሰው ሆነ?" },
      svar: {
        no: "For å frelse Adam og oss fra døden, slik han hadde lovet. Han ville betale gjelden for synden, lete etter det som var tapt, vise sin kjærlighet og overvinne djevelen (Gal 4,4; Hebr 2,14).",
        am: "ለአዳም በገባው ቃል ኪዳን መሠረት እኛን ከሞት ሊያድን፤ ለካሣ፣ የጠፋውን ሊፈልግ፣ ፍቅሩን ሊገልጥና የዲያብሎስን ሥራ ሊያፈርስ ሰው ሆነ (ገላ 4፥4፤ ዕብ 2፥14)።",
      },
    },
    {
      sporsmal: { no: "Hvor lenge ventet Adam på løftet?", am: "አዳም ተስፋውን ለምን ያህል ዘመን ጠበቀ?" },
      svar: {
        no: "I 5500 år. Kirkas lærere kaller det også fem og en halv dag.",
        am: "አምስት ሺህ አምስት መቶ ዘመን፤ ሊቃውንት «አምስት ቀን ተኩል» ይሉታል።",
      },
    },
    {
      sporsmal: { no: "Hva betyr ተዋሕዶ, og hvordan ble guddom og menneskelighet forent?", am: "ተዋሕዶ ምንድን ነው? መለኮትና ትስብእት እንዴት ተዋሐዱ?" },
      svar: {
        no: "At Kristus av to personer ble én person og av to naturer én natur. De ble forent uten forandring, uten sammenblanding, uten adskillelse og uten å deles.",
        am: "ከሁለት አካል አንድ አካል፣ ከሁለት ባሕርይ አንድ ባሕርይ መሆን ነው። ያለመለወጥ፣ ያለመቀላቀል፣ ያለመለያየት፣ ያለመነጣጠል ተዋሐዱ።",
      },
    },
    {
      sporsmal: { no: "Hvordan er glødende jern et bilde på ተዋሕዶ?", am: "የጋለ ብረት እንዴት የተዋሕዶ ምሳሌ ይሆናል?" },
      svar: {
        no: "Jernet slutter ikke å være jern, og ilden slutter ikke å være ild, men de blir ett glødende jern. Slik er guddommen og menneskeligheten forent i Kristus.",
        am: "ብረቱ ብረትነቱን፣ እሳቱም እሳትነቱን ሳይለቅ አንድ የጋለ ብረት ይሆናሉ፤ መለኮትና ትስብእትም በክርስቶስ እንዲሁ ተዋሐዱ።",
      },
    },
    {
      sporsmal: { no: "Hvorfor kaller vi Maria ወላዲተ አምላክ?", am: "እመቤታችንን «ወላዲተ አምላክ» የምንላት ለምንድን ነው?" },
      svar: {
        no: "Fordi den hun fødte, er Gud som ble menneske. Kirkemøtet i Efesos (431) fordømte Nestorius, som ikke ville kalle henne det.",
        am: "የወለደችው ሰው የሆነውን አምላክ ስለ ሆነ ነው። «ወላዲተ አምላክ አትባልም» ያለው ንስጥሮስ በ431 ዓ.ም. በኤፌሶን ጉባኤ ተወግዟል።",
      },
    },
    {
      sporsmal: { no: "Hvorfor godtar ikke kirka vår kirkemøtet i Khalkedon?", am: "ቤተ ክርስቲያናችን የኬልቄዶንን ጉባኤ ለምን አትቀበለውም?" },
      svar: {
        no: "Fordi det lærte at Kristus er i to naturer etter foreningen. Det deler Kristus i to. Vi tror at han er én person og én natur, uten sammenblanding og uten adskillelse.",
        am: "ከተዋሕዶ በኋላ «ሁለት ባሕርይ» ብሎ ክርስቶስን ለሁለት ስለሚከፍል ነው። እኛ ግን ያለመቀላቀልና ያለመለያየት አንድ አካል አንድ ባሕርይ ነው ብለን እናምናለን።",
      },
    },
    {
      sporsmal: { no: "Når feirer vi ብሥራት og ልደት?", am: "ብሥራትንና ልደትን መቼ እናከብራለን?" },
      svar: {
        no: "Unnfangelsen (ብሥራት/ጽንሰት) መጋቢት 29 (7. april) og fødselen (ልደት) ታኅሣሥ 29 (7. januar).",
        am: "ጽንሰቱን (ብሥራትን) መጋቢት 29፣ ልደቱን ታኅሣሥ 29።",
      },
    },
  ],
  kilder: [
    { navn: "አስተምህሮ ዘተዋሕዶ: ምስጢረ ሥጋዌ: ኢየሱስ ክርስቶስ በተዋሕዶ ሰው የሆነ አምላክ ነው!", url: "https://astemhro.com/2018/11/02/incarnation/" },
    { navn: "ማኅበረ ቅዱሳን (ዲያቆን ተስፋዬ ቻይ): ምሥጢረ ሥጋዌ", url: "https://eotcmk.org/a/%E1%88%9D%E1%88%A5%E1%8C%A2%E1%88%A8-%E1%88%A5%E1%8C%8B%E1%8B%8C/" },
    { navn: "ማኅበረ ቅዱሳን: ወርኃ መጋቢት", url: "https://eotcmk.org/a/%E1%8B%88%E1%88%AD%E1%8A%83-%E1%88%98%E1%8C%8B%E1%89%A2%E1%89%B5/" },
    { navn: "ማኅበረ ቅዱሳን (ቀሲስ ዶ/ር ምክረ ሥላሴ ገ/አማኑኤል): አውጣኪ፣ ቅዱስ ዲዮስቆሮስ እና የኬልቄዶን ጉባኤ", url: "https://eotcmk.org/a/%E1%8A%A0%E1%8B%8D%E1%8C%A3%E1%8A%AA%E1%8D%A3-%E1%89%85%E1%8B%B1%E1%88%B5-%E1%8B%B2%E1%8B%AE%E1%88%B5%E1%89%86%E1%88%AE%E1%88%B5-%E1%8A%A5%E1%8A%93-%E1%8B%A8%E1%8A%AC%E1%88%8D%E1%89%84%E1%8B%B6/" },
    { navn: "ኪዳነ ምሕረት ቤተ ክርስቲያን: ምሥጢረ ሥጋዌ", url: "https://kidanemihiret.org/sermons/%E1%88%9D%E1%88%A5%E1%8C%A2%E1%88%A8-%E1%88%A5%E1%8C%8B%E1%8B%8C/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Faith of the Church", url: "https://www.ethiopianorthodox.org/english/dogma/faith.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The issue between Monophysitism and Dyophysitism", url: "https://www.ethiopianorthodox.org/english/dogma/monodyo.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Religious Holidays and Calendar", url: "https://www.ethiopianorthodox.org/english/calendar.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "St. Mary's EOTC: Mystery of the Incarnation (Mestire Sgaye)", url: "https://www.ethiopianorthodoxchurch.org/mystery-of-the-incarnation-mestire-sgaye" },
  ],
  utkast: true,
};
