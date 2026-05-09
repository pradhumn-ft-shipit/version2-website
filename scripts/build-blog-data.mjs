#!/usr/bin/env node
// Parses guideline-copy/old-blogs/blog1.csv and writes:
//   public/blog-data/index.json — metadata array sorted by date desc
//   public/blog-data/posts/<slug>.json — full post per file
//   public/blog-images/<filename>     — every referenced framer image,
//                                       downloaded so we never hot-link.
// All framer image URLs (cover + in-content) are rewritten to
// /blog-images/<filename> before being written to JSON.
// Run as part of `npm run build`. Re-runs are idempotent.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CSV_PATH = path.join(ROOT, 'guideline-copy/old-blogs/blog1.csv');
const OUT_DIR = path.join(ROOT, 'public/blog-data');
const POSTS_DIR = path.join(OUT_DIR, 'posts');
const IMAGES_DIR = path.join(ROOT, 'public/blog-images');
const PUBLIC_IMAGE_PREFIX = '/blog-images/';

const FRAMER_URL_REGEX = /https?:\/\/framerusercontent\.com\/images\/([A-Za-z0-9]+\.(?:png|jpe?g|gif|svg|webp|avif))/gi;

function splitTopLevelLines(csv) {
  const rows = [];
  let inQuotes = false;
  let current = '';
  for (const ch of csv) {
    if (ch === '"') inQuotes = !inQuotes;
    if (ch === '\n' && !inQuotes) {
      rows.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current) rows.push(current);
  return rows;
}

function parseRow(line) {
  const out = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (q && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        q = !q;
      }
    } else if (c === ',' && !q) {
      out.push(cur);
      cur = '';
    } else {
      cur += c;
    }
  }
  out.push(cur);
  return out;
}

function safeDate(value) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}

// Internal links from the legacy CMS (https://fasttrackr.ai/...) get stripped
// to relative paths so the site works behind any custom domain. Subdomains
// (console.fasttrackr.ai, framerusercontent.com) are left untouched.
function normalizeInternalLinks(html) {
  if (!html) return html;
  return html.replace(/https?:\/\/(?:www\.)?fasttrackr\.ai(?=[\/"' ]|$)/g, '');
}

function rewriteFramerImages(text, queue) {
  if (!text) return text;
  return text.replace(FRAMER_URL_REGEX, (full, filename) => {
    queue.set(filename, full);
    return PUBLIC_IMAGE_PREFIX + filename;
  });
}

function pickContent(content, body) {
  const chosen = content && content.length > 50 ? content : body && body.length > 50 ? body : null;
  return chosen ? normalizeInternalLinks(chosen) : null;
}

function makeExcerpt(description, content, limit = 220) {
  if (description && description.trim().length > 0) {
    return description.trim();
  }
  if (!content) return '';
  const text = content
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > limit ? text.slice(0, limit).trimEnd() + '…' : text;
}

function readingTimeMinutes(content) {
  if (!content) return null;
  const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function ensureCleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

async function downloadImage(filename, url) {
  const dest = path.join(IMAGES_DIR, filename);
  if (fs.existsSync(dest)) {
    const stat = fs.statSync(dest);
    if (stat.size > 0) return { filename, status: 'cached' };
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { filename, status: 'failed', code: res.status };
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    return { filename, status: 'downloaded', bytes: buf.length };
  } catch (err) {
    return { filename, status: 'error', err: err.message };
  }
}

async function downloadAll(queue, concurrency = 8) {
  const entries = [...queue.entries()];
  let downloaded = 0;
  let cached = 0;
  let failed = 0;
  let cursor = 0;

  async function worker() {
    while (cursor < entries.length) {
      const i = cursor++;
      const [filename, url] = entries[i];
      const r = await downloadImage(filename, url);
      if (r.status === 'downloaded') downloaded++;
      else if (r.status === 'cached') cached++;
      else {
        failed++;
        console.warn(`[blog]   download failed for ${filename} (${r.status} ${r.code ?? r.err ?? ''})`);
      }
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, entries.length) }, worker);
  await Promise.all(workers);
  return { total: entries.length, downloaded, cached, failed };
}

async function main() {
  if (!fs.existsSync(CSV_PATH)) {
    console.warn(`[blog] CSV not found at ${CSV_PATH} — skipping`);
    return;
  }

  const csv = fs.readFileSync(CSV_PATH, 'utf8');
  const rows = splitTopLevelLines(csv);
  if (rows.length < 2) {
    console.warn('[blog] CSV has no records');
    return;
  }

  const header = parseRow(rows[0]);
  const colIdx = Object.fromEntries(header.map((h, i) => [h, i]));

  ensureCleanDir(POSTS_DIR);
  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const imageQueue = new Map(); // filename -> source URL
  const index = [];
  const seenSlugs = new Set();
  let skipped = 0;

  for (let r = 1; r < rows.length; r++) {
    const fields = parseRow(rows[r]);
    if (fields.length < 2) continue;

    const slug = (fields[colIdx.Slug] || '').trim();
    const title = (fields[colIdx.Title] || '').trim();
    const rawImage = (fields[colIdx.Image] || '').trim() || null;
    const imageAlt = (fields[colIdx['Image:alt']] || '').trim() || title;
    const date = safeDate(fields[colIdx.Date]);
    const author = (fields[colIdx.Author] || '').trim() || 'FastTrackr AI Team';
    const description = (fields[colIdx.Description] || '').trim();
    const content = (fields[colIdx.Content] || '').trim();
    const body = (fields[colIdx.Body] || '').trim();
    const topic = (fields[colIdx.Topic] || '').trim() || null;
    const persona = (fields[colIdx.Persona] || '').trim() || null;

    if (!slug || !title) {
      skipped++;
      continue;
    }
    if (seenSlugs.has(slug)) {
      skipped++;
      continue;
    }
    let html = pickContent(content, body);
    if (!html) {
      skipped++;
      continue;
    }

    seenSlugs.add(slug);

    const image = rewriteFramerImages(rawImage, imageQueue);
    html = rewriteFramerImages(html, imageQueue);

    const excerpt = makeExcerpt(description, html);
    const readingTime = readingTimeMinutes(html);

    const post = {
      slug,
      title,
      image,
      imageAlt,
      date,
      author,
      description,
      excerpt,
      content: html,
      topic,
      persona,
      readingTime,
    };

    fs.writeFileSync(
      path.join(POSTS_DIR, `${slug}.json`),
      JSON.stringify(post)
    );

    index.push({
      slug,
      title,
      image,
      imageAlt,
      date,
      author,
      excerpt,
      topic,
      persona,
      readingTime,
    });
  }

  index.sort((a, b) => {
    const ad = a.date || '';
    const bd = b.date || '';
    return bd.localeCompare(ad);
  });

  fs.writeFileSync(
    path.join(OUT_DIR, 'index.json'),
    JSON.stringify({ count: index.length, posts: index })
  );

  console.log(`[blog] wrote ${index.length} posts (skipped ${skipped})`);

  if (imageQueue.size > 0) {
    console.log(`[blog] downloading ${imageQueue.size} images …`);
    const t0 = Date.now();
    const stats = await downloadAll(imageQueue, 8);
    const ms = Date.now() - t0;
    console.log(
      `[blog] images: ${stats.downloaded} downloaded, ${stats.cached} cached, ${stats.failed} failed (${ms}ms)`
    );
    if (stats.failed > 0) {
      process.exitCode = 1;
    }
  }
}

main().catch((err) => {
  console.error('[blog] fatal:', err);
  process.exit(1);
});
