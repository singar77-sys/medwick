'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DOCS } from '../lib/docs';

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
