import './globals.css';
import { Archivo, Lora, Source_Sans_3, Space_Mono } from 'next/font/google';
import Header from './components/Header';

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

// Monospace for the numeric / label layer.
const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
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
    'How Medwick Construction gets found on Google and takes the Medina County market: roofing, water, and remodeling.',
  openGraph: {
    title: 'Medwick Construction: Digital Growth Plan',
    description: 'The plan to get Medwick found on Google and own the Medina County market.',
    type: 'website',
  },
  icons: { icon: '/medwick-logo.webp' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable} ${body.variable}`}>
      <body>
        <Header />
        <main className="page">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <p>
              <strong>Medwick Construction LLC</strong> · 7130 Norwalk Rd, Medina, OH 44256 ·
              (330) 635-3744
            </p>
            <p className="footer-note">Prepared July 13, 2026 · Confidential.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
