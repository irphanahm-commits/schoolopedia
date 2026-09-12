'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  TIER1_COUNTRIES,
  TIER1_JURISDICTIONS,
  STANDARD_COURSES,
  getJurisdictionsByCountry,
  JurisdictionInfo
} from '@/lib/curriculum-data';

export default function LearnPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('us');
  const [selectedJurisdictionSlug, setSelectedJurisdictionSlug] = useState<string>('california');
  const [selectedGradeBand, setSelectedGradeBand] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [jurisdictionSearchQuery, setJurisdictionSearchQuery] = useState<string>('');

  // Jurisdictions for currently active country
  const currentCountryJurisdictions = useMemo(() => {
    return getJurisdictionsByCountry(selectedCountry);
  }, [selectedCountry]);

  // Handle country switch: auto-select first jurisdiction in that country
  const handleSelectCountry = (countryCode: string) => {
    setSelectedCountry(countryCode);
    const countryObj = TIER1_COUNTRIES.find(c => c.code === countryCode);
    if (countryObj) {
      setSelectedJurisdictionSlug(countryObj.defaultJurisdiction);
    }
  };

  // Active jurisdiction metadata
  const activeJurisdiction: JurisdictionInfo = useMemo(() => {
    return (
      currentCountryJurisdictions.find(j => j.slug === selectedJurisdictionSlug) ||
      currentCountryJurisdictions[0] ||
      TIER1_JURISDICTIONS[0]
    );
  }, [currentCountryJurisdictions, selectedJurisdictionSlug]);

  // Filtered jurisdictions matching search query
  const filteredJurisdictions = useMemo(() => {
    if (!jurisdictionSearchQuery.trim()) return currentCountryJurisdictions;
    const q = jurisdictionSearchQuery.toLowerCase();
    return currentCountryJurisdictions.filter(
      j => j.name.toLowerCase().includes(q) || j.authority.toLowerCase().includes(q) || j.framework.toLowerCase().includes(q)
    );
  }, [currentCountryJurisdictions, jurisdictionSearchQuery]);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return STANDARD_COURSES.filter(c => {
      const matchGrade = selectedGradeBand === 'all' || c.gradeBand === selectedGradeBand;
      const matchSubject = selectedSubject === 'all' || c.subjectSlug === selectedSubject;
      return matchGrade && matchSubject;
    });
  }, [selectedGradeBand, selectedSubject]);

  const subjectBadges: Record<string, { bg: string; text: string; icon: string }> = {
    'mathematics': { bg: '#EEF2FF', text: '#4338CA', icon: '📐' },
    'science': { bg: '#E0F2FE', text: '#0369A1', icon: '🔬' },
    'english': { bg: '#ECFDF5', text: '#047857', icon: '📚' },
    'civics': { bg: '#FEF3C7', text: '#B45309', icon: '🏛️' },
    'computer-science': { bg: '#F3E8FF', text: '#7E22CE', icon: '💻' }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem', width: '100%' }}>
        {/* Top Breadcrumb & Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            backgroundColor: '#EEF2FF',
            color: '#4F46E5',
            fontSize: '0.8125rem',
            fontWeight: 600
          }}>
            <span>🌍</span> 78 Tier 1 Jurisdictions Supported
          </span>
          <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>•</span>
          <span style={{ color: '#64748B', fontSize: '0.875rem' }}>Elementary to High School</span>
          <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>•</span>
          <span style={{ color: '#64748B', fontSize: '0.875rem' }}>Verified Working Video Curations</span>
        </div>

        {/* Hero Section */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Curriculum Encyclopedia Directory
          </h1>
          <p style={{ fontSize: '1.0625rem', color: '#475569', maxWidth: '850px', lineHeight: 1.6 }}>
            Explore rigorous, curriculum-aware learning pathways mapped to official education departments across the United States, United Kingdom, Canada, Australia, and New Zealand. Every lesson includes verified video curations, worked examples, interactive practice, and mastery quizzes.
          </p>
        </div>

        {/* Country Selector Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          padding: '0.5rem',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 4px 12px -2px rgba(79, 70, 229, 0.05)',
          border: '1px solid #E2E8F0',
          marginBottom: '2rem',
          overflowX: 'auto'
        }}>
          {TIER1_COUNTRIES.map(country => {
            const isActive = selectedCountry === country.code;
            return (
              <button
                key={country.code}
                onClick={() => handleSelectCountry(country.code)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: isActive ? '#4F46E5' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#475569',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{country.flag}</span>
                <span>{country.name}</span>
                <span style={{
                  padding: '0.125rem 0.5rem',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : '#F1F5F9',
                  color: isActive ? '#FFFFFF' : '#64748B',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {country.jurisdictionCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Jurisdiction Banner */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '1.75rem 2rem',
          border: '1px solid #E2E8F0',
          boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.06)',
          marginBottom: '2.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.75rem' }}>{activeJurisdiction.flag}</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  {activeJurisdiction.name} Education Standards
                </h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', fontSize: '0.875rem', color: '#64748B' }}>
                <span style={{ fontWeight: 600, color: '#334155' }}>Authority:</span>
                <span>{activeJurisdiction.authority}</span>
                <span>•</span>
                <span style={{ fontWeight: 600, color: '#334155' }}>Framework:</span>
                <span style={{ color: '#4F46E5', fontWeight: 600 }}>{activeJurisdiction.framework}</span>
                <span>•</span>
                <span>{activeJurisdiction.grades}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <a
                href={activeJurisdiction.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  color: '#475569',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>Official Dept Portal</span>
                <span>↗</span>
              </a>
              <Link
                href={`/learn/${activeJurisdiction.countryCode}/${activeJurisdiction.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.5rem 1.125rem',
                  borderRadius: '10px',
                  backgroundColor: '#4F46E5',
                  color: '#FFFFFF',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.2)'
                }}
              >
                <span>Jurisdiction Overview</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Quick Jurisdiction Selector Dropdown / Search */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>
                Select State, Nation or Province ({currentCountryJurisdictions.length}):
              </span>
              <div style={{ flex: 1, minWidth: '240px', maxWidth: '400px' }}>
                <input
                  type="text"
                  placeholder={`Search ${activeJurisdiction.countryName} places...`}
                  value={jurisdictionSearchQuery}
                  onChange={(e) => setJurisdictionSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.875rem',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.875rem',
                    outline: 'none',
                    backgroundColor: '#F8FAFC'
                  }}
                />
              </div>
            </div>

            {/* Quick Chips of Jurisdictions */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '0.875rem',
              maxHeight: '140px',
              overflowY: 'auto',
              paddingRight: '0.5rem'
            }}>
              {filteredJurisdictions.map(j => {
                const isSelected = j.slug === activeJurisdiction.slug;
                return (
                  <button
                    key={j.slug}
                    onClick={() => {
                      setSelectedJurisdictionSlug(j.slug);
                      setJurisdictionSearchQuery('');
                    }}
                    style={{
                      padding: '0.375rem 0.75rem',
                      borderRadius: '8px',
                      border: isSelected ? '1px solid #4F46E5' : '1px solid #E2E8F0',
                      backgroundColor: isSelected ? '#EEF2FF' : '#FFFFFF',
                      color: isSelected ? '#4F46E5' : '#475569',
                      fontSize: '0.8125rem',
                      fontWeight: isSelected ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    {j.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filters Bar: Grade Bands & Subjects */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}>
          {/* Grade Band Filter */}
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#64748B', marginBottom: '0.5rem' }}>
              Academic Level / Grade Band
            </div>
            <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Grades' },
                { id: 'elementary', label: 'Elementary (Grades 1–5)' },
                { id: 'middle-school', label: 'Middle School (Grades 6–8)' },
                { id: 'high-school', label: 'High School (Grades 9–12)' }
              ].map(grade => {
                const isSel = selectedGradeBand === grade.id;
                return (
                  <button
                    key={grade.id}
                    onClick={() => setSelectedGradeBand(grade.id)}
                    style={{
                      padding: '0.4rem 0.875rem',
                      borderRadius: '8px',
                      border: isSel ? '1px solid #4F46E5' : '1px solid #E2E8F0',
                      backgroundColor: isSel ? '#4F46E5' : '#FFFFFF',
                      color: isSel ? '#FFFFFF' : '#475569',
                      fontSize: '0.8125rem',
                      fontWeight: isSel ? 700 : 500,
                      cursor: 'pointer'
                    }}
                  >
                    {grade.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Filter */}
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#64748B', marginBottom: '0.5rem' }}>
              Core Subject Discipline
            </div>
            <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Subjects', icon: '✨' },
                { id: 'mathematics', label: 'Mathematics', icon: '📐' },
                { id: 'science', label: 'Science', icon: '🔬' },
                { id: 'english', label: 'English / ELA', icon: '📚' },
                { id: 'civics', label: 'Civics & History', icon: '🏛️' },
                { id: 'computer-science', label: 'Computer Science', icon: '💻' }
              ].map(subj => {
                const isSel = selectedSubject === subj.id;
                return (
                  <button
                    key={subj.id}
                    onClick={() => setSelectedSubject(subj.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      padding: '0.4rem 0.875rem',
                      borderRadius: '8px',
                      border: isSel ? '1px solid #4F46E5' : '1px solid #E2E8F0',
                      backgroundColor: isSel ? '#4F46E5' : '#FFFFFF',
                      color: isSel ? '#FFFFFF' : '#475569',
                      fontSize: '0.8125rem',
                      fontWeight: isSel ? 700 : 500,
                      cursor: 'pointer'
                    }}
                  >
                    <span>{subj.icon}</span>
                    <span>{subj.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Courses Grid */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              Available Standard Courses ({filteredCourses.length})
            </h3>
            <span style={{ fontSize: '0.875rem', color: '#64748B' }}>
              Showing courses mapped to {activeJurisdiction.name} ({activeJurisdiction.authority})
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredCourses.map(course => {
              const badge = subjectBadges[course.subjectSlug] || { bg: '#F1F5F9', text: '#475569', icon: '📖' };
              const lessonUrl = `/learn/${activeJurisdiction.countryCode}/${activeJurisdiction.slug}/${course.gradeSlug}/${course.subjectSlug}/${course.sampleLessonSlug}`;
              const courseUrl = `/learn/${activeJurisdiction.countryCode}/${activeJurisdiction.slug}/${course.gradeSlug}/${course.subjectSlug}`;

              return (
                <div
                  key={course.slug}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 16px -2px rgba(79, 70, 229, 0.04)',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                  }}
                >
                  <div>
                    {/* Course Category & Grade Badges */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '8px',
                        backgroundColor: badge.bg,
                        color: badge.text,
                        fontSize: '0.8125rem',
                        fontWeight: 700
                      }}>
                        <span>{badge.icon}</span>
                        <span>{course.subject}</span>
                      </span>

                      <span style={{
                        padding: '0.25rem 0.625rem',
                        borderRadius: '6px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#64748B'
                      }}>
                        {course.grade}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.625rem', lineHeight: 1.4 }}>
                      {course.title}
                    </h4>

                    {/* Standard Tag */}
                    <div style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: '#4F46E5',
                      backgroundColor: '#EEF2FF',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      marginBottom: '1rem'
                    }}>
                      {course.standardCode}
                    </div>

                    {/* Feature Stats */}
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8125rem', color: '#64748B', marginBottom: '1.5rem' }}>
                      <span>📚 {course.lessonCount} Structured Lessons</span>
                      <span>•</span>
                      <span>🎥 Verified Video Curation</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9' }}>
                    <Link
                      href={lessonUrl}
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '0.625rem 1rem',
                        borderRadius: '10px',
                        backgroundColor: '#4F46E5',
                        color: '#FFFFFF',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        boxShadow: '0 2px 8px rgba(79, 70, 229, 0.25)'
                      }}
                    >
                      Start Lesson →
                    </Link>
                    <Link
                      href={courseUrl}
                      style={{
                        padding: '0.625rem 0.875rem',
                        borderRadius: '10px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        color: '#475569',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      Syllabus
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tier 1 Matrix Footer Informational Box */}
        <div style={{
          backgroundColor: '#EEF2FF',
          borderRadius: '16px',
          padding: '1.75rem 2rem',
          border: '1px solid #C7D2FE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h4 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#312E81', marginBottom: '0.25rem' }}>
              Official Standards Provenance & Verification
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#4338CA', margin: 0, maxWidth: '750px' }}>
              All objectives, unit frameworks, and grade boundaries are cross-referenced with primary departmental specifications. Our automated 6-hour cron monitor validates YouTube embeds to maintain zero dead links.
            </p>
          </div>
          <Link
            href="/explore"
            style={{
              padding: '0.625rem 1.25rem',
              borderRadius: '10px',
              backgroundColor: '#4F46E5',
              color: '#FFFFFF',
              fontSize: '0.875rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            Explore Higher Ed Pathways →
          </Link>
        </div>
      </div>
    </div>
  );
}
