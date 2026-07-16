import './proposal.css';

export const metadata = {
  title: 'Website Proposal · Medwick Digital Growth Plan',
  description:
    'The website build proposal for Medwick Construction: scope, pricing, and terms, prepared by Hunter Systems.',
};

const DEPOSIT_URL = 'https://buy.stripe.com/6oU28saXe5Btco122o9sk05';

// Hunter Systems sites launched this year. Local Ohio / trades first (similarity
// bias for a Medina County contractor), then range/credibility. Verified live
// (HTTP 200, real page) before shipping — see TODO-proposal-improvements.md Task 3.
const PROOF_SITES = [
  { name: 'Precision Mechanical', url: 'https://precisionmechanicalohio.com/' },
  { name: 'Ghost Tree Service', url: 'https://www.ghosttreeservice.com/' },
  { name: 'Jaworski Meats', url: 'https://www.jaworskimeats.com/' },
  { name: "Siedel's", url: 'https://www.siedels.com/' },
  { name: 'Ledgewood Barber', url: 'https://ledgewoodbarber.com/' },
  { name: 'Zanes Inc', url: 'https://zanesinc.org/' },
  { name: 'Jon Heavens', url: 'https://jonheavens.com/' },
  { name: 'KP Accounts', url: 'https://kpaccounts.co.uk/' },
];

export default function Proposal() {
  return (
    <div className="pp">
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Medina County, Ohio &middot; Prepared by Hunter Systems</p>
          <h1>
            You have the reputation. Now you need the <span className="hl">reach</span>.
          </h1>
          <p className="hero-lede">
            Medwick already has the work, the reviews, and the customer experience. What it does not
            have is a website that puts those strengths in front of homeowners when they need help.
          </p>
          <p className="hero-lede">
            This build closes that gap. It is designed to get Medwick found, earn trust quickly, and
            turn searches into qualified calls.
          </p>
        </div>
      </header>

      <div className="wrap">
        <div className="price-block">
          <p className="price-label">The Investment</p>
          <p className="price-anchor">A comparable agency build can exceed $20,000.</p>
          <p className="price-was"><s>$10,000</s></p>
          <div className="price-amt">
            <span className="cur">$</span>9,700
          </div>
          <p className="price-note">The <b>$300</b> you already paid for the audit is credited.</p>
          <div className="price-terms">
            <span><span className="g">50%</span> deposit</span>
            <span><span className="g">50%</span> at launch</span>
          </div>
          <p className="price-total"><b>$9,900</b> for year one: $9,700 build + $200 hosting.</p>
        </div>

        <div className="sec-head">
          <h2>The whole job, not a page count</h2>
          <p>
            You do not quote a roof by the shingle. We do not quote a website by the page. This is a
            complete website built around the sitemap we approve together at kickoff.
          </p>
        </div>

        <div className="get">
          <ul className="feat">
            <li>A custom Next.js website, designed to be your digital brick and mortar</li>
            <li>Clear pages for roofing, water mitigation, and reconstruction</li>
            <li>A strong insurance-claim position no local competitor leads with</li>
            <li>Service-area pages for your priority towns</li>
            <li>Direct answers to the questions homeowners actually ask</li>
            <li>A 24/7 AI assistant that <b>knows your business like a sales rep</b>, understands what homeowners actually ask, and texts you every lead</li>
            <li>Real reviews and project photos placed where they build trust</li>
            <li>Your Google Business Profile <b>fine-tuned, not just set up</b>, to show up in local map results</li>
            <li>Lead, call, and ranking tracking</li>
          </ul>
        </div>

        <div className="sec-head center">
          <h2>The timeline</h2>
          <p>About 10 weeks from kickoff to launch, assuming timely content, photos, and approvals from your side.</p>
        </div>

        <div className="timeline">
          <div className="phase">
            <span className="phase-week">Week 1</span>
            <p>Discovery and the sitemap we approve together</p>
          </div>
          <div className="phase">
            <span className="phase-week">Weeks 2&ndash;3</span>
            <p>Design</p>
          </div>
          <div className="phase">
            <span className="phase-week">Weeks 4&ndash;8</span>
            <p>Development and content</p>
          </div>
          <div className="phase">
            <span className="phase-week">Weeks 9&ndash;10</span>
            <p>Review, QA, and launch</p>
          </div>
        </div>

        <p className="timing-note">
          Those ten weeks matter. Starting now puts the site live for the September roofing peak,
          with winter leak and frozen-pipe pages indexed before the January spike. Waiting means
          launching into the slow season and missing that window.
        </p>

        <div className="sec-head center">
          <h2>Why it is worth it</h2>
          <p>
            Medwick already has the reputation. This website is designed to turn that reputation into
            more qualified calls.
          </p>
        </div>

        <div className="why">
          <div className="reason">
            <h3>A few jobs can cover the investment</h3>
            <p>
              It does not take hundreds of leads. The entire build costs less than a single roof
              replacement, and one qualified reconstruction job can cover it several times over.
              {/* TODO: swap in a specific average job figure if the owner prefers a hard number */}
            </p>
          </div>
          <div className="reason">
            <h3>The position is still open</h3>
            <p>
              No local company owns the insurance-claim position. No local company has become the
              clear answer when a homeowner asks who to call after property damage.
            </p>
          </div>
          <div className="reason">
            <h3>Built to generate opportunities</h3>
            <p>
              The current site sits online. The new site will improve visibility, answer homeowner
              questions, build trust, and capture qualified leads.
            </p>
          </div>
        </div>

        <div className="guarantee">
          <h3>We don&rsquo;t call it launched until it&rsquo;s right</h3>
          <p>
            The site goes live fast, passes Google&rsquo;s Core Web Vitals, and works on every
            device &mdash; or we keep working at no extra cost until it does.
            {/* TODO: confirm exact guarantee wording with owner before this ships to the client */}
          </p>
        </div>

        <div className="checkin">
          <h3>Six-month review</h3>
          <p>After six months, we review the numbers together:</p>
          <ul className="checkin-list">
            <li>Calls and leads</li>
            <li>Search visibility</li>
            <li>Rankings</li>
            <li>Pages gaining traction</li>
            <li>Opportunities worth expanding</li>
          </ul>
          <p>Then we decide what comes next. No retainer. No lock-in.</p>
        </div>

        <section className="proof">
          <p className="proof-label">Recent builds</p>
          <div className="proof-grid">
            {PROOF_SITES.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener"
                className="proof-link"
              >
                {site.name}
              </a>
            ))}
          </div>
        </section>

        <section className="close">
          <p className="eyebrow">Ready when you are</p>
          <p className="cline">
            Take a look through the plan. When you are ready, <span className="hl">we will build it</span>.
          </p>
          <a href={DEPOSIT_URL} target="_blank" rel="noopener" className="btn btn-gold close-cta">
            Approve the plan → start with the 50% deposit
          </a>
          <p className="close-reassure">No retainer. No lock-in.</p>
          <p className="contact">
            <b>Hunter Systems</b> &middot; <a href="mailto:hello@huntersystems.dev">hello@huntersystems.dev</a>
          </p>
        </section>

        <p className="foot">
          Prepared for Medwick Construction LLC by Hunter Systems &middot; 2026 &middot; Quote valid 30 days.
        </p>
      </div>
    </div>
  );
}
