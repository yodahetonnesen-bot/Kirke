import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ቅዳሴ:
// ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን (ethiopianorthodox.org), særlig kap. 4.1 «ሦስቱ የቅዳሴ ክፍሎች» (forberedelsen,
// inngangshymnene for hver ukedag, «ሚ መጠን ግርምት ዛቲ ዕለት», «አሐዱ አብ ቅዱስ», lesningene, «ፃኡ ንኡሰ ክርስቲያን»,
// trosbekjennelsen, «ተአምኁ በበይናቲክሙ», «ቅድሳት ለቅዱሳን»), kap. 4.2 «ልኡካን» (de fem tjenerne og hva de er bilde på),
// listen over de 14 ቅዳሴያት (note 488) og hvilke dager noen av dem brukes (ቅዳሴ ጎርጎርዮስ ዘኑሲስ i ሆሣዕና-uka,
// ቅዳሴ ጎርጎርዮስ ካልዕ i julen, ቅዳሴ ያዕቆብ ዘሥሩግ i ጳጉሜ);
// Marcos Daoud: The Liturgy of the Ethiopian Church, med innledning av erkebiskop Yesehaq (antall prester og diakoner,
// lesningene, evangelieprosesjonen, folkets svar, regelen om stillhet og om ikke å gå ut etter evangeliet);
// ethiopianorthodox.org: «Worship in the Ethiopian Orthodox Church» (tider, språk) og «Church Music» (anaforaene);
// Mahibere Kidusan: «ሥርዓተ አምልኮ ክፍል አንድ» (ቅዳሴ er lovsang som englene begynte).
// Usikkert: Kildene er ikke enige om hvilke anaforaer som brukes på hvilke dager. Daoud sier at ቅዳሴ ዲዮስቆሮስ brukes
// i julen, ved ጥምቀት, påske, Kristi himmelfart og pinse, mens አኰቴተ ቍርባን sier at ቅዳሴ ጎርጎርዮስ ካልዕ er julens ቅዳሴ.
// Vi har bare tatt med noen få eksempler som kildene er tydelige på. Presten bør se over listen.
// Usikkert: አኰቴተ ቍርባን sier at kirka har 20 ቅዳሴያት i alt, men at 14 er trykt og brukes. Vi skriver «14 i bruk».
// Usikkert: Hvem som leser hvilken lesning (utenom Paulus-brevet ved hoveddiakonen og evangeliet ved presten) sier kildene
// ikke tydelig, så det har vi ikke skrevet.
export const kidase: Tema = {
  slug: "kidase",
  del: "gudstjenester",
  tittel: { no: "Den hellige liturgien", am: "ቅዳሴ" },
  undertittel: {
    no: "ቅዳሴ trinn for trinn – der himmel og jord lovsynger sammen",
    am: "ሥርዓተ ቅዳሴ በቅደም ተከተል – ሰማይና ምድር በአንድነት የሚያመሰግኑበት",
  },
  bilde: "evangeliebladLam",
  ingress: {
    no:
      "ቅዳሴ betyr «helliggjøring» og «lovsang». Det er kirkas viktigste gudstjeneste, der vi hører Guds ord, lovsynger sammen med englene og tar imot Kristi kropp og blod. Alle de andre bønnene i kirka samler seg rundt ቅዳሴ. Hva nattverden er, kan du lese på siden om nattverden. Her ser vi på hvordan ቅዳሴ foregår, trinn for trinn.",
    am:
      "ቅዳሴ ማለት ቅድስና፣ ምስጋና ማለት ነው። የእግዚአብሔርን ቃል የምንሰማበት፣ ከመላእክት ጋር የምናመሰግንበትና ቅዱስ ሥጋውንና ክቡር ደሙን የምንቀበልበት ከጸሎት ሁሉ በላይ የሆነ የቤተ ክርስቲያን አገልግሎት ነው። ሌሎች ጸሎታት ሁሉ በቅዳሴ ዙሪያ ይሰበሰባሉ። ቍርባን ምን እንደ ሆነ በምሥጢረ ቍርባን ገጽ ላይ ታገኛላችሁ። እዚህ ቅዳሴ እንዴት እንደሚከናወን በቅደም ተከተል እንመለከታለን።",
  },
  hovedvers: "Luke 22:19",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er ቅዳሴ?", am: "ቅዳሴ ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ቅዳሴ kommer av ge'ez-ordet for «hellig» og betyr helliggjøring og lovsang. Gud sier: «I skal være hellige; for jeg er hellig.» I ቅዳሴ blir vi helliget ved Guds ord og ved Kristi kropp og blod.",
            am: "«ቅዳሴ» የሚለው ቃል «ቀደሰ» ከሚለው የግእዝ ግሥ የመጣ ሲሆን ቅድስና፣ ምስጋና ማለት ነው። እግዚአብሔር «እኔ ቅዱስ ነኝና ቅዱሳን ሁኑ» ይላል። በቅዳሴ በእግዚአብሔር ቃልና በክርስቶስ ሥጋና ደም እንቀደሳለን።",
          },
          vers: ["Lev 11:44", "1Pet 1:15-16"],
        },
        {
          tekst: {
            no: "Kirka lærer at englene var de første som holdt ቅዳሴ. Da Jesus ble født i Betlehem, sang de: «Ære være Gud i det høieste, og fred på jorden, i mennesker hans velbehag!» I ቅዳሴ synger vi sammen med dem.",
            am: "ቅዳሴን የጀመሩት ሰማያውያን መላእክት ናቸው። ጌታችን በቤተ ልሔም በተወለደ ጊዜ «ክብር ለእግዚአብሔር በአርያም ይሁን ሰላምም በምድር ለሰውም በጎ ፈቃድ» እያሉ አመሰገኑ። በቅዳሴ ከእነርሱ ጋር አብረን እናመሰግናለን።",
          },
          vers: ["Luke 2:13-14"],
        },
        {
          tekst: {
            no: "Jesus selv gav oss ordningen skjærtorsdag kveld. Han tok brødet og sa: «Gjør dette til minne om mig!» Paulus skriver at han gav videre det han hadde fått fra Herren. Apostlene tok imot ordningen og gav den videre fra slekt til slekt.",
            am: "ሥርዓቱን የሰጠን ጌታችን ራሱ ነው። በጸሎተ ሐሙስ እንጀራን አንሥቶ «ይህን ለመታሰቢያዬ አድርጉት» አለ። ቅዱስ ጳውሎስም ከጌታ የተቀበለውን ለእኛ አሳልፎ እንደ ሰጠ ይናገራል። ቅዱሳን ሐዋርያት ይህን ሥርዓት ተረክበው ለትውልድ አስተላለፉት።",
          },
          vers: ["Luke 22:19-20", "1Cor 11:23-26"],
        },
        {
          tekst: {
            no: "De første kristne «holdt trolig fast ved apostlenes lære og ved samfundet, ved brøds-brytelsen og ved bønnene». Slik er ቅዳሴ i dag også: lære, fellesskap, nattverd og bønn.",
            am: "የመጀመሪያዎቹ ክርስቲያኖች «በሐዋርያትም ትምህርትና በኅብረት እንጀራውንም በመቍረስ በየጸሎቱም ይተጉ ነበር»። ዛሬም ቅዳሴ እንዲሁ ነው፤ ትምህርት፣ ኅብረት፣ ቍርባንና ጸሎት።",
          },
          vers: ["Acts 2:42", "Acts 2:46"],
        },
        {
          tekst: {
            no: "ቅዳሴ er himmelsk gudstjeneste på jorden. Johannes så i himmelen at englene og de eldste falt ned for Lammet og sang en ny sang. Kirka lærer at englene står rundt alteret når ቅዳሴ holdes.",
            am: "ቅዳሴ በምድር ላይ የሚፈጸም ሰማያዊ አገልግሎት ነው። ቅዱስ ዮሐንስ በሰማይ መላእክትና ሽማግሌዎች በበጉ ፊት ወድቀው አዲስ ቅኔ ሲቀኙ አየ። በቅዳሴ ሰዓትም ቅዱሳን መላእክት በመንበሩ ዙሪያ እንደሚቆሙ ቤተ ክርስቲያን ታስተምራለች።",
          },
          vers: ["Rev 5:8-9", "Rev 5:11-12", "Heb 12:22-24"],
        },
      ],
    },
    {
      id: "hvem",
      tittel: { no: "Hvem gjør hva? De fem tjenerne (ልኡካን)", am: "አምስቱ ልኡካን" },
      ingress: {
        no: "Kirkas ordning er at det trengs fem tjenere til ቅዳሴ: to prester og tre diakoner. Hver av dem er et bilde på noen i Bibelen.",
        am: "ለቅዳሴ አገልግሎት አምስት ልኡካን ያስፈልጋሉ፤ ሁለት ካህናትና ሦስት ዲያቆናት። እያንዳንዳቸው በመጽሐፍ ቅዱስ ያሉ የአንድ ሰው ምሳሌዎች ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "Presten som leder ቅዳሴ heter ሠራዒ ካህን, og han har en hjelper, ንፍቅ ካህን. De to prestene er et bilde på Josef fra Arimatea og Nikodemus, som svøpte Jesu kropp i linklær.",
            am: "ቅዳሴውን የሚመራው ካህን ሠራዒ (ገባሬ ሠናይ) ካህን ይባላል፤ የሚረዳው ንፍቅ ካህን ነው። ሁለቱ ካህናት የጌታን ሥጋ በበፍታ የገነዙት የዮሴፍና የኒቆዲሞስ ምሳሌ ናቸው።",
          },
          vers: ["John 19:38-40"],
        },
        {
          tekst: {
            no: "Hoveddiakonen (ሠራዒ ዲያቆን) bærer et håndkors og roper ut det folket skal gjøre: «Stå opp til bønn!» Han gir også blodet med korsskjeen. Han er et bilde på Stefanus, diakonen som ba for dem som steinet ham.",
            am: "ሠራዒው ዲያቆን የመጾር መስቀል ይዞ «ተንሥኡ ለጸሎት» እያለ አብዛኞቹን ትእዛዛት ያስተላልፋል፤ በዕርፈ መስቀልም ክቡር ደሙን ያቀብላል። እርሱ በድንጋይ ለወገሩት የጸለየው የቅዱስ እስጢፋኖስ ምሳሌ ነው።",
          },
          vers: ["Acts 6:5-6", "Acts 7:59-60"],
        },
        {
          tekst: {
            no: "Den andre diakonen (ንፍቅ ዲያቆን) bærer et tent lys og går foran i prosesjonene. Han er et bilde på Johannes døperen, som Jesus kalte «det brennende og skinnende lys». Den tredje diakonen gjør i stand lesningene fra Bibelen.",
            am: "ንፍቁ ዲያቆን ጧፍ አብርቶ የቅዳሴውን ዑደት ይመራል። ጌታ «የሚነድና የሚያበራ መብራት» ያለው የመጥምቀ መለኮት ቅዱስ ዮሐንስ ምሳሌ ነው። ሦስተኛው ዲያቆን ደግሞ ከቅዱሳት መጻሕፍት የሚነበቡትን ንባባት ያዘጋጃል።",
          },
          vers: ["John 5:35", "John 1:6-8"],
        },
        {
          tekst: {
            no: "Hvorfor fem? Den gamle ordningen i Etiopia er minst to prester og tre diakoner. I 1959 gav kirka lov til å holde ቅዳሴ med én prest og én diakon der det ikke finnes nok tjenere. Mange menigheter utenfor Etiopia gjør det slik i dag.",
            am: "ለምን አምስት? የቤተ ክርስቲያናችን ጥንታዊ ሥርዓት ቢያንስ ሁለት ካህናትና ሦስት ዲያቆናት ነው። በ1959 ዓ.እ. በቂ አገልጋዮች በሌሉበት ቦታ በአንድ ካህንና በአንድ ዲያቆን እንዲቀደስ ተፈቅዷል። በስደት ያሉ ብዙ አብያተ ክርስቲያን እንዲህ ይቀድሳሉ።",
          },
          vers: ["Matt 18:20"],
        },
        {
          tekst: {
            no: "Folket er ikke tilskuere. Vi står, svarer, synger, bøyer oss og tar imot. Utenfor helligdommen synger kirkesangerne (ደብተራ / ሊቃውንት) salmer før og etter ቅዳሴ. Kirka sier at prester og diakoner som ikke har vært med på nattbønnen (ሰዓታት), ikke skal tjene i ቅዳሴ.",
            am: "ምእመናን ተመልካቾች አይደሉም፤ እንቆማለን፣ እንመልሳለን፣ እንዘምራለን፣ እንሰግዳለን፣ እንቀበላለን። በቅኔ ማኅሌት ደብተራዎች (ሊቃውንት) ከቅዳሴ በፊትና በኋላ ይዘምራሉ። በሰዓታት ጸሎት ያልተገኙ ካህናትና ዲያቆናት በቅዳሴ እንዳያገለግሉ ሥርዓቱ ያዝዛል።",
          },
          vers: ["1Pet 2:9", "Ps 134:1-2"],
        },
      ],
    },
    {
      id: "forberedelse",
      tittel: { no: "1. Forberedelsen", am: "፩. የዝግጅት ክፍል" },
      ingress: {
        no: "Lærerne i kirkeskolen deler ቅዳሴ i tre deler: forberedelsen, lesningene (undervisningen) og selve nattverdbønnen (ፍሬ ቅዳሴ).",
        am: "የአብነት መምህራን ቅዳሴውን በሦስት ይከፍሉታል፤ የዝግጅት ክፍል፣ የትምህርት ክፍልና ፍሬ ቅዳሴ።",
      },
      punkter: [
        {
          tekst: {
            no: "Tjenerne vasker hender og føtter. Diakonene gjør i stand brødet og vinen i det lille huset ቤተ ልሔም øst for kirka. Presten ber stille bønner for seg selv, for alle som skal tjene, og for folket. Han ber også salmer av David.",
            am: "ልኡካኑ እጃቸውንና እግራቸውን ይታጠባሉ። ዲያቆናቱ ከመቅደሱ በስተ ምሥራቅ ባለችው ቤተ ልሔም ኅብስቱንና ወይኑን ያዘጋጃሉ። ሠራዒው ካህን ለራሱ፣ አብረውት ለሚያገለግሉትና ለምእመናን በለኆሳስ ይጸልያል፤ መዝሙረ ዳዊትንም ይደግማል።",
          },
          vers: ["Exod 30:19-20", "Ps 26:6"],
        },
        {
          tekst: {
            no: "Når klokka ringer, begynner ቅዳሴ. Prester, diakoner og folk synger en inngangshymne fra Yareds bøker. Mandag, tirsdag og torsdag synger vi «እምነ በሓ ቅድስት ቤተ ክርስቲያን» («Fred være med deg, vår mor, den hellige kirke»). Onsdag, fredag og lørdag synger vi «መስቀል አብርሃ» («Korset lyste»). Søndag synger vi «ኵሉ ዘገብራ ለጽድቅ» («Den som gjør rett og holder sabbaten, er rettferdig»).",
            am: "የቅዳሴውን መጀመር የሚያበሥረው ደወል ሲሰማ ካህናቱ፣ ዲያቆናቱና ምእመናኑ ከቅዱስ ያሬድ መጻሕፍት የተወሰደ የመግቢያ ዝማሬ ይዘምራሉ። ሰኞ፣ ማክሰኞና ኀሙስ «እምነ በሓ ቅድስት ቤተ ክርስቲያን»፤ ረቡዕ፣ ዓርብና ቅዳሜ «መስቀል አብርሃ»፤ እሑድ «ኵሉ ዘገብራ ለጽድቅ» ይዜማል።",
          },
          vers: ["Ps 100:4", "Rev 21:2"],
        },
        {
          tekst: {
            no: "Presten roper: «ሚ መጠን ግርምት ዛቲ ዕለት» – «Hvor fryktinngytende er denne dagen! Nå kommer Den hellige ånd ned fra himmelen over offeret. Stå i stillhet og ærefrykt.» Slik minner han oss om at vi står foran Gud.",
            am: "ሠራዒው ካህን «ሚ መጠን ግርምት ዛቲ ዕለት …» ብሎ ይጸልያል፤ ትርጓሜውም «ይህች ቀን ምን ያህል የምታስፈራ ናት! መንፈስ ቅዱስ ከሰማየ ሰማያት ወርዶ ይህን መሥዋዕት የሚያከብርባት ናት። በጽሙናና በመፍራት ቁሙ» ማለት ነው።",
          },
          vers: ["Gen 28:16-17", "Hab 2:20"],
        },
        {
          tekst: {
            no: "Presten bærer brødet rundt alteret og ber Gud huske dem som har båret fram gaven. Så løfter han hendene, ser mot øst og synger: «አሐዱ አብ ቅዱስ፥ አሐዱ ወልድ ቅዱስ፥ አሐዱ ውእቱ መንፈስ ቅዱስ» – «Én er den hellige Fader, én er den hellige Sønn, én er Den hellige ånd.» Folket svarer: «በአማን አብ ቅዱስ …» – «Sannelig, Faderen er hellig, Sønnen er hellig, Den hellige ånd er hellig.»",
            am: "ሠራዒው ካህን ኅብስቱን ይዞ መንበሩን እየዞረ ቍርባኑን ያቀረቡትን እንዲያስብ ይለምናል። ከዚያም ሁለት እጆቹን ዘርግቶ ወደ ምሥራቅ ዞሮ «አሐዱ አብ ቅዱስ፥ አሐዱ ወልድ ቅዱስ፥ አሐዱ ውእቱ መንፈስ ቅዱስ» ብሎ ያዜማል። ሕዝቡም «በአማን አብ ቅዱስ፥ በአማን ወልድ ቅዱስ፥ በአማን ውእቱ መንፈስ ቅዱስ» ብለው ይመልሳሉ።",
          },
          vers: ["Matt 28:19", "Rom 12:1"],
        },
        {
          tekst: {
            no: "Diakonen leser bønner for verden: for fred, for kirka, for de syke, for de reisende og for jordas grøde. Til hver bønn svarer folket: «Amen, Herre, forbarm deg over oss.»",
            am: "ዲያቆኑ «በእንተ ቅድሳት» የሚለውን የልመና ጸሎት ያነባል፤ ስለ ዓለም ሰላም፣ ስለ ቤተ ክርስቲያን፣ ስለ ድውያን፣ ስለ መንገደኞችና ስለ ምድር ፍሬ። ምእመናንም በየአንቀጹ «አሜን እግዚኦ ተሣሀለነ» (አሜን አቤቱ ይቅር በለን) ይላሉ።",
          },
          vers: ["1Tim 2:1-2"],
        },
        {
          tekst: {
            no: "Så brenner presten røkelse og går rundt alteret mens folket synger «ማዕጠንት ዘወርቅ» («Du gylne røkelseskar»). Hymnen sier at Maria er som røkelseskaret som bar ilden – Guds Sønn – i sitt morsliv. Røkelsen stiger opp som bønnene våre.",
            am: "ካህኑ ዕጣን አጥኖ መንበሩን ሲዞር ምእመናን «ማዕጠንት ዘወርቅ እንተ ፆርኪ ፍሕመ እሳት» እያሉ ይዘምራሉ። ዝማሬው ጌታን በእሳቱ ፍሕም፣ እመቤታችንን ፍሕሙን በተሸከመው ጥና ይመስላል። ዕጣኑ እንደ ጸሎታችን ወደ ላይ ያርጋል።",
          },
          vers: ["Exod 30:7-8", "Ps 141:2", "Rev 8:3-4"],
        },
      ],
    },
    {
      id: "lesningene",
      tittel: { no: "2. Lesningene – brevene, Apostlenes gjerninger og evangeliet", am: "፪. የትምህርት ክፍል – መልእክታት፣ ግብረ ሐዋርያትና ወንጌል" },
      ingress: {
        no: "I ቅዳሴ hører vi fem lesninger. Hvilke tekster som leses, står i kirkas leseliste (ግጻዌ) for hver dag.",
        am: "በቅዳሴ አምስት ንባባት ይነበባሉ። ለዕለቱ የሚነበቡት ክፍሎች በመጽሐፈ ግጻዌ ተወስነዋል።",
      },
      punkter: [
        {
          tekst: {
            no: "Først leser hoveddiakonen fra et av Paulus' brev. Etterpå leses et brev fra en av de andre apostlene (Jakob, Peter, Johannes eller Judas) og så fra Apostlenes gjerninger. Slik gjorde også Jesus i synagogen: han reiste seg og leste fra Skriften.",
            am: "መጀመሪያ ሠራዒው ዲያቆን ከቅዱስ ጳውሎስ መልእክታት ያነባል። ቀጥሎ ከሌሎቹ ሐዋርያት መልእክታት (ከያዕቆብ፣ ከጴጥሮስ፣ ከዮሐንስ ወይም ከይሁዳ) አንዱ፣ ከዚያም ግብረ ሐዋርያት ይነበባል። ጌታችንም በምኵራብ ተነሥቶ መጽሐፉን አንብቧል።",
          },
          vers: ["Luke 4:16-17", "Col 4:16"],
        },
        {
          tekst: {
            no: "Før Paulus-brevet sier diakonen at den som ikke elsker Herren Jesus Kristus og ikke tror at han ble født av jomfru Maria, er utestengt, slik Paulus skriver. Etterpå lyser han velsignelsen: «Faderens velsignelse, Sønnens kjærlighet og Den hellige ånds fellesskap» være over oss.",
            am: "የጳውሎስን መልእክት ከማንበቡ በፊት ዲያቆኑ ጌታችንን ኢየሱስ ክርስቶስን የማይወድና ከቅድስት ድንግል ማርያም መወለዱን የማያምን ሁሉ ጳውሎስ እንደ ተናገረ የተለየ ይሁን ይላል። ካነበበ በኋላም «የአብ በረከት፣ የወልድ ፍቅር፣ የመንፈስ ቅዱስ ሀብት» በእኛ ላይ ይውረድ እያለ ይባርካል።",
          },
          vers: ["1Cor 16:22", "2Cor 13:14"],
        },
        {
          tekst: {
            no: "Så synges «ቅዱስ እግዚአብሔር፥ ቅዱስ ኃያል፥ ቅዱስ ሕያው ዘኢይመውት» – «Hellige Gud, hellige Sterke, hellige Levende som ikke dør». Kirka forteller at da Josef og Nikodemus svøpte Jesu kropp i stillhet, sa Herren: «Svøp meg mens dere sier: Hellige Gud, hellige Sterke, hellige Levende som ikke dør.»",
            am: "ከዚያም «ቅዱስ እግዚአብሔር፥ ቅዱስ ኃያል፥ ቅዱስ ሕያው ዘኢይመውት» (ሠለስቱ ቅዳስያት) ይዜማል። ዮሴፍና ኒቆዲሞስ ጌታን ዝም ብለው ሲገንዙት «ቅዱስ እግዚአብሔር፥ ቅዱስ ኃያል፥ ቅዱስ ሕያው ዘኢይመውት እያላችሁ ገንዙኝ» እንዳላቸው የሚነገር ትውፊት አለ።",
          },
          vers: ["Isa 6:3", "Rev 4:8"],
        },
        {
          tekst: {
            no: "Diakonen leser verset fra Salmenes bok (ምስባክ). Så går presten rundt alteret med evangelieboka, mens diakonen bærer lyset foran. Diakonen roper: «Halleluja! Stå opp og hør det hellige evangelium.» Alle står.",
            am: "ዲያቆኑ ምስባኩን ከመዝሙረ ዳዊት ያዜማል። ከዚያ ካህኑ ወንጌሉን ይዞ ዲያቆኑ ጧፍ እያበራ እየመራ መንበሩን ይዞራሉ። ዲያቆኑ «ሃሌ ሉያ፤ ተነሥታችሁ ቅዱስ ወንጌልን ስሙ» ብሎ ያውጃል፤ ሁሉም ይቆማሉ።",
          },
          vers: ["Neh 8:5-6", "Ps 119:105"],
        },
        {
          tekst: {
            no: "Presten (eller biskopen, hvis han er der) leser evangeliet og ser mot øst. Folket svarer: «Ære være deg, Kristus, min Herre og min Gud.» Alle er helt stille. Kirka sier: Ingen snakker når en jordisk konges brev blir lest – hvor mye mer når den himmelske Kongens ord leses!",
            am: "ካህኑ (ኤጲስ ቆጶስ ካለ እርሱ) ወደ ምሥራቅ ዞሮ ወንጌሉን ያነባል። ሕዝቡም «ክርስቶስ ጌታዬና አምላኬ ሆይ፥ ዘወትር ክብር ለአንተ ይሁን» ብለው ይመልሳሉ። በዚያ ሰዓት ሁሉም ዝም ይላሉ። የምድራዊ ንጉሥ መልእክት ሲነበብ ማንም አይናገርም፤ የሰማያዊው ንጉሥ ቃል ሲነበብማ እንዴት ይልቅ!",
          },
          vers: ["Mark 4:9", "Luke 11:28"],
        },
        {
          tekst: {
            no: "Etter lesningen kysser prestene, diakonene og hele folket evangelieboka. Den som har noe på hodet, tar det av. Så gir presten en preken om evangeliet. Etter evangeliet skal ingen gå ut av kirka før nattverden og prestens velsignelse, uten at det er nødvendig.",
            am: "ወንጌሉ ከተነበበ በኋላ ካህናቱ፣ ዲያቆናቱና ሕዝቡ ሁሉ ወንጌሉን ይሳለማሉ፤ ራሱን የሸፈነ ይገልጣል። ከዚያም ትምህርተ ወንጌል ይሰጣል። ከወንጌል በኋላ ያለ ግድ ማንም ቍርባን ሳይታደልና ካህኑ ሳይባርክ ከቤተ ክርስቲያን አይወጣም።",
          },
          vers: ["Matt 4:4", "Jas 1:22"],
        },
      ],
    },
    {
      id: "trosbekjennelsen",
      tittel: { no: "3. Trosbekjennelsen og fredshilsenen", am: "፫. ጸሎተ ሃይማኖትና አምኃ ሰላም" },
      punkter: [
        {
          tekst: {
            no: "Diakonen roper: «ፃኡ ንኡሰ ክርስቲያን» – «Gå ut, dere som ennå ikke er døpt!» I oldkirka var det mange voksne som lærte troen før dåpen. De var med til evangeliet, men gikk ut før nattverdbønnen. Kirka har beholdt dette ropet.",
            am: "ዲያቆኑ «ፃኡ ንኡሰ ክርስቲያን» (ያልተጠመቃችሁ ውጡ) ብሎ ያውጃል። በጥንቷ ቤተ ክርስቲያን ለጥምቀት የሚማሩ ብዙ ሰዎች እስከ ወንጌል ድረስ ቆይተው ከፍሬ ቅዳሴ በፊት ይወጡ ነበር። ቤተ ክርስቲያናችን ይህን አዋጅ እስከ ዛሬ ጠብቃዋለች።",
          },
          vers: ["Matt 7:6"],
        },
        {
          tekst: {
            no: "Presten ber for kirkas fred, for patriarken og biskopene og for menigheten. Så leser alle trosbekjennelsen (ጸሎተ ሃይማኖት) sammen. Den ble skrevet av kirkemøtene i Nikea (325) og Konstantinopel (381).",
            am: "ካህኑ ስለ ቤተ ክርስቲያን ሰላም፣ ስለ ፓትርያርኩና ስለ ጳጳሳት እንዲሁም ስለ ማኅበረ ምእመናን ይጸልያል። ከዚያም ሁሉም በአንድነት ጸሎተ ሃይማኖትን ይጸልያሉ። ጸሎተ ሃይማኖት በኒቅያ (325) እና በቍስጥንጥንያ (381) ጉባኤያት የተዘጋጀ ነው።",
          },
          vers: ["Rom 10:9-10", "1Tim 6:12"],
        },
        {
          tekst: {
            no: "Presten vasker hendene foran folket. Det betyr: Jeg er uskyldig hvis noen tar imot nattverden uten å ha forberedt seg. Hver av oss skal prøve seg selv.",
            am: "ካህኑ በሕዝቡ ፊት እጁን ይታጠባል። ይህም ሳይዘጋጅ ቍርባን ለሚቀበል ሰው ንጹሕ ነኝ ማለቱ ነው። እያንዳንዳችን ራሳችንን እንመርምር።",
          },
          vers: ["1Cor 11:28", "Ps 26:6"],
        },
        {
          tekst: {
            no: "Diakonen sier: «ተአምኁ በበይናቲክሙ በአምኃ ቅድሳት» – «Hils hverandre med en hellig hilsen.» Prestene hilser prestene, diakonene hilser diakonene, menn hilser menn og kvinner hilser kvinner. Vi bøyer hodet mot hverandre i alle retninger. Først blir vi forsonet med hverandre, så bærer vi fram offeret.",
            am: "ዲያቆኑ «ተአምኁ በበይናቲክሙ በአምኃ ቅድሳት» ይላል። ቀሳውስት ከቀሳውስት፣ ዲያቆናት ከዲያቆናት፣ ወንዶች ከወንዶች፣ ሴቶችም ከሴቶች ጋር እጅ ይነሳሳሉ፤ በአራቱ ማዕዘናት አንገታችንን ዘንበል አድርገን እንሳለማለን። አስቀድመን እንታረቃለን፤ ከዚያ መባችንን እናቀርባለን።",
          },
          vers: ["Matt 5:23-24", "Rom 16:16"],
        },
      ],
    },
    {
      id: "anafora",
      tittel: { no: "4. Nattverdbønnen (አኰቴተ ቍርባን) og innvielsen", am: "፬. ፍሬ ቅዳሴ – አኰቴተ ቍርባን" },
      ingress: {
        no: "Nå kommer hjertet i ቅዳሴ: takkebønnen som kalles anafora (ፍሬ ቅዳሴ). Diakonen roper ofte hva folket skal gjøre, og folket svarer.",
        am: "አሁን የቅዳሴው ልብ የሆነው ፍሬ ቅዳሴ (አኰቴተ ቍርባን) ይጀምራል። ዲያቆኑ ሕዝቡ ማድረግ ያለበትን ደጋግሞ ያውጃል፤ ሕዝቡም ይመልሳል።",
      },
      punkter: [
        {
          tekst: {
            no: "Presten sier: «Fred være med dere alle.» Folket svarer: «Og med din ånd.» Presten sier: «Takk vår Gud.» Folket svarer: «ርቱዕ ይደሉ» – «Det er rett og verdig.» Presten sier: «Løft opp hjertene!» Folket svarer: «ብነ ኀበ እግዚአብሔር አምላክነ» – «Vi har dem hos Herren vår Gud.»",
            am: "ካህኑ «ሰላም ለኵልክሙ» ሲል ሕዝቡ «ምስለ መንፈስከ» ይላሉ። «አምላካችንን አመስግኑ» ሲል «ርቱዕ ይደሉ» ይላሉ። «ልቡናችሁን ወደ ላይ አንሡ» ሲል «ብነ ኀበ እግዚአብሔር አምላክነ» (በአምላካችን በእግዚአብሔር ዘንድ አለን) ብለው ይመልሳሉ።",
          },
          vers: ["Col 3:1-2", "Lam 3:41"],
        },
        {
          tekst: {
            no: "Presten takker Gud for skapelsen og for at han sendte Sønnen sin. Så roper diakonen: «Dere som sitter, reis dere!» og «Se mot øst!» Presten forteller om de tusen ganger tusen engler som står for Gud. Diakonen sier: «Svar!» og hele folket synger englenes sang: «Hellig, hellig, hellig er Herren, hærskarenes Gud! Himmel og jord er fulle av din herlighet.»",
            am: "ካህኑ ስለ ፍጥረትና ልጁን ስለ ላከልን እግዚአብሔርን ያመሰግናል። ዲያቆኑም «እናንተ የተቀመጣችሁ ተነሡ»፣ «ወደ ምሥራቅ ተመልከቱ» ይላል። ካህኑ በእግዚአብሔር ፊት ስለሚቆሙት እልፍ አእላፋት መላእክት ይናገራል። ዲያቆኑ «አውሥኡ» (መልሱ) ሲል ሕዝቡ ሁሉ የሱራፌልን ዝማሬ «ቅዱስ ቅዱስ ቅዱስ …» ብለው ይዘምራሉ።",
          },
          vers: ["Isa 6:1-3", "Rev 4:8", "Dan 7:10"],
        },
        {
          tekst: {
            no: "Presten sier Jesu egne ord fra skjærtorsdag over brødet og begeret: «Dette er mitt legeme … Dette er mitt blod.» Han minnes Jesu død og oppstandelse. Så ber han Faderen sende Den hellige ånd over brødet og vinen, så de blir Kristi kropp og blod. Denne bønnen kalles ጽዋዔ መንፈስ ቅዱስ, påkallelsen av Den hellige ånd.",
            am: "ካህኑ ጌታችን በጸሎተ ሐሙስ የተናገረውን «ይህ ሥጋዬ ነው … ይህ ደሜ ነው» የሚለውን ቃል (ሠራዔ ቃል) በኅብስቱና በጽዋው ላይ ይናገራል። ሞቱንና ትንሣኤውን ያስባል። ከዚያም ኅብስቱና ወይኑ የክርስቶስ ሥጋና ደም ይሆኑ ዘንድ መንፈስ ቅዱስ እንዲወርድ አብን ይለምናል። ይህ ጸሎት ጽዋዔ መንፈስ ቅዱስ ይባላል።",
          },
          vers: ["Matt 26:26-28", "1Cor 11:23-26", "Luke 1:35"],
        },
        {
          tekst: {
            no: "Mens dette skjer, står vi med bøyd hode og er helt stille. Diakonen roper: «ስግዱ በፍርሃት» – «Tilbe Herren med frykt», og vi bøyer oss. Brødet og vinen er nå blitt Kristi sanne kropp og blod (les mer på siden om nattverden).",
            am: "ይህ ሲፈጸም አንገታችንን ደፍተን በጽሙና እንቆማለን። ዲያቆኑ «ስግዱ በፍርሃት» ሲል እንሰግዳለን። አሁን ኅብስቱና ወይኑ አማናዊ የክርስቶስ ሥጋና ደም ሆነዋል (በምሥጢረ ቍርባን ገጽ ላይ ተጨማሪ ታገኛላችሁ)።",
          },
          vers: ["Ps 2:11", "Ps 95:6"],
        },
        {
          tekst: {
            no: "Presten bryter brødet (ፈትቶ) og ber om at vi blir ett i Den hellige ånd. Så ber hele folket Herrens bønn, «Fader vår» (አቡነ ዘበሰማያት). Etterpå ber presten en bønn om tilgivelse for alle, levende og døde.",
            am: "ካህኑ ሥጋውን ይፈትታል፤ በመንፈስ ቅዱስ አንድ እንድንሆን ይጸልያል። ከዚያም ሕዝቡ ሁሉ ጌታ ያስተማረውን «አቡነ ዘበሰማያት» ይጸልያሉ። ቀጥሎ ካህኑ ስለ ሕያዋንና ስለ ሙታን የንስሐ ጸሎት ያደርሳል።",
          },
          vers: ["Matt 6:9-13", "1Cor 10:16-17"],
        },
      ],
    },
    {
      id: "nattverd",
      tittel: { no: "5. Nattverden og avslutningen", am: "፭. ቍርባንና ሥርዓተ ፍጻሜ" },
      punkter: [
        {
          tekst: {
            no: "Presten løfter Kristi kropp og roper: «ቅድሳት ለቅዱሳን» – «Det hellige til de hellige!» Folket svarer: «Én er den hellige Fader, én er den hellige Sønn, én er Den hellige ånd.» Ingen av oss er hellig av seg selv. Bare Gud er hellig, og han gjør oss hellige.",
            am: "ካህኑ ሥጋውን ከፍ አድርጎ «ቅድሳት ለቅዱሳን» (ቅዱስ ሥጋውና ክቡር ደሙ ለቅዱሳን ነው) ብሎ ያውጃል። ሕዝቡም «አሐዱ አብ ቅዱስ፥ አሐዱ ወልድ ቅዱስ፥ አሐዱ ውእቱ መንፈስ ቅዱስ» ብለው ይመልሳሉ። ከእኛ በራሱ ቅዱስ የሆነ የለም፤ ቅዱስ እግዚአብሔር ብቻ ነው፤ እርሱም ይቀድሰናል።",
          },
          vers: ["1Sam 2:2", "Heb 2:11"],
        },
        {
          tekst: {
            no: "Presten og folket roper sammen mange ganger: «እግዚኦ መሐረነ ክርስቶስ» – «Herre, forbarm deg over oss, Kristus.» Så tar prestene og diakonene imot, og deretter folket. Mens folket tar imot, synger diakonene og sangerne nattverdsangen (ዝማሬ).",
            am: "ካህኑና ሕዝቡ በአንድነት «እግዚኦ መሐረነ ክርስቶስ» እያሉ ደጋግመው ይጸልያሉ። ከዚያ ካህናቱና ዲያቆናቱ፣ ቀጥሎም ምእመናን ይቆርባሉ። ምእመናን በሚቆርቡበት ጊዜ ዝማሬ ይዘመራል።",
          },
          vers: ["Luke 18:13", "Ps 34:9"],
        },
        {
          tekst: {
            no: "Når prestene og diakonene kommer ut fra helligdommen med Kristi kropp og blod for å dele ut, bøyer folket seg til jorden. Dette kalles ድርገት. Det minner om kvinnene ved graven, som falt ned for den oppstandne Herren og holdt om føttene hans.",
            am: "ካህናቱና ዲያቆናቱ ሥጋውንና ደሙን ለማቀበል በኅብረት ከመቅደስ ወደ ቅድስት ሲወጡ ምእመናን ለሥጋሁ ወደሙ ክብር ይሰግዳሉ። ይህ ድርገት ይባላል። ከሙታን የተነሣውን ጌታ ባዩት ጊዜ እግሩን ይዘው የሰገዱለት የቅዱሳት አንስት ምሳሌ ነው።",
          },
          vers: ["Matt 28:9"],
        },
        {
          tekst: {
            no: "Etter nattverden takker vi Gud. Diakonen sier: «La oss takke Herren», og presten svarer med ordene fra Salmenes bok: «Min munn skal uttale Herrens pris.» Presten ber en bønn som kalles «Sjelens leder» (ኀዳፌ ነፍስ).",
            am: "ከቍርባን በኋላ እግዚአብሔርን እናመሰግናለን። ዲያቆኑ «እግዚአብሔርን እናመስግን» ሲል ካህኑ «አፌ የእግዚአብሔርን ምስጋና ይናገራል» በሚለው የዳዊት ቃል ይመልሳል። ከዚያም ካህኑ «ኀዳፌ ነፍስ» የሚባለውን ጸሎት ይጸልያል።",
          },
          vers: ["Ps 145:21", "Ps 103:1-2"],
        },
        {
          tekst: {
            no: "Diakonen sier: «Bøy hodene for Herren vår Gud!» (አድንኑ). Folket svarer: «Amen. Herren velsigne oss.» Presten velsigner folket med korset: «Herre, frels ditt folk og velsign din arv.» Til slutt sender diakonen folket hjem i fred, og presten velsigner hver enkelt.",
            am: "ዲያቆኑ «አድንኑ» (ለአምላካችን ለእግዚአብሔር ራሳችሁን ዝቅ አድርጉ) ሲል ሕዝቡ «አሜን፤ እግዚአብሔር ይባርከን» ይላሉ። ካህኑ በመስቀል «አቤቱ ሕዝብህን አድን፥ ርስትህንም ባርክ» እያለ ይባርካል። በመጨረሻ ዲያቆኑ «በሰላም ወደየቤታችሁ ሂዱ» ብሎ ያሰናብታል፤ ካህኑም እያንዳንዱን ይባርካል።",
          },
          vers: ["Ps 28:9", "Num 6:24-26"],
        },
      ],
    },
    {
      id: "anaforaene",
      tittel: { no: "De 14 anaforaene (ቅዳሴያት)", am: "፲፬ቱ ቅዳሴያት" },
      ingress: {
        no: "Forberedelsen og lesningene er de samme hver gang. Men selve nattverdbønnen (anaforaen) kan veksle. Kirka har 14 anaforaer i bruk, og presten velger den som passer til dagen.",
        am: "የዝግጅቱና የትምህርቱ ክፍል ሁልጊዜ አንድ ነው፤ ፍሬ ቅዳሴው ግን ይለዋወጣል። ቤተ ክርስቲያናችን ያሳተመቻቸውና የምትቀድስባቸው ፲፬ ቅዳሴያት አሏት፤ ሠራዒው ካህን ለዕለቱ የሚስማማውን ይመርጣል።",
      },
      punkter: [
        {
          tekst: {
            no: "De 14 heter: 1) ቅዳሴ ሐዋርያት (apostlenes), 2) ቅዳሴ እግዚእ (Herrens), 3) ቅዳሴ ዮሐንስ ወልደ ነጐድጓድ (Johannes, tordensønnens), 4) ቅዳሴ ማርያም (Marias), 5) ቅዳሴ ሠለስቱ ምእት (de 318 fedrene i Nikea), 6) ቅዳሴ አትናቴዎስ (Athanasius'), 7) ቅዳሴ ባስልዮስ (Basilius'), 8) ቅዳሴ ጎርጎርዮስ ዘኑሲስ (Gregor av Nyssa), 9) ቅዳሴ ኤጲፋንዮስ (Epifanius'), 10) ቅዳሴ ዮሐንስ አፈወርቅ (Johannes Krysostomos'), 11) ቅዳሴ ቄርሎስ (Kyrillos'), 12) ቅዳሴ ያዕቆብ ዘሥሩግ (Jakob av Serug), 13) ቅዳሴ ዲዮስቆሮስ (Dioskoros') og 14) ቅዳሴ ጎርጎርዮስ ካልዕ (den andre Gregor, «undergjøreren»).",
            am: "፲፬ቱ ቅዳሴያት፦ ፩) ቅዳሴ ሐዋርያት፣ ፪) ቅዳሴ እግዚእ፣ ፫) ቅዳሴ ዮሐንስ ወልደ ነጐድጓድ፣ ፬) ቅዳሴ ማርያም፣ ፭) ቅዳሴ ሠለስቱ ምእት (፫፻፲፰ቱ የኒቅያ ሊቃውንት)፣ ፮) ቅዳሴ አትናቴዎስ፣ ፯) ቅዳሴ ባስልዮስ፣ ፰) ቅዳሴ ጎርጎርዮስ ዘኑሲስ፣ ፱) ቅዳሴ ኤጲፋንዮስ፣ ፲) ቅዳሴ ዮሐንስ አፈወርቅ፣ ፲፩) ቅዳሴ ቄርሎስ፣ ፲፪) ቅዳሴ ያዕቆብ ዘሥሩግ፣ ፲፫) ቅዳሴ ዲዮስቆሮስ እና ፲፬) ቅዳሴ ጎርጎርዮስ ካልዕ (ገባሬ መንክራት) ናቸው።",
          },
        },
        {
          tekst: {
            no: "ቅዳሴ ሐዋርያት er grunnmønsteret som de andre bygger på. Kirka lærer at kjernen i den kommer fra apostlene selv. Den brukes blant annet på apostlenes minnedager.",
            am: "ቅዳሴ ሐዋርያት ሌሎቹ ቅዳሴያት የሚመሠረቱበት መሠረታዊ ቅዳሴ ነው። ዋናው ክፍሉ በሐዋርያት እንደ ተጻፈ ቤተ ክርስቲያን ታስተምራለች። በሐዋርያት መታሰቢያ በዓላትም ይቀደሳል።",
          },
          vers: ["Acts 1:3", "Eph 2:20"],
        },
        {
          tekst: {
            no: "ቅዳሴ ማርያም ble skrevet av አባ ሕርያቆስ, biskop av Behnesa i Egypt. Den er full av lovsang til Gud for Marias skyld og brukes på Marias høytider. ቅዳሴ እግዚእ brukes på Herrens høytider.",
            am: "ቅዳሴ ማርያምን የደረሰው የብሕንሳው ኤጲስ ቆጶስ አባ ሕርያቆስ ነው። በእመቤታችን በዓላት ይቀደሳል። ቅዳሴ እግዚእ ደግሞ በጌታችን በዓላት ይቀደሳል።",
          },
          vers: ["Luke 1:46-49"],
        },
        {
          tekst: {
            no: "Noen anaforaer hører til bestemte tider: ቅዳሴ ጎርጎርዮስ ዘኑሲስ brukes i ሆሣዕና-uka (palmesøndag), ቅዳሴ ጎርጎርዮስ ካልዕ i julen, og ቅዳሴ ያዕቆብ ዘሥሩግ i ጳጉሜ, de siste dagene i året. ቅዳሴ ያዕቆብ ዘሥሩግ taler mye om verdens ende og Kristi gjenkomst, og ጳጉሜ minner oss om at verden en dag skal ende.",
            am: "አንዳንዶቹ የተወሰኑ ጊዜያት አሏቸው፤ ቅዳሴ ጎርጎርዮስ ዘኑሲስ በሆሣዕና ሳምንት፣ ቅዳሴ ጎርጎርዮስ ካልዕ በበዓለ ልደት፣ ቅዳሴ ያዕቆብ ዘሥሩግ በዕለታተ ጳጉሜ ይቀደሳሉ። ቅዳሴ ያዕቆብ ዘሥሩግ ስለ ዓለም ፍጻሜና ስለ ዳግም ምጽአት በሰፊው ይናገራል፤ ጳጉሜም የዓመቱ መጨረሻ እንደ ሆነች የዓለም ፍጻሜ ይታሰብባታል።",
          },
          vers: ["John 12:12-13", "Matt 24:30-31"],
        },
        {
          tekst: {
            no: "Hver anafora har sine egne ord, men alle forteller det samme: at Gud skapte verden, at Sønnen ble menneske, døde og stod opp, og at han gav oss sin kropp og sitt blod. Det er derfor ikke 14 forskjellige troer, men én tro sunget på 14 måter.",
            am: "እያንዳንዱ ቅዳሴ የራሱ ቃላት አሉት፤ ሁሉም ግን አንድ ነገር ይናገራሉ፤ እግዚአብሔር ዓለምን መፍጠሩን፣ ወልድ ሰው መሆኑን፣ መሞቱንና መነሣቱን፣ ሥጋውንና ደሙንም መስጠቱን። ስለዚህ ፲፬ ልዩ ልዩ ሃይማኖቶች አይደሉም፤ በ፲፬ መንገድ የሚዘመር አንድ ሃይማኖት ነው እንጂ።",
          },
          vers: ["Eph 4:4-6"],
        },
      ],
    },
    {
      id: "vi",
      tittel: { no: "Når vi står, bøyer oss og svarer", am: "መቼ እንቆማለን፣ እንሰግዳለን፣ እንመልሳለን?" },
      punkter: [
        {
          tekst: {
            no: "Vi står det meste av tiden, slik som tjenerne i Herrens hus som står om natten. Den som er syk eller gammel, kan støtte seg på en bønnestav (መቋሚያ) eller sitte. Når diakonen sier «ተንሥኡ ለጸሎት» – «Stå opp til bønn!» – svarer vi «እግዚኦ መሐረነ ክርስቶስ» – «Herre, forbarm deg over oss, Kristus.»",
            am: "ብዙውን ጊዜ በእግዚአብሔር ቤት በሌሊት እንደሚቆሙ አገልጋዮች ቆመን እንጸልያለን። የታመመ ወይም አረጋዊ በመቋሚያ ሊደገፍ ወይም ሊቀመጥ ይችላል። ዲያቆኑ «ተንሥኡ ለጸሎት» ሲል «እግዚኦ መሐረነ ክርስቶስ» ብለን እንመልሳለን።",
          },
          vers: ["Ps 134:1-2", "Mark 11:25"],
        },
        {
          tekst: {
            no: "Vi står alltid når evangeliet leses, når vi synger «Hellig, hellig, hellig», og ved «ቅድሳት ለቅዱሳን». Vi bøyer hodet når diakonen sier «አድንኑ» og når presten velsigner. Vi bøyer oss ned når diakonen sier «ስግዱ በፍርሃት».",
            am: "ወንጌል ሲነበብ፣ «ቅዱስ ቅዱስ ቅዱስ» ሲዘመርና «ቅድሳት ለቅዱሳን» ሲባል ሁልጊዜ እንቆማለን። ዲያቆኑ «አድንኑ» ሲልና ካህኑ ሲባርክ ራሳችንን ዝቅ እናደርጋለን። «ስግዱ በፍርሃት» ሲባል እንሰግዳለን።",
          },
          vers: ["Ps 95:6", "Rev 7:11-12"],
        },
        {
          tekst: {
            no: "Vi svarer høyt og tydelig. Kirkas svar er korte, så alle kan lære dem: «Amen», «Og med din ånd», «Det er rett og verdig», «Herre, forbarm deg». Paulus sier at folket skal kunne si «amen» til takksigelsen.",
            am: "ጮክ ብለንና ግልጽ አድርገን እንመልሳለን። የቤተ ክርስቲያን መልሶች አጫጭር ስለ ሆኑ ሁሉም ሊማራቸው ይችላል፤ «አሜን»፣ «ምስለ መንፈስከ»፣ «ርቱዕ ይደሉ»፣ «እግዚኦ ተሣሀለነ»። ቅዱስ ጳውሎስ ምእመናን ለምስጋናው «አሜን» ሊሉ እንደሚገባ ይናገራል።",
          },
          vers: ["1Cor 14:16", "Ps 106:48"],
        },
        {
          tekst: {
            no: "Vi kommer før ቅዳሴ begynner, er stille, ser ikke rundt oss og snakker ikke. Mer om hvordan vi oppfører oss i kirka, står på siden «Slik er vi i kirka».",
            am: "ቅዳሴ ሳይጀመር እንገኛለን፤ በጽሙና እንቆማለን፤ ወዲያና ወዲህ አንመለከትም፤ አንነጋገርም። በቤተ ክርስቲያን ስለምንኖረው ሥርዓት «ሥርዓተ ቤተ ክርስቲያን» በሚለው ገጽ ላይ ታገኛላችሁ።",
          },
          vers: ["Eccl 5:1", "1Cor 14:40"],
        },
      ],
    },
    {
      id: "sprak-tider",
      tittel: { no: "Språk, tider og regler", am: "ቋንቋ፣ ሰዓትና ሥርዓት" },
      punkter: [
        {
          tekst: {
            no: "ቅዳሴ holdes på ge'ez (ግእዝ), kirkas gamle språk. Den trykte boka (መጽሐፈ ቅዳሴ) har ge'ez og amharisk side om side, og i dag leses lesningene og noen deler på amharisk. Paulus sier at vi skal be og synge med forstand. Derfor er det godt å lære hva ordene betyr.",
            am: "ቅዳሴ በቤተ ክርስቲያን ጥንታዊ ቋንቋ በግእዝ ይቀደሳል። የታተመው መጽሐፈ ቅዳሴ ግእዙንና አማርኛውን ጎን ለጎን ይዟል፤ ዛሬ ንባባቱና አንዳንድ ክፍሎች በአማርኛ ይነበባሉ። ቅዱስ ጳውሎስ «በመንፈስ እጸልያለሁ በአእምሮም ደግሞ እጸልያለሁ» ይላልና የቃላቱን ትርጉም መማር መልካም ነው።",
          },
          vers: ["1Cor 14:15", "Acts 2:8-11"],
        },
        {
          tekst: {
            no: "På søndager begynner ቅዳሴ vanligvis tidlig om morgenen. I fastetidene begynner den først rundt midt på dagen, og vi faster til ቅዳሴ er slutt. Påskenatt holdes ቅዳሴ midt på natta. I store kirker i Etiopia er det ቅዳሴ hver dag.",
            am: "በእሑድ ቅዳሴ ብዙውን ጊዜ በማለዳ ይጀመራል። በአጽዋማት ወራት ግን ቅዳሴው ቀትር ላይ ወይም ከቀትር በኋላ ይገባል፤ እስከ ቅዳሴ ፍጻሜም እንጾማለን። በትንሣኤ ሌሊት በመንፈቀ ሌሊት ይቀደሳል። በኢትዮጵያ ታላላቅ አብያተ ክርስቲያናት ቅዳሴ በየዕለቱ ይቀደሳል።",
          },
          vers: ["Mark 16:2", "Acts 20:7"],
        },
        {
          tekst: {
            no: "Det holdes bare én ቅዳሴ på samme alter (ታቦት) samme dag. Har kirka flere ታቦታት, kan det holdes ቅዳሴ på hvert av dem. Prestene og diakonene faster før de tjener i ቅዳሴ.",
            am: "በአንድ ታቦት ላይ በአንድ ቀን ከአንድ ቅዳሴ በላይ አይቀደስም። በቤተ ክርስቲያኑ ብዙ ታቦታት ካሉ ግን በየታቦቱ መቀደስ ይቻላል። ካህናቱና ዲያቆናቱ ከቅዳሴ በፊት ይጾማሉ።",
          },
          vers: ["Heb 10:12-14"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "Når presten kaller på Den hellige ånd og bærer fram offeret, «står englene sammen med presten. Hele området rundt alteret og hele helligdommen fylles av himmelske hærskarer til ære for ham som ligger der.»",
        am: "ካህኑ መንፈስ ቅዱስን እየጠየቀ መሥዋዕቱን በሚያቀርብበት ሰዓት «መላእክት ከካህኑ ጋር ይቆማሉ፤ መንበሩ አካባቢ ያለው ቦታና መቅደሱ በሙሉ [ለመሥዋዕትነት በቀረበው] ክብር በሰማያውያን ኃይላት ይመላል።»",
      },
      kilde: "ዮሐንስ አፈወርቅ: Om prestedømmet (ስለ ክህነት) – sitert i ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን, kap. 1",
    },
    {
      navn: { no: "Hellige Kyrillos av Jerusalem", am: "ቅዱስ ቄርሎስ ዘኢየሩሳሌም" },
      tekst: {
        no: "Han forklarte de nydøpte hvordan ቅዳሴ foregår: Biskopen sier «Løft opp hjertene», og folket svarer «Vi har dem hos Herren». Vi synger serafenes sang, ber Gud sende Den hellige ånd over brødet og vinen, ber for kirka og for de døde og ber «Fader vår». Når biskopen roper «Det hellige til de hellige», svarer folket: «Én er hellig, én er Herre, Jesus Kristus.» Om fredshilsenen sa han: Den er forsoning, og derfor er den hellig.",
        am: "ለአዲስ ተጠማቂዎች የቅዳሴውን ሥርዓት እንዲህ አስተማረ፤ ጳጳሱ «ልባችሁን ከፍ አድርጉ» ሲል «ከእግዚአብሔር ጋር አሉ» ብለው ይመልሱለታል። የሱራፌልን ዝማሬ እንዘምራለን፤ ኅብስቱንና ወይኑን የጌታ ሥጋና ደም ያደርግ ዘንድ መንፈስ ቅዱስን እንዲልክ እግዚአብሔር አብን እንለምናለን፤ ስለ ቤተ ክርስቲያንና ስላረፉት እንጸልያለን፤ ጌታ ያስተማረውን ጸሎት እንጸልያለን። ጳጳሱ «ቅድሳት ለቅዱሳን» ሲል «ቅዱስ፥ አንዱ ጌታ ኢየሱስ ክርስቶስ ነው» ብለው ይመልሱለታል። ስለ አምኃ ሰላምም «እርቅ ነውና ቅዱስ ነው» አለ።",
      },
      kilde: "ቄርሎስ ዘኢየሩሳሌም: ትምህርተ ንኡሰ ክርስቲያን (Mystagogiske katekeser) 5 – sitert i አኰቴተ ቍርባን, kap. 2 og 4",
    },
    {
      navn: { no: "Hellige Ignatios av Antiokia", am: "ቅዱስ አግናጥዮስ ዘአንጾኪያ" },
      tekst: {
        no: "Ignatios, en elev av apostelen Johannes, kalte nattverden i ቅዳሴ «medisinen» som gjør at vi slipper unna den evige døden og lever for alltid i Kristus. Derfor roper diakonen i ቅዳሴ እግዚእ: «La oss komme fram til livets medisin.»",
        am: "የቅዱስ ዮሐንስ ወንጌላዊ ደቀ መዝሙር ቅዱስ አግናጥዮስ ቅዱስ ቍርባንን ከዘላለማዊ ሞት አምልጠን በክርስቶስ ለዘላለም ሕያዋን ሆነን የምንኖርበት መድኃኒት ብሎታል። ስለዚህ በቅዳሴ እግዚእ ዲያቆኑ «ወደ ሕይወት መድኃኒት እንቅረብ» ብሎ ያውጃል።",
      },
      kilde: "Ignatios: Brevet til efeserne 20 – sitert i አኰቴተ ቍርባን, kap. 1",
    },
    {
      navn: { no: "Abba Giyorgis av Gasicha", am: "አባ ጊዮርጊስ ዘጋስጫ" },
      tekst: {
        no: "Den etiopiske kirkelæreren skrev at brødet og vinen blir Kristi kropp og blod ved at Den hellige ånd kommer ned, når presten roper og ber Gud sende Den hellige ånd over brødet og begeret.",
        am: "ኢትዮጵያዊው ሊቅ «ኅብስትኒ ወጽዋዓ ወይን ይክል ከዊነ ሥጋሁ ወደሙ ለክርስቶስ በርደተ መንፈስ ቅዱስ ሶበ ይጸርሕ ካህን» ብሏል፤ ይህም ካህኑ መንፈስ ቅዱስ በኅብስቱና በጽዋው ላይ እንዲወርድ ሲጮኽ ኅብስቱና ወይኑ የክርስቶስ ሥጋና ደም ይሆናሉ ማለት ነው።",
      },
      kilde: "አባ ጊዮርጊስ ዘጋስጫ – sitert i ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን, kap. 1 (note 54)",
    },
  ],
  ord: [
    { ord: "ቅዳሴ", forklaring: { no: "den hellige liturgien; «helliggjøring, lovsang»", am: "ቅድስና፣ ምስጋና" } },
    { ord: "ሥርዓተ ቅዳሴ", forklaring: { no: "den faste delen av ቅዳሴ (forberedelse og lesninger)", am: "የቅዳሴው የዝግጅትና የትምህርት ክፍል" } },
    { ord: "ፍሬ ቅዳሴ / አኰቴተ ቍርባን", forklaring: { no: "anaforaen, selve nattverdbønnen", am: "የቅዳሴው ዋና ክፍል" } },
    { ord: "ቅዳሴያት", forklaring: { no: "anaforaene (14 i bruk)", am: "፲፬ቱ ቅዳሴያት" } },
    { ord: "ልኡካን", forklaring: { no: "de fem som tjener i ቅዳሴ", am: "ሁለት ካህናትና ሦስት ዲያቆናት" } },
    { ord: "ሠራዒ ካህን / ንፍቅ ካህን", forklaring: { no: "presten som leder / hjelpepresten", am: "ቅዳሴውን የሚመራው ካህን / ረዳቱ" } },
    { ord: "ሠራዒ ዲያቆን / ንፍቅ ዲያቆን", forklaring: { no: "hoveddiakonen / den andre diakonen", am: "ዋናው ዲያቆን / ረዳቱ ዲያቆን" } },
    { ord: "ግጻዌ", forklaring: { no: "kirkas leseliste for hver dag", am: "የዕለቱን ንባባት የሚወስን መጽሐፍ" } },
    { ord: "ምስባክ", forklaring: { no: "salmeverset som synges før evangeliet", am: "ከወንጌል በፊት የሚዜም የዳዊት መዝሙር" } },
    { ord: "ጸሎተ ሃይማኖት", forklaring: { no: "trosbekjennelsen", am: "የሃይማኖት መግለጫ" } },
    { ord: "ቅድሳት ለቅዱሳን", forklaring: { no: "«Det hellige til de hellige»", am: "ቅዱስ ሥጋውና ክቡር ደሙ ለቅዱሳን ነው" } },
    { ord: "ተንሥኡ ለጸሎት", forklaring: { no: "«Stå opp til bønn!»", am: "ለጸሎት ተነሡ" } },
    { ord: "ግእዝ", forklaring: { no: "ge'ez, kirkas gamle språk", am: "የቤተ ክርስቲያን ጥንታዊ ቋንቋ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvilke tre deler har ቅዳሴ?", am: "ቅዳሴ ስንት ክፍሎች አሉት?" },
      svar: {
        no: "Forberedelsen, lesningene (undervisningen) og ፍሬ ቅዳሴ – selve nattverdbønnen med innvielsen og nattverden.",
        am: "ሦስት፤ የዝግጅት ክፍል፣ የትምህርት ክፍልና ፍሬ ቅዳሴ (አኰቴተ ቍርባን)።",
      },
    },
    {
      sporsmal: { no: "Hvor mange tjenere trengs, og hvem er de et bilde på?", am: "ስንት ልኡካን ያስፈልጋሉ? የማን ምሳሌዎች ናቸው?" },
      svar: {
        no: "Fem: to prester (Josef og Nikodemus) og tre diakoner. Hoveddiakonen er bilde på Stefanus, og diakonen med lyset er bilde på Johannes døperen. Der det er få tjenere, kan én prest og én diakon holde ቅዳሴ.",
        am: "አምስት፤ ሁለት ካህናት (የዮሴፍና የኒቆዲሞስ ምሳሌ) እና ሦስት ዲያቆናት። ሠራዒው ዲያቆን የቅዱስ እስጢፋኖስ፣ ንፍቁ ዲያቆን የቅዱስ ዮሐንስ ምሳሌ ነው። አገልጋዮች በሌሉበት በአንድ ካህንና በአንድ ዲያቆን ይቀደሳል።",
      },
    },
    {
      sporsmal: { no: "Hvilke fem lesninger hører vi?", am: "በቅዳሴ የሚነበቡት አምስቱ ንባባት የትኞቹ ናቸው?" },
      svar: {
        no: "Et Paulus-brev, et brev fra en annen apostel, Apostlenes gjerninger, et salmevers (ምስባክ) og evangeliet.",
        am: "የጳውሎስ መልእክት፣ የሌሎች ሐዋርያት መልእክት፣ ግብረ ሐዋርያት፣ ምስባክና ወንጌል።",
      },
    },
    {
      sporsmal: { no: "Hva svarer vi når presten sier «ቅድሳት ለቅዱሳን»?", am: "ካህኑ «ቅድሳት ለቅዱሳን» ሲል ምን እንመልሳለን?" },
      svar: {
        no: "«አሐዱ አብ ቅዱስ, አሐዱ ወልድ ቅዱስ, አሐዱ ውእቱ መንፈስ ቅዱስ» – én er den hellige Fader, én er den hellige Sønn, én er Den hellige ånd.",
        am: "«አሐዱ አብ ቅዱስ፥ አሐዱ ወልድ ቅዱስ፥ አሐዱ ውእቱ መንፈስ ቅዱስ» እንላለን።",
      },
    },
    {
      sporsmal: { no: "Hvor mange anaforaer er i bruk? Nevn tre.", am: "ስንት ቅዳሴያት አሉ? ሦስቱን ጥቀስ።" },
      svar: {
        no: "14. For eksempel ቅዳሴ ሐዋርያት, ቅዳሴ ማርያም og ቅዳሴ እግዚእ.",
        am: "፲፬። ለምሳሌ ቅዳሴ ሐዋርያት፣ ቅዳሴ ማርያምና ቅዳሴ እግዚእ።",
      },
    },
    {
      sporsmal: { no: "Hvilken sang synger vi sammen med englene?", am: "ከመላእክት ጋር የምንዘምረው ምስጋና የትኛው ነው?" },
      svar: {
        no: "Serafenes sang: «Hellig, hellig, hellig er Herren, hærskarenes Gud! Himmel og jord er fulle av din herlighet» (Jes 6,3).",
        am: "የሱራፌልን ምስጋና «ቅዱስ ቅዱስ ቅዱስ» (ኢሳ 6፥3)።",
      },
    },
  ],
  kilder: [
    { navn: "ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን (ethiopianorthodox.org)", url: "https://www.ethiopianorthodox.org/amharic/yezemametsheft/kesis%20meberatu/Akoteta_Qurban.pdf" },
    { navn: "Marcos Daoud: The Liturgy of the Ethiopian Church (med innledning av erkebiskop Yesehaq)", url: "http://www.eotc.faithweb.com/liturgy.htm" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Church Music (anaforaene)", url: "https://www.ethiopianorthodox.org/churchmusic/ecclesia.html" },
    { navn: "Mahibere Kidusan: ሥርዓተ አምልኮ, del 1", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae/" },
    { navn: "Beteamanuel Ethiopian Orthodox Church: ቅዳሴ (listen over ቅዳሴያት)", url: "https://beteamanuel.org/kidase/" },
  ],
  utkast: true,
};
