export interface NavItem {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Installation", href: "/installation" },
    ],
  },
  {
    title: "Foundation",
    items: [
      { title: "Colors", href: "/colors" },
      { title: "Typography", href: "/typography" },
      { title: "Icons", href: "/icons" },
      { title: "Spacing", href: "/spacing" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Avatar", href: "/components/avatar" },
      { title: "Badge", href: "/components/badge" },
      { title: "Button", href: "/components/button" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Code Block", href: "/components/code-block" },
      { title: "Collapse", href: "/components/collapse" },
      { title: "Context Menu", href: "/components/context-menu" },
      { title: "Description", href: "/components/description" },
      { title: "Drawer", href: "/components/drawer" },
      { title: "Error", href: "/components/error" },
      { title: "Feedback", href: "/components/feedback" },
      { title: "Input", href: "/components/input" },
      { title: "Kbd", href: "/components/kbd" },
      { title: "Loading", href: "/components/loading" },
      { title: "Menu", href: "/components/menu" },
      { title: "Modal", href: "/components/modal" },
      { title: "Note", href: "/components/note" },
      { title: "Pagination", href: "/components/pagination" },
      { title: "Popover", href: "/components/popover" },
      { title: "Progress", href: "/components/progress" },
      { title: "Radio", href: "/components/radio" },
      { title: "Select", href: "/components/select" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Slider", href: "/components/slider" },
      { title: "Snippet", href: "/components/snippet" },
      { title: "Spinner", href: "/components/spinner" },
      { title: "Stack", href: "/components/stack" },
      { title: "Status Dot", href: "/components/status-dot" },
      { title: "Switch", href: "/components/switch" },
      { title: "Table", href: "/components/table" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Text", href: "/components/text" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Theme Switcher", href: "/components/theme-switcher" },
      { title: "Toast", href: "/components/toast" },
      { title: "Toggle", href: "/components/toggle" },
      { title: "Tooltip", href: "/components/tooltip" },
      { title: "Window", href: "/components/window" },
    ],
  },
];
