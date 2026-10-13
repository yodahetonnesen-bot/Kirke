import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ማኅሌት:
// ethiopianorthodox.org: «የአቋቋም ሥነ ሥርዓት ታሪክ» (PDF, ordet ማኅሌት, at ማኅሌት holdes på måneds- og årshøytider mens
// søndagens sang kalles መዝሙር/መወድስ, rekkefølgen ስቡሕ ወውዱስ – ነግሥ – መልክእ og ዚቅ – ምልጣን – አደራረስ, ዝማሜ med
// መቋሚያ og መሪጌታ, መረግድ, ጽፋት og ወረብ, og at ጽፋት er et bilde på slagene mot Kristus);
// ethiopianorthodox.org: «Worship in the Ethiopian Orthodox Church» (ደብተራ som kirkesangere, bønnestaven, ingen tromme
// i den store fasten unntatt ሆሣዕና, sørgetone uten klapping) og «Church Music» (Yareds tre tonearter, ዝማሬ);
// Mahibere Kidusan: «ዝክረ ቅዱስ ያሬድ» (Yared hørte englene, begynte ማኅሌት, bøkene ድጓ, ጾመ ድጓ, ምዕራፍ, ዝማሬ og
// መዋሥዕት), «‹‹በማስተዋል ዘምሩ››» (de tre tonearter som bilde på Treenigheten), «‹‹እንደሚንሿሿ ጸናጽል ሆኛለሁ››» (ጸናጽል),
// «ሥርዓተ አምልኮ ክፍል ሦስት» (natta før høytiden: ዋዜማ, ማኅሌት, ኪዳን, ቅዳሴ, ታቦት og ወረብ) og «የትንሣኤ በዓል …»
// (påskenatta trinn for trinn); ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን (Yareds bøker, ማኅሌተ ጽጌ, Abba Giyorgis' ord om
// kirkas engleorden); Marcos Daoud / erkebiskop Yesehaq: The Liturgy of the Ethiopian Church (ደብተራ som levittene,
// rommet ቅኔ ማኅሌት).
// Symbolikken i trommen (ከበሮ) er hentet fra bloggen «ተዋህዶ-ሀይማኖታችን: የከበሮ ክፍል ምሳሌያዊ ትርጉም», som gjengir
// vanlig undervisning i kirka; den er ikke en offisiell kirkeside.
// Usikkert: Den nøyaktige betydningen av ወረብ forklares litt ulikt. Kildene sier at ወረብ er en del av sangen som synges
// fram og tilbake mellom to grupper, med endrede eller tilføyde ord, og at den ofte framføres på ዐውደ ምሕረት når ታቦቱ står
// der. Vi har holdt forklaringen enkel.
// Usikkert: At ማኅሌት holdes på alle søndager, sier ikke kildene. Kildene sier at det på søndager synges መዝሙር/መወድስ, og
// at selve ማኅሌት holdes på måneds- og årshøytider. Hvor ofte menigheten her har ማኅሌት, bør presten bekrefte.
// Usikkert: Kildene gir ulike år for når Yared begynte med ማኅሌት (MK: 538 etter etiopisk tidsregning). Vi har ikke tatt
// med årstallet.
export const mahlet: Tema = {
  slug: "mahlet",
  del: "gudstjenester",
  tittel: { no: "Kirkesangen om natten", am: "ማኅሌት" },
  undertittel: {
    no: "ማኅሌት – lovsang med ከበሮ, ጸናጽል og መቋሚያ fra kveld til morgen",
    am: "ማኅሌት – በከበሮ፣ በጸናጽልና በመቋሚያ ከሌሊት እስከ ነግህ የሚቀርብ ምስጋና",
  },
  bilde: "lyre",
  ingress: {
    no:
      "Natta før en stor høytid står kirkesangerne i kirka og lovsynger Gud til morgenen kommer. Med tromme (ከበሮ), sistrum (ጸናጽል) og bønnestav (መቋሚያ) synger de hymnene som ቅዱስ ያሬድ fikk fra Gud. Dette kalles ማኅሌት. Det er en gave fra Etiopias kirke til hele verden, og vi kan være med selv om vi ikke kan alle sangene.",
    am:
      "በታላላቅ በዓላት ዋዜማ ሊቃውንቱ በቤተ ክርስቲያን ቆመው እስኪነጋ ድረስ እግዚአብሔርን ያመሰግናሉ። በከበሮ፣ በጸናጽልና በመቋሚያ ቅዱስ ያሬድ ከእግዚአብሔር የተቀበለውን ዜማ ይዘምራሉ። ይህ ማኅሌት ይባላል። ዜማውን ሁሉ ባናውቀውም እንኳ በጸሎትና በእልልታ ተሳታፊ መሆን እንችላለን።",
  },
  hovedvers: "Ps 150:3-6",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva er ማኅሌት?", am: "ማኅሌት ምንድን ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ማኅሌት kommer av ge'ez-ordet ኀለየ, som betyr å synge og å lovprise. ማኅሌት er altså lovsang som bæres fram for Gud. Kirka bruker ordet om sangen i natta før høytidene.",
            am: "«ማኅሌት» ማለት «ኀለየ፣ ዘመረ፣ አመሰገነ» ካለው የግእዝ ግሥ የወጣ ቃል ነው። ሥራውም ስሙ እንደሚያመለክተው ለእግዚአብሔር የምስጋና መዝሙር ማቅረብ ነው። በበዓላት ዋዜማ በሌሊት የሚደረገው አገልግሎት ማኅሌት ይባላል።",
          },
          vers: ["Ps 92:2-4", "Eph 5:19"],
        },
        {
          tekst: {
            no: "Om natta synger vi slik David gjorde: «Midt om natten står jeg op for å prise dig.» Paulus og Silas sang lovsanger til Gud ved midnatt i fengselet. Natta er stille, og hjertet kan lettere være hos Gud.",
            am: "ዳዊት «በእኩለ ሌሊት አመሰግንህ ዘንድ እነሣለሁ» እንዳለ በሌሊት እንዘምራለን። ጳውሎስና ሲላስም በመንፈቀ ሌሊት በወኅኒ ቤት እግዚአብሔርን በዜማ ያመሰግኑ ነበር። ሌሊት ጸጥ ያለ ጊዜ ነውና ልቡናችን በቀላሉ ከእግዚአብሔር ጋር ይሆናል።",
          },
          vers: ["Ps 119:62", "Acts 16:25", "Ps 134:1-2"],
        },
        {
          tekst: {
            no: "Englene lovsynger Gud dag og natt uten stans: «Hellig, hellig, hellig!» Johannes så de eldste i himmelen med harper, og de sang en ny sang for Lammet. Kirka lærer at ማኅሌት er en etterligning av englenes lovsang i himmelen.",
            am: "መላእክት «ቅዱስ፥ ቅዱስ፥ ቅዱስ» እያሉ ሌሊትና ቀን ሳያቋርጡ ያመሰግናሉ። ቅዱስ ዮሐንስ ሽማግሌዎቹ በገና ይዘው ለበጉ አዲስ ቅኔ ሲቀኙ አየ። ማኅሌት የሰማያውያን መላእክትን ምስጋና አብነት ያደረገ ነው።",
          },
          vers: ["Isa 6:3", "Rev 4:8", "Rev 5:8-9"],
        },
        {
          tekst: {
            no: "I Det gamle testamentet satte David levittene til å synge og spille for Herren med harper, citarer og cymbler. Da sangerne lovet Gud i templet, fylte Herrens herlighet huset. Kirkas sangere i dag gjør en tjeneste som minner om levittenes.",
            am: "በብሉይ ኪዳን ዳዊት ሌዋውያን በመሰንቆ፣ በበገናና በጸናጽል በእግዚአብሔር ፊት እንዲያዜሙ ሾመ። መዘምራኑ በቤተ መቅደስ እግዚአብሔርን ባመሰገኑ ጊዜ የእግዚአብሔር ክብር ቤቱን ሞላው። የዛሬዎቹ የቤተ ክርስቲያን መዘምራን አገልግሎት የሌዋውያንን አገልግሎት ይመስላል።",
          },
          vers: ["1Chr 15:16", "2Chr 5:12-14"],
        },
      ],
    },
    {
      id: "hvem",
      tittel: { no: "Hvem synger?", am: "የሚዘምሩት እነማን ናቸው?" },
      punkter: [
        {
          tekst: {
            no: "Det er kirkesangerne som synger ማኅሌት. De kalles ደብተራ, መዘምራን (sangere) eller ሊቃውንት (lærde). De har lært sangen i mange år i kirkeskolen. Prester og diakoner synger også med.",
            am: "ማኅሌትን የሚቆሙት ደብተራዎች፣ መዘምራንና ሊቃውንት ናቸው። ዜማውን በአብነት ትምህርት ቤት ለብዙ ዓመታት ተምረዋል። ካህናትና ዲያቆናትም አብረው ይዘምራሉ።",
          },
          vers: ["1Chr 25:1", "Col 3:16"],
        },
        {
          tekst: {
            no: "Sangen ledes av en som kan den godt. Han kalles መሪ (leder), og en lærer i sangkunsten har tittelen መሪጌታ. Han gir tonen og takten med staven sin, og de andre svarer. Sangerne står i to grupper, på høyre og venstre side, og synger vekselvis.",
            am: "ዝማሬውን የሚመራው ዜማውን ጠንቅቆ የሚያውቅ መሪ ነው፤ የአቋቋም መምህርም መሪጌታ ይባላል። በመቋሚያው (በዘንጉ) እየቃኘ ይመራል፤ ሌሎቹም ይቀበሉታል። መዘምራኑ በቀኝና በግራ ሆነው እየተቀባበሉ ይዘምራሉ።",
          },
          vers: ["Neh 12:31", "Ps 68:26"],
        },
        {
          tekst: {
            no: "Sangerne står i den ytre delen av kirka, som heter ቅኔ ማኅሌት («lovsangens sted»). De går ikke inn i helligdommen (መቅደስ). Der tjener bare prestene og diakonene.",
            am: "ሊቃውንቱ የሚቆሙት ቅኔ ማኅሌት በተባለው በቤተ ክርስቲያኑ ውጫዊ ክፍል ነው። ወደ መቅደስ አይገቡም፤ በመቅደስ የሚያገለግሉት ካህናትና ዲያቆናት ብቻ ናቸው።",
          },
          vers: ["Num 18:6-7"],
        },
        {
          tekst: {
            no: "Også søndagsskolen og vanlige menighetsmedlemmer kan lære sangene. I mange menigheter utenfor Etiopia lærer gutter og jenter, menn og kvinner ማኅሌት og ወረብ, så tjenesten ikke skal bli borte.",
            am: "የሰንበት ትምህርት ቤት ተማሪዎችና ምእመናንም ዜማውን መማር ይችላሉ። በስደት ባሉ ብዙ አብያተ ክርስቲያናት አገልግሎቱ እንዳይጠፋ ወጣቶች ማኅሌትንና ወረብን ይማራሉ።",
          },
          vers: ["Ps 148:12-13"],
        },
      ],
    },
    {
      id: "instrumentene",
      tittel: { no: "Instrumentene: ከበሮ, ጸናጽል og መቋሚያ", am: "የዜማ መሣሪያዎች፦ ከበሮ፣ ጸናጽልና መቋሚያ" },
      ingress: {
        no: "David sier: «Lov ham med pauke og dans … lov ham med tonende bekkener!» Kirka bruker tre redskaper i ማኅሌት.",
        am: "ዳዊት «በከበሮና በዘፈን አመስግኑት … ድምፁ መልካም በሆነ ጸናጽል አመስግኑት» ይላል። በማኅሌት ሦስት የዜማ መሣሪያዎች ይገለገላሉ።",
      },
      punkter: [
        {
          tekst: {
            no: "ከበሮ er den store trommen som henger i en reim rundt halsen. Kirka lærer at trommen er et bilde på Kristus: Den store åpningen minner om at han er Gud uten grenser, og den lille om at han ble et lite menneske. Når den slås på begge sider, minner det om at han ble slått i ansiktet.",
            am: "ከበሮ በአንገት ላይ በማንገቻ የሚያዝ የዜማ መሣሪያ ነው። ከበሮ የጌታችን የኢየሱስ ክርስቶስ ምሳሌ ነው፤ ሰፊው አፉ የመለኮቱን ምልዓት፣ ጠባቡ አፉ ደግሞ ሰው መሆኑን ያስታውሰናል። ግራና ቀኝ ሲመታ ጌታችን በጥፊ መመታቱን ያሳስበናል።",
          },
          vers: ["Ps 149:3", "Matt 26:67"],
        },
        {
          tekst: {
            no: "Det røde tøyet rundt trommen minner om den røde kappen soldatene satte på Jesus. Reimene på trommen minner om sporene etter piskeslagene på ryggen hans. Slik minner trommen oss om at Herren led for oss, selv når vi synger med glede.",
            am: "ከበሮው የለበሰው ጨርቅ አይሁድ ለጌታችን ያለበሱትን ቀይ ልብስ፣ ጠፍሩም በጀርባው ላይ የታየውን የግርፋት ሰንበር ያስታውሰናል። ስለዚህ በደስታ ስንዘምርም ከበሮው ጌታ ስለ እኛ የተቀበለውን መከራ ያሳስበናል።",
          },
          vers: ["John 19:1-2"],
        },
        {
          tekst: {
            no: "ጸናጽል er et sistrum av metall med små skiver som klinger når det ristes. Kirka sier det har vært brukt i lovsangen fra levittene til i dag. Paulus advarer oss: Den som synger uten kjærlighet, er bare som «en klingende bjelle». Derfor må hjertet være med når vi lovsynger.",
            am: "ጸናጽል ሲወዘወዝ የሚንሿሿ ድምፁ መልካም የሆነ የምስጋና መሣሪያ ነው፤ ከቀደሙት ሌዋውያን ጀምሮ እስከ ዛሬ ድረስ በእግዚአብሔር ፊት ይዘነው የምንቆምበት ነው። ቅዱስ ጳውሎስ ግን ፍቅር የሌለው ሰው «እንደሚንሽዋሽዋ ጸናጽል» እንደ ሆነ ያስጠነቅቃል። ስለዚህ ስናመሰግን ልባችን አብሮ ሊሆን ይገባል።",
          },
          vers: ["Ps 150:5", "1Cor 13:1"],
        },
        {
          tekst: {
            no: "መቋሚያ er en lang bønnestav med et kors eller en bøyle øverst. Sangerne støtter seg på den i den lange natta. Når de synger med staven og beveger seg sakte opp og ned og fra side til side, kalles det ዝማሜ. Lederen viser takten med staven.",
            am: "መቋሚያ ረዥም የጸሎት ምርኵዝ ነው። በረዥሙ ሌሊት ሊቃውንቱ ይደገፉበታል። ከመቋሚያው ጋር መዝመምና ቀና ማለት ዝማሜ ይባላል፤ መሪጌታው ዝማሜውን በዘንግ እየቃኘ ከቀኝ ወደ ግራ፣ ከላይ ወደ ታች እያወዛወዘ ይመራል።",
          },
          vers: ["Heb 11:21", "Ps 23:4"],
        },
        {
          tekst: {
            no: "Instrumentene brukes ikke alltid. I den store fasten (ዐቢይ ጾም) slås ikke trommen, unntatt på ሆሣዕና (palmesøndag). I sorgtider synges det i en sørgmodig tone uten klapping og dans. Sangen følger kirkeåret.",
            am: "መሣሪያዎቹ ሁልጊዜ አይገለገሉም። በዐቢይ ጾም ከሆሣዕና በቀር ከበሮ አይመታም። በኀዘን ጊዜም ያለ ጭብጨባና ሽብሻቦ በኀዘን ዜማ ይዘመራል። ዜማው የቤተ ክርስቲያንን የዘመን አቈጣጠር ይከተላል።",
          },
          vers: ["Eccl 3:4", "Joel 2:12"],
        },
      ],
    },
    {
      id: "slik",
      tittel: { no: "Slik synges det: መረግድ, ጽፋት, ወረብ og ዝማሬ", am: "የአዘማመር ዓይነቶች፦ መረግድ፣ ጽፋት፣ ወረብና ዝማሬ" },
      punkter: [
        {
          tekst: {
            no: "Når hymnen er sunget sakte, synges den igjen i raskere takt med tromme og sistrum. Dette kalles መረግድ. Til slutt synges den raskest, med klapping, og det kalles ጽፋት. Kirka sier at ጽፋት er et bilde på slagene Jesus fikk i ansiktet.",
            am: "ዝማሬው በዝግታ ከተዘመረ በኋላ በከበሮና በጸናጽል በፈጠነ አመታት ይመረገዳል፤ ይህ መረግድ ይባላል። በመጨረሻም በፍጥነት በጭብጨባ ይጸፋል፤ ይህ ጽፋት ይባላል። ጽፋት ክርስቶስን በጥፊ እየመላለሱ የመቱትን ያስታውሳል።",
          },
          vers: ["Ps 47:2", "Mark 14:65"],
        },
        {
          tekst: {
            no: "ወረብ er når sangerne tar en del av hymnen og synger den fram og tilbake mellom seg, ofte med nye ord lagt til. De beveger føttene og stavene i takt. Etter ቅዳሴ, når ታቦቱ står på ዐውደ ምሕረት, synger sangerne og søndagsskolen ወረብ for folket.",
            am: "ወረብ የተመረገደውን ዝማሬ ተከትሎ ሌላ ዐረፍተ ነገር በመጨመር ወይም በመለወጥ እየተቀባበሉና እየመላለሱ የሚዘምሩት ነው፤ እግራቸውንና መቋሚያቸውን በሥርዓት ያንቀሳቅሳሉ። ከቅዳሴ በኋላ ታቦቱ በዐውደ ምሕረት ሲቆም ሊቃውንቱና የሰንበት ትምህርት ቤት ተማሪዎች ወረብ ያቀርባሉ።",
          },
          vers: ["Neh 12:24", "Ps 145:4"],
        },
        {
          tekst: {
            no: "ዝማሬ er en av Yareds bøker. Den har sangene som synges når folket tar imot nattverden i ቅዳሴ. Den er delt i fem: ኅብስት (brødet), ጽዋዕ (begeret), መንፈስ (Ånden), አኮቴት (takksigelsen) og ምሥጢር (mysteriet). Ordet ዝማሬ brukes også om lovsang generelt.",
            am: "ዝማሬ ከቅዱስ ያሬድ መጻሕፍት አንዱ ሲሆን በቅዳሴ ጊዜ ምእመናን ሲቆርቡ የሚዘመረውን ይዟል። ዝማሬ ኅብስት፣ ጽዋዕ፣ መንፈስ፣ አኮቴትና ምሥጢር ተብሎ በአምስት ይከፈላል። «ዝማሬ» የሚለው ቃል በአጠቃላይ ምስጋናንም ያመለክታል።",
          },
          vers: ["Matt 26:30", "Ps 34:2-4"],
        },
        {
          tekst: {
            no: "Folket er med ved å be stille, synge med på svarene og ved å rope av glede (እልልታ). David sier: «Klapp i hendene, alle folk! Rop med fryd for Gud!» Men vi gjør det med ærefrykt, ikke som en vanlig fest.",
            am: "ምእመናን በጸሎት፣ በመቀበልና በእልልታ ይሳተፋሉ። ዳዊት «አሕዛብ ሁላችሁ፥ እጆቻችሁን አጨብጭቡ፥ በደስታ ቃልም ለእግዚአብሔር እልል በሉ» ይላል። ይህን ግን እንደ ተራ ድግስ ሳይሆን በፍርሃትና በሥርዓት እናደርገዋለን።",
          },
          vers: ["Ps 47:2", "Ps 2:11"],
        },
      ],
    },
    {
      id: "natta",
      tittel: { no: "Fra kveld til ቅዳሴ – slik går natta", am: "ከዋዜማ እስከ ቅዳሴ" },
      ingress: {
        no: "En stor høytid begynner kvelden før. Kirka feirer fra kvelden (ዋዜማ) og gjennom natta til ቅዳሴ om morgenen.",
        am: "ዓመታዊ በዓላት ከዋዜማ ጀምሮ እስከ ዕለቱ ሠርክ ድረስ ይከበራሉ፤ ዋዜማው በሊቃውንት ማኅሌትና በምእመናን እልልታ ደምቆ ያድራል።",
      },
      punkter: [
        {
          tekst: {
            no: "Om kvelden synges ዋዜማ, kveldssangen før høytiden. Hos Gud begynner dagen om kvelden: «Det blev aften, og det blev morgen, første dag.» Derfor begynner også høytiden kvelden før.",
            am: "በዋዜማ የበዓሉ የሠርክ ምስጋና ይደርሳል። በእግዚአብሔር ዘንድ ቀን ከማታ ይጀምራል፤ «ማታም ሆነ ጥዋትም ሆነ፥ አንድ ቀን» ተብሎ ተጽፏልና። ስለዚህ በዓሉም ከዋዜማው ይጀምራል።",
          },
          vers: ["Gen 1:5", "Lev 23:32"],
        },
        {
          tekst: {
            no: "Når ማኅሌት begynner om natta, ber prestene og sangerne bønner, salmer av David og ውዳሴ ማርያም. Så begynner selve ማኅሌት med hymnen «ስቡሕ ወውዱስ» («Lovet og priset»). Deretter kommer ነግሥ, et dikt som hilser Gud og helgenene.",
            am: "ማኅሌቱ ሲጀመር ካህናቱና ሊቃውንቱ በጸሎት፣ በመዝሙረ ዳዊትና በውዳሴ ማርያም ይጀምራሉ። ማኅሌቱ «ስቡሕ ወውዱስ» በማለት ይጀመራል፤ ቀጥሎ ነግሥ ይደርሳል፤ ነግሥ እግዚአብሔርንና ቅዱሳንን የሚያመሰግን ግጥም ነው።",
          },
          vers: ["Ps 63:7", "Ps 96:1-2"],
        },
        {
          tekst: {
            no: "Så synges መልክእ, lange dikt som hilser den som høytiden er for – Herren, Maria, en engel eller en helgen. Etter hvert vers synges ዚቅ, korte hymner hentet fra Yareds bøker. Til slutt kommer ምልጣን, den mest festlige delen, med እስመ ለዓለም, አንገርጋሪ og ሰላም, med tromme, sistrum og ዝማሜ.",
            am: "ቀጥሎ ለዕለቱ ባለ በዓል የሚቀርበው መልክእ ይደርሳል፤ ከየመልክኡ በኋላ ከቅዱስ ያሬድ መጻሕፍት የተውጣጣ ዚቅ ይዘመራል። ከዚያም ዝማሜውና ጽፋቱ የሚታይበት ምልጣን ይመጣል፤ ይኸውም እስመ ለዓለም፣ አንገርጋሪና ሰላም ነው።",
          },
          vers: ["Ps 45:2", "Ps 150:1-2"],
        },
        {
          tekst: {
            no: "På månedlige høytider slutter ማኅሌት omtrent her. På de store årlige høytidene fortsetter sangerne med ውዳሴ ማርያም og salmer av David. Mot morgenen ber prestene ኪዳን, morgenbønnen. Så begynner ቅዳሴ.",
            am: "የወር በዓል ሲሆን ማኅሌቱ በዚህ ይፈጸማል። በዓመት በዓላት ግን ውዳሴ ማርያምና መዝሙረ ዳዊት እየደረሰ ይቀጥላል። ሲነጋ ካህናቱ ኪዳን ያደርሳሉ፤ ከዚያም ቅዳሴ ይገባል።",
          },
          vers: ["Ps 5:4", "Ps 59:17"],
        },
        {
          tekst: {
            no: "Etter ቅዳሴ bæres ታቦቱ ut og rundt kirka tre ganger. Søndagsskolen synger sanger for dagen, og når ታቦቱ står på ዐውደ ምሕረት, synger sangerne ወረብ. Folket roper av glede, slik David danset foran Herrens ark.",
            am: "ከቅዳሴ በኋላ ታቦቱ ወጥቶ ሦስት ጊዜ ዑደት ያደርጋል። የሰንበት ትምህርት ቤት ተማሪዎች ዕለቱን የተመለከቱ መዝሙራት ያቀርባሉ፤ ታቦቱ በዐውደ ምሕረት ሲቆም ሊቃውንቱ ወረብ ያቀርባሉ። ዳዊት በታቦቱ ፊት እንደ ዘመረ ሕዝቡም በእልልታ ያመሰግናል።",
          },
          vers: ["2Sam 6:5", "2Sam 6:14-15"],
        },
      ],
    },
    {
      id: "nar",
      tittel: { no: "Når holdes ማኅሌት?", am: "ማኅሌት መቼ ይቆማል?" },
      punkter: [
        {
          tekst: {
            no: "ማኅሌት holdes på de store årlige høytidene, som jul (ልደት), ጥምቀት og påske (ትንሣኤ), og på helgenenes og englenes årlige minnedager. Den holdes også på de månedlige høytidsdagene, for eksempel en kirkes egen ታቦት-dag hver måned.",
            am: "ማኅሌት በዓመት በዓላት (ለምሳሌ በልደት፣ በጥምቀትና በትንሣኤ) እና በቅዱሳንና በመላእክት ዓመታዊ በዓላት ይቆማል። በወር በዓላትም ይቆማል፤ ለምሳሌ በየወሩ በሚከበረው የቤተ ክርስቲያኑ ታቦት በዓል።",
          },
          vers: ["Lev 23:2", "Ps 81:3-4"],
        },
        {
          tekst: {
            no: "På søndager synges også Yareds hymner om morgenen før ቅዳሴ. Kirka kaller søndagens sang መዝሙር eller መወድስ, og den holdes i det ytre av kirka før ቅዳሴ begynner.",
            am: "በእሑድም ከቅዳሴ በፊት በማለዳ የቅዱስ ያሬድ ዜማ ይዘመራል፤ እሑድ የሚቆመው መዝሙር ወይም መወድስ ይባላል።",
          },
          vers: ["Ps 92:2-3"],
        },
        {
          tekst: {
            no: "Om høsten, i blomstertiden (ዘመነ ጽጌ), synger kirka ማኅሌተ ጽጌ, «blomstersangen». Den priser Maria som blomsten, og Kristus som blomsten hun bar. Kirka forteller at den ble skrevet av en munk som het አባ ጽጌ ድንግል.",
            am: "በዘመነ ጽጌ ማኅሌተ ጽጌ ይቆማል። እመቤታችንን በአበባ፣ ውድ ልጇንም በአበባ እየመሰለ ያመሰግናል። ደራሲው አባ ጽጌ ድንግል የተባለ መነኩሴ እንደ ሆነ ይነገራል።",
          },
          vers: ["Isa 11:1", "Song 2:1"],
        },
        {
          tekst: {
            no: "I den store fasten synges ጾመ ድጓ, fastens hymnebok, i en alvorlig tone. Fra ሆሣዕና og gjennom påskeuka synges det om Kristi lidelse, og påskenatta synges det med stor glede: «Kristus er stått opp fra de døde!»",
            am: "በዐቢይ ጾም ጾመ ድጓ ይዘመራል። በሰሙነ ሕማማት ስለ ጌታ መከራ ይዜማል፤ በትንሣኤ ሌሊት ደግሞ «ክርስቶስ ተንሥአ እሙታን» እያሉ በታላቅ ደስታ ያመሰግናሉ።",
          },
          vers: ["Matt 28:6", "Ps 30:12"],
        },
      ],
    },
    {
      id: "yared",
      tittel: { no: "ቅዱስ ያሬድ og bøkene hans", am: "ቅዱስ ያሬድና የዜማ መጻሕፍቱ" },
      ingress: {
        no: "Yared får sin egen side senere. Her nevner vi kort hvorfor ማኅሌት er hans gave.",
        am: "ስለ ቅዱስ ያሬድ ራሱን የቻለ ገጽ ይዘጋጃል። እዚህ ማኅሌት የእርሱ ስጦታ የሆነበትን በአጭሩ እንመለከታለን።",
      },
      punkter: [
        {
          tekst: {
            no: "ቅዱስ ያሬድ levde i Aksum på 500-tallet, da kong Gebre Meskel styrte. Kirka forteller at Gud lot ham høre englene lovsynge i himmelen, og etter det begynte han å synge og skrive hymner. Han begynte ማኅሌት.",
            am: "ቅዱስ ያሬድ በ6ኛው ምእት ዓመት በአፄ ገብረ መስቀል ዘመን በአክሱም የኖረ ሊቅ ነው። እግዚአብሔር በሰማይ ቅዱሳን መላእክት በልዩ ጣዕመ ዝማሬ ሲያመሰግኑት አሰማው፤ ከዚያም ዝማሬን ደረሰ፤ ማኅሌትንም ጀመረ።",
          },
          vers: ["2Cor 12:2-4", "Ps 40:4"],
        },
        {
          tekst: {
            no: "Hymnene hans står i bøkene ድጓ (den største, for hele året), ጾመ ድጓ (for fasten), ምዕራፍ (fra Davids salmer), ዝማሬ og መዋሥዕት. ድጓ følger kirkeåret med de fire tidene: ዘመነ ዮሐንስ, ዘመነ አስተምህሮ, ዘመነ ጾም og ዘመነ ፋሲካ.",
            am: "ቅዱስ ያሬድ የደረሳቸው መጻሕፍት ድጓ፣ ጾመ ድጓ፣ ምዕራፍ፣ ዝማሬና መዋሥዕት ይባላሉ። ከእነዚህ ትልቁ ድጓ ሲሆን ዓመታዊውን የቤተ ክርስቲያን ቀመር ይከተላል፤ ዘመነ ዮሐንስ፣ ዘመነ አስተምህሮ፣ ዘመነ ጾምና ዘመነ ፋሲካ።",
          },
          vers: ["Ps 104:33"],
        },
        {
          tekst: {
            no: "Yared sang i tre tonearter: ግእዝ, ዕዝል og አራራይ. Kirkas lærere sier at de tre er et bilde på Treenigheten: ግእዝ på Faderen, ዕዝል på Sønnen som led for å frelse Adam, og አራራይ, den milde tonen, på Den hellige ånd.",
            am: "ቅዱስ ያሬድ ግእዝ፣ ዕዝልና አራራይ በተባሉ ሦስት የዜማ ስልቶች ዘመረ። ሊቃውንቱ እነዚህ የሥላሴን አንድነትና ሦስትነት ያመለክታሉ ይላሉ፤ ግእዝ በአብ፣ ዕዝል አዳምን ለማዳን ጽኑ መከራ በተቀበለው በወልድ፣ የሚያራራው አራራይ በመንፈስ ቅዱስ ይመሰላል።",
          },
          vers: ["Matt 28:19", "2Cor 13:14"],
        },
        {
          tekst: {
            no: "Kirka sier at en sang er ortodoks når ordene stemmer med troen, melodien er Yareds, instrumentene er dem kirka bruker, og den synges med orden. David sier: «Syng en sang som gjør vis!»",
            am: "አንድ መዝሙር ኦርቶዶክሳዊ የሚያሰኘው መልእክቱ፣ የዜማ ስልቱ፣ የዜማው መሣሪያና የሚቀርብበት ሥርዓት ሲጠበቅ ነው። ዳዊት «በማስተዋል ዘምሩ» ይላል።",
          },
          vers: ["Ps 47:8", "1Cor 14:40"],
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "Hellige Yared", am: "ቅዱስ ያሬድ" },
      tekst: {
        no: "Kirka forteller at Gud tok Yared opp og lot ham høre de hellige englene lovsynge med en sødme som ikke finnes på jorden. Det han hørte, lærte han kirka. Derfor feirer kirka sine høytider med hans hymner – ማኅሌት.",
        am: "እግዚአብሔር ቅዱስ ያሬድን ወደ ሰማይ ነጥቆ «በሰማይ ቅዱሳን መላእክት ልዩ በሆነ ጣዕመ ዝማሬ እርሱን ሲያመሰግኑ አሰማው»። የሰማውንም ለቤተ ክርስቲያን አስተማረ፤ ቤተ ክርስቲያንም በዓላቷን የምታከብረው እርሱ በደረሳቸው ዜማዎች (በሥርዓተ ማኅሌት) ነው።",
      },
      kilde: "Mahibere Kidusan: ዝክረ ቅዱስ ያሬድ (eotcmk.org)",
    },
    {
      navn: { no: "Kirkas lærde (ሊቃውንት)", am: "ሊቃውንተ ቤተ ክርስቲያን" },
      tekst: {
        no: "De tre tonene Yared lærte i englenes verden, viser Treenighetens enhet: ግእዝ er bilde på Faderen – «ære og pris tilhører ham»; ዕዝል på Sønnen, som led tungt for å frelse Adam; og አራራይ, den milde, søte tonen, på Den hellige ånds søte gave.",
        am: "«ቅዱስ ያሬድ በመላእክት ዓለም የተማራቸው ግእዝ፣ ዕዝል እና አራራይ የተባሉት ዜማዎች የሥላሴን አንድነት የሚያመለክቱ ናቸው። ግእዝ በአብ ሲመሰል … ዕዝል ወልድ ጽኑዕ መከራ ተቀብሎ አዳምን ለማዳኑ ምሳሌ ነው። አራራይ ደግሞ የመንፈስ ቅዱስ ምሳሌ፤ የሚያራራ ጥዑም ዜማ ማለት ነው።»",
      },
      kilde: "Mahibere Kidusan: ‹‹በማስተዋል ዘምሩ›› (መዝ. ፵፮፥፯), eotcmk.org",
    },
    {
      navn: { no: "Abba Giyorgis av Gasicha", am: "አባ ጊዮርጊስ ዘጋስጫ" },
      tekst: {
        no: "«Denne kirken har englenes orden, etter mønster av det som er i himmelen. Kirken ligner helligdommen der oppe.» I stedet for serafene har vi prester som bærer fram det rene offeret og røkelsen, og diakoner som skynder seg ved alteret.",
        am: "«ይህች ቤተ ክርስቲያን በሰማያት [ባለው] አምሳል የመላእክት ሥርዓት አላት። ቤተ ክርስቲያን በላይ በሰማይ ባለው መቅደስ ትመሰላለች።» በሱራፌል ፈንታ ንጹሑን መሥዋዕትና ዕጣን የሚያቀርቡ ካህናት፣ በመሠዊያው ላይ የሚፋጠኑ ንጹሐን ዲያቆናት አሉን።",
      },
      kilde: "መጽሐፈ ሰዓታት, «ኵሎሙ ዘዘወትር» – sitert i ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን, kap. 1",
    },
  ],
  ord: [
    { ord: "ማኅሌት", forklaring: { no: "lovsang; kirkesangen i natta før høytider", am: "ምስጋና፣ መዝሙር" } },
    { ord: "ቅኔ ማኅሌት", forklaring: { no: "den ytre delen av kirka der sangerne står", am: "ሊቃውንት የሚቆሙበት ክፍል" } },
    { ord: "ደብተራ / መዘምራን / ሊቃውንት", forklaring: { no: "kirkesangere / sangere / lærde", am: "የቤተ ክርስቲያን መዘምራን" } },
    { ord: "መሪጌታ", forklaring: { no: "lærer og leder i kirkesangen", am: "የአቋቋም መምህርና መሪ" } },
    { ord: "ከበሮ", forklaring: { no: "tromme", am: "የዜማ መሣሪያ" } },
    { ord: "ጸናጽል", forklaring: { no: "sistrum (klingende metallinstrument)", am: "የሚንሿሿ የዜማ መሣሪያ" } },
    { ord: "መቋሚያ", forklaring: { no: "bønnestav", am: "የጸሎት ምርኵዝ" } },
    { ord: "ዝማሜ", forklaring: { no: "sang med bevegelse av staven", am: "ከመቋሚያ ጋር መዝመምና ቀና ማለት" } },
    { ord: "መረግድ / ጽፋት", forklaring: { no: "raskere sang med tromme / raskest, med klapping", am: "የአዘማመር ዓይነቶች" } },
    { ord: "ወረብ", forklaring: { no: "del av sangen som synges fram og tilbake", am: "እየተቀባበሉ የሚዘመር" } },
    { ord: "ዚቅ", forklaring: { no: "korte hymner fra Yareds bøker", am: "ከድጓ የተውጣጣ ዝማሬ" } },
    { ord: "ዋዜማ", forklaring: { no: "kvelden før en høytid", am: "የበዓል ዋዜማ" } },
    { ord: "ግእዝ፣ ዕዝል፣ አራራይ", forklaring: { no: "Yareds tre tonearter", am: "ሦስቱ የዜማ ስልቶች" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet ማኅሌት?", am: "ማኅሌት ማለት ምን ማለት ነው?" },
      svar: {
        no: "Det kommer av ge'ez-ordet ኀለየ og betyr lovsang – å synge og prise Gud.",
        am: "«ኀለየ፣ ዘመረ፣ አመሰገነ» ከሚለው የግእዝ ግሥ የወጣ ሲሆን ምስጋና ማለት ነው።",
      },
    },
    {
      sporsmal: { no: "Hvilke tre redskaper brukes i ማኅሌት?", am: "በማኅሌት የሚገለገሉት ሦስቱ መሣሪያዎች የትኞቹ ናቸው?" },
      svar: {
        no: "ከበሮ (tromme), ጸናጽል (sistrum) og መቋሚያ (bønnestav).",
        am: "ከበሮ፣ ጸናጽልና መቋሚያ።",
      },
    },
    {
      sporsmal: { no: "Hva er trommen et bilde på?", am: "ከበሮ የማን ምሳሌ ነው?" },
      svar: {
        no: "På Kristus: Han er Gud uten grenser og ble menneske. Slagene minner om at han ble slått, og det røde tøyet om den røde kappen.",
        am: "የጌታችን የኢየሱስ ክርስቶስ ምሳሌ ነው፤ መመታቱ በጥፊ መመታቱን፣ ቀዩ ልብስ ያለበሱትን ቀይ ልብስ ያስታውሰናል።",
      },
    },
    {
      sporsmal: { no: "Hvorfor slås ikke trommen i den store fasten?", am: "በዐቢይ ጾም ከበሮ የማይመታው ለምንድን ነው?" },
      svar: {
        no: "Fasten er en tid for anger og alvor. Da synges ጾመ ድጓ uten tromme, unntatt på ሆሣዕና.",
        am: "ጾም የንስሐና የኀዘን ጊዜ ነውና፤ በዚያ ጊዜ ከሆሣዕና በቀር ያለ ከበሮ ጾመ ድጓ ይዘመራል።",
      },
    },
    {
      sporsmal: { no: "Hvordan går natta før en stor høytid?", am: "የታላቅ በዓል ሌሊት እንዴት ያልፋል?" },
      svar: {
        no: "ዋዜማ om kvelden, ማኅሌት gjennom natta, ኪዳን mot morgenen, så ቅዳሴ, og til slutt går ታቦቱ ut med sang og ወረብ.",
        am: "ዋዜማ፣ ሌሊቱን ማኅሌት፣ በነግህ ኪዳን፣ ከዚያ ቅዳሴ፣ በመጨረሻም ታቦቱ በዝማሬና በወረብ ይወጣል።",
      },
    },
    {
      sporsmal: { no: "Hvem fikk sangen fra Gud, og hva heter hans tre tonearter?", am: "ዜማውን ከእግዚአብሔር የተቀበለው ማን ነው? ሦስቱ የዜማ ስልቶቹስ?" },
      svar: {
        no: "ቅዱስ ያሬድ. Tonene heter ግእዝ, ዕዝል og አራራይ.",
        am: "ቅዱስ ያሬድ፤ ግእዝ፣ ዕዝልና አራራይ።",
      },
    },
  ],
  kilder: [
    { navn: "The Ethiopian Orthodox Tewahedo Church: የአቋቋም ሥነ ሥርዓት ታሪክ (PDF)", url: "https://www.ethiopianorthodox.org/amharic/yezemametsheft/zematarik/aquaquam.pdf" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Worship in the Ethiopian Orthodox Church", url: "https://www.ethiopianorthodox.org/english/ethiopian/worship.html" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: Church Music", url: "https://www.ethiopianorthodox.org/churchmusic/ecclesia.html" },
    { navn: "Mahibere Kidusan: ዝክረ ቅዱስ ያሬድ", url: "https://eotcmk.org/a/%e1%8b%9d%e1%8a%ad%e1%88%a8-%e1%89%85%e1%8b%b1%e1%88%b5-%e1%8b%ab%e1%88%ac%e1%8b%b5/" },
    { navn: "Mahibere Kidusan: ‹‹በማስተዋል ዘምሩ›› (መዝ. ፵፮፥፯)", url: "https://eotcmk.org/a/%e1%89%a0%e1%88%9b%e1%88%b5%e1%89%b0%e1%8b%8b%e1%88%8d-%e1%8b%98%e1%88%9d%e1%88%a9-%e1%88%98%e1%8b%9d-%e1%8d%b5%e1%8d%ae%e1%8d%a5%e1%8d%af/" },
    { navn: "Mahibere Kidusan: ‹‹እንደሚንሿሿ ጸናጽል ሆኛለሁ›› (፩ኛቆሮ. ፲፫፥፩)", url: "https://eotcmk.org/a/%e1%8a%a5%e1%8a%95%e1%8b%b0%e1%88%9a%e1%8a%95%e1%88%bf%e1%88%bf-%e1%8c%b8%e1%8a%93%e1%8c%bd%e1%88%8d-%e1%88%86%e1%8a%9b%e1%88%88%e1%88%81-%e1%8d%a9%e1%8a%9b/" },
    { navn: "Mahibere Kidusan: ሥርዓተ አምልኮ, del 3 (ሥርዓተ ክብረ በዓላት)", url: "https://eotcmk.org/a/%e1%88%a5%e1%88%ad%e1%8b%93%e1%89%b0-%e1%8a%a0%e1%88%9d%e1%88%8d%e1%8a%ae-3/" },
    { navn: "Mahibere Kidusan: የትንሣኤ በዓል ትርጕምና አከባበሩ", url: "https://eotcmk.org/a/%e1%8b%a8%e1%89%b5%e1%8a%95%e1%88%a3%e1%8a%a4-%e1%89%a0%e1%8b%93%e1%88%8d-%e1%89%b5%e1%88%ad%e1%8c%95%e1%88%99%e1%8a%93-%e1%8a%a0%e1%8a%a8%e1%89%a3%e1%89%a0%e1%88%a9/" },
    { navn: "ቀሲስ መብራቱ ኪሮስ: አኰቴተ ቍርባን (ethiopianorthodox.org)", url: "https://www.ethiopianorthodox.org/amharic/yezemametsheft/kesis%20meberatu/Akoteta_Qurban.pdf" },
    { navn: "Marcos Daoud: The Liturgy of the Ethiopian Church (innledning av erkebiskop Yesehaq)", url: "http://www.eotc.faithweb.com/liturgy.htm" },
    { navn: "ተዋህዶ-ሀይማኖታችን (blogg): የከበሮ ክፍል ምሳሌያዊ ትርጉም" },
  ],
  utkast: true,
};
