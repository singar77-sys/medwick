import Link from 'next/link';

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-main">
            <p className="eyebrow">
              <span className="eyebrow-mark" aria-hidden="true" />
              Medwick Construction / Digital Growth Plan
            </p>
            <h1>
              Right now you&rsquo;re <span className="hl">invisible</span> on Google. Here&rsquo;s how we fix that.
            </h1>
            <p className="hero-lede">
              You have the license, the 5-star rating, and the real projects. Almost none of it
              shows up online yet. This is the plan to change that, and to own the one thing no
              contractor in Medina does.
            </p>
            <p className="hero-tagline">&ldquo;Building Excellence, One Project at a Time.&rdquo;</p>
            <div className="hero-cta">
              <Link href="#plan" className="btn btn-gold">
                See the plan
              </Link>
            </div>
          </div>
          <div className="hero-geo" aria-hidden="true">
            <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="16" y1="286" x2="304" y2="286" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
              <line x1="70" y1="280" x2="70" y2="292" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
              <line x1="160" y1="278" x2="160" y2="294" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
              <line x1="250" y1="280" x2="250" y2="292" stroke="rgba(255,255,255,.32)" strokeWidth="1.5" />
              <line x1="34" y1="34" x2="150" y2="150" stroke="rgba(255,255,255,.22)" strokeWidth="1.5" />
              <circle cx="208" cy="108" r="80" fill="#c0a674" />
              <path d="M66 250 L164 250 L115 158 Z" fill="#b4472e" />
              <rect x="72" y="72" width="96" height="96" stroke="rgba(255,255,255,.62)" strokeWidth="2" />
              <circle cx="252" cy="232" r="17" fill="#a98f5f" />
            </svg>
          </div>
        </div>
      </section>

      {/* THE SITUATION */}
      <section className="band band-paper">
        <div className="wrap">
          <div className="bignums">
            <div className="bignum">
              <span className="bn-mark bn-square" aria-hidden="true" />
              <span className="bn-figure">1</span>
              <span className="bn-label">page on your site</span>
              <span className="bn-ctx">Google has almost nothing of yours to show.</span>
            </div>
            <div className="bignum">
              <span className="bn-mark bn-circle" aria-hidden="true" />
              <span className="bn-figure">12</span>
              <span className="bn-label">5-star reviews, hidden</span>
              <span className="bn-ctx">You&rsquo;ve earned them. Your website shows none.</span>
            </div>
            <div className="bignum">
              <span className="bn-mark bn-triangle" aria-hidden="true" />
              <span className="bn-figure gold">0 / 6</span>
              <span className="bn-label">rivals showing Google stars</span>
              <span className="bn-ctx">Be the first and you stand out instantly.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE YOU WIN */}
      <section className="band band-white">
        <div className="wrap">
          <h2 className="section-h">Where you win</h2>
          <div className="opening-grid">
            <div className="opening">
              <span className="bn-mark bn-square opening-mark" aria-hidden="true" />
              <h3>Own storm &amp; water</h3>
              <p>
                When a storm hits, homeowners need the roof, the water cleanup, and the rebuild. You
                do all three. No competitor in Medina leads with it, and insurance pays for it.
              </p>
            </div>
            <div className="opening">
              <span className="bn-mark bn-circle opening-mark" aria-hidden="true" />
              <h3>You&rsquo;re the real local</h3>
              <p>
                The biggest names in Medina search run it from Solon, North Canton, even Maryland.
                You&rsquo;re actually here. That&rsquo;s an edge they can&rsquo;t buy.
              </p>
            </div>
            <div className="opening">
              <span className="bn-mark bn-triangle opening-mark" aria-hidden="true" />
              <h3>Be the one with stars</h3>
              <p>
                Not one of your six competitors shows their star rating in Google. Set it up right
                and you&rsquo;re the listing that catches the eye.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PLAN */}
      <section className="band band-paper" id="plan">
        <div className="wrap">
          <h2 className="section-h">The plan</h2>
          <div className="phases">
            <div className="phase">
              <span className="phase-num">01</span>
              <span className="phase-when">Now</span>
              <span className="phase-sub">This week</span>
              <p>
                Fix and show what you already have. Your website&rsquo;s call button dials the wrong
                number, fix that today. Claim your Google listing. Put your 12 reviews and real
                project photos where people can see them.
              </p>
            </div>
            <div className="phase">
              <span className="phase-num">02</span>
              <span className="phase-when">Next</span>
              <span className="phase-sub">1-3 months</span>
              <p>
                Build a real website. A page for each service and each town you cover, led by storm
                and water. Real photos, real local detail, built to show up on Google.
              </p>
            </div>
            <div className="phase">
              <span className="phase-num">03</span>
              <span className="phase-when">Then</span>
              <span className="phase-sub">3-12 months</span>
              <p>
                Pull ahead. A steady stream of new reviews, local storm and cost guides, and the
                trust badges that put you next to, then past, the big out-of-town names.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM LINE */}
      <section className="bottomline">
        <div className="wrap">
          <p className="bottomline-lead">
            <strong>Honest expectations.</strong> A real website, a claimed Google profile, and a
            steady flow of reviews. Give it 6 to 12 months to fully take hold. Reviews are the
            single biggest lever, and they start the day we ask.
          </p>
          <p className="bottomline-cta">
            The fastest win is free and takes an afternoon: fix the phone number and claim your
            Google listing.
          </p>
        </div>
      </section>
    </div>
  );
}
