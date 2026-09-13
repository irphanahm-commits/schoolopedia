// Official CBSE & Indian National Boards Study Materials, Solved Papers (Previous 5 Years),
// Chapter-Wise MCQs, Assertion-Reasoning, Case-Based Questions, and Detailed Notes & Solved Q&A.
// Specifically crafted for Class 10 (Secondary Board Exam) and Class 12 (Senior Secondary Board Exam),
// alongside foundation materials for Classes 7, 8, 9, and 11.

export interface BoardExamPaper {
  year: number; // 2024, 2023, 2022, 2021, 2020
  title: string;
  set: string;
  maxMarks: number;
  timeHours: number;
  generalInstructions: string[];
  solvedQuestions: Array<{
    questionNumber: number;
    section: 'A' | 'B' | 'C' | 'D' | 'E';
    sectionTitle: string;
    marks: number;
    questionText: string;
    questionTextHindi?: string;
    options?: string[]; // for Section A MCQs
    optionsHindi?: string[];
    correctOptionIndex?: number;
    markingScheme: string[]; // step-by-step mark breakdown
    detailedSolution: string;
    detailedSolutionHindi?: string;
    examinerTip?: string;
  }>;
}

export interface ChapterMCQ {
  id: string;
  chapterNumber: number;
  chapterSlug: string;
  type: 'mcq' | 'assertion-reason' | 'case-based';
  question: string;
  questionHindi?: string;
  casePassage?: string;
  assertion?: string;
  reason?: string;
  options: string[];
  optionsHindi?: string[];
  correctOptionIndex: number;
  explanation: string;
  explanationHindi?: string;
  marks: number;
  askedInYear?: string; // e.g. "CBSE 2024", "CBSE 2023", "CBSE SQP"
}

export interface ChapterSolvedQuestion {
  id: string;
  chapterNumber: number;
  chapterSlug: string;
  questionType: 'VSA' | 'SA-I' | 'SA-II' | 'LA' | 'Case Study';
  marks: number;
  questionText: string;
  questionTextHindi?: string;
  askedInYears?: string[]; // e.g. ["CBSE 2024", "CBSE 2020"]
  stepWiseMarking: string[];
  completeAnswer: string;
  completeAnswerHindi?: string;
  diagramOrFormula?: string;
  examinerAlert?: string;
}

export interface ChapterStudyNotes {
  chapterNumber: number;
  chapterSlug: string;
  titleEnglish: string;
  titleHindi: string;
  quickRevisionSummary: string;
  quickRevisionSummaryHindi?: string;
  coreFormulasAndLaws: Array<{
    name: string;
    formulaOrStatement: string;
    explanation: string;
  }>;
  keyDefinitions: Array<{
    term: string;
    definition: string;
  }>;
  cbseExaminerTips: string[];
  mustRememberPoints: string[];
}

export interface SubjectBoardSuite {
  classNumber: number; // 10 or 12
  classSlug: string; // 'grade-10', 'grade-12'
  subjectSlug: string; // 'science', 'mathematics', 'history', etc.
  subjectName: string;
  boardCode: string; // e.g. "CBSE Code 086"
  previous5YearsPapers: BoardExamPaper[];
  chapterNotes: ChapterStudyNotes[];
  chapterMCQs: ChapterMCQ[];
  chapterSolvedQuestions: ChapterSolvedQuestion[];
}

