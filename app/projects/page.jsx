import Hero from '@/app/components/Hero';
import Stub from '@/app/components/Stub';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Project Gallery: Real Medina County Work | Medwick Construction',
  description:
    'Before-and-after photos and case studies from real Medwick projects across Medina County: roofs, water damage recoveries, and rebuilds. Every job documented, nothing staged, no stock photos.',
  path: '/projects/',
});

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
          'No projects documented yet: the [slug] route builds nothing until the first entry lands',
        ]}
        // The "sample" link used to point at /projects/sample-project/. That
        // placeholder is gone, so the link would 404; restore a real one with
        // the first documented job.
        links={[
          { href: '/roofing/', label: 'Roofing' },
          { href: '/contact/', label: 'Request an Estimate' },
        ]}
      />
    </>
  );
}
