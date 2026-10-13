import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om påskeuka og påsken:
// Mahibere Kidusan (eotcmk.org): «ሆሳዕና», «ሆሣዕና በአርያም» (vigilien, prosesjonen, ቅዳሴ og ፍትሐት på ሆሳዕና),
// «ሰሙነ ሕማማት» (to artikler: navnene på dagene, ሕፅበተ እግር, ቅዳሴ på torsdag), «ሰሙነ ሕማማት (ከዕለተ ሰኑይ እስከ ቀዳሚት ሰንበት)»,
// «ሰሙነ ሕመማት» (for barn: det som ikke gjøres i uka, ጉልባን, ጥብጠባ), «የጌታችን ኢየሱስ ክርስቶስ ሞት (ሰሙነ ሕማማት)»
// (med ቅዳሴ ዘአትናቴዎስ), «ጸሎተ ሐሙስ» (med አባ ጊዮርጊስ ዘጋሥጫ), «ቀዳም ሥዑር», «የትንሣኤ በዓል ትርጕሙና አከባበሩ»,
// «ነገረ ትንሣኤ» (for barn: påskehilsenen), «“እግዚአብሔር በመለከት ድምፅ ዐረገ”» (ዕርገት, med ዮሐንስ አፈወርቅ),
// «በዓለ ጰራቅሊጦስ» (med ዲድስቅልያ), og meldingene fra Den hellige synoden om ርክበ ካህናት (ግንቦት 2018);
// ethiopianorthodox.org: «Calendar» (Lent and Holy Week: torsdag, langfredag, påskeaften, påske, datogrensene) og
// «Worship in the Ethiopian Orthodox Church» (tidene for ቅዳሴ, trommen i fastetiden, ስግደት på langfredag, påskemåltidet).
// Usikkert: ethiopianorthodox.org sier at påske-ቅዳሴ er ca. kl. 1 om natta og at fasten brytes rundt kl. 3. Mahibere Kidusan
//   sier at ቅዳሴ begynner ved midnatt. Klokkeslettet varierer fra kirke til kirke.
// Usikkert: ርክበ ካህናት er regnet ut fra eksemplet for 2018 (påske ሚያዝያ 4, ርክበ ካህናት ሚያዝያ 28): onsdag 24 dager etter
//   påskedagen. Hvorfor dagen heter «prestenes møte», sier kildene bare kort (synoden møtes).
// Usikkert: Kirkas tradisjon kaller bladet duen kom med til Noah for ቄጤማ; Bibelen (1 Mos 8:11) sier et oljeblad.
//   Derfor står det uten bibelvers.
export const paskeuka: Tema = {
  slug: "paskeuka",
  del: "hoytider",
  tittel: { no: "Påskeuka", am: "ሕማማት" },
  undertittel: {
    no: "Fra ሆሳዕና til ትንሣኤ – og de 50 gledesdagene etterpå",
    am: "ከሆሳዕና እስከ ትንሣኤ፤ ከዚያም ሃምሳው የደስታ ቀናት",
  },
  bilde: "korsfestelsen",
  ingress: {
    no:
      "Uka før påske heter ሰሙነ ሕማማት, lidelsenes uke. Da minnes vi alt Jesus led for oss: at han ble forrådt, dømt, slått, korsfestet og lagt i graven. Vi faster mer, ber mer og bøyer oss ned til jorda. Så kommer påskenatta med lys og glede: Kristus er stått opp fra de døde!",
    am:
      "ከትንሣኤ በፊት ያለው ሳምንት ሰሙነ ሕማማት ይባላል። ጌታችን ስለ እኛ የተቀበለውን መከራ ሁሉ እናስባለን፤ መሰጠቱን፣ መከሰሱን፣ መገረፉን፣ መሰቀሉንና መቀበሩን። አብዝተን እንጾማለን፣ እንጸልያለን፣ እንሰግዳለን። ከዚያም የብርሃንና የደስታ ሌሊት ይመጣል፤ ክርስቶስ ከሙታን ተነሥቷል!",
  },
  hovedvers: "Isa 53:4-5",
  avsnitt: [
    {
      id: "hosaena",
      tittel: { no: "ሆሳዕና – palmesøndag", am: "ሆሳዕና" },
      ingress: {
        no: "ሆሳዕና er den siste søndagen i ዐቢይ ጾም og en av de ni store høytidene. Les om de andre søndagene i fasten på siden om fastene.",
        am: "ሆሳዕና የዐቢይ ጾም የመጨረሻው እሑድና ከዘጠኙ ዐበይት በዓላት አንዱ ነው። የሌሎቹን የዐቢይ ጾም ሰንበታት በአጽዋማት ገጽ ላይ ተመልከት።",
      },
      punkter: [
        {
          tekst: {
            no: "Jesus red inn i Jerusalem på et esel. Folket, både barn og gamle, la klær og grener på veien og ropte: «Hosianna, Davids sønn! Velsignet være han som kommer i Herrens navn!»",
            am: "ጌታችን በአህያ ተቀምጦ ወደ ኢየሩሳሌም ገባ። ሕፃናትና አረጋውያን ልብሳቸውንና የዛፍ ቅርንጫፍ በመንገድ ላይ አነጠፉ፤ «ሆሣዕና ለዳዊት ልጅ በጌታ ስም የሚመጣ የተባረከ ነው» እያሉ ጮኹ።",
          },
          vers: ["Matt 21:8-9", "John 12:13"],
        },
        {
          tekst: {
            no: "Ordet ሆሳዕና kommer fra hebraisk og betyr «frels nå!». Det står allerede i Salmenes bok. Profeten Sakarja hadde sagt at kongen skulle komme ydmyk, ridende på et esel.",
            am: "«ሆሳዕና» ከዕብራይስጥ የተገኘ ቃል ነው፤ ትርጓሜውም «እባክህ አሁን አድን» ማለት ነው። ቃሉ በመዝሙረ ዳዊት ይገኛል። ነቢዩ ዘካርያስም ንጉሡ ትሑት ሆኖ በአህያ ተቀምጦ እንደሚመጣ ተናግሮ ነበር።",
          },
          vers: ["Ps 118:25-26", "Zech 9:9"],
        },
        {
          tekst: {
            no: "Esel er ikke et dyr for krig. Jesus viste at han er fredens konge som kommer med fred til hjertet vårt.",
            am: "በአህያ መቀመጡ የሰላም ንጉሥ መሆኑን ያሳያል፤ እውነተኛውን የኅሊና ሰላም ይዞልን መጣ።",
          },
          vers: ["John 14:27"],
        },
        {
          tekst: {
            no: "Kvelden før begynner vigilien. Trommen (ከበሮ) og ጸናጽል, som har vært stille siden fasten begynte, brukes igjen til lovsangen. ማኅሌት varer hele natta.",
            am: "የሆሳዕና ዋዜማ ቅዳሜ ከሰዓት በኋላ ይጀመራል። ከዐቢይ ጾም መግቢያ ጀምሮ በዝምታ የሰነበቱት ከበሮና ጸናጽል ለምስጋናው ይመለሳሉ። ማኅሌቱም ሌሊቱን ሙሉ ያድራል።",
          },
        },
        {
          tekst: {
            no: "Om morgenen går prestene rundt kirka mot alle fire himmelretninger og leser fra evangeliene. Når ቅዳሴ begynner, roper diakonen ved døra: «Lukk opp portene!», og presten svarer fra innsiden: «Hvem er denne ærens konge?»",
            am: "ጠዋት ካህናቱ ወንጌልን እያነበቡ ቤተ መቅደሱን በአራቱም መዓዝን ይዞራሉ። ቅዳሴው ሲጀመር ዲያቆኑ በምዕራብ በር ቆሞ «አርኅው ኖኃተ መኳንንት» ይላል፤ ካህኑም ከውስጥ ሆኖ «መኑ ውእቱ ዝንቱ ንጉሠ ስብሐት» ብሎ ይመልሳል።",
          },
          vers: ["Ps 24:7-8"],
        },
        {
          tekst: {
            no: "Palmegreiner (ዘንባባ) blir velsignet og delt ut. Vi binder dem rundt panna eller som en ring på fingeren og tar dem med hjem. De viser at Kristus er fredens og frihetens Gud.",
            am: "ዘንባባ ተባርኮ ለሕዝቡ ይታደላል። ምእመናን በግምባራቸው ወይም በጣታቸው እንደ ቀለበት አሥረው ወደ ቤታቸው ይወስዱታል፤ ክርስቶስ የሰላምና የነጻነት አምላክ መሆኑን ለመመስከር ነው።",
          },
        },
        {
          tekst: {
            no: "Etter ቅዳሴ ber prestene ፍትሐት, bønnen for de døde, for alle kristne. I påskeuka blir det nemlig ikke bedt ፍትሐት. Samme dag blir boka ግብረ ሕማማት velsignet, og lesningen av den begynner.",
            am: "ከቅዳሴ በኋላ ለክርስቲያኖች ሁሉ ሥርዓተ ፍትሐት ይደረጋል፤ በሰሙነ ሕማማት ፍትሐት አይደረግምና። ግብረ ሕማማት የተባለው መጽሐፍም ተባርኮ መነበብ ይጀምራል።",
          },
        },
        {
          tekst: {
            no: "Mange som ropte «Hosianna» på søndag, ropte «Korsfest ham!» på fredag. Vi skal ta imot Jesus med et ydmykt og angrende hjerte og holde fast ved ham.",
            am: "በእሑድ «ሆሳዕና» ያሉት ብዙዎች በዓርብ «ይሰቀል» አሉ። እኛ ግን ጌታችንን በትሕትናና በንስሐ ልብ ልንቀበለውና ልንጸናበት ይገባል።",
          },
          vers: ["Mark 15:13-14"],
        },
      ],
    },
    {
      id: "annerledes",
      tittel: { no: "Hva er annerledes i påskeuka?", am: "በሰሙነ ሕማማት ምን ይለያል?" },
      ingress: {
        no: "ሕማማት betyr «lidelser». Dagene minner om tida før Kristus frelste oss, da menneskene levde under syndens straff. Derfor er noe borte fra kirka denne uka.",
        am: "«ሕማማት» ሐመ (ታመመ) ከሚለው የግእዝ ግሥ የተገኘ ነው። ዕለታቱ የዓመተ ፍዳ ምሳሌዎች ናቸው። ስለዚህ በዚህ ሳምንት የማይፈጸሙ ሥርዓቶች አሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "Vi hilser ikke på hverandre med kyss. Judas forrådte Jesus med et kyss. Det minnes vi ved å la være å hilse slik hele uka.",
            am: "በመሳሳም ሰላምታ አይሰጥም። ይሁዳ ጌታችንን በመሳም አሳልፎ ሰጠው፤ ይህን ለማሰብ በሰሙነ ሕማማት የሰላምታ ልውውጥ የለም።",
          },
          vers: ["Matt 26:48-49", "Luke 22:48"],
        },
        {
          tekst: {
            no: "Vi kysser ikke korset, og prestene sier ikke «እግዚአብሔር ይፍታህ» (Gud løse deg). Det minner om tida før Jesus ga oss korset og frelsen.",
            am: "መስቀል መሳለም የለም፤ ካህናትም «እግዚአብሔር ይፍታህ» አይሉም። ጌታችን መስቀሉን የሰላም ዓርማ አድርጎ ከመስጠቱ በፊት የነበረውን ዘመን ለማሰብ ነው።",
          },
        },
        {
          tekst: {
            no: "Det holdes ingen ቅዳሴ fra mandag til onsdag. Første ቅዳሴ i uka er på torsdag, til minne om den siste nattverden.",
            am: "ከሰኞ እስከ ረቡዕ ቅዳሴ አይቀደስም። ምሴተ ሐሙስን ለማሰብ ግን በዕለተ ሐሙስ ቅዳሴ ይቀደሳል።",
          },
        },
        {
          tekst: {
            no: "Dør noen i påskeuka, blir det ikke bedt ፍትሐት for dem. Derfor blir ፍትሐት bedt for alle på ሆሳዕና.",
            am: "በሰሙነ ሕማማት ሰው ቢሞት ጸሎተ ፍትሐት አይደርስለትም። ስለዚህ አስቀድሞ በሆሳዕና ዕለት ለክርስቲያን ሁሉ ፍትሐት ይደረጋል።",
          },
        },
        {
          tekst: {
            no: "Hver time leses det fra ግብረ ሕማማት, kirkas bok om Jesu lidelse, og fra Jesaja, Jeremia, Salmene og evangeliene. Diakonen slår på en liten klokke (ቃጭል) for å kalle folk til bønn.",
            am: "በየሰዓቱ ግብረ ሕማማት፣ ትንቢተ ኢሳይያስ፣ ትንቢተ ኤርምያስ፣ መዝሙረ ዳዊትና ወንጌል ይነበባሉ። ዲያቆኑ ምእመናንን ለጸሎት ለመጥራት በየሰዓቱ ቃጭል ይመታል።",
          },
        },
        {
          tekst: {
            no: "Vi gjør mye ስግደት, faster lengre enn ellers og spiser enkel mat. Sangen er sørgmodig, uten tromme og uten håndklapp. Folk blir lenge i kirka og skrifter syndene sine.",
            am: "አብዝተን እንሰግዳለን፤ ከሌላው ጊዜ በላይ እንጾማለን፤ በቀላሉ እንመገባለን። ዜማው የኀዘን ነው፤ ከበሮና ጭብጨባ የለበትም። ምእመናን በቤተ ክርስቲያን ደጅ ይጠናሉ፤ ኃጢአታቸውንም ለካህኑ ይናዘዛሉ።",
          },
          vers: ["Matt 26:38-39"],
        },
        {
          tekst: {
            no: "Mange faster helt uten mat og drikke fra torsdag eller fredag til påskenatta. Det kalles አክፍሎት. Den som ikke klarer det, spiser fredag kveld og faster lørdagen.",
            am: "የተቻላቸው ከሐሙስ ወይም ከዓርብ ጀምረው እስከ ትንሣኤ ሌሊት እኽል ውኃ ሳይቀምሱ ያከፍላሉ። ያልተቻላቸው ዓርብ ማታ በልተው ቅዳሜን ይጾማሉ።",
          },
        },
      ],
    },
    {
      id: "dagene",
      tittel: { no: "Mandag til onsdag", am: "ከሰኑይ እስከ ረቡዕ" },
      punkter: [
        {
          tekst: {
            no: "Mandag – አንጽሖተ ቤተ መቅደስ: Jesus renset templet og drev ut dem som solgte og kjøpte: «Mitt hus skal være et bønnens hus.» Kroppen vår er også Guds tempel, som han vil rense for synd.",
            am: "ሰኑይ – አንጽሖተ ቤተ መቅደስ፦ ጌታችን ቤተ መቅደሱን አነጻ፤ ሻጮችንና ለዋጮችን አስወጣ፤ «ቤቴ የጸሎት ቤት ይባላል» አለ። ሰውነታችንም የእርሱ ቤተ መቅደስ ነው፤ ከኃጢአት ሊያነጻው ይፈልጋል።",
          },
          vers: ["Luke 19:45-46"],
        },
        {
          tekst: {
            no: "Mandag – መርገመ በለስ: Jesus fant et fikentre med bare blader og ingen frukt, og det visnet. Frukten er tro og gode gjerninger. Vi skal ikke bare se fromme ut, men bære frukt.",
            am: "ሰኑይ – መርገመ በለስ፦ ጌታችን ከቅጠል በቀር ፍሬ የሌላትን በለስ አገኘ፤ ረገማትም። ፍሬ የተባለው ሃይማኖትና ምግባር ነው። ቅጠል ብቻ ሳይሆን ፍሬ ልናፈራ ይገባናል።",
          },
          vers: ["Mark 11:13-14", "Matt 21:19"],
        },
        {
          tekst: {
            no: "Tirsdag – spørsmålenes og undervisningens dag: Lederne spurte Jesus: «Med hvilken rett gjør du dette?» Jesus svarte med et spørsmål om Johannes' dåp. Så underviste han lenge i templet.",
            am: "ሠሉስ – የጥያቄና የትምህርት ቀን፦ ጸሐፍትና ፈሪሳውያን «በማን ሥልጣን ታደርጋለህ?» ብለው ጠየቁት። ጌታችንም ስለ ዮሐንስ ጥምቀት ጠየቃቸው። ከዚያም በቤተ መቅደስ ረጅም ትምህርት አስተማረ።",
          },
          vers: ["Matt 21:23-25"],
        },
        {
          tekst: {
            no: "Onsdag – rådslagningens dag (ምክረ አይሁድ): Øversteprestene la planer om å ta Jesus, og Judas lovet å forråde ham for tretti sølvpenger. Derfor faster vi hver onsdag gjennom året.",
            am: "ረቡዕ – ምክረ አይሁድ፦ የካህናት አለቆች ጌታችንን እንዴት እንደሚይዙት ተማከሩ፤ ይሁዳም በሠላሳ ብር አሳልፎ ሊሰጠው ተስማማ። ስለዚህ ዓመቱን ሙሉ ረቡዕን እንጾማለን።",
          },
          vers: ["Matt 26:3-4", "Matt 26:14-16"],
        },
        {
          tekst: {
            no: "Onsdag er også «den gode duftens dag» og «tårenes dag». En kvinne helte kostbar salve over Jesus i Simons hus. Kirkas lærere forteller at hun gråt over syndene sine ved føttene hans.",
            am: "ረቡዕ «የመልካም መዓዛ ቀን» እና «የዕንባ ቀን» ትባላለች። አንዲት ሴት በስምዖን ቤት ውድ ሽቱ በጌታችን ላይ አፈሰሰች። ስለ ኃጢአቷ ሥርየት በዕንባዋ እንደ ተማጸነችም መምህራን ያስተምራሉ።",
          },
          vers: ["Matt 26:6-7", "Matt 26:13"],
        },
      ],
    },
    {
      id: "torsdag",
      tittel: { no: "ጸሎተ ሐሙስ – skjærtorsdag", am: "ጸሎተ ሐሙስ" },
      ingress: {
        no: "Torsdagen har mange navn: ጸሎተ ሐሙስ (bønnens torsdag), ሕፅበተ እግር (fotvaskingen), የምሥጢር ቀን (mysteriets dag) og የሐዲስ ኪዳን ሐሙስ (den nye paktens torsdag).",
        am: "ዕለተ ሐሙስ ብዙ ስሞች አሏት፤ ጸሎተ ሐሙስ፣ ሕፅበተ እግር፣ የምሥጢር ቀንና የሐዲስ ኪዳን ሐሙስ።",
      },
      punkter: [
        {
          tekst: {
            no: "Jesus tok av seg kappen, bandt et håndkle om seg og vasket disiplenes føtter, også Judas' føtter. Han sa: «Jeg har gitt dere et eksempel, så dere skal gjøre som jeg har gjort mot dere.» Han lærte oss ydmykhet og kjærlighet, også til dem som ikke er glad i oss.",
            am: "ጌታችን ልብሱን አኖረ፤ ማበሻ ጨርቅ ታጠቀ፤ የደቀ መዛሙርቱን እግር አጠበ፤ የይሁዳንም እግር ሳይቀር። «እኔ ለእናንተ እንዳደረግሁ እናንተ ደግሞ ታደርጉ ዘንድ ምሳሌ ሰጥቻችኋለሁ» አለ። ትሕትናንና ፍቅርን፣ የሚጠሉንንም መውደድ አስተማረን።",
          },
          vers: ["John 13:4-5", "John 13:14-15"],
        },
        {
          tekst: {
            no: "Peter ville ikke at Jesus skulle vaske føttene hans. Men Jesus svarte: «Vasker jeg deg ikke, har du ingen del med meg.»",
            am: "ጴጥሮስ ጌታችን እግሩን እንዲያጥበው አልፈለገም። ጌታችንም «ካላጠብሁህ ከእኔ ጋር ዕድል የለህም» ብሎ መለሰለት።",
          },
          vers: ["John 13:8"],
        },
        {
          tekst: {
            no: "I kirka vasker biskopen eller presten føttene til alle, fra prestene til de minste, menn og kvinner. Det skjer ved den niende timen (kl. 15). Vannet blir velsignet, og man bruker blader fra oliventre og vinranke. Oliven er sterk og minner om den harde lidelsen. Vinbladet minner om Jesu blod.",
            am: "በዚች ዕለት ዘጠኝ ሰዓት ሲሆን ዲያቆኑ ውኃ ያቀርባል፤ ጸሎተ አኰቴት ተጸልዮ ውኃው በካህኑ ወይም በሊቀ ጳጳሱ እጅ ይባረካል። ከካህናት እስከ ምእመናን የሁሉም እግር ይታጠባል። የወይራና የወይን ቅጠልም ይጠቀማሉ፤ ወይራ ጽኑ መከራውን፣ የወይን ቅጠል ደሙን ያስታውሳል።",
          },
        },
        {
          tekst: {
            no: "Samme kveld tok Jesus brødet, velsignet det, brøt det og sa: «Dette er mitt legeme.» Han tok begeret og sa: «Dette er mitt blod, den nye paktens blod.» Slik innstiftet han nattverden (ምሥጢረ ቍርባን).",
            am: "በዚያው ምሽት ጌታችን ኅብስቱን አንሥቶ ባረከ፣ ቈርሶ «ይህ ሥጋዬ ነው» አለ። ጽዋውንም አንሥቶ «ይህ የሐዲስ ኪዳን ደሜ ነው» አለ። በዚህም ምሥጢረ ቍርባንን መሠረተ።",
          },
          vers: ["Matt 26:26-28", "Luke 22:19-20"],
        },
        {
          tekst: {
            no: "Torsdag holdes uka første ቅዳሴ. Den blir sunget lavt og stille, og ጸናጽል brukes i stedet for klokka – for jødene kom stille for å ta Jesus. Fredshilsenen blir ikke gitt. Vi skrifter først og tar så imot Kristi legeme og blod.",
            am: "በዚች ዕለት ቅዳሴ ይቀደሳል፤ ቅዳሴው በለሆሳስ ነው። የቃጭሉን አገልግሎት ጸናጽል ይተካዋል፤ አይሁድ ጌታችንን ሊይዙት ድምፃቸውን ዝግ አድርገው መምጣታቸውን ለማሰብ ነው። ጸሎተ ተአምኆ አይደረግም። ምእመናን በንስሐ ተዘጋጅተው ሥጋውንና ደሙን ይቀበላሉ።",
          },
        },
        {
          tekst: {
            no: "Etterpå gikk Jesus til hagen over Kedron-bekken og ba til svetten rant: «Far, ikke som jeg vil, men som du vil.» Disiplene sovnet. Jesus sa: «Våk og be, så dere ikke kommer i fristelse.»",
            am: "ከዚያም ጌታችን ከቄድሮስ ወንዝ ማዶ ወዳለው አትክልት ሄደ፤ ወዙ እስኪፈስ ድረስ ጸለየ። ደቀ መዛሙርቱ ተኝተው አገኛቸው፤ «ወደ ፈተና እንዳትገቡ ትጉና ጸልዩ» አላቸው።",
          },
          vers: ["Matt 26:39", "Matt 26:41"],
        },
        {
          tekst: {
            no: "Om natta kom Judas med soldater. Han kysset Jesus for å vise hvem han var. Jesus ble tatt og ført til øverstepresten Kaifas. Peter fulgte etter på avstand.",
            am: "በሌሊት ይሁዳ ጭፍሮችን አስከትሎ መጣ፤ ጌታችንን ለይቶ ለማሳየት ሳመው። ጌታችንንም ይዘው ወደ ሊቀ ካህናቱ ወደ ቀያፋ ወሰዱት፤ ጴጥሮስ ግን ከሩቅ ይከተል ነበር።",
          },
          vers: ["Matt 26:47-50", "Matt 26:57-58"],
        },
        {
          tekst: {
            no: "På skjærtorsdag spiser mange ጉልባን: kokte bønner og hvete. Det minner om israelittene, som måtte dra fra Egypt i all hast og ikke rakk å heve brødet.",
            am: "በጸሎተ ሐሙስ ጉልባን ይበላል፤ ከባቄላ ክክና ከስንዴ ወይም ከተፈተገ ገብስ ተቀቅሎ የሚዘጋጅ ንፍሮ ነው። እስራኤላውያን ከግብፅ በችኮላ ሲወጡ ሊጡን አቡክተው መጋገር አለመቻላቸውን ያስታውሳል።",
          },
          vers: ["Exod 12:39"],
        },
      ],
    },
    {
      id: "fredag",
      tittel: { no: "ስቅለት – langfredag", am: "ስቅለት" },
      punkter: [
        {
          tekst: {
            no: "Fra torsdag kveld til fredag ettermiddag led Jesus mye: Han ble slått, spyttet på, hånet og pisket. Pilatus dømte ham, og han bar korset sitt til Golgata.",
            am: "ከሐሙስ ምሽት እስከ ዓርብ ጌታችን ብዙ መከራ ተቀበለ፤ ተገረፈ፣ ተተፋበት፣ ተዘበተበት። ጲላጦስ ፈረደበት፤ መስቀሉንም ተሸክሞ ወደ ጎልጎታ ወጣ።",
          },
          vers: ["Matt 27:26", "Matt 27:29-31", "John 19:17"],
        },
        {
          tekst: {
            no: "Ved den sjette timen (kl. 12) ble han korsfestet mellom to røvere. Mørke kom over hele landet til den niende timen (kl. 15). Da ropte Jesus og oppga ånden.",
            am: "በስድስት ሰዓት በሁለት ወንበዴዎች መካከል ሰቀሉት። ከስድስት ሰዓት እስከ ዘጠኝ ሰዓት በምድር ሁሉ ላይ ጨለማ ሆነ። በዘጠኝ ሰዓትም ጌታችን ጮኾ ነፍሱን ሰጠ።",
          },
          vers: ["Matt 27:38", "Matt 27:45-46", "Matt 27:50"],
        },
        {
          tekst: {
            no: "Da skjedde store under: Forhenget i templet revnet, jorda skalv, klippene sprakk, gravene åpnet seg, og mange døde sto opp.",
            am: "ያን ጊዜ ታላላቅ ተአምራት ሆኑ፤ የቤተ መቅደስ መጋረጃ ለሁለት ተቀደደ፤ ምድር ተናወጠች፤ ዓለቶች ተሰነጠቁ፤ መቃብራት ተከፈቱ፤ ብዙ ሙታንም ተነሡ።",
          },
          vers: ["Matt 27:51-52"],
        },
        {
          tekst: {
            no: "Røveren på høyre side ba: «Jesus, husk på meg når du kommer i ditt rike!» Jesus svarte: «I dag skal du være med meg i paradis.»",
            am: "በቀኝ የተሰቀለው ወንበዴ «ኢየሱስ ሆይ፥ በመንግሥትህ ስትመጣ አስበኝ» አለ። ጌታችንም «ዛሬ ከእኔ ጋር በገነት ትሆናለህ» አለው።",
          },
          vers: ["Luke 23:42-43"],
        },
        {
          tekst: {
            no: "Gud skapte Adam på en fredag. På en fredag ga Jesus seg selv som offer for å frelse Adam og alle hans barn. Med sjelen gikk han ned til dødsriket og satte de bundne sjelene fri.",
            am: "እግዚአብሔር አዳምን በዕለተ ዓርብ ፈጠረው፤ በዚያው ዕለት አዳምን ለማዳን ራሱን መሥዋዕት አድርጎ አቀረበ። በአካለ ነፍስ ወደ ሲኦል ወርዶ በዚያ ተግዘው የነበሩትን ነፍሳት ነጻ አወጣ።",
          },
          vers: ["1Pet 3:18-19"],
        },
        {
          tekst: {
            no: "I kirka er det sorg. Et forheng blir spent opp til minne om korsfestelsen, og det brennes myrra. Vi leser om lidelsen og bøyer oss ned til jorda mange ganger, til langt på ettermiddagen.",
            am: "በዚህ ዕለት ለስቅለት መታሰቢያ አጎበር ተዘርግቶ ከርቤ እየታጠነ ስቅለቱን የሚመለከቱ ምንባባት ሲነበቡና ሲሰገድ ይዋላል።",
          },
        },
        {
          tekst: {
            no: "Til slutt skrifter folket syndene fra uka. Presten slår lett på skuldrene deres med olivengreiner (ጥብጠባ) og gir dem flere ስግደት å gjøre. Det minner om at Jesus ble pisket for oss.",
            am: "በመጨረሻም ምእመናን በሰሙነ ሕማማት የሠሩትን ጥፋት ይናዘዛሉ። ካህናቱም በወይራ ቅጠል ትከሻቸውን እየጠበጠቡ ሌላ ስግደት ያዟቸዋል። ጥብጠባው የጌታችንን ግርፋት ያስታውሳል።",
          },
        },
        {
          tekst: {
            no: "Josef fra Arimatea og Nikodemus tok Jesu kropp ned fra korset, svøpte den i linklær og la den i en ny grav der ingen hadde ligget før.",
            am: "ዮሴፍና ኒቆዲሞስ የጌታችንን ሥጋ ከመስቀል አውርደው በበፍታ ገነዙት፤ ማንም ባልተቀበረበት በአዲስ መቃብርም አኖሩት።",
          },
          vers: ["John 19:38-41"],
        },
      ],
    },
    {
      id: "lordag",
      tittel: { no: "ቀዳም ሥዑር – påskeaften", am: "ቀዳም ሥዑር" },
      punkter: [
        {
          tekst: {
            no: "ቀዳም ሥዑር betyr «den opphevede lørdagen». Lørdag er ellers ingen fastedag, men denne lørdagen faster vi. Maria og apostlene sa: «Vi spiser ikke før vi har sett at Herren er stått opp.»",
            am: "«ቀዳም ሥዑር» «የተሻረች ቅዳሜ» ማለት ነው። የማትጾመዋ ቅዳሜ በዚህ ቀን ትጾማለች። እመቤታችንና ደቀ መዛሙርቱ «የጌታችንን ትንሣኤ ሳናይ እህል አንቀምስም» ብለው ጾመዋልና። የተሻረው ጾም አለመጾም ነው እንጂ በዓሉ አይደለም።",
          },
        },
        {
          tekst: {
            no: "Denne dagen hvilte Jesus i graven, slik Gud hvilte den sjuende dagen etter skapelsen. Derfor kalles den også «den hellige lørdagen».",
            am: "እግዚአብሔር ፍጥረታትን ፈጥሮ በሰባተኛው ቀን እንዳረፈ ጌታችንም በዚህች ዕለት በመቃብር አረፈ። ስለዚህ «ቅዱስ ቅዳሜ» ትባላለች።",
          },
          vers: ["Gen 2:2", "Matt 27:59-60"],
        },
        {
          tekst: {
            no: "Om morgenen deler prestene ut ቄጤማ, et grønt gress, mens de ringer med klokka og synger Jareds hymne «ገብረ ሰላመ በመስቀሉ» – «Han skapte fred ved sitt kors og åpenbarte sin oppstandelse». Derfor kalles dagen også ለምለም ቅዳሜ, «den grønne lørdagen».",
            am: "ጠዋት ካህናትና ዲያቆናት ቃጭል እየመቱ «ገብረ ሰላመ በመስቀሉ ትንሣኤሁ አግሃደ» የሚለውን ያሬዳዊ ዜማ እየዘመሩ ቄጤማ ለምእመናን ያድላሉ። ስለዚህ «ለምለም ቅዳሜ» ተብላም ትጠራለች።",
          },
        },
        {
          tekst: {
            no: "Kirkas lærere forteller at duen kom tilbake til Noah med noe grønt i nebbet; da visste han at flommen var over. Slik er ቄጤማ et glad budskap: Syndens flom er over, for Kristus har gitt oss fred.",
            am: "የኖኅ ርግብ የጥፋት ውኃ መጕደሉን ያበሠረችው ቄጤማ ይዛ በመመለስ ነው። ዛሬም ካህናት ቄጤማ ይዘው «የኃጢአት ውኃ ጐደለ፤ በክርስቶስ ሞትና ትንሣኤ ነጻነት ታወጀ» ብለው ያበሥራሉ።",
          },
        },
        {
          tekst: {
            no: "Vi binder ቄጤማ rundt hodet til påskenatta. Det minner om tornekrona soldatene satte på Jesu hode. Vi gir også en gave til kirka.",
            am: "ምእመናን ቄጤማውን እስከ ትንሣኤ ሌሊት በራሳቸው አሥረው ይቆያሉ፤ ይህም አይሁድ በጌታችን ራስ ላይ ያደረጉትን የእሾኽ አክሊል ያስታውሳል። ምእመናንም ለቤተ ክርስቲያን ገጸ በረከት ያቀርባሉ።",
          },
          vers: ["Matt 27:29"],
        },
      ],
    },
    {
      id: "tinsae",
      tittel: { no: "Påskenatta og ትንሣኤ", am: "የትንሣኤ ሌሊትና በዓለ ትንሣኤ" },
      ingress: {
        no: "ትንሣኤ betyr «oppstandelse». Påsken kalles også ፋሲካ, som betyr «overgang»: fra synd til rettferdighet, fra mørke til lys, fra død til liv.",
        am: "«ትንሣኤ» ተንሥአ (ተነሣ) ከሚለው የግእዝ ግሥ የተገኘ ነው። በዓሉ «ፋሲካ» ተብሎም ይጠራል፤ ትርጓሜውም ማዕዶት (መሻገር) ነው፤ ከኃጢአት ወደ ጽድቅ፣ ከጨለማ ወደ ብርሃን፣ ከሞት ወደ ሕይወት።",
      },
      punkter: [
        {
          tekst: {
            no: "Tidlig søndag morgen kom kvinnene til graven med salve. Engelen sa: «Frykt ikke! Han er ikke her, for han er stått opp, slik han sa. Kom og se stedet der han lå.»",
            am: "እሑድ በማለዳ ሴቶቹ ሽቱ ይዘው ወደ መቃብሩ ሄዱ። መልአኩም «እናንተስ አትፍሩ … እንደ ተናገረ ተነሥቶአልና በዚህ የለም፤ የተኛበትን ስፍራ ኑና እዩ» አላቸው።",
          },
          vers: ["Matt 28:1", "Matt 28:5-6"],
        },
        {
          tekst: {
            no: "Jesus sto opp av egen makt, fra en lukket grav. Han beseiret døden og åpnet paradis for Adam og alle hans barn. Hans oppstandelse er et løfte om vår egen oppstandelse.",
            am: "ጌታችን በገዛ ሥልጣኑ በዝግ መቃብር ሞትን ድል አድርጎ ተነሣ። ለአዳምና ለልጆቹ ገነትን ከፈተ። ትንሣኤው የእኛን ትንሣኤ አበሠረን።",
          },
          vers: ["John 10:18", "1Cor 15:20-22"],
        },
        {
          tekst: {
            no: "Lørdag kveld ringer kirkeklokka: «Kom sammen til bønn!» Prestene leser og synger Salmene, profetene og ውዳሴ ማርያም. Så står en diakon i hvite klær med kors og synger salmen: «Herren våknet som en som hadde sovet.»",
            am: "ቅዳሜ ማታ በ፪ ሰዓት «ለጸሎት ተሰብሰቡ» ብሎ ደወል ይደወላል። ካህናቱ መዝሙረ ዳዊትን፣ ነቢያትንና ውዳሴ ማርያምን ያደርሳሉ። ዲያቆኑ ነጭ ልብሰ ተክህኖ ለብሶ መስቀል ይዞ «ወተንሥአ እግዚአብሔር ከመ ዘንቃህ እምንዋም» የሚለውን ምስባክ ይሰብካል።",
          },
          vers: ["Ps 78:65"],
        },
        {
          tekst: {
            no: "Trommene og håndklappet kommer tilbake. Kirka deler ut lys: «Dere som satt i mørket, kom og se oppstandelsens lys!» Med tente lys går prester og folk i prosesjon rundt kirka.",
            am: "ካህናቱ ከበሮ እየመቱና እያጨበጨቡ ይዘምራሉ። ቤተ ክርስቲያን «በጨለማ የነበራችሁ ሕዝቦች ኑ የትንሣኤውን ብርሃን እዩ» እያለች ጧፍ ታድላለች። ካህናቱና ሕዝቡ መብራት እያበሩ ቤተ ክርስቲያኑን ይዞራሉ።",
          },
          vers: ["Isa 9:2"],
        },
        {
          tekst: {
            no: "Så roper presten: «ክርስቶስ ተንሥአ እሙታን» – Kristus er stått opp fra de døde! Alle svarer: «Med stor kraft og makt! Han bandt Satan og satte Adam fri! Fred! Fra nå av er det glede og fred!»",
            am: "ካህኑ «ክርስቶስ ተንሥአ እሙታን» ሲል ሁሉም «በዐቢይ ኃይል ወሥልጣን፤ አሰሮ ለሰይጣን፤ አግዐዞ ለአዳም፤ ሰላም፤ እምይእዜሰ ኮነ ፍሥሐ ወሰላም» እያሉ ይቀበላሉ።",
          },
        },
        {
          tekst: {
            no: "Nå kysser vi korset igjen, og presten sier igjen «እግዚአብሔር ይፍታ». Vi blir stenket med vievann som har stått i kirka mens ግብረ ሕማማት ble lest. Ved midnatt holdes ቅዳሴ, og vi tar imot nattverden.",
            am: "«ነዋ መስቀለ ሰላም» እየተባለ መስቀል ይሳለማል፤ ካህኑም «እግዚአብሔር ይፍታ» ይላሉ። ግብረ ሕማማት ሲነበብበት ከሰነበተው ጠበልም ይረጫል። በመንፈቀ ሌሊትም ቅዳሴ ተቀድሶ ሥርዓተ ቍርባን ይፈጸማል።",
          },
        },
        {
          tekst: {
            no: "Etter ቅዳሴ går alle hjem og bryter fasten med glede. Kirka ber oss dele maten med de fattige, så også de som ikke har noe, kan feire.",
            am: "ከሠርሖተ ሕዝብ በኋላ ሁሉም ወደየቤቱ ሄዶ ይፈስካል። የመግደፊያ ዝግጅት ለሌላቸው ነዳያንም «እንኳን ለብርሃነ ትንሣኤው በሰላም አደረሳችሁ» እየተባለ ይታደላል።",
          },
          vers: ["Luke 14:13-14"],
        },
        {
          tekst: {
            no: "I påsketida hilser vi hverandre: «ክርስቶስ ተንሥአ እሙታን» og «እንኳን ለብርሃነ ትንሣኤው በሰላም አደረሳችሁ» – «Gratulerer med oppstandelsens lys!»",
            am: "በዘመነ ትንሣኤ ስንገናኝ «ክርስቶስ ተንሥአ እሙታን» እንባባላለን፤ «እንኳን ለብርሃነ ትንሣኤው በሰላም አደረሳችሁ» እንባባላለን።",
          },
        },
      ],
    },
    {
      id: "femti",
      tittel: { no: "De 50 dagene: ርክበ ካህናት, ዕርገት og ጰራቅሊጦስ", am: "ሃምሳው ቀናት፤ ርክበ ካህናት፣ ዕርገትና ጰራቅሊጦስ" },
      punkter: [
        {
          tekst: {
            no: "De 50 dagene fra påske til pinse er gledesdager. Vi faster ikke, heller ikke onsdag og fredag, og vi gjør ikke ስግደት. Jesus sa at bryllupsgjestene ikke faster mens brudgommen er hos dem.",
            am: "ከትንሣኤ እስከ ጰራቅሊጦስ ያሉት ሃምሳ ቀናት የደስታ ቀናት ናቸው። ረቡዕና ዓርብም አይጾምባቸውም፤ አይሰገድባቸውም። ጌታችን ሙሽራው ከእነርሱ ጋር ሳለ ሚዜዎቹ አይጾሙም ብሏል።",
          },
          vers: ["Matt 9:15"],
        },
        {
          tekst: {
            no: "I 40 dager etter oppstandelsen viste Jesus seg levende for apostlene og talte med dem om Guds rike.",
            am: "ጌታችን ከትንሣኤው በኋላ አርባ ቀን ለሐዋርያት ሕያው ሆኖ እየታያቸው ስለ እግዚአብሔር መንግሥት አስተማራቸው።",
          },
          vers: ["Acts 1:3"],
        },
        {
          tekst: {
            no: "ርክበ ካህናት, «prestenes møte», er en onsdag midt i de 50 dagene. Kirka har en gammel regel om at biskopene skal samles to ganger i året. Rundt denne dagen møtes Den hellige synoden (ቅዱስ ሲኖዶስ) til sitt vårmøte.",
            am: "ርክበ ካህናት በሃምሳው ቀናት መካከል ያለች ረቡዕ ናት። «የጳጳሳት ጉባኤ በዓመት ሁለት ጊዜ ይሁን» በሚለው ቀኖና መሠረት ቅዱስ ሲኖዶስ የርክበ ካህናት ምልአተ ጉባኤውን ያካሂዳል።",
          },
        },
        {
          tekst: {
            no: "ዕርገት, Kristi himmelfart, er alltid en torsdag, den 40. dagen. Jesus førte disiplene ut mot Betania, løftet hendene og velsignet dem. Mens de så på, ble han tatt opp, og en sky skjulte ham. To engler sa at han skal komme igjen på samme måte.",
            am: "ዕርገት ሁልጊዜ ሐሙስ ነው፤ በአርባኛው ቀን። ጌታችን ደቀ መዛሙርቱን እስከ ቢታንያ አወጣቸው፤ እጆቹን አንሥቶ ባረካቸው። እያዩት ዐረገ፤ ደመናም ሰወረችው። ሁለት መላእክትም እንደዚሁ ዳግመኛ እንደሚመጣ ነገሯቸው።",
          },
          vers: ["Luke 24:50-51", "Acts 1:9-11"],
        },
        {
          tekst: {
            no: "Kong David hadde sagt det på forhånd: «Gud steg opp under jubel, Herren under basunlyd.» Hver gang vi ber trosbekjennelsen, sier vi at han for opp til himmelen og sitter ved Faderens høyre hånd.",
            am: "ቅዱስ ዳዊት «አምላክ በእልልታ፥ እግዚአብሔር በመለከት ድምፅ ዐረገ» ብሎ አስቀድሞ ተናገረ። በጸሎተ ሃይማኖትም «በክብር በምስጋና ወደ ሰማይ ዐረገ፤ በአባቱም ቀኝ ተቀመጠ» እያልን ዘወትር እንመሰክራለን።",
          },
          vers: ["Ps 47:6"],
        },
        {
          tekst: {
            no: "ጰራቅሊጦስ, pinse, er alltid en søndag, den 50. dagen. Maria og apostlene var samlet i bønn i Jerusalem. Da kom en lyd fra himmelen, og tunger som av ild satte seg på hver av dem. De ble fylt av Den hellige ånd og begynte å tale på andre språk.",
            am: "ጰራቅሊጦስ ሁልጊዜ እሑድ ነው፤ በኀምሳኛው ቀን። እመቤታችንና ሐዋርያት በኢየሩሳሌም በአንድነት ሆነው በጸሎት ይተጉ ነበር። ድንገት ከሰማይ ድምፅ መጣ፤ እንደ እሳት የተከፋፈሉ ልሳኖች በያንዳንዳቸው ላይ ተቀመጡ፤ መንፈስ ቅዱስም ሞላባቸው።",
          },
          vers: ["Acts 1:14", "Acts 2:1-4"],
        },
        {
          tekst: {
            no: "ጰራቅሊጦስ er gresk og betyr «trøster» eller «hjelper». Jesus hadde lovet: «Jeg vil sende dere en annen trøster.» Etter pinse var apostlene modige. Peter forkynte, og omtrent tre tusen ble døpt den dagen.",
            am: "«ጰራቅሊጦስ» የጽርዕ ቃል ነው፤ «አጽናኝ፣ ረዳት» ማለት ነው። ጌታችን «ሌላ አጽናኝ እልክላችኋለሁ» ብሎ ቃል ገብቶ ነበር። ሐዋርያት መንፈስ ቅዱስ ከወረደላቸው በኋላ ጽኑዓን ሆኑ፤ ቅዱስ ጴጥሮስ ሰበከ፤ በዚያም ቀን ሦስት ሺህ ያህል ተጠመቁ።",
          },
          vers: ["John 14:16", "Acts 2:41"],
        },
        {
          tekst: {
            no: "Dagen etter pinse begynner ጾመ ሐዋርያት, apostlenes faste. Apostlene fastet før de gikk ut for å forkynne.",
            am: "ከጰራቅሊጦስ ማግሥት ጾመ ሐዋርያት ይጀመራል። ሐዋርያት ወንጌልን ለመስበክ ከመውጣታቸው በፊት ጾመዋል።",
          },
          vers: ["Acts 13:2-3"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Athanasius", am: "ቅዱስ አትናቴዎስ" },
      tekst: {
        no: "I sin ቅዳሴ sier Athanasius at dødsriket skalv da Kristus døde. Han holdt jorda oppe så den ikke skulle gå under før tida, han øste ut sitt blod over den, og han frelste alle som var der.",
        am: "«ሲኦል ተነዋወጠች፤ መሠረቶቿም እፈርስ እፈርስ አሉ፤ ምድርን ያለጊዜዋ እንዳታልፍ አጸናት፤ ደሙን በምድር ላይ አፈሰሰ፤ ከኅልፈት ጠበቃት፤ በእርሷ ያለውንም ሁሉ ጠበቀ።»",
      },
      kilde: "ቅዳሴ ዘአትናቴዎስ (sitert i Mahibere Kidusan: የጌታችን ኢየሱስ ክርስቶስ ሞት (ሰሙነ ሕማማት), eotcmk.org)",
    },
    {
      navn: { no: "Abba Giyorgis av Gasicha", am: "አባ ጊዮርጊስ ዘጋሥጫ" },
      tekst: {
        no: "Om fotvaskingen: «Vasker jeg ikke føttene dine som en tjener, kan heller ikke du ydmyke deg for dem som er under deg. Gjør du deg ikke liten, kan du ikke bli en leder.»",
        am: "«እኔ በአገልጋይ አምሳል እግርህ ካላጠብኩህ አንተም ከበታችህ ላሉት ራስህን ዝቅ ለማድረግ አትችልም፤ ራስህን ዝቅ ዝቅ ካላደረግህ አለቃ ልትሆን አትችልም» ለማለት ነው።",
      },
      kilde: "መጽሐፈ ምሥጢር (sitert i Mahibere Kidusan: ጸሎተ ሐሙስ, eotcmk.org)",
    },
    {
      navn: { no: "Den hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "Elia ble tatt opp i en vogn av ild, men Kristus for opp av egen guddommelig makt. David sa «Gud steg opp», ikke «englene bar ham opp». Han for opp i den samme kroppen han tok fra oss, og ga slik menneskene stor ære.",
        am: "ኤልያስ በእሳት ሰረገላ ተወሰደ፤ ጌታችን ግን በገዛ አምላካዊ ሥልጣኑ ዐረገ። ዳዊት «እግዚአብሔር በእልልታ ዐረገ» አለ እንጂ «መላእክት አሳረጉት» አላለም። ከእኛ በነሣው በተዋሐደው ሥጋ ዐረገ፤ ለሰው ልጅም ታላቅ ክብርን አጎናጸፈ።",
      },
      kilde: "Johannes Krysostomos' tale om himmelfarten (gjengitt i Mahibere Kidusan: “እግዚአብሔር በመለከት ድምፅ ዐረገ”, eotcmk.org)",
    },
    {
      navn: { no: "De hellige apostlene", am: "ቅዱሳን ሐዋርያት" },
      tekst: {
        no: "Apostlene vitnet om det de så på pinsedagen, og befalte at festen skal feires. I denne tida skal man ikke faste og sørge.",
        am: "ሐዋርያት በዕለቱ ያዩትንና የተደረገላቸውን መስክረው ይህን በዓል ማክበር እንደሚገባ አዘዙ፤ በዚህ ወቅት መጾምና ማዘን ተገቢ አለመሆኑንም ተናገሩ።",
      },
      kilde: "ዲድስቅልያ 30:38-39 og 31:69-70 (sitert i Mahibere Kidusan: በዓለ ጰራቅሊጦስ, eotcmk.org)",
    },
    {
      navn: { no: "Den hellige Jared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "På påskeaften synger kirka Jareds hymne: «Han skapte fred ved sitt kors og åpenbarte sin oppstandelse.»",
        am: "«ገብረ ሰላመ በመስቀሉ ትንሣኤሁ አግሃደ» – በመስቀሉ ሰላምን አደረገ፤ በትንሣኤውም ገለጠልን።",
      },
      kilde: "ጾመ ድጓ, ዘቀዳም ሥዑር (Mahibere Kidusan: ቀዳም ሥዑር og ሰሙነ ሕመማት, eotcmk.org)",
    },
  ],
  ord: [
    { ord: "ሰሙነ ሕማማት", forklaring: { no: "lidelsenes uke, uka før påske", am: "ከሆሳዕና ሠርክ እስከ ትንሣኤ ሌሊት ያለው ሳምንት" } },
    { ord: "ሆሳዕና", forklaring: { no: "«frels nå!» – palmesøndag", am: "እባክህ አሁን አድን" } },
    { ord: "ዘንባባ", forklaring: { no: "palmegrein", am: "የዘንባባ ዝንጣፊ" } },
    { ord: "ግብረ ሕማማት", forklaring: { no: "kirkas bok som leses i påskeuka", am: "በሰሙነ ሕማማት የሚነበብ መጽሐፍ" } },
    { ord: "ሕፅበተ እግር", forklaring: { no: "fotvaskingen på skjærtorsdag", am: "የእግር ማጠብ ሥርዓት" } },
    { ord: "ጉልባን", forklaring: { no: "kokte bønner og hvete som spises på skjærtorsdag", am: "በጸሎተ ሐሙስ የሚበላ ንፍሮ" } },
    { ord: "ጥብጠባ", forklaring: { no: "presten slår lett med olivengrein etter skriftemålet på langfredag", am: "በወይራ ቅጠል ቸብ ቸብ ማድረግ" } },
    { ord: "ቀዳም ሥዑር", forklaring: { no: "«den opphevede lørdagen», påskeaften", am: "የተሻረች ቅዳሜ" } },
    { ord: "ቄጤማ", forklaring: { no: "grønt gress som deles ut på påskeaften", am: "በቀዳም ሥዑር የሚታደል ለምለም ሣር" } },
    { ord: "አክፍሎት", forklaring: { no: "å faste helt uten mat og drikke fram til påskenatta", am: "እስከ ትንሣኤ ሌሊት እኽል ውኃ ሳይቀምሱ መጾም" } },
    { ord: "ክርስቶስ ተንሥአ እሙታን", forklaring: { no: "«Kristus er stått opp fra de døde» – påskehilsenen", am: "ክርስቶስ ከሙታን ተነሣ" } },
    { ord: "ፋሲካ", forklaring: { no: "påske; «overgang»", am: "ማዕዶት፣ መሻገር" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvorfor hilser vi ikke med kyss i påskeuka?", am: "በሰሙነ ሕማማት ለምን በመሳሳም ሰላምታ አንሰጥም?" },
      svar: {
        no: "Fordi Judas forrådte Jesus med et kyss. Det minnes vi hele uka.",
        am: "ይሁዳ ጌታችንን በመሳም አሳልፎ ስለ ሰጠው ነው፤ ይህን ሳምንቱን ሙሉ እናስባለን።",
      },
    },
    {
      sporsmal: { no: "Hva betyr ሆሳዕና, og hva gjør vi med palmegreinene?", am: "ሆሳዕና ማለት ምን ማለት ነው? ዘንባባውንስ ምን እናደርገዋለን?" },
      svar: {
        no: "ሆሳዕና betyr «frels nå!». Palmegreinene blir velsignet, og vi binder dem rundt panna eller fingeren og tar dem med hjem.",
        am: "«እባክህ አሁን አድን» ማለት ነው። ዘንባባው ተባርኮ ይታደላል፤ በግምባራችን ወይም በጣታችን አሥረን ወደ ቤት እንወስደዋለን።",
      },
    },
    {
      sporsmal: { no: "Hvilke tre ting minnes vi på skjærtorsdag?", am: "በጸሎተ ሐሙስ የምናስባቸው ሦስት ነገሮች ምንድን ናቸው?" },
      svar: {
        no: "At Jesus vasket disiplenes føtter, at han innstiftet nattverden, og at han ba i hagen før han ble tatt.",
        am: "ጌታችን የደቀ መዛሙርቱን እግር ማጠቡን፣ ምሥጢረ ቍርባንን መመሥረቱንና ከመያዙ በፊት በአትክልቱ ቦታ መጸለዩን።",
      },
    },
    {
      sporsmal: { no: "Hvorfor heter påskeaften ቀዳም ሥዑር?", am: "የትንሣኤ ዋዜማ ለምን ቀዳም ሥዑር ተባለች?" },
      svar: {
        no: "Det betyr «den opphevede lørdagen». Lørdag er ellers ingen fastedag, men denne lørdagen faster vi, slik Maria og apostlene gjorde.",
        am: "«የተሻረች ቅዳሜ» ማለት ነው። የማትጾመዋ ቅዳሜ እንደ እመቤታችንና እንደ ሐዋርያት በዚህ ቀን ትጾማለች።",
      },
    },
    {
      sporsmal: { no: "Hva sier vi når vi hilser hverandre i påsketida?", am: "በዘመነ ትንሣኤ እንዴት እንባባላለን?" },
      svar: {
        no: "«ክርስቶስ ተንሥአ እሙታን» – Kristus er stått opp fra de døde! – og «እንኳን ለብርሃነ ትንሣኤው በሰላም አደረሳችሁ».",
        am: "«ክርስቶስ ተንሥአ እሙታን» እና «እንኳን ለብርሃነ ትንሣኤው በሰላም አደረሳችሁ» እንባባላለን።",
      },
    },
    {
      sporsmal: { no: "Hvor mange dager etter påske kommer ዕርገት og ጰራቅሊጦስ?", am: "ዕርገትና ጰራቅሊጦስ ከትንሣኤ በኋላ በስንተኛው ቀን ይውላሉ?" },
      svar: {
        no: "ዕርገት kommer den 40. dagen (en torsdag), og ጰራቅሊጦስ den 50. dagen (en søndag).",
        am: "ዕርገት በአርባኛው ቀን (ሐሙስ)፣ ጰራቅሊጦስ በኀምሳኛው ቀን (እሑድ) ይውላሉ።",
      },
    },
  ],
  kilder: [
    { navn: "ማኅበረ ቅዱሳን: ሆሳዕና", url: "https://eotcmk.org/a/ሆሳዕና-3/" },
    { navn: "ማኅበረ ቅዱሳን: ሆሣዕና በአርያም", url: "https://eotcmk.org/a/ሆሣዕና-በአርያም-2/" },
    { navn: "ማኅበረ ቅዱሳን: ሰሙነ ሕማማት", url: "https://eotcmk.org/a/ሰሙነ-ሕማማት-3/" },
    { navn: "ማኅበረ ቅዱሳን: ሰሙነ ሕማማት (ከዕለተ ሰኑይ እስከ ቀዳሚት ሰንበት)", url: "https://eotcmk.org/a/18590-2/" },
    { navn: "ማኅበረ ቅዱሳን (for barn): ሰሙነ ሕመማት", url: "https://eotcmk.org/a/ሰሙነ-ሕመማት/" },
    { navn: "ማኅበረ ቅዱሳን (for barn): የጌታችን ኢየሱስ ክርስቶስ ሞት (ሰሙነ ሕማማት)", url: "https://eotcmk.org/a/የጌታችን-ሞት-ሰሙነ-ሕማማት/" },
    { navn: "ማኅበረ ቅዱሳን: ጸሎተ ሐሙስ", url: "https://eotcmk.org/a/ጸሎተ-ሐሙስ-3/" },
    { navn: "ማኅበረ ቅዱሳን: ቀዳም ሥዑር", url: "https://eotcmk.org/a/ቀዳም-ሥዑር-2/" },
    { navn: "ማኅበረ ቅዱሳን: የትንሣኤ በዓል ትርጕሙና አከባበሩ", url: "https://eotcmk.org/a/%e1%8b%a8%e1%89%b5%e1%8a%95%e1%88%a3%e1%8a%a4-%e1%89%a0%e1%8b%93%e1%88%8d-%e1%89%b5%e1%88%ad%e1%8c%95%e1%88%99%e1%8a%93-%e1%8a%a0%e1%8a%a8%e1%89%a3%e1%89%a0%e1%88%a9/" },
    { navn: "ማኅበረ ቅዱሳን (for barn): ነገረ ትንሣኤ", url: "https://eotcmk.org/a/ነገረ-ትንሣኤ/" },
    { navn: "ማኅበረ ቅዱሳን: “እግዚአብሔር በመለከት ድምፅ ዐረገ” (ዕርገት)", url: "https://eotcmk.org/a/እግዚአብሔር-በመለ/" },
    { navn: "ማኅበረ ቅዱሳን: በዓለ ጰራቅሊጦስ", url: "https://eotcmk.org/a/በዓለ-ጰራቅሊጦስ-3/" },
    { navn: "ማኅበረ ቅዱሳን: ከቅዱስ ሲኖዶስ የተሰጠ መግለጫ (ርክበ ካህናት 2018)", url: "https://eotcmk.org/a/ከኢትዮጵያ-ኦርቶዶክስ-ተዋሕዶ-ቤተ-ክርስ-21/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Calendar (Lent and Holy Week)", url: "https://www.ethiopianorthodox.org/english/calendar.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
  ],
  utkast: true,
};
