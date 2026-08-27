import type { MetaDescriptor } from 'react-router';
import NotFound from '../../src/pages/NotFound';

// Catch-all (`*`). Emits robots noindex into the static <head> so crawlers that
// don't run JS still see it (the component also adds it on the client via
// useEffect for SPA-fallback hits). No canonical/OG — this page isn't indexable.
export function meta(): MetaDescriptor[] {
  return [{ title: 'Page Not Found | FastTrackr AI' }, { name: 'robots', content: 'noindex' }];
}

export default NotFound;
