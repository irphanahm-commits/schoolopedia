'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchModal } from '@/components/SearchModal';

interface InstitutionItem {
  name: string;
  type: string;
  city: string;
  stateOrProvince: string;
  countryCode: string;
  countryName: string;
  flag: string;
  websiteUrl: string;
  accreditation: string;
  nationalRanking: number;
  highlightProgram: string;
}

const INSTITUTIONS: InstitutionItem[] = [
  {
    name: 'University of California, Berkeley',
    type: 'Public Research University',
    city: 'Berkeley',
    stateOrProvince: 'California',
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    websiteUrl: 'https://berkeley.edu',
    accreditation: 'WASC',
    nationalRanking: 1,
    highlightProgram: 'B.S. Electrical Engineering & Computer Sciences (EECS)',
  },
  {
    name: 'Stanford University',
    type: 'Private Research University',
    city: 'Stanford',
    stateOrProvince: 'California',
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    websiteUrl: 'https://stanford.edu',
    accreditation: 'WASC',
    nationalRanking: 2,
    highlightProgram: 'B.S. Symbolic Systems & Artificial Intelligence',
  },
  {
    name: 'University of Texas at Austin',
    type: 'Public Flagship University',
    city: 'Austin',
    stateOrProvince: 'Texas',
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    websiteUrl: 'https://utexas.edu',
    accreditation: 'SACSCOC',
    nationalRanking: 9,
    highlightProgram: 'Turing Scholars Honors in Computer Science',
  },
  {
    name: 'University of Oxford',
    type: 'Collegiate Research University',
    city: 'Oxford',
    stateOrProvince: 'Oxfordshire',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://ox.ac.uk',
    accreditation: 'QAA',
    nationalRanking: 1,
    highlightProgram: 'BA / MMath Mathematics & Computer Science',
  },
  {
    name: 'Imperial College London',
    type: 'Public STEM Specialist University',
    city: 'London',
    stateOrProvince: 'Greater London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    websiteUrl: 'https://imperial.ac.uk',
    accreditation: 'QAA',
    nationalRanking: 2,
    highlightProgram: 'MEng Computing & Software Engineering',
  },
  {
    name: 'University of Toronto',
    type: 'Public Research University',
    city: 'Toronto',
    stateOrProvince: 'Ontario',
    countryCode: 'CA',
    countryName: 'Canada',
    flag: '🇨🇦',
    websiteUrl: 'https://utoronto.ca',
    accreditation: 'PEQAB',
    nationalRanking: 1,
    highlightProgram: 'Engineering Science (Aerospace & Robotics Major)',
  },
  {
    name: 'University of Waterloo',
    type: 'Co-op Innovation University',
    city: 'Waterloo',
    stateOrProvince: 'Ontario',
    countryCode: 'CA',
    countryName: 'Canada',
    flag: '🇨🇦',
    websiteUrl: 'https://uwaterloo.ca',
    accreditation: 'PEQAB',
    nationalRanking: 3,
    highlightProgram: 'B.Math / B.CS Software Engineering with Paid Co-op',
  },
  {
    name: 'University of Sydney',
    type: 'Group of Eight Research University',
    city: 'Sydney',
    stateOrProvince: 'New South Wales',
    countryCode: 'AU',
    countryName: 'Australia',
    flag: '🇦🇺',
    websiteUrl: 'https://sydney.edu.au',
    accreditation: 'TEQSA',
    nationalRanking: 2,
    highlightProgram: 'Bachelor of Advanced Computing (Honours)',
  },
  {
    name: 'UNSW Sydney',
    type: 'Group of Eight Technology Leader',
    city: 'Sydney',
    stateOrProvince: 'New South Wales',
    countryCode: 'AU',
    countryName: 'Australia',
    flag: '🇦🇺',
    websiteUrl: 'https://unsw.edu.au',
    accreditation: 'TEQSA',
    nationalRanking: 3,
    highlightProgram: 'Bachelor of Quantum Engineering & Mathematics',
  },
  {
    name: 'University of Auckland',
    type: 'Comprehensive Research University',
    city: 'Auckland',
    stateOrProvince: 'Auckland',
    countryCode: 'NZ',
    countryName: 'New Zealand',
    flag: '🇳🇿',
    websiteUrl: 'https://auckland.ac.nz',
    accreditation: 'NZQA',
    nationalRanking: 1,
    highlightProgram: 'Bachelor of Science (Data Science & Applied Math)',
  },
];

export default function ExplorePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');

  const filtered = selectedCountry === 'ALL'
    ? INSTITUTIONS
    : INSTITUTIONS.filter(inst => inst.countryCode === selectedCountry);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      <main style={{ flex: 1, padding: '40px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Header Hero */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Explore Higher Education
            </span>
            <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', background: '#ecfdf5', color: '#065f46', fontWeight: 700 }}>
              Verified Institutions
            </span>
          </div>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0 }}>
            Leading Universities & Programs in Tier 1 Countries
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '750px' }}>
            Discover where your middle school and high school curriculum can take you. Research accredited colleges, research powerhouses, and high-impact STEM programs.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { label: '🌍 All Tier 1', value: 'ALL' },
              { label: '🇺🇸 United States', value: 'US' },
              { label: '🇬🇧 United Kingdom', value: 'GB' },
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
        </div>

        {/* Institutions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
          {filtered.map((inst, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
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
                      <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                        {inst.name}
                      </h2>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {inst.city}, {inst.stateOrProvince}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.78rem', padding: '3px 8px', borderRadius: '6px', background: '#f5f3ff', color: '#6d28d9', fontWeight: 700 }}>
                    #{inst.nationalRanking} National
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  <strong>Type:</strong> {inst.type}<br />
                  <strong>Accreditation:</strong> {inst.accreditation}
                </p>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  marginBottom: '16px',
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Featured Program
                  </span>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>
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
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
