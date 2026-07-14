'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DOCS, REPORTS, POSITION } from '../lib/docs';

// One nav system for the whole site: a global row of sections, plus a
// contextual sub-row of the current section's pages.
const SECTIONS = [
  { label: 'Overview', href: '/', match: (p) => p === '/' },
  { label: POSITION.title, href: `/${POSITION.slug}`, match: (p) => p === `/${POSITION.slug}` },
  { label: 'Market Intelligence', href: `/reports/${REPORTS[0].file}`, match: (p) => p.startsWith('/reports/') },
  { label: 'The Strategy', href: `/${DOCS[0].slug}`, match: (p) => DOCS.some((d) => p === `/${d.slug}`) },
  { label: 'Proposal', href: '/proposal', match: (p) => p === '/proposal', cta: true },
];

export default function TopNav() {
  const pathname = usePathname();
  const inStrategy = DOCS.some((d) => pathname === `/${d.slug}`);

  return (
    <header className="topnav">
      <div className="topnav-inner">
        <Link href="/" className="brand" aria-label="Medwick Construction home">
          <img src="/medwick-logo.webp" alt="Medwick Construction" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">MEDWICK</span>
            <span className="brand-sub">Digital Growth Plan</span>
          </span>
        </Link>
        <nav className="topnav-sections" aria-label="Primary">
          {SECTIONS.map((s) => {
            const active = s.match(pathname);
            const className = s.cta ? 'topnav-cta' : active ? 'active' : '';
            return (
              <Link key={s.label} href={s.href} className={className}
                aria-current={active ? 'page' : undefined}>
                {s.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {inStrategy && (
        <div className="subnav">
          <nav className="subnav-inner" aria-label="Strategy documents">
            <span className="subnav-label">The Strategy</span>
            {DOCS.map((d) => {
              const active = pathname === `/${d.slug}`;
              return (
                <Link key={d.slug} href={`/${d.slug}`} className={active ? 'active' : ''}
                  aria-current={active ? 'page' : undefined}>
                  <span className="subnav-num">{d.num}</span>
                  {d.title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
