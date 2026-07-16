import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'Emergency Storm Response & Roof Tarping in Medina County, OH | Medwick',
  description:
    'Tree on the house? Roof opened by wind? Medina-based emergency storm response and roof tarping. We secure the property, document everything for your claim, and stay through the repair. Call (330) 635-3744.',
};

export default function StormEmergency() {
  return (
    <Stub
      tier="hekhal"
      h1="Emergency Storm Response in Medina County"
      purpose="The first call after the storm. Secure the place, document everything, then walk the claim."
      outline={[
        'Emergency promise stated only as operationally true (§ response-time honesty rule)',
        'Tarping / board-up / make-safe services',
        'Documentation-first framing: every photo taken serves the insurance claim',
        'What happens after the emergency visit (estimate expectations)',
      ]}
      links={[
        { href: '/storm-damage/', label: 'Storm Damage' },
        { href: '/insurance-claims/', label: 'Insurance Claims' },
      ]}
    />
  );
}
