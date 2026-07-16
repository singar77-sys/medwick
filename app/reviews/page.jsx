import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'Reviews: What Medina County Homeowners Say | Medwick Construction',
  description:
    'Real reviews from real Medwick customers across Medina County. 5.0 stars on Google. Responsiveness, clear communication, and insurance-claim guidance, in their words.',
};

export default function Reviews() {
  return (
    <Stub
      h1="What Medina County Homeowners Say"
      purpose="The 12 five-star reviews finally show up on the page. No more 'coming soon.'"
      outline={[
        'Real on-page testimonials (GBP 5.0★/9 + Facebook 5.0★/3), full text in server HTML',
        'Links out to the GBP and Facebook review sources',
        'aggregateRating / Review schema added ONLY once these render (no organic stars either way, that is GBP/map-pack territory)',
        'Leave-a-review CTA with the g.page short link',
      ]}
      links={[{ href: '/projects/', label: 'See the work behind the reviews' }]}
    />
  );
}
