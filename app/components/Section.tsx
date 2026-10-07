type SectionProps = {
  /* Identifiant du titre de la section : nomme le repère pour les lecteurs d'écran. */
  titreId?: string;
  children: React.ReactNode;
};

export default function Section({ titreId, children }: SectionProps) {
  return (
    <section
      aria-labelledby={titreId}
      className="mx-auto max-w-page px-4 py-12 sm:px-6 sm:py-16"
    >
      {children}
    </section>
  );
}
