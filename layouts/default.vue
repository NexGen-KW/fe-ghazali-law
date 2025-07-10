<template>
  <div>
    <LayoutHeader />
    <slot />
    <LayoutFooter />
    <ScrollToTopButton />
  </div>
</template>

<script lang="ts" setup>
import ScrollToTopButton from '~/components/ui/ScrollToTopButton.vue';
</script>
