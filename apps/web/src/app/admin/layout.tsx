'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', label: '📊 Dashboard', exact: true },
    { href: '/admin/curriculum', label: '📜 Curriculum Control', exact: false },
    { href: '/admin/sources', label: '🌐 Source Registry', exact: false },
    { href: '/admin/reports', label: '🛡️ Moderation Triage', exact: false },
    { href: '/admin/jobs', label: '⚙️ Outbox Jobs', exact: false },
    { href: '/admin/audit', label: '🔒 Audit Logs', exact: false },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: 'calc(100vh - 68px)' }}>
      {/* Admin Top Operations Bar */}
      <div
        style={{
          background: '#0f172a',
          color: '#ffffff',
          padding: '14px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          borderBottom: '1px solid #334155',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: '#4f46e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: 800,
            }}
          >
            ⚙️
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
              Schoolopedia Governance Console
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              Controlled Operational Console • Not Arbitrary CRUD • D1 Canonical
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              padding: '4px 10px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#34d399',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }}></span>
            <span>D1 APAC Live</span>
          </div>

          <Link
            href="/"
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#94a3b8',
              textDecoration: 'none',
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid #334155',
            }}
          >
            Exit to Platform ↗
          </Link>
        </div>
      </div>

      {/* Admin Horizontal Subnav */}
      <nav
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '0 24px',
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '12px 16px',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: isActive ? '#4f46e5' : '#64748b',
                textDecoration: 'none',
                borderBottom: isActive ? '2.5px solid #4f46e5' : '2.5px solid transparent',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Admin Content Canvas */}
      <div style={{ padding: '28px 24px 80px', maxWidth: '1280px', margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );
}
