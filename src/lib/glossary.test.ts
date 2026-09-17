import { describe, it, expect } from 'vitest';
import {
  glossaryTerms,
  glossarySlugs,
  getGlossaryTerm,
  relatedTerms,
  glossaryCategories,
} from './glossary';

// W3 glossary data integrity. The glossary is a hand-curated, YMYL-adjacent data
// module and the source the prerender enumerator reads, so these lock the
// invariants the route + schema code assume: unique resolvable slugs, related
// terms that actually exist, internal pillar links, and required copy present.

describe('glossary data integrity', () => {
  it('has the agreed core term set', () => {
    for (const slug of ['nigo', 'acats', 'repapering', 'broker-protocol', 'reg-bi']) {
      expect(glossarySlugs).toContain(slug);
    }
  });

  it('every slug is unique and kebab-case', () => {
    expect(glossarySlugs.length).toBe(new Set(glossarySlugs).size);
    for (const slug of glossarySlugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it('getGlossaryTerm resolves every slug and rejects unknown ones', () => {
    for (const slug of glossarySlugs) {
      expect(getGlossaryTerm(slug)?.slug).toBe(slug);
    }
    expect(getGlossaryTerm('not-a-real-term')).toBeUndefined();
  });

  it('every term carries the copy the page + schema render', () => {
    for (const t of glossaryTerms) {
      expect(t.term.trim().length).toBeGreaterThan(0);
      expect(t.short.trim().length).toBeGreaterThan(0);
      expect(t.body.length).toBeGreaterThan(0);
      expect(t.body.every((p) => p.trim().length > 0)).toBe(true);
      expect(glossaryCategories).toContain(t.category);
    }
  });

  it('every related slug resolves to another term (and not itself)', () => {
    for (const t of glossaryTerms) {
      for (const slug of t.related) {
        expect(getGlossaryTerm(slug), `${t.slug} → ${slug}`).toBeDefined();
        expect(slug).not.toBe(t.slug);
      }
      // relatedTerms mirrors that resolution.
      expect(relatedTerms(t).length).toBe(t.related.length);
    }
  });

  it('every pillar link is an internal, root-relative path', () => {
    for (const t of glossaryTerms) {
      if (t.pillar) expect(t.pillar.href).toMatch(/^\//);
    }
  });
});
