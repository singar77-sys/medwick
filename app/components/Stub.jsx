import Link from 'next/link';
import { SITE } from '@/lib/site';

// Scaffold page body used by every route until real content lands
// (Weeks 4–8). Carries the approved H1 and the planned content outline so
// the IA is reviewable now. Replaced page-by-page during the build.
// `tier` is accepted but unused: it belonged to the retired design system
// (archived 2026-07-17); route files still pass it and get rebuilt under
// the new design.
// `underHero`: when a page already has a <Hero> supplying the H1, this drops
// the stub's own H1 and purpose so there's exactly one H1 on the page —
// leaving just the scaffolding banner, planned-content outline, and links.
export default function Stub({ h1, purpose, outline = [], links = [], tier, underHero = false }) {
  return (
    <article className="stub">
      <div className="stub-banner">
        {underHero
          ? 'This page is scaffolding — the hero is in. The rest of the copy and design build next.'
          : 'This page is scaffolding. The H1 and content plan are locked in, real copy and design come during the build.'}
      </div>
      {!underHero && <h1>{h1}</h1>}
      {!underHero && purpose && <p className="purpose">{purpose}</p>}
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
