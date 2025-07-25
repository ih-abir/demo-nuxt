import { postcss } from '@tailwindcss/postcss';

const imageProvider = process.env.IMAGE_PROVIDER || 'ipx';

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
    provider: imageProvider,

    // Config for ipx provider
    ipx: {
      modifiers: {
        kernel: 'lanczos3',
      },
    },

    // Shared options
    screens: {
      xxs: 325,
      xs: 425,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },

    format: ['avif', 'webp', 'jpg', 'png'],
    placeholder: 'blur',
    lazySizes: true,
    // Conditionally add quality only for vercel
    ...(imageProvider === 'vercel' ? { quality: 75 } : {}),
  },
});
