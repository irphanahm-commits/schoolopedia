'use client';

import React, { useState } from 'react';
import { API_BASE_URL } from '@/lib/api';
import { QuizGradingResult } from '@schoolopedia/types';

interface QuizOption {
  id: string;
  question_id: string;
  text: string;
  order_index: number;
}

interface QuizQuestion {
  id: string;
  type: string;
  prompt: string;
  options: QuizOption[];
}

interface QuizRunnerProps {
  quizId: string;
  title: string;
  questions: QuizQuestion[];
  passingPercentage: number;
  onMasteryAchieved?: () => void;
}

export function QuizRunner({
  quizId,
  title,
  questions,
  passingPercentage,
  onMasteryAchieved,
}: QuizRunnerProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gradingResult, setGradingResult] = useState<QuizGradingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = (questionId: string, optionId: string) => {
    if (gradingResult) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < questions.length) {
      setError(`Please answer all ${questions.length} questions before submitting.`);
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const payload = {
        quiz_id: quizId,
        answers: Object.entries(answers).map(([question_id, selected_option_id]) => ({
          question_id,
          selected_option_id,
        })),
      };

      const res = await fetch(`${API_BASE_URL}/api/v1/quizzes/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Learner-Id': 'learner_current_session',
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error?.message || 'Quiz submission failed.');
      }

      setGradingResult(json.data);
      if (json.data.mastery_achieved && onMasteryAchieved) {
        onMasteryAchieved();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to grade quiz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setGradingResult(null);
    setError(null);
  };

  return (
    <div className="glass-panel" style={{ padding: '36px', marginBottom: '40px' }} id="mastery-quiz-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <span className="badge badge-standard" style={{ marginBottom: '6px' }}>Formal Assessment</span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{title}</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Required for Mastery:</span>
          <span className="badge badge-verified">{passingPercentage}% or higher</span>
        </div>
      </div>

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '32px' }}>
        {questions.map((q, idx) => {
          const gradedQ = gradingResult?.results.find((r) => r.question_id === q.id);

          return (
            <div
              key={q.id}
              style={{
                padding: '20px',
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                borderRadius: 'var(--radius-md)',
                border: gradedQ
                  ? gradedQ.is_correct
                    ? '1px solid var(--accent-emerald)'
                    : '1px solid var(--accent-rose)'
                  : '1px solid var(--border-subtle)',
              }}
              id={`quiz-question-box-${idx + 1}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Question {idx + 1}
                </span>
                {gradedQ && (
                  <span className={`badge ${gradedQ.is_correct ? 'badge-verified' : 'callout-mistake'}`}>
                    {gradedQ.is_correct ? '✓ Correct (+1 pt)' : '❌ Incorrect (0 pts)'}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '16px' }}>{q.prompt}</p>

              {/* Options */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt.id;
                  let optStyle = {
                    background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'var(--bg-secondary)',
                    border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  };

                  if (gradedQ) {
                    if (opt.id === gradedQ.correct_option_id) {
                      optStyle = {
                        background: 'var(--accent-emerald-subtle)',
                        border: '2px solid var(--accent-emerald)',
                      };
                    } else if (isSelected && !gradedQ.is_correct) {
                      optStyle = {
                        background: 'var(--accent-rose-subtle)',
                        border: '2px solid var(--accent-rose)',
                      };
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      disabled={Boolean(gradingResult)}
                      id={`quiz-opt-${opt.id}`}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                        textAlign: 'left',
                        cursor: gradingResult ? 'default' : 'pointer',
                        transition: 'all 0.15s ease',
                        ...optStyle,
                      }}
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>

              {/* Graded Explanation */}
              {gradedQ && (
                <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <strong>Explanation:</strong> {gradedQ.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {error && (
        <div className="callout callout-mistake" style={{ marginBottom: '20px' }}>
          {error}
        </div>
      )}

      {/* Bottom Action Bar */}
      {!gradingResult ? (
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="btn btn-primary"
          id="btn-submit-quiz"
          style={{ width: '100%', padding: '14px', fontSize: '1.05rem' }}
        >
          {isSubmitting ? 'Evaluating on Server...' : 'Submit Quiz for Official Mastery →'}
        </button>
      ) : (
        <div
          className="glass-panel"
          style={{
            padding: '24px',
            textAlign: 'center',
            backgroundColor: gradingResult.passed ? 'rgba(16, 185, 129, 0.12)' : 'rgba(244, 63, 94, 0.12)',
            border: gradingResult.passed ? '2px solid var(--accent-emerald)' : '2px solid var(--accent-rose)',
          }}
          id="quiz-results-banner"
        >
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
            {gradingResult.passed ? '🏆' : '📚'}
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '6px' }}>
            {gradingResult.passed ? 'Objective Mastered!' : 'Mastery Threshold Not Reached'}
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '16px' }}>
            You scored <strong>{gradingResult.score_percentage}%</strong> ({gradingResult.correct_answers} of {gradingResult.total_questions} correct).
          </p>

          {gradingResult.passed ? (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <span className="badge badge-verified" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                ✓ Official Standard 8.EE.C.7 Mastered
              </span>
            </div>
          ) : (
            <button onClick={handleRetry} className="btn btn-secondary" id="btn-retry-quiz">
              Review Lesson & Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
