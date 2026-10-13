import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_Ethiopic, Noto_Serif, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";
import { Topp } from "@/components/topp";
import { Bunn } from "@/components/bunn";

const sans = Noto_Sans({ variable: "--font-noto-sans", subsets: ["latin", "latin-ext"] });
const serif = Noto_Serif({ variable: "--font-noto-serif", subsets: ["latin", "latin-ext"] });
const sansGe = Noto_Sans_Ethiopic({ variable: "--font-noto-sans-ethiopic", subsets: ["ethiopic"] });
const serifGe = Noto_Serif_Ethiopic({ variable: "--font-noto-serif-ethiopic", subsets: ["ethiopic"] });

export const metadata: Metadata = {
  title: { default: "Troslære · ትምህርተ ሃይማኖት", template: "%s · Troslære" },
  description:
    "Lær den etiopisk-ortodokse Tewahedo-troen på amharisk og norsk: bibelen, bønnene, sakramentene, høytidene og kirkas historie.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1a17" },
  ],
};

// Settes før siden tegnes, så det ikke blinker: lys/mørk, hvilket språk som vises, og norsk utgave.
const forhandsvalg = `try{var d=document.documentElement,l=localStorage;var t=l.getItem('tema');if(t==='mork'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark');var s=l.getItem('sprak');if(s==='am'||s==='no')d.dataset.sprak=s;if(l.getItem('norsk')==='elb')d.dataset.norsk='elb';var b=l.getItem('skjul');if(b)d.dataset.skjul=b}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nb"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${sansGe.variable} ${serifGe.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: forhandsvalg }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#innhold"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-flate focus:px-4 focus:py-2"
        >
          Hopp til innholdet
        </a>
        <Topp />
        <main id="innhold" className="flex-1">
          {children}
        </main>
        <Bunn />
      </body>
    </html>
  );
}
