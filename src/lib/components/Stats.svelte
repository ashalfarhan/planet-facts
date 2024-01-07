<script lang="ts">
  export let label: string;
  export let value: string;
</script>

<div
  class="lg:p-5 p-4 border-dark-grey border-1 flex md:flex-col md:justify-start justify-between md:items-stretch items-center gap-1"
>
  <span class="text-light-grey font-bold lg:text-xs text-[8px]">{label}</span>
  <span class="font-antonio lg:text-5xl uppercase">{value}</span>
</div>
