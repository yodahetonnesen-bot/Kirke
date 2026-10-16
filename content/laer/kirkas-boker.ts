import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om de hellige bøkene:
// ethiopianorthodox.org: «The Bible» (kanonlisten 46 + 35 = 81, at den etiopiske oversettelsen er gjort fra Septuaginta,
// at Jubileenes bok («Kufale, i.e. Division», «Little Genesis») bare er bevart hel på ge'ez, og listen over kirkas andre bøker:
// Haymanote Abew, Cyril, Abba Giyorgis' «Book of the mystery», liturgiboka med de 14 anaforaene, ግጻዌ, Paktens bok),
// «Worship in the Ethiopian Orthodox Church» (14 anaforaer, ቅዳሴ på ge'ez, lesninger på amharisk, ሰዓታት av Abba Giyorgis)
// og «Church Music» (Yareds bøker, ውዳሴ ማርያም og አርጋኖን for ukedagene, መልክእ som hilser hver del av helgenens kropp,
// ሰዓታት i sju deler, ledet av diakoner, prester, munker og ደብተራ);
// Mahibere Kidusan (eotcmk.org): «መጽሐፍ ቅዱስ በቤተ ክርስቲያን ዐይን» (kirka kom før bøkene, kirka skilte ut de 81, ikke alt er
// skrevet, Johannes Chrysostomos om «den andre store gaven», stokken som bilde), «“የእግዚአብሔር መንፈስ ያለበት መጽሐፍ ሁሉ …”»
// del 1 og 2 (አሥራው og አዋልድ መጻሕፍት, den barmhjertige samaritanen og de to denarene, tabellen lov/historie/visdom/profeti
// med ፍትሐ ነገሥት, ተአምረ ማርያም, ውዳሴ ማርያም og ፍካሬ ኢየሱስ, reglene for hvilke bøker kirka tar imot),
// «አገልግሎቴን አከብራለሁ!» (definisjonene av ስንክሳር, ሃይማኖተ አበው og ገድል etter Desta Tekle Wold og Kidane Wold Kifle),
// «የድርሳንና የገድል ልዩነት ምንድን ነው?» (ድርሳን og ገድል, de tre slagene ገድል), «የቅዱሳንን ገድል የመማር አስፈላጊነት»,
// «“ጌታዬ ኢየሱስ ክርስቶስን ልከተለው እሄዳለሁ” (መጽሐፈ ስንክሳር)» (ስንክሳር leses på dagen), «ቃለ ዓዋዲ» (ፍትሐ ነገሥት i to deler,
// brukt av stat og kirke til Haile Selassies tid), «ለሲኖዶሳዊ ልዕልና መከበር …» (ፍትሐ ነገሥት har apostlenes synodevedtak;
// ዲድስቅልያ), «ጸሎተ ፍትሐት ምንድ ነው?» (ፍትሐ ነገሥት stadfester ዲድስቅልያ), «ዕቅበተ እምነት በመጽሐፈ ምሥጢር» (Abba Giyorgis,
// fem skrivere, to dager, «Den hellige ånd talte med min tunge»), «‹‹ወአንትሙሰ ተዐቀቡ …››/ትእዛዝ ፴፩/» (ግብረ ሕማማት: brukt
// fra 1300-tallet, oversatt fra arabisk av Abune Selama), «ሰሙነ ሕማማት» (lesning hver time), «ምኲራብ» (ሃይማኖተ አበው
// ዘዮሐንስ አፈወርቅ 66), «በዓለ ቅዱስ ያሬድ» (Yared og አንቀጸ ብርሃን), «የተቀደሰ ውኃ» (eksempel på አንድምታ-formen «አንድም …»),
// «ከትንሣኤ እስከ ዳግም ትንሣኤ …» (ቀሌምንጦስ om løftet til Adam) og «“ሃይማኖትና ሀገር …”» (ge'ez som kirkas språk).
// Marcos Daoud / erkebiskop Yesehaq, The Liturgy of the Ethiopian Church (Frumentius begynte å oversette Bibelen til ge'ez,
// de ni hellige fullførte), og bibeldataene på nettstedet (amharisk 81-bokbibel, utgave 2000) for sitatene fra
// Enoks bok, Jubileenes bok og Didaskalia.
//
// Usikkert: «Smal» og «bred» kanon (ጠባብ og ሰፊ ቀኖና) er ord som forskere bruker (Cowley 1974, Mikre-Sellassie 1993).
//   Vi fant ingen Tewahedo-kilde på amharisk som bruker ordene ጠባብ/ሰፊ. Kirkas egen liste (ethiopianorthodox.org) teller
//   46 + 35 med kirkeordensbøkene i NT. Den trykte amhariske 81-bokbibelen teller i stedet bøkene i GT hver for seg (54 + 27)
//   og har ikke kirkeordensbøkene. Vi forklarer begge måtene uten å si at den ene er feil. En prest bør se over dette.
// Usikkert: Når på dagen og hvor i gudstjenesten ስንክሳር og ተአምረ ማርያም leses, sier kildene vi har lest ikke tydelig. Vi skriver
//   bare at dagens ስንክሳር leses i kirka hver dag, og at ተአምረ ማርያም leses i kirka, særlig på Marias dager.
// Usikkert: At ሃይማኖተ አበው «leses ved ቅዳሴ», står i ordboka til Desta Tekle Wold, sitert av MK. Hvor ofte det skjer i dag,
//   vet vi ikke.
// Usikkert: Om boka «ቄርሎስ» har vi lite. Kildene nevner ድርሳነ ቄርሎስ og ተረፈ ቄርሎስ, og at boka er gitt ut med አንድምታ.
//   Vi skriver bare at den samler den hellige Kyrillos' lære om Kristus, og at den studeres i መጻሕፍት ቤት.
// Usikkert: Ordet አንድምታ forklarer vi ut fra måten tolkningene er skrevet på («አንድም …» = «eller også …»). Kildene forklarer
//   ikke selve ordet. En lærer fra መጻሕፍት ቤት bør bekrefte.
// Usikkert: At አንቀጸ ብርሃን er skrevet av Yared, bygger på MK («በዓለ ቅዱስ ያሬድ») og en MK-artikkel som siterer «አንቀጸ ብርሃን
//   ዘቅዱስ ያሬድ». Noen lister nevner andre forfattere.
// Usikkert: Kapittel- og versnumrene for Enoks bok, Jubileenes bok og Didaskalia følger den amhariske utgaven fra 2000 på
//   nettstedet. Andre utgaver kan ha andre numre.
export const kirkasBoker: Tema = {
  slug: "kirkas-boker",
  del: "boker",
  tittel: { no: "Kirkas bøker", am: "የቤተ ክርስቲያን መጻሕፍት" },
  undertittel: {
    no: "De 81 bøkene i Bibelen og bøkene som forklarer dem",
    am: "ሰማንያ አሐዱ መጻሕፍትና እነርሱን የሚያብራሩ አዋልድ መጻሕፍት",
  },
  bilde: "evangeliebokTekst",
  ingress: {
    no:
      "Den etiopisk-ortodokse Tewahedo-kirka har 81 bøker i Bibelen: 46 i Det gamle testamentet og 35 i Det nye. På ge'ez heter det ሰማንያ አሐዱ, «åttien». Bibelen er roten. Ut av den har kirka fått mange andre bøker: om helgenene, om Maria, om kirkas lover, om troen og bøkene vi ber og synger fra. Kirka kaller dem አዋልድ መጻሕፍት, «bøkenes barn». De fleste er skrevet på ge'ez, kirkas gamle språk.",
    am:
      "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ሰማንያ አሐዱ (፹፩) መጻሕፍትን ትቀበላለች፤ ፵፮ቱ የብሉይ ኪዳን፣ ፴፭ቱ የሐዲስ ኪዳን ናቸው። መጽሐፍ ቅዱስ የመጻሕፍት ሁሉ ሥር ነው። ከእርሱም ብዙ መጻሕፍት ተገኝተዋል፤ የቅዱሳን ታሪክ፣ የእመቤታችን ተአምር፣ የቤተ ክርስቲያን ሕግ፣ የሃይማኖት ትምህርት፣ የጸሎትና የዜማ መጻሕፍት። እነዚህ አዋልድ መጻሕፍት ይባላሉ። አብዛኞቹ የተጻፉት በቤተ ክርስቲያን ጥንታዊ ቋንቋ በግእዝ ነው።",
  },
  hovedvers: "2Tim 3:16",
  avsnitt: [
    {
      id: "skriften",
      tittel: { no: "Den hellige skrift", am: "ቅዱሳት መጻሕፍት" },
      ingress: {
        no: "Bibelen er Guds ord skrevet på menneskers språk. Den hellige ånd ledet dem som skrev.",
        am: "መጽሐፍ ቅዱስ በሰዎች ቋንቋ የተጻፈ የእግዚአብሔር ቃል ነው፤ የተጻፈውም በመንፈስ ቅዱስ ምሪት ነው።",
      },
      punkter: [
        {
          tekst: {
            no: "Profetene og apostlene skrev ikke etter sin egen vilje. De ble drevet av Den hellige ånd. Derfor er Skriften nyttig til lærdom, til formaning og til å rette opp hjertet.",
            am: "ነቢያትና ሐዋርያት በራሳቸው ፈቃድ አልጻፉም፤ በመንፈስ ቅዱስ ተነድተው ተናገሩ። ስለዚህ «የእግዚአብሔር መንፈስ ያለበት መጽሐፍ ሁሉ ለትምህርትና ለተግሣጽ ልብንም ለማቅናት» ይጠቅማል።",
          },
          vers: ["2Tim 3:16", "2Pet 1:21", "Heb 1:1"],
        },
        {
          tekst: {
            no: "Kirka fantes før bøkene i Det nye testamentet ble skrevet. Paulus skrev brevene sine til menigheter som allerede fantes. Lukas skrev for at Teofilus skulle vite sikkert det han allerede hadde lært. Kirka er bygd på apostlenes og profetenes grunnvoll.",
            am: "ቤተ ክርስቲያን የሐዲስ ኪዳን መጻሕፍት ከመጻፋቸው በፊት ነበረች። ቅዱስ ጳውሎስ መልእክቶቹን የጻፈው አስቀድመው ለነበሩ አብያተ ክርስቲያናት ነው። ቅዱስ ሉቃስም ቴዎፍሎስ የተማረውን ቃል እርግጡን እንዲያውቅ ጻፈለት። ቤተ ክርስቲያን «በሐዋርያትና በነቢያት መሠረት ላይ» የታነጸች ናት።",
          },
          vers: ["Eph 2:20", "Luke 1:1-4"],
        },
        {
          tekst: {
            no: "Det var kirka som skilte de sanne bøkene fra de falske og sa: «Disse skal dere bruke.» Mahibere Kidusan skriver: Hvis noen spør oss hvem som sa at bøkene er 81, svarer vi: kirka. Bibelen er skrevet i kirka og for kirka, og kirka forklarer den.",
            am: "እውነተኞቹን መጻሕፍት ከሐሰተኞቹ ለይታና በቀኖና ወስና «እነዚህን ተጠቀሙ» ያለችው ቤተ ክርስቲያን ናት። ማኅበረ ቅዱሳን እንደሚያስተምረው «መጻሕፍት ሰማንያ አንድ ብቻ ናቸው ብሎ ማን ነገራችሁ?» ብንባል «ቤተ ክርስቲያን» እንላለን። መጽሐፍ ቅዱስ የተጻፈው በቤተ ክርስቲያን ለቤተ ክርስቲያን ነው፤ የምትተረጉመውም እርሷ ናት።",
          },
          vers: ["Acts 20:28", "2Thess 2:15"],
        },
        {
          tekst: {
            no: "Ikke alt er skrevet ned. Johannes sier at Jesus gjorde mange andre tegn, og at hele verden ikke kunne romme alle bøkene om alt han gjorde. Kirka har tatt vare på mye både i skrift og i tradisjon (ትውፊት).",
            am: "ሁሉ ነገር አልተጻፈም። ቅዱስ ዮሐንስ «ኢየሱስም በዚህ መጽሐፍ ያልተጻፈ ሌላ ብዙ ምልክት … አደረገ» ይላል፤ ሁሉ ቢጻፍም «ዓለም ራሱ ባልበቃቸውም» ብሏል። ቤተ ክርስቲያን በጽሑፍም በትውፊትም ብዙ ሀብት ጠብቃልናለች።",
          },
          vers: ["John 20:30-31", "John 21:25"],
        },
        {
          tekst: {
            no: "Kirka kaller de 81 bøkene አሥራው መጻሕፍት, «rotbøkene», fordi alle de andre bøkene vokser ut av dem. Bibelen er kilden og hodet for all lære. En lære som strider mot Bibelen, tar ikke kirka imot.",
            am: "ሰማንያ አንዱ መጻሕፍት «አሥራው መጻሕፍት» ይባላሉ፤ «አሥራው» ማለት ሥሮች ማለት ነው፤ ሌሎቹ መጻሕፍት ከእነርሱ ይበቅላሉና። መጽሐፍ ቅዱስ የትምህርት ሁሉ ምንጭና ራስ ነው፤ ከእርሱ ጋር የሚጋጭ ትምህርት በቤተ ክርስቲያናችን ተቀባይነት የለውም።",
          },
          vers: ["Ps 119:105", "Gal 1:8"],
        },
      ],
    },
    {
      id: "gamle",
      tittel: { no: "Det gamle testamentet: 46 bøker", am: "፵፮ቱ የብሉይ ኪዳን መጻሕፍት" },
      ingress: {
        no: "Kirkas liste har 46 bøker i Det gamle testamentet. Noen bøker telles sammen, for eksempel 1. og 2. Samuelsbok som én bok.",
        am: "በቤተ ክርስቲያን ዝርዝር የብሉይ ኪዳን መጻሕፍት ፵፮ ናቸው። አንዳንዶቹ በአንድነት ይቈጠራሉ፤ ለምሳሌ ሳሙኤል ቀዳማዊና ካልዕ እንደ አንድ መጽሐፍ ይቈጠራሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "Her er de samme bøkene som i andre bibler: Mosebøkene, historiebøkene, Job, Salmene, Ordspråkene, Forkynneren, Høysangen og profetene. Jesus sa at det som er skrevet om ham i «Mose lov og profetene og salmene», måtte oppfylles.",
            am: "በዚህ ውስጥ በሌሎች መጻሕፍት ቅዱሳት የሚገኙት አሉ፤ ኦሪት፣ የታሪክ መጻሕፍት፣ ኢዮብ፣ መዝሙረ ዳዊት፣ ምሳሌ፣ መክብብ፣ መኃልየ መኃልይና የነቢያት መጻሕፍት። ጌታችንም «በሙሴ ሕግና በነቢያት በመዝሙራትም ስለ እኔ የተጻፈው ሁሉ ይፈጸም ዘንድ ይገባል» ብሏል።",
          },
          vers: ["Luke 24:44-45", "Matt 5:17"],
        },
        {
          tekst: {
            no: "I tillegg har vår bibel bøker som de fleste protestantiske bibler ikke har: Jubileenes bok (ኩፋሌ), Enoks bok (ሄኖክ), Esra kale og Esra Sutuel, Tobit (ጦቢት), Judit (ዮዲት), 1.–3. Meqabyan (መቃብያን), Formaningens bok (ተግሣጽ), Visdommens bok (ጥበብ), Siraks bok (ሲራክ), Baruk, Jeremias' brev og Resten av Baruk, Manasses' bønn og Josippon (ዮሴፍ ወልደ ኮርዮን).",
            am: "ከዚህም በተጨማሪ ብዙ የፕሮቴስታንት መጻሕፍት የሌሏቸው መጻሕፍት አሉ፤ መጽሐፈ ኩፋሌ፣ መጽሐፈ ሄኖክ፣ ዕዝራ ካልዕና ዕዝራ ሱቱኤል፣ ጦቢት፣ ዮዲት፣ መቃብያን ፩–፫፣ ተግሣጽ፣ ጥበብ፣ ሲራክ፣ ባሮክ፣ ተረፈ ኤርምያስና ተረፈ ባሮክ፣ ጸሎተ ምናሴና መጽሐፈ ዮሴፍ ወልደ ኮርዮን።",
          },
        },
        {
          tekst: {
            no: "Enoks bok: Enok levde før vannflommen og «vandret med Gud». Apostelen Judas siterer Enoks profeti i Det nye testamentet: «Se, Herren kommer med sine mange tusen hellige for å holde dom.» Ordene står i Enoks bok kapittel 1. Mahibere Kidusan lærer at Enoks bok er den første boka som ble skrevet.",
            am: "መጽሐፈ ሄኖክ፦ ሄኖክ ከጥፋት ውኃ በፊት የኖረ «አካሄዱን ከእግዚአብሔር ጋር» ያደረገ ጻድቅ ነው። ሐዋርያው ይሁዳ የሄኖክን ትንቢት ጠቅሷል፤ «እነሆ፥ ጌታ … ከአእላፋት ቅዱሳኑ ጋር መጥቶአል»። ይህ ቃል በመጽሐፈ ሄኖክ ምዕራፍ ፩ ይገኛል። ማኅበረ ቅዱሳን እንደሚያስተምረው ከመጻሕፍት ሁሉ ቀድሞ የተጻፈው መጽሐፈ ሄኖክ ነው።",
          },
          vers: ["Gen 5:24", "Jude 1:14-15"],
          andre: [
            {
              no: "Enoks bok 1:9: «Se, han kommer med mange hellige for å holde dom over dem.»",
              am: "መጽሐፈ ሄኖክ ፩፥፱፦ «ፍርድን ያደርግላቸው ዘንድ እነሆ፥ ከብዙ ቅዱሳን ጋር ይመጣል።»",
            },
          ],
        },
        {
          tekst: {
            no: "Jubileenes bok (ኩፋሌ, «deling») kalles også «den lille Genesis». Den forteller historien fra skapelsen til Moses, delt inn i tidsperioder. Ifølge kirkas nettsted ethiopianorthodox.org er den bare bevart hel på ge'ez. Hele verden står i gjeld til den etiopiske kirka for at slike bøker er tatt vare på.",
            am: "መጽሐፈ ኩፋሌ ከፍጥረት ጀምሮ እስከ ሙሴ ያለውን ታሪክ በዘመናት ከፍሎ ይናገራል። «ኩፋሌ» ማለት ክፍፍል ማለት ነው። የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ድረ ገጽ እንደሚለው ይህ መጽሐፍ በሙሉ ተጠብቆ የሚገኘው በግእዝ ብቻ ነው፤ ስለዚህ ዓለም ሁሉ እነዚህን መጻሕፍት ስለ ጠበቀችለት ኢትዮጵያዊት ቤተ ክርስቲያንን ያመሰግናል።",
          },
          andre: [
            {
              no: "Jubileenes bok 1:1: Herren sa til Moses: «Kom opp til meg på dette fjellet, så skal jeg gi deg de to steintavlene der loven og budene er skrevet.»",
              am: "መጽሐፈ ኩፋሌ ፩፥፩፦ እግዚአብሔር «ከእኔ ዘንድ ወደዚህ ተራራ ውጣ፤ … ሕጉና ሥርዐቱ የተጻፉባቸውን ሁለቱን የዕንቍ ጽላት እሰጥሀለሁ» ብሎ ለሙሴ ተናገረ።",
            },
          ],
        },
        {
          tekst: {
            no: "Meqabyan (መቃብያን) er tre etiopiske bøker. De er ikke de samme som Makkabeerbøkene i andre bibler, selv om navnet ligner. De forteller om mennesker som holdt fast ved Guds lov i vanskelige tider.",
            am: "መጽሐፈ መቃብያን ሦስት መጻሕፍት ናቸው። ስማቸው ቢመሳሰልም በሌሎች መጻሕፍት ቅዱሳት ከሚገኙት የመቃብያን መጻሕፍት የተለዩ ናቸው። በመከራ ዘመን የእግዚአብሔርን ሕግ ስለ ጠበቁ ሰዎች ይናገራሉ።",
          },
          vers: ["Heb 11:35-38"],
        },
        {
          tekst: {
            no: "Kirka tok i bruk Det gamle testamentet slik det var oversatt til gresk (Septuaginta), den oversettelsen apostlene ofte brukte. Derfor er bøker som Tobit, Judit, Visdommens bok og Siraks bok med.",
            am: "የብሉይ ኪዳን የግእዝ ትርጉም የተተረጎመው ከጽርእ (ከሰብዓ ሊቃናት ትርጉም) ነው። ስለዚህ ጦቢት፣ ዮዲት፣ ጥበብና ሲራክ በውስጡ ይገኛሉ።",
          },
          vers: ["Rom 15:4"],
        },
      ],
    },
    {
      id: "nye",
      tittel: { no: "Det nye testamentet: 35 bøker", am: "፴፭ቱ የሐዲስ ኪዳን መጻሕፍት" },
      ingress: {
        no: "Det nye testamentet har de 27 bøkene alle kristne kjenner, og åtte bøker om kirkas orden.",
        am: "ሐዲስ ኪዳን የሚታወቁትን ፳፯ቱን መጻሕፍትና ስለ ቤተ ክርስቲያን ሥርዓት የሚናገሩ ስምንት መጻሕፍትን ይዟል።",
      },
      punkter: [
        {
          tekst: {
            no: "De 27 bøkene er de fire evangeliene, Apostlenes gjerninger, Paulus' 14 brev, de sju andre brevene (Jakob, Peter, Johannes og Judas) og Johannes' åpenbaring. I vår bibel står brevene fra Peter og Johannes før Jakobs brev.",
            am: "፳፯ቱ መጻሕፍት አራቱ ወንጌላት፣ የሐዋርያት ሥራ፣ ፲፬ቱ የቅዱስ ጳውሎስ መልእክታት፣ ሰባቱ የሐዋርያት መልእክታት (ያዕቆብ፣ ጴጥሮስ፣ ዮሐንስና ይሁዳ) እና ራእየ ዮሐንስ ናቸው።",
          },
          vers: ["John 20:31", "Col 4:16", "Rev 1:3"],
        },
        {
          tekst: {
            no: "ሲኖዶስ (Sinodos) er fire bøker med regler som kirka sier kommer fra apostlene: ሥርዓተ ጽዮን (Sions orden), ትእዛዝ (befalingene), ግጽው og አብጥሊስ. De handler om hvordan biskoper, prester og diakoner skal vigsles, og hvordan kirka skal leve.",
            am: "ሲኖዶስ አራት መጻሕፍት ነው፤ ሥርዓተ ጽዮን፣ ትእዛዝ፣ ግጽውና አብጥሊስ። ሐዋርያት የሠሩትን ሥርዓት ይዘዋል፤ ኤጲስ ቆጶሳት፣ ቀሳውስትና ዲያቆናት እንዴት እንደሚሾሙና ቤተ ክርስቲያን እንዴት እንደምትመራ ይናገራሉ።",
          },
          vers: ["Acts 15:28-29", "1Cor 14:40"],
          andre: [
            {
              no: "ሥርዓተ ጽዮን 1:1: «En biskop skal vigsles på en søndag, der det er to eller tre biskoper.»",
              am: "ሥርዓተ ጽዮን ፩፥፩፦ «ኤጲስ ቆጶስ ሁለት ወይም ሦስት ኤጲስ ቆጶሳት ባሉበት እሑድ ቀን ይሾም።»",
            },
          ],
        },
        {
          tekst: {
            no: "Paktens bok (መጽሐፈ ኪዳን) er to bøker. Kirka lærer at de har det Herren lærte apostlene i de førti dagene etter oppstandelsen, om kirkas orden og bønner. ኪዳን-bønnen som bes i kirka hver morgen og kveld, er hentet herfra.",
            am: "መጽሐፈ ኪዳን ሁለት መጻሕፍት ነው። ጌታችን ከትንሣኤው በኋላ በአርባው ቀን ለሐዋርያት ስለ ቤተ ክርስቲያን ሥርዓትና ጸሎት ያስተማረውን እንደያዘ ቤተ ክርስቲያን ታስተምራለች። በየዕለቱ በነግህና በሠርክ የሚደርሰው የኪዳን ጸሎት ከዚህ መጽሐፍ የተወሰደ ነው።",
          },
          vers: ["Acts 1:3"],
        },
        {
          tekst: {
            no: "ቀሌምንጦስ (Klemens' bok) forteller om skapelsen, om englene og om løftet Gud gav Adam: at han etter fem og en halv dag skulle bli født av hans etterkommere og frelse ham. Kirkas lærere bruker den når de forklarer slike ting.",
            am: "መጽሐፈ ቀሌምንጦስ ስለ ፍጥረት፣ ስለ መላእክትና እግዚአብሔር ለአዳም ስለ ገባለት ቃል ኪዳን ይናገራል፤ «ከአምስት ቀን ተኩል በኋላ ከልጅ ልጅህ ተወልጄ አድንሃለሁ» ብሎታል። ሊቃውንት ይህን ሲያስተምሩ ይጠቅሱታል።",
          },
          vers: ["Gal 4:4-5"],
        },
        {
          tekst: {
            no: "ዲድስቅልያ (Didaskalia) betyr «lære». Den har 43 kapitler med apostlenes bud til kirka: om biskoper og prester, om faste, om bønn og om hvordan foreldre skal oppdra barna. ፍትሐ ነገሥት bygger mye på den.",
            am: "ዲድስቅልያ ማለት ትምህርት ማለት ነው። ፵፫ ምዕራፎች አሉት፤ ቅዱሳን ሐዋርያት ስለ ካህናት ሹመት፣ ስለ ጾም፣ ስለ ጸሎትና ወላጆች ልጆቻቸውን እንዴት እንደሚያሳድጉ ያዘዙትን ይዟል። ፍትሐ ነገሥትም በዲድስቅልያ የተጠቀሰውን ያጸናል።",
          },
          vers: ["Eph 6:4"],
          andre: [
            {
              no: "Didaskalia 1:1: «Vi tolv apostler, tjenere for Jesus Kristus, kom sammen i Jerusalem … og laget denne rette læren.»",
              am: "ዲድስቅልያ ፩፥፩፦ «የአንድያ ልጅ የኢየሱስ ክርስቶስ አገልጋዮች እኛ ዐሥራ ሁለቱ ሐዋርያት … በኢየሩሳሌም በአንድነት ተሰብስበን … ይህችን የቀናች ትምህርት ሠራናት።»",
            },
            {
              no: "Didaskalia 11:1: «Dere fedre, lær barna deres å holde Guds bud og følge Kristi vei.»",
              am: "ዲድስቅልያ ፲፩፥፩፦ «እናንትም አባቶች የእግዚአብሔርን ትእዛዝ ይጠብቁ ዘንድ የክርስቶስን ጎዳና ይከተሉ ዘንድ ልጆቻችሁን አስተምሯቸው።»",
            },
          ],
        },
      ],
    },
    {
      id: "telling",
      tittel: { no: "To måter å telle de 81 bøkene på", am: "ሰማንያ አሐዱን የመቍጠሪያ ሁለት መንገዶች" },
      punkter: [
        {
          tekst: {
            no: "Kirkas egen liste har 46 bøker i Det gamle testamentet og 35 i Det nye. Da er de åtte bøkene om kirkas orden (ሲኖዶስ, መጽሐፈ ኪዳን, ቀሌምንጦስ og ዲድስቅልያ) med i Det nye testamentet, og flere bøker i Det gamle testamentet telles sammen.",
            am: "የቤተ ክርስቲያን ዝርዝር ፵፮ የብሉይና ፴፭ የሐዲስ ኪዳን መጻሕፍትን ይቈጥራል። በዚህ አቈጣጠር ስምንቱ የሥርዓት መጻሕፍት (ሲኖዶስ፣ መጽሐፈ ኪዳን፣ ቀሌምንጦስና ዲድስቅልያ) በሐዲስ ኪዳን ይቈጠራሉ፤ ብዙ የብሉይ ኪዳን መጻሕፍትም በአንድነት ይቈጠራሉ።",
          },
        },
        {
          tekst: {
            no: "Den trykte amhariske bibelen (ሰማንያ አሐዱ) teller på en annen måte. Der står bøkene i Det gamle testamentet hver for seg (54 bøker), og Det nye testamentet har de 27 bøkene. Det blir også 81. Kirkeordensbøkene står ikke i den trykte bibelen.",
            am: "የታተመው ሰማንያ አሐዱ መጽሐፍ ቅዱስ ደግሞ በሌላ መንገድ ይቈጥራል፤ የብሉይ ኪዳንን መጻሕፍት ለየብቻቸው ቈጥሮ ፶፬ ያደርጋቸዋል፤ ሐዲስ ኪዳንም ፳፯ቱን መጻሕፍት ይዟል። ድምሩ ፹፩ ነው። የሥርዓት መጻሕፍቱ በታተመው መጽሐፍ ቅዱስ ውስጥ አይገኙም።",
          },
        },
        {
          tekst: {
            no: "Forskere kaller den første listen «den brede kanonen» (ሰፊ ቀኖና) og den trykte bibelen «den smale kanonen» (ጠባብ ቀኖና). Noen teller alle bøkene hver for seg og kommer da fram til 88. Men det er de samme hellige bøkene. Kirka sier ሰማንያ አሐዱ, 81.",
            am: "ተመራማሪዎች የመጀመሪያውን ዝርዝር «ሰፊ ቀኖና»፣ የታተመውን ደግሞ «ጠባብ ቀኖና» ይሉታል። አንዳንዶች ሁሉንም ለየብቻ ቈጥረው ፹፰ ያደርሳሉ። መጻሕፍቱ ግን ያው ናቸው፤ ቤተ ክርስቲያን «ሰማንያ አሐዱ» ትላቸዋለች።",
          },
        },
      ],
    },
    {
      id: "geez",
      tittel: { no: "Ge'ez – kirkas språk", am: "ግእዝ – የቤተ ክርስቲያን ቋንቋ" },
      punkter: [
        {
          tekst: {
            no: "Allerede før Etiopia ble kristent, leste en etiopisk hoffmann profeten Jesaja da han kjørte hjem fra Jerusalem. Filip spurte: «Skjønner du det du leser?» Han svarte: «Hvordan skulle jeg kunne det uten at noen veileder meg?»",
            am: "ኢትዮጵያዊው ጃንደረባ ከኢየሩሳሌም ሲመለስ «በሰረገላ ተቀምጦ የነቢዩን የኢሳይያስን መጽሐፍ ያነብ ነበር»። ፊልጶስም «በውኑ የምታነበውን ታስተውለዋለህን?» አለው፤ እርሱም «የሚመራኝ ሳይኖር ይህ እንዴት ይቻለኛል?» አለው።",
          },
          vers: ["Acts 8:27-28", "Acts 8:30-31"],
        },
        {
          tekst: {
            no: "Kirka forteller at Abba Selama (Frumentius), den første biskopen, begynte å oversette Bibelen til ge'ez på 300-tallet. De ni hellige munkene som kom på 400-tallet, fullførte arbeidet.",
            am: "የመጀመሪያው ጳጳስ አባ ሰላማ ከሣቴ ብርሃን መጻሕፍትን ወደ ግእዝ መተርጐም እንደ ጀመሩ፣ በአምስተኛው መቶ ክፍለ ዘመን የመጡት ተስዓቱ ቅዱሳን ደግሞ ሥራውን እንደ ፈጸሙት ቤተ ክርስቲያን ታስተምራለች።",
          },
          vers: ["Acts 2:6-8"],
        },
        {
          tekst: {
            no: "Ge'ez (ግእዝ) er kirkas gamle språk. ቅዳሴ, Yareds sanger og de fleste av kirkas bøker er på ge'ez. I dag leses lesningene og noen deler av ቅዳሴ også på amharisk, slik at folket forstår. Paulus ville heller si fem ord med forstand enn ti tusen ord ingen forstod.",
            am: "ግእዝ የቤተ ክርስቲያን ቋንቋ ነው። ቅዳሴ፣ የቅዱስ ያሬድ ዜማና አብዛኞቹ የቤተ ክርስቲያን መጻሕፍት በግእዝ ናቸው። ዛሬ ምንባባቱና አንዳንድ የቅዳሴ ክፍሎች ሕዝቡ እንዲያስተውል በአማርኛም ይነበባሉ። ቅዱስ ጳውሎስም «እልፍ ቃላት በልሳን ከመናገር ይልቅ አምስት ቃላት በአእምሮዬ ልናገር እወዳለሁ» ብሏል።",
          },
          vers: ["1Cor 14:19", "Neh 8:8"],
        },
      ],
    },
    {
      id: "awald",
      tittel: { no: "Bøkenes barn (አዋልድ መጻሕፍት)", am: "አዋልድ መጻሕፍት" },
      ingress: {
        no: "አዋልድ መጻሕፍት betyr «bøkenes barn». Som et barn ligner foreldrene sine, ligner disse bøkene Bibelen i tro, lære og orden.",
        am: "«አዋልድ መጻሕፍት» ማለት የመጻሕፍት ልጆች ማለት ነው። ልጅ ወላጆቹን እንደሚመስል እነዚህም በምሥጢር፣ በእምነትና በሥርዓት አሥራው መጻሕፍትን ይመስላሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "Jesus fortalte om den barmhjertige samaritanen. Han gav verten to denarer og sa: «Hva mer du må koste på ham, skal jeg betale deg igjen når jeg kommer tilbake.» Kirkas lærere forklarer: Herberget er kirka, de to denarene er Det gamle og Det nye testamentet, og det verten bruker i tillegg, er bøkene lærerne har skrevet for å forklare Skriften.",
            am: "ጌታችን ስለ ርኅሩኁ ሳምራዊ አስተማረ፤ ለእንግዶች ማደሪያ ጠባቂው ሁለት ዲናር ሰጥቶ «ከዚህም በላይ የምትከስረውን ሁሉ እኔ ስመለስ እከፍልሃለሁ» አለው። ሊቃውንት ሲተረጉሙ የእንግዶች ማደሪያው ቤተ ክርስቲያን፣ ሁለቱ ዲናር ብሉያትና ሐዲሳት፣ «ከዚህ በላይ የምትከስረው» ደግሞ መምህራን ምሥጢሩን ለመግለጥ የጻፏቸው መጻሕፍት ናቸው ይላሉ።",
          },
          vers: ["Luke 10:34-35"],
        },
        {
          tekst: {
            no: "Bibelen selv nevner andre bøker, som «Den rettskafnes bok». Profetene og apostlene brukte andre bøker til forklaring og historie. Slik bruker også kirka sine bøker til å forstå Bibelen bedre.",
            am: "መጽሐፍ ቅዱስ ራሱ እንደ «ያሻር መጽሐፍ» ያሉ ሌሎች መጻሕፍትን ይጠቅሳል። ነቢያትና ሐዋርያትም ለትርጓሜ፣ ለምክርና ለታሪክ ሌሎች መጻሕፍትን ተጠቅመዋል። ቤተ ክርስቲያንም መጽሐፍ ቅዱስን ለመረዳት አዋልድ መጻሕፍትን ትጠቀማለች።",
          },
          vers: ["Josh 10:13", "Jude 1:14-15"],
        },
        {
          tekst: {
            no: "Bibelens bøker deles i lov, historie, visdom og profeti. Bøkenes barn følger samme mønster: ፍትሐ ነገሥት er lov, ተአምረ ማርያም er historie, ውዳሴ ማርያም er visdom og lovsang, og ፍካሬ ኢየሱስ er profeti.",
            am: "አሥራው መጻሕፍት የሕግ፣ የታሪክ፣ የጥበብና የትንቢት ተብለው ይመደባሉ። አዋልድ መጻሕፍትም እንዲሁ ናቸው፤ ፍትሐ ነገሥት የሕግ፣ ተአምረ ማርያም የታሪክ፣ ውዳሴ ማርያም የጥበብ፣ ፍካሬ ኢየሱስ የትንቢት መጽሐፍ ነው።",
          },
        },
        {
          tekst: {
            no: "Kirka prøver hver bok før den tar den imot. En bok som strider mot Bibelen eller kirkas tro, er ikke et «barn» av Bibelen, og kirka tar ikke imot den. Paulus sier at selv om en engel forkynte et annet evangelium, skal han ikke tas imot.",
            am: "ቤተ ክርስቲያን አዋልድ መጻሕፍትን የምትቀበለው ከትምህርቷ አንጻር መርምራ አረጋግጣ ነው። በምሥጢርም ሆነ በሥርዓት ከአሥራው መጻሕፍት ጋር የሚቃረኑት ከአዋልድ አይቈጠሩም፤ «ከሰማይ መልአክ … የሚለይ ወንጌልን ቢሰብክላችሁ፥ የተረገመ ይሁን» ተብሏልና።",
          },
          vers: ["Gal 1:8", "1John 4:1"],
        },
      ],
    },
    {
      id: "helgener",
      tittel: { no: "Bøkene om helgenene og Maria", am: "ስንክሳር፣ ገድላት፣ ድርሳናትና ተአምረ ማርያም" },
      punkter: [
        {
          tekst: {
            no: "ስንክሳር (synaksariet) har én fortelling for hver dag i året. Den forteller om englene, profetene, apostlene, martyrene, de rettferdige, jomfruene og munkene, og om Maria og Jesus. Dagens ስንክሳር leses i kirka hver dag, så vi kan minnes dagens helgener og ligne dem.",
            am: "መጽሐፈ ስንክሳር «የመላእክትን ማዕርግና ሹመት የሚያስረዳ፣ የነቢያትንና የሐዋርያትን፣ የጻድቃንንና የሰማዕታትን፣ የደናግልንና የመነኮሳትን ምግባር፣ መከራና ዕረፍት ከዕለት እስካመት የሚነግር» መጽሐፍ ነው። የዕለቱ ስንክሳር በየዕለቱ በቤተ ክርስቲያን ይነበባል፤ ቅዱሳንን ዐውቀን እንድንመስላቸው ነው።",
          },
          vers: ["Heb 13:7", "Ps 112:6", "Matt 26:13"],
        },
        {
          tekst: {
            no: "ገድል betyr «kamp». En ገድል er en bok om livet til en helgen: hva han eller hun led, kjempet og gjorde for Gud. Det finnes tre slags: om martyrene (som ገድለ ጊዮርጊስ), om apostlene (ገድለ ሐዋርያት) og om de rettferdige (som ገድለ ተክለ ሃይማኖት). Ordet står også i Bibelen: Paulus forkynte evangeliet «i mye ገድል».",
            am: "ገድል ማለት ትግል፣ ተጋድሎ ማለት ነው። ገድል ቅዱሳን በሕይወታቸው የሠሩትን ሥራ፣ የተቀበሉትን መከራና ያደረጉትን ተጋድሎ የሚናገር መጽሐፍ ነው። ገድላት በሦስት ይከፈላሉ፤ ገድለ ሰማዕታት (ገድለ ጊዮርጊስ)፣ ገድለ ሐዋርያትና ገድለ ጻድቃን (ገድለ ተክለ ሃይማኖት)። ቅዱስ ጳውሎስም «በብዙ ገድል የእግዚአብሔርን ወንጌል ለእናንተ እንናገር ዘንድ … ደፈርን» ብሏል።",
          },
          vers: ["1Thess 2:2", "Heb 11:32-34"],
        },
        {
          tekst: {
            no: "ድርሳን er en lang preken eller lovsang. Det finnes ድርሳን om englene (som ድርሳነ ሚካኤል), om søndagen og korset, prekener av kirkefedrene og ድርሳን om Kristi lidelse. Englenes ድርሳን har fem deler: innledning, preken, under, አርኬ og መልክእ.",
            am: "ድርሳን ሰፊ ንባብ፣ ረዥም ስብከት ማለት ነው። ድርሳነ መላእክት (ድርሳነ ሚካኤል)፣ ድርሳነ ሰንበትና ድርሳነ መስቀል፣ የሊቃውንት ድርሳናትና የጌታችንን መከራ የሚያዘክሩ ድርሳናት አሉ። የመላእክት ድርሳናት በአምስት ይከፈላሉ፤ መቅድም፣ ድርሳን፣ ተአምራት፣ አርኬና መልክእ።",
          },
          vers: ["Heb 1:14"],
        },
        {
          tekst: {
            no: "ተአምረ ማርያም («Marias under») forteller om under Gud har gjort ved Marias forbønn. Den leses i kirka, særlig på Marias dager. Et kjent eksempel er Simon, som fikk nåde fordi han gav en tørst mann vann «for Marias skyld». Maria sa selv: «Fra nå av skal alle slekter prise meg salig.»",
            am: "ተአምረ ማርያም እግዚአብሔር በእመቤታችን አማላጅነት ያደረገውን ተአምራት የሚተርክ መጽሐፍ ነው። በቤተ ክርስቲያን ይነበባል፤ በተለይ በእመቤታችን በዓላት። ከታወቁት ታሪኮች አንዱ «ስለ እግዝእትነ ማርያም» ብሎ የተጠማ ሰውን ውኃ ያጠጣው ስምዖን (በላዔ ሰብ) ምሕረት ማግኘቱ ነው። እመቤታችንም «ከዛሬ ጀምሮ ትውልድ ሁሉ ብፅዕት ይሉኛል» ብላለች።",
          },
          vers: ["Luke 1:48", "John 2:3-5", "Matt 10:42"],
        },
      ],
    },
    {
      id: "lov-og-tro",
      tittel: { no: "Bøkene om lov og tro", am: "የሕግና የሃይማኖት መጻሕፍት" },
      punkter: [
        {
          tekst: {
            no: "ፍትሐ ነገሥት («kongenes lov») er kirkas lovbok. Den har to deler: ፍትሕ መንፈሳዊ (kirkens lov) og ፍትሕ ሥጋዊ (lover for samfunnet). Den samler vedtak fra apostlenes synoder og de store kirkemøtene. Lenge ble den brukt både av kirka og staten i Etiopia, helt til Haile Selassies tid. Den har blant annet reglene om faste, bønn og søndagen.",
            am: "ፍትሐ ነገሥት የቤተ ክርስቲያን የሕግና የሥርዓት መጽሐፍ ነው። ሁለት ክፍሎች አሉት፤ ፍትሕ መንፈሳዊና ፍትሕ ሥጋዊ። የሐዋርያት ሲኖዶስ ውሳኔዎችንና የጉባኤያትን ሕጎች ይዟል። እስከ ዐፄ ኀይለ ሥላሴ ዘመን ድረስ በቤተ ክርስቲያንም በመንግሥትም ሲሠራበት ኖሯል። ስለ ጾም፣ ስለ ጸሎትና ስለ ሰንበት የሚደነግገውም በእርሱ ውስጥ ነው።",
          },
          vers: ["Acts 15:28-29", "1Cor 14:40"],
        },
        {
          tekst: {
            no: "ሃይማኖተ አበው («fedrenes tro») samler det fedrene fra Antiokia, Aleksandria og den greske kirka skrev om troen. Den forklarer grundig mysteriet om Treenigheten og om at Gud ble menneske. Her finner vi lære fra den hellige Athanasios, Johannes Chrysostomos, Kyrillos, Jakob av Serug og mange andre.",
            am: "ሃይማኖተ አበው የአንጾኪያና የእስክንድርያ፣ የጽርእ ሊቃነ ጳጳሳትና ሊቃውንት በየጊዜው የጻፉትን የሃይማኖት ትምህርት የያዘ መጽሐፍ ነው። ምሥጢረ ሥላሴንና ምሥጢረ ሥጋዌን አሟልቶ ያስረዳል። የቅዱስ አትናቴዎስ፣ የቅዱስ ዮሐንስ አፈወርቅ፣ የቅዱስ ቄርሎስ፣ የያዕቆብ ዘሥሩግና የሌሎችም ትምህርት በውስጡ ይገኛል።",
          },
          vers: ["Jude 1:3", "2Tim 1:13"],
        },
        {
          tekst: {
            no: "መጽሐፈ ምሥጢር («mysteriets bok») ble skrevet av den etiopiske læreren Abba Giyorgis av Gasicha (አባ ጊዮርጊስ ዘጋሥጫ). Han svarer på vranglære om Treenigheten, om Kristus, om Den hellige ånd og om Maria, med ord fra Det gamle og Det nye testamentet. Han dikterte boka til fem skrivere på to dager. Mahibere Kidusan kaller ham «den etiopiske Kyrillos».",
            am: "መጽሐፈ ምሥጢርን የደረሰው ኢትዮጵያዊው ሊቅ አባ ጊዮርጊስ ዘጋሥጫ ነው። ስለ ምሥጢረ ሥላሴ፣ ስለ ምሥጢረ ሥጋዌ፣ ስለ መንፈስ ቅዱስና ስለ እመቤታችን ለተነሡ መናፍቃን ከብሉይና ከሐዲስ እየጠቀሰ መልስ ሰጥቷል። አምስት ጸሐፊዎችን ሰብስቦ በቃሉ እየነገራቸው በሁለት ዕለታት ጽፈውታል። «ኢትዮጵያዊው ቄርሎስ» ተብሎም ይጠራል።",
          },
          vers: ["Titus 1:9"],
        },
        {
          tekst: {
            no: "ቄርሎስ er boka med lære fra den hellige Kyrillos av Aleksandria (ድርሳነ ቄርሎስ og ተረፈ ቄርሎስ). Kyrillos ledet kirkemøtet i Efesos i 431 og brukte ordet ተዋሕዶ, «forent til ett», om Kristus: Gud og menneske i én natur. Elevene i መጻሕፍት ቤት lærer boka.",
            am: "መጽሐፈ ቄርሎስ የእስክንድርያው ሊቀ ጳጳስ የቅዱስ ቄርሎስን ትምህርት (ድርሳነ ቄርሎስና ተረፈ ቄርሎስ) የያዘ ነው። ቅዱስ ቄርሎስ በ፬፻፴፩ ዓ.ም. በኤፌሶን ጉባኤ የሊቃውንቱ አፈ ጉባኤ ሆኖ «ተዋሕዶ» የሚለውን ቃል አጉልቶ ተጠቅሞበታል። ደቀ መዛሙርት በመጻሕፍት ቤት ይማሩታል።",
          },
          vers: ["John 1:14"],
        },
      ],
    },
    {
      id: "gudstjenesten",
      tittel: { no: "Bøkene vi ber og synger fra", am: "የጸሎትና የዜማ መጻሕፍት" },
      punkter: [
        {
          tekst: {
            no: "መጽሐፈ ቅዳሴ har kirkas 14 anaforaer, bønnene i ቅዳሴ der brødet og vinen blir Kristi kropp og blod. Prestene og diakonene ber fra den, og menigheten svarer. Hver anafora brukes på bestemte dager.",
            am: "መጽሐፈ ቅዳሴ ፲፬ቱን ቅዳሴያት የያዘ ነው፤ ኅብስቱና ወይኑ ሥጋውና ደሙ የሚሆኑበት ጸሎት ነው። ካህናቱና ዲያቆናቱ ያደርሱታል፤ ሕዝቡም ይመልሳል። እያንዳንዱ ቅዳሴ በተወሰኑ ዕለታት ይቀደስበታል።",
          },
          vers: ["1Cor 11:23-26"],
        },
        {
          tekst: {
            no: "Yareds bøker er ድጓ (sangene for årets søndager og høytider), ጾመ ድጓ (for den store fasten), ምዕራፍ, ዝማሬ (etter nattverden) og መዋሥዕት (vekselsang, blant annet for de døde). Kirkesangerne (ደብተራ og መዘምራን) synger fra dem i ማኅሌት og ቅዳሴ.",
            am: "የቅዱስ ያሬድ መጻሕፍት ድጓ፣ ጾመ ድጓ፣ ምዕራፍ፣ ዝማሬና መዋሥዕት ናቸው። ሊቃውንትና መዘምራን በማኅሌትና በቅዳሴ ከእነርሱ ያዜማሉ።",
          },
          vers: ["Col 3:16", "Eph 5:19"],
        },
        {
          tekst: {
            no: "ሰዓታት er bønnebok for natten og dagen. Den ble skrevet av Abba Giyorgis av Gasicha på 1400-tallet. Prester, diakoner, munker og kirkesangere ber den i kirka om natten, ofte til det blir lyst. David sa: «Midt om natten står jeg opp for å prise deg.»",
            am: "መጽሐፈ ሰዓታት የሌሊትና የመዓልት ጸሎት መጽሐፍ ነው፤ የደረሰውም በ፲፭ኛው መቶ ክፍለ ዘመን አባ ጊዮርጊስ ዘጋሥጫ ነው። ካህናት፣ ዲያቆናት፣ መነኮሳትና ሊቃውንት በሌሊት በቤተ ክርስቲያን እስከ ነግህ ያደርሱታል። ዳዊትም «በእኩለ ሌሊት አመሰግንህ ዘንድ እነሣለሁ» ብሏል።",
          },
          vers: ["Ps 119:62", "Ps 119:164"],
        },
        {
          tekst: {
            no: "ውዳሴ ማርያም («lovsang til Maria») ble skrevet av den hellige Efrem fra Syria. Den har én del for hver dag i uka. Alle kan be den, også hjemme. Etter den ber mange አንቀጸ ብርሃን («lysets port»), som kirka forteller at den hellige Yared sang foran Sions tavle i Aksum.",
            am: "ውዳሴ ማርያምን የደረሰው ሶርያዊው ቅዱስ ኤፍሬም ነው፤ ለሳምንቱ ዕለታት በሰባት ተከፍሏል። ሁሉም ምእመናን በቤታቸውም ይጸልዩታል። ከእርሱም ቀጥሎ ብዙዎች አንቀጸ ብርሃንን ይጸልያሉ፤ ቅዱስ ያሬድ በታቦተ ጽዮን ፊት ቆሞ ያቀረበው ምስጋና ነው።",
          },
          vers: ["Luke 1:28", "Luke 1:48"],
        },
        {
          tekst: {
            no: "መልክእ («bilde, skikkelse») er lovsanger der hvert vers hilser én del av helgenens kropp: håret, hodet, ansiktet, øynene, ørene og så videre. Hvert vers begynner med ሰላም ለ…, «fred være med …». Kjente eksempler er መልክአ ማርያም og መልክአ ኢየሱስ.",
            am: "መልክእ እያንዳንዱ ክፍሉ የቅዱሱን የአካል ክፍል (ጸጉሩን፣ ራሱን፣ ፊቱን፣ ዓይኑን፣ ጆሮውን …) «ሰላም ለ…» እያለ የሚያመሰግን ድርሰት ነው። መልክአ ማርያምና መልክአ ኢየሱስ የታወቁ ናቸው።",
          },
        },
        {
          tekst: {
            no: "ግብረ ሕማማት («lidelsens gjerning») er boka for påskeuka (ሰሙነ ሕማማት). Den har lesninger og bønner om Jesu lidelse for hver time, dag og natt. Den har vært i bruk siden 1300-tallet, og Abune Selama oversatte den fra arabisk til ge'ez. Boka blir velsignet på ሆሣዕና og leses gjennom hele uka.",
            am: "ግብረ ሕማማት በሰሙነ ሕማማት የሚነበብ መጽሐፍ ነው፤ ስለ ጌታችን ሕማማት በየሰዓቱ በሌሊትና በመዓልት የሚነበቡ ምንባባትንና ጸሎቶችን ይዟል። ከ፲፬ኛው መቶ ክፍለ ዘመን ጀምሮ በሥራ ላይ ውሏል፤ ብፁዕ አቡነ ሰላማ ከዐረብኛ ወደ ግእዝ ተረጐሙት። በሆሣዕና ተባርኮ ሳምንቱን ሙሉ ይነበባል።",
          },
          vers: ["Isa 53:5", "Luke 22:44"],
          andre: [
            {
              no: "ትእዛዝ 31 (Sinodos): «Men dere, ta vare på dere selv og hold minnet om hans lidelser.»",
              am: "ትእዛዝ ፴፩፦ «ወአንትሙሰ ተዐቀቡ፤ ወግበሩ ተዝከረ ሕማማቲሁ፤ እናንተስ ተጠበቁ፤ የሕማሙን መታሰቢያ አድርጉ።»",
            },
          ],
        },
      ],
    },
    {
      id: "andemta",
      tittel: { no: "Hvordan bøkene forklares: አንድምታ", am: "አንድምታ ትርጓሜ" },
      punkter: [
        {
          tekst: {
            no: "I kirka leser man ikke bare. Man forklarer også. Da Esra leste loven, forklarte de den for folket, så de forstod det som ble lest. Jesus åpnet Skriftene for disiplene på veien til Emmaus, og hjertet deres brant.",
            am: "በቤተ ክርስቲያን ማንበብ ብቻ ሳይሆን መተርጐምም አለ። ዕዝራ የሕጉን መጽሐፍ ሲያነብ «ሕዝቡም የሚነበበውን ያስተውሉ ነበር»። ጌታችንም ወደ ኤማሁስ በሚሄዱት ደቀ መዛሙርት ፊት «መጻሕፍትንም ሲከፍትልን ልባችን ይቃጠልብን አልነበረምን?» እስኪሉ ድረስ ተረጐመላቸው።",
          },
          vers: ["Neh 8:8", "Luke 24:27", "Luke 24:32"],
        },
        {
          tekst: {
            no: "አንድምታ er kirkas gamle måte å forklare bøkene på, på amharisk. Læreren leser et stykke på ge'ez, oversetter det og forklarer det. Ofte gir han flere forklaringer etter hverandre og begynner hver ny med «አንድም …» («eller også …»). Slik viser han at et vers kan ha flere sanne betydninger.",
            am: "አንድምታ የቤተ ክርስቲያን ጥንታዊ የትርጓሜ ስልት ነው። መምህሩ የግእዙን ንባብ አንብቦ በአማርኛ ይተረጕመዋል፤ ያብራራዋልም። ብዙ ጊዜ «አንድም …» እያለ ሌላ ትርጓሜ ይጨምራል፤ ለምሳሌ በኦሪት ዘፍጥረት አንድምታ «አንድም ‹ቤት› ማለት ነው» ይላል። በዚህም አንድ ቃል ብዙ ምሥጢር እንዳለው ያሳያል።",
          },
          vers: ["Acts 8:30-31"],
        },
        {
          tekst: {
            no: "Tolkningen læres i መጻሕፍት ቤት, kirkas høyeste skole. Den har fire grener (አራቱ ጉባኤያት): Det gamle testamentet (ብሉያት), Det nye testamentet (ሐዲሳት), kirkefedrenes bøker (ሊቃውንት) og munkenes bøker (መነኮሳት). En lærer som kan alle fire, kalles «lærer for de fire grenene».",
            am: "ትርጓሜ የሚማረው በመጻሕፍት ቤት ነው። አራት ጉባኤያት አሉት፤ ብሉያት፣ ሐዲሳት፣ ሊቃውንትና መነኮሳት። አራቱንም የተማረ «የአራቱ ጉባኤያት መምህር» ይባላል።",
          },
          vers: ["2Tim 2:2", "1Tim 4:13"],
        },
      ],
    },
    {
      id: "hvem-naar",
      tittel: { no: "Hvem leser hva, og når?", am: "ማን ምን ያነባል? መቼስ?" },
      punkter: [
        {
          tekst: {
            no: "Hver dag: Prestene og diakonene ber ሰዓታት om natten og ኪዳን om morgenen og kvelden. Dagens ስንክሳር leses. Ved ቅዳሴ leser diakonene og prestene fra Paulus' brev, de andre brevene, Apostlenes gjerninger, Salmene og evangeliet.",
            am: "በየዕለቱ፦ ካህናትና ዲያቆናት በሌሊት ሰዓታትን፣ በነግህና በሠርክ ኪዳንን ያደርሳሉ። የዕለቱ ስንክሳር ይነበባል። በቅዳሴም ከመልእክተ ጳውሎስ፣ ከሌሎቹ መልእክታት፣ ከግብረ ሐዋርያት፣ ከመዝሙረ ዳዊትና ከወንጌል ይነበባል።",
          },
          vers: ["Ps 119:164", "Luke 4:16-17"],
        },
        {
          tekst: {
            no: "Søndager og høytider: Kirkesangerne synger fra ድጓ i ማኅሌት om natten. Prestene velger den anaforaen fra መጽሐፈ ቅዳሴ som hører til dagen. På Marias dager leses ተአምረ ማርያም. Kirka og de troende leser også ገድል for å lære av helgenene.",
            am: "በሰንበትና በበዓላት፦ መዘምራን በማኅሌት ከድጓ ያዜማሉ። ካህናት ለዕለቱ የሚገባውን ቅዳሴ ከመጽሐፈ ቅዳሴ ይቀድሳሉ። በእመቤታችን በዓላት ተአምረ ማርያም ይነበባል። ከቅዱሳን ሕይወት እንድንማር ገድላትንም እናነባለን።",
          },
        },
        {
          tekst: {
            no: "I fastetiden synger kirkesangerne fra ጾመ ድጓ. I påskeuka leses ግብረ ሕማማት time for time, sammen med Jesaja, Jeremia, Salmene og evangeliene.",
            am: "በዐቢይ ጾም መዘምራን ከጾመ ድጓ ያዜማሉ። በሰሙነ ሕማማት ግብረ ሕማማት ከኢሳይያስ፣ ከኤርምያስ፣ ከመዝሙረ ዳዊትና ከወንጌል ጋር በየሰዓቱ ይነበባል።",
          },
          vers: ["Isa 53:4"],
        },
        {
          tekst: {
            no: "Hjemme: Alle kan be ውዳሴ ማርያም og Davids salmer (ዳዊት) hver dag. Biskopene og prestene bruker ፍትሐ ነገሥት når de skal avgjøre spørsmål om kirkas regler. Elevene i kirkeskolen lærer ሃይማኖተ አበው, መጽሐፈ ምሥጢር, ቄርሎስ og tolkningene (አንድምታ).",
            am: "በቤት፦ ምእመናን ሁሉ በየዕለቱ ውዳሴ ማርያምንና መዝሙረ ዳዊትን ይጸልያሉ። ጳጳሳትና ካህናት የቤተ ክርስቲያንን ሥርዓት ሲወስኑ ፍትሐ ነገሥትን ይጠቀማሉ። የአብነት ተማሪዎች ሃይማኖተ አበውን፣ መጽሐፈ ምሥጢርን፣ ቄርሎስንና የመጻሕፍትን አንድምታ ይማራሉ።",
          },
          vers: ["Acts 17:11", "Deut 6:6-7"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Den hellige Johannes Chrysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "«Vi skulle egentlig ikke trenge noe skrevet. Vi skulle leve så rent at Den hellige ånds nåde i hjertet ledet oss, i stedet for ord skrevet med blekk. … Men vi har drevet denne nåden bort fra oss. La oss derfor holde godt fast ved den andre store gaven», det vil si bøkene.",
        am: "«በቀለም ከተቀረፁ የመጻሕፍት ቃላት ይልቅ በልቡናችን ያደረ የመንፈስ ቅዱስ ጸጋ ይመራን ዘንድ እጅግ ንጹሕ ሕይወት ሊኖረን እንጂ የተጻፈ ነገር ሊያስፈልገን አይገባም ነበር። … ይህን ጸጋ ከእኛ እንዲርቅ አድርገናል። እንግዲህ ሁለተኛውን ታላቅ ስጦታ (መጻሕፍትን) አጥብቀን እንያዝ።»",
      },
      kilde: "Tolkningen av Matteusevangeliet, sitert i Mahibere Kidusan: «መጽሐፍ ቅዱስ በቤተ ክርስቲያን ዐይን» (eotcmk.org)",
    },
    {
      navn: { no: "Den hellige Johannes Chrysostomos i ሃይማኖተ አበው", am: "ቅዱስ ዮሐንስ አፈወርቅ (ሃይማኖተ አበው)" },
      tekst: {
        no: "«Synagogen gav profetien, kirka tok imot den. … Jødene tolket boka som var skrevet på pergament, men folkeslagene forstod mysteriet.»",
        am: "«ምኵራብ ትንቢት አስገኘች፤ ቤተ ክርስቲያን ተቀበለችው። … አይሁድም በብራና የተጻፈውን መጽሐፍ ተረጎሙ፤ አሕዛብ ግን ምሥጢሩን ተረዱ።»",
      },
      kilde: "ሃይማኖተ አበው ዘዮሐንስ አፈወርቅ 66:21–24, sitert i Mahibere Kidusan: «ምኲራብ» (eotcmk.org)",
    },
    {
      navn: { no: "Abba Giyorgis av Gasicha", am: "አባ ጊዮርጊስ ዘጋሥጫ" },
      tekst: {
        no: "Da skriverne var ferdige med መጽሐፈ ምሥጢር, undret han seg selv over boka og sa: «Jeg har ikke sagt ordene i denne boka. Den hellige ånd talte med min tunge.»",
        am: "ጸሐፊዎቹ መጽሐፈ ምሥጢርን በፈጸሙ ጊዜ ጽሑፉን ተመልክቶ አደነቀ፤ «እኔ የዚህን መጽሐፍ ቃል አልተናገርኩም፤ መንፈስ ቅዱስ በእኔ አንደበት ተናገረ እንጂ» አለ።",
      },
      kilde: "Mahibere Kidusan: «ዕቅበተ እምነት በመጽሐፈ ምሥጢር – የመጀመሪያ ክፍል» (eotcmk.org)",
    },
    {
      navn: { no: "Kirkas lærere (ሊቃውንተ ቤተ ክርስቲያን)", am: "ሊቃውንተ ቤተ ክርስቲያን" },
      tekst: {
        no: "«Et menneske går på to bein. Når det blir sykt eller gammelt, tar det en stokk. Slik kunne mennesket først stå og gå av seg selv. Men etter at synden gjorde det gammelt og sykt, fikk det bøkene og lærerne som en stokk.»",
        am: "«ሰው የሚራመደው በሁለት እግሩ ነው። እግሩን ሲታመም ወይም ሲያረጅ … ምርኩዝ ይይዛል። ልክ እንደዚሁ ሰው በቅድመ ተፈጥሮው በራሱ መቆምና መራመድ የሚችል ነበር። ነገር ግን በኃጢአት ካረጀና ከታመመ በኋላ … መጻሕፍትና መምህራን ምርኩዝ እንዲሆኑት ተሰጡት።»",
      },
      kilde: "Mahibere Kidusan: «መጽሐፍ ቅዱስ በቤተ ክርስቲያን ዐይን» (eotcmk.org)",
    },
  ],
  ord: [
    { ord: "ሰማንያ አሐዱ", forklaring: { no: "«åttien» – de 81 bøkene i Bibelen", am: "፹፩ዱ ቅዱሳት መጻሕፍት" } },
    { ord: "አሥራው መጻሕፍት", forklaring: { no: "«rotbøkene» – Bibelens bøker", am: "የመጻሕፍት ሥሮች፤ መጽሐፍ ቅዱስ" } },
    { ord: "አዋልድ መጻሕፍት", forklaring: { no: "«bøkenes barn» – kirkas bøker som forklarer Bibelen", am: "የመጻሕፍት ልጆች" } },
    { ord: "ብሉይ ኪዳን", forklaring: { no: "Det gamle testamentet (46 bøker)", am: "፵፮ቱ መጻሕፍት" } },
    { ord: "ሐዲስ ኪዳን", forklaring: { no: "Det nye testamentet (35 bøker)", am: "፴፭ቱ መጻሕፍት" } },
    { ord: "ቀኖና", forklaring: { no: "regel; listen over bøkene kirka har godkjent", am: "ሕግ፣ ሥርዓት፤ የተቈጠሩ መጻሕፍት" } },
    { ord: "ግእዝ", forklaring: { no: "kirkas gamle språk", am: "የቤተ ክርስቲያን ቋንቋ" } },
    { ord: "ስንክሳር", forklaring: { no: "boka med helgenene for hver dag i året", am: "የዕለቱን ቅዱሳን የሚነግር መጽሐፍ" } },
    { ord: "ገድል", forklaring: { no: "«kamp» – bok om en helgens liv", am: "ተጋድሎ፤ የቅዱሳን ሕይወት መጽሐፍ" } },
    { ord: "ድርሳን", forklaring: { no: "lang preken eller lovsang", am: "ሰፊ ንባብ፣ ረዥም ስብከት" } },
    { ord: "ተአምረ ማርያም", forklaring: { no: "boka om Marias under", am: "የእመቤታችን ተአምራት መጽሐፍ" } },
    { ord: "ፍትሐ ነገሥት", forklaring: { no: "«kongenes lov» – kirkas lovbok", am: "የቤተ ክርስቲያን የሕግ መጽሐፍ" } },
    { ord: "ሃይማኖተ አበው", forklaring: { no: "«fedrenes tro» – kirkefedrenes lære", am: "የአባቶች ሃይማኖት" } },
    { ord: "መጽሐፈ ምሥጢር", forklaring: { no: "«mysteriets bok» av Abba Giyorgis", am: "የአባ ጊዮርጊስ ዘጋሥጫ መጽሐፍ" } },
    { ord: "ግብረ ሕማማት", forklaring: { no: "boka for påskeuka", am: "በሰሙነ ሕማማት የሚነበብ" } },
    { ord: "ሰዓታት", forklaring: { no: "bønnebok for natten og dagen", am: "የሌሊትና የመዓልት ጸሎት" } },
    { ord: "ውዳሴ ማርያም", forklaring: { no: "Efrems lovsang til Maria, én for hver ukedag", am: "የቅዱስ ኤፍሬም ምስጋና" } },
    { ord: "አንቀጸ ብርሃን", forklaring: { no: "«lysets port» – lovsang til Maria", am: "የእመቤታችን ምስጋና" } },
    { ord: "መልክእ", forklaring: { no: "lovsang som hilser hver del av helgenens kropp", am: "«ሰላም ለ…» የሚል ድርሰት" } },
    { ord: "አንድምታ", forklaring: { no: "kirkas måte å forklare bøkene på", am: "የትርጓሜ ስልት" } },
    { ord: "ሲኖዶስ", forklaring: { no: "her: fire bøker med apostlenes regler", am: "አራቱ የሥርዓት መጻሕፍት" } },
    { ord: "ዲድስቅልያ", forklaring: { no: "«lære» – apostlenes bud til kirka", am: "ትምህርት" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hvor mange bøker har Bibelen vår, og hva heter det på ge'ez?", am: "መጽሐፍ ቅዱሳችን ስንት መጻሕፍት አሉት? በግእዝስ ምን ይባላል?" },
      svar: {
        no: "81 bøker: 46 i Det gamle testamentet og 35 i Det nye. På ge'ez heter det ሰማንያ አሐዱ.",
        am: "፹፩ መጻሕፍት፤ ፵፮ቱ የብሉይ፣ ፴፭ቱ የሐዲስ ኪዳን። በግእዝ «ሰማንያ አሐዱ» ይባላል።",
      },
    },
    {
      sporsmal: { no: "Nevn tre bøker i vår bibel som de fleste andre bibler ikke har.", am: "በሌሎች መጻሕፍት ቅዱሳት የማይገኙ ሦስት መጻሕፍትን ጥቀስ።" },
      svar: {
        no: "For eksempel Enoks bok (ሄኖክ), Jubileenes bok (ኩፋሌ) og Meqabyan (መቃብያን).",
        am: "ለምሳሌ መጽሐፈ ሄኖክ፣ መጽሐፈ ኩፋሌና መጽሐፈ መቃብያን።",
      },
    },
    {
      sporsmal: { no: "Hvilken bok i Det nye testamentet siterer Enoks profeti?", am: "የሄኖክን ትንቢት የጠቀሰው የሐዲስ ኪዳን መጽሐፍ የትኛው ነው?" },
      svar: { no: "Judas' brev (vers 14–15).", am: "የይሁዳ መልእክት (ቍ. ፲፬–፲፭)።" },
    },
    {
      sporsmal: { no: "Hva betyr አዋልድ መጻሕፍት?", am: "አዋልድ መጻሕፍት ማለት ምን ማለት ነው?" },
      svar: {
        no: "«Bøkenes barn»: kirkas bøker som vokser ut av Bibelen og forklarer den. En bok som strider mot Bibelen, regnes ikke blant dem.",
        am: "የመጻሕፍት ልጆች ማለት ነው፤ ከመጽሐፍ ቅዱስ የተገኙና እርሱን የሚያብራሩ መጻሕፍት ናቸው። ከመጽሐፍ ቅዱስ ጋር የሚቃረን መጽሐፍ ከአዋልድ አይቈጠርም።",
      },
    },
    {
      sporsmal: { no: "Hva er forskjellen på ስንክሳር og ገድል?", am: "በስንክሳርና በገድል መካከል ያለው ልዩነት ምንድን ነው?" },
      svar: {
        no: "ስንክሳር har korte fortellinger om helgenene for hver dag i året. En ገድል er en hel bok om livet og kampen til én helgen.",
        am: "ስንክሳር ለዓመቱ ዕለታት ሁሉ የቅዱሳንን ዜና በአጭሩ ይናገራል። ገድል ግን የአንድን ቅዱስ ሕይወትና ተጋድሎ በሰፊው የሚተርክ መጽሐፍ ነው።",
      },
    },
    {
      sporsmal: { no: "Når leses ግብረ ሕማማት?", am: "ግብረ ሕማማት መቼ ይነበባል?" },
      svar: {
        no: "I påskeuka (ሰሙነ ሕማማት), time for time. Boka blir velsignet på ሆሣዕና.",
        am: "በሰሙነ ሕማማት በየሰዓቱ። በሆሣዕና ተባርኮ መነበብ ይጀምራል።",
      },
    },
    {
      sporsmal: { no: "Hvem skrev ውዳሴ ማርያም, og hvem skrev ሰዓታት?", am: "ውዳሴ ማርያምን ማን ደረሰው? ሰዓታትንስ?" },
      svar: {
        no: "ውዳሴ ማርያም ble skrevet av den hellige Efrem fra Syria. ሰዓታት ble skrevet av Abba Giyorgis av Gasicha.",
        am: "ውዳሴ ማርያምን ሶርያዊው ቅዱስ ኤፍሬም፣ ሰዓታትን አባ ጊዮርጊስ ዘጋሥጫ ደረሱት።",
      },
    },
    {
      sporsmal: { no: "Hvorfor er ge'ez viktig i kirka?", am: "ግእዝ በቤተ ክርስቲያን ለምን አስፈላጊ ነው?" },
      svar: {
        no: "Ge'ez er kirkas gamle språk. Bibelen ble tidlig oversatt til ge'ez, og ቅዳሴ, Yareds sanger og de fleste av kirkas bøker er på ge'ez. Lesningene leses i dag også på amharisk.",
        am: "ግእዝ የቤተ ክርስቲያን ቋንቋ ነው። መጻሕፍት ቀድመው ወደ ግእዝ ተተርጕመዋል፤ ቅዳሴ፣ የያሬድ ዜማና አብዛኞቹ መጻሕፍት በግእዝ ናቸው። ምንባባቱ ዛሬ በአማርኛም ይነበባሉ።",
      },
    },
  ],
  kilder: [
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Bible (kanonlisten)", url: "https://www.ethiopianorthodox.org/english/canonical/books.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Church Music", url: "https://www.ethiopianorthodox.org/english/church/music.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "Mahibere Kidusan: መጽሐፍ ቅዱስ በቤተ ክርስቲያን ዐይን", url: "https://eotcmk.org/a/17157-2/" },
    { navn: "Mahibere Kidusan: «የእግዚአብሔር መንፈስ ያለበት መጽሐፍ ሁሉ …» (del 1)", url: "https://eotcmk.org/a/2-316-17/" },
    { navn: "Mahibere Kidusan: «የእግዚአብሔር መንፈስ ያለበት መጽሐፍ ሁሉ …» (del 2)", url: "https://eotcmk.org/a/%e1%8b%a8%e1%8a%a5%e1%8c%8d%e1%8b%9a%e1%8a%a0%e1%89%a5%e1%88%94%e1%88%ad-%e1%88%98%e1%8a%95%e1%8d%88%e1%88%b5-%e1%8b%ab%e1%88%88%e1%89%a0%e1%89%b5-%e1%88%98%e1%8c%bd%e1%88%90%e1%8d%8d/" },
    { navn: "Mahibere Kidusan: አገልግሎቴን አከብራለሁ! (ስንክሳር, ሃይማኖተ አበው, ገድል)", url: "https://eotcmk.org/a/%e1%8a%a0%e1%8c%88%e1%88%8d%e1%8c%8d%e1%88%8e%e1%89%b4%e1%8a%95-%e1%8a%a0%e1%8a%a8%e1%89%a5%e1%88%ab%e1%88%88%e1%88%81-8/" },
    { navn: "Mahibere Kidusan: የድርሳንና የገድል ልዩነት ምንድን ነው?", url: "https://eotcmk.org/a/%e1%8b%a8%e1%8b%b5%e1%88%ad%e1%88%b3%e1%8a%95%e1%8a%93-%e1%8b%a8%e1%8c%88%e1%8b%b5%e1%88%8d-%e1%88%8d%e1%8b%a9%e1%8a%90%e1%89%b5-%e1%88%9d%e1%8a%95%e1%8b%b5%e1%8a%95-%e1%8a%90%e1%8b%8d/" },
    { navn: "Mahibere Kidusan: የቅዱሳንን ገድል የመማር አስፈላጊነት", url: "https://eotcmk.org/a/%e1%8b%a8%e1%89%85%e1%8b%b1%e1%88%b3%e1%8a%95%e1%8a%95-%e1%8c%88%e1%8b%b5%e1%88%8d-%e1%8b%a8%e1%88%98%e1%88%9b%e1%88%ad-%e1%8a%a0%e1%88%b5%e1%8d%88%e1%88%8b%e1%8c%8a%e1%8a%90%e1%89%b5/" },
    { navn: "Mahibere Kidusan: «ጌታዬ ኢየሱስ ክርስቶስን ልከተለው እሄዳለሁ» (መጽሐፈ ስንክሳር)", url: "https://eotcmk.org/a/%e1%8c%8c%e1%89%b3%e1%8b%ac-%e1%8a%a2%e1%8b%a8%e1%88%b1%e1%88%b5-%e1%8a%ad%e1%88%ad%e1%88%b5%e1%89%b6%e1%88%b5%e1%8a%95-%e1%88%8d%e1%8a%a8%e1%89%b0%e1%88%88%e1%8b%8d-%e1%8a%a5%e1%88%84/" },
    { navn: "Mahibere Kidusan: ቃለ ዓዋዲ (ፍትሐ ነገሥት)", url: "https://eotcmk.org/a/%e1%89%83%e1%88%88-%e1%8b%93%e1%8b%8b%e1%8b%b2-2/" },
    { navn: "Mahibere Kidusan: ለሲኖዶሳዊ ልዕልና መከበር የምእመናን ድርሻ አስፈላጊ ነው!", url: "https://eotcmk.org/a/%e1%88%88%e1%88%b2%e1%8a%96%e1%8b%b6%e1%88%b3%e1%8b%8a-%e1%88%8d%e1%8b%95%e1%88%8d%e1%8a%93-%e1%88%98%e1%8a%a8%e1%89%a0%e1%88%ad-%e1%8b%a8%e1%88%9d%e1%8a%a5%e1%88%98%e1%8a%93%e1%8a%95-%e1%8b%b5/" },
    { navn: "Mahibere Kidusan: ጸሎተ ፍትሐት ምንድ ነው? (ዲድስቅልያ og ፍትሐ ነገሥት)", url: "https://eotcmk.org/a/23-2007/" },
    { navn: "Mahibere Kidusan: ዕቅበተ እምነት በመጽሐፈ ምሥጢር – የመጀመሪያ ክፍል", url: "https://eotcmk.org/a/%e1%8b%95%e1%89%85%e1%89%a0%e1%89%b0-%e1%8a%a5%e1%88%9d%e1%8a%90%e1%89%b5-%e1%89%a0%e1%88%98%e1%8c%bd%e1%88%90%e1%8d%88-%e1%88%9d%e1%88%a5%e1%8c%a2%e1%88%ad-%e1%8b%a8%e1%88%98%e1%8c%80%e1%88%98/" },
    { navn: "Mahibere Kidusan: «ወአንትሙሰ ተዐቀቡ …» /ትእዛዝ ፴፩/ (ግብረ ሕማማት)", url: "https://eotcmk.org/a/%e1%8b%88%e1%8a%a0%e1%8a%95%e1%89%b5%e1%88%99%e1%88%b0-%e1%89%b0%e1%8b%90%e1%89%80%e1%89%a1%e1%8d%a4-%e1%8b%88%e1%8c%8d%e1%89%a0%e1%88%a9-%e1%89%b0%e1%8b%9d%e1%8a%a8%e1%88%a8/" },
    { navn: "Mahibere Kidusan: ምኲራብ (ሃይማኖተ አበው ዘዮሐንስ አፈወርቅ)", url: "https://eotcmk.org/a/%e1%88%9d%e1%8a%b2%e1%88%ab%e1%89%a5-3/" },
    { navn: "Mahibere Kidusan: በዓለ ቅዱስ ያሬድ (አንቀጸ ብርሃን)", url: "https://eotcmk.org/a/%e1%89%a0%e1%8b%93%e1%88%88-%e1%89%85%e1%8b%b1%e1%88%b5-%e1%8b%ab%e1%88%ac%e1%8b%b5/" },
    { navn: "Mahibere Kidusan: የተቀደሰ ውኃ (eksempel på አንድምታ)", url: "https://eotcmk.org/a/%e1%8b%a8%e1%89%b0%e1%89%80%e1%8b%b0%e1%88%b0-%e1%8b%8d%e1%8a%83/" },
    { navn: "Mahibere Kidusan: ከትንሣኤ እስከ ዳግም ትንሣኤ ያሉት ዕለታት (ቀሌምንጦስ)", url: "https://eotcmk.org/a/%e1%8a%a8%e1%89%b5%e1%8a%95%e1%88%a3%e1%8a%a4-%e1%8a%a5%e1%88%b5%e1%8a%a8-%e1%8b%b3%e1%8c%8d%e1%88%9d-%e1%89%b5%e1%8a%95%e1%88%a3%e1%8a%a4-%e1%8b%ab%e1%88%89%e1%89%b5-%e1%8b%95%e1%88%88%e1%89%b3/" },
    { navn: "Mahibere Kidusan: «ሃይማኖትና ሀገር ወጣት ሲረከበው ነው …» (ግእዝ)", url: "https://eotcmk.org/a/%e1%88%83%e1%8b%ad%e1%88%9b%e1%8a%96%e1%89%b5%e1%8a%93-%e1%88%80%e1%8c%88%e1%88%ad-%e1%8b%88%e1%8c%a3%e1%89%b5-%e1%88%b2%e1%88%a8%e1%8a%a8%e1%89%a0%e1%8b%8d-%e1%8a%90%e1%8b%8d-%e1%88%80/" },
    { navn: "Marcos Daoud (overs.), The Liturgy of the Ethiopian Church, med innledning av erkebiskop Yesehaq (ethiopianorthodox.org)" },
    { navn: "Bibelen på nettstedet: Enoks bok, Jubileenes bok, Sinodos og Didaskalia (amharisk utgave 2000)" },
  ],
  utkast: true,
};
