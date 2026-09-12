'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SearchModal } from '../components/SearchModal';

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div style={{ minHeight: '80vh', padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Hero Greeting Section */}
      <section style={{
        textAlign: 'center',
        padding: '56px 0 40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Welcoming Top Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--accent-primary-tint)',
          border: '1px solid var(--border-highlight)',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(79, 70, 229, 0.08)',
        }}>
          <span style={{ fontSize: '1rem' }}>🎓</span>
          <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
            Official Curriculum-Aware Encyclopedia
          </span>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#059669' }}>
            ₹0 Free Forever
          </span>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.035em',
          color: '#0f172a',
          lineHeight: 1.15,
          maxWidth: '840px',
          marginBottom: '20px',
        }}>
          What do you want to learn today?
        </h1>

        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '680px',
          lineHeight: 1.6,
          marginBottom: '36px',
        }}>
          Schoolopedia maps official school standards directly to curated video lessons, interactive practice, and verified mastery assessments.
        </p>

        {/* Large Rounded Search Trigger Input */}
        <div
          onClick={() => setIsSearchOpen(true)}
          id="hero-search-trigger"
          style={{
            width: '100%',
            maxWidth: '640px',
            backgroundColor: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: 'var(--radius-full)',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
            transition: 'all 0.25s ease',
            marginBottom: '56px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--text-muted)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span style={{ fontSize: '1.02rem', color: '#64748b' }}>
              Search subjects, grades, topics (e.g. Linear Equations, CCSS 8.EE.C.7)...
            </span>
          </div>
          <kbd style={{
            fontSize: '0.78rem',
            padding: '4px 10px',
            borderRadius: '8px',
            background: '#f1f5f9',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)',
            fontWeight: 700,
          }}>
            ⌘K
          </kbd>
        </div>
      </section>

      {/* Subject Category Tiles (StudentClass Style) */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
              Explore Curriculum Areas
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              Standardized pathways mapped to official education departments
            </p>
          </div>
          <span className="badge badge-curriculum">USA / California 2026–27</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}>
          {/* Mathematics Tile (Active) */}
          <Link href="/learn/us/california/grade-8/mathematics/linear-equations" className="category-tile" style={{ border: '2px solid var(--border-highlight)' }}>
            <div className="category-icon-box" style={{ background: '#eef2ff', color: '#4f46e5' }}>
              📐
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>Mathematics</h3>
                <span className="badge badge-verified" style={{ padding: '2px 8px', fontSize: '0.7rem' }}>Live</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Algebra, Geometry, Linear Equations, Functions & Statistics.
              </p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '12px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
              <span>Grade 8 Active Slice</span>
              <span>→</span>
            </div>
          </Link>

          {/* Science Tile */}
          <div className="category-tile" style={{ opacity: 0.9 }}>
            <div className="category-icon-box" style={{ background: '#e0f2fe', color: '#0284c7' }}>
              🔬
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>Science</h3>
                <span className="badge badge-cyan" style={{ padding: '2px 8px', fontSize: '0.7rem' }}>Next</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Physical Science, Chemistry, Living Earth & Systems.
              </p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '12px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              <span>NGSS Framework</span>
              <span>2026.2</span>
            </div>
          </div>

          {/* Language Arts */}
          <div className="category-tile" style={{ opacity: 0.9 }}>
            <div className="category-icon-box" style={{ background: '#ecfdf5', color: '#059669' }}>
              📚
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>Language Arts</h3>
                <span className="badge badge-verified" style={{ padding: '2px 8px', fontSize: '0.7rem', background: '#ecfdf5', color: '#047857' }}>Queue</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Critical Reading, Expository Writing, Vocabulary & Argument.
              </p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '12px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              <span>CCSS-ELA</span>
              <span>2026.2</span>
            </div>
          </div>

          {/* Social Studies */}
          <div className="category-tile" style={{ opacity: 0.9 }}>
            <div className="category-icon-box" style={{ background: '#fef3c7', color: '#d97706' }}>
              🌍
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>Social Science</h3>
                <span className="badge badge-amber" style={{ padding: '2px 8px', fontSize: '0.7rem' }}>Queue</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                US History, World Geography, Civics & Economics.
              </p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '12px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              <span>History-Social Science</span>
              <span>2026.2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course Card - StudentClass Premium UI Style */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{
          background: '#ffffff',
          border: '1.5px solid var(--border-highlight)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px',
          boxShadow: '0 12px 36px -4px rgba(79, 70, 229, 0.09), 0 2px 8px rgba(15, 23, 42, 0.04)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative subtle background corner glow */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}></div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <span className="badge badge-coral">🔥 ACTIVE CLASS</span>
              <span className="badge badge-curriculum">USA / California</span>
              <span className="badge badge-standard">CCSS.MATH.CONTENT.8.EE.C.7</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Solving Linear Equations in One Variable
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '24px' }}>
              Master multi-step equations with rational coefficients, distributive expansion, collecting like terms, and classifying whether equations have one solution, no solution, or infinitely many solutions.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '1.2rem' }}>🎬</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>2 Curated Videos</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Khan Academy & Math Antics</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '1.2rem' }}>✍️</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>3 Practice Problems</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Step-by-step guidance</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '1.2rem' }}>🏆</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>5-Question Quiz</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Server-evaluated mastery</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '1.2rem' }}>🏛️</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>Verified Source</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>California Dept. of Education</div>
                </div>
              </div>
            </div>

            <Link
              href="/learn/us/california/grade-8/mathematics/linear-equations"
              className="btn btn-primary"
              id="hero-start-lesson-btn"
              style={{ padding: '14px 28px', fontSize: '1.02rem', gap: '10px' }}
            >
              <span>Start Learning Lesson</span>
              <span>→</span>
            </Link>
          </div>

          {/* Visual Showcase Card Box */}
          <div style={{
            background: 'linear-gradient(135deg, #eef2ff 0%, #f0fdf4 100%)',
            borderRadius: '20px',
            padding: '28px',
            border: '1px solid var(--border-highlight)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '18px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-primary)' }}>
                Grade 8 Math • Unit 1
              </span>
              <span className="badge badge-verified">Ready</span>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
                Pedagogical Objective
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                3(2x - 4) + 5 = 2x + 9
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
                <span style={{ fontSize: '0.82rem', color: '#047857', fontWeight: 600 }}>Solution: x = 4 (Verified)</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', background: '#ffffff', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>Curriculum Standard</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>CCSS.MATH.8.EE.C.7</div>
              </div>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--accent-primary-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontWeight: 800 }}>
                100%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Platform Pillars in StudentClass Style */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Built Around Pure Student Learning
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem' }}>
            Every feature is designed to reinforce concepts, eliminate confusion, and build verifiable mastery.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          <div className="student-card" style={{ padding: '28px' }}>
            <div className="category-icon-box" style={{ background: '#eef2ff', color: '#4f46e5', marginBottom: '18px' }}>
              🎯
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Curriculum-Aware
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Directly aligned with official California state education department frameworks and Common Core standards.
            </p>
          </div>

          <div className="student-card" style={{ padding: '28px' }}>
            <div className="category-icon-box" style={{ background: '#ecfdf5', color: '#059669', marginBottom: '18px' }}>
              🎬
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Dual-Curated Videos
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Primary vetted video plus an instant backup switcher so learning never halts if a video becomes unavailable.
            </p>
          </div>

          <div className="student-card" style={{ padding: '28px' }}>
            <div className="category-icon-box" style={{ background: '#fef3c7', color: '#d97706', marginBottom: '18px' }}>
              ✍️
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Interactive Practice
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Step-by-step guidance with instant mistake breakdown and hints before learners attempt formal assessment.
            </p>
          </div>

          <div className="student-card" style={{ padding: '28px' }}>
            <div className="category-icon-box" style={{ background: '#fff1f2', color: '#e11d48', marginBottom: '18px' }}>
              🏆
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Server-Graded Mastery
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Tamper-proof deterministic grading on Cloudflare D1 with automatic mastery badges upon scoring 80%+.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
