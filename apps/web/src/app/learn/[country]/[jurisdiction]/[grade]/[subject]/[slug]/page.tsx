import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VideoPlayer } from '@/components/VideoPlayer';
import { PracticeRunner } from '@/components/PracticeRunner';
import { QuizRunner } from '@/components/QuizRunner';
import { LESSONS_CATALOGUE, LessonData, getJurisdiction, TIER1_JURISDICTIONS } from '@/lib/curriculum-data';

interface DynamicLessonPageProps {
  params: Promise<{
    country: string;
    jurisdiction: string;
    grade: string;
    subject: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const lessons = Object.values(LESSONS_CATALOGUE);
  const paramsList: Array<{
    country: string;
    jurisdiction: string;
    grade: string;
    subject: string;
    slug: string;
  }> = [];

  for (const j of TIER1_JURISDICTIONS) {
    for (const l of lessons) {
      paramsList.push({
        country: j.countryCode,
        jurisdiction: j.slug,
        grade: l.gradeSlug,
        subject: l.subjectSlug,
        slug: l.slug,
      });
    }
  }

  return paramsList;
}

export default async function UniversalLessonPage({ params }: DynamicLessonPageProps) {
  const resolvedParams = await params;
  const lesson: LessonData | undefined = LESSONS_CATALOGUE[resolvedParams.slug];

  if (!lesson) {
    notFound();
  }

  const jurisdictionMeta = getJurisdiction(resolvedParams.country, resolvedParams.jurisdiction);
  const jurisdictionName = jurisdictionMeta ? jurisdictionMeta.name : lesson.jurisdictionName;
  const authorityName = jurisdictionMeta ? jurisdictionMeta.authority : lesson.authorityName;
  const countryName = jurisdictionMeta ? jurisdictionMeta.countryName : lesson.countryName;
  const flag = jurisdictionMeta ? jurisdictionMeta.flag : '🇺🇸';

  const playerVideos = lesson.videos.map((v, i) => ({
    video: {
      id: `vid_${v.youtubeVideoId}_${i}`,
      youtube_video_id: v.youtubeVideoId,
      title: v.title,
      channel_title: v.channelTitle,
      channel_id: 'curated_channel',
      duration_seconds: v.durationSeconds,
      state: 'AVAILABLE' as const,
      quality_score: {
        curriculum_alignment: v.qualityScore,
        topic_coverage: v.qualityScore,
        grade_suitability: v.qualityScore,
        explanation_quality: v.qualityScore,
        creator_credibility: v.qualityScore,
        freshness: 90,
        availability: 100,
        total_score: v.qualityScore,
      },
      last_verified_at: '2026-09-12T00:00:00Z',
      created_at: '2026-09-12T00:00:00Z',
      updated_at: '2026-09-12T00:00:00Z',
    },
    mapping: {
      id: `vm_${v.youtubeVideoId}_${i}`,
      lesson_version_id: `lv_${lesson.slug}`,
      video_id: `vid_${v.youtubeVideoId}_${i}`,
      role: v.role,
      curation_notes: v.curationNotes,
      created_at: '2026-09-12T00:00:00Z',
    },
  }));

  const formattedPracticeQuestions = lesson.practiceQuestions.map(pq => ({
    id: pq.id,
    type: 'MULTIPLE_CHOICE',
    prompt: pq.prompt,
    explanation: pq.explanation,
    options: pq.options.map((opt, idx) => ({
      id: opt.id,
      question_id: pq.id,
      text: opt.text,
      is_correct: opt.id === pq.correctOptionId,
      feedback: opt.feedback,
      order_index: idx,
    })),
  }));

  const formattedQuizQuestions = lesson.quizQuestions.map(qq => ({
    id: qq.id,
    type: 'MULTIPLE_CHOICE',
    prompt: qq.prompt,
    correctOptionId: qq.correctOptionId,
    explanation: qq.explanation,
    options: qq.options.map((opt, idx) => ({
      id: opt.id,
      question_id: qq.id,
      text: opt.text,
      order_index: idx,
    })),
  }));

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      <Header />

      <main style={{ flex: 1, padding: '32px 24px 64px', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
          <Link href="/learn" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            Curriculum
          </Link>
          <span>/</span>
          <span>{flag} {countryName}</span>
          <span>/</span>
          <Link
            href={`/learn/${resolvedParams.country}/${resolvedParams.jurisdiction}`}
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}
          >
            {jurisdictionName}
          </Link>
          <span>/</span>
          <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{lesson.gradeName}</span>
          <span>/</span>
          <span>{lesson.subjectName}</span>
        </nav>

        {/* Hero Lesson Header Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '28px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '3px 10px',
              borderRadius: '6px',
              backgroundColor: '#eef2ff',
              color: '#4338ca',
              border: '1px solid #c7d2fe',
              letterSpacing: '0.04em',
            }}>
              {lesson.standardCode}
            </span>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '3px 10px',
              borderRadius: '6px',
              backgroundColor: '#ecfdf5',
              color: '#065f46',
            }}>
              ✓ {authorityName} Aligned
            </span>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '3px 8px',
              borderRadius: '6px',
              backgroundColor: '#f1f5f9',
              color: '#475569',
            }}>
              Academic Year {lesson.academicYear}
            </span>
          </div>

          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', margin: '0 0 10px' }}>
            {lesson.title}
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#334155', margin: '0 0 20px', lineHeight: 1.5 }}>
            {lesson.summary}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>Why It Matters:</span>
              <span>{lesson.whyItMatters}</span>
            </div>
          </div>
        </div>

        {/* Video Player Section */}
        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Curated Video Instruction
            </h2>
            <span style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 600 }}>
              ● Verified Active Embed
            </span>
          </div>
          <VideoPlayer videos={playerVideos} />
        </section>

