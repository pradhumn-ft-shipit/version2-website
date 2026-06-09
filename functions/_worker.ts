import { handleContact, type ContactEnv } from './api/contact';
import indexJson from '../public/blog-data/index.json';

interface Env extends ContactEnv {
  ASSETS: Fetcher;
}

const REDIRECTS: Record<string, string> = {
  '/fpa': '/contact',
  '/aon': '/contact',
  '/onepagecrm': '/contact',
};

// The site is served from Render (fasttrackr.ai); this worker stays on
// Cloudflare (*.pages.dev) and serves /api/contact cross-origin. Allow the
// production origins to call it.
const ALLOWED_ORIGINS = new Set([
  'https://fasttrackr.ai',
  'https://www.fasttrackr.ai',
  // Temporary: lets the form be tested from the Render preview URL before the
  // DNS cutover. Safe to remove once fasttrackr.ai points at Render.
  'https://version2-website.onrender.com',
]);

const corsHeaders = (origin: string | null): Record<string, string> => {
  const allowed = origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://fasttrackr.ai';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/$/, '');
    const origin = request.headers.get('Origin');

    // CORS preflight for the cross-origin contact form on Render.
    if (url.pathname === '/api/contact' && request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      const res = await handleContact(request, env);
      const withCors = new Response(res.body, res);
      for (const [k, v] of Object.entries(corsHeaders(origin))) {
        withCors.headers.set(k, v);
      }
      return withCors;
    }

    if (url.pathname === '/api/blog-index' && request.method === 'GET') {
      return new Response(JSON.stringify(indexJson), {
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, max-age=300, s-maxage=300',
        },
      });
    }

    const target = REDIRECTS[pathname];
    if (target) {
      return Response.redirect(new URL(target, url.origin).toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
