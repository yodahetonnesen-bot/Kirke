// Hoveddelene av siden. Alt står på norsk og amharisk.
import { BookOpen, CalendarDays, Church, Flame, Music, type LucideIcon } from "lucide-react";
import type { BildeNavn } from "./bilder";

export type Seksjon = {
  href: string;
  no: string;
  am: string;
  beskrivelse: { no: string; am: string };
  klar: boolean;
  ikon: LucideIcon;
  bilde: BildeNavn;
};

export const SEKSJONER: Seksjon[] = [
  {
    href: "/bibelen/",
    ikon: BookOpen,
    bilde: "evangelist",
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
    ikon: Flame,
    bilde: "arganonaMaryam",
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
    ikon: Church,
    bilde: "ewostatewos",
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
    ikon: CalendarDays,
    bilde: "evangeliebladLam",
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
    ikon: Music,
    bilde: "lyre",
    no: "Mezmur",
    am: "መዝሙር",
    beskrivelse: {
      no: "Søk i mezmurene, med teksten på begge språk.",
      am: "መዝሙራትን ይፈልጉ፤ ግጥሞቹ በሁለቱም ቋንቋዎች ይገኛሉ።",
    },
    klar: false,
  },
];
