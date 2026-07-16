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

// Nav order comes from the positioning doc: organized by the homeowner's
// problem, not by trade, insurance high.
export const NAV = [
  { href: '/storm-damage/', label: 'Storm Damage' },
  { href: '/insurance-claims/', label: 'Insurance Claims' },
  { href: '/roofing/', label: 'Roofing' },
  { href: '/water-mitigation/', label: 'Water Mitigation' },
  { href: '/reconstruction/', label: 'Reconstruction' },
  { href: '/service-areas/', label: 'Service Areas' },
  { href: '/projects/', label: 'Projects' },
  { href: '/learning-center/', label: 'Learning Center' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
