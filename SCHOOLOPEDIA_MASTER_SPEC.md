# SCHOOLOPEDIA --- MASTER PRODUCT & TECHNICAL SPECIFICATION

> **Status:** Planning / implementation-ready architecture\
> **Purpose:** This document is the single source of truth for
> Antigravity and future development agents.\
> **Project:** Schoolopedia --- The Education Encyclopedia\
> **Domain:** `schoolopedia.com`

------------------------------------------------------------------------

# 1. EXECUTIVE SUMMARY

Schoolopedia is a free, curriculum-aware education platform designed to
help learners answer:

> **Mujhe kya padhna hai? → Kaise padhna hai? → Aage kya karna hai?**

Working product definition:

> **Schoolopedia is a curriculum-aware education platform that helps
> learners understand what they need to learn, learn it through curated
> resources, and discover what they can do next.**

Core pillars:

1.  **LEARN** --- K--12 curriculum learning
2.  **EXPLORE** --- schools, colleges, universities, programs
3.  **GUIDANCE** --- education/career pathways
4.  **OPPORTUNITIES** --- jobs, internships, apprenticeships,
    scholarships
5.  **INTELLIGENCE** --- AI assistance, curriculum mapping, search,
    recommendations, knowledge graph

Possible positioning:

> **Schoolopedia --- The Education Encyclopedia**

Possible tagline:

> **Learn what you need today. Discover what you can become tomorrow.**

Schoolopedia must feel like a **living education encyclopedia**, not: -
a generic blog, - a YouTube directory, - an LMS, - a social network, -
an AI content farm, - an SEO page generator.

------------------------------------------------------------------------

# 2. PRODUCT NORTH STAR

Primary north-star principle:

> **Did Schoolopedia successfully move a learner one step forward?**

Examples:

-   video → practice → quiz → mastery → next lesson
-   concept explored → lesson started
-   career explored → skills understood → pathway explored
-   school/program researched → comparison/action
-   opportunity viewed → eligibility understood → official source
    visited

Learning journey:

> **Discover → Understand → Learn → Practice → Master → Explore → Choose
> → Prepare → Opportunity**

------------------------------------------------------------------------

# 3. PRIMARY USER

Primary user:

> **Student / learner**

Supporting users: - parents - teachers - curriculum reviewers -
moderators - administrators

Age UX bands:

-   K--4: parent/teacher guided
-   5--7: student + parent guided
-   8--12: student-first
-   13--18: student-first + career exploration
-   18+: education → skills → career → opportunities

These are **UX bands, not legal age determinations**.

Child/minor privacy requirements must be reviewed separately for every
jurisdiction before child accounts or personalized data collection are
expanded.

------------------------------------------------------------------------

# 4. GEOGRAPHIC STRATEGY

Schoolopedia is **not India-first**.

Tier-1 launch geography:

1.  USA
2.  Canada
3.  UK
4.  Australia
5.  New Zealand

Use **Education Jurisdiction** as the curriculum unit, not simply
country.

Planning-level systems:

### USA

50 states plus substantial local/district variation.

### Canada

13 systems: - 10 provinces - 3 territories

### UK

4 major systems: - England - Scotland - Wales - Northern Ireland

### Australia

National framework plus state/territory implementation: - 6 states - 2
territories

### New Zealand

Two major national pathways: - New Zealand Curriculum (English-medium) -
Te Marautanga o Aotearoa (Māori-medium)

Initial planning count is approximately **77 first-level
jurisdiction/system targets**, not 77 complete curricula.

Do NOT build all of them initially.

------------------------------------------------------------------------

# 5. DOMAIN / BRAND

Primary domain:

`schoolopedia.com`

Brand direction:

> Schoolopedia = education encyclopedia + learning navigation +
> education-to-opportunity map.

Before public launch: - perform trademark/brand-conflict review, -
verify domain history/ownership implications, - do not confuse similarly
named sites such as schoolopedia.co.in, schoolopedia.org, or
skoolopedia.com.

------------------------------------------------------------------------

# 6. BUDGET & INFRASTRUCTURE PHILOSOPHY

The initial requirement is strict:

> **₹0 initial operating budget.**

This means: - no mandatory paid API, - no mandatory paid AI, - no paid
teacher features, - no learner subscriptions, - no paywalls, - no
marketplace, - no teacher course monetization, - no creator revenue
share, - no paid placement dependency.

Everything should be free to learners and teachers.

Important distinction:

> **Free to users does not mean free to operate.**

For the initial architecture, however, the system must be designed
around free tiers and zero-cost-capable primitives.

If a free limit is reached:

1.  optimize,
2.  cache,
3.  reduce computation,
4.  batch,
5.  lower low-priority work,
6.  redesign,
7.  find an alternate free mechanism.

Do not silently introduce a paid dependency.

------------------------------------------------------------------------

# 7. PREFERRED TECHNOLOGY STACK

Primary infrastructure:

-   Domain: BigRock
-   DNS/CDN/security: Cloudflare
-   Frontend: Next.js + React + TypeScript
-   Static/edge hosting: Cloudflare Pages
-   API/edge logic: Cloudflare Workers
-   Database: Cloudflare D1
-   Object storage: Cloudflare R2
-   Cache: Cloudflare KV
-   Async processing: Cloudflare Queues
-   Scheduling: Cloudflare Cron Triggers
-   Source control: GitHub
-   CI/CD: GitHub Actions
-   Authentication: provider-agnostic; Supabase Auth is a candidate
-   Video: YouTube embeds/references only
-   Search: D1 + SQLite FTS5 initially
-   AI: provider-agnostic; optional
-   UI: shared React/TypeScript package

Core architecture principle:

> **Cache first → deterministic computation second → AI last.**

AI must never be a hard dependency for core learning.

------------------------------------------------------------------------

# 8. FREE-TIER ARCHITECTURE

The design should fit free-tier constraints as far as practical.

Relevant Cloudflare free-tier targets checked during planning included:

-   Workers Free: approximately 100K requests/day, 10 ms CPU, 128 MB
    memory, 50 external subrequests/request, limited Worker/Cron counts
-   Pages Free: static assets free/unlimited; Functions count as
    Workers; free builds are limited
-   D1 Free: approximately 5M row reads/day, 100K writes/day, 5 GB
    account storage, with per-database limits
-   R2 Free: approximately 10 GB-month storage, 1M Class A/month, 10M
    Class B/month, free internet egress
-   KV Free: approximately 1 GB and daily operation limits
-   Queues Free: approximately 10K operations/day
-   GitHub Free: public/private repositories for personal accounts with
    limited Actions minutes/artifacts
-   Supabase Free: \$0 tier with limited database/storage/egress and
    Auth capabilities

These values are operational planning references and should be rechecked
before production because vendor limits can change.

------------------------------------------------------------------------

# 9. ARCHITECTURE PRINCIPLES

## 9.1 D1 is canonical

D1 owns canonical structured application state.

## 9.2 R2 stores large/raw objects

Examples: - source snapshots, - PDFs, - large documents, - images, -
large teacher files.

## 9.3 KV is cache

KV is never canonical.

## 9.4 Queues transport work

Queues represent work to be processed, not canonical state.

## 9.5 Search is a projection

Search index can be rebuilt from canonical data.

## 9.6 AI is computation

AI can: - classify, - summarize, - map, - suggest, - draft, - rank.

AI cannot establish official truth.

## 9.7 Browser is never trusted

The server calculates: - permissions, - scores, - mastery, -
ownership, - publication state.

## 9.8 External sources are untrusted until validated

Official does not mean runtime-trusted without validation.

## 9.9 Published educational versions are immutable

Corrections create new versions.

## 9.10 Important state changes are audited

Critical changes require actor, action, previous state, new state,
timestamp and context.

------------------------------------------------------------------------

# 10. CURRICULUM ARCHITECTURE

Hierarchy:

> Country → Education Jurisdiction → Education System → Curriculum
> Framework → Curriculum Version → Academic Year → Grade/Level → Subject
> → Course → Unit → Learning Objective → Lesson → Resources

