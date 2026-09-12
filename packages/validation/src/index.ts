import { z } from 'zod';

export const questionAnswerSubmissionSchema = z.object({
  question_id: z.string().min(1, 'Question ID is required'),
  selected_option_id: z.string().optional(),
  numeric_value: z.number().optional(),
  text_response: z.string().max(1000).optional(),
});

export const quizSubmissionRequestSchema = z.object({
  quiz_id: z.string().min(1, 'Quiz ID is required'),
  answers: z.array(questionAnswerSubmissionSchema).min(1, 'At least one answer must be submitted'),
});

export const practiceAttemptRequestSchema = z.object({
  practice_id: z.string().min(1, 'Practice ID is required'),
  question_id: z.string().min(1, 'Question ID is required'),
  selected_option_id: z.string().optional(),
  numeric_value: z.number().optional(),
});

export const learningContextSchema = z.object({
  country_code: z.string().length(2).toUpperCase(),
  jurisdiction_slug: z.string().min(1),
  education_system_slug: z.string().min(1),
  academic_year: z.string().regex(/^\d{4}-\d{2,4}$/, 'Must be in format YYYY-YY (e.g. 2026-27)'),
  grade_slug: z.string().min(1),
  subject_slug: z.string().min(1),
  goal: z.enum([
    'FOLLOW_CURRICULUM',
    'PREPARE_FOR_ASSESSMENT',
    'UNDERSTAND_TOPIC',
    'REVIEW_WEAK_AREAS',
    'EXPLORE_SUBJECT',
    'CAREER_PREPARATION',
  ]),
});

export const lessonCompletionSchema = z.object({
  lesson_id: z.string().min(1),
  lesson_version_id: z.string().min(1),
});

export const reportCreateSchema = z.object({
  entity_type: z.enum(['LESSON', 'VIDEO', 'TEACHER_PROGRAM', 'QUESTION', 'CURRICULUM']),
  entity_id: z.string().min(1),
  category: z.enum([
    'INCORRECT_INFORMATION',
    'CURRICULUM_MISMATCH',
    'INAPPROPRIATE_CONTENT',
    'COPYRIGHT_CONCERN',
    'BROKEN_RESOURCE',
    'SPAM',
    'OTHER',
  ]),
  details: z.string().min(10, 'Details must be at least 10 characters').max(2000),
});

export const adminPublishCurriculumSchema = z.object({
  curriculum_version_id: z.string().min(1),
  notes: z.string().max(1000).optional(),
});

export const adminResolveReportSchema = z.object({
  decision: z.enum(['KEEP', 'EDIT_REQUIRED', 'RESTRICT', 'SUSPEND', 'REMOVE']),
  reason: z.string().min(5).max(1000),
});
