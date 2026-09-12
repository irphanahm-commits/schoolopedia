'use client';

import React, { useState } from 'react';
import { Video, VideoMapping } from '@schoolopedia/types';

interface VideoPlayerProps {
  videos: Array<{
    video: Video;
    mapping: VideoMapping;
  }>;
}

export function VideoPlayer({ videos }: VideoPlayerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!videos || videos.length === 0) {
    return (
      <div className="student-card" style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        No video resources available for this lesson. Please refer to the written explanation below.
      </div>
    );
  }

  const current = videos[selectedIndex] || videos[0];
  const { video, mapping } = current;

  return (
    <div className="student-card" style={{ overflow: 'hidden', marginBottom: '36px' }} id="video-lesson-section">
      {/* Video Switcher Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid var(--border-subtle)',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Resource:
          </span>
          <span className={`badge ${mapping.role === 'PRIMARY' ? 'badge-verified' : 'badge-curriculum'}`}>
            {mapping.role === 'PRIMARY' ? '★ Primary Recommended' : 'Alternate Explanation'}
          </span>
          <span style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
            by {video.channel_title}
          </span>
        </div>

        {/* Video selector buttons */}
        {videos.length > 1 && (
          <div style={{ display: 'flex', gap: '8px' }}>
            {videos.map((item, idx) => (
              <button
                key={item.video.id}
                onClick={() => setSelectedIndex(idx)}
                className={`btn ${idx === selectedIndex ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '7px 16px', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}
                id={`btn-select-video-${idx}`}
              >
                {item.mapping.role === 'PRIMARY' ? 'Option 1 (Khan Academy)' : 'Option 2 (Math Antics)'}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Responsive Video Container */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', backgroundColor: '#0f172a' }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtube_video_id}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
      <div style={{
        padding: '18px 24px',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <div>
          <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
            {video.title}
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            {mapping.curation_notes || 'Carefully evaluated for grade-appropriateness and standards alignment.'}
          </p>
        </div>

        {video.quality_score && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ecfdf5',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid #a7f3d0',
          }}>
            <span style={{ fontSize: '0.78rem', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>
              Quality Rating:
            </span>
            <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#065f46' }}>
              {video.quality_score.total_score}/100
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