Example:

> USA → California → Public School System → California Curriculum →
> 2026--27 → Grade 8 → Mathematics → Linear Equations

Curriculum is versioned data.

Historical versions must be preserved.

Every curriculum page should expose: - curriculum - academic year - last
verified - official source

------------------------------------------------------------------------

# 11. SOURCE REGISTRY

Each jurisdiction/source needs:

-   jurisdiction
-   authority
-   source type
-   curriculum URL
-   standards URL
-   document URL
-   change/announcement URL
-   API/RSS/open-data location if available
-   parser
-   parser version
-   last checked
-   last successful check
-   status

Source types:

-   API
-   OPEN_DATA
-   CSV
-   JSON
-   XML
-   RSS
-   HTML
-   PDF
-   DOCUMENT
-   MANUAL

Source priority:

1.  official API
2.  official open data
3.  official CSV/JSON/XML
4.  official RSS/announcements
5.  official webpages
6.  official PDFs/documents
7.  manual verification

------------------------------------------------------------------------

# 12. CURRICULUM INGESTION PIPELINE

Pipeline:

> Official Authority → Official Source → Source Registry → Snapshot →
> Parse → Normalize → Diff → Impact Analysis → Review → Verify →
> Curriculum Version → Learning Layer

Source snapshots: - immutable - stored in R2 - metadata in D1 - SHA-256
hash - ETag/Last-Modified when available - MIME type - source locator

Pipeline:

1.  Cron schedules source check
2.  Fetch registered source
3.  Validate redirects/URL
4.  Store snapshot
5.  Calculate hash
6.  If unchanged, stop
7.  If changed, structural diff
8.  Semantic analysis only when needed
9.  Impact analysis
10. Human review if required
11. Verify
12. Create/publish curriculum version
13. Trigger affected content jobs
14. Update search
15. Invalidate caches
16. Notify affected teachers when appropriate

Source failure must not immediately invalidate the last verified
curriculum.

------------------------------------------------------------------------

# 13. CURRICULUM CHANGE STATES

Lifecycle:

> DETECTED → ANALYZING → REVIEW_REQUIRED → VERIFIED → PUBLISHED

Semantic change categories:

-   NO_MEANINGFUL_CHANGE
-   TYPOGRAPHICAL
-   FORMATTING
-   METADATA
-   OBJECTIVE_TEXT
-   OBJECTIVE_ADDED
-   OBJECTIVE_REMOVED
-   OBJECTIVE_REPLACED
-   GRADE_CHANGE
-   SUBJECT_CHANGE
-   COURSE_CHANGE
-   STRUCTURAL_CHANGE
-   MAJOR_REVISION

Severity: - LOW - MEDIUM - HIGH

High-impact changes require human review.

AI confidence only prioritizes review. It never authorizes publication.

------------------------------------------------------------------------

# 14. CURRICULUM LINEAGE

Official objectives should have: - stable internal ID - official code -
version/lineage

Possible lineage relationships:

-   REPLACED_BY
-   SPLIT_INTO
-   MERGED_INTO
-   RENAMED
-   REVISED
-   RETIRED

Mapping migration usually becomes:

> NEEDS_REVIEW

rather than silently remapping everything.

------------------------------------------------------------------------

# 15. LEARNING ENGINE

Core principle:

> **A video is never the product. A lesson is the product.**

Learning path:

> Curriculum Objective → Lesson → Video → Explanation → Practice → Quiz
> → Mastery → Next Lesson

Lesson should have: - title - curriculum context - objective -
explanation - examples - common mistakes - primary resource - backup
resources - practice - quiz - summary - next lesson - related concepts

------------------------------------------------------------------------

# 16. LESSON SPECIFICATION

Objective ≠ lesson.

Before creating a lesson, create a Lesson Specification containing:

-   objective
-   grade
-   curriculum
-   prerequisites
-   concepts
-   learner outcome
-   assessment method
-   next lesson

Lesson types:

-   CONCEPT
-   PROCEDURE
-   PROBLEM_SOLVING
-   REVIEW
-   PRACTICE
-   APPLICATION

Future types may include: - project - lab - simulation

------------------------------------------------------------------------

# 17. CONTENT CREATION PIPELINE

> Official Curriculum Objective → Learning Specification → Existing
> Content Check → Lesson Structure → Resource Discovery → Resource
> Evaluation → Explanation → Examples → Practice → Quiz → QA → Publish →
> Learner

Always check existing content before generating new AI content.

Do not mass-generate millions of pages.

Shared conceptual knowledge can be reused, but curriculum alignment
remains jurisdiction-specific.

------------------------------------------------------------------------

# 18. AI CONTENT GOVERNANCE

AI workflow:

> Objective → Lesson Spec → AI Draft → Structured Output → Deterministic
> Validation → Educational QA → Human Review if needed → Publish

AI must: - use controlled context, - be schema-constrained, - be
grounded, - store provenance, - pass validation.

AI cannot: - invent curriculum, - invent admissions requirements, -
invent scholarship facts, - silently alter official data, - auto-publish
high-risk content.

Lifecycle:

> DRAFT → VALIDATING → REVIEW_REQUIRED → APPROVED → PUBLISHED

------------------------------------------------------------------------

# 19. YOUTUBE / RESOURCE ENGINE

YouTube is a **resource layer**.

Schoolopedia is the **learning layer**.

Video discovery:

> Objective → Query Variants → Candidates → Metadata → Filtering →
> Evaluation → Ranking

Video quality scoring can use configurable weights:

-   curriculum alignment: 30%
-   topic coverage: 20%
-   grade suitability: 15%
-   explanation quality: 15%
-   creator credibility: 10%
-   freshness: 5%
-   availability: 5%

Popularity must not dominate.

Video states:

-   AVAILABLE
-   UNAVAILABLE
-   PRIVATE
-   REGION_RESTRICTED
-   DELETED
-   METADATA_CHANGED

Each Schoolopedia lesson can have: - primary - backup 1 - backup 2

Teacher-selected video is different from
Schoolopedia-verified/recommended video.

Never silently replace teacher-selected videos.

------------------------------------------------------------------------

# 20. PRACTICE VS QUIZ

Practice:

> teaches.

Quiz:

> assesses.

Question bank should be reusable.

Supported initial question types: - MCQ - true/false - numeric - short
answer

MCQ requirements: - exactly one correct answer - plausible distractors -
no duplicate options - no answer clues

Math questions should use deterministic answer validation where
possible.

------------------------------------------------------------------------

# 21. MASTERY

Do not define mastery as watch percentage.

Initial objective-level states:

-   NOT_STARTED
-   NEEDS_REVIEW
-   MASTERED

Mastery is objective-specific.

Deterministic curriculum continuation comes first.

------------------------------------------------------------------------

# 22. LEARNER EXPERIENCE

Core principle:

> **Learner ko Schoolopedia use karne ke liye account ki zarurat nahi
> hogi. Account personalization aur continuity ke liye hoga.**

Anonymous learner can: - browse - search - learn - practice - quiz -
explore careers - explore programs/opportunities

Account enables: - progress - mastery history - saved content -
personalization - continue learning

------------------------------------------------------------------------

# 23. LEARNING CONTEXT

Context:

> country → jurisdiction → education system → curriculum → academic year
> → grade → subject

Example:

> USA → California → Public School System → California Curriculum →
> 2026--27 → Grade 8 → Mathematics

Context can change without destroying history.

Learning goals are separate:

-   FOLLOW_CURRICULUM
-   PREPARE_FOR_ASSESSMENT
-   UNDERSTAND_TOPIC
-   REVIEW_WEAK_AREAS
-   EXPLORE_SUBJECT
-   CAREER_PREPARATION

Default:

> FOLLOW_CURRICULUM

------------------------------------------------------------------------

# 24. PERSONALIZATION

Signals: - learning context - course - completed lessons - attempts -
quiz results - mastery - saved lessons - goal - language/resource
preferences

Do NOT track unnecessarily: - mouse movement - every keystroke - exact
location - camera - microphone - invasive behavioral telemetry

