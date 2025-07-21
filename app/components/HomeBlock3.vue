<script setup>
import image1 from '/images/moonwax.jpg'
import image2 from '/images/neolux.jpg'
import image3 from '/images/rebecca.jpg'
import image4 from '/images/leo.jpg'
import image5 from '/images/izabeats.jpg'
import image6 from '/images/rvdy.jpg'
import image7 from '/images/michael.jpg'
import image8 from '/images/kendra.jpg'
import image9 from '/images/mario.jpg'

const items = [
  {
    title: 'Moon Wax',
    intro: 'Moon Wax are breaking the boundaries of music by drawing influences...',
    img: image1,
  },
  {
    title: 'Neolux',
    intro: 'Neolux is an independent hardstyle/hard dance producer...',
    img: image2,
  },
  {
    title: 'Rebecca Mardal',
    intro: 'Rebecca Mardal is a Swedish guitarist & producer...',
    img: image3,
  },
  {
    title: 'leo.',
    intro: "Through his catchy melodies and honest lyrics, leo.'s music...",
    img: image4,
  },
  {
    title: 'IzaBeats',
    intro: 'With traditional instrumental skills and modern production...',
    img: image5,
  },
  {
    title: 'RVDY',
    intro: 'RVDY delivers both cutting-edge electronic tracks...',
    img: image6,
  },
  {
    title: 'Michael Logozar',
    intro: 'Michael Logozar is a composer and producer...',
    img: image7,
  },
  {
    title: 'Kendra Logozar',
    intro: 'Modern Classical composer and pianist Kendra...',
    img: image8,
  },
  {
    title: 'Mario Viñuela',
    intro: 'Mario Viñuela is a Spanish composer made for film...',
    img: image9,
  },
]

onMounted(() => {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-scroll]')
    if (!btn) return

    const dir = +btn.dataset.scroll
    const carousel = btn.closest('.carousel-wrapper')?.querySelector('.carousel')
    if (!carousel) return

    const card = carousel.querySelector('.card')
    const gap = parseFloat(getComputedStyle(carousel).gap || '0')
    const width = card.offsetWidth + gap
    const max = carousel.scrollWidth - carousel.clientWidth
    const pos = carousel.scrollLeft
    const step = width * Math.abs(dir)

    carousel.scrollTo({
      left: dir > 0
        ? (pos >= max - 1 ? 0 : Math.min(pos + step, max))
        : (pos <= 1 ? max : Math.max(pos - step, 0)),
      behavior:
        (dir > 0 && pos < max - 1) || (dir < 0 && pos > 1) ? 'smooth' : 'auto',
    })
  })
})
</script>

<template>
  <div class="section-v-pad group">
    <div class="reveal-up wrapper grid division-gap text-white text-center">
      <div class="carousel-wrapper flex items-center gap-5">
        <button
          data-scroll="-1"
          class="arrow lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          &#10094;
        </button>

        <div class="carousel" id="carousel">
          <div
            v-for="{ title, intro, img } in items"
            :key="title"
            class="card flex flex-col gap-4"
          >
            <NuxtImg
              class="w-full h-fit object-cover"
              :src="img"
              alt="artist image"
              width="300"
              height="200"
              :sizes="[
                '207px xxs:295px xs:484px sm:298px',
                '800:324px 860:395px lg:290px 1151:330px xl:355px'
              ].join(' ')"
              format="avif, webp"
            />

            <div class="poppins text-lg font-semibold text-dark">
              {{ title }}
            </div>
            <div class="poppins text-sm leading-[160%] text-dark-lighter line-clamp-6">
              {{ intro }}
            </div>
          </div>
        </div>

        <button
          data-scroll="1"
          class="arrow lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          &#10095;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 30px;
}
.carousel::-webkit-scrollbar {
  display: none;
}

.card {
  flex: 0 0 calc((100% - (30px * (1 - 1))) / 1);
  scroll-snap-align: center;

  @media (min-width: 640px) {
    flex: 0 0 calc((100% - (30px * (2 - 1))) / 2);
  }

  @media (min-width: 1024px) {
    flex: 0 0 calc((100% - (30px * (3 - 1))) / 3);
  }
}

.arrow {
  @apply justify-center items-center cursor-pointer text-[clamp(1.5rem,1.2rem+0.75vw,1.875rem)] text-[#000];
}
</style>
