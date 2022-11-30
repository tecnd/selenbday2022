<script lang="ts">
  import { fade } from "svelte/transition";
  import Hex from "$lib/hex.svelte";
  import LoadingAnimation from "$lib/loadingAnimation.svelte";
  import { afterNavigate } from "$app/navigation";

  import homeBg from "./home-bg-artwork.png?quality=95&webp";

  let playAnimation: boolean;
  afterNavigate(({ from }) => {
    playAnimation = from !== null;
  });
</script>

{#if playAnimation}
  <LoadingAnimation />
{:else}
  <!--Intro-->
  <div
    class="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-gray-900/50 px-2"
    transition:fade
  >
    <iframe
      class="mb-4 aspect-video w-full rounded sm:w-3/4 md:w-2/3 lg:w-4/5"
      src="https://www.youtube.com/embed/5pnS1zMq3O8"
      title="YouTube video player"
      allow="autoplay; picture-in-picture; fullscreen"
    />
    <div class="flex gap-4">
      <a
        href="https://drive.google.com/file/d/1YL3UES1kyOx9mkYTFw1OsMvallT22cZs/view"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded bg-gray-500 px-2 text-xl hover:bg-selen"
        >Download Animation</a
      >
      <a
        href="https://drive.google.com/file/d/1CJH1SzdpPujisdW9SjMj3vCw3OOp2u00/view"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-10 rounded bg-gray-500 px-2 text-xl hover:bg-selen"
        >Download Music</a
      >
      <button
        class="rounded bg-gray-500 px-2 text-xl hover:bg-selen"
        on:click={() => {
          playAnimation = true;
        }}>Skip Intro</button
      >
    </div>
  </div>
{/if}
<!--Backgrounds-->
<div
  class="pointer-events-none fixed top-1 left-0 -z-10 h-border-screen w-screen bg-cover bg-center"
  style:background-image="url({homeBg})"
/>
<!--Main Content-->
<main
  class="container flex max-w-screen-md grow flex-col items-center justify-center"
>
  <!--Title Text-->
  <div class="relative z-0 mb-14 mt-28">
    <h1 class="z-0 text-center text-4xl font-black uppercase md:text-7xl">
      Happy Birthday <span class="text-selen">Selen</span>
    </h1>
    <h2
      class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
    >
      Sele<span class="tracking-normal">n</span><br />Tatsuk<span
        class="tracking-normal">i</span
      >
    </h2>
  </div>
  <p class="z-10 my-6">
    A website designed by Selen Tatsuki’s dragoons celebrating her birthday!
  </p>
  <!--Hex layout-->
  <div
    class="mb-12 flex flex-col gap-12 md:mb-0 md:flex-row md:flex-wrap md:justify-center md:gap-0"
  >
    <a href="/about">
      <Hex>
        <i class="fa-solid fa-trophy fa-2x mb-3" />
        <p class="text-center uppercase">About</p>
      </Hex>
    </a>
    <a href="/quotes">
      <Hex>
        <i class="fa-solid fa-quote-left fa-2x mb-3" />
        <p class="text-center uppercase">Selen’s Quotes</p>
      </Hex>
    </a>
    <a href="/cakes">
      <Hex>
        <i class="fa-solid fa-cake-candles fa-2x mb-3" />
        <p class="text-center uppercase">Birthday Cakes</p>
      </Hex>
    </a>
    <a href="/dragoons">
      <Hex>
        <i class="fa-solid fa-dragon fa-2x mb-3" />
        <p class="text-center uppercase">Dragoon Generator</p>
      </Hex>
    </a>
  </div>
  <div
    class="flex flex-col gap-12 md:-mt-[51.94px] md:flex-row md:flex-wrap md:justify-center md:gap-0"
  >
    <a href="/music">
      <Hex>
        <i class="fa-solid fa-music fa-2x mb-3" />
        <p class="text-center uppercase">Music</p>
      </Hex>
    </a>
    <a href="/socials">
      <Hex>
        <i class="fa-brands fa-youtube fa-2x mb-3" />
        <p class="text-center uppercase">Socials</p>
      </Hex>
    </a>
    <a href="/credits">
      <Hex>
        <i class="fa-brands fa-discord fa-2x mb-3" />
        <p class="text-center uppercase">DPS and Credits</p>
      </Hex>
    </a>
  </div>
  <div class="grow" />
  <p class="text-shadow my-4 text-center text-sm">
    Selen Tatsuki artwork credit: (left) <a
      href="https://twitter.com/kamamesigogo123"
      class="hover:text-selen">@kamamesigogo123</a
    >
    | (right)
    <a href="https://twitter.com/fujiwarano_echi" class="hover:text-selen"
      >@fujiwarano_echi</a
    >
  </p>
</main>
