<script setup>
import musicIcon from '/images/music-icon.svg'
import copyrightIcon from '/images/copyright-icon.svg'
import globeIcon from '/images/globe-icon.svg'
import bookReaderIcon from '/images/book-reader-icon.svg'

const items = [
  {
    title: 'Digital Music Distribution',
    intro:
      'Distribute your music worldwide using our digital distribution services. Get your music on Spotify, Apple Music, SoundCloud and 80+ platforms with ease, confidence and world class support.',
    img: musicIcon,
    btnTxt: 'Distro my music...'
  },
  {
    title: 'Rights Management Service',
    intro:
      'Protect what matters to you most with our music rights management service. We safeguard your creations and online music from third parties who try to steal your sound!',
    img: copyrightIcon,
    btnTxt: 'Protect my rights...'
  },
  {
    title: 'Music Promotion Service',
    intro:
      'Get discovered, with the help of our music promotion experts! Work with our team to shape your image, plan your path to success and get your music out to the world.',
    img: globeIcon,
    btnTxt: 'Promote my music...'
  },
  {
    title: 'Publishing Administration',
    intro:
      'Get credited and claim your earnings, with the help of our music publishing team! Our team work to get you earnings from the compositions you have been integral to creating.',
    img: bookReaderIcon,
    btnTxt: 'Publish my music...'
  }
]
</script>

<template>
  <section class="section-v-pad bg-transparent">
    <div class="wrapper division-row-gap grid text-center">
      <div class="reveal-up grid division-gap">
        <div class="text-sm text-primary font-bold tracking-[0.07em]">
          WE LAUNCH YOUR MUSIC INTO THE FUTURE
        </div>
        <h2 class="text-dark">
          At Identity Music we distribute, protect and promote your music worldwide.
          We offer innovative solutions for independent music artists and record labels
          to share their music with the world. Our industry leading music services enable
          you to sell your music without all the hassle and daunting upfront fees.
        </h2>
      </div>

      <div class="reveal-up grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="({ title, intro, img, btnTxt }, i) in items"
          :key="i"
          class="h-full p-2.5 bg-white hover:shadow-[0_2px_30px_rgb(0_0_0_/_0.1)] transition-all duration-350 ease-in-out hover:-translate-y-[3px]"
        >
          <div class="grid division-gap content-between h-full py-[60px] px-[35px] border border-gray-200 hover:border-primary">
            <div class="grid division-in-gap">
              <Icon
                :src="img"
                class="size-[80px] mx-auto fill-primary"
              />
              <div class="poppins text-lg font-semibold text-dark">
                {{ title }}
              </div>
              <div class="text-dark-light">
                {{ intro }}
              </div>
            </div>
            <div>
              <NuxtLink
                to="/"
                class="poppins text-sm font-bold text-dark hover:text-primary/90 hover:underline"
              >
                {{ btnTxt }}
                <span class="ml-2.5 text-primary !hover:no-underline">🡪</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
