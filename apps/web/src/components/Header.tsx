'use client';

import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export function Header({ onOpenSearch }: HeaderProps) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      backgroundColor: 'rgba(11, 15, 25, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 24px',
      height: '68px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} id="nav-brand-logo">
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', background: 'linear-gradient(to right, #ffffff, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Schoolopedia
            </span>
          </div>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link
            href="/learn/us/california/grade-8/mathematics/linear-equations"
            style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
            id="nav-link-curriculum"
          >
            Curriculum
          </Link>
          <span style={{ color: 'var(--border-subtle)' }}>•</span>
          <span className="badge badge-verified">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            CA-CCSS Verified
          </span>
        </nav>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={onOpenSearch}
          id="header-search-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            padding: '8px 18px',
            color: 'var(--text-secondary)',
            fontSize: '0.88rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span>Search lessons, topics...</span>
          <kbd style={{
            fontSize: '0.72rem',
            padding: '2px 6px',
            borderRadius: '4px',
            background: 'var(--bg-tertiary)',
            color: 'var(--text-muted)',
            border: '1px solid var(--border-subtle)',
          }}>
            ⌘K
          </kbd>
        </button>

        <Link
          href="/learn/us/california/grade-8/mathematics/linear-equations"
          className="btn btn-primary"
          id="btn-start-learning"
          style={{ padding: '8px 16px', fontSize: '0.88rem' }}
        >
          Explore Grade 8 Math
        </Link>
      </div>
    </header>
  );
}
