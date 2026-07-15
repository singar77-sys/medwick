'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DOCS, REPORTS, POSITION } from '../lib/docs';

// One nav system for the whole site: a global row of sections, plus a
// contextual sub-row of the current section's pages.
const SECTIONS = [
  { label: 'Overview', href: '/', match: (p) => p === '/' },
  { label: POSITION.title, href: `/${POSITION.slug}`, match: (p) => p === `/${POSITION.slug}` },
  { label: 'Audit', href: `/reports/${REPORTS[0].file}`, match: (p) => p.startsWith('/reports/') },
  { label: 'Strategies', href: `/${DOCS[0].slug}`, match: (p) => DOCS.some((d) => p === `/${d.slug}`) },
  { label: 'Quote', href: '/proposal', match: (p) => p === '/proposal', cta: true },
];

export default function TopNav() {
  const pathname = usePathname();
  const inStrategy = DOCS.some((d) => pathname === `/${d.slug}`);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => { setNavOpen(false); }, [pathname]);

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
        <input
          type="checkbox"
          id="mw-nav-toggle"
          className="nav-toggle"
          checked={navOpen}
          onChange={(e) => setNavOpen(e.target.checked)}
          aria-label="Toggle navigation menu"
        />
        <label htmlFor="mw-nav-toggle" className="nav-burger" aria-hidden="true">
          <span></span><span></span><span></span>
        </label>
        <nav className="topnav-sections" aria-label="Primary">
          {SECTIONS.map((s) => {
            const active = s.match(pathname);
            const className = s.cta ? 'topnav-cta' : active ? 'active' : '';
            return (
              <Link key={s.label} href={s.href} className={className}
                aria-current={active ? 'page' : undefined}
                onClick={() => setNavOpen(false)}>
                {s.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {inStrategy && (
        <div className="subnav">
          <nav className="subnav-inner" aria-label="Strategy documents">
            <span className="subnav-label">Strategies</span>
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
