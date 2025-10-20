<script setup lang="ts">
const { t, locale } = useI18n();

useHead({
  title: () => `${t('aboutHeroHeading')} | ${t('siteTitle')}`,
  meta: [
    {
      name: 'description',
      content: () => t('aboutHeroParagraph'),
    },
    {
      name: 'keywords',
      content: () =>
        locale.value === 'ar'
          ? 'عن مكتب الغزالي، تاريخ المكتب، خبرة قانونية، محاماة الكويت، روان الغزالي، مكتب محاماة عريق'
          : 'About RMG, law firm history, legal expertise, Kuwait lawyers, Rawan Al-Ghazali, established law firm',
    },
    {
      property: 'og:title',
      content: () => `${t('aboutHeroHeading')} | ${t('siteTitle')}`,
    },
    {
      property: 'og:description',
      content: () => t('aboutHeroParagraph'),
    },
  ],
});
</script>

<template>
  <LayoutMain>
    <AboutHome01Hero />
    <AboutHome02Contact />
    <AboutHome03Analytics />
    <AboutHome04Journey />
    <AboutHome05Four />
    <AboutHome06Clients />
  </LayoutMain>
</template>
