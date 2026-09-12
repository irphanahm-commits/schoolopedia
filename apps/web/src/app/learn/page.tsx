'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchModal } from '@/components/SearchModal';

interface JurisdictionCard {
  countryCode: string;
  countryName: string;
  flag: string;
  jurisdictionName: string;
  authority: string;
  grades: string;
  standardsCode: string;
  courses: Array<{
    subject: string;
    courseTitle: string;
    grade: string;
    lessonCount: number;
    url: string;
    isLive: boolean;
  }>;
}

const TIER1_CURRICULA: JurisdictionCard[] = [
  {
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    jurisdictionName: 'California',
    authority: 'California Department of Education (CDE)',
    grades: 'Grades K–12',
    standardsCode: 'CA Common Core State Standards (CA-CCSS)',
    courses: [
      {
        subject: 'Mathematics',
        courseTitle: 'Grade 8 Mathematics (Linear Equations & Algebra)',
        grade: 'Grade 8',
        lessonCount: 18,
        url: '/learn/us/california/grade-8/mathematics/linear-equations',
        isLive: true,
      },
      {
        subject: 'Science',
        courseTitle: 'Next Generation Science Standards (Physical Sciences)',
        grade: 'Grade 8',
        lessonCount: 14,
        url: '/learn/us/california/grade-8/mathematics/linear-equations',
        isLive: false,
      }
    ]
  },
  {
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    jurisdictionName: 'Texas',
    authority: 'Texas Education Agency (TEA)',
    grades: 'Grades K–12',
    standardsCode: 'Texas Essential Knowledge and Skills (TEKS)',
    courses: [
      {
        subject: 'Mathematics',
        courseTitle: 'Grade 8 Mathematics (TEKS 8.8.C Variable Systems)',
        grade: 'Grade 8',
        lessonCount: 16,
        url: '/learn/us/california/grade-8/mathematics/linear-equations',
        isLive: true,
      }
    ]
  },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    jurisdictionName: 'England',
    authority: 'Department for Education (DfE) / Ofqual',
    grades: 'Key Stages 1–4 (Years 1–11 & GCSE)',
    standardsCode: 'National Curriculum in England (Secondary)',
    courses: [
      {
        subject: 'Mathematics',
        courseTitle: 'Key Stage 3 Mathematics (Algebraic Equations in One Unknown)',
        grade: 'Year 8',
        lessonCount: 20,
        url: '/learn/us/california/grade-8/mathematics/linear-equations',
        isLive: true,
      }
    ]
  },
  {
    countryCode: 'CA',
    countryName: 'Canada',
    flag: '🇨🇦',
    jurisdictionName: 'Ontario',
    authority: 'Ontario Ministry of Education',
    grades: 'Grades K–12',
    standardsCode: 'The Ontario Curriculum: Elementary & De-Streamed Grade 9 (MTH1W)',
    courses: [
      {
        subject: 'Mathematics',
        courseTitle: 'Grade 8 Mathematics (Multi-Term Equations & Integers)',
        grade: 'Grade 8',
        lessonCount: 16,
        url: '/learn/us/california/grade-8/mathematics/linear-equations',
        isLive: true,
      }
    ]
  },
  {
    countryCode: 'AU',
    countryName: 'Australia',
    flag: '🇦🇺',
    jurisdictionName: 'New South Wales',
    authority: 'NSW Education Standards Authority (NESA) / ACARA',
    grades: 'Years K–10 (Stages 1–5)',
    standardsCode: 'Australian Curriculum Version 9.0 (AC9M8A03)',
    courses: [
      {
        subject: 'Mathematics',
        courseTitle: 'Stage 4 Mathematics (Linear Equations with Rational Solutions)',
        grade: 'Year 8',
        lessonCount: 18,
        url: '/learn/us/california/grade-8/mathematics/linear-equations',
        isLive: true,
      }
    ]
  },
  {
    countryCode: 'NZ',
    countryName: 'New Zealand',
    flag: '🇳🇿',
    jurisdictionName: 'National Curriculum',
    authority: 'Ministry of Education (Te Tāhuhu o te Mātauranga)',
    grades: 'Curriculum Levels 1–8 (Years 1–13)',
    standardsCode: 'The New Zealand Curriculum (NZC Level 4/5)',
    courses: [
      {
        subject: 'Mathematics',
        courseTitle: 'Level 4/5 Mathematics (Linear Equations & Algebraic Patterns)',
        grade: 'Level 4/5',
        lessonCount: 15,
        url: '/learn/us/california/grade-8/mathematics/linear-equations',
        isLive: true,
      }
    ]
  }
];

export default function LearnDirectoryPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filterCountry, setFilterCountry] = useState<string>('ALL');

  const filtered = filterCountry === 'ALL'
    ? TIER1_CURRICULA
    : TIER1_CURRICULA.filter(c => c.countryCode === filterCountry);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      <main style={{ flex: 1, padding: '40px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Header Hero */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Tier 1 Curriculum Directory
            </span>
            <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', background: '#e0f2fe', color: '#0369a1', fontWeight: 700 }}>
              5 Countries
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0 }}>
            Curriculum-Aware Learning by State & Jurisdiction
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '750px' }}>
            Explore verified, standards-aligned curriculum maps across the United States, United Kingdom, Canada, Australia, and New Zealand.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { label: '🌍 All Tier 1', value: 'ALL' },
              { label: '🇺🇸 United States', value: 'US' },
              { label: '🇬🇧 United Kingdom', value: 'GB' },
              { label: '🇨🇦 Canada', value: 'CA' },
              { label: '🇦🇺 Australia', value: 'AU' },
              { label: '🇳🇿 New Zealand', value: 'NZ' },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilterCountry(btn.value)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: filterCountry === btn.value ? '2px solid #4f46e5' : '1px solid #e2e8f0',
                  backgroundColor: filterCountry === btn.value ? '#4f46e5' : '#ffffff',
                  color: filterCountry === btn.value ? '#ffffff' : '#334155',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                  transition: 'all 0.15s ease',
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Jurisdictions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
          {filtered.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
                padding: '24px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '2rem' }}>{item.flag}</span>
                    <div>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                        {item.jurisdictionName}
                      </h2>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {item.countryName}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.78rem', padding: '3px 8px', borderRadius: '6px', background: '#ecfdf5', color: '#065f46', fontWeight: 700 }}>
                    {item.grades}
                  </span>
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.4 }}>
                  <strong>Authority:</strong> {item.authority}<br />
                  <strong>Framework:</strong> {item.standardsCode}
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Available Courses
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
                    {item.courses.map((c, i) => (
                      <Link
                        key={i}
                        href={c.url}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          textDecoration: 'none',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                            {c.courseTitle}
                          </div>
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                            {c.grade} • {c.lessonCount} Structured Lessons
                          </span>
                        </div>
                        {c.isLive ? (
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4f46e5' }}>
                            Start →
                          </span>
                        ) : (
                          <span style={{ fontSize: '0.72rem', padding: '2px 6px', borderRadius: '4px', background: '#f1f5f9', color: '#64748b' }}>
                            Upcoming
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
