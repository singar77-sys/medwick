import { SITE } from '@/lib/site';

// SAFETY GATE: the site stays out of search indexes until the production
// launch flips NEXT_PUBLIC_SITE_ENV=production on the live domain.
// Preview/dev deploys must never leak placeholder pages into Google.
export default function robots() {
  const live = process.env.NEXT_PUBLIC_SITE_ENV === 'production';
  return live
    ? {
        rules: { userAgent: '*', allow: '/' },
        sitemap: `${SITE.baseUrl}/sitemap.xml`,
      }
    : {
        rules: { userAgent: '*', disallow: '/' },
      };
}
