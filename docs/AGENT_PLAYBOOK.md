# AI Agent Playbook & Onboarding Guide

> **Audience:** Future AI agents, autonomous subagents, and software engineers working on Schoolopedia.

---

## 1. Golden Rules
1. **Light Theme by Default**: All web UI must use the StudentClass light-theme aesthetic (soft `#F8FAFC` slate canvas, pure white elevated cards, `#4F46E5` royal indigo, `#FF5757` coral, and soft pastel category containers). Never revert to dark glassmorphism.
2. **Zero-Cost Free Tier Integrity**: Never introduce paid cloud infrastructure (e.g. AWS, paid databases, expensive server instances). Schoolopedia runs 100% on Cloudflare Free Tier (Workers, Pages, D1, KV, R2) and GitHub Free Actions.
3. **No Dead Videos**: Never commit a video without verifying its embeddability. Test YouTube oEmbed with:
   ```bash
   node -e "fetch('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEO_ID&format=json').then(r=>console.log(r.status))"
   ```
4. **Deterministic Server-Side Grading**: Always keep quiz grading on the server/worker. Never send `is_correct: true` to the client in initial question fetches.

---

## 2. Essential CLI Commands

### Testing & Types
```bash
# Run unit tests (scoring engine & Zod validation)
pnpm test

# Run TypeScript typechecks across all packages and apps
pnpm typecheck

# Build the Next.js static production export
pnpm --filter @schoolopedia/web build
```

### Cloudflare Edge & D1 Migrations
```powershell
# Always unset API token and set Account ID in PowerShell when executing D1 queries with OAuth:
$env:CLOUDFLARE_API_TOKEN=$null; $env:CLOUDFLARE_ACCOUNT_ID="9b2f971abeb38bbf1bfae9aeb089e551"

# Query remote D1
npx wrangler d1 execute schoolopedia-db --remote --command "SELECT count(*) FROM lessons;"

# Apply migration to remote D1
npx wrangler d1 execute schoolopedia-db --remote --file=./migrations/0002_tier1_pathways_institutions_opportunities.sql

# Seed remote D1
npx wrangler d1 execute schoolopedia-db --remote --file=./seeds/0002_tier1_core_jurisdictions.sql
```

### Production Deployment
```bash
# Deploy API Worker to Cloudflare
cd workers/api && npx wrangler deploy

# Deploy Web App Static Assets to Cloudflare
cd apps/web && npx wrangler deploy
```

---

## 3. Git & CI/CD Pipeline
- Repository: `https://github.com/irphanahm-commits/schoolopedia`
- Always push to `main` branch.
- GitHub Actions automatically validates types, runs tests, and deploys both the Edge API Worker and Web App to Cloudflare.
