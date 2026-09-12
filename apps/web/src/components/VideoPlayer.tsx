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
      <div className="glass-panel" style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        No video resources available for this lesson. Please refer to the written explanation below.
      </div>
    );
  }

  const current = videos[selectedIndex] || videos[0];
  const { video, mapping } = current;

  return (
    <div className="glass-panel" style={{ overflow: 'hidden', marginBottom: '32px' }} id="video-lesson-section">
      {/* Video Switcher Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 20px',
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        borderBottom: '1px solid var(--border-subtle)',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Resource:
          </span>
          <span className={`badge ${mapping.role === 'PRIMARY' ? 'badge-verified' : 'badge-curriculum'}`}>
            {mapping.role === 'PRIMARY' ? '★ Primary Recommended' : 'Alternate Explanation'}
          </span>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            via {video.channel_title}
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
                style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                id={`btn-select-video-${idx}`}
              >
                {item.mapping.role === 'PRIMARY' ? 'Option 1 (Khan Academy)' : 'Option 2 (Math Antics)'}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Responsive Video Container */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', backgroundColor: '#000000' }}>
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
      <div style={{ padding: '16px 20px', backgroundColor: 'var(--bg-secondary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            {video.title}
          </h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            {mapping.curation_notes || 'Carefully evaluated for grade-appropriateness and standards alignment.'}
          </p>
        </div>

        {video.quality_score && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Curriculum Fit:</span>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--accent-emerald)',
              background: 'var(--accent-emerald-subtle)',
              padding: '2px 8px',
              borderRadius: '4px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
            }}>
              {video.quality_score.total_score}/100
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
