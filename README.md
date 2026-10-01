<div align="center">

  <img src="public/brand/app-icon-squircle-green.png" alt="ScaleERP Web Logomark" width="96" height="96" />

  <h1>ScaleERP Web</h1>

  <p><b>Cloud control plane, cryptographic licensing authority, and knowledge portal for the ScaleERP ecosystem.</b></p>

  <p>
    <a href="https://scaleerp.vercel.app"><img src="https://img.shields.io/badge/Production_URL-scaleerp.vercel.app-2563eb?style=flat-square&logo=vercel&logoColor=white" alt="Production URL" /></a>
    <a href="https://github.com/adityapawar112/ScaleERP-Desktop"><img src="https://img.shields.io/badge/Desktop_Repo-ScaleERP--Desktop-059669?style=flat-square&logo=electron&logoColor=white" alt="Desktop Repo" /></a>
    <img src="https://img.shields.io/badge/Framework-Next.js_15.1-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
    <img src="https://img.shields.io/badge/Frontend-React_19-0284c7?style=flat-square&logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/Backend-Supabase_PostgreSQL-3ecf8e?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Styling-Tailwind_CSS_3.4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Language-TypeScript_5.7-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/License-MIT-64748b?style=flat-square" alt="License" />
  </p>

  <p>
    <a href="https://scaleerp.vercel.app"><b>Live Cloud Portal</b></a> &nbsp;•&nbsp;
    <a href="https://github.com/adityapawar112/ScaleERP-Desktop"><b>Desktop Client Repository</b></a> &nbsp;•&nbsp;
    <a href="#-licensing-lifecycle--sequence-architecture"><b>Licensing Architecture</b></a> &nbsp;•&nbsp;
    <a href="#-api-endpoint-specifications"><b>API Reference</b></a> &nbsp;•&nbsp;
    <a href="#-environment-configuration"><b>Environment Setup</b></a>
  </p>

</div>

---

## ⚡ Role in the ScaleERP Ecosystem

ScaleERP-Web provides the cloud management and licensing layer for the ScaleERP ecosystem without compromising the client application's offline independence. It fulfills three critical functions:

