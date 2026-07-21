import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Water Mitigation in Medina County, OH | Medwick Construction',
  description:
    'Water damage cleanup and mitigation from a crew based right in Medina County, not trucked in from Akron or Cleveland. Fast local response, honest documentation, and rebuild under the same roof.',
};

export default function WaterMitigation() {
  return (
    <>
      <Hero
        video="/video/storm-rain-roof.mp4"
        poster="/video/posters/storm-rain-roof.jpg"
        eyebrow="Water Mitigation &middot; Medina County"
        title="Water Mitigation in Medina County, Ohio"
        promise="Nobody local is fast here, speed is our edge. We&rsquo;re based in Medina County, so we reach your water damage before a truck out of Akron or Cleveland."
        primary={{ href: '/water-mitigation/emergency-water-removal/', label: 'Emergency Water Removal' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          '≥ 800 words; response-time PROOF element: stated in-county window, timestamped job examples, in-county vs regional arrival contrast',
          '24/7 line (only if operationally true)',
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
