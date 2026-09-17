import { describe, it, expect } from 'vitest';
import {
  AUTHORS,
  authorSlugs,
  getAuthorBySlug,
  resolveAuthor,
  isReassigned,
  postsByAuthor,
  TEAM_BYLINE,
} from './authors';

type P = { slug: string; author: string; title?: string; topic?: string | null };

describe('authors roster', () => {
  it('exposes the three real operators with unique kebab-case slugs', () => {
    expect(AUTHORS.length).toBe(3);
    for (const a of AUTHORS) {
      expect(a.slug).toMatch(/^[a-z]+(-[a-z]+)*$/);
      expect(a.name.length).toBeGreaterThan(0);
    }
    expect(new Set(authorSlugs).size).toBe(AUTHORS.length);
  });

  it('getAuthorBySlug resolves a known slug and rejects an unknown one', () => {
    expect(getAuthorBySlug('vineet-mohan')?.name).toBe('Vineet Mohan');
    expect(getAuthorBySlug('nobody')).toBeUndefined();
  });
});

describe('resolveAuthor', () => {
  it('keeps a post already bylined to a named operator', () => {
    const post: P = { slug: 'x', author: 'Tejas Patil' };
    expect(resolveAuthor(post).slug).toBe('tejas-patil');
    expect(isReassigned(post)).toBe(false);
  });

  it('reassigns a generic-team byline to one of the named operators', () => {
    const post: P = { slug: 'some-transition-post', author: TEAM_BYLINE };
    const a = resolveAuthor(post);
    expect(authorSlugs).toContain(a.slug);
    expect(isReassigned(post)).toBe(true);
  });

  it('pins transition/onboarding posts to Pradhumn', () => {
    // by category topic
    expect(
      resolveAuthor({ slug: 'x', author: TEAM_BYLINE, topic: 'Advisor Transitions & Repapering' }).slug,
    ).toBe('pradhumn-vijayvargiya');
    // by onboarding keyword in the title
    expect(
      resolveAuthor({ slug: 'y', author: TEAM_BYLINE, title: 'A client onboarding checklist' }).slug,
    ).toBe('pradhumn-vijayvargiya');
    // by transition keyword in the slug
    expect(
      resolveAuthor({ slug: 'zero-nigo-advisor-transition-300m-book', author: TEAM_BYLINE }).slug,
    ).toBe('pradhumn-vijayvargiya');
  });

  it('keeps an explicit named byline even on a transition post', () => {
    expect(
      resolveAuthor({ slug: 'x', author: 'Vineet Mohan', topic: 'Advisor Transitions & Repapering' }).slug,
    ).toBe('vineet-mohan');
  });

  it('is deterministic — the same slug always resolves to the same author', () => {
    const a = resolveAuthor({ slug: 'repapering-101', author: TEAM_BYLINE });
    const b = resolveAuthor({ slug: 'repapering-101', author: TEAM_BYLINE });
    expect(a.slug).toBe(b.slug);
  });

  it('distributes the generic backlog across all three operators', () => {
    const seen = new Set<string>();
    for (let i = 0; i < 300; i++) {
      seen.add(resolveAuthor({ slug: `post-${i}`, author: TEAM_BYLINE }).slug);
    }
    expect(seen.size).toBe(3);
  });

  it('treats the bare "FastTrackr AI" byline as generic too', () => {
    expect(isReassigned({ author: 'FastTrackr AI' })).toBe(true);
  });
});

describe('postsByAuthor', () => {
  it('returns every post that resolves to the given author', () => {
    const posts: P[] = [
      { slug: 'p1', author: 'Vineet Mohan' },
      { slug: 'p2', author: TEAM_BYLINE },
      { slug: 'p3', author: TEAM_BYLINE },
    ];
    const all = authorSlugs.flatMap((s) => postsByAuthor(posts, s));
    expect(all.length).toBe(posts.length);
    for (const slug of authorSlugs) {
      for (const p of postsByAuthor(posts, slug)) {
        expect(resolveAuthor(p).slug).toBe(slug);
      }
    }
  });
});
