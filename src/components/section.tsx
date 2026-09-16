interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="mb-12">
      {title && (
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-muted mb-4">{description}</p>
      )}
      {children}
    </section>
  );
}
