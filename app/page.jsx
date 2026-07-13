import Link from 'next/link';
import { DOCS } from './lib/docs';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-main">
          <p className="eyebrow">
            <span className="eyebrow-mark" aria-hidden="true" />
            Digital Growth Plan / Medina County, Ohio
          </p>
          <h1>
            The plan to make Medwick <span className="hl">findable</span>, then win the storm-to-restoration lane.
          </h1>
          <p className="hero-lede">
            Medwick is in better shape than its website shows: an active license, a City of Medina
            registration, a 5.0-star Google rating, all currently invisible online. This is the plan
            to fix that and get ahead of the field, built on a 25-agent competitive audit.
          </p>
          <p className="hero-tagline">&ldquo;Building Excellence, One Project at a Time.&rdquo;</p>
          <div className="hero-cta">
            <Link href="/strategy" className="btn btn-gold">
              Start with the strategy
            </Link>
            <Link href="/roadmap" className="btn btn-ghost">
              Jump to the roadmap
            </Link>
          </div>
        </div>
        <div className="hero-geo" aria-hidden="true">
          <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* baseline + measurement ticks */}
            <line x1="16" y1="286" x2="304" y2="286" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
            <line x1="70" y1="280" x2="70" y2="292" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
            <line x1="160" y1="278" x2="160" y2="294" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
            <line x1="250" y1="280" x2="250" y2="292" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
            {/* thin diagonal */}
            <line x1="34" y1="34" x2="150" y2="150" stroke="rgba(255,255,255,.22)" strokeWidth="1.5" />
            {/* gold circle */}
            <circle cx="208" cy="108" r="80" fill="#c0a674" />
            {/* brick triangle */}
            <path d="M66 250 L164 250 L115 158 Z" fill="#b4472e" />
            {/* white outline square, overlapping the circle */}
            <rect x="72" y="72" width="96" height="96" stroke="rgba(255,255,255,.62)" strokeWidth="2" />
            {/* small solid accent circle */}
            <circle cx="252" cy="232" r="17" fill="#a98f5f" />
          </svg>
        </div>
      </section>

      <section className="bignums">
        <div className="bignum">
          <span className="bn-mark bn-square" aria-hidden="true" />
          <span className="bn-figure">1</span>
          <span className="bn-label">page on the site today</span>
          <span className="bn-ctx">Nothing for Google to rank. A clean slate to build on.</span>
        </div>
        <div className="bignum">
          <span className="bn-mark bn-circle" aria-hidden="true" />
          <span className="bn-figure">3</span>
          <span className="bn-label">services, one contractor</span>
          <span className="bn-ctx">Roof + water + rebuild: a lane no local competitor owns.</span>
        </div>
        <div className="bignum">
          <span className="bn-mark bn-triangle" aria-hidden="true" />
          <span className="bn-figure gold">0 / 6</span>
          <span className="bn-label">rivals showing Google stars</span>
          <span className="bn-ctx">First to show review stars in search wins the click.</span>
        </div>
      </section>

      <section className="callout">
        <p>
          <strong>The bet is to flank, not fight head-on.</strong> A brand-new domain with 9
          reviews won&rsquo;t beat 2,500-review regional roofers on the big keywords this year. So
          the plan front-loads the searches nobody has claimed: storm damage, insurance-claim help,
          emergency water, and the small towns every competitor skips.
        </p>
      </section>

      <section className="doc-cards">
        <h2 className="section-h">The five parts of the plan</h2>
        <div className="cards">
          {DOCS.map((d) => (
            <Link key={d.slug} href={`/${d.slug}`} className="card">
              <span className="card-num">{d.num}</span>
              <span className="card-title">{d.title}</span>
              <span className="card-blurb">{d.blurb}</span>
              <span className="card-go">Read →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="howto">
        <h2 className="section-h">How to read this</h2>
        <p>
          Each section stands on its own. Start with <Link href="/strategy">the strategy</Link> for
          the big picture, or hand a specific section to whoever owns that work. The{' '}
          <Link href="/roadmap">roadmap</Link> is the do-this-in-order version, and its first phase
          (fixing the phone number and claiming the Google profile) can start this week, before the
          new site is built.
        </p>
      </section>
    </div>
  );
}
