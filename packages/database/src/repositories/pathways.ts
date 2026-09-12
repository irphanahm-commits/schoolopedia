import { D1Database } from '@cloudflare/workers-types';
import { Institution, Career, Opportunity, Pathway } from '@schoolopedia/types';

export class PathwaysRepository {
  constructor(private db: D1Database) {}

  async listInstitutions(countryCode?: string): Promise<Institution[]> {
    let query = `
      SELECT i.*, j.name as jurisdiction_name
      FROM institutions i
      JOIN jurisdictions j ON i.jurisdiction_id = j.id
    `;
    const params: string[] = [];

    if (countryCode) {
      query += ` WHERE i.country_code = ?`;
      params.push(countryCode.toUpperCase());
    }

    query += ` ORDER BY i.ranking_national ASC, i.name ASC`;

    const stmt = params.length > 0 ? this.db.prepare(query).bind(...params) : this.db.prepare(query);
    const { results } = await stmt.all<any>();
    return (results || []).map(r => ({
      ...r,
      is_verified: Boolean(r.is_verified)
    }));
  }

  async listCareers(): Promise<Career[]> {
    const { results } = await this.db.prepare(`
      SELECT * FROM careers ORDER BY median_annual_salary DESC
    `).all<Career>();
    return results || [];
  }

  async getCareerWithPathway(slug: string): Promise<{ career: Career; pathway?: Pathway; skills: any[]; subjects: any[] } | null> {
    const career = await this.db.prepare(`
      SELECT * FROM careers WHERE slug = ?
    `).bind(slug).first<Career>();

    if (!career) return null;

    const pathwayRow = await this.db.prepare(`
      SELECT * FROM pathways WHERE career_id = ? LIMIT 1
    `).bind(career.id).first<any>();

    const pathway: Pathway | undefined = pathwayRow ? {
      ...pathwayRow,
      steps: JSON.parse(pathwayRow.steps_json)
    } : undefined;

    const { results: skills } = await this.db.prepare(`
      SELECT s.*, cs.importance_level
      FROM skills s
      JOIN career_skills cs ON s.id = cs.skill_id
      WHERE cs.career_id = ?
    `).bind(career.id).all();

    const { results: subjects } = await this.db.prepare(`
      SELECT subj.name, subj.slug, cs.relevance_explanation
      FROM subjects subj
      JOIN career_subjects cs ON subj.id = cs.subject_id
      WHERE cs.career_id = ?
    `).bind(career.id).all();

    return {
      career,
      pathway,
      skills: skills || [],
      subjects: subjects || []
    };
  }

  async listOpportunities(type?: string): Promise<Opportunity[]> {
    let query = `SELECT * FROM opportunities`;
    const params: string[] = [];

    if (type) {
      query += ` WHERE type = ?`;
      params.push(type.toUpperCase());
    }

    query += ` ORDER BY is_verified DESC, created_at DESC`;

    const stmt = params.length > 0 ? this.db.prepare(query).bind(...params) : this.db.prepare(query);
    const { results } = await stmt.all<any>();
    return (results || []).map(r => ({
      ...r,
      is_verified: Boolean(r.is_verified)
    }));
  }
}
