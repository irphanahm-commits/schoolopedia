// Indian Schooling SEO, AEO, AIO & GEO Engine
// Optimized for Google Search, AI Overviews, Perplexity, ChatGPT Search, and Copilot.
// Prominent Keywords: ncert, cbse, class 10, class x, class 12, class xii, maths, science,
// sample papers, solved sample papers, previous years question papers (PYQs), and NCERT book names.

export interface IndianBookInfo {
  subjectName: string;
  bookEnglish: string;
  bookHindi: string;
  code: string;
  totalChapters: number;
}

export const INDIAN_NCERT_BOOKS_REGISTRY: Record<string, Record<string, IndianBookInfo>> = {
  'grade-10': {
    'science': {
      subjectName: 'Science',
      bookEnglish: 'NCERT Science Class X',
      bookHindi: 'एनसीईआरटी विज्ञान कक्षा 10',
      code: 'CBSE Code 086',
      totalChapters: 13,
    },
    'mathematics': {
      subjectName: 'Mathematics',
      bookEnglish: 'NCERT Mathematics Class X',
      bookHindi: 'एनसीईआरटी गणित कक्षा 10',
      code: 'CBSE Code 041 (Standard) / Code 241 (Basic)',
      totalChapters: 14,
    },
    'social-studies': {
      subjectName: 'Social Science (SST)',
      bookEnglish: 'NCERT Democratic Politics-II, India & Contemporary World-II, Contemporary India-II, Understanding Economic Development',
      bookHindi: 'लोकतांत्रिक राजनीति-२, भारत और समकालीन विश्व-२, समकालीन भारत-२, आर्थिक विकास की समझ',
      code: 'CBSE Code 087',
      totalChapters: 21,
    },
    'english': {
      subjectName: 'English Language & Literature',
      bookEnglish: 'First Flight & Footprints without Feet (Supplementary Reader)',
      bookHindi: 'फर्स्ट फ्लाइट एवं फुटप्रिंट्स विदाउट फीट',
      code: 'CBSE Code 184',
      totalChapters: 19,
    },
  },
  'grade-12': {
    'physics': {
      subjectName: 'Physics',
      bookEnglish: 'NCERT Physics Part I & Part II Class XII',
      bookHindi: 'एनसीईआरटी भौतिकी भाग 1 एवं भाग 2 कक्षा 12',
      code: 'CBSE Code 042',
      totalChapters: 14,
    },
    'chemistry': {
      subjectName: 'Chemistry',
      bookEnglish: 'NCERT Chemistry Part I & Part II Class XII',
      bookHindi: 'एनसीईआरटी रसायन विज्ञान भाग 1 एवं भाग 2 कक्षा 12',
      code: 'CBSE Code 043',
      totalChapters: 10,
    },
    'mathematics': {
      subjectName: 'Mathematics',
      bookEnglish: 'NCERT Mathematics Part I & Part II Class XII',
      bookHindi: 'एनसीईआरटी गणित भाग 1 एवं भाग 2 कक्षा 12',
      code: 'CBSE Code 041',
      totalChapters: 13,
    },
    'biology': {
      subjectName: 'Biology',
      bookEnglish: 'NCERT Biology Class XII',
      bookHindi: 'एनसीईआरटी जीव विज्ञान कक्षा 12',
      code: 'CBSE Code 044',
      totalChapters: 13,
    },
  },
  'grade-9': {
    'science': {
      subjectName: 'Science',
      bookEnglish: 'NCERT Science Class IX',
      bookHindi: 'एनसीईआरटी विज्ञान कक्षा 9',
      code: 'CBSE Code 086',
      totalChapters: 12,
    },
    'mathematics': {
      subjectName: 'Mathematics',
      bookEnglish: 'NCERT Mathematics Class IX',
      bookHindi: 'एनसीईआरटी गणित कक्षा 9',
      code: 'CBSE Code 041',
      totalChapters: 12,
    },
    'social-studies': {
      subjectName: 'Social Science (SST)',
      bookEnglish: 'Democratic Politics-I, India & Contemporary World-I, Contemporary India-I, Economics',
      bookHindi: 'लोकतांत्रिक राजनीति-१, भारत और समकालीन विश्व-१, समकालीन भारत-१, अर्थशास्त्र',
      code: 'CBSE Code 087',
      totalChapters: 20,
    },
    'english': {
      subjectName: 'English',
      bookEnglish: 'Beehive & Moments (Supplementary Reader)',
      bookHindi: 'बीहाइव एवं मोमेंट्स',
      code: 'CBSE Code 184',
      totalChapters: 20,
    },
  },
  'grade-11': {
    'physics': {
      subjectName: 'Physics',
      bookEnglish: 'NCERT Physics Part I & Part II Class XI',
      bookHindi: 'एनसीईआरटी भौतिकी भाग 1 एवं भाग 2 कक्षा 11',
      code: 'CBSE Code 042',
      totalChapters: 14,
    },
    'chemistry': {
      subjectName: 'Chemistry',
      bookEnglish: 'NCERT Chemistry Part I & Part II Class XI',
      bookHindi: 'एनसीईआरटी रसायन विज्ञान भाग 1 एवं भाग 2 कक्षा 11',
      code: 'CBSE Code 043',
      totalChapters: 9,
    },
    'mathematics': {
      subjectName: 'Mathematics',
      bookEnglish: 'NCERT Mathematics Class XI',
      bookHindi: 'एनसीईआरटी गणित कक्षा 11',
      code: 'CBSE Code 041',
      totalChapters: 14,
    },
  },
  'grade-8': {
    'science': {
      subjectName: 'Science',
      bookEnglish: 'NCERT Science Class VIII (Curiosity)',
      bookHindi: 'एनसीईआरटी विज्ञान कक्षा 8',
      code: 'NCERT Class 8 Science',
      totalChapters: 13,
    },
    'mathematics': {
      subjectName: 'Mathematics',
      bookEnglish: 'NCERT Mathematics Class VIII',
      bookHindi: 'एनसीईआरटी गणित कक्षा 8',
      code: 'NCERT Class 8 Mathematics',
      totalChapters: 13,
    },
  },
  'grade-7': {
    'science': {
      subjectName: 'Science',
      bookEnglish: 'NCERT Science Class VII',
      bookHindi: 'एनसीईआरटी विज्ञान कक्षा 7',
      code: 'NCERT Class 7 Science',
      totalChapters: 13,
    },
    'mathematics': {
      subjectName: 'Mathematics',
      bookEnglish: 'NCERT Mathematics Class VII',
      bookHindi: 'एनसीईआरटी गणित कक्षा 7',
      code: 'NCERT Class 7 Mathematics',
      totalChapters: 13,
    },
  },
  'grade-6': {
    'science': {
      subjectName: 'Science',
      bookEnglish: 'NCERT Science Class VI (Curiosity)',
      bookHindi: 'एनसीईआरटी विज्ञान कक्षा 6 (जिज्ञासा)',
      code: 'NCERT Class 6 Science',
      totalChapters: 11,
    },
    'mathematics': {
      subjectName: 'Mathematics',
      bookEnglish: 'NCERT Mathematics Class VI (Ganita Prakash)',
      bookHindi: 'एनसीईआरटी गणित कक्षा 6 (गणित प्रकाश)',
      code: 'NCERT Class 6 Mathematics',
      totalChapters: 10,
    },
  },
};