Recommendation order:

> Deterministic next lesson → rules → contextual ranking → AI

------------------------------------------------------------------------

# 25. SEARCH ENGINE

Goal:

> **user intent → correct educational entity → next action**

Search entities: - curricula - grades - subjects - courses - units -
objectives - concepts - lessons - teachers - teacher programs -
careers - institutions - programs - opportunities - resources

Intents: - LEARN - PRACTICE - REVIEW - CURRICULUM - CONCEPT - TEACHER -
CAREER - PROGRAM - SCHOOL - OPPORTUNITY

------------------------------------------------------------------------

# 26. SEARCH ARCHITECTURE

MVP:

> D1 + FTS5 + aliases + structured filters

No Elasticsearch/Algolia initially.

Flow:

> Query → Normalize → Intent → Entity Matching → FTS → Filters → Ranking
> → Results → CTA

Normalization: - lowercase - whitespace - punctuation - common spelling
variants - aliases

Do not over-rewrite meaning.

------------------------------------------------------------------------

# 27. SEARCH RANKING

Possible ranking factors:

1.  text relevance
2.  curriculum relevance
3.  content quality
4.  entity authority
5.  freshness
6.  weak popularity signal

Learner context can influence ranking but must not unnecessarily
restrict discovery.

Search should explain personalization where useful:

> "Recommended for Grade 8 Mathematics."

Search result URLs generally should not be indexed.

------------------------------------------------------------------------

# 28. KNOWLEDGE GRAPH

Do NOT build a graph database initially.

Relational tables form the logical graph.

Relationships:

-   PREREQUISITE_OF
-   RELATED_TO
-   PART_OF
-   TEACHES
-   ASSESSES
-   NEXT
-   ALTERNATIVE_TO
-   MAPPED_TO
-   REQUIRES
-   LEADS_TO

AI may suggest relationships, but validated relationships are required
before becoming canonical.

Long-term graph:

> Concept → Objective → Lesson → Skill → Career → Pathway → Program →
> Institution → Opportunity

------------------------------------------------------------------------

# 29. SEO / DISCOVERY

SEO philosophy:

> **Do not build an SEO website. Build the best educational page first.
> SEO should be a byproduct of good information architecture.**

Deep landing:

> "How to solve linear equations grade 8"

should land on the relevant lesson, not merely the homepage.

Canonical example:

`https://schoolopedia.com/learn/us/california/grade-8/mathematics/linear-equations/`

Academic year belongs primarily in the data/version layer to avoid
annual URL churn.

------------------------------------------------------------------------

# 30. SEO PAGE TYPES

Potential public page types:

-   curriculum
-   grade
-   subject
-   course
-   unit
-   lesson
-   concept
-   teacher
-   teacher program
-   career
-   program
-   institution
-   opportunity

Priority:

1.  lesson
2.  curriculum/course/concept
3.  teacher/career/institution/opportunity
4.  internal/admin pages never indexed

Indexability gate:

> public + published + useful + unique + sufficient content +
> provenance + stable canonical

Thin pages can exist but use:

> `indexable=false`

until useful.

------------------------------------------------------------------------

# 31. STRUCTURED DATA / AI DISCOVERY

Potential truthful schema: - BreadcrumbList - Course -
EducationalOccupationalProgram - Person - Organization - VideoObject -
WebSite - WebPage

Never fabricate: - ratings - reviews - rankings - prices - popularity

For AI search, prioritize: - clear titles - direct answers - curriculum
context - year - source - last verified - related concepts

Do not rely on speculative ranking hacks.

------------------------------------------------------------------------

# 32. TEACHER ECOSYSTEM

Teacher role:

> **Structured curriculum-aligned path creator, not uploader.**

Teacher can create for free: - profile - programs - curriculum mapping -
units - lessons - YouTube resources - notes - PDFs - practice -
quizzes - sharing - preview - publish - versioning

No: - paid teacher plan - paid courses - commissions - marketplace -
student paywall - monetization

------------------------------------------------------------------------

# 33. TEACHER JOURNEY

> Create account → Profile → Create Program → Select Curriculum → Map
> Objectives → Units → Lessons → Resources → Practice → Quiz → Preview →
> Validation → Publish → Share

Verification states:

-   UNVERIFIED
-   PENDING
-   VERIFIED
-   SUSPENDED

Teacher verification is a trust signal, not Schoolopedia endorsement.

------------------------------------------------------------------------

# 34. TEACHER PROGRAM BUILDER

Steps:

1.  Program Info
2.  Curriculum
3.  Mapping
4.  Units
5.  Lessons
6.  Resources
7.  Practice
8.  Quiz
9.  Review
10. Publish

Official curriculum objectives are read-only.

------------------------------------------------------------------------

# 35. TEACHER AI MAPPING

Flow:

> Teacher lesson → AI suggestions + confidence → Teacher
> confirms/rejects

Mapping states:

-   SUGGESTED
-   CONFIRMED
-   REJECTED
-   NEEDS_REVIEW

Manual mapping must always work without AI.

------------------------------------------------------------------------

# 36. TEACHER CONTENT STRUCTURE

Use structured blocks instead of giant free-form page builders:

-   TEXT
-   HEADING
-   EXAMPLE
-   IMAGE
-   VIDEO
-   RESOURCE
-   CALLOUT
-   PRACTICE
-   QUIZ
-   SUMMARY
-   COMMON_MISTAKE

Benefits: - SEO - search - accessibility - AI grounding - curriculum
mapping - versioning - analytics

------------------------------------------------------------------------

# 37. TEACHER PUBLISHING

States:

> DRAFT → READY_FOR_REVIEW → PUBLISHED

Exceptions:

> FLAGGED → SUSPENDED → ARCHIVED

Publishing validation: - metadata - curriculum - mappings - units -
lessons - resources - practice - quiz - safety/content checks

Published versions are immutable.

------------------------------------------------------------------------

# 38. TEACHER MODERATION

Report categories: - incorrect information - curriculum mismatch -
inappropriate content - copyright concern - broken resource - misleading
claim - spam - impersonation

Actions: - KEEP - EDIT_REQUIRED - RESTRICT - SUSPEND - REMOVE

Reports are allegations, not automatic deletion.

Risk-based moderation is preferred over manually reviewing everything.

------------------------------------------------------------------------

# 39. CAREER / PATHWAY SYSTEM

Schoolopedia should be:

> **an education-to-opportunity navigation system, not a career
> prediction site.**

Journey:

> INTEREST → SUBJECTS → CONCEPTS → SKILLS → CAREERS → EDUCATION PATHWAYS
> → PROGRAMS → INSTITUTIONS → OPPORTUNITIES

Career recommendations must never be deterministic.

Career entity: - name - description - family - jurisdiction-specific
profile where needed - sources - verification - last verified

Skills: - KNOWLEDGE - TECHNICAL - COGNITIVE - COMMUNICATION -
PRACTICAL - DIGITAL - DOMAIN

------------------------------------------------------------------------

# 40. PATHWAYS / PROGRAMS / INSTITUTIONS

Pathways can branch and have alternatives.

Types may include: - degree - diploma - certificate - apprenticeship -
vocational - self-directed - transfer - professional

Programs: - institution - name - description - type - credential -
duration - jurisdiction - official URL - status - last verified

Institutions: - name - type - jurisdiction - country - website - source
data

Do not build rankings in MVP.

Never fabricate: - tuition - acceptance rates - placement claims -
reviews - rankings

------------------------------------------------------------------------

# 41. OPPORTUNITIES

Opportunity types: - scholarship - internship - apprenticeship - job -
competition - fellowship - summer program - volunteer

Lifecycle:

> DISCOVERED → VALIDATING → PUBLISHED → OPEN → CLOSING_SOON → CLOSED →
> ARCHIVED

Also allow: - RETRACTED

Fields should include: - application open - deadline - eligibility -
last checked - source - status

Never show expired opportunities as active.

------------------------------------------------------------------------

# 42. TRUST & PROVENANCE

Trust principle:

> **Trust should be demonstrated, not claimed.**

