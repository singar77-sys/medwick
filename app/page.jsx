import Link from 'next/link';
import Image from 'next/image';
import Section from '@/app/components/Section';
import {
  GoldenSpiral,
  Divider,
  StarGlyph,
  LevelGlyph,
  KeystoneGlyph,
  TriangleGlyph,
  InvertedTriangleGlyph,
  SquareGlyph,
} from '@/app/components/ornaments';
import { SITE, DISCLAIMER } from '@/lib/site';

// NOTE: All body copy below is DRAFT for design review. Final copy lands in
// the content phase; insurance-related language is PENDING OHIO COUNSEL
// (SOW §11) and must not go to production before clearance.

export const metadata = {
  title: `Medina County's Insurance Restoration Advocate | Medwick`,
  description:
    'Storm damage, roof leak, flooded basement? Medwick walks Medina County homeowners through the insurance claim, then does the repair work ourselves. Licensed, insured, Registered #26-731. Call (330) 635-3744.',
};

export default function Home() {
  return (
    <>
      {/* ---- HERO: the facade ---- */}
      <section className="hero">
        <GoldenSpiral className="spiral" />
        <div className="hero-inner">
          <p className="eyebrow smallcaps">Medina County&rsquo;s Insurance Restoration Advocate</p>
          <h1>From the First Insurance Call to the Final Repair</h1>
          <p className="promise">
            It&rsquo;s a stressful call to make. We&rsquo;ll walk the whole thing with you, and
            we work for you, not the insurance company.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/insurance-claims/">
              Get Claim Help
            </Link>
            <a className="btn-ghost" href={SITE.phoneHref}>
              Emergency? {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---- THE CREW: real people, real van, the number painted on it ---- */}
      <figure className="crew-band">
        <Image
          src="/medwick-crew-van-medina-oh.webp"
          alt="The Medwick Construction crew standing in front of the company van in Medina, Ohio"
          fill
          priority
          sizes="100vw"
        />
      </figure>

      {/* ---- PROOF BAND ---- */}
      <div className="proof-band">
        <ul>
          <li className="smallcaps">★ 5.0 Google Rating</li>
          <li className="smallcaps">Registered Contractor #26-731</li>
          <li className="smallcaps">Licensed &amp; Insured</li>
          <li className="smallcaps">MEDina Born · BrunsWICK Raised</li>
        </ul>
      </div>

      {/* ---- I. THE PATH ---- */}
      <Section
        numeral="I"
        title="The Path Back Home"
        kicker="Three steps to getting your house back. We&rsquo;re with you for every one."
      >
        <div className="grid-3 path-grid">
          <div className="geo-card">
            <StarGlyph />
            <p className="step-index">First</p>
            <h3>The Storm</h3>
            <p>
              Wind, hail, water. Once it happens, we get out there, secure the place, and
              document everything. Every photo we take backs up your claim down the road.
            </p>
            <Link className="card-link" href="/storm-damage/">
              Storm Damage →
            </Link>
          </div>
          <div className="geo-card">
            <LevelGlyph />
            <p className="step-index">Second</p>
            <h3>The Claim</h3>
            <p>
              We walk you through it, put together a real repair estimate with everything
              documented, and sit down with the adjuster ourselves to go over it.
            </p>
            <Link className="card-link" href="/insurance-claims/">
              Insurance Claims →
            </Link>
          </div>
          <div className="geo-card">
            <KeystoneGlyph />
            <p className="step-index">Third</p>
            <h3>The Repair</h3>
            <p>
              Roof, water, rebuild. The same company that showed up on day one finishes the job.
              Last piece goes in, and you&rsquo;re back home.
            </p>
            <Link className="card-link" href="/reconstruction/">
              Reconstruction →
            </Link>
          </div>
        </div>
      </Section>

      {/* ---- II. THE TRIFECTA ---- */}
      <Section
        numeral="II"
        title="One Company. The Whole Storm."
        kicker="No other contractor around here does roofing, water, and rebuilds. We do all three."
        tone="navy"
      >
        <div className="grid-3">
          <div className="geo-card">
            <TriangleGlyph />
            <h3>Roofing</h3>
            <p>
              Replacement, repair, storm work. We document everything from the first tarp to
              the last shingle.
            </p>
            <Link className="card-link" href="/roofing/">
              Roofing →
            </Link>
          </div>
          <div className="geo-card">
            <InvertedTriangleGlyph />
            <h3>Water Mitigation</h3>
            <p>
              We&rsquo;re based right here in Medina County, so we get to your flooded basement
              faster than a truck coming out of Akron or Cleveland.
            </p>
            <Link className="card-link" href="/water-mitigation/">
              Water Mitigation →
            </Link>
          </div>
          <div className="geo-card">
            <SquareGlyph />
            <h3>Reconstruction</h3>
            <p>
              Once everything&rsquo;s dry, we put your home back together. Same crew, same
              relationship, no new contractor to break in.
            </p>
            <Link className="card-link" href="/reconstruction/">
              Reconstruction →
            </Link>
          </div>
        </div>
      </Section>

      {/* ---- III. THE ADVOCACY (golden split 61.8 / 38.2) ---- */}
      <Section
        numeral="III"
        title="Our Customer. Not Theirs."
        kicker="Everyone bills insurance. Nobody else answers to you."
      >
        <div className="golden-split">
          <div className="major">
            <p>
              If the adjuster&rsquo;s scope misses damage we already documented, we don&rsquo;t
              just complain about it. We show them the photos and measurements and hand over a
              real repair estimate. We help you make the calls. We show up when the adjuster
              does. We explain what&rsquo;s going on in plain English, and we don&rsquo;t
              disappear until the job&rsquo;s done.
            </p>
            <p>
              That&rsquo;s really the whole point: <em>you shouldn&rsquo;t have to figure this
              out on your own.</em>
            </p>
            <div className="btn-row" style={{ justifyContent: 'flex-start' }}>
              <Link className="btn" href="/insurance-claims/">
                How Claim Help Works
              </Link>
            </div>
          </div>
          <aside className="aside-panel">
            <span className="smallcaps">Plain Dealing</span>
            <p className="fineprint" style={{ margin: 0 }}>
              {DISCLAIMER}
            </p>
          </aside>
        </div>
      </Section>

      {/* ---- IV. THE TERRITORY ---- */}
      <Section
        numeral="IV"
        title="Where We Work"
        kicker="We&rsquo;re based at 7130 Norwalk Rd in Medina, and we cover the whole county."
        tone="soft"
      >
        <ul className="communities">
          <li>
            <Link href="/service-areas/medina-oh/">Medina</Link>
          </li>
          <li>
            <Link href="/service-areas/brunswick-oh/">Brunswick</Link>
          </li>
          <li>
            <Link href="/service-areas/wadsworth-oh/">Wadsworth</Link>
          </li>
          <li>Montville Twp</li>
          <li>Hinckley Twp</li>
          <li>Valley City</li>
          <li>Sharon Center</li>
          <li>Granger Twp</li>
          <li>Litchfield Twp</li>
          <li>Chippewa Lake</li>
          <li>Seville</li>
          <li>Lodi</li>
          <li>Westfield Center</li>
          <li>Spencer</li>
        </ul>
        <p style={{ textAlign: 'center', marginTop: 'var(--s1)' }}>
          <Link href="/service-areas/">All service areas →</Link>
        </p>
      </Section>

      {/* ---- V. ANSWERS ---- */}
      <Section
        numeral="V"
        title="Straight Answers"
        kicker="We get asked these three more than anything else."
      >
        <div className="faq">
          <details>
            <summary>Does homeowners insurance cover roof storm damage in Ohio?</summary>
            <p>
              Usually, yes. A standard Ohio homeowners policy covers sudden storm damage from
              wind and hail, minus your deductible. Normal wear and tear is a different story,
              which is why we document everything from day one.{' '}
              <Link href="/learning-center/does-insurance-cover-roof-storm-damage/">
                Full answer →
              </Link>
            </p>
          </details>
          <details>
            <summary>Who do I call for a flooded basement in Medina?</summary>
            <p>
              Call a local water mitigation crew first, before the insurance company, and
              before a plumber for standing water. That first hour decides how much of your
              basement you get to keep.{' '}
              <Link href="/learning-center/flooded-basement-who-to-call/">Full answer →</Link>
            </p>
          </details>
          <details>
            <summary>Can I choose my own contractor for an insurance claim?</summary>
            <p>
              Yes. In Ohio, it&rsquo;s your call who repairs your home, not your insurance
              company&rsquo;s. If they hand you a &ldquo;preferred vendor&rdquo; list, that&rsquo;s
              a suggestion, not a requirement.{' '}
              <Link href="/learning-center/can-i-choose-my-own-contractor/">Full answer →</Link>
            </p>
          </details>
          <p className="faq-more">
            <Link href="/learning-center/">Visit the Learning Center →</Link>
          </p>
        </div>
      </Section>

      {/* ---- THE OWNER ---- */}
      <Section title="The Name Is the Map" kicker="MEDina + BrunsWICK = MEDWICK.">
        <div className="owner-block">
          <blockquote>
            &ldquo;I named this company after the two towns that raised me. When your roof opens
            up, you&rsquo;re not calling some franchise three counties away. You&rsquo;re calling
            your neighbor.&rdquo;
          </blockquote>
          <p className="smallcaps" style={{ color: 'var(--gold-ink)' }}>
            Owner-led · Medina County, Ohio
          </p>
          <Link href="/about/">The Medwick story →</Link>
        </div>
      </Section>

      {/* ---- FINAL CTA ---- */}
      <section className="section navy" style={{ textAlign: 'center' }}>
        <div>
          <Divider />
          <h2
            style={{
              fontSize: 'clamp(var(--t-2), 3.4vw, var(--t-4))',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              margin: 'var(--s1) auto',
            }}
          >
            You Don&rsquo;t Have to Figure This Out Alone
          </h2>
          <div className="btn-row">
            <Link className="btn" href="/contact/">
              Request an Estimate
            </Link>
            <a className="btn-ghost" href={SITE.phoneHref}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
