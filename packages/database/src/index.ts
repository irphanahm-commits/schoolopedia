import { D1Database } from '@cloudflare/workers-types';
import { CurriculumRepository } from './repositories/curriculum';
import { LessonRepository } from './repositories/lesson';
import { AssessmentRepository } from './repositories/assessment';
import { LearnerRepository } from './repositories/learner';
import { SearchRepository } from './repositories/search';
import { JobsRepository } from './repositories/jobs';

export * from './repositories/curriculum';
export * from './repositories/lesson';
export * from './repositories/assessment';
export * from './repositories/learner';
export * from './repositories/search';
export * from './repositories/jobs';

export interface DatabaseContext {
  curriculum: CurriculumRepository;
  lessons: LessonRepository;
  assessments: AssessmentRepository;
  learners: LearnerRepository;
  search: SearchRepository;
  jobs: JobsRepository;
}

export function createDatabaseContext(db: D1Database): DatabaseContext {
  return {
    curriculum: new CurriculumRepository(db),
    lessons: new LessonRepository(db),
    assessments: new AssessmentRepository(db),
    learners: new LearnerRepository(db),
    search: new SearchRepository(db),
    jobs: new JobsRepository(db),
  };
}
