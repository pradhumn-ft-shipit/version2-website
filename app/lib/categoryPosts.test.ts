import { describe, it, expect } from 'vitest';
import { postsInCategory } from './categoryPosts';
import { getCategoryBySlug } from '../../src/lib/blogCategories';
import type { BlogIndexEntry } from '../../src/lib/blog';

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

describe('postsInCategory', () => {
  it('returns only posts whose topic resolves to the given category slug', () => {
    const all = [
      post('t1', TRANSITIONS),
      post('c1', COMMS),
      post('t2', 'advisor-transitions-and-repapering'), // id form also resolves
    ];
    const got = postsInCategory(all, 'advisor-transitions-and-repapering').map((p) => p.slug);
    expect(got).toEqual(['t1', 't2']);
  });

  it('collects null / unknown topics under the more-resources catch-all', () => {
    const all = [post('a', null), post('b', 'Totally Made Up'), post('t1', TRANSITIONS)];
    const got = postsInCategory(all, 'more-resources').map((p) => p.slug);
    expect(got).toEqual(['a', 'b']);
  });

  it('preserves input (recency) order', () => {
    const all = [post('t3', TRANSITIONS), post('t1', TRANSITIONS), post('t2', TRANSITIONS)];
    const got = postsInCategory(all, 'advisor-transitions-and-repapering').map((p) => p.slug);
    expect(got).toEqual(['t3', 't1', 't2']);
  });

  it('returns [] for an unknown category slug', () => {
    expect(postsInCategory([post('t1', TRANSITIONS)], 'no-such-category')).toEqual([]);
  });
});

describe('getCategoryBySlug', () => {
  it('resolves a known hub slug to its category with hub copy', () => {
    const cat = getCategoryBySlug('advisor-transitions-and-repapering');
    expect(cat?.title).toBe('Advisor Transitions & Repapering');
    expect(cat?.capsule).toBeTruthy();
  });

  it('resolves the more-resources catch-all', () => {
    expect(getCategoryBySlug('more-resources')?.id).toBe('more-resources');
  });

  it('returns undefined for an unknown slug (→ 404)', () => {
    expect(getCategoryBySlug('nope')).toBeUndefined();
    expect(getCategoryBySlug(null)).toBeUndefined();
  });
});
