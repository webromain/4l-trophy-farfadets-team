"use client";

/* Composant client : le menu mobile a besoin d'un état ouvert/fermé et du chemin
   courant. L'en-tête n'a ni fond ni filet — il est posé sur le ciel du site, comme
   le haut de l'affiche. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAVIGATION } from "./navigation";
import styles from "./Header.module.css";

const BUTTON_CLASS =
  "inline-flex min-h-11 items-center rounded-full bg-night px-5 font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-poster-yellow";

export default function Header() {
  const pathname = usePathname();
  const menu = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    menu.current?.close();
  }, [pathname]);

  return (
    <header>
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 pb-2 pt-5 sm:px-6 lg:px-12 2xl:px-20">
        <Link
          href="/"
          className="inline-block -rotate-3 font-script text-4xl text-ink transition-transform duration-200 hover:rotate-0 sm:text-5xl"
        >
          Les Farfadets
        </Link>

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAVIGATION.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`${styles.navLink} inline-flex min-h-11 items-center rounded-full px-4 font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-ink aria-[current=page]:bg-night aria-[current=page]:text-poster-yellow`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => menu.current?.showModal()}
          className={`${BUTTON_CLASS} xl:hidden`}
        >
          Menu
        </button>
      </div>

      {/* <dialog> en mode modal : piégeage du focus et fermeture par Échap natifs. */}
      <dialog
        ref={menu}
        aria-label="Navigation principale"
        className={`${styles.menu} m-0 h-full max-h-none w-full max-w-none bg-poster-red p-0 text-ink backdrop:bg-night/60`}
      >
        <div className="flex items-center justify-between px-4 pb-2 pt-5 sm:px-6">
          <span className="inline-block -rotate-3 font-script text-4xl text-ink">
            Les Farfadets
          </span>
          <button
            type="button"
            onClick={() => menu.current?.close()}
            className={BUTTON_CLASS}
          >
            Fermer
          </button>
        </div>
        <nav className="px-4 py-6 sm:px-6">
          <ul>
            {NAVIGATION.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => menu.current?.close()}
                  className="flex min-h-16 items-center font-display text-5xl uppercase leading-none text-ink aria-[current=page]:text-night"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </header>
  );
}
