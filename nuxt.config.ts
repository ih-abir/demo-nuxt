// https://nuxt.com/docs/api/configuration/nuxt-config

import { postcss } from "@tailwindcss/postcss";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/style.scss'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/image', 'nuxt-svgo-loader'],

  image: {
    provider: 'ipx',
    ipx: {
      modifiers: {
        kernel: 'lanczos3',
      }
    },
    screens: {
      xxs: 325,
      xs: 425,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    format: ['avif', 'webp', 'jpg', 'png'],
    placeholder: 'blur',
    lazySizes: true,
  }
})