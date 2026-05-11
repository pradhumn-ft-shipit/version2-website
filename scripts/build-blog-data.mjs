#!/usr/bin/env node
// Renders content/blog/*.md → public/blog-data/posts/<slug>.json,
// then regenerates public/blog-data/index.json from every post JSON
// (markdown-sourced + the legacy migrated ones already on disk).
// Idempotent. Run as part of `npm run build`.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content/blog');
const OUT_DIR = path.join(ROOT, 'public/blog-data');
const POSTS_DIR = path.join(OUT_DIR, 'posts');

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

  let rendered = 0;
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs
      .readdirSync(CONTENT_DIR)
      .filter((f) => f.toLowerCase().endsWith('.md'));
    for (const f of files) {
      const post = renderMarkdownFile(path.join(CONTENT_DIR, f));
      if (!post) continue;
      fs.writeFileSync(
        path.join(POSTS_DIR, `${post.slug}.json`),
        JSON.stringify(post)
      );
      rendered++;
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

  console.log(
    `[blog] rendered ${rendered} markdown post${rendered === 1 ? '' : 's'}; index has ${index.length} post${index.length === 1 ? '' : 's'}`
  );
}

try {
  main();
} catch (err) {
  console.error('[blog] fatal:', err);
  process.exit(1);
}
