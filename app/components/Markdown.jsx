import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { FILE_TO_SLUG } from '../lib/docs';

function Anchor({ href = '', children }) {
  const clean = href.split('#')[0];
  const base = clean.split('/').pop();

  // Cross-links to another plan document -> on-site route.
  if (FILE_TO_SLUG[base]) {
    return (
      <Link href={`/${FILE_TO_SLUG[base]}`} className="xlink">
        {children}
      </Link>
    );
  }
  // Reference to a source file not published here (e.g. the raw audit): plain text.
  if (base.endsWith('.md')) {
    return <span className="doc-ref">{children}</span>;
  }
  // External link.
  if (/^https?:/i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <a href={href}>{children}</a>;
}

function Table({ children }) {
  return (
    <div className="table-wrap">
      <table>{children}</table>
    </div>
  );
}

export default function Markdown({ children }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{ a: Anchor, table: Table }}
    >
      {children}
    </ReactMarkdown>
  );
}
