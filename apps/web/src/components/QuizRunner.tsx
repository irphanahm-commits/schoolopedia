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
    <div className="student-card" style={{ padding: '36px', marginBottom: '40px' }} id="mastery-quiz-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span className="badge badge-curriculum" style={{ marginBottom: '8px' }}>Formal Assessment</span>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>{title}</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.86rem', color: '#64748b', fontWeight: 600 }}>Passing Criteria:</span>
          <span className="badge badge-verified">{passingPercentage}% or higher</span>
        </div>
      </div>

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
        {questions.map((q, idx) => {
          const gradedQ = gradingResult?.results.find((r) => r.question_id === q.id);

          return (
            <div
              key={q.id}
              style={{
                padding: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: gradedQ
                  ? gradedQ.is_correct
                    ? '2px solid #10b981'
                    : '2px solid #ef4444'
                  : '1.5px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
              }}
              id={`quiz-question-box-${idx + 1}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Question {idx + 1} of {questions.length}
                </span>
                {gradedQ && (
                  <span className={`badge ${gradedQ.is_correct ? 'badge-verified' : 'badge-coral'}`}>
                    {gradedQ.is_correct ? '✓ Correct (+1 pt)' : '❌ Incorrect (0 pts)'}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px', lineHeight: 1.5 }}>
                {q.prompt}
              </p>

              {/* Options */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt.id;
                  let optStyle = {
                    background: isSelected ? 'var(--accent-primary-tint)' : '#ffffff',
                    border: isSelected ? '2px solid var(--accent-primary)' : '1.5px solid #e2e8f0',
                    color: isSelected ? 'var(--accent-primary)' : '#1e293b',
                  };

                  if (gradedQ) {
                    if (opt.id === gradedQ.correct_option_id) {
                      optStyle = {
                        background: '#ecfdf5',
                        border: '2px solid #10b981',
                        color: '#064e3b',
                      };
                    } else if (isSelected && !gradedQ.is_correct) {
                      optStyle = {
                        background: '#fff1f2',
                        border: '2px solid #ef4444',
                        color: '#881337',
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
                        padding: '14px 18px',
                        borderRadius: '12px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.94rem',
                        fontWeight: isSelected ? 700 : 500,
                        textAlign: 'left',
                        cursor: gradingResult ? 'default' : 'pointer',
                        transition: 'all 0.15s ease',
                        boxShadow: isSelected ? '0 2px 8px rgba(79, 70, 229, 0.08)' : 'none',
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
                <div style={{
                  marginTop: '16px',
                  paddingTop: '14px',
                  borderTop: '1px solid #e2e8f0',
                  fontSize: '0.92rem',
                  color: '#334155',
                  lineHeight: 1.6,
                }}>
                  <strong>Explanation:</strong> {gradedQ.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {error && (
        <div className="callout callout-mistake" style={{ marginBottom: '24px' }}>
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
          style={{ width: '100%', padding: '16px', fontSize: '1.05rem', fontWeight: 800 }}
        >
          {isSubmitting ? 'Evaluating on Server...' : 'Submit Quiz for Official Mastery →'}
        </button>
      ) : (
        <div
          className="student-card"
          style={{
            padding: '32px',
            textAlign: 'center',
            backgroundColor: gradingResult.passed ? '#ecfdf5' : '#fff1f2',
            border: gradingResult.passed ? '2px solid #10b981' : '2px solid #ef4444',
          }}
          id="quiz-results-banner"
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
            {gradingResult.passed ? '🏆' : '📚'}
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: gradingResult.passed ? '#064e3b' : '#881337', marginBottom: '8px' }}>
            {gradingResult.passed ? 'Objective Mastered!' : 'Mastery Threshold Not Reached'}
          </h3>
          <p style={{ fontSize: '1.1rem', color: gradingResult.passed ? '#047857' : '#9f1239', marginBottom: '20px' }}>
            You scored <strong>{gradingResult.score_percentage}%</strong> ({gradingResult.correct_answers} of {gradingResult.total_questions} correct).
          </p>

          {gradingResult.passed ? (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <span className="badge badge-verified" style={{ padding: '10px 20px', fontSize: '0.95rem' }}>
                ✓ Official Standard CCSS 8.EE.C.7 Mastered
              </span>
            </div>
          ) : (
            <button onClick={handleRetry} className="btn btn-secondary" id="btn-retry-quiz" style={{ padding: '12px 24px' }}>
              Review Lesson & Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
