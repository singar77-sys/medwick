import Stub from '@/app/components/Stub';

export const metadata = {
  title: '24/7 Emergency Water Removal in Medina County, OH',
  description:
    'Flooded basement? Burst pipe? A Medina-based crew reaches you faster than trucks dispatched from Akron or Cleveland. Water out, structure drying, insurance documented. Call (330) 635-3744 now.',
};

export default function EmergencyWaterRemoval() {
  return (
    <Stub
      h1="Flooded Basement? Emergency Water Removal in Medina County"
      purpose="This is where the emergency calls land. Response-time proof lives here."
      outline={[
        'Direct answer first: what to do in the first hour',
        'Response-time proof: stated in-county window + timestamped real job examples',
        'In-county vs regional contrast (Medina crew beats North Royalton / Akron / Cleveland arrival)',
        'Documentation-for-the-claim framing; link to water-claims page',
      ]}
      links={[
        { href: '/water-mitigation/', label: 'Water Mitigation' },
        { href: '/insurance-claims/water/', label: 'Water Claims' },
      ]}
    />
  );
}
