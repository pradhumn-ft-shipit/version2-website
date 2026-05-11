import indexJson from '../../public/blog-data/index.json';

export const onRequestGet: PagesFunction = () =>
  new Response(JSON.stringify(indexJson), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=300, s-maxage=300',
    },
  });
