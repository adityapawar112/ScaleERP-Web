---
name: ScaleERP Web
description: Premium Offline Inventory & Ledger Software for Feed Stores
colors:
  primary: "#B4532B"
  secondary: "#004B72"
  neutral-bg: "oklch(0.985 0.015 75)"
  neutral-surface: "oklch(1 0 0)"
  text-primary: "oklch(0.15 0 0)"
  text-muted: "oklch(0.556 0 0)"
  border: "oklch(0.922 0 0)"
typography:
  display:
    fontFamily: "var(--font-outfit), sans-serif"
  body:
    fontFamily: "var(--font-plus-jakarta), sans-serif"
rounded:
  base: "0.625rem"
spacing:
  container: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.base}"
---

# Design System: ScaleERP Web

## Overview

**Creative North Star: "The Agricultural Ledger"**

This system is grounded, trustworthy, and heavily optimized for comprehension by non-sophisticated users. The interface must feel professional and simple above all else. Despite its premium underpinnings, it avoids overwhelming the user with complexity. The aesthetic leans into a warm, tactile feel that honors its agricultural roots while delivering a lightning-fast digital experience.

**Key Characteristics:**
- Warm, earthy color palette rooted in Terracotta.
- High legibility typography (Outfit for structure, Plus Jakarta Sans for data).
- Soft and tactile components that invite interaction without intimidation.
- Simple, straightforward data presentation.

## Colors

The palette is anchored by Terracotta (the voice of ScaleERP) and supported sparsely by Navy (the voice of the parent company, Ouroscale).

### Primary
- **Terracotta** (#B4532B): The primary brand color of ScaleERP. Used for 80% of accents, primary actions, alerts, and major interactive elements. It provides a grounded, earthy warmth.

### Secondary
- **Navy** (#004B72): The brand color of Ouroscale. Used for the remaining 20% of accents, strictly reserved for areas where the parent company is mentioned (e.g., the footer) or for deep structural anchors.

### Neutral
- **Cream Background** (oklch(0.985 0.015 75)): The default page background. A warm off-white that reduces eye strain compared to stark white.
- **Surface Card** (oklch(1 0 0)): Pure white or slightly elevated surfaces against the cream background.
- **Dark Text** (oklch(0.15 0 0)): Primary high-contrast text for ultimate legibility.

### Named Rules
**The 80/20 Brand Rule.** Terracotta drives the UI (80%). Navy is reserved strictly for Ouroscale-branded elements like the footer (20%). Do not mix them casually.

## Typography

**Display Font:** Outfit (`var(--font-outfit)`)
**Body Font:** Plus Jakarta Sans (`var(--font-plus-jakarta)`)

**Character:** Highly legible and approachable. Outfit provides a modern, geometric structure for headings, while Plus Jakarta Sans ensures dense ledger data remains readable.

### Hierarchy
- **Display**: Used exclusively for major hero headlines and section titles.
- **Body**: Used for all standard text, data tables, and operational inputs.

### Named Rules
**The Legibility First Rule.** Because the user base is not highly sophisticated with digital tools, never sacrifice text contrast or size for aesthetic minimalism.

## Layout

The layout uses a standard container model (padding: 2rem, max-width: 1400px). Density should be comfortable but capable of displaying ledger and inventory data without excessive scrolling.

## Elevation & Depth

The system uses subtle tonal layering. Cards and popovers share the background color in dark mode but lift to pure white in light mode to stand out against the warm cream background.

### Named Rules
**The Tactile Surface Rule.** Surfaces should feel distinct but not disconnected. Use subtle borders or very soft shadows rather than harsh drop shadows.

## Shapes

Forms are soft and tactile. The global border radius is 10px (`0.625rem`), striking a balance between approachable softness and structural integrity.

## Components

### Buttons
- **Shape:** Soft (10px radius).
- **Primary:** Terracotta background with light text.
- **Feel:** Soft and tactile. Hover states should feel responsive and gentle.

### Cards / Containers
- **Corner Style:** 10px radius.
- **Background:** Pure white (light mode) or elevated dark (dark mode).
- **Border:** Subtle neutral border (`var(--border)`).

## Do's and Don'ts

### Do:
- **Do** prioritize simplicity and clarity over complex interactions.
- **Do** use Terracotta for primary actions and highlights.
- **Do** ensure every new component or section looks flawless in both `light` and `dark` modes, paying special attention to text contrast and inverted theme elements.
- **Do** use the `<MediaMockup>` component with high-quality Lucide React icons instead of leaving unstyled generic placeholders.
- **Do** wrap industry jargon in the `<JargonTooltip>` component to maintain accessibility for non-technical users.

### Don't:
- **Don't** use Navy for generic UI components; reserve it for Ouroscale branding.
- **Don't** use overly sharp corners (0px radius); stick to the 10px tactile baseline.
