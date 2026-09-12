'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SearchModal } from '../components/SearchModal';

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div style={{ minHeight: '80vh', padding: '0 24px' }}>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Hero Section */}
      <section style={{
        maxWidth: '960px',
        margin: '64px auto 80px auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <span className="badge badge-curriculum">Official Curriculum Encyclopedia</span>
          <span className="badge badge-verified">₹0 Free Forever</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.15',
        }}>
          Learn what you need today.<br />
          Discover what you can become tomorrow.
        </h1>

        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: 'var(--text-secondary)',
          maxWidth: '680px',
          marginBottom: '40px',
          lineHeight: '1.6',
        }}>
          Schoolopedia connects official school standards with curated learning, interactive practice, and verified mastery. No ads. No paywalls.
        </p>

        {/* Search Callout Input */}
        <div
          onClick={() => setIsSearchOpen(true)}
          className="glass-panel"
          id="hero-search-trigger"
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            boxShadow: '0 10px 30px -5px rgba(99, 102, 241, 0.2)',
            marginBottom: '48px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--text-muted)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span style={{ fontSize: '1.05rem' }}>Search any topic (e.g. Linear Equations, Slope, Grade 8)...</span>
          </div>
          <kbd style={{
            fontSize: '0.75rem',
            padding: '4px 8px',
            borderRadius: '4px',
            background: 'var(--bg-tertiary)',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)',
          }}>
            ⌘K
          </kbd>
        </div>

        {/* Featured Vertical Slice Banner */}
        <div
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '820px',
            padding: '32px',
            textAlign: 'left',
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(30, 27, 75, 0.4) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            position: 'relative',
            overflow: 'hidden',
          }}
          id="featured-curriculum-banner"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <span className="badge badge-verified" style={{ marginBottom: '8px' }}>
                Featured Production Vertical Slice
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                California Grade 8 Mathematics
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                Aligned with California Common Core State Standards (2026–27 Academic Year)
              </p>
            </div>
            <span className="badge badge-standard">CCSS.MATH.CONTENT.8.EE.C.7</span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.6', marginBottom: '24px' }}>
            Master solving linear equations in one variable with rational number coefficients, expanding expressions using the distributive property, and classifying whether equations have one, infinite, or zero solutions.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link
              href="/learn/us/california/grade-8/mathematics/linear-equations"
              className="btn btn-primary"
              id="btn-explore-lesson"
            >
              Start Lesson: Linear Equations →
            </Link>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="btn btn-secondary"
            >
              Browse Units & Objectives
            </button>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Grid */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 80px auto' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textAlign: 'center', marginBottom: '32px' }}>
          How Schoolopedia Works
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>📐</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>1. Official Curriculum</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Every lesson is tied to official state standards with complete transparency, source URLs, and version histories.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>🎥</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>2. Curated Resources</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Multi-tier video recommendations (Khan Academy, Math Antics) evaluated for grade-suitability and conceptual clarity.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>⚡</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>3. Practice & Quizzes</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Immediate step-by-step feedback on practice, followed by deterministic server-graded mastery evaluations.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>🚀</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>4. Verified Mastery</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Scoring 80% or higher earns verified objective mastery, unlocking deterministic recommendations for the next lesson.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
