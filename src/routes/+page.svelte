<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
</script>

<style>
  @tailwind components;

  @layer components {
    .bg-blob-1 {
      @apply bg-no-repeat bg-cover bg-[url('svg/TopBlob.svg')];
    }

    .bg-blob-2 {
      @apply bg-no-repeat bg-[length:480px] bg-[url('svg/BottomBlob.svg')] bg-right-bottom;
    }
  }
</style>

<Navbar />

<main class="h-screen">

  <!-- Section 1 -->
  <div class="bg-neutral-1 flex flex-col align-middle xl:bg-blob-2">
    <div class="xl:bg-blob-1 h-[480px] w-[480px] absolute"></div>
    <div class="w-main flex flex-col align-middle mt-16 mx-auto">
      <h1 class="text-center font-medium text-7xl text-base-1 pt-32 pb-2">REZONATOR</h1>
      <p class="text-center text-3xl text-base-2 pt-2 border-t-2 border-slate-600 mx-auto">Add harmonic resonance to any sound.</p>
      <button class="btn mt-36 mb-72">Buy on Gumroad ($25) -></button>
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-1"></div>

  <!-- Section 2 -->
  <div class="bg-base-3 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <img src="img/rezonator.png" alt="Rezonator" class="rounded-3xl shadow-2xl -mt-[17rem]">
      <h1 class="text-center font-medium text-7xl text-header-1 pt-32 pb-2">Tuning</h1>
      <p class="text-center text-2xl text-neutral-1 pt-2 mx-auto">
        Easily tune the six included resonators to create beautiful harmonies. Turn even the harshest of sounds into pleasing chords.
      </p>
    </div>
  </div>
</main>

<!-- <Footer /> -->