// Pure data, safe to import from both client and server components.
// (No node built-ins here; see getDoc.js for the server-only file read.)

export const DOCS = [
  {
    slug: 'strategy',
    title: 'SEO Strategy',
    num: '01',
    file: 'SEO-STRATEGY.md',
    blurb: 'Positioning, the flanking bet, 3/6/12-month targets, and the technical foundation the new site must ship with.',
  },
  {
    slug: 'site-structure',
    title: 'Site Structure & On-Page',
    num: '02',
    file: 'SITE-STRUCTURE.md',
    blurb: 'The full URL architecture, per-page titles and metadata, keyword mapping, and internal-linking model.',
  },
  {
    slug: 'content-calendar',
    title: 'Content Calendar',
    num: '03',
    file: 'CONTENT-CALENDAR.md',
    blurb: 'What to publish and when: the cornerstone pipeline, the storm-response playbook, and seasonal timing.',
  },
  {
    slug: 'roadmap',
    title: 'Implementation Roadmap',
    num: '04',
    file: 'IMPLEMENTATION-ROADMAP.md',
    blurb: 'A phased build plan with pass/fail SEO gates, from fixing the current site this week through 12-month authority.',
  },
  {
    slug: 'competitors',
    title: 'Competitor Analysis',
    num: '05',
    file: 'COMPETITOR-ANALYSIS.md',
    blurb: 'The two competitive layers reconciled, each rival’s exploitable gap, and how Medwick lawfully wins.',
  },
];

// Cross-document links inside the markdown reference the source filenames.
// Map them to their on-site routes so the links resolve.
export const FILE_TO_SLUG = Object.fromEntries(DOCS.map((d) => [d.file, d.slug]));
