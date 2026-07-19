// Single source of truth for business identity. Every page, schema block,
// and footer reads from here — ONE name, ONE address, ONE phone number
// (byte-identical NAP is a hard requirement of the SEO spec).

export const SITE = {
  name: 'Medwick Construction LLC',
  shortName: 'Medwick Construction',
  legalNote: 'City of Medina Registered Contractor #26-731 · Licensed & Insured',
  tagline: 'Building Excellence, One Project at a Time.',
  // Production domain. Dev/preview deploys stay noindex until DNS cutover.
  baseUrl: 'https://medwickconstruction.com',
  phone: '(330) 635-3744',
  phoneHref: 'tel:+13306353744',
  address: {
    street: '7130 Norwalk Rd',
    city: 'Medina',
    region: 'OH',
    postalCode: '44256',
  },
  serviceArea: 'Medina County, Ohio',
};

// Required verbatim on the insurance-claims hub, home, and footer
// (SITE-STRUCTURE.md §2). PENDING OHIO COUNSEL review before launch (SOW §11)
// — do not reword without re-clearing.
export const DISCLAIMER =
  'Medwick Construction is a licensed general contractor, not a licensed public ' +
  'insurance adjuster. We document damage, prepare repair estimates, and coordinate ' +
  'and perform repairs. We do not negotiate, adjust, or interpret your insurance ' +
  'policy or claim settlement. For claim negotiation or coverage questions, consult ' +
  'your insurer, a licensed Ohio public adjuster, or an attorney. Our compensation ' +
  'is for the construction work performed, not a percentage of your insurance claim.';

// Nav: few top-level groups with dropdowns (2026-07-17 direction).
// Order still follows the positioning doc — the homeowner's problem first
// (storm/claims), then trades, then places, then company. Groups with
// `items` render as dropdowns; `href` on a group is the hub the label
// itself links to. Flat entries render as plain links.
export const NAV = [
  {
    label: 'Storm & Claims',
    href: '/storm-damage/',
    items: [
      { href: '/storm-damage/', label: 'Storm Damage' },
      { href: '/storm-damage/emergency/', label: 'Emergency Help' },
      { href: '/insurance-claims/', label: 'Insurance Claims' },
      { href: '/insurance-claims/roof/', label: 'Roof Claims' },
      { href: '/insurance-claims/water/', label: 'Water Claims' },
    ],
  },
  {
    label: 'Services',
    href: '/roofing/',
    items: [
      { href: '/roofing/', label: 'Roofing' },
      { href: '/water-mitigation/', label: 'Water Mitigation' },
      { href: '/water-mitigation/emergency-water-removal/', label: 'Emergency Water Removal' },
      { href: '/remodeling/', label: 'Remodeling' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/service-areas/',
    items: [
      { href: '/service-areas/medina-oh/', label: 'Medina' },
      { href: '/service-areas/brunswick-oh/', label: 'Brunswick' },
      { href: '/service-areas/wadsworth-oh/', label: 'Wadsworth' },
      { href: '/service-areas/', label: 'All Service Areas' },
    ],
  },
  {
    label: 'Company',
    href: '/about/',
    items: [
      { href: '/about/', label: 'About Medwick' },
      { href: '/projects/', label: 'Projects' },
      { href: '/reviews/', label: 'Reviews' },
      { href: '/learning-center/', label: 'Learning Center' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];
