<script setup>
import logo1 from '/images/ppl-logo.svg'
import logo2 from '/images/aim-logo.svg'
import logo3 from '/images/prs-logo.svg'

import socialLogo1 from '/images/facebook-logo.svg'
import socialLogo2 from '/images/twitter-logo.svg'
import socialLogo3 from '/images/instagram-logo.svg'
import socialLogo4 from '/images/linkedin-logo.svg'
import socialLogo5 from '/images/pinterest-logo.svg'

import userIcon from '/images/user-icon.svg'
import mailIcon from '/images/mail-icon.svg'
import mobileIcon from '/images/mobile-icon.svg'

const logos = [logo1, logo2, logo3]
const socialLogos = [socialLogo1, socialLogo2, socialLogo3, socialLogo4, socialLogo5]
</script>

<template>
  <section class="section-v-pad bg-transparent grid">
    <div class="wrapper division-row-gap grid">

      <div
        class="w-full !max-w-[750px] flex flex-wrap justify-evenly items-center gap-[clamp(2.5rem,0.5rem+5vw,5rem)] mx-auto"
      >
        <Icon
          v-for="(src, i) in logos"
          :key="i"
          :src="src"
          :class="[
            'size-[clamp(60px,2.75rem+2.5vw,80px)] grayscale',
            'hover:grayscale-0 opacity-40 hover:opacity-100',
            'transition-all duration-300 ease-in-out cursor-pointer'
          ].join(' ')"
        />
      </div>

      <div class="reveal-up grid lg:grid-cols-3 division-row-gap">
        <div class="flex flex-col division-row-gap">

          <div class="grid division-in-gap">
            <h2 class="font-semibold !text-2xl">Visit our offices at</h2>
            <address class="not-italic text-dark-light leading-[200%]">
              Identity Music Ltd,<br />
              Lamberhurst Vineyard, Furnace Lane,<br />
              Tunbridge Wells, Kent, TN3 8LA, UK
            </address>
          </div>

          <div class="grid division-in-gap">
            <h2 class="font-semibold !text-2xl">Message us</h2>
            <a href="mailto:contact@identitymusic.com" class="text-dark-light hover:underline">
              contact@identitymusic.com
            </a>
            <p class="text-dark-light">(+44) 1892 280 448</p>
          </div>

          <div class="reveal-up flex flex-wrap space-x-5 justify-between lg:mr-20">
            <Icon
              v-for="(src, i) in socialLogos"
              :key="i"
              :src="src"
              :class="[
                'size-5 grayscale hover:grayscale-0',
                'opacity-40 hover:opacity-100 transition-all',
                'duration-300 ease-in-out cursor-pointer',
              ].join(' ')"
            />
          </div>

        </div>

        <div class="lg:col-span-2 flex-grow flex flex-col division-gap">

          <div class="grid md:grid-cols-2 division-gap">
            <label
              class="flex items-center border-b-2 border-gray-200 focus-within:border-primary"
            >
              <Icon :src="userIcon" class="size-4 fill-gray-500" />
              <input
                type="text"
                placeholder="Name *"
                required
                class="outline-none py-2 px-[20px] w-full font-bold placeholder-gray-500"
              />
            </label>

            <label
              class="flex items-center border-b-2 border-gray-200 focus-within:border-primary"
            >
              <Icon :src="mailIcon" class="size-4 fill-gray-500" />
              <input
                type="email"
                placeholder="Email *"
                required
                class="outline-none py-2 px-[20px] w-full font-bold placeholder-gray-500"
              />
            </label>
          </div>

          <label
            class="flex items-center border-b-2 border-gray-300 focus-within:border-primary"
          >
            <Icon :src="mobileIcon" class="size-4 fill-gray-500" />
            <input
              type="tel"
              placeholder="Phone number"
              class="outline-none py-2 px-[20px] w-full font-bold placeholder-gray-500"
            />
          </label>

          <textarea
            rows="4"
            placeholder="Your message"
            class="outline-none py-2 w-full font-bold placeholder-gray-500 border-b-2 border-gray-300 focus-within:border-primary"
          ></textarea>

          <div class="flex flex-wrap md:flex-nowrap">
            <p class="font-semibold text-dark-lighter mr-[110px]">
              Identity Music are always available and excited to hear from artists and record label
              prospects. We always aim to serve you and your needs to the best of our ability.
            </p>

            <button
              class="flex-none btn bg-primary text-white w-fit h-fit shadow-[0_10px_20px_rgb(0_0_0_/_0.07)]"
            >
              Send message
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="bg-primary py-[70px]">
    <div class="reveal-up wrapper">
      <div class="flex flex-wrap justify-center sm:justify-between division-gap">
        <h2 class="text-white w-fit">Distribute Your Music Today!</h2>

        <div class="flex-none btn bg-white text-dark w-fit">Apply Now</div>
      </div>
    </div>
  </section>
</template>
