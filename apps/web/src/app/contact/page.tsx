'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LegalLayout } from '../../components/LegalLayout';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General Inquiry',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <LegalLayout
      title="Contact Us"
      subtitle="Reach out to the Schoolopedia administrative desk for general questions, curriculum feedback, open-source attribution, or DMCA notices."
      badge="Official Support"
      lastUpdated="September 13, 2026"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        {/* Contact Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {/* Email Card */}
          <div style={{
            border: '2px solid #e0e7ff',
            borderRadius: '12px',
            padding: '24px',
            backgroundColor: '#eef2ff',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <div style={{ fontSize: '1.6rem' }}>✉️</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#312e81', margin: 0 }}>
              Official Email Desk
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#4338ca' }}>
              Direct contact for all user feedback, legal correspondence, and educational inquiries:
            </p>
            <a
              href="mailto:schoolopedia@usa.com"
              style={{
                fontSize: '1.15rem',
                fontWeight: 900,
                color: '#4f46e5',
                textDecoration: 'underline',
                marginTop: '4px',
              }}
            >
              schoolopedia@usa.com
            </a>
            <span style={{ fontSize: '0.82rem', color: '#6366f1', marginTop: '4px' }}>
              ⚡ Response Time: 24 to 48 business hours
            </span>
          </div>

          {/* DMCA / Attribution Card */}
          <div style={{
            border: '2px solid #fee2e2',
            borderRadius: '12px',
            padding: '24px',
            backgroundColor: '#fef2f2',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <div style={{ fontSize: '1.6rem' }}>🛡️</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#991b1b', margin: 0 }}>
              Content Attribution & DMCA
            </h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#b91c1c' }}>
              For creators requesting updated attribution, licensing questions, or prompt content removal:
            </p>
            <Link
              href="/content-declaration"
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#dc2626',
                textDecoration: 'underline',
                marginTop: '4px',
              }}
            >
              Read Content Declaration & Guidelines →
            </Link>
            <span style={{ fontSize: '0.82rem', color: '#ef4444', marginTop: '4px' }}>
              Direct notice: schoolopedia@usa.com
            </span>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div style={{
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '32px',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
        }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
            Send Us a Message
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>
            Fill in the details below or email us directly at <strong>schoolopedia@usa.com</strong>.
          </p>

          {submitted ? (
            <div style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#166534', margin: '0 0 8px 0' }}>
                Thank You for Contacting Schoolopedia!
              </h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '0.95rem', color: '#15803d' }}>
                Your message regarding &ldquo;{formData.subject || formData.inquiryType}&rdquo; has been noted. Our administrative team will review your inquiry and follow up at <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  backgroundColor: '#166534',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Inquiry Type *
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Curriculum Feedback">Curriculum Feedback & Corrections</option>
                    <option value="Content Attribution / DMCA">Content Attribution / DMCA Notice</option>
                    <option value="Advertising / AdSense">Advertising / Business Inquiries</option>
                    <option value="Technical Support">Technical Support / Bug Report</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suggestion for CBSE Class 10 Science"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Detailed Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Please provide specifics, including lesson URL or grade syllabus reference if applicable..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  We respect your privacy. No personal details are sold or shared.
                </span>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#4f46e5',
                    color: '#ffffff',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Send Message ✉️
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Frequently Asked Questions */}
        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 20px', backgroundColor: '#f8fafc' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                How do I report an outdated curriculum standard or broken video?
              </h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                Please email <strong>schoolopedia@usa.com</strong> with the URL of the affected lesson and the updated framework reference. Our curriculum editors update learning paths regularly.
              </p>
            </div>

            <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 20px', backgroundColor: '#f8fafc' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                Can teachers use Schoolopedia in the classroom?
              </h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                Yes, absolutely! Schoolopedia is 100% free forever for all students and teachers worldwide. You may freely project, link, or assign our curriculum notes and diagnostic quizzes in your classroom without paying any licensing fees.
              </p>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
