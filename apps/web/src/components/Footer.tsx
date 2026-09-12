import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      backgroundColor: '#ffffff',
      padding: '56px 28px 36px 28px',
      marginTop: '80px',
      boxShadow: '0 -1px 3px rgba(15, 23, 42, 0.02)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(79, 70, 229, 0.25)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
              Schoolopedia
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '20px' }}>
            The Curriculum-Aware Education Encyclopedia. Learn what you need today. Discover what you can become tomorrow.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span className="badge badge-verified">100% Free Forever</span>
            <span className="badge badge-curriculum">CCSS Aligned</span>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a' }}>
            Official Standard
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <li><strong>Jurisdiction:</strong> California, USA</li>
            <li><strong>Framework:</strong> CA Common Core State Standards</li>
            <li><strong>Academic Year:</strong> 2026–27</li>
            <li><strong>Subject:</strong> Grade 8 Mathematics</li>
            <li><strong>Authority:</strong> California Dept. of Education</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a' }}>
            Trust & Provenance
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '14px' }}>
            All standards and concepts are directly grounded in official state frameworks. Educational videos are strictly curated and verified.
          </p>
          <Link
            href="https://www.cde.ca.gov/ci/ma/cf/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent-primary)',
              fontSize: '0.88rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Official CDE Framework ↗
          </Link>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '40px auto 0 auto',
        paddingTop: '24px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
      }}>
        <p>© 2026 Schoolopedia. Built on Cloudflare Zero-Cost Edge Architecture. 100% Free Forever.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', fontWeight: 600 }}>
          <Link href="/blog" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Blog & Updates</Link>
          <span>•</span>
          <Link href="/admin" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Admin Console</Link>
          <span>•</span>
          <Link href="/sitemap.xml" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Sitemap</Link>
          <span>•</span>
          <Link href="/llms.txt" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>LLMs.txt</Link>
          <span>•</span>
          <span>Privacy-First</span>
        </div>
      </div>
    </footer>
  );
}
