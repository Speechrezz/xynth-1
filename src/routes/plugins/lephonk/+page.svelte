<script>
  import Navbar from "$lib/comp/Navbar.svelte";
  import Footer from "$lib/comp/Footer.svelte";
  import { onMount } from 'svelte';

  // ============================================================================
  // Do fade in on scroll - (make sure it happens only on browser, not server)
  onMount(() => {
    const faders = document.querySelectorAll('.scroll-fade-in');

    const appearOptions = {
      threshold: 0.19,
      rootMargin: "0px 0px 100px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      })
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    })
  })

</script>

<Navbar index={1}/>

<main class='h-full w-full'>
  <div class='bg-base-5 h-full w-full pt-16 bg-[url("/img/LePhonkFireBG.webp")] bg-no-repeat bg-cover lg:bg-contain bg-top'>
    <div class='w-main flex flex-col mx-auto'>
      <span class='text-5xl text-white mt-24 font-semibold mx-auto drop-shadow-md text-center'>LE PHONK</span>
      <div class='max-w-[26rem] w-11/12 border-b-[1px] border-header-1 mx-auto mt-4'></div>
      <span class='text-lg text-white mx-auto mt-4 drop-shadow-md text-center'>The distortion plugin you will ever own.</span>
      <a href="https://xynth.gumroad.com/l/phonk">
        <button class='btn bg-orange-700 hover:bg-orange-600 mt-4 py-2 rounded-lg text-white font-medium
        4xl:text-lg sm:text-lg'>
          <span>Free on Gumroad</span>
          <img src="/img/RightArrow.svg" alt="Right Arrow" class='ml-4 my-auto filter invert'>
        </button>
      </a>
      <div class='flex space-x-2 md:space-x-16 mt-8 mx-auto justify-center scroll-fade-in'>
        <img src="/img/LePhonk2.png" alt="" class='mt-8 mb-32 aspect-[618/1273] h-auto w-1/3 rounded-lg shadow-lg'>
        <img src="/img/LePhonk3.png" alt="" class='mt-8 mb-32 aspect-[618/1273] h-auto w-1/3 rounded-lg shadow-lg'>
        <img src="/img/LePhonk4.png" alt="" class='mt-8 mb-32 aspect-[618/1273] h-auto w-1/3 rounded-lg shadow-lg'>
      </div>
    </div>
  </div>

  <div class='bg-base-5 w-full h-full'>
    <div class='w-main flex flex-col mx-auto'>
      <div class='flex flex-col w-full scroll-fade-in'>
        <span class='text-white text-4xl font-semibold mx-auto mt-4'>- Zekete -</span>
        <span class='text-header-1 text-xl text-center mt-6'>Go through the most intense set of distortion types you will ever lay eyes on.</span>
        <span class='text-header-1 text-xl text-center'><strong>WARNING:</strong> Very Intense.</span>
        <img src="/img/Zekete.png" alt="Zekete screenshot" class='w-1/3 mx-auto rounded-lg shadow-lg mt-16'>
      </div>

      <div class='flex flex-col w-full mt-32 scroll-fade-in'>
        <span class='text-white text-4xl font-semibold mx-auto mt-4'>- Le Ottz -</span>
        <span class='text-header-1 text-xl text-center mt-6'>Did you know OTT stands for “Official Terrifying Tourment”?</span>
        <span class='text-header-1 text-xl text-center'>Well it does now.</span>
        <img src="/img/LeOttz.png" alt="Zekete screenshot" class='w-1/3 mx-auto rounded-lg shadow-lg mt-16'>
      </div>

      <div class='flex flex-col w-full mt-32 mb-16 scroll-fade-in'>
        <span class='text-white text-4xl font-semibold mx-auto mt-4'>- Le Fonz -</span>
        <span class='text-header-1 text-xl text-center mt-6'>A lot of people think Le Fonz is just a soft clipper.</span>
        <span class='text-header-1 text-xl text-center'>And they're right.</span>
        <img src="/img/LeFonz.png" alt="Zekete screenshot" class='w-1/3 mx-auto rounded-lg shadow-lg mt-16'>
      </div>

      <div class='flex flex-col w-full mt-32 scroll-fade-in'>
        <span class='text-white text-4xl font-semibold mx-auto'>- Skins -</span>
        <span class='text-header-1 text-xl text-center mt-6'>Choose from a variety of tasty flavors.</span>
        <span class='text-header-1 text-xl text-center mb-6'>Yum.</span>
        <div class='flex justify-center space-x-2 md:space-x-16 mx-auto'>
          <img src="/img/LePhonk2.png" alt="" class='mt-8 mb-32 aspect-[618/1273] h-auto w-1/3 rounded-lg shadow-lg'>
          <img src="/img/LePhonk3.png" alt="" class='mt-8 mb-32 aspect-[618/1273] h-auto w-1/3 rounded-lg shadow-lg'>
          <img src="/img/LePhonk4.png" alt="" class='mt-8 mb-32 aspect-[618/1273] h-auto w-1/3 rounded-lg shadow-lg'>
        </div>
      </div>

      <div class='flex flex-col justify-center w-full mt-24 mb-32 bg-[url("/img/XynthBigLogo.svg")] 
        bg-no-repeat bg-center pt-10 pb-20 bg-contain scroll-fade-in'>
        <span class='text-white text-5xl font-medium mx-auto mt-4 drop-shadow-lg'>Available now for Free</span>
        <a href="https://xynth.gumroad.com/l/phonk">
          <button class='btn bg-orange-700 hover:bg-orange-600 mt-6 py-2 rounded-lg text-white font-medium
            4xl:text-lg sm:text-lg'>
            <span>Free on Gumroad</span>
            <img src="/img/RightArrow.svg" alt="Right Arrow" class='ml-4 my-auto filter invert'>
          </button>
        </a>
      </div>
    </div>
  </div>
</main>

<Footer />