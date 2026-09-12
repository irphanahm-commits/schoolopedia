-- Seed Data: 0001_california_grade8_math_linear_equations.sql
-- First Vertical Slice: USA → California → Public School System → 2026-27 → Grade 8 → Mathematics → Linear Equations

PRAGMA foreign_keys = ON;

-- 1. Country: United States
INSERT OR IGNORE INTO countries (id, code, name, created_at, updated_at)
VALUES ('country_us', 'US', 'United States', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 2. Jurisdiction: California
INSERT OR IGNORE INTO jurisdictions (id, country_id, code, name, slug, authority_name, created_at, updated_at)
VALUES ('jur_us_ca', 'country_us', 'CA', 'California', 'california', 'California Department of Education', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 3. Education System: Public School System
INSERT OR IGNORE INTO education_systems (id, jurisdiction_id, name, slug, created_at, updated_at)
VALUES ('edsys_us_ca_public', 'jur_us_ca', 'Public School System', 'public', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 4. Curriculum Framework: CA Common Core State Standards for Mathematics
INSERT OR IGNORE INTO curriculum_frameworks (id, education_system_id, name, code, created_at, updated_at)
VALUES ('framework_ca_ccssm', 'edsys_us_ca_public', 'California Common Core State Standards for Mathematics', 'CA-CCSSM', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 5. Academic Year: 2026-27
INSERT OR IGNORE INTO academic_years (id, name, start_date, end_date, is_current, created_at)
VALUES ('ay_2026_27', '2026-27', '2026-08-01', '2027-06-30', 1, '2026-09-12T00:00:00Z');

-- 6. Source
INSERT OR IGNORE INTO sources (id, jurisdiction_id, authority_name, source_type, curriculum_url, standards_url, parser_identifier, parser_version, trust_status, created_at, updated_at)
VALUES (
  'source_ca_cde_math',
  'jur_us_ca',
  'California Department of Education',
  'OPEN_DATA',
  'https://www.cde.ca.gov/ci/ma/cf/',
  'https://www.cde.ca.gov/be/st/ss/documents/ccssmathstandardaug2013.pdf',
  'cde_math_parser',
  '1.0.0',
  'VERIFIED',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);

-- 7. Curriculum Version: 2026-27 Published Version
INSERT OR IGNORE INTO curriculum_versions (id, framework_id, academic_year_id, version_number, status, published_at, verified_at, verified_by, created_at, updated_at)
VALUES (
  'cv_ca_ccssm_2026_27',
  'framework_ca_ccssm',
  'ay_2026_27',
  '2026.1',
  'PUBLISHED',
  '2026-08-01T00:00:00Z',
  '2026-08-01T00:00:00Z',
  'California State Board of Education',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);

-- 8. Grade: Grade 8
INSERT OR IGNORE INTO grades (id, jurisdiction_id, level, name, slug, created_at)
VALUES ('grade_ca_8', 'jur_us_ca', 8, 'Grade 8', 'grade-8', '2026-09-12T00:00:00Z');

-- 9. Subject: Mathematics
INSERT OR IGNORE INTO subjects (id, name, slug, code, created_at)
VALUES ('subj_math', 'Mathematics', 'mathematics', 'MATH', '2026-09-12T00:00:00Z');

-- 10. Course: Grade 8 Mathematics
INSERT OR IGNORE INTO courses (id, curriculum_version_id, grade_id, subject_id, title, slug, description, created_at, updated_at)
VALUES (
  'course_ca_grade8_math',
  'cv_ca_ccssm_2026_27',
  'grade_ca_8',
  'subj_math',
  'Grade 8 Mathematics',
  'grade-8-mathematics',
  'Comprehensive Grade 8 Mathematics aligned to the California Common Core State Standards.',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);

-- 11. Unit: Linear Equations in One Variable
INSERT OR IGNORE INTO units (id, course_id, title, slug, order_index, description, created_at, updated_at)
VALUES (
  'unit_ca8_math_linear_equations',
  'course_ca_grade8_math',
  'Linear Equations in One Variable',
  'linear-equations',
  1,
  'Understanding expressions and equations, solving linear equations with one, zero, or infinite solutions, and applying the distributive property.',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);

-- 12. Learning Objective: CCSS.MATH.CONTENT.8.EE.C.7
INSERT OR IGNORE INTO learning_objectives (id, unit_id, official_code, title, description, slug, order_index, is_active, created_at, updated_at)
VALUES (
  'obj_ca8_math_8_ee_c_7',
  'unit_ca8_math_linear_equations',
  'CCSS.MATH.CONTENT.8.EE.C.7',
  'Solve Linear Equations in One Variable',
  'Solve linear equations in one variable with rational number coefficients, expanding expressions using the distributive property, collecting like terms, and classifying whether equations have one solution, infinitely many solutions, or no solution.',
  'solve-linear-equations-in-one-variable',
  1,
  1,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);

-- 13. Concepts
INSERT OR IGNORE INTO concepts (id, name, slug, description, created_at)
VALUES
('concept_linear_equation', 'Linear Equation', 'linear-equation', 'An algebraic equation where variable terms have an exponent of 1.', '2026-09-12T00:00:00Z'),
('concept_distributive_property', 'Distributive Property', 'distributive-property', 'a(b + c) = ab + ac, used to expand brackets and eliminate parentheses.', '2026-09-12T00:00:00Z'),
('concept_combining_like_terms', 'Combining Like Terms', 'combining-like-terms', 'Adding or subtracting coefficients of terms with identical variable parts.', '2026-09-12T00:00:00Z'),
('concept_solution_types', 'Types of Solutions (One, Zero, Infinite)', 'types-of-solutions', 'Equations can simplify to x = a (one), 0 = b (no solution, contradiction), or a = a (infinitely many, identity).', '2026-09-12T00:00:00Z');

-- Link Concepts to Objective
INSERT OR IGNORE INTO objective_concepts (objective_id, concept_id)
VALUES
('obj_ca8_math_8_ee_c_7', 'concept_linear_equation'),
('obj_ca8_math_8_ee_c_7', 'concept_distributive_property'),
('obj_ca8_math_8_ee_c_7', 'concept_combining_like_terms'),
('obj_ca8_math_8_ee_c_7', 'concept_solution_types');

-- 14. Lesson
INSERT OR IGNORE INTO lessons (id, slug, title, primary_objective_id, type, created_at, updated_at)
VALUES (
  'lesson_ca8_math_linear_equations',
  'linear-equations',
  'Solving Linear Equations in One Variable',
  'obj_ca8_math_8_ee_c_7',
  'PROCEDURE',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);

-- 15. Lesson Version 1 (Published, Structured Pedagogical Blocks)
INSERT OR IGNORE INTO lesson_versions (id, lesson_id, version_number, title, description, status, blocks_json, created_by, published_at, created_at)
VALUES (
  'lv_ca8_math_linear_equations_v1',
  'lesson_ca8_math_linear_equations',
  1,
  'Solving Linear Equations in One Variable',
  'Master solving single-variable linear equations step-by-step using inverse operations, parentheses expansion, and recognizing special cases of zero or infinite solutions.',
  'PUBLISHED',
  '[
    {
      "id": "blk_1",
      "type": "HEADING",
      "order_index": 1,
      "data": { "level": 2, "text": "What is a Linear Equation?" }
    },
    {
      "id": "blk_2",
      "type": "TEXT",
      "order_index": 2,
      "data": { "text": "A linear equation in one variable is an equality involving a variable raised only to the first power (such as x). The fundamental goal of solving an equation is to isolate the variable on one side by performing inverse operations equally to both sides of the equals sign." }
    },
    {
      "id": "blk_3",
      "type": "HEADING",
      "order_index": 3,
      "data": { "level": 3, "text": "The 4-Step Standard Procedure" }
    },
    {
      "id": "blk_4",
      "type": "TEXT",
      "order_index": 4,
      "data": { "text": "1. **Clear Parentheses:** Use the distributive property: a(b + c) = ab + ac.\n2. **Combine Like Terms:** Simplify each side independently before moving terms across the equals sign.\n3. **Isolate Variable Terms:** Use addition or subtraction to collect all variable terms on one side and constant numbers on the opposite side.\n4. **Solve for the Coefficient:** Multiply or divide by the variable coefficient to achieve x = a." }
    },
    {
      "id": "blk_5",
      "type": "EXAMPLE",
      "order_index": 5,
      "data": {
        "title": "Worked Example: Solving with Variables on Both Sides",
        "problem": "Solve for x: 3(2x - 4) + 5 = 2x + 9",
        "steps": [
          "Step 1: Distribute the 3: 6x - 12 + 5 = 2x + 9",
          "Step 2: Combine like terms on the left: 6x - 7 = 2x + 9",
          "Step 3: Subtract 2x from both sides: 4x - 7 = 9",
          "Step 4: Add 7 to both sides: 4x = 16",
          "Step 5: Divide by 4: x = 4"
        ],
        "verification": "Check: 3(2(4) - 4) + 5 = 3(8 - 4) + 5 = 3(4) + 5 = 17. Right side: 2(4) + 9 = 8 + 9 = 17. 17 = 17 is TRUE!"
      }
    },
    {
      "id": "blk_6",
      "type": "CALLOUT",
      "order_index": 6,
      "data": {
        "variant": "WARNING",
        "title": "Special Cases: No Solution vs. Infinitely Many Solutions",
        "text": "Sometimes the variable cancels out entirely!\n- **No Solution (Contradiction):** If you arrive at something impossible like `0 = 8` or `-7 = 9`, no value of x can make it true.\n- **Infinitely Many Solutions (Identity):** If you arrive at a statement that is always true like `5 = 5` or `2x = 2x`, any real number is a valid solution."
      }
    },
    {
      "id": "blk_7",
      "type": "COMMON_MISTAKE",
      "order_index": 7,
      "data": {
        "title": "Watch Out: The Negative Sign Distribution",
        "mistake": "Writing -(3x - 5) as -3x - 5.",
        "correction": "The negative sign multiplies EVERY term inside: -(3x - 5) = -3x + 5."
      }
    },
    {
      "id": "blk_8",
      "type": "SUMMARY",
      "order_index": 8,
      "data": {
        "text": "Every linear equation simplifies into one of three structural forms: (1) x = a (exactly one solution), (2) a = b where a != b (no solution), or (3) a = a (infinitely many solutions)."
      }
    }
  ]',
  'admin_system',
  '2026-08-01T00:00:00Z',
  '2026-09-12T00:00:00Z'
);

-- 16. Curated Video Resources
INSERT OR IGNORE INTO videos (id, youtube_video_id, title, channel_title, channel_id, duration_seconds, state, quality_score_json, last_verified_at, created_at, updated_at)
VALUES
(
  'vid_khan_linear_eq',
  'f15zA0PhSek',
  'Introduction to solving an equation with variables on both sides',
  'Khan Academy',
  'UC4a-Gbdw7vOaccHmFo40b9g',
  485,
  'AVAILABLE',
  '{"curriculum_alignment": 95, "topic_coverage": 90, "grade_suitability": 95, "explanation_quality": 95, "creator_credibility": 98, "freshness": 85, "availability": 100, "total_score": 93}',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
),
(
  'vid_mathantics_linear_eq',
  'Qyd_v3DGzTM',
  'Algebra Basics: Solving 2-Step Equations',
  'mathantics',
  'UC9gOzOQJ85R5p_f5u9X6-yA',
  628,
  'AVAILABLE',
  '{"curriculum_alignment": 90, "topic_coverage": 85, "grade_suitability": 95, "explanation_quality": 92, "creator_credibility": 95, "freshness": 80, "availability": 100, "total_score": 89}',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);

-- Map Videos to Lesson Version
INSERT OR IGNORE INTO video_mappings (id, lesson_version_id, video_id, role, start_seconds, end_seconds, curation_notes, created_at)
VALUES
(
  'vm_primary_khan',
  'lv_ca8_math_linear_equations_v1',
  'vid_khan_linear_eq',
  'PRIMARY',
  0,
  534,
  'Clear alignment with Grade 8 CCSS 8.EE.C.7, directly demonstrating balance method and parentheses handling.',
  '2026-09-12T00:00:00Z'
),
(
  'vm_backup_mathantics',
  'lv_ca8_math_linear_equations_v1',
  'vid_mathantics_linear_eq',
  'BACKUP_1',
  0,
  628,
  'Strong visual intuition for foundational two-step operations before multi-step problem solving.',
  '2026-09-12T00:00:00Z'
);

-- 17. Practice Questions (Teaches step-by-step with immediate feedback)
INSERT OR IGNORE INTO practices (id, lesson_id, title, description, created_at)
VALUES (
  'prac_ca8_math_linear_equations',
  'lesson_ca8_math_linear_equations',
  'Interactive Practice: Solving Linear Equations',
  'Work through foundational problems with step-by-step guidance.',
  '2026-09-12T00:00:00Z'
);

-- Practice Question 1
INSERT OR IGNORE INTO questions (id, objective_id, type, prompt, explanation, difficulty_level, created_at, updated_at)
VALUES (
  'q_prac_1',
  'obj_ca8_math_8_ee_c_7',
  'MCQ',
  'Solve for x: 5x - 8 = 22',
  'Add 8 to both sides: 5x = 30. Then divide both sides by 5: x = 6.',
  1,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);
INSERT OR IGNORE INTO question_options (id, question_id, text, is_correct, feedback, order_index) VALUES
('opt_p1_1', 'q_prac_1', 'x = 6', 1, 'Correct! 5(6) - 8 = 30 - 8 = 22.', 1),
('opt_p1_2', 'q_prac_1', 'x = 2.8', 0, 'Did you subtract 8 instead of adding 8 to both sides?', 2),
('opt_p1_3', 'q_prac_1', 'x = 5', 0, 'Remember to add 8 before dividing by 5.', 3),
('opt_p1_4', 'q_prac_1', 'x = 30', 0, 'You forgot to divide by the coefficient 5.', 4);

-- Practice Question 2
INSERT OR IGNORE INTO questions (id, objective_id, type, prompt, explanation, difficulty_level, created_at, updated_at)
VALUES (
  'q_prac_2',
  'obj_ca8_math_8_ee_c_7',
  'MCQ',
  'Solve for x: 3(x + 4) = 21',
  'First distribute 3: 3x + 12 = 21. Subtract 12: 3x = 9. Divide by 3: x = 3. Alternatively, divide by 3 first: x + 4 = 7, so x = 3.',
  2,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);
INSERT OR IGNORE INTO question_options (id, question_id, text, is_correct, feedback, order_index) VALUES
('opt_p2_1', 'q_prac_2', 'x = 3', 1, 'Great job! 3(3 + 4) = 3(7) = 21.', 1),
('opt_p2_2', 'q_prac_2', 'x = 7', 0, '7 is the value of (x + 4), not x.', 2),
('opt_p2_3', 'q_prac_2', 'x = 5', 0, 'Check your arithmetic after distributing the 3.', 3),
('opt_p2_4', 'q_prac_2', 'x = 1', 0, 'Remember that 3 multiplies both x and 4.', 4);

-- Practice Question 3
INSERT OR IGNORE INTO questions (id, objective_id, type, prompt, explanation, difficulty_level, created_at, updated_at)
VALUES (
  'q_prac_3',
  'obj_ca8_math_8_ee_c_7',
  'MCQ',
  'Classify the equation: 4x + 6 = 4x - 2',
  'Subtracting 4x from both sides gives 6 = -2, which is impossible (a contradiction). Therefore, there is no solution.',
  3,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);
INSERT OR IGNORE INTO question_options (id, question_id, text, is_correct, feedback, order_index) VALUES
('opt_p3_1', 'q_prac_3', 'No solution', 1, 'Exactly! 6 = -2 is never true, so no value of x satisfies the equation.', 1),
('opt_p3_2', 'q_prac_3', 'One solution: x = 0', 0, 'Plug in 0: 4(0)+6 = 6, but 4(0)-2 = -2. They are not equal.', 2),
('opt_p3_3', 'q_prac_3', 'Infinitely many solutions', 0, 'Infinitely many solutions occur only when both sides are identical identities (e.g. 6 = 6).', 3),
('opt_p3_4', 'q_prac_3', 'x = 4', 0, 'The variable terms cancel each other out completely.', 4);

-- 18. Quiz (Evaluates mastery with server-side grading)
INSERT OR IGNORE INTO quizzes (id, lesson_id, title, passing_percentage, created_at)
VALUES (
  'quiz_ca8_math_linear_equations',
  'lesson_ca8_math_linear_equations',
  'Mastery Assessment: Linear Equations in One Variable',
  80,
  '2026-09-12T00:00:00Z'
);

-- Quiz Question 1
INSERT OR IGNORE INTO questions (id, objective_id, type, prompt, explanation, difficulty_level, created_at, updated_at)
VALUES (
  'q_quiz_1',
  'obj_ca8_math_8_ee_c_7',
  'MCQ',
  'Solve for m: 4m - 7 = 2m + 11',
  'Subtract 2m from both sides: 2m - 7 = 11. Add 7: 2m = 18. Divide by 2: m = 9.',
  2,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);
INSERT OR IGNORE INTO question_options (id, question_id, text, is_correct, feedback, order_index) VALUES
('opt_q1_1', 'q_quiz_1', 'm = 9', 1, 'Correct! 4(9) - 7 = 29 and 2(9) + 11 = 29.', 1),
('opt_q1_2', 'q_quiz_1', 'm = 2', 0, 'Incorrect. Review isolating the variable terms.', 2),
('opt_q1_3', 'q_quiz_1', 'm = 18', 0, 'You forgot to divide by the coefficient 2.', 3),
('opt_q1_4', 'q_quiz_1', 'm = -9', 0, 'Check your signs when moving -7 to the right side.', 4);

-- Quiz Question 2
INSERT OR IGNORE INTO questions (id, objective_id, type, prompt, explanation, difficulty_level, created_at, updated_at)
VALUES (
  'q_quiz_2',
  'obj_ca8_math_8_ee_c_7',
  'MCQ',
  'Solve for y: 2(3y - 1) = 4y + 8',
  'Distribute 2: 6y - 2 = 4y + 8. Subtract 4y: 2y - 2 = 8. Add 2: 2y = 10. Divide by 2: y = 5.',
  3,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);
INSERT OR IGNORE INTO question_options (id, question_id, text, is_correct, feedback, order_index) VALUES
('opt_q2_1', 'q_quiz_2', 'y = 5', 1, 'Correct! 2(3(5)-1) = 2(14) = 28, and 4(5)+8 = 28.', 1),
('opt_q2_2', 'q_quiz_2', 'y = 3', 0, 'Incorrect calculation after distribution.', 2),
('opt_q2_3', 'q_quiz_2', 'y = 10', 0, 'Remember to divide 10 by 2 in the final step.', 3),
('opt_q2_4', 'q_quiz_2', 'y = 4', 0, 'Check your steps on the constant terms.', 4);

-- Quiz Question 3
INSERT OR IGNORE INTO questions (id, objective_id, type, prompt, explanation, difficulty_level, created_at, updated_at)
VALUES (
  'q_quiz_3',
  'obj_ca8_math_8_ee_c_7',
  'MCQ',
  'Which of the following equations has infinitely many solutions?',
  'Expanding 5(x + 2) yields 5x + 10. Since both sides are identical (5x + 10 = 5x + 10), it is an identity true for all x.',
  3,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);
INSERT OR IGNORE INTO question_options (id, question_id, text, is_correct, feedback, order_index) VALUES
('opt_q3_1', 'q_quiz_3', '5(x + 2) = 5x + 10', 1, 'Correct! Both sides simplify to the exact same expression.', 1),
('opt_q3_2', 'q_quiz_3', '5x + 2 = 5x + 10', 0, 'This yields 2 = 10, which has no solution.', 2),
('opt_q3_3', 'q_quiz_3', '5x = 10', 0, 'This has exactly one solution: x = 2.', 3),
('opt_q3_4', 'q_quiz_3', '5(x + 2) = 10', 0, 'This has exactly one solution: x = 0.', 4);

-- Quiz Question 4
INSERT OR IGNORE INTO questions (id, objective_id, type, prompt, explanation, difficulty_level, created_at, updated_at)
VALUES (
  'q_quiz_4',
  'obj_ca8_math_8_ee_c_7',
  'MCQ',
  'Solve for p: -2(p - 3) = 16',
  'Distribute -2: -2p + 6 = 16. Subtract 6: -2p = 10. Divide by -2: p = -5.',
  3,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);
INSERT OR IGNORE INTO question_options (id, question_id, text, is_correct, feedback, order_index) VALUES
('opt_q4_1', 'q_quiz_4', 'p = -5', 1, 'Correct! -2(-5 - 3) = -2(-8) = 16.', 1),
('opt_q4_2', 'q_quiz_4', 'p = 5', 0, 'Watch out when dividing positive 10 by negative 2.', 2),
('opt_q4_3', 'q_quiz_4', 'p = -11', 0, 'Be careful with distributing the negative sign to -3.', 3),
('opt_q4_4', 'q_quiz_4', 'p = -8', 0, 'Check inverse operations.', 4);

-- Quiz Question 5
INSERT OR IGNORE INTO questions (id, objective_id, type, prompt, explanation, difficulty_level, created_at, updated_at)
VALUES (
  'q_quiz_5',
  'obj_ca8_math_8_ee_c_7',
  'MCQ',
  'Solve for w: (1/2)w + 3 = 7',
  'Subtract 3 from both sides: (1/2)w = 4. Multiply both sides by 2: w = 8.',
  2,
  '2026-09-12T00:00:00Z',
  '2026-09-12T00:00:00Z'
);
INSERT OR IGNORE INTO question_options (id, question_id, text, is_correct, feedback, order_index) VALUES
('opt_q5_1', 'q_quiz_5', 'w = 8', 1, 'Correct! (1/2)(8) + 3 = 4 + 3 = 7.', 1),
('opt_q5_2', 'q_quiz_5', 'w = 2', 0, 'Did you divide 4 by 2 instead of multiplying by 2?', 2),
('opt_q5_3', 'q_quiz_5', 'w = 14', 0, 'Remember to subtract 3 before clearing the fraction.', 3),
('opt_q5_4', 'q_quiz_5', 'w = 5', 0, 'Check arithmetic with fractions.', 4);

-- Link Quiz Questions
INSERT OR IGNORE INTO quiz_questions (quiz_id, question_id, order_index) VALUES
('quiz_ca8_math_linear_equations', 'q_quiz_1', 1),
('quiz_ca8_math_linear_equations', 'q_quiz_2', 2),
('quiz_ca8_math_linear_equations', 'q_quiz_3', 3),
('quiz_ca8_math_linear_equations', 'q_quiz_4', 4),
('quiz_ca8_math_linear_equations', 'q_quiz_5', 5);

-- 19. Search Projection
INSERT OR IGNORE INTO search_documents (id, entity_type, entity_id, title, curriculum_context, snippet, canonical_url, popularity_weight, is_indexable, updated_at)
VALUES (
  'doc_lesson_linear_equations',
  'LESSON',
  'lesson_ca8_math_linear_equations',
  'Solving Linear Equations in One Variable',
  'USA > California > Public School System > Grade 8 > Mathematics',
  'Learn how to solve linear equations with one, zero, or infinitely many solutions using inverse operations and distributive property.',
  '/learn/us/california/grade-8/mathematics/linear-equations/',
  1.0,
  1,
  '2026-09-12T00:00:00Z'
);
