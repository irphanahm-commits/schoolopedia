// Comprehensive K-12 Course Syllabus Registry for Tier 1 Frameworks
// Defines structured multi-unit, multi-topic syllabus trees for standard courses.

export interface SyllabusTopic {
  id: string;
  topicNumber: string; // e.g. "1.1", "2.3", "3.1"
  title: string;
  standardCode: string;
  standardTitle: string;
  estimatedMinutes: number;
  hasInteractiveLesson: boolean;
  activeLessonSlug?: string; // Slug in LESSONS_CATALOGUE if interactive lesson is live
  summary: string;
  competency: string;
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
            topicNumber: '1.1',
            title: 'Place Value Structure in Multi-Digit Numbers',
            standardCode: 'CCSS.MATH.4.NBT.A.1',
            standardTitle: 'Recognize that in a multi-digit number, a digit in one place represents 10 times what it represents in the place to its right',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Explore how each position in a base-ten numeral increases by a factor of 10 relative to the adjacent right column.',
            competency: 'Conceptual understanding of decimal place values up to millions.'
          },
          {
            id: 'g4m_1_2',
            topicNumber: '1.2',
            title: 'Reading, Writing & Comparing Multi-Digit Whole Numbers',
            standardCode: 'CCSS.MATH.4.NBT.A.2',
            standardTitle: 'Read and write multi-digit whole numbers using base-ten numerals, number names, and expanded form',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Translate between numeral, word, and expanded forms and compare quantities using relational symbols (<, =, >).',
            competency: 'Precision in reading, writing, and comparing large numbers.'
          },
          {
            id: 'g4m_1_3',
            topicNumber: '1.3',
            title: 'Rounding Multi-Digit Numbers to Any Place Value',
            standardCode: 'CCSS.MATH.4.NBT.A.3',
            standardTitle: 'Use place value understanding to round multi-digit whole numbers to any place',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Apply vertical and horizontal number lines to approximate values to the nearest ten, hundred, thousand, or ten thousand.',
            competency: 'Estimation and numerical approximation in practical problem-solving.'
          },
          {
            id: 'g4m_1_4',
            topicNumber: '1.4',
            title: 'Fluently Adding & Subtracting Multi-Digit Whole Numbers',
            standardCode: 'CCSS.MATH.4.NBT.B.4',
            standardTitle: 'Fluently add and subtract multi-digit whole numbers using the standard algorithm',
            estimatedMinutes: 60,
            hasInteractiveLesson: false,
            summary: 'Master multi-digit addition with carrying and multi-digit subtraction with regrouping across zeros.',
            competency: 'Procedural fluency in column-based addition and subtraction.'
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
            topicNumber: '2.1',
            title: 'Multiplicative Comparison & Real-World Word Problems',
            standardCode: 'CCSS.MATH.4.OA.A.1-2',
            standardTitle: 'Interpret a multiplication equation as a comparison and solve multiplicative comparison word problems',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Distinguish between additive comparison ("3 more than") and multiplicative comparison ("3 times as many as").',
            competency: 'Translating real-world relational language into algebraic multiplication statements.'
          },
          {
            id: 'g4m_2_2',
            topicNumber: '2.2',
            title: 'Multi-Step Word Problems & Estimation Strategies',
            standardCode: 'CCSS.MATH.4.OA.A.3',
            standardTitle: 'Solve multistep word problems posed with whole numbers and assess the reasonableness of answers',
            estimatedMinutes: 60,
            hasInteractiveLesson: false,
            summary: 'Break down complex, multi-operational word problems using letters for unknown quantities and check logic using rounding.',
            competency: 'Structured mathematical modeling and solution verification.'
          },
          {
            id: 'g4m_2_3',
            topicNumber: '2.3',
            title: 'Factors, Multiples, Prime & Composite Numbers',
            standardCode: 'CCSS.MATH.4.OA.B.4',
            standardTitle: 'Find all factor pairs for a whole number in the range 1–100 and determine prime vs composite',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Discover factor pairs using rectangular arrays and categorize integers 1–100 into prime and composite sets.',
            competency: 'Number theory fundamentals and divisibility recognition.'
          },
          {
            id: 'g4m_2_4',
            topicNumber: '2.4',
            title: 'Multi-Digit Multiplication: Area Models & Partial Products',
            standardCode: 'CCSS.MATH.4.NBT.B.5',
            standardTitle: 'Multiply a whole number of up to four digits by a one-digit whole number and multiply two two-digit numbers',
            estimatedMinutes: 60,
            hasInteractiveLesson: false,
            summary: 'Use geometric area grids and partial products to compute 4-digit by 1-digit and 2-digit by 2-digit products.',
            competency: 'Distributive property application in multi-digit computation.'
          },
          {
            id: 'g4m_2_5',
            topicNumber: '2.5',
            title: 'Whole Number Division with Remainders',
            standardCode: 'CCSS.MATH.4.NBT.B.6',
            standardTitle: 'Find whole-number quotients and remainders with up to four-digit dividends and one-digit divisors',
            estimatedMinutes: 60,
            hasInteractiveLesson: false,
            summary: 'Illustrate division using area models, repeated subtraction, and standard long division notation with remainders.',
            competency: 'Division fluency and context-appropriate remainder interpretation.'
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
            topicNumber: '3.1',
            title: 'Equivalent Fractions, Decimals & The Number Line',
            standardCode: 'CCSS.MATH.4.NF.A.1',
            standardTitle: 'Explain why a fraction a/b is equivalent to a fraction (n*a)/(n*b) using visual fraction models',
            estimatedMinutes: 50,
            hasInteractiveLesson: true,
            activeLessonSlug: 'fractions-decimals',
            summary: 'Understand fraction equivalence visually using area models and number lines, and learn to convert tenths and hundredths into decimals.',
            competency: 'Proportional reasoning and fractional equivalence proofs.'
          },
          {
            id: 'g4m_3_2',
            topicNumber: '3.2',
            title: 'Comparing Fractions with Unlike Numerators & Denominators',
            standardCode: 'CCSS.MATH.4.NF.A.2',
            standardTitle: 'Compare two fractions with different numerators and different denominators by creating common denominators',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Find common denominators and benchmark fractions (such as 1/2) to order and compare rational quantities.',
            competency: 'Rational number comparison and benchmark intuition.'
          },
          {
            id: 'g4m_3_3',
            topicNumber: '3.3',
            title: 'Adding & Subtracting Fractions with Like Denominators',
            standardCode: 'CCSS.MATH.4.NF.B.3',
            standardTitle: 'Understand addition and subtraction of fractions as joining and separating parts referring to the same whole',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Decompose fractions into sums of unit fractions and add/subtract mixed numbers with common denominators.',
            competency: 'Additive fraction operations and mixed number manipulation.'
          },
          {
            id: 'g4m_3_4',
            topicNumber: '3.4',
            title: 'Multiplying Whole Numbers by Fractions',
            standardCode: 'CCSS.MATH.4.NF.B.4',
            standardTitle: 'Apply and extend previous understandings of multiplication to multiply a fraction by a whole number',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Interpret n * (a/b) as (n * a)/b using repeated addition models and real-life scaling word problems.',
            competency: 'Scalar fraction multiplication and contextual problem solving.'
          },
          {
            id: 'g4m_3_5',
            topicNumber: '3.5',
            title: 'Decimal Notation for Tenths, Hundredths & Decimal Comparison',
            standardCode: 'CCSS.MATH.4.NF.C.6-7',
            standardTitle: 'Use decimal notation for fractions with denominators 10 or 100, and compare two decimals to hundredths',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Represent tenths and hundredths as standard decimals (e.g. 0.62) and compare decimal quantities on the number line.',
            competency: 'Bridging rational fractions and base-10 decimal notation.'
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
            id: 'g4m_4_1',
            topicNumber: '4.1',
            title: 'Units of Measure & Unit Conversions',
            standardCode: 'CCSS.MATH.4.MD.A.1',
            standardTitle: 'Know relative sizes of measurement units within one system of units including km, m, cm; kg, g; lb, oz; l, ml; hr, min, sec',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Convert larger units into equivalent smaller units in a two-column conversion table.',
            competency: 'Measurement scale fluency and dimensional reasoning.'
          },
          {
            id: 'g4m_4_2',
            topicNumber: '4.2',
            title: 'Perimeter & Area Formulas for Rectangles',
            standardCode: 'CCSS.MATH.4.MD.A.3',
            standardTitle: 'Apply the area and perimeter formulas for rectangles in real world and mathematical problems',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Calculate boundary perimeter (P = 2l + 2w) and enclosed area (A = l * w) for standard and compound rectilinear figures.',
            competency: 'Spatial formula application and boundary quantification.'
          },
          {
            id: 'g4m_4_3',
            topicNumber: '4.3',
            title: 'Fractional Line Plots & Data Interpretation',
            standardCode: 'CCSS.MATH.4.MD.B.4',
            standardTitle: 'Make a line plot to display a data set of measurements in fractions of a unit (1/2, 1/4, 1/8)',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Plot measurement distributions along fractionally partitioned horizontal axes and answer comparative questions.',
            competency: 'Data representation and statistical interpretation.'
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
            id: 'g4m_5_1',
            topicNumber: '5.1',
            title: 'Points, Lines, Line Segments, Rays & Angles',
            standardCode: 'CCSS.MATH.4.G.A.1',
            standardTitle: 'Draw points, lines, line segments, rays, angles (right, acute, obtuse), and perpendicular and parallel lines',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Identify foundational 1D and 2D geometric building blocks in isolated drawings and real-world architecture.',
            competency: 'Geometric vocabulary and drawing precision.'
          },
          {
            id: 'g4m_5_2',
            topicNumber: '5.2',
            title: 'Angle Measurement & Protractor Mastery',
            standardCode: 'CCSS.MATH.4.MD.C.5-6',
            standardTitle: 'Recognize angles as geometric shapes formed wherever two rays share a common endpoint, and measure angles in whole-number degrees',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Measure acute, obtuse, right, and reflex angles using circular arcs and protractors with degree precision.',
            competency: 'Protractor measurement and rotational geometry.'
          },
          {
            id: 'g4m_5_3',
            topicNumber: '5.3',
            title: 'Additive Angle Decompositions & Unknown Angles',
            standardCode: 'CCSS.MATH.4.MD.C.7',
            standardTitle: 'Recognize angle measure as additive. When an angle is decomposed into non-overlapping parts, the angle measure is the sum',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Solve for unknown interior angle measures by writing addition and subtraction algebraic equations.',
            competency: 'Algebraic problem-solving in angle geometry.'
          },
          {
            id: 'g4m_5_4',
            topicNumber: '5.4',
            title: 'Classifying Two-Dimensional Shapes & Lines of Symmetry',
            standardCode: 'CCSS.MATH.4.G.A.2-3',
            standardTitle: 'Classify two-dimensional figures based on parallel/perpendicular lines and angles; identify lines of symmetry',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Categorize triangles (right, acute, obtuse) and quadrilaterals (trapezoids, rhombi, parallelograms) and test reflection symmetry.',
            competency: 'Rigorous geometric classification and symmetry testing.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 2. Grade 8 Mathematics
  // ---------------------------------------------------------------------------
  'grade-8:mathematics': {
    courseSlug: 'math-grade-8',
    gradeSlug: 'grade-8',
    subjectSlug: 'mathematics',
    title: 'Grade 8 Mathematics: Linear Equations, Functions & Geometry',
    gradeName: 'Grade 8 / Middle School / Year 9',
    subjectName: 'Mathematics',
    overview: 'Rigorous pre-algebra and algebraic reasoning covering real numbers, exponents, multi-step linear equations, systems of equations, functions, the Pythagorean theorem, and bivariate statistics.',
    totalEstimatedHours: 130,
    frameworkStandard: 'Common Core (CCSS.MATH.8) / TEKS 8 / ACARA v9.0',
    units: [
      {
        unitNumber: 1,
        title: 'The Real Number System, Exponents & Scientific Notation',
        domainCode: '8.NS & 8.EE',
        description: 'Differentiate rational and irrational numbers, compute square and cube roots, and master integer exponent laws and scientific notation.',
        topics: [
          {
            id: 'g8m_1_1',
            topicNumber: '1.1',
            title: 'Rational vs. Irrational Numbers & Decimals',
            standardCode: 'CCSS.MATH.8.NS.A.1',
            standardTitle: 'Know that numbers that are not rational are called irrational; understand every number has a decimal expansion',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Prove that repeating and terminating decimals represent rational numbers a/b, and approximate non-repeating irrationals like √2 and π.',
            competency: 'Real number classification and decimal expansion proof.'
          },
          {
            id: 'g8m_1_2',
            topicNumber: '1.2',
            title: 'Properties of Integer Exponents',
            standardCode: 'CCSS.MATH.8.EE.A.1',
            standardTitle: 'Know and apply the properties of integer exponents to generate equivalent numerical expressions',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Master the product rule, quotient rule, power of a power, zero exponent rule, and negative integer exponents.',
            competency: 'Exponential algebra fluency.'
          },
          {
            id: 'g8m_1_3',
            topicNumber: '1.3',
            title: 'Square Roots, Cube Roots & Radical Equations',
            standardCode: 'CCSS.MATH.8.EE.A.2',
            standardTitle: 'Use square root and cube root symbols to represent solutions to equations of the form x² = p and x³ = p',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Evaluate perfect square and cube roots and solve radical algebraic statements.',
            competency: 'Radical evaluation and inverse operational reasoning.'
          },
          {
            id: 'g8m_1_4',
            topicNumber: '1.4',
            title: 'Scientific Notation & Magnitude Comparisons',
            standardCode: 'CCSS.MATH.8.EE.A.3-4',
            standardTitle: 'Use numbers expressed in the form of a single digit times an integer power of 10 to estimate very large or very small quantities',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Perform addition, subtraction, multiplication, and division on quantities written in standard scientific notation.',
            competency: 'Handling astronomical and microscopic magnitudes.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Expressions & Linear Equations in One Variable',
        domainCode: '8.EE',
        description: 'Master solving multi-step linear equations with variables on both sides, rational coefficients, parentheses, and classify infinite vs no solution states.',
        topics: [
          {
            id: 'g8m_2_1',
            topicNumber: '2.1',
            title: 'Solving Multi-Step Linear Equations with Variables on Both Sides',
            standardCode: 'CCSS.MATH.8.EE.C.7',
            standardTitle: 'Solve linear equations in one variable with rational number coefficients including the distributive property',
            estimatedMinutes: 55,
            hasInteractiveLesson: true,
            activeLessonSlug: 'linear-equations',
            summary: 'Apply distributive expansion, inverse operations, and balanced transformations to isolate variables and prove equivalence.',
            competency: 'Algebraic manipulation, step-by-step proof, and solution verification.'
          },
          {
            id: 'g8m_2_2',
            topicNumber: '2.2',
            title: 'Analyzing Solutions: One Solution, No Solution & Infinitely Many Solutions',
            standardCode: 'CCSS.MATH.8.EE.C.7.A',
            standardTitle: 'Give examples of linear equations in one variable with one solution, infinitely many solutions, or no solutions',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Recognize identity equations (0 = 0) indicating infinite solutions and inconsistent equations (e.g. 5 = 7) indicating zero solutions.',
            competency: 'Equation structural analysis and degeneracy classification.'
          },
          {
            id: 'g8m_2_3',
            topicNumber: '2.3',
            title: 'Proportional Relationships, Unit Rate & The Slope of a Line',
            standardCode: 'CCSS.MATH.8.EE.B.5',
            standardTitle: 'Graph proportional relationships, interpreting the unit rate as the slope of the graph',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Connect constant rate of change to the geometric ratio Δy/Δx on coordinate cartesian grids.',
            competency: 'Slope interpretation and rate of change synthesis.'
          },
          {
            id: 'g8m_2_4',
            topicNumber: '2.4',
            title: 'Slope-Intercept Form (y = mx + b) & Geometric Derivation',
            standardCode: 'CCSS.MATH.8.EE.B.6',
            standardTitle: 'Use similar triangles to explain why the slope m is the same between any two distinct points on a non-vertical line',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Prove the constant slope of straight lines using similar right triangles and derive the equation y = mx + b.',
            competency: 'Geometric foundation of linear functions.'
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Functions & Linear Modeling',
        domainCode: '8.F',
        description: 'Define functions as input-output mappings, compare linear and nonlinear rates of change, and construct functions modeling real-world behavior.',
        topics: [
          {
            id: 'g8m_3_1',
            topicNumber: '3.1',
            title: 'Defining Functions: Inputs, Outputs & Mappings',
            standardCode: 'CCSS.MATH.8.F.A.1',
            standardTitle: 'Understand that a function is a rule that assigns to each input exactly one output',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Evaluate relation graphs using the vertical line test and differentiate functions from non-functional mappings.',
            competency: 'Mathematical relation and functional constraint recognition.'
          },
          {
            id: 'g8m_3_2',
            topicNumber: '3.2',
            title: 'Comparing Properties of Two Functions Represented Differently',
            standardCode: 'CCSS.MATH.8.F.A.2',
            standardTitle: 'Compare properties of two functions each represented in a different way (algebraically, graphically, numerically in tables, or by verbal descriptions)',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Determine which function has a greater rate of change when comparing a symbolic equation against a tabulated dataset.',
            competency: 'Multi-representational mathematical synthesis.'
          },
          {
            id: 'g8m_3_3',
            topicNumber: '3.3',
            title: 'Linear vs. Nonlinear Functions',
            standardCode: 'CCSS.MATH.8.F.A.3',
            standardTitle: 'Interpret the equation y = mx + b as defining a linear function, whose graph is a straight line; give examples of non-linear functions',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Contrast constant rate linear relations against curved quadratic or exponential trajectories.',
            competency: 'Linearity testing and mathematical categorization.'
          },
          {
            id: 'g8m_3_4',
            topicNumber: '3.4',
            title: 'Constructing Functions Modeling Real-World Scenarios',
            standardCode: 'CCSS.MATH.8.F.B.4-5',
            standardTitle: 'Construct a function to model a linear relationship between two quantities; describe qualitatively the functional relationship',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Translate financial scenarios (e.g. flat fee + hourly rate) into linear models and interpret intercepts.',
            competency: 'Applied mathematical modeling and contextual interpretation.'
          }
        ]
      },
      {
        unitNumber: 4,
        title: 'Geometry, Transformations & The Pythagorean Theorem',
        domainCode: '8.G',
        description: 'Investigate rigid transformations (rotations, reflections, translations), dilations, angle sums, the Pythagorean theorem, and 3D volume formulas.',
        topics: [
          {
            id: 'g8m_4_1',
            topicNumber: '4.1',
            title: 'Rigid Transformations: Rotations, Reflections & Translations',
            standardCode: 'CCSS.MATH.8.G.A.1-2',
            standardTitle: 'Verify experimentally the properties of rotations, reflections, and translations; understand congruence',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Transform 2D figures on coordinate planes preserving side lengths and angle measures.',
            competency: 'Coordinate geometry and congruence proofs.'
          },
          {
            id: 'g8m_4_2',
            topicNumber: '4.2',
            title: 'Dilations & Similarity on the Coordinate Plane',
            standardCode: 'CCSS.MATH.8.G.A.3-4',
            standardTitle: 'Describe the effect of dilations, translations, rotations, and reflections on two-dimensional figures using coordinates',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Multiply coordinates by positive scale factors and prove similarity via proportional sides and equal angles.',
            competency: 'Proportional geometric transformations.'
          },
          {
            id: 'g8m_4_3',
            topicNumber: '4.3',
            title: 'The Pythagorean Theorem & Distance Formula',
            standardCode: 'CCSS.MATH.8.G.B.6-8',
            standardTitle: 'Explain a proof of the Pythagorean Theorem and its converse; apply it to determine unknown side lengths and distance',
            estimatedMinutes: 55,
            hasInteractiveLesson: false,
            summary: 'Prove a² + b² = c² in right triangles and calculate Euclidean distances between two coordinate points.',
            competency: 'Euclidean geometric calculation and proof.'
          },
          {
            id: 'g8m_4_4',
            topicNumber: '4.4',
            title: 'Volumes of Cylinders, Cones & Spheres',
            standardCode: 'CCSS.MATH.8.G.C.9',
            standardTitle: 'Know the formulas for the volumes of cones, cylinders, and spheres and use them to solve real-world problems',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Calculate 3D solid capacities using formulas V = πr²h, V = (1/3)πr²h, and V = (4/3)πr³.',
            competency: 'Spatial volumetric reasoning.'
          }
        ]
      },
      {
        unitNumber: 5,
        title: 'Bivariate Data & Systems of Equations',
        domainCode: '8.SP & 8.EE',
        description: 'Construct scatter plots, model associations with lines of best fit, analyze two-way frequency tables, and solve simultaneous 2x2 linear systems.',
        topics: [
          {
            id: 'g8m_5_1',
            topicNumber: '5.1',
            title: 'Scatter Plots & Bivariate Associations',
            standardCode: 'CCSS.MATH.8.SP.A.1',
            standardTitle: 'Construct and interpret scatter plots for bivariate measurement data to investigate patterns of association',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Identify positive, negative, linear, nonlinear associations, clustering, and outliers in paired datasets.',
            competency: 'Empirical data analysis and statistical pattern recognition.'
          },
          {
            id: 'g8m_5_2',
            topicNumber: '5.2',
            title: 'Lines of Best Fit & Linear Trendlines',
            standardCode: 'CCSS.MATH.8.SP.A.2-3',
            standardTitle: 'Know that straight lines are widely used to model relationships between two quantitative variables; use equations to solve problems',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Fit trendlines through data centroid clusters and use slope and y-intercept to predict future outcomes.',
            competency: 'Predictive statistical modeling.'
          },
          {
            id: 'g8m_5_3',
            topicNumber: '5.3',
            title: 'Solving Systems of Linear Equations Graphically & Algebraically',
            standardCode: 'CCSS.MATH.8.EE.C.8',
            standardTitle: 'Analyze and solve pairs of simultaneous linear equations by graphing, substitution, and elimination',
            estimatedMinutes: 60,
            hasInteractiveLesson: false,
            summary: 'Find the coordinate intersection point (x, y) satisfying both equations simultaneously and model intersection word problems.',
            competency: 'Simultaneous system resolution and economic breakeven analysis.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 3. Grade 4 Science
  // ---------------------------------------------------------------------------
  'grade-4:science': {
    courseSlug: 'science-grade-4',
    gradeSlug: 'grade-4',
    subjectSlug: 'science',
    title: 'Grade 4 Science: Earth Systems, Energy & Ecosystems',
    gradeName: 'Grade 4 (Elementary)',
    subjectName: 'Science',
    overview: 'Next Generation Science Standards (NGSS) core curriculum investigating Earth physical mechanisms, energy transfers, light waves, and plant/animal anatomical adaptations.',
    totalEstimatedHours: 100,
    frameworkStandard: 'Next Generation Science Standards (NGSS) / CDE Science',
    units: [
      {
        unitNumber: 1,
        title: 'Energy, Motion & Electricity',
        domainCode: '4-PS3',
        description: 'Explore kinetic vs potential energy, electrical circuits, energy transfer through collisions, and renewable energy resources.',
        topics: [
          {
            id: 'g4s_1_1',
            topicNumber: '1.1',
            title: 'Kinetic & Potential Energy in Motion',
            standardCode: 'NGSS.4-PS3-1',
            standardTitle: 'Use evidence to construct an explanation relating the speed of an object to the energy of that object',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Observe how faster-moving objects possess greater kinetic energy and transfer more force upon collision.',
            competency: 'Kinetic energy observation and physical causal reasoning.'
          },
          {
            id: 'g4s_1_2',
            topicNumber: '1.2',
            title: 'Energy Transfers in Electrical Circuits & Light',
            standardCode: 'NGSS.4-PS3-2',
            standardTitle: 'Make observations to provide evidence that energy can be transferred from place to place by sound, light, heat, and electric currents',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Build closed circuits with batteries, wires, and bulbs to witness electrical energy convert to thermal energy and light.',
            competency: 'Circuit construction and energy transformation tracing.'
          },
          {
            id: 'g4s_1_3',
            topicNumber: '1.3',
            title: 'Renewable vs. Nonrenewable Energy Resources',
            standardCode: 'NGSS.4-ESS3-1',
            standardTitle: 'Obtain and combine information to describe that energy and fuels are derived from natural resources and their uses affect the environment',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Compare solar, wind, and hydroelectric power against fossil fuel extraction and atmospheric emissions.',
            competency: 'Environmental resource evaluation.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Waves, Light & Information Transfer',
        domainCode: '4-PS4',
        description: 'Investigate wave patterns, amplitude, wavelength, reflection, and binary digital communication methods.',
        topics: [
          {
            id: 'g4s_2_1',
            topicNumber: '2.1',
            title: 'Wave Amplitude, Wavelength & Motion',
            standardCode: 'NGSS.4-PS4-1',
            standardTitle: 'Develop a model of waves to describe patterns in terms of amplitude and wavelength and that waves can cause objects to move',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Model water ripples and sound vibrations measuring crest-to-crest distance and wave height.',
            competency: 'Wave mechanical modeling.'
          },
          {
            id: 'g4s_2_2',
            topicNumber: '2.2',
            title: 'Light Reflection & The Human Eye',
            standardCode: 'NGSS.4-PS4-2',
            standardTitle: 'Develop a model to describe that light reflecting from objects and entering the eye allows objects to be seen',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Trace rays of light from illumination sources bouncing off surfaces into the cornea and retina.',
            competency: 'Optical ray modeling and sensory perception.'
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Earth Systems: Weathering, Erosion & Geological History',
        domainCode: '4-ESS2',
        description: 'Examine tectonic forces, rock layering, fossil evidence, and mechanical/chemical weathering that shape continents.',
        topics: [
          {
            id: 'g4s_3_1',
            topicNumber: '3.1',
            title: 'Earth Systems: Rock Cycle, Water Cycle & Weather',
            standardCode: 'NGSS.4-ESS2-1',
            standardTitle: 'Make observations and measurements to provide evidence of the effects of weathering or the rate of erosion by water, ice, wind, or vegetation',
            estimatedMinutes: 50,
            hasInteractiveLesson: true,
            activeLessonSlug: 'earth-systems',
            summary: 'Investigate how the hydrosphere, geosphere, atmosphere, and biosphere interact through rainfall, weathering, and continental rock formation.',
            competency: 'Geological system synthesis and weathering vs erosion differentiation.'
          },
          {
            id: 'g4s_3_2',
            topicNumber: '3.2',
            title: 'Fossil Layers & Earth Historical Timelines',
            standardCode: 'NGSS.4-ESS1-1',
            standardTitle: 'Identify evidence from patterns in rock formations and fossils in rock layers to support an explanation for changes in a landscape',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Examine sedimentary strata in canyons to reconstruct ancient ocean environments and prehistoric life.',
            competency: 'Stratigraphic fossil interpretation.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 4. Grade 9 Mathematics (Algebra 1)
  // ---------------------------------------------------------------------------
  'grade-9:mathematics': {
    courseSlug: 'math-grade-9',
    gradeSlug: 'grade-9',
    subjectSlug: 'mathematics',
    title: 'Algebra 1: Quadratic Functions, Polynomials & Exponential Models',
    gradeName: 'Grade 9 / High School / GCSE',
    subjectName: 'Mathematics',
    overview: 'High school foundational algebra covering quadratic functions, vertex forms, factoring, polynomial arithmetic, exponential growth, and radical algebraic expressions.',
    totalEstimatedHours: 140,
    frameworkStandard: 'Common Core High School (CCSS.MATH.HSA) / TEKS Algebra 1',
    units: [
      {
        unitNumber: 1,
        title: 'Relationships Between Quantities & Linear Systems',
        domainCode: 'HSA.CED & REI',
        description: 'Create equations describing numbers, manipulate literal formulas, and solve compound linear inequalities.',
        topics: [
          {
            id: 'g9m_1_1',
            topicNumber: '1.1',
            title: 'Literal Equations & Formula Rearrangement',
            standardCode: 'CCSS.MATH.HSA.CED.A.4',
            standardTitle: 'Rearrange formulas to highlight a quantity of interest, using the same reasoning as in solving equations',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Isolate variables in scientific equations like F = ma, V = IR, and the ideal gas law PV = nRT.',
            competency: 'Symbolic algebraic manipulation.'
          },
          {
            id: 'g9m_1_2',
            topicNumber: '1.2',
            title: 'Compound Inequalities & Absolute Value Statements',
            standardCode: 'CCSS.MATH.HSA.REI.B.3',
            standardTitle: 'Solve linear inequalities in one variable including compound and absolute value inequalities',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Graph conjunction (AND) and disjunction (OR) intervals on coordinate number lines.',
            competency: 'Interval notation and inequality algebra.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Quadratic Equations, Factoring & Vertex Parabola Models',
        domainCode: 'HSA.REI & SSE',
        description: 'Solve quadratic equations by factoring, completing the square, and using the quadratic formula; graph parabolas and determine extrema.',
        topics: [
          {
            id: 'g9m_2_1',
            topicNumber: '2.1',
            title: 'Quadratic Equations: Factoring, Vertex Forms & Parabola Graphs',
            standardCode: 'CCSS.MATH.HSA.REI.B.4',
            standardTitle: 'Solve quadratic equations in one variable by inspection, taking square roots, completing the square, and the quadratic formula',
            estimatedMinutes: 60,
            hasInteractiveLesson: true,
            activeLessonSlug: 'quadratic-equations',
            summary: 'Factor trinomials ax² + bx + c = 0, apply the quadratic formula, and model projectile trajectories using parabolic vertex coordinates.',
            competency: 'Nonlinear equation mastery, discriminant analysis, and quadratic modeling.'
          },
          {
            id: 'g9m_2_2',
            topicNumber: '2.2',
            title: 'Completing the Square & Deriving the Quadratic Formula',
            standardCode: 'CCSS.MATH.HSA.REI.B.4.A',
            standardTitle: 'Use the method of completing the square to transform any quadratic equation in x into an equation of the form (x - p)² = q',
            estimatedMinutes: 55,
            hasInteractiveLesson: false,
            summary: 'Geometrically and symbolically derive the universal quadratic formula x = (-b ± √(b² - 4ac)) / 2a.',
            competency: 'Algebraic proof and structural derivation.'
          },
          {
            id: 'g9m_2_3',
            topicNumber: '2.3',
            title: 'The Discriminant & Nature of Roots',
            standardCode: 'CCSS.MATH.HSA.REI.B.4.B',
            standardTitle: 'Recognize when the quadratic formula gives complex solutions and write them as a ± bi',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Evaluate Δ = b² - 4ac to determine whether roots are real distinct, real repeated, or complex conjugates.',
            competency: 'Discriminant root analysis.'
          }
        ]
      },
      {
        unitNumber: 3,
        title: 'Polynomial Arithmetic & Factoring Structures',
        domainCode: 'HSA.APR',
        description: 'Perform addition, subtraction, and multiplication on polynomials; explore special product formulas and difference of squares.',
        topics: [
          {
            id: 'g9m_3_1',
            topicNumber: '3.1',
            title: 'Polynomial Operations & Closure',
            standardCode: 'CCSS.MATH.HSA.APR.A.1',
            standardTitle: 'Understand that polynomials form a system analogous to the integers, namely, they are closed under operations of addition, subtraction, and multiplication',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Multiply binomials and trinomials using the FOIL algorithm and box multiplication grids.',
            competency: 'Polynomial algebraic manipulation.'
          },
          {
            id: 'g9m_3_2',
            topicNumber: '3.2',
            title: 'Factoring Special Products: Difference of Squares & Perfect Trinomials',
            standardCode: 'CCSS.MATH.HSA.SSE.A.2',
            standardTitle: 'Use the structure of an expression to identify ways to rewrite it, such as factoring differences of squares',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Factor algebraic expressions like a² - b² = (a - b)(a + b) and perfect square trinomials.',
            competency: 'Pattern recognition in algebraic structures.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 5. Grade 9 Science (High School Biology)
  // ---------------------------------------------------------------------------
  'grade-9:science': {
    courseSlug: 'science-grade-9-biology',
    gradeSlug: 'grade-9',
    subjectSlug: 'science',
    title: 'High School Biology: Cell Structure, Genetics & Ecology',
    gradeName: 'Grade 9 / High School / GCSE Biology',
    subjectName: 'Science',
    overview: 'In-depth biological sciences covering eukaryotic and prokaryotic cell organelles, biochemical enzymes, cellular respiration, DNA replication, protein synthesis, and ecological dynamics.',
    totalEstimatedHours: 130,
    frameworkStandard: 'Next Generation Science Standards (NGSS.HS-LS) / GCSE Biology',
    units: [
      {
        unitNumber: 1,
        title: 'Cellular Structure, Organelles & Membrane Transport',
        domainCode: 'HS-LS1',
        description: 'Explore the architectural organelles of prokaryotic and eukaryotic cells, phospholipid bilayer dynamics, and active/passive transport.',
        topics: [
          {
            id: 'g9s_1_1',
            topicNumber: '1.1',
            title: 'Cell Structure, Organelles & Molecular Transport',
            standardCode: 'NGSS.HS-LS1-1',
            standardTitle: 'Construct an explanation based on evidence for how the structure of DNA determines the structure of proteins which carry out the essential functions of life through systems of specialized cells',
            estimatedMinutes: 55,
            hasInteractiveLesson: true,
            activeLessonSlug: 'cell-biology',
            summary: 'Examine cell membranes, mitochondria, nuclei, ribosomes, and the endoplasmic reticulum, and trace ATP-powered transport across lipid bilayers.',
            competency: 'Cytological organization and membrane biophysics.'
          },
          {
            id: 'g9s_1_2',
            topicNumber: '1.2',
            title: 'Enzyme Catalysis & Biochemical Macromolecules',
            standardCode: 'NGSS.HS-LS1-6',
            standardTitle: 'Construct and revise an explanation based on evidence for how carbon, hydrogen, and oxygen from sugar molecules may combine with other elements to form amino acids and other large carbon-based molecules',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Investigate lock-and-key enzyme active sites, activation energy reduction, and denaturation caused by pH or thermal shifts.',
            competency: 'Biochemical kinetics and macromolecular synthesis.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Cellular Energetics: Photosynthesis & Respiration',
        domainCode: 'HS-LS1 & LS2',
        description: 'Follow ATP synthesis through aerobic cellular respiration in mitochondria and solar photon capture in chloroplasts.',
        topics: [
          {
            id: 'g9s_2_1',
            topicNumber: '2.1',
            title: 'Aerobic Respiration, Glycolysis & The Krebs Cycle',
            standardCode: 'NGSS.HS-LS1-7',
            standardTitle: 'Use a model to illustrate that cellular respiration is a chemical process whereby the bonds of food molecules and oxygen molecules are broken and the bonds in new compounds are formed resulting in net transfer of energy',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Trace glucose breakdown into pyruvate, electron transport along mitochondrial cristae, and ATP synthase rotation.',
            competency: 'Bioenergetic pathway tracing.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 6. Grade 10 Science (High School Chemistry)
  // ---------------------------------------------------------------------------
  'grade-10:science': {
    courseSlug: 'science-grade-10-chemistry',
    gradeSlug: 'grade-10',
    subjectSlug: 'science',
    title: 'High School Chemistry: Atomic Theory, Periodic Table & Chemical Bonds',
    gradeName: 'Grade 10 / High School / GCSE Chemistry',
    subjectName: 'Science',
    overview: 'Rigorous chemical foundations including Bohr and quantum mechanical atomic models, electron configurations, electronegativity trends, ionic/covalent/metallic bonding, stoichiometry, and thermochemistry.',
    totalEstimatedHours: 130,
    frameworkStandard: 'Next Generation Science Standards (NGSS.HS-PS) / GCSE Chemistry',
    units: [
      {
        unitNumber: 1,
        title: 'Atomic Structure, Electron Orbitals & Periodic Trends',
        domainCode: 'HS-PS1',
        description: 'Model subatomic particles, write spdf electron orbital configurations, and predict ionization energy and atomic radius trends.',
        topics: [
          {
            id: 'g10s_1_1',
            topicNumber: '1.1',
            title: 'Subatomic Particles & Quantum Orbitals (s, p, d, f)',
            standardCode: 'NGSS.HS-PS1-1',
            standardTitle: 'Use the periodic table as a model to predict the relative properties of elements based on the patterns of electrons in the outermost energy level of atoms',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Map electron configurations according to the Aufbau principle, Hund’s rule, and the Pauli exclusion principle.',
            competency: 'Quantum atomic notation and orbital visualization.'
          },
          {
            id: 'g10s_1_2',
            topicNumber: '1.2',
            title: 'Chemical Bonds: Ionic, Covalent & Metallic Electron Interactions',
            standardCode: 'NGSS.HS-PS1-2',
            standardTitle: 'Construct and revise an explanation for the outcome of a simple chemical reaction based on the outermost electron states of atoms, trends in the periodic table, and knowledge of the patterns of chemical properties',
            estimatedMinutes: 55,
            hasInteractiveLesson: true,
            activeLessonSlug: 'chemical-bonds',
            summary: 'Analyze electron sharing and transfer, Lewis dot diagrams, VSEPR molecular geometry, and macroscopic lattice properties.',
            competency: 'Chemical bonding synthesis and intermolecular force prediction.'
          }
        ]
      },
      {
        unitNumber: 2,
        title: 'Chemical Reactions, Balancing & Stoichiometry',
        domainCode: 'HS-PS1',
        description: 'Apply the law of conservation of mass, calculate molar masses, and determine theoretical yields in limiting reactant stoichiometry.',
        topics: [
          {
            id: 'g10s_2_1',
            topicNumber: '2.1',
            title: 'Balancing Chemical Equations & Reaction Types',
            standardCode: 'NGSS.HS-PS1-7',
            standardTitle: 'Use mathematical representations to support the claim that atoms, and therefore mass, are conserved during a chemical reaction',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Classify synthesis, decomposition, single displacement, double displacement, and combustion reactions.',
            competency: 'Reaction stoichiometry and conservation of mass proof.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 7. Grade 11 Science (High School Physics)
  // ---------------------------------------------------------------------------
  'grade-11:science': {
    courseSlug: 'science-grade-11-physics',
    gradeSlug: 'grade-11',
    subjectSlug: 'science',
    title: 'High School Physics: Newton’s Laws of Motion, Momentum & Energy',
    gradeName: 'Grade 11 / High School / AP Physics 1 / A-Levels',
    subjectName: 'Science',
    overview: 'Classical Newtonian mechanics, vector kinematics, dynamic free-body diagrams, conservation of momentum, work-energy theorem, and rotational dynamics.',
    totalEstimatedHours: 140,
    frameworkStandard: 'Next Generation Science Standards (NGSS.HS-PS2) / AP Physics 1',
    units: [
      {
        unitNumber: 1,
        title: 'Kinematics & Vector Motion in 1D and 2D',
        domainCode: 'HS-PS2',
        description: 'Derive constant-acceleration kinematic formulas, analyze position-time graphs, and compute 2D parabolic projectile vectors.',
        topics: [
          {
            id: 'g11s_1_1',
            topicNumber: '1.1',
            title: '1D Kinematic Equations & Graphical Calculus Intuition',
            standardCode: 'NGSS.HS-PS2-1.A',
            standardTitle: 'Analyze data to support the claim that Newton’s second law of motion describes the mathematical relationship among the net force on a macroscopic object, its mass, and its acceleration',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Calculate displacement, velocity, and acceleration using v = v₀ + at and x = v₀t + (1/2)at².',
            competency: 'Kinematic equation mastery and graphical slope interpretation.'
          },
          {
            id: 'g11s_1_2',
            topicNumber: '1.2',
            title: 'Newton’s Laws of Motion, Dynamics & Free-Body Diagrams',
            standardCode: 'NGSS.HS-PS2-1',
            standardTitle: 'Analyze data to support the claim that Newton’s second law of motion describes the mathematical relationship among net force, mass, and acceleration',
            estimatedMinutes: 60,
            hasInteractiveLesson: true,
            activeLessonSlug: 'newtons-laws',
            summary: 'Construct free-body diagrams, resolve normal, gravitational, tension, and frictional force vectors, and solve ΣF = ma.',
            competency: 'Dynamic vector equilibrium and quantitative force analysis.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 8. Grade 8 Social Studies & Civics
  // ---------------------------------------------------------------------------
  'grade-8:civics': {
    courseSlug: 'civics-grade-8',
    gradeSlug: 'grade-8',
    subjectSlug: 'civics',
    title: 'Grade 8 Civics: The U.S. Constitution, Separation of Powers & Rights',
    gradeName: 'Grade 8 / Middle School',
    subjectName: 'Social Studies & Civics',
    overview: 'Comprehensive civics and government curriculum examining the philosophical roots of democracy, constitutional checks and balances, the Bill of Rights, and citizen advocacy.',
    totalEstimatedHours: 110,
    frameworkStandard: 'C3 Framework for Social Studies / TEKS Grade 8 Social Studies',
    units: [
      {
        unitNumber: 1,
        title: 'Constitutional Foundations & Separation of Powers',
        domainCode: 'C3.CIV.1-4',
        description: 'Examine Enlightenment philosophy, the Constitutional Convention of 1787, federalism, and the three branches of government.',
        topics: [
          {
            id: 'g8c_1_1',
            topicNumber: '1.1',
            title: 'Constitutional Civics: Separation of Powers & Checks and Balances',
            standardCode: 'C3.CIV.1.6-8 / TEKS 8.15.D',
            standardTitle: 'Analyze the powers and responsibilities of the legislative, executive, and judicial branches under the Constitution',
            estimatedMinutes: 50,
            hasInteractiveLesson: true,
            activeLessonSlug: 'constitutional-civics',
            summary: 'Investigate how the tripartite system prevents tyranny through veto overrides, judicial review, and confirmation hearings.',
            competency: 'Constitutional system analysis and institutional accountability.'
          },
          {
            id: 'g8c_1_2',
            topicNumber: '1.2',
            title: 'The Bill of Rights & Landmark Civil Liberties',
            standardCode: 'C3.CIV.3.6-8',
            standardTitle: 'Examine the origins and purposes of the Bill of Rights and how each amendment protects individual liberties',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Analyze First Amendment freedoms (speech, press, assembly, religion) and Fourth Amendment protections against unreasonable searches.',
            competency: 'Constitutional rights interpretation and case study analysis.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 9. Grade 8 Computer Science & AI
  // ---------------------------------------------------------------------------
  'grade-8:computer-science': {
    courseSlug: 'cs-grade-8',
    gradeSlug: 'grade-8',
    subjectSlug: 'computer-science',
    title: 'Computer Science: Python Programming, Control Flow & Logic',
    gradeName: 'Grade 8 / Middle School',
    subjectName: 'Computer Science & AI',
    overview: 'Foundations of computer science and computational thinking covering variables, conditional branching, iteration, functions, data structures, and the ethical societal impacts of artificial intelligence.',
    totalEstimatedHours: 100,
    frameworkStandard: 'CSTA K-12 Computer Science Standards / UK National Curriculum KS3 Computing',
    units: [
      {
        unitNumber: 1,
        title: 'Python Programming, Control Flow & Modular Functions',
        domainCode: 'CSTA 2-AP',
        description: 'Master Python syntax, write dynamic algorithms with if-else logic and loops, and create modular functions.',
        topics: [
          {
            id: 'g8cs_1_1',
            topicNumber: '1.1',
            title: 'Python Programming: Variables, Control Flow & Modular Functions',
            standardCode: 'CSTA.2-AP-10',
            standardTitle: 'Use flowcharts and/or pseudocode to address complex problems as algorithms; implement algorithms in Python with variables and control flow',
            estimatedMinutes: 60,
            hasInteractiveLesson: true,
            activeLessonSlug: 'python-programming',
            summary: 'Learn variables, conditional if-else statements, for/while loops, modulo arithmetic, and write reusable functional code.',
            competency: 'Algorithmic thinking, syntax fluency, and procedural debugging.'
          },
          {
            id: 'g8cs_1_2',
            topicNumber: '1.2',
            title: 'Data Structures: Lists, Tuples & Dictionaries',
            standardCode: 'CSTA.2-AP-14',
            standardTitle: 'Create procedures with parameters to organize code and make it easier to reuse; manipulate indexed collections',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Store and access indexed data records using Python lists, indexing, slicing, and key-value dictionary mappings.',
            competency: 'Data structure manipulation and algorithm optimization.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 10. Grade 10 English Language Arts
  // ---------------------------------------------------------------------------
  'grade-10:english': {
    courseSlug: 'english-grade-10',
    gradeSlug: 'grade-10',
    subjectSlug: 'english',
    title: 'High School ELA: Rhetorical Analysis, Persuasive Essays & Logic',
    gradeName: 'Grade 10 / High School / GCSE English',
    subjectName: 'English Language Arts',
    overview: 'Advanced rhetoric, argumentative writing, textual analysis, and evidentiary synthesis across classical and contemporary non-fiction and literature.',
    totalEstimatedHours: 120,
    frameworkStandard: 'Common Core State Standards (CCSS.ELA-LITERACY.W.9-10)',
    units: [
      {
        unitNumber: 1,
        title: 'Rhetorical Appeals, Argumentative Synthesis & Toulmin Logic',
        domainCode: 'CCSS.ELA.W.9-10',
        description: 'Analyze Ethos, Pathos, and Logos; construct robust argumentative theses with textual warrants and systematic counterclaim refutations.',
        topics: [
          {
            id: 'g10e_1_1',
            topicNumber: '1.1',
            title: 'Rhetorical Appeals & Argumentative Writing',
            standardCode: 'CCSS.ELA-LITERACY.W.9-10.1',
            standardTitle: 'Write arguments to support claims in an analysis of substantive topics or texts, using valid reasoning and relevant and sufficient evidence',
            estimatedMinutes: 55,
            hasInteractiveLesson: true,
            activeLessonSlug: 'persuasive-writing',
            summary: 'Master Aristotelian appeals (Ethos, Pathos, Logos) to structure persuasive essays, integrate empirical evidence, and dismantle counterclaims.',
            competency: 'Persuasive argumentation, rhetorical analysis, and formal debate writing.'
          },
          {
            id: 'g10e_1_2',
            topicNumber: '1.2',
            title: 'Evaluating Source Credibility & Synthesizing Textual Evidence',
            standardCode: 'CCSS.ELA-LITERACY.RI.9-10.8',
            standardTitle: 'Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is valid and evidence is relevant',
            estimatedMinutes: 50,
            hasInteractiveLesson: false,
            summary: 'Detect logical fallacies (ad hominem, slippery slope, straw man) and evaluate authorial bias in investigative reporting.',
            competency: 'Critical media literacy and fallacy detection.'
          }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 11. Grade 7 Science (Life Science)
  // ---------------------------------------------------------------------------
  'grade-7:science': {
    courseSlug: 'science-grade-7',
    gradeSlug: 'grade-7',
    subjectSlug: 'science',
    title: 'Grade 7 Life Science: Cellular Processes & Ecosystem Photosynthesis',
    gradeName: 'Grade 7 / Middle School / Year 8',
    subjectName: 'Science',
    overview: 'Middle school life science exploring cellular respiration, chloroplast photosynthesis, food webs, and trophic matter cycling in ecological biomes.',
    totalEstimatedHours: 110,
    frameworkStandard: 'Next Generation Science Standards (NGSS.MS-LS) / UK KS3 Science',
    units: [
      {
        unitNumber: 1,
        title: 'Photosynthesis, Cellular Respiration & Ecosystem Energy Flow',
        domainCode: 'MS-LS1',
        description: 'Examine biochemical photosynthetic reactions, chloroplast thylakoid light absorption, and ecosystem energy pyramids.',
        topics: [
          {
            id: 'g7s_1_1',
            topicNumber: '1.1',
            title: 'Photosynthesis, Chloroplasts & Ecological Energy Flow',
            standardCode: 'NGSS.MS-LS1-6',
            standardTitle: 'Construct a scientific explanation based on evidence for the role of photosynthesis in the cycling of matter and flow of energy into and out of organisms',
            estimatedMinutes: 50,
            hasInteractiveLesson: true,
            activeLessonSlug: 'photosynthesis-plants',
            summary: 'Discover how photoautotrophs convert sunlight, water, and atmospheric CO₂ into chemical bond energy stored within glucose.',
            competency: 'Biochemical energy transformation and ecological food web foundations.'
          },
          {
            id: 'g7s_1_2',
            topicNumber: '1.2',
            title: 'Trophic Levels, Food Webs & Biomass Pyramids',
            standardCode: 'NGSS.MS-LS2-3',
            standardTitle: 'Develop a model to describe the cycling of matter and flow of energy among living and nonliving parts of an ecosystem',
            estimatedMinutes: 45,
            hasInteractiveLesson: false,
            summary: 'Trace the 10% ecological energy transfer rule through primary producers, herbivores, apex predators, and decomposers.',
            competency: 'Trophic level modeling and biomass conservation.'
          }
        ]
      }
    ]
  }
};

// Helper to retrieve course syllabus by grade and subject
export function getCourseSyllabus(gradeSlug: string, subjectSlug: string): CourseSyllabus | undefined {
  const key = `${gradeSlug}:${subjectSlug}`;
  return COURSE_SYLLABI[key];
}
