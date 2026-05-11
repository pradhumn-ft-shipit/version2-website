import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  minHeight: string;
  rootMargin?: string;
};

export default function DeferredSection({
  children,
  minHeight,
  rootMargin = '300px',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (shouldMount) return;

    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldMount(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldMount, rootMargin]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: shouldMount ? undefined : minHeight,
        contentVisibility: shouldMount ? undefined : 'auto',
        containIntrinsicSize: shouldMount ? undefined : `1px ${minHeight}`,
      }}
    >
      {shouldMount ? children : null}
    </div>
  );
}
