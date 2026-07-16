import Stub from '@/app/components/Stub';
import { DISCLAIMER } from '@/lib/site';
import { service, JsonLd } from '@/lib/schema';

export const metadata = {
  title: 'Insurance Claim Help in Medina County, OH | Medwick',
  description:
    "You are our customer, not the insurance company's. Medwick walks Medina County homeowners through the claim, documents the damage, meets the adjuster, and completes the repair. Clear, documented, honest at every step.",
};

export default function InsuranceClaims() {
  return (
    <>
      <Stub
        tier="hekhal"
        h1="Insurance Claim Help in Medina County, Ohio"
        purpose="Clear, documented, and honest at every step. That's the whole pitch."
        outline={[
          '≥ 800 words, the documented plain-English process: walk you through the claim, help make the calls, meet the adjuster, review the scope',
          'If the adjuster’s scope misses documented damage: our photos, measurements, and a detailed repair estimate',
          'Sub-pages: roof claims, water claims (scope-review page follows counsel clearance)',
          'FAQPage block, CTA',
          '⚠ ALL COPY ON THIS HUB IS PENDING OHIO COUNSEL (SOW §11). Do not publish before clearance.',
        ]}
        links={[
          { href: '/insurance-claims/roof/', label: 'Roof Claims' },
          { href: '/insurance-claims/water/', label: 'Water Claims' },
          { href: '/storm-damage/', label: 'Storm Damage' },
        ]}
      />
      <p style={{ maxWidth: '68ch', fontSize: '0.85rem', opacity: 0.8 }}>{DISCLAIMER}</p>
      <JsonLd
        data={service({
          name: 'Insurance Claim Support',
          description:
            'Damage documentation, repair estimates, adjuster meetings, and repair coordination for Medina County homeowners filing storm, roof, and water damage claims.',
          path: '/insurance-claims/',
        })}
      />
    </>
  );
}
