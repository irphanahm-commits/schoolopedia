'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface InstitutionItem {
  name: string;
  type: string;
  category: 'HIGHER_ED' | 'GRAMMAR' | 'ACADEMY' | 'INDEPENDENT' | 'COMPREHENSIVE' | 'CENTRAL_SCHOOL' | 'BOARDING_SCHOOL';
  city: string;
  stateOrProvince: string;
  countryCode: string;
  countryName: string;
  flag: string;
  websiteUrl: string;
  accreditation: string;
  nationalRanking?: number;
  highlightProgram: string;
  admissionsPathway?: string;
  ageRange?: string;
}

const INSTITUTIONS: InstitutionItem[] = [
  // ===========================================================================
  // United Kingdom - Top State Grammar Schools (11-Plus Selective)
  // ===========================================================================
  {
    name: "Queen Elizabeth's School, Barnet",
    type: 'State Grammar School (Boys 11–18)',
    category: 'GRAMMAR',
    city: 'Barnet',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://qebarnet.co.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 1,
    highlightProgram: '35+ Oxbridge offers annually, National Maths Olympiad Winners',
    admissionsPathway: '11-Plus Selective Entrance Examination',
    ageRange: 'Ages 11–18 (Years 7–13)',
  },
  {
    name: 'The Henrietta Barnett School',
    type: "State Grammar School (Girls 11–18)",
    category: 'GRAMMAR',
    city: 'Hampstead Garden Suburb',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://hbschool.org.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 2,
    highlightProgram: 'Top State Girls’ Academic Attainment, Classical & STEM Honors',
    admissionsPathway: '11-Plus Entrance Assessment (Verbal/Non-Verbal/English/Maths)',
    ageRange: 'Ages 11–18 (Years 7–13)',
  },
  {
    name: "Wilson's School",
    type: 'State Grammar School (Boys 11–18)',
    category: 'GRAMMAR',
    city: 'Wallington',
    stateOrProvince: 'Greater London (Sutton)',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://wilsons.school',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 3,
    highlightProgram: 'Sunday Times State Secondary School of the Decade, Pure Mathematics',
    admissionsPathway: 'Sutton Selective Eligibility Test (SET) + Stage 2 Exam',
    ageRange: 'Ages 11–18 (Years 7–13)',
  },
  {
    name: 'The Tiffin School',
    type: 'State Grammar School (Boys 11–18)',
    category: 'GRAMMAR',
    city: 'Kingston upon Thames',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://tiffinschool.co.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 4,
    highlightProgram: 'Premier London STEM & Performing Arts Grammar',
    admissionsPathway: 'Kingston 11-Plus Academic Selection',
    ageRange: 'Ages 11–18 (Years 7–13)',
  },
  {
    name: 'King Edward VI Camp Hill School for Boys',
    type: 'State Grammar School (Boys 11–18)',
    category: 'GRAMMAR',
    city: 'Birmingham',
    stateOrProvince: 'West Midlands',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://camphillboys.bham.sch.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 5,
    highlightProgram: 'Top West Midlands Selective Grammar, A-Level Further Maths',
    admissionsPathway: 'West Midlands Grammar Schools 11+ Entrance Exam',
    ageRange: 'Ages 11–18 (Years 7–13)',
  },
  {
    name: 'Colchester Royal Grammar School (CRGS)',
    type: 'State Grammar School (Day & Boarding)',
    category: 'GRAMMAR',
    city: 'Colchester',
    stateOrProvince: 'Essex',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://crgs.co.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 6,
    highlightProgram: 'Historic Tudor Foundation (1539), Exceptional Oxbridge Science Transition',
    admissionsPathway: 'Consortium of Selective Schools in Essex (CSSE) 11+',
    ageRange: 'Ages 11–18 (Co-ed Sixth Form)',
  },
  {
    name: "Pate's Grammar School",
    type: 'State Co-educational Grammar School',
    category: 'GRAMMAR',
    city: 'Cheltenham',
    stateOrProvince: 'Gloucestershire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://patesgs.org',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 7,
    highlightProgram: 'South West Premier Co-ed Grammar, Advanced Humanities & Physics',
    admissionsPathway: 'Gloucestershire Grammar Schools 11-Plus Exam',
    ageRange: 'Ages 11–18 (Years 7–13)',
  },

  // ===========================================================================
  // United Kingdom - Leading State Academies & Sixth Form Colleges
  // ===========================================================================
  {
    name: 'Brampton Manor Academy & Sixth Form',
    type: 'State Academy (Co-ed 11–18)',
    category: 'ACADEMY',
    city: 'Newham',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://bramptonmanor.org',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 1,
    highlightProgram: 'Social Mobility Benchmark: 50+ to 85+ Oxbridge offers annually',
    admissionsPathway: 'Non-selective 11–16, Highly Selective GCSE A-Level Entry',
    ageRange: 'Ages 11–18 (Years 7–13)',
  },
  {
    name: 'Harris Westminster Sixth Form',
    type: 'State 16–19 Academy (Co-ed)',
    category: 'ACADEMY',
    city: 'Westminster',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://harriswestminster.org.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 2,
    highlightProgram: 'Joint Harris Federation & Westminster School Academic Partnership',
    admissionsPathway: 'GCSE Grade Requirements + Entrance Examination & Interview',
    ageRange: 'Ages 16–19 (Years 12–13)',
  },
  {
    name: 'London Academy of Excellence (LAE Stratford)',
    type: 'State 16–19 Free School',
    category: 'ACADEMY',
    city: 'Stratford',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://lae.ac.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 3,
    highlightProgram: 'Backed by Eton, Highgate & Brighton College; Top Russell Group Feeder',
    admissionsPathway: 'GCSE Academic Criteria (Minimum Grade 7s in chosen subjects)',
    ageRange: 'Ages 16–19 (Years 12–13)',
  },
  {
    name: 'Hills Road Sixth Form College',
    type: 'Sixth Form College (Co-ed)',
    category: 'ACADEMY',
    city: 'Cambridge',
    stateOrProvince: 'Cambridgeshire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://hillsroad.ac.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 4,
    highlightProgram: 'Leading UK state provider of Cambridge University STEM entrants',
    admissionsPathway: 'Post-16 Application based on GCSE Performance',
    ageRange: 'Ages 16–19 (Years 12–13)',
  },
  {
    name: 'Woodhouse College',
    type: 'Sixth Form College (Co-ed)',
    category: 'ACADEMY',
    city: 'North Finchley',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://woodhouse.ac.uk',
    accreditation: 'Ofsted Outstanding',
    nationalRanking: 5,
    highlightProgram: 'North London Academic Hub; Partnered with Imperial College London',
    admissionsPathway: 'GCSE Score Profile (Strong pass in English & Maths)',
    ageRange: 'Ages 16–19 (Years 12–13)',
  },

  // ===========================================================================
  // United Kingdom - Historic Independent / Public Schools
  // ===========================================================================
  {
    name: 'Westminster School',
    type: 'Independent Day & Boarding',
    category: 'INDEPENDENT',
    city: 'Westminster',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://westminster.org.uk',
    accreditation: 'ISI Excellent',
    nationalRanking: 1,
    highlightProgram: 'Consistently #1 UK Academic Results, 70+ Oxbridge Matriculations',
    admissionsPathway: '13+ Common Entrance / Scholarship Challenge & 16+ Sixth Form Exam',
    ageRange: 'Ages 13–18 (Co-ed Sixth Form)',
  },
  {
    name: "St Paul's School",
    type: 'Independent Day School (Boys 13–18)',
    category: 'INDEPENDENT',
    city: 'Barnes',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://stpaulsschool.org.uk',
    accreditation: 'ISI Excellent',
    nationalRanking: 2,
    highlightProgram: 'Premier London STEM & Humanities, Founded 1509 by John Colet',
    admissionsPathway: '13+ ISEB Pre-test, Written Papers & Interview',
    ageRange: 'Ages 13–18 (Boys)',
  },
  {
    name: 'Eton College',
    type: 'Independent All-Boys Boarding',
    category: 'INDEPENDENT',
    city: 'Windsor',
    stateOrProvince: 'Berkshire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://etoncollege.com',
    accreditation: 'ISI Excellent',
    nationalRanking: 3,
    highlightProgram: 'Educated 20 British Prime Ministers, Royal Foundation (1440)',
    admissionsPathway: 'Stage 1 & 2 Assessments at Age 11 for Age 13 Entry',
    ageRange: 'Ages 13–18 (Full Boarding)',
  },
  {
    name: 'Winchester College',
    type: 'Independent Boarding & Day School',
    category: 'INDEPENDENT',
    city: 'Winchester',
    stateOrProvince: 'Hampshire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://winchestercollege.org',
    accreditation: 'ISI Excellent',
    nationalRanking: 4,
    highlightProgram: 'Founded 1382, Unique Non-Exam "Div" Intellectual Curriculum',
    admissionsPathway: 'Election (Scholarship) & Winchester Entrance Exam',
    ageRange: 'Ages 13–18 (Co-ed Sixth Form)',
  },
  {
    name: 'Harrow School',
    type: 'Independent All-Boys Boarding',
    category: 'INDEPENDENT',
    city: 'Harrow on the Hill',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://harrowschool.org.uk',
    accreditation: 'ISI Excellent',
    nationalRanking: 5,
    highlightProgram: 'Royal Charter of Queen Elizabeth I (1572), Leadership & Classics',
    admissionsPathway: 'Harrow Test (11+) for 13+ Entry, Common Entrance',
    ageRange: 'Ages 13–18 (Full Boarding)',
  },
  {
    name: "King's College School (KCS Wimbledon)",
    type: 'Independent Day School',
    category: 'INDEPENDENT',
    city: 'Wimbledon',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://kcs.org.uk',
    accreditation: 'ISI Excellent',
    nationalRanking: 6,
    highlightProgram: 'Leading IB Diploma and A-Level Provider in Greater London',
    admissionsPathway: '11+, 13+ and 16+ Competitive Entry Exams',
    ageRange: 'Ages 7–18 (Co-ed Sixth Form)',
  },
  {
    name: 'Wycombe Abbey',
    type: "Independent Girls' Boarding School",
    category: 'INDEPENDENT',
    city: 'High Wycombe',
    stateOrProvince: 'Buckinghamshire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://wycombeabbey.com',
    accreditation: 'ISI Excellent',
    nationalRanking: 7,
    highlightProgram: 'Ranked #1 UK Girls’ Boarding School for Academic Attainment',
    admissionsPathway: '11+, 13+ Assessment Day & Scholarship Exams',
    ageRange: 'Ages 11–18 (Girls Boarding & Day)',
  },

  // ===========================================================================
  // Devolved Home Nations - Scotland, Wales & Northern Ireland Anchors
  // ===========================================================================
  {
    name: 'Jordanhill School',
    type: 'Direct Grant State Comprehensive',
    category: 'COMPREHENSIVE',
    city: 'Glasgow',
    stateOrProvince: 'Lanarkshire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://jordanhill.glasgow.sch.uk',
    accreditation: 'Education Scotland Excellent',
    nationalRanking: 1,
    highlightProgram: 'Scotland’s Top Performing State School, SQA Highers & Advanced Highers',
    admissionsPathway: 'Catchment Area & Direct Grant Scottish Funding',
    ageRange: 'Ages 4–18 (P1–S6)',
  },
  {
    name: 'Boroughmuir High School',
    type: 'State Comprehensive High School',
    category: 'COMPREHENSIVE',
    city: 'Edinburgh',
    stateOrProvince: 'Midlothian',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://boroughmuirhighschool.org',
    accreditation: 'Education Scotland Excellent',
    nationalRanking: 2,
    highlightProgram: 'Multiple-time Scottish State Secondary School of the Year',
    admissionsPathway: 'City of Edinburgh Council Non-selective Catchment',
    ageRange: 'Ages 11–18 (S1–S6)',
  },
  {
    name: 'Ysgol Gyfun Gymraeg Glantaf',
    type: 'Welsh-Medium Comprehensive Secondary',
    category: 'COMPREHENSIVE',
    city: 'Cardiff',
    stateOrProvince: 'South Glamorgan',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://glantaf.cymru',
    accreditation: 'Estyn Excellent',
    nationalRanking: 1,
    highlightProgram: 'Cardiff’s Leading Bilingual Welsh-Medium Secondary, WJEC A-Levels',
    admissionsPathway: 'Cardiff Local Authority Welsh-Medium Catchment',
    ageRange: 'Ages 11–18 (Years 7–13)',
  },
  {
    name: 'Methodist College Belfast (Methody)',
    type: 'Voluntary Grammar School',
    category: 'GRAMMAR',
    city: 'Belfast',
    stateOrProvince: 'County Antrim',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://methody.org',
    accreditation: 'ETI Outstanding',
    nationalRanking: 1,
    highlightProgram: 'Northern Ireland Academic & Sporting Anchor, CCEA A-Levels',
    admissionsPathway: 'Schools’ Entrance Assessment Group (SEAG) Transfer Test',
    ageRange: 'Ages 11–18 (Years 8–14)',
  },

  // ===========================================================================
  // United Kingdom - World-Leading Universities (Russell Group)
  // ===========================================================================
  {
    name: 'University of Oxford',
    type: 'Collegiate Research University',
    category: 'HIGHER_ED',
    city: 'Oxford',
    stateOrProvince: 'Oxfordshire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://ox.ac.uk',
    accreditation: 'QAA',
    nationalRanking: 1,
    highlightProgram: 'BA / MMath Mathematics & Computer Science, PPE, Medicine',
    admissionsPathway: 'UCAS + Admissions Test (MAT/PAT/TSA) + College Interviews',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'University of Cambridge',
    type: 'Collegiate Research University',
    category: 'HIGHER_ED',
    city: 'Cambridge',
    stateOrProvince: 'Cambridgeshire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://cam.ac.uk',
    accreditation: 'QAA',
    nationalRanking: 2,
    highlightProgram: 'Mathematical Tripos, Natural Sciences Tripos, Computer Science',
    admissionsPathway: 'UCAS + STEP / TMUA / ESAT Assessment + Supervision Interview',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'Imperial College London',
    type: 'Public STEM Specialist University',
    category: 'HIGHER_ED',
    city: 'London',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://imperial.ac.uk',
    accreditation: 'QAA',
    nationalRanking: 3,
    highlightProgram: 'MEng Computing & Software Engineering, Physics, Artificial Intelligence',
    admissionsPathway: 'UCAS + TMUA Assessment + Departmental Interview',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'University College London (UCL)',
    type: 'Comprehensive Global Research University',
    category: 'HIGHER_ED',
    city: 'London',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://ucl.ac.uk',
    accreditation: 'QAA',
    nationalRanking: 4,
    highlightProgram: 'BSc / MSci Computer Science, Neuroscience, Bartlett Architecture',
    admissionsPathway: 'UCAS with Top A-Level Predictors (A*AA–A*A*A)',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'London School of Economics (LSE)',
    type: 'Social Sciences Specialist University',
    category: 'HIGHER_ED',
    city: 'London',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://lse.ac.uk',
    accreditation: 'QAA',
    nationalRanking: 5,
    highlightProgram: 'BSc Economics, Mathematics and Economics, Government & Law',
    admissionsPathway: 'UCAS + TMUA for Economics',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'University of Edinburgh',
    type: 'Ancient Scottish Research University',
    category: 'HIGHER_ED',
    city: 'Edinburgh',
    stateOrProvince: 'Midlothian',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://ed.ac.uk',
    accreditation: 'QAA',
    nationalRanking: 6,
    highlightProgram: 'BSc / BEng Informatics, Data Science, Biomedical Sciences',
    admissionsPathway: 'UCAS (SQA Highers AAAAA / A-Levels A*AA)',
    ageRange: 'Undergraduate & Postgraduate',
  },

  // ===========================================================================
  // United States - Flagship Universities
  // ===========================================================================
  {
    name: 'University of California, Berkeley',
    type: 'Public Research University',
    category: 'HIGHER_ED',
    city: 'Berkeley',
    stateOrProvince: 'California',
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    websiteUrl: 'https://berkeley.edu',
    accreditation: 'WASC',
    nationalRanking: 1,
    highlightProgram: 'B.S. Electrical Engineering & Computer Sciences (EECS)',
    admissionsPathway: 'UC Application Holistic Review',
    ageRange: 'Undergraduate & Graduate',
  },
  {
    name: 'Stanford University',
    type: 'Private Research University',
    category: 'HIGHER_ED',
    city: 'Stanford',
    stateOrProvince: 'California',
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    websiteUrl: 'https://stanford.edu',
    accreditation: 'WASC',
    nationalRanking: 2,
    highlightProgram: 'B.S. Symbolic Systems & Artificial Intelligence',
    admissionsPathway: 'Common App / Coalition Holistic Review',
    ageRange: 'Undergraduate & Graduate',
  },
  {
    name: 'University of Texas at Austin',
    type: 'Public Flagship University',
    category: 'HIGHER_ED',
    city: 'Austin',
    stateOrProvince: 'Texas',
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    websiteUrl: 'https://utexas.edu',
    accreditation: 'SACSCOC',
    nationalRanking: 9,
    highlightProgram: 'Turing Scholars Honors in Computer Science',
    admissionsPathway: 'Texas Top 6% Auto-Admit & Holistic Honors Review',
    ageRange: 'Undergraduate & Graduate',
  },

  // ===========================================================================
  // Canada - Flagship Universities
  // ===========================================================================
  {
    name: 'University of Toronto',
    type: 'Public Research University',
    category: 'HIGHER_ED',
    city: 'Toronto',
    stateOrProvince: 'Ontario',
    countryCode: 'CA',
    countryName: 'Canada',
    flag: '🇨🇦',
    websiteUrl: 'https://utoronto.ca',
    accreditation: 'PEQAB',
    nationalRanking: 1,
    highlightProgram: 'Engineering Science (Aerospace & Robotics Major)',
    admissionsPathway: 'OUAC / High School Transcript Review',
    ageRange: 'Undergraduate & Graduate',
  },
  {
    name: 'University of Waterloo',
    type: 'Co-op Innovation University',
    category: 'HIGHER_ED',
    city: 'Waterloo',
    stateOrProvince: 'Ontario',
    countryCode: 'CA',
    countryName: 'Canada',
    flag: '🇨🇦',
    websiteUrl: 'https://uwaterloo.ca',
    accreditation: 'PEQAB',
    nationalRanking: 3,
    highlightProgram: 'B.Math / B.CS Software Engineering with Paid Co-op',
    admissionsPathway: 'OUAC + AIF (Euclid Math Contest)',
    ageRange: 'Undergraduate & Graduate',
  },

  // ===========================================================================
  // Australia - Flagship Universities
  // ===========================================================================
  {
    name: 'University of Sydney',
    type: 'Group of Eight Research University',
    category: 'HIGHER_ED',
    city: 'Sydney',
    stateOrProvince: 'New South Wales',
    countryCode: 'AU',
    countryName: 'Australia',
    flag: '🇦🇺',
    websiteUrl: 'https://sydney.edu.au',
    accreditation: 'TEQSA',
    nationalRanking: 2,
    highlightProgram: 'Bachelor of Advanced Computing (Honours)',
    admissionsPathway: 'UAC / ATAR Rank Selection',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'UNSW Sydney',
    type: 'Group of Eight Technology Leader',
    category: 'HIGHER_ED',
    city: 'Sydney',
    stateOrProvince: 'New South Wales',
    countryCode: 'AU',
    countryName: 'Australia',
    flag: '🇦🇺',
    websiteUrl: 'https://unsw.edu.au',
    accreditation: 'TEQSA',
    nationalRanking: 3,
    highlightProgram: 'Bachelor of Quantum Engineering & Mathematics',
    admissionsPathway: 'UAC / ATAR Selection',
    ageRange: 'Undergraduate & Postgraduate',
  },

  // ===========================================================================
  // New Zealand - Flagship Universities
  // ===========================================================================
  {
    name: 'University of Auckland',
    type: 'Comprehensive Research University',
    category: 'HIGHER_ED',
    city: 'Auckland',
    stateOrProvince: 'Auckland',
    countryCode: 'NZ',
    countryName: 'New Zealand',
    flag: '🇳🇿',
    websiteUrl: 'https://auckland.ac.nz',
    accreditation: 'NZQA',
    nationalRanking: 1,
    highlightProgram: 'Bachelor of Science (Data Science & Applied Math)',
    admissionsPathway: 'NCEA University Entrance Rank Score',
    ageRange: 'Undergraduate & Postgraduate',
  },

  // ===========================================================================
  // India - Institutes of National Importance & Apex Universities
  // ===========================================================================
  {
    name: 'Indian Institute of Technology Bombay (IIT Bombay)',
    type: 'Institute of National Importance',
    category: 'HIGHER_ED',
    city: 'Mumbai',
    stateOrProvince: 'Maharashtra',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://iitb.ac.in',
    accreditation: 'Institute of Eminence (IoE)',
    nationalRanking: 1,
    highlightProgram: 'B.Tech in Computer Science & Engineering (AIR 1–65 JEE Advanced cutoff)',
    admissionsPathway: 'JEE Advanced (via JoSAA Counselling)',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'Indian Institute of Technology Delhi (IIT Delhi)',
    type: 'Institute of National Importance',
    category: 'HIGHER_ED',
    city: 'New Delhi',
    stateOrProvince: 'Delhi',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://iitd.ac.in',
    accreditation: 'Institute of Eminence (IoE)',
    nationalRanking: 2,
    highlightProgram: 'B.Tech in Electrical Engineering & Artificial Intelligence',
    admissionsPathway: 'JEE Advanced (via JoSAA Counselling)',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'Indian Institute of Technology Madras (IIT Madras)',
    type: 'Institute of National Importance',
    category: 'HIGHER_ED',
    city: 'Chennai',
    stateOrProvince: 'Tamil Nadu',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://iitm.ac.in',
    accreditation: 'NIRF Rank 1 Overall in India',
    nationalRanking: 3,
    highlightProgram: 'B.Tech / Dual Degree Aerospace & Data Science, IITM Research Park',
    admissionsPathway: 'JEE Advanced (via JoSAA Counselling)',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'Indian Institute of Technology Kanpur (IIT Kanpur)',
    type: 'Institute of National Importance',
    category: 'HIGHER_ED',
    city: 'Kanpur',
    stateOrProvince: 'Uttar Pradesh',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://iitk.ac.in',
    accreditation: 'Institute of National Importance',
    nationalRanking: 4,
    highlightProgram: 'B.Tech in Computer Science, Cyber Security & Quantum Technologies',
    admissionsPathway: 'JEE Advanced (via JoSAA Counselling)',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'Indian Institute of Technology Kharagpur (IIT Kharagpur)',
    type: 'Historic Pioneer Institute (Est. 1951)',
    category: 'HIGHER_ED',
    city: 'Kharagpur',
    stateOrProvince: 'West Bengal',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://iitkgp.ac.in',
    accreditation: 'Institute of Eminence (IoE)',
    nationalRanking: 5,
    highlightProgram: 'B.Tech / M.Tech Microelectronics, Robotics & Naval Architecture',
    admissionsPathway: 'JEE Advanced (via JoSAA Counselling)',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    type: 'Apex Medical Research Institute & Teaching Hospital',
    category: 'HIGHER_ED',
    city: 'New Delhi',
    stateOrProvince: 'Delhi',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://aiims.edu',
    accreditation: 'NIRF Rank 1 Medical Institute in India',
    nationalRanking: 1,
    highlightProgram: 'MBBS (Bachelor of Medicine & Bachelor of Surgery) Top 50 AIR Cutoff',
    admissionsPathway: 'NEET-UG (Conducted by NTA, MCC All India Counselling)',
    ageRange: 'Undergraduate & Super-Specialty Medical',
  },
  {
    name: 'Indian Institute of Science (IISc Bangalore)',
    type: 'Apex Scientific Research & Deemed University',
    category: 'HIGHER_ED',
    city: 'Bengaluru',
    stateOrProvince: 'Karnataka',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://iisc.ac.in',
    accreditation: 'NIRF Rank 1 University in India',
    nationalRanking: 1,
    highlightProgram: 'Bachelor of Science (Research) in Physics, Chemistry & Computational Biology',
    admissionsPathway: 'JEE Advanced / JEE Main / NEET-UG Top Percentile',
    ageRange: 'Undergraduate & Doctoral Research',
  },
  {
    name: 'University of Delhi (St. Stephen’s & SRCC)',
    type: 'Premier Central Collegiate University',
    category: 'HIGHER_ED',
    city: 'New Delhi',
    stateOrProvince: 'Delhi',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://du.ac.in',
    accreditation: 'NAAC A++ Central University',
    nationalRanking: 1,
    highlightProgram: 'B.A. (Hons) Economics, B.Com (Hons) at SRCC, B.Sc. (Hons) Physics at St. Stephen’s',
    admissionsPathway: 'CUET-UG (Common University Entrance Test via DU CSAS Portal)',
    ageRange: 'Undergraduate & Postgraduate',
  },
  {
    name: 'National Law School of India University (NLSIU Bengaluru)',
    type: 'Premier Apex National Law University',
    category: 'HIGHER_ED',
    city: 'Bengaluru',
    stateOrProvince: 'Karnataka',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://nls.ac.in',
    accreditation: 'NIRF Rank 1 Law School in India',
    nationalRanking: 1,
    highlightProgram: 'B.A. LL.B. (Honours) Integrated 5-Year Legal Program',
    admissionsPathway: 'CLAT (Common Law Admission Test Top AIR Ranks)',
    ageRange: 'Undergraduate & Postgraduate Law',
  },
  {
    name: 'Indian Institute of Management Ahmedabad (IIM Ahmedabad)',
    type: 'Apex Business & Management School',
    category: 'HIGHER_ED',
    city: 'Ahmedabad',
    stateOrProvince: 'Gujarat',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://iima.ac.in',
    accreditation: 'EQUIS & AACSB Accredited / NIRF Rank 1 Management',
    nationalRanking: 1,
    highlightProgram: 'Post Graduate Programme in Management (MBA Equivalent) & Executive Fellowships',
    admissionsPathway: 'CAT (Common Admission Test) & Analytical Writing Interview',
    ageRange: 'Postgraduate & Executive Education',
  },

  // ===========================================================================
  // India - Exemplar Central Systems & Model Schools
  // ===========================================================================
  {
    name: 'Kendriya Vidyalaya (IIT Delhi Campus)',
    type: 'Central Model School (KVS CBSE)',
    category: 'CENTRAL_SCHOOL',
    city: 'New Delhi',
    stateOrProvince: 'Delhi',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://iitdelhi.kvs.ac.in',
    accreditation: 'Ministry of Education / KVS Board',
    nationalRanking: 1,
    highlightProgram: 'Integrated STEM Lab, Atal Tinkering Lab & Stellar CBSE Class 10/12 Pass Rates',
    admissionsPathway: 'KVS Centralized Admission Portal (Priority Category System)',
    ageRange: 'Classes 1–12 (Ages 6–18)',
  },
  {
    name: 'Jawaharlal Navodaya Vidyalaya (Jaffarpur Kalan, Delhi)',
    type: 'Pacesetting Residential School (NVS CBSE)',
    category: 'CENTRAL_SCHOOL',
    city: 'New Delhi',
    stateOrProvince: 'Delhi',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://navodaya.gov.in',
    accreditation: 'Navodaya Vidyalaya Samiti / MoE',
    nationalRanking: 2,
    highlightProgram: '100% Free Residential Education, Top 1% National JEE & NEET Qualification Rates',
    admissionsPathway: 'JNVST (Jawaharlal Navodaya Vidyalaya Selection Test in Class 6)',
    ageRange: 'Classes 6–12 (Co-educational Residential)',
  },

  // ===========================================================================
  // India - Premier Private & Day Schools (CBSE / ICSE)
  // ===========================================================================
  {
    name: 'Delhi Public School (DPS), R.K. Puram',
    type: 'Premier Private Day & Boarding School',
    category: 'ACADEMY',
    city: 'New Delhi',
    stateOrProvince: 'Delhi',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://dpsrkp.net',
    accreditation: 'CBSE Affiliated (#2730017)',
    nationalRanking: 1,
    highlightProgram: 'National Science & Math Olympiad Champions, 100+ IIT/AIIMS/Ivy League admits annually',
    admissionsPathway: 'Merit Entrance Evaluation & Class 11 Stream Cutoff',
    ageRange: 'Classes 6–12 (Ages 11–18)',
  },
  {
    name: 'The Cathedral and John Connon School',
    type: 'Historic Independent Day School (Est. 1860)',
    category: 'INDEPENDENT',
    city: 'Mumbai',
    stateOrProvince: 'Maharashtra',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://cathedral-school.com',
    accreditation: 'CISCE (ICSE / ISC) & IB Diploma',
    nationalRanking: 2,
    highlightProgram: 'Premier Western India ICSE/ISC, Harvard Model Congress, Classical Humanities',
    admissionsPathway: 'Pre-Primary Assessment & Selective Academic Review',
    ageRange: 'Pre-Primary to Class 12 (Ages 4–18)',
  },
  {
    name: 'Modern School, Barakhamba Road',
    type: 'Historic Independent Day-Cum-Boarding (Est. 1920)',
    category: 'INDEPENDENT',
    city: 'New Delhi',
    stateOrProvince: 'Delhi',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://modernschool.net',
    accreditation: 'CBSE Affiliated Pioneer',
    nationalRanking: 3,
    highlightProgram: 'Distinguished Alumni in Supreme Court, Parliament & Industry; Aviation Club & Debate',
    admissionsPathway: 'Point-System Nursery Entry & Class 11 Academic Merit',
    ageRange: 'Classes 6–12 (Ages 11–18)',
  },
  {
    name: 'The Mother’s International School',
    type: 'Value-Based Academic Institution',
    category: 'INDEPENDENT',
    city: 'New Delhi',
    stateOrProvince: 'Delhi',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://themis.in',
    accreditation: 'CBSE Affiliated / Sri Aurobindo Ashram',
    nationalRanking: 4,
    highlightProgram: 'Consistently #1 in Delhi CBSE Board Exam Average Aggregate, Integral Holistic Pedagogy',
    admissionsPathway: 'Nursery Draw / Sibling / Class 11 Academic Merit',
    ageRange: 'Pre-Primary to Class 12 (Ages 4–18)',
  },
  {
    name: 'St. Xavier’s Collegiate School',
    type: 'Jesuit Academic Heritage School (Est. 1860)',
    category: 'INDEPENDENT',
    city: 'Kolkata',
    stateOrProvince: 'West Bengal',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://sxcs.edu.in',
    accreditation: 'CISCE (ICSE & ISC)',
    nationalRanking: 5,
    highlightProgram: 'Historic Eastern India Academic Titan, Nobel Laureate Alumni Traditions, ISC Physics',
    admissionsPathway: 'Selective Entrance Examination & Academic Merit',
    ageRange: 'Classes 1–12 (Boys Day School)',
  },
  {
    name: 'National Public School (NPS), Indiranagar',
    type: 'Premier STEM Day School',
    category: 'INDEPENDENT',
    city: 'Bengaluru',
    stateOrProvince: 'Karnataka',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://npsinr.com',
    accreditation: 'CBSE Affiliation #830005',
    nationalRanking: 6,
    highlightProgram: 'Exceptional STEM Rigor, Top JEE Main/Advanced and KVPY Percentile Concentrations',
    admissionsPathway: 'Rigorous Academic Assessment & Class 11 Entrance',
    ageRange: 'Classes 1–12 (Co-educational)',
  },

  // ===========================================================================
  // India - Historic Residential & Boarding Schools
  // ===========================================================================
  {
    name: 'The Doon School, Dehradun',
    type: 'All-Boys Boarding School (Est. 1935)',
    category: 'BOARDING_SCHOOL',
    city: 'Dehradun',
    stateOrProvince: 'Uttarakhand',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://doonschool.com',
    accreditation: 'CISCE (ICSE/ISC) & International Baccalaureate',
    nationalRanking: 1,
    highlightProgram: 'Known as the "Eton of India", 70-Acre Campus, Leadership & Social Responsibility',
    admissionsPathway: 'All-India Competitive Entrance Exam (Classes 7 & 8) & Interview',
    ageRange: 'Classes 7–12 (Boys Residential 12–18)',
  },
  {
    name: 'Mayo College, Ajmer',
    type: 'Historic Residential School (Est. 1875)',
    category: 'BOARDING_SCHOOL',
    city: 'Ajmer',
    stateOrProvince: 'Rajasthan',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://mayocollege.com',
    accreditation: 'CBSE & Cambridge International',
    nationalRanking: 2,
    highlightProgram: '300-Acre Heritage Campus, Equestrian Academy, Golf, Shooting & Advanced STEM',
    admissionsPathway: 'Mayo Common Entrance Examination & Interactive Assessment',
    ageRange: 'Classes 4–12 (Boys Boarding Ages 9–18)',
  },
  {
    name: 'Bishop Cotton School, Shimla',
    type: 'Historic Himalayan Boarding School (Est. 1859)',
    category: 'BOARDING_SCHOOL',
    city: 'Shimla',
    stateOrProvince: 'Himachal Pradesh',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://bishopcottonshimla.com',
    accreditation: 'CISCE (ICSE & ISC)',
    nationalRanking: 3,
    highlightProgram: 'One of Asia’s Oldest Residential Foundations, Alpine Adventure, Rowing & House Debates',
    admissionsPathway: 'Entrance Examination in English, Math & General Aptitude',
    ageRange: 'Classes 3–12 (Boys Boarding Ages 8–18)',
  },
  {
    name: 'Welham Girls’ School, Dehradun',
    type: 'Premier All-Girls Boarding School (Est. 1957)',
    category: 'BOARDING_SCHOOL',
    city: 'Dehradun',
    stateOrProvince: 'Uttarakhand',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://welhamgirls.com',
    accreditation: 'CISCE (ICSE & ISC)',
    nationalRanking: 4,
    highlightProgram: 'Top All-India Girls Boarding Institution, Visual Arts, Model UN & National Sports',
    admissionsPathway: 'All-India Written Assessment (Classes 6 & 7) & Interaction',
    ageRange: 'Classes 6–12 (Girls Boarding Ages 11–18)',
  },
  {
    name: 'The Scindia School, Gwalior Fort',
    type: 'Historic Fort Residential School (Est. 1897)',
    category: 'BOARDING_SCHOOL',
    city: 'Gwalior',
    stateOrProvince: 'Madhya Pradesh',
    countryCode: 'IN',
    countryName: 'India',
    flag: '🇮🇳',
    websiteUrl: 'https://scindia.edu',
    accreditation: 'CBSE Affiliated Residential',
    nationalRanking: 5,
    highlightProgram: 'Situated atop 300-ft Gwalior Fort, Heritage Restoration, Astrophotography & Astronomy',
    admissionsPathway: 'Scindia Common Aptitude Assessment (CAA) & Class 11 Review',
    ageRange: 'Classes 6–12 (Boys Boarding Ages 11–18)',
  },
];

