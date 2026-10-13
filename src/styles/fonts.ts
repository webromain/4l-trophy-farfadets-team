import {
  Bricolage_Grotesque,
  Kaushan_Script,
  Permanent_Marker,
  Squada_One,
} from "next/font/google";

/* Polices proches de celles de l'affiche du 4L Trophy : Squada One pour les
   grands titres, Permanent Marker pour les accroches écrites au feutre,
   Bricolage Grotesque pour les capitales grasses et le texte courant. Kaushan Script, au pinceau, ne
   sert qu'à la citation (Quote.tsx). */
const squada = Squada_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-squada",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-marker",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-kaushan",
  preload: false,
});

/* À poser sur <html> : ces classes exposent les variables `--font-*` lues par
   theme.css. */
export const FONT_CLASSES = `${squada.variable} ${marker.variable} ${bricolage.variable} ${kaushan.variable}`;
