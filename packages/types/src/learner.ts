export type LearnerGoal =
  | 'FOLLOW_CURRICULUM'
  | 'PREPARE_FOR_ASSESSMENT'
  | 'UNDERSTAND_TOPIC'
  | 'REVIEW_WEAK_AREAS'
  | 'EXPLORE_SUBJECT'
  | 'CAREER_PREPARATION';

export interface LearningContext {
  country_code: string;       // e.g. 'US'
  jurisdiction_slug: string;  // e.g. 'california'
  education_system_slug: string; // e.g. 'public'
  academic_year: string;      // e.g. '2026-27'
  grade_slug: string;         // e.g. 'grade-8'
  subject_slug: string;       // e.g. 'mathematics'
  goal: LearnerGoal;
}

export interface Learner {
  id: string;
  email?: string;
  display_name?: string;
  is_anonymous: boolean;
  context?: LearningContext;
  created_at: string;
  updated_at: string;
}

export type MasteryStatus = 'NOT_STARTED' | 'NEEDS_REVIEW' | 'MASTERED';

export interface LearnerMastery {
  id: string;
  learner_id: string;
  objective_id: string;
  status: MasteryStatus;
  score_percentage: number;
  attempts_count: number;
  last_evaluated_at: string;
  updated_at: string;
}

export interface LearnerProgress {
  id: string;
  learner_id: string;
  lesson_id: string;
  lesson_version_id: string;
  is_completed: boolean;
  last_accessed_at: string;
  completed_at?: string;
}

export interface PracticeAttempt {
  id: string;
  learner_id: string;
  practice_id: string;
  question_id: string;
  selected_option_id?: string;
  numeric_value?: number;
  is_correct: boolean;
  created_at: string;
}

export interface QuizAttempt {
  id: string;
  learner_id: string;
  quiz_id: string;
  total_questions: number;
  correct_answers: number;
  score_percentage: number;
  passed: boolean;
  completed_at: string;
}
