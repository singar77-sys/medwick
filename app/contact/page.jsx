import Hero from '@/app/components/Hero';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact Medwick Construction | Medina County, OH',
  description:
    'Reach Medwick Construction: (330) 635-3744, 7130 Norwalk Rd, Medina, OH 44256. Storm damage, insurance claim help, roofing, water, and rebuilds across Medina County. Tell us what happened.',
};

// Contact hero uses the crew-walkout clip (Mark's pick) — the crew heading out
// reads as "we show up." Call is the primary CTA. Form/map/NAP build below next.
export default function Contact() {
  return (
    <>
      <Hero
        video="/video/crew-walkout-silhouette.mp4"
        poster="/video/posters/crew-walkout-silhouette.jpg"
        eyebrow="Medina County, Ohio"
        title="Talk to Medwick"
        promise="One number, one crew. Tell us what happened and we&rsquo;ll take it from there — from the first call to the final repair."
        primary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
        secondary={{ href: '/storm-damage/emergency/', label: 'Emergency? Start Here' }}
      />

      <section className="stub">
        <div className="stub-banner">
          This page is scaffolding — the hero is in. The form, map, and NAP block build next.
        </div>
        <div className="outline">
          <h2>Planned content</h2>
          <ul>
            <li>
              Form with service selector (Roofing / Water Emergency / Remodeling), required phone,
              message, photo upload
            </li>
            <li>
              Lead-capture chatbot flow (SOW deliverable) delivers leads by text + email; platform
              choice comes in the build phase
            </li>
            <li>Map, hours, byte-identical NAP</li>
            <li>Water-emergency path promises a response time only if operationally reliable</li>
            <li>ContactPage + LocalBusiness schema</li>
            <li>
              Address: {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{' '}
              {SITE.address.postalCode}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
