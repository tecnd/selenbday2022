<script>
  import "../app.postcss";
  import LoadingAnimation from "../components/loadingAnimation.svelte";
</script>

<div
  class="h-screen overflow-hidden border-t-4 border-t-selen bg-[url('/banner.jpg')] bg-cover bg-center text-white"
>
  <LoadingAnimation />
  <slot />
</div>
