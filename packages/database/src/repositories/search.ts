import { D1Database } from '@cloudflare/workers-types';

export interface SearchResultItem {
  id: string;
  entity_type: string;
  entity_id: string;
  title: string;
  curriculum_context?: string;
  snippet?: string;
  canonical_url: string;
  rank?: number;
}

export class SearchRepository {
  constructor(private readonly db: D1Database) {}

  async search(query: string, limit: number = 20): Promise<SearchResultItem[]> {
    const cleanQuery = query.trim().replace(/['"^*]/g, '');
    if (!cleanQuery) {
      return [];
    }

    // Use FTS5 prefix match
    const ftsPattern = `${cleanQuery}*`;

    const sql = `
      SELECT 
        d.id, d.entity_type, d.entity_id, d.title, d.curriculum_context, d.snippet, d.canonical_url,
        rank
      FROM search_documents_fts fts
      JOIN search_documents d ON fts.rowid = d.rowid
      WHERE search_documents_fts MATCH ? AND d.is_indexable = 1
      ORDER BY rank, d.popularity_weight DESC
      LIMIT ?
    `;

    try {
      const result = await this.db.prepare(sql).bind(ftsPattern, limit).all<SearchResultItem>();
      return result.results || [];
    } catch {
      // Fallback to LIKE query if FTS syntax edge case occurs
      const fallbackSql = `
        SELECT id, entity_type, entity_id, title, curriculum_context, snippet, canonical_url
        FROM search_documents
        WHERE (title LIKE ? OR curriculum_context LIKE ? OR snippet LIKE ?) AND is_indexable = 1
        LIMIT ?
      `;
      const pattern = `%${cleanQuery}%`;
      const fallbackResult = await this.db
        .prepare(fallbackSql)
        .bind(pattern, pattern, pattern, limit)
        .all<SearchResultItem>();
      return fallbackResult.results || [];
    }
  }
}
