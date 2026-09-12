'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TIER1_COUNTRIES,
  TIER1_JURISDICTIONS,
  STANDARD_COURSES,
  getJurisdictionsByCountry,
} from '@/lib/curriculum-data';
import { SearchModal } from '@/components/SearchModal';
import { useVideoPlayer, VideoModalItem } from '@/lib/VideoContext';

const COURSE_SAMPLE_VIDEOS: Record<string, string> = {
  'fractions-decimals': 'f15zA0PhSek',
  'earth-systems': 'f15zA0PhSek',
  'linear-equations': 'Qyd_v3DGzTM',
  'quadratic-equations': '3ayhvAI3IeY',
  'photosynthesis-plants': 'kqtD5dpn9C8',
  'chemical-bonds': '8IlzKri08kk',
  'newtons-laws': 'kKKM8Y-u7ds',
  'cell-biology': '0RRVV4Diomg',
  'python-programming': 'kqtD5dpn9C8',
  'constitutional-civics': '0bf3CwYCxXw',
  'persuasive-writing': 'HAnw168huqA',
};

const FEATURED_VIDEOS: VideoModalItem[] = [
  {
    youtubeVideoId: 'Qyd_v3DGzTM',
    title: 'Solving Linear Equations (Balance Method & Inverses)',
    channelTitle: 'Math Antics',
    durationFormatted: '09:34',
    gradeLabel: 'Grade 8 • Middle',
    subjectLabel: 'Mathematics',
    standardCode: 'CCSS.MATH.8.EE.C.7 / TEKS 8.8.C / AC9M8A03',
    lessonUrl: '/learn/us/california/grade-8/mathematics/linear-equations',
    summary: 'Master isolating unknown variables using inverse operations, combining like terms, and balanced equation properties.',
  },
  {
    youtubeVideoId: 'f15zA0PhSek',
    title: 'Visualizing Equivalent Fractions & Decimals on Number Lines',
    channelTitle: 'Khan Academy',
    durationFormatted: '08:05',
    gradeLabel: 'Grade 4 • Elementary',
    subjectLabel: 'Mathematics',
    standardCode: 'CCSS.MATH.4.NF.A.1',
    lessonUrl: '/learn/us/california/grade-4/mathematics/fractions-decimals',
    summary: 'Understand fraction equivalence visually using area models and coordinate distances from zero on real number lines.',
  },
  {
    youtubeVideoId: '3ayhvAI3IeY',
    title: 'Solving & Factoring Quadratic Equations',
    channelTitle: 'Brian McLogan',
    durationFormatted: '12:30',
    gradeLabel: 'Grade 9 • High School',
    subjectLabel: 'Mathematics',
    standardCode: 'CCSS.MATH.HSA.REI.B.4',
    lessonUrl: '/learn/us/california/grade-9/mathematics/quadratic-equations',
    summary: 'Step-by-step factorization, zero-product property, discriminant checks, and real-world trajectory modeling.',
  },
  {
    youtubeVideoId: 'kqtD5dpn9C8',
    title: 'Photosynthesis, Chloroplasts & Chemical Light Reactions',
    channelTitle: 'Cognito',
    durationFormatted: '09:18',
    gradeLabel: 'Grade 7 • Middle',
    subjectLabel: 'Life Science',
    standardCode: 'NGSS.MS-LS1-6',
    lessonUrl: '/learn/us/california/grade-7/science/photosynthesis-plants',
    summary: 'Explore chemical conversion of light energy, water, and carbon dioxide into glucose and oxygen in plant cells.',
  },
  {
    youtubeVideoId: 'kKKM8Y-u7ds',
    title: "Newton's Three Laws of Motion, Friction & Force Vectors",
    channelTitle: 'CrashCourse Physics',
    durationFormatted: '10:45',
    gradeLabel: 'Grade 11 • High School',
    subjectLabel: 'Physics',
    standardCode: 'NGSS.HS-PS2-1',
    lessonUrl: '/learn/nz/national/grade-11/science/newtons-laws',
    summary: 'Analyze inertia, F = ma net vector force calculations, and action-reaction pairs in dynamic mechanics.',
  },
  {
    youtubeVideoId: '8IlzKri08kk',
    title: 'Chemical Bonds: Ionic, Covalent & Metallic Structures',
    channelTitle: 'Tyler DeWitt',
    durationFormatted: '11:12',
    gradeLabel: 'Grade 10 • High School',
    subjectLabel: 'Chemistry',
    standardCode: 'NGSS.HS-PS1-1',
    lessonUrl: '/learn/gb/england/grade-10/science/chemical-bonds',
    summary: 'Valence electron sharing and electrostatic transfers explaining molecular geometry and lattice conductivity.',
  },
];

