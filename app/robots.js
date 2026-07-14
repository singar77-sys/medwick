// Confidential client planning + pricing portal — keep the whole origin out of
// search indexes and AI crawlers. This blocks crawling; it does NOT restrict
// human access. For true privacy, also enable Vercel Deployment Protection.
export default function robots() {
  return {
    rules: [{ userAgent: '*', disallow: '/' }],
  };
}
