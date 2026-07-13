import './globals.css';
import { Oswald, Source_Sans_3 } from 'next/font/google';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const display = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Medwick Construction — Digital Growth Plan',
  description:
    'SEO strategy and website plan for Medwick Construction: roofing, water mitigation, and remodeling across Medina County, Ohio.',
  openGraph: {
    title: 'Medwick Construction — Digital Growth Plan',
    description:
      'The full SEO strategy, site structure, content calendar, roadmap, and competitor analysis for the new Medwick website.',
    type: 'website',
  },
  icons: { icon: '/medwick-logo.webp' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <div className="shell">
          <Sidebar />
          <main className="main">{children}</main>
        </div>
        <footer className="site-footer">
          <p>
            <strong>Medwick Construction LLC</strong> · 7130 Norwalk Rd, Medina, OH 44256 ·
            (330) 635-3744
          </p>
          <p className="footer-note">
            Confidential planning document prepared for Medwick Construction · July 13, 2026.
            Strategy only — figures are directional pending live rank-tracking.
          </p>
        </footer>
      </body>
    </html>
  );
}
