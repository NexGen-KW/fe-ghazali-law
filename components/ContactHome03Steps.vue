<template>
  <section class="flex w-full flex-col items-center px-2">
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="ltr:font-marcellus px-8 text-center text-3xl whitespace-nowrap text-neutral-900"
        >
          {{ $t('contactPage.stepsTitle') }}
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
    </div>
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
      <div
        v-for="step in steps"
        :key="step.title"
        class="custom-card relative flex min-h-[180px] items-start bg-white p-8"
      >
        <div
          class="flex h-full flex-col items-center justify-center ltr:mr-6 rtl:ml-6"
        >
          <Icon :name="step.icon" size="40" class="text-[#3A3321]" />
        </div>
        <div class="flex-1 ltr:border-l ltr:pl-6 rtl:border-r rtl:pr-6">
          <div class="text-gold-700 mb-1 text-start text-lg font-medium">
            {{ $t('Step') }} {{ step.number }}
          </div>
          <div
            class="ltr:font-marcellus mb-1 text-start text-2xl text-[#3A3321]"
          >
            {{ step.title }}
          </div>
          <div class="text-start text-base text-neutral-700">
            {{ step.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from '#imports';
import { computed } from 'vue';

const { t } = useI18n();

const steps = computed(() => [
  {
    number: 1,
    icon: 'mdi:calendar-outline',
    title: t('contactPage.steps.0.title'),
    description: t('contactPage.steps.0.description'),
  },
  {
    number: 2,
    icon: 'mdi:account-question-outline',
    title: t('contactPage.steps.1.title'),
    description: t('contactPage.steps.1.description'),
  },
  {
    number: 3,
    icon: 'mdi:gavel',
    title: t('contactPage.steps.2.title'),
    description: t('contactPage.steps.2.description'),
  },
  {
    number: 4,
    icon: 'mdi:check-circle-outline',
    title: t('contactPage.steps.3.title'),
    description: t('contactPage.steps.3.description'),
  },
]);
</script>

<style scoped>
.custom-card {
  background: #f7f7f8;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
