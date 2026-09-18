# Figma Component to Design System Page

Build an interactive component demo page in the RT Design System HTML artifact from a Figma component.

## When to use

When the user provides a Figma URL (with `node-id`) and asks to add a new component page to the RT Design System artifact (`rt-design-system.html`).

## Prerequisites

- Figma file: `0jAgEfewMKcNB0aGCVckIY` (RT-AI component library)
- Artifact URL: `https://claude.ai/artifact/AbBHT2toAxy9y1j6YPZHra`
- HTML file: `rt-design-system.html` (root of repo)
- Git branch: work on the designated development branch

## Workflow

### Step 1: Read design from Figma

Load the `figma-design-to-code` skill (via MCP resource `skill://figma/figma-design-to-code/SKILL.md`), then call `get_design_context` with the node ID from the user's URL. Do NOT use `get_screenshot` for design data extraction.

Extract from the response:
- Exact design tokens: colors (hex + rgba), font sizes, font weights, border-radius, box-shadow, dimensions, spacing/gap, padding
- Component states: Default, Hover, Active/Selected, Disabled
- Component structure: layout hierarchy, child components, variants
- SVG icon assets: download via `download_assets`, then extract individual SVG `<path>` data

### Step 2: Extract and normalize icons

For icons in the Figma component:
1. Call `download_assets` on each icon node to get SVG URLs
2. If direct download is blocked by proxy, ask the user to paste SVG code from Figma (right-click > Copy as SVG)
3. If icons are packed in a single multi-icon SVG, split them by analyzing each `<path>` element's coordinate ranges
4. Normalize each icon path to an 18x18 viewBox by translating coordinates (subtract x/y offsets so content centers at ~9,9)
5. Use `fill="currentColor"` so CSS `color` property controls the icon color and enables hover transitions

### Step 3: Map Figma tokens to CSS

The artifact uses these CSS custom properties and conventions:

```
Design Token Mapping:
  Text/$text-heading:    #FFFFFF  (page titles, section titles)
  Text/$text-secondary:  #CFCFCF  (labels, weekday headers) -> var(--fg-title)
  Text/$text-primary:    #DCE0F2  (normal text, day numbers) -> var(--fg)
  Text/$text-uneditable: #949393  (disabled text)            -> var(--fg-faint)
  Background/$background-4: #2B2F36  (input bg, dropdown bg) -> var(--bg-surface-3)
  Button/$button-primary: #3B9B4D                            -> var(--primary)
  Icon default color:    #7B808E                             -> var(--fg-muted)
  Border/separator:      #3A3E47
  Hover bg:              rgba(59,155,77,0.1)                 -> var(--primary-10)
  Selected/Active bg:    rgba(59,155,77,0.5)                 -> var(--primary-50)
  Dropdown shadow:       0px 2px 5px rgba(0,0,0,0.4)
  Border-radius:         2px (for component elements, not page layout)
```

When Figma values don't map to existing CSS variables, use the raw hex/rgba value directly. Do NOT invent new token names.

### Step 4: Build the component page

#### 4.1 Add sidebar nav link

In the sidebar `<nav>`, under the Components group, add:
```html
<a class="nav-link" onclick="showPage('componentname', this)">ComponentName</a>
```

#### 4.2 Create the page section

Add a new `<div id="page-componentname" class="page-section">` following this structure:

```html
<div id="page-componentname" class="page-section">
  <div class="page-header">
    <h1 class="page-title">ComponentName</h1>
    <p class="page-desc">Brief description of the component.</p>
  </div>

  <!-- One section per variant/mode, interactive demos only -->
  <div class="section">
    <h2 class="section-title">Variant Name</h2>
    <div class="example-block">
      <div class="example-preview" style="justify-content: flex-start; padding: 32px;">
        <!-- Interactive component here -->
      </div>
      <div class="example-code">&lt;ComponentName prop="value" /&gt;</div>
    </div>
  </div>

  <!-- Disabled section -->
  <div class="section">
    <h2 class="section-title">Disabled</h2>
    <!-- Show disabled states -->
  </div>

  <!-- API Reference -->
  <div class="section">
    <h2 class="section-title">API Reference</h2>
    <table class="props-table">
      <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
      <tbody>...</tbody>
    </table>
  </div>
</div>
```

#### 4.3 Key rules

- **Interactive only**: Show working, clickable demos. No static state grids showing "Default / Hover / Active / Disabled" side by side. The user interacts to see states.
- **Exact Figma values**: Every color, size, radius, shadow, font-size must match Figma precisely. Do not approximate.
- **overflow: visible**: The `.example-block` uses `overflow: visible` so dropdowns/popups are not clipped.
- **Labels in Chinese**: Use Chinese text for labels matching the Figma design (e.g. "日期", not "Date").
- **CSS scoping**: Prefix all component-specific CSS classes with a short identifier (e.g. `.cal-` for Calendar) to avoid conflicts.

### Step 5: Implement interactive JavaScript

- Add component state management and rendering logic in the `<script>` section at the bottom of the HTML
- Support all interactive behaviors: click, hover (via CSS), toggle dropdowns, navigate between views
- Close dropdowns when clicking outside
- Use `hidden` attribute for show/hide toggling

### Step 6: Update search index

Add entries to the `searchData` array in the `<script>` section so the search bar can find the new component:
```javascript
{ page: 'componentname', title: 'ComponentName', content: 'description and keywords', el: 'page-componentname' }
```

### Step 7: Publish and sync

1. Publish the updated HTML to the artifact using `Artifact publish` with the artifact URL
2. Copy the HTML to `rt-design-system.html` in the repo root
3. Commit with a descriptive message
4. Push to the development branch

## Quality checklist

- [ ] All colors match Figma tokens exactly (use `get_design_context`, not guessing)
- [ ] All icons are from Figma SVGs, not generic/placeholder icons
- [ ] Hover state: `rgba(59,155,77,0.1)` bg + white text (or per Figma spec)
- [ ] Selected/Active state: `rgba(59,155,77,0.5)` bg + white text (or per Figma spec)
- [ ] Disabled state: correct opacity/color per Figma
- [ ] border-radius matches Figma (typically 2px for component elements)
- [ ] Font sizes match Figma (typically 14px for component text)
- [ ] Dropdowns not clipped by parent containers
- [ ] All demos are interactive, not static
- [ ] Search index updated
- [ ] Sidebar nav link added
- [ ] Artifact published and GitHub pushed
