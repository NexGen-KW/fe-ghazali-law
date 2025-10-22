<script setup lang="ts">
const { t, locale } = useI18n();

useHead({
  title: () => `${t('contactHeroHeading')} | ${t('siteTitle')}`,
  meta: [

    {
      name: 'keywords',
      content: () =>
        locale.value === 'ar'
          ? 'اتصل بنا، استشارة قانونية، حجز موعد محامي، مكتب محاماة الكويت، استشارة قانونية مجانية'
          : 'contact us, legal consultation, book lawyer appointment, Kuwait law firm, free legal consultation',
    },
    {
      property: 'og:title',
      content: () => `${t('contactHeroHeading')} | ${t('siteTitle')}`,
    },

  ],
});
</script>

<template>
  <LayoutMain>
    <ContactHome01Hero />
    <ContactHome02Information />
    <ContactHome03Steps />
    <ContactHome04Form />
  </LayoutMain>
</template>
