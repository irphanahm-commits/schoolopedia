// Course Lesson Sequence & Progression Navigation
// Computes ordered lessons, Next Lesson, Previous Lesson, and Course Overview

import { INDIAN_NCERT_CURRICULUM_DATABASE } from './indian-ncert-curriculum';
import { getCourseSyllabus } from './syllabus-data';
import { STANDARD_COURSES } from './curriculum-data';

export interface CourseLessonItem {
  index: number; // 1-based (e.g. 1, 2, 3...)
  slug: string;
  title: string;
  altTitle?: string;
  code?: string;
  url: string;
  unitTitle?: string;
}

export interface CourseSequenceResult {
  courseKey: string;
  courseTitle: string;
  courseUrl: string;
  currentIndex: number; // 1-based, 0 if not found
  totalLessons: number;
  currentLesson: CourseLessonItem | null;
  previousLesson: CourseLessonItem | null;
  nextLesson: CourseLessonItem | null;
  allLessons: CourseLessonItem[];
}

export function getCourseLessonSequence(
  country: string,
  jurisdiction: string,
  grade: string,
  subject: string,
  currentSlug: string
): CourseSequenceResult {
  const normalizedCountry = (country || 'us').toLowerCase();
  const normalizedJur = (jurisdiction || 'cbse').toLowerCase();
  const normalizedGrade = grade.toLowerCase();
  const normalizedSubject = subject.toLowerCase();

  const isIndia =
    normalizedCountry === 'in' ||
    ['cbse', 'icse', 'nios', 'maharashtra', 'uttar-pradesh', 'karnataka', 'tamil-nadu'].includes(
      normalizedJur
    ) ||
    normalizedJur.startsWith('in-');

  const courseBaseUrl = `/learn/${normalizedCountry}/${normalizedJur}/${normalizedGrade}/${normalizedSubject}`;
  const courseKey = `${normalizedCountry}:${normalizedJur}:${normalizedGrade}:${normalizedSubject}`;

  let allLessons: CourseLessonItem[] = [];
  let courseTitle = `${grade.replace('grade-', 'Grade ')} ${subject.charAt(0).toUpperCase() + subject.slice(1)}`;

  // 1. Try Indian NCERT Curricula Database
  const ncertKey = `${normalizedGrade}:${normalizedSubject}`;
  const ncertCurriculum = INDIAN_NCERT_CURRICULUM_DATABASE[ncertKey];

  if (isIndia && ncertCurriculum) {
    courseTitle = `${ncertCurriculum.classLabel} ${ncertCurriculum.subjectNameEnglish} (${ncertCurriculum.subjectNameHindi})`;
    allLessons = ncertCurriculum.chapters.map((ch, idx) => ({
      index: idx + 1,
      slug: ch.slug,
      title: ch.titleEnglish,
      altTitle: ch.titleHindi,
      code: ch.ncertCode,
      url: `${courseBaseUrl}/${ch.slug}`,
      unitTitle: `Chapter ${ch.chapterNumber}`,
    }));
  } else {
    // 2. Try Standard Course Syllabus from syllabus-data
    const syllabus = getCourseSyllabus(normalizedGrade, normalizedSubject);
    if (syllabus && syllabus.units && syllabus.units.length > 0) {
      courseTitle = `${syllabus.gradeName} ${syllabus.subjectName}`;
      let runningIndex = 1;
      for (const unit of syllabus.units) {
        for (const topic of unit.topics) {
          allLessons.push({
            index: runningIndex++,
            slug: topic.slug,
            title: topic.title,
            code: topic.standardCode,
            url: `${courseBaseUrl}/${topic.slug}`,
            unitTitle: `Unit ${unit.unitNumber}: ${unit.title}`,
          });
        }
      }
    } else {
      // 3. Fallback from STANDARD_COURSES
      const stdCourse = STANDARD_COURSES.find(
        (c) => c.gradeSlug === normalizedGrade && c.subjectSlug === normalizedSubject
      );
      if (stdCourse) {
        courseTitle = `${stdCourse.grade} ${stdCourse.subject}`;
      }
    }
  }

  // Find current lesson index
  let currentIndex = 0;
  const targetSlug = (currentSlug || '').toLowerCase();

  for (let i = 0; i < allLessons.length; i++) {
    const l = allLessons[i];
    const lSlug = l.slug.toLowerCase();
    if (
      lSlug === targetSlug ||
      lSlug.includes(targetSlug) ||
      targetSlug.includes(lSlug) ||
      // Match chapter numbers e.g. "chapter-1" or "ch01"
      (l.code && targetSlug.includes(l.code.toLowerCase()))
    ) {
      currentIndex = i + 1;
      break;
    }
  }

  // Fallback: if not found, default to index 1
  if (currentIndex === 0 && allLessons.length > 0) {
    currentIndex = 1;
  }

  const currentLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const previousLesson = currentIndex > 1 ? allLessons[currentIndex - 2] : null;
  const nextLesson = currentIndex > 0 && currentIndex < allLessons.length ? allLessons[currentIndex] : null;

  return {
    courseKey,
    courseTitle,
    courseUrl: courseBaseUrl,
    currentIndex,
    totalLessons: allLessons.length,
    currentLesson,
    previousLesson,
    nextLesson,
    allLessons,
  };
}
