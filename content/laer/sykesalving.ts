import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ቀንዲል:
// søndagsskoleboka «ሥርዓተ ቤተ ክርስቲያን» for 8. klasse, kapittel 1 og 8 (ምሥጢረ ቀንዲል, lest via Scribd),
// Mahibere Kidusans søndagsskoleserie «ሰባቱ ምሥጢራተ ቤተ ክርስቲያን» del 3 (eotcmk.org, som viser til
// læreboka «ትምህርተ ሃይማኖትና ክርስቲያናዊ ሕይወት»), ethiopianorthodox.org (The Sacrament of the Unction of the
// Sick, etter Rev. Marcos Daoud, Addis Abeba 1952), St. Kidane Mihiret EOTC Kansas City (ምሥጢረ ቀንዲል),
// Sewasew-leksikonet (ምሥጢረ ቀንዲል), Abyssinica-ordboka (ቀንዲል, መጽሐፈ ቀንዲል) og Memhir Temesgen Zegeye
// (ጠበል ምንድን ነው?). Den koptisk-ortodokse kirkas side om salving av syke (copticchurch.net) er brukt som
// støtte for de sju lampene/vekene og for det kirkefedrene sier.
// Usikkert: Hvor mange prester som ber. 8.-klasseboka sier i kapittel 1 at ቀንዲል utføres av «sju prester»
// (ሰባት ካህናት), og i kapittel 8 at skriftefaren gjør det «sammen med andre prester». ethiopianorthodox.org
// sier at kirka har sju bønner, og at prester (eller en biskop) utfører det. Den koptiske siden nevner sju
// bønner og sju veker, men ikke sju prester. Siden sier dette slik kildene sier det, uten å avgjøre hva som er
// vanlig i menigheten i dag.
// Usikkert: 8.-klasseboka sier at ordet ቀንዲል kommer av det latinske ordet for lys (candela). Vi har ikke
// sjekket ordets historie i andre kilder; siden skriver bare at ordet betyr lampe og nevner det latinske ordet.
// Usikkert: At de første kristne tente sju lamper, står i 8.-klasseboka. At hver lampe (i dag hver veke) tennes
// ved begynnelsen av hver bønn, står bare i den koptiske kilden. Vi har ikke funnet en etiopisk beskrivelse av
// hvor mange lamper som brukes i dag.
// Usikkert: Ingen av kildene sier med rene ord at ጸበል «ikke er et sakrament». Det er utledet av at kirka teller
// sju sakramenter, og at ጸበል ikke er blant dem (samme vurdering som på sakramentsiden).
// Usikkert: Sitatene fra kirkefedrene er fra den koptiske siden og ethiopianorthodox.org (engelsk).
// De amhariske tekstene er våre egne oversettelser og er merket slik.
export const sykesalving: Tema = {
  slug: "sykesalving",
  del: "sakramentene",
  tittel: { no: "Salving av syke", am: "ምሥጢረ ቀንዲል" },
  undertittel: {
    no: "Helbredelse for kropp og sjel",
    am: "የሥጋና የነፍስ ፈውስ",
  },
  bilde: "mariaIkon",
  ingress: {
    no:
      "Salving av syke (ምሥጢረ ቀንዲል) er sakramentet der prestene ber for en som er syk, og salver ham med hellig olje. Ved Guds nåde blir den syke helbredet, både i kroppen og i sjelen, og får syndene tilgitt. Jesus sendte apostlene for å helbrede de syke, og Jakob skriver at den som er syk, skal kalle på kirkas prester.",
    am:
      "ምሥጢረ ቀንዲል ካህናት ለታመመው ክርስቲያን ጸልየው ቅብዐ ቅዱስ የሚቀቡበት ምሥጢር ነው። በእግዚአብሔር ጸጋ ታማሚው ከደዌ ሥጋና ከደዌ ነፍስ ይፈወሳል፤ ኃጢአቱም ይሰረይለታል። ጌታችን ሐዋርያትን ድውያንን እንዲፈውሱ ላካቸው፤ ቅዱስ ያዕቆብም የታመመ ሰው የቤተ ክርስቲያንን ቀሳውስት እንዲጠራ ጽፏል።",
  },
  hovedvers: "Jas 5:14-15",
  avsnitt: [
    {
      id: "navnet",
      tittel: { no: "Hva betyr ቀንዲል?", am: "«ቀንዲል» ማለት ምን ማለት ነው?" },
      punkter: [
        {
          tekst: {
            no: "ቀንዲል betyr lampe – et lys som brenner med olje. 8.-klasseboka forklarer at ordet henger sammen med det latinske ordet for lys (candela). Sakramentet har fått navnet etter lampen som brenner ved siden av den syke mens bønnene blir bedt.",
            am: "ቀንዲል ማለት መብራት፣ በዘይት የሚበራ ማብሪያ ማለት ነው። ቃሉ ካንድል ከሚለው የላቲን ቃል የተገኘ ነው ይባላል። ስያሜውን ያገኘው በታመመው ሰው አጠገብ ሥርዓተ ጸሎቱ ሲፈጸም ከሚበራው መብራት ነው።",
          },
        },
        {
          tekst: {
            no: "Å bruke lamper i bønnen begynte allerede i Det gamle testamentet. I møteteltet skulle Moses tenne lampene på lysestaken, og de brant med ren olivenolje. Den amhariske Bibelen kaller disse lampene ቀንዲል.",
            am: "መብራትን በጸሎት ጊዜ መጠቀም በብሉይ ኪዳን የተጀመረ ሥርዓት ነው። ሙሴ በድንኳኑ ውስጥ «መቅረዙንም አግብተህ ቀንዲሎቹን ትለኵሳለህ» ተብሎ ታዘዘ፤ መብራቱም በጥሩ የወይራ ዘይት ይበራ ነበር።",
          },
          vers: ["Exod 40:4", "Num 4:9", "Exod 27:20"],
        },
        {
          tekst: {
            no: "De første kristne tente sju lamper når dette sakramentet ble utført. Fordi oljen i lampen ble brukt til å salve de syke, ble både oljen og sakramentet kalt ቀንዲል.",
            am: "የጥንት ክርስቲያኖች ምሥጢረ ቀንዲል በሚፈጸምበት ወቅት ሰባት መብራት ያበሩ ነበር። በመብራቱ ያለው ዘይት ለሕሙማን ድኅነት የሚቀባ ስለሆነ ቅብዐ ዘይቱም ምሥጢሩም ቀንዲል ተባለ።",
          },
        },
        {
          tekst: {
            no: "Oljen kalles også ቅብዐ ቅዱስ (hellig salve) eller ቅብዐ ቀንዲል. Boka med bønnene som blir lest over oljen, heter መጽሐፈ ቀንዲል, og bønnene heter ጸሎተ ቀንዲል.",
            am: "ዘይቱ ቅብዐ ቅዱስ ወይም ቅብዐ ቀንዲል ይባላል። በዘይቱ ላይ የሚነበበው የሚጸለየው መጽሐፍ መጽሐፈ ቀንዲል፣ ጸሎቱም ጸሎተ ቀንዲል ይባላል።",
          },
        },
        {
          tekst: {
            no: "ምሥጢረ ቀንዲል er altså sakramentet der den syke blir salvet med velsignet olje gjennom prestens bønn og velsignelse, og får helbredelse fra sykdommen og renselse fra syndene. Det er for dem som er syke i kroppen, som er skadet i en ulykke, eller som er syke i sjelen.",
            am: "ምሥጢረ ቀንዲል በካህኑ ጸሎትና ቡራኬ በሽተኛውን ሰው በተባረከው ዘይት በመቀባት ከበሽታው መዳንን፣ ከኃጢአቱም መንጻትን የሚያስገኝ ምሥጢር ነው። በደዌ ሥጋ ለሚሰቃዩ፣ በድንገተኛ አደጋ ለቆሰሉና በደዌ ነፍስ ለተያዙ ሕሙማን ይፈጸማል።",
          },
        },
      ],
    },
    {
      id: "innstiftet",
      tittel: { no: "Jesus innstiftet ቀንዲል", am: "ምሥጢረ ቀንዲልን የመሠረተው ጌታችን ነው" },
      punkter: [
        {
          tekst: {
            no: "Jesus kom som en lege: «Det er ikke de friske som trenger lege, men de syke.» Han helbredet de syke i kroppen ved under, og de syke i sjelen ved læren sin. Han gikk omkring i byene og landsbyene og helbredet all sykdom.",
            am: "ጌታችን እንደ ባለ መድኃኒት መጣ፤ «ሕመምተኞች እንጂ ብርቱዎች ባለ መድኃኒት አያስፈልጋቸውም» አለ። ሕሙማነ ሥጋን በተአምራት፣ ሕሙማነ ነፍስን በትምህርት አዳነ፤ በከተማዎችና በመንደሮች ሁሉ እየዞረ ደዌንና ሕማምን ሁሉ ፈወሰ።",
          },
          vers: ["Mark 2:17", "Matt 9:35"],
        },
        {
          tekst: {
            no: "Han ga de tolv apostlene makt til å helbrede all sykdom og plage, og sendte dem ut: «Helbred syke … for ingenting har dere fått det, for ingenting skal dere gi det.»",
            am: "ለአሥራ ሁለቱ ደቀ መዛሙርቱ ደዌንና ሕማምን ሁሉ እንዲፈውሱ ሥልጣን ሰጣቸው፤ «ድውዮችን ፈውሱ … በከንቱ ተቀበላችሁ፥ በከንቱ ስጡ» ብሎ ላካቸው።",
          },
          vers: ["Matt 10:1", "Matt 10:8"],
        },
        {
          tekst: {
            no: "Apostlene gikk ut, forkynte omvendelse, drev ut onde ånder og salvet mange syke med olje og helbredet dem.",
            am: "ሐዋርያትም ወጥተው ንስሐ እንዲገቡ ሰበኩ፤ ብዙ አጋንንትን አወጡ፤ ብዙ ድውዮችንም ዘይት እየቀቡ ፈወሱአቸው።",
          },
          vers: ["Mark 6:12-13"],
        },
        {
          tekst: {
            no: "Etter oppstandelsen lovte Jesus at de som tror, skal legge hendene på de syke, og de skal bli friske.",
            am: "ከትንሣኤውም በኋላ ያመኑትን ምልክቶች እንደሚከተሏቸው፣ «እጃቸውን በድውዮች ላይ ይጭናሉ እነርሱም ይድናሉ» ብሎ ተናገረ።",
          },
          vers: ["Mark 16:17-18"],
        },
        {
          tekst: {
            no: "Jakob skriver hvordan kirka skal gjøre det: «Er noen av dere syk, skal han kalle til seg kirkas eldste (prestene). De skal salve ham med olje i Herrens navn og be for ham. Troens bønn skal frelse den syke, Herren skal reise ham opp, og har han gjort synder, skal de bli tilgitt.»",
            am: "ቅዱስ ያዕቆብ ቤተ ክርስቲያን እንዴት እንደምትፈጽመው ጻፈ፤ «ከእናንተ የታመመ ማንም ቢኖር የቤተ ክርስቲያንን ሽምግሌዎች ወደ እርሱ ይጥራ፤ በጌታም ስም እርሱን ዘይት ቀብተው ይጸልዩለት። የእምነትም ጸሎት ድውዩን ያድናል ጌታም ያስነሣዋል፤ ኃጢአትንም ሠርቶ እንደ ሆነ ይሰረይለታል።»",
          },
          vers: ["Jas 5:14-15"],
        },
        {
          tekst: {
            no: "Apostlene fant ikke på dette selv. De kalte seg forvaltere av Guds hemmeligheter og forkynte det de hadde fått fra Herren. Derfor har Jakob lært dette av Jesus selv. Kirka har gjort det siden de første århundrene.",
            am: "ሐዋርያት ይህን በራሳቸው አልመሠረቱትም፤ ራሳቸውን «የእግዚአብሔር ምሥጢር መጋቢዎች» ብለው ጠሩ፤ ከጌታ የተቀበሉትንም ሰበኩ። ስለዚህ ቅዱስ ያዕቆብ ይህን ከጌታችን ተምሯል። ቤተ ክርስቲያንም ከመጀመሪያዎቹ ዘመናት ጀምሮ በዚህ ምሥጢር ስትገለገል ኖራለች።",
          },
          vers: ["1Cor 4:1", "Gal 1:11-12"],
        },
        {
          tekst: {
            no: "Allerede i Det gamle testamentet ble sår behandlet med olje, og den barmhjertige samaritanen helte olje og vin på sårene til mannen som var slått ned.",
            am: "በብሉይ ኪዳን ቍስል በዘይት ይለዝብ ነበር፤ ደጉ ሳምራዊም በወንበዴዎች የተደበደበውን ሰው «ዘይትና የወይን ጠጅ በቍስሎቹ ላይ አፍስሶ አሰራቸው።»",
          },
          vers: ["Isa 1:6", "Luke 10:34"],
        },
      ],
    },
    {
      id: "ikke-vanlig-medisin",
      tittel: { no: "Mer enn vanlig medisin", am: "ተራ መድኃኒት አይደለም" },
      ingress: {
        no: "Noen sier at Jakob bare snakket om olje som vanlig medisin. Kirka svarer med tre grunner:",
        am: "አንዳንዶች ቅዱስ ያዕቆብ የተናገረው እንደ ተራ መድኃኒት ስለሚቀባ ዘይት ነው ይላሉ። ቤተ ክርስቲያን በሦስት ምክንያት ትመልሳለች፤",
      },
      punkter: [
        {
          tekst: {
            no: "Hvis det var vanlig medisin, kunne hvem som helst salve med olje. Men Jakob sier at det er kirkas prester som skal salve.",
            am: "ተራ መድኃኒት ቢሆን ኖሮ ማንም ሰው ዘይት ሊቀባ በቻለ ነበር፤ ቅዱስ ያዕቆብ ግን የሚቀቡት የቤተ ክርስቲያን ቀሳውስት ናቸው ይላል።",
          },
          vers: ["Jas 5:14"],
        },
        {
          tekst: {
            no: "Kraften til å helbrede ligger ikke i oljen, men i bønnen: «Troens bønn skal frelse den syke.» Det er Gud som helbreder.",
            am: "የመፈወስ ኃይሉ በዘይቱ ሳይሆን በጸሎቱ ነው፤ «የእምነትም ጸሎት ድውዩን ያድናል» ተብሏል። የሚፈውሰው እግዚአብሔር ነው።",
          },
          vers: ["Jas 5:15", "Exod 15:26"],
        },
        {
          tekst: {
            no: "Jakob sier også at syndene blir tilgitt. Syndenes forlatelse kan aldri komme av olje alene. Derfor er det et sakrament.",
            am: "ቅዱስ ያዕቆብ ኃጢአትም እንደሚሰረይ ይናገራል፤ ሥርየተ ኃጢአት በዘይት ብቻ ከቶ አይገኝም። ስለዚህ ይህ ምሥጢር ነው።",
          },
          vers: ["Jas 5:15"],
        },
        {
          tekst: {
            no: "Det var heller ikke en gave bare til apostlene. Jakob skriver om det som noe kirkas prester alltid skal gjøre. Og det er ikke bare for dem som skal dø: Bibelen taler om salvingen som en vei til helbredelse.",
            am: "ይህ ለሐዋርያት ብቻ የተሰጠ ስጦታም አይደለም፤ ቅዱስ ያዕቆብ የቤተ ክርስቲያን ቀሳውስት ዘወትር እንዲፈጽሙት ጻፈ። ለሞት ለተቃረቡ ብቻ የሚፈጸምም አይደለም፤ መጽሐፍ ቅዱስ ቅብዐቱን የፈውስ መንገድ አድርጎ ይናገራልና።",
          },
          vers: ["Jas 5:15"],
        },
      ],
    },
    {
      id: "slik",
      tittel: { no: "Slik foregår ቀንዲል", am: "ምሥጢረ ቀንዲል እንዴት ይፈጸማል?" },
      punkter: [
        {
          tekst: {
            no: "Oljen lages av ren olivenolje. Biskopen eller presten velsigner den. Den blir velsignet med lampen tent ved alteret og med bønnene fra መጽሐፈ ቀንዲል.",
            am: "ቅብዐ ቀንዲል ከንጹሕ የወይራ ዘይት ይዘጋጃል፤ ጳጳሱ ወይም ቄሱ ሊባርከው ይችላል። በመሠዊያው መብራት በርቶበትና መጽሐፈ ቀንዲል በካህናት ተደግሞበት ለፈውስ ይውላል።",
          },
        },
        {
          tekst: {
            no: "Den syke kommer til kirka, til presten. Er han for syk til å komme, går prestene hjem til ham eller til sykehuset.",
            am: "ከምእመናን ወገን የታመሙ ወደ ቤተ ክርስቲያን ወደ ካህኑ ይመጣሉ። ሕመማቸው የማያስችላቸው ከሆነ ካህናቱ ወደ ቤታቸው ወይም ወደ ሕክምና ቦታቸው ይሄዳሉ።",
          },
        },
        {
          tekst: {
            no: "Først trøster presten eller skriftefaren den syke og tar imot bekjennelsen hans (ኑዛዜ). Så gir han ham en ቀኖና som han klarer å gjøre.",
            am: "ካህኑ ወይም የንስሐ አባቱ የታመመውን ምእመን በማጽናናት ኃጢአቱን እንዲናዘዝ ያደርገዋል፤ በመቀጠልም በአቅሙ የሚችለውን ቀኖና እንዲፈጽም ያዘዋል።",
          },
          vers: ["Jas 5:16"],
        },
        {
          tekst: {
            no: "Så gjør presten seg klar sammen med andre prester. De tenner lampen (ቀንዲል) og ber de bønnene som står i መጽሐፈ ቀንዲል. Kirka har sju bønner til dette sakramentet, og det blir også lest fra Bibelen.",
            am: "ከዚያም ካህኑ ከሌሎች ካህናት ጋር ሆኖ ምሥጢሩን ለመፈጸም ይዘጋጃል፤ ቀንዲሉን (መብራቱን) አብርቶ መጽሐፈ ቀንዲልን በመጠቀም የታዘዘውን ጸሎት ይጸልዩለታል። ለዚህ ምሥጢር የተዘጋጁ ሰባት ጸሎቶች አሉ፤ ከቅዱሳት መጻሕፍትም ይነበባል።",
          },
        },
        {
          tekst: {
            no: "Kildene sier ikke helt det samme om tallet sju: Søndagsskoleboka for 8. klasse sier at sju prester ber og salver, mens ethiopianorthodox.org sier at det er sju bønner. Den koptiske søsterkirka tenner sju veker i oljen, én for hver bønn. Spør presten hvordan det gjøres i menigheten vår.",
            am: "ስለ ሰባት ቍጥር ምንጮቹ አንድ ዓይነት አይናገሩም፤ የስምንተኛ ክፍል የሰንበት ትምህርት ቤት መጽሐፍ ሰባት ካህናት ጸልየው እንደሚቀቡ ሲናገር፣ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ድረ ገጽ ደግሞ ሰባት ጸሎቶች እንዳሉ ይናገራል። የግብፅ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ለእያንዳንዱ ጸሎት አንድ ፈትል በዘይቱ ውስጥ ታበራለች። በአጥቢያችን እንዴት እንደሚፈጸም ካህኑን ጠይቁ።",
          },
        },
        {
          tekst: {
            no: "Når bønnene er ferdige, salver prestene den syke med den velsignede oljen i korsets tegn, særlig der han er syk eller har sår.",
            am: "በጸሎቱ ፍጻሜም የሕመምተኛውን ሕዋሳት፣ በተለይ የታመመውን ክፍል በተጸለየበት ቅብዐ ቅዱስ በመስቀል ምልክት ይቀቡታል።",
          },
          vers: ["Mark 6:13"],
        },
        {
          tekst: {
            no: "Til slutt leser presten bønnen som løser den syke fra syndene. Slik får han helbredelse både for kroppen og for sjelen.",
            am: "በመጨረሻም ከኃጢአት እስራት የሚፈታበትን ሥርዓት ይፈጽሙለታል። ይህም ለታመመው ምእመን ፈውሰ ሥጋና ፈውሰ ነፍስን ያድለዋል።",
          },
          vers: ["Jas 5:15"],
        },
        {
          tekst: {
            no: "Bare prester (ቄስ) og biskoper kan utføre ቀንዲል, ikke diakoner. Prestene gjør det oftest, fordi de er nær folket.",
            am: "ምሥጢረ ቀንዲልን መፈጸም የሚችሉት የቅስና መዓርግና ከዚያ በላይ ያሉ ካህናት ናቸው፤ ዲያቆናት አይፈጽሙትም። ሥልጣኑ ለቀሳውስት የተሰጠው ከሕዝቡ ጋር በቅርብ ስለሚኖሩ ነው።",
          },
          vers: ["Jas 5:14"],
        },
        {
          tekst: {
            no: "Olje som blir solgt, også på kirkegården, og som folk smører seg med hjemme på egen hånd, er ikke ቀንዲል. 8.-klasseboka advarer mot dette og klager over at sakramentet i dag sjelden blir utført i mange kirker. Sakramentene kan aldri kjøpes for penger.",
            am: "በየቦታው፣ በቤተ ክርስቲያን ግቢም እንኳ ቢሆን የሚሸጡና ሰዎች «ቅብዐ ቅዱስ» ብለው በራሳቸው በቤታቸው የሚቀቡት ዘይት ይህን ቅዱስ ምሥጢር ሊተካ አይችልም። ይህ ምሥጢር በአሁኑ ጊዜ በአብዛኛው አብያተ ክርስቲያናት እየተፈጸመ አይደለም። ምሥጢራተ ቤተ ክርስቲያን በገንዘብ አይሸጡም አይገዙምም።",
          },
          vers: ["Acts 8:20"],
        },
      ],
    },
    {
      id: "hvem",
      tittel: { no: "Hvem kan ta imot ቀንዲል?", am: "ምሥጢረ ቀንዲልን የሚቀበሉ እነማን ናቸው?" },
      punkter: [
        {
          tekst: {
            no: "Døpte kristne som er syke – av alle slags sykdommer, med sår, med vondt i ørene, etter ulykker – eller som er syke i sjelen og trenger Guds hjelp og renselse fra syndene.",
            am: "አምነው የተጠመቁ ክርስቲያኖች፤ በማንኛውም ዓይነት በሽታ፣ በተለይ በቍስል ለተመቱና ጆሯቸው ለታመመባቸው፣ በድንገተኛ አደጋ ለቆሰሉ፣ እንዲሁም ደዌ ነፍስ ላደረባቸውና ከኃጢአታቸው እንዲነጹ ለሚፈልጉ።",
          },
          vers: ["Jas 5:14"],
        },
        {
          tekst: {
            no: "ቀንዲል er ikke for alle, bare for dem som er syke. Derfor regnes det blant sakramentene som ikke blir gitt til alle.",
            am: "ቀንዲል ደዌ ለገጠማቸው ብቻ ይፈጸማል፤ ደዌ ላልደረሰባቸው ስለማይፈጸም ለሁሉ ከማይፈጸሙ ምሥጢራት ይቆጠራል።",
          },
        },
        {
          tekst: {
            no: "Den syke må vende om og bekjenne syndene sine før han blir salvet, og tro av hele sitt hjerte at Gud helbreder ham gjennom den hellige oljen.",
            am: "ቅብዐ ቅዱስ ከመቀባታቸው በፊት ንስሐ መግባትና ራሳቸውን መቀደስ አለባቸው። እግዚአብሔር በዚህ የተቀደሰ ቅብዐ ቅዱስ ላይ አድሮ ካደረባቸው ደዌ እንደሚያድናቸው በፍጹም ልባቸው ማመን አለባቸው።",
          },
          vers: ["Mark 5:34", "Jas 5:15"],
        },
        {
          tekst: {
            no: "ቀንዲል kan gjentas. Blir man syk igjen etter å ha blitt frisk, kan man bli salvet på nytt. Hvem som helst kan be presten om ቀንዲል når han er syk.",
            am: "ቀንዲል የሚደገም ምሥጢር ነው። አንድ ሰው ታሞ ከዳነ በኋላ እንደ ገና ቢታመም ቅብዐ ቀንዲሉን ድጋሚ መቀባት ይችላል። ማንም ሰው በታመመ ጊዜ ካህኑን ጠርቶ ምሥጢረ ቀንዲል እንዲፈጸምለት ሊጠይቅ ይችላል።",
          },
        },
      ],
    },
    {
      id: "kropp-sjel",
      tittel: { no: "Helbredelse for kropp og sjel", am: "በምሥጢረ ቀንዲል የሚገኘው ጸጋ" },
      punkter: [
        {
          tekst: {
            no: "Helbredelse for kroppen: Den syke blir frisk ved Guds kraft.",
            am: "ፈውሰ ሥጋ፤ በእግዚአብሔር ኃይል ታማሚው ከደዌው ይፈወሳል።",
          },
          vers: ["Jas 5:15", "Mark 6:13"],
        },
        {
          tekst: {
            no: "Helbredelse for sjelen og syndenes forlatelse: «Har han gjort synder, skal de bli tilgitt.»",
            am: "ፈውሰ ነፍስና ሥርየተ ኃጢአት፤ «ኃጢአትንም ሠርቶ እንደ ሆነ ይሰረይለታል።»",
          },
          vers: ["Jas 5:15"],
        },
        {
          tekst: {
            no: "Styrke og trøst: Kropp og ånd hører sammen. Når kroppen er svak, blir også ånden svak, og når ånden blir sterk, blir også kroppen sterkere. Den syke får åndelig kraft og trøst.",
            am: "ብርታትና መጽናናት፤ ሥጋና መንፈስ አንድ ስለሆኑ ሥጋ ቢደክም መንፈስ ይደክማል፤ መንፈስ ሲጠነክር ደግሞ ሥጋ ይጠነክራል። ታማሚው በመንፈሳዊ ኃይል ይበረታል፤ መንፈሳዊ መጽናናትንም ያገኛል።",
          },
          vers: ["2Cor 12:9"],
        },
        {
          tekst: {
            no: "Hvordan dette skjer, kan vi ikke se. Vi ser den syke som ber om nåde, oljen og presten i prestekappen som ber. Men helbredelsen og tilgivelsen Gud gir, er usynlig – det er derfor det er et mysterium.",
            am: "ይህ እንዴት እንደሚሆን አይታይም አይመረመርም። በሽተኛው ምሕረትንና ፈውስን ሲለምን፣ ዘይቱ ሲዘጋጅ፣ ካህኑም ልብሰ ተክህኖውን ለብሶ ሲጸልይ ይታያል፤ የሚሰጠው ፈውስና ሥርየተ ኃጢአት ግን አይታይም።",
          },
        },
      ],
    },
    {
      id: "nisha",
      tittel: { no: "ቀንዲል og omvendelsen (ንስሐ)", am: "ቀንዲልና ንስሐ" },
      punkter: [
        {
          tekst: {
            no: "ቀንዲል blir aldri utført alene, men sammen med skriftemålet og nattverden. Den som blir salvet, skal ikke bare tenke på å bli frisk i kroppen, men også på at sjelen skal bli frelst.",
            am: "ቀንዲል ከንስሐ እና ከቅዱስ ቍርባን ጋር አብሮ እንጂ ብቻውን የሚፈጸም አይደለም። የታመመው ሰው የሥጋውን መዳን ብቻ ሳይሆን የነፍሱንም መዳን ማሰብ አለበት።",
          },
          vers: ["Jas 5:15-16"],
        },
        {
          tekst: {
            no: "Forskjellen: ንስሐ er for alle kristne, også de friske, og leger sykdommer i sjelen ved prestens bønn. ቀንዲል er bare for de syke, leger både kropp og sjel, og blir gitt ved salving med olje som det er bedt over.",
            am: "ልዩነታቸው፤ ንስሐ ለክርስቲያኖች ሁሉ፣ ለጤነኞችም ይፈጸማል፤ የነፍስን ደዌ በካህኑ ጸሎት ይፈውሳል። ቀንዲል ግን ለሕሙማን ብቻ ይፈጸማል፤ ሥጋንና ነፍስን ይፈውሳል፤ በዘይቱ ላይ ተጸልዮ ይቀባል።",
          },
        },
        {
          tekst: {
            no: "Kirka kaller disse to «sakramentene som leger sårene i sjelen og kroppen». Begge må tas imot med tro: Den som skrifter, tror at syndene blir tilgitt; den som blir salvet, tror at han blir helbredet.",
            am: "እነዚህ ሁለቱ ምሥጢራት የነፍስና የሥጋን ቍስል የሚፈውሱ ምሥጢራት ይባላሉ። ሁለቱንም በእምነት መቀበል ይገባል፤ ንስሐ የሚገባ ኃጢአቱ እንደሚሰረይለት፣ የሚቀባም እንደሚድን አምኖ ነው።",
          },
          vers: ["Mark 2:5"],
        },
        {
          tekst: {
            no: "Etter salvingen bør den syke ta imot Kristi kropp og blod så snart som mulig, for nattverden er selve livet.",
            am: "ከምሥጢረ ቀንዲል በኋላ ታማሚው በተቻለ ፍጥነት ሥጋውንና ደሙን ሊቀበል ይገባዋል፤ ቍርባን የሕይወት ምግብ ነውና።",
          },
          vers: ["John 6:54"],
        },
      ],
    },
    {
      id: "meron-tsebel",
      tittel: { no: "Forskjellen på ቀንዲል, ሜሮን og ጸበል", am: "ቀንዲል፣ ሜሮንና ጸበል ልዩነታቸው" },
      punkter: [
        {
          tekst: {
            no: "ሜሮን og ቀንዲል er begge salving med olje, men ellers er de forskjellige. ሜሮን lages av mange duftende planter og blir laget og velsignet av biskopene (patriarken og biskopene) sammen. ቀንዲል er ren olivenolje som en biskop eller prest kan velsigne.",
            am: "ሜሮንና ቀንዲል ሁለቱም በቅብዐት ይፈጸማሉ፤ ከዚህ ውጪ ግን ይለያያሉ። ሜሮን ሽቱነት ካላቸው ዕፅዋት ይቀመማል፤ በፓትርያርኩና በሊቃነ ጳጳሳት ጉባኤና ጸሎት ይዘጋጃል። ቀንዲል ግን ከንጹሕ የወይራ ዘይት ይዘጋጃል፤ ጳጳስ ወይም ቄስ ሊባርከው ይችላል።",
          },
        },
        {
          tekst: {
            no: "ሜሮን er Den hellige ånds segl. Vi blir salvet med det rett etter dåpen, bare én gang. Det brukes også når en ny kirke eller nye hellige gjenstander blir innviet. ቀንዲል gis når vi er syke, og kan gjentas.",
            am: "ሜሮን ጥምቀትን የሚያጸና ማኅተመ መንፈስ ቅዱስ ነው፤ ከጥምቀት በኋላ ወዲያው አንድ ጊዜ ብቻ ይቀባል፤ አይደገምም። አዲስ ቤተ ክርስቲያንና አዳዲስ ንዋያተ ቅድሳትም በሜሮን ይከብራሉ። ቀንዲል ግን በሕመም ጊዜ ይፈጸማል፤ ይደገማልም።",
          },
          vers: ["2Cor 1:21-22", "1John 2:20"],
        },
        {
          tekst: {
            no: "ጸበል (også skrevet ጠበል) er hellig vann som det er bedt over, eller som har sprunget fram ved et under. Ved Guds kraft blir syke helbredet i det. Naaman dukket seg sju ganger i Jordan og ble frisk, og Jesus sendte den blinde for å vaske seg i dammen Siloa.",
            am: "ጸበል (ጠበል) በአምላካችን በኢየሱስ ክርስቶስ ኃይል ሕሙማን የሚፈወሱበት፣ ተአምራት የሚደረግበት ቅዱስ ውኃ ነው። ንዕማን በዮርዳኖስ ሰባት ጊዜ ብቅ ጥልቅ ብሎ ተፈወሰ፤ ጌታችንም ዕውሩን «ሂድና በሰሊሆም መጠመቂያ ታጠብ» አለው።",
          },
          vers: ["2Kgs 5:14", "John 9:7"],
        },
        {
          tekst: {
            no: "Mange ጸበል har navnet til en helgen, som Marias eller Mikaels ጸበል, for at helgenen skal bli minnet. Men det er Gud som helbreder gjennom vannet.",
            am: "ብዙ ጸበሎች የማርያም ጸበል፣ የሚካኤል ጸበል እንደሚባለው በቅዱሳን ስም ይጠራሉ፤ ቅዱሳኑ እንዲታሰቡበት ነው። በጸበሉ አድሮ ሕሙማንን የሚፈውሰው ግን የእግዚአብሔር ኃይል ነው።",
          },
          vers: ["Prov 10:7"],
        },
        {
          tekst: {
            no: "Forskjellen: ጸበል er en velsignelse som vi bruker med tro, renhet og gudsfrykt. ቀንዲል er et av de sju sakramentene, innstiftet av Kristus, der prestene ber de faste bønnene, tar imot bekjennelsen og salver den syke. ጸበል erstatter ikke ቀንዲል – og heller ikke legen.",
            am: "ልዩነታቸው፤ ጸበል በእምነት፣ በንጽሕናና በፈሪሃ እግዚአብሔር የምንጠቀምበት በረከት ነው። ቀንዲል ግን በክርስቶስ ከተመሠረቱት ከሰባቱ ምሥጢራት አንዱ ነው፤ ካህናት የተወሰነውን ጸሎት ጸልየው፣ ኑዛዜን ተቀብለው ታማሚውን ይቀቡታል። ጸበል ቀንዲልን አይተካም።",
          },
        },
      ],
    },
    {
      id: "jesu-helbredelser",
      tittel: { no: "Jesus helbreder", am: "ጌታችን ድውያንን ፈወሰ" },
      ingress: {
        no: "Evangeliene forteller om mange syke Jesus gjorde friske. Mange av dem viser at han leger både kroppen og sjelen:",
        am: "ወንጌላት ጌታችን ስለ ፈወሳቸው ብዙ ሕሙማን ይነግሩናል፤ ብዙዎቹም ሥጋንና ነፍስን አብሮ እንደሚፈውስ ያሳያሉ፤",
      },
      punkter: [
        {
          tekst: {
            no: "Den lamme som ble senket ned gjennom taket: Jesus sa først «Dine synder er tilgitt», og så «Stå opp, ta båren din og gå!»",
            am: "በጣራ የወረደው ሽባ፤ ጌታችን አስቀድሞ «አንተ ልጅ፥ ኃጢአትህ ተሰረየችልህ» አለው፤ ቀጥሎም «ተነሣ፥ አልጋህን ተሸከምና ወደ ቤትህ ሂድ» አለው።",
          },
          vers: ["Mark 2:5-12"],
        },
        {
          tekst: {
            no: "Mannen ved Betesda-dammen hadde vært syk i 38 år. Etterpå sa Jesus til ham: «Nå er du blitt frisk. Synd ikke mer.»",
            am: "በቤተ ሳይዳ መጠመቂያ ሠላሳ ስምንት ዓመት የታመመው ሰው ተፈወሰ፤ ከዚያ በኋላ ጌታችን «እነሆ፥ ድነሃል፤ ከዚህ የሚብስ እንዳይደርስብህ ወደ ፊት ኃጢአት አትሥራ» አለው።",
          },
          vers: ["John 5:5-9", "John 5:14"],
        },
        {
          tekst: {
            no: "Kvinnen som hadde hatt blødninger i tolv år, rørte ved kappen hans. Jesus sa: «Datter, din tro har frelst deg.»",
            am: "ዐሥራ ሁለት ዓመት ደም ይፈሳት የነበረችው ሴት ልብሱን ዳሰሰች፤ ጌታችንም «ልጄ ሆይ፥ እምነትሽ አድኖሻል» አላት።",
          },
          vers: ["Mark 5:25-34"],
        },
        {
          tekst: {
            no: "Den blinde: Jesus smurte leire på øynene hans og sendte ham for å vaske seg i Siloa. Han kom tilbake og kunne se.",
            am: "ዕውሩ፤ ጌታችን በምራቁ ጭቃ አድርጎ ዓይኖቹን ቀባ፤ «ሂድና በሰሊሆም መጠመቂያ ታጠብ» አለው፤ ሄዶ ታጠበ እያየም መጣ።",
          },
          vers: ["John 9:6-7"],
        },
        {
          tekst: {
            no: "Peters svigermor hadde feber. Jesus tok henne i hånden og reiste henne opp, og hun begynte straks å tjene dem.",
            am: "የጴጥሮስ አማት በንዳድ ታማ ነበር፤ ጌታችን እጅዋን ይዞ አስነሣት፤ ንዳዱም ወዲያው ለቀቃት፤ አገለገለቻቸውም።",
          },
          vers: ["Mark 1:30-31"],
        },
        {
          tekst: {
            no: "Ti spedalske: Jesus sendte dem for å vise seg for prestene, og på veien ble de rene. Bare én kom tilbake og takket Gud.",
            am: "ዐሥሩ ለምጻሞች፤ ጌታችን «ሂዱ፥ ራሳችሁን ለካህናት አሳዩ» አላቸው፤ ሲሄዱም ነጹ። ከእነርሱም አንዱ ብቻ እግዚአብሔርን እያከበረ ተመለሰ።",
          },
          vers: ["Luke 17:12-19"],
        },
        {
          tekst: {
            no: "Profeten Jesaja sa om Kristus: «Han tok våre svakheter og bar våre sykdommer.»",
            am: "ነቢዩ ኢሳይያስ ስለ ክርስቶስ «እርሱ ድካማችንን ተቀበለ ደዌያችንንም ተሸከመ» ብሏል።",
          },
          vers: ["Matt 8:16-17"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Kirkefedrene", am: "ሊቃውንተ ቤተ ክርስቲያን" },
      tekst: {
        no: "Fedrene vitner om at salving av syke ble brukt som et av kirkas sakramenter allerede fra de første århundrene. Når de første kristne var alvorlig syke, kalte de på kirkas prester, bekjente syndene sine og ble salvet med olje.",
        am: "አበው ቅብዐ ቀንዲል ከመጀመሪያዎቹ ዘመናት ጀምሮ ከምሥጢራተ ቤተ ክርስቲያን አንዱ ሆኖ ይፈጸም እንደ ነበር ይመሰክራሉ። የጥንት ክርስቲያኖች በጠና በታመሙ ጊዜ የቤተ ክርስቲያንን ካህናት ይጠሩ ነበር፤ ኃጢአታቸውንም ተናዝዘው በዘይት ይቀቡ ነበር።",
      },
      kilde: "ethiopianorthodox.org: The Sacrament of the Unction of the Sick, del II (4)–(5)",
    },
    {
      navn: { no: "Hellige Basilios den store", am: "ቅዱስ ባስልዮስ ዐቢይ" },
      tekst: {
        no: "Basilios bekrefter at ቀንዲል-bønnene var godt kjent i kirka helt fra de første dagene.",
        am: "ቅዱስ ባስልዮስ የቀንዲል ጸሎቶች ከጥንት ጀምሮ በቤተ ክርስቲያን የታወቁ እንደ ነበሩ ያረጋግጣል።",
      },
      kilde: "Basilios' kanon 91, sitert i Koptisk-ortodokse kirke: The Sacrament of the Unction of the Sick (copticchurch.net)",
    },
    {
      navn: { no: "Hellige Epifanios av Kypros", am: "ቅዱስ ኤጲፋንዮስ ዘቆጵሮስ" },
      tekst: {
        no: "Kirkehistorien forteller at Epifanios, biskop på Kypros, skrev og ordnet bønnene til salvingen av syke. Derfor skal presten be alle de sju bønnene og ikke korte dem ned.",
        am: "የቤተ ክርስቲያን ታሪክ የቆጵሮሱ ኤጲስ ቆጶስ ቅዱስ ኤጲፋንዮስ የቀንዲልን ጸሎቶች እንደ ጻፈና እንዳዘጋጀ ይናገራል። ስለዚህ ካህኑ ሰባቱን ጸሎቶች ሁሉ ሳያሳጥር ሊጸልይ ይገባዋል።",
      },
      kilde: "Koptisk-ortodokse kirke: The Sacrament of the Unction of the Sick (copticchurch.net)",
    },
  ],
  ord: [
    { ord: "ቀንዲል", forklaring: { no: "lampe med olje; salving av syke", am: "በዘይት የሚበራ መብራት" } },
    { ord: "ምሥጢረ ቀንዲል", forklaring: { no: "sakramentet salving av syke", am: "ሕሙማን የሚቀቡበት ምሥጢር" } },
    { ord: "ቅብዐ ቅዱስ · ቅብዐ ቀንዲል", forklaring: { no: "den hellige oljen som de syke salves med", am: "ለሕሙማን የሚቀባ የተባረከ ዘይት" } },
    { ord: "መጽሐፈ ቀንዲል", forklaring: { no: "boka med bønnene som leses over oljen", am: "በዘይቱ ላይ የሚጸለይበት መጽሐፍ" } },
    { ord: "ጸሎተ ቀንዲል", forklaring: { no: "bønnene i salvingen av syke", am: "የቀንዲል ጸሎት" } },
    { ord: "ደዌ ሥጋ · ደዌ ነፍስ", forklaring: { no: "sykdom i kroppen · sykdom i sjelen", am: "የሥጋ ሕመም · የነፍስ ሕመም" } },
    { ord: "ፈውስ", forklaring: { no: "helbredelse", am: "ከደዌ መዳን" } },
    { ord: "ሕሙማን", forklaring: { no: "de syke", am: "የታመሙ ሰዎች" } },
    { ord: "ሜሮን", forklaring: { no: "myron, Den hellige ånds segl etter dåpen", am: "ማኅተመ መንፈስ ቅዱስ" } },
    { ord: "ጸበል (ጠበል)", forklaring: { no: "hellig vann som helbreder", am: "ሕሙማን የሚፈወሱበት ቅዱስ ውኃ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ቀንዲል, og hvorfor heter sakramentet det?", am: "«ቀንዲል» ማለት ምን ማለት ነው? ምሥጢሩ ለምን በዚህ ስም ተጠራ?" },
      svar: {
        no: "ቀንዲል betyr lampe med olje. Sakramentet har navnet etter lampen som brenner mens prestene ber for den syke. De første kristne tente sju lamper.",
        am: "ቀንዲል በዘይት የሚበራ መብራት ማለት ነው። ካህናት ለታመመው ሲጸልዩ ከሚበራው መብራት ስያሜውን አገኘ፤ የጥንት ክርስቲያኖች ሰባት መብራት ያበሩ ነበር።",
      },
    },
    {
      sporsmal: { no: "Hvilket bibelvers forteller hvordan kirka salver de syke?", am: "ቤተ ክርስቲያን ሕሙማንን እንዴት እንደምትቀባ የሚነግረን ጥቅስ የትኛው ነው?" },
      svar: {
        no: "Jakob 5,14–15: Den syke skal kalle på kirkas prester, de skal salve ham med olje i Herrens navn og be for ham, og troens bønn skal frelse den syke.",
        am: "ያዕ 5፥14–15፤ የታመመ ሰው የቤተ ክርስቲያንን ቀሳውስት ይጥራ፤ በጌታ ስም ዘይት ቀብተው ይጸልዩለት፤ የእምነትም ጸሎት ድውዩን ያድናል።",
      },
    },
    {
      sporsmal: { no: "Hva gir ቀንዲል den syke?", am: "ቀንዲል ለታማሚው የሚያስገኘው ጸጋ ምንድን ነው?" },
      svar: {
        no: "Helbredelse for kroppen, helbredelse for sjelen og syndenes forlatelse, og åndelig styrke og trøst.",
        am: "ፈውሰ ሥጋ፣ ፈውሰ ነፍስና ሥርየተ ኃጢአት፣ መንፈሳዊ ብርታትና መጽናናት።",
      },
    },
    {
      sporsmal: { no: "Hvorfor skrifter den syke før han blir salvet?", am: "ታማሚው ከመቀባቱ በፊት ለምን ይናዘዛል?" },
      svar: {
        no: "Fordi ቀንዲል ikke bare er for kroppen, men også for sjelen. Det blir alltid gitt sammen med skriftemålet og nattverden.",
        am: "ቀንዲል ለሥጋ ብቻ ሳይሆን ለነፍስም ስለሆነ ነው፤ ከንስሐና ከቅዱስ ቍርባን ጋር አብሮ ይፈጸማል እንጂ ብቻውን አይፈጸምም።",
      },
    },
    {
      sporsmal: { no: "Hva er forskjellen på ሜሮን og ቀንዲል?", am: "የሜሮንና የቀንዲል ልዩነት ምንድን ነው?" },
      svar: {
        no: "ሜሮን lages av duftende planter av biskopene, gis rett etter dåpen og gjentas aldri. ቀንዲል er ren olivenolje som en prest kan velsigne, gis til syke og kan gjentas.",
        am: "ሜሮን ሽቱነት ካላቸው ዕፅዋት በሊቃነ ጳጳሳት ይዘጋጃል፤ ከጥምቀት በኋላ ይቀባል፤ አይደገምም። ቀንዲል ከንጹሕ የወይራ ዘይት ይዘጋጃል፤ ቄስ ሊባርከው ይችላል፤ ለሕሙማን ይቀባል፤ ይደገማልም።",
      },
    },
    {
      sporsmal: { no: "Kan jeg kjøpe olje og salve meg selv hjemme i stedet for ቀንዲል?", am: "ዘይት ገዝቼ በቤቴ መቀባት ቀንዲልን ይተካልን?" },
      svar: {
        no: "Nei. ቀንዲል er et sakrament som prestene utfører med bønn og bekjennelse. Guds nåde kan ikke kjøpes for penger (Apg 8,20).",
        am: "አይተካም። ቀንዲል ካህናት በጸሎትና በኑዛዜ የሚፈጽሙት ምሥጢር ነው፤ የእግዚአብሔር ጸጋ በገንዘብ አይገዛምና (ሐዋ 8፥20)።",
      },
    },
  ],
  kilder: [
    { navn: "ሥርዓተ ቤተ ክርስቲያን (søndagsskolebok for 8. klasse: መሠረተ ሃይማኖት፣ ሥርዓትና ሥነ ምግባር), kap. 1 og 8", url: "https://www.scribd.com/document/1036651354/g8-Meserete-Haymanot-Srat-Snemgbar-24" },
    { navn: "ማኅበረ ቅዱሳን: ሰባቱ ምሥጢራተ ቤተ ክርስቲያን (፫) – ንስሐና ቀንዲል", url: "https://eotcmk.org/a/%e1%88%b0%e1%89%a3%e1%89%b1-%e1%88%9d%e1%88%a5%e1%8c%a2%e1%88%ab%e1%89%b0-%e1%89%a4%e1%89%b0-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b2%e1%8b%ab%e1%8a%95-3/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Sacrament of the Unction of the Sick", url: "https://www.ethiopianorthodox.org/english/dogma/sacraunction.html" },
    { navn: "St. Kidane Mihiret EOT Church, Kansas City: ምሥጢረ ቀንዲል", url: "https://kidanemihiret.org/sermons/ምሥጢረ-ቀንዲል/" },
    { navn: "ሰዋስው (Sewasew): ምሥጢረ ቀንዲል", url: "https://am.sewasew.com/p/ምሥጢረ-ቀንዲል" },
    { navn: "Abyssinica ordbok: ቀንዲል", url: "https://dictionary.abyssinica.com/ge/ቀንዲል" },
    { navn: "የመምህር ተመስገን ዘገዬ እይታዎች: ጠበል ምንድን ነው?", url: "https://hamernoah.wordpress.com/2015/10/29/%e1%8c%a0%e1%89%a0%e1%88%8d-%e1%88%9d%e1%8a%95%e1%8b%b5%e1%8a%95-%e1%8a%90%e1%8b%8d/" },
    { navn: "Koptisk-ortodokse kirke (støtte): The Sacrament of the Unction of the Sick", url: "https://www.copticchurch.net/introduction-to-the-coptic-church/sacraments/5_unction_sick" },
  ],
  utkast: true,
};
