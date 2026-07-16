import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'Can I Choose My Own Contractor for an Insurance Claim in Ohio? | Medwick',
  description:
    'Yes. In Ohio, you choose who repairs your home, not your insurance company. What "preferred vendor" really means, your rights, and how to pick a contractor who answers to you.',
};

export default function Article() {
  return (
    <Stub
      h1="Can I choose my own contractor for an insurance claim?"
      purpose="Answer page → supports /insurance-claims/"
      outline={[
        'Direct 40–60 word answer first (the citable passage)',
        '≥300 words: preferred-vendor programs vs your right to choose, what to check',
        'FAQPage schema',
        '⚠ Insurance content. PENDING OHIO COUNSEL (SOW §11)',
      ]}
      links={[{ href: '/insurance-claims/', label: 'Insurance Claim Help' }]}
    />
  );
}
