# ScaleERP — Product Specification & Requirements

<!-- scaleerp:product-spec 1.0 -->

## Platform
Modern Web Platform & Customer Documentation Portal (`ScaleERP-Web`), synchronized with the offline-first desktop application (`ScaleERP-Desktop`).

## Primary Target Users
1. **Agricultural Wholesalers & Feed Store Retailers**: Shop owners and godown managers across Tier-2/Tier-3 agricultural hubs in India who need rapid checkout and robust offline resilience.
2. **Wholesale Grain & Feed Brokers**: Intermediary broker networks tracking multi-party commission, freight (hamali) charges, and credit balances.
3. **Engineering Evaluators & Recruiters**: Technical hiring managers and systems architects reviewing high-velocity full-stack desktop/web architecture.

## Product Purpose & Problem Statement
Commercial retail and wholesale operations in regional markets face constant friction:
- Unreliable internet infrastructure causes generic cloud ERPs to freeze at the billing counter.
- Complex ERP suites (SAP, Zoho, Tally) present steep learning curves and lack tailor-made wholesale workflows (bag weights, moisture discount, broker deductions).
- ScaleERP delivers an **offline-first, zero-latency desktop fortress** paired with an **automated cloud telemetry and cryptographic licensing engine**.

## Core Capabilities & Technical Differentiators
- **3-in-1 Unified Engine**: High-speed counter billing (thermal ESC/POS & A4), real-time godown inventory tracking, and double-entry broker ledger accounting.
- **Air-Gapped Cryptographic Licensing**: Asymmetric RSA-2048 signing protocol with hardware machine-fingerprint binding and anti-clock-tampering protection.
- **7-Day Operational Grace Mode**: View-only Soft Lock prevents catastrophic business interruption during renewal windows.
- **Automated Cloud Backup**: Scheduled local SQLite database dumps with optional encrypted Google Drive synchronization.
- **Multi-Language Accessibility**: Full localization across English, Hindi (हिंदी), and Marathi (मराठी).

## Technology Architecture
- **Web App**: Next.js 15 (App Router, Server Components), React 19, Tailwind CSS, Radix UI.
- **Backend & Telemetry**: Supabase PostgreSQL with Row Level Security (RLS) and Serverless Edge Functions.
- **Desktop Client**: Electron 34, React 19, SQLite 3 (WAL mode), TypeScript 5.9, Bootstrap 5.

## Product Principles
1. **Zero-Latency Resilience**: Counter billing must never block or wait on network requests.
2. **Surgical Precision**: Financial ledgers and inventory balances must maintain strict transactional ACID integrity.
3. **Approachable Modernity**: Clean, high-legibility interface with rich tactile aesthetics, dual light/dark modes, and no unnecessary enterprise bloat.
