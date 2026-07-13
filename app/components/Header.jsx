import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Medwick Construction home">
        <img src="/medwick-logo.webp" alt="Medwick Construction" className="brand-logo" />
        <span className="brand-text">
          <span className="brand-name">MEDWICK</span>
          <span className="brand-sub">Digital Growth Plan</span>
        </span>
      </Link>
      <span className="header-tag">SEO Strategy · Prepared July 2026</span>
    </header>
  );
}
