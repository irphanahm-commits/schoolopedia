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
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
      }}>
        {/* Column 1: Brand & Mission */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(79, 70, 229, 0.25)',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
            }}>
              <img
                src="/schoolopedia-logo.svg"
                alt="Schoolopedia Logo"
                width={36}
                height={36}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a' }}>
              Schoolopedia
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '16px' }}>
            The Curriculum-Aware Education Encyclopedia. Free, verified learning paths across 78 Tier 1 education jurisdictions.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="badge badge-verified">100% Free Forever</span>
            <span className="badge badge-curriculum">Open Education</span>
          </div>
          <div style={{ fontSize: '0.86rem', color: '#475569' }}>
            Official Inquiries: <a href="mailto:schoolopedia@usa.com" style={{ color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}>schoolopedia@usa.com</a>
          </div>
        </div>

        {/* Column 2: Platform & Learning */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a' }}>
            Platform Navigation
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', padding: 0, margin: 0 }}>
            <li><Link href="/learn" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Learn Hub</Link></li>
            <li><Link href="/explore" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Explore Schools & Boards</Link></li>
            <li><Link href="/guidance" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Career Guidance</Link></li>
            <li><Link href="/opportunities" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Competitions & Olympiads</Link></li>
            <li><Link href="/pathways" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Learning Pathways</Link></li>
            <li><Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Editorial Blog</Link></li>
          </ul>
        </div>

        {/* Column 3: Curricula & Open Sources */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a' }}>
            Curriculum Portals
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', padding: 0, margin: 0 }}>
            <li><Link href="/learn/in/cbse" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>India CBSE & NCERT</Link></li>
            <li><Link href="/learn/us/california" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>California CCSS Standards</Link></li>
            <li><Link href="/learn/gb/england" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>UK National Curriculum</Link></li>
            <li><Link href="/learn/au/nsw" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Australia ACARA Standards</Link></li>
            <li><Link href="/content-declaration" style={{ color: '#4f46e5', fontWeight: 600, textDecoration: 'none' }}>Content Attribution Declaration ↗</Link></li>
          </ul>
        </div>

        {/* Column 4: Legal, Compliance & AdSense */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a' }}>
            Legal & Compliance
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', padding: 0, margin: 0 }}>
            <li><Link href="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms & Conditions</Link></li>
            <li><Link href="/cookie-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Cookie Policy</Link></li>
            <li><Link href="/content-declaration" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Content & Open Source Declaration</Link></li>
            <li><Link href="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Schoolopedia</Link></li>
            <li><Link href="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
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
        <p style={{ margin: 0 }}>
          © 2026 Schoolopedia. Built on Cloudflare Zero-Cost Edge Architecture. 100% Free Forever. Contact:{' '}
          <a href="mailto:schoolopedia@usa.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>schoolopedia@usa.com</a>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', fontWeight: 600 }}>
          <Link href="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy</Link>
          <span>•</span>
          <Link href="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms</Link>
          <span>•</span>
          <Link href="/cookie-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Cookies</Link>
          <span>•</span>
          <Link href="/content-declaration" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Attribution</Link>
          <span>•</span>
          <Link href="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</Link>
          <span>•</span>
          <Link href="/sitemap.xml" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