Distinguish:

1.  official fact
2.  Schoolopedia-authored explanation
3.  teacher-created content
4.  AI-generated suggestion

Source ≠ author.

Provenance fields: - source - snapshot - locator - extraction method -
verified at - verified by - verification status

Source tiers:

1.  official authority
2.  official institution/professional body
3.  recognized reliable dataset/organization
4.  curated secondary
5.  teacher/user content

AI is not a source tier.

------------------------------------------------------------------------

# 43. TRUST STATUSES

Internal:

-   UNVERIFIED
-   SOURCE_CHECKED
-   REVIEWED
-   VERIFIED
-   STALE
-   REVIEW_REQUIRED
-   SUSPENDED

User-facing: - Official source - Schoolopedia explanation -
Teacher-created - Verified from official source - AI-generated
suggestion

"Verified" means verified against a specified source/process at a point
in time. It is not a permanent guarantee.

------------------------------------------------------------------------

# 44. CONTENT FRESHNESS

States:

-   CURRENT
-   REVIEW_DUE
-   STALE
-   RETIRED

Important:

> STALE ≠ FALSE

If source is unavailable: - keep last verified version active, - show
appropriate freshness metadata, - continue monitoring.

------------------------------------------------------------------------

# 45. MODERATION

Workflow:

> Report → Triage → Risk Classification → Review → Decision

Decision: - KEEP - EDIT_REQUIRED - RESTRICT - SUSPEND - REMOVE

High-risk areas: - medical - legal - safety - admissions - licensing -
scholarships - deadlines

High-risk decisions need human review.

------------------------------------------------------------------------

# 46. COPYRIGHT POLICY

Do not host or facilitate: - pirated textbooks - copied paid courses -
leaked exams - unauthorized video copies

Use: - external links - permitted embeds - official resources - OER -
teacher-owned/authorized content

Teacher content terms and licensing must be established before broad
teacher publishing.

------------------------------------------------------------------------

# 47. ANALYTICS

Core principle:

> **Traffic ≠ success. Learning outcome \> time spent/pageviews.**

North star:

> **Successful Learning Progression per active learner**

Learning funnel:

> lesson discovered → opened → started → practice → quiz → pass →
> mastery → next

Metrics: - objective mastery - progression - question correctness -
reports - search success - video availability - teacher program
outcomes - career exploration - opportunity official-source clicks -
source health - queue health - AI usage/quota

Do not optimize for: - pageviews - time-on-site - number of pages -
number of videos - number of teachers - AI requests

------------------------------------------------------------------------

# 48. ANALYTICS EVENT TAXONOMY

Product events:

-   lesson_viewed
-   lesson_started
-   practice_started
-   practice_completed
-   quiz_started
-   quiz_completed
-   objective_mastered
-   next_lesson_started
-   search_performed
-   search_result_clicked
-   career_viewed
-   pathway_viewed
-   program_viewed
-   opportunity_viewed
-   official_link_clicked
-   teacher_program_created
-   teacher_program_published

System events: - job_failed - source_checked - cache_miss -
queue_retry - ai_failure

Do not track invasive unnecessary behavior.

------------------------------------------------------------------------

# 49. OBSERVABILITY

Need: - structured logs - metrics - traces where practical - request
IDs - correlation IDs - queue health - source health - quota health

Track: - p50 - p95 - p99

Queue metrics: - queued - running - completed - failed - retrying -
review - oldest pending age

Incident lifecycle:

> DETECTED → ACKNOWLEDGED → INVESTIGATING → MITIGATED → RESOLVED →
> POST-INCIDENT REVIEW

------------------------------------------------------------------------

# 50. QUOTA PROTECTION

Recommended thresholds:

-   80% → warning
-   90% → reduce low priority
-   95% → pause enrichment
-   critical → core-only

Core-only keeps: - curriculum - lessons - practice - quiz - progress -
basic search

Pause first: - AI enrichment - bulk video discovery - advanced
recommendations - noncritical enrichment

------------------------------------------------------------------------

# 51. NOTIFICATIONS

Principle:

> **No notification is better than a bad notification.**

Values: - useful - relevant - expected - actionable - respectful

Categories: - SYSTEM - LEARNING - TEACHER - CURRICULUM - CAREER -
OPPORTUNITY - SECURITY - MODERATION

MVP: - in-app notifications - security communication - relevant
teacher/curriculum notifications - preferences - dedupe - expiry

Email later if a compliant free mechanism exists.

No: - SMS - WhatsApp - aggressive push - streak notifications -
guilt/shame - manufactured urgency

Notification types: - LEARNING_CONTINUE - LEARNING_COMPLETED -
CURRICULUM_UPDATE - TEACHER_PROGRAM_UPDATE - CAREER_UPDATE -
OPPORTUNITY_MATCH - SECURITY_ALERT - MODERATION_UPDATE - SYSTEM

Use templates rather than free-form AI-generated notifications.

------------------------------------------------------------------------

# 52. ADMIN PLATFORM

Admin is:

> **controlled operations console**

not:

> database editor.

Separate app:

`apps/admin`

but same backend/domain services.

Navigation:

-   Dashboard
-   Education
-   Learning
-   Teachers
-   Learners
-   Careers
-   Trust & Moderation
-   Sources
-   Search
-   Operations
-   AI
-   Analytics
-   Settings

------------------------------------------------------------------------

# 53. ADMIN DASHBOARD

Should answer:

> **"Is Schoolopedia healthy right now?"**

Prioritize:

1.  Critical
2.  Action required
3.  Review
4.  Recent changes
5.  Health
6.  Information

Show: - critical issues - review queue - curriculum changes - failed
jobs - stale sources - broken resources - system health

------------------------------------------------------------------------

# 54. ADMIN CURRICULUM CONTROL CENTER

Admin can: - register sources - inspect source health - inspect
snapshots - inspect diffs - inspect impact - verify curriculum - publish
versions - inspect historical versions

Curriculum publication:

> Review → Validation → Impact Check → Verify → Publish

Never edit canonical curriculum through arbitrary CRUD.

------------------------------------------------------------------------

# 55. ADMIN CONTENT CONSOLE

Manage: - lessons - objectives - concepts - practice - quizzes -
resources - videos

Lesson review page should show: - curriculum mapping - objective -
concepts - explanation - video - practice - quiz - provenance - version
history - trust signals - reports

------------------------------------------------------------------------

# 56. ADMIN TEACHER MANAGEMENT

Admin can: - search teachers - inspect verification state - inspect
programs - review reports - suspend where authorized - restore where
authorized

Teacher verification does not mean all teacher content is endorsed.

------------------------------------------------------------------------

# 57. ADMIN OPERATIONS

Operations console: - jobs - queues - cron - retries - failures -
review/dead-letter

Job lifecycle:

> CREATED → QUEUED → RUNNING → VALIDATING → COMPLETED

Failure:

> FAILED → RETRY → QUEUED

Repeated failure:

> REVIEW_REQUIRED

Also: - CANCELLED

Jobs need: - id - type - status - priority - payload - attempts -
timestamps - error - request/correlation ID

No secrets or unnecessary PII in payloads.

------------------------------------------------------------------------

# 58. ADMIN SECURITY

Never create generic:

`/admin/entity`

or unrestricted:

`/admin/sql`

Use explicit commands:

-   `/admin/curriculum/versions/{id}/verify`
-   `/admin/curriculum/versions/{id}/publish`
-   `/admin/reports/{id}/resolve`
-   `/admin/teachers/{id}/suspend`
-   `/admin/jobs/{id}/retry`

High-risk actions: - require authorization - validation - explicit
confirmation - audit

Very sensitive actions may eventually use two-person approval.

------------------------------------------------------------------------

# 59. AUTHENTICATION / AUTHORIZATION

Core rule:

> **Deny by default → explicitly allow → verify every sensitive action →
> audit important actions.**

Roles: - PUBLIC - LEARNER - TEACHER - MODERATOR - CURRICULUM_REVIEWER -
ADMIN - SUPER_ADMIN - SYSTEM

