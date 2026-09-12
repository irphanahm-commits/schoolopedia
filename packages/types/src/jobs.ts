export type JobType =
  | 'SOURCE_CHECK'
  | 'SOURCE_PARSE'
  | 'CURRICULUM_DIFF'
  | 'CURRICULUM_MAPPING'
  | 'VIDEO_DISCOVERY'
  | 'VIDEO_EVALUATION'
  | 'VIDEO_AVAILABILITY'
  | 'LESSON_GENERATION'
  | 'QUIZ_GENERATION'
  | 'QUESTION_VALIDATION'
  | 'SEARCH_INDEX'
  | 'RECOMMENDATION'
  | 'QA_CHECK'
  | 'CONTENT_REFRESH';

export type JobStatus =
  | 'CREATED'
  | 'QUEUED'
  | 'RUNNING'
  | 'VALIDATING'
  | 'COMPLETED'
  | 'FAILED'
  | 'RETRY'
  | 'REVIEW_REQUIRED'
  | 'CANCELLED';

export interface Job {
  id: string;
  type: JobType;
  status: JobStatus;
  priority: number; // 1 (highest) to 10 (lowest)
  payload: Record<string, unknown>;
  attempts: number;
  max_attempts: number;
  error_message?: string;
  correlation_id: string;
  locked_until?: string;
  created_at: string;
  updated_at: string;
}

export interface JobRun {
  id: string;
  job_id: string;
  attempt_number: number;
  started_at: string;
  completed_at?: string;
  duration_ms?: number;
  status: JobStatus;
  error_details?: string;
}
