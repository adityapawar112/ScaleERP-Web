---
name: ScaleERP Web Design System
description: Centralized brand design tokens and aesthetic guidelines for the ScaleERP ecosystem
colors:
  brand-primary: "#00E600"
  brand-primary-tint-1: "#4DEE4D"
  brand-primary-tint-2: "#99F599"
  brand-primary-tint-3: "#D9FBD9"
  brand-secondary: "#F5F5F5"
  brand-dark: "#171717"
  brand-dark-tint-1: "#5D5D5D"
  brand-dark-tint-2: "#A2A2A2"
  brand-dark-tint-3: "#DCDCDC"
  brand-black: "#000000"
  brand-gray-slate: "#404040"
  brand-gray-silver: "#BFBFBF"
  brand-white: "#FFFFFF"
typography:
  display:
    fontFamily: "var(--font-outfit), sans-serif"
  heading:
    fontFamily: "var(--font-outfit), sans-serif"
  body:
    fontFamily: "var(--font-plus-jakarta), sans-serif"
rounded:
  base: "0.625rem"
spacing:
  container: "2rem"
---

# Design System: ScaleERP Web

## Overview

**Creative North Star: "High-Velocity Digital Fortress"**

ScaleERP Web is built to feel clean, high-precision, and surgically modern. The visual identity bridges the relentless pace of high-volume wholesale commercial trade with the robust reliability of an offline-first software engine.

### Key Visual Anchors:
- **Vibrant Electric Green Primary Accent (`#00E600`)**: Core brand voice representing active telemetry, positive ledger balances, high system health, and primary action buttons.
- **Deep Charcoal Dark Mode Slate (`#171717`)**: High-contrast, low-eye-strain backdrop for extended billing shifts and nocturnal warehouse auditing.
- **Clean Neutral Canvas (`#F5F5F5`)**: High-contrast, clean neutral background for light mode counter operations.
- **Outfit & Modern Typography**: Outfit for commanding headlines, logos, and badges; Plus Jakarta Sans for dense, tabular financial ledgers; Noto Sans Devanagari for Marathi and Hindi typing.

---

## Color System

### Primary & Brand Tints
- **Brand Primary** (`#00E600`): Primary CTAs, active states, focus rings, and positive system vitals.
- **Tint 1** (`#4DEE4D`): Hover state for primary buttons.
- **Tint 2** (`#99F599`): Active indicators and badge accents.
- **Tint 3** (`#D9FBD9`): Subtle background fills for alert banners and success badges.

### Dark Tone Scale
- **Brand Dark** (`#171717`): Core dark surface, headers, and text primary in light mode.
- **Dark Tint 1** (`#5D5D5D`): Secondary text and muted UI borders.
- **Dark Tint 2** (`#A2A2A2`): Subtle metadata text and placeholder styling.
- **Dark Tint 3** (`#DCDCDC`): Light mode borders and divider lines.

### Neutrals & Surfaces
- **Light Theme Background** (`#F5F5F5`): Clean neutral canvas for high-contrast light mode.
- **Dark Theme Background** (`#171717` / `oklch(0.15 0 0)`): Deep charcoal backdrop reducing glare in dim warehouse/counter environments.
- **Surface Elevation**: Cards and modal containers elevate to pure white (`#FFFFFF`) in light mode and elevated dark zinc/charcoal (`oklch(0.205 0 0)`) in dark mode.

---

## Typography Hierarchy

- **Brand, Display & Headings**: Outfit (`var(--font-outfit)`). Geometric, authoritative, and clean for headlines, badges, and brand logos.
- **Body & Dense Ledgers**: Plus Jakarta Sans (`var(--font-plus-jakarta)`). Highly legible across high-density financial tables and mobile screens.
- **Indic Scripts**: Noto Sans Devanagari (`var(--font-noto-devanagari)`) with custom matra/ukaar line-height padding for flawless Hindi and Marathi scripts.

---

## Component Guidelines

### Buttons & Inputs
- **Radius**: Soft tactile baseline of 10px (`rounded-lg` / `0.625rem`).
- **Primary Buttons**: Vibrant Green background (`#00E600`) with dark text (`#171717`), subtle hover lift, and accessible focus rings.
- **Secondary Buttons**: Neutral surface with subtle 1px border outlines and responsive hover feedback.

### Modals & Dialogs
- Always maintain viewport bounds (`max-h-[85vh] overflow-y-auto`) to ensure comfortable interaction on standard 1366x768 POS laptop displays.

### Tooltips & Jargon Accessibility
- Always wrap technical terms (e.g. SQLite WAL, RSA Cryptography, Hardware ID) in the `<JargonTooltip>` component to preserve clarity for non-technical retail users.
