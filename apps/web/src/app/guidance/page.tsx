'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface CareerProfile {
  id: string;
  title: string;
  sector: string;
  medianSalary: string;
  growthRate: string;
  education: string;
  summary: string;
  whyMathMatters: string;
  keySkills: string[];
  pathwaySteps: Array<{
    stage: string;
    title: string;
    description: string;
    milestone: string;
  }>;
}

const CAREERS: CareerProfile[] = [
  {
    id: 'swe',
    title: 'Software Engineer & Systems Architect',
    sector: 'Technology & AI',
    medianSalary: '$138,000 / yr',
    growthRate: '+25% (High Growth)',
    education: "Bachelor's Degree in CS or Demonstrated Portfolio",
    summary: 'Architects distributed cloud platforms, machine learning models, and real-time interactive systems powering modern computing.',
    whyMathMatters: 'Linear equations and matrix transformations form the mathematical backbone of 3D game engines, neural network weights, and route optimization algorithms.',
    keySkills: ['Linear Equations & Vector Spaces', 'Algorithmic Logic', 'Distributed Systems', 'Data Structures'],
    pathwaySteps: [
      {
        stage: 'Grade 8–9 Foundation',
        title: 'Linear Equations & Computational Logic',
        description: 'Master solving multi-step equations with variables on both sides. Begin programming in Python or JavaScript.',
        milestone: 'CCSS Grade 8 Math / GCSE Algebra'
      },
      {
        stage: 'High School Acceleration',
        title: 'AP / IB Computer Science & Precalculus',
        description: 'Complete Object-Oriented Programming, Calculus AB/BC, and build full-stack web applications.',
        milestone: 'Top Scores in Advanced Math & CS'
      },
      {
        stage: 'Higher Education & Experience',
        title: 'Computer Science Degree or Apprenticeship',
        description: 'Study algorithms, operating systems, and computer architecture. Complete summer software internships.',
        milestone: 'Industry Software Internship'
      },
      {
        stage: 'Professional Mastery',
        title: 'Staff Engineer & Systems Architect',
        description: 'Lead large-scale system designs, optimize data infrastructure, and mentor junior engineers.',
        milestone: 'Principal / Staff Title'
      }
    ]
  },
  {
    id: 'aero',
    title: 'Aerospace & Propulsion Engineer',
    sector: 'Engineering & Defense',
    medianSalary: '$130,000 / yr',
    growthRate: '+6% (Steady)',
    education: "Bachelor's Degree in Aerospace or Mechanical Engineering",
    summary: 'Designs, manufactures, and verifies orbital launch vehicles, commercial aircraft, and planetary exploration probes.',
    whyMathMatters: 'Balancing thrust, drag, weight, and lift requires formulating systems of linear and differential equations to maintain steady flight equilibrium.',
    keySkills: ['Fluid Dynamics', 'Linear System Balancing', 'Thermal Modeling', 'MATLAB & CAD'],
    pathwaySteps: [
      {
        stage: 'Grade 8–9 Foundation',
        title: 'Kinematics & Algebraic Relations',
        description: 'Connect algebraic rates of change to physical motion, velocity, and force balances.',
        milestone: 'Grade 8 Math & Physical Science'
      },
      {
        stage: 'High School Acceleration',
        title: 'Physics C Mechanics & Multivariable Math',
        description: 'Master Newtonian mechanics, vector decomposition, and advanced calculus.',
        milestone: 'Science Fair / Rocketry Club'
      },
      {
        stage: 'Higher Education & Experience',
        title: 'Aerospace Engineering (BS / MS)',
        description: 'Participate in propulsion research and flight simulation wind tunnel testing.',
        milestone: 'NASA / Commercial Space Internship'
      },
      {
        stage: 'Professional Mastery',
        title: 'Lead Flight Systems Engineer',
        description: 'Oversee trajectory calculations, thermal protection systems, and launch readiness.',
        milestone: 'Flight Certification Sign-off'
      }
    ]
  },
  {
    id: 'quant',
    title: 'Quantitative Financial Analyst',
    sector: 'Finance & Economics',
    medianSalary: '$152,000 / yr',
    growthRate: '+12% (Fast)',
    education: "Master's or Bachelor's in Applied Mathematics or Data Science",
    summary: 'Applies rigorous statistical modeling and algorithmic execution to model financial markets and hedge systemic risks.',
    whyMathMatters: 'Arbitrage pricing and capital asset pricing models are formulated directly as systems of linear equations solved in microseconds.',
    keySkills: ['Linear Optimization', 'Probability & Statistics', 'C++ / Python', 'Risk Hedging'],
    pathwaySteps: [
      {
        stage: 'Grade 8–9 Foundation',
        title: 'Equations, Ratios & Percent Proportions',
        description: 'Build intuition around exponential growth, compound rates, and linear slope comparisons.',
        milestone: 'State Math Competition Finalist'
      },
      {
        stage: 'High School Acceleration',
        title: 'Statistics, AP Calculus BC & Microeconomics',
        description: 'Study regression models, statistical hypothesis testing, and algorithmic trading scripts.',
        milestone: 'National Math Olympiad Honors'
      },
      {
        stage: 'Higher Education & Experience',
        title: 'Mathematics / Financial Engineering Degree',
        description: 'Implement Monte Carlo simulations, stochastic calculus, and high-frequency trading engines.',
        milestone: 'Quantitative Trading Desk Internship'
      },
      {
        stage: 'Professional Mastery',
        title: 'Head of Quantitative Strategy',
        description: 'Manage institutional portfolios, develop proprietary algorithmic models, and monitor risk.',
        milestone: 'Portfolio Management Leadership'
      }
    ]
  },
  {
    id: 'biomed',
    title: 'Biomedical Data Scientist',
    sector: 'Healthcare & Biotechnology',
    medianSalary: '$122,000 / yr',
    growthRate: '+18% (Very High)',
    education: "Master's or Bachelor's in Bioinformatics or Computational Biology",
    summary: 'Discovers cancer biomarkers and designs personalized gene therapies by parsing massive genomic sequencing datasets.',
    whyMathMatters: 'Gene expression matrices and drug dosage curves are analyzed using linear regression and multi-variable statistical equations.',
    keySkills: ['Genomic Data Science', 'Linear Regression', 'Bioinformatics', 'Clinical Analytics'],
    pathwaySteps: [
      {
        stage: 'Grade 8–9 Foundation',
        title: 'Cell Biology & Algebraic Modeling',
        description: 'Understand exponential cellular division and model population growth using algebraic functions.',
        milestone: 'Grade 8 Biology & Math'
      },
      {
        stage: 'High School Acceleration',
        title: 'AP Biology, Chemistry & Statistics',
        description: 'Conduct laboratory assays, extract DNA samples, and analyze biological variance statistically.',
        milestone: 'State Science Fair Placement'
      },
      {
        stage: 'Higher Education & Experience',
        title: 'Bioinformatics / Computational Biology',
        description: 'Analyze CRISPR sequences, write RNA-seq pipelines, and collaborate with oncology clinics.',
        milestone: 'Genomics Lab Research Paper'
      },
      {
        stage: 'Professional Mastery',
        title: 'Senior Computational Biologist',
        description: 'Identify breakthrough therapeutic candidates and guide targeted clinical trial designs.',
        milestone: 'Patented Therapeutic Biomarker'
      }
    ]
  },
  {
    id: 'jee',
    title: 'IIT Engineer & Deep Tech Innovator (JEE Pathway)',
    sector: 'Engineering & Advanced Technology',
    medianSalary: '₹28,00,000 – ₹65,00,000 / yr',
    growthRate: '+30% (Apex Demand)',
    education: 'B.Tech / M.Tech from Indian Institutes of Technology (IITs)',
    summary: 'Pioneers cutting-edge artificial intelligence architectures, semiconductor chips, aerospace propulsion, and scalable distributed systems.',
    whyMathMatters: 'Advanced calculus, coordinate geometry, linear algebra, and complex numbers are the foundational pillars tested in JEE Advanced and applied in quantum algorithms and robotics.',
    keySkills: ['Multi-Concept Calculus', 'Vector Algebra & 3D Geometry', 'Mechanics & Thermodynamics', 'Algorithmic Optimization'],
    pathwaySteps: [
      {
        stage: 'Classes 8–9 Foundation',
        title: 'NCERT Mastery & Conceptual Logic',
        description: 'Build rigorous problem-solving habits in linear equations, exponents, coordinate geometry, and kinematics fundamentals.',
        milestone: 'Top Scores in Class 9 Math & Science'
      },
      {
        stage: 'Classes 10–12 Acceleration',
        title: 'PCM Stream & JEE Main / Advanced Mastery',
        description: 'Master Class 11 and 12 Physics, Chemistry, and Mathematics. Solve previous years’ JEE Advanced multi-concept problems and mock CBT drills.',
        milestone: 'Top 1% Percentile in JEE Main & Top AIR in JEE Advanced'
      },
      {
        stage: 'IIT Undergraduate Degree',
        title: 'B.Tech at Premier IIT (Bombay, Delhi, Madras, etc.)',
        description: 'Complete 4-year engineering curriculum with industry internships, open-source projects, and research publications.',
        milestone: 'IIT Campus Placement / Graduate Fellowship'
      },
      {
        stage: 'Industry Leadership',
        title: 'Principal Systems Architect / Deep Tech Founder',
        description: 'Direct core engineering teams, file international patents, and build high-impact technological innovations.',
        milestone: 'Staff Architect / Technology Founder'
      }
    ]
  },
  {
    id: 'neet',
    title: 'Medical Doctor & Surgical Specialist (NEET Pathway)',
    sector: 'Healthcare & Clinical Medicine',
    medianSalary: '₹24,00,000 – ₹55,00,000 / yr',
    growthRate: '+22% (Essential Lifespan Demand)',
    education: 'MBBS + MD / MS from AIIMS or Top Government Medical Colleges',
    summary: 'Diagnoses complex clinical pathologies, performs life-saving surgeries, and drives biomedical clinical research.',
    whyMathMatters: 'Pharmacokinetic dosing, medical imaging physics, and biostatistics in clinical trials require precise mathematical and chemical proportion balances.',
    keySkills: ['Human Anatomy & Physiology', 'Organic Chemistry Mechanisms', 'Biostatistics & Diagnostics', 'Clinical Pharmacology'],
    pathwaySteps: [
      {
        stage: 'Classes 8–9 Foundation',
        title: 'Cellular Biology & Chemical Reactions',
        description: 'Master cell structures, plant and animal tissues, diversity in living organisms, and chemical classification.',
        milestone: 'Foundation Science Distinction'
      },
      {
        stage: 'Classes 10–12 Acceleration',
        title: 'PCB Stream & 100% NCERT NEET Mastery',
        description: 'Memorize and master every diagram and line in NCERT Biology Class 11 and 12. Master physical chemistry calculations and physics mechanics for NEET 720-mark speed.',
        milestone: '680+ / 720 Score in NEET-UG (AIR Cutoff for AIIMS / GMCs)'
      },
      {
        stage: 'Medical School & Residency',
        title: 'MBBS Degree & Compulsory Rotatory Internship',
        description: 'Complete 5.5-year MBBS curriculum including clinical rotations across surgery, internal medicine, pediatrics, and emergency care.',
        milestone: 'National Exit Test (NExT) / Post-Graduate MD Entrance'
      },
      {
        stage: 'Super-Specialty Practice',
        title: 'Consultant Surgeon / Medical Super-Specialist',
        description: 'Perform advanced microsurgical procedures, lead hospital departments, and publish clinical trials.',
        milestone: 'Chief Medical Consultant Title'
      }
    ]
  },
  {
    id: 'cuet',
    title: 'Economist, Public Policy & Civil Services (CUET Pathway)',
    sector: 'Economics, Governance & Finance',
    medianSalary: '₹18,00,000 – ₹45,00,000 / yr',
    growthRate: '+15% (High Impact)',
    education: 'B.A. (Hons) from University of Delhi (SRCC/St. Stephen’s) / Central University',
    summary: 'Formulates national fiscal policy, conducts macroeconomic forecasting, and advises international organizations or multinational corporations.',
    whyMathMatters: 'Econometric models, game theory, and market equilibria depend directly on linear algebra, differential calculus, and statistical hypothesis testing.',
    keySkills: ['Econometric Modeling', 'Public Policy Analysis', 'Statistical Inference', 'Financial Optimization'],
    pathwaySteps: [
      {
        stage: 'Classes 8–9 Foundation',
        title: 'Social Sciences & Quantitative Aptitude',
        description: 'Develop strong critical reading, Indian and global history context, and foundational algebraic logic.',
        milestone: 'Class 10 Board Distinction'
      },
      {
        stage: 'Classes 10–12 Acceleration',
        title: 'Commerce / Humanities Stream & CUET Preparation',
        description: 'Study Microeconomics, Macroeconomics, Mathematics, and Political Science. Practice CUET domain tests and general aptitude speed drills.',
        milestone: '99+ Percentile in CUET Domain Subjects'
      },
      {
        stage: 'Central University Collegiate',
        title: 'B.A. (Hons) Economics / B.Com at DU (SRCC/St. Stephen’s)',
        description: 'Study advanced econometrics, monetary economics, and complete research internships with think tanks and investment banks.',
        milestone: 'University Top Honours Graduate'
      },
      {
        stage: 'Senior Governance / Finance',
        title: 'Lead Policy Advisor / Investment Strategist / Civil Servant',
        description: 'Lead national economic development initiatives, oversee sovereign wealth allocations, or serve in public administration.',
        milestone: 'Chief Economist / Senior IAS Officer'
      }
    ]
  }
];

