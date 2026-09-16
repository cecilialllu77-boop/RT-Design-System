import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function IntroductionPage() {
  return (
    <>
      <PageHeader
        title="Introduction"
        description="RT Design System is a comprehensive design system for building consistent, accessible, and beautiful user interfaces."
      />

      <Section title="Overview">
        <p className="text-sm text-muted leading-relaxed mb-4">
          {/* TODO: Add your design system overview here */}
          This design system provides a set of reusable components, design tokens,
          and guidelines to help you build cohesive user experiences.
        </p>
      </Section>

      <Section title="Principles">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Consistent",
              description: "A unified design language across all products and platforms.",
            },
            {
              title: "Accessible",
              description: "Built with accessibility as a first-class concern.",
            },
            {
              title: "Composable",
              description: "Small, focused components that combine to build complex UIs.",
            },
            {
              title: "Themeable",
              description: "Supports light and dark themes with customizable tokens.",
            },
          ].map((principle) => (
            <div
              key={principle.title}
              className="border border-border rounded-lg p-4"
            >
              <h3 className="text-sm font-semibold mb-1">{principle.title}</h3>
              <p className="text-sm text-muted">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Quick Start">
        <div className="border border-border rounded-lg bg-code-bg p-4">
          <pre className="text-sm font-mono overflow-x-auto">
            <code>{`npm install @rt/design-system`}</code>
          </pre>
        </div>
      </Section>
    </>
  );
}
