import { NAV, SITE } from '@/lib/site';
import { CITIES } from '@/lib/cities';

// Derived, not hand-maintained. app/robots.js advertises this file the moment
// NEXT_PUBLIC_SITE_ENV flips to production, so a hardcoded list here would rot
// into a sitemap full of 404s the first time a route moves. Everything below
// comes from the same sources the nav and the city routes are built from.

// Routes that exist as pages but are not nav destinations.
const STANDALONE = ['/', '/about/', '/contact/', '/projects/', '/reviews/', '/learning-center/'];

const LEARNING_ARTICLES = [
  '/learning-center/does-insurance-cover-roof-storm-damage/',
  '/learning-center/can-i-choose-my-own-contractor/',
  '/learning-center/flooded-basement-who-to-call/',
];

// Money pages and hubs deserve a higher priority than supporting reading.
function priorityFor(path) {
  if (path === '/') return 1;
  if (path.startsWith('/learning-center/') && path !== '/learning-center/') return 0.5;
  if (path.startsWith('/service-areas/') && path !== '/service-areas/') return 0.7;
  if (path.split('/').filter(Boolean).length === 1) return 0.9;
  return 0.8;
}

export default function sitemap() {
  const fromNav = NAV.flatMap((group) => [
    ...(group.href ? [group.href] : []),
    ...(group.items ? group.items.map((i) => i.href) : []),
  ]);

  const cityPaths = CITIES.map((c) => `/service-areas/${c.slug}/`);

  const paths = [...STANDALONE, ...fromNav, ...cityPaths, ...LEARNING_ARTICLES]
    .filter(Boolean)
    // trailingSlash: true in next.config.mjs, so normalise before deduping or
    // "/roofing" and "/roofing/" would both ship and split the canonical.
    .map((p) => (p.endsWith('/') ? p : `${p}/`));

  const lastModified = new Date();

  return [...new Set(paths)].sort().map((path) => ({
    url: new URL(path, SITE.baseUrl).toString(),
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: priorityFor(path),
  }));
}
