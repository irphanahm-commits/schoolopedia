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

Schoolopedia is a **curriculum-aware living education encyclopedia** built for **all 78 Tier 1 education jurisdictions** across the USA, United Kingdom, Canada, Australia, and New Zealand.

It solves the primary learner question:  
> **What do I need to learn? → How do I learn it? → What can I do next?**

This document guarantees that **any AI agent, developer, or pair programmer** can instantly understand the system state, architecture, database schemas, deployment pipelines, and zero-cost Cloudflare setup, and continue building without regression or context degradation.

---

## 2. Infrastructure & Zero-Cost Architecture

All services operate within the **Cloudflare Free Tier** ($0/month operational budget):

| Component | Technology | Binding / Resource ID | Free Tier Limits | Production URL |
| :--- | :--- | :--- | :--- | :--- |
| **Relational Database** | Cloudflare D1 (SQLite) | `schoolopedia-db`<br>`6741d7ad-17d9-4142-a02a-9e77b33f0ad3` (APAC / Singapore) | 5M read rows/day<br>100k write rows/day | Direct binding in Worker (52 tables active) |
| **KV Edge Cache** | Cloudflare KV | `schoolopedia-cache`<br>`4970ba5253824a28895b5f2467eca85f` | 100k read ops/day<br>1k write ops/day | Cache-first for curriculum trees |
| **Blob / Snapshot Storage** | Cloudflare R2 | `schoolopedia-snapshots` | 10GB storage<br>1M Class B ops/month | Source snapshots, curriculum PDFs |
| **API Edge Worker** | Cloudflare Workers + Hono | `schoolopedia-api` | 100k req/day | `https://schoolopedia-api.irphanahm.workers.dev`<br>`https://api.schoolopedia.com` |
| **Web Frontend** | Next.js 15 (Static Export) + Vanilla CSS | `schoolopedia-web` | Unlimited asset bandwidth | `https://schoolopedia-web.irphanahm.workers.dev`<br>`https://schoolopedia.com` |
| **DNS & Registrar** | Bigrock Registrar → Cloudflare Nameservers | Zone: `schoolopedia.com` | Free DNS & SSL | Apex & `www` point to Workers Assets |
| **CI / CD** | GitHub Actions | `.github/workflows/cloudflare-deploy.yml` | 2,000 min/month free | Auto-deploys Worker + Web on push to `main` |

---

## 3. Tier 1 Jurisdictional Scope & Curriculum Model

Schoolopedia systematically covers **78 primary jurisdictions** across Tier 1 countries:
1. **United States (51 jurisdictions)**: All 50 states + Washington D.C., supporting state frameworks (CCSS, Texas TEKS, Florida B.E.S.T., Virginia SOL, NY NextGen, etc.).
2. **United Kingdom (4 nations)**: England (DfE / KS1–4 & GCSE), Scotland (CfE / Nationals & Highers), Wales (Curriculum for Wales), Northern Ireland (CCEA).
3. **Canada (13 jurisdictions)**: 10 Provinces (Ontario MoE, BC MoE, Alberta Education, Quebec MEQ, etc.) + 3 Territories (Yukon, NWT, Nunavut).
4. **Australia (8 jurisdictions)**: 6 States (NSW NESA, Victoria VCAA, Queensland QCAA, WA SCSA, SA SACE, Tasmania TASC) + 2 Mainland Territories (ACT BSSS, NT) aligned with ACARA v9.0.
5. **New Zealand (2 Pathways)**: English-Medium (The New Zealand Curriculum - NZC) and Māori-Medium (Te Marautanga o Aotearoa - TMoA) across all regions.

### Grade Band Architecture:
- **Elementary / Primary**: Grades K–5 / Years 1–6 / NZC Levels 1–3
- **Middle / Junior High**: Grades 6–8 / Key Stage 3 / Years 7–9 / NZC Levels 4–5
- **High School / Senior Secondary**: Grades 9–12 / Key Stage 4 & Sixth Form / GCSE & A-Levels / Years 10–12 / NCEA Levels 1–3

### 5 Core Subject Pillars:
1. **Mathematics**: Arithmetic, Pre-Algebra, Algebra 1, Geometry, Algebra 2, Pre-Calculus, AP/Calculus, Statistics
2. **Science**: Elementary Science, Life Science / Biology, Chemistry, Physics, Earth & Space Science
3. **English Language Arts**: Foundational Literacy, Reading Comprehension, Literary Analysis, Rhetoric & Argumentative Writing
4. **Social Studies & Civics**: Communities, Civics & Government, US/World History, Economics, Human Geography
5. **Computer Science & AI**: Computational Thinking, Python Programming, Algorithms & Data Structures, Web Development, Cyber Ethics

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
  - Social Studies & Civics: `#FEF3C7`
  - Computer Science: `#F3E8FF`
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
- Primary videos MUST have active YouTube embeds verified via oEmbed.
- Automated cron job runs every 6 hours (`0 */6 * * *`) to query YouTube oEmbed and promote Backup to Primary if a video is unavailable.

