<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, useAsyncData, useHead } from '#imports';
import { useServices } from '~/composables/useServices';

definePageMeta({
  layout: 'white-background',
});

useHead({
  bodyAttrs: {
    class: 'service-detail-body',
  },
});

const route = useRoute();
const slug = computed(() => route.params.slug as string);
const { services, getServiceBySlug } = useServices();
const service = computed(() => getServiceBySlug(slug.value));

// Debug logging
console.log('Page: Current slug:', slug.value);
console.log('Page: Service data:', service.value);
</script>

<template>
  <div>
    <LayoutMain>
      <ServiceInfo01List :service="service" :currentSlug="slug" />
    </LayoutMain>
  </div>
</template>
