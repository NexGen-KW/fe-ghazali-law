<template>
  <section
    class="container flex w-full flex-col items-center justify-center py-12"
  >
    <HeaderScale :t="formTranslations.header" class="mb-4" />
    <h2 class="text-gold-900 mb-8 text-center text-3xl ltr:font-serif">
      {{ formTranslations.title.replace(formTranslations.titleHighlight, '') }}
      <span class="text-gold-500">{{ formTranslations.titleHighlight }}</span>
      {{
        formTranslations.title.split(formTranslations.titleHighlight)[1] || ''
      }}
    </h2>
    <form class="mx-auto w-full max-w-5xl space-y-6">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          :placeholder="formTranslations.name"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
        <input
          type="email"
          :placeholder="formTranslations.email"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          :placeholder="formTranslations.phone"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
        <input
          type="text"
          :placeholder="formTranslations.subject"
          class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
        />
      </div>
      <textarea
        rows="4"
        :placeholder="formTranslations.message"
        class="border-gold-100 focus:border-gold-500 text-gold-900 placeholder:text-gold-900/70 w-full border bg-white px-4 py-3 focus:ring-1 focus:outline-none"
      ></textarea>
      <div class="flex justify-center">
        <BaseButton type="submit">{{ formTranslations.submit }}</BaseButton>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import HeaderScale from './ui/HeaderScale.vue';
import BaseButton from './ui/BaseButton.vue';
import { useI18n } from '#imports';
import { computed } from 'vue';

const { t } = useI18n();

// Single computed object for all form translations
const formTranslations = computed(() => ({
  header: t('homeForm.header'),
  title: t('homeForm.title'),
  titleHighlight: t('homeForm.titleHighlight'),
  name: t('homeForm.name'),
  email: t('homeForm.email'),
  phone: t('homeForm.phone'),
  subject: t('homeForm.subject'),
  message: t('homeForm.message'),
  submit: t('contactPage.submit'),
}));
</script>
