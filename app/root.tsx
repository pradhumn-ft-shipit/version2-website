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
        {/* Google tag (gtag.js) — GA4 property G-JK6XW881LK. Placed high in the
            head so it ships in every prerendered page. In-app (client-side)
            navigations are counted by GA4 Enhanced Measurement via browser
            history events (on by default), so we do NOT also fire manual
            page_view events here — doing both would double-count every SPA nav.
            dangerouslySetInnerHTML is required because React does not serialize
            inline script bodies otherwise. */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JK6XW881LK" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JK6XW881LK');`,
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

        {/* Fonts: preconnect + preload, then a plain stylesheet. The old
            media="print" + onLoad swap trick does NOT survive prerendering —
            React drops the onLoad handler when serializing to static HTML, so
            the stylesheet stays media="print" and the fonts never apply. A
            normal <link rel="stylesheet"> with display=swap in the URL is
            non-blocking at first paint (fallback text shows, then swaps) and
            works identically with or without JS. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/logo.png" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap"
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
