#!/usr/bin/env node
// Renders content/blog/*.md and content/tejas/<YYYY-MM-DD>/*.md
// → public/blog-data/posts/<slug>.json, then regenerates
// public/blog-data/index.json from every post JSON on disk
// (markdown-sourced + the legacy migrated ones).
//
// public/blog-data/ is 100% build output — git-ignored, regenerated here.
// The ONLY tracked blog sources are content/blog, content/tejas, and
// content/legacy-posts/ (the pre-markdown migrated posts that exist only as
// JSON, with no markdown source). Each build clears public/blog-data/posts/,
// renders all markdown into it, then copies content/legacy-posts/*.json in, so
// the index scan below sees legacy + rendered — same output as before, but
// legacy now comes from a tracked source dir rather than committed output.
//
// Also renders content/news/*.md → public/news-data/posts/<slug>.json +
// public/news-data/index.json (press releases and announcements shown at
// /resources/news). Both content types feed public/sitemap.xml, so a new
// markdown file is all it takes for a URL to appear there.
//
// content/blog/ is the long-standing developer drop point — lenient
// (skips bad files with a warning).
// content/tejas/<YYYY-MM-DD>/ is the blog team's daily drop — strict
// (any validation failure aborts the build with a non-zero exit so
// Cloudflare Pages won't deploy broken content). Image files alongside
// the markdown are copied to public/blog-images/<YYYY-MM-DD>-<filename>
// and references in the markdown body + frontmatter are rewritten.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content/blog');
const TEJAS_DIR = path.join(ROOT, 'content/tejas');
const LEGACY_POSTS_DIR = path.join(ROOT, 'content/legacy-posts');
const NEWS_DIR = path.join(ROOT, 'content/news');
const OUT_DIR = path.join(ROOT, 'public/blog-data');
const POSTS_DIR = path.join(OUT_DIR, 'posts');
const NEWS_OUT_DIR = path.join(ROOT, 'public/news-data');
const NEWS_POSTS_DIR = path.join(NEWS_OUT_DIR, 'posts');
const IMAGES_DIR = path.join(ROOT, 'public/blog-images');
const CATEGORIES_TS = path.join(ROOT, 'src/lib/blogCategories.ts');
const SITEMAP_PATH = path.join(ROOT, 'public/sitemap.xml');
const TEJAS_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const ABSOLUTE_ASSET_RE = /^(https?:\/\/|\/\/|\/|data:|mailto:|#)/i;

// Non-www is canonical (www 301-redirects to the bare domain). Keep this in sync
// with SITE_ORIGIN in src/lib/seo.ts and the Sitemap line in public/robots.txt.
const SITE_ORIGIN = 'https://fasttrackr.ai';
const STATIC_SITEMAP_PAGES = [
  { path: '/', priority: '1.0' },
  { path: '/solutions/advisor-transitions', priority: '0.9' },
  { path: '/solutions/client-onboarding', priority: '0.8' },
  { path: '/solutions/meeting-assistant', priority: '0.8' },
  { path: '/solutions/document-intelligence', priority: '0.8' },
  { path: '/who-we-serve/transition-consultants', priority: '0.8' },
  { path: '/who-we-serve/breakaway-advisors', priority: '0.8' },
  { path: '/who-we-serve/acquisitive-rias', priority: '0.8' },
  { path: '/who-we-serve/independent-broker-dealers', priority: '0.8' },
  { path: '/who-we-serve/custodians', priority: '0.8' },
  // /about is deliberately absent: it redirects to "/" (see src/App.tsx), and a
  // sitemap should list canonical destinations rather than redirects. It was
  // carried over from the previous version of the site.
  { path: '/pricing', priority: '0.7' },
  { path: '/contact', priority: '0.7' },
  { path: '/resources/blog', priority: '0.5' },
  { path: '/resources/news', priority: '0.6' },
  { path: '/resources-for-financial-advisors', priority: '0.6' },
  { path: '/case-study/advisor-transition', priority: '0.7' },
  { path: '/privacy-policy', priority: '0.3' },
  { path: '/tos', priority: '0.3' },
  // Intentionally NOT listed, though they are real routes in src/App.tsx:
  // /fpa (link-only co-marketing landing), /zoom-help-documentation,
  // /privacy-policy-transitions, /tos-transitions, /client-privacy-notice and
  // /client-data-consent-acknowledgment. They stay crawlable and are still
  // prerendered with their own <head> — they are just not submitted for
  // indexing. Don't "fix" this list by adding them back.
];

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (key) data[key] = val;
  }
  return { data, body: m[2] };
}

