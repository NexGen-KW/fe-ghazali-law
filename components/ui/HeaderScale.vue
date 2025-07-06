<template>
  <div class="text-gold-900 flex items-center justify-center lg:justify-start">
    <div class="bg-gold-500 h-0.5 w-11 rounded-xs" />
    <Icon name="octicon:law-24" size="24" class="ms-5" />
    <span class="mx-3 text-lg font-medium">
      {{ $t(t) }}
    </span>
    <Icon name="octicon:law-24" size="24" class="me-5" />
    <div class="bg-gold-500 h-0.5 w-11 rounded-xs" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  t: string;
}

defineProps<Props>();
</script>
