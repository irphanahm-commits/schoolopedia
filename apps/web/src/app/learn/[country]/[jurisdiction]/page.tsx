import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  TIER1_JURISDICTIONS,
  STANDARD_COURSES,
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

  // Group courses by grade band
  const elementaryCourses = STANDARD_COURSES.filter(c => c.gradeBand === 'elementary');
  const middleCourses = STANDARD_COURSES.filter(c => c.gradeBand === 'middle-school');
  const highCourses = STANDARD_COURSES.filter(c => c.gradeBand === 'high-school');

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
                    gap: '0.25rem',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    backgroundColor: badge.bg,
                    color: badge.text,
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    <span>{badge.icon}</span>
                    <span>{c.subject}</span>
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                    {c.grade}
                  </span>
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                  {c.title}
                </h4>

                <div style={{
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  color: '#4F46E5',
                  backgroundColor: '#EEF2FF',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>
                  {c.standardCode}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                <Link
                  href={lessonUrl}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    backgroundColor: '#4F46E5',
                    color: '#FFFFFF',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  Start Lesson →
                </Link>
                <Link
                  href={syllabusUrl}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    color: '#475569',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  Syllabus
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem', width: '100%' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
          <Link href="/learn" style={{ color: '#475569', textDecoration: 'none', fontWeight: 600 }}>
            Curriculum Directory
          </Link>
          <span>/</span>
          <span>{jurisdiction.countryName}</span>
          <span>/</span>
          <span style={{ fontWeight: 700, color: '#4F46E5' }}>{jurisdiction.name}</span>
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

        {/* Grade-Level Quick Filter Pills */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B' }}>
            Jump to Grade Band:
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
            <span>🎒 Elementary (Grades 1–5)</span>
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
            <span>🏫 Middle School (Grades 6–8)</span>
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
            <span>🎓 High School (Grades 9–12)</span>
            <span style={{ backgroundColor: '#FCE7F3', padding: '1px 6px', borderRadius: '10px', fontSize: '0.75rem' }}>{highCourses.length}</span>
          </a>
        </div>

        {/* Multi-Grade Progression Sections */}
        {renderCourseSection('elementary', 'Elementary Education (Grades 1–5)', 'Core foundational skills in arithmetic, scientific inquiry, and reading literacy.', elementaryCourses)}
        {renderCourseSection('middle-school', 'Middle School Education (Grades 6–8 / Junior Secondary)', 'Rigorous algebraic reasoning, cellular biology, computational thinking, and democratic governance.', middleCourses)}
        {renderCourseSection('high-school', 'High School Education (Grades 9–12 / GCSE / A-Levels / AP)', 'College-preparatory coursework in Algebra 1, Biology, Chemistry, Physics, Rhetoric, and AI.', highCourses)}
      </div>
    </div>
  );
}
