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

  // Artists
  const Tachibana: Artist = {
    name: "Tachibana",
    image: "/artists/tachibana.jpg",
    link: "https://www.youtube.com/c/TachibanaMusic/",
  };
  const Anizan: Artist = {
    name: "Anizan",
    image: "/artists/anizan.jpg",
    link: "https://twitter.com/AnizanHuman/",
  };
  const Aefen: Artist = {
    name: "Aefen",
    image: "/artists/aefen.png",
    link: "https://twitter.com/OfficialAefen/",
  };
  const Stick: Artist = {
    name: "StickTheFigure",
    image: "https://via.placeholder.com/200.png",
    link: "https://twitter.com/elicoutch/",
  };

  const MusicList: Music[] = [
    {
      title: "Back Home",
      artist: Aefen,
      url: "https://www.youtube.com/embed/sL4iXqugCGc",
    },
    {
      title: "Blissful nights",
      artist: Stick,
      url: "https://www.youtube.com/embed/cUlIOHWpAtE",
    },
    {
      title: "Relive",
      artist: Aefen,
      url: "https://www.youtube.com/embed/vwgOaNWB8sI",
    },
    {
      title: "Black Out (Dragoon Cover)",
      artist: Tachibana,
      url: "https://www.youtube.com/embed/oXIY99oUntY",
    },
    {
      title: "Victorious",
      artist: Anizan,
      url: "https://www.youtube.com/embed/WiwmxiIVcP8",
    },
    {
      title: "Night Racer",
      artist: Aefen,
      url: "https://www.youtube.com/embed/BWsY-BftU18",
    },
    {
      title: "A Dragoon's Life for Me",
      artist: Tachibana,
      url: "https://www.youtube.com/embed/djwg5eYxl-Q",
    },
    {
      title: "Dragoon Jam",
      artist: Aefen,
      url: "https://www.youtube.com/embed/VXCwSOzZEh4",
    },
    {
      title: "Warriors Brawl",
      artist: Anizan,
      url: "https://www.youtube.com/embed/uHbo8T_qeis",
    },
    {
      title: "Lunar Sky",
      artist: Tachibana,
      url: "https://www.youtube.com/embed/CLqjSgfTKI4",
    },
    {
      title: "BGM remix",
      artist: Tachibana,
      url: "https://www.youtube.com/embed/38kxVSqNTfY",
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
  <p class="z-10 my-6">
    A collection of the dragoon community’s music pieces for Selen Tatsuki!
  </p>
  <!-- Title bar -->
  <div class="mx-3 mb-2 flex justify-center">
    <div
      class="skew-x-45 border-y-2 border-x-3 bg-black/50 p-1 md:border-y-4 md:border-x-6 md:p-2"
    />
    <div
      class="mx-1 grow skew-x-45 border-y-2 border-x-3 bg-black/50 px-5 py-1 md:mx-2 md:border-y-4 md:border-x-6 md:px-6"
    >
      <h2 class="-skew-x-45 text-center text-xl md:text-4xl">
        {currentMusic.title}
      </h2>
    </div>
    <div
      class="skew-x-45 border-y-2 border-x-3 bg-black/50 p-1 md:border-y-4 md:border-x-6 md:p-2"
    />
  </div>
  <div class="z-10 flex w-full flex-col sm:w-3/4 md:w-2/3 lg:w-4/5">
    <iframe
      class="aspect-video w-full rounded-md border-2 border-white"
      src={currentMusic.url}
      title="YouTube video player"
      allow="autoplay; picture-in-picture fullscreen"
    />
  </div>
  <div class="flex w-max flex-col items-center">
    {#each MusicList as music}
      <label class="mt-1 w-full border-2">
        <input
          type="radio"
          class="peer hidden appearance-none"
          name="currentMusic"
          bind:group={currentMusic}
          value={music}
        />
        <div
          class="bg-black/50 px-2 text-center hover:bg-white hover:text-black peer-checked:bg-white peer-checked:text-black"
        >
          {music.title}
        </div>
      </label>
    {/each}
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
