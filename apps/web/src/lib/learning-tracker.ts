// Client-Side Learning Record & Progress Tracking Engine
// Persists study activity, video watch history, lesson completions, and quiz scores
// Supports real-time reactivity via browser custom events and localStorage cross-tab sync

export type LessonStudyStatus = 'unstarted' | 'in_progress' | 'completed';

export interface LessonRecord {
  lessonSlug: string;
  lessonTitle: string;
  lessonUrl: string;
  status: LessonStudyStatus;
  videoWatched: boolean;
  quizAttempted: boolean;
  quizScore?: number;
  quizTotal?: number;
  lastStudiedAt: string; // ISO string
  completedAt?: string; // ISO string
}

export interface CourseRecord {
  courseKey: string; // e.g. "in:cbse:grade-10:science"
  courseTitle: string;
  courseUrl: string;
  lastStudiedLessonSlug?: string;
  lastStudiedLessonTitle?: string;
  updatedAt: string;
  lessons: Record<string, LessonRecord>;
}

export interface LearningState {
  version: number;
  updatedAt: string;
  courses: Record<string, CourseRecord>;
}

const STORAGE_KEY = 'schoolopedia_learning_record_v1';
const EVENT_KEY = 'schoolopedia:learning_progress_updated';

function getInitialState(): LearningState {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    courses: {},
  };
}

// Safely load state from localStorage
export function loadLearningState(): LearningState {
  if (typeof window === 'undefined') return getInitialState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialState();
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && parsed.courses) {
      return parsed as LearningState;
    }
    return getInitialState();
  } catch (err) {
    console.warn('Failed to load learning record from storage:', err);
    return getInitialState();
  }
}

// Safely save state to localStorage and notify all listeners
function saveLearningState(state: LearningState): void {
  if (typeof window === 'undefined') return;
  try {
    state.updatedAt = new Date().toISOString();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: state }));
  } catch (err) {
    console.warn('Failed to save learning record to storage:', err);
  }
}

// Subscribe to state updates
export function subscribeToLearningProgress(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleCustomEvent = () => callback();
  const handleStorageEvent = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };

  window.addEventListener(EVENT_KEY, handleCustomEvent);
  window.addEventListener('storage', handleStorageEvent);

  return () => {
    window.removeEventListener(EVENT_KEY, handleCustomEvent);
    window.removeEventListener('storage', handleStorageEvent);
  };
}

// 1. Record Lesson Visit (auto-marks lesson as in_progress if not completed)
export function recordLessonVisit(
  courseKey: string,
  lessonSlug: string,
  metadata: {
    courseTitle: string;
    courseUrl: string;
    lessonTitle: string;
    lessonUrl: string;
  }
): void {
  if (typeof window === 'undefined') return;

  const state = loadLearningState();
  const now = new Date().toISOString();

  if (!state.courses[courseKey]) {
    state.courses[courseKey] = {
      courseKey,
      courseTitle: metadata.courseTitle,
      courseUrl: metadata.courseUrl,
      updatedAt: now,
      lessons: {},
    };
  }

  const course = state.courses[courseKey];
  course.courseTitle = metadata.courseTitle || course.courseTitle;
  course.courseUrl = metadata.courseUrl || course.courseUrl;
  course.lastStudiedLessonSlug = lessonSlug;
  course.lastStudiedLessonTitle = metadata.lessonTitle;
  course.updatedAt = now;

  const existing = course.lessons[lessonSlug];
  if (!existing) {
    course.lessons[lessonSlug] = {
      lessonSlug,
      lessonTitle: metadata.lessonTitle,
      lessonUrl: metadata.lessonUrl,
      status: 'in_progress',
      videoWatched: false,
      quizAttempted: false,
      lastStudiedAt: now,
    };
  } else {
    existing.lastStudiedAt = now;
    existing.lessonTitle = metadata.lessonTitle || existing.lessonTitle;
    existing.lessonUrl = metadata.lessonUrl || existing.lessonUrl;
    if (existing.status === 'unstarted') {
      existing.status = 'in_progress';
    }
  }

  saveLearningState(state);
}

// 2. Mark Video as Watched
export function markVideoWatched(
  courseKey: string,
  lessonSlug: string,
  metadata?: {
    courseTitle?: string;
    courseUrl?: string;
    lessonTitle?: string;
    lessonUrl?: string;
  }
): void {
  if (typeof window === 'undefined') return;

  const state = loadLearningState();
  const now = new Date().toISOString();

  if (!state.courses[courseKey]) {
    state.courses[courseKey] = {
      courseKey,
      courseTitle: metadata?.courseTitle || courseKey,
      courseUrl: metadata?.courseUrl || '#',
      updatedAt: now,
      lessons: {},
    };
  }

  const course = state.courses[courseKey];
  course.lastStudiedLessonSlug = lessonSlug;
  if (metadata?.lessonTitle) course.lastStudiedLessonTitle = metadata.lessonTitle;
  course.updatedAt = now;

  const existing = course.lessons[lessonSlug];
  if (!existing) {
    course.lessons[lessonSlug] = {
      lessonSlug,
      lessonTitle: metadata?.lessonTitle || lessonSlug,
      lessonUrl: metadata?.lessonUrl || '#',
      status: 'in_progress',
      videoWatched: true,
      quizAttempted: false,
      lastStudiedAt: now,
    };
  } else {
    existing.videoWatched = true;
    existing.lastStudiedAt = now;
  }

  saveLearningState(state);
}

