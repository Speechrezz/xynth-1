<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
</script>

<style>
  @tailwind components;

  @layer components {
    .bg-blob-1 {
      @apply bg-no-repeat bg-cover bg-[url('$lib/svg/TopBlob.svg')];
    }

    .bg-blob-2 {
      @apply bg-no-repeat bg-[length:480px] bg-[url('$lib/svg/BottomBlob.svg')] bg-right-bottom;
    }
  }
</style>

<Navbar index={1}/>

<main class="h-screen w-full overflow-x-clip absolute">

  <!-- Section 1 - Main -->
  <div class="bg-neutral-1 w-full flex flex-col align-middle xl:bg-blob-2">
    <div class="hidden xl:block bg-blob-1 h-[480px] w-[480px] absolute"></div>
    <div class="w-main flex flex-col align-middle mt-16 mx-auto">
      <h1 class="text-h1 text-base-1 pt-8 lg:pt-32 pb-2">REZONATOR</h1>
      <p class="text-h2 text-base-2 pt-2 border-t-2 border-slate-600 mx-auto px-4">
        Add harmonic resonance to any sound.
      </p>
      <a href="https://xynth.gumroad.com/l/rezonator" class="mx-auto mt-16 mb-4 lg:mt-36 lg:mb-12">
        <button class="btn">Buy on Gumroad ($25)
          <img src="img/RightArrow.svg" alt="Arrow" class="ml-3 my-auto">
        </button>
      </a>
      <img src="img/rezonator.png" alt="Rezonator" class="rounded-xl z-10 mb-4 shadow-md 
        lg:rounded-3xl lg:shadow-2xl lg:-mb-[26rem]
        lg:hover:scale-[102%] lg:transition-all">
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-2"></div>

  <!-- Section 2 - Tuning -->
  <div class="bg-base-3 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <h1 class="text-h1 text-header-1 pt-32 lg:pt-[32rem] pb-2">Tuning</h1>
      <p class="text-h3 text-neutral-1 pt-2 pb-16 mx-auto">
        Easily tune the six included resonators to create beautiful harmonies. Turn even the harshest of sounds into pleasing chords.
      </p>
      <img src="img/tuning.png" alt="Zoom in on Rezonator" class="rounded-xl z-10 mb-32 shadow-md mx-8
        lg:rounded-3xl lg:shadow-2xl sm:max-w-lg sm:mx-auto
        lg:hover:scale-[102%] lg:transition-all">
    </div>
  </div>

  <!-- Section 3 - States -->
  <div class="bg-base-2 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <h1 class="text-h1 text-header-1 pt-24 lg:pt-24 pb-2">States</h1>
      <p class="text-h3 text-neutral-1 pt-2 pb-16 mx-auto">
        Program multiple chords/harmonies and switch between them with a single slider.
      </p>
      <img src="img/states.png" alt="States demonstration" class="rounded-xl z-10 mb-32 shadow-md
        lg:rounded-3xl lg:shadow-2xl lg:max-w-4xl lg:mx-auto
        lg:hover:scale-[102%] lg:transition-all">
    </div>
  </div>

  <!-- Section 4 - FX -->
  <div class="bg-base-2 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <h1 class="text-h1 text-header-1 pt-24 lg:pt-24 pb-2">FX</h1>
      <p class="text-h3 text-neutral-1 pt-2 pb-16 mx-auto">
        Choose between the available filter, reverb and stereo-width effects to effect only the wet signal.
      </p>
      <img src="img/settings.png" alt="Settings page" class="rounded-xl z-10 mb-32 shadow-md
        lg:rounded-3xl lg:shadow-2xl
        lg:hover:scale-[102%] lg:transition-all">
    </div>
  </div>

  <!-- Section 5 - Support us -->
  <div class="bg-base-2 flex justify-center">
    <div class="w-main flex flex-col align-middle mb-96">
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