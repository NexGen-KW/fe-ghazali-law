<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { localeProperties } = useI18n();

const htmlLang = computed(() => localeProperties.value.code);
const htmlDir = computed(() => localeProperties.value.dir);

useHead({
  htmlAttrs: {
    lang: htmlLang,
    dir: htmlDir,
  },
});
</script>
