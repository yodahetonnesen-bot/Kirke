import type { Fortelling } from "./typer";

// Fortellinger fra Det gamle testamentet, gjenfortalt med enkle ord etter den norske bibelen (1930)
// og den amhariske bibelen (1954/1962). Lærdommene følger kirkas vanlige forklaring (typologi) slik
// den brukes i søndagsskolen, ውዳሴ ማርያም og kirkeårets høytider.
//
// Usikkert: Ordlyden om ኪዳነ አዳም («etter fem og en halv dag», dvs. 5500 år) er kirkas lære, ikke bibeltekst.
//   Bør kontrolleres av en prest.
// Usikkert: At ሐምሌ ሥላሴ (7. ሐምሌ) minnes Abrahams gjestfrihet mot de tre gjestene, bør kontrolleres.
// Usikkert: At kirka minnes erkeengelen Gabriel som reddet de tre unge mennene fra ovnen (ታኅሣሥ ገብርኤል, 19. ታኅሣሥ),
//   bør kontrolleres.
// Usikkert: Tradisjonen fra ክብረ ነገሥት om dronningen av Saba (ማክዳ), Menelik I og ታቦተ ጽዮን i Aksum er fortalt
//   som tradisjon, ikke som bibeltekst. Ordlyden bør kontrolleres av en prest.
// Usikkert: At Jakobs stige og den brennende busken er bilder på Maria, er hentet fra ውዳሴ ማርያም / ቅዳሴ ማርያም;
//   bør kontrolleres om formuleringen er presis nok.
// Usikkert: ዕፀ ሳቤቅ (busken der væren satt fast) brukes slik den amhariske bibelen har det.
export const GT: Fortelling[] = [
  {
    slug: "skapelsen",
    testament: "gt",
    nr: 1,
    tittel: { no: "Gud skaper verden", am: "እግዚአብሔር ዓለምን ፈጠረ" },
    ref: "Gen 1:1-31",
    tekst: [
      {
        no: "I begynnelsen fantes bare Gud. Det fantes ingen himmel, ingen jord og ingen mennesker. Så skapte Gud himmelen og jorden av ingenting.",
        am: "በመጀመሪያ እግዚአብሔር ብቻ ነበረ። ሰማይም ምድርም ሰውም አልነበሩም። እግዚአብሔርም ከምንም ሰማይንና ምድርን ፈጠረ።",
      },
      {
        no: "Gud sa: «Det bli lys!» Og det ble lys. Gud skapte bare ved å tale. Han skilte lyset fra mørket og kalte lyset dag og mørket natt.",
        am: "እግዚአብሔርም «ብርሃን ይሁን» አለ፤ ብርሃንም ሆነ። እግዚአብሔር በቃሉ ብቻ ፈጠረ። ብርሃኑን ከጨለማ ለየ፤ ብርሃኑን ቀን፣ ጨለማውን ሌሊት ብሎ ጠራው።",
      },
      {
        no: "På de neste dagene skapte Gud himmelen, havet og det tørre landet, gress og trær, solen, månen og stjernene, fiskene i havet, fuglene i luften og alle dyrene på jorden.",
        am: "በቀጣዮቹ ቀናት እግዚአብሔር ሰማይን፣ ባሕርንና የብሱን፣ ሣርንና ዛፎችን፣ ፀሐይን፣ ጨረቃንና ከዋክብትን፣ የባሕር ዓሦችን፣ የሰማይ ወፎችንና የምድር እንስሳትን ሁሉ ፈጠረ።",
      },
      {
        no: "Til slutt, på den sjette dagen, skapte Gud mennesket i sitt bilde, som mann og kvinne. Han velsignet dem og ga dem ansvar for å ta vare på jorden.",
        am: "በመጨረሻም በስድስተኛው ቀን እግዚአብሔር ሰውን በመልኩ ወንድና ሴት አድርጎ ፈጠረ። ባረካቸውም፤ ምድርን እንዲጠብቁና እንዲገዙም ኃላፊነት ሰጣቸው።",
      },
      {
        no: "Gud så på alt han hadde skapt, og se, det var svært godt. På den sjuende dagen hvilte Gud fra alt arbeidet sitt.",
        am: "እግዚአብሔርም የፈጠረውን ሁሉ አየ፤ እነሆም እጅግ መልካም ነበረ። በሰባተኛውም ቀን ከሥራው ሁሉ ዐረፈ።",
      },
    ],
    laerdom: {
      no: "Kirka lærer at Gud skapte alt av ingenting, og at alt han skapte er godt. Når Gud sier «La oss skape mennesker», ser kirka at Faderen, Sønnen og Den hellige ånd – den hellige treenighet – skapte sammen.",
      am: "ቤተ ክርስቲያን እግዚአብሔር ሁሉን ከምንም እንደ ፈጠረና የፈጠረውም ሁሉ መልካም እንደ ሆነ ታስተምራለች። እግዚአብሔር «ሰውን እንፍጠር» ሲል አብ ወልድ መንፈስ ቅዱስ በአንድነት እንደ ፈጠሩ፣ ማለትም የቅድስት ሥላሴን ምሥጢር እናያለን።",
    },
    minnevers: "Gen 1:1",
    sporsmal: [
      {
        sporsmal: { no: "Hva skapte Gud verden av?", am: "እግዚአብሔር ዓለምን ከምን ፈጠረ?" },
        svar: { no: "Av ingenting. Han skapte bare ved å tale.", am: "ከምንም ፈጠረ። በቃሉ ብቻ ፈጠረ።" },
      },
      {
        sporsmal: { no: "Hvilken dag skapte Gud mennesket?", am: "እግዚአብሔር ሰውን በስንተኛው ቀን ፈጠረ?" },
        svar: { no: "På den sjette dagen, i sitt eget bilde.", am: "በስድስተኛው ቀን በመልኩ ፈጠረው።" },
      },
      {
        sporsmal: { no: "Hva gjorde Gud på den sjuende dagen?", am: "እግዚአብሔር በሰባተኛው ቀን ምን አደረገ?" },
        svar: { no: "Han hvilte fra arbeidet sitt.", am: "ከሥራው ሁሉ ዐረፈ።" },
      },
    ],
  },
  {
    slug: "adam-og-eva",
    testament: "gt",
    nr: 2,
    tittel: { no: "Adam og Eva i paradiset", am: "አዳምና ሔዋን በገነት" },
    ref: "Gen 3:1-24",
    tekst: [
      {
        no: "Gud formet Adam av jord og blåste livets ånde inn i ham. Han plantet en vakker hage i Eden, paradiset, og lot Adam og Eva bo der. De kunne spise av alle trærne, bare ikke av treet til kunnskap om godt og ondt.",
        am: "እግዚአብሔር አዳምን ከምድር አፈር አበጀው፤ የሕይወትንም እስትንፋስ እፍ አለበት። በዔድንም ገነትን ተከለ፤ አዳምንና ሔዋንን በዚያ አኖራቸው። መልካምንና ክፉን ከሚያስታውቀው ዛፍ በቀር ከዛፎቹ ሁሉ መብላት ይችሉ ነበር።",
      },
      {
        no: "Men slangen, som var listigere enn alle dyrene, lurte Eva. Den sa: «Dere skal slett ikke dø. Dere blir som Gud.» Eva spiste av frukten og ga også til Adam, og han spiste.",
        am: "ነገር ግን ከአራዊት ሁሉ ይልቅ ተንኰለኛ የነበረው እባብ ሔዋንን አታለላት። «ሞትን አትሞቱም፤ እንደ እግዚአብሔርም ትሆናላችሁ» አላት። ሔዋንም ከፍሬው በላች፤ ለአዳምም ሰጠችው፤ እርሱም በላ።",
      },
      {
        no: "Da skjønte de at de var nakne, og de gjemte seg for Gud blant trærne. Gud ropte: «Adam, hvor er du?» Adam skyldte på Eva, og Eva skyldte på slangen.",
        am: "በዚያን ጊዜ ዕራቁታቸውን እንደ ሆኑ አወቁ፤ ከእግዚአብሔርም ፊት በገነት ዛፎች መካከል ተሸሸጉ። እግዚአብሔርም «አዳም ወዴት ነህ?» ብሎ ጠራው። አዳም ሔዋንን ወቀሰ፤ ሔዋንም እባቡን ወቀሰች።",
      },
      {
        no: "Fordi de ikke lød Gud, kom synden og døden inn i verden. Adam og Eva måtte gå ut av paradiset. Men Gud forlot dem ikke. Han laget klær til dem, og han sa at en etterkommer av kvinnen skulle knuse slangens hode.",
        am: "እግዚአብሔርን ስላልታዘዙ ኃጢአትና ሞት ወደ ዓለም ገቡ። አዳምና ሔዋንም ከገነት ወጡ። እግዚአብሔር ግን አልተዋቸውም። የቁርበት ልብስ አለበሳቸው፤ ከሴቲቱ ዘር የሚወለደው የእባቡን ራስ እንደሚቀጠቅጥም ተናገረ።",
      },
    ],
    laerdom: {
      no: "Kirka kaller løftet i 1 Mos 3,15 det første budskapet om Frelseren: Kristus, født av Jomfru Maria, knuste djevelens makt. Kirka lærer også at Gud ga Adam et løfte, ኪዳነ አዳም: etter «fem og en halv dag», det vil si 5500 år, skulle han komme og frelse ham.",
      am: "ቤተ ክርስቲያን በዘፍጥረት 3፥15 ያለውን ቃል ስለ መድኃኒታችን የተነገረ የመጀመሪያው የምሥራች አድርጋ ታየዋለች፤ ከድንግል ማርያም የተወለደው ክርስቶስ የዲያብሎስን ኃይል አጠፋ። ደግሞም እግዚአብሔር ለአዳም «ከአምስት ቀን ተኩል በኋላ» ማለትም ከአምስት ሺህ አምስት መቶ ዘመን በኋላ መጥቶ እንደሚያድነው ቃል ኪዳን እንደ ገባለት ታስተምራለች፤ ይህም ኪዳነ አዳም ይባላል።",
    },
    minnevers: "Gen 3:15",
    sporsmal: [
      {
        sporsmal: { no: "Hvilket tre fikk ikke Adam og Eva spise av?", am: "አዳምና ሔዋን ከየትኛው ዛፍ እንዳይበሉ ታዘዙ?" },
        svar: { no: "Treet til kunnskap om godt og ondt.", am: "መልካምንና ክፉን ከሚያስታውቀው ዛፍ።" },
      },
      {
        sporsmal: { no: "Hva spurte Gud da Adam gjemte seg?", am: "አዳም በተሸሸገ ጊዜ እግዚአብሔር ምን ብሎ ጠየቀው?" },
        svar: { no: "«Adam, hvor er du?»", am: "«አዳም ወዴት ነህ?»" },
      },
      {
        sporsmal: { no: "Hva er ኪዳነ አዳም?", am: "ኪዳነ አዳም ምንድን ነው?" },
        svar: {
          no: "Det er løftet kirka lærer at Gud ga Adam: at han selv skulle komme og frelse ham.",
          am: "እግዚአብሔር ራሱ መጥቶ እንደሚያድነው ለአዳም የገባለት ቃል ኪዳን ነው።",
        },
      },
    ],
  },
  {
    slug: "kain-og-abel",
    testament: "gt",
    nr: 3,
    tittel: { no: "Kain og Abel", am: "ቃየንና አቤል" },
    ref: "Gen 4:1-16",
    tekst: [
      {
        no: "Adam og Eva fikk to sønner. Kain var den eldste, og han dyrket jorden. Abel var den yngste, og han passet sauer.",
        am: "አዳምና ሔዋን ሁለት ወንዶች ልጆች ወለዱ። ታላቁ ቃየን ምድርን ያርስ ነበር። ታናሹ አቤል በግ ጠባቂ ነበረ።",
      },
      {
        no: "En dag ga begge brødrene en gave til Gud. Kain ga noe av det jorden ga. Abel ga det beste av de førstefødte lammene sine. Gud så med glede på Abel og gaven hans, men ikke på Kain og gaven hans.",
        am: "አንድ ቀን ሁለቱም ወንድሞች ለእግዚአብሔር መሥዋዕት አቀረቡ። ቃየን ከምድር ፍሬ አቀረበ። አቤል ግን ከበጎቹ በኵራት ምርጡን አቀረበ። እግዚአብሔርም ወደ አቤልና ወደ መሥዋዕቱ ተመለከተ፤ ወደ ቃየንና ወደ መሥዋዕቱ ግን አልተመለከተም።",
      },
      {
        no: "Kain ble sint. Gud advarte ham: «Synden ligger på lur ved døren, men du skal herske over den.» Men Kain hørte ikke. Han lokket Abel ut på marken og drepte ham.",
        am: "ቃየንም እጅግ ተናደደ። እግዚአብሔርም «ኃጢአት በደጅ ታደባለች፤ አንተ ግን በእርስዋ ንገሥባት» ብሎ አስጠነቀቀው። ቃየን ግን አልሰማም። አቤልን ወደ ሜዳ ወስዶ ገደለው።",
      },
      {
        no: "Gud spurte: «Hvor er Abel, din bror?» Kain svarte: «Jeg vet ikke. Skal jeg passe på broren min?» Gud sa: «Din brors blod roper til meg fra jorden.» Kain måtte flakke omkring på jorden, men Gud satte et merke på ham så ingen skulle drepe ham.",
        am: "እግዚአብሔርም «ወንድምህ አቤል ወዴት ነው?» አለው። ቃየንም «አላውቅም፤ የወንድሜ ጠባቂው እኔ ነኝን?» አለ። እግዚአብሔርም «የወንድምህ የደሙ ድምፅ ከምድር ወደ እኔ ይጮኻል» አለው። ቃየን በምድር ላይ ተቅበዝባዥ ሆነ፤ ማንም እንዳይገድለው ግን እግዚአብሔር ምልክት አደረገለት።",
      },
    ],
    laerdom: {
      no: "Gud ser på hjertet vårt når vi gir ham noe. Abel ga det beste han hadde, i tro. Kirka ser Abel, den uskyldige rettferdige som ble drept av sin bror, som et bilde på Kristus.",
      am: "እግዚአብሔር ስጦታችንን ስንሰጥ ልባችንን ያያል። አቤል ያለውን ምርጡን በእምነት አቀረበ። ቤተ ክርስቲያን በወንድሙ የተገደለውን ንጹሑን ጻድቅ አቤልን የክርስቶስ ምሳሌ አድርጋ ታየዋለች።",
    },
    minnevers: "Heb 11:4",
    sporsmal: [
      {
        sporsmal: { no: "Hva ga Abel til Gud?", am: "አቤል ለእግዚአብሔር ምን አቀረበ?" },
        svar: { no: "Det beste av de førstefødte lammene sine.", am: "ከበጎቹ በኵራት ምርጡን።" },
      },
      {
        sporsmal: { no: "Hva sa Gud til Kain om synden?", am: "እግዚአብሔር ስለ ኃጢአት ለቃየን ምን አለው?" },
        svar: {
          no: "At synden lå på lur ved døren, men at han skulle herske over den.",
          am: "ኃጢአት በደጅ እንደምታደባ፣ እርሱ ግን በእርስዋ ላይ መንገሥ እንዳለበት።",
        },
      },
    ],
  },
  {
    slug: "noah",
    testament: "gt",
    nr: 4,
    tittel: { no: "Noah og arken", am: "ኖኅና መርከቡ" },
    ref: "Gen 7:1-24",
    tekst: [
      {
        no: "Mange år senere var menneskene blitt svært onde. Men Noah var en rettferdig mann som vandret med Gud. Gud sa til Noah at han skulle bygge en stor ark av tre.",
        am: "ከብዙ ዘመን በኋላ ሰዎች እጅግ ክፉ ሆኑ። ኖኅ ግን ከእግዚአብሔር ጋር የሚሄድ ጻድቅ ሰው ነበረ። እግዚአብሔርም ኖኅን ከእንጨት ታላቅ መርከብ እንዲሠራ አዘዘው።",
      },
      {
        no: "Noah gjorde alt slik Gud hadde sagt. Han gikk inn i arken med kona si, de tre sønnene og konene deres – åtte mennesker i alt. Dyr av alle slag gikk også inn, to og to. Så lukket Gud døren.",
        am: "ኖኅም እግዚአብሔር እንዳዘዘው ሁሉ አደረገ። ከሚስቱ፣ ከሦስቱ ልጆቹና ከሚስቶቻቸው ጋር ወደ መርከቡ ገባ፤ በአጠቃላይ ስምንት ሰዎች ነበሩ። ከእንስሳትም ሁሉ ሁለት ሁለት ገቡ። እግዚአብሔርም በሩን ዘጋ።",
      },
      {
        no: "Det regnet i førti dager og førti netter. Vannet steg så høyt at det dekket selv de høyeste fjellene. Men arken fløt trygt på vannet.",
        am: "አርባ ቀንና አርባ ሌሊት ዝናብ ዘነበ። ውኃውም ረጃጅሞቹን ተራሮች እስኪሸፍን ድረስ ከፍ አለ። መርከቡ ግን በውኃው ላይ በሰላም ይንሳፈፍ ነበር።",
      },
      {
        no: "Da vannet sank, sendte Noah ut en due. Den kom tilbake med et olivenblad i nebbet. Noah gikk ut av arken og takket Gud med et offer. Gud satte regnbuen i skyene som et tegn på at han aldri mer skulle ødelegge jorden med en flom.",
        am: "ውኃው በጐደለ ጊዜ ኖኅ ርግብን ላከ፤ እርስዋም የወይራ ቅጠል በአፍዋ ይዛ ተመለሰች። ኖኅም ከመርከቡ ወጥቶ መሥዋዕት አቅርቦ እግዚአብሔርን አመሰገነ። እግዚአብሔርም ምድርን ዳግመኛ በጥፋት ውኃ እንደማያጠፋ ምልክት እንዲሆን ቀስቱን በደመና አደረገ።",
      },
    ],
    laerdom: {
      no: "Kirka ser arken som et bilde på kirka: den som er i den, blir frelst. Vannet i flommen er et bilde på dåpen, som apostelen Peter sier.",
      am: "ቤተ ክርስቲያን የኖኅን መርከብ የራስዋ ምሳሌ አድርጋ ታየዋለች፤ በውስጧ ያለ ይድናል። ሐዋርያው ጴጥሮስ እንደ ተናገረው የጥፋት ውኃው የጥምቀት ምሳሌ ነው።",
    },
    minnevers: "Gen 9:13",
    sporsmal: [
      {
        sporsmal: { no: "Hvor mange mennesker var i arken?", am: "በመርከቡ ውስጥ ስንት ሰዎች ነበሩ?" },
        svar: { no: "Åtte: Noah, kona hans, de tre sønnene og konene deres.", am: "ስምንት፤ ኖኅ፣ ሚስቱ፣ ሦስቱ ልጆቹና ሚስቶቻቸው።" },
      },
      {
        sporsmal: { no: "Hva kom duen tilbake med?", am: "ርግቢቱ ምን ይዛ ተመለሰች?" },
        svar: { no: "Et olivenblad.", am: "የወይራ ቅጠል።" },
      },
      {
        sporsmal: { no: "Hva er regnbuen et tegn på?", am: "ቀስተ ደመና የምን ምልክት ነው?" },
        svar: {
          no: "På Guds pakt: at han aldri mer skal ødelegge jorden med en flom.",
          am: "ምድርን ዳግመኛ በጥፋት ውኃ እንደማያጠፋ የገባው የቃል ኪዳን ምልክት ነው።",
        },
      },
    ],
  },
  {
    slug: "abrahams-kall",
    testament: "gt",
    nr: 5,
    tittel: { no: "Gud kaller Abraham", am: "እግዚአብሔር አብርሃምን ጠራው" },
    ref: "Gen 12:1-9",
    tekst: [
      {
        no: "Abram bodde i Karan sammen med familien sin. En dag sa Gud til ham: «Dra bort fra landet ditt, fra slekten din og fra farshuset ditt, til det landet jeg vil vise deg.»",
        am: "አብራም ከቤተሰቡ ጋር በካራን ይኖር ነበር። አንድ ቀን እግዚአብሔር «ከአገርህ ከዘመዶችህም ከአባትህም ቤት ተለይተህ እኔ ወደማሳይህ ምድር ውጣ» አለው።",
      },
      {
        no: "Gud lovet: «Jeg vil gjøre deg til et stort folk og velsigne deg. I deg skal alle slekter på jorden bli velsignet.»",
        am: "እግዚአብሔርም «ታላቅ ሕዝብ አደርግሃለሁ፤ እባርክሃለሁ። የምድር ነገዶችም ሁሉ በአንተ ይባረካሉ» ብሎ ተስፋ ሰጠው።",
      },
      {
        no: "Abram visste ikke hvor han skulle, men han stolte på Gud. Han var 75 år gammel da han dro, sammen med kona Sarai og nevøen Lot.",
        am: "አብራም ወዴት እንደሚሄድ አላወቀም፤ ነገር ግን በእግዚአብሔር ታመነ። ከሚስቱ ከሦራና ከወንድሙ ልጅ ከሎጥ ጋር ሲወጣ የሰባ አምስት ዓመት ሰው ነበረ።",
      },
      {
        no: "De kom til Kanaans land. Der viste Gud seg for Abram og sa: «Dette landet vil jeg gi din ætt.» Abram bygde et alter og ba til Herren. Senere ga Gud ham navnet Abraham, som betyr «far til mange folk».",
        am: "ወደ ከነዓን ምድርም ደረሱ። በዚያም እግዚአብሔር ለአብራም ተገልጦ «ይህችን ምድር ለዘርህ እሰጣለሁ» አለው። አብራምም መሠዊያ ሠርቶ የእግዚአብሔርን ስም ጠራ። ከጊዜ በኋላ እግዚአብሔር «የብዙ አሕዛብ አባት» የሚል ትርጉም ያለውን አብርሃም የሚለውን ስም ሰጠው።",
      },
    ],
    laerdom: {
      no: "Abraham kalles de troendes far, fordi han stolte på Gud uten å se hvor veien gikk. Løftet om at alle folk skulle bli velsignet i hans ætt, ble oppfylt i Kristus, som ble født av Abrahams ætt.",
      am: "አብርሃም መንገዱን ሳያይ በእግዚአብሔር ስለ ታመነ የምእመናን አባት ይባላል። የምድር አሕዛብ ሁሉ በዘሩ ይባረካሉ የሚለው ተስፋ ከአብርሃም ዘር በተወለደው በክርስቶስ ተፈጸመ።",
    },
    minnevers: "Gen 12:2",
    sporsmal: [
      {
        sporsmal: { no: "Hva ba Gud Abram om å gjøre?", am: "እግዚአብሔር አብራምን ምን እንዲያደርግ አዘዘው?" },
        svar: {
          no: "Å forlate landet og slekten sin og dra til landet Gud ville vise ham.",
          am: "አገሩንና ዘመዶቹን ትቶ እግዚአብሔር ወደሚያሳየው ምድር እንዲሄድ።",
        },
      },
      {
        sporsmal: { no: "Hvor gammel var Abram da han dro?", am: "አብራም ሲወጣ ዕድሜው ስንት ነበረ?" },
        svar: { no: "75 år.", am: "ሰባ አምስት ዓመት።" },
      },
    ],
  },
  {
    slug: "abrahams-gjester",
    testament: "gt",
    nr: 6,
    tittel: { no: "Abraham tar imot tre gjester", am: "አብርሃም ሦስቱን እንግዶች ተቀበለ" },
    ref: "Gen 18:1-15",
    tekst: [
      {
        no: "En varm dag satt Abraham ved døren til teltet sitt ved eiketrærne i Mamre. Da viste Herren seg for ham. Abraham så opp, og der sto tre menn foran ham.",
        am: "በቀትር ጊዜ አብርሃም በመምሬ የአድባር ዛፍ አጠገብ በድንኳኑ ደጃፍ ተቀምጦ ነበር። በዚያን ጊዜ እግዚአብሔር ተገለጠለት። አብርሃምም ዓይኑን አነሣ፤ እነሆም ሦስት ሰዎች በፊቱ ቆመው አየ።",
      },
      {
        no: "Abraham løp for å møte dem og bøyde seg til jorden. Han sa: «Herre, gå ikke forbi din tjener!» Han ga dem vann til å vaske føttene og lot dem hvile under treet.",
        am: "አብርሃምም ሊቀበላቸው ሮጠ፤ ወደ ምድርም ሰገደ። «አቤቱ፥ ባሪያህን አትለፈኝ» አለ። እግራቸውን የሚታጠቡበት ውኃ አመጣላቸው፤ ከዛፉም በታች እንዲያርፉ አደረገ።",
      },
      {
        no: "Sara bakte brød, og Abraham laget i stand en god kalv, smør og melk. Han sto ved siden av dem under treet mens de spiste.",
        am: "ሣራ እንጎቻ ጋገረች፤ አብርሃምም የሰባ ጥጃ፣ እርጎና ወተት አዘጋጀ። እነርሱ ሲበሉ እርሱ ከዛፉ በታች በአጠገባቸው ቆሞ ያገለግላቸው ነበር።",
      },
      {
        no: "Gjestene sa: «Om et år skal Sara ha en sønn.» Sara sto bak teltdøren og lo, for hun og Abraham var svært gamle. Men Herren sa: «Er noe umulig for Herren?» Og året etter fikk de sønnen Isak.",
        am: "እንግዶቹም «የዛሬ ዓመት ሣራ ወንድ ልጅ ታገኛለች» አሉ። ሣራ ከድንኳኑ ደጃፍ በስተ ኋላ ሆና ሳቀች፤ እርስዋና አብርሃም እጅግ አርጅተው ነበርና። እግዚአብሔር ግን «በውኑ ለእግዚአብሔር የሚሳነው ነገር አለን?» አለ። በሚቀጥለውም ዓመት ይስሐቅ ተወለደ።",
      },
    ],
    laerdom: {
      no: "Abraham så tre, men talte til dem som til én Herre. Kirka ser her et forvarsel om den hellige treenighet, ሥላሴ: tre personer, én Gud. Derfor minnes kirka Abrahams gjestfrihet på ሥላሴ-festen, og vi lærer å ta godt imot gjester.",
      am: "አብርሃም ሦስት አየ፤ ነገር ግን እንደ አንድ ጌታ «አቤቱ» ብሎ ተናገራቸው። ቤተ ክርስቲያን በዚህ የቅድስት ሥላሴን ምሥጢር ታያለች፤ በአካል ሦስት፣ በአምላክነት አንድ ናቸው። ስለዚህ የአብርሃምን እንግዳ መቀበል በሥላሴ በዓል ታስባለች፤ እኛም እንግዳ መቀበልን እንማራለን።",
    },
    minnevers: "Gen 18:14",
    sporsmal: [
      {
        sporsmal: { no: "Hvor mange menn så Abraham?", am: "አብርሃም ስንት ሰዎች አየ?" },
        svar: { no: "Tre menn.", am: "ሦስት ሰዎች።" },
      },
      {
        sporsmal: { no: "Hva ser kirka i denne fortellingen?", am: "ቤተ ክርስቲያን በዚህ ታሪክ ምን ታያለች?" },
        svar: {
          no: "Et forvarsel om den hellige treenighet: tre personer, én Gud.",
          am: "የቅድስት ሥላሴን ምሥጢር፤ በአካል ሦስት፣ በአምላክነት አንድ።",
        },
      },
      {
        sporsmal: { no: "Hvorfor lo Sara?", am: "ሣራ ለምን ሳቀች?" },
        svar: {
          no: "Fordi hun var gammel og ikke trodde at hun kunne få barn.",
          am: "አርጅታ ስለ ነበረች ልጅ እንደምትወልድ ስላላመነች።",
        },
      },
    ],
  },
  {
    slug: "isak-ofres",
    testament: "gt",
    nr: 7,
    tittel: { no: "Abraham og Isak på fjellet", am: "አብርሃምና ይስሐቅ በተራራው ላይ" },
    ref: "Gen 22:1-18",
    tekst: [
      {
        no: "Gud satte Abraham på prøve. Han sa: «Ta sønnen din, Isak, som du elsker, og gå til landet Moria. Der skal du ofre ham på et fjell som jeg skal vise deg.»",
        am: "እግዚአብሔር አብርሃምን ፈተነው። «የምትወደውን አንድ ልጅህን ይስሐቅን ይዘህ ወደ ሞሪያም ምድር ሂድ፤ በማሳይህ ተራራ ላይ መሥዋዕት አድርገህ ሠዋው» አለው።",
      },
      {
        no: "Tidlig neste morgen dro Abraham av sted. Isak bar veden opp på fjellet. På veien spurte han: «Far, her er ilden og veden, men hvor er lammet?» Abraham svarte: «Gud skal selv sørge for lammet, min sønn.»",
        am: "አብርሃምም በማለዳ ተነሥቶ ሄደ። ይስሐቅም እንጨቱን ተሸክሞ ወደ ተራራው ወጣ። በመንገድም «አባቴ ሆይ፥ እሳቱና እንጨቱ ይኸው፤ የመሥዋዕቱ በግ ግን ወዴት ነው?» አለ። አብርሃምም «ልጄ ሆይ፥ የመሥዋዕቱን በግ እግዚአብሔር ያዘጋጃል» አለው።",
      },
      {
        no: "Abraham bygde et alter, bandt Isak og la ham på veden. Men da han løftet kniven, ropte Herrens engel fra himmelen: «Abraham! Rør ikke gutten! Nå vet jeg at du frykter Gud.»",
        am: "አብርሃም መሠዊያ ሠራ፤ ይስሐቅንም አስሮ በእንጨቱ ላይ አጋደመው። ቢላዋውን ባነሣ ጊዜ ግን የእግዚአብሔር መልአክ ከሰማይ «አብርሃም አብርሃም፥ በብላቴናው ላይ እጅህን አትዘርጋ፤ እግዚአብሔርን የምትፈራ እንደ ሆንህ አሁን አውቄአለሁ» ብሎ ጠራው።",
      },
      {
        no: "Abraham så opp og fikk øye på en vær som satt fast med hornene i et kratt. Han ofret væren i stedet for sønnen sin. Gud lovet igjen at alle folk på jorden skulle bli velsignet i Abrahams ætt.",
        am: "አብርሃምም ዓይኑን አነሣ፤ ቀንዶቹ በዕፀ ሳቤቅ የተያዙ አንድ በግ አየ። በልጁም ፋንታ በጉን መሥዋዕት አድርጎ ሠዋው። እግዚአብሔርም የምድር አሕዛብ ሁሉ በአብርሃም ዘር እንደሚባረኩ ዳግመኛ ተስፋ ሰጠው።",
      },
    ],
    laerdom: {
      no: "Kirka ser Isak, som bar veden opp på fjellet, som et bilde på Kristus som bar korset sitt. Væren som døde i Isaks sted, er et bilde på Kristus, Guds lam, som døde for oss.",
      am: "ቤተ ክርስቲያን እንጨቱን ተሸክሞ ወደ ተራራ የወጣውን ይስሐቅን መስቀሉን የተሸከመው የክርስቶስ ምሳሌ አድርጋ ታየዋለች። በይስሐቅ ፋንታ የሞተው በግም ስለ እኛ የሞተው የእግዚአብሔር በግ የክርስቶስ ምሳሌ ነው።",
    },
    minnevers: "Gen 22:8",
    sporsmal: [
      {
        sporsmal: { no: "Hva bar Isak opp på fjellet?", am: "ይስሐቅ ወደ ተራራው ምን ተሸክሞ ወጣ?" },
        svar: { no: "Veden til offeret.", am: "የመሥዋዕቱን እንጨት።" },
      },
      {
        sporsmal: { no: "Hva ble ofret i stedet for Isak?", am: "በይስሐቅ ፋንታ የተሠዋው ምንድን ነው?" },
        svar: { no: "En vær som satt fast i et kratt.", am: "በዕፀ ሳቤቅ የተያዘ በግ።" },
      },
      {
        sporsmal: { no: "Hvem er væren et bilde på?", am: "በጉ የማን ምሳሌ ነው?" },
        svar: { no: "Kristus, Guds lam, som døde for oss.", am: "ስለ እኛ የሞተው የእግዚአብሔር በግ የክርስቶስ።" },
      },
    ],
  },
  {
    slug: "jakobs-stige",
    testament: "gt",
    nr: 8,
    tittel: { no: "Jakobs stige", am: "የያዕቆብ መሰላል" },
    ref: "Gen 28:10-22",
    tekst: [
      {
        no: "Jakob, sønn av Isak, var på vei fra Beer-Sjeba til Karan. Da solen gikk ned, tok han en stein til hodepute og la seg til å sove under åpen himmel.",
        am: "የይስሐቅ ልጅ ያዕቆብ ከቤርሳቤህ ወጥቶ ወደ ካራን ይሄድ ነበር። ፀሐይ በጠለቀች ጊዜ ድንጋይ ተንተርሶ በሜዳ ተኛ።",
      },
      {
        no: "Han drømte at det sto en stige på jorden, og toppen nådde helt opp til himmelen. Guds engler gikk opp og ned på den, og Herren sto øverst.",
        am: "ሕልምም አለመ፤ እነሆም መሰላል በምድር ላይ ተተክሎ ራሱ ወደ ሰማይ ደርሶ ነበር። የእግዚአብሔር መላእክት ይወጡበትና ይወርዱበት ነበር፤ እግዚአብሔርም በላዩ ቆሞ ነበር።",
      },
      {
        no: "Herren sa: «Jeg er Herren, din far Abrahams og Isaks Gud. Jeg er med deg og skal passe på deg overalt hvor du går.»",
        am: "እግዚአብሔርም «የአባትህ የአብርሃም አምላክ የይስሐቅም አምላክ እኔ እግዚአብሔር ነኝ። እነሆ እኔ ከአንተ ጋር ነኝ፤ በምትሄድበትም ሁሉ እጠብቅሃለሁ» አለው።",
      },
      {
        no: "Jakob våknet og sa: «Sannelig, Herren er på dette stedet! Dette er Guds hus og himmelens port.» Han reiste steinen som en minnestein, helte olje over den og kalte stedet Betel, som betyr «Guds hus».",
        am: "ያዕቆብም ከእንቅልፉ ነቅቶ «በእውነት እግዚአብሔር በዚህ ስፍራ ነው። ይህ የእግዚአብሔር ቤት ነው፤ ይህም የሰማይ ደጅ ነው» አለ። ድንጋዩንም ሐውልት አድርጎ አቆመው፤ ዘይትም አፈሰሰበት። ያንንም ስፍራ «የእግዚአብሔር ቤት» ማለት የሆነውን ቤቴል ብሎ ጠራው።",
      },
    ],
    laerdom: {
      no: "Kirka ser stigen som et bilde på Jomfru Maria: gjennom henne kom Guds Sønn ned fra himmelen og ble menneske. Betel, «Guds hus og himmelens port», er også et bilde på kirka.",
      am: "ቤተ ክርስቲያን መሰላሉን የድንግል ማርያም ምሳሌ አድርጋ ታየዋለች፤ በእርሷ የእግዚአብሔር ልጅ ከሰማይ ወርዶ ሰው ሆኗልና። «የእግዚአብሔር ቤትና የሰማይ ደጅ» የተባለው ቤቴልም የቤተ ክርስቲያን ምሳሌ ነው።",
    },
    minnevers: "Gen 28:17",
    sporsmal: [
      {
        sporsmal: { no: "Hva så Jakob i drømmen?", am: "ያዕቆብ በሕልሙ ምን አየ?" },
        svar: {
          no: "En stige fra jorden til himmelen, og engler som gikk opp og ned på den.",
          am: "ከምድር እስከ ሰማይ የደረሰ መሰላልና በእርሱ ላይ የሚወጡና የሚወርዱ መላእክትን።",
        },
      },
      {
        sporsmal: { no: "Hva betyr Betel?", am: "ቤቴል ማለት ምን ማለት ነው?" },
        svar: { no: "Guds hus.", am: "የእግዚአብሔር ቤት።" },
      },
      {
        sporsmal: { no: "Hvem ser kirka i stigen?", am: "ቤተ ክርስቲያን በመሰላሉ ማንን ታያለች?" },
        svar: {
          no: "Jomfru Maria, som Guds Sønn kom ned til oss gjennom.",
          am: "የእግዚአብሔር ልጅ በእርሷ ወደ እኛ የወረደባትን ድንግል ማርያምን።",
        },
      },
    ],
  },
];