export const INDIAN_BOARD_MATERIALS_DATABASE: Record<string, SubjectBoardSuite> = {
  // ===========================================================================
  // CLASS 10 SCIENCE (CBSE CODE 086) - ULTRA IMPORTANT BOARD EXAM
  // ===========================================================================
  'grade-10:science': {
    classNumber: 10,
    classSlug: 'grade-10',
    subjectSlug: 'science',
    subjectName: 'Science',
    boardCode: 'CBSE Code 086 / AISSE Class 10',
    previous5YearsPapers: [
      {
        year: 2024,
        title: 'CBSE Class 10 Science Board Examination 2024 (Official Solved Paper)',
        set: 'Series Q.P. Set 1 (Code 31/1/1)',
        maxMarks: 80,
        timeHours: 3,
        generalInstructions: [
          'This question paper consists of 39 questions in 5 sections.',
          'Section A consists of 20 objective type questions carrying 1 mark each (Questions 1 to 16 are MCQs, 17 to 20 are Assertion-Reasoning).',
          'Section B consists of 6 Very Short questions carrying 2 marks each (Questions 21 to 26).',
          'Section C consists of 7 Short Answer type questions carrying 3 marks each (Questions 27 to 33).',
          'Section D consists of 3 Long Answer type questions carrying 5 marks each (Questions 34 to 36).',
          'Section E consists of 3 source-based/case-based units of assessment carrying 4 marks each (Questions 37 to 39).'
        ],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Multiple Choice Questions (1 Mark Each)',
            marks: 1,
            questionText: 'When aqueous solutions of potassium iodide and lead nitrate are mixed, an insoluble substance precipitates out. The chemical formula and colour of the precipitate are:',
            questionTextHindi: 'जब पोटेशियम आयोडाइड और लेड नाइट्रेट के जलीय विलयनों को मिलाया जाता है, तो एक अविलेय पदार्थ अवक्षेपित होता है। अवक्षेप का रासायनिक सूत्र एवं रंग है:',
            options: [
              'PbI₂, Yellow',
              'KNO₃, White',
              'PbI, Yellow',
              'Pb(NO₃)₂, White'
            ],
            optionsHindi: [
              'PbI₂, पीला',
              'KNO₃, श्वेत',
              'PbI, पीला',
              'Pb(NO₃)₂, श्वेत'
            ],
            correctOptionIndex: 0,
            markingScheme: ['[1 Mark] For writing correct formula PbI₂ and color Yellow.'],
            detailedSolution: 'Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ + 2KNO₃(aq). The precipitate formed is Lead(II) iodide (PbI₂), which is bright yellow in colour. This is a classic double displacement and precipitation reaction.',
            detailedSolutionHindi: 'Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ + 2KNO₃(aq)। बनने वाला अवक्षेप लेड आयोडाइड (PbI₂) है, जो चमकीले पीले रंग का होता है। यह एक द्विविस्थापन एवं अवक्षेपण अभिक्रिया है।',
            examinerTip: 'Do not confuse PbI with PbI₂. Lead has valency 2+ in lead nitrate, so the formula is strictly PbI₂.'
          },
          {
            questionNumber: 2,
            section: 'A',
            sectionTitle: 'Section A: Multiple Choice Questions (1 Mark Each)',
            marks: 1,
            questionText: 'In a human male, which of the following is responsible for maintaining the temperature of testes lower than the internal body temperature for spermatogenesis?',
            questionTextHindi: 'मानव नर में, शुक्राणु निर्माण हेतु वृषण का तापमान शरीर के आंतरिक तापमान से कम बनाए रखने के लिए निम्नलिखित में से कौन उत्तरदायी है?',
            options: [
              'Scrotum',
              'Vas deferens',
              'Epididymis',
              'Prostate gland'
            ],
            optionsHindi: [
              'वृषण कोष (Scrotum)',
              'शुक्रवाहिका (Vas deferens)',
              'अधिवृषण (Epididymis)',
              'प्रोस्टेट ग्रंथि (Prostate gland)'
            ],
            correctOptionIndex: 0,
            markingScheme: ['[1 Mark] For identifying Scrotum as the correct organ.'],
            detailedSolution: 'Testes are located outside the abdominal cavity in the scrotum because sperm formation requires a temperature about 2°C to 2.5°C lower than normal body temperature (37°C).',
            detailedSolutionHindi: 'वृषण उदर गुहा के बाहर वृषण कोष में स्थित होते हैं क्योंकि शुक्राणु निर्माण के लिए सामान्य शरीर के तापमान से 2°C से 2.5°C कम तापमान की आवश्यकता होती है।',
            examinerTip: 'Always mention the exact temperature difference (2 to 2.5°C below body temperature).'
          },
          {
            questionNumber: 17,
            section: 'A',
            sectionTitle: 'Section A: Assertion-Reason Questions (1 Mark Each)',
            marks: 1,
            questionText: 'Assertion (A): The inner lining of the small intestine has numerous finger-like projections called villi.\nReason (R): Villi increase the surface area for efficient absorption of digested food.',
            questionTextHindi: 'अभिकथन (A): क्षुद्रांत्र (छोटी आंत) के आंतरिक अस्तर पर अनेक अंगुली जैसे प्रवर्ध होते हैं जिन्हें दीर्घरोम (villi) कहते हैं।\nकारण (R): दीर्घरोम पचे हुए भोजन के प्रभावी अवशोषण के लिए सतही क्षेत्रफल बढ़ाते हैं।',
            options: [
              'Both (A) and (R) are true and (R) is the correct explanation of (A)',
              'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
              '(A) is true but (R) is false',
              '(A) is false but (R) is true'
            ],
            correctOptionIndex: 0,
            markingScheme: ['[1 Mark] Both A and R are true and R correctly explains A.'],
            detailedSolution: 'Both Assertion and Reason are scientifically accurate. The small intestine is the site of complete digestion. The finger-like villi greatly increase the surface area and are richly supplied with blood vessels that absorb nutrients and transport them to every cell.',
            examinerTip: 'Whenever asked about villi, cite both the increase in surface area and the rich network of blood capillaries.'
          },
          {
            questionNumber: 21,
            section: 'B',
            sectionTitle: 'Section B: Very Short Answer (2 Marks Each)',
            marks: 2,
            questionText: 'State Snell\'s law of refraction of light. Write its mathematical expression.',
            questionTextHindi: 'प्रकाश के अपवर्तन के स्नेल के नियम का उल्लेख कीजिए। इसका गणितीय व्यंजक लिखिए।',
            markingScheme: [
              '[1 Mark] Statement of Snell\'s law: Ratio of sine of angle of incidence to sine of angle of refraction is constant for a given pair of media and color of light.',
              '[1 Mark] Correct formula: sin(i) / sin(r) = constant (n₂₁).'
            ],
            detailedSolution: 'Snell\'s Law of Refraction states that:\n1. The ratio of the sine of the angle of incidence (i) to the sine of the angle of refraction (r) is a constant for the light of a given color and for the given pair of media.\n2. Mathematical expression: sin(i) / sin(r) = n₂₁ = constant, where n₂₁ is the refractive index of the second medium with respect to the first medium.',
            detailedSolutionHindi: 'स्नेल का अपवर्तन नियम:\n1. प्रकाश के किसी निश्चित रंग तथा निश्चित माध्यमों के युग्म के लिए आपतन कोण की ज्या (sin i) तथा अपवर्तन कोण की ज्या (sin r) का अनुपात स्थिर होता है।\n2. गणितीय व्यंजक: sin(i) / sin(r) = n₂₁ = नियतांक, जहाँ n₂₁ माध्यम 1 के सापेक्ष माध्यम 2 का अपवर्तनांक है।',
            examinerTip: 'Students frequently forget to write "for a given color of light and given pair of media". Including this condition is mandatory to secure the full 1 mark for the statement.'
          },
          {
            questionNumber: 27,
            section: 'C',
            sectionTitle: 'Section C: Short Answer (3 Marks Each)',
            marks: 3,
            questionText: 'A metal ribbon "X" burns in oxygen with a dazzling white flame and changes into a white powder "Y".\n(a) Identify X and Y.\n(b) Write a balanced chemical equation for the reaction.\n(c) What type of reaction is this? Is the white powder basic or acidic in nature?',
            questionTextHindi: 'एक धातु का फीता "X" ऑक्सीजन में चमकदार श्वेत ज्वाला के साथ जलता है और एक श्वेत चूर्ण "Y" में परिवर्तित हो जाता है।\n(a) X एवं Y को पहचानिए।\n(b) अभिक्रिया का संतुलित रासायनिक समीकरण लिखिए।\n(c) यह किस प्रकार की अभिक्रिया है? श्वेत चूर्ण की प्रकृति अम्लीय है या क्षारकीय?',
            markingScheme: [
              '[1 Mark] Identification of X as Magnesium (Mg) and Y as Magnesium Oxide (MgO).',
              '[1 Mark] Balanced chemical equation: 2Mg(s) + O₂(g) → 2MgO(s).',
              '[1 Mark] Combination / Oxidation reaction, and basic oxide nature (turns moist red litmus blue).'
            ],
            detailedSolution: '(a) Metal X is Magnesium (Mg) and the white powder Y is Magnesium Oxide (MgO).\n(b) Balanced Chemical Equation: 2Mg(s) + O₂(g) → 2MgO(s).\n(c) Type of reaction: Combination reaction (two reactants combine to form a single product) and Oxidation reaction (magnesium gains oxygen). The powder MgO is basic in nature because when dissolved in water it forms magnesium hydroxide [Mg(OH)₂], which turns red litmus paper blue.',
            detailedSolutionHindi: '(a) धातु X मैग्नीशियम (Mg) है तथा श्वेत चूर्ण Y मैग्नीशियम ऑक्साइड (MgO) है।\n(b) संतुलित रासायनिक समीकरण: 2Mg(s) + O₂(g) → 2MgO(s)।\n(c) यह संयोजन अभिक्रिया एवं उपचयन अभिक्रिया है। MgO क्षारकीय ऑक्साइड है क्योंकि यह जल में घुलकर मैग्नीशियम हाइड्रॉक्साइड बनाता है जो लाल लिटमस को नीला कर देता है।',
            examinerTip: 'Always balance the chemical equation (write 2Mg and 2MgO). Writing unbalanced Mg + O₂ → MgO costs 0.5 mark.'
          },
          {
            questionNumber: 34,
            section: 'D',
            sectionTitle: 'Section D: Long Answer (5 Marks Each)',
            marks: 5,
            questionText: '(a) Define electric power. Write its SI unit.\n(b) An electric heater of resistance 8 Ω draws 15 A from the service mains for 2 hours. Calculate the rate at which heat is developed in the heater and total energy consumed in kWh.',
            questionTextHindi: '(a) विद्युत शक्ति को परिभाषित कीजिए। इसका SI मात्रक लिखिए।\n(b) 8 Ω प्रतिरोध का एक विद्युत हीटर मेंस से 2 घंटे तक 15 A विद्युत धारा लेता है। हीटर में ऊष्मा उत्पन्न होने की दर तथा कुल प्रयुक्त ऊर्जा (kWh में) परिकलित कीजिए।',
            markingScheme: [
              '[1 Mark] Definition of electric power: Rate at which electrical energy is consumed or dissipated in an electric circuit.',
              '[1 Mark] SI unit: Watt (W) or Joule per second (J/s).',
              '[1.5 Marks] Rate of heat development = P = I²R = (15)² × 8 = 225 × 8 = 1800 W (or 1800 J/s).',
              '[1.5 Marks] Total energy = P × t = 1800 W × 2 h = 3600 Wh = 3.6 kWh.'
            ],
            detailedSolution: '(a) Electric Power: The rate at which electric energy is consumed or dissipated in an electrical circuit is called electric power (P = VI = I²R = V²/R). Its SI unit is the Watt (W), where 1 W = 1 Volt × 1 Ampere = 1 Joule/second.\n\n(b) Given:\nResistance, R = 8 Ω\nCurrent, I = 15 A\nTime, t = 2 hours\n\n1. Rate at which heat is developed = Power (P):\nP = I² × R\nP = (15 A)² × 8 Ω = 225 × 8 = 1800 Watts (or 1800 Joules/second).\n\n2. Total electrical energy consumed (E):\nE = Power (in kW) × Time (in hours)\nPower in kW = 1800 / 1000 = 1.8 kW\nE = 1.8 kW × 2 h = 3.6 kWh (Commercial units).',
            detailedSolutionHindi: '(a) विद्युत शक्ति: किसी विद्युत परिपथ में विद्युत ऊर्जा के उपभुक्त होने की दर को विद्युत शक्ति कहते हैं (P = VI = I²R)। इसका SI मात्रक वाट (Watt) है।\n(b) दिया है: R = 8 Ω, I = 15 A, t = 2 घंटे।\nऊष्मा उत्पन्न होने की दर = P = I²R = (15)² × 8 = 1800 W (जूल/सेकंड)।\nकुल विद्युत ऊर्जा = 1.8 kW × 2 h = 3.6 kWh (यूनिट)।',
            examinerTip: '"Rate at which heat is developed" means Power (P = I²R), NOT total heat (H = I²Rt). Many students compute H = I²Rt and lose 1.5 marks. Always read the question carefully!'
          }
        ]
      },
      {
        year: 2023,
        title: 'CBSE Class 10 Science Board Examination 2023 (Official Solved Paper)',
        set: 'Series Q.P. Set 2 (Code 31/2/2)',
        maxMarks: 80,
        timeHours: 3,
        generalInstructions: [
          'Full 80 Marks board question paper aligned with NCERT rationalised syllabus.',
          'Contains comprehensive step-by-step marking schemes for each section.'
        ],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Objective Type (1 Mark)',
            marks: 1,
            questionText: 'Which of the following mirror is used by dentists to examine small cavities in patients\' teeth?',
            questionTextHindi: 'दंत चिकित्सक मरीजों के दांतों में छोटे गड्ढों (कैविटी) की जांच के लिए निम्नलिखित में से किस दर्पण का उपयोग करते हैं?',
            options: ['Convex mirror', 'Concave mirror', 'Plane mirror', 'Cylindrical mirror'],
            optionsHindi: ['उत्तल दर्पण', 'अवतल दर्पण', 'समतल दर्पण', 'बेलनाकार दर्पण'],
            correctOptionIndex: 1,
            markingScheme: ['[1 Mark] Correct answer: Concave mirror.'],
            detailedSolution: 'Dentists use concave mirrors because when an object (the tooth) is placed close to the mirror (between focus and pole), the concave mirror produces an erect, magnified, and virtual image of the tooth, allowing detailed examination.',
            examinerTip: 'Concave mirrors produce magnified virtual images only when the object is placed between the Pole (P) and Focus (F).'
          },
          {
            questionNumber: 27,
            section: 'C',
            sectionTitle: 'Section C: Short Answer (3 Marks)',
            marks: 3,
            questionText: 'Name the three steps involved in the process of photosynthesis. Write the overall balanced chemical equation.',
            questionTextHindi: 'प्रकाश संश्लेषण की प्रक्रिया में शामिल तीन चरणों के नाम लिखिए। संपूर्ण संतुलित रासायनिक समीकरण लिखिए।',
            markingScheme: [
              '[1.5 Marks] Three events: (i) Absorption of light energy by chlorophyll, (ii) Conversion of light energy to chemical energy and splitting of water into hydrogen and oxygen, (iii) Reduction of carbon dioxide to carbohydrates.',
              '[1.5 Marks] 6CO₂ + 12H₂O + Sunlight + Chlorophyll → C₆H₁₂O₆ + 6O₂ + 6H₂O.'
            ],
            detailedSolution: 'The three events of photosynthesis are:\n1. Absorption of light energy by chlorophyll.\n2. Conversion of light energy to chemical energy and splitting (photolysis) of water molecules into hydrogen and oxygen.\n3. Reduction of carbon dioxide to carbohydrates (glucose).\n\nBalanced Equation:\n6CO₂ + 12H₂O ⎯[Chlorophyll / Sunlight]⎯→ C₆H₁₂O₆ + 6O₂ + 6H₂O.',
            examinerTip: 'These steps need not take place one immediately after the other; for example, desert plants take up CO₂ at night and prepare an intermediate.'
          }
        ]
      },
      {
        year: 2022,
        title: 'CBSE Class 10 Science Board Examination 2022 (Term 1 & Term 2 Solved)',
        set: 'Term 2 Board Theory Paper (Code 31/1/3)',
        maxMarks: 40,
        timeHours: 2,
        generalInstructions: ['Official CBSE Term-wise Board examination solutions.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Carbon & Periodic Properties (2 Marks)',
            marks: 2,
            questionText: 'Why does carbon form compounds mainly by covalent bonding? State two reasons.',
            questionTextHindi: 'कार्बन मुख्य रूप से सहसंयोजक आबंधन द्वारा यौगिक क्यों बनाता है? दो कारण बताइए।',
            markingScheme: [
              '[1 Mark] Carbon cannot gain 4 electrons (form C⁴⁻) as it would be difficult for 6 protons to hold 10 electrons.',
              '[1 Mark] Carbon cannot lose 4 electrons (form C⁴⁺) as it requires huge energy to remove 4 electrons from the nucleus.'
            ],
            detailedSolution: 'Carbon has atomic number 6 with electronic configuration (2, 4). To attain noble gas configuration:\n1. It could gain 4 electrons to form C⁴⁻ anion, but it would be very difficult for the nucleus with 6 protons to hold on to 10 electrons.\n2. It could lose 4 electrons forming C⁴⁺ cation, but it would require an immense amount of energy to remove 4 electrons leaving a carbon cation with 6 protons holding only 2 electrons.\nHence, carbon overcomes this problem by sharing its valence electrons with other atoms of carbon or other elements to form covalent bonds.',
            examinerTip: 'Both reasons (why it cannot form C⁴⁻ and why it cannot form C⁴⁺) are strictly required for full marks.'
          }
        ]
      },
      {
        year: 2021,
        title: 'CBSE Class 10 Science Official Assessment Model Paper 2021',
        set: 'Official Board Standard Assessment',
        maxMarks: 80,
        timeHours: 3,
        generalInstructions: ['Official CBSE assessment marking framework with high-order questions.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'B',
            sectionTitle: 'Section B: Heredity & Evolution (2 Marks)',
            marks: 2,
            questionText: 'A Mendelian experiment consisted of breeding tall pea plants bearing violet flowers with short pea plants bearing white flowers. What will be the expected progeny in F1 generation?',
            questionTextHindi: 'एक मेंडेलियन प्रयोग में बैंगनी फूलों वाले लंबे मटर के पौधों का संकरण सफेद फूलों वाले बौने पौधों से कराया गया। F1 पीढ़ी में क्या संतति प्राप्त होगी?',
            markingScheme: [
              '[1 Mark] All progeny plants will be tall and bear violet flowers.',
              '[1 Mark] Explanation: Tallness (T) and violet flowers (V) are dominant traits over shortness (t) and white flowers (v).'
            ],
            detailedSolution: 'In the F1 generation, all plants will be Tall with Violet flowers. Reason: Tallness is dominant over dwarfness (shortness), and violet flower color is dominant over white flower color. According to Mendel\'s Law of Dominance, only dominant traits are phenotypically expressed in heterozygous F1 offspring (TtVv).',
            examinerTip: 'Always specify that both traits are heterozygous dominant (TtVv) in the F1 generation.'
          }
        ]
      },
      {
        year: 2020,
        title: 'CBSE Class 10 Science Board Examination 2020 (Official Pre-Pandemic Solved)',
        set: 'Set 1 (Code 31/1/1)',
        maxMarks: 80,
        timeHours: 3,
        generalInstructions: ['Complete 80 marks board paper with standard NCERT solutions.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'C',
            sectionTitle: 'Section C: Electricity & Circuits (3 Marks)',
            marks: 3,
            questionText: 'Three resistors of resistances R₁, R₂, and R₃ are connected in parallel. Derive the expression for the equivalent resistance of the combination.',
            questionTextHindi: 'R₁, R₂ और R₃ प्रतिरोध के तीन प्रतिरोधक पार्श्वक्रम (समांतर क्रम) में जुड़े हैं। संयोजन के तुल्य प्रतिरोध के व्यंजक का निगमन कीजिए।',
            markingScheme: [
              '[1 Mark] Stating that potential difference V is same across each resistor, and total current I = I₁ + I₂ + I₃.',
              '[1 Mark] Applying Ohm\'s law: I₁ = V/R₁, I₂ = V/R₂, I₃ = V/R₃, and I = V/R_eq.',
              '[1 Mark] Final derivation: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃.'
            ],
            detailedSolution: 'In a parallel combination:\n1. The potential difference (V) across each resistor is identical.\n2. Total current (I) is the sum of currents through individual branches: I = I₁ + I₂ + I₃.\n3. By Ohm\'s law (I = V/R):\nI₁ = V / R₁\nI₂ = V / R₂\nI₃ = V / R₃\n4. If R_p is equivalent resistance, I = V / R_p.\nSubstituting:\nV / R_p = V / R₁ + V / R₂ + V / R₃\nDividing both sides by V:\n1 / R_p = 1 / R₁ + 1 / R₂ + 1 / R₃.',
            examinerTip: 'Draw the circuit diagram with an ammeter, voltmeter, and battery to guarantee full presentation marks.'
          }
        ]
      }
    ],
    chapterNotes: [
      {
        chapterNumber: 1,
        chapterSlug: 'chemical-reactions-and-equations',
        titleEnglish: 'Chemical Reactions and Equations',
        titleHindi: 'रासायनिक अभिक्रियाएँ एवं समीकरण',
        quickRevisionSummary: 'Chemical reactions involve bond breaking and bond making between atoms to produce new substances with entirely new chemical properties. A balanced equation strictly satisfies the Law of Conservation of Mass.',
        quickRevisionSummaryHindi: 'रासायनिक अभिक्रियाओं में परमाणुओं के बीच बंध टूटने और नए बंध बनने से नए रासायनिक गुणों वाले पदार्थों का निर्माण होता है। संतुलित समीकरण द्रव्यमान संरक्षण के नियम का पालन करता है।',
        coreFormulasAndLaws: [
          {
            name: 'Law of Conservation of Mass',
            formulaOrStatement: 'Total mass of reactants = Total mass of products (Σ m_reactants = Σ m_products)',
            explanation: 'Matter can neither be created nor destroyed in a chemical reaction. Therefore, the number of atoms of each element must remain the same before and after the reaction.'
          },
          {
            name: 'Combination Reaction',
            formulaOrStatement: 'A + B → AB',
            explanation: 'Two or more substances combine to form a single product. Example: CaO(s) + H₂O(l) → Ca(OH)₂(aq) + Heat (Slaking of lime).'
          },
          {
            name: 'Decomposition Reaction',
            formulaOrStatement: 'AB ⎯[Heat/Electricity/Light]⎯→ A + B',
            explanation: 'A single reactant breaks down into simpler products. Thermal: 2FeSO₄ → Fe₂O₃ + SO₂ + SO₃. Electrolytic: 2H₂O → 2H₂ + O₂. Photolytic: 2AgCl → 2Ag + Cl₂.'
          },
          {
            name: 'Redox Reactions (Oxidation & Reduction)',
            formulaOrStatement: 'Oxidation = Gain of O or Loss of H; Reduction = Gain of H or Loss of O',
            explanation: 'In CuO + H₂ ⎯Δ⎯→ Cu + H₂O: CuO is reduced to Cu (Oxidising agent: CuO), and H₂ is oxidised to H₂O (Reducing agent: H₂).'
          }
        ],
        keyDefinitions: [
          { term: 'Precipitate', definition: 'An insoluble solid that separates out from a liquid solution during a chemical reaction.' },
          { term: 'Exothermic Reaction', definition: 'A chemical reaction accompanied by the evolution of heat (e.g. Respiration, Burning of natural gas).' },
          { term: 'Endothermic Reaction', definition: 'A chemical reaction which proceeds with the absorption of heat or energy (e.g. Photosynthesis, Thermal decomposition of limestone).' },
          { term: 'Corrosion', definition: 'The gradual deterioration of metals due to chemical action of atmospheric gases like oxygen, moisture, and CO₂ (e.g. Rusting of iron: Fe₂O₃·xH₂O).' },
          { term: 'Rancidity', definition: 'The aerial oxidation of fats and oils in food marked by unpleasant smell and taste, prevented by antioxidants and flushing with nitrogen.' }
        ],
        cbseExaminerTips: [
          'Always mention physical states: (s) for solid, (l) for liquid, (g) for gas, (aq) for aqueous solution.',
          'For photolytic decomposition of silver chloride/bromide, mention its application in black-and-white photography.',
          'Respiration is an exothermic reaction because glucose combines with oxygen in cells releasing energy: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy.'
        ],
        mustRememberPoints: [
          'Calcium oxide (Quicklime: CaO) reacts vigorously with water to form Calcium hydroxide (Slaked lime: Ca(OH)₂).',
          'Slaked lime is used for whitewashing walls; it reacts slowly with atmospheric CO₂ to form a shiny layer of Calcium carbonate (CaCO₃) within 2-3 days.',
          'In electrolysis of water, the volume of hydrogen gas collected at the cathode is double the volume of oxygen collected at the anode (ratio 2:1 by volume).'
        ]
      },
      {
        chapterNumber: 6,
        chapterSlug: 'life-processes',
        titleEnglish: 'Life Processes',
        titleHindi: 'जैव प्रक्रम',
        quickRevisionSummary: 'The basic biological functions performed by living organisms to maintain life on earth: Nutrition, Respiration, Transportation, and Excretion.',
        quickRevisionSummaryHindi: 'सजीवों द्वारा अपने जीवन के अनुरक्षण हेतु की जाने वाली मूलभूत क्रियाएँ: पोषण, श्वसन, वहन एवं उत्सर्जन।',
        coreFormulasAndLaws: [
          {
            name: 'Aerobic vs Anaerobic Respiration Breakdown',
            formulaOrStatement: 'Glucose (6C) ⎯(Cytoplasm)⎯→ Pyruvate (3C) + Energy',
            explanation: '(i) In presence of O₂ (Mitochondria) → 6CO₂ + 6H₂O + 38 ATP. (ii) Lack of O₂ in human muscle cells → Lactic acid + Energy (causes cramps). (iii) Absence of O₂ in Yeast (Fermentation) → Ethanol + CO₂ + 2 ATP.'
          },
          {
            name: 'Blood Pressure Norms',
            formulaOrStatement: 'Systolic = 120 mm Hg, Diastolic = 80 mm Hg (Measured by Sphygmomanometer)',
            explanation: 'Systolic is pressure during ventricular contraction; diastolic is pressure during ventricular relaxation.'
          }
        ],
        keyDefinitions: [
          { term: 'Peristalsis', definition: 'Rhythmic contraction and relaxation of the muscular walls of the alimentary canal to push food forward.' },
          { term: 'Emulsification', definition: 'Breakdown of large fat globules into smaller globules by bile salts, increasing enzyme efficiency of lipase.' },
          { term: 'Nephron', definition: 'The structural and functional filtration unit of the human kidney consisting of Bowman\'s capsule, glomerulus, and renal tubule.' },
          { term: 'Transpiration Pull', definition: 'Suction pressure created by evaporation of water from stomata that pulls water and minerals upward from roots through xylem vessels.' }
        ],
        cbseExaminerTips: [
          'In heart diagrams, clearly label the 4 chambers, bicuspid/tricuspid valves, septum, aorta, and vena cava.',
          'Remember: Arteries carry blood away from heart under high pressure (thick elastic walls); veins have valves to prevent backflow.'
        ],
        mustRememberPoints: [
          'Gastric juice contains Pepsin (protein digesting enzyme, active only in acidic medium), HCl (creates acidic pH ~1.5 to 2), and Mucus (protects stomach wall).',
          'Small intestine receives bile juice (from liver: neutralizes stomach acid, emulsifies fats) and pancreatic juice (contains trypsin for proteins and lipase for emulsified fats).'
        ]
      }
    ],
    chapterMCQs: [
      {
        id: 'c10-sci-mcq-01',
        chapterNumber: 1,
        chapterSlug: 'chemical-reactions-and-equations',
        type: 'mcq',
        question: 'Which of the following statements about the given reaction is correct?\n3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)\n(i) Iron metal is getting oxidised.\n(ii) Water is getting reduced.\n(iii) Water is acting as reducing agent.\n(iv) Water is acting as oxidising agent.',
        questionHindi: 'दी गई अभिक्रिया के संबंध में कौन सा कथन सही है?\n3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)\n(i) आयरन धातु उपचयित हो रही है।\n(ii) जल अपचयित हो रहा है।\n(iii) जल अपचायक के रूप में कार्य कर रहा है।\n(iv) जल उपचायक (ऑक्सीकारक) के रूप में कार्य कर रहा है।',
        options: [
          '(i), (ii) and (iii)',
          '(i), (ii) and (iv)',
          '(i) and (iv)',
          '(ii) and (iv)'
        ],
        optionsHindi: [
          '(i), (ii) तथा (iii)',
          '(i), (ii) तथा (iv)',
          '(i) तथा (iv)',
          '(ii) तथा (iv)'
        ],
        correctOptionIndex: 1,
        explanation: 'Fe gains oxygen to form Fe₃O₄, so iron is oxidised (i). H₂O loses oxygen to form H₂, so water is reduced (ii). The substance that gets reduced acts as the oxidising agent, so H₂O is the oxidising agent (iv). Thus, statements (i), (ii), and (iv) are correct.',
        explanationHindi: 'Fe ऑक्सीजन प्राप्त करके Fe₃O₄ बनाता है, इसलिए आयरन उपचयित होता है (i)। H₂O ऑक्सीजन खोकर H₂ बनाता है, इसलिए जल अपचयित होता है (ii)। जो पदार्थ अपचयित होता है वह ऑक्सीकारक (उपचायक) होता है, अतः जल उपचायक है (iv)।',
        marks: 1,
        askedInYear: 'CBSE 2024 / NCERT Exemplar'
      },
      {
        id: 'c10-sci-mcq-02',
        chapterNumber: 1,
        chapterSlug: 'chemical-reactions-and-equations',
        type: 'assertion-reason',
        question: 'Directions: In the following question, a statement of Assertion (A) is followed by a statement of Reason (R).\nAssertion (A): Exposure of silver chloride to sunlight for a long duration turns grey.\nReason (R): Silver chloride undergoes photolytic decomposition to form silver metal and chlorine gas.',
        options: [
          'Both (A) and (R) are true and (R) is the correct explanation of (A)',
          'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)',
          '(A) is true but (R) is false',
          '(A) is false but (R) is true'
        ],
        correctOptionIndex: 0,
        explanation: 'White silver chloride (AgCl) turns grey in sunlight because of photolytic decomposition: 2AgCl(s) ⎯[Sunlight]⎯→ 2Ag(s) + Cl₂(g). The grey substance formed is elemental silver (Ag). Reason correctly explains the Assertion.',
        marks: 1,
        askedInYear: 'CBSE 2023 Board Exam'
      },
      {
        id: 'c10-sci-mcq-03',
        chapterNumber: 1,
        chapterSlug: 'chemical-reactions-and-equations',
        type: 'case-based',
        question: 'Case Study Question: A student took 2 g of lead nitrate powder in a boiling tube and heated it over a burner.\nSub-Question: The brown fumes evolved during this thermal decomposition reaction belong to which gas?',
        options: [
          'Nitrogen monoxide (NO)',
          'Nitrogen dioxide (NO₂)',
          'Dinitrogen pentoxide (N₂O₅)',
          'Lead monoxide (PbO)'
        ],
        correctOptionIndex: 1,
        explanation: '2Pb(NO₃)₂(s) ⎯Δ⎯→ 2PbO(s) [Yellow] + 4NO₂(g) [Brown fumes] + O₂(g). The reddish-brown pungent gas evolved is nitrogen dioxide (NO₂).',
        marks: 1,
        askedInYear: 'CBSE 2024 Board Exam Set 1'
      }
    ],
    chapterSolvedQuestions: [
      {
        id: 'c10-sci-sq-01',
        chapterNumber: 1,
        chapterSlug: 'chemical-reactions-and-equations',
        questionType: 'SA-II',
        marks: 3,
        questionText: 'Translate the following statements into chemical equations and balance them:\n(a) Hydrogen gas combines with nitrogen to form ammonia.\n(b) Hydrogen sulphide gas burns in air to give water and sulphur dioxide.\n(c) Barium chloride reacts with aluminium sulphate to give aluminium chloride and a precipitate of barium sulphate.',
        questionTextHindi: 'निम्नलिखित कथनों को रासायनिक समीकरणों में रूपांतरित कर संतुलित कीजिए:\n(a) हाइड्रोजन गैस नाइट्रोजन से संयोग करके अमोनिया बनाती है।\n(b) हाइड्रोजन सल्फाइड गैस वायु में जलकर जल एवं सल्फर डाइऑक्साइड बनाती है।\n(c) बेरियम क्लोराइड ऐलुमिनियम सल्फेट से अभिक्रिया करके ऐलुमिनियम क्लोराइड एवं बेरियम सल्फेट का अवक्षेप बनाता है।',
        askedInYears: ['CBSE 2023', 'CBSE 2020', 'NCERT Exercise Q5'],
        stepWiseMarking: [
          '[1 Mark] (a) 3H₂(g) + N₂(g) → 2NH₃(g)',
          '[1 Mark] (b) 2H₂S(g) + 3O₂(g) → 2H₂O(l) + 2SO₂(g)',
          '[1 Mark] (c) 3BaCl₂(aq) + Al₂(SO₄)₃(aq) → 2AlCl₃(aq) + 3BaSO₄(s)↓'
        ],
        completeAnswer: '(a) 3H₂(g) + N₂(g) → 2NH₃(g)\n(b) 2H₂S(g) + 3O₂(g) → 2H₂O(l) + 2SO₂(g)\n(c) 3BaCl₂(aq) + Al₂(SO₄)₃(aq) → 2AlCl₃(aq) + 3BaSO₄(s)↓ (White precipitate of barium sulphate)',
        completeAnswerHindi: '(a) 3H₂(g) + N₂(g) → 2NH₃(g)\n(b) 2H₂S(g) + 3O₂(g) → 2H₂O(l) + 2SO₂(g)\n(c) 3BaCl₂(aq) + Al₂(SO₄)₃(aq) → 2AlCl₃(aq) + 3BaSO₄(s)↓ (बेरियम सल्फेट का श्वेत अवक्षेप)',
        examinerAlert: 'Students frequently forget to balance the oxygen in equation (b) and end up with fractional coefficients. Multiplying throughout by 2 gives whole numbers: 2H₂S + 3O₂ → 2H₂O + 2SO₂.'
      }
    ]
  },

  // ===========================================================================
  // CLASS 10 MATHEMATICS (CBSE CODE 041 / 241) - ULTRA IMPORTANT BOARD EXAM
  // ===========================================================================
  'grade-10:mathematics': {
    classNumber: 10,
    classSlug: 'grade-10',
    subjectSlug: 'mathematics',
    subjectName: 'Mathematics',
    boardCode: 'CBSE Code 041 (Standard) & 241 (Basic)',
    previous5YearsPapers: [
      {
        year: 2024,
        title: 'CBSE Class 10 Mathematics Standard Board Examination 2024 (Official Solved)',
        set: 'Series Q.P. Set 1 (Code 30/1/1)',
        maxMarks: 80,
        timeHours: 3,
        generalInstructions: [
          'This question paper contains 38 questions divided into 5 Sections A, B, C, D and E.',
          'Section A comprises 20 MCQs of 1 mark each (Questions 1 to 20).',
          'Section B comprises 5 Short Answer Type-I questions of 2 marks each (Questions 21 to 25).',
          'Section C comprises 6 Short Answer Type-II questions of 3 marks each (Questions 26 to 31).',
          'Section D comprises 4 Long Answer questions of 5 marks each (Questions 32 to 35).',
          'Section E comprises 3 Case-Based integrated units of assessment of 4 marks each (Questions 36 to 38).'
        ],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Multiple Choice Questions (1 Mark Each)',
            marks: 1,
            questionText: 'If two positive integers a and b are written as a = x³y² and b = xy³, where x, y are prime numbers, then HCF(a, b) is:',
            questionTextHindi: 'यदि दो धनात्मक पूर्णांक a और b को a = x³y² और b = xy³ के रूप में लिखा जाता है, जहाँ x, y अभाज्य संख्याएँ हैं, तो HCF(a, b) है:',
            options: ['xy', 'xy²', 'x³y³', 'x²y²'],
            correctOptionIndex: 1,
            markingScheme: ['[1 Mark] HCF is product of smallest powers of common prime factors: x¹ × y² = xy².'],
            detailedSolution: 'a = x³ × y²\nb = x¹ × y³\nHCF is the product of the smallest power of each common prime factor involved in the numbers.\nSmallest power of x = x¹\nSmallest power of y = y²\nTherefore, HCF(a, b) = x¹ × y² = xy².',
            detailedSolutionHindi: 'HCF उभयनिष्ठ अभाज्य गुणनखंडों की सबसे छोटी घात का गुणनफल होता है:\nx की न्यूनतम घात = x¹\ny की न्यूनतम घात = y²\nअतः HCF(a, b) = xy²।',
            examinerTip: 'HCF takes the MINIMUM exponent of common factors. LCM takes the MAXIMUM exponent (which would be x³y³).'
          },
          {
            questionNumber: 26,
            section: 'C',
            sectionTitle: 'Section C: Short Answer (3 Marks Each)',
            marks: 3,
            questionText: 'Prove that √5 is an irrational number.',
            questionTextHindi: 'सिद्ध कीजिए कि √5 एक अपरिमेय संख्या है।',
            markingScheme: [
              '[0.5 Mark] Assuming √5 is rational, √5 = a/b where a and b are co-prime integers (b ≠ 0).',
              '[1 Mark] Squaring both sides: 5 = a²/b² ⇒ 5b² = a². Hence 5 divides a², which implies 5 divides a.',
              '[1 Mark] Let a = 5c. Then 5b² = 25c² ⇒ b² = 5c². Hence 5 divides b², so 5 divides b.',
              '[0.5 Mark] Since 5 divides both a and b, they have a common factor 5, contradicting that a and b are co-prime. Hence √5 is irrational.'
            ],
            detailedSolution: 'Proof by contradiction:\n1. Assume to the contrary that √5 is a rational number.\n2. Therefore, √5 = a/b, where a and b are co-prime integers and b ≠ 0.\n3. Squaring both sides:\n5 = a² / b²  ⇒  a² = 5b² ... (Equation 1)\nThis means 5 divides a². By Fundamental Theorem of Arithmetic theorem, if a prime p divides a², then p divides a. Therefore, 5 divides a.\n\n4. Since 5 divides a, we can write a = 5c for some integer c.\nSubstituting a = 5c into Equation 1:\n(5c)² = 5b²\n25c² = 5b²  ⇒  b² = 5c²\nThis means 5 divides b², which implies 5 divides b.\n\n5. From steps 3 and 4, 5 is a common factor of both a and b.\n6. But this contradicts the fact that a and b are co-prime (having no common factor other than 1).\n7. This contradiction has arisen because of our incorrect assumption that √5 is rational.\nHence, √5 is an irrational number. (Hence Proved)',
            examinerTip: 'Do not skip stating that "if prime p divides a², then p divides a". CBSE examiners specifically award 0.5 mark for this rationale statement.'
          },
          {
            questionNumber: 32,
            section: 'D',
            sectionTitle: 'Section D: Long Answer (5 Marks Each)',
            marks: 5,
            questionText: 'A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.',
            questionTextHindi: 'एक मोटर बोट जिसकी स्थिर जल में चाल 18 km/h है, 24 km धारा के प्रतिकूल जाने में, धारा के अनुकूल जाने की अपेक्षा 1 घंटा अधिक समय लेती है। धारा की चाल ज्ञात कीजिए।',
            markingScheme: [
              '[1 Mark] Setting up variable and speeds: Let speed of stream = x km/h. Speed upstream = (18 - x), speed downstream = (18 + x).',
              '[1.5 Marks] Setting up equation: 24/(18 - x) - 24/(18 + x) = 1.',
              '[1.5 Marks] Simplifying to quadratic form: x² + 48x - 324 = 0.',
              '[1 Mark] Solving for x: (x + 54)(x - 6) = 0 ⇒ x = 6 km/h (rejecting x = -54 since speed cannot be negative).'
            ],
            detailedSolution: '1. Let the speed of the stream be x km/h.\nSpeed of boat in still water = 18 km/h.\nSpeed of boat upstream = (18 - x) km/h.\nSpeed of boat downstream = (18 + x) km/h.\nDistance = 24 km.\n\n2. Time taken upstream (t₁) = 24 / (18 - x) hours.\nTime taken downstream (t₂) = 24 / (18 + x) hours.\n\n3. According to the problem:\nt₁ - t₂ = 1 hour\n24 / (18 - x) - 24 / (18 + x) = 1\n24 [ (18 + x) - (18 - x) ] / [ (18 - x)(18 + x) ] = 1\n24 [ 2x ] / [ 324 - x² ] = 1\n48x = 324 - x²\nx² + 48x - 324 = 0\n\n4. Factorizing the quadratic equation:\nx² + 54x - 6x - 324 = 0\nx(x + 54) - 6(x + 54) = 0\n(x - 6)(x + 54) = 0\n⇒ x = 6 or x = -54.\n\n5. Since the speed of a stream cannot be negative, we reject x = -54.\nTherefore, the speed of the stream is 6 km/h.',
            examinerTip: 'Always write the concluding line explicitly stating why negative value was rejected ("Speed cannot be negative"). Failure to write this results in a deduction of 0.5 mark.'
          }
        ]
      },
      {
        year: 2023,
        title: 'CBSE Class 10 Mathematics Standard Board Examination 2023 (Official Solved)',
        set: 'Series Q.P. Set 2 (Code 30/2/2)',
        maxMarks: 80,
        timeHours: 3,
        generalInstructions: ['Official CBSE Board solutions with step-by-step marking.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Polynomials (1 Mark)',
            marks: 1,
            questionText: 'If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:',
            questionTextHindi: 'यदि द्विघात बहुपद x² + 3x + k का एक शून्यक 2 है, तो k का मान है:',
            options: ['10', '-10', '-7', '-2'],
            correctOptionIndex: 1,
            markingScheme: ['[1 Mark] Substituting x = 2: (2)² + 3(2) + k = 0 ⇒ 4 + 6 + k = 0 ⇒ k = -10.'],
            detailedSolution: 'If 2 is a zero of p(x) = x² + 3x + k, then p(2) = 0.\np(2) = (2)² + 3(2) + k = 0\n4 + 6 + k = 0\n10 + k = 0\nk = -10.',
            examinerTip: 'Remember that when x = zero of polynomial, p(x) = 0.'
          }
        ]
      },
      {
        year: 2022,
        title: 'CBSE Class 10 Mathematics Board Examination 2022 (Term 2 Solved)',
        set: 'Series Q.P. Set 1 (Code 30/1/1)',
        maxMarks: 40,
        timeHours: 2,
        generalInstructions: ['Official 2022 Term 2 Board Paper solutions.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Arithmetic Progressions (2 Marks)',
            marks: 2,
            questionText: 'Find the 20th term of the AP: 21, 18, 15, ...',
            questionTextHindi: 'समांतर श्रेढ़ी (AP): 21, 18, 15, ... का 20वाँ पद ज्ञात कीजिए।',
            markingScheme: [
              '[1 Mark] a = 21, d = 18 - 21 = -3.',
              '[1 Mark] a₂₀ = a + (20 - 1)d = 21 + 19(-3) = 21 - 57 = -36.'
            ],
            detailedSolution: 'First term, a = 21\nCommon difference, d = a₂ - a₁ = 18 - 21 = -3\nFormula for n-th term: a_n = a + (n - 1)d\na₂₀ = 21 + (20 - 1)(-3)\na₂₀ = 21 + 19(-3)\na₂₀ = 21 - 57 = -36.',
            examinerTip: 'Watch out for the sign of d! In a decreasing AP, d is negative.'
          }
        ]
      },
      {
        year: 2021,
        title: 'CBSE Class 10 Mathematics Model Evaluation Paper 2021',
        set: 'Official Board Standard Practice Paper',
        maxMarks: 80,
        timeHours: 3,
        generalInstructions: ['CBSE Official Model paper.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'C',
            sectionTitle: 'Section C: Trigonometry (3 Marks)',
            marks: 3,
            questionText: 'Prove that: (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ) = tan θ.',
            questionTextHindi: 'सिद्ध कीजिए: (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ) = tan θ।',
            markingScheme: [
              '[1 Mark] Factoring numerator and denominator: [sin θ (1 - 2 sin² θ)] / [cos θ (2 cos² θ - 1)].',
              '[1 Mark] Converting sin² θ to (1 - cos² θ) or cos² θ to (1 - sin² θ).',
              '[1 Mark] Cancelling equivalent terms to yield sin θ / cos θ = tan θ = RHS.'
            ],
            detailedSolution: 'LHS = (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ)\n= [ sin θ (1 - 2 sin² θ) ] / [ cos θ (2 cos² θ - 1) ]\nSince sin² θ + cos² θ = 1, substitute 1 = sin² θ + cos² θ in numerator:\n= [ sin θ (sin² θ + cos² θ - 2 sin² θ) ] / [ cos θ (2 cos² θ - (sin² θ + cos² θ)) ]\n= [ sin θ (cos² θ - sin² θ) ] / [ cos θ (cos² θ - sin² θ) ]\nCancelling (cos² θ - sin² θ):\n= sin θ / cos θ\n= tan θ = RHS. (Hence Proved)',
            examinerTip: 'Always write LHS at start and state "= RHS (Hence Proved)" at conclusion.'
          }
        ]
      },
      {
        year: 2020,
        title: 'CBSE Class 10 Mathematics Standard Board Examination 2020 (Official Pre-Pandemic)',
        set: 'Set 1 (Code 30/1/1)',
        maxMarks: 80,
        timeHours: 3,
        generalInstructions: ['Official CBSE pre-pandemic question paper.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'B',
            sectionTitle: 'Section B: Coordinate Geometry (2 Marks)',
            marks: 2,
            questionText: 'Find the coordinates of a point A, where AB is the diameter of a circle whose centre is (2, -3) and B is (1, 4).',
            questionTextHindi: 'बिंदु A के निर्देशांक ज्ञात कीजिए, जहाँ AB एक वृत्त का व्यास है जिसका केंद्र (2, -3) है तथा B (1, 4) है।',
            markingScheme: [
              '[1 Mark] Centre C(2, -3) is midpoint of diameter AB: ((x + 1)/2, (y + 4)/2) = (2, -3).',
              '[1 Mark] (x + 1)/2 = 2 ⇒ x = 3; (y + 4)/2 = -3 ⇒ y = -10. Coordinates of A are (3, -10).'
            ],
            detailedSolution: 'Let coordinates of point A be (x, y).\nSince AB is diameter, centre C(2, -3) is the midpoint of segment AB connecting A(x, y) and B(1, 4).\nBy Midpoint Formula:\nMidpoint x = (x₁ + x₂) / 2  ⇒  2 = (x + 1) / 2  ⇒  x + 1 = 4  ⇒  x = 3.\nMidpoint y = (y₁ + y₂) / 2  ⇒  -3 = (y + 4) / 2  ⇒  y + 4 = -6  ⇒  y = -10.\nHence, coordinates of point A are (3, -10).',
            examinerTip: 'Do not confuse distance formula with midpoint formula.'
          }
        ]
      }
    ],
    chapterNotes: [
      {
        chapterNumber: 1,
        chapterSlug: 'real-numbers',
        titleEnglish: 'Real Numbers',
        titleHindi: 'वास्तविक संख्याएँ',
        quickRevisionSummary: 'Covers the Fundamental Theorem of Arithmetic, prime factorisation method for HCF and LCM, and algebraic proofs of irrationality of √2, √3, √5.',
        quickRevisionSummaryHindi: 'अंकगणित की आधारभूत प्रमेय, HCF और LCM की अभाज्य गुणनखंडन विधि तथा √2, √3, √5 की अपरिमेयता के प्रमाण।',
        coreFormulasAndLaws: [
          {
            name: 'Fundamental Theorem of Arithmetic',
            formulaOrStatement: 'Every composite number can be expressed (factorised) as a product of primes uniquely, apart from the order in which prime factors occur.',
            explanation: 'Example: 120 = 2³ × 3 × 5.'
          },
          {
            name: 'Product of Two Numbers Formula',
            formulaOrStatement: 'HCF(a, b) × LCM(a, b) = a × b',
            explanation: 'Valid ONLY for two positive integers. For 3 integers a, b, c: HCF(a, b, c) × LCM(a, b, c) ≠ a × b × c!'
          }
        ],
        keyDefinitions: [
          { term: 'Prime Number', definition: 'A positive integer greater than 1 that has exactly two distinct positive divisors: 1 and itself.' },
          { term: 'Composite Number', definition: 'A positive integer greater than 1 that has more than two positive factors.' },
          { term: 'Co-prime Integers', definition: 'Two integers a and b whose highest common factor is 1, i.e., HCF(a, b) = 1.' }
        ],
        cbseExaminerTips: [
          'Remember: HCF(a, b) × LCM(a, b) = a × b holds only for TWO numbers. Never apply it to three numbers in section B or C.',
          'In irrationality proofs, always explicitly state that a and b are co-primes (HCF = 1).'
        ],
        mustRememberPoints: [
          'If p is a prime and p divides a², then p divides a, where a is a positive integer.',
          'The sum or difference of a rational and an irrational number is always irrational (e.g. 3 + √5 is irrational).',
          'The product and quotient of a non-zero rational and an irrational number is irrational (e.g. 2√3 is irrational).'
        ]
      }
    ],
    chapterMCQs: [
      {
        id: 'c10-math-mcq-01',
        chapterNumber: 1,
        chapterSlug: 'real-numbers',
        type: 'mcq',
        question: 'If HCF(306, 657) = 9, then LCM(306, 657) is equal to:',
        questionHindi: 'यदि HCF(306, 657) = 9 है, तो LCM(306, 657) बराबर है:',
        options: ['22338', '21184', '22348', '23328'],
        correctOptionIndex: 0,
        explanation: 'We know that HCF(a, b) × LCM(a, b) = a × b.\nLCM(306, 657) = (306 × 657) / HCF(306, 657) = (306 × 657) / 9 = 34 × 657 = 22,338.',
        marks: 1,
        askedInYear: 'CBSE 2024 / NCERT Exercise'
      }
    ],
    chapterSolvedQuestions: [
      {
        id: 'c10-math-sq-01',
        chapterNumber: 1,
        chapterSlug: 'real-numbers',
        questionType: 'SA-I',
        marks: 2,
        questionText: 'Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.',
        questionTextHindi: 'व्याख्या कीजिए कि 7 × 11 × 13 + 13 और 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 भाज्य संख्याएँ क्यों हैं।',
        askedInYears: ['CBSE 2023', 'CBSE 2020'],
        stepWiseMarking: [
          '[1 Mark] Factoring first expression: 13(7 × 11 + 1) = 13(77 + 1) = 13 × 78. Since it has factors other than 1 and itself, it is composite.',
          '[1 Mark] Factoring second expression: 5(7 × 6 × 4 × 3 × 2 × 1 + 1) = 5(1008 + 1) = 5 × 1009. Having factors 5 and 1009 makes it composite.'
        ],
        completeAnswer: '1. First expression:\n7 × 11 × 13 + 13 = 13 × (7 × 11 + 1) = 13 × (77 + 1) = 13 × 78 = 13 × 13 × 6 = 13² × 2 × 3.\nSince this number has prime factors 2, 3, and 13, it has factors other than 1 and itself. By the Fundamental Theorem of Arithmetic, it is a composite number.\n\n2. Second expression:\n7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 = 5 × (7 × 6 × 4 × 3 × 2 × 1 + 1) = 5 × (1008 + 1) = 5 × 1009.\nSince 1009 is a prime number, the expression is a product of two prime factors 5 and 1009. Hence it is a composite number.',
        completeAnswerHindi: '1. प्रथम व्यंजक: 13 × (7 × 11 + 1) = 13 × 78। 1 और स्वयं के अतिरिक्त अन्य गुणनखंड होने के कारण यह भाज्य संख्या है।\n2. द्वितीय व्यंजक: 5 × (1008 + 1) = 5 × 1009। इसके गुणनखंड 5 और 1009 हैं, अतः यह भी भाज्य संख्या है।',
        examinerAlert: 'Do not multiply out to get the giant numbers (e.g. 1014 and 5045) and then test for primes. Factor out the common factor directly for full marks.'
      }
    ]
  },

  // ===========================================================================
  // CLASS 12 PHYSICS (CBSE CODE 042) - ULTRA IMPORTANT SENIOR BOARD EXAM
  // ===========================================================================
  'grade-12:science': {
    classNumber: 12,
    classSlug: 'grade-12',
    subjectSlug: 'science',
    subjectName: 'Physics (Senior Secondary)',
    boardCode: 'CBSE Code 042 / AISSCE Class 12 / JEE-NEET Foundation',
    previous5YearsPapers: [
      {
        year: 2024,
        title: 'CBSE Class 12 Physics Board Examination 2024 (Official Solved)',
        set: 'Series Q.P. Set 1 (Code 55/1/1)',
        maxMarks: 70,
        timeHours: 3,
        generalInstructions: [
          'There are 33 questions in all. All questions are compulsory.',
          'Section A: 16 questions (12 MCQs and 4 Assertion Reasoning of 1 mark each).',
          'Section B: 5 questions of 2 marks each.',
          'Section C: 7 questions of 3 marks each.',
          'Section D: 2 case-based questions of 4 marks each.',
          'Section E: 3 long answer questions of 5 marks each.'
        ],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Electrostatics & Currents (1 Mark)',
            marks: 1,
            questionText: 'An electric dipole of dipole moment p is placed in a uniform electric field E. The torque acting on the dipole is given by:',
            options: ['p · E', 'p × E', 'p / E', 'Zero'],
            correctOptionIndex: 1,
            markingScheme: ['[1 Mark] Correct formula: τ = p × E.'],
            detailedSolution: 'When an electric dipole is placed in a uniform electric field E at an angle θ, the two equal and opposite forces (qE and -qE) constitute a couple. Torque τ = force × perpendicular distance = qE × 2a sin θ = (q × 2a)E sin θ = pE sin θ = p × E.',
            examinerTip: 'Torque is a VECTOR product (cross product) p × E. Potential energy is a SCALAR product U = -p · E.'
          },
          {
            questionNumber: 22,
            section: 'B',
            sectionTitle: 'Section B: Wave Optics (2 Marks)',
            marks: 2,
            questionText: 'State Huygens\' principle of secondary wavelets.',
            markingScheme: [
              '[1 Mark] Every point on a given wavefront acts as a fresh source of secondary spherical disturbance called wavelets.',
              '[1 Mark] The forward envelope (tangential surface) enclosing these secondary wavelets at any later instant gives the new position of the wavefront.'
            ],
            detailedSolution: 'Huygens\' Principle states that:\n1. Each point of the wavefront is the source of a secondary disturbance, and the wavelets emanating from these points spread out in all directions with the speed of the wave.\n2. These wavelets emanating from the wavefront are usually referred to as secondary wavelets and if we draw a common tangent to all these spheres, we obtain the new position of the wavefront at a later time.',
            examinerTip: 'Always mention that the backward wave does not exist because amplitude of secondary wavelets in the backward direction is zero.'
          },
          {
            questionNumber: 31,
            section: 'E',
            sectionTitle: 'Section E: Electromagnetic Induction & AC (5 Marks)',
            marks: 5,
            questionText: 'Explain with the help of a labeled diagram the working principle of an AC generator. Derive the expression for the alternating emf induced in the coil.',
            markingScheme: [
              '[1 Mark] Labeled schematic diagram (Armature coil, Slip rings, Carbon brushes, Magnetic poles).',
              '[1 Mark] Principle: Electromagnetic induction (Faraday\'s law).',
              '[1.5 Marks] Derivation: Magnetic flux Φ_B = B · A = BA cos(ωt).',
              '[1.5 Marks] Induced emf e = -N (dΦ/dt) = -N d/dt [BA cos(ωt)] = NBAω sin(ωt) = e₀ sin(ωt).'
            ],
            detailedSolution: '1. Principle: An AC generator works on the principle of Faraday\'s Law of Electromagnetic Induction. When a closed coil is rotated in a uniform magnetic field with constant angular velocity, the magnetic flux linked with the coil changes continuously, inducing an alternating electromotive force (emf).\n\n2. Derivation:\nLet:\nN = Number of turns in the coil\nA = Area of the coil\nB = Uniform magnetic field\nω = Constant angular velocity of rotation\nAt time t, angle θ between field B and area vector A is θ = ωt.\n\nMagnetic flux linked with each turn of the coil at time t:\nΦ = B · A = BA cos(ωt)\n\nAccording to Faraday\'s law of induction:\ne = -N (dΦ / dt)\ne = -N (d / dt) [BA cos(ωt)]\ne = -NBA [ -ω sin(ωt) ]\ne = NBAω sin(ωt)\n\nLet peak emf e₀ = NBAω:\ne = e₀ sin(ωt)\nThis shows that the induced emf varies sinusoidally with time.',
            examinerTip: 'Do not forget the negative sign in Faraday\'s law (Lenz\'s law) e = -N (dΦ/dt). Differentiating cos(ωt) gives -ω sin(ωt), which cancels the negative sign.'
          }
        ]
      },
      {
        year: 2023,
        title: 'CBSE Class 12 Physics Board Examination 2023 (Official Solved)',
        set: 'Series Q.P. Set 2 (Code 55/2/2)',
        maxMarks: 70,
        timeHours: 3,
        generalInstructions: ['Official CBSE Class 12 Physics solutions.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Current Electricity (1 Mark)',
            marks: 1,
            questionText: 'The temperature dependence of resistance of a semiconductor is characterized by:',
            options: [
              'Positive temperature coefficient of resistance',
              'Negative temperature coefficient of resistance',
              'Zero temperature coefficient',
              'Independent of temperature'
            ],
            correctOptionIndex: 1,
            markingScheme: ['[1 Mark] Negative temperature coefficient of resistance.'],
            detailedSolution: 'In semiconductors, as temperature increases, more covalent bonds break, generating a much larger number of free electrons and holes (charge carrier concentration increases exponentially). This drastically reduces resistivity. Hence, semiconductors have a negative temperature coefficient of resistance.',
            examinerTip: 'Metals have a POSITIVE temperature coefficient (resistance increases with T). Semiconductors and electrolytes have NEGATIVE.'
          }
        ]
      },
      {
        year: 2022,
        title: 'CBSE Class 12 Physics Board Examination 2022 (Term 2 Solved)',
        set: 'Code 55/1/2',
        maxMarks: 35,
        timeHours: 2,
        generalInstructions: ['CBSE Term 2 Board Paper solutions.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'A',
            sectionTitle: 'Section A: Optics (2 Marks)',
            marks: 2,
            questionText: 'Write two conditions required to observe total internal reflection (TIR).',
            markingScheme: [
              '[1 Mark] Light must travel from an optically denser medium to an optically rarer medium.',
              '[1 Mark] Angle of incidence in the denser medium must be greater than the critical angle (i > i_c).'
            ],
            detailedSolution: 'The two necessary conditions for Total Internal Reflection (TIR) are:\n1. The light ray must travel from an optically denser medium into an optically rarer medium (e.g., from glass/water to air).\n2. The angle of incidence in the denser medium must be strictly greater than the critical angle for the given pair of media (i > C).',
            examinerTip: 'Both conditions must be stated concisely for full 2 marks.'
          }
        ]
      },
      {
        year: 2021,
        title: 'CBSE Class 12 Physics Comprehensive Evaluation Paper 2021',
        set: 'CBSE Official Standard Set',
        maxMarks: 70,
        timeHours: 3,
        generalInstructions: ['CBSE Official model paper.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'C',
            sectionTitle: 'Section C: Modern Physics (3 Marks)',
            marks: 3,
            questionText: 'State three salient features of the photoelectric effect that could not be explained by classical wave theory of light.',
            markingScheme: [
              '[1 Mark] Existence of threshold frequency (ν₀) below which no emission occurs regardless of intensity.',
              '[1 Mark] Kinetic energy of emitted photoelectrons depends linearly on frequency of incident light, not intensity.',
              '[1 Mark] Instantaneous emission of photoelectrons (time lag < 10⁻⁹ s) without delay.'
            ],
            detailedSolution: 'Classical wave theory failed because:\n1. Wave theory predicted emission at any frequency if intensity is sufficient; experimentally, there exists a threshold frequency ν₀ below which no emission occurs.\n2. Wave theory predicted KE depends on intensity; experimentally, maximum KE depends solely on frequency (K_max = hν - Φ₀) and is independent of intensity.\n3. Wave theory predicted continuous energy accumulation causing a time lag; experimentally, emission is virtually instantaneous (~10⁻⁹ s).',
            examinerTip: 'Cite Einstein\'s photoelectric equation K_max = hν - W₀ to support your answer.'
          }
        ]
      },
      {
        year: 2020,
        title: 'CBSE Class 12 Physics Board Examination 2020 (Official Pre-Pandemic)',
        set: 'Set 1 (Code 55/1/1)',
        maxMarks: 70,
        timeHours: 3,
        generalInstructions: ['Official CBSE pre-pandemic board paper.'],
        solvedQuestions: [
          {
            questionNumber: 1,
            section: 'D',
            sectionTitle: 'Section D: Magnetism (3 Marks)',
            marks: 3,
            questionText: 'State Biot-Savart law in vector form. Use it to find the magnetic field at the centre of a circular current loop of radius R carrying current I.',
            markingScheme: [
              '[1 Mark] Biot-Savart vector form: dB = (μ₀ / 4π) · [ I (dl × r̂) / r² ].',
              '[1 Mark] Setting up circular loop integration: angle between dl and r is 90°, so dl × r̂ = dl.',
              '[1 Mark] B = (μ₀ I / 4π R²) ∫ dl = (μ₀ I / 4π R²) × (2πR) = μ₀ I / (2R).'
            ],
            detailedSolution: '1. Biot-Savart Law in vector form:\ndB = (μ₀ / 4π) · [ I (dl × r̂) / r² ] = (μ₀ / 4π) · [ I (dl × r) / r³ ].\n\n2. Magnetic field at centre of circular loop:\nAt the centre, distance of every current element dl from centre is R.\nThe angle between dl and r̂ is 90° everywhere on the circumference.\n|dl × r̂| = dl sin 90° = dl.\n\nMagnitude of field due to element dl:\ndB = (μ₀ / 4π) · (I dl / R²)\n\nIntegrating around the entire circular loop:\nB = ∫ dB = (μ₀ I / 4π R²) ∫ dl\nSince ∫ dl = Circumference = 2πR:\nB = (μ₀ I / 4π R²) × (2πR) = μ₀ I / (2R).\nFor a coil of N turns: B = μ₀ N I / (2R).',
            examinerTip: 'Always write the vector form with r̂ (unit vector) or r with r³ in denominator.'
          }
        ]
      }
    ],
    chapterNotes: [
      {
        chapterNumber: 1,
        chapterSlug: 'electric-charges-and-fields',
        titleEnglish: 'Electric Charges and Fields',
        titleHindi: 'विद्युत आवेश तथा क्षेत्र',
        quickRevisionSummary: 'Coulomb\'s law, electric field, electric field lines, electric dipole, torque in uniform field, Gauss\'s theorem and its derivations (infinite wire, infinite plane sheet, spherical shell).',
        quickRevisionSummaryHindi: 'कूलॉम का नियम, विद्युत क्षेत्र, विद्युत क्षेत्र रेखाएं, विद्युत द्विध्रुव, समरूप क्षेत्र में बल आघूर्ण तथा गाउस का नियम एवं इसके अनुप्रयोग।',
        coreFormulasAndLaws: [
          {
            name: 'Coulomb\'s Law in Vacuum',
            formulaOrStatement: 'F = (1 / 4πε₀) · (|q₁q₂| / r²), where 1/4πε₀ = 8.99 × 10⁹ N m² C⁻²',
            explanation: 'Force is directly proportional to product of magnitudes of charges and inversely proportional to square of distance between them.'
          },
          {
            name: 'Gauss\'s Law',
            formulaOrStatement: 'Φ_E = ∮ E · dA = q_enclosed / ε₀',
            explanation: 'The total electric flux through any closed surface is equal to 1/ε₀ times the total electric charge enclosed by that surface.'
          },
          {
            name: 'Electric Field of Infinite Straight Wire',
            formulaOrStatement: 'E = λ / (2πε₀ r)',
            explanation: 'λ is linear charge density. Field decreases inversely with distance r (E ∝ 1/r).'
          },
          {
            name: 'Electric Field of Infinite Sheet of Charge',
            formulaOrStatement: 'E = σ / (2ε₀)',
            explanation: 'σ is surface charge density. Remarkably, field is independent of distance r from the sheet!'
          }
        ],
        keyDefinitions: [
          { term: 'Quantization of Charge', definition: 'Electric charge always exists in integral multiples of elementary charge e (q = ±ne, where e = 1.6 × 10⁻¹⁹ C).' },
          { term: 'Electric Dipole Moment', definition: 'Vector quantity directed from negative to positive charge, defined as p = q × 2a (SI unit: Coulomb-meter, C m).' }
        ],
        cbseExaminerTips: [
          'Gauss\'s law derivation is a 3 or 5-mark guarantee in CBSE. Practice the infinite straight wire and infinite sheet derivations thoroughly.',
          'Electric field inside a uniformly charged conducting spherical shell is identically ZERO everywhere.'
        ],
        mustRememberPoints: [
          'Electrostatic field lines never form closed loops (unlike magnetic field lines) because electric fields are conservative.',
          'Two electric field lines can never cross each other, because at point of intersection there would be two tangents, meaning two directions of electric field, which is impossible.'
        ]
      }
    ],
    chapterMCQs: [
      {
        id: 'c12-phy-mcq-01',
        chapterNumber: 1,
        chapterSlug: 'electric-charges-and-fields',
        type: 'mcq',
        question: 'A point charge q is placed at the centre of a cube of side a. The electric flux emerging from each face of the cube is:',
        options: ['q / ε₀', 'q / (6ε₀)', 'q / (8ε₀)', '6qa² / ε₀'],
        correctOptionIndex: 1,
        explanation: 'By Gauss\'s law, total flux through the entire closed cube is Φ_total = q / ε₀. Since a cube has 6 identical symmetrical faces, the flux through each individual face is Φ_face = (1/6) Φ_total = q / (6ε₀).',
        marks: 1,
        askedInYear: 'CBSE 2024 / NCERT Exemplar'
      }
    ],
    chapterSolvedQuestions: [
      {
        id: 'c12-phy-sq-01',
        chapterNumber: 1,
        chapterSlug: 'electric-charges-and-fields',
        questionType: 'SA-II',
        marks: 3,
        questionText: 'Using Gauss\'s law, derive an expression for the electric field due to an infinitely long straight uniformly charged wire of linear charge density λ C/m.',
        askedInYears: ['CBSE 2024', 'CBSE 2023', 'CBSE 2020'],
        stepWiseMarking: [
          '[1 Mark] Drawing cylindrical Gaussian surface of radius r and length l coaxial with wire.',
          '[1 Mark] Calculating flux: Flat circular ends have E ⊥ dA, so flux = 0. Curved surface has E || dA, so Φ = E × (2πrl).',
          '[1 Mark] Equating to Gauss\'s Law: E (2πrl) = q_enclosed / ε₀ = (λl) / ε₀ ⇒ E = λ / (2πε₀r).'
        ],
        completeAnswer: '1. Consider an infinitely long thin wire with uniform linear charge density λ.\n2. To calculate electric field at distance r from wire, construct a cylindrical Gaussian surface of radius r and length l coaxial with the wire.\n3. Flux through the two circular end faces:\nOn the end faces, the area vector dA is perpendicular to electric field E (E · dA = E dA cos 90° = 0).\nTherefore, flux through flat circular ends is zero.\n\n4. Flux through curved surface:\nAt every point on curved cylindrical surface, electric field E is directed radially outwards, parallel to area vector dA (θ = 0°).\nTotal flux Φ = ∮ E · dA = E ∮ dA = E × (2πrl).\n\n5. Applying Gauss\'s Law:\nΦ = q_enclosed / ε₀\nq_enclosed in length l = λ × l\nE × (2πrl) = (λl) / ε₀\nE = λ / (2πε₀ r).\nIn vector form: E = [ λ / (2πε₀ r) ] r̂ (radially outward if λ > 0, inward if λ < 0).',
        examinerAlert: 'Clearly show why flux through circular caps is zero (E ⊥ dA). Omitting this explanation costs 1 mark in board evaluations.'
      }
    ]
  }
};

