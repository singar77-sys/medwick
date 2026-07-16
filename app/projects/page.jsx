import Stub from '@/app/components/Stub';

export const metadata = {
  title: 'Project Gallery: Real Medina County Work | Medwick Construction',
  description:
    'Before-and-after photos and case studies from real Medwick projects across Medina County: roofs, water damage recoveries, and rebuilds. Every job documented, nothing staged, no stock photos.',
};

export default function Projects() {
  return (
    <Stub
      tier="court"
      h1="Real Projects, Documented"
      purpose="Every completed job feeds the site, a GBP post, and social, all off one shoot."
      outline={[
        'Grid of per-project case studies (real photos only, self-hosted, descriptive filenames + alt text)',
        'Each project card: type, city, one-line outcome',
        'Case-study template at /projects/{slug}/, the SOW reusable template',
      ]}
      links={[{ href: '/projects/sample-project/', label: 'Case-study template (sample)' }]}
    />
  );
}