### Active Verified Video ID Register:
| Topic & Subject | Grade | Channel | Primary ID | Backup ID |
| :--- | :--- | :--- | :--- | :--- |
| **Linear Equations (Math)** | Grade 8 | Khan Academy / Math Antics | `f15zA0PhSek` | `Qyd_v3DGzTM` |
| **Quadratic Equations (Math)** | Grade 9 | Math Meeting / Khan Academy | `3ayhvAI3IeY` | `f15zA0PhSek` |
| **Cell Biology (Science)** | Grade 9 | Amoeba Sisters / CrashCourse | `8IlzKri08kk` | `0RRVV4Diomg` |
| **Chemical Bonds (Science)** | Grade 10 | CrashCourse Chemistry | `0RRVV4Diomg` | `8IlzKri08kk` |
| **Newton's Laws of Motion (Science)** | Grade 11 | CrashCourse Physics | `kKKM8Y-u7ds` | `8IlzKri08kk` |
| **Constitutional Civics (Civics)** | Grade 8 | CrashCourse US Government | `0bf3CwYCxXw` | `bO7FQsCcbD8` |
| **Python Programming (CS)** | Grade 8/9 | Programming with Mosh | `kqtD5dpn9C8` | `f15zA0PhSek` |
| **Rhetoric & Writing (ELA)** | Grade 10 | Stanford GSB / CrashCourse | `HAnw168huqA` | `0bf3CwYCxXw` |

---

## 7. SEO, AIO (AI Optimization) & AEO (Answer Engine Optimization)

Schoolopedia is engineered as a primary source for both human search engines and AI answer engines (ChatGPT, Perplexity, Claude, Gemini):

### AI Discovery Files:
- `/llms.txt`: Machine-readable markdown index of Schoolopedia's jurisdictional coverage, authority sources, zero-hallucination standards, and API endpoints.
- `/llms-full.txt`: Comprehensive system architecture and curriculum schema specification for LLM crawler indexing.

### Metadata & Indexing Directives:
- `/robots.txt`: Managed statically via `src/app/robots.ts` (`force-static`). Allows all standard search engines and AI crawlers (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`). Blocks non-public `/admin` and internal API worker endpoints.
- `/sitemap.xml`: Dynamically generated via `src/app/sitemap.ts` (`force-static`). Recursively maps root portals, curriculum hubs, all **78 Tier 1 Jurisdictions** (US, UK, CA, AU, NZ), and published educational blog articles.

### Structured Schema (JSON-LD) & Direct Answer Blocks:
- Root layout embeds schema.org `WebSite`, `SearchAction`, and `EducationalOrganization` metadata.
- Curriculum lesson pages embed `schema.org/Course`, `schema.org/LearningResource`, `schema.org/VideoObject`, and `schema.org/FAQPage`.
- **AEO Direct Answer / Fast Facts**: Curriculum pages feature an extractable direct answer callout box containing a single-sentence definition, key formulas, and primary applications to guarantee search engine featured snippet citations.

---

## 8. Educational Updates & Blogging Engine

Located at `/blog` and `/blog/[slug]`:
- **Static Pre-Rendering**: High-speed, zero-cost delivery via Next.js `generateStaticParams`.
- **Article Registry**: Managed in `src/data/blogPosts.ts` with structured metadata (title, summary, date, author, category, read time, canonical slug, full markdown content).
- **Categories**: Policy & Standards, System Architecture, Curriculum Insights, EdTech Innovation.
- **Search & Filter**: Client-side instant keyword search and category pill filtering.
- **Schema & Provenance**: Every article features `schema.org/BlogPosting` JSON-LD, publication provenance, and an actionable "Key Takeaways" summary callout.

---

## 9. Governed Admin Operations Console

Located at `/admin` (non-CRUD, governed domain operations per Master Spec Sections 52–58):
- **Executive Overview (`/admin`)**: Real-time health KPIs (D1 connection status, total standards indexed, official sources tracked, queue backlog, sync freshness).
- **Curriculum Version Control (`/admin/curriculum`)**: Diff comparison between draft revisions and canonical curriculum standards before immutable publishing.
- **Official Source Registry (`/admin/sources`)**: Health monitor for education department authorities (CDE, TEA, DfE, ACARA, Ontario MoE). Features live HTTP HEAD health probes and R2 snapshot verification.
- **Learner Issue Triage (`/admin/reports`)**: Community-reported curriculum errors and video playback issues queue with one-click resolution.
- **Outbox Job Sweeper (`/admin/jobs`)**: Background event dispatch status with manual trigger for outbox event sweeps.
- **Append-Only Audit Log (`/admin/audit`)**: Cryptographically timestamped ledger of all administrative curriculum modifications.

---

## 10. Automated Ingestion & Sweeper Crons

The Cloudflare Edge Worker (`workers/api/src/index.ts`) runs an automated scheduled handler (`scheduled()`) that:
- Periodically executes an HTTP HEAD sweep on all registered official authority URLs.
- Updates latency and availability status in D1 table `official_sources`.
- Dispatches unhandled outbox events in table `outbox_events`.
- Exposes secure administrative endpoints (`/api/v1/admin/overview`, `/api/v1/admin/sources/sweep`, `/api/v1/admin/reports/:id/resolve`) guarded by administrative token authentication.

