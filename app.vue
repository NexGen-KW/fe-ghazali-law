<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { localeProperties } = useI18n();

useHead({
  htmlAttrs: {
    lang: () => localeProperties.value.code,
    dir: () => localeProperties.value.dir,
  },
});
</script>
