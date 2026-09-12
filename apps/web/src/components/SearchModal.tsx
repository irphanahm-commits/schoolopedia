'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TIER1_JURISDICTIONS, LESSONS_CATALOGUE, STANDARD_COURSES } from '@/lib/curriculum-data';

export interface SearchEntry {
  id: string;
  category: 'jurisdiction' | 'lesson' | 'course' | 'career' | 'institution';
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  url: string;
  keywords: string;
  thumbnailUrl?: string;
}

const CAREERS_INDEX = [
  {
    id: 'career_swe',
    title: 'Software Engineer & Systems Architect',
    subtitle: 'Technology & AI • Linear Algebra, Graph Theory & Algorithms',
    url: '/guidance',
    keywords: 'software developer coding python algorithms engineering computer science ai',
  },
  {
    id: 'career_aero',
    title: 'Aerospace & Guidance Systems Engineer',
    subtitle: 'Space & Defense • Differential Equations & Orbital Mechanics',
    url: '/guidance',
    keywords: 'aerospace engineer rockets nasa space mechanics physics mathematics',
  },
  {
    id: 'career_bio',
    title: 'Biomedical Engineer & Genomicist',
    subtitle: 'Healthcare & Biotech • Chemical Kinetics, Genetics & Cell Biology',
    url: '/guidance',
    keywords: 'biomedical medicine genetics dna biology doctor healthcare biotech',
  },
  {
    id: 'career_data',
    title: 'Data Scientist & Quantitative Analyst',
    subtitle: 'Finance & Analytics • Probability, Inferential Statistics & Calculus',
    url: '/guidance',
    keywords: 'data scientist quant finance statistics machine learning analytics',
  },
];

