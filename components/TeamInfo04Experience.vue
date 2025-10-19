<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

defineProps<{ member?: { experience?: string; experience_ar?: string } }>();
</script>

<template>
  <section
    v-if="
      (locale === 'ar' ? member?.experience_ar : member?.experience) ||
      member?.experience
    "
    class="flex w-full flex-col items-center px-2 py-12"
  >
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="font-marcellus px-8 text-center text-3xl whitespace-nowrap text-neutral-900"
        >
          {{ t('team.professionalExperience') }}
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
      <div class="mx-auto w-full max-w-[1140px] px-4">
        <p
          v-for="(para, idx) in (
            (locale === 'ar' ? member?.experience_ar : member?.experience) ||
            member?.experience ||
            ''
          ).split(/\n\n+/)"
          :key="idx"
          class="mb-6 text-lg text-neutral-700"
        >
          {{ para }}
        </p>
      </div>
    </div>
  </section>
</template>
