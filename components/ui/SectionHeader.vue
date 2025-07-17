<template>
  <div class="w-full py-4">
    <div class="border-t border-[#d4bb76]"></div>
    <h2 class="ltr:font-marcellus text-center text-neutral-900">
      {{ title || 'Section Title' }}
    </h2>
    <div class="border-t border-[#d4bb76]"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>();
</script>
