import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  modules: [
    '@nuxt/content',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'English',
            files: ['en.yaml'],
            dir: 'ltr',
            symbol: 'EN',
          },
          {
            code: 'ar',
            name: 'Arabic',
            files: ['ar.yaml'],
            dir: 'rtl',
            symbol: 'Arabic',
          },
        ],
        strategy: 'no_prefix',
      },
    ],
    'nuxt-swiper',
    '@nuxt/fonts',
    '@nuxt/icon',
    'reka-ui/nuxt',
    '@vueuse/nuxt',
  ],
  // nitro: {
  //   preset: 'azure-swa',
  // },
  vite: {
    plugins: [tailwindcss()],
  },
  imports: {
    dirs: ['types', 'static'],
  },
});
