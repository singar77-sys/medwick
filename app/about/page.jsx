import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About Medwick: Medina Born, Brunswick Raised | Medwick Construction',
  description:
    'MEDWICK is MEDina plus brunsWICK, a contractor named for the towns it serves. Owner-led, City of Medina Registered #26-731, licensed and insured, and accountable to your family, not a franchise.',
  path: '/about/',
});

export default function About() {
  return (
    <>
      <Hero
        video="/video/roofing-aerial-neighborhood.mp4"
        poster="/video/posters/roofing-aerial-neighborhood.jpg"
        eyebrow="Owner-Led &middot; Medina County"
        title="Medina Born, Brunswick Raised"
        promise="MEDWICK is MEDina plus brunsWICK, a contractor named for the towns it serves. Accountable to your family, not a franchise."
        primary={{ href: '/contact/', label: 'Request an Estimate' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          'Owner story and photo (client-supplied, week 1 ask)',
          'The name equity block: proudly serving the MEDina and brunsWICK areas',
          'Crew, values, communication culture (the thing reviews keep praising)',
          'City of Medina Registered Contractor #26-731 · licensed & insured',
          'Certifications section, added as earned (IICRC, GAF/OC), documented claims only',
        ]}
        links={[
          { href: '/reviews/', label: 'Reviews' },
          { href: '/contact/', label: 'Contact' },
        ]}
      />
    </>
  );
}
