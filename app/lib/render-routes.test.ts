import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
// @ts-expect-error -- plain .mjs build script, no type declarations
import { BEGIN, END, redirectSources, rewriteBlock, syncedYaml } from '../../scripts/render-routes.mjs';

// PR2-10: render.yaml must not turn unknown URLs into soft 404s.
const yaml = fs.readFileSync(path.resolve(__dirname, '../../render.yaml'), 'utf8');

function rules(src: string) {
  const out: { type: string; source: string; destination: string }[] = [];
  const re = /-\s+type:\s*(redirect|rewrite)\s*\n\s+source:\s*(\S+)\s*\n\s+destination:\s*(\S+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) out.push({ type: m[1], source: m[2], destination: m[3] });
  return out;
}

describe('render.yaml routing (PR2-10)', () => {
  const all = rules(yaml);
  const rewrites = all.filter((r) => r.type === 'rewrite');

  it('has no SPA catch-all and no wildcard rewrites', () => {
    expect(rewrites.length).toBeGreaterThan(0);
    for (const r of rewrites) expect(r.source).not.toContain('*');
  });

  it('rewrites each page path to its own index.html', () => {
    for (const r of rewrites) {
      expect(r.destination).toBe(r.source === '/' ? '/index.html' : `${r.source}/index.html`);
    }
  });

  it('301s /custodians/goldman to /custodians/goldman-sachs', () => {
    expect(all).toContainEqual({
      type: 'redirect',
      source: '/custodians/goldman',
      destination: '/custodians/goldman-sachs',
    });
  });

  it('never rewrites a path that is also a redirect source', () => {
    const redirects = redirectSources(yaml);
    for (const r of rewrites) expect(redirects.has(r.source)).toBe(false);
  });
});

describe('render-routes generator', () => {
  it('regenerates only the marked block', () => {
    const sample = `head\n${BEGIN}\nold\n${END}\ntail\n`;
    const next = syncedYaml(sample, ['/pricing']);
    expect(next.startsWith('head\n')).toBe(true);
    expect(next.endsWith('\ntail\n')).toBe(true);
    expect(next).toContain('source: /pricing\n        destination: /pricing/index.html');
    expect(next).not.toContain('old');
    expect(rewriteBlock([])).toContain('source: /\n        destination: /index.html');
  });
});
