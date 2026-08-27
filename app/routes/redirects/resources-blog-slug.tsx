import { redirect } from 'react-router';
import type { ClientLoaderFunctionArgs } from 'react-router';

// /resources/blog/:slug → /blog/:slug (the canonical blog path). This is a
// dynamic route with no enumerable path set, so under `ssr:false` it can't carry
// a build-time `loader` (that's only valid on prerendered routes). A
// `clientLoader` redirect matches the old SPA `<Navigate>` behavior it replaces —
// it fires on client navigation / SPA-fallback hydration.
export function clientLoader({ params }: ClientLoaderFunctionArgs) {
  throw redirect(`/blog/${params.slug ?? ''}`);
}

export default function Redirect() {
  return null;
}
