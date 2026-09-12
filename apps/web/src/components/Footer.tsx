import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      backgroundColor: 'var(--bg-secondary)',
      padding: '48px 24px 32px 24px',
      marginTop: '80px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Schoolopedia
            </span>
            <span className="badge badge-curriculum">Encyclopedia</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
            A curriculum-aware, free education encyclopedia. Learn what you need today. Discover what you can become tomorrow.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-verified">₹0 Forever</span>
            <span className="badge badge-standard">CCSS Aligned</span>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
            Official Standard
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <li>Jurisdiction: California (USA)</li>
            <li>Framework: CA Common Core State Standards</li>
            <li>Academic Year: 2026–27</li>
            <li>Subject: Grade 8 Mathematics</li>
            <li>Authority: California Dept. of Education</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
            Trust & Provenance
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '12px' }}>
            All educational standards are directly grounded in official state frameworks. Educational content is peer-reviewed and verified.
          </p>
          <Link
            href="https://www.cde.ca.gov/ci/ma/cf/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            Official CDE Framework ↗
          </Link>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '32px auto 0 auto',
        paddingTop: '24px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        color: 'var(--text-muted)',
        fontSize: '0.82rem',
      }}>
        <p>© 2026 Schoolopedia. Built on Cloudflare Zero-Cost Edge Architecture.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Privacy-First</span>
          <span>No Ads</span>
          <span>No Paywalls</span>
        </div>
      </div>
    </footer>
  );
}
