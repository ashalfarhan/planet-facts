import { useState } from 'preact/hooks';
import { Button } from '@app/components/Button.tsx';
import ExternalLinkIcon from '@app/components/ExternalLinkIcon.tsx';
import { Planet } from '@app/types.ts';
import { asset } from '$fresh/runtime.ts';
import { tw } from 'twind';

type TabState = 'overview' | 'structure' | 'geology';

export default function PlanetTabs({ planet }: { planet: Planet }) {
  const [activeTab, setActiveTab] = useState<TabState>('overview');
  const largeImage = activeTab === 'geology'
    ? planet.images.overview
    : planet.images[activeTab];
  return (
    <section class='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:grid-rows-2 flex-1 place-content-center md:my-32 gap-y-8 lg:gap-x-0 gap-x-8 lg:px-0 md:px-8'>
      <div class='md:hidden grid grid-cols-3 px-4 text-[9px] border-b border-dark-grey'>
        <button
          class={tw(
            'py-5 border-b-4 text-light-grey motion-safe:transition-all focus:outline-none',
            {
              'border-accent text-white': activeTab === 'overview',
              'border-transparent': activeTab !== 'overview',
            },
          )}
          onClick={() => setActiveTab('overview')}
        >
          OVERVIEW
        </button>
        <button
          class={tw(
            'py-5 border-b-4 text-light-grey motion-safe:transition-all focus:outline-none',
            {
              'border-accent text-white': activeTab === 'structure',
              'border-transparent': activeTab !== 'structure',
            },
          )}
          onClick={() => setActiveTab('structure')}
        >
          STRUCTURE
        </button>
        <button
          class={tw(
            'py-5 border-b-4 text-light-grey motion-safe:transition-all focus:outline-none',
            {
              'border-accent text-white': activeTab === 'geology',
              'border-transparent': activeTab !== 'geology',
            },
          )}
          onClick={() => setActiveTab('geology')}
        >
          SURFACE
        </button>
      </div>
      <div class='md:col-span-2 md:row-span-2 place-self-center relative grid place-content-center h-full'>
        <img
          class='md:w-auto md:h-auto md:scale-100 scale-50'
          src={asset(largeImage)}
          alt={`${planet.name} Planet`}
        />
        {activeTab === 'geology'
          ? (
            <img
              class='absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-100 scale-50'
              src={asset(planet.images[activeTab])}
              alt={planet.name + ' Geology'}
              width={163}
              height={199}
            />
          )
          : null}
      </div>
      <div class='md:text-left text-center md:px-0 px-6'>
        <h1 class='font-antonio lg:text-7xl text-5xl uppercase'>
          {planet.name}
        </h1>
        <p class='mt-6 leading-7 lg:text-base text-xs'>
          {planet[activeTab].content}
        </p>
        <p class='mt-6 text-light-grey md:text-base text-xs'>
          Source:&nbsp;
          <a href={planet[activeTab].source} class='font-bold underline'>
            Wikipedia&nbsp;
            <ExternalLinkIcon />
          </a>
        </p>
      </div>
      <div class='md:flex hidden md:flex-col items-stretch gap-4 self-end'>
        <Button
          active={activeTab === 'overview'}
          onClick={() => setActiveTab('overview')}
        >
          <span class='text-light-grey md:inline hidden'>01</span> OVERVIEW
        </Button>
        <Button
          active={activeTab === 'structure'}
          onClick={() => setActiveTab('structure')}
        >
          <span class='text-light-grey md:inline hidden'>02</span>{' '}
          INTERNAL STRUCTURE
        </Button>
        <Button
          active={activeTab === 'geology'}
          onClick={() => setActiveTab('geology')}
        >
          <span class='text-light-grey md:inline hidden'>03</span>{' '}
          SURFACE GEOLOGY
        </Button>
      </div>
    </section>
  );
}
