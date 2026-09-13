import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout } from '../../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Schoolopedia Privacy Policy detailing our commitment to user data privacy, Google AdSense cookie disclosures, local storage study tracking, GDPR, and CCPA compliance.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Schoolopedia protects your personal privacy, handles advertising cookies, and maintains transparent, privacy-first educational access."
      badge="AdSense & Privacy Compliant"
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
            <span>ℹ️</span> Summary for Students, Parents & Educators
          </div>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#1e3a8a', lineHeight: '1.6' }}>
            Schoolopedia is a 100% free educational encyclopedia. We do <strong>not</strong> require user registration, we do <strong>not</strong> collect student names or passwords, and your course progress is stored securely and privately on your own local device. We display advertisements via Google AdSense to fund free server operations.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            1. Introduction and Scope
          </h2>
          <p>
            Welcome to Schoolopedia (accessible via <a href="https://schoolopedia.com" style={{ color: '#4f46e5', textDecoration: 'underline' }}>schoolopedia.com</a>). This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you access our curriculum encyclopedia, study guides, video masterclasses, and interactive assessments.
          </p>
          <p>
            By accessing or using Schoolopedia, you acknowledge that you have read and understood this Privacy Policy. If you have any questions or require clarification, you can contact our privacy officer directly at <a href="mailto:schoolopedia@usa.com" style={{ color: '#4f46e5', fontWeight: 600 }}>schoolopedia@usa.com</a>.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            2. Information We Collect and How We Use It
          </h2>
          <p>
            We adhere to strict data minimization principles. We do not maintain mandatory account registration or collect unnecessary personal information:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>
              <strong>Client-Side Local Storage (Study Progress & Preferences):</strong> To enable study tracking (such as marking chapters as completed, recording video views, or saving MCQ test scores), Schoolopedia utilizes standard browser <code>localStorage</code> under the key <code>schoolopedia_learning_record_v1</code>. This information resides entirely within your web browser on your personal device and is not synchronized to external servers or sold to third parties.
            </li>
            <li>
              <strong>Direct Communications:</strong> If you reach out to us via email at <code>schoolopedia@usa.com</code>, we receive your email address and any message contents you provide. This information is used exclusively to respond to your inquiry, bug report, or content request.
            </li>
            <li>
              <strong>Automated Log & Infrastructure Telemetry:</strong> When you access our website, our edge delivery infrastructure (Cloudflare) automatically records basic technical data, such as IP addresses, browser types, operating systems, referring URLs, and timestamps. This data is utilized solely for DDoS mitigation, edge routing performance, and system security.
            </li>
          </ul>
        </section>

        {/* Section 3: MANDATORY GOOGLE ADSENSE DISCLOSURE */}
        <section style={{
          backgroundColor: '#faf5ff',
          border: '1px solid #e9d5ff',
          borderRadius: '12px',
          padding: '24px',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#581c87', marginBottom: '12px' }}>
            3. Google AdSense & Third-Party Advertising Disclosures
          </h2>
          <p style={{ color: '#3b0764' }}>
            Schoolopedia partners with third-party advertising vendors, specifically <strong>Google AdSense</strong>, to serve advertisements on our web pages. To comply with Google Publisher Policies and privacy standards worldwide, please review the following essential disclosures:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#4c1d95' }}>
            <li>
              <strong>Google Advertising Cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to Schoolopedia or other websites on the Internet.
            </li>
            <li>
              <strong>DoubleClick / DART Cookie:</strong> Google&apos;s use of advertising cookies enables it and its advertising partners to serve personalized advertisements to our visitors based on their visit to Schoolopedia and/or other sites across the World Wide Web.
            </li>
            <li>
              <strong>How to Opt Out of Personalized Ads:</strong> Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', fontWeight: 700, textDecoration: 'underline' }}>Google Ads Settings</a>.
            </li>
            <li>
              <strong>Industry Opt-Out Portals:</strong> Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting the <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', fontWeight: 700, textDecoration: 'underline' }}>Digital Advertising Alliance (aboutads.info)</a> or the <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', fontWeight: 700, textDecoration: 'underline' }}>Network Advertising Initiative (NAI)</a>.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            4. Cookies, Web Beacons, and Storage Technologies
          </h2>
          <p>
            A cookie is a small text file placed on your device by a web server. We categorize cookies and storage mechanisms used on Schoolopedia as follows:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Essential & Functional Storage:</strong> Manages cookie consent status, user interface themes, and client-side lesson tracking.</li>
            <li><strong>Advertising & Analytics Cookies:</strong> Placed by Google AdSense and its certified ad technology providers to deliver contextual and personalized advertising, measure campaign efficacy, and combat invalid traffic.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            For comprehensive details on managing, inspecting, or blocking cookies in your web browser, please read our dedicated <Link href="/cookie-policy" style={{ color: '#4f46e5', fontWeight: 600 }}>Cookie Policy</Link>.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            5. Embedded Content and Third-Party Links
          </h2>
          <p>
            To provide comprehensive education across all K-12 subjects, Schoolopedia embeds educational video masterclasses from YouTube via official standard embed players and links to official governmental portals (such as the California Department of Education, CBSE, NCERT, and UK Department for Education).
          </p>
          <p>
            Embedded videos and external links operate under the independent privacy policies and terms of their respective providers. When you play a video, YouTube (Google LLC) may set cookies and process interaction telemetry according to Google&apos;s Privacy Policy.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            6. Children&apos;s Online Privacy Protection Act (COPPA)
          </h2>
          <p>
            Schoolopedia is designed as an educational reference tool for students, teachers, and parents. Protecting the online safety of children is of paramount importance:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>We do not knowingly collect, store, or solicit Personally Identifiable Information (PII) from children under the age of 13 (or under 16 in applicable European jurisdictions).</li>
            <li>No user accounts, profiles, or public messaging forums exist on Schoolopedia.</li>
            <li>If a parent or guardian discovers that a child has inadvertently submitted personal information to us via email, please notify us immediately at <a href="mailto:schoolopedia@usa.com" style={{ color: '#4f46e5', fontWeight: 600 }}>schoolopedia@usa.com</a>, and we will promptly delete such records.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            7. European User Rights (GDPR)
          </h2>
          <p>
            If you reside in the European Economic Area (EEA), United Kingdom, or Switzerland, you possess statutory rights under the General Data Protection Regulation (GDPR), including:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>The right to access, rectify, or request deletion of any personal communications sent to us.</li>
            <li>The right to restrict or object to certain data processing activities.</li>
            <li>The right to withdraw cookie consent at any time via your browser settings or our cookie management controls.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            8. California Privacy Rights (CCPA / CPRA)
          </h2>
          <p>
            Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents are entitled to know that:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>We Do Not Sell Your Personal Information:</strong> Schoolopedia never sells, rents, or trades your personal data for monetary consideration.</li>
            <li>You have the right to request disclosure of information practices and the deletion of any personal communications submitted to us.</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy periodically to reflect technological updates, regulatory changes, or enhancements in our educational offerings. Any modifications will be posted on this page with an updated &ldquo;Last Revised&rdquo; timestamp. We encourage users to review this page regularly.
          </p>
        </section>

        {/* Section 10 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            10. Contacting Our Data Protection Desk
          </h2>
          <p>
            If you have questions, comments, or formal inquiries regarding this Privacy Policy or our advertising practices, please contact us:
          </p>
          <div style={{
            marginTop: '12px',
            padding: '16px 20px',
            backgroundColor: '#f1f5f9',
            borderRadius: '8px',
            fontSize: '0.95rem',
          }}>
            <div><strong>Schoolopedia Privacy & Compliance Administration</strong></div>
            <div><strong>Official Email:</strong> <a href="mailto:schoolopedia@usa.com" style={{ color: '#4f46e5', fontWeight: 700 }}>schoolopedia@usa.com</a></div>
            <div><strong>Website:</strong> <a href="https://schoolopedia.com" style={{ color: '#4f46e5' }}>https://schoolopedia.com</a></div>
            <div style={{ color: '#64748b', fontSize: '0.88rem', marginTop: '6px' }}>Expected response time: 24 to 48 business hours.</div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
