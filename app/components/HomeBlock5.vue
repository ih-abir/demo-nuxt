<script setup>
import quoteIcon from '/images/quote-right.svg'
import image1 from '/images/vidorra.jpg'
import image2 from '/images/tim-north.jpg'
import image3 from '/images/dead-fish.jpg'
import image4 from '/images/mario-vinuela.jpg'
import image5 from '/images/gemp.jpg'
import image6 from '/images/brandon-bester.jpg'
import image7 from '/images/hevi-beats.jpg'
import image8 from '/images/roshin.jpg'

const items = [
  {
    "name": "Vidorra",
    "text": "Finding Identity has been an absolute dream. Being able to work closely with Alex has been not only helpful, but game changing in how I learn about distribution and how to get my music out. The service is extremely personalised and I feel a real sense of care in the work Identity Music do.",
    "img": image1,
  },
  {
    "name": "Tim North",
    "text": "After only a few months, it's very notable what a positive difference it makes to work with Alex and the team. Working with Identity has truly been a collaborative experience, and as a creative I feel like that type of relationship is ideal across the board. These guys understand musicians.",
    "img": image2,
  },
  {
    "name": "DeadFish",
    "text": "Working with you is a pleasure - everything is nice, quick, and easy. The live chat support is always there to help me so I'm never stressed that I'm going to mess up my release. You're always helpful, kind and friendly - I can see that you really care about us - the artists, and want to help us!",
    "img": image3,
  },
  {
    "name": "Mario Viñuela",
    "text": "Professional, attentive and always ready to help. I started a few months ago with them and what makes the difference, compared to other distributors with whom I have worked, is the almost immediate contact you have to solve any problem or question that arises along the way. I hope to continue collaborating on my next musical releases.",
    "img": image4,
  },
  {
    "name": "Gemp",
    "text": "Personal and professional! It's a pleasure working with them. ",
    "img": image5,
  },
  {
    "name": "Brandon Bester",
    "text": "Identity Music has changed my life!!! They have helped me take my music career to the next level. They are insanely selfless, amazing communicators, and timely.",
    "img": image6,
  },
  {
    "name": "HeviBeats",
    "text": "Fantastic communication and lovely people :) Providing great service, thank you.",
    "img": image7,
  },
  {
    "name": "Roshin",
    "text": "I was with a mass Distributer before Identity Music, and lord the contrast. I have an engaged, talented team over here who are supportive of me being an artist that doesn't have to stick to one box. I shared a small percentage of music royalties and got a team back I can lean on.",
    "img": image8,
  }
]

onMounted(() => {
  const carousel = document.getElementById('testimonial-carousel')
  if (!carousel) return

  const cards = carousel.querySelectorAll('.card')
  const total = cards.length
  const mq = window.matchMedia('(min-width:768px)')

  const getCardWidth = () =>
    cards[0].offsetWidth + parseFloat(getComputedStyle(carousel).gap || 0)

  const highlight = () => {
    const scroll = carousel.scrollLeft
    const index = Math.round(scroll / getCardWidth())
    let target = mq.matches ? (index + 1) % total : index % total

    if (!mq.matches && scroll >= carousel.scrollWidth - carousel.clientWidth - 1) {
      target = total - 1
    }

    cards.forEach((card, i) => {
      card.classList.remove(
        'bg-primary',
        'bg-dark-lighter',
        'md:bg-primary',
        'md:bg-dark-lighter'
      )
      card.classList.add(
        mq.matches
          ? i === target
            ? 'md:bg-primary'
            : 'md:bg-dark-lighter'
          : i === target
            ? 'bg-primary'
            : 'bg-dark-lighter'
      )
    })
  }

  carousel.closest('.carousel-wrapper')
    .querySelectorAll('.arrow')
    .forEach(btn =>
      btn.addEventListener('click', () => setTimeout(highlight, 350))
    )

  carousel.addEventListener('scroll', () => {
    clearTimeout(carousel._timer)
    carousel._timer = setTimeout(highlight, 150)
  })

  mq.addEventListener('change', highlight)
  highlight()
})
</script>

<template>
  <div
    class="reveal-up section grid lg:grid-cols-10 xl:grid-cols-3 2xl:grid-cols-2 division-gap text-white items-center bg-dark"
  >
    <div
      class="col-span-1 lg:col-span-2 xl:col-span-1 section-v-pad w-full lg:max-w-[650px] mx-auto lg:mr-0 px-[min(100px,4vw)] lg:pr-0 text-center lg:text-left"
    >
      <h2>
        What<br />
        people say<br />
        about us
      </h2>
    </div>

    <div
      class="relative group carousel-wrapper col-span-1 lg:col-span-8 xl:col-span-2 2xl:col-span-1"
    >
      <button
        data-scroll="-1"
        class="arrow left lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
      >
        &#10094;
      </button>

      <div class="carousel h-full" id="testimonial-carousel">
        <div
          v-for="({ name, text, img }, idx) in items"
          :key="name"
          :class="[
            'card flex flex-col gap-[25px] items-stretch',
            'py-[clamp(45px,2.063rem+1.875vw,60px)]',
            'px-[clamp(1.875rem,0.875rem+2.5vw,3.125rem)]',
            idx === 0 ? 'bg-primary' : 'bg-dark-lighter',
            idx === 1 ? 'md:bg-primary' : 'md:bg-dark-lighter'
          ]"
        >
          <div
            class="text-xl line-clamp-10 lg:line-clamp-15 xl:line-clamp-20 before:content-['“'] after:content-['”']"
          >
            {{ text }}
          </div>
          <div class="flex division-in-gap mt-auto">
            <div class="flex-none">
              <NuxtImg
                :src="img"
                width="60"
                height="60"
                class="size-[60px] rounded-full object-cover"
                format="avif, webp"
                alt="avatar"
                loading="lazy"
              />
            </div>
            <div class="flex flex-col division-gap w-full">
              <div class="flex flex-col division-in-element-gap">
                <div class="poppins text-lg font-semibold">{{ name }}</div>
                <div class="text-sm">Artist</div>
              </div>
              <Icon
                :src="quoteIcon"
                class="size-[30px] fill-white ml-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        data-scroll="1"
        class="arrow right lg:opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
      >
        &#10095;
      </button>
    </div>
  </div>
</template>

<style scoped>
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
}

@media (min-width: 640px) {
  .card {
    flex: 0 0 calc((100% - (30px * (1.5 - 1))) / 1.5);
  }
}

@media (min-width: 768px) {
  .card {
    flex: 0 0 calc((100% - (30px * (2.5 - 1))) / 2.5);
  }
}

.arrow {
  @apply absolute justify-center items-center cursor-pointer text-[clamp(1.5rem,1.2rem+0.75vw,1.875rem)] text-[#fff] hover:text-[#000] bg-[#fff]/50 hover:bg-[#fff] w-[50px] h-[100px];
  top: 50%;
  transform: translateY(-50%);
}

.arrow.left {
  @apply rounded-r-full;
  left: 0;
}

.arrow.right {
  @apply rounded-l-full;
  right: 0;
}
</style>
