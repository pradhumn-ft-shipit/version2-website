import { type RouteConfig, index, route } from '@react-router/dev/routes';

// Static/marketing surface ported from src/App.tsx (ticket 003) plus the blog
// data-backed routes (ticket 004): /resources/blog, /blog/:slug and the
// /resources/blog/:slug → /blog/:slug redirect, plus the news routes
// (/resources/news, /resources/news/:slug) added in ticket 005.
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
  route('case-study', 'routes/case-study-index.tsx'),
  route('case-study/advisor-transition', 'routes/case-study.tsx'),
  route('case-study/schwab-to-schwab-transition-one-day', 'routes/case-study-breakaway.tsx'),
  route('case-study/bd-to-ria-400m-transition', 'routes/case-study-bd-to-ria.tsx'),
  route('resources-for-financial-advisors', 'routes/resources.tsx'),
  route('zoom-help-documentation', 'routes/zoom-help.tsx'),

  // Blog (ticket 004): build-time loaders read the committed JSON off disk so the
  // full index + article bodies ship in prerendered HTML.
  route('resources/blog', 'routes/blog-index.tsx'),
  route('blog/:slug', 'routes/blog-post.tsx'),
  route('resources/blog/:slug', 'routes/redirects/resources-blog-slug.tsx'),

  // News / press releases (ticket 005): build-time loaders read the committed JSON
  // off disk so the full index + release bodies ship in prerendered HTML.
  route('resources/news', 'routes/news-index.tsx'),
  route('resources/news/:slug', 'routes/news-article.tsx'),

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