export function getIndianClassKeywords(gradeSlug: string, subjectSlug: string, jurisdictionSlug = 'cbse'): string[] {
  const classNum = gradeSlug.replace('grade-', '');
  const roman = classNum === '10' ? 'Class X' : classNum === '12' ? 'Class XII' : classNum === '9' ? 'Class IX' : classNum === '11' ? 'Class XI' : `Class ${classNum}`;
  const boardUpper = jurisdictionSlug.toUpperCase();

  const baseKeywords = [
    // Core Board & Class Variations
    `CBSE Class ${classNum}`,
    `CBSE ${roman}`,
    `Class ${classNum} CBSE`,
    `${roman} CBSE`,
    `NCERT Class ${classNum}`,
    `NCERT ${roman}`,
    `${boardUpper} Class ${classNum}`,

    // High Intent Exam Queries
    `Class ${classNum} sample papers`,
    `Class ${classNum} solved sample papers`,
    `Class ${classNum} previous years question papers`,
    `Class ${classNum} PYQs 2020 2024`,
    `Class ${classNum} solved board papers`,
    `CBSE Class ${classNum} official marking scheme`,
    `Class ${classNum} revision notes`,
    `Class ${classNum} chapter wise MCQs`,
    `Class ${classNum} assertion reasoning questions`,
    `Class ${classNum} one shot video masterclasses`,

    // Acclaimed Indian Educator Tags
    `Next Toppers Class ${classNum}`,
    `Next Toppers Prashant Kirad`,
    `Next Toppers Shobhit Nirwan`,
    `Dear Sir Class ${classNum}`,
    `Physics Wallah Class ${classNum}`,
    `Magnet Brains Hindi Medium Class ${classNum}`,
    `Vedantu Class ${classNum}`,
    `Digraj Singh Rajput SST`,
  ];

  const bookData = INDIAN_NCERT_BOOKS_REGISTRY[gradeSlug]?.[subjectSlug];
  if (bookData) {
    baseKeywords.push(
      bookData.bookEnglish,
      bookData.bookHindi,
      bookData.code,
      `${bookData.subjectName} Class ${classNum} NCERT Solutions`,
      `${bookData.subjectName} ${roman} solved questions`,
      `${bookData.subjectName} Class ${classNum} formula sheet`,
      `${bookData.subjectName} Class ${classNum} CBSE syllabus 2026`
    );
  }

  return baseKeywords;
}

