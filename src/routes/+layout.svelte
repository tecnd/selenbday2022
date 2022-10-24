<script>
  import "../app.postcss";
  import LoadingAnimation from "../components/loadingAnimation.svelte";
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/cbe5f61c01.js"
    crossorigin="anonymous"></script>
</svelte:head>

<div
  class="h-screen overflow-x-hidden border-t-4 border-t-selen bg-[url('/banner.jpg')] bg-cover bg-center text-white"
>
  <LoadingAnimation />
  <slot />
</div>
