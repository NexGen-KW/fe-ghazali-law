<template>
  <button
    :t="t"
    class="border-gold-900 text-gold-900 hover:bg-gold-900 hover:text-gold-100 my-[16px] w-fit border px-[20px] py-[12px] text-lg font-medium transition-colors duration-300 ease-in-out"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  t?: string;
}>();
</script>
