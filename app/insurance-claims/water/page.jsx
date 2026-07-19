import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Water Damage Insurance Claim Help in Medina, OH | Medwick',
  description:
    'Burst pipe or flooded basement? Medwick documents the water damage, prepares the repair estimate, meets your adjuster, and handles mitigation through rebuild. One Medina County company for the whole claim.',
};

export default function WaterClaims() {
  return (
    <>
      <Hero
        video="/video/water-ceiling-repair.mp4"
        poster="/video/posters/water-ceiling-repair.jpg"
        eyebrow="Insurance Claims &middot; Water"
        title="Water Damage Insurance Claim Help in Medina County"
        promise="Burst pipe or flooded basement? We document the damage, prepare the estimate, meet your adjuster, and handle mitigation through the rebuild."
        primary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
        secondary={{ href: '/water-mitigation/', label: 'Water Mitigation' }}
      />
      <Stub
        underHero
        outline={[
          '≥ 800 words, mitigation-through-remodeling claim path, honest price bands',
          'FAQPage schema (will insurance pay for mitigation, mold timelines, documentation)',
          '⚠ PENDING OHIO COUNSEL (SOW §11) before publish',
        ]}
        links={[
          { href: '/insurance-claims/', label: 'Insurance Claims' },
          { href: '/water-mitigation/', label: 'Water Mitigation' },
          { href: '/remodeling/', label: 'Remodeling' },
        ]}
      />
    </>
  );
}
