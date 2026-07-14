import './proposal.css';

export const metadata = {
  title: 'Website Proposal · Medwick Digital Growth Plan',
  description:
    'The website build proposal for Medwick Construction: scope, pricing, and terms, prepared by Hunter Systems.',
};

export default function Proposal() {
  return (
    <div className="pp">
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Medina County, Ohio &middot; Prepared by Hunter Systems</p>
          <h1>
            One website, built to get you <span className="hl">found</span> - and get you calls.
          </h1>
          <p className="hero-lede">
            You&rsquo;ve got the reviews and the work to back them up. Right now you just can&rsquo;t be
            found online. This fixes that.
          </p>
        </div>
      </header>

      <div className="wrap">
        <div className="price-block">
          <p className="price-label">This is the cost</p>
          <p className="price-anchor">
            Agencies quote a build like this at <s>$20,000+</s>. This isn&rsquo;t that.
          </p>
          <div className="price-amt">
            <span className="cur">$</span>9,700
          </div>
          <div className="price-terms">
            <span><span className="g">50%</span> to start</span>
            <span><span className="g">50%</span> when it goes live</span>
            <span>Hosting <span className="g">$200</span>/year</span>
          </div>
          <p className="price-note">
            Already credited: the <b>$300</b> you paid for the audit.
          </p>
        </div>

        <div className="sec-head">
          <h2>The whole job - not a page count</h2>
          <p>
            You don&rsquo;t quote a roof by the shingle. We don&rsquo;t quote a website by the page. This
            is a finished site with everything it needs to work.
          </p>
        </div>

        <div className="get">
          <ul className="feat">
            <li>A complete website in your navy-and-gold brand</li>
            <li>Every service laid out clear - roofing, water, reconstruction</li>
            <li>The insurance-claim angle no local competitor leads with</li>
            <li>Every town you serve</li>
            <li>Answer pages for the questions homeowners actually ask</li>
            <li>
              A 24/7 chatbot that catches the lead and <b>texts you right away</b>
            </li>
            <li>Your reviews and real job photos, front and center</li>
            <li>Your Google Business Profile set up right</li>
            <li>Tracking, so you see what&rsquo;s working</li>
          </ul>
        </div>

        <div className="sec-head center">
          <h2>Why it&rsquo;s worth it</h2>
          <p>It turns your 5-star reputation into phone calls.</p>
        </div>

        <div className="why">
          <div className="reason">
            <h3>One roof pays for it</h3>
            <p>A single insurance roof covers the whole build.</p>
          </div>
          <div className="reason">
            <h3>The position is open</h3>
            <p>
              Nobody local owns the insurance-claim angle, or shows up when a homeowner asks AI who
              to call.
            </p>
          </div>
          <div className="reason">
            <h3>Built to bring in work</h3>
            <p>
              The site you have now just sits there. This one{' '}
              <b>gets found, answers questions, and hands you the lead.</b>
            </p>
          </div>
        </div>

        <div className="checkin">
          <h3>Six months in, we take a look</h3>
          <p>
            We go through the numbers together - leads, calls, where you&rsquo;re ranking - then
            decide whether it&rsquo;s worth pushing further. <b>No retainer, no lock-in.</b>
          </p>
        </div>

        <section className="close">
          <p className="cline">
            Take a look, and whenever you&rsquo;re ready, <span className="hl">let&rsquo;s build it</span>.
          </p>
          <p className="contact">
            <b>Hunter Systems</b> &middot; hello@huntersystems.dev
          </p>
        </section>

        <p className="foot">
          Prepared for Medwick Construction LLC by Hunter Systems &middot; 2026 &middot; Quote valid 30 days.
        </p>
      </div>
    </div>
  );
}
