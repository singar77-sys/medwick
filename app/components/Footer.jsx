import Link from 'next/link';
import Image from 'next/image';
import { SITE, DISCLAIMER, NAV } from '@/lib/site';

// Footer link columns: the nav groups, with any flat nav entries (Contact)
// folded into the Company column so nothing is orphaned.
const flatItems = NAV.filter((g) => !g.items).map((g) => ({ href: g.href, label: g.label }));
const COLUMNS = NAV.filter((g) => g.items).map((g) =>
  g.label === 'Company' ? { ...g, items: [...g.items, ...flatItems] } : g
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            src="/medwick-logo-dark.png"
            alt="Medwick Construction"
            width={200}
            height={78}
            className="footer-logo"
          />
          <p className="footer-tagline">{SITE.tagline}</p>
          <a className="footer-phone" href={SITE.phoneHref}>
            {SITE.phone}
          </a>
          <address className="footer-address">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
          </address>
        </div>

        {COLUMNS.map((group) => (
          <nav className="footer-col" key={group.label} aria-label={group.label}>
            <h2>{group.label}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* NAP must stay byte-identical with lib/site.js everywhere it appears */}
      <div className="footer-legal">
        <p className="footer-nap">
          <strong>{SITE.name}</strong> &middot; {SITE.address.street}, {SITE.address.city},{' '}
          {SITE.address.region} {SITE.address.postalCode} &middot;{' '}
          <a href={SITE.phoneHref}>{SITE.phone}</a>
        </p>
        <p className="footer-license">{SITE.legalNote}</p>
        <p className="footer-disclaimer">{DISCLAIMER}</p>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
        <a
          className="footer-credit"
          href="https://huntersystems.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Built by</span>
          {/* plain img: next/image blocks SVG unless dangerouslyAllowSVG is set.
              116x42 matches the v3 artwork's 2801.84:1003.28 ratio, so the box
              reserved before load is the box it lands in (no layout shift). */}
          <img src="/brand/hunter-systems.svg" alt="Hunter Systems" width={116} height={42} />
        </a>
      </div>
    </footer>
  );
}