export default function HomePage() {
  const [activeCountryCode, setActiveCountryCode] = useState<string>('us');
  const [activeGradeBand, setActiveGradeBand] = useState<'all' | 'elementary' | 'middle' | 'high'>('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { playVideo } = useVideoPlayer();

  // Active country jurisdictions
  const activeJurisdictions = getJurisdictionsByCountry(activeCountryCode);
  const activeCountry = TIER1_COUNTRIES.find(c => c.code === activeCountryCode) || TIER1_COUNTRIES[0];

  // Grade band filtered courses
  const filteredCourses = STANDARD_COURSES.filter(c => {
    if (activeGradeBand === 'all') return true;
    return c.gradeBand === activeGradeBand;
  });

  const searchPills = [
    { label: 'Quadratic Equations', term: 'quadratic' },
    { label: 'Fractions & Decimals', term: 'fractions' },
    { label: 'Canada (13 Provinces)', term: 'canada' },
    { label: 'United Kingdom (4 Nations)', term: 'united kingdom' },
    { label: 'Australia (8 States)', term: 'australia' },
    { label: 'Cell Biology', term: 'biology' },
    { label: 'Newton\'s Laws', term: 'newton' },
    { label: 'Python CS', term: 'python' },
    { label: 'Oxford University', term: 'oxford' },
    { label: 'Software Engineer', term: 'software' },
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Hero Section */}
      <section
        style={{
          padding: '64px 24px 48px',
          maxWidth: '1240px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Authority Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '9999px',
            backgroundColor: '#EEF2FF',
            border: '1px solid #C7D2FE',
            marginBottom: '20px',
            boxShadow: '0 2px 6px rgba(79, 70, 229, 0.08)',
          }}
        >
          <span style={{ fontSize: '1.05rem' }}>🎓</span>
          <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#4338CA' }}>
            The Curriculum-Aware Education Encyclopedia
          </span>
          <span style={{ color: '#CBD5E1' }}>•</span>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#059669' }}>
            78 Tier 1 Authorities
          </span>
          <span style={{ color: '#CBD5E1' }}>•</span>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0284C7' }}>
            100% Free Forever
          </span>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            fontWeight: 850,
            letterSpacing: '-0.04em',
            color: '#0F172A',
            lineHeight: 1.15,
            maxWidth: '920px',
            margin: '0 0 20px 0',
          }}
        >
          The Open Encyclopedia for Official School Curricula
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#475569',
            maxWidth: '720px',
            lineHeight: 1.6,
            margin: '0 0 36px 0',
          }}
        >
          Discover what to learn, learn through curated video explanations, inspect step-by-step proofs, practice interactive drills, and achieve verified mastery across 5 Tier-1 education systems.
        </p>

        {/* Global Search Bar Trigger */}
        <div
          onClick={() => setIsSearchOpen(true)}
          id="home-search-trigger-btn"
          style={{
            width: '100%',
            maxWidth: '680px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #CBD5E1',
            borderRadius: '9999px',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            boxShadow: '0 12px 32px -4px rgba(15, 23, 42, 0.08)',
            transition: 'all 0.2s ease',
            marginBottom: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#64748B' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span style={{ fontSize: '1.02rem', color: '#64748B', fontWeight: 500 }}>
              Search 78 jurisdictions, lessons, topics, careers, universities...
            </span>
          </div>
          <kbd
            style={{
              fontSize: '0.78rem',
              padding: '4px 10px',
              borderRadius: '8px',
              backgroundColor: '#F1F5F9',
              color: '#475569',
              border: '1px solid #E2E8F0',
              fontWeight: 700,
            }}
          >
            ⌘K
          </kbd>
        </div>

        {/* Search Suggestion Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '780px', marginBottom: '40px' }}>
          {searchPills.map((pill, idx) => (
            <button
              key={idx}
              onClick={() => setIsSearchOpen(true)}
              style={{
                padding: '4px 12px',
                borderRadius: '9999px',
                border: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                color: '#475569',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EEF2FF';
                e.currentTarget.style.color = '#4338CA';
                e.currentTarget.style.borderColor = '#C7D2FE';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Hero Video Masterclass Spotlight Card */}
        <div
          onClick={() => playVideo(FEATURED_VIDEOS[0])}
          className="hero-video-spotlight-card"
          id="hero-video-spotlight-card"
        >
          {/* Thumbnail Preview with Glowing Play Badge */}
          <div className="hero-video-thumb-container">
            <img
              src="https://img.youtube.com/vi/Qyd_v3DGzTM/hqdefault.jpg"
              alt="Linear Equations Masterclass"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(15, 23, 42, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#4F46E5',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.6)',
                }}
              >
                ▶
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '6px',
                right: '8px',
                padding: '2px 7px',
                borderRadius: '5px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 700,
              }}
            >
              09:34
            </div>
          </div>

          {/* Text Information */}
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', backgroundColor: '#38BDF8', color: '#0369A1' }}>
                Grade 8 • Middle School
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#C7D2FE' }}>
                🎬 Featured Video Masterclass
              </span>
              <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>
                ● 100% Curated
              </span>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '2px', lineHeight: 1.3 }}>
              Solving Linear Equations (Balance Method & Inverses)
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
              By <strong>Math Antics</strong> • CCSS.MATH.8.EE.C.7 / TEKS 8.8.C / AC9M8A03
            </div>
          </div>

          {/* Quick Play CTA Pill */}
          <div
            className="hero-spotlight-cta-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Watch Preview</span>
            <span>▶</span>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div
          className="metrics-strip-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            width: '100%',
            maxWidth: '1040px',
            padding: '20px 28px',
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
          }}
        >
          <div className="metrics-strip-item" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 850, color: '#4F46E5', letterSpacing: '-0.03em' }}>78</div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>Education Jurisdictions</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>USA, UK, CA, AU, NZ</div>
          </div>
          <div className="metrics-strip-item" style={{ textAlign: 'center', borderLeft: '1px solid #F1F5F9' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 850, color: '#059669', letterSpacing: '-0.03em' }}>K–12</div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>Full Grade Spectrum</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Elementary, Middle, High</div>
          </div>
          <div className="metrics-strip-item" style={{ textAlign: 'center', borderLeft: '1px solid #F1F5F9' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 850, color: '#0284C7', letterSpacing: '-0.03em' }}>5 Core</div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>Academic Disciplines</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Math, Sci, ELA, Civics, CS</div>
          </div>
          <div className="metrics-strip-item" style={{ textAlign: 'center', borderLeft: '1px solid #F1F5F9' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 850, color: '#D97706', letterSpacing: '-0.03em' }}>100% Free</div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>Public Knowledge Good</div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>No Ads • No Paywalls</div>
          </div>
        </div>
      </section>

      {/* Global Tier 1 Country Hub */}
      <section style={{ maxWidth: '1240px', margin: '0 auto 64px', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4F46E5' }}>
                Global Standards Hub
              </span>
              <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: '#ECFDF5', color: '#047857', fontWeight: 700 }}>
                5 Nations Verified
              </span>
            </div>
            <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', margin: '4px 0 0' }}>
              Explore By Official Education Authority
            </h2>
          </div>
          <Link
            href="/learn"
            style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#4F46E5',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            View all 78 jurisdictions directory →
          </Link>
        </div>

        {/* Country Selector Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          {TIER1_COUNTRIES.map((c) => {
            const isSelected = c.code === activeCountryCode;
            return (
              <button
                key={c.code}
                onClick={() => setActiveCountryCode(c.code)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  border: isSelected ? '2px solid #4F46E5' : '1px solid #E2E8F0',
                  backgroundColor: isSelected ? '#EEF2FF' : '#FFFFFF',
                  color: isSelected ? '#4338CA' : '#334155',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(79, 70, 229, 0.12)' : '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{c.flag}</span>
                <span>{c.name}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    backgroundColor: isSelected ? '#4F46E5' : '#F1F5F9',
                    color: isSelected ? '#FFFFFF' : '#64748B',
                  }}
                >
                  {c.jurisdictionCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Country Jurisdictions Grid */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #E2E8F0',
            padding: '28px',
            boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.6rem' }}>{activeCountry.flag}</span>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  {activeCountry.name} Education Jurisdictions
                </h3>
                <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  {activeJurisdictions.length} official state, national, or provincial departments mapped
                </span>
              </div>
            </div>
            <Link
              href={`/learn/${activeCountry.code}/${activeCountry.defaultJurisdiction}`}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                color: '#4F46E5',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Browse Default ({activeCountry.defaultJurisdiction.toUpperCase()}) →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '12px',
              maxHeight: '280px',
              overflowY: 'auto',
              paddingRight: '6px',
            }}
          >
            {activeJurisdictions.map((j) => (
              <Link
                key={j.slug}
                href={`/learn/${j.countryCode}/${j.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid #F1F5F9',
                  backgroundColor: '#F8FAFC',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EEF2FF';
                  e.currentTarget.style.borderColor = '#C7D2FE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                  e.currentTarget.style.borderColor = '#F1F5F9';
                }}
              >
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>{j.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '170px' }}>
                    {j.authority}
                  </div>
                </div>
                <span style={{ color: '#4F46E5', fontWeight: 800, fontSize: '0.9rem' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* K-12 Grade Spectrum Course Explorer */}
      <section style={{ maxWidth: '1240px', margin: '0 auto 64px', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#059669' }}>
                K–12 Curricular Catalog
              </span>
              <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: '#FEF3C7', color: '#B45309', fontWeight: 700 }}>
                Elementary • Middle • High School
              </span>
            </div>
            <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', margin: '4px 0 0' }}>
              Universal Core Syllabi & Lessons
            </h2>
          </div>

          {/* Grade Band Filter Buttons */}
          <div
            className="horizontal-scroll-row"
            style={{
              gap: '6px',
              backgroundColor: '#FFFFFF',
              padding: '4px',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              maxWidth: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            {(['all', 'elementary', 'middle', 'high'] as const).map((band) => (
              <button
                key={band}
                onClick={() => setActiveGradeBand(band)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: activeGradeBand === band ? '#4F46E5' : 'transparent',
                  color: activeGradeBand === band ? '#FFFFFF' : '#64748B',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'all 0.15s ease',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {band === 'all' ? 'All Grades' : `${band} School`}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
          }}
        >
          {filteredCourses.map((course) => {
            const bandBadges: Record<'elementary' | 'middle-school' | 'high-school', { bg: string; text: string; label: string }> = {
              elementary: { bg: '#FEF3C7', text: '#92400E', label: 'Elementary (Grades 1–5)' },
              'middle-school': { bg: '#E0F2FE', text: '#0369A1', label: 'Middle School (Grades 6–8)' },
              'high-school': { bg: '#F3E8FF', text: '#7E22CE', label: 'High School (Grades 9–12)' },
            };
            const currentBadge = bandBadges[course.gradeBand];

            return (
              <div
                key={course.slug}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1.5px solid #E2E8F0',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  {COURSE_SAMPLE_VIDEOS[course.sampleLessonSlug] && (
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        paddingBottom: '52%',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        marginBottom: '14px',
                        backgroundColor: '#0F172A',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${COURSE_SAMPLE_VIDEOS[course.sampleLessonSlug]}/hqdefault.jpg`}
                        alt={course.title}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, transparent 60%)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: '8px',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(15, 23, 42, 0.8)',
                          backdropFilter: 'blur(4px)',
                          color: '#FFFFFF',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span>🎬</span>
                        <span>Video Lessons</span>
                      </div>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        backgroundColor: currentBadge.bg,
                        color: currentBadge.text,
                      }}
                    >
                      {currentBadge.label}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>
                      {course.lessonCount} Lessons
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>
                    {course.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginBottom: '16px' }}>
                    {course.subject} • Standard: {course.standardCode}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0F172A' }}>
                    {course.grade}
                  </span>
                  <Link
                    href={`/learn/us/california/${course.gradeSlug}/${course.subjectSlug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#4F46E5',
                      textDecoration: 'none',
                    }}
                  >
                    Open Syllabus →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Curated Video Masterclasses & Visual Explanations Hub */}
      <section style={{ maxWidth: '1240px', margin: '0 auto 64px', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4F46E5' }}>
                Visual Learning Hub
              </span>
              <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: '#FEF3C7', color: '#92400E', fontWeight: 700 }}>
                ★ Curated Video Masterclasses
              </span>
            </div>
            <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', margin: '4px 0 0' }}>
              Curated Video Masterclasses & Visual Explanations
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#64748B', margin: '6px 0 0', maxWidth: '720px' }}>
              Hand-selected visual explanations from world-class educators including Khan Academy, Math Antics, CrashCourse, and Cognito — paired with real-time interactive practice.
            </p>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="responsive-grid-cards">
          {FEATURED_VIDEOS.map((v) => (
            <div
              key={v.youtubeVideoId}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1.5px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Thumbnail with Play Overlay */}
              <div
                onClick={() => playVideo(v)}
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  backgroundColor: '#0F172A',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={`https://img.youtube.com/vi/${v.youtubeVideoId}/hqdefault.jpg`}
                  alt={v.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(79, 70, 229, 0.92)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.05rem',
                      boxShadow: '0 6px 20px rgba(79, 70, 229, 0.5)',
                    }}
                  >
                    ▶
                  </div>
                </div>

                {/* Duration Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '12px',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: '#FFFFFF',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                  }}
                >
                  ⏱ {v.durationFormatted}
                </div>

                {/* Channel Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '12px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(4px)',
                    color: '#38BDF8',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                  }}
                >
                  {v.channelTitle}
                </div>
              </div>

              {/* Information Body */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', backgroundColor: '#EEF2FF', color: '#4338CA' }}>
                      {v.gradeLabel}
                    </span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', backgroundColor: '#F1F5F9', color: '#475569' }}>
                      {v.subjectLabel}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'monospace' }}>
                      {v.standardCode}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1.35 }}>
                    {v.title}
                  </h3>

                  <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 16px 0' }}>
                    {v.summary}
                  </p>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '8px', paddingTop: '14px', borderTop: '1px solid #F1F5F9' }}>
                  <button
                    onClick={() => playVideo(v)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      backgroundColor: '#EEF2FF',
                      border: '1px solid #C7D2FE',
                      color: '#4338CA',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                    }}
                  >
                    <span>▶ Preview Video</span>
                  </button>
                  <Link
                    href={v.lessonUrl}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      backgroundColor: '#4F46E5',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      textDecoration: 'none',
                      boxShadow: '0 2px 8px rgba(79, 70, 229, 0.25)',
                    }}
                  >
                    <span>Practice & Quiz →</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Working Interactive Lessons Spotlight */}
      <section style={{ maxWidth: '1240px', margin: '0 auto 64px', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4F46E5' }}>
            Interactive Practice & Mastery
          </span>
          <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: '#ECFDF5', color: '#047857', fontWeight: 700 }}>
            Curated YouTube Embeds & Quizzes
          </span>
        </div>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', margin: '0 0 24px 0' }}>
          Featured Master Lessons
        </h2>

        <div className="responsive-grid-cards">
          {/* Elementary Lesson Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1.5px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              onClick={() => playVideo(FEATURED_VIDEOS[1])}
              style={{ position: 'relative', width: '100%', paddingBottom: '52%', backgroundColor: '#0F172A', cursor: 'pointer' }}
            >
              <img
                src="https://img.youtube.com/vi/f15zA0PhSek/hqdefault.jpg"
                alt="Fractions & Decimals Lesson"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(79, 70, 229, 0.9)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ▶
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '8px', right: '10px', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff', fontSize: '0.72rem', fontWeight: 700 }}>
                08:05
              </div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#FEF3C7', color: '#92400E' }}>
                    Grade 4 • Elementary
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#EEF2FF', color: '#4338CA' }}>
                    Mathematics
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Equivalent Fractions, Decimals & Number Lines
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginBottom: '18px' }}>
                  Visual fraction models, multiplying by n/n form of 1, decimal place values, and number line distances from zero.
                </p>
              </div>
              <Link
                href="/learn/us/california/grade-4/mathematics/fractions-decimals"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  backgroundColor: '#EEF2FF',
                  color: '#4338CA',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Start Elementary Lesson →
              </Link>
            </div>
          </div>

          {/* Middle School Lesson Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1.5px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              onClick={() => playVideo(FEATURED_VIDEOS[0])}
              style={{ position: 'relative', width: '100%', paddingBottom: '52%', backgroundColor: '#0F172A', cursor: 'pointer' }}
            >
              <img
                src="https://img.youtube.com/vi/Qyd_v3DGzTM/hqdefault.jpg"
                alt="Linear Equations Lesson"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(79, 70, 229, 0.9)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ▶
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '8px', right: '10px', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff', fontSize: '0.72rem', fontWeight: 700 }}>
                09:34
              </div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#E0F2FE', color: '#0369A1' }}>
                    Grade 8 • Middle School
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#EEF2FF', color: '#4338CA' }}>
                    Mathematics
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Solving Linear Equations in One Variable
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginBottom: '18px' }}>
                  Single, infinite, and zero solution equations using inverse operations, distributive property, and algebraic balance.
                </p>
              </div>
              <Link
                href="/learn/us/california/grade-8/mathematics/linear-equations"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  backgroundColor: '#EEF2FF',
                  color: '#4338CA',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Start Middle School Lesson →
              </Link>
            </div>
          </div>

          {/* High School Lesson Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1.5px solid #E2E8F0',
              overflow: 'hidden',
              boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              onClick={() => playVideo(FEATURED_VIDEOS[2])}
              style={{ position: 'relative', width: '100%', paddingBottom: '52%', backgroundColor: '#0F172A', cursor: 'pointer' }}
            >
              <img
                src="https://img.youtube.com/vi/3ayhvAI3IeY/hqdefault.jpg"
                alt="Quadratic Equations Lesson"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(79, 70, 229, 0.9)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ▶
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '8px', right: '10px', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff', fontSize: '0.72rem', fontWeight: 700 }}>
                12:30
              </div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#F3E8FF', color: '#7E22CE' }}>
                    Grade 9 • High School
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', backgroundColor: '#EEF2FF', color: '#4338CA' }}>
                    Mathematics
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Quadratic Equations, Factoring & Formula
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, marginBottom: '18px' }}>
                  Standard form ax² + bx + c = 0, discriminant b² - 4ac, zero-product property, and real-world trajectory modeling.
                </p>
              </div>
              <Link
                href="/learn/us/california/grade-9/mathematics/quadratic-equations"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  backgroundColor: '#4F46E5',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Start High School Lesson →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid: Guidance, Explore, Opportunities */}
      <section style={{ maxWidth: '1240px', margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', margin: '0 0 8px 0' }}>
            The Full Schoolopedia Ecosystem
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
            Beyond school curricula: empowering students to connect academic mastery with global universities and career pathways.
          </p>
        </div>

        <div className="responsive-grid-cards">
          {/* Pillar 1: Guidance */}
          <Link
            href="/guidance"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(79, 70, 229, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>🧭</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Career Pathways</h3>
              <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: '#FEF3C7', color: '#B45309', fontWeight: 700 }}>Salary Insights</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
              Explore how middle and high school math connects directly to high-growth professions like Software Architecture, Aerospace, and Genomic Science.
            </p>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4F46E5' }}>
              Explore Careers →
            </span>
          </Link>

          {/* Pillar 2: Explore */}
          <Link
            href="/explore"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(79, 70, 229, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>🏛️</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Higher Education</h3>
              <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: '#ECFDF5', color: '#047857', fontWeight: 700 }}>Global Directory</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
              Discover leading accredited universities across USA, UK, Canada, Australia, and New Zealand, including prerequisite courses and standout programs.
            </p>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4F46E5' }}>
              Explore Universities →
            </span>
          </Link>

          {/* Pillar 3: Opportunities */}
          <Link
            href="/opportunities"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(79, 70, 229, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>🌟</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>Opportunities Board</h3>
              <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: '#EEF2FF', color: '#4338CA', fontWeight: 700 }}>Scholarships & STEM</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5, marginBottom: '20px' }}>
              Verified academic scholarships, International Mathematical Olympiads, Science Competitions, and high-school research fellowships.
            </p>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4F46E5' }}>
              Browse Opportunities →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
