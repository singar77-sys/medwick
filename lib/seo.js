import { SITE } from './site';

// Every page's metadata goes through here so a page cannot ship without a
// canonical. The audit found zero canonicals across 24 metadata exports while
// next.config.mjs claimed trailing slashes existed "so canonicals never split",
// which is what happens when the rule lives in a comment instead of in code.
//
// metadataBase is set in app/layout.jsx, so a root-relative canonical resolves
// to the production origin. Paths are validated rather than normalised: a
// silent fix would let /roofing and /roofing/ both look correct at the call
// site while splitting signals in production.
export function pageMetadata({ title, description, path, ...rest }) {
  if (!path || !path.startsWith('/') || !path.endsWith('/')) {
    throw new Error(
      `pageMetadata: path must be root-relative with a trailing slash (trailingSlash: true). Got: ${path}`
    );
  }

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: new URL(path, SITE.baseUrl).toString(),
      siteName: SITE.name,
      locale: 'en_US',
      type: 'website',
    },
    ...rest,
  };
}
