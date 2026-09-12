import { D1Database } from '@cloudflare/workers-types';
import {
  Practice,
  Quiz,
  Question,
  QuestionOption,
  QuestionAnswerSubmission,
  QuizGradingResult,
  QuestionGradingResult,
  PracticeAttempt,
} from '@schoolopedia/types';

export class AssessmentRepository {
  constructor(private readonly db: D1Database) {}

  async getPractice(lessonId: string): Promise<Practice | null> {
    const practice = await this.db
      .prepare('SELECT * FROM practices WHERE lesson_id = ? LIMIT 1')
      .bind(lessonId)
      .first<Practice>();

    if (!practice) {
      return null;
    }

    const lesson = await this.db
      .prepare('SELECT primary_objective_id FROM lessons WHERE id = ?')
      .bind(lessonId)
      .first<{ primary_objective_id: string }>();

    if (!lesson) return null;

    const questionsResult = await this.db
      .prepare(
        `SELECT * FROM questions WHERE objective_id = ? ORDER BY difficulty_level ASC`
      )
      .bind(lesson.primary_objective_id)
      .all<Question>();

    const questions = questionsResult.results || [];
    const questionIds = questions.map((q) => q.id);

    let options: QuestionOption[] = [];
    if (questionIds.length > 0) {
      const placeholders = questionIds.map(() => '?').join(',');
      const optResult = await this.db
        .prepare(`SELECT * FROM question_options WHERE question_id IN (${placeholders}) ORDER BY order_index ASC`)
        .bind(...questionIds)
        .all<QuestionOption>();
      options = optResult.results || [];
    }

    return {
      ...practice,
      questions: questions.map((q) => ({
        ...q,
        options: options.filter((opt) => opt.question_id === q.id),
      })),
    };
  }

  async getQuizForLearner(lessonId: string): Promise<
    | (Omit<Quiz, 'questions'> & {
        questions: Array<
          Omit<Question, 'explanation' | 'options'> & {
            options: Array<Omit<QuestionOption, 'is_correct'>>;
          }
        >;
      })
    | null
  > {
    const quiz = await this.db
      .prepare('SELECT * FROM quizzes WHERE lesson_id = ? LIMIT 1')
      .bind(lessonId)
      .first<Quiz>();

    if (!quiz) {
      return null;
    }

    const questionsResult = await this.db
      .prepare(
        `SELECT q.id, q.objective_id, q.type, q.prompt, q.difficulty_level, q.tolerance, q.created_at, q.updated_at
         FROM quiz_questions qq
         JOIN questions q ON qq.question_id = q.id
         WHERE qq.quiz_id = ?
         ORDER BY qq.order_index ASC`
      )
      .bind(quiz.id)
      .all<Question>();

    const questions = questionsResult.results || [];
    const questionIds = questions.map((q) => q.id);

    let options: QuestionOption[] = [];
    if (questionIds.length > 0) {
      const placeholders = questionIds.map(() => '?').join(',');
      const optResult = await this.db
        .prepare(
          `SELECT id, question_id, text, feedback, order_index FROM question_options WHERE question_id IN (${placeholders}) ORDER BY order_index ASC`
        )
        .bind(...questionIds)
        .all<QuestionOption>();
      options = optResult.results || [];
    }

    return {
      id: quiz.id,
      lesson_id: quiz.lesson_id,
      title: quiz.title,
      passing_percentage: quiz.passing_percentage,
      created_at: quiz.created_at,
      questions: questions.map((q) => ({
        ...q,
        options: options
          .filter((opt) => opt.question_id === q.id)
          .map(({ id, question_id, text, feedback, order_index }) => ({
            id,
            question_id,
            text,
            feedback,
            order_index,
          })),
      })),
    };
  }

