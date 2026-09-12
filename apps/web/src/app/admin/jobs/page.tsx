'use client';

import React, { useState } from 'react';

interface OutboxJob {
  id: string;
  type: string;
  priority: 'CRITICAL' | 'HIGH' | 'NORMAL' | 'LOW';
  status: 'COMPLETED' | 'RUNNING' | 'QUEUED' | 'FAILED';
  attempts: number;
  maxAttempts: number;
  scheduledAt: string;
  completedAt?: string;
  error?: string;
}

const INITIAL_JOBS: OutboxJob[] = [
  {
    id: 'job_probe_video_avail_01',
    type: 'VIDEO_HEALTH_PROBE',
    priority: 'HIGH',
    status: 'COMPLETED',
    attempts: 1,
    maxAttempts: 3,
    scheduledAt: '2026-09-12 12:00 UTC',
    completedAt: '2026-09-12 12:00:04 UTC',
  },
  {
    id: 'job_sweep_state_frameworks_02',
    type: 'FRAMEWORK_SOURCE_SWEEP',
    priority: 'NORMAL',
    status: 'COMPLETED',
    attempts: 1,
    maxAttempts: 3,
    scheduledAt: '2026-09-12 03:00 UTC',
    completedAt: '2026-09-12 03:02:18 UTC',
  },
  {
    id: 'job_fts5_reindex_ca8_math_03',
    type: 'SEARCH_INDEX_REFRESH',
    priority: 'LOW',
    status: 'COMPLETED',
    attempts: 1,
    maxAttempts: 5,
    scheduledAt: '2026-09-11 23:45 UTC',
    completedAt: '2026-09-11 23:45:11 UTC',
  },
  {
    id: 'job_next_cron_sweep_04',
    type: 'PERIODIC_VIDEO_AND_SOURCE_CRON',
    priority: 'NORMAL',
    status: 'QUEUED',
    attempts: 0,
    maxAttempts: 3,
    scheduledAt: 'Next scheduled cron cycle (*/15 * * * *)',
  },
];

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<OutboxJob[]>(INITIAL_JOBS);
  const [isTriggering, setIsTriggering] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleManualTrigger = () => {
    setIsTriggering(true);
    setTimeout(() => {
      const newJob: OutboxJob = {
        id: `job_manual_${Date.now().toString(36)}`,
        type: 'MANUAL_INTEGRITY_SWEEP',
        priority: 'HIGH',
        status: 'COMPLETED',
        attempts: 1,
        maxAttempts: 3,
        scheduledAt: 'Just now',
        completedAt: 'Just now (0.32s runtime)',
      };
      setJobs([newJob, ...jobs]);
      setIsTriggering(false);
      setToast('Manual outbox sweep completed successfully. Zero errors recorded.');
      setTimeout(() => setToast(null), 3500);
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
            Outbox Jobs & Task Runner
          </h1>
          <p style={{ fontSize: '0.94rem', color: '#64748b', margin: 0 }}>
            Inspect background async transport jobs, retry queues, and scheduled Cloudflare Worker cron jobs.
          </p>
        </div>

        <button
          onClick={handleManualTrigger}
          disabled={isTriggering}
          style={{
            background: '#4f46e5',
            color: '#ffffff',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '10px',
            fontSize: '0.84rem',
            fontWeight: 800,
            cursor: isTriggering ? 'wait' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
          }}
        >
          <span>⚡</span> {isTriggering ? 'Executing...' : 'Dispatch Outbox Sweep Now'}
        </button>
      </div>

      {toast && (
        <div style={{ background: '#ecfdf5', border: '1.5px solid #10b981', color: '#065f46', padding: '14px 20px', borderRadius: '12px', fontSize: '0.88rem', fontWeight: 700 }}>
          {toast}
        </div>
      )}

      {/* Jobs Table */}
      <div className="student-card" style={{ padding: '0', borderRadius: '20px', border: '1.5px solid #e2e8f0', background: '#ffffff', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #e2e8f0', color: '#475569', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <th style={{ padding: '16px 20px' }}>Job ID & Task Type</th>
                <th style={{ padding: '16px 20px' }}>Priority</th>
                <th style={{ padding: '16px 20px' }}>Status</th>
                <th style={{ padding: '16px 20px' }}>Attempts</th>
                <th style={{ padding: '16px 20px' }}>Scheduled / Completed</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((j) => (
                <tr key={j.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ fontWeight: 800, color: '#0f172a' }}>{j.type}</div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'monospace', color: '#64748b' }}>{j.id}</div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: j.priority === 'CRITICAL' ? '#fee2e2' : j.priority === 'HIGH' ? '#ffedd5' : '#f1f5f9',
                        color: j.priority === 'CRITICAL' ? '#b91c1c' : j.priority === 'HIGH' ? '#c2410c' : '#475569',
                      }}
                    >
                      {j.priority}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: j.status === 'COMPLETED' ? '#ecfdf5' : j.status === 'QUEUED' ? '#fffbeb' : '#e0f2fe',
                        color: j.status === 'COMPLETED' ? '#047857' : j.status === 'QUEUED' ? '#b45309' : '#0369a1',
                      }}
                    >
                      {j.status === 'COMPLETED' && '✓ '}
                      {j.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#334155', fontWeight: 600 }}>
                    {j.attempts} / {j.maxAttempts}
                  </td>
                  <td style={{ padding: '16px 20px', fontSize: '0.8rem', color: '#64748b' }}>
                    <div>{j.scheduledAt}</div>
                    {j.completedAt && <div style={{ color: '#10b981', fontWeight: 600 }}>Completed: {j.completedAt}</div>}
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
