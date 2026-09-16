import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const grayScale = [
  { name: "Gray 100", token: "--gray-100", light: "#fafafa", dark: "#1a1a1a" },
  { name: "Gray 200", token: "--gray-200", light: "#eaeaea", dark: "#333333" },
  { name: "Gray 300", token: "--gray-300", light: "#999999", dark: "#444444" },
  { name: "Gray 400", token: "--gray-400", light: "#888888", dark: "#666666" },
  { name: "Gray 500", token: "--gray-500", light: "#666666", dark: "#888888" },
  { name: "Gray 600", token: "--gray-600", light: "#444444", dark: "#999999" },
  { name: "Gray 700", token: "--gray-700", light: "#333333", dark: "#eaeaea" },
  { name: "Gray 800", token: "--gray-800", light: "#111111", dark: "#fafafa" },
];

const semanticColors = [
  { name: "Success", token: "--success", value: "#0070f3" },
  { name: "Error", token: "--error", value: "#ee0000" },
  { name: "Warning", token: "--warning", value: "#f5a623" },
  { name: "Info", token: "--info", value: "#0070f3" },
];

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        title="Colors"
        description="The color system provides a unified palette for building consistent interfaces across light and dark themes."
      />

      <Section
        title="Gray Scale"
        description="Used for backgrounds, borders, and text. These colors adapt to the current theme."
      >
        <div className="grid grid-cols-1 gap-2">
          {grayScale.map((color) => (
            <div
              key={color.name}
              className="flex items-center gap-4 border border-border rounded-lg p-3"
            >
              <div className="flex gap-1">
                <div
                  className="w-10 h-10 rounded-md border border-border"
                  style={{ backgroundColor: color.light }}
                />
                <div
                  className="w-10 h-10 rounded-md border border-border"
                  style={{ backgroundColor: color.dark }}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{color.name}</p>
                <p className="text-xs font-mono text-muted">{color.token}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono text-muted">{color.light}</p>
                <p className="text-xs font-mono text-muted">{color.dark}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Semantic Colors"
        description="Used to communicate meaning such as success, error, or warning states."
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {semanticColors.map((color) => (
            <div key={color.name} className="border border-border rounded-lg p-3">
              <div
                className="w-full h-16 rounded-md mb-2"
                style={{ backgroundColor: color.value }}
              />
              <p className="text-sm font-medium">{color.name}</p>
              <p className="text-xs font-mono text-muted">{color.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Background Colors"
        description="Layered backgrounds for creating depth and hierarchy."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { name: "Background", token: "--background", description: "Page background" },
            { name: "Accent", token: "--accent", description: "Subtle background" },
            { name: "Hover", token: "--hover", description: "Interactive hover state" },
          ].map((bg) => (
            <div key={bg.name} className="border border-border rounded-lg p-4">
              <div className="w-full h-12 rounded-md mb-3 border border-border bg-[var(--background)]" />
              <p className="text-sm font-medium">{bg.name}</p>
              <p className="text-xs font-mono text-muted">{bg.token}</p>
              <p className="text-xs text-muted mt-1">{bg.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
