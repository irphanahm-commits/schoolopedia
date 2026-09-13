'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CourseSequenceResult } from '@/lib/course-navigation';
import { loadLearningState, subscribeToLearningProgress, LearningState } from '@/lib/learning-tracker';

interface LessonSequenceNavProps {
  sequence: CourseSequenceResult;
}

export function LessonSequenceNav({ sequence }: LessonSequenceNavProps) {
  const [learningState, setLearningState] = useState<LearningState | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setLearningState(loadLearningState());
    const unsubscribe = subscribeToLearningProgress(() => {
      setLearningState(loadLearningState());
    });
    return unsubscribe;
  }, []);

  const courseRecord = sequence.courseKey ? learningState?.courses[sequence.courseKey] : undefined;
  const { currentIndex, totalLessons, previousLesson, nextLesson, allLessons } = sequence;

  const isLessonCompleted = (slug: string) => {
    return courseRecord?.lessons[slug]?.status === 'completed';
  };

  const isLessonWatched = (slug: string) => {
    return Boolean(courseRecord?.lessons[slug]?.videoWatched);
  };

  return (
    <div style={{ marginTop: '36px', marginBottom: '40px' }} id="lesson-sequence-navigation">
      {/* 1. UP NEXT RECOMMENDED LESSON HERO CARD */}
      {nextLesson && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1.5px solid #c7d2fe',
            padding: '24px 28px',
            boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.12)',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
          }}
          id="up-next-lesson-card"
        >
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '6px',
                  backgroundColor: '#4f46e5',
                  color: '#ffffff',
                  letterSpacing: '0.04em',
                }}
              >
                UP NEXT IN SEQUENCE
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
                Lesson {nextLesson.index} of {totalLessons}
              </span>
              {isLessonCompleted(nextLesson.slug) && (
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', backgroundColor: '#ecfdf5', padding: '2px 8px', borderRadius: '4px' }}>
                  ✓ Already Completed
                </span>
              )}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px', lineHeight: 1.3 }}>
              {nextLesson.title}
            </h3>
            {nextLesson.altTitle && (
              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
                {nextLesson.altTitle} {nextLesson.code ? `• ${nextLesson.code}` : ''}
              </div>
            )}
          </div>

          <div>
            <Link
              href={nextLesson.url}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(79, 70, 229, 0.35)',
                transition: 'all 0.15s ease',
              }}
              id="btn-up-next-lesson"
            >
              <span>Continue to Next Lesson</span>
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>
        </div>
      )}

      {/* 2. BOTTOM PREVIOUS / OVERVIEW / NEXT STEPPER BAR */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
          flexWrap: 'wrap',
          gap: '14px',
        }}
      >
        {/* Previous Lesson Button */}
        {previousLesson ? (
          <Link
            href={previousLesson.url}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '10px',
              backgroundColor: '#f8fafc',
              border: '1px solid #cbd5e1',
              color: '#334155',
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none',
            }}
            id="btn-prev-lesson"
          >
            <span>←</span>
            <span>Prev: {previousLesson.title}</span>
          </Link>
        ) : (
          <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontStyle: 'italic' }}>
            First Lesson in Course
          </div>
        )}

        {/* Center: Course Drawer / Stepper Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '10px',
              backgroundColor: '#eef2ff',
              border: '1px solid #c7d2fe',
              color: '#4338ca',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}
            id="btn-course-lessons-drawer"
          >
            <span>📑</span>
            <span>
              Lesson {currentIndex || 1} of {totalLessons} • View All Lessons {isDrawerOpen ? '▲' : '▼'}
            </span>
          </button>
        </div>

        {/* Next Lesson Button */}
        {nextLesson ? (
          <Link
            href={nextLesson.url}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '10px',
              backgroundColor: '#4f46e5',
              border: 'none',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.85rem',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(79, 70, 229, 0.25)',
            }}
            id="btn-next-lesson"
          >
            <span>Next: {nextLesson.title}</span>
            <span>→</span>
          </Link>
        ) : (
          <Link
            href={sequence.courseUrl}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '10px',
              backgroundColor: '#059669',
              border: 'none',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.85rem',
              textDecoration: 'none',
            }}
            id="btn-finish-course-return"
          >
            <span>Course Completed! Return to Syllabus →</span>
          </Link>
        )}
      </div>

      {/* 3. EXPANDABLE COURSE LESSONS DRAWER */}
      {isDrawerOpen && (
        <div
          style={{
            marginTop: '12px',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1.5px solid #c7d2fe',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
          }}
          id="course-lessons-drawer-content"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
              All Lessons in {sequence.courseTitle} ({totalLessons})
            </h4>
            <Link
              href={sequence.courseUrl}
              style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4f46e5', textDecoration: 'none' }}
            >
              Full Course Syllabus & Board Suite →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '10px' }}>
            {allLessons.map((item) => {
              const isCurrent = item.index === currentIndex;
              const completed = isLessonCompleted(item.slug);
              const watched = isLessonWatched(item.slug);

              return (
                <Link
                  key={item.slug}
                  href={item.url}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    backgroundColor: isCurrent ? '#eef2ff' : completed ? '#ecfdf5' : '#f8fafc',
                    border: isCurrent ? '2px solid #4f46e5' : completed ? '1px solid #a7f3d0' : '1px solid #e2e8f0',
                    textDecoration: 'none',
                    color: '#0f172a',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: isCurrent ? '#4f46e5' : completed ? '#059669' : '#cbd5e1',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {completed ? '✓' : item.index}
                    </span>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: isCurrent ? 800 : 600,
                        color: isCurrent ? '#4f46e5' : '#0f172a',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                    {watched && <span title="Video Watched" style={{ fontSize: '0.75rem' }}>🎥</span>}
                    {isCurrent && (
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4f46e5', backgroundColor: '#e0e7ff', padding: '2px 6px', borderRadius: '4px' }}>
                        NOW
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
