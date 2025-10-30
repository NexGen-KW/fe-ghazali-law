import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  nitro: {
    preset: 'static', // THIS enables SSG
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.ico',
        },
        { rel: 'icon', type: 'image/svg', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Scheherazade+New:wght@400;700&family=Lateef:wght@400;600;700;800&display=swap',
        },
      ],
    },
  },
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
            symbol: 'ع',
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
  vite: {
    plugins: [tailwindcss()],
  },
  imports: {
    dirs: ['types', 'static'],
  },
});
