'use client';

import React, { useState } from 'react';
import {
  SubjectBoardSuite,
  BoardExamPaper,
  ChapterMCQ,
  ChapterSolvedQuestion,
  ChapterStudyNotes,
} from '@/lib/indian-board-materials';

interface IndianClassBoardSuiteViewProps {
  suite: SubjectBoardSuite;
  classLabel: string; // e.g. "Class 10" or "Class 12"
  subjectName: string;
  activeMedium: 'english' | 'hindi';
  onMediumChange?: (medium: 'english' | 'hindi') => void;
}

export function IndianClassBoardSuiteView({
  suite,
  classLabel,
  subjectName,
  activeMedium,
}: IndianClassBoardSuiteViewProps) {
  const [activeTab, setActiveTab] = useState<'papers' | 'mcqs' | 'notes' | 'solved-qa'>('papers');
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [mcqFilter, setMcqFilter] = useState<'all' | 'mcq' | 'assertion-reason' | 'case-based'>('all');
  
  // MCQ interactive state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});

  const selectedPaper = suite.previous5YearsPapers.find((p) => p.year === selectedYear) || suite.previous5YearsPapers[0];

  const handleSelectMCQOption = (mcqId: string, optionIndex: number) => {
    setUserAnswers((prev) => ({ ...prev, [mcqId]: optionIndex }));
    setShowExplanations((prev) => ({ ...prev, [mcqId]: true }));
  };

  const filteredMCQs = suite.chapterMCQs.filter((m) => {
    if (mcqFilter === 'all') return true;
    return m.type === mcqFilter;
  });

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        border: '1.5px solid #e0e7ff',
        padding: '28px',
        boxShadow: '0 12px 32px -8px rgba(79, 70, 229, 0.08)',
        marginBottom: '40px',
      }}
    >
      {/* Header Banner */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: '20px',
          marginBottom: '24px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              🔥 ULTRA-IMPORTANT BOARD EXAM SUITE
            </span>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: '#eef2ff',
                color: '#4338ca',
              }}
            >
              {suite.boardCode}
            </span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172A', margin: 0 }}>
            {classLabel} {subjectName}: Solved 5-Year Papers, MCQs & Notes
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '4px 0 0 0' }}>
            Official CBSE marking schemes (2020–2024), chapter-wise Assertion-Reasoning & MCQs, and examiner notes.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveTab('papers')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'papers' ? '2px solid #4f46e5' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'papers' ? '#4f46e5' : '#ffffff',
              color: activeTab === 'papers' ? '#ffffff' : '#334155',
              transition: 'all 0.15s ease',
            }}
          >
            <span>🏆</span>
            <span>5-Year Solved Papers ({suite.previous5YearsPapers.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('mcqs')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'mcqs' ? '2px solid #4f46e5' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'mcqs' ? '#4f46e5' : '#ffffff',
              color: activeTab === 'mcqs' ? '#ffffff' : '#334155',
              transition: 'all 0.15s ease',
            }}
          >
            <span>🎯</span>
            <span>Chapter MCQs & A/R</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'notes' ? '2px solid #4f46e5' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'notes' ? '#4f46e5' : '#ffffff',
              color: activeTab === 'notes' ? '#ffffff' : '#334155',
              transition: 'all 0.15s ease',
            }}
          >
            <span>📝</span>
            <span>Revision Notes & Formulas</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('solved-qa')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'solved-qa' ? '2px solid #4f46e5' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'solved-qa' ? '#4f46e5' : '#ffffff',
              color: activeTab === 'solved-qa' ? '#ffffff' : '#334155',
              transition: 'all 0.15s ease',
            }}
          >
            <span>💡</span>
            <span>Detailed Solved Q&A</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: PREVIOUS 5 YEARS SOLVED PAPERS                                     */}
      {/* ========================================================================= */}
      {activeTab === 'papers' && selectedPaper && (
        <div>
          {/* Year Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginRight: '4px' }}>
              Select Examination Year:
            </span>
            {suite.previous5YearsPapers.map((paper) => {
              const isSelected = paper.year === selectedYear;
              return (
                <button
                  key={paper.year}
                  type="button"
                  onClick={() => setSelectedYear(paper.year)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    backgroundColor: isSelected ? '#312e81' : '#f1f5f9',
                    color: isSelected ? '#ffffff' : '#334155',
                    border: isSelected ? '1px solid #312e81' : '1px solid #e2e8f0',
                    boxShadow: isSelected ? '0 2px 8px rgba(49, 46, 129, 0.2)' : 'none',
                  }}
                >
                  {paper.year} Board Paper {paper.year === 2024 ? '★ Latest' : ''}
                </button>
              );
            })}
          </div>

          {/* Selected Paper Card */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '24px',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#e0e7ff', color: '#3730a3' }}>
                  {selectedPaper.set}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '8px 0 4px 0' }}>
                  {selectedPaper.title}
                </h3>
                <div style={{ display: 'flex', gap: '12px', fontSize: '0.82rem', color: '#64748b' }}>
                  <span>⏱ Maximum Time: {selectedPaper.timeHours} Hours</span>
                  <span>•</span>
                  <span>🎯 Maximum Marks: {selectedPaper.maxMarks} Marks</span>
                  <span>•</span>
                  <span>📑 {selectedPaper.solvedQuestions.length} Exemplar Questions with Marking Scheme</span>
                </div>
              </div>
            </div>

            {/* General Instructions Box */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                padding: '14px 18px',
                marginBottom: '20px',
              }}
            >
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Official CBSE Blueprint & General Instructions:
              </span>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '0.83rem', color: '#475569', lineHeight: 1.5 }}>
                {selectedPaper.generalInstructions.map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ul>
            </div>

            {/* Solved Questions List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {selectedPaper.solvedQuestions.map((q) => (
                <div
                  key={q.questionNumber}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #cbd5e1',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          backgroundColor: '#4338ca',
                          color: '#ffffff',
                        }}
                      >
                        Q{q.questionNumber} ({q.marks} {q.marks === 1 ? 'Mark' : 'Marks'})
                      </span>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b' }}>
                        {q.sectionTitle}
                      </span>
                    </div>
                    {q.examinerTip && (
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#b45309', backgroundColor: '#fef3c7', padding: '2px 8px', borderRadius: '4px' }}>
                        💡 Examiner Tip
                      </span>
                    )}
                  </div>

                  {/* Question Text */}
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: '12px', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                    {activeMedium === 'hindi' && q.questionTextHindi ? q.questionTextHindi : q.questionText}
                  </div>

                  {/* Options if MCQ */}
                  {q.options && q.options.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', marginBottom: '14px' }}>
                      {(activeMedium === 'hindi' && q.optionsHindi ? q.optionsHindi : (q.options || [])).map((opt: string, optIdx: number) => {
                        const isCorrect = optIdx === q.correctOptionIndex;
                        return (
                          <div
                            key={optIdx}
                            style={{
                              padding: '8px 12px',
                              borderRadius: '8px',
                              border: isCorrect ? '1.5px solid #10b981' : '1px solid #e2e8f0',
                              backgroundColor: isCorrect ? '#ecfdf5' : '#f8fafc',
                              color: isCorrect ? '#065f46' : '#334155',
                              fontSize: '0.85rem',
                              fontWeight: isCorrect ? 700 : 500,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                            }}
                          >
                            <span style={{ fontWeight: 800 }}>({String.fromCharCode(65 + optIdx)})</span>
                            <span>{opt}</span>
                            {isCorrect && <span style={{ marginLeft: 'auto', color: '#10b981', fontWeight: 800 }}>✓ Correct</span>}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Official Marking Scheme Breakdown */}
                  <div
                    style={{
                      backgroundColor: '#eff6ff',
                      borderRadius: '10px',
                      border: '1px solid #bfdbfe',
                      padding: '12px 14px',
                      marginBottom: '12px',
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Official Step-Wise Marking Scheme:
                    </span>
                    <ul style={{ margin: '6px 0 0 0', paddingLeft: '18px', fontSize: '0.82rem', color: '#1e40af', lineHeight: 1.4 }}>
                      {q.markingScheme.map((step, sIdx) => (
                        <li key={sIdx}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed Solution */}
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      padding: '14px',
                      marginBottom: '8px',
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase' }}>
                      Complete Step-by-Step Model Solution:
                    </span>
                    <div style={{ fontSize: '0.88rem', color: '#1e293b', marginTop: '6px', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                      {activeMedium === 'hindi' && q.detailedSolutionHindi ? q.detailedSolutionHindi : q.detailedSolution}
                    </div>
                  </div>

                  {q.examinerTip && (
                    <div style={{ fontSize: '0.8rem', color: '#92400e', backgroundColor: '#fffbeb', padding: '8px 12px', borderRadius: '6px', border: '1px solid #fde68a' }}>
                      <strong>CBSE Examiner Tip:</strong> {q.examinerTip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: CHAPTER-WISE MCQS & ASSERTION-REASONING                            */}
      {/* ========================================================================= */}
      {activeTab === 'mcqs' && (
        <div>
          {/* MCQ Type Filter Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>
              Filter Question Type:
            </span>
            <button
              type="button"
              onClick={() => setMcqFilter('all')}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                backgroundColor: mcqFilter === 'all' ? '#4f46e5' : '#f1f5f9',
                color: mcqFilter === 'all' ? '#ffffff' : '#334155',
                border: 'none',
              }}
            >
              All Types ({suite.chapterMCQs.length})
            </button>
            <button
              type="button"
              onClick={() => setMcqFilter('mcq')}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                backgroundColor: mcqFilter === 'mcq' ? '#4f46e5' : '#f1f5f9',
                color: mcqFilter === 'mcq' ? '#ffffff' : '#334155',
                border: 'none',
              }}
            >
              Multiple Choice (1 Mark)
            </button>
            <button
              type="button"
              onClick={() => setMcqFilter('assertion-reason')}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                backgroundColor: mcqFilter === 'assertion-reason' ? '#4f46e5' : '#f1f5f9',
                color: mcqFilter === 'assertion-reason' ? '#ffffff' : '#334155',
                border: 'none',
              }}
            >
              Assertion-Reason (A/R)
            </button>
            <button
              type="button"
              onClick={() => setMcqFilter('case-based')}
              style={{
                padding: '5px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                backgroundColor: mcqFilter === 'case-based' ? '#4f46e5' : '#f1f5f9',
                color: mcqFilter === 'case-based' ? '#ffffff' : '#334155',
                border: 'none',
              }}
            >
              Case-Based Questions
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredMCQs.map((mcq, idx) => {
              const selectedOpt = userAnswers[mcq.id];
              const isSubmitted = selectedOpt !== undefined;
              const isCorrect = selectedOpt === mcq.correctOptionIndex;

              return (
                <div
                  key={mcq.id}
                  style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    padding: '20px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          backgroundColor: '#3b82f6',
                          color: '#ffffff',
                          textTransform: 'uppercase',
                        }}
                      >
                        {mcq.type}
                      </span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
                        Chapter {mcq.chapterNumber} • 1 Mark
                      </span>
                    </div>
                    {mcq.askedInYear && (
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#047857', backgroundColor: '#d1fae5', padding: '2px 8px', borderRadius: '6px' }}>
                        🏷 {mcq.askedInYear}
                      </span>
                    )}
                  </div>

                  {/* Question */}
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: '14px', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                    {activeMedium === 'hindi' && mcq.questionHindi ? mcq.questionHindi : mcq.question}
                  </div>

                  {/* Interactive Options */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                    {(activeMedium === 'hindi' && mcq.optionsHindi ? mcq.optionsHindi : mcq.options).map((opt, optIdx) => {
                      const isThisSelected = selectedOpt === optIdx;
                      const isThisCorrect = optIdx === mcq.correctOptionIndex;

                      let optBg = '#ffffff';
                      let optBorder = '#cbd5e1';
                      let optColor = '#1e293b';

                      if (isSubmitted) {
                        if (isThisCorrect) {
                          optBg = '#ecfdf5';
                          optBorder = '#10b981';
                          optColor = '#065f46';
                        } else if (isThisSelected) {
                          optBg = '#fef2f2';
                          optBorder = '#ef4444';
                          optColor = '#991b1b';
                        }
                      } else if (isThisSelected) {
                        optBg = '#eef2ff';
                        optBorder = '#4f46e5';
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectMCQOption(mcq.id, optIdx)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 14px',
                            borderRadius: '10px',
                            border: `1.5px solid ${optBorder}`,
                            backgroundColor: optBg,
                            color: optColor,
                            fontSize: '0.88rem',
                            fontWeight: isThisSelected || (isSubmitted && isThisCorrect) ? 700 : 500,
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <span
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              backgroundColor: isSubmitted && isThisCorrect ? '#10b981' : (isThisSelected ? '#4f46e5' : '#f1f5f9'),
                              color: isThisSelected || (isSubmitted && isThisCorrect) ? '#ffffff' : '#475569',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.78rem',
                              fontWeight: 800,
                              flexShrink: 0,
                            }}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span style={{ flex: 1 }}>{opt}</span>
                          {isSubmitted && isThisCorrect && (
                            <span style={{ color: '#10b981', fontWeight: 800, fontSize: '0.82rem' }}>✓ Correct Answer</span>
                          )}
                          {isSubmitted && isThisSelected && !isThisCorrect && (
                            <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '0.82rem' }}>✗ Incorrect</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback & Explanation */}
                  {isSubmitted && (
                    <div
                      style={{
                        backgroundColor: isCorrect ? '#f0fdf4' : '#fff7ed',
                        borderRadius: '10px',
                        border: isCorrect ? '1px solid #bbf7d0' : '1px solid #fed7aa',
                        padding: '12px 14px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.9rem' }}>{isCorrect ? '🎉' : '💡'}</span>
                        <strong style={{ fontSize: '0.85rem', color: isCorrect ? '#166534' : '#9a3412' }}>
                          {isCorrect ? 'Correct! Full mark scored.' : 'Review Concept Explanation:'}
                        </strong>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: isCorrect ? '#14532d' : '#7c2d12', margin: 0, lineHeight: 1.5 }}>
                        {activeMedium === 'hindi' && mcq.explanationHindi ? mcq.explanationHindi : mcq.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: REVISION NOTES & FORMULAS                                         */}
      {/* ========================================================================= */}
      {activeTab === 'notes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {suite.chapterNotes.map((note) => (
            <div
              key={note.chapterNumber}
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', backgroundColor: '#4f46e5', color: '#ffffff' }}>
                  Chapter {note.chapterNumber} Notes
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  {activeMedium === 'hindi' ? note.titleHindi : note.titleEnglish}
                </h3>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, marginBottom: '18px' }}>
                {activeMedium === 'hindi' && note.quickRevisionSummaryHindi ? note.quickRevisionSummaryHindi : note.quickRevisionSummary}
              </p>

              {/* Core Formulas and Laws */}
              <div style={{ marginBottom: '18px' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em', margin: '0 0 10px 0' }}>
                  ⚡ Core Formulas & Fundamental Laws:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                  {note.coreFormulasAndLaws.map((f, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        padding: '12px',
                      }}
                    >
                      <strong style={{ fontSize: '0.85rem', color: '#4338ca', display: 'block', marginBottom: '4px' }}>
                        {f.name}
                      </strong>
                      <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#0f172a', backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '6px', marginBottom: '6px' }}>
                        {f.formulaOrStatement}
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                        {f.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CBSE Examiner Tips */}
              <div
                style={{
                  backgroundColor: '#fffbeb',
                  borderRadius: '12px',
                  border: '1px solid #fde68a',
                  padding: '14px',
                }}
              >
                <strong style={{ fontSize: '0.82rem', color: '#b45309', display: 'block', marginBottom: '6px' }}>
                  ⚠️ CBSE Examiner Alerts & Scoring Tips:
                </strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', color: '#92400e', lineHeight: 1.5 }}>
                  {note.cbseExaminerTips.map((tip, tIdx) => (
                    <li key={tIdx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: DETAILED SOLVED Q&A                                                */}
      {/* ========================================================================= */}
      {activeTab === 'solved-qa' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {suite.chapterSolvedQuestions.map((q) => (
            <div
              key={q.id}
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid #cbd5e1',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '6px',
                      backgroundColor: '#059669',
                      color: '#ffffff',
                    }}
                  >
                    {q.questionType} ({q.marks} {q.marks === 1 ? 'Mark' : 'Marks'})
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
                    Chapter {q.chapterNumber}
                  </span>
                </div>
                {q.askedInYears && q.askedInYears.length > 0 && (
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4338ca', backgroundColor: '#eef2ff', padding: '2px 8px', borderRadius: '6px' }}>
                    📅 {q.askedInYears.join(' • ')}
                  </span>
                )}
              </div>

              {/* Question */}
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                {activeMedium === 'hindi' && q.questionTextHindi ? q.questionTextHindi : q.questionText}
              </div>

              {/* Step-wise Marking */}
              <div
                style={{
                  backgroundColor: '#eff6ff',
                  borderRadius: '8px',
                  border: '1px solid #bfdbfe',
                  padding: '10px 14px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8' }}>
                  Step-Wise Mark Allocation:
                </span>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '18px', fontSize: '0.82rem', color: '#1e40af', lineHeight: 1.4 }}>
                  {q.stepWiseMarking.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ul>
              </div>

              {/* Complete Answer */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  padding: '14px',
                  marginBottom: '10px',
                }}
              >
                <strong style={{ fontSize: '0.8rem', color: '#334155', display: 'block', marginBottom: '6px' }}>
                  Full Model Answer:
                </strong>
                <div style={{ fontSize: '0.88rem', color: '#1e293b', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                  {activeMedium === 'hindi' && q.completeAnswerHindi ? q.completeAnswerHindi : q.completeAnswer}
                </div>
              </div>

              {q.examinerAlert && (
                <div style={{ fontSize: '0.8rem', color: '#991b1b', backgroundColor: '#fef2f2', padding: '8px 12px', borderRadius: '6px', border: '1px solid #fecaca' }}>
                  <strong>CBSE Examiner Alert:</strong> {q.examinerAlert}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
