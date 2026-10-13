import Link from "next/link";

type SectionLinkProps = {
  href: string;
  children: string;
};

/* Lien de fin de section : il renvoie vers la page qui détaille le sujet. */
export default function SectionLink({ href, children }: SectionLinkProps) {
  return (
    <Link
      href={href}
      className="mt-8 inline-flex min-h-11 items-center font-heading text-sm font-extrabold uppercase tracking-[0.12em] text-accent underline decoration-2 underline-offset-8 hover:decoration-4"
    >
      {children}
    </Link>
  );
}
