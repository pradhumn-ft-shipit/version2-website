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
        <link rel="icon" type="image/png" href="/logomark.png" />
        <link rel="apple-touch-icon" href="/logomark.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A3D2E" />

        {/* Fonts: preconnect + non-blocking stylesheet (loads as media=print
            then swaps to all on load, so it doesn't block first paint). */}
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
          media="print"
          onLoad={(e) => {
            (e.currentTarget as HTMLLinkElement).media = 'all';
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap"
          />
        </noscript>

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
