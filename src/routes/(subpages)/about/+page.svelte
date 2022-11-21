<script lang="ts">
  import SkewBox from "$lib/skewBox.svelte";
  interface Award {
    image: string;
    alt: string;
    text: string;
  }

  const awardList: Award[] = [
    {
      image: "/awards/dragon.png",
      alt: "Dragon Trophy",
      text: "Number 1 Dragon Racer",
    },
    {
      image: "/awards/apex.png",
      alt: "Apex Trophy",
      text: "Repeat Top 500 Apex Predator",
    },
    {
      image: "/awards/overwatch.png",
      alt: "Overwatch Trophy",
      text: "Repeat Top 500 Overwatch Player",
    },
    {
      image: "/awards/master.png",
      alt: "Master Trophy",
      text: "Repeat Master Player",
    },
    {
      image: "/awards/mirage.png",
      alt: "Mirage Trophy",
      text: "Leaderboard Mirage Player",
    },
    {
      image: "/awards/flyer.png",
      alt: "Flyer Trophy",
      text: "C+ Flying License",
    },
    {
      image: "/awards/rosemi.png",
      alt: "Rosemi Trophy",
      text: "The Great Rosemi-sama Game Show Winner",
    },
  ];
</script>

<div
  class="pointer-events-none fixed top-1 left-0 -z-10 h-border-screen w-screen bg-[url('/about-bg.png')] bg-cover bg-center"
/>
<main
  class="container flex min-h-border-screen max-w-screen-lg flex-col items-center justify-center"
>
  <div class="relative z-0 mt-14 mb-8">
    <h1 class="z-0 text-center text-4xl font-black uppercase md:text-6xl">
      Selen <span class="text-selen">Tatsuki</span>
    </h1>
    <h2
      class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
    >
      Abou<span class="tracking-normal">t</span>
    </h2>
  </div>
  <SkewBox>
    <p class="mb-4">
      A sassy lunar sky dragon aiming straight for your heart. Selen Tatsuki is
      a top level competitive FPS player with an unforgettable laugh. Selen has
      a strong competitive spirit and a drive to win. She has a bratty
      personality and will tease everyone around her, but secretly has a softer
      side and cares deeply about her friends.
    </p>
    <p>
      Selen is a member of NIJISANJI EN's 2nd wave: Obsydia. She is a dragon
      racer that loves to win. First person shooters are Selen's games of
      choice, especially Apex Legends, but she keeps things fresh with games
      from other genres. Notable non-shooter games Selen has played include
      retro RTS and platformer games, such as Starcraft: Brood War and the
      original Mega Man series. Despite her assertive personality, Selen's one
      weakness is horror, and her fans often revel in the "gap moe" of watching
      this dragon shriek in fear while playing horror games. This "gap moe"
      personality also comes up in more tender ways, like when she made an
      adorable rice bear bento box on stream. Selen's greatest strength as an
      entertainer is her ability to get along with other people. Selen
      frequently will collaborate with a variety of different guests, and no
      matter who she's with, those collaborations are always a treat to watch!
    </p>
  </SkewBox>
  <a
    href="https://virtualyoutuber.fandom.com/wiki/Selen_Tatsuki#2022_2"
    class="mb-6 rounded border-2 px-2 text-lg font-black uppercase hover:bg-white hover:text-selen"
    >Read More</a
  >
  <h2 class="mb-4 text-4xl font-black uppercase md:text-6xl">Hall of Fame</h2>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    {#each awardList as award, index}
      <div
        class="mb-4 flex w-full items-center {index + 1 === awardList.length
          ? 'lg:col-span-2'
          : ''}"
      >
        <img src={award.image} alt={award.alt} class="h-40 md:h-64" />
        <p class="text-2xl font-black uppercase md:text-4xl">{award.text}</p>
      </div>
    {/each}
  </div>
  <h2 class="mb-4 text-center text-4xl font-black uppercase md:text-6xl">
    Additional Achievements
  </h2>
  <SkewBox>
    <ul class="list-['🏆'] pl-6 text-lg">
      <li>Team won NIJISANJI Grand Sport day 2022</li>
      <li>S-Rank in Splatoon 3</li>
      <li>First NIJISANJI liver to reach Top 500 in Overwatch 2</li>
      <li>
        First Place in the consolation bracket and won $35,000 for Trevor
        Project charity
      </li>
    </ul>
  </SkewBox>
  <div class="grow" />
  <p class="text-shadow my-4 text-center text-sm">
    Trophy artwork credit: <a
      href="https://twitter.com/SevenforVtubers"
      class="hover:text-selen">@SevenforVtubers</a
    ><br />
    Selen Tatsuki artwork credit: (left)
    <a href="https://twitter.com/elvandec" class="hover:text-selen">@elvandec</a
    >
    | (right)
    <a href="https://twitter.com/betanonbeet" class="hover:text-selen"
      >@betanonbeet</a
    >
  </p>
</main>
