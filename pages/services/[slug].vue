<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
import { queryCollection } from '#imports';
import { useHead } from '#imports';

definePageMeta({
  layout: 'white-background',
});

useHead({
  bodyAttrs: {
    class: 'service-detail-body',
  },
});

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`services-${slug}`, () => {
  return queryCollection('services').path(`/services/${slug}`).first();
});

const { data: services } = await useAsyncData('services', () =>
  queryCollection('services').all(),
);
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
