// Indian Board Syllabus & Video Registry
// Verified Marathon One-Shots, Chapter-Wise Masterclasses, and NCERT Board Alignment
// Covers CBSE, CISCE/ICSE, NIOS, and State Boards in Hindi, Hinglish, and English.

export interface IndianMarathonVideo {
  id: string;
  title: string;
  channelTitle: string;
  youtubeVideoId: string;
  durationFormatted: string;
  durationSeconds: number;
  language: 'Hindi & Hinglish' | 'English';
  type: 'FULL_SYLLABUS_MARATHON' | 'ONE_SHOT_CHAPTER' | 'ENTRANCE_REVISION';
  boardAlignment: string;
  educator: string;
  gradeSlug: string;
  subjectSlug: string;
  summary: string;
}

export interface IndianTopicAlternative {
  topicNumberOrSlug: string;
  video: {
    youtubeVideoId: string;
    title: string;
    channelTitle: string;
    durationFormatted: string;
    durationSeconds: number;
  };
  language: 'Hindi & Hinglish' | 'English';
  educator: string;
  pedagogyNotes: string;
}

export const INDIAN_MARATHON_REGISTRY: IndianMarathonVideo[] = [
  // ===========================================================================
  // Class 10 Mathematics (CBSE AISSE / NCERT / State Boards)
  // ===========================================================================
  {
    id: 'c10m_vedantu_marathon',
    title: 'Complete Class 10 Maths Maha-Marathon | All Chapters In One Video',
    channelTitle: 'Vedantu CBSE 10th',
    youtubeVideoId: 'GnHOY5WziI0',
    durationFormatted: '12h 45m',
    durationSeconds: 45900,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE AISSE Class 10 / NCERT Board Exam',
    educator: 'Kishore Sir',
    gradeSlug: 'grade-10',
    subjectSlug: 'mathematics',
    summary: 'Exhaustive full-syllabus marathon covering all 14 NCERT chapters from Real Numbers to Probability with previous year questions (PYQs) and board exam patterns.',
  },
  {
    id: 'c10m_pw_marathon',
    title: 'Class 10th COMPLETE MATHS Half Yearly & Board Marathon | Full Syllabus Revision',
    channelTitle: 'Physics Wallah Foundation',
    youtubeVideoId: 'UosO7XtBd-k',
    durationFormatted: '8h 20m',
    durationSeconds: 30000,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE AISSE Class 10 / NCERT Curriculum',
    educator: 'Physics Wallah Foundation Faculty',
    gradeSlug: 'grade-10',
    subjectSlug: 'mathematics',
    summary: 'High-yield master revision of core Class 10 algebra, trigonometry, geometry, and mensuration theorems by Physics Wallah Foundation.',
  },
  {
    id: 'c10m_vedantu_sprint',
    title: 'Complete Class 10 Maths Marathon | Full Syllabus Revision for Boards 2026',
    channelTitle: 'Vedantu CBSE 10th',
    youtubeVideoId: 'fePZ4ipaLTE',
    durationFormatted: '7h 15m',
    durationSeconds: 26100,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE Class 10 / ICSE / State Board',
    educator: 'Kishore Sir',
    gradeSlug: 'grade-10',
    subjectSlug: 'mathematics',
    summary: 'Rapid concept revision and 100 most anticipated board exam numericals and proofs.',
  },
  {
    id: 'c10m_dearsir_realnumbers',
    title: 'Real Numbers (वास्तविक संख्याएँ) in One Shot | Booster Series',
    channelTitle: 'Dear Sir',
    youtubeVideoId: 'zTMCDS5YmOE',
    durationFormatted: '1h 35m',
    durationSeconds: 5700,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Chapter 1 / CBSE Class 10',
    educator: 'Dear Sir (Aadil Khan)',
    gradeSlug: 'grade-10',
    subjectSlug: 'mathematics',
    summary: 'Euclid’s division lemma, Fundamental Theorem of Arithmetic, and irrationality proofs explained in signature engaging style.',
  },
  {
    id: 'c10m_dearsir_trig',
    title: 'Full Trigonometry Covered | Rapid Revision One Shot & Formulas',
    channelTitle: 'Dear Sir',
    youtubeVideoId: 'aZ764Jkw3Mk',
    durationFormatted: '1h 48m',
    durationSeconds: 6480,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Chapters 8 & 9 / CBSE Class 10',
    educator: 'Dear Sir',
    gradeSlug: 'grade-10',
    subjectSlug: 'mathematics',
    summary: 'Trigonometric ratios, identities (sin²θ + cos²θ = 1), values table trick, and heights and distances applications.',
  },
  {
    id: 'c10m_dearsir_quad',
    title: 'Quadratic Equations (द्विघात समीकरण) in One Shot | Formula & Solutions',
    channelTitle: 'Dear Sir',
    youtubeVideoId: '73l1NADMVbs',
    durationFormatted: '1h 12m',
    durationSeconds: 4320,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Chapter 4 / CBSE Class 10',
    educator: 'Dear Sir',
    gradeSlug: 'grade-10',
    subjectSlug: 'mathematics',
    summary: 'Factorisation, completing square method, quadratic formula (Sridharacharya), and discriminant nature of roots.',
  },

  // ===========================================================================
  // Class 10 Science (CBSE AISSE / NCERT / State Boards)
  // ===========================================================================
  {
    id: 'c10s_vedantu_marathon',
    title: 'Complete Class 10 Science Marathon | Full Syllabus Revision for Pre-Boards & Boards',
    channelTitle: 'Vedantu CBSE 10th',
    youtubeVideoId: 'qpT9emB3E7U',
    durationFormatted: '9h 40m',
    durationSeconds: 34800,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE AISSE Class 10 / NCERT Science',
    educator: 'Krushi Mam',
    gradeSlug: 'grade-10',
    subjectSlug: 'science',
    summary: 'Full syllabus Science marathon encompassing Physics (Light, Electricity, Magnetism), Chemistry (Reactions, Acids, Metals, Carbon), and Biology (Life Processes, Reproduction, Heredity).',
  },
  {
    id: 'c10s_pw_basics',
    title: 'Class 10th Science : Complete Basics In One Shot | Make Your 10th Strong',
    channelTitle: 'Physics Wallah Foundation',
    youtubeVideoId: '1BHDPBFuI08',
    durationFormatted: '3h 15m',
    durationSeconds: 11700,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE Class 10 Foundation / NCERT',
    educator: 'Physics Wallah Team',
    gradeSlug: 'grade-10',
    subjectSlug: 'science',
    summary: 'Core scientific foundations covering chemical equations balancing, atomic theory, ray optics, Ohm’s law, and cellular metabolism.',
  },
  {
    id: 'c10s_pw_chem_reactions',
    title: 'Chemical Reactions And Equations | Complete Chapter in ONE SHOT',
    channelTitle: 'Physics Wallah Foundation',
    youtubeVideoId: 'JJD14urpQg4',
    durationFormatted: '2h 10m',
    durationSeconds: 7800,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Science Chapter 1 / CBSE Class 10',
    educator: 'Sanya Ma\'am (Physics Wallah)',
    gradeSlug: 'grade-10',
    subjectSlug: 'science',
    summary: 'Combination, decomposition, displacement, double displacement, redox reactions, corrosion, and rancidity with experimental visual demonstrations.',
  },
  {
    id: 'c10s_pw_electricity',
    title: 'Electricity in One Shot: Full Chapter | Warrior Series',
    channelTitle: 'Physics Wallah Foundation',
    youtubeVideoId: '9l8ZonAw3Ks',
    durationFormatted: '2h 45m',
    durationSeconds: 9900,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Science Chapter 11 / CBSE Class 10',
    educator: 'Physics Wallah Faculty',
    gradeSlug: 'grade-10',
    subjectSlug: 'science',
    summary: 'Electric potential, current, Ohm’s law, resistance in series and parallel, Joule heating effect, and electric power formulas.',
  },
  {
    id: 'c10s_pw_lifeprocesses',
    title: 'Life Processes in One Shot: Full Chapter Revision',
    channelTitle: 'Physics Wallah Foundation',
    youtubeVideoId: 'gvGFHb5_S3M',
    durationFormatted: '3h 05m',
    durationSeconds: 11100,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Science Chapter 5 / CBSE Class 10',
    educator: 'Physics Wallah Biology Faculty',
    gradeSlug: 'grade-10',
    subjectSlug: 'science',
    summary: 'Nutrition (autotrophic & heterotrophic), human digestive system, respiration, circulatory system (heart & double circulation), and excretion in humans and plants.',
  },
  {
    id: 'c10s_exphub_light',
    title: 'Light - Reflection & Refraction | Complete Chapter in One Shot',
    channelTitle: 'Exphub 9th & 10th',
    youtubeVideoId: '8Rwv2hvdZFo',
    durationFormatted: '2h 20m',
    durationSeconds: 8400,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Science Chapter 9 / CBSE Class 10',
    educator: 'Prashant Kirad',
    gradeSlug: 'grade-10',
    subjectSlug: 'science',
    summary: 'Spherical mirrors (concave & convex), ray diagrams, mirror formula, refractive index, Snell’s law, and lens formula with sign conventions.',
  },

  // ===========================================================================
  // Class 9 Mathematics & Science (CBSE / NCERT)
  // ===========================================================================
  {
    id: 'c9m_dearsir_numbersystem',
    title: 'Number System | Natural, Whole, Integers, Rational & Irrational Numbers',
    channelTitle: 'Dear Sir',
    youtubeVideoId: 'hmbcF97jlv0',
    durationFormatted: '1h 50m',
    durationSeconds: 6600,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Chapter 1 / CBSE Class 9',
    educator: 'Dear Sir',
    gradeSlug: 'grade-9',
    subjectSlug: 'mathematics',
    summary: 'Representing real numbers on the number line, operations on real numbers, laws of exponents, and rationalising denominators.',
  },
  {
    id: 'c9m_shobhit_numbersystem',
    title: 'Number System Class 9 in One Shot | Complete Lecture',
    channelTitle: 'Shobhit Nirwan - 9th',
    youtubeVideoId: 'IMnSIaPcqiE',
    durationFormatted: '2h 10m',
    durationSeconds: 7800,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Chapter 1 / CBSE Class 9',
    educator: 'Shobhit Nirwan',
    gradeSlug: 'grade-9',
    subjectSlug: 'mathematics',
    summary: 'Complete concept breakdown of Class 9 Number Systems with solved NCERT exercises and exemplar problems.',
  },

  // ===========================================================================
  // Class 8 Mathematics & Science (NCERT / CBSE Middle Stage)
  // ===========================================================================
  {
    id: 'c8m_mb_rational',
    title: 'Rational Numbers - Full Chapter Explanation & NCERT Solutions',
    channelTitle: 'Magnet Brains',
    youtubeVideoId: 's71xsxycp34',
    durationFormatted: '1h 45m',
    durationSeconds: 6300,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Class 8 Mathematics Chapter 1',
    educator: 'Magnet Brains Faculty',
    gradeSlug: 'grade-8',
    subjectSlug: 'mathematics',
    summary: 'Properties of rational numbers (closure, commutativity, associativity, distributive law) and finding rational numbers between any two numbers.',
  },
  {
    id: 'c8m_mb_lineareq',
    title: 'Linear Equations in One Variable - Full Chapter Explanation & Exercise',
    channelTitle: 'Magnet Brains',
    youtubeVideoId: '7_EtyPwzW_g',
    durationFormatted: '2h 15m',
    durationSeconds: 8100,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Class 8 Mathematics Chapter 2',
    educator: 'Magnet Brains Faculty',
    gradeSlug: 'grade-8',
    subjectSlug: 'mathematics',
    summary: 'Solving linear equations with variables on one side and both sides, cross-multiplication, and word problem applications.',
  },
  {
    id: 'c8m_khan_polynomials',
    title: 'Adding & Subtracting Polynomials (Hindi) | Class 8 India',
    channelTitle: 'Khan Academy India',
    youtubeVideoId: '5FdgaMRbw9I',
    durationFormatted: '12m 40s',
    durationSeconds: 760,
    language: 'Hindi & Hinglish',
    type: 'ONE_SHOT_CHAPTER',
    boardAlignment: 'NCERT Class 8 Mathematics Chapter 9',
    educator: 'Khan Academy India',
    gradeSlug: 'grade-8',
    subjectSlug: 'mathematics',
    summary: 'Bilingual Hindi-medium explanation of algebraic terms, like and unlike terms, and addition/subtraction algorithms.',
  },

  // ===========================================================================
  // Senior Secondary (Classes 11 & 12 / JEE Main & Advanced / NEET-UG)
  // ===========================================================================
  {
    id: 'c12p_ncertwallah_marathon',
    title: 'Class 12 Physics Marathon : Complete Modern Physics & Magnetism | Boards 2026',
    channelTitle: 'NCERT Wallah',
    youtubeVideoId: 'NpW-f7n0YIo',
    durationFormatted: '7h 30m',
    durationSeconds: 27000,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE AISSCE Class 12 / JEE Main / NEET',
    educator: 'Akshay Sir (NCERT Wallah)',
    gradeSlug: 'grade-12',
    subjectSlug: 'science',
    summary: 'Dual nature of radiation, atoms, nuclei, semiconductor devices, and magnetic effects of electric current for CBSE 12th Board examinations.',
  },
  {
    id: 'c12m_ncertwallah_marathon',
    title: 'Class 12 Maths Half Yearly Marathon | Complete Syllabus Revision',
    channelTitle: 'NCERT Wallah',
    youtubeVideoId: 'J5w5FvuQ4Uk',
    durationFormatted: '6h 15m',
    durationSeconds: 22500,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE AISSCE Class 12 / CUET Domain Maths',
    educator: 'Deepak Sir (NCERT Wallah)',
    gradeSlug: 'grade-12',
    subjectSlug: 'mathematics',
    summary: 'Relations and functions, matrices, determinants, continuity and differentiability, and applications of derivatives in single marathon.',
  },
  {
    id: 'c11c_pw_marathon',
    title: 'Class 11 Chemistry Half Yearly & Board Marathon | Complete Syllabus Revision',
    channelTitle: 'PW Class 11 Science',
    youtubeVideoId: 'zmP58r_1dA4',
    durationFormatted: '5h 45m',
    durationSeconds: 20700,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE Class 11 / JEE Foundation / NEET',
    educator: 'Aakash Sir',
    gradeSlug: 'grade-11',
    subjectSlug: 'science',
    summary: 'Some basic concepts of chemistry (mole concept), structure of atom, classification of elements, chemical bonding and molecular structure.',
  },
  {
    id: 'jee_pw_physics_oneshot',
    title: 'Complete Class 11th PHYSICS in 1 Shot | All Concepts & PYQs | JEE 2025/2026',
    channelTitle: 'Physics Wallah - Alakh Pandey',
    youtubeVideoId: 'FSlOdXN7leo',
    durationFormatted: '8h 20m',
    durationSeconds: 30000,
    language: 'Hindi & Hinglish',
    type: 'ENTRANCE_REVISION',
    boardAlignment: 'JEE Main & Advanced / NTA Official Syllabus',
    educator: 'Alakh Pandey',
    gradeSlug: 'grade-11',
    subjectSlug: 'science',
    summary: 'Kinematics, Newton’s laws of motion, work energy and power, rotational motion, gravitation, and thermodynamics by Alakh Pandey.',
  },
  {
    id: 'neet_competitionwallah_botany',
    title: 'Complete BOTANY in 1 Shot | All Concepts & PYQs | NEET 2026 Maharevision',
    channelTitle: 'Competition Wallah',
    youtubeVideoId: 'Cx73VWk_Rak',
    durationFormatted: '9h 10m',
    durationSeconds: 33000,
    language: 'Hindi & Hinglish',
    type: 'ENTRANCE_REVISION',
    boardAlignment: 'NEET-UG / NTA Medical Entrance',
    educator: 'Competition Wallah Faculty',
    gradeSlug: 'grade-12',
    subjectSlug: 'science',
    summary: 'Biological classification, plant kingdom, morphology of flowering plants, anatomy, photosynthesis in higher plants, and genetics.',
  },

  // ===========================================================================
  // English Language & Grammar (CBSE / ICSE / CUET Section 1A)
  // ===========================================================================
  {
    id: 'eng_dearsir_grammar_marathon',
    title: 'Basics Of English & Complete Grammar Course | Tenses, Voice, Modals, Full Course',
    channelTitle: 'Dear Sir',
    youtubeVideoId: '3oIAICs8N9I',
    durationFormatted: '3h 30m',
    durationSeconds: 12600,
    language: 'Hindi & Hinglish',
    type: 'FULL_SYLLABUS_MARATHON',
    boardAlignment: 'CBSE AISSE/AISSCE / ICSE / CUET English Section 1A',
    educator: 'Dear Sir',
    gradeSlug: 'grade-10',
    subjectSlug: 'english',
    summary: 'The iconic Dear Sir complete English grammar marathon masterclass covering all tenses, active/passive voice, narration, subject-verb agreement, and prepositions.',
  },
];

