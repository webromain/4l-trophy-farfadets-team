"use client";

/* Seul composant client du site : le menu mobile a besoin d'un état ouvert/fermé et
   du chemin courant. Le reste des pages est rendu côté serveur. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NAVIGATION } from "./navigation";

const LIEN =
  "inline-flex min-h-11 items-center px-3 font-condensed text-lg font-bold uppercase tracking-wide text-bleu-nuit transition-colors hover:text-rouge-4l";

export default function Header() {
  const chemin = usePathname();
  const menu = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    menu.current?.close();
  }, [chemin]);

  return (
    <header className="border-b border-sable-fonce bg-papier">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-condensed text-2xl font-extrabold uppercase tracking-tight text-bleu-nuit sm:text-3xl"
        >
          Les Farfadets
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAVIGATION.map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  aria-current={chemin === lien.href ? "page" : undefined}
                  className={`${LIEN} ${
                    chemin === lien.href
                      ? "border-b-[3px] border-terracotta"
                      : ""
                  }`}
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => menu.current?.showModal()}
          className="inline-flex min-h-11 items-center gap-2 rounded-badge border-2 border-bleu-nuit px-4 font-condensed text-lg font-bold uppercase text-bleu-nuit lg:hidden"
        >
          Menu
        </button>
      </div>

      {/* <dialog> en mode modal : piégeage du focus et fermeture par Échap natifs. */}
      <dialog
        ref={menu}
        aria-label="Navigation principale"
        className="m-0 h-full max-h-none w-full max-w-none bg-papier p-0 backdrop:bg-bleu-nuit/60"
      >
        <div className="flex items-center justify-between border-b border-sable-fonce px-4 py-4">
          <span className="font-condensed text-2xl font-extrabold uppercase text-bleu-nuit">
            Les Farfadets
          </span>
          <button
            type="button"
            onClick={() => menu.current?.close()}
            className="inline-flex min-h-11 items-center rounded-badge border-2 border-bleu-nuit px-4 font-condensed text-lg font-bold uppercase text-bleu-nuit"
          >
            Fermer
          </button>
        </div>
        <nav className="px-4 py-2">
          <ul>
            {NAVIGATION.map((lien) => (
              <li key={lien.href} className="border-b border-sable">
                <Link
                  href={lien.href}
                  aria-current={chemin === lien.href ? "page" : undefined}
                  onClick={() => menu.current?.close()}
                  className="flex min-h-14 items-center font-condensed text-xl font-bold uppercase text-bleu-nuit aria-[current=page]:text-rouge-4l"
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </header>
  );
}
