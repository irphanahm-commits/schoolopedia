'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchModal } from './SearchModal';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export interface CurriculumOption {
  countryCode: string;
  countryName: string;
  flag: string;
  jurisdictionSlug: string;
  jurisdictionName: string;
  gradeLabel: string;
  standardCode: string;
  defaultUrl: string;
}

export const TIER1_OPTIONS: CurriculumOption[] = [
  {
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (CDE)',
    gradeLabel: 'Grade 8',
    standardCode: 'CCSS.MATH.8.EE.C.7',
    defaultUrl: '/learn/us/california/grade-8/mathematics/linear-equations'
  },
  {
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    jurisdictionSlug: 'texas',
    jurisdictionName: 'Texas (TEA / TEKS)',
    gradeLabel: 'Grade 8',
    standardCode: 'TEKS.MATH.8.8.C',
    defaultUrl: '/learn/us/texas/grade-8/mathematics/linear-equations'
  },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    jurisdictionSlug: 'england',
    jurisdictionName: 'England (DfE / KS3)',
    gradeLabel: 'Year 8',
    standardCode: 'UK.NC.KS3.ALG',
    defaultUrl: '/learn/gb/england/grade-8/mathematics/linear-equations'
  },
  {
    countryCode: 'CA',
    countryName: 'Canada',
    flag: '🇨🇦',
    jurisdictionSlug: 'ontario',
    jurisdictionName: 'Ontario (MoE)',
    gradeLabel: 'Grade 8',
    standardCode: 'ON.CURR.MATH.GR8',
    defaultUrl: '/learn/ca/ontario/grade-8/mathematics/linear-equations'
  },
  {
    countryCode: 'AU',
    countryName: 'Australia',
    flag: '🇦🇺',
    jurisdictionSlug: 'nsw',
    jurisdictionName: 'NSW / ACARA v9',
    gradeLabel: 'Year 8',
    standardCode: 'AC9M8A03',
    defaultUrl: '/learn/au/nsw/grade-8/mathematics/linear-equations'
  },
  {
    countryCode: 'NZ',
    countryName: 'New Zealand',
    flag: '🇳🇿',
    jurisdictionSlug: 'national',
    jurisdictionName: 'New Zealand Curriculum',
    gradeLabel: 'Level 4/5',
    standardCode: 'NZC.MATH.L5',
    defaultUrl: '/learn/nz/national/grade-8/mathematics/linear-equations'
  }
];

export function Header({ onOpenSearch }: HeaderProps) {
  const router = useRouter();
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedContext, setSelectedContext] = useState<CurriculumOption>(TIER1_OPTIONS[0]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('schoolopedia_curriculum_context');
      if (saved) {
        const parsed = JSON.parse(saved);
        const match = TIER1_OPTIONS.find(o => o.jurisdictionSlug === parsed.jurisdictionSlug);
        if (match) setSelectedContext(match);
      }
    } catch (_) {}

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = (option: CurriculumOption) => {
    setSelectedContext(option);
    setIsSelectorOpen(false);
    try {
      localStorage.setItem('schoolopedia_curriculum_context', JSON.stringify(option));
    } catch (_) {}
    router.push(option.defaultUrl);
  };

  return (
    <>
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
        {/* Brand & Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
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

          {/* Core Pillars Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Link
              href="/learn"
              style={{
                fontSize: '0.9rem',
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
                fontSize: '0.9rem',
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
                fontSize: '0.9rem',
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
                fontSize: '0.9rem',
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
          </nav>
        </div>

        {/* Right Controls: Country Switcher, Search, Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Dynamic Jurisdiction Selector Pill */}
          <button
            onClick={() => setIsSelectorOpen(true)}
            id="curriculum-switcher-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#eef2ff',
              border: '1px solid #c7d2fe',
              color: '#4338ca',
              borderRadius: 'var(--radius-full)',
              padding: '6px 14px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <span>{selectedContext.flag}</span>
            <span>{selectedContext.jurisdictionName}</span>
            <span style={{ opacity: 0.6 }}>• {selectedContext.gradeLabel}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {/* Search Trigger */}
          <button
            onClick={() => {
              setIsSearchOpen(true);
              onOpenSearch?.();
            }}
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
            width: '38px',
            height: '38px',
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
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span style={{
              position: 'absolute',
              top: '7px',
              right: '7px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-coral)',
              border: '2px solid #ffffff',
            }}></span>
          </div>

          {/* Student Profile Greeting */}
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
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fbcfe8 0%, #c7d2fe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
            }}>
              🎓
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.1 }}>
                Learner
              </span>
              <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 600, lineHeight: 1 }}>
                ● Active
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Tier 1 Curriculum Jurisdiction Selector Modal */}
      {isSelectorOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(4px)',
          padding: '16px',
        }} onClick={() => setIsSelectorOpen(false)}>
          <div style={{
            width: '100%',
            maxWidth: '560px',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 20px 40px -8px rgba(15, 23, 42, 0.16)',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden',
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              padding: '24px 28px 16px',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Select Curriculum System
                </h3>
                <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Tier 1 countries & verified official education authorities
                </p>
              </div>
              <button
                onClick={() => setIsSelectorOpen(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-subtle)',
                  background: '#f8fafc',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748b',
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '16px 24px', maxHeight: '420px', overflowY: 'auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {TIER1_OPTIONS.map((opt, i) => {
                  const isSelected = opt.jurisdictionSlug === selectedContext.jurisdictionSlug;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 18px',
                        borderRadius: '16px',
                        border: isSelected ? '2px solid #4f46e5' : '1px solid #e2e8f0',
                        backgroundColor: isSelected ? '#f5f7ff' : '#ffffff',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span style={{ fontSize: '1.8rem' }}>{opt.flag}</span>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a' }}>
                              {opt.jurisdictionName}
                            </span>
                            <span style={{
                              fontSize: '0.75rem',
                              padding: '2px 8px',
                              borderRadius: '6px',
                              background: '#ecfdf5',
                              color: '#065f46',
                              fontWeight: 700,
                            }}>
                              {opt.gradeLabel}
                            </span>
                          </div>
                          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                            {opt.countryName} • Framework: {opt.standardCode}
                          </span>
                        </div>
                      </div>
                      {isSelected ? (
                        <span style={{ color: '#4f46e5', fontWeight: 800, fontSize: '1.2rem' }}>✓</span>
                      ) : (
                        <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Select →</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{
              padding: '14px 24px',
              backgroundColor: '#f8fafc',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.78rem',
              color: '#64748b',
              textAlign: 'center',
            }}>
              🔒 Verified against official state education standards (CDE, TEKS, DfE, Ontario MoE, ACARA, NZC)
            </div>
          </div>
        </div>
      )}

      {/* Embedded Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
