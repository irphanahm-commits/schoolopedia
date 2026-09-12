import { describe, it } from 'node:test';
import assert from 'node:assert';

interface MockQuestion {
  id: string;
  type: 'MCQ' | 'NUMERIC';
  correct_option_id?: string;
  expected_numeric?: number;
  tolerance?: number;
}

function calculateScore(
  questions: MockQuestion[],
  answers: Array<{ question_id: string; selected_option_id?: string; numeric_value?: number }>,
  passingPercentage: number = 80
) {
  let correctCount = 0;
  for (const q of questions) {
    const ans = answers.find((a) => a.question_id === q.id);
    if (!ans) continue;

    if (q.type === 'MCQ') {
      if (ans.selected_option_id && ans.selected_option_id === q.correct_option_id) {
        correctCount++;
      }
    } else if (q.type === 'NUMERIC' && q.expected_numeric !== undefined && ans.numeric_value !== undefined) {
      const tol = q.tolerance ?? 0;
      if (Math.abs(ans.numeric_value - q.expected_numeric) <= tol) {
        correctCount++;
      }
    }
  }

  const scorePercentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  const passed = scorePercentage >= passingPercentage;
  return {
    total: questions.length,
    correct: correctCount,
    scorePercentage,
    passed,
    masteryAchieved: passed,
  };
}

describe('Deterministic Scoring Engine Suite', () => {
  const sampleQuizQuestions: MockQuestion[] = [
    { id: 'q1', type: 'MCQ', correct_option_id: 'opt_1' },
    { id: 'q2', type: 'MCQ', correct_option_id: 'opt_2' },
    { id: 'q3', type: 'MCQ', correct_option_id: 'opt_3' },
    { id: 'q4', type: 'MCQ', correct_option_id: 'opt_4' },
    { id: 'q5', type: 'NUMERIC', expected_numeric: 8, tolerance: 0.01 },
  ];

  it('awards mastery when learner scores 100% (5/5)', () => {
    const answers = [
      { question_id: 'q1', selected_option_id: 'opt_1' },
      { question_id: 'q2', selected_option_id: 'opt_2' },
      { question_id: 'q3', selected_option_id: 'opt_3' },
      { question_id: 'q4', selected_option_id: 'opt_4' },
      { question_id: 'q5', numeric_value: 8.0 },
    ];

    const result = calculateScore(sampleQuizQuestions, answers, 80);
    assert.strictEqual(result.correct, 5);
    assert.strictEqual(result.scorePercentage, 100);
    assert.strictEqual(result.passed, true);
    assert.strictEqual(result.masteryAchieved, true);
  });

  it('awards mastery when learner meets exact passing threshold of 80% (4/5)', () => {
    const answers = [
      { question_id: 'q1', selected_option_id: 'opt_1' },
      { question_id: 'q2', selected_option_id: 'opt_2' },
      { question_id: 'q3', selected_option_id: 'opt_3' },
      { question_id: 'q4', selected_option_id: 'opt_4' },
      { question_id: 'q5', numeric_value: 99 }, // wrong
    ];

    const result = calculateScore(sampleQuizQuestions, answers, 80);
    assert.strictEqual(result.correct, 4);
    assert.strictEqual(result.scorePercentage, 80);
    assert.strictEqual(result.passed, true);
    assert.strictEqual(result.masteryAchieved, true);
  });

  it('denies mastery when score falls below 80% (3/5 = 60%)', () => {
    const answers = [
      { question_id: 'q1', selected_option_id: 'opt_1' },
      { question_id: 'q2', selected_option_id: 'opt_2' },
      { question_id: 'q3', selected_option_id: 'opt_3' },
      { question_id: 'q4', selected_option_id: 'wrong_opt' },
      { question_id: 'q5', numeric_value: 99 },
    ];

    const result = calculateScore(sampleQuizQuestions, answers, 80);
    assert.strictEqual(result.correct, 3);
    assert.strictEqual(result.scorePercentage, 60);
    assert.strictEqual(result.passed, false);
    assert.strictEqual(result.masteryAchieved, false);
  });

  it('accepts numeric values within allowed tolerance', () => {
    const questions: MockQuestion[] = [
      { id: 'q1', type: 'NUMERIC', expected_numeric: 3.14159, tolerance: 0.01 },
    ];

    const passResult = calculateScore(questions, [{ question_id: 'q1', numeric_value: 3.145 }]);
    assert.strictEqual(passResult.correct, 1);

    const failResult = calculateScore(questions, [{ question_id: 'q1', numeric_value: 3.16 }]);
    assert.strictEqual(failResult.correct, 0);
  });
});