Permissions are resource/action-specific.

Examples: - lesson:read - lesson:create - lesson:update -
lesson:publish - teacher_program:create - teacher_program:update -
teacher_program:publish - curriculum:read - curriculum:verify -
curriculum:publish - report:resolve - user:suspend - role:assign

Teacher must only modify owned programs.

------------------------------------------------------------------------

# 60. AUTHENTICATION

Provider-agnostic.

Candidate: \> Supabase Auth

Initial: - email/password - magic link - OTP

Later: - social login - other identity options

Security: - secure cookies/sessions - no tokens in URLs - no passwords
in localStorage - no secrets in logs - rate-limit
login/signup/OTP/reset - account enumeration protection - secure
recovery

Public browsing must not require authentication.

------------------------------------------------------------------------

# 61. PRIVACY / SECURITY

Threat model: - credential stuffing - session theft - IDOR - injection -
XSS - malicious uploads - AI prompt injection - SSRF - dependency
compromise - storage misconfiguration - privilege escalation

Rules: - server-side authorization - object-level authorization -
controlled rich text - no arbitrary HTML - URL scheme validation - SSRF
protections - upload validation - private/public R2 separation - minimum
data collection - no sensitive data in logs - environment isolation -
CSRF protection where cookie auth requires it - no custom cryptography

------------------------------------------------------------------------

# 62. AI SECURITY

AI output is untrusted.

AI must not have direct D1 credentials.

External content is also untrusted and can contain prompt injection.

AI should operate through typed services:

> Request → controlled context → AI → schema validation → domain
> validation → review if required

AI cannot: - publish official curriculum - change permissions - delete
canonical data - bypass moderation - deploy arbitrary code - directly
mutate production state

------------------------------------------------------------------------

# 63. DATABASE ARCHITECTURE

One primary D1 database for MVP.

Logical domains:

-   education
-   learning
-   resources
-   assessment
-   teachers
-   learners
-   career
-   sources
-   search
-   operations

Naming: - snake_case - opaque IDs - separate `id` and `slug` - UTC
timestamps - controlled statuses

------------------------------------------------------------------------

# 64. CORE DATABASE TABLES

Education: - countries - jurisdictions - education_systems -
curriculum_frameworks - academic_years - curriculum_versions - grades -
subjects - courses - units

Learning: - learning_objectives - objective_prerequisites - concepts -
objective_concepts - lessons - lesson_versions - lesson_objectives -
lesson_concepts - lesson_prerequisites - lesson_next

Resources: - resources - videos - video_mappings

Assessment: - practices - questions - question_options - quizzes -
quiz_questions

Teacher: - teachers - teacher_programs - teacher_program_versions -
teacher_units - teacher_lessons - teacher_lesson_objectives

Learner: - learners - learner_progress - learner_mastery -
practice_attempts - quiz_attempts

Career: - careers - skills - career_skills - education_pathways -
pathway_skills - pathway_programs - programs - institutions -
opportunities

Sources: - sources - source_snapshots - source_changes - change_impacts

Operations: - jobs - job_runs - recommendations - reports - audit_logs

Search: - search_documents - FTS5 virtual table - entity_aliases

Future useful relations: - objective_skills - lesson_skills -
career_profiles - pathway_steps - opportunity_skills -
opportunity_programs

------------------------------------------------------------------------

# 65. DATABASE RULES

-   foreign keys enabled
-   cautious cascades
-   soft retire educational data
-   version lessons and teacher programs
-   learner progress references exact lesson version
-   published versions immutable
-   corrections create new versions
-   migrations versioned
-   reference seeds separated from curriculum data
-   test database isolated
-   indexes based on actual query patterns
-   JSON only for flexible metadata, not core relational structure
-   transactional publish flows
-   idempotent ingestion

------------------------------------------------------------------------

# 66. API ARCHITECTURE

Base:

`/api/v1`

Layers:

> Request → Route → Authentication → Authorization → Schema Validation →
> Rate Limit → Domain Service → Repository → D1 → Response

API exposes product capabilities, not database internals.

Response:

``` json
{
  "data": {},
  "meta": {}
}
```

List:

``` json
{
  "data": [],
  "meta": {
    "page": 1,
    "page_size": 20,
    "has_next": true
  }
}
```

Error:

``` json
{
  "error": {
    "code": "LESSON_NOT_FOUND",
    "message": "...",
    "request_id": "..."
  }
}
```

Statuses: - 200 - 201 - 204 - 400 - 401 - 403 - 404 - 409 - 422 - 429 -
500 - 503

------------------------------------------------------------------------

# 67. IMPORTANT API ENDPOINTS

Public: - GET `/countries` - GET `/jurisdictions` - GET
`/education-systems` - GET `/curricula` - GET `/grades` - GET
`/subjects` - GET `/courses` - GET `/units` - GET `/objectives` - GET
`/concepts` - GET `/lessons` - GET `/videos` - GET `/practices` - GET
`/quizzes` - GET `/search` - GET `/teachers` - GET `/teacher-programs` -
GET `/careers` - GET `/pathways` - GET `/programs` - GET
`/institutions` - GET `/opportunities`

Critical aggregate:

`GET /api/v1/lessons/{lesson_id}`

should return: - lesson - curriculum context - objectives - concepts -
prerequisites - videos - explanation - practice - quiz - next lessons -
related lessons - trust

Teacher: - GET/PATCH `/me/teacher` - POST `/me/teacher-programs` - PATCH
`/me/teacher-programs/{id}` - POST
`/me/teacher-lessons/{id}/mapping-suggestions` - POST
`/me/teacher-lessons/{id}/mappings/{mapping_id}/decision` - POST
`/me/teacher-programs/{id}/publish`

Learner: - GET `/me` - GET/PATCH `/me/learning-context` - GET
`/me/progress` - GET `/me/mastery` - GET `/me/recommendations` -
GET/POST/DELETE `/me/saved` - POST `/me/lessons/{lesson_id}/complete` -
GET `/practices/{id}` - POST `/me/practices/{id}/attempts` - GET
`/quizzes/{id}` - POST `/me/quizzes/{id}/attempts`

AI: - POST `/lessons/{lesson_id}/ask`

Modes: - EXPLAIN - HINT - SIMPLIFY - EXAMPLE - PRACTICE - REVIEW

Admin: - GET `/admin/dashboard` - GET `/admin/reviews` - GET
`/admin/reports` - GET `/admin/jobs` - GET `/admin/sources` - GET
`/admin/curriculum` - GET `/admin/videos` - GET `/admin/teachers` - GET
`/admin/audit` - explicit domain commands for verification, publishing,
resolving, suspending, retrying

------------------------------------------------------------------------

# 68. API RULES

-   cursor pagination where scale grows
-   allowlisted filters/sorts
-   runtime schema validation
-   idempotency keys for commands
-   public cache where appropriate
-   no cache for private progress/AI state
-   ETag/Last-Modified for stable resources
-   rate limits by category
-   request IDs
-   restrictive CORS
-   CSRF when needed
-   SSRF/XSS/upload protections
-   OpenAPI documentation
-   shared TypeScript contracts

Do not expose a generic third-party developer API automatically.

------------------------------------------------------------------------

# 69. WORKERS / BACKEND PROCESSING

Logical workers:

1.  API Worker
2.  Ingestion Worker
3.  Source Monitor
4.  Learning/Content Worker
5.  Video Worker
6.  Search Worker
7.  Recommendation Worker
8.  AI Worker

But do not over-microservice.

Actual deployment structure:

``` text
workers/
├── api/
├── processor/
├── scheduler/
└── indexer/
```

Processor contains logical job handlers.

------------------------------------------------------------------------

# 70. JOB TYPES

Core jobs: - SOURCE_CHECK - SOURCE_PARSE - CURRICULUM_DIFF -
CURRICULUM_MAPPING - VIDEO_DISCOVERY - VIDEO_EVALUATION -
VIDEO_AVAILABILITY - LESSON_GENERATION - QUIZ_GENERATION -
QUESTION_VALIDATION - SEARCH_INDEX - RECOMMENDATION - QA_CHECK -
CONTENT_REFRESH - CREATE_NOTIFICATION - SEND_EMAIL - SEND_DIGEST

