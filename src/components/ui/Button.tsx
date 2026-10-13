import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

/* Le bouton principal reprend la 4L de l'affiche : silhouette bleu nuit, jaune des
   phares. Il tranche sur tout le dégradé du fond comme sur les blocs sable. */
const VARIANT_CLASSES = {
  primary:
    "bg-night text-poster-yellow hover:bg-poster-yellow hover:text-night",
  secondary: "border-2 border-ink text-ink hover:bg-ink hover:text-ink-inverse",
} as const;

const BASE_CLASS =
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 py-2.5 text-center font-heading text-sm font-extrabold uppercase tracking-[0.1em] transition active:scale-95";

export default function Button({
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  return (
    <Link href={href} className={`${BASE_CLASS} ${VARIANT_CLASSES[variant]}`}>
      {children}
    </Link>
  );
}

export function ExternalButton({
  href,
  variant = "secondary",
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE_CLASS} ${VARIANT_CLASSES[variant]}`}
    >
      {children}
    </a>
  );
}
