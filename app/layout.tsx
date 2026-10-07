import type { Metadata } from "next";
import { connection } from "next/server";
import { Barlow, Barlow_Condensed, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { EVENEMENT, SITE_URL, kilometres } from "@/content/projet";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  display: "swap",
  variable: "--font-playfair",
});

const DESCRIPTION = `Romain et Bastien prennent le départ du 4L Trophy 2027 : ${kilometres(
  EVENEMENT.distanceKm,
)}, 3 pays, ${EVENEMENT.jours} jours en Renault 4L, pour une cause solidaire. Devenez sponsor de l'équipage.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Les Farfadets — 4L Trophy 2027",
    template: "%s — Les Farfadets",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Les Farfadets",
    title: "Les Farfadets — 4L Trophy 2027",
    description: DESCRIPTION,
  },
};

/* La CSP à nonce (proxy.ts) ne peut pas s'appliquer à un shell prérendu :
   le rendu doit attendre la requête. */
export default async function RootLayout({ children }: LayoutProps<"/">) {
  await connection();

  return (
    <html
      lang="fr"
      className={`${barlow.variable} ${barlowCondensed.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-papier font-sans text-bleu-nuit">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-badge focus:bg-rouge-4l focus:px-4 focus:font-condensed focus:text-lg focus:font-bold focus:uppercase focus:text-papier"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
