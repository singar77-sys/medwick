import { notFound } from 'next/navigation';
import Stub from '@/app/components/Stub';
import { pageMetadata } from '@/lib/seo';

// The SOW "one reusable project / case-study template." Projects are data
// entries: add to PROJECTS as jobs are documented and the page exists.
// Title pattern per spec: `{Project Type} in {City}, OH: Before & After | Medwick Projects`

// Empty until the first job is documented. The template below is the shape a
// project takes; add an entry and the route builds itself.
//
// It previously held a 'sample-project' placeholder whose summary was piped
// straight into the meta description, so a statically built, internally linked
// page shipped a description beginning "PLACEHOLDER". An empty list means
// generateStaticParams yields nothing and the route produces no pages at all,
// which is the honest state: there is no project to show yet.
//
//   { slug, type, city, summary }  e.g.
//   { slug: 'hail-reroof-brunswick', type: 'Roof Replacement', city: 'Brunswick',
//     summary: 'One-line outcome, written for a homeowner, used as the meta description.' }
const PROJECTS = [];

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.type} in ${p.city}, OH: Before & After | Medwick Projects`,
    description: p.summary,
    path: `/projects/${p.slug}/`,
  });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <Stub
      tier="court"
      h1={`${p.type} in ${p.city}, Ohio: Before & After`}
      purpose={p.summary}
      outline={[
        'Before / after photo pairs (drone where available)',
        'Scope of work · materials · timeline',
        'The insurance-claim path this job took (if applicable)',
        'Homeowner testimonial + link to the matching review',
        'Links: the service hub this job belongs to + the city page',
      ]}
      links={[{ href: '/projects/', label: 'All Projects' }]}
    />
  );
}
