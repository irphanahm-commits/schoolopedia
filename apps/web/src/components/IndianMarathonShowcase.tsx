'use client';

import React, { useState } from 'react';
import { IndianMarathonVideo } from '@/lib/indian-syllabus-data';
import { useVideoPlayer, VideoModalItem } from '@/lib/VideoContext';

interface IndianMarathonShowcaseProps {
  marathons: IndianMarathonVideo[];
  courseTitle: string;
  gradeLabel: string;
  subjectLabel: string;
  boardName: string;
}

export function IndianMarathonShowcase({
  marathons,
  courseTitle: _courseTitle,
  gradeLabel,
  subjectLabel,
  boardName,
}: IndianMarathonShowcaseProps) {
  const { playVideo } = useVideoPlayer();
  const [filter, setFilter] = useState<'ALL' | 'NEXT_TOPPERS' | 'MARATHON' | 'ONE_SHOT' | 'HINDI' | 'ENGLISH'>('ALL');

  if (!marathons || marathons.length === 0) {
    return null;
  }

  const filtered = marathons.filter(m => {
    if (filter === 'NEXT_TOPPERS') return m.channelTitle.toLowerCase().includes('next toppers') || m.educator.toLowerCase().includes('next toppers') || m.educator.toLowerCase().includes('prashant kirad') || m.educator.toLowerCase().includes('shobhit nirwan');
    if (filter === 'MARATHON') return m.type === 'FULL_SYLLABUS_MARATHON';
    if (filter === 'ONE_SHOT') return m.type === 'ONE_SHOT_CHAPTER';
    if (filter === 'HINDI') return m.language.includes('Hindi');
    if (filter === 'ENGLISH') return m.language === 'English';
    return true;
  });

  const handlePlay = (m: IndianMarathonVideo) => {
    const item: VideoModalItem = {
      youtubeVideoId: m.youtubeVideoId,
      title: m.title,
      channelTitle: `${m.channelTitle} • ${m.educator}`,
      durationFormatted: m.durationFormatted,
      gradeLabel,
      subjectLabel,
      standardCode: m.boardAlignment,
      lessonUrl: '#',
      summary: m.summary,
    };
    playVideo(item, 'modal');
  };

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        border: '1.5px solid #fed7aa',
        padding: '30px',
        boxShadow: '0 8px 30px rgba(234, 88, 12, 0.08)',
        marginBottom: '32px',
        background: 'linear-gradient(180deg, #fffbeb 0%, #ffffff 100%)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '6px',
                backgroundColor: '#f97316',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              🔥 Top Indian Educator Masterclasses
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: '#fef3c7',
                color: '#92400e',
                border: '1px solid #fde68a',
              }}
            >
              ★ Next Toppers & Prashant Kirad Verified
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: '#ffedd5',
                color: '#9a3412',
              }}
            >
              🇮🇳 Hindi & Hinglish + English
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: '#ecfdf5',
                color: '#065f46',
              }}
            >
              ✓ {boardName} Aligned
            </span>
          </div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px' }}>
            Full Board Marathons & Chapter One-Shots
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#64748b', margin: 0, maxWidth: '800px', lineHeight: 1.5 }}>
            Watch complete full-syllabus revision sessions and chapter-by-chapter deep dives by India’s most acclaimed educators (Next Toppers, Prashant Kirad, Shobhit Nirwan, Physics Wallah, Dear Sir, Vedantu, Magnet Brains, NCERT Wallah). Mapped directly to official board blueprints.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {[
            { id: 'ALL', label: 'All Videos' },
            { id: 'NEXT_TOPPERS', label: '🔥 Next Toppers' },
            { id: 'MARATHON', label: '⚡ Full Marathons' },
            { id: 'ONE_SHOT', label: '📖 Chapter One-Shots' },
            { id: 'HINDI', label: '🇮🇳 Hindi / Hinglish' },
          ].map(tab => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: active ? 800 : 600,
                  backgroundColor: active ? '#ea580c' : '#ffffff',
                  color: active ? '#ffffff' : '#475569',
                  border: active ? '1px solid #ea580c' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: active ? '0 2px 8px rgba(234, 88, 12, 0.25)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
        {filtered.map(m => (
          <div
            key={m.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #fed7aa',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
          >
            <div>
              {/* Badges */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '6px',
                    backgroundColor: m.type === 'FULL_SYLLABUS_MARATHON' ? '#fee2e2' : '#fef3c7',
                    color: m.type === 'FULL_SYLLABUS_MARATHON' ? '#991b1b' : '#92400e',
                  }}
                >
                  {m.type === 'FULL_SYLLABUS_MARATHON' ? '⚡ Maha-Marathon' : m.type === 'ENTRANCE_REVISION' ? '🎯 Entrance Sprint' : '📖 Chapter One-Shot'}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  ⏱ {m.durationFormatted}
                </span>
              </div>

              <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.4 }}>
                {m.title}
              </h3>

              <div style={{ fontSize: '0.8rem', color: '#ea580c', fontWeight: 700, marginBottom: '6px' }}>
                👨‍🏫 {m.educator} • {m.channelTitle}
              </div>

              <div style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.4, marginBottom: '14px' }}>
                {m.summary}
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>
                {m.boardAlignment.split('/')[0].trim()}
              </span>
              <button
                type="button"
                onClick={() => handlePlay(m)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  backgroundColor: '#ea580c',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(234, 88, 12, 0.3)',
                  transition: 'background-color 0.15s ease',
                }}
              >
                <span>▶ Watch Masterclass</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