Do not create one queue per job type.

Use a small number of broad priority queues where needed.

------------------------------------------------------------------------

# 71. JOB ENGINE

Lifecycle:

> CREATED → QUEUED → RUNNING → VALIDATING → COMPLETED

Failure:

> FAILED → RETRY → QUEUED

Repeated failure:

> REVIEW_REQUIRED

Also: - CANCELLED

Requirements: - idempotency - dedupe keys - explicit dependencies -
parent/child jobs where needed - concurrency limits - exponential
backoff + jitter - max attempts - dead-letter/review - checkpointing -
batching - heartbeat - stuck-job detection - circuit breakers -
version-aware processing - optimistic state checks - cancellation -
priority handling

------------------------------------------------------------------------

# 72. QUEUE PRIORITY

Highest priority:

1.  critical learner processing
2.  curriculum impact
3.  teacher content
4.  video enrichment
5.  recommendation refresh
6.  AI enrichment

Never allow low-priority AI enrichment to starve core learning.

------------------------------------------------------------------------

# 73. SOURCE PIPELINE

Detailed:

> CRON → SOURCE_CHECK → FETCH REGISTERED SOURCE → SNAPSHOT R2 → HASH →
> PARSE → NORMALIZE → STRUCTURAL DIFF → SEMANTIC ANALYSIS IF NEEDED →
> IMPACT ANALYSIS → REVIEW → VERIFY → CURRICULUM VERSION → CONTENT JOBS
> → QA → PUBLISH → SEARCH/CACHE/RECOMMENDATION UPDATE

PDF: - extraction - tables - structure - OCR when needed -
low-confidence extraction → review

External source content is treated as untrusted input.

------------------------------------------------------------------------

# 74. LEARNING PIPELINE

> Objective → Lesson Spec → Existing Content Check → Draft → Validation
> → QA → Publish

No duplicate AI content.

Question pipeline:

> Objective/Lesson → Question Spec → AI draft if useful → deterministic
> validation → duplicate check → QA → teacher/admin review if needed →
> save

------------------------------------------------------------------------

# 75. SEARCH PIPELINE

> Publish → SEARCH_INDEX job → search_documents → FTS5

Only: - public - published - indexable

Do not index: - drafts - private content - suspended - archived -
generally non-indexable search queries

Search indexing is eventually consistent.

Direct canonical content URL must work immediately after publication.

------------------------------------------------------------------------

# 76. RECOMMENDATION PIPELINE

Recommendations should be deterministic first.

Triggers: - lesson completion - mastery - context change - saved
content - meaningful exploration

Use debouncing/coalescing.

Do not create five recommendation jobs because five events happen within
seconds.

------------------------------------------------------------------------

# 77. NOTIFICATION PIPELINE

Domain event:

> Event → Notification Eligibility → Preference Check → Deduplication →
> Notification

Do not directly send email inside core domain operations.

Use selective outbox/event pattern.

No full event sourcing is required.

------------------------------------------------------------------------

# 78. COMPLETE RUNTIME REQUEST FLOW

Every request:

> Request → Cloudflare → Next.js/API → Authentication → Authorization →
> Validation → Rate Limit → Domain Service → Repository → D1/KV/R2 →
> Response

Only the data required immediately should be synchronous.

------------------------------------------------------------------------

# 79. LESSON OPEN FLOW

Anonymous learner:

> Browser → Edge → Web/API → KV

If cache hit:

> KV → learner-ready projection → response

If cache miss:

> API → D1 → load published lesson + objective + concepts + videos +
> practice + quiz → build projection → KV → response

Do NOT fetch official sources at runtime.

------------------------------------------------------------------------

# 80. QUIZ FLOW

> POST quiz attempt → authenticate → load quiz version → validate
> answers → calculate correctness → store attempt → update objective
> mastery → emit event → response

Browser never submits mastery as truth.

Server calculates: - score - correctness - mastery

------------------------------------------------------------------------

# 81. MASTERED OBJECTIVE FLOW

When objective becomes mastered:

> mastery update → event

Possible downstream effects: - analytics - recommendation refresh -
progress update - notification eligibility

Prefer asynchronous downstream processing.

------------------------------------------------------------------------

# 82. TEACHER PUBLISH FLOW

> Teacher → Create Program → Curriculum → Mapping → Lessons → Resources
> → Practice → Quiz → Validation → Publish

Publish:

> authentication → ownership → validation → version creation → PUBLISHED
> → audit → event → async search indexing

Teacher must only modify owned resources.

------------------------------------------------------------------------

# 83. CURRICULUM UPDATE FLOW

> Cron → source check → snapshot → hash → diff → semantic analysis →
> impact analysis → review → verify → publish → affected content jobs →
> search → cache invalidation → teacher notification

Never let an old job overwrite a newer curriculum version.

------------------------------------------------------------------------

# 84. MODERATION FLOW

> Report → validate → create report → triage → risk → moderator →
> decision → state transition → audit → search/cache side effects →
> notification

AI can assist triage.

AI cannot automatically delete high-risk content.

------------------------------------------------------------------------

# 85. OPPORTUNITY FLOW

> Source → monitor → snapshot → parse → validate → publish → OPEN →
> deadline → CLOSED → ARCHIVED

Deadline transitions can be deterministic.

Conflicting authoritative sources:

> CONFLICT → REVIEW_REQUIRED

Do not average conflicting facts.

------------------------------------------------------------------------

# 86. EVENT / COMMAND MODEL

Command:

> something a user/system asks the system to do.

Event:

> something that happened.

Example:

`PublishTeacherProgram`

produces:

`TeacherProgramPublished`

Important state change pattern:

> **COMMAND → AUTHORIZATION → VALIDATION → TRANSACTION → STATE CHANGE →
> AUDIT → DOMAIN EVENT → ASYNC SIDE EFFECTS**

This is a core architectural invariant.

------------------------------------------------------------------------

# 87. OUTBOX PRINCIPLE

Use selective outbox/event reliability for important domain events.

Example:

> D1 transaction stores state + event → dispatcher → queue

Do not build full event sourcing.

------------------------------------------------------------------------

# 88. FAILURE / DEGRADATION

## KV down

Fallback to D1.

## AI down

Core learning remains available.

## YouTube down

Explanation/practice/backup resources remain.

## Search down

Curriculum navigation remains.

## Recommendation down

Deterministic next lesson remains.

## Email down

In-app notification remains.

## Source down

Last verified source-backed version remains.

## Queue backlog

Low-priority work is delayed first.

## D1 unavailable

Do not fabricate successful writes. Show honest degradation.

------------------------------------------------------------------------

# 89. VERSION SAFETY

Every async job that can affect versioned data should carry version
context.

Before writing:

> Is this still the current version?

If not:

> mark job stale/cancel rather than overwrite newer data.

------------------------------------------------------------------------

# 90. IDEMPOTENCY

Important commands/jobs must be idempotent.

Examples: - publishing twice - indexing same lesson twice - source check
retry - notification retry

Duplicate execution should not corrupt state or create duplicates.

------------------------------------------------------------------------

# 91. MONOREPO STRUCTURE

Recommended:

``` text
schoolopedia/
│
├── apps/
│   ├── web/
│   └── admin/
│
├── workers/
│   ├── api/
│   ├── processor/
│   ├── scheduler/
│   └── indexer/
│
├── packages/
│   ├── types/
│   ├── config/
│   ├── database/
│   ├── validation/
│   ├── auth/
│   ├── curriculum/
│   ├── learning/
│   ├── assessment/
│   ├── resources/
│   ├── teachers/
│   ├── learners/
│   ├── career/
│   ├── search/
│   ├── ai/
│   ├── jobs/
│   ├── observability/
│   └── ui/
│
├── migrations/
├── seeds/
├── scripts/
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── api/
│   ├── workers/
│   └── e2e/
├── docs/
├── .github/workflows/
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
├── turbo.json
├── wrangler.toml
├── .gitignore
├── .env.example
├── README.md
└── LICENSE
```

