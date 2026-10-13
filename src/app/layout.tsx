import type { Metadata } from "next";
import { connection } from "next/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollEffects from "@/components/effects/ScrollEffects";
import BackgroundScene from "@/components/effects/BackgroundScene";
import { EVENT } from "@/content/event";
import { SITE_URL } from "@/content/site";
import { formatKilometres } from "@/lib/format";
import { FONT_CLASSES } from "@/styles/fonts";
import "@/styles/globals.css";

const DESCRIPTION = `Romain et Catalin prennent le départ du 4L Trophy 2027 : ${formatKilometres(
  EVENT.distanceKm,
)}, 3 pays, ${EVENT.days} jours en Renault 4L, pour une cause solidaire. Devenez sponsor de l'équipage.`;

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
    <html lang="fr" className={`${FONT_CLASSES} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-ink">
        <BackgroundScene />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-badge focus:bg-crimson focus:px-4 focus:font-heading focus:text-lg focus:font-bold focus:uppercase focus:text-paper"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
