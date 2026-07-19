'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

// tel:/mailto:/absolute URLs must be plain <a>; internal routes use Link.
function Cta({ className, item }) {
  if (!item) return null;
  const external = /^(tel:|mailto:|https?:)/.test(item.href);
  return external ? (
    <a className={className} href={item.href}>
      {item.label}
    </a>
  ) : (
    <Link className={className} href={item.href}>
      {item.label}
    </Link>
  );
}

// Full-bleed video hero, reusable across section pages.
// - muted/loop/inline background video with a poster still (instant paint,
//   and the fallback if autoplay is blocked)
// - respects prefers-reduced-motion: we only call play() when motion is OK,
//   so reduced-motion users see the poster frame, held still
// - a scrim layer seats the headline over the footage
// A `tel:` secondary renders as a plain <a>; anything else as a Link.
export default function Hero({ video, poster, eyebrow, title, promise, primary, secondary }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // leave paused → poster stays
    v.play().catch(() => {}); // blocked autoplay just leaves the poster showing
  }, []);

  return (
    <section className="hero">
      <div className="hero-media">
        <video
          ref={ref}
          className="hero-video"
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-inner">
        {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {promise && <p className="hero-promise">{promise}</p>}
        {(primary || secondary) && (
          <div className="hero-cta">
            <Cta className="btn" item={primary} />
            <Cta className="btn-ghost" item={secondary} />
          </div>
        )}
      </div>
    </section>
  );
}
