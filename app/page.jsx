import Link from 'next/link';
import { DOCS } from './lib/docs';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">Digital Growth Plan · Medina County, Ohio</p>
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
            Start with the strategy →
          </Link>
          <Link href="/roadmap" className="btn btn-ghost">
            Jump to the roadmap
          </Link>
        </div>
      </section>

      <section className="bignums">
        <div className="bignum">
          <span className="bn-figure">1</span>
          <span className="bn-label">page on the site today</span>
          <span className="bn-ctx">Nothing for Google to rank. A clean slate to build on.</span>
        </div>
        <div className="bignum">
          <span className="bn-figure">3</span>
          <span className="bn-label">services, one contractor</span>
          <span className="bn-ctx">Roof + water + rebuild: a lane no local competitor owns.</span>
        </div>
        <div className="bignum">
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
