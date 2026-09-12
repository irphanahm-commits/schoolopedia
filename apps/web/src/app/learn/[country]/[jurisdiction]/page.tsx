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

  // Group courses by grade band
  const elementaryCourses = allCourses.filter(c => c.gradeBand === 'elementary');
  const middleCourses = allCourses.filter(c => c.gradeBand === 'middle-school');
  const highCourses = allCourses.filter(c => c.gradeBand === 'high-school');

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
                    {c.grade}
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

        {/* Grade-Level / Key Stage / NEP Stage Quick Filter Pills */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B' }}>
            {isIndia
              ? 'Jump to NEP 2020 Stage / Class:'
              : isUK
              ? 'Jump to Key Stage / Phase:'
              : 'Jump to Grade Band:'}
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
              {isIndia
                ? '🎒 Primary (Classes 1–5: Foundational & Preparatory)'
                : isScotland
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
              {isIndia
                ? '🏫 Middle Stage (Classes 6–8: NEP Core & Coding)'
                : isScotland
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
              {isIndia
                ? '📝 Secondary & Senior Secondary (Classes 9–12: Board Exams & JEE/NEET/CUET)'
                : isScotland
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

        {/* Multi-Grade / Key Stage / NEP Stage Progression Sections */}
        {renderCourseSection(
          'elementary',
          isIndia
            ? 'Primary School Education (Classes 1–5: Foundational & Preparatory Stages)'
            : isScotland
            ? 'Primary School Education (P1–P5)'
            : isWales
            ? 'Curriculum for Wales: Progression Steps 1–3 (Primary)'
            : isNI
            ? 'Primary Education (P1–P5 / Northern Ireland Curriculum)'
            : isUK
            ? 'Primary Education: Key Stage 1 & 2 (Years 1–5)'
            : 'Elementary Education (Grades 1–5)',
          isIndia
            ? 'NCERT & NEP 2020 5+3+3+4 framework: Jaadui Pitara activity learning, foundational literacy, numeracy, and Environmental Studies (EVS).'
            : isScotland
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
          isIndia
            ? 'Middle Stage Education (Classes 6–8: NEP Experiential Core & Coding)'
            : isScotland
            ? 'Broad General Education (S1–S3 BGE)'
            : isWales
            ? 'Curriculum for Wales: Progression Step 4 (Lower Secondary)'
            : isNI
            ? 'Key Stage 3 Post-Primary (Years 8–10)'
            : isUK
            ? 'Secondary Education: Key Stage 3 (Years 7–9)'
            : 'Middle School Education (Grades 6–8 / Junior Secondary)',
          isIndia
            ? 'NCERT curriculum emphasizing rational numbers, linear algebra, experimental science, Indian society & history, and Python coding & AI foundations.'
            : isScotland
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
          isIndia
            ? 'Secondary & Senior Secondary Education (Classes 9–12: Board Exams & Entrance Pathways)'
            : isScotland
            ? 'Senior Phase (S4–S6 Senior Secondary)'
            : isWales
            ? 'Progression Step 5: Upper Secondary & Sixth Form'
            : isNI
            ? 'Post-Primary Senior: Key Stage 4 & Sixth Form'
            : isUK
            ? 'Secondary & Sixth Form: Key Stage 4 (GCSE) & Key Stage 5 (A-Levels)'
            : 'High School Academic Curriculum (Grades 9–12 / College Prep)',
          isIndia
            ? 'Class 10 All India Secondary School Examination (AISSE / ICSE / SSC) and Classes 11–12 Senior Secondary (AISSCE / ISC / HSC) forming the direct foundation for JEE Main/Advanced, NEET-UG, and CUET-UG.'
            : isScotland
            ? 'SQA Qualifications: National 5s (S4), Highers (S5 for university entrance), and Advanced Highers (S6).'
            : isWales
            ? 'WJEC GCSEs, Welsh Baccalaureate (Skills Challenge Certificate), and GCE A-Levels.'
            : isNI
            ? 'CCEA GCSEs and GCE A-Levels preparing students for UCAS university admission across the UK.'
            : 'Ofqual Regulated GCSEs (Grades 9–1) and Advanced Level (A-Level) qualifications recognized globally by Russell Group universities.',
          highCourses
        )}
      </div>
    </div>
  );
}
