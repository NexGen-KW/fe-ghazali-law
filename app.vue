<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';
import { computed } from 'vue';
import { useHead } from '#imports';

const { locale } = useI18n();

const htmlLang = computed(() => locale.value);
const htmlDir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));

useHead({
  htmlAttrs: {
    lang: htmlLang,
    dir: htmlDir,
  },
});
</script>
