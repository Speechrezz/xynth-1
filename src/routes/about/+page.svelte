<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";

</script>


<main class="h-screen w-full overflow-x-clip absolute">
  <Navbar index={2} />

  <!-- Section 1 -->
  <div class="bg-base-2 w-full flex flex-col align-middle">
    <div class="w-main flex flex-col align-middle mt-16 mx-auto h-screen">
      <h1 class="text-h1 text-header-1 mt-32 mb-32">About</h1>
      <h2 class="text-h2 text-left text-neutral-1 mb-2">Contact</h2>
      <p class="text-neutral-1 text-xl"><span class="font-medium">Email:</span> xynthaudio@gmail.com</p>
    </div>
  </div>

  <Footer />
</main>