        {/* Worked Example Section */}
        <section style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '40px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: '#e0f2fe',
              color: '#0369a1',
            }}>
              STEP-BY-STEP PROOF
            </span>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Worked Example
            </h2>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px 20px',
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#1e293b',
            marginBottom: '24px',
            fontFamily: 'monospace',
          }}>
            {lesson.workedExample.problemStatement}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            {lesson.workedExample.steps.map((step) => (
              <div
                key={step.stepNumber}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '16px',
                  borderRadius: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #edf2f7',
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#4f46e5',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}>
                  {step.stepNumber}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    {step.operation}
                  </div>
                  <div style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#4338ca',
                    fontFamily: 'monospace',
                    marginBottom: '4px',
                  }}>
                    {step.equation}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    {step.explanation}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Box */}
          <div style={{
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '14px',
            padding: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#166534', fontWeight: 800 }}>
              <span>✓</span>
              <span>Verification Check</span>
            </div>
            <p style={{ margin: '0 0 10px', fontSize: '0.9rem', color: '#14532d' }}>
              {lesson.workedExample.verification.checkStatement}
            </p>
            <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', fontFamily: 'monospace', color: '#166534' }}>
              <div>{lesson.workedExample.verification.leftSideCalculation}</div>
              <div>•</div>
              <div>{lesson.workedExample.verification.rightSideCalculation}</div>
            </div>
          </div>
        </section>

        {/* Common Misconceptions */}
        <section style={{
          backgroundColor: '#fffbeb',
          borderRadius: '24px',
          border: '1px solid #fef3c7',
          padding: '28px 32px',
          marginBottom: '40px',
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#92400e', margin: '0 0 16px' }}>
            ⚠️ Common Pitfalls & Misconceptions
          </h2>
          {lesson.misconceptions.map((m, i) => (
            <div key={i} style={{ marginBottom: i < lesson.misconceptions.length - 1 ? '16px' : 0 }}>
              <div style={{ fontWeight: 700, color: '#78350f', marginBottom: '6px' }}>
                {m.title}
              </div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '0.88rem', marginBottom: '4px' }}>
                <span style={{ color: '#b91c1c', textDecoration: 'line-through' }}>
                  ✗ {m.incorrectAttempt}
                </span>
                <span style={{ color: '#15803d', fontWeight: 600 }}>
                  ✓ {m.correctApproach}
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: '#a16207', margin: 0 }}>
                {m.explanation}
              </p>
            </div>
          ))}
        </section>

        {/* Interactive Practice Section */}
        <section style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '40px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: '#fef3c7',
              color: '#b45309',
            }}>
              INTERACTIVE DRILLS
            </span>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Guided Practice
            </h2>
          </div>
          <PracticeRunner practiceId={`practice_${lesson.slug}`} questions={formattedPracticeQuestions} />
        </section>

        {/* Mastery Assessment Quiz Section */}
        <section style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '40px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: '#ecfdf5',
              color: '#065f46',
            }}>
              MASTERY BENCHMARK
            </span>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Official Assessment Quiz
            </h2>
          </div>
          <QuizRunner
            quizId={`quiz_${lesson.slug}`}
            title={lesson.title}
            questions={formattedQuizQuestions}
            passingPercentage={70}
          />
        </section>

        {/* Where This Leads: Career & Higher Education Guidance */}
        <section style={{
          backgroundColor: '#EEF2FF',
          borderRadius: '24px',
          border: '1px solid #C7D2FE',
          padding: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#4338CA', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Education to Career Navigation
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E1B4B', margin: '0 0 6px' }}>
              Where This Lesson Leads
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#3730A3', margin: 0, maxWidth: '650px' }}>
              {lesson.careerLink}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <Link
              href="/guidance"
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor: '#4F46E5',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.88rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
              }}
            >
              View Pathways →
            </Link>
            <Link
              href="/explore"
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                color: '#4F46E5',
                fontWeight: 700,
                fontSize: '0.88rem',
                textDecoration: 'none',
                border: '1px solid #c7d2fe',
              }}
            >
              Explore Universities
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
