<script lang="ts">
  type LayerType =
    | "frame"
    | "handItem"
    | "hat"
    | "moustache"
    | "eye"
    | "clothes"
    | "outline"
    | "shadow"
    | "horns"
    | "base";
  export let src: string | number;
  export let layer: LayerType;

  const layerLut: Record<LayerType, string> = {
    frame: "z-100",
    handItem: "z-90",
    hat: "z-80",
    moustache: "z-70",
    eye: "z-60",
    clothes: "z-50",
    outline: "z-40",
    shadow: "z-30",
    horns: "z-10",
    base: "z-0",
  };
</script>

{#if typeof src == "string"}
  <img
    {src}
    class="absolute left-0 top-0 w-full {layerLut[layer]}"
    alt="Dragoon {layer}"
  />
{/if}
