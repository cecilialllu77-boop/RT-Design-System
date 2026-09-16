import { PageHeader } from "./page-header";

interface ComponentPageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function ComponentPage({ title, description, children }: ComponentPageProps) {
  return (
    <>
      <PageHeader title={title} description={description} />

      {children ?? (
        <div className="border border-border rounded-lg p-8 text-center">
          <p className="text-sm text-muted">
            Component documentation coming soon. Add your examples and API reference here.
          </p>
        </div>
      )}
    </>
  );
}
