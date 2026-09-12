'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

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

export type PlayerMode = 'closed' | 'modal' | 'floating';

interface VideoContextValue {
  activeVideo: VideoModalItem | null;
  playerMode: PlayerMode;
  playVideo: (video: VideoModalItem, startMode?: 'modal' | 'floating') => void;
  closeVideo: () => void;
  setPlayerMode: (mode: PlayerMode) => void;
  toggleFloating: () => void;
  enterFullscreen: (element?: HTMLElement | null) => void;
  requestPictureInPicture: () => void;
}

const VideoContext = createContext<VideoContextValue | null>(null);

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [activeVideo, setActiveVideo] = useState<VideoModalItem | null>(null);
  const [playerMode, setPlayerMode] = useState<PlayerMode>('closed');

  const playVideo = useCallback((video: VideoModalItem, startMode: 'modal' | 'floating' = 'modal') => {
    setActiveVideo(video);
    setPlayerMode(startMode);
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
    setPlayerMode('closed');
  }, []);

  const toggleFloating = useCallback(() => {
    setPlayerMode((prev) => (prev === 'floating' ? 'modal' : 'floating'));
  }, []);

  const enterFullscreen = useCallback((element?: HTMLElement | null) => {
    const target = element || document.getElementById('video-player-fullscreen-target') || document.documentElement;
    if (!document.fullscreenElement) {
      if (target.requestFullscreen) {
        target.requestFullscreen().catch(() => {});
      } else if ((target as any).webkitRequestFullscreen) {
        (target as any).webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  }, []);

  const requestPictureInPicture = useCallback(() => {
    // For iframe-based YouTube embeds, browser PiP is sandboxed by third-party iframe policy,
    // so seamlessly switch into the interactive in-app Floating Window miniplayer mode!
    setPlayerMode('floating');
  }, []);

  // Keyboard shortcut: Escape closes modal or restores floating
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (playerMode === 'modal') {
          // If modal is open, minimize to floating instead of killing playback abruptly
          setPlayerMode('floating');
        } else if (playerMode === 'floating') {
          closeVideo();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerMode, closeVideo]);

  return (
    <VideoContext.Provider
      value={{
        activeVideo,
        playerMode,
        playVideo,
        closeVideo,
        setPlayerMode,
        toggleFloating,
        enterFullscreen,
        requestPictureInPicture,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideoPlayer() {
  const context = useContext(VideoContext);
  if (!context) {
    return {
      activeVideo: null,
      playerMode: 'closed' as PlayerMode,
      playVideo: () => {},
      closeVideo: () => {},
      setPlayerMode: () => {},
      toggleFloating: () => {},
      enterFullscreen: () => {},
      requestPictureInPicture: () => {},
    };
  }
  return context;
}
