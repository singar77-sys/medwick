import Stub from '@/app/components/Stub';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Can I Choose My Own Contractor for an Insurance Claim in Ohio? | Medwick',
  description:
    'Yes. In Ohio, you choose who repairs your home, not your insurance company. What "preferred vendor" really means, your rights, and how to pick a contractor who answers to you.',
  path: '/learning-center/can-i-choose-my-own-contractor/',
});

export default function Article() {
  return (
    <Stub
      tier="court"
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
