<script>
  import "../app.postcss";
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/cbe5f61c01.js"
    crossorigin="anonymous"></script>
</svelte:head>

<div
  class="relative flex min-h-screen overflow-x-hidden border-t-4 border-t-selen bg-[url('/banner.jpg')] bg-cover bg-center text-white"
>
  <slot />
</div>
