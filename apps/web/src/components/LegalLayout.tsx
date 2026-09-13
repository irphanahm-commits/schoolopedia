import React from 'react';
import Link from 'next/link';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  subtitle,
  badge,
  lastUpdated = 'September 13, 2026',
  children,
}: LegalLayoutProps) {
  const legalNavItems = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Content Declaration', href: '/content-declaration' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Top Breadcrumb & Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
        color: '#ffffff',
        padding: '56px 24px 44px 24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.86rem',
            color: 'rgba(255, 255, 255, 0.75)',
            marginBottom: '16px',
          }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Legal & Compliance</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              {badge}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              Last Revised: {lastUpdated}
            </span>
          </div>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            letterSpacing: '-0.025em',
            lineHeight: '1.2',
            color: '#ffffff',
            marginBottom: '12px',
          }}>
            {title}
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '780px',
            lineHeight: '1.6',
          }}>
            {subtitle}
          </p>

          {/* Contact Direct Callout */}
          <div style={{
            marginTop: '20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.88rem',
          }}>
            <span>Official Inquiries & Compliance Contact:</span>
            <a
              href="mailto:schoolopedia@usa.com"
              style={{
                color: '#67e8f9',
                fontWeight: 700,
                textDecoration: 'underline',
              }}
            >
              schoolopedia@usa.com
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Compliance Navigation Bar */}
      <div style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '12px 24px',
        position: 'sticky',
        top: '64px',
        zIndex: 20,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '2px',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginRight: '6px' }}>
            Quick Nav:
          </span>
          {legalNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: '0.84rem',
                fontWeight: 600,
                color: '#334155',
                padding: '6px 12px',
                borderRadius: '6px',
                textDecoration: 'none',
                backgroundColor: '#f1f5f9',
                transition: 'all 0.15s ease',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1000px', margin: '36px auto 0 auto', padding: '0 24px' }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
          padding: '44px 40px',
          color: '#334155',
          lineHeight: '1.75',
          fontSize: '1rem',
        }}>
          {children}

          {/* Bottom Official Contact Card */}
          <div style={{
            marginTop: '48px',
            padding: '24px 28px',
            borderRadius: '12px',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Questions, Feedback, or Legal Correspondence?
            </h3>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569' }}>
              For inquiries regarding our privacy standards, advertising disclosures, open educational content attribution, or DMCA requests, please contact our administrative desk:
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <strong>Email:</strong>
              <a
                href="mailto:schoolopedia@usa.com"
                style={{ color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}
              >
                schoolopedia@usa.com
              </a>
              <span style={{ color: '#94a3b8' }}>•</span>
              <span style={{ fontSize: '0.86rem', color: '#64748b' }}>Response Time: Within 24–48 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
