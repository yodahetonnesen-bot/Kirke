// Hoveddelene av siden. Alt står på norsk og amharisk.
import { BookOpen, CalendarDays, Church, Flame, Music, type LucideIcon } from "lucide-react";
import type { BildeNavn } from "./bilder";

export type Seksjon = {
  href: string;
  no: string;
  am: string;
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
    klar: true,
  },
  {
    href: "/bonner/",
    ikon: Flame,
    bilde: "arganonaMaryam",
    no: "Bønner",
    am: "ጸሎት",
    klar: true,
  },
  {
    href: "/laer/",
    ikon: Church,
    bilde: "ewostatewos",
    no: "Troslære",
    am: "ትምህርተ ሃይማኖት",
    klar: true,
  },
  {
    href: "/kalender/",
    ikon: CalendarDays,
    bilde: "evangeliebladLam",
    no: "Kalender",
    am: "ቀን መቁጠሪያ",
    klar: true,
  },
  {
    href: "/mezmur/",
    ikon: Music,
    bilde: "lyre",
    no: "Mezmur",
    am: "መዝሙር",
    klar: false,
  },
];
