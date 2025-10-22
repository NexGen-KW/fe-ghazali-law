<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale, locales, t } = useI18n();

const currentLocale = computed(() => {
  return locales.value.find((l: any) => l.code === locale.value);
});

useHead({
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => currentLocale.value?.dir || 'ltr',
  },
  title: () => t('siteTitle'),
  meta: [
    {
      name: 'description',
      content: () => t('siteDescription'),
    },
    {
      name: 'keywords',
      content: () => t('siteKeywords'),
    },
    {
      name: 'author',
      content: () => t('siteTitle'),
    },
    {
      property: 'og:title',
      content: () => t('siteTitle'),
    },
    {
      property: 'og:description',
      content: () => t('siteDescription'),
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: '/fe-ghazali-law/favicon.ico',
    },
    {
      property: 'og:locale',
      content: () => (locale.value === 'ar' ? 'ar_KW' : 'en_US'),
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: () => t('siteTitle'),
    },
    {
      name: 'twitter:description',
      content: () => t('siteDescription'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/fe-ghazali-law/favicon.ico',
    },
    {
      rel: 'shortcut icon',
      href: '/fe-ghazali-law/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/fe-ghazali-law/favicon.ico',
    },
  ],
});
</script>
