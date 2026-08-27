import { type RouteConfig, index, route } from '@react-router/dev/routes';

// Full static/marketing surface ported from src/App.tsx (ticket 003). Data-backed
// routes — /resources/blog, /blog/:slug, /resources/news, /resources/news/:slug and
// the /resources/blog/:slug → /blog/:slug redirect — are owned by tickets 004/005 and
// are intentionally absent here. This ticket ports every NON-dynamic route plus every
// redirect, so the whole static surface renders full-body in prerendered HTML.
export default [
  index('routes/home.tsx'),

  // Who We Serve (ICP)
  route('who-we-serve/transition-consultants', 'routes/icp/transition-consultants.tsx'),
  route('who-we-serve/breakaway-advisors', 'routes/icp/breakaway-advisors.tsx'),
  route('who-we-serve/acquisitive-rias', 'routes/icp/acquisitive-rias.tsx'),
  route('who-we-serve/independent-broker-dealers', 'routes/icp/independent-broker-dealers.tsx'),
  route('who-we-serve/custodians', 'routes/icp/custodians.tsx'),

  // Solutions
  route('solutions/advisor-transitions', 'routes/solutions/advisor-transitions.tsx'),
  route('solutions/client-onboarding', 'routes/solutions/client-onboarding.tsx'),
  route('solutions/meeting-assistant', 'routes/solutions/meeting-assistant.tsx'),
  route('solutions/document-intelligence', 'routes/solutions/document-intelligence.tsx'),

  // Core / marketing
  route('pricing', 'routes/pricing.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('fpa', 'routes/fpa.tsx'),
  route('case-study/advisor-transition', 'routes/case-study.tsx'),
  route('resources-for-financial-advisors', 'routes/resources.tsx'),
  route('zoom-help-documentation', 'routes/zoom-help.tsx'),

  // Legal
  route('privacy-policy', 'routes/legal/privacy-policy.tsx'),
  route('tos', 'routes/legal/tos.tsx'),
  route('privacy-policy-transitions', 'routes/legal/privacy-policy-transitions.tsx'),
  route('tos-transitions', 'routes/legal/tos-transitions.tsx'),
  route('client-privacy-notice', 'routes/legal/client-privacy-notice.tsx'),
  route('client-data-consent-acknowledgment', 'routes/legal/client-data-consent-acknowledgment.tsx'),

  // Redirects (preserve exact targets from src/App.tsx)
  route('for-transition-consultants', 'routes/redirects/for-transition-consultants.tsx'),
  route('for-breakaway-advisors', 'routes/redirects/for-breakaway-advisors.tsx'),
  route('for-acquisitive-rias', 'routes/redirects/for-acquisitive-rias.tsx'),
  route('for-ibds', 'routes/redirects/for-ibds.tsx'),
  route('for-custodians', 'routes/redirects/for-custodians.tsx'),
  route('blog', 'routes/redirects/blog.tsx'),
  route('resources/podcast', 'routes/redirects/resources-podcast.tsx'),
  route('about', 'routes/redirects/about.tsx'),
  route('aon', 'routes/redirects/aon.tsx'),
  route('onepagecrm', 'routes/redirects/onepagecrm.tsx'),

  // 404 catch-all
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
