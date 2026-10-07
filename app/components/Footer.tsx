import Link from "next/link";
import { EVENEMENT, kilometres } from "@/content/projet";
import { NAVIGATION } from "./navigation";

const LEGAL = [
  { href: "/mentions-legales", libelle: "Mentions légales" },
  { href: "/confidentialite", libelle: "Confidentialité" },
] as const;

const LIEN = "inline-flex min-h-11 items-center text-papier hover:text-ocre";

export default function Footer() {
  return (
    <footer className="mt-20 bg-bleu-nuit">
      <div className="mx-auto max-w-page px-4 py-12 sm:px-6">
        <p className="font-condensed text-3xl font-extrabold uppercase text-papier">
          Les Farfadets
        </p>
        <p className="mt-2 font-condensed text-xl font-bold text-ocre">
          {`${kilometres(EVENEMENT.distanceKm)} · 3 pays · ${EVENEMENT.jours} jours`}
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <nav aria-label="Plan du site">
            <h2 className="font-condensed text-surtitre uppercase text-ocre">
              Le site
            </h2>
            <ul className="mt-1">
              {NAVIGATION.map((lien) => (
                <li key={lien.href}>
                  <Link href={lien.href} className={LIEN}>
                    {lien.libelle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informations légales">
            <h2 className="font-condensed text-surtitre uppercase text-ocre">
              Informations légales
            </h2>
            <ul className="mt-1">
              {LEGAL.map((lien) => (
                <li key={lien.href}>
                  <Link href={lien.href} className={LIEN}>
                    {lien.libelle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-papier/20 pt-6 text-sm text-papier">
          Les Farfadets · 4L Trophy 2027 · Romain Poisson et Bastien Grangeon
        </p>
      </div>
    </footer>
  );
}
