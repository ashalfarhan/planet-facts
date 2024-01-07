<script lang="ts">
  import type { Planet } from '$lib';
  import Button from './Button.svelte';
  import ExternalIcon from './ExternalIcon.svelte';

  enum TabState {
    Overview = 'overview',
    Structure = 'structure',
    Geology = 'geology',
  }

  export let planet: Planet;

  let activeTab: TabState = TabState.Overview;

  $: mainImage = activeTab === TabState.Geology ? planet.images.overview : planet.images[activeTab];
</script>

<section
  class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:grid-rows-2 flex-1 place-content-center gap-y-8 lg:gap-x-0 gap-x-8 lg:px-0 md:px-8"
  style="--accent-color: {planet.accent_color}"
>
  <!-- <div class="md:hidden grid grid-cols-3 px-4 text-[9px] border-b border-dark-grey">
    {#each buttonTabs as buttonTab}
      <button
        class="py-5 border-b-4 text-light-grey motion-safe:transition-all focus:outline-none"
        class:border-accent={activeTab === buttonTab}
        class:text-white={activeTab === buttonTab}
        class:border-transparent={activeTab !== buttonTab}
        on:click={() => (activeTab = buttonTab)}
      >
        {buttonTab.toUpperCase()}
      </button>
    {/each}
  </div> -->
  <div
    class="md:col-span-2 md:row-span-2 place-self-center relative grid place-content-center h-full"
  >
    <img
      class="md:w-auto md:h-auto md:scale-100 scale-50"
      src={mainImage}
      alt={`${planet.name} Planet`}
    />
    {#if activeTab === 'geology'}
      <img
        class="absolute inset-y-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 md:scale-100 scale-50"
        src={planet.images[activeTab]}
        alt={planet.name + ' Geology'}
        width={163}
        height={199}
      />
    {/if}
  </div>
  <div class="md:text-left text-center md:px-0 px-6 mt-32">
    <h1 class="font-antonio lg:text-7xl text-5xl uppercase">
      {planet.name}
    </h1>
    <p class="mt-6 leading-7 lg:text-base text-xs">
      {planet[activeTab].content}
    </p>
    <p class="mt-6 text-light-grey md:text-base text-xs">
      Source:&nbsp;
      <a href={planet[activeTab].source} class="font-bold underline inline-flex items-center gap-2">
        Wikipedia&nbsp;
        <ExternalIcon />
      </a>
    </p>
  </div>
  <div class="md:flex hidden md:flex-col items-stretch gap-4">
    {#each Object.values(TabState) as tab, idx}
      <Button active={activeTab === tab} on:click={() => (activeTab = tab)}>
        <span class="text-light-grey md:inline hidden">0{idx + 1}</span>
        &nbsp;{tab.toUpperCase()}
      </Button>
    {/each}
  </div>
</section>
