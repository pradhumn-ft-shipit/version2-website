import type { Config } from '@react-router/dev/config';

// React Router v7 framework mode, configured as a static-site generator.
//
// `ssr: false` means there is no Node/Workers server runtime — the build emits
// static HTML plus a client bundle (SPA fallback for anything not prerendered).
// `prerender` runs the real route components at build time and serializes their
// rendered <body> into HTML, so crawlers that don't execute JS see full content.
//
// This list enumerates the full STATIC surface (ticket 003): every non-dynamic
// marketing/ICP/solutions/legal route plus every redirect. Redirect paths are
// prerendered too, so a non-JS crawler hitting e.g. /for-custodians follows a
// real redirect instead of the old SPA-only <Navigate>. The catch-all (`*`) is
// intentionally absent — it can't be enumerated; unknown paths use the SPA
// fallback. Blog/news slug routes are NOT here yet — ticket 005 replaces this
// array with a function that also enumerates every blog/news slug from the JSON
// indexes (and the data-backed /resources/blog + /resources/news index routes).
export default {
  ssr: false,
  prerender: [
    // Home
    '/',
    // Who We Serve (ICP)
    '/who-we-serve/transition-consultants',
    '/who-we-serve/breakaway-advisors',
    '/who-we-serve/acquisitive-rias',
    '/who-we-serve/independent-broker-dealers',
    '/who-we-serve/custodians',
    // Solutions
    '/solutions/advisor-transitions',
    '/solutions/client-onboarding',
    '/solutions/meeting-assistant',
    '/solutions/document-intelligence',
    // Core / marketing
    '/pricing',
    '/contact',
    '/fpa',
    '/case-study/advisor-transition',
    '/resources-for-financial-advisors',
    '/zoom-help-documentation',
    // Legal
    '/privacy-policy',
    '/tos',
    '/privacy-policy-transitions',
    '/tos-transitions',
    '/client-privacy-notice',
    '/client-data-consent-acknowledgment',
    // Redirects (preserve exact targets from src/App.tsx)
    '/for-transition-consultants',
    '/for-breakaway-advisors',
    '/for-acquisitive-rias',
    '/for-ibds',
    '/for-custodians',
    '/blog',
    '/resources/podcast',
    '/about',
    '/aon',
    '/onepagecrm',
  ],
} satisfies Config;
