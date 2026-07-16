import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';

export const metadata = {
  title: 'Reconstruction Contractor in Medina County, OH | Medwick',
  description:
    'After the roof is on and the structure is dry, the rebuild puts your home back together. Basement, kitchen, bathroom, and whole-home reconstruction. Same company, same relationship, no new contractor to vet.',
};

export default function Reconstruction() {
  return (
    <>
      <Stub
        tier="hekhal"
        h1="Reconstruction in Medina County, Ohio"
        purpose="The natural next step after recovery. Same crew, not a new contractor to vet."
        outline={[
          '≥ 800 words; the one-company path: roof, then water, then rebuild',
          'Honest cost/timeline bands',
          'Sub-pages (basement, kitchen, bathroom, whole-home) come in Phase 2',
          'Cross-links up to water mitigation (the drying that precedes the rebuild)',
        ]}
        links={[
          { href: '/water-mitigation/', label: 'Water Mitigation' },
          { href: '/storm-damage/', label: 'Storm Damage' },
          { href: '/insurance-claims/', label: 'Insurance Claims' },
        ]}
      />
      <JsonLd
        data={service({
          name: 'Reconstruction',
          description:
            'Insurance-paid rebuilds after storm and water damage: basements, kitchens, bathrooms, and whole-home reconstruction across Medina County, Ohio.',
          path: '/reconstruction/',
        })}
      />
    </>
  );
}
