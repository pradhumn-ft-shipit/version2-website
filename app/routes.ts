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

  // Custodian transition landing pages (W6 · T2-3) — advisors repapering ONTO a
  // custodian (distinct from the /who-we-serve/custodians ICP page). Hub + one
  // page per custodian named in the ticket.
  route('custodians', 'routes/custodians/index.tsx'),
  route('custodians/schwab', 'routes/custodians/schwab.tsx'),
  route('custodians/fidelity', 'routes/custodians/fidelity.tsx'),
  route('custodians/sei', 'routes/custodians/sei.tsx'),
  route('custodians/goldman-sachs', 'routes/custodians/goldman-sachs.tsx'),
  route('custodians/pershing', 'routes/custodians/pershing.tsx'),

  // Core / marketing
  route('pricing', 'routes/pricing.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('fpa', 'routes/fpa.tsx'),
  route('case-study', 'routes/case-study-index.tsx'),
  route('case-study/advisor-transition', 'routes/case-study.tsx'),
  route('case-study/independent-breakaway-setup', 'routes/case-study-breakaway.tsx'),
  route('case-study/bd-to-ria-400m-transition', 'routes/case-study-bd-to-ria.tsx'),
  route('resources-for-financial-advisors', 'routes/resources.tsx'),
  route('zoom-help-documentation', 'routes/zoom-help.tsx'),

  // Flagship assets (W6 · T2-4): checklist pillar + cost-of-repapering calculator.
  route('transition-checklist', 'routes/transition-checklist.tsx'),
  route('cost-of-repapering', 'routes/cost-of-repapering.tsx'),

  // Blog (ticket 004): build-time loaders read the committed JSON off disk so the
  // full index + article bodies ship in prerendered HTML.
  route('resources/blog', 'routes/blog-index.tsx'),
  // W4: category hubs — declared before /blog/:slug so the static "category"
  // segment is unambiguous. Slugs enumerated for prerender from blogCategories
  // via readCategorySlugs (same zero-touch pattern as blog/news/podcasts/glossary).
  route('blog/category/:slug', 'routes/blog-category.tsx'),
  route('blog/:slug', 'routes/blog-post.tsx'),
  route('resources/blog/:slug', 'routes/redirects/resources-blog-slug.tsx'),

  // News / press releases (ticket 005): build-time loaders read the committed JSON
  // off disk so the full index + release bodies ship in prerendered HTML.
  route('resources/news', 'routes/news-index.tsx'),
  route('resources/news/:slug', 'routes/news-article.tsx'),

  // Podcast (Advisor Ally + guest spots): build-time loaders read the committed
  // JSON off disk so the full index + episode summaries ship in prerendered HTML.
  route('resources/podcasts', 'routes/podcast-index.tsx'),
  route('resources/podcasts/:slug', 'routes/podcast-episode.tsx'),

  // Glossary (W3): DefinedTerm(Set) hub. The index is a static route (picked up
  // by getStaticPaths); the per-term pages are a dynamic route whose slugs are
  // enumerated for prerender from src/lib/glossary via readGlossarySlugs — same
  // zero-touch pattern as blog/news/podcasts.
  route('glossary', 'routes/glossary/index.tsx'),
  route('glossary/:term', 'routes/glossary/term.tsx'),

  // Authors (W5): /authors/<slug> archive pages carrying Person schema (E-E-A-T).
  // Slugs are enumerated for prerender from src/lib/authors via readAuthorSlugs —
  // same zero-touch pattern as blog/news/podcasts/glossary.
  route('authors/:slug', 'routes/authors/author.tsx'),

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
