<script lang="ts">
  import Hex from "../components/hex.svelte";
</script>

<div class="h-screen bg-[url('/home-bg-artwork.png')] bg-cover bg-center">
  <main
    class="container flex h-screen flex-col items-center justify-center border border-white md:max-w-screen-md"
  >
    <div class="relative z-0 mb-10">
      <h1 class="z-0 text-center text-4xl font-black uppercase md:text-7xl">
        Happy Birthday <span class="text-selen">Selen</span>
      </h1>
      <h2
        class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-8xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
      >
        Selen Tatsuki
      </h2>
    </div>
    <p class="z-10 font-serif">
      A website designed by Selen Tatsuki’s dragoons celebrating her birthday!
    </p>
    <div class="flex flex-row flex-wrap">
      <a href="/about">
        <Hex />
      </a>
      <Hex />
    </div>
  </main>
</div>
