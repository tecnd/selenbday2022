<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { Quote } from "$lib/interfaces";
  import QuoteLeft from "$lib/quoteLeft.svelte";
  import QuoteRight from "$lib/quoteRight.svelte";

  import quotesBg from "./quotes-bg.png?quality=95&webp";

  import p1 from "./images/1.png?&quality=95&webp";
  import p2 from "./images/2.png?&quality=95&webp";
  import p3 from "./images/3.png?&quality=95&webp";
  import p4 from "./images/4.png?&quality=95&webp";
  import p5 from "./images/5.png?&quality=95&webp";
  import p6 from "./images/6.png?&quality=95&webp";
  import p7 from "./images/7.png?&quality=95&webp";
  import p8 from "./images/8.png?&quality=95&webp";
  import p9 from "./images/9.png?&quality=95&webp";
  import p10 from "./images/10.png?&quality=95&webp";

  import kinkshame from "./audio/Selen_kinkshame_free_zone.mp3";
  import trust from "./audio/Selen_you_guys_trust_vtubers_right.mp3";
  import cry from "./audio/Selen_whats_she_gonna_do_cry.mp3";
  import cute from "./audio/Selen_dragoons_are_cute_too.mp3";
  import peace from "./audio/Selen_peace_via_murder.mp3";
  import toxic from "./audio/Selen_little_do_they_know_Im_fucking_toxic.mp3";
  import shoot from "./audio/Selen_nobody_shoots_my_dragoon_down_but_me.mp3";
  import daddy from "./audio/Selen_I_give_you_permission_to_call_me_daddy 4sec.mp3";
  import sanity from "./audio/Selen_thank_you_for_witnessing_my_sanity_decline.mp3";
  import love from "./audio/Selen_bye_I_love_you_guys.mp3";

  const quotes: Quote[] = [
    {
      quote:
        "This is cute? Oh… I guess so, if you’re into that… I mean if you’re into that I won’t judge you, this is a kinkshame-free zone.",
      audioLink: kinkshame,
      image: p1,
      artist: "るんぶ",
      artistLink: "https://www.pixiv.net/en/users/1160669",
    },
    {
      quote:
        'And you guys trust everything a vtuber tells you, right? ’Cause like vtubers don’t lie to you gu— *laughs* God, that’s like something I would say if I was a cult leader. I’d be like, "Vtubers don’t lie to you guys, you trust me", *laughs* "I would NEVER lie to you".',
      audioLink: trust,
      image: p2,
      artist: "@BlackSiopao",
      artistLink: "https://twitter.com/BlackSiopao",
    },
    {
      quote:
        '"Not the orphan!", "Orphan was robbed!", Oh what\'s she gonna do, cry about it? Oh no to who, her dead parents?',
      audioLink: cry,
      image: p3,
      artist: "@betanonbeet",
      artistLink: "https://twitter.com/betanonbeet",
    },
    {
      quote:
        'Someone’s like, "No, Selen’s cuter than us", I’m like, WTF dragoons are really cute! Okay, true, I am cuter than you guys, but hey, don’t sell yourselves short, you’re pretty cute too. Alright chat? Of course.',
      audioLink: cute,
      image: p4,
      artist: "@daydarion",
      artistLink: "https://twitter.com/daydarion",
    },
    {
      quote: "Peace via murder, yay!",
      audioLink: peace,
      image: p5,
      artist: "@adomanju",
      artistLink: "https://twitter.com/adomanju",
    },
    {
      quote:
        "I look very innocent, little do they know, *laughs* I’m fucking toxic. *laughs* They don’t knowww, I’m a toxic FPS mouthbreather! *laughs* I fooled them all! I FOOLED THEM ALL!",
      audioLink: toxic,
      image: p6,
      artist: "@daiishori",
      artistLink: "https://twitter.com/daiishori",
    },
    {
      quote:
        "This is for you guys, dragoons. No one shoots my dragoon down… except me, by friendly fire!",
      audioLink: shoot,
      image: p7,
      artist: "@daiishori",
      artistLink: "https://twitter.com/daiishori",
    },
    {
      quote:
        'I give you guys— Chat, I give you guys permission to call me "Daddy". Chat, you can call me "Dad".',
      audioLink: daddy,
      image: p8,
      artist: "@adomanju",
      artistLink: "https://twitter.com/adomanju",
    },
    {
      quote:
        "Thank you all, for coming here, to witness this journey. Of the slow decline, of— of SANITY, of Selen Tatsuki *laughs*.",
      audioLink: sanity,
      image: p9,
      artist: "@fujiwarano_echi",
      artistLink: "https://twitter.com/fujiwarano_echi",
    },
    {
      quote:
        "I’ll see you guys next time, dragoons! Bye everybody, mmbyeee, and thank you for all the superchaaats during the stream, I really do appreciate it! I LOVE you guys! Bye guys! Byeee!",
      audioLink: love,
      image: p10,
      artist: "@adomanju",
      artistLink: "https://twitter.com/adomanju",
    },
  ];

  let audio: HTMLAudioElement;
  onMount(() => {
    audio = new Audio();
  });

  onDestroy(() => {
    if (audio) {
      audio.pause();
    }
  });

  function playAudio(src: string) {
    audio.src = src;
    audio.play();
  }
</script>

<div
  class="pointer-events-none fixed top-1 left-0 -z-10 h-border-screen w-screen bg-cover bg-center"
  style:background-image="url({quotesBg})"
/>
<main
  class="container flex min-h-border-screen max-w-screen-xl flex-col items-center justify-center"
>
  <div class="relative z-0 mt-14 mb-8">
    <h1 class="z-0 text-center text-4xl font-black uppercase md:text-6xl">
      Selen’s <span class="text-selen">Quotes</span>
    </h1>
    <h2
      class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
    >
      Quote<span class="tracking-normal">s</span>
    </h2>
  </div>
  <p class="mb-4">
    A collection of the dragoon community’s favourite teachings and quotes from
    our beloved Selen Tatsuki!
  </p>
  <div class="grid w-full grid-cols-1 justify-items-center lg:grid-cols-2">
    {#each quotes as quote, index}
      {#if index % 2 == 0}
        <QuoteLeft {quote} {playAudio} />
      {:else}
        <QuoteRight {quote} {playAudio} />
      {/if}
    {/each}
  </div>
  <div class="grow" />
  <p class="text-shadow my-4 text-center text-sm">
    Selen Tatsuki artwork credit: (left) <a
      href="https://twitter.com/RuiBerry3"
      class="hover:text-selen">@RuiBerry3</a
    >
    | (right)
    <a href="https://twitter.com/daiishori" class="hover:text-selen"
      >@daiishori</a
    >
  </p>
</main>
