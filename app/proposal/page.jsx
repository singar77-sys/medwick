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
          <p className="hero-line">&ldquo;Building Excellence, One Project at a Time.&rdquo;</p>
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
            is a finished site with everything it needs to work - as many pages as it takes to get
            the job done.
          </p>
        </div>

        <div className="get">
          <ul className="feat">
            <li>A complete website in your navy-and-gold brand</li>
            <li>Every service laid out clear - roofing, water, reconstruction</li>
            <li>
              The <b>insurance-claim advocacy</b> angle no competitor owns
            </li>
            <li>Every town you serve</li>
            <li>
              Answers to what homeowners actually ask - so <b>Google and AI send them to you</b>
            </li>
            <li>
              A 24/7 chatbot that catches the lead and <b>texts you - even at 2am</b>
            </li>
            <li>Your reviews and real job photos, front and center</li>
            <li>Your Google Business Profile set up right</li>
            <li>Tracking, so you see exactly what&rsquo;s working</li>
          </ul>
        </div>

        <div className="sec-head center">
          <h2>Why this is smart money</h2>
          <p>Not a cost. The tool that turns a 5-star reputation into calls.</p>
        </div>

        <div className="why">
          <div className="reason">
            <h3>One roof pays for it</h3>
            <p>
              A single insurance roof covers the whole build. <b>Everything after that is yours.</b>
            </p>
          </div>
          <div className="reason">
            <h3>The best spot is still open</h3>
            <p>
              Nobody in the county owns the <b>insurance-advocate</b> position - or shows up when a
              homeowner asks AI who to call. First one there wins, and keeps winning.
            </p>
          </div>
          <div className="reason">
            <h3>This one actually works</h3>
            <p>
              A website that just sits there is what you have now. This one{' '}
              <b>gets found, answers questions, and hands you the lead.</b>
            </p>
          </div>
        </div>

        <div className="checkin">
          <h3>Six months in, we take a look</h3>
          <p>
            We sit down and go through the numbers together - leads, calls, where you&rsquo;re
            ranking - then decide if it&rsquo;s worth pushing further. <b>No retainer, no lock-in.</b>{' '}
            You&rsquo;ll see it working long before we ever talk about more.
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
