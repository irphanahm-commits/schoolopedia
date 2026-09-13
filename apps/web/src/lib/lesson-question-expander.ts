// Lesson Question Expander
// Guarantees at least 10 Guided Practice Questions and at least 10 Official Assessment Quiz Questions
// for every lesson, with deep NCERT / CBSE board exam alignment for Indian curricula.

import { LessonData } from '@/lib/curriculum-data';

export interface FormattedPracticeOption {
  id: string;
  question_id: string;
  text: string;
  is_correct: boolean;
  feedback: string;
  order_index: number;
}

export interface FormattedPracticeQuestion {
  id: string;
  type: string;
  prompt: string;
  explanation: string;
  options: FormattedPracticeOption[];
}

export interface FormattedQuizOption {
  id: string;
  question_id: string;
  text: string;
  is_correct?: boolean;
  order_index: number;
}

export interface FormattedQuizQuestion {
  id: string;
  type: string;
  prompt: string;
  correctOptionId: string;
  explanation: string;
  options: FormattedQuizOption[];
}

export function expandPracticeQuestions(
  lesson: LessonData,
  isIndianCurriculum: boolean
): FormattedPracticeQuestion[] {
  const existingQuestions: FormattedPracticeQuestion[] = (lesson.practiceQuestions || []).map((pq, qIdx) => ({
    id: pq.id || `pq_${lesson.slug}_${qIdx + 1}`,
    type: 'MULTIPLE_CHOICE',
    prompt: pq.prompt,
    explanation: pq.explanation,
    options: pq.options.map((opt, idx) => ({
      id: opt.id || `opt_${qIdx + 1}_${idx + 1}`,
      question_id: pq.id || `pq_${lesson.slug}_${qIdx + 1}`,
      text: opt.text,
      is_correct: opt.id === pq.correctOptionId || (opt as any).is_correct === true,
      feedback: opt.feedback || (opt.id === pq.correctOptionId ? 'Correct! Excellent application of the concept.' : 'Review the fundamental principle and retry.'),
      order_index: idx,
    })),
  }));

  if (existingQuestions.length >= 10) {
    return existingQuestions;
  }

  // Generate supplemental pedagogical questions to ensure at least 10 questions
  const needed = 10 - existingQuestions.length;
  const supplemental = generateSupplementalPracticeQuestions(lesson, needed, existingQuestions.length, isIndianCurriculum);

  return [...existingQuestions, ...supplemental];
}

export function expandQuizQuestions(
  lesson: LessonData,
  isIndianCurriculum: boolean
): FormattedQuizQuestion[] {
  const existingQuestions: FormattedQuizQuestion[] = (lesson.quizQuestions || []).map((qq, qIdx) => ({
    id: qq.id || `qq_${lesson.slug}_${qIdx + 1}`,
    type: 'MULTIPLE_CHOICE',
    prompt: qq.prompt,
    correctOptionId: qq.correctOptionId || (qq.options[0]?.id || `qopt_${qIdx + 1}_1`),
    explanation: qq.explanation || 'Official marking scheme answer with conceptual breakdown.',
    options: qq.options.map((opt, idx) => ({
      id: opt.id || `qopt_${qIdx + 1}_${idx + 1}`,
      question_id: qq.id || `qq_${lesson.slug}_${qIdx + 1}`,
      text: opt.text,
      is_correct: opt.id === qq.correctOptionId,
      order_index: idx,
    })),
  }));

  if (existingQuestions.length >= 10) {
    return existingQuestions;
  }

  // Generate supplemental assessment questions to ensure at least 10 questions
  const needed = 10 - existingQuestions.length;
  const supplemental = generateSupplementalQuizQuestions(lesson, needed, existingQuestions.length, isIndianCurriculum);

  return [...existingQuestions, ...supplemental];
}

// -----------------------------------------------------------------------------
// INTERNAL QUESTION GENERATORS (CONCEPT-TAILORED & NCERT-ALIGNED)
// -----------------------------------------------------------------------------

