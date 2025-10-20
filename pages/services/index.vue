<script setup lang="ts">
const { t, locale } = useI18n();

useHead({
  title: () => `${t('servicesHeroHeading')} | ${t('siteTitle')}`,
  meta: [
    {
      name: 'description',
      content: () => t('servicesHeroParagraph'),
    },
    {
      name: 'keywords',
      content: () =>
        locale.value === 'ar'
          ? 'خدمات قانونية الكويت، استشارات قانونية، محامي شركات، تأسيس شركات، حوكمة الشركات، محامي تحكيم، تحكيم دولي، تحكيم تجاري، تسوية نزاعات، محامي استثمار، استثمار أجنبي، هيئة الاستثمار، بورصة الكويت، محامي بنوك، بنك الكويت المركزي، عقود مصرفية، ضمانات مصرفية، محامي ملكية فكرية، تسجيل علامات تجارية، براءات اختراع، حماية حقوق النشر، محامي عقارات، محامي مقاولات، عقود إنشاءات، نزاعات عقارية، محامي تجاري، عقود تجارية، وكالة تجارية، امتياز تجاري، محامي طاقة، قانون النفط والغاز، مؤسسة البترول، محامي ضرائب، استشارات ضريبية، وزارة المالية'
          : 'legal services Kuwait, legal consultancy, corporate lawyer, company formation, corporate governance, arbitration lawyer, international arbitration, commercial arbitration, dispute resolution, investment lawyer, foreign investment, KDIPA, Kuwait Stock Exchange, banking lawyer, Central Bank of Kuwait, banking contracts, bank guarantees, intellectual property lawyer, trademark registration, patent attorney, copyright protection, real estate lawyer, construction lawyer, construction contracts, real estate disputes, commercial lawyer, commercial contracts, commercial agency, franchise agreements, energy lawyer, oil and gas law, Kuwait Petroleum, tax lawyer, tax advisory, Ministry of Finance',
    },
    {
      property: 'og:title',
      content: () => `${t('servicesHeroHeading')} | ${t('siteTitle')}`,
    },
    {
      property: 'og:description',
      content: () => t('servicesHeroParagraph'),
    },
  ],
});
</script>

<template>
  <LayoutMain>
    <ServiceHome00Breadcrumb />
    <ServiceHome01Hero />
    <ServiceHome02Statement />
    <ServiceHome03List />
  </LayoutMain>
</template>
