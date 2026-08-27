import { createElement, forwardRef, useEffect, useRef, useState } from 'react';
import { m as fmMotion } from 'framer-motion';

/**
 * Hydration-safe drop-in for framer-motion's `m`.
 *
 * WHY THIS EXISTS (SSG migration, ticket 007 / plan Phase 6)
 * ---------------------------------------------------------
 * The site is prerendered to static HTML (React Router framework mode, `ssr:false`).
 * Framer-motion serializes an element's `initial` prop into that HTML, which broke
 * two goals of the migration:
 *
 *   1. `initial={{ opacity: 0 }}` entrances baked `opacity:0` into the prerendered
 *      body, so non-JS crawlers (and JS-off users) saw INVISIBLE content.
 *   2. `whileInView` entrances render visible on the server but apply `opacity:0`
 *      on the client's first render, which is a hydration mismatch (React #418).
 *
 * THE FIX
 * -------
 * Content must be VISIBLE BY DEFAULT; the entrance is a progressive enhancement.
 * This proxy wraps every `m.<tag>` so that:
 *
 *   - During SSR and the client's first (hydration) render, the hidden `initial`
 *     is suppressed (`initial={false}`) — the element renders at its final,
 *     visible state. Prerendered HTML shows full content and the client's first
 *     render matches the server, so there is no hydration mismatch.
 *   - Elements that FIRST mount AFTER hydration (interactive UI — mobile menu,
 *     FAQ accordions, tab panels inside <AnimatePresence>) keep their real
 *     `initial` from birth, so their enter/exit animations are untouched.
 *   - For entrance elements that mounted during hydration, once hydration is done
 *     we re-arm the real `initial` ONLY IF the element is off-screen — so the
 *     scroll-reveal (`whileInView`) or entrance still plays, WITHOUT a visible
 *     "content flashes away then back" on anything already on first paint.
 *
 * Everything else (animate, whileInView, whileHover, style, variants, refs,
 * event handlers) passes straight through, so `m.div`, `m.h2`, … behave and
 * type-check exactly as before — only the `initial` timing changes.
 */

// Flipped to true the moment the first hydration commit's effects run. Read at
// render time by each element to know whether it was born before or after
// hydration. Module-level is intentional: it is process/request-scoped on the
// server (always false there) and app-lifetime on the client.
let hydrationComplete = false;

function isHiddenInitial(initial: unknown): boolean {
  return initial != null && initial !== false && typeof initial === 'object';
}

function createGated(tag: string) {
  const Base = (fmMotion as unknown as Record<string, React.ElementType>)[tag];

  const Gated = forwardRef<unknown, Record<string, unknown>>(function Gated(props, forwardedRef) {
    const { initial, ...rest } = props;
    const gated = isHiddenInitial(initial);

    // Was hydration already finished when this element first mounted? If so it is
    // interactive UI (mounted on a user action) — leave it fully native.
    const bornAfterHydration = useRef(hydrationComplete);
    const [armed, setArmed] = useState(bornAfterHydration.current);
    const nodeRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      hydrationComplete = true;
      if (armed || !gated) return;
      const el = nodeRef.current;
      if (!el) {
        setArmed(true);
        return;
      }
      // Re-arm the entrance only when off-screen, so on-screen content that was
      // already painted visible is never re-hidden (no first-paint flash).
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      const vw = window.innerWidth || document.documentElement.clientWidth || 0;
      const inView = r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw;
      if (!inView) setArmed(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setRefs = (node: HTMLElement | null) => {
      nodeRef.current = node;
      if (typeof forwardedRef === 'function') forwardedRef(node);
      else if (forwardedRef) (forwardedRef as React.MutableRefObject<unknown>).current = node;
    };

    const effectiveInitial = gated ? (armed ? initial : false) : initial;

    return createElement(Base, {
      ...rest,
      ref: setRefs,
      key: armed ? 'armed' : 'ssr',
      initial: effectiveInitial,
    });
  });

  Gated.displayName = `m.${tag}`;
  return Gated;
}

const cache = new Map<string, React.ElementType>();

/**
 * `m` — hydration-safe framer-motion motion components. Typed identically to
 * framer-motion's own `m`, so existing `m.div` / `m.h2` usage type-checks
 * unchanged. Import this instead of `{ m } from 'framer-motion'`.
 */
export const m = new Proxy({} as typeof fmMotion, {
  get(_target, tag: string) {
    if (!cache.has(tag)) cache.set(tag, createGated(tag));
    return cache.get(tag);
  },
});
