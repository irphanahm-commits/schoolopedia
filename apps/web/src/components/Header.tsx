'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchModal } from './SearchModal';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export function Header({ onOpenSearch }: HeaderProps) {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMobileMenuOpen(false);
    onOpenSearch?.();
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '0 20px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
        }}
      >
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} id="nav-brand-logo">
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a' }}>
                Schoolopedia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-only-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Link
              href="/learn"
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
              id="nav-link-learn"
            >
              📖 Learn
            </Link>
            <Link
              href="/explore"
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
              id="nav-link-explore"
            >
              🏛️ Explore
            </Link>
            <Link
              href="/guidance"
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
              id="nav-link-guidance"
            >
              🧭 Guidance
            </Link>
            <Link
              href="/opportunities"
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
              id="nav-link-opportunities"
            >
              🌟 Opportunities
            </Link>
            <Link
              href="/blog"
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
              id="nav-link-blog"
            >
              ✍️ Updates
            </Link>
          </nav>
        </div>

        {/* Right Controls: Desktop */}
        <div className="desktop-only-nav" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/learn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#EEF2FF',
              border: '1px solid #C7D2FE',
              color: '#4338CA',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            id="header-all-curricula-btn"
          >
            <span>🌐</span>
            <span>All 78 Curricula</span>
          </Link>

          {/* Search Trigger */}
          <button
            onClick={openSearch}
            id="header-search-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#f1f5f9',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
              padding: '8px 16px',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span style={{ color: 'var(--text-secondary)' }}>Search curriculum...</span>
            <kbd
              style={{
                fontSize: '0.72rem',
                padding: '2px 6px',
                borderRadius: '6px',
                background: '#ffffff',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}
            >
              ⌘K
            </kbd>
          </button>

          {/* Student Profile Greeting */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 10px 4px 4px',
              borderRadius: 'var(--radius-full)',
              background: '#ffffff',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fbcfe8 0%, #c7d2fe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
              }}
            >
              🎓
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.1 }}>
                Learner
              </span>
              <span style={{ fontSize: '0.66rem', color: '#10b981', fontWeight: 600, lineHeight: 1 }}>
                ● Active
              </span>
            </div>
          </div>

          {/* Admin Operations Console Link */}
          <Link
            href="/admin"
            id="header-admin-link"
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#475569',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.15s ease',
            }}
          >
            <span>⚙️</span>
            <span>Admin</span>
          </Link>
        </div>

        {/* Mobile Header Controls (< 768px) */}
        <div className="mobile-only-header-controls" style={{ alignItems: 'center', gap: '8px' }}>
          {/* Quick Mobile Search Button */}
          <button
            onClick={openSearch}
            id="mobile-search-btn"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#F1F5F9',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--accent-primary)',
            }}
            title="Search curriculum"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            id="mobile-hamburger-btn"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: isMobileMenuOpen ? '#EEF2FF' : '#F1F5F9',
              border: isMobileMenuOpen ? '1px solid #C7D2FE' : '1px solid var(--border-subtle)',
              color: isMobileMenuOpen ? '#4F46E5' : '#1E293B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: 700,
              transition: 'all 0.2s ease',
            }}
            title="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 35,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            animation: 'fadeIn 0.15s ease-out',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '20px',
              boxShadow: '0 20px 30px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              <Link
                href="/learn"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: '#0F172A',
                }}
              >
                <span>📖</span>
                <span>Learn</span>
              </Link>
              <Link
                href="/explore"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: '#0F172A',
                }}
              >
                <span>🏛️</span>
                <span>Explore</span>
              </Link>
              <Link
                href="/guidance"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: '#0F172A',
                }}
              >
                <span>🧭</span>
                <span>Guidance</span>
              </Link>
              <Link
                href="/opportunities"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: '#0F172A',
                }}
              >
                <span>🌟</span>
                <span>Opportunities</span>
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: '#0F172A',
                }}
              >
                <span>✍️</span>
                <span>Updates</span>
              </Link>
              <Link
                href="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: '#0F172A',
                }}
              >
                <span>⚙️</span>
                <span>Admin</span>
              </Link>
            </div>

            {/* Quick Action: All 78 Curricula */}
            <Link
              href="/learn"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                borderRadius: '12px',
                backgroundColor: '#EEF2FF',
                border: '1px solid #C7D2FE',
                color: '#4338CA',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              <span>🌐</span>
              <span>Browse All 78 Curricula Authorities</span>
            </Link>

            {/* Active Learner Pill on Mobile */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '10px',
                backgroundColor: '#F8FAFC',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.1rem' }}>🎓</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>
                  Student Mode
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>
                ● Active Learner
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
