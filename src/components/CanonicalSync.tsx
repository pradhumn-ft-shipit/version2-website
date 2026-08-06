import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_ORIGIN } from '../lib/seo';

/**
 * Keeps <link rel="canonical"> pointed at the URL actually being viewed.
 *
 * index.html ships a hardcoded canonical of "/" — without this, every route on
 * the site tells search engines the homepage is its canonical version, which
 * asks Google to drop those pages from the index. Mounted once inside the
 * router so it re-runs on every navigation.
 *
 * Pages with their own useSeo() call set the same value a moment later (child
 * effects run before this one on mount, and this one re-runs on pathname
 * change), so the two never disagree.
 */
export default function CanonicalSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Strip a trailing slash so /pricing/ and /pricing don't self-canonicalise
    // to two different URLs. The root stays "/".
    const normalized = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    const href = `${SITE_ORIGIN}${normalized === '/' ? '/' : normalized}`;

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }, [pathname]);

  return null;
}
