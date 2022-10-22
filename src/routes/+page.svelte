<script lang="ts">
  import Hex from "../components/hex.svelte";
</script>

<div class="h-screen bg-[url('/home-bg-artwork.png')]">
  <main class="container flex flex-col items-center bg-neutral-300 opacity-50">
    <h1 class="text-3xl">Welcome to SvelteKit</h1>
    <p>
      Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
    <a href="/about">About</a>
    <div class="flex flex-row flex-wrap">
      <a href="/about">
        <Hex />
      </a>
      <Hex />
    </div>
  </main>
</div>
