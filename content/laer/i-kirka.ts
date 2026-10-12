import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning:
// Mahibere Kidusan (eotcmk.org): «ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!» (etter Liqe Kahenat Kinfe Gebriel Altaye,
// «ሥርዓተ ቤተ ክርስቲያን», 1983 E.C., s. 23–28, ፍትሐ ነገሥት og ዮሐንስ አፈወርቅ), «የምእመናን ድርሻ በቤተ ክርስቲያን» del 1 og 2
// (etter samme bok, ፍትሐ ነገሥት kap. 12, ድርሳነ ሳዊሮስ og «ፍትሐ ነገሥት ምን አለ?»), barnesidene «ጸሎት በቤተ ክርስቲያን» og «ማማተብ»,
// og «ሥርዓተ አምልኮ» (ምጽዋት, etter ፍትሐ ነገሥት kap. 16);
// Sunday School-læreboka «ሥርዓተ ቤተ ክርስቲያን ሁለተኛ ክፍል» (søndagsskoleavdelingen, 2015 E.C.) – hilsenen til kirka, ስግደት, ነጠላ;
// astemhro.com: «ሴቶች በቤተ ክርስቲያን (ክፍል ፬)» – hvorfor kvinner ikke går inn under mens og etter fødsel;
// ethiopianorthodox.org: «The Sacramental» (korsets tegn) og Marcos Daoud: The Liturgy of the Ethiopian Church
// (diakonens rop før evangeliet, regelen om stillhet og om ikke å gå ut før velsignelsen);
// MK-US Next Generation (Parenthood): «Raising Children in Ethiopian Orthodox Values».
// Usikkert: Kildene sier at menn står i nord og kvinner i sør (MK, etter ፍትሐ ነገሥት). Når man ser mot øst, er nord til venstre
// og sør til høyre. I noen menigheter i utlandet kan plasseringen være annerledes; presten bør bekrefte hva som gjelder her.
// Usikkert: Kildene sier at kvinner under mens ikke går inn i kirka «inntil sju dager», og at de kan be i kirkegården (ቅጽር)
// og «utenfor». De nevner ikke ዐውደ ምሕረት med navn; vi har skrevet «ute i kirkegården, for eksempel på ዐውደ ምሕረት».
// Usikkert: MK (del 2) sier at man etter «አሐዱ አብ ቅዱስ» ikke en gang skal gå inn i kirkegården. Skikken kan praktiseres
// mildere i menigheter i utlandet, så vi har skrevet at vi skal komme før ቅዳሴ begynner.
// Usikkert: Dagene uten full ስግደት er tatt fra MKs barneside (lørdag, søndag, de 50 dagene etter påske, den 29., 21. og 12.
// i måneden og etter nattverd). Andre kilder nevner også Herrens store høytider (unntatt langfredag).
export const iKirka: Tema = {
  slug: "i-kirka",
  del: "kirkebygget",
  tittel: { no: "Slik er vi i kirka", am: "ሥርዓተ ቤተ ክርስቲያን" },
  undertittel: { no: "Hvordan vi går inn, ber og oppfører oss i Guds hus", am: "በእግዚአብሔር ቤት እንዴት እንገባለን፣ እንጸልያለን፣ እንኖራለን" },
  bilde: "georg",
  ingress: {
    no:
      "Kirka er Guds hus, og der står vi foran himmelens Konge sammen med englene. Derfor har kirka gitt oss en ordning (ሥርዓት) for hvordan vi kommer, hilser, ber og står. Ordningen gjør at mange mennesker kan be sammen med ett hjerte. Paulus sier: «La alt skje sømmelig og med orden!»",
    am:
      "ቤተ ክርስቲያን የእግዚአብሔር ቤት ናት፤ በእርሷ ከመላእክት ጋር በሰማያዊው ንጉሥ ፊት እንቆማለን። ስለዚህ ቤተ ክርስቲያን እንዴት እንደምንመጣ፣ እንደምንሳለም፣ እንደምንጸልይና እንደምንቆም ሥርዓት ሠርታልናለች። በሥርዓቱም ብዙ ምእመናን በአንድ ልብ ይጸልያሉ። ቅዱስ ጳውሎስ «ሁሉ በአገባብና በሥርዓት ይሁን» ይላል።",
  },
  hovedvers: "Eccl 5:1",
  avsnitt: [
    {
      id: "for",
      tittel: { no: "Før vi går til kirka", am: "ወደ ቤተ ክርስቲያን ከመሄዳችን በፊት" },
      punkter: [
        {
          tekst: {
            no: "Vi gleder oss til å gå til Guds hus. David sa: «Jeg gleder mig ved dem som sier til mig: Vi vil gå til Herrens hus.» Kirkas fedre lærer at vi bør gå til kirka morgen og kveld, og særlig på lørdag, søndag og høytidene.",
            am: "ወደ እግዚአብሔር ቤት ለመሄድ ደስ ይለናል። ዳዊት «ወደ እግዚአብሔር ቤት እንሄድ ባሉኝ ጊዜ ደስ አለኝ» አለ። አባቶች በነግህና በሠርክ፣ ይልቁንም በሁለቱ ሰንበታትና በበዓላት ወደ ቤተ ክርስቲያን እንድንሄድ ያስተምራሉ።",
          },
          vers: ["Ps 122:1", "Ps 5:4"],
        },
        {
          tekst: {
            no: "Vi forbereder hjertet. Har vi såret noen, ber vi om tilgivelse. Er noen sinte på oss, prøver vi å bli forsonet først. Har vi tatt noe som ikke er vårt, gir vi det tilbake.",
            am: "ልቡናችንን እናዘጋጃለን። ያስቀየምነውን ይቅርታ እንጠይቃለን፤ የተቀየምነውን ይቅር እንላለን፤ የሰውን ገንዘብ ወስደን ከሆነ ለባለቤቱ እንመልሳለን።",
          },
          vers: ["Matt 5:23-24", "Mark 11:25"],
        },
        {
          tekst: {
            no: "Vi vasker oss og tar på rene, hvite klær og ነጠላ. Vi tar gjerne med en liten gave: røkelse, et lys (ጧፍ) eller noe annet etter evne.",
            am: "ታጥበን ንጹሕ ነጭ ልብስና ነጠላ እንለብሳለን። እንደ አቅማችን ዕጣን፣ ጧፍ ወይም ሌላ መባዕ ይዘን እንሄዳለን።",
          },
          vers: ["Exod 25:2", "Eccl 9:8"],
        },
        {
          tekst: {
            no: "Ingen går til kirka beruset. Gud sa til Aron at prestene ikke skulle drikke vin eller sterk drikk når de gikk inn i sammenkomstens telt.",
            am: "ሰክሮ ወደ ቤተ ክርስቲያን መግባት ክልክል ነው። እግዚአብሔር አሮንን «ወደ መገናኛው ድንኳን ስትገቡ የወይን ጠጅና የሚያሰክርን ነገር ሁሉ አትጠጡ» አለው።",
          },
          vers: ["Lev 10:9"],
        },
      ],
    },
    {
      id: "skoene",
      tittel: { no: "Vi tar av oss skoene", am: "ጫማችንን እናወልቃለን" },
      punkter: [
        {
          tekst: {
            no: "Da Moses kom til den brennende busken, sa Gud: «Dra dine sko av dine føtter! For det sted du står på, er hellig jord.» Englenes høvding sa det samme til Josva. Derfor tar vi av oss skoene før vi går inn i kirka.",
            am: "ሙሴ ወደሚነድደው ቍጥቋጦ በቀረበ ጊዜ እግዚአብሔር «አንተ የቆምህባት ስፍራ የተቀደሰች መሬት ናትና ጫማህን ከእግርህ አውጣ» አለው። የእግዚአብሔር ሠራዊት አለቃም ኢያሱን እንዲሁ አለው። ስለዚህ ወደ ቤተ ክርስቲያን ስንገባ ጫማችንን እናወልቃለን።",
          },
          vers: ["Exod 3:5", "Josh 5:15"],
        },
        {
          tekst: {
            no: "Kirka er hellig fordi ታቦቱ er der, fordi Kristi kropp og blod bæres fram der, og fordi englene lovsynger der.",
            am: "ቤተ ክርስቲያን የተቀደሰች ናት፤ ታቦተ ሕጉ ያለባት፣ መሥዋዕቱ የሚሠዋባት፣ ቃለ እግዚአብሔር የሚነገርባትና ቅዱሳን መላእክት የሚዘምሩባት ናትና።",
          },
        },
        {
          tekst: {
            no: "Vi tar heller ikke med mat eller drikke inn i kirka. Det eneste som spises og drikkes der, er Kristi kropp og blod.",
            am: "ምግብና መጠጥ ይዘን ወደ ቤተ መቅደስ አንገባም፤ በቤተ መቅደስ የሚበላውና የሚጠጣው የክርስቶስ ቅዱስ ሥጋውና ክቡር ደሙ ብቻ ነውና።",
          },
        },
      ],
    },
    {
      id: "hilse",
      tittel: { no: "Vi hilser kirka (ቤተ ክርስቲያን መሳለም)", am: "ቤተ ክርስቲያን መሳለም" },
      punkter: [
        {
          tekst: {
            no: "Når vi kommer til porten i kirkegården, gjør vi korsets tegn i Faderens, Sønnens og Den hellige ånds navn. Vi bøyer oss og kysser porten eller døra. Kirka lærer at vi bør bøye oss minst tre ganger.",
            am: "ወደ ቅጽረ ቤተ ክርስቲያኑ በር ስንደርስ በአብ በወልድ በመንፈስ ቅዱስ ስም እናማትባለን፤ ሰግደን ደጃፉን እንሳለማለን። ወደ ቤተ ክርስቲያን ስንገባ ቢያንስ ሦስት ጊዜ እንሰግዳለን።",
          },
          vers: ["Ps 5:8", "Ps 138:2"],
        },
        {
          tekst: {
            no: "Når vi hilser kirka, kan vi si: «ሰላም ለኪ ቅድስት ቤተ ክርስቲያን አምሳለ ኢየሩሳሌም ሰማያዊት ማኅደረ መለኮት» – «Fred være med deg, hellige kirke, bilde på det himmelske Jerusalem, Guds bolig.»",
            am: "ቤተ ክርስቲያንን ስንሳለም «ሰላም ለኪ ቅድስት ቤተ ክርስቲያን አምሳለ ኢየሩሳሌም ሰማያዊት ማኅደረ መለኮት» እንላለን፤ ትርጉሙም «የመለኮት ማደሪያ፣ የሰማያዊት ኢየሩሳሌም አምሳያ የሆንሽ ቅድስት ቤተ ክርስቲያን ሰላም እልሻለሁ» ማለት ነው።",
          },
        },
        {
          tekst: {
            no: "Mange går innom kirka morgen og kveld bare for å hilse den, også når det ikke er gudstjeneste. Salomo sier: «Salig er det menneske … som våker ved mine dører dag efter dag.»",
            am: "ብዙ ምእመናን አገልግሎት በሌለበት ቀን እንኳ ጠዋትና ማታ ቤተ ክርስቲያንን ይሳለማሉ። ጠቢቡ ሰሎሞን «ዕለት ዕለት በቤቴ መግቢያ የሚተጋ … ምስጉን ነው» ይላል።",
          },
          vers: ["Prov 8:34"],
        },
        {
          tekst: {
            no: "Inne i kirka bøyer vi oss for ikonene og kysser dem, og vi går bort til presten og kysser korset hans.",
            am: "ወደ ውስጥ ስንገባ ለቅዱሳት ሥዕላት እንሰግዳለን፤ እንሳለማቸዋለን፤ ወደ ካህኑም ቀርበን መስቀል እንሳለማለን።",
          },
        },
      ],
    },
    {
      id: "korstegn",
      tittel: { no: "Korsets tegn (ማማተብ)", am: "ማማተብ (ትእምርተ መስቀል)" },
      punkter: [
        {
          tekst: {
            no: "Vi legger fingrene på høyre hånd i kors, slik at de danner et lite kors. Så fører vi hånden fra pannen ned til brystet, og fra venstre skulder over til høyre skulder. Vi gjør det rolig, ikke fort og slurvete.",
            am: "የቀኝ እጃችንን ጣቶች መስቀለኛ አድርገን (የ «ተ» ምልክት) ከግንባራችን ወደ ደረታችን፣ ከግራ ትከሻችን ወደ ቀኝ ትከሻችን እናማትባለን። ሳንፈጥንና እጃችንን ሳናወራጭ ረጋ ብለን እናማትባለን።",
          },
        },
        {
          tekst: {
            no: "Fra pannen ned til brystet minner oss om at Kristus kom ned fra himmelen og ble født av jomfru Maria. Fra venstre til høyre minner oss om at han førte sjelene fra dødsriket (ሲኦል) inn i paradiset.",
            am: "ከግንባር ወደ ደረት ማድረጋችን ጌታችን ከሰማየ ሰማያት ወርዶ ከቅድስት ድንግል ማርያም መወለዱን ያስረዳናል። ከግራ ወደ ቀኝ ማድረጋችን ደግሞ በሲኦል የነበሩትን ነፍሳት ወደ ገነት ያስገባበት ምሳሌ ነው።",
          },
          vers: ["John 3:13", "Col 1:13"],
        },
        {
          tekst: {
            no: "Mens vi gjør korsets tegn, sier vi: «በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ» – «I Faderens og Sønnens og Den hellige ånds navn, én Gud.»",
            am: "ስናማትብ «በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ» እንላለን።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "Vi gjør korsets tegn når vi våkner og legger oss, når vi begynner og slutter en bønn, når korset nevnes i bønnene, og når vi blir redde. Korset er Guds kraft, og de onde åndene flykter fra det.",
            am: "ከእንቅልፍ ስንነሣና ስንተኛ፣ ጸሎት ስንጀምርና ስንፈጽም፣ በጸሎት መስቀልን የሚያነሣ ቃል ሲደርስ፣ ስንደነግጥም እናማትባለን። መስቀል የእግዚአብሔር ኃይል ነው፤ በማማተብም የአጋንንትን ኃይል እናርቃለን።",
          },
          vers: ["1Cor 1:18"],
        },
      ],
    },
    {
      id: "sigdet",
      tittel: { no: "Vi bøyer oss (ስግደት)", am: "ስግደት" },
      punkter: [
        {
          tekst: {
            no: "ስግደት betyr å bøye seg, knele og legge pannen ned mot jorden for Gud. «Kom, la oss kaste oss ned og bøie kne, la oss knele for Herrens, vår skapers åsyn!»",
            am: "ስግደት ዝቅ ማለት፣ መንበርከክ፣ በግንባር መውደቅና ምድርን ስሞ መነሣት ማለት ነው። «ኑ፥ እንስገድ ለእርሱም እንገዛ፤ በእርሱ ባደረገን በእግዚአብሔር ፊት እንበርከክ።»",
          },
          vers: ["Ps 95:6"],
        },
        {
          tekst: {
            no: "Det finnes tre slags ስግደት: tilbedelse (የአምልኮ ስግደት) bare for Gud, æresbøyning (የጸጋ ስግደት) for Maria, englene og helgenene som Gud har æret, og høflighetsbøyning (የአክብሮት ስግደት) for foreldre og eldre, da bøyer vi oss uten at knærne rører bakken.",
            am: "ስግደት ሦስት ዓይነት ነው፤ ለእግዚአብሔር ብቻ የሚቀርብ የአምልኮ ስግደት፣ እግዚአብሔር ላከበራቸው ለእመቤታችን፣ ለመላእክትና ለቅዱሳን የሚቀርብ የጸጋ ስግደት፣ ለወላጆችና ለታላላቆች ጉልበት መሬት ሳይነካ ከወገብ ጎንበስ ብሎ የሚሰጥ የአክብሮት ስግደት።",
          },
          vers: ["Matt 4:10", "Josh 5:14"],
        },
        {
          tekst: {
            no: "De vise menn falt ned og tilba Jesusbarnet. Da Salomo innviet templet, kastet hele Israel seg ned med ansiktet mot jorden.",
            am: "ሰብአ ሰገል ወድቀው ለሕፃኑ ሰገዱለት። ሰሎሞን ቤተ መቅደሱን ባከበረ ጊዜ እስራኤል ሁሉ በግምባራቸው ወደ ምድር ተደፍተው ሰገዱ።",
          },
          vers: ["Matt 2:11", "2Chr 7:3"],
        },
        {
          tekst: {
            no: "Noen dager bøyer vi oss ikke helt ned med knærne i bakken: lørdag og søndag, de 50 dagene etter påske, den 29. i måneden (Herrens fest), den 21. (Marias fest), den 12. (Mikaels fest), og når vi har tatt imot nattverden. Det er gledesdager, og etter nattverden er Kristus i oss. Da lovsynger vi med munnen og bøyer bare hodet og overkroppen.",
            am: "በቅዳሜና በእሑድ፣ በበዓለ ሃምሳ፣ በወሩ በ29 (በዓለ ወልድ)፣ በ21 (የእመቤታችን)፣ በ12 (የቅዱስ ሚካኤል) እና ሥጋውንና ደሙን ከተቀበልን በኋላ ጉልበታችንን ምድር አስነክተን አንሰግድም። ዕለታቱ የደስታ በዓላት ናቸው፤ ከቍርባን በኋላም ሥጋውና ደሙ በውስጣችን ይኖራል። ስለዚህ በአንደበታችን እናመሰግናለን፤ ዝቅ ብለንም እጅ እንነሣለን።",
          },
          andre: [{ no: "Fetha Negest (ፍትሐ ነገሥት) kap. 14 og 19", am: "ፍትሐ ነገሥት አንቀጽ ፲፬ እና ፲፱" }],
        },
        {
          tekst: {
            no: "På langfredag (ስቅለት) bøyer vi oss derimot mange ganger, når vi minnes Jesu lidelse.",
            am: "በዕለተ ስቅለት ግን የጌታችንን መከራ እያሰብን በስግደት እንውላለን።",
          },
        },
      ],
    },
    {
      id: "plass",
      tittel: { no: "Hvor og hvordan vi står", am: "አቋቋማችን" },
      punkter: [
        {
          tekst: {
            no: "Menn står på nordsiden og kvinner på sørsiden av kirka. Kirkas lovbok sier at alle skal stå «hver etter sin rang, som englene». Er det plass, står barna for seg selv. Ellers står guttene med fedrene og jentene med mødrene.",
            am: "ወንዶች በሰሜን፣ ሴቶች በደቡብ በኩል ይቆማሉ። ፍትሐ ነገሥት «ሁሉም በየመዓርጉ በመላእክት አምሳል ሊቆም ይገባል» ይላል። ቦታ ቢበቃ ሕፃናት ለብቻ ይቆማሉ፤ ካልበቃ ወንዶች ልጆች ከአባቶቻቸው፣ ሴቶች ልጆች ከእናቶቻቸው ጋር ይቆማሉ።",
          },
          vers: ["1Cor 14:40"],
          andre: [{ no: "Fetha Negest (ፍትሐ ነገሥት) kap. 12", am: "ፍትሐ ነገሥት አንቀጽ ፲፪" }],
        },
        {
          tekst: {
            no: "Jenter og kvinner dekker håret med ነጠላ eller et hvitt skjerf når de ber. Gutter og menn har ikke noe på hodet. Paulus skriver om dette til korinterne.",
            am: "እኅቶች ሲጸልዩ ጸጉራቸውን በነጠላ ወይም በነጭ ሻሽ ይሸፍናሉ፤ ወንድሞች ግን ራሳቸውን አይከናነቡም። ቅዱስ ጳውሎስ ይህን ለቆሮንቶስ ሰዎች ጽፏል።",
          },
          vers: ["1Cor 11:4-6"],
        },
        {
          tekst: {
            no: "Vi står rett opp på begge føtter og ser mot øst. Vi lener oss ikke mot veggen eller en søyle hvis vi ikke er syke. David sier: «Årle legger jeg min sak frem for dig» – på amharisk: «i morgenstunden står jeg for ditt åsyn».",
            am: "በሁለት እግራችን ቀጥ ብለን ወደ ምሥራቅ ዞረን እንቆማለን። ካልታመምን ግድግዳ ወይም ዓምድ አንደገፍም። ዳዊት «በማለዳ በፊትህ እቆማለሁ» ይላል።",
          },
          vers: ["Ps 5:4", "Matt 24:27"],
        },
      ],
    },
    {
      id: "stillhet",
      tittel: { no: "Stillhet og ærefrykt", am: "ጸጥታና ፍርሃተ እግዚአብሔር" },
      punkter: [
        {
          tekst: {
            no: "«Herren er i sitt hellige tempel; vær stille for hans åsyn, all jorden!» I kirka prater vi ikke, ler ikke og tuller ikke. Vi er stille og følger med i bønnene.",
            am: "«እግዚአብሔር ግን በተቀደሰ መቅደሱ አለ፤ ምድርም ሁሉ በፊቱ ዝም ትበል።» በቤተ ክርስቲያን አናወራም፣ አንስቅም፣ ዋዛ ፈዛዛ አንናገርም፤ በጸጥታ ጸሎቱን እንከታተላለን።",
          },
          vers: ["Hab 2:20", "Eccl 5:1"],
        },
        {
          tekst: {
            no: "Gud er «såre forferdelig i de helliges hemmelige råd». Englene dekker ansiktet for ham. Vi står derfor i kirka med frykt og ydmykhet.",
            am: "«በቅዱሳን ምክር እግዚአብሔር ክቡር ነው፤ በዙሪያው ባሉት ሁሉ ላይ ታላቅና ግሩም ነው።» ስለዚህ በቤተ ክርስቲያን በፍርሃትና በትሕትና እንቆማለን።",
          },
          vers: ["Ps 89:8", "Isa 6:2-3"],
        },
        {
          tekst: {
            no: "Under ቅዳሴ ber vi sammen med presten og svarer på bønnene. Når diakonen sier «Bøy dere!», bøyer vi oss, og når han sier «Reis dere!», reiser vi oss. Vi ber ikke egne bønner under ቅዳሴ, men før den begynner eller etter at den er ferdig.",
            am: "በቅዳሴ ጊዜ ከካህኑ ጋር እንጸልያለን፤ ተሰጥኦ እንቀበላለን። «ስግዱ» ሲባል እንሰግዳለን፤ «ተንሥኡ» ሲባል እንነሣለን። የግል ጸሎታችንን ቅዳሴ ከመጀመሩ በፊት ወይም «እትው በሰላም» ከተባለ በኋላ እናደርሳለን እንጂ በቅዳሴ ጊዜ አናደርስም።",
          },
          vers: ["Ps 133:1"],
        },
        {
          tekst: {
            no: "Mobilen lar vi helst ligge hjemme. Har vi den med, er den av under hele gudstjenesten. Vi bruker den ikke til å snakke, skrive eller se på noe i kirka.",
            am: "ሐሳባችንን የሚሰርቁ ስልኮቻችንን ቢቻል ቤት አስቀምጠን እንሄዳለን፤ ካልሆነም ቅዳሴው እስኪያልቅ አንጠቀምባቸውም። በቤተ ክርስቲያን በስልክ ማውራት የተከለከለ ነው።",
          },
        },
        {
          tekst: {
            no: "Vi kjøper og selger ikke, og vi holder ikke fest med mat og drikke i kirkegården. Jesus sa: «Gjør ikke min Faders hus til en handelsbod!»",
            am: "በቅጽረ ቤተ ክርስቲያን አንገበያይም፤ ግብዣ አድርገን አንበላም አንጠጣምም። ጌታችን «የአባቴን ቤት የንግድ ቤት አታድርጉት» አለ።",
          },
          vers: ["John 2:16"],
        },
      ],
    },
    {
      id: "evangeliet",
      tittel: { no: "Vi står når evangeliet leses", am: "ወንጌል ሲነበብ ቆመን እንሰማለን" },
      punkter: [
        {
          tekst: {
            no: "Før evangeliet leses, roper diakonen: «Reis dere og hør det hellige evangeliet!» Alle står da stille, også de som har sittet.",
            am: "ወንጌል ከመነበቡ በፊት ዲያቆኑ «ተነሥታችሁ ቅዱስ ወንጌልን ስሙ» ብሎ ያውጃል። በዚያን ጊዜ ተቀምጠው የነበሩትም ጭምር ሁሉም በጸጥታ ይቆማሉ።",
          },
        },
        {
          tekst: {
            no: "Da Esra åpnet Guds lov for folket, reiste alle seg. Også Jesus stod opp når han leste fra skriftene i synagogen.",
            am: "ዕዝራ የሕጉን መጽሐፍ በገለጠ ጊዜ ሕዝቡ ሁሉ ቆሙ። ጌታችንም በምኵራብ መጻሕፍትን ሊያነብ ተነሣ።",
          },
          vers: ["Neh 8:5-6", "Luke 4:16"],
        },
        {
          tekst: {
            no: "Kirkas bok om ቅዳሴ sier: Når et brev fra en jordisk konge blir lest, tør ingen å snakke. Hvor mye mer må vi da være stille når budskapet fra himmelens Konge blir lest!",
            am: "የምድራዊ ንጉሥ መልእክት ሲነበብ ማንም አይናገርም፤ የሰማያዊው ንጉሥ መልእክት የሆነው ቅዱስ ወንጌል ሲነበብማ እንዴት አብልጠን ዝም ልንል ይገባናል!",
          },
          andre: [{ no: "Ordningen for ቅዳሴ (ሥርዓተ ቅዳሴ)", am: "ሥርዓተ ቅዳሴ" }],
        },
        {
          tekst: {
            no: "Etter lesningen bæres evangelieboka rundt, og vi bøyer oss og kysser den. Vi sier: «Vi tror på det hellige evangeliets ord.»",
            am: "ከንባቡ በኋላ ወንጌሉ በዑደት ይዞራል፤ እኛም ሰግደን እንሳለመዋለን፤ «በቅዱስ ወንጌል ቃል እናምናለን» እንላለን።",
          },
        },
      ],
    },
    {
      id: "tidlig",
      tittel: { no: "Vi kommer tidlig og blir til slutten", am: "አስቀድመን እንገኛለን፣ እስከ መጨረሻው እንቆያለን" },
      punkter: [
        {
          tekst: {
            no: "Vi kommer til kirka før ቅዳሴ begynner, før presten sier «አሐዱ አብ ቅዱስ». Den som vil ta imot nattverden, må være der fra begynnelsen.",
            am: "ቅዳሴው «አሐዱ አብ ቅዱስ» ተብሎ ከመጀመሩ በፊት በቤተ ክርስቲያን እንገኛለን። ለመቍረብ የፈለገ ሁሉ አሐዱ ሳይባል መግባት አለበት።",
          },
          vers: ["Ps 84:11"],
        },
        {
          tekst: {
            no: "Vi går ikke ut midt i gudstjenesten. Kirkas lovbok sier at etter evangeliet skal ingen gå ut, unntatt i nød, før nattverden er delt ut og presten har velsignet folket og sagt: «Gå i fred!»",
            am: "ቅዳሴ አቋርጠን አንወጣም። ፍትሐ ነገሥት «ክቡር ወንጌል ከተነበበ በኋላ በጭንቅ በሕመም ካልሆነ በቀር … ዲያቆኑ ሑሩ በሰላም ቄሱ ባርኮ ሳያሰናብት አንዱስ እንኳን ከቤተ ክርስቲያን አይውጣ» ይላል።",
          },
          andre: [{ no: "Fetha Negest (ፍትሐ ነገሥት) kap. 12", am: "ፍትሐ ነገሥት አንቀጽ ፲፪" }],
        },
        {
          tekst: {
            no: "Profetinnen Anna vek aldri fra templet. Etter at Jesus fór opp til himmelen, var apostlene alltid i templet og lovpriste Gud.",
            am: "ነቢይቱ ሐና ከመቅደስ አትለይም ነበር። ጌታችን ካረገ በኋላ ሐዋርያትም ዘወትር በመቅደስ እግዚአብሔርን ያመሰግኑ ነበር።",
          },
          vers: ["Luke 2:37", "Luke 24:52-53"],
        },
      ],
    },
    {
      id: "renhet",
      tittel: { no: "Når vi står ute i kirkegården", am: "በቅጽሩ ቆመን የምናስቀድስበት ጊዜ" },
      ingress: {
        no: "Noen dager går man ikke inn i selve kirkebygget, men ber ute i kirkegården (ቅጽር), for eksempel på ዐውደ ምሕረት. Dette er en ordning av respekt for Kristi kropp og blod og for kirka – ikke en straff.",
        am: "አንዳንድ ቀናት ወደ ሕንጻ ቤተ ክርስቲያኑ ሳንገባ በቅጽሩ ለምሳሌ በዐውደ ምሕረት ቆመን እንጸልያለን። ይህ ለቅዱስ ቍርባንና ለቤተ ክርስቲያን ክብር የተሠራ ሥርዓት ነው እንጂ ቅጣት አይደለም።",
      },
      punkter: [
        {
          tekst: {
            no: "Jenter og kvinner som har mens, går ikke inn i kirka de første dagene, inntil sju dager. En mor venter 40 dager etter at hun har født en gutt og 80 dager etter en jente. Så vasker hun seg og går inn igjen.",
            am: "እኅቶች በወር አበባ (ደመ ጽጌ) ወቅት እስከ ሰባት ቀን ድረስ ወደ ቤተ ክርስቲያን አይገቡም። እናቶች ወንድ ከወለዱ 40፣ ሴት ከወለዱ 80 ቀን ይቆያሉ። ከዚያ በኋላ ገላቸውን ታጥበው ይገባሉ።",
          },
          andre: [
            { no: "Fetha Negest (ፍትሐ ነገሥት) kap. 6", am: "ፍትሐ ነገሥት አንቀጽ ፮" },
            { no: "Nikea-kanon 29 (ዘኒቅያ ፳፱)", am: "ዘኒቅያ ፳፱" },
          ],
        },
        {
          tekst: {
            no: "En gutt eller mann som har hatt sædutløsning om natta, går ikke inn den dagen, men vasker seg og går inn neste dag. Ektefolk går ikke inn den dagen de har hatt samliv. Heller ikke den som har et sår som væsker.",
            am: "ሕልመ ሌሊት ያገኘው ወንድ በዕለቱ አይገባም፤ በማግሥቱ ገላውን ታጥቦ ይገባል። ባልና ሚስትም ሩካቤ በፈጸሙበት ዕለት አይገቡም። የሚያዥ ቍስል ያለበትም አይገባም።",
          },
          vers: ["Exod 19:15", "1Cor 7:5"],
        },
        {
          tekst: {
            no: "Mensen og fødsel er ikke noe urent eller en forbannelse. De er Guds gode gave. Ingen kan gjøre kirka uren, og ingen skal se ned på dem som står utenfor. Kirka sier at kvinner ikke skal føle seg urene.",
            am: "የወር አበባና ወሊድ ርኵሰት ወይም መርገም አይደሉም፤ የእግዚአብሔር ስጦታ ናቸው። ቤተ ክርስቲያን በሰው ምክንያት አትረክስም፤ በውጭ የሚቆሙትንም ማንም ሊያገልላቸው አይገባም። ሴቶችም «ርኩስ ነኝ» የሚል ስሜት ሊሰማቸው ከቶ አይገባም።",
          },
        },
        {
          tekst: {
            no: "Den som står ute, kan be, lese de hellige bøkene og følge gudstjenesten derfra. Bønnen ute i kirkegården når fram til Gud like godt som bønnen inne i kirka.",
            am: "በውጭ የሚቆሙት በቅጽሩ መጸለይ፣ ቅዱሳት መጻሕፍትን ማንበብና አገልግሎቱን መከታተል ይችላሉ። በቤተ ክርስቲያን ውስጥም ሆነ በዙሪያው የሚደረግ ጸሎት ወደ እግዚአብሔር ከመድረስ አንጻር ልዩነት የለውም።",
          },
          vers: ["Luke 1:10", "Luke 18:13-14"],
        },
      ],
    },
    {
      id: "mitswat",
      tittel: { no: "Vi gir til de fattige (ምጽዋት)", am: "ምጽዋት" },
      punkter: [
        {
          tekst: {
            no: "ምጽዋት betyr gave. Det er det vi gir til dem som mangler mat, klær eller penger. Mange gir ምጽዋት til de fattige som sitter ved kirkeporten.",
            am: "ምጽዋት «ስጦታ፣ ችሮታ» ማለት ነው። ለተቸገሩ ሰዎች የምናደርገው የገንዘብም ሆነ የቁሳቁስ ርዳታ ነው፤ በተለይ የሚበሉትና የሚለብሱት ላጡ ነዳያን የሚደረግ ችሮታ ነው።",
          },
          vers: ["Isa 58:7"],
        },
        {
          tekst: {
            no: "Den som gir til en fattig, låner til Herren, og Gud lønner ham. Gud elsker en glad giver.",
            am: "ለድሀ ቸርነትን የሚያደርግ ለእግዚአብሔር ያበድራል፤ በጎነቱንም መልሶ ይከፍለዋል። እግዚአብሔር በደስታ የሚሰጠውን ይወዳል።",
          },
          vers: ["Prov 19:17", "2Cor 9:7"],
        },
        {
          tekst: {
            no: "Jesus så en fattig enke som la to små mynter i tempelkisten. Han sa at hun hadde gitt mer enn alle de rike. Det er ikke størrelsen som teller, men hjertet.",
            am: "ጌታችን አንዲት ድሀ መበለት ሁለት ናስ በመዝገብ ስትጥል አየ፤ ከባለ ጠጎቹ ሁሉ አብልጣ ሰጠች አለ። ዋናው የስጦታው ብዛት ሳይሆን ልብ ነው።",
          },
          vers: ["Mark 12:41-44"],
        },
        {
          tekst: {
            no: "Kirkas lovbok sier: «ምጽዋት er barmhjertighet. Gud gir sammen med dem som gir, og tar imot sammen med dem som tar imot.»",
            am: "ፍትሐ ነገሥት «ምጽዋት ምሕረት ነው፤ እግዚአብሔር ከሰጪዎች ጋር የሚሰጥ፣ ከተቀባዮች ጋር ሆኖ የሚቀበል ነው» ይላል።",
          },
          andre: [{ no: "Fetha Negest (ፍትሐ ነገሥት) kap. 16", am: "ፍትሐ ነገሥት አንቀጽ ፲፮" }],
        },
      ],
    },
    {
      id: "velsignelse",
      tittel: { no: "Velsignelse fra presten", am: "ከካህናት በረከት መቀበል" },
      punkter: [
        {
          tekst: {
            no: "Når vi møter en prest på veien, ved kirkeporten eller i kirkegården, bøyer vi oss, kysser korset hans og tar imot velsignelsen. «Uten all motsigelse er det den ringere som velsignes av den høiere.»",
            am: "ካህናትን በመንገድ፣ በቤተ ክርስቲያን በር ላይ ወይም በግቢ ውስጥ ስናገኛቸው ሰግደን መስቀላቸውን እንሳለማለን፤ በረከትም እንቀበላለን። «ትንሹም በታላቁ እንዲባረክ ክርክር የሌለበት ነገር ነው።»",
          },
          vers: ["Heb 7:7"],
        },
        {
          tekst: {
            no: "Gud sa til Aron og sønnene hans at de skulle velsigne folket og legge hans navn på dem: «Herren velsigne dig og bevare dig!» Når presten velsigner oss med korset, er det Gud som velsigner.",
            am: "እግዚአብሔር አሮንና ልጆቹ ሕዝቡን እንዲባርኩና ስሙን በላያቸው እንዲያደርጉ አዘዘ፤ «እግዚአብሔር ይባርክህ፥ ይጠብቅህም።» ካህኑ በመስቀል ሲባርከን የሚባርከን እግዚአብሔር ነው።",
          },
          vers: ["Num 6:23-27"],
        },
        {
          tekst: {
            no: "Ved slutten av ቅዳሴ velsigner presten folket og sender oss hjem i fred. Jesus løftet også hendene og velsignet disiplene før han fór opp til himmelen.",
            am: "በቅዳሴ መጨረሻ ካህኑ ሕዝቡን ባርኮ በሰላም ያሰናብታል። ጌታችንም ከማረጉ በፊት እጆቹን አንሥቶ ደቀ መዛሙርቱን ባረካቸው።",
          },
          vers: ["Luke 24:50-51"],
        },
      ],
    },
    {
      id: "barna",
      tittel: { no: "Slik lærer foreldre barna", am: "ወላጆች ልጆቻቸውን እንዴት ያስተምራሉ?" },
      punkter: [
        {
          tekst: {
            no: "Gud sa: «Du skal innprente dine barn dem … når du sitter i ditt hus, og når du går på veien.» Barn lærer troen mest av det de ser hjemme og i kirka. Foreldre som selv hilser kirka, bøyer seg og er stille, lærer barna mer enn mange ord.",
            am: "እግዚአብሔር «ለልጆችህም አስተምረው፥ በቤትህም ስትቀመጥ፥ በመንገድም ስትሄድ … ተጫወተው» አለ። ልጆች ሃይማኖትን የሚማሩት በቤትና በቤተ ክርስቲያን ከሚያዩት ነው። ራሳቸው ቤተ ክርስቲያንን የሚሳለሙ፣ የሚሰግዱና ዝም ብለው የሚቆሙ ወላጆች ከብዙ ቃል በላይ ያስተምራሉ።",
          },
          vers: ["Deut 6:6-7", "Prov 22:6"],
        },
        {
          tekst: {
            no: "Jesu foreldre tok ham med til templet hvert år. Da han var tolv år, satt han blant lærerne og hørte og spurte. Hanna ga den lille Samuel til Herrens hus.",
            am: "የጌታችን ወላጆች በየዓመቱ ወደ ኢየሩሳሌም ይወጡ ነበር፤ የአሥራ ሁለት ዓመት ልጅ በሆነ ጊዜ በመምህራን መካከል ተቀምጦ ሲሰማቸውና ሲጠይቃቸው በመቅደስ ተገኘ። ሐናም ሕፃኑን ሳሙኤልን ለእግዚአብሔር ቤት ሰጠችው።",
          },
          vers: ["Luke 2:41-42", "Luke 2:46", "1Sam 1:28"],
        },
        {
          tekst: {
            no: "Foreldre tar barna med til kirka tidlig, lar dem stå sammen med seg og viser dem hvordan de hilser kirka, gjør korsets tegn og bøyer seg. Barna kan få en egen ነጠላ og en ጧፍ å gi.",
            am: "ወላጆች ልጆቻቸውን አስቀድመው ወደ ቤተ ክርስቲያን ይዘው ይሄዳሉ፤ ከአጠገባቸው አቁመው እንዴት እንደሚሳለሙ፣ እንደሚያማትቡና እንደሚሰግዱ ያሳዩአቸዋል። ለልጆች የራሳቸው ነጠላና የሚሰጡት ጧፍ ይዘጋጅላቸዋል።",
          },
          vers: ["Mark 10:14"],
        },
        {
          tekst: {
            no: "Hjemme kan familien øve sammen på hilsenen til kirka og på svarene i ቅዳሴ. På søndagsskolen lærer barna mer, og de kan fortelle familien det de har lært. Timoteus kjente de hellige skrifter fra han var liten.",
            am: "በቤት ቤተሰቡ የቤተ ክርስቲያን ሰላምታንና የቅዳሴ ተሰጥኦን አብረው ይለማመዳሉ። ልጆች በሰንበት ትምህርት ቤት ይማራሉ፤ የተማሩትንም ለቤተሰቦቻቸው ይናገራሉ። ጢሞቴዎስም ከሕፃንነቱ ጀምሮ ቅዱሳት መጻሕፍትን አውቋል።",
          },
          vers: ["2Tim 3:15", "Eph 6:4"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Johannes Chrysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "«Når du står foran en jordisk konge, tør du ikke le, uansett grunn. Ler du da foran himmelens Konge?»",
        am: "«በምድራዊ ንጉሥ ፊት በቆምህ ጊዜ በምንም ምክንያት ቢሆን ለመሳቅ አትደፍርም፤ ታዲያ በሰማያዊ ንጉሠ ነገሥት ፊት ትስቃለህን?»",
      },
      kilde:
        "Mahibere Kidusan: «ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!» (viser til ዮሐንስ አፈወርቅ og ቀኖናና ሥርዓት kap. 9) – https://eotcmk.org/a/%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%a8%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95%e1%8a%95-%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b5-%e1%88%8a%e1%8c%a0/",
    },
    {
      navn: { no: "Apostlene, i ordningen for ቅዳሴ", am: "ቅዱሳን ሐዋርያት በሥርዓተ ቅዳሴ" },
      tekst: {
        no: "I begynnelsen av ቅዳሴ leses apostlenes ord: Den som kommer inn i kirka under ቅዳሴ og hører skriftene, men ikke venter til bønnen er ferdig, har brutt Guds lov, for han har foraktet å stå foran himmelens Konge.",
        am: "ሥርዓተ ቅዳሴ ሲጀመር «በቅዳሴ ጊዜ ከምእመን ወገን ወደ ቤተ ክርስቲያን የገባ ሰው ቢኖር ቅዱሳት መጻሕፍትን ተምሮ የቅዳሴው ጸሎት እስኪፈጸም ባይታገሥ … ከቤተ ክርስቲያን ይለይ፤ የእግዚአብሔርን ሕግ አፍርሷልና፤ በሰማያዊ ንጉሥ ፊት መቆምን አቃሏልና» ብለው ሐዋርያት አስተማሩ።",
      },
      kilde:
        "Mahibere Kidusan: «ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!» – https://eotcmk.org/a/%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%a8%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95%e1%8a%95-%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b5-%e1%88%8a%e1%8c%a0/",
    },
    {
      navn: { no: "Sawiros av Eshmunein", am: "ሳዊሮስ ዘእስሙናይን" },
      tekst: {
        no: "«Av døgnets 24 timer har Gud satt av tre tider da vi skal gå til kirka: morgenen, tiden for ቅዳሴ og kvelden.»",
        am: "«እግዚአብሔር ከ፳፬ ሰዓታት መካከል ወደ ቤተ ክርስቲያን ይሄዱባቸው ዘንድ ሦስት ሰዓታትን አደረገ፤ እሊህም ነግህ፣ ጊዜ ቅዳሴና ሠርክ ናቸው።»",
      },
      kilde:
        "Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን» (etter ድርሳነ ሳዊሮስ ዘእስሙናይን s. 149) – https://eotcmk.org/a/%e1%8b%a8%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%b5%e1%88%ad%e1%88%bb-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95/",
    },
    {
      navn: { no: "Fedrene i ፍትሐ ነገሥት", am: "አበው በፍትሐ ነገሥት" },
      tekst: {
        no: "Kirkas lovbok sier at alle i kirka skal stå «hver etter sin rang, som englene», og at ingen skal si noe som ikke passer seg i helligdommen, «heller ikke rundt den».",
        am: "ፍትሐ ነገሥት «ሁሉም በየመዓርጉ በመላእክት አምሳል ሊቆም ይገባል» ይላል፤ ደግሞም «አንዱስ እንኳን በቤተ መቅደስ የማይወደድ ሌላ ነገር አይናገር፤ በዙሪያውም ቢሆን አይናገር» ይላል።",
      },
      kilde:
        "Fetha Negest kap. 12, sitert i Mahibere Kidusan: «የምእመናን ድርሻ በቤተ ክርስቲያን» (del 2) – https://eotcmk.org/a/%e1%8b%a8%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%b5%e1%88%ad%e1%88%bb-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95-2/",
    },
  ],
  ord: [
    { ord: "ሥርዓት", forklaring: { no: "ordning, regel for hvordan noe gjøres", am: "ሕግ፣ ደንብ፣ አሠራር" } },
    { ord: "መሳለም", forklaring: { no: "å hilse med kyss og bøyning (kirka, korset, ikonene)", am: "በመሳምና በመስገድ ሰላምታ መስጠት" } },
    { ord: "ማማተብ", forklaring: { no: "å gjøre korsets tegn", am: "በትእምርተ መስቀል መባረክ" } },
    { ord: "ስግደት", forklaring: { no: "å bøye seg ned for Gud", am: "ዝቅ ማለት፣ መንበርከክ፣ በግንባር መውደቅ" } },
    { ord: "የአምልኮ ስግደት", forklaring: { no: "tilbedelse, bare for Gud", am: "ለእግዚአብሔር ብቻ የሚቀርብ ስግደት" } },
    { ord: "የጸጋ ስግደት", forklaring: { no: "æresbøyning for Maria, englene og helgenene", am: "ለቅዱሳን የሚቀርብ ስግደት" } },
    { ord: "ቅጽር", forklaring: { no: "kirkegården innenfor muren", am: "የቤተ ክርስቲያን ግቢ" } },
    { ord: "ዐውደ ምሕረት", forklaring: { no: "den åpne plassen foran kirka", am: "በቤተ ክርስቲያን ፊት ያለው ዐደባባይ" } },
    { ord: "ምጽዋት", forklaring: { no: "gave til de fattige", am: "ለተቸገሩ የሚሰጥ ስጦታ" } },
    { ord: "መባዕ", forklaring: { no: "gave til kirka (røkelse, lys o.l.)", am: "ለቤተ ክርስቲያን የሚሰጥ ስጦታ" } },
    { ord: "ተሰጥኦ", forklaring: { no: "folkets svar i ቅዳሴ", am: "ምእመናን በቅዳሴ የሚመልሱት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvorfor tar vi av oss skoene i kirka?", am: "በቤተ ክርስቲያን ጫማችንን ለምን እናወልቃለን?" },
      svar: {
        no: "Fordi kirka er hellig, slik Gud sa til Moses ved den brennende busken: «Dra dine sko av dine føtter! For det sted du står på, er hellig jord» (2 Mos 3,5).",
        am: "ቤተ ክርስቲያን የተቀደሰች ስለሆነች ነው፤ እግዚአብሔር ሙሴን «አንተ የቆምህባት ስፍራ የተቀደሰች መሬት ናትና ጫማህን ከእግርህ አውጣ» አለው (ዘጸ 3፥5)።",
      },
    },
    {
      sporsmal: { no: "Hvordan gjør vi korsets tegn, og hva betyr det?", am: "እንዴት እናማትባለን? ትርጉሙስ ምንድን ነው?" },
      svar: {
        no: "Med fingrene i kors fra pannen ned til brystet – Kristus kom ned og ble født av Maria – og fra venstre til høyre skulder – han førte sjelene fra dødsriket til paradiset. Vi sier: «በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ».",
        am: "ጣቶቻችንን መስቀለኛ አድርገን ከግንባር ወደ ደረት – ጌታችን ወርዶ ከድንግል ማርያም መወለዱን – ከግራ ወደ ቀኝ ትከሻ – ነፍሳትን ከሲኦል ወደ ገነት ማውጣቱን እናስባለን። «በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ» እንላለን።",
      },
    },
    {
      sporsmal: { no: "Når bøyer vi oss ikke helt ned med knærne i bakken?", am: "ጉልበታችንን ምድር አስነክተን የማንሰግደው መቼ ነው?" },
      svar: {
        no: "Lørdag og søndag, de 50 dagene etter påske, den 29., 21. og 12. i måneden, og etter at vi har tatt imot nattverden. Da bøyer vi bare hodet.",
        am: "በቅዳሜና በእሑድ፣ በበዓለ ሃምሳ፣ በወሩ በ29፣ በ21 እና በ12፣ ሥጋውንና ደሙን ከተቀበልን በኋላም። በዚያን ጊዜ ዝቅ ብለን እጅ እንነሣለን።",
      },
    },
    {
      sporsmal: { no: "Hvor står menn og kvinner i kirka?", am: "በቤተ ክርስቲያን ወንዶችና ሴቶች የት ይቆማሉ?" },
      svar: {
        no: "Menn står på nordsiden og kvinner på sørsiden. Barna står for seg selv eller sammen med foreldrene.",
        am: "ወንዶች በሰሜን፣ ሴቶች በደቡብ በኩል ይቆማሉ። ሕፃናት ለብቻ ወይም ከወላጆቻቸው ጋር ይቆማሉ።",
      },
    },
    {
      sporsmal: { no: "Hva gjør vi når evangeliet skal leses?", am: "ወንጌል ሲነበብ ምን እናደርጋለን?" },
      svar: {
        no: "Vi reiser oss og står helt stille, slik folket reiste seg da Esra åpnet loven (Neh 8,5). Etterpå bøyer vi oss og kysser evangelieboka.",
        am: "ዕዝራ መጽሐፉን ሲገልጥ ሕዝቡ እንደ ቆሙ (ነሕ 8፥5) እኛም ተነሥተን በጸጥታ እንቆማለን። ከዚያም ሰግደን ወንጌሉን እንሳለማለን።",
      },
    },
    {
      sporsmal: { no: "Hvorfor står noen ute i kirkegården i stedet for å gå inn?", am: "አንዳንዶች ወደ ውስጥ ሳይገቡ በቅጽሩ የሚቆሙት ለምንድን ነው?" },
      svar: {
        no: "Av respekt for Kristi kropp og blod, for eksempel under mens, etter fødsel eller etter samliv. Det er ikke straff og ikke urent. Bønnen deres ute når Gud like godt, og ingen skal se ned på dem.",
        am: "ለቅዱስ ቍርባን ክብር ሲባል ነው፤ ለምሳሌ በወር አበባ፣ ከወሊድ በኋላ ወይም ከሩካቤ በኋላ። ቅጣትም ርኵሰትም አይደለም። በውጭ የሚያደርጉት ጸሎት እንደ ውስጡ ወደ እግዚአብሔር ይደርሳል፤ ማንም ሊያገልላቸው አይገባም።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል!", url: "https://eotcmk.org/a/%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%a8%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95%e1%8a%95-%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b5-%e1%88%8a%e1%8c%a0/" },
    { navn: "Mahibere Kidusan: የምእመናን ድርሻ በቤተ ክርስቲያን (del 1)", url: "https://eotcmk.org/a/%e1%8b%a8%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%b5%e1%88%ad%e1%88%bb-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95/" },
    { navn: "Mahibere Kidusan: የምእመናን ድርሻ በቤተ ክርስቲያን (del 2)", url: "https://eotcmk.org/a/%e1%8b%a8%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%b5%e1%88%ad%e1%88%bb-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95-2/" },
    { navn: "Mahibere Kidusan (for barn): ጸሎት በቤተ ክርስቲያን", url: "https://eotcmk.org/a/%e1%8c%b8%e1%88%8e%e1%89%b5-%e1%89%a0%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95/" },
    { navn: "Mahibere Kidusan (for barn): ማማተብ", url: "https://eotcmk.org/a/%E1%88%9B%E1%88%9B%E1%89%B0%E1%89%A5/" },
    { navn: "Mahibere Kidusan: ሥርዓተ አምልኮ, del 2 (ምጽዋት)", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae-2/" },
    { navn: "Søndagsskolens lærebok: ሥርዓተ ቤተ ክርስቲያን ሁለተኛ ክፍል (2015 E.C.)", url: "https://www.scribd.com/document/699737051/" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ሴቶች በቤተ ክርስቲያን (ክፍል ፬): በወር አበባ ጊዜና ከወሊድ በኋላ", url: "https://astemhro.com/2020/02/08/menustration_postpartum/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacramental (korsets tegn)", url: "https://ethiopianorthodox.org/english/Lent/sacramental.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "Marcos Daoud: The Liturgy of the Ethiopian Church", url: "http://www.eotc.faithweb.com/liturgy.htm" },
    { navn: "MK-US Next Generation (Parenthood): Raising Children in Ethiopian Orthodox Values", url: "https://nextgeneration.eotcmk.org/parenthood/blog/how-to-raise-children" },
  ],
  utkast: true,
};
