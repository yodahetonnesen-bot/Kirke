import type { Tema } from "./typer";
import { daapen } from "./daapen";
import { femMysteriene } from "./de-fem-mysteriene";
import { treenigheten } from "./treenigheten";
import { menneskevordelsen } from "./menneskevordelsen";
import { oppstandelsen } from "./oppstandelsen";
import { kirkebygget } from "./kirkebygget";
import { tingIKirka } from "./ting-i-kirka";
import { iKirka } from "./i-kirka";
import { fastene } from "./fastene";
import { kidase } from "./kidase";
import { mahlet } from "./mahlet";
import { bonnetider } from "./bonnetider";
import { herrensHoytider } from "./herrens-hoytider";
import { paskeuka } from "./paskeuka";
import { mariaOgHelgenfester } from "./maria-og-helgenfester";
import { kirkehistorie } from "./kirkehistorie";
import { yared } from "./yared";
import { kirkeskolen } from "./kirkeskolen";
import { mariaOgEnglene } from "./maria-og-englene";
import { apostlerOgMartyrer } from "./apostler-og-martyrer";
import { etiopiskeHelgener } from "./etiopiske-helgener";
import { kirkasBoker } from "./kirkas-boker";
import { kristentLiv } from "./kristent-liv";
import { kirkensTjenere } from "./kirkens-tjenere";
import { geez } from "./geez";
import { sakramentene } from "./sakramentene";
import { myron } from "./myron";
import { nattverden } from "./nattverden";
import { skriftemaal } from "./skriftemaal";
import { sykesalving } from "./sykesalving";
import { ekteskap } from "./ekteskap";
import { prestevigsel } from "./prestevigsel";

// Rekkefølgen her er rekkefølgen temaene vises i innenfor hver del.
export const TEMAER: Tema[] = [femMysteriene, treenigheten, menneskevordelsen, oppstandelsen, sakramentene, daapen, myron, nattverden, skriftemaal, sykesalving, ekteskap, prestevigsel, kirkebygget, tingIKirka, iKirka, kidase, mahlet, yared, kirkeskolen, bonnetider, fastene, herrensHoytider, paskeuka, mariaOgHelgenfester, kirkehistorie, mariaOgEnglene, apostlerOgMartyrer, etiopiskeHelgener, kirkasBoker, kristentLiv, kirkensTjenere, geez];

export const finnTema = (slug: string) => TEMAER.find((t) => t.slug === slug);
