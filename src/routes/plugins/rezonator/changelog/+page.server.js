import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
    throw redirect(307, 'https://docs.google.com/document/d/1sbZOBvLUCow4tQQkTk3-DAsr0EGJLUJuQerP0zP-QeY/edit?usp=sharing');
  }
}