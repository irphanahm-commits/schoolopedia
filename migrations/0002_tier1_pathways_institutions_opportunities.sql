-- Migration: 0002_tier1_pathways_institutions_opportunities.sql
-- Description: Explore (Institutions, Programs), Guidance (Careers, Pathways, Skills), Opportunities

PRAGMA foreign_keys = ON;

-- 1. INSTITUTIONS (Schools, Colleges, Universities per Jurisdiction)
CREATE TABLE IF NOT EXISTS institutions (
  id TEXT PRIMARY KEY,
  jurisdiction_id TEXT NOT NULL REFERENCES jurisdictions(id),
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('UNIVERSITY', 'COMMUNITY_COLLEGE', 'VOCATIONAL', 'PUBLIC_HIGH_SCHOOL', 'CHARTER_SCHOOL', 'INDEPENDENT')),
  website_url TEXT NOT NULL,
  city TEXT NOT NULL,
  state_or_province TEXT NOT NULL,
  country_code TEXT NOT NULL,
  accreditation TEXT,
  logo_url TEXT,
  ranking_national INTEGER,
  is_verified INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(jurisdiction_id, slug)
);

-- 2. PROGRAMS (Degrees, Certificates, Vocational Diplomas)
CREATE TABLE IF NOT EXISTS programs (
  id TEXT PRIMARY KEY,
  institution_id TEXT NOT NULL REFERENCES institutions(id),
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  credential_level TEXT NOT NULL CHECK(credential_level IN ('ASSOCIATE', 'BACHELOR', 'MASTER', 'DOCTORATE', 'DIPLOMA', 'CERTIFICATE', 'APPRENTICESHIP')),
  field_of_study TEXT NOT NULL,
  duration_months INTEGER NOT NULL,
  estimated_tuition_annual REAL,
  currency TEXT NOT NULL DEFAULT 'USD',
  overview TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(institution_id, slug)
);

-- 3. CAREERS (Guidance & Occupational Profiles)
CREATE TABLE IF NOT EXISTS careers (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  sector TEXT NOT NULL, -- e.g. 'Engineering & Technology', 'Healthcare', 'Finance'
  median_annual_salary REAL NOT NULL,
  salary_currency TEXT NOT NULL DEFAULT 'USD',
  growth_rate_pct REAL, -- e.g. 15.2% over 10 years
  entry_education_level TEXT NOT NULL, -- e.g. 'Bachelor''s Degree', 'High School + Apprenticeship'
  summary TEXT NOT NULL,
  day_in_the_life TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 4. SKILLS (Competencies connecting Lessons to Careers)
CREATE TABLE IF NOT EXISTS skills (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK(category IN ('MATHEMATICAL', 'COMPUTATIONAL', 'SCIENTIFIC', 'COMMUNICATION', 'ANALYTICAL', 'PRACTICAL')),
  description TEXT,
  created_at TEXT NOT NULL
);

-- 5. CAREER SKILLS (Many-to-Many: Career requires Skills)
CREATE TABLE IF NOT EXISTS career_skills (
  career_id TEXT NOT NULL REFERENCES careers(id),
  skill_id TEXT NOT NULL REFERENCES skills(id),
  importance_level TEXT NOT NULL CHECK(importance_level IN ('FOUNDATIONAL', 'IMPORTANT', 'CRITICAL')),
  PRIMARY KEY(career_id, skill_id)
);

-- 6. CAREER SUBJECTS (Answering "Why study this subject?")
CREATE TABLE IF NOT EXISTS career_subjects (
  career_id TEXT NOT NULL REFERENCES careers(id),
  subject_id TEXT NOT NULL REFERENCES subjects(id),
  relevance_explanation TEXT NOT NULL,
  PRIMARY KEY(career_id, subject_id)
);

-- 7. PATHWAYS (Sequential step roadmaps from School to Career)
CREATE TABLE IF NOT EXISTS pathways (
  id TEXT PRIMARY KEY,
  career_id TEXT NOT NULL REFERENCES careers(id),
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  starting_grade_level INTEGER NOT NULL,
  steps_json TEXT NOT NULL, -- JSON array of steps [{stage, title, description, milestone}]
  created_at TEXT NOT NULL
);

-- 8. OPPORTUNITIES (Scholarships, Competitions, Summer Internships)
CREATE TABLE IF NOT EXISTS opportunities (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('SCHOLARSHIP', 'INTERNSHIP', 'COMPETITION', 'APPRENTICESHIP', 'SUMMER_PROGRAM')),
  provider_name TEXT NOT NULL,
  award_amount REAL,
  currency TEXT DEFAULT 'USD',
  deadline TEXT,
  eligibility_summary TEXT NOT NULL,
  application_url TEXT NOT NULL,
  is_verified INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- 9. OPPORTUNITY JURISDICTIONS (Geographic eligibility)
CREATE TABLE IF NOT EXISTS opportunity_jurisdictions (
  opportunity_id TEXT NOT NULL REFERENCES opportunities(id),
  jurisdiction_id TEXT NOT NULL REFERENCES jurisdictions(id),
  PRIMARY KEY(opportunity_id, jurisdiction_id)
);

-- Indexes for Query Performance
CREATE INDEX IF NOT EXISTS idx_institutions_jurisdiction ON institutions(jurisdiction_id, type);
CREATE INDEX IF NOT EXISTS idx_programs_institution ON programs(institution_id, field_of_study);
CREATE INDEX IF NOT EXISTS idx_careers_sector ON careers(sector);
CREATE INDEX IF NOT EXISTS idx_career_subjects_subject ON career_subjects(subject_id);
CREATE INDEX IF NOT EXISTS idx_pathways_career ON pathways(career_id);
CREATE INDEX IF NOT EXISTS idx_opportunities_type ON opportunities(type);