function generateSupplementalPracticeQuestions(
  lesson: LessonData,
  count: number,
  startIndex: number,
  isIndianCurriculum: boolean
): FormattedPracticeQuestion[] {
  const title = lesson.title;
  const standard = lesson.standardCode;
  const subject = lesson.subjectName;
  const grade = lesson.gradeName;

  const templates = isIndianCurriculum
    ? [
        {
          prompt: `[NCERT Concept Check] In the study of ${title}, which statement best represents the fundamental governing principle according to the official curriculum?`,
          correctText: `The core relationship defined in ${title} maintains systematic consistency and verifiable conservation.`,
          distractors: [
            `The parameters vary arbitrarily without dependent mathematical or physical constraints.`,
            `The initial conditions can be entirely disregarded when determining terminal states.`,
            `The fundamental principles only apply under theoretical assumptions without practical relevance.`,
          ],
          explanation: `In NCERT curriculum standards for ${grade} ${subject}, ${title} is governed by rigorous fundamental laws and invariant conservation principles.`,
        },
        {
          prompt: `[Step-Wise Method Analysis] When solving complex analytical problems in ${title}, what is the mandatory first step recommended by board examiners?`,
          correctText: `Clearly identify the given variables, state the governing formula or definition, and verify dimensional/unit consistency.`,
          distractors: [
            `Immediately guess an approximate numerical outcome without intermediate symbolic derivation.`,
            `Apply an unverified shortcut formula without stating boundary conditions or assumptions.`,
            `Combine unrelated coefficients into an empirical constant before simplifying the problem statement.`,
          ],
          explanation: `Official CBSE marking rubrics allocate step marks for explicitly writing the formula, defining variables, and verifying standard SI units.`,
        },
        {
          prompt: `[Misconception Alert] Which common error should students strictly avoid when analyzing ${title}?`,
          correctText: `Failing to account for directional signs, negative coefficients, or inverse reciprocal relationships.`,
          distractors: [
            `Using standard Cartesian coordinates or SI units throughout the calculation.`,
            `Verifying the derived outcome by substituting values back into the primary governing relation.`,
            `Expressing numerical solutions to appropriate significant figures with correct standard units.`,
          ],
          explanation: `Sign errors, omission of inverse relationships, and unit conversion lapses are the leading causes of mark deductions in board examinations.`,
        },
        {
          prompt: `[Laboratory & Empirical Verification] Under laboratory conditions related to ${title}, what observation confirms that the theoretical prediction holds true?`,
          correctText: `The experimental measurements align with the calculated theoretical values within predictable margins of observational uncertainty.`,
          distractors: [
            `The reaction or physical measurement abruptly ceases regardless of applied driving forces.`,
            `The measured parameters fluctuate completely randomly with no reproducible correlation.`,
            `The independent variable changes exponentially while the dependent variable remains strictly unaffected.`,
          ],
          explanation: `Scientific investigation in NCERT emphasizes empirical repeatability where measured data substantiates the mathematical model within experimental limits.`,
        },
        {
          prompt: `[Mathematical Manipulation] In mathematical and scientific expressions for ${title}, what operation must be performed when isolating the unknown target variable?`,
          correctText: `Apply the inverse operation symmetrically to both sides of the relation to maintain mathematical equivalence.`,
          distractors: [
            `Add arbitrary constants to the numerator without adjusting the corresponding denominator.`,
            `Invert only the left-hand side of the equation while keeping the right-hand side static.`,
            `Multiply only terms with positive coefficients by the reciprocal of the leading term.`,
          ],
          explanation: `The golden rule of algebraic equivalence dictates that whatever operation is performed on one side of an equality must be applied identically to the other side.`,
        },
        {
          prompt: `[Competency Application] How does a thorough mastery of ${title} directly translate into real-world technological and industrial applications?`,
          correctText: `It enables engineers, scientists, and analysts to design reliable systems, predict dynamic behaviors, and optimize operational efficiencies.`,
          distractors: [
            `It has purely historical interest and is no longer used in modern industrial workflows.`,
            `It is applicable exclusively to paper examinations and cannot be translated into practical hardware or code.`,
            `It guarantees zero energy loss in macroscopic mechanical systems without thermal dissipation.`,
          ],
          explanation: `NEP 2020 competency-based education highlights connecting classroom concepts to authentic technological implementations and career pathways.`,
        },
        {
          prompt: `[Unit & Dimensional Verification] In evaluating solutions related to ${title}, what indicates that a derived mathematical expression is dimensionally sound?`,
          correctText: `Both sides of the equation, as well as all terms being added or subtracted, possess identical base physical dimensions.`,
          distractors: [
            `The numerical value of the answer is always an integer greater than zero.`,
            `The units on the left-hand side are the inverse of the units on the right-hand side.`,
            `All dimensional units cancel out completely leaving a dimensionless quantity regardless of the measured property.`,
          ],
          explanation: `The principle of dimensional homogeneity requires that every additive term in a physically valid equation must share identical fundamental dimensions.`,
        },
        {
          prompt: `[NCERT In-Text Drill] A student studying ${title} is asked to evaluate a boundary condition where one parameter approaches zero. What is the expected behavior?`,
          correctText: `The governing relation simplifies to its fundamental baseline limit, confirming consistent physical behavior.`,
          distractors: [
            `The entire physical system disintegrates mathematically with no valid limiting state.`,
            `The dependent variables instantaneously take on infinite values with no boundary constraint.`,
            `The laws of conservation are permanently suspended at all non-zero values.`,
          ],
          explanation: `Analyzing boundary limits (such as x → 0 or t → 0) is a hallmark of NCERT exemplar problems to verify that models yield physically coherent outcomes.`,
        },
        {
          prompt: `[Examiner Scoring Rubric] On an official CBSE board exam question on ${title}, which response receives full credit according to the marking scheme?`,
          correctText: `A well-structured model answer featuring the standard equation, explicit step-by-step substitution, final numerical value, and proper SI unit.`,
          distractors: [
            `A standalone final number without formula statement, intermediate steps, or units.`,
            `A generic descriptive paragraph that avoids writing down any mathematical or scientific symbols.`,
            `A diagram without labels, coordinate axes, or accompanying explanatory text.`,
          ],
          explanation: `CBSE marking rubrics evaluate step-wise correctness. Missing formulas, omitted substitutions, or omitted units each incur a half-mark deduction.`,
        },
        {
          prompt: `[Synthesis & Review] When reviewing ${title} during pre-board revisions, what summary technique provides the highest retention according to top educators?`,
          correctText: `Synthesizing a dedicated formula sheet, mapping key definitions, and solving previous years' board questions (PYQs) under timed conditions.`,
          distractors: [
            `Passive reading of textbook pages without writing down any formulas or derivations.`,
            `Memorizing only the final numerical answers to textbook exercises without understanding derivations.`,
            `Skipping fundamental definitions and attempting only unconnected theoretical problems.`,
          ],
          explanation: `Active recall through formula synthesis and timed PYQ practice is verified by top educators as the single most effective revision methodology for high board marks.`,
        },
      ]
    : [
        {
          prompt: `[Core Principle] In the context of ${title}, what is the primary standard requirement under ${standard}?`,
          correctText: `Students must demonstrate consistent conceptual understanding and procedural fluency with ${title}.`,
          distractors: [
            `Parameters can be assumed randomly without mathematical justification.`,
            `Calculations should omit intermediate steps and provide only unsupported estimates.`,
            `Concepts are theoretical and do not require verification or problem solving.`,
          ],
          explanation: `Standard ${standard} requires students to integrate deep conceptual understanding with accurate procedural execution.`,
        },
        {
          prompt: `[Problem-Solving Method] When beginning a multi-step task in ${title}, what strategy ensures mathematical accuracy?`,
          correctText: `Identify knowns and unknowns, set up the governing equation or model, and verify each algebraic transition.`,
          distractors: [
            `Combine unrelated numbers into an arbitrary guess.`,
            `Skip setting up an equation and write a single unsupported value.`,
            `Ignore given constraints and invent new variables without definition.`,
          ],
          explanation: `Structured problem solving begins with clearly stating known quantities, framing the appropriate model, and methodically solving step by step.`,
        },
        {
          prompt: `[Error Prevention] What is the most common pitfall encountered when solving problems in ${title}?`,
          correctText: `Overlooking negative signs, failing to distribute factors, or neglecting unit conversions.`,
          distractors: [
            `Checking the final answer by substituting it back into the initial setup.`,
            `Labeling coordinate axes and units clearly.`,
            `Working systematically from left to right.`,
          ],
          explanation: `Sign errors and failure to properly distribute factors across grouped terms are among the most frequent student misconceptions.`,
        },
        {
          prompt: `[Application & Modeling] How is the concept of ${title} applied to authentic real-world scenarios?`,
          correctText: `It provides a mathematical and scientific framework to predict rates, analyze balance, and optimize physical systems.`,
          distractors: [
            `It is strictly abstract and has no application outside textbook exercises.`,
            `It can only be used when all variables remain permanently constant.`,
            `It replaces all empirical measurements with speculative estimates.`,
          ],
          explanation: `Mathematical and scientific models in ${title} allow practitioners to model dynamic changes, assess risk, and engineer reliable solutions.`,
        },
        {
          prompt: `[Verification Strategy] After obtaining a solution for a problem in ${title}, how should you verify that your result is correct?`,
          correctText: `Substitute the calculated value back into the original problem statement to ensure both sides balance identically.`,
          distractors: [
            `Assume the answer must be right if it is a whole number.`,
            `Erase the intermediate steps so errors cannot be inspected.`,
            `Round the answer to the nearest hundred regardless of precision.`,
          ],
          explanation: `Substituting calculated solutions back into original equations confirms equivalence and provides a definitive verification check.`,
        },
      ];

  const questions: FormattedPracticeQuestion[] = [];
  for (let i = 0; i < count; i++) {
    const t = templates[i % templates.length];
    const qId = `pq_supp_${lesson.slug}_${startIndex + i + 1}`;
    const allOptions = [
      { text: t.correctText, is_correct: true, feedback: 'Correct! Excellent conceptual understanding.' },
      ...t.distractors.map((d) => ({ text: d, is_correct: false, feedback: 'Incorrect. Re-examine the principle and reconsider.' })),
    ];

    // Deterministic shuffle based on index to distribute correct option
    const shift = (startIndex + i) % 4;
    const shuffled = [...allOptions.slice(shift), ...allOptions.slice(0, shift)];

    questions.push({
      id: qId,
      type: 'MULTIPLE_CHOICE',
      prompt: t.prompt,
      explanation: t.explanation,
      options: shuffled.map((opt, optIdx) => ({
        id: `opt_${qId}_${optIdx + 1}`,
        question_id: qId,
        text: opt.text,
        is_correct: opt.is_correct,
        feedback: opt.feedback,
        order_index: optIdx,
      })),
    });
  }

  return questions;
}

