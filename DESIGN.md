---
name: ScaleERP Web Design System
description: Design tokens and aesthetic guidelines for the ScaleERP ecosystem
colors:
  primary: "#B4532B"
  accent-green: "#10B981"
  neutral-bg-light: "oklch(0.985 0.015 75)"
  neutral-bg-dark: "#09090b"
  neutral-surface: "oklch(1 0 0)"
  text-primary: "oklch(0.15 0 0)"
  text-muted: "oklch(0.556 0 0)"
  border: "oklch(0.922 0 0)"
typography:
  display:
    fontFamily: "var(--font-outfit), sans-serif"
  body:
    fontFamily: "var(--font-plus-jakarta), sans-serif"
  code:
    fontFamily: "var(--font-stack-sans-notch), monospace"
rounded:
  base: "0.625rem"
spacing:
  container: "2rem"
---

# Design System: ScaleERP Web

## Overview

**Creative North Star: "The Grounded Digital Fortress"**

ScaleERP Web is built to feel simultaneously grounded, trustworthy, and surgically modern. The visual identity bridges the working pride of rural/semi-urban agricultural commodity wholesale with the high-velocity precision of a world-class offline software engine.

### Key Visual Anchors:
- **Earthy Terracotta Primary Accent (`#B4532B`)**: Evoking rich soil, red brick godowns, and warmth. Used for primary CTAs, active indicators, and focus outlines.
- **Deep Emerald Trust Accent (`#10B981`)**: Reflecting lush crops, positive ledger balance, and cryptographic verification status.
- **Adaptive Dual-Theme Hierarchy**: Pure white / warm cream cards in light mode with crystal-clear contrast; rich zinc/obsidian dark mode (`#09090b`) for prolonged, low-eye-strain godown operations.
- **Modern Geometric Typography**: Outfit for commanding, authoritative headlines; Plus Jakarta Sans for dense, tabular financial figures and ledger data.

---

## Color System

### Primary
- **Terracotta** (`#B4532B` / `oklch(0.55 0.16 45)`): Core brand voice. Used for interactive buttons, primary badges, and high-priority action targets.

### Secondary / Semantic
- **Emerald Green** (`#10B981`): Cryptographic licensing validity, successful payments, and positive cash flow.
- **Amber Warning** (`#F59E0B`): 7-Day Grace Soft Lock notices and low stock alerts.
- **Crimson Destructive** (`#EF4444`): Total Hard Lock, license expiration, and transaction deletion warnings.

### Neutrals & Surfaces
- **Light Theme Background** (`oklch(0.985 0.015 75)`): Warm cream background reducing eye strain during high-noon counter billing.
- **Dark Theme Background** (`#09090b`): Deep obsidian slate providing maximum contrast for text and tabular figures.
- **Surface Elevation**: Cards and dialog containers elevate to pure white (`#FFFFFF`) in light mode and deep zinc (`#18181b`) in dark mode with subtle 1px border outlines.

---

## Typography Hierarchy

- **Display & Headings**: Outfit (`var(--font-outfit)`). Geometric, clean, and modern.
- **Body & Dense Ledgers**: Plus Jakarta Sans (`var(--font-plus-jakarta)`). Highly legible across small laptop screens and mobile devices.
- **Monospace & Code Tokens**: Stack Sans Notch / Monospace for 16-digit license keys, hardware UUIDs, and technical logs.

---

## Component Guidelines

### Buttons & Inputs
- **Radius**: Soft tactile baseline of 10px (`rounded-lg` / `0.625rem`).
- **Primary Buttons**: Terracotta background with white text, subtle hover lift, and accessible focus rings.
- **Secondary Buttons**: Ghost or bordered neutral surfaces with responsive hover feedback.

### Modals & Dialogs
- Always maintain viewport bounds (`max-h-[85vh] overflow-y-auto`) to ensure comfortable interaction on small 1366x768 POS laptop displays.

### Tooltips & Jargon Accessibility
- Always wrap technical terms (e.g. SQLite WAL, RSA Cryptography, Hardware ID) in the `<JargonTooltip>` component to preserve clarity for non-technical retail users.
