<script>
  const baseLook = "link-nav px-6 h-full flex align-middle border-b-2 ";
  const look = baseLook + "border-b-slate-600";
  const lookHighlighted = baseLook + "border-b-accent-1";

  export let index = 0;
</script>


<nav class="bg-base-1 w-full h-16 flex justify-center leading-[normal] fixed z-50">
  <div class="w-main flex lg:justify-between align-middle justify-center">

    <!-- Left links -->
    <a href="#top" class="link-nav h-full lg:flex align-middle hidden">
      <span class="my-auto">Xynth</span>
    </a>

    <!-- Right links -->
    <div class="flex w-full justify-center lg:justify-end">
      <a href="/" class={index === 0 ? lookHighlighted : look}>
        <span class="my-auto">Home</span>
      </a>
      <a href="/rezonator" class={index === 1 ? lookHighlighted : look}>
        <span class="my-auto">Plugins</span>
      </a>
      <a href="#top" class={index === 2 ? lookHighlighted : look}>
        <span class="my-auto">About</span>
      </a>
    </div>
  </div>
</nav>