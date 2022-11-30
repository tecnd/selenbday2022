<script lang="ts">
  import DragoonLayer from "$lib/dragoonLayer.svelte";
  import SkewBox from "$lib/skewBox.svelte";
  import linePng from "./line.png?quality=95&webp";
  import shadowPng from "./shadow.png?quality=95&webp";
  import whiteBase from "./white-base.png?quality=95&webp";

  interface Dragoon {
    author: string;
    backgroundColor: string;
    baseColor: string;
    clothes: string | number;
    comment: string;
    eye: string;
    frame: string | number;
    handItem: string | number;
    hat: string | number;
    horns: string | number;
    moustache: string | number;
  }

  async function awaitDragoons(): Promise<Dragoon[]> {
    const res = await fetch("https://dragoon.selen2022.com/export").then(
      (r) => {
        return r.json();
      }
    );

    return JSON.parse(res)["response"];
  }
</script>

<main
  class="container flex min-h-border-screen flex-col items-center justify-center"
>
  <div class="relative z-0 mt-14 mb-8">
    <h1 class="z-0 text-center text-4xl font-black uppercase md:text-6xl">
      Dragoon <span class="text-selen">Generator</span>
    </h1>
    <h2
      class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-black uppercase tracking-widest text-black opacity-30 md:text-9xl"
    >
      Message<span class="tracking-normal">s</span>
    </h2>
  </div>

  <SkewBox center={true}>
    <p class="mb-4 text-2xl">
      Create your own personalized dragoon and leave a message!
    </p>
    <a
      href="https://dragoon.selen2022.com"
      target="_blank"
      rel="noopener noreferrer"
      class="mb-2 w-max rounded border-2 border-selen bg-selen/10 px-2 py-1 text-3xl font-black uppercase text-selen hover:border-white hover:bg-white"
      >Create Now</a
    >
  </SkewBox>

  <h2 class="mb-4 text-center text-3xl font-black uppercase md:text-5xl">
    Dragoon Messages
  </h2>
  <div class="grid w-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
    {#await awaitDragoons()}
      {#each { length: 5 } as _}
        <div class="flex flex-col items-center mx-2">
          <div
            class="relative z-10 w-48 h-48 flex-none items-center md:w-72 md:h-72"
          >
            <DragoonLayer src={linePng} layer="outline" />
            <DragoonLayer src={shadowPng} layer="shadow" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 350 350"
              class="absolute z-20 outline outline-4 outline-black"
              color="#c084fc"
              ><path
                fill="currentColor"
                d="M166.297 83.946c-69.442 7.17-131.12 77.05-110.132 124.775 5.342 12.148 8.937 13.694 16.256 6.992 7.066-6.47 10.276-6.071 15.31 1.903 4.877 7.726 22.813 19.115 30.066 19.092 11.078-.036 30.218-9.412 43.187-21.157 6.574-5.952 6.139-5.961 18.545.386 14.909 7.629 19.025 7.732 32.217.811 9.801-5.143 9.888-5.166 12.316-3.353 1.345 1.004 2.358 2.236 2.251 2.736-.107.501.52 1.311 1.394 1.8.982.549 1.59 2.231 1.59 4.399 0 2.478.367 3.323 1.25 2.876.688-.348.463.012-.5.801-.962.789-1.753 2.285-1.756 3.324-.004 1.04-.695 3.21-1.536 4.824-.842 1.614-1.298 3.54-1.014 4.281.292.761-.47 1.795-1.756 2.381-1.25.57-2.339 1.917-2.42 2.995-.081 1.077-1.75 3.515-3.708 5.416-1.958 1.902-3.562 3.803-3.565 4.225-.01 1.436-13.512 14.268-15.013 14.268-.54 0-.982.401-.982.892 0 .49-1.155 1.181-2.566 1.535-3.163.794-2.946 3.926.303 4.39 2.77.395 29.471-7.247 34.434-9.856 2.02-1.062 6.147-2.856 9.173-3.988 4.999-1.871 7.92-4.362 13.746-11.723.67-.848 4.143-1.25 10.789-1.25 37.579 0 48.454-19.613 22.808-41.132-8.52-7.148-8.609-6.642 1.954-11.141 12.499-5.325 13.859-6.912 13.859-16.179 0-10.139-4.844-15.217-21.696-22.742-2.077-.927-3.567-3.279-6.483-10.233-3.362-8.017-8.371-16.184-11.697-19.073-.633-.55-3.508-3.99-6.389-7.644-9.746-12.362-24.096-24.08-31.235-25.506-1.925-.384-5.75-2.029-8.5-3.656-11.464-6.78-27.542-8.84-50.5-6.469Zm78.655 110.028c4.444 2.024 6.571 9.53 3.595 12.687-6.048 6.417-15.33 7.524-21.787 2.599-10.92-8.329 4.685-21.441 18.192-15.286Zm-110.219 83.079c-6.825 3.868-15.52 14.032-20.729 24.23-1.623 3.178-11.918 36.728-13.559 44.188l-.935 4.25h10.526l.117-5.194c.064-2.856.616-6.705 1.225-8.553.61-1.847.833-4.46.495-5.806-.367-1.463-.18-2.447.464-2.447.593 0 .8-.45.46-1s-.171-1 .375-1 .789-1.125.539-2.5c-.264-1.455.018-2.5.673-2.5.62 0 .873-.661.564-1.468-.31-.807-.126-1.738.409-2.069.535-.331.714-1.02.397-1.532-.316-.512-.113-.931.453-.931.565 0 .768-.675.452-1.5-.317-.825-.078-1.5.531-1.5s1.011-.337.895-.75c-.117-.413.364-1.791 1.069-3.064.995-1.797 1.016-2.635.09-3.75-.957-1.153-.855-1.436.514-1.436.938 0 1.536-.509 1.328-1.132-.207-.623.737-2.401 2.098-3.953 1.362-1.551 2.63-3.835 2.82-5.074.189-1.24.67-2.499 1.068-2.798.399-.298.871-1.218 1.05-2.043.179-.825.741-1.65 1.25-1.833.509-.184.925-.819.925-1.412s1.668-2.562 3.707-4.376c3.876-3.449 4.259-5.048.729-3.047Zm59.564.603c0 .514.427 2.059.95 3.433.658 1.732.603 2.614-.18 2.875-.724.242-.828 1.073-.288 2.317.463 1.067.969 3.065 1.125 4.44.156 1.375.769 4.3 1.363 6.5 2.357 8.744 3.511 42.157 1.701 49.25l-.83 3.25h20.521c13.767 0 20.742-.36 21.196-1.093 4.024-6.512-10.777-40.555-23.755-54.635-8.635-9.37-21.803-19.236-21.803-16.337Z"
              /></svg
            >
            <DragoonLayer src={whiteBase} layer="base" />
          </div>
          <SkewBox grow={true}>
            <span class="mb-1">
              <span class="bg-white inline-block w-2/5 h-4 rounded-full" />
              <span class="bg-white inline-block w-2/5 h-4 rounded-full" />
              <span class="bg-white inline-block w-1/6 h-4 rounded-full" />
            </span>
            <span>
              <span class="bg-white inline-block w-1/6 h-4 rounded-full" />
              <span class="bg-white inline-block w-2/6 h-4 rounded-full" />
              <span class="bg-white inline-block w-2/6 h-4 rounded-full" />
            </span>
            <div class="flex-grow" />
            <p class="text-right">—A. Dragoon</p>
          </SkewBox>
        </div>
      {/each}
    {:then dragoons}
      {#each dragoons as dragoon}
        <div class="flex flex-col items-center mx-2">
          <div
            class="relative z-10 w-48 h-48 flex-none items-center md:w-72 md:h-72"
            style:background-color={dragoon.backgroundColor}
          >
            <DragoonLayer src={dragoon.frame} layer="frame" />
            <DragoonLayer src={dragoon.handItem} layer="handItem" />
            <DragoonLayer src={dragoon.hat} layer="hat" />
            <DragoonLayer src={dragoon.moustache} layer="moustache" />
            <DragoonLayer src={dragoon.eye} layer="eye" />
            <DragoonLayer src={dragoon.clothes} layer="clothes" />
            <DragoonLayer src={linePng} layer="outline" />
            <DragoonLayer src={shadowPng} layer="shadow" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 350 350"
              class="absolute z-20 outline outline-4 outline-black"
              color={dragoon.baseColor}
              ><path
                fill="currentColor"
                d="M166.297 83.946c-69.442 7.17-131.12 77.05-110.132 124.775 5.342 12.148 8.937 13.694 16.256 6.992 7.066-6.47 10.276-6.071 15.31 1.903 4.877 7.726 22.813 19.115 30.066 19.092 11.078-.036 30.218-9.412 43.187-21.157 6.574-5.952 6.139-5.961 18.545.386 14.909 7.629 19.025 7.732 32.217.811 9.801-5.143 9.888-5.166 12.316-3.353 1.345 1.004 2.358 2.236 2.251 2.736-.107.501.52 1.311 1.394 1.8.982.549 1.59 2.231 1.59 4.399 0 2.478.367 3.323 1.25 2.876.688-.348.463.012-.5.801-.962.789-1.753 2.285-1.756 3.324-.004 1.04-.695 3.21-1.536 4.824-.842 1.614-1.298 3.54-1.014 4.281.292.761-.47 1.795-1.756 2.381-1.25.57-2.339 1.917-2.42 2.995-.081 1.077-1.75 3.515-3.708 5.416-1.958 1.902-3.562 3.803-3.565 4.225-.01 1.436-13.512 14.268-15.013 14.268-.54 0-.982.401-.982.892 0 .49-1.155 1.181-2.566 1.535-3.163.794-2.946 3.926.303 4.39 2.77.395 29.471-7.247 34.434-9.856 2.02-1.062 6.147-2.856 9.173-3.988 4.999-1.871 7.92-4.362 13.746-11.723.67-.848 4.143-1.25 10.789-1.25 37.579 0 48.454-19.613 22.808-41.132-8.52-7.148-8.609-6.642 1.954-11.141 12.499-5.325 13.859-6.912 13.859-16.179 0-10.139-4.844-15.217-21.696-22.742-2.077-.927-3.567-3.279-6.483-10.233-3.362-8.017-8.371-16.184-11.697-19.073-.633-.55-3.508-3.99-6.389-7.644-9.746-12.362-24.096-24.08-31.235-25.506-1.925-.384-5.75-2.029-8.5-3.656-11.464-6.78-27.542-8.84-50.5-6.469Zm78.655 110.028c4.444 2.024 6.571 9.53 3.595 12.687-6.048 6.417-15.33 7.524-21.787 2.599-10.92-8.329 4.685-21.441 18.192-15.286Zm-110.219 83.079c-6.825 3.868-15.52 14.032-20.729 24.23-1.623 3.178-11.918 36.728-13.559 44.188l-.935 4.25h10.526l.117-5.194c.064-2.856.616-6.705 1.225-8.553.61-1.847.833-4.46.495-5.806-.367-1.463-.18-2.447.464-2.447.593 0 .8-.45.46-1s-.171-1 .375-1 .789-1.125.539-2.5c-.264-1.455.018-2.5.673-2.5.62 0 .873-.661.564-1.468-.31-.807-.126-1.738.409-2.069.535-.331.714-1.02.397-1.532-.316-.512-.113-.931.453-.931.565 0 .768-.675.452-1.5-.317-.825-.078-1.5.531-1.5s1.011-.337.895-.75c-.117-.413.364-1.791 1.069-3.064.995-1.797 1.016-2.635.09-3.75-.957-1.153-.855-1.436.514-1.436.938 0 1.536-.509 1.328-1.132-.207-.623.737-2.401 2.098-3.953 1.362-1.551 2.63-3.835 2.82-5.074.189-1.24.67-2.499 1.068-2.798.399-.298.871-1.218 1.05-2.043.179-.825.741-1.65 1.25-1.833.509-.184.925-.819.925-1.412s1.668-2.562 3.707-4.376c3.876-3.449 4.259-5.048.729-3.047Zm59.564.603c0 .514.427 2.059.95 3.433.658 1.732.603 2.614-.18 2.875-.724.242-.828 1.073-.288 2.317.463 1.067.969 3.065 1.125 4.44.156 1.375.769 4.3 1.363 6.5 2.357 8.744 3.511 42.157 1.701 49.25l-.83 3.25h20.521c13.767 0 20.742-.36 21.196-1.093 4.024-6.512-10.777-40.555-23.755-54.635-8.635-9.37-21.803-19.236-21.803-16.337Z"
              /></svg
            >
            <DragoonLayer src={dragoon.horns} layer="horns" />
            <DragoonLayer src={whiteBase} layer="base" />
          </div>
          <SkewBox grow={true}>
            <p>{dragoon.comment}</p>
            <div class="flex-grow" />
            <p class="text-right">—{dragoon.author}</p>
          </SkewBox>
        </div>
      {/each}
    {/await}
  </div>
  <a
    href="https://dragoon.selen2022.com/all"
    target="_blank"
    rel="noopener noreferrer"
    class="mb-6 rounded border-2 border-white px-2 py-1 text-3xl font-black uppercase hover:bg-white hover:text-selen"
    >See More</a
  >
</main>
