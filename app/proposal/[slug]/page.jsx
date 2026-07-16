import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DOCS, ALL_DOCS } from '@/lib/proposalDocs';
import { getProposalDoc } from '@/lib/getProposalDoc';
import ProposalMarkdown from '../components/ProposalMarkdown';

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = ALL_DOCS.find((d) => d.slug === slug);
  return { title: doc ? doc.title : 'Digital Growth Plan' };
}

export default async function ProposalDocPage({ params }) {
  const { slug } = await params;
  const doc = getProposalDoc(slug);
  if (!doc) notFound();

  const idx = DOCS.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? DOCS[idx - 1] : null;
  const next = idx >= 0 && idx < DOCS.length - 1 ? DOCS[idx + 1] : null;

  return (
    <article className="proposal-doc">
      <div className="doc-kicker">
        <span className="doc-kicker-num">{doc.num}</span>
        <span className="smallcaps">Medwick Digital Growth Plan</span>
      </div>
      <div className="prose">
        <ProposalMarkdown>{doc.content}</ProposalMarkdown>
      </div>
      <nav className="doc-pager">
        {prev ? (
          <Link href={`/proposal/${prev.slug}/`} className="pager prev">
            <span className="pager-dir">← Previous</span>
            <span className="pager-title">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/proposal/${next.slug}/`} className="pager next">
            <span className="pager-dir">Next →</span>
            <span className="pager-title">{next.title}</span>
          </Link>
        ) : idx === DOCS.length - 1 ? (
          <Link href="/proposal/pricing/" className="pager next">
            <span className="pager-dir">Scope &amp; pricing</span>
            <span className="pager-title">See the quote →</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
