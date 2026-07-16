import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'About Medwick: Medina Born, Brunswick Raised | Medwick Construction',
  description:
    'MEDWICK is MEDina plus brunsWICK, a contractor named for the towns it serves. Owner-led, City of Medina Registered #26-731, licensed and insured, and accountable to your family, not a franchise.',
};

export default function About() {
  return (
    <Stub
      tier="court"
      h1="Medina Born, Brunswick Raised"
      purpose="The name is the story: MEDina + brunsWICK."
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
  );
}
