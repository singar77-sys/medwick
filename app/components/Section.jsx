import { Divider } from './ornaments';

// Numbered, axially-symmetric section frame. Roman numerals set the
// tracing-board rhythm; every section head is centered on the vertical axis.
export default function Section({ numeral, title, kicker, children, tone }) {
  return (
    <section className={`section ${tone || ''}`}>
      <header className="section-head">
        {numeral && <span className="section-numeral">{numeral}</span>}
        <h2>{title}</h2>
        {kicker && <p className="section-kicker">{kicker}</p>}
        <Divider />
      </header>
      {children}
    </section>
  );
}