1. **Cryptographic Root of Trust**: Securely stores the RSA-2048 private key in isolated server environments. It signs canonical JSON payloads to mint machine-bound `.lic` license files for the [ScaleERP-Desktop](https://github.com/adityapawar112/ScaleERP-Desktop) client.
2. **Entitlements & Telemetry Server**: Maintains tenant records, active hardware bindings, and chronometric audit logs in Supabase PostgreSQL, enforcing device quotas and detecting client clock tampering.
3. **Marketing & Knowledge Hub**: Serves dynamic markdown documentation, industry operational guides, and SEO metadata routes (`robots.ts`, `sitemap.ts`, and structured AI engine directives in `llms.txt`).

---

## 🏛️ Ecosystem Topology

The web portal interacts with the offline desktop client through a structured cryptographic handshake:

<div align="center">
  <img src="public/assets/scaleerp-architecture.svg" alt="ScaleERP Cloud Architecture" width="100%" />
</div>

---

## 🔐 Licensing Lifecycle & Sequence Architecture

The licensing engine decouples license issuance from daily client runtime. The desktop app contacts ScaleERP-Web only for initial machine activation and periodic background synchronization.

```mermaid
sequenceDiagram
    autonumber
    participant C as ScaleERP Desktop Client
    participant API as Next.js API (/api/v1/licensing)
    participant PG as Supabase PostgreSQL
    participant RSA as RSA Private Key Engine

    Note over C,API: 1. Machine-Bound Activation Flow
    C->>API: POST /activate { activationKey, deviceFingerprint, hostname }
    API->>PG: Query license_keys where key_code = activationKey
    alt License Not Found or Expired
        API-->>C: 403 / 404 Error (Invalid Key or Expired)
    else Device Quota Reached (active_devices >= max_devices)
        API-->>C: 403 Forbidden (Device Limit Reached)
    else Valid Activation
        API->>RSA: signLicense(payload) using RSA-PSS SHA-256
        RSA-->>API: Base64 Signed Envelope (.lic)
        API->>PG: Insert device_activations & increment active_devices
        API->>PG: Write SUCCESS to activation_logs
        API-->>C: 200 OK { licenseBlob, validUntil, edition }
    end

    Note over C,API: 2. Periodic Heartbeat & Anti-Tamper Check
    C->>API: POST /sync-heartbeat { key, fingerprint, clientSystemTime, dbState }
    API->>PG: Verify active device binding
    alt Clock Rewind (> 24h negative chronometric shift)
        API->>PG: Log SECURITY_TAMPER_LOCK to client_heartbeats
        API-->>C: 200 OK { securityLockout: true, reason: "CLOCK_REWIND_DETECTED" }
    else Database Manipulation (local expiry > cloud expiry)
        API->>PG: Log SECURITY_TAMPER_LOCK to client_heartbeats
        API-->>C: 200 OK { securityLockout: true, reason: "DATABASE_MANIPULATION_DETECTED" }
    else Normal Synchronization
        API->>PG: Update last_sync_at in device_activations
        API-->>C: 200 OK { securityLockout: false, serverTime }
    end
```

---

## 📡 API Endpoint Specifications

All endpoints are built using Next.js 15 App Router route handlers with strict payload validation:

| Endpoint | Method | Auth Required | Description |
| :--- | :---: | :---: | :--- |
| `/api/v1/licensing/activate` | `POST` | Public Key Code | Verifies device fingerprint, allocates device quota, and returns an RSA-signed `.lic` blob. |
| `/api/v1/licensing/sync-heartbeat` | `POST` | Hardware Token | Audits workstation time drift and local database validity against Supabase master records. |
| `/api/v1/licensing/demo` | `POST` | None | Issues a temporary 14-day evaluation license bound to the requesting machine's fingerprint. |
| `/api/v1/admin/generate-keys` | `POST` | `x-admin-secret` | Administrative endpoint to mint batches of randomized serial keys with specific device quotas. |
| `/api/v1/download` | `GET` | None | Directs users to the latest packaged desktop binaries on GitHub Releases with local fallback. |

### Activation Payload Example

```bash
curl -X POST https://scaleerp.vercel.app/api/v1/licensing/activate \
  -H "Content-Type: application/json" \
  -d '{
    "activationKey": "SERP-9482-1049-5820",
    "deviceFingerprint": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "hostname": "GODOWN-COUNTER-01",
    "customerName": "Maharashtra Agro Feeds"
  }'
```

---

## 🛠️ Environment Configuration

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

| Variable Name | Required | Default / Description |
| :--- | :---: | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project REST endpoint URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Public Supabase anonymous API key for client queries. |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Elevated service role key for bypassing RLS during activation and heartbeat writes. |
| `RSA_PRIVATE_KEY` | Optional | PKCS#8 PEM string of the RSA-2048 private key. *If omitted in development, generates an ephemeral in-memory 2048-bit key automatically.* |
| `ADMIN_SECRET` | Yes | Shared secret required in `x-admin-secret` header for key generation routes. |

---

## 💻 Developer Setup & Build Verification

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/adityapawar112/ScaleERP-Web.git
cd ScaleERP-Web
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portal.

### 3. Verify TypeScript & Build Output
```bash
# Type check all App Router pages and API routes
npx tsc --noEmit

# Compile production bundle
npm run build
```

---

## 📂 Project Directory Structure

```
ScaleERP-Web/
├── docs/                        # Dynamic markdown content
│   └── scaleerp-web-content/    # Structured guides, articles, and documentation
├── public/                      # Static branding, architecture diagrams & AI directives
│   ├── assets/                  # Architecture graphics and screenshots
│   ├── brand/                   # Official application squircle and logomark assets
│   ├── llms.txt                 # Structured summary for AI search engines (Perplexity, GPT)
│   └── llms-full.txt            # Complete knowledge bundle for LLM evaluation
├── src/
│   ├── app/                     # Next.js 15 App Router
│   │   ├── api/v1/licensing/    # Activation and heartbeat sync endpoints
│   │   ├── api/v1/admin/        # Key generation and administrative routes
│   │   ├── docs/                # Dynamic documentation category routes
│   │   ├── resources/           # Educational business articles
│   │   ├── robots.ts            # Dynamic robots.txt with AI search bot permissions
│   │   └── sitemap.ts           # Dynamic XML sitemap generator
│   ├── components/              # Radix UI, Lucide React, and navigation components
│   └── lib/                     # Supabase client, doc parser, and RSA crypto helper
└── tailwind.config.js           # Design tokens, typography, and dark mode configuration
```

---

## ⚖️ License

ScaleERP Web is open source software licensed under the [MIT License](LICENSE).
