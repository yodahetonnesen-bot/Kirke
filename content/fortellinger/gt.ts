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
// Usikkert: Kirkas lære om at Enok og Elia kommer igjen før verdens ende, at Maria vokste opp i templet,
//   og at Maria kalles ታቦት, er tatt med som kirkas lære; formuleringene bør kontrolleres.
// Usikkert: David som bilde på Kristus som seiret over djevelen er oppgitt som «ሊቃውንት» uten konkret kilde.
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
  {
    slug: "josef-selges",
    testament: "gt",
    nr: 9,
    tittel: { no: "Josef blir solgt av brødrene sine", am: "ዮሴፍ በወንድሞቹ ተሸጠ" },
    ref: "Gen 37:1-36",
    tekst: [
      {
        no: "Jakob, som også ble kalt Israel, hadde tolv sønner. Han elsket Josef mer enn de andre og ga ham en flott, fargerik kjortel. Derfor ble brødrene sjalu og hatet Josef.",
        am: "እስራኤል የተባለው ያዕቆብ ዐሥራ ሁለት ወንዶች ልጆች ነበሩት። ዮሴፍን ከልጆቹ ሁሉ ይልቅ ይወደው ነበር፤ በብዙ ኅብር ያጌጠች ቀሚስም አደረገለት። ስለዚህ ወንድሞቹ ቀኑበት፤ ጠሉትም።",
      },
      {
        no: "Josef drømte at kornbåndene til brødrene bøyde seg for hans kornbånd, og at solen, månen og elleve stjerner bøyde seg for ham. Da han fortalte drømmene, hatet brødrene ham enda mer.",
        am: "ዮሴፍም የወንድሞቹ ነዶዎች ለእርሱ ነዶ ሲሰግዱ፣ ደግሞም ፀሐይና ጨረቃ ዐሥራ አንድ ከዋክብትም ሲሰግዱለት በሕልም አየ። ሕልሞቹንም በነገራቸው ጊዜ ወንድሞቹ የበለጠ ጠሉት።",
      },
      {
        no: "En dag sendte Jakob Josef ut for å se til brødrene, som gjette sauer langt borte. Da de så ham komme, la de planer om å drepe ham. Ruben fikk dem til å kaste ham i en tom brønn i stedet.",
        am: "አንድ ቀን ያዕቆብ በሩቅ በጎችን የሚጠብቁትን ወንድሞቹን እንዲያይ ዮሴፍን ላከው። ሲመጣም ባዩት ጊዜ ሊገድሉት ተማከሩ። ሮቤል ግን በምትኩ ውኃ በሌለበት ጕድጓድ እንዲጥሉት አደረጋቸው።",
      },
      {
        no: "Så kom noen handelsmenn forbi. Juda sa: «La oss selge ham.» De solgte Josef for tjue sølvpenger, og han ble ført til Egypt. Brødrene dyppet kjortelen hans i blod og viste den til faren. Jakob trodde at et villdyr hadde drept Josef, og han sørget lenge.",
        am: "ከዚያም ነጋዴዎች በዚያ አለፉ። ይሁዳም «እንሽጠው» አለ። ዮሴፍንም በሀያ ብር ሸጡት፤ ወደ ግብፅም ተወሰደ። ወንድሞቹም ቀሚሱን በደም ነክረው ለአባታቸው አሳዩት። ያዕቆብም ክፉ አውሬ ዮሴፍን የበላው መሰለው፤ ለብዙ ቀንም አለቀሰ።",
      },
      {
        no: "Men Gud var med Josef i Egypt. Selv om han ble solgt som slave og senere kastet i fengsel, var Gud hos ham hele tiden.",
        am: "እግዚአብሔር ግን በግብፅ ከዮሴፍ ጋር ነበረ። ምንም እንኳ እንደ ባሪያ ቢሸጥና በኋላም ወደ ወኅኒ ቢጣል እግዚአብሔር ሁልጊዜ ከእርሱ ጋር ነበረ።",
      },
    ],
    laerdom: {
      no: "Misunnelse fører til synd, derfor må vi vokte oss for den. Kirka ser Josef, som ble solgt for sølv av sine egne, som et bilde på Kristus, som ble forrådt for sølvpenger.",
      am: "ቅናት ወደ ኃጢአት ይመራል፤ ስለዚህ ከእርሱ መጠበቅ አለብን። ቤተ ክርስቲያን በገዛ ወንድሞቹ በብር የተሸጠውን ዮሴፍን በብር የተሸጠው የክርስቶስ ምሳሌ አድርጋ ታየዋለች።",
    },
    minnevers: "Gen 39:2",
    sporsmal: [
      {
        sporsmal: { no: "Hvorfor var brødrene sjalu på Josef?", am: "ወንድሞቹ ለምን በዮሴፍ ቀኑበት?" },
        svar: {
          no: "Fordi faren elsket ham mest, og fordi han drømte at de skulle bøye seg for ham.",
          am: "አባታቸው ከሁሉ ይልቅ ይወደው ስለ ነበረና እንደሚሰግዱለት በሕልም ስላየ።",
        },
      },
      {
        sporsmal: { no: "Hvor mye ble Josef solgt for?", am: "ዮሴፍ በስንት ተሸጠ?" },
        svar: { no: "Tjue sølvpenger.", am: "በሀያ ብር።" },
      },
    ],
  },
  {
    slug: "josef-tilgir",
    testament: "gt",
    nr: 10,
    tittel: { no: "Josef tilgir brødrene sine", am: "ዮሴፍ ወንድሞቹን ይቅር አለ" },
    ref: "Gen 45:1-15",
    tekst: [
      {
        no: "Gud ga Josef visdom til å tyde drømmene til farao. Farao gjorde ham til herre over hele Egypt. Josef samlet korn i sju gode år, så det fantes mat da hungersnøden kom.",
        am: "እግዚአብሔር የፈርዖንን ሕልም እንዲተረጉም ለዮሴፍ ጥበብ ሰጠው። ፈርዖንም በግብፅ ምድር ሁሉ ላይ አለቃ አደረገው። ዮሴፍም በሰባቱ የጥጋብ ዓመታት እህል አከማቸ፤ ራብ በመጣ ጊዜም ምግብ ተገኘ።",
      },
      {
        no: "Brødrene hans kom til Egypt for å kjøpe korn. De kjente ikke igjen Josef, men han kjente dem. Han prøvde dem for å se om hjertene deres hadde forandret seg.",
        am: "ወንድሞቹም እህል ሊገዙ ወደ ግብፅ መጡ። እነርሱ ዮሴፍን አላወቁትም፤ እርሱ ግን አወቃቸው። ልባቸው ተለውጦ እንደ ሆነ ለማወቅም ፈተናቸው።",
      },
      {
        no: "Til slutt klarte ikke Josef å holde seg lenger. Han gråt høyt og sa: «Jeg er Josef, broren deres, som dere solgte til Egypt.» Brødrene ble redde og klarte ikke å svare.",
        am: "በመጨረሻም ዮሴፍ ሊታገሥ አልቻለም። ድምፁን ከፍ አድርጎ አለቀሰና «ወደ ግብፅ የሸጣችሁኝ እኔ ወንድማችሁ ዮሴፍ ነኝ» አላቸው። ወንድሞቹም ደንግጠው ሊመልሱለት አልቻሉም።",
      },
      {
        no: "Men Josef sa: «Vær ikke lei dere for at dere solgte meg. Gud sendte meg hit foran dere for å berge liv.» Han kysset alle brødrene sine og gråt. Senere hentet han faren Jakob og hele familien til Egypt.",
        am: "ዮሴፍ ግን «ወደዚህ ስለ ሸጣችሁኝ አትዘኑ፤ እግዚአብሔር ሕይወትን ለማዳን ከእናንተ በፊት ሰድዶኛልና» አላቸው። ወንድሞቹንም ሁሉ ስሞ አለቀሰ። ከዚያም በኋላ አባቱን ያዕቆብንና ቤተሰቡን ሁሉ ወደ ግብፅ አስመጣ።",
      },
    ],
    laerdom: {
      no: "Josef gjengjeldte ikke ondt med ondt, men tilga. Slik lærer Kristus oss å tilgi dem som gjør oss urett. Gud kan vende det onde mennesker gjør, til noe godt.",
      am: "ዮሴፍ ክፉን በክፉ አልመለሰም፤ ይቅር አለ እንጂ። ክርስቶስም የበደሉንን ይቅር እንድንል ያስተምረናል። እግዚአብሔር ሰዎች ያደረጉትን ክፉ ነገር ወደ መልካም ሊለውጥ ይችላል።",
    },
    minnevers: "Gen 50:20",
    sporsmal: [
      {
        sporsmal: { no: "Hvorfor ble Josef herre i Egypt?", am: "ዮሴፍ በግብፅ ለምን አለቃ ሆነ?" },
        svar: {
          no: "Fordi Gud ga ham visdom til å tyde faraos drømmer.",
          am: "የፈርዖንን ሕልም እንዲተረጉም እግዚአብሔር ጥበብ ስለ ሰጠው።",
        },
      },
      {
        sporsmal: { no: "Hva sa Josef til brødrene om hvorfor han kom til Egypt?", am: "ዮሴፍ ወደ ግብፅ ስለ መምጣቱ ለወንድሞቹ ምን አላቸው?" },
        svar: {
          no: "At Gud sendte ham dit foran dem for å berge liv.",
          am: "ሕይወትን ለማዳን እግዚአብሔር ከእነርሱ በፊት እንደ ላከው።",
        },
      },
      {
        sporsmal: { no: "Hva lærer vi av Josef?", am: "ከዮሴፍ ምን እንማራለን?" },
        svar: { no: "Å tilgi dem som har gjort oss vondt.", am: "የበደሉንን ይቅር ማለትን።" },
      },
    ],
  },
  {
    slug: "moses-fodes",
    testament: "gt",
    nr: 11,
    tittel: { no: "Den lille Moses i sivkurven", am: "ሕፃኑ ሙሴ በሣጥን ውስጥ" },
    ref: "Exod 2:1-10",
    tekst: [
      {
        no: "Lenge etter Josef ble israelittene mange i Egypt. En ny farao ble redd for dem og gjorde dem til slaver. Han befalte at alle guttebarn som ble født hos hebreerne, skulle kastes i elva.",
        am: "ከዮሴፍ ዘመን ብዙ ቆይቶ እስራኤላውያን በግብፅ በዙ። አዲስ ፈርዖንም ፈራቸው፤ ባሪያዎችም አደረጋቸው። ከዕብራውያን የሚወለደውንም ወንድ ልጅ ሁሉ ወደ ወንዝ እንዲጥሉ አዘዘ።",
      },
      {
        no: "En kvinne av Levis stamme fødte en sønn. Hun gjemte ham i tre måneder. Da hun ikke kunne gjemme ham lenger, laget hun en kurv av siv, tettet den med bek og la gutten i den blant sivet ved elvebredden. Søsteren hans sto et stykke unna og passet på.",
        am: "ከሌዊ ወገን የሆነች አንዲት ሴት ወንድ ልጅ ወለደች። ሦስት ወርም ሸሸገችው። ከዚያ በኋላ ልትሸሽገው ባልቻለች ጊዜ የደንገል ሣጥን ሠርታ በቅጥራን ለቀለቀችው፤ ሕፃኑንም በውስጡ አድርጋ በወንዝ ዳር በቄጠማ መካከል አስቀመጠችው። እኅቱም የሚደረግበትን ለማወቅ በሩቅ ቆማ ትጠብቅ ነበር።",
      },
      {
        no: "Faraos datter kom ned til elva for å bade. Hun så kurven og åpnet den. Gutten gråt, og hun fikk medlidenhet med ham.",
        am: "የፈርዖንም ልጅ ልትታጠብ ወደ ወንዝ ወረደች። ሣጥኑንም አይታ ከፈተችው። ሕፃኑም ያለቅስ ነበር፤ እርስዋም አዘነችለት።",
      },
      {
        no: "Søsteren spurte: «Skal jeg hente en hebraisk kvinne som kan amme barnet for deg?» Hun hentet barnets egen mor! Da gutten var blitt stor, ble han sønn av faraos datter. Hun kalte ham Moses, for hun sa: «Jeg trakk ham opp av vannet.»",
        am: "እኅቱም «ሕፃኑን የምታጠባልሽ ዕብራዊት ሴት ልጥራልሽን?» አለቻት። የሕፃኑንም የገዛ እናቱን ጠራች። ሕፃኑም ባደገ ጊዜ የፈርዖን ልጅ እንደ ልጇ አድርጋ ወሰደችው። «ከውኃ አውጥቼዋለሁና» ብላ ስሙን ሙሴ ብላ ጠራችው።",
      },
    ],
    laerdom: {
      no: "Gud beskytter de små og har en plan for hvert barn. Kirka ser at Moses, som ble reddet da farao drepte guttebarna, ligner på Jesus, som ble reddet da Herodes drepte barna i Betlehem. Moses ble senere den som førte folket ut av slaveriet.",
      am: "እግዚአብሔር ሕፃናትን ይጠብቃል፤ ለእያንዳንዱም ልጅ ዕቅድ አለው። ፈርዖን ወንዶች ሕፃናትን ሲያስገድል የዳነው ሙሴ፣ ሄሮድስ በቤተ ልሔም ሕፃናትን ሲያስገድል ከዳነው ከጌታችን ጋር እንደሚመሳሰል ቤተ ክርስቲያን ታስተምራለች። ሙሴም በኋላ ሕዝቡን ከባርነት ያወጣ ሆነ።",
    },
    minnevers: "Ps 34:8",
    sporsmal: [
      {
        sporsmal: { no: "Hvor la moren Moses?", am: "እናቱ ሙሴን የት አስቀመጠችው?" },
        svar: {
          no: "I en kurv av siv blant sivet ved elva.",
          am: "በደንገል ሣጥን ውስጥ አድርጋ በወንዝ ዳር በቄጠማ መካከል።",
        },
      },
      {
        sporsmal: { no: "Hvem fant Moses?", am: "ሙሴን ያገኘችው ማን ናት?" },
        svar: { no: "Faraos datter.", am: "የፈርዖን ልጅ።" },
      },
      {
        sporsmal: { no: "Hva betyr navnet Moses?", am: "ሙሴ የሚለው ስም ትርጉሙ ምንድን ነው?" },
        svar: { no: "At han ble trukket opp av vannet.", am: "ከውኃ የወጣ ማለት ነው።" },
      },
    ],
  },
  {
    slug: "den-brennende-busken",
    testament: "gt",
    nr: 12,
    tittel: { no: "Den brennende busken", am: "የሚነድደው ቍጥቋጦ" },
    ref: "Exod 3:1-15",
    tekst: [
      {
        no: "Moses voktet sauene til svigerfaren Jetro. En dag kom han til Guds fjell, Horeb. Der så han en tornebusk som brant, men busken brant ikke opp.",
        am: "ሙሴ የአማቱን የዮቶርን በጎች ይጠብቅ ነበር። አንድ ቀንም ወደ እግዚአብሔር ተራራ ወደ ኮሬብ መጣ። በዚያም ቍጥቋጦ በእሳት ሲነድድ፣ ቍጥቋጦው ግን ሳይቃጠል አየ።",
      },
      {
        no: "Moses gikk nærmere for å se. Da ropte Gud fra busken: «Moses, Moses! Kom ikke nærmere. Ta skoene av føttene dine, for stedet du står på, er hellig jord.»",
        am: "ሙሴም ይህን ታላቅ ራእይ ለማየት ቀረበ። እግዚአብሔርም ከቍጥቋጦው ውስጥ «ሙሴ፥ ሙሴ ሆይ፤ ወደዚህ አትቅረብ፤ የቆምህባት ስፍራ የተቀደሰች መሬት ናትና ጫማህን ከእግርህ አውጣ» ብሎ ጠራው።",
      },
      {
        no: "Gud sa: «Jeg er Abrahams, Isaks og Jakobs Gud. Jeg har sett hvordan folket mitt lider i Egypt. Nå sender jeg deg til farao for at du skal føre folket mitt ut.» Moses dekket ansiktet, for han var redd for å se på Gud.",
        am: "እግዚአብሔርም «እኔ የአብርሃም አምላክ የይስሐቅም አምላክ የያዕቆብም አምላክ ነኝ። የሕዝቤን መከራ በግብፅ አየሁ። አሁንም ሕዝቤን እንድታወጣ ወደ ፈርዖን እልክሃለሁ» አለው። ሙሴም እግዚአብሔርን ለማየት ፈርቶ ፊቱን ሸፈነ።",
      },
      {
        no: "Moses spurte hva Guds navn var. Gud svarte: «Jeg er den jeg er.» Han lovet å være med Moses.",
        am: "ሙሴም የእግዚአብሔርን ስም ጠየቀ። እግዚአብሔርም «ያለና የሚኖር እኔ ነኝ» አለው። ከሙሴ ጋር እንደሚሆንም ተስፋ ሰጠው።",
      },
    ],
    laerdom: {
      no: "Kirka ser busken som et bilde på Jomfru Maria: ilden brant i busken uten å brenne den opp, og slik bar Maria Guds Sønn, guddommens ild, i sitt morsliv uten å bli skadet. Hun ble født mor og forble jomfru.",
      am: "ቤተ ክርስቲያን ቍጥቋጦውን የድንግል ማርያም ምሳሌ አድርጋ ታየዋለች። እሳቱ ቍጥቋጦውን እንዳላቃጠለው ሁሉ እመቤታችንም የመለኮትን እሳት የእግዚአብሔርን ልጅ በማኅፀኗ ተሸክማ አልተቃጠለችም። እናት ሆና በድንግልናዋ ጸናች።",
    },
    minnevers: "Exod 3:5",
    sporsmal: [
      {
        sporsmal: { no: "Hva var rart med busken Moses så?", am: "ሙሴ ባየው ቍጥቋጦ ላይ የሚደንቀው ምን ነበር?" },
        svar: { no: "Den brant, men brant ikke opp.", am: "በእሳት ይነድድ ነበር፤ ነገር ግን አልተቃጠለም።" },
      },
      {
        sporsmal: { no: "Hvorfor måtte Moses ta av seg skoene?", am: "ሙሴ ጫማውን ለምን ማውለቅ ነበረበት?" },
        svar: { no: "Fordi stedet var hellig jord.", am: "ስፍራው የተቀደሰች መሬት ስለ ነበረች።" },
      },
      {
        sporsmal: { no: "Hvem er busken et bilde på?", am: "ቍጥቋጦው የማን ምሳሌ ነው?" },
        svar: {
          no: "Jomfru Maria, som bar Guds Sønn uten å bli skadet.",
          am: "የእግዚአብሔርን ልጅ ተሸክማ ያልተቃጠለችው የድንግል ማርያም።",
        },
      },
    ],
  },
  {
    slug: "gjennom-sivhavet",
    testament: "gt",
    nr: 13,
    tittel: { no: "Gjennom Det røde hav", am: "የኤርትራን ባሕር መሻገር" },
    ref: "Exod 14:10-31",
    tekst: [
      {
        no: "Etter mange under lot farao endelig israelittene gå. Men snart angret han og jaget etter dem med vogner og soldater. Folket sto ved havet og ble svært redde.",
        am: "ከብዙ ተአምራት በኋላ ፈርዖን እስራኤላውያንን ለቀቃቸው። ብዙም ሳይቆይ ግን ተጸጸተ፤ በሰረገሎችና በሠራዊት አሳደዳቸው። ሕዝቡም በባሕሩ ዳር ቆመው እጅግ ፈሩ።",
      },
      {
        no: "Moses sa: «Vær ikke redde! Herren skal stride for dere.» Skystøtten flyttet seg og sto mellom israelittene og egypterne hele natten.",
        am: "ሙሴም «አትፍሩ፤ እግዚአብሔር ስለ እናንተ ይዋጋል» አላቸው። የደመናውም ዓምድ ተንቀሳቅሶ ሌሊቱን ሁሉ በእስራኤልና በግብፃውያን መካከል ቆመ።",
      },
      {
        no: "Moses rakte hånden ut over havet. Herren sendte en sterk østavind hele natten, og vannet delte seg. Israelittene gikk gjennom havet på tørr grunn, med vannet som en mur på høyre og venstre side.",
        am: "ሙሴም እጁን በባሕሩ ላይ ዘረጋ። እግዚአብሔርም ሌሊቱን ሁሉ ጽኑ የምሥራቅ ነፋስ አምጥቶ ውኃውን ከፈለው። የእስራኤልም ልጆች በባሕሩ መካከል በየብስ ሄዱ፤ ውኃውም በቀኛቸውና በግራቸው እንደ ግድግዳ ሆነላቸው።",
      },
      {
        no: "Egypterne fulgte etter dem. Da rakte Moses hånden ut igjen, og vannet vendte tilbake og dekket hele faraos hær. Folket så hva Herren hadde gjort, og trodde på ham. Moses og Mirjam sang en lovsang til Gud.",
        am: "ግብፃውያንም ተከተሏቸው። ሙሴም እንደ ገና እጁን ዘረጋ፤ ውኃውም ተመልሶ የፈርዖንን ሠራዊት ሁሉ ከደነ። ሕዝቡም እግዚአብሔር ያደረገውን አይተው በእርሱ አመኑ። ሙሴና ማሪያምም ለእግዚአብሔር የምስጋና መዝሙር ዘመሩ።",
      },
    ],
    laerdom: {
      no: "Apostelen Paulus sier at israelittene ble «døpt» i skyen og i havet. Kirka ser derfor ferden gjennom havet som et bilde på dåpen: i dåpen blir vi fridd fra syndens slaveri, slik folket ble fridd fra farao.",
      am: "ሐዋርያው ጳውሎስ እስራኤላውያን በደመናና በባሕር እንደ ተጠመቁ ይናገራል። ስለዚህ ቤተ ክርስቲያን ባሕሩን መሻገራቸውን የጥምቀት ምሳሌ አድርጋ ታየዋለች፤ ሕዝቡ ከፈርዖን እጅ እንደ ዳኑ እኛም በጥምቀት ከኃጢአት ባርነት ነጻ እንወጣለን።",
    },
    minnevers: "Exod 14:14",
    sporsmal: [
      {
        sporsmal: { no: "Hva skjedde da Moses rakte hånden ut over havet?", am: "ሙሴ እጁን በባሕሩ ላይ በዘረጋ ጊዜ ምን ሆነ?" },
        svar: {
          no: "Vannet delte seg, og folket gikk over på tørr grunn.",
          am: "ውኃው ተከፈለ፤ ሕዝቡም በየብስ ተሻገሩ።",
        },
      },
      {
        sporsmal: { no: "Hva er ferden gjennom havet et bilde på?", am: "ባሕሩን መሻገር የምን ምሳሌ ነው?" },
        svar: { no: "Dåpen.", am: "የጥምቀት።" },
      },
    ],
  },
  {
    slug: "de-ti-bud",
    testament: "gt",
    nr: 14,
    tittel: { no: "De ti bud", am: "ዐሥርቱ ቃላት" },
    ref: "Exod 20:1-17",
    tekst: [
      {
        no: "Tre måneder etter at de dro fra Egypt, kom israelittene til Sinaifjellet. Gud kom ned på fjellet i ild og sky, og det tordnet og lynte. Folket skalv av frykt.",
        am: "እስራኤላውያን ከግብፅ ከወጡ ከሦስት ወር በኋላ ወደ ሲና ተራራ ደረሱ። እግዚአብሔርም በእሳትና በደመና በተራራው ላይ ወረደ፤ ነጐድጓድና መብረቅም ሆነ። ሕዝቡም ፈርተው ተንቀጠቀጡ።",
      },
      {
        no: "Gud sa: «Jeg er Herren din Gud, som førte deg ut av Egypt, ut av slavehuset. Du skal ikke ha andre guder enn meg.» Så ga han dem ti bud.",
        am: "እግዚአብሔርም «ከግብፅ ምድር ከባርነት ቤት ያወጣሁህ እግዚአብሔር አምላክህ እኔ ነኝ። ከእኔ በቀር ሌሎች አማልክት አይሁኑልህ» አለ። ዐሥሩንም ትእዛዛት ሰጣቸው።",
      },
      {
        no: "De første budene handler om å elske Gud: ikke tilbe andre guder eller bilder av dem, ikke misbruke Guds navn, og holde hviledagen hellig.",
        am: "የመጀመሪያዎቹ ትእዛዛት እግዚአብሔርን ስለ መውደድ ናቸው፤ ሌሎችን አማልክትና ምስሎቻቸውን አለማምለክ፣ የእግዚአብሔርን ስም በከንቱ አለመጥራት፣ የሰንበትንም ቀን መቀደስ።",
      },
      {
        no: "De andre budene handler om å elske hverandre: hedre far og mor, ikke drepe, ikke bryte ekteskapet, ikke stjele, ikke lyve om andre og ikke begjære det som tilhører andre.",
        am: "ሌሎቹ ትእዛዛት ባልንጀራን ስለ መውደድ ናቸው፤ አባትንና እናትን ማክበር፣ አለመግደል፣ አለማመንዘር፣ አለመስረቅ፣ በሐሰት አለመመስከርና የሰውን ገንዘብ አለመመኘት።",
      },
      {
        no: "Gud skrev budene med sin egen finger på to steintavler. Tavlene ble senere lagt i paktens ark.",
        am: "እግዚአብሔርም ትእዛዛቱን በገዛ ጣቱ በሁለት የድንጋይ ጽላቶች ላይ ጻፈ። ጽላቶቹም በኋላ በታቦቱ ውስጥ ተቀመጡ።",
      },
    ],
    laerdom: {
      no: "Budene viser oss hvordan vi skal leve. Jesus sier at alle budene samles i to: å elske Gud av hele hjertet og å elske nesten som seg selv. Kristus kom ikke for å oppheve loven, men for å oppfylle den.",
      am: "ትእዛዛቱ እንዴት መኖር እንዳለብን ያሳዩናል። ጌታችን ትእዛዛቱ ሁሉ በሁለት እንደሚጠቃለሉ አስተማረ፤ እግዚአብሔርን በፍጹም ልብ መውደድና ባልንጀራን እንደ ራስ መውደድ። ክርስቶስ ሕግን ሊፈጽም እንጂ ሊሽር አልመጣም።",
    },
    minnevers: "Exod 20:12",
    sporsmal: [
      {
        sporsmal: { no: "Hvor fikk Moses de ti bud?", am: "ሙሴ ዐሥርቱን ቃላት የት ተቀበለ?" },
        svar: { no: "På Sinaifjellet.", am: "በሲና ተራራ።" },
      },
      {
        sporsmal: { no: "Hva skrev Gud budene på?", am: "እግዚአብሔር ትእዛዛቱን በምን ላይ ጻፈ?" },
        svar: { no: "På to steintavler.", am: "በሁለት የድንጋይ ጽላቶች ላይ።" },
      },
      {
        sporsmal: { no: "Hvilke to bud samler alle budene, ifølge Jesus?", am: "እንደ ጌታችን ትምህርት ትእዛዛቱ ሁሉ በየትኞቹ ሁለት ይጠቃለላሉ?" },
        svar: {
          no: "Å elske Gud av hele hjertet og å elske nesten som seg selv.",
          am: "እግዚአብሔርን በፍጹም ልብ መውደድና ባልንጀራን እንደ ራስ መውደድ።",
        },
      },
    ],
  },
  {
    slug: "paktens-ark",
    testament: "gt",
    nr: 15,
    tittel: { no: "Paktens ark", am: "የቃል ኪዳኑ ታቦት" },
    ref: "Exod 25:8-22",
    tekst: [
      {
        no: "På Sinaifjellet sa Gud til Moses: «De skal lage en helligdom for meg, så jeg kan bo midt iblant dem.» Gud viste Moses nøyaktig hvordan alt skulle lages.",
        am: "በሲና ተራራ እግዚአብሔር ሙሴን «በመካከላቸው አድር ዘንድ መቅደስ ይሥሩልኝ» አለው። ሁሉም እንዴት መሠራት እንዳለበት እግዚአብሔር ለሙሴ አሳየው።",
      },
      {
        no: "Det viktigste var arken, ታቦት: en kiste av akasietre, kledd med rent gull innvendig og utvendig. Den hadde gullringer og stenger, så prestene kunne bære den.",
        am: "ከሁሉ የሚበልጠው ታቦቱ ነበረ፤ ከግራር እንጨት የተሠራ፣ በውስጥና በውጭ በጥሩ ወርቅ የተለበጠ ሣጥን ነው። ካህናቱ እንዲሸከሙትም የወርቅ ቀለበቶችና መሎጊያዎች ነበሩት።",
      },
      {
        no: "Over arken var et lokk av rent gull med to keruber som bredte ut vingene sine. Inne i arken skulle Moses legge steintavlene med de ti bud.",
        am: "በታቦቱ ላይ ከጥሩ ወርቅ የተሠራ የስርየት መክደኛ ነበረ፤ በላዩም ክንፎቻቸውን የዘረጉ ሁለት ኪሩቤል ነበሩ። ሙሴም ዐሥርቱ ቃላት የተጻፉባቸውን ጽላቶች በታቦቱ ውስጥ እንዲያኖር ታዘዘ።",
      },
      {
        no: "Gud sa: «Der vil jeg møte deg og tale med deg, fra stedet mellom de to kerubene.» Arken var tegnet på at Gud var midt iblant folket sitt.",
        am: "እግዚአብሔርም «በዚያ ከአንተ ጋር እገናኛለሁ፤ በሁለቱ ኪሩቤል መካከል ሆኜ እናገርሃለሁ» አለ። ታቦቱ እግዚአብሔር በሕዝቡ መካከል የመኖሩ ምልክት ነበረ።",
      },
    ],
    laerdom: {
      no: "Hver Tewahedo-kirke har en ታቦት, en hellig tavle som biskopen har velsignet, med navnet til Gud, Maria, en engel eller en helgen. Den minner oss om paktens ark, og på den feires den hellige nattverden. Kirka kaller også Maria en ny ark, for hun bar Guds Ord i seg.",
      am: "እያንዳንዱ የተዋሕዶ ቤተ ክርስቲያን በኤጲስ ቆጶስ የተባረከ፣ የእግዚአብሔር ወይም የእመቤታችን ወይም የመልአክ ወይም የቅዱስ ስም የተጻፈበት ታቦት አለው። ታቦቱ የቃል ኪዳኑን ታቦት ያሳስበናል፤ በእርሱም ላይ ቅዳሴ ይቀደሳል። ቤተ ክርስቲያን እመቤታችንን ቃለ እግዚአብሔርን በማኅፀኗ ስለ ተሸከመች ታቦት ብላ ትጠራታለች።",
    },
    minnevers: "Exod 25:8",
    sporsmal: [
      {
        sporsmal: { no: "Hva lå inne i paktens ark?", am: "በቃል ኪዳኑ ታቦት ውስጥ ምን ነበረ?" },
        svar: { no: "Steintavlene med de ti bud.", am: "ዐሥርቱ ቃላት የተጻፉባቸው የድንጋይ ጽላቶች።" },
      },
      {
        sporsmal: { no: "Hva var arken et tegn på?", am: "ታቦቱ የምን ምልክት ነበረ?" },
        svar: {
          no: "At Gud bodde midt iblant folket sitt.",
          am: "እግዚአብሔር በሕዝቡ መካከል የመኖሩ።",
        },
      },
      {
        sporsmal: { no: "Hva har hver Tewahedo-kirke som minner om arken?", am: "እያንዳንዱ የተዋሕዶ ቤተ ክርስቲያን ታቦቱን የሚያሳስብ ምን አለው?" },
        svar: { no: "En ታቦት, som nattverden feires på.", am: "ቅዳሴ የሚቀደስበት ታቦት።" },
      },
    ],
  },
  {
    slug: "jeriko",
    testament: "gt",
    nr: 16,
    tittel: { no: "Murene i Jeriko faller", am: "የኢያሪኮ ቅጥር ወደቀ" },
    ref: "Josh 6:1-27",
    tekst: [
      {
        no: "Etter at Moses døde, ble Josva leder for folket. Byen Jeriko hadde høye murer, og portene var stengt. Men Herren sa til Josva: «Jeg har gitt Jeriko i din hånd.»",
        am: "ሙሴ ከሞተ በኋላ ኢያሱ የሕዝቡ መሪ ሆነ። የኢያሪኮ ከተማ ረጃጅም ቅጥሮች ነበሯት፤ በሮቿም ተዘግተው ነበር። እግዚአብሔር ግን ኢያሱን «ኢያሪኮን በእጅህ ሰጥቼአለሁ» አለው።",
      },
      {
        no: "Gud ga en merkelig plan: Soldatene skulle gå rundt byen én gang hver dag i seks dager. Sju prester med horn skulle gå foran arken.",
        am: "እግዚአብሔርም የሚደንቅ ትእዛዝ ሰጠ። ሰልፈኞቹ ከተማይቱን ስድስት ቀን በየቀኑ አንድ ጊዜ ይዙሯት። ሰባት ካህናትም ሰባት ቀንደ መለከት ይዘው በታቦቱ ፊት ይሂዱ።",
      },
      {
        no: "Den sjuende dagen gikk de rundt byen sju ganger. Prestene blåste i hornene, og hele folket ropte høyt. Da falt murene sammen, og folket gikk rett inn i byen.",
        am: "በሰባተኛውም ቀን ከተማይቱን ሰባት ጊዜ ዞሩ። ካህናቱ ቀንደ መለከቱን ነፉ፤ ሕዝቡም ሁሉ ታላቅ ጩኸት ጮኹ። የከተማይቱም ቅጥር ወደቀ፤ ሕዝቡም በቀጥታ ወደ ከተማይቱ ገቡ።",
      },
      {
        no: "Rahab, som hadde gjemt de to speiderne, ble reddet sammen med hele familien sin fordi hun trodde på Israels Gud.",
        am: "ሁለቱን ሰላዮች የሸሸገችው ረዓብ ግን በእስራኤል አምላክ ስላመነች ከቤተሰቧ ሁሉ ጋር ዳነች።",
      },
    ],
    laerdom: {
      no: "Murene falt ikke på grunn av våpen, men fordi folket trodde og lød Gud. Bibelen sier at det var ved tro murene falt. Også Rahab ble frelst ved tro, og hun er nevnt i Jesu slektstavle.",
      am: "ቅጥሩ የወደቀው በጦር መሣሪያ አይደለም፤ ሕዝቡ እግዚአብሔርን አምነው ስለ ታዘዙ ነው እንጂ። መጽሐፍ ቅዱስ የኢያሪኮ ቅጥር በእምነት እንደ ወደቀ ይናገራል። ረዓብም በእምነት ዳነች፤ በጌታችን የትውልድ ሐረግም ተጠቅሳለች።",
    },
    minnevers: "Heb 11:30",
    sporsmal: [
      {
        sporsmal: { no: "Hvor mange ganger gikk folket rundt Jeriko den sjuende dagen?", am: "በሰባተኛው ቀን ሕዝቡ ኢያሪኮን ስንት ጊዜ ዞሩ?" },
        svar: { no: "Sju ganger.", am: "ሰባት ጊዜ።" },
      },
      {
        sporsmal: { no: "Hvorfor falt murene?", am: "ቅጥሩ ለምን ወደቀ?" },
        svar: {
          no: "Fordi folket trodde på Gud og gjorde som han sa.",
          am: "ሕዝቡ በእግዚአብሔር አምነው እንዳዘዛቸው ስላደረጉ።",
        },
      },
      {
        sporsmal: { no: "Hvem ble reddet i Jeriko?", am: "በኢያሪኮ የዳነችው ማን ናት?" },
        svar: { no: "Rahab og familien hennes.", am: "ረዓብና ቤተሰቧ።" },
      },
    ],
  },
  {
    slug: "rut",
    testament: "gt",
    nr: 17,
    tittel: { no: "Rut blir hos Noomi", am: "ሩት ከኑኃሚን ጋር ቀረች" },
    ref: "Ruth 1:1-22",
    tekst: [
      {
        no: "Det var hungersnød i Israel. Noomi og mannen hennes dro fra Betlehem til landet Moab med de to sønnene sine. Sønnene giftet seg med to kvinner fra Moab, Orpa og Rut.",
        am: "በእስራኤል ራብ ሆነ። ኑኃሚንና ባልዋ ከሁለቱ ልጆቻቸው ጋር ከቤተ ልሔም ወደ ሞዓብ ምድር ሄዱ። ልጆቹም ዖርፋና ሩት የተባሉ ሞዓባውያን ሴቶችን አገቡ።",
      },
      {
        no: "Så døde mannen til Noomi, og begge sønnene døde også. Noomi bestemte seg for å dra hjem til Betlehem. Hun sa til svigerdøtrene: «Gå hjem til mødrene deres.»",
        am: "ከዚያም የኑኃሚን ባል ሞተ፤ ሁለቱ ልጆችዋም ሞቱ። ኑኃሚንም ወደ ቤተ ልሔም ልትመለስ ወሰነች። ምራቶችዋንም «ወደ እናቶቻችሁ ቤት ተመለሱ» አለቻቸው።",
      },
      {
        no: "Orpa kysset henne og dro hjem. Men Rut ville ikke gå fra Noomi. Hun sa: «Dit du går, går jeg. Ditt folk er mitt folk, og din Gud er min Gud.»",
        am: "ዖርፋ አማትዋን ስማ ተመለሰች። ሩት ግን ከኑኃሚን አልተለየችም። «ወደምትሄጅበት እሄዳለሁ፤ ሕዝብሽ ሕዝቤ፣ አምላክሽም አምላኬ ይሆናል» አለቻት።",
      },
      {
        no: "De kom til Betlehem da bygghøsten begynte. Rut arbeidet hardt på åkeren for å skaffe mat til Noomi. Senere giftet hun seg med Boas, og de fikk sønnen Obed. Obed ble farfar til kong David.",
        am: "የገብስ መከር በተጀመረ ጊዜ ወደ ቤተ ልሔም ደረሱ። ሩትም ለኑኃሚን ምግብ ለማግኘት በእርሻ ተግታ ሠራች። ከጊዜ በኋላ ቦዔዝን አገባች፤ ኢዮቤድ የተባለ ወንድ ልጅም ወለዱ። ኢዮቤድም የንጉሥ ዳዊት አያት ሆነ።",
      },
    ],
    laerdom: {
      no: "Rut var trofast mot svigermoren sin og valgte Israels Gud. Selv om hun var fra et annet folk, tok Gud imot henne, og hun ble stammor til David og til Kristus. Gud kaller alle folk til seg.",
      am: "ሩት ለአማትዋ ታማኝ ነበረች፤ የእስራኤልንም አምላክ መረጠች። ከሌላ ሕዝብ ብትሆንም እግዚአብሔር ተቀበላት፤ የዳዊትና የክርስቶስ ቅድመ አያትም ሆነች። እግዚአብሔር አሕዛብን ሁሉ ወደ ራሱ ይጠራል።",
    },
    minnevers: "Ruth 1:16",
    sporsmal: [
      {
        sporsmal: { no: "Hva sa Rut til Noomi?", am: "ሩት ለኑኃሚን ምን አለቻት?" },
        svar: {
          no: "«Ditt folk er mitt folk, og din Gud er min Gud.»",
          am: "«ሕዝብሽ ሕዝቤ፣ አምላክሽም አምላኬ ይሆናል።»",
        },
      },
      {
        sporsmal: { no: "Hvem giftet Rut seg med?", am: "ሩት ማንን አገባች?" },
        svar: { no: "Boas.", am: "ቦዔዝን።" },
      },
      {
        sporsmal: { no: "Hvilken berømt konge kom fra Rut?", am: "ከሩት ዘር የተወለደው ታዋቂ ንጉሥ ማን ነው?" },
        svar: { no: "Kong David.", am: "ንጉሥ ዳዊት።" },
      },
    ],
  },
  {
    slug: "samuel-kalles",
    testament: "gt",
    nr: 18,
    tittel: { no: "Gud kaller den unge Samuel", am: "እግዚአብሔር ብላቴናውን ሳሙኤልን ጠራው" },
    ref: "1Sam 3:1-21",
    tekst: [
      {
        no: "Hanna hadde bedt Gud om en sønn, og Gud hørte bønnen hennes. Hun kalte ham Samuel. Da han var liten, ga hun ham til Herren, og han bodde hos presten Eli i Guds hus i Silo.",
        am: "ሐና ወንድ ልጅ እንዲሰጣት ወደ እግዚአብሔር ጸለየች፤ እግዚአብሔርም ጸሎትዋን ሰማ። ስሙንም ሳሙኤል ብላ ጠራችው። ገና ሕፃን ሳለ ለእግዚአብሔር ሰጠችው፤ እርሱም በሴሎ በእግዚአብሔር ቤት ከካህኑ ከዔሊ ጋር ይኖር ነበር።",
      },
      {
        no: "En natt lå Samuel og sov i templet, der Guds ark sto. Da ropte Herren: «Samuel!» Samuel svarte: «Her er jeg!» og løp til Eli. Men Eli sa: «Jeg ropte ikke på deg. Gå og legg deg igjen.»",
        am: "አንድ ሌሊት ሳሙኤል የእግዚአብሔር ታቦት ባለበት በቤተ መቅደስ ተኝቶ ነበር። እግዚአብሔርም «ሳሙኤል» ብሎ ጠራው። ሳሙኤልም «እነሆኝ» ብሎ ወደ ዔሊ ሮጠ። ዔሊ ግን «አልጠራሁህም፤ ተመልሰህ ተኛ» አለው።",
      },
      {
        no: "Dette skjedde tre ganger. Da forsto Eli at det var Herren som kalte gutten. Han sa: «Hvis han roper igjen, skal du si: Tal, Herre, for din tjener hører.»",
        am: "ይህ ሦስት ጊዜ ሆነ። ዔሊም ብላቴናውን የጠራው እግዚአብሔር እንደ ሆነ አስተዋለ። «ደግሞ ቢጠራህ ‹አቤቱ፥ ባሪያህ ይሰማልና ተናገር› በለው» አለው።",
      },
      {
        no: "Herren kom og ropte som før: «Samuel, Samuel!» Samuel svarte: «Tal, for din tjener hører.» Fra den dagen talte Gud til Samuel, og han vokste opp og ble en stor profet for hele Israel.",
        am: "እግዚአብሔርም መጥቶ እንደ ቀድሞው «ሳሙኤል ሳሙኤል» ብሎ ጠራው። ሳሙኤልም «ባሪያህ ይሰማልና ተናገር» አለ። ከዚያ ቀን ጀምሮ እግዚአብሔር ለሳሙኤል ይናገር ነበር፤ እርሱም አድጎ ለእስራኤል ሁሉ ታላቅ ነቢይ ሆነ።",
      },
    ],
    laerdom: {
      no: "Gud taler også til barn, og barn kan tjene Gud i kirka. Som Samuel skal vi lytte når Gud taler til oss gjennom Bibelen og kirka. Kirka lærer at også Jomfru Maria ble gitt til Gud som barn og vokste opp i templet.",
      am: "እግዚአብሔር ለሕፃናትም ይናገራል፤ ሕፃናትም በቤተ ክርስቲያን እግዚአብሔርን ማገልገል ይችላሉ። እንደ ሳሙኤል እግዚአብሔር በመጽሐፍ ቅዱስና በቤተ ክርስቲያን ሲናገረን ልንሰማ ይገባናል። እመቤታችንም በሕፃንነቷ ለእግዚአብሔር ተሰጥታ በቤተ መቅደስ እንዳደገች ቤተ ክርስቲያን ታስተምራለች።",
    },
    minnevers: "1Sam 3:10",
    sporsmal: [
      {
        sporsmal: { no: "Hvem trodde Samuel ropte på ham?", am: "ሳሙኤል የጠራው ማን መሰለው?" },
        svar: { no: "Presten Eli.", am: "ካህኑ ዔሊ።" },
      },
      {
        sporsmal: { no: "Hva lærte Eli Samuel å svare?", am: "ዔሊ ሳሙኤልን ምን ብሎ እንዲመልስ አስተማረው?" },
        svar: { no: "«Tal, Herre, for din tjener hører.»", am: "«አቤቱ፥ ባሪያህ ይሰማልና ተናገር።»" },
      },
    ],
  },
  {
    slug: "david-og-goliat",
    testament: "gt",
    nr: 19,
    tittel: { no: "David og Goliat", am: "ዳዊትና ጎልያድ" },
    ref: "1Sam 17:1-51",
    tekst: [
      {
        no: "Israelittene og filisterne sto klare til krig. Hver dag kom en kjempe fra filisterne fram. Han het Goliat og var over to og en halv meter høy. Han hånet Israels hær, og alle var redde for ham.",
        am: "እስራኤላውያንና ፍልስጥኤማውያን ለጦርነት ተሰልፈው ነበር። ከፍልስጥኤማውያንም ሰፈር ጎልያድ የተባለ ስድስት ክንድ ከስንዝር ቁመት ያለው ጀግና በየቀኑ ይወጣ ነበር። የእስራኤልን ሠራዊት ይገዳደር ነበር፤ ሁሉም ፈሩት።",
      },
      {
        no: "Den unge gjeteren David kom med mat til brødrene sine. Han sa til kong Saul: «Herren som reddet meg fra løven og bjørnen, vil redde meg fra denne filisteren også.»",
        am: "ብላቴናው እረኛ ዳዊት ለወንድሞቹ ስንቅ ይዞ መጣ። ንጉሡን ሳኦልንም «ከአንበሳና ከድብ እጅ ያስጣለኝ እግዚአብሔር ከዚህ ፍልስጥኤማዊ እጅ ያስጥለኛል» አለው።",
      },
      {
        no: "David tok ikke rustningen til Saul. Han tok bare staven sin, en slynge og fem glatte steiner fra bekken. Til Goliat sa han: «Du kommer mot meg med sverd og spyd, men jeg kommer i Herrens navn.»",
        am: "ዳዊት የሳኦልን የጦር ልብስ አልወሰደም። በትሩንና ወንጭፉን ብቻ ይዞ ከወንዝ አምስት ድብልብል ድንጋዮችን መረጠ። ጎልያድንም «አንተ ሰይፍና ጦር ይዘህ ትመጣብኛለህ፤ እኔ ግን በሠራዊት ጌታ በእግዚአብሔር ስም እመጣብሃለሁ» አለው።",
      },
      {
        no: "David slynget en stein som traff Goliat i pannen, og kjempen falt til jorden. Slik vant Herren over filisterne. Alle skjønte at det ikke er med sverd og spyd Herren frelser.",
        am: "ዳዊትም በወንጭፉ ድንጋይ ወረወረ፤ ጎልያድንም ግምባሩን መታው፤ ጀግናውም በምድር ላይ ወደቀ። እንዲህም እግዚአብሔር ፍልስጥኤማውያንን አሸነፈ። እግዚአብሔር በሰይፍና በጦር እንደማያድን ሁሉም አወቁ።",
      },
    ],
    laerdom: {
      no: "Seieren kommer fra Gud, ikke fra styrke eller våpen. Kirkefedrene ser David, som var fra Betlehem, som et bilde på Kristus, Davids sønn, som vant over djevelen for å frelse oss.",
      am: "ድል ከእግዚአብሔር ነው እንጂ ከኃይል ወይም ከጦር መሣሪያ አይደለም። ሊቃውንት የቤተ ልሔሙን ዳዊትን ዲያብሎስን ድል አድርጎ ያዳነን የዳዊት ልጅ የክርስቶስ ምሳሌ አድርገው ያዩታል።",
    },
    minnevers: "1Sam 17:45",
    sporsmal: [
      {
        sporsmal: { no: "Hvor mange steiner tok David fra bekken?", am: "ዳዊት ከወንዝ ስንት ድንጋዮች መረጠ?" },
        svar: { no: "Fem.", am: "አምስት።" },
      },
      {
        sporsmal: { no: "I hvems navn gikk David mot Goliat?", am: "ዳዊት በማን ስም ወደ ጎልያድ ሄደ?" },
        svar: { no: "I Herrens navn.", am: "በእግዚአብሔር ስም።" },
      },
      {
        sporsmal: { no: "Hvem hadde reddet David fra løven og bjørnen?", am: "ዳዊትን ከአንበሳና ከድብ ያዳነው ማን ነው?" },
        svar: { no: "Herren.", am: "እግዚአብሔር።" },
      },
    ],
  },
  {
    slug: "salomos-visdom",
    testament: "gt",
    nr: 20,
    tittel: { no: "Salomo ber om visdom", am: "ሰሎሞን ጥበብን ለመነ" },
    ref: "1Kgs 3:5-28",
    tekst: [
      {
        no: "Salomo, Davids sønn, ble konge. En natt i Gibeon viste Gud seg for ham i en drøm og sa: «Be om hva du vil, så skal jeg gi deg det.»",
        am: "የዳዊት ልጅ ሰሎሞን ነገሠ። በገባዖንም እግዚአብሔር በሌሊት በሕልም ተገለጠለትና «ምን እንድሰጥህ ለምን» አለው።",
      },
      {
        no: "Salomo sa: «Jeg er bare ung. Gi meg et forstandig hjerte, så jeg kan dømme folket ditt og skjelne mellom godt og ondt.» Dette gledet Herren. Han ga Salomo visdom, og i tillegg rikdom og ære som han ikke hadde bedt om.",
        am: "ሰሎሞንም «እኔ ገና ብላቴና ነኝ፤ በሕዝብህ ላይ መፍረድ እችል ዘንድ መልካሙንና ክፉውንም እለይ ዘንድ አስተዋይ ልቡና ስጠኝ» አለ። ይህም እግዚአብሔርን ደስ አሰኘው። ጥበብን ሰጠው፤ ያልለመነውንም ባለጠግነትና ክብር ጨመረለት።",
      },
      {
        no: "Snart kom to kvinner til kongen. De bodde i samme hus og hadde begge fått en baby. Den ene babyen døde om natten. Nå sa begge kvinnene: «Det levende barnet er mitt!»",
        am: "ብዙም ሳይቆይ ሁለት ሴቶች ወደ ንጉሡ መጡ። በአንድ ቤት ይኖሩ ነበር፤ ሁለቱም ወልደው ነበር። የአንደኛዋ ልጅ በሌሊት ሞተ። አሁን ሁለቱም «ደኅነኛው ልጅ የእኔ ነው» አሉ።",
      },
      {
        no: "Salomo sa: «Hent et sverd og del barnet i to.» Da ropte den virkelige moren: «Nei, gi henne barnet, men drep det ikke!» Da visste Salomo hvem som var moren, og ga henne barnet. Hele Israel så at Guds visdom var i ham.",
        am: "ሰሎሞንም «ሰይፍ አምጡና ሕፃኑን ለሁለት ክፈሉት» አለ። እውነተኛዋ እናትም «ጌታዬ ሆይ፥ ሕፃኑን ለእርስዋ ስጣት እንጂ አትግደለው» ብላ ጮኸች። ሰሎሞንም እናቱ ማን እንደ ሆነች አውቆ ሕፃኑን ሰጣት። እስራኤልም ሁሉ የእግዚአብሔር ጥበብ በእርሱ እንዳለ አዩ።",
      },
    ],
    laerdom: {
      no: "Visdom er en gave fra Gud, og vi kan be ham om den. Salomo ba ikke om rikdom for seg selv, men om å kunne tjene andre godt. Kirka lærer at ekte visdom begynner med å frykte Gud.",
      am: "ጥበብ የእግዚአብሔር ስጦታ ናት፤ ልንለምነውም እንችላለን። ሰሎሞን ለራሱ ባለጠግነትን አልለመነም፤ ሌሎችን በመልካም ማገልገል እንዲችል ለመነ እንጂ። ቤተ ክርስቲያን የእውነተኛ ጥበብ መጀመሪያ እግዚአብሔርን መፍራት እንደ ሆነ ታስተምራለች።",
    },
    minnevers: "1Kgs 3:9",
    sporsmal: [
      {
        sporsmal: { no: "Hva ba Salomo Gud om?", am: "ሰሎሞን እግዚአብሔርን ምን ለመነ?" },
        svar: {
          no: "Et forstandig hjerte, så han kunne dømme folket rett.",
          am: "በሕዝቡ ላይ በትክክል እንዲፈርድ አስተዋይ ልቡና።",
        },
      },
      {
        sporsmal: { no: "Hvordan fant Salomo ut hvem som var den virkelige moren?", am: "ሰሎሞን እውነተኛዋን እናት እንዴት አወቀ?" },
        svar: {
          no: "Hun ville heller gi bort barnet enn at det skulle dø.",
          am: "ሕፃኑ ከሚሞት ይልቅ ለሌላዋ እንዲሰጥ ስለ መረጠች።",
        },
      },
    ],
  },
  {
    slug: "dronningen-av-saba",
    testament: "gt",
    nr: 21,
    tittel: { no: "Dronningen av Saba besøker Salomo", am: "ንግሥተ ሳባ ሰሎሞንን ጐበኘች" },
    ref: "1Kgs 10:1-13",
    tekst: [
      {
        no: "Dronningen av Saba hørte hvor vis Salomo var, og hvor stor Herrens navn var hos ham. Hun reiste til Jerusalem for å prøve ham med vanskelige spørsmål. Hun kom med kameler fulle av krydder, gull og edelsteiner.",
        am: "የሳባ ንግሥት በእግዚአብሔር ስም የወጣለትን የሰሎሞንን ዝና ሰማች። በእንቆቅልሽ ልትፈትነውም ወደ ኢየሩሳሌም መጣች። ሽቱ፣ ብዙ ወርቅና የከበረ ዕንቍ በግመሎች ላይ አስጭና መጣች።",
      },
      {
        no: "Hun spurte Salomo om alt hun hadde på hjertet, og han svarte på alle spørsmålene hennes. Hun så visdommen hans, huset han hadde bygd og ofrene i Herrens hus.",
        am: "በልብዋ ያለውን ሁሉ ጠየቀችው፤ ሰሎሞንም የጠየቀችውን ሁሉ ፈታላት። ጥበቡን፣ የሠራውን ቤትና በእግዚአብሔር ቤት የሚቀርበውን መሥዋዕት አየች።",
      },
      {
        no: "Hun sa: «Jeg trodde ikke det jeg hørte før jeg kom og så det med egne øyne. Ikke engang halvparten var fortalt meg! Lovet være Herren din Gud!» Hun ga kongen store gaver, og Salomo ga henne alt hun ønsket. Så dro hun hjem til landet sitt.",
        am: "እርስዋም «መጥቼ በዓይኔ እስካይ ድረስ የሰማሁትን አላመንሁም ነበር፤ እነሆም እኩሌታውን አልነገሩኝም ነበር። አምላክህ እግዚአብሔር የተባረከ ይሁን» አለች። ለንጉሡም ብዙ ስጦታ ሰጠችው፤ ሰሎሞንም የወደደችውን ሁሉ ሰጣት። ከዚያም ወደ አገርዋ ተመለሰች።",
      },
      {
        no: "Jesus nevner henne i evangeliet og kaller henne «dronningen fra Sør», ንግሥተ ዓዜብ, som kom fra jordens ende for å høre Salomos visdom.",
        am: "ጌታችን በወንጌል የሰሎሞንን ጥበብ ለመስማት ከምድር ዳር የመጣች ንግሥተ ዓዜብ ብሎ ጠቅሷታል።",
      },
    ],
    laerdom: {
      no: "Etter etiopisk tradisjon, fortalt i boka ክብረ ነገሥት, var dronningen av Saba fra Etiopia og het ማክዳ. Tradisjonen forteller at hun og Salomo fikk sønnen ምኒልክ, som senere kom til Jerusalem og tok med seg ታቦተ ጽዮን til Aksum. Dette er tradisjon, ikke bibeltekst, men Bibelen viser oss en dronning som søkte visdom og lovet Israels Gud.",
      am: "በክብረ ነገሥት በተጻፈው የኢትዮጵያ ትውፊት መሠረት ንግሥተ ሳባ ከኢትዮጵያ የነበረችና ማክዳ የምትባል ናት። ከሰሎሞንም ምኒልክን እንደ ወለደችና ምኒልክም በኋላ ወደ ኢየሩሳሌም ሄዶ ታቦተ ጽዮንን ወደ አክሱም እንዳመጣ ትውፊቱ ይናገራል። ይህ ትውፊት እንጂ የመጽሐፍ ቅዱስ ቃል አይደለም፤ መጽሐፍ ቅዱስ ግን ጥበብን የፈለገችና የእስራኤልን አምላክ ያመሰገነች ንግሥት ያሳየናል።",
    },
    minnevers: "Matt 12:42",
    sporsmal: [
      {
        sporsmal: { no: "Hvorfor reiste dronningen av Saba til Salomo?", am: "ንግሥተ ሳባ ወደ ሰሎሞን ለምን ሄደች?" },
        svar: {
          no: "For å prøve visdommen hans med vanskelige spørsmål.",
          am: "ጥበቡን በእንቆቅልሽ ልትፈትን።",
        },
      },
      {
        sporsmal: { no: "Hva kaller Jesus henne?", am: "ጌታችን ምን ብሎ ይጠራታል?" },
        svar: { no: "Dronningen fra Sør, ንግሥተ ዓዜብ.", am: "ንግሥተ ዓዜብ።" },
      },
      {
        sporsmal: { no: "Hva forteller ክብረ ነገሥት om sønnen hennes?", am: "ክብረ ነገሥት ስለ ልጅዋ ምን ይናገራል?" },
        svar: {
          no: "At han het ምኒልክ og tok med seg ታቦተ ጽዮን til Aksum. Dette er tradisjon.",
          am: "ስሙ ምኒልክ እንደ ሆነና ታቦተ ጽዮንን ወደ አክሱም እንዳመጣ ይናገራል። ይህ ትውፊት ነው።",
        },
      },
    ],
  },
  {
    slug: "elia-pa-karmel",
    testament: "gt",
    nr: 22,
    tittel: { no: "Elia på Karmelfjellet", am: "ኤልያስ በቀርሜሎስ ተራራ" },
    ref: "1Kgs 18:17-39",
    tekst: [
      {
        no: "Kong Akab og dronning Jesabel hadde fått Israel til å tilbe avguden Baal. Profeten Elia ba, og det kom ikke regn i landet på tre og et halvt år.",
        am: "ንጉሡ አክዓብና ንግሥቲቱ ኤልዛቤል እስራኤልን ጣዖቱን በኣልን እንዲያመልኩ አደረጓቸው። ነቢዩ ኤልያስም ጸለየ፤ በምድሪቱም ሦስት ዓመት ከስድስት ወር ዝናብ አልዘነበም።",
      },
      {
        no: "Elia samlet folket og 450 Baals-profeter på Karmelfjellet. Han sa: «Hvor lenge vil dere halte til begge sider? Er Herren Gud, så følg ham!» Hver side skulle legge en okse på et alter og be. Den guden som svarte med ild, var den sanne Gud.",
        am: "ኤልያስም ሕዝቡንና አራት መቶ አምሳውን የበኣል ነቢያት በቀርሜሎስ ተራራ ሰበሰበ። «እስከ መቼ ድረስ በሁለት አሳብ ታነክሳላችሁ? እግዚአብሔር አምላክ ቢሆን ተከተሉት» አላቸው። እያንዳንዱ ወገን ወይፈን በመሠዊያ ላይ አኑሮ ይጸልይ፤ በእሳት የሚመልስ አምላክ እርሱ እውነተኛ አምላክ ነው።",
      },
      {
        no: "Baals-profetene ropte fra morgen til kveld, men ingen svarte. Elia bygde et alter av tolv steiner og lot dem helle vann over offeret tre ganger, så til og med grøfta rundt ble full.",
        am: "የበኣል ነቢያት ከጠዋት እስከ ማታ ጮኹ፤ የሚመልስላቸው ግን አልነበረም። ኤልያስም ከዐሥራ ሁለት ድንጋዮች መሠዊያ ሠራ፤ በመሥዋዕቱም ላይ ሦስት ጊዜ ውኃ እንዲያፈስሱ አደረገ፤ በዙሪያውም ያለው ጕድጓድ በውኃ ተሞላ።",
      },
      {
        no: "Så ba Elia: «Herre, la folket få vite at du er Gud!» Da falt Herrens ild ned og brente opp offeret, veden, steinene og vannet. Folket falt på ansiktet og ropte: «Herren, han er Gud!» Senere ble Elia tatt opp til himmelen i en ildvogn.",
        am: "ኤልያስም «አቤቱ፥ አንተ አምላክ እንደ ሆንህ ይህ ሕዝብ ያውቅ ዘንድ ስማኝ» ብሎ ጸለየ። የእግዚአብሔርም እሳት ወርዳ መሥዋዕቱን፣ እንጨቱን፣ ድንጋዮቹንና ውኃውን በላች። ሕዝቡም በግምባራቸው ተደፍተው «እግዚአብሔር እርሱ አምላክ ነው» አሉ። ኤልያስም ከጊዜ በኋላ በእሳት ሰረገላ ወደ ሰማይ ወጣ።",
      },
    ],
    laerdom: {
      no: "Det finnes bare én sann Gud, og vi kan ikke tjene både ham og avguder. Elia viser hvor sterk bønnen til et rettferdig menneske er. Fordi Elia ble tatt opp levende til himmelen, lærer kirka at han, sammen med Enok, skal komme igjen før verdens ende.",
      am: "እውነተኛ አምላክ አንድ ብቻ ነው፤ እርሱንና ጣዖታትን በአንድነት ማምለክ አንችልም። ኤልያስ የጻድቅ ሰው ጸሎት ምን ያህል ኃይል እንዳለው ያሳየናል። ኤልያስ በሕይወት ሳለ ወደ ሰማይ ስለ ተወሰደ ከሄኖክ ጋር በዓለም መጨረሻ ተመልሶ እንደሚመጣ ቤተ ክርስቲያን ታስተምራለች።",
    },
    minnevers: "1Kgs 18:39",
    sporsmal: [
      {
        sporsmal: { no: "Hvordan skulle de finne ut hvem som var den sanne Gud?", am: "እውነተኛውን አምላክ በምን ሊያውቁ ነበር?" },
        svar: { no: "Den som svarte med ild, var Gud.", am: "በእሳት የሚመልስ እርሱ አምላክ ነው።" },
      },
      {
        sporsmal: { no: "Hva ropte folket da ilden falt?", am: "እሳቱ በወረደ ጊዜ ሕዝቡ ምን ብለው ጮኹ?" },
        svar: { no: "«Herren, han er Gud!»", am: "«እግዚአብሔር እርሱ አምላክ ነው።»" },
      },
    ],
  },
  {
    slug: "ildovnen",
    testament: "gt",
    nr: 23,
    tittel: { no: "De tre unge mennene i ildovnen", am: "ሦስቱ ወጣቶች በእሳት እቶን" },
    ref: "Dan 3:1-30",
    tekst: [
      {
        no: "Kong Nebukadnesar i Babylon laget et stort gullbilde. Han befalte at alle skulle falle ned og tilbe bildet når musikken spilte. Den som ikke gjorde det, skulle kastes i en brennende ovn.",
        am: "የባቢሎን ንጉሥ ናቡከደነፆር ታላቅ የወርቅ ምስል አሠራ። የመለከቱንና የመሰንቆውን ድምፅ በሰሙ ጊዜ ሁሉም ወድቀው ለምስሉ እንዲሰግዱ አዘዘ። ያልሰገደ ሁሉ ወደሚነድድ የእሳት እቶን ይጣላል።",
      },
      {
        no: "Tre unge jøder ville ikke bøye seg. På hebraisk het de Hananja, Asarja og Misael, men i Babylon ble de kalt Sadrak, Mesak og Abed-Nego. De sa til kongen: «Vår Gud kan redde oss. Men selv om han ikke gjør det, vil vi ikke tilbe gullbildet ditt.»",
        am: "ሦስት አይሁድ ወጣቶች ግን አልሰገዱም። ስማቸው አናንያ፣ አዛርያና ሚሳኤል ነበረ፤ በባቢሎን ግን ሲድራቅ፣ ሚሳቅና አብደናጎ ተብለው ተጠሩ። ንጉሡንም «የምናመልከው አምላካችን ሊያድነን ይችላል። ባያድነን እንኳ ላቆምኸው የወርቅ ምስል አንሰግድም» አሉት።",
      },
      {
        no: "Kongen ble rasende. Han lot ovnen fyre opp sju ganger varmere enn vanlig, og de tre ble bundet og kastet inn i ilden.",
        am: "ንጉሡም እጅግ ተቈጣ። እቶኑ ከልማዱ ሰባት እጥፍ እንዲነድድ አዘዘ፤ ሦስቱም ታስረው ወደ እሳቱ ተጣሉ።",
      },
      {
        no: "Men da kongen så inn, ble han forferdet: «Jeg ser fire menn som går fritt omkring i ilden, og de er ikke skadet!» Han ropte dem ut. Ikke et hår var svidd, og klærne luktet ikke engang røyk. Kongen lovpriste Gud, som hadde sendt sin engel og reddet dem.",
        am: "ንጉሡ ግን ወደ እቶኑ ሲመለከት ተደነቀ፤ «እነሆ፥ በእሳቱ መካከል የተፈቱ የሚመላለሱ አራት ሰዎች አያለሁ፤ ምንም አላቈሰላቸውም» አለ። ከእሳቱም እንዲወጡ ጠራቸው። ከራሳቸው አንድ ጠጕር አልተቃጠለም፤ የእሳትም ሽታ በልብሳቸው አልነበረም። ንጉሡም መልአኩን ልኮ ያዳናቸውን አምላክ አመሰገነ።",
      },
    ],
    laerdom: {
      no: "De tre unge mennene var trofaste mot Gud selv om de kunne dø. Kirka lærer at det var erkeengelen Gabriel som ble sendt for å redde dem, og minnes dette på ታኅሣሥ ገብርኤል. Ilden som ikke brente dem, ser kirka også som et bilde på Maria, som bar guddommens ild uten å brenne opp.",
      am: "ሦስቱ ወጣቶች ሞት ቢመጣባቸውም ለእግዚአብሔር ታማኝ ሆኑ። ሊያድናቸው የተላከው ቅዱስ ገብርኤል እንደ ሆነ ቤተ ክርስቲያን ታስተምራለች፤ ይህንንም በታኅሣሥ ገብርኤል ታስባለች። ያላቃጠላቸውን እሳትም የመለኮትን እሳት ተሸክማ ያልተቃጠለችው የእመቤታችን ምሳሌ አድርጋ ታየዋለች።",
    },
    minnevers: "Dan 3:17",
    sporsmal: [
      {
        sporsmal: { no: "Hvorfor ble de tre unge mennene kastet i ovnen?", am: "ሦስቱ ወጣቶች ለምን ወደ እቶን ተጣሉ?" },
        svar: {
          no: "Fordi de ikke ville tilbe kongens gullbilde.",
          am: "ለንጉሡ የወርቅ ምስል ስላልሰገዱ።",
        },
      },
      {
        sporsmal: { no: "Hvor mange så kongen i ilden?", am: "ንጉሡ በእሳቱ ውስጥ ስንት ሰዎች አየ?" },
        svar: { no: "Fire.", am: "አራት።" },
      },
      {
        sporsmal: { no: "Hvem lærer kirka at reddet dem?", am: "ቤተ ክርስቲያን ያዳናቸው ማን እንደ ሆነ ታስተምራለች?" },
        svar: { no: "Erkeengelen Gabriel.", am: "ቅዱስ ገብርኤል።" },
      },
    ],
  },
  {
    slug: "daniel-i-lovehulen",
    testament: "gt",
    nr: 24,
    tittel: { no: "Daniel i løvehulen", am: "ዳንኤል በአንበሶች ጕድጓድ" },
    ref: "Dan 6:1-28",
    tekst: [
      {
        no: "Daniel var en av de øverste lederne hos kong Dareios, fordi det var en god ånd i ham. De andre lederne ble misunnelige og lette etter noe å anklage ham for, men de fant ingenting galt.",
        am: "ዳንኤል መልካም መንፈስ ስለ ነበረበት በንጉሡ በዳርዮስ ዘንድ ከአለቆቹ ሁሉ በለጠ። ሌሎቹ አለቆች ቀኑበት፤ የሚከሱበትንም ነገር ፈለጉ፤ ነገር ግን ምንም በደል አላገኙበትም።",
      },
      {
        no: "Da lurte de kongen til å lage en lov: I tretti dager fikk ingen be til noen annen enn kongen. Den som brøt loven, skulle kastes i løvehulen.",
        am: "ስለዚህ ንጉሡን አታለው ሕግ አስወጡ፤ ሠላሳ ቀን ከንጉሡ በቀር ወደ ማንም የሚለምን ቢኖር ወደ አንበሶች ጕድጓድ ይጣላል።",
      },
      {
        no: "Daniel visste om loven, men han gikk hjem som før. Med vinduene åpne mot Jerusalem knelte han og ba til Gud tre ganger om dagen. Mennene anklaget ham, og kongen måtte, svært lei seg, la ham kaste i løvehulen.",
        am: "ዳንኤል ሕጉ እንደ ወጣ ቢያውቅም እንደ ቀድሞው ወደ ቤቱ ገባ። መስኮቶቹ ወደ ኢየሩሳሌም ተከፍተው በቀን ሦስት ጊዜ ተንበርክኮ ወደ እግዚአብሔር ይጸልይ ነበር። ሰዎቹም ከሰሱት፤ ንጉሡም እጅግ አዝኖ ወደ አንበሶች ጕድጓድ አስጣለው።",
      },
      {
        no: "Kongen fikk ikke sove den natten. Tidlig om morgenen løp han til hulen og ropte. Daniel svarte: «Min Gud sendte sin engel og lukket løvenes gap.» Daniel var uskadd, for han hadde stolt på Gud. Kongen befalte at alle skulle frykte Daniels Gud.",
        am: "ንጉሡም በዚያች ሌሊት እንቅልፍ ራቀው። በማለዳም ወደ ጕድጓዱ ፈጥኖ ሄዶ ጠራው። ዳንኤልም «አምላኬ መልአኩን ልኮ የአንበሶችን አፍ ዘጋ» አለው። ዳንኤል በአምላኩ ታምኖ ነበርና ምንም አልጐዳውም። ንጉሡም ሰዎች ሁሉ የዳንኤልን አምላክ እንዲፈሩ አዘዘ።",
      },
    ],
    laerdom: {
      no: "Daniel sluttet ikke å be selv når det var farlig. Kirka lærer oss å be til faste tider hver dag, slik Daniel ba tre ganger om dagen, og David sju ganger om dagen. Gud beskytter dem som stoler på ham.",
      am: "ዳንኤል አደጋ ቢኖርም መጸለይን አላቋረጠም። ቤተ ክርስቲያን ዳንኤል በቀን ሦስት ጊዜ፣ ዳዊትም በቀን ሰባት ጊዜ እንደ ጸለዩ በየዕለቱ በተወሰኑ ሰዓታት እንድንጸልይ ታስተምረናለች። እግዚአብሔር በእርሱ የሚታመኑትን ይጠብቃል።",
    },
    minnevers: "Dan 6:22",
    sporsmal: [
      {
        sporsmal: { no: "Hvor mange ganger om dagen ba Daniel?", am: "ዳንኤል በቀን ስንት ጊዜ ይጸልይ ነበር?" },
        svar: { no: "Tre ganger.", am: "ሦስት ጊዜ።" },
      },
      {
        sporsmal: { no: "Hvorfor gjorde ikke løvene Daniel noe?", am: "አንበሶቹ ዳንኤልን ለምን አልጐዱትም?" },
        svar: {
          no: "Fordi Gud sendte sin engel og lukket løvenes gap.",
          am: "እግዚአብሔር መልአኩን ልኮ የአንበሶችን አፍ ስለ ዘጋ።",
        },
      },
    ],
  },
  {
    slug: "jona",
    testament: "gt",
    nr: 25,
    tittel: { no: "Jona og den store fisken", am: "ዮናስና ታላቁ ዓሣ" },
    ref: "Jonah 1:1-17",
    tekst: [
      {
        no: "Gud sa til profeten Jona: «Gå til den store byen Ninive og forkynn mot den, for ondskapen deres har steget opp til meg.» Men Jona ville ikke. Han gikk om bord i et skip til Tarsis for å flykte bort fra Herren.",
        am: "እግዚአብሔር ነቢዩን ዮናስን «ወደ ታላቂቱ ከተማ ወደ ነነዌ ሂድ፤ ክፋታቸው ወደ ፊቴ ወጥቶአልና በእርስዋ ላይ ስበክ» አለው። ዮናስ ግን አልፈለገም። ከእግዚአብሔር ፊት ሊኰበልል ወደ ተርሴስ በሚሄድ መርከብ ተሳፈረ።",
      },
      {
        no: "Herren sendte en kraftig storm, og skipet holdt på å gå i stykker. Sjømennene kastet lodd, og loddet falt på Jona. Han sa: «Kast meg i havet, så blir det stille.» De kastet ham ut, og havet ble stille.",
        am: "እግዚአብሔርም በባሕሩ ላይ ታላቅ ነፋስ አመጣ፤ መርከቢቱም ልትሰበር ቀረበች። መርከበኞቹም ዕጣ ተጣጣሉ፤ ዕጣውም በዮናስ ላይ ወደቀ። እርሱም «ወደ ባሕር ጣሉኝ፤ ባሕሩም ጸጥ ይላል» አላቸው። ወደ ባሕር ጣሉት፤ ባሕሩም ጸጥ አለ።",
      },
      {
        no: "Gud sendte en stor fisk som slukte Jona. Han var i fiskens buk i tre dager og tre netter. Der ba han til Gud, og Gud befalte fisken å spy ham ut på land.",
        am: "እግዚአብሔርም ዮናስን የሚውጥ ታላቅ ዓሣ አዘጋጀ። ዮናስም ሦስት ቀንና ሦስት ሌሊት በዓሣው ሆድ ውስጥ ነበረ። በዚያም ወደ እግዚአብሔር ጸለየ፤ እግዚአብሔርም ዓሣውን አዘዘው፤ ዮናስንም በየብስ ላይ ተፋው።",
      },
      {
        no: "Nå gikk Jona til Ninive og forkynte: «Om førti dager skal Ninive bli ødelagt!» Folket trodde på Gud. Alle, fra kongen til den minste, fastet og kledde seg i sekk. Gud så at de vendte om fra sin onde vei, og han sparte byen.",
        am: "ዮናስም ወደ ነነዌ ሄዶ «በአርባ ቀን ነነዌ ትገለበጣለች» ብሎ ሰበከ። የነነዌም ሰዎች እግዚአብሔርን አመኑ። ከንጉሡ ጀምሮ እስከ ታናሹ ድረስ ሁሉም ጾሙ፤ ማቅም ለበሱ። እግዚአብሔርም ከክፉ መንገዳቸው እንደ ተመለሱ አየ፤ ከተማይቱንም ማረ።",
      },
    ],
    laerdom: {
      no: "Jesus sa at slik Jona var tre dager i fiskens buk, skulle han selv være tre dager i jorden og så stå opp. Til minne om Ninives omvendelse holder kirka ጾመ ነነዌ, en tredagers faste før den store fasten. Gud er barmhjertig mot alle som angrer.",
      am: "ጌታችን ዮናስ በዓሣው ሆድ ሦስት ቀን እንደ ነበረ እርሱም በምድር ልብ ሦስት ቀን ቆይቶ እንደሚነሣ ተናገረ። ቤተ ክርስቲያንም የነነዌን ሰዎች ንስሐ ለማሰብ ከዐቢይ ጾም በፊት የሦስት ቀን ጾመ ነነዌን ትጾማለች። እግዚአብሔር ንስሐ ለሚገቡ ሁሉ መሐሪ ነው።",
    },
    minnevers: "Matt 12:40",
    sporsmal: [
      {
        sporsmal: { no: "Hvor lenge var Jona i fiskens buk?", am: "ዮናስ በዓሣው ሆድ ውስጥ ምን ያህል ቆየ?" },
        svar: { no: "Tre dager og tre netter.", am: "ሦስት ቀንና ሦስት ሌሊት።" },
      },
      {
        sporsmal: { no: "Hva gjorde folket i Ninive da Jona forkynte?", am: "ዮናስ በሰበከ ጊዜ የነነዌ ሰዎች ምን አደረጉ?" },
        svar: {
          no: "De trodde på Gud, fastet og vendte om.",
          am: "በእግዚአብሔር አመኑ፤ ጾሙ፤ ንስሐም ገቡ።",
        },
      },
      {
        sporsmal: { no: "Hvilken faste minner oss om Ninive?", am: "ነነዌን የሚያሳስበን የትኛው ጾም ነው?" },
        svar: { no: "ጾመ ነነዌ, som varer i tre dager.", am: "ሦስት ቀን የሚጾመው ጾመ ነነዌ።" },
      },
    ],
  },
];
