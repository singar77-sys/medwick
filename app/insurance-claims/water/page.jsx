import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'Water Damage Insurance Claim Help in Medina, OH | Medwick',
  description:
    'Burst pipe or flooded basement? Medwick documents the water damage, prepares the repair estimate, meets your adjuster, and handles mitigation through rebuild. One Medina County company for the whole claim.',
};

export default function WaterClaims() {
  return (
    <Stub
      h1="Water Damage Insurance Claim Help in Medina County"
      purpose="Nobody in the county owns water-claim advocacy yet. We're taking it."
      outline={[
        '≥ 800 words, mitigation-through-reconstruction claim path, honest price bands',
        'FAQPage schema (will insurance pay for mitigation, mold timelines, documentation)',
        '⚠ PENDING OHIO COUNSEL (SOW §11) before publish',
      ]}
      links={[
        { href: '/insurance-claims/', label: 'Insurance Claims' },
        { href: '/water-mitigation/', label: 'Water Mitigation' },
        { href: '/reconstruction/', label: 'Reconstruction' },
      ]}
    />
  );
}
