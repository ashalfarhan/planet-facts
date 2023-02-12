import { tw } from 'twind';
import type { PlanetLink } from '@app/types.ts';
import { useState } from 'preact/hooks';

export default function Header(
  { url, links }: {
    url: string;
    links: PlanetLink[];
  },
) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header class='flex items-center lg:flex-row lg:pt-0 md:pt-8 md:pb-0 pb-4 pt-4 md:flex-col justify-between flex-row md:px-8 px-6 border-b-1 border-light-grey sticky top-0 z-10 bg-dark'>
      <span class='font-antonio md:text-3xl text-2xl'>THE PLANETS</span>
      <button
        class='md:hidden w-6 h-6 inline-flex items-center focus:outline-none'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          id='burger-bar'
          data-active={menuOpen}
          class='w-full h-[3px] bg-white block relative'
        />
      </button>
      <nav
        class={tw(
          'flex items-stretch md:gap-8 gap-0 md:flex-row flex-col md:static absolute left-0 top-0 md:w-auto w-full bg-dark top-[65px] motion-safe:transition-all z-20 md:h-auto h-[calc(100vh-64px)] overflow-y-auto md:px-0 px-6 md:translate-x-0 duration-300',
          [
            menuOpen ? 'translate-x-0' : '-translate-x-full',
          ],
        )}
      >
        {links.map((planet) => (
          <a
            key={planet.name}
            href={`/${planet.name}`}
            style={{ '--accent-color': planet.accent_color }}
            class={tw(
              'uppercase font-bold text-xs md:text-sm text-light-grey tracking-widest md:py-8 py-5 lg:border-t-4 hover:border-accent transition-colors md:inline inline-flex items-center gap-4',
              [
                url.includes(planet.name)
                  ? 'border-accent'
                  : 'border-transparent',
              ],
            )}
          >
            <span class='md:hidden block w-5 h-5 rounded-full bg-accent' />
            {planet.name}
            <svg
              width='6'
              height='10'
              viewBox='0 0 6 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              class='md:hidden ml-auto'
            >
              <path opacity='0.4' d='M1 1L5 5L1 9' stroke='white' />
            </svg>
          </a>
        ))}
      </nav>
    </header>
  );
}
