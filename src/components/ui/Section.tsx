type SectionProps = {
  /* Identifiant du titre de la section : nomme le repère pour les lecteurs d'écran. */
  headingId?: string;
  children: React.ReactNode;
};

export default function Section({ headingId, children }: SectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-12 2xl:px-20 sm:py-16"
    >
      {children}
    </section>
  );
}
