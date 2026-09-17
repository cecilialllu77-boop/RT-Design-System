import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const typeScale = [
  { name: "H1", label: "Primary Title", size: "18px", weight: "600", lineHeight: "1.4", color: "#FFFFFF" },
  { name: "P1", label: "Content Text", size: "14px", weight: "400", lineHeight: "1.6", color: "#DCE0F2" },
  { name: "H2", label: "Secondary Title", size: "16px", weight: "600", lineHeight: "1.5", color: "#DCE0F2" },
  { name: "P2", label: "Secondary Text", size: "12px", weight: "400", lineHeight: "1.5", color: "#CFCFCF" },
];

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        description="Typography tokens and guidelines for consistent text rendering in the Radiotherapy Cloud platform."
      />

      <Section
        title="Font Family"
        description="The design system uses Geist Sans for UI text and Geist Mono for code."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-4">
            <p className="text-2xl font-sans mb-2">Geist Sans</p>
            <p className="text-sm text-muted font-sans">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <p className="text-2xl font-mono mb-2">Geist Mono</p>
            <p className="text-sm text-muted font-mono">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Type Scale"
        description="The type hierarchy used across the application, with designated colors for each level."
      >
        <div className="border border-border rounded-lg overflow-hidden">
          {typeScale.map((type, i) => (
            <div
              key={type.name}
              className={`flex items-center gap-4 px-4 py-4 ${
                i < typeScale.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="w-12 shrink-0">
                <span className="text-xs font-mono text-muted">{type.name}</span>
              </div>
              <div className="flex-1">
                <p
                  style={{
                    fontSize: type.size,
                    fontWeight: type.weight,
                    lineHeight: type.lineHeight,
                  }}
                >
                  {type.label}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded border border-border shrink-0"
                  style={{ backgroundColor: type.color }}
                />
                <div className="text-right">
                  <span className="text-xs font-mono text-muted">
                    {type.size} / {type.weight}
                  </span>
                  <br />
                  <span className="text-xs font-mono text-muted">
                    {type.color}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
