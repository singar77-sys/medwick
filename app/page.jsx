import Link from 'next/link';
import { DOCS, REPORTS } from './lib/docs';

export default function Home() {
  return (
    <div className="home">
      <section className="hero ghost" style={{ '--ghost': "url('/textures/hero.webp')" }}>
        <p className="eyebrow">Digital Growth Plan · Medina County, Ohio</p>
        <h1>
          Medina County&rsquo;s <span className="hl">Insurance Restoration Advocate</span>
        </h1>
        <p className="hero-sub">From the first call to the final repair.</p>
        <p className="hero-lede">
          We reviewed the roofing, water-damage, and reconstruction market across Medina County. No
          local company clearly owns the position homeowners need after property damage: one trusted
          team that helps them understand the process, documents the work, coordinates with the
          adjuster, and completes the repair.
        </p>
        <p className="hero-punch">That position is open. <span className="hl">Medwick can own it.</span></p>
        <div className="hero-cta">
          <Link href="/positioning" className="btn btn-gold">
            Read the positioning →
          </Link>
          <a href="#intel" className="btn btn-ghost">
            See the audit
          </a>
        </div>
        <p className="hero-start">
          New here? Start with the <Link href="/positioning">Positioning</Link>, then see the{' '}
          <Link href="/proposal">Quote</Link>.
        </p>
      </section>

      <section className="callout reveal ghost" style={{ '--ghost': "url('/textures/roofing.webp')" }}>
        <p>
          <strong>Each market has a clear opening.</strong> Roofing is competitive, but no company
          leads across the board. Water mitigation has no established local leader. Remodeling has a
          strong top tier, but the rest of the market is largely interchangeable.
        </p>
      </section>

      <section className="scoreboard reveal-group ghost" style={{ '--ghost': "url('/textures/water.webp')" }}>
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

      <section className="callout reveal ghost" style={{ '--ghost': "url('/textures/build.webp')" }}>
        <p>
          <strong>Medwick does not need to beat everyone at everything.</strong> It needs to own the
          position none of them do. <Link href="/positioning">Read the positioning →</Link>
        </p>
      </section>

      <section className="doc-cards ghost" id="intel" style={{ '--ghost': "url('/textures/exterior.webp')" }}>
        <h2 className="section-h">Audit</h2>
        <div className="cards reveal-group">
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

      <section className="doc-cards ghost" style={{ '--ghost': "url('/textures/kitchen.webp')" }}>
        <h2 className="section-h">Strategies</h2>
        <div className="cards reveal-group">
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
