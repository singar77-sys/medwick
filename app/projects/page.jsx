import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Project Gallery: Real Medina County Work | Medwick Construction',
  description:
    'Before-and-after photos and case studies from real Medwick projects across Medina County: roofs, water damage recoveries, and rebuilds. Every job documented, nothing staged, no stock photos.',
};

export default function Projects() {
  return (
    <>
      <Hero
        video="/video/medwick-storm-response.mp4"
        poster="/video/posters/medwick-storm-response.jpg"
        eyebrow="Our Work &middot; Medina County"
        title="Real Projects, Documented"
        promise="Every completed job, documented, real Medwick work across Medina County. Nothing staged, no stock photos."
        primary={{ href: '/contact/', label: 'Request an Estimate' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />
      <Stub
        underHero
        outline={[
          'Grid of per-project case studies (real photos only, self-hosted, descriptive filenames + alt text)',
          'Each project card: type, city, one-line outcome',
          'Case-study template at /projects/{slug}/, the SOW reusable template',
        ]}
        links={[{ href: '/projects/sample-project/', label: 'Case-study template (sample)' }]}
      />
    </>
  );
}
