'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE, NAV } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import PrimaryNav from './PrimaryNav';

// Header on the Solomon temple grid: three zones at the temple's 1 : 4 : 2
// proportion (1 Kings 6 — porch : hall : sanctuary → logo : nav : the ask).
// Below 64rem the hall collapses into a hamburger drawer; this component owns
// the drawer's open state so the button (in the ask cluster) and the nav
// panel (in the hall) stay in sync.
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Returning to desktop width dismisses the drawer so it can't get stuck open.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 64rem)');
    const onChange = (e) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // While open: Escape and outside-tap close the drawer.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const onDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [mobileOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-grid">
        <Link
          href="/"
          className="brand"
          aria-label="Medwick Construction — home"
          onClick={closeMobile}
        >
          <Image
            src="/medwick-logo-light.png"
            alt="Medwick Construction"
            width={200}
            height={78}
            priority
            className="logo logo-light"
          />
          <Image
            src="/medwick-logo-dark.png"
            alt=""
            width={200}
            height={78}
            priority
            className="logo logo-dark"
          />
        </Link>

        <PrimaryNav nav={NAV} mobileOpen={mobileOpen} onNavigate={closeMobile} />

        <div className="header-ask">
          <a className="phone" href={SITE.phoneHref}>
            {SITE.phone}
          </a>
          <ThemeToggle />
          <button
            type="button"
            className={`hamburger${mobileOpen ? ' is-open' : ''}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="primary-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
