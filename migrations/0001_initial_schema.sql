-- Migration: 0001_initial_schema.sql
-- Description: Core Schema for Schoolopedia (Cloudflare D1 / SQLite)

PRAGMA foreign_keys = ON;

-- 1. COUNTRIES
CREATE TABLE IF NOT EXISTS countries (
  id TEXT PRIMARY KEY,
  code TEXT UNIQUE NOT NULL, -- ISO 3166-1 alpha-2, e.g. 'US'
  name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 2. JURISDICTIONS
CREATE TABLE IF NOT EXISTS jurisdictions (
  id TEXT PRIMARY KEY,
  country_id TEXT NOT NULL REFERENCES countries(id),
  code TEXT NOT NULL, -- e.g. 'CA'
  name TEXT NOT NULL, -- e.g. 'California'
  slug TEXT UNIQUE NOT NULL,
  authority_name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 3. EDUCATION SYSTEMS
CREATE TABLE IF NOT EXISTS education_systems (
  id TEXT PRIMARY KEY,
  jurisdiction_id TEXT NOT NULL REFERENCES jurisdictions(id),
  name TEXT NOT NULL, -- e.g. 'Public School System'
  slug TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(jurisdiction_id, slug)
);

-- 4. CURRICULUM FRAMEWORKS
CREATE TABLE IF NOT EXISTS curriculum_frameworks (
  id TEXT PRIMARY KEY,
  education_system_id TEXT NOT NULL REFERENCES education_systems(id),
  name TEXT NOT NULL,
  code TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 5. ACADEMIC YEARS
CREATE TABLE IF NOT EXISTS academic_years (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL, -- e.g. '2026-27'
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  is_current INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);

-- 6. CURRICULUM VERSIONS
CREATE TABLE IF NOT EXISTS curriculum_versions (
  id TEXT PRIMARY KEY,
  framework_id TEXT NOT NULL REFERENCES curriculum_frameworks(id),
  academic_year_id TEXT NOT NULL REFERENCES academic_years(id),
  version_number TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('DRAFT', 'ANALYZING', 'REVIEW_REQUIRED', 'VERIFIED', 'PUBLISHED', 'ARCHIVED')),
  published_at TEXT,
  verified_at TEXT,
  verified_by TEXT,
  source_snapshot_id TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 7. GRADES
CREATE TABLE IF NOT EXISTS grades (
  id TEXT PRIMARY KEY,
  jurisdiction_id TEXT NOT NULL REFERENCES jurisdictions(id),
  level INTEGER NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE(jurisdiction_id, slug)
);

-- 8. SUBJECTS
CREATE TABLE IF NOT EXISTS subjects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  code TEXT UNIQUE NOT NULL,
  created_at TEXT NOT NULL
);

-- 9. COURSES
CREATE TABLE IF NOT EXISTS courses (
  id TEXT PRIMARY KEY,
  curriculum_version_id TEXT NOT NULL REFERENCES curriculum_versions(id),
  grade_id TEXT NOT NULL REFERENCES grades(id),
  subject_id TEXT NOT NULL REFERENCES subjects(id),
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(curriculum_version_id, grade_id, subject_id)
);

-- 10. UNITS
CREATE TABLE IF NOT EXISTS units (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL REFERENCES courses(id),
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  description TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 11. LEARNING OBJECTIVES
CREATE TABLE IF NOT EXISTS learning_objectives (
  id TEXT PRIMARY KEY,
  unit_id TEXT NOT NULL REFERENCES units(id),
  official_code TEXT NOT NULL, -- e.g. 'CCSS.MATH.CONTENT.8.EE.C.7'
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  slug TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 12. CONCEPTS
CREATE TABLE IF NOT EXISTS concepts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TEXT NOT NULL
);

-- 13. OBJECTIVE CONCEPTS
CREATE TABLE IF NOT EXISTS objective_concepts (
  objective_id TEXT NOT NULL REFERENCES learning_objectives(id),
  concept_id TEXT NOT NULL REFERENCES concepts(id),
  PRIMARY KEY (objective_id, concept_id)
);

-- 14. LESSONS
CREATE TABLE IF NOT EXISTS lessons (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  primary_objective_id TEXT NOT NULL REFERENCES learning_objectives(id),
  type TEXT NOT NULL CHECK(type IN ('CONCEPT', 'PROCEDURE', 'PROBLEM_SOLVING', 'REVIEW', 'PRACTICE', 'APPLICATION')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 15. LESSON VERSIONS (Immutable published versions)
CREATE TABLE IF NOT EXISTS lesson_versions (
  id TEXT PRIMARY KEY,
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  version_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('DRAFT', 'READY_FOR_REVIEW', 'PUBLISHED', 'FLAGGED', 'SUSPENDED', 'ARCHIVED')),
  blocks_json TEXT NOT NULL,
  created_by TEXT,
  published_at TEXT,
  created_at TEXT NOT NULL,
  UNIQUE(lesson_id, version_number)
);

-- 16. LESSON OBJECTIVES
CREATE TABLE IF NOT EXISTS lesson_objectives (
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  objective_id TEXT NOT NULL REFERENCES learning_objectives(id),
  PRIMARY KEY(lesson_id, objective_id)
);

-- 17. LESSON NEXT
CREATE TABLE IF NOT EXISTS lesson_next (
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  next_lesson_id TEXT NOT NULL REFERENCES lessons(id),
  order_index INTEGER NOT NULL,
  PRIMARY KEY(lesson_id, next_lesson_id)
);

-- 18. VIDEOS
CREATE TABLE IF NOT EXISTS videos (
  id TEXT PRIMARY KEY,
  youtube_video_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  channel_title TEXT NOT NULL,
  channel_id TEXT NOT NULL,
  duration_seconds INTEGER NOT NULL,
  state TEXT NOT NULL CHECK(state IN ('AVAILABLE', 'UNAVAILABLE', 'PRIVATE', 'REGION_RESTRICTED', 'DELETED', 'METADATA_CHANGED')),
  quality_score_json TEXT,
  last_verified_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 19. VIDEO MAPPINGS
CREATE TABLE IF NOT EXISTS video_mappings (
  id TEXT PRIMARY KEY,
  lesson_version_id TEXT NOT NULL REFERENCES lesson_versions(id),
  video_id TEXT NOT NULL REFERENCES videos(id),
  role TEXT NOT NULL CHECK(role IN ('PRIMARY', 'BACKUP_1', 'BACKUP_2', 'TEACHER_SELECTED')),
  start_seconds INTEGER,
  end_seconds INTEGER,
  curation_notes TEXT,
  created_at TEXT NOT NULL
);

-- 20. RESOURCES
CREATE TABLE IF NOT EXISTS resources (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('DOCUMENT', 'SIMULATION', 'WORKSHEET', 'TOOL', 'REFERENCE')),
  source_authority TEXT,
  is_verified INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);

-- 21. PRACTICES
CREATE TABLE IF NOT EXISTS practices (
  id TEXT PRIMARY KEY,
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  title TEXT NOT NULL,
  description TEXT,
  created_at TEXT NOT NULL
);

-- 22. QUESTIONS
CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  objective_id TEXT NOT NULL REFERENCES learning_objectives(id),
  type TEXT NOT NULL CHECK(type IN ('MCQ', 'TRUE_FALSE', 'NUMERIC', 'SHORT_ANSWER')),
  prompt TEXT NOT NULL,
  explanation TEXT NOT NULL,
  difficulty_level INTEGER NOT NULL DEFAULT 2,
  tolerance REAL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 23. QUESTION OPTIONS
CREATE TABLE IF NOT EXISTS question_options (
  id TEXT PRIMARY KEY,
  question_id TEXT NOT NULL REFERENCES questions(id),
  text TEXT NOT NULL,
  is_correct INTEGER NOT NULL, -- 1 or 0
  feedback TEXT,
  order_index INTEGER NOT NULL
);

-- 24. QUIZZES
CREATE TABLE IF NOT EXISTS quizzes (
  id TEXT PRIMARY KEY,
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  title TEXT NOT NULL,
  passing_percentage INTEGER NOT NULL DEFAULT 80,
  created_at TEXT NOT NULL
);

-- 25. QUIZ QUESTIONS
CREATE TABLE IF NOT EXISTS quiz_questions (
  quiz_id TEXT NOT NULL REFERENCES quizzes(id),
  question_id TEXT NOT NULL REFERENCES questions(id),
  order_index INTEGER NOT NULL,
  PRIMARY KEY(quiz_id, question_id)
);

-- 26. LEARNERS
CREATE TABLE IF NOT EXISTS learners (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE,
  display_name TEXT,
  is_anonymous INTEGER NOT NULL DEFAULT 1,
  context_json TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 27. LEARNER PROGRESS
CREATE TABLE IF NOT EXISTS learner_progress (
  id TEXT PRIMARY KEY,
  learner_id TEXT NOT NULL REFERENCES learners(id),
  lesson_id TEXT NOT NULL REFERENCES lessons(id),
  lesson_version_id TEXT NOT NULL REFERENCES lesson_versions(id),
  is_completed INTEGER NOT NULL DEFAULT 0,
  last_accessed_at TEXT NOT NULL,
  completed_at TEXT,
  UNIQUE(learner_id, lesson_id)
);

-- 28. LEARNER MASTERY
CREATE TABLE IF NOT EXISTS learner_mastery (
  id TEXT PRIMARY KEY,
  learner_id TEXT NOT NULL REFERENCES learners(id),
  objective_id TEXT NOT NULL REFERENCES learning_objectives(id),
  status TEXT NOT NULL CHECK(status IN ('NOT_STARTED', 'NEEDS_REVIEW', 'MASTERED')),
  score_percentage REAL NOT NULL DEFAULT 0,
  attempts_count INTEGER NOT NULL DEFAULT 0,
  last_evaluated_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(learner_id, objective_id)
);

-- 29. PRACTICE ATTEMPTS
CREATE TABLE IF NOT EXISTS practice_attempts (
  id TEXT PRIMARY KEY,
  learner_id TEXT NOT NULL REFERENCES learners(id),
  practice_id TEXT NOT NULL REFERENCES practices(id),
  question_id TEXT NOT NULL REFERENCES questions(id),
  selected_option_id TEXT,
  numeric_value REAL,
  is_correct INTEGER NOT NULL,
  created_at TEXT NOT NULL
);

-- 30. QUIZ ATTEMPTS
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id TEXT PRIMARY KEY,
  learner_id TEXT NOT NULL REFERENCES learners(id),
  quiz_id TEXT NOT NULL REFERENCES quizzes(id),
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  score_percentage REAL NOT NULL,
  passed INTEGER NOT NULL,
  created_at TEXT NOT NULL
);

-- 31. SOURCES
CREATE TABLE IF NOT EXISTS sources (
  id TEXT PRIMARY KEY,
  jurisdiction_id TEXT NOT NULL REFERENCES jurisdictions(id),
  authority_name TEXT NOT NULL,
  source_type TEXT NOT NULL CHECK(source_type IN ('API', 'OPEN_DATA', 'CSV', 'JSON', 'XML', 'RSS', 'HTML', 'PDF', 'DOCUMENT', 'MANUAL')),
  curriculum_url TEXT NOT NULL,
  standards_url TEXT,
  document_url TEXT,
  change_announcement_url TEXT,
  parser_identifier TEXT NOT NULL,
  parser_version TEXT NOT NULL,
  last_checked_at TEXT,
  last_successful_check_at TEXT,
  trust_status TEXT NOT NULL CHECK(trust_status IN ('UNVERIFIED', 'SOURCE_CHECKED', 'REVIEWED', 'VERIFIED', 'STALE', 'REVIEW_REQUIRED', 'SUSPENDED')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 32. SOURCE SNAPSHOTS
CREATE TABLE IF NOT EXISTS source_snapshots (
  id TEXT PRIMARY KEY,
  source_id TEXT NOT NULL REFERENCES sources(id),
  sha256_hash TEXT NOT NULL,
  r2_storage_key TEXT NOT NULL,
  content_type TEXT NOT NULL,
  etag TEXT,
  last_modified_header TEXT,
  created_at TEXT NOT NULL
);

-- 33. JOBS (D1 Outbox / Background Engine)
CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('CREATED', 'QUEUED', 'RUNNING', 'VALIDATING', 'COMPLETED', 'FAILED', 'RETRY', 'REVIEW_REQUIRED', 'CANCELLED')),
  priority INTEGER NOT NULL DEFAULT 5,
  payload_json TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  max_attempts INTEGER NOT NULL DEFAULT 3,
  error_message TEXT,
  correlation_id TEXT NOT NULL,
  locked_until TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 34. JOB RUNS
CREATE TABLE IF NOT EXISTS job_runs (
  id TEXT PRIMARY KEY,
  job_id TEXT NOT NULL REFERENCES jobs(id),
  attempt_number INTEGER NOT NULL,
  started_at TEXT NOT NULL,
  completed_at TEXT,
  duration_ms INTEGER,
  status TEXT NOT NULL,
  error_details TEXT
);

-- 35. AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  actor_id TEXT NOT NULL,
  actor_role TEXT NOT NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  previous_state_json TEXT,
  new_state_json TEXT,
  context_metadata_json TEXT,
  created_at TEXT NOT NULL
);

-- 36. REPORTS (Moderation)
CREATE TABLE IF NOT EXISTS reports (
  id TEXT PRIMARY KEY,
  reporter_id TEXT,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  category TEXT NOT NULL,
  details TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('REPORTED', 'TRIAGED', 'INVESTIGATING', 'RESOLVED', 'DISMISSED')),
  decision TEXT CHECK(decision IN ('KEEP', 'EDIT_REQUIRED', 'RESTRICT', 'SUSPEND', 'REMOVE')),
  created_at TEXT NOT NULL,
  resolved_at TEXT
);

-- 37. SEARCH DOCUMENTS PROJECTION
CREATE TABLE IF NOT EXISTS search_documents (
  id TEXT PRIMARY KEY,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  title TEXT NOT NULL,
  curriculum_context TEXT,
  snippet TEXT,
  canonical_url TEXT NOT NULL,
  popularity_weight REAL DEFAULT 1.0,
  is_indexable INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL
);

-- 38. FTS5 VIRTUAL TABLE FOR FULL TEXT SEARCH
CREATE VIRTUAL TABLE IF NOT EXISTS search_documents_fts USING fts5(
  title,
  curriculum_context,
  snippet,
  content='search_documents',
  content_rowid='rowid'
);

-- Triggers to keep FTS index synchronized with search_documents
CREATE TRIGGER IF NOT EXISTS search_documents_ai AFTER INSERT ON search_documents BEGIN
  INSERT INTO search_documents_fts(rowid, title, curriculum_context, snippet)
  VALUES (new.rowid, new.title, new.curriculum_context, new.snippet);
END;

CREATE TRIGGER IF NOT EXISTS search_documents_ad AFTER DELETE ON search_documents BEGIN
  INSERT INTO search_documents_fts(search_documents_fts, rowid, title, curriculum_context, snippet)
  VALUES('delete', old.rowid, old.title, old.curriculum_context, old.snippet);
END;

CREATE TRIGGER IF NOT EXISTS search_documents_au AFTER UPDATE ON search_documents BEGIN
  INSERT INTO search_documents_fts(search_documents_fts, rowid, title, curriculum_context, snippet)
  VALUES('delete', old.rowid, old.title, old.curriculum_context, old.snippet);
  INSERT INTO search_documents_fts(rowid, title, curriculum_context, snippet)
  VALUES (new.rowid, new.title, new.curriculum_context, new.snippet);
END;

-- Indexes for Query Performance
CREATE INDEX IF NOT EXISTS idx_jurisdictions_country ON jurisdictions(country_id);
CREATE INDEX IF NOT EXISTS idx_courses_curriculum ON courses(curriculum_version_id, grade_id, subject_id);
CREATE INDEX IF NOT EXISTS idx_units_course ON units(course_id, order_index);
CREATE INDEX IF NOT EXISTS idx_objectives_unit ON learning_objectives(unit_id, order_index);
CREATE INDEX IF NOT EXISTS idx_lessons_objective ON lessons(primary_objective_id);
CREATE INDEX IF NOT EXISTS idx_lesson_versions_lesson ON lesson_versions(lesson_id, status);
CREATE INDEX IF NOT EXISTS idx_video_mappings_version ON video_mappings(lesson_version_id);
CREATE INDEX IF NOT EXISTS idx_learner_progress ON learner_progress(learner_id, lesson_id);
CREATE INDEX IF NOT EXISTS idx_learner_mastery ON learner_mastery(learner_id, objective_id);
CREATE INDEX IF NOT EXISTS idx_jobs_status_priority ON jobs(status, priority);
CREATE INDEX IF NOT EXISTS idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
