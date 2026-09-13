'use client';

import React, { useState, useEffect } from 'react';
import {
  recordLessonVisit,
  toggleLessonCompleted,
  getLessonRecord,
  subscribeToLearningProgress,
  LessonRecord,
} from '@/lib/learning-tracker';

interface LessonTrackerBarProps {
  courseKey: string;
  courseTitle: string;
  courseUrl: string;
  lessonSlug: string;
  lessonTitle: string;
  lessonUrl: string;
  lessonNumberText?: string; // e.g. "Lesson 1 of 14" or "Chapter 1"
}

export function LessonTrackerBar({
  courseKey,
  courseTitle,
  courseUrl,
  lessonSlug,
  lessonTitle,
  lessonUrl,
  lessonNumberText,
}: LessonTrackerBarProps) {
  const [record, setRecord] = useState<LessonRecord | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. Auto-record visit as currently studying
    recordLessonVisit(courseKey, lessonSlug, {
      courseTitle,
      courseUrl,
      lessonTitle,
      lessonUrl,
    });

    setRecord(getLessonRecord(courseKey, lessonSlug));

    // 2. Subscribe to reactive changes (e.g. if video is played or quiz answered)
    const unsubscribe = subscribeToLearningProgress(() => {
      setRecord(getLessonRecord(courseKey, lessonSlug));
    });

    return unsubscribe;
  }, [courseKey, lessonSlug, courseTitle, courseUrl, lessonTitle, lessonUrl]);

  const isCompleted = record?.status === 'completed';
  const isVideoWatched = Boolean(record?.videoWatched);

  const handleToggle = () => {
    const nextCompleted = toggleLessonCompleted(courseKey, lessonSlug, {
      courseTitle,
      courseUrl,
      lessonTitle,
      lessonUrl,
    });
    setRecord(getLessonRecord(courseKey, lessonSlug));
  };

  if (!mounted) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          backgroundColor: '#f8fafc',
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          marginTop: '16px',
        }}
      >
        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
          {lessonNumberText || 'Lesson Progress'}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 18px',
        backgroundColor: isCompleted ? '#ecfdf5' : '#f8fafc',
        borderRadius: '14px',
        border: isCompleted ? '1.5px solid #a7f3d0' : '1px solid #e2e8f0',
        marginTop: '16px',
        flexWrap: 'wrap',
        gap: '12px',
        transition: 'all 0.2s ease',
      }}
      id="lesson-tracker-bar"
    >
      {/* Left: Study Status Context */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 800,
            padding: '3px 10px',
            borderRadius: '8px',
            backgroundColor: isCompleted ? '#059669' : '#4f46e5',
            color: '#ffffff',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {isCompleted ? '✓ COMPLETED' : '▶ STUDYING'}
        </span>

        {lessonNumberText && (
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
            {lessonNumberText}
          </span>
        )}

        {isVideoWatched && (
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '6px',
              backgroundColor: '#e0e7ff',
              color: '#3730a3',
            }}
          >
            🎥 Masterclass Watched
          </span>
        )}

        {record?.quizAttempted && (
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '6px',
              backgroundColor: '#fef3c7',
              color: '#92400e',
            }}
          >
            🎯 Quiz: {record.quizScore}/{record.quizTotal}
          </span>
        )}
      </div>

      {/* Right: Toggle Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          type="button"
          onClick={handleToggle}
          style={{
            padding: '7px 16px',
            borderRadius: '10px',
            fontSize: '0.82rem',
            fontWeight: 800,
            cursor: 'pointer',
            border: isCompleted ? '1.5px solid #059669' : '1.5px solid #4f46e5',
            backgroundColor: isCompleted ? '#ffffff' : '#4f46e5',
            color: isCompleted ? '#059669' : '#ffffff',
            boxShadow: isCompleted ? 'none' : '0 2px 8px rgba(79, 70, 229, 0.25)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.15s ease',
          }}
          id="btn-toggle-lesson-completed"
        >
          <span>{isCompleted ? '✓' : '○'}</span>
          <span>{isCompleted ? 'Completed (Click to Undo)' : 'Mark as Completed & Watched'}</span>
        </button>
      </div>
    </div>
  );
}
