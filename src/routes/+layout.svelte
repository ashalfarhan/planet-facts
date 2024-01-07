<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import '../app.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="flex flex-col md:h-screen relative overflow-hidden">
  <Header links={data.links} />
  <slot />
</div>
