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
 * Every non-content route in src/App.tsx that renders a real page (redirects and
 * :slug routes excluded). Without these, index.html's homepage <head> ships to
 * any crawler that doesn't execute JS — Bing, LinkedIn, Slack — telling them the
 * homepage is the canonical version of /pricing, /contact and the rest.
 *
 * "/" is deliberately absent: dist/index.html is already the homepage's own head.
 *
 * Titles/descriptions are drawn from each page's h1 and hero subhead. If you
 * change a hero, change it here too.
 */
const STATIC_ROUTES = [
  {
    path: '/solutions/advisor-transitions',
    title: 'Advisor Transitions | FastTrackr AI',
    description:
      'The AI transition engine for wealth management. Move advisor books in weeks, not months, with data collection, form-filling, and e-signature handled end to end.',
  },
  {
    path: '/solutions/client-onboarding',
    title: 'Client Onboarding | FastTrackr AI',
    description:
      'Onboard new clients in days, not weeks. The same technology built to handle thousands of account openings during advisor transitions, applied to day-to-day onboarding.',
  },
  {
    path: '/solutions/meeting-assistant',
    title: 'AI Meeting Assistant for Advisors | FastTrackr AI',
    description:
      'Your always-on meeting coordinator. Pre-meeting prep, in-meeting notes, and post-meeting follow-ups handled, so advisors can focus on the conversation.',
  },
  {
    path: '/solutions/document-intelligence',
    title: 'Document Intelligence | FastTrackr AI',
    description:
      'From piles of client paperwork to instant insights. Brokerage statements, tax documents, equity comp, and bank docs extracted and organized in minutes.',
  },
  {
    path: '/who-we-serve/transition-consultants',
    title: 'For Transition Consultants | FastTrackr AI',
    description:
      'More deals per consultant, without more admin slog. FastTrackr handles data collection, form-filling, and project management so your team takes on more transitions.',
  },
  {
    path: '/who-we-serve/breakaway-advisors',
    title: 'For Breakaway Advisors | FastTrackr AI',
    description:
      'Bring your book with you without breaking your team. Repapering, client data collection, and custodian paperwork run for you, so your move lands in weeks.',
  },
  {
    path: '/who-we-serve/acquisitive-rias',
    title: 'For Acquisitive RIAs | FastTrackr AI',
    description:
      'Every acquisition is a repapering project. Stop letting the integration timeline drag your AUM down, and make a fast, clean repaper your competitive edge.',
  },
  {
    path: '/who-we-serve/independent-broker-dealers',
    title: 'For Independent Broker-Dealers | FastTrackr AI',
    description:
      'Win the advisors, win their books, win them faster. Your transition experience is part of your recruiting pitch — make it the part that closes the deal.',
  },
  {
    path: '/who-we-serve/custodians',
    title: 'For Custodians | FastTrackr AI',
    description:
      'Be the on-ramp for every new RIA and advisory practice. FastTrackr puts the advisor onboarding experience back in the hands of the custodian.',
  },
  {
    path: '/pricing',
    title: 'Pricing | FastTrackr AI',
    description:
      "Pricing built around the value you get. It flexes to what you're using FastTrackr for and what it gives back to your firm, rather than selling seats by the dozen.",
  },
  {
    path: '/contact',
    title: 'Contact | FastTrackr AI',
    description:
      "Let's talk about your transition process. Whether you want to cut your timeline in half or just see how the engine works, book a 20-minute walkthrough.",
  },
  {
    path: '/fpa',
    title: 'FPA Member Discount | FastTrackr AI',
    description:
      "An exclusive discount on FastTrackr's AI Meeting Assistant for FPA members: automatic notes, summaries, and follow-ups built for financial advisors.",
  },
  {
    path: '/resources-for-financial-advisors',
    title: 'AI Resources for Financial Advisors | FastTrackr AI',
    description:
      'The AI playbook for modern advisors: deep dives and field notes for advisors, RIAs, and wealth firms putting AI to work — without the buzzwords.',
  },
  {
    path: '/case-study/advisor-transition',
    title: 'Case Study: $100M Moved in Two Weeks | FastTrackr AI',
    description:
      'How an advisor team moved $100M across 150 households in two weeks with zero repapering NIGOs, starting from zero client data.',
  },
  {
    path: '/zoom-help-documentation',
    title: 'Zoom Help Documentation | FastTrackr AI',
    description:
      'How FastTrackr AI connects to Zoom meetings: installation, features, data privacy considerations, and troubleshooting for the AI meeting assistant.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | FastTrackr AI',
    description:
      'How FastTrackr Inc. collects, uses, and discloses your information when you use the FastTrackr AI service.',
  },
  {
    path: '/tos',
    title: 'Terms of Service | FastTrackr AI',
    description: 'The terms governing your use of the FastTrackr AI service.',
  },
  {
    path: '/privacy-policy-transitions',
    title: 'Transitions Privacy Policy | FastTrackr AI',
    description:
      'How FastTrackr collects, uses, stores, shares, and protects information processed through the FastTrackr Advisor Transition Platform.',
  },
  {
    path: '/tos-transitions',
    title: 'Transitions Terms of Service | FastTrackr AI',
    description:
      'The terms governing use of the FastTrackr Advisor Transition Platform.',
  },
  {
    path: '/client-privacy-notice',
    title: 'Client Privacy Notice | FastTrackr AI',
    description:
      'A plain-language notice for clients: what data your advisor collects through FastTrackr during an account transition, how it is used, and your rights.',
  },
  {
    path: '/client-data-consent-acknowledgment',
    title: 'Client Data Consent & Acknowledgment | FastTrackr AI',
    description:
      'A short, plain-language consent document covering how your information is handled on the FastTrackr platform during an account transition.',
  },
];

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
  const blogIndexPath = path.join(ROOT, 'public/blog-data/index.json');
  if (fs.existsSync(blogIndexPath)) {
    const { posts } = readJson(blogIndexPath);

    writeRoute(
      '/resources/blog',
      renderHead(shell, {
        title: 'Blog | FastTrackr AI',
        description:
          'Field notes from the operators reshaping wealth management: advisor transitions, AI in wealth, compliance, and the work behind the work.',
        canonical: `${SITE_ORIGIN}/resources/blog`,
        ogType: 'website',
        image: `${SITE_ORIGIN}/logomark.png`,
      })
    );
    count++;

    for (const post of posts) {
      const url = `${SITE_ORIGIN}/blog/${post.slug}`;
      const image = post.image ? `${SITE_ORIGIN}${post.image}` : `${SITE_ORIGIN}/logomark.png`;
      const description = clamp(post.excerpt || post.title, 155);

      writeRoute(
        `/blog/${post.slug}`,
        renderHead(shell, {
          // Not clamped: a truncated "…" title would drop the brand suffix and
          // disagree with the title BlogPost.tsx sets once the post loads.
          // Google shortens for display on its own; the tag stays whole.
          title: `${post.title} | FastTrackr AI`,
          description,
          canonical: url,
          ogType: 'article',
          image,
          imageAlt: post.image ? post.imageAlt : null,
          publishedTime: post.date,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description,
            datePublished: post.date,
            ...(post.image ? { image: [image] } : {}),
            author: { '@type': 'Organization', name: post.author || 'FastTrackr AI', url: SITE_ORIGIN },
            publisher: organization(),
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          },
        })
      );
      count++;
    }
  }

  console.log(`[prerender] wrote ${count} static HTML pages`);
}

try {
  main();
} catch (err) {
  console.error('[prerender] fatal:', err);
  process.exit(1);
}
