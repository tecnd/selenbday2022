<script lang="ts">
  import LoadingAnimation from "$lib/loadingAnimation.svelte";
</script>

<LoadingAnimation />
<slot />
<a href="/" class="fixed top-4 left-4"
  ><i class="fa-solid fa-arrow-left fa-2x text-selen" /></a
>

<style>
  i {
    text-shadow: 0 0 4px black;
  }
</style>
