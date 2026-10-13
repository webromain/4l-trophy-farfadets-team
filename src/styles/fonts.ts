import { Jaro, Kaushan_Script, Montserrat } from "next/font/google";

/* Trois polices proches de celles de l'affiche du 4L Trophy : Jaro pour les grands
   titres, Kaushan Script pour les accroches au pinceau, Montserrat pour les
   capitales grasses et le texte courant. */
const jaro = Jaro({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-jaro",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-kaushan",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

/* À poser sur <html> : ces classes exposent les variables `--font-*` lues par
   theme.css. */
export const FONT_CLASSES = `${jaro.variable} ${kaushan.variable} ${montserrat.variable}`;
