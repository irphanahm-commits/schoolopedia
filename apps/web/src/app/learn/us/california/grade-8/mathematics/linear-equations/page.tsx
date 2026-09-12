'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { VideoPlayer } from '@/components/VideoPlayer';
import { ContentBlocks } from '@/components/ContentBlocks';
import { PracticeRunner } from '@/components/PracticeRunner';
import { QuizRunner } from '@/components/QuizRunner';

export default function LinearEquationsLessonPage() {
  const [activeTab, setActiveTab] = useState<'LESSON' | 'PRACTICE' | 'QUIZ'>('LESSON');
  const [isMastered, setIsMastered] = useState(false);

  // Lesson Data (Hardened & grounded in California CCSS 8.EE.C.7)
  const lessonData = {
    title: 'Solving Linear Equations in One Variable',
    standardCode: 'CCSS.MATH.CONTENT.8.EE.C.7',
    authority: 'California Department of Education',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.cde.ca.gov/ci/ma/cf/',
    videos: [
      {
        video: {
          id: 'vid_khan_linear_eq',
          youtube_video_id: 'bAerID24QJg',
          title: 'Linear Equations with Variables on Both Sides',
          channel_title: 'Khan Academy',
          channel_id: 'UC4a-Gbdw7vOaccHmFo40b9g',
          duration_seconds: 534,
          state: 'AVAILABLE' as const,
          quality_score: {
            curriculum_alignment: 95,
            topic_coverage: 90,
            grade_suitability: 95,
            explanation_quality: 95,
            creator_credibility: 98,
            freshness: 85,
            availability: 100,
            total_score: 93,
          },
          last_verified_at: '2026-09-12T00:00:00Z',
          created_at: '2026-09-12T00:00:00Z',
          updated_at: '2026-09-12T00:00:00Z',
        },
        mapping: {
          id: 'vm_primary_khan',
          lesson_version_id: 'lv_ca8_math_linear_equations_v1',
          video_id: 'vid_khan_linear_eq',
          role: 'PRIMARY' as const,
          curation_notes: 'Clear alignment with Grade 8 CCSS 8.EE.C.7, directly demonstrating balance method and parentheses handling.',
          created_at: '2026-09-12T00:00:00Z',
        },
      },
      {
        video: {
          id: 'vid_mathantics_linear_eq',
          youtube_video_id: 'Qyd_v3DGzTM',
          title: 'Algebra Basics: Solving 2-Step Equations',
          channel_title: 'mathantics',
          channel_id: 'UC9gOzOQJ85R5p_f5u9X6-yA',
          duration_seconds: 628,
          state: 'AVAILABLE' as const,
          quality_score: {
            curriculum_alignment: 90,
            topic_coverage: 85,
            grade_suitability: 95,
            explanation_quality: 92,
            creator_credibility: 95,
            freshness: 80,
            availability: 100,
            total_score: 89,
          },
          last_verified_at: '2026-09-12T00:00:00Z',
          created_at: '2026-09-12T00:00:00Z',
          updated_at: '2026-09-12T00:00:00Z',
        },
        mapping: {
          id: 'vm_backup_mathantics',
          lesson_version_id: 'lv_ca8_math_linear_equations_v1',
          video_id: 'vid_mathantics_linear_eq',
          role: 'BACKUP_1' as const,
          curation_notes: 'Strong visual intuition for foundational two-step operations before multi-step problem solving.',
          created_at: '2026-09-12T00:00:00Z',
        },
      },
    ],
    blocks: [
      {
        id: 'blk_1',
        type: 'HEADING' as const,
        order_index: 1,
        data: { level: 2, text: 'What is a Linear Equation in One Variable?' },
      },
      {
        id: 'blk_2',
        type: 'TEXT' as const,
        order_index: 2,
        data: {
          text: 'A linear equation in one variable is an equality involving a variable raised only to the first power (such as x). The fundamental goal of solving an equation is to isolate the variable on one side by performing inverse operations equally to both sides of the equals sign.',
        },
      },
      {
        id: 'blk_3',
        type: 'HEADING' as const,
        order_index: 3,
        data: { level: 3, text: 'The 4-Step Standard Procedure' },
      },
      {
        id: 'blk_4',
        type: 'TEXT' as const,
        order_index: 4,
        data: {
          text: '1. Clear Parentheses: Use the distributive property: a(b + c) = ab + ac.\n2. Combine Like Terms: Simplify each side independently before moving terms across the equals sign.\n3. Isolate Variable Terms: Use addition or subtraction to collect all variable terms on one side and constant numbers on the opposite side.\n4. Solve for the Coefficient: Multiply or divide by the variable coefficient to achieve x = a.',
        },
      },
      {
        id: 'blk_5',
        type: 'EXAMPLE' as const,
        order_index: 5,
        data: {
          title: 'Worked Example: Solving with Variables on Both Sides',
          problem: 'Solve for x: 3(2x - 4) + 5 = 2x + 9',
          steps: [
            'Step 1: Distribute the 3 across parentheses: 6x - 12 + 5 = 2x + 9',
            'Step 2: Combine like terms on the left: 6x - 7 = 2x + 9',
            'Step 3: Subtract 2x from both sides: 4x - 7 = 9',
            'Step 4: Add 7 to both sides: 4x = 16',
            'Step 5: Divide by 4: x = 4',
          ],
          verification: 'Check: Left side: 3(2(4) - 4) + 5 = 3(4) + 5 = 17. Right side: 2(4) + 9 = 8 + 9 = 17. Both sides equal 17!',
        },
      },
      {
        id: 'blk_6',
        type: 'CALLOUT' as const,
        order_index: 6,
        data: {
          variant: 'WARNING',
          title: 'Special Cases: No Solution vs. Infinitely Many Solutions',
          text: 'Sometimes the variable cancels out entirely!\n• No Solution (Contradiction): If you arrive at an impossible statement like 0 = 8 or -7 = 9, no value of x can make it true.\n• Infinitely Many Solutions (Identity): If both sides are identical (like 5 = 5 or 2x = 2x), any real number is a valid solution.',
        },
      },
      {
        id: 'blk_7',
        type: 'COMMON_MISTAKE' as const,
        order_index: 7,
        data: {
          title: 'Watch Out: Distributing Negative Signs',
          mistake: 'Writing -(3x - 5) as -3x - 5',
          correction: 'The negative sign multiplies every term inside: -(3x - 5) = -3x + 5',
        },
      },
      {
        id: 'blk_8',
        type: 'SUMMARY' as const,
        order_index: 8,
        data: {
          text: 'Every linear equation simplifies into one of three structural forms: (1) x = a (one solution), (2) a = b where a != b (no solution), or (3) a = a (infinitely many solutions).',
        },
      },
    ],
    practiceQuestions: [
      {
        id: 'q_prac_1',
        objective_id: 'obj_ca8_math_8_ee_c_7',
        type: 'MCQ' as const,
        prompt: 'Solve for x: 5x - 8 = 22',
        explanation: 'Add 8 to both sides to get 5x = 30. Then divide both sides by 5 to find x = 6.',
        difficulty_level: 1 as const,
        created_at: '',
        updated_at: '',
        options: [
          { id: 'opt_p1_1', question_id: 'q_prac_1', text: 'x = 6', is_correct: true, feedback: 'Correct! 5(6) - 8 = 30 - 8 = 22.', order_index: 1 },
          { id: 'opt_p1_2', question_id: 'q_prac_1', text: 'x = 2.8', is_correct: false, feedback: 'Did you subtract 8 instead of adding 8?', order_index: 2 },
          { id: 'opt_p1_3', question_id: 'q_prac_1', text: 'x = 5', is_correct: false, feedback: 'Remember to add 8 before dividing by 5.', order_index: 3 },
          { id: 'opt_p1_4', question_id: 'q_prac_1', text: 'x = 30', is_correct: false, feedback: 'You forgot to divide by 5.', order_index: 4 },
        ],
      },
      {
        id: 'q_prac_2',
        objective_id: 'obj_ca8_math_8_ee_c_7',
        type: 'MCQ' as const,
        prompt: 'Solve for x: 3(x + 4) = 21',
        explanation: 'Distribute 3: 3x + 12 = 21. Subtract 12: 3x = 9. Divide by 3: x = 3.',
        difficulty_level: 2 as const,
        created_at: '',
        updated_at: '',
        options: [
          { id: 'opt_p2_1', question_id: 'q_prac_2', text: 'x = 3', is_correct: true, feedback: 'Great job! 3(3 + 4) = 3(7) = 21.', order_index: 1 },
          { id: 'opt_p2_2', question_id: 'q_prac_2', text: 'x = 7', is_correct: false, feedback: '7 is the value of (x + 4), not x.', order_index: 2 },
          { id: 'opt_p2_3', question_id: 'q_prac_2', text: 'x = 5', is_correct: false, feedback: 'Check your subtraction after distributing.', order_index: 3 },
          { id: 'opt_p2_4', question_id: 'q_prac_2', text: 'x = 1', is_correct: false, feedback: 'Remember that 3 multiplies both x and 4.', order_index: 4 },
        ],
      },
      {
        id: 'q_prac_3',
        objective_id: 'obj_ca8_math_8_ee_c_7',
        type: 'MCQ' as const,
        prompt: 'Classify the equation: 4x + 6 = 4x - 2',
        explanation: 'Subtracting 4x from both sides gives 6 = -2, which is impossible. Hence, no solution exists.',
        difficulty_level: 3 as const,
        created_at: '',
        updated_at: '',
        options: [
          { id: 'opt_p3_1', question_id: 'q_prac_3', text: 'No solution', is_correct: true, feedback: 'Exactly! 6 = -2 is never true, so no value of x satisfies the equation.', order_index: 1 },
          { id: 'opt_p3_2', question_id: 'q_prac_3', text: 'One solution: x = 0', is_correct: false, feedback: '4(0)+6 = 6, but 4(0)-2 = -2. They are not equal.', order_index: 2 },
          { id: 'opt_p3_3', question_id: 'q_prac_3', text: 'Infinitely many solutions', is_correct: false, feedback: 'Infinitely many solutions occur only when both sides are identical identities (e.g. 6 = 6).', order_index: 3 },
          { id: 'opt_p3_4', question_id: 'q_prac_3', text: 'x = 4', is_correct: false, feedback: 'The variable terms cancel each other out completely.', order_index: 4 },
        ],
      },
    ],
    quiz: {
      id: 'quiz_ca8_math_linear_equations',
      title: 'Mastery Assessment: Linear Equations in One Variable',
      passingPercentage: 80,
      questions: [
        {
          id: 'q_quiz_1',
          type: 'MCQ',
          prompt: 'Solve for m: 4m - 7 = 2m + 11',
          options: [
            { id: 'opt_q1_1', question_id: 'q_quiz_1', text: 'm = 9', order_index: 1 },
            { id: 'opt_q1_2', question_id: 'q_quiz_1', text: 'm = 2', order_index: 2 },
            { id: 'opt_q1_3', question_id: 'q_quiz_1', text: 'm = 18', order_index: 3 },
            { id: 'opt_q1_4', question_id: 'q_quiz_1', text: 'm = -9', order_index: 4 },
          ],
        },
        {
          id: 'q_quiz_2',
          type: 'MCQ',
          prompt: 'Solve for y: 2(3y - 1) = 4y + 8',
          options: [
            { id: 'opt_q2_1', question_id: 'q_quiz_2', text: 'y = 5', order_index: 1 },
            { id: 'opt_q2_2', question_id: 'q_quiz_2', text: 'y = 3', order_index: 2 },
            { id: 'opt_q2_3', question_id: 'q_quiz_2', text: 'y = 10', order_index: 3 },
            { id: 'opt_q2_4', question_id: 'q_quiz_2', text: 'y = 4', order_index: 4 },
          ],
        },
        {
          id: 'q_quiz_3',
          type: 'MCQ',
          prompt: 'Which of the following equations has infinitely many solutions?',
          options: [
            { id: 'opt_q3_1', question_id: 'q_quiz_3', text: '5(x + 2) = 5x + 10', order_index: 1 },
            { id: 'opt_q3_2', question_id: 'q_quiz_3', text: '5x + 2 = 5x + 10', order_index: 2 },
            { id: 'opt_q3_3', question_id: 'q_quiz_3', text: '5x = 10', order_index: 3 },
            { id: 'opt_q3_4', question_id: 'q_quiz_3', text: '5(x + 2) = 10', order_index: 4 },
          ],
        },
        {
          id: 'q_quiz_4',
          type: 'MCQ',
          prompt: 'Solve for p: -2(p - 3) = 16',
          options: [
            { id: 'opt_q4_1', question_id: 'q_quiz_4', text: 'p = -5', order_index: 1 },
            { id: 'opt_q4_2', question_id: 'q_quiz_4', text: 'p = 5', order_index: 2 },
            { id: 'opt_q4_3', question_id: 'q_quiz_4', text: 'p = -11', order_index: 3 },
            { id: 'opt_q4_4', question_id: 'q_quiz_4', text: 'p = -8', order_index: 4 },
          ],
        },
        {
          id: 'q_quiz_5',
          type: 'MCQ',
          prompt: 'Solve for w: (1/2)w + 3 = 7',
          options: [
            { id: 'opt_q5_1', question_id: 'q_quiz_5', text: 'w = 8', order_index: 1 },
            { id: 'opt_q5_2', question_id: 'q_quiz_5', text: 'w = 2', order_index: 2 },
            { id: 'opt_q5_3', question_id: 'q_quiz_5', text: 'w = 14', order_index: 3 },
            { id: 'opt_q5_4', question_id: 'q_quiz_5', text: 'w = 5', order_index: 4 },
          ],
        },
      ],
    },
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 24px' }}>
      {/* Breadcrumbs */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--text-secondary)' }}>USA</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>California</span>
        <span>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>Grade 8</span>
        <span>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>Mathematics</span>
        <span>/</span>
        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Linear Equations</span>
      </nav>

      {/* Official Standard Header Card */}
      <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px' }} id="lesson-header-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <span className="badge badge-standard">{lessonData.standardCode}</span>
              <span className="badge badge-verified">✓ {lessonData.authority}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, marginBottom: '8px' }}>
              {lessonData.title}
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Official Academic Year: <strong>{lessonData.academicYear}</strong> • Verified: <strong>{lessonData.lastVerified}</strong>
            </p>
          </div>

          {/* Mastery Badge */}
          <div style={{
            padding: '12px 18px',
            borderRadius: 'var(--radius-md)',
            background: isMastered ? 'var(--accent-emerald-subtle)' : 'var(--bg-secondary)',
            border: isMastered ? '2px solid var(--accent-emerald)' : '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: isMastered ? 'var(--accent-emerald)' : 'var(--text-muted)' }}>
              Mastery Status
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: isMastered ? 'var(--accent-emerald)' : 'var(--text-secondary)', marginTop: '2px' }}>
              {isMastered ? '★ MASTERED' : 'Not Mastered Yet'}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="badge badge-curriculum">Linear Equation</span>
            <span className="badge badge-curriculum">Distributive Property</span>
            <span className="badge badge-curriculum">Like Terms</span>
            <span className="badge badge-curriculum">Zero/Infinite Solutions</span>
          </div>

          <Link
            href={lessonData.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', fontWeight: 600 }}
          >
            Official Framework Document ↗
          </Link>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div style={{
        display: 'flex',
        gap: '12px',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '32px',
      }}>
        <button
          onClick={() => setActiveTab('LESSON')}
          id="tab-lesson"
          style={{
            padding: '12px 24px',
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: 700,
            background: 'transparent',
            border: 'none',
            color: activeTab === 'LESSON' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            borderBottom: activeTab === 'LESSON' ? '3px solid var(--accent-primary)' : '3px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          1. Lesson & Videos
        </button>

        <button
          onClick={() => setActiveTab('PRACTICE')}
          id="tab-practice"
          style={{
            padding: '12px 24px',
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: 700,
            background: 'transparent',
            border: 'none',
            color: activeTab === 'PRACTICE' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            borderBottom: activeTab === 'PRACTICE' ? '3px solid var(--accent-primary)' : '3px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          2. Interactive Practice ({lessonData.practiceQuestions.length})
        </button>

        <button
          onClick={() => setActiveTab('QUIZ')}
          id="tab-quiz"
          style={{
            padding: '12px 24px',
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: 700,
            background: 'transparent',
            border: 'none',
            color: activeTab === 'QUIZ' ? 'var(--accent-primary)' : 'var(--text-secondary)',
            borderBottom: activeTab === 'QUIZ' ? '3px solid var(--accent-primary)' : '3px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          3. Mastery Quiz ({lessonData.quiz.questions.length})
        </button>
      </div>

      {/* Tab 1: Lesson Content */}
      {activeTab === 'LESSON' && (
        <div>
          <VideoPlayer videos={lessonData.videos} />
          <ContentBlocks blocks={lessonData.blocks} />

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => setActiveTab('PRACTICE')}
              className="btn btn-primary"
              id="btn-proceed-to-practice"
              style={{ padding: '14px 28px', fontSize: '1.05rem' }}
            >
              Start Interactive Practice Questions →
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive Practice */}
      {activeTab === 'PRACTICE' && (
        <div>
          <PracticeRunner
            practiceId="prac_ca8_math_linear_equations"
            questions={lessonData.practiceQuestions}
          />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={() => setActiveTab('QUIZ')}
              className="btn btn-primary"
              id="btn-proceed-to-quiz"
              style={{ padding: '14px 28px', fontSize: '1.05rem' }}
            >
              Proceed to Mastery Quiz →
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Mastery Quiz */}
      {activeTab === 'QUIZ' && (
        <QuizRunner
          quizId={lessonData.quiz.id}
          title={lessonData.quiz.title}
          questions={lessonData.quiz.questions}
          passingPercentage={lessonData.quiz.passingPercentage}
          onMasteryAchieved={() => setIsMastered(true)}
        />
      )}

      {/* Next Lesson Recommendation Banner */}
      <div
        className="glass-panel"
        style={{
          marginTop: '60px',
          padding: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          borderLeft: '4px solid var(--accent-primary)',
        }}
        id="next-lesson-cta-banner"
      >
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '4px' }}>
            Next in California Grade 8 Mathematics
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            Graphing Proportional Relationships & Unit Rate
          </h3>
          <span className="badge badge-standard" style={{ marginTop: '6px' }}>
            CCSS.MATH.CONTENT.8.EE.B.5
          </span>
        </div>

        <Link
          href="/learn/us/california/grade-8/mathematics/linear-equations"
          className="btn btn-secondary"
          id="btn-next-lesson"
        >
          Next Lesson ↗
        </Link>
      </div>
    </div>
  );
}
