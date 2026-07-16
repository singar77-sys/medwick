import './globals.css';
import Link from 'next/link';
import { Archivo, Lora, Source_Sans_3 } from 'next/font/google';
import { SITE, DISCLAIMER, NAV } from '@/lib/site';
import { organization, JsonLd } from '@/lib/schema';
import { Divider } from './components/ornaments';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${lora.variable} ${sourceSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* Axially symmetric facade: tagline strip → centered wordmark → nav */}
        <header className="site-header">
          <div className="utility-bar">
            <p className="tagline">{SITE.tagline}</p>
            <a className="phone" href={SITE.phoneHref}>
              24/7 Emergency &amp; Claim Help <span>{SITE.phone}</span>
            </a>
          </div>
          <div className="brand-row">
            <Link href="/" className="brand">
              <span className="wordmark">MEDWICK</span>
              <span className="undermark">CONSTRUCTION</span>
            </Link>
          </div>
          <nav className="primary-nav" aria-label="Primary">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main id="main" className="main">
          {children}
        </main>
        <footer className="site-footer">
          <Divider />
          <p>
            <strong>{SITE.name}</strong> · {SITE.address.street}, {SITE.address.city},{' '}
            {SITE.address.region} {SITE.address.postalCode} ·{' '}
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </p>
          <p className="smallcaps">{SITE.legalNote}</p>
          <p className="disclaimer">{DISCLAIMER}</p>
        </footer>
        <JsonLd data={organization()} />
      </body>
    </html>
  );
}
