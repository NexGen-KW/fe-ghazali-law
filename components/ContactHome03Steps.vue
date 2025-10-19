<template>
  <section class="flex w-full flex-col items-center px-2 py-12">
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="font-marcellus px-8 text-center text-3xl whitespace-nowrap text-neutral-900"
        >
          {{ $t('contactSteps.heading') }}
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
    </div>
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
      <div
        v-for="step in steps"
        :key="step.key"
        class="custom-card relative flex min-h-[180px] items-start bg-white p-8"
      >
        <div class="mr-6 flex h-full flex-col items-center justify-center">
          <Icon :name="step.icon" size="40" class="text-[#3A3321]" />
        </div>
        <div class="flex-1 border-l pl-6">
          <div class="text-gold-700 mb-1 text-lg font-medium">
            {{ $t('contactSteps.stepLabel') }} {{ step.number }}
          </div>
          <div class="font-marcellus mb-1 text-2xl text-[#3A3321]">
            {{ $t(step.titleKey) }}
          </div>
          <div class="text-base text-neutral-700">
            {{ $t(step.descriptionKey) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const steps = [
  {
    key: 'step1',
    number: 1,
    icon: 'mdi:calendar-outline',
    titleKey: 'contactSteps.step1.title',
    descriptionKey: 'contactSteps.step1.description',
  },
  {
    key: 'step2',
    number: 2,
    icon: 'mdi:account-question-outline',
    titleKey: 'contactSteps.step2.title',
    descriptionKey: 'contactSteps.step2.description',
  },
  {
    key: 'step3',
    number: 3,
    icon: 'mdi:gavel',
    titleKey: 'contactSteps.step3.title',
    descriptionKey: 'contactSteps.step3.description',
  },
  {
    key: 'step4',
    number: 4,
    icon: 'mdi:check-circle-outline',
    titleKey: 'contactSteps.step4.title',
    descriptionKey: 'contactSteps.step4.description',
  },
];
</script>

<style scoped>
.custom-card {
  background: #f7f7f8;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
