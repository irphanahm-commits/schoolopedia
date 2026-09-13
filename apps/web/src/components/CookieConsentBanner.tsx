'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('schoolopedia_cookie_consent');
      if (!consent) {
        // Show after brief delay so initial page paint is smooth
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore localStorage disabled
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    try {
      localStorage.setItem('schoolopedia_cookie_consent', type);
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie and Privacy Consent"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        right: '20px',
        maxWidth: '820px',
        margin: '0 auto',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        borderRadius: '16px',
        padding: '20px 24px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        animation: 'slideUp 0.3s ease forwards',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ fontSize: '1.5rem', lineHeight: '1' }}>🍪</span>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
              Privacy & Cookie Notice
            </h4>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.55' }}>
              Schoolopedia uses cookies and local storage to save your learning progress and deliver relevant educational advertisements through Google AdSense. We do not collect student personal information or sell your data. Learn more in our{' '}
              <Link href="/privacy-policy" style={{ color: '#818cf8', textDecoration: 'underline' }}>Privacy Policy</Link> and{' '}
              <Link href="/cookie-policy" style={{ color: '#818cf8', textDecoration: 'underline' }}>Cookie Policy</Link>.
            </p>
          </div>
        </div>

        <button
          onClick={() => handleAccept('essential')}
          aria-label="Close"
          style={{
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            fontSize: '1.2rem',
            padding: '2px',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '10px',
        flexWrap: 'wrap',
        paddingTop: '6px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}>
        <button
          onClick={() => handleAccept('essential')}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#e2e8f0',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.84rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          Essential Only
        </button>

        <button
          onClick={() => handleAccept('all')}
          style={{
            backgroundColor: '#4f46e5',
            border: 'none',
            color: '#ffffff',
            padding: '8px 20px',
            borderRadius: '8px',
            fontSize: '0.84rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(79, 70, 229, 0.4)',
            transition: 'all 0.15s ease',
          }}
        >
          Accept All & Continue
        </button>
      </div>
    </aside>
  );
}
