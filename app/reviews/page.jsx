import Link from 'next/link';
import Hero from '@/app/components/Hero';
import { SITE } from '@/lib/site';
import { REVIEWS, GOOGLE_SOURCE } from '@/lib/reviews';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Reviews: What Medina County Homeowners Say | Medwick Construction',
  description:
    'Real reviews from real Medwick customers across Medina County. 5.0 stars on Google, plus recommendations on Facebook. Responsiveness, clear communication, and insurance-claim guidance, in their words.',
  path: '/reviews/',
});

// Review text is verbatim from the Google Business Profile and the Facebook
// page (see lib/reviews.js). No aggregateRating/Review JSON-LD here on purpose:
// self-serving review markup is not eligible for rich results under Google's
// policy. Facebook entries are recommendations and carry NO star rating, so
// they never render stars.
export default function Reviews() {
  return (
    <>
      <Hero
        video="/video/remodel-wall-smoothing.mp4"
        poster="/video/posters/remodel-wall-smoothing.jpg"
        eyebrow="★ 5.0 on Google"
        title="What Medina County Homeowners Say"
        promise="Real reviews from real Medwick customers across Medina County, responsiveness, clear communication, and claim guidance, in their words."
        primary={{ href: '/contact/', label: 'Request an Estimate' }}
        secondary={{ href: SITE.phoneHref, label: `Call ${SITE.phone}` }}
      />

      <section className="reviews">
        <ul className="review-list">
          {REVIEWS.map((r) => (
            <li className="review" key={`${r.source}-${r.author}`}>
              {r.rating ? (
                // aria-label is prohibited on <p> (role=paragraph), so it was
                // silently dropped and the rating never reached a screen reader.
                // Give the glyphs to sighted users and the text to everyone else.
                <p className="review-stars">
                  <span aria-hidden="true">{'★'.repeat(r.rating)}</span>
                  <span className="sr-only">{r.rating} out of 5 stars</span>
                </p>
              ) : (
                // Facebook has no star scale: show what it actually says.
                <p className="review-recommends">Recommends Medwick Construction</p>
              )}
              <blockquote className="review-text">{r.text}</blockquote>
              <footer className="review-meta">
                <span className="review-author">{r.author}</span>
                <span className="review-source">via {r.source}</span>
              </footer>
            </li>
          ))}
          {/* Sixth tile is the ask, not a review. There are only five real
              reviews; this fills the grid without inventing a sixth. */}
          <li className="review review-cta">
            <h2>Worked with us?</h2>
            <p>
              Reviews are how neighbors find a contractor they can trust. If we did right by your
              home, a few words go a long way.
            </p>
            <a
              className="btn"
              href={GOOGLE_SOURCE.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
            </a>
          </li>
        </ul>

        <p className="reviews-more">
          <Link href="/projects/">See the work behind the reviews</Link>
        </p>
      </section>
    </>
  );
}
