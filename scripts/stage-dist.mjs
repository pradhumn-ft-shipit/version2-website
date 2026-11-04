#!/usr/bin/env node
// Post-`react-router build` step: stage the prerendered client output at ./dist.
//
// In `ssr: false` mode the framework writes the deployable static site to
// build/client/ (with build/server/ used only during the build to prerender).
// render.yaml serves `staticPublishPath: ./dist`, so we copy build/client there.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NOT_FOUND_DIR, expectedPaths, syncedYaml } from './render-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CLIENT = path.join(ROOT, 'build', 'client');
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(CLIENT)) {
  console.error(`stage-dist: expected client build at ${CLIENT} — did "react-router build" run?`);
  process.exit(1);
}

// PR2-10: every prerendered page needs its exact rewrite in render.yaml (there
// is no SPA catch-all any more). Fail the build rather than ship pages as 404s.
const renderYaml = fs.readFileSync(path.join(ROOT, 'render.yaml'), 'utf8');
if (syncedYaml(renderYaml, expectedPaths(CLIENT, renderYaml)) !== renderYaml) {
  console.error(
    'stage-dist: render.yaml rewrites are out of date with the prerendered pages.\n' +
      'Run `npm run routes:sync` and commit render.yaml (see scripts/render-routes.mjs).'
  );
  process.exit(1);
}

fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(CLIENT, DIST, { recursive: true });

// PR2-10: the not-found route is prerendered at /404; Render serves a root
// 404.html (status 404) for any path with no file and no rule.
const notFoundDir = path.join(DIST, NOT_FOUND_DIR);
const notFoundHtml = path.join(notFoundDir, 'index.html');
if (!fs.existsSync(notFoundHtml)) {
  console.error(`stage-dist: expected the prerendered not-found page at ${path.relative(ROOT, notFoundHtml)}`);
  process.exit(1);
}
fs.copyFileSync(notFoundHtml, path.join(DIST, '404.html'));
fs.rmSync(notFoundDir, { recursive: true, force: true });
fs.rmSync(path.join(DIST, `${NOT_FOUND_DIR}.data`), { force: true });
console.log(`stage-dist: copied ${path.relative(ROOT, CLIENT)} -> ${path.relative(ROOT, DIST)}`);
