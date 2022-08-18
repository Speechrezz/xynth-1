<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
</script>

<Navbar index={0}/>

<main class="h-screen w-full overflow-x-clip absolute">

  <!-- Section 1 -->
  <div class="bg-base-1 w-full flex flex-col align-middle">
    <div class="w-main flex flex-col align-middle mt-16 mx-auto">
      <h1 class="text-h1 text-header-1 pt-8 lg:pt-32 pb-4">Xynth</h1>
      <p class="text-h2 text-neutral-1 mx-2 pt-2 sm:px-6 border-t-2 border-slate-600 sm:mx-auto">Software for producers, by producers.</p>
      <a href="/rezonator" class="mx-auto mt-16 mb-4 lg:mt-36 lg:mb-24">
        <button class="btn">View plugins
          <img src="img/RightArrow.svg" alt="Arrow" class="ml-4 my-auto">
        </button>
      </a>
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-1"></div>

  <!-- Section 2 -->
  <div class="bg-neutral-1 flex flex-col px-2 pt-12 lg:flex-row justify-center lg:px-32 lg:space-x-24 lg:pt-8">
    <div class="flex-1">
      <h2 class="text-h1 text-base-1 mb-4 lg:mb-0">REZONATOR</h2>
      <p class="text-h3 hidden mt-2 mb-12 lg:block">Add harmonic resonance to any sound.</p>
      <a href="/rezonator">
        <img src="img/rezonator.png" alt="Rezonator" class="rounded-xl z-10 mb-12 shadow-md 
        lg:mb-16 lg:rounded-3xl lg:shadow-2xl
        lg:hover:scale-[102%] lg:transition-all">
      </a>
    </div>
    <div class="flex-1">
      <h2 class="text-h1 text-base-1 mb-4 lg:mb-0">NOT READY</h2>
      <p class="text-h3 hidden mt-2 mb-12 lg:block">More plugins coming soon...</p>
      <img src="img/nullPlugin.svg" alt="Placeholder plugin" class="rounded-xl z-10 mb-12 shadow-md
        lg:mb-16 lg:rounded-3xl lg:shadow-2xl
        lg:hover:scale-[102%] lg:transition-all">
    </div>
  </div>
</main>

<!-- <Footer /> -->