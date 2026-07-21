import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

// Renamed from /reconstruction/ → /remodeling/ (2026-07-17, Mark). The third
// trade is now customer-facing "Remodeling." NOTE: strategy/content docs
// (content/*.md) still use "reconstruction", propagation is pending Mark's
// call on whether this is a full positioning change or just the label.

export const metadata = pageMetadata({
  title: 'Remodeling Contractor in Medina County, OH | Medwick',
  description:
    'After the roof is on and the structure is dry, the remodel puts your home back together. Kitchen, bath, basement, and whole-home remodeling. Same company, same relationship, no new contractor to vet.',
  path: '/remodeling/',
});

export default function Remodeling() {
  return (
    <>
      <Hero
        video="/video/reconstruction-finished-interior.mp4"
        poster="/video/posters/reconstruction-finished-interior.jpg"
        eyebrow="Remodeling &middot; Medina County"
        title="Remodeling in Medina County, Ohio"
        promise="The natural next step after recovery, kitchens, baths, basements, and whole-home remodels. Same crew, not a new contractor to vet."
        primary={{ href: '/contact/', label: 'Request an Estimate' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          '≥ 800 words; the one-company path: roof, then water, then remodel',
          'Honest cost/timeline bands',
          'Sub-pages (basement, kitchen, bathroom, whole-home) come in Phase 2',
          'Cross-links up to water mitigation (the drying that precedes the remodel)',
        ]}
        links={[
          { href: '/water-mitigation/', label: 'Water Mitigation' },
          { href: '/storm-damage/', label: 'Storm Damage' },
          { href: '/insurance-claims/', label: 'Insurance Claims' },
        ]}
      />
      <JsonLd
        data={service({
          name: 'Remodeling',
          description:
            'Home remodeling after storm and water damage: basements, kitchens, bathrooms, and whole-home remodels across Medina County, Ohio.',
          path: '/remodeling/',
        })}
      />
    </>
  );
}
