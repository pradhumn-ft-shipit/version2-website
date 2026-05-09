import { handleContact, type ContactEnv } from './api/contact';

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

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    const target = REDIRECTS[url.pathname.replace(/\/$/, '')];
    if (target) {
      return Response.redirect(new URL(target, url.origin).toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
