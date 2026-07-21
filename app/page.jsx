import Hero from '@/app/components/Hero';
import { SITE } from '@/lib/site';

// Homepage, rebuilt top-down (2026-07-17). Hero first, using the crew-walkout
// clip. Remaining sections build below the hero next.
// Copy is DRAFT; insurance language pending Ohio counsel (SOW §11).

export const metadata = {
  title: `Medina County's Insurance Restoration Advocate | Medwick`,
  description:
    'Storm damage, roof leak, flooded basement? Medwick walks Medina County homeowners through the insurance claim, then does the repair work ourselves. Licensed, insured, Registered #26-731. Call (330) 635-3744.',
};

export default function Home() {
  return (
    <>
      <Hero
        video="/video/roofing-dawn-silhouette.mp4"
        poster="/video/posters/roofing-dawn-silhouette.jpg"
        eyebrow="Medina County&rsquo;s Insurance Restoration Advocate"
        title={
          <>
            From the first insurance call, <br />to the final repair
          </>
        }
        promise="It&rsquo;s a stressful call to make. We walk the whole thing with you, and we work for you, not the insurance company."
        primary={{ href: '/insurance-claims/', label: 'Get Claim Help' }}
        secondary={{ href: SITE.phoneHref, label: `Emergency? ${SITE.phone}` }}
      />

      <section className="home-next">
        <p>
          The rest of the homepage builds from here, the three trades, the insurance-advocacy
          positioning, where we work, proof, and the closing call.
        </p>
      </section>
    </>
  );
}
