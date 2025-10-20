<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
import { queryCollection } from '#imports';

definePageMeta({
  layout: 'white-background',
});

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`services-${slug}`, () => {
  return queryCollection('services').path(`/services/${slug}`).first();
});

const { data: services } = await useAsyncData('services', () =>
  queryCollection('services').all(),
);

const { t, locale } = useI18n();

useHead({
  bodyAttrs: {
    class: 'service-detail-body',
  },
  title: () => {
    const title =
      locale.value === 'ar' ? post.value?.title_ar : post.value?.title;
    return `${title || ''} | ${t('siteTitle')}`;
  },
  meta: [
    {
      name: 'description',
      content: () =>
        locale.value === 'ar'
          ? post.value?.description_ar
          : post.value?.description,
    },
    {
      name: 'keywords',
      content: () => {
        const serviceKeywords =
          locale.value === 'ar'
            ? post.value?.keywords_ar
            : post.value?.keywords;
        const baseKeywords =
          locale.value === 'ar'
            ? 'خدمات قانونية، محاماة الكويت، استشارات قانونية'
            : 'legal services, Kuwait law, legal consultancy';
        return serviceKeywords
          ? `${serviceKeywords}, ${baseKeywords}`
          : baseKeywords;
      },
    },
    {
      property: 'og:title',
      content: () => {
        const title =
          locale.value === 'ar' ? post.value?.title_ar : post.value?.title;
        return `${title || ''} | ${t('siteTitle')}`;
      },
    },
    {
      property: 'og:description',
      content: () =>
        locale.value === 'ar'
          ? post.value?.description_ar
          : post.value?.description,
    },
    {
      property: 'og:type',
      content: 'article',
    },
  ],
});
</script>

<template>
  <div>
    <LayoutMain>
      <ServiceInfo01List
        :service="post"
        :services="services"
        :currentSlug="slug"
      />
    </LayoutMain>
  </div>
</template>
