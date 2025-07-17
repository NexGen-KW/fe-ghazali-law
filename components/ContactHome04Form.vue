<template>
  <section class="container flex w-full flex-col items-center justify-center">
    <HeaderScale :t="formTranslations.header" class="mb-4" />
    <h2 class="text-gold-900 mb-8 text-center text-3xl ltr:font-serif">
      {{ formTranslations.title.split(formTranslations.titleHighlight)[0] }}
      <span class="text-gold-500">{{ formTranslations.titleHighlight }}</span>
      {{ formTranslations.title.split(formTranslations.titleHighlight)[1] }}
    </h2>
    <form class="mx-auto w-full max-w-5xl space-y-6">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="relative">
          <label
            class="text-gold-900/70 absolute -top-2 left-3 bg-white px-2 text-sm"
          >
            {{ formTranslations.name }}
          </label>
          <input
            type="text"
            class="border-gold-100 focus:border-gold-500 text-gold-900 w-full border bg-white px-4 py-3 pt-4 focus:ring-1 focus:outline-none"
          />
        </div>
        <div class="relative">
          <label
            class="text-gold-900/70 absolute -top-2 left-3 bg-white px-2 text-sm"
          >
            {{ formTranslations.email }}
          </label>
          <input
            type="email"
            class="border-gold-100 focus:border-gold-500 text-gold-900 w-full border bg-white px-4 py-3 pt-4 focus:ring-1 focus:outline-none"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="relative">
          <label
            class="text-gold-900/70 absolute -top-2 left-3 bg-white px-2 text-sm"
          >
            {{ formTranslations.phone }}
          </label>
          <input
            type="text"
            class="border-gold-100 focus:border-gold-500 text-gold-900 w-full border bg-white px-4 py-3 pt-4 focus:ring-1 focus:outline-none"
          />
        </div>
        <div class="relative">
          <label
            class="text-gold-900/70 absolute -top-2 left-3 bg-white px-2 text-sm"
          >
            {{ formTranslations.subject }}
          </label>
          <input
            type="text"
            class="border-gold-100 focus:border-gold-500 text-gold-900 w-full border bg-white px-4 py-3 pt-4 focus:ring-1 focus:outline-none"
          />
        </div>
      </div>
      <div class="relative">
        <label
          class="text-gold-900/70 absolute -top-2 left-3 bg-white px-2 text-sm"
        >
          {{ formTranslations.message }}
        </label>
        <textarea
          rows="4"
          class="border-gold-100 focus:border-gold-500 text-gold-900 w-full border bg-white px-4 py-3 pt-4 focus:ring-1 focus:outline-none"
        ></textarea>
      </div>
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

// Reactive computed object for all form translations
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
