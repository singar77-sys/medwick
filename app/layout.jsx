import './globals.css';
import { Archivo, Lora, Source_Sans_3 } from 'next/font/google';
import TopNav from './components/TopNav';
import MotionInit from './components/MotionInit';

// Wide, heavy grotesque that echoes the MEDWICK wordmark (not condensed).
const display = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

// Serif italic that echoes the logo tagline "Building Excellence, One Project at a Time."
const serif = Lora({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Medwick Construction: Digital Growth Plan',
  description:
    'SEO strategy and website plan for Medwick Construction: roofing, water mitigation, and remodeling across Medina County, Ohio.',
  openGraph: {
    title: 'Medwick Construction: Digital Growth Plan',
    description:
      'The full SEO strategy, site structure, content calendar, roadmap, and competitor analysis for the new Medwick website.',
    type: 'website',
  },
  icons: { icon: '/medwick-logo.webp' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${serif.variable} ${body.variable}`}>
      <body>
        {/* Enable scroll-reveal styling before paint so there is no flash */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-reveal')" }} />
        <a href="#main" className="skip-link">Skip to content</a>
        <MotionInit />
        <TopNav />
        <main id="main" className="main">{children}</main>
        <footer className="site-footer">
          <p>
            <strong>Medwick Construction LLC</strong> · 7130 Norwalk Rd, Medina, OH 44256 ·
            (330) 635-3744
          </p>
          <p className="footer-note">
            Confidential planning document prepared for Medwick Construction · July 13, 2026.
            Strategy only. Figures are directional pending live rank-tracking.
          </p>
        </footer>
      </body>
    </html>
  );
}
