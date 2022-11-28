<script lang="ts">
  import aefenPic from "./aefen.jpg";
  import anizanPic from "./anizan.jpg";
  import stickPic from "./stick.jpg";
  import tachibanaPic from "./tachibana.jpg";

  interface Artist {
    name: string;
    image: string;
    link: string;
  }
  interface Music {
    title: string;
    artist: Artist;
    url: string;
    new?: boolean;
  }

  // Artists
  const Tachibana: Artist = {
    name: "Tachibana Music",
    image: tachibanaPic,
    link: "https://www.youtube.com/c/TachibanaMusic/",
  };
  const Anizan: Artist = {
    name: "Anizan",
    image: anizanPic,
    link: "https://twitter.com/AnizanHuman/",
  };
  const Aefen: Artist = {
    name: "Aefen",
    image: aefenPic,
    link: "https://twitter.com/OfficialAefen/",
  };
  const Stick: Artist = {
    name: "StickTheFigure",
    image: stickPic,
    link: "https://twitter.com/elicoutch/",
  };

  const MusicList: Music[] = [
    {
      title: "Sweet Embrace",
      artist: Stick,
      url: "https://www.youtube.com/embed/3--mGPd0wCE",
      new: true
    },
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
  class="pointer-events-none fixed top-1 left-0 -z-10 h-border-screen w-screen bg-[url('/music-bg.png')] bg-cover bg-center"
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
  <div class="mb-2 flex justify-center rounded bg-black/50 pr-2">
    <a href={currentMusic.artist.link}
      ><img
        src={currentMusic.artist.image}
        alt="Artist"
        class="aspect-square w-16 rounded"
      /></a
    >
    <div class="mx-4 flex flex-col justify-around md:mx-8">
      <h2 class="text-center text-xl md:text-4xl">
        {currentMusic.title}
      </h2>
      <a href={currentMusic.artist.link} class="hover:text-selen"
        >{currentMusic.artist.name}</a
      >
    </div>
  </div>
  <div
    class="flex w-full flex-col items-center justify-center md:flex-row-reverse"
  >
    <!-- Video player -->
    <div class="z-10 flex w-full max-w-screen-md flex-col">
      <iframe
        class="aspect-video w-full rounded-md border-2 border-white"
        src={currentMusic.url}
        title="YouTube video player"
        allow="autoplay; picture-in-picture fullscreen"
      />
    </div>
    <!-- Track select -->
    <div class="flex flex-col items-center md:mr-4">
      <div class="my-2 flex justify-center">
        <div class="skew-x-30 border bg-black/50 p-1" />
        <div class="mx-1 skew-x-30 border bg-black/50 px-5">
          <p class="-skew-x-30 text-center">Track Select</p>
        </div>
        <div class="skew-x-30 border bg-black/50 p-1" />
      </div>
      {#each MusicList as music}
        <label class="mb-1 w-full border-2">
          <input
            type="radio"
            class="peer hidden appearance-none"
            name="currentMusic"
            bind:group={currentMusic}
            value={music}
          />
          <div
            class="cursor-pointer bg-black/50 px-2 text-center hover:bg-white hover:text-black peer-checked:cursor-auto peer-checked:bg-white peer-checked:text-black"
          >
            {#if music.new === true}
              <em>(NEW) </em>
            {/if}
            {music.title}
          </div>
        </label>
      {/each}
    </div>
  </div>
  <div class="grow" />
  <p class="text-shadow my-4 text-center text-sm">
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
