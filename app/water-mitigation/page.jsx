import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Water Mitigation in Medina County, OH | Medwick Construction',
  description:
    'Water damage cleanup and mitigation from a crew based right in Medina County, not trucked in from Akron or Cleveland. Fast local response, honest documentation, and rebuild under the same roof.',
  path: '/water-mitigation/',
});

export default function WaterMitigation() {
  return (
    <>
      <Hero
        video="/video/storm-rain-roof.mp4"
        poster="/video/posters/storm-rain-roof.jpg"
        eyebrow="Water Mitigation &middot; Medina County"
        title="Water Mitigation in Medina County, Ohio"
        promise="A Medina County crew reaches your water damage faster than trucks dispatched from Akron or Cleveland, and the same company handles the drying, the claim, and the rebuild."
        primary={{ href: '/water-mitigation/emergency-water-removal/', label: 'Emergency Water Removal' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          '≥ 800 words; response-time PROOF element: stated in-county window, timestamped job examples, in-county vs regional arrival contrast',
          '24/7 emergency line, confirmed operationally true 2026-07-21',
          'Sub-pages (cleanup, drying, mold prevention) come in Phase 2, emergency removal is live now',
          'Links up to water-claims and across to remodeling',
        ]}
        links={[
          { href: '/water-mitigation/emergency-water-removal/', label: 'Emergency Water Removal' },
          { href: '/insurance-claims/water/', label: 'Water Claims' },
          { href: '/remodeling/', label: 'Remodeling' },
        ]}
      />
      <JsonLd
        data={service({
          name: 'Water Mitigation',
          description:
            'Emergency water removal, water damage cleanup, and structural drying across Medina County, Ohio.',
          path: '/water-mitigation/',
        })}
      />
    </>
  );
}
