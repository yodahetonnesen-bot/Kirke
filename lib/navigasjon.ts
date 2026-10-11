// Hoveddelene av siden. Alt står på norsk og amharisk.
export type Seksjon = {
  href: string;
  no: string;
  am: string;
  beskrivelse: { no: string; am: string };
  klar: boolean;
};

export const SEKSJONER: Seksjon[] = [
  {
    href: "/bibelen/",
    no: "Bibelen",
    am: "መጽሐፍ ቅዱስ",
    beskrivelse: {
      no: "Hele bibelen på amharisk og norsk, side om side.",
      am: "መጽሐፍ ቅዱስ በአማርኛና በኖርዌይኛ ጎን ለጎን።",
    },
    klar: true,
  },
  {
    href: "/bonner/",
    no: "Bønner",
    am: "ጸሎት",
    beskrivelse: {
      no: "ውዳሴ ማርያም og de daglige bønnene.",
      am: "ውዳሴ ማርያምና የዕለት ጸሎቶች።",
    },
    klar: false,
  },
  {
    href: "/laer/",
    no: "Lær troen",
    am: "ትምህርተ ሃይማኖት",
    beskrivelse: {
      no: "Sakramentene, gudstjenesten, høytidene, historien og helgenene.",
      am: "ምሥጢራት፣ ቅዳሴ፣ በዓላት፣ ታሪክና ቅዱሳን።",
    },
    klar: false,
  },
  {
    href: "/kalender/",
    no: "Kalender",
    am: "ቀን መቁጠሪያ",
    beskrivelse: {
      no: "Den etiopiske kalenderen, fastene og høytidene.",
      am: "የኢትዮጵያ ዘመን አቆጣጠር፣ አጽዋማትና በዓላት።",
    },
    klar: true,
  },
  {
    href: "/mezmur/",
    no: "Mezmur",
    am: "መዝሙር",
    beskrivelse: {
      no: "Søk i mezmurene, med teksten på begge språk.",
      am: "መዝሙራትን ይፈልጉ፤ ግጥሙ በሁለቱም ቋንቋ።",
    },
    klar: false,
  },
];
