import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { D1Database, KVNamespace, R2Bucket } from '@cloudflare/workers-types';
import { createDatabaseContext } from '@schoolopedia/database';
import { PLATFORM_CONFIG } from '@schoolopedia/config';
import { logger } from '@schoolopedia/observability';
import {
  quizSubmissionRequestSchema,
  practiceAttemptRequestSchema,
  learningContextSchema,
  reportCreateSchema,
} from '@schoolopedia/validation';

export type Bindings = {
  DB: D1Database;
  KV: KVNamespace;
  R2: R2Bucket;
  ENVIRONMENT: string;
};

type Variables = {
  requestId: string;
};

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

// 1. Global Request ID Middleware
app.use('*', async (c, next) => {
  const requestId = c.req.header('X-Request-Id') || `req_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  c.set('requestId', requestId);
  c.header('X-Request-Id', requestId);
  await next();
});

// 2. Global CORS Middleware
app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
  })
);

// 3. Error Handling Middleware
app.onError((err, c) => {
  const requestId = c.get('requestId') || 'unknown';
  logger.error('Unhandled API error', err, { request_id: requestId, path: c.req.path });

  return c.json(
    {
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: err.message || 'An unexpected error occurred',
        request_id: requestId,
      },
    },
    500
  );
});

// Health check endpoint
app.get('/api/v1/health', async (c) => {
  return c.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: c.env.ENVIRONMENT || 'development',
    version: '0.1.0',
  });
});

// GET /api/v1/countries
app.get('/api/v1/countries', async (c) => {
  const ctx = createDatabaseContext(c.env.DB);
  const countries = await ctx.curriculum.getCountries();
  return c.json({ data: countries });
});

// GET /api/v1/jurisdictions
app.get('/api/v1/jurisdictions', async (c) => {
  const countryCode = c.req.query('country');
  const ctx = createDatabaseContext(c.env.DB);
  const jurisdictions = await ctx.curriculum.getJurisdictions(countryCode);
  return c.json({ data: jurisdictions });
});

// GET /api/v1/curriculum/tree
app.get('/api/v1/curriculum/tree', async (c) => {
  const jurisdiction = c.req.query('jurisdiction') || 'california';
  const grade = c.req.query('grade') || 'grade-8';
  const subject = c.req.query('subject') || 'mathematics';

  const cacheKey = `curr_tree:${jurisdiction}:${grade}:${subject}`;

  // Check KV Cache first (Zero-Cost Read Projection)
  if (c.env.KV) {
    try {
      const cached = await c.env.KV.get(cacheKey, 'json');
      if (cached) {
        c.header('X-Cache', 'HIT');
        return c.json({ data: cached });
      }
    } catch (e) {
      logger.warn('KV cache read failure, falling back to D1', { error: e });
    }
  }

  const ctx = createDatabaseContext(c.env.DB);
  const tree = await ctx.curriculum.getCurriculumTree(jurisdiction, grade, subject);

  if (!tree) {
    return c.json(
      {
        error: {
          code: 'CURRICULUM_NOT_FOUND',
          message: `Curriculum not found for ${jurisdiction}/${grade}/${subject}`,
          request_id: c.get('requestId'),
        },
      },
      404
    );
  }

  // Populate KV cache with safe TTL
  if (c.env.KV) {
    try {
      await c.env.KV.put(cacheKey, JSON.stringify(tree), {
        expirationTtl: PLATFORM_CONFIG.cacheTTL.curriculumTreeSeconds,
      });
    } catch (e) {
      logger.warn('KV cache write failed', { error: e });
    }
  }

  c.header('X-Cache', 'MISS');
  return c.json({ data: tree });
});

// GET /api/v1/lessons/:id_or_slug (Full Aggregate Projection)
app.get('/api/v1/lessons/:id_or_slug', async (c) => {
  const idOrSlug = c.req.param('id_or_slug');
  const cacheKey = `lesson_proj:${idOrSlug}`;

  // 1. Cache First (KV)
  if (c.env.KV) {
    try {
      const cached = await c.env.KV.get(cacheKey, 'json');
      if (cached) {
        c.header('X-Cache', 'HIT');
        return c.json({ data: cached });
      }
    } catch (e) {
      logger.warn('KV cache read failed', { error: e });
    }
  }

  // 2. Deterministic D1 Query
  const ctx = createDatabaseContext(c.env.DB);
  const projection = await ctx.lessons.getFullLessonProjection(idOrSlug);

  if (!projection) {
    return c.json(
      {
        error: {
          code: 'LESSON_NOT_FOUND',
          message: `Lesson '${idOrSlug}' could not be found or has no published version`,
          request_id: c.get('requestId'),
        },
      },
      404
    );
  }

  // 3. Cache Population
  if (c.env.KV) {
    try {
      await c.env.KV.put(cacheKey, JSON.stringify(projection), {
        expirationTtl: PLATFORM_CONFIG.cacheTTL.lessonProjectionSeconds,
      });
    } catch (e) {
      logger.warn('KV cache write failed', { error: e });
    }
  }

  c.header('X-Cache', 'MISS');
  return c.json({ data: projection });
});

// GET /api/v1/practices/:lesson_id
app.get('/api/v1/practices/:lesson_id', async (c) => {
  const lessonId = c.req.param('lesson_id');
  const ctx = createDatabaseContext(c.env.DB);
  const practice = await ctx.assessments.getPractice(lessonId);

  if (!practice) {
    return c.json(
      {
        error: {
          code: 'PRACTICE_NOT_FOUND',
          message: `Practice for lesson ${lessonId} not found`,
          request_id: c.get('requestId'),
        },
      },
      404
    );
  }

  return c.json({ data: practice });
});

// POST /api/v1/practices/attempts
app.post('/api/v1/practices/attempts', async (c) => {
  const body = await c.req.json();
  const parsed = practiceAttemptRequestSchema.safeParse(body);

  if (!parsed.success) {
    return c.json(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid practice attempt payload',
          details: parsed.error.format(),
          request_id: c.get('requestId'),
        },
      },
      400
    );
  }

  const learnerId = c.req.header('X-Learner-Id') || 'learner_anon_default';
  const ctx = createDatabaseContext(c.env.DB);

  // Check correctness deterministically
  const question = await c.env.DB.prepare('SELECT * FROM questions WHERE id = ?')
    .bind(parsed.data.question_id)
    .first<{ type: string; tolerance?: number }>();

  let isCorrect = false;
  if (question && parsed.data.selected_option_id) {
    const opt = await c.env.DB.prepare('SELECT is_correct FROM question_options WHERE id = ?')
      .bind(parsed.data.selected_option_id)
      .first<{ is_correct: number }>();
    isCorrect = opt?.is_correct === 1;
  }

  const result = await ctx.assessments.recordPracticeAttempt({
    learner_id: learnerId,
    practice_id: parsed.data.practice_id,
    question_id: parsed.data.question_id,
    selected_option_id: parsed.data.selected_option_id,
    numeric_value: parsed.data.numeric_value,
    is_correct: isCorrect,
  });

  return c.json({ data: result });
});

// GET /api/v1/quizzes/:lesson_id (Learner Safe: Strips is_correct)
app.get('/api/v1/quizzes/:lesson_id', async (c) => {
  const lessonId = c.req.param('lesson_id');
  const ctx = createDatabaseContext(c.env.DB);
  const quiz = await ctx.assessments.getQuizForLearner(lessonId);

  if (!quiz) {
    return c.json(
      {
        error: {
          code: 'QUIZ_NOT_FOUND',
          message: `Quiz for lesson ${lessonId} not found`,
          request_id: c.get('requestId'),
        },
      },
      404
    );
  }

  return c.json({ data: quiz });
});

// POST /api/v1/quizzes/submit (Server-Side Deterministic Grading)
app.post('/api/v1/quizzes/submit', async (c) => {
  const body = await c.req.json();
  const parsed = quizSubmissionRequestSchema.safeParse(body);

  if (!parsed.success) {
    return c.json(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid quiz submission format',
          details: parsed.error.format(),
          request_id: c.get('requestId'),
        },
      },
      400
    );
  }

  const learnerId = c.req.header('X-Learner-Id') || 'learner_anon_default';
  const ctx = createDatabaseContext(c.env.DB);

  try {
    const gradingResult = await ctx.assessments.gradeQuiz(parsed.data.quiz_id, parsed.data.answers, learnerId);
    return c.json({ data: gradingResult });
  } catch (err) {
    logger.error('Quiz grading error', err, { request_id: c.get('requestId') });
    return c.json(
      {
        error: {
          code: 'GRADING_FAILED',
          message: err instanceof Error ? err.message : 'Grading failed',
          request_id: c.get('requestId'),
        },
      },
      400
    );
  }
});

// GET /api/v1/search
app.get('/api/v1/search', async (c) => {
  const q = c.req.query('q') || '';
  const limit = Math.min(parseInt(c.req.query('limit') || '20', 10), 50);

  const ctx = createDatabaseContext(c.env.DB);
  const results = await ctx.search.search(q, limit);

  return c.json({
    data: results,
    meta: {
      query: q,
      total_results: results.length,
    },
  });
});

// POST /api/v1/learners/context
app.post('/api/v1/learners/context', async (c) => {
  const body = await c.req.json();
  const parsed = learningContextSchema.safeParse(body);

  if (!parsed.success) {
    return c.json(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid learning context format',
          details: parsed.error.format(),
          request_id: c.get('requestId'),
        },
      },
      400
    );
  }

  const learnerId = c.req.header('X-Learner-Id') || `learner_anon_${Date.now()}`;
  const ctx = createDatabaseContext(c.env.DB);
  await ctx.learners.getOrCreateLearner(learnerId);
  await ctx.learners.updateLearningContext(learnerId, parsed.data);

  return c.json({
    data: {
      learner_id: learnerId,
      context: parsed.data,
      updated_at: new Date().toISOString(),
    },
  });
});

// GET /api/v1/learners/:id/mastery
app.get('/api/v1/learners/:id/mastery', async (c) => {
  const learnerId = c.req.param('id');
  const ctx = createDatabaseContext(c.env.DB);
  const mastery = await ctx.learners.getLearnerMastery(learnerId);
  return c.json({ data: mastery });
});

// POST /api/v1/reports
app.post('/api/v1/reports', async (c) => {
  const body = await c.req.json();
  const parsed = reportCreateSchema.safeParse(body);

  if (!parsed.success) {
    return c.json(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid report format',
          details: parsed.error.format(),
          request_id: c.get('requestId'),
        },
      },
      400
    );
  }

  const id = `rep_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const now = new Date().toISOString();

  await c.env.DB.prepare(
    `INSERT INTO reports (id, reporter_id, entity_type, entity_id, category, details, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, 'REPORTED', ?)`
  )
    .bind(
      id,
      c.req.header('X-Learner-Id') || null,
      parsed.data.entity_type,
      parsed.data.entity_id,
      parsed.data.category,
      parsed.data.details,
      now
    )
    .run();

  return c.json({
    data: {
      id,
      status: 'REPORTED',
      message: 'Report received and queued for triage.',
    },
  });
});

// Cloudflare Worker Default Export (Fetch Handler & Scheduled Cron Outbox Handler)
export default {
  fetch: app.fetch,
  async scheduled(event: ScheduledEvent, env: Bindings, ctx: ExecutionContext) {
    logger.info('Cron triggered: Processing D1 Outbox Jobs', { time: event.scheduledTime });
    const dbCtx = createDatabaseContext(env.DB);
    const jobs = await dbCtx.jobs.acquireNextJobs(PLATFORM_CONFIG.freeTierSafety.jobBatchSize);

    for (const job of jobs) {
      try {
        logger.info(`Processing job ${job.id} (${job.type})`);
        // Handle job types: e.g. VIDEO_AVAILABILITY, SEARCH_INDEX, etc.
        await dbCtx.jobs.completeJob(job.id);
      } catch (err) {
        logger.error(`Job ${job.id} failed`, err);
        await dbCtx.jobs.failJob(job.id, err instanceof Error ? err.message : 'Unknown error', job.attempts, job.max_attempts);
      }
    }
  },
};
