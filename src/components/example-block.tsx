interface ExampleBlockProps {
  children: React.ReactNode;
  code?: string;
}

export function ExampleBlock({ children, code }: ExampleBlockProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden mb-6">
      <div className="p-6 flex items-center justify-center min-h-[120px] bg-background">
        {children}
      </div>
      {code && (
        <div className="border-t border-border bg-code-bg p-4">
          <pre className="text-sm font-mono text-foreground overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