Use logical boundaries even when deployed as fewer Workers.

------------------------------------------------------------------------

# 92. PACKAGE DEPENDENCY DIRECTION

Preferred:

> types → validation → database → domain packages → apps/workers

Avoid circular dependencies.

Frontend must not duplicate business logic.

Shared contracts: - `packages/types` - `packages/validation`

Database access: - centralized in `packages/database`

AI: - provider abstraction in `packages/ai`

------------------------------------------------------------------------

# 93. DEVELOPMENT WORKFLOW

Git: - short-lived feature branches - `main` always deployable

CI: - lint - typecheck - unit tests - integration tests - API tests -
worker tests - build - migration test - dependency/security checks -
secret scanning

Environments: - dev - staging - production

Separate: - D1 - KV - R2 - secrets

Staging must never use production learner data.

------------------------------------------------------------------------

# 94. MIGRATIONS

Migration files are versioned.

CI must test: - fresh DB - all migrations - reference seeds - core
queries

Prefer backwards-compatible schema changes.

Do not casually rely on schema rollback.

------------------------------------------------------------------------

# 95. AGENT / ANTIGRAVITY RULES

Antigravity and future agents must follow:

> **Agent = logical decision-making role. Worker = execution
> infrastructure.**

Agents may: - inspect approved data - propose changes - create drafts -
create jobs - run tests - generate code within task scope - produce
artifacts

Agents may NOT: - bypass authorization - change production permissions -
delete canonical DB data arbitrarily - modify official curriculum
without governance - publish high-risk AI content without required
review - access secrets unnecessarily - deploy arbitrary code outside
approved workflow - change architecture silently - disable security -
bypass tests - impersonate users/teachers

------------------------------------------------------------------------

# 96. DEFINITION OF DONE

A feature is not complete merely because the UI works.

Definition of Done should consider:

-   schema
-   migration
-   repository
-   domain service
-   validation
-   API
-   frontend
-   authentication/authorization
-   SEO where relevant
-   tests
-   error handling
-   logging
-   cache behavior
-   audit where required
-   documentation
-   failure behavior

Principle:

> **Build the smallest complete system, not the smallest demo.**

------------------------------------------------------------------------

# 97. THINGS NOT TO BUILD NOW

Do NOT prematurely build:

-   social network
-   messaging
-   classroom suite
-   attendance
-   gradebook
-   parent portal
-   payments
-   marketplace
-   teacher monetization
-   native mobile apps
-   offline apps
-   custom video hosting
-   Elasticsearch
-   graph database
-   analytics warehouse
-   recommendation ML
-   complex notification system
-   multi-provider AI orchestration
-   elaborate teacher verification
-   generic CMS
-   generic SQL admin console

------------------------------------------------------------------------

# 98. ADMIN MVP

Build:

1.  login
2.  dashboard
3.  source registry
4.  curriculum versions
5.  curriculum change review
6.  lesson/content management
7.  teacher program moderation
8.  reports
9.  job inspection/retry
10. source health
11. audit logs
12. basic search diagnostics

------------------------------------------------------------------------

# 99. LEARNER MVP

Build:

-   public browsing
-   curriculum navigation
-   lesson
-   video
-   explanation
-   practice
-   quiz
-   mastery
-   next lesson
-   account
-   learning context
-   saved content
-   continue learning
-   deterministic recommendations
-   basic search

------------------------------------------------------------------------

# 100. TEACHER MVP

Build:

-   account
-   profile
-   basic verification state
-   program builder
-   curriculum selection
-   objective mapping
-   units
-   lessons
-   resources
-   practice
-   quiz
-   preview
-   validation
-   publish
-   versioning
-   reports/moderation
-   AI-assisted mapping/drafts, optional

Do NOT build classroom features yet.

------------------------------------------------------------------------

# 101. CAREER / OPPORTUNITY MVP

Later than core learning.

Build initially: - basic career pages - skill relationships - basic
pathways - basic programs - institutions - opportunities -
source/deadline/status - deterministic recommendation

Do not build complex career prediction.

------------------------------------------------------------------------

# 102. FIRST VERTICAL SLICE

The first real product slice is:

> **USA → California → Public School System → 2026--27 → Grade 8 →
> Mathematics → Linear Equations**

It must work end-to-end:

> Curriculum → Objective → Lesson → Video → Explanation → Practice →
> Quiz → Mastery → Next Lesson → Search → Provenance → Basic Analytics

This is more valuable than creating 100 incomplete pages.

------------------------------------------------------------------------

# 103. COMPLETE LEARNER VERTICAL FLOW

``` text
SEARCH
  ↓
LESSON
  ↓
OBJECTIVE
  ↓
VIDEO / EXPLANATION
  ↓
PRACTICE
  ↓
QUIZ
  ↓
MASTERY
  ↓
NEXT LESSON
  ↓
ANALYTICS
  ↓
RECOMMENDATION
```

------------------------------------------------------------------------

# 104. COMPLETE TEACHER VERTICAL FLOW

``` text
TEACHER SIGNUP
  ↓
PROFILE
  ↓
PROGRAM
  ↓
CURRICULUM
  ↓
OBJECTIVE MAPPING
  ↓
LESSON
  ↓
RESOURCE
  ↓
PRACTICE
  ↓
QUIZ
  ↓
VALIDATION
  ↓
PUBLISH
  ↓
SEARCH INDEX
  ↓
LEARNER
  ↓
REPORT / ANALYTICS
```

------------------------------------------------------------------------

# 105. COMPLETE CURRICULUM VERTICAL FLOW

``` text
OFFICIAL SOURCE
  ↓
CRON
  ↓
SOURCE CHECK
  ↓
SNAPSHOT
  ↓
HASH
  ↓
DIFF
  ↓
SEMANTIC ANALYSIS
  ↓
IMPACT ANALYSIS
  ↓
HUMAN REVIEW
  ↓
VERIFY
  ↓
PUBLISH
  ↓
CONTENT IMPACT
  ↓
SEARCH / CACHE / NOTIFICATION
```

------------------------------------------------------------------------

# 106. COMPLETE MODERATION FLOW

``` text
REPORT
  ↓
TRIAGE
  ↓
RISK
  ↓
MODERATOR
  ↓
DECISION
  ↓
STATE CHANGE
  ↓
SEARCH / CACHE
  ↓
NOTIFICATION
  ↓
AUDIT
```

------------------------------------------------------------------------

# 107. COMPLETE OPPORTUNITY FLOW

``` text
OFFICIAL SOURCE
  ↓
MONITOR
  ↓
SNAPSHOT
  ↓
PARSE
  ↓
VALIDATE
  ↓
PUBLISH
  ↓
OPEN
  ↓
DEADLINE
  ↓
CLOSED
  ↓
ARCHIVE
```

------------------------------------------------------------------------

# 108. MASTER DATA OWNERSHIP

  System              Owns
  ------------------- ----------------------------
  D1                  Canonical structured state
  R2                  Raw/large objects
  KV                  Cache
  Queue               Pending work
  Search              Search projection
  Analytics           Events/metrics
  AI                  Suggestions/computation
  Admin               Governance actions
  Curriculum engine   Curriculum state
  Learning engine     Learning state/content
  Auth provider       Authentication
  YouTube             External video

------------------------------------------------------------------------

# 109. MASTER STATE-CHANGE PATTERN

For important mutations:

``` text
COMMAND
  ↓
AUTHORIZATION
  ↓
VALIDATION
  ↓
TRANSACTION
  ↓
STATE CHANGE
  ↓
AUDIT
  ↓
DOMAIN EVENT
  ↓
ASYNC SIDE EFFECTS
```

This pattern should be used consistently.

------------------------------------------------------------------------

# 110. MASTER FAILURE PRINCIPLE

> **No critical learner flow should depend on AI.**

> **No critical curriculum flow should depend on a third-party runtime
> API.**

> **No critical lesson should depend on one YouTube video.**

