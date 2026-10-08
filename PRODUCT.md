# ScaleERP — Product Specification & Requirements

<!-- scaleerp:product-spec 1.0 -->

## Platform
Modern Web Platform & Customer Documentation Portal (`ScaleERP-Web`), synchronized with the offline-first desktop application (`ScaleERP-Desktop`).

## Primary Target Users
1. **General Wholesalers & Commercial Distributors**: Wholesale businesses, distributors, and godown managers across Tier-2/Tier-3 commercial hubs managing diverse product lines (FMCG, hardware, textiles, building materials, agricultural supplies, packaged commodities) who require rapid checkout and 100% offline resilience.
2. **Wholesale Intermediaries & Broker Networks**: Supply brokers and commission agents facilitating multi-party wholesale trade, tracking commission, freight/hamali deductions, and split supplier credit balances.
3. **High-Volume Counter Retailers & Shop Managers**: Retailers operating fast-paced billing counters where internet dropouts cannot be tolerated.
4. **Engineering Evaluators & Recruiters**: Technical hiring managers and systems architects reviewing high-velocity full-stack desktop/web architecture.

## Product Purpose & Problem Statement
Commercial retail and wholesale operations in regional markets face constant friction:
- Unreliable internet infrastructure causes generic cloud ERPs to freeze at the billing counter.
- Complex enterprise ERP suites (SAP, Zoho, Tally) present steep learning curves, expensive recurrent cloud seat fees, and lack high-speed keyboard-driven counter checkout with multi-manufacturer inventory splits.
- ScaleERP delivers an **offline-first, zero-latency desktop fortress** paired with an **automated cloud telemetry and cryptographic licensing engine**.

## Core Capabilities & Technical Differentiators
- **3-in-1 Unified Engine**: High-speed counter billing (thermal ESC/POS & A4), real-time multi-manufacturer godown inventory tracking, and double-entry customer/broker ledger accounting.
- **Air-Gapped Cryptographic Licensing**: Asymmetric RSA-2048 signing protocol with hardware machine-fingerprint binding and anti-clock-tampering protection.
- **7-Day Operational Grace Mode**: View-only Soft Lock prevents catastrophic business interruption during renewal windows.
- **Automated Cloud Backup**: Scheduled local SQLite database dumps with optional encrypted Google Drive synchronization.
- **Multi-Language Accessibility**: Full localization across English, Hindi (हिंदी), and Marathi (मराठी).

## Technology Architecture
- **Web App**: Next.js 15 (App Router, Server Components), React 19, Tailwind CSS, Radix UI.
- **Backend & Telemetry**: Supabase PostgreSQL with Row Level Security (RLS) and Serverless Edge Functions.
- **Desktop Client**: Electron 41.1.1, React 19.2, SQLite 3 (WAL mode), TypeScript 5.9, Bootstrap 5.3.

## Product Principles
1. **Zero-Latency Resilience**: Counter billing must never block or wait on network requests.
2. **Surgical Precision**: Financial ledgers and inventory balances must maintain strict transactional ACID integrity.
3. **Approachable Modernity**: Clean, high-legibility interface with rich tactile aesthetics, dual light/dark modes, and no unnecessary enterprise bloat.
