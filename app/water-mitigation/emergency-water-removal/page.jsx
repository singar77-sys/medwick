import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: '24/7 Emergency Water Removal in Medina County, OH',
  description:
    'Flooded basement? Burst pipe? A Medina-based crew reaches you faster than trucks dispatched from Akron or Cleveland. Water out, structure drying, insurance documented. Call (330) 635-3744 now.',
  path: '/water-mitigation/emergency-water-removal/',
});

export default function EmergencyWaterRemoval() {
  return (
    <>
      <Hero
        video="/video/water-flood-cleanup.mp4"
        poster="/video/posters/water-flood-cleanup.jpg"
        eyebrow="Emergency Water Removal &middot; 24/7"
        title="Flooded Basement? Emergency Water Removal in Medina County"
        promise="A Medina-based crew reaches you faster than trucks dispatched from Akron or Cleveland. Water out, structure drying, insurance documented."
        primary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
        secondary={{ href: '/insurance-claims/water/', label: 'Water Claims' }}
      />
      <Stub
        underHero
        outline={[
          'Direct answer first: what to do in the first hour',
          'Response-time proof: stated in-county window + timestamped real job examples',
          'In-county vs regional contrast (Medina crew beats North Royalton / Akron / Cleveland arrival)',
          'Documentation-for-the-claim framing; link to water-claims page',
        ]}
        links={[
          { href: '/water-mitigation/', label: 'Water Mitigation' },
          { href: '/insurance-claims/water/', label: 'Water Claims' },
        ]}
      />
      {/* emergency: true backs the 24/7 in the title and eyebrow with
          machine-readable hours, scoped to this service rather than the office. */}
      <JsonLd
        data={service({
          name: 'Emergency Water Removal',
          description:
            'Round-the-clock emergency water extraction, structural drying, and insurance documentation for flooded basements and burst pipes across Medina County, Ohio.',
          path: '/water-mitigation/emergency-water-removal/',
          emergency: true,
        })}
      />
    </>
  );
}
