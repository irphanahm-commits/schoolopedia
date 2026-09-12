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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }} id="lesson-content-blocks">
      {blocks.map((block) => {
        switch (block.type) {
          case 'HEADING': {
            const level = (block.data.level as number) || 2;
            const text = (block.data.text as string) || '';
            return (
              <div key={block.id} style={{ marginTop: level === 2 ? '16px' : '8px' }}>
                {level === 2 ? (
                  <h2 style={{ fontSize: '1.45rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
                    {text}
                  </h2>
                ) : (
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)' }}>
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
                style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#e2e8f0', whiteSpace: 'pre-line' }}
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
                className="glass-panel"
                style={{
                  padding: '24px',
                  backgroundColor: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                }}
                id={`worked-example-${block.id}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="badge badge-curriculum">Step-by-Step Example</span>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{title}</h4>
                </div>

                <div style={{
                  padding: '12px 16px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-mono)',
                  color: '#38bdf8',
                  fontSize: '0.98rem',
                  marginBottom: '16px',
                  border: '1px solid var(--border-subtle)',
                }}>
                  {problem}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '10px 14px',
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.92rem',
                        borderLeft: '3px solid var(--accent-primary)',
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>

                {verification && (
                  <div>
                    <button
                      onClick={() => toggleVerification(block.id)}
                      className="btn btn-secondary"
                      style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                      id={`btn-toggle-verify-${block.id}`}
                    >
                      {isRevealed ? 'Hide Verification Check' : '✓ Check Verification Step'}
                    </button>

                    {isRevealed && (
                      <div
                        style={{
                          marginTop: '12px',
                          padding: '12px 16px',
                          backgroundColor: 'var(--accent-emerald-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          color: '#a7f3d0',
                          fontSize: '0.9rem',
                        }}
                      >
                        {verification}
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
                {title && <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>{title}</h4>}
                <div style={{ fontSize: '0.94rem', whiteSpace: 'pre-line' }}>{text}</div>
              </div>
            );
          }

          case 'COMMON_MISTAKE': {
            const title = (block.data.title as string) || 'Common Pitfall';
            const mistake = (block.data.mistake as string) || '';
            const correction = (block.data.correction as string) || '';

            return (
              <div key={block.id} className="callout callout-mistake">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>⚠️ {title}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '10px' }}>
                  <div style={{ padding: '10px', background: 'rgba(244, 63, 94, 0.1)', borderRadius: '6px', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-rose)', marginBottom: '4px' }}>
                      ❌ Common Error
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{mistake}</div>
                  </div>

                  <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-emerald)', marginBottom: '4px' }}>
                      ✓ Correct Form
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{correction}</div>
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
                className="callout callout-success"
                style={{ marginTop: '20px' }}
              >
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>
                  Key Lesson Takeaway
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{text}</p>
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
