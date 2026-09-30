# ScaleERP Web — Marketing, Documentation & Licensing Portal

The official web platform and documentation portal for **ScaleERP**, an offline-first inventory, billing, and godown management software. Built with modern Next.js 15 App Router, Tailwind CSS, Radix UI, and Supabase.

---

## 🌟 Overview

ScaleERP Web serves as the unified customer-facing hub for the ScaleERP ecosystem:
- **Product Showcase & Marketing**: Interactive pages detailing multi-godown stock management, automated GST billing, thermal printing, and WhatsApp payment recovery.
- **Interactive Documentation**: Category-based documentation engine rendering markdown guides for inventory workflows, broker ledgers, and backup systems.
- **Resource Center & Articles**: Curated industry articles and operational guides for feed and wholesale businesses.
- **Licensing & Key Management**: Backend APIs for machine-bound offline license issuance, heartbeat synchronization, and activation key verification.
- **Multi-Language Localization**: Full English and Marathi internationalization.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/typography` & `tailwindcss-animate`
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/)
- **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL & Service Role APIs)
- **Content Engine**: Custom Markdown parser with `react-markdown` and `remark-gfm`
- **Typography**: Google Fonts (Geist, Outfit, Plus Jakarta Sans)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/adityapawar112/ScaleERP-Web.git
   cd ScaleERP-Web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   *(For local testing without Supabase, the app will run with mock fallbacks for documentation and marketing pages).*

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the portal.

---

## 📂 Project Structure

```
ScaleERP-Web/
├── docs/
│   └── scaleerp-web-content/     # Markdown documentation categories & articles
├── public/                       # Static branding assets and icons
├── src/
│   ├── app/                      # Next.js App Router (pages & API routes)
│   │   ├── api/v1/licensing/     # License activation & heartbeat sync endpoints
│   │   ├── api/v1/admin/         # Key generation & management endpoints
│   │   ├── docs/                 # Dynamic documentation routes ([category]/[slug])
│   │   ├── resources/            # Knowledge hub & business articles
│   │   └── product/              # Feature highlights & use-case breakdowns
│   ├── components/               # Reusable UI, layout & docs components
│   └── lib/                      # Supabase client, doc loader & crypto helpers
└── tailwind.config.js            # Design tokens and theme configuration
```

---

## 📄 License
MIT License. Developed by Aditya Pawar.
