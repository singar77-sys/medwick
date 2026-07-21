import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { SITE, DISCLAIMER } from '@/lib/site';
import { organization, JsonLd } from '@/lib/schema';
import Header from './components/Header';

// Sets data-theme before first paint so neither mode flashes. Stored choice
// wins; otherwise follow the OS. Runs synchronously as the first thing in
// <body>.
const THEME_INIT = `
try {
  var t = localStorage.getItem('medwick-theme');
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = t;
} catch (e) { document.documentElement.dataset.theme = 'light'; }
`;

// Headings, Eurostile Extended Black (licensed Monotype font), self-hosted
// from the web-license .ttf, converted to woff2. Drives every h1/h2.
const eurostile = localFont({
  src: '../public/fonts/eurostile-ext-black.woff2',
  weight: '900',
  style: 'normal',
  variable: '--font-heading',
  display: 'swap',
});

// Sub-headers + body (brand: Plus Jakarta Sans).
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

// Quote / promise serif, Zodiak Extrabold (self-hosted). Upright only; the
// site uses no italics.
const zodiak = localFont({
  src: '../public/fonts/zodiak-extrabold.woff2',
  weight: '800',
  style: 'normal',
  variable: '--font-zodiak',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `Medina County's Insurance Restoration Advocate | Medwick`,
    template: '%s',
  },
  description:
    'From the first insurance call to the final repair. Medwick guides Medina County homeowners through storm, roof, and water damage claims, then completes the work.',
  icons: { icon: '/medwick-logo.webp' },
};

// New direction (2026-07-17), built top-down starting with the nav:
// temple-grid header, grouped dropdown nav, light/dark theme.
export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the THEME_INIT script sets data-theme on
    // <html> before hydration, that attribute diff is intentional.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${eurostile.variable} ${jakarta.variable} ${zodiak.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="main">
          {children}
        </main>
        <footer className="site-footer">
          <p>
            <strong>{SITE.name}</strong> · {SITE.address.street}, {SITE.address.city},{' '}
            {SITE.address.region} {SITE.address.postalCode} ·{' '}
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </p>
          <p>{SITE.legalNote}</p>
          <p className="disclaimer">{DISCLAIMER}</p>
        </footer>
        <JsonLd data={organization()} />
      </body>
    </html>
  );
}
