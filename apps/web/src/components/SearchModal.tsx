'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  curriculum_context: string;
  snippet: string;
  canonical_url: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle or open handled by parent
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://127.0.0.1:8787/api/v1/search?q=${encodeURIComponent(query)}`);
        const json = await res.json();
        setResults(json.data || []);
      } catch {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh',
      }}
      onClick={onClose}
      id="search-modal-backdrop"
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '650px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-glow)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-glow)',
        }}
        onClick={(e) => e.stopPropagation()}
        id="search-modal-container"
      >
        {/* Search Input Field */}
        <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search California Grade 8 Math, concepts, lessons..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            id="search-modal-input"
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-heading)',
            }}
          />
          <button onClick={onClose} className="btn btn-ghost" style={{ padding: '4px 8px' }}>
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '16px 24px' }}>
          {isLoading && (
            <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
              Searching curriculum encyclopedia...
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-secondary)' }}>
              No matches found for &quot;{query}&quot;. Try searching for &quot;linear equations&quot; or &quot;variables&quot;.
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {results.map((item) => (
                <Link
                  key={item.id}
                  href="/learn/us/california/grade-8/mathematics/linear-equations"
                  onClick={onClose}
                  className="glass-panel"
                  style={{
                    padding: '14px 18px',
                    display: 'block',
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  }}
                  id={`search-result-${item.id}`}
                >
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', marginBottom: '4px', fontWeight: 600 }}>
                    {item.curriculum_context}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {item.snippet}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!query && (
            <div style={{ padding: '16px 0', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                Popular Standard Lessons:
              </div>
              <Link
                href="/learn/us/california/grade-8/mathematics/linear-equations"
                onClick={onClose}
                style={{ display: 'block', padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.03)', marginBottom: '6px', color: '#e2e8f0' }}
              >
                📐 Linear Equations in One Variable (CCSS.MATH.CONTENT.8.EE.C.7)
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