const INSTITUTIONS_INDEX = [
  {
    id: 'inst_berkeley',
    title: 'University of California, Berkeley',
    subtitle: 'Berkeley, California, USA • WASC Accredited • #1 Public University',
    url: '/explore',
    keywords: 'uc berkeley cal california engineering eecs public research university',
  },
  {
    id: 'inst_oxford',
    title: 'University of Oxford',
    subtitle: 'Oxford, United Kingdom • QAA Accredited • World #1 Ranking',
    url: '/explore',
    keywords: 'oxford university england uk britain oxford collegate',
  },
  {
    id: 'inst_toronto',
    title: 'University of Toronto',
    subtitle: 'Toronto, Ontario, Canada • PEQAB Accredited • Canada #1 University',
    url: '/explore',
    keywords: 'toronto u of t canada ontario engineering rotman medicine',
  },
  {
    id: 'inst_stanford',
    title: 'Stanford University',
    subtitle: 'Stanford, California, USA • WASC Accredited • Silicon Valley Pioneer',
    url: '/explore',
    keywords: 'stanford california silicon valley computer science ai entrepreneurship',
  },
  {
    id: 'inst_sydney',
    title: 'University of Sydney',
    subtitle: 'Sydney, NSW, Australia • TEQSA Accredited • Group of Eight (Go8)',
    url: '/explore',
    keywords: 'sydney usyd australia nsw new south wales go8 oceania',
  },
  {
    id: 'inst_auckland',
    title: 'University of Auckland',
    subtitle: 'Auckland, New Zealand • NZQA Accredited • New Zealand #1 Ranking',
    url: '/explore',
    keywords: 'auckland uoaf new zealand nz maori oceania',
  },
  {
    id: 'inst_imperial',
    title: 'Imperial College London',
    subtitle: 'London, United Kingdom • QAA Accredited • Global STEM Leader',
    url: '/explore',
    keywords: 'imperial london uk britain engineering physics chemistry computing',
  },
  {
    id: 'inst_cambridge',
    title: 'University of Cambridge',
    subtitle: 'Cambridge, United Kingdom • QAA Accredited • World #2 Ranking',
    url: '/explore',
    keywords: 'cambridge university uk britain step tmua tripos mathematics natural sciences',
  },
  {
    id: 'inst_qe_barnet',
    title: "Queen Elizabeth's School, Barnet",
    subtitle: 'Barnet, Greater London, UK • Ofsted Outstanding • #1 State Grammar School',
    url: '/explore',
    keywords: 'qe barnet queen elizabeth grammar school 11-plus 11+ selective boys london state',
  },
  {
    id: 'inst_henrietta_barnett',
    title: 'The Henrietta Barnett School',
    subtitle: 'Hampstead Garden Suburb, London, UK • Ofsted Outstanding • Top State Girls Grammar',
    url: '/explore',
    keywords: 'henrietta barnett hbs grammar school 11-plus 11+ girls selective london state',
  },
  {
    id: 'inst_wilsons',
    title: "Wilson's School",
    subtitle: 'Wallington, Sutton, UK • Ofsted Outstanding • Sunday Times School of the Decade',
    url: '/explore',
    keywords: 'wilsons school sutton wallington grammar school 11-plus 11+ boys selective state',
  },
  {
    id: 'inst_brampton_manor',
    title: 'Brampton Manor Academy & Sixth Form',
    subtitle: 'Newham, East London, UK • Ofsted Outstanding • Social Mobility Oxbridge Leader',
    url: '/explore',
    keywords: 'brampton manor academy sixth form newham east london oxbridge state a-levels',
  },
  {
    id: 'inst_harris_westminster',
    title: 'Harris Westminster Sixth Form',
    subtitle: 'Westminster, Central London, UK • Ofsted Outstanding • State Sixth Form',
    url: '/explore',
    keywords: 'harris westminster sixth form hsfw london state a-levels',
  },
  {
    id: 'inst_lae_stratford',
    title: 'London Academy of Excellence (LAE Stratford)',
    subtitle: 'Stratford, London, UK • Ofsted Outstanding • Premier State Sixth Form',
    url: '/explore',
    keywords: 'lae stratford london academy of excellence state sixth form a-levels',
  },
  {
    id: 'inst_westminster_school',
    title: 'Westminster School',
    subtitle: 'Westminster, London, UK • ISI Excellent • World-Leading Independent School',
    url: '/explore',
    keywords: 'westminster school public independent boarding boys sixth form london',
  },
  {
    id: 'inst_eton',
    title: 'Eton College',
    subtitle: 'Windsor, Berkshire, UK • ISI Excellent • Historic Public School (Founded 1440)',
    url: '/explore',
    keywords: 'eton college public school boarding boys windsor berkshire',
  },
  {
    id: 'inst_st_pauls',
    title: "St Paul's School",
    subtitle: 'Barnes, London, UK • ISI Excellent • Historic Independent Day School',
    url: '/explore',
    keywords: 'st pauls school london barnes independent day boys',
  },
  {
    id: 'inst_jordanhill',
    title: 'Jordanhill School',
    subtitle: 'Glasgow, Scotland, UK • Education Scotland Excellent • #1 Scottish State School',
    url: '/explore',
    keywords: 'jordanhill school glasgow scotland state highers cfe national 5',
  },
  {
    id: 'inst_waterloo',
    title: 'University of Waterloo',
    subtitle: 'Waterloo, Ontario, Canada • PEQAB Accredited • Co-op Technology Hub',
    url: '/explore',
    keywords: 'waterloo canada ontario coop tech math computer science',
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Compile Unified In-Memory Index
  const searchIndex: SearchEntry[] = useMemo(() => {
    const entries: SearchEntry[] = [];

    // 1. Jurisdictions (78 total)
    for (const j of TIER1_JURISDICTIONS) {
      entries.push({
        id: `jur_${j.countryCode}_${j.slug}`,
        category: 'jurisdiction',
        title: `${j.name}, ${j.countryName}`,
        subtitle: `Official Standard: ${j.framework} • ${j.authority}`,
        badge: `${j.flag} ${j.countryCode.toUpperCase()}`,
        badgeColor: '#4f46e5',
        url: `/learn/${j.countryCode}/${j.slug}`,
        keywords: `${j.name} ${j.countryName} ${j.authority} ${j.framework} ${j.countryCode} curriculum standards syllabus ${j.slug}`,
      });
    }

    // 2. Lessons (11 catalogued with verified content)
    for (const l of Object.values(LESSONS_CATALOGUE)) {
      const primaryVideo = l.videos?.[0];
      entries.push({
        id: `les_${l.slug}`,
        category: 'lesson',
        title: l.title,
        subtitle: `${l.gradeName} • ${l.subjectName} • Standard: ${l.standardCode}`,
        badge: 'Interactive Lesson',
        badgeColor: '#059669',
        url: `/learn/${l.countryCode}/${l.jurisdictionSlug}/${l.gradeSlug}/${l.subjectSlug}/${l.slug}`,
        keywords: `${l.title} ${l.subjectName} ${l.gradeName} ${l.standardCode} ${l.summary} ${l.whyItMatters} ${l.slug}`,
        thumbnailUrl: primaryVideo ? `https://img.youtube.com/vi/${primaryVideo.youtubeVideoId}/hqdefault.jpg` : undefined,
      });
    }

    // 3. Standard Courses
    for (const c of STANDARD_COURSES) {
      entries.push({
        id: `crs_${c.slug}`,
        category: 'course',
        title: `${c.title} (${c.subject})`,
        subtitle: `${c.grade} • ${c.lessonCount} Lessons • Standard: ${c.standardCode}`,
        badge: 'Course Syllabus',
        badgeColor: '#0284c7',
        url: `/learn/us/california/${c.gradeSlug}/${c.subjectSlug}`,
        keywords: `${c.title} ${c.subject} ${c.grade} ${c.standardCode} course syllabus`,
      });
    }

    // 4. Careers
    for (const car of CAREERS_INDEX) {
      entries.push({
        id: car.id,
        category: 'career',
        title: car.title,
        subtitle: car.subtitle,
        badge: 'Career Pathway',
        badgeColor: '#d97706',
        url: car.url,
        keywords: `${car.title} ${car.subtitle} ${car.keywords}`,
      });
    }

    // 5. Institutions
    for (const inst of INSTITUTIONS_INDEX) {
      entries.push({
        id: inst.id,
        category: 'institution',
        title: inst.title,
        subtitle: inst.subtitle,
        badge: 'University',
        badgeColor: '#7c3aed',
        url: inst.url,
        keywords: `${inst.title} ${inst.subtitle} ${inst.keywords}`,
      });
    }

    return entries;
  }, []);

  // Filter results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const terms = q.split(/\s+/).filter(Boolean);
    return searchIndex
      .filter((item) => {
        const text = `${item.title} ${item.subtitle} ${item.keywords}`.toLowerCase();
        return terms.every((term) => text.includes(term));
      })
      .slice(0, 10);
  }, [query, searchIndex]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      } else if (e.key === 'ArrowDown' && results.length > 0) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp' && results.length > 0) {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        const selected = results[selectedIndex] || results[0];
        if (selected) {
          router.push(selected.url);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, results, selectedIndex, router]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const quickPills = [
    { label: 'Quadratic Equations', term: 'quadratic' },
    { label: 'Fractions & Decimals', term: 'fractions' },
    { label: 'Canada (13)', term: 'canada' },
    { label: 'United Kingdom', term: 'united kingdom' },
    { label: 'Australia', term: 'australia' },
    { label: 'Biology', term: 'biology' },
    { label: 'Python CS', term: 'python' },
    { label: 'Software Engineer', term: 'software' },
    { label: 'Oxford', term: 'oxford' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(15, 23, 42, 0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '6vh',
        paddingLeft: '12px',
        paddingRight: '12px',
        boxSizing: 'border-box',
      }}
      onClick={onClose}
      id="search-modal-backdrop"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.08)',
          overflow: 'hidden',
          animation: 'fadeIn 0.15s ease-out',
          boxSizing: 'border-box',
        }}
        onClick={(e) => e.stopPropagation()}
        id="search-modal-container"
      >
        {/* Search Input Field */}
        <div
          style={{
            padding: '14px 16px',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#ffffff',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search curricula, lessons, universities..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            id="search-modal-input"
            style={{
              flex: 1,
              minWidth: 0,
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#0f172a',
              fontSize: '1rem',
              fontWeight: 600,
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                fontSize: '0.75rem',
                flexShrink: 0,
              }}
            >
              ✕
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              padding: '6px 10px',
              fontSize: '0.76rem',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              color: '#64748b',
              fontWeight: 700,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            ESC
          </button>
        </div>

        {/* Quick Recommendation Pills when query is empty */}
        {!query && (
          <div style={{ padding: '20px 24px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8', marginBottom: '12px' }}>
              Popular Searches Across 78 Jurisdictions
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {quickPills.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(p.term)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#f8fafc',
                    color: '#334155',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#eef2ff';
                    e.currentTarget.style.borderColor = '#c7d2fe';
                    e.currentTarget.style.color = '#4338ca';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.color = '#334155';
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div style={{ marginTop: '24px', padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.4rem' }}>💡</span>
              <span style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5 }}>
                Type any country (e.g. <strong>Canada</strong>, <strong>Australia</strong>), state/province (e.g. <strong>Ontario</strong>, <strong>Texas</strong>), or subject to jump straight to official curriculum syllabi.
              </span>
            </div>
          </div>
        )}

        {/* Results Body */}
        {query && (
          <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '12px 16px' }}>
            {results.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '36px 20px', color: '#64748b' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
                <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>No matches found for &quot;{query}&quot;</div>
                <div style={{ fontSize: '0.86rem' }}>Try searching by state, subject, standard code, university, or career name.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {results.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <Link
                      key={item.id}
                      href={item.url}
                      onClick={onClose}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '14px',
                        backgroundColor: isSelected ? '#f5f7ff' : '#ffffff',
                        border: isSelected ? '1.5px solid #4f46e5' : '1px solid transparent',
                        textDecoration: 'none',
                        transition: 'all 0.1s ease',
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      {item.thumbnailUrl && (
                        <div style={{ position: 'relative', width: '64px', height: '40px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, marginRight: '14px', marginTop: '2px' }}>
                          <img
                            src={item.thumbnailUrl}
                            alt=""
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '0.7rem' }}>
                            ▶
                          </div>
                        </div>
                      )}
                      <div style={{ flex: 1, paddingRight: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.98rem' }}>
                            {item.title}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.4 }}>
                          {item.subtitle}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '8px',
                          backgroundColor: `${item.badgeColor}15`,
                          color: item.badgeColor,
                          whiteSpace: 'nowrap',
                          marginTop: '2px',
                        }}
                      >
                        {item.badge}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Modal Footer with Shortcuts */}
        <div
          style={{
            padding: '12px 24px',
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: '#94a3b8',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span><kbd style={{ padding: '2px 5px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px' }}>↑</kbd> <kbd style={{ padding: '2px 5px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px' }}>↓</kbd> to navigate</span>
            <span><kbd style={{ padding: '2px 5px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px' }}>↵</kbd> to select</span>
            <span><kbd style={{ padding: '2px 5px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px' }}>esc</kbd> to close</span>
          </div>
          <span style={{ fontWeight: 600, color: '#4f46e5' }}>Schoolopedia Universal Index</span>
        </div>
      </div>
    </div>
  );
}
