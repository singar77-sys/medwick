import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Divider } from './ornaments';

// Container tier per the temple axis (see DESIGN-SYSTEM.md § Container tiers):
// court (default, 61.8rem) → hekhal (48.6rem, the trade/advocacy hubs) →
// debir (38.2rem, reached once — Contact).
// 'court' is intentionally absent: it's the unmodified default --container,
// so it's a documentation-only tag at call sites, not a CSS override. Mapping
// it to 'var(--container)' would set --container: var(--container) on the
// same element — a self-reference, which CSS treats as invalid and collapses
// max-width to its initial value (none). Don't reintroduce that.
const TIER_VAR = {
  hekhal: 'var(--container-hekhal)',
  debir: 'var(--measure)',
};

// Scaffold page body used by every route until real content lands
// (Weeks 4–8). Carries the approved H1 and the planned content outline so
// the IA is reviewable now. Replaced page-by-page during the build.
export default function Stub({ h1, purpose, outline = [], links = [], tier }) {
  const style = TIER_VAR[tier] ? { '--container': TIER_VAR[tier] } : undefined;
  return (
    <article className="stub" style={style}>
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
