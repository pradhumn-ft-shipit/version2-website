// Canonical author roster + resolution — the single source of truth for named
// authorship, /authors/<slug> pages, and the Person schema on posts (W5,
// website-visibility program, E-E-A-T layer).
//
// WHY A RESOLVER (not 460 edited JSON files): ~460 posts still carry the generic
// "FastTrackr AI Team" byline. Rather than hand-mutate every content JSON — hard
// to review, easy to get wrong — the byline is resolved to a named operator at
// render/build time from this one file. That keeps the whole reassignment in a
// single reviewable place, deterministic (so prerender is stable), and reversible
// before go-live. The specific person a generic post maps to is a *review
// surface*: leadership can pin any post to a chosen author here before WZ.
//
// LEADERSHIP PIN (2026-09-17): transition + onboarding content — the company's
// core subject and its highest-YMYL surface — is bylined to Pradhumn. Only the
// generic-team backlog is pinned; posts already bylined to a named operator keep
// that byline. Everything else still spreads across the roster by slug hash.
//
// HUMAN-IN-LOOP: bios, job titles, credentials and LinkedIn URLs are real facts
// about real people and MUST NOT be invented (YMYL). Names and headshots are
// confirmed; the rest is omitted until leadership supplies it, and the UI renders
// only the fields that are present (no placeholder text).

export interface Author {
  /** URL slug: /authors/<slug>. Unique, kebab-case. */
  slug: string;
  /** Display byline / headword. The one fact we can state today. */
  name: string;
  /** Job title → Person.jobTitle. Omitted until leadership provides it. */
  title?: string;
  /** Short bio paragraph. Omitted until leadership provides it. */
  bio?: string;
  /** LinkedIn (or other profile) URL → Person.sameAs. Omitted until provided. */
  linkedIn?: string;
  /** Headshot path under public/author-images/. */
  photo?: string;
  /** Professional credential (e.g. a licence) for the reviewer line. Omitted until provided. */
  credential?: string;
}

import { resolveCategoryId } from './blogCategories';

/** The generic byline W5 replaces with named authorship. */
export const TEAM_BYLINE = 'FastTrackr AI Team';

/** The operator transition + onboarding content is pinned to (leadership call). */
const PRADHUMN_SLUG = 'pradhumn-vijayvargiya';

/**
 * The real operators already bylined across the library (Vineet ×11, Tejas ×8,
 * Pradhumn ×6 at time of writing). Names and headshots are confirmed; bios, job
 * titles, credentials and LinkedIn URLs are still owed (leadership to supply) and
 * are intentionally omitted rather than fabricated (YMYL) — the UI renders only
 * what is present.
 */
export const AUTHORS: Author[] = [
  { slug: 'vineet-mohan', name: 'Vineet Mohan', photo: '/author-images/vineet-mohan.jpeg' },
  { slug: 'tejas-patil', name: 'Tejas Patil', photo: '/author-images/tejas-patil.jpeg' },
  {
    slug: 'pradhumn-vijayvargiya',
    name: 'Pradhumn Vijayvargiya',
    photo: '/author-images/pradhumn-vijayvargiya.jpeg',
  },
];

const BY_NAME = new Map(AUTHORS.map((a) => [a.name, a]));
const BY_SLUG = new Map(AUTHORS.map((a) => [a.slug, a]));

/** Every author slug — feeds the /authors/<slug> prerender enumeration. */
export const authorSlugs: string[] = AUTHORS.map((a) => a.slug);

export function getAuthorBySlug(slug: string): Author | undefined {
  return BY_SLUG.get(slug);
}

/** A post as seen by the resolver — only the fields it reads. */
export type AuthoredPost = {
  slug: string;
  author: string;
  title?: string;
  topic?: string | null;
  persona?: string | null;
};

/**
 * Stable 32-bit hash of a slug so a generic-byline post always maps to the same
 * operator (prerender-stable) and the backlog spreads evenly across the roster.
 */
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (Math.imul(h, 31) + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

// Transition + onboarding signals — the topic (via the canonical category) plus
// slug/title keywords that catch null-topic legacy posts.
const TRANSITION_ONBOARDING_PATTERNS: RegExp[] = [
  /onboarding/i,
  /repaper/i,
  /transition/i,
  /breakaway/i,
  /\bACATS\b/i,
  /\bNIGO\b/i,
  /\bTOA\b/i,
  /transfer[- ]of[- ]asset/i,
];

/** Whether a post is transition/onboarding content (→ pinned to Pradhumn). */
export function isTransitionOrOnboarding(post: AuthoredPost): boolean {
  if (resolveCategoryId(post.topic ?? null) === 'advisor-transitions-and-repapering') {
    return true;
  }
  const haystack = `${post.slug} ${post.title ?? ''} ${post.topic ?? ''}`;
  return TRANSITION_ONBOARDING_PATTERNS.some((re) => re.test(haystack));
}

/**
 * Resolve a post's named author. A post already bylined to a known operator
 * keeps that operator; transition/onboarding content is pinned to Pradhumn; any
 * remaining generic-team post is assigned deterministically so it, too, gets a
 * named human author.
 */
export function resolveAuthor(post: AuthoredPost): Author {
  const named = BY_NAME.get(post.author);
  if (named) return named;
  if (isTransitionOrOnboarding(post)) return BY_SLUG.get(PRADHUMN_SLUG)!;
  return AUTHORS[hashSlug(post.slug) % AUTHORS.length];
}

/** True when the post's stored byline is NOT a named operator (i.e. W5 reassigns it). */
export function isReassigned(post: { author: string }): boolean {
  return !BY_NAME.has(post.author);
}

/** Every post that resolves to `slug` — the author page's post list. */
export function postsByAuthor<T extends AuthoredPost>(posts: T[], slug: string): T[] {
  return posts.filter((p) => resolveAuthor(p).slug === slug);
}
