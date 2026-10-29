# KeyWay Solutions — Style Reference & Design System
> High-performance technical precision: deep dark canvas, emerald green accents, and razor-sharp 4px geometry.

**Theme:** dark (Deep Obsidian & Navy)

This design specification adapts the visual architecture, compact rhythm, restrained typography, and sharp geometry of Cursor to the corporate identity of **KeyWay Solutions (KWS)**.

Authority and sophistication come from typographic restraint (weight 400–500 headlines with tight tracking) and razor-sharp hairline borders, rather than heavy drop shadows, pill shapes, or bloated saturated cards.

---

## 1. Tokens — Color Palette (KeyWay Solutions Identity)

The system completely replaces Cursor's warm cream/parchment/ember palette with the deep dark technical identity of KeyWay Solutions.

| Token Name | Token Variable | Color / Value | Role & Usage |
|------------|----------------|---------------|--------------|
| **Deep Canvas** | `--color-canvas` / `--background` | `oklch(0.13 0.025 250)` (`#090d16` / `#0a0e1a`) | Main background surface. Dark obsidian-navy supporting interactive 3D particle canvas. |
| **Card Surface** | `--color-surface-card` / `--card` | `oklch(0.17 0.03 250)` (`#101626` / `#0e1424`) | Elevated container and card surface. Flat, paper-like dark surface with hairline borders. |
| **Elevated Surface** | `--color-surface-elevated` / `--secondary` | `oklch(0.20 0.03 250)` (`#151c30`) | Secondary buttons, tech tiles, header elements, interactive controls. |
| **Hairline Border** | `--color-border` / `--surface-outline` | `oklch(0.24 0.03 250)` / `oklch(0.26 0.03 250 / 0.7)` | 1px hairline rules, card frames, separators. Ultra-fine with low opacity. |
| **Input Surface** | `--color-input` / `--input` | `oklch(0.20 0.03 250)` | Crisp background fill for text inputs and textareas. |
| **KWS Green (Primary CTA)** | `--color-primary` / `--color-kws-green` | `oklch(0.70 0.16 160)` (`#10b981` / Emerald) | Primary call to action, active tabs, focus rings, and glowing technical indicators. |
| **KWS Blue (Secondary Accent)** | `--color-kws-blue` / `--chart-2` | `oklch(0.60 0.14 220)` (`#3b82f6` / `#14b8a6`) | Secondary accents, code syntax keywords, technical metadata highlights. |
| **Ink White (Primary Text)** | `--color-foreground` | `oklch(0.97 0.008 220)` (`#f8fafc`) | High-contrast titles, active navigation labels, primary button text. |
| **Neutral Muted (Secondary Text)** | `--color-muted-foreground` | `oklch(0.70 0.02 220)` (`#94a3b8`) | Descriptive body text, column headings, secondary labels. |
| **Ash / Subdued Meta** | `--color-ash` | `oklch(0.55 0.02 220)` (`#64748b`) | Monospace labels, timestamps, line numbers, prompt glyphs (`$`, `>`). |

---

## 2. Tokens — Geometry & Border Radius (The Cursor Golden Rule)

Cursor's signature geometry strictly enforces sharp **4px** corners across almost all interactive elements and surfaces. Rounded-full pills and oversized radiuses are strictly avoided.

| Element | Border Radius | Token | Note |
|---------|---------------|-------|------|
| **Cards & Window Mockups** | `4px` | `--radius-cards: 4px` | Flat dark surface with 1px hairline border. |
| **Action Buttons (Primary & Secondary)** | `4px` | `--radius-buttons: 4px` | Compact rectangular action buttons. Never pill-shaped. |
| **Inputs & Textareas** | `4px` | `--radius-inputs: 4px` | Crisp technical inputs with 1px border. |
| **Tech Tiles & Tags** | `4px` | `--radius-tiles: 4px` | Compact metadata badges and tech stack tiles. |
| **Modales & Dialogs** | `8px` | `--radius-modals: 8px` | Subtle elevation for floating modal windows. |

> **Golden Rule:** Cards, buttons, inputs, and tiles use `border-radius: 4px`. Modals use `8px`. Avoid `rounded-full` or pill radii on functional UI.

---

## 3. Tokens — Spacing & Layout Rhythm

Based on a strict 4px grid system:

| Step | Value | CSS Token | Common Role |
|------|-------|-----------|-------------|
| 1 | `4px` | `--spacing-4` | Micro-gap between icons and labels, subtle offsets |
| 2 | `8px` | `--spacing-8` | Element gaps, small badge padding |
| 3 | `12px` | `--spacing-12` | Input vertical padding, list item gaps |
| 4 | `16px` | `--spacing-16` | Horizontal padding on compact buttons/inputs |
| 5 | `20px` | `--spacing-20` | Medium container padding |
| 6 | `24px` | `--spacing-24` | **Standard card internal padding**, section gutter |
| 7 | `32px` | `--spacing-32` | Major element gap, mobile section gap |
| 8 | `48px` | `--spacing-48` | Section rhythm |
| 9 | `64px` | `--spacing-64` | Desktop section spacing |
| 10 | `96px` | `--spacing-96` | Hero and large section vertical breathing room |

### Layout Constraints
- **Max Width:** `1300px` centered (`max-w-[1300px] mx-auto`).
- **Horizontal Padding:** `24px` (`px-6`).
- **Section Gap:** `64px` to `96px` breathing space.

---

## 4. Typography & Hierarchy

Authority is established through typographic restraint: weight 400 or 500 headlines paired with progressively tighter tracking as font size increases. Never use heavy 700/800 bold display text.

