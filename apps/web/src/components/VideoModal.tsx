'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useVideoPlayer, VideoModalItem } from '@/lib/VideoContext';
import { markVideoWatched } from '@/lib/learning-tracker';

export type { VideoModalItem };

interface VideoModalProps {
  video?: VideoModalItem | null;
  onClose?: () => void;
}

export function VideoModal({ video: propVideo, onClose: propOnClose }: VideoModalProps = {}) {
  const context = useVideoPlayer();
  const playerRef = useRef<HTMLDivElement>(null);

  // Support both context-driven and direct prop usage
  const activeVideo = propVideo !== undefined ? propVideo : context.activeVideo;
  const isModalOpen = propVideo !== undefined ? Boolean(propVideo) : context.playerMode === 'modal';

  const handleClose = () => {
    if (propOnClose) {
      propOnClose();
    } else {
      context.closeVideo();
    }
  };

  const handleMinimizeToFloating = () => {
    if (propVideo) {
      // If props were passed directly, initialize into context
      context.playVideo(propVideo, 'floating');
      propOnClose?.();
    } else {
      context.setPlayerMode('floating');
    }
  };

  const handleFullscreen = () => {
    context.enterFullscreen(playerRef.current);
  };

  const handlePictureInPicture = () => {
    handleMinimizeToFloating();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Auto-record video watch event in student learning record
  useEffect(() => {
    if (isModalOpen && activeVideo && activeVideo.lessonUrl && activeVideo.lessonUrl !== '#') {
      try {
        const parts = activeVideo.lessonUrl.split('/').filter(Boolean);
        // E.g. /learn/in/cbse/grade-10/science/chemical-reactions -> parts = ['learn', 'in', 'cbse', 'grade-10', 'science', 'chemical-reactions']
        if (parts.length >= 6) {
          const country = parts[1];
          const jurisdiction = parts[2];
          const grade = parts[3];
          const subject = parts[4];
          const slug = parts[5];
          const courseKey = `${country}:${jurisdiction}:${grade}:${subject}`;
          markVideoWatched(courseKey, slug, {
            courseTitle: `${activeVideo.gradeLabel} ${activeVideo.subjectLabel}`,
            courseUrl: `/${parts.slice(0, 5).join('/')}`,
            lessonTitle: activeVideo.title,
            lessonUrl: activeVideo.lessonUrl,
          });
        }
      } catch (e) {
        // Safe fallback
      }
    }
  }, [isModalOpen, activeVideo]);

  if (!isModalOpen || !activeVideo) return null;

  return (
    <div
      className="video-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.78)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '16px',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={handleClose}
      id="video-preview-modal-backdrop"
    >
      <div
        ref={playerRef}
        className="video-modal-container"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          backgroundColor: '#0F172A',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.6)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
        id="video-preview-modal"
      >
        {/* Modal Top Header Bar with Multi-Controls */}
        <div
          className="video-modal-header"
          style={{
            padding: '14px 20px',
            backgroundColor: '#1E293B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {/* Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', flex: 1, minWidth: '180px' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '3px 9px',
                borderRadius: '6px',
                backgroundColor: '#38BDF8',
                color: '#0369A1',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {activeVideo.gradeLabel}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 9px',
                borderRadius: '6px',
                backgroundColor: '#334155',
                color: '#E2E8F0',
              }}
            >
              {activeVideo.subjectLabel}
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(79, 70, 229, 0.25)',
                color: '#A5B4FC',
                border: '1px solid rgba(165, 180, 252, 0.2)',
                maxWidth: '220px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
              title={`Standard: ${activeVideo.standardCode}`}
            >
              Standard: {activeVideo.standardCode}
            </span>
          </div>

          {/* Player Mode Actions: PiP, Floating Window, Fullscreen, Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleMinimizeToFloating}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#E2E8F0',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 700,
                transition: 'all 0.15s ease',
              }}
              title="Minimize into draggable floating miniplayer"
              id="btn-video-float-mode"
            >
              <span>🪟</span>
              <span className="hide-on-tiny-screen">Floating</span>
            </button>

            <button
              onClick={handlePictureInPicture}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#E2E8F0',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 700,
                transition: 'all 0.15s ease',
              }}
              title="Picture-in-Picture mode"
              id="btn-video-pip-mode"
            >
              <span>🖼️</span>
              <span className="hide-on-tiny-screen">PiP</span>
            </button>

            <button
              onClick={handleFullscreen}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#E2E8F0',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 700,
                transition: 'all 0.15s ease',
              }}
              title="Enter Fullscreen"
              id="btn-video-fullscreen-mode"
            >
              <span>⛶</span>
              <span className="hide-on-tiny-screen">Full</span>
            </button>

            <a
              href={`https://www.youtube.com/watch?v=${activeVideo.youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#E2E8F0',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontWeight: 700,
                transition: 'all 0.15s ease',
              }}
              title="Open video directly on YouTube"
              id="btn-video-youtube-external"
            >
              <span>YouTube ↗</span>
            </a>

            <button
              onClick={handleClose}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#CBD5E1',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 700,
                transition: 'all 0.15s ease',
              }}
              title="Close modal"
              id="btn-close-video-modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* 16:9 Video Player */}
        <div
          id="video-player-fullscreen-target"
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%',
            height: 0,
            backgroundColor: '#000000',
          }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
        <div className="video-modal-footer" style={{ padding: '20px', backgroundColor: '#0F172A' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 'min(100%, 260px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', color: '#38BDF8', fontWeight: 700 }}>
                  ▶ {activeVideo.channelTitle}
                </span>
                <span style={{ color: '#475569' }}>•</span>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
                  ⏱ {activeVideo.durationFormatted}
                </span>
                <span style={{ color: '#475569' }}>•</span>
                <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700 }}>
                  ★ 100% Curated
                </span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#F8FAFC', margin: '0 0 8px 0', lineHeight: 1.35 }}>
                {activeVideo.title}
              </h3>
              {activeVideo.summary && (
                <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                  {activeVideo.summary}
                </p>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', maxWidth: '280px' }}>
              <Link
                href={activeVideo.lessonUrl}
                onClick={handleClose}
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#4F46E5',
                  color: '#FFFFFF',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
                  transition: 'all 0.2s ease',
                  textAlign: 'center',
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
