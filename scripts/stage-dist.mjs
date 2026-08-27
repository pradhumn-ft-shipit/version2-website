#!/usr/bin/env node
// Post-`react-router build` step: stage the prerendered client output at ./dist.
//
// In `ssr: false` mode the framework writes the deployable static site to
// build/client/ (with build/server/ used only during the build to prerender).
// render.yaml serves `staticPublishPath: ./dist`, so we copy build/client there.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CLIENT = path.join(ROOT, 'build', 'client');
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(CLIENT)) {
  console.error(`stage-dist: expected client build at ${CLIENT} — did "react-router build" run?`);
  process.exit(1);
}

fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(CLIENT, DIST, { recursive: true });
console.log(`stage-dist: copied ${path.relative(ROOT, CLIENT)} -> ${path.relative(ROOT, DIST)}`);
