# System Patterns

## Architecture
- Unified Frontend & Backend Application using Next.js App Router (React 19 & TypeScript).
- Backend APIs run as Vercel Serverless Functions via Next.js Route Handlers.
- Master Database queries handled securely on the server-side via Supabase client library.
- Component-driven frontend architecture using Shadcn UI.

## Key Technical Decisions
- Use TailwindCSS for styling to align with Shadcn UI requirements.
- Maintain cryptographic isolation: Desktop Electron client embeds the RSA Public Key, while the Next.js Vercel backend holds the RSA Private Key.
- Enforce strict database validations:
  - Format checks on 16-digit activation keys.
  - Active device quota checks (`active_devices < max_devices`).
  - Tamper indicators: clock rewind detection and client database timestamp alteration checks.

## Component Relationships
- `src/app` Next.js App Router structure.
- `src/app/api/v1/...` for serverless backend routes.
- `src/lib/supabase.ts` for database connections.
- `src/lib/licensing.ts` for RSA signature utilities.
- `src/components/ui` for base Shadcn components.
- `src/components/shadcn-space` for premium Shadcn Space blocks.
