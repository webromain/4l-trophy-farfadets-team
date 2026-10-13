import Link from "next/link";
import { EVENT } from "@/content/event";
import { formatKilometres } from "@/lib/format";
import { NAVIGATION } from "./navigation";

const LEGAL = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
] as const;

const LINK_CLASS =
  "inline-flex min-h-11 items-center text-paper transition-colors duration-200 hover:text-poster-yellow";

export default function Footer() {
  return (
    <footer className="surface-dark mt-24 bg-night/90 backdrop-blur-md">
      <div className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-12 2xl:px-20">
        <div className="reveal-entry">
          <p className="inline-block -rotate-2 font-script text-4xl text-ink">
            Les Farfadets
          </p>
          <p className="mt-3 font-heading text-lg font-black uppercase text-accent">
            {`${formatKilometres(EVENT.distanceKm)} · 3 pays · ${EVENT.days} jours`}
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <nav aria-label="Plan du site" className="reveal-entry">
            <h2 className="font-heading text-label uppercase text-accent">
              Le site
            </h2>
            <ul className="mt-1">
              {NAVIGATION.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informations légales" className="reveal-entry">
            <h2 className="font-heading text-label uppercase text-accent">
              Informations légales
            </h2>
            <ul className="mt-1">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="reveal-entry mt-10 border-t border-paper/20 pt-6 text-sm text-paper">
          Les Farfadets · 4L Trophy 2027 · Romain Poisson et Catalin Stefanescu
        </p>
      </div>
    </footer>
  );
}