// Topic-level alternatives mapping specific topics to verified Hindi / Hinglish masterclasses
export const INDIAN_TOPIC_ALTERNATIVES: Record<string, IndianTopicAlternative> = {
  // Class 10 Maths Topics
  'real-numbers': {
    topicNumberOrSlug: 'real-numbers',
    video: {
      youtubeVideoId: 'zTMCDS5YmOE',
      title: 'Real Numbers (वास्तविक संख्याएँ) One Shot Booster',
      channelTitle: 'Dear Sir',
      durationFormatted: '1h 35m',
      durationSeconds: 5700,
    },
    language: 'Hindi & Hinglish',
    educator: 'Dear Sir',
    pedagogyNotes: 'Class 10 NCERT Chapter 1 complete concept walkthrough with board exam proofs.',
  },
  'polynomials': {
    topicNumberOrSlug: 'polynomials',
    video: {
      youtubeVideoId: 'WN59Vy59IJk',
      title: 'Polynomials (बहुपद) in One Shot Booster Series',
      channelTitle: 'Dear Sir',
      durationFormatted: '1h 15m',
      durationSeconds: 4500,
    },
    language: 'Hindi & Hinglish',
    educator: 'Dear Sir',
    pedagogyNotes: 'Geometrical meaning of zeroes, relationship between coefficients and zeroes of quadratic polynomials.',
  },
  'quadratic-equations': {
    topicNumberOrSlug: 'quadratic-equations',
    video: {
      youtubeVideoId: '73l1NADMVbs',
      title: 'Quadratic Equations (द्विघात समीकरण) in One Shot',
      channelTitle: 'Dear Sir',
      durationFormatted: '1h 12m',
      durationSeconds: 4320,
    },
    language: 'Hindi & Hinglish',
    educator: 'Dear Sir',
    pedagogyNotes: 'Nature of roots, quadratic formula, and word problems on speeds and areas.',
  },
  'introduction-to-trigonometry': {
    topicNumberOrSlug: 'introduction-to-trigonometry',
    video: {
      youtubeVideoId: 'nbuyle1CsSM',
      title: 'Trigonometry Class 10 Full Chapter | Concepts, Exercises & Basics',
      channelTitle: 'Dear Sir',
      durationFormatted: '1h 25m',
      durationSeconds: 5100,
    },
    language: 'Hindi & Hinglish',
    educator: 'Dear Sir',
    pedagogyNotes: 'Trick for sin, cos, tan tables and trigonometric identities.',
  },

  // Class 10 Science Topics
  'chemical-reactions': {
    topicNumberOrSlug: 'chemical-reactions',
    video: {
      youtubeVideoId: 'JJD14urpQg4',
      title: 'Chemical Reactions & Equations in ONE SHOT',
      channelTitle: 'Physics Wallah Foundation',
      durationFormatted: '2h 10m',
      durationSeconds: 7800,
    },
    language: 'Hindi & Hinglish',
    educator: 'Sanya Ma\'am (PW)',
    pedagogyNotes: 'NCERT Chapter 1: Types of chemical reactions, balancing equations, and oxidation-reduction.',
  },
  'life-processes': {
    topicNumberOrSlug: 'life-processes',
    video: {
      youtubeVideoId: 'gvGFHb5_S3M',
      title: 'Life Processes in One Shot: Full Chapter Revision',
      channelTitle: 'Physics Wallah Foundation',
      durationFormatted: '3h 05m',
      durationSeconds: 11100,
    },
    language: 'Hindi & Hinglish',
    educator: 'Physics Wallah Faculty',
    pedagogyNotes: 'NCERT Chapter 5: Human heart diagram, nephron excretion, and photosynthesis mechanism.',
  },
  'light-reflection-refraction': {
    topicNumberOrSlug: 'light-reflection-refraction',
    video: {
      youtubeVideoId: 'ZnwBLQkqgvw',
      title: 'Light - Reflection & Refraction in ONE SHOT',
      channelTitle: 'Physics Wallah Foundation',
      durationFormatted: '2h 30m',
      durationSeconds: 9000,
    },
    language: 'Hindi & Hinglish',
    educator: 'Rakshak Sir (PW)',
    pedagogyNotes: 'Ray diagrams, mirror formula, refractive index, and lens formula with sign convention.',
  },
  'electricity': {
    topicNumberOrSlug: 'electricity',
    video: {
      youtubeVideoId: '9l8ZonAw3Ks',
      title: 'Electricity in One Shot: Full Chapter | Warrior Series',
      channelTitle: 'Physics Wallah Foundation',
      durationFormatted: '2h 45m',
      durationSeconds: 9900,
    },
    language: 'Hindi & Hinglish',
    educator: 'Physics Wallah Faculty',
    pedagogyNotes: 'Ohm’s law, series/parallel combinations, and Joule’s heating effect numericals.',
  },

  // Class 8 Topics
  'rational-numbers': {
    topicNumberOrSlug: 'rational-numbers',
    video: {
      youtubeVideoId: 's71xsxycp34',
      title: 'Rational Numbers - Full Chapter Explanation NCERT Solutions',
      channelTitle: 'Magnet Brains',
      durationFormatted: '1h 45m',
      durationSeconds: 6300,
    },
    language: 'Hindi & Hinglish',
    educator: 'Magnet Brains Faculty',
    pedagogyNotes: 'NCERT Class 8 Chapter 1 properties and exercises.',
  },
  'linear-equations': {
    topicNumberOrSlug: 'linear-equations',
    video: {
      youtubeVideoId: '7_EtyPwzW_g',
      title: 'Linear Equations in One Variable - Full Chapter Explanation & Exercise',
      channelTitle: 'Magnet Brains',
      durationFormatted: '2h 15m',
      durationSeconds: 8100,
    },
    language: 'Hindi & Hinglish',
    educator: 'Magnet Brains Faculty',
    pedagogyNotes: 'NCERT Class 8 Chapter 2 step-by-step equation solving and word problems.',
  },
};

