<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
  import { onMount } from 'svelte';
  import MutableVideo from "$lib/comp/Rezonator/MutableVideo.svelte";

  // ============================================================================
  // Do fade in on scroll - (make sure it happens only on browser, not server)
  onMount(() => {
    const faders = document.querySelectorAll('.scroll-fade-in');

    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px 100px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      })
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    })
  })

  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<Navbar index={1}/>
<main class="h-screen w-full overflow-x-clip absolute">

  <!-- Section 1 - Main -->
  <div class="bg-neutral-1 w-full flex flex-col align-middle relative">
    <!-- Header -->
    <div class="w-main flex flex-col align-middle mt-16 mx-auto relative">
      <h1 class="text-h1 text-base-1 pt-8 lg:pt-32 pb-2">REZONATOR</h1>
      <p class="text-h2 text-base-2 pt-2 border-t-2 border-slate-600 mx-auto px-4">
        Add harmonic resonance to any sound.
      </p>
      <a href="https://xynth.gumroad.com/l/rezonator" class="mx-auto mt-16 mb-4 lg:mt-36 lg:mb-12">
        <button class="btn">Buy on Gumroad ($25)
          <img src="img/RightArrow.svg" alt="Arrow" class="ml-3 my-auto">
        </button>
      </a>
      <img src="img/rezonator.png" alt="Rezonator" class="rounded-xl z-20 mb-4 shadow-md animate-fadeIn
        lg:rounded-3xl lg:shadow-2xl lg:-mb-[26rem]
        lg:hover:scale-[102%] lg:transition-all">
    </div>

    <!-- Background -->
    <div class="hidden xl:block absolute" style:transform="translateY({scroll * 0.2}px)">
      <img src="svg/TopBlob.svg" alt="Top Blob" class="relative">
      <img src="svg/BottomBlob.svg" alt="Bottom Blob"
        class="relative -right-[calc(100vw-30rem)] bottom-48">
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-3 z-10 relative"></div>

  <!-- Section 2 - Tuning -->
  <div class="bg-base-3 flex justify-center relative z-10">
    <div class="w-main flex flex-col align-middle">
      <h1 class="text-h1 text-header-1 pt-32 lg:pt-[32rem] pb-2">Tuning</h1>
      <p class="text-h3 text-neutral-1 pt-2 pb-16 mx-auto scroll-fade-in">
        Easily tune the six included resonators to create beautiful harmonies. Turn even the harshest of sounds into pleasing chords.
      </p>
      <div class="scroll-fade-in mx-auto sm:max-w-lg mb-16 sm:mb-32">
        <MutableVideo videoPath={"vid/PitchDemo.mp4"}/>
      </div>
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-4 relative z-10"></div>

  <!-- Section 3 - States -->
  <div class="bg-base-2 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <h1 class="text-h1 text-header-1 pt-12 sm:pt-24 pb-2">States</h1>
      <p class="text-h3 text-neutral-1 pt-2 pb-16 mx-auto">
        Program multiple chords/harmonies and switch between them with a single slider.
      </p>
      <div class="scroll-fade-in mx-auto">
        <MutableVideo videoPath={"vid/StatesDemo.mp4"}/>
      </div>
    </div>
  </div>

  <!-- Section 4 - Midi -->
  <div class="bg-base-2 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <h1 class="text-h1 text-header-1 pt-12 sm:pt-24 pb-2">Midi input</h1>
      <p class="text-h3 text-neutral-1 pt-2 pb-16 mx-auto">
        Directly route midi into the Rezonator in order to create more complex melodies and harmonies.
      </p>
      <div class="scroll-fade-in mx-auto mb-16 sm:mb-32">
        <MutableVideo videoPath={"vid/MidiDemo.mp4"}/>
      </div>
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-5"></div>

  <!-- Section 5 - FX -->
  <div class="bg-base-3 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <h1 class="text-h1 text-header-1 pt-12 sm:pt-24 pb-2">FX</h1>
      <p class="text-h3 text-neutral-1 pt-2 pb-16 mx-auto">
        Choose between the available filter, reverb and stereo-width effects to effect only the wet signal.
      </p>
      <div class="scroll-fade-in mx-auto">
        <img src="img/settings.png" alt="Settings page" class="rounded-xl z-10 mb-16 sm:mb-32 shadow-md
          lg:rounded-3xl lg:shadow-2xl
          lg:hover:scale-[102%] lg:transition-all">
      </div>
    </div>
  </div>

  <!-- Section 6 - Support us -->
  <div class="bg-base-3 flex justify-center">
    <div class="w-main flex flex-col align-middle mb-48 scroll-fade-in">
      <h1 class="text-h1 text-header-1 pt-24 lg:pt-24 pb-2">Support us</h1>
      <a href="https://xynth.gumroad.com/l/rezonator" class="mx-auto mt-8 mb-4 lg:mb-12">
        <button class="btn">Buy on Gumroad ($25)
          <img src="img/RightArrow.svg" alt="Arrow" class="ml-3 my-auto">
        </button>
      </a>
    </div>
  </div>
  <Footer />
</main>