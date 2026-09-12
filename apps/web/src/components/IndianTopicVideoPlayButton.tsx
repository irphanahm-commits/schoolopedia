'use client';

import React from 'react';
import { useVideoPlayer, VideoModalItem } from '@/lib/VideoContext';
import { IndianTopicAlternative } from '@/lib/indian-syllabus-data';

interface IndianTopicVideoPlayButtonProps {
  alternative: IndianTopicAlternative;
  topic: {
    title: string;
    topicNumber: string;
    standardCode: string;
    gradeLabel: string;
    subjectLabel: string;
    lessonUrl: string;
  };
}

export function IndianTopicVideoPlayButton({ alternative, topic }: IndianTopicVideoPlayButtonProps) {
  const { playVideo } = useVideoPlayer();

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const item: VideoModalItem = {
      youtubeVideoId: alternative.video.youtubeVideoId,
      title: alternative.video.title,
      channelTitle: `${alternative.video.channelTitle} (${alternative.language})`,
      durationFormatted: alternative.video.durationFormatted,
      gradeLabel: topic.gradeLabel,
      subjectLabel: topic.subjectLabel,
      standardCode: topic.standardCode,
      lessonUrl: topic.lessonUrl,
      summary: alternative.pedagogyNotes,
    };

    playVideo(item, 'modal');
  };

  return (
    <button
      onClick={handlePlay}
      type="button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '8px',
        backgroundColor: '#fff7ed',
        border: '1px solid #fdba74',
        color: '#c2410c',
        fontWeight: 700,
        fontSize: '0.8rem',
        cursor: 'pointer',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        transition: 'all 0.15s ease',
      }}
      title={`Watch ${alternative.video.title} in ${alternative.language} by ${alternative.educator}`}
    >
      <span style={{ fontSize: '0.9rem' }}>🇮🇳</span>
      <span>Hindi Masterclass: <strong>{alternative.educator}</strong></span>
    </button>
  );
}
