import { D1Database } from '@cloudflare/workers-types';
import { Country, Jurisdiction, Grade, Subject, Course, Unit, LearningObjective } from '@schoolopedia/types';

export class CurriculumRepository {
  constructor(private readonly db: D1Database) {}

  async getCountries(): Promise<Country[]> {
    const result = await this.db.prepare('SELECT * FROM countries ORDER BY name ASC').all<Country>();
    return result.results || [];
  }

  async getJurisdictions(countryCode?: string): Promise<Jurisdiction[]> {
    if (countryCode) {
      const result = await this.db
        .prepare(
          'SELECT j.* FROM jurisdictions j JOIN countries c ON j.country_id = c.id WHERE c.code = ? ORDER BY j.name ASC'
        )
        .bind(countryCode)
        .all<Jurisdiction>();
      return result.results || [];
    }
    const result = await this.db.prepare('SELECT * FROM jurisdictions ORDER BY name ASC').all<Jurisdiction>();
    return result.results || [];
  }

  async getCurriculumTree(jurisdictionSlug: string, gradeSlug: string, subjectSlug: string) {
    const courseQuery = `
      SELECT 
        c.id as course_id, c.title as course_title, c.slug as course_slug,
        g.id as grade_id, g.name as grade_name, g.level as grade_level,
        s.id as subject_id, s.name as subject_name,
        j.id as jurisdiction_id, j.name as jurisdiction_name,
        cv.version_number as curriculum_version, ay.name as academic_year
      FROM courses c
      JOIN grades g ON c.grade_id = g.id
      JOIN subjects s ON c.subject_id = s.id
      JOIN curriculum_versions cv ON c.curriculum_version_id = cv.id
      JOIN academic_years ay ON cv.academic_year_id = ay.id
      JOIN jurisdictions j ON g.jurisdiction_id = j.id
      WHERE j.slug = ? AND g.slug = ? AND s.slug = ? AND cv.status = 'PUBLISHED'
      LIMIT 1
    `;

    const courseRow = await this.db.prepare(courseQuery).bind(jurisdictionSlug, gradeSlug, subjectSlug).first<{
      course_id: string;
      course_title: string;
      course_slug: string;
      grade_name: string;
      subject_name: string;
      jurisdiction_name: string;
      curriculum_version: string;
      academic_year: string;
    }>();

    if (!courseRow) {
      return null;
    }

    const unitsResult = await this.db
      .prepare('SELECT * FROM units WHERE course_id = ? ORDER BY order_index ASC')
      .bind(courseRow.course_id)
      .all<Unit>();

    const units = unitsResult.results || [];
    const unitIds = units.map((u) => u.id);

    let objectives: LearningObjective[] = [];
    if (unitIds.length > 0) {
      const placeholders = unitIds.map(() => '?').join(',');
      const objResult = await this.db
        .prepare(`SELECT * FROM learning_objectives WHERE unit_id IN (${placeholders}) AND is_active = 1 ORDER BY order_index ASC`)
        .bind(...unitIds)
        .all<LearningObjective>();
      objectives = objResult.results || [];
    }

    return {
      course: courseRow,
      units: units.map((unit) => ({
        ...unit,
        objectives: objectives.filter((obj) => obj.unit_id === unit.id),
      })),
    };
  }
}
