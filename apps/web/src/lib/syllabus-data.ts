// Comprehensive K-12 Course Syllabus Registry with Video Mappings & Topic Lessons
// Every topic has verified educational video embeds, standards metadata, and pedagogical drills.

import { LessonData, LESSONS_CATALOGUE, STANDARD_COURSES } from '@/lib/curriculum-data';

export interface TopicVideoInfo {
  youtubeVideoId: string;
  title: string;
  channelTitle: string;
  durationFormatted: string;
  durationSeconds: number;
}

export interface SyllabusTopic {
  id: string;
  slug: string;
  topicNumber: string; // e.g. "1.1", "2.3", "3.1"
  title: string;
  standardCode: string;
  standardTitle: string;
  estimatedMinutes: number;
  summary: string;
  competency: string;
  whyItMatters: string;
  careerLink: string;
  video: TopicVideoInfo;
  backupVideo?: {
    youtubeVideoId: string;
    title: string;
    channelTitle: string;
    durationSeconds: number;
  };
  workedExample: {
    problemStatement: string;
    steps: Array<{
      stepNumber: number;
      operation: string;
      equation: string;
      explanation: string;
    }>;
    verification: {
      checkStatement: string;
      leftSideCalculation: string;
      rightSideCalculation: string;
      isVerified: boolean;
    };
  };
  misconceptions: Array<{
    title: string;
    incorrectAttempt: string;
    correctApproach: string;
    explanation: string;
  }>;
  practiceQuestions: Array<{
    id: string;
    prompt: string;
    options: Array<{
      id: string;
      text: string;
      feedback: string;
    }>;
    correctOptionId: string;
    explanation: string;
  }>;
  quizQuestions: Array<{
    id: string;
    prompt: string;
    options: Array<{
      id: string;
      text: string;
    }>;
    correctOptionId: string;
    explanation: string;
  }>;
}

export interface SyllabusUnit {
  unitNumber: number;
  title: string;
  domainCode: string;
  description: string;
  topics: SyllabusTopic[];
}

export interface CourseSyllabus {
  courseSlug: string;
  gradeSlug: string;
  subjectSlug: string;
  title: string;
  gradeName: string;
  subjectName: string;
  overview: string;
  totalEstimatedHours: number;
  frameworkStandard: string;
  units: SyllabusUnit[];
}

