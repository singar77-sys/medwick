import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Roofing Contractor in Medina County, OH | Medwick Construction',
  description:
    'Roof replacement, repair, and storm restoration from a Medina-based contractor. Documented workmanship, insurance-claim fluency, and one company from tarp to final shingle. Registered #26-731.',
  path: '/roofing/',
});

export default function Roofing() {
  return (
    <>
      <Hero
        video="/video/roofing-aerial-trusses.mp4"
        poster="/video/posters/roofing-aerial-trusses.jpg"
        eyebrow="Roofing &middot; Medina County"
        title="Roofing in Medina County, Ohio"
        promise="Our core trade, replacement, repair, and storm work, run through the same advocacy promise as everything else we do."
        primary={{ href: '/insurance-claims/roof/', label: 'Roof Claim Help' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          '≥ 800 words; sub-service cards (replacement, repair, emergency come in Phase 2)',
          'Proof, process, FAQ block',
          'Links UP to insurance-claims (most roof jobs are claims)',
          'Trifecta cross-link: roofing ⇄ water ⇄ remodeling, one local company',
        ]}
        links={[
          { href: '/insurance-claims/roof/', label: 'Roof Claims' },
          { href: '/storm-damage/', label: 'Storm Damage' },
          { href: '/water-mitigation/', label: 'Water Mitigation' },
        ]}
      />
      <JsonLd
        data={service({
          name: 'Roofing',
          description:
            'Roof replacement, roof repair, and storm damage roof restoration across Medina County, Ohio.',
          path: '/roofing/',
        })}
      />
    </>
  );
}
