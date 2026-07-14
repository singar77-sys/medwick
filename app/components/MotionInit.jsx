'use client';

import { useEffect } from 'react';

// Reveals elements tagged .reveal / .reveal-group as they scroll into view.
// The hidden initial state lives behind `.js-reveal` (added synchronously in
// layout) AND `prefers-reduced-motion: no-preference`, so no-JS and
// reduced-motion users always see content immediately.
export default function MotionInit() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-group');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return null;
}
