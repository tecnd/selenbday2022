<script lang="ts">
  import Hex from "$lib/hex.svelte";
  let innerWidth:number;
</script>

<svelte:window bind:innerWidth />

<div
  class="pointer-events-none absolute top-0 left-0 h-full w-screen bg-[url('/home-bg-artwork.png')] bg-cover bg-center"
/>
<div
  class="pointer-events-none absolute top-0 left-0 h-full w-screen bg-gray-900 opacity-50"
/>
<main
  class="container flex grow flex-col items-center justify-center md:max-w-screen-md"
>
  <div class="relative z-0 my-10">
    <h1 class="z-0 text-center text-4xl font-black uppercase md:text-7xl">
      Happy Birthday <span class="text-selen">Selen</span>
    </h1>
    <h2
      class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
    >
      Selen Tatsuki
    </h2>
  </div>
  <p class="z-10 font-serif">
    A website designed by Selen Tatsuki’s dragoons celebrating her birthday!
  </p>
  {#if innerWidth < 768}
  <div class="flex flex-col gap-12">
    <a href="/about">
      <Hex>
        <i class="fa-solid fa-trophy fa-2x mb-3" />
        <p class="uppercase">about</p>
      </Hex>
    </a>
    <Hex>
      <i class="fa-solid fa-quote-left fa-2x mb-3"></i>
      <p class="text-center uppercase">Selen's Quotes</p>
    </Hex>
    <Hex>
      <i class="fa-solid fa-cake-candles fa-2x mb-3"></i>
      <p class="text-center uppercase">Birthday Cakes</p>
    </Hex>
    <Hex>
      <i class="fa-solid fa-dragon fa-2x mb-3"></i>
      <p class="text-center uppercase">Dragoon Generator</p>
    </Hex>
    <Hex>
      <i class="fa-solid fa-music fa-2x mb-3"></i>
      <p class="text-center uppercase">Music</p>
    </Hex>
    <Hex>
      <i class="fa-brands fa-youtube fa-2x mb-3"></i>
      <p class="text-center uppercase">Socials</p>
    </Hex>
    <Hex>
      <i class="fa-brands fa-discord fa-2x mb-3"></i>
      <p class="text-center uppercase">DPS and Credits</p>
    </Hex>
  </div>
  {:else}
  <div class="flex flex-row flex-wrap justify-center">
    <a href="/about">
      <Hex>
        <i class="fa-solid fa-trophy fa-2x mb-3" />
        <p class="text-center uppercase">About</p>
      </Hex>
    </a>
    <Hex>
      <i class="fa-solid fa-quote-left fa-2x mb-3"></i>
      <p class="text-center uppercase">Selen's Quotes</p>
    </Hex>
    <Hex>
      <i class="fa-solid fa-cake-candles fa-2x mb-3"></i>
      <p class="text-center uppercase">Birthday Cakes</p>
    </Hex>
    <Hex>
      <i class="fa-solid fa-dragon fa-2x mb-3"></i>
      <p class="text-center uppercase">Dragoon Generator</p>
    </Hex>
  </div>
  <div class="flex flex-row flex-wrap justify-center -mt-[51.94px]">
    <Hex>
      <i class="fa-solid fa-music fa-2x mb-3"></i>
      <p class="text-center uppercase">Music</p>
    </Hex>
    <Hex>
      <i class="fa-brands fa-youtube fa-2x mb-3"></i>
      <p class="text-center uppercase">Socials</p>
    </Hex>
    <Hex>
      <i class="fa-brands fa-discord fa-2x mb-3"></i>
      <p class="text-center uppercase">DPS and Credits</p>
    </Hex>
  </div>
  {/if}
</main>
