import type { LayoutLoad } from './$types';
import planets from '$lib/data.json';

export const prerender = true;

export const load: LayoutLoad = () => {
  return {
    links: planets.map(p => ({
      name: p.name,
      accent_color: p.accent_color,
    })),
  };
};
