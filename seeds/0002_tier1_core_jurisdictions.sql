-- Seeds: 0002_tier1_core_jurisdictions.sql
-- Description: Core Tier 1 Countries, Jurisdictions, Frameworks, Institutions, Careers, and Pathways

-- 1. COUNTRIES (Tier 1: US, GB, CA, AU, NZ)
INSERT OR IGNORE INTO countries (id, code, name, created_at, updated_at) VALUES
  ('country_us', 'US', 'United States of America', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('country_gb', 'GB', 'United Kingdom', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('country_ca', 'CA', 'Canada', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('country_au', 'AU', 'Australia', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('country_nz', 'NZ', 'New Zealand', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 2. JURISDICTIONS
INSERT OR IGNORE INTO jurisdictions (id, country_id, code, name, slug, authority_name, created_at, updated_at) VALUES
  -- USA
  ('jur_us_tx', 'country_us', 'TX', 'Texas', 'texas', 'Texas Education Agency (TEA)', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('jur_us_ny', 'country_us', 'NY', 'New York', 'new-york', 'New York State Education Department (NYSED)', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- United Kingdom
  ('jur_gb_eng', 'country_gb', 'ENG', 'England', 'england', 'Department for Education (DfE) / Ofqual', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('jur_gb_sct', 'country_gb', 'SCT', 'Scotland', 'scotland', 'Scottish Qualifications Authority (SQA)', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('jur_gb_wls', 'country_gb', 'WLS', 'Wales', 'wales', 'Welsh Government / Qualifications Wales', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('jur_gb_nir', 'country_gb', 'NIR', 'Northern Ireland', 'northern-ireland', 'Council for Curriculum, Examinations & Assessment (CCEA)', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- Canada
  ('jur_ca_on', 'country_ca', 'ON', 'Ontario', 'ontario', 'Ontario Ministry of Education', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('jur_ca_bc', 'country_ca', 'BC', 'British Columbia', 'british-columbia', 'British Columbia Ministry of Education and Child Care', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- Australia
  ('jur_au_nsw', 'country_au', 'NSW', 'New South Wales', 'nsw', 'NSW Education Standards Authority (NESA) / ACARA', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('jur_au_vic', 'country_au', 'VIC', 'Victoria', 'victoria', 'Victorian Curriculum and Assessment Authority (VCAA)', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- New Zealand
  ('jur_nz_nat', 'country_nz', 'NZL', 'National Curriculum', 'national', 'Ministry of Education (Te Tāhuhu o te Mātauranga)', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 3. EDUCATION SYSTEMS
INSERT OR IGNORE INTO education_systems (id, jurisdiction_id, name, slug, created_at, updated_at) VALUES
  ('sys_gb_eng_state', 'jur_gb_eng', 'State Maintained Schools', 'state-schools', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('sys_ca_on_public', 'jur_ca_on', 'Ontario Public Schools', 'public-schools', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('sys_au_nsw_public', 'jur_au_nsw', 'NSW Public Schools', 'public-schools', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('sys_nz_state', 'jur_nz_nat', 'New Zealand State Schools', 'state-schools', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 4. CURRICULUM FRAMEWORKS
INSERT OR IGNORE INTO curriculum_frameworks (id, education_system_id, name, code, created_at, updated_at) VALUES
  ('fw_gb_eng_nc', 'sys_gb_eng_state', 'National Curriculum in England (Secondary)', 'UK-NC-SEC', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('fw_ca_on_curr', 'sys_ca_on_public', 'The Ontario Curriculum: Grades 1-8 & De-streamed 9', 'ON-CURR-2026', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('fw_au_nsw_syl', 'sys_au_nsw_public', 'NSW Mathematics Syllabus (ACARA v9)', 'NSW-SYL-V9', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('fw_nz_curriculum', 'sys_nz_state', 'The New Zealand Curriculum (NZC)', 'NZC-2026', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 5. GRADES / YEAR LEVELS
INSERT OR IGNORE INTO grades (id, jurisdiction_id, level, name, slug, created_at) VALUES
  -- England Key Stage 3 / 4
  ('gr_gb_y7', 'jur_gb_eng', 7, 'Year 7', 'year-7', '2026-09-12T00:00:00Z'),
  ('gr_gb_y8', 'jur_gb_eng', 8, 'Year 8', 'year-8', '2026-09-12T00:00:00Z'),
  ('gr_gb_y9', 'jur_gb_eng', 9, 'Year 9', 'year-9', '2026-09-12T00:00:00Z'),
  ('gr_gb_y10', 'jur_gb_eng', 10, 'Year 10 (GCSE)', 'year-10', '2026-09-12T00:00:00Z'),
  -- Ontario
  ('gr_ca_gr8', 'jur_ca_on', 8, 'Grade 8', 'grade-8', '2026-09-12T00:00:00Z'),
  ('gr_ca_gr9', 'jur_ca_on', 9, 'Grade 9 (MTH1W)', 'grade-9', '2026-09-12T00:00:00Z'),
  -- Australia NSW
  ('gr_au_y8', 'jur_au_nsw', 8, 'Year 8 (Stage 4)', 'year-8', '2026-09-12T00:00:00Z'),
  ('gr_au_y9', 'jur_au_nsw', 9, 'Year 9 (Stage 5)', 'year-9', '2026-09-12T00:00:00Z'),
  -- New Zealand
  ('gr_nz_l4', 'jur_nz_nat', 8, 'Level 4 (Year 8)', 'level-4', '2026-09-12T00:00:00Z'),
  ('gr_nz_l5', 'jur_nz_nat', 9, 'Level 5 (Year 9-10)', 'level-5', '2026-09-12T00:00:00Z');

-- 6. SUBJECTS (Canonical)
INSERT OR IGNORE INTO subjects (id, name, slug, code, created_at) VALUES
  ('subj_science', 'Science', 'science', 'SCI', '2026-09-12T00:00:00Z'),
  ('subj_ela', 'English Language Arts', 'english', 'ELA', '2026-09-12T00:00:00Z'),
  ('subj_social_studies', 'Social Studies & History', 'social-studies', 'SOC', '2026-09-12T00:00:00Z'),
  ('subj_comp_sci', 'Computer Science & Technology', 'computer-science', 'CS', '2026-09-12T00:00:00Z');

-- 7. INSTITUTIONS (Explore Pillar)
INSERT OR IGNORE INTO institutions (id, jurisdiction_id, name, slug, type, website_url, city, state_or_province, country_code, accreditation, ranking_national, is_verified, created_at, updated_at) VALUES
  -- USA
  ('inst_ucb', 'jur_us_ca', 'University of California, Berkeley', 'uc-berkeley', 'UNIVERSITY', 'https://berkeley.edu', 'Berkeley', 'California', 'US', 'WASC', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_stanford', 'jur_us_ca', 'Stanford University', 'stanford', 'UNIVERSITY', 'https://stanford.edu', 'Stanford', 'California', 'US', 'WASC', 2, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_ut_austin', 'jur_us_tx', 'University of Texas at Austin', 'ut-austin', 'UNIVERSITY', 'https://utexas.edu', 'Austin', 'Texas', 'US', 'SACSCOC', 9, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- UK Higher Education
  ('inst_oxford', 'jur_gb_eng', 'University of Oxford', 'oxford', 'UNIVERSITY', 'https://ox.ac.uk', 'Oxford', 'Oxfordshire', 'GB', 'QAA', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_cambridge', 'jur_gb_eng', 'University of Cambridge', 'cambridge', 'UNIVERSITY', 'https://cam.ac.uk', 'Cambridge', 'Cambridgeshire', 'GB', 'QAA', 2, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_imperial', 'jur_gb_eng', 'Imperial College London', 'imperial-college', 'UNIVERSITY', 'https://imperial.ac.uk', 'London', 'Greater London', 'GB', 'QAA', 3, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_ucl', 'jur_gb_eng', 'University College London (UCL)', 'ucl', 'UNIVERSITY', 'https://ucl.ac.uk', 'London', 'Greater London', 'GB', 'QAA', 4, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_lse', 'jur_gb_eng', 'London School of Economics (LSE)', 'lse', 'UNIVERSITY', 'https://lse.ac.uk', 'London', 'Greater London', 'GB', 'QAA', 5, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_edinburgh', 'jur_gb_sct', 'University of Edinburgh', 'edinburgh', 'UNIVERSITY', 'https://ed.ac.uk', 'Edinburgh', 'Midlothian', 'GB', 'QAA', 6, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- UK State Grammar Schools (11-Plus Selective)
  ('inst_qe_barnet', 'jur_gb_eng', 'Queen Elizabeth''s School, Barnet', 'qe-barnet', 'GRAMMAR_SCHOOL', 'https://qebarnet.co.uk', 'Barnet', 'Greater London', 'GB', 'Ofsted Outstanding', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_henrietta_barnett', 'jur_gb_eng', 'The Henrietta Barnett School', 'henrietta-barnett', 'GRAMMAR_SCHOOL', 'https://hbschool.org.uk', 'Hampstead Garden Suburb', 'Greater London', 'GB', 'Ofsted Outstanding', 2, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_wilsons', 'jur_gb_eng', 'Wilson''s School', 'wilsons-school', 'GRAMMAR_SCHOOL', 'https://wilsons.school', 'Wallington', 'Greater London', 'GB', 'Ofsted Outstanding', 3, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_tiffin', 'jur_gb_eng', 'The Tiffin School', 'tiffin-school', 'GRAMMAR_SCHOOL', 'https://tiffinschool.co.uk', 'Kingston upon Thames', 'Greater London', 'GB', 'Ofsted Outstanding', 4, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_king_edward_camp_hill', 'jur_gb_eng', 'King Edward VI Camp Hill School for Boys', 'ke-camp-hill', 'GRAMMAR_SCHOOL', 'https://camphillboys.bham.sch.uk', 'Birmingham', 'West Midlands', 'GB', 'Ofsted Outstanding', 5, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_colchester_royal', 'jur_gb_eng', 'Colchester Royal Grammar School', 'colchester-royal', 'GRAMMAR_SCHOOL', 'https://crgs.co.uk', 'Colchester', 'Essex', 'GB', 'Ofsted Outstanding', 6, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_pates', 'jur_gb_eng', 'Pate''s Grammar School', 'pates-grammar', 'GRAMMAR_SCHOOL', 'https://patesgs.org', 'Cheltenham', 'Gloucestershire', 'GB', 'Ofsted Outstanding', 7, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- UK State Academies & Sixth Form Colleges
  ('inst_brampton_manor', 'jur_gb_eng', 'Brampton Manor Academy & Sixth Form', 'brampton-manor', 'ACADEMY', 'https://bramptonmanor.org', 'Newham', 'Greater London', 'GB', 'Ofsted Outstanding', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_harris_westminster', 'jur_gb_eng', 'Harris Westminster Sixth Form', 'harris-westminster', 'SIXTH_FORM_COLLEGE', 'https://harriswestminster.org.uk', 'Westminster', 'Greater London', 'GB', 'Ofsted Outstanding', 2, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_lae_stratford', 'jur_gb_eng', 'London Academy of Excellence (LAE Stratford)', 'lae-stratford', 'SIXTH_FORM_COLLEGE', 'https://lae.ac.uk', 'Stratford', 'Greater London', 'GB', 'Ofsted Outstanding', 3, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_hills_road', 'jur_gb_eng', 'Hills Road Sixth Form College', 'hills-road', 'SIXTH_FORM_COLLEGE', 'https://hillsroad.ac.uk', 'Cambridge', 'Cambridgeshire', 'GB', 'Ofsted Outstanding', 4, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_woodhouse', 'jur_gb_eng', 'Woodhouse College', 'woodhouse-college', 'SIXTH_FORM_COLLEGE', 'https://woodhouse.ac.uk', 'Finchley', 'Greater London', 'GB', 'Ofsted Outstanding', 5, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- UK Historic Independent / Public Schools
  ('inst_westminster_school', 'jur_gb_eng', 'Westminster School', 'westminster-school', 'INDEPENDENT', 'https://westminster.org.uk', 'Westminster', 'Greater London', 'GB', 'ISI Excellent', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_st_pauls', 'jur_gb_eng', 'St Paul''s School', 'st-pauls-school', 'INDEPENDENT', 'https://stpaulsschool.org.uk', 'Barnes', 'Greater London', 'GB', 'ISI Excellent', 2, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_eton', 'jur_gb_eng', 'Eton College', 'eton-college', 'INDEPENDENT', 'https://etoncollege.com', 'Windsor', 'Berkshire', 'GB', 'ISI Excellent', 3, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_winchester', 'jur_gb_eng', 'Winchester College', 'winchester-college', 'INDEPENDENT', 'https://winchestercollege.org', 'Winchester', 'Hampshire', 'GB', 'ISI Excellent', 4, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_harrow', 'jur_gb_eng', 'Harrow School', 'harrow-school', 'INDEPENDENT', 'https://harrowschool.org.uk', 'Harrow on the Hill', 'Greater London', 'GB', 'ISI Excellent', 5, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_kcs_wimbledon', 'jur_gb_eng', 'King''s College School (KCS Wimbledon)', 'kcs-wimbledon', 'INDEPENDENT', 'https://kcs.org.uk', 'Wimbledon', 'Greater London', 'GB', 'ISI Excellent', 6, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_wycombe_abbey', 'jur_gb_eng', 'Wycombe Abbey', 'wycombe-abbey', 'INDEPENDENT', 'https://wycombeabbey.com', 'High Wycombe', 'Buckinghamshire', 'GB', 'ISI Excellent', 7, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- Scotland, Wales & Northern Ireland Schools
  ('inst_jordanhill', 'jur_gb_sct', 'Jordanhill School', 'jordanhill', 'PUBLIC_HIGH_SCHOOL', 'https://jordanhill.glasgow.sch.uk', 'Glasgow', 'Lanarkshire', 'GB', 'Education Scotland Excellent', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_glantaf', 'jur_gb_wls', 'Ysgol Gyfun Gymraeg Glantaf', 'glantaf', 'PUBLIC_HIGH_SCHOOL', 'https://glantaf.cymru', 'Cardiff', 'Glamorgan', 'GB', 'Estyn Excellent', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_methody', 'jur_gb_nir', 'Methodist College Belfast', 'methody', 'GRAMMAR_SCHOOL', 'https://methody.org', 'Belfast', 'Antrim', 'GB', 'ETI Outstanding', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- Canada
  ('inst_toronto', 'jur_ca_on', 'University of Toronto', 'u-toronto', 'UNIVERSITY', 'https://utoronto.ca', 'Toronto', 'Ontario', 'CA', 'PEQAB', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_waterloo', 'jur_ca_on', 'University of Waterloo', 'u-waterloo', 'UNIVERSITY', 'https://uwaterloo.ca', 'Waterloo', 'Ontario', 'CA', 'PEQAB', 3, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- Australia
  ('inst_sydney', 'jur_au_nsw', 'University of Sydney', 'u-sydney', 'UNIVERSITY', 'https://sydney.edu.au', 'Sydney', 'New South Wales', 'AU', 'TEQSA', 2, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('inst_unsw', 'jur_au_nsw', 'UNSW Sydney', 'unsw', 'UNIVERSITY', 'https://unsw.edu.au', 'Sydney', 'New South Wales', 'AU', 'TEQSA', 3, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  -- New Zealand
  ('inst_auckland', 'jur_nz_nat', 'University of Auckland', 'u-auckland', 'UNIVERSITY', 'https://auckland.ac.nz', 'Auckland', 'Auckland', 'NZ', 'NZQA', 1, 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 8. CAREERS & GUIDANCE (Why Study This Subject?)
INSERT OR IGNORE INTO careers (id, title, slug, sector, median_annual_salary, salary_currency, growth_rate_pct, entry_education_level, summary, day_in_the_life, created_at, updated_at) VALUES
  ('car_swe', 'Software Engineer & Systems Architect', 'software-engineer', 'Technology & AI', 138000, 'USD', 25.0, 'Bachelor''s Degree or Equivalent Mastery', 'Designs, builds, and optimizes mission-critical software systems, cloud architectures, and machine learning models.', 'Analyzing computational complexity, writing robust code, collaborating on system design, and debugging performance bottlenecks.', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('car_aero', 'Aerospace Engineer', 'aerospace-engineer', 'Engineering & Space', 130000, 'USD', 6.0, 'Bachelor''s Degree in Aerospace/Mechanical Engineering', 'Directs and coordinates the design, testing, and manufacturing of aircraft, spacecraft, satellites, and propulsion systems.', 'Formulating mathematical flight models, simulating thermal dynamics, and verifying aerodynamic stability using differential equations.', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('car_quant', 'Quantitative Financial Analyst', 'quant-analyst', 'Finance & Economics', 152000, 'USD', 12.0, 'Master''s or Bachelor''s in Math/Data Science', 'Applies advanced mathematical, statistical, and algorithmic techniques to model financial markets, manage systemic risk, and price complex derivatives.', 'Developing predictive linear models, running Monte Carlo simulations, and evaluating algorithmic risk parameters.', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('car_biomed', 'Biomedical Data Scientist', 'biomedical-data-scientist', 'Healthcare & Life Sciences', 122000, 'USD', 18.0, 'Bachelor''s or Master''s in Bioinformatics', 'Decodes genomics datasets, disease progression patterns, and clinical trials using statistical modeling and algorithmic tools.', 'Working with molecular biologists, analyzing high-throughput sequence data, and validating predictive biomarkers.', '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');

-- 9. SKILLS
INSERT OR IGNORE INTO skills (id, name, slug, category, description, created_at) VALUES
  ('sk_lin_alg', 'Linear Equations & Variable Systems', 'linear-equations', 'MATHEMATICAL', 'Formulating, manipulating, and solving algebraic relations with variables on both sides.', '2026-09-12T00:00:00Z'),
  ('sk_algo_logic', 'Algorithmic Logic & Decomposition', 'algorithmic-logic', 'COMPUTATIONAL', 'Breaking complex multi-step problems down into verifiable sequential procedures.', '2026-09-12T00:00:00Z'),
  ('sk_data_modeling', 'Mathematical Modeling & Prediction', 'data-modeling', 'ANALYTICAL', 'Translating real-world physical and financial constraints into solvable symbolic systems.', '2026-09-12T00:00:00Z');

-- 10. CAREER SKILLS LINKAGE
INSERT OR IGNORE INTO career_skills (career_id, skill_id, importance_level) VALUES
  ('car_swe', 'sk_lin_alg', 'FOUNDATIONAL'),
  ('car_swe', 'sk_algo_logic', 'CRITICAL'),
  ('car_aero', 'sk_lin_alg', 'CRITICAL'),
  ('car_aero', 'sk_data_modeling', 'CRITICAL'),
  ('car_quant', 'sk_lin_alg', 'CRITICAL'),
  ('car_quant', 'sk_data_modeling', 'CRITICAL'),
  ('car_biomed', 'sk_data_modeling', 'IMPORTANT');

-- 11. CAREER SUBJECTS LINKAGE (Explaining to students: Why learn Math?)
INSERT OR IGNORE INTO career_subjects (career_id, subject_id, relevance_explanation) VALUES
  ('car_swe', 'subj_math', 'Linear equations and discrete algebra form the basis of all computer graphics, game physics engines, search ranking algorithms, and machine learning neural weights.'),
  ('car_aero', 'subj_math', 'Balancing linear forces and structural integrity requires formulating and solving multi-term equations to maintain equilibrium and aerodynamic stability.'),
  ('car_quant', 'subj_math', 'Portfolio optimization and risk hedging directly apply systems of linear equations to identify optimal investment allocations.'),
  ('car_biomed', 'subj_math', 'Linear models help medical researchers identify correlations between gene expression rates and patient response to treatments.');

-- 12. PATHWAYS (School to Career Navigation)
INSERT OR IGNORE INTO pathways (id, career_id, title, slug, starting_grade_level, steps_json, created_at) VALUES
  ('path_swe', 'car_swe', 'Middle School to Software Architect Pathway', 'middle-school-to-software-engineer', 8,
   '[
     {"stage": "Grade 8-9 Foundation", "title": "Algebra & Computational Thinking", "description": "Master linear equations, variables on both sides, coordinate geometry, and basic Python or JavaScript logic.", "milestone": "CCSS Grade 8 Math / GCSE Math Foundation"},
     {"stage": "High School Acceleration (Grades 10-12)", "title": "Advanced Functions & AP Computer Science", "description": "Complete Precalculus, AP Computer Science A (Java), and Calculus AB/BC. Build first full-stack web project.", "milestone": "AP/GCSE/IB Calculus & Portfolio"},
     {"stage": "Higher Education & Internships", "title": "University / Apprenticeship", "description": "Pursue a B.S. in Computer Science or accredited Software Engineering Degree Apprenticeship. Secure competitive tech internships.", "milestone": "Degree / Professional Apprenticeship"},
     {"stage": "Professional Launch", "title": "Associate Engineer to Staff Architect", "description": "Contribute to distributed systems, master system design, and lead architecture decisions.", "milestone": "Senior / Staff Engineer Title"}
   ]',
   '2026-09-12T00:00:00Z'
  );

-- 13. OPPORTUNITIES (Scholarships & STEM Competitions)
INSERT OR IGNORE INTO opportunities (id, title, slug, type, provider_name, award_amount, currency, deadline, eligibility_summary, application_url, is_verified, created_at, updated_at) VALUES
  ('opp_us_merit', 'National Merit Scholarship Competition', 'national-merit-scholarship', 'SCHOLARSHIP', 'National Merit Scholarship Corporation', 2500, 'USD', 'October annually (PSAT)', 'US high school students who take the PSAT/NMSQT and meet top 1% state qualifying scores.', 'https://www.nationalmerit.org', 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('opp_ca_schulich', 'Schulich Leader Scholarships (STEM)', 'schulich-leader-stem', 'SCHOLARSHIP', 'Schulich Foundation', 120000, 'CAD', 'January annually', 'Graduating high school/CEGEP students in Canada pursuing STEM degrees at 20 partner universities.', 'https://schulichleaders.com', 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('opp_gb_ukmt', 'UKMT Junior & Intermediate Mathematical Challenges', 'ukmt-math-challenge', 'COMPETITION', 'United Kingdom Mathematics Trust', 0, 'GBP', 'April annually', 'Secondary school students in England, Scotland, Wales, and Northern Ireland across Years 7-11.', 'https://ukmt.org.uk', 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('opp_au_westpac', 'Westpac Young Technologists Scholarship', 'westpac-young-technologists', 'SCHOLARSHIP', 'Westpac Scholars Trust', 20000, 'AUD', 'December annually', 'Australian citizens/permanent residents entering technology-related undergraduate degrees.', 'https://scholars.westpacgroup.com.au', 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z'),
  ('opp_nz_pm_science', 'Prime Minister''s Future Scientist Prize', 'nz-pm-future-scientist', 'COMPETITION', 'Royal Society Te Apārangi', 50000, 'NZD', 'September annually', 'Year 12 or 13 students in New Zealand undertaking nominated science, math, or technology research.', 'https://pmscienceprizes.org.nz', 1, '2026-09-12T00:00:00Z', '2026-09-12T00:00:00Z');
