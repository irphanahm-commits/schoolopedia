# Schoolopedia — The Education Encyclopedia

> **Learn what you need today. Discover what you can become tomorrow.**\
> `schoolopedia.com`

Schoolopedia is a curriculum-aware, free education platform designed to answer:
> **Mujhe kya padhna hai? → Kaise padhna hai? → Aage kya karna hai?**

---

## 1. Zero-Cost-First Architecture

Operating strictly under a **₹0 initial operating budget**, Schoolopedia leverages zero-cost-first edge primitives:

- **Edge Runtime & APIs:** Cloudflare Workers (TypeScript / Hono)
- **Database (Canonical State):** Cloudflare D1 (Serverless SQLite)
- **Search (Search Projection):** SQLite FTS5 with automated triggers
- **Caching Layer:** Cloudflare KV (Read cache projection with conservative TTLs)
- **Object Storage:** Cloudflare R2 (Snapshots, raw curriculum documents)
- **Async Processing & Outbox:** D1 Job Outbox Pattern scheduled via Cloudflare Cron Triggers
- **Monorepo:** pnpm Workspaces + Turborepo

---

## 2. Monorepo Structure

```text
schoolopedia/
├── apps/
│   ├── web/                    # Next.js Learner Web Application
│   └── admin/                  # Next.js Admin Operations Console
├── workers/
│   ├── api/                    # Cloudflare Edge API Worker (Hono)
│   └── processor/              # Background Job & Outbox Worker
├── packages/
│   ├── types/                  # Shared TypeScript domain contracts
│   ├── config/                 # Platform constants & free-tier guardrails
│   ├── validation/             # Runtime Zod validation schemas
│   ├── database/               # D1 repositories & context factory
│   └── observability/          # Structured JSON logging & audit events
├── migrations/
│   └── 0001_initial_schema.sql # Canonical D1 relational schema (38 tables + FTS5)
├── seeds/
│   └── 0001_california_grade8_math_linear_equations.sql # First vertical slice
├── tests/
│   └── unit/                   # Native Node.js 24 test runner suite
├── wrangler.toml               # Cloudflare configuration
└── turbo.json                  # Turborepo task orchestration
```

---

## 3. First Production Vertical Slice

**USA → California → Public School System → 2026–27 → Grade 8 → Mathematics → Linear Equations**

- **Official Authority:** California Department of Education (CDE)
- **Standard:** `CCSS.MATH.CONTENT.8.EE.C.7` (Solve linear equations in one variable)
- **Lesson:** Solving Linear Equations in One Variable (Structured pedagogical blocks)
- **Resources:** Curated YouTube video mappings (Khan Academy primary, Math Antics backup)
- **Practice:** Interactive step-by-step practice problems with feedback
- **Quiz:** 5-question comprehensive quiz scored deterministically by the server
- **Mastery:** Server-side mastery evaluation (`NOT_STARTED → NEEDS_REVIEW → MASTERED`)
- **Search:** Synchronized into SQLite FTS5 search index

---

## 4. Quick Start & Development

### Prerequisites
- Node.js >= 20 (Tested on Node.js v24.15.0)
- pnpm >= 10 (Installed via Corepack or npm)
- Cloudflare Wrangler CLI

### Installation
```bash
pnpm install
```

### Build All Packages
```bash
pnpm build
```

### Run Automated Tests
```bash
pnpm test
```

### Local Database Migrations & Seeding
```bash
# 1. Apply D1 schema migration locally
npx wrangler d1 migrations apply schoolopedia-db --local

# 2. Seed California Grade 8 Math vertical slice
npx wrangler d1 execute schoolopedia-db --local --file=seeds/0001_california_grade8_math_linear_equations.sql

# 3. Query local database
npx wrangler d1 execute schoolopedia-db --local --command="SELECT title, canonical_url FROM search_documents_fts WHERE search_documents_fts MATCH 'linear*'"
```
