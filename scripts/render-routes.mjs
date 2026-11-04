#!/usr/bin/env node
// PR2-10 (2026-11-04): explicit clean-URL rewrites for render.yaml.
//
// Render only applies a rule when no file exists at the requested path, and a
// rewrite whose destination file is missing answers 200 with an EMPTY body
// (live, 2026-11-04: /custodians/goldman, /authors/vineet, /blog/<unknown>). So
// wildcard rewrites such as `/blog/*` -> `/blog/*/index.html` and the SPA
// catch-all `/*` -> `/index.html` turned every unknown URL into a soft 404.
//
// Instead, render.yaml carries one exact rewrite per prerendered page, between
// the BEGIN/END markers below, and nothing else. Any other path has no file and
// no rule, so Render serves dist/404.html with a 404 status.
//
//   node scripts/render-routes.mjs --write   regenerate the block from build/client
//   node scripts/render-routes.mjs           check only (exit 1 if out of date)
//
// scripts/stage-dist.mjs runs the check on every build, so a new page or post
// that isn't in render.yaml fails the build instead of going live as a 404.
// Fix: `npm run build` (it stops at the check), `npm run routes:sync`, commit.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const RENDER_YAML = path.join(ROOT, 'render.yaml');
const CLIENT = path.join(ROOT, 'build', 'client');

export const BEGIN = '      # BEGIN generated clean-URL rewrites (scripts/render-routes.mjs). Do not edit by hand.';
export const END = '      # END generated clean-URL rewrites';
// The prerendered not-found page; staged as dist/404.html, never a route.
export const NOT_FOUND_DIR = '404';

/** Every `<route>/index.html` under `dir`, as `/route` paths (root excluded). */
export function collectPrerenderedPaths(dir) {
  const out = [];
  const walk = (abs, rel) => {
    for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      const childRel = rel ? `${rel}/${e.name}` : e.name;
      if (!rel && (e.name === NOT_FOUND_DIR || e.name === 'assets')) continue;
      const childAbs = path.join(abs, e.name);
      if (fs.existsSync(path.join(childAbs, 'index.html'))) out.push(`/${childRel}`);
      walk(childAbs, childRel);
    }
  };
  walk(dir, '');
  return out.sort();
}

/** Redirect sources declared in render.yaml (outside the generated block). */
export function redirectSources(yaml) {
  const sources = new Set();
  const re = /-\s+type:\s*redirect\s*\n\s+source:\s*(\S+)/g;
  let m;
  while ((m = re.exec(yaml))) sources.add(m[1]);
  return sources;
}

export function rewriteBlock(paths) {
  const lines = [BEGIN];
  // "/" is normally served from index.html directly; the rule is a safety net.
  for (const p of ['/', ...paths]) {
    const dest = p === '/' ? '/index.html' : `${p}/index.html`;
    lines.push('      - type: rewrite', `        source: ${p}`, `        destination: ${dest}`);
  }
  lines.push(END);
  return lines.join('\n');
}

/** Paths that need a rewrite: prerendered pages that aren't redirect stubs. */
export function expectedPaths(clientDir, yaml) {
  const redirects = redirectSources(yaml);
  return collectPrerenderedPaths(clientDir).filter((p) => !redirects.has(p));
}

export function syncedYaml(yaml, paths) {
  const start = yaml.indexOf(BEGIN);
  const end = yaml.indexOf(END);
  if (start === -1 || end === -1 || end < start) {
    throw new Error('render.yaml: generated rewrite markers not found');
  }
  return yaml.slice(0, start) + rewriteBlock(paths) + yaml.slice(end + END.length);
}

function main() {
  const write = process.argv.includes('--write');
  if (!fs.existsSync(CLIENT)) {
    console.error(`render-routes: ${path.relative(ROOT, CLIENT)} not found. Run "npx react-router build" first.`);
    process.exit(1);
  }
  const yaml = fs.readFileSync(RENDER_YAML, 'utf8');
  const next = syncedYaml(yaml, expectedPaths(CLIENT, yaml));
  if (next === yaml) {
    console.log('render-routes: render.yaml rewrites match the prerendered pages.');
    return;
  }
  if (write) {
    fs.writeFileSync(RENDER_YAML, next);
    console.log('render-routes: render.yaml rewrites regenerated.');
    return;
  }
  console.error(
    'render-routes: render.yaml rewrites are out of date with the prerendered pages.\n' +
      'Run `npm run routes:sync` and commit render.yaml. Without it, new pages go live as 404s.'
  );
  process.exit(1);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
