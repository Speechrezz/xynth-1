<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";

</script>


<main class="w-full overflow-x-clip absolute">
  <Navbar index={-1} />

  <!-- Section 1 -->
  <div class="bg-base-1 w-full flex flex-col align-middle">
    <div class="w-main flex flex-col align-middle mt-16 mx-auto">
      <h1 class="text-h1 text-header-1 mt-8 sm:mt-48 mb-4">Contact</h1>
    </div>
  </div>

  <!-- Section 2 -->
  <div class="bg-base-2 w-full flex flex-col align-middle">
    <div class="w-main flex flex-col align-middle mt-16 mx-auto h-fit sm:h-[65vh]">
      <h2 class="text-h2 text-left text-neutral-1 mb-2 font-medium">Contact</h2>
      <p class="text-neutral-1 text-p1"><span class="font-medium">Email:</span> xynthaudio@gmail.com</p>

      <div class="flex flex-col space-y-8 sm:space-y-0 sm:flex-row justify-around text-neutral-1 text-h2 mt-8 sm:mt-48 mb-8">
        <a href="https://www.instagram.com/xynthaudio/" class="link-footer flex flex-col hover:scale-105">
          <span class="mx-auto">Instagram</span>
          <img src="svg/instagram.svg" alt="Instagram" class="mt-4 w-32 h-32 mx-auto">
        </a>
        <a href="https://twitter.com/XynthAudio" class="link-footer flex flex-col hover:scale-105">
          <span class="mx-auto">Twitter</span>
          <img src="svg/twitter.svg" alt="Instagram" class="mt-4 w-32 h-32 mx-auto">
        </a>
        <a href="https://xynth.gumroad.com/" class="link-footer flex flex-col hover:scale-105">
          <span class="mx-auto">Gumroad</span>
          <img src="svg/gumroad.svg" alt="Instagram" class="mt-4 w-32 h-32 mx-auto">
        </a>
      </div>
    </div>
  </div>

  <Footer />
</main>
