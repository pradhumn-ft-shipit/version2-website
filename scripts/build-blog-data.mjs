#!/usr/bin/env node
// Renders content/blog/*.md and content/tejas/<YYYY-MM-DD>/*.md
// → public/blog-data/posts/<slug>.json, then regenerates
// public/blog-data/index.json from every post JSON on disk
// (markdown-sourced + the legacy migrated ones).
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
const OUT_DIR = path.join(ROOT, 'public/blog-data');
const POSTS_DIR = path.join(OUT_DIR, 'posts');
const IMAGES_DIR = path.join(ROOT, 'public/blog-images');
const CATEGORIES_TS = path.join(ROOT, 'src/lib/blogCategories.ts');
const SITEMAP_PATH = path.join(ROOT, 'public/sitemap.xml');
const TEJAS_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const ABSOLUTE_ASSET_RE = /^(https?:\/\/|\/\/|\/|data:|mailto:|#)/i;

const SITE_ORIGIN = 'https://www.fasttrackr.ai';
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
  { path: '/pricing', priority: '0.7' },
  { path: '/about', priority: '0.6' },
  { path: '/contact', priority: '0.7' },
  { path: '/resources/blog', priority: '0.5' },
  { path: '/privacy-policy', priority: '0.3' },
  { path: '/tos', priority: '0.3' },
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

function main() {
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

  writeSitemap(index);

  console.log(
    `[blog] rendered ${rendered} markdown post${rendered === 1 ? '' : 's'}; index has ${index.length} post${index.length === 1 ? '' : 's'}`
  );
}

function writeSitemap(index) {
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
