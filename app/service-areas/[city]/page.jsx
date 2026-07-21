import { notFound } from 'next/navigation';
import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { CITIES } from '@/lib/cities';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return {};
  return pageMetadata({
    title: `Storm, Roof & Water Restoration in ${city.name}, OH | Medwick Construction`,
    // No "Real local projects" claim here until a project set actually renders
    // on this page: the meta description is what shows in search results, and
    // promising proof the page does not contain is the doorway pattern the
    // anti-doorway gate in lib/cities.js exists to prevent.
    description: `${city.name}, Ohio storm, roof, and water damage help from a Medina-based advocate. We guide your insurance claim and complete the repair. Free help: ${SITE.phone}.`,
    path: `/service-areas/${city.slug}/`,
  });
}

export default async function CityPage({ params }) {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) notFound();
  return (
    <>
      <Hero
        video={`/video/${city.hero}.mp4`}
        poster={`/video/posters/${city.hero}.jpg`}
        eyebrow={`${city.name}, Ohio`}
        title={`Storm, Roof & Water Restoration in ${city.name}, Ohio`}
        promise={city.detail}
        primary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
        secondary={{ href: '/storm-damage/', label: 'Storm Damage' }}
      />
      <Stub
        underHero
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
    </>
  );
}
