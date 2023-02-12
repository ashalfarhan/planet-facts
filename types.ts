import planets from '@app/data.json' assert { type: 'json' };

export type Planet = typeof planets[number];

export type PlanetLink = Pick<Planet, 'name' | 'accent_color'>;
