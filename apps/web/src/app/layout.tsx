import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { VideoProvider } from '../lib/VideoContext';
import { VideoModal } from '../components/VideoModal';
import { FloatingVideoPlayer } from '../components/FloatingVideoPlayer';

export const metadata: Metadata = {
  metadataBase: new URL('https://schoolopedia.com'),
  title: {
    default: 'Schoolopedia — The Curriculum-Aware Education Encyclopedia',
    template: '%s | Schoolopedia',
  },
  description: 'A free, curriculum-aware education encyclopedia covering 78 Tier 1 education jurisdictions across the US, UK, Canada, Australia, and New Zealand. Discover what to learn, learn through curated resources, and achieve verified mastery.',
  keywords: [
    'education encyclopedia',
    'curriculum standards',
    'state education framework',
    'common core standards',
    'grade 8 mathematics',
    'linear equations',
    'free educational platform',
    '78 education jurisdictions',
    'TEKS',
    'ACARA',
    'UK National Curriculum',
    'Ontario curriculum',
  ],
  authors: [{ name: 'Schoolopedia Editorial Board', url: 'https://schoolopedia.com' }],
  creator: 'Schoolopedia',
  publisher: 'Schoolopedia',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Schoolopedia — The Curriculum-Aware Education Encyclopedia',
    description: 'Learn what you need today. Discover what you can become tomorrow. Aligned with all 78 Tier 1 education jurisdictions. 100% Free Forever.',
    url: 'https://schoolopedia.com',
    siteName: 'Schoolopedia',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://schoolopedia.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Schoolopedia — The Education Encyclopedia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schoolopedia — The Education Encyclopedia',
    description: 'The curriculum-aware education encyclopedia for 78 Tier 1 jurisdictions. 100% Free Forever.',
    images: ['https://schoolopedia.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'citation_publisher': 'Schoolopedia Education Foundation',
    'dc.publisher': 'Schoolopedia',
    'dc.rights': 'Creative Commons BY-NC-SA 4.0 / Public Educational Domain',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Schoolopedia',
    url: 'https://schoolopedia.com',
    description: 'A curriculum-aware education encyclopedia covering 78 Tier 1 jurisdictions in the US, UK, Canada, Australia, and New Zealand.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://schoolopedia.com/learn?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Schoolopedia',
    url: 'https://schoolopedia.com',
    logo: 'https://schoolopedia.com/icon.svg',
    description: 'Open curriculum encyclopedia and mastery navigation platform for global K-12 and tertiary learners.',
    isAccessibleForFree: true,
    areaServed: ['US', 'GB', 'CA', 'AU', 'NZ'],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body>
        <VideoProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <VideoModal />
          <FloatingVideoPlayer />
        </VideoProvider>
      </body>
    </html>
  );
}
