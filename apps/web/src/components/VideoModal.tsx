'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export interface VideoModalItem {
  youtubeVideoId: string;
  title: string;
  channelTitle: string;
  durationFormatted: string;
  gradeLabel: string;
  subjectLabel: string;
  standardCode: string;
  lessonUrl: string;
  summary?: string;
}

interface VideoModalProps {
  video: VideoModalItem | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (video) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '20px',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={onClose}
      id="video-preview-modal-backdrop"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          backgroundColor: '#0F172A',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
        id="video-preview-modal"
      >
        {/* Modal Top Header Bar */}
        <div
          style={{
            padding: '16px 24px',
            backgroundColor: '#1E293B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '6px',
                backgroundColor: '#38BDF8',
                color: '#0369A1',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {video.gradeLabel}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '6px',
                backgroundColor: '#334155',
                color: '#E2E8F0',
              }}
            >
              {video.subjectLabel}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '6px',
                backgroundColor: 'rgba(79, 70, 229, 0.25)',
                color: '#A5B4FC',
                border: '1px solid rgba(165, 180, 252, 0.2)',
              }}
            >
              Standard: {video.standardCode}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              transition: 'all 0.15s ease',
            }}
            id="btn-close-video-modal"
          >
            ✕
          </button>
        </div>

        {/* 16:9 Video Player */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, backgroundColor: '#000000' }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            id="modal-youtube-iframe"
          />
        </div>

        {/* Modal Info & CTA Footer */}
        <div style={{ padding: '20px 24px', backgroundColor: '#0F172A' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.82rem', color: '#38BDF8', fontWeight: 700 }}>
                  ▶ {video.channelTitle}
                </span>
                <span style={{ color: '#475569' }}>•</span>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
                  ⏱ {video.durationFormatted}
                </span>
                <span style={{ color: '#475569' }}>•</span>
                <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700 }}>
                  ★ 100% Curated
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                {video.title}
              </h3>
              {video.summary && (
                <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                  {video.summary}
                </p>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link
                href={video.lessonUrl}
                onClick={onClose}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#4F46E5',
                  color: '#FFFFFF',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                id="btn-modal-open-lesson"
              >
                <span>Full Interactive Lesson & Quiz</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
