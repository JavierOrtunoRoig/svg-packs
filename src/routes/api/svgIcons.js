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

/** @type {import('@sveltejs/kit').RequestHandler} */
export const PUT = async ({url})=> {

  const id = Number(url.searchParams.get('id'));
  const svg = svgIcons.filter(svg => svg.id === id);

  if (svg.length === 0) throw new Error('SVG not found');
  if (svg.length !== 1) throw new Error('Too many SVGs found');

  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: {
      svg: svg[0]
    }
  }
}