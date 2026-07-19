import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Emergency Storm Response & Roof Tarping in Medina County, OH | Medwick',
  description:
    'Tree on the house? Roof opened by wind? Medina-based emergency storm response and roof tarping. We secure the property, document everything for your claim, and stay through the repair. Call (330) 635-3744.',
};

export default function StormEmergency() {
  return (
    <>
      <Hero
        video="/video/roofing-aerial-teardown.mp4"
        poster="/video/posters/roofing-aerial-teardown.jpg"
        eyebrow="Emergency Storm Response &middot; 24/7"
        title="Emergency Storm Response in Medina County"
        promise="The first call after the storm — we secure the property, document everything for your claim, and stay through the repair."
        primary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
        secondary={{ href: '/storm-damage/', label: 'Storm Damage' }}
      />
      <Stub
        underHero
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
    </>
  );
}
