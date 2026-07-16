import { SITE } from '@/lib/site';

// SAFETY GATE: the site stays out of search indexes until the production
// launch flips NEXT_PUBLIC_SITE_ENV=production on the live domain.
// Preview/dev deploys must never leak placeholder pages into Google.
export default function robots() {
  const live = process.env.NEXT_PUBLIC_SITE_ENV === 'production';
  return live
    ? {
        // /proposal carries its own noindex metadata (app/proposal/layout.jsx);
        // disallowed here too so crawlers never even fetch it.
        rules: { userAgent: '*', allow: '/', disallow: '/proposal/' },
        sitemap: `${SITE.baseUrl}/sitemap.xml`,
      }
    : {
        rules: { userAgent: '*', disallow: '/' },
      };
}
