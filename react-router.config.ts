import type { Config } from '@react-router/dev/config';
import {
  buildPrerenderPaths,
  readBlogSlugs,
  readNewsSlugs,
} from './app/lib/prerenderPaths';

// React Router v7 framework mode, configured as a static-site generator.
//
// `ssr: false` means there is no Node/Workers server runtime — the build emits
// static HTML plus a client bundle (SPA fallback for anything not prerendered).
// The `prerender` function runs the real route components at build time and
// serializes their rendered <body> into HTML, so crawlers that don't execute JS
// see full content.
//
// ZERO-TOUCH (ticket 006): `prerender` is a FUNCTION, not a hand-maintained array.
// It enumerates, every build, the full site surface:
//   - `getStaticPaths()` — every fully-static route in app/routes.ts (marketing,
//     ICP, solutions, legal, resources/blog + resources/news indexes, and every
//     redirect). Dynamic (`:slug`) and splat (`*`) routes are excluded. This is
//     the single canonical source for static routes — it cannot drift from the
//     route tree (ticket 003), so there is no per-deploy list to edit.
//   - every `/blog/<slug>` from `public/blog-data/index.json`.
//   - every `/resources/news/<slug>` from `public/news-data/index.json`.
// `npm run blog:build` regenerates those indexes first, so a newly-added blog or
// news post is prerendered automatically with no config change, ever.
export default {
  ssr: false,
  async prerender({ getStaticPaths }) {
    return buildPrerenderPaths({
      staticPaths: getStaticPaths(),
      blogSlugs: readBlogSlugs(),
      newsSlugs: readNewsSlugs(),
    });
  },
} satisfies Config;
