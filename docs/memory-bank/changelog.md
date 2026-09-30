# Changelog

All notable changes to this project will be documented in this file.

## [0.3.0] - 2026-08-04
### Added
- Created dedicated overview pages for `/product`, `/product/features`, and `/product/use-cases` (replacing previous redirects).
- Extracted and implemented a shared `<ProductPattern />` component using CSS SVG alpha masking.
- Injected the new topographic SVG pattern into the hero sections of all 12 product feature and use-case subpages.

## [0.2.0] - 2026-05-26
### Added
- Created dark-themed Route Group layout for `(portal)` routes.
- Configured Google Font presets `Bebas Neue` and `Public Sans` via `next/font/google`.
- Added custom font utilities in `globals.css` to map font variables.
- Implemented `/activate` interactive page with query-param prefill, input auto-hyphenation, fetch integration, and automatic file download triggers.
- Updated task and implementation documentation.
- Implemented `/about` marketing page with responsive bento-grids, localized text, and forced dark mode engineering section.
- Implemented `/contact` marketing page with localized communication options.

## [0.1.0] - 2026-05-26
### Added
- Migrated codebase from Vite SPA to Next.js App Router.
- Configured tsconfig and Next.js compiler settings.
- Integrated `@supabase/supabase-js` database connections.
- Implemented RSA-PSS SHA-256 license cryptographic signature generation (`licensing.ts`).
- Created `/api/v1/licensing/activate` backend route for device binding.
- Created `/api/v1/licensing/sync-heartbeat` backend route for tamper check and renewals.
- Created `/api/v1/inquiries` backend route for lead forms.
- Created `/api/v1/blogs` backend route for resources catalog.
- Added scratch `test-endpoints.js` validator script to verify local APIs.

### Changed
- Deleted Vite configuration files (`vite.config.ts`, `index.html`, etc.).
- Relocated styling to `globals.css` inside the `src/app` route structure.
- Fixed TypeScript compile issues inside standard button component.
