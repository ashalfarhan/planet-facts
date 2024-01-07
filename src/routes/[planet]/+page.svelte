<script lang="ts">
  import PlanetTabs from '$lib/components/PlanetTabs.svelte';
  import Stats from '$lib/components/Stats.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main class="mx-auto container flex-1 flex flex-col">
  <PlanetTabs planet={data.planet} />
  <section
    class="grid md:grid-cols-4 grid-cols-1 lg:gap-8 gap-4 lg:px-0 px-8 md:mt-0 mt-8 md:mt-0 mb-8"
  >
    <Stats label="ROTATION TIME" value={data.planet.rotation} />
    <Stats label="REVOLUTION TIME" value={data.planet.revolution} />
    <Stats label="RADIUS" value={data.planet.radius} />
    <Stats label="AVERAGE TEMP." value={data.planet.temperature} />
  </section>
</main>