> **No cache should be treated as canonical.**

> **No AI output should be treated as official truth.**

------------------------------------------------------------------------

# 111. MASTER TRUST BOUNDARIES

### Browser

Untrusted.

### AI

Untrusted.

### Teacher

Not automatically trusted.

### External source

Needs validation.

### Admin

Authorized but still governed and audited.

### D1/domain rules

Canonical state authority.

------------------------------------------------------------------------

# 112. MASTER QUALITY PRINCIPLES

1.  Quality \> page count
2.  Learning outcome \> traffic
3.  Trust \> popularity
4.  Official source \> AI
5.  Deterministic logic \> unnecessary AI
6.  Reuse \> regenerate
7.  Structured data \> free-form blobs
8.  Versioning \> destructive edits
9.  Human review for high-risk changes
10. Graceful degradation \> fragile dependencies
11. Simple architecture \> premature microservices
12. Useful pages \> SEO pages
13. Meaningful teacher content \> teacher volume
14. Verified opportunities \> opportunity volume
15. No notification \> bad notification

------------------------------------------------------------------------

# 113. CRITICAL PRODUCT RISKS

## Risk: Teacher publishing spam

Mitigation: - structured builder - validation - risk-based moderation -
reports - quality signals - indexability gates

## Risk: AI hallucinated curriculum

Mitigation: - official-source grounding - deterministic checks - human
review - provenance

## Risk: Outdated education information

Mitigation: - source registry - monitoring - snapshots - versioning -
freshness states

## Risk: Incorrect career advice

Mitigation: - non-deterministic exploration - source-backed
requirements - multiple pathways

## Risk: Expired opportunities

Mitigation: - deadline/status monitoring - automatic closure - source
verification

## Risk: SEO spam

Mitigation: - quality-first pages - indexability gate - no mass AI
pages - no near duplicates

## Risk: Infrastructure complexity

Mitigation: - modular monolith - few workers - one D1 - FTS5 - no
graph/search infrastructure initially

## Risk: Free-tier exhaustion

Mitigation: - cache - quotas - priorities - batching - core-only mode -
AI last

------------------------------------------------------------------------

# 114. PRODUCT PRINCIPLES TO PROTECT

### Principle 1

> **Schoolopedia is an education encyclopedia, not a generic content
> website.**

### Principle 2

> **A lesson is the product, not a video.**

### Principle 3

> **Official authority is source of truth; AI assists.**

### Principle 4

> **Teacher content is valuable but never automatically official.**

### Principle 5

> **Learning progress matters more than engagement volume.**

### Principle 6

> **Search should lead to learning, not endless browsing.**

### Principle 7

> **Career guidance should expand possibilities, not decide a learner's
> future.**

### Principle 8

> **Trust should be visible through provenance and freshness.**

### Principle 9

> **No critical learner capability should depend on AI.**

### Principle 10

> **Build the smallest complete system, not the smallest demo.**

------------------------------------------------------------------------

# 115. FINAL SCHOOLopedia ARCHITECTURE

``` text
                         SCHOOLOPEDIA
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
          PUBLIC SYSTEM                  ADMIN SYSTEM
              │                               │
      ┌───────┼────────┐             ┌────────┼────────┐
      ▼       ▼        ▼             ▼        ▼        ▼
    LEARN   TEACH    EXPLORE     CURRICULUM MODERATION OPS
      │       │        │             │        │        │
      └───────┼────────┘             └────────┼────────┘
              ▼                               ▼
          KNOWLEDGE                         TRUST
              │                               │
              └──────────────┬────────────────┘
                             ▼
                         D1 / R2 / KV
                             │
                             ▼
                           EVENTS
                             │
                             ▼
                           QUEUES
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
      PROCESSOR           INDEXER            SCHEDULER
          │                  │
     ┌────┼─────┐            ▼
     ▼    ▼     ▼          SEARCH
   CURR  VIDEO   AI
     │    │      │
     └────┴──────┘
            │
            ▼
        VALIDATION
            │
            ▼
          REVIEW
            │
            ▼
         PUBLISH
            │
      ┌─────┼─────┐
      ▼     ▼     ▼
    CACHE SEARCH NOTIFY
      │     │     │
      └─────┼─────┘
            ▼
          LEARNER
```

------------------------------------------------------------------------

# 116. ANTIGRAVITY IMPLEMENTATION CONTRACT

Antigravity must treat this document as the **master
product/architecture specification**, but it must NOT blindly implement
every future feature immediately.

Implementation rules:

1.  Inspect the existing repository before modifying it.
2.  Preserve working functionality.
3.  Do not introduce unnecessary dependencies.
4.  Do not introduce paid services without explicit approval.
5.  Do not replace Cloudflare/D1/R2/KV/Queues architecture casually.
6.  Do not create microservices unnecessarily.
7.  Do not create generic CRUD for canonical educational data.
8.  Do not bypass domain services.
9.  Do not put business logic only in frontend.
10. Do not let browser state become authoritative.
11. Do not let AI become authoritative.
12. Do not silently alter published educational versions.
13. Add migrations before relying on new DB structures.
14. Add tests for every important state transition.
15. Keep `main` deployable.
16. Use staging before production changes.
17. Document architectural deviations.
18. If a requirement conflicts with this document, identify the conflict
    instead of silently choosing.
19. Prefer a small complete vertical slice over broad incomplete
    implementation.
20. Before implementing a new feature, ask whether it improves learning,
    trust, content quality, discovery, or operational reliability.

------------------------------------------------------------------------

# 117. FIRST IMPLEMENTATION TARGET

Do not start by building the entire platform.

Start with:

> **California Grade 8 Mathematics → Linear Equations**

The first implementation should prove:

``` text
Repository
 ↓
Cloudflare setup
 ↓
D1
 ↓
Migrations
 ↓
Curriculum data model
 ↓
California curriculum ingestion
 ↓
Grade 8 Math
 ↓
Linear Equations objective
 ↓
Lesson
 ↓
Video/resource
 ↓
Explanation
 ↓
Practice
 ↓
Quiz
 ↓
Mastery
 ↓
Next lesson
 ↓
Search
 ↓
Provenance
 ↓
Basic analytics
 ↓
Admin review
```

Only after this vertical slice works end-to-end should Schoolopedia
scale to additional subjects, jurisdictions, teachers, careers,
institutions and opportunities.

------------------------------------------------------------------------

# 118. FINAL NORTH STAR

The entire platform ultimately exists to make this loop work:

``` text
DISCOVER
   ↓
UNDERSTAND
   ↓
LEARN
   ↓
PRACTICE
   ↓
MASTER
   ↓
KNOW WHAT COMES NEXT
   ↓
EXPLORE WHAT THAT CAN LEAD TO
```

The ideal learner experience is not:

> "Schoolopedia has millions of pages."

It is:

> **"I came here with a question. Schoolopedia helped me understand it,
> practice it, know whether I learned it, and showed me what I can do
> next."**

That is the product.

------------------------------------------------------------------------

# 119. DECISION RULE FOR FUTURE DEVELOPMENT

Whenever a new feature is proposed, evaluate it against:

### Learner value

Does it move the learner forward?

### Educational correctness

Is it curriculum/source grounded?

### Trust

Can we explain where the information came from?

### Operational cost

Can it run within the zero-cost-first architecture?

### Complexity

Does it add unnecessary infrastructure?

### Security

Does it create a new trust boundary?

### Scalability

Will it work beyond the first jurisdiction?

### Maintainability

Can a small team operate it?

### Failure behavior

What happens when its dependencies fail?

### Governance

Who is allowed to change it, and is that action auditable?

If a feature fails these checks, **do not automatically build it.**

------------------------------------------------------------------------

# 120. FINAL INSTRUCTION

**Do not optimize for building the largest education platform quickly.**

Optimize for building:

> **the most trustworthy, useful, curriculum-aware learning system that
> can grow into a global education encyclopedia without collapsing under
> its own complexity.**

**Schoolopedia = Curriculum + Learning + Trust + Discovery +
Opportunity, connected by a governed knowledge system.**