// Helper accessors
export function getIndianBoardStudySuite(gradeOrClassSlug: string, subjectSlug: string): SubjectBoardSuite | undefined {
  const normGrade = gradeOrClassSlug.toLowerCase();
  const normSubject = subjectSlug.toLowerCase();

  const key = `${normGrade}:${normSubject}`;
  if (INDIAN_BOARD_MATERIALS_DATABASE[key]) {
    return INDIAN_BOARD_MATERIALS_DATABASE[key];
  }

  // Aliases (e.g. math -> mathematics, sst -> history)
  if (normSubject === 'math') {
    return INDIAN_BOARD_MATERIALS_DATABASE[`${normGrade}:mathematics`];
  }
  if (normSubject === 'physics' || normSubject === 'chemistry' || normSubject === 'biology') {
    return INDIAN_BOARD_MATERIALS_DATABASE[`${normGrade}:science`];
  }

  return undefined;
}

export function isIndianUltraImportantClass(classSlugOrNumber: string | number): boolean {
  if (typeof classSlugOrNumber === 'number') {
    return classSlugOrNumber === 10 || classSlugOrNumber === 12;
  }
  const str = classSlugOrNumber.toLowerCase();
  return str === 'grade-10' || str === 'grade-12' || str === 'class-10' || str === 'class-12' || str === '10' || str === '12';
}

