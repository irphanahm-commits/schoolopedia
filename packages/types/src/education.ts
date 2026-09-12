export interface Country {
  id: string;
  code: string; // ISO 3166-1 alpha-2, e.g. 'US'
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Jurisdiction {
  id: string;
  country_id: string;
  code: string; // e.g. 'CA'
  name: string; // e.g. 'California'
  slug: string;
  authority_name: string; // e.g. 'California Department of Education'
  created_at: string;
  updated_at: string;
}

export interface EducationSystem {
  id: string;
  jurisdiction_id: string;
  name: string; // e.g. 'Public School System'
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface CurriculumFramework {
  id: string;
  education_system_id: string;
  name: string; // e.g. 'California Common Core State Standards'
  code: string;
  created_at: string;
  updated_at: string;
}

export interface AcademicYear {
  id: string;
  name: string; // e.g. '2026-27'
  start_date: string;
  end_date: string;
  is_current: boolean;
  created_at: string;
}

export type CurriculumVersionStatus = 'DRAFT' | 'ANALYZING' | 'REVIEW_REQUIRED' | 'VERIFIED' | 'PUBLISHED' | 'ARCHIVED';

export interface CurriculumVersion {
  id: string;
  framework_id: string;
  academic_year_id: string;
  version_number: string;
  status: CurriculumVersionStatus;
  published_at?: string;
  verified_at?: string;
  verified_by?: string;
  source_snapshot_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Grade {
  id: string;
  jurisdiction_id: string;
  level: number; // e.g. 8
  name: string; // e.g. 'Grade 8'
  slug: string;
  created_at: string;
}

export interface Subject {
  id: string;
  name: string; // e.g. 'Mathematics'
  slug: string;
  code: string; // e.g. 'MATH'
  created_at: string;
}

export interface Course {
  id: string;
  curriculum_version_id: string;
  grade_id: string;
  subject_id: string;
  title: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Unit {
  id: string;
  course_id: string;
  title: string;
  slug: string;
  order_index: number;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface LearningObjective {
  id: string;
  unit_id: string;
  official_code: string; // e.g. 'CCSS.MATH.CONTENT.8.EE.C.7'
  title: string;
  description: string;
  slug: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Concept {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}
