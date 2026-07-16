import { notFound } from 'next/navigation';
import Stub from '@/app/components/Stub';
import { CITIES } from '@/lib/cities';
import { SITE } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: `Storm, Roof & Water Restoration in ${city.name}, OH | Medwick Construction`,
    description: `${city.name}, Ohio storm, roof, and water damage help from a Medina-based advocate. We guide your insurance claim and complete the repair. Real local projects. Free help: ${SITE.phone}.`,
  };
}

export default async function CityPage({ params }) {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) notFound();
  return (
    <Stub
      tier="court"
      h1={`Storm, Roof & Water Restoration in ${city.name}, Ohio`}
      purpose={city.detail}
      outline={[
        '≥ 500 words, ≥ 40% unique. Anti-doorway gate before this page ships:',
        `1. Project photo set from ${city.name}`,
        '2. Named local testimonial',
        '3. Town-specific housing/storm detail',
        '4. Distinct FAQs (feed the answer layer)',
        'LocalBusiness schema with geo for this area',
        'Links: relevant hubs up, 2–3 genuinely nearby city pages, one matching project case study',
      ]}
      links={[
        { href: '/storm-damage/', label: 'Storm Damage' },
        { href: '/insurance-claims/', label: 'Insurance Claims' },
        { href: '/service-areas/', label: 'All Service Areas' },
      ]}
    />
  );
}
