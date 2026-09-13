'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  getCourseProgressStats,
  subscribeToLearningProgress,
  CourseProgressStats,
} from '@/lib/learning-tracker';

interface CourseProgressOverviewProps {
  courseKey: string;
  courseTitle: string;
  courseUrl: string;
  allLessons: Array<{
    slug: string;
    title: string;
    url?: string;
  }>;
}

export function CourseProgressOverview({
  courseKey,
  courseTitle,
  courseUrl,
  allLessons,
}: CourseProgressOverviewProps) {
  const [stats, setStats] = useState<CourseProgressStats | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStats(getCourseProgressStats(courseKey, allLessons));

    const unsubscribe = subscribeToLearningProgress(() => {
      setStats(getCourseProgressStats(courseKey, allLessons));
    });

    return unsubscribe;
  }, [courseKey, allLessons]);

  if (!mounted || !stats) {
    return null;
  }

  const { totalLessons, completedCount, watchedCount, percentCompleted, nextRecommendedSlug, nextRecommendedTitle } = stats;

  const nextLessonUrl = nextRecommendedSlug
    ? allLessons.find((l) => l.slug === nextRecommendedSlug)?.url || `${courseUrl}/${nextRecommendedSlug}`
    : `${courseUrl}/${allLessons[0]?.slug || ''}`;

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1.5px solid #c7d2fe',
        padding: '24px 28px',
        boxShadow: '0 4px 20px rgba(79, 70, 229, 0.08)',
        marginBottom: '28px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
      }}
      id="course-progress-overview-banner"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '14px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '6px',
                backgroundColor: percentCompleted === 100 ? '#059669' : '#4f46e5',
                color: '#ffffff',
                letterSpacing: '0.04em',
              }}
            >
              YOUR LEARNING RECORD
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
              {completedCount} of {totalLessons} Chapters Completed ({percentCompleted}%)
            </span>
          </div>

          <div style={{ fontSize: '0.86rem', color: '#64748b' }}>
            {watchedCount > 0
              ? `🎥 ${watchedCount} Masterclass videos watched across this course.`
              : 'Start watching masterclasses and completing interactive practice exercises to track progress.'}
          </div>
        </div>

        {/* Continue Learning CTA */}
        {nextRecommendedTitle && (
          <div>
            <Link
              href={nextLessonUrl}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
                transition: 'all 0.15s ease',
              }}
              id="btn-continue-where-left-off"
            >
              <span>▶ Continue: {nextRecommendedTitle}</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </div>

      {/* Visual Progress Bar */}
      <div
        style={{
          width: '100%',
          height: '10px',
          backgroundColor: '#e2e8f0',
          borderRadius: '5px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percentCompleted}%`,
            background: percentCompleted === 100
              ? 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
              : 'linear-gradient(90deg, #6366f1 0%, #4f46e5 100%)',
            borderRadius: '5px',
            transition: 'width 0.4s ease-in-out',
          }}
        />
      </div>
    </div>
  );
}
