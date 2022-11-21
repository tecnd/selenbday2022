<script lang="ts">
  import SkewBox from "$lib/skewBox.svelte";
</script>

<div
  class="pointer-events-none fixed top-1 left-0 -z-10 h-border-screen w-screen bg-[url('/credits-bg.png')] bg-cover bg-center"
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
    discord!
  </p>

  <SkewBox>
    <p class="mb-4">Come join us at Dragoon Project Squad! Where you can:</p>
    <ul class="mb-4 list-[emotes] pl-6">
      <li>Chat and rock on with other Dragoons!</li>
      <li>Use emotes made by our lovely community!</li>
      <li>Join community projects focused on Selen!</li>
    </ul>
    <p>
      Here we share legendary moments together such as when we were held hostage
      until Uto won one more game, or the canyon that formed during the bento
      stream. Events are also organized by fellow dragoons such as games nights
      and even full-on tournaments that anyone is invited to participate in. The
      community here is pretty chill so you definitely will not regret your
      decision, just be up good not down bad.
    </p>
  </SkewBox>

  <!-- Discord link -->
  <a href="https://discord.gg/" class="group mb-8 text-3xl">
    <div class="flex flex-row">
      <i class="fa-brands fa-discord fa-2x text-discord" />
      <div class="ml-4 group-hover:text-selen">
        <p class="font-bold">Join Here</p>
        <p class="text-base">discord.gg/placeholder</p>
      </div>
    </div>
  </a>
  <h2 class="mb-4 text-4xl font-black uppercase md:text-6xl">Credits</h2>
  <ul>
    <li>Someone - Did something really cool</li>
    <li>Even</li>
    <li>More</li>
    <li>Names</li>
    <li>Go</li>
    <li>Here</li>
  </ul>
  <div class="grow" />
  <p class="text-shadow my-4 text-center text-sm">
    Selen Tatsuki artwork credit: (left) <a
      href="https://twitter.com/daiishori"
      class="hover:text-selen">@daiishori</a
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