function safeDate(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function stripHtml(html) {
  return (html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeExcerpt(description, html, limit = 220) {
  if (description && description.trim()) return description.trim();
  const text = stripHtml(html);
  return text.length > limit ? text.slice(0, limit).trimEnd() + '…' : text;
}

function readingTimeMinutes(html) {
  const text = stripHtml(html);
  if (!text) return null;
  const words = text.split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function loadCanonicalTopics() {
  // Read the title: '...' / "..." strings from BLOG_CATEGORIES in
  // src/lib/blogCategories.ts so the build script stays in sync with the
  // Resources page without duplicating the list. UNCATEGORIZED_CATEGORY is
  // declared after BLOG_CATEGORIES, so we cut the text at its declaration.
  if (!fs.existsSync(CATEGORIES_TS)) return [];
  const text = fs.readFileSync(CATEGORIES_TS, 'utf8');
  const cut = text.indexOf('UNCATEGORIZED_CATEGORY');
  const region = cut === -1 ? text : text.slice(0, cut);
  return [...region.matchAll(/title:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
}

function isLocalAsset(p) {
  return typeof p === 'string' && p.length > 0 && !ABSOLUTE_ASSET_RE.test(p);
}

function copyImageOnce(src, dest) {
  if (fs.existsSync(dest)) {
    const a = fs.statSync(src);
    const b = fs.statSync(dest);
    if (a.size === b.size) return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function resolveDailyImage(relPath, sourceDir, datePrefix, errors, fileLabel) {
  const abs = path.resolve(sourceDir, relPath);
  if (!fs.existsSync(abs)) {
    errors.push(`${fileLabel}: image not found "${relPath}"`);
    return relPath;
  }
  if (!fs.statSync(abs).isFile()) {
    errors.push(`${fileLabel}: image path "${relPath}" is not a file`);
    return relPath;
  }
  const destName = `${datePrefix}-${path.basename(abs)}`;
  copyImageOnce(abs, path.join(IMAGES_DIR, destName));
  return `/blog-images/${destName}`;
}

function rewriteBodyImages(body, sourceDir, datePrefix, errors, fileLabel) {
  // ![alt](path) and ![alt](path "title")
  let out = body.replace(
    /!\[([^\]]*)\]\(\s*([^)\s]+)(\s+"[^"]*")?\s*\)/g,
    (match, alt, p, titlePart) => {
      if (!isLocalAsset(p)) return match;
      const rewritten = resolveDailyImage(p, sourceDir, datePrefix, errors, fileLabel);
      return `![${alt}](${rewritten}${titlePart || ''})`;
    }
  );
  // <img ... src="path" ...>
  out = out.replace(
    /<img\b([^>]*?)\bsrc=("|')([^"']+)\2/gi,
    (match, before, quote, p) => {
      if (!isLocalAsset(p)) return match;
      const rewritten = resolveDailyImage(p, sourceDir, datePrefix, errors, fileLabel);
      return `<img${before} src=${quote}${rewritten}${quote}`;
    }
  );
  return out;
}

function renderTejasFile(filePath, dateFolder, canonicalTopics) {
  const errors = [];
  const fileLabel = path.relative(ROOT, filePath);
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = parseFrontmatter(raw);
  if (!parsed) {
    return { errors: [`${fileLabel}: missing or malformed frontmatter`], post: null };
  }
  const { data, body } = parsed;
  const sourceDir = path.dirname(filePath);
  const slug = (data.slug || path.basename(filePath, '.md')).trim();
  const title = (data.title || '').trim();
  const description = (data.description || '').trim();
  const topic = (data.topic || '').trim();

  if (!slug) errors.push(`${fileLabel}: cannot derive slug from filename or "slug" field`);
  if (!title) errors.push(`${fileLabel}: missing "title"`);
  if (!description) errors.push(`${fileLabel}: missing "description"`);
  if (!topic) {
    errors.push(`${fileLabel}: missing "topic"`);
  } else if (
    canonicalTopics.length &&
    !canonicalTopics.some((t) => t.toLowerCase() === topic.toLowerCase())
  ) {
    errors.push(
      `${fileLabel}: invalid topic "${topic}". Valid values:\n    - ` +
        canonicalTopics.join('\n    - ')
    );
  }

  let imageField = (data.image || '').trim();
  if (imageField && isLocalAsset(imageField)) {
    imageField = resolveDailyImage(imageField, sourceDir, dateFolder, errors, fileLabel);
  }

  const rewrittenBody = rewriteBodyImages(body || '', sourceDir, dateFolder, errors, fileLabel);

  if (errors.length) return { errors, post: null };

  const html = marked.parse(rewrittenBody);
  return {
    errors: [],
    post: {
      slug,
      title,
      image: imageField || null,
      imageAlt: (data.imageAlt || '').trim() || title,
      date: safeDate(data.date) || safeDate(dateFolder),
      author: (data.author || '').trim() || 'FastTrackr AI Team',
      description,
      excerpt: makeExcerpt(description, html),
      content: html,
      topic,
      persona: (data.persona || '').trim() || null,
      readingTime: readingTimeMinutes(html),
    },
  };
}

function renderMarkdownFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = parseFrontmatter(raw);
  if (!parsed) {
    console.warn(`[blog] skipped ${path.basename(filePath)}: missing frontmatter`);
    return null;
  }
  const { data, body } = parsed;
  const slug = (data.slug || path.basename(filePath, '.md')).trim();
  const title = (data.title || '').trim();
  if (!slug || !title) {
    console.warn(`[blog] skipped ${path.basename(filePath)}: missing slug or title`);
    return null;
  }
  const html = marked.parse(body || '');
  const description = (data.description || '').trim();
  return {
    slug,
    title,
    image: (data.image || '').trim() || null,
    imageAlt: (data.imageAlt || '').trim() || title,
    date: safeDate(data.date),
    author: (data.author || '').trim() || 'FastTrackr AI Team',
    description,
    excerpt: makeExcerpt(description, html),
    content: html,
    topic: (data.topic || '').trim() || null,
    persona: (data.persona || '').trim() || null,
    readingTime: readingTimeMinutes(html),
  };
}

// ---------------------------------------------------------------------------
// content/news/*.md — press releases and announcements for /resources/news.
// Strict: any validation failure aborts the build (a broken press release page
// is worse than no deploy). Frontmatter supports block lists, which the blog
// parser above does not, so `coverage:` can carry one "Outlet | URL" per line.
// ---------------------------------------------------------------------------

/**
 * Deliberately a small subset of YAML, with every unsupported construct raised
 * as a build error rather than skipped. A press release that ships with a
 * silently-empty `coverage:` or an `intro:` of ">" is worse than a failed build,
 * so anything this parser does not understand is reported by line.
 *
 * Supported: `key: value` (optionally quoted) and block lists whose items are
 * `- item`, at any indentation.
 */
function parseNewsFrontmatter(raw, fileLabel) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const data = {};
  const errors = [];
  let listKey = null;
  // Set after a block-scalar error so its indented continuation lines don't
  // each raise a second, redundant error.
  let skipIndented = false;
  const lines = m[1].split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const where = `${fileLabel} (frontmatter line ${i + 1})`;
    if (!line.trim()) continue;

    // Block-list item. Accepted at any indent — zero-indent items are valid
    // YAML, and silently reading them as keys is how coverage links vanish.
    const item = line.match(/^\s*-\s+(.*)$/);
    if (item) {
      if (!listKey) {
        errors.push(`${where}: list item "${item[1].trim()}" has no key above it`);
        continue;
      }
      skipIndented = false;
      data[listKey].push(item[1].trim());
      continue;
    }

    if (skipIndented && /^\s/.test(line)) continue;

    const idx = line.indexOf(':');
    if (idx === -1) {
      errors.push(`${where}: expected "key: value" or "- list item", got "${line.trim()}"`);
      continue;
    }
    const key = line.slice(0, idx).trim();
    if (!key) {
      errors.push(`${where}: missing key before ":"`);
      continue;
    }
    let val = line.slice(idx + 1).trim();

    // >, |, >-, |+ etc. YAML folds these across the following lines; this
    // parser does not, and would store the indicator itself as the value.
    if (/^[>|][-+]?$/.test(val)) {
      errors.push(
        `${where}: multi-line values ("${key}: ${val}") are not supported — put the whole value on one line`
      );
      listKey = null;
      skipIndented = true;
      continue;
    }

    skipIndented = false;
    if (val === '') {
      listKey = key;
      data[key] = [];
      continue;
    }
    listKey = null;
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  }
  return { data, body: m[2], errors };
}

function parseCoverage(value, errors, fileLabel) {
  if (!value) return [];
  const raw = Array.isArray(value) ? value : [value];
  const out = [];
  for (const entry of raw) {
    const [outlet, url] = String(entry).split('|').map((s) => s.trim());
    if (!outlet || !url) {
      errors.push(`${fileLabel}: coverage entry must be "Outlet Name | https://url" (got "${entry}")`);
      continue;
    }
    if (!/^https?:\/\//i.test(url)) {
      errors.push(`${fileLabel}: coverage URL must be absolute (got "${url}")`);
      continue;
    }
    out.push({ outlet, url });
  }
  return out;
}

function renderNewsFile(filePath) {
  const errors = [];
  const fileLabel = path.relative(ROOT, filePath);
  const parsed = parseNewsFrontmatter(fs.readFileSync(filePath, 'utf8'), fileLabel);
  if (!parsed) {
    return { errors: [`${fileLabel}: missing or malformed frontmatter`], item: null };
  }
  const { data, body } = parsed;
  errors.push(...parsed.errors);
  const slug = String(data.slug || path.basename(filePath, '.md')).trim();
  const title = String(data.title || '').trim();
  const description = String(data.description || '').trim();
  const excerpt = String(data.excerpt || '').trim();
  const intro = String(data.intro || '').trim();
  const date = safeDate(data.date);

  if (!slug) errors.push(`${fileLabel}: cannot derive slug from filename or "slug" field`);
  if (!title) errors.push(`${fileLabel}: missing "title" (the headline)`);
  if (!description) errors.push(`${fileLabel}: missing "description" (meta description, ~150–155 chars)`);
  if (!excerpt) errors.push(`${fileLabel}: missing "excerpt" (one line for the index card)`);
  if (!intro) errors.push(`${fileLabel}: missing "intro" (original framing above the release text)`);
  if (!date) errors.push(`${fileLabel}: missing or unparseable "date" (use the original release date)`);

  const image = String(data.image || '').trim();
  if (image && !image.startsWith('/')) {
    errors.push(`${fileLabel}: "image" must be a site-absolute path, e.g. /news-images/${slug}.jpg`);
  }
  if (image && !String(data.imageAlt || '').trim()) {
    errors.push(`${fileLabel}: "imageAlt" is required whenever "image" is set`);
  }

  const coverage = parseCoverage(data.coverage, errors, fileLabel);

  if (errors.length) return { errors, item: null };

  const html = marked.parse(body || '');
  return {
    errors: [],
    item: {
      slug,
      title,
      seoTitle: String(data.seoTitle || '').trim() || null,
      label: String(data.label || '').trim() || 'News',
      image: image || null,
      imageAlt: String(data.imageAlt || '').trim() || title,
      date,
      author: String(data.author || '').trim() || 'FastTrackr AI',
      description,
      excerpt,
      intro,
      coverage,
      content: html,
    },
  };
}

function buildNews() {
  if (!fs.existsSync(NEWS_DIR)) return [];
  // Like POSTS_DIR, NEWS_POSTS_DIR is pure build output — wipe it so a renamed
  // or deleted news markdown can't leave a stale JSON behind.
  fs.rmSync(NEWS_POSTS_DIR, { recursive: true, force: true });
  fs.mkdirSync(NEWS_POSTS_DIR, { recursive: true });

  const errors = [];
  const items = [];
  const seen = new Set();
  const files = fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.toLowerCase().endsWith('.md'))
    .sort();

  for (const f of files) {
    const result = renderNewsFile(path.join(NEWS_DIR, f));
    if (result.errors.length) {
      errors.push(...result.errors);
      continue;
    }
    const item = result.item;
    if (seen.has(item.slug)) {
      errors.push(`content/news/${f}: duplicate slug "${item.slug}"`);
      continue;
    }
    seen.add(item.slug);
    fs.writeFileSync(
      path.join(NEWS_POSTS_DIR, `${item.slug}.json`),
      JSON.stringify(item)
    );
    items.push(item);
  }

  if (errors.length) {
    console.error('\n[news] content/news validation failed:');
    for (const msg of errors) console.error('  • ' + msg);
    console.error(`\n[news] ${errors.length} error${errors.length === 1 ? '' : 's'}; aborting.`);
    process.exit(1);
  }

  const index = items
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      label: item.label,
      image: item.image,
      imageAlt: item.imageAlt,
      date: item.date,
      excerpt: item.excerpt,
    }))
    .sort((a, b) => {
      const byDate = (b.date || '').localeCompare(a.date || '');
      return byDate !== 0 ? byDate : a.slug.localeCompare(b.slug);
    });

  fs.writeFileSync(
    path.join(NEWS_OUT_DIR, 'index.json'),
    JSON.stringify({ count: index.length, items: index })
  );

  console.log(`[news] rendered ${index.length} news item${index.length === 1 ? '' : 's'}`);
  return index;
}

function main() {
  // POSTS_DIR is pure build output: wipe it so a deleted/renamed source can
  // never leave a stale JSON behind to be picked up by the index scan below.
  fs.rmSync(POSTS_DIR, { recursive: true, force: true });
  fs.mkdirSync(POSTS_DIR, { recursive: true });
  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const seenSlugs = new Map(); // slug -> source label, for collision detection
  let rendered = 0;

  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs
      .readdirSync(CONTENT_DIR)
      .filter((f) => f.toLowerCase().endsWith('.md'));
    for (const f of files) {
      const post = renderMarkdownFile(path.join(CONTENT_DIR, f));
      if (!post) continue;
      seenSlugs.set(post.slug, `content/blog/${f}`);
      fs.writeFileSync(
        path.join(POSTS_DIR, `${post.slug}.json`),
        JSON.stringify(post)
      );
      rendered++;
    }
  }

  // content/tejas/<YYYY-MM-DD>/*.md — strict daily-folder pipeline.
  const tejasErrors = [];
  if (fs.existsSync(TEJAS_DIR)) {
    const canonicalTopics = loadCanonicalTopics();
    const dayFolders = fs
      .readdirSync(TEJAS_DIR, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();

    for (const day of dayFolders) {
      if (!TEJAS_DATE_RE.test(day)) {
        tejasErrors.push(
          `content/tejas/${day}: folder name must be YYYY-MM-DD (got "${day}")`
        );
        continue;
      }
      const dayDir = path.join(TEJAS_DIR, day);
      const mdFiles = fs
        .readdirSync(dayDir)
        .filter((f) => f.toLowerCase().endsWith('.md'));

      for (const f of mdFiles) {
        const result = renderTejasFile(path.join(dayDir, f), day, canonicalTopics);
        if (result.errors.length) {
          tejasErrors.push(...result.errors);
          continue;
        }
        const post = result.post;
        const sourceLabel = `content/tejas/${day}/${f}`;
        const previousSource = seenSlugs.get(post.slug);
        if (previousSource && previousSource !== sourceLabel) {
          tejasErrors.push(
            `${sourceLabel}: duplicate slug "${post.slug}" (also produced by ${previousSource})`
          );
          continue;
        }
        seenSlugs.set(post.slug, sourceLabel);
        fs.writeFileSync(
          path.join(POSTS_DIR, `${post.slug}.json`),
          JSON.stringify(post)
        );
        rendered++;
      }
    }
  }

  if (tejasErrors.length) {
    console.error('\n[blog] content/tejas validation failed:');
    for (const msg of tejasErrors) console.error('  • ' + msg);
    console.error(
      `\n[blog] ${tejasErrors.length} error${tejasErrors.length === 1 ? '' : 's'}; aborting before index regeneration.`
    );
    process.exit(1);
  }

  // Legacy migrated posts: JSON-only source of truth, copied verbatim into the
  // (freshly wiped) output dir so the index scan sees them alongside the
  // markdown-rendered posts. A legacy slug that collides with a markdown post is
  // a genuine authoring error — abort rather than silently clobber.
  let legacyCopied = 0;
  if (fs.existsSync(LEGACY_POSTS_DIR)) {
    const legacyErrors = [];
    const legacyFiles = fs
      .readdirSync(LEGACY_POSTS_DIR)
      .filter((f) => f.toLowerCase().endsWith('.json'));
    for (const f of legacyFiles) {
      const src = path.join(LEGACY_POSTS_DIR, f);
      let post;
      try {
        post = JSON.parse(fs.readFileSync(src, 'utf8'));
      } catch (err) {
        legacyErrors.push(`content/legacy-posts/${f}: invalid JSON (${err.message})`);
        continue;
      }
      const slug = (post.slug || path.basename(f, '.json')).trim();
      const previousSource = seenSlugs.get(slug);
      if (previousSource) {
        legacyErrors.push(
          `content/legacy-posts/${f}: duplicate slug "${slug}" (also produced by ${previousSource})`
        );
        continue;
      }
      seenSlugs.set(slug, `content/legacy-posts/${f}`);
      // Persist the resolved slug so the index scan below can't emit `undefined`
      // for a legacy JSON that omitted its own `slug` field (it falls back to the
      // filename, and the written file must agree with the collision key).
      fs.writeFileSync(path.join(POSTS_DIR, `${slug}.json`), JSON.stringify({ ...post, slug }));
      legacyCopied++;
    }
    if (legacyErrors.length) {
      console.error('\n[blog] content/legacy-posts validation failed:');
      for (const msg of legacyErrors) console.error('  • ' + msg);
      console.error(
        `\n[blog] ${legacyErrors.length} error${legacyErrors.length === 1 ? '' : 's'}; aborting before index regeneration.`
      );
      process.exit(1);
    }
  }

  const jsonFiles = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.toLowerCase().endsWith('.json'));

  const index = jsonFiles.map((f) => {
    const post = JSON.parse(fs.readFileSync(path.join(POSTS_DIR, f), 'utf8'));
    return {
      slug: post.slug,
      title: post.title,
      image: post.image ?? null,
      imageAlt: post.imageAlt ?? post.title,
      date: post.date ?? null,
      author: post.author ?? 'FastTrackr AI Team',
      excerpt: post.excerpt ?? '',
      topic: post.topic ?? null,
      persona: post.persona ?? null,
      readingTime: post.readingTime ?? null,
    };
  });

  index.sort((a, b) => {
    const byDate = (b.date || '').localeCompare(a.date || '');
    return byDate !== 0 ? byDate : a.slug.localeCompare(b.slug);
  });

  // index.json is bundled into the Pages Function at functions/api/blog-index.ts
  // (served at /api/blog-index). It is not fetched directly over HTTP by the
  // frontend; keep it on disk as the source of truth the function imports.
  fs.writeFileSync(
    path.join(OUT_DIR, 'index.json'),
    JSON.stringify({ count: index.length, posts: index })
  );

  const newsIndex = buildNews();

  writeSitemap(index, newsIndex);

  console.log(
    `[blog] rendered ${rendered} markdown post${rendered === 1 ? '' : 's'}, copied ${legacyCopied} legacy post${legacyCopied === 1 ? '' : 's'}; index has ${index.length} post${index.length === 1 ? '' : 's'}`
  );
}

function writeSitemap(index, newsIndex = []) {
  const urls = [
    ...STATIC_SITEMAP_PAGES.map((p) => ({
      loc: `${SITE_ORIGIN}${p.path}`,
      priority: p.priority,
    })),
    ...index.map((post) => ({
      loc: `${SITE_ORIGIN}/blog/${post.slug}`,
      lastmod: post.date ? post.date.slice(0, 10) : null,
      priority: '0.5',
    })),
    ...newsIndex.map((item) => ({
      loc: `${SITE_ORIGIN}/resources/news/${item.slug}`,
      lastmod: item.date ? item.date.slice(0, 10) : null,
      priority: '0.6',
    })),
  ];

  const lines = urls.map((u) => {
    const parts = [`<loc>${u.loc}</loc>`];
    if (u.lastmod) parts.push(`<lastmod>${u.lastmod}</lastmod>`);
    parts.push(`<priority>${u.priority}</priority>`);
    return `  <url>${parts.join('')}</url>`;
  });

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    lines.join('\n') +
    `\n</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, xml);
  console.log(`[blog] wrote sitemap.xml with ${urls.length} URLs`);
}

try {
  main();
} catch (err) {
  console.error('[blog] fatal:', err);
  process.exit(1);
}
