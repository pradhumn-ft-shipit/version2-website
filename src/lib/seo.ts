import { useEffect } from 'react';
import type { MetaDescriptor } from 'react-router';

export const SITE_ORIGIN = 'https://www.fasttrackr.ai';

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_ORIGIN}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

/**
 * Trim to a whole word at or under `limit` characters.
 *
 * Mirrors `clamp()` in scripts/prerender.mjs — the prerendered <head> and the
 * one useSeo() applies after hydration must agree, or a crawler that renders JS
 * sees a different description than one that doesn't. Change both together.
 */
export function clampText(text: string, limit: number): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= limit) return t;
  const cut = t.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\s]+$/, '') + '…';
}

export type SeoConfig = {
  /** <title>. Keep under 60 characters. */
  title: string;
  /** <meta name="description">. Aim for 150–155 characters. */
  description: string;
  /**
   * Optional shorter hook for og:description / twitter:description when the
   * social preview wants a punchier line than the search-result description.
   * Falls back to `description` when omitted.
   */
  ogDescription?: string;
  /**
   * URL of this page on our own domain — never a syndicated copy. May be a
   * site-relative path ("/pricing") or absolute; seoMeta absolutizes it via
   * absoluteUrl.
   */
  canonical: string;
  /** og:type — "website" for index pages, "article" for articles. */
  ogType?: string;
  /** Absolute URL. */
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  /** ISO timestamp — emitted as article:published_time when ogType is "article". */
  publishedTime?: string;
  /** Rendered into a <script type="application/ld+json"> tag. */
  jsonLd?: Record<string, unknown>;
};

/**
 * Build framework-mode route `meta` output from a SeoConfig.
 *
 * ── THE per-page SEO pattern for SSG/framework mode ──
 * Tickets 003/004/005 copy this mechanically. In a route module:
 *
 *   import { seoMeta, type SeoConfig } from '../../src/lib/seo';
 *   export function meta({ data }): MetaDescriptor[] {
 *     const config: SeoConfig = { title, description, canonical: '/pricing', ... };
 *     return seoMeta(config);   // static strings OR values from loader `data`
 *   }
 *
 * The framework serializes this into the static HTML <head> at build time and
 * re-renders it identically on hydration, so crawlers that don't run JS see the
 * real title/description/canonical/OG/Twitter/JSON-LD — and there's no head
 * hydration mismatch. This replaces the runtime useSeo() hook (and the old
 * <CanonicalSync/>: canonical is emitted here as a real <link> tag).
 *
 * absoluteUrl and clampText stay the single source for URL absolutization and
 * description trimming: seoMeta absolutizes canonical/og:url/og:image but does
 * NOT trim — callers clamp with clampText where a page needs it (blog/news
 * excerpts) so this helper never silently truncates a hand-written description.
 */
export function seoMeta(config: SeoConfig): MetaDescriptor[] {
  const canonical = absoluteUrl(config.canonical);
  const socialDescription = config.ogDescription ?? config.description;

  const descriptors: MetaDescriptor[] = [
    { title: config.title },
    { name: 'description', content: config.description },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { property: 'og:type', content: config.ogType ?? 'website' },
    { property: 'og:url', content: canonical },
    { property: 'og:site_name', content: 'FastTrackr AI' },
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: socialDescription },
    { name: 'twitter:card', content: config.twitterCard ?? 'summary_large_image' },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: socialDescription },
  ];

  if (config.ogImage) {
    const image = absoluteUrl(config.ogImage);
    descriptors.push({ property: 'og:image', content: image });
    descriptors.push({ name: 'twitter:image', content: image });
    if (config.ogImageAlt) {
      descriptors.push({ property: 'og:image:alt', content: config.ogImageAlt });
      descriptors.push({ name: 'twitter:image:alt', content: config.ogImageAlt });
    }
  }

  if (config.publishedTime) {
    descriptors.push({ property: 'article:published_time', content: config.publishedTime });
  }

  if (config.jsonLd) {
    descriptors.push({ 'script:ld+json': config.jsonLd });
  }

  return descriptors;
}

type Restore = () => void;

function setMetaTag(attr: 'name' | 'property', key: string, content: string): Restore {
  const selector = `meta[${attr}="${key}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  if (existing) {
    const previous = existing.getAttribute('content');
    existing.setAttribute('content', content);
    return () => {
      if (previous === null) existing.removeAttribute('content');
      else existing.setAttribute('content', previous);
    };
  }
  const el = document.createElement('meta');
  el.setAttribute(attr, key);
  el.setAttribute('content', content);
  document.head.appendChild(el);
  return () => el.remove();
}

function setCanonical(href: string): Restore {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (existing) {
    const previous = existing.getAttribute('href');
    existing.setAttribute('href', href);
    return () => {
      if (previous === null) existing.removeAttribute('href');
      else existing.setAttribute('href', previous);
    };
  }
  const el = document.createElement('link');
  el.setAttribute('rel', 'canonical');
  el.setAttribute('href', href);
  document.head.appendChild(el);
  return () => el.remove();
}

function setJsonLd(data: Record<string, unknown>): Restore {
  const el = document.createElement('script');
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
  return () => el.remove();
}

/**
 * Applies per-page <head> metadata (title, description, canonical, Open Graph,
 * Twitter card, JSON-LD) and restores whatever was there before on unmount, so
 * a client-side route change doesn't leak one page's tags onto the next.
 */
export function useSeo(config: SeoConfig) {
  const serialized = JSON.stringify(config);

  useEffect(() => {
    const c = JSON.parse(serialized) as SeoConfig;
    const restores: Restore[] = [];

    const previousTitle = document.title;
    document.title = c.title;
    restores.push(() => {
      document.title = previousTitle;
    });

    restores.push(setCanonical(c.canonical));
    restores.push(setMetaTag('name', 'description', c.description));

    restores.push(setMetaTag('property', 'og:title', c.title));
    restores.push(setMetaTag('property', 'og:description', c.description));
    restores.push(setMetaTag('property', 'og:type', c.ogType ?? 'website'));
    restores.push(setMetaTag('property', 'og:url', c.canonical));
    if (c.ogImage) {
      restores.push(setMetaTag('property', 'og:image', c.ogImage));
      if (c.ogImageAlt) restores.push(setMetaTag('property', 'og:image:alt', c.ogImageAlt));
    }

    if (c.publishedTime) {
      restores.push(setMetaTag('property', 'article:published_time', c.publishedTime));
    }

    restores.push(setMetaTag('name', 'twitter:card', c.twitterCard ?? 'summary_large_image'));
    restores.push(setMetaTag('name', 'twitter:title', c.title));
    restores.push(setMetaTag('name', 'twitter:description', c.description));
    if (c.ogImage) {
      restores.push(setMetaTag('name', 'twitter:image', c.ogImage));
      if (c.ogImageAlt) restores.push(setMetaTag('name', 'twitter:image:alt', c.ogImageAlt));
    }

    if (c.jsonLd) restores.push(setJsonLd(c.jsonLd));

    return () => {
      // Restore in reverse so created-vs-updated tags unwind cleanly.
      for (let i = restores.length - 1; i >= 0; i--) restores[i]();
    };
  }, [serialized]);
}
