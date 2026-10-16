import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om jomfru Maria, Johannes døperen og englene:
// Mahibere Kidusan (eotcmk.org): «የእመቤታችን ቅድስት ድንግል ማርያም አማላጅነት» (barn, del 2: Kana og ተአምረ ማርያም),
// «ኪዳነ ምሕረት!» (barn: pakten, Maria levde 64 år), «‹‹ኢያቄም እና ሐና ሰማይን ወለዱ›› ቅዱስ ያሬድ» (Yared og Efrem om Maria),
// «አንቲ ውእቱ ጽጌ መዓዛ ሠናይ (ውዳሴ ማርያም ዘእሑድ)» (Efrem), «ጌታችን ኢየሱስ ተወለደ» (evig jomfru),
// «ቅዱስ ዮሐንስ መጥምቅ» (Johannes døperen: født ሰኔ 30, drept መስከረም 2), månedsartiklene «ወርኃ መስከረም», «ወርኃ ሰኔ»,
// «ወርኃ የካቲት», «ወርኃ ኅዳር» og «ወርኃ ሐምሌ»;
// om englene: «ዓለመ ሰማይ» (englene skapt den første dagen, 100 ነገድ, de sju erkeenglene, Satanaels fall, etter
// መጽሐፈ ቀሌምንጦስ), «‘’ከመላእክት አለቆች አንዱ የሆነው ሚካኤል ሊረዳኝ መጣ።’’» (Mikael, etter ድርሳነ ሚካኤል og ስንክሳር),
// «‹‹የእግዚአብሔር መልአክ በሚፈሩት ሰዎች ዙሪያ ይሰፍራል›› » (barn: Gabriel og de tre unge mennene), «እስመ ለመላእክቲሁ
// ይኤዝዞሙ በእንቲአከ» (Gabriel, Kirkos og Julitta), «በዓለ ቅዱስ ሩፋኤል», «ሊቀ መላእክት ቅዱስ ዑራኤል».
// Bibelens Tobits bok og Enoks bok (ሄኖክ) er sitert fra bibeldataene på nettstedet (81-bøkers kanon, amharisk utgave 2000).
// Datoene er de samme som i lib/hoytider-data.ts og maria-og-helgenfester.ts.
//
// Usikkert: Den sjuende erkeengelen heter ቅዱስ አፍኒን i «ዓለመ ሰማይ» (Mahibere Kidusan). Andre lister har andre navn.
//   Vi fant ikke noe mer om ham i kildene, og heller ikke festdager for Fanuel og Afnin.
// Usikkert: Rafaels månedlige dag: maria-og-helgenfester.ts og werawi bealat har den 13. Vi har ikke tatt den med her.
// Usikkert: At Maria levde 64 år, er kirkas tradisjon (Mahibere Kidusan, «ኪዳነ ምሕረት!»). Kilder utenfor gir andre tall.
// Usikkert: Mahibere Kidusan oppgir Esra Sutuel 13:38 for Uriels beger. I bibeldataene står fortellingen i 4 Esra 14:38–40.
export const mariaOgEnglene: Tema = {
  slug: "maria-og-englene",
  del: "personer",
  tittel: { no: "Maria og erkeenglene", am: "ቅድስት ድንግል ማርያምና ሊቃነ መላእክት" },
  undertittel: {
    no: "Guds mor, Johannes døperen og Guds engler",
    am: "ወላዲተ አምላክ፣ መጥምቀ መለኮት ዮሐንስና ቅዱሳን መላእክት",
  },
  bilde: "mariaIkon",
  ingress: {
    no:
      "Jomfru Maria er Guds mor. Johannes døperen gjorde veien klar for Jesus. Englene står for Guds ansikt og blir sendt for å hjelpe oss. Her lærer du hvem de er, hva Bibelen sier om dem, når kirka minnes dem, og hvorfor vi ber dem be for oss.",
    am:
      "ቅድስት ድንግል ማርያም ወላዲተ አምላክ ናት። መጥምቀ መለኮት ዮሐንስ ለጌታችን መንገዱን አዘጋጀ። ቅዱሳን መላእክት በእግዚአብሔር ፊት ይቆማሉ፤ እኛንም ለመርዳት ይላካሉ። በዚህ ገጽ ማንነታቸውን፣ መጽሐፍ ቅዱስ ስለ እነርሱ የሚለውን፣ ቤተ ክርስቲያን መቼ እንደምታስባቸውና ለምን እንዲያማልዱን እንደምንለምናቸው እንማራለን።",
  },
  hovedvers: "Luke 1:28",
  avsnitt: [
    {
      id: "maria",
      tittel: { no: "Jomfru Maria – hvem er hun?", am: "ቅድስት ድንግል ማርያም ማን ናት?" },
      ingress: {
        no: "Maria er datter av den hellige Joakim (ኢያቄም) og den hellige Anna (ሐና). Kirka kaller henne እመቤታችን, «vår Frue».",
        am: "ቅድስት ድንግል ማርያም የቅዱስ ኢያቄምና የቅድስት ሐና ልጅ ናት። ቤተ ክርስቲያን «እመቤታችን» ትላታለች።",
      },
      punkter: [
        {
          tekst: {
            no: "Joakim og Anna fikk ikke barn på lenge. De ba Gud med mange tårer og lovet å gi barnet til Gud. Maria ble født ግንቦት 1. Tre år gammel ble hun ført inn i templet (ታኅሣሥ 3), og der bodde hun i tolv år.",
            am: "ኢያቄምና ሐና ብዙ ዘመን ልጅ አልነበራቸውም። በብዙ ዕንባ ለመኑ፤ ልጅ ቢሰጣቸው ለእግዚአብሔር ሊሰጡ ተሳሉ። እመቤታችን ግንቦት ፩ ተወለደች። በሦስት ዓመቷ ታኅሣሥ ፫ ወደ ቤተ መቅደስ ገባች፤ በዚያም ዐሥራ ሁለት ዓመት ኖረች።",
          },
        },
        {
          tekst: {
            no: "Engelen Gabriel ble sendt til Maria i Nasaret. Han hilste henne: «Vær hilset, du benådede! Herren er med deg.» Maria svarte: «Se, jeg er Herrens tjenerinne. La det skje med meg som du har sagt.»",
            am: "መልአኩ ቅዱስ ገብርኤል ወደ ናዝሬት ወደ ድንግል ማርያም ተላከ። «ደስ ይበልሽ፥ ጸጋ የሞላብሽ ሆይ፥ ጌታ ከአንቺ ጋር ነው» ብሎ አመሰገናት። እመቤታችንም «እነሆኝ የጌታ ባሪያ እንደ ቃልህ ይሁንልኝ» አለች።",
          },
          vers: ["Luke 1:26-27", "Luke 1:28", "Luke 1:38"],
        },
        {
          tekst: {
            no: "Den hellige ånd kom over henne, og hun ble med barn uten mann. Profeten Jesaja hadde sagt det på forhånd: «Se, en jomfru skal bli med barn og føde en sønn.» Maria var jomfru før, under og etter fødselen. Derfor kaller kirka henne ድንግል, «Jomfruen», og sier at hun er jomfru for alltid.",
            am: "መንፈስ ቅዱስ በእርሷ ላይ መጣ፤ ወንድ ሳታውቅ ፀነሰች። ነቢዩ ኢሳይያስ «እነሆ፥ ድንግል ትፀንሳለች» ብሎ አስቀድሞ ተናግሮ ነበር። እመቤታችን ከመውለዷ በፊት፣ በወለደች ጊዜና ከወለደች በኋላ ድንግል ናት፤ ስለዚህ ቤተ ክርስቲያን ዘለዓለማዊት ድንግል ትላታለች።",
          },
          vers: ["Luke 1:34-35", "Isa 7:14", "Ezek 44:2"],
        },
        {
          tekst: {
            no: "Barnet hun fødte, er Guds Sønn som ble menneske. Han er én: sann Gud og sant menneske. Derfor er Maria ወላዲተ አምላክ – Guds mor (på gresk Theotokos). Elisabet sa det samme med Den hellige ånd: «min Herres mor».",
            am: "ከእርሷ የተወለደው ሰው የሆነው የእግዚአብሔር ልጅ ነው፤ ፍጹም አምላክ ፍጹም ሰው ሆኖ አንድ ነው። ስለዚህ እመቤታችን ወላዲተ አምላክ ናት። ኤልሳቤጥም በመንፈስ ቅዱስ ተሞልታ «የጌታዬ እናት» አለቻት።",
          },
          vers: ["Luke 1:41", "Luke 1:42-43", "Matt 1:23"],
        },
        {
          tekst: {
            no: "Maria selv sa: «Fra nå av skal alle slekter prise meg salig.» Når vi ærer henne, oppfyller vi hennes egne ord. Hun tok vare på alt som skjedde, og tenkte på det i sitt hjerte.",
            am: "እመቤታችን ራሷ «እነሆም፥ ከዛሬ ጀምሮ ትውልድ ሁሉ ብፅዕት ይሉኛል» አለች። እርሷን ስናከብር ቃሏን እንፈጽማለን። እርሷም የሆነውን ሁሉ በልብዋ እያሰበች ትጠብቀው ነበር።",
          },
          vers: ["Luke 1:46-48", "Luke 2:19"],
        },
        {
          tekst: {
            no: "Etter at Jesus fór opp til himmelen, ba Maria sammen med apostlene. Kirkas tradisjon sier at hun levde 64 år på jorden. Hun døde ጥር 21, og kroppen hennes ble tatt opp til himmelen (ፍልሰታ, ነሐሴ 16).",
            am: "ጌታችን ካረገ በኋላ እመቤታችን ከሐዋርያት ጋር በአንድ ልብ ሆና ትጸልይ ነበር። በዚህ ምድር ፷፬ ዓመት ኖረች። ጥር ፳፩ ዐረፈች፤ ነሐሴ ፲፮ ደግሞ ፍልሰታ ለማርያም ይታሰባል።",
          },
          vers: ["Acts 1:14"],
        },
      ],
    },
    {
      id: "hvorfor-maria",
      tittel: { no: "Hvorfor ærer vi Maria og ber om hennes forbønn?", am: "እመቤታችንን ለምን እናከብራለን? ለምንስ እንድታማልደን እንለምናታለን?" },
      punkter: [
        {
          tekst: {
            no: "Vi tilber bare Gud. Maria ærer vi fordi Gud selv har æret henne: han valgte henne til mor for sin Sønn. Engelen og Elisabet kalte henne velsignet blant kvinner.",
            am: "የምናመልከው እግዚአብሔርን ብቻ ነው። እመቤታችንን የምናከብራት እግዚአብሔር ራሱ ስላከበራት ነው፤ ለልጁ እናት እንድትሆን መርጧታልና። መልአኩና ኤልሳቤጥም «ከሴቶች መካከል የተባረክሽ ነሽ» አሏት።",
          },
          vers: ["Luke 1:30-31", "Luke 1:42-43"],
        },
        {
          tekst: {
            no: "I bryllupet i Kana tok vinen slutt. Maria så nøden og sa til Jesus: «De har ikke vin.» Så sa hun til tjenerne: «Gjør det han sier dere!» Jesus gjorde vann til vin. Kirka lærer at dette viser hennes forbønn: hun ser vår nød og ber sin Sønn for oss.",
            am: "በቃና ዘገሊላ ሰርግ የወይን ጠጅ አለቀ። እመቤታችን ጭንቀታቸውን አይታ ልጇን «የወይን ጠጅ እኮ የላቸውም» አለችው። አገልጋዮቹንም «የሚላችሁን ሁሉ አድርጉ» አለቻቸው። ጌታችንም ውኃውን ወይን አደረገው። ይህ የእመቤታችን አማላጅነት ነው፤ ችግራችንን አይታ ከልጇ ታማልደናለች።",
          },
          vers: ["John 2:3-5", "John 2:11"],
        },
        {
          tekst: {
            no: "Fra korset ga Jesus sin mor til disippelen Johannes: «Se, det er din mor.» Kirka lærer at han da ga henne til mor for alle som tror.",
            am: "ጌታችን በመስቀል ላይ ሆኖ ለደቀ መዝሙሩ ለዮሐንስ «እናትህ እነኋት» ብሎ እናቱን ሰጠው። በዮሐንስ በኩል ለምእመናን ሁሉ እናት አድርጎ ሰጣት።",
          },
          vers: ["John 19:26-27"],
        },
        {
          tekst: {
            no: "ኪዳነ ምሕረት – barmhjertighetspakten: Kirka lærer at Jesus lovet sin mor å vise nåde mot den som ber i hennes navn, gir sultne mat i hennes navn og holder ዝክር for henne. Vi minnes pakten den 16. hver måned, og stort den 16. የካቲት.",
            am: "ኪዳነ ምሕረት፦ ጌታችን በስሟ ለሚማጸን፣ በስሟ ለተራበ ለሚያበላና ዝክሯን ለሚዘክር ምሕረትን እንደሚያደርግ ለእናቱ ቃል ኪዳን ገባላት። በየወሩ በ፲፮ እናስበዋለን፤ ዓመታዊ በዓሏ የካቲት ፲፮ ነው።",
          },
          vers: ["Matt 10:42"],
          andre: [
            {
              no: "ተአምረ ማርያም (Marias under), under 12: Simon (በላዔ ሰብ) fikk nåde fordi han ga en tørst mann vann «for Marias skyld».",
              am: "ተአምረ ማርያም፣ ተአምር ፲፪፦ ስምዖን (በላዔ ሰብ) «ስለ እግዝእትነ ማርያም» ብሎ ለለመነው የተጠማ ሰው ውኃ በማጠጣቱ ምሕረትን አገኘ።",
            },
          ],
        },
        {
          tekst: {
            no: "Mange av Marias fester står på siden om Marias høytider. Den 21. i hver måned er viet til henne.",
            am: "የእመቤታችን በዓላት በበዓላተ ማርያም ገጽ ተዘርዝረዋል። በየወሩ ፳፩ ለእመቤታችን የተሰጠ ቀን ነው።",
          },
        },
      ],
    },
    {
      id: "johannes",
      tittel: { no: "Johannes døperen", am: "መጥምቀ መለኮት ቅዱስ ዮሐንስ" },
      ingress: {
        no: "Johannes er sønn av presten Sakarja og Elisabet. Elisabet og Maria var i slekt.",
        am: "ቅዱስ ዮሐንስ የካህኑ የዘካርያስና የቅድስት ኤልሳቤጥ ልጅ ነው። ኤልሳቤጥና እመቤታችን ዘመዳሞች ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "Engelen Gabriel sa til Sakarja at Elisabet skulle føde en sønn som skulle hete Johannes, og at han skulle fylles med Den hellige ånd fra mors liv. Da Maria hilste Elisabet, hoppet barnet i magen hennes av glede.",
            am: "ቅዱስ ገብርኤል ለዘካርያስ ኤልሳቤጥ ወንድ ልጅ እንደምትወልድ፣ ስሙም ዮሐንስ እንደሚባል፣ ከእናቱ ማኅፀን ጀምሮ መንፈስ ቅዱስ እንደሚሞላበት ነገረው። እመቤታችን ኤልሳቤጥን ሰላም ባለቻት ጊዜ ፅንሱ በማኅፀኗ ዘለለ።",
          },
          vers: ["Luke 1:13-15", "Luke 1:41"],
        },
        {
          tekst: {
            no: "Johannes ble født ሰኔ 30. Da kong Herodes drepte de små guttene i Betlehem, flyktet Elisabet med ham ut i ørkenen. Han vokste opp der til han trådte fram for Israel.",
            am: "ቅዱስ ዮሐንስ ሰኔ ፴ ተወለደ። ሄሮድስ የቤተ ልሔምን ሕፃናት ባስገደለ ጊዜ ቅድስት ኤልሳቤጥ እርሱን ይዛ ወደ በረሃ ተሰደደች። ለእስራኤል እስከ ታየበት ቀን ድረስ በምድረ በዳ ኖረ።",
          },
          vers: ["Luke 1:80"],
        },
        {
          tekst: {
            no: "Han forkynte: «Omvend dere!» og gjorde veien klar for Herren. Han døpte Jesus i Jordan og pekte på ham: «Se, Guds lam, som bærer verdens synd!» Kirka kaller ham መጥምቀ መለኮት – han som døpte Gud.",
            am: "«ንስሐ ግቡ» እያለ ሰበከ፤ የጌታን መንገድ አዘጋጀ። ጌታችንን በዮርዳኖስ አጠመቀው፤ «እነሆ የዓለምን ኃጢአት የሚያስወግድ የእግዚአብሔር በግ» ብሎ መሰከረለት። ስለዚህ መጥምቀ መለኮት ይባላል።",
          },
          vers: ["Luke 1:76", "Matt 3:13-15", "John 1:29"],
        },
        {
          tekst: {
            no: "Jesus sa: «Ingen større enn døperen Johannes er stått fram blant dem som er født av kvinner.» Kirka kaller ham den siste av profetene og den første av apostlene.",
            am: "ጌታችን «ከሴቶች ከተወለዱት መካከል ከመጥምቁ ዮሐንስ የሚበልጥ አልተነሣም» ብሎ መሰከረለት። የነቢያት መጨረሻ፣ የሐዋርያት መጀመሪያ ይባላል።",
          },
          vers: ["Matt 11:11"],
        },
        {
          tekst: {
            no: "Johannes sa fra til kong Herodes at det var galt å ta brorens kone. Derfor ble han halshogd. Kirka minnes martyrdøden hans መስከረም 2. Nyttårsdagen, መስከረም 1, er også viet til ham.",
            am: "ሄሮድስን «የወንድምህ ሚስት ለአንተ ልትሆን አልተፈቀደም» ብሎ ገሠጸው፤ ስለዚህ አንገቱን አስቈረጠው። መስከረም ፪ በሰማዕትነት ያረፈበት ነው፤ ርእሰ ዐውደ ዓመት መስከረም ፩ም በስሙ ይጠራል።",
          },
          vers: ["Mark 6:17-18", "Matt 14:10"],
        },
      ],
    },
    {
      id: "engler",
      tittel: { no: "Hva er engler?", am: "መላእክት እነማን ናቸው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet መልአክ kommer av ge'ez-ord for «å sende» og «å lede». Englene er Guds sendebud. Kirka lærer at Gud skapte dem den første dagen, søndag, av ild og vind. De er ånder: vi ser dem ikke, de dør ikke, og de gifter seg ikke.",
            am: "መልአክ የሚለው ቃል «ለአከ፤ ላከ» እና «ተመልአከ፤ አለቃ ሆነ» ከሚሉ የግእዝ ግሦች የተገኘ ነው፤ መላእክት የእግዚአብሔር መልእክተኞች ናቸው። እግዚአብሔር በመጀመሪያው ቀን በእሑድ ከእሳትና ከነፋስ ፈጠራቸው። መናፍስት ስለሆኑ በዓይን አይታዩም፤ አይሞቱም፤ ፆታም የላቸውም።",
          },
          vers: ["Ps 104:4", "Heb 1:14"],
        },
        {
          tekst: {
            no: "Englenes viktigste arbeid er å lovprise Gud uten stans. Profeten Jesaja hørte dem rope: «Hellig, hellig, hellig er Herren, hærskarenes Gud.» Det samme synger vi i ቅዳሴ.",
            am: "የመላእክት ዋና አገልግሎት ያለ ዕረፍት እግዚአብሔርን ማመስገን ነው። ነቢዩ ኢሳይያስ «ቅዱስ፥ ቅዱስ፥ ቅዱስ» ሲሉ ሰማቸው። እኛም በቅዳሴ ይህንኑ እንዘምራለን።",
          },
          vers: ["Isa 6:3", "Ps 148:2", "Rev 5:11"],
        },
        {
          tekst: {
            no: "Englene blir sendt til mennesker med bud fra Gud. De bærer bønnene våre fram for Gud, og de verner Guds venner. Jesus sa at de små barna har engler i himmelen som alltid ser Faderens ansikt.",
            am: "መላእክት ከእግዚአብሔር ወደ ሰዎች ይላካሉ፤ የሰዎችን ጸሎት ያሳርጋሉ፤ የእግዚአብሔርን ወዳጆች ይጠብቃሉ። ጌታችንም የሕፃናት መላእክት በሰማያት ዘወትር የአባቱን ፊት እንደሚያዩ ተናገረ።",
          },
          vers: ["Rev 8:3-4", "Ps 34:8", "Matt 18:10", "Exod 23:20"],
        },
        {
          tekst: {
            no: "Englene er så mange at ingen kan telle dem. Kirka lærer at de er delt i 100 flokker (ነገድ) med ti ledere, i tre himler: ኢዮር, ራማ og ኤረር. Noen flokker er ኪሩቤል og ሱራፌል, som Bibelen nevner.",
            am: "መላእክት ከብዛታቸው የተነሣ ቍጥራቸው አይታወቅም። እግዚአብሔር በነገድ መቶ በአለቃ ዐሥር አድርጎ በሦስቱ ሰማያት በኢዮር፣ በራማና በኤረር አስፍሯቸዋል። ከእነርሱም ኪሩቤልና ሱራፌል ይገኙበታል።",
          },
          vers: ["Gen 3:24", "Isa 6:3"],
        },
        {
          tekst: {
            no: "Lederen for den første flokken het Satanael. Han ble stolt og sa: «Jeg har skapt dere.» Da sa Gabriel til englene: «La oss stå fast der vi er, til vi finner vår Gud.» Satanael falt og ble djevelen. Mikael fikk hans plass og ledet englene i kampen.",
            am: "የመጀመሪያው ነገድ አለቃ ሳጥናኤል ነበር። በትዕቢቱ «እኔ ፈጠርኋችሁ» አለ። ቅዱስ ገብርኤልም «ንቁም በበኅላዌነ እስከ ንረክቦ ለአምላክነ፤ አምላካችንን እስክናገኘው ድረስ በያለንበት እንጽና» ብሎ አረጋጋቸው። ሳጥናኤል ወደቀ፤ ዲያብሎስ ሆነ። ቅዱስ ሚካኤልም በእርሱ ፈንታ ተሾመ።",
          },
          vers: ["Rev 12:7-8"],
        },
        {
          tekst: {
            no: "Vi tilber ikke englene. Vi ærer dem som Guds tjenere og ber dem be for oss. Herrens engel sa selv til profeten Sakarja: «Herre, hvor lenge før du forbarmer deg over Jerusalem?» – englene ber for mennesker.",
            am: "መላእክትን አናመልካቸውም፤ የእግዚአብሔር አገልጋዮች ስለሆኑ እናከብራቸዋለን፤ እንዲያማልዱንም እንለምናቸዋለን። የእግዚአብሔር መልአክ «አቤቱ፥ የሠራዊት ጌታ ሆይ፥ … የማትምራቸው እስከ መቼ ነው?» ብሎ ስለ ሰዎች ለመነ።",
          },
          vers: ["Zech 1:12"],
        },
      ],
    },
    {
      id: "erkeenglene",
      tittel: { no: "De sju erkeenglene", am: "ሰባቱ ሊቃነ መላእክት" },
      ingress: {
        no: "Johannes så «de sju englene som står for Gud». Kirka regner sju erkeengler (ሊቃነ መላእክት): Mikael, Gabriel, Rafael, Raguel, Uriel, Fanuel og Afnin.",
        am: "ቅዱስ ዮሐንስ «በእግዚአብሔርም ፊት የሚቆሙትን ሰባቱን መላእክት አየሁ» አለ። ሊቃነ መላእክት ሰባት ናቸው፤ እነርሱም ቅዱስ ሚካኤል፣ ቅዱስ ገብርኤል፣ ቅዱስ ሩፋኤል፣ ቅዱስ ራጉኤል፣ ቅዱስ ዑራኤል፣ ቅዱስ ፋኑኤልና ቅዱስ አፍኒን ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "Kirka bygger listen på Johannes' åpenbaring. Englenes navn ender på -ኤል, som betyr «Gud».",
            am: "ቤተ ክርስቲያን ይህን ቍጥር በራእየ ዮሐንስ ላይ ትመሠርታለች። የመላእክቱ ስም በ«ኤል» ይጨርሳል፤ «ኤል» ስመ አምላክ ነው።",
          },
          vers: ["Rev 8:2"],
        },
        {
          tekst: {
            no: "ቅዱስ ሚካኤል (Mikael): Navnet betyr «Hvem er som Gud?». Han er englenes leder. Han hjalp profeten Daniel, han stred med djevelen om Moses' legeme, og han og englene hans kastet dragen ut av himmelen. Kirka lærer at han ber om nåde for menneskene og hjelper martyrene. Fester: ኅዳር 12 (satt over englene), ሰኔ 12 og den 12. i hver måned.",
            am: "ቅዱስ ሚካኤል፦ ስሙ «መኑ ከመ አምላክ? – እንደ እግዚአብሔር ያለ ማን ነው?» ማለት ነው። የመላእክት አለቃ ነው። ዳንኤልን ሊረዳ መጣ፤ ስለ ሙሴ ሥጋ ከዲያብሎስ ጋር ተከራከረ፤ ከመላእክቱ ጋር ዘንዶውን ተዋጋ። ለሰው ልጆች አማላጅ፣ ለሰማዕታትም አጋዥ ነው። በዓላቱ፦ ኅዳር ፲፪ (የተሾመበት)፣ ሰኔ ፲፪ና በየወሩ ፲፪።",
          },
          vers: ["Dan 10:13", "Jude 1:9", "Rev 12:7-8"],
        },
        {
          tekst: {
            no: "ቅዱስ ገብርኤል (Gabriel): «Jeg er Gabriel, som står for Guds ansikt.» Han forklarte syner for Daniel, ga Sakarja budskapet om Johannes og ga Maria det glade budskapet om at Guds Sønn skulle bli menneske. Fester: ታኅሣሥ 19 (de tre unge mennene i ildovnen), ሐምሌ 19 (Kirkos og Julitta), og den 19. i hver måned.",
            am: "ቅዱስ ገብርኤል፦ «እኔ በእግዚአብሔር ፊት የምቆመው ገብርኤል ነኝ» አለ። ለዳንኤል ራእዩን አስረዳው፤ ለዘካርያስ የዮሐንስን መወለድ፣ ለእመቤታችንም የጌታን ሰው መሆን አበሠረ። በዓላቱ፦ ታኅሣሥ ፲፱ (ሠለስቱ ደቂቅን ከእሳት ያዳነበት)፣ ሐምሌ ፲፱ (ቂርቆስንና ኢየሉጣን የረዳበት)ና በየወሩ ፲፱።",
          },
          vers: ["Dan 8:16", "Dan 9:21", "Luke 1:19", "Luke 1:26-27", "Dan 3:28"],
        },
        {
          tekst: {
            no: "ቅዱስ ሩፋኤል (Rafael): Navnet betyr «legedom fra Gud». I Tobits bok fulgte han den unge Tobias på reisen, drev ut en ond ånd fra Sara og helbredet Tobit. Han sa: «Jeg er Rafael, en av de sju hellige englene.» Kirka ber ham om hjelp for syke og for mødre som skal føde. Fest: ጳጉሜን 3.",
            am: "ቅዱስ ሩፋኤል፦ ስሙ «ከአምላክ ለሰዎች የተሰጠ ፈውስ» ማለት ነው። በመጽሐፈ ጦቢት ጦብያን በመንገድ መራው፤ ከሣራ ጋኔኑን አስወጣ፤ ጦቢትን ፈወሰው። «ሰባቱ ቅዱሳን መላእክት አንዱ መልአክ እኔ ሩፋኤል ነኝ» አለ። ፈዋሴ ዱያንና ፈታሔ ማኅፀን ይባላል። በዓሉ ጳጉሜን ፫ ነው።",
          },
          andre: [
            {
              no: "Tobits bok 12:15 (les den i Bibelen på nettstedet, under Tobits bok): «Jeg er Rafael, en av de sju hellige englene som bærer de helliges bønner fram for Den Helliges herlighet.»",
              am: "መጽሐፈ ጦቢት ፲፪፥፲፭፦ «የቅዱሳንን ጸሎት ከሚያሳርጉ፥ በገናናውና በቅዱሱ ጌትነት ፊት ከሚያቀርቡ ሰባቱ ቅዱሳን መላእክት አንዱ መልአክ እኔ ሩፋኤል ነኝ።»",
            },
            {
              no: "Tobits bok 5:4 og 12:14: Rafael fulgte Tobias, og Gud sendte ham for å helbrede Tobit og Sara.",
              am: "መጽሐፈ ጦቢት ፭፥፬ና ፲፪፥፲፬",
            },
          ],
        },
        {
          tekst: {
            no: "ቅዱስ ዑራኤል (Uriel): Navnet betyr «Guds lys». Enoks bok sier at han er satt over lyn og torden, og at han viste Enok himmelens hemmeligheter. Kirka lærer at han ga Esra et beger med visdom, at han ledet Maria på flukten til Egypt, og at han tok imot Jesu blod i et beger ved korset. Fester: ሐምሌ 22, ጥር 22, መጋቢት 27 og den 22. i hver måned.",
            am: "ቅዱስ ዑራኤል፦ ስሙ «ብርሃነ እግዚአብሔር» ማለት ነው። በመብረቅና በነጎድጓድ ላይ የተሾመ፣ ለሄኖክ ምሥጢረ ሰማይን የገለጠ ነው። ለዕዝራ ሱቱኤል የዕውቀትን ጽዋ አጠጣው፤ እመቤታችን ወደ ግብፅ በተሰደደች ጊዜ መንገድ መራቸው፤ በቀራንዮም የጌታችንን ደም በጽዋዕ ተቀበለ። ከሣቴ ምሥጢር ይባላል። በዓላቱ፦ ሐምሌ ፳፪፣ ጥር ፳፪፣ መጋቢት ፳፯ና በየወሩ ፳፪።",
          },
          andre: [
            {
              no: "Enoks bok (ሄኖክ) 6:2: «Uriel, en av de hellige englene, er satt over lyn og torden.»",
              am: "ሄኖክ ፮፥፪፦ «ከቅዱሳን መላእክት አንዱ ዑርኤል በመብረቅና በነጐድጓድ የተሾመ ነው።»",
            },
            {
              no: "Esra Sutuel (4 Esra) 14:38–40: «Åpne munnen og drikk det jeg gir deg å drikke.»",
              am: "ዕዝራ ሱቱኤል ፲፫፥፴፰፦ «አፍህን ክፈት፤ እኔም የማጠጣህን ጠጣ።»",
            },
          ],
        },
        {
          tekst: {
            no: "ቅዱስ ራጉኤል (Raguel), ቅዱስ ፋኑኤል (Fanuel) og ቅዱስ አፍኒን (Afnin): Enoks bok nevner Raguel og Fanuel blant de hellige englene som står for Gud. Raguel minnes den 1. i hver måned. Kirkas tradisjon forteller at Fanuel ga Maria himmelsk brød da hun bodde i templet.",
            am: "ቅዱስ ራጉኤል፣ ቅዱስ ፋኑኤልና ቅዱስ አፍኒን፦ መጽሐፈ ሄኖክ ራጉኤልንና ፋኑኤልን በእግዚአብሔር ፊት ከሚቆሙ ቅዱሳን መላእክት ጋር ይጠቅሳቸዋል። ቅዱስ ራጉኤል በየወሩ በ፩ ይታሰባል። ቅዱስ ፋኑኤል እመቤታችን በቤተ መቅደስ ሳለች ኅብስተ ሰማያዊ ይመግባት ነበር።",
          },
          andre: [
            {
              no: "Enoks bok (ሄኖክ) 6:4: «Raguel, en av de hellige englene …» og 20:40: «Mikael og Gabriel, Rafael og Fanuel …»",
              am: "ሄኖክ ፮፥፬፦ «ከቅዱሳን መላእክት አንዱ ራጉኤል …»፤ ሄኖክ ፳፥፵፦ «ሚካኤልና ገብርኤል፥ ሩፋኤልና ፋኑኤል …»",
            },
          ],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Efrem syreren", am: "ቅዱስ ኤፍሬም ሶርያዊ" },
      tekst: {
        no: "I ውዳሴ ማርያም for søndag sammenligner Efrem Maria med en vakker, duftende blomst fra Isais rot. Sønnen er duften og frukten av blomsten. Han sier også: «Hvilken tunge kan tale om deg, Jomfru?»",
        am: "ቅዱስ ኤፍሬም በውዳሴ ማርያም ዘእሑድ «አንቲ ውእቱ ጽጌ መዐዛ ሠናይ እንተ ሠረጸት እምሥርወ ዕሤይ፤ ከዕሤይ ሥር የተገኘች መዓዛዋ ያማረ ጽጌ አንቺ ነሽ» ብሎ እመቤታችንን በአበባ፣ ልጇን በመዓዛው መስሏል። «አይ ልሳን ዘይክል ነቢበ ዘይትናገር በእንቲአኪ» ብሎም አደነቀ።",
      },
      kilde:
        "Mahibere Kidusan: «አንቲ ውእቱ ጽጌ መዓዛ ሠናይ (ውዳሴ ማርያም ዘእሑድ)» – https://eotcmk.org/a/አንቲ-ውእቱ-ጽጌ-መዓዛ-ሠናይ-ውዳሴ-ማርያም/, og «‹‹ኢያቄም እና ሐና ሰማይን ወለዱ›› ቅዱስ ያሬድ» – https://eotcmk.org/a/ኢያቄም-እና-ሐና-ሰማይን-ወለዱ-ቅዱ/",
    },
    {
      navn: { no: "ቅዱስ ያሬድ", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "Yared synger: «Joakim og Anna fødte himmelen.» Han kaller Maria den andre himmelen og Guds trone på jorden: «I stedet for den himmelske ጽርሐ አርያም ble du ጽርሐ አርያም på jorden», for hun bar Gud.",
        am: "ቅዱስ ያሬድ «ኢያቄም እና ሐና ሰማይን ወለዱ» አለ። «ህየንተ አርያም ዘበሰማያት ዘኮንኪ አርያመ በዲበ ምድር፤ በሰማይ ባለ ጽርሐ አርያም ፈንታ በምድር ላይ ጽርሐ አርያምን ሆንሽ» ብሎ ዳግሚት ሰማይ፣ መንበረ መለኮት አላት።",
      },
      kilde:
        "Mahibere Kidusan (Melake Selam Kesis Dejene Shiferaw): «‹‹ኢያቄም እና ሐና ሰማይን ወለዱ›› ቅዱስ ያሬድ» – https://eotcmk.org/a/ኢያቄም-እና-ሐና-ሰማይን-ወለዱ-ቅዱ/",
    },
    {
      navn: { no: "Den hellige Ireneus", am: "ቅዱስ ሄሬኔዎስ" },
      tekst: {
        no: "Ireneus lærer at tre hemmeligheter er skjult i Guds stillhet: at Maria er jomfru for alltid, at hun fødte Immanuel, og at den udødelige Gud døde.",
        am: "ቅዱስ ሄሬኔዎስ የእመቤታችን ዘለዓለማዊ ድንግልና፣ ድንግል ማርያም አማኑኤልን መውለዷና የማይሞተው አምላክ መሞት በእግዚአብሔር የዝምታ ሸማ የተጠቀለሉ ሦስት ምሥጢሮች ናቸው ይላል።",
      },
      kilde: "Mahibere Kidusan: «ጌታችን ኢየሱስ ተወለደ» (2020) – https://eotcmk.org/a/ዮም-ፍስሓ-ኮነ-በእንተ-ልደቱ-ለክርስቶ/",
    },
    {
      navn: { no: "Kirkas lærere om englene (መጽሐፈ ቀሌምንጦስ)", am: "ሊቃውንተ ቤተ ክርስቲያን (መጽሐፈ ቀሌምንጦስ)" },
      tekst: {
        no: "Kirkas lærere forklarer, etter መጽሐፈ ቀሌምንጦስ, at Gud skapte englene den første dagen, delte dem i 100 flokker med ti ledere, og at Gabriel holdt englene samlet da Satanael falt.",
        am: "ሊቃውንት በመጽሐፈ ቀሌምንጦስ መሠረት እግዚአብሔር መላእክትን በመጀመሪያው ቀን እንደ ፈጠራቸው፣ በነገድ መቶ በአለቃ ዐሥር እንዳደረጋቸው፣ ሳጥናኤል በወደቀ ጊዜም ቅዱስ ገብርኤል መላእክትን እንዳረጋጋ ያስተምራሉ።",
      },
      kilde: "Mahibere Kidusan: «ዓለመ ሰማይ» (2022, etter መጽሐፈ ቀሌምንጦስ og «መላእክት» av Dn. Abel Kassahun) – https://eotcmk.org/a/ዓለመ-ሰማይ/",
    },
  ],
  ord: [
    { ord: "ወላዲተ አምላክ", forklaring: { no: "Guds mor (Theotokos), Marias viktigste navn", am: "አምላክን የወለደች፤ የእመቤታችን ስም" } },
    { ord: "እመቤታችን", forklaring: { no: "«vår Frue», slik vi omtaler Maria", am: "ድንግል ማርያምን የምንጠራበት የክብር ስም" } },
    { ord: "ኪዳነ ምሕረት", forklaring: { no: "barmhjertighetspakten Jesus ga sin mor", am: "ጌታችን ለእናቱ የገባው የምሕረት ቃል ኪዳን" } },
    { ord: "አማላጅነት", forklaring: { no: "forbønn: å be Gud for en annen", am: "ስለ ሌላው ወደ እግዚአብሔር መለመን" } },
    { ord: "መጥምቀ መለኮት", forklaring: { no: "«han som døpte Gud», Johannes døperen", am: "ጌታችንን ያጠመቀው ቅዱስ ዮሐንስ" } },
    { ord: "መልአክ / መላእክት", forklaring: { no: "engel / engler, Guds sendebud", am: "የእግዚአብሔር መልእክተኛ" } },
    { ord: "ሊቃነ መላእክት", forklaring: { no: "erkeenglene, englenes ledere", am: "የመላእክት አለቆች" } },
    { ord: "ነገድ", forklaring: { no: "flokk eller stamme av engler (det er 100)", am: "የመላእክት ክፍል፤ መቶ ነገድ ናቸው" } },
    { ord: "ኪሩቤል ወሱራፌል", forklaring: { no: "kjeruber og serafer, flokker av engler nær Guds trone", am: "በእግዚአብሔር መንበር ዙሪያ ያሉ የመላእክት ነገዶች" } },
    { ord: "ተአምረ ማርያም", forklaring: { no: "boka om Marias under", am: "የእመቤታችንን ተአምራት የያዘ መጽሐፍ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvorfor kaller vi Maria ወላዲተ አምላክ?", am: "እመቤታችንን ለምን ወላዲተ አምላክ እንላታለን?" },
      svar: {
        no: "Fordi barnet hun fødte, er Guds Sønn som ble menneske. Han er én, sann Gud og sant menneske. Elisabet kalte henne «min Herres mor».",
        am: "ከእርሷ የተወለደው ሰው የሆነው የእግዚአብሔር ልጅ ስለሆነ ነው፤ ፍጹም አምላክ ፍጹም ሰው ሆኖ አንድ ነው። ኤልሳቤጥም «የጌታዬ እናት» አለቻት።",
      },
    },
    {
      sporsmal: { no: "Tilber vi Maria og englene?", am: "እመቤታችንንና መላእክትን እናመልካለን?" },
      svar: {
        no: "Nei. Vi tilber bare Gud. Vi ærer dem fordi Gud har æret dem, og vi ber dem be for oss.",
        am: "አይደለም። የምናመልከው እግዚአብሔርን ብቻ ነው። እግዚአብሔር ስላከበራቸው እናከብራቸዋለን፤ እንዲያማልዱንም እንለምናቸዋለን።",
      },
    },
    {
      sporsmal: { no: "Hva skjedde i bryllupet i Kana, og hva lærer det oss?", am: "በቃና ዘገሊላ ምን ሆነ? ምንስ ያስተምረናል?" },
      svar: {
        no: "Vinen tok slutt. Maria ba Jesus om hjelp og sa til tjenerne: «Gjør det han sier dere!» Det viser at hun ser vår nød og ber for oss.",
        am: "የወይን ጠጅ አለቀ። እመቤታችን ልጇን ለመነች፤ አገልጋዮቹንም «የሚላችሁን ሁሉ አድርጉ» አለቻቸው። ችግራችንን አይታ እንደምታማልደን ያሳያል።",
      },
    },
    {
      sporsmal: { no: "Hvorfor kalles Johannes «den siste av profetene og den første av apostlene»?", am: "ቅዱስ ዮሐንስ ለምን «የነቢያት መጨረሻ፣ የሐዋርያት መጀመሪያ» ይባላል?" },
      svar: {
        no: "Han forkynte at Frelseren skulle komme, som profetene, og han pekte på Jesus og sa: «Se, Guds lam!», som apostlene.",
        am: "እንደ ነቢያት የመድኃኒትን መምጣት ሰበከ፤ እንደ ሐዋርያትም ጌታችንን «እነሆ የእግዚአብሔር በግ» ብሎ አሳየ።",
      },
    },
    {
      sporsmal: { no: "Når skapte Gud englene, og hva gjør de?", am: "እግዚአብሔር መላእክትን መቼ ፈጠራቸው? ሥራቸውስ ምንድን ነው?" },
      svar: {
        no: "Den første dagen, søndag. De lovpriser Gud uten stans, de blir sendt med bud til mennesker, de bærer bønnene våre fram og verner oss.",
        am: "በመጀመሪያው ቀን በእሑድ። ያለ ዕረፍት እግዚአብሔርን ያመሰግናሉ፤ ወደ ሰዎች ይላካሉ፤ ጸሎታችንን ያሳርጋሉ፤ ይጠብቁናል።",
      },
    },
    {
      sporsmal: { no: "Hvem er de sju erkeenglene?", am: "ሰባቱ ሊቃነ መላእክት እነማን ናቸው?" },
      svar: {
        no: "Mikael, Gabriel, Rafael, Raguel, Uriel, Fanuel og Afnin.",
        am: "ቅዱስ ሚካኤል፣ ቅዱስ ገብርኤል፣ ቅዱስ ሩፋኤል፣ ቅዱስ ራጉኤል፣ ቅዱስ ዑራኤል፣ ቅዱስ ፋኑኤልና ቅዱስ አፍኒን።",
      },
    },
  ],
  kilder: [
    { navn: "Mahibere Kidusan: «የእመቤታችን ቅድስት ድንግል ማርያም አማላጅነት» (barn, del 2)", url: "https://eotcmk.org/a/የእመቤታችን-ቅድስት-ድንግል-ማርያም-አማ-2/" },
    { navn: "Mahibere Kidusan: «ኪዳነ ምሕረት!» (barn)", url: "https://eotcmk.org/a/ኪዳነ-ምሕረት-5/" },
    { navn: "Mahibere Kidusan: «‹‹ኢያቄም እና ሐና ሰማይን ወለዱ›› ቅዱስ ያሬድ»", url: "https://eotcmk.org/a/ኢያቄም-እና-ሐና-ሰማይን-ወለዱ-ቅዱ/" },
    { navn: "Mahibere Kidusan: «አንቲ ውእቱ ጽጌ መዓዛ ሠናይ (ውዳሴ ማርያም ዘእሑድ)»", url: "https://eotcmk.org/a/አንቲ-ውእቱ-ጽጌ-መዓዛ-ሠናይ-ውዳሴ-ማርያም/" },
    { navn: "Mahibere Kidusan: «ቅዱስ ዮሐንስ መጥምቅ» (Kesis Hailu Birhanu)", url: "https://eotcmk.org/a/ቅዱስ-ዮሐንስ-መጥምቅ/" },
    { navn: "Mahibere Kidusan: «ዓለመ ሰማይ» (englene og de sju erkeenglene)", url: "https://eotcmk.org/a/ዓለመ-ሰማይ/" },
    { navn: "Mahibere Kidusan: «‘’ከመላእክት አለቆች አንዱ የሆነው ሚካኤል ሊረዳኝ መጣ።’’»", url: "https://eotcmk.org/a/ከመላእክት-አለቆች-አንዱ-የ/" },
    { navn: "Mahibere Kidusan: «‹‹የእግዚአብሔር መልአክ በሚፈሩት ሰዎች ዙሪያ ይሰፍራል›› » (barn, Gabriel)", url: "https://eotcmk.org/a/የእግዚአብሔር-መልአክ-በሚፈሩት-ሰዎ-2/" },
    { navn: "Mahibere Kidusan: «በዓለ ቅዱስ ሩፋኤል» (Kesis Habtamu Teshome)", url: "https://eotcmk.org/a/በዓለ-ቅዱስ-ሩፋኤል-3/" },
    { navn: "Mahibere Kidusan: «ሊቀ መላእክት ቅዱስ ዑራኤል» (Dn. Yohannes Temesgen)", url: "https://eotcmk.org/a/ሊቀ-መላእክት-ቅዱስ-ዑራኤል/" },
    { navn: "Mahibere Kidusan, søndagsskoleavdelingen: månedsartiklene «ወርኃ መስከረም», «ወርኃ ኅዳር», «ወርኃ ሰኔ», «ወርኃ ሐምሌ»", url: "https://eotcmk.org/a/" },
    { navn: "Bibelen på nettstedet: Tobits bok og Enoks bok (amharisk utgave 2000)" },
  ],
  utkast: true,
};