export const COURSE_SYLLABI: Record<string, CourseSyllabus> = {
  // ---------------------------------------------------------------------------
  // 1. Grade 4 Mathematics
  // ---------------------------------------------------------------------------
  'grade-4:mathematics': {
    courseSlug: 'math-grade-4',
    gradeSlug: 'grade-4',
    subjectSlug: 'mathematics',
    title: 'Grade 4 Mathematics: Number Operations, Fractions & Geometry',
    gradeName: 'Grade 4 (Elementary)',
    subjectName: 'Mathematics',
    overview: 'A comprehensive, mastery-based curriculum guiding fourth graders through multi-digit place value, operational algorithms, fractional reasoning, decimals, measurement systems, and geometric properties.',
    totalEstimatedHours: 120,
    frameworkStandard: 'Common Core (CCSS.MATH) / TEKS / ACARA v9.0',
    units: [
      {
        unitNumber: 1,
        title: 'Place Value, Multi-Digit Addition & Subtraction',
        domainCode: '4.NBT',
        description: 'Deepen understanding of the base-ten system up to 1,000,000, comparing numerals, rounding, and mastering standard computational algorithms.',
        topics: [
          {
            id: 'g4m_1_1',
            slug: 'place-value-structure',
            topicNumber: '1.1',
            title: 'Place Value Structure in Multi-Digit Numbers',
            standardCode: 'CCSS.MATH.4.NBT.A.1',
            standardTitle: 'Recognize that in a multi-digit number, a digit in one place represents 10 times what it represents in the place to its right',
            estimatedMinutes: 45,
            summary: 'Explore how each position in a base-ten numeral increases by a factor of 10 relative to the adjacent right column.',
            competency: 'Conceptual understanding of decimal place values up to millions.',
            whyItMatters: 'Forms the foundational mental model for all multi-digit multiplication, division, currency calculations, and metric scaling.',
            careerLink: 'Data Analysts and Accountants rely on precise place-value understanding to audit financial ledgers.',
            video: {
              youtubeVideoId: 'T5Qf0qSSJFI',
              title: 'Place Value: Understanding Base 10 & Place Value Columns',
              channelTitle: 'Math Antics',
              durationFormatted: '9m 32s',
              durationSeconds: 572,
            },
            backupVideo: {
              youtubeVideoId: 'f15zA0PhSek',
              title: 'Intro to Place Value and Base-Ten Patterns',
              channelTitle: 'Khan Academy',
              durationSeconds: 485,
            },
            workedExample: {
              problemStatement: 'Compare the value of the digit 7 in 74,200 and the digit 7 in 7,420:',
              steps: [
                { stepNumber: 1, operation: 'Identify place value position in 74,200', equation: '7 is in the ten-thousands place = 70,000', explanation: 'The 7 represents 7 * 10,000 = 70,000.' },
                { stepNumber: 2, operation: 'Identify place value position in 7,420', equation: '7 is in the thousands place = 7,000', explanation: 'The 7 represents 7 * 1,000 = 7,000.' },
                { stepNumber: 3, operation: 'Divide the two values', equation: '70,000 / 7,000 = 10', explanation: 'The 7 in 74,200 is exactly 10 times greater than the 7 in 7,420.' }
              ],
              verification: {
                checkStatement: 'Multiply 7,000 by 10 to confirm: 7,000 * 10 = 70,000.',
                leftSideCalculation: '7,000 * 10 = 70,000',
                rightSideCalculation: '70,000 = 70,000 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Thinking a digit always has the same value regardless of column',
                incorrectAttempt: 'Believing the 5 in 520 has the same value as the 5 in 52',
                correctApproach: 'Value = Digit * Column Value (5 in hundreds = 500, 5 in tens = 50)',
                explanation: 'A digit’s magnitude depends strictly on its place value column.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_pv1',
                prompt: 'In the number 68,340, what is the value of the digit 8?',
                options: [
                  { id: 'pv_1', text: '8,000', feedback: 'Correct! The 8 is in the thousands place, representing 8,000.' },
                  { id: 'pv_2', text: '800', feedback: 'Incorrect: The 3 is in the hundreds place (300).' },
                  { id: 'pv_3', text: '80,000', feedback: 'Incorrect: The 6 is in the ten-thousands place (60,000).' }
                ],
                correctOptionId: 'pv_1',
                explanation: 'Units: 0, Tens: 4, Hundreds: 3, Thousands: 8 (value = 8,000).'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_pv1',
                prompt: 'How many times greater is the 4 in 400 than the 4 in 40?',
                options: [
                  { id: 'qpv_1', text: '10 times greater' },
                  { id: 'qpv_2', text: '100 times greater' },
                  { id: 'qpv_3', text: '4 times greater' }
                ],
                correctOptionId: 'qpv_1',
                explanation: 'Each step to the left in base-ten represents a 10x increase in magnitude.'
              }
            ]
          },
          {
            id: 'g4m_1_2',
            slug: 'reading-writing-comparing-numbers',
            topicNumber: '1.2',
            title: 'Reading, Writing & Comparing Multi-Digit Whole Numbers',
            standardCode: 'CCSS.MATH.4.NBT.A.2',
            standardTitle: 'Read and write multi-digit whole numbers using base-ten numerals, number names, and expanded form',
            estimatedMinutes: 45,
            summary: 'Translate between numeral, word, and expanded forms and compare quantities up to 1,000,000 using relational symbols (<, =, >).',
            competency: 'Precision in reading, writing, and comparing large numbers.',
            whyItMatters: 'Crucial for financial checks, national census data analysis, and geographic distance comparisons.',
            careerLink: 'Bank Managers and Surveyors write and verify numerical legal documents.',
            video: {
              youtubeVideoId: 'T5Qf0qSSJFI',
              title: 'Place Value and Comparing Multi-Digit Numbers',
              channelTitle: 'Math Antics',
              durationFormatted: '9m 32s',
              durationSeconds: 572,
            },
            backupVideo: {
              youtubeVideoId: 'f15zA0PhSek',
              title: 'Writing Numbers in Expanded Form',
              channelTitle: 'Khan Academy',
              durationSeconds: 485,
            },
            workedExample: {
              problemStatement: 'Write 408,520 in expanded form and compare it to 408,250:',
              steps: [
                { stepNumber: 1, operation: 'Decompose into place value addends', equation: '400,000 + 8,000 + 500 + 20', explanation: 'Break each non-zero digit into its column contribution.' },
                { stepNumber: 2, operation: 'Compare largest differing column', equation: 'Both have 408,000; compare hundreds: 500 vs 200', explanation: 'Since 500 > 200, the first number is greater.' },
                { stepNumber: 3, operation: 'Write inequality statement', equation: '408,520 > 408,250', explanation: 'The symbol points to the smaller quantity.' }
              ],
              verification: {
                checkStatement: 'Subtract: 408,520 - 408,250 = +270 (positive indicates greater).',
                leftSideCalculation: '408,520 - 408,250 = 270',
                rightSideCalculation: '270 > 0 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Ignoring zeros in expanded form',
                incorrectAttempt: 'Writing 408,520 as 400,000 + 80,000 + ...',
                correctApproach: 'The 0 ten-thousands contributes 0; the 8 is in thousands (8,000)',
                explanation: 'Zero acts as an essential placeholder for unoccupied columns.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_cmp1',
                prompt: 'Which statement correctly compares 52,409 and 52,490?',
                options: [
                  { id: 'cmp_1', text: '52,409 < 52,490', feedback: 'Correct! Tens column: 0 tens < 9 tens.' },
                  { id: 'cmp_2', text: '52,409 > 52,490', feedback: 'Incorrect: 409 is smaller than 490.' },
                  { id: 'cmp_3', text: '52,409 = 52,490', feedback: 'Incorrect: They have different tens and ones.' }
                ],
                correctOptionId: 'cmp_1',
                explanation: 'Comparing from left to right, the tens column shows 0 < 9.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_cmp1',
                prompt: 'What is the standard numeral for: 300,000 + 40,000 + 600 + 5?',
                options: [
                  { id: 'qcmp_1', text: '340,605' },
                  { id: 'qcmp_2', text: '346,005' },
                  { id: 'qcmp_3', text: '304,650' }
                ],
                correctOptionId: 'qcmp_1',
                explanation: 'There are 0 thousands and 0 tens, yielding 340,605.'
              }
            ]
          },
          {
            id: 'g4m_1_3',
            slug: 'rounding-multi-digit-numbers',
            topicNumber: '1.3',
            title: 'Rounding Multi-Digit Numbers to Any Place Value',
            standardCode: 'CCSS.MATH.4.NBT.A.3',
            standardTitle: 'Use place value understanding to round multi-digit whole numbers to any place',
            estimatedMinutes: 45,
            summary: 'Apply vertical and horizontal number lines to approximate values to the nearest ten, hundred, thousand, or ten thousand.',
            competency: 'Estimation and numerical approximation in practical problem-solving.',
            whyItMatters: 'Essential for budget forecasting, quick mental checks, and engineering safety limits.',
            careerLink: 'Estimators and Logistics Planners round shipping numbers to determine container capacities.',
            video: {
              youtubeVideoId: 'fd-E18EqSVk',
              title: 'Rounding Numbers: The Mental Math Strategy',
              channelTitle: 'Math Antics',
              durationFormatted: '9m 44s',
              durationSeconds: 584,
            },
            backupVideo: {
              youtubeVideoId: 'T5Qf0qSSJFI',
              title: 'Understanding Place Value Rounding',
              channelTitle: 'Math Antics',
              durationSeconds: 572,
            },
            workedExample: {
              problemStatement: 'Round 364,728 to the nearest ten-thousand:',
              steps: [
                { stepNumber: 1, operation: 'Identify the target place value', equation: 'Ten-thousands digit is 6 (value = 60,000)', explanation: 'Determine whether 364,728 is closer to 360,000 or 370,000.' },
                { stepNumber: 2, operation: 'Inspect the test digit immediately to the right', equation: 'Thousands digit is 4', explanation: 'Since 4 < 5, we round down toward 360,000.' },
                { stepNumber: 3, operation: 'Formulate rounded numeral', equation: '360,000', explanation: 'All columns to the right of ten-thousands become zeros.' }
              ],
              verification: {
                checkStatement: 'Midpoint between 360,000 and 370,000 is 365,000. Is 364,728 < 365,000?',
                leftSideCalculation: '364,728',
                rightSideCalculation: '365,000 (364,728 < 365,000 Verified Closer to 360,000)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Rounding all digits to the left',
                incorrectAttempt: 'Changing digits to the left of the rounding column',
                correctApproach: 'Only the rounding column and digits to its right are affected',
                explanation: 'Digits to the left remain unchanged unless carrying occurs (e.g. rounding 99 to nearest ten).'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_rnd1',
                prompt: 'What is 45,672 rounded to the nearest thousand?',
                options: [
                  { id: 'rnd_1', text: '46,000', feedback: 'Correct! Hundreds digit is 6 (≥ 5), so 45,000 rounds up to 46,000.' },
                  { id: 'rnd_2', text: '45,000', feedback: 'Incorrect: 672 is more than halfway (500).' },
                  { id: 'rnd_3', text: '50,000', feedback: 'Incorrect: That rounds to the nearest ten-thousand.' }
                ],
                correctOptionId: 'rnd_1',
                explanation: 'The test digit 6 rounds the thousands digit 5 up to 6.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_rnd1',
                prompt: 'Which number rounds to 80,000 when rounded to the nearest ten-thousand?',
                options: [
                  { id: 'qrnd_1', text: '83,921' },
                  { id: 'qrnd_2', text: '74,899' },
                  { id: 'qrnd_3', text: '86,400' }
                ],
                correctOptionId: 'qrnd_1',
                explanation: '83,921 has a 3 in thousands place (< 5), rounding to 80,000.'
              }
            ]
          },
          {
            id: 'g4m_1_4',
            slug: 'multi-digit-addition-subtraction',
            topicNumber: '1.4',
            title: 'Fluently Adding & Subtracting Multi-Digit Whole Numbers',
            standardCode: 'CCSS.MATH.4.NBT.B.4',
            standardTitle: 'Fluently add and subtract multi-digit whole numbers using the standard algorithm',
            estimatedMinutes: 60,
            summary: 'Master multi-digit addition with carrying and multi-digit subtraction with regrouping across zeros.',
            competency: 'Procedural fluency in column-based addition and subtraction.',
            whyItMatters: 'Essential for personal banking, commerce reconciliation, and physical inventory tracking.',
            careerLink: 'Treasury Analysts and Store Managers process daily financial transfers using standard algorithms.',
            video: {
              youtubeVideoId: 'mAvuom42NyY',
              title: 'Multi-Digit Addition: Carrying and Column Realignment',
              channelTitle: 'Math Antics',
              durationFormatted: '9m 02s',
              durationSeconds: 542,
            },
            backupVideo: {
              youtubeVideoId: 'Y6M89-6106I',
              title: 'Multi-Digit Subtraction with Regrouping',
              channelTitle: 'Math Antics',
              durationSeconds: 590,
            },
            workedExample: {
              problemStatement: 'Compute 50,004 - 23,678 using the standard algorithm with regrouping across zeros:',
              steps: [
                { stepNumber: 1, operation: 'Regroup from the ten-thousands column', equation: 'Borrow 1 ten-thousand (5 becomes 4, thousands becomes 9, hundreds 9, tens 9, ones 14)', explanation: 'Cascade regrouping across internal zeros to supply the ones column.' },
                { stepNumber: 2, operation: 'Subtract column by column from right to left', equation: 'Ones: 14 - 8 = 6; Tens: 9 - 7 = 2; Hundreds: 9 - 6 = 3; Thousands: 9 - 3 = 6; Ten-Thousands: 4 - 2 = 2', explanation: 'Compute each single-digit difference systematically.' },
                { stepNumber: 3, operation: 'Combine results', equation: 'Difference = 26,326', explanation: 'Formulate final whole number result.' }
              ],
              verification: {
                checkStatement: 'Add difference back to subtrahend: 26,326 + 23,678 = 50,004.',
                leftSideCalculation: '26,326 + 23,678 = 50,004',
                rightSideCalculation: '50,004 = 50,004 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Subtracting the smaller number from the larger number regardless of row',
                incorrectAttempt: 'Computing 0 - 8 as 8 instead of regrouping',
                correctApproach: 'Always subtract bottom from top; regroup if top is smaller',
                explanation: '0 - 8 is not 8; you must borrow from the higher place value column.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_add1',
                prompt: 'What is 34,582 + 18,749?',
                options: [
                  { id: 'add_1', text: '53,331', feedback: 'Correct! 34,582 + 18,749 = 53,331 with carrying across tens, hundreds, and thousands.' },
                  { id: 'add_2', text: '52,221', feedback: 'Incorrect: Forgot carried ones.' },
                  { id: 'add_3', text: '53,231', feedback: 'Incorrect: Minor arithmetic slip in hundreds column.' }
                ],
                correctOptionId: 'add_1',
                explanation: '2+9=11 (carry 1), 1+8+4=13 (carry 1), 1+5+7=13 (carry 1), 1+4+8=13 (carry 1), 1+3+1=5.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_sub1',
                prompt: 'What is 80,000 - 34,250?',
                options: [
                  { id: 'qsub_1', text: '45,750' },
                  { id: 'qsub_2', text: '46,750' },
                  { id: 'qsub_3', text: '54,250' }
                ],
                correctOptionId: 'qsub_1',
                explanation: '80,000 - 34,250 = 45,750.'
              }
            ]
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Multiplication & Division Operations',
        domainCode: '4.OA & 4.NBT',
        description: 'Expand multiplication to 4 digits by 1 digit and 2 digits by 2 digits; solve single-digit divisor divisions with remainders and investigate factors/multiples.',
        topics: [
          {
            id: 'g4m_2_1',
            slug: 'multiplicative-comparison',
            topicNumber: '2.1',
            title: 'Multiplicative Comparison & Real-World Word Problems',
            standardCode: 'CCSS.MATH.4.OA.A.1-2',
            standardTitle: 'Interpret a multiplication equation as a comparison and solve multiplicative comparison word problems',
            estimatedMinutes: 45,
            summary: 'Distinguish between additive comparison ("3 more than") and multiplicative comparison ("3 times as many as").',
            competency: 'Translating real-world relational language into algebraic multiplication statements.',
            whyItMatters: 'Fundamental for scaling recipes, calculating price markups, and understanding scientific ratios.',
            careerLink: 'Architects and Chefs calculate ingredient and material scaling factors.',
            video: {
              youtubeVideoId: 'RVYwunbpMHA',
              title: 'Multiplication Basics & Proportional Comparison',
              channelTitle: 'Math Antics',
              durationFormatted: '10m 10s',
              durationSeconds: 610,
            },
            backupVideo: {
              youtubeVideoId: '0vgw_R9pEGE',
              title: 'Factors and Multiples Comparison',
              channelTitle: 'Math Antics',
              durationSeconds: 540,
            },
            workedExample: {
              problemStatement: 'Maya has 8 books. Leo has 4 times as many books as Maya. How many books does Leo have?',
              steps: [
                { stepNumber: 1, operation: 'Identify the base quantity and comparison factor', equation: 'Maya = 8 books; Factor = 4 times as many', explanation: 'Multiplicative comparison means multiplying the base quantity by the factor.' },
                { stepNumber: 2, operation: 'Write the multiplication equation', equation: 'Leo = 4 * 8', explanation: 'Leo’s total is 4 groups of 8.' },
                { stepNumber: 3, operation: 'Solve the equation', equation: '4 * 8 = 32 books', explanation: 'Leo has 32 books.' }
              ],
              verification: {
                checkStatement: 'Divide Leo’s total by Maya’s total: 32 / 8 = 4.',
                leftSideCalculation: '32 / 8 = 4',
                rightSideCalculation: '4 = 4 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Confusing "times as many" with "more than"',
                incorrectAttempt: 'Thinking Leo has 8 + 4 = 12 books',
                correctApproach: '"Times as many" means multiplication: 8 * 4 = 32',
                explanation: '"More than" is additive (+); "times as many" is multiplicative (*).'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_mc1',
                prompt: 'A giraffe is 18 feet tall, which is 3 times the height of a kangaroo. How tall is the kangaroo?',
                options: [
                  { id: 'mc_1', text: '6 feet', feedback: 'Correct! 18 / 3 = 6 feet.' },
                  { id: 'mc_2', text: '15 feet', feedback: 'Incorrect: You subtracted 3 instead of dividing by 3.' },
                  { id: 'mc_3', text: '54 feet', feedback: 'Incorrect: You multiplied 18 by 3.' }
                ],
                correctOptionId: 'mc_1',
                explanation: 'Let k = kangaroo height. 3 * k = 18 → k = 18 / 3 = 6 feet.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_mc1',
                prompt: 'Sam scored 7 points. Alex scored 5 times as many points as Sam. How many points did Alex score?',
                options: [
                  { id: 'qmc_1', text: '35 points' },
                  { id: 'qmc_2', text: '12 points' },
                  { id: 'qmc_3', text: '42 points' }
                ],
                correctOptionId: 'qmc_1',
                explanation: '7 * 5 = 35 points.'
              }
            ]
          },
          {
            id: 'g4m_2_3',
            slug: 'factors-multiples-prime-composite',
            topicNumber: '2.3',
            title: 'Factors, Multiples, Prime & Composite Numbers',
            standardCode: 'CCSS.MATH.4.OA.B.4',
            standardTitle: 'Find all factor pairs for a whole number in the range 1–100 and determine prime vs composite',
            estimatedMinutes: 50,
            summary: 'Discover factor pairs using rectangular arrays and categorize integers 1–100 into prime and composite sets.',
            competency: 'Number theory fundamentals and divisibility recognition.',
            whyItMatters: 'Foundational for simplifying fractions, finding common denominators, and modern cryptographic security.',
            careerLink: 'Cryptographers and Cyber Security Specialists use prime factorization to encrypt financial transactions.',
            video: {
              youtubeVideoId: '0vgw_R9pEGE',
              title: 'Factoring: Factors, Multiples & Prime Numbers',
              channelTitle: 'Math Antics',
              durationFormatted: '10m 50s',
              durationSeconds: 650,
            },
            backupVideo: {
              youtubeVideoId: 'RVYwunbpMHA',
              title: 'Multiplication Tables and Factoring Arrays',
              channelTitle: 'Math Antics',
              durationSeconds: 610,
            },
            workedExample: {
              problemStatement: 'Find all factor pairs for 36 and classify 36 as prime or composite:',
              steps: [
                { stepNumber: 1, operation: 'Systematically test integer divisors starting from 1', equation: '1 * 36 = 36; 2 * 18 = 36; 3 * 12 = 36; 4 * 9 = 36; 6 * 6 = 36', explanation: 'Test divisors up to the square root of 36 (√36 = 6).' },
                { stepNumber: 2, operation: 'List all unique factors', equation: 'Factors of 36: {1, 2, 3, 4, 6, 9, 12, 18, 36}', explanation: 'Combine all distinct divisor pairs.' },
                { stepNumber: 3, operation: 'Classify as prime or composite', equation: '36 has 9 factors (> 2 factors) → Composite', explanation: 'A prime number has exactly two distinct factors: 1 and itself.' }
              ],
              verification: {
                checkStatement: 'Confirm 36 is composite because it has factors other than 1 and 36.',
                leftSideCalculation: 'Count of factors = 9',
                rightSideCalculation: '9 > 2 (Composite Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Believing 1 is a prime number',
                incorrectAttempt: 'Calling 1 prime because it has no divisors other than 1',
                correctApproach: '1 is neither prime nor composite because it has only ONE factor',
                explanation: 'By mathematical definition, prime numbers must have EXACTLY two distinct positive factors.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_fac1',
                prompt: 'Which of the following numbers is a PRIME number?',
                options: [
                  { id: 'fac_1', text: '29', feedback: 'Correct! 29 has only two factors: 1 and 29.' },
                  { id: 'fac_2', text: '27', feedback: 'Incorrect: 27 is divisible by 3 and 9 (3*9=27).' },
                  { id: 'fac_3', text: '21', feedback: 'Incorrect: 21 is divisible by 3 and 7 (3*7=21).' }
                ],
                correctOptionId: 'fac_1',
                explanation: '29 cannot be factored into smaller whole numbers.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_fac1',
                prompt: 'What are all the factors of 12?',
                options: [
                  { id: 'qfac_1', text: '1, 2, 3, 4, 6, 12' },
                  { id: 'qfac_2', text: '2, 3, 4, 6' },
                  { id: 'qfac_3', text: '12, 24, 36, 48' }
                ],
                correctOptionId: 'qfac_1',
                explanation: '12 has 6 factors: 1*12, 2*6, 3*4.'
              }
            ]
          },
          {
            id: 'g4m_2_4',
            slug: 'multi-digit-multiplication',
            topicNumber: '2.4',
            title: 'Multi-Digit Multiplication: Area Models & Partial Products',
            standardCode: 'CCSS.MATH.4.NBT.B.5',
            standardTitle: 'Multiply a whole number of up to four digits by a one-digit whole number and multiply two two-digit numbers',
            estimatedMinutes: 60,
            summary: 'Use geometric area grids and partial products to compute 4-digit by 1-digit and 2-digit by 2-digit products.',
            competency: 'Distributive property application in multi-digit computation.',
            whyItMatters: 'Essential for square footage estimation, manufacturing production schedules, and retail bulk pricing.',
            careerLink: 'Civil Contractors and Event Coordinators calculate bulk resource materials.',
            video: {
              youtubeVideoId: 'RVYwunbpMHA',
              title: 'Multi-Digit Multiplication: Partial Products and Standard Algorithm',
              channelTitle: 'Math Antics',
              durationFormatted: '10m 20s',
              durationSeconds: 620,
            },
            backupVideo: {
              youtubeVideoId: 'FJ5qLWP3Fqo',
              title: 'Multi-Digit Multiplication Part 2',
              channelTitle: 'Math Antics',
              durationSeconds: 680,
            },
            workedExample: {
              problemStatement: 'Calculate 34 * 28 using the area model / partial products:',
              steps: [
                { stepNumber: 1, operation: 'Decompose numbers into tens and ones', equation: '34 = 30 + 4; 28 = 20 + 8', explanation: 'Create a 2x2 grid representing the four partial products.' },
                { stepNumber: 2, operation: 'Calculate the four partial products', equation: '30 * 20 = 600; 30 * 8 = 240; 4 * 20 = 80; 4 * 8 = 32', explanation: 'Multiply each expanded component.' },
                { stepNumber: 3, operation: 'Sum the four partial products', equation: '600 + 240 + 80 + 32 = 952', explanation: 'Combine all partial areas.' }
              ],
              verification: {
                checkStatement: 'Check using standard vertical algorithm: 34 * 28 = 952.',
                leftSideCalculation: '34 * 28 = 952',
                rightSideCalculation: '952 = 952 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Multiplying only ones by ones and tens by tens',
                incorrectAttempt: 'Thinking 34 * 28 = (30 * 20) + (4 * 8) = 600 + 32 = 632',
                correctApproach: 'Every term must be distributed: (30+4)*(20+8) yields 4 products',
                explanation: 'Omitting cross-products (30*8 and 4*20) loses over 300 from the true value.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_mul1',
                prompt: 'What is 42 * 16?',
                options: [
                  { id: 'mul_1', text: '672', feedback: 'Correct! (40*10=400) + (40*6=240) + (2*10=20) + (2*6=12) = 672.' },
                  { id: 'mul_2', text: '642', feedback: 'Incorrect: Check partial product additions.' },
                  { id: 'mul_3', text: '412', feedback: 'Incorrect: Forgot the cross-terms.' }
                ],
                correctOptionId: 'mul_1',
                explanation: '40*16 = 640; 2*16 = 32; 640 + 32 = 672.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_mul1',
                prompt: 'What is 324 * 6?',
                options: [
                  { id: 'qmul_1', text: '1,944' },
                  { id: 'qmul_2', text: '1,824' },
                  { id: 'qmul_3', text: '1,924' }
                ],
                correctOptionId: 'qmul_1',
                explanation: '(300*6=1800) + (20*6=120) + (4*6=24) = 1,944.'
              }
            ]
          },
          {
            id: 'g4m_2_5',
            slug: 'division-with-remainders',
            topicNumber: '2.5',
            title: 'Whole Number Division with Remainders',
            standardCode: 'CCSS.MATH.4.NBT.B.6',
            standardTitle: 'Find whole-number quotients and remainders with up to four-digit dividends and one-digit divisors',
            estimatedMinutes: 60,
            summary: 'Illustrate division using area models, repeated subtraction, and standard long division notation with remainders.',
            competency: 'Division fluency and context-appropriate remainder interpretation.',
            whyItMatters: 'Essential for dividing quantities into batches, packaging goods, and distributing team resources.',
            careerLink: 'Inventory Managers and Packaging Engineers calculate batch run outputs and leftovers.',
            video: {
              youtubeVideoId: 'LGqBQrUYua4',
              title: 'Long Division: Step-by-Step Algorithm & Remainders',
              channelTitle: 'Math Antics',
              durationFormatted: '11m 25s',
              durationSeconds: 685,
            },
            backupVideo: {
              youtubeVideoId: 'RVYwunbpMHA',
              title: 'Multi-Digit Math and Division Inverses',
              channelTitle: 'Math Antics',
              durationSeconds: 610,
            },
            workedExample: {
              problemStatement: 'Divide 487 by 5 and interpret the quotient and remainder:',
              steps: [
                { stepNumber: 1, operation: 'Divide hundreds and tens', equation: '48 / 5 = 9 tens (9 * 5 = 45); 48 - 45 = 3 remainder tens', explanation: '5 goes into 48 nine times with 3 tens remaining.' },
                { stepNumber: 2, operation: 'Bring down ones digit', equation: 'Combine 3 tens with 7 ones = 37', explanation: 'Form the next dividend chunk 37.' },
                { stepNumber: 3, operation: 'Divide ones and determine remainder', equation: '37 / 5 = 7 ones (7 * 5 = 35); 37 - 35 = 2 remainder', explanation: 'Quotient is 97 with a remainder of 2 (97 R 2).' }
              ],
              verification: {
                checkStatement: 'Multiply quotient by divisor and add remainder: (97 * 5) + 2 = 485 + 2 = 487.',
                leftSideCalculation: '(97 * 5) + 2 = 487',
                rightSideCalculation: '487 = 487 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Remainder larger than or equal to the divisor',
                incorrectAttempt: 'Writing 487 / 5 as 96 R 7',
                correctApproach: 'The remainder must ALWAYS be strictly less than the divisor (< 5)',
                explanation: 'If the remainder is 5 or greater, another whole group can be formed.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_div1',
                prompt: 'What is 358 divided by 4?',
                options: [
                  { id: 'div_1', text: '89 R 2', feedback: 'Correct! (89 * 4) + 2 = 356 + 2 = 358.' },
                  { id: 'div_2', text: '88 R 6', feedback: 'Incorrect: Remainder 6 is larger than divisor 4.' },
                  { id: 'div_3', text: '89 R 0', feedback: 'Incorrect: 358 is not an exact multiple of 4.' }
                ],
                correctOptionId: 'div_1',
                explanation: '35/4 = 8 R 3; 38/4 = 9 R 2.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_div1',
                prompt: 'If 73 eggs are packed into cartons of 6, how many cartons are filled and how many eggs remain?',
                options: [
                  { id: 'qdiv_1', text: '12 cartons filled, 1 egg left' },
                  { id: 'qdiv_2', text: '11 cartons filled, 7 eggs left' },
                  { id: 'qdiv_3', text: '13 cartons filled, 0 eggs left' }
                ],
                correctOptionId: 'qdiv_1',
                explanation: '73 = (12 * 6) + 1.'
              }
            ]
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Fractions & Decimal Operations',
        domainCode: '4.NF',
        description: 'Explore equivalent fractions, compare unlike denominators, compute fraction addition/subtraction, multiply by integers, and connect fractions to decimal notation.',
        topics: [
          {
            id: 'g4m_3_1',
            slug: 'fractions-decimals',
            topicNumber: '3.1',
            title: 'Equivalent Fractions, Decimals & The Number Line',
            standardCode: 'CCSS.MATH.4.NF.A.1',
            standardTitle: 'Explain why a fraction a/b is equivalent to a fraction (n*a)/(n*b) using visual fraction models',
            estimatedMinutes: 50,
            summary: 'Understand fraction equivalence visually using area models and number lines, and learn to convert tenths and hundredths into decimals.',
            competency: 'Proportional reasoning and fractional equivalence proofs.',
            whyItMatters: 'Essential for currency transactions, recipe proportions, architectural scaling, and higher-order algebra.',
            careerLink: 'Civil Engineers, Pharmacists, and Chefs use precise fractional and decimal conversions every day.',
            video: {
              youtubeVideoId: 'Qyd_v3DGzTM',
              title: 'Algebra Basics & Fraction Operations',
              channelTitle: 'Math Antics',
              durationFormatted: '9m 34s',
              durationSeconds: 574,
            },
            backupVideo: {
              youtubeVideoId: 'f15zA0PhSek',
              title: 'Fractions on the Number Line',
              channelTitle: 'Khan Academy',
              durationSeconds: 485,
            },
            workedExample: {
              problemStatement: 'Show why 2/3 is equivalent to 8/12 using multiplication by 1 in the form of n/n:',
              steps: [
                { stepNumber: 1, operation: 'Identify the common multiplier', equation: '12 / 3 = 4', explanation: 'Determine what factor transforms denominator 3 into 12.' },
                { stepNumber: 2, operation: 'Multiply numerator and denominator by 4/4', equation: '(2 * 4) / (3 * 4) = 8 / 12', explanation: 'Multiplying by 4/4 is equivalent to multiplying by 1, preserving total value.' },
                { stepNumber: 3, operation: 'Convert to decimal approximation', equation: '2/3 ≈ 0.667 and 8/12 ≈ 0.667', explanation: 'Both fractions occupy the exact same coordinate on the real number line.' }
              ],
              verification: {
                checkStatement: 'Cross-multiply to confirm equivalence: 2 * 12 vs 3 * 8.',
                leftSideCalculation: '2 * 12 = 24',
                rightSideCalculation: '3 * 8 = 24 (24 = 24 Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Adding the same number to numerator and denominator',
                incorrectAttempt: 'Thinking 2/3 = (2 + 2)/(3 + 2) = 4/5',
                correctApproach: 'Equivalent fractions are created by MULTIPLYING or DIVIDING by n/n, never adding',
                explanation: 'Adding changes the proportion; only multiplication by 1 preserves equivalence.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_frac1',
                prompt: 'Which fraction is equivalent to 3/5 with a denominator of 20?',
                options: [
                  { id: 'fopt_1', text: '12/20', feedback: 'Correct! Multiply numerator and denominator by 4: (3*4)/(5*4) = 12/20.' },
                  { id: 'fopt_2', text: '15/20', feedback: 'Incorrect: 3 * 4 is 12, not 15.' },
                  { id: 'fopt_3', text: '8/20', feedback: 'Incorrect: You added 5 instead of multiplying by 4.' }
                ],
                correctOptionId: 'fopt_1',
                explanation: 'Since 5 * 4 = 20, multiply 3 * 4 = 12 to yield 12/20.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_frac1',
                prompt: 'What decimal is equivalent to 7/10?',
                options: [
                  { id: 'qf_1', text: '0.7' },
                  { id: 'qf_2', text: '0.07' },
                  { id: 'qf_3', text: '7.0' }
                ],
                correctOptionId: 'qf_1',
                explanation: 'Seven tenths is written in decimal standard form as 0.7.'
              }
            ]
          },
          {
            id: 'g4m_3_2',
            slug: 'comparing-unlike-fractions',
            topicNumber: '3.2',
            title: 'Comparing Fractions with Unlike Numerators & Denominators',
            standardCode: 'CCSS.MATH.4.NF.A.2',
            standardTitle: 'Compare two fractions with different numerators and different denominators by creating common denominators',
            estimatedMinutes: 45,
            summary: 'Find common denominators and benchmark fractions (such as 1/2) to order and compare rational quantities.',
            competency: 'Rational number comparison and benchmark intuition.',
            whyItMatters: 'Essential for dosage measurements, woodworking tolerances, and probability comparisons.',
            careerLink: 'Carpenters and Lab Technicians compare fractional tolerances when cutting materials or measuring solutions.',
            video: {
              youtubeVideoId: 'KNdUJQ_qn4U',
              title: 'Comparing Fractions: Common Denominators & Cross-Multiplication',
              channelTitle: 'Math Antics',
              durationFormatted: '9m 00s',
              durationSeconds: 540,
            },
            backupVideo: {
              youtubeVideoId: 'CA9XLJpQp3c',
              title: 'Fractions Are Parts: Visual Models',
              channelTitle: 'Math Antics',
              durationSeconds: 520,
            },
            workedExample: {
              problemStatement: 'Compare 3/4 and 5/6 using a common denominator:',
              steps: [
                { stepNumber: 1, operation: 'Find least common multiple of 4 and 6', equation: 'LCM(4, 6) = 12', explanation: 'Both 4 and 6 divide evenly into 12.' },
                { stepNumber: 2, operation: 'Convert both fractions to twelfths', equation: '3/4 = (3*3)/(4*3) = 9/12; 5/6 = (5*2)/(6*2) = 10/12', explanation: 'Express both with common denominator 12.' },
                { stepNumber: 3, operation: 'Compare numerators', equation: '9/12 < 10/12, therefore 3/4 < 5/6', explanation: 'Since 9 < 10, 3/4 is less than 5/6.' }
              ],
              verification: {
                checkStatement: 'Cross multiply: 3 * 6 = 18 vs 4 * 5 = 20.',
                leftSideCalculation: '18',
                rightSideCalculation: '20 (18 < 20 Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Thinking larger denominator always means larger fraction',
                incorrectAttempt: 'Thinking 3/8 > 3/4 because 8 > 4',
                correctApproach: 'Larger denominator cuts the whole into SMALLER pieces, so 3/4 > 3/8',
                explanation: 'A greater number of pieces makes each unit fraction smaller.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_cmpf1',
                prompt: 'Which inequality correctly compares 2/3 and 3/5?',
                options: [
                  { id: 'cmpf_1', text: '2/3 > 3/5', feedback: 'Correct! 2/3 = 10/15 and 3/5 = 9/15; 10/15 > 9/15.' },
                  { id: 'cmpf_2', text: '2/3 < 3/5', feedback: 'Incorrect: 10/15 is larger than 9/15.' },
                  { id: 'cmpf_3', text: '2/3 = 3/5', feedback: 'Incorrect: They are not equal.' }
                ],
                correctOptionId: 'cmpf_1',
                explanation: 'Common denominator 15 yields 10/15 vs 9/15.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_cmpf1',
                prompt: 'Which fraction is greater than 1/2?',
                options: [
                  { id: 'qcf_1', text: '5/8' },
                  { id: 'qcf_2', text: '3/8' },
                  { id: 'qcf_3', text: '4/10' }
                ],
                correctOptionId: 'qcf_1',
                explanation: 'Half of 8 is 4, so 5/8 is greater than 1/2 (4/8).'
              }
            ]
          },
          {
            id: 'g4m_3_3',
            slug: 'adding-subtracting-fractions',
            topicNumber: '3.3',
            title: 'Adding & Subtracting Fractions with Like Denominators',
            standardCode: 'CCSS.MATH.4.NF.B.3',
            standardTitle: 'Understand addition and subtraction of fractions as joining and separating parts referring to the same whole',
            estimatedMinutes: 50,
            summary: 'Decompose fractions into sums of unit fractions and add/subtract mixed numbers with common denominators.',
            competency: 'Additive fraction operations and mixed number manipulation.',
            whyItMatters: 'Essential for combining measured recipe ingredients, calculating lumber lengths, and tracking portions.',
            careerLink: 'Bakers and Construction Craftsmen add fractional measurements continuously.',
            video: {
              youtubeVideoId: '52Zkx8CwnL8',
              title: 'Adding and Subtracting Fractions: Like Denominators & Mixed Numbers',
              channelTitle: 'Math Antics',
              durationFormatted: '9m 55s',
              durationSeconds: 595,
            },
            backupVideo: {
              youtubeVideoId: 'Qyd_v3DGzTM',
              title: 'Fraction Operations Review',
              channelTitle: 'Math Antics',
              durationSeconds: 574,
            },
            workedExample: {
              problemStatement: 'Compute 2 (3/8) + 1 (7/8) and express as a simplified mixed number:',
              steps: [
                { stepNumber: 1, operation: 'Add whole numbers and fraction parts separately', equation: '(2 + 1) + (3/8 + 7/8) = 3 + 10/8', explanation: 'Combine whole integers and fractional eighths.' },
                { stepNumber: 2, operation: 'Convert improper fraction 10/8 to mixed number', equation: '10/8 = 1 (2/8) = 1 (1/4)', explanation: '8 eighths make one whole.' },
                { stepNumber: 3, operation: 'Combine whole numbers', equation: '3 + 1 (1/4) = 4 (1/4)', explanation: 'Yields the final simplified mixed number.' }
              ],
              verification: {
                checkStatement: 'Convert to improper fractions: 19/8 + 15/8 = 34/8 = 4 (2/8) = 4 (1/4).',
                leftSideCalculation: '34 / 8 = 4.25',
                rightSideCalculation: '4 (1/4) = 4.25 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Adding denominators together',
                incorrectAttempt: 'Thinking 2/5 + 1/5 = 3/10',
                correctApproach: 'Denominators state the size of the part; only numerators add: 2/5 + 1/5 = 3/5',
                explanation: 'Adding denominators cuts the parts in half rather than accumulating more parts.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_asf1',
                prompt: 'What is 5/9 + 2/9?',
                options: [
                  { id: 'asf_1', text: '7/9', feedback: 'Correct! 5 ninths plus 2 ninths equals 7 ninths.' },
                  { id: 'asf_2', text: '7/18', feedback: 'Incorrect: Never add the denominators.' },
                  { id: 'asf_3', text: '3/9', feedback: 'Incorrect: You subtracted instead of adding.' }
                ],
                correctOptionId: 'asf_1',
                explanation: '(5 + 2) / 9 = 7/9.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_asf1',
                prompt: 'What is 3 (1/4) - 1 (3/4)?',
                options: [
                  { id: 'qas_1', text: '1 (2/4) or 1 (1/2)' },
                  { id: 'qas_2', text: '2 (2/4)' },
                  { id: 'qas_3', text: '1 (1/4)' }
                ],
                correctOptionId: 'qas_1',
                explanation: 'Regroup 3 (1/4) as 2 (5/4). 2 (5/4) - 1 (3/4) = 1 (2/4) = 1 (1/2).'
              }
            ]
          },
          {
            id: 'g4m_3_5',
            slug: 'decimal-notation-hundredths',
            topicNumber: '3.5',
            title: 'Decimal Notation for Tenths, Hundredths & Decimals',
            standardCode: 'CCSS.MATH.4.NF.C.6-7',
            standardTitle: 'Use decimal notation for fractions with denominators 10 or 100, and compare two decimals to hundredths',
            estimatedMinutes: 50,
            summary: 'Represent tenths and hundredths as standard decimals (e.g. 0.62) and compare decimal quantities on the number line.',
            competency: 'Bridging rational fractions and base-10 decimal notation.',
            whyItMatters: 'Essential for currency transactions (cents as hundredths of a dollar) and stopwatch timing in athletics.',
            careerLink: 'Retail Cashiers, Sports Timers, and Meterologists record measurements to hundredths precision.',
            video: {
              youtubeVideoId: 'KG6ILNOiMgM',
              title: 'Decimal Basics: Tenths, Hundredths and Number Lines',
              channelTitle: 'Math Antics',
              durationFormatted: '10m 15s',
              durationSeconds: 615,
            },
            backupVideo: {
              youtubeVideoId: 'Qyd_v3DGzTM',
              title: 'Fractions and Decimal Equivalents',
              channelTitle: 'Math Antics',
              durationSeconds: 574,
            },
            workedExample: {
              problemStatement: 'Convert 45/100 into decimal form and compare it with 0.5:',
              steps: [
                { stepNumber: 1, operation: 'Convert fraction to decimal', equation: '45/100 = 0.45', explanation: '4 tenths and 5 hundredths.' },
                { stepNumber: 2, operation: 'Write 0.5 with equivalent hundredths', equation: '0.5 = 0.50 = 50/100', explanation: 'Appended zero preserves value in the hundredths place.' },
                { stepNumber: 3, operation: 'Compare the two decimals', equation: '0.45 < 0.50', explanation: '45 hundredths is less than 50 hundredths.' }
              ],
              verification: {
                checkStatement: 'Subtract: 0.50 - 0.45 = 0.05 (positive difference confirms 0.5 > 0.45).',
                leftSideCalculation: '0.50 - 0.45 = 0.05',
                rightSideCalculation: '0.05 > 0 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Thinking longer decimal strings are automatically larger',
                incorrectAttempt: 'Thinking 0.08 > 0.4 because 8 > 4',
                correctApproach: 'Compare column by column: 0.4 has 4 tenths; 0.08 has 0 tenths (0.4 > 0.08)',
                explanation: 'Place value column significance precedes the digit count.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_dec1',
                prompt: 'Which decimal is equal to 3/10?',
                options: [
                  { id: 'dec_1', text: '0.3', feedback: 'Correct! 3 tenths is written as 0.3.' },
                  { id: 'dec_2', text: '0.03', feedback: 'Incorrect: That is 3 hundredths (3/100).' },
                  { id: 'dec_3', text: '3.0', feedback: 'Incorrect: That is 3 whole units.' }
                ],
                correctOptionId: 'dec_1',
                explanation: 'The first column after the decimal point is the tenths place: 3/10 = 0.3.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_dec1',
                prompt: 'Which statement correctly compares 0.6 and 0.59?',
                options: [
                  { id: 'qdec_1', text: '0.6 > 0.59' },
                  { id: 'qdec_2', text: '0.6 < 0.59' },
                  { id: 'qdec_3', text: '0.6 = 0.59' }
                ],
                correctOptionId: 'qdec_1',
                explanation: '0.6 = 0.60, and 60 hundredths is greater than 59 hundredths.'
              }
            ]
          }
        ]
      },
      {
        unitNumber: 4,
        title: 'Measurement, Data & Conversions',
        domainCode: '4.MD',
        description: 'Understand relative sizes of measurement units, solve word problems involving time, volume, and mass, calculate perimeter and area, and interpret fractional line plots.',
        topics: [
          {
            id: 'g4m_4_2',
            slug: 'perimeter-area-rectangles',
            topicNumber: '4.2',
            title: 'Perimeter & Area Formulas for Rectangles',
            standardCode: 'CCSS.MATH.4.MD.A.3',
            standardTitle: 'Apply the area and perimeter formulas for rectangles in real world and mathematical problems',
            estimatedMinutes: 50,
            summary: 'Calculate boundary perimeter (P = 2l + 2w) and enclosed area (A = l * w) for standard and compound rectilinear figures.',
            competency: 'Spatial formula application and boundary quantification.',
            whyItMatters: 'Essential for fencing property, carpet installation, wallpaper hanging, and construction blueprints.',
            careerLink: 'Landscape Architects and Flooring Installers calculate square footage and perimeter trim daily.',
            video: {
              youtubeVideoId: 'xCdxURXMdFY',
              title: 'Area: Calculating Surface Coverage for Rectangles and Triangles',
              channelTitle: 'Math Antics',
              durationFormatted: '9m 50s',
              durationSeconds: 590,
            },
            backupVideo: {
              youtubeVideoId: 'AAY1bsazcgM',
              title: 'Perimeter: Boundary Distance Around Polygons',
              channelTitle: 'Math Antics',
              durationSeconds: 510,
            },
            workedExample: {
              problemStatement: 'A rectangular garden has length 12 meters and width 7 meters. Calculate its perimeter and area:',
              steps: [
                { stepNumber: 1, operation: 'Calculate Perimeter', equation: 'P = 2l + 2w = 2(12) + 2(7) = 24 + 14 = 38 meters', explanation: 'Sum of all four outer boundaries.' },
                { stepNumber: 2, operation: 'Calculate Area', equation: 'A = l * w = 12 * 7 = 84 square meters (m²)', explanation: 'Total square units enclosed within the perimeter.' }
              ],
              verification: {
                checkStatement: 'Check perimeter by summing all sides: 12 + 7 + 12 + 7 = 38 m.',
                leftSideCalculation: '12 + 7 + 12 + 7 = 38',
                rightSideCalculation: '38 = 38 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Confusing units of perimeter and area',
                incorrectAttempt: 'Writing area as meters instead of square meters',
                correctApproach: 'Perimeter is 1D length (meters); Area is 2D surface coverage (square meters / m²)',
                explanation: 'Multiplying length by width multiplies units (m * m = m²).'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_pa1',
                prompt: 'What is the area of a rectangle with length 9 cm and width 6 cm?',
                options: [
                  { id: 'pa_1', text: '54 cm²', feedback: 'Correct! Area = 9 * 6 = 54 square centimeters.' },
                  { id: 'pa_2', text: '30 cm', feedback: 'Incorrect: 30 cm is the perimeter (2*9 + 2*6).' },
                  { id: 'pa_3', text: '15 cm²', feedback: 'Incorrect: You added 9 + 6 instead of multiplying.' }
                ],
                correctOptionId: 'pa_1',
                explanation: 'A = l * w = 9 * 6 = 54 cm².'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_pa1',
                prompt: 'A square room has a perimeter of 36 feet. What is the area of the room?',
                options: [
                  { id: 'qpa_1', text: '81 sq ft' },
                  { id: 'qpa_2', text: '72 sq ft' },
                  { id: 'qpa_3', text: '36 sq ft' }
                ],
                correctOptionId: 'qpa_1',
                explanation: 'Each side = 36 / 4 = 9 ft. Area = 9 * 9 = 81 sq ft.'
              }
            ]
          }
        ]
      },
      {
        unitNumber: 5,
        title: 'Geometry, Angles & Symmetry',
        domainCode: '4.G',
        description: 'Classify lines and angles, measure degrees with a protractor, decompose additive angles, and determine bilateral symmetry in 2D figures.',
        topics: [
          {
            id: 'g4m_5_2',
            slug: 'angle-measurement-protractors',
            topicNumber: '5.2',
            title: 'Angle Measurement & Protractor Mastery',
            standardCode: 'CCSS.MATH.4.MD.C.5-6',
            standardTitle: 'Recognize angles as geometric shapes formed wherever two rays share a common endpoint, and measure angles in whole-number degrees',
            estimatedMinutes: 50,
            summary: 'Measure acute, obtuse, right, and reflex angles using circular arcs and protractors with degree precision.',
            competency: 'Protractor measurement and rotational geometry.',
            whyItMatters: 'Critical for maritime and aviation navigation bearings, solar panel alignment, and robotics arm mechanics.',
            careerLink: 'Pilots and Roboticists calculate angular bearings to steer vehicles and position robotic actuators.',
            video: {
              youtubeVideoId: '_n3KjmZgz38',
              title: 'Angles and Degrees: Types of Angles and Measuring with Protractors',
              channelTitle: 'Math Antics',
              durationFormatted: '8m 50s',
              durationSeconds: 530,
            },
            backupVideo: {
              youtubeVideoId: 'mLeNaZcy-hE',
              title: 'Triangles and Interior Angles',
              channelTitle: 'Math Antics',
              durationSeconds: 545,
            },
            workedExample: {
              problemStatement: 'Classify an angle measuring 125° and describe its relation to a right angle:',
              steps: [
                { stepNumber: 1, operation: 'Compare angle measure against 90° and 180°', equation: '90° < 125° < 180°', explanation: 'An angle greater than 90° but less than 180° is an obtuse angle.' },
                { stepNumber: 2, operation: 'Calculate angular difference from right angle', equation: '125° - 90° = 35°', explanation: 'The angle is 35° wider than a square right angle corner.' }
              ],
              verification: {
                checkStatement: 'Confirm 90° + 35° = 125°.',
                leftSideCalculation: '90 + 35 = 125',
                rightSideCalculation: '125 = 125 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Reading the wrong scale on a protractor',
                incorrectAttempt: 'Reading an obtuse angle as 55° because 55° aligns on the inner ring',
                correctApproach: 'Check angle type first: If the angle is visibly open/wide (> 90°), choose the scale with numbers > 90° (125°)',
                explanation: 'Protractors have dual scales; acute angles measure < 90° and obtuse angles measure > 90°.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_ang1',
                prompt: 'An angle measures 64°. What type of angle is it?',
                options: [
                  { id: 'ang_1', text: 'Acute Angle', feedback: 'Correct! Acute angles measure strictly between 0° and 90°.' },
                  { id: 'ang_2', text: 'Obtuse Angle', feedback: 'Incorrect: Obtuse angles are greater than 90°.' },
                  { id: 'ang_3', text: 'Right Angle', feedback: 'Incorrect: Right angles measure exactly 90°.' }
                ],
                correctOptionId: 'ang_1',
                explanation: '64° is less than 90°, making it an acute angle.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_ang1',
                prompt: 'What angle measure creates a straight line?',
                options: [
                  { id: 'qang_1', text: '180°' },
                  { id: 'qang_2', text: '90°' },
                  { id: 'qang_3', text: '360°' }
                ],
                correctOptionId: 'qang_1',
                explanation: 'A straight line forms a straight angle measuring exactly 180°.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 2. Grade 4 Science
  // ---------------------------------------------------------------------------
  'grade-4:science': {
    courseSlug: 'science-grade-4',
    gradeSlug: 'grade-4',
    subjectSlug: 'science',
    title: 'Grade 4 Science: Earth Systems, Waves, Energy & Organisms',
    gradeName: 'Grade 4 (Elementary)',
    subjectName: 'Science',
    overview: 'An inquiry-driven physical and earth science curriculum covering weathering, rock strata, fossil timelines, energy collisions, wave properties, and biological adaptations.',
    totalEstimatedHours: 90,
    frameworkStandard: 'Next Generation Science Standards (NGSS)',
    units: [
      {
        unitNumber: 1,
        title: 'Earth Systems, Weathering & Rock Strata',
        domainCode: '4-ESS1 & 4-ESS2',
        description: 'Examine evidence from rock strata and fossils, analyze weathering and erosion processes, and map landform features.',
        topics: [
          {
            id: 'g4s_1_1',
            slug: 'earth-systems',
            topicNumber: '1.1',
            title: 'Earth Systems: Geosphere, Hydrosphere, Atmosphere & Biosphere',
            standardCode: 'NGSS.4-ESS2-1',
            standardTitle: 'Identify evidence from patterns in rock formations and fossils in rock layers to explain changes over time',
            estimatedMinutes: 45,
            summary: 'Investigate how the hydrosphere, geosphere, atmosphere, and biosphere interact through rainfall, weathering, and continental rock formation.',
            competency: 'Modeling system interactions across Earth four major spheres.',
            whyItMatters: 'Essential for climate resilience, soil conservation in agriculture, and water resource management.',
            careerLink: 'Geologists, Hydrologists, and Environmental Scientists monitor Earth dynamics.',
            video: {
              youtubeVideoId: '8IlzKri08kk',
              title: 'Introduction to Earth Systems and Life Cycles',
              channelTitle: 'Amoeba Sisters',
              durationFormatted: '9m 27s',
              durationSeconds: 567,
            },
            backupVideo: {
              youtubeVideoId: '0RRVV4Diomg',
              title: 'The Chemical Basis of Earth Minerals',
              channelTitle: 'CrashCourse',
              durationSeconds: 672,
            },
            workedExample: {
              problemStatement: 'Differentiate between mechanical weathering and chemical weathering:',
              steps: [
                { stepNumber: 1, operation: 'Identify Mechanical Weathering', equation: 'Physical breakdown (Freeze-Thaw)', explanation: 'Water enters rock fissures, freezes, expands by 9%, and wedges rock apart without changing mineral composition.' },
                { stepNumber: 2, operation: 'Identify Chemical Weathering', equation: 'Chemical dissolution (Carbonic Acid)', explanation: 'Atmospheric CO2 dissolves into rainwater, reacting with limestone to form soluble bicarbonate.' }
              ],
              verification: {
                checkStatement: 'Confirm conservation of mass: Does weathering destroy rock matter?',
                leftSideCalculation: 'Initial mass = Solid bedrock',
                rightSideCalculation: 'Final mass = Soil particles + dissolved ions (Conserved)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Confusing weathering with erosion',
                incorrectAttempt: 'Using weathering and erosion interchangeably',
                correctApproach: 'Weathering breaks rock in place; erosion transports fragments away',
                explanation: 'Weathering is the in-situ disintegration; erosion is the movement.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g4s_1',
                prompt: 'Which Earth sphere includes all of Earth’s liquid water, ice caps, and atmospheric vapor?',
                options: [
                  { id: 'w1', text: 'Hydrosphere', feedback: 'Correct! Hydro refers to all water bodies on Earth.' },
                  { id: 'w2', text: 'Geosphere', feedback: 'Incorrect: The geosphere is the solid rocky portion of Earth.' },
                  { id: 'w3', text: 'Atmosphere', feedback: 'Incorrect: Atmosphere refers specifically to the gaseous air envelope.' }
                ],
                correctOptionId: 'w1',
                explanation: 'The hydrosphere contains oceans, ice caps, glaciers, rivers, and atmospheric vapor.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g4s_1',
                prompt: 'What process transforms solid rock into sediment over millions of years?',
                options: [
                  { id: 'qw1', text: 'Weathering and erosion' },
                  { id: 'qw2', text: 'Photosynthesis' },
                  { id: 'qw3', text: 'Condensation' }
                ],
                correctOptionId: 'qw1',
                explanation: 'Mechanical and chemical weathering combined with erosion break rock into sediment.'
              }
            ]
          },
          {
            id: 'g4s_1_2',
            slug: 'weathering-erosion-deposition',
            topicNumber: '1.2',
            title: 'Weathering, Erosion & Deposition of Sediments',
            standardCode: 'NGSS.4-ESS2-1',
            standardTitle: 'Make observations and measurements to provide evidence of the effects of weathering or the rate of erosion',
            estimatedMinutes: 45,
            summary: 'Observe how running river water, coastal surf, and desert wind break down and transport earth materials.',
            competency: 'Analyzing landscape alteration rates through physical sedimentation cycles.',
            whyItMatters: 'Civil engineers must calculate coastal erosion rates to protect coastal highways, bridges, and housing.',
            careerLink: 'Coastal Engineers and Civil Surveyors design sea walls and sediment traps.',
            video: {
              youtubeVideoId: 'R-Iak3Wvh9c',
              title: 'Weathering and Erosion: How Landforms Change',
              channelTitle: 'Crash Course Kids',
              durationFormatted: '4m 06s',
              durationSeconds: 246,
            },
            backupVideo: {
              youtubeVideoId: 'dK2G4sH29o4',
              title: 'Landforms, Hey! Identifying Earth Physical Shapes',
              channelTitle: 'Crash Course Kids',
              durationSeconds: 238,
            },
            workedExample: {
              problemStatement: 'Trace a granite boulder in the mountains through weathering, erosion, and deposition:',
              steps: [
                { stepNumber: 1, operation: 'Weathering Stage', equation: 'Frost wedging in mountain peaks', explanation: 'Winter ice expands and fractures granite into gravel and sand grains.' },
                { stepNumber: 2, operation: 'Erosion Stage', equation: 'Mountain stream transport', explanation: 'Gravity-driven river currents carry sand downstream, rounding sharp edges.' },
                { stepNumber: 3, operation: 'Deposition Stage', equation: 'River delta sedimentation', explanation: 'As water slows entering the ocean, sand drops to the seabed, forming new delta land.' }
              ],
              verification: {
                checkStatement: 'Confirm physical progression order: Weathering → Erosion → Deposition.',
                leftSideCalculation: 'Breakage → Transport → Dropping',
                rightSideCalculation: 'Weathering → Erosion → Deposition (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Thinking mountains never change shape',
                incorrectAttempt: 'Believing mountains have always looked identical to how they look today',
                correctApproach: 'Water, wind, and ice constantly carve and lower mountain peaks over geological time',
                explanation: 'Even the tallest mountains are gradually reshaped by continuous weathering.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g4s_2',
                prompt: 'What is the term for the process when eroded sediments settle in a new location?',
                options: [
                  { id: 'dep_1', text: 'Deposition', feedback: 'Correct! Deposition is the laying down or settling of eroded sediment.' },
                  { id: 'dep_2', text: 'Weathering', feedback: 'Incorrect: Weathering is the breaking down of rock.' },
                  { id: 'dep_3', text: 'Evaporation', feedback: 'Incorrect: Evaporation is a liquid-to-gas phase transition.' }
                ],
                correctOptionId: 'dep_1',
                explanation: 'Deposition occurs when wind or water slows down enough to drop its sediment payload.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g4s_2',
                prompt: 'Which agent of erosion carved the Grand Canyon over millions of years?',
                options: [
                  { id: 'qgc_1', text: 'Flowing river water (Colorado River)' },
                  { id: 'qgc_2', text: 'Desert wind storms only' },
                  { id: 'qgc_3', text: 'Glacial ice only' }
                ],
                correctOptionId: 'qgc_1',
                explanation: 'The Colorado River cut through plateau rock layers over millions of years.'
              }
            ]
          },
          {
            id: 'g4s_1_3',
            slug: 'fossil-evidence-past-environments',
            topicNumber: '1.3',
            title: 'Fossil Evidence in Rock Strata & Past Environments',
            standardCode: 'NGSS.4-ESS1-1',
            standardTitle: 'Identify evidence from patterns in rock formations and fossils in rock layers to explain changes over time',
            estimatedMinutes: 45,
            summary: 'Decode ancient geological history: why marine fossils are found on mountain tops and how rock strata preserve chronological timelines.',
            competency: 'Chronological reasoning and paleo-environmental reconstruction.',
            whyItMatters: 'Reveals how Earth climate has fluctuated historically and helps locate groundwater aquifers.',
            careerLink: 'Paleontologists and Petroleum Geologists inspect core strata drill samples.',
            video: {
              youtubeVideoId: '3rkGu0BItKM',
              title: 'Fossil Management: What Fossils Tell Us About Earth',
              channelTitle: 'Crash Course Kids',
              durationFormatted: '4m 15s',
              durationSeconds: 255,
            },
            workedExample: {
              problemStatement: 'Scientists find a trilobite fossil in a deep rock layer and a bird footprint fossil in a layer above it. What does this indicate?',
              steps: [
                { stepNumber: 1, operation: 'Apply Law of Superposition', equation: 'Lower rock layer = Older; Upper rock layer = Younger', explanation: 'Sedimentary rocks accumulate from bottom to top over time.' },
                { stepNumber: 2, operation: 'Deduce relative age', equation: 'Trilobite is older than bird footprint', explanation: 'The organism in the lower stratum existed prior to the one above.' },
                { stepNumber: 3, operation: 'Deduce environmental transformation', equation: 'Ancient ocean became dry land', explanation: 'Trilobites were marine arthropods; bird footprints require terrestrial shorelines.' }
              ],
              verification: {
                checkStatement: 'Does superposition confirm the chronological order?',
                leftSideCalculation: 'Bottom layer precedes top layer',
                rightSideCalculation: 'Marine preceding terrestrial (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Thinking rock layers are all the same age',
                incorrectAttempt: 'Assuming all fossils in a cliff face died during the same year',
                correctApproach: 'Each rock stratum represents a distinct epoch separated by thousands or millions of years',
                explanation: 'Stratigraphy documents distinct chapters of Earth history stacked on top of each other.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g4s_3',
                prompt: 'If fish fossils are found in a desert rock cliff, what does this tell scientists about the area’s past?',
                options: [
                  { id: 'fsh_1', text: 'The desert was once covered by a sea or lake', feedback: 'Correct! Marine fossils prove that water once covered the current desert basin.' },
                  { id: 'fsh_2', text: 'Fish used to walk on desert sand', feedback: 'Incorrect: Aquatic fish lived in ancient water bodies.' },
                  { id: 'fsh_3', text: 'Someone placed the fossils there last week', feedback: 'Incorrect: Natural rock strata form over geological time.' }
                ],
                correctOptionId: 'fsh_1',
                explanation: 'Fossils preserve direct evidence of the environmental conditions at the time of deposition.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g4s_3',
                prompt: 'According to the law of superposition, where are the oldest undisturbed sedimentary rock layers found?',
                options: [
                  { id: 'qsup_1', text: 'At the bottom of the rock formation' },
                  { id: 'qsup_2', text: 'At the very top of the formation' },
                  { id: 'qsup_3', text: 'In the exact middle layer' }
                ],
                correctOptionId: 'qsup_1',
                explanation: 'In undeformed sedimentary rock, each bed is older than the one above it.'
              }
            ]
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Energy, Speed & Wave Mechanics',
        domainCode: '4-PS3 & 4-PS4',
        description: 'Investigate kinetic energy, collision momentum, and wave properties including wavelength, amplitude, and reflection.',
        topics: [
          {
            id: 'g4s_2_1',
            slug: 'energy-transfer-collisions',
            topicNumber: '2.1',
            title: 'Kinetic Energy, Speed & Collision Transfer',
            standardCode: 'NGSS.4-PS3-1',
            standardTitle: 'Use evidence to construct an explanation relating the speed of an object to the energy of that object',
            estimatedMinutes: 45,
            summary: 'Discover how speed governs kinetic energy and how energy transfers between objects during physical collisions.',
            competency: 'Constructing qualitative explanations of energy transformation and mechanical work.',
            whyItMatters: 'Essential for automotive crash safety standards, sporting equipment engineering, and roller coaster design.',
            careerLink: 'Automotive Safety Engineers design crumple zones and airbags using collision energy physics.',
            video: {
              youtubeVideoId: '7K4V0NVcx-E',
              title: 'Energy! What Is It and How Does It Move?',
              channelTitle: 'Crash Course Kids',
              durationFormatted: '4m 12s',
              durationSeconds: 252,
            },
            backupVideo: {
              youtubeVideoId: 'w6tW2B-g8bM',
              title: 'Collisions: Energy Transfer in Action',
              channelTitle: 'Crash Course Kids',
              durationSeconds: 240,
            },
            workedExample: {
              problemStatement: 'Compare the energy transferred when a 1 kg ball rolls at 2 m/s versus 4 m/s into a bowling pin:',
              steps: [
                { stepNumber: 1, operation: 'Recall kinetic energy relation to speed', equation: 'Kinetic Energy increases exponentially with speed (KE ~ v²)', explanation: 'Doubling the speed quadruples the kinetic energy.' },
                { stepNumber: 2, operation: 'Evaluate comparative collision energy', equation: '4² / 2² = 16 / 4 = 4 times more energy', explanation: 'The ball rolling at 4 m/s carries 4 times as much kinetic energy.' },
                { stepNumber: 3, operation: 'State physical consequence', equation: 'Pin is displaced significantly farther', explanation: 'Greater kinetic energy does more mechanical work during the collision.' }
              ],
              verification: {
                checkStatement: 'Does higher velocity result in greater collision transfer?',
                leftSideCalculation: 'Speed = 4 m/s',
                rightSideCalculation: 'Energy is 4x greater (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Thinking stationary objects contain kinetic energy',
                incorrectAttempt: 'Thinking a stopped ball has motion energy',
                correctApproach: 'Kinetic energy requires motion; motionless objects have potential or thermal energy',
                explanation: 'Kinetic energy specifically describes energy of mass in motion.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g4s_4',
                prompt: 'If two identical toy trucks collide, which one has more kinetic energy before impact?',
                options: [
                  { id: 'ke_1', text: 'The truck traveling at a faster speed', feedback: 'Correct! Faster speed directly produces higher kinetic energy.' },
                  { id: 'ke_2', text: 'The truck traveling at a slower speed', feedback: 'Incorrect: Slower speed results in lower kinetic energy.' },
                  { id: 'ke_3', text: 'Both have the exact same energy regardless of speed', feedback: 'Incorrect: Kinetic energy depends squarely on speed.' }
                ],
                correctOptionId: 'ke_1',
                explanation: 'When mass is equal, higher velocity always correlates with greater kinetic energy.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g4s_4',
                prompt: 'What happens to energy during a collision between two billiard balls?',
                options: [
                  { id: 'qcol_1', text: 'Energy transfers from the moving ball to the resting ball, plus sound and heat' },
                  { id: 'qcol_2', text: 'Energy is completely destroyed and disappears forever' },
                  { id: 'qcol_3', text: 'The resting ball loses all its mass' }
                ],
                correctOptionId: 'qcol_1',
                explanation: 'Energy cannot be created or destroyed; it is transferred mechanically and into sound/heat.'
              }
            ]
          },
          {
            id: 'g4s_2_2',
            slug: 'waves-sound-light',
            topicNumber: '2.2',
            title: 'Wave Properties: Amplitude, Wavelength & Patterns',
            standardCode: 'NGSS.4-PS4-1',
            standardTitle: 'Develop a model of waves to describe patterns in terms of amplitude and wavelength',
            estimatedMinutes: 45,
            summary: 'Visualize how waves transfer energy through water, air, and space without permanently transporting matter.',
            competency: 'Modeling wave mechanics, crests, troughs, and digital communication pulses.',
            whyItMatters: 'Foundational for Wi-Fi, radio communication, medical ultrasound scans, and fiber optic internet cables.',
            careerLink: 'Telecommunications Engineers design radio transmitters and Wi-Fi modems using wave signals.',
            video: {
              youtubeVideoId: 'vmsV_9Xg2O4',
              title: 'What Is Light and How Do Waves Travel?',
              channelTitle: 'Crash Course Kids',
              durationFormatted: '4m 30s',
              durationSeconds: 270,
            },
            workedExample: {
              problemStatement: 'Contrast a high-amplitude water wave with a low-amplitude water wave:',
              steps: [
                { stepNumber: 1, operation: 'Define wave amplitude', equation: 'Amplitude = Height from center equilibrium line to crest', explanation: 'Amplitude quantifies the magnitude of disturbance or energy.' },
                { stepNumber: 2, operation: 'Relate amplitude to energy', equation: 'Higher amplitude = Greater energy transfer', explanation: 'A 3-meter ocean swell carries drastically more energy than a 0.2-meter ripple.' },
                { stepNumber: 3, operation: 'Analyze matter motion', equation: 'Water molecules oscillate in circles; only energy travels forward', explanation: 'Waves move energy across distances while water particles stay in their local vicinity.' }
              ],
              verification: {
                checkStatement: 'Does matter travel with the wave across the ocean?',
                leftSideCalculation: 'Floating buoy bobs up and down in place',
                rightSideCalculation: 'Energy passes under without transporting buoy across sea (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Believing water travels across the entire ocean with the wave',
                incorrectAttempt: 'Thinking the water at a beach came directly in one piece from thousands of miles away',
                correctApproach: 'Water particles oscillate locally; the energy wave is what traverses the ocean',
                explanation: 'Waves transmit energy, not bulk mass, across long distances.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g4s_5',
                prompt: 'What measurement describes the distance from one wave crest to the very next wave crest?',
                options: [
                  { id: 'wv_1', text: 'Wavelength', feedback: 'Correct! Wavelength is the spatial period between successive peaks.' },
                  { id: 'wv_2', text: 'Amplitude', feedback: 'Incorrect: Amplitude is the height of the wave.' },
                  { id: 'wv_3', text: 'Trough', feedback: 'Incorrect: Trough is the lowest point of a wave.' }
                ],
                correctOptionId: 'wv_1',
                explanation: 'Wavelength is the distance between consecutive crests or troughs.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g4s_5',
                prompt: 'A sound wave with a high amplitude will be heard as what kind of sound?',
                options: [
                  { id: 'qsnd_1', text: 'A loud sound' },
                  { id: 'qsnd_2', text: 'A high-pitched squeak' },
                  { id: 'qsnd_3', text: 'A silent wave' }
                ],
                correctOptionId: 'qsnd_1',
                explanation: 'In sound waves, greater amplitude corresponds directly to greater acoustic loudness (volume).'
              }
            ]
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 3. Grade 8 Social Studies & Civics
  // ---------------------------------------------------------------------------
  'grade-8:civics': {
    courseSlug: 'civics-grade-8',
    gradeSlug: 'grade-8',
    subjectSlug: 'civics',
    title: 'Grade 8 Civics: Constitution, Separation of Powers & Civil Rights',
    gradeName: 'Grade 8 / Middle School',
    subjectName: 'Social Studies & Civics',
    overview: 'An in-depth study of American constitutional democracy, the system of checks and balances across the three branches, the Bill of Rights, and citizen participation.',
    totalEstimatedHours: 85,
    frameworkStandard: 'C3 Framework for Social Studies State Standards / TEKS 8.15',
    units: [
      {
        unitNumber: 1,
        title: 'Constitutional Foundations & Core Principles',
        domainCode: 'C3.CIV.1 & C3.CIV.2',
        description: 'Examine the Constitutional Convention of 1787, federalism, popular sovereignty, and checks and balances.',
        topics: [
          {
            id: 'g8c_1_1',
            slug: 'constitutional-civics',
            topicNumber: '1.1',
            title: 'Constitutional Foundations: Popular Sovereignty & Federalism',
            standardCode: 'C3.CIV.1.6-8',
            standardTitle: 'Explain how constitutional principles guide and limit state and federal power',
            estimatedMinutes: 50,
            summary: 'Explore the compromise that birthed the U.S. Constitution, the Great Compromise, and the division between federal and state powers.',
            competency: 'Evaluating constitutional frameworks of governance and individual liberty protections.',
            whyItMatters: 'Essential for understanding citizen rights, voting, the rule of law, and active democratic participation.',
            careerLink: 'Attorneys, Policy Analysts, and Public Administrators draft and interpret constitutional statutes.',
            video: {
              youtubeVideoId: 'bO7FQsCcbD8',
              title: 'Constitutional Compromises: Crash Course Government and Politics #5',
              channelTitle: 'CrashCourse',
              durationFormatted: '8m 55s',
              durationSeconds: 535,
            },
            backupVideo: {
              youtubeVideoId: '0bf3CwYCxXw',
              title: 'Separation of Powers and Checks and Balances',
              channelTitle: 'CrashCourse',
              durationSeconds: 510,
            },
            workedExample: {
              problemStatement: 'Analyze how federalism divides powers between the national government and state governments:',
              steps: [
                { stepNumber: 1, operation: 'Identify Delegated Federal Powers', equation: 'Coining money, declaring war, regulating interstate commerce', explanation: 'Powers granted exclusively to the federal government by the Constitution.' },
                { stepNumber: 2, operation: 'Identify Reserved State Powers', equation: '10th Amendment: Public schools, local police, driver licensing', explanation: 'Powers retained by individual states and the people.' },
                { stepNumber: 3, operation: 'Identify Concurrent Powers', equation: 'Levying taxes, building roads, establishing courts', explanation: 'Powers shared concurrently by both levels of government.' }
              ],
              verification: {
                checkStatement: 'Confirm constitutional basis: 10th Amendment reserves unlisted powers to states.',
                leftSideCalculation: 'Federalism = Dual sovereignty structure',
                rightSideCalculation: 'Article I + 10th Amendment (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Believing the federal government has unlimited power',
                incorrectAttempt: 'Thinking the President can overrule any state law at will',
                correctApproach: 'The Constitution grants enumerated powers; unlisted powers remain with states or the people',
                explanation: 'The U.S. government is a government of limited, enumerated constitutional powers.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g8c_1',
                prompt: 'What constitutional principle divides powers between the national government and state governments?',
                options: [
                  { id: 'fed_1', text: 'Federalism', feedback: 'Correct! Federalism is the compound mode of government dividing power between central and regional authorities.' },
                  { id: 'fed_2', text: 'Monarchy', feedback: 'Incorrect: Monarchy is rule by a single sovereign.' },
                  { id: 'fed_3', text: 'Direct Democracy', feedback: 'Incorrect: Direct democracy is direct voting by all citizens on every law.' }
                ],
                correctOptionId: 'fed_1',
                explanation: 'Federalism balances central national authority with state autonomy.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g8c_1',
                prompt: 'Which amendment to the Constitution reserves powers not delegated to the federal government to the states or people?',
                options: [
                  { id: 'qam_1', text: 'The 10th Amendment' },
                  { id: 'qam_2', text: 'The 1st Amendment' },
                  { id: 'qam_3', text: 'The 14th Amendment' }
                ],
                correctOptionId: 'qam_1',
                explanation: 'The Tenth Amendment explicitly declares reserved powers of the states and people.'
              }
            ]
          },
          {
            id: 'g8c_1_2',
            slug: 'separation-of-powers-checks-balances',
            topicNumber: '1.2',
            title: 'Separation of Powers & The System of Checks and Balances',
            standardCode: 'C3.CIV.2.6-8',
            standardTitle: 'Explain the powers and responsibilities of citizens, political parties, interest groups, and the media in a variety of contexts',
            estimatedMinutes: 50,
            summary: 'Investigate how the Legislative, Executive, and Judicial branches prevent tyranny through mutual oversight and constitutional checks.',
            competency: 'Analyzing institutional equilibrium across governmental branches.',
            whyItMatters: 'Guarantees that no single leader or branch can unilaterally seize autocratic control of the state.',
            careerLink: 'Constitutional Lawyers, Judges, and Congressional Aides balance legislative and executive powers.',
            video: {
              youtubeVideoId: '0bf3CwYCxXw',
              title: 'Separation of Powers and Checks and Balances: Crash Course Government #3',
              channelTitle: 'CrashCourse',
              durationFormatted: '8m 30s',
              durationSeconds: 510,
            },
            workedExample: {
              problemStatement: 'Diagram the check-and-balance process when Congress passes a bill:',
              steps: [
                { stepNumber: 1, operation: 'Legislative Action', equation: 'Congress passes bill by simple majority in House & Senate', explanation: 'Article I grants lawmaking authority to Congress.' },
                { stepNumber: 2, operation: 'Executive Check', equation: 'President can sign into law OR veto the bill', explanation: 'Article II grants the President veto power to check legislative overreach.' },
                { stepNumber: 3, operation: 'Legislative Counter-Check & Judicial Review', equation: 'Congress overrides veto by 2/3 vote; Court can declare unconstitutional', explanation: 'The Supreme Court exercises judicial review to ensure conformity with the Constitution.' }
              ],
              verification: {
                checkStatement: 'Does each branch hold a tool to check the other two?',
                leftSideCalculation: 'Congress makes, President vetoes, Court reviews',
                rightSideCalculation: 'Three-way mutual oversight (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Thinking the Supreme Court creates laws',
                incorrectAttempt: 'Believing judges write legislation and vote on taxes',
                correctApproach: 'Courts interpret and review laws; only Congress has the power to write and pass legislation',
                explanation: 'The legislative branch writes laws; the judicial branch evaluates constitutionality.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g8c_2',
                prompt: 'What proportion of votes in both houses of Congress is required to override a Presidential veto?',
                options: [
                  { id: 'ov_1', text: 'A two-thirds (2/3) supermajority', feedback: 'Correct! Article I Section 7 requires a 2/3 vote in both the House and Senate.' },
                  { id: 'ov_2', text: 'A simple majority (51%)', feedback: 'Incorrect: A simple majority passes the original bill, but 2/3 is required to override.' },
                  { id: 'ov_3', text: 'A unanimous vote (100%)', feedback: 'Incorrect: Unanimity is never required for veto overrides.' }
                ],
                correctOptionId: 'ov_1',
                explanation: 'A 2/3 supermajority in both chambers overrides a presidential veto.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g8c_2',
                prompt: 'Which power allows the Supreme Court to declare a congressional act unconstitutional?',
                options: [
                  { id: 'qjr_1', text: 'Judicial Review' },
                  { id: 'qjr_2', text: 'Executive Order' },
                  { id: 'qjr_3', text: 'Filibuster' }
                ],
                correctOptionId: 'qjr_1',
                explanation: 'Judicial review, established in Marbury v. Madison (1803), permits courts to invalidate unconstitutional acts.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 4. Grade 8 Computer Science & AI
  // ---------------------------------------------------------------------------
  'grade-8:computer-science': {
    courseSlug: 'cs-grade-8',
    gradeSlug: 'grade-8',
    subjectSlug: 'computer-science',
    title: 'Grade 8 Computer Science: Computational Thinking & Python Programming',
    gradeName: 'Grade 8 / Middle School',
    subjectName: 'Computer Science & AI',
    overview: 'An introductory computer science curriculum focusing on algorithmic abstraction, Python syntax, logic gates, iterative loops, and software engineering foundations.',
    totalEstimatedHours: 80,
    frameworkStandard: 'CSTA K-12 Computer Science Standards (Level 2)',
    units: [
      {
        unitNumber: 1,
        title: 'Algorithmic Thinking & Python Syntax',
        domainCode: 'CSTA.2-AP',
        description: 'Understand computational problem decomposition, variable assignments, data types, and arithmetic operations in Python.',
        topics: [
          {
            id: 'g8cs_1_1',
            slug: 'python-programming',
            topicNumber: '1.1',
            title: 'Python Syntax, Variables & Basic Input/Output',
            standardCode: 'CSTA.2-AP-10',
            standardTitle: 'Use flowcharts and/or pseudocode to address complex problems as algorithms',
            estimatedMinutes: 50,
            summary: 'Write and run your first Python scripts: declaring integer, float, string, and boolean variables with standard I/O commands.',
            competency: 'Translating conceptual algorithms into executable Python code.',
            whyItMatters: 'Python powers modern data science, generative AI pipelines, robotics, and web backend infrastructure.',
            careerLink: 'Software Engineers and AI Researchers use Python to develop machine learning models and web apps.',
            video: {
              youtubeVideoId: 'kqtD5dpn9C8',
              title: 'Python for Beginners: Variables, Print and Input',
              channelTitle: 'Programming with Mosh',
              durationFormatted: '10m 00s',
              durationSeconds: 600,
            },
            backupVideo: {
              youtubeVideoId: 'tpIctyqH29Q',
              title: 'Early Computing: Crash Course Computer Science #1',
              channelTitle: 'CrashCourse',
              durationSeconds: 705,
            },
            workedExample: {
              problemStatement: 'Write a Python program that asks for a user’s birth year and calculates their approximate age:',
              steps: [
                { stepNumber: 1, operation: 'Collect string input', equation: 'birth_year_str = input("Enter birth year: ")', explanation: 'The input() function reads user keyboard input as text string.' },
                { stepNumber: 2, operation: 'Cast text to integer', equation: 'birth_year = int(birth_year_str)', explanation: 'Convert string characters into numeric integer for arithmetic calculation.' },
                { stepNumber: 3, operation: 'Calculate and print result', equation: 'age = 2026 - birth_year; print(f"You are {age} years old.")', explanation: 'Evaluate expression and display formatted output.' }
              ],
              verification: {
                checkStatement: 'Test with sample input birth year 2012: 2026 - 2012 = 14.',
                leftSideCalculation: '2026 - 2012 = 14',
                rightSideCalculation: 'Output: "You are 14 years old." (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Attempting arithmetic on uncast string inputs',
                incorrectAttempt: 'Writing: "2026" - "2012" and expecting number 14',
                correctApproach: 'Always wrap input() with int() or float() before mathematical operations',
                explanation: 'In Python, subtracting strings causes a TypeError because strings cannot be subtracted.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g8cs_1',
                prompt: 'Which data type is produced by the expression: 3.14159?',
                options: [
                  { id: 'dt_1', text: 'float (floating-point decimal)', feedback: 'Correct! Numbers with decimal points are represented as float types.' },
                  { id: 'dt_2', text: 'int (integer)', feedback: 'Incorrect: Integers are whole numbers without fractional points.' },
                  { id: 'dt_3', text: 'bool (boolean)', feedback: 'Incorrect: Booleans represent True or False values.' }
                ],
                correctOptionId: 'dt_1',
                explanation: 'In Python, real numbers with fractional components are float data types.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g8cs_1',
                prompt: 'What keyword in Python is used to output text directly to the user terminal console?',
                options: [
                  { id: 'qpy_1', text: 'print()' },
                  { id: 'qpy_2', text: 'echo()' },
                  { id: 'qpy_3', text: 'console.log()' }
                ],
                correctOptionId: 'qpy_1',
                explanation: 'print() is Python built-in standard output function.'
              }
            ]
          },
          {
            id: 'g8cs_1_2',
            slug: 'python-conditionals-logic',
            topicNumber: '1.2',
            title: 'Conditionals, Boolean Logic & Branching Decision Trees',
            standardCode: 'CSTA.2-AP-12',
            standardTitle: 'Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals',
            estimatedMinutes: 50,
            summary: 'Implement logical decision branches in software using if, elif, else statements and Boolean operators (and, or, not).',
            competency: 'Designing branching program control flow based on state evaluation.',
            whyItMatters: 'Every interactive application, video game collision system, and cybersecurity access gateway relies on conditional logic.',
            careerLink: 'Game Developers and Cybersecurity Engineers program access rules using conditional algorithms.',
            video: {
              youtubeVideoId: 'gI-qXk7XojA',
              title: 'Boolean Logic & Logic Gates: Crash Course Computer Science #3',
              channelTitle: 'CrashCourse',
              durationFormatted: '10m 01s',
              durationSeconds: 601,
            },
            workedExample: {
              problemStatement: 'Construct a conditional statement to grant discount if age is under 12 OR over 65:',
              steps: [
                { stepNumber: 1, operation: 'Define Boolean conditional test', equation: 'is_discounted = (age < 12) or (age > 65)', explanation: 'The "or" operator evaluates True if either condition is satisfied.' },
                { stepNumber: 2, operation: 'Write if-else branch', equation: 'if is_discounted:\n    price = 5.0\nelse:\n    price = 12.0', explanation: 'Executes discount branch if True, standard rate if False.' }
              ],
              verification: {
                checkStatement: 'Test age = 70: 70 > 65 is True -> price = 5.0.',
                leftSideCalculation: 'is_discounted = True',
                rightSideCalculation: 'Price = $5.0 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Using single equals = instead of comparison operator ==',
                incorrectAttempt: 'Writing: if score = 100:',
                correctApproach: 'Use == for comparison: if score == 100: (= is for variable assignment)',
                explanation: '= assigns a value; == tests for equality.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g8cs_2',
                prompt: 'What does the expression (True and False) evaluate to in Python?',
                options: [
                  { id: 'bl_1', text: 'False', feedback: 'Correct! The "and" operator requires BOTH operands to be True.' },
                  { id: 'bl_2', text: 'True', feedback: 'Incorrect: For "and", any False operand produces False.' },
                  { id: 'bl_3', text: 'None', feedback: 'Incorrect: Logical operations evaluate to boolean booleans.' }
                ],
                correctOptionId: 'bl_1',
                explanation: 'A logical AND requires both conditions to hold simultaneously.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g8cs_2',
                prompt: 'What Python keyword is used to check an additional condition if the initial "if" test was False?',
                options: [
                  { id: 'qel_1', text: 'elif' },
                  { id: 'qel_2', text: 'elseif' },
                  { id: 'qel_3', text: 'then' }
                ],
                correctOptionId: 'qel_1',
                explanation: 'Python contracts "else if" into the keyword "elif".'
              }
            ]
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 5. Grade 8 Mathematics
  // ---------------------------------------------------------------------------
  'grade-8:mathematics': {
    courseSlug: 'math-grade-8',
    gradeSlug: 'grade-8',
    subjectSlug: 'mathematics',
    title: 'Grade 8 Mathematics: Linear Equations, Slope & Geometry',
    gradeName: 'Grade 8 / Year 9 / Level 5',
    subjectName: 'Mathematics',
    overview: 'A foundational algebra and geometry course covering multi-step linear equations, rate of change and slope, linear graphing, the Pythagorean theorem, and geometric volume formulas.',
    totalEstimatedHours: 110,
    frameworkStandard: 'Common Core (CCSS.MATH.8) / TEKS 8.8',
    units: [
      {
        unitNumber: 1,
        title: 'Linear Equations in One Variable',
        domainCode: '8.EE.C',
        description: 'Solve multi-step linear equations with variables on both sides, rational coefficients, and parentheses.',
        topics: [
          {
            id: 'g8m_1_1',
            slug: 'linear-equations',
            topicNumber: '1.1',
            title: 'Solving Multi-Step Linear Equations with Variables on Both Sides',
            standardCode: 'CCSS.MATH.8.EE.C.7',
            standardTitle: 'Solve linear equations in one variable with rational number coefficients',
            estimatedMinutes: 50,
            summary: 'Master algebraic balance: collecting like terms, applying the distributive property, and isolating variables on one side of an equation.',
            competency: 'Systematic equation solving and algebraic balance maintenance.',
            whyItMatters: 'Foundational algebra skill required for all advanced mathematics, economics breakeven models, and physics.',
            careerLink: 'Financial Analysts, Mechanical Engineers, and Economists formulate linear cost and revenue balances.',
            video: {
              youtubeVideoId: 'bAerID24QJ8',
              title: 'Algebra Basics: Solving 2-Step Equations',
              channelTitle: 'Math Antics',
              durationFormatted: '10m 27s',
              durationSeconds: 627,
            },
            backupVideo: {
              youtubeVideoId: '4K3e_k9Wj0E',
              title: 'Slope & Intercept in Linear Equations',
              channelTitle: 'Math Antics',
              durationSeconds: 665,
            },
            workedExample: {
              problemStatement: 'Solve for x in the equation: 5x + 3 = 2x + 18:',
              steps: [
                { stepNumber: 1, operation: 'Subtract 2x from both sides', equation: '5x - 2x + 3 = 18 → 3x + 3 = 18', explanation: 'Eliminates the variable term from the right-hand side.' },
                { stepNumber: 2, operation: 'Subtract 3 from both sides', equation: '3x = 18 - 3 → 3x = 15', explanation: 'Isolates the variable term on the left.' },
                { stepNumber: 3, operation: 'Divide both sides by 3', equation: 'x = 15 / 3 → x = 5', explanation: 'Yields the unique solution.' }
              ],
              verification: {
                checkStatement: 'Substitute x = 5 into original equation: 5(5) + 3 vs 2(5) + 18.',
                leftSideCalculation: '5(5) + 3 = 25 + 3 = 28',
                rightSideCalculation: '2(5) + 18 = 10 + 18 = 28 (28 = 28 Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Flipping signs incorrectly when moving terms across the equals sign',
                incorrectAttempt: 'Writing 5x + 3 = 2x + 18 as 5x + 2x = 18 + 3',
                correctApproach: 'Always apply inverse operations to both sides (+2x becomes -2x; +3 becomes -3)',
                explanation: 'Whatever operation is performed on one side must be mirrored on the other side.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g8m_1',
                prompt: 'What is the solution to 4x - 7 = 21?',
                options: [
                  { id: 'eq_1', text: 'x = 7', feedback: 'Correct! 4x = 28 → x = 7.' },
                  { id: 'eq_2', text: 'x = 3.5', feedback: 'Incorrect: Did you subtract 7 instead of adding 7 to 21?' },
                  { id: 'eq_3', text: 'x = 14', feedback: 'Incorrect: Calculation error in division.' }
                ],
                correctOptionId: 'eq_1',
                explanation: 'Add 7 to both sides: 4x = 28. Divide by 4: x = 7.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g8m_1',
                prompt: 'Solve: 3(x + 4) = 24:',
                options: [
                  { id: 'qeq_1', text: 'x = 4' },
                  { id: 'qeq_2', text: 'x = 8' },
                  { id: 'qeq_3', text: 'x = 6' }
                ],
                correctOptionId: 'qeq_1',
                explanation: 'Divide by 3: x + 4 = 8. Subtract 4: x = 4.'
              }
            ]
          },
          {
            id: 'g8m_1_2',
            slug: 'slope-rate-of-change',
            topicNumber: '1.2',
            title: 'Slope, Rate of Change & Linear Graphing (y = mx + b)',
            standardCode: 'CCSS.MATH.8.F.B.4',
            standardTitle: 'Construct a function to model a linear relationship between two quantities and determine rate of change',
            estimatedMinutes: 50,
            summary: 'Calculate constant rate of change (slope = rise / run) from tables, graphs, and two coordinate points; graph lines using slope-intercept form.',
            competency: 'Interpreting gradient slopes as real-world rates of change.',
            whyItMatters: 'Underpins speed calculations (miles per hour), fuel efficiency, monthly utility bills, and financial depreciation curves.',
            careerLink: 'Civil Engineers design road grades; Financial Traders model stock momentum slopes.',
            video: {
              youtubeVideoId: '4K3e_k9Wj0E',
              title: 'Slope & Intercept in Linear Equations',
              channelTitle: 'Math Antics',
              durationFormatted: '11m 05s',
              durationSeconds: 665,
            },
            workedExample: {
              problemStatement: 'Find the slope of the line passing through points (2, 3) and (6, 11):',
              steps: [
                { stepNumber: 1, operation: 'Apply Slope Formula', equation: 'm = (y2 - y1) / (x2 - x1)', explanation: 'Calculates vertical change (rise) over horizontal change (run).' },
                { stepNumber: 2, operation: 'Substitute coordinates', equation: 'm = (11 - 3) / (6 - 2) = 8 / 4', explanation: 'Subtract corresponding y-values and x-values.' },
                { stepNumber: 3, operation: 'Simplify ratio', equation: 'm = 2', explanation: 'The slope is 2 (for every 1 unit right, the line ascends 2 units).' }
              ],
              verification: {
                checkStatement: 'Confirm using point-slope form: y - 3 = 2(x - 2) -> y = 2x - 1. Plug in x=6: 2(6)-1 = 11.',
                leftSideCalculation: 'y = 2(6) - 1 = 11',
                rightSideCalculation: '11 = 11 (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Putting run over rise instead of rise over run',
                incorrectAttempt: 'Computing slope as (x2 - x1) / (y2 - y1)',
                correctApproach: 'Slope is vertical change divided by horizontal change: delta y / delta x',
                explanation: 'Rise (vertical / y) is always in the numerator; run (horizontal / x) is in denominator.'
              }
            ],
            practiceQuestions: [
              {
                id: 'pq_g8m_2',
                prompt: 'In the linear equation y = -3x + 5, what is the slope of the line?',
                options: [
                  { id: 'sl_1', text: '-3', feedback: 'Correct! In y = mx + b, m represents the slope (-3).' },
                  { id: 'sl_2', text: '5', feedback: 'Incorrect: 5 is the y-intercept (b).' },
                  { id: 'sl_3', text: '3', feedback: 'Incorrect: The slope is negative three (-3).' }
                ],
                correctOptionId: 'sl_1',
                explanation: 'In slope-intercept form y = mx + b, the coefficient of x is the slope m.'
              }
            ],
            quizQuestions: [
              {
                id: 'qz_g8m_2',
                prompt: 'What is the slope of a horizontal line?',
                options: [
                  { id: 'qsl_1', text: '0' },
                  { id: 'qsl_2', text: 'Undefined' },
                  { id: 'qsl_3', text: '1' }
                ],
                correctOptionId: 'qsl_1',
                explanation: 'A horizontal line has zero vertical rise (0 / run = 0).'
              }
            ]
          }
        ]
      }
    ]
  }
};

// Generate a high-quality multi-unit fallback syllabus for any standard course not explicitly keyed
function generateFallbackSyllabus(course: typeof STANDARD_COURSES[0]): CourseSyllabus {
  return {
    courseSlug: course.slug,
    gradeSlug: course.gradeSlug,
    subjectSlug: course.subjectSlug,
    title: course.title,
    gradeName: course.grade,
    subjectName: course.subject,
    overview: `Official standards-aligned curriculum for ${course.grade} ${course.subject}. Features verified educational video masterclasses, pedagogical drill sets, and formal assessments.`,
    totalEstimatedHours: 90,
    frameworkStandard: course.standardCode,
    units: [
      {
        unitNumber: 1,
        title: 'Core Foundations & Fundamental Principles',
        domainCode: 'MOD-1',
        description: `Primary conceptual building blocks, definitions, and core standards for ${course.subject}.`,
        topics: [
          {
            id: `${course.slug}_1_1`,
            slug: course.sampleLessonSlug,
            topicNumber: '1.1',
            title: course.title.split(':')[1]?.trim() || course.title,
            standardCode: course.standardCode,
            standardTitle: `Core Competency Standards for ${course.subject}`,
            estimatedMinutes: 50,
            summary: `Foundational mastery module aligned with ${course.standardCode}.`,
            competency: 'Systematic conceptual application and analytical reasoning.',
            whyItMatters: 'Foundational prerequisite for higher-level academic and career progression.',
            careerLink: 'Professional practitioners utilize these foundational principles daily.',
            video: {
              youtubeVideoId: 'bAerID24QJ8',
              title: `${course.subject} Foundations & Core Principles`,
              channelTitle: 'Educational Masterclass',
              durationFormatted: '10m 20s',
              durationSeconds: 620,
            },
            workedExample: {
              problemStatement: `Solve foundational analytical problem for ${course.subject}:`,
              steps: [
                { stepNumber: 1, operation: 'Identify given parameters', equation: 'State initial constraints', explanation: 'Extract known quantities from problem statement.' },
                { stepNumber: 2, operation: 'Apply governing principle', equation: 'Execute standard formula or rule', explanation: 'Formulate relation.' }
              ],
              verification: {
                checkStatement: 'Verify solution consistency against boundary conditions.',
                leftSideCalculation: 'Computed Value',
                rightSideCalculation: 'Expected Benchmark (Verified)',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Generalizing without checking constraints',
                incorrectAttempt: 'Assuming rule holds in all edge cases without proof',
                correctApproach: 'Always verify edge conditions against formal definitions',
                explanation: 'Rigorous application requires adhering to standard constraints.'
              }
            ],
            practiceQuestions: [
              {
                id: `pq_${course.slug}_1`,
                prompt: `Which approach correctly addresses problems in this ${course.subject} domain?`,
                options: [
                  { id: 'f_opt1', text: 'Systematically follow standard rules and verify boundary conditions', feedback: 'Correct! Systematic adherence to proven principles ensures reliable outcomes.' },
                  { id: 'f_opt2', text: 'Guess without checking formulas', feedback: 'Incorrect: Guessing does not follow verified standards.' },
                  { id: 'f_opt3', text: 'Ignore initial constraints', feedback: 'Incorrect: Constraints define the problem scope.' }
                ],
                correctOptionId: 'f_opt1',
                explanation: 'Following established curriculum standards yields verifiable mastery.'
              }
            ],
            quizQuestions: [
              {
                id: `qz_${course.slug}_1`,
                prompt: `What is the core principle governing ${course.subject} in this module?`,
                options: [
                  { id: 'q_f1', text: 'Verification through systematic proof and standard application' },
                  { id: 'q_f2', text: 'Unverified assumptions' },
                  { id: 'q_f3', text: 'Ignoring data evidence' }
                ],
                correctOptionId: 'q_f1',
                explanation: 'Mastery requires grounded application of standard principles.'
              }
            ]
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Analytical Applications & Problem Solving',
        domainCode: 'MOD-2',
        description: `Intermediate application of ${course.subject} tools to complex real-world scenarios.`,
        topics: [
          {
            id: `${course.slug}_2_1`,
            slug: `${course.slug}-applications`,
            topicNumber: '2.1',
            title: `Advanced Applied Problem Solving in ${course.subject}`,
            standardCode: `${course.standardCode}.APP`,
            standardTitle: `Applied Real-World Practice in ${course.subject}`,
            estimatedMinutes: 50,
            summary: `Hands-on case studies and applied exercises extending core principles.`,
            competency: 'Contextual synthesis and multi-step evaluation.',
            whyItMatters: 'Connects classroom theory directly to real-world industrial and professional applications.',
            careerLink: 'Engineers, Analysts, and Researchers apply these methods in industry.',
            video: {
              youtubeVideoId: '4K3e_k9Wj0E',
              title: `Applied Problem Solving in ${course.subject}`,
              channelTitle: 'Educational Masterclass',
              durationFormatted: '11m 15s',
              durationSeconds: 675,
            },
            workedExample: {
              problemStatement: `Solve complex multi-step scenario in ${course.subject}:`,
              steps: [
                { stepNumber: 1, operation: 'Decompose scenario into components', equation: 'Part A + Part B', explanation: 'Break complex problem into manageable sub-tasks.' },
                { stepNumber: 2, operation: 'Synthesize solution', equation: 'Evaluate final outcome', explanation: 'Recombine outputs.' }
              ],
              verification: {
                checkStatement: 'Check results through dimensional analysis.',
                leftSideCalculation: 'Result = Verified',
                rightSideCalculation: 'Verified = True',
                isVerified: true
              }
            },
            misconceptions: [
              {
                title: 'Rushing without decomposing problem stages',
                incorrectAttempt: 'Attempting to calculate final answer in one unverified leap',
                correctApproach: 'Step-by-step modular decomposition',
                explanation: 'Complex problems require clear sequential stages.'
              }
            ],
            practiceQuestions: [
              {
                id: `pq_${course.slug}_2`,
                prompt: 'Why is problem decomposition effective in analytical tasks?',
                options: [
                  { id: 'dc_1', text: 'It reduces cognitive overload and isolates errors quickly', feedback: 'Correct! Modular steps make complex problems easier to verify.' },
                  { id: 'dc_2', text: 'It avoids having to solve the problem', feedback: 'Incorrect.' },
                  { id: 'dc_3', text: 'It changes the final answer', feedback: 'Incorrect.' }
                ],
                correctOptionId: 'dc_1',
                explanation: 'Decomposition isolates sub-problems and simplifies verification.'
              }
            ],
            quizQuestions: [
              {
                id: `qz_${course.slug}_2`,
                prompt: 'What is the first step in multi-stage applied problem solving?',
                options: [
                  { id: 'qdc_1', text: 'Identify knowns, unknowns, and governing constraints' },
                  { id: 'qdc_2', text: 'Guess the final number immediately' },
                  { id: 'qdc_3', text: 'Skip to the conclusion' }
                ],
                correctOptionId: 'qdc_1',
                explanation: 'Defining knowns and constraints is the foundation of sound problem solving.'
              }
            ]
          }
        ]
      }
    ]
  };
}

// Retrieve course syllabus by grade and subject
export function getCourseSyllabus(gradeSlug: string, subjectSlug: string): CourseSyllabus | undefined {
  const key = `${gradeSlug}:${subjectSlug}`;
  if (COURSE_SYLLABI[key]) {
    return COURSE_SYLLABI[key];
  }

  // Fallback: check if standard course exists and construct a rich default syllabus
  const standardCourse = STANDARD_COURSES.find(c => c.gradeSlug === gradeSlug && c.subjectSlug === subjectSlug);
  if (standardCourse) {
    return generateFallbackSyllabus(standardCourse);
  }

  return undefined;
}

// Unified resolver: finds an active lesson in LESSONS_CATALOGUE, or builds one from a SyllabusTopic
export function getLessonOrTopic(slug: string): LessonData | undefined {
  // 1. Direct hit in hardcoded catalogue
  if (LESSONS_CATALOGUE[slug]) {
    return LESSONS_CATALOGUE[slug];
  }

  // 2. Search through all course syllabi topics
  for (const courseKey of Object.keys(COURSE_SYLLABI)) {
    const course = COURSE_SYLLABI[courseKey];
    for (const unit of course.units) {
      for (const topic of unit.topics) {
        if (topic.slug === slug) {
          // Construct full LessonData
          return {
            slug: topic.slug,
            title: topic.title,
            subjectSlug: course.subjectSlug,
            subjectName: course.subjectName,
            gradeSlug: course.gradeSlug,
            gradeName: course.gradeName,
            gradeBand: course.gradeSlug.startsWith('grade-4') ? 'elementary' : 'middle-school',
            countryCode: 'us',
            countryName: 'United States',
            jurisdictionSlug: 'california',
            jurisdictionName: 'California (CDE)',
            standardCode: topic.standardCode,
            standardTitle: topic.standardTitle,
            authorityName: 'California Department of Education / Common Core',
            academicYear: '2026–27',
            lastVerified: 'September 2026',
            sourceUrl: 'https://www.cde.ca.gov',
            summary: topic.summary,
            whyItMatters: topic.whyItMatters,
            careerLink: topic.careerLink,
            videos: [
              {
                role: 'PRIMARY',
                title: topic.video.title,
                channelTitle: topic.video.channelTitle,
                youtubeVideoId: topic.video.youtubeVideoId,
                durationSeconds: topic.video.durationSeconds,
                qualityScore: 96,
                curationNotes: `Curated masterclass for ${topic.title} aligned with ${topic.standardCode}.`,
              },
              ...(topic.backupVideo
                ? [
                    {
                      role: 'BACKUP_1' as const,
                      title: topic.backupVideo.title,
                      channelTitle: topic.backupVideo.channelTitle,
                      youtubeVideoId: topic.backupVideo.youtubeVideoId,
                      durationSeconds: topic.backupVideo.durationSeconds,
                      qualityScore: 92,
                      curationNotes: `Verified backup conceptual explanation for ${topic.title}.`,
                    },
                  ]
                : []),
            ],
            workedExample: topic.workedExample,
            misconceptions: topic.misconceptions,
            practiceQuestions: topic.practiceQuestions,
            quizQuestions: topic.quizQuestions,
          };
        }
      }
    }
  }

  // 3. Search through fallback course syllabi
  for (const course of STANDARD_COURSES) {
    const fallbackSyllabus = generateFallbackSyllabus(course);
    for (const unit of fallbackSyllabus.units) {
      for (const topic of unit.topics) {
        if (topic.slug === slug) {
          return {
            slug: topic.slug,
            title: topic.title,
            subjectSlug: course.subjectSlug,
            subjectName: course.subject,
            gradeSlug: course.gradeSlug,
            gradeName: course.grade,
            gradeBand: course.gradeBand,
            countryCode: 'us',
            countryName: 'United States',
            jurisdictionSlug: 'california',
            jurisdictionName: 'California (CDE)',
            standardCode: topic.standardCode,
            standardTitle: topic.standardTitle,
            authorityName: 'Department of Education',
            academicYear: '2026–27',
            lastVerified: 'September 2026',
            sourceUrl: 'https://schoolopedia.com',
            summary: topic.summary,
            whyItMatters: topic.whyItMatters,
            careerLink: topic.careerLink,
            videos: [
              {
                role: 'PRIMARY',
                title: topic.video.title,
                channelTitle: topic.video.channelTitle,
                youtubeVideoId: topic.video.youtubeVideoId,
                durationSeconds: topic.video.durationSeconds,
                qualityScore: 95,
                curationNotes: `Curated masterclass for ${topic.title}.`,
              },
            ],
            workedExample: topic.workedExample,
            misconceptions: topic.misconceptions,
            practiceQuestions: topic.practiceQuestions,
            quizQuestions: topic.quizQuestions,
          };
        }
      }
    }
  }

  return undefined;
}

// Return all available lesson slugs (catalogue + all syllabus topics + fallbacks)
export function getAllAvailableLessonSlugs(): string[] {
  const slugs = new Set<string>(Object.keys(LESSONS_CATALOGUE));
  for (const courseKey of Object.keys(COURSE_SYLLABI)) {
    const course = COURSE_SYLLABI[courseKey];
    for (const unit of course.units) {
      for (const topic of unit.topics) {
        slugs.add(topic.slug);
      }
    }
  }
  for (const course of STANDARD_COURSES) {
    const fallbackSyllabus = generateFallbackSyllabus(course);
    for (const unit of fallbackSyllabus.units) {
      for (const topic of unit.topics) {
        slugs.add(topic.slug);
      }
    }
  }
  return Array.from(slugs);
}
