import { LearningObjective, Concept } from './education';

export type LessonType = 'CONCEPT' | 'PROCEDURE' | 'PROBLEM_SOLVING' | 'REVIEW' | 'PRACTICE' | 'APPLICATION';

export type ContentBlockType =
  | 'TEXT'
  | 'HEADING'
  | 'EXAMPLE'
  | 'IMAGE'
  | 'VIDEO'
  | 'RESOURCE'
  | 'CALLOUT'
  | 'PRACTICE'
  | 'QUIZ'
  | 'SUMMARY'
  | 'COMMON_MISTAKE';

export interface LessonContentBlock {
  id: string;
  type: ContentBlockType;
  order_index: number;
  data: Record<string, unknown>;
}

export type LessonPublishStatus = 'DRAFT' | 'READY_FOR_REVIEW' | 'PUBLISHED' | 'FLAGGED' | 'SUSPENDED' | 'ARCHIVED';

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  primary_objective_id: string;
  type: LessonType;
  created_at: string;
  updated_at: string;
}

export interface LessonVersion {
  id: string;
  lesson_id: string;
  version_number: number;
  title: string;
  description: string;
  status: LessonPublishStatus;
  blocks: LessonContentBlock[];
  created_by?: string;
  published_at?: string;
  created_at: string;
}

export type VideoState = 'AVAILABLE' | 'UNAVAILABLE' | 'PRIVATE' | 'REGION_RESTRICTED' | 'DELETED' | 'METADATA_CHANGED';

export interface VideoQualityScore {
  curriculum_alignment: number; // 30%
  topic_coverage: number;       // 20%
  grade_suitability: number;    // 15%
  explanation_quality: number;  // 15%
  creator_credibility: number;  // 10%
  freshness: number;            // 5%
  availability: number;         // 5%
  total_score: number;          // 0 - 100
}

export interface Video {
  id: string;
  youtube_video_id: string;
  title: string;
  channel_title: string;
  channel_id: string;
  duration_seconds: number;
  state: VideoState;
  quality_score?: VideoQualityScore;
  last_verified_at: string;
  created_at: string;
  updated_at: string;
}

export type VideoMappingRole = 'PRIMARY' | 'BACKUP_1' | 'BACKUP_2' | 'TEACHER_SELECTED';

export interface VideoMapping {
  id: string;
  lesson_version_id: string;
  video_id: string;
  role: VideoMappingRole;
  start_seconds?: number;
  end_seconds?: number;
  curation_notes?: string;
  created_at: string;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: 'DOCUMENT' | 'SIMULATION' | 'WORKSHEET' | 'TOOL' | 'REFERENCE';
  source_authority?: string;
  is_verified: boolean;
  created_at: string;
}

export interface FullLessonProjection {
  lesson: Lesson;
  current_version: LessonVersion;
  objective: LearningObjective;
  concepts: Concept[];
  prerequisites: Array<{ id: string; title: string; slug: string }>;
  videos: Array<{
    video: Video;
    mapping: VideoMapping;
  }>;
  practice_id?: string;
  quiz_id?: string;
  next_lessons: Array<{ id: string; title: string; slug: string }>;
  trust_provenance: {
    authority: string;
    curriculum_version: string;
    last_verified_at: string;
    source_url: string;
  };
}
