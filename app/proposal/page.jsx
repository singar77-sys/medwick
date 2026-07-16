import Link from 'next/link';
import { POSITION, DOCS, REPORTS } from '@/lib/proposalDocs';

export const metadata = { title: 'Digital Growth Plan' };

export default function ProposalHome() {
  return (
    <div className="proposal-index">
      <h1>Medwick Digital Growth Plan</h1>
      <p className="lede">
        The full strategy behind the rebuild: positioning, SEO strategy, site structure, content
        calendar, roadmap, competitor scans, and the authority program. Kept here for reference.
      </p>

      <div className="doc-grid">
        <Link href={`/proposal/${POSITION.slug}/`} className="doc-card">
          <span className="doc-num">{POSITION.num}</span>
          <h3>{POSITION.title}</h3>
          <p>{POSITION.blurb}</p>
        </Link>
        {DOCS.map((d) => (
          <Link key={d.slug} href={`/proposal/${d.slug}/`} className="doc-card">
            <span className="doc-num">{d.num}</span>
            <h3>{d.title}</h3>
            <p>{d.blurb}</p>
          </Link>
        ))}
        <Link href="/proposal/pricing/" className="doc-card">
          <span className="doc-num">$</span>
          <h3>Scope &amp; Pricing</h3>
          <p>The website build proposal: scope, price, timeline, and terms.</p>
        </Link>
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: 'var(--s1)' }}>
        Competitive Authority Reports
      </h2>
      {REPORTS.map((r) => (
        <div key={r.key} className="report-row">
          <div>
            <a href={`/reports/${r.file}`} target="_blank" rel="noopener">
              {r.title}
            </a>
            <p style={{ margin: 0, fontSize: 'var(--t-sm)', opacity: 0.75 }}>{r.blurb}</p>
          </div>
          <span className="smallcaps" style={{ whiteSpace: 'nowrap' }}>
            {r.tag}
          </span>
        </div>
      ))}
    </div>
  );
}
