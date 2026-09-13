import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout } from '../../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Schoolopedia Terms and Conditions governing use of the free curriculum encyclopedia, study materials, educational content curation, and online services.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      subtitle="Standard terms of service governing access to Schoolopedia's curriculum encyclopedia, educational tools, and open-source learning materials."
      badge="Terms of Service"
      lastUpdated="September 13, 2026"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Important Notice Box */}
        <div style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '12px',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1e40af', fontWeight: 700, fontSize: '0.95rem' }}>
            <span>⚖️</span> User Agreement & Educational Framework
          </div>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#1e3a8a', lineHeight: '1.6' }}>
            By using Schoolopedia, you agree to these Terms. Schoolopedia provides 100% free educational curriculum navigation, indexing open resources and official state frameworks for non-commercial student and educator use.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            1. Acceptance of Terms
          </h2>
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;Student&rdquo;, &ldquo;Educator&rdquo;) and Schoolopedia (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;the Platform&rdquo;), governing your access to and use of <a href="https://schoolopedia.com" style={{ color: '#4f46e5', textDecoration: 'underline' }}>schoolopedia.com</a> and related subdomains, features, and content.
          </p>
          <p>
            If you do not agree with any part of these Terms, you must discontinue your use of the website immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            2. Platform Purpose and Scope of Service
          </h2>
          <p>
            Schoolopedia is an independent, non-commercial education encyclopedia designed to democratize high-quality learning across 78 Tier 1 education jurisdictions, including the United States, India, the United Kingdom, Canada, Australia, and New Zealand.
          </p>
          <p>
            The services provided on Schoolopedia include:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Curriculum standard indexing and cross-jurisdiction alignment maps.</li>
            <li>Interactive study notes, worked examples, and multiple-choice practice quizzes.</li>
            <li>Curated masterclass educational video embeds from reputable open learning channels.</li>
            <li>Client-side study tracking to assist learners in monitoring syllabus completion.</li>
          </ul>
        </section>

        {/* Section 3: MANDATORY CONTENT AGGREGATION & OPEN SOURCES DECLARATION */}
        <section style={{
          backgroundColor: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '12px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#92400e', marginBottom: '12px' }}>
            3. Content Curation & Open Sources Declaration
          </h2>
          <p style={{ color: '#78350f', fontWeight: 600 }}>
            Important Disclosure Regarding Authorship and Content Ownership:
          </p>
          <p style={{ color: '#78350f' }}>
            Schoolopedia acts as an educational organizer, curator, and navigational reference directory. <strong>Schoolopedia is not the original content creator</strong> of the underlying curriculum standards, textbooks, government exam papers, or third-party video lessons hosted on external platforms.
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', color: '#78350f' }}>
            <li>We aggregate and index materials strictly from verified open sources, public domain educational repositories, and authorized educational portals (such as NCERT, CBSE, state departments of education, and open educational resource initiatives).</li>
            <li>Curated video lessons are embedded directly from YouTube in compliance with the YouTube Terms of Service and Creator Attribution guidelines. All video copyrights remain with their respective creators and publishers.</li>
            <li>For our complete attribution registry, fair use justification, and fast-track DMCA takedown procedures, please consult our <Link href="/content-declaration" style={{ color: '#b45309', fontWeight: 700, textDecoration: 'underline' }}>Content Attribution & Open Sources Declaration</Link>.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            4. Permitted Use and Restrictions
          </h2>
          <p>
            You are granted a non-exclusive, non-transferable, revocable license to access and view content on Schoolopedia solely for personal, non-commercial, educational, and classroom study purposes.
          </p>
          <p>You agree not to:</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Use any automated scraping tool, bot, spider, or automated crawler to extract site data for commercial resale or building competing commercial databases.</li>
            <li>Circumvent, disable, or tamper with any security features or rate-limiting headers of the platform.</li>
            <li>Redistribute or sell practice test banks or curriculum synthesis documents under false claims of proprietary ownership.</li>
            <li>Use the website in any manner that could impair, overburden, or disable the server infrastructure or interfere with any other student&apos;s learning experience.</li>
          </ul>
        </section>

        {/* Section 5: ADSENSE & ADVERTISING */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            5. Third-Party Advertising and Sponsored Links
          </h2>
          <p>
            To keep Schoolopedia 100% free forever for all students and educators worldwide, the platform displays non-intrusive advertisements served by third-party advertising networks, primarily <strong>Google AdSense</strong>.
          </p>
          <p>
            Advertisements are clearly demarcated from educational content. Schoolopedia does not endorse, guarantee, or assume liability for the products, claims, or services advertised by third parties. Your interactions with advertisers found on or through Schoolopedia are solely between you and the respective third-party advertiser.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            6. Intellectual Property and Trademarks
          </h2>
          <p>
            The Schoolopedia name, emblem logo, domain names, design system, website layout, database schemas, and proprietary code are the intellectual property of Schoolopedia.
          </p>
          <p>
            All educational board titles, state agency names (such as California Department of Education, CBSE, NCERT, UK Department for Education, Australian ACARA), exam names, and textbook titles are trademarks or registered trademarks of their respective government or institutional holders. Their use on Schoolopedia is solely for nominative educational identification and curriculum mapping purposes under fair use doctrine.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            7. Disclaimer of Warranties
          </h2>
          <p>
            Schoolopedia and all educational materials, notes, quizzes, and videos are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express, statutory, or implied.
          </p>
          <p>
            While we strive for 100% curricular accuracy and verify every lesson against official state frameworks, curriculum standards evolve. We do not warrant that the materials will be error-free, uninterrupted, or that they will guarantee specific examination grades. Users and educators should always verify official circulars with their relevant school district or examination board.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall Schoolopedia, its founders, editors, or contributors be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to access the platform.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            9. Governing Law and Amendments
          </h2>
          <p>
            These Terms are governed by and construed in accordance with applicable general laws, without giving effect to any principles of conflicts of law. We reserve the right to revise or update these Terms at any time by updating this posting. Your continued use of the website following any posted modifications constitutes acceptance of the amended Terms.
          </p>
        </section>

        {/* Section 10 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            10. Contact Information
          </h2>
          <p>
            For legal inquiries, terms clarification, or educational licensing questions:
          </p>
          <div style={{
            marginTop: '12px',
            padding: '16px 20px',
            backgroundColor: '#f1f5f9',
            borderRadius: '8px',
            fontSize: '0.95rem',
          }}>
            <div><strong>Schoolopedia Legal & Governance Desk</strong></div>
            <div><strong>Official Email:</strong> <a href="mailto:schoolopedia@usa.com" style={{ color: '#4f46e5', fontWeight: 700 }}>schoolopedia@usa.com</a></div>
            <div><strong>Website:</strong> <a href="https://schoolopedia.com" style={{ color: '#4f46e5' }}>https://schoolopedia.com</a></div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
