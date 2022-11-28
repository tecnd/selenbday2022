<script lang="ts">
  import LoadingAnimation from "$lib/loadingAnimation.svelte";
</script>

<LoadingAnimation />
<slot />
<a href="/" class="fixed top-4 left-4" aria-label="Back"
  ><i class="fa-solid fa-arrow-left fa-2x text-shadow text-selen" /></a
>
