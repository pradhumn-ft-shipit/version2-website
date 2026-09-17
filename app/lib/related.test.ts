import { describe, it, expect } from 'vitest';
import { selectRelatedPosts } from './relatedPosts';
import type { BlogIndexEntry } from '../../src/lib/blog';

// Minimal factory — only slug + topic matter to the selector; everything else is
// filler so we exercise the real BlogIndexEntry shape.
function post(slug: string, topic: string | null): BlogIndexEntry {
  return {
    slug,
    title: slug,
    image: null,
    imageAlt: '',
    date: null,
    author: 'x',
    excerpt: '',
    topic,
    persona: null,
    readingTime: null,
  };
}

const TRANSITIONS = 'Advisor Transitions & Repapering';
const COMMS = 'Client Communication & Notetaking';

describe('selectRelatedPosts', () => {
  it('returns up to 3 posts sharing the current topic, excluding the current slug', () => {
    const all = [
      post('current', TRANSITIONS),
      post('t1', TRANSITIONS),
      post('c1', COMMS),
      post('t2', TRANSITIONS),
      post('t3', TRANSITIONS),
      post('t4', TRANSITIONS),
    ];
    const related = selectRelatedPosts({ slug: 'current', topic: TRANSITIONS }, all);
    expect(related.map((p) => p.slug)).toEqual(['t1', 't2', 't3']);
    expect(related.map((p) => p.slug)).not.toContain('current');
    expect(related.map((p) => p.slug)).not.toContain('c1');
  });

  it('backfills to 3 by recency when fewer than 3 same-topic posts exist', () => {
    // pool is recency-ordered; only one same-topic post, so backfill the rest.
    const all = [
      post('current', TRANSITIONS),
      post('t1', TRANSITIONS),
      post('c1', COMMS),
      post('c2', COMMS),
    ];
    const related = selectRelatedPosts({ slug: 'current', topic: TRANSITIONS }, all);
    expect(related.map((p) => p.slug)).toEqual(['t1', 'c1', 'c2']);
  });

  it('never returns the current post and never duplicates a slug', () => {
    const all = [post('current', TRANSITIONS), post('t1', TRANSITIONS), post('t1', TRANSITIONS)];
    const related = selectRelatedPosts({ slug: 'current', topic: TRANSITIONS }, all);
    expect(related.filter((p) => p.slug === 'current')).toHaveLength(0);
    expect(new Set(related.map((p) => p.slug)).size).toBe(related.length);
  });

  it('two different-topic posts produce different related lists', () => {
    const all = [
      post('t1', TRANSITIONS),
      post('t2', TRANSITIONS),
      post('t3', TRANSITIONS),
      post('c1', COMMS),
      post('c2', COMMS),
      post('c3', COMMS),
    ];
    const forT = selectRelatedPosts({ slug: 't1', topic: TRANSITIONS }, all).map((p) => p.slug);
    const forC = selectRelatedPosts({ slug: 'c1', topic: COMMS }, all).map((p) => p.slug);
    expect(forT).not.toEqual(forC);
    expect(forT).toEqual(['t2', 't3', 'c1']);
    expect(forC).toEqual(['c2', 'c3', 't1']);
  });

  it('groups null-topic (uncategorized) posts together', () => {
    const all = [post('current', null), post('u1', null), post('t1', TRANSITIONS)];
    const related = selectRelatedPosts({ slug: 'current', topic: null }, all);
    // same "more-resources" bucket first, then recency backfill
    expect(related.map((p) => p.slug)).toEqual(['u1', 't1']);
  });

  // W4 — cornerstone (pillar) surfacing.
  const PILLAR = { slug: 'pillar', topicId: 'advisor-transitions-and-repapering' };

  it('surfaces a matching cornerstone FIRST for a same-category post', () => {
    const all = [
      post('current', TRANSITIONS),
      post('t1', TRANSITIONS),
      post('pillar', TRANSITIONS),
      post('t2', TRANSITIONS),
    ];
    const related = selectRelatedPosts({ slug: 'current', topic: TRANSITIONS }, all, 3, {
      cornerstones: [PILLAR],
    });
    expect(related[0].slug).toBe('pillar');
    expect(related.map((p) => p.slug)).toEqual(['pillar', 't1', 't2']);
  });

  it('never surfaces the cornerstone on the cornerstone post itself', () => {
    const all = [post('pillar', TRANSITIONS), post('t1', TRANSITIONS), post('t2', TRANSITIONS)];
    const related = selectRelatedPosts({ slug: 'pillar', topic: TRANSITIONS }, all, 3, {
      cornerstones: [PILLAR],
    });
    expect(related.map((p) => p.slug)).not.toContain('pillar');
    expect(related.map((p) => p.slug)).toEqual(['t1', 't2']);
  });

  it('does not surface a cornerstone for posts in a different category', () => {
    const all = [post('current', COMMS), post('c1', COMMS), post('pillar', TRANSITIONS)];
    const related = selectRelatedPosts({ slug: 'current', topic: COMMS }, all, 3, {
      cornerstones: [PILLAR],
    });
    // pillar is a different category — it only appears via recency backfill, not pinned first
    expect(related[0].slug).toBe('c1');
  });

  it('drops a cornerstone that is not present in the index (no broken link)', () => {
    const all = [post('current', TRANSITIONS), post('t1', TRANSITIONS)];
    const related = selectRelatedPosts({ slug: 'current', topic: TRANSITIONS }, all, 3, {
      cornerstones: [PILLAR],
    });
    expect(related.map((p) => p.slug)).toEqual(['t1']);
  });
});
