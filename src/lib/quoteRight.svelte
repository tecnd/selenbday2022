<script lang="ts">
  import type { Quote } from "$lib/interfaces";
  export let quote: Quote;
  export let playAudio: (src: string) => void;
</script>

<div class="relative z-0 flex w-full lg:flex-row-reverse">
  <button
    on:click={() => playAudio(quote.audioLink)}
    class="group relative z-10 flex-none bg-contain"
  >
    <img src={quote.image} alt="hex" class="w-24 md:w-auto" />
    <i
      class="fa-solid fa-play absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl opacity-40 transition-opacity duration-300 ease-in-out group-hover:opacity-100 md:text-7xl"
    />
  </button>
  <div
    class="z-0 my-3 -ml-12 mr-4 flex-grow border-4 bg-black/50 py-3 pr-7 pl-16 md:-ml-20 md:skew-x-12 md:border-x-6 md:pl-24 lg:-mr-20 lg:ml-4 lg:pl-7 lg:pr-24"
  >
    <div class="flex h-full flex-col justify-evenly md:-skew-x-12">
      <p class="mb-1 text-sm">{quote.quote}</p>
      <div class="flex font-serif text-sm">
        <p class="font-bold text-selen">-Selen Tatsuki</p>
        <span class="w-4 flex-grow" />
        <p class="text-selen">
          art by <nobr>
            <a href={quote.artistLink} class="text-white hover:text-selen"
              >{quote.artist}</a
            >
          </nobr>
        </p>
      </div>
    </div>
  </div>
</div>
