import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const spacingScale = [
  { name: "0", value: "0px" },
  { name: "1", value: "4px" },
  { name: "2", value: "8px" },
  { name: "3", value: "12px" },
  { name: "4", value: "16px" },
  { name: "5", value: "20px" },
  { name: "6", value: "24px" },
  { name: "8", value: "32px" },
  { name: "10", value: "40px" },
  { name: "12", value: "48px" },
  { name: "16", value: "64px" },
];

export default function SpacingPage() {
  return (
    <>
      <PageHeader
        title="Spacing"
        description="A consistent spacing scale for margins, padding, and gaps."
      />

      <Section
        title="Scale"
        description="The spacing scale is based on a 4px grid."
      >
        <div className="border border-border rounded-lg overflow-hidden">
          {spacingScale.map((space, i) => (
            <div
              key={space.name}
              className={`flex items-center gap-4 px-4 py-2 ${
                i < spacingScale.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="w-8 text-sm font-mono text-muted text-right">
                {space.name}
              </span>
              <div className="flex-1">
                <div
                  className="h-3 bg-success/20 rounded"
                  style={{ width: space.value }}
                />
              </div>
              <span className="text-xs font-mono text-muted">{space.value}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
