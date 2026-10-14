import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ቅዱስ ያሬድ og kirkesangen:
// Mahibere Kidusan (eotcmk.org): «ዝክረ ቅዱስ ያሬድ» (foreldrene, onkelen Abba Gedeon, larven som klatret sju ganger,
// at han ble rykket opp og hørte englene, «ዋይ ዜማ …», de tre fuglene og tonene ግእዝ, ዕዝል og አራራይ, ukene ስብከት,
// ብርሃን, ኖላዊ og መርዓዊ, de fem bøkene og at han ble borte ግንቦት 11), «ኢትዮጵያዊው ቅዱስ ያሬድ» (bønnen til Maria,
// fuglene fra Eden, de 24 himmelske prestene, den første hymnen «ሃሌ ሉያ ለአብ …» på ሙራደ ቃል, tonene og hva de er
// bilde på, hva hver bok inneholder, bønneuka og Kristus på korset over Aksum Zion, kong Gebre Meskel og staven
// i foten, ደብረ ሐዊ), «የቀለሙ ልጅ» (åtte sangtegn, 14 ቅዳሴ-melodier), «ወርኃ ግንቦት» (ግንቦት 11) og «እንደ ገብር ኄር
// ታማኝ አገልጋዮች እንኹን» (Herren lærte «ቃል በቃል ወይም በሰምና ወርቅ ወይም በምሳሌ»);
// ethiopianorthodox.org: «ቅዱስ ያሬድ» (PDF, አባ ማርያም እጅጉ: larven, kongen, ti sangtegn med navn og forklaring,
// og at noen mener tegnene ble skrevet inn senere), «የዜማ ቃል ትምህርት» (PDF: ordet ዜማ), «Church Music» (bruken av de
// tre tonene) og «The Ethiopian Orthodox Church School System» (ቅኔ, ሰምና ወርቅ og ቅኔ-formene).
// Usikkert: Kildene gir ulike årstall. MK sier at Yared ble født ሚያዝያ 5 år 505 (etiopisk tidsregning), PDF-en på
// ethiopianorthodox.org sier 493. Datoen da han ble rykket opp, står som ኅዳር 5–6 år 527 i én MK-artikkel og ኅዳር 6 år 534
// i en annen. Vi skriver bare «500-tallet» og tar ikke med årstall.
// Usikkert: Morens navn er ታውክልያ / ታውክሊያ (også kalt ክሪስቲና), farens አብዩድ (også kalt ይስሐቅ). Vi har ikke tatt med navnene.
// Usikkert: Når hver toneart brukes. «Church Music» (ethiopianorthodox.org) sier: ግእዝ på vanlige dager, ዕዝል på
// fastedager og i den store fasten, አራራይ på store høytider. Andre lærere forklarer det annerledes, og ofte blandes
// tonene i samme hymne. Vi har skrevet dette forsiktig – en መሪጌታ bør bekrefte.
// Usikkert: Tallet på sangtegn (ምልክት). MK sier åtte, ethiopianorthodox.org lister ti. PDF-en sier også at noen mener
// tegnene ble satt inn av lærde etter Yared, i kong Gelawdewos' tid (1501–1532 e.t.). Vi skriver begge deler.
export const yared: Tema = {
  slug: "yared",
  del: "musikk",
  tittel: { no: "Den hellige Yared og kirkesangen", am: "ቅዱስ ያሬድና ዜማ" },
  undertittel: {
    no: "Han hørte englene synge og lærte kirka å synge med dem",
    am: "የመላእክትን ምስጋና ሰምቶ ለቤተ ክርስቲያን ያስተማረ ሊቅ",
  },
  bilde: "lyre",
  ingress: {
    no:
      "ቅዱስ ያሬድ levde i Aksum i Etiopia på 500-tallet. Som gutt syntes han det var vanskelig å lære, men en liten larve lærte ham å ikke gi opp. Kirka forteller at Gud lot ham høre englene lovsynge i himmelen. Det han hørte, lærte han bort. Alle sangene vi synger i kirka i dag, bygger på Yareds tre toner og bøkene hans. Derfor kalles han «sangens far».",
    am:
      "ቅዱስ ያሬድ በስድስተኛው መቶ ክፍለ ዘመን በአክሱም የኖረ ኢትዮጵያዊ ሊቅ ነው። በልጅነቱ ትምህርት አስቸግሮት ነበር፤ አንዲት ትል ግን ተስፋ እንዳይቆርጥ አስተማረችው። እግዚአብሔር በሰማይ መላእክት ሲያመሰግኑ እንዲሰማ አደረገው፤ የሰማውንም ለቤተ ክርስቲያን አስተማረ። ዛሬ በቤተ ክርስቲያን የምንዘምረው ዝማሬ ሁሉ በቅዱስ ያሬድ ሦስት የዜማ ስልቶችና መጻሕፍት ላይ የተመሠረተ ነው። ስለዚህ «የዜማ አባት» ይባላል።",
  },
  hovedvers: "Col 3:16",
  avsnitt: [
    {
      id: "hvorfor",
      tittel: { no: "Hvorfor synger kirka?", am: "ቤተ ክርስቲያን ለምን ትዘምራለች?" },
      ingress: {
        no: "Ordet ዜማ betyr egentlig å rope eller å la stemmen lyde. I kirka betyr det den gledelige stemmen som lovpriser Gud.",
        am: "«ዜማ» ማለት በጠቅላላ አነጋገር ድምፅ ማሰማት ማለት ነው። በቤተ ክርስቲያን ግን ለእግዚአብሔር ምስጋና የሚቀርብበት የደስታ ድምፅ ዜማ ይባላል።",
      },
      punkter: [
        {
          tekst: {
            no: "Englene i himmelen lovsynger Gud uten stans: «Hellig, hellig, hellig.» Da Jesus ble født, sang englene: «Ære være Gud i det høieste.» Når vi synger i kirka, er vi med i englenes sang.",
            am: "በሰማይ ያሉ መላእክት «ቅዱስ፥ ቅዱስ፥ ቅዱስ» እያሉ ሳያቋርጡ ያመሰግናሉ። ጌታችን በተወለደ ጊዜም መላእክት «ክብር ለእግዚአብሔር በአርያም ይሁን» ብለው አመሰገኑ። በቤተ ክርስቲያን ስንዘምር ከመላእክት ምስጋና ጋር እንተባበራለን።",
          },
          vers: ["Isa 6:3", "Luke 2:13-14", "Job 38:7"],
        },
        {
          tekst: {
            no: "David lærte folket å synge for Gud med instrumenter. Den siste salmen hans sier: «Alt som har ånde, love Herren!» I Davids tid var det egne ledere for sangerne i templet.",
            am: "ዳዊት ሕዝቡን በዜማ መሣሪያዎች እግዚአብሔርን እንዲያመሰግኑ አስተማረ። የመጨረሻው መዝሙሩ «እስትንፋስ ያለው ሁሉ እግዚአብሔርን ያመስግን» ይላል። በዳዊት ዘመንም እግዚአብሔርን በዜማ ለማመስገን የመዘምራን አለቆች ነበሩ።",
          },
          vers: ["Ps 150:1-6", "Neh 12:46"],
        },
        {
          tekst: {
            no: "Apostelen Paulus ber oss synge «salmer og lovsanger og åndelige viser» for Gud i hjertet. I den amhariske Bibelen heter «åndelige viser» መንፈሳዊ ቅኔ. Den som er glad, skal synge lovsanger.",
            am: "ቅዱስ ጳውሎስ «በመዝሙርና በዝማሬ በመንፈሳዊም ቅኔ» በልባችን ለእግዚአብሔር እንድንዘምር ያስተምረናል። ያዕቆብም «ደስ የሚለውም ማንም ቢኖር እርሱ ይዘምር» ይላል።",
          },
          vers: ["Col 3:16", "Eph 5:19", "Jas 5:13"],
        },
        {
          tekst: {
            no: "I himmelen synger de frelste «en ny sang» for Lammet, Jesus. Kirkas sang på jorden er et bilde på denne sangen. Derfor synger vi med ærefrykt, med ånden og med forstanden.",
            am: "በሰማይ የተዋጁት ለበጉ «አዲስን ቅኔ ይዘምራሉ»። በምድር ያለው የቤተ ክርስቲያን ዜማ የዚያ ምስጋና ምሳሌ ነው። ስለዚህ በፍርሃትና «በመንፈስ … በአእምሮም» እንዘምራለን።",
          },
          vers: ["Rev 5:9", "Rev 14:3", "1Cor 14:15"],
        },
      ],
    },
    {
      id: "hvem",
      tittel: { no: "Hvem var Yared?", am: "ቅዱስ ያሬድ ማን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Yared ble født i Aksum på 500-tallet, i den tiden da kong Gebre Meskel (ዐፄ ገብረ መስቀል) styrte. Faren var prest (ቄሰ ገበዝ) i kirka Aksum Zion (አክሱም ጽዮን). Han døde da Yared var liten gutt. Men Gud er «de farløses far».",
            am: "ቅዱስ ያሬድ በስድስተኛው መቶ ክፍለ ዘመን በዐፄ ገብረ መስቀል ዘመነ መንግሥት በአክሱም ተወለደ። አባቱ የአክሱም ጽዮን ቄሰ ገበዝ ነበር፤ ያሬድ ገና ሕፃን ሳለ ሞተ። እግዚአብሔር ግን «ለድሀ አደጎች አባት» ነው።",
          },
          vers: ["Ps 68:6"],
        },
        {
          tekst: {
            no: "Moren tok ham med til onkelen hans, Abba Gedeon (አባ ጌዲዮን), som var lærer i Aksum. Der skulle Yared lære Davids salmer. Men det gikk tregt. Han klarte ikke å følge med de andre barna, og læreren var streng med ham.",
            am: "እናቱ ወደ አጎቱ ወደ መምህር አባ ጌዲዮን ወሰደችው፤ እርሱም በአክሱም መምህር ነበረ። ያሬድ መዝሙረ ዳዊትን ይማር ጀመረ፤ ነገር ግን ትምህርቱ አልገባውም። ከሌሎች ሕፃናት ጋር መወዳደር አልቻለም፤ መምህሩም ይቆጣው ነበር።",
          },
          vers: ["Heb 12:11"],
        },
        {
          tekst: {
            no: "Yared ble lei seg og rømte til et sted som heter Maykirah (ማይኪራህ). Der satte han seg under et tre. Han så en liten larve som prøvde å krype opp i treet for å spise en frukt. Den falt ned seks ganger. Den sjuende gangen kom den opp og spiste frukten.",
            am: "ያሬድ ተስፋ ቆርጦ ማይኪራህ ወደምትባል ቦታ ሸሸ። በዚያም ከአንዲት ዛፍ ሥር ዐረፈ። አንዲት ትል የዛፉን ፍሬ ለመብላት ስትወጣ ስትወርድ አየ። ስድስት ጊዜ ወደቀች፤ በሰባተኛው ግን ወጥታ ፍሬውን በላች።",
          },
          vers: ["Prov 6:6-8", "Prov 24:16"],
        },
        {
          tekst: {
            no: "Da tenkte Yared: «Hvis denne larven var så tålmodig for å få frukten, vil Gud åpne forstanden min også hvis jeg er tålmodig med lærdommen.» Han gikk tilbake, ba læreren om tilgivelse og begynte på nytt. Larven lærer oss å ikke gi opp.",
            am: "ያሬድም «ይህች ትል ፍሬውን ለመብላት እንዲህ ከታገሠች፣ እኔም ትምህርት ለመማር ብታገሥ እግዚአብሔር ይገልጽልኛል» አለ። ወደ መምህሩ ተመልሶ «አባቴ ሆይ፥ ይቅርታ አድርግልኝ፤ እንደ ቀድሞ አስተምረኝ» አለው፤ ትምህርቱንም ቀጠለ። ትሏ ተስፋ እንዳንቆርጥ ታስተምረናለች።",
          },
          vers: ["Gal 6:9", "Isa 40:31"],
        },
        {
          tekst: {
            no: "Yared gikk ofte til kirka i Aksum Zion og ba: «Herrens mor, be for meg at øynene i hjertet mitt må bli opplyst.» Gud gav ham visdom. Kirka forteller at han da lærte Davids salmer, profetenes sanger og Salomos høysang på én dag.",
            am: "ቅዱስ ያሬድ ወደ አክሱም ጽዮን ቤተ ክርስቲያን አዘውትሮ እየሄደ «የጌታዬ እናት እመቤቴ ሆይ፥ ዓይነ ልቡናዬን ያበራልኝ ዘንድ ለምኝልኝ» እያለ ይጸልይ ነበር። እግዚአብሔርም ጥበብን ገለጸለት፤ መዝሙረ ዳዊትን፣ መኃልየ ነቢያትንና መኃልየ መኃልይ ዘሰሎሞንን በአንድ ቀን አወቀ።",
          },
          vers: ["Jas 1:5", "Prov 2:6"],
        },
      ],
    },
    {
      id: "sangen",
      tittel: { no: "Hvordan Yared fikk sangen", am: "ቅዱስ ያሬድ ዜማውን እንዴት አገኘ?" },
      ingress: {
        no: "Før Yared sang man i kirka med lav stemme, nesten som stille lesing. Kirka forteller hvordan Gud gav sangen.",
        am: "ከቅዱስ ያሬድ በፊት ድምፅን ከፍ አድርጎ የሚያመሰግኑበት ዜማ አልነበረም፤ ቀስ ብለው እንደ ውርድ ንባብ ያመሰግኑ ነበር።",
      },
      punkter: [
        {
          tekst: {
            no: "Gud sendte tre fugler fra Edens hage til Yared, et bilde på Treenigheten. De talte til ham med menneskestemme: «Salig er det liv som bar deg, og brystene som ammet deg.» Det er nesten de samme ordene som en kvinne sa til Jesus. Og Jesus sa at om menneskene tier, skal steinene rope – Gud kan la skaperverket tale.",
            am: "እግዚአብሔር በሥላሴ አምሳል ሦስት አእዋፍን ከኤዶም ገነት ወደ ቅዱስ ያሬድ ላከ። እነርሱም በሰው አንደበት «ብፁዕ ያሬድ ብፅዕት ከርሥ እንተ ጾረተከ ወብፁዕት አጥባት እለ ሐፀናከ» አሉት። ይህም አንዲት ሴት ለጌታችን ያለችውን ቃል ይመስላል። ጌታችንም «እነዚህ ዝም ቢሉ ድንጋዮች ይጮኻሉ» ብሏል።",
          },
          vers: ["Luke 11:27", "Luke 19:40"],
        },
        {
          tekst: {
            no: "Fuglene sa at de var sendt for at han skulle lære lovsangen fra de 24 himmelske prestene. Så ble Yared rykket opp til det himmelske Jerusalem. Der hørte han englene prise Gud rundt tronen. Paulus forteller også om et menneske som ble rykket opp og hørte ord ingen kan si.",
            am: "አእዋፉ «ከሃያ አራቱ ካህናተ ሰማይ ማኅሌትን ትማር ዘንድ ልንነግርህ መጣን» አሉት። ከዚያም ቅዱስ ያሬድ ወደ ሰማያዊት ኢየሩሳሌም ተነጠቀ፤ መላእክትም በመንበሩ ዙሪያ ሆነው እግዚአብሔርን ሲያመሰግኑ ሰማ። ቅዱስ ጳውሎስም እስከ ሦስተኛው ሰማይ ስለ ተነጠቀ ሰው ይነግረናል።",
          },
          vers: ["2Cor 12:2-4", "Rev 4:8", "Rev 7:11-12"],
        },
        {
          tekst: {
            no: "Da Yared kom tilbake, gikk han inn i Aksum Zion og sang med høy stemme: «ሃሌ ሉያ ለአብ, ሃሌ ሉያ ለወልድ, ሃሌ ሉያ ወለመንፈስ ቅዱስ» – «Halleluja for Faderen, halleluja for Sønnen, halleluja for Den hellige ånd.» Stedet der han sang, kalles ሙራደ ቃል, «der ordet kom ned». Sangen kalte han አርያም, «det høye», fordi den kom fra himmelen.",
            am: "ቅዱስ ያሬድ ተመልሶ ወደ አክሱም ጽዮን ገባ፤ በዐውደ ምሕረቱም ቆሞ ድምፁን ከፍ አድርጎ «ሃሌ ሉያ ለአብ፣ ሃሌ ሉያ ለወልድ፣ ሃሌ ሉያ ወለመንፈስ ቅዱስ» ብሎ አዜመ። ዜማውን ያሰማበት ቦታ «ሙራደ ቃል» (የቃል መውረጃ) ይባላል። ይህችንም ዜማ «አርያም» አላት፤ ከሰማይ የተገኘች ማለት ነው።",
          },
          vers: ["Ps 150:1", "Luke 2:14"],
        },
        {
          tekst: {
            no: "Sangen var ny, og folket lurte på om den virkelig kom fra Gud. Kongen kalte folket til en uke med bønn og faste (ሱባኤ). Den sjuende dagen viste Herren seg som den korsfestede over kirka i Aksum Zion. Da sang Yared: «Han som ble naglet til korset … ham forkynner vi som Frelser.» Fra den dagen ble Yareds sang kirkas sang.",
            am: "ዜማው አዲስ ስለ ሆነ ካህናቱ፣ ንጉሡና ምእመናን «እንዴት እንቀበለው?» አሉ። ንጉሡም ሱባኤና ምህላ እንዲያዝ ዐወጀ። በሰባተኛው ቀን ጌታ እንደ ተሰቀለ ሆኖ በአክሱም ጽዮን ጉልላት ላይ ተገለጠ። ቅዱስ ያሬድም «ዘበመስቀሉ ተቀነወ … ኪያሁ ንሰብክ መድኅነ» ብሎ ዘመረ። ከዚያን ዕለት ጀምሮ የቅዱስ ያሬድ ዜማ የቤተ ክርስቲያን መደበኛ ዜማ ሆነ።",
          },
          vers: ["1Cor 1:23", "Gal 6:14"],
        },
        {
          tekst: {
            no: "Mahibere Kidusan forteller at Yared gav navn til ukene før jul etter hvordan Herren viste seg for ham: ስብከት (forkynnelsen), ብርሃን (lyset), ኖላዊ (hyrden) og መርዓዊ (brudgommen). Jesus sier selv: «Jeg er verdens lys» og «Jeg er den gode hyrde».",
            am: "ማኅበረ ቅዱሳን እንደሚያስተምረው ቅዱስ ያሬድ ጌታ በተገለጠለት አምሳል ሳምንታቱን «ስብከት»፣ «ብርሃን»፣ «ኖላዊ» እና «መርዓዊ» ብሎ ሰየማቸው። ጌታችንም «እኔ የዓለም ብርሃን ነኝ»፣ «መልካም እረኛ እኔ ነኝ» ብሏል።",
          },
          vers: ["John 8:12", "John 10:11", "Matt 9:15"],
        },
      ],
    },
    {
      id: "kongen",
      tittel: { no: "Kongen, staven og ግንቦት 11", am: "ንጉሡ፣ ዘንጉና ግንቦት ፲፩" },
      punkter: [
        {
          tekst: {
            no: "Kong Gebre Meskel kom ofte for å høre Yared synge. En gang var begge så oppslukt av sangen at kongen satte jernstaven sin ned på foten til Yared uten å merke det. Yared merket det heller ikke, og sang videre. Etterpå så de at foten blødde mye.",
            am: "ዐፄ ገብረ መስቀል የቅዱስ ያሬድን ዜማ ለመስማት ይመጡ ነበር። አንድ ቀን ሁለቱም በዜማው ተመስጠው ሳለ ንጉሡ ሳያውቁ የብረት ዘንጋቸውን በቅዱስ ያሬድ እግር ላይ ተከሉት። ያሬድም አላስተዋለም፤ ዜማውን ቀጠለ። ዜማው ሲያበቃ እግሩ ብዙ ደም ፈስሶት ነበር።",
          },
          vers: ["Ps 104:33"],
        },
        {
          tekst: {
            no: "Kongen ble lei seg og lovte å gi Yared hva han ville. Yared bad ikke om penger eller ære. Han bad om lov til å dra langt bort fra byen og leve resten av livet i bønn. Han hadde allerede lært opp mange elever som kunne føre sangen videre.",
            am: "ንጉሡ እጅግ አዝነው «የምትፈልገውን ማንኛውንም ነገር ጠይቀኝ እሰጥሃለሁ» አሉት። ቅዱስ ያሬድ ገንዘብ ወይም ክብር አልጠየቀም። «ብዙ ደቀ መዛሙርትን ተክቻለሁ፤ የቀረኝን ዘመን በጸሎትና በብሕትውና እኖር ዘንድ ፍቀድልኝ» አለ።",
          },
          vers: ["Luke 5:16", "2Tim 2:2"],
        },
        {
          tekst: {
            no: "Yared dro til Semien-fjellene (ሰሜን ተራሮች) og levde i bønn på fjellet ደብረ ሐዊ. Kirka sier at han ikke døde, men ble borte (ተሠወረ) ግንቦት 11. Slik ble også Enok tatt bort av Gud.",
            am: "ቅዱስ ያሬድ ወደ ሰሜን ተራሮች ሄደ፤ ደብረ ሐዊ በተባለው ተራራ በምናኔ ኖረ። ቤተ ክርስቲያን እንደምታስተምረው ግንቦት ፲፩ ቀን ተሠወረ እንጂ አልሞተም። ሄኖክም እንዲሁ እግዚአብሔር ስለ ወሰደው አልተገኘም።",
          },
          vers: ["Gen 5:24", "Heb 11:5"],
        },
        {
          tekst: {
            no: "Kirka feirer minnet hans hvert år ግንቦት 11 (rundt 19. mai). Mahibere Kidusan kaller ham «den etiopiske lovsangeren som ligner serafene». Vi minnes ham fordi han lærte oss Guds ord i sang, og vi ber om hans forbønn.",
            am: "ቤተ ክርስቲያን በየዓመቱ ግንቦት ፲፩ ቀን «የሱራፌል አምሳላቸው የሆነ ኢትዮጵያዊው ማኅሌታይ ቅዱስ ያሬድ» የተሠወረበትን ዕለት ታከብራለች። የእግዚአብሔርን ቃል በዜማ ስላስተማረን እናስበዋለን፤ ጸሎቱና አማላጅነቱ አይለየን።",
          },
          vers: ["Ps 112:6", "Heb 13:7"],
        },
      ],
    },
    {
      id: "tonene",
      tittel: { no: "De tre tonene: ግእዝ, ዕዝል og አራራይ", am: "ሦስቱ የዜማ ስልቶች፦ ግእዝ፣ ዕዝልና አራራይ" },
      ingress: {
        no: "All lovsang i kirka synges i tre tonearter. At de er tre, er et bilde på Treenigheten. At de brukes i én og samme lovsang, viser at Gud er én.",
        am: "በቤተ ክርስቲያን የሚቀርበው ምስጋና በሙሉ በሦስቱ የዜማ ዓይነቶች ነው። ሦስትነታቸው የምሥጢረ ሥላሴ ምሳሌ ሲሆን ለአንድ ምስጋና መዋላቸው የሥላሴን አንድነት ያስረዳል።",
      },
      punkter: [
        {
          tekst: {
            no: "ግእዝ betyr «den første». Tonen er rett, fast og sterk. Kirkas lærde kaller den derfor «den tørre tonen» (ደረቅ ዜማ). Den er et bilde på Faderen.",
            am: "ግእዝ ማለት በመጀመሪያ የተገኘ ማለት ነው። ስልቱ የቀና፣ ርቱዕ፣ ቀጥ ያለና ጠንካራ ነው፤ ከጠንካራነቱ የተነሣ ሊቃውንቱ «ደረቅ ዜማ» ብለውታል። ምሳሌነቱም የአብ ነው።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "ዕዝል er en mykere tone som synges sammen med ግእዝ, som om den blir båret på ryggen. Den er et bilde på Sønnen, som tålte tunge lidelser for oss. Da Herren viste seg på korset, sang Yared i ዕዝል.",
            am: "ዕዝል ከግእዝ ጋር ተደርቦ ወይም ታዝሎ የሚዜም ለስላሳ ዜማ ነው። በወልድ ይመሰላል፤ ወልድ ጽኑዕ መከራን ተቀብሏልና። ጌታ በመስቀል አምሳል በተገለጠለት ጊዜ ቅዱስ ያሬድ በዕዝል ዜማ ዘመረ።",
          },
          vers: ["Isa 53:5"],
        },
        {
          tekst: {
            no: "አራራይ er en tynn og mild tone som rører hjertet. Den er et bilde på Den hellige ånd, Trøsteren, som gav apostlene ro, trøst og mot etter pinsedagen.",
            am: "አራራይ የሚያራራ፣ የሚያሳዝንና ልብን የሚመስጥ ቀጠን ያለ ዜማ ነው። በመንፈስ ቅዱስ ይመሰላል፤ ሐዋርያትን ከበዓለ ጰራቅሊጦስ በኋላ ያረጋጋ፣ ያጽናናና ጥብዓት የሰጣቸው መንፈስ ቅዱስ ነውና።",
          },
          vers: ["John 15:26", "Acts 2:4"],
        },
        {
          tekst: {
            no: "Kirka velger tonen etter tiden i kirkeåret: Sangen er stor og glad på høytider og sørgmodig i fastetider og ved begravelser. Kirkas engelske nettside sier at ግእዝ brukes på vanlige dager, ዕዝል på fastedager og i den store fasten, og አራራይ på store høytider. Ofte blandes tonene i samme hymne.",
            am: "ቤተ ክርስቲያን ዜማዋን እንደ ወራቱና እንደ በዓሉ ታደርገዋለች፤ በበዓላት የደስታ፣ በጾምና በፍትሐት የኀዘን ዜማ ይዘመራል። የቤተ ክርስቲያኒቱ የእንግሊዝኛ ድረ ገጽ ግእዝ በዘወትር ቀናት፣ ዕዝል በአጽዋማትና በዐቢይ ጾም፣ አራራይ በዐበይት በዓላት እንደሚዜም ይገልጻል። ብዙ ጊዜም ሦስቱ በአንድ ዝማሬ ውስጥ ይገባሉ።",
          },
          vers: ["Eccl 3:4"],
        },
        {
          tekst: {
            no: "Kirka lærer at all lovsang i kirka skal følge Yareds tre toner og tegn. En melodi som går utenfor disse tre, hører ikke hjemme i kirka. Derfor er kirkesangen den samme i Aksum og i Norge.",
            am: "ማንኛውም ሰው በቤተ ክርስቲያን መዝሙር የሚያቀርበው የቅዱስ ያሬድን የዜማ ምልክቶችና ዓይነቶች ተከትሎ ነው። ከሦስቱ የዜማ ዓይነቶች የወጣ ዜማ ያለው ዝማሬ የቤተ ክርስቲያን አይደለም።",
          },
          vers: ["1Cor 14:40", "Ps 47:8"],
        },
      ],
    },
    {
      id: "tegnene",
      tittel: { no: "Sangtegnene (ምልክት)", am: "የዜማ ምልክቶች" },
      punkter: [
        {
          tekst: {
            no: "Yared skrev ikke bare ord. Over ordene står små tegn (ምልክት) som viser hvordan stemmen skal gå. Kirkas side kaller ham den første i Afrika som skrev ned musikk med tegn. Mahibere Kidusan sier at han skilte sangen med åtte sangtegn; kirkas nettside lister ti.",
            am: "ቅዱስ ያሬድ ዜማን በምልክት የጻፈ የመጀመሪያው አፍሪካዊ ነው። ማኅበረ ቅዱሳን «በስምንት የዜማ ምልክቶች የዜማ አጠቃቀሙን ለይቶ» ይላል፤ የቤተ ክርስቲያኒቱ ድረ ገጽ ደግሞ ዐሥር ምልክቶችን ይዘረዝራል።",
          },
          vers: ["1Cor 14:40", "Neh 8:8"],
        },
        {
          tekst: {
            no: "Noen av tegnene er: ይዘት (hold tonen kort og fast), ደረት (syng dypt, fra brystet), ቅናት (løft stemmen), ጭረት (begynn høyt og gli nedover, som en hale), ድፋት (slipp stemmen ned), ቁርጥ (avslutt), ሩጥ (en levende, dirrende tone), ርክርክ (gjenta tonen raskt), ሂደት (raskere og sterkere) og ሠረዝ (en liten pause).",
            am: "ከምልክቶቹ መካከል ይዘት፣ ደረት፣ ቅናት፣ ጭረት፣ ድፋት፣ ቁርጥ፣ ሩጥ፣ ርክርክ፣ ሂደትና ሠረዝ ይገኙበታል። እያንዳንዱ ምልክት ድምፁ እንዴት እንደሚያዝ፣ እንደሚነሣ፣ እንደሚወርድ ወይም እንደሚቆም ያሳያል።",
          },
          vers: ["Ps 33:3"],
        },
        {
          tekst: {
            no: "Kirkas side sier også at noen mener tegnene ble skrevet inn i bøkene av lærde etter Yared, i kong Gelawdewos' tid (1501–1532 etter etiopisk tidsregning). Uansett lærer eleven sangen av en lærer, ikke bare fra boka.",
            am: "አንዳንዶች ግን ድርሰቶቹ የዜማ ምልክት የተደረገላቸው ከእርሱ በኋላ በተነሡ ሊቃውንት በዐፄ ገላውዴዎስ ዘመነ መንግሥት (፲፭፻፩–፲፭፻፴፪ ዓ.ም.) ነው ይላሉ። ያም ሆነ ይህ ዜማ የሚማረው ከመምህር አፍ ነው።",
          },
          vers: ["2Tim 2:2"],
        },
      ],
    },
    {
      id: "bokene",
      tittel: { no: "Yareds fem bøker", am: "አምስቱ የቅዱስ ያሬድ የዜማ መጻሕፍት" },
      ingress: {
        no: "Yared skrev fem sangbøker: ድጓ, ጾመ ድጓ, ምዕራፍ, ዝማሬ og መዋሥዕት. Han satte også melodi til de 14 ቅዳሴ-bønnene, som før bare ble lest.",
        am: "ቅዱስ ያሬድ ድጓ፣ ጾመ ድጓ፣ ምዕራፍ፣ ዝማሬና መዋሥዕት የተባሉ አምስት የዜማ መጻሕፍትን ደረሰ። በንባብ ብቻ ይቀደስባቸው የነበሩትን የ፲፬ቱ ቅዳሴያት ዜማ ባለቤትም እርሱ ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "ድጓ betyr «samling». Det er den største boka, med sangene for årets høytider og for hver uke. Den er delt i tre: ዮሐንስ, አስተምህሮ og ፋሲካ. Den henter ord fra Det gamle og Det nye testamentet og priser Kristus, Maria, englene, profetene, apostlene og martyrene.",
            am: "ድጓ ማለት ስብስብ ማለት ነው፤ የዓመቱ በዓላትና የሳምንታት መዝሙራት ተሰብስበው ስለሚገኙበት ነው። ትልቁ የዜማ መጽሐፍ ሲሆን በዮሐንስ፣ በአስተምህሮና በፋሲካ በሦስት ይከፈላል። ከብሉይ፣ ከሐዲስና ከአዋልድ መጻሕፍት እየጠቀሰ የክርስቶስን፣ የእመቤታችንን፣ የመላእክትን፣ የነቢያትን፣ የሐዋርያትንና የሰማዕታትን ክብር ይናገራል።",
          },
          vers: ["Ps 65:12"],
        },
        {
          tekst: {
            no: "ጾመ ድጓ synges i den store fasten (ዐቢይ ጾም) om morgenen, formiddagen, middag, kveld og natt. Den lærer om Gud, Maria, helgenene og kirka, og om hvor viktig faste, bønn og gaver til de fattige er.",
            am: "ጾመ ድጓ በዐቢይ ጾም ወቅት በነግህ፣ በሠለስት፣ በቀትርና በሠርክ እንዲሁም በሌሊት የሚዘመር ነው። ነገረ እግዚአብሔርን፣ ነገረ ማርያምን፣ ነገረ ቅዱሳንንና ነገረ ቤተ ክርስቲያንን ይዘክራል፤ የጾምን፣ የጸሎትንና የምጽዋትን ጠቃሚነት ያስተምራል።",
          },
          vers: ["Joel 2:12", "Matt 6:17-18"],
        },
        {
          tekst: {
            no: "ምዕራፍ betyr «hvilested». Den har to deler: en for hele året (ዘወትር) og en for fasten og bønnedagene (ጾም).",
            am: "ምዕራፍ ማለት ማረፊያ ማለት ነው። የዘወትርና የጾም ምዕራፍ ተብሎ በሁለት ይከፈላል፤ የዘወትሩ በዓመቱ ሳምንታትና በዓላት፣ የጾሙ ደግሞ በጾመ ዐርባና በምሕላ ቀናት ይዘመራል።",
          },
          vers: ["Ps 119:164"],
        },
        {
          tekst: {
            no: "ዝማሬ betyr «lovsang». Den synges i ቅዳሴ etter at folket har tatt imot nattverden, og følger meningen med ቅዳሴ. «Smak og se at Herren er god!»",
            am: "ዝማሬ ማለት ምስጋና ማለት ነው። በቅዳሴ ጊዜ ከድርገት በኋላ የሚዜም፣ የጸሎተ ቅዳሴውን ዓላማ ተከትሎ የሚሄድ የአገልግሎት መጽሐፍ ነው።",
          },
          vers: ["Ps 34:9"],
        },
        {
          tekst: {
            no: "መዋሥዕት kommer av ge'ez-ordet አውሥአ, «å svare». Det er sanger som synges fram og tilbake. De brukes i bønnene for de døde (ፍትሐት). Kirka sier at Yared lærte sørgesangen av David, som sang en klagesang over Saul og Jonatan.",
            am: "መዋሥዕት «አውሥአ፥ መለሰ» ከሚለው የግእዝ ቃል የተገኘ ሲሆን ትርጓሜውም «ምልልስ» ማለት ነው። በፍትሐት ጊዜ የሚደርስ ነው። ለሙታን ዜማ ደርሶ ማዘንን ከማን አገኘው ቢሉ ከነቢዩ ዳዊት ነው።",
          },
          vers: ["2Sam 1:17"],
        },
      ],
    },
    {
      id: "qene",
      tittel: { no: "ቅኔ – ሰምና ወርቅ (voks og gull)", am: "ቅኔ – ሰምና ወርቅ" },
      punkter: [
        {
          tekst: {
            no: "ቅኔ er korte lovsangsdikt på ge'ez. Kirkesangerne lager nye ቅኔ til høytidene og synger dem i gudstjenesten. I ቅኔ-skolen hører elevene fortellingen om helgenen som feires neste dag, og lager ቅኔ om ham. Bibelen bruker selv ordet: «Syng en ny sang (አዲስ ቅኔ) for ham!»",
            am: "ቅኔ በግእዝ የሚቀኝ የምስጋና ግጥም ነው። ሊቃውንቱ ለበዓላት አዲስ ቅኔ ይቀኛሉ፤ በአገልግሎት ጊዜም በዜማ ያቀርቡታል። በቅኔ ቤትም ተማሪዎች በማግሥቱ የሚከበረውን የቅዱሱን ታሪክ ሰምተው ይቀኙበታል። መጽሐፍ ቅዱስም «አዲስ ቅኔም ተቀኙለት» ይላል።",
          },
          vers: ["Ps 33:3", "Ps 149:1", "Rev 5:9"],
        },
        {
          tekst: {
            no: "Den mest kjente formen kalles ሰምና ወርቅ, «voks og gull». Ordene utenpå (ሰም, voksen) sier én ting, men inni gjemmer det seg en dypere mening (ወርቅ, gullet). Den som lytter, må tenke seg fram til gullet.",
            am: "በጣም የታወቀው የቅኔ ዓይነት «ሰምና ወርቅ» ይባላል። በውጭ የሚታየው ቃል (ሰሙ) አንድ ነገር ይናገራል፤ በውስጡ ግን የተሰወረ ጥልቅ ምሥጢር (ወርቁ) አለ። ሰሚውም ወርቁን ለማግኘት ማስተዋል ያስፈልገዋል።",
          },
          vers: ["Ps 49:5", "Ps 78:2"],
        },
        {
          tekst: {
            no: "Mahibere Kidusan lærer at Jesus selv underviste «ord for ord, eller med voks og gull, eller med lignelser». Han fortalte om såkorn, sennepsfrø og perler, og bak bildene lå en dyp sannhet om Guds rike.",
            am: "ማኅበረ ቅዱሳን እንደሚያስተምረው ጌታችን ትምህርቱን «ቃል በቃል ወይም በሰምና ወርቅ ወይም በምሳሌ» አስተምሯል። በዘር፣ በሰናፍጭ ቅንጣትና በዕንቍ እየመሰለ ስለ መንግሥተ ሰማያት ምሥጢር አስተማረ።",
          },
          vers: ["Matt 13:34-35", "Matt 13:52"],
        },
        {
          tekst: {
            no: "Det finnes rundt ni hovedformer av ቅኔ. Eleven begynner med den korteste, ጉባኤ ቃና, som har to linjer. Senere lærer han lengre former som ዘአምላኪየ, ዋዜማ, ሥላሴ og መወድስ.",
            am: "የታወቁት የቅኔ ዓይነቶች ዘጠኝ ያህል ናቸው። ተማሪው በሁለት ስንኝ ባለው በጉባኤ ቃና ይጀምራል፤ ቀጥሎም ዘአምላኪየ፣ ዋዜማ፣ ሥላሴ፣ መወድስና ሌሎችንም ይማራል።",
          },
          vers: ["Ps 45:2"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Yared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "Da Yared kom tilbake fra himmelen, sa han forundret: «Å, for en sang, å, for en sang jeg hørte i himmelen fra englene som sier: Hellig, hellig, hellig er Gud!»",
        am: "«ዋይ ዜማ ዋይ ዜማ ዘሰማዕኩ በሰማይ እመላእክት እምዘይብሉ ቅዱስ ቅዱስ ቅዱስ እግዚአብሔር፤ በሰማይ ያሉ መላእክት ቅዱስ ቅዱስ ቅዱስ እያሉ በሚመስጥ ዜማ እግዚአብሔርን ሲያመሰግኑ ሰማሁ።»",
      },
      kilde: "Mahibere Kidusan: ዝክረ ቅዱስ ያሬድ (eotcmk.org)",
    },
    {
      navn: { no: "Hellige Yared – den første hymnen", am: "ቅዱስ ያሬድ – የመጀመሪያው ዜማ" },
      tekst: {
        no: "«Halleluja for Faderen, halleluja for Sønnen, halleluja for Den hellige ånd. Før Zion skapte han himmelen, og deretter viste han Moses hvordan tabernaklet skulle bygges.»",
        am: "«ሃሌ ሉያ ለአብ፣ ሃሌ ሉያ ለወልድ፣ ሃሌ ሉያ ወለመንፈስ ቅዱስ፤ ቀዳሚሃ ለጽዮን ሰማየ ሣረረ ወበዳግም አርአዮ ለሙሴ ዘከመ ይገብር ግብራ ለደብተራ።»",
      },
      kilde: "Mahibere Kidusan: ኢትዮጵያዊው ቅዱስ ያሬድ (eotcmk.org)",
    },
    {
      navn: { no: "Hellige Yared – hymnen om korset", am: "ቅዱስ ያሬድ – የመስቀሉ ዝማሬ" },
      tekst: {
        no: "«Han som ble naglet til korset og forkynt av profetene, ham lovpriste englene og erkeenglene. Ham forkynner vi som Frelser.» (sunget i ዕዝል)",
        am: "«ዘበመስቀሉ ተቀነወ ወበነቢያት ተሰብከ መላእክት ወሊቃነ መላእክት ሰብሕዎ ኪያሁ ንሰብክ መድኅነ፤ በነቢያት ትንቢት የተነገረለትና በመስቀሉ ላይ የተቸነከረው ጌታ መላእክትና የመላእክት አለቆች አመሰገኑት፤ እኛም እርሱ መድኃኒት እንደ ሆነ እንናገራለን።»",
      },
      kilde: "Mahibere Kidusan: ኢትዮጵያዊው ቅዱስ ያሬድ (eotcmk.org), etter «ያሬድ እና ዜማው», s. 24",
    },
    {
      navn: { no: "Kirkas lærde (ሊቃውንት)", am: "ሊቃውንተ ቤተ ክርስቲያን" },
      tekst: {
        no: "«All lovsang som bæres fram i kirka, er i de tre tonene. En sang med en melodi utenfor dem finnes ikke i kirka, og om den finnes, er den ikke kirkas.»",
        am: "«በቤተ ክርስቲያን የሚቀርበው ምስጋና በሙሉ በሦስቱ የዜማ ዓይነቶች ነው፤ ከዚህ የሚወጣ ዜማ ያለው ዝማሬ በቤተ ክርስቲያን የለም፤ ቢኖርም የቤተ ክርስቲያን አይደለም።»",
      },
      kilde: "Mahibere Kidusan: ኢትዮጵያዊው ቅዱስ ያሬድ (eotcmk.org)",
    },
  ],
  ord: [
    { ord: "ቅዱስ ያሬድ", forklaring: { no: "den hellige Yared, kirkesangens far", am: "የዜማ አባት" } },
    { ord: "ዜማ", forklaring: { no: "sang, melodi; lovsang i kirka", am: "የምስጋና ድምፅ" } },
    { ord: "ግእዝ", forklaring: { no: "den første, faste tonen – bilde på Faderen", am: "የአብ ምሳሌ" } },
    { ord: "ዕዝል", forklaring: { no: "den myke tonen – bilde på Sønnen", am: "የወልድ ምሳሌ" } },
    { ord: "አራራይ", forklaring: { no: "den milde, rørende tonen – bilde på Den hellige ånd", am: "የመንፈስ ቅዱስ ምሳሌ" } },
    { ord: "ምልክት", forklaring: { no: "sangtegn over ordene", am: "የዜማ ምልክት" } },
    { ord: "ድጓ", forklaring: { no: "«samling» – Yareds største sangbok", am: "ትልቁ የዜማ መጽሐፍ" } },
    { ord: "ጾመ ድጓ", forklaring: { no: "sangboka for den store fasten", am: "የዐቢይ ጾም ዜማ" } },
    { ord: "ምዕራፍ", forklaring: { no: "«hvilested» – sangbok for året og fastene", am: "ማረፊያ" } },
    { ord: "ዝማሬ", forklaring: { no: "lovsang etter nattverden i ቅዳሴ", am: "ከድርገት በኋላ የሚዜም" } },
    { ord: "መዋሥዕት", forklaring: { no: "vekselsang; brukes i bønner for de døde", am: "ምልልስ" } },
    { ord: "ቅኔ", forklaring: { no: "lovsangsdikt på ge'ez", am: "የምስጋና ግጥም" } },
    { ord: "ሰምና ወርቅ", forklaring: { no: "«voks og gull» – ord med en skjult, dypere mening", am: "ሰሙ ውጫዊው ቃል፣ ወርቁ የተሰወረው ምሥጢር" } },
    { ord: "አርያም", forklaring: { no: "«det høye»; navnet på Yareds første sang", am: "ከሰማይ የተገኘች ዜማ" } },
    { ord: "ተሠወረ", forklaring: { no: "ble borte (tatt bort), uten å dø", am: "ሳይሞት ተሰወረ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva lærte larven Yared?", am: "ትሏ ቅዱስ ያሬድን ምን አስተማረችው?" },
      svar: {
        no: "Å ikke gi opp. Den falt seks ganger, men den sjuende gangen kom den opp og fikk frukten. Da gikk Yared tilbake til læreren.",
        am: "ተስፋ አለመቁረጥን። ስድስት ጊዜ ወደቀች፤ በሰባተኛው ግን ወጥታ ፍሬውን በላች። ያሬድም ወደ መምህሩ ተመለሰ።",
      },
    },
    {
      sporsmal: { no: "Hvor kom Yareds sang fra?", am: "የቅዱስ ያሬድ ዜማ ከየት መጣ?" },
      svar: {
        no: "Kirka lærer at Gud lot ham høre englene og de 24 himmelske prestene lovsynge i himmelen. Tre fugler fra Eden ble sendt til ham.",
        am: "እግዚአብሔር ከሃያ አራቱ ካህናተ ሰማይና ከመላእክት ምስጋና እንዲማር አደረገው፤ ሦስት አእዋፍም ከኤዶም ገነት ተላኩለት።",
      },
    },
    {
      sporsmal: { no: "Hva heter de tre tonene, og hva er de bilde på?", am: "ሦስቱ የዜማ ስልቶች ማን ማን ናቸው? የማንስ ምሳሌ ናቸው?" },
      svar: {
        no: "ግእዝ (Faderen), ዕዝል (Sønnen) og አራራይ (Den hellige ånd). At de er tre, men brukes i én lovsang, viser Treenigheten.",
        am: "ግእዝ (የአብ)፣ ዕዝል (የወልድ) እና አራራይ (የመንፈስ ቅዱስ)። ሦስትነታቸውና አንድ ምስጋና መሆናቸው ምሥጢረ ሥላሴን ያስረዳል።",
      },
    },
    {
      sporsmal: { no: "Hvilke fem bøker skrev Yared?", am: "ቅዱስ ያሬድ የደረሳቸው አምስቱ መጻሕፍት የትኞቹ ናቸው?" },
      svar: {
        no: "ድጓ, ጾመ ድጓ, ምዕራፍ, ዝማሬ og መዋሥዕት.",
        am: "ድጓ፣ ጾመ ድጓ፣ ምዕራፍ፣ ዝማሬና መዋሥዕት።",
      },
    },
    {
      sporsmal: { no: "Hva betyr ሰምና ወርቅ?", am: "ሰምና ወርቅ ማለት ምን ማለት ነው?" },
      svar: {
        no: "«Voks og gull»: Ordene utenpå sier én ting, men inni ligger en dypere mening, som gull gjemt i voks.",
        am: "ሰሙ በውጭ የሚታየው ቃል ሲሆን ወርቁ በውስጡ የተሰወረው ጥልቅ ምሥጢር ነው።",
      },
    },
    {
      sporsmal: { no: "Når minnes kirka Yared, og hva skjedde da?", am: "ቤተ ክርስቲያን ቅዱስ ያሬድን መቼ ታስበዋለች? ምንስ ሆነ?" },
      svar: {
        no: "ግንቦት 11. Den dagen ble han borte (ተሠወረ) i Semien-fjellene, etter et liv i bønn.",
        am: "ግንቦት ፲፩። በዚያ ቀን በሰሜን ተራሮች በብሕትውና ከኖረ በኋላ ተሠወረ።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: ዝክረ ቅዱስ ያሬድ", url: "https://eotcmk.org/a/%e1%8b%9d%e1%8a%ad%e1%88%a8-%e1%89%85%e1%8b%b1%e1%88%b5-%e1%8b%ab%e1%88%ac%e1%8b%b5/" },
    { navn: "Mahibere Kidusan: ኢትዮጵያዊው ቅዱስ ያሬድ", url: "https://eotcmk.org/a/%e1%8a%a2%e1%89%b5%e1%8b%ae%e1%8c%b5%e1%8b%ab%e1%8b%8a%e1%8b%8d-%e1%89%85%e1%8b%b1%e1%88%b5-%e1%8b%ab%e1%88%ac%e1%8b%b5-2/" },
    { navn: "Mahibere Kidusan: የቀለሙ ልጅ", url: "https://eotcmk.org/a/%e1%8b%a8%e1%89%80%e1%88%88%e1%88%99-%e1%88%8d%e1%8c%85/" },
    { navn: "Mahibere Kidusan: ወርኃ ግንቦት", url: "https://eotcmk.org/a/%e1%8b%88%e1%88%ad%e1%8a%83-%e1%8c%8d%e1%8a%95%e1%89%a6%e1%89%b5-2/" },
    { navn: "Mahibere Kidusan: እንደ ገብር ኄር ታማኝ አገልጋዮች እንኹን", url: "https://eotcmk.org/a/%e1%8a%a5%e1%8a%95%e1%8b%b0-%e1%8c%88%e1%89%a5%e1%88%ad-%e1%8a%84%e1%88%ad-%e1%89%b3%e1%88%9b%e1%8a%9d-%e1%8a%a0%e1%8c%88%e1%88%8d%e1%8c%8b%e1%8b%ae%e1%89%bd-%e1%8a%a5%e1%8a%95%e1%8a%b9%e1%8a%95/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: ቅዱስ ያሬድ (PDF)", url: "https://www.ethiopianorthodox.org/amharic/yezemametsheft/zematarik/yared.pdf" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: የዜማ ቃል ትምህርት (PDF)", url: "https://www.ethiopianorthodox.org/amharic/yezemametsheft/zematarik/zema.pdf" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Church Music", url: "https://www.ethiopianorthodox.org/english/church/music.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Ethiopian Orthodox Church School System", url: "https://www.ethiopianorthodox.org/english/ethiopian/school.html" },
  ],
  utkast: true,
};
