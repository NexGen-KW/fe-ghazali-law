<template>
  <section
    class="container flex w-full flex-col items-center justify-center py-12"
  >
    <HeaderScale :t="$t('homeForm.header')" class="mb-4" />
    <h2 class="text-gold-900 mb-8 text-center ltr:font-serif">
      {{ $t('homeForm.title').replace($t('homeForm.titleHighlight'), '') }}
      <span class="text-gold-500">{{ $t('homeForm.titleHighlight') }}</span>
    </h2>
    <form class="mx-auto w-full max-w-5xl space-y-6">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          :placeholder="$t('homeForm.name')"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
        <input
          type="email"
          :placeholder="$t('homeForm.email')"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          :placeholder="$t('homeForm.phone')"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
        <input
          type="text"
          :placeholder="$t('homeForm.subject')"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
      </div>
      <textarea
        rows="4"
        :placeholder="$t('homeForm.message')"
        class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
      ></textarea>
      <div class="flex justify-center">
        <BaseButton type="submit">{{ $t('homeForm.submit') }}</BaseButton>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import HeaderScale from './ui/HeaderScale.vue';
import BaseButton from './ui/BaseButton.vue';
import { useI18n } from '#imports';
import { watch } from 'vue';

const { t: $t, locale } = useI18n();

// Watch for locale changes to ensure form updates reactively
watch(
  locale,
  () => {
    // Force reactivity by triggering a re-render
    // The $t() calls in the template will automatically update
  },
  { immediate: true },
);
</script>
