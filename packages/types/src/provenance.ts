export type SourceType =
  | 'API'
  | 'OPEN_DATA'
  | 'CSV'
  | 'JSON'
  | 'XML'
  | 'RSS'
  | 'HTML'
  | 'PDF'
  | 'DOCUMENT'
  | 'MANUAL';

export type TrustStatus =
  | 'UNVERIFIED'
  | 'SOURCE_CHECKED'
  | 'REVIEWED'
  | 'VERIFIED'
  | 'STALE'
  | 'REVIEW_REQUIRED'
  | 'SUSPENDED';

export type FreshnessStatus = 'CURRENT' | 'REVIEW_DUE' | 'STALE' | 'RETIRED';

export interface Source {
  id: string;
  jurisdiction_id: string;
  authority_name: string;
  source_type: SourceType;
  curriculum_url: string;
  standards_url?: string;
  document_url?: string;
  change_announcement_url?: string;
  parser_identifier: string;
  parser_version: string;
  last_checked_at?: string;
  last_successful_check_at?: string;
  trust_status: TrustStatus;
  created_at: string;
  updated_at: string;
}

export interface SourceSnapshot {
  id: string;
  source_id: string;
  sha256_hash: string;
  r2_storage_key: string;
  content_type: string;
  etag?: string;
  last_modified_header?: string;
  created_at: string;
}

export interface SourceChange {
  id: string;
  source_id: string;
  previous_snapshot_id?: string;
  current_snapshot_id: string;
  semantic_change_type: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'DETECTED' | 'ANALYZING' | 'REVIEW_REQUIRED' | 'VERIFIED' | 'PUBLISHED';
  detected_at: string;
  reviewed_at?: string;
  reviewed_by?: string;
}

export interface AuditLog {
  id: string;
  actor_id: string;
  actor_role: string;
  action: string;
  entity_type: string;
  entity_id: string;
  previous_state?: Record<string, unknown>;
  new_state?: Record<string, unknown>;
  context_metadata?: Record<string, unknown>;
  created_at: string;
}

export interface Report {
  id: string;
  reporter_id?: string;
  entity_type: 'LESSON' | 'VIDEO' | 'TEACHER_PROGRAM' | 'QUESTION' | 'CURRICULUM';
  entity_id: string;
  category:
    | 'INCORRECT_INFORMATION'
    | 'CURRICULUM_MISMATCH'
    | 'INAPPROPRIATE_CONTENT'
    | 'COPYRIGHT_CONCERN'
    | 'BROKEN_RESOURCE'
    | 'SPAM'
    | 'OTHER';
  details: string;
  status: 'REPORTED' | 'TRIAGED' | 'INVESTIGATING' | 'RESOLVED' | 'DISMISSED';
  decision?: 'KEEP' | 'EDIT_REQUIRED' | 'RESTRICT' | 'SUSPEND' | 'REMOVE';
  created_at: string;
  resolved_at?: string;
}
