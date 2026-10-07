type ToCompleteProps = {
  libelle: string;
  children?: React.ReactNode;
};

export default function ToComplete({ libelle, children }: ToCompleteProps) {
  return (
    <div className="rounded-bloc border-2 border-dashed border-rouge-4l p-5">
      <p className="font-condensed text-lg font-bold uppercase text-rouge-4l">
        {`[${libelle} : à compléter]`}
      </p>
      {children ? (
        <div className="mt-2 max-w-texte text-gris-texte">{children}</div>
      ) : null}
    </div>
  );
}

export function ToCompleteInline({ libelle }: { libelle: string }) {
  return (
    <span className="inline-block rounded-badge border-2 border-dashed border-rouge-4l px-2 py-0.5 font-condensed font-bold uppercase text-rouge-4l">
      {`[${libelle} : à compléter]`}
    </span>
  );
}
