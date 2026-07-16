import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'Flooded Basement in Medina: Who Do I Call First? | Medwick',
  description:
    'Call a local water mitigation crew first, before the insurance company, before a plumber for standing water. Why order matters in the first hour, and what a Medina-based response looks like.',
};

export default function Article() {
  return (
    <Stub
      h1="Who do I call for a flooded basement in Medina?"
      purpose="Answer page → supports /water-mitigation/emergency-water-removal/"
      outline={[
        'Direct 40–60 word answer first (the citable passage)',
        '≥300 words: the first-hour sequence, safety, shutoffs, documentation for the claim',
        'FAQPage schema',
      ]}
      links={[
        { href: '/water-mitigation/emergency-water-removal/', label: 'Emergency Water Removal' },
      ]}
    />
  );
}
