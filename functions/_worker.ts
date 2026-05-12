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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/$/, '');

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
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
