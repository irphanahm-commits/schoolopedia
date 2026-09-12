# Schoolopedia — Master Project State & Continuity Dossier

> **Status:** Production Live & Continuously Maintained  
> **Last Updated:** September 12, 2026  
> **Primary Domains:**  
> - Frontend: `https://schoolopedia.com` / `https://www.schoolopedia.com` (Cloudflare Edge Pages / Workers Assets)  
> - API Edge Worker: `https://api.schoolopedia.com` / `https://schoolopedia-api.irphanahm.workers.dev`  
> - Direct Edge Preview: `https://schoolopedia-web.irphanahm.workers.dev`  
> **Repository:** `https://github.com/irphanahm-commits/schoolopedia` (`main` branch)

---

## 1. Executive Summary for Future AI Agents & Developers

Schoolopedia is a **curriculum-aware living education encyclopedia** built for **Tier 1 countries** (USA, Canada, United Kingdom, Australia, New Zealand).

It solves the primary learner question:  
> **What do I need to learn? → How do I learn it? → What can I do next?**

This document guarantees that **any AI agent, developer, or pair programmer** can instantly understand the system state, architecture, database schemas, deployment pipelines, and zero-cost Cloudflare setup, and continue building without regression or context degradation.

---

## 2. Infrastructure & Zero-Cost Architecture

All services operate within the **Cloudflare Free Tier** ($0/month operational budget):

| Component | Technology | Binding / Resource ID | Free Tier Limits | Production URL |
| :--- | :--- | :--- | :--- | :--- |
| **Relational Database** | Cloudflare D1 (SQLite) | `schoolopedia-db`<br>`6741d7ad-17d9-4142-a02a-9e77b33f0ad3` (APAC / Singapore) | 5M read rows/day<br>100k write rows/day | Direct binding in Worker |
| **KV Edge Cache** | Cloudflare KV | `schoolopedia-cache`<br>`4970ba5253824a28895b5f2467eca85f` | 100k read ops/day<br>1k write ops/day | Cache-first for curriculum trees |
| **Blob / Snapshot Storage** | Cloudflare R2 | `schoolopedia-snapshots` | 10GB storage<br>1M Class B ops/month | Source snapshots, curriculum PDFs |
| **API Edge Worker** | Cloudflare Workers + Hono | `schoolopedia-api` | 100k req/day | `https://schoolopedia-api.irphanahm.workers.dev`<br>`https://api.schoolopedia.com` |
| **Web Frontend** | Next.js 15 (Static Export) + Vanilla CSS | `schoolopedia-web` | Unlimited asset bandwidth | `https://schoolopedia-web.irphanahm.workers.dev`<br>`https://schoolopedia.com` |
| **CI / CD** | GitHub Actions | `.github/workflows/deploy.yml` | 2,000 min/month free | Auto-deploys Worker + Web on push to `main` |

---

## 3. Monorepo Structure

```text
schoolopedia/
├── apps/
│   └── web/                     # Next.js 15 web app (StudentClass light-theme edtech UI)
│       ├── src/
│       │   ├── app/             # App router (/learn, /explore, /guidance, /opportunities)
│       │   ├── components/      # Header, Footer, VideoPlayer, ContentBlocks, PracticeRunner, QuizRunner
│       │   └── styles/          # globals.css (light theme tokens, pastel utility classes)
│       ├── wrangler.toml        # Cloudflare Pages / Static Assets deployment config
│       └── out/                 # Static HTML/JS/CSS exported bundle
├── workers/
│   └── api/                     # Cloudflare Worker API router (Hono v4)
│       ├── src/                 # Endpoints, cron jobs (video health), middleware
│       └── wrangler.toml        # D1, KV, R2 bindings & scheduled crons
├── packages/
│   ├── types/                   # Canonical domain interfaces (Curriculum, Assessments, Learner, Careers)
│   ├── config/                  # Quota thresholds, TTLs, scoring weights
│   ├── validation/              # Runtime Zod schemas for submissions and requests
│   ├── observability/           # Structured JSON logger & audit telemetry
│   └── database/                # D1 query repositories & SQLite FTS5 search
├── migrations/                  # Canonical SQL D1 schema migrations
│   ├── 0001_initial_schema.sql  # 38 tables: Curriculum, Lessons, Videos, Assessments, FTS5
│   └── 0002_tier1_pathways_institutions_opportunities.sql # Institutions, Careers, Pathways, Opportunities
├── seeds/                       # Canonical SQL seed datasets
│   ├── 0001_california_grade8_math_linear_equations.sql # Full vertical slice
│   └── 0002_tier1_core_jurisdictions.sql # USA, UK, Canada, Australia, New Zealand
├── docs/                        # In-repository continuity records
│   ├── PROJECT_STATE.md         # This living file
│   ├── TIER1_CURRICULUM_MATRIX.md # Multi-country curriculum authority & grade mappings
│   └── AGENT_PLAYBOOK.md        # AI agent instructions & command cheat-sheet
├── tests/                       # Unit and deterministic grading tests
├── SCHOOLOPEDIA_MASTER_SPEC.md  # Original master specification document
└── pnpm-workspace.yaml          # Monorepo package bindings
```

---

## 4. UI / UX Design System (StudentClass Light Theme)

All user interfaces strictly follow the **StudentClass EdTech Light-Theme**:
- **Background**: Slate-50 `#F8FAFC` to `#F4F6FB` (never dark mode).
- **Cards & Surfaces**: Pure White `#FFFFFF` with `16px–24px` border radius and soft drop shadow `0 8px 24px -4px rgba(79, 70, 229, 0.06)`.
- **Primary Color**: Royal Indigo `#4F46E5` / `#4338CA`.
- **Action Highlight**: Coral `#FF5757`.
- **Success & Verified**: Emerald `#10B981`.
- **Pastel Category Tints**:
  - Mathematics: `#EEF2FF`
  - Science: `#E0F2FE`
  - Language Arts: `#ECFDF5`
  - Social Studies: `#FEF3C7`
- **Typography**: Dark charcoal `#0F172A` for titles and readable slate `#334155` for body text.

---

## 5. Active Cloudflare Credentials & Authentication

- The local machine has an authenticated OAuth session with Cloudflare associated with `irphanahm@gmail.com`.
- **Account ID**: `9b2f971abeb38bbf1bfae9aeb089e551`
- When running `wrangler d1 execute ... --remote` in PowerShell:
  - Clear any overriding env token: `$env:CLOUDFLARE_API_TOKEN=$null; $env:CLOUDFLARE_ACCOUNT_ID="9b2f971abeb38bbf1bfae9aeb089e551"`
- In GitHub Actions:
  - Secrets `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` are populated in `irphanahm-commits/schoolopedia`.

---

## 6. Video Recommendation Policy & Health Checks

- **Every lesson has a Primary Video and at least 1 Backup Video.**
- Primary videos MUST have active YouTube embeds.
- Current active Grade 8 Linear Equations primary: `f15zA0PhSek` (*Introduction to solving an equation with variables on both sides* — Khan Academy).
- Current backup 1: `Qyd_v3DGzTM` (*Algebra Basics: Solving Basic Equations Part 2* — Math Antics).
- Automated cron job runs every 6 hours (`0 */6 * * *`) to query YouTube oEmbed and promote Backup to Primary if a video is unavailable.
