import type { Tema } from "./typer";

// Bygger på kirkas egen undervisning om ምሥጢረ ሥላሴ:
// astemhro.com (ምስጢረ ሥላሴ፡ የእግዚአብሔርን ፍጹም አንድነትና ልዩ ሦስትነት ማመን ከሁሉ ይቀድማል – med sitater fra
// ሃይማኖተ አበው, ባስልዮስ og አባ ሕርያቆስ), Mahibere Kidusans barneside (eotcmk.org: ምሥጢረ ሥላሴ og ማማተብ),
// Mahibere Kidusan om ሐምሌ 7 (ሥላሴ በአብርሃም ቤት, og den engelske «Holy Trinity») og
// ethiopianorthodox.org (The Faith of the Church: The Mystery of the Holy Trinity).
// Usikkert: Kildene sier ikke hva den store festen ጥር 7 minnes, så det er utelatt.
// Usikkert: Forklaringen på hvorfor vi sier «አሐዱ አምላክ» i korsets tegn er satt sammen av kildenes lære
// (tre personer, men én Gud og ikke tre guder), ikke et ordrett sitat. Bør leses av en prest.
// Usikkert: ጥር 7 faller på 15. januar, men enkelte år (året etter et etiopisk skuddår) på 16. januar.
export const treenigheten: Tema = {
  slug: "treenigheten",
  del: "troen",
  tittel: { no: "Treenigheten", am: "ምሥጢረ ሥላሴ" },
  undertittel: { no: "Én Gud – Faderen, Sønnen og Den hellige ånd", am: "አንድ አምላክ፤ አብ፣ ወልድ፣ መንፈስ ቅዱስ" },
  bilde: "evangeliebladFontene",
  ingress: {
    no:
      "Det første av de fem mysteriene er ምሥጢረ ሥላሴ, treenighetens mysterium. Vi tror på én Gud, og denne ene Gud er tre personer: Faderen (አብ), Sønnen (ወልድ) og Den hellige ånd (መንፈስ ቅዱስ). Kirka sier at ሥላሴ er tre og likevel én, og én og likevel tre. Dette er grunnmuren i hele troen vår. Vi ble døpt i dette navnet, og vi begynner alt vi gjør med det.",
    am:
      "ከአምስቱ አዕማደ ምሥጢር የመጀመሪያው ምሥጢረ ሥላሴ ነው። በአንድ አምላክ እናምናለን፤ ይህ አንድ አምላክ ደግሞ በአካል ሦስት ነው፤ አብ፣ ወልድ፣ መንፈስ ቅዱስ። ቤተ ክርስቲያን «ሥላሴ አንድ ሲሆኑ ሦስት፣ ሦስት ሲሆኑ አንድ ናቸው» ብላ ታስተምራለች። ይህ የሃይማኖታችን ሁሉ መሠረት ነው፤ የተጠመቅነው በዚህ ስም ነው፤ ሥራችንን ሁሉ የምንጀምረውም በዚህ ስም ነው።",
  },
  hovedvers: "Matt 28:19",
  avsnitt: [
    {
      id: "hva",
      tittel: { no: "Hva betyr ሥላሴ?", am: "«ሥላሴ» ማለት ምን ማለት ነው?" },
      punkter: [
        {
          tekst: {
            no: "Ordet ሥላሴ kommer av ge'ez-verbet «ሠለሰ», som betyr å gjøre til tre. ሥላሴ betyr altså trehet. Når vi sier ቅድስት ሥላሴ, betyr det den hellige og helt spesielle treheten: Gud er tre, men likevel én.",
            am: "«ሥላሴ» የሚለው ቃል «ሠለሰ» (ሦስት አደረገ) ከሚለው የግዕዝ ግሥ የተገኘ ሲሆን ሦስትነት ማለት ነው። «ቅድስት ሥላሴ» ስንል ልዩ ሦስትነት ማለታችን ነው፤ ሦስት ሲሆኑ አንድ፣ አንድ ሲሆኑ ሦስት ናቸውና።",
          },
        },
        {
          tekst: {
            no: "Det kalles et mysterium (ምሥጢር) fordi det er åpenbart for troen, men ikke kan granskes uten tro. Menneskets tanke kan bare kjenne Gud så langt han selv har vist seg for oss.",
            am: "ምሥጢር የተባለው በእምነት የተገለጠ፣ ያለ እምነት ግን የማይመረመር ስለ ሆነ ነው። የሰው አእምሮ ሊያውቅ የሚችለው እግዚአብሔር በገለጠለት መጠን ብቻ ነው።",
          },
          vers: ["Rom 11:33", "1Cor 2:10"],
        },
        {
          tekst: {
            no: "Navnet እግዚአብሔር er navnet på Guds enhet. ሥላሴ er navnet på hans trehet. Den første som brukte ordet treenighet om Gud, var Teofilus av Antiokia rundt år 169. De 318 fedrene på kirkemøtet i Nikea stadfestet senere læren. De fant ikke på noe nytt, men forklarte det Bibelen allerede sier.",
            am: "«እግዚአብሔር» የአንድነት ስም ነው፤ «ሥላሴ» ደግሞ የሦስትነት ስም ነው። «ሥላሴ» የሚለውን ቃል ለመጀመሪያ ጊዜ የተጠቀመው የአንጾኪያው ቴዎፍሎስ በ169 ዓ.ም. ገደማ ነው። ኋላም በኒቅያ ጉባኤ 318ቱ ሊቃውንት አጽንተውታል፤ በቅዱሳት መጻሕፍት የተመሰከረውን ገለጡት እንጂ አዲስ ትምህርት አላመጡም።",
          },
        },
        {
          tekst: {
            no: "Treenigheten er den første søylen i troen og grunnlaget for frelsen vår. Alle kristne er døpt i Faderens, Sønnens og Den hellige ånds navn.",
            am: "ምሥጢረ ሥላሴ የእምነታችን ዋነኛ ምሰሶና የመዳናችን መሠረት ነው። ክርስቲያኖች ሁላችን የተጠመቅነው በአብ በወልድ በመንፈስ ቅዱስ ስም ነው።",
          },
          vers: ["Matt 28:19"],
        },
      ],
    },
    {
      id: "en",
      tittel: { no: "Én Gud – enheten (አንድነት)", am: "የሥላሴ አንድነት" },
      ingress: {
        no: "Kirka lærer at de tre er én i guddomsnaturen (ባሕርይ), i guddommen (መለኮት), i samværet (ሕልውና) og i viljen (ፈቃድ). De er også én i makt, i herredømme og i det å skape verden.",
        am: "ሥላሴ በባሕርይ፣ በመለኮት፣ በሕልውና፣ በፈቃድ አንድ ናቸው። በአገዛዝ፣ በሥልጣንና ይህን ዓለም በመፍጠርም አንድ ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "Bibelen sier klart at Gud er én. «Hør, Israel! Herren vår Gud, Herren er en.» Paulus skriver også at det ikke finnes noen Gud uten én.",
            am: "መጽሐፍ ቅዱስ እግዚአብሔር አንድ መሆኑን በግልጽ ይናገራል፤ «እስራኤል ሆይ፥ ስማ፤ አምላካችን እግዚአብሔር አንድ እግዚአብሔር ነው።» ቅዱስ ጳውሎስም ከአንዱ በቀር ማንም አምላክ እንደሌለ ጽፏል።",
          },
          vers: ["Deut 6:4", "1Cor 8:4", "Eph 4:6"],
        },
        {
          tekst: {
            no: "መለኮት (guddom) kommer av ge'ez «መለከ», å herske. Faderen, Sønnen og Den hellige ånd har én guddom og ett herredømme. Ingen av dem er skapt, og ingen av dem har en begynnelse. Alle tre er evige.",
            am: "«መለኮት» «መለከ» (ገዛ) ከሚለው የግዕዝ ግሥ የወጣ ሲሆን ግዛት፣ ሥልጣን ማለት ነው። አብ ወልድ መንፈስ ቅዱስ በመለኮት አንድ ናቸው። አብ አልተፈጠረም፣ ወልድም አልተፈጠረም፣ መንፈስ ቅዱስም አልተፈጠረም፤ ሦስቱም ዘላለማዊ ናቸው።",
          },
          vers: ["John 1:1-2"],
        },
        {
          tekst: {
            no: "ሕልውና betyr at de tre bor i hverandre: Faderen er i Sønnen og Ånden, Sønnen er i Faderen og Ånden, og Ånden er i Faderen og Sønnen. De kan aldri skilles fra hverandre. Jesus sa: «Jeg er i Faderen og Faderen i meg» og «Jeg og Faderen, vi er ett.»",
            am: "ሕልውና ማለት አብ በወልድና በመንፈስ ቅዱስ፣ ወልድ በአብና በመንፈስ ቅዱስ፣ መንፈስ ቅዱስም በአብና በወልድ ኅልው ሆነው መኖራቸው ነው፤ አይከፋፈሉም፣ አይነጣጠሉም። ጌታችን «እኔ በአብ እንዳለሁ አብም በእኔ እንዳለ እመኑኝ»፣ «እኔና አብ አንድ ነን» ብሏል።",
          },
          vers: ["John 14:11", "John 10:30"],
        },
        {
          tekst: {
            no: "Alt Faderen gjør, er Sønnen og Ånden med på. Alt Sønnen gjør, er Faderen og Ånden med på. Derfor kalles Gud med navn som hører til enheten: እግዚአብሔር, አምላክ, ፈጣሪ (Skaperen), ጌታ (Herren), ጸባኦት og አዶናይ.",
            am: "አብ በሚሠራው ሁሉ ወልድና መንፈስ ቅዱስ አብረውት አሉ፤ ወልድ በሚሠራው ሁሉ አብና መንፈስ ቅዱስ አብረውት አሉ። ስለዚህ እግዚአብሔር በአንድነቱ በሚታወቅባቸው ስሞች ይጠራል፤ እነርሱም እግዚአብሔር፣ አምላክ፣ ፈጣሪ፣ ጌታ፣ ጸባኦት፣ አዶናይ የመሳሰሉት ናቸው።",
          },
        },
      ],
    },
    {
      id: "tre",
      tittel: { no: "Tre personer – treheten (ሦስትነት)", am: "የሥላሴ ሦስትነት" },
      ingress: {
        no: "Kirka lærer at de tre er tre i navn (ስም), i person (አካል) og i det særegne hver av dem er (ግብር).",
        am: "ሥላሴ በስም፣ በአካል፣ በግብር ሦስት ናቸው።",
      },
      punkter: [
        {
          tekst: {
            no: "Tre i navn (ስም): Faderen (አብ), Sønnen (ወልድ) og Den hellige ånd (መንፈስ ቅዱስ). Det er ikke tre navn på tre guder, men navnene på den ene Guds tre personer.",
            am: "የስም ሦስትነት፤ አብ፣ ወልድ፣ መንፈስ ቅዱስ። እነዚህ የሦስት አማልክት ስሞች አይደሉም፤ የአንድ አምላክ የሦስቱ አካላት ስሞች ናቸው እንጂ።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "Tre i person (አካል): Faderen har en fullkommen person, et fullkomment ansikt (ገጽ) og en fullkommen skikkelse (መልክ). Det samme har Sønnen, og det samme har Den hellige ånd. Men Gud er ikke liten og begrenset som en menneskekropp. Han fyller alt, og verden kan ikke romme ham.",
            am: "የአካል ሦስትነት፤ ለአብ ፍጹም አካል፣ ፍጹም መልክ፣ ፍጹም ገጽ አለው፤ ለወልድም ፍጹም አካል፣ ፍጹም መልክ፣ ፍጹም ገጽ አለው፤ ለመንፈስ ቅዱስም ፍጹም አካል፣ ፍጹም መልክ፣ ፍጹም ገጽ አለው። ነገር ግን የሥላሴ አካል እንደ ሰው አካል ውሱን፣ ግዙፍ አይደለም፤ ምሉዕ፣ ረቂቅ ነው። ሥላሴ ዓለሙን ይወስኑታል እንጂ ዓለሙ ሥላሴን አይወስናቸውም።",
          },
        },
        {
          tekst: {
            no: "Tre i ግብር (det hver av dem er): Faderen føder (ወላዲ), Sønnen er født (ተወላዲ), og Ånden utgår (ሠራፂ). Faderen kalles aldri født, og Sønnen kalles aldri den som føder. Det er dette som skiller de tre personene fra hverandre.",
            am: "የግብር ሦስትነት፤ አብ ወላዲ፣ ወልድ ተወላዲ፣ መንፈስ ቅዱስ ሠራፂ ነው። አብ ተወላዲ አይባልም፤ ወልድም ወላዲ አይባልም። ሦስቱ አካላት ለየብቻ የሚታወቁባቸው የግብር ስሞች እነዚህ ናቸው።",
          },
        },
        {
          tekst: {
            no: "De tre er ikke tre adskilte personer slik Abraham, Isak og Jakob var tre mennesker, der den ene er eldre eller større enn den andre. Men de er heller ikke smeltet sammen til én, slik at treheten blir borte.",
            am: "ሥላሴ ሦስት ናቸው ስንል እንደ አብርሃም፣ እንደ ይስሐቅ፣ እንደ ያዕቆብ የተነጣጠሉና በክብርም ሆነ በዘመን የሚበላለጡ ማለታችን አይደለም። አንድ ናቸው ስንልም ሦስትነታቸውን የሚጠቀልል መቀላቀል ማለታችን አይደለም።",
          },
        },
      ],
    },
    {
      id: "fodes-utgar",
      tittel: { no: "Faderen føder, Sønnen er født, Ånden utgår", am: "አብ ወለደ፤ ወልድ ተወለደ፤ መንፈስ ቅዱስ ሠረፀ" },
      punkter: [
        {
          tekst: {
            no: "Faderen (አብ) føder Sønnen og lar Den hellige ånd utgå. Han er ikke født og utgår ikke fra noen. Kirkas lærere kaller ham «Gud over oss».",
            am: "አብ ወልድን ይወልዳል፤ መንፈስ ቅዱስን ያሠርፃል። ይወልዳል እንጂ አይወለድም፤ ያሠርፃል እንጂ አይሠርፅም። «ከእኛ በላይ ያለው አምላክ» ተብሎ ይታወቃል።",
          },
        },
        {
          tekst: {
            no: "Sønnen (ወልድ) er født av Faderen før all tid. Han kalles også Ordet (ቃል) og «Gud med oss». Han er født «som lys av lys», ikke slik mennesker blir født. Han er den enbårne Sønnen som er i Faderens skjød, og han har vist oss Faderen.",
            am: "ወልድ ቅድመ ዓለም ከአብ ተወለደ። «ቃል» እና «ከእኛ ጋር ያለው አምላክ» ይባላል። መወለዱም እንደ ሰው መወለድ አይደለም፤ «ከብርሃን የተገኘ ብርሃን» ነው። በአባቱ እቅፍ ያለ አንድ ልጁ እርሱ አብን ተረከልን።",
          },
          vers: ["John 1:18", "John 1:14", "Heb 1:3"],
        },
        {
          tekst: {
            no: "Den hellige ånd (መንፈስ ቅዱስ) utgår fra Faderen. Jesus sa: «sannhetens Ånd, som utgår fra Faderen.» Ånden kalles også Guds ånde (እስትንፋስ) og «Gud i oss». Han er Herren som gir liv, og vi tilber og ærer ham sammen med Faderen og Sønnen.",
            am: "መንፈስ ቅዱስ ከአብ ሠረፀ። ጌታችን «ከአብ የሚወጣ የእውነት መንፈስ» ብሏል። መንፈስ ቅዱስ እስትንፋስ ይባላል፤ «በውስጣችን ያለው አምላክ» ይባላል። ሕይወትን የሚሰጥ ጌታ ነው፤ ከአብና ከወልድ ጋር እንሰግድለታለን፤ እናመሰግነዋለንም።",
          },
          vers: ["John 15:26", "John 14:26", "Gal 4:6"],
        },
        {
          tekst: {
            no: "Selv om Faderen føder Sønnen og lar Ånden utgå, kom han ikke før dem og er ikke større enn dem. Det har aldri vært en tid da Faderen var uten Sønnen eller Ånden. Faderen er ikke eldre enn Sønnen, slik Abraham var eldre enn Isak.",
            am: "አብ ወልድን ቢወልድ፣ መንፈስ ቅዱስን ቢያሠርፅም አይቀድማቸውም፤ አይበልጣቸውምም። አብ ያለ ወልድና ያለ መንፈስ ቅዱስ የኖረበት ዘመን የለም። አብርሃም ከይስሐቅ እንደሚበልጥ አብ ከወልድ አይበልጥም።",
          },
        },
        {
          tekst: {
            no: "Kirkas lærere forklarer det også slik: Faderen er hjertet eller forstanden (ልብ), Sønnen er Ordet (ቃል), og Ånden er livet (ሕይወት). Den ene Gud tenker med Faderen, taler med Sønnen og lever med Ånden. Salmen sier: «Himlene er skapt ved Herrens ord, og all deres hær ved hans munns ånde.»",
            am: "ሊቃውንት በኩነትም ያስረዳሉ፤ የአብ ከዊንነቱ ልብነት፣ የወልድ ከዊንነቱ ቃልነት፣ የመንፈስ ቅዱስ ከዊንነቱ ሕይወትነት ነው። ሥላሴ በአንድ ልብ በአብ ያውቃሉ፣ በአንድ ቃል በወልድ ይናገራሉ፣ በአንድ ሕይወት በመንፈስ ቅዱስ ሕያዋን ሆነው ይኖራሉ። ዳዊትም «በእግዚአብሔር ቃል ሰማዮች ጸኑ፥ ሠራዊታቸውም ሁሉ በአፉ እስትንፋስ» አለ።",
          },
          vers: ["Ps 33:6", "John 1:1-2"],
        },
      ],
    },
    {
      id: "gamle-testamentet",
      tittel: { no: "Treenigheten i Det gamle testamentet", am: "ምሥጢረ ሥላሴ በብሉይ ኪዳን" },
      ingress: {
        no: "I Det gamle testamentet er treenigheten ennå skjult, men Bibelen viser den mange steder. Ofte står det først at Gud er én, og så taler han om seg selv i flertall.",
        am: "በብሉይ ኪዳን ምሥጢረ ሥላሴ ገና ስውር ነበር፤ ቢሆንም በብዙ ቦታ ተጠቁሟል። ብዙ ጊዜ «እግዚአብሔር አለ» ብሎ አንድነቱን፣ በብዙ ቍጥር በመናገር ደግሞ ሦስትነቱን ያመለክታል።",
      },
      punkter: [
        {
          tekst: {
            no: "Da mennesket ble skapt: «Og Gud sa» viser at han er én. «La oss gjøre mennesker i vårt bilde» viser at han er mer enn én.",
            am: "ሰው ሲፈጠር፤ «እግዚአብሔርም አለ» ሲል አንድነቱን፣ «ሰውን በመልካችን እንደ ምሳሌአችን እንፍጠር» ሲል ደግሞ ከአንድ በላይ መሆኑን ያመለክታል።",
          },
          vers: ["Gen 1:26"],
        },
        {
          tekst: {
            no: "Etter syndefallet sa Gud Herren: «Mennesket er blitt som en av oss.»",
            am: "ከበደል በኋላ እግዚአብሔር አምላክ «እነሆ አዳም መልካምንና ክፉን ለማወቅ ከእኛ እንደ አንዱ ሆነ» አለ።",
          },
          vers: ["Gen 3:22"],
        },
        {
          tekst: {
            no: "Ved Babels tårn sa Herren: «La oss stige ned der.» Kirkas lærere forklarer at Faderen her taler til Sønnen og Ånden.",
            am: "በባቢሎን ግንብ ጊዜ «ኑ፥ እንውረድ» አለ። ሊቃውንት አካላዊ ልብ አብ አካላዊ ቃሉን ወልድንና አካላዊ ሕይወቱን መንፈስ ቅዱስን እንዳነጋገራቸው ይተረጕማሉ።",
          },
          vers: ["Gen 11:7"],
        },
        {
          tekst: {
            no: "Profeten Jesaja så serafene rope «Hellig, hellig, hellig» – tre ganger, for de tre personene – og «Herren, hærskarenes Gud» – ett navn, for den ene Gud. Og Herren spurte: «Hvem skal jeg sende, og hvem vil gå for oss?»",
            am: "ነቢዩ ኢሳይያስ ሱራፌል «ቅዱስ፥ ቅዱስ፥ ቅዱስ» እያሉ ሲያመሰግኑ አየ፤ ሦስት ጊዜ ቅዱስ ማለታቸው ሦስትነቱን፣ «የሠራዊት ጌታ እግዚአብሔር» ብለው በአንድ ስም መጥራታቸው ደግሞ አንድነቱን ያሳያል። ጌታም «ማንን እልካለሁ? ማንስ ይሄድልናል?» አለ።",
          },
          vers: ["Isa 6:3", "Isa 6:8"],
        },
        {
          tekst: {
            no: "Til Moses sa Gud: «Jeg er … Abrahams Gud, Isaks Gud og Jakobs Gud.» Kirkas lærere legger merke til at han sier «Gud» tre ganger, men bare ett «jeg».",
            am: "እግዚአብሔር ለሙሴ «የአብርሃም አምላክ የይስሐቅም አምላክ የያዕቆብም አምላክ ነኝ» አለው፤ «አምላክ፣ አምላክ፣ አምላክ» ብሎ ሦስትነቱን፣ «ነኝ» ብሎ አንድነቱን ገለጸ።",
          },
          vers: ["Exod 3:6"],
        },
      ],
    },
    {
      id: "mamre",
      tittel: { no: "Abraham og de tre gjestene ved Mamre", am: "ሥላሴ በአብርሃም ቤት" },
      punkter: [
        {
          tekst: {
            no: "Abraham tok imot alle reisende i teltet sitt. En dag midt på dagen viste Herren seg for ham ved terebintene i Mamre: Abraham så tre menn stå foran seg. Han løp dem i møte, bøyde seg til jorden og sa: «Herre! … gå ikke din tjener forbi!»",
            am: "አብርሃም መንገደኞችን ሁሉ በድንኳኑ ይቀበል ነበር። በቀትር ጊዜ እግዚአብሔር በመምሬ የአድባር ዛፍ ተገለጠለት፤ አብርሃም ሦስት ሰዎች በፊቱ ቆመው አየ። ሊቀበላቸው ሮጠ፤ ወደ ምድርም ሰገደና «አቤቱ፥ በፊትህስ ሞገስ አግኝቼ እንደ ሆነ ባሪያህን አትለፈኝ» አለ።",
          },
          vers: ["Gen 18:1-3"],
        },
        {
          tekst: {
            no: "Han så tre menn, men talte til dem som én: «Herre.» Kirkas lærere sier at de tre mennene viser treheten, og at Abraham talte til dem som én, viser enheten.",
            am: "ሦስት ሰዎችን አየ፤ በአንድነት ግን «አቤቱ» ብሎ ተናገራቸው። «ሦስት ሰዎች» የሚለው ሦስትነቱን፣ «ባሪያህን አትለፈኝ» የሚለው ደግሞ አንድነቱን ያመለክታል ብለው ሊቃውንት ያስተምራሉ።",
          },
        },
        {
          tekst: {
            no: "Sara bakte kaker av tre mål mel. De tre målene er et bilde på treheten, og at det ble ett deigbrød, er et bilde på enheten.",
            am: "ሣራ ሦስት መስፈሪያ ዱቄት አዘጋጀች። ሦስቱ መስፈሪያ የሦስትነቱ፣ ዳቦው አንድ መሆኑ ደግሞ የአንድነቱ ምሳሌ ነው።",
          },
          vers: ["Gen 18:6"],
        },
        {
          tekst: {
            no: "Gjestene lovte at Sara skulle få en sønn, Isak, selv om hun og Abraham var gamle. «Er noe umulig for Herren?» spurte han.",
            am: "እንግዶቹም ሣራ ብታረጅም ይስሐቅን እንደምትወልድ አበሠሩ፤ «በውኑ ለእግዚአብሔር የሚሳነው ነገር አለን?» አሉ።",
          },
          vers: ["Gen 18:10", "Gen 18:14"],
        },
        {
          tekst: {
            no: "Fortellingen lærer oss også gjestfrihet. Gud kommer til det huset der folk tar imot fremmede, gir til de fattige og har et rent hjerte.",
            am: "ይህ ታሪክ እንግዳ መቀበልንም ያስተምረናል። ልቡናቸው ቅን በሆነ፣ እንግዳ በሚቀበሉና በሚመጸውቱ ሰዎች ቤት እግዚአብሔር ይገኛል።",
          },
          vers: ["Heb 13:2"],
        },
      ],
    },
    {
      id: "nye-testamentet",
      tittel: { no: "Treenigheten åpenbart i Det nye testamentet", am: "ምሥጢረ ሥላሴ በሐዲስ ኪዳን" },
      punkter: [
        {
          tekst: {
            no: "Ved bebudelsen sa engelen Gabriel til Maria: Den Hellige Ånd skal komme over deg, den Høyestes kraft skal overskygge deg, og barnet skal kalles Guds Sønn.",
            am: "በብሥራት ጊዜ ቅዱስ ገብርኤል እመቤታችንን «መንፈስ ቅዱስ በአንቺ ላይ ይመጣል፥ የልዑልም ኃይል ይጸልልሻል … የእግዚአብሔር ልጅ ይባላል» አላት።",
          },
          vers: ["Luke 1:35"],
        },
        {
          tekst: {
            no: "Ved Jesu dåp i Jordan ble alle tre åpenbart: Sønnen ble døpt, Ånden kom ned over ham som en due, og Faderens røst lød fra himmelen: «Dette er min Sønn, den elskede.»",
            am: "ጌታችን በዮርዳኖስ ሲጠመቅ ሦስቱም ተገለጡ፤ ወልድ ተጠመቀ፣ መንፈስ ቅዱስ በርግብ አምሳል ወረደበት፣ አብም ከሰማያት «በእርሱ ደስ የሚለኝ የምወደው ልጄ ይህ ነው» አለ።",
          },
          vers: ["Matt 3:16-17", "Mark 1:10-11"],
        },
        {
          tekst: {
            no: "På forklarelsesfjellet (ደብረ ታቦር) skjedde det samme: Sønnen stod der i herlighet, en lysende sky overskygget dem, og Faderen sa: «Dette er min Sønn, den elskede … hør ham!»",
            am: "በደብረ ታቦርም እንዲሁ፤ ወልድ ብርሃነ መለኮቱን ገለጠ፣ ብሩህ ደመና ጋረዳቸው፣ አብም «በእርሱ ደስ የሚለኝ የምወደው ልጄ ይህ ነው፤ እርሱን ስሙት» አለ።",
          },
          vers: ["Matt 17:5"],
        },
        {
          tekst: {
            no: "Da Jesus sendte apostlene ut, sa han: «døp dem til Faderens og Sønnens og den Hellige Ånds navn.» Han sa navn, ikke navnene – det viser enheten. Og han nevnte Faderen, Sønnen og Ånden – det viser treheten.",
            am: "ጌታችን ሐዋርያትን ሲልክ «በአብ በወልድና በመንፈስ ቅዱስ ስም እያጠመቃችኋቸው» አለ። «ስም» ብሎ አንድነታቸውን፣ «አብ ወልድና መንፈስ ቅዱስ» ብሎ ሦስትነታቸውን ገለጸ።",
          },
          vers: ["Matt 28:19"],
        },
        {
          tekst: {
            no: "Jesus lovte: «Jeg vil be Faderen, og han skal gi dere en annen talsmann … sannhetens Ånd.» Her taler Sønnen om Faderen og om Ånden.",
            am: "ጌታችን «እኔም አብን እለምናለሁ … ሌላ አጽናኝ ይሰጣችኋል፤ እርሱም … የእውነት መንፈስ ነው» ብሎ ተስፋ ሰጠ። በዚህ ወልድ ስለ አብና ስለ መንፈስ ቅዱስ ይናገራል።",
          },
          vers: ["John 14:16-17", "John 15:26"],
        },
        {
          tekst: {
            no: "Paulus velsigner de kristne i treenighetens navn: «Den Herre Jesu Kristi nåde og Guds kjærlighet og den Hellige Ånds samfund være med eder alle!»",
            am: "ቅዱስ ጳውሎስ «የጌታ የኢየሱስ ክርስቶስ ጸጋ የእግዚአብሔርም ፍቅር የመንፈስ ቅዱስም ኅብረት ከሁላችሁ ጋር ይሁን» ብሎ በሥላሴ ስም ባረካቸው።",
          },
          vers: ["2Cor 13:14", "1Cor 12:4-6"],
        },
      ],
    },
    {
      id: "bilder",
      tittel: { no: "Bilder som hjelper oss å forstå", am: "የምሥጢረ ሥላሴ አስረጂ ምሳሌዎች" },
      ingress: {
        no: "Kirkefedrene bruker bilder fra skaperverket for å forklare. Men de kaller dem «mangelfulle bilder» (ምሳሌ ዘይሐጽጽ), for ingenting som er skapt, kan forklare Gud helt.",
        am: "ሊቃውንት አባቶች ምሥጢረ ሥላሴን በፍጥረታት ምሳሌ ያስረዳሉ፤ ነገር ግን «ምሳሌ ዘይሐጽጽ» (ጎደሎ ምሳሌ) ይሉታል፤ ከፍጥረት ወገን ለሥላሴ የሚሆን በቂ ምሳሌ የለምና።",
      },
      punkter: [
        {
          tekst: {
            no: "Sola: Den ene sola har en skive (ring), lys og varme. Skiven er et bilde på Faderen, lyset på Sønnen og varmen på Ånden. Om morgenen kommer skiven, lyset og varmen samtidig – ingen av dem kommer først. Og det er bare én sol, ikke tre.",
            am: "ፀሐይ፤ ፀሐይ አንድ ስትሆን ክበብ፣ ብርሃንና ሙቀት አላት። በክበቡ አብ፣ በብርሃኑ ወልድ፣ በሙቀቱ መንፈስ ቅዱስ ይመሰላሉ። ፀሐይ ጠዋት ስትወጣ አካሏም፣ ብርሃኗም፣ ሙቀቷም እኩል ይገኛሉ፤ አንዱ አይቀድምም። ሦስት ፀሐዮችም አይባሉም፤ አንድ ፀሐይ እንጂ።",
          },
          andre: [{ no: "Abba Hiryakos (Mariamessen, ቅዳሴ ማርያም)", am: "«አብ ፀሐይ፣ ወልድ ፀሐይ፣ መንፈስ ቅዱስ ፀሐይ፤ አሐዱ ውእቱ ፀሐየ ጽድቅ ዘላዕለ ኩሉ» (አባ ሕርያቆስ)" }],
        },
        {
          tekst: {
            no: "Bare lyset fra sola når inn i øynene våre. Slik ble bare Sønnen, det sanne lyset, menneske – ikke Faderen eller Ånden.",
            am: "ከፀሐይ ሦስት ኩነታት ብርሃኗ ብቻ ከዓይናችን ጋር እንደሚዋሐድ፣ ከሥላሴም እውነተኛ ብርሃን የተባለ ወልድ ብቻ በተለየ አካሉ ሰው ሆነ።",
          },
          vers: ["John 1:9", "John 1:14"],
        },
        {
          tekst: {
            no: "Ilden: Ilden har en kropp, lys og varme, men den er én ild. Bibelen sier: «Herren din Gud er en fortærende ild.»",
            am: "እሳት፤ እሳት አንድ ሲሆን አካል፣ ብርሃንና ዋዕይ (ሙቀት) አለው። በአካሉ አብ፣ በብርሃኑ ወልድ፣ በዋዕዩ መንፈስ ቅዱስ ይመሰላሉ። «አምላክህ እግዚአብሔር የሚበላ እሳት ነው» ተብሏል።",
          },
          vers: ["Deut 4:24"],
          andre: [{ no: "Abba Hiryakos (ቅዳሴ ማርያም)", am: "«አብ እሳት ወልድ እሳት ወመንፈስ ቅዱስ አሐዱ ውእቱ እሳተ ሕይወት ዘእምአርያም» (አባ ሕርያቆስ)" }],
        },
        {
          tekst: {
            no: "Menneskets sjel: Sjelen har forstand (ልብ), ord (ቃል) og liv (ሕይወት). Forstanden er et bilde på Faderen, ordet på Sønnen og livet eller ånden på Den hellige ånd. Alle tre var der fra det øyeblikket sjelen ble til. Derfor sa Gud: «La oss gjøre mennesker i vårt bilde.»",
            am: "የሰው ነፍስ፤ ሰው በነፍሱ ልብነት፣ ቃልነት፣ ሕይወትነት አለው። በልብነቷ አብ፣ በቃልነቷ ወልድ፣ በሕይወትነቷ መንፈስ ቅዱስ ይመሰላሉ። ነፍስ ስትገኝ ሦስቱም በአንድ ጊዜ ተገኙ፤ አንዱ ቀድሞ ሌላው በኋላ አልተገኘም። ስለዚህም እግዚአብሔር «ሰውን በመልካችን እንደ ምሳሌአችን እንፍጠር» አለ።",
          },
          vers: ["Gen 1:26"],
        },
        {
          tekst: {
            no: "Husk: Et bilde forklarer aldri Gud fullt ut. Bildene hjelper oss bare å forstå litt, så langt et menneske kan. Gud er større enn alt vi kan tenke.",
            am: "ምሳሌ ከሚመሰልለት ነገር ያንሳል፤ ሰው በሚረዳው መጠን ለመግለጽ ያህል ነው እንጂ ለሥላሴ የሚሆን በቂ ምሳሌ የለም። እግዚአብሔር ከምናስበው ሁሉ በላይ ነው።",
          },
          vers: ["Isa 40:18"],
        },
      ],
    },
    {
      id: "feil-laere",
      tittel: { no: "Feil lære som kirka har avvist", am: "በምሥጢረ ሥላሴ ላይ የተነሡ የስሕተት ትምህርቶች" },
      punkter: [
        {
          tekst: {
            no: "Sabellius lærte at Gud bare er én person som viser seg på tre måter, slik vann kan være is, vann og damp. Men Gud forandrer seg ikke, og de tre personene er virkelige.",
            am: "ሰባልዮስ አካል ሦስትነትን አልተቀበለም፤ አንዱ እግዚአብሔር አንድ ጊዜ አብ፣ ሌላ ጊዜ ወልድ፣ ሌላ ጊዜ መንፈስ ቅዱስ ሆኖ ተገለጠ አለ፤ ውኃ ፈሳሽ፣ በረዶና እንፋሎት እንደሚሆን ብሎ መሰለ። እግዚአብሔር ግን በባሕርዩ አይለወጥም።",
          },
          vers: ["Mal 3:6"],
        },
        {
          tekst: {
            no: "Andre sa at de tre er tre guder. Men kirka lærer: Vi tilber ikke tre guder, men én Gud.",
            am: "ሌሎች ደግሞ አብ ወልድ መንፈስ ቅዱስ ሦስት አማልክት ናቸው አሉ። ቤተ ክርስቲያን ግን «አንድ አምላክ እንጂ ሦስት አማልክት አንልም» ብላ ታስተምራለች።",
          },
          vers: ["Deut 6:4"],
        },
        {
          tekst: {
            no: "Arius lærte at Sønnen er skapt, og at det fantes en tid da han ikke var. Denne læren ble fordømt på kirkemøtet i Nikea i år 325. Vi bekjenner at Sønnen er «født, ikke skapt».",
            am: "አርዮስ ወልድ ፍጡር ነው፤ ወልድ ያልነበረበት ጊዜ ነበር ብሎ ካደ። ይህ ክህደት በ325 ዓ.ም. በኒቅያ ጉባኤ ተወግዟል። እኛም «የተወለደ እንጂ ያልተፈጠረ» ብለን እናምናለን።",
          },
          vers: ["John 1:1-3"],
        },
        {
          tekst: {
            no: "Makedonius lærte at Den hellige ånd er skapt og mindre enn Faderen og Sønnen. Dette ble fordømt på kirkemøtet i Konstantinopel i år 381. Der bekjente fedrene at Ånden er Herren som gir liv, som utgår fra Faderen, og som vi tilber sammen med Faderen og Sønnen.",
            am: "መቅዶንዮስ መንፈስ ቅዱስ ፍጡር ነው፤ ከአብና ከወልድ ያንሳል ብሎ ካደ። ይህ በ381 ዓ.ም. በቍስጥንጥንያ ጉባኤ ተወግዟል፤ አባቶችም «በመንፈስ ቅዱስም እናምናለን፤ እርሱ ጌታ ሕይወትን የሚሰጥ ከአብ የሠረፀ ከአብና ከወልድ ጋር እንሰግድለታለን» ብለው መሰከሩ።",
          },
          vers: ["Acts 5:3-4"],
        },
      ],
    },
    {
      id: "i-livet",
      tittel: { no: "Treenigheten i hverdagen vår", am: "ምሥጢረ ሥላሴ በዕለት ኑሯችን" },
      punkter: [
        {
          tekst: {
            no: "Vi begynner alt med korsets tegn og sier: «በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ» – i Faderens og Sønnens og Den hellige ånds navn, én Gud. Slik bekjenner vi troen på ሥላሴ hver gang vi begynner noe.",
            am: "ሥራችንን ሁሉ «በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ» ብለን እንጀምራለን። ይህን ስንል በሥላሴ ማመናችንን እየመሰከርን ነው።",
          },
          vers: ["Col 3:17"],
        },
        {
          tekst: {
            no: "Hvorfor sier vi «አሐዱ አምላክ», én Gud? Fordi vi nevner tre personer, men vi tror ikke på tre guder. Ordene minner oss om at Faderen, Sønnen og Ånden er én Gud. Vi avslutter også med: «Ære være den ene Gud, Faderen, Sønnen og Den hellige ånd.»",
            am: "«አሐዱ አምላክ» የምንለው ለምንድን ነው? ሦስቱን አካላት ጠርተን ሦስት አማልክት እንዳይመስል ነው፤ አብ ወልድ መንፈስ ቅዱስ አንድ አምላክ ናቸውና። በሥራችን መጨረሻም «ምስጋና ይሁን አንድ አምላክ ለሚሆን ለአብ ለወልድ ለመንፈስ ቅዱስ» እንላለን።",
          },
        },
        {
          tekst: {
            no: "Når vi gjør korsets tegn, legger vi fingrene i kors og går fra pannen ned til brystet. Det minner om at Jesus kom ned fra himmelen og ble født av jomfru Maria. Så går vi fra venstre skulder til høyre. Det minner om at han førte de bundne sjelene fra dødsriket inn i paradiset.",
            am: "ስናማትብ ጣቶቻችንን መስቀለኛ አድርገን ከግንባር ወደ ደረት እናወርዳለን፤ ይህ ጌታችን ከሰማየ ሰማያት መውረዱንና ከቅድስት ድንግል ማርያም መወለዱን ያስረዳናል። ከግራ ትከሻ ወደ ቀኝ ትከሻ ማድረጋችን ደግሞ በሲኦል የነበሩ ነፍሳትን ወደ ገነት ያስገባበት ምሳሌ ነው።",
          },
        },
        {
          tekst: {
            no: "ማተብ, snoren vi får i dåpen, har tre tråder tvinnet til én. Den er et bilde på at Gud er tre og likevel én.",
            am: "በጥምቀት የምናስረው ማተብ ሦስት ክሮች ተገምደው አንድ የሆኑበት ነው፤ ይህም የሥላሴ ሦስትነትና አንድነት ምሳሌ ነው።",
          },
        },
        {
          tekst: {
            no: "I trosbekjennelsen (ጸሎተ ሃይማኖት) bekjenner vi troen på hver av de tre: «ነአምን በአሐዱ አምላክ እግዚአብሔር አብ», «ወነአምን በአሐዱ እግዚእ ኢየሱስ ክርስቶስ» og «ወነአምን በመንፈስ ቅዱስ».",
            am: "በጸሎተ ሃይማኖት «ነአምን በአሐዱ አምላክ እግዚአብሔር አብ»፣ «ወነአምን በአሐዱ እግዚእ ኢየሱስ ክርስቶስ»፣ «ወነአምን በመንፈስ ቅዱስ» እያልን በአብ በወልድ በመንፈስ ቅዱስ ማመናችንን እንመሰክራለን።",
          },
        },
      ],
    },
    {
      id: "fest",
      tittel: { no: "Når feirer vi ሥላሴ?", am: "የሥላሴ በዓላት" },
      punkter: [
        {
          tekst: {
            no: "Kirka feirer ሥላሴ den 7. dagen i hver etiopisk måned. To av disse dagene er store årlige fester: ጥር 7 (15. januar) og ሐምሌ 7 (14. juli).",
            am: "ቤተ ክርስቲያን በየወሩ በሰባተኛው ቀን የሥላሴን በዓል ታከብራለች። ከእነዚህም ጥር 7 እና ሐምሌ 7 በልዩ ሥርዓት የሚከበሩ ታላላቅ ዓመታዊ በዓላት ናቸው።",
          },
        },
        {
          tekst: {
            no: "ሐምሌ 7 minnes dagen da Gud kom inn i Abrahams telt som tre gjester og lovte at Sara skulle få Isak. Den dagen minnes også Guds pakt med Abraham.",
            am: "ሐምሌ 7 እግዚአብሔር በሦስት ሰዎች አምሳል በአብርሃም ቤት የገባበትና ሣራ ይስሐቅን እንደምትወልድ የተናገረበት ዕለት ነው። ለአብርሃም ቃል ኪዳን የገባበትም ዕለት ነው።",
          },
          vers: ["Gen 18:1-3", "Gen 12:2-3"],
        },
        {
          tekst: {
            no: "Mange kirker bærer navnet ቅድስት ሥላሴ. Den mest kjente er katedralen መንበረ ጸባኦት ቅድስት ሥላሴ i Addis Abeba.",
            am: "ብዙ አብያተ ክርስቲያናት በቅድስት ሥላሴ ስም ተሠይመዋል፤ ከእነርሱም በአዲስ አበባ የሚገኘው መንበረ ጸባኦት ቅድስት ሥላሴ ካቴድራል የታወቀ ነው።",
          },
        },
      ],
    },
  ],
  fedre: [
    {
      navn: { no: "De 318 fedrene i Nikea", am: "ሠለስቱ ምዕት (318ቱ ሊቃውንት)" },
      tekst: {
        no: "«Gud er én, og hans rike er ett og kan ikke deles. Ingen av de tre er skapt, og ingen av dem er under den andre. Det har aldri vært en tid da Faderen var uten Sønnen, eller Sønnen uten Ånden, eller Ånden uten Faderen og Sønnen.»",
        am: "«እግዚአብሔር አንድ ነው፤ የማትከፈል የማትፋለስ መንግሥትም አንዲት ናት፤ … በእነርሱ ዘንድ አንዱ ለአንዱ መገዛት የለም። አብ ከወልድ ተለይቶ የኖረበት ዘመን የለም፣ ወልድም ከመንፈስ ቅዱስ ተለይቶ የኖረበት ዘመን የለም፤ መንፈስ ቅዱስም ከአብ ከወልድ ተለይቶ የኖረበት ዘመን የለም።»",
      },
      kilde: "ሃይማኖተ አበው ዘሠለስቱ ምዕት 19:5–6 (sitert i astemhro.com: ምስጢረ ሥላሴ)",
    },
    {
      navn: { no: "Hellige Athanasius", am: "ቅዱስ አትናቴዎስ" },
      tekst: {
        no: "«Faderen er Gud, Sønnen er Gud, og Den hellige ånd er Gud. Likevel kalles de ikke tre guder, men én Gud.»",
        am: "«አብ አምላክ ነው፤ ወልድ አምላክ ነው፤ መንፈስ ቅዱስ አምላክ ነው፤ ግን ሦስት አማልክት አይባሉም፤ አንድ አምላክ እንጂ።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ አትናቴዎስ 25:2–4 (eotcmk.org: ምሥጢረ ሥላሴ; astemhro.com)",
    },
    {
      navn: { no: "Hellige Basilius av Caesarea", am: "ቅዱስ ባስልዮስ ዘቂሣርያ" },
      tekst: {
        no: "«Mens de er én, er de tre, og mens de er tre, er de én. De er tre i personene og én i guddommen.»",
        am: "«እንዘ አሐዱ ሠለስቱ ወእንዘ ሠለስቱ አሐዱ፤ ይሤለሱ በአካላት ወይትዋሐዱ በመለኮት።» ይህም አንድ ሲሆኑ ሦስት፣ ሦስት ሲሆኑ አንድ ናቸው፤ በአካል ሦስት ሲሆኑ በመለኮት አንድ ናቸው ማለት ነው።",
      },
      kilde: "Sitert i astemhro.com: ምስጢረ ሥላሴ",
    },
    {
      navn: { no: "Hellige Gregor av Nazianz", am: "ቅዱስ ጎርጎርዮስ ዘእንዚናዙ" },
      tekst: {
        no: "«Vi tilber ikke tre guder, men én Gud. Faderen, Sønnen og Den hellige ånd har én natur og én makt. Ingen av de tre er større eller mindre enn den andre; de er like i én ære.»",
        am: "«ሦስት አማልክት ብለን አንሰግድም፤ አንድ አምላክ ብለን እንሰግዳለን እንጂ። … አብ ወልድ መንፈስ ቅዱስ አንድ ባሕርይ አንድ ሥልጣን ናቸው፤ … ከሦስቱ አንዱ የሚበልጥ አንዱ የሚያንስ አይደለም፤ በአንድ ክብር የተካከሉ ናቸው እንጂ።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ጎርጎርዮስ ዘእንዚናዙ 60:6–7 (sitert i astemhro.com: ምስጢረ ሥላሴ)",
    },
    {
      navn: { no: "Hellige Johannes Krysostomos", am: "ቅዱስ ዮሐንስ አፈወርቅ" },
      tekst: {
        no: "«Vi tror at den hellige treenighet, som vi tilber som én Gud, er én i natur og guddom: Faderen, Sønnen og Den hellige ånd. De tre personene er fullkomne, og de er én i makt, i natur, i evighet, i herredømme og i det å skape.»",
        am: "«አንድ አምላክ ብለን የምንሰግድላቸው ሥሉስ ቅዱስ በባሕርይ በመለኮት አንድ እንደ ሆኑ እናምናለን፤ እሊህም አብ ወልድ መንፈስ ቅዱስ ናቸው። እሊህም ሦስቱ አካላት በገጽ ፍጹማን እንደ ሆኑ፣ በሥልጣን፣ በባሕርይ፣ ከዘመን አስቀድሞ በመኖር፣ በጌትነት፣ በመፍጠር … አንድ እንደ ሆኑ እናምናለን።»",
      },
      kilde: "ሃይማኖተ አበው ዘቅዱስ ዮሐንስ አፈወርቅ 52:1 (sitert i eotcmk.org: ምሥጢረ ሥላሴ)",
    },
  ],
  ord: [
    { ord: "ሥላሴ", forklaring: { no: "treenigheten, trehet (av ሠለሰ, å gjøre til tre)", am: "ሦስትነት" } },
    { ord: "ምሥጢረ ሥላሴ", forklaring: { no: "treenighetens mysterium", am: "የሥላሴ አንድነትና ሦስትነት ምሥጢር" } },
    { ord: "አንድነት", forklaring: { no: "enhet – at Gud er én", am: "አንድ መሆን" } },
    { ord: "ሦስትነት", forklaring: { no: "trehet – at Gud er tre personer", am: "ሦስት መሆን" } },
    { ord: "አካል / አካላት", forklaring: { no: "person / personer", am: "ማንነትን የሚገልጽ" } },
    { ord: "ባሕርይ", forklaring: { no: "natur, vesen – det Gud er", am: "ምንነትን የሚገልጽ" } },
    { ord: "መለኮት", forklaring: { no: "guddom (av መለከ, å herske)", am: "አገዛዝ፣ ሥልጣን" } },
    { ord: "ሕልውና", forklaring: { no: "at de tre bor i hverandre og aldri skilles", am: "አንዱ በአንዱ ኅልው ሆኖ መኖር" } },
    { ord: "ግብር", forklaring: { no: "det særegne hver person er: å føde, å bli født, å utgå", am: "ሥራ፤ መውለድ፣ መወለድ፣ መሥረፅ" } },
    { ord: "ወላዲ · ተወላዲ · ሠራፂ", forklaring: { no: "den som føder · den som er født · den som utgår", am: "አብ · ወልድ · መንፈስ ቅዱስ" } },
    { ord: "አሐዱ አምላክ", forklaring: { no: "én Gud (ge'ez)", am: "አንድ አምላክ" } },
    { ord: "ማማተብ", forklaring: { no: "å gjøre korsets tegn", am: "በመስቀል ምልክት መባረክ" } },
  ],
  sporsmal: [
    {
      sporsmal: { no: "Hva betyr ordet ሥላሴ?", am: "«ሥላሴ» ማለት ምን ማለት ነው?" },
      svar: {
        no: "Trehet. Det kommer av ge'ez-verbet ሠለሰ, å gjøre til tre.",
        am: "ሦስትነት ማለት ነው፤ «ሠለሰ» (ሦስት አደረገ) ከሚለው የግዕዝ ግሥ የተገኘ ነው።",
      },
    },
    {
      sporsmal: { no: "I hva er Gud én, og i hva er han tre?", am: "ሥላሴ በምን አንድ፣ በምን ሦስት ናቸው?" },
      svar: {
        no: "Én i natur (ባሕርይ), guddom (መለኮት), samvær (ሕልውና) og vilje (ፈቃድ). Tre i navn (ስም), person (አካል) og ግብር.",
        am: "በባሕርይ፣ በመለኮት፣ በሕልውና፣ በፈቃድ አንድ ናቸው፤ በስም፣ በአካል፣ በግብር ሦስት ናቸው።",
      },
    },
    {
      sporsmal: { no: "Hva er ግብር til Faderen, Sønnen og Den hellige ånd?", am: "የአብ፣ የወልድና የመንፈስ ቅዱስ ግብር ምንድን ነው?" },
      svar: {
        no: "Faderen føder Sønnen og lar Ånden utgå. Sønnen er født av Faderen. Ånden utgår fra Faderen (Joh 15,26).",
        am: "አብ ወልድን ይወልዳል፣ መንፈስ ቅዱስን ያሠርፃል፤ ወልድ ከአብ ይወለዳል፤ መንፈስ ቅዱስ ከአብ ይሠርፃል (ዮሐ 15፥26)።",
      },
    },
    {
      sporsmal: { no: "Hvor i Bibelen ble alle tre personene åpenbart samtidig?", am: "ሦስቱ አካላት በአንድ ጊዜ የተገለጡት የት ነው?" },
      svar: {
        no: "Ved Jesu dåp i Jordan: Sønnen ble døpt, Ånden kom ned som en due, og Faderens røst lød fra himmelen (Matt 3,16–17).",
        am: "በጌታችን ጥምቀት በዮርዳኖስ፤ ወልድ ተጠመቀ፣ መንፈስ ቅዱስ በርግብ አምሳል ወረደ፣ የአብ ድምፅም ከሰማያት ተሰማ (ማቴ 3፥16–17)።",
      },
    },
    {
      sporsmal: { no: "Hvordan er sola et bilde på treenigheten, og hvorfor er bildet ikke nok?", am: "ፀሐይ እንዴት የሥላሴ ምሳሌ ትሆናለች? ምሳሌው ለምን አይበቃም?" },
      svar: {
        no: "Sola har skive, lys og varme, men er én sol. Skiven er som Faderen, lyset som Sønnen og varmen som Ånden. Men ingenting skapt kan forklare Gud helt, så alle bildene er mangelfulle.",
        am: "ፀሐይ ክበብ፣ ብርሃንና ሙቀት አላት፤ አንድ ፀሐይ ግን ናት። በክበቡ አብ፣ በብርሃኑ ወልድ፣ በሙቀቱ መንፈስ ቅዱስ ይመሰላሉ። ነገር ግን ከፍጥረት ወገን ለሥላሴ በቂ ምሳሌ የለም፤ ምሳሌዎች ሁሉ ጎደሎ ናቸው።",
      },
    },
    {
      sporsmal: { no: "Hva feirer vi ሐምሌ 7?", am: "ሐምሌ 7 የምናከብረው ምንድን ነው?" },
      svar: {
        no: "At Gud kom til Abraham som tre gjester ved Mamre og lovte at Sara skulle få Isak (1 Mos 18).",
        am: "እግዚአብሔር በሦስት ሰዎች አምሳል በአብርሃም ቤት ተገልጦ ሣራ ይስሐቅን እንደምትወልድ ያበሠረበትን ዕለት (ዘፍ 18)።",
      },
    },
  ],
  kilder: [
    { navn: "አስተምህሮ ዘተዋሕዶ: ምስጢረ ሥላሴ፡ የእግዚአብሔርን ፍጹም አንድነትና ልዩ ሦስትነት ማመን ከሁሉ ይቀድማል", url: "https://astemhro.com/2018/10/18/trinity/" },
    { navn: "ማኅበረ ቅዱሳን (ዲያቆን ተስፋዬ ቻይ): ምሥጢረ ሥላሴ", url: "https://eotcmk.org/a/%E1%88%9D%E1%88%A5%E1%8C%A2%E1%88%A8-%E1%88%A5%E1%88%8B%E1%88%B4/" },
    { navn: "ማኅበረ ቅዱሳን (ዲያቆን ኤፍሬም የኔሰው): ሥላሴ በአብርሃም ቤት", url: "https://eotcmk.org/a/%E1%88%A5%E1%88%8B%E1%88%B4-%E1%89%A0%E1%8A%A0%E1%89%A5%E1%88%AD%E1%88%83%E1%88%9D-%E1%89%A4%E1%89%B5-2/" },
    { navn: "Mahibere Kidusan (EOTC Sunday School Department): Holy Trinity", url: "https://eotcmk.org/e/holy-trinity-2/" },
    { navn: "ማኅበረ ቅዱሳን (ለሕፃናት): ማማተብ", url: "https://eotcmk.org/a/%E1%88%9B%E1%88%9B%E1%89%B0%E1%89%A5/" },
    { navn: "The Ethiopian Orthodox Tewahedo Church: The Faith of the Church – The Mystery of the Holy Trinity", url: "https://www.ethiopianorthodox.org/english/dogma/faith.html" },
  ],
  utkast: true,
};
