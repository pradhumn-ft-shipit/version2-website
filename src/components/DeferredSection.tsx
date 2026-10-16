import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  minHeight: string;
  id?: string;
};

/**
 * Below-the-fold section wrapper. Children are ALWAYS rendered, so they land in
 * the prerendered HTML: visitors see real content while JS is still loading, and
 * crawlers that don't run JS can read it.
 *
 * (It used to mount children only after an IntersectionObserver fired, which
 * left ~9,500px of empty placeholder in the static HTML. On slow phones that
 * meant scrolling into blank space until hydration finished.)
 *
 * `content-visibility: auto` still lets the browser skip style/layout/paint for
 * off-screen sections. `contain-intrinsic-size: auto <h>` reserves an estimated
 * height until the section has rendered once, then remembers its real size, so
 * the scrollbar doesn't jump.
 */
export default function DeferredSection({ children, minHeight, id }: Props) {
  return (
    <div
      id={id}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: `auto ${minHeight}`,
      }}
    >
      {children}
    </div>
  );
}
