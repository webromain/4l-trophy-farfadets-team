type ToCompleteProps = {
  label: string;
  children?: React.ReactNode;
};

export default function ToComplete({ label, children }: ToCompleteProps) {
  return (
    <div className="rounded-panel border-2 border-dashed border-accent p-5">
      <p className="font-heading text-lg font-bold uppercase text-accent">
        {`[${label} : à compléter]`}
      </p>
      {children ? (
        <div className="mt-2 max-w-text text-ink-soft">{children}</div>
      ) : null}
    </div>
  );
}

export function ToCompleteInline({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-badge border-2 border-dashed border-accent px-2 py-0.5 font-heading font-bold uppercase text-accent">
      {`[${label} : à compléter]`}
    </span>
  );
}
