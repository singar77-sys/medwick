import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DOCS, ALL_DOCS } from '../lib/docs';
import { getDoc } from '../lib/getDoc';
import Markdown from '../components/Markdown';

export function generateStaticParams() {
  return ALL_DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = ALL_DOCS.find((d) => d.slug === slug);
  return {
    title: doc
      ? `${doc.title} · Medwick Digital Growth Plan`
      : 'Medwick Digital Growth Plan',
  };
}

export default async function DocPage({ params }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  const idx = DOCS.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? DOCS[idx - 1] : null;
  const next = idx < DOCS.length - 1 ? DOCS[idx + 1] : null;

  return (
    <article className="doc">
      <div className="doc-kicker">
        <span className="doc-kicker-num">{doc.num}</span>
        <span className="doc-kicker-label">Medwick Digital Growth Plan</span>
      </div>
      <div className="prose">
        <Markdown>{doc.content}</Markdown>
      </div>
      <nav className="doc-pager">
        {prev ? (
          <Link href={`/${prev.slug}`} className="pager prev">
            <span className="pager-dir">← Previous</span>
            <span className="pager-title">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/${next.slug}`} className="pager next">
            <span className="pager-dir">Next →</span>
            <span className="pager-title">{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
