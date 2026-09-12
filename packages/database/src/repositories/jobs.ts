import { D1Database } from '@cloudflare/workers-types';
import { Job, JobType } from '@schoolopedia/types';

export class JobsRepository {
  constructor(private readonly db: D1Database) {}

  async enqueue(
    type: JobType,
    payload: Record<string, unknown>,
    options?: { priority?: number; correlation_id?: string; max_attempts?: number }
  ): Promise<Job> {
    const id = `job_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date().toISOString();
    const correlation_id = options?.correlation_id || `corr_${Date.now()}`;
    const priority = options?.priority ?? 5;
    const max_attempts = options?.max_attempts ?? 3;

    await this.db
      .prepare(
        `INSERT INTO jobs (id, type, status, priority, payload_json, attempts, max_attempts, correlation_id, created_at, updated_at)
         VALUES (?, ?, 'QUEUED', ?, ?, 0, ?, ?, ?, ?)`
      )
      .bind(id, type, priority, JSON.stringify(payload), max_attempts, correlation_id, now, now)
      .run();

    return {
      id,
      type,
      status: 'QUEUED',
      priority,
      payload,
      attempts: 0,
      max_attempts,
      correlation_id,
      created_at: now,
      updated_at: now,
    };
  }

  async acquireNextJobs(limit: number = 5): Promise<Job[]> {
    const now = new Date().toISOString();
    const lockExpiry = new Date(Date.now() + 5 * 60 * 1000).toISOString(); // 5 minute lock

    const selectSql = `
      SELECT * FROM jobs 
      WHERE (status = 'QUEUED' OR status = 'RETRY') 
        AND (locked_until IS NULL OR locked_until < ?)
      ORDER BY priority ASC, created_at ASC 
      LIMIT ?
    `;

    const candidates = await this.db.prepare(selectSql).bind(now, limit).all<{
      id: string;
      type: string;
      status: string;
      priority: number;
      payload_json: string;
      attempts: number;
      max_attempts: number;
      error_message?: string;
      correlation_id: string;
      locked_until?: string;
      created_at: string;
      updated_at: string;
    }>();

    const jobs: Job[] = [];

    for (const row of candidates.results || []) {
      const updateResult = await this.db
        .prepare(
          `UPDATE jobs 
           SET status = 'RUNNING', attempts = attempts + 1, locked_until = ?, updated_at = ? 
           WHERE id = ? AND (locked_until IS NULL OR locked_until < ?)`
        )
        .bind(lockExpiry, now, row.id, now)
        .run();

      if (updateResult.meta.changes > 0) {
        jobs.push({
          id: row.id,
          type: row.type as JobType,
          status: 'RUNNING',
          priority: row.priority,
          payload: JSON.parse(row.payload_json || '{}'),
          attempts: row.attempts + 1,
          max_attempts: row.max_attempts,
          error_message: row.error_message,
          correlation_id: row.correlation_id,
          locked_until: lockExpiry,
          created_at: row.created_at,
          updated_at: now,
        });
      }
    }

    return jobs;
  }

  async completeJob(id: string): Promise<void> {
    const now = new Date().toISOString();
    await this.db
      .prepare(`UPDATE jobs SET status = 'COMPLETED', locked_until = NULL, updated_at = ? WHERE id = ?`)
      .bind(now, id)
      .run();
  }

  async failJob(id: string, errorMessage: string, currentAttempts: number, maxAttempts: number): Promise<void> {
    const now = new Date().toISOString();
    const nextStatus = currentAttempts >= maxAttempts ? 'REVIEW_REQUIRED' : 'RETRY';

    await this.db
      .prepare(
        `UPDATE jobs 
         SET status = ?, error_message = ?, locked_until = NULL, updated_at = ? 
         WHERE id = ?`
      )
      .bind(nextStatus, errorMessage, now, id)
      .run();
  }
}
