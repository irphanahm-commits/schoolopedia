import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  quizSubmissionRequestSchema,
  practiceAttemptRequestSchema,
  learningContextSchema,
  reportCreateSchema,
} from '../../packages/validation/src/index.ts';

describe('Zod Validation Suite', () => {
  describe('quizSubmissionRequestSchema', () => {
    it('accepts valid quiz submission', () => {
      const payload = {
        quiz_id: 'quiz_123',
        answers: [
          { question_id: 'q1', selected_option_id: 'opt_1' },
          { question_id: 'q2', numeric_value: 42 },
        ],
      };
      const result = quizSubmissionRequestSchema.safeParse(payload);
      assert.strictEqual(result.success, true);
    });

    it('rejects empty answers list', () => {
      const payload = {
        quiz_id: 'quiz_123',
        answers: [],
      };
      const result = quizSubmissionRequestSchema.safeParse(payload);
      assert.strictEqual(result.success, false);
    });

    it('rejects missing question_id', () => {
      const payload = {
        quiz_id: 'quiz_123',
        answers: [{ selected_option_id: 'opt_1' }],
      };
      const result = quizSubmissionRequestSchema.safeParse(payload);
      assert.strictEqual(result.success, false);
    });
  });

  describe('practiceAttemptRequestSchema', () => {
    it('accepts valid practice attempt', () => {
      const payload = {
        practice_id: 'prac_1',
        question_id: 'q_1',
        selected_option_id: 'opt_1',
      };
      const result = practiceAttemptRequestSchema.safeParse(payload);
      assert.strictEqual(result.success, true);
    });

    it('rejects missing practice_id', () => {
      const payload = {
        question_id: 'q_1',
        selected_option_id: 'opt_1',
      };
      const result = practiceAttemptRequestSchema.safeParse(payload);
      assert.strictEqual(result.success, false);
    });
  });

  describe('learningContextSchema', () => {
    it('accepts valid Grade 8 California context', () => {
      const payload = {
        country_code: 'US',
        jurisdiction_slug: 'california',
        education_system_slug: 'public',
        academic_year: '2026-27',
        grade_slug: 'grade-8',
        subject_slug: 'mathematics',
        goal: 'FOLLOW_CURRICULUM',
      };
      const result = learningContextSchema.safeParse(payload);
      assert.strictEqual(result.success, true);
    });

    it('rejects malformed academic year', () => {
      const payload = {
        country_code: 'US',
        jurisdiction_slug: 'california',
        education_system_slug: 'public',
        academic_year: '2026', // invalid format
        grade_slug: 'grade-8',
        subject_slug: 'mathematics',
        goal: 'FOLLOW_CURRICULUM',
      };
      const result = learningContextSchema.safeParse(payload);
      assert.strictEqual(result.success, false);
    });

    it('rejects invalid goal', () => {
      const payload = {
        country_code: 'US',
        jurisdiction_slug: 'california',
        education_system_slug: 'public',
        academic_year: '2026-27',
        grade_slug: 'grade-8',
        subject_slug: 'mathematics',
        goal: 'RANDOM_GOAL',
      };
      const result = learningContextSchema.safeParse(payload);
      assert.strictEqual(result.success, false);
    });
  });

  describe('reportCreateSchema', () => {
    it('accepts valid report submission', () => {
      const payload = {
        entity_type: 'LESSON',
        entity_id: 'lesson_123',
        category: 'INCORRECT_INFORMATION',
        details: 'The sign on step 3 should be positive rather than negative.',
      };
      const result = reportCreateSchema.safeParse(payload);
      assert.strictEqual(result.success, true);
    });

    it('rejects report with details too short', () => {
      const payload = {
        entity_type: 'LESSON',
        entity_id: 'lesson_123',
        category: 'INCORRECT_INFORMATION',
        details: 'Bad math', // < 10 characters
      };
      const result = reportCreateSchema.safeParse(payload);
      assert.strictEqual(result.success, false);
    });
  });
});
