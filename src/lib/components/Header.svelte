<script lang="ts">
  import { page } from '$app/stores';

  let menuOpen = false;

  export let links: Array<{
    name: string;
    accent_color: string;
  }>;
</script>

<header
  class="flex items-center lg:flex-row lg:pt-0 md:pt-8 md:pb-0 pb-4 pt-4 md:flex-col justify-between flex-row md:px-8 px-6 border-b-1 border-light-grey sticky top-0 z-10 bg-dark sticky top-0"
>
  <a href="/" class="font-antonio md:text-3xl text-2xl">THE PLANETS</a>
  <button
    class="md:hidden w-6 h-6 inline-flex items-center focus:outline-none"
    on:click={() => (menuOpen = !menuOpen)}
  >
    <span id="burger-bar" data-active={menuOpen} class="w-full h-[3px] bg-white block relative" />
  </button>
  <nav
    class="flex items-stretch md:gap-8 gap-0 md:flex-row flex-col md:static absolute left-0 top-0 md:w-auto w-full bg-dark top-[65px] motion-safe:transition-all z-20 md:h-auto h-[calc(100vh-64px)] overflow-y-auto md:px-0 px-6 md:translate-x-0 duration-300"
    class:translate-x-0={menuOpen}
    class:-translate-x-full={!menuOpen}
  >
    {#each links as link}
      <a
        href={`/${link.name.toLowerCase()}`}
        style="--accent-color: {link.accent_color}"
        class="uppercase font-bold text-xs md:text-sm text-light-grey tracking-widest md:py-8 py-5 lg:border-t-4 hover:border-accent transition-colors md:inline inline-flex items-center gap-4"
        class:border-accent={$page.url.pathname.toLowerCase().includes(link.name.toLowerCase())}
        class:border-transparent={!$page.url.pathname
          .toLowerCase()
          .includes(link.name.toLowerCase())}
      >
        <span class="md:hidden block w-5 h-5 rounded-full bg-accent" />
        {link.name}
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="md:hidden ml-auto"
        >
          <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
        </svg>
      </a>
    {/each}
  </nav>
</header>
