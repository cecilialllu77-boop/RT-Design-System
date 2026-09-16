import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function IconsPage() {
  return (
    <>
      <PageHeader
        title="Icons"
        description="Icon guidelines and usage patterns for the design system."
      />

      <Section
        title="Icon Set"
        description="The design system uses a consistent icon set. Add your icons here."
      >
        <div className="border border-border rounded-lg p-8 text-center">
          <p className="text-sm text-muted">
            {/* TODO: Add your icon library here */}
            Configure your icon library and add icon previews.
          </p>
        </div>
      </Section>

      <Section title="Usage">
        <div className="border border-border rounded-lg bg-code-bg p-4">
          <pre className="text-sm font-mono overflow-x-auto">
            <code>{`import { Icon } from '@rt/design-system';

<Icon name="arrow-right" size={16} />`}</code>
          </pre>
        </div>
      </Section>

      <Section
        title="Sizes"
        description="Icons come in standard sizes to maintain visual consistency."
      >
        <div className="grid grid-cols-4 gap-4">
          {[12, 16, 20, 24].map((size) => (
            <div key={size} className="border border-border rounded-lg p-4 flex flex-col items-center gap-2">
              <div
                className="bg-muted rounded"
                style={{ width: size, height: size }}
              />
              <span className="text-xs font-mono text-muted">{size}px</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
