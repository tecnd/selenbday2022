<script lang="ts">
  import DragoonLayer from "$lib/dragoonLayer.svelte";
  import SkewBox from "$lib/skewBox.svelte";

  interface Dragoon {
    author: string | number;
    backgroundColor: string | number;
    baseColor: string | number;
    clothes: string | number;
    comment: string | number;
    eye: string | number;
    frame: string | number;
    handItem: string | number;
    hat: string | number;
    horns: string | number;
    moustache: string | number;
  }
  async function awaitDragoons(): Promise<Dragoon[]> {
    const res = await fetch("https://dragoon.selen2022.com/export").then(
      (r) => {
        return r.json();
      }
    );

    return JSON.parse(res)["response"];
  }
</script>

<main
  class="container flex min-h-border-screen flex-col items-center justify-center"
>
  <div class="relative z-0 mt-14 mb-8">
    <h1 class="z-0 text-center text-4xl font-black uppercase md:text-6xl">
      Dragoon <span class="text-selen">Generator</span>
    </h1>
    <h2
      class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
    >
      Message<span class="tracking-normal">s</span>
    </h2>
  </div>

  <p class="mb-4">Create your own personalized dragoon and leave a message!</p>
  <a
    href="https://dragoon.selen2022.com"
    class="mb-6 rounded border-2 px-2 text-lg font-black uppercase hover:bg-white hover:text-selen"
    >Create Now</a
  >
  <h2 class="mb-4 text-center text-4xl font-black uppercase md:text-6xl">
    Dragoon Messages
  </h2>
  <div class="grid w-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
    {#await awaitDragoons()}
      {#each { length: 5 } as _}
        <div class="flex flex-col items-center mx-2">
          <div
            class="relative z-10 w-48 h-48 flex-none items-center md:w-72 md:h-72"
          />
          <SkewBox grow={true}>
            <span class="mb-1">
              <span class="bg-white inline-block w-2/5 h-4 rounded-full" />
              <span class="bg-white inline-block w-2/5 h-4 rounded-full" />
              <span class="bg-white inline-block w-1/6 h-4 rounded-full" />
            </span>
            <span>
              <span class="bg-white inline-block w-1/6 h-4 rounded-full" />
              <span class="bg-white inline-block w-2/6 h-4 rounded-full" />
              <span class="bg-white inline-block w-2/6 h-4 rounded-full" />
            </span>
            <div class="flex-grow" />
            <p class="text-right">—A. Dragoon</p>
          </SkewBox>
        </div>
      {/each}
    {:then dragoons}
      {#each dragoons as dragoon}
        <div class="flex flex-col items-center mx-2">
          <div
            class="relative z-10 w-48 h-48 flex-none items-center md:w-72 md:h-72"
            style:background-color={dragoon.backgroundColor}
          >
            <DragoonLayer src={dragoon.frame} layer="frame" />
            <DragoonLayer src={dragoon.handItem} layer="handItem" />
            <DragoonLayer src={dragoon.hat} layer="hat" />
            <DragoonLayer src={dragoon.moustache} layer="moustache" />
            <DragoonLayer src={dragoon.eye} layer="eye" />
            <DragoonLayer src={dragoon.clothes} layer="clothes" />
            <DragoonLayer src={dragoon.horns} layer="horns" />
          </div>
          <SkewBox grow={true}>
            <p>{dragoon.comment}</p>
            <div class="flex-grow" />
            <p class="text-right">—{dragoon.author}</p>
          </SkewBox>
        </div>
      {/each}
    {/await}
  </div>
  <a
    href="https://dragoon.selen2022.com/all"
    class="mb-6 rounded border-2 px-2 text-lg font-black uppercase hover:bg-white hover:text-selen"
    >See More</a
  >
</main>
