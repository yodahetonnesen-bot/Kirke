import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om Herrens høytider:
// Mahibere Kidusan (eotcmk.org): «የቤተ ክርስቲያን በዓላት አከባባር» (barn), «የምእመናን ድርሻ በቤተ ክርስቲያን» (de ni store og de
// små høytidene, ፍትሐ ነገሥት om ስግደት på høytider), «በዓለ ደብረ ታቦር» og «በዓለ ደብረ ታቦር እና ቡሄ», «ከተራ ምንድን ነው?»,
// «የጥምቀት በዓል», «በዓለ ጥምቀት» (ስንክሳር ጥር ፲፩), «ዝግጅት ለጥምቀት በዓል», «በዓለ ግዝረት», «የቃና ዘገሊላ ሰርግ», «ደመራ»,
// «በዓለ መስቀል», «‹‹የምሥራች እነግራችኋለውና አትፍሩ››» (jul, for barn), «ወርኃ ታኅሣሥ», «ወርኃ ጥር», «ወርኃ የካቲት», «ወርኃ መጋቢት»;
// ethiopianorthodox.org: «Calendar» (Aymero Wondmagegnehu og Joachim Motovu: kalenderen, ገና og 7. januar, de flyttbare dagene)
// og «Worship in the Ethiopian Orthodox Church» (de ni store og ni små høytidene, hvordan høytidene holdes);
// አስተምህሮ ዘተዋሕዶ (astemhro.com): «ልደተ ክርስቶስ: መድኅን ተወልዶላችኋል!» (med ቅዱስ ጎርጎርዮስ og ቅዱስ ኤፍሬም).
// Datoene er de samme som i lib/hoytider-data.ts.
// Usikkert: Den eldre engelske listen på ethiopianorthodox.org har ገና (julaften) som liten høytid i stedet for et av
//   korsene, og forklarer «Ledete Simon» som festen for kvinnen som salvet Jesu føtter i Simons hus. Her følges
//   Mahibere Kidusan: ልደተ ስምዖን er dagen da Simeon tok Jesusbarnet i armene i templet (የካቲት ፰).
// Usikkert: Datoene etter vår kalender (i parentes) gjelder de fleste år. Året etter at ጳጉሜን har hatt seks dager, kommer
//   de fleste festene én dag senere etter vår kalender; jula feires da ታኅሣሥ 28, så den likevel blir 7. januar.
// Usikkert: Fortellingen om barberkniven ved ግዝረት og om hyrdene ved ቡሄ er kirkas tradisjon (መዝገበ ታሪክ, መጽሐፈ ታሪክ
//   ወግስ), ikke tekst fra Bibelen. Det står slik på siden.
export const herrensHoytider: Tema = {
  slug: "herrens-hoytider",
  del: "hoytider",
  tittel: { no: "Herrens høytider", am: "በዓላተ እግዚእ" },
  undertittel: {
    no: "De ni store og de ni små høytidene – og hvordan vi feirer dem",
    am: "ዘጠኙ ዐበይትና ዘጠኙ ንዑሳን በዓላት እና አከባበራቸው",
  },
  bilde: "fodselen",
  ingress: {
    no:
      "Gjennom året feirer kirka de store tingene Gud har gjort for å frelse oss: at Jesus ble unnfanget og født, at han ble døpt, at han døde og sto opp, at han for opp til himmelen og sendte Den hellige ånd. Disse dagene kalles Herrens høytider. Kirka har ni store og ni små høytider for Herren.",
    am:
      "ቤተ ክርስቲያን በዓመቱ ውስጥ እግዚአብሔር እኛን ለማዳን ያደረገውን ታላቅ ሥራ ታከብራለች፤ ጌታችን መፀነሱን፣ መወለዱን፣ መጠመቁን፣ መሞቱንና መነሣቱን፣ ማረጉንና መንፈስ ቅዱስን መላኩን። እነዚህ ቀናት በዓላተ እግዚእ ይባላሉ። ቤተ ክርስቲያን ዘጠኝ ዐበይትና ዘጠኝ ንዑሳን የጌታ በዓላት አሏት።",
  },
  hovedvers: "Luke 2:10-11",
  avsnitt: [
    {
      id: "hvorfor",
      tittel: { no: "Hvorfor feirer vi høytider?", am: "በዓላትን ለምን እናከብራለን?" },
      punkter: [
        {
          tekst: {
            no: "Vi feirer for å huske det Gud har gjort for oss. På en høytid takker vi Gud, vi hører fortellingen fra Bibelen, og vi får velsignelse.",
            am: "በዓላትን የምናከብረው እግዚአብሔር ለእኛ ያደረገልንን ለማስታወስ ነው። በበዓል ቀን እግዚአብሔርን እናመሰግናለን፤ የመጽሐፍ ቅዱስን ታሪክ እንሰማለን፤ በረከትም እንቀበላለን።",
          },
          vers: ["Ps 118:24", "Ps 103:2"],
        },
        {
          tekst: {
            no: "Det er viktig å vite hvorfor vi feirer hver høytid. Når vi forstår hva dagen handler om, feirer vi den på riktig måte.",
            am: "እያንዳንዱ በዓል ለምን እንደሚከበር ማወቅ ያስፈልጋል። የበዓሉን ምክንያት ስንረዳ በሥርዓቱ እናከብረዋለን።",
          },
        },
        {
          tekst: {
            no: "En høytid er en gledesdag. Da bøyer vi oss ikke helt ned til jorda (ስግደት), og vi faster ikke til middag. Vi går i kirka til ማኅሌት og ቅዳሴ.",
            am: "በዓል የደስታ ቀን ነው። በበዓል አንሰግድም፤ እስከ ቀትርም አንጾምም። ወደ ቤተ ክርስቲያን ሄደን ማኅሌት እንቆማለን፤ ቅዳሴ እናስቀድሳለን።",
          },
          andre: [
            {
              no: "ፍትሐ ነገሥት: «På søndager og på de hellige festene for Herren, for Maria og for Mikael skal det ikke være ስግደት, for de er gledesdager.»",
              am: "ፍትሐ ነገሥት፦ «በሰንበትና በከበሩ በጌታ፣ በእመቤታችንና በሚካኤል በዓላት ስግደት አይሁን፤ እነዚህ የተድላ፣ የደስታ ዕለታት ናቸውና።»",
            },
          ],
        },
        {
          tekst: {
            no: "På en høytid hviler vi fra tungt arbeid. Det er en god dag å gi til de fattige, besøke de syke og bli venner igjen med dem vi har kranglet med.",
            am: "በበዓል ቀን ከከባድ ሥራ እናርፋለን። ለድሆች መመጽወት፣ የታመሙትን መጠየቅና የተጣሉትን ማስታረቅ በበዓል የሚደረግ መልካም ሥራ ነው።",
          },
          vers: ["Matt 25:35-36"],
        },
        {
          tekst: {
            no: "Høytidene til Herren deles i to: de ni store høytidene (ዐበይት በዓላት) og de ni små høytidene (ንዑሳን በዓላት). Alle handler om Jesus Kristus og frelsen han ga oss.",
            am: "የጌታ በዓላት ለሁለት ይከፈላሉ፤ ዘጠኙ ዐበይት በዓላትና ዘጠኙ ንዑሳን በዓላት። ሁሉም ስለ ጌታችን ኢየሱስ ክርስቶስና ስለ ሰጠን ድኅነት ናቸው።",
          },
        },
      ],
    },
    {
      id: "kalender",
      tittel: { no: "Kirkas kalender – og hvorfor jula er 7. januar", am: "የቤተ ክርስቲያን ዘመን አቈጣጠር፤ ልደት ለምን ጥር ፳፱ (ጃንዋሪ ፯) ሆነ?" },
      punkter: [
        {
          tekst: {
            no: "Kirka har sin egen kalender. Året har tolv måneder med 30 dager, og til slutt en liten trettende måned, ጳጉሜን, med fem dager (seks dager hvert fjerde år). Det nye året begynner med መስከረም 1 (11. september).",
            am: "ቤተ ክርስቲያን የራሷ ዘመን አቈጣጠር አላት። ዓመቱ እያንዳንዳቸው ሠላሳ ቀን ያላቸው ዐሥራ ሁለት ወራት አሉት፤ በመጨረሻም ዐምስት ቀን (በአራት ዓመት አንድ ጊዜ ስድስት ቀን) ያላት ጳጉሜን አለች። አዲሱ ዓመት በመስከረም ፩ ይጀምራል።",
          },
        },
        {
          tekst: {
            no: "Hvert fjerde år får navnet til en evangelist: Matteus, Markus, Lukas og Johannes. I Lukas-året har ጳጉሜን seks dager.",
            am: "ዓመታት በአራቱ ወንጌላውያን ስም ይጠራሉ፤ ዘመነ ማቴዎስ፣ ዘመነ ማርቆስ፣ ዘመነ ሉቃስና ዘመነ ዮሐንስ። በዘመነ ሉቃስ ጳጉሜን ስድስት ቀን ትሆናለች።",
          },
        },
        {
          tekst: {
            no: "Kirka feirer jula ታኅሣሥ 29 i sin kalender. I den kalenderen vi bruker i Norge, er det 7. januar. Det er den samme jula og den samme fortellingen – det er bare kalenderen som er annerledes. Mange andre ortodokse kirker feirer også jul 7. januar.",
            am: "ቤተ ክርስቲያን ልደትን በራሷ አቈጣጠር ታኅሣሥ ፳፱ ታከብራለች። ይህ ቀን በኖርዌይ በምንጠቀምበት አቈጣጠር ጃንዋሪ ፯ ነው። በዓሉም ታሪኩም አንድ ነው፤ የተለየው የዘመን አቈጣጠሩ ብቻ ነው። ብዙ ሌሎች የኦርቶዶክስ አብያተ ክርስቲያናትም ልደትን ጃንዋሪ ፯ ያከብራሉ።",
          },
        },
        {
          tekst: {
            no: "Kirka teller årene fra Jesu fødsel på sin egen måte. Derfor er årstallet vårt sju eller åtte år etter årstallet i Norge.",
            am: "ቤተ ክርስቲያን ዓመታትን ከክርስቶስ ልደት ጀምራ በራሷ ቀመር ትቈጥራለች። ስለዚህ የእኛ ዓመተ ምሕረት በኖርዌይ ካለው አቈጣጠር በሰባት ወይም በስምንት ዓመት ያንሳል።",
          },
        },
        {
          tekst: {
            no: "Noen høytider har fast dato, for eksempel jul og ጥምቀት. Andre flytter seg hvert år, fordi de følger påsken: ሆሳዕና, ስቅለት, ትንሣኤ, ዕርገት og ጰራቅሊጦስ. Kirka regner dem ut med ባሕረ ሐሳብ.",
            am: "አንዳንድ በዓላት እንደ ልደትና ጥምቀት ቋሚ ቀን አላቸው። ሌሎቹ ግን ትንሣኤን ተከትለው በየዓመቱ ይለዋወጣሉ፤ ሆሳዕና፣ ስቅለት፣ ትንሣኤ፣ ዕርገትና ጰራቅሊጦስ። ቤተ ክርስቲያን እነዚህን በባሕረ ሐሳብ ታወጣቸዋለች።",
          },
        },
      ],
    },
    {
      id: "ni-store",
      tittel: { no: "De ni store høytidene", am: "ዘጠኙ ዐበይት በዓላት" },
      ingress: {
        no: "De ni store høytidene følger Jesu liv fra han ble unnfanget til Den hellige ånd kom. Datoen etter vår kalender står i parentes.",
        am: "ዘጠኙ ዐበይት በዓላት ከጌታችን ፅንሰት ጀምሮ መንፈስ ቅዱስ እስከ ወረደበት ድረስ ያለውን የድኅነት ሥራ ይከተላሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "1. ብሥራት eller ትስብእት, bebudelsen, መጋቢት 29 (7. april): Engelen Gabriel sier til Maria at hun skal føde Guds Sønn. Guds Sønn blir unnfanget i henne.",
            am: "፩. ብሥራት (በዓለ ትስብእት) መጋቢት ፳፱፦ ቅዱስ ገብርኤል ለእመቤታችን የምሥራቹን ነገራት፤ አካላዊ ቃል በማኅፀኗ አደረ።",
          },
          vers: ["Luke 1:30-31", "Luke 1:38"],
        },
        {
          tekst: {
            no: "2. ልደት eller ገና, jul, ታኅሣሥ 29 (7. januar): Jesus blir født i Betlehem og lagt i en krybbe.",
            am: "፪. ልደት (ገና) ታኅሣሥ ፳፱፦ ጌታችን በቤተ ልሔም ተወልዶ በግርግም ተኛ።",
          },
          vers: ["Luke 2:6-7"],
        },
        {
          tekst: {
            no: "3. ጥምቀት, Jesu dåp, ጥር 11 (19. januar): Jesus blir døpt av Johannes i Jordan. Faderens røst høres, og Ånden kommer ned som en due.",
            am: "፫. ጥምቀት ጥር ፲፩፦ ጌታችን በዮርዳኖስ በዮሐንስ እጅ ተጠመቀ፤ የአብ ድምፅ ተሰማ፤ መንፈስ ቅዱስም በርግብ አምሳል ወረደ።",
          },
          vers: ["Matt 3:16-17"],
        },
        {
          tekst: {
            no: "4. ደብረ ታቦር, forklarelsen, ነሐሴ 13 (19. august): Jesus viser sin guddommelige herlighet på fjellet for Peter, Jakob og Johannes.",
            am: "፬. ደብረ ታቦር ነሐሴ ፲፫፦ ጌታችን ለጴጥሮስ፣ ለያዕቆብና ለዮሐንስ በተራራው ላይ ብርሃነ መለኮቱን ገለጠ።",
          },
          vers: ["Matt 17:1-2"],
        },
        {
          tekst: {
            no: "5. ሆሳዕና, palmesøndag, søndagen før påske: Jesus rir inn i Jerusalem på et esel, og folket roper «Hosianna!».",
            am: "፭. ሆሳዕና፦ ከትንሣኤ በፊት ያለው እሑድ ነው። ጌታችን በአህያ ተቀምጦ ወደ ኢየሩሳሌም ገባ፤ ሕዝቡም «ሆሣዕና» አሉ።",
          },
          vers: ["Matt 21:9"],
        },
        {
          tekst: {
            no: "6. ስቅለት, langfredag: Jesus blir korsfestet og dør for vår frelse.",
            am: "፮. ስቅለት፦ ጌታችን ስለ እኛ ድኅነት ተሰቀለ፤ ሞተም።",
          },
          vers: ["Luke 23:33", "John 19:30"],
        },
        {
          tekst: {
            no: "7. ትንሣኤ eller ፋሲካ, påske: Jesus står opp fra de døde den tredje dagen. Det er festenes fest.",
            am: "፯. ትንሣኤ (ፋሲካ)፦ ጌታችን በሦስተኛው ቀን ከሙታን ተነሣ። ይህ የበዓላት ሁሉ በዓል ነው።",
          },
          vers: ["Matt 28:5-6"],
        },
        {
          tekst: {
            no: "8. ዕርገት, Kristi himmelfart, alltid en torsdag, 40 dager etter påske: Jesus velsigner disiplene og blir tatt opp til himmelen.",
            am: "፰. ዕርገት፦ ሁልጊዜ ሐሙስ ነው፤ ከትንሣኤ በኋላ በአርባኛው ቀን። ጌታችን ደቀ መዛሙርቱን ባርኮ ወደ ሰማይ ዐረገ።",
          },
          vers: ["Acts 1:3", "Acts 1:9"],
        },
        {
          tekst: {
            no: "9. ጰራቅሊጦስ, pinse, alltid en søndag, 50 dager etter påske: Den hellige ånd kommer over apostlene som tunger av ild.",
            am: "፱. ጰራቅሊጦስ፦ ሁልጊዜ እሑድ ነው፤ ከትንሣኤ በኋላ በኀምሳኛው ቀን። መንፈስ ቅዱስ በእሳት ልሳን አምሳል በሐዋርያት ላይ ወረደ።",
          },
          vers: ["Acts 2:1-4"],
        },
      ],
    },
    {
      id: "ni-sma",
      tittel: { no: "De ni små høytidene", am: "ዘጠኙ ንዑሳን በዓላት" },
      punkter: [
        {
          tekst: {
            no: "1–3. ስብከት, ብርሃን og ኖላዊ: Tre søndager i ታኅሣሥ før jul. ስብከት minnes profetene som forkynte at Frelseren skulle komme. ብርሃን minner oss om at Kristus er lyset som kom til verden. ኖላዊ betyr «hyrde»: Kristus er den gode hyrden.",
            am: "፩–፫. ስብከት፣ ብርሃንና ኖላዊ፦ ከልደት በፊት በታኅሣሥ ያሉ ሦስት ሰንበታት ናቸው። በስብከት ነቢያት የመድኃኒትን መምጣት መስበካቸው ይታሰባል። በብርሃን ክርስቶስ ወደ ዓለም የመጣ ብርሃን መሆኑ ይታሰባል። ኖላዊ «እረኛ» ማለት ነው፤ ክርስቶስ ቸር እረኛ ነው።",
          },
          vers: ["Isa 9:6", "John 1:9", "John 10:11"],
        },
        {
          tekst: {
            no: "4. ግዝረት, ጥር 6 (14. januar): Åtte dager gammel blir Jesus omskåret og får navnet Jesus. Han holdt loven som Gud hadde gitt Abraham. Kirkas lærere forteller at barberkniven ble til vann i hånden til han som skulle omskjære ham.",
            am: "፬. ግዝረት ጥር ፮፦ ጌታችን በስምንተኛው ቀን ተገዘረ፤ ስሙም ኢየሱስ ተባለ። ለአብርሃም የተሰጠውን ሕግ ፈጸመ። መምህራን እንደሚያስተምሩት የገራዡ ምላጭ በእጁ ላይ ሳለ ውኃ ሆኖ ፈሰሰ።",
          },
          vers: ["Luke 2:21", "Gen 17:12"],
        },
        {
          tekst: {
            no: "5. ቃና ዘገሊላ, ጥር 12 (20. januar): Jesu første under i bryllupet i Kana, der vann ble til vin. Det skjedde egentlig senere, men kirkas lærere la festen dagen etter ጥምቀት for å feire «vannfesten sammen med vannfesten».",
            am: "፭. ቃና ዘገሊላ ጥር ፲፪፦ ጌታችን በቃና ሰርግ ውኃውን ወደ ወይን የለወጠበት የመጀመሪያው ተአምር። ተአምሩ የተፈጸመው በየካቲት ቢሆንም ሊቃውንት «የውኃውን በዓል ከውኃ በዓል ጋር» ብለው ከጥምቀት ማግሥት አደረጉት።",
          },
          vers: ["John 2:7-11"],
        },
        {
          tekst: {
            no: "6. ልደተ ስምዖን, የካቲት 8 (15. februar): 40 dager gammel blir Jesus båret inn i templet. Den gamle Simeon tar ham i armene og takker Gud.",
            am: "፮. ልደተ ስምዖን የካቲት ፰፦ ጌታችን በተወለደ በአርባ ቀኑ ወደ ቤተ መቅደስ ገባ። አረጋዊው ስምዖን ታቅፎት እግዚአብሔርን አመሰገነ።",
          },
          vers: ["Luke 2:22", "Luke 2:28-30"],
        },
        {
          tekst: {
            no: "7. ደብረ ዘይት, den femte søndagen i ዐቢይ ጾም: Jesus sitter på Oljeberget og lærer om sin andre komme.",
            am: "፯. ደብረ ዘይት፦ የዐቢይ ጾም አምስተኛው እሑድ ነው። ጌታችን በደብረ ዘይት ተቀምጦ ስለ ዳግም ምጽአቱ አስተማረ።",
          },
          vers: ["Matt 24:3", "Matt 24:30"],
        },
        {
          tekst: {
            no: "8. መስቀል, መስከረም 17 (27. september): Festen for Kristi kors, som dronning Eleni (Helena) fant.",
            am: "፰. መስቀል መስከረም ፲፯፦ ንግሥት ዕሌኒ ያገኘችው የጌታችን ቅዱስ መስቀል የሚከበርበት በዓል።",
          },
          vers: ["1Cor 1:18"],
        },
        {
          tekst: {
            no: "9. መጋቢት መስቀል, መጋቢት 10 (19. mars): Dagen da korset ble funnet etter lang graving. Fordi den dagen alltid faller i ዐቢይ ጾም, feirer vi korset med stor glede i መስከረም.",
            am: "፱. መጋቢት መስቀል መጋቢት ፲፦ ከረጅም ቁፋሮ በኋላ መስቀሉ የተገኘበት ቀን ነው። መጋቢት ፲ ሁልጊዜ በዐቢይ ጾም ስለሚውል በዓሉ በደስታ በመስከረም ይከበራል።",
          },
        },
      ],
    },
    {
      id: "jul",
      tittel: { no: "ልደት – jul", am: "በዓለ ልደት (ገና)" },
      ingress: {
        no: "Jula heter ልደት («fødsel») eller ገና. Den kalles også በዓለ ወልድ, Sønnens fest.",
        am: "የልደት በዓል ገና ወይም በዓለ ወልድ ተብሎም ይጠራል።",
      },
      punkter: [
        {
          tekst: {
            no: "Keiser Augustus ville telle alle i landet. Josef og Maria reiste fra Nasaret til Betlehem, Davids by. Der fødte Maria sin sønn, svøpte ham og la ham i en krybbe, for det var ikke plass til dem i herberget.",
            am: "አውግስጦስ ቄሳር ሕዝቡ ሁሉ እንዲቈጠር አዘዘ። ዮሴፍና እመቤታችን ከናዝሬት ወደ ዳዊት ከተማ ወደ ቤተ ልሔም ሄዱ። በዚያም ልጇን ወለደች፤ በጨርቅ ጠቅልላ በግርግም አስተኛችው፤ በእንግዶች ማረፊያ ቦታ አልነበራቸውምና።",
          },
          vers: ["Luke 2:1-7"],
        },
        {
          tekst: {
            no: "Engelen sa til hyrdene om natta: «Jeg forkynner dere en stor glede.» Mange engler lovet Gud: «Ære være Gud i det høyeste.» Hyrdene skyndte seg til Betlehem og fant barnet.",
            am: "መልአኩ በሌሊት መንጋቸውን ለሚጠብቁ እረኞች «ታላቅ ደስታ የምሥራች እነግራችኋለሁ» አላቸው። ብዙ መላእክትም «ክብር ለእግዚአብሔር በአርያም» እያሉ አመሰገኑ። እረኞቹም ፈጥነው ወደ ቤተ ልሔም ሄደው ሕፃኑን አገኙት።",
          },
          vers: ["Luke 2:10-14", "Luke 2:16"],
        },
        {
          tekst: {
            no: "Vismenn fra Østen fulgte stjerna, falt ned for barnet og ga ham gaver: gull fordi han er konge, røkelse fordi han er prest, og myrra for hans død. Derfor kalles jula også en gavedag.",
            am: "ሰብአ ሰገል በኮከብ ተመርተው መጡ፤ ለሕፃኑ ሰገዱለት፤ ወርቅን ለመንግሥቱ፣ ዕጣንን ለክህነቱ፣ ከርቤንም ለሞቱ ገበሩለት። ስለዚህ የልደት በዓል የስጦታ ቀን ይባላል።",
          },
          vers: ["Matt 2:1-2", "Matt 2:11"],
        },
        {
          tekst: {
            no: "Profetene hadde sagt det på forhånd: en jomfru skal føde en sønn, og han skal kalles Immanuel – «Gud med oss». Han skulle komme fra Betlehem.",
            am: "ነቢያት አስቀድመው ተናግረው ነበር፤ ድንግል ትፀንሳለች ወንድ ልጅም ትወልዳለች፤ ስሙም አማኑኤል ይባላል፤ ትርጓሜውም «እግዚአብሔር ከእኛ ጋር» ነው። ከቤተ ልሔምም እንደሚወጣ ተነግሮ ነበር።",
          },
          vers: ["Isa 7:14", "Mic 5:2"],
        },
        {
          tekst: {
            no: "Før jul faster vi ጾመ ነቢያት. Dagen før jul, ታኅሣሥ 28, heter ጌና. Jule-ቅዳሴ holdes tidlig om morgenen, før det blir lyst. Faller jula på en onsdag eller fredag, faster vi ikke den dagen.",
            am: "ከልደት በፊት ጾመ ነቢያትን እንጾማለን። የልደት ዋዜማ ታኅሣሥ ፳፰ ጌና ይባላል። የልደት ቅዳሴ ሳይነጋ በሌሊት ይቀደሳል። ልደት ረቡዕ ወይም ዓርብ ቢውል አይጾምም።",
          },
        },
        {
          tekst: {
            no: "Ordet ገና er også navnet på et julespill som gutter og menn spiller med kølle og ball.",
            am: "«ገና» በልደት ሰሞን ወንዶች ልጆችና ወጣቶች የሚጫወቱት የዱላና የኳስ ጨዋታ ስምም ነው።",
          },
        },
      ],
    },
    {
      id: "timket",
      tittel: { no: "ከተራ og ጥምቀት – Jesu dåp", am: "ከተራና ጥምቀት" },
      ingress: {
        no: "ጥምቀት og መስቀል er de to store festene som kirka feirer ute, under åpen himmel (የአደባባይ በዓላት).",
        am: "ጥምቀትና መስቀል በአደባባይ የሚከበሩ ሁለቱ በዓላት ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "Jesus kom fra Galilea til Jordan for å bli døpt av Johannes. Da han steg opp av vannet, åpnet himmelen seg. Ånden kom ned som en due, og Faderen sa: «Dette er min Sønn, den elskede.» Slik ble Den hellige treenighet åpenbart.",
            am: "ጌታችን በዮሐንስ ለመጠመቅ ከገሊላ ወደ ዮርዳኖስ መጣ። ከውኃ በወጣ ጊዜ ሰማይ ተከፈተ፤ መንፈስ ቅዱስ በርግብ አምሳል ወረደ፤ አብም «የምወደው ልጄ ይህ ነው» አለ። በዚህም የሥላሴ ምሥጢር ተገለጠ።",
          },
          vers: ["Matt 3:13", "Matt 3:16-17"],
        },
        {
          tekst: {
            no: "ጥምቀት kalles også ኤጲፋንያ, et gresk ord som betyr at Gud ble åpenbart. I tretti år hadde Jesus ikke vist seg for Israel. Nå sa Johannes: «Se, Guds lam, som bærer bort verdens synd!»",
            am: "ይህች ዕለት በግሪክ ቋንቋ ኤጲፋንያ ትባላለች፤ «መለኮት የተገለጠበት» ማለት ነው። ጌታችን ሠላሳ ዓመት ያህል ራሱን አልገለጠም ነበር። ዮሐንስም «እነሆ የዓለምን ኃጢአት የሚያስወግድ የእግዚአብሔር በግ» ብሎ መሰከረ።",
          },
          vers: ["John 1:29", "John 1:31"],
        },
        {
          tekst: {
            no: "ከተራ er kvelden før, ጥር 10 (18. januar). Ordet betyr å demme opp vann. Folk demmer opp en bekk eller lager et basseng, slik at det er vann til velsignelsen neste dag. Stedet kalles ጥምቀተ ባሕር.",
            am: "ከተራ የጥምቀት ዋዜማ ጥር ፲ ነው። ቃሉ «ከተረ» ከሚለው የግእዝ ግሥ የወጣ ሲሆን ውኃ መከተር፣ መገደብ ማለት ነው። ለማግሥቱ መጠመቂያ እንዲሆን ውኃው ይከተራል። ቦታው ጥምቀተ ባሕር ይባላል።",
          },
        },
        {
          tekst: {
            no: "På ከተራ bæres ታቦታት ut av kirkene i prosesjon, med prester, diakoner med kors, sang og jubel. Hvert ታቦት er dekket med et klede. Ved vannet setter de seg i et telt, og prestene synger ማኅሌት hele natta. Midt på natta holdes ቅዳሴ.",
            am: "በከተራ ታቦታት ከየአብያተ ክርስቲያናቱ ወጥተው በካህናት፣ መስቀል በያዙ ዲያቆናት፣ በዝማሬና በእልልታ ታጅበው ወደ ጥምቀተ ባሕር ይወርዳሉ። በተዘጋጀላቸው ድንኳን ያርፋሉ፤ ካህናቱም ሌሊቱን በማኅሌት ያድራሉ። በመንፈቀ ሌሊትም ቅዳሴ ይቀደሳል።",
          },
        },
        {
          tekst: {
            no: "Alt har en mening: ታቦቱ er et bilde på Jesus. Presten som bærer det, er et bilde på Johannes døperen. Vannet er Jordan-elva. Vi som følger etter, er som folket som kom til Johannes. At ታቦታት går ned til vannet om kvelden, minner oss om at Jesus gikk fra Galilea til Jordan.",
            am: "ሁሉም ምሳሌ አለው፤ ታቦቱ የጌታችን፣ ታቦቱን የሚሸከመው ካህን የቅዱስ ዮሐንስ፣ ጥምቀተ ባሕሩ የዮርዳኖስ ወንዝ፣ ታቦቱን አጅበው የሚሄዱት ምእመናን ወደ ዮሐንስ የመጡ ሰዎች ምሳሌ ናቸው። ታቦታቱ ከማታ ጀምሮ ወደ ውኃው መውረዳቸው ጌታችን ከገሊላ ወደ ዮርዳኖስ መውረዱን ያጠይቃል።",
          },
          vers: ["Mark 1:5", "Mark 1:9"],
        },
        {
          tekst: {
            no: "Det er også et bilde fra Det gamle testamente: Da prestene bar paktens ark ut i Jordan, delte vannet seg, og folket gikk over til det lovede landet.",
            am: "ይህ ከብሉይ ኪዳንም ምሳሌ አለው፤ ካህናቱ የቃል ኪዳኑን ታቦት ተሸክመው ዮርዳኖስን በረገጡ ጊዜ ውኃው ቆመ፤ ሕዝቡም ወደ ተስፋው ምድር ተሻገሩ።",
          },
          vers: ["Josh 3:15-17"],
        },
        {
          tekst: {
            no: "Om morgenen på ጥምቀት blir vannet velsignet. Et kors med fire tente lys senkes i vannet – et bilde på lyset som kom da Jesus ble døpt. Så blir folket stenket med det velsignede vannet (ጠበል). Vi blir ikke døpt på nytt; vi har bare én dåp. Vi minnes Jesu dåp og vår egen dåp, og tar imot velsignelse.",
            am: "በጥምቀት ዕለት ጠዋት ባሕረ ጥምቀቱ ይባረካል። አራት የሚበሩ ጧፎች የታሰሩበት መስቀል ወደ ውኃው ይለቀቃል፤ ይህም ጌታችን ሲጠመቅ ብርሃን የመውረዱ ምሳሌ ነው። ከዚያም ሕዝቡ በረከት ለመቀበል ጠበሉን ይረጫል። ዳግመኛ አንጠመቅም፤ ጥምቀት አንዲት ናት። የጌታችንን ጥምቀትና የራሳችንን ጥምቀት እያሰብን በረከት እንቀበላለን።",
          },
          vers: ["Eph 4:5"],
        },
        {
          tekst: {
            no: "Etterpå går ታቦታት tilbake til kirkene med sang, jubel og dans. Det er et bilde på at Jesus gikk ut i ørkenen etter dåpen. Feiringen varer fra ከተራ til ቃና ዘገሊላ.",
            am: "ከዚያም ታቦታቱ በዝማሬ፣ በእልልታና በሽብሸባ ታጅበው ወደ መንበረ ክብራቸው ይመለሳሉ። ይህም ጌታችን ከተጠመቀ በኋላ ወደ ገዳመ ቆሮንቶስ መሄዱን ያጠይቃል። በዓሉ ከከተራ ጀምሮ እስከ ቃና ዘገሊላ ይከበራል።",
          },
          vers: ["Matt 4:1"],
        },
        {
          tekst: {
            no: "Kirka har feiret ጥምቀት ved vannet i mange hundre år. Kong Lalibela bestemte at kirkene i et område skulle feire sammen ved ett vann. Keiser Zara Yaqob bestemte at ታቦታት skulle gå ned ጥር 10 og bli der natta over.",
            am: "ጥምቀት በውኃ ዳር መከበር ከጀመረ ብዙ መቶ ዓመታት ሆኖታል። ቅዱስ ላሊበላ በአንድ ቦታ ያሉ አብያተ ክርስቲያናት በአንድ ጥምቀተ ባሕር በአንድ ላይ እንዲያከብሩ አደረገ። ዐፄ ዘርዐ ያዕቆብም ታቦታቱ ጥር ፲ ወርደው በዚያ እንዲያድሩ በዐዋጅ ወሰኑ።",
          },
        },
        {
          tekst: {
            no: "Vi feirer med glede, men på en hellig måte. Kirka advarer mot fyll og uanstendig oppførsel på festen. Barn skal holde seg sammen med foreldre eller eldre søsken i den store folkemengden.",
            am: "በዓሉን በደስታ ግን በሥርዓት እናከብራለን። ቤተ ክርስቲያን በበዓሉ ስካርንና ዝሙትን የሚቀሰቅስ ድርጊትን ትከለክላለች። ልጆች በሕዝቡ ብዛት እንዳይጠፉ ከወላጆቻቸው ወይም ከታላላቆቻቸው መለየት የለባቸውም።",
          },
          vers: ["Gal 5:25", "1Pet 4:3"],
        },
      ],
    },
    {
      id: "debre-tabor",
      tittel: { no: "ደብረ ታቦር og ቡሄ", am: "ደብረ ታቦርና ቡሄ" },
      punkter: [
        {
          tekst: {
            no: "Seks dager etter at Peter hadde sagt «Du er Messias, den levende Guds Sønn», tok Jesus med seg Peter, Jakob og Johannes opp på et høyt fjell. Der skinte ansiktet hans som sola, og klærne ble hvite som lyset. Moses og Elia viste seg og talte med ham.",
            am: "ቅዱስ ጴጥሮስ «አንተ ክርስቶስ የሕያው እግዚአብሔር ልጅ ነህ» ብሎ ከመሰከረ ከስድስት ቀን በኋላ ጌታችን ጴጥሮስን፣ ያዕቆብንና ዮሐንስን ይዞ ወደ ረጅም ተራራ ወጣ። ፊቱ እንደ ፀሐይ በራ፤ ልብሱም እንደ ብርሃን ነጭ ሆነ። ሙሴና ኤልያስም ተገልጠው ከእርሱ ጋር ተነጋገሩ።",
          },
          vers: ["Matt 16:16", "Matt 17:1-3"],
        },
        {
          tekst: {
            no: "En lysende sky kom over dem, og en røst fra skyen sa: «Dette er min Sønn, den elskede. Hør ham!» Disiplene falt ned på ansiktet og ble svært redde. Peter skrev senere at han selv hørte røsten på det hellige fjellet.",
            am: "ብሩህ ደመና ጋረዳቸው፤ ከደመናውም «የምወደው ልጄ ይህ ነው፤ እርሱን ስሙት» የሚል ድምፅ መጣ። ደቀ መዛሙርቱም በግምባራቸው ወድቀው እጅግ ፈሩ። ቅዱስ ጴጥሮስም ይህን ድምፅ በቅዱሱ ተራራ እንደ ሰማ ኋላ ጻፈ።",
          },
          vers: ["Matt 17:5-6", "2Pet 1:17-18"],
        },
        {
          tekst: {
            no: "På Tabor ble det vist at Jesus er fullkommen Gud og fullkommen menneske. Kong David hadde sunget at Tabor skal juble i Guds navn.",
            am: "በደብረ ታቦር የጌታችን ፍጹም አምላክ ፍጹም ሰው መሆኑ በግልጽ ታየ። ቅዱስ ዳዊት «ታቦርና አርሞንዔም በስምህ ደስ ይላቸዋል» ብሎ አስቀድሞ ተናግሮ ነበር።",
          },
          vers: ["Ps 89:13"],
        },
        {
          tekst: {
            no: "Festen kalles også ቡሄ. Ordet betyr «skallet, åpen og lys». Rundt denne dagen går regntida mot slutten, skyene forsvinner, og himmelen blir lys. Derfor er det lysets fest.",
            am: "በዓሉ «ቡሄ» ተብሎም ይጠራል። ቡሄ «መላጣ፣ ገላጣ» ማለት ነው። በዚህ በዓል አካባቢ ክረምቱ፣ ጭጋጉና ደመናው ተወግዶ ብርሃን ይታያል፤ ስለዚህ የብርሃን በዓል ይባላል።",
          },
        },
        {
          tekst: {
            no: "Kvelden før, ነሐሴ 12, går barna fra hus til hus og synger «ቡሄ በሉ». Mødrene har bakt brød, og barna får et rundt brød (ሙልሙል). Mange steder tenner folk fakler (ችቦ) som et bilde på lyset på Tabor. Barna smeller med pisk (ጅራፍ); lyden minner om røsten fra himmelen som gjorde disiplene redde.",
            am: "በዋዜማው ነሐሴ ፲፪ ልጆች በየቤቱ እየዞሩ «ቡሄ በሉ» እያሉ ይዘምራሉ። እናቶች ያዘጋጁትን ሙልሙል ዳቦ ይሰጧቸዋል። በብዙ ቦታ ችቦ ይበራል፤ ይህም በደብረ ታቦር ለታየው ብርሃነ መለኮት ምሳሌ ነው። ልጆች ጅራፍ ያጮኻሉ፤ የጅራፉ መጮኽ ደቀ መዛሙርቱን ያስደነገጠው የድምፀ መለኮት ምሳሌ ነው።",
          },
        },
        {
          tekst: {
            no: "Kirkas tradisjon forteller at gjeterguttene ble ute lenge den dagen fordi de undret seg over lyset. Foreldrene gikk ut med fakler og brød for å lete etter dem. Derfor gir vi brød og tenner fakler.",
            am: "ጌታችን ብርሃነ መለኮቱን በገለጠበት ዕለት እረኞች ከብርሃኑ የተነሣ እየተደነቁ ወደ ቤት አልተመለሱም ነበር። ወላጆቻቸውም ችቦ አብርተውና ዳቦ ይዘው ሊፈልጓቸው ወጡ። ለዚህ ነው ዳቦ የሚሰጠውና ችቦ የሚበራው።",
          },
        },
        {
          tekst: {
            no: "Kirka ber barna synge åndelige sanger på ቡሄ, ikke verdslige sanger, og gjerne gi noe av brødet og pengene de får til de fattige og til kirka.",
            am: "ቤተ ክርስቲያን ልጆች በቡሄ ዓለማዊ ዘፈን ሳይሆን መንፈሳዊ መዝሙር እንዲዘምሩ፣ የሚያገኙትንም ዳቦና ገንዘብ ለነዳያንና ለቤተ ክርስቲያን እንዲሰጡ ታበረታታለች።",
          },
        },
      ],
    },
    {
      id: "meskel",
      tittel: { no: "ደመራ og መስቀል – korsfesten", am: "ደመራና መስቀል" },
      punkter: [
        {
          tekst: {
            no: "Etter at Jesus sto opp, ble syke helbredet når de rørte ved korset hans. Noen av dem som ikke trodde, ble misunnelige og gravde korset ned der folk kastet søppel. I rundt 300 år var det skjult under en haug.",
            am: "ጌታችን ከተነሣ በኋላ ሕሙማን መስቀሉን እየዳሰሱ ይፈወሱ ነበር። ይህን ያዩ አይሁድ በምቀኝነት መስቀሉን ቆሻሻ በሚጣልበት ቦታ ቀበሩት። ለሦስት መቶ ዓመታት ያህል ተዳፍኖ ቆየ።",
          },
        },
        {
          tekst: {
            no: "Dronning Eleni (Helena), mor til keiser Konstantin, reiste til Jerusalem for å finne korset. En gammel mann som het Kirakos, viste henne området. Hun lot samle et stort bål (ደመራ), la røkelse på og tente det. Røyken steg opp og bøyde seg mot stedet der korset lå.",
            am: "የታላቁ ንጉሥ የቈስጠንጢኖስ እናት ንግሥት ዕሌኒ መስቀሉን ለማውጣት ወደ ኢየሩሳሌም ሄደች። ኪራኮስ የሚባል አረጋዊ ቦታውን ጠቈማት። ደመራ አስደምራ ዕጣን ጨምራ ለኮሰች፤ የዕጣኑ ጢስም ወደ ላይ ወጥቶ መስቀሉ የተቀበረበትን ቦታ አመለከታት።",
          },
        },
        {
          tekst: {
            no: "Hun begynte å grave መስከረም 17, og መጋቢት 10 fant hun tre kors. Da de la en død mann på Jesu kors, ble han levende. Slik visste de hvilket kors som var Herrens.",
            am: "ቁፋሮውን መስከረም ፲፯ ጀምራ መጋቢት ፲ ሦስት መስቀሎችን አገኘች። የሞተ ሰው በጌታችን መስቀል ላይ ሲያደርጉት ተነሣ፤ በዚህም የጌታችን መስቀል ተለይቶ ታወቀ።",
          },
        },
        {
          tekst: {
            no: "Kvelden før መስቀል, መስከረም 16 (26. september), samles vi rundt ደመራ. Prestene ber og synger, og bålet tennes. Vi gjør det for å følge dronning Elenis eksempel. Ordet ደመራ kommer fra ge'ez ደመረ, «å legge sammen». Mange vedkubber blir ett bål – slik samler korset oss til fred og enhet.",
            am: "በመስቀል ዋዜማ መስከረም ፲፮ ደመራ ይደመራል፤ በጸሎትና በዝማሬ ይለኮሳል። ይህን የምናደርገው ቅድስት ዕሌኒን አብነት አድርገን ነው። «ደመራ» ከግእዝ ግሥ «ደመረ» የወጣ ሲሆን መጨመር፣ አንድ ማድረግ ማለት ነው፤ ክርስቶስ በመስቀሉ ሰላምን፣ ፍቅርንና አንድነትን መስበኩን ያስረዳል።",
          },
          vers: ["Eph 2:16"],
        },
        {
          tekst: {
            no: "Korset er ikke en skam for oss, men Guds kraft. Paulus sa at han ikke ville skryte av noe annet enn Jesu Kristi kors.",
            am: "መስቀል ለእኛ የእግዚአብሔር ኃይል ነው። ቅዱስ ጳውሎስ ከጌታችን ከኢየሱስ ክርስቶስ መስቀል በቀር ሌላ ትምክህት ከእኔ ይራቅ አለ።",
          },
          vers: ["1Cor 1:18", "Gal 6:14"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Gregor av Nyssa", am: "ቅዱስ ጎርጎርዮስ ዘኑሲስ" },
      tekst: {
        no: "Vi kan ikke granske til bunns hvordan Gud ble menneske. Derfor skal vi lære av lærerne som Ordet selv har talt om.",
        am: "«ለእኛም በሥጋ መገለጡን እንደሚገባው መርምረን ልናውቀው አይቻለንም፤ … ቃል ስለ እነርሱ ከተናገረላቸው ከመምህራን እንማር ዘንድ ያሻናል።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ጎርጎርዮስ 35:10 (sitert i astemhro.com: ልደተ ክርስቶስ: መድኅን ተወልዶላችኋል!)",
    },
    {
      navn: { no: "Den hellige Efrem syreren", am: "ቅዱስ ኤፍሬም" },
      tekst: {
        no: "«Kom og se dette under! Han som bor hos de hellige, ble menneske av en jomfru for å frelse oss. Den evige fikk en tid, den usynlige ble sett, den levende Guds Sønn ble virkelig menneske.»",
        am: "«ኑ ይህን ድንቅ እዩ … ሰው የማይሆን ሰው ሆኗልና፣ ቃል ተዋሕዷልና … ዘመን የማይቆጠርለት መለኮት ዘመን ተቆጠረለት፣ የማይታወቅ ተገለጠ፣ የማይታይ ታየ፣ የሕያው የእግዚአብሔር ልጅ በእርግጥ ሰው ሆነ።»",
      },
      kilde: "ውዳሴ ማርያም ዘረቡዕ (sitert i astemhro.com: ልደተ ክርስቶስ: መድኅን ተወልዶላችኋል!)",
    },
    {
      navn: { no: "Den hellige Jared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "I hymneboka si synger Jared om korsfesten: Røyken fra røkelsen bøyde seg mot Golgata, og i dag ble korsets tre, som jødene hadde gravd ned, funnet.",
        am: "«ዘእጣን አንጸረ ሰገደ ጢስ በጎልጎታ ዘቀበሩ አይሁድ ዮም ተረክበ ዕፀ መስቀል» – የዕጣኑ ጢስ ወደ ጎልጎታ ሰገደ፤ አይሁድ የቀበሩት ዕፀ መስቀል ዛሬ ተገኘ።",
      },
      kilde: "ድጓ, ዘመስቀል (sitert i Mahibere Kidusan: በዓለ መስቀል, eotcmk.org)",
    },
  ],
  ord: [
    { ord: "በዓል / በዓላት", forklaring: { no: "høytid / høytider", am: "የደስታና የምስጋና ቀን" } },
    { ord: "ዐበይት በዓላት", forklaring: { no: "de store høytidene", am: "ታላላቅ በዓላት" } },
    { ord: "ንዑሳን በዓላት", forklaring: { no: "de små høytidene", am: "ትናንሽ በዓላት" } },
    { ord: "ዋዜማ", forklaring: { no: "kvelden før en høytid, med bønn og sang", am: "የበዓል መቀበያ ምሽት" } },
    { ord: "ልደት / ገና", forklaring: { no: "jul, Jesu fødsel", am: "የጌታችን የልደት በዓል" } },
    { ord: "ጌና", forklaring: { no: "dagen før jul (ታኅሣሥ 28)", am: "የልደት ዋዜማ" } },
    { ord: "ከተራ", forklaring: { no: "kvelden før ጥምቀት; «å demme opp vann»", am: "የጥምቀት ዋዜማ፤ ውኃ መከተር" } },
    { ord: "ጥምቀተ ባሕር", forklaring: { no: "stedet ved vannet der ታቦታት er natta over ጥምቀት", am: "ታቦታት የሚያድሩበት የውኃ ቦታ" } },
    { ord: "ጠበል", forklaring: { no: "velsignet vann", am: "የተባረከ ውኃ" } },
    { ord: "ቡሄ", forklaring: { no: "ደብረ ታቦር; «lys, åpen» – også brødet barna får", am: "መላጣ፣ ገላጣ፤ የደብረ ታቦር በዓል" } },
    { ord: "ደመራ", forklaring: { no: "bålet kvelden før መስቀል; «å legge sammen»", am: "በመስቀል ዋዜማ የሚለኮስ የእንጨት ክምር" } },
    { ord: "የአደባባይ በዓል", forklaring: { no: "fest som feires ute blant folk (ጥምቀት og መስቀል)", am: "በአደባባይ የሚከበር በዓል" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Nevn de ni store høytidene for Herren.", am: "ዘጠኙን ዐበይት የጌታ በዓላት ጥቀስ።" },
      svar: {
        no: "ብሥራት, ልደት, ጥምቀት, ደብረ ታቦር, ሆሳዕና, ስቅለት, ትንሣኤ, ዕርገት og ጰራቅሊጦስ.",
        am: "ብሥራት፣ ልደት፣ ጥምቀት፣ ደብረ ታቦር፣ ሆሳዕና፣ ስቅለት፣ ትንሣኤ፣ ዕርገትና ጰራቅሊጦስ።",
      },
    },
    {
      sporsmal: { no: "Hvorfor feirer vi jul 7. januar?", am: "ልደትን ለምን ጃንዋሪ ፯ እናከብራለን?" },
      svar: {
        no: "Kirka feirer jula ታኅሣሥ 29 i sin egen kalender. I den norske kalenderen er det 7. januar. Det er samme jul – bare kalenderen er annerledes.",
        am: "ቤተ ክርስቲያን ልደትን በራሷ አቈጣጠር ታኅሣሥ ፳፱ ታከብራለች፤ ይህ ቀን በኖርዌይ አቈጣጠር ጃንዋሪ ፯ ነው። በዓሉ አንድ ነው፤ የተለየው አቈጣጠሩ ብቻ ነው።",
      },
    },
    {
      sporsmal: { no: "Hva er ታቦቱ, presten og vannet et bilde på ved ጥምቀት?", am: "በጥምቀት ታቦቱ፣ ካህኑና ውኃው የምን ምሳሌ ናቸው?" },
      svar: {
        no: "ታቦቱ er et bilde på Jesus, presten som bærer det på Johannes døperen, og vannet på Jordan-elva.",
        am: "ታቦቱ የጌታችን፣ የሚሸከመው ካህን የቅዱስ ዮሐንስ፣ ውኃው የዮርዳኖስ ወንዝ ምሳሌ ነው።",
      },
    },
    {
      sporsmal: { no: "Hva betyr ቡሄ, og hvorfor tenner vi fakler?", am: "ቡሄ ማለት ምን ማለት ነው? ችቦ ለምን ይበራል?" },
      svar: {
        no: "ቡሄ betyr «lys, åpen»: skyene forsvinner og himmelen blir lys. Faklene er et bilde på lyset som strålte fra Jesus på Tabor.",
        am: "ቡሄ «መላጣ፣ ገላጣ» ማለት ነው፤ ደመናው ተወግዶ ብርሃን ይታያል። ችቦው በደብረ ታቦር ለታየው ብርሃነ መለኮት ምሳሌ ነው።",
      },
    },
    {
      sporsmal: { no: "Hvorfor tenner vi ደመራ?", am: "ደመራ ለምን እንደምራለን?" },
      svar: {
        no: "For å minnes dronning Eleni. Røyken fra hennes bål viste henne hvor Kristi kors var gravd ned.",
        am: "ንግሥት ዕሌኒን ለማሰብ ነው። የደመራዋ ዕጣን ጢስ መስቀሉ የተቀበረበትን ቦታ አመለከታት።",
      },
    },
    {
      sporsmal: { no: "Hvorfor feires ቃና ዘገሊላ dagen etter ጥምቀት?", am: "ቃና ዘገሊላ ለምን ከጥምቀት ማግሥት ይከበራል?" },
      svar: {
        no: "Kirkas lærere la den der for å feire «vannfesten sammen med vannfesten»: I Kana ble vann til vin.",
        am: "ሊቃውንት «የውኃውን በዓል ከውኃ በዓል ጋር» ብለው ከጥምቀት ማግሥት አደረጉት፤ በቃና ውኃው ወደ ወይን ተለውጧልና።",
      },
    },
  ],
  kilder: [
    { navn: "ማኅበረ ቅዱሳን (for barn): የቤተ ክርስቲያን በዓላት አከባባር", url: "https://eotcmk.org/a/የቤተ-ክርስቲያን-በዓላት-አከባባር/" },
    { navn: "ማኅበረ ቅዱሳን: የምእመናን ድርሻ በቤተ ክርስቲያን (om høytidene)", url: "https://eotcmk.org/a/የምእመናን-ድርሻ-በቤተ-ክርስቲያን-6/" },
    { navn: "ማኅበረ ቅዱሳን (for barn): ‹‹የምሥራች እነግራችኋለውና አትፍሩ›› (jul)", url: "https://eotcmk.org/a/የምሥራች-እነግራችኋለውና-አትፍሩ/" },
    { navn: "ማኅበረ ቅዱሳን: ከተራ ምንድን ነው?", url: "https://eotcmk.org/a/%e1%8a%a8%e1%89%b0%e1%88%ab-%e1%88%9d%e1%8a%95%e1%8b%b5%e1%8a%95-%e1%8a%90%e1%8b%8d/" },
    { navn: "ማኅበረ ቅዱሳን: የጥምቀት በዓል", url: "https://eotcmk.org/a/የጥምቀት-በዓል/" },
    { navn: "ማኅበረ ቅዱሳን: በዓለ ጥምቀት (ስንክሳር ጥር ፲፩)", url: "https://eotcmk.org/a/በዓለ-ጥምቀት-3/" },
    { navn: "ማኅበረ ቅዱሳን: በዓለ ግዝረት", url: "https://eotcmk.org/a/በዓለ-ግዝረት-4/" },
    { navn: "ማኅበረ ቅዱሳን: የቃና ዘገሊላ ሰርግ", url: "https://eotcmk.org/a/የቃና-ዘገሊላ-ሰርግ/" },
    { navn: "ማኅበረ ቅዱሳን: በዓለ ደብረ ታቦር እና ቡሄ", url: "https://eotcmk.org/a/በዓለ-ደብረ-ታቦር-እና-ቡሄ/" },
    { navn: "ማኅበረ ቅዱሳን: በዓለ ደብረ ታቦር", url: "https://eotcmk.org/a/በዓለ-ደብረ-ታቦር-4/" },
    { navn: "ማኅበረ ቅዱሳን: ደመራ", url: "https://eotcmk.org/a/ደመራ/" },
    { navn: "ማኅበረ ቅዱሳን: በዓለ መስቀል", url: "https://eotcmk.org/a/በዓለ-መስቀል/" },
    { navn: "ማኅበረ ቅዱሳን: ወርኃ ታኅሣሥ, ወርኃ ጥር, ወርኃ የካቲት, ወርኃ መጋቢት (årets fester)", url: "https://eotcmk.org/a/ወርኃ-ታኅሣሥ/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Calendar", url: "https://www.ethiopianorthodox.org/english/calendar.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ልደተ ክርስቶስ: መድኅን ተወልዶላችኋል!", url: "https://astemhro.com/2019/01/06/lidet/" },
  ],
  utkast: true,
};
