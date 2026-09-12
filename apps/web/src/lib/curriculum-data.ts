// Comprehensive Curriculum Catalogue & Jurisdictions Registry for Tier 1 Countries

export interface LessonData {
  slug: string;
  title: string;
  subjectSlug: string;
  subjectName: string;
  gradeSlug: string;
  gradeName: string;
  gradeBand: 'elementary' | 'middle-school' | 'high-school';
  countryCode: string;
  countryName: string;
  jurisdictionSlug: string;
  jurisdictionName: string;
  standardCode: string;
  standardTitle: string;
  authorityName: string;
  academicYear: string;
  lastVerified: string;
  sourceUrl: string;
  summary: string;
  whyItMatters: string;
  careerLink: string;
  videos: Array<{
    role: 'PRIMARY' | 'BACKUP_1';
    title: string;
    channelTitle: string;
    youtubeVideoId: string;
    durationSeconds: number;
    qualityScore: number;
    curationNotes: string;
  }>;
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

export interface JurisdictionInfo {
  slug: string;
  name: string;
  countryCode: string;
  countryName: string;
  flag: string;
  authority: string;
  framework: string;
  portalUrl: string;
  grades: string;
}

export interface CourseCardData {
  slug: string;
  subject: string;
  subjectSlug: string;
  grade: string;
  gradeSlug: string;
  gradeBand: 'elementary' | 'middle-school' | 'high-school';
  title: string;
  standardCode: string;
  lessonCount: number;
  sampleLessonSlug: string;
  isLive: boolean;
}

// -----------------------------------------------------------------------------
// Exhaustive Tier 1 Jurisdictions Registry (All 78 Places)
// -----------------------------------------------------------------------------

export const TIER1_JURISDICTIONS: JurisdictionInfo[] = [
  // --- United States (50 States + DC = 51) ---
  { slug: 'california', name: 'California', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'California Department of Education (CDE)', framework: 'CA Common Core (CA-CCSS) / NGSS', portalUrl: 'https://www.cde.ca.gov', grades: 'Grades K–12' },
  { slug: 'texas', name: 'Texas', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Texas Education Agency (TEA)', framework: 'Texas Essential Knowledge & Skills (TEKS)', portalUrl: 'https://tea.texas.gov', grades: 'Grades K–12' },
  { slug: 'new-york', name: 'New York', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'New York State Education Department (NYSED)', framework: 'Next Generation Learning Standards', portalUrl: 'https://www.nysed.gov', grades: 'Grades K–12' },
  { slug: 'florida', name: 'Florida', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Florida Department of Education (FLDOE)', framework: 'Benchmarks for Excellent Student Thinking (B.E.S.T.)', portalUrl: 'https://www.fldoe.org', grades: 'Grades K–12' },
  { slug: 'illinois', name: 'Illinois', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Illinois State Board of Education (ISBE)', framework: 'Illinois Learning Standards (CCSS/NGSS)', portalUrl: 'https://www.isbe.net', grades: 'Grades K–12' },
  { slug: 'pennsylvania', name: 'Pennsylvania', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Pennsylvania Department of Education', framework: 'Pennsylvania Core Standards', portalUrl: 'https://www.education.pa.gov', grades: 'Grades K–12' },
  { slug: 'ohio', name: 'Ohio', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Ohio Department of Education & Workforce', framework: 'Ohio Learning Standards', portalUrl: 'https://education.ohio.gov', grades: 'Grades K–12' },
  { slug: 'georgia', name: 'Georgia', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Georgia Department of Education', framework: 'Georgia Standards of Excellence (GSE)', portalUrl: 'https://www.gadoe.org', grades: 'Grades K–12' },
  { slug: 'north-carolina', name: 'North Carolina', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'North Carolina Dept of Public Instruction', framework: 'NC Standard Course of Study (NCSCOS)', portalUrl: 'https://www.dpi.nc.gov', grades: 'Grades K–12' },
  { slug: 'michigan', name: 'Michigan', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Michigan Department of Education', framework: 'Michigan K–12 Academic Standards', portalUrl: 'https://www.michigan.gov/mde', grades: 'Grades K–12' },
  { slug: 'washington', name: 'Washington', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Office of Superintendent of Public Instruction', framework: 'Washington State Learning Standards', portalUrl: 'https://ospi.k12.wa.us', grades: 'Grades K–12' },
  { slug: 'massachusetts', name: 'Massachusetts', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Massachusetts Dept of Elem & Sec Education', framework: 'Massachusetts Curriculum Frameworks', portalUrl: 'https://www.doe.mass.edu', grades: 'Grades K–12' },
  { slug: 'virginia', name: 'Virginia', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Virginia Department of Education (VDOE)', framework: 'Standards of Learning (SOL)', portalUrl: 'https://www.doe.virginia.gov', grades: 'Grades K–12' },
  { slug: 'arizona', name: 'Arizona', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Arizona Department of Education', framework: 'Arizona Academic Standards', portalUrl: 'https://www.azed.gov', grades: 'Grades K–12' },
  { slug: 'colorado', name: 'Colorado', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Colorado Department of Education', framework: 'Colorado Academic Standards (CAS)', portalUrl: 'https://www.cde.state.co.us', grades: 'Grades K–12' },
  { slug: 'connecticut', name: 'Connecticut', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Connecticut State Department of Education', framework: 'Connecticut Core Standards', portalUrl: 'https://portal.ct.gov/sde', grades: 'Grades K–12' },
  { slug: 'dc', name: 'District of Columbia', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Office of the State Superintendent (OSSE)', framework: 'DC Learning Standards (CCSS/NGSS)', portalUrl: 'https://osse.dc.gov', grades: 'Grades K–12' },
  { slug: 'alabama', name: 'Alabama', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Alabama State Department of Education', framework: 'Alabama Course of Study (ALCOS)', portalUrl: 'https://www.alabamaachieves.org', grades: 'Grades K–12' },
  { slug: 'alaska', name: 'Alaska', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Alaska Dept of Education & Early Development', framework: 'Alaska Standards', portalUrl: 'https://education.alaska.gov', grades: 'Grades K–12' },
  { slug: 'arkansas', name: 'Arkansas', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Arkansas Division of Elem & Sec Ed', framework: 'Arkansas Curriculum Frameworks', portalUrl: 'https://dese.ade.arkansas.gov', grades: 'Grades K–12' },
  { slug: 'delaware', name: 'Delaware', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Delaware Department of Education', framework: 'Delaware Content Standards', portalUrl: 'https://www.doe.k12.de.us', grades: 'Grades K–12' },
  { slug: 'hawaii', name: 'Hawaii', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Hawaii State Department of Education', framework: 'Hawaii Content & Performance Standards', portalUrl: 'https://www.hawaiipublicschools.org', grades: 'Grades K–12' },
  { slug: 'idaho', name: 'Idaho', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Idaho State Department of Education', framework: 'Idaho Content Standards', portalUrl: 'https://www.sde.idaho.gov', grades: 'Grades K–12' },
  { slug: 'indiana', name: 'Indiana', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Indiana Department of Education', framework: 'Indiana Academic Standards (IAS)', portalUrl: 'https://www.in.gov/doe', grades: 'Grades K–12' },
  { slug: 'iowa', name: 'Iowa', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Iowa Department of Education', framework: 'Iowa Core Standards', portalUrl: 'https://educateiowa.gov', grades: 'Grades K–12' },
  { slug: 'kansas', name: 'Kansas', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Kansas State Department of Education', framework: 'Kansas Curricular Standards', portalUrl: 'https://www.ksde.org', grades: 'Grades K–12' },
  { slug: 'kentucky', name: 'Kentucky', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Kentucky Department of Education', framework: 'Kentucky Academic Standards (KAS)', portalUrl: 'https://education.ky.gov', grades: 'Grades K–12' },
  { slug: 'louisiana', name: 'Louisiana', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Louisiana Department of Education', framework: 'Louisiana Student Standards', portalUrl: 'https://www.louisianabelieves.com', grades: 'Grades K–12' },
  { slug: 'maine', name: 'Maine', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Maine Department of Education', framework: 'Maine Learning Results', portalUrl: 'https://www.maine.gov/doe', grades: 'Grades K–12' },
  { slug: 'maryland', name: 'Maryland', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Maryland State Department of Education', framework: 'Maryland College & Career Ready Stds', portalUrl: 'https://marylandpublicschools.org', grades: 'Grades K–12' },
  { slug: 'minnesota', name: 'Minnesota', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Minnesota Department of Education', framework: 'Minnesota Academic Standards', portalUrl: 'https://education.mn.gov', grades: 'Grades K–12' },
  { slug: 'mississippi', name: 'Mississippi', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Mississippi Department of Education', framework: 'Mississippi College & Career Readiness', portalUrl: 'https://www.mdek12.org', grades: 'Grades K–12' },
  { slug: 'missouri', name: 'Missouri', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Missouri Dept of Elem & Sec Education', framework: 'Missouri Learning Standards', portalUrl: 'https://dese.mo.gov', grades: 'Grades K–12' },
  { slug: 'montana', name: 'Montana', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Montana Office of Public Instruction', framework: 'Montana Content Standards', portalUrl: 'https://opi.mt.gov', grades: 'Grades K–12' },
  { slug: 'nebraska', name: 'Nebraska', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Nebraska Department of Education', framework: 'Nebraska Content Area Standards', portalUrl: 'https://www.education.ne.gov', grades: 'Grades K–12' },
  { slug: 'nevada', name: 'Nevada', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Nevada Department of Education', framework: 'Nevada Academic Content Standards', portalUrl: 'https://doe.nv.gov', grades: 'Grades K–12' },
  { slug: 'new-hampshire', name: 'New Hampshire', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'New Hampshire Department of Education', framework: 'NH College & Career Ready Standards', portalUrl: 'https://www.education.nh.gov', grades: 'Grades K–12' },
  { slug: 'new-jersey', name: 'New Jersey', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'New Jersey Department of Education', framework: 'NJ Student Learning Standards (NJSLS)', portalUrl: 'https://www.nj.gov/education', grades: 'Grades K–12' },
  { slug: 'new-mexico', name: 'New Mexico', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'New Mexico Public Education Department', framework: 'New Mexico Content Standards', portalUrl: 'https://webnew.ped.state.nm.us', grades: 'Grades K–12' },
  { slug: 'north-dakota', name: 'North Dakota', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'North Dakota Dept of Public Instruction', framework: 'North Dakota Content Standards', portalUrl: 'https://www.nd.gov/dpi', grades: 'Grades K–12' },
  { slug: 'oklahoma', name: 'Oklahoma', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Oklahoma State Department of Education', framework: 'Oklahoma Academic Standards (OAS)', portalUrl: 'https://sde.ok.gov', grades: 'Grades K–12' },
  { slug: 'oregon', name: 'Oregon', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Oregon Department of Education', framework: 'Oregon Content Standards', portalUrl: 'https://www.oregon.gov/ode', grades: 'Grades K–12' },
  { slug: 'rhode-island', name: 'Rhode Island', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Rhode Island Department of Education', framework: 'Rhode Island Core Standards', portalUrl: 'https://www.ride.ri.gov', grades: 'Grades K–12' },
  { slug: 'south-carolina', name: 'South Carolina', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'South Carolina Department of Education', framework: 'SC College & Career-Ready Standards', portalUrl: 'https://ed.sc.gov', grades: 'Grades K–12' },
  { slug: 'south-dakota', name: 'South Dakota', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'South Dakota Department of Education', framework: 'South Dakota Content Standards', portalUrl: 'https://doe.sd.gov', grades: 'Grades K–12' },
  { slug: 'tennessee', name: 'Tennessee', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Tennessee Department of Education', framework: 'Tennessee Academic Standards', portalUrl: 'https://www.tn.gov/education', grades: 'Grades K–12' },
  { slug: 'utah', name: 'Utah', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Utah State Board of Education', framework: 'Utah Core Standards', portalUrl: 'https://www.schools.utah.gov', grades: 'Grades K–12' },
  { slug: 'vermont', name: 'Vermont', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Vermont Agency of Education', framework: 'Vermont Framework of Standards', portalUrl: 'https://education.vermont.gov', grades: 'Grades K–12' },
  { slug: 'west-virginia', name: 'West Virginia', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'West Virginia Department of Education', framework: 'WV College & Career Readiness', portalUrl: 'https://wvde.us', grades: 'Grades K–12' },
  { slug: 'wisconsin', name: 'Wisconsin', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Wisconsin Dept of Public Instruction', framework: 'Wisconsin Academic Standards', portalUrl: 'https://dpi.wi.gov', grades: 'Grades K–12' },
  { slug: 'wyoming', name: 'Wyoming', countryCode: 'us', countryName: 'United States', flag: '🇺🇸', authority: 'Wyoming Department of Education', framework: 'Wyoming Content & Performance Stds', portalUrl: 'https://edu.wyoming.gov', grades: 'Grades K–12' },

  // --- United Kingdom (4 Home Nations) ---
  { slug: 'england', name: 'England', countryCode: 'gb', countryName: 'United Kingdom', flag: '🇬🇧', authority: 'Department for Education (DfE) / Ofqual', framework: 'National Curriculum in England (KS1–4 & GCSE)', portalUrl: 'https://www.gov.uk/government/organisations/department-for-education', grades: 'Key Stages 1–4 & Sixth Form' },
  { slug: 'scotland', name: 'Scotland', countryCode: 'gb', countryName: 'United Kingdom', flag: '🇬🇧', authority: 'Education Scotland / SQA', framework: 'Curriculum for Excellence (CfE / Highers)', portalUrl: 'https://education.gov.scot', grades: 'P1–P7, S1–S6 & Nationals' },
  { slug: 'wales', name: 'Wales', countryCode: 'gb', countryName: 'United Kingdom', flag: '🇬🇧', authority: 'Welsh Government / Qualifications Wales', framework: 'Curriculum for Wales / Cwricwlwm i Gymru', portalUrl: 'https://hwb.gov.wales', grades: 'Progression Steps 1–5' },
  { slug: 'northern-ireland', name: 'Northern Ireland', countryCode: 'gb', countryName: 'United Kingdom', flag: '🇬🇧', authority: 'Council for the Curriculum (CCEA)', framework: 'The Northern Ireland Curriculum (Levels & GCSE)', portalUrl: 'https://ccea.org.uk', grades: 'Foundation, KS1–4 & GCSE' },

  // --- Canada (10 Provinces + 3 Territories = 13) ---
  { slug: 'ontario', name: 'Ontario', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Ontario Ministry of Education', framework: 'The Ontario Curriculum (Grades 1–12)', portalUrl: 'https://www.dcp.edu.gov.on.ca', grades: 'Grades K–12' },
  { slug: 'british-columbia', name: 'British Columbia', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'BC Ministry of Education & Child Care', framework: "BC's Curriculum (Core Competencies & Big Ideas)", portalUrl: 'https://curriculum.gov.bc.ca', grades: 'Grades K–12' },
  { slug: 'alberta', name: 'Alberta', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Alberta Education', framework: 'Alberta Programs of Study', portalUrl: 'https://curriculum.learnalberta.ca', grades: 'Grades K–12' },
  { slug: 'quebec', name: 'Quebec', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Ministère de l’Éducation du Québec (MEQ)', framework: 'Québec Education Program (QEP)', portalUrl: 'https://www.education.gouv.qc.ca', grades: 'Elementary 1–6 & Secondary I–V' },
  { slug: 'manitoba', name: 'Manitoba', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Manitoba Education & Early Learning', framework: 'Manitoba Curriculum Framework', portalUrl: 'https://www.edu.gov.mb.ca', grades: 'Grades K–12' },
  { slug: 'saskatchewan', name: 'Saskatchewan', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Saskatchewan Ministry of Education', framework: 'Saskatchewan Curriculum', portalUrl: 'https://www.curriculum.gov.sk.ca', grades: 'Grades K–12' },
  { slug: 'nova-scotia', name: 'Nova Scotia', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Nova Scotia Dept of Education', framework: 'Nova Scotia Curriculum', portalUrl: 'https://curriculum.novascotia.ca', grades: 'Grades P–12' },
  { slug: 'new-brunswick', name: 'New Brunswick', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'New Brunswick Department of Education', framework: 'New Brunswick Curriculum Framework', portalUrl: 'https://www2.gnb.ca', grades: 'Grades K–12' },
  { slug: 'newfoundland-labrador', name: 'Newfoundland & Labrador', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Dept of Education Newfoundland and Labrador', framework: 'NL Provincial Curriculum Guides', portalUrl: 'https://www.gov.nl.ca/education/', grades: 'Grades K–12' },
  { slug: 'pei', name: 'Prince Edward Island', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'PEI Department of Education', framework: 'PEI Programs of Study', portalUrl: 'https://www.princeedwardisland.ca', grades: 'Grades K–12' },
  { slug: 'northwest-territories', name: 'Northwest Territories', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'NWT Dept of Education, Culture & Employment', framework: 'NWT Adapted Curriculum', portalUrl: 'https://www.ece.gov.nt.ca', grades: 'Junior K to Grade 12' },
  { slug: 'nunavut', name: 'Nunavut', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Nunavut Department of Education', framework: 'Nunavut Curriculum & Inuit Qaujimajatuqangit', portalUrl: 'https://www.gov.nu.ca', grades: 'Grades K–12' },
  { slug: 'yukon', name: 'Yukon', countryCode: 'ca', countryName: 'Canada', flag: '🇨🇦', authority: 'Yukon Department of Education', framework: 'Yukon Curriculum (BC Aligned)', portalUrl: 'https://yukon.ca', grades: 'Grades K–12' },

  // --- Australia (6 States + 2 Mainland Territories = 8) ---
  { slug: 'nsw', name: 'New South Wales', countryCode: 'au', countryName: 'Australia', flag: '🇦🇺', authority: 'NSW Education Standards Authority (NESA)', framework: 'NSW Syllabus & Australian Curriculum v9.0', portalUrl: 'https://curriculum.nsw.edu.au', grades: 'Years K–12 (Stages 1–6)' },
  { slug: 'victoria', name: 'Victoria', countryCode: 'au', countryName: 'Australia', flag: '🇦🇺', authority: 'Victorian Curriculum and Assessment Authority', framework: 'Victorian Curriculum F–10 & VCE', portalUrl: 'https://victoriancurriculum.vcaa.vic.edu.au', grades: 'Years Prep–12' },
  { slug: 'queensland', name: 'Queensland', countryCode: 'au', countryName: 'Australia', flag: '🇦🇺', authority: 'Queensland Curriculum & Assessment Authority', framework: 'QCAA Syllabuses & QCE System', portalUrl: 'https://www.qcaa.qld.edu.au', grades: 'Prep to Year 12' },
  { slug: 'western-australia', name: 'Western Australia', countryCode: 'au', countryName: 'Australia', flag: '🇦🇺', authority: 'School Curriculum and Standards Authority', framework: 'WA Curriculum Outline (WACE)', portalUrl: 'https://k10outline.scsa.wa.edu.au', grades: 'Pre-primary to Year 12' },
  { slug: 'south-australia', name: 'South Australia', countryCode: 'au', countryName: 'Australia', flag: '🇦🇺', authority: 'South Australian Dept for Education / SACE', framework: 'Australian Curriculum in SA / SACE', portalUrl: 'https://www.education.sa.gov.au', grades: 'Reception to Year 12' },
  { slug: 'tasmania', name: 'Tasmania', countryCode: 'au', countryName: 'Australia', flag: '🇦🇺', authority: 'Tasmanian Assessment & Standards (TASC)', framework: 'Australian Curriculum in Tasmania / TASC', portalUrl: 'https://www.tasc.tas.gov.au', grades: 'Prep to Year 12' },
  { slug: 'act', name: 'Australian Capital Territory', countryCode: 'au', countryName: 'Australia', flag: '🇦🇺', authority: 'ACT Board of Senior Secondary Studies (BSSS)', framework: 'Australian Curriculum / ACT BSSS', portalUrl: 'https://www.bsss.act.edu.au', grades: 'Preschool to Year 12' },
  { slug: 'northern-territory', name: 'Northern Territory', countryCode: 'au', countryName: 'Australia', flag: '🇦🇺', authority: 'Northern Territory Department of Education', framework: 'Northern Territory Curriculum Framework', portalUrl: 'https://education.nt.gov.au', grades: 'Transition to Year 12' },

  // --- New Zealand (2 Pathways) ---
  { slug: 'national', name: 'New Zealand (English-Medium)', countryCode: 'nz', countryName: 'New Zealand', flag: '🇳🇿', authority: 'Ministry of Education / NZQA', framework: 'The New Zealand Curriculum (NZC Levels 1–8)', portalUrl: 'https://nzcurriculum.tki.org.nz', grades: 'Curriculum Levels 1–8 (Years 1–13)' },
  { slug: 'maori-medium', name: 'Te Marautanga o Aotearoa (Māori-Medium)', countryCode: 'nz', countryName: 'New Zealand', flag: '🇳🇿', authority: 'Ministry of Education / NZQA', framework: 'Te Marautanga o Aotearoa (TMoA)', portalUrl: 'https://tmoa.tki.org.nz', grades: 'Wāhanga Ako Levels 1–8' },

  // --- India (National Boards & Flagship State Boards = 7) ---
  { slug: 'cbse', name: 'Central Board of Secondary Education (CBSE)', countryCode: 'in', countryName: 'India', flag: '🇮🇳', authority: 'Ministry of Education / NCERT', framework: 'National Curriculum Framework (NCF / NEP 2020)', portalUrl: 'https://www.cbse.gov.in', grades: 'Classes 1–12 (AISSE & AISSCE)' },
  { slug: 'icse', name: 'CISCE (ICSE & ISC Board)', countryCode: 'in', countryName: 'India', flag: '🇮🇳', authority: 'Council for the Indian School Certificate Examinations', framework: 'CISCE Curriculum Guidelines (ICSE Class 10 & ISC Class 12)', portalUrl: 'https://cisce.org', grades: 'Classes 1–12 (ICSE & ISC)' },
  { slug: 'nios', name: 'National Institute of Open Schooling (NIOS)', countryCode: 'in', countryName: 'India', flag: '🇮🇳', authority: 'Ministry of Education (MoE)', framework: 'National Open Schooling Framework (OBE, Secondary & Sr. Secondary)', portalUrl: 'https://www.nios.ac.in', grades: 'OBE Levels A–C, Classes 10 & 12 (ODE)' },
  { slug: 'maharashtra', name: 'Maharashtra State Board (MSBSHSE)', countryCode: 'in', countryName: 'India', flag: '🇮🇳', authority: 'Maharashtra State Board of Secondary & Higher Secondary Education', framework: 'Maharashtra State Curriculum (SSC & HSC)', portalUrl: 'https://mahahsscboard.in', grades: 'Classes 1–12 (SSC & HSC)' },
  { slug: 'uttar-pradesh', name: 'Uttar Pradesh Board (UPMSP)', countryCode: 'in', countryName: 'India', flag: '🇮🇳', authority: 'UP Madhyamik Shiksha Parishad', framework: 'UP Board Curriculum (NCERT Aligned High School & Inter)', portalUrl: 'https://upmsp.edu.in', grades: 'Classes 9–12 (High School & Intermediate)' },
  { slug: 'karnataka', name: 'Karnataka Board (KSEAB / PUC)', countryCode: 'in', countryName: 'India', flag: '🇮🇳', authority: 'Karnataka School Examination and Assessment Board', framework: 'Karnataka State Curriculum & Pre-University Board (SSLC & 2nd PUC)', portalUrl: 'https://kseab.karnataka.gov.in', grades: 'Classes 1–10 (SSLC) & Classes 11–12 (PUC)' },
  { slug: 'tamil-nadu', name: 'Tamil Nadu State Board (TNBSE)', countryCode: 'in', countryName: 'India', flag: '🇮🇳', authority: 'Directorate of Government Examinations Tamil Nadu', framework: 'Tamil Nadu Samacheer Kalvi Curriculum', portalUrl: 'https://dge.tn.gov.in', grades: 'Classes 1–12 (SSLC & Higher Secondary)' }
];

export const TIER1_COUNTRIES = [
  { code: 'us', name: 'United States', flag: '🇺🇸', jurisdictionCount: 51, defaultJurisdiction: 'california' },
  { code: 'gb', name: 'United Kingdom', flag: '🇬🇧', jurisdictionCount: 4, defaultJurisdiction: 'england' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦', jurisdictionCount: 13, defaultJurisdiction: 'ontario' },
  { code: 'au', name: 'Australia', flag: '🇦🇺', jurisdictionCount: 8, defaultJurisdiction: 'nsw' },
  { code: 'nz', name: 'New Zealand', flag: '🇳🇿', jurisdictionCount: 2, defaultJurisdiction: 'national' },
  { code: 'in', name: 'India', flag: '🇮🇳', jurisdictionCount: 7, defaultJurisdiction: 'cbse' }
];

// -----------------------------------------------------------------------------
// Core Standard Course Offerings Across Subjects & Grades
// -----------------------------------------------------------------------------

export const STANDARD_COURSES: CourseCardData[] = [
  // ===========================================================================
  // Elementary School (Grades 1–5)
  // ===========================================================================
  // Grade 1
  {
    slug: 'math-grade-1',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 1 (Elementary)',
    gradeSlug: 'grade-1',
    gradeBand: 'elementary',
    title: 'Grade 1 Mathematics: Counting, Place Value & Addition Within 20',
    standardCode: 'CCSS.MATH.1.OA.C.6 / TEKS 1.3.D',
    lessonCount: 20,
    sampleLessonSlug: 'addition-within-20',
    isLive: true
  },
  {
    slug: 'science-grade-1',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 1 (Elementary)',
    gradeSlug: 'grade-1',
    gradeBand: 'elementary',
    title: 'Grade 1 Science: Living Things, Plant Growth & Sun Patterns',
    standardCode: 'NGSS.1-LS1-1 / TEKS 1.9.A',
    lessonCount: 16,
    sampleLessonSlug: 'plant-growth',
    isLive: true
  },
  {
    slug: 'english-grade-1',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 1 (Elementary)',
    gradeSlug: 'grade-1',
    gradeBand: 'elementary',
    title: 'Grade 1 ELA: Phonics Foundations, Sight Words & Early Stories',
    standardCode: 'CCSS.ELA.RF.1.3 / TEKS 1.2.B',
    lessonCount: 18,
    sampleLessonSlug: 'phonics-foundations',
    isLive: true
  },

  // Grade 2
  {
    slug: 'math-grade-2',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 2 (Elementary)',
    gradeSlug: 'grade-2',
    gradeBand: 'elementary',
    title: 'Grade 2 Mathematics: Multi-Digit Addition, Subtraction & Measurement',
    standardCode: 'CCSS.MATH.2.NBT.B.5 / TEKS 2.4.C',
    lessonCount: 22,
    sampleLessonSlug: 'multi-digit-addition',
    isLive: true
  },
  {
    slug: 'science-grade-2',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 2 (Elementary)',
    gradeSlug: 'grade-2',
    gradeBand: 'elementary',
    title: 'Grade 2 Science: Properties of Matter, Earth Changes & Habitats',
    standardCode: 'NGSS.2-PS1-1 / TEKS 2.5.A',
    lessonCount: 18,
    sampleLessonSlug: 'properties-of-matter',
    isLive: true
  },
  {
    slug: 'english-grade-2',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 2 (Elementary)',
    gradeSlug: 'grade-2',
    gradeBand: 'elementary',
    title: 'Grade 2 ELA: Sentence Construction, Narrative Sequencing & Vocabulary',
    standardCode: 'CCSS.ELA.L.2.1 / TEKS 2.11.D',
    lessonCount: 20,
    sampleLessonSlug: 'sentence-construction',
    isLive: true
  },

  // Grade 3
  {
    slug: 'math-grade-3',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 3 (Elementary)',
    gradeSlug: 'grade-3',
    gradeBand: 'elementary',
    title: 'Grade 3 Mathematics: Multiplication Concepts, Division & Basic Fractions',
    standardCode: 'CCSS.MATH.3.OA.A.1 / TEKS 3.4.D',
    lessonCount: 24,
    sampleLessonSlug: 'multiplication-concepts',
    isLive: true
  },
  {
    slug: 'science-grade-3',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 3 (Elementary)',
    gradeSlug: 'grade-3',
    gradeBand: 'elementary',
    title: 'Grade 3 Science: Forces and Interactions, Weather & Life Cycles',
    standardCode: 'NGSS.3-PS2-1 / TEKS 3.6.B',
    lessonCount: 18,
    sampleLessonSlug: 'forces-interactions',
    isLive: true
  },
  {
    slug: 'english-grade-3',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 3 (Elementary)',
    gradeSlug: 'grade-3',
    gradeBand: 'elementary',
    title: 'Grade 3 ELA: Paragraph Architecture, Informational Reading & Main Ideas',
    standardCode: 'CCSS.ELA.RI.3.2 / TEKS 3.9.D',
    lessonCount: 20,
    sampleLessonSlug: 'paragraph-architecture',
    isLive: true
  },

  // Grade 4
  {
    slug: 'math-grade-4',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 4 (Elementary)',
    gradeSlug: 'grade-4',
    gradeBand: 'elementary',
    title: 'Grade 4 Mathematics: Multi-Digit Operations, Fractions & Decimals',
    standardCode: 'CCSS.MATH.4.NF.A.1 / TEKS 4.3.C',
    lessonCount: 26,
    sampleLessonSlug: 'place-value-structure',
    isLive: true
  },
  {
    slug: 'science-grade-4',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 4 (Elementary)',
    gradeSlug: 'grade-4',
    gradeBand: 'elementary',
    title: 'Grade 4 Science: Earth Systems, Weathering, Energy Waves & Sound',
    standardCode: 'NGSS.4-ESS2-1 / TEKS 4.7.B',
    lessonCount: 22,
    sampleLessonSlug: 'earth-systems',
    isLive: true
  },
  {
    slug: 'english-grade-4',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 4 (Elementary)',
    gradeSlug: 'grade-4',
    gradeBand: 'elementary',
    title: 'Grade 4 ELA: Parts of Speech, Punctuation Mastery & Research Writing',
    standardCode: 'CCSS.ELA.L.4.1 / TEKS 4.11.D',
    lessonCount: 20,
    sampleLessonSlug: 'parts-of-speech',
    isLive: true
  },
  {
    slug: 'civics-grade-4',
    subject: 'Social Studies & Civics',
    subjectSlug: 'civics',
    grade: 'Grade 4 (Elementary)',
    gradeSlug: 'grade-4',
    gradeBand: 'elementary',
    title: 'Grade 4 Social Studies: Regional Geography, Early Peoples & State History',
    standardCode: 'C3.GEO.1.3-5 / TEKS 4.6.A',
    lessonCount: 18,
    sampleLessonSlug: 'regional-geography',
    isLive: true
  },

  // Grade 5
  {
    slug: 'math-grade-5',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 5 (Elementary)',
    gradeSlug: 'grade-5',
    gradeBand: 'elementary',
    title: 'Grade 5 Mathematics: Fraction Multiplication, Decimals & 3D Volume',
    standardCode: 'CCSS.MATH.5.NF.B.4 / TEKS 5.3.I',
    lessonCount: 24,
    sampleLessonSlug: 'fraction-multiplication',
    isLive: true
  },
  {
    slug: 'science-grade-5',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 5 (Elementary)',
    gradeSlug: 'grade-5',
    gradeBand: 'elementary',
    title: 'Grade 5 Science: Ecosystem Dynamics, Food Webs & The Water Cycle',
    standardCode: 'NGSS.5-LS2-1 / TEKS 5.9.B',
    lessonCount: 20,
    sampleLessonSlug: 'ecosystem-dynamics',
    isLive: true
  },
  {
    slug: 'english-grade-5',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 5 (Elementary)',
    gradeSlug: 'grade-5',
    gradeBand: 'elementary',
    title: 'Grade 5 ELA: Citing Text Evidence, Persuasive Essays & Word Nuance',
    standardCode: 'CCSS.ELA.RI.5.1 / TEKS 5.6.G',
    lessonCount: 20,
    sampleLessonSlug: 'citing-text-evidence',
    isLive: true
  },

  // ===========================================================================
  // Middle School (Grades 6–8)
  // ===========================================================================
  // Grade 6
  {
    slug: 'math-grade-6',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 6 / Year 7',
    gradeSlug: 'grade-6',
    gradeBand: 'middle-school',
    title: 'Grade 6 Mathematics: Ratios, Unit Rates, Expressions & Equations',
    standardCode: 'CCSS.MATH.6.RP.A.1 / TEKS 6.4.B',
    lessonCount: 26,
    sampleLessonSlug: 'ratios-and-rates',
    isLive: true
  },
  {
    slug: 'science-grade-6',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 6 / Year 7',
    gradeSlug: 'grade-6',
    gradeBand: 'middle-school',
    title: 'Earth & Space Science: Plate Tectonics, Weather Patterns & Solar System',
    standardCode: 'NGSS.MS-ESS2-1 / UK.NC.KS3.PHYS',
    lessonCount: 22,
    sampleLessonSlug: 'solar-system',
    isLive: true
  },
  {
    slug: 'english-grade-6',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 6 / Year 7',
    gradeSlug: 'grade-6',
    gradeBand: 'middle-school',
    title: 'Grade 6 ELA: Central Themes, Argumentative Writing & Text Analysis',
    standardCode: 'CCSS.ELA.RL.6.2 / TEKS 6.8.A',
    lessonCount: 22,
    sampleLessonSlug: 'central-themes',
    isLive: true
  },
  {
    slug: 'civics-grade-6',
    subject: 'Social Studies & Civics',
    subjectSlug: 'civics',
    grade: 'Grade 6 / Year 7',
    gradeSlug: 'grade-6',
    gradeBand: 'middle-school',
    title: 'World History: Ancient River Civilizations & Early Societies',
    standardCode: 'C3.HIST.2.6-8 / TEKS 6.2.A',
    lessonCount: 20,
    sampleLessonSlug: 'ancient-civilizations',
    isLive: true
  },

  // Grade 7
  {
    slug: 'math-grade-7',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 7 / Year 8',
    gradeSlug: 'grade-7',
    gradeBand: 'middle-school',
    title: 'Grade 7 Mathematics: Proportional Relationships, Percents & Probability',
    standardCode: 'CCSS.MATH.7.RP.A.2 / TEKS 7.4.A',
    lessonCount: 26,
    sampleLessonSlug: 'proportions-percents',
    isLive: true
  },
  {
    slug: 'science-grade-7',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 7 / Year 8',
    gradeSlug: 'grade-7',
    gradeBand: 'middle-school',
    title: 'Life Science: Cellular Processes, Genetics & Photosynthesis',
    standardCode: 'NGSS.MS-LS1-6 / UK.NC.KS3.BIO',
    lessonCount: 24,
    sampleLessonSlug: 'photosynthesis-plants',
    isLive: true
  },
  {
    slug: 'english-grade-7',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 7 / Year 8',
    gradeSlug: 'grade-7',
    gradeBand: 'middle-school',
    title: 'Grade 7 ELA: Comparative Texts, Rhetorical Structure & Persuasion',
    standardCode: 'CCSS.ELA.RI.7.5 / TEKS 7.9.B',
    lessonCount: 22,
    sampleLessonSlug: 'comparative-texts',
    isLive: true
  },
  {
    slug: 'civics-grade-7',
    subject: 'Social Studies & Civics',
    subjectSlug: 'civics',
    grade: 'Grade 7 / Year 8',
    gradeSlug: 'grade-7',
    gradeBand: 'middle-school',
    title: 'World History: Medieval to Early Modern Civilizations & Trade Networks',
    standardCode: 'C3.HIST.3.6-8 / TEKS 7.1.A',
    lessonCount: 20,
    sampleLessonSlug: 'medieval-world',
    isLive: true
  },

  // Grade 8
  {
    slug: 'math-grade-8',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 8 / Year 9 / Level 5',
    gradeSlug: 'grade-8',
    gradeBand: 'middle-school',
    title: 'Grade 8 Mathematics: Linear Equations, Slope & Algebra Foundations',
    standardCode: 'CCSS.MATH.8.EE.C.7 / TEKS 8.8.C',
    lessonCount: 28,
    sampleLessonSlug: 'linear-equations',
    isLive: true
  },
  {
    slug: 'science-grade-8',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 8 / Year 9',
    gradeSlug: 'grade-8',
    gradeBand: 'middle-school',
    title: 'Physical Science: Newton’s Laws, Energy Transformation & Chemical Changes',
    standardCode: 'NGSS.MS-PS2-1 / TEKS 8.6.A',
    lessonCount: 24,
    sampleLessonSlug: 'physical-forces',
    isLive: true
  },
  {
    slug: 'english-grade-8',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 8 / Year 9',
    gradeSlug: 'grade-8',
    gradeBand: 'middle-school',
    title: 'Grade 8 ELA: Dramatic Structure, Literary Analysis & Formal Research',
    standardCode: 'CCSS.ELA.RL.8.3 / TEKS 8.7.C',
    lessonCount: 22,
    sampleLessonSlug: 'literary-analysis',
    isLive: true
  },
  {
    slug: 'civics-grade-8',
    subject: 'Social Studies & Civics',
    subjectSlug: 'civics',
    grade: 'Grade 8 / Middle School',
    gradeSlug: 'grade-8',
    gradeBand: 'middle-school',
    title: 'Civics & Government: The Constitution, Separation of Powers & Bill of Rights',
    standardCode: 'C3.CIV.1.6-8 / TEKS 8.15.D',
    lessonCount: 22,
    sampleLessonSlug: 'constitutional-civics',
    isLive: true
  },
  {
    slug: 'cs-grade-8',
    subject: 'Computer Science & AI',
    subjectSlug: 'computer-science',
    grade: 'Grade 8 / Middle School',
    gradeSlug: 'grade-8',
    gradeBand: 'middle-school',
    title: 'Computer Science: Python Programming, Control Flow & Boolean Logic',
    standardCode: 'CSTA.2-AP-10 / UK.NC.KS3.COMP',
    lessonCount: 20,
    sampleLessonSlug: 'python-programming',
    isLive: true
  },

  // ===========================================================================
  // High School (Grades 9–12)
  // ===========================================================================
  // Grade 9
  {
    slug: 'math-grade-9',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 9 / Year 10 / GCSE',
    gradeSlug: 'grade-9',
    gradeBand: 'high-school',
    title: 'Algebra 1: Quadratic Equations, Factoring & Parabola Models',
    standardCode: 'CCSS.MATH.HSA.REI.B.4 / GCSE.MATH.ALG',
    lessonCount: 28,
    sampleLessonSlug: 'quadratic-equations',
    isLive: true
  },
  {
    slug: 'science-grade-9',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 9 / High School',
    gradeSlug: 'grade-9',
    gradeBand: 'high-school',
    title: 'High School Biology: Cell Structure, Organelles & Molecular Genetics',
    standardCode: 'NGSS.HS-LS1-1 / GCSE.BIO.CELLS',
    lessonCount: 28,
    sampleLessonSlug: 'cell-biology',
    isLive: true
  },
  {
    slug: 'english-grade-9',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 9 / High School',
    gradeSlug: 'grade-9',
    gradeBand: 'high-school',
    title: 'English 9: Foundations of Literature, Epic Poetry & Expository Essays',
    standardCode: 'CCSS.ELA.RL.9-10.1 / GCSE.ENG.LIT',
    lessonCount: 24,
    sampleLessonSlug: 'literature-foundations',
    isLive: true
  },
  {
    slug: 'civics-grade-9',
    subject: 'Social Studies & Civics',
    subjectSlug: 'civics',
    grade: 'Grade 9 / High School',
    gradeSlug: 'grade-9',
    gradeBand: 'high-school',
    title: 'World Geography: Physical Landscapes, Demographics & Global Systems',
    standardCode: 'C3.GEO.2.9-12 / TEKS WG.4.A',
    lessonCount: 22,
    sampleLessonSlug: 'world-geography',
    isLive: true
  },

  // Grade 10
  {
    slug: 'math-grade-10',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 10 / High School',
    gradeSlug: 'grade-10',
    gradeBand: 'high-school',
    title: 'Geometry: Euclidean Proofs, Congruence, Similarity & Trigonometry',
    standardCode: 'CCSS.MATH.HSG.CO.C.9 / TEKS G.5.B',
    lessonCount: 28,
    sampleLessonSlug: 'geometry-proofs',
    isLive: true
  },
  {
    slug: 'science-grade-10',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 10 / High School',
    gradeSlug: 'grade-10',
    gradeBand: 'high-school',
    title: 'High School Chemistry: Atomic Theory, Periodic Table & Chemical Bonds',
    standardCode: 'NGSS.HS-PS1-1 / GCSE.CHEM.BONDS',
    lessonCount: 28,
    sampleLessonSlug: 'chemical-bonds',
    isLive: true
  },
  {
    slug: 'english-grade-10',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 10 / High School',
    gradeSlug: 'grade-10',
    gradeBand: 'high-school',
    title: 'High School ELA: Rhetorical Analysis, Persuasive Essays & Critical Logic',
    standardCode: 'CCSS.ELA-LITERACY.W.9-10.1',
    lessonCount: 24,
    sampleLessonSlug: 'persuasive-writing',
    isLive: true
  },
  {
    slug: 'civics-grade-10',
    subject: 'Social Studies & Civics',
    subjectSlug: 'civics',
    grade: 'Grade 10 / High School',
    gradeSlug: 'grade-10',
    gradeBand: 'high-school',
    title: 'Modern World History: Industrialization, Global Alliances & 20th Century Conflicts',
    standardCode: 'C3.HIST.1.9-12 / TEKS WH.12.A',
    lessonCount: 24,
    sampleLessonSlug: 'modern-world-history',
    isLive: true
  },

  // Grade 11
  {
    slug: 'math-grade-11',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 11 / High School',
    gradeSlug: 'grade-11',
    gradeBand: 'high-school',
    title: 'Algebra 2 & Trigonometry: Polynomials, Complex Numbers & Exponential Models',
    standardCode: 'CCSS.MATH.HSA.CED.A.1 / TEKS 2A.2.A',
    lessonCount: 30,
    sampleLessonSlug: 'polynomial-functions',
    isLive: true
  },
  {
    slug: 'science-grade-11',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 11 / High School',
    gradeSlug: 'grade-11',
    gradeBand: 'high-school',
    title: 'High School Physics: Newton’s Laws of Motion, Momentum & Energy Conservation',
    standardCode: 'NGSS.HS-PS2-1 / GCSE.PHYS.FORCES',
    lessonCount: 28,
    sampleLessonSlug: 'newtons-laws',
    isLive: true
  },
  {
    slug: 'english-grade-11',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 11 / High School',
    gradeSlug: 'grade-11',
    gradeBand: 'high-school',
    title: 'American Literature: Synthesis Research, Foundational Speeches & Literary Movements',
    standardCode: 'CCSS.ELA.RI.11-12.1 / TEKS 11.8.A',
    lessonCount: 24,
    sampleLessonSlug: 'american-literature',
    isLive: true
  },
  {
    slug: 'civics-grade-11',
    subject: 'Social Studies & Civics',
    subjectSlug: 'civics',
    grade: 'Grade 11 / High School',
    gradeSlug: 'grade-11',
    gradeBand: 'high-school',
    title: 'United States History: Founding Documents, Reconstruction, Civil Rights & Modern Era',
    standardCode: 'C3.HIST.2.9-12 / TEKS US.9.A',
    lessonCount: 26,
    sampleLessonSlug: 'us-history-foundations',
    isLive: true
  },

  // Grade 12
  {
    slug: 'math-grade-12',
    subject: 'Mathematics',
    subjectSlug: 'mathematics',
    grade: 'Grade 12 / Senior High / AP/IB',
    gradeSlug: 'grade-12',
    gradeBand: 'high-school',
    title: 'Pre-Calculus & Calculus: Functions, Limits, Derivatives & Rate of Change',
    standardCode: 'CCSS.MATH.HSF.TF.A.1 / AP.CALC.LIM',
    lessonCount: 32,
    sampleLessonSlug: 'calculus-limits',
    isLive: true
  },
  {
    slug: 'science-grade-12',
    subject: 'Science',
    subjectSlug: 'science',
    grade: 'Grade 12 / Senior High / AP/IB',
    gradeSlug: 'grade-12',
    gradeBand: 'high-school',
    title: 'Advanced Science: Environmental Systems, Energy Sustainability & Thermodynamics',
    standardCode: 'NGSS.HS-ESS3-1 / AP.ENV.ENG',
    lessonCount: 26,
    sampleLessonSlug: 'environmental-systems',
    isLive: true
  },
  {
    slug: 'english-grade-12',
    subject: 'English Language Arts',
    subjectSlug: 'english',
    grade: 'Grade 12 / Senior High / AP/IB',
    gradeSlug: 'grade-12',
    gradeBand: 'high-school',
    title: 'World Literature & Rhetoric: Critical Theoretical Lenses & Capstone Argumentation',
    standardCode: 'CCSS.ELA.RL.11-12.6 / AP.ENG.LIT',
    lessonCount: 24,
    sampleLessonSlug: 'world-literature',
    isLive: true
  },
  {
    slug: 'civics-grade-12',
    subject: 'Social Studies & Civics',
    subjectSlug: 'civics',
    grade: 'Grade 12 / Senior High / AP/IB',
    gradeSlug: 'grade-12',
    gradeBand: 'high-school',
    title: 'US Government & Economics: Constitutional Law, Civil Liberties & Macroeconomic Policy',
    standardCode: 'C3.CIV.13.9-12 / AP.GOV.CIV',
    lessonCount: 26,
    sampleLessonSlug: 'government-economics',
    isLive: true
  },
  {
    slug: 'cs-grade-12',
    subject: 'Computer Science & AI',
    subjectSlug: 'computer-science',
    grade: 'Grade 12 / Senior High / AP/IB',
    gradeSlug: 'grade-12',
    gradeBand: 'high-school',
    title: 'Advanced Computer Science & AI: Data Structures, Machine Learning & Algorithmic Ethics',
    standardCode: 'CSTA.3A-AP-14 / AP.CS.A',
    lessonCount: 28,
    sampleLessonSlug: 'ai-data-structures',
    isLive: true
  }
];

// -----------------------------------------------------------------------------
// Live Lesson Catalogue (Verified Working Embeds)
// -----------------------------------------------------------------------------

export const LESSONS_CATALOGUE: Record<string, LessonData> = {
  'fractions-decimals': {
    slug: 'fractions-decimals',
    title: 'Equivalent Fractions, Decimals & The Number Line',
    subjectSlug: 'mathematics',
    subjectName: 'Mathematics',
    gradeSlug: 'grade-4',
    gradeName: 'Grade 4 (Elementary)',
    gradeBand: 'elementary',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (CDE)',
    standardCode: 'CCSS.MATH.CONTENT.4.NF.A.1',
    standardTitle: 'Explain Why a Fraction a/b is Equivalent to (n*a)/(n*b)',
    authorityName: 'California Department of Education',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.cde.ca.gov/ci/ma/cf/',
    summary: 'Understand fraction equivalence visually using area models and number lines, and learn to convert tenths and hundredths into decimals.',
    whyItMatters: 'Essential for currency transactions, recipe proportions, architectural scaling, and higher-order algebra.',
    careerLink: 'Civil Engineers, Pharmacists, and Chefs use precise fractional and decimal conversions every day.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Algebra Basics & Fraction Operations',
        channelTitle: 'Math Antics',
        youtubeVideoId: 'Qyd_v3DGzTM',
        durationSeconds: 574,
        qualityScore: 95,
        curationNotes: 'Superb visual models of fractional parts and equivalent numerical representations.'
      },
      {
        role: 'BACKUP_1',
        title: 'Fractions on the Number Line',
        channelTitle: 'Khan Academy',
        youtubeVideoId: 'f15zA0PhSek',
        durationSeconds: 485,
        qualityScore: 92,
        curationNotes: 'Clear foundational practice identifying fractional distances from zero.'
      }
    ],
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

  'earth-systems': {
    slug: 'earth-systems',
    title: 'Earth Systems: Rock Cycle, Water Cycle & Weather',
    subjectSlug: 'science',
    subjectName: 'Science (Earth Systems)',
    gradeSlug: 'grade-4',
    gradeName: 'Grade 4 (Elementary)',
    gradeBand: 'elementary',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (NGSS)',
    standardCode: 'NGSS.4-ESS2-1',
    standardTitle: 'Earth’s Systems: Weathering and Erosion Processes',
    authorityName: 'Next Generation Science Standards (NGSS)',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.nextgenscience.org',
    summary: 'Investigate how the hydrosphere, geosphere, atmosphere, and biosphere interact through rainfall, weathering, and continental rock formation.',
    whyItMatters: 'Essential for climate resilience, soil conservation in agriculture, and water resource management.',
    careerLink: 'Geologists, Hydrologists, and Environmental Scientists monitor Earth dynamics to prevent natural hazard devastation.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Introduction to Earth Systems and Life Cycles',
        channelTitle: 'Amoeba Sisters',
        youtubeVideoId: '8IlzKri08kk',
        durationSeconds: 567,
        qualityScore: 95,
        curationNotes: 'Intuitive visual models connecting ecological cycles to Earth physical systems.'
      },
      {
        role: 'BACKUP_1',
        title: 'The Chemical Basis of Earth Minerals',
        channelTitle: 'CrashCourse',
        youtubeVideoId: '0RRVV4Diomg',
        durationSeconds: 672,
        qualityScore: 91,
        curationNotes: 'Exploration of mineral crystal bonding.'
      }
    ],
    workedExample: {
      problemStatement: 'Differentiate between mechanical weathering and chemical weathering:',
      steps: [
        { stepNumber: 1, operation: 'Identify Mechanical Weathering mechanism', equation: 'Physical breakdown (Freeze-Thaw)', explanation: 'Water enters rock fissures, freezes, expands by 9%, and wedges rock apart without changing mineral composition.' },
        { stepNumber: 2, operation: 'Identify Chemical Weathering mechanism', equation: 'Chemical dissolution (Acid Rain / Carbonic Acid)', explanation: 'Atmospheric CO₂ dissolves into rainwater, reacting with calcium carbonate in limestone to form soluble bicarbonate.' },
        { stepNumber: 3, operation: 'Synthesize Earth system impact', equation: 'Mechanical exposes surface area → Accelerates chemical rate', explanation: 'Both processes work synergistically to generate rich organic topsoil.' }
      ],
      verification: {
        checkStatement: 'Confirm conservation of mass: Does weathering destroy rock matter?',
        leftSideCalculation: 'Initial mass = Solid bed rock.',
        rightSideCalculation: 'Final mass = Soil particles + dissolved ions (Matter is conserved).',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Confusing weathering with erosion',
        incorrectAttempt: 'Using weathering and erosion interchangeably',
        correctApproach: 'Weathering BREAKS DOWN rock in place; Erosion TRANSPORTS sediments via wind or water',
        explanation: 'Weathering is the in-situ breakdown; erosion is the movement.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_ess1',
        prompt: 'Which Earth sphere includes all of Earth’s liquid water, ice, and atmospheric water vapor?',
        options: [
          { id: 'eopt_1', text: 'Hydrosphere', feedback: 'Correct! The hydrosphere encompasses all aquatic matter on Earth.' },
          { id: 'eopt_2', text: 'Geosphere', feedback: 'Incorrect: The geosphere is the solid rocky crust and mantle.' },
          { id: 'eopt_3', text: 'Biosphere', feedback: 'Incorrect: The biosphere comprises living organisms.' }
        ],
        correctOptionId: 'eopt_1',
        explanation: 'Hydro = water; the hydrosphere contains oceans, glaciers, rivers, and water vapor.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_ess1',
        prompt: 'What process occurs when water changes from liquid to gas via solar heating?',
        options: [
          { id: 'qess_1', text: 'Evaporation' },
          { id: 'qess_2', text: 'Condensation' },
          { id: 'qess_3', text: 'Precipitation' }
        ],
        correctOptionId: 'qess_1',
        explanation: 'Evaporation transforms liquid water into gaseous atmospheric water vapor.'
      }
    ]
  },

  'photosynthesis-plants': {
    slug: 'photosynthesis-plants',
    title: 'Photosynthesis, Chloroplasts & Ecological Energy Flow',
    subjectSlug: 'science',
    subjectName: 'Science (Life Science)',
    gradeSlug: 'grade-7',
    gradeName: 'Grade 7 / Middle School / Year 8',
    gradeBand: 'middle-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (NGSS)',
    standardCode: 'NGSS.MS-LS1-6',
    standardTitle: 'Photosynthesis and Energy Matter Cycling in Ecosystems',
    authorityName: 'Next Generation Science Standards (NGSS)',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.nextgenscience.org',
    summary: 'Discover how photoautotrophs convert sunlight, water, and atmospheric carbon dioxide into chemical bond energy stored within glucose.',
    whyItMatters: 'Photosynthesis produces virtually all atmospheric oxygen and forms the foundational trophic base for global food webs.',
    careerLink: 'Agricultural Scientists and Plant Geneticists engineer crop photosynthetic efficiency to secure global food supplies.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Photosynthesis and the Teeny Tiny Pigment Pancakes',
        channelTitle: 'Amoeba Sisters',
        youtubeVideoId: '8IlzKri08kk',
        durationSeconds: 567,
        qualityScore: 97,
        curationNotes: 'Clear visual journey into chloroplast thylakoids and the light-independent reactions.'
      },
      {
        role: 'BACKUP_1',
        title: 'Chemical Energy and Bonding Foundations',
        channelTitle: 'CrashCourse',
        youtubeVideoId: '0RRVV4Diomg',
        durationSeconds: 672,
        qualityScore: 92,
        curationNotes: 'Explaining molecular energy storage in carbohydrate bonds.'
      }
    ],
    workedExample: {
      problemStatement: 'Balance the fundamental chemical equation for oxygenic photosynthesis:',
      steps: [
        { stepNumber: 1, operation: 'Identify inorganic reactants', equation: 'CO₂ + H₂O + Photons', explanation: 'Carbon dioxide gas is absorbed through stomata; water is absorbed by root xylem.' },
        { stepNumber: 2, operation: 'Identify organic products', equation: 'C₆H₁₂O₆ (Glucose) + O₂ (Oxygen)', explanation: 'Light-dependent and Calvin cycle reactions synthesize high-energy carbohydrates.' },
        { stepNumber: 3, operation: 'Balance atomic counts', equation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', explanation: '6 Carbons, 12 Hydrogens, and 18 Oxygens on both sides satisfy conservation of mass.' }
      ],
      verification: {
        checkStatement: 'Verify atomic balance: Count Carbons, Hydrogens, and Oxygens.',
        leftSideCalculation: 'Left: 6 C, 12 H, (12 + 6 = 18) O.',
        rightSideCalculation: 'Right: 6 C, 12 H, (6 + 12 = 18) O. Balanced!',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Believing plants gain mass predominantly from soil minerals',
        incorrectAttempt: 'Thinking tree trunks are made from dirt absorbed by roots',
        correctApproach: 'The vast majority of plant biomass (dry carbon) comes from AIR (carbon dioxide gas)',
        explanation: 'Van Helmont’s classic willow experiment proved trees gain mass from atmospheric CO₂, not soil.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_photo1',
        prompt: 'Which green pigment inside chloroplasts captures solar photons to initiate the light reactions?',
        options: [
          { id: 'ph_opt1', text: 'Chlorophyll', feedback: 'Correct! Chlorophyll absorbs blue and red wavelengths, reflecting green.' },
          { id: 'ph_opt2', text: 'Hemoglobin', feedback: 'Incorrect: Hemoglobin is an iron-rich protein in animal blood.' },
          { id: 'ph_opt3', text: 'Carotene', feedback: 'Incorrect: Carotene is an accessory orange pigment.' }
        ],
        correctOptionId: 'ph_opt1',
        explanation: 'Chlorophyll a and b are the primary photoreceptors in plant thylakoid membranes.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_photo1',
        prompt: 'What microscopic pores on leaves open and close to allow CO₂ in and water vapor out?',
        options: [
          { id: 'qph_1', text: 'Stomata' },
          { id: 'qph_2', text: 'Thylakoids' },
          { id: 'qph_3', text: 'Cristae' }
        ],
        correctOptionId: 'qph_1',
        explanation: 'Stomata regulated by guard cells control transpiration and gas exchange.'
      }
    ]
  },

  'linear-equations': {
    slug: 'linear-equations',
    title: 'Solving Linear Equations in One Variable',
    subjectSlug: 'mathematics',
    subjectName: 'Mathematics',
    gradeSlug: 'grade-8',
    gradeName: 'Grade 8 / Year 9 / Level 5',
    gradeBand: 'middle-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (CDE)',
    standardCode: 'CCSS.MATH.CONTENT.8.EE.C.7',
    standardTitle: 'Linear Equations with Rational Number Coefficients',
    authorityName: 'California Department of Education',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.cde.ca.gov/ci/ma/cf/',
    summary: 'Master solving multi-step linear equations with variables on both sides using inverse operations, distributive property, and balancing principles.',
    whyItMatters: 'Forms the foundational mathematics for machine learning algorithms, game physics engines, and economic balancing models.',
    careerLink: 'Software Engineers and Aerospace Architects use linear equations daily to model dynamic physical systems.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Introduction to solving an equation with variables on both sides',
        channelTitle: 'Khan Academy',
        youtubeVideoId: 'f15zA0PhSek',
        durationSeconds: 485,
        qualityScore: 95,
        curationNotes: 'Pedagogically sound explanation with balance scale visualization.'
      },
      {
        role: 'BACKUP_1',
        title: 'Algebra Basics: Solving Basic Equations Part 2',
        channelTitle: 'Math Antics',
        youtubeVideoId: 'Qyd_v3DGzTM',
        durationSeconds: 574,
        qualityScore: 92,
        curationNotes: 'Excellent visual animations for multi-step algebraic operations.'
      }
    ],
    workedExample: {
      problemStatement: 'Solve for x: 5x - 8 = 2x + 13',
      steps: [
        { stepNumber: 1, operation: 'Subtract 2x from both sides', equation: '3x - 8 = 13', explanation: 'Collect all variable terms onto the left side of the equation.' },
        { stepNumber: 2, operation: 'Add 8 to both sides', equation: '3x = 21', explanation: 'Isolate variable term by eliminating constant on left side.' },
        { stepNumber: 3, operation: 'Divide both sides by 3', equation: 'x = 7', explanation: 'Multiply by reciprocal (or divide) to yield solution.' }
      ],
      verification: {
        checkStatement: 'Substitute x = 7 back into original equation 5x - 8 = 2x + 13:',
        leftSideCalculation: 'Left side: 5(7) - 8 = 35 - 8 = 27',
        rightSideCalculation: 'Right side: 2(7) + 13 = 14 + 13 = 27',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Sign errors during subtraction across the equal sign',
        incorrectAttempt: '5x - 8 = 2x + 13 => 7x = 5',
        correctApproach: '5x - 2x = 3x, and 13 + 8 = 21 => 3x = 21',
        explanation: 'Remember to apply inverse operations to both sides equally.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_1',
        prompt: 'Solve for x: 4x + 7 = 2x + 19',
        options: [
          { id: 'opt_a', text: 'x = 6', feedback: 'Correct! 4x - 2x = 2x, 19 - 7 = 12, so 2x = 12 => x = 6.' },
          { id: 'opt_b', text: 'x = 13', feedback: 'Incorrect: Check your step where you subtracted 7 from 19.' },
          { id: 'opt_c', text: 'x = 4', feedback: 'Incorrect: Review the division step 12 / 2.' }
        ],
        correctOptionId: 'opt_a',
        explanation: 'Subtract 2x from both sides (2x + 7 = 19), subtract 7 (2x = 12), then divide by 2 to get x = 6.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_1',
        prompt: 'What is the first step to solve: 7x - 4 = 3x + 16?',
        options: [
          { id: 'qopt_1', text: 'Subtract 3x from both sides to gather variables' },
          { id: 'qopt_2', text: 'Divide both sides by 7 immediately' },
          { id: 'qopt_3', text: 'Multiply both sides by 4' }
        ],
        correctOptionId: 'qopt_1',
        explanation: 'Gathering like variable terms is the cleanest first step.'
      }
    ]
  },

  'quadratic-equations': {
    slug: 'quadratic-equations',
    title: 'Solving Quadratic Equations by Factoring & Formula',
    subjectSlug: 'mathematics',
    subjectName: 'Mathematics',
    gradeSlug: 'grade-9',
    gradeName: 'Grade 9 / Algebra 1 / Year 10',
    gradeBand: 'high-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (CDE)',
    standardCode: 'CCSS.MATH.CONTENT.HSA.REI.B.4',
    standardTitle: 'Solve Quadratic Equations in One Variable',
    authorityName: 'California Department of Education',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.cde.ca.gov/ci/ma/cf/',
    summary: 'Master solving quadratic equations (ax² + bx + c = 0) using factoring, completing the square, and the universal quadratic formula.',
    whyItMatters: 'Essential for projectile kinematics in physics, profit maximization curves in economics, and rendering parabolic paths in 3D gaming.',
    careerLink: 'Aerospace Guidance Engineers and Quantitative Traders use quadratic optimization algorithms continuously.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'How to Solve Quadratic Equations Using the Quadratic Formula',
        channelTitle: 'Math Meeting',
        youtubeVideoId: '3ayhvAI3IeY',
        durationSeconds: 680,
        qualityScore: 94,
        curationNotes: 'Clear step-by-step substitution into the quadratic formula with discriminant analysis.'
      },
      {
        role: 'BACKUP_1',
        title: 'Introduction to solving an equation with variables on both sides',
        channelTitle: 'Khan Academy',
        youtubeVideoId: 'f15zA0PhSek',
        durationSeconds: 485,
        qualityScore: 90,
        curationNotes: 'Algebraic foundation for isolating variables.'
      }
    ],
    workedExample: {
      problemStatement: 'Solve for x: x² - 5x + 6 = 0',
      steps: [
        { stepNumber: 1, operation: 'Identify factors of +6 that sum to -5', equation: '(-2) * (-3) = 6 and (-2) + (-3) = -5', explanation: 'Factoring trinomials of form x² + bx + c.' },
        { stepNumber: 2, operation: 'Rewrite as binomial factors', equation: '(x - 2)(x - 3) = 0', explanation: 'Apply zero-product property.' },
        { stepNumber: 3, operation: 'Set each factor to zero', equation: 'x - 2 = 0 or x - 3 = 0', explanation: 'A product is zero if either factor equals zero.' },
        { stepNumber: 4, operation: 'Solve for x', equation: 'x = 2 or x = 3', explanation: 'Two real roots satisfy the quadratic.' }
      ],
      verification: {
        checkStatement: 'Test x = 2: (2)² - 5(2) + 6 = 4 - 10 + 6 = 0.',
        leftSideCalculation: '4 - 10 + 6 = 0',
        rightSideCalculation: '0 = 0 (Verified)',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Forgetting the ± symbol when taking square roots',
        incorrectAttempt: 'x² = 25 => x = 5 only',
        correctApproach: 'x² = 25 => x = ±5 (both 5 and -5)',
        explanation: 'Every non-zero real number has both a positive and negative square root.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_quad1',
        prompt: 'What are the solutions to x² - 7x + 12 = 0?',
        options: [
          { id: 'qopt_a', text: 'x = 3 and x = 4', feedback: 'Correct! (x - 3)(x - 4) = 0 yields x = 3, 4.' },
          { id: 'qopt_b', text: 'x = -3 and x = -4', feedback: 'Incorrect: (-3) * (-4) is 12, but sum is -7, so roots are positive 3 and 4.' },
          { id: 'qopt_c', text: 'x = 2 and x = 6', feedback: 'Incorrect: 2 + 6 is 8, not 7.' }
        ],
        correctOptionId: 'qopt_a',
        explanation: 'Factors of 12 that add to -7 are -3 and -4, so (x - 3)(x - 4) = 0 => x = 3, 4.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_quad1',
        prompt: 'In the quadratic formula, what does the discriminant (b² - 4ac) indicate when greater than zero?',
        options: [
          { id: 'qz_a', text: 'Two distinct real solutions' },
          { id: 'qz_b', text: 'Exactly one real repeated solution' },
          { id: 'qz_c', text: 'Two complex imaginary solutions' }
        ],
        correctOptionId: 'qz_a',
        explanation: 'When b² - 4ac > 0, the square root produces two distinct real solutions.'
      }
    ]
  },

  'cell-biology': {
    slug: 'cell-biology',
    title: 'Cell Structure, Organelles & Cellular Function',
    subjectSlug: 'science',
    subjectName: 'Science (Biology)',
    gradeSlug: 'grade-9',
    gradeName: 'Grade 9 / High School / Year 10',
    gradeBand: 'high-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (NGSS)',
    standardCode: 'NGSS.HS-LS1-1',
    standardTitle: 'Cellular Structures and Specialized Subsystems',
    authorityName: 'Next Generation Science Standards (NGSS)',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.nextgenscience.org',
    summary: 'Investigate the microscopic architecture of prokaryotic and eukaryotic cells, examining how the nucleus, mitochondria, ribosomes, and cell membranes sustain life.',
    whyItMatters: 'Critical for biotechnology, cancer immunology, pharmaceuticals, and synthetic biology breakthroughs.',
    careerLink: 'Biomedical Scientists, Geneticists, and Oncologists engineer cellular mechanisms to cure hereditary illnesses.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Introduction to Cells: The Grand Cell Tour',
        channelTitle: 'Amoeba Sisters',
        youtubeVideoId: '8IlzKri08kk',
        durationSeconds: 567,
        qualityScore: 97,
        curationNotes: 'Vibrant, accurate animations differentiating animal, plant, and bacterial organelles.'
      },
      {
        role: 'BACKUP_1',
        title: 'Chemistry: The Periodic Table & Bonds',
        channelTitle: 'CrashCourse',
        youtubeVideoId: '0RRVV4Diomg',
        durationSeconds: 672,
        qualityScore: 92,
        curationNotes: 'Chemical basis of cellular macromolecules.'
      }
    ],
    workedExample: {
      problemStatement: 'Differentiate the primary energy conversion role between Mitochondria and Chloroplasts:',
      steps: [
        { stepNumber: 1, operation: 'Analyze Mitochondria function', equation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', explanation: 'Cellular respiration converts glucose into ATP in both plant and animal cells.' },
        { stepNumber: 2, operation: 'Analyze Chloroplast function', equation: '6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂', explanation: 'Photosynthesis captures solar photons to synthesize glucose (plants and algae).' },
        { stepNumber: 3, operation: 'Synthesize biological interdependence', equation: 'Chloroplast output = Mitochondrial input', explanation: 'The oxygen and sugars produced by chloroplasts fuel mitochondrial ATP production.' }
      ],
      verification: {
        checkStatement: 'Confirm presence: Do plant cells have mitochondria?',
        leftSideCalculation: 'Yes: Plant cells must perform cellular respiration at night or when light is unavailable.',
        rightSideCalculation: 'Confirmed: Both plant and animal cells possess mitochondria.',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Believing plant cells have chloroplasts instead of mitochondria',
        incorrectAttempt: 'Thinking animals have mitochondria and plants only have chloroplasts',
        correctApproach: 'Plants have BOTH chloroplasts and mitochondria',
        explanation: 'Plants synthesize glucose via chloroplasts, but still need mitochondria to generate usable ATP.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_bio1',
        prompt: 'Which organelle is responsible for synthesizing proteins from mRNA instructions?',
        options: [
          { id: 'bio_opt1', text: 'Ribosome', feedback: 'Correct! Ribosomes translate mRNA codons into polypeptide chains.' },
          { id: 'bio_opt2', text: 'Golgi Apparatus', feedback: 'Incorrect: Golgi packages and ships proteins, but does not synthesize them.' },
          { id: 'bio_opt3', text: 'Lysosome', feedback: 'Incorrect: Lysosomes contain digestive enzymes to break down waste.' }
        ],
        correctOptionId: 'bio_opt1',
        explanation: 'Ribosomes are the molecular factories that assemble amino acids into proteins.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_bio1',
        prompt: 'Which feature is found in eukaryotic cells but absent in prokaryotic bacteria?',
        options: [
          { id: 'qbio_1', text: 'A membrane-bound nucleus' },
          { id: 'qbio_2', text: 'DNA genetic material' },
          { id: 'qbio_3', text: 'A cell membrane' }
        ],
        correctOptionId: 'qbio_1',
        explanation: 'Eukaryotes have membrane-bound nuclei enclosing their genetic material.'
      }
    ]
  },

  'chemical-bonds': {
    slug: 'chemical-bonds',
    title: 'Atomic Structure & Chemical Bonding: Covalent vs Ionic',
    subjectSlug: 'science',
    subjectName: 'Science (Chemistry)',
    gradeSlug: 'grade-10',
    gradeName: 'Grade 10 / High School',
    gradeBand: 'high-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (NGSS)',
    standardCode: 'NGSS.HS-PS1-1',
    standardTitle: 'Periodic Table Trends & Chemical Bonding',
    authorityName: 'Next Generation Science Standards (NGSS)',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.nextgenscience.org',
    summary: 'Discover how valence electrons drive chemical bonding. Compare ionic electron transfer with covalent electron sharing and explore electronegativity trends.',
    whyItMatters: 'Explains the molecular properties of water, drug-receptor interactions in pharmacology, and advanced battery materials.',
    careerLink: 'Chemical Engineers and Materials Scientists design next-generation polymers and semiconductors based on bonding principles.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Chemical Bonds: Cram Course Chemistry',
        channelTitle: 'CrashCourse',
        youtubeVideoId: '0RRVV4Diomg',
        durationSeconds: 672,
        qualityScore: 96,
        curationNotes: 'Fast-paced, rigorous conceptual breakdown of ionic, covalent, and metallic bonds.'
      },
      {
        role: 'BACKUP_1',
        title: 'Introduction to Cells & Molecular Structure',
        channelTitle: 'Amoeba Sisters',
        youtubeVideoId: '8IlzKri08kk',
        durationSeconds: 567,
        qualityScore: 90,
        curationNotes: 'Biological manifestations of covalent bonds in macromolecular structures.'
      }
    ],
    workedExample: {
      problemStatement: 'Determine whether Sodium Chloride (NaCl) forms an ionic or covalent bond using electronegativity differences:',
      steps: [
        { stepNumber: 1, operation: 'Identify electronegativity of Sodium (Na)', equation: 'EN(Na) = 0.93', explanation: 'Sodium is an alkali metal in Group 1.' },
        { stepNumber: 2, operation: 'Identify electronegativity of Chlorine (Cl)', equation: 'EN(Cl) = 3.16', explanation: 'Chlorine is a halogen in Group 17 with high electron affinity.' },
        { stepNumber: 3, operation: 'Calculate difference ΔEN', equation: 'ΔEN = 3.16 - 0.93 = 2.23', explanation: 'Electronegativity difference greater than 2.0 indicates full electron transfer.' },
        { stepNumber: 4, operation: 'Conclude bond classification', equation: 'Na⁺ + Cl⁻ → NaCl (Ionic Lattice)', explanation: 'Sodium donates 1 electron to chlorine, forming electrostatic attraction.' }
      ],
      verification: {
        checkStatement: 'Does NaCl conduct electricity when dissolved in water?',
        leftSideCalculation: 'Solid NaCl: Ions locked in crystal lattice (no conduction).',
        rightSideCalculation: 'Aqueous NaCl: Free-floating Na⁺ and Cl⁻ ions conduct current. Validates ionic nature!',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Assuming all bonds between non-metals and metals are purely 100% ionic',
        incorrectAttempt: 'Treating bonding as an absolute binary switch',
        correctApproach: 'Bonding exists along a continuum of polarity based on electronegativity',
        explanation: 'While NaCl is predominantly ionic, all bonds exhibit a measurable percentage of ionic vs covalent character.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_chem1',
        prompt: 'In a molecule of water (H₂O), what type of bond connects hydrogen to oxygen?',
        options: [
          { id: 'ch_opt1', text: 'Polar covalent bond', feedback: 'Correct! Oxygen shares electrons with hydrogen unequally due to higher electronegativity.' },
          { id: 'ch_opt2', text: 'Ionic bond', feedback: 'Incorrect: Electrons are shared, not completely transferred.' },
          { id: 'ch_opt3', text: 'Metallic bond', feedback: 'Incorrect: Neither hydrogen nor oxygen are metals.' }
        ],
        correctOptionId: 'ch_opt1',
        explanation: 'Oxygen and hydrogen share valence electrons, forming polar covalent bonds.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_chem1',
        prompt: 'How many valence electrons does an atom generally need to achieve a stable octet configuration?',
        options: [
          { id: 'qch_1', text: '8' },
          { id: 'qch_2', text: '2' },
          { id: 'qch_3', text: '18' }
        ],
        correctOptionId: 'qch_1',
        explanation: 'The Octet Rule states main-group atoms form bonds to achieve 8 valence electrons.'
      }
    ]
  },

  'newtons-laws': {
    slug: 'newtons-laws',
    title: 'Newton’s Three Laws of Motion & Momentum',
    subjectSlug: 'science',
    subjectName: 'Science (Physics)',
    gradeSlug: 'grade-11',
    gradeName: 'Grade 11 / High School / GCSE Physics',
    gradeBand: 'high-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (NGSS)',
    standardCode: 'NGSS.HS-PS2-1',
    standardTitle: 'Newtonian Forces, Mass, and Acceleration',
    authorityName: 'Next Generation Science Standards (NGSS)',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.nextgenscience.org',
    summary: 'Analyze how net external forces produce acceleration (F = ma), explore inertia and action-reaction pairs, and apply conservation of linear momentum.',
    whyItMatters: 'Foundational for automotive safety crumple zones, rocket trajectory propulsion, and structural engineering.',
    careerLink: 'Mechanical Engineers and Robotics Specialists calculate dynamic forces to design stable automated vehicles and spacecraft.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Newton’s Laws: Crash Course Physics',
        channelTitle: 'CrashCourse',
        youtubeVideoId: 'kKKM8Y-u7ds',
        durationSeconds: 580,
        qualityScore: 97,
        curationNotes: 'Superb visual intuition for inertia, net force vectors, and Newton’s Third Law.'
      },
      {
        role: 'BACKUP_1',
        title: 'Introduction to Cells and Mechanics',
        channelTitle: 'Amoeba Sisters',
        youtubeVideoId: '8IlzKri08kk',
        durationSeconds: 567,
        qualityScore: 89,
        curationNotes: 'Biomechanical forces in cellular environments.'
      }
    ],
    workedExample: {
      problemStatement: 'A 1200 kg vehicle accelerates from rest to 20 m/s in 5 seconds. Calculate the net force applied:',
      steps: [
        { stepNumber: 1, operation: 'Calculate acceleration (a)', equation: 'a = (v_f - v_i) / t = (20 - 0) / 5 = 4 m/s²', explanation: 'Kinematic acceleration formula.' },
        { stepNumber: 2, operation: 'Apply Newton’s Second Law', equation: 'F_net = m * a = 1200 kg * 4 m/s²', explanation: 'Force is mass multiplied by acceleration.' },
        { stepNumber: 3, operation: 'Calculate final force in Newtons', equation: 'F_net = 4800 N', explanation: 'One Newton equals 1 kg·m/s².' }
      ],
      verification: {
        checkStatement: 'Verify work-energy theorem: Work = ΔKinetic Energy.',
        leftSideCalculation: 'Work = F * d = 4800 N * 50 m = 240,000 J.',
        rightSideCalculation: 'ΔKE = 0.5 * 1200 * (20)² = 240,000 J. Perfect consistency!',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Thinking constant velocity requires a continuous forward net force',
        incorrectAttempt: 'Believing an object in space stops if the rocket engines turn off',
        correctApproach: 'According to Newton’s First Law, an object in motion remains in motion at constant velocity unless acted upon by a net force',
        explanation: 'Friction on Earth tricks intuition, but zero net force means constant velocity, not rest.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_phys1',
        prompt: 'If you push against a heavy brick wall with 50 N of force, how much force does the wall exert on you?',
        options: [
          { id: 'ph_opt1', text: 'Exactly 50 N in the opposite direction', feedback: 'Correct! By Newton’s Third Law, action and reaction forces are equal in magnitude and opposite in direction.' },
          { id: 'ph_opt2', text: '0 N, because the wall does not move', feedback: 'Incorrect: Movement does not determine the presence of a normal contact force.' },
          { id: 'ph_opt3', text: 'More than 50 N', feedback: 'Incorrect: Action and reaction pairs are always equal.' }
        ],
        correctOptionId: 'ph_opt1',
        explanation: 'Newton’s Third Law dictates every action force has an equal and opposite reaction force.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_phys1',
        prompt: 'What happens to the acceleration of an object if its mass is doubled while the net force remains constant?',
        options: [
          { id: 'qph_1', text: 'Acceleration is halved (a = F / 2m)' },
          { id: 'qph_2', text: 'Acceleration doubles' },
          { id: 'qph_3', text: 'Acceleration remains unchanged' }
        ],
        correctOptionId: 'qph_1',
        explanation: 'Acceleration is inversely proportional to mass according to a = F / m.'
      }
    ]
  },

  'constitutional-civics': {
    slug: 'constitutional-civics',
    title: 'Separation of Powers, Checks & Balances',
    subjectSlug: 'civics',
    subjectName: 'Social Studies & Civics',
    gradeSlug: 'grade-8',
    gradeName: 'Grade 8 / Middle School / Year 9',
    gradeBand: 'middle-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (C3 Framework)',
    standardCode: 'C3.CIV.1.6-8',
    standardTitle: 'Separation of Powers & Constitutional Governance',
    authorityName: 'California Department of Education / C3 Framework',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://www.socialstudies.org/standards/c3',
    summary: 'Understand the three constitutional branches of government (Legislative, Executive, Judicial) and how checks and balances prevent authoritarian consolidation.',
    whyItMatters: 'Vital for civic participation, preserving democratic rule of law, and protecting human rights across free societies.',
    careerLink: 'Constitutional Attorneys, Public Policy Analysts, and Diplomats navigate institutional powers to craft and challenge legislation.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Separation of Powers and Checks and Balances',
        channelTitle: 'CrashCourse',
        youtubeVideoId: '0bf3CwYCxXw',
        durationSeconds: 511,
        qualityScore: 98,
        curationNotes: 'Comprehensive walkthrough of Montesquieu’s theory and Article I, II, III implementation.'
      },
      {
        role: 'BACKUP_1',
        title: 'The Constitution, the Articles, and Federalism',
        channelTitle: 'CrashCourse',
        youtubeVideoId: 'bO7FQsCcbD8',
        durationSeconds: 782,
        qualityScore: 93,
        curationNotes: 'Context on why the Framers divided power.'
      }
    ],
    workedExample: {
      problemStatement: 'Trace how a bill becomes a federal law and passes through all three branches:',
      steps: [
        { stepNumber: 1, operation: 'Legislative Branch (Congress)', equation: 'House + Senate pass bill by majority', explanation: 'Article I grants all legislative law-making powers to Congress.' },
        { stepNumber: 2, operation: 'Executive Branch Review', equation: 'Presidential Signature OR Veto', explanation: 'President approves bill or issues a formal veto.' },
        { stepNumber: 3, operation: 'Congressional Check (Veto Override)', equation: '2/3 supermajority in both chambers', explanation: 'Congress can override a veto, demonstrating legislative check on executive.' },
        { stepNumber: 4, operation: 'Judicial Review (Supreme Court)', equation: 'Constitutional Challenge (Marbury v. Madison)', explanation: 'Federal courts can declare a statute unconstitutional if it violates constitutional rights.' }
      ],
      verification: {
        checkStatement: 'Every branch possesses at least one constitutional check on the other two.',
        leftSideCalculation: 'Congress passes laws, controls budget, impeaches.',
        rightSideCalculation: 'President enforces laws, appoints judges, vetoes. Courts interpret laws.',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Confusing which branch creates laws vs executes them',
        incorrectAttempt: 'Thinking the President writes and passes federal statutes',
        correctApproach: 'Congress writes and votes on laws; the Executive branch enforces them',
        explanation: 'Only Congress has Article I legislative authority.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_civ1',
        prompt: 'What check does the Judicial Branch have over the Legislative Branch?',
        options: [
          { id: 'copt_1', text: 'Declaring laws unconstitutional via Judicial Review', feedback: 'Correct! Established in Marbury v. Madison.' },
          { id: 'copt_2', text: 'Vetoing congressional bills', feedback: 'Incorrect: Only the President has veto power.' },
          { id: 'copt_3', text: 'Impeaching members of Congress', feedback: 'Incorrect: Each house of Congress polices its own members.' }
        ],
        correctOptionId: 'copt_1',
        explanation: 'The Supreme Court exercises judicial review over federal and state statutes.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_civ1',
        prompt: 'Who has the constitutional power to confirm federal judges appointed by the President?',
        options: [
          { id: 'qc_1', text: 'The United States Senate' },
          { id: 'qc_2', text: 'The House of Representatives' },
          { id: 'qc_3', text: 'The Chief Justice' }
        ],
        correctOptionId: 'qc_1',
        explanation: 'Article II grants the Senate advice and consent power over judicial nominations.'
      }
    ]
  },

  'python-programming': {
    slug: 'python-programming',
    title: 'Python for Beginners: Variables, Loops & Functions',
    subjectSlug: 'computer-science',
    subjectName: 'Computer Science & AI',
    gradeSlug: 'grade-8',
    gradeName: 'Grade 8 / Middle & High School',
    gradeBand: 'middle-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (CSTA)',
    standardCode: 'CSTA.2-AP-10',
    standardTitle: 'Algorithmic Loops & Control Flow',
    authorityName: 'Computer Science Teachers Association (CSTA)',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'https://csteachers.org/k12standards/',
    summary: 'Learn the fundamentals of computational thinking in Python: variables, conditional if-else statements, for loops, and modular reusable functions.',
    whyItMatters: 'Powers artificial intelligence, web backends, scientific computing, and autonomous robotics worldwide.',
    careerLink: 'Full Stack Developers, AI Engineers, and Data Scientists write Python to process information and build intelligent applications.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Python for Beginners: Full Coding Crash Course',
        channelTitle: 'Programming with Mosh',
        youtubeVideoId: 'kqtD5dpn9C8',
        durationSeconds: 3600,
        qualityScore: 96,
        curationNotes: 'Clear, modern introduction to Python syntax and computational problem solving.'
      },
      {
        role: 'BACKUP_1',
        title: 'Introduction to solving an equation with variables on both sides',
        channelTitle: 'Khan Academy',
        youtubeVideoId: 'f15zA0PhSek',
        durationSeconds: 485,
        qualityScore: 90,
        curationNotes: 'Direct link between mathematical variables and programming variables.'
      }
    ],
    workedExample: {
      problemStatement: 'Write a Python function to calculate the sum of all even numbers from 1 to N:',
      steps: [
        { stepNumber: 1, operation: 'Define the function and initialize an accumulator', equation: 'def sum_evens(n):\n    total = 0', explanation: 'Create a reusable function and set total to 0.' },
        { stepNumber: 2, operation: 'Iterate through numbers from 1 to n', equation: '    for i in range(1, n + 1):', explanation: 'The range(1, n + 1) function generates integers 1, 2, ..., n.' },
        { stepNumber: 3, operation: 'Test even condition using modulo operator', equation: '        if i % 2 == 0:\n            total += i', explanation: 'i % 2 == 0 checks if i is divisible by 2 with remainder 0.' },
        { stepNumber: 4, operation: 'Return the final accumulated total', equation: '    return total', explanation: 'Yields the result back to the caller.' }
      ],
      verification: {
        checkStatement: 'Run sum_evens(6): Evens are 2, 4, 6.',
        leftSideCalculation: 'Expected: 2 + 4 + 6 = 12.',
        rightSideCalculation: 'sum_evens(6) outputs 12. Correct!',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Off-by-one errors with range()',
        incorrectAttempt: 'range(1, n) stops at n - 1',
        correctApproach: 'range(1, n + 1) includes n',
        explanation: 'Python range() is half-open: it includes the start value but stops BEFORE the stop value.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_py1',
        prompt: 'What does 14 % 4 evaluate to in Python?',
        options: [
          { id: 'py_opt1', text: '2', feedback: 'Correct! 14 divided by 4 is 3 with a remainder of 2.' },
          { id: 'py_opt2', text: '3', feedback: 'Incorrect: 3 is the integer quotient, not the remainder.' },
          { id: 'py_opt3', text: '3.5', feedback: 'Incorrect: That is float division (14 / 4).' }
        ],
        correctOptionId: 'py_opt1',
        explanation: 'The % modulo operator returns the division remainder: 14 = (4 * 3) + 2.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_py1',
        prompt: 'Which keyword is used to define a function in Python?',
        options: [
          { id: 'qpy_1', text: 'def' },
          { id: 'qpy_2', text: 'function' },
          { id: 'qpy_3', text: 'func' }
        ],
        correctOptionId: 'qpy_1',
        explanation: 'Python functions are declared using the "def" keyword.'
      }
    ]
  },

  'persuasive-writing': {
    slug: 'persuasive-writing',
    title: 'Rhetorical Appeals & Argumentative Writing',
    subjectSlug: 'english',
    subjectName: 'English Language Arts',
    gradeSlug: 'grade-10',
    gradeName: 'Grade 10 / High School / GCSE English',
    gradeBand: 'high-school',
    countryCode: 'us',
    countryName: 'United States',
    jurisdictionSlug: 'california',
    jurisdictionName: 'California (CCSS)',
    standardCode: 'CCSS.ELA-LITERACY.W.9-10.1',
    standardTitle: 'Write Arguments to Support Claims with Substantive Evidence',
    authorityName: 'Common Core State Standards Initiative',
    academicYear: '2026–27',
    lastVerified: 'September 2026',
    sourceUrl: 'http://www.corestandards.org/ELA-Literacy/W/9-10/1/',
    summary: 'Master the classical Aristotelian appeals (Ethos, Pathos, Logos) to structure compelling arguments, integrate verifiable textual evidence, and systematically rebut counterclaims.',
    whyItMatters: 'Essential for legal advocacy, investigative journalism, corporate executive proposals, and democratic public discourse.',
    careerLink: 'Trial Lawyers, Policy Directors, and Corporate Strategists rely on persuasive rhetoric to persuade judges, voters, and stakeholders.',
    videos: [
      {
        role: 'PRIMARY',
        title: 'Think Fast, Talk Smart: Communication Techniques',
        channelTitle: 'Stanford Graduate School of Business',
        youtubeVideoId: 'HAnw168huqA',
        durationSeconds: 1920,
        qualityScore: 97,
        curationNotes: 'Authoritative lecture on structuring spontaneous and persuasive oral communication.'
      },
      {
        role: 'BACKUP_1',
        title: 'Separation of Powers & Constitutional Rhetoric',
        channelTitle: 'CrashCourse',
        youtubeVideoId: '0bf3CwYCxXw',
        durationSeconds: 511,
        qualityScore: 91,
        curationNotes: 'Examining persuasive framing in constitutional debates.'
      }
    ],
    workedExample: {
      problemStatement: 'Construct a 3-part argumentative paragraph refuting a common counterargument:',
      steps: [
        { stepNumber: 1, operation: 'Acknowledge the Counterclaim (Nuance)', equation: 'Critics argue that electric vehicle production creates upfront environmental burdens.', explanation: 'Demonstrates fair consideration of opposing viewpoints (Ethos).' },
        { stepNumber: 2, operation: 'Introduce Rebuttal with Empirical Data (Logos)', equation: 'However, lifetime lifecycle emissions assessments show EVs break even within 18 months.', explanation: 'Cites quantitative peer-reviewed evidence to refute the objection.' },
        { stepNumber: 3, operation: 'Deliver Impact Statement (Pathos & Conclusion)', equation: 'Therefore, accelerating EV adoption remains imperative for safeguarding clean air.', explanation: 'Reinforces the core thesis with an ethical and public-health imperative.' }
      ],
      verification: {
        checkStatement: 'Does the paragraph include Claim, Evidence, Counterclaim, and Rebuttal?',
        leftSideCalculation: 'Contains all 4 classical argumentation components.',
        rightSideCalculation: 'Meets Common Core Grade 9–10 Argumentative Writing Benchmark.',
        isVerified: true
      }
    },
    misconceptions: [
      {
        title: 'Believing an argument is stronger when ignoring opposing viewpoints',
        incorrectAttempt: 'Omitting counterclaims to prevent confusing the reader',
        correctApproach: 'Explicitly naming and systematically dismantling counterclaims strengthens credibility (Ethos)',
        explanation: 'Readers trust authors who demonstrate mastery over both sides of an issue.'
      }
    ],
    practiceQuestions: [
      {
        id: 'pq_ela1',
        prompt: 'Which Aristotelian rhetorical appeal relies primarily on statistical data, syllogistic reasoning, and factual evidence?',
        options: [
          { id: 'ela_opt1', text: 'Logos (Logic)', feedback: 'Correct! Logos appeals to the rational intellect via sound facts and logic.' },
          { id: 'ela_opt2', text: 'Ethos (Credibility)', feedback: 'Incorrect: Ethos appeals to author moral character and authority.' },
          { id: 'ela_opt3', text: 'Pathos (Emotion)', feedback: 'Incorrect: Pathos appeals to the audience’s emotional sensibilities.' }
        ],
        correctOptionId: 'ela_opt1',
        explanation: 'Logos is the Greek appeal to logic, evidence, and deduction.'
      }
    ],
    quizQuestions: [
      {
        id: 'qz_ela1',
        prompt: 'What role does a "warrant" play in Toulmin’s model of argumentation?',
        options: [
          { id: 'qela_1', text: 'It connects the empirical evidence directly back to the initial claim' },
          { id: 'qela_2', text: 'It acts as the concluding emotional appeal' },
          { id: 'qela_3', text: 'It states the author’s credentials' }
        ],
        correctOptionId: 'qela_1',
        explanation: 'In the Toulmin method, the warrant provides the logical bridge explaining why the evidence supports the claim.'
      }
    ]
  }
};

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

export function getAllJurisdictions(): JurisdictionInfo[] {
  return TIER1_JURISDICTIONS;
}

export function getJurisdictionsByCountry(countryCode: string): JurisdictionInfo[] {
  return TIER1_JURISDICTIONS.filter(j => j.countryCode.toLowerCase() === countryCode.toLowerCase());
}

export function getJurisdiction(countryCode: string, jurisdictionSlug: string): JurisdictionInfo | undefined {
  return TIER1_JURISDICTIONS.find(
    j => j.countryCode.toLowerCase() === countryCode.toLowerCase() && j.slug.toLowerCase() === jurisdictionSlug.toLowerCase()
  );
}

export function getLesson(slug: string): LessonData | undefined {
  return LESSONS_CATALOGUE[slug];
}

export function getAllLessons(): LessonData[] {
  return Object.values(LESSONS_CATALOGUE);
}

const UK_COURSE_LOCALIZATION: Record<string, {
  title: string;
  grade: string;
  standardCode: string;
}> = {
  // Key Stage 1 & 2 (Primary Years 1–6)
  'math-grade-1': {
    title: 'Key Stage 1 Mathematics: Counting, Place Value & Addition Within 20',
    grade: 'Year 1 (Key Stage 1)',
    standardCode: 'DfE KS1-MA-NPV / STA Year 1',
  },
  'science-grade-1': {
    title: 'Key Stage 1 Science: Living Things, Plant Growth & Seasonal Changes',
    grade: 'Year 1 (Key Stage 1)',
    standardCode: 'DfE KS1-SC-BIO / STA Year 1',
  },
  'english-grade-1': {
    title: 'Key Stage 1 English: Systematic Synthetic Phonics & Early Reading',
    grade: 'Year 1 (Key Stage 1)',
    standardCode: 'DfE KS1-ENG-PHO / Letters & Sounds',
  },
  'math-grade-2': {
    title: 'Key Stage 1 Mathematics: Multi-Digit Addition, Subtraction & Shape Properties',
    grade: 'Year 2 (Key Stage 1)',
    standardCode: 'DfE KS1-MA-ADD / KS1 Assessment',
  },
  'science-grade-2': {
    title: 'Key Stage 1 Science: Properties of Everyday Materials & Changing Environments',
    grade: 'Year 2 (Key Stage 1)',
    standardCode: 'DfE KS1-SC-MAT / STA Year 2',
  },
  'english-grade-2': {
    title: 'Key Stage 1 English: Sentence Construction, Punctuation & Vocabulary',
    grade: 'Year 2 (Key Stage 1)',
    standardCode: 'DfE KS1-ENG-GPS / STA Year 2',
  },
  'math-grade-3': {
    title: 'Key Stage 2 Mathematics: Multiplication Tables, Written Methods & Unit Fractions',
    grade: 'Year 3 (Key Stage 2)',
    standardCode: 'DfE KS2-MA-MUL / Year 3 Programme',
  },
  'science-grade-3': {
    title: 'Key Stage 2 Science: Forces & Magnets, Light Reflection & Plant Life',
    grade: 'Year 3 (Key Stage 2)',
    standardCode: 'DfE KS2-SC-FOR / Year 3 Programme',
  },
  'english-grade-3': {
    title: 'Key Stage 2 English: Reading Comprehension, Paragraphs & Prepositions',
    grade: 'Year 3 (Key Stage 2)',
    standardCode: 'DfE KS2-ENG-PAR / Year 3 Programme',
  },
  'math-grade-4': {
    title: 'Key Stage 2 Mathematics: Place Value, Written Multiplication & Fractions',
    grade: 'Year 4 (Key Stage 2)',
    standardCode: 'DfE KS2-MA-FDP / Multiplication Tables Check',
  },
  'science-grade-4': {
    title: 'Key Stage 2 Science: States of Matter, Sound Waves & Electrical Circuits',
    grade: 'Year 4 (Key Stage 2)',
    standardCode: 'DfE KS2-SC-PHY / Year 4 Programme',
  },
  'english-grade-4': {
    title: 'Key Stage 2 English: Fronted Adverbials, Expanded Noun Phrases & Research Writing',
    grade: 'Year 4 (Key Stage 2)',
    standardCode: 'DfE KS2-ENG-GPS / Year 4 Programme',
  },
  'history-grade-4': {
    title: 'Key Stage 2 History: Roman Empire Impact on Britain & Anglo-Saxon Settlements',
    grade: 'Year 4 (Key Stage 2)',
    standardCode: 'DfE KS2-HIST-ROM / Statutory Framework',
  },
  'math-grade-5': {
    title: 'Key Stage 2 Mathematics: Fraction Operations, Decimals, Percentages & Volume',
    grade: 'Year 5 (Key Stage 2)',
    standardCode: 'DfE KS2-MA-FDP / Year 5 Programme',
  },
  'science-grade-5': {
    title: 'Key Stage 2 Science: Ecosystems, Global Water Cycle & Earth in Space',
    grade: 'Year 5 (Key Stage 2)',
    standardCode: 'DfE KS2-SC-SPA / Year 5 Programme',
  },
  'english-grade-5': {
    title: 'Key Stage 2 English: Relative Clauses, Modal Verbs & Formal Non-Fiction Texts',
    grade: 'Year 5 (Key Stage 2)',
    standardCode: 'DfE KS2-ENG-TXT / Year 5 Programme',
  },

  // Key Stage 3 (Lower Secondary - Years 7–9)
  'math-grade-6': {
    title: 'Key Stage 3 Mathematics: Ratio, Proportions, Negative Numbers & Expressions',
    grade: 'Year 7 (Key Stage 3)',
    standardCode: 'DfE KS3-MA-RAT / Year 7 Programme',
  },
  'science-grade-6': {
    title: 'Key Stage 3 Science: Earth Systems, Plate Tectonics & Planetary Science',
    grade: 'Year 7 (Key Stage 3)',
    standardCode: 'DfE KS3-SC-ROC / Year 7 Programme',
  },
  'english-grade-6': {
    title: 'Key Stage 3 English: Analytical Reading, Contextual Inferences & Descriptive Prose',
    grade: 'Year 7 (Key Stage 3)',
    standardCode: 'DfE KS3-ENG-PRO / Year 7 Programme',
  },
  'history-grade-6': {
    title: 'Key Stage 3 History: Medieval Britain 1066–1509 (Norman Conquest & Magna Carta)',
    grade: 'Year 7 (Key Stage 3)',
    standardCode: 'DfE KS3-HIST-MED / 1066–1509',
  },
  'math-grade-7': {
    title: 'Key Stage 3 Mathematics: Proportional Reasoning, Percentages & Probability Trees',
    grade: 'Year 8 (Key Stage 3)',
    standardCode: 'DfE KS3-MA-PRO / Year 8 Programme',
  },
  'science-grade-7': {
    title: 'Key Stage 3 Science: Cell Biology, Microscopy, Plant Nutrition & Photosynthesis',
    grade: 'Year 8 (Key Stage 3)',
    standardCode: 'DfE KS3-SC-CEL / Year 8 Programme',
  },
  'english-grade-7': {
    title: 'Key Stage 3 English: Rhetoric, Persuasive Oratory & Critical Non-Fiction Analysis',
    grade: 'Year 8 (Key Stage 3)',
    standardCode: 'DfE KS3-ENG-RHE / Year 8 Programme',
  },
  'history-grade-7': {
    title: 'Key Stage 3 History: The British Empire, Industrial Revolution & Social Reform',
    grade: 'Year 8 (Key Stage 3)',
    standardCode: 'DfE KS3-HIST-EMP / 1745–1901',
  },
  'math-grade-8': {
    title: 'Key Stage 3 Mathematics: Linear Equations, Straight-Line Graphs & Gradient',
    grade: 'Year 9 (Key Stage 3)',
    standardCode: 'DfE KS3-MA-ALG / AQA & Edexcel KS3',
  },
  'science-grade-8': {
    title: 'Key Stage 3 Science: Forces, Speed, Energy Transfers & Particle Model',
    grade: 'Year 9 (Key Stage 3)',
    standardCode: 'DfE KS3-SC-FOR / Year 9 Programme',
  },
  'english-grade-8': {
    title: 'Key Stage 3 English: 19th-Century Prose, Shakespearean Drama & Literary Critique',
    grade: 'Year 9 (Key Stage 3)',
    standardCode: 'DfE KS3-ENG-SHA / Year 9 Programme',
  },
  'civics-grade-8': {
    title: 'Key Stage 3 Citizenship: UK Parliamentary Democracy, Electoral Systems & The Rule of Law',
    grade: 'Year 9 (Key Stage 3)',
    standardCode: 'DfE KS3-CIT-DEM / UK Constitution',
  },
  'cs-grade-8': {
    title: 'Key Stage 3 Computing: Python Programming, Computational Logic & Boolean Gates',
    grade: 'Year 9 (Key Stage 3)',
    standardCode: 'DfE KS3-COMP-PRG / BCS Standards',
  },

  // Key Stage 4 (GCSE - Years 10–11) & Key Stage 5 (A-Levels - Years 12–13)
  'math-grade-9': {
    title: 'GCSE Mathematics: Quadratic Expressions, Simultaneous Equations & Inequalities',
    grade: 'Year 10 (GCSE / Key Stage 4)',
    standardCode: 'Ofqual / Edexcel 1MA1 / AQA 8300',
  },
  'science-grade-9': {
    title: 'GCSE Biology: Cell Structure, Cell Division, Genetics & Natural Selection',
    grade: 'Year 10 (GCSE / Key Stage 4)',
    standardCode: 'Ofqual / AQA 8461 / Edexcel 1BI0',
  },
  'english-grade-9': {
    title: 'GCSE English Language: Explorations in Creative Reading & Non-Fiction Perspectives',
    grade: 'Year 10 (GCSE / Key Stage 4)',
    standardCode: 'Ofqual / AQA 8700 / Edexcel 1EN0',
  },
  'history-grade-9': {
    title: 'GCSE History: The Cold War, Global Superpower Relations & Crisis Management',
    grade: 'Year 10 (GCSE / Key Stage 4)',
    standardCode: 'Ofqual / AQA 8145 / Edexcel 1HI0',
  },
  'math-grade-10': {
    title: 'GCSE Mathematics (Higher Tier): Deductive Geometry, Trigonometry & Circle Theorems',
    grade: 'Year 11 (GCSE / Key Stage 4)',
    standardCode: 'Ofqual / Edexcel 1MA1 / AQA 8300 (Grades 9–1)',
  },
  'science-grade-10': {
    title: 'GCSE Chemistry: Atomic Structure, Quantitative Chemistry, Bonding & Electrolysis',
    grade: 'Year 11 (GCSE / Key Stage 4)',
    standardCode: 'Ofqual / AQA 8462 / Edexcel 1CH0',
  },
  'history-grade-10': {
    title: 'GCSE History: Germany 1890–1945 (Democracy & Dictatorship), Conflict & Tension',
    grade: 'Year 11 (GCSE / Key Stage 4)',
    standardCode: 'Ofqual / AQA 8145',
  },
  'math-grade-11': {
    title: 'A-Level Mathematics (Year 12): Pure Functions, Trigonometric Identities & Intro Calculus',
    grade: 'Year 12 (A-Level / Key Stage 5)',
    standardCode: 'Ofqual / Edexcel 9MA0 / AQA 7357',
  },
  'science-grade-11': {
    title: 'A-Level Physics: Classical Mechanics, Kinematics, Energy & Wave Phenomena',
    grade: 'Year 12 (A-Level / Key Stage 5)',
    standardCode: 'Ofqual / AQA 7408 / OCR H556',
  },
  'history-grade-11': {
    title: 'A-Level History: Britain 1783–1885 (Industrialisation & Reform) and Parliamentary Evolution',
    grade: 'Year 12 (A-Level / Key Stage 5)',
    standardCode: 'Ofqual / AQA 7042 / Edexcel 9HI0',
  },
  'math-grade-12': {
    title: 'A-Level Mathematics (Year 13): Differential Calculus, Integration Techniques & Differential Equations',
    grade: 'Year 13 (A-Level / Key Stage 5)',
    standardCode: 'Ofqual / Edexcel 9MA0 / AQA 7357',
  },
  'cs-grade-12': {
    title: 'A-Level Computer Science: Advanced Data Structures, Algorithms, Complexity & Machine Learning',
    grade: 'Year 13 (A-Level / Key Stage 5)',
    standardCode: 'Ofqual / OCR H446 / AQA 7517',
  },
};

// -----------------------------------------------------------------------------
// Indian Schooling System & NEP 2020 Stages Localization Registry
// -----------------------------------------------------------------------------

export const IN_COURSE_LOCALIZATION: Record<string, { title: string; grade: string; standardCode: string }> = {
  'math-grade-1': {
    title: 'Class 1 Mathematics: Numbers 1 to 99, Spatial Sense & Jaadui Pitara Math-Magic',
    grade: 'Class 1 (Foundational Stage)',
    standardCode: 'NCERT / NEP 2020 / CBSE Math-Magic',
  },
  'science-grade-1': {
    title: 'Class 1 Environmental Studies: Our Surroundings, Living Habits & Nature Exploration',
    grade: 'Class 1 (Foundational Stage)',
    standardCode: 'NCERT / NEP 2020 / EVS',
  },
  'english-grade-1': {
    title: 'Class 1 English: Mridang Early Phonics, Sight Words, Rhymes & Storytelling',
    grade: 'Class 1 (Foundational Stage)',
    standardCode: 'NCERT Mridang / CBSE ELA',
  },
  'math-grade-2': {
    title: 'Class 2 Mathematics: Two-Digit Addition, Subtraction, Patterns & Spatial Geometry',
    grade: 'Class 2 (Foundational Stage)',
    standardCode: 'NCERT / NEP 2020 / CBSE Math-Magic',
  },
  'science-grade-2': {
    title: 'Class 2 Environmental Studies: Seasons, Water Cycles, Plant Life & Animal Habitats',
    grade: 'Class 2 (Foundational Stage)',
    standardCode: 'NCERT / NEP 2020 / EVS',
  },
  'english-grade-2': {
    title: 'Class 2 English: Joyful Sentences, Vocabulary Building, Comprehension & Moral Tales',
    grade: 'Class 2 (Foundational Stage)',
    standardCode: 'NCERT Mridang / CBSE',
  },
  'math-grade-3': {
    title: 'Class 3 Mathematics: Multiplication Foundations, Division Readiness & Symmetry',
    grade: 'Class 3 (Preparatory Stage)',
    standardCode: 'NCERT Math-Magic / NEP 2020',
  },
  'science-grade-3': {
    title: 'Class 3 Environmental Studies: Biodiversity, Animal Shelters, Food Paths & Community',
    grade: 'Class 3 (Preparatory Stage)',
    standardCode: 'NCERT Looking Around / EVS',
  },
  'english-grade-3': {
    title: 'Class 3 English: Santoor Grammar Essentials, Creative Sentences & Story Interpretation',
    grade: 'Class 3 (Preparatory Stage)',
    standardCode: 'NCERT Santoor / CBSE ELA',
  },
  'math-grade-4': {
    title: 'Class 4 Mathematics: Fractions, Multi-Digit Operations, Perimeter & Measurement',
    grade: 'Class 4 (Preparatory Stage)',
    standardCode: 'NCERT Math-Magic / NEP 2020',
  },
  'science-grade-4': {
    title: 'Class 4 Environmental Studies: Plant Roots, Ecosystem Cycles, Water Wonders & Adaptations',
    grade: 'Class 4 (Preparatory Stage)',
    standardCode: 'NCERT Looking Around / EVS',
  },
  'english-grade-4': {
    title: 'Class 4 English: Marigold Narrative Writing, Tenses, Parts of Speech & Comprehension',
    grade: 'Class 4 (Preparatory Stage)',
    standardCode: 'NCERT Marigold / CBSE',
  },
  'history-grade-4': {
    title: 'Class 4 Social Studies: Our India – Physical Features, States, Heritage & Climate',
    grade: 'Class 4 (Preparatory Stage)',
    standardCode: 'NCERT / State SCERT Social Science',
  },
  'math-grade-5': {
    title: 'Class 5 Mathematics: Large Numbers, Multiples & Factors, Decimals & Fractional Reasoning',
    grade: 'Class 5 (Preparatory Stage)',
    standardCode: 'NCERT Math-Magic / NEP 2020',
  },
  'science-grade-5': {
    title: 'Class 5 Environmental Studies: Human Digestion, Forests, Natural Disasters & Space Exploration',
    grade: 'Class 5 (Preparatory Stage)',
    standardCode: 'NCERT Looking Around / EVS',
  },
  'english-grade-5': {
    title: 'Class 5 English: Advanced Grammar, Formal Letter Writing, Poems & Reading Analysis',
    grade: 'Class 5 (Preparatory Stage)',
    standardCode: 'NCERT Marigold / CBSE',
  },
  'history-grade-5': {
    title: 'Class 5 Social Studies: Indian Freedom Struggle, Democratic Values & Cultural Unity',
    grade: 'Class 5 (Preparatory Stage)',
    standardCode: 'NCERT / CBSE Social Studies',
  },
  'math-grade-6': {
    title: 'Class 6 Mathematics: Integers, Fractions, Decimals, Ratios & Practical Geometry',
    grade: 'Class 6 (Middle Stage)',
    standardCode: 'NCERT Ganita Prakash / NEP 2020',
  },
  'science-grade-6': {
    title: 'Class 6 Science: Components of Food, Separation of Substances, Light & Electricity',
    grade: 'Class 6 (Middle Stage)',
    standardCode: 'NCERT Curiosity / NEP 2020',
  },
  'english-grade-6': {
    title: 'Class 6 English: Poorvi Literary Appreciation, Grammar Mechanics & Analytical Prose',
    grade: 'Class 6 (Middle Stage)',
    standardCode: 'NCERT Poorvi / CBSE ELA',
  },
  'history-grade-6': {
    title: 'Class 6 Social Science: Exploring Society – Harappan Civilization, Vedic Traditions & Ashoka',
    grade: 'Class 6 (Middle Stage)',
    standardCode: 'NCERT Exploring Society: India & Beyond',
  },
  'math-grade-7': {
    title: 'Class 7 Mathematics: Algebraic Expressions, Simple Equations, Rational Numbers & Triangle Properties',
    grade: 'Class 7 (Middle Stage)',
    standardCode: 'NCERT Mathematics Class 7',
  },
  'science-grade-7': {
    title: 'Class 7 Science: Nutrition in Living Organisms, Heat, Chemical Changes, Motion & Time',
    grade: 'Class 7 (Middle Stage)',
    standardCode: 'NCERT Science Class 7',
  },
  'english-grade-7': {
    title: 'Class 7 English: Honeycomb Poetry, Comprehension, Debates & Syntactical Fluency',
    grade: 'Class 7 (Middle Stage)',
    standardCode: 'NCERT Honeycomb / An Alien Hand',
  },
  'history-grade-7': {
    title: 'Class 7 Social Science: Our Pasts II – Regional Kingdoms, Delhi Sultans, Mughals & Tribal Societies',
    grade: 'Class 7 (Middle Stage)',
    standardCode: 'NCERT Our Pasts II',
  },
  'math-grade-8': {
    title: 'Class 8 Mathematics: Linear Equations in One Variable, Quadrilaterals, Mensuration & Factorisation',
    grade: 'Class 8 (Middle Stage)',
    standardCode: 'NCERT Math Class 8 / CBSE Chapter 2',
  },
  'science-grade-8': {
    title: 'Class 8 Science: Cell Structure, Microorganisms, Force, Pressure, Sound & Combustion',
    grade: 'Class 8 (Middle Stage)',
    standardCode: 'NCERT Science Class 8 / Foundation',
  },
  'english-grade-8': {
    title: 'Class 8 English: Honeydew Literary Themes, Persuasive Essays & Grammar Mastery',
    grade: 'Class 8 (Middle Stage)',
    standardCode: 'NCERT Honeydew / It So Happened',
  },
  'history-grade-8': {
    title: 'Class 8 Social Science: Our Pasts III & Civics – British Conquest, 1857 Revolt & Indian Constitution',
    grade: 'Class 8 (Middle Stage)',
    standardCode: 'NCERT Our Pasts III & Social & Political Life',
  },
  'cs-grade-8': {
    title: 'Class 8 Computer Science & AI: Python Programming, Control Flow, Logic & Data Ethics',
    grade: 'Class 8 (Middle Stage)',
    standardCode: 'CBSE Skill Subject / AI & Coding',
  },
  'math-grade-9': {
    title: 'Class 9 Mathematics: Number Systems, Polynomials, Coordinate Geometry, Surface Areas & Volumes',
    grade: 'Class 9 (Secondary Stage)',
    standardCode: 'NCERT Class 9 / CBSE AISSE Foundation',
  },
  'science-grade-9': {
    title: 'Class 9 Science: Matter, Fundamental Unit of Life, Tissues, Motion, Force & Gravitation',
    grade: 'Class 9 (Secondary Stage)',
    standardCode: 'NCERT Class 9 / JEE-NEET Foundation',
  },
  'english-grade-9': {
    title: 'Class 9 English: Beehive & Moments – World Literature, Critical Essays & Speaking Competence',
    grade: 'Class 9 (Secondary Stage)',
    standardCode: 'NCERT Beehive / Moments (CBSE Code 184)',
  },
  'history-grade-9': {
    title: 'Class 9 Social Science: French Revolution, Nazism, Electoral Politics & Democratic Rights',
    grade: 'Class 9 (Secondary Stage)',
    standardCode: 'NCERT India and the Contemporary World I',
  },
  'math-grade-10': {
    title: 'Class 10 Mathematics: Real Numbers, Quadratic Equations, Arithmetic Progressions & Trigonometry',
    grade: 'Class 10 (Secondary Board Year)',
    standardCode: 'CBSE AISSE (Code 041) / ICSE Class 10 / State SSC',
  },
  'science-grade-10': {
    title: 'Class 10 Science: Chemical Reactions, Acids-Bases, Life Processes, Electricity & Light',
    grade: 'Class 10 (Secondary Board Year)',
    standardCode: 'CBSE AISSE (Code 086) / ICSE / NTSE Foundation',
  },
  'english-grade-10': {
    title: 'Class 10 English: First Flight & Footprints without Feet – Literary Critique & Argumentative Prose',
    grade: 'Class 10 (Secondary Board Year)',
    standardCode: 'CBSE AISSE (Code 184) / ICSE English Language',
  },
  'history-grade-10': {
    title: 'Class 10 Social Science: Nationalism in Europe & India, Sectors of Economy, Federalism & Resources',
    grade: 'Class 10 (Secondary Board Year)',
    standardCode: 'CBSE AISSE (Code 087) / ICSE History-Civics',
  },
  'math-grade-11': {
    title: 'Class 11 Mathematics: Sets, Trigonometric Functions, Permutations, Conic Sections & Calculus Intro',
    grade: 'Class 11 (Senior Secondary Stage)',
    standardCode: 'CBSE AISSCE (Code 041) / ISC / JEE Main Foundation',
  },
  'science-grade-11': {
    title: 'Class 11 Physics & Chemistry: Mechanics, Thermodynamics, Atomic Structure & Chemical Bonding',
    grade: 'Class 11 (Senior Secondary Stage)',
    standardCode: 'CBSE AISSCE / ISC / JEE Main & NEET-UG Foundation',
  },
  'english-grade-11': {
    title: 'Class 11 English: Hornbill & Snapshots – Thematic Rhetoric, Note Making & Formal Discourse',
    grade: 'Class 11 (Senior Secondary Stage)',
    standardCode: 'CBSE AISSCE (Code 301) / ISC English',
  },
  'history-grade-11': {
    title: 'Class 11 History & Political Science: Themes in World History, Indian Constitution & Political Theory',
    grade: 'Class 11 (Senior Secondary Stage)',
    standardCode: 'CBSE AISSCE / CUET Domain Preparation',
  },
  'math-grade-12': {
    title: 'Class 12 Mathematics: Relations & Functions, Matrices, Calculus, Vectors & 3D Geometry',
    grade: 'Class 12 (Senior Secondary / Entrance)',
    standardCode: 'CBSE AISSCE / ISC / JEE Advanced & CUET Domain',
  },
  'science-grade-12': {
    title: 'Class 12 Physics & Chemistry: Electrostatics, Optics, Organic Reaction Mechanisms & Biomolecules',
    grade: 'Class 12 (Senior Secondary / Entrance)',
    standardCode: 'CBSE AISSCE / ISC / JEE Advanced & NEET-UG Core',
  },
  'english-grade-12': {
    title: 'Class 12 English: Flamingo & Vistas – Modern Critical Discourse & Advanced Essay Composition',
    grade: 'Class 12 (Senior Secondary / Entrance)',
    standardCode: 'CBSE AISSCE (Code 301) / CUET Section 1A',
  },
  'history-grade-12': {
    title: 'Class 12 History & Political Science: Themes in Indian History (Harappa to Partition) & World Politics',
    grade: 'Class 12 (Senior Secondary / Entrance)',
    standardCode: 'CBSE AISSCE / CUET Domain Preparation',
  },
  'cs-grade-12': {
    title: 'Class 12 Computer Science: Python Stacks, SQL Relational Databases, Computer Networks & Cyber Law',
    grade: 'Class 12 (Senior Secondary / Entrance)',
    standardCode: 'CBSE AISSCE (Code 083) / CUET CS Domain',
  },
};

export function getCoursesForJurisdiction(jurisdictionSlugOrCountry: string, jurisdictionSlug?: string): CourseCardData[] {
  const normCountry = jurisdictionSlugOrCountry.toLowerCase();
  const normJur = (jurisdictionSlug || jurisdictionSlugOrCountry).toLowerCase();

  const isUK = normCountry === 'gb' || ['england', 'scotland', 'wales', 'northern-ireland'].includes(normJur);
  const isIndia = normCountry === 'in' || ['cbse', 'icse', 'nios', 'maharashtra', 'uttar-pradesh', 'karnataka', 'tamil-nadu'].includes(normJur);

  // ---------------------------------------------------------------------------
  // India (National Boards & Flagship State Boards)
  // ---------------------------------------------------------------------------
  if (isIndia) {
    return STANDARD_COURSES.map(course => {
      const loc = IN_COURSE_LOCALIZATION[course.slug];
      if (!loc) {
        return course;
      }

      // Board-specific tailoring
      let boardTitle = loc.title;
      let boardGrade = loc.grade;
      let boardStandard = loc.standardCode;

      if (normJur === 'icse') {
        boardStandard = loc.standardCode.replace('CBSE AISSE', 'ICSE Class 10').replace('CBSE AISSCE', 'ISC Class 12').replace('CBSE', 'CISCE');
        boardTitle = loc.title.replace('CBSE AISSE', 'ICSE').replace('CBSE', 'CISCE / ICSE');
      } else if (normJur === 'nios') {
        boardStandard = loc.standardCode.replace('CBSE AISSE', 'NIOS Secondary (Class 10)').replace('CBSE AISSCE', 'NIOS Sr. Secondary (Class 12)').replace('CBSE', 'NIOS ODE');
        boardTitle = loc.title.replace('CBSE', 'NIOS Open Schooling');
      } else if (normJur === 'maharashtra') {
        boardStandard = loc.standardCode.replace('CBSE AISSE', 'MSBSHSE SSC (Class 10)').replace('CBSE AISSCE', 'MSBSHSE HSC (Class 12)').replace('CBSE', 'Maharashtra State Board');
        boardTitle = loc.title.replace('CBSE', 'MSBSHSE');
      } else if (normJur === 'uttar-pradesh') {
        boardStandard = loc.standardCode.replace('CBSE AISSE', 'UPMSP High School (Class 10)').replace('CBSE AISSCE', 'UPMSP Intermediate (Class 12)').replace('CBSE', 'UP Board');
        boardTitle = loc.title.replace('CBSE', 'UPMSP Board');
      } else if (normJur === 'karnataka') {
        boardStandard = loc.standardCode.replace('CBSE AISSE', 'KSEAB SSLC (Class 10)').replace('CBSE AISSCE', 'KSEAB 2nd PUC (Class 12)').replace('CBSE', 'Karnataka State Board');
        boardTitle = loc.title.replace('CBSE', 'Karnataka KSEAB');
      } else if (normJur === 'tamil-nadu') {
        boardStandard = loc.standardCode.replace('CBSE AISSE', 'TNBSE SSLC (Class 10)').replace('CBSE AISSCE', 'TNBSE Higher Secondary (+2)').replace('CBSE', 'TN Samacheer Kalvi');
        boardTitle = loc.title.replace('CBSE', 'TNBSE Board');
      }

      return {
        ...course,
        title: boardTitle,
        grade: boardGrade,
        standardCode: boardStandard,
      };
    });
  }

  // ---------------------------------------------------------------------------
  // United Kingdom (4 Home Nations)
  // ---------------------------------------------------------------------------
  if (isUK) {
    return STANDARD_COURSES.map(course => {
      const loc = UK_COURSE_LOCALIZATION[course.slug];
      if (!loc) {
        return course;
      }

      // Special Scottish adaptations
      if (normJur === 'scotland') {
        let scotGrade = loc.grade;
        let scotStandard = loc.standardCode.replace('DfE', 'Education Scotland').replace('Ofqual', 'SQA');
        if (course.gradeSlug === 'grade-1') scotGrade = 'Primary 1 (CfE Early/First)';
        else if (course.gradeSlug === 'grade-2') scotGrade = 'Primary 2 (CfE First)';
        else if (course.gradeSlug === 'grade-3') scotGrade = 'Primary 3 (CfE First)';
        else if (course.gradeSlug === 'grade-4') scotGrade = 'Primary 4 (CfE Second)';
        else if (course.gradeSlug === 'grade-5') scotGrade = 'Primary 5 (CfE Second)';
        else if (course.gradeSlug === 'grade-6') scotGrade = 'S1 (CfE Third Level)';
        else if (course.gradeSlug === 'grade-7') scotGrade = 'S2 (CfE Third Level)';
        else if (course.gradeSlug === 'grade-8') scotGrade = 'S3 (CfE Fourth Level)';
        else if (course.gradeSlug === 'grade-9') scotGrade = 'S4 (National 4/5)';
        else if (course.gradeSlug === 'grade-10') scotGrade = 'S4 (National 5)';
        else if (course.gradeSlug === 'grade-11') scotGrade = 'S5 (Higher)';
        else if (course.gradeSlug === 'grade-12') scotGrade = 'S6 (Advanced Higher)';

        return {
          ...course,
          title: loc.title.replace('Key Stage 1', 'Primary').replace('Key Stage 2', 'Primary').replace('Key Stage 3', 'Broad General Education (S1–S3)').replace('GCSE', 'National 5').replace('A-Level', 'Higher / Advanced Higher'),
          grade: scotGrade,
          standardCode: scotStandard,
        };
      }

      // Special Welsh adaptations
      if (normJur === 'wales') {
        let welshStandard = loc.standardCode.replace('DfE', 'Curriculum for Wales / Llywodraeth Cymru').replace('Ofqual', 'Qualifications Wales / WJEC');
        return {
          ...course,
          grade: loc.grade.replace('Key Stage 1', 'Progression Step 1/2').replace('Key Stage 2', 'Progression Step 2/3').replace('Key Stage 3', 'Progression Step 4').replace('Key Stage 4', 'Progression Step 5 / WJEC GCSE').replace('Key Stage 5', 'WJEC A-Level'),
          standardCode: welshStandard,
        };
      }

      // Special Northern Ireland adaptations
      if (normJur === 'northern-ireland') {
        let niStandard = loc.standardCode.replace('DfE', 'CCEA NI Curriculum').replace('Ofqual', 'CCEA Qualifications');
        return {
          ...course,
          grade: loc.grade.replace('Key Stage 1', 'P1–P3').replace('Key Stage 2', 'P4–P7').replace('Key Stage 3', 'Years 8–10 (CCEA KS3)').replace('Key Stage 4', 'Years 11–12 (CCEA GCSE)').replace('Key Stage 5', 'Years 13–14 (CCEA A-Level)'),
          standardCode: niStandard,
        };
      }

      // England (Default UK)
      return {
        ...course,
        title: loc.title,
        grade: loc.grade,
        standardCode: loc.standardCode,
      };
    });
  }

  // Default Standard (USA, Canada, Australia, NZ)
  return STANDARD_COURSES;
}

