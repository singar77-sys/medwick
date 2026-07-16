import './proposal.css';
import Link from 'next/link';

// Internal reference area: the Digital Growth Plan that closed this deal
// (strategy docs, competitor scans, the pricing terms). Not in primary nav,
// noindexed regardless of the site-wide production gate in app/robots.js.
export const metadata = {
  title: {
    default: 'Digital Growth Plan | Medwick (Internal)',
    template: '%s | Medwick Digital Growth Plan',
  },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ProposalLayout({ children }) {
  return (
    <div className="proposal-area">
      <div className="proposal-banner">
        Internal reference. Not part of the public site, not indexed.{' '}
        <Link href="/proposal/">Digital Growth Plan home</Link>
      </div>
      {children}
    </div>
  );
}