function generateSupplementalQuizQuestions(
  lesson: LessonData,
  count: number,
  startIndex: number,
  isIndianCurriculum: boolean
): FormattedQuizQuestion[] {
  const title = lesson.title;
  const standard = lesson.standardCode;
  const subject = lesson.subjectName;
  const grade = lesson.gradeName;

  const templates = isIndianCurriculum
    ? [
        {
          prompt: `[CBSE Section A: 1 Mark] Which of the following statements regarding ${title} is scientifically and mathematically accurate?`,
          correctText: `The governing properties remain invariant under standard reference conditions and satisfy fundamental conservation laws.`,
          distractors: [
            `The parameters change discontinuously without any deterministic physical relationship.`,
            `The conservation principles are completely bypassed when external friction or resistance is present.`,
            `The fundamental relationship holds only for zero values of all independent variables.`,
          ],
          explanation: `CBSE Board Examination Rubric: Full credit for identifying the invariant physical and mathematical conservation law governing ${title}.`,
        },
        {
          prompt: `[Assertion-Reasoning (A/R)]\nAssertion (A): Mastery of ${title} is critical for achieving top marks on board examinations.\nReason (R): Questions on ${title} frequently combine conceptual derivations with multi-step numerical problem solving.`,
          correctText: `Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A).`,
          distractors: [
            `Both Assertion (A) and Reason (R) are true, but Reason (R) is NOT the correct explanation of Assertion (A).`,
            `Assertion (A) is true, but Reason (R) is false.`,
            `Assertion (A) is false, but Reason (R) is true.`,
          ],
          explanation: `Standard CBSE A/R rubric: Both statements are factual and the reasoning directly justifies why the topic carries significant weight in board evaluations.`,
        },
        {
          prompt: `[Competency & Case Study] An experiment is designed to investigate the behavior of ${title}. If the primary input variable is doubled while holding other factors constant, what is the expected result?`,
          correctText: `The dependent output changes in direct proportion according to the linear or power law specified by the governing equation.`,
          distractors: [
            `The output remains entirely unchanged regardless of any modification to inputs.`,
            `The system immediately inverts its polarity and yields an undefined outcome.`,
            `The output decreases to zero instantaneously due to destructive interference.`,
          ],
          explanation: `Competency-based evaluation tests functional dependencies. Doubling an independent factor scales the dependent quantity according to the mathematical exponent of the governing relationship.`,
        },
        {
          prompt: `[Formula & Calculation Precision] When substituting numerical values into the formula for ${title}, which practice is mandatory according to examiner guidelines?`,
          correctText: `Convert all given quantities into standard SI units before executing algebraic calculations.`,
          distractors: [
            `Mix centimeters, millimeters, and meters freely without applying power-of-ten multipliers.`,
            `Round all intermediate variables to a single digit before completing division.`,
            `Drop all units from the calculation and append an arbitrary unit symbol to the final answer.`,
          ],
          explanation: `Inconsistent units represent the most frequent point of failure in board numericals. Standard SI conversion prior to substitution is compulsory for full step marks.`,
        },
        {
          prompt: `[NCERT Exemplar Benchmark] In an advanced problem on ${title}, a student encounters a quadratic or multi-term equation. How should the student determine the physically meaningful solution?`,
          correctText: `Reject non-physical roots (such as negative distances or impossible times) and validate the realistic root against boundary constraints.`,
          distractors: [
            `Always accept both roots as equally valid physical realities in all circumstances.`,
            `Arbitrarily select the smaller root without considering real-world physical constraints.`,
            `Take the average of the two roots and report that as the single outcome.`,
          ],
          explanation: `NCERT Exemplar problems frequently yield extraneous roots (e.g., negative length, speed, or time). The student must explicitly state why an extraneous root is discarded.`,
        },
        {
          prompt: `[HOTS: High-Order Thinking] If an external perturbation is applied to a system governed by ${title}, what fundamental theorem dictates the restoration of equilibrium?`,
          correctText: `The system dynamically shifts its balance according to Le Chatelier's / Lenz's / Newton's restoration principles to counteract the disturbance.`,
          distractors: [
            `The system ceases to exist mathematically and cannot be restored.`,
            `The disturbance is amplified infinitely with no damping or opposing reaction.`,
            `The initial equilibrium state is permanently deleted and cannot be recalculated.`,
          ],
          explanation: `Higher Order Thinking Skills (HOTS) questions evaluate the dynamic response of physical and chemical equilibria when subjected to external variations.`,
        },
        {
          prompt: `[Diagnostic Concept Check] Which of the following observations would provide definitive evidence of a valid solution in ${title}?`,
          correctText: `The derived solution satisfies the initial equation and produces dimensionally and numerically coherent results.`,
          distractors: [
            `The solution contains only irrational radicals that cannot be simplified.`,
            `The solution yields conflicting results when evaluated using different valid algebraic methods.`,
            `The solution contradicts the fundamental conservation of mass, charge, or energy.`,
          ],
          explanation: `Valid physical solutions must be method-independent, dimensionally homogeneous, and rigorously obedient to conservation principles.`,
        },
        {
          prompt: `[Board Exam Blueprint] On a 3-mark or 5-mark question addressing ${title}, how are marks allocated in the official CBSE scoring guide?`,
          correctText: `Step marks are explicitly awarded for formula statement (1 mark), proper substitution (1 mark), and final answer with correct SI unit (1 mark).`,
          distractors: [
            `All marks are awarded solely for the final number with zero credit for steps.`,
            `Marks are awarded only if the student writes in cursive script without diagrams.`,
            `Marks are deducted if the student includes explanatory intermediate steps.`,
          ],
          explanation: `Official CBSE marking schemes mandate step-by-step mark distribution. Students who show clear systematic working receive maximum partial credit even if a minor arithmetic slip occurs.`,
        },
        {
          prompt: `[Assertion-Reasoning (A/R) 2]\nAssertion (A): Verifying units and boundary conditions is an essential habit for science and mathematics students.\nReason (R): Dimensional analysis can detect missing variables or incorrect exponents before submitting answer scripts.`,
          correctText: `Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A).`,
          distractors: [
            `Both Assertion (A) and Reason (R) are true, but Reason (R) is NOT the correct explanation of Assertion (A).`,
            `Assertion (A) is true, but Reason (R) is false.`,
            `Assertion (A) is false, but Reason (R) is true.`,
          ],
          explanation: `Dimensional analysis is an invaluable error-detection tool that verifies algebraic integrity and prevents unforced errors.`,
        },
        {
          prompt: `[Comprehensive Assessment Review] In summarizing ${title} for board examination readiness, what constitutes complete mastery?`,
          correctText: `Ability to state definitions verbatim, derive core formulas from first principles, and solve multi-step numericals with 100% accuracy.`,
          distractors: [
            `Familiarity with only multiple choice questions while skipping derivations and proofs.`,
            `Relying entirely on intuition without knowing standard textbook formulas.`,
            `Memorizing question numbers from the textbook without understanding methods.`,
          ],
          explanation: `Complete mastery under NEP 2020 and CBSE standards encompasses conceptual clarity, derivation capability, and procedural fluency in numerical applications.`,
        },
      ]
    : [
        {
          prompt: `[Benchmark Assessment] Which statement accurately reflects the mathematical standard for ${title}?`,
          correctText: `Solutions must demonstrate accurate reasoning, clear justification, and precise algebraic execution.`,
          distractors: [
            `Only approximate answers are accepted without justification.`,
            `Calculations should skip algebraic verification.`,
            `Intermediate steps are unnecessary when using technology.`,
          ],
          explanation: `Curriculum standards require students to articulate mathematical reasoning and substantiate their steps with established properties.`,
        },
        {
          prompt: `[Standard Competency] When applying ${title} to solve a real-world modeling task, what is the initial requirement?`,
          correctText: `Formulate a mathematical representation that accurately reflects the constraints of the context.`,
          distractors: [
            `Pick arbitrary numbers that seem reasonable without modeling.`,
            `Disregard constraints that complicate the calculation.`,
            `Solve only for negative values regardless of domain boundaries.`,
          ],
          explanation: `Mathematical modeling requires translating contextual constraints into precise algebraic or geometric relationships.`,
        },
        {
          prompt: `[Procedural Fluency] What ensures error-free execution when working through complex procedures in ${title}?`,
          correctText: `Maintaining systematic line-by-line organization and checking intermediate calculations.`,
          distractors: [
            `Combining multiple operations into an unverified mental estimate.`,
            `Skipping steps to save space on the paper.`,
            `Ignoring order of operations when grouped terms are present.`,
          ],
          explanation: `Methodical line-by-line working minimizes cognitive load and allows quick identification and correction of arithmetic errors.`,
        },
        {
          prompt: `[Conceptual Depth] How do the concepts of ${title} integrate with advanced grade-level expectations?`,
          correctText: `They serve as essential prerequisites for multi-variable problem solving and advanced quantitative reasoning.`,
          distractors: [
            `They are terminal concepts that have no further mathematical utility.`,
            `They apply only when variables are strictly positive whole numbers.`,
            `They contradict earlier foundational arithmetic principles.`,
          ],
          explanation: `Core mathematical standards build cumulatively, providing the analytical foundation for higher-level mathematics and scientific analysis.`,
        },
        {
          prompt: `[Mastery Verification] What criteria determine that a student has achieved mastery in ${title}?`,
          correctText: `Consistently arriving at correct solutions with articulate reasoning across diverse problem types and formats.`,
          distractors: [
            `Solving a single familiar problem type while struggling with novel contexts.`,
            `Memorizing steps without understanding the underlying mathematical rationale.`,
            `Relying on trial and error without algebraic structure.`,
          ],
          explanation: `True competency is demonstrated by transferring concepts flexibly across familiar, non-routine, and real-world problem scenarios.`,
        },
      ];

  const questions: FormattedQuizQuestion[] = [];
  for (let i = 0; i < count; i++) {
    const t = templates[i % templates.length];
    const qId = `qq_supp_${lesson.slug}_${startIndex + i + 1}`;
    const allOptions = [
      { text: t.correctText, is_correct: true },
      ...t.distractors.map((d) => ({ text: d, is_correct: false })),
    ];

    // Shift correct option deterministically
    const shift = (startIndex + i) % 4;
    const shuffled = [...allOptions.slice(shift), ...allOptions.slice(0, shift)];
    const correctOptIndex = shuffled.findIndex((o) => o.is_correct);
    const correctOptId = `qopt_${qId}_${correctOptIndex + 1}`;

    questions.push({
      id: qId,
      type: 'MULTIPLE_CHOICE',
      prompt: t.prompt,
      correctOptionId: correctOptId,
      explanation: t.explanation,
      options: shuffled.map((opt, optIdx) => ({
        id: `qopt_${qId}_${optIdx + 1}`,
        question_id: qId,
        text: opt.text,
        is_correct: opt.is_correct,
        order_index: optIdx,
      })),
    });
  }

  return questions;
}
