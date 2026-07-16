import Stub from '@/app/components/Stub';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact Medwick Construction | Medina County, OH',
  description:
    'Reach Medwick Construction: (330) 635-3744, 7130 Norwalk Rd, Medina, OH 44256. Storm damage, insurance claim help, roofing, water, and rebuilds across Medina County. Tell us what happened.',
};

export default function Contact() {
  return (
    <Stub
      h1="Talk to Medwick"
      purpose="One phone number, everywhere: (330) 635-3744."
      outline={[
        'Form with service selector (Roofing / Water Emergency / Remodeling), required phone, message, photo upload',
        'Lead-capture chatbot flow (SOW deliverable) delivers leads by text + email, platform choice comes in the build phase',
        'Map, hours, byte-identical NAP',
        'Water-emergency path promises a response time only if operationally reliable',
        'ContactPage + LocalBusiness schema',
        `Address: ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`,
      ]}
      links={[{ href: '/storm-damage/emergency/', label: 'Emergency? Start here' }]}
    />
  );
}
