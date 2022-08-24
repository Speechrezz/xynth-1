<script>
  import { onMount } from 'svelte';
  import MutableVideoStore from "$lib/stores/MutableVideoStore"
  export let videoPath = "vid/MidiDemo.mp4";

  let vidElement;
  let muteElement;

  const toggleMute = () => {
    vidElement.muted = !vidElement.muted;
    muteElement.src = vidElement.muted ? "svg/volume-x.svg" : "svg/volume.svg";
    if (vidElement.muted === false) {
      $MutableVideoStore = videoPath;
    }
  }

  let muteVideoCallback = () => {};

  $: $MutableVideoStore, muteVideoCallback();

  // Only want muteVideoCallback() to work when DOM is loaded.
  onMount(() => {
    muteVideoCallback = () => {
      if ($MutableVideoStore !== videoPath) {
        vidElement.muted = true;
        muteElement.src = "svg/volume-x.svg";
      }
    }
  })
  
</script>

<div class="lg:hover:scale-[102%] lg:transition-all w-fit">
  <div class="relative w-fit">
    <div class="absolute z-10 top-0 right-0 p-2 rounded-xl m-1 bg-trans-black cursor-pointer
      sm:p-3 sm:m-2 md:p-4" on:click={toggleMute}>
      <img src="svg/volume-x.svg" alt="Volume toggle" bind:this={muteElement}>
    </div>
    <video autoplay muted playsinline loop loading="lazy" src={videoPath}
      class="shadow-lg cursor-pointer rounded-xl lg:rounded-3xl" bind:this={vidElement} on:click={toggleMute}>
      <span class="text-neutral-1 text-h1">test</span>
    </video>
  </div>
</div>