import type { Config } from '@react-router/dev/config';

// React Router v7 framework mode, configured as a static-site generator.
//
// `ssr: false` means there is no Node/Workers server runtime — the build emits
// static HTML plus a client bundle (SPA fallback for anything not prerendered).
// `prerender` runs the real route components at build time and serializes their
// rendered <body> into HTML, so crawlers that don't execute JS see full content.
//
// For now `prerender` enumerates only the homepage (walking skeleton, ticket
// 001). Ticket 005 replaces this array with a function that enumerates every
// static route + every blog/news slug from the JSON indexes.
export default {
  ssr: false,
  prerender: ['/'],
} satisfies Config;
