<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
  import Article from "$lib/comp/News/Article.svelte";
</script>

<Navbar index={2}/>

<main class="h-screen w-full overflow-x-clip absolute">

  <!-- Section 1 -->
  <div class="bg-base-1 w-full flex flex-col align-middle relative -z-50">
    <div class="w-main flex flex-col align-middle mt-16 mx-auto relative">
      <h1 class="text-h1 text-header-1 pt-8 lg:pt-64 pb-4">What's new?</h1>
      <p class="text-h2 text-neutral-1 mx-2 pt-8 pb-8 sm:px-6 
      sm:mx-auto lg:pb-72">
        Scroll down to learn more about our latest updates.
      </p>
    </div>
    <div class="absolute hidden xl:block w-full overflow-clip -z-20">
      <div class="relative bg-base-4 rounded-full   w-[28rem] h-[28rem] -top-2 -left-2"></div>
      <div class="relative bg-accent-2 rounded-full w-[15rem] h-[15rem]  top-20 left-96"></div>

      <div class="relative bg-accent-1 rounded-full w-[10rem] h-[10rem] bottom-[26rem] left-[calc(100vw-32rem)] z-10"></div>
      <div class="relative bg-base-4 rounded-full   w-[46rem] h-[46rem] bottom-[40rem] left-[calc(100vw-32rem)] "></div>
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-1"></div>

  <!-- Section 2 -->
  <div class="bg-neutral-1 flex flex-col px-2 pt-12 lg:flex-row justify-center lg:px-32 lg:space-x-24 lg:pt-8">
    <div class="w-main mb-8 animate-fadeIn mx-auto">
      <Article />
    </div>
  </div>
  <Footer />
</main>