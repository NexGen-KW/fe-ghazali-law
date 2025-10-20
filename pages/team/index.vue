<script setup lang="ts">
const { t, locale } = useI18n();

useHead({
  title: () => `${t('teamHeroHeading')} | ${t('siteTitle')}`,
  meta: [
    {
      name: 'description',
      content: () =>
        locale.value === 'ar'
          ? 'تعرف على فريق مكتب روان الغزالي للمحاماة من محامين وخبراء قانونيين متخصصين في مختلف المجالات القانونية'
          : 'Meet RMG Law Firm team of lawyers and legal experts specialized in various legal fields',
    },
    {
      name: 'keywords',
      content: () =>
        locale.value === 'ar'
          ? 'فريق المحامين، محامون الكويت، خبراء قانونيون، روان الغزالي، محامي متخصص، استشاري قانوني'
          : 'legal team, Kuwait lawyers, legal experts, Rawan Al-Ghazali, specialized attorneys, legal consultants',
    },
    {
      property: 'og:title',
      content: () => `${t('teamHeroHeading')} | ${t('siteTitle')}`,
    },
    {
      property: 'og:description',
      content: () =>
        locale.value === 'ar'
          ? 'تعرف على فريق مكتب روان الغزالي للمحاماة من محامين وخبراء قانونيين متخصصين'
          : 'Meet RMG Law Firm team of specialized lawyers and legal experts',
    },
  ],
});
</script>

<template>
  <LayoutMain>
    <TeamHome01Hero />
    <TeamHome02Meet />
    <TeamHome03International />
    <TeamHome04Local />
    <TeamHome05Senior />
    <TeamHome06Admin />
  </LayoutMain>
</template>
