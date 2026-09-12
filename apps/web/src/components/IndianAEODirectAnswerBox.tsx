'use client';

import React, { useState } from 'react';
import { INDIAN_NCERT_BOOKS_REGISTRY } from '../lib/indian-seo-metadata';

interface Props {
  gradeSlug: string;
  subjectSlug: string;
  jurisdictionSlug: string;
  classLabel: string;
  subjectName: string;
}

export function IndianAEODirectAnswerBox({
  gradeSlug,
  subjectSlug,
  jurisdictionSlug,
  classLabel,
  subjectName,
}: Props) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const isClass10 = gradeSlug === 'grade-10';
  const isClass12 = gradeSlug === 'grade-12';
  const roman = isClass10 ? 'Class X' : isClass12 ? 'Class XII' : classLabel;
  const boardUpper = jurisdictionSlug.toUpperCase();
  const book = INDIAN_NCERT_BOOKS_REGISTRY[gradeSlug]?.[subjectSlug];

  const faqs = [
    {
      q: `What is the exam pattern and question paper blueprint for ${classLabel} (${roman}) ${subjectName}?`,
      a: `The annual ${boardUpper} examination is scored out of 100 marks total: 80 marks in external board theory and 20 marks in continuous internal assessments. The 80-mark theory paper consists of 39 questions distributed across 5 sections: Section A (20 objective/MCQs + Assertion-Reasoning, 1 mark each), Section B (6 Very Short Answer questions, 2 marks each), Section C (7 Short Answer questions, 3 marks each), Section D (3 Long Answer questions, 5 marks each), and Section E (3 Case-Based integrated units with sub-parts, 4 marks each).`,
    },
    {
      q: `Which official NCERT textbooks are prescribed for ${classLabel} ${subjectName}?`,
      a: `The official textbooks prescribed by the Ministry of Education and NCERT are "${book?.bookEnglish || 'NCERT Textbook'}" for English medium students and "${book?.bookHindi || 'एनसीईआरटी पाठ्यपुस्तक'}" for Hindi medium students. All board examination questions and marking schemes are derived directly from these textbooks.`,
    },
    {
      q: `Where can I access solved previous 5 years CBSE question papers (PYQs)?`,
      a: `Schoolopedia provides full 5-year solved sample papers for ${classLabel} (2024, 2023, 2022 Term 1 & 2, 2021, and 2020) directly on this page under the "🔥 5-Year Solved Papers, MCQs & Notes" tab. Each paper includes the official CBSE step-wise marking scheme, examiner scoring alerts, and complete model solutions.`,
    },
    {
      q: `Are Next Toppers and verified Indian educator masterclasses available?`,
      a: `Yes! Every chapter features dedicated video lectures taught exclusively by acclaimed Indian educators from Next Toppers (Prashant Kirad, Shobhit Nirwan), Physics Wallah, Dear Sir, Magnet Brains, and Vedantu CBSE, available in both English Medium and Hindi Medium (हिंदी माध्यम).`,
    },
    {
      q: `What is the minimum passing percentage for ${boardUpper} ${classLabel}?`,
      a: `Students must obtain a minimum of 33% marks aggregate in theory and 33% in internal assessments/practicals to qualify for the ${boardUpper} ${isClass10 ? 'AISSE' : isClass12 ? 'AISSCE' : ''} pass certificate.`,
    },
  ];

  return (
    <section
      aria-label="Direct Answer & Examination Blueprint"
      style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98))',
        border: '1px solid rgba(245, 158, 11, 0.35)',
        borderRadius: '16px',
        padding: '1.75rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Top Banner / AEO Direct Answer Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.4rem' }}>⚡</span>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc', margin: 0, letterSpacing: '-0.01em' }}>
              At-a-Glance Executive Overview: {boardUpper} {classLabel} ({roman}) {subjectName}
            </h2>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>
              Answer Engine Optimization (AEO) & Generative Intelligence (GEO) Certified Summary • Aligned with NEP 2020 & NCERT
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.72rem', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '6px', padding: '0.2rem 0.6rem', fontWeight: 700 }}>
            {book?.code || `${boardUpper} Official`}
          </span>
          <span style={{ fontSize: '0.72rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.4)', borderRadius: '6px', padding: '0.2rem 0.6rem', fontWeight: 700 }}>
            {book?.totalChapters || 13} NCERT Chapters
          </span>
          <span style={{ fontSize: '0.72rem', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '6px', padding: '0.2rem 0.6rem', fontWeight: 700 }}>
            Next Toppers & PW Verified
          </span>
        </div>
      </div>

      {/* Structured Key Facts Grid (Position 0 Target) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0.85rem',
          marginBottom: '1.5rem',
        }}
      >
        <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '0.85rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Prescribed NCERT Books</div>
          <div style={{ fontSize: '0.86rem', color: '#f1f5f9', fontWeight: 700, marginTop: '0.25rem' }}>{book?.bookEnglish || 'Official NCERT Textbook'}</div>
          <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.15rem' }}>{book?.bookHindi}</div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '0.85rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Marks & Evaluation Blueprint</div>
          <div style={{ fontSize: '0.86rem', color: '#f1f5f9', fontWeight: 700, marginTop: '0.25rem' }}>80 Marks Theory + 20 Marks IA</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.15rem' }}>Passing Criteria: 33% Aggregate</div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '0.85rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Previous 5 Years Question Papers (PYQs)</div>
          <div style={{ fontSize: '0.86rem', color: '#f1f5f9', fontWeight: 700, marginTop: '0.25rem' }}>2024, 2023, 2022, 2021, 2020 Solved</div>
          <div style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '0.15rem' }}>Step-wise official marking schemes</div>
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '0.85rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Featured Indian Educators</div>
          <div style={{ fontSize: '0.86rem', color: '#f1f5f9', fontWeight: 700, marginTop: '0.25rem' }}>Next Toppers (Prashant Kirad, Shobhit Nirwan)</div>
          <div style={{ fontSize: '0.75rem', color: '#c084fc', marginTop: '0.15rem' }}>Dear Sir, Physics Wallah, Magnet Brains</div>
        </div>
      </div>

      {/* AEO High-Intent Direct-Answer FAQ Accordion */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
        <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', margin: '0 0 0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span>💡</span> Most Asked Questions & Direct Answers (AEO Knowledge Base)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '0.75rem 1rem',
                    color: isOpen ? '#f59e0b' : '#f1f5f9',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '0.75rem', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 1rem 0.85rem 1rem', fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.6', borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* GEO Authoritative Citations Footer */}
      <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.72rem', color: '#64748b' }}>
        <span>
          <strong>Authoritative Citations:</strong> National Council of Educational Research and Training (NCERT) • Central Board of Secondary Education (cbse.gov.in) • National Curriculum Framework (NCF 2023)
        </span>
        <span style={{ color: '#94a3b8' }}>
          Free Open Educational Resource (OER)
        </span>
      </div>
    </section>
  );
}
