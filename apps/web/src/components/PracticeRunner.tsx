'use client';

import React, { useState } from 'react';
import { API_BASE_URL } from '@/lib/api';

export interface PracticeOption {
  id: string;
  question_id: string;
  text: string;
  is_correct?: boolean;
  feedback?: string;
  order_index: number;
}

export interface PracticeQuestion {
  id: string;
  type: string;
  prompt: string;
  explanation: string;
  options: PracticeOption[];
}

interface PracticeRunnerProps {
  practiceId: string;
  questions: PracticeQuestion[];
}

export function PracticeRunner({ practiceId, questions }: PracticeRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string; explanation: string } | null>(null);

  if (!questions || questions.length === 0) {
    return (
      <div className="student-card" style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
        No practice questions loaded.
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleCheckAnswer = async () => {
    if (!selectedOptionId || isAnswerSubmitted) return;

    const chosenOption = currentQ.options.find((o) => o.id === selectedOptionId);
    const isCorrect = Boolean(chosenOption?.is_correct);

    setIsAnswerSubmitted(true);
    setFeedback({
      isCorrect,
      message: isCorrect
        ? (chosenOption?.feedback || 'Excellent work! That is correct.')
        : (chosenOption?.feedback || 'Not quite. Review the step breakdown below.'),
      explanation: currentQ.explanation,
    });

    // Record practice attempt asynchronously (fail-safe)
    try {
      await fetch(`${API_BASE_URL}/api/v1/practices/attempts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          practice_id: practiceId,
          question_id: currentQ.id,
          selected_option_id: selectedOptionId,
        }),
      });
    } catch {
      // Offline / silent fail safe
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
      setFeedback(null);
    }
  };

  return (
    <div className="student-card" style={{ padding: '36px', marginBottom: '40px' }} id="interactive-practice-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="badge badge-curriculum">Practice Question</span>
          <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
            {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
          <span style={{ fontSize: '0.82rem', color: '#047857', fontWeight: 700 }}>
            Step-by-step Feedback
          </span>
        </div>
      </div>

      {/* Question Prompt */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '24px', lineHeight: 1.5 }}>
        {currentQ.prompt}
      </h3>

      {/* Options Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
        {currentQ.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          let optionBorder = '1.5px solid #e2e8f0';
          let optionBg = '#ffffff';
          let textColor = '#1e293b';

          if (isAnswerSubmitted) {
            if (opt.is_correct) {
              optionBorder = '2px solid #10b981';
              optionBg = '#ecfdf5';
              textColor = '#064e3b';
            } else if (isSelected && !opt.is_correct) {
              optionBorder = '2px solid #ef4444';
              optionBg = '#fff1f2';
              textColor = '#881337';
            }
          } else if (isSelected) {
            optionBorder = '2px solid var(--accent-primary)';
            optionBg = 'var(--accent-primary-tint)';
            textColor = 'var(--accent-primary)';
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelectOption(opt.id)}
              disabled={isAnswerSubmitted}
              id={`practice-opt-${opt.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '14px',
                backgroundColor: optionBg,
                border: optionBorder,
                color: textColor,
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                fontWeight: isSelected ? 700 : 500,
                textAlign: 'left',
                cursor: isAnswerSubmitted ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isSelected ? '0 4px 12px rgba(79, 70, 229, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <span style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                border: isSelected ? '2px solid var(--accent-primary)' : '1.5px solid #cbd5e1',
                backgroundColor: isSelected ? 'var(--accent-primary)' : '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#ffffff',
                flexShrink: 0,
              }}>
                {isSelected ? '✓' : ''}
              </span>
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>

      {/* Action / Submit */}
      {!isAnswerSubmitted ? (
        <button
          onClick={handleCheckAnswer}
          disabled={!selectedOptionId}
          className="btn btn-primary"
          id="btn-check-practice"
          style={{ opacity: selectedOptionId ? 1 : 0.5, padding: '12px 28px' }}
        >
          Check Answer
        </button>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Feedback Box */}
          <div
            className={`callout ${feedback?.isCorrect ? 'callout-success' : 'callout-mistake'}`}
            style={{ margin: 0 }}
          >
            <div style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '6px' }}>
              {feedback?.isCorrect ? '🎉 Correct! Well done!' : '❌ Not quite right yet'}
            </div>
            <p style={{ fontSize: '0.94rem', marginBottom: '10px', lineHeight: 1.6 }}>{feedback?.message}</p>
            <div style={{ fontSize: '0.9rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '10px' }}>
              <strong>Step-by-step breakdown:</strong> {feedback?.explanation}
            </div>
          </div>

          {currentIndex < questions.length - 1 ? (
            <button onClick={handleNext} className="btn btn-primary" id="btn-next-practice" style={{ alignSelf: 'flex-start', padding: '12px 28px' }}>
              Next Practice Question →
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0' }}>
              <span className="badge badge-verified">Practice Completed</span>
              <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                You have completed all practice questions! Ready to take the Mastery Quiz?
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
