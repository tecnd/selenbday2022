<script lang="ts">
  type LayerType =
    | "frame"
    | "handItem"
    | "hat"
    | "moustache"
    | "eye"
    | "clothes"
    | "horns";
  export let src: string | number;
  export let layer: LayerType;

  const layerLut: Record<LayerType, string> = {
    frame: "z-80",
    handItem: "z-70",
    hat: "z-60",
    moustache: "z-50",
    eye: "z-40",
    clothes: "z-30",
    horns: "z-20",
  };
</script>

{#if typeof src == "string"}
  <img
    {src}
    class="absolute left-0 top-0 w-full {layerLut[layer]}"
    alt="Dragoon {layer}"
  />
{/if}
