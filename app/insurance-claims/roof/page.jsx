import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Roof Insurance Claim Help in Medina, OH | Medwick',
  description:
    'Hail or wind damage to your roof? Medwick documents the damage, prepares a complete repair estimate, meets the adjuster, and completes the roof. One Medina County company from claim to final shingle.',
};

export default function RoofClaims() {
  return (
    <>
      <Hero
        video="/video/roofing-winter-install.mp4"
        poster="/video/posters/roofing-winter-install.jpg"
        eyebrow="Insurance Claims &middot; Roof"
        title="Roof Insurance Claim Help in Medina County"
        promise="Hail or wind damage? We document it, build the estimate, meet the adjuster, and complete the roof — one company from claim to final shingle."
        primary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
        secondary={{ href: '/roofing/', label: 'Our Roofing Work' }}
      />
      <Stub
        underHero
        outline={[
          '≥ 800 words, the documented claim-to-roof process, honest price bands',
          'FAQPage schema (does insurance cover hail/wind, deductibles, timelines)',
          '⚠ PENDING OHIO COUNSEL (SOW §11) before publish',
        ]}
        links={[
          { href: '/insurance-claims/', label: 'Insurance Claims' },
          { href: '/roofing/', label: 'Roofing' },
          { href: '/storm-damage/', label: 'Storm Damage' },
        ]}
      />
    </>
  );
}
