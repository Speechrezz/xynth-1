<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
</script>

<Navbar index={0}/>

<main class="h-screen w-full overflow-x-clip absolute">

  <!-- Section 1 -->
  <div class="bg-base-1 w-full flex flex-col align-middle">
    <div class="w-main flex flex-col align-middle mt-16 mx-auto">
      <h1 class="text-h1 text-header-1 pt-32 pb-4">Xynth</h1>
      <p class="text-h2 text-neutral-1 pt-2 px-6 border-t-2 border-slate-600 mx-auto">Software for producers, by producers.</p>
      <button class="btn mt-36 mb-12">Buy on Gumroad ($25) -></button>
      <img src="img/rezonator.png" alt="Rezonator" class="rounded-xl z-10 mb-4 shadow-md lg:rounded-3xl lg:shadow-2xl lg:-mb-[26rem]">
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-1"></div>

  <!-- Section 2 -->
  <div class="bg-base-3 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <h1 class="text-h1 text-header-1 pt-32 lg:pt-[32rem] pb-2">Tuning</h1>
      <p class="text-h3 text-neutral-1 pt-2 pb-32 mx-auto">
        Easily tune the six included resonators to create beautiful harmonies. Turn even the harshest of sounds into pleasing chords.
      </p>
    </div>
  </div>
</main>

<!-- <Footer /> -->