import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function InstallationPage() {
  return (
    <>
      <PageHeader
        title="Installation"
        description="Get started with RT Design System in your project."
      />

      <Section title="Install">
        <div className="border border-border rounded-lg bg-code-bg p-4 mb-4">
          <pre className="text-sm font-mono overflow-x-auto">
            <code>{`npm install @rt/design-system`}</code>
          </pre>
        </div>
      </Section>

      <Section title="Setup">
        <p className="text-sm text-muted leading-relaxed mb-4">
          {/* TODO: Add setup instructions */}
          Import the CSS and wrap your app with the theme provider.
        </p>
        <div className="border border-border rounded-lg bg-code-bg p-4">
          <pre className="text-sm font-mono overflow-x-auto">
            <code>{`import '@rt/design-system/styles.css';
import { ThemeProvider } from '@rt/design-system';

export default function App({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}`}</code>
          </pre>
        </div>
      </Section>
    </>
  );
}