### Typefaces
- **Primary Sans / Headings:** `Geist Sans`, `Inter`, `CursorGothic`, `system-ui`, sans-serif.
- **Monospace (Technical Voice):** `berkeleyMono`, `Geist Mono`, `SFMono-Regular`, `Consolas`, `Menlo`, `Monaco`, monospace. Used for code blocks, CLI snippets, tags, service numbering, and tech specs.

### Type Scale & Letter Spacing

| Level | Size | Weight | Line Height | Tracking | Token |
|-------|------|--------|-------------|----------|-------|
| **Display (Hero Headline)** | `48px - 64px` | `400` / `500` | `1.1` | `-0.03em` (`-2px`) | `--text-display` |
| **Heading Large (Section H2)** | `32px - 36px` | `400` / `500` | `1.2` | `-0.02em` (`-0.72px`) | `--text-heading-lg` |
| **Heading Medium (Card H3)** | `20px - 24px` | `500` | `1.25` | `-0.015em` (`-0.3px`) | `--text-heading` |
| **Heading Small / Subhead** | `18px` | `500` | `1.3` | `-0.01em` (`-0.18px`) | `--text-heading-sm` |
| **Body Standard** | `15px - 16px` | `400` | `1.5` | `normal` | `--text-body` |
| **Body Small / Captions** | `13px - 14px` | `400` | `1.5` | `+0.01em` | `--text-body-sm` |
| **Eyebrow / Monospace Tag** | `12px` | `500` | `1.6` | `+0.05em` | `--text-eyebrow` |

---

## 5. Components Architecture

### 5.1 Hero Section
- **Headline:** Weight 400–500, tight tracking (`-0.03em`), high contrast off-white with smooth emerald/cyan gradient punctuation.
- **Eyebrow Tag:** Monospace tag with 4px border radius, 1px border `border-border/80`, emerald icon.
- **Primary Button (Agendar Consulta):**
  - Background: Emerald Green (`oklch(0.70 0.16 160)` / `--primary`).
  - Text: Dark navy/obsidian (`#090d16`).
  - Radius: `4px`.
  - Padding: `0.78em 1.35em` (~`12px 22px`).
  - Font: 14px font-medium.
  - Hover: subtle brightness + micro translation.
- **Secondary Button (Ver Soluciones):**
  - Background: Elevated dark surface (`bg-card/70`).
  - Text: High-contrast white (`text-foreground`).
  - Border: 1px hairline `border-border/80`.
  - Radius: `4px`.
  - Padding: `0.78em 1.35em`.
- **Code Window Frame:**
  - Technical window frame container with **4px corners** (`rounded-[4px]`).
  - Hairline 1px border `border-border/80`.
  - macOS / technical window chrome: three subtle dots, centered file title `keyWaySolutions.js` in monospace/system-ui 12px.
  - Interactive typewriter effect with line markers and syntax highlighting.
  - Surrounding tech badges: 4px radius, monospace font, 1px fine border.

### 5.2 Services Accordion (Nuestros Servicios)
- Flat, clean rectangular cards with **4px radius**.
- 1px fine hairline borders (`border-border/70` at rest, `border-primary/50` when active).
- Compact 24px internal padding (`p-6`).
- Service numbering (`01`, `02`, `03`) in monospace 12px.
- Heading weight 400 or 500 with tight tracking.
- Expandable drawer with 24px internal padding, clean list points, and subtle 1px dividers.

### 5.3 About Us (Nosotros)
- Responsive grid of cards with **4px radius** (`rounded-[4px]`).
- Hairline 1px borders with subtle dark card elevation.
- Internal padding: `24px`.
- Technical icon containers with 4px radius (`rounded-[4px]`).
- Clean editorial typography with weight 500 card titles.

### 5.4 Contact Form
- Form card: **4px radius** with hairline 1px border and 24px–32px padding.
- Input fields and textarea: **4px radius**, 1px border `border-border/80`, focused with emerald ring and border.
- Clean typography and labels.
- Integrated submit button: **4px radius**, compact padding, emerald green fill.
- **Preserved EmailJS variables**: `{ name: form.nombre, email: form.email, message: form.mensaje }` and dual parallel notification templates.

### 5.5 Navbar & Footer
- **Navbar:** Sticky header, 56px height, max-width 1300px, 24px horizontal padding (`px-6`), 4px radius on action button.
- **Footer:** Clean hairline border-t, brand mark with KWS logo, copyright, 4px radius on social icon buttons.

---

## 6. CSS Tokens Implementation

```css
:root {
  /* KWS Dark Obsidian & Navy Brand Palette */
  --color-canvas: oklch(0.13 0.025 250);
  --color-surface-card: oklch(0.17 0.03 250);
  --color-surface-elevated: oklch(0.20 0.03 250);
  --color-border-hairline: oklch(0.24 0.03 250);

  /* Accents */
  --color-kws-green: oklch(0.70 0.16 160);
  --color-kws-blue: oklch(0.60 0.14 220);
  --color-kws-cyan: oklch(0.72 0.13 190);

  /* Typography */
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), 'berkeleyMono', SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Strict Cursor Radii */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius: 4px;

  --radius-cards: 4px;
  --radius-tiles: 4px;
  --radius-inputs: 4px;
  --radius-buttons: 4px;
  --radius-modals: 8px;

  /* Spacing Scale */
  --spacing-unit: 4px;
  --page-max-width: 1300px;
  --page-padding-x: 24px;
}
```
