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

export function service({ name, description, path, areaServed }) {
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
