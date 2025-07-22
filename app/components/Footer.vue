<script setup>
const brandLogo = '/images/brand-logo.webp'
const socialLogos = [
  { src: '/images/facebook-logo.svg' },
  { src: '/images/twitter-logo.svg' },
  { src: '/images/instagram-logo.svg' },
  { src: '/images/linkedin-logo.svg' },
  { src: '/images/pinterest-logo.svg' }
]

const footerLinks = [
  "Music Distribution",
  "Publishing Administration",
  "Rights Management",
  "Promotion",
  "Label Services",
  "Blog",
  "Testimonials",
  "Careers",
  "FAQ",
  "Contact"
]
</script>

<template>
  <footer class="py-[30px] bg-black">
    <div class="wrapper text-white pt-[60px] pb-[30px]">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 division-gap">
        <!-- Brand Logo -->
        <div>
          <img
            :src="brandLogo"
            alt="Brand Logo"
            class="width-[170px] h-fit object-contain"
          />
        </div>

        <!-- Footer Links -->
        <div class="flex flex-col division-gap">
          <div class="poppins text-lg font-bold">Learn About Identity Music</div>
          <ul class="list-none p-0">
            <li v-for="(link, index) in footerLinks" :key="index" class="py-2">
              <a href="#" class="text-sm text-white hover:underline">{{ link }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col division-in-gap">
          <div class="poppins text-lg font-bold">Contact</div>
          <div class="flex flex-col division-in-element-gap">
            <address class="not-italic leading-[200%]">
              <span class="font-bold">Identity Music Ltd</span><br />
              Lamberhurst Vineyard, Furnace Lane,<br />
              Tunbridge Wells, Kent, TN3 8LA, UK
            </address>
            <a href="mailto:contact@identitymusic.com" class="hover:underline">
              contact@identitymusic.com
            </a>
            <p>(+44) 1892 280 448</p>
          </div>

          <!-- Social Icons -->
          <div class="flex flex-wrap space-x-5">
            <Icon
              v-for="(logo, index) in socialLogos"
              :key="index"
              :src="logo.src"
              class="size-5 fill-white hover:fill-primary transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Info -->
      <div class="flex flex-wrap justify-between text-center py-[50px] division-in-element-gap mt-[clamp(3.75rem,-0.75rem+11.25vw,9.375rem)]">
        <p class="text-sm">
          <a href="#" class="hover:underline">Privacy Policy</a>
        </p>
        <p class="text-sm">
          © {{ new Date().getFullYear() }} Identity Music Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>