export function getIndianStructuredData(params: {
  country: string;
  jurisdiction: string;
  gradeSlug: string;
  subjectSlug: string;
  subjectName: string;
  classLabel: string;
  canonicalUrl: string;
}) {
  const { jurisdiction, gradeSlug, subjectSlug, subjectName, classLabel, canonicalUrl } = params;
  const isClass10 = gradeSlug === 'grade-10';
  const isClass12 = gradeSlug === 'grade-12';
  const roman = isClass10 ? 'Class X' : isClass12 ? 'Class XII' : classLabel;
  const book = INDIAN_NCERT_BOOKS_REGISTRY[gradeSlug]?.[subjectSlug];
  const boardName = jurisdiction === 'cbse' ? 'Central Board of Secondary Education (CBSE)' : jurisdiction === 'icse' ? 'Council for Indian School Certificate Examinations (CISCE)' : 'State Board of School Education';

  // 1. Course Schema
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${boardName} ${classLabel} (${roman}) ${subjectName} - NCERT Solutions, 5-Year Solved Papers & Notes`,
    description: `Comprehensive curriculum and board examination suite for ${classLabel} (${roman}) ${subjectName}. Features authentic NCERT chapters, 5-year solved previous years question papers (2020–2024), chapter-wise MCQs, revision notes, and video masterclasses by Next Toppers and Physics Wallah.`,
    provider: {
      '@type': 'Organization',
      name: 'Schoolopedia',
      url: 'https://schoolopedia.com',
      logo: 'https://schoolopedia.com/icons/icon-512x512.png',
    },
    educationalCredentialAwarded: isClass10 ? 'CBSE All India Secondary School Examination (AISSE) Class X' : isClass12 ? 'CBSE All India Senior School Certificate Examination (AISSCE) Class XII' : `${boardName} ${classLabel} Certificate`,
    courseCode: book?.code || `${jurisdiction.toUpperCase()}-${classLabel}-${subjectSlug}`,
    inLanguage: ['en', 'hi'],
    isAccessibleForFree: true,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT150H',
    },
  };

  // 2. Learning Resource Schema
  const learningResourceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: `${classLabel} ${subjectName} NCERT Solved Papers & Revision Notes`,
    learningResourceType: ['Solved Sample Papers', 'Revision Notes', 'Interactive Multiple Choice Questions', 'Video Lecture'],
    educationalLevel: `${boardName} ${classLabel} (${roman})`,
    assesses: `${boardName} ${classLabel} Annual Board Examination`,
    isAccessibleForFree: true,
    author: {
      '@type': 'Organization',
      name: 'Schoolopedia Curricular Editorial Board & Verified Indian Educators',
    },
  };

  // 3. High-Intent AEO FAQ Schema (Google Featured Snippets & Perplexity Grounding)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How many chapters are in ${boardName} ${classLabel} ${subjectName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `According to the latest official NCERT curriculum for ${classLabel} (${roman}) ${subjectName}, there are ${book?.totalChapters || 13} chapters aligned with the NEP 2020 syllabus. Official textbooks prescribed are "${book?.bookEnglish || 'NCERT Textbook'}".`,
        },
      },
      {
        '@type': 'Question',
        name: `Where can I find CBSE ${classLabel} 5-year solved sample papers with marking schemes?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Schoolopedia provides complete 5-year solved sample papers (2024, 2023, 2022 Term 1 & 2, 2021, and 2020) for ${classLabel} ${subjectName} with official CBSE step-wise marking schemes, examiner alerts, and Section A through E question breakdowns.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the examination blueprint and pattern for ${classLabel} ${subjectName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The annual ${boardName} ${classLabel} board examination consists of 80 marks in theory and 20 marks in internal assessments. The paper is structured across 5 sections: Section A (20 1-mark objective/MCQs including Assertion-Reasoning), Section B (2-mark VSA), Section C (3-mark SA), Section D (5-mark LA), and Section E (4-mark case-based integrated questions).`,
        },
      },
      {
        '@type': 'Question',
        name: `What are the prescribed NCERT textbooks for ${classLabel} ${subjectName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The prescribed textbooks are "${book?.bookEnglish || 'NCERT Textbook'}" in English medium and "${book?.bookHindi || 'एनसीईआरटी'}" in Hindi medium, published by the National Council of Educational Research and Training (NCERT).`,
        },
      },
      {
        '@type': 'Question',
        name: `Are video masterclasses available for ${classLabel} chapters by Next Toppers and Indian educators?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, each chapter includes dedicated video masterclasses in both English and Hindi medium taught exclusively by verified top Indian educators from Next Toppers (Prashant Kirad, Shobhit Nirwan), Physics Wallah, Dear Sir, Magnet Brains, and Vedantu.`,
        },
      },
    ],
  };

  // 4. Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Schoolopedia',
        item: 'https://schoolopedia.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'India',
        item: 'https://schoolopedia.com/learn/in',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: boardName,
        item: `https://schoolopedia.com/learn/in/${jurisdiction}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${classLabel} (${roman})`,
        item: canonicalUrl,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: subjectName,
        item: canonicalUrl,
      },
    ],
  };

  return {
    courseSchema,
    learningResourceSchema,
    faqSchema,
    breadcrumbSchema,
  };
}
