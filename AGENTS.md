# ScaleERP-Web — Agent & Developer Configuration Guide

Welcome to the `ScaleERP-Web` repository. This file serves as the definitive reference for human developers and autonomous AI coding agents working on the ScaleERP web application.

---

## 1. Project Context & Technology Stack

- **Framework**: Next.js 15 (App Router, Server Components & Route Handlers)
- **Styling**: Tailwind CSS with custom design tokens (Terracotta `#B4532B` primary accent, dark mode neutral slate)
- **Component Primitives**: Radix UI, Lucide React, Framer Motion
- **Database & Telemetry**: Supabase PostgreSQL with Row Level Security (RLS)
- **Cryptography**: Node.js native `crypto` module (RSA-PSS SHA-256 for offline `.lic` signing)
- **Internationalization**: Lightweight custom i18n (`src/i18n.ts`) supporting English, Hindi (हिंदी), and Marathi (मराठी)
- **Deployment Target**: Vercel (Edge Functions for telemetry, Serverless for admin key operations)

---

## 2. Directory Structure

```
ScaleERP-Web/
├── src/
│   ├── app/                    # Next.js 15 App Router pages & API routes
│   │   ├── (admin)/            # Protected admin portal (/admin, /admin/keys, /admin/activate)
│   │   ├── (portal)/           # Customer portal routes
│   │   ├── api/v1/             # REST API endpoints (licensing, heartbeat, download)
│   │   ├── docs/               # Markdown-powered documentation viewer
│   │   ├── resources/          # Industry articles and blog engine
│   │   ├── robots.ts           # Dynamic robots.txt metadata route
│   │   ├── sitemap.ts          # Dynamic sitemap.xml metadata route
│   │   └── page.tsx            # High-conversion marketing landing page
│   ├── components/             # Reusable UI components
│   │   ├── layout/             # Navbar, Footer, Mobile Navigation Sheet
│   │   ├── ui/                 # Radix-backed UI atoms (Button, Modal, Tooltip, Card)
│   │   └── I18nProvider.tsx    # Context provider for multi-language switching
│   ├── lib/                    # Core business logic
│   │   ├── docs.ts             # File-system markdown parser for /docs
│   │   ├── resources.ts        # File-system markdown parser for /resources
│   │   ├── licensing.ts        # RSA signature generation & envelope formatting
│   │   └── supabaseAdmin.ts    # Supabase service-role client (server-side only)
│   └── i18n.ts                 # Centralized dictionary for EN, HI, MR
├── docs/                       # Dynamic runtime content
│   └── scaleerp-web-content/   # Markdown content loaded at runtime by docs.ts / resources.ts
└── public/                     # Static assets (favicons, brand kit, fonts, llms.txt)
```

---

## 3. Critical Architectural Rules for Agents

### 1. App Router & Server Component Boundary
- By default, pages and layouts in `src/app/` should be Server Components unless they require interactivity (React hooks, state, DOM event listeners).
- When creating interactive components, always place `'use client';` at the very top of the file.

### 2. Internationalization (i18n) Mandate
- Never hardcode user-facing strings directly into JSX elements.
- Always use `const { t } = useTranslation();` and look up keys in `src/i18n.ts`.
- When adding new keys, add them to **all three language dictionaries** (English, Hindi, Marathi).

### 3. Light & Dark Mode Compatibility
- The application uses `next-themes`.
- Ensure every newly created section looks balanced in both `light` and `dark` modes using Tailwind utility classes (`bg-white dark:bg-zinc-950`, `text-zinc-900 dark:text-zinc-100`, `border-zinc-200 dark:border-zinc-800`).

### 4. Admin Security & Telemetry Boundary
- Public license activation is strictly managed by machine-bound 16-digit keys (`/api/v1/licensing/activate`).
- The offline `.lic` cryptographic signing utility is located at `/admin/activate` and is protected behind the `AdminAuthProvider` and the `ADMIN_SECRET` header (`x-admin-secret`).
- Never expose `SUPABASE_SERVICE_ROLE_KEY` or `RSA_PRIVATE_KEY` to client components.

---

## 4. Key Development & Verification Commands

```powershell
# Start local development server (runs on port 3000)
npm run dev

# Run full TypeScript validation (0 errors expected)
npx tsc --noEmit

# Build production bundle for Vercel
npm run build
```