export default function GuidancePage() {
  const [activeCareerId, setActiveCareerId] = useState<string>('swe');

  const selectedCareer = CAREERS.find(c => c.id === activeCareerId) || CAREERS[0];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      <div style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Header Hero */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Guidance & Pathways
            </span>
            <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', background: '#fef3c7', color: '#92400e', fontWeight: 700 }}>
              Curriculum to Career
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0 }}>
            Why Learn This? From Middle School to Future Careers
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '750px' }}>
            Connect classroom curriculum standards directly to real-world impact, high-growth industries, and structured educational roadmaps.
          </p>
        </div>

        {/* Career Selector Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {CAREERS.map((career) => {
            const isSelected = career.id === activeCareerId;
            return (
              <button
                key={career.id}
                onClick={() => setActiveCareerId(career.id)}
                style={{
                  padding: '18px 20px',
                  borderRadius: '20px',
                  border: isSelected ? '2px solid #4f46e5' : '1px solid #e2e8f0',
                  backgroundColor: isSelected ? '#ffffff' : '#ffffff',
                  boxShadow: isSelected ? '0 12px 28px -4px rgba(79, 70, 229, 0.12)' : 'var(--shadow-card)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}
              >
                {isSelected && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4f46e5',
                  }}></div>
                )}
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                  {career.sector}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 8px', lineHeight: 1.3 }}>
                  {career.title}
                </h3>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#059669' }}>
                  {career.medianSalary}
                </div>
              </button>
            );
          })}
        </div>

        {/* Career Profile Deep Dive Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4f46e5' }}>
                {selectedCareer.sector}
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>
                {selectedCareer.title}
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', margin: '6px 0 0', maxWidth: '700px', lineHeight: 1.5 }}>
                {selectedCareer.summary}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ padding: '12px 18px', borderRadius: '16px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#065f46', textTransform: 'uppercase' }}>
                  Median Salary
                </span>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#065f46' }}>
                  {selectedCareer.medianSalary}
                </div>
              </div>

              <div style={{ padding: '12px 18px', borderRadius: '16px', backgroundColor: '#e0f2fe', border: '1px solid #bae6fd' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase' }}>
                  Growth Outlook
                </span>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0369a1' }}>
                  {selectedCareer.growthRate}
                </div>
              </div>
            </div>
          </div>

          {/* Why Math Matters Callout */}
          <div style={{
            padding: '20px 24px',
            borderRadius: '16px',
            backgroundColor: '#f5f7ff',
            border: '1px solid #c7d2fe',
            marginBottom: '28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '1.2rem' }}>💡</span>
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#3730a3' }}>
                Why does Grade 8 Mathematics matter for this career?
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#334155', lineHeight: 1.5 }}>
              {selectedCareer.whyMathMatters}
            </p>
          </div>

          {/* Key Skills */}
          <div style={{ marginBottom: '32px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Core Technical Skills Built from School Curriculum
            </span>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
              {selectedCareer.keySkills.map((sk, i) => (
                <span
                  key={i}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    backgroundColor: '#f1f5f9',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#334155',
                  }}
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>

          {/* Sequential School-to-Career Pathway Timeline */}
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              School-to-Career Pathway Steps
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '14px' }}>
              {selectedCareer.pathwaySteps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#4f46e5',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}>
                    {index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4f46e5', textTransform: 'uppercase' }}>
                        {step.stage}
                      </span>
                      <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', background: '#ecfdf5', color: '#065f46', fontWeight: 700 }}>
                        Milestone: {step.milestone}
                      </span>
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 4px' }}>
                      {step.title}
                    </div>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.45 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
