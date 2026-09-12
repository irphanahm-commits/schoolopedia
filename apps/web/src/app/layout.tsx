import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Schoolopedia — The Curriculum-Aware Education Encyclopedia',
  description: 'A free, curriculum-aware education encyclopedia helping learners discover what to learn, learn through curated resources, and achieve verified mastery.',
  keywords: ['education', 'encyclopedia', 'curriculum', 'grade 8 math', 'linear equations', 'common core standards'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