// 3. Toggle Lesson Completed
export function toggleLessonCompleted(
  courseKey: string,
  lessonSlug: string,
  metadata?: {
    courseTitle?: string;
    courseUrl?: string;
    lessonTitle?: string;
    lessonUrl?: string;
  }
): boolean {
  if (typeof window === 'undefined') return false;

  const state = loadLearningState();
  const now = new Date().toISOString();

  if (!state.courses[courseKey]) {
    state.courses[courseKey] = {
      courseKey,
      courseTitle: metadata?.courseTitle || courseKey,
      courseUrl: metadata?.courseUrl || '#',
      updatedAt: now,
      lessons: {},
    };
  }

  const course = state.courses[courseKey];
  course.updatedAt = now;

  let isNowCompleted = false;
  const existing = course.lessons[lessonSlug];

  if (!existing) {
    course.lessons[lessonSlug] = {
      lessonSlug,
      lessonTitle: metadata?.lessonTitle || lessonSlug,
      lessonUrl: metadata?.lessonUrl || '#',
      status: 'completed',
      videoWatched: true,
      quizAttempted: false,
      lastStudiedAt: now,
      completedAt: now,
    };
    isNowCompleted = true;
  } else {
    if (existing.status === 'completed') {
      existing.status = 'in_progress';
      delete existing.completedAt;
      isNowCompleted = false;
    } else {
      existing.status = 'completed';
      existing.videoWatched = true;
      existing.completedAt = now;
      isNowCompleted = true;
    }
    existing.lastStudiedAt = now;
  }

  saveLearningState(state);
  return isNowCompleted;
}

// 4. Record Quiz Score
export function recordQuizResult(
  courseKey: string,
  lessonSlug: string,
  score: number,
  total: number
): void {
  if (typeof window === 'undefined') return;

  const state = loadLearningState();
  const now = new Date().toISOString();

  if (!state.courses[courseKey]) {
    state.courses[courseKey] = {
      courseKey,
      courseTitle: courseKey,
      courseUrl: '#',
      updatedAt: now,
      lessons: {},
    };
  }

  const course = state.courses[courseKey];
  const existing = course.lessons[lessonSlug];
  const passed = total > 0 && (score / total) >= 0.7;

  if (!existing) {
    course.lessons[lessonSlug] = {
      lessonSlug,
      lessonTitle: lessonSlug,
      lessonUrl: '#',
      status: passed ? 'completed' : 'in_progress',
      videoWatched: true,
      quizAttempted: true,
      quizScore: score,
      quizTotal: total,
      lastStudiedAt: now,
      completedAt: passed ? now : undefined,
    };
  } else {
    existing.quizAttempted = true;
    existing.quizScore = Math.max(existing.quizScore || 0, score);
    existing.quizTotal = total;
    existing.lastStudiedAt = now;
    if (passed) {
      existing.status = 'completed';
      existing.completedAt = existing.completedAt || now;
    }
  }

  course.updatedAt = now;
  saveLearningState(state);
}

// 5. Get Individual Lesson Record
export function getLessonRecord(courseKey: string, lessonSlug: string): LessonRecord | null {
  const state = loadLearningState();
  return state.courses[courseKey]?.lessons[lessonSlug] || null;
}

// 6. Get Course Progress Stats
export interface CourseProgressStats {
  courseKey: string;
  courseTitle: string;
  courseUrl: string;
  totalLessons: number;
  completedCount: number;
  watchedCount: number;
  inProgressCount: number;
  percentCompleted: number;
  lastStudiedSlug: string | null;
  lastStudiedTitle: string | null;
  lastStudiedAt: string | null;
  nextRecommendedSlug: string | null;
  nextRecommendedTitle: string | null;
}

export function getCourseProgressStats(
  courseKey: string,
  allLessons: Array<{ slug: string; title: string }>
): CourseProgressStats {
  const state = loadLearningState();
  const course = state.courses[courseKey];

  const totalLessons = allLessons.length;
  let completedCount = 0;
  let watchedCount = 0;
  let inProgressCount = 0;

  if (course) {
    for (const item of allLessons) {
      const rec = course.lessons[item.slug];
      if (rec) {
        if (rec.status === 'completed') completedCount++;
        else if (rec.status === 'in_progress') inProgressCount++;
        if (rec.videoWatched) watchedCount++;
      }
    }
  }

  const percentCompleted = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Find next recommended lesson (the first uncompleted lesson, or the first lesson if none completed)
  let nextRecommended: { slug: string; title: string } | null = null;
  if (course) {
    for (const item of allLessons) {
      const rec = course.lessons[item.slug];
      if (!rec || rec.status !== 'completed') {
        nextRecommended = item;
        break;
      }
    }
  } else if (allLessons.length > 0) {
    nextRecommended = allLessons[0];
  }

  return {
    courseKey,
    courseTitle: course?.courseTitle || courseKey,
    courseUrl: course?.courseUrl || '#',
    totalLessons,
    completedCount,
    watchedCount,
    inProgressCount,
    percentCompleted,
    lastStudiedSlug: course?.lastStudiedLessonSlug || null,
    lastStudiedTitle: course?.lastStudiedLessonTitle || null,
    lastStudiedAt: course?.updatedAt || null,
    nextRecommendedSlug: nextRecommended?.slug || null,
    nextRecommendedTitle: nextRecommended?.title || null,
  };
}

// 7. Get All Studied Courses
export function getAllStudyingRecords(): CourseRecord[] {
  const state = loadLearningState();
  return Object.values(state.courses).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}
