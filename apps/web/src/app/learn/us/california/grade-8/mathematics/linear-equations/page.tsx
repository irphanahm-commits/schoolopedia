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
          text: 'Sometimes the variable terms cancel out entirely!\n• No Solution (Contradiction): If you arrive at an impossible statement such as 0 = 8 or -7 = 9, no real number satisfies the equation.\n• Infinitely Many Solutions (Identity): If you arrive at a statement that is always true such as 5 = 5 or 2x = 2x, every real number is a valid solution.',
        },
      },
      {
        id: 'blk_7',
        type: 'COMMON_MISTAKE' as const,
        order_index: 7,
        data: {
          title: 'The Negative Sign Distribution Trap',
          mistake: 'Writing -(3x - 5) as -3x - 5.',
          correction: 'The negative sign multiplies EVERY term inside: -(3x - 5) = -3x + 5.',
        },
      },
      {
        id: 'blk_8',
        type: 'SUMMARY' as const,
        order_index: 8,
        data: {
          text: 'Every linear equation simplifies into one of three structural outcomes: (1) x = a (one unique solution), (2) a = b where a ≠ b (no solution), or (3) a = a (infinitely many solutions).',
        },
      },
    ],
    practiceQuestions: [
      {
        id: 'q_prac_1',
        type: 'MULTIPLE_CHOICE' as const,
        prompt: 'Solve for x: 4x + 7 = 2x + 19',
        explanation: 'Subtract 2x from both sides to get 2x + 7 = 19. Subtract 7 to get 2x = 12. Divide by 2 to get x = 6.',
        options: [
          { id: 'opt_p1_a', question_id: 'q_prac_1', text: 'x = 6', is_correct: true, feedback: 'Correct! Step-by-step subtraction and division isolates x = 6.', order_index: 1 },
          { id: 'opt_p1_b', question_id: 'q_prac_1', text: 'x = 13', is_correct: false, feedback: 'Did you forget to divide by 2 after subtracting 7?', order_index: 2 },
          { id: 'opt_p1_c', question_id: 'q_prac_1', text: 'x = 4', is_correct: false, feedback: 'Check: 4(4) + 7 = 23, but 2(4) + 19 = 27. They do not match.', order_index: 3 },
          { id: 'opt_p1_d', question_id: 'q_prac_1', text: 'x = -6', is_correct: false, feedback: 'Watch the signs when subtracting 2x and 7.', order_index: 4 },
        ],
      },
      {
        id: 'q_prac_2',
        type: 'MULTIPLE_CHOICE' as const,
        prompt: 'Solve for x: 2(3x - 1) = 6x - 2',
        explanation: 'Expand the left side: 6x - 2 = 6x - 2. Since both sides are identical for all x, this equation has infinitely many solutions (an identity).',
        options: [
          { id: 'opt_p2_a', question_id: 'q_prac_2', text: 'x = 0', is_correct: false, feedback: 'While x = 0 is a solution, it is not the ONLY solution.', order_index: 1 },
          { id: 'opt_p2_b', question_id: 'q_prac_2', text: 'Infinitely many solutions', is_correct: true, feedback: 'Spot on! Both sides are identical expressions, so any real number satisfies it.', order_index: 2 },
          { id: 'opt_p2_c', question_id: 'q_prac_2', text: 'No solution', is_correct: false, feedback: 'No solution occurs only when you reach a contradiction like 0 = 5.', order_index: 3 },
          { id: 'opt_p2_d', question_id: 'q_prac_2', text: 'x = 2', is_correct: false, feedback: 'Expand both sides to compare the resulting equations.', order_index: 4 },
        ],
      },
      {
        id: 'q_prac_3',
        type: 'MULTIPLE_CHOICE' as const,
        prompt: 'Solve for x: 5x - 3 = 5x + 7',
        explanation: 'Subtracting 5x from both sides yields -3 = 7, which is a mathematical impossibility. Therefore, there is no solution.',
        options: [
          { id: 'opt_p3_a', question_id: 'q_prac_3', text: 'x = 10', is_correct: false, feedback: 'Substitute 10: 50 - 3 = 47, but 50 + 7 = 57. Not equal.', order_index: 1 },
          { id: 'opt_p3_b', question_id: 'q_prac_3', text: 'No solution', is_correct: true, feedback: 'Correct! The variable terms cancel leaving the contradiction -3 = 7.', order_index: 2 },
          { id: 'opt_p3_c', question_id: 'q_prac_3', text: 'x = 0', is_correct: false, feedback: 'When x = 0, -3 ≠ 7.', order_index: 3 },
          { id: 'opt_p3_d', question_id: 'q_prac_3', text: 'Infinitely many solutions', is_correct: false, feedback: 'This statement is NEVER true, so it cannot have infinite solutions.', order_index: 4 },
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
          type: 'MULTIPLE_CHOICE',
          prompt: 'Solve: 5(x - 2) = 3x + 4',
          options: [
            { id: 'opt_q1_a', question_id: 'q_quiz_1', text: 'x = 7', order_index: 1 },
            { id: 'opt_q1_b', question_id: 'q_quiz_1', text: 'x = 3', order_index: 2 },
            { id: 'opt_q1_c', question_id: 'q_quiz_1', text: 'x = 1', order_index: 3 },
            { id: 'opt_q1_d', question_id: 'q_quiz_1', text: 'x = 14', order_index: 4 },
          ],
        },
        {
          id: 'q_quiz_2',
          type: 'MULTIPLE_CHOICE',
          prompt: 'How many solutions does 4(2x + 1) = 8x + 4 have?',
          options: [
            { id: 'opt_q2_a', question_id: 'q_quiz_2', text: 'Exactly one solution (x = 1)', order_index: 1 },
            { id: 'opt_q2_b', question_id: 'q_quiz_2', text: 'No solution', order_index: 2 },
            { id: 'opt_q2_c', question_id: 'q_quiz_2', text: 'Infinitely many solutions', order_index: 3 },
            { id: 'opt_q2_d', question_id: 'q_quiz_2', text: 'Exactly two solutions', order_index: 4 },
          ],
        },
        {
          id: 'q_quiz_3',
          type: 'MULTIPLE_CHOICE',
          prompt: 'How many solutions does 3x + 5 = 3x - 2 have?',
          options: [
            { id: 'opt_q3_a', question_id: 'q_quiz_3', text: 'No solution', order_index: 1 },
            { id: 'opt_q3_b', question_id: 'q_quiz_3', text: 'Infinitely many solutions', order_index: 2 },
            { id: 'opt_q3_c', question_id: 'q_quiz_3', text: 'x = 0', order_index: 3 },
            { id: 'opt_q3_d', question_id: 'q_quiz_3', text: 'x = 7', order_index: 4 },
          ],
        },
        {
          id: 'q_quiz_4',
          type: 'MULTIPLE_CHOICE',
          prompt: 'Solve: -2(x - 5) + 3 = 17',
          options: [
            { id: 'opt_q4_a', question_id: 'q_quiz_4', text: 'x = -2', order_index: 1 },
            { id: 'opt_q4_b', question_id: 'q_quiz_4', text: 'x = 2', order_index: 2 },
            { id: 'opt_q4_c', question_id: 'q_quiz_4', text: 'x = -5', order_index: 3 },
            { id: 'opt_q4_d', question_id: 'q_quiz_4', text: 'x = 5', order_index: 4 },
          ],
        },
        {
          id: 'q_quiz_5',
          type: 'MULTIPLE_CHOICE',
          prompt: 'Which step is mathematically valid when solving 7x - 4 = 2x + 11?',
          options: [
            { id: 'opt_q5_a', question_id: 'q_quiz_5', text: 'Subtract 2x from both sides to get 5x - 4 = 11', order_index: 1 },
            { id: 'opt_q5_b', question_id: 'q_quiz_5', text: 'Subtract 4 from both sides to get 7x = 2x + 7', order_index: 2 },
            { id: 'opt_q5_c', question_id: 'q_quiz_5', text: 'Divide only the left side by 7', order_index: 3 },
            { id: 'opt_q5_d', question_id: 'q_quiz_5', text: 'Add 2x to both sides to get 9x - 4 = 11', order_index: 4 },
          ],
        },
      ],
    },
  };

  return (
    <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Breadcrumb Trail */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.86rem',
        color: '#64748b',
        fontWeight: 600,
        marginBottom: '24px',
        flexWrap: 'wrap',
      }}>
        <Link href="/" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
          Home
        </Link>
        <span>/</span>
        <span>USA</span>
        <span>/</span>
        <span>California</span>
        <span>/</span>
        <span>Public Schools</span>
        <span>/</span>
        <span>Grade 8</span>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 700 }}>Mathematics</span>
      </nav>

      {/* Lesson Hero Header Card (StudentClass Elevated White Card) */}
      <div
        className="student-card"
        style={{
          padding: '36px',
          marginBottom: '32px',
          border: '1.5px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <span className="badge badge-standard">{lessonData.standardCode}</span>
              <span className="badge badge-verified">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {lessonData.authority}
              </span>
              <span className="badge badge-curriculum">Grade 8</span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em', marginBottom: '8px' }}>
              {lessonData.title}
            </h1>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Official Academic Year: <strong style={{ color: '#334155' }}>{lessonData.academicYear}</strong> • Last Verified: <strong style={{ color: '#334155' }}>{lessonData.lastVerified}</strong>
            </p>
          </div>

          {/* Mastery Badge */}
          <div style={{
            padding: '14px 20px',
            borderRadius: '16px',
            background: isMastered ? '#ecfdf5' : '#f8fafc',
            border: isMastered ? '2px solid #10b981' : '1.5px solid #e2e8f0',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          }}>
            <div style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: isMastered ? '#047857' : '#64748b' }}>
              Mastery Status
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: isMastered ? '#065f46' : '#1e293b', marginTop: '2px' }}>
              {isMastered ? '★ MASTERED' : 'In Progress'}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
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
            style={{ fontSize: '0.84rem', color: 'var(--accent-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            Official Framework Document ↗
          </Link>
        </div>
      </div>

      {/* Segmented Pill Tabs Navigation (StudentClass Style) */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
        <div className="pill-tab-bar">
          <button
            onClick={() => setActiveTab('LESSON')}
            className={`pill-tab-item ${activeTab === 'LESSON' ? 'active' : ''}`}
            id="tab-lesson"
          >
            <span>📖 Lesson & Videos</span>
          </button>

          <button
            onClick={() => setActiveTab('PRACTICE')}
            className={`pill-tab-item ${activeTab === 'PRACTICE' ? 'active' : ''}`}
            id="tab-practice"
          >
            <span>✏️ Interactive Practice</span>
            <span style={{
              background: activeTab === 'PRACTICE' ? 'var(--accent-primary-tint)' : '#e2e8f0',
              color: activeTab === 'PRACTICE' ? 'var(--accent-primary)' : '#475569',
              padding: '2px 8px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
            }}>
              {lessonData.practiceQuestions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('QUIZ')}
            className={`pill-tab-item ${activeTab === 'QUIZ' ? 'active' : ''}`}
            id="tab-quiz"
          >
            <span>🏆 Mastery Quiz</span>
            <span style={{
              background: activeTab === 'QUIZ' ? 'var(--accent-primary-tint)' : '#e2e8f0',
              color: activeTab === 'QUIZ' ? 'var(--accent-primary)' : '#475569',
              padding: '2px 8px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
            }}>
              {lessonData.quiz.questions.length}
            </span>
          </button>
        </div>
      </div>

      {/* Tab 1: Lesson Content */}
      {activeTab === 'LESSON' && (
        <div>
          <VideoPlayer videos={lessonData.videos} />
          <ContentBlocks blocks={lessonData.blocks} />

          <div style={{ textAlign: 'center', marginTop: '48px', marginBottom: '48px' }}>
            <button
              onClick={() => setActiveTab('PRACTICE')}
              className="btn btn-primary"
              id="btn-proceed-to-practice"
              style={{ padding: '14px 32px', fontSize: '1.05rem', gap: '10px' }}
            >
              <span>Start Interactive Practice Questions</span>
              <span>→</span>
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
          <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '48px' }}>
            <button
              onClick={() => setActiveTab('QUIZ')}
              className="btn btn-primary"
              id="btn-proceed-to-quiz"
              style={{ padding: '14px 32px', fontSize: '1.05rem', gap: '10px' }}
            >
              <span>Proceed to Mastery Quiz</span>
              <span>→</span>
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

      {/* Next Lesson Recommendation Card */}
      <div className="student-card" style={{
        padding: '32px',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '32px',
        border: '1.5px solid var(--border-subtle)',
      }}>
        <div>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '0.04em' }}>
            Next in California Grade 8 Mathematics
          </span>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>
            Graphing Proportional Relationships & Unit Rate
          </h4>
          <span className="badge badge-standard">CCSS.MATH.CONTENT.8.EE.B.5</span>
        </div>

        <Link
          href="/"
          className="btn btn-secondary"
          style={{ padding: '10px 22px', fontSize: '0.9rem' }}
        >
          View Full Curriculum Tree →
        </Link>
      </div>
    </div>
  );
}
