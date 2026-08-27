#!/usr/bin/env node
// Post-build step: writes a real static HTML file per content route, with the
// page's own <head> baked in (title, description, canonical, OG, Twitter,
// JSON-LD). The <body> is still the empty SPA shell that React mounts into —
// the point is metadata, not content.
//
// Why: this is a client-rendered SPA. Googlebot executes JS and would
// eventually see the tags useSeo() injects, but Bing, LinkedIn, X and Slack
// unfurlers largely do not. A press release competing with 80+ syndicated
// copies for canonical cannot rely on "eventually".
//
// Output: dist/<route>/index.html — e.g.
//   dist/resources/news/<slug>/index.html
//   dist/blog/<slug>/index.html
// Static hosts serve an existing file in preference to the SPA catch-all
// rewrite, so these win for crawlers while the app keeps working as an SPA.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SHELL = path.join(DIST, 'index.html');
const SITE_ORIGIN = 'https://www.fasttrackr.ai';

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function stripHtml(html) {
  return String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Trim to a whole word at or under `limit` characters. */
function clamp(text, limit) {
  const t = stripHtml(text);
  if (t.length <= limit) return t;
  const cut = t.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\s]+$/, '') + '…';
}

/**
 * Replaces the shell's default head tags rather than appending, so a page never
 * ships two titles or two canonicals. Anything absent from the shell is
 * appended before </head>.
 */
function renderHead(shell, meta) {
  let html = shell;
  const extra = [];

  const replaceOrQueue = (pattern, replacement) => {
    if (pattern.test(html)) html = html.replace(pattern, replacement);
    else extra.push(replacement);
  };

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);

  replaceOrQueue(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(meta.description)}" />`
  );
  replaceOrQueue(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${esc(meta.canonical)}" />`
  );

  const metaTags = [
    ['property', 'og:type', meta.ogType],
    ['property', 'og:url', meta.canonical],
    ['property', 'og:title', meta.title],
    ['property', 'og:description', meta.description],
    ['property', 'og:image', meta.image],
    ['property', 'og:image:alt', meta.imageAlt],
    ['property', 'article:published_time', meta.publishedTime],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', meta.title],
    ['name', 'twitter:description', meta.description],
    ['name', 'twitter:image', meta.image],
    ['name', 'twitter:image:alt', meta.imageAlt],
  ];

  for (const [attr, key, value] of metaTags) {
    if (!value) continue;
    const tag = `<meta ${attr}="${key}" content="${esc(value)}" />`;
    replaceOrQueue(new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*/?>`), tag);
  }

  if (meta.jsonLd) {
    // </ inside the payload would close the script tag early.
    const payload = JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c');
    extra.push(`<script type="application/ld+json">${payload}</script>`);
  }

  if (extra.length) {
    html = html.replace('</head>', `    ${extra.join('\n    ')}\n  </head>`);
  }
  return html;
}

function writeRoute(routePath, html) {
  const dir = path.join(DIST, routePath.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

function organization() {
  return {
    '@type': 'Organization',
    name: 'FastTrackr AI',
    url: SITE_ORIGIN,
    logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/logo.png` },
  };
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * Static marketing/ICP/solutions/legal routes.
 *
 * EMPTIED in ticket 003: these routes are now ported into the React Router
 * framework route tree (app/routes/**) and prerendered with their FULL BODY by
 * `react-router build` (see react-router.config.ts `prerender`). This old script
 * only ever baked the <head> into an otherwise-empty shell; if it kept writing
 * these paths it would run AFTER stage-dist and CLOBBER the framework's full-body
 * dist/<route>/index.html with a head-only version — the opposite of the goal.
 *
 * The script stays wired only for the blog/news heads below until tickets 004/005
 * move those into framework loaders; it is deleted entirely in ticket 009.
 */
const STATIC_ROUTES = [];

function main() {
  if (!fs.existsSync(SHELL)) {
    console.error('[prerender] dist/index.html not found — run vite build first.');
    process.exit(1);
  }
  const shell = fs.readFileSync(SHELL, 'utf8');
  let count = 0;

  // --- Static routes --------------------------------------------------------
  for (const route of STATIC_ROUTES) {
    writeRoute(
      route.path,
      renderHead(shell, {
        title: route.title,
        description: route.description,
        canonical: `${SITE_ORIGIN}${route.path}`,
        ogType: 'website',
        image: `${SITE_ORIGIN}/logomark.png`,
      })
    );
    count++;
  }

  // --- News -----------------------------------------------------------------
  const newsIndexPath = path.join(ROOT, 'public/news-data/index.json');
  if (fs.existsSync(newsIndexPath)) {
    const { items } = readJson(newsIndexPath);

    writeRoute(
      '/resources/news',
      renderHead(shell, {
        title: 'News & Press | FastTrackr AI',
        description:
          'Company news, press releases, and announcements from FastTrackr AI, the AI-native platform built to run advisor transitions end to end.',
        canonical: `${SITE_ORIGIN}/resources/news`,
        ogType: 'website',
        image: `${SITE_ORIGIN}/logomark.png`,
      })
    );
    count++;

    for (const item of items) {
      const article = readJson(
        path.join(ROOT, 'public/news-data/posts', `${item.slug}.json`)
      );
      const url = `${SITE_ORIGIN}/resources/news/${article.slug}`;
      const image = article.image ? `${SITE_ORIGIN}${article.image}` : `${SITE_ORIGIN}/logomark.png`;

      writeRoute(
        `/resources/news/${article.slug}`,
        renderHead(shell, {
          title: article.seoTitle || article.title,
          description: article.description,
          canonical: url,
          ogType: 'article',
          image,
          imageAlt: article.image ? article.imageAlt : null,
          publishedTime: article.date,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            ...(article.image ? { image: [image] } : {}),
            author: { '@type': 'Organization', name: article.author, url: SITE_ORIGIN },
            publisher: organization(),
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          },
        })
      );
      count++;
    }
  }

  // --- Blog -----------------------------------------------------------------
  // MOVED to framework loaders in ticket 004. `/resources/blog` and every
  // `/blog/<slug>` now render their FULL BODY via app/routes/blog-*.tsx loaders
  // (see react-router.config.ts `prerender`). If this script kept writing those
  // paths it would run AFTER stage-dist and CLOBBER the framework's full-body
  // dist/blog/<slug>/index.html with a head-only shell — the opposite of the goal
  // (mirrors why STATIC_ROUTES was emptied in 003). News heads stay here until
  // ticket 005 moves them too; the whole script is deleted in ticket 009.

  console.log(`[prerender] wrote ${count} static HTML pages`);
}

try {
  main();
} catch (err) {
  console.error('[prerender] fatal:', err);
  process.exit(1);
}
