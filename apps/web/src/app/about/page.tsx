import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout } from '../../components/LegalLayout';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Schoolopedia, our mission to democratize curriculum-aware K-12 education, open sources curation, and zero-cost edge infrastructure.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <LegalLayout
      title="About Schoolopedia"
      subtitle="The Curriculum-Aware Education Encyclopedia democratizing structured, high-quality K-12 learning worldwide with zero paywalls."
      badge="About Our Mission"
      lastUpdated="September 13, 2026"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Mission Statement Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
          border: '1px solid #bae6fd',
          borderRadius: '12px',
          padding: '24px 28px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.4rem' }}>🌍</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0369a1', margin: 0 }}>
              Our Core Mission
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: '1.05rem', color: '#0c4a6e', lineHeight: '1.7', fontWeight: 500 }}>
            Every child, regardless of geographical location, economic background, or school district funding, deserves instant, free access to clear, syllabus-aligned learning materials. Schoolopedia was built to make curriculum mastery universally accessible, structured, and 100% free forever.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            1. What Is Schoolopedia?
          </h2>
          <p>
            Schoolopedia is an open education encyclopedia. While traditional search engines return millions of scattered links and commercial learning portals lock content behind monthly subscriptions, Schoolopedia provides a structured, curriculum-aware framework.
          </p>
          <p>
            We meticulously index 78 Tier 1 education jurisdictions—covering all 50 US states, India (CBSE & NCERT), England and Northern Ireland, Canadian provinces, and Australian states and territories—allowing students and teachers to navigate their exact grade standards with complete confidence.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            2. The Pillars of Schoolopedia
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '16px' }}>
            {/* Pillar 1 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#f8fafc' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💎</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
                100% Free Forever
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                Zero paywalls, zero premium tiers, and zero locked chapters. We fund operations sustainably via responsible, non-intrusive advertisements (Google AdSense) and edge server efficiency.
              </p>
            </div>

            {/* Pillar 2 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#f8fafc' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎯</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
                Curriculum-Aware Alignment
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                Every lesson is mapped to official standards: California CCSS, CBSE/NCERT Class 6–12, UK National Curriculum, and Australian ACARA standards.
              </p>
            </div>

            {/* Pillar 3 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#f8fafc' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔒</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
                Privacy-First Learning
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                No registration required. Students track their learning progress, watched videos, and quiz scores privately on their own local device storage without transmitting personal data.
              </p>
            </div>

            {/* Pillar 4 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', backgroundColor: '#f8fafc' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎥</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
                Curated Open Masterclasses
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                We curate high-yield educational lectures from world-class educators and open repositories, respecting creator attribution and licensing through official embed players.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            3. Open Educational Curation Philosophy
          </h2>
          <p>
            Schoolopedia operates as a public educational curator and index. We are not content creators claiming proprietary ownership of state curriculum frameworks or textbook questions. We curate and link directly to public domain frameworks from institutions like NCERT, CBSE, and state education departments, pairing them with interactive learning assessments and pedagogical notes.
          </p>
          <p>
            Learn more about our curation sources and copyright policies in our <Link href="/content-declaration" style={{ color: '#4f46e5', fontWeight: 600 }}>Content Attribution & Open Sources Declaration</Link>.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            4. Contact and Collaboration
          </h2>
          <p>
            We welcome feedback from students, parents, school principals, and academic researchers. Whether you want to suggest new curriculum frameworks, report content updates, or partner with us:
          </p>
          <div style={{
            marginTop: '12px',
            padding: '16px 20px',
            backgroundColor: '#f1f5f9',
            borderRadius: '8px',
            fontSize: '0.95rem',
          }}>
            <div><strong>Schoolopedia Editorial & Advisory Board</strong></div>
            <div><strong>General Inquiries & Feedback:</strong> <a href="mailto:schoolopedia@usa.com" style={{ color: '#4f46e5', fontWeight: 700 }}>schoolopedia@usa.com</a></div>
            <div><strong>Official Portal:</strong> <a href="https://schoolopedia.com" style={{ color: '#4f46e5' }}>https://schoolopedia.com</a></div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
