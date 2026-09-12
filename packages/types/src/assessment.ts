export type QuestionType = 'MCQ' | 'TRUE_FALSE' | 'NUMERIC' | 'SHORT_ANSWER';

export interface QuestionOption {
  id: string;
  question_id: string;
  text: string;
  is_correct: boolean; // Server-only, stripped for learner-facing payloads
  feedback?: string;
  order_index: number;
}

export interface Question {
  id: string;
  objective_id: string;
  type: QuestionType;
  prompt: string;
  explanation: string;
  options: QuestionOption[];
  difficulty_level: 1 | 2 | 3 | 4 | 5;
  tolerance?: number; // for NUMERIC answers
  created_at: string;
  updated_at: string;
}

export interface Practice {
  id: string;
  lesson_id: string;
  title: string;
  description?: string;
  questions: Question[];
  created_at: string;
}

export interface Quiz {
  id: string;
  lesson_id: string;
  title: string;
  passing_percentage: number; // default 80%
  questions: Question[];
  created_at: string;
}

export interface QuestionAnswerSubmission {
  question_id: string;
  selected_option_id?: string;
  numeric_value?: number;
  text_response?: string;
}

export interface QuizSubmissionRequest {
  quiz_id: string;
  answers: QuestionAnswerSubmission[];
}

export interface QuestionGradingResult {
  question_id: string;
  is_correct: boolean;
  score_earned: number;
  correct_option_id?: string;
  explanation: string;
  feedback?: string;
}

export interface QuizGradingResult {
  quiz_id: string;
  attempt_id: string;
  total_questions: number;
  correct_answers: number;
  score_percentage: number;
  passed: boolean;
  mastery_achieved: boolean;
  results: QuestionGradingResult[];
  completed_at: string;
}
