import type { Email } from "@/content/contact";

/* Obfuscation légère : l'adresse n'existe nulle part d'un seul tenant, ni dans les
   sources ni dans le texte affiché. Le `href` reste complet, donc le lien reste
   cliquable et annoncé normalement — un moissonneur qui lit le HTML la retrouvera.
   La seule parade réellement efficace demanderait du JavaScript, au prix du lien
   pour les visiteurs qui n'en ont pas. */
export default function EmailLink({ email }: { email: Email }) {
  return (
    <a
      href={`mailto:${email.user}@${email.domain}`}
      className="inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4 hover:text-ink"
    >
      <span>{email.user}</span>
      <span>@</span>
      <span>{email.domain}</span>
    </a>
  );
}
