'use client';

import React from 'react';

interface AuditLogEntry {
  id: string;
  actor: string;
  action: string;
  entityType: string;
  entityId: string;
  ipAddress: string;
  timestamp: string;
  details: string;
}

const AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'aud_9123847120',
    actor: 'admin_sys_irphan',
    action: 'CURRICULUM_VERSION_VERIFY',
    entityType: 'curriculum_versions',
    entityId: 'cv_ca_ccss_math_g8_2026_v1',
    ipAddress: '127.0.0.1 (OAuth Cloudflare)',
    timestamp: '2026-09-12 14:30:12 UTC',
    details: 'Verified SHA-256 hash match against CDE official PDF framework.',
  },
  {
    id: 'aud_9123846900',
    actor: 'cron_worker_edge',
    action: 'VIDEO_OEMBED_PROBE_SUCCESS',
    entityType: 'videos',
    entityId: 'vid_khan_linear_eq',
    ipAddress: 'cloudflare-worker-cron',
    timestamp: '2026-09-12 12:00:03 UTC',
    details: 'YouTube oEmbed probe returned 200 OK. State confirmed AVAILABLE.',
  },
  {
    id: 'aud_9123841120',
    actor: 'guest_learner_ca',
    action: 'OBJECTIVE_MASTERY_ACHIEVED',
    entityType: 'learner_mastery',
    entityId: 'lo_ca8_math_8eec7',
    ipAddress: 'edge-client-request',
    timestamp: '2026-09-12 10:15:45 UTC',
    details: 'Server scored quiz attempt at 100% (5/5 correct). Awarded verified mastery.',
  },
  {
    id: 'aud_9123839210',
    actor: 'system_migration_runner',
    action: 'D1_SCHEMA_MIGRATION_APPLIED',
    entityType: 'd1_migrations',
    entityId: '0002_tier1_pathways_institutions_opportunities.sql',
    ipAddress: 'ci-cd-github-actions',
    timestamp: '2026-09-12 04:12:09 UTC',
    details: 'Applied D1 migration 0002 for Tier 1 university and career pathways.',
  },
];

export default function AdminAuditPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
          Security & Mutation Audit Logs
        </h1>
        <p style={{ fontSize: '0.94rem', color: '#64748b', margin: 0 }}>
          Immutable, append-only chronological log of all administrative actions, state transitions, and security events.
        </p>
      </div>

      {/* Audit Log Table */}
      <div className="student-card" style={{ padding: '0', borderRadius: '20px', border: '1.5px solid #e2e8f0', background: '#ffffff', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', color: '#475569', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <th style={{ padding: '16px 20px' }}>Timestamp</th>
                <th style={{ padding: '16px 20px' }}>Actor</th>
                <th style={{ padding: '16px 20px' }}>Action & Target</th>
                <th style={{ padding: '16px 20px' }}>Event Details</th>
                <th style={{ padding: '16px 20px' }}>Origin / IP</th>
              </tr>
            </thead>
            <tbody>
              {AUDIT_LOGS.map((log) => (
                <tr key={log.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 20px', fontFamily: 'monospace', fontSize: '0.78rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                    {log.timestamp}
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{ fontSize: '0.76rem', fontWeight: 700, background: '#f1f5f9', color: '#334155', padding: '3px 8px', borderRadius: '6px' }}>
                      {log.actor}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 800, color: '#0f172a' }}>{log.action}</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'monospace' }}>
                      {log.entityType} ({log.entityId})
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#334155', fontSize: '0.84rem' }}>
                    {log.details}
                  </td>
                  <td style={{ padding: '16px 20px', fontFamily: 'monospace', fontSize: '0.74rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                    {log.ipAddress}
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
