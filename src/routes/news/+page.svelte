<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
  import Article from "$lib/comp/News/Article.svelte";
</script>

<Navbar index={2}/>

<main class="h-screen w-full overflow-x-clip absolute">

  <!-- Section 1 -->
  <div class="bg-base-1 w-full flex flex-col align-middle">
    <div class="w-main flex flex-col align-middle mt-16 mx-auto">
      <h1 class="text-h1 text-header-1 pt-8 lg:pt-64 pb-4">What's new?</h1>
      <p class="text-h2 text-neutral-1 mx-2 pt-2 sm:px-6 border-t-2 border-slate-600 
      sm:mx-auto lg:pb-72">
        Scroll down to learn more about our latest updates.
      </p>
    </div>
  </div>

  <div class="lg:trans-wave lg:wave-1"></div>

  <!-- Section 2 -->
  <div class="bg-neutral-1 flex flex-col px-2 pt-12 lg:flex-row justify-center lg:px-32 lg:space-x-24 lg:pt-8">
    <div class="w-main mb-8">
      <Article />
    </div>
  </div>
  <Footer />
</main>