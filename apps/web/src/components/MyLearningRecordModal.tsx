'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  getAllStudyingRecords,
  subscribeToLearningProgress,
  CourseRecord,
} from '@/lib/learning-tracker';

interface MyLearningRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MyLearningRecordModal({ isOpen, onClose }: MyLearningRecordModalProps) {
  const [courses, setCourses] = useState<CourseRecord[]>([]);

  useEffect(() => {
    if (isOpen) {
      setCourses(getAllStudyingRecords());
      const unsubscribe = subscribeToLearningProgress(() => {
        setCourses(getAllStudyingRecords());
      });
      return unsubscribe;
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(6px)',
        padding: '16px',
        animation: 'fadeIn 0.15s ease-out',
      }}
      onClick={onClose}
      id="my-learning-record-backdrop"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '85vh',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflowY: 'auto',
          border: '1px solid #e2e8f0',
          padding: '28px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
        id="my-learning-record-modal"
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>📚</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                My Learning Record
              </h3>
              <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>
                Your client-side study history, watched masterclasses, and completed exercises
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569',
              fontWeight: 800,
            }}
            id="btn-close-learning-record"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        {courses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '36px 16px', color: '#64748b' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📖</div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px' }}>
              No Lessons Tracked Yet
            </h4>
            <p style={{ fontSize: '0.88rem', margin: '0 0 20px', maxWidth: '420px', marginInline: 'auto' }}>
              Start learning! Watch masterclass videos and click "Mark as Completed" to track your progress here.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/learn/in/cbse/grade-10/science"
                onClick={onClose}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#4f46e5',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                CBSE Class 10 Science →
              </Link>
              <Link
                href="/learn/in/cbse/grade-10/mathematics"
                onClick={onClose}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  color: '#334155',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                CBSE Class 10 Mathematics →
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {courses.map((course) => {
              const lessonEntries = Object.values(course.lessons || {});
              const completedCount = lessonEntries.filter((l) => l.status === 'completed').length;
              const watchedCount = lessonEntries.filter((l) => l.videoWatched).length;
              const total = lessonEntries.length;

              const lastLesson = course.lastStudiedLessonSlug && course.lessons[course.lastStudiedLessonSlug];

              return (
                <div
                  key={course.courseKey}
                  style={{
                    padding: '18px 20px',
                    borderRadius: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                    <div>
                      <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>
                        {course.courseTitle}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#64748b' }}>
                        <span style={{ fontWeight: 700, color: '#059669' }}>✓ {completedCount} Completed</span>
                        <span>•</span>
                        <span>🎥 {watchedCount} Watched</span>
                        <span>•</span>
                        <span>Updated: {new Date(course.updatedAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <Link
                      href={course.courseUrl}
                      onClick={onClose}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        color: '#4f46e5',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        textDecoration: 'none',
                      }}
                    >
                      View Course →
                    </Link>
                  </div>

                  {lastLesson && (
                    <div
                      style={{
                        padding: '10px 14px',
                        borderRadius: '10px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                          Last Studied:
                        </div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                          {lastLesson.lessonTitle || lastLesson.lessonSlug}
                        </div>
                      </div>

                      <Link
                        href={lastLesson.lessonUrl}
                        onClick={onClose}
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          color: '#ffffff',
                          backgroundColor: '#4f46e5',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                        }}
                      >
                        Continue Studying →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
