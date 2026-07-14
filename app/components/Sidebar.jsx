'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DOCS, REPORTS, POSITION } from '../lib/docs';

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <nav className="nav">
        <Link
          href="/"
          className={`nav-item nav-overview${pathname === '/' ? ' active' : ''}`}
        >
          <span className="nav-num">◆</span>
          <span className="nav-label">Overview</span>
        </Link>

        <p className="nav-group">The Position</p>
        <Link
          href={`/${POSITION.slug}`}
          className={`nav-item${pathname === `/${POSITION.slug}` ? ' active' : ''}`}
        >
          <span className="nav-num">{POSITION.num}</span>
          <span className="nav-label">{POSITION.title}</span>
        </Link>

        <p className="nav-group">Market Intelligence</p>
        {REPORTS.map((r) => (
          <a key={r.key} href={`/reports/${r.file}`} target="_blank" rel="noopener" className="nav-item nav-report">
            <span className="nav-num">▸</span>
            <span className="nav-label">{r.title}</span>
          </a>
        ))}

        <p className="nav-group">The Strategy</p>
        {DOCS.map((d) => {
          const href = `/${d.slug}`;
          const active = pathname === href;
          return (
            <Link key={d.slug} href={href} className={`nav-item${active ? ' active' : ''}`}>
              <span className="nav-num">{d.num}</span>
              <span className="nav-label">{d.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
