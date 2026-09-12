// Types for Explore (Institutions, Programs), Guidance (Careers, Skills, Pathways), and Opportunities

export type InstitutionType =
  | 'UNIVERSITY'
  | 'COMMUNITY_COLLEGE'
  | 'VOCATIONAL'
  | 'PUBLIC_HIGH_SCHOOL'
  | 'CHARTER_SCHOOL'
  | 'INDEPENDENT'
  | 'GRAMMAR_SCHOOL'
  | 'ACADEMY'
  | 'SIXTH_FORM_COLLEGE'
  | 'CENTRAL_SCHOOL'
  | 'BOARDING_SCHOOL'
  | 'INSTITUTE_OF_NATIONAL_IMPORTANCE';

export interface Institution {
  id: string;
  jurisdiction_id: string;
  name: string;
  slug: string;
  type: InstitutionType;
  website_url: string;
  city: string;
  state_or_province: string;
  country_code: string;
  accreditation?: string;
  logo_url?: string;
  ranking_national?: number;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

export type CredentialLevel =
  | 'ASSOCIATE'
  | 'BACHELOR'
  | 'MASTER'
  | 'DOCTORATE'
  | 'DIPLOMA'
  | 'CERTIFICATE'
  | 'APPRENTICESHIP';

export interface Program {
  id: string;
  institution_id: string;
  title: string;
  slug: string;
  credential_level: CredentialLevel;
  field_of_study: string;
  duration_months: number;
  estimated_tuition_annual?: number;
  currency: string;
  overview?: string;
  created_at: string;
  updated_at: string;
}

export interface Career {
  id: string;
  title: string;
  slug: string;
  sector: string;
  median_annual_salary: number;
  salary_currency: string;
  growth_rate_pct?: number;
  entry_education_level: string;
  summary: string;
  day_in_the_life?: string;
  created_at: string;
  updated_at: string;
}

export type SkillCategory =
  | 'MATHEMATICAL'
  | 'COMPUTATIONAL'
  | 'SCIENTIFIC'
  | 'COMMUNICATION'
  | 'ANALYTICAL'
  | 'PRACTICAL';

export interface Skill {
  id: string;
  name: string;
  slug: string;
  category: SkillCategory;
  description?: string;
  created_at: string;
}

export interface PathwayStep {
  stage: string;
  title: string;
  description: string;
  milestone: string;
}

export interface Pathway {
  id: string;
  career_id: string;
  title: string;
  slug: string;
  starting_grade_level: number;
  steps: PathwayStep[];
  created_at: string;
}

export type OpportunityType =
  | 'SCHOLARSHIP'
  | 'INTERNSHIP'
  | 'COMPETITION'
  | 'APPRENTICESHIP'
  | 'SUMMER_PROGRAM';

export interface Opportunity {
  id: string;
  title: string;
  slug: string;
  type: OpportunityType;
  provider_name: string;
  award_amount?: number;
  currency?: string;
  deadline?: string;
  eligibility_summary: string;
  application_url: string;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}
