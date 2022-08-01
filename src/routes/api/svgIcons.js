import svgIcons from '../../data/svgInfo.json';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const GET = async ()=> ({
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: {
      svgIcons
    }
  })