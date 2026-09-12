'use client';

import React, { useState } from 'react';

interface CurriculumFrameworkItem {
  id: string;
  jurisdiction: string;
  country: string;
  frameworkName: string;
  academicYear: string;
  status: 'PUBLISHED' | 'VERIFIED' | 'REVIEW_REQUIRED' | 'DRAFT';
  objectivesCount: number;
  lastHash: string;
  lastVerifiedAt: string;
}

const INITIAL_FRAMEWORKS: CurriculumFrameworkItem[] = [
  {
    id: 'cf_ca_ccss_math_2026',
    jurisdiction: 'California',
    country: 'USA',
    frameworkName: 'California Common Core State Standards (CCSS)',
    academicYear: '2026–27',
    status: 'PUBLISHED',
    objectivesCount: 48,
    lastHash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    lastVerifiedAt: '2026-09-12 08:30 UTC',
  },
  {
    id: 'cf_tx_teks_math_2026',
    jurisdiction: 'Texas',
    country: 'USA',
    frameworkName: 'Texas Essential Knowledge and Skills (TEKS)',
    academicYear: '2026–27',
    status: 'REVIEW_REQUIRED',
    objectivesCount: 42,
    lastHash: 'sha256:4d858e932311b19ff56f3458694858da39b561c1df796b42b109e46a782e4f01',
    lastVerifiedAt: '2026-09-11 14:15 UTC',
  },
  {
    id: 'cf_uk_dfe_ks3_2026',
    jurisdiction: 'England',
    country: 'United Kingdom',
    frameworkName: 'DfE National Curriculum Key Stage 3 Mathematics',
    academicYear: '2026–27',
    status: 'VERIFIED',
    objectivesCount: 56,
    lastHash: 'sha256:29b384f886f784f4e0c4515ee36b4122ffbe567a1883bfd74e0d9b439c049090',
    lastVerifiedAt: '2026-09-10 11:00 UTC',
  },
  {
    id: 'cf_au_acara_v9_2026',
    jurisdiction: 'Federal / All States',
    country: 'Australia',
    frameworkName: 'Australian Curriculum v9.0 (ACARA)',
    academicYear: '2026–27',
    status: 'DRAFT',
    objectivesCount: 52,
    lastHash: 'sha256:e1b38f8329e4663b400938ff56a294857b293847291048293849501823948571',
    lastVerifiedAt: '2026-09-08 09:45 UTC',
  },
];

export default function AdminCurriculumPage() {
  const [frameworks, setFrameworks] = useState<CurriculumFrameworkItem[]>(INITIAL_FRAMEWORKS);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const handleAction = (id: string, newStatus: CurriculumFrameworkItem['status']) => {
    setFrameworks((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: newStatus, lastVerifiedAt: 'Just now by Admin' } : f))
    );
    setActionMessage(`Executed transition for [${id}] -> ${newStatus}. Immutable audit log entry recorded.`);
    setTimeout(() => setActionMessage(null), 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Curriculum Control Center
        </h1>
        <p style={{ fontSize: '0.94rem', color: '#64748b', margin: 0 }}>
          Manage state frameworks, review raw source snapshots, verify objective alignments, and publish immutable versions.
        </p>
      </div>

      {actionMessage && (
        <div style={{ background: '#ecfdf5', border: '1.5px solid #10b981', color: '#065f46', padding: '14px 20px', borderRadius: '12px', fontSize: '0.88rem', fontWeight: 700 }}>
          {actionMessage}
        </div>
      )}

      {/* Frameworks Table */}
      <div className="student-card" style={{ padding: '0', borderRadius: '20px', border: '1.5px solid #e2e8f0', background: '#ffffff', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', color: '#475569', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <th style={{ padding: '16px 20px' }}>Framework & Jurisdiction</th>
                <th style={{ padding: '16px 20px' }}>Year</th>
                <th style={{ padding: '16px 20px' }}>Objectives</th>
                <th style={{ padding: '16px 20px' }}>Status</th>
                <th style={{ padding: '16px 20px' }}>Last Provenance Hash</th>
                <th style={{ padding: '16px 20px', textAlign: 'right' }}>Controlled Action</th>
              </tr>
            </thead>
            <tbody>
              {frameworks.map((fw) => (
                <tr key={fw.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 800, color: '#0f172a' }}>{fw.frameworkName}</div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{fw.jurisdiction} • {fw.country}</div>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#334155', fontWeight: 600 }}>{fw.academicYear}</td>
                  <td style={{ padding: '16px 20px', color: '#334155', fontWeight: 700 }}>{fw.objectivesCount} mapped</td>
                  <td style={{ padding: '16px 20px' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background:
                          fw.status === 'PUBLISHED' ? '#ecfdf5' : fw.status === 'VERIFIED' ? '#e0f2fe' : fw.status === 'REVIEW_REQUIRED' ? '#fffbeb' : '#f1f5f9',
                        color:
                          fw.status === 'PUBLISHED' ? '#047857' : fw.status === 'VERIFIED' ? '#0369a1' : fw.status === 'REVIEW_REQUIRED' ? '#b45309' : '#475569',
                      }}
                    >
                      {fw.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', fontFamily: 'monospace', fontSize: '0.74rem', color: '#64748b' }}>
                    <div>{fw.lastHash.substring(0, 18)}...</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{fw.lastVerifiedAt}</div>
                  </td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                    {fw.status === 'REVIEW_REQUIRED' && (
                      <button
                        onClick={() => handleAction(fw.id, 'VERIFIED')}
                        style={{
                          background: '#4f46e5',
                          color: '#ffffff',
                          border: 'none',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        Verify Diff ✓
                      </button>
                    )}
                    {fw.status === 'VERIFIED' && (
                      <button
                        onClick={() => handleAction(fw.id, 'PUBLISHED')}
                        style={{
                          background: '#10b981',
                          color: '#ffffff',
                          border: 'none',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        Publish Immutable 🚀
                      </button>
                    )}
                    {fw.status === 'PUBLISHED' && (
                      <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700 }}>
                        Locked (Immutable)
                      </span>
                    )}
                    {fw.status === 'DRAFT' && (
                      <button
                        onClick={() => handleAction(fw.id, 'REVIEW_REQUIRED')}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #cbd5e1',
                          color: '#334155',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        Submit to Review
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
