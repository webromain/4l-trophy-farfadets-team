import Link from "next/link";

type ButtonProps = {
  href: string;
  variante?: "principal" | "secondaire" | "sombre";
  children: React.ReactNode;
};

const STYLES = {
  principal: "bg-rouge-4l text-papier hover:bg-bleu-nuit",
  secondaire:
    "border-2 border-bleu-nuit text-bleu-nuit hover:bg-bleu-nuit hover:text-papier",
  sombre: "border-2 border-ocre text-ocre hover:bg-ocre hover:text-bleu-nuit",
} as const;

const BASE =
  "inline-flex min-h-11 items-center justify-center rounded-badge px-6 py-2.5 font-condensed text-lg font-bold uppercase tracking-wide transition-colors";

export default function Button({
  href,
  variante = "principal",
  children,
}: ButtonProps) {
  return (
    <Link href={href} className={`${BASE} ${STYLES[variante]}`}>
      {children}
    </Link>
  );
}

export function ButtonExterne({
  href,
  variante = "secondaire",
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} ${STYLES[variante]}`}
    >
      {children}
    </a>
  );
}
