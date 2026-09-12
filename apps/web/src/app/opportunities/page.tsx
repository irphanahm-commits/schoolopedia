'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface OpportunityItem {
  id: string;
  title: string;
  type: 'SCHOLARSHIP' | 'COMPETITION' | 'INTERNSHIP' | 'APPRENTICESHIP';
  provider: string;
  award: string;
  countryName: string;
  flag: string;
  deadline: string;
  eligibility: string;
  applicationUrl: string;
  isVerified: boolean;
}

const OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'opp_us_merit',
    title: 'National Merit Scholarship Competition',
    type: 'SCHOLARSHIP',
    provider: 'National Merit Scholarship Corporation',
    award: '$2,500 – Full Tuition Support',
    countryName: 'United States',
    flag: '🇺🇸',
    deadline: 'October annually (via PSAT/NMSQT)',
    eligibility: 'US high school juniors taking the PSAT/NMSQT achieving the top 1% state index.',
    applicationUrl: 'https://www.nationalmerit.org',
    isVerified: true,
  },
  {
    id: 'opp_ca_schulich',
    title: 'Schulich Leader Scholarships (STEM Excellence)',
    type: 'SCHOLARSHIP',
    provider: 'Schulich Foundation',
    award: '$100,000 – $120,000 CAD',
    countryName: 'Canada',
    flag: '🇨🇦',
    deadline: 'January annually (via High School Nomination)',
    eligibility: 'Graduating high school students across Canada entering Science, Tech, Engineering, or Math at 20 partner universities.',
    applicationUrl: 'https://schulichleaders.com',
    isVerified: true,
  },
  {
    id: 'opp_gb_ukmt',
    title: 'UKMT Junior & Intermediate Mathematical Challenges',
    type: 'COMPETITION',
    provider: 'United Kingdom Mathematics Trust',
    award: 'National Gold/Silver Medals & Olympiad Qualification',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    deadline: 'April annually (via Secondary Schools)',
    eligibility: 'Secondary school students in England, Scotland, Wales, and Northern Ireland (Years 7–11).',
    applicationUrl: 'https://ukmt.org.uk',
    isVerified: true,
  },
  {
    id: 'opp_au_westpac',
    title: 'Westpac Young Technologists Scholarship',
    type: 'SCHOLARSHIP',
    provider: 'Westpac Scholars Trust',
    award: '$20,000 AUD + Leadership Coaching',
    countryName: 'Australia',
    flag: '🇦🇺',
    deadline: 'December annually',
    eligibility: 'Australian citizens or permanent residents enrolling in technology-focused undergraduate degrees.',
    applicationUrl: 'https://scholars.westpacgroup.com.au',
    isVerified: true,
  },
  {
    id: 'opp_nz_pm_science',
    title: "Prime Minister's Future Scientist Prize",
    type: 'COMPETITION',
    provider: 'Royal Society Te Apārangi',
    award: '$50,000 NZD Scholarship',
    countryName: 'New Zealand',
    flag: '🇳🇿',
    deadline: 'September annually',
    eligibility: 'Year 12 or 13 students in New Zealand undertaking nominated science, technology, or mathematics research.',
    applicationUrl: 'https://pmscienceprizes.org.nz',
    isVerified: true,
  },
  {
    id: 'opp_in_inspire',
    title: 'INSPIRE Scholarship for Higher Education (SHE)',
    type: 'SCHOLARSHIP',
    provider: 'Department of Science & Technology (DST), Govt of India',
    award: '₹80,000 / yr (Full University Fellowship)',
    countryName: 'India',
    flag: '🇮🇳',
    deadline: 'November annually',
    eligibility: 'Top 1% students in Class 12 board examinations (CBSE, CISCE, State Boards) enrolling in natural and basic sciences degrees at IISc, IISERs, or central universities.',
    applicationUrl: 'https://online-inspire.gov.in',
    isVerified: true,
  },
  {
    id: 'opp_in_olympiad',
    title: 'HBCSE Indian National Olympiad Programme (INMO, INPhO, INChO)',
    type: 'COMPETITION',
    provider: 'Homi Bhabha Centre for Science Education (TIFR)',
    award: 'National Medals, Training at TIFR & International Team Selection',
    countryName: 'India',
    flag: '🇮🇳',
    deadline: 'November annually',
    eligibility: 'School students in India (Classes 8–12) competing through National Standard Examinations (NSE) stages for selection to IMO, IPhO, and IChO teams.',
    applicationUrl: 'https://olympiads.hbcse.tifr.res.in',
    isVerified: true,
  },
  {
    id: 'opp_in_pmyasasvi',
    title: 'PM Young Achievers Scholarship Scheme (PM-YASASVI)',
    type: 'SCHOLARSHIP',
    provider: 'Ministry of Social Justice & Empowerment / NTA',
    award: '₹75,000 – ₹1,25,000 / yr',
    countryName: 'India',
    flag: '🇮🇳',
    deadline: 'August annually',
    eligibility: 'Meritorious students studying in Class 9 and Class 11 in identified Top Class Schools across India.',
    applicationUrl: 'https://yet.nta.ac.in',
    isVerified: true,
  },
];

