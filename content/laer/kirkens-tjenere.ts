import type { Tema } from "./typer";

// Bygger på ethiopianorthodox.org: «The Hierarchy» (P.K. Matthew, etter Sergew Hable Sellassie og Taddesse Tamrat,
// «The Church of Ethiopia – A Panorama of History and Spiritual Life», EOTC 1970: patriark, erkebiskoper og biskoper,
// ABUNA og ETCHEGE, ærestitlene ንቡረ እድ, ሊቀ ሥልጣናት, ሊቀ ሊቃውንት, መልአከ ሰላም/ገነት/ኃይል, ገበዝ og ሊቀ ዲያቆናት,
// og at prestene underviser og mekler i familier), Addis Abeba bispedømme (eotcaa.org): «Monasticism in the Ethiopian
// Orthodox Church: A Brief Introduction» (Fr. Dr. Jossi Jacob; de ni hellige, Antonius og Pakomius, fornyelsen på
// 1200-tallet, Tana Qirqos, Waldeba, eremitter, mer enn 800 klostre, Mar Isak), Mahibere Kidusan: «‹‹ነገን ዛሬ እንሥራ››»
// del 6–9 (ordene መነኮስ og ምንኩስና, ፍትሐ ነገሥት om munkene, ቆብ/ቀሚስ/ቅናት/አስኬማ som bilder på Kristi lidelse,
// tjeneste (እርድና) før munkevigselen etter መጽሐፈ ምዕዳን, ሕንጻ መነኮሳት og ማር ይስሐቅ), «ዕረፍቱ ለአባ ሳሙኤል ዘዋልድባ»,
// «አቡነ አረጋዊ ዘደብረ ዳሞ», «በዓለ ልደቱ ለአቡነ ገብረ መንፈስ ቅዱስ» og «ተዝካረ ዕረፍቱ ለአቡነ ገብረ መንፈስ ቅዱስ» (ዝቋላ),
// «ልደተ አቡነ ተክለ ሃይማኖት», «በዓለ ቅዱስ ገብርኤል» (ቁልቢ, etter Daniel Kibret), «ግሸን ማርያም» og «ግሽን ማርያም»
// (ግማደ መስቀል, መስከረም ፳፩, skriftemål før man går), «ምክረ አበው በሐዊረ ሕይወት» (hva en åndelig reise er),
// «የምእመናን ድርሻ በቤተ ክርስቲያን» (rekkefølgen ved nattverden, mødre som ble nonner etter å ha levd i ekteskap), og
// liturgiboka (Marcos Daoud/erkebiskop Yesehaq) om at klærne under ቅዳሴ skal være hvite.
// Prestevigselen, de tre trinnene og de lavere tjenestene står utførlig på siden om prestetjenesten; klærne under ቅዳሴ
// på siden om tingene i kirka; Debre Damo, Debre Libanos og Lalibela i kirkehistorien og blant de etiopiske helgenene;
// ኅዳር ጽዮን på siden om kirkebygget. Her står bare en kort oversikt og det som er nytt.
// Usikkert: Patriarkens fulle tittel («… ርእሰ ሊቃነ ጳጳሳት ዘኢትዮጵያ ሊቀ ጳጳስ ዘአክሱም ወእጨጌ ዘመንበረ ተክለ ሃይማኖት»)
// er skrevet etter hvordan den brukes i kirka; jeg fant den ikke skrevet ut i én av kildene over. Bør sjekkes.
// Usikkert: At gifte prester til vanlig bærer hvit turban (ጥምጣም) og munker en lue (ቆብ), og at man sier «አባ» til
// prester og munker og «እማሆይ» til nonner, er vanlig praksis, men jeg fant ingen kilde som sier det rett ut.
// Usikkert: At bare menn (og hanndyr) får gå opp til Debre Damo, og at man klatrer opp med et tau av lær, står i
// reiseguider og er allment kjent, men jeg fant det ikke i en Tewahedo-kilde.
// Usikkert: Den store valfarten til ዝቋላ på 5. መጋቢት (Abune Gebre Menfes Kidus' minnedag) er allment kjent; MK
// bekrefter minnedagen, men ikke valfarten.
// Usikkert: At arken var på Tana Qirqos i lang tid før den kom til Aksum, er en tradisjon som gjengis på mange
// etiopiske sider. Eotcaa sier bare at klosteret regnes som et sted for gudstjeneste helt fra Det gamle testamentets tid.
// Usikkert: Den norske gjengivelsen av ordtaket «ሳይበጡ መታገም» fra መጽሐፈ ምዕዳን er en omskrivning; jeg er ikke sikker
// på den nøyaktige betydningen av uttrykket.
// Usikkert: Minnedagen for abba Samuel av Waldeba er satt til 12. ታኅሣሥ fordi MK-artikkelen om hans død er datert
// denne dagen. Bør sjekkes i ስንክሳር.
// Usikkert: At etiopiske pilegrimer særlig reiser til Jerusalem i påsketida, er vanlig kunnskap; kirkehistoriesiden
// nevner bare at kirka har munker og et bispedømme der.
export const kirkensTjenere: Tema = {
  slug: "kirkens-tjenere",
  del: "hverdag",
  tittel: { no: "Kirkas tjenere, klostre og valfart", am: "የቤተ ክርስቲያን አገልጋዮች፣ ገዳማትና ንግደት" },
  undertittel: {
    no: "Patriark, biskoper, prester og diakoner, munker og nonner, og de hellige stedene",
    am: "ፓትርያርክ፣ ጳጳሳት፣ ካህናትና ዲያቆናት፣ መነኮሳትና መነኮሳይያት፣ ቅዱሳት መካናት",
  },
  bilde: "prosesjonskorsLasta",
  ingress: {
    no:
      "Kirka er ordnet som én kropp der hver har sin tjeneste. Øverst er patriarken og biskopene, så kommer prestene og diakonene. Ved siden av dem lever munker og nonner i klostrene, borte fra verden, i bønn og faste. Til de hellige stedene og klostrene reiser troende på valfart for å be og få velsignelse.",
    am:
      "ቤተ ክርስቲያን እያንዳንዱ የራሱ አገልግሎት ያለበት አንድ አካል ሆና የተደራጀች ናት። በላይ ፓትርያርኩና ጳጳሳት፣ ቀጥሎ ቀሳውስትና ዲያቆናት አሉ። ከእነርሱም ጋር መነኮሳትና መነኮሳይያት ከዓለም ተለይተው በጸሎትና በጾም በገዳማት ይኖራሉ። ምእመናንም ለጸሎትና ለበረከት ወደ ቅዱሳት መካናትና ገዳማት ይጓዛሉ።",
  },
  hovedvers: "Eph 4:11-12",
  avsnitt: [
    {
      id: "en-kropp",
      tittel: { no: "Én kropp med mange tjenester", am: "ብዙ አገልግሎት ያለው አንድ አካል" },
      punkter: [
        {
          tekst: {
            no: "Alle døpte er en del av Guds folk, «et kongelig presteskap». Men Gud har satt noen til særlige tjenester i kirka: noen til apostler, noen til hyrder og lærere, for å bygge opp Kristi kropp.",
            am: "የተጠመቁ ሁሉ የእግዚአብሔር ሕዝብ፣ «የንጉሥ ካህናት» ናቸው። ነገር ግን እግዚአብሔር የክርስቶስ አካል ይታነጽ ዘንድ አንዳንዶቹን ሐዋርያት፣ አንዳንዶቹን እረኞችና አስተማሪዎች አድርጎ ለተለየ አገልግሎት ሾሟል።",
          },
          vers: ["1Pet 2:9", "Eph 4:11-12", "1Cor 12:28"],
        },
        {
          tekst: {
            no: "Kirka har tre trinn i prestetjenesten (ክህነት): diakon, prest og biskop. De blir viet med håndspåleggelse. Under biskopene står prestene, og under prestene diakonene.",
            am: "ቤተ ክርስቲያን ሦስት የክህነት መዓርጋት አሏት፤ ዲቁና፣ ቅስናና ጵጵስና። በአንብሮተ እድ ይሾማሉ። ቀሳውስት በጳጳሳት ሥር፣ ዲያቆናትም በቀሳውስት ሥር ያገለግላሉ።",
          },
          vers: ["Acts 14:23", "Phil 1:1"],
        },
        {
          tekst: {
            no: "Å lede i kirka er å tjene. Jesus sa: «Menneskesønnen er heller ikke kommet for å la sig tjene, men for selv å tjene.» Peter ber hyrdene om ikke å herske, men være et forbilde for flokken.",
            am: "በቤተ ክርስቲያን መሪነት አገልግሎት ነው። ጌታችን «የሰው ልጅም ሊያገለግልና ነፍሱን ለብዙዎች ቤዛ ሊሰጥ እንጂ እንዲያገለግሉት አልመጣም» አለ። ቅዱስ ጴጥሮስም እረኞች ለመንጋው ምሳሌ እንዲሆኑ እንጂ እንዳይገዙ ይመክራል።",
          },
          vers: ["Mark 10:45", "1Pet 5:2-3"],
        },
        {
          tekst: {
            no: "Prester og legfolk arbeider sammen. Prestene lærer folket etter gudstjenesten, gir råd og hjelper familier som er uenige, til å bli forsonet.",
            am: "ካህናትና ምእመናን በአንድነት ያገለግላሉ። ካህናት ከአገልግሎት በኋላ ሕዝቡን በቅጽረ ቤተ ክርስቲያን ያስተምራሉ፤ ይመክራሉ፤ የተጣሉ ቤተሰቦችንም ያስታርቃሉ።",
          },
          vers: ["1Cor 14:40"],
        },
      ],
    },
    {
      id: "titler",
      tittel: { no: "Rangene og hva vi kaller dem", am: "መዓርጋትና የክብር ስሞቻቸው" },
      punkter: [
        {
          tekst: {
            no: "Patriarken (ፓትርያርክ) er far for hele kirka og leder Den hellige synode. Vi kaller ham ብፁዕ ወቅዱስ («salig og hellig»). Han er også erkebiskop av Aksum og ዕጨጌ for Tekle Haymanots sete. Den første etiopiske patriarken, abune Basilios, ble innsatt i 1959.",
            am: "ፓትርያርኩ የመላዋ ቤተ ክርስቲያን አባትና የቅዱስ ሲኖዶስ ሰብሳቢ ነው። «ብፁዕ ወቅዱስ» ብለን እንጠራዋለን። ሊቀ ጳጳስ ዘአክሱም ወእጨጌ ዘመንበረ ተክለ ሃይማኖትም ነው። የመጀመሪያው ኢትዮጵያዊ ፓትርያርክ ብፁዕ ወቅዱስ አቡነ ባስልዮስ በ፲፱፻፶፩ (እ.ኤ.አ. 1959) ተሾሙ።",
          },
        },
        {
          tekst: {
            no: "Erkebiskop (ሊቀ ጳጳስ) og biskop (ጳጳስ eller ኤጲስ ቆጶስ) leder et bispedømme (ሀገረ ስብከት). Vi sier ብፁዕ («salig») og አቡነ («vår far») foran navnet, for eksempel «ብፁዕ አቡነ …». Biskopene er alltid munker.",
            am: "ሊቀ ጳጳሳትና ኤጲስ ቆጶሳት (ጳጳሳት) ሀገረ ስብከትን ይመራሉ። ከስማቸው በፊት «ብፁዕ» እና «አቡነ» እንላለን፤ ለምሳሌ «ብፁዕ አቡነ …»። ጳጳሳት ሁልጊዜ መነኮሳት ናቸው።",
          },
          vers: ["Acts 20:28"],
        },
        {
          tekst: {
            no: "Før kirka fikk egen patriark, kom biskopen (አቡን) fra Egypt, mens en etiopisk munk, ዕጨጌ, styret kirkas saker i landet. I dag har patriarken begge oppgavene.",
            am: "ቤተ ክርስቲያን የራሷ ፓትርያርክ ከማግኘቷ በፊት አቡኑ ከግብፅ ይመጣ ነበር፤ የቤተ ክርስቲያንን አስተዳደር ግን ኢትዮጵያዊ መነኩሴ የሆነው ዕጨጌ ይይዝ ነበር። አሁን ሁለቱም ሥልጣን በፓትርያርኩ ተጠቃሏል።",
          },
        },
        {
          tekst: {
            no: "ቆሞስ er en munk som er prest og har fått ansvar, ofte som leder for et kloster eller en kirke. Biskopene blir valgt blant ቆሞሳት.",
            am: "ቆሞስ ቅስና ያለውና ኃላፊነት የተሰጠው መነኩሴ ነው፤ ብዙ ጊዜ ገዳምን ወይም ደብርን ይመራል። ጳጳሳት ከቆሞሳት መካከል ይመረጣሉ።",
          },
        },
        {
          tekst: {
            no: "Presten heter ቄስ eller ቀሲስ (flertall ቀሳውስት), og kalles også ካህን. Han lærer, døper, feirer ቅዳሴ og tar imot skriftemål. Vi kaller ham gjerne «አባ» (far).",
            am: "ቄስ ወይም ቀሲስ (ብዙ ቁጥሩ ቀሳውስት) ካህን ይባላል። ያስተምራል፤ ያጠምቃል፤ ይቀድሳል፤ ንስሐ ይቀበላል። ብዙ ጊዜ «አባ» ብለን እንጠራዋለን።",
          },
          vers: ["1Tim 5:17"],
        },
        {
          tekst: {
            no: "Diakonen (ዲያቆን, flertall ዲያቆናት) hjelper presten og biskopen. I hver kirke leder en ሊቀ ዲያቆናት (erkediakon) diakonene. Under ቅዳሴ heter hoveddiakonen ሠራዒ ዲያቆን og den andre diakonen ንፍቅ ዲያቆን. ንፍቀ ዲያቆን er også navnet på trinnet under diakonen, underdiakonen.",
            am: "ዲያቆን ቀሳውስትንና ጳጳሳትን ይረዳል። በእያንዳንዱ ደብር ሊቀ ዲያቆናት ዲያቆናቱን ይመራል። በቅዳሴ ዋናው ዲያቆን ሠራዒ ዲያቆን፣ ረዳቱ ንፍቅ ዲያቆን ይባላል። ንፍቀ ዲያቆን ደግሞ ከዲቁና በታች ያለው የአገልግሎት ደረጃ ስም ነው።",
          },
          vers: ["Acts 6:3-6"],
        },
      ],
    },
    {
      id: "menigheten",
      tittel: { no: "Lederne i en menighet", am: "የደብሩ አስተዳዳሪዎችና አገልጋዮች" },
      punkter: [
        {
          tekst: {
            no: "Hver kirke har en leder (አስተዳዳሪ) og mange prester som hjelper ham. I byene blir lederen utnevnt. På landsbygda blir ofte den presten leder som de andre ser er best i liv og evner.",
            am: "እያንዳንዱ ደብር አስተዳዳሪና የሚረዱት ብዙ ካህናት አሉት። በከተሞች አስተዳዳሪው ይሾማል። በገጠር ግን ብዙ ጊዜ በሕይወቱና በችሎታው የተመሰከረለት ካህን አለቃ ይሆናል።",
          },
        },
        {
          tekst: {
            no: "Lederne for store kirker får ærestitler: ንቡረ እድ («den som hender er lagt på») for lederen av Aksum Tsion og Addis Alem Mariam, ሊቀ ሥልጣናት for lederen av Treenighetskatedralen i Addis Abeba, og titler som መልአከ ሰላም («fredens engel»), መልአከ ገነት («paradisets engel») og ሊቀ ሊቃውንት («de lærdes leder»).",
            am: "የታላላቅ አድባራት አስተዳዳሪዎች የክብር ስሞች ይሰጣቸዋል፤ የአክሱም ጽዮንና የአዲስ ዓለም ማርያም አስተዳዳሪ ንቡረ እድ፣ የአዲስ አበባ መንበረ ጸባዖት ቅድስት ሥላሴ ካቴድራል አስተዳዳሪ ሊቀ ሥልጣናት ይባላሉ። መልአከ ሰላም፣ መልአከ ገነት፣ መልአከ ኃይልና ሊቀ ሊቃውንት የመሳሰሉ የክብር ስሞችም አሉ።",
          },
        },
        {
          tekst: {
            no: "ገበዝ er presten som har ansvar for kirkas eiendom og ting. Sangerne (ደባትር) synger hymnene, og søndagsskolens ungdom (መዘምራን) synger og lærer. I dag har menighetene også et menighetsråd (ሰበካ ጉባኤ) der prester og legfolk arbeider sammen.",
            am: "ገበዝ የቤተ ክርስቲያኑን ንብረት የሚጠብቅ ካህን ነው። ደባትር ያሬዳዊ ዜማን ያዜማሉ፤ የሰንበት ትምህርት ቤት መዘምራንም ይዘምራሉ፤ ይማራሉም። ዛሬ በየደብሩ ካህናትና ምእመናን በአንድነት የሚያገለግሉበት ሰበካ ጉባኤ አለ።",
          },
          vers: ["1Chr 15:16"],
        },
      ],
    },
    {
      id: "klaer",
      tittel: { no: "Klær og kjennetegn", am: "አለባበስና መለያዎች" },
      punkter: [
        {
          tekst: {
            no: "Under ቅዳሴ har prester og diakoner hellige klær (ልብሰ ተክህኖ), og de skal være hvite. Gud sa til Moses: «Du skal gjøre hellige klær for Aron, din bror, til ære og til pryd.»",
            am: "በቅዳሴ ጊዜ ካህናትና ዲያቆናት ልብሰ ተክህኖ ይለብሳሉ፤ ልብሱም ነጭ ይሁን። እግዚአብሔር ሙሴን «የተቀደሰውንም ልብስ ለክብርና ለጌጥ እንዲሆን ለወንድምህ ለአሮን ሥራለት» አለው።",
          },
          vers: ["Exod 28:2", "Ps 132:9"],
        },
        {
          tekst: {
            no: "Til vanlig bærer en gift prest en hvit turban (ጥምጣም), og en munk en lue (ቆብ). Prestene har alltid med seg et lite håndkors (የእጅ መስቀል) som de velsigner med.",
            am: "በዘወትር ቀን ባለ ትዳር ካህናት ጥምጣም ይጠመጥማሉ፤ መነኮሳት ቆብ ይደፋሉ። ካህናት የሚባርኩበትን የእጅ መስቀል ሁልጊዜ ይይዛሉ።",
          },
          vers: ["Num 6:23"],
        },
        {
          tekst: {
            no: "Munkens klær er bilder på Kristi lidelse: luen (ቆብ) på tornekronen, kjortelen (ቀሚስ) på kappen soldatene hengte på ham, beltet (ቅናት) på tauet han ble bundet med, og አስኬማ på kroppen hans.",
            am: "የመነኩሴ ልብስ የክርስቶስ መከራ ምሳሌ ነው፤ ቆቡ የአክሊለ ሦክ፣ ቀሚሱ የከለሜዳ፣ ቅናቱ የሐብል (የታሰረበት ገመድ)፣ አስኬማው የሰውነቱ ምሳሌ ነው።",
          },
          vers: ["Matt 27:28-29", "John 18:12"],
        },
      ],
    },
    {
      id: "munker",
      tittel: { no: "Munker og nonner (ምንኩስና)", am: "ምንኩስና" },
      punkter: [
        {
          tekst: {
            no: "Ordet መነኮሰ betyr å skille seg fra verden, å dø fra verden. En munk (መነኩሴ) har forlatt familie, eiendom og ekteskap for å leve for Gud i bønn, faste og arbeid. Nonner kalles መነኮሳይያት.",
            am: "«መንኮሰ» ማለት ከዓለም ተለየ፣ ለዓለም ሞተ ማለት ነው። መነኩሴ ቤተሰቡን፣ ንብረቱንና ትዳርን ትቶ በጸሎት፣ በጾምና በሥራ ለእግዚአብሔር የሚኖር ነው። ሴቶች መነኮሳት መነኮሳይያት ይባላሉ።",
          },
          vers: ["Matt 19:21", "Luke 18:29-30"],
        },
        {
          tekst: {
            no: "Forbildene er profetene Elia og Johannes døperen, som levde i ørkenen. Johannes hadde klær av kamelhår og et lærbelte. Også Jesus gikk ut i ørkenen og fastet i førti dager.",
            am: "የመነኮሳት አብነቶች በበረሓ የኖሩት ነቢዩ ኤልያስና መጥምቁ ዮሐንስ ናቸው። ዮሐንስ የግመል ጠጕር ልብስ ለብሶ ወገቡን በጠፍር ታጥቆ ነበር። ጌታችንም ወደ ምድረ በዳ ሄዶ አርባ ቀን ጾመ።",
          },
          vers: ["Matt 3:4", "Luke 1:80", "Matt 4:1-2"],
        },
        {
          tekst: {
            no: "Munkelivet ble ordnet i Egypt av den hellige Antonius (251–356) og Pakomius. De ni hellige brakte det til Etiopia på 400-tallet og oversatte reglene deres til ge'ez. På 1200-tallet ble det fornyet av Iyesus Mo'a, Tekle Haymanot og Ewostatewos.",
            am: "ምንኩስና በግብፅ በታላቁ አባ እንጦንስ (፪፻፶፩–፫፻፶፮) እና በአባ ጳኩሚስ ተደራጀ። ተስዓቱ ቅዱሳን በ፭ኛው መቶ ክፍለ ዘመን ወደ ኢትዮጵያ አመጡት፤ ሥርዓታቸውንም ወደ ግእዝ ተረጐሙ። በ፲፫ኛው መቶ ክፍለ ዘመን በአቡነ ኢየሱስ ሞዐ፣ በአቡነ ተክለ ሃይማኖትና በአቡነ ኤዎስጣቴዎስ ታደሰ።",
          },
        },
        {
          tekst: {
            no: "Den som vil bli munk, tjener først i klosteret: hugger ved, henter vann, gjeter dyr og baker brød for munkene. Først når han er prøvd, får han munkeklærne.",
            am: "ሊመነኩስ የፈለገ አስቀድሞ በገዳሙ እንጨት ሰብሮ፣ ውኃ ቀድቶ፣ ከብት ነድቶ፣ ዳቤ ጋግሮ በእርድና መነኮሳትን ያገለግላል። ከተፈተነ በኋላ ይመነኩሳል።",
          },
        },
        {
          tekst: {
            no: "Noen munker lever sammen og deler alt, slik de første kristne hadde alt felles. Andre bor hver for seg og møtes til bønn. Eremitter (ባሕታውያን) bor alene i en hytte eller en hule.",
            am: "አንዳንድ መነኮሳት በአንድነት ይኖራሉ፤ የመጀመሪያዎቹ ክርስቲያኖች ሁሉን በጋራ እንዳደረጉ ሁሉን ይካፈላሉ። ሌሎች ለየብቻ ኖረው ለጸሎት ይሰበሰባሉ። ባሕታውያን ደግሞ በጎጆ ወይም በዋሻ ብቻቸውን ይኖራሉ።",
          },
          vers: ["Acts 2:44-45", "Heb 11:38"],
        },
        {
          tekst: {
            no: "Også kvinner blir nonner, slik den hellige Kristos Semra og Walatta Petros. Mange mødre og fedre blir munker og nonner når de er blitt eldre, etter å ha levd i ekteskap. Profetinnen Anna tjente Gud med faste og bønn natt og dag.",
            am: "ሴቶችም እንደ ቅድስት ክርስቶስ ሠምራና ቅድስት ወለተ ጴጥሮስ ይመነኩሳሉ። ብዙ እናቶችና አባቶችም በሕግ ኖረው በዕድሜያቸው ይመነኩሳሉ። ነቢዪቱ ሐናም ሌሊትና ቀን በጾምና በጸሎት እግዚአብሔርን ታገለግል ነበር።",
          },
          vers: ["Luke 2:36-37"],
        },
        {
          tekst: {
            no: "En munk skal leve stille. Kirkas bøker sier at han ikke skal le og spøke, ikke vandre fra sted til sted, ikke bo i hus der kvinner bor, og ikke tenke på klær og mat mer enn han trenger.",
            am: "መነኩሴ በጸጥታ ሊኖር ይገባዋል። መጽሐፈ ምዕዳን «መነኩሴ አይሳቅ፤ ፌዝ ነገር አይናገር፤ ሀገር ለሀገር መንደር ለመንደር አይዙር፤ ሴት ካለችበት ቤት አይደር» ይላል፤ ልብስና ጉርስም ቢያስብ ጥቂት የሚበቃው ይሁን።",
          },
          vers: ["1Cor 7:32-34"],
        },
      ],
    },
    {
      id: "klostre",
      tittel: { no: "Kjente klostre", am: "ታላላቅ ገዳማት" },
      ingress: {
        no: "Det sies at Etiopia har mer enn 800 klostre. Klostrene har vært skoler, har tatt vare på bøkene og ikonene, og har hjulpet fattige.",
        am: "በኢትዮጵያ ከ፰፻ በላይ ገዳማት እንዳሉ ይነገራል። ገዳማት የትምህርት ቦታዎች ሆነዋል፤ መጻሕፍትንና ሥዕላትን ጠብቀዋል፤ ድሆችንም ረድተዋል።",
      },
      punkter: [
        {
          tekst: {
            no: "ደብረ ዳሞ i Tigray ble grunnlagt av abune Aregawi, en av de ni hellige. Klosteret ligger på toppen av et bratt fjell. Man kommer opp ved å klatre i et tau, og bare menn får gå opp. Aregawis minnedag er 14. ጥቅምት.",
            am: "ደብረ ዳሞ በትግራይ የሚገኝ ሲሆን ከተስዓቱ ቅዱሳን አንዱ በሆኑት በአቡነ አረጋዊ ተመሠረተ። ገዳሙ በገደላማ ተራራ ጫፍ ላይ ነው፤ የሚወጣውም በገመድ ነው፤ የሚገቡትም ወንዶች ብቻ ናቸው። የአቡነ አረጋዊ መታሰቢያ ጥቅምት ፲፬ ነው።",
          },
        },
        {
          tekst: {
            no: "ደብረ ሊባኖስ i Shewa ble grunnlagt av abune Tekle Haymanot på 1200-tallet. Lederen der kaltes ዕጨጌ. Vi feirer Tekle Haymanots fødsel 24. ታኅሣሥ og hans død 24. ነሐሴ.",
            am: "ደብረ ሊባኖስ በሸዋ በ፲፫ኛው መቶ ክፍለ ዘመን በአቡነ ተክለ ሃይማኖት ተመሠረተ። የገዳሙ አለቃ ዕጨጌ ይባል ነበር። የአቡነ ተክለ ሃይማኖት ልደት ታኅሣሥ ፳፬፣ ዕረፍታቸውም ነሐሴ ፳፬ ይከበራል።",
          },
        },
        {
          tekst: {
            no: "ዋልድባ i nord er kjent for et svært strengt liv. Munkene bor spredt over et stort område og lever mye alene. Den hellige abba Samuel av Waldeba levde der i bønn og faste og var kjent for sin kjærlighet til Maria.",
            am: "ዋልድባ በጽኑ ገድሉ የታወቀ ገዳም ነው። መነኮሳቱ በሰፊ ቦታ ተበታትነው ብዙ ጊዜ ለብቻቸው ይኖራሉ። ጻድቁ አባ ሳሙኤል ዘዋልድባ በዚያ በጸሎትና በጾም ኖረ፤ ለእመቤታችን በነበረው ፍቅሩም ይታወቃል።",
          },
        },
        {
          tekst: {
            no: "ዝቋላ er et fjell sør for Addis Abeba med en innsjø i krateret på toppen. Der levde abune Gebre Menfes Kidus. Tradisjonen sier at han sto i innsjøen i hundre år og ba om nåde for Etiopia. Hans minnedag er 5. መጋቢት.",
            am: "ዝቋላ ከአዲስ አበባ በስተ ደቡብ ያለ ተራራ ሲሆን በጫፉ ላይ ሐይቅ አለ። በዚያ አቡነ ገብረ መንፈስ ቅዱስ ኖሩ። ለኢትዮጵያውያን ምሕረትን እየለመኑ በሐይቁ ውስጥ መቶ ዓመት እንደ ቆሙ ትውፊት ይናገራል። የዕረፍታቸው መታሰቢያ መጋቢት ፭ ነው።",
          },
        },
        {
          tekst: {
            no: "Tanasjøen har mange klostre på øyene og langs bredden. ጣና ቂርቆስ regnes som et sted der Gud ble tilbedt allerede i Det gamle testamentets tid. Tradisjonen sier at paktens ark var der en tid før den kom til Aksum. Den hellige Kristos Semra ligger begravet i sitt kloster ved sjøen.",
            am: "በጣና ሐይቅ ደሴቶችና ዳርቻ ብዙ ገዳማት አሉ። ጣና ቂርቆስ ከብሉይ ኪዳን ዘመን ጀምሮ የአምልኮ ቦታ እንደ ነበረ ይነገራል። ታቦተ ጽዮን ወደ አክሱም ከመሄዷ በፊት በዚያ እንደ ቆየች ትውፊት ይናገራል። ቅድስት ክርስቶስ ሠምራም በጣና ዳር ባለው ገዳሟ ተቀብራለች።",
          },
        },
      ],
    },
    {
      id: "valfart",
      tittel: { no: "Valfart (ንግደት)", am: "ንግደት (መንፈሳዊ ጉዞ)" },
      punkter: [
        {
          tekst: {
            no: "I Det gamle testamentet gikk Israel opp til Herrens hus tre ganger i året. Jesu foreldre dro hvert år til Jerusalem til påske. David sier: «Jeg gleder mig ved dem som sier til mig: Vi vil gå til Herrens hus.»",
            am: "በብሉይ ኪዳን እስራኤል በዓመት ሦስት ጊዜ ወደ እግዚአብሔር ቤት ይወጡ ነበር። የጌታችን ወላጆችም በየዓመቱ ለፋሲካ ወደ ኢየሩሳሌም ይሄዱ ነበር። ዳዊት «ወደ እግዚአብሔር ቤት እንሂድ ባሉኝ ጊዜ ደስ አለኝ» ይላል።",
          },
          vers: ["Deut 16:16", "Luke 2:41", "Ps 122:1-2"],
        },
        {
          tekst: {
            no: "Den etiopiske hoffmannen reiste helt til Jerusalem for å tilbe Gud. På hjemveien ble han døpt. Slik har etiopiere reist til hellige steder i mange hundre år.",
            am: "ኢትዮጵያዊው ጃንደረባ ለመስገድ ወደ ኢየሩሳሌም ሄዶ ነበር፤ ሲመለስም ተጠመቀ። ኢትዮጵያውያንም ለብዙ መቶ ዓመታት እንዲሁ ወደ ቅዱሳት መካናት ተጉዘዋል።",
          },
          vers: ["Acts 8:27", "Acts 8:38"],
        },
        {
          tekst: {
            no: "En valfart er en åndelig reise, ikke en ferie. Mahibere Kidusan kaller sine valfarter ሐዊረ ሕይወት, «livets reise». Vi forbereder oss med skriftemål og faste, ber og hører undervisning underveis, og tar imot velsignelse på stedet.",
            am: "ንግደት መንፈሳዊ ጉዞ ነው እንጂ ለመዝናናት የሚደረግ ጉዞ አይደለም። ማኅበረ ቅዱሳን መንፈሳዊ ጉዞውን «ሐዊረ ሕይወት» (የሕይወት ጉዞ) ይለዋል። በንስሐና በጾም እንዘጋጃለን፤ በመንገድ እንጸልያለን፤ ትምህርትም እንሰማለን፤ በቦታውም በረከት እንቀበላለን።",
          },
          vers: ["Isa 2:3"],
        },
        {
          tekst: {
            no: "Vi viser respekt for de hellige stedene. Vi følger reglene der, kler oss ordentlig og tar av oss skoene der det kreves. Gud sa til Moses: «Dra dine sko av dine føtter! For det sted du står på, er hellig jord.»",
            am: "ቅዱሳት መካናትን እናከብራለን። የቦታውን ሥርዓት እንጠብቃለን፤ በሥርዓት እንለብሳለን፤ በሚገባበትም ጫማችንን እናወልቃለን። እግዚአብሔር ሙሴን «አንተ የቆምህባት ስፍራ የተቀደሰች መሬት ናትና ጫማህን ከእግርህ አውጣ» አለው።",
          },
          vers: ["Exod 3:5"],
        },
        {
          tekst: {
            no: "Livet selv er en reise mot himmelen. «For vi har ikke her en blivende stad, men søker den kommende.»",
            am: "ሕይወታችን ራሱ ወደ ሰማያዊት ኢየሩሳሌም የሚደረግ ጉዞ ነው። «በዚህ የምትኖር ከተማ የለችንምና፥ ነገር ግን ትመጣ ዘንድ ያላትን እንፈልጋለን።»",
          },
          vers: ["Heb 13:14", "Heb 11:13"],
        },
      ],
    },
    {
      id: "steder",
      tittel: { no: "Store valfartsdager", am: "ታላላቅ የንግደት በዓላት" },
      punkter: [
        {
          tekst: {
            no: "ኅዳር ጽዮን, 21. ኅዳር: Mange tusen pilegrimer går til Aksum Tsion Mariam, der kirka sier at paktens ark er.",
            am: "ኅዳር ጽዮን (ኅዳር ፳፩)፦ ታቦተ ጽዮን ወደምትገኝበት ወደ አክሱም ጽዮን ማርያም ብዙ ሺህ ነጋድያን ይጓዛሉ።",
          },
          vers: ["Ps 132:7-8"],
        },
        {
          tekst: {
            no: "ገና, julaften 29. ታኅሣሥ: Pilegrimer fra hele verden samles i Lalibela og feirer Kristi fødsel ved klippekirkene.",
            am: "ገና (ታኅሣሥ ፳፱)፦ ከዓለም ሁሉ የሚመጡ ነጋድያን በላሊበላ ተሰብስበው በዓለ ልደትን በውቅር አብያተ ክርስቲያናቱ ያከብራሉ።",
          },
          vers: ["Luke 2:15"],
        },
        {
          tekst: {
            no: "ቁልቢ ገብርኤል i Hararghe, øst i landet: Særlig 19. ታኅሣሥ, dagen da kirka minnes at engelen Gabriel reddet de tre unge mennene fra ildovnen, går store skarer dit. Mange går lange strekninger til fots.",
            am: "ቁልቢ ቅዱስ ገብርኤል (በሐረርጌ)፦ በተለይ ቅዱስ ገብርኤል ሦስቱን ሕፃናት ከእሳት ያዳነበት ታኅሣሥ ፲፱ ብዙ ሕዝብ ይሄዳል፤ ብዙዎችም ረጅም መንገድ በእግራቸው ይጓዛሉ።",
          },
          vers: ["Dan 3:25"],
        },
        {
          tekst: {
            no: "ግሸን ማርያም i Wollo, 21. መስከረም: Her oppbevares en bit av Kristi kors (ግማደ መስቀል) som kong Zara Yaqob la på fjellet Gishen. Pilegrimene skrifter før de går.",
            am: "ግሸን ማርያም (በወሎ፣ መስከረም ፳፩)፦ ዐፄ ዘርዐ ያዕቆብ በግሸን አምባ ያስቀመጡት ግማደ መስቀል በዚያ ይገኛል። ነጋድያን ንስሐ ገብተው ይሄዳሉ።",
          },
          vers: ["Gal 6:14"],
        },
        {
          tekst: {
            no: "Mange går også til ዝቋላ på abune Gebre Menfes Kidus' dag 5. መጋቢት, til ደብረ ሊባኖስ på Tekle Haymanots dager, og til Jerusalem, der kirka har et kloster og et bispedømme, særlig i påsketida.",
            am: "ብዙዎች በአቡነ ገብረ መንፈስ ቅዱስ በዓል መጋቢት ፭ ወደ ዝቋላ፣ በአቡነ ተክለ ሃይማኖት በዓላት ወደ ደብረ ሊባኖስ፣ በተለይ በትንሣኤ ሰሞን ደግሞ ቤተ ክርስቲያናችን ገዳምና ሀገረ ስብከት ወዳላት ወደ ኢየሩሳሌም ይጓዛሉ።",
          },
          vers: ["Luke 24:52-53"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Fetha Negest om munkene", am: "ፍትሐ ነገሥት ስለ መነኮሳት" },
      tekst: {
        no: "«Munkene er engler på jorden og mennesker i himmelen.»",
        am: "«መነኮሳት በምድር ያሉ መላእክት በሰማይ ያሉ ሰዎች ናቸው።»",
      },
      kilde: "ፍትሐ ነገሥት መንፈሳዊ አንቀጽ ፲ (sitert i Mahibere Kidusan: «‹‹ነገን ዛሬ እንሥራ››», del 6)",
    },
    {
      navn: { no: "Rådenes bok (መጽሐፈ ምዕዳን)", am: "መጽሐፈ ምዕዳን" },
      tekst: {
        no: "Å si «jeg vil bli munk» uten først å ha tjent munkene, er å begynne i feil ende. Tjenesten er større enn alt, og det er godt å bli munk etter at man har tjent.",
        am: "«መነኮሳትን ሳይረዱ ‹እመነኩሳለሁ› ማለት ሳይበጡ መታገም ነው። ከሁሉም እርድና ይበልጣልና ከእርድና በኋላ ቢመነኩስ ይጠቅማል።»",
      },
      kilde: "መጽሐፈ ምዕዳን s. ፻፶ (sitert i Mahibere Kidusan: «‹‹ነገን ዛሬ እንሥራ››», del 7)",
    },
    {
      navn: { no: "Den hellige Mar Isak (ማር ይስሐቅ)", am: "ማር ይስሐቅ" },
      tekst: {
        no: "«La munken heller bli skjelt ut enn selv skjelle ut. La ham heller bli slått enn selv slå. La ham heller dø enn baktale noen.»",
        am: "«ይስደቡት እንጂ አይሳደብ፤ ይምቱት እንጂ አይማታ፤ ይሙት እንጂ ማንንም አይማ።»",
      },
      kilde: "መጽሐፈ ማር ይስሐቅ (sitert i Mahibere Kidusan: «‹‹ነገን ዛሬ እንሥራ››», del 8)",
    },
    {
      navn: { no: "Munkenes bygning (ሕንጻ መነኮሳት)", am: "ሕንጻ መነኮሳት" },
      tekst: {
        no: "Hjertet blir mørkt av fire ting: å hate sin neste, å forakte andre, misunnelse og sjalusi, og å si stygge ord som setter folk opp mot hverandre.",
        am: "«ባልንጀራውን በመጥላት፣ ሰዎችን በማቃለል፣ በምቀኝነትና በቅናት፣ ሰዎችን በማክፋፋት ተገቢ ያልሆነ ቃል በመናገር» በእነዚህ በአራቱ ልብ ይጨልማል።",
      },
      kilde: "ሕንጻ መነኮሳት ምዕ. ፳፥፫ (sitert i Mahibere Kidusan: «‹‹ነገን ዛሬ እንሥራ››», del 8)",
    },
  ],
  ord: [
    { ord: "ፓትርያርክ", forklaring: { no: "patriark, far for hele kirka", am: "የቤተ ክርስቲያን ርእሰ ሊቃነ ጳጳሳት" } },
    { ord: "ብፁዕ ወቅዱስ", forklaring: { no: "«salig og hellig», tiltale til patriarken", am: "ለፓትርያርኩ የሚሰጥ የክብር መጠሪያ" } },
    { ord: "ሊቀ ጳጳስ · ጳጳስ", forklaring: { no: "erkebiskop · biskop", am: "የሀገረ ስብከት አባት" } },
    { ord: "አቡነ", forklaring: { no: "«vår far», brukt foran navnet til biskoper og hellige fedre", am: "«አባታችን»" } },
    { ord: "ዕጨጌ", forklaring: { no: "tidligere leder for munkene og kirkas saker, i dag en av patriarkens titler", am: "የመነኮሳት አለቃ የነበረ ማዕረግ" } },
    { ord: "ቆሞስ", forklaring: { no: "munk som er prest og leder", am: "ቅስና ያለው አለቃ መነኩሴ" } },
    { ord: "ቄስ · ቀሲስ · ካህን", forklaring: { no: "prest", am: "ቀሳውስት" } },
    { ord: "ዲያቆን · ንፍቀ ዲያቆን", forklaring: { no: "diakon · underdiakon", am: "ዲያቆናት" } },
    { ord: "ልብሰ ተክህኖ", forklaring: { no: "prestenes hellige klær under gudstjenesten", am: "የአገልግሎት ልብስ" } },
    { ord: "ገዳም", forklaring: { no: "kloster", am: "መነኮሳት የሚኖሩበት ቦታ" } },
    { ord: "መነኩሴ · መነኮሳይያት", forklaring: { no: "munk · nonner", am: "ከዓለም የተለዩ" } },
    { ord: "ባሕታዊ", forklaring: { no: "eremitt som lever alene", am: "ለብቻው የሚኖር መናኝ" } },
    { ord: "ቆብ · ቅናት · አስኬማ", forklaring: { no: "munkens lue, belte og አስኬማ", am: "የምንኩስና ልብሶች" } },
    { ord: "ንግደት", forklaring: { no: "valfart, reise til et hellig sted", am: "ወደ ቅዱስ ቦታ መጓዝ" } },
    { ord: "ነጋድያን", forklaring: { no: "pilegrimer", am: "ወደ ቅዱሳት መካናት የሚጓዙ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva er de tre trinnene i prestetjenesten?", am: "ሦስቱ የክህነት መዓርጋት እነማን ናቸው?" },
      svar: { no: "Diakon, prest og biskop.", am: "ዲቁና፣ ቅስናና ጵጵስና።" },
    },
    {
      sporsmal: { no: "Hva kaller vi patriarken og biskopene?", am: "ፓትርያርኩንና ጳጳሳትን እንዴት እንጠራቸዋለን?" },
      svar: {
        no: "Patriarken kaller vi ብፁዕ ወቅዱስ. Biskopene kaller vi ብፁዕ አቡነ og navnet.",
        am: "ፓትርያርኩን «ብፁዕ ወቅዱስ»፣ ጳጳሳትን «ብፁዕ አቡነ» ብለን ከስማቸው ጋር እንጠራቸዋለን።",
      },
    },
    {
      sporsmal: { no: "Hva betyr ordet መነኮሰ?", am: "«መንኮሰ» ማለት ምን ማለት ነው?" },
      svar: {
        no: "Å skille seg fra verden, å dø fra verden for å leve for Gud.",
        am: "ከዓለም መለየት፣ ለእግዚአብሔር ለመኖር ለዓለም መሞት ማለት ነው።",
      },
    },
    {
      sporsmal: { no: "Hva minner munkens lue (ቆብ) om?", am: "የመነኩሴ ቆብ የምን ምሳሌ ነው?" },
      svar: { no: "Tornekronen Jesus bar.", am: "ጌታችን የተቀዳጀው የአክሊለ ሦክ ምሳሌ ነው።" },
    },
    {
      sporsmal: { no: "Hvem grunnla Debre Libanos?", am: "ደብረ ሊባኖስን የመሠረቱት ማን ናቸው?" },
      svar: { no: "Abune Tekle Haymanot, på 1200-tallet.", am: "አቡነ ተክለ ሃይማኖት በ፲፫ኛው መቶ ክፍለ ዘመን።" },
    },
    {
      sporsmal: { no: "Hvordan forbereder vi oss til en valfart?", am: "ለንግደት እንዴት እንዘጋጃለን?" },
      svar: {
        no: "Med skriftemål, faste og bønn. Vi reiser for å be og få velsignelse, ikke for å more oss.",
        am: "በንስሐ፣ በጾምና በጸሎት። የምንጓዘው ለጸሎትና ለበረከት ነው እንጂ ለመዝናናት አይደለም።",
      },
    },
  ],
  kilder: [
    { navn: "ethiopianorthodox.org: The Hierarchy (P.K. Matthew, etter «The Church of Ethiopia – A Panorama of History and Spiritual Life»)", url: "https://www.ethiopianorthodox.org/english/ethiopian/hierarchy.html" },
    { navn: "Addis Abeba bispedømme (eotcaa.org): Monasticism in the Ethiopian Orthodox Church – A Brief Introduction", url: "https://eotcaa.org/e/monasticism-in-the-ethiopian-orthodox-churcha-brief-introduction/" },
    { navn: "Mahibere Kidusan: «‹‹ነገን ዛሬ እንሥራ››» del 6 (ክብረ ምንኩስና)", url: "https://eotcmk.org/a/?p=29765" },
    { navn: "Mahibere Kidusan: «‹‹ነገን ዛሬ እንሥራ››» del 7–8 (munkenes regler)", url: "https://eotcmk.org/a/?p=30022" },
    { navn: "Mahibere Kidusan: «ዕረፍቱ ለአባ ሳሙኤል ዘዋልድባ»", url: "https://eotcmk.org/a/?p=24283" },
    { navn: "Mahibere Kidusan: «አቡነ አረጋዊ ዘደብረ ዳሞ» (etter ስንክሳር ጥቅምት ፲፬)", url: "https://eotcmk.org/a/?p=31490" },
    { navn: "Mahibere Kidusan: «በዓለ ልደቱ ለአቡነ ገብረ መንፈስ ቅዱስ» og «ተዝካረ ዕረፍቱ ለአቡነ ገብረ መንፈስ ቅዱስ»", url: "https://eotcmk.org/a/?p=29170" },
    { navn: "Mahibere Kidusan: «ልደተ አቡነ ተክለ ሃይማኖት»", url: "https://eotcmk.org/a/?p=29109" },
    { navn: "Mahibere Kidusan: «በዓለ ቅዱስ ገብርኤል» (ቁልቢ)", url: "https://eotcmk.org/a/?p=29100" },
    { navn: "Mahibere Kidusan: «ግሸን ማርያም»", url: "https://eotcmk.org/a/?p=31422" },
    { navn: "Mahibere Kidusan: «ምክረ አበው በሐዊረ ሕይወት»", url: "https://eotcmk.org/a/?p=11003" },
    { navn: "Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን» (rekkefølgen ved nattverden)", url: "https://eotcmk.org/a/?p=28873" },
    { navn: "The Liturgy of the Ethiopian Church (Marcos Daoud, rev. erkebiskop Yesehaq), om hvite klær under ቅዳሴ" },
  ],
  utkast: true,
};
