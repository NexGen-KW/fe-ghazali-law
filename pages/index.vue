<script setup lang="ts">
const { t, locale } = useI18n();

useHead({
  title: () => t('siteTitle'),
  meta: [
    {
      name: 'description',
      content: () => t('carouselParagraph'),
    },
    {
      name: 'keywords',
      content: () => t('siteKeywords'),
    },
    {
      property: 'og:title',
      content: () => t('carouselHeading'),
    },
    {
      property: 'og:description',
      content: () => t('carouselParagraph'),
    },
  ],
});
</script>

<template>
  <LayoutMain>
    <Home01Carousel />
    <Home02Statement />
    <Home03Difference />
    <!-- <Home04Testmonial /> -->

    <!-- <Home05News /> -->
    <Home06Discover />
    <Home07Team />
    <Home08FAQ />
    <Home09Form />
  </LayoutMain>
</template>
