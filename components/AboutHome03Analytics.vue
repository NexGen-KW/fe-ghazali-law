<template>
  <div class="border-t border-[#D6CBA1] bg-white py-12">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-4"
    >
      <div
        v-for="item in aboutAnalytics"
        :key="item.title"
        class="justify-centermin flex flex-col items-center"
      >
        <div class="text-gold-500 mb-2 text-5xl font-light md:text-6xl">
          {{ item.number }}
        </div>
        <p class="ltr:font-marcellus mb-1 leading-tight">
          {{ item.title }}
        </p>
        <p
          class="ltr:font-montserrat max-w-[260px] text-base leading-tight text-gray-800"
        >
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const aboutAnalytics = computed(() => [
  {
    number: t('aboutAnalytics.0.number'),
    title: t('aboutAnalytics.0.title'),
    description: t('aboutAnalytics.0.description'),
  },
  {
    number: t('aboutAnalytics.1.number'),
    title: t('aboutAnalytics.1.title'),
    description: t('aboutAnalytics.1.description'),
  },
  {
    number: t('aboutAnalytics.2.number'),
    title: t('aboutAnalytics.2.title'),
    description: t('aboutAnalytics.2.description'),
  },
  {
    number: t('aboutAnalytics.3.number'),
    title: t('aboutAnalytics.3.title'),
    description: t('aboutAnalytics.3.description'),
  },
]);
</script>
