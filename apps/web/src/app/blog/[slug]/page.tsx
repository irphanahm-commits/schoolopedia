import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | Schoolopedia Editorial`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      url: `https://schoolopedia.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    dateModified: post.lastVerifiedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Schoolopedia',
      url: 'https://schoolopedia.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://schoolopedia.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', padding: '36px 24px 80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* Breadcrumbs */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#64748b', fontWeight: 600, marginBottom: '24px', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Home</Link>
        <span>/</span>
        <Link href="/blog" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>Blog & Updates</Link>
        <span>/</span>
        <span style={{ color: '#0f172a', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '320px' }}>
          {post.title}
        </span>
      </nav>

      {/* Article Header Card */}
      <header className="student-card" style={{ padding: '36px', marginBottom: '32px', border: '1.5px solid #e2e8f0', background: '#ffffff', borderRadius: '24px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{ background: '#eef2ff', color: '#4338ca', fontSize: '0.78rem', fontWeight: 800, padding: '4px 12px', borderRadius: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {post.category}
          </span>
          <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
            • {post.readTime}
          </span>
          <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
            • Published: {post.publishedAt}
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '16px' }}>
          {post.title}
        </h1>

        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
          {post.summary}
        </p>

        {/* Author Bio Bar */}
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#4f46e5', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', fontWeight: 800 }}>
            {post.author.avatar}
          </div>
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>{post.author.name}</div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{post.author.role} • Verified Provenance</div>
          </div>
        </div>
      </header>

      {/* Key Takeaways Callout */}
      <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '18px', padding: '24px 28px', marginBottom: '36px' }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span>💡</span> Key Takeaways
        </h2>
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.94rem', color: '#334155', lineHeight: 1.55 }}>
          {post.content.keyTakeaways.map((takeaway, idx) => (
            <li key={idx}><strong>{takeaway}</strong></li>
          ))}
        </ul>
      </div>

      {/* Article Body Sections */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <p style={{ fontSize: '1.08rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
          {post.content.introduction}
        </p>

        {post.content.sections.map((section, idx) => (
          <section key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
              {section.heading}
            </h2>

            {section.body.map((paragraph, pIdx) => (
              <p key={pIdx} style={{ fontSize: '1.02rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
                {paragraph}
              </p>
            ))}

            {section.highlightBox && (
              <div style={{ background: '#eef2ff', borderLeft: '4px solid #4f46e5', borderRadius: '0 14px 14px 0', padding: '18px 22px', margin: '10px 0' }}>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#312e81', margin: '0 0 6px 0' }}>
                  {section.highlightBox.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#3730a3', margin: 0, lineHeight: 1.6 }}>
                  {section.highlightBox.text}
                </p>
              </div>
            )}
          </section>
        ))}

        {post.content.relatedCurriculumLink && (
          <div style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)', borderRadius: '20px', padding: '28px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.85 }}>Direct Curriculum Alignment</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '2px' }}>{post.content.relatedCurriculumLink.title}</div>
            </div>
            <Link
              href={post.content.relatedCurriculumLink.url}
              style={{ background: '#ffffff', color: '#4338ca', fontWeight: 800, fontSize: '0.92rem', padding: '12px 22px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
            >
              Open Interactive Lesson →
            </Link>
          </div>
        )}

        {/* Tags */}
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#64748b' }}>Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#4f46e5',
                background: '#eef2ff',
                padding: '4px 12px',
                borderRadius: '8px',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <Link
            href="/blog"
            style={{ fontSize: '0.92rem', fontWeight: 700, color: '#4f46e5', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            ← Back to All Articles
          </Link>
          <Link
            href="/learn"
            style={{ fontSize: '0.92rem', fontWeight: 700, color: '#64748b', textDecoration: 'none' }}
          >
            Explore 78 Jurisdictions →
          </Link>
        </div>
      </main>
    </div>
  );
}
