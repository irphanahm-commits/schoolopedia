'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { API_BASE_URL } from '@/lib/api';

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
        onClose();
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
        const res = await fetch(`${API_BASE_URL}/api/v1/search?q=${encodeURIComponent(query)}`);
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
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
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
        className="student-card"
        style={{
          width: '100%',
          maxWidth: '650px',
          backgroundColor: '#ffffff',
          border: '1.5px solid #cbd5e1',
          overflow: 'hidden',
          boxShadow: '0 20px 45px -8px rgba(15, 23, 42, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
        id="search-modal-container"
      >
        {/* Search Input Field */}
        <div style={{ padding: '18px 24px', borderBottom: '1.5px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              color: '#0f172a',
              fontSize: '1.1rem',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
            }}
          />
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '4px 10px', fontSize: '0.78rem', borderRadius: '6px' }}
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '16px 20px' }}>
          {isLoading && (
            <div style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>
              Searching curriculum encyclopedia...
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <div style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>
              No matches found for &quot;{query}&quot;. Try searching for &quot;linear equations&quot; or &quot;variables&quot;.
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {results.map((item) => (
                <Link
                  key={item.id}
                  href="/learn/us/california/grade-8/mathematics/linear-equations"
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#eef2ff';
                    e.currentTarget.style.borderColor = '#c7d2fe';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.02rem' }}>
                      {item.title}
                    </span>
                    <span className="badge badge-curriculum" style={{ fontSize: '0.72rem' }}>
                      Lesson
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '6px' }}>
                    {item.curriculum_context}
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5 }}>
                    {item.snippet}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
