import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const primaryColors = [
  { name: "Primary Green", token: "--primary", value: "#3B9B4D", description: "Main buttons, labels, product positioning content background" },
  { name: "White", token: "--white", value: "#FFFFFF", description: "Modal titles, button text color" },
  { name: "Dark", token: "--dark", value: "#161A1D", description: "Main background board color" },
];

const greenExtended = [
  { name: "Primary Green 50%", token: "--primary-50", value: "rgba(59, 155, 77, 0.5)", swatch: "#3B9B4D80", description: "Table mouse-down and button selected state" },
];

const textColors = [
  { name: "Title Text", token: "--text-title", value: "#CFCFCF", description: "Title text color" },
  { name: "Content Text", token: "--text-content", value: "#DCE0F2", description: "Main content text color" },
  { name: "Placeholder Text", token: "--text-placeholder", value: "#7B808E", description: "Placeholder / fill text color" },
  { name: "Readonly Text", token: "--text-readonly", value: "#949393", description: "Read-only button text color" },
];

const backgroundColors = [
  { name: "Top Section", token: "--bg-top", value: "#1E2228", description: "Top section area background" },
  { name: "Sidebar", token: "--bg-sidebar", value: "#23262B", description: "Left sidebar background" },
  { name: "Surface", token: "--bg-surface", value: "#2B2F36", description: "Top bar, input, icon button, editable table background" },
];

const otherColors = [
  { name: "Gray Button Primary", token: "--btn-gray-primary", value: "#5A5D69", description: "Gray button (white text)" },
  { name: "Button Icon", token: "--btn-icon", value: "#B3B9CC", description: "Button icon color" },
  { name: "Gray Button Secondary", token: "--btn-gray-secondary", value: "#7B808E", description: "Gray button (dark text)" },
];

const alertColors = [
  { name: "Warning", token: "--warning", value: "#FFC232" },
  { name: "Error", token: "--error", value: "#E36732" },
  { name: "Info", token: "--info", value: "#4C8BF5" },
];

function ColorSwatch({ color, darkBg }: { color: { name: string; token: string; value: string; swatch?: string; description?: string }; darkBg?: boolean }) {
  return (
    <div className="border border-border rounded-lg p-3">
      <div
        className="w-full h-20 rounded-md mb-3 border border-border"
        style={{ backgroundColor: color.swatch || color.value }}
      />
      <p className="text-sm font-medium">{color.name}</p>
      <p className="text-xs font-mono text-muted">{color.value}</p>
      <p className="text-xs font-mono text-muted mt-0.5">{color.token}</p>
      {color.description && (
        <p className="text-xs text-muted mt-1">{color.description}</p>
      )}
    </div>
  );
}

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        title="Colors"
        description="The color system is composed of primary colors, extended palettes, and semantic alert colors for the Radiotherapy Cloud platform."
      />

      <Section
        title="1. Primary Palette"
        description="The primary palette consists of dark, white, and green. We use green (#3B9B4D) as the main action color for buttons, labels, and key interactions."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {primaryColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </Section>

      <Section
        title="2. Extended Palette"
        description="Extended colors built on top of the primary palette, providing more options for states, interactions, text, and backgrounds."
      >
        <h3 className="text-sm font-semibold mb-3 mt-0">Green Extended</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {greenExtended.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>

        <h3 className="text-sm font-semibold mb-3">Text Colors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
          {textColors.map((color) => (
            <ColorSwatch key={color.name} color={color} darkBg />
          ))}
        </div>

        <h3 className="text-sm font-semibold mb-3">Background Colors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {backgroundColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>

        <h3 className="text-sm font-semibold mb-3">Other Colors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {otherColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </Section>

      <Section
        title="Alert Colors"
        description="Semantic colors for warning, error, and informational states."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {alertColors.map((color) => (
            <ColorSwatch key={color.name} color={color} />
          ))}
        </div>
      </Section>
    </>
  );
}
