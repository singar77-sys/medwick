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
    blurb: 'The three market scans distilled: the top threats in roofing, water, and remodeling, each rival’s exploitable gap, and how Medwick wins each one.',
  },
];

// Competitive Authority Reports — self-contained HTML dashboards served from /public/reports.
// Open in a new tab so the overview stays put during a presentation.
export const REPORTS = [
  {
    key: 'roofing',
    title: 'Roofing Market',
    file: 'roofing-authority.html',
    tag: '13 rivals scored',
    blurb:
      'Every Medina roofer scored across 21 authority dimensions. Gridiron leads on volume, Fixler owns local identity, nobody holds both.',
  },
  {
    key: 'water',
    title: 'Water Mitigation Market',
    file: 'water-authority.html',
    tag: '15 rivals scored',
    blurb:
      'The county water-damage field. SERVPRO and Roto-Rooter win on brand recall; no local champion exists. The most wide-open market.',
  },
  {
    key: 'remodeling',
    title: 'Remodeling Market',
    file: 'remodeling-authority.html',
    tag: '16 rivals scored',
    blurb:
      'The inverse of water: a real, credentialed top tier (Cabinet-S-Top, Hurst) that marketing alone won’t topple, over an undifferentiated middle with one unowned seat.',
  },
];

// Cross-document links inside the markdown reference the source filenames.
// Map them to their on-site routes so the links resolve.
export const FILE_TO_SLUG = Object.fromEntries(DOCS.map((d) => [d.file, d.slug]));