export function getIndianMarathonsForCourse(
  gradeSlug: string,
  subjectSlug: string,
  _jurisdictionSlug?: string
): IndianMarathonVideo[] {
  // First look for exact grade + subject match
  const exact = INDIAN_MARATHON_REGISTRY.filter(
    m => m.gradeSlug === gradeSlug && m.subjectSlug === subjectSlug
  );
  if (exact.length > 0) {
    return exact;
  }

  // Fallback to related subject marathons in nearby grades (e.g. general science or maths marathons)
  const related = INDIAN_MARATHON_REGISTRY.filter(m => m.subjectSlug === subjectSlug);
  if (related.length > 0) {
    return related.slice(0, 4);
  }

  // Fallback to flagship full-syllabus marathons
  return INDIAN_MARATHON_REGISTRY.slice(0, 4);
}

export function getIndianAlternativeForTopic(
  topicNumberOrSlug: string,
  topicTitle?: string
): IndianTopicAlternative | undefined {
  const normSlug = topicNumberOrSlug.toLowerCase().replace(/[^a-z0-9]/g, '-');
  if (INDIAN_TOPIC_ALTERNATIVES[normSlug]) {
    return INDIAN_TOPIC_ALTERNATIVES[normSlug];
  }

  // Search by title keywords
  if (topicTitle) {
    const normTitle = topicTitle.toLowerCase();
    if (normTitle.includes('real number') || normTitle.includes('rational number')) {
      return INDIAN_TOPIC_ALTERNATIVES['real-numbers'] || INDIAN_TOPIC_ALTERNATIVES['rational-numbers'];
    }
    if (normTitle.includes('polynomial')) {
      return INDIAN_TOPIC_ALTERNATIVES['polynomials'];
    }
    if (normTitle.includes('quadratic')) {
      return INDIAN_TOPIC_ALTERNATIVES['quadratic-equations'];
    }
    if (normTitle.includes('trigonometr')) {
      return INDIAN_TOPIC_ALTERNATIVES['introduction-to-trigonometry'];
    }
    if (normTitle.includes('chemical') || normTitle.includes('reaction')) {
      return INDIAN_TOPIC_ALTERNATIVES['chemical-reactions'];
    }
    if (normTitle.includes('life process') || normTitle.includes('photosynthesis') || normTitle.includes('plant')) {
      return INDIAN_TOPIC_ALTERNATIVES['life-processes'];
    }
    if (normTitle.includes('light') || normTitle.includes('reflection') || normTitle.includes('refraction')) {
      return INDIAN_TOPIC_ALTERNATIVES['light-reflection-refraction'];
    }
    if (normTitle.includes('electricity') || normTitle.includes('circuit') || normTitle.includes('current')) {
      return INDIAN_TOPIC_ALTERNATIVES['electricity'];
    }
    if (normTitle.includes('linear equation')) {
      return INDIAN_TOPIC_ALTERNATIVES['linear-equations'];
    }
  }

  return undefined;
}
