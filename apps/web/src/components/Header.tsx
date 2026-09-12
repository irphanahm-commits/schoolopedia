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
      backgroundColor: 'rgba(255, 255, 255, 0.94)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 28px',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
    }}>
      {/* Brand & Left Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }} id="nav-brand-logo">
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div>
            <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a' }}>
              Schoolopedia
            </span>
          </div>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/learn/us/california/grade-8/mathematics/linear-equations"
            style={{
              fontSize: '0.92rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              padding: '6px 12px',
              borderRadius: '8px',
              transition: 'all 0.2s',
            }}
            id="nav-link-curriculum"
          >
            Curriculum
          </Link>
          <span className="badge badge-verified">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            CA-CCSS Verified
          </span>
        </nav>
      </div>

      {/* Right Controls: Search, Notification Bell, Student Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={onOpenSearch}
          id="header-search-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#f1f5f9',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            padding: '9px 18px',
            color: 'var(--text-secondary)',
            fontSize: '0.88rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span style={{ color: 'var(--text-secondary)' }}>Search your class or topic...</span>
          <kbd style={{
            fontSize: '0.72rem',
            padding: '2px 6px',
            borderRadius: '6px',
            background: '#ffffff',
            color: 'var(--text-muted)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          }}>
            ⌘K
          </kbd>
        </button>

        {/* Notification Bell */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#ffffff',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          cursor: 'pointer',
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        }} title="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-coral)',
            border: '2px solid #ffffff',
          }}></span>
        </div>

        {/* Student Avatar Greeting */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '4px 12px 4px 4px',
          borderRadius: 'var(--radius-full)',
          background: '#ffffff',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #fbcfe8 0%, #c7d2fe 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.95rem',
          }}>
            🎓
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.1 }}>
              Hello, Learner!
            </span>
            <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600, lineHeight: 1 }}>
              ● Grade 8
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
