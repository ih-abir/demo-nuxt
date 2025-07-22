<script setup>
import mouseIcon from '/images/mouse-icon.svg'
import headerImage from '/images/header-image.jpg'
import headerGradient1 from '/images/header-gradient1.avif'
import headerGradient3 from '/images/header-gradient3.avif'
</script>

<template>
  <div
    :class="[
      'relative flex items-stretch overflow-hidden w-full',
      'h-full sm:aspect-[16/10] md:aspect-[16/9] max-h-screen',
      'py-[95px] lg:py-[clamp(6.875rem,8.567rem+-3.526vw,8.25rem)]'
    ]"
  >
    <div class="wrapper grid z-[50] text-white">
      <div
        class="flex flex-col py-[clamp(1.25rem,-2.75rem+10vw,6.25rem)] md:flex-row h-fit gap-5"
      >
        <h1
          :class="[
            'order-2 md:order-1 flex-none font-bold',
            'leading-[110%] text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]'
          ]"
        >
          Identity Music
        </h1>

        <div
          :class="[
            'order-1 md:order-2 flex items-center',
            'md:h-[clamp(3.438rem,0.58rem+5.952vw,5.938rem)]'
          ]"
        >
          <span class="w-[68px] h-[5px] bg-[#ff5ee1]"></span>
        </div>

        <div
          :class="[
            'order-3 w-fit font-bold leading-[110%]',
            'text-[clamp(2.5rem,1rem+3.75vw,4.375rem)]'
          ]"
        >
          <div class="flex-none">Digital Music</div>
          Distribution
        </div>
      </div>

      <div class="hidden md:flex items-center gap-2 w-full mt-auto">
        <div class="poppins text-lg">Scroll for more</div>
        <Icon :src="mouseIcon" class="fill-white size-7" />
      </div>
    </div>

    <div class="absolute inset-0 z-10 w-full">
      <!-- Use Nuxt Image for optimized images -->
      <NuxtImg
        class="w-full h-full object-cover"
        :src="headerImage"
        alt="header-image"
        :sizes="[
          '324px xxs:424px xs:639px sm:767px',
          'md:1023px lg:1279px xl:1439px 2xl:1920px'
        ].join(' ')"
        format="avif, webp"
        priority="high"
        loading="eager"
      />
    </div>

    <div
      :class="[
        'sunrise-effect animation-delay-1',
        'absolute z-20 bottom-[80px] right-[15vw]',
        'w-[clamp(9.063rem,5.306rem+18.495vw,27.5rem)]'
      ]"
    >
      <NuxtImg
        class="w-full h-full object-cover"
        :src="headerGradient1"
        alt="header-gradient-1"
        sizes="100px"
        densities="x1"
        format="avif, webp"
        loading="lazy"
      />
    </div>

    <div
      :class="[
        'sunrise-effect animation-delay-3 z-20',
        'absolute w-[clamp(12.5rem,6.897rem+27.586vw,40rem)]',
        '-bottom-[clamp(7.5rem,3.297rem+20.69vw,28.125rem)] -right-8'
      ]"
    >
      <NuxtImg
        class="w-full h-full object-cover"
        :src="headerGradient3"
        alt="header-gradient-3"
        sizes="110px"
        densities="x1"
        format="avif, webp"
        loading="lazy"
      />
    </div>
  </div>
</template>


<style scoped>
@keyframes riseAndFadeIn {
  from {
    opacity: 0;
    filter: blur(1px);
    transform: translateY(200px);
    visibility: hidden;
  }
  to {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
    visibility: visible;
  }
}

.sunrise-effect {
  opacity: 0;
  transform: translateY(200px);
  visibility: hidden;
  animation: riseAndFadeIn 1.5s ease-in-out forwards;
}

.animation-delay-3 {
  animation-delay: 1s;
}

.animation-delay-1 {
  animation-delay: 1.35s;
}
</style>
