import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout } from '../../components/LegalLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Schoolopedia Cookie Policy detailing our transparent use of essential cookies, local storage study records, and Google AdSense advertising cookies.',
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Comprehensive transparency on how cookies, web beacons, and local storage technologies are utilized on Schoolopedia."
      badge="Cookie & AdSense Disclosures"
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
            <span>🍪</span> Overview of Cookies on Schoolopedia
          </div>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#1e3a8a', lineHeight: '1.6' }}>
            This Cookie Policy explains how Schoolopedia uses cookies and similar technologies to recognize you when you visit our website, power client-side study records, and serve relevant educational advertisements through Google AdSense.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small data files placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to ensure their sites function efficiently, remember user preferences, provide reporting information, and deliver targeted advertising.
          </p>
          <p>
            Cookies set by the website owner (in this case, Schoolopedia) are termed &ldquo;first-party cookies&rdquo;. Cookies set by parties other than the website owner are termed &ldquo;third-party cookies&rdquo; (such as those placed by Google AdSense or YouTube embeds).
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            2. Categories of Cookies and Storage Technologies We Use
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
            {/* Category A */}
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px 20px', backgroundColor: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0' }}>
                A. Essential & Functional Web Storage (First-Party)
              </h3>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#475569' }}>
                These storage items are strictly necessary for the proper functioning of the educational encyclopedia:
              </p>
              <ul style={{ paddingLeft: '20px', margin: '8px 0 0 0', fontSize: '0.9rem', color: '#475569' }}>
                <li><strong>Local Learning Record (<code>schoolopedia_learning_record_v1</code>):</strong> Saves the chapters you have completed, videos watched, and MCQ quiz scores locally on your computer.</li>
                <li><strong>Cookie Consent Preference (<code>schoolopedia_cookie_consent</code>):</strong> Remembers whether you have acknowledged our privacy and cookie notices so you aren&apos;t repeatedly prompted.</li>
                <li><strong>Cloudflare Edge Security Cookies:</strong> Ensure network routing protection and bot detection.</li>
              </ul>
            </div>

            {/* Category B */}
            <div style={{ border: '1px solid #e9d5ff', borderRadius: '10px', padding: '18px 20px', backgroundColor: '#faf5ff' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#581c87', margin: '0 0 8px 0' }}>
                B. Google AdSense Advertising & Measurement Cookies (Third-Party)
              </h3>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#4c1d95' }}>
                To fund the free maintenance of Schoolopedia without charging tuition or fees, we display advertisements via Google AdSense:
              </p>
              <ul style={{ paddingLeft: '20px', margin: '8px 0 0 0', fontSize: '0.9rem', color: '#4c1d95' }}>
                <li><strong>DoubleClick / DART Cookie:</strong> Google uses cookies to serve ads on Schoolopedia. Google&apos;s use of the DART cookie enables it to serve ads to users based on their visit to Schoolopedia and other sites across the web.</li>
                <li><strong>Frequency Capping & Fraud Prevention:</strong> Prevents the same ad from showing repetitively and protects advertisers from fraudulent traffic or bot clicks.</li>
                <li><strong>Ad Reporting & Analytics:</strong> Measures the performance and effectiveness of ad placements.</li>
              </ul>
            </div>

            {/* Category C */}
            <div style={{ border: '1px solid #fed7aa', borderRadius: '10px', padding: '18px 20px', backgroundColor: '#fff7ed' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#9a3412', margin: '0 0 8px 0' }}>
                C. Embedded Video Player Cookies (YouTube / Google LLC)
              </h3>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#7c2d12' }}>
                When you watch masterclass videos embedded on our curriculum pages, YouTube may place cookies on your device to store user player preferences, track bandwidth, and associate video views with your Google account (if logged in).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            3. How to Manage, Block, or Delete Cookies
          </h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your preferences through multiple methods:
          </p>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            1. Opting Out of Google Personalized Advertising
          </h3>
          <p>
            You can customize or opt out of personalized ads delivered by Google AdSense at any time:
          </p>
          <p>
            👉 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', fontWeight: 700, textDecoration: 'underline' }}>Visit Google Ads Settings (https://www.google.com/settings/ads)</a>
          </p>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            2. Industry-Wide Consumer Opt-Out Portals
          </h3>
          <p>
            You can also opt out of interest-based advertising from participating companies through the following independent self-regulatory bodies:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li><strong>United States:</strong> <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Digital Advertising Alliance (DAA)</a> or <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Network Advertising Initiative (NAI)</a></li>
            <li><strong>Europe (EEA/UK):</strong> <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>European Interactive Digital Advertising Alliance (EDAA)</a></li>
            <li><strong>Canada:</strong> <a href="https://youradchoices.ca/en/tools" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Digital Advertising Alliance of Canada (DAAC)</a></li>
          </ul>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            3. Browser Cookie Controls
          </h3>
          <p>
            Most modern web browsers allow you to modify cookie settings. You can configure your browser to reject all cookies, notify you when a cookie is placed, or delete existing cookies:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>Google Chrome Cookie Settings</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>Apple Safari Cookie Settings</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>Mozilla Firefox Cookie Settings</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>Microsoft Edge Cookie Settings</a></li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            4. Updates to This Cookie Policy
          </h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our operational practices, advertising technology, or legal requirements. Please revisit this Cookie Policy periodically to stay informed about our use of cookies.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            5. Contact Information
          </h2>
          <p>
            If you have any questions about our use of cookies or other tracking technologies, please contact our team:
          </p>
          <div style={{
            marginTop: '12px',
            padding: '16px 20px',
            backgroundColor: '#f1f5f9',
            borderRadius: '8px',
            fontSize: '0.95rem',
          }}>
            <div><strong>Schoolopedia Privacy & Cookie Compliance Desk</strong></div>
            <div><strong>Official Email:</strong> <a href="mailto:schoolopedia@usa.com" style={{ color: '#4f46e5', fontWeight: 700 }}>schoolopedia@usa.com</a></div>
            <div><strong>Website:</strong> <a href="https://schoolopedia.com" style={{ color: '#4f46e5' }}>https://schoolopedia.com</a></div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
