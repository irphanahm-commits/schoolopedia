import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  TIER1_JURISDICTIONS,
  STANDARD_COURSES,
  getCoursesForJurisdiction,
  getJurisdiction,
  CourseCardData
} from '@/lib/curriculum-data';

interface JurisdictionOverviewProps {
  params: Promise<{
    country: string;
    jurisdiction: string;
  }>;
}

export async function generateStaticParams() {
  return TIER1_JURISDICTIONS.map(j => ({
    country: j.countryCode,
    jurisdiction: j.slug,
  }));
}

export default async function JurisdictionOverviewPage({ params }: JurisdictionOverviewProps) {
  const resolvedParams = await params;
  const jurisdiction = getJurisdiction(resolvedParams.country, resolvedParams.jurisdiction) || {
    slug: resolvedParams.jurisdiction,
    name: resolvedParams.jurisdiction.charAt(0).toUpperCase() + resolvedParams.jurisdiction.slice(1).replace('-', ' '),
    countryCode: resolvedParams.country,
    countryName: resolvedParams.country.toUpperCase(),
    flag: '🏛️',
    authority: 'Department of Education',
    framework: 'Curriculum Standards Framework',
    portalUrl: 'https://schoolopedia.com',
    grades: 'Grades K–12'
  };

  const subjectBadges: Record<string, { bg: string; text: string; icon: string }> = {
    'mathematics': { bg: '#EEF2FF', text: '#4338CA', icon: '📐' },
    'science': { bg: '#E0F2FE', text: '#0369A1', icon: '🔬' },
    'english': { bg: '#ECFDF5', text: '#047857', icon: '📚' },
    'civics': { bg: '#FEF3C7', text: '#B45309', icon: '🏛️' },
    'computer-science': { bg: '#F3E8FF', text: '#7E22CE', icon: '💻' }
  };

  const isUK = jurisdiction.countryCode.toLowerCase() === 'gb';
  const isIndia = jurisdiction.countryCode.toLowerCase() === 'in';
  const isScotland = isUK && jurisdiction.slug.toLowerCase() === 'scotland';
  const isWales = isUK && jurisdiction.slug.toLowerCase() === 'wales';
  const isNI = isUK && jurisdiction.slug.toLowerCase() === 'northern-ireland';

  // Retrieve localized courses for this specific jurisdiction
  const allCourses = getCoursesForJurisdiction(jurisdiction.countryCode, jurisdiction.slug);

  // Group courses by grade band (for non-Indian jurisdictions)
  const elementaryCourses = allCourses.filter(c => c.gradeBand === 'elementary');
  const middleCourses = allCourses.filter(c => c.gradeBand === 'middle-school');
  const highCourses = allCourses.filter(c => c.gradeBand === 'high-school');

  // Dedicated Unmixed Indian Classes (Classes 6–12 & Primary)
  const class10Courses = allCourses.filter(c => c.gradeSlug === 'grade-10');
  const class12Courses = allCourses.filter(c => c.gradeSlug === 'grade-12');
  const class9Courses = allCourses.filter(c => c.gradeSlug === 'grade-9');
  const class11Courses = allCourses.filter(c => c.gradeSlug === 'grade-11');
  const class8Courses = allCourses.filter(c => c.gradeSlug === 'grade-8');
  const class7Courses = allCourses.filter(c => c.gradeSlug === 'grade-7');
  const class6Courses = allCourses.filter(c => c.gradeSlug === 'grade-6');
  const primaryCourses = allCourses.filter(c => ['grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5'].includes(c.gradeSlug));

  const renderIndianClassSection = (
    id: string,
    title: string,
    subtitle: string,
    courses: CourseCardData[],
    isUltraImportant: boolean = false,
    boardExamBadge?: string
  ) => (
    <div id={id} style={{ marginBottom: '3rem', scrollMarginTop: '20px' }}>
      {isUltraImportant && (
        <div
          style={{
            backgroundColor: '#1e1b4b',
            color: '#ffffff',
            borderRadius: '16px',
            padding: '18px 22px',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            boxShadow: '0 4px 16px rgba(30, 27, 75, 0.25)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', backgroundColor: '#dc2626', color: '#ffffff', textTransform: 'uppercase' }}>
                🔥 ULTRA-IMPORTANT BOARD YEAR
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '6px', backgroundColor: '#3730a3', color: '#e0e7ff' }}>
                {boardExamBadge || 'CBSE National Board Exam'}
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              {title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '3px 0 0 0' }}>
              Complete 5-Year Solved Board Papers (2020–2024), Chapter MCQs & Assertion-Reasoning, Revision Notes & Formulas.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 12px', borderRadius: '8px', backgroundColor: '#312e81', color: '#c7d2fe', border: '1px solid #4338ca' }}>
              🏆 2020–2024 Solved Papers
            </span>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 12px', borderRadius: '8px', backgroundColor: '#064e3b', color: '#a7f3d0', border: '1px solid #059669' }}>
              🎯 Chapter-Wise MCQs
            </span>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, padding: '6px 12px', borderRadius: '8px', backgroundColor: '#78350f', color: '#fde68a', border: '1px solid #d97706' }}>
              📝 Revision Notes
            </span>
          </div>
        </div>
      )}

      {!isUltraImportant && (
        <div style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{title}</span>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '2px 8px', borderRadius: '12px', backgroundColor: '#EEF2FF', color: '#4338CA' }}>
              {courses.length} Courses
            </span>
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#64748B', margin: '0.35rem 0 0 0' }}>
            {subtitle}
          </p>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: '1.25rem'
      }}>
        {courses.map(c => {
          const badge = subjectBadges[c.subjectSlug] || { bg: '#F1F5F9', text: '#475569', icon: '📖' };
          const lessonUrl = `/learn/${jurisdiction.countryCode}/${jurisdiction.slug}/${c.gradeSlug}/${c.subjectSlug}/${c.sampleLessonSlug}`;
          const syllabusUrl = `/learn/${jurisdiction.countryCode}/${jurisdiction.slug}/${c.gradeSlug}/${c.subjectSlug}`;

          return (
            <div
              key={c.slug}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: isUltraImportant ? '1.5px solid #c7d2fe' : '1px solid #E2E8F0',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: isUltraImportant ? '0 6px 18px -3px rgba(79, 70, 229, 0.1)' : '0 4px 12px -2px rgba(79, 70, 229, 0.04)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '8px',
                    backgroundColor: badge.bg,
                    color: badge.text,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    <span>{badge.icon}</span>
                    <span>{c.subject}</span>
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B' }}>
                    {c.lessonCount} Lessons
                  </span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', margin: '0 0 0.5rem 0', lineHeight: 1.4 }}>
                  {c.title}
                </h4>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: isUltraImportant ? '#eef2ff' : '#F1F5F9', color: isUltraImportant ? '#4338ca' : '#475569' }}>
                    {c.grade.replace(/Grade\s*(\d+)/gi, 'Class $1')}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>•</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'monospace' }}>
                    {c.standardCode}
                  </span>
                </div>
              </div>

              {isUltraImportant && (
                <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: '#eef2ff', color: '#4338ca' }}>
                    📝 Notes
                  </span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: '#ecfdf5', color: '#065f46' }}>
                    🎯 MCQs
                  </span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e' }}>
                    🏆 5-Yr Papers
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                <Link
                  href={syllabusUrl}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.55rem',
                    borderRadius: '8px',
                    backgroundColor: isUltraImportant ? '#4f46e5' : '#F8FAFC',
                    border: isUltraImportant ? '1px solid #4f46e5' : '1px solid #E2E8F0',
                    color: isUltraImportant ? '#FFFFFF' : '#334155',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: isUltraImportant ? '0 2px 8px rgba(79, 70, 229, 0.25)' : 'none',
                  }}
                >
                  Full Syllabus & Videos →
                </Link>
                <Link
                  href={lessonUrl}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.55rem',
                    borderRadius: '8px',
                    backgroundColor: isUltraImportant ? '#F8FAFC' : '#4F46E5',
                    border: isUltraImportant ? '1px solid #CBD5E1' : 'none',
                    color: isUltraImportant ? '#334155' : '#FFFFFF',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Open Lesson →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCourseSection = (id: string, title: string, subtitle: string, courses: CourseCardData[]) => (
    <div id={id} style={{ marginBottom: '3rem', scrollMarginTop: '20px' }}>
      <div style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>{title}</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '2px 8px', borderRadius: '12px', backgroundColor: '#EEF2FF', color: '#4338CA' }}>
            {courses.length} Courses
          </span>
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#64748B', margin: '0.35rem 0 0 0' }}>
          {subtitle}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: '1.25rem'
      }}>
        {courses.map(c => {
          const badge = subjectBadges[c.subjectSlug] || { bg: '#F1F5F9', text: '#475569', icon: '📖' };
          const lessonUrl = `/learn/${jurisdiction.countryCode}/${jurisdiction.slug}/${c.gradeSlug}/${c.subjectSlug}/${c.sampleLessonSlug}`;
          const syllabusUrl = `/learn/${jurisdiction.countryCode}/${jurisdiction.slug}/${c.gradeSlug}/${c.subjectSlug}`;

          return (
            <div
              key={c.slug}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px -2px rgba(79, 70, 229, 0.04)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '8px',
                    backgroundColor: badge.bg,
                    color: badge.text,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    <span>{badge.icon}</span>
                    <span>{c.subject}</span>
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B' }}>
                    {c.lessonCount} Lessons
                  </span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', margin: '0 0 0.5rem 0', lineHeight: 1.4 }}>
                  {c.title}
                </h4>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: '#F1F5F9', color: '#475569' }}>
                    {isIndia ? c.grade.replace(/Grade\s*(\d+)/gi, 'Class $1') : c.grade}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>•</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'monospace' }}>
                    {c.standardCode}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <Link
                  href={syllabusUrl}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.55rem',
                    borderRadius: '8px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    color: '#334155',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Full Syllabus
                </Link>
                <Link
                  href={lessonUrl}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.55rem',
                    borderRadius: '8px',
                    backgroundColor: '#4F46E5',
                    color: '#FFFFFF',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Open Lesson →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '2.5rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: '#64748B', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/learn" style={{ color: '#64748B', textDecoration: 'none' }}>Learn</Link>
          <span>/</span>
          <span style={{ color: '#0F172A', fontWeight: 600 }}>{jurisdiction.name}</span>
        </nav>

        {/* Hero Header */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          padding: '2rem',
          boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.05)',
          marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '2.5rem' }}>{jurisdiction.flag}</span>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {jurisdiction.name} Curriculum & Standards
              </h1>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.875rem', color: '#64748B' }}>Official Education Authority:</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#334155' }}>{jurisdiction.authority}</span>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: '#F8FAFC',
            borderRadius: '12px',
            border: '1px solid #F1F5F9',
            marginTop: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ fontSize: '0.8125rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                Primary Framework:
              </span>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#4F46E5', marginTop: '0.125rem' }}>
                {jurisdiction.framework}
              </div>
            </div>
            <a
              href={jurisdiction.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.45rem 0.875rem',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                color: '#475569',
                fontSize: '0.8125rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <span>Visit Official Portal</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Dedicated Navigation Bar: Unmixed Classes for India vs Grade Bands for International */}
        {isIndia ? (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#334155', marginRight: '4px' }}>
              Select Dedicated Class:
            </span>
            <a
              href="#class-10"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: '#1e1b4b',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(30, 27, 75, 0.25)',
              }}
            >
              <span>🔥 Class 10 (Board Exam)</span>
              <span style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '1px 6px', borderRadius: '10px', fontSize: '0.72rem' }}>{class10Courses.length}</span>
            </a>

            <a
              href="#class-12"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: '#312e81',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(49, 46, 129, 0.25)',
              }}
            >
              <span>🔥 Class 12 (Senior Board)</span>
              <span style={{ backgroundColor: '#dc2626', color: '#ffffff', padding: '1px 6px', borderRadius: '10px', fontSize: '0.72rem' }}>{class12Courses.length}</span>
            </a>

            <a
              href="#class-9"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>Class 9</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '1px 6px', borderRadius: '10px', fontSize: '0.72rem' }}>{class9Courses.length}</span>
            </a>

            <a
              href="#class-11"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>Class 11</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '1px 6px', borderRadius: '10px', fontSize: '0.72rem' }}>{class11Courses.length}</span>
            </a>

            <a
              href="#class-8"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>Class 8</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '1px 6px', borderRadius: '10px', fontSize: '0.72rem' }}>{class8Courses.length}</span>
            </a>

            <a
              href="#class-7"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>Class 7</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '1px 6px', borderRadius: '10px', fontSize: '0.72rem' }}>{class7Courses.length}</span>
            </a>

            <a
              href="#class-6"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>Class 6</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '1px 6px', borderRadius: '10px', fontSize: '0.72rem' }}>{class6Courses.length}</span>
            </a>

            <a
              href="#primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#334155',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <span>🎒 Classes 1–5 Primary</span>
              <span style={{ backgroundColor: '#f1f5f9', padding: '1px 6px', borderRadius: '10px', fontSize: '0.72rem' }}>{primaryCourses.length}</span>
            </a>
          </div>
        ) : (
          /* International Standard Grade Bands */
          <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B' }}>
              {isUK ? 'Jump to Key Stage / Phase:' : 'Jump to Grade Band:'}
            </span>
            <a
              href="#elementary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #C7D2FE',
                color: '#4338CA',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              <span>
                {isScotland
                  ? '🎒 Primary (P1–P5)'
                  : isWales
                  ? '🎒 Progression Steps 1–3 (Primary)'
                  : isNI
                  ? '🎒 Primary (P1–P5)'
                  : isUK
                  ? '🎒 Key Stage 1 & 2 (Years 1–5 Primary)'
                  : '🎒 Elementary (Grades 1–5)'}
              </span>
              <span style={{ backgroundColor: '#EEF2FF', padding: '1px 6px', borderRadius: '10px', fontSize: '0.75rem' }}>{elementaryCourses.length}</span>
            </a>
            <a
              href="#middle-school"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #BAE6FD',
                color: '#0369A1',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              <span>
                {isScotland
                  ? '🏫 Broad General Education (S1–S3)'
                  : isWales
                  ? '🏫 Progression Step 4 (Years 7–9)'
                  : isNI
                  ? '🏫 Key Stage 3 (Years 8–10)'
                  : isUK
                  ? '🏫 Key Stage 3 (Years 7–9 Lower Secondary)'
                  : '🏫 Middle School (Grades 6–8)'}
              </span>
              <span style={{ backgroundColor: '#E0F2FE', padding: '1px 6px', borderRadius: '10px', fontSize: '0.75rem' }}>{middleCourses.length}</span>
            </a>
            <a
              href="#high-school"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #FBCFE8',
                color: '#BE185D',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}
            >
              <span>
                {isScotland
                  ? '🎓 Senior Phase (S4–S6 / Nationals & Highers)'
                  : isWales
                  ? '📝 Progression Step 5 (WJEC GCSEs & A-Levels)'
                  : isNI
                  ? '🎓 Key Stage 4 & Sixth Form (GCSE & A-Levels)'
                  : isUK
                  ? '📝 Key Stage 4 & 5 (GCSE & A-Levels / Sixth Form)'
                  : '🎓 High School (Grades 9–12)'}
              </span>
              <span style={{ backgroundColor: '#FCE7F3', padding: '1px 6px', borderRadius: '10px', fontSize: '0.75rem' }}>{highCourses.length}</span>
            </a>
          </div>
        )}

        {/* Section Contents: Indian Unmixed Class Sections vs International Band Sections */}
        {isIndia ? (
          <div>
            {/* Class 10 (Ultra Important Board Exam) */}
            {renderIndianClassSection(
              'class-10',
              'Class 10: All India Secondary School Examination (AISSE)',
              'National Secondary Board Examination Year. Fully integrated with official 5-year solved papers, chapter MCQs & Assertion-Reasoning, and revision notes.',
              class10Courses,
              true,
              'AISSE Class 10 Board Year'
            )}

            {/* Class 12 (Ultra Important Senior Board Exam) */}
            {renderIndianClassSection(
              'class-12',
              'Class 12: All India Senior School Certificate Examination (AISSCE)',
              'Senior Secondary Board Examination Year & premier foundation for JEE Main/Advanced, NEET-UG, and CUET-UG.',
              class12Courses,
              true,
              'AISSCE Class 12 Senior Board Year'
            )}

            {/* Class 9 (Secondary Foundation) */}
            {renderIndianClassSection(
              'class-9',
              'Class 9: Secondary Stage Foundation',
              'NCERT rationalized core curriculum bridging middle school to the Class 10 board examination year.',
              class9Courses
            )}

            {/* Class 11 (Senior Secondary Specialized Streams) */}
            {renderIndianClassSection(
              'class-11',
              'Class 11: Senior Secondary Stage (Disciplinary Specialization)',
              'In-depth foundations in Science (PCM/PCB), Commerce, and Humanities directly paving the path for Class 12 and national entrance tests.',
              class11Courses
            )}

            {/* Class 8 (Middle Stage Consolidation & Coding) */}
            {renderIndianClassSection(
              'class-8',
              'Class 8: Middle Stage Consolidation & AI/Coding',
              'Advanced algebraic equations, experimental science, Indian society & history, and mandatory Python coding & AI foundations.',
              class8Courses
            )}

            {/* Class 7 (Middle Stage) */}
            {renderIndianClassSection(
              'class-7',
              'Class 7: Middle Stage (Experiential Science & Algebra)',
              'Rational numbers, simple equations, nutrition in living organisms, regional kingdoms, and civic institutions.',
              class7Courses
            )}

            {/* Class 6 (Middle Stage Initiation) */}
            {renderIndianClassSection(
              'class-6',
              'Class 6: Middle Stage Initiation (NCERT Curiosity)',
              'Introduction to formal middle stage sciences, arithmetic to algebra transitions, Harappan civilization, and digital literacy.',
              class6Courses
            )}

            {/* Primary Education (Classes 1–5) */}
            {renderIndianClassSection(
              'primary',
              'Primary School Education (Classes 1–5: Foundational & Preparatory Stages)',
              'NCERT & NEP 2020 Jaadui Pitara activity learning, foundational literacy, numeracy, and Environmental Studies (EVS).',
              primaryCourses
            )}
          </div>
        ) : (
          <div>
            {renderCourseSection(
              'elementary',
              isScotland
                ? 'Primary School Education (P1–P5)'
                : isWales
                ? 'Curriculum for Wales: Progression Steps 1–3 (Primary)'
                : isNI
                ? 'Primary Education (P1–P5 / Northern Ireland Curriculum)'
                : isUK
                ? 'Primary Education: Key Stage 1 & 2 (Years 1–5)'
                : 'Elementary Education (Grades 1–5)',
              isScotland
                ? 'Curriculum for Excellence (CfE) Early, First, and Second Level literacy, numeracy, and environmental inquiry.'
                : isWales
                ? 'Foundational development across the 6 Areas of Learning & Experience (AoLE) in bilingual Wales.'
                : isNI
                ? 'CCEA curriculum outcomes in Communication, Using Mathematics, and The World Around Us.'
                : isUK
                ? 'DfE Statutory Programmes of Study in Mathematics (Number Bonds & Written Methods), Synthetic Phonics, and Science.'
                : 'Core foundational skills in arithmetic, scientific inquiry, and reading literacy.',
              elementaryCourses
            )}

            {renderCourseSection(
              'middle-school',
              isScotland
                ? 'Broad General Education (S1–S3 BGE)'
                : isWales
                ? 'Curriculum for Wales: Progression Step 4 (Lower Secondary)'
                : isNI
                ? 'Key Stage 3 Post-Primary (Years 8–10)'
                : isUK
                ? 'Secondary Education: Key Stage 3 (Years 7–9)'
                : 'Middle School Education (Grades 6–8 / Junior Secondary)',
              isScotland
                ? 'CfE Third and Fourth Levels with interdisciplinary coursework, science experimentation, and mathematics consolidation.'
                : isWales
                ? 'Deeper subject exploration preparing learners for formal GCSE qualifications and vocational pathways.'
                : isNI
                ? 'Consolidation of Key Stage 3 cross-curricular skills and critical thinking before GCSE pathways.'
                : isUK
                ? 'Key Stage 3 Core Knowledge (Years 7–9) bridging foundational concepts to GCSE readiness.'
                : 'Core academic subjects preparing students for high school graduation and college readiness pathways.',
              middleCourses
            )}

            {renderCourseSection(
              'high-school',
              isScotland
                ? 'Senior Phase (S4–S6 Senior Secondary)'
                : isWales
                ? 'Progression Step 5: Upper Secondary & Sixth Form'
                : isNI
                ? 'Post-Primary Senior: Key Stage 4 & Sixth Form'
                : isUK
                ? 'Secondary & Sixth Form: Key Stage 4 (GCSE) & Key Stage 5 (A-Levels)'
                : 'High School Academic Curriculum (Grades 9–12 / College Prep)',
              isScotland
                ? 'SQA Qualifications: National 5s (S4), Highers (S5 for university entrance), and Advanced Highers (S6).'
                : isWales
                ? 'WJEC GCSEs, Welsh Baccalaureate (Skills Challenge Certificate), and GCE A-Levels.'
                : isNI
                ? 'CCEA GCSEs and GCE A-Levels preparing students for UCAS university admission across the UK.'
                : 'Ofqual Regulated GCSEs (Grades 9–1) and Advanced Level (A-Level) qualifications recognized globally by Russell Group universities.',
              highCourses
            )}
          </div>
        )}
      </div>
    </div>
  );
}
