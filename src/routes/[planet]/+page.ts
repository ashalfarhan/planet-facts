import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import planets from '$lib/data.json';

export const load: PageLoad = ({ params }) => {
  const planet = planets.find((p) => p.name.toLowerCase() === params.planet.toLowerCase());
  if (!planet) return redirect(303, '/earth');
  return {
    planet,
    planetLinks: planets.map((p) => ({
      name: p.name,
      accent_color: p.accent_color,
    })),
  };
};
