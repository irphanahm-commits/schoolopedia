'use client';

import React, { useState } from 'react';
import { LessonContentBlock } from '@schoolopedia/types';

interface ContentBlocksProps {
  blocks: LessonContentBlock[];
}

export function ContentBlocks({ blocks }: ContentBlocksProps) {
  const [revealedVerifications, setRevealedVerifications] = useState<Record<string, boolean>>({});

  const toggleVerification = (blockId: string) => {
    setRevealedVerifications((prev) => ({ ...prev, [blockId]: !prev[blockId] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }} id="lesson-content-blocks">
      {blocks.map((block) => {
        switch (block.type) {
          case 'HEADING': {
            const level = (block.data.level as number) || 2;
            const text = (block.data.text as string) || '';
            return (
              <div key={block.id} style={{ marginTop: level === 2 ? '24px' : '12px' }}>
                {level === 2 ? (
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    borderBottom: '2px solid #e2e8f0',
                    paddingBottom: '10px',
                    letterSpacing: '-0.02em',
                  }}>
                    {text}
                  </h2>
                ) : (
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    {text}
                  </h3>
                )}
              </div>
            );
          }

          case 'TEXT': {
            const text = (block.data.text as string) || '';
            return (
              <div
                key={block.id}
                style={{
                  fontSize: '1.02rem',
                  lineHeight: '1.8',
                  color: '#334155',
                  whiteSpace: 'pre-line',
                }}
              >
                {text}
              </div>
            );
          }

          case 'EXAMPLE': {
            const title = (block.data.title as string) || 'Worked Example';
            const problem = (block.data.problem as string) || '';
            const steps = (block.data.steps as string[]) || [];
            const verification = (block.data.verification as string) || '';
            const isRevealed = revealedVerifications[block.id] || false;

            return (
              <div
                key={block.id}
                className="student-card"
                style={{
                  padding: '28px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid var(--border-highlight)',
                }}
                id={`worked-example-${block.id}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span className="badge badge-curriculum">Step-by-Step Example</span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{title}</h4>
                </div>

                <div style={{
                  padding: '14px 20px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: '#0369a1',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  border: '1px solid #cbd5e1',
                }}>
                  {problem}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '12px 18px',
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        fontSize: '0.94rem',
                        color: '#1e293b',
                        border: '1px solid #e2e8f0',
                        borderLeft: '4px solid var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <span style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'var(--accent-primary-tint)',
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        flexShrink: 0,
                      }}>
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                {verification && (
                  <div>
                    <button
                      onClick={() => toggleVerification(block.id)}
                      className="btn btn-secondary"
                      style={{ padding: '8px 18px', fontSize: '0.86rem' }}
                      id={`btn-toggle-verify-${block.id}`}
                    >
                      {isRevealed ? 'Hide Verification Check' : '✓ Check Verification Step'}
                    </button>

                    {isRevealed && (
                      <div
                        style={{
                          marginTop: '14px',
                          padding: '16px 20px',
                          backgroundColor: '#ecfdf5',
                          borderRadius: '12px',
                          border: '1px solid #a7f3d0',
                          borderLeft: '4px solid #10b981',
                          color: '#064e3b',
                          fontSize: '0.92rem',
                          fontWeight: 500,
                          lineHeight: 1.6,
                        }}
                      >
                        <strong>Check:</strong> {verification}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          }

          case 'CALLOUT': {
            const variant = (block.data.variant as string) || 'WARNING';
            const title = (block.data.title as string) || '';
            const text = (block.data.text as string) || '';

            return (
              <div key={block.id} className={`callout callout-${variant.toLowerCase()}`}>
                {title && <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '8px' }}>{title}</h4>}
                <div style={{ fontSize: '0.94rem', whiteSpace: 'pre-line', lineHeight: 1.65 }}>{text}</div>
              </div>
            );
          }

          case 'COMMON_MISTAKE': {
            const title = (block.data.title as string) || 'Common Pitfall';
            const mistake = (block.data.mistake as string) || '';
            const correction = (block.data.correction as string) || '';

            return (
              <div key={block.id} className="callout callout-mistake">
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '10px' }}>⚠️ {title}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '12px' }}>
                  <div style={{ padding: '14px', background: '#fee2e2', borderRadius: '10px', border: '1px solid #fca5a5' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#991b1b', marginBottom: '6px' }}>
                      ❌ Common Error
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: '#7f1d1d' }}>{mistake}</div>
                  </div>

                  <div style={{ padding: '14px', background: '#dcfce7', borderRadius: '10px', border: '1px solid #86efac' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#166534', marginBottom: '6px' }}>
                      ✓ Correct Form
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: '#14532d' }}>{correction}</div>
                  </div>
                </div>
              </div>
            );
          }

          case 'SUMMARY': {
            const text = (block.data.text as string) || '';
            return (
              <div
                key={block.id}
                className="callout callout-info"
                style={{ marginTop: '24px' }}
              >
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '8px' }}>
                  💡 Key Lesson Takeaway
                </h4>
                <p style={{ fontSize: '0.96rem', lineHeight: '1.65' }}>{text}</p>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
