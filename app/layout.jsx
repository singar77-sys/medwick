import './globals.css';
import { Archivo, Lora, Source_Sans_3 } from 'next/font/google';
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

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['italic'],
  variable: '--font-lora',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans',
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
    // <html> before hydration — that attribute diff is intentional.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${lora.variable} ${sourceSans.variable}`}
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
