import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LESSONS_CATALOGUE, STANDARD_COURSES, getCoursesForJurisdiction, getJurisdiction, TIER1_JURISDICTIONS } from '@/lib/curriculum-data';
import { getCourseSyllabus } from '@/lib/syllabus-data';
import { TopicVideoPlayButton } from '@/components/TopicVideoPlayButton';

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

  // Retrieve structured multi-unit syllabus tree
  const syllabus = getCourseSyllabus(resolvedParams.grade, resolvedParams.subject);

  // Retrieve localized courses for this specific jurisdiction
  const localizedCourses = getCoursesForJurisdiction(resolvedParams.country, resolvedParams.jurisdiction);
  const matchedCourse = localizedCourses.find(c => c.gradeSlug === resolvedParams.grade && c.subjectSlug === resolvedParams.subject);

  // Filter lessons matching this grade and subject in active catalog
  const matchingLessons = Object.values(LESSONS_CATALOGUE).filter(
    l => l.gradeSlug === resolvedParams.grade && l.subjectSlug === resolvedParams.subject
  );

  const fallbackLesson = Object.values(LESSONS_CATALOGUE).find(l => l.slug === 'linear-equations')!;
  const currentLesson = matchingLessons[0] || fallbackLesson;

  const jurisdictionMeta = getJurisdiction(resolvedParams.country, resolvedParams.jurisdiction);
  const jurisdictionName = jurisdictionMeta ? jurisdictionMeta.name : currentLesson.jurisdictionName;
  const authorityName = jurisdictionMeta ? jurisdictionMeta.authority : currentLesson.authorityName;
  const flag = jurisdictionMeta ? jurisdictionMeta.flag : '🇺🇸';

  const totalTopics = syllabus
    ? syllabus.units.reduce((acc, u) => acc + u.topics.length, 0)
    : matchingLessons.length;

  const displayGradeName = matchedCourse ? matchedCourse.grade : (syllabus ? syllabus.gradeName : currentLesson.gradeName);
  const displayTitle = matchedCourse ? matchedCourse.title : (syllabus ? syllabus.title : `${currentLesson.gradeName} ${currentLesson.subjectName} Syllabus`);
  const displayStandard = matchedCourse ? matchedCourse.standardCode : (syllabus ? syllabus.frameworkStandard : currentLesson.standardCode);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      <div style={{ padding: '40px 24px', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px', flexWrap: 'wrap' }}>
          <Link href="/learn" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            Curriculum Directory
          </Link>
          <span>/</span>
          <Link href={`/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            {flag} {jurisdictionName}
          </Link>
          <span>/</span>
          <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>
            {displayGradeName}
          </span>
          <span>/</span>
          <span>{syllabus ? syllabus.subjectName : currentLesson.subjectName}</span>
        </nav>

        {/* Grade-Level Subject Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', overflowX: 'auto', paddingBottom: '4px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            {displayGradeName} Subjects:
          </span>
          {localizedCourses.filter(c => c.gradeSlug === resolvedParams.grade).map(gc => {
            const isCurrent = gc.subjectSlug === resolvedParams.subject;
            return (
              <Link
                key={gc.slug}
                href={`/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}/${gc.gradeSlug}/${gc.subjectSlug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: isCurrent ? 800 : 600,
                  backgroundColor: isCurrent ? '#4f46e5' : '#ffffff',
                  color: isCurrent ? '#ffffff' : '#475569',
                  border: isCurrent ? '1px solid #4f46e5' : '1px solid #e2e8f0',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: isCurrent ? '0 2px 8px rgba(79, 70, 229, 0.25)' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{gc.subject}</span>
              </Link>
            );
          })}
        </div>

        {/* Course Syllabus Hero */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '6px',
              backgroundColor: '#eef2ff',
              color: '#4338ca',
            }}>
              {displayStandard}
            </span>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '6px',
              backgroundColor: '#ecfdf5',
              color: '#065f46',
            }}>
              ✓ {authorityName} Official Framework
            </span>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '6px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#475569',
            }}>
              📚 {syllabus ? `${syllabus.units.length} Units • ${totalTopics} Sequenced Topics` : `${totalTopics} Topics`}
            </span>
          </div>

          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
            {displayTitle}
          </h1>
          <p style={{ fontSize: '1rem', color: '#475569', margin: '0 0 20px', maxWidth: '800px', lineHeight: 1.6 }}>
            {syllabus ? syllabus.overview : 'Sequential, competency-aligned curriculum modules designed to guide learners toward complete conceptual mastery and real-world application.'}
          </p>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}/${resolvedParams.grade}/${resolvedParams.subject}/${currentLesson.slug}`}
              style={{
                padding: '12px 24px',
                borderRadius: '12px',
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Start Interactive Lesson ({currentLesson.title.split(':')[0]}) →
            </Link>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Academic Year 2026–27 • Verified Against Official Standards
            </span>
          </div>
        </div>

        {/* Units & Topics Outline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {syllabus ? (
            syllabus.units.map(unit => (
              <div
                key={unit.unitNumber}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid var(--border-subtle)',
                  padding: '28px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Unit Header */}
                <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '18px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        backgroundColor: '#4f46e5',
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}>
                        Unit {unit.unitNumber}
                      </span>
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                      }}>
                        {unit.domainCode}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b' }}>
                      {unit.topics.length} Sequenced Topics
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 6px' }}>
                    {unit.title}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                    {unit.description}
                  </p>
                </div>

                {/* Topics in this Unit */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {unit.topics.map(topic => {
                    const topicSlug = topic.slug;
                    const lessonUrl = `/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}/${resolvedParams.grade}/${resolvedParams.subject}/${topicSlug}`;

                    return (
                      <div
                        key={topic.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '16px 20px',
                          borderRadius: '14px',
                          border: '1.5px solid #c7d2fe',
                          backgroundColor: '#f8faff',
                          transition: 'all 0.2s ease',
                          gap: '16px',
                          flexWrap: 'wrap'
                        }}
                      >
                        <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', flex: 1, minWidth: '280px' }}>
                          <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            backgroundColor: '#4f46e5',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '0.85rem',
                            flexShrink: 0
                          }}>
                            {topic.topicNumber}
                          </div>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px', flexWrap: 'wrap' }}>
                              <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem' }}>
                                {topic.title}
                              </span>
                              <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                padding: '2px 8px',
                                borderRadius: '6px',
                                backgroundColor: '#10b981',
                                color: '#ffffff',
                              }}>
                                ⚡ Video Masterclass Aligned
                              </span>
                              <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                padding: '2px 8px',
                                borderRadius: '6px',
                                backgroundColor: '#f1f5f9',
                                color: '#475569',
                              }}>
                                ✓ Standard Aligned
                              </span>
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>
                              <strong>{topic.standardCode}</strong> — {topic.standardTitle}
                            </div>
                            <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.4, marginBottom: '6px' }}>
                              {topic.summary}
                            </div>
                            {topic.video && (
                              <div style={{ fontSize: '0.75rem', color: '#4f46e5', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>📺 Featured Masterclass: <strong>{topic.video.title}</strong> by {topic.video.channelTitle} ({topic.video.durationFormatted})</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, flexWrap: 'wrap' }}>
                          {topic.video && (
                            <TopicVideoPlayButton
                              video={topic.video}
                              topic={{
                                title: topic.title,
                                topicNumber: topic.topicNumber,
                                standardCode: topic.standardCode,
                                gradeLabel: syllabus ? syllabus.gradeName : currentLesson.gradeName,
                                subjectLabel: syllabus ? syllabus.subjectName : currentLesson.subjectName,
                                lessonUrl: lessonUrl,
                                summary: topic.summary,
                              }}
                            />
                          )}
                          <Link
                            href={lessonUrl}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '8px 16px',
                              borderRadius: '10px',
                              backgroundColor: '#4f46e5',
                              border: 'none',
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '0.82rem',
                              textDecoration: 'none',
                              boxShadow: '0 2px 8px rgba(79, 70, 229, 0.25)'
                            }}
                          >
                            Open Lesson & Drills →
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
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
                {matchingLessons.map((l, index) => (
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
                      flexWrap: 'wrap',
                      gap: '12px'
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
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
