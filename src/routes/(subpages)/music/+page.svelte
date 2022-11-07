<script lang="ts">
  interface Artist {
    name: string;
    image: string;
    link: string;
  }
  interface Music {
    title: string;
    artist: Artist;
    url: string;
  }
  const Tachibana: Artist = {
    name: "Tachibana",
    image: "/artists/tachibana.jpg",
    link: "https://www.youtube.com/c/TachibanaMusic/",
  };
  const MusicList: Music[] = [
    {
      title: "Black Out (Dragoon Cover)",
      artist: Tachibana,
      url: "https://www.youtube.com/embed/oXIY99oUntY",
    },
  ];
  let currentMusic = MusicList[0];
</script>

<div
  class="pointer-events-none absolute top-0 left-0 -z-10 h-full w-screen bg-[url('/music-bg.png')] bg-cover bg-center"
/>
<main
  class="container flex min-h-border-screen flex-col items-center justify-center"
>
  <div class="relative z-0 mt-14 mb-8">
    <h1 class="z-0 text-center text-4xl font-black uppercase md:text-6xl">
      Music <span class="text-selen">Board</span>
    </h1>
    <h2
      class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
    >
      Musi<span class="tracking-normal">c</span>
    </h2>
  </div>
  <div class="z-10 flex w-full flex-col sm:w-3/4 md:w-2/3 lg:w-4/5">
    <iframe
      class="aspect-video w-full rounded-md border-2 border-white"
      src={currentMusic.url}
      title="YouTube video player"
      allow="autoplay; picture-in-picture fullscreen"
    />
  </div>
  <div class="grow" />
  <p class="my-4 text-center text-sm">
    Selen Tatsuki artwork credit: (left) <a
      href="https://twitter.com/szainx"
      class="hover:text-selen">@szainx</a
    >
    | (right)
    <a href="https://twitter.com/ReeceyD3" class="hover:text-selen">
      @ReeceyD3</a
    > <em>(NSFW)</em>
  </p>
</main>

<style>
  a,
  p {
    text-shadow: 0 0 4px black;
  }
</style>
