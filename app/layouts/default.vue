<script setup>
import BgImage from '/images/bg-image.webp'

onMounted(() => {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-scroll]");
    if (!btn) return;

    const dir = +btn.dataset.scroll,
      carousel = btn.closest(".carousel-wrapper")?.querySelector(".carousel");
    if (!carousel) return;

    const card = carousel.querySelector(".card"),
      width = card.offsetWidth + parseFloat(getComputedStyle(card).gap || 0),
      max = carousel.scrollWidth - carousel.clientWidth,
      pos = carousel.scrollLeft,
      step = width * Math.abs(dir);

    carousel.scrollTo({
      left: dir > 0
        ? (pos >= max - 1 ? 0 : Math.min(pos + step, max))
        : (pos <= 1 ? max : Math.max(pos - step, 0)),
      behavior:
        (dir > 0 && pos < max - 1) || (dir < 0 && pos > 1)
          ? "smooth"
          : "auto",
    });
  });

  document.querySelectorAll('.reveal-up').forEach(el=>
    new IntersectionObserver((e,o)=>{
      if(e[0].isIntersecting){
        el.classList.add('visible');
        o.unobserve(el);
      }
    }).observe(el)
  );
});
</script>

<template>
  <div>
    <!-- Background Image Container -->
    <div
      :class="[
        'fixed inset-0 -z-50',
        'h-screen w-screen bg-cover bg-center'
      ]"
    >
      <NuxtImg
        class="w-full h-full object-cover"
        :src="BgImage"
        alt="background-image"
        :widths="[325, 415, 639, 767, 1023, 665, 1440, 1920]"
        :sizes="[
          '(max-width: 325px) 325px, (max-width: 415px) 415px',
          '(max-width: 639px) 639px, (max-width: 767px) 767px',
          '(max-width: 1023px) 1023px, (max-width: 1440px) 1440px, 1920px'
        ].join(', ')"
        format="avif, webp"
      />
    </div>

    <div class="block w-full">
      <Navbar />
      <main>
        <slot />
      </main>
    </div>

    <Footer />
  </div>
</template>