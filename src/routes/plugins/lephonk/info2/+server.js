import info_json from './info.json'
 
/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  return new Response(JSON.stringify(info_json))
}