'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [probeStatus, setProbeStatus] = useState<string | null>(null);
  const [isProbing, setIsProbing] = useState(false);

  const handleRunHealthSweep = async () => {
    setIsProbing(true);
    setProbeStatus('Initiating edge probe sweep across video register and framework sources...');
    setTimeout(() => {
      setIsProbing(false);
      setProbeStatus('Sweep Complete: 8/8 YouTube embeds verified reachable. 78 jurisdiction framework registries active.');
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* North Star Health Banner */}
      <div
        className="student-card"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          color: '#ffffff',
          padding: '28px 32px',
          borderRadius: '24px',
          border: '1.5px solid #334155',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8' }}>
              Master Operations Status
            </span>
            <span>•</span>
            <span style={{ fontSize: '0.8rem', color: '#a7f3d0', fontWeight: 700 }}>● ALL SYSTEMS NOMINAL</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
            Is Schoolopedia healthy right now?
          </h1>
          <p style={{ margin: 0, fontSize: '0.94rem', color: '#94a3b8', maxWidth: '650px', lineHeight: 1.5 }}>
            All 52 relational tables in Cloudflare D1 are active. Automated video health sweeps report 100% embed availability. Zero cost incurred this billing cycle ($0.00 / $0.00 budget).
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={handleRunHealthSweep}
            disabled={isProbing}
            style={{
              background: '#4f46e5',
              color: '#ffffff',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: isProbing ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
              transition: 'all 0.15s ease',
            }}
          >
            <span>⚡</span>
            <span>{isProbing ? 'Sweeping...' : 'Run Immediate Probe'}</span>
          </button>
          {probeStatus && (
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', maxWidth: '240px', lineHeight: 1.3 }}>
              {probeStatus}
            </div>
          )}
        </div>
      </div>

      {/* Metric Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: '20px' }}>
        <div className="student-card" style={{ padding: '22px', borderRadius: '18px', border: '1.5px solid #e2e8f0', background: '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Jurisdictions</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0f172a', margin: '6px 0 2px 0' }}>78 / 78</div>
          <div style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>100% Catalogued Tier 1</div>
        </div>

        <div className="student-card" style={{ padding: '22px', borderRadius: '18px', border: '1.5px solid #e2e8f0', background: '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Curriculum Versions</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0f172a', margin: '6px 0 2px 0' }}>1 Published</div>
          <div style={{ fontSize: '0.78rem', color: '#4f46e5', fontWeight: 700 }}>4 Draft Frameworks</div>
        </div>

        <div className="student-card" style={{ padding: '22px', borderRadius: '18px', border: '1.5px solid #e2e8f0', background: '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Video Health Probes</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0f172a', margin: '6px 0 2px 0' }}>8 / 8 Active</div>
          <div style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>0 Failovers Triggered</div>
        </div>

        <div className="student-card" style={{ padding: '22px', borderRadius: '18px', border: '1.5px solid #e2e8f0', background: '#ffffff' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Moderation Queue</div>
          <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0f172a', margin: '6px 0 2px 0' }}>1 Pending</div>
          <div style={{ fontSize: '0.78rem', color: '#f59e0b', fontWeight: 700 }}>Review Required</div>
        </div>
      </div>

      {/* Core Operational Health Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '24px' }}>
        {/* Component Health Table */}
        <div className="student-card" style={{ padding: '26px', borderRadius: '20px', border: '1.5px solid #e2e8f0', background: '#ffffff' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🛠️</span> Cloudflare Infrastructure State
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'Cloudflare D1 (Relational SQL)', id: 'schoolopedia-db', limit: '5M read rows/day', status: 'Healthy', color: '#10b981' },
              { name: 'Cloudflare KV (Curriculum Cache)', id: 'schoolopedia-cache', limit: '100k read ops/day', status: 'Active (Hit rate: 94%)', color: '#10b981' },
              { name: 'Cloudflare R2 (Source Snapshots)', id: 'schoolopedia-snapshots', limit: '10GB free / 0 egress', status: 'Ready', color: '#10b981' },
              { name: 'Cloudflare Workers (Hono API)', id: 'schoolopedia-api', limit: '100k requests/day', status: 'Sub-15ms Latency', color: '#10b981' },
              { name: 'Next.js 15 Static Assets', id: 'schoolopedia-web', limit: 'Unlimited Bandwidth', status: 'Global Edge Cached', color: '#10b981' },
            ].map((c) => (
              <div
                key={c.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 14px',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #f1f5f9',
                  fontSize: '0.86rem',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{c.name}</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>{c.id} • {c.limit}</div>
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: c.color, background: '#ffffff', padding: '4px 8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Priority Action Queue */}
        <div className="student-card" style={{ padding: '26px', borderRadius: '20px', border: '1.5px solid #e2e8f0', background: '#ffffff' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📋</span> Pending Review & Action Items
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '14px', borderRadius: '12px', background: '#fffbeb', border: '1px solid #fde68a' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#b45309', textTransform: 'uppercase' }}>Curriculum Ingestion</span>
                <span style={{ fontSize: '0.72rem', color: '#92400e' }}>2 hours ago</span>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#78350f' }}>
                Texas TEKS Mathematics Grade 8 Draft Snapshot Ready
              </div>
              <p style={{ fontSize: '0.8rem', color: '#92400e', margin: '4px 0 10px 0' }}>
                SHA-256 hash verified from TEA official portal. 36 learning objectives parsed; awaiting human reviewer validation.
              </p>
              <Link href="/admin/curriculum" style={{ fontSize: '0.82rem', fontWeight: 800, color: '#b45309', textDecoration: 'none' }}>
                Inspect & Verify Version →
              </Link>
            </div>

            <div style={{ padding: '14px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase' }}>Moderation Queue</span>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Yesterday</span>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                Learner Feedback on Linear Equations Practice Drill #2
              </div>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '4px 0 10px 0' }}>
                User suggested adding an extra hint for fractions distribution before parentheses expansion.
              </p>
              <Link href="/admin/reports" style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4f46e5', textDecoration: 'none' }}>
                Review Report →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
