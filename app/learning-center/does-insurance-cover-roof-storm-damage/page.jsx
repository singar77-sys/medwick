import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'Does Homeowners Insurance Cover Roof Storm Damage in Ohio? | Medwick',
  description:
    'Usually, yes. Standard Ohio homeowners policies cover sudden storm damage from wind and hail, minus your deductible. What counts, what doesn’t, and the first steps that protect your claim.',
};

export default function Article() {
  return (
    <Stub
      tier="court"
      h1="Does homeowners insurance cover roof storm damage in Ohio?"
      purpose="Answer page → supports /insurance-claims/roof/"
      outline={[
        'Direct 40–60 word answer first (the citable passage)',
        '≥300 words: covered vs excluded, wind/hail vs wear, deductibles, documentation',
        'FAQPage schema',
        '⚠ Insurance content. PENDING OHIO COUNSEL (SOW §11)',
      ]}
      links={[{ href: '/insurance-claims/roof/', label: 'Roof Insurance Claim Help' }]}
    />
  );
}
