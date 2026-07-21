import { SITE } from './site';

// JSON-LD builders per SITE-STRUCTURE.md §2 and audit §4.5.
// HARD RULE: no aggregateRating / Review markup anywhere until real
// testimonials render on-page (the AAPEX violation we will not repeat).

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: 'US',
};

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE.baseUrl}/#organization`,
    name: SITE.name,
    url: `${SITE.baseUrl}/`,
    telephone: SITE.phone,
    address: postalAddress,
    logo: `${SITE.baseUrl}/medwick-logo.webp`,
    image: `${SITE.baseUrl}/medwick-logo.webp`,
    slogan: SITE.tagline,
    // sameAs: GBP / Facebook / Instagram URLs go in once profiles are
    // claimed and canonical (GBP claim is a week-1 client action).
  };
}

// Round-the-clock availability belongs on the SERVICE, not the organization.
// Medwick answers emergency calls 24/7; the office does not keep 24/7 hours,
// so putting openingHours on the GeneralContractor would be a false claim.
// Only pass emergency:true on pages that genuinely take calls at 3am.
const ALWAYS_OPEN = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
};

export function service({ name, description, path, areaServed, emergency = false }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    url: `${SITE.baseUrl}${path}`,
    provider: { '@id': `${SITE.baseUrl}/#organization` },
    // City-level areaServed (all launch communities), never just "Ohio".
    areaServed: (areaServed || ['Medina', 'Brunswick', 'Wadsworth']).map((city) => ({
      '@type': 'City',
      name: `${city}, OH`,
    })),
    ...(emergency ? { hoursAvailable: ALWAYS_OPEN } : {}),
  };
}

export function faqPage(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

// Render helper: <JsonLd data={organization()} />
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
