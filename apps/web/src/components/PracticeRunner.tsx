'use client';

import React, { useState } from 'react';
import { Question } from '@schoolopedia/types';

interface PracticeRunnerProps {
  practiceId: string;
  questions: Question[];
}

export function PracticeRunner({ practiceId, questions }: PracticeRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string; explanation: string } | null>(null);

  if (!questions || questions.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
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
      await fetch('http://127.0.0.1:8787/api/v1/practices/attempts', {
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
    <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px' }} id="interactive-practice-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge badge-curriculum">Practice Mode</span>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
          Immediate Feedback
        </span>
      </div>

      {/* Question Prompt */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', lineHeight: '1.5' }}>
        {currentQ.prompt}
      </h3>

      {/* Options Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {currentQ.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          let optionBorder = '1px solid var(--border-subtle)';
          let optionBg = 'rgba(15, 23, 42, 0.6)';

          if (isAnswerSubmitted) {
            if (opt.is_correct) {
              optionBorder = '2px solid var(--accent-emerald)';
              optionBg = 'var(--accent-emerald-subtle)';
            } else if (isSelected && !opt.is_correct) {
              optionBorder = '2px solid var(--accent-rose)';
              optionBg = 'var(--accent-rose-subtle)';
            }
          } else if (isSelected) {
            optionBorder = '2px solid var(--accent-primary)';
            optionBg = 'rgba(99, 102, 241, 0.15)';
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
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: optionBg,
                border: optionBorder,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                textAlign: 'left',
                cursor: isAnswerSubmitted ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)',
              }}>
                {isSelected ? '●' : '○'}
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
          style={{ opacity: selectedOptionId ? 1 : 0.5 }}
        >
          Check Answer
        </button>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Feedback Box */}
          <div
            className={`callout ${feedback?.isCorrect ? 'callout-success' : 'callout-mistake'}`}
            style={{ margin: 0 }}
          >
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>
              {feedback?.isCorrect ? '🎉 Correct!' : '❌ Keep Trying'}
            </div>
            <p style={{ fontSize: '0.92rem', marginBottom: '8px' }}>{feedback?.message}</p>
            <div style={{ fontSize: '0.88rem', opacity: 0.9, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '8px' }}>
              <strong>Step-by-step:</strong> {feedback?.explanation}
            </div>
          </div>

          {currentIndex < questions.length - 1 ? (
            <button onClick={handleNext} className="btn btn-primary" id="btn-next-practice">
              Next Practice Question →
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="badge badge-verified">Practice Completed</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Ready to prove your understanding? Take the Mastery Quiz below!
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
