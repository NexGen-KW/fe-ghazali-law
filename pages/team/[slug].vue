<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
import { queryCollection } from '#imports';

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`team-${slug}`, () => {
  return queryCollection('team').path(`/team/${slug}`).first();
});

const { t, locale } = useI18n();

useHead({
  title: () => {
    const name = locale.value === 'ar' ? post.value?.name_ar : post.value?.name;
    return `${name || ''} | ${t('siteTitle')}`;
  },
  meta: [
    {
      name: 'description',
      content: () => {
        const name =
          locale.value === 'ar' ? post.value?.name_ar : post.value?.name;
        const role =
          locale.value === 'ar' ? post.value?.role_ar : post.value?.role;
        return locale.value === 'ar'
          ? `${name} - ${role} في مكتب روان الغزالي للمحاماة`
          : `${name} - ${role} at RMG Law Firm`;
      },
    },
    {
      name: 'keywords',
      content: () => {
        const name =
          locale.value === 'ar' ? post.value?.name_ar : post.value?.name;
        const baseKeywords =
          locale.value === 'ar'
            ? 'محامي، محامي الكويت، خبير قانوني، مستشار قانوني'
            : 'lawyer, Kuwait lawyer, legal expert, legal consultant';
        return `${name}, ${baseKeywords}`;
      },
    },
    {
      property: 'og:title',
      content: () => {
        const name =
          locale.value === 'ar' ? post.value?.name_ar : post.value?.name;
        return `${name || ''} | ${t('siteTitle')}`;
      },
    },
    {
      property: 'og:description',
      content: () => {
        const name =
          locale.value === 'ar' ? post.value?.name_ar : post.value?.name;
        const role =
          locale.value === 'ar' ? post.value?.role_ar : post.value?.role;
        return locale.value === 'ar'
          ? `${name} - ${role} في مكتب روان الغزالي للمحاماة`
          : `${name} - ${role} at RMG Law Firm`;
      },
    },
  ],
});
</script>

<template>
  <LayoutMain>
    <TeamInfo01Hero :member="post" />
    <TeamInfo02Bio :member="post" />
    <TeamInfo03Academic :member="post" />
    <TeamInfo04Experience :member="post" />
    <TeamInfo05Participation :member="post" />
  </LayoutMain>
</template>
