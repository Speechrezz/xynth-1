import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
    throw redirect(307, 'https://docs.google.com/document/d/1_KTgJCL9kWUAKd0RhBk7BdjtmD0IM7xJJkeYsAhjFag/edit?usp=sharing');
  }
}