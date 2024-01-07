<button
  {...$$props}
  on:click
  class="flex font-bold px-7 py-3 text-sm gap-7 border lg:hover:bg-dark-grey border-dark-grey transition-colors items-center focus:outline-none"
  class:!bg-accent={$$props.active}
  class:border-none={$$props.active}
>
  <slot />
</button>
