<script lang="ts">
  import "../app.postcss";
  import "@fortawesome/fontawesome-free/css/fontawesome.css";
  import "@fortawesome/fontawesome-free/css/brands.css";
  import "@fortawesome/fontawesome-free/css/solid.css";

  import banner from "./banner.png?quality=95&webp";
  import obsydia from "./obsydia.webp?quality=95&w=128&webp";
</script>

<div
  class="relative flex min-h-screen flex-col overflow-x-hidden border-t-4 border-t-selen text-white"
>
  <div
    class="fixed -z-10 h-screen w-full bg-cover bg-center"
    style:background-image="url({banner})"
  />
  <slot />
  <div
    class="pointer-events-none fixed bottom-1 right-1 aspect-square w-20 bg-contain md:w-32"
    style:background-image="url({obsydia})"
  />
</div>
