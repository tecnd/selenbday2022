<script lang="ts">
  import SkewBox from "$lib/skewBox.svelte";

  import creditsBg from "./credits-bg.png?quality=95&webp";
  import dpsIcon from "./dps-icon.png?quality=95&w=64&webp";
</script>

<div
  class="pointer-events-none fixed top-1 left-0 -z-10 h-border-screen w-screen bg-cover bg-center"
  style:background-image="url({creditsBg})"
/>
<main
  class="container flex min-h-border-screen max-w-screen-md flex-col items-center justify-center"
>
  <div class="relative z-0 mt-14 mb-8">
    <h1 class="z-0 text-center text-4xl font-black uppercase md:text-6xl">
      DPS and <span class="text-selen">Credits</span>
    </h1>
    <h2
      class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
    >
      Discor<span class="tracking-normal">d</span>
    </h2>
  </div>
  <p class="mb-4">
    A place where dragoons come to hang out. The unofficial Selen Tatsuki fan
    projects discord!
  </p>

  <SkewBox>
    <p class="mb-4">
      Dragoon Project Squad is an unofficial Selen Tatsuki Community Discord
      with a primary focus on fan projects (like the one you're viewing right
      now!) Our mission is to not only support our liver by means of great
      projects, but also to help out fellow dragoons in getting their skills and
      hobbies out in the public. Whether you're an artist, a developer, a
      musician, or even just a fan: we want to give the community an opportunity
      to develop their skills, create collaborative works, and support their
      streamer all at the same time!
    </p>
    <p>
      While projects are our main focus as a community, we also seek to provide
      a place for dragoons to interact; be it through gaming with one another or
      bantering with each other during or outside of streams. We aim to foster a
      welcoming server that allows fans to build friendships and working
      relationships within the community. So come along, we're always looking
      for extra claws to help!
    </p>
  </SkewBox>

  <!-- Discord link -->
  <a href="https://discord.gg/dragoonprojectsquad" class="group mb-8 text-3xl">
    <div class="flex flex-row items-center">
      <i class="fa-brands fa-discord text-3xl text-discord sm:text-5xl" />
      <div class="mx-4 group-hover:text-selen">
        <p class="text-center font-bold">Join Here</p>
        <p class="text-center text-sm md:text-base">
          discord.gg/dragoonprojectsquad
        </p>
      </div>
      <img src={dpsIcon} class="w-9 rounded sm:w-16" alt="DPS Logo" />
    </div>
  </a>
  <h2 class="mb-4 text-4xl font-black uppercase md:text-6xl">Credits</h2>
  <ul>
    <li class="flex">
      Ac1dReigNZ<span class="w-4 flex-grow" />Project Management
    </li>
    <li class="flex">tecnd<span class="w-4 flex-grow" />Website Development</li>
    <li class="flex">
      Kana_Kirishima<span class="w-4 flex-grow" />Website Background
    </li>

    <li class="text-center text-2xl font-black uppercase">Intro Animation</li>
    <li class="flex">
      PaceArgonaut<span class="w-4 flex-grow" /><span class="text-right"
        >Co-lead / Animation / Sketches / Storyboard / Coloring</span
      >
    </li>
    <li class="flex">
      chloee&nbsp;desu<span class="w-4 flex-grow" /><span class="text-right"
        >Co-lead / Animation / Sketches / Storyboard / Coloring</span
      >
    </li>
    <li class="flex">
      Ac1dReigNZ<span class="w-4 flex-grow" />Organisation / Recruitment
    </li>
    <li class="flex">Agito<span class="w-4 flex-grow" />Animation Sketches</li>
    <li class="flex">
      XanaduAvici<span class="w-4 flex-grow" />Finalizing Linearts
    </li>
    <li class="flex">
      Extrendedfreezer<span class="w-4 flex-grow" />Background Artworks
    </li>
    <li class="flex">
      Gosher<span class="w-4 flex-grow" />Background Artworks
    </li>
    <li class="flex">
      KlarcwithaK<span class="w-4 flex-grow" />Background Artworks
    </li>
    <li class="flex">Nikov<span class="w-4 flex-grow" />Background Artworks</li>
    <li class="flex">Taroko3<span class="w-4 flex-grow" />Animation</li>
    <li class="flex">
      StickTheFigure<span class="w-4 flex-grow" /><span class="text-right"
        >Original Soundtrack / Animation Music</span
      >
    </li>

    <li class="text-center text-2xl font-black uppercase">Selen's Socials</li>
    <li class="flex">Ac1dReigNZ<span class="w-4 flex-grow" />Project Lead</li>
    <li class="flex">
      Rabbit&nbsp;hole&nbsp;ch<span class="w-4 flex-grow" /><span
        class="text-right"
        >Project Clipper Montage Lead / Editing / Footage</span
      >
    </li>
    <li class="flex">
      Rexhernan<span class="w-4 flex-grow" />watchselen Intro
    </li>
    <li class="flex">Gator<span class="w-4 flex-grow" />Script</li>
    <li class="flex">
      Medi<span class="w-4 flex-grow" />Script / Footage Collecting
    </li>
    <li class="flex">
      Shadowmitten<span class="w-4 flex-grow" />Script / Footage Collecting
    </li>
    <li class="flex">
      Ozwald<span class="w-4 flex-grow" />Voice Acting / Thumbnail / Logo
    </li>
    <li class="flex">Aefen<span class="w-4 flex-grow" />Voice Mixing</li>

    <li class="text-center text-2xl font-black uppercase">Music Board</li>
    <li class="text-center text-xl font-black uppercase">
      "Blissful nights (LoFi)"
    </li>
    <li class="flex">
      Aefen Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">
      StickTheFigure<span class="w-4 flex-grow" />Original
    </li>
    <li class="flex">
      127_sd_<span class="w-4 flex-grow" />Thumbnail Artwork
    </li>
    <li class="text-center text-xl font-black uppercase">"Sweet Embrace"</li>
    <li class="flex">
      StickTheFigure<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">
      chloee_desu<span class="w-4 flex-grow" />Thumbnail Artwork
    </li>
    <li class="text-center text-xl font-black uppercase">"Back Home"</li>
    <li class="flex">
      Aefen Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">
      PaceArgonaut<span class="w-4 flex-grow" />Thumbnail Artwork
    </li>
    <li class="text-center text-xl font-black uppercase">"Blissful nights"</li>
    <li class="flex">
      StickTheFigure<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">127_sd_<span class="w-4 flex-grow" />Thumbnail Artwork</li>
    <li class="text-center text-xl font-black uppercase">"Relive"</li>
    <li class="flex">
      Aefen Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">
      ringle_bingle<span class="w-4 flex-grow" />Thumbnail Artwork
    </li>
    <li class="text-center text-xl font-black uppercase">
      "Black Out (Dragoon cover)"
    </li>
    <li class="flex">Tachibana Music<span class="w-4 flex-grow" />Mix</li>
    <li class="flex">Community<span class="w-4 flex-grow" />Vocals</li>
    <li class="flex">Ermant<span class="w-4 flex-grow" />Thumbnail Artwork</li>
    <li class="text-center text-xl font-black uppercase">"Victorious"</li>
    <li class="flex">
      Anizan Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">Staru<span class="w-4 flex-grow" />Thumbnail Artwork</li>
    <li class="text-center text-xl font-black uppercase">"Night Racer"</li>
    <li class="flex">
      Aefen Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">
      subjectn<span class="w-4 flex-grow" />Thumbnail Artwork
    </li>
    <li class="text-center text-xl font-black uppercase">
      "A Dragoon's Life For Me"
    </li>
    <li class="flex">
      Tachibana Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">Leonard E Claire<span class="w-4 flex-grow" />Vocals</li>
    <li class="flex">gosher<span class="w-4 flex-grow" />Thumbnail Artwork</li>
    <li class="text-center text-xl font-black uppercase">"Dragoon Jam"</li>
    <li class="flex">
      Aefen&nbsp;Music<span class="w-4 flex-grow" /><span class="text-right"
        >Lead Composer / Arranger / Bass</span
      >
    </li>
    <li class="flex">
      Tachibana Music<span class="w-4 flex-grow" />Producer / Mix
    </li>
    <li class="flex">iPN<span class="w-4 flex-grow" />Kazoo</li>
    <li class="flex">NorMadLad<span class="w-4 flex-grow" />Lead Guitar</li>
    <li class="flex">Hachi<span class="w-4 flex-grow" />Rhythm Guitar</li>
    <li class="flex">Whalien<span class="w-4 flex-grow" />Piano</li>
    <li class="flex">SadEgg<span class="w-4 flex-grow" />Flute</li>
    <li class="flex">
      Morphball<span class="w-4 flex-grow" />Thumbnail Artwork
    </li>
    <li class="text-center text-xl font-black uppercase">"Warriors Brawl"</li>
    <li class="flex">
      Anizan Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">
      Nymouuus<span class="w-4 flex-grow" />Thumbnail Artwork
    </li>
    <li class="text-center text-xl font-black uppercase">"Lunar Sky"</li>
    <li class="flex">
      Tachibana Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">Its_Ezpa<span class="w-4 flex-grow" />Animation</li>
    <li class="flex">
      Morphball<span class="w-4 flex-grow" />Thumbnail Artwork
    </li>
    <li class="text-center text-xl font-black uppercase">"Lunar Sky"</li>
    <li class="flex">
      Tachibana Music<span class="w-4 flex-grow" />Lead / Producer
    </li>
    <li class="flex">Ermant<span class="w-4 flex-grow" />Thumbnail Artwork</li>

    <li class="text-center text-2xl font-black uppercase">Selen's Quotes</li>
    <li class="flex">
      Ac1dReigNZ<span class="w-4 flex-grow" />Quote Collecting
    </li>
    <li class="flex">Wishful<span class="w-4 flex-grow" />Quote Collecting</li>
    <li class="flex">Medi<span class="w-4 flex-grow" />Quote Collecting</li>
    <li class="flex">
      Shadowmitten<span class="w-4 flex-grow" />Quote Collecting
    </li>

    <li class="text-center text-2xl font-black uppercase">Birthday Cakes</li>
    <li class="flex">Ac1dReigNZ<span class="w-4 flex-grow" />Organisation</li>
    <li class="flex">worrysmn<span class="w-4 flex-grow" />Organisation</li>
    <li class="flex">
      Tastelikenyan<span class="w-4 flex-grow" /><span class="text-right"
        >Animation / Replacement Letters</span
      >
    </li>
    <li class="flex">Medi<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">Matahari<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">Patchuu<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">SwankerZ<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">Johnny Lacone<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">MrPatrick1207<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">Baxkill<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">NotSoDeadpool<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">scar<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">Genki Jii-san<span class="w-4 flex-grow" />Cake Letter</li>
    <li class="flex">Fudgetop<span class="w-4 flex-grow" />Cake Letter</li>

    <li class="text-center text-2xl font-black uppercase">Dragoon Generator</li>
    <li class="flex">
      ~sky<span class="w-4 flex-grow" />Web Development / Co-lead
    </li>
    <li class="flex">
      Ac1dReigNZ<span class="w-4 flex-grow" />Co-lead / Quality Control
    </li>
    <li class="flex">
      tastelikenyan<span class="w-4 flex-grow" />Web Development
    </li>
    <li class="flex">
      127_sd_<span class="w-4 flex-grow" /><span class="text-right"
        >Website Graphics / Backgrounds / Frames / Font</span
      >
    </li>
    <li class="flex">Agito<span class="w-4 flex-grow" />Dragoon Graphics</li>

    <li class="text-center text-2xl font-black uppercase">Misc</li>
    <li class="flex">
      Ac1dReigNZ<span class="w-4 flex-grow" />Artwork Approval
    </li>
    <li class="flex">Medi<span class="w-4 flex-grow" />Artwork Approval</li>
    <li class="flex">
      Kana_Kirishima<span class="w-4 flex-grow" />Cropping / Background
    </li>
    <li class="flex">
      Kamamesigogo123<span class="w-4 flex-grow" />Main Page Art
    </li>
    <li class="flex">
      Fujiwarano_echi<span class="w-4 flex-grow" />Main Page Art
    </li>
    <li class="flex">elvandec<span class="w-4 flex-grow" />About Page Art</li>
    <li class="flex">
      Betanonbeet<span class="w-4 flex-grow" />About Page Art
    </li>
    <li class="flex">
      SevenforVtubers<span class="w-4 flex-grow" />About Page Trophies
    </li>
    <li class="flex">RuiBerry3<span class="w-4 flex-grow" />Quotes Page Art</li>
    <li class="flex">Daiishori<span class="w-4 flex-grow" />Quotes Page Art</li>
    <li class="flex">Szainx<span class="w-4 flex-grow" />Music Page Art</li>
    <li class="flex">ReeceyD3<span class="w-4 flex-grow" />Music Page Art</li>
    <li class="flex">
      Daydarion<span class="w-4 flex-grow" />Socials Page Art
    </li>
    <li class="flex">
      Daiishori<span class="w-4 flex-grow" />Socials Page Art
    </li>
    <li class="flex">Shupami<span class="w-4 flex-grow" />Credits Page Art</li>
    <li class="flex">Adomanju<span class="w-4 flex-grow" />Credits Page Art</li>

    <li class="text-center text-2xl font-black uppercase">Project Funders</li>
    <li class="flex">Ac1dReigNZ<span class="w-4 flex-grow" />Website</li>
    <li class="flex">
      Ninjaplayz<span class="w-4 flex-grow" />Graphics / Design / Art
    </li>
    <li class="flex">
      Lethe<span class="w-4 flex-grow" />Graphics / Design / Art
    </li>
    <li class="flex">
      HuskyTheFish<span class="w-4 flex-grow" />Graphics / Design / Art
    </li>
    <li class="flex">
      LordKrosis<span class="w-4 flex-grow" />Graphics / Design / Art
    </li>
    <li class="flex">
      xoxosos<span class="w-4 flex-grow" />Graphics / Design / Art
    </li>
  </ul>
  <div class="grow" />
  <p class="text-shadow my-4 text-center text-sm">
    Selen Tatsuki artwork credit: (left) <a
      href="https://twitter.com/shupami"
      class="hover:text-selen">@shupami</a
    >
    | (right)
    <a href="https://twitter.com/adomanju" class="hover:text-selen">@adomanju</a
    >
  </p>
</main>

<style>
  @counter-style emotes {
    system: fixed;
    symbols: 🤘 😎 🥇;
    suffix: " ";
  }
</style>
