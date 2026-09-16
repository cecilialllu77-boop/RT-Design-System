import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const typeScale = [
  { name: "Display", size: "48px", weight: "700", lineHeight: "1.1", tag: "h1" },
  { name: "Heading 1", size: "36px", weight: "700", lineHeight: "1.2", tag: "h1" },
  { name: "Heading 2", size: "24px", weight: "600", lineHeight: "1.3", tag: "h2" },
  { name: "Heading 3", size: "20px", weight: "600", lineHeight: "1.4", tag: "h3" },
  { name: "Heading 4", size: "16px", weight: "600", lineHeight: "1.5", tag: "h4" },
  { name: "Body", size: "14px", weight: "400", lineHeight: "1.6", tag: "p" },
  { name: "Small", size: "13px", weight: "400", lineHeight: "1.5", tag: "small" },
  { name: "Caption", size: "12px", weight: "400", lineHeight: "1.5", tag: "span" },
];

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        description="Typography tokens and guidelines for consistent text rendering."
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
        description="A consistent scale for all text sizes used in the design system."
      >
        <div className="border border-border rounded-lg overflow-hidden">
          {typeScale.map((type, i) => (
            <div
              key={type.name}
              className={`flex items-baseline gap-4 px-4 py-3 ${
                i < typeScale.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="w-24 shrink-0">
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
                  The quick brown fox
                </p>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-xs font-mono text-muted">
                  {type.size} / {type.weight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