export default function OpportunitiesPage() {
  const [filterType, setFilterType] = useState<string>('ALL');

  const filtered = filterType === 'ALL'
    ? OPPORTUNITIES
    : OPPORTUNITIES.filter(o => o.type === filterType);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      <div style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Header Hero */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Opportunities Board
            </span>
            <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', background: '#fef3c7', color: '#92400e', fontWeight: 700 }}>
              Pillar 4
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0 }}>
            Scholarships, STEM Competitions & Apprenticeships
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '750px' }}>
            Discover vetted opportunities in the US, UK, Canada, Australia, and New Zealand to fund your education, demonstrate curriculum mastery, and accelerate your pathway.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { label: '🌟 All Opportunities', value: 'ALL' },
              { label: '🎓 Scholarships', value: 'SCHOLARSHIP' },
              { label: '🏆 Competitions & Olympiads', value: 'COMPETITION' },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilterType(btn.value)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: filterType === btn.value ? '2px solid #4f46e5' : '1px solid #e2e8f0',
                  backgroundColor: filterType === btn.value ? '#4f46e5' : '#ffffff',
                  color: filterType === btn.value ? '#ffffff' : '#334155',
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
        </div>

        {/* Opportunities List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filtered.map((opp) => (
            <div
              key={opp.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
                padding: '28px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div style={{ flex: 1, minWidth: '280px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.5rem' }}>{opp.flag}</span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '6px',
                    backgroundColor: opp.type === 'SCHOLARSHIP' ? '#ecfdf5' : '#e0f2fe',
                    color: opp.type === 'SCHOLARSHIP' ? '#065f46' : '#0369a1',
                  }}>
                    {opp.type}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    {opp.countryName}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 6px' }}>
                  {opp.title}
                </h2>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Provided by <strong>{opp.provider}</strong>
                </div>

                <p style={{ margin: '0 0 14px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {opp.eligibility}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.82rem', color: '#64748b' }}>
                  <span>⏳ <strong>Deadline:</strong> {opp.deadline}</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>✓ Verified Authority</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', minWidth: '180px' }}>
                <div style={{
                  padding: '12px 18px',
                  borderRadius: '16px',
                  backgroundColor: '#f5f7ff',
                  border: '1px solid #c7d2fe',
                  textAlign: 'right',
                  marginBottom: '16px',
                  width: '100%',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4338ca', textTransform: 'uppercase' }}>
                    Award Value
                  </span>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#3730a3' }}>
                    {opp.award}
                  </div>
                </div>

                <a
                  href={opp.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 20px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#4f46e5',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  Official Portal ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
