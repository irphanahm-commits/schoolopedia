import { D1Database } from '@cloudflare/workers-types';
import {
  Lesson,
  LessonVersion,
  LearningObjective,
  Concept,
  Video,
  VideoMapping,
  FullLessonProjection,
} from '@schoolopedia/types';

export class LessonRepository {
  constructor(private readonly db: D1Database) {}

  async getLessonBySlug(slug: string): Promise<Lesson | null> {
    return this.db.prepare('SELECT * FROM lessons WHERE slug = ?').bind(slug).first<Lesson>();
  }

  async getFullLessonProjection(lessonIdOrSlug: string): Promise<FullLessonProjection | null> {
    const lesson = await this.db
      .prepare('SELECT * FROM lessons WHERE id = ? OR slug = ?')
      .bind(lessonIdOrSlug, lessonIdOrSlug)
      .first<Lesson>();

    if (!lesson) {
      return null;
    }

    const versionRow = await this.db
      .prepare(
        'SELECT * FROM lesson_versions WHERE lesson_id = ? AND status = ? ORDER BY version_number DESC LIMIT 1'
      )
      .bind(lesson.id, 'PUBLISHED')
      .first<{
        id: string;
        lesson_id: string;
        version_number: number;
        title: string;
        description: string;
        status: string;
        blocks_json: string;
        created_by?: string;
        published_at?: string;
        created_at: string;
      }>();

    if (!versionRow) {
      return null;
    }

    const currentVersion: LessonVersion = {
      ...versionRow,
      status: versionRow.status as LessonVersion['status'],
      blocks: JSON.parse(versionRow.blocks_json || '[]'),
    };

    const objective = await this.db
      .prepare('SELECT * FROM learning_objectives WHERE id = ?')
      .bind(lesson.primary_objective_id)
      .first<LearningObjective>();

    if (!objective) {
      return null;
    }

    const conceptsResult = await this.db
      .prepare(
        `SELECT c.* FROM concepts c 
         JOIN objective_concepts oc ON c.id = oc.concept_id 
         WHERE oc.objective_id = ?`
      )
      .bind(objective.id)
      .all<Concept>();

    const videosResult = await this.db
      .prepare(
        `SELECT v.*, vm.id as mapping_id, vm.role, vm.start_seconds, vm.end_seconds, vm.curation_notes
         FROM video_mappings vm
         JOIN videos v ON vm.video_id = v.id
         WHERE vm.lesson_version_id = ? AND v.state = 'AVAILABLE'`
      )
      .bind(currentVersion.id)
      .all<
        Omit<Video, 'quality_score'> & {
          quality_score_json?: string;
          mapping_id: string;
          role: VideoMapping['role'];
          start_seconds?: number;
          end_seconds?: number;
          curation_notes?: string;
        }
      >();

    const videos = (videosResult.results || []).map((row) => ({
      video: {
        id: row.id,
        youtube_video_id: row.youtube_video_id,
        title: row.title,
        channel_title: row.channel_title,
        channel_id: row.channel_id,
        duration_seconds: row.duration_seconds,
        state: row.state,
        quality_score: row.quality_score_json ? JSON.parse(row.quality_score_json) : undefined,
        last_verified_at: row.last_verified_at,
        created_at: row.created_at,
        updated_at: row.updated_at,
      },
      mapping: {
        id: row.mapping_id,
        lesson_version_id: currentVersion.id,
        video_id: row.id,
        role: row.role,
        start_seconds: row.start_seconds,
        end_seconds: row.end_seconds,
        curation_notes: row.curation_notes,
        created_at: row.created_at,
      },
    }));

    const practice = await this.db
      .prepare('SELECT id FROM practices WHERE lesson_id = ? LIMIT 1')
      .bind(lesson.id)
      .first<{ id: string }>();

    const quiz = await this.db
      .prepare('SELECT id FROM quizzes WHERE lesson_id = ? LIMIT 1')
      .bind(lesson.id)
      .first<{ id: string }>();

    const nextLessonsResult = await this.db
      .prepare(
        `SELECT l.id, l.title, l.slug 
         FROM lesson_next ln 
         JOIN lessons l ON ln.next_lesson_id = l.id 
         WHERE ln.lesson_id = ? 
         ORDER BY ln.order_index ASC`
      )
      .bind(lesson.id)
      .all<{ id: string; title: string; slug: string }>();

    const provenanceRow = await this.db
      .prepare(
        `SELECT s.authority_name, cv.version_number as curriculum_version, 
                s.curriculum_url as source_url, v.last_verified_at
         FROM learning_objectives lo
         JOIN units u ON lo.unit_id = u.id
         JOIN courses c ON u.course_id = c.id
         JOIN curriculum_versions cv ON c.curriculum_version_id = cv.id
         JOIN curriculum_frameworks cf ON cv.framework_id = cf.id
         JOIN education_systems es ON cf.education_system_id = es.id
         JOIN sources s ON es.jurisdiction_id = s.jurisdiction_id
         LEFT JOIN video_mappings vm ON vm.lesson_version_id = ?
         LEFT JOIN videos v ON vm.video_id = v.id
         WHERE lo.id = ?
         LIMIT 1`
      )
      .bind(currentVersion.id, objective.id)
      .first<{
        authority_name: string;
        curriculum_version: string;
        source_url: string;
        last_verified_at: string;
      }>();

    return {
      lesson,
      current_version: currentVersion,
      objective,
      concepts: conceptsResult.results || [],
      prerequisites: [],
      videos,
      practice_id: practice?.id,
      quiz_id: quiz?.id,
      next_lessons: nextLessonsResult.results || [],
      trust_provenance: {
        authority: provenanceRow?.authority_name || 'Official Education Authority',
        curriculum_version: provenanceRow?.curriculum_version || '2026-27',
        last_verified_at: provenanceRow?.last_verified_at || new Date().toISOString(),
        source_url: provenanceRow?.source_url || 'https://schoolopedia.com',
      },
    };
  }
}
