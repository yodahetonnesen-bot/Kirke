import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ትንሣኤ ሙታን:
// astemhro.com (ምስጢረ ትንሣኤ ሙታን፡ የሙታንን መነሣት ተስፋ እናደርጋለን – om døden, sjelen i ገነት/ሲኦል,
// de som ble vekket opp, ዳግም ምጽአት, dommen, ቀኝና ግራ etter አባ ሕርያቆስ, በጎችና ፍየሎች, ፍትሐትና ተዝካር),
// Mahibere Kidusans barneside (eotcmk.org: ምሥጢረ ትንሣኤ ሙታን, med sitater fra ሃይማኖተ አበው ዘቅዱስ ኤጲፋንዮስ,
// og den engelske «Mystery of The Resurrection of the Dead»), Mahibere Kidusan Europa (ትንሣኤ – om påsken,
// med ሃይማኖተ አበው ዘቅዱስ ዮሐንስ አፈወርቅ), Mahibere Kidusan (ቅድስት – om søndagen som በኵረ በዓላት),
// ethiopianorthodox.org (The Faith of the Church: The Mystery of the Resurrection, og den amhariske
// artikkelen ተዝካርና ፍትሐት) og astemhro.com om trosbekjennelsen (ordlyden «ወንሴፎ ትንሣኤ ሙታን …»).
// Usikkert: Jobs ord (Job 19:25-26) er tatt ut. I den amhariske bibelen står det «ከሥጋዬ ተለይቼ» (skilt fra
// mitt kjød), så verset passer ikke som bevis for at kroppen står opp.
// Usikkert: At de rettferdige står opp «som 30-årige menn og 15-årige kvinner», og fortellingen om de
// tre basunene (ነጋሪት), kommer bare fra astemhro.com (som viser til ያዕቆብ ዘሥሩግ). Bør leses av en prest.
// Usikkert: Hvilke dager etter dødsfallet det holdes ፍትሐት og ተዝካር (ሣልስት, ሰባት, ሠላሳ, አርባ osv.),
// fant jeg bare i uoffisielle kilder (Facebook/YouTube), så dagene er utelatt.
// Usikkert: Henvisningen til Enoks bok («de levende ber for de døde, og de døde for de levende») er
// sitert slik astemhro.com gjengir den (ሄኖክ 12:34?); kapittel og vers er ikke kontrollert.
// Usikkert: Den amhariske stavemåten «አሞኒዮስና አውሳብዮስ» er min gjengivelse av «Amoniyos and Awsabeyos»
// (ethiopianorthodox.org), og sitatet deres er oversatt fra engelsk.
// Usikkert: Johannes Krysostomos' påskepreken og Efrem fant jeg ikke i EOTC-kilder. Krysostomos er
// derfor sitert fra ሃይማኖተ አበው slik Mahibere Kidusan gjengir ham; Efrem er utelatt.
export const oppstandelsen: Tema = {
  slug: "oppstandelsen",
  del: "troen",
  tittel: { no: "De dødes oppstandelse", am: "ምሥጢረ ትንሣኤ ሙታን" },
  undertittel: {
    no: "Kristus er stått opp – og vi skal stå opp med ham",
    am: "ክርስቶስ ተነሥቷል፤ እኛም ከእርሱ ጋር እንነሣለን",
  },
  bilde: "graven",
  ingress: {
    no:
      "Det femte og siste av de fem mysteriene er ምሥጢረ ትንሣኤ ሙታን, mysteriet om de dødes oppstandelse. Vi tror at Jesus Kristus stod opp fra de døde på den tredje dagen. Og vi venter i håp på dagen da han kommer igjen. Da skal alle døde stå opp, sjel og kropp skal bli forent igjen, og hver og en skal få lønn etter det han har gjort. De andre mysteriene tror vi og holder fast ved, eller tror og tar del i. Men oppstandelsen tror vi og håper på.",
    am:
      "ከአምስቱ አዕማደ ምሥጢር የመጨረሻው ምሥጢረ ትንሣኤ ሙታን ነው። ጌታችን ኢየሱስ ክርስቶስ በሦስተኛው ቀን ከሙታን እንደ ተነሣ እናምናለን። ዳግመኛ የሚመጣበትንም ቀን በተስፋ እንጠብቃለን፤ በዚያን ጊዜ ሙታን ሁሉ ይነሣሉ፤ ነፍስና ሥጋ ዳግመኛ ይዋሐዳሉ፤ ሁሉም እንደ ሥራው ዋጋውን ይቀበላል። ሌሎቹን ምሥጢራት አምነን የምንጠብቃቸው ወይም አምነን የምንፈጽማቸው ናቸው፤ ምሥጢረ ትንሣኤ ሙታንን ግን አምነን ተስፋ እናደርገዋለን።",
  },
  hovedvers: "John 11:25-26",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva betyr ትንሣኤ ሙታን?", am: "«ትንሣኤ ሙታን» ማለት ምን ማለት ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ትንሣኤ kommer av ge'ez-verbet «ተንሥአ», som betyr å reise seg, å stå opp. ትንሣኤ ሙታን betyr altså de dødes oppstandelse.",
            am: "«ትንሣኤ» የሚለው ቃል «ተንሥአ» ከሚለው የግዕዝ ግሥ የወጣ ሲሆን መነሣት ማለት ነው። «ትንሣኤ ሙታን» ማለትም የሙታን መነሣት ማለት ነው።",
          },
        },
        {
          tekst: {
            no: "Når et menneske dør, skilles sjelen og kroppen. Kroppen blir lagt i graven og blir til jord, men sjelen lever. På den siste dagen skal sjelen og kroppen forenes igjen, og mennesket skal stå opp i en kropp som aldri mer skal dø eller råtne.",
            am: "ሰው ሲሞት ነፍስና ሥጋ ይለያያሉ። ሥጋ በመቃብር ፈርሶ በስብሶ አፈር ይሆናል፤ ነፍስ ግን ሕያው ናት። በመጨረሻው ቀን ነፍስና ሥጋ ዳግመኛ ተዋሕደው ሰው በማይፈርስና በማይበሰብስ ሥጋ ይነሣል።",
          },
          vers: ["John 5:28-29"],
        },
        {
          tekst: {
            no: "Det kalles et mysterium (ምሥጢር) fordi menneskets forstand ikke kan forstå hvordan Gud gjør det. Vi tar imot det i tro.",
            am: "ምሥጢር የተባለው የሙታን አነሣሥ የሰው አእምሮ ሊደርስበትና ሊመረምረው የማይችል ረቂቅ አምላካዊ ጥበብ ስለ ሆነ ነው፤ እኛም በእምነት እንቀበለዋለን።",
          },
        },
        {
          tekst: {
            no: "I trosbekjennelsen (ጸሎተ ሃይማኖት) sier vi: «ወንሴፎ ትንሣኤ ሙታን ወሕይወተ ዘይመጽእ ለዓለመ ዓለም» – vi venter de dødes oppstandelse og livet som kommer, i all evighet. Her sier vi ikke ወነአምን (vi tror), men ወንሴፎ (vi håper), for oppstandelsen er noe vi ennå venter på.",
            am: "በጸሎተ ሃይማኖት «ወንሴፎ ትንሣኤ ሙታን ወሕይወተ ዘይመጽእ ለዓለመ ዓለም» እንላለን፤ የሙታንን መነሣት የሚመጣውንም ሕይወት ለዘላለሙ ተስፋ እናደርጋለን ማለት ነው። በዚህ «ወነአምን» (እናምናለን) ሳይሆን «ወንሴፎ» (ተስፋ እናደርጋለን) የምንለው ገና የምንጠብቀው ስለ ሆነ ነው።",
          },
        },
        {
          tekst: {
            no: "Kirkas lærere sier at søvnen er et bilde på døden, og at det å våkne er et bilde på oppstandelsen. Når vi sover, hviler kroppen, men sjelen sover ikke – derfor husker vi drømmene våre. Slik er det også mellom døden og oppstandelsen: Kroppen hviler i jorden, men sjelen lever. Derfor kaller Bibelen de døde «de som sover».",
            am: "ሊቃውንተ ቤተ ክርስቲያን እንቅልፍ የሞት፣ ከእንቅልፍ መነሣት ደግሞ የትንሣኤ ሙታን ምሳሌ ነው ይላሉ። ማንቀላፋት የሥጋ ባሕርይ ነው፤ ነፍስ ግን አታንቀላፋም፤ በእንቅልፍ ያየነውን የማንረሳው ስለዚህ ነው። በሞትና በትንሣኤ መካከልም ሥጋችን በምድር አፈር ሆኖ ነፍሳችን ግን ሕያዊት ሆና ትቆያለች።",
          },
          vers: ["Dan 12:2", "1Thess 4:13-14"],
        },
      ],
    },
    {
      id: "doden",
      tittel: { no: "Hva skjer når vi dør?", am: "ሞት ምንድን ነው? ከሞት በኋላስ?" },
      punkter: [
        {
          tekst: {
            no: "Mennesket har en kropp (ሥጋ) som er laget av jord, og en sjel (ነፍስ) som aldri dør. Gud skapte mennesket til å leve evig i paradiset, men da Adam brøt Guds bud, kom døden inn i verden.",
            am: "ሰው ከመሬት የተሠራ ሥጋና ዘላለማዊት ነፍስ ያለው ፍጡር ነው። ዘላለማዊ ሆኖ በገነት እንዲኖር የተፈጠረው ሰው የእግዚአብሔርን ትእዛዝ በመሻሩ ሞት መጣበት።",
          },
          vers: ["1Cor 15:21-22"],
        },
        {
          tekst: {
            no: "Døden er at sjelen og kroppen skilles. Kroppen vender tilbake til jorden den kom fra, og sjelen vender tilbake til Gud, som gav den.",
            am: "ሞት ማለት የሥጋና የነፍስ መለያየት ነው። ሥጋ ወደ ተገኘበት ወደ መሬት፣ ነፍስ ደግሞ ወደ ሰጣት ወደ እግዚአብሔር ትሄዳለች።",
          },
          vers: ["Eccl 12:7", "Jas 2:26"],
        },
        {
          tekst: {
            no: "Fram til oppstandelsen venter sjelene på et midlertidig sted. Sjelene til dem som har levd rettferdig, er i paradiset (ገነት). Sjelene til syndere er i dødsriket (ሲኦል). Jesus fortalte om den fattige Lasarus, som ble båret av englene til Abrahams fang, og om den rike mannen, som var i pine i dødsriket.",
            am: "ገነትና ሲኦል ጊዜያዊ የነፍሳት መቆያ ናቸው። መልካም የሠሩ ነፍሳት እስከ ትንሣኤ ሙታን ድረስ በገነት ይቆያሉ፤ ክፉ የሠሩ ደግሞ በሲኦል ይቆያሉ። ጌታችን ስለ ድሀው አልዓዛር በመላእክት ወደ አብርሃም እቅፍ እንደ ተወሰደ፣ ባለ ጠጋውም በሲኦል በሥቃይ እንደ ነበረ አስተምሯል።",
          },
          vers: ["Luke 16:22-23", "Luke 23:43"],
        },
        {
          tekst: {
            no: "Bibelen taler også om «den annen død». Det er ikke at kroppen dør, men at et menneske blir skilt fra Gud og hans rike for alltid.",
            am: "መጽሐፍ ቅዱስ ስለ «ሁለተኛው ሞት» ይናገራል። ይህም ከእግዚአብሔርና ከመንግሥቱ ለዘላለም መለየት ነው።",
          },
          vers: ["Rev 20:6"],
        },
      ],
    },
    {
      id: "forstegroden",
      tittel: { no: "Kristus – førstegrøden av de døde", am: "ክርስቶስ የትንሣኤያችን በኵር" },
      punkter: [
        {
          tekst: {
            no: "Jesus døde på korset på fredagen. Josef og Nikodemus la ham i en ny grav, og vaktene satte segl på steinen. På den tredje dagen, natt til søndag, stod han opp ved sin egen makt. Han trengte ikke at noen løste likklærne eller åpnet graven.",
            am: "ጌታችን በዕለተ ዓርብ በመስቀል ላይ ሞተ፤ ዮሴፍና ኒቆዲሞስ በአዲስ መቃብር ቀበሩት፤ ጠባቂዎችም በመቃብሩ ላይ ማኅተም አኖሩ። በሦስተኛው ቀን እሑድ በእኩለ ሌሊት «መግነዝ ፍቱልኝ፣ መቃብር ክፈቱልኝ» ሳይል በራሱ ሥልጣን ተነሣ።",
          },
          vers: ["Matt 28:6", "Mark 16:9"],
        },
        {
          tekst: {
            no: "Paulus kaller Kristus «førstegrøden av de hensovede». Slik alle dør i Adam, skal alle gjøres levende i Kristus. Han er den førstefødte fra de døde.",
            am: "ቅዱስ ጳውሎስ «ክርስቶስ ላንቀላፉት በኩራት ሆኖ ከሙታን ተነሥቶአል» ይላል። ሁሉ በአዳም እንደሚሞቱ እንዲሁ ሁሉ በክርስቶስ ሕያዋን ይሆናሉ። እርሱ «መጀመሪያ ከሙታንም በኵር ነው»።",
          },
          vers: ["1Cor 15:20-22", "Col 1:18"],
        },
        {
          tekst: {
            no: "Jesu oppstandelse er ikke som Lasarus' oppstandelse. Lasarus ble vekket opp av en annen og døde senere igjen. Kristus stod opp ved sin egen makt og skal aldri mer dø; døden har ikke lenger makt over ham.",
            am: "የጌታችን ትንሣኤ እንደ አልዓዛር ትንሣኤ አይደለም። አልዓዛር አስነሺ ነበረው፤ ዳግመኛም ሞቷል። ጌታችን ግን በራሱ ሥልጣን ተነሣ፤ ዳግመኛም አይሞትም፤ «ክርስቶስ ከሙታን ተነሥቶ ወደ ፊት እንዳይሞት ሞትም ወደ ፊት እንዳይገዛው እናውቃለንና»።",
          },
          vers: ["Rom 6:9"],
        },
        {
          tekst: {
            no: "Han stod opp av en lukket grav, slik han ble født av jomfru Maria uten at hennes jomfrudom ble brutt. Etterpå kom han inn til apostlene gjennom stengte dører. Likevel kunne de ta på ham, og han spiste sammen med dem. Kroppen hans var virkelig, men herliggjort.",
            am: "ጌታችን ከድንግል ማርያም በኅቱም ድንግልና እንደ ተወለደ እንዲሁ በተዘጋ መቃብር ተነሥቷል። ደጆቹ ተዘግተው ሳሉ ወደ ሐዋርያት ገባ፤ ዳሰሱትም፤ በፊታቸውም በላ። ይህም ከትንሣኤው በኋላ በተዋሕዶ የከበረ መሆኑን ያሳያል።",
          },
          vers: ["John 20:19", "Luke 24:39"],
        },
        {
          tekst: {
            no: "Kirka lærer at etter Kristus stod også vår Frue, den hellige jomfru Maria, opp til evig liv. Hun ventet ikke på den siste oppstandelsen som andre mennesker.",
            am: "ከክርስቶስ ትንሣኤ ቀጥሎ ዘላለማዊ ትንሣኤን የተነሣችው እመቤታችን ቅድስት ድንግል ማርያም ናት፤ እንደ ሌሎች ሰዎች የመጨረሻውን ትንሣኤ አልጠበቀችም።",
          },
        },
        {
          tekst: {
            no: "Om de døde ikke står opp, er heller ikke Kristus stått opp. Og om Kristus ikke er stått opp, er troen vår forgjeves. Derfor er oppstandelsen en av de fem søylene i troen vår.",
            am: "ሙታን የማይነሡ ከሆነ ክርስቶስም አልተነሣም፤ «ክርስቶስም ካልተነሣ እንግዲያስ ስብከታችን ከንቱ ነው እምነታችሁም ደግሞ ከንቱ ናት»። ስለዚህ ቤተ ክርስቲያን ምሥጢረ ትንሣኤ ሙታንን ከአምስቱ አዕማደ ምሥጢር አንዱ አድርጋዋለች።",
          },
          vers: ["1Cor 15:13-14"],
        },
      ],
    },
    {
      id: "profetene",
      tittel: { no: "Profetene talte om oppstandelsen", am: "ትንሣኤ ሙታን በብሉይ ኪዳን" },
      ingress: {
        no: "Oppstandelsen er et håp som profetene lærte lenge før Kristus kom.",
        am: "ትንሣኤ ሙታን ነቢያት አስቀድመው ያስተማሩት ተስፋ ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "Profeten Daniel skrev: Mange av dem som sover i jordens støv, skal våkne, noen til evig liv og noen til skam og evig vanære.",
            am: "ነቢዩ ዳንኤል «በምድርም ትቢያ ውስጥ ካንቀላፉቱ ብዙዎች ይነቃሉ፤ እኵሌቶቹ ወደ ዘላለም ሕይወት፥ እኵሌቶቹም ወደ እፍረትና ወደ ዘላለም ጕስቍልና» ብሏል።",
          },
          vers: ["Dan 12:2"],
        },
        {
          tekst: {
            no: "Profeten Jesaja sa: «Dine døde skal bli levende, mine lik skal opstå», og jorden skal gi de døde tilbake til livet.",
            am: "ነቢዩ ኢሳይያስ «ሙታንህ ሕያዋን ይሆናሉ፥ ሬሳዎችም ይነሣሉ … ምድርም ሙታንን ታወጣለችና» ብሎ ተናግሯል።",
          },
          vers: ["Isa 26:19"],
        },
        {
          tekst: {
            no: "Profeten Esekiel så en dal full av tørre knokler. Gud sa at han ville legge sener og kjøtt på dem, dekke dem med hud og gi dem livsånde, så de ble levende. «Jeg vil åpne gravene deres», sa Herren.",
            am: "ነቢዩ ሕዝቅኤል በደረቁ አጥንቶች የተሞላ ሸለቆ አየ። እግዚአብሔርም «ጅማትም እሰጣችኋለሁ ሥጋንም አወጣባችኋለሁ በእናንተም ላይ ቁርበትን እዘረጋለሁ ትንፋሽንም አገባባችኋለሁ በሕይወትም ትኖራላችሁ» አለ፤ «መቃብራችሁን እከፍታለሁ» አለ።",
          },
          vers: ["Ezek 37:5-6", "Ezek 37:12"],
        },
        {
          tekst: {
            no: "Kong David sang: Du har latt meg se mange trengsler, men du skal gjøre meg levende igjen og føre meg opp fra jordens dyp.",
            am: "ልበ አምላክ ዳዊትም «ብዙ ጭንቀትንና መከራን አሳይተኸኛልና፥ ተመለስህ ሕያውም አደረግኸኝ፤ ከምድር ጥልቅም እንደ ገና አወጣኸኝ» ብሎ ዘምሯል።",
          },
          vers: ["Ps 71:20"],
        },
      ],
    },
    {
      id: "vekket-opp",
      tittel: { no: "De som ble vekket opp fra de døde", am: "ለጊዜው ከሞት የተነሡ ሰዎች" },
      ingress: {
        no: "Bibelen forteller om mennesker som ble vekket opp fra de døde. De er bilder på den store oppstandelsen, for de viser at sjel og kropp kan forenes igjen. Men alle disse døde senere på nytt. Bare oppstandelsen på den siste dagen er for evig.",
        am: "በቅዱሳን ጸሎትና በጌታችን ተአምራት ለጊዜው ከሙታን የተነሡ ሰዎች የትንሣኤ ሙታን ምሳሌዎች ናቸው፤ ነፍስና ሥጋ ዳግመኛ መዋሐድ እንደሚችሉ ያሳያሉና። የእነርሱ ትንሣኤ ግን ዳግመኛ መሞት ያለበት ጊዜያዊ ትንሣኤ ነበር።",
      },
      punkter: [
        {
          tekst: {
            no: "Profeten Elia bad for sønnen til enken i Sarepta, og gutten fikk livet igjen.",
            am: "ነቢዩ ኤልያስ ጸለየ፤ «እግዚአብሔርም የኤልያስን ቃል ሰማ፤ የብላቴናው ነፍስ ወደ እርሱ ተመለሰች»።",
          },
          vers: ["1Kgs 17:21-22"],
        },
        {
          tekst: {
            no: "Profeten Elisja vekket opp sønnen til kvinnen fra Sunem. Senere ble en død mann kastet i Elisjas grav. Da han rørte ved Elisjas ben, ble han levende og reiste seg.",
            am: "ነቢዩ ኤልሳዕ የሱነማይቱን ልጅ አስነሣ። ኋላም አንድ የሞተ ሰው በኤልሳዕ መቃብር ተጣለ፤ «የኤልሳዕንም አጥንት በነካ ጊዜ ሰውዮው ድኖ በእግሩ ቆመ»።",
          },
          vers: ["2Kgs 4:32-35", "2Kgs 13:21"],
        },
        {
          tekst: {
            no: "I byen Nain møtte Jesus et gravfølge. En enke skulle begrave sin eneste sønn. Jesus rørte ved båren og sa: «Du unge mann! jeg sier dig: Stå op!» Den døde satte seg opp og begynte å tale.",
            am: "ጌታችን በናይን ከተማ የመበለቲቱን አንድ ልጅ አስነሣ፤ ቃሬዛውን ነክቶ «አንተ ጐበዝ፥ እልሃለሁ፥ ተነሣ» አለው፤ የሞተውም ቀና ብሎ ተቀመጠ ሊናገርም ጀመረ።",
          },
          vers: ["Luke 7:14-15"],
        },
        {
          tekst: {
            no: "Jairus var forstander for synagogen. Hans tolv år gamle datter døde. Jesus sa til ham: «Frykt ikke, bare tro!» Så tok han jenta i hånden og sa: «Talita kumi» – «Pike! jeg sier dig: Stå op!» Og hun stod opp med en gang.",
            am: "የምኵራቡ አለቃ የኢያኢሮስ የአሥራ ሁለት ዓመት ልጅ ሞተች። ጌታችን «እመን ብቻ እንጂ አትፍራ» አለው። የብላቴናይቱንም እጅ ይዞ «ጣሊታ ቁሚ» አላት፤ ፍችውም «አንቺ ብላቴና ተነሽ እልሻለሁ» ነው፤ ወዲያውም ቆማ ተመላለሰች።",
          },
          vers: ["Mark 5:36", "Mark 5:41-42", "Luke 8:54-55"],
        },
        {
          tekst: {
            no: "Lasarus fra Betania hadde ligget fire dager i graven. Jesus sa til Marta: «Jeg er opstandelsen og livet.» Så ropte han: «Lasarus, kom ut!» Og den døde kom ut, bundet med likklær.",
            am: "የቢታንያው አልዓዛር በመቃብር አራት ቀን ቆይቶ ነበር። ጌታችን ለማርታ «ትንሣኤና ሕይወት እኔ ነኝ» አላት። ከዚያም «አልዓዛር ሆይ፥ ወደ ውጭ ና» ብሎ ጮኸ፤ የሞተውም እጆቹና እግሮቹ በመግነዝ እንደ ተገነዙ ወጣ።",
          },
          vers: ["John 11:25-26", "John 11:43-44"],
        },
        {
          tekst: {
            no: "Da Jesus døde på korset, åpnet gravene seg, og mange av de hellige som sov, stod opp. Senere vekket apostelen Peter opp Tabita i Joppe.",
            am: "ጌታችን በመስቀል ላይ በሞተ ጊዜ መቃብሮች ተከፈቱ፤ ተኝተው ከነበሩትም ከቅዱሳን ብዙ ሥጋዎች ተነሡ። የሐዋርያት አለቃ ቅዱስ ጴጥሮስም ጣቢታን ከሞት አስነሥቷል።",
          },
          vers: ["Matt 27:52-53", "Acts 9:40"],
        },
        {
          tekst: {
            no: "På forklarelsesfjellet (ደብረ ታቦር) viste Moses og Elia seg og talte med Jesus. Moses hadde vært død i rundt 1500 år, og Elia var tatt bort levende. Kirkas lærere sier at dette er et segl på at de døde skal stå opp.",
            am: "በደብረ ታቦር ሙሴና ኤልያስ ተገልጠው ከጌታችን ጋር ተነጋገሩ። ሙሴ ከሞተ አንድ ሺህ አምስት መቶ ዓመት ገደማ ሆኖት ነበር፤ ኤልያስም ተሰውሮ ነበር። ሊቃውንት ይህ «የትንሣኤ ሙታን ማረጋገጫ ማኅተም ነው» ይላሉ።",
          },
          vers: ["Matt 17:3"],
        },
      ],
    },
    {
      id: "kroppen",
      tittel: { no: "Oppstandelseskroppen", am: "ከትንሣኤ በኋላ ያለው ሥጋና ሕይወት" },
      punkter: [
        {
          tekst: {
            no: "Vi skal stå opp i vår egen kropp, men den skal bli forvandlet. Paulus sier: Det blir sådd i forgjengelighet og står opp i uforgjengelighet. Det blir sådd i vanære og står opp i herlighet. Det blir sådd i svakhet og står opp i kraft.",
            am: "የምንነሣው በራሳችን ሥጋ ነው፤ ነገር ግን ይለወጣል። ቅዱስ ጳውሎስ «በመበስበስ ይዘራል፥ ባለመበስበስ ይነሣል፤ በውርደት ይዘራል፥ በክብር ይነሣል፤ በድካም ይዘራል፥ በኃይል ይነሣል» ብሏል።",
          },
          vers: ["1Cor 15:42-44"],
        },
        {
          tekst: {
            no: "«Se, jeg sier eder en hemmelighet»: Når den siste basunen lyder, skal vi alle i et øyeblikk bli forvandlet. De døde skal stå opp uforgjengelige, og det dødelige skal ikle seg udødelighet.",
            am: "«እነሆ፥ አንድ ምሥጢር እነግራችኋለሁ»፤ የኋለኛው መለከት ሲነፋ ሁላችን በቅጽበት ዓይን እንለወጣለን፤ ሙታንም የማይበሰብሱ ሆነው ይነሣሉ፤ ይህ የሚሞተውም የማይሞተውን ይለብሳል።",
          },
          vers: ["1Cor 15:51-53"],
        },
        {
          tekst: {
            no: "Et bilde på dette er kornet som blir sådd. Det må dø i jorden før det kan spire, og Gud gir det en ny skikkelse. Slik er det også med oss.",
            am: "የዚህ ምሳሌ የሚዘራ ዘር ነው፤ ዘር በምድር ፈርሶ ካልሞተ አይበቅልም፤ እግዚአብሔርም እንደ ወደደ አካልን ይሰጠዋል። የእኛም ትንሣኤ እንዲሁ ነው።",
          },
          vers: ["1Cor 15:36-38"],
        },
        {
          tekst: {
            no: "Herligheten blir ikke lik for alle. Solen, månen og stjernene har hver sin glans, og en stjerne skiller seg fra en annen. «Så er det og med de dødes opstandelse.» De rettferdige skal skinne som solen.",
            am: "ክብሩ ለሁሉም እኩል አይደለም፤ «የፀሐይ ክብር አንድ ነው የጨረቃም ክብር ሌላ ነው የከዋክብትም ክብር ሌላ ነው … የሙታን ትንሣኤ ደግሞ እንዲሁ ነው»። ጻድቃንም በአባታቸው መንግሥት እንደ ፀሐይ ይበራሉ።",
          },
          vers: ["1Cor 15:41-42", "Matt 13:43"],
        },
        {
          tekst: {
            no: "Etter oppstandelsen gifter ingen seg. Vi blir som englene, og vi kan aldri mer dø.",
            am: "ከትንሣኤ በኋላ ማግባትና መጋባት የለም፤ እንደ መላእክት እንሆናለን፤ ዳግመኛም ልንሞት አይቻለንም።",
          },
          vers: ["Luke 20:35-36", "Matt 22:30"],
        },
        {
          tekst: {
            no: "Kirkas lærere sier at de rettferdige skal stå opp som fullvoksne mennesker – menn som 30-åringer og kvinner som 15-åringer, slik Adam og Eva var da de ble skapt. Det betyr ikke at vi teller år der. Alder måles etter solen, månen og stjernene, og de skal forgå. Det betyr at vi blir hele og fullkomne mennesker.",
            am: "ሊቃውንት ጻድቃን ወንዶች የ30 ዓመት ጎልማሳ፣ ሴቶች የ15 ዓመት ቆንጆ ሆነው ይነሣሉ ይላሉ፤ አዳምና ሔዋን ሲፈጠሩ እንዲሁ ነበሩና። ይህ ሙሉ ሰው መሆናቸውን ለማስገንዘብ ነው እንጂ ከትንሣኤ በኋላ የሚቆጠር ዕድሜ ኖሮ አይደለም፤ ዕድሜ የሚቆጠረው በፀሐይ፣ በጨረቃና በከዋክብት ነው፤ እነዚህም ያልፋሉ።",
          },
        },
      ],
    },
    {
      id: "gjenkomst",
      tittel: { no: "Jesu gjenkomst (ዳግም ምጽአት)", am: "ዳግም ምጽአት" },
      punkter: [
        {
          tekst: {
            no: "Da Jesus fór opp til himmelen, sa to engler til apostlene: «Denne Jesus … skal komme igjen på samme måte som I så ham fare op til himmelen.»",
            am: "ጌታችን ባረገ ጊዜ መላእክት ለሐዋርያት «የገሊላ ሰዎች ሆይ … ይህ ከእናንተ ወደ ሰማይ የወጣው ኢየሱስ ወደ ሰማይ ሲሄድ እንዳያችሁት፥ እንዲሁ ይመጣል» አሉአቸው።",
          },
          vers: ["Acts 1:11"],
        },
        {
          tekst: {
            no: "Han skal komme i guddommelig herlighet, synlig for alle, slik lynet lyser fra øst til vest. Menneskesønnens tegn skal vise seg på himmelen, og han skal komme på himmelens skyer med kraft og stor herlighet og sende englene sine ut med basunens røst.",
            am: "ዳግመኛ የሚመጣው በግርማ መለኮት ነው፤ «መብረቅ ከምሥራቅ ወጥቶ እስከ ምዕራብ እንደሚታይ» ለሁሉም በአንድ ጊዜ ይታያል። የሰው ልጅ ምልክት በሰማይ ይታያል፤ በኃይልና በብዙ ክብር በሰማይ ደመና ይመጣል፤ መላእክቱንም ከታላቅ መለከት ድምፅ ጋር ይልካቸዋል።",
          },
          vers: ["Matt 24:27", "Matt 24:30-31"],
        },
        {
          tekst: {
            no: "Han kommer med sårene i hendene, føttene og siden. Han kommer for å dømme: for å gi de rettferdige deres rett og dømme syndere og djevelen.",
            am: "የተወጋ ጎኑን የተቸነከረ እጅና እግሩን እያሳየ ይመጣል፤ ለጻድቃን ሊፈርድላቸው፣ ለኃጥአንና ለሰይጣን ሊፈርድባቸው ይመጣል።",
          },
          vers: ["Matt 16:27", "Rev 22:12"],
        },
        {
          tekst: {
            no: "Ingen vet dagen eller timen. Jesus sa at bare Faderen vet den. Kirkas lærere forklarer at dette ikke betyr at Sønnen ikke vet det. Det betyr at dagen kommer plutselig, og at vi alltid må være klare.",
            am: "ቀኑንና ሰዓቱን የሚያውቅ የለም፤ ጌታችን «ከአባት ብቻ በቀር» አለ። ሊቃውንት ይህ ለአብ የሚታወቅ ከወልድ ግን የተሰወረ ማለት አይደለም ይላሉ፤ የጌታ መምጫው ድንገት መሆኑን ያስረዳል፤ ስለዚህ ዘወትር ተዘጋጅተን መኖር ይገባናል።",
          },
          vers: ["Matt 24:36"],
        },
        {
          tekst: {
            no: "Herren skal selv stige ned fra himmelen med et bydende rop, med overengelens røst og Guds basun. De døde i Kristus skal stå opp først. Kirkas lærere sier at det er overengelen Mikael som roper ut at de døde skal stå opp.",
            am: "«ጌታ ራሱ በትእዛዝ በመላእክትም አለቃ ድምፅ በእግዚአብሔርም መለከት ከሰማይ ይወርዳልና፥ በክርስቶስም የሞቱ አስቀድመው ይነሣሉ»። «የሞትህ ተነሥ» የሚለው አዋጅ በመላእክት አለቃ በቅዱስ ሚካኤል ይታወጃል ይላሉ ሊቃውንት።",
          },
          vers: ["1Thess 4:16-17"],
        },
        {
          tekst: {
            no: "Kirkas lærere forteller om tre usynlige basuner (ነጋሪት), som er Herrens befaling. Ved den første samles alt som er blitt borte av kroppen. Ved den andre blir ben, sener og kjøtt satt sammen igjen. Ved den tredje står alle opp – også barn som døde før de ble født – med de gode og onde gjerningene sine.",
            am: "ሊቃውንት ሦስት ረቂቃን ነጋሪት አሉ ይላሉ፤ ነጋሪት ሲባልም የጌታ ትእዛዝ ነው። የመጀመሪያው ሲመታ የፈረሰውና የተበተነው ሁሉ ይሰበሰባል፤ ሁለተኛው ሲመታ አጥንትና ጅማት ከሥጋ ጋር ይያያዛሉ፤ ሦስተኛው ሲመታ በእናቱ ማኅፀን የሞተው ጽንስ ሳይቀር ሁሉም በጎም ሆነ ክፉ ሥራቸውን ይዘው ይነሣሉ።",
          },
          andre: [{ no: "Jakob av Serug (sitert i astemhro.com)", am: "ያዕቆብ ዘሥሩግ (በአስተምህሮ ዘተዋሕዶ እንደ ተጠቀሰው)" }],
        },
        {
          tekst: {
            no: "Hva med Enok og Elia, som ble tatt levende bort? Kirka lærer at ingen mennesker slipper å smake døden. Profeten Malaki sa at Elia skal sendes før Herrens store dag. De skal også dø før oppstandelsen, for det finnes ingen oppstandelse uten død.",
            am: "ሳይሞቱ በብሔረ ሕያዋን ያሉትስ? ከሰው ልጆች ሞትን የማይቀምስ አይኖርም። ነቢዩ ሚልክያስ «ታላቁና የሚያስፈራው የእግዚአብሔር ቀን ሳይመጣ ነቢዩን ኤልያስን እልክላችኋለሁ» ብሏል። በብሔረ ሕያዋን ያሉትም ሞትን ይቀምሳሉ፤ ሳይሞቱ ትንሣኤ ሙታን የለምና።",
          },
          vers: ["Mal 4:5"],
        },
      ],
    },
    {
      id: "dommen",
      tittel: { no: "Den siste dommen", am: "የመጨረሻው ፍርድ" },
      ingress: {
        no: "Når Kristus er kommet igjen og alle døde har stått opp, kommer dommen. Da får hver og en lønn etter det han har gjort.",
        am: "ከጌታችን ምጽአትና ያንቀላፉት ሁሉ ከተነሡ በኋላ ሁሉም እንደ ሠራው የሚያገኝበት የመጨረሻው ቀን ፍርድ አለ።",
      },
      punkter: [
        {
          tekst: {
            no: "Det finnes to slags oppstandelse. De som har gjort godt, står opp til livets oppstandelse, ትንሣኤ ዘለክብር (oppstandelsen til ære). De som har gjort ondt, står opp til dommens oppstandelse, ትንሣኤ ዘለኀሣር (oppstandelsen til skam).",
            am: "ትንሣኤ ሁለት ዓይነት ነው፤ «መልካምም ያደረጉ ለሕይወት ትንሣኤ ክፉም ያደረጉ ለፍርድ ትንሣኤ ይወጣሉ»። የጻድቃን ትንሣኤ ትንሣኤ ዘለክብር፣ የኃጥአን ደግሞ ትንሣኤ ዘለኀሣር ይባላል።",
          },
          vers: ["John 5:28-29", "Acts 24:15"],
        },
        {
          tekst: {
            no: "Menneskesønnen skal sitte på sin herlighets trone, og alle folkeslag skal samles foran ham. Han skal skille dem slik en gjeter skiller sauene fra geitene: sauene til høyre og geitene til venstre.",
            am: "የሰው ልጅ በክብሩ ዙፋን ይቀመጣል፤ አሕዛብም ሁሉ በፊቱ ይሰበሰባሉ፤ «እረኛም በጎቹን ከፍየሎች እንደሚለይ» ይለያቸዋል፤ በጎችን በቀኙ ፍየሎችንም በግራው ያቆማቸዋል።",
          },
          vers: ["Matt 25:31-33"],
        },
        {
          tekst: {
            no: "Abba Hiryakos lærer at Gud ikke har noen høyre eller venstre side; det er et bilde. Den høyre hånden er rett, rask og sterk – slik de rettferdige er rettskafne, raske og sterke i tro og gode gjerninger. Den venstre er skjev, treg og svak – slik synderne er trege til å be, faste og gå i kirken.",
            am: "አባ ሕርያቆስ እንደ ተናገረ ለመለኮት ቀኝና ግራ የለውም፤ ቀኝና ግራ የተባለው ምሳሌያዊ ነው። ቀኝ ቅን፣ ፈጣን፣ ብርቱ ነው፤ ጻድቃንም ለሃይማኖትና ለምግባር ቅኖች፣ ፈጣኖችና ብርቱዎች ናቸው። ግራ ጠማማ፣ ዳተኛና ሰነፍ ነው፤ ኃጥአንም ለጸሎት፣ ለጾም፣ ቤተ ክርስቲያን ለመሄድ ዳተኞች ናቸው።",
          },
        },
        {
          tekst: {
            no: "Hvorfor sauer og geiter? Sauer holder seg der gjeteren setter dem, deler maten i fred og går med bøyd hode. Slik blir de rettferdige i troen som Kristus, gjeteren, gav dem, deler med andre og er ydmyke. Geiter krangler selv om det er nok mat, og strekker hodet høyt – slik er de stolte og grådige.",
            am: "ጻድቃን በበግ፣ ኃጥአን በፍየል የተመሰሉት ስለ ምንድን ነው? በጎች እረኛቸው ባሰማራቸው ስፍራ ጸንተው ይኖራሉ፤ ጥቂት ሣር ቢያገኙ ተፋቅረው አብረው ይበላሉ፤ አቀርቅረውም ይሄዳሉ። ጻድቃንም እረኛቸው ክርስቶስ ባሰማራቸው በአንዲት ሃይማኖት ጸንተው ይኖራሉ፤ ያላቸውን ተካፍለው በትሕትና ይኖራሉ። ፍየሎች ግን ሣሩ ሞልቶ ሳለ ይጣላሉ፤ አሻቅበውም ያያሉ፤ ኃጥአንም ትዕቢተኞችና ስስታሞች ናቸው።",
          },
        },
        {
          tekst: {
            no: "Dommeren spør om kjærlighet i handling: Gav du mat til den sultne og drikke til den tørste? Tok du imot den fremmede, kledde du den nakne og besøkte du den syke og den som satt i fengsel? «Hvad I har gjort imot en av disse mine minste brødre, det har I gjort imot mig.» Tro uten gjerninger er død.",
            am: "በዚያ ቀን የምንጠየቀው ስለ ፍቅር ሥራ ነው፤ የተራበውን አበላህን? የተጠማውን አጠጣህን? እንግዳውን ተቀበልህን? የታረዘውን አለበስህን? የታመመውንና የታሰረውን ጠየቅህን? «ከሁሉ ከሚያንሱ ከእነዚህ ወንድሞቼ ለአንዱ እንኳ ስላደረጋችሁት ለእኔ አደረጋችሁት»። ይህም እምነት ያለ ምግባር ከንቱ መሆኑን ያስረዳናል።",
          },
          vers: ["Matt 25:35-40", "Jas 2:26"],
        },
        {
          tekst: {
            no: "Johannes så de døde, store og små, stå foran tronen. Bøker ble åpnet, også livets bok, og de døde ble dømt etter gjerningene sine. Vi skal også stå til ansvar for hvert unyttig ord vi har sagt.",
            am: "ቅዱስ ዮሐንስ ሙታንን ታናናሾችንና ታላላቆችን በዙፋኑ ፊት ቆመው አየ፤ መጻሕፍትም ተከፈቱ፤ የሕይወት መጽሐፍም ተከፈተ፤ «ሙታንም በመጻሕፍት ተጽፎ እንደ ነበረ እንደ ሥራቸው መጠን ተከፈሉ»። ስለምንናገረው ከንቱ ነገር ሁሉ እንኳ በፍርድ ቀን መልስ እንሰጣለን።",
          },
          vers: ["Rev 20:12", "Matt 12:36", "2Cor 5:10"],
        },
        {
          tekst: {
            no: "Er det rettferdig at Gud straffer for evig, når han er barmhjertig? Kirka svarer: Gud er både barmhjertig (መሐሪ) og rettferdig dommer (ፈታሂ). Fordi han er barmhjertig, frelste han Adam. Fordi han er rettferdig, får hver og en høste det han har sådd.",
            am: "መሐሪ የሆነው አምላክ ኃጥአንን በዘላለም ቅጣት ይቀጣልን? እግዚአብሔር መሐሪም ፈታሂም ነው። መሐሪ ስለ ሆነ አዳምን ቤዛ ሆኖ አዳነው፤ ፈታሂ ስለ ሆነ ደግሞ ሰው የዘራውን ያጭዳል። ክፉዎች ካልተቀጡ ፍትሕ እንዴት ይኖራል?",
          },
          vers: ["Gal 6:7-8"],
        },
      ],
    },
    {
      id: "himmel-helvete",
      tittel: { no: "Himmelriket og helvete", am: "መንግሥተ ሰማያትና ገሃነመ እሳት" },
      punkter: [
        {
          tekst: {
            no: "Paradiset (ገነት) og dødsriket (ሲኦል) er bare ventesteder for sjelene. Etter dommen går de rettferdige inn i himmelriket (መንግሥተ ሰማያት), og synderne går til helvetes ild (ገሃነመ እሳት).",
            am: "ገነትና ሲኦል ጊዜያዊ የነፍሳት መቆያ ናቸው። በመጨረሻው ፍርድ ጻድቃን ወደ መንግሥተ ሰማያት፣ ኃጥአን ደግሞ ወደ ገሃነመ እሳት ይገባሉ።",
          },
          vers: ["Matt 25:46"],
        },
        {
          tekst: {
            no: "Til de rettferdige sier Kongen: «Kom hit, I min Faders velsignede! arv det rike som er beredt eder fra verdens grunnvoll blev lagt!» Der skal Gud tørke bort hver tåre, og det skal ikke være død, sorg, skrik eller smerte mer.",
            am: "ንጉሡ ለጻድቃን «እናንተ የአባቴ ቡሩካን፥ ኑ፤ ዓለም ከተፈጠረበት ጊዜ ጀምሮ የተዘጋጀላችሁን መንግሥት ውረሱ» ይላቸዋል። በዚያ «እንባዎችንም ሁሉ ከዓይኖቻቸው ያብሳል፥ ሞትም ከእንግዲህ ወዲህ አይሆንም»።",
          },
          vers: ["Matt 25:34", "Rev 21:4"],
        },
        {
          tekst: {
            no: "Til dem på venstre side sier han: «Gå bort fra mig, I forbannede, i den evige ild, som er beredt djevelen og hans engler!» Helvete var altså laget for djevelen, ikke for mennesker. Der dør ikke ormen, og ilden slukkes ikke.",
            am: "በግራው ያሉትን ደግሞ «እናንተ ርጉማን፥ ለሰይጣንና ለመላእክቱ ወደ ተዘጋጀ ወደ ዘላለም እሳት ከእኔ ሂዱ» ይላቸዋል። ገሃነም የተዘጋጀው ለሰይጣንና ለመላእክቱ ነው፤ በዚያ ትሉ አይሞትም፤ እሳቱም አይጠፋም።",
          },
          vers: ["Matt 25:41", "Mark 9:48"],
        },
        {
          tekst: {
            no: "Derfor kaller vi det livet som kommer, «ሕይወት ዘይመጽእ». Det varer i all evighet (ለዓለመ ዓለም). Jesus har lovet at den som tror på ham, skal få evig liv, og at han skal vekke ham opp på den siste dag.",
            am: "ስለዚህ የሚመጣውን ሕይወት «ሕይወት ዘይመጽእ» እንለዋለን፤ ለዓለመ ዓለም ይኖራል። ጌታችንም «ልጅንም አይቶ በእርሱ የሚያምን ሁሉ የዘላለም ሕይወትን እንዲያገኝ የአባቴ ፈቃድ ይህ ነው፥ እኔም በመጨረሻው ቀን አስነሣዋለሁ» ብሏል።",
          },
          vers: ["John 6:40"],
        },
      ],
    },
    {
      id: "paske-sondag",
      tittel: { no: "Påsken og søndagen", am: "ፋሲካና ሰንበተ ክርስቲያን" },
      punkter: [
        {
          tekst: {
            no: "Påsken heter ፋሲካ eller ትንሣኤ. Da feirer kirka at Kristus stod opp. Påsken er den største av alle høytidene.",
            am: "የጌታችን ትንሣኤ በዓል ፋሲካ ወይም ትንሣኤ ይባላል። ከበዓላት ሁሉ ዓቢይ የሆነው ይህ ነው።",
          },
          vers: ["Matt 28:6"],
        },
        {
          tekst: {
            no: "I påsketiden (ዘመነ ትንሣኤ) hilser de kristne hverandre med: «ክርስቶስ ተንሥአ እሙታን, በዐቢይ ኃይል ወሥልጣን, አሠሮ ለሰይጣን, አግዐዞ ለአዳም, ሰላም እምይእዜሰ ኮነ ፍሥሐ ወሰላም» – Kristus stod opp fra de døde med stor kraft og makt. Han bandt Satan og satte Adam fri. Fra nå av er det glede og fred.",
            am: "በዘመነ ትንሣኤ ክርስቲያኖች ሲገናኙ «ክርስቶስ ተንሥአ እሙታን፤ በዐቢይ ኃይል ወሥልጣን፤ አሠሮ ለሰይጣን፤ አግዐዞ ለአዳም፤ ሰላም እምይእዜሰ ኮነ ፍሥሐ ወሰላም» እያሉ ሰላም ይባባላሉ። ይህም በጌታችን ትንሣኤ ያገኘነውን ዘላለማዊ ሰላም ለመመስከር ነው።",
          },
          vers: ["John 20:19"],
        },
        {
          tekst: {
            no: "Ved oppstandelsen ble paradisets dør åpnet igjen, djevelens makt ble brutt, og døden mistet sin makt. Derfor kan vi si med Paulus: «Død, hvor er din brodd? Død, hvor er din seier?»",
            am: "በጌታችን ትንሣኤ የገነት ደጅ ተከፈተ፤ የዲያብሎስ አገዛዝ ተሻረ፤ የሞት ሥልጣን ተሻረ። ስለዚህ ከቅዱስ ጳውሎስ ጋር «ሞት ሆይ፥ መውጊያህ የት አለ? ሲኦል ሆይ፥ ድል መንሣትህ የት አለ?» እንላለን።",
          },
          vers: ["1Cor 15:55"],
        },
        {
          tekst: {
            no: "Jesus stod opp på den første dagen i uken, søndag. Derfor er søndagen de kristnes sabbat (ሰንበተ ክርስቲያን). Johannes kaller den «Herrens dag».",
            am: "ጌታችን የተነሣው ከሳምንቱ በፊተኛው ቀን በእሑድ ነው። ስለዚህ እሑድ ሰንበተ ክርስቲያን ናት፤ ቅዱስ ዮሐንስም «የጌታ ቀን» ብሎ ጠርቷታል።",
          },
          vers: ["Mark 16:9", "Rev 1:10"],
        },
        {
          tekst: {
            no: "Søndagen kalles «በኵረ በዓላት», den første og største av høytidene. Den store oppstandelsen skjedde på en søndag. Derfor skal vi den dagen gå i kirken, være med på liturgien (ቅዳሴ), høre Guds ord og ta imot Kristi legeme og blod.",
            am: "የክርስቲያን ሰንበት እሑድ «በኵረ በዓላት» ትባላለች፤ በኵር ታላቅና መጀመሪያ ማለት ነው። የበዓላት ሁሉ ዓቢይ ትንሣኤው የተፈጸመው በዕለተ ሰንበት ነው። ስለዚህ በዕለተ ሰንበት ቅዳሴ ከማስቀደስ፣ ቅዱስ ቃሉን ከመስማት፣ ቅዱስ ሥጋውን ክቡር ደሙን ከመቀበል እንዳናስታጉል በሥርዓተ ቤተ ክርስቲያን ታዘናል።",
          },
        },
        {
          tekst: {
            no: "Påsken skal ikke bare være mat og fest. Kirkas lærere kaller omvendelsen (ንስሐ) og nattverden «den første oppstandelsen». Den som har del i den, skal ikke rammes av den annen død.",
            am: "በዓሉን የምናከብረው በመብላትና በመጠጣት ብቻ መሆን የለበትም። በንስሐና በሥጋ ወደሙ ወደ አምላካችን መመለስ ፊተኛው ትንሣኤ ነው፤ «በፊተኛው ትንሣኤ ዕድል ያለው ብፁዕና ቅዱስ ነው፤ ሁለተኛው ሞት በእነርሱ ላይ ሥልጣን የለውም»።",
          },
          vers: ["Rev 20:6"],
        },
      ],
    },
    {
      id: "fithat",
      tittel: { no: "Bønn for de døde – ፍትሐት og ተዝካር", am: "ጸሎተ ፍትሐትና ተዝካር" },
      ingress: {
        no: "Et menneske dør i kroppen, men lever i sjelen. Derfor ber kirka for sine døde. Dette viser at de kristne som lever på jorden, og de som er gått bort, er ett i troen.",
        am: "ሰው በሥጋው ለጊዜው ቢሞትም በነፍስ ግን ሕያው ነው። ጸሎተ ፍትሐት በዐፀደ ሥጋና በዐፀደ ነፍስ በሚኖሩ ክርስቲያኖች መካከል ያለውን የእምነት አንድነት ይገልጻል።",
      },
      punkter: [
        {
          tekst: {
            no: "ጸሎተ ፍትሐት er en bønn der kirka ber Gud løse den døde fra syndene sine. Ingen kan si: «Jeg har ingen synd, så jeg trenger ikke ፍትሐት.»",
            am: "ጸሎተ ፍትሐት ጸሎት እንደ መሆኑ መጠን ለኃጢአት ማስተስረያ ይሆን ዘንድ ይቀርባል። «ኃጢአት የለብንም ብንል ራሳችንን እናስታለን»፤ ስለዚህ ኃጢአት የለብኝም፣ ፍትሐት አያስፈልገኝም ማለት የሚችል ሰው የለም።",
          },
          vers: ["1John 1:8"],
        },
        {
          tekst: {
            no: "ተዝካር kommer av ge'ez «ዘከረ», å minnes. Det er en minnestund for de døde med bønn, offer, lys og røkelse. Både ፍትሐት og ተዝካር er bønn, ikke et festmåltid.",
            am: "«ተዝካር» የሚለው ቃል «ዘከረ» (አሰበ) ከሚለው የግዕዝ ግሥ የወጣ ሲሆን መታሰቢያ ማለት ነው። ለሙታን የሚደረግ ሲሆን በጸሎት፣ በመሥዋዕት፣ በመብራትና በማዕጠንት ይቀርባል። ጸሎተ ፍትሐትም ሆነ ተዝካር ጸሎት እንጂ ድግስ አይደሉም።",
          },
          vers: ["Prov 10:7"],
          andre: [
            {
              no: "Sirak 38:16: «Mitt barn, gråt over den døde … hold minnestund (ተዝካር) for ham etter landets skikk.»",
              am: "ሲራክ 38፥16፤ «ልጄ ለሞተ ሰው አልቅስለት እዘንለት፤ እንደ አገሩ ተዝካር አውጣለት።»",
            },
          ],
        },
        {
          tekst: {
            no: "Hvorfor ber vi for de døde? Fordi Guds barmhjertighet ikke har noen grense. Jesus sa: «Dersom I beder mig om noget i mitt navn, så vil jeg gjøre det.» Han sa også at noen synder ikke blir tilgitt verken i denne verden eller i den kommende. Kirka forstår det slik at andre synder kan bli tilgitt også i den kommende verden.",
            am: "ለሙታን የምንጸልየው ለምንድን ነው? የእግዚአብሔር ቸርነት ወሰን የለውምና። ጌታችን «ማናቸውንም ነገር በስሜ ብትለምኑ እኔ አደርገዋለሁ» ብሏል። ደግሞም «በዚህ ዓለም ቢሆን ወይም በሚመጣው አይሰረይለትም» ያለው ኃጢአት እንዳለ ሁሉ በሚመጣው ዓለም የሚሰረይ ኃጢአትም እንዳለ ያመለክታል።",
          },
          vers: ["John 14:14", "Matt 12:32"],
        },
        {
          tekst: {
            no: "Jairus' datter ble vekket opp på grunn av farens tro, selv om hun selv var død. Slik tror kirka at Gud hører bønnen som de levende ber med tro for sine døde søsken.",
            am: "የምኵራቡ አለቃ ልጅ በአባቷ እምነት ከሞት እንደ ተነሣች፣ ዛሬም ክርስቲያኖች በሞት ለተለዩ ወገኖቻቸው በእምነት ቢጸልዩ ጌታ እንደ እምነታቸው ያደርግላቸዋል ብላ ቤተ ክርስቲያን ታምናለች።",
          },
          vers: ["Mark 5:36"],
        },
        {
          tekst: {
            no: "Kirka ber ፍትሐት og holder ተዝካር for dem som døde fast i troen. For dem som forlot troen og levde i synd uten å omvende seg, holder kirka ikke ፍትሐት.",
            am: "ቤተ ክርስቲያን ጸሎተ ፍትሐትና ተዝካር የምታደርገው በሃይማኖታቸው ጸንተው ለሞቱ ምእመናን ነው። ሃይማኖታቸውን ክደው ንስሐ ሳይገቡ በኃጢአት ኖረው ለሞቱ ግን ጸሎተ ፍትሐት እንዲደረግ አትፈቅድም።",
          },
        },
        {
          tekst: {
            no: "Bønnen går begge veier. Kirka lærer at de døde ber for de levende, og de levende for de døde.",
            am: "ጸሎቱ ከሁለቱም ወገን ነው፤ በዐፀደ ነፍስ ያሉ ሙታን በዐፀደ ሥጋ ላሉት እንደሚጸልዩ ሁሉ በዐፀደ ሥጋ ያሉትም በሞት ለተለዩት ይጸልያሉ።",
          },
          andre: [
            {
              no: "Enoks bok (sitert i astemhro.com): «De levende ber for de døde, og de døde for de levende.»",
              am: "መጽሐፈ ሄኖክ (በአስተምህሮ ዘተዋሕዶ እንደ ተጠቀሰው)፤ «ሕያዋን ለሙታን፣ ሙታን ለሕያዋን ይጸልያሉ።»",
            },
          ],
        },
      ],
    },
    {
      id: "i-livet",
      tittel: { no: "Hva betyr oppstandelsen for oss?", am: "ትንሣኤ ሙታን ለእኛ ምን ማለት ነው?" },
      punkter: [
        {
          tekst: {
            no: "Vi sørger ikke som de som ikke har noe håp. Når noen vi er glad i, dør, vet vi at Gud skal føre dem fram sammen med Jesus.",
            am: "ወዳጆቻችን ቢሞቱብን እንኳ ተስፋ እንደሌላቸው አናዝንም፤ «በኢየሱስ ያንቀላፉቱን እግዚአብሔር ከእርሱ ጋር ያመጣቸዋልና»።",
          },
          vers: ["1Thess 4:13-14"],
        },
        {
          tekst: {
            no: "Oppstandelsen gir oss mot. Kirkas lærere sier at den som kjenner de fem mysteriene, ikke blir redd når noen truer ham for troens skyld, for han håper på oppstandelsen.",
            am: "ትንሣኤ ሙታን ብርታት ይሰጠናል። አዕማደ ምሥጢርን ያወቀ ሰው ስለ እምነቱ ቢያስፈራሩት ትንሣኤ ሙታንን ተስፋ ያደርጋል።",
          },
          vers: ["2Cor 4:14"],
        },
        {
          tekst: {
            no: "Hjemlandet vårt er i himmelen. Derfra venter vi Frelseren, Jesus Kristus, som skal forvandle vår svake kropp så den blir lik hans herlige kropp.",
            am: "«እኛ አገራችን በሰማይ ነውና»፤ ከዚያም የሚመጣውን መድኃኒት ጌታን ኢየሱስ ክርስቶስን እንጠባበቃለን፤ እርሱም የተዋረደውን ሥጋችንን ክቡር ሥጋውን እንዲመስል ይለውጣል።",
          },
          vers: ["Phil 3:20-21"],
        },
        {
          tekst: {
            no: "Vi må holde fast ved troen og vise den i gjerninger. Gode gjerninger begynner hjemme: å lytte til foreldrene, være lydig og leve i kirkas orden. Slik får vi høre: «Kom hit, I min Faders velsignede!»",
            am: "በእምነታችን ጸንተን ያመንነውን በሥራ መግለጥ አለብን። መልካም ሥራ የሚጀምረው ከቤታችን ነው፤ የወላጅን ምክር በመፈጸም፣ በመታዘዝ፣ ሥርዓትን ይዘን በመኖር። እንዲህ ብንኖር «እናንተ የአባቴ ቡሩካን፥ ኑ» የሚለውን የሕይወት ቃል እንሰማለን።",
          },
          vers: ["Matt 25:34"],
        },
        {
          tekst: {
            no: "Hver gang vi sier trosbekjennelsen, sier vi: «ወንሴፎ ትንሣኤ ሙታን» – vi håper på de dødes oppstandelse. Og hver gang vi feirer liturgien, sier vi at vi forkynner Herrens død og hellige oppstandelse og tror på hans himmelfart og gjenkomst.",
            am: "ጸሎተ ሃይማኖትን በጸለይን ቍጥር «ወንሴፎ ትንሣኤ ሙታን» እንላለን። በቅዳሴም ጊዜ የጌታችንን ሞቱን እንደምንናገር፣ ቅድስት ትንሣኤውንም፣ ዕርገቱንና ዳግም ምጽአቱንም እንደምናምን እንመሰክራለን።",
          },
          vers: ["1Cor 11:26"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Epifanius av Kypros", am: "ቅዱስ ኤጲፋንዮስ" },
      tekst: {
        no: "«Vår Herre Jesus Kristus er førstegrøden av de dødes oppstandelse. Han er den første som stod opp til en oppstandelse der det ikke finnes død. Døden skal aldri mer nå ham.»",
        am: "«ጌታችን ኢየሱስ ክርስቶስ ግን የሙታን ትንሣኤያቸው በኩር ነው፤ እንግዲ ወዲህም ሞት የሌለበትን ትንሣኤ አስቀድሞ የተነሣ እርሱ ነው፤ ዳግመኛ ሞት አያገኘውም።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ኤጲፋንዮስ 57:5 (sitert i eotcmk.org: ምሥጢረ ትንሣኤ ሙታን)",
    },
    {
      navn: { no: "Hellige Epifanius av Kypros", am: "ቅዱስ ኤጲፋንዮስ" },
      tekst: {
        no: "«Kornet som blir sådd, lærer oss om oppstandelsen. Det blir sådd i jorden og spirer igjen. Slik står også mennesket opp etter at det er begravet. Frøene råtner først i jorden, og etter mange dager lar jorden det som ble sådd, spire. Om de ikke råtnet, ville de ikke spire.»",
        am: "«ከታጨደ ከተቆረጠ በኋላ በእርሻ የሚዘራ ዘር የትንሣኤን ነገር ያስረዳናል … ከተዘራ በኋላ ዳግመኛ ይበቅላል፤ ሰውም ከተቀበረ በኋላ ይነሣል … ፍሬዎችም ይዘራሉ፤ አስቀድመውም በምድር ውስጥ ይፈርሳሉ፤ ይበሰብሳሉ፤ ከብዙ ቀንም በኋላ ምድር የዘሩባትን ታበቅላለች፤ ካልፈረሱም አይበቅሉም።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ኤጲፋንዮስ 58:5 (sitert i eotcmk.org: ምሥጢረ ትንሣኤ ሙታን)",
    },
    {
      navn: { no: "Hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "Han sammenligner med dragen som folket i Babylon tilba: Da den slukte maten Daniel hadde laget, sprakk den. Slik ble døden beseiret da den slukte Herrens legeme, og Herren stod levende opp fra de døde. (Omskrevet.)",
        am: "የባቢሎን ሰዎች ያመልኩት የነበረ ዘንዶ ዳንኤል ያዘጋጀለትን መብል በተቀበለ ጊዜ ከሁለት እንደ ተከፈለ፣ እንዲሁ ሞት የጌታን ሥጋ በዋጠ ጊዜ ድል ተነሣ፤ ጌታም ሕያው ሆኖ ከሙታን ተለይቶ ተነሣ።",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ዮሐንስ አፈወርቅ (gjengitt i eu.eotcmk.org: ትንሣኤ)",
    },
    {
      navn: { no: "Ammonius og Eusebius", am: "አሞኒዮስና አውሳብዮስ" },
      tekst: {
        no: "«Han stod opp for å lære oss om oppstandelsen av våre kropper.»",
        am: "«የሥጋችንን ትንሣኤ ያስተምረን ዘንድ ተነሣ።»",
      },
      kilde: "Innledningen til evangeliene, sitert i ethiopianorthodox.org: The Faith of the Church – The Mystery of the Resurrection (amharisk oversatt fra engelsk)",
    },
    {
      navn: { no: "Fedrenes trosbekjennelse", am: "ቀደምት አበው በሃይማኖት ድንጋጌ" },
      tekst: {
        no: "«Vi tror at de døde, både rettferdige og syndere, skal stå opp. Og vi tror at det kommer en dommens dag, da hver og en får lønn etter det han har gjort.»",
        am: "«ዳግመኛም የሞቱ የጻድቃንና የኃጥአን ትንሣኤ እንዳለ እናምናለን፤ ሁሉ እንደ ሥራው ፍዳውን የሚቀበልበት የፍርድ ቀንም እንዳለ እናምናለን።»",
      },
      kilde: "Sitert i astemhro.com: ምስጢረ ትንሣኤ ሙታን, og i ethiopianorthodox.org: The Faith of the Church",
    },
  ],
  ord: [
    { ord: "ትንሣኤ", forklaring: { no: "oppstandelse (av ተንሥአ, å stå opp)", am: "መነሣት" } },
    { ord: "ትንሣኤ ሙታን", forklaring: { no: "de dødes oppstandelse", am: "የሙታን መነሣት" } },
    { ord: "ወንሴፎ", forklaring: { no: "«vi håper» (ge'ez, fra trosbekjennelsen)", am: "ተስፋ እናደርጋለን" } },
    { ord: "በኵር", forklaring: { no: "førstegrøde, den første", am: "መጀመሪያ፣ ታላቅ" } },
    { ord: "ዳግም ምጽአት", forklaring: { no: "Kristi gjenkomst", am: "የጌታችን ዳግመኛ መምጣት" } },
    { ord: "ገነት", forklaring: { no: "paradiset – der de rettferdiges sjeler venter", am: "የጻድቃን ነፍሳት መቆያ" } },
    { ord: "ሲኦል", forklaring: { no: "dødsriket – der synderes sjeler venter", am: "የኃጥአን ነፍሳት መቆያ" } },
    { ord: "መንግሥተ ሰማያት", forklaring: { no: "himmelriket", am: "የጻድቃን ዘላለማዊ ርስት" } },
    { ord: "ገሃነመ እሳት", forklaring: { no: "helvetes ild", am: "ለሰይጣንና ለመላእክቱ የተዘጋጀ የዘላለም እሳት" } },
    { ord: "ትንሣኤ ዘለክብር · ትንሣኤ ዘለኀሣር", forklaring: { no: "oppstandelse til ære · oppstandelse til skam", am: "የጻድቃን ትንሣኤ · የኃጥአን ትንሣኤ" } },
    { ord: "ፍትሐት", forklaring: { no: "bønn om at den døde blir løst fra syndene", am: "ስለ ሙታን የሚደረግ የፍትሐት ጸሎት" } },
    { ord: "ተዝካር", forklaring: { no: "minnestund for de døde (av ዘከረ, å minnes)", am: "መታሰቢያ" } },
    { ord: "ፋሲካ", forklaring: { no: "påsken", am: "የትንሣኤ በዓል" } },
    { ord: "ሰንበተ ክርስቲያን", forklaring: { no: "de kristnes sabbat – søndagen", am: "እሑድ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ትንሣኤ ሙታን?", am: "«ትንሣኤ ሙታን» ማለት ምን ማለት ነው?" },
      svar: {
        no: "De dødes oppstandelse: at sjel og kropp, som ble skilt ved døden, skal forenes igjen på den siste dagen, i en kropp som aldri mer skal dø.",
        am: "የሙታን መነሣት ማለት ነው፤ በሞት የተለያዩት ነፍስና ሥጋ በመጨረሻው ቀን ዳግመኛ ተዋሕደው በማይሞት ሥጋ መነሣታቸው ነው።",
      },
    },
    {
      sporsmal: { no: "Hvorfor sier trosbekjennelsen ወንሴፎ og ikke ወነአምን her?", am: "ጸሎተ ሃይማኖት በዚህ «ወነአምን» ሳይሆን «ወንሴፎ» የሚለው ለምንድን ነው?" },
      svar: {
        no: "Fordi oppstandelsen ennå ikke har skjedd. Vi tror den og håper på den.",
        am: "ትንሣኤ ሙታን ገና ስላልተፈጸመ ነው፤ አምነን ተስፋ እናደርገዋለን።",
      },
    },
    {
      sporsmal: { no: "Hvorfor kalles Kristus «førstegrøden»?", am: "ክርስቶስ «በኵር» የተባለው ለምንድን ነው?" },
      svar: {
        no: "Fordi han var den første som stod opp til evig liv og aldri skal dø igjen. Lasarus og de andre døde senere på nytt (1 Kor 15,20).",
        am: "ዳግመኛ ሞት የሌለበትን ትንሣኤ አስቀድሞ የተነሣ እርሱ ስለ ሆነ ነው፤ አልዓዛርና ሌሎቹ ግን ዳግመኛ ሞተዋል (1ቆሮ 15፥20)።",
      },
    },
    {
      sporsmal: { no: "Nevn noen som ble vekket opp fra de døde i Bibelen.", am: "በመጽሐፍ ቅዱስ ከሞት የተነሡትን ጥቀስ።" },
      svar: {
        no: "Enkens sønn i Sarepta (ved Elia), sønnen til kvinnen fra Sunem (ved Elisja), enkens sønn i Nain, Jairus' datter og Lasarus (ved Jesus) og Tabita (ved Peter).",
        am: "በኤልያስ ጸሎት የተነሣው ብላቴና፣ ኤልሳዕ ያስነሣው የሱነማይቱ ልጅ፣ ጌታችን ያስነሣቸው የናይኑ መበለት ልጅ፣ የኢያኢሮስ ልጅና አልዓዛር፣ ቅዱስ ጴጥሮስ ያስነሣት ጣቢታ።",
      },
    },
    {
      sporsmal: { no: "Hvor er sjelene fram til oppstandelsen?", am: "እስከ ትንሣኤ ሙታን ድረስ ነፍሳት የት ይቆያሉ?" },
      svar: {
        no: "De rettferdiges sjeler er i paradiset (ገነት), synderes sjeler i dødsriket (ሲኦል). Det er bare ventesteder.",
        am: "የጻድቃን ነፍሳት በገነት፣ የኃጥአን ነፍሳት በሲኦል ይቆያሉ፤ እነዚህ ጊዜያዊ መቆያዎች ናቸው።",
      },
    },
    {
      sporsmal: { no: "Hva spør Kongen om på dommens dag (Matt 25)?", am: "በፍርድ ቀን ንጉሡ የሚጠይቀው ምንድን ነው (ማቴ 25)?" },
      svar: {
        no: "Om vi gav mat til den sultne og drikke til den tørste, tok imot den fremmede, kledde den nakne og besøkte den syke og den som satt i fengsel.",
        am: "የተራበውን አብልተን፣ የተጠማውን አጠጥተን፣ እንግዳውን ተቀብለን፣ የታረዘውን አልብሰን፣ የታመመውንና የታሰረውን ጠይቀን እንደ ሆነ ነው።",
      },
    },
    {
      sporsmal: { no: "Hvorfor er søndagen hellig for de kristne?", am: "እሑድ ለክርስቲያኖች ቅድስት የሆነችው ለምንድን ነው?" },
      svar: {
        no: "Fordi Jesus stod opp fra de døde på den første dagen i uken. Den kalles ሰንበተ ክርስቲያን og በኵረ በዓላት.",
        am: "ጌታችን ከሳምንቱ በፊተኛው ቀን ከሙታን ስለ ተነሣ ነው፤ ሰንበተ ክርስቲያንና በኵረ በዓላት ትባላለች።",
      },
    },
    {
      sporsmal: { no: "Hva er ፍትሐት og ተዝካር?", am: "ፍትሐትና ተዝካር ምንድን ናቸው?" },
      svar: {
        no: "ፍትሐት er bønn om at den døde blir løst fra syndene. ተዝካር er minnestund med bønn. Begge er bønn, ikke fest, og holdes for dem som døde i troen.",
        am: "ፍትሐት ለሙታን የኃጢአት ማስተስረያ ሆኖ የሚቀርብ ጸሎት ነው፤ ተዝካር መታሰቢያ ነው። ሁለቱም ጸሎት እንጂ ድግስ አይደሉም፤ በሃይማኖታቸው ጸንተው ለሞቱ ይደረጋሉ።",
      },
    },
  ],
  kilder: [
    { navn: "አስተምህሮ ዘተዋሕዶ: ምስጢረ ትንሣኤ ሙታን፡ የሙታንን መነሣት ተስፋ እናደርጋለን የሚመጣውንም ሕይወት ለዘለዓለሙ!", url: "https://astemhro.com/2018/12/21/mystery_resurrection/" },
    { navn: "ማኅበረ ቅዱሳን (ዲያቆን ተስፋዬ ቻይ): ምሥጢረ ትንሣኤ ሙታን", url: "https://eotcmk.org/a/%E1%88%9D%E1%88%A5%E1%8C%A2%E1%88%A8-%E1%89%B5%E1%8A%95%E1%88%A3%E1%8A%A4-%E1%88%99%E1%89%B3%E1%8A%95/" },
    { navn: "Mahibere Kidusan (EOTC Sunday School Department): Mystery of The Resurrection of the Dead", url: "https://eotcmk.org/e/mystery-of-the-resurrection-of-the-dead/" },
    { navn: "ማኅበረ ቅዱሳን አውሮፓ ማእከል (ዲ/ን ብሩክ አሸናፊ): ትንሣኤ", url: "https://eu.eotcmk.org/site/easter/" },
    { navn: "ማኅበረ ቅዱሳን: ቅድስት (om ሰንበተ ክርስቲያን)", url: "https://eotcmk.org/a/%E1%89%85%E1%8B%B5%E1%88%B5%E1%89%B5-2/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Faith of the Church – The Mystery of the Resurrection", url: "https://www.ethiopianorthodox.org/english/dogma/faith.html" },
    { navn: "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን: ተዝካርና ፍትሐት", url: "https://www.ethiopianorthodox.org/amharic/tiyakenamelse/qanda/tezkarenafitehat.pdf" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ጸሎተ ሃይማኖት፡ እንዲህ እናምናለን፤ እንዲህም እንታመናለን!", url: "https://astemhro.com/2026/02/07/creed_of_faith/" },
  ],
  utkast: true,
};
