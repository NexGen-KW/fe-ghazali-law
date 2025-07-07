import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  nitro: {
    preset: 'static', // THIS enables SSG
  },
  app: {
    baseURL: '/fe-ghazali-law/',
  },
  modules: [
    '@nuxtjs/i18n',
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
  i18n: {
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
});
