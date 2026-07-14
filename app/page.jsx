import Link from 'next/link';
import { DOCS, REPORTS } from './lib/docs';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">Digital Growth Plan · Medina County, Ohio</p>
        <h1>
          We reviewed Medina&rsquo;s roofing, water-damage, and remodeling companies and found a
          position <span className="hl">no competitor currently owns</span>.
        </h1>
        <p className="hero-lede">
          No other company combines a strong local presence, all three services, and a professional
          online presence. Medwick can fill that gap by becoming Medina&rsquo;s trusted company for
          roofing, water mitigation, and remodeling.
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
          These three services each have a clear opening. Roofing has several strong competitors, but
          no single company leads in every area. Water mitigation has no clear local leader.
          Remodeling has a few highly qualified companies at the top, while most of the middle looks
          the same.
        </p>
      </section>

      <section className="scoreboard">
        <div className="market">
          <div className="market-head">
            <span className="market-tag">Roofing Market</span>
            <span className="market-n">13 rivals scored</span>
          </div>
          <div className="market-rows">
            <div className="mrow"><b>79.0</b> Gridiron Guys, wins on volume</div>
            <div className="mrow"><b>75.1</b> Fixler, owns local identity</div>
            <div className="mrow"><b>57.8</b> market average</div>
          </div>
        </div>
        <div className="market">
          <div className="market-head">
            <span className="market-tag">Water Mitigation</span>
            <span className="market-n">15 rivals scored</span>
          </div>
          <div className="market-rows">
            <div className="mrow"><b>75.4</b> SERVPRO, national brand recall</div>
            <div className="mrow"><b>57.7</b> BTN, best local but thin</div>
            <div className="mrow"><b>53.2</b> market average</div>
          </div>
        </div>
        <div className="market">
          <div className="market-head">
            <span className="market-tag">Remodeling</span>
            <span className="market-n">16 rivals scored</span>
          </div>
          <div className="market-rows">
            <div className="mrow"><b>74.4</b> Cabinet-S-Top, kitchen &amp; bath leader</div>
            <div className="mrow"><b>67.6</b> Hansen, broadest scope</div>
            <div className="mrow"><b>58.8</b> market average</div>
          </div>
        </div>
      </section>

      <section className="callout">
        <p>
          <strong>The answer is to own the whole problem, not a trade.</strong>{' '}
          People don&rsquo;t wake up wanting a roofer; they wake up with a leaking ceiling, a flooded
          basement, or a denied claim. Medwick can become Medina County&rsquo;s{' '}
          <strong>Insurance Restoration Advocate</strong>: the trusted guide from the first insurance
          call to the final repair, with roofing, water mitigation, and reconstruction as the natural
          outcomes. <Link href="/positioning">Read the positioning →</Link>
        </p>
      </section>

      <section className="doc-cards" id="intel">
        <h2 className="section-h">Market intelligence</h2>
        <div className="cards">
          {REPORTS.map((r) => (
            <a key={r.key} href={`/reports/${r.file}`} className="card card-report">
              <span className="card-num">{r.tag}</span>
              <span className="card-title">{r.title}</span>
              <span className="card-blurb">{r.blurb}</span>
              <span className="card-go">Open report →</span>
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
    </div>
  );
}
