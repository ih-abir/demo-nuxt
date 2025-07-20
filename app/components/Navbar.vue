<template>
  <nav
    :class="[
      'navbar fixed top-0 z-[999] shadow-md w-full',
      'flex items-center justify-center max-w-[100vw] py-[15px] md:py-[22px]'
    ]"
  >
    <div
      :class="[
        'wrapper inline-flex items-center gap-5',
        'justify-between font-semibold text-secondary-light w-full'
      ]"
    >
      <div class="flex items-center justify-between w-full mr-auto">
        <NuxtLink
          to="/"
          aria-label="home"
        >
          <img
            :src="brandLogo"
            alt="Brand Logo"
            class="w-[clamp(110px,4.018rem+5.952vw,150px)] h-fit object-contain"
          />
        </NuxtLink>

        <div
          id="nav-menu"
          :class="[
            isMenuOpen ? '!flex' : 'hidden',
            'fixed md:static left-0 top-[94px]',
            'md:flex items-center flex-col md:flex-row',
            'gap-[clamp(0.625rem,-1.125rem+4.375vw,2.813rem)]',
            'px-[min(100px,6vw)] md:px-0 py-5 md:py-0',
            'w-full md:w-auto h-full bg-white md:bg-transparent'
          ]"
        >
          <div
            v-for="item in navMenus"
            :key="item"
            :class="[
              'w-full md:w-fit !py-3 md:py-0',
              'text-black md:text-white cursor-pointer'
            ]"
          >
            <a href="#" class="hover:underline">{{ item }}</a>
          </div>

          <div
            class="btn !py-[15px] !px-[32px] mr-auto h-fit bg-primary text-white cursor-pointer"
          >
            Apply
          </div>
        </div>
      </div>

      <div class="block md:hidden">
        <button
          v-show="!isMenuOpen"
          aria-label="open navbar menu"
          class="block size-12 p-[7px] select-none cursor-pointer"
          @click="toggleMenu(true)"
        >
          <Icon :src="menuIcon" class="fill-white" />
        </button>

        <button
          v-show="isMenuOpen"
          aria-label="Close navbar menu"
          class="block size-12 p-[11px] select-none cursor-pointer"
          @click="toggleMenu(false)"
        >
          <Icon :src="closeIcon" class="fill-white" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import brandLogo from '/images/brand-logo.png'
import menuIcon from '/images/menu-icon.svg'
import closeIcon from '/images/close-icon.svg'

const navMenus = ["Home", "About", "Services", "Contact", "Blog", "Login"]
const isMenuOpen = ref(false)

const toggleMenu = (open) => {
  isMenuOpen.value = open
  document.body.classList.toggle('overflow-hidden', open)
  document.body.classList.toggle('md:overflow-auto', open)
}

const handleScroll = () => {
  const navbar = document.querySelector('.navbar')
  if (navbar) {
    navbar.classList.toggle('bg-black', window.scrollY > 0)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
