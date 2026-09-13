import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout } from '../../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Content Attribution & Open Sources Declaration',
  description: 'Official declaration of Schoolopedia as an educational aggregator and curator of open sources, public domain curriculum frameworks, and free educational portals.',
  alternates: {
    canonical: '/content-declaration',
  },
};

export default function ContentDeclarationPage() {
  return (
    <LegalLayout
      title="Content Attribution & Open Sources Declaration"
      subtitle="Public transparency declaration regarding content authorship, open educational sourcing, fair use doctrine, and DMCA takedown procedures."
      badge="Transparency Declaration"
      lastUpdated="September 13, 2026"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Fundamental Declaration Banner */}
        <div style={{
          backgroundColor: '#eff6ff',
          border: '2px solid #3b82f6',
          borderRadius: '12px',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.4rem' }}>📢</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1e3a8a', margin: 0 }}>
              Fundamental Declaration: We Are Not Content Creators
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: '1rem', color: '#1e3a8a', lineHeight: '1.7', fontWeight: 500 }}>
            <strong>Schoolopedia is an educational curation platform and curriculum encyclopedia. We are NOT the original content creators of the underlying textbooks, standardized board questions, official curricula, or third-party video masterclasses indexed on this website.</strong>
          </p>
          <p style={{ margin: 0, fontSize: '0.94rem', color: '#1d4ed8', lineHeight: '1.65' }}>
            Our mission is solely to organize, index, synthesize, and map freely accessible learning materials from verified open sources, public domain educational repositories, and government educational portals into a coherent, navigable curriculum framework for students and educators worldwide.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            1. Purpose and Methodology of Schoolopedia
          </h2>
          <p>
            Millions of students across the globe struggle not from a lack of educational materials on the internet, but from fragmentation, lack of structure, and paywalls.
          </p>
          <p>
            Schoolopedia acts as an open, free educational bridge. We provide:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Standard-by-standard curriculum navigation aligned with official state and national frameworks.</li>
            <li>Pedagogical synthesis, key conceptual breakdowns, worked examples, and interactive diagnostic quizzes.</li>
            <li>Curated indexing of the finest public lectures and masterclasses published openly by dedicated educators.</li>
            <li>100% free, un-gated access with zero subscription walls, zero pay-to-unlock content, and zero login barriers.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            2. Grounding in Open Sources and Public Educational Portals
          </h2>
          <p>
            All academic topics and learning paths on Schoolopedia are strictly grounded in public domain documents and open educational resources (OER) published by statutory education bodies and non-profit educational foundations:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
            {/* Source 1 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 18px', backgroundColor: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                🇮🇳 NCERT & CBSE (India)
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                Textbooks, syllabi, sample question papers, and marking schemes published openly by the National Council of Educational Research and Training (NCERT) and Central Board of Secondary Education (CBSE) under open academic guidance.
              </p>
            </div>

            {/* Source 2 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 18px', backgroundColor: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                🇺🇸 State Depts of Education (USA)
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                Public academic frameworks including the California Department of Education (CDE) Common Core State Standards (CCSS), Texas Essential Knowledge and Skills (TEKS), and New York State Learning Standards.
              </p>
            </div>

            {/* Source 3 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 18px', backgroundColor: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                🇬🇧 UK Department for Education
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                National Curriculum in England frameworks and Key Stages 1–4 programmes of study published under the Open Government Licence (OGL v3.0).
              </p>
            </div>

            {/* Source 4 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 18px', backgroundColor: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                🇦🇺 ACARA (Australia)
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                Australian Curriculum, Assessment and Reporting Authority (ACARA) curriculum learning areas and achievement standards.
              </p>
            </div>

            {/* Source 5 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 18px', backgroundColor: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                🌐 Open Educational Resources (OER)
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                Materials derived from open-access projects licensed under Creative Commons, including OpenStax, PhET Interactive Simulations (University of Colorado Boulder), LibreTexts, and CK-12 Foundation.
              </p>
            </div>

            {/* Source 6 */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 18px', backgroundColor: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                🎥 Video Masterclasses (YouTube API)
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: '1.6' }}>
                Educational lectures curated from YouTube utilizing the standard, official YouTube embed player. All views, watch time, and advertising revenue attributable to videos accrue directly to the original video creators on YouTube.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            3. Non-Affiliation and Trademark Disclaimers
          </h2>
          <p>
            Schoolopedia is an independent platform and is <strong>not affiliated with, endorsed by, sponsored by, or connected to</strong> any government ministry, state board of education, or public testing agency.
          </p>
          <p>
            Specifically:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>&ldquo;CBSE&rdquo; is a registered trademark of the Central Board of Secondary Education, New Delhi, India.</li>
            <li>&ldquo;NCERT&rdquo; is a registered trademark of the National Council of Educational Research and Training, India.</li>
            <li>&ldquo;Common Core&rdquo; and &ldquo;CCSS&rdquo; are trademarks of the National Governors Association Center for Best Practices and the Council of Chief State School Officers.</li>
            <li>&ldquo;ACARA&rdquo; is a statutory authority of the Commonwealth of Australia.</li>
          </ul>
          <p style={{ marginTop: '10px' }}>
            References to these designations, syllabus titles, and grade standards on Schoolopedia are used exclusively for descriptive and identification purposes under the <em>nominative fair use</em> doctrine.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            4. Educational Fair Use Statement
          </h2>
          <p>
            Content organized on Schoolopedia is compiled for non-profit, educational, and transformative reference purposes under:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>United States:</strong> Section 107 of the Copyright Act of 1976 (17 U.S.C. § 107), which provides for the fair use of copyrighted work for purposes such as criticism, comment, scholarship, and education.</li>
            <li><strong>India:</strong> Section 52(1)(a) and Section 52(1)(h) of the Indian Copyright Act, 1957, providing statutory fair dealing exemptions for educational study and research.</li>
            <li><strong>United Kingdom & Commonwealth:</strong> Fair dealing exceptions for the purposes of non-commercial research, private study, and instruction under the Copyright, Designs and Patents Act 1988.</li>
          </ul>
        </section>

        {/* Section 5: FAST-TRACK DMCA AND TAKEDOWN NOTICE */}
        <section style={{
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#991b1b', marginBottom: '12px' }}>
            5. Copyright Owner Inquiries & Fast-Track Takedown Procedure
          </h2>
          <p style={{ color: '#7f1d1d' }}>
            Schoolopedia deeply respects the intellectual property rights of all content creators, teachers, and publishers. If you are a copyright holder or content creator and believe that any material or video indexed on our website exceeds fair use, requires updated attribution, or should be promptly removed:
          </p>

          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #f87171',
            borderRadius: '8px',
            padding: '16px 20px',
            marginTop: '12px',
          }}>
            <p style={{ margin: 0, fontWeight: 700, color: '#991b1b' }}>
              How to submit an inquiry or takedown notice:
            </p>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.94rem', color: '#334155' }}>
              Please send an email to our designated compliance desk:
            </p>
            <div style={{ marginTop: '8px', fontSize: '1.05rem', fontWeight: 800 }}>
              ✉️ Email: <a href="mailto:schoolopedia@usa.com" style={{ color: '#dc2626', textDecoration: 'underline' }}>schoolopedia@usa.com</a>
            </div>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.88rem', color: '#64748b' }}>
              Please include: (1) The specific URL on Schoolopedia, (2) Identification of the work in question, (3) Your relationship to the content (creator, publisher, or authorized agent), and (4) Whether you request updated attribution credit or immediate removal.
            </p>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.88rem', color: '#059669', fontWeight: 700 }}>
              ⚡ Fast-Track Commitment: We review and act upon all legitimate creator and publisher requests within 24 to 48 business hours.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            6. Summary for Students & Educators
          </h2>
          <p>
            Schoolopedia exists to empower self-directed learners and teachers with clear, organized curriculum navigation. If you are an educator or institution wishing to collaborate or share open-access educational resources, please reach out to us at <a href="mailto:schoolopedia@usa.com" style={{ color: '#4f46e5', fontWeight: 600 }}>schoolopedia@usa.com</a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
