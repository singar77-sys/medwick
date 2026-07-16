import { notFound } from 'next/navigation';
import Stub from '@/app/components/Stub';

// The SOW "one reusable project / case-study template." Projects are data
// entries: add to PROJECTS as jobs are documented and the page exists.
// Title pattern per spec: `{Project Type} in {City}, OH: Before & After | Medwick Projects`

const PROJECTS = [
  {
    slug: 'sample-project',
    type: 'Roof Replacement',
    city: 'Medina',
    summary:
      'PLACEHOLDER. Gets swapped for the first documented job. Shows the template shape: before/after, scope, materials, timeline, town, testimonial.',
  },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.type} in ${p.city}, OH: Before & After | Medwick Projects`,
    description: p.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <Stub
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
