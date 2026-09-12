'use client';

import React, { useState } from 'react';
import { IndianSubjectCurriculum, IndianNCERTChapter } from '@/lib/indian-ncert-curriculum';
import { useVideoPlayer, VideoModalItem } from '@/lib/VideoContext';

interface IndianNCERTSyllabusViewProps {
  curriculum: IndianSubjectCurriculum;
  jurisdictionName?: string;
  jurisdictionSlug?: string;
}

export function IndianNCERTSyllabusView({
  curriculum,
  jurisdictionName = 'Central Board of Secondary Education (CBSE)',
}: IndianNCERTSyllabusViewProps) {
  const { playVideo } = useVideoPlayer();
  const [activeMedium, setActiveMedium] = useState<'english' | 'hindi'>('english');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChapterVideoOverride, setActiveChapterVideoOverride] = useState<Record<number, 'english' | 'hindi'>>({});

  const filteredChapters = curriculum.chapters.filter((ch) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      ch.titleEnglish.toLowerCase().includes(q) ||
      ch.titleHindi.toLowerCase().includes(q) ||
      ch.summaryEnglish.toLowerCase().includes(q) ||
      ch.summaryHindi.toLowerCase().includes(q) ||
      ch.keyTopicsEnglish.some((t) => t.toLowerCase().includes(q)) ||
      ch.keyTopicsHindi.some((t) => t.toLowerCase().includes(q)) ||
      ch.ncertCode.toLowerCase().includes(q) ||
      `chapter ${ch.chapterNumber}`.includes(q) ||
      `अध्याय ${ch.chapterNumber}`.includes(q)
    );
  });

  const handlePlayChapterVideo = (chapter: IndianNCERTChapter, mediumToPlay: 'english' | 'hindi') => {
    const videoData = mediumToPlay === 'hindi' ? chapter.hindiVideo : chapter.englishVideo;
    const isHindi = mediumToPlay === 'hindi';

    const item: VideoModalItem = {
      youtubeVideoId: videoData.youtubeVideoId,
      title: videoData.title,
      channelTitle: `${videoData.channelTitle} • ${isHindi ? 'हिंदी माध्यम Masterclass' : 'English Medium Masterclass'}`,
      durationFormatted: videoData.durationFormatted,
      gradeLabel: curriculum.classLabel, // Strictly "Class X"
      subjectLabel: isHindi ? curriculum.subjectNameHindi : curriculum.subjectNameEnglish,
      standardCode: `${chapter.ncertCode} • ${jurisdictionName}`,
      lessonUrl: '#',
      summary: isHindi ? chapter.summaryHindi : chapter.summaryEnglish,
    };

    playVideo(item, 'modal');
  };

  const toggleChapterVideoOverride = (chNumber: number) => {
    setActiveChapterVideoOverride((prev) => {
      const current = prev[chNumber] || activeMedium;
      return {
        ...prev,
        [chNumber]: current === 'english' ? 'hindi' : 'english',
      };
    });
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      {/* Top Banner & Medium Selection Control */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1.5px solid #c7d2fe',
          padding: '28px',
          boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.08)',
          marginBottom: '28px',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '8px',
                  backgroundColor: '#4338ca',
                  color: '#ffffff',
                  letterSpacing: '0.04em',
                }}
              >
                🇮🇳 {curriculum.classLabel.toUpperCase()} OFFICIAL SYLLABUS
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '8px',
                  backgroundColor: '#ecfdf5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0',
                }}
              >
                ✓ NCERT / CBSE Prescribed Curriculum
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '8px',
                  backgroundColor: '#fef3c7',
                  color: '#92400e',
                  border: '1px solid #fde68a',
                }}
              >
                📚 {curriculum.totalChapters} Prescribed Chapters
              </span>
            </div>

            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
              {activeMedium === 'hindi'
                ? `${curriculum.classLabel} ${curriculum.subjectNameHindi} (${curriculum.subjectNameEnglish})`
                : `${curriculum.classLabel} ${curriculum.subjectNameEnglish} (${curriculum.subjectNameHindi})`}
            </h2>

            <p style={{ fontSize: '0.92rem', color: '#475569', margin: 0, maxWidth: '800px', lineHeight: 1.5 }}>
              {activeMedium === 'hindi'
                ? `राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद (NCERT) एवं केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE) द्वारा अनुमोदित आधिकारिक पाठ्यक्रम। प्रत्येक अध्याय के लिए समर्पित हिंदी माध्यम व्याख्यान उपलब्ध हैं।`
                : `Official sequenced chapter syllabus prescribed by NCERT and followed across CBSE, CISCE, NIOS, and State Education Boards nationwide. Every chapter is mapped to dedicated video masterclasses.`}
            </p>
          </div>

          {/* Dual Medium / Mode Switcher */}
          <div
            style={{
              backgroundColor: '#f1f5f9',
              padding: '6px',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <button
              onClick={() => setActiveMedium('english')}
              type="button"
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: activeMedium === 'english' ? 800 : 600,
                fontSize: '0.85rem',
                backgroundColor: activeMedium === 'english' ? '#4f46e5' : 'transparent',
                color: activeMedium === 'english' ? '#ffffff' : '#475569',
                boxShadow: activeMedium === 'english' ? '0 2px 8px rgba(79, 70, 229, 0.3)' : 'none',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>🇬🇧</span>
              <span>English Medium</span>
            </button>

            <button
              onClick={() => setActiveMedium('hindi')}
              type="button"
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: activeMedium === 'hindi' ? 800 : 600,
                fontSize: '0.85rem',
                backgroundColor: activeMedium === 'hindi' ? '#dc2626' : 'transparent',
                color: activeMedium === 'hindi' ? '#ffffff' : '#475569',
                boxShadow: activeMedium === 'hindi' ? '0 2px 8px rgba(220, 38, 38, 0.3)' : 'none',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>🇮🇳</span>
              <span>Hindi Medium (हिंदी माध्यम)</span>
            </button>
          </div>
        </div>

        {/* NCERT Prescribed Textbook Reference & Mode Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '12px 18px',
            backgroundColor: activeMedium === 'hindi' ? '#fef2f2' : '#eef2ff',
            borderRadius: '12px',
            border: activeMedium === 'hindi' ? '1px solid #fecaca' : '1px solid #e0e7ff',
            fontSize: '0.84rem',
            color: activeMedium === 'hindi' ? '#991b1b' : '#3730a3',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 800 }}>
              {activeMedium === 'hindi' ? '📖 अनुशंसित एनसीईआरटी पाठ्यपुस्तक:' : '📖 Official NCERT Textbook:'}
            </span>
            <span style={{ fontWeight: 600 }}>
              {activeMedium === 'hindi' ? curriculum.ncertBookHindi : curriculum.ncertBookEnglish}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', opacity: 0.9 }}>
            <span>⚡ Medium Mode: <strong>{activeMedium === 'hindi' ? 'हिंदी माध्यम (Hindi Medium)' : 'English Medium'}</strong></span>
            <span>•</span>
            <span>{curriculum.totalChapters} Total Chapters with Dedicated Masterclass Videos</span>
          </div>
        </div>
      </div>

      {/* Chapter Search / Filter */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            {activeMedium === 'hindi' ? 'अध्याय सूची एवं वीडियो कक्षाएं' : 'Chapter List & Video Masterclasses'}
          </h3>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, padding: '2px 8px', borderRadius: '12px', backgroundColor: '#e2e8f0', color: '#334155' }}>
            {filteredChapters.length} of {curriculum.totalChapters} Chapters
          </span>
        </div>

        <div style={{ position: 'relative', minWidth: '280px' }}>
          <input
            type="text"
            placeholder={activeMedium === 'hindi' ? 'अध्याय या विषय खोजें...' : 'Filter chapters or topics...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 14px 8px 36px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '0.85rem',
              outline: 'none',
              backgroundColor: '#ffffff',
            }}
          />
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '0.9rem' }}>
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              type="button"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#94a3b8',
                fontSize: '0.8rem',
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Chapters Grid / Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredChapters.map((chapter) => {
          const effectiveMedium = activeChapterVideoOverride[chapter.chapterNumber] || activeMedium;
          const isHindiVideo = effectiveMedium === 'hindi';
          const videoData = isHindiVideo ? chapter.hindiVideo : chapter.englishVideo;

          const mainTitle = activeMedium === 'hindi' ? chapter.titleHindi : chapter.titleEnglish;
          const altTitle = activeMedium === 'hindi' ? chapter.titleEnglish : chapter.titleHindi;
          const summary = activeMedium === 'hindi' ? chapter.summaryHindi : chapter.summaryEnglish;
          const keyTopics = activeMedium === 'hindi' ? chapter.keyTopicsHindi : chapter.keyTopicsEnglish;

          return (
            <div
              key={chapter.slug}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: '24px',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'center' }}>
                {/* Left: Chapter Content & NCERT Syllabus Details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        backgroundColor: '#4f46e5',
                        color: '#ffffff',
                      }}
                    >
                      {activeMedium === 'hindi' ? `अध्याय ${chapter.chapterNumber}` : `Chapter ${chapter.chapterNumber}`}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        fontFamily: 'monospace',
                      }}
                    >
                      {chapter.ncertCode}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: '#ecfdf5',
                        color: '#065f46',
                      }}
                    >
                      Official NCERT
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.28rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: 1.35 }}>
                    {mainTitle}
                  </h4>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#64748b', marginBottom: '12px' }}>
                    {altTitle}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.55, margin: '0 0 14px 0' }}>
                    {summary}
                  </p>

                  {/* Key Concepts / Topics */}
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                      {activeMedium === 'hindi' ? 'प्रमुख अवधारणाएं एवं बिंदु:' : 'Key Concepts & Curriculum Points:'}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {keyTopics.map((topic, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.76rem',
                            fontWeight: 600,
                            padding: '3px 9px',
                            borderRadius: '6px',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            color: '#475569',
                          }}
                        >
                          • {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Dedicated Video Masterclass Card for this Chapter */}
                <div
                  style={{
                    backgroundColor: isHindiVideo ? '#fff7ed' : '#f8fafc',
                    borderRadius: '16px',
                    border: isHindiVideo ? '1.5px solid #fed7aa' : '1.5px solid #e2e8f0',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          backgroundColor: isHindiVideo ? '#ea580c' : '#2563eb',
                          color: '#ffffff',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {isHindiVideo ? '🇮🇳 हिंदी माध्यम Masterclass' : '🇬🇧 English Medium Masterclass'}
                      </span>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '2px 7px',
                          borderRadius: '6px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          color: '#475569',
                        }}
                      >
                        ⏱ {videoData.durationFormatted}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px', lineHeight: 1.4 }}>
                      {videoData.title}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b', marginBottom: '14px' }}>
                      <span>Educator / Channel:</span>
                      <span style={{ fontWeight: 700, color: '#0f172a' }}>{videoData.channelTitle}</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <button
                        onClick={() => handlePlayChapterVideo(chapter, effectiveMedium)}
                        type="button"
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: 'pointer',
                          backgroundColor: isHindiVideo ? '#ea580c' : '#4f46e5',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          boxShadow: isHindiVideo
                            ? '0 3px 10px rgba(234, 88, 12, 0.25)'
                            : '0 3px 10px rgba(79, 70, 229, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          transition: 'background-color 0.15s ease',
                        }}
                      >
                        <span>▶</span>
                        <span>{activeMedium === 'hindi' ? 'अध्याय वीडियो देखें' : 'Watch Chapter Masterclass'}</span>
                      </button>

                      <button
                        onClick={() => toggleChapterVideoOverride(chapter.chapterNumber)}
                        type="button"
                        title={isHindiVideo ? 'Switch to English Masterclass' : 'Switch to Hindi Masterclass'}
                        style={{
                          padding: '9px 12px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          backgroundColor: '#ffffff',
                          color: '#475569',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {isHindiVideo ? '🇬🇧 English Video' : '🇮🇳 हिंदी Video'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
