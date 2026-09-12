'use client';

import React, { useState, useRef } from 'react';
import { Video, VideoMapping } from '@schoolopedia/types';
import { useVideoPlayer } from '@/lib/VideoContext';

interface VideoPlayerProps {
  videos: Array<{
    video: Video;
    mapping: VideoMapping;
  }>;
}

export function VideoPlayer({ videos }: VideoPlayerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { playVideo, enterFullscreen } = useVideoPlayer();

  if (!videos || videos.length === 0) {
    return (
      <div className="student-card" style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        No video resources available for this lesson. Please refer to the written explanation below.
      </div>
    );
  }

  const current = videos[selectedIndex] || videos[0];
  const { video, mapping } = current;

  const handleFloatVideo = () => {
    playVideo(
      {
        youtubeVideoId: video.youtube_video_id,
        title: video.title,
        channelTitle: video.channel_title,
        durationFormatted: `${Math.floor((video.duration_seconds || 600) / 60)}:${((video.duration_seconds || 600) % 60).toString().padStart(2, '0')}`,
        gradeLabel: 'Interactive Lesson',
        subjectLabel: 'Video Resource',
        standardCode: 'Mastery Resource',
        lessonUrl: typeof window !== 'undefined' ? window.location.pathname : '',
        summary: mapping.curation_notes || video.title,
      },
      'floating'
    );
  };

  const handleFullscreen = () => {
    enterFullscreen(containerRef.current);
  };

  return (
    <div ref={containerRef} className="student-card" style={{ overflow: 'hidden', marginBottom: '36px' }} id="video-lesson-section">
      {/* Video Switcher & Controls Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid var(--border-subtle)',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Resource:
          </span>
          <span className={`badge ${mapping.role === 'PRIMARY' ? 'badge-verified' : 'badge-curriculum'}`}>
            {mapping.role === 'PRIMARY' ? '★ Primary' : 'Alternate'}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
            by {video.channel_title}
          </span>
        </div>

        {/* Action Controls & Selectors */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {videos.length > 1 && (
            <div style={{ display: 'flex', gap: '6px' }}>
              {videos.map((item, idx) => (
                <button
                  key={item.video.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`btn ${idx === selectedIndex ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '6px 14px', fontSize: '0.78rem', borderRadius: 'var(--radius-full)' }}
                  id={`btn-select-video-${idx}`}
                >
                  {item.mapping.role === 'PRIMARY' ? 'Option 1' : 'Option 2'}
                </button>
              ))}
            </div>
          )}

          {/* Pop-out Floating Miniplayer button */}
          <button
            onClick={handleFloatVideo}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: '#EEF2FF',
              border: '1px solid #C7D2FE',
              color: '#4338CA',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            title="Pop-out into floating miniplayer to watch while doing practice quizzes"
            id="btn-lesson-float-player"
          >
            <span>🪟</span>
            <span>Float</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={handleFullscreen}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              color: '#475569',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            title="Toggle Fullscreen"
            id="btn-lesson-fullscreen"
          >
            <span>⛶</span>
          </button>
        </div>
      </div>

      {/* Responsive Video Container */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', backgroundColor: '#0f172a' }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtube_video_id}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          id="lesson-youtube-iframe"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
        />
      </div>

      {/* Video Quality & Provenance Info */}
      <div
        style={{
          padding: '16px 20px',
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ flex: 1, minWidth: 'min(100%, 260px)' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
            {video.title}
          </h4>
          <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0 }}>
            {mapping.curation_notes || 'Carefully evaluated for grade-appropriateness and standards alignment.'}
          </p>
        </div>

        {video.quality_score && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#ecfdf5',
              padding: '5px 12px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid #a7f3d0',
            }}
          >
            <span style={{ fontSize: '0.74rem', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>
              Rating:
            </span>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#065f46' }}>
              {video.quality_score.total_score}/100
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
