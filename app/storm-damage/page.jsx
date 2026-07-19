import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Storm Damage in Medina County, OH: What to Do First | Medwick',
  description:
    'Wind or hail hit your house? Plain-English first steps for Medina County homeowners: secure the property, document the damage, start the insurance claim, and get it repaired. One local company handles the whole thing.',
};

export default function StormDamage() {
  return (
    <>
      <Hero
        video="/video/storm-clouds-rooftop.mp4"
        poster="/video/posters/storm-clouds-rooftop.jpg"
        eyebrow="Storm Damage &middot; Medina County"
        title="Storm Damage in Medina County: Your First Steps"
        promise="Wind or hail hit your house? Here&rsquo;s what to do first — secure the property, document the damage, start the claim. One local company handles the whole thing."
        primary={{ href: '/insurance-claims/', label: 'Get Claim Help' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          '≥ 800 words, opens with the plain-English "first 24 hours" answer',
          'Routes down to emergency response, the claim process, and the repair trades',
          'Sub-service cards, proof band, answer-optimized FAQ block, CTA',
          'Interlinked with the "whole storm" advocacy cluster',
        ]}
        links={[
          { href: '/storm-damage/emergency/', label: 'Emergency Response' },
          { href: '/insurance-claims/', label: 'Insurance Claims' },
          { href: '/roofing/', label: 'Roofing' },
          { href: '/water-mitigation/emergency-water-removal/', label: 'Emergency Water Removal' },
          { href: '/remodeling/', label: 'Remodeling' },
        ]}
      />
      <JsonLd
        data={service({
          name: 'Storm Damage Restoration',
          description:
            'Storm damage assessment, emergency response, insurance claim guidance, and complete repair for Medina County homeowners.',
          path: '/storm-damage/',
        })}
      />
    </>
  );
}
