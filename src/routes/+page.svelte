<script lang="ts">
  import Hex from "../components/hex.svelte";
</script>

<main class="container flex flex-col items-center bg-neutral-300">
  <h1 class="text-3xl">Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <a href="/about">About</a>
  <div class="flex flex-row flex-wrap">
    <Hex />
    <Hex />
  </div>
</main>
