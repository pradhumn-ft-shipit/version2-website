import type { MetaDescriptor } from 'react-router';
import Home from '../../src/pages/Home';

// Per-page head metadata, mirroring what index.html shipped for the homepage.
// Ticket 004 generalizes this pattern (moving useSeo() output into route `meta`).
export function meta(): MetaDescriptor[] {
  const title = 'FastTrackr AI | Advisor transitions, finally built right.';
  const description =
    'FastTrackr AI is the AI transition engine for wealth management. Move advisor books in weeks, not months. Purpose-built for advisor transitions and shaped by consultants, operators, and RIA founders who move billions in client assets every year.';
  const ogDescription =
    'Move advisor books in weeks, not months. Purpose-built for advisor transitions.';
  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: 'https://www.fasttrackr.ai/' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.fasttrackr.ai/' },
    { property: 'og:site_name', content: 'FastTrackr AI' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: ogDescription },
    { property: 'og:image', content: 'https://www.fasttrackr.ai/logomark.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: ogDescription },
    { name: 'twitter:image', content: 'https://www.fasttrackr.ai/logomark.png' },
  ];
}

export default Home;
