import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Divider } from './ornaments';

// Scaffold page body used by every route until real content lands
// (Weeks 4–8). Carries the approved H1 and the planned content outline so
// the IA is reviewable now. Replaced page-by-page during the build.
export default function Stub({ h1, purpose, outline = [], links = [] }) {
  return (
    <article className="stub">
      <div className="stub-banner">
        This page is scaffolding. The H1 and content plan are locked in, real copy and design
        come during the build.
      </div>
      <h1>{h1}</h1>
      {purpose && <p className="purpose">{purpose}</p>}
      <Divider />
      {outline.length > 0 && (
        <div className="outline">
          <h2>Planned content</h2>
          <ul>
            {outline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {links.length > 0 && (
        <p className="links">
          Related:{' '}
          {links.map((l, i) => (
            <span key={l.href}>
              {i > 0 && ' · '}
              <Link href={l.href}>{l.label}</Link>
            </span>
          ))}
        </p>
      )}
      <p className="links">
        Need help now? Call <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
    </article>
  );
}
