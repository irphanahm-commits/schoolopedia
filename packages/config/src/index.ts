export const PLATFORM_CONFIG = {
  appName: 'Schoolopedia',
  domain: 'schoolopedia.com',
  defaultLanguage: 'en',
  defaultPassingScorePercentage: 80,
  maxDailyPracticeAttemptsPerObjective: 20,
  cacheTTL: {
    lessonProjectionSeconds: 86400, // 24 hours in KV
    curriculumTreeSeconds: 604800,  // 7 days in KV
    searchResultSeconds: 3600,      // 1 hour in KV
  },
  freeTierSafety: {
    maxKvWritesPerDay: 800,         // Stay under 1,000/day limit
    maxD1WritesPerDay: 80000,       // Stay under 100,000/day limit
    jobBatchSize: 10,
    outboxPollingMinutes: 5,
  },
  videoScoringWeights: {
    curriculumAlignment: 0.30,
    topicCoverage: 0.20,
    gradeSuitability: 0.15,
    explanationQuality: 0.15,
    creatorCredibility: 0.10,
    freshness: 0.05,
    availability: 0.05,
  },
} as const;

export const ROLES = {
  PUBLIC: 'PUBLIC',
  LEARNER: 'LEARNER',
  TEACHER: 'TEACHER',
  MODERATOR: 'MODERATOR',
  CURRICULUM_REVIEWER: 'CURRICULUM_REVIEWER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  SYSTEM: 'SYSTEM',
} as const;
