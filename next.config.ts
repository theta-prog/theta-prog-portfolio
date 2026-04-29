import type { NextConfig } from 'next';

// Cloudflare deployment options (choose one when ready):
//
// Option A — Cloudflare Pages (static export, simplest, no SSR):
//   output: 'export'
//   Deploy: `next build` → upload `out/` to Pages. Free tier OK.
//   Limitation: no server-side rendering, no API routes.
//
// Option B — Cloudflare Workers via @cloudflare/next-on-pages (keeps SSR):
//   Keep output: 'standalone', add `@cloudflare/next-on-pages` adapter.
//   Deploy: `npx @cloudflare/next-on-pages` + `wrangler pages deploy .vercel/output/static`
//   Free tier: 100k req/day on Workers, sufficient for a portfolio.
//
// This portfolio has no server-side data fetching or API routes today,
// so Option A (static export) is the recommended first step.

const nextConfig: NextConfig = {
  output: 'standalone',
};
export default nextConfig;
