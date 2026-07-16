import Stub from '@/app/components/Stub';
import { service, JsonLd } from '@/lib/schema';

export const metadata = {
  title: 'Roofing Contractor in Medina County, OH | Medwick Construction',
  description:
    'Roof replacement, repair, and storm restoration from a Medina-based contractor. Documented workmanship, insurance-claim fluency, and one company from tarp to final shingle. Registered #26-731.',
};

export default function Roofing() {
  return (
    <>
      <Stub
        h1="Roofing in Medina County, Ohio"
        purpose="Our core trade, running through the same advocacy promise as everything else."
        outline={[
          '≥ 800 words; sub-service cards (replacement, repair, emergency come in Phase 2)',
          'Proof, process, FAQ block',
          'Links UP to insurance-claims (most roof jobs are claims)',
          'Trifecta cross-link: roofing ⇄ water ⇄ reconstruction, one local company',
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
