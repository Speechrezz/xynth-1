<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
</script>

<style>
  .bg-blob-1 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('src/lib/res/svg/TopBlob.svg');
    background-size: 480px;
  }

  .bg-blob-2 {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('src/lib/res/svg/BottomBlob.svg');
    background-size: 480px;
    background-position: bottom right;
    background-position-y: calc(100%+10px);
  }
</style>

<Navbar />

<main class="h-screen">

  <!-- Section 1 -->
  <div class="bg-neutral-1 flex flex-col align-middle bg-blob-2">
    <div class="bg-blob-1 h-[480px] w-[480px] absolute"></div>
    <div class="w-main flex flex-col align-middle mt-16 mx-auto">
      <h1 class="text-center font-medium text-7xl text-base-1 pt-32 pb-2">REZONATOR</h1>
      <p class="text-center text-3xl text-base-2 pt-2 border-t-2 border-slate-600 mx-auto">Add harmonic resonance to any sound.</p>
      <button class="btn mt-36 mb-72">Buy on Gumroad ($25) -></button>
    </div>
  </div>

  <div class="trans-wave wave-1"></div>

  <!-- Section 2 -->
  <div class="bg-base-3 flex justify-center">
    <div class="w-main flex flex-col align-middle">
      <img src="src/lib/res/img/rezonator.png" alt="Rezonator" class="rounded-3xl shadow-2xl -mt-[17rem]">
      <h1 class="text-center font-medium text-7xl text-header-1 pt-32 pb-2">Tuning</h1>
      <p class="text-center text-2xl text-neutral-1 pt-2 mx-auto">
        Easily tune the six included resonators to create beautiful harmonies. Turn even the harshest of sounds into pleasing chords.
      </p>
    </div>
  </div>
</main>

<!-- <Footer /> -->