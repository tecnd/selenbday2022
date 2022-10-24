<div class="group relative my-[49.94px] mx-[-2px] hover:z-10">
  <div class="h-hex-outer w-hex-outer border-x-4 border-x-gray-800" />
  <div
    class="absolute top-0 h-hex-outer w-hex-outer rotate-60 border-x-4 border-x-gray-800"
  />
  <div
    class="absolute top-0 h-hex-outer w-hex-outer rotate-120 border-x-4 border-x-gray-800"
  />
  <div
    class="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out group-hover:scale-125"
  >
    <div
      class="h-hex-inner w-hex-inner border-x-4 border-x-gray-800 transition-all duration-300 ease-out group-hover:border-x-[11px] group-hover:border-x-selen"
    />
    <div
      class="absolute top-0 h-hex-inner w-hex-inner rotate-60 border-x-4 border-x-gray-800 transition-all duration-300 ease-out group-hover:border-x-[11px] group-hover:border-x-selen"
    />
    <div
      class="absolute top-0 h-hex-inner w-hex-inner rotate-120 border-x-4 border-x-gray-800 transition-all duration-300 ease-out group-hover:border-x-[11px] group-hover:border-x-selen"
    />
    <div class="absolute top-0 -z-10 h-hex-inner w-hex-inner bg-gray-800" />
    <div
      class="absolute top-0 -z-10 h-hex-inner w-hex-inner rotate-60 bg-gray-800"
    />
    <div
      class="absolute top-0 -z-10 h-hex-inner w-hex-inner rotate-120 bg-gray-800"
    />
  </div>
  <div
    class="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
  >
    <slot />
  </div>
</div>
