import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om Marias fester, englene og helgenene:
// Mahibere Kidusan (eotcmk.org): «የቤተ ክርስቲያን በዓላት አከባባር» (barn: hvorfor vi feirer Maria, englene og helgenene),
// «የቅዱሳን አማላጅነት» (barn), «ኪዳነ ምሕረት!» og «ቃል ኪዳን» (barn: ተአምረ ማርያም, ዝክር i Marias navn), «በአታ ለእግዝእትነ
// ውስተ ቤተ መቅደስ» (መዝገበ ታሪክ), «ጽዮን ማርያም» (ኅዳር ጽዮን), «‹‹ኢያቄም እና ሐና ሰማይን ወለዱ›› ቅዱስ ያሬድ»,
// «አንቲ ውእቱ ጽጌ መዓዛ ሠናይ» (ወርኀ ጽጌ, ቅዱስ ኤፍሬም), «‹‹ዝክረ ጻድቅ ለዓለም ይሄሉ››», «‘’ከመላእክት አለቆች አንዱ የሆነው
// ሚካኤል ሊረዳኝ መጣ።’’», «በዓለ ቅዱስ ሩፋኤል», «ሊቀ መላእክት ቅዱስ ዑራኤል», «ዝክረ ቅዱስ ያሬድ», «ምእመናን በቤተ ክርስቲያን ሥርዓት
// ሊጠብቁ ይገባል!» (ጽዋ ማኅበር), «ማኅበራዊ ሕይወታችን!», og månedsartiklene «ወርኃ መስከረም» … «ወርኃ ጳጉሜን»;
// ethiopianorthodox.org: «ወርሃዊ በዓላት» (werawi bealat.pdf: dagene i måneden) og «Calendar» (33 Maria-fester, de månedlige
// festene, skytshelgen for hver familie); አስተምህሮ ዘተዋሕዶ (astemhro.com): «ንግሥ እና ንግድ» (hva ንግሥ er).
// Datoene er de samme som i lib/hoytider-data.ts. Datoene etter vår kalender (i parentes) gjelder de fleste år; noen år
// kommer de én dag senere.
// Usikkert: Mahibere Kidusans månedsartikkel «ወርኃ ኅዳር» sier at ታቦተ ጽዮን kom til landet ኅዳር 24, mens artikkelen
//   «ጽዮን ማርያም» (og kalenderdataene) har ኅዳር 21 som festen. Siden følger ኅዳር 21.
// Usikkert: Kildene sier lite om hvordan en ጽዋ ማኅበር er organisert (hvor ofte de møtes, hos hvem). Siden sier bare det
//   kildene har: troende samles i et ማኅበር, ber sammen og holder ዝክር for en helgen. Presten bør utdype.
// Usikkert: Listen over hva hver dag i måneden er viet til, er fra én kilde (ethiopianorthodox.org); bare de første navnene
//   for hver dag er tatt med.
export const mariaOgHelgenfester: Tema = {
  slug: "maria-og-helgenfester",
  del: "hoytider",
  tittel: { no: "Marias høytider og helgendagene", am: "በዓላተ ማርያምና ቅዱሳን" },
  undertittel: {
    no: "Hvorfor vi feirer Maria, englene og helgenene – og hvordan",
    am: "እመቤታችንን፣ መላእክትንና ቅዱሳንን ለምን እናከብራለን? እንዴትስ?",
  },
  bilde: "mariaVeggmaleri",
  ingress: {
    no:
      "Hver dag i året og hver dag i måneden har kirka gitt navnet til Herren, til jomfru Maria, til en engel eller til en helgen. På disse dagene takker vi Gud for det han har gjort gjennom sine venner, vi lærer av livet deres, og vi ber dem be for oss. Vi tilber bare Gud – men vi ærer dem han har æret.",
    am:
      "ቤተ ክርስቲያን የዓመቱንና የወሩን ቀናት በጌታችን፣ በእመቤታችን፣ በመላእክትና በቅዱሳን ስም ሰይማቸዋለች። በእነዚህ ቀናት እግዚአብሔር በወዳጆቹ ላደረገው እናመሰግናለን፤ ከሕይወታቸው እንማራለን፤ እንዲያማልዱንም እንለምናለን። የምናመልከው እግዚአብሔርን ብቻ ነው፤ እርሱ ያከበራቸውን ግን እናከብራለን።",
  },
  hovedvers: "Luke 1:48",
  avsnitt: [
    {
      id: "hvorfor",
      tittel: { no: "Hvorfor feirer vi Maria, englene og helgenene?", am: "እመቤታችንን፣ መላእክትንና ቅዱሳንን ለምን እናከብራለን?" },
      punkter: [
        {
          tekst: {
            no: "Maria sa selv: «Fra nå av skal alle slekter prise meg salig.» Når vi feirer henne, gjør vi det Bibelen sier, og vi takker Gud for de store tingene han gjorde med henne.",
            am: "እመቤታችን ራሷ «እነሆም፥ ከዛሬ ጀምሮ ትውልድ ሁሉ ብፅዕት ይሉኛል» አለች። እርሷን ስናከብር መጽሐፍ ቅዱስ ያለውን እንፈጽማለን፤ በእርሷ ላደረገው ታላቅ ሥራ እግዚአብሔርን እናመሰግናለን።",
          },
          vers: ["Luke 1:48-49"],
        },
        {
          tekst: {
            no: "Engelen Gabriel hilste Maria: «Vær hilset, du som har fått nåde! Herren er med deg.» Elisabet kalte henne «min Herres mor». Derfor kaller kirka henne ወላዲተ አምላክ, Guds mor.",
            am: "ቅዱስ ገብርኤል «ደስ ይበልሽ፥ ጸጋ የሞላብሽ ሆይ፥ ጌታ ከአንቺ ጋር ነው» ብሎ አመሰገናት። ኤልሳቤጥም «የጌታዬ እናት» አለቻት። ስለዚህ ቤተ ክርስቲያን ወላዲተ አምላክ ትላታለች።",
          },
          vers: ["Luke 1:28", "Luke 1:42-43"],
        },
        {
          tekst: {
            no: "Helgenene er Guds venner som levde i tro og fullførte løpet. Bibelen sier at vi er omgitt av en stor sky av vitner, og at vi skal huske våre ledere og etterligne troen deres.",
            am: "ቅዱሳን በእምነት የኖሩና ሩጫቸውን የፈጸሙ የእግዚአብሔር ወዳጆች ናቸው። መጽሐፍ ቅዱስ እንደ ደመና የሚያህሉ ብዙ ምስክሮች እንደ ከበቡን፣ የመሩንንም እንድናስብና እምነታቸውን እንድንመስል ይነግረናል።",
          },
          vers: ["Heb 12:1", "Heb 13:7"],
        },
        {
          tekst: {
            no: "«Den rettferdige skal være i evig minne,» sier Salmene. Derfor holder kirka minnedager for helgenene, både alene og sammen i et fellesskap (ማኅበር).",
            am: "«ጻድቅ ለዘላለም መታሰቢያ ይሆናል» ይላል መዝሙረ ዳዊት። ስለዚህ ቤተ ክርስቲያን በግልም በማኅበርም የቅዱሳንን ዝክር ታዘክራለች።",
          },
          vers: ["Ps 112:6"],
        },
        {
          tekst: {
            no: "Gud hører bønnene til sine venner. Han ba Abimelek om å la Abraham be for ham, og han sa at han ville høre Jobs bønn for vennene hans. Slik ber Maria, englene og helgenene for oss.",
            am: "እግዚአብሔር የወዳጆቹን ጸሎት ይሰማል። አብርሃም ስለ አቤሜሌክ እንዲጸልይለት፣ ኢዮብም ስለ ባልንጀሮቹ እንዲጸልይ ተነገረ። እንዲሁ እመቤታችን፣ መላእክትና ቅዱሳን ስለ እኛ ያማልዳሉ።",
          },
          vers: ["Gen 20:7", "Job 42:8"],
          andre: [
            {
              no: "Henok 12:34 (sitert av Mahibere Kidusan): «De rettferdige i himmelen lovpriser sammen med én røst, og de ber inderlig for menneskene.»",
              am: "ሄኖክ ፲፪፥፴፬፦ «በሰማይ የሚኖሩ ጻድቃን በአንድ ቃል ሆነው ተባብረው ያመሰግናሉ፤ ለሰውም ፈጽመው ይለምናሉ።»",
            },
          ],
        },
        {
          tekst: {
            no: "Vi tilber ikke helgenene. Vi tilber bare Gud. Vi ærer helgenene fordi Gud har æret dem. Kirka sier at en høytid minner oss om de store gjerningene Maria, englene og helgenene har gjort for oss ved å be til Skaperen.",
            am: "ቅዱሳንን አናመልካቸውም፤ የምናመልከው እግዚአብሔርን ብቻ ነው። እግዚአብሔር ስላከበራቸው እናከብራቸዋለን። በዓላቱም እመቤታችን፣ ቅዱሳን መላእክትና ቅዱሳን ከፈጣሪ አማልደው ያደረጉልንን ድንቅ ውለታ ለማስታወስ ይከበራሉ።",
          },
          vers: ["Matt 4:10", "John 12:26"],
        },
      ],
    },
    {
      id: "maria",
      tittel: { no: "Marias høytider", am: "በዓላተ እግዝእትነ ማርያም" },
      ingress: {
        no: "Kirka har 33 fester for Maria i løpet av året. Her er de viktigste. Datoen etter vår kalender står i parentes.",
        am: "ቤተ ክርስቲያን በዓመት ሠላሳ ሦስት የእመቤታችን በዓላት አሏት። ዋና ዋናዎቹ እነዚህ ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "ጽንሰታ ለማርያም, ነሐሴ 7 (13. august): Maria blir unnfanget av sine foreldre, den hellige Anna og den hellige Joakim.",
            am: "ጽንሰታ ለማርያም ነሐሴ ፯፦ እመቤታችን ከቅድስት ሐናና ከቅዱስ ኢያቄም የተፀነሰችበት ዕለት።",
          },
        },
        {
          tekst: {
            no: "ልደታ ለማርያም, ግንቦት 1 (9. mai): Marias fødsel. Jared synger: «Joakim og Anna fødte himmelen», for Maria skulle bære Gud.",
            am: "ልደታ ለማርያም ግንቦት ፩፦ የእመቤታችን ልደት። ቅዱስ ያሬድ «ኢያቄም እና ሐና ሰማይን ወለዱ» ብሎ አመሰገናት፤ አምላክን የምትሸከም ናትና።",
          },
        },
        {
          tekst: {
            no: "በዓታ ለማርያም, ታኅሣሥ 3 (12. desember): Tre år gammel blir Maria ført inn i templet av Anna og Joakim, slik de hadde lovet Gud. Kirkas tradisjon forteller at engelen Fanuel ga henne himmelsk brød og drikke, og at hun bodde i templet i tolv år.",
            am: "በዓታ ለማርያም ታኅሣሥ ፫፦ እመቤታችን በሦስት ዓመቷ ሐናና ኢያቄም በተሳሉት ስእለት ወደ ቤተ መቅደስ ገባች። ቅዱስ ፋኑኤል ኅብስተ ሰማያዊና ጽዋዕ ሰማያዊ እየመገባት ዐሥራ ሁለት ዓመት በቤተ መቅደስ ኖረች።",
          },
        },
        {
          tekst: {
            no: "ቁስቋም, ኅዳር 6 (15. november): Maria, Josef og Jesusbarnet flyktet til Egypt fra kong Herodes. Festen avslutter ወርኀ ጽጌ, «blomstertida», da kirka minnes flukten med ማኅሌተ ጽጌ.",
            am: "ቁስቋም ኅዳር ፮፦ እመቤታችን ከልጇና ከዮሴፍ ጋር ከሄሮድስ ሸሽታ ወደ ግብፅ ተሰደደች፤ ደብረ ቁስቋምም ደረሰች። ከመስከረም ፳፮ እስከ ኅዳር ፭ ያለው ወርኀ ጽጌ ይባላል፤ በማኅሌተ ጽጌ የእመቤታችን ስደት ይታሰባል።",
          },
          vers: ["Matt 2:13-15"],
        },
        {
          tekst: {
            no: "ኅዳር ጽዮን, ኅዳር 21 (30. november): Paktens ark, ታቦተ ጽዮን, med lovtavlene. Arken er et bilde på Maria, som bar Guds Ord i seg. Kirkas lærere sier at arken kom til Etiopia og står i kirka Aksum Tsion.",
            am: "ኅዳር ጽዮን ኅዳር ፳፩፦ ዐሥርቱ ቃላት የተጻፉባት ታቦተ ጽዮን የምትታሰብበት ነው። ጽዮን «አምባ፣ መጠጊያ» ማለት ሲሆን የአምላክ ማደሪያ የሆነችውን እመቤታችንን ትመስላለች። ታቦተ ጽዮን ወደ ሀገራችን መጥታ በአክሱም ጽዮን እንደምትገኝ ሊቃውንት ይናገራሉ።",
          },
          vers: ["Exod 31:18"],
        },
        {
          tekst: {
            no: "ዕረፍታ ለማርያም, ጥር 21 (29. januar): Minnet om at Maria døde. Derfor er den 21. i hver måned viet til Maria.",
            am: "ዕረፍታ ለማርያም ጥር ፳፩፦ የእመቤታችን የዕረፍቷ መታሰቢያ። ስለዚህ በየወሩ ፳፩ ለእመቤታችን የተሰጠ ቀን ነው።",
          },
        },
        {
          tekst: {
            no: "ኪዳነ ምሕረት, የካቲት 16 (23. februar): «Barmhjertighetens pakt». Jesus lovet sin mor at han vil vise nåde mot den som ber i hennes navn, gir mat til sultne i hennes navn og holder ዝክር for henne. Den 16. i hver måned minnes vi denne pakten.",
            am: "ኪዳነ ምሕረት የካቲት ፲፮፦ ጌታችን ስሟን ለሚጠራ፣ በስሟ ለተራበ ለሚያበላና ዝክሯን ለሚዘክር ምሕረትን እንደሚያደርግ ለእናቱ ቃል ኪዳን የገባበት ዕለት። በየወሩ በ፲፮ ይታሰባል።",
          },
        },
        {
          tekst: {
            no: "Fra ተአምረ ማርያም: En mann som het Simon hadde gjort mye ondt. Men en gang ga han litt vann til en tørst mann som ba «for Marias skyld». Da han døde, ba Maria for ham, og Jesus viste ham nåde på grunn av pakten.",
            am: "በተአምረ ማርያም እንደ ተጻፈው ስምዖን (በላዔ ሰብ) ብዙ ኃጢአት ሠርቶ ነበር። አንድ ቀን ግን «ስለ እግዝእትነ ማርያም» ብሎ የለመነውን የተጠማ ሰው ጥቂት ውኃ አጠጣ። በሞተ ጊዜ እመቤታችን አማለደችው፤ ጌታችንም በገባላት ቃል ኪዳን ማረላት።",
          },
          vers: ["Matt 10:42"],
        },
        {
          tekst: {
            no: "ደብረ ምጥማቅ, ግንቦት 21 (29. mai): Minnet om at Maria viste seg ved kirka hennes i Mitmak i Egypt.",
            am: "ደብረ ምጥማቅ ግንቦት ፳፩፦ እመቤታችን በግብፅ በደብረ ምጥማቅ በስሟ በታነጸችው ቤተ ክርስቲያን የተገለጠችበት።",
          },
        },
        {
          tekst: {
            no: "ፍልሰታ ለማርያም, ነሐሴ 16 (22. august): Marias oppstandelse og opptakelse til himmelen. Før festen faster vi ጾመ ፍልሰታ i 15 dager, slik apostlene fastet for å få se henne. Les mer på siden om fastene.",
            am: "ፍልሰታ ለማርያም ነሐሴ ፲፮፦ የእመቤታችን ትንሣኤና ዕርገት መታሰቢያ። ከበዓሉ በፊት ሐዋርያት እንደ ጾሙት ጾመ ፍልሰታን ዐሥራ አምስት ቀን እንጾማለን።",
          },
        },
        {
          tekst: {
            no: "I bryllupet i Kana sa Maria til tjenerne: «Gjør det han sier dere!» Det er hennes råd til oss også. På korset ga Jesus henne til disippelen Johannes som mor.",
            am: "በቃና ሰርግ እመቤታችን አገልጋዮቹን «የሚላችሁን ሁሉ አድርጉ» አለቻቸው፤ ይህ ለእኛም ምክሯ ነው። ጌታችንም በመስቀል ላይ ሆኖ ለደቀ መዝሙሩ ለዮሐንስ እናት አድርጎ ሰጣት።",
          },
          vers: ["John 2:5", "John 19:26-27"],
        },
      ],
    },
    {
      id: "englene",
      tittel: { no: "Englenes fester", am: "በዓላተ መላእክት" },
      ingress: {
        no: "Englene er Guds tjenere. De lovpriser Gud uten stans, de beskytter oss, og de ber for oss. Kirka feirer særlig de store englene, erkeenglene (ሊቃነ መላእክት).",
        am: "መላእክት የእግዚአብሔር አገልጋዮች ናቸው፤ ሳያቋርጡ ያመሰግናሉ፤ ይጠብቁናል፤ ያማልዱናል። ቤተ ክርስቲያን በተለይ የሊቃነ መላእክትን በዓላት ታከብራለች።",
      },
      punkter: [
        {
          tekst: {
            no: "«Herrens engel slår leir rundt dem som frykter ham, og frir dem ut.» Gud sender englene sine for å verne oss på alle våre veier.",
            am: "«የእግዚአብሔር መልአክ በሚፈሩት ሰዎች ዙሪያ ይሰፍራል፥ ያድናቸውማል።» እግዚአብሔር በመንገዳችን ሁሉ እንዲጠብቁን መላእክቱን ያዝዝልናል።",
          },
          vers: ["Ps 34:8", "Ps 91:11", "Heb 1:14"],
        },
        {
          tekst: {
            no: "Mikael, ኅዳር 12 (21. november) og ሰኔ 12 (19. juni), og den 12. i hver måned: Navnet betyr «Hvem er som Gud?». Da djevelen gjorde opprør, sto Mikael fast og ledet englene. ኅዳር 12 ble han satt over englene. Han er barmhjertig og ber om nåde for menneskene.",
            am: "ቅዱስ ሚካኤል ኅዳር ፲፪ና ሰኔ ፲፪፤ በየወሩም በ፲፪፦ ሚካኤል ማለት «መኑ ከመ አምላክ? – እንደ እግዚአብሔር ያለ ማን ነው?» ማለት ነው። ዲያብሎስ በትዕቢቱ ሁከት ባስነሣ ጊዜ የመላእክትን ሠራዊት መራ። ኅዳር ፲፪ የመላእክት አለቃ ሆኖ ተሾመ። ለሰው ልጆች ምሕረትን የሚለምን ርኅሩኅ መልአክ ነው።",
          },
          vers: ["Dan 10:13", "Rev 12:7-8"],
        },
        {
          tekst: {
            no: "Gabriel, ታኅሣሥ 19 (28. desember) og ሐምሌ 19 (26. juli), og den 19. i hver måned: Gabriel står for Guds ansikt. Han ga Maria det glade budskapet. ታኅሣሥ 19 minnes vi at han reddet de tre unge mennene i ildovnen.",
            am: "ቅዱስ ገብርኤል ታኅሣሥ ፲፱ና ሐምሌ ፲፱፤ በየወሩም በ፲፱፦ በእግዚአብሔር ፊት የሚቆም መልአክ ነው። ለእመቤታችን የምሥራቹን ነገራት። ታኅሣሥ ፲፱ ሠለስቱ ደቂቅን ከእሳት ያዳነበት ይታሰባል።",
          },
          vers: ["Luke 1:19", "Dan 3:28"],
        },
        {
          tekst: {
            no: "ሐምሌ 19 minnes vi også det lille barnet Kirkos og moren hans Julitta. De ville ikke tilbe avgudene, og Gabriel kom og hjalp dem.",
            am: "ሐምሌ ፲፱ ደግሞ ሕፃኑ ቅዱስ ቂርቆስና እናቱ ቅድስት ኢየሉጣ ለጣዖት አንሰግድም ብለው በጸኑ ጊዜ ቅዱስ ገብርኤል የረዳቸው ይታሰባል።",
          },
        },
        {
          tekst: {
            no: "Rafael, ጳጉሜን 3 (8. september), og den 13. i hver måned: Navnet betyr «helbredelse fra Gud». Han er en av de sju høyeste englene, og han hjelper de syke.",
            am: "ቅዱስ ሩፋኤል ጳጉሜን ፫፤ በየወሩም በ፲፫፦ ሩፋኤል ማለት «ከአምላክ ለሰዎች የተሰጠ ፈውስ» ማለት ነው። ከሰባቱ ሊቃነ መላእክት አንዱ ነው፤ ሕሙማንን ይፈውሳል።",
          },
          andre: [
            {
              no: "Tobit 12:15: «Jeg er Rafael, en av de sju hellige englene.»",
              am: "ጦቢት ፲፪፥፲፭፦ «ከከበሩ ከሰባቱ አለቆች አንዱ አለቃ እኔ ሩፋኤል ነኝ።»",
            },
          ],
        },
        {
          tekst: {
            no: "Uriel, den 22. i hver måned: Navnet betyr «Guds lys». ሐምሌ 22 (29. juli) minnes vi at han ga profeten Esra et beger med visdom å drikke.",
            am: "ቅዱስ ዑራኤል በየወሩ በ፳፪፦ ዑራኤል «ብርሃነ እግዚአብሔር» ማለት ነው። ሐምሌ ፳፪ ለነቢዩ ዕዝራ ሱቱኤል የዕውቀትን ጽዋ ያጠጣበት ዕለት ይታሰባል።",
          },
          andre: [
            {
              no: "Esra Sutuel (4 Esra) 14:38–40: Uriel sier: «Åpne munnen og drikk det jeg gir deg.»",
              am: "ዕዝራ ሱቱኤል ፲፫፥፴፰፦ «አፍህን ክፈት፤ እኔም የማጠጣህን ጠጣ።»",
            },
          ],
        },
        {
          tekst: {
            no: "Engelen Raguel minnes den 1. i hver måned. Jesus sa at det er glede blant Guds engler over én synder som angrer.",
            am: "ቅዱስ ራጉኤል በየወሩ በ፩ ይታሰባል። ጌታችን ንስሐ በሚገባ በአንድ ኃጢአተኛ በእግዚአብሔር መላእክት ፊት ደስታ እንደሚሆን ተናግሯል።",
          },
          vers: ["Luke 15:10"],
        },
      ],
    },
    {
      id: "helgener",
      tittel: { no: "Helgenfester", am: "በዓላተ ቅዱሳን" },
      ingress: {
        no: "Kirka minnes profeter, apostler, martyrer (ሰማዕታት) og rettferdige (ጻድቃን). Hver dag har sine helgener i boka ስንክሳር. Her er noen av de store festene.",
        am: "ቤተ ክርስቲያን ነቢያትን፣ ሐዋርያትን፣ ሰማዕታትንና ጻድቃንን ታስባለች። በየዕለቱ የሚታሰቡት ቅዱሳን በስንክሳር ተጽፈዋል። ከዋና ዋናዎቹ በዓላት ጥቂቶቹ እነዚህ ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "Johannes døperen, መስከረም 1 (11. september): Det nye året begynner med ham. Han var den siste av profetene og den første av apostlene. Han ble drept av kong Herodes for sannhetens skyld.",
            am: "መጥምቀ መለኮት ቅዱስ ዮሐንስ መስከረም ፩፦ ርእሰ ዐውደ ዓመት በስሙ ይጀመራል። የነቢያት መጨረሻ፣ የሐዋርያት መጀመሪያ ነው። በሄሮድስ እጅ በሰማዕትነት ዐረፈ።",
          },
          vers: ["Matt 11:11", "Mark 6:27"],
        },
        {
          tekst: {
            no: "Den hellige Stefanus, ጥር 1 (9. januar), og den 17. i hver måned: Den første martyren. Mens han ble steinet, ba han: «Herre, tilregn dem ikke denne synden!» Saulus, som var med, ble senere apostelen Paulus.",
            am: "ቀዳሜ ሰማዕት ቅዱስ እስጢፋኖስ ጥር ፩፤ በየወሩም በ፲፯፦ ሲወግሩት «ጌታ ሆይ፥ ይህን ኃጢአት አትቍጠርባቸው» ብሎ ጸለየ። በዚያ የነበረው ሳውል ኋላ ቅዱስ ጳውሎስ ሆነ።",
          },
          vers: ["Acts 7:59-60"],
        },
        {
          tekst: {
            no: "Den hellige Georg (ቅዱስ ጊዮርጊስ), ሚያዝያ 23 (1. mai), og den 23. i hver måned: «Martyrenes leder». Han nektet å fornekte Kristus og døde for troen.",
            am: "ሊቀ ሰማዕታት ቅዱስ ጊዮርጊስ ሚያዝያ ፳፫፤ በየወሩም በ፳፫፦ ክርስቶስን አልክድም ብሎ በሰማዕትነት ያረፈበት ዕለት።",
          },
          vers: ["Rev 2:10"],
        },
        {
          tekst: {
            no: "Apostlene Peter og Paulus, ሐምሌ 5 (12. juli): De døde som martyrer i Roma. Dagen før slutter ጾመ ሐዋርያት.",
            am: "ቅዱስ ጴጥሮስና ቅዱስ ጳውሎስ ሐምሌ ፭፦ በሮም በሰማዕትነት ያረፉበት ዕለት፤ የጾመ ሐዋርያት መፈጸሚያ።",
          },
          vers: ["2Tim 4:7-8"],
        },
        {
          tekst: {
            no: "Den hellige Jared, ግንቦት 11 (19. mai): Han skrev kirkas hymner og melodier. Han døde ikke, men ble tatt bort i et kloster i Simien-fjellene, 75 år gammel.",
            am: "ቅዱስ ያሬድ ግንቦት ፲፩፦ የዜማ አባት ቅዱስ ያሬድ በ፸፭ ዓመቱ በሰሜን ተራራ ውስጥ ደብረ ሐዊ በሚባል ገዳም የተሰወረበት ዕለት፤ አልሞተም።",
          },
        },
        {
          tekst: {
            no: "Abune Tekle Haymanot, ታኅሣሥ 24 (2. januar) er fødselsdagen hans, og ነሐሴ 24 (30. august) er dagen han døde. Han minnes også den 24. i hver måned. Han var en etiopisk apostel som forkynte evangeliet i landet.",
            am: "አቡነ ተክለ ሃይማኖት ታኅሣሥ ፳፬ ልደቱ፣ ነሐሴ ፳፬ ዕረፍቱ ነው፤ በየወሩም በ፳፬ ይታሰባል። ወንጌልን ያስፋፋ ኢትዮጵያዊ ሐዋርያ ነው።",
          },
        },
        {
          tekst: {
            no: "Kirka minnes også Det gamle testamentes hellige, for eksempel kong David (ታኅሣሥ 23), profeten Elia (ታኅሣሥ 1) og Abraham (den 28. i hver måned).",
            am: "ቤተ ክርስቲያን የብሉይ ኪዳን ቅዱሳንንም ታስባለች፤ ለምሳሌ ቅዱስ ዳዊትን (ታኅሣሥ ፳፫)፣ ነቢዩ ኤልያስን (ታኅሣሥ ፩) እና አብርሃምን (በየወሩ ፳፰)።",
          },
        },
      ],
    },
    {
      id: "manedlige",
      tittel: { no: "De månedlige minnedagene", am: "ወርኃዊ በዓላት" },
      ingress: {
        no: "Kirka har gitt hver dag i måneden et navn. Dagene minnes hver måned, men én eller to ganger i året bæres ታቦቱ ut og dagen feires stort.",
        am: "ቤተ ክርስቲያን በወር ውስጥ ያሉትን እያንዳንዱን ቀናት በጌታችን፣ በእመቤታችን፣ በመላእክትና በቅዱሳን ሰይማቸዋለች። እነዚህ ቀናት በየወሩ ታስበው ቢውሉም በዓመት አንድ ወይም ሁለት ጊዜ ታቦተ ሕጉ ወጥቶ ይከበራል።",
      },
      punkter: [
        {
          tekst: {
            no: "Herrens dager: den 6. (Jesus), den 7. (Den hellige treenighet), den 10. (korset), den 13. (Gud Fader), den 27. (መድኃኔ ዓለም – verdens frelser som døde på korset) og den 29. (በዓለ ወልድ – Jesu fødsel).",
            am: "የጌታ ቀናት፦ ፮ ኢየሱስ፣ ፯ ሥላሴ፣ ፲ በዓለ መስቀል፣ ፲፫ እግዚአብሔር አብ፣ ፳፯ መድኃኔ ዓለም፣ ፳፱ በዓለ ወልድ።",
          },
        },
        {
          tekst: {
            no: "Marias dager: den 1. (ልደታ), den 3. (በዓታ), den 6. (ቁስቋም), den 16. (ኪዳነ ምሕረት), den 20. (ጽንሰታ) og den 21. (Marias dag).",
            am: "የእመቤታችን ቀናት፦ ፩ ልደታ፣ ፫ በዓታ፣ ፮ ቁስቋም፣ ፲፮ ኪዳነ ምሕረት፣ ፳ ጽንሰታ፣ ፳፩ በዓለ እግዝእትነ ማርያም።",
          },
        },
        {
          tekst: {
            no: "Englenes dager: den 1. (Raguel), den 12. (Mikael), den 13. (Rafael), den 19. (Gabriel) og den 22. (Uriel).",
            am: "የመላእክት ቀናት፦ ፩ ራጉኤል፣ ፲፪ ሚካኤል፣ ፲፫ ሩፋኤል፣ ፲፱ ገብርኤል፣ ፳፪ ዑራኤል።",
          },
        },
        {
          tekst: {
            no: "Noen av helgenenes dager: den 2. (apostelen Taddeus), den 4. (apostelen Johannes), den 5. (Peter og Paulus, Abune Gebre Menfes Kidus), den 11. (Anna og Joakim), den 14. (Abba Aregawi), den 15. (Kirkos og Julitta), den 17. (Stefanus), den 18. (apostelen Filip, Ewostatewos), den 23. (Georg), den 24. (Tekle Haymanot), den 25. (Merkurios) og den 30. (evangelisten Markus).",
            am: "ከቅዱሳን ቀናት ጥቂቶቹ፦ ፪ ታዴዎስ ሐዋርያ፣ ፬ ዮሐንስ ወልደ ነጎድጓድ፣ ፭ ጴጥሮስ ወጳውሎስና አቡነ ገብረ መንፈስ ቅዱስ፣ ፲፩ ሃና ወኢያቄም፣ ፲፬ አባ አረጋዊ፣ ፲፭ ቂርቆስና ኢየሉጣ፣ ፲፯ ቅዱስ እስጢፋኖስ፣ ፲፰ ፊልጶስ ሐዋርያና ኤዎስጣጤዎስ፣ ፳፫ ቅዱስ ጊዮርጊስ፣ ፳፬ አቡነ ተክለ ሃይማኖት፣ ፳፭ መርቆሬዎስ፣ ፴ ማርቆስ ወንጌላዊ።",
          },
        },
        {
          tekst: {
            no: "Det er lurt å vite hvilken dag det er i kirkas kalender. Mange ber en ekstra bønn eller gir litt til de fattige på dagen til helgenen som kirka deres eller familien deres har som skytshelgen.",
            am: "የዕለቱን በዓል ማወቅ መልካም ነው። ብዙዎች በአጥቢያቸው ወይም በቤተሰባቸው ጠባቂ ቅዱስ ቀን ተጨማሪ ጸሎት ያደርሳሉ፤ ለነዳያንም ይመጸውታሉ።",
          },
        },
      ],
    },
    {
      id: "nigs-tsiwa-zikr",
      tittel: { no: "ንግሥ, ጽዋ ማኅበር og ዝክር", am: "ንግሥ፣ ጽዋ ማኅበርና ዝክር" },
      punkter: [
        {
          tekst: {
            no: "Hver kirke har et ታቦት med navnet til Herren, Maria, en engel eller en helgen. Kirka får det samme navnet. Les mer om ታቦት og ጽላት på siden om tingene i kirka.",
            am: "እያንዳንዱ ቤተ ክርስቲያን በጌታችን፣ በእመቤታችን፣ በመልአክ ወይም በቅዱስ ስም የተሰየመ ታቦት አለው፤ ቤተ ክርስቲያኑም በዚያው ስም ይጠራል።",
          },
        },
        {
          tekst: {
            no: "ንግሥ er den store årsfesten for helgenen som ታቦቱ har navnet til. Ordet kommer av ንግሥና, «kongedømme»: Vi feirer den himmelske æren Gud har gitt sine hellige.",
            am: "በዓለ ንግሥ ታቦቱ በስሙ የተሰየመለት ቅዱስ ዓመታዊ በዓል ነው። እግዚአብሔር ያከበራቸው ቅዱሳን መላእክትና ሰዎች ሰማያዊ ክብራቸው (ንግሥናቸው) የሚታሰብበት የከበረ በዓል ነው።",
          },
        },
        {
          tekst: {
            no: "Hvordan feires ንግሥ? Prestene synger ማኅሌት hele natta. Om morgenen ber de ኪዳን og holder ቅዳሴ. Så bæres ታቦቱ ut med sang og jubel, går rundt kirka og velsigner folket. Kor synger, og det blir undervisning om dagens helgen.",
            am: "በንግሥ ዕለት ሊቃውንቱ ሌሊቱን በማኅሌት ያመሰግናሉ፤ ጠዋት ኪዳን ተደርሶ ቅዳሴ ይቀደሳል። ከዚያም ታቦተ ሕጉ በዝማሬና በእልልታ ታጅቦ ከመንበሩ ተነሥቶ ሕዝቡን እየባረከ ዑደት ያደርጋል። ወረብና መዝሙር ይቀርባል፤ የዕለቱን በዓል የሚመለከት ትምህርት ይሰጣል።",
          },
          vers: ["2Sam 6:15"],
        },
        {
          tekst: {
            no: "Kirka advarer mot å gjøre ንግሥ til marked og pengeinnsamling. ንግሥ er for å be, lære Guds ord og ære de hellige – Jesus sa: «Gjør ikke min Fars hus til et handelshus!»",
            am: "ንግሥን የንግድና የገቢ ማሰባሰቢያ ማድረግ ተገቢ አይደለም። ንግሥ ቃለ እግዚአብሔርን የምንማርበት፣ የምናመሰግንበትና ቅዱሳንን የምናከብርበት ዕለት ነው። ጌታችን «የአባቴን ቤት የንግድ ቤት አታድርጉት» ብሏል።",
          },
          vers: ["John 2:16"],
        },
        {
          tekst: {
            no: "ዝክር betyr «minne». Å holde ዝክር er å minnes en helgen ved å gi mat til fattige og gjester i helgenens navn, og ved å be og takke Gud. Den som gjør godt i en helgens navn, får del i velsignelsen.",
            am: "ዝክር «መታሰቢያ» ማለት ነው። ዝክር መዘከር በቅዱሳን ስም ለነዳያንና ለእንግዶች ማብላት፣ መጸለይና እግዚአብሔርን ማመስገን ነው። በቅዱሳን ስም መልካም የሚያደርግ በረከታቸውን ያገኛል።",
          },
          vers: ["Matt 10:41-42", "Luke 14:13-14"],
        },
        {
          tekst: {
            no: "Mange familier har en skytshelgen, for eksempel Mikael, Gabriel, Georg, Maria, Johannes døperen eller Tekle Haymanot. Minnedagen går i arv fra foreldre til barn.",
            am: "ብዙ ቤተሰቦች ጠባቂ ቅዱስ አላቸው፤ ለምሳሌ ቅዱስ ሚካኤል፣ ቅዱስ ገብርኤል፣ ቅዱስ ጊዮርጊስ፣ እመቤታችን፣ ቅዱስ ዮሐንስ ወይም አቡነ ተክለ ሃይማኖት። ዝክሩም ከአባት ወደ ልጅ ይተላለፋል።",
          },
        },
        {
          tekst: {
            no: "En ጽዋ ማኅበር er et fellesskap av troende som samles i navnet til en helgen eller en av Marias fester. De ber sammen, holder ዝክር, deler mat og hjelper hverandre. Jesus sa: «Der to eller tre er samlet i mitt navn, er jeg midt iblant dem.»",
            am: "ጽዋ ማኅበር በአንድ ቅዱስ ወይም በእመቤታችን በዓል ስም የሚሰባሰቡ ምእመናን ማኅበር ነው። በአንድነት ይጸልያሉ፤ ቅዱሳንን በጋራ ይዘክራሉ፤ ማዕድ ይካፈላሉ፤ ይረዳዳሉ። ጌታችን «ሁለት ወይም ሦስት በስሜ በሚሰበሰቡበት በዚያ በመካከላቸው እሆናለሁ» ብሏል።",
          },
          vers: ["Matt 18:20", "Acts 2:46"],
        },
        {
          tekst: {
            no: "På en helgenfest gjør vi ikke ስግደት helt ned til jorda på Herrens, Marias og Mikaels fester, for de er gledesdager. Vi går i kirka, hører Guds ord, gir til de fattige og besøker de syke.",
            am: "በጌታ፣ በእመቤታችንና በሚካኤል በዓላት የደስታ ቀናት ስለሆኑ አይሰገድም። ወደ ቤተ ክርስቲያን ሄደን ቃለ እግዚአብሔርን እንሰማለን፤ እንመጸውታለን፤ የታመሙትን እንጠይቃለን።",
          },
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Jared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "Jared synger om Maria: «I stedet for den himmelske tronsalen i det høye ble du en tronsal på jorda.» Hun ble bolig for Gud, som er ild – derfor er hun større enn kjerubene og serafene.",
        am: "«ህየንተ አርያም ዘበሰማያት ዘኮንኪ አርያመ በዲበ ምድር» – በሰማይ ባለ ጽርሐ አርያም ፈንታ በምድር ላይ ጽርሐ አርያምን ሆንሽ። እሳት ለሆነው አምላክ ማደሪያ ሆናለችና ከኪሩቤልና ከሱራፌል ትበልጣለች።",
      },
      kilde: "ድጓ (sitert i Mahibere Kidusan: ‹‹ኢያቄም እና ሐና ሰማይን ወለዱ›› ቅዱስ ያሬድ, eotcmk.org)",
    },
    {
      navn: { no: "Den hellige Efrem syreren", am: "ቅዱስ ኤፍሬም" },
      tekst: {
        no: "Efrem sammenligner Maria med en blomst og Jesus med blomstens duft: «Du er blomsten med den gode duften, som vokste fram fra Isais rot.» Profeten Jesaja hadde sagt at en kvist skal vokse fram fra Isais stubbe.",
        am: "«አንቲ ውእቱ ጽጌ መዐዛ ሠናይ እንተ ሠረጸት እምሥርወ ዕሤይ» – ከዕሤይ ሥር የተገኘች መዓዛዋ ያማረ ጽጌ አንቺ ነሽ።",
      },
      kilde: "ውዳሴ ማርያም ዘእሑድ (sitert i Mahibere Kidusan: አንቲ ውእቱ ጽጌ መዓዛ ሠናይ, eotcmk.org); jf. Jes 11:1",
    },
    {
      navn: { no: "Kirkas lov (ፍትሐ ነገሥት)", am: "ፍትሐ ነገሥት" },
      tekst: {
        no: "«På søndager og på de hellige festene for Herren, for Maria og for Mikael skal det ikke være ስግደት, for de er gledesdager.»",
        am: "«በሰንበትና በከበሩ በጌታ፣ በእመቤታችንና በሚካኤል በዓላት ስግደት አይሁን፤ እነዚህ የተድላ፣ የደስታ ዕለታት ናቸውና።»",
      },
      kilde: "ፍትሐ ነገሥት ንባቡና ትርጓሜው, s. 258 (sitert i Mahibere Kidusan: የምእመናን ድርሻ በቤተ ክርስቲያን, eotcmk.org)",
    },
  ],
  ord: [
    { ord: "በዓላተ ማርያም", forklaring: { no: "Marias høytider (33 i året)", am: "የእመቤታችን በዓላት" } },
    { ord: "ወላዲተ አምላክ", forklaring: { no: "Guds mor", am: "አምላክን የወለደች" } },
    { ord: "ኪዳነ ምሕረት", forklaring: { no: "barmhjertighetens pakt", am: "የምሕረት ቃል ኪዳን" } },
    { ord: "ፍልሰታ", forklaring: { no: "Marias opptakelse til himmelen", am: "የእመቤታችን ትንሣኤና ዕርገት" } },
    { ord: "ወርኀ ጽጌ", forklaring: { no: "«blomstertida», መስከረም 26 – ኅዳር 5", am: "ከመስከረም ፳፮ እስከ ኅዳር ፭ ያለው ጊዜ" } },
    { ord: "ሊቃነ መላእክት", forklaring: { no: "erkeenglene", am: "የመላእክት አለቆች" } },
    { ord: "ሰማዕታት / ጻድቃን", forklaring: { no: "martyrer / rettferdige", am: "ስለ ሃይማኖት የሞቱ / በቅድስና የኖሩ" } },
    { ord: "ስንክሳር", forklaring: { no: "boka med helgenene for hver dag", am: "የዕለቱ ቅዱሳን ታሪክ መጽሐፍ" } },
    { ord: "ወርኃዊ በዓላት", forklaring: { no: "de månedlige minnedagene", am: "በየወሩ የሚታሰቡ በዓላት" } },
    { ord: "ንግሥ", forklaring: { no: "årsfesten for helgenen kirka er oppkalt etter; ታቦቱ bæres ut", am: "ታቦተ ሕጉ የሚወጣበት ዓመታዊ በዓል" } },
    { ord: "ዝክር", forklaring: { no: "minne; å gi mat til fattige i en helgens navn", am: "መታሰቢያ፤ በቅዱሳን ስም ማብላት" } },
    { ord: "ጽዋ ማኅበር", forklaring: { no: "fellesskap som samles i en helgens navn", am: "በቅዱሳን ስም የሚሰባሰብ የምእመናን ማኅበር" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvorfor feirer vi Maria?", am: "እመቤታችንን ለምን እናከብራለን?" },
      svar: {
        no: "Fordi hun er Guds mor, og fordi hun selv sa at alle slekter skal prise henne salig (Luk 1,48).",
        am: "የአምላክ እናት ስለሆነች፣ እርሷም «ትውልድ ሁሉ ብፅዕት ይሉኛል» ስላለች ነው (ሉቃ ፩፥፵፰)።",
      },
    },
    {
      sporsmal: { no: "Tilber vi helgenene?", am: "ቅዱሳንን እናመልካለን?" },
      svar: {
        no: "Nei. Vi tilber bare Gud. Vi ærer helgenene fordi Gud har æret dem, og vi ber dem be for oss.",
        am: "አይደለም። የምናመልከው እግዚአብሔርን ብቻ ነው። ቅዱሳንን እግዚአብሔር ስላከበራቸው እናከብራቸዋለን፤ እንዲያማልዱንም እንለምናለን።",
      },
    },
    {
      sporsmal: { no: "Hva lovet Jesus Maria på ኪዳነ ምሕረት?", am: "በኪዳነ ምሕረት ጌታችን ለእመቤታችን ምን ቃል ገባላት?" },
      svar: {
        no: "At han vil vise nåde mot den som ber i hennes navn, gir mat til sultne i hennes navn og holder ዝክር for henne.",
        am: "ስሟን ለሚጠራ፣ በስሟ ለተራበ ለሚያበላና ዝክሯን ለሚዘክር ምሕረትን እንደሚያደርግ ቃል ገባላት።",
      },
    },
    {
      sporsmal: { no: "Hvilke dager i måneden er viet til Mikael, Gabriel og Maria?", am: "በወር ውስጥ የሚካኤል፣ የገብርኤልና የእመቤታችን ቀናት የትኞቹ ናቸው?" },
      svar: {
        no: "Mikael den 12., Gabriel den 19. og Maria den 21. (og ኪዳነ ምሕረት den 16.).",
        am: "ሚካኤል ፲፪፣ ገብርኤል ፲፱፣ እመቤታችን ፳፩ (ኪዳነ ምሕረት ፲፮)።",
      },
    },
    {
      sporsmal: { no: "Hva er ንግሥ?", am: "ንግሥ ምንድን ነው?" },
      svar: {
        no: "Årsfesten for helgenen som kirkas ታቦት har navnet til. ታቦቱ bæres ut med sang og velsigner folket.",
        am: "ታቦቱ በስሙ የተሰየመለት ቅዱስ ዓመታዊ በዓል ነው፤ ታቦቱ በዝማሬ ወጥቶ ሕዝቡን ይባርካል።",
      },
    },
    {
      sporsmal: { no: "Hva betyr det å holde ዝክር?", am: "ዝክር መዘከር ማለት ምን ማለት ነው?" },
      svar: {
        no: "Å minnes en helgen ved å be, takke Gud og gi mat til fattige og gjester i helgenens navn.",
        am: "በቅዱሳን ስም መጸለይ፣ እግዚአብሔርን ማመስገንና ለነዳያንና ለእንግዶች ማብላት ነው።",
      },
    },
  ],
  kilder: [
    { navn: "ማኅበረ ቅዱሳን (for barn): የቤተ ክርስቲያን በዓላት አከባባር", url: "https://eotcmk.org/a/የቤተ-ክርስቲያን-በዓላት-አከባባር/" },
    { navn: "ማኅበረ ቅዱሳን (for barn): የቅዱሳን አማላጅነት", url: "https://eotcmk.org/a/?p=30530" },
    { navn: "ማኅበረ ቅዱሳን (for barn): ኪዳነ ምሕረት!", url: "https://eotcmk.org/a/ኪዳነ-ምሕረት-5/" },
    { navn: "ማኅበረ ቅዱሳን (for barn): ቃል ኪዳን", url: "https://eotcmk.org/a/?p=24817" },
    { navn: "ማኅበረ ቅዱሳን: በአታ ለእግዝእትነ ውስተ ቤተ መቅደስ", url: "https://eotcmk.org/a/the-entrance-of-our-holy-lady-the-virgin-saint-mary-into-the-temple/" },
    { navn: "ማኅበረ ቅዱሳን: ጽዮን ማርያም", url: "https://eotcmk.org/a/ጽዮን-ማርያም/" },
    { navn: "ማኅበረ ቅዱሳን: ‹‹ኢያቄም እና ሐና ሰማይን ወለዱ›› ቅዱስ ያሬድ", url: "https://eotcmk.org/a/ኢያቄም-እና-ሐና-ሰማይን-ወለዱ-ቅዱ/" },
    { navn: "ማኅበረ ቅዱሳን: አንቲ ውእቱ ጽጌ መዓዛ ሠናይ (ውዳሴ ማርያም ዘእሑድ)", url: "https://eotcmk.org/a/?p=18226" },
    { navn: "ማኅበረ ቅዱሳን: ‹‹ዝክረ ጻድቅ ለዓለም ይሄሉ››", url: "https://eotcmk.org/a/ዝክረ-ጻድቅ-ለዓለም-ይሄሉ፤-የጻድቅ-መ-2/" },
    { navn: "ማኅበረ ቅዱሳን: ‘’ከመላእክት አለቆች አንዱ የሆነው ሚካኤል ሊረዳኝ መጣ።’’", url: "https://eotcmk.org/a/ከመላእክት-አለቆች-አንዱ-የሆነው-ሚ/" },
    { navn: "ማኅበረ ቅዱሳን: በዓለ ቅዱስ ሩፋኤል", url: "https://eotcmk.org/a/?p=28668" },
    { navn: "ማኅበረ ቅዱሳን: ሊቀ መላእክት ቅዱስ ዑራኤል", url: "https://eotcmk.org/a/?p=28556" },
    { navn: "ማኅበረ ቅዱሳን: ዝክረ ቅዱስ ያሬድ", url: "https://eotcmk.org/a/ዝክረ-ቅዱስ-ያሬድ/" },
    { navn: "ማኅበረ ቅዱሳን: ምእመናን በቤተ ክርስቲያን ሥርዓት ሊጠብቁ ይገባል! (ጽዋ ማኅበር)", url: "https://eotcmk.org/a/?p=23486" },
    { navn: "ማኅበረ ቅዱሳን: ማኅበራዊ ሕይወታችን!", url: "https://eotcmk.org/a/?p=30603" },
    { navn: "ማኅበረ ቅዱሳን: የምእመናን ድርሻ በቤተ ክርስቲያን (ፍትሐ ነገሥት om høytidene)", url: "https://eotcmk.org/a/የምእመናን-ድርሻ-በቤተ-ክርስቲያን-6/" },
    { navn: "ማኅበረ ቅዱሳን: ወርኃ ታኅሣሥ, ወርኃ ጥር, ወርኃ ሐምሌ, ወርኃ ነሐሴ, ወርኃ መስከረም (årets fester)", url: "https://eotcmk.org/a/ወርኃ-ታኅሣሥ/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: ወርሃዊ በዓላት (werawi bealat.pdf)", url: "https://www.ethiopianorthodox.org/amharic/abey/werawi%20bealat.pdf" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Calendar", url: "https://www.ethiopianorthodox.org/english/calendar.html" },
    { navn: "አስተምህሮ ዘተዋሕዶ: ንግሥ እና ንግድ: የተቀደሰውን የማርከስ ክፉ ልማድ", url: "https://astemhro.com" },
  ],
  utkast: true,
};
