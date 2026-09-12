'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { BLOG_POSTS, BlogPost } from '@/data/blogPosts';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'Curriculum Updates', 'Pedagogy & Standards', 'Architecture & AI'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'ALL' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Schoolopedia Curriculum Insights & Editorial Updates',
    description: 'Authoritative analysis on educational frameworks, state curriculum transitions, zero-cost edge infrastructure, and international standards across 78 Tier 1 jurisdictions.',
    url: 'https://schoolopedia.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Schoolopedia',
      url: 'https://schoolopedia.com',
    },
  };

  return (
    <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '40px 24px 80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />

      {/* Breadcrumbs */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#64748b', fontWeight: 600, marginBottom: '24px' }}>
        <Link href="/" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Home</Link>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 700 }}>Blog & Curriculum Updates</span>
      </nav>

      {/* Header Banner */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#eef2ff', padding: '6px 14px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, color: '#4338ca', marginBottom: '14px' }}>
          <span>📚 Living Education Encyclopedia</span>
          <span>•</span>
          <span>Official Framework Logs</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '14px' }}>
          Curriculum Insights & Editorial Updates
        </h1>
        <p style={{ fontSize: '1.08rem', color: '#475569', maxWidth: '780px', lineHeight: 1.6 }}>
          Authoritative dispatches on state and national curriculum transitions, pedagogical standards alignment across 78 Tier 1 jurisdictions, and open-source zero-cost platform engineering.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid #4f46e5' : '1.5px solid #e2e8f0',
                  background: isActive ? '#4f46e5' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(79, 70, 229, 0.2)' : 'none',
                }}
              >
                {cat === 'ALL' ? 'All Articles' : cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', minWidth: '260px' }}>
          <input
            type="text"
            placeholder="Search articles or standards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px 10px 38px',
              borderRadius: '12px',
              border: '1.5px solid #e2e8f0',
              fontSize: '0.88rem',
              outline: 'none',
              background: '#ffffff',
              color: '#0f172a',
            }}
          />
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '0.9rem' }}>
            🔍
          </span>
        </div>
      </div>

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: '20px', border: '1px dashed #cbd5e1' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#334155' }}>No articles matched your criteria.</p>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Try selecting "All Articles" or searching for different keywords.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '28px' }}>
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="student-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                background: '#ffffff',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      background: post.category === 'Curriculum Updates' ? '#eef2ff' : post.category === 'Architecture & AI' ? '#f3e8ff' : '#ecfdf5',
                      color: post.category === 'Curriculum Updates' ? '#4338ca' : post.category === 'Architecture & AI' ? '#7e22ce' : '#047857',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>
                    {post.readTime}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.35, marginBottom: '12px' }}>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: '#0f172a', textDecoration: 'none', transition: 'color 0.15s ease' }}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55, marginBottom: '20px' }}>
                  {post.summary}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#64748b',
                        background: '#f8fafc',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        border: '1px solid #f1f5f9',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author Strip & Link */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#4f46e5', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                      {post.author.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>{post.author.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{post.publishedAt}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#4f46e5',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
