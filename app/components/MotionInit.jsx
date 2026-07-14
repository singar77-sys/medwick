'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Reveals elements tagged .reveal / .reveal-group as they enter the viewport.
// The hidden initial state lives behind `.js-reveal` (added synchronously in
// layout) AND `prefers-reduced-motion: no-preference`, so no-JS and
// reduced-motion users always see content immediately.
//
// The root layout persists across client-side navigations, so this re-runs on
// every pathname change to wire each new page's reveal elements — a one-time
// effect left them stranded at opacity:0 on return (the reported bug). The
// initial pass runs SYNCHRONOUSLY (no requestAnimationFrame) so in-view content
// reveals immediately and reliably; scroll/resize handle the rest.
export default function MotionInit() {
  const pathname = usePathname();

  useEffect(() => {
    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document
        .querySelectorAll('.reveal:not(.is-visible), .reveal-group:not(.is-visible)')
        .forEach((el) => {
          if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('is-visible');
        });
    };

    revealInView();
    // Re-check once the layout settles (fonts/images can shift positions after
    // the effect's first synchronous pass).
    const settle = setTimeout(revealInView, 250);
    window.addEventListener('scroll', revealInView, { passive: true });
    window.addEventListener('resize', revealInView, { passive: true });

    return () => {
      clearTimeout(settle);
      window.removeEventListener('scroll', revealInView);
      window.removeEventListener('resize', revealInView);
    };
  }, [pathname]);

  return null;
}
