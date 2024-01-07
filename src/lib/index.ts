// place files you want to import through the `$lib` alias in this folder.
import planets from './data.json' assert { type: 'json' };

export type Planet = (typeof planets)[number];

export type PlanetLink = Pick<Planet, 'name' | 'accent_color'>;