  async gradeQuiz(
    quizId: string,
    answers: QuestionAnswerSubmission[],
    learnerId: string
  ): Promise<QuizGradingResult> {
    const quiz = await this.db.prepare('SELECT * FROM quizzes WHERE id = ?').bind(quizId).first<Quiz>();
    if (!quiz) {
      throw new Error(`Quiz with id ${quizId} not found`);
    }

    const questionsResult = await this.db
      .prepare(
        `SELECT q.* FROM quiz_questions qq
         JOIN questions q ON qq.question_id = q.id
         WHERE qq.quiz_id = ?`
      )
      .bind(quizId)
      .all<Question>();

    const questions = questionsResult.results || [];
    const questionIds = questions.map((q) => q.id);

    const placeholders = questionIds.map(() => '?').join(',');
    const optionsResult = await this.db
      .prepare(`SELECT * FROM question_options WHERE question_id IN (${placeholders})`)
      .bind(...questionIds)
      .all<QuestionOption>();

    const options = optionsResult.results || [];

    let correctCount = 0;
    const results: QuestionGradingResult[] = [];

    for (const q of questions) {
      const submitted = answers.find((a) => a.question_id === q.id);
      const qOptions = options.filter((o) => o.question_id === q.id);
      const correctOption = qOptions.find((o) => Boolean(o.is_correct));

      let isCorrect = false;

      if (q.type === 'MCQ' || q.type === 'TRUE_FALSE') {
        if (submitted?.selected_option_id && correctOption && submitted.selected_option_id === correctOption.id) {
          isCorrect = true;
        }
      } else if (q.type === 'NUMERIC' && q.tolerance !== undefined && submitted?.numeric_value !== undefined) {
        const expectedNumeric = parseFloat(correctOption?.text || '0');
        if (Math.abs(submitted.numeric_value - expectedNumeric) <= q.tolerance) {
          isCorrect = true;
        }
      }

      if (isCorrect) {
        correctCount++;
      }

      results.push({
        question_id: q.id,
        is_correct: isCorrect,
        score_earned: isCorrect ? 1 : 0,
        correct_option_id: correctOption?.id,
        explanation: q.explanation,
        feedback: isCorrect ? 'Correct!' : correctOption?.feedback || 'Incorrect.',
      });
    }

    const totalQuestions = questions.length;
    const scorePercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const passed = scorePercentage >= quiz.passing_percentage;
    const attemptId = `qa_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date().toISOString();

    // 1. Record quiz attempt in D1
    await this.db
      .prepare(
        `INSERT INTO quiz_attempts (id, learner_id, quiz_id, total_questions, correct_answers, score_percentage, passed, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(attemptId, learnerId, quizId, totalQuestions, correctCount, scorePercentage, passed ? 1 : 0, now)
      .run();

    // 2. Deterministic Mastery Update
    const lesson = await this.db
      .prepare('SELECT primary_objective_id FROM lessons WHERE id = ?')
      .bind(quiz.lesson_id)
      .first<{ primary_objective_id: string }>();

    if (lesson?.primary_objective_id) {
      const masteryStatus = passed ? 'MASTERED' : 'NEEDS_REVIEW';
      await this.db
        .prepare(
          `INSERT INTO learner_mastery (id, learner_id, objective_id, status, score_percentage, attempts_count, last_evaluated_at, updated_at)
           VALUES (?, ?, ?, ?, ?, 1, ?, ?)
           ON CONFLICT(learner_id, objective_id) DO UPDATE SET
             status = CASE WHEN ? = 'MASTERED' THEN 'MASTERED' ELSE status END,
             score_percentage = MAX(score_percentage, ?),
             attempts_count = attempts_count + 1,
             last_evaluated_at = ?,
             updated_at = ?`
        )
        .bind(
          `lm_${learnerId}_${lesson.primary_objective_id}`,
          learnerId,
          lesson.primary_objective_id,
          masteryStatus,
          scorePercentage,
          now,
          now,
          masteryStatus,
          scorePercentage,
          now,
          now
        )
        .run();
    }

    return {
      quiz_id: quizId,
      attempt_id: attemptId,
      total_questions: totalQuestions,
      correct_answers: correctCount,
      score_percentage: scorePercentage,
      passed,
      mastery_achieved: passed,
      results,
      completed_at: now,
    };
  }

  async recordPracticeAttempt(attempt: Omit<PracticeAttempt, 'id' | 'created_at'>): Promise<PracticeAttempt> {
    const id = `pa_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date().toISOString();

    await this.db
      .prepare(
        `INSERT INTO practice_attempts (id, learner_id, practice_id, question_id, selected_option_id, numeric_value, is_correct, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        id,
        attempt.learner_id,
        attempt.practice_id,
        attempt.question_id,
        attempt.selected_option_id || null,
        attempt.numeric_value || null,
        attempt.is_correct ? 1 : 0,
        now
      )
      .run();

    return {
      id,
      ...attempt,
      created_at: now,
    };
  }
}
