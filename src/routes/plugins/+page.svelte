<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
</script>

<Navbar index={1}/>

<main class='h-full w-full overflow-x-clip'>
  <div class='bg-base-1 h-full pt-16'>
    <div class='w-main flex flex-col mx-auto'>
      <img src="img/Plugins-header.svg" alt="Plugin section header" class='w-96 mt-24 mx-auto'>
      <span class='text-neutral-2 mt-32 mx-auto text-lg text-center'>
        Xynth Audio's full list of plugin tools.
      </span>
      <span class='text-neutral-2 mt-8 mb-24 mx-auto text-lg text-center'>
        Each plugin has gone through a careful process of creation, beta testing and feedback from the community.
      </span>
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-1"></div>

  <!-- Section 2 -->
  <div class="bg-neutral-1 flex flex-col px-2 pt-12 lg:flex-row justify-center lg:px-32 lg:space-x-24 lg:pt-8">
    <div class="flex-1">
      <h2 class="text-h1 text-base-1 mb-4 lg:mb-0">REZONATOR</h2>
      <p class="text-h3 hidden mt-2 mb-12 lg:block">Add harmonic resonance to any sound.</p>
      <a href="/rezonator">
        <img src="img/rezonator.png" alt="Rezonator" class="rounded-xl z-10 mb-12 shadow-md animate-fadeIn max-h-[30rem] mx-auto
        lg:mb-16 lg:rounded-2xl lg:shadow-2xl 4xl:rounded-3xl
        lg:hover:scale-[102%] lg:transition-all">
      </a>
    </div>
    <div class="flex-1">
      <h2 class="text-h1 text-base-1 mb-4 lg:mb-0">LE PHONK</h2>
      <p class="text-h3 hidden mt-2 mb-12 lg:block">The best distortion plugin in town.</p>
      <a href="/plugins/lephonk">
        <img src="img/LePhonk1.webp" alt="Placeholder plugin" class="rounded-xl z-10 mb-12 shadow-md animate-fadeIn mx-auto max-h-[30rem]
          lg:mb-16 lg:rounded-2xl lg:shadow-2xl 4xl:rounded-3xl
          lg:hover:scale-[102%] lg:transition-all">
      </a>
    </div>
  </div>
  <div class='bg-neutral-1 w-full flex justify-center lg:py-16'>
    <div class='flex flex-col'>
      <h2 class="text-h1 text-base-1 mb-4 lg:mb-0">NOT READY</h2>
      <p class="text-h3 hidden mt-2 mb-12 lg:block">More plugins coming soon...</p>
      <img src="img/nullPlugin.svg" alt="Placeholder plugin" class="rounded-xl z-10 mb-12 shadow-md animate-fadeIn mx-auto
        lg:mb-16 lg:rounded-2xl lg:shadow-2xl 4xl:rounded-3xl
        lg:hover:scale-[102%] lg:transition-all w-[50rem]">
    </div>
  </div>
  </main>

<Footer />