<template>
  <div class="bg-[#F7F7F8] py-10">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 text-center sm:gap-8 md:grid-cols-4"
    >
      <div v-for="item in features" :key="item.title">
        <div
          class="ltr:font-marcellus mb-2 text-xl font-normal text-[#3B371F] md:text-2xl"
        >
          {{ item.title }}
        </div>
        <div class="text-base text-[#3B371F]">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const features = computed(() => [
  {
    title: t('aboutFeatures.0.title'),
    description: t('aboutFeatures.0.description'),
  },
  {
    title: t('aboutFeatures.1.title'),
    description: t('aboutFeatures.1.description'),
  },
  {
    title: t('aboutFeatures.2.title'),
    description: t('aboutFeatures.2.description'),
  },
  {
    title: t('aboutFeatures.3.title'),
    description: t('aboutFeatures.3.description'),
  },
]);
</script>
