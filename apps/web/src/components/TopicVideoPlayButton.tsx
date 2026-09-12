'use client';

import React from 'react';
import { useVideoPlayer, VideoModalItem } from '@/lib/VideoContext';

interface TopicVideoPlayButtonProps {
  video: {
    youtubeVideoId: string;
    title: string;
    channelTitle: string;
    durationFormatted: string;
  };
  topic: {
    title: string;
    topicNumber: string;
    standardCode: string;
    gradeLabel: string;
    subjectLabel: string;
    lessonUrl: string;
    summary?: string;
  };
}

export function TopicVideoPlayButton({ video, topic }: TopicVideoPlayButtonProps) {
  const { playVideo } = useVideoPlayer();

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const item: VideoModalItem = {
      youtubeVideoId: video.youtubeVideoId,
      title: video.title,
      channelTitle: video.channelTitle,
      durationFormatted: video.durationFormatted,
      gradeLabel: topic.gradeLabel,
      subjectLabel: topic.subjectLabel,
      standardCode: topic.standardCode,
      lessonUrl: topic.lessonUrl,
      summary: topic.summary,
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
        backgroundColor: '#eef2ff',
        border: '1px solid #c7d2fe',
        color: '#4338ca',
        fontWeight: 700,
        fontSize: '0.8rem',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#4f46e5';
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.borderColor = '#4f46e5';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#eef2ff';
        e.currentTarget.style.color = '#4338ca';
        e.currentTarget.style.borderColor = '#c7d2fe';
      }}
      title={`Play video: ${video.title} (${video.channelTitle})`}
    >
      <span style={{ fontSize: '0.9rem' }}>▶</span>
      <span>Watch Video ({video.durationFormatted})</span>
    </button>
  );
}
