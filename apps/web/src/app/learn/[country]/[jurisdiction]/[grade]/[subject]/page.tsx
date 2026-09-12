import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LESSONS_CATALOGUE, STANDARD_COURSES, getJurisdiction, TIER1_JURISDICTIONS } from '@/lib/curriculum-data';

interface CourseSyllabusProps {
  params: Promise<{
    country: string;
    jurisdiction: string;
    grade: string;
    subject: string;
  }>;
}

export async function generateStaticParams() {
  const paramsList: Array<{
    country: string;
    jurisdiction: string;
    grade: string;
    subject: string;
  }> = [];

  for (const j of TIER1_JURISDICTIONS) {
    for (const c of STANDARD_COURSES) {
      paramsList.push({
        country: j.countryCode,
        jurisdiction: j.slug,
        grade: c.gradeSlug,
        subject: c.subjectSlug,
      });
    }
  }

  return paramsList;
}

export default async function CourseSyllabusPage({ params }: CourseSyllabusProps) {
  const resolvedParams = await params;

  // Filter lessons matching this grade and subject
  const matchingLessons = Object.values(LESSONS_CATALOGUE).filter(
    l => l.gradeSlug === resolvedParams.grade && l.subjectSlug === resolvedParams.subject
  );

  const fallbackLesson = Object.values(LESSONS_CATALOGUE).find(l => l.slug === 'linear-equations')!;
  const currentLesson = matchingLessons[0] || fallbackLesson;

  const jurisdictionMeta = getJurisdiction(resolvedParams.country, resolvedParams.jurisdiction);
  const jurisdictionName = jurisdictionMeta ? jurisdictionMeta.name : currentLesson.jurisdictionName;
  const authorityName = jurisdictionMeta ? jurisdictionMeta.authority : currentLesson.authorityName;
  const flag = jurisdictionMeta ? jurisdictionMeta.flag : '🇺🇸';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      <Header />

      <main style={{ flex: 1, padding: '40px 24px', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
          <Link href="/learn" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            Curriculum Directory
          </Link>
          <span>/</span>
          <Link href={`/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            {flag} {jurisdictionName}
          </Link>
          <span>/</span>
          <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{currentLesson.gradeName}</span>
          <span>/</span>
          <span>{currentLesson.subjectName}</span>
        </nav>

        {/* Course Syllabus Hero */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '3px 10px',
              borderRadius: '6px',
              backgroundColor: '#eef2ff',
              color: '#4338ca',
            }}>
              {currentLesson.standardCode}
            </span>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '3px 10px',
              borderRadius: '6px',
              backgroundColor: '#ecfdf5',
              color: '#065f46',
            }}>
              ✓ {authorityName} Official Syllabus
            </span>
          </div>

          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
            {currentLesson.gradeName} {currentLesson.subjectName} Syllabus
          </h1>
          <p style={{ fontSize: '1rem', color: '#475569', margin: '0 0 20px', maxWidth: '750px' }}>
            Sequential, competency-aligned curriculum modules designed to guide learners toward complete conceptual mastery and real-world application.
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Link
              href={`/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}/${resolvedParams.grade}/${resolvedParams.subject}/${currentLesson.slug}`}
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
              }}
            >
              Start Active Lesson →
            </Link>
          </div>
        </div>

        {/* Modules / Lessons List */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
        }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
            Curriculum Units & Lessons
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {matchingLessons.length > 0 ? (
              matchingLessons.map((l, index) => (
                <div
                  key={l.slug}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid #edf2f7',
                    backgroundColor: '#fafbfc',
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#eef2ff',
                      color: '#4f46e5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                    }}>
                      {index + 1}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.05rem', marginBottom: '4px' }}>
                        {l.title}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                        {l.standardCode} • {l.standardTitle}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}/${resolvedParams.grade}/${resolvedParams.subject}/${l.slug}`}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '10px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #c7d2fe',
                      color: '#4f46e5',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                    }}
                  >
                    Open Lesson →
                  </Link>
                </div>
              ))
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid #edf2f7',
                  backgroundColor: '#fafbfc',
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#eef2ff',
                    color: '#4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                  }}>
                    1
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.05rem', marginBottom: '4px' }}>
                      {currentLesson.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                      {currentLesson.standardCode} • {currentLesson.standardTitle}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}/${resolvedParams.grade}/${resolvedParams.subject}/${currentLesson.slug}`}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #c7d2fe',
                    color: '#4f46e5',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                  }}
                >
                  Open Lesson →
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