// =============================================================================
// OFFICIAL BOARD & INSTITUTIONAL REPOSITORIES (CBSE, NCERT, ICSE, NIOS, KVS, ETC.)
// =============================================================================

export interface OfficialResourceLink {
  title: string;
  category: 'Sample Papers & Marking Scheme' | 'Question Banks' | 'Textbooks & Exemplars' | 'Previous Year Papers' | 'Open Courseware';
  classesCovered: string; // e.g. "Class 10 & 12", "Classes 1 to 12"
  directDownloadUrl: string;
  format: 'PDF' | 'Official Archive' | 'Portal';
  isFree: boolean;
  description: string;
}

export interface OfficialBoardRepository {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  logoIcon: string;
  officialWebsite: string;
  description: string;
  freeResources: OfficialResourceLink[];
}

export const OFFICIAL_INDIAN_BOARD_REPOSITORIES: OfficialBoardRepository[] = [
  {
    id: 'cbse',
    name: 'CBSE Academic (Central Board of Secondary Education)',
    shortName: 'CBSE',
    badge: 'Government of India Apex Board',
    logoIcon: '🏛️',
    officialWebsite: 'https://cbseacademic.nic.in',
    description: 'Official academic portal of the Central Board of Secondary Education providing free question papers, sample question papers (SQP) with marking schemes (MS), and question banks for Classes 10 and 12.',
    freeResources: [
      {
        title: 'CBSE Class 10 & 12 Sample Question Papers & Marking Scheme (SQP/MS)',
        category: 'Sample Papers & Marking Scheme',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://cbseacademic.nic.in/SQP_CLASSX_2023-24.html',
        format: 'PDF',
        isFree: true,
        description: 'Official blueprints, step-by-step marking rubrics, and model solutions released by CBSE examiners.'
      },
      {
        title: 'CBSE Competency-Based Question Bank (Science, Math, SST, English)',
        category: 'Question Banks',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://cbseacademic.nic.in/question_bank.html',
        format: 'PDF',
        isFree: true,
        description: 'Official competency questions, case study problems, and assertion-reasoning questions with answers.'
      },
      {
        title: 'CBSE Previous Years Board Examination Question Papers Archive',
        category: 'Previous Year Papers',
        classesCovered: 'Class 10 & 12 (All Streams)',
        directDownloadUrl: 'https://www.cbse.gov.in/cbsenew/question-paper.html',
        format: 'Official Archive',
        isFree: true,
        description: 'Past 10 years official question papers for All India, Delhi, and Foreign exam sets.'
      },
      {
        title: 'CBSE Model Answers by Top Scorers (Examiner Evaluated)',
        category: 'Previous Year Papers',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://www.cbse.gov.in/cbsenew/model-answer.html',
        format: 'PDF',
        isFree: true,
        description: 'Original handwritten answer scripts of high scorers showing ideal presentation and step-marking.'
      }
    ]
  },
  {
    id: 'ncert',
    name: 'NCERT Official (National Council of Educational Research and Training)',
    shortName: 'NCERT',
    badge: 'National Curriculum Apex Body',
    logoIcon: '📚',
    officialWebsite: 'https://ncert.nic.in',
    description: 'Autonomous apex body under the Ministry of Education, Government of India, publishing national textbooks, exemplar problems, and model curriculum papers.',
    freeResources: [
      {
        title: 'NCERT Rationalised Textbooks Complete PDF Download (Classes 1 to 12)',
        category: 'Textbooks & Exemplars',
        classesCovered: 'Classes 1 to 12 (English & Hindi)',
        directDownloadUrl: 'https://ncert.nic.in/textbook.php',
        format: 'PDF',
        isFree: true,
        description: '100% free official textbook PDFs for all subjects in both English Medium and Hindi Medium.'
      },
      {
        title: 'NCERT Exemplar Problems & Complete Model Solutions',
        category: 'Textbooks & Exemplars',
        classesCovered: 'Classes 6 to 12 (Science & Mathematics)',
        directDownloadUrl: 'https://ncert.nic.in/exemplar-problems.php',
        format: 'PDF',
        isFree: true,
        description: 'High-yield conceptual and multi-step problems that frequently appear verbatim in CBSE board exams.'
      },
      {
        title: 'NCERT Model Question Papers for Secondary & Higher Secondary',
        category: 'Sample Papers & Marking Scheme',
        classesCovered: 'Classes 9, 10, 11 & 12',
        directDownloadUrl: 'https://ncert.nic.in/model-question-papers.php',
        format: 'PDF',
        isFree: true,
        description: 'National model question papers aligned with the National Education Policy (NEP 2020) framework.'
      },
      {
        title: 'ePathshala National Open Learning Repository (MoE & NCERT)',
        category: 'Open Courseware',
        classesCovered: 'Classes 1 to 12',
        directDownloadUrl: 'https://epathshala.nic.in/',
        format: 'Portal',
        isFree: true,
        description: 'Interactive educational e-books, audio, videos, and periodicals for students and teachers.'
      }
    ]
  },
  {
    id: 'cisce',
    name: 'CISCE (Council for the Indian School Certificate Examinations - ICSE & ISC)',
    shortName: 'ICSE / ISC',
    badge: 'National School Certificate Council',
    logoIcon: '🎯',
    officialWebsite: 'https://cisce.org',
    description: 'National-level school examination board conducting the ICSE (Class 10) and ISC (Class 12) examinations across India and overseas.',
    freeResources: [
      {
        title: 'ICSE Class 10 Specimen Question Papers (All Subjects)',
        category: 'Sample Papers & Marking Scheme',
        classesCovered: 'Class 10 (ICSE)',
        directDownloadUrl: 'https://cisce.org/specimen-question-papers-icse-class-x/',
        format: 'PDF',
        isFree: true,
        description: 'Official specimen papers showing latest question pattern, internal choice, and mark distributions.'
      },
      {
        title: 'ISC Class 12 Specimen Question Papers (Science, Commerce, Arts)',
        category: 'Sample Papers & Marking Scheme',
        classesCovered: 'Class 12 (ISC)',
        directDownloadUrl: 'https://cisce.org/specimen-question-papers-isc-class-xii/',
        format: 'PDF',
        isFree: true,
        description: 'Specimen papers for Class 12 board preparation across Science, Commerce, and Humanities streams.'
      },
      {
        title: 'CISCE Analysis of Pupil Performance (Examiner Comments & Solved Analysis)',
        category: 'Previous Year Papers',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://cisce.org/analysis-of-pupil-performance/',
        format: 'PDF',
        isFree: true,
        description: 'Detailed examiner analysis reports detailing common student errors, expected answers, and marks.'
      },
      {
        title: 'ICSE & ISC Previous Years Examination Papers Archive',
        category: 'Previous Year Papers',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://cisce.org/previous-years-question-papers/',
        format: 'Official Archive',
        isFree: true,
        description: 'Official past question papers archive for all major subjects.'
      }
    ]
  },
  {
    id: 'nios',
    name: 'NIOS (National Institute of Open Schooling)',
    shortName: 'NIOS',
    badge: 'Ministry of Education Open Board',
    logoIcon: '🎓',
    officialWebsite: 'https://www.nios.ac.in',
    description: 'World\'s largest open schooling organization under the Ministry of Education, providing secondary (Class 10) and senior secondary (Class 12) certifications.',
    freeResources: [
      {
        title: 'NIOS Secondary (Class 10) Previous Years Question Papers',
        category: 'Previous Year Papers',
        classesCovered: 'Class 10 (Secondary)',
        directDownloadUrl: 'https://www.nios.ac.in/student-information-section/question-paper-of-previous-year-examination-secondary.aspx',
        format: 'PDF',
        isFree: true,
        description: 'Official board question papers from both April-May and October-November exam blocks.'
      },
      {
        title: 'NIOS Senior Secondary (Class 12) Previous Years Question Papers',
        category: 'Previous Year Papers',
        classesCovered: 'Class 12 (Senior Secondary)',
        directDownloadUrl: 'https://www.nios.ac.in/student-information-section/question-paper-of-previous-year-examination-sr-secondary.aspx',
        format: 'PDF',
        isFree: true,
        description: 'Official past papers for Physics, Chemistry, Math, Biology, Commerce, and Arts subjects.'
      },
      {
        title: 'NIOS Sample Question Papers & Marking Blueprint',
        category: 'Sample Papers & Marking Scheme',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://www.nios.ac.in/student-information-section/sample-question-papers.aspx',
        format: 'PDF',
        isFree: true,
        description: 'Model question papers with section blueprints and marking distribution.'
      },
      {
        title: 'NIOS Tutor Marked Assignments (TMA) & Free Self-Learning Material',
        category: 'Open Courseware',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://www.nios.ac.in/student-information-section/tutor-marked-assignment.aspx',
        format: 'PDF',
        isFree: true,
        description: 'Compulsory assignments carrying 20% weightage, plus free self-instructional study guides.'
      }
    ]
  },
  {
    id: 'institutional',
    name: 'Premier Free Institutional Repositories (KVS, NVS, DIKSHA, NDLI)',
    shortName: 'KVS, NVS & DIKSHA',
    badge: 'National Public & Govt Platforms',
    logoIcon: '🏫',
    officialWebsite: 'https://kvsangathan.nic.in',
    description: 'Premier national organizations and Ministry of Education repositories offering free pre-board papers, question banks, and learning items.',
    freeResources: [
      {
        title: 'Kendriya Vidyalaya Sangathan (KVS) Pre-Board Solved Papers & Question Banks',
        category: 'Sample Papers & Marking Scheme',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://kvsangathan.nic.in/',
        format: 'PDF',
        isFree: true,
        description: 'Standardized national pre-board mock examinations authored by KVS subject specialists.'
      },
      {
        title: 'DIKSHA National Teacher & Student Digital Infrastructure (Ministry of Education)',
        category: 'Open Courseware',
        classesCovered: 'Classes 1 to 12 (All Indian Languages)',
        directDownloadUrl: 'https://diksha.gov.in/explore',
        format: 'Portal',
        isFree: true,
        description: 'Over 1 million curriculum-aligned practice questions, worksheets, and interactive items.'
      },
      {
        title: 'National Digital Library of India (NDLI - Sponsored by MoE & IIT Kharagpur)',
        category: 'Previous Year Papers',
        classesCovered: 'School & Competitive Exam Level',
        directDownloadUrl: 'https://ndl.iitkgp.ac.in/',
        format: 'Portal',
        isFree: true,
        description: 'Single-window free access to past question papers, academic journals, and reference textbooks.'
      },
      {
        title: 'Navodaya Vidyalaya Samiti (NVS) Board Prep Question Banks',
        category: 'Question Banks',
        classesCovered: 'Class 10 & 12',
        directDownloadUrl: 'https://navodaya.gov.in/',
        format: 'PDF',
        isFree: true,
        description: 'Curated practice questions developed across Jawahar Navodaya Vidyalayas.'
      }
    ]
  }
];

export function getOfficialBoardRepositories(): OfficialBoardRepository[] {
  return OFFICIAL_INDIAN_BOARD_REPOSITORIES;
}

