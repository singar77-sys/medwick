import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Storm, Roof & Water Damage Questions, Answered | Medwick, Medina OH',
  description:
    'Plain answers to the questions Medina County homeowners actually ask after storm, roof, and water damage: insurance coverage, first steps, who to call, and what it costs. One question per page.',
};

export default function LearningCenter() {
  return (
    <>
      <Hero
        video="/video/reconstruction-steel-framing.mp4"
        poster="/video/posters/reconstruction-steel-framing.jpg"
        eyebrow="Learning Center"
        title="Medina County Storm, Roof &amp; Water Damage: Answers"
        promise="Plain answers to the questions homeowners actually ask after storm, roof, and water damage — one question per page."
        primary={{ href: '/insurance-claims/', label: 'Get Claim Help' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          'Q&A index grouped by problem (storm / insurance / water / roof)',
          'Each page: question-phrased H1, 40–60 word direct answer first (the citable passage), ≥300 words support, FAQPage schema, link down to the money page',
          'Launch set: 3 articles below; pipeline continues via the Content Calendar',
        ]}
        links={[
          {
            href: '/learning-center/does-insurance-cover-roof-storm-damage/',
            label: 'Does insurance cover roof storm damage?',
          },
          {
            href: '/learning-center/flooded-basement-who-to-call/',
            label: 'Flooded basement: who to call?',
          },
          {
            href: '/learning-center/can-i-choose-my-own-contractor/',
            label: 'Can I choose my own contractor?',
          },
        ]}
      />
    </>
  );
}
