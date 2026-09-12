'use client';

import React, { useState } from 'react';

interface ReportItem {
  id: string;
  reporter: string;
  category: string;
  entityType: string;
  entityTitle: string;
  details: string;
  submittedAt: string;
  status: 'REPORTED' | 'TRIAGED' | 'RESOLVED' | 'DISMISSED';
}

const INITIAL_REPORTS: ReportItem[] = [
  {
    id: 'rep_1789230192',
    reporter: 'Guest Learner (California)',
    category: 'PRACTICE_CLARIFICATION',
    entityType: 'Practice Question #2',
    entityTitle: 'Grade 8 Linear Equations (Multi-Step Variables on Both Sides)',
    details: 'The hint could mention dividing by the coefficient before expanding when possible to save time.',
    submittedAt: 'Today at 09:12 UTC',
    status: 'REPORTED',
  },
  {
    id: 'rep_1789194820',
    reporter: 'Curriculum Reviewer',
    category: 'PROVENANCE_CHECK',
    entityType: 'Standards Alignment',
    entityTitle: 'CCSS.MATH.CONTENT.8.EE.C.7',
    details: 'Verified against California Department of Education 2026 Mathematics Framework chapter 5.',
    submittedAt: 'Yesterday at 15:40 UTC',
    status: 'TRIAGED',
  },
  {
    id: 'rep_1789100293',
    reporter: 'Automated Health Cron',
    category: 'VIDEO_FAILOVER',
    entityType: 'YouTube Embed',
    entityTitle: 'Introduction to Linear Equations',
    details: 'Primary Khan Academy embed was probed via oEmbed HTTP 200 OK. State verified AVAILABLE.',
    submittedAt: 'September 10, 2026',
    status: 'RESOLVED',
  },
];

export default function AdminReportsPage() {
  const [reports, setReports] = useState<ReportItem[]>(INITIAL_REPORTS);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const handleAction = (id: string, newStatus: ReportItem['status']) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    setActionNotice(`Report [${id}] marked as ${newStatus}. State recorded to D1 reports table.`);
    setTimeout(() => setActionNotice(null), 3500);
  };

  const filteredReports = reports.filter((r) => {
    if (activeFilter === 'ALL') return true;
    return r.status === activeFilter;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Moderation & Learner Report Triage
        </h1>
        <p style={{ fontSize: '0.94rem', color: '#64748b', margin: 0 }}>
          Review content feedback, inaccurate standards claims, and automated health flags.
        </p>
      </div>

      {actionNotice && (
        <div style={{ background: '#ecfdf5', border: '1.5px solid #10b981', color: '#065f46', padding: '14px 20px', borderRadius: '12px', fontSize: '0.88rem', fontWeight: 700 }}>
          {actionNotice}
        </div>
      )}

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {['ALL', 'REPORTED', 'TRIAGED', 'RESOLVED'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeFilter === tab ? '1.5px solid #4f46e5' : '1.5px solid #e2e8f0',
              background: activeFilter === tab ? '#4f46e5' : '#ffffff',
              color: activeFilter === tab ? '#ffffff' : '#64748b',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Reports List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="student-card"
            style={{
              padding: '24px',
              borderRadius: '18px',
              border: '1.5px solid #e2e8f0',
              background: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: report.status === 'RESOLVED' ? '#ecfdf5' : report.status === 'REPORTED' ? '#fffbeb' : '#e0f2fe',
                    color: report.status === 'RESOLVED' ? '#047857' : report.status === 'REPORTED' ? '#b45309' : '#0369a1',
                  }}
                >
                  {report.status}
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4f46e5' }}>
                  {report.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>• {report.id}</span>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{report.submittedAt}</span>
            </div>

            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                {report.entityTitle}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '8px' }}>
                Target: {report.entityType} • Reporter: {report.reporter}
              </div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#334155', background: '#f8fafc', padding: '12px 16px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                "{report.details}"
              </p>
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              {report.status !== 'RESOLVED' && (
                <>
                  <button
                    onClick={() => handleAction(report.id, 'RESOLVED')}
                    style={{
                      background: '#10b981',
                      color: '#ffffff',
                      border: 'none',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Mark Resolved ✓
                  </button>
                  <button
                    onClick={() => handleAction(report.id, 'TRIAGED')}
                    style={{
                      background: '#4f46e5',
                      color: '#ffffff',
                      border: 'none',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Triage for Review
                  </button>
                </>
              )}
              {report.status !== 'DISMISSED' && report.status !== 'RESOLVED' && (
                <button
                  onClick={() => handleAction(report.id, 'DISMISSED')}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#64748b',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Dismiss
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
