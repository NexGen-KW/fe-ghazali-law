<template>
  <section
    class="container flex w-full flex-col items-center justify-center py-12"
  >
    <HeaderScale :t="formHeader" class="mb-4" />
    <h2 class="text-gold-900 mb-8 text-center ltr:font-serif">
      {{ formTitle.replace(formTitleHighlight, '') }}
      <span class="text-gold-500">{{ formTitleHighlight }}</span>
    </h2>
    <form class="mx-auto w-full max-w-5xl space-y-6" :key="locale">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          :placeholder="formName"
          :key="`name-${locale}`"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
        <input
          type="email"
          :placeholder="formEmail"
          :key="`email-${locale}`"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          :placeholder="formPhone"
          :key="`phone-${locale}`"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
        <input
          type="text"
          :placeholder="formSubject"
          :key="`subject-${locale}`"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
      </div>
      <textarea
        rows="4"
        :placeholder="formMessage"
        :key="`message-${locale}`"
        class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
      ></textarea>
      <div class="flex justify-center">
        <BaseButton type="submit">{{ formSubmit }}</BaseButton>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import HeaderScale from './ui/HeaderScale.vue';
import BaseButton from './ui/BaseButton.vue';
import { useI18n } from '#imports';
import { computed, watch, nextTick } from 'vue';

const { t, locale } = useI18n();

// Reactive computed properties for form translations
const formHeader = computed(() => t('homeForm.header'));
const formTitle = computed(() => t('homeForm.title'));
const formTitleHighlight = computed(() => t('homeForm.titleHighlight'));
const formName = computed(() => t('homeForm.name'));
const formEmail = computed(() => t('homeForm.email'));
const formPhone = computed(() => t('homeForm.phone'));
const formSubject = computed(() => t('homeForm.subject'));
const formMessage = computed(() => t('homeForm.message'));
const formSubmit = computed(() => t('homeForm.submit'));

// Watch for locale changes and force re-render
watch(locale, () => {
  nextTick(() => {
    // Force re-render of form elements
  });
});
</script>
