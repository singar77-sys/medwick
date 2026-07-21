// Real customer reviews for Medwick Construction LLC, captured VERBATIM from
// the Google Business Profile and the Facebook page on 2026-07-21.
//
// HARD RULES for this file:
// 1. Review text is verbatim. Never edit, tidy, paraphrase, or invent one.
//    These are real customers' words about a real business.
// 2. Only reviews actually retrieved from a live listing belong here.
// 3. Do NOT add aggregateRating / Review JSON-LD for these. Reviews about the
//    business, published on the business's own site, are "self-serving" under
//    Google's structured-data policy: not eligible for star rich results and a
//    manual-action risk. Stars here are GBP / map-pack territory (SEO spec).
// 4. Dates are intentionally not displayed. Google only gives relative ages
//    ("4 months ago"), which silently rot into lies on a static page, and
//    mixing those with Facebook's absolute dates would read inconsistently.
//
// WHY GOOGLE SHOWS 3 REVIEWS BUT THE PROFILE SAYS 10:
// The listing is 5.0 from 10 ratings, but only 3 of those have written text.
// Verified 2026-07-21 by loading the full Reviews tab and re-sorting by Newest:
// both passes returned exactly 3 unique review IDs (Google's DOM repeats them
// while virtualising, which is misleading). The other 7 are star-only ratings
// with nothing to quote. Nothing is missing here.
//
// WHY FACEBOOK REVIEWS CARRY NO STARS:
// Facebook replaced star ratings with recommendations. The page reads
// "Not yet rated (2 Reviews)" and each entry is "<name> recommends Medwick
// Construction LLC." There is NO Facebook star rating to display, and inventing
// one (or folding these into the Google 5.0) would be fabricating a metric.
// Render these as recommendations, never as stars.

export const GOOGLE_SOURCE = {
  network: 'Google',
  rating: '5.0',
  count: 10, // total ratings, including star-only
  capturedOn: '2026-07-21',
  // Canonical listing link, built from the listing's own CID and verified to
  // resolve to Medwick Construction LLC. Stabler than a share.google short link.
  // (Original share link from the GBP: https://share.google/7ek8tB06fzMVcEpR1)
  profileUrl: 'https://maps.google.com/?cid=13085795154999861546',
  // Opens Google's "write a review" dialog straight for this listing. Derived
  // from the listing's ftid; the encoding was validated by round-tripping
  // Google's own documented example Place ID. Could not be confirmed end-to-end
  // because Google gates the page behind sign-in. If the GBP dashboard offers a
  // g.page/r/<id>/review short link, prefer that: it is Google's official one.
  reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJwV9-G6e5MIgRKmFLqVwVmrU',
};

export const FACEBOOK_SOURCE = {
  network: 'Facebook',
  count: 2, // recommendations; the page states "Not yet rated"
  capturedOn: '2026-07-21',
  // TODO: no Facebook page URL is set. Deliberately left null rather than
  // guessed, because a wrong URL sends real customers to the wrong page.
  // Paste the page URL from the address bar of the Facebook profile.
  profileUrl: null,
};

// Backwards-compatible alias: the reviews page and any future consumers read
// the Google figures for the headline rating line.
export const REVIEW_SOURCE = GOOGLE_SOURCE;

// `rating` is a number for Google (stars) and null for Facebook
// (recommendation, no star scale). Never default a null rating to 5.
export const REVIEWS = [
  {
    source: 'Google',
    author: 'Debbie Richmond',
    rating: 5,
    relativeDate: 'a week ago', // as of 2026-07-21
    text: 'Cannot say enough nice things about this company!!! Came to my house to do work, kept in contact with me before they came, was on time, and very informative. They cleaned up before they left. Just a nice bunch of guys. Will definitely be calling them again. Thank you for everything you did!',
  },
  {
    source: 'Facebook',
    author: 'Lisa Hehr',
    rating: null,
    date: '2026-02-22', // Facebook showed "February 22" with no year, meaning the current year
    text: 'I could not be happier with my floor to ceiling bedroom remodel!! New wiring, outlets, lighting, wall removal and textured ceiling! From demo to finishing touches everything was completed in a timely fashion with great attention to detail! I highly recommend the guys at Medwick Construction, you will not be disappointed!',
  },
  {
    source: 'Google',
    author: 'Amanda Copeland',
    rating: 5,
    relativeDate: '4 months ago', // as of 2026-07-21
    text: 'Medwick Construction did an amazing job on our home renovations! They were communicative, fairly priced, and completed superior work. I will definitely be calling them again for our next project. Highly recommend!',
  },
  {
    source: 'Facebook',
    author: 'Kelly Yost',
    rating: null,
    date: '2026-04-11', // Facebook showed "April 11" with no year, meaning the current year
    text: 'Very happy. Crew was very professional/efficient. Jon never pressured me during the estimate. Thanking all by name: Jon, John, Arik, Lou, Matt, Tim, Justin. Would and will recommend them highly.',
  },
  {
    source: 'Google',
    author: 'Chris Copeland',
    rating: 5,
    relativeDate: '4 months ago', // as of 2026-07-21
    text: 'Great communication and high quality work. So pleased with our beautiful metal roof. The entire process was a breeze working with Medwick Construction. Will definitely be doing business with them again!',
  },
];
