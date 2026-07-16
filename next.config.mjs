/** @type {import('next').NextConfig} */
const nextConfig = {
  // The SEO spec (SITE-STRUCTURE.md §1) defines every URL with a trailing
  // slash; keep Next consistent with it so canonicals never split.
  trailingSlash: true,
  // A stray lockfile exists in the user profile dir; pin the workspace root
  // so Next traces from this app, not C:\Users\Mark.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
