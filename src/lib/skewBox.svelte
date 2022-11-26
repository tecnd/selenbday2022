<script lang="ts">
  export let grow = false;
</script>

<div
  class="mt-4 mb-4 w-full max-w-screen-md border-4 bg-black/50 px-4 py-2 md:skew-x-12 md:border-x-6 md:px-10"
  class:flex-grow={grow}
>
  <div class="flex h-full flex-col md:-skew-x-12">
    <slot />
  </div>
</div>