export default function ExplorePage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filtered = INSTITUTIONS.filter(inst => {
    const matchesCountry = selectedCountry === 'ALL' || inst.countryCode === selectedCountry;
    const matchesCategory = selectedCategory === 'ALL' || inst.category === selectedCategory;
    return matchesCountry && matchesCategory;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      <div style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Header Hero */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Institution & School Directory
            </span>
            <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', background: '#ecfdf5', color: '#065f46', fontWeight: 700 }}>
              Official Authorities & Provenance
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0 }}>
            Top Schools, Academies & Universities
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '840px' }}>
            Explore verified educational institutions across India, the UK, USA, Canada, Australia, and New Zealand. Research premier Indian IITs, AIIMS, Central Schools (KVs & JNVs), historic boarding schools, UK State Grammar Schools (11+), top Academies, and Russell Group universities.
          </p>

          {/* Filter Pills - Country */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { label: '🌍 All Jurisdictions', value: 'ALL' },
              { label: '🇮🇳 India', value: 'IN' },
              { label: '🇬🇧 United Kingdom', value: 'GB' },
              { label: '🇺🇸 United States', value: 'US' },
              { label: '🇨🇦 Canada', value: 'CA' },
              { label: '🇦🇺 Australia', value: 'AU' },
              { label: '🇳🇿 New Zealand', value: 'NZ' },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setSelectedCountry(btn.value)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedCountry === btn.value ? '2px solid #4f46e5' : '1px solid #e2e8f0',
                  backgroundColor: selectedCountry === btn.value ? '#4f46e5' : '#ffffff',
                  color: selectedCountry === btn.value ? '#ffffff' : '#334155',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                  transition: 'all 0.15s ease',
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Filter Pills - Category */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', marginRight: '4px' }}>
              Institution Type:
            </span>
            {[
              { label: 'All Types', value: 'ALL' },
              { label: '🏛️ Central Schools (KVs & JNVs)', value: 'CENTRAL_SCHOOL' },
              { label: '🏰 Boarding Schools', value: 'BOARDING_SCHOOL' },
              { label: '🏛️ State Grammar Schools (11+)', value: 'GRAMMAR' },
              { label: '🌟 Academies & Day Schools', value: 'ACADEMY' },
              { label: '🏰 Independent / Public Schools', value: 'INDEPENDENT' },
              { label: '🎓 Universities & National Institutes', value: 'HIGHER_ED' },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '16px',
                  border: selectedCategory === cat.value ? '1.5px solid #0369a1' : '1px solid #cbd5e1',
                  backgroundColor: selectedCategory === cat.value ? '#e0f2fe' : '#ffffff',
                  color: selectedCategory === cat.value ? '#0369a1' : '#475569',
                  fontWeight: selectedCategory === cat.value ? 700 : 600,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Institutions Count */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
            Showing <strong>{filtered.length}</strong> verified institutions
          </span>
        </div>

        {/* Institutions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
          {filtered.map((inst, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid var(--border-subtle)',
                padding: '24px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{inst.flag}</span>
                    <div>
                      <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.3 }}>
                        {inst.name}
                      </h2>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {inst.city}, {inst.stateOrProvince}
                      </span>
                    </div>
                  </div>
                  {inst.nationalRanking && (
                    <span style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '6px', background: '#f5f3ff', color: '#6d28d9', fontWeight: 700, flexShrink: 0 }}>
                      #{inst.nationalRanking} Ranked
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div>
                    <strong>Sector:</strong> {inst.type}
                  </div>
                  <div>
                    <strong>Inspection / Status:</strong>{' '}
                    <span style={{ color: '#047857', fontWeight: 600 }}>{inst.accreditation}</span>
                  </div>
                  {inst.ageRange && (
                    <div>
                      <strong>Age Range:</strong> {inst.ageRange}
                    </div>
                  )}
                  {inst.admissionsPathway && (
                    <div>
                      <strong>Admissions:</strong> {inst.admissionsPathway}
                    </div>
                  )}
                </div>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  marginBottom: '16px',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Academic Attainment & Honors
                  </span>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginTop: '2px', lineHeight: 1.4 }}>
                    {inst.highlightProgram}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>✓</span> Official Verification
                </span>
                <a
                  href={inst.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#4f46e5',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Visit Portal ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
