import type { ReactNode } from 'react';
import type { LinksFunction } from 'react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import { LazyMotion, domAnimation } from 'framer-motion';
import stylesheet from '../src/index.css?url';

// The Tailwind stylesheet is emitted as a real <link> (via <Links/>) so it ships
// in the prerendered HTML head, not injected by JS after hydration.
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

/**
 * The <html> shell for every page. This replaces the old index.html template —
 * in framework mode the root route owns the document. Global, page-agnostic head
 * tags live here; per-page title/description/OG/canonical come from each route's
 * `meta` export (see app/routes/home.tsx).
 *
 * ScrollRestoration replaces the old <ScrollToTop/> from src/App.tsx. Per-route
 * canonical syncing (the old <CanonicalSync/>) is now handled by each route's
 * `meta` export, which emits a real <link rel="canonical"> into the static head
 * (ticket 002; see seoMeta in src/lib/seo.ts). The homepage route already does
 * this; 003/004/005 replicate it as they port the remaining routes.
 */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {/* Google tag (gtag.js) — GA4 property G-JK6XW881LK. The dataLayer stub
            runs immediately so gtag() calls queue from first paint, but the
            ~180 KB gtag.js itself is injected only after window load (on idle),
            so on slow mobile it doesn't compete with our CSS/JS for bandwidth or
            the main thread. Queued events replay once it arrives. In-app
            (client-side) navigations are counted by GA4 Enhanced Measurement via
            browser history events (on by default), so we do NOT also fire manual
            page_view events here — doing both would double-count every SPA nav.
            dangerouslySetInnerHTML is required because React does not serialize
            inline script bodies otherwise. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JK6XW881LK');
(function(){function l(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-JK6XW881LK';document.head.appendChild(s);}
function i(){'requestIdleCallback' in window?requestIdleCallback(l,{timeout:2000}):setTimeout(l,1);}
document.readyState==='complete'?i():addEventListener('load',i);})();`,
          }}
        />
        {/* OnlyAEO (AEO analytics) — tracks human visitors and which AI platform
            referred them. ~4 KB, no cookies, no PII. The inline stub queues
            oa(...) calls (e.g. conversions) until o.js loads; o.js is deferred so
            it doesn't block first paint. dangerouslySetInnerHTML is required
            because React does not serialize inline script bodies otherwise. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.oa=window.oa||function(){(oa.q=oa.q||[]).push(arguments)}`,
          }}
        />
        <script
          defer
          src="https://app.onlyaeo.com/o.js"
          data-domain="fasttrackr.ai"
          data-site-token="pst_e7e0901f0351316ccfa40da1"
        />
        <link rel="icon" type="image/png" href="/logomark.png" />
        <link rel="apple-touch-icon" href="/logomark.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A3D2E" />

        {/* Fonts are self-hosted (@font-face in src/index.css). Preload Outfit —
            the headline face, i.e. the LCP text on most pages — so it's fetched
            in parallel with the stylesheet rather than discovered after it.
            crossOrigin is required for font preloads even on the same origin. */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/outfit-latin-var.woff2"
          crossOrigin="anonymous"
        />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Shared page chrome that used to wrap <Routes> in src/App.tsx: the LazyMotion
 * wrapper (framer-motion) and the outer layout div. Individual pages render into
 * <Outlet/>.
 */
export default function Root() {
  return (
    <LazyMotion features={domAnimation} strict={false}>
      <div className="min-h-screen bg-bgPrimary flex flex-col font-sans text-textSecondary selection:bg-brandMint selection:text-brandDeep overflow-x-clip">
        <Outlet />
      </div>
    </LazyMotion>
  );
}
