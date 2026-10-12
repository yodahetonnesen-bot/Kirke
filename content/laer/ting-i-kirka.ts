import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning:
// Mahibere Kidusan (eotcmk.org): «ሥርዓተ አምልኮ» (om ንዋያተ ቅድሳት: መንበር, አትሮንስ, አልባሰ ቅዳሴ, አክሊል, ዕጣን,
// ጽንሐሕ, መስቀል, መሶበ ወርቅ, ጻሕል, ጽዋዕ, ማኅፈድ, መቅረዝ – etter Beza Bizuhan søndagsskole),
// «ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!» (hvite klær, ነጠላ, ikoner – etter Liqe Kahenat Kinfe Gebriel Altaye,
// «ሥርዓተ ቤተ ክርስቲያን»), barnesidene «ቅዱሳት ሥዕላት», «ሥዕለ አድኅኖ» (1–3) og «ጸሎት በቤተ ክርስቲያን»,
// «ቀለማትና ትርጉማቸው», «መስቀል», «ክብረ መስቀል በኢትዮጵያ», «‹‹እንደሚንሿሿ ጸናጽል ሆኛለሁ››», «ከተራ ምንድን ነው?»,
// «የትንሣኤ በዓል ትርጕሙና አከባበሩ», «ቅድስት ቤተ ክርስቲያን» (መጋረጃ/መንጦላዕት), og de engelske «The Festival of Timket»,
// «Offerings» og «The Twenty-Four Heavenly Priests»;
// ethiopianorthodox.org: «The Sacramental» og «Church music» (Aymero W. og Joachim M., The Ethiopian Orthodox Church, 1970);
// Sunday School-læreboka «ሥርዓተ ቤተ ክርስቲያን ሁለተኛ ክፍል» (Mahibere Kidusans søndagsskoleavdeling, 2015 E.C.).
// Usikkert: Hvorfor man bærer ጃንጥላ/ድባብ, fant vi bare forklart kort i MKs engelske Timket-artikkel («for adoration as
// well as to protect it from sun and rain»). Vi fant ingen EOTC-kilde med en dypere symbolsk forklaring, så vi har ikke skrevet noen.
// Usikkert: Forklaringen av ከበሮ som et bilde på Kristus er fra en Tewahedo-blogg (ttewahdo.blogspot.com) og flere
// prekener på nett, ikke fra MK eller patriarkatet. Den er derfor skrevet som «mange lærere forklarer». Vi fant ingen
// pålitelig kilde for symbolikken til ጸናጽል og መቋሚያ, så den er ikke tatt med.
// Usikkert: Vi fant ingen EOTC-kilde som bruker kobberslangen (4 Mos 21) som grunn for ikonene. Kobberslangen er derfor
// brukt om korset, slik Jesus selv gjør i Joh 3,14. Ikonene begrunnes med kjerubene (2 Mos 25) og Salomos tempel, slik MK gjør.
// Usikkert: MK-kilden skriver «ዕረፈ መስቀል»; vi bruker «ዕርፈ መስቀል» som i nattverden.ts. Røkelseskaret heter «ጽንሐሕ» i
// MK-artikkelen og «ጽና» i dagligtale og i andre MK-artikler.
export const tingIKirka: Tema = {
  slug: "ting-i-kirka",
  del: "kirkebygget",
  tittel: { no: "Ting i kirka", am: "ንዋየ ቅድሳት" },
  undertittel: { no: "Hellige ting som hjelper oss å tilbe Gud", am: "እግዚአብሔርን የምናመልክባቸው ቅዱሳት ዕቃዎች" },
  bilde: "handkors",
  ingress: {
    no:
      "Når vi kommer inn i kirka, ser og hører vi mange hellige ting: trommer og bjeller, røkelse, lys, kors, ikoner og prestenes klær. Kirka kaller dem ንዋየ ቅድሳት – hellige redskaper. De er ikke pynt. Hver av dem har en mening og et forbilde i Bibelen, og de hjelper oss å be og lovsynge Gud.",
    am:
      "ወደ ቤተ ክርስቲያን ስንገባ ብዙ ቅዱሳት ነገሮችን እናያለን፤ እንሰማለንም፤ ከበሮና ጸናጽል፣ ዕጣን፣ መብራት፣ መስቀል፣ ቅዱሳት ሥዕላትና የካህናት አልባሳት። ቤተ ክርስቲያን ንዋየ ቅድሳት ትላቸዋለች። ለጌጥ ብቻ አይደሉም፤ እያንዳንዳቸው ትርጉምና በመጽሐፍ ቅዱስ ምሳሌ አላቸው፤ እግዚአብሔርን እንድንጸልይና እንድናመሰግን ይረዱናል።",
  },
  hovedvers: "Ps 150:3-5",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er ንዋየ ቅድሳት?", am: "ንዋየ ቅድሳት ምንድን ናቸው?" },
      punkter: [
        {
          tekst: {
            no: "ንዋይ betyr eiendel eller skatt, og ቅድሳት betyr det som er hellig. ንዋየ ቅድሳት er altså de hellige tingene kirka bruker i gudstjenesten. Hver ting har sin egen oppgave.",
            am: "«ንዋይ» ገንዘብ፣ ጥሪት፣ ቅርስ ማለት ነው፤ «ቅድሳት» ደግሞ ቅድስና፣ ክብር ማለት ነው። ንዋየ ቅድሳት ቤተ ክርስቲያን ለአገልግሎት የምትጠቀምባቸው ቅዱሳት ዕቃዎች ናቸው፤ አገልግሎታቸውም እንደ ዓይነታቸው ይለያያል።",
          },
        },
        {
          tekst: {
            no: "Gud viste selv Moses hvordan tingene i tabernaklet skulle lages. Så ble alt salvet med hellig olje og ble hellig. På samme måte blir kirkas ting velsignet før de tas i bruk.",
            am: "እግዚአብሔር ራሱ በደብተራ ኦሪት ያሉት ዕቃዎች እንዴት እንደሚሠሩ ለሙሴ አሳየው። ከዚያም ሁሉም በቅብዐት ዘይት ተቀብተው ተቀደሱ። እንዲሁም የቤተ ክርስቲያን ንዋያት ተባርከው ለአገልግሎት ይውላሉ።",
          },
          vers: ["Exod 25:8-9", "Exod 40:9"],
        },
        {
          tekst: {
            no: "Det som er gitt til kirka og velsignet, skal ikke tas med hjem og brukes til vanlige ting. Gud sa at den hellige røkelsen ikke skulle lages til eget bruk. Kirkas lovbok sier det samme om alt som er velsignet i kirka.",
            am: "ለቤተ ክርስቲያን የተሰጠና የተባረከ ንዋይ ወደ ቤት ተወስዶ ለግል አገልግሎት አይውልም። እግዚአብሔር የተቀደሰውን ዕጣን ለራሳችሁ አታድርጉ ብሏል። ፍትሐ ነገሥትም ከቤተ ክርስቲያን የተባረከውን ዕቃ ሁሉ ሰው በቤቱ ሊሠራበት እንደማይገባ ይናገራል።",
          },
          vers: ["Exod 30:37"],
          andre: [{ no: "Fetha Negest (ፍትሐ ነገሥት) kap. 1", am: "ፍትሐ ነገሥት አንቀጽ ፩" }],
        },
        {
          tekst: {
            no: "Mange av tingene er gaver fra de troende. Vi går ikke tomhendte til kirka, men tar med røkelse, lys eller noe annet etter evne. Gud sa til Moses at folket skulle gi gaver av et villig hjerte.",
            am: "ብዙዎቹ ንዋያት የምእመናን ስጦታዎች ናቸው። ወደ ቤተ ክርስቲያን ባዶ እጃችንን አንሄድም፤ እንደ አቅማችን ዕጣን፣ ሻማ፣ ጧፍ ወይም ሌላ መባዕ እንሰጣለን። እግዚአብሔር ሙሴን ሕዝቡ በፈቃድ ልብ ስጦታ እንዲያመጡ ንገራቸው ብሎታል።",
          },
          vers: ["Exod 25:2"],
        },
      ],
    },
    {
      id: "musikk",
      tittel: { no: "ከበሮ, ጸናጽል og መቋሚያ", am: "ከበሮ፣ ጸናጽልና መቋሚያ" },
      ingress: {
        no: "Kirkas sang kalles ያሬዳዊ ዜማ etter den hellige Jared. Når kirkesangerne (መዘምራን) lovsynger, bruker de tre redskaper:",
        am: "የቤተ ክርስቲያን ዜማ በቅዱስ ያሬድ ስም ያሬዳዊ ዜማ ይባላል። መዘምራን ሲያመሰግኑ ሦስት የዜማ መሣሪያዎችን ይጠቀማሉ፤",
      },
      punkter: [
        {
          tekst: {
            no: "ከበሮ er en stor tromme kledd med skinn. Den slås med hendene og holder takten i lovsangen. Profetinnen Mirjam tok en tromme og lovpriste Gud da folket var kommet over Rødehavet.",
            am: "ከበሮ በቆዳ የተለበጠ ትልቅ የዜማ መሣሪያ ነው፤ በእጅ ይመታል፤ ምስጋናውን በሥርዓት ይመራዋል። ነቢይቱ ማርያም እስራኤል ቀይ ባሕርን ሲሻገሩ ከበሮ በእጅዋ ይዛ እግዚአብሔርን አመሰገነች።",
          },
          vers: ["Exod 15:20", "Ps 149:3"],
        },
        {
          tekst: {
            no: "ጸናጽል er et sistrum: en liten metallramme med ringer som klinger når den ristes. David lovpriste Gud foran paktens ark med trommer og cymbler, og han satte levittene til å synge med cymbler.",
            am: "ጸናጽል ሲወዘወዝ የሚንሿሿ የብረት ዜማ መሣሪያ ነው። ዳዊት በታቦቱ ፊት በከበሮና በጸናጽል አመሰገነ፤ ሌዋውያንም በጸናጽል እንዲያዜሙ ሾማቸው።",
          },
          vers: ["2Sam 6:5", "1Chr 15:16"],
        },
        {
          tekst: {
            no: "መቋሚያ er en lang stav med et håndtak på toppen. Navnet kommer av ordet «å stå» (ቆመ). Kirkesangerne står lenge i ማኅሌት om natten. De holder መቋሚያ og ጸናጽል og beveger seg rolig i takt med sangen. Denne lovprisningen kalles ሽብሻቦ.",
            am: "መቋሚያ ከላይ መያዣ ያለው ረጅም በትር ነው፤ ስሙም «ቆመ» ከሚለው ቃል የወጣ ነው። መዘምራን በሌሊት ማኅሌት ለረጅም ሰዓት ይቆማሉ፤ መቋሚያና ጸናጽል ይዘው በዜማው ልክ ያሸበሽባሉ፤ ይህም ሽብሻቦ ይባላል።",
          },
          vers: ["Ps 150:3-5"],
        },
        {
          tekst: {
            no: "Den hellige Jared skrev kirkas sangbok (ድጓ) i Aksum på 500-tallet. Han laget tre måter å synge på: ግዕዝ for vanlige dager, ዕዝል for fastetider og አራራይ for de store høytidene. Sangen hans følges av ከበሮ og ጸናጽል.",
            am: "ቅዱስ ያሬድ በስድስተኛው መቶ ክፍለ ዘመን በአክሱም ድጓን ደረሰ። ሦስቱን የዜማ ስልቶች አስገኘ፤ ግዕዝ ለዘወትር ቀናት፣ ዕዝል ለአጽዋማት፣ አራራይ ለዐበይት በዓላት። ዜማውም በከበሮና በጸናጽል ይታጀባል።",
          },
        },
        {
          tekst: {
            no: "Mange av kirkas lærere forklarer at ከበሮ er et bilde på Kristus. Når den slås på begge sider, minnes vi at han ble slått i ansiktet for vår skyld. I den store fasten (ጾመ ኢየሱስ) synges det vanligvis uten ከበሮ.",
            am: "ብዙ መምህራን ከበሮ የጌታችን የኢየሱስ ክርስቶስ ምሳሌ ነው ብለው ያስተምራሉ፤ ግራና ቀኝ ሲመታ ጌታችን ስለ እኛ በጥፊ መመታቱን እናስባለን። በጾመ ኢየሱስ ግን በአብዛኛው ያለ ከበሮ ይዘመራል።",
          },
          vers: ["Matt 26:67"],
        },
        {
          tekst: {
            no: "Men instrumentene alene er ikke nok. Paulus sier at den som ikke har kjærlighet, er som en klingende bjelle (ጸናጽል). Vi skal lovsynge Gud med hjertet, ikke bare med lyd.",
            am: "ነገር ግን የዜማ መሣሪያዎች ብቻቸውን በቂ አይደሉም። ቅዱስ ጳውሎስ ፍቅር የሌለው ሰው እንደሚንሽዋሽዋ ጸናጽል ነው ይላል። እግዚአብሔርን በድምፅ ብቻ ሳይሆን በልባችን እናመሰግናለን።",
          },
          vers: ["1Cor 13:1"],
        },
      ],
    },
    {
      id: "rokelse",
      tittel: { no: "Røkelse (ዕጣን) og røkelseskaret (ጽና)", am: "ዕጣንና ጽና" },
      punkter: [
        {
          tekst: {
            no: "I tabernaklet skulle Aron brenne røkelse på et eget alter hver morgen og hver kveld. Røkelsen skulle være ren og hellig.",
            am: "በደብተራ ኦሪት አሮን በዕጣን መሠዊያው ላይ በማለዳና በማታ ዘወትር ዕጣን ያጥን ነበር። ዕጣኑም ንጹሕና ቅዱስ መሆን ነበረበት።",
          },
          vers: ["Exod 30:1", "Exod 30:7-8", "Exod 30:34-35"],
        },
        {
          tekst: {
            no: "Røyken som stiger opp, er et bilde på bønnene våre som stiger opp til Gud. David ba: «La min bønn gjelde som røkoffer for ditt åsyn.» Den gode duften minner oss om et rent liv.",
            am: "ወደ ላይ የሚወጣው የዕጣኑ ጢስ ወደ እግዚአብሔር የሚያርገው የጸሎታችን ምሳሌ ነው። ዳዊት «ጸሎቴን በፊትህ እንደ ዕጣን ተቀበልልኝ» ብሏል። መልካም መዓዛውም የንጹሕ ሕይወት ምሳሌ ነው።",
          },
          vers: ["Ps 141:2"],
        },
        {
          tekst: {
            no: "Presten Sakarias ofret røkelse i templet mens folket ba utenfor. Da viste engelen Gabriel seg for ham ved røkelsesalteret.",
            am: "ካህኑ ዘካርያስ በቤተ መቅደስ ዕጣን ሲያጥን ሕዝቡ በውጭ ይጸልዩ ነበር። በዚያን ጊዜ መልአኩ በዕጣኑ መሠዊያ ቀኝ ተገለጠለት።",
          },
          vers: ["Luke 1:9-11"],
        },
        {
          tekst: {
            no: "I himmelen så Johannes en engel med et røkelseskar av gull. Røken steg opp for Gud sammen med de helliges bønner. De 24 eldste hadde gullskåler fulle av røkelse, som er de helliges bønner.",
            am: "ዮሐንስ በሰማይ የወርቅ ጥና የያዘ መልአክ አየ፤ የዕጣኑም ጢስ ከቅዱሳን ጸሎት ጋር በእግዚአብሔር ፊት ወጣ። ሀያ አራቱ ካህናተ ሰማይም የቅዱሳን ጸሎት የሆነ ዕጣን የሞላበትን የወርቅ ዕቃ ይዘው ነበር።",
          },
          vers: ["Rev 8:3-4", "Rev 5:8"],
        },
        {
          tekst: {
            no: "Profeten Malaki sa at det på hvert sted skulle brennes røkelse for Guds navn. Derfor brenner kirka røkelse over hele verden. De vise menn brakte også røkelse til Jesusbarnet.",
            am: "ነቢዩ ሚልክያስ በየስፍራው ለእግዚአብሔር ስም ዕጣን እንደሚታጠን ተናገረ። ስለዚህ ቤተ ክርስቲያን በዓለም ሁሉ ዕጣን ታጥናለች። ሰብአ ሰገልም ለሕፃኑ ኢየሱስ ዕጣን አቀረቡ።",
          },
          vers: ["Mal 1:11", "Matt 2:11"],
        },
        {
          tekst: {
            no: "ጽና er røkelseskaret med glødende kull. Det henger i kjeder og er laget av metall som tåler ild. Presten bruker det under ኪዳን, ማኅሌት og ቅዳሴ, og går rundt i kirka og i kirkegården. Han sprer røkelse foran ታቦቱ, evangelieboka, ikonene og folket.",
            am: "ጽና (ጽንሐሕ) የዕጣን ማጠኛ ነው፤ እሳት በቀላሉ ከማይጎዳው ብረት ወይም ናስ ይሠራል። ካህናት በጸሎተ ኪዳን፣ በማኅሌትና በቅዳሴ ጊዜ በቤተ መቅደሱና በቅጽሩ እየተመላለሱ ያጥኑበታል፤ ታቦቱን፣ ወንጌሉን፣ ቅዱሳት ሥዕላትንና ሕዝቡን ያጥናሉ።",
          },
          vers: ["Heb 9:4"],
        },
      ],
    },
    {
      id: "lys",
      tittel: { no: "Lys og lamper", am: "መብራትና ቀንዲል" },
      punkter: [
        {
          tekst: {
            no: "I tabernaklet stod en lysestake av gull med sju lamper. Israelittene skulle komme med ren olivenolje, så lampene kunne brenne hele tiden for Herrens åsyn.",
            am: "በደብተራ ኦሪት ሰባት መብራቶች ያሉት የወርቅ መቅረዝ ነበረ። መብራቱ በእግዚአብሔር ፊት ዘወትር እንዲበራ የእስራኤል ልጆች ጥሩ የወይራ ዘይት ያመጡ ነበር።",
          },
          vers: ["Exod 25:31", "Exod 27:20", "Lev 24:2-3"],
        },
        {
          tekst: {
            no: "I kirka brenner vi lys av bivoks (ጧፍ og ሻማ). Lys står på alteret, og en lampe (ቀንዲል) lyser i helligdommen. Mange troende gir lys til kirka som et løfte eller en gave.",
            am: "በቤተ ክርስቲያን ከንብ ሰም የተሠራ ጧፍና ሻማ እናበራለን። በመንበሩ ላይ መብራት ይቀመጣል፤ በመቅደሱም ቀንዲል ያበራል። ብዙ ምእመናን ጧፍና ሻማ ለቤተ ክርስቲያን ይሰጣሉ፤ ይሳላሉም።",
          },
        },
        {
          tekst: {
            no: "Lyset minner oss om Kristus, verdens lys, og om at Gud og de hellige er nær oss. Jesus sa også til oss: «I er verdens lys. La eders lys skinne for menneskene.»",
            am: "መብራቱ የዓለም ብርሃን የሆነውን ክርስቶስን፣ የእግዚአብሔርና የቅዱሳኑን ብርሃንነት ያስታውሰናል። ጌታችንም «እናንተ የዓለም ብርሃን ናችሁ፤ ብርሃናችሁ በሰው ፊት ይብራ» ብሎናል።",
          },
          vers: ["John 8:12", "Matt 5:14-16"],
        },
        {
          tekst: {
            no: "Johannes så Kristus stå midt mellom sju lysestaker av gull. Lysene i kirka minner oss om at han er midt iblant oss.",
            am: "ዮሐንስ ክርስቶስን በሰባቱ የወርቅ መቅረዞች መካከል አየው። የቤተ ክርስቲያን መብራቶችም እርሱ በመካከላችን መሆኑን ያስታውሱናል።",
          },
          vers: ["Rev 1:12-13"],
        },
      ],
    },
    {
      id: "jantila",
      tittel: { no: "Paraplyene (ጃንጥላ og ድባብ)", am: "ጃንጥላና ድባብ" },
      punkter: [
        {
          tekst: {
            no: "Når ታቦቱ bæres ut, for eksempel ved ጥምቀት, holder prester og diakoner fargerike paraplyer (ጃንጥላ, ድባብ) over den. Det gjør de for å ære ታቦቱ og for å skjerme den mot sol og regn.",
            am: "ታቦቱ በጥምቀትና በሌሎች በዓላት ሲወጣ ካህናትና ዲያቆናት ያማሩ ጃንጥላዎችን (ድባብ) ይዘው ከበላዩ ይጋርዳሉ። ይህም ለታቦቱ ክብር ለመስጠትና ከፀሐይና ከዝናብ ለመጠበቅ ነው።",
          },
        },
        {
          tekst: {
            no: "Påskenatt står diakonen i hvite klær og forkynner oppstandelsen. To diakoner i hvitt står ved siden av ham med paraplyer og lys. De er et bilde på englene i hvite klær som satt ved Jesu grav.",
            am: "በትንሣኤ ሌሊት ዲያቆኑ ነጭ ልብሰ ተክህኖ ለብሶ ትንሣኤውን ይሰብካል፤ ነጭ የለበሱ ሁለት ዲያቆናት ድባብ ጃንጥላና መብራት ይዘው ያጅቡታል። እነርሱም በጌታችን መቃብር በራስጌና በግርጌ የታዩት መላእክት ምሳሌ ናቸው።",
          },
          vers: ["John 20:12", "Mark 16:5"],
        },
        {
          tekst: {
            no: "Paraplyer er også blant gavene folk gir til kirka, sammen med røkelse, lys og olje.",
            am: "ጃንጥላም ምእመናን ለቤተ ክርስቲያን ከሚሰጧቸው ስጦታዎች አንዱ ነው፤ ከዕጣን፣ ከጧፍና ከዘይት ጋር።",
          },
        },
      ],
    },
    {
      id: "forheng",
      tittel: { no: "Forhenget (መጋረጃ)", am: "መጋረጃ" },
      punkter: [
        {
          tekst: {
            no: "Dørene inn til መቅደስ er dekket av et forheng (መጋረጃ eller መንጦላዕት). Bak det står ታቦቱ, og der blir brødet og vinen til Kristi kropp og blod. Forhenget minner oss om at dette er det helligste stedet.",
            am: "የመቅደሱ በሮች በመንጦላዕት ወይም በመጋረጃ ይጋረዳሉ። በውስጡ ታቦቱ አለ፤ ሥጋውና ደሙም ይፈተታል። መጋረጃው ይህ ስፍራ ቅድስተ ቅዱሳን መሆኑን ያስታውሰናል።",
          },
        },
        {
          tekst: {
            no: "I tabernaklet laget Moses et forheng av blått, purpurrødt og karmosinrødt garn med kjeruber på. Det skilte det Hellige fra det Aller-helligste, der arken stod.",
            am: "ሙሴ በደብተራ ኦሪት ከሰማያዊ፣ ከሐምራዊና ከቀይ ግምጃ ኪሩቤል የተሣሉበትን መጋረጃ ሠራ፤ መጋረጃው ቅድስትን ታቦቱ ካለበት ከቅድስተ ቅዱሳን ይለይ ነበር።",
          },
          vers: ["Exod 26:31-33"],
        },
        {
          tekst: {
            no: "Da Jesus døde på korset, revnet forhenget i templet fra øverst til nederst. Ved hans blod har vi fått en ny og levende vei inn til Gud.",
            am: "ጌታችን በመስቀል ላይ በሞተ ጊዜ የቤተ መቅደስ መጋረጃ ከላይ እስከ ታች ከሁለት ተቀደደ። በደሙ ወደ እግዚአብሔር የምንገባበት አዲስና ሕያው መንገድ ተከፈተልን።",
          },
          vers: ["Matt 27:51", "Heb 10:19-20"],
        },
      ],
    },
    {
      id: "makdes",
      tittel: { no: "Karene i መቅደስ og አትሮንስ", am: "በመቅደስ ያሉ ንዋያትና አትሮንስ" },
      ingress: {
        no: "Inne i መቅደስ står ታቦቱ på sin trone (መንበር). På መንበር legges også de hellige karene som brukes til Kristi kropp og blod:",
        am: "በመቅደስ ውስጥ ታቦቱ በመንበሩ ላይ ይኖራል። በቅዳሴ ጊዜ ሥጋውንና ደሙን ለመፈተት የምንገለገልባቸው ንዋያትም በመንበሩ ላይ ይቀመጣሉ፤",
      },
      punkter: [
        {
          tekst: {
            no: "ጻሕል er en dyp tallerken (disk) som Kristi kropp legges på. I Det gamle testamentet lå skuebrødet på fat. Kirkas lærere sier at ጻሕል er et bilde på Jesu grav.",
            am: "ጻሕል ጐድጐድ ያለ ወጭት ነው፤ የጌታችን ሥጋ ይቀመጥበታል። በኦሪት ኅብስተ ገጽ ይቀርብበት ነበር። ምሳሌነቱም የጌታችን የመቃብሩ ምሳሌ ነው ብለው መምህራን ያስተምራሉ።",
          },
          vers: ["Exod 25:29-30", "1Cor 10:16"],
        },
        {
          tekst: {
            no: "ጽዋዕ er kalken som Kristi blod bæres fram i. Jesus tok selv en kalk og sa: «Dette er mitt blod, den nye pakts blod.»",
            am: "ጽዋዕ የክቡር ደሙ ማቅረቢያ ነው። ጌታችን ራሱ ጽዋውን አንሥቶ «ይህ የአዲስ ኪዳን ደሜ ነው» አለ።",
          },
          vers: ["Matt 26:27-28"],
        },
        {
          tekst: {
            no: "ዕርፈ መስቀል er en liten skje med et kors. Med den gir diakonen oss Kristi blod.",
            am: "ዕርፈ መስቀል መስቀል ያለበት ትንሽ ማንኪያ ነው፤ ዲያቆኑ ክቡር ደሙን በእርሱ ያቀብለናል።",
          },
        },
        {
          tekst: {
            no: "ማኅፈድ er fem kleder av fint stoff. Ett legges i ጻሕል, tre dekker brødet og ett dekker kalken. De er et bilde på linklærne Jesus ble svøpt i.",
            am: "ማኅፈድ ከተመረጠ ጨርቅ የሚሠራ የሥጋውና የደሙ መሸፈኛ ነው፤ አምስት ናቸው። አንዱ በጻሕሉ ላይ ይነጠፋል፤ ሦስቱ ኅብስቱን ይሸፍናሉ፤ አንዱ የጽዋዕ መሸፈኛ ነው። የጌታችን የሰበኑ ምሳሌ ነው።",
          },
          vers: ["John 19:40"],
        },
        {
          tekst: {
            no: "መሶበ ወርቅ er en kurv som diakonen bærer på hodet når han bringer brødet fra ቤተ ልሔም inn i መቅደስ. Den minner oss om at Jesus ble født i Betlehem og ofret på Golgata.",
            am: "መሶበ ወርቅ መሥዋዕት ማክበሪያ ነው፤ ዲያቆኑ በራሱ ተሸክሞ መሥዋዕቱን ከቤተ ልሔም ወደ መቅደሱ ያቀርብበታል። ይህም ጌታችን በቤተ ልሔም ተወልዶ በቀራንዮ መሠዋቱን ያስታውሰናል።",
          },
          vers: ["Luke 2:7", "John 19:17"],
        },
        {
          tekst: {
            no: "Bare prestene rører መንበር og karene. Diakonene kan stå rundt den.",
            am: "ከካህናት በቀር መንበሩን የሚዳስስና የሚገለገልበት የለም፤ ዲያቆናት ግን ከበውት ይቆማሉ።",
          },
          vers: ["Num 4:15"],
        },
        {
          tekst: {
            no: "አትሮንስ er en bokstol. På den legger presten ቅዳሴ-boka og ber. Den er et bilde på Kristi trone. Esra stod også på en forhøyning av tre da han leste Guds lov for folket.",
            am: "አትሮንስ ካህናት መጽሐፈ ቅዳሴን የሚያስቀምጡበትና የሚጸልዩበት ነው። የጌታችን የኢየሱስ ክርስቶስ ዙፋን ምሳሌ ነው። ጸሐፊው ዕዝራም ሕጉን ለሕዝቡ ሲያነብ በእንጨት መረባርብ ላይ ቆሞ ነበር።",
          },
          vers: ["Neh 8:4-5"],
        },
      ],
    },
    {
      id: "kors",
      tittel: { no: "Korsene", am: "መስቀል" },
      punkter: [
        {
          tekst: {
            no: "Korset er tegnet på vår frelse. På korset tok Jesus bort skyldbrevet mot oss og seiret over de onde maktene. Paulus sier at ordet om korset er en Guds kraft for oss som blir frelst.",
            am: "መስቀል የድኅነታችን ምልክት ነው። ጌታችን በመስቀል ላይ የዕዳ ጽሕፈታችንን ደመሰሰ፤ አጋንንትንም ድል ነሣ። ቅዱስ ጳውሎስ የመስቀሉ ቃል ለእኛ ለምንድን የእግዚአብሔር ኃይል ነው ይላል።",
          },
          vers: ["1Cor 1:18", "Col 2:14-15", "Eph 2:16"],
        },
        {
          tekst: {
            no: "Derfor er korset kirkas flagg. Det står på toppen av kirka, på prestenes klær, på ikonene og på de hellige karene. Som Paulus vil vi ikke rose oss av noe annet enn Kristi kors.",
            am: "ስለዚህ መስቀል የቤተ ክርስቲያን ሰንደቅ ዓላማ ነው። በጉልላቷ፣ በካህናት አልባሳት፣ በቅዱሳት ሥዕላትና በንዋያተ ቅድሳት ላይ ይገኛል። እንደ ቅዱስ ጳውሎስ ከክርስቶስ መስቀል በቀር ሌላ ትምክህት የለንም።",
          },
          vers: ["Gal 6:14"],
        },
        {
          tekst: {
            no: "Korset var forutsagt i Det gamle testamentet. Moses løftet en kobberslange opp på en stang, og alle som så på den, ble helbredet. Jesus sa selv at han skulle løftes opp på samme måte, så alle som tror på ham, skal ha evig liv.",
            am: "መስቀል በብሉይ ኪዳን በምሳሌ ተገልጧል። ሙሴ የናሱን እባብ በዓላማ ላይ ሰቀለ፤ ያየውም ሁሉ ዳነ። ጌታችንም በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው የሰው ልጅ እንዲሁ ይሰቀል ዘንድ ይገባዋል አለ።",
          },
          vers: ["Num 21:8-9", "John 3:14-15"],
        },
        {
          tekst: {
            no: "የመጾር መስቀል er det store korset som diakonene bærer. Det sitter på en lang trestang (መጾር), så diakonen ikke rører selve korset. Det minner oss om at Jesus bar korset sitt opp til Golgata.",
            am: "የመጾር መስቀል ዲያቆናት የሚይዙት ትልቅ መስቀል ነው፤ መስቀሉን በእጃቸው እንዳይነኩት በረጅም የእንጨት መጾር ይያዛል። ይህም ጌታችን መስቀሉን ተሸክሞ ወደ ቀራንዮ መውጣቱን ያስታውሰናል።",
          },
          vers: ["John 19:17"],
        },
        {
          tekst: {
            no: "የእጅ መስቀል er det lille håndkorset presten alltid har med seg. Med det velsigner han folket, og vi kysser det. Allerede Jakob la hendene i kors da han velsignet sønnesønnene sine, og Gud lot prestene legge hans navn på folket når de velsignet.",
            am: "የእጅ መስቀል ካህኑ ዘወትር የሚይዘው ትንሽ መስቀል ነው፤ ሕዝቡን ይባርክበታል፤ እኛም እንሳለመዋለን። ያዕቆብም የዮሴፍን ልጆች ሲባርክ እጆቹን በመስቀል አምሳል አስተላልፎ ባረካቸው፤ እግዚአብሔርም ካህናት ሲባርኩ ስሙን በሕዝቡ ላይ እንዲያደርጉ አዘዘ።",
          },
          vers: ["Gen 48:14", "Num 6:23-27"],
        },
        {
          tekst: {
            no: "የአንገት መስቀል er korset vi bærer rundt halsen på en snor (ማዕተብ). De fleste etiopiske kristne bærer det fra de er små og hele livet. Det viser at vi tilhører Kristus og følger ham.",
            am: "የአንገት መስቀል በማዕተብ በአንገታችን የምናስረው መስቀል ነው። ኢትዮጵያውያን ክርስቲያኖች ከሕፃንነታቸው ጀምሮ በሕይወት ዘመናቸው ሁሉ ያስሩታል። የክርስቶስ መሆናችንንና እርሱን መከተላችንን ያሳያል።",
          },
          vers: ["Matt 16:24"],
        },
        {
          tekst: {
            no: "Kirka feirer korset flere ganger i året. Den største festen er መስቀል 17. መስከረም (27. september), med bålet ደመራ kvelden før. Da minnes vi at dronning Helena fant Jesu kors etter at røyken fra røkelsen hennes viste stedet.",
            am: "ቤተ ክርስቲያን የመስቀልን በዓል በዓመት ብዙ ጊዜ ታከብራለች። ዋናው በዓል መስከረም 17 ቀን ነው፤ በዋዜማው ደመራ ይደመራል። ንግሥት ዕሌኒ የዕጣኑ ጢስ ባመለከታት ስፍራ ቈፍራ የጌታችንን መስቀል ያገኘችበትን እናስባለን።",
          },
        },
      ],
    },
    {
      id: "ikoner",
      tittel: { no: "Ikonene (ቅዱሳት ሥዕላት)", am: "ቅዱሳት ሥዕላት" },
      punkter: [
        {
          tekst: {
            no: "ሥዕል betyr bilde. Ikonene kalles hellige (ቅዱሳት) fordi de er satt til side for Gud og viser hellige personer: Den hellige treenighet, Kristus, jomfru Maria, englene, profetene, apostlene og helgenene.",
            am: "ሥዕል መልክ፣ አምሳል ማለት ነው። ቅዱሳት ሥዕላት ለእግዚአብሔር የተለዩ ስለሆኑና የቅድስት ሥላሴን፣ የክርስቶስን፣ የእመቤታችንን፣ የመላእክትን፣ የነቢያትን፣ የሐዋርያትንና የቅዱሳንን ማንነትና ታሪክ ስለሚያሳዩ «ቅዱሳት» ይባላሉ።",
          },
        },
        {
          tekst: {
            no: "Det var Gud selv som befalte bilder i helligdommen. Han sa til Moses at han skulle lage to kjeruber av gull på arken, og at han ville tale med ham mellom kjerubene. Salomo skar også ut kjeruber på alle veggene i templet.",
            am: "ቅዱሳት ሥዕላትን እንድንሠራ ያዘዘ ራሱ እግዚአብሔር ነው። ሙሴን በታቦቱ መክደኛ ላይ ሁለት የወርቅ ኪሩቤል እንዲሠራ አዘዘው፤ «በሁለቱ ኪሩቤል መካከል ሆኜ እናገርሃለሁ» አለው። ሰሎሞንም በቤተ መቅደሱ ግንብ ሁሉ ላይ የኪሩቤልን ምስል ቀረጸ።",
          },
          vers: ["Exod 25:18-22", "1Kgs 6:23", "1Kgs 6:29"],
        },
        {
          tekst: {
            no: "Ikonene er et minne om helgenene. Gud lovet sine venner «et minne og et navn» i hans hus, og «den rettferdiges minne lever i velsignelse». Ikonene lærer oss også om livet og kampen deres.",
            am: "ቅዱሳት ሥዕላት የቅዱሳን መታሰቢያ ናቸው። እግዚአብሔር ለወዳጆቹ በቤቱ «መታሰቢያና ስም» እንደሚሰጣቸው ተናግሯል፤ «የጻድቅ መታሰቢያ ለበረከት ነው»። ሥዕላቱም ገድላቸውንና ሕይወታቸውን ያስተምሩናል።",
          },
          vers: ["Isa 56:5", "Prov 10:7"],
        },
        {
          tekst: {
            no: "Etiopiske ikoner (ሥዕለ አድኅኖ) males etter kirkas regler. Helgenene har store, åpne øyne og en lysring rundt hodet, som viser at de er rene og hellige. Fargene har også mening: blått for ydmykhet, rødt for martyrdød, grønt for nytt liv og hvitt for renhet og seier.",
            am: "ሥዕለ አድኅኖ በቤተ ክርስቲያን ቀኖና ይሣላል። ዓይናቸው ጎልቶ፣ በራሳቸውም ዙሪያ የብርሃን አክሊል ተደርጎ ይሣላል፤ ይህም ክብራቸውንና ንጽሕናቸውን ያሳያል። ቀለማቱም ትርጉም አላቸው፤ ሰማያዊ የትሕትና፣ ቀይ የሰማዕትነት፣ አረንጓዴ የአዲስ ሕይወት፣ ነጭ የንጽሕናና የድል አድራጊነት ምልክት ነው።",
          },
        },
        {
          tekst: {
            no: "Når vi står foran et ikon, bøyer vi oss og kysser det. Det er en måte å vise kjærlighet til den som er avbildet. For ikoner av Den hellige treenighet og Kristus bøyer vi oss i tilbedelse. For ikoner av Maria og helgenene bøyer vi oss i ære (የጸጋ ስግደት), fordi Gud har æret dem.",
            am: "በቅዱሳት ሥዕላት ፊት ስንቆም እንሰግዳለን፤ እንሳለማቸዋለንም፤ ይህም ለሥዕሉ ባለቤት ያለንን ፍቅር የምንገልጥበት ነው። የቅድስት ሥላሴና የእግዚአብሔር ወልድ ሥዕል ከሆነ የአምልኮ ስግደት፣ የእመቤታችንና የቅዱሳን ከሆነ እግዚአብሔር ስላከበራቸው የጸጋ ስግደት እንሰግዳለን።",
          },
          vers: ["Ps 99:5", "Matt 10:40"],
        },
        {
          tekst: {
            no: "Vi tilber ikke trematerialet eller fargene. Æren går til den som er avbildet, og gjennom helgenene til Gud, som gjorde dem hellige.",
            am: "የምንሰግደው ለእንጨቱ ወይም ለቀለሙ አይደለም፤ ክብሩ ለሥዕሉ ባለቤት ነው፤ በቅዱሳኑም በኩል ቅዱሳንን ላከበራቸው ለእግዚአብሔር ነው።",
          },
        },
      ],
    },
    {
      id: "prestekler",
      tittel: { no: "Prestenes klær", am: "አልባሰ ተክህኖ" },
      punkter: [
        {
          tekst: {
            no: "Gud sa til Moses: «Du skal gjøre hellige klær for Aron, din bror, til ære og til pryd.» Også Arons sønner fikk kjortler, belter og huer. Slik har prester og diakoner i kirka egne klær når de tjener.",
            am: "እግዚአብሔር ሙሴን «የተቀደሰውን ልብስ ለክብርና ለጌጥ እንዲሆን ለወንድምህ ለአሮን ሥራለት» አለው፤ ለአሮን ልጆችም ሸሚዞችን፣ መታጠቂያዎችንና ቆቦችን አሠራ። እንዲሁም ካህናትና ዲያቆናት ሲያገለግሉ የተለየ ልብሰ ተክህኖ ይለብሳሉ።",
          },
          vers: ["Exod 28:2", "Exod 28:40"],
        },
        {
          tekst: {
            no: "Under ቅዳሴ har presten en lang hvit kjortel (ቀሚስ), et belte, en kappe (ካባ, ላንቃ) og en lue eller krone. Klærne blir velsignet før de brukes. Hvitt betyr renhet og herlighet.",
            am: "በቅዳሴ ጊዜ ካህኑ ነጭ ቀሚስ፣ መታጠቂያ፣ ካባና ላንቃ ይለብሳል፤ ቆብ ወይም አክሊል ይደፋል። አልባሳቱ ተባርከው ለአገልግሎት ይውላሉ። ነጭ የንጽሕናና የክብር ምልክት ነው።",
          },
          vers: ["Ps 132:9", "Rev 4:4"],
        },
        {
          tekst: {
            no: "Øverstepresten Aron hadde en plate av gull på hodet med ordene «Helliget Herren». Prestene i kirka bærer en krone (አክሊል) med et kors på under ቅዳሴ, til ære for Kristi kropp og blod.",
            am: "ሊቀ ካህናቱ አሮን «ቅድስና ለእግዚአብሔር» የሚል የተጻፈበት የወርቅ አክሊል ያደርግ ነበር። በሐዲስ ኪዳንም ካህናት በቅዳሴ ጊዜ መስቀል የተቀረጸበት አክሊል ይደፋሉ፤ ይህም ለሥጋውና ለደሙ ክብር ነው።",
          },
          vers: ["Exod 39:30"],
        },
        {
          tekst: {
            no: "Diakonene har lignende klær. Biskopen har i tillegg en krone, en hyrdestav og et håndkors som han velsigner folket med.",
            am: "ዲያቆናትም ተመሳሳይ ልብሰ ተክህኖ ይለብሳሉ። ኤጲስ ቆጶሳት በተጨማሪ አክሊል፣ በትረ ክህነትና ሕዝቡን የሚባርኩበት የእጅ መስቀል ይይዛሉ።",
          },
        },
      ],
    },
    {
      id: "klaer",
      tittel: { no: "Slik kler vi oss", am: "አለባበሳችን" },
      punkter: [
        {
          tekst: {
            no: "Vi går til kirka i rene, hvite klær. Jesus hadde klær som var hvite som lyset på forklarelsesfjellet. Kirka er som et bryllupshus der Kristus møter oss, og da kler vi oss som til fest.",
            am: "ወደ ቤተ ክርስቲያን ንጹሕ ነጭ ልብስ ለብሰን እንሄዳለን። ጌታችን በደብረ ታቦር ልብሱ እንደ ብርሃን ነጭ ሆነ። ቤተ ክርስቲያንም ክርስቶስ ከምእመናን ጋር አንድ የሚሆንባት የሠርግ ቤት ስለሆነች እንደ ሙሽራ ነጭ እንለብሳለን።",
          },
          vers: ["Matt 17:2", "Eccl 9:8"],
        },
        {
          tekst: {
            no: "Hvitt minner oss også om englene, som viste seg i hvite klær ved Jesu grav, og om helgenene, som står for Guds trone i hvite kjortler.",
            am: "ነጩ ልብስ በጌታችን መቃብር ነጭ ለብሰው የታዩትን መላእክትና በዙፋኑ ፊት ነጭ ልብስ ለብሰው የቆሙትን ቅዱሳን ያስታውሰናል።",
          },
          vers: ["Matt 28:3", "Rev 7:9"],
        },
        {
          tekst: {
            no: "Over klærne har vi ነጠላ, et tynt hvitt bomullssjal. Det legges i kors over brystet. Slik minnes vi at Jesus led og ble korsfestet for oss på langfredag. ጋቢ er et tykkere hvitt sjal av samme slag. Mange av dem er vevd med kors.",
            am: "ከልብሳችን በላይ ነጭ ነጠላ እንለብሳለን፤ ግራና ቀኝ በትእምርተ መስቀል አምሳል እናደገድገዋለን። ይህም ጌታችን በዕለተ ዓርብ የተቀበለውን መከራና መሰቀሉን ለማሰብ ነው። ጋቢም ወፍራም ነጭ ልብስ ነው፤ ብዙዎቹ የመስቀል ጥለት አላቸው።",
          },
        },
        {
          tekst: {
            no: "Klærne skal dekke kroppen. Jenter og kvinner har lange skjørt eller kjoler og dekker håret med ነጠላ eller et hvitt skjerf (ሻሽ). Gutter og menn har ryddige klær og dekker ikke hodet. Vi kommer ikke i nattøy eller skitne klær.",
            am: "ልብሳችን ሰውነትን የሚሸፍን መሆን አለበት። እኅቶች ረጅም ቀሚስ ይለብሳሉ፤ ጸጉራቸውን በነጠላ ወይም በነጭ ሻሽ ይሸፍናሉ። ወንድሞች ሥርዓት ያለው ልብስ ይለብሳሉ፤ ራሳቸውን አይከናነቡም። የሌሊት ልብስ ወይም ያደፈ ልብስ ለብሰን አንሄድም።",
          },
          vers: ["1Cor 11:4-6", "1Tim 2:9"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Jared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "Jared levde i Aksum på 500-tallet. Kirkas tradisjon sier at han ble tatt opp i paradiset og der lærte sangen han skrev ned i ድጓ. Han laget de tre sangmåtene ግዕዝ, ዕዝል og አራራይ. Prestenes sang følges av trommer og sistrum, slik David danset foran arken.",
        am: "ቅዱስ ያሬድ በስድስተኛው መቶ ክፍለ ዘመን በአክሱም የነበረ ሊቅ ነው። ወደ ገነት ተነጥቆ ዜማውን እንደ ተማረ ትውፊት ይናገራል፤ ድጓንም ደረሰ። ግዕዝ፣ ዕዝልና አራራይ የተባሉትን ሦስቱን የዜማ ስልቶች አስገኘ። የካህናት ዜማ ዳዊት በታቦቱ ፊት እንዳሸበሸበ በከበሮና በጸናጽል ይታጀባል።",
      },
      kilde:
        "The Ethiopian Orthodox Tewahedo Church: Church music (etter Aymero W. og Joachim M., The Ethiopian Orthodox Church, 1970) – https://www.ethiopianorthodox.org/english/church/music.html",
    },
    {
      navn: { no: "Den hellige Epifanios", am: "ቅዱስ ኤጲፋንዮስ" },
      tekst: {
        no: "I boka ሄክሳሜሮን (አክሲማሮስ) om skapelsen forteller Epifanios at djevelen kjempet mot englene. Da tegnet Gud et kors av lys på vingene deres og ga dem et kors av lys i hendene. Med korsets kraft seiret englene.",
        am: "ቅዱስ ኤጲፋንዮስ ሥነ ፍጥረትን በጻፈበት አክሲማሮስ በተባለ መጽሐፉ ዲያብሎስ መላእክትን በተዋጋ ጊዜ እግዚአብሔር በክንፋቸው ላይ የብርሃን መስቀል እንደ ቀረጸላቸው፣ በእጃቸውም የብርሃን መስቀል እንዳስያዛቸው ይናገራል። መላእክትም በመስቀሉ ኃይል ድል ነሡ።",
      },
      kilde:
        "Mahibere Kidusan: «መስቀል» – https://eotcmk.org/a/%E1%88%98%E1%88%B5%E1%89%80%E1%88%8D/",
    },
    {
      navn: { no: "Den hellige Basilios den store", am: "ቅዱስ ባስልዮስ" },
      tekst: {
        no: "Keiser Julian forfulgte de kristne og satte Basilios i fengsel. Basilios ba foran et ikon av martyren Merkurios. Ikonet forsvant en stund, og da det kom tilbake, var det blod på spydet. Gud hadde svart på bønnen og stanset forfølgeren. Kirka leser dette i ስንክሳር 25. ኅዳር.",
        am: "ንጉሥ ዑልያኖስ ምእመናንን ሲያሳድድ ቅዱስ ባስልዮስን አሰረው። ቅዱስ ባስልዮስ በእሥር ቤት በቅዱስ መርቆሬዎስ ሥዕል ፊት ሲጸልይ ሥዕሉ ለጥቂት ጊዜ ተሰወረ፤ ሲመለስም ጦሩ ላይ ደም ይንጠባጠብ ነበር። ቅዱስ ባስልዮስም እግዚአብሔርን አመሰገነ። (መጽሐፈ ስንክሳር ኅዳር ፳፭)",
      },
      kilde:
        "Mahibere Kidusan (for barn): «ሥዕለ አድኅኖ», etter Synaksariet (ስንክሳር) 25. ኅዳር – https://eotcmk.org/a/%e1%88%a5%e1%8b%95%e1%88%88-%e1%8a%a0%e1%8b%b5%e1%8a%85%e1%8a%96-3/",
    },
  ],
  ord: [
    { ord: "ንዋየ ቅድሳት", forklaring: { no: "de hellige tingene i kirka", am: "ለቤተ ክርስቲያን አገልግሎት የተለዩ ቅዱሳት ዕቃዎች" } },
    { ord: "ከበሮ", forklaring: { no: "kirketromme", am: "በቆዳ የተለበጠ የዜማ መሣሪያ" } },
    { ord: "ጸናጽል", forklaring: { no: "sistrum, en klingende metallramme", am: "የሚንሿሿ የዜማ መሣሪያ" } },
    { ord: "መቋሚያ", forklaring: { no: "bønnestav som kirkesangerne bruker", am: "መዘምራን በማኅሌት የሚይዙት በትር" } },
    { ord: "ዕጣን", forklaring: { no: "røkelse", am: "በጸሎት ጊዜ የሚታጠን መልካም መዓዛ" } },
    { ord: "ጽና", forklaring: { no: "røkelseskar", am: "የዕጣን ማጠኛ" } },
    { ord: "ጃንጥላ / ድባብ", forklaring: { no: "seremonielle paraplyer", am: "በታቦቱና በአገልጋዮች ላይ የሚያዝ ጥላ" } },
    { ord: "መጋረጃ", forklaring: { no: "forhenget foran መቅደስ", am: "የመቅደሱ በር መጋረጃ" } },
    { ord: "ጻሕል", forklaring: { no: "disken som Kristi kropp legges på", am: "የጌታችን ሥጋ የሚቀመጥበት ወጭት" } },
    { ord: "ጽዋዕ", forklaring: { no: "kalken for Kristi blod", am: "የክቡር ደሙ ማቅረቢያ" } },
    { ord: "አትሮንስ", forklaring: { no: "bokstolen for kirkas bøker", am: "መጻሕፍት የሚቀመጡበት" } },
    { ord: "ማዕተብ", forklaring: { no: "snoren med korset vi bærer rundt halsen", am: "በአንገት የሚታሰር የመስቀል ምልክት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvilke tre instrumenter bruker kirkesangerne, og hvor i Bibelen finner vi dem?", am: "መዘምራን የሚጠቀሙባቸው ሦስቱ የዜማ መሣሪያዎች ምንድን ናቸው? በመጽሐፍ ቅዱስ የት እናገኛቸዋለን?" },
      svar: {
        no: "ከበሮ, ጸናጽል og መቋሚያ. Salme 150 sier: «Lov ham med pauke og dans … lov ham med tonende bekkener», og David lovpriste Gud foran arken med trommer og cymbler (2 Sam 6,5).",
        am: "ከበሮ፣ ጸናጽልና መቋሚያ። መዝሙረ ዳዊት 150 «በከበሮና በዘፈን አመስግኑት … ድምፁ መልካም በሆነ ጸናጽል አመስግኑት» ይላል፤ ዳዊትም በታቦቱ ፊት በከበሮና በጸናጽል አመሰገነ (2ኛ ሳሙ 6፥5)።",
      },
    },
    {
      sporsmal: { no: "Hva betyr røkelsen som stiger opp?", am: "ወደ ላይ የሚወጣው የዕጣን ጢስ ምንን ያመለክታል?" },
      svar: {
        no: "Bønnene våre som stiger opp til Gud. David ba: «La min bønn gjelde som røkoffer», og i himmelen steg røken opp sammen med de helliges bønner (Åp 8,3–4).",
        am: "ወደ እግዚአብሔር የሚያርገውን ጸሎታችንን። ዳዊት «ጸሎቴን በፊትህ እንደ ዕጣን ተቀበልልኝ» አለ፤ በሰማይም የዕጣኑ ጢስ ከቅዱሳን ጸሎት ጋር ወጣ (ራእ 8፥3–4)።",
      },
    },
    {
      sporsmal: { no: "Hva er forskjellen på የመጾር መስቀል, የእጅ መስቀል og የአንገት መስቀል?", am: "በየመጾር መስቀል፣ በየእጅ መስቀልና በየአንገት መስቀል መካከል ያለው ልዩነት ምንድን ነው?" },
      svar: {
        no: "የመጾር መስቀል er det store korset diakonene bærer på en stang. የእጅ መስቀል er prestens håndkors som han velsigner med og vi kysser. የአንገት መስቀል er korset vi selv bærer rundt halsen.",
        am: "የመጾር መስቀል ዲያቆናት በመጾር የሚይዙት ትልቅ መስቀል ነው። የእጅ መስቀል ካህኑ የሚባርክበትና እኛ የምንሳለመው ነው። የአንገት መስቀል እኛ በማዕተብ በአንገታችን የምናስረው ነው።",
      },
    },
    {
      sporsmal: { no: "Hvorfor har kirka ikoner, og hvorfor kysser vi dem?", am: "ቤተ ክርስቲያን ቅዱሳት ሥዕላት ለምን አሏት? ለምንስ እንሳለማቸዋለን?" },
      svar: {
        no: "Gud befalte selv Moses å lage kjeruber på arken (2 Mos 25,18–22). Ikonene er et minne om helgenene og lærer oss om dem. Vi kysser dem for å vise kjærlighet til den som er avbildet, og æren går videre til Gud.",
        am: "እግዚአብሔር ራሱ ሙሴን በታቦቱ ላይ ኪሩቤልን እንዲሠራ አዘዘው (ዘጸ 25፥18–22)። ሥዕላቱ የቅዱሳን መታሰቢያ ናቸው፤ ያስተምሩናልም። የምንሳለማቸው ለሥዕሉ ባለቤት ያለንን ፍቅር ለመግለጥ ነው፤ ክብሩም ለእግዚአብሔር ይደርሳል።",
      },
    },
    {
      sporsmal: { no: "Hva heter karene som brukes til Kristi kropp og blod?", am: "ሥጋውንና ደሙን ለመፈተት የምንገለገልባቸው ንዋያት ምን ይባላሉ?" },
      svar: {
        no: "ጻሕል (disken for kroppen), ጽዋዕ (kalken for blodet), ዕርፈ መስቀል (korsskjeen), ማኅፈድ (klærne som dekker dem) og መሶበ ወርቅ (kurven brødet bæres inn i).",
        am: "ጻሕል፣ ጽዋዕ፣ ዕርፈ መስቀል፣ ማኅፈድና መሶበ ወርቅ።",
      },
    },
    {
      sporsmal: { no: "Hvorfor går vi i hvite klær og ነጠላ til kirka?", am: "ወደ ቤተ ክርስቲያን ነጭ ልብስና ነጠላ ለምን እንለብሳለን?" },
      svar: {
        no: "Hvitt betyr renhet og fest. Det minner om Jesu klær på forklarelsesfjellet og om englene og helgenene i hvitt. ነጠላ legges i kors for å minne oss om Jesu lidelse på korset.",
        am: "ነጭ የንጽሕናና የበዓል ምልክት ነው፤ በደብረ ታቦር የጌታችንን ልብስና ነጭ የለበሱትን መላእክትና ቅዱሳን ያስታውሰናል። ነጠላውን በትእምርተ መስቀል አምሳል የምናደገድገው የጌታችንን መከራ መስቀል ለማሰብ ነው።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: ሥርዓተ አምልኮ (ንዋያተ ቅድሳት)", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae-4/" },
    { navn: "Mahibere Kidusan: ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!", url: "https://eotcmk.org/a/%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%a8%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95%e1%8a%95-%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b5-%e1%88%8a%e1%8c%a0/" },
    { navn: "Mahibere Kidusan (for barn): ቅዱሳት ሥዕላት", url: "https://eotcmk.org/a/%e1%89%85%e1%8b%b1%e1%88%b3%e1%89%b5-%e1%88%a5%e1%8b%95%e1%88%8b%e1%89%b5/" },
    { navn: "Mahibere Kidusan (for barn): ሥዕለ አድኅኖ", url: "https://eotcmk.org/a/%e1%88%a5%e1%8b%95%e1%88%88-%e1%8a%a0%e1%8b%b5%e1%8a%85%e1%8a%96/" },
    { navn: "Mahibere Kidusan (for barn): ሥዕለ አድኅኖ (Basilios og Merkurios-ikonet)", url: "https://eotcmk.org/a/%e1%88%a5%e1%8b%95%e1%88%88-%e1%8a%a0%e1%8b%b5%e1%8a%85%e1%8a%96-3/" },
    { navn: "Mahibere Kidusan (for barn): ጸሎት በቤተ ክርስቲያን", url: "https://eotcmk.org/a/%e1%8c%b8%e1%88%8e%e1%89%b5-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95/" },
    { navn: "Mahibere Kidusan: ቀለማትና ትርጉማቸው", url: "https://eotcmk.org/a/%e1%89%80%e1%88%88%e1%88%9b%e1%89%b5%e1%8a%93-%e1%89%b5%e1%88%ad%e1%8c%89%e1%88%9b%e1%89%b8%e1%8b%8d/" },
    { navn: "Mahibere Kidusan: መስቀል", url: "https://eotcmk.org/a/%E1%88%98%E1%88%B5%E1%89%80%E1%88%8D/" },
    { navn: "Mahibere Kidusan: ክብረ መስቀል በኢትዮጵያ", url: "https://eotcmk.org/a/%e1%8a%ad%e1%89%a5%e1%88%a8-%e1%88%98%e1%88%b5%e1%89%80%e1%88%8d-%e1%89%a0%e1%8a%a2%e1%89%b5%e1%8b%ae%e1%8c%b5%e1%8b%ab/" },
    { navn: "Mahibere Kidusan: ‹‹እንደሚንሿሿ ጸናጽል ሆኛለሁ›› (1 Kor 13,1)", url: "https://eotcmk.org/a/%e1%8a%a5%e1%8a%95%e1%8b%b0%e1%88%9a%e1%8a%95%e1%88%bf%e1%88%bf-%e1%8c%b8%e1%8a%93%e1%8c%bd%e1%88%8d-%e1%88%86%e1%8a%9b%e1%88%88%e1%88%81-%e1%8d%a9%e1%8a%9b/" },
    { navn: "Mahibere Kidusan: ከተራ ምንድን ነው?", url: "https://eotcmk.org/a/%e1%8a%a8%e1%89%b0%e1%88%ab-%e1%88%9d%e1%8a%95%e1%8b%b5%e1%8a%95-%e1%8a%90%e1%8b%8d/" },
    { navn: "Mahibere Kidusan: የትንሣኤ በዓል ትርጕሙና አከባበሩ", url: "https://eotcmk.org/a/%e1%8b%a8%e1%89%b5%e1%8a%95%e1%88%a3%e1%8a%a4-%e1%89%a0%e1%8b%93%e1%88%8d-%e1%89%b5%e1%88%ad%e1%8c%95%e1%88%99%e1%8a%93-%e1%8a%a0%e1%8a%a8%e1%89%a3%e1%89%a0%e1%88%a9/" },
    { navn: "Mahibere Kidusan: ቅድስት ቤተ ክርስቲያን (መጋረጃ og መቅደስ)", url: "https://eotcmk.org/a/%E1%89%85%E1%8B%B5%E1%88%B5%E1%89%B5-%E1%89%A4%E1%89%B0-%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/" },
    { navn: "Mahibere Kidusan (English): The Festival of Timket", url: "https://eotcmk.org/e/the-festival-of-timket/" },
    { navn: "Mahibere Kidusan (English): Offerings", url: "https://eotcmk.org/e/offerings/" },
    { navn: "Mahibere Kidusan (English): The Twenty-Four Heavenly Priests", url: "https://eotcmk.org/e/the-twenty-four-heavenly-priests/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacramental", url: "https://ethiopianorthodox.org/english/Lent/sacramental.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Church music", url: "https://www.ethiopianorthodox.org/english/church/music.html" },
    { navn: "Søndagsskolens lærebok: ሥርዓተ ቤተ ክርስቲያን ሁለተኛ ክፍል (2015 E.C.)", url: "https://www.scribd.com/document/699737051/" },
    { navn: "ተዋህዶ-ሀይማኖታችን: የከበሮ ክፍል ምሳሌያዊ ትርጉም (blogg)", url: "http://ttewahdo.blogspot.com/2013/03/blog-post.html" },
  ],
  utkast: true,
};
