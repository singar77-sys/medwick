import Link from 'next/link';
import { DOCS, REPORTS } from './lib/docs';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">Digital Growth Plan · Medina County, Ohio</p>
        <h1>
          Two market scans. The same <span className="hl">open door</span>, and Medwick fits it.
        </h1>
        <p className="hero-lede">
          We scored every roofer and every water-damage firm in the Medina market across 21
          authority dimensions. In both, the same gap: nobody owns local identity, digital
          authority, reviews, and AI search at once. Medwick is the one company that can, across
          roof, water, and rebuild.
        </p>
        <p className="hero-tagline">&ldquo;Building Excellence, One Project at a Time.&rdquo;</p>
        <div className="hero-cta">
          <a href="#intel" className="btn btn-gold">
            See the market intelligence →
          </a>
          <Link href="/strategy" className="btn btn-ghost">
            See the strategy
          </Link>
        </div>
      </section>

      <section className="callout">
        <p>
          <strong>Two markets, one opening.</strong> In roofing, authority is split three ways:
          Gridiron wins on volume, Exteriors Plus on certifications, Fixler on local identity, but
          no one holds all three. In water mitigation it is even softer: national franchises own
          brand recall and no local champion exists at all. The seat marked &ldquo;the trusted
          Medina name&rdquo; is empty in both.
        </p>
      </section>

      <section className="scoreboard">
        <div className="market">
          <div className="market-head">
            <span className="market-tag">Roofing Market</span>
            <span className="market-n">13 rivals scored</span>
          </div>
          <div className="market-rows">
            <div className="mrow"><b>79.0</b> Gridiron Guys — wins on sheer volume</div>
            <div className="mrow"><b>75.1</b> Fixler — owns Medina&rsquo;s local identity</div>
            <div className="mrow"><b>57.8</b> market average</div>
          </div>
          <p className="market-take">
            Three leaders, three different strengths. Beat any one of them on its weak flank.
          </p>
        </div>
        <div className="market">
          <div className="market-head">
            <span className="market-tag">Water Mitigation</span>
            <span className="market-n">15 rivals scored</span>
          </div>
          <div className="market-rows">
            <div className="mrow"><b>75.4</b> SERVPRO — national brand recall</div>
            <div className="mrow"><b>57.7</b> BTN — best local, but thin proof</div>
            <div className="mrow"><b>53.2</b> market average</div>
          </div>
          <p className="market-take">
            No local champion, no award holder, a review desert. The wider-open of the two.
          </p>
        </div>
      </section>

      <section className="gaps-sec">
        <h2 className="section-h">The opening, in both markets</h2>
        <div className="gaps">
          <div className="gap">
            <h4>AI &amp; generative search</h4>
            <p>Nobody is the cited answer when a homeowner asks ChatGPT or Google AI who to call. First mover wins a compounding lead.</p>
          </div>
          <div className="gap">
            <h4>Review volume</h4>
            <p>The roofing identity leader shows just 34 reviews; the water field is a desert. The fastest lever to climb.</p>
          </div>
          <div className="gap">
            <h4>Local identity &amp; awards</h4>
            <p>Reader&rsquo;s Choice and &ldquo;Best of Medina&rdquo; are winnable, and water has zero award holders at all.</p>
          </div>
          <div className="gap">
            <h4>Educational content</h4>
            <p>Almost no competitor publishes. Medina-specific answers build authority that competitors can&rsquo;t buy quickly.</p>
          </div>
          <div className="gap">
            <h4>Insurance-claim advocacy</h4>
            <p>Everyone bills insurance; nobody owns &ldquo;we fight for you.&rdquo; An empty, emotionally resonant lane.</p>
          </div>
          <div className="gap">
            <h4>The trifecta</h4>
            <p>Roof + water + rebuild under one local roof. No competitor offers it. Medwick&rsquo;s structural edge.</p>
          </div>
        </div>
      </section>

      <section className="doc-cards" id="intel">
        <h2 className="section-h">Market intelligence</h2>
        <div className="cards">
          {REPORTS.map((r) => (
            <a
              key={r.key}
              href={`/reports/${r.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-report"
            >
              <span className="card-num">{r.tag}</span>
              <span className="card-title">{r.title}</span>
              <span className="card-blurb">{r.blurb}</span>
              <span className="card-go">Open report ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="doc-cards">
        <h2 className="section-h">The strategy</h2>
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
        <h2 className="section-h">A living picture</h2>
        <p>
          More market scans are underway. As each one lands it slots into this overview, building a
          single connected view of where Medwick stands and how it wins, market by market.
        </p>
      </section>
    </div>
  );
}
