import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'Roof Insurance Claim Help in Medina, OH | Medwick',
  description:
    'Hail or wind damage to your roof? Medwick documents the damage, prepares a complete repair estimate, meets the adjuster, and completes the roof. One Medina County company from claim to final shingle.',
};

export default function RoofClaims() {
  return (
    <Stub
      h1="Roof Insurance Claim Help in Medina County"
      purpose="Most roof jobs are claims. This page owns that path."
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
  );
}
