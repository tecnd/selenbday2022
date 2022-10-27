<script>
  import "../app.postcss";
  import "@fortawesome/fontawesome-free/css/fontawesome.css";
  import "@fortawesome/fontawesome-free/css/brands.css";
  import "@fortawesome/fontawesome-free/css/solid.css";
</script>

<div
  class="relative flex min-h-screen overflow-x-hidden border-t-4 border-t-selen bg-[url('/banner.png')] bg-cover bg-fixed bg-center text-white"
>
  <slot />
  <div
    class="fixed bottom-1 right-1 aspect-square w-20 bg-[url('/obsydia.webp')] bg-contain md:w-32"
  />
</div>
