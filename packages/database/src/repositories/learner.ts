import { D1Database } from '@cloudflare/workers-types';
import { Learner, LearnerProgress, LearnerMastery, LearningContext } from '@schoolopedia/types';

export class LearnerRepository {
  constructor(private readonly db: D1Database) {}

  async getOrCreateLearner(learnerId?: string): Promise<Learner> {
    if (learnerId) {
      const existing = await this.db.prepare('SELECT * FROM learners WHERE id = ?').bind(learnerId).first<{
        id: string;
        email?: string;
        display_name?: string;
        is_anonymous: number;
        context_json?: string;
        created_at: string;
        updated_at: string;
      }>();

      if (existing) {
        return {
          id: existing.id,
          email: existing.email,
          display_name: existing.display_name,
          is_anonymous: Boolean(existing.is_anonymous),
          context: existing.context_json ? JSON.parse(existing.context_json) : undefined,
          created_at: existing.created_at,
          updated_at: existing.updated_at,
        };
      }
    }

    // Create an anonymous learner identity
    const newId = learnerId || `learner_anon_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const now = new Date().toISOString();

    await this.db
      .prepare(
        `INSERT INTO learners (id, is_anonymous, created_at, updated_at)
         VALUES (?, 1, ?, ?)`
      )
      .bind(newId, now, now)
      .run();

    return {
      id: newId,
      is_anonymous: true,
      created_at: now,
      updated_at: now,
    };
  }

  async updateLearningContext(learnerId: string, context: LearningContext): Promise<void> {
    const now = new Date().toISOString();
    await this.db
      .prepare(
        `UPDATE learners 
         SET context_json = ?, updated_at = ? 
         WHERE id = ?`
      )
      .bind(JSON.stringify(context), now, learnerId)
      .run();
  }

  async recordLessonCompletion(
    learnerId: string,
    lessonId: string,
    lessonVersionId: string
  ): Promise<LearnerProgress> {
    const now = new Date().toISOString();
    const id = `prog_${learnerId}_${lessonId}`;

    await this.db
      .prepare(
        `INSERT INTO learner_progress (id, learner_id, lesson_id, lesson_version_id, is_completed, last_accessed_at, completed_at)
         VALUES (?, ?, ?, ?, 1, ?, ?)
         ON CONFLICT(learner_id, lesson_id) DO UPDATE SET
           is_completed = 1,
           lesson_version_id = ?,
           last_accessed_at = ?,
           completed_at = COALESCE(completed_at, ?)`
      )
      .bind(id, learnerId, lessonId, lessonVersionId, now, now, lessonVersionId, now, now)
      .run();

    return {
      id,
      learner_id: learnerId,
      lesson_id: lessonId,
      lesson_version_id: lessonVersionId,
      is_completed: true,
      last_accessed_at: now,
      completed_at: now,
    };
  }

  async getLearnerMastery(learnerId: string): Promise<LearnerMastery[]> {
    const result = await this.db
      .prepare('SELECT * FROM learner_mastery WHERE learner_id = ? ORDER BY updated_at DESC')
      .bind(learnerId)
      .all<LearnerMastery>();

    return result.results || [];
  }
}
