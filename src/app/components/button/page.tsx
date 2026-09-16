import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { ExampleBlock } from "@/components/example-block";
import { PropsTable } from "@/components/props-table";

export default function ButtonPage() {
  return (
    <>
      <PageHeader
        title="Button"
        description="Trigger an action or event, such as submitting a form or opening a dialog."
      />

      <Section title="Examples">
        <ExampleBlock
          code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>`}
        >
          <div className="flex gap-3">
            <button className="h-9 px-4 text-sm font-medium rounded-md bg-foreground text-background hover:opacity-90 transition-opacity">
              Default
            </button>
            <button className="h-9 px-4 text-sm font-medium rounded-md bg-accent text-foreground border border-border hover:bg-hover transition-colors">
              Secondary
            </button>
            <button className="h-9 px-4 text-sm font-medium rounded-md border border-border text-foreground hover:bg-hover transition-colors">
              Outline
            </button>
          </div>
        </ExampleBlock>
      </Section>

      <Section title="Sizes">
        <ExampleBlock
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex items-center gap-3">
            <button className="h-7 px-3 text-xs font-medium rounded-md bg-foreground text-background">
              Small
            </button>
            <button className="h-9 px-4 text-sm font-medium rounded-md bg-foreground text-background">
              Medium
            </button>
            <button className="h-11 px-6 text-base font-medium rounded-md bg-foreground text-background">
              Large
            </button>
          </div>
        </ExampleBlock>
      </Section>

      <Section title="Disabled">
        <ExampleBlock
          code={`<Button disabled>Disabled</Button>`}
        >
          <button
            className="h-9 px-4 text-sm font-medium rounded-md bg-accent text-muted cursor-not-allowed"
            disabled
          >
            Disabled
          </button>
        </ExampleBlock>
      </Section>

      <Section title="API Reference">
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"primary" | "secondary" | "outline" | "ghost" | "danger"',
              default: '"primary"',
              description: "The visual style of the button.",
            },
            {
              name: "size",
              type: '"sm" | "md" | "lg"',
              default: '"md"',
              description: "The size of the button.",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Whether the button is disabled.",
            },
            {
              name: "loading",
              type: "boolean",
              default: "false",
              description: "Shows a loading spinner and disables the button.",
            },
            {
              name: "children",
              type: "ReactNode",
              description: "The content of the button.",
            },
          ]}
        />
      </Section>
    </>
  );
}
