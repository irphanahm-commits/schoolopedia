'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useVideoPlayer } from '@/lib/VideoContext';

export function FloatingVideoPlayer() {
  const { activeVideo, playerMode, setPlayerMode, closeVideo, enterFullscreen } = useVideoPlayer();
  const containerRef = useRef<HTMLDivElement>(null);

  // Position state (offsets from default bottom-right)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; startX: number; startY: number }>({
    mouseX: 0,
    mouseY: 0,
    startX: 0,
    startY: 0,
  });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only drag from header, not on action buttons
    if ((e.target as HTMLElement).closest('button')) return;
    
    isDraggingRef.current = true;
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      startX: position.x,
      startY: position.y,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.mouseX;
    const dy = e.clientY - dragStartRef.current.mouseY;

    // Constrain position within window boundaries
    const newX = dragStartRef.current.startX + dx;
    const newY = dragStartRef.current.startY + dy;

    // Viewport bounds calculation
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    const playerWidth = 340;
    const playerHeight = 240;

    // Clamping to avoid losing the window offscreen
    const clampedX = Math.min(20, Math.max(-(windowWidth - playerWidth - 20), newX));
    const clampedY = Math.min(20, Math.max(-(windowHeight - playerHeight - 20), newY));

    setPosition({ x: clampedX, y: clampedY });
  }, []);

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Ignore pointer capture release error if already released
      }
    }
  };

  if (!activeVideo || playerMode !== 'floating') return null;

  return (
    <div
      ref={containerRef}
      className="floating-video-container"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      id="floating-video-miniplayer"
    >
      {/* Draggable Header Bar */}
      <div
        className="floating-video-header"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        title="Drag to reposition miniplayer"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', flex: 1 }}>
          <span style={{ color: '#94A3B8', fontSize: '0.9rem', cursor: 'grab', display: 'flex' }}>
            ⋮⋮
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#F8FAFC',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {activeVideo.title}
          </span>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <a
            href={`https://www.youtube.com/watch?v=${activeVideo.youtubeVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-video-action-btn"
            title="Open on YouTube"
            id="btn-floating-youtube-external"
            style={{ textDecoration: 'none', color: '#E2E8F0', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            ↗
          </a>
          <button
            onClick={() => setPlayerMode('modal')}
            className="floating-video-action-btn"
            title="Expand to Full Modal"
            id="btn-floating-expand-modal"
          >
            ⤢
          </button>
          <button
            onClick={() => enterFullscreen(containerRef.current)}
            className="floating-video-action-btn"
            title="Toggle Fullscreen"
            id="btn-floating-fullscreen"
          >
            ⛶
          </button>
          <button
            onClick={closeVideo}
            className="floating-video-action-btn"
            style={{ color: '#F87171' }}
            title="Close Miniplayer"
            id="btn-floating-close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* 16:9 Video Player */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', backgroundColor: '#000000' }}>
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
          id="floating-youtube-iframe"
        />
      </div>

      {/* Mini Info Bar */}
      <div
        style={{
          padding: '6px 10px',
          backgroundColor: '#0F172A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          fontSize: '0.72rem',
        }}
      >
        <span style={{ color: '#38BDF8', fontWeight: 700 }}>
          ▶ {activeVideo.channelTitle}
        </span>
        <span style={{ color: '#94A3B8' }}>
          ⏱ {activeVideo.durationFormatted}
        </span>
      </div>
    </div>
  );
}
