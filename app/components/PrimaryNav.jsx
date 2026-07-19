'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/site';

// Primary nav with grouped dropdowns. On desktop the groups are hover/click
// dropdowns (one-open-at-a-time, closing on hover-out, outside pointer-down,
// Escape, and navigation). Below 64rem the whole nav becomes the hamburger
// drawer: `mobileOpen` (owned by Header) toggles its visibility, the groups
// render as tap-to-expand accordions, and a call CTA leads the list.
export default function PrimaryNav({ nav, mobileOpen = false, onNavigate }) {
  const [openIndex, setOpenIndex] = useState(null);
  const navRef = useRef(null);
  const timer = useRef(null);

  const open = useCallback((i) => {
    clearTimeout(timer.current);
    setOpenIndex(i);
  }, []);

  const close = useCallback(() => {
    clearTimeout(timer.current);
    setOpenIndex(null);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpenIndex(null), 140);
  }, []);

  // Following a link closes any open group and, on mobile, the drawer.
  const navigate = useCallback(() => {
    close();
    if (onNavigate) onNavigate();
  }, [close, onNavigate]);

  // Collapse the accordion whenever the drawer closes.
  useEffect(() => {
    if (!mobileOpen) setOpenIndex(null);
  }, [mobileOpen]);

  useEffect(() => {
    function onPointerDown(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIndex(null);
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpenIndex(null);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <nav
      id="primary-nav"
      className={`site-nav${mobileOpen ? ' mobile-open' : ''}`}
      aria-label="Primary"
      ref={navRef}
    >
      <ul>
        <li className="nav-call">
          <a href={SITE.phoneHref} onClick={navigate}>
            Call {SITE.phone}
          </a>
        </li>
        {nav.map((group, i) =>
          group.items ? (
            <li
              key={group.label}
              className={`nav-group${openIndex === i ? ' open' : ''}`}
              onMouseEnter={() => open(i)}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className="nav-summary"
                aria-haspopup="true"
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {group.label}
                <svg
                  className="caret"
                  viewBox="0 0 10 6"
                  width="10"
                  height="6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </button>
              <ul className="dropdown">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={navigate}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={group.href}>
              <Link href={group.href} onClick={navigate}>
                {group.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
