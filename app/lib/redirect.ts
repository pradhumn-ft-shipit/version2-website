import { redirect } from 'react-router';

/**
 * Build a redirect loader for a redirect-only route module.
 *
 * These routes replace the old `<Navigate to=… replace />` elements from
 * src/App.tsx. Used as both `loader` and `clientLoader`:
 *   - as `loader` it runs at BUILD TIME during prerendering, so the path is
 *     emitted as a real redirect a non-JS crawler follows (better than the old
 *     SPA-only `<Navigate>`, which needed JS to run);
 *   - as `clientLoader` it fires on in-app client navigations to the same path.
 */
export function redirectLoader(to: string) {
  return () => {
    throw redirect(to);
  };
}
