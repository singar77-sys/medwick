import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Reviews: What Medina County Homeowners Say | Medwick Construction',
  description:
    'Real reviews from real Medwick customers across Medina County. 5.0 stars on Google. Responsiveness, clear communication, and insurance-claim guidance, in their words.',
};

export default function Reviews() {
  return (
    <>
      <Hero
        video="/video/sitework-groundbreaking.mp4"
        poster="/video/posters/sitework-groundbreaking.jpg"
        eyebrow="★ 5.0 on Google"
        title="What Medina County Homeowners Say"
        promise="Real reviews from real Medwick customers across Medina County, responsiveness, clear communication, and claim guidance, in their words."
        primary={{ href: '/contact/', label: 'Request an Estimate' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          'Real on-page testimonials (GBP 5.0★/9 + Facebook 5.0★/3), full text in server HTML',
          'Links out to the GBP and Facebook review sources',
          'aggregateRating / Review schema added ONLY once these render (no organic stars either way, that is GBP/map-pack territory)',
          'Leave-a-review CTA with the g.page short link',
        ]}
        links={[{ href: '/projects/', label: 'See the work behind the reviews' }]}
      />
    </>
  );
}